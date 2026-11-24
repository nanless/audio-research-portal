'use strict';

// Shared pure-Node corpus loader for pre-Hugo build scripts (related-graph, sota-hubs)
// and post-Hugo signal exporters. Strictly read-only, zero external npm dependencies,
// zero network calls, and faithful to Hugo's tag_page_proof / research_metadata /
// research_identity / withheld-tag suppression semantics.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const protocols = require('../../assets/js/protocol-registry');
const fullsitePack = require('./fullsite-tag-pack');

const ALL_FACETS = Object.freeze([
  'task', 'scientific_topic', 'method', 'model_family',
  'research_focus', 'artifact', 'application', 'setting', 'signal'
]);
const ALL_FACETS_SET = new Set(ALL_FACETS);
const ARXIV_ID_RE = /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/;
const CONF_PAPER_ID_RE = /^conference:[^\s\x00-\x1f\x7f]+$/;
const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

function sha256(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function readJsonIfRegular(file) {
  if (!fs.existsSync(file)) return null;
  const st = fs.lstatSync(file);
  if (!st.isFile() || st.isSymbolicLink()) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (_) {
    return null;
  }
}

function parseBasePath(repoRoot) {
  const cfgFile = path.join(repoRoot, 'hugo.yaml');
  if (fs.existsSync(cfgFile)) {
    try {
      const text = fs.readFileSync(cfgFile, 'utf8');
      const m = text.match(/^baseURL:\s*(.+)$/m);
      if (m) {
        let raw = m[1].trim();
        if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) {
          raw = raw.slice(1, -1);
        }
        const parsed = new URL(raw);
        let p = parsed.pathname || '/';
        if (!p.startsWith('/')) p = '/' + p;
        if (!p.endsWith('/')) p += '/';
        return p;
      }
    } catch (_) { /* fall through */ }
  }
  return '/audio-paper-digest-blog/';
}

const RELEVANT_FM_KEYS = new Set([
  'title', 'date', 'draft', 'slug', 'url', 'tags', 'categories', 'description',
  'paper_digest_page_type', 'paper_digest_arxiv_id', 'paper_digest_paper_id',
  'paper_digest_source_kind', 'paper_digest_reader_title', 'paper_digest_original_title',
  'paper_digest_one_sentence', 'paper_digest_score', 'paper_digest_primary_task',
  'paper_digest_primary_method',
  'paper_digest_tags_contract', 'paper_digest_tags_selection_contract',
  'paper_digest_tags_schema_fingerprint', 'paper_digest_tags_registry_version',
  'paper_digest_tags_registry_sha256', 'paper_digest_tags_concepts', 'paper_digest_tags_scope',
  'paper_digest_taxonomy_contract', 'paper_digest_taxonomy_selection_contract',
  'paper_digest_taxonomy_schema_fingerprint', 'paper_digest_taxonomy_registry_version',
  'paper_digest_taxonomy_registry_sha256', 'paper_digest_taxonomy_concepts', 'paper_digest_taxonomy_scope'
]);

function unquoteYamlScalar(raw) {
  const s = String(raw ?? '').trim();
  if (s.length >= 2 && s[0] === '"' && s[s.length - 1] === '"') {
    if (s.indexOf('\\') < 0) return s.slice(1, -1);
    try { return JSON.parse(s); } catch (_) { return s.slice(1, -1); }
  }
  if (s.length >= 2 && s[0] === "'" && s[s.length - 1] === "'") {
    const inner = s.slice(1, -1);
    return inner.indexOf("''") < 0 ? inner : inner.replace(/''/g, "'");
  }
  return s;
}

function parseInlineYamlValue(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (s === 'null' || s === '~') return null;
  if ((s.startsWith('[') && s.endsWith(']')) || (s.startsWith('{') && s.endsWith('}'))) {
    try { return JSON.parse(s); } catch (_) { /* YAML flow sequence fallback below */ }
  }
  if (s.startsWith('[') && s.endsWith(']')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return [];
    const items = [];
    let cur = '';
    let quote = '';
    let escaped = false;
    for (let i = 0; i < inner.length; i += 1) {
      const ch = inner[i];
      if (escaped) { cur += ch; escaped = false; continue; }
      if (ch === '\\' && quote === '"') { cur += ch; escaped = true; continue; }
      if (quote) {
        cur += ch;
        if (ch === quote) quote = '';
      } else if (ch === '"' || ch === "'") {
        quote = ch;
        cur += ch;
      } else if (ch === ',') {
        items.push(unquoteYamlScalar(cur));
        cur = '';
      } else {
        cur += ch;
      }
    }
    items.push(unquoteYamlScalar(cur));
    return items;
  }
  if (/^-?[0-9]+(?:\.[0-9]+)?$/.test(s)) return Number(s);
  return unquoteYamlScalar(s);
}

const RES_MARKERS = [
  Buffer.from('开源与复现资源', 'utf8'),
  Buffer.from('论文资源', 'utf8'),
  Buffer.from('开源资源', 'utf8')
];
const NL_DASH_BUF = Buffer.from('\n---', 'utf8');
const H2_NL_BUF = Buffer.from('\n## ', 'utf8');

function splitFrontMatterBuffer(rawBytes) {
  // Fast UTF-8 byte boundary check matching /^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/
  if (rawBytes.length < 7) return null;
  if (rawBytes[0] !== 0x2d || rawBytes[1] !== 0x2d || rawBytes[2] !== 0x2d) return null;
  let fmStart = 3;
  if (rawBytes[fmStart] === 0x0d && rawBytes[fmStart + 1] === 0x0a) fmStart += 2;
  else if (rawBytes[fmStart] === 0x0a) fmStart += 1;
  else return null;

  let searchFrom = fmStart - 1;
  while (searchFrom < rawBytes.length) {
    const idx = rawBytes.indexOf(NL_DASH_BUF, searchFrom);
    if (idx < 0) return null;
    const afterDash = idx + 4;
    if (afterDash === rawBytes.length) {
      const fmEnd = (idx > fmStart && rawBytes[idx - 1] === 0x0d) ? idx - 1 : idx;
      return { fmText: rawBytes.subarray(fmStart, fmEnd).toString('utf8'), bodyBuf: rawBytes.subarray(afterDash) };
    }
    if (rawBytes[afterDash] === 0x0a) {
      const fmEnd = (idx > fmStart && rawBytes[idx - 1] === 0x0d) ? idx - 1 : idx;
      return { fmText: rawBytes.subarray(fmStart, fmEnd).toString('utf8'), bodyBuf: rawBytes.subarray(afterDash + 1) };
    }
    if (rawBytes[afterDash] === 0x0d && rawBytes[afterDash + 1] === 0x0a) {
      const fmEnd = (idx > fmStart && rawBytes[idx - 1] === 0x0d) ? idx - 1 : idx;
      return { fmText: rawBytes.subarray(fmStart, fmEnd).toString('utf8'), bodyBuf: rawBytes.subarray(afterDash + 2) };
    }
    searchFrom = idx + 1;
  }
  return null;
}

function parseFrontMatterText(fmText) {
  const trimmed = fmText.trim();
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    try {
      const obj = JSON.parse(trimmed);
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        const params = Object.create(null);
        for (const [k, v] of Object.entries(obj)) {
          if (!DANGEROUS_KEYS.has(k)) params[k] = v;
        }
        return params;
      }
    } catch (_) { /* fall back to line parser */ }
  }
  const params = Object.create(null);
  const lines = fmText.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const colon = line.indexOf(':');
    if (colon <= 0) continue;
    const key = line.slice(0, colon);
    if (!RELEVANT_FM_KEYS.has(key)) continue;
    const rest = line.slice(colon + 1).trim();
    if (rest) {
      params[key] = parseInlineYamlValue(rest);
      continue;
    }
    const list = [];
    let j = i + 1;
    for (; j < lines.length; j += 1) {
      const child = lines[j];
      if (child.length > 0 && child[0] !== ' ' && child[0] !== '\t') break;
      const itemMatch = child.match(/^\s+-\s*(.*)$/);
      if (itemMatch) {
        list.push(parseInlineYamlValue(itemMatch[1]));
      } else if (child.trim()) {
        break;
      }
    }
    params[key] = list;
    i = j - 1;
  }
  return params;
}

function parseMarkdownPage(rawBytes) {
  const buf = Buffer.isBuffer(rawBytes) ? rawBytes : Buffer.from(String(rawBytes || ''), 'utf8');
  const split = splitFrontMatterBuffer(buf);
  if (!split) {
    return { params: Object.create(null), bodyBuf: buf, body: buf.toString('utf8'), hasFrontMatter: false };
  }
  const params = parseFrontMatterText(split.fmText);
  return { params, bodyBuf: split.bodyBuf, hasFrontMatter: true };
}

function loadCatalogAssets(repoRoot) {
  const dataDir = path.join(repoRoot, 'data');
  const hasNewSnap = fs.existsSync(path.join(dataDir, 'tag-catalog-snapshot.json'));
  const hasNewVers = fs.existsSync(path.join(dataDir, 'tag-catalog-versions.json'));
  const origSnapshot = readJsonIfRegular(path.join(dataDir, 'taxonomy-registry.json'));
  const origVersions = readJsonIfRegular(path.join(dataDir, 'taxonomy-catalog.json'));
  const newSnapshot = hasNewSnap && hasNewVers ? readJsonIfRegular(path.join(dataDir, 'tag-catalog-snapshot.json')) : null;
  const newVersions = hasNewSnap && hasNewVers ? readJsonIfRegular(path.join(dataDir, 'tag-catalog-versions.json')) : null;
  const snapshot = newSnapshot || origSnapshot;
  const versions = newVersions || origVersions;

  const indexConcepts = (snap) => {
    const m = new Map();
    if (snap && Array.isArray(snap.concepts)) {
      for (const node of snap.concepts) {
        if (node && typeof node.id === 'string' && node.id) m.set(node.id, node);
      }
    }
    return m;
  };

  const currentById = indexConcepts(snapshot);
  const snapshotsBySha = new Map();
  for (const snap of [origSnapshot, newSnapshot]) {
    if (snap && typeof snap.registrySha256 === 'string' && snap.registrySha256) {
      snapshotsBySha.set(snap.registrySha256, indexConcepts(snap));
    }
  }
  for (const ver of [origVersions, newVersions]) {
    if (ver && Array.isArray(ver.snapshots)) {
      for (const snap of ver.snapshots) {
        if (!snap || typeof snap.registrySha256 !== 'string' || !Array.isArray(snap.concepts)) continue;
        snapshotsBySha.set(snap.registrySha256, indexConcepts(snap));
      }
    }
  }
  const hasOriginalVersions = Boolean(origVersions && origVersions.contract);
  const origById = indexConcepts(origSnapshot);
  return { snapshot, versions, currentById, origById, hasOriginalVersions, snapshotsBySha };
}

function loadSupplements(repoRoot) {
  const dataDir = path.join(repoRoot, 'data');
  const legacyHistory = readJsonIfRegular(path.join(dataDir, 'taxonomy-history.json'));
  const tagHistory = readJsonIfRegular(path.join(dataDir, 'tag-history.json'));
  const v2History = readJsonIfRegular(path.join(dataDir, 'taxonomy-history-v2.json'));
  const controlledHistory = readJsonIfRegular(path.join(dataDir, 'current-page-taxonomy-history-v2.json'));
  const v3History = readJsonIfRegular(path.join(dataDir, 'taxonomy-history-v3.json'));

  let fullsiteRecords = null;
  let fullsiteClassifications = null;
  const fullsiteRaw = readJsonIfRegular(path.join(dataDir, 'fullsite-taxonomy-history.json'));
  if (fullsiteRaw) {
    if (fullsiteRaw.contract === fullsitePack.CONTRACT && Array.isArray(fullsiteRaw.shards)) {
      // Fast projection read of verified packed shards (full cryptographic verification runs in verify-fullsite-tags.js).
      fullsiteRecords = Object.create(null);
      fullsiteClassifications = Object.create(null);
      for (const desc of fullsiteRaw.shards) {
        if (!desc || typeof desc.path !== 'string') continue;
        const shardFile = path.join(repoRoot, 'static', desc.path);
        const shard = readJsonIfRegular(shardFile);
        if (!shard || !Array.isArray(shard.papers)) continue;
        for (const paper of shard.papers) {
          if (!paper || typeof paper.paperId !== 'string') continue;
          fullsiteClassifications[paper.paperId] = {
            classificationRecord: paper.classificationRecord || null
          };
          if (paper.pages && typeof paper.pages === 'object') {
            for (const [pagePath, pageRec] of Object.entries(paper.pages)) {
              if (!DANGEROUS_KEYS.has(pagePath)) fullsiteRecords[pagePath] = pageRec;
            }
          }
        }
      }
    } else if (fullsiteRaw.contract === 'fullsite-source-taxonomy-audit-supplement-v1') {
      fullsiteRecords = fullsiteRaw.records || null;
      fullsiteClassifications = fullsiteRaw.classificationRecords || null;
    }
  }

  const fullsiteEligiblePaths = new Set();
  const fullsiteWithheldPaths = new Set();
  let hasFullsiteSelection = false;
  const fullsiteSel = readJsonIfRegular(path.join(dataDir, 'fullsite-taxonomy-publication-selection.json'));
  if (fullsiteSel && fullsiteSel.contract === 'fullsite-exact-native-publication-selection-v1') {
    hasFullsiteSelection = true;
    for (const item of fullsiteSel.eligible || []) {
      for (const p of item.pages || []) {
        if (p && p.pagePath) fullsiteEligiblePaths.add(p.pagePath);
      }
    }
    for (const item of fullsiteSel.withheld || []) {
      const tuple = item && item.tuple;
      for (const p of (tuple && tuple.pages) || []) {
        if (p && p.pagePath) fullsiteWithheldPaths.add(p.pagePath);
      }
    }
  }

  const oldV2WithheldByPath = new Map();
  const oldHolds = readJsonIfRegular(path.join(dataDir, 'taxonomy-old-v2-publication-holds.json'));
  if (oldHolds && oldHolds.contract === 'root-source-qualified-exact-old-v2-publication-holds-v1') {
    for (const row of oldHolds.rows || []) {
      const pages = row && row.originalTuple && row.originalTuple.pages;
      if (!Array.isArray(pages)) continue;
      for (const p of pages) {
        if (p && p.pagePath) {
          oldV2WithheldByPath.set(p.pagePath, {
            paperId: row.paperId || '',
            pageSha256: p.pageSha256 || '',
            bodySha256: p.bodySha256 || ''
          });
        }
      }
    }
  }

  const r6Records = new Map();
  const r6History = readJsonIfRegular(path.join(dataDir, 'fullsite-r6-corrections-history.json'));
  if (r6History && r6History.contract === 'fullsite-source-taxonomy-audit-supplement-v1' && r6History.records) {
    for (const [pagePath, rec] of Object.entries(r6History.records)) {
      r6Records.set(pagePath, {
        record: rec,
        audit: (r6History.classificationRecords && r6History.classificationRecords[rec.classificationRef]) || null
      });
    }
  }

  const exact1028Records = new Map();
  const exact1028 = readJsonIfRegular(path.join(dataDir, 'exact1028-qualified-classification.json'));
  if (exact1028 && exact1028.contract === 'exact1028-independent-review-qualified-classification-v1' && Array.isArray(exact1028.pages)) {
    const decision = (exact1028.originalPrimary && exact1028.originalPrimary.decision) || {};
    for (const p of exact1028.pages) {
      if (p && p.pagePath) {
        exact1028Records.set(p.pagePath, {
          ...decision,
          ...p,
          paperId: exact1028.paperId,
          contract: 'paper-taxonomy-flat-tags-compat-v1',
          registrySha256: '910a94021b085a190abcd5fd9603af3240160f9417293d5a90158bc4ef900d30',
          registryVersion: 'paper-taxonomy-v2',
          classificationContract: exact1028.contract,
          evidenceContract: exact1028.contract,
          source: exact1028.source
        });
      }
    }
  }

  const identityHistory = readJsonIfRegular(path.join(dataDir, 'identity-history.json'));
  const identityCurrent = readJsonIfRegular(path.join(dataDir, 'identity-current-page-history.json'));

  return {
    legacyHistory: legacyHistory && legacyHistory.contract === 'historical-direct-taxonomy-supplement-v1' ? legacyHistory.records || {} : {},
    tagHistory: tagHistory && tagHistory.contract === 'historical-direct-tag-supplement-v2' ? tagHistory.records || {} : {},
    v2History: v2History && v2History.contract === 'historical-source-taxonomy-supplement-v2' ? v2History.records || {} : {},
    controlledHistory: controlledHistory && controlledHistory.contract === 'historical-current-page-source-taxonomy-supplement-v2' ? controlledHistory.records || {} : {},
    v3History: v3History && v3History.contract === 'historical-source-taxonomy-supplement-v3' ? v3History.records || {} : {},
    fullsiteRecords: fullsiteRecords || {},
    fullsiteClassifications: fullsiteClassifications || {},
    hasFullsiteSelection,
    fullsiteEligiblePaths,
    fullsiteWithheldPaths,
    oldV2WithheldByPath,
    r6Records,
    exact1028Records,
    identityHistory: identityHistory && identityHistory.records ? identityHistory.records : {},
    identityCurrent: identityCurrent && identityCurrent.records ? identityCurrent.records : {}
  };
}

const FLAT_TAG_HEADER_CACHE = new Map();

function isFlatTagContractValid(proof) {
  if (!proof || typeof proof !== 'object' || !proof.contract) return false;
  const fp = proof.schemaFingerprint === undefined ? '' : String(proof.schemaFingerprint);
  const cacheKey = `${proof.contract}\0${proof.schemaFingerprint === undefined ? 'undef' : fp}`;
  let ok = FLAT_TAG_HEADER_CACHE.get(cacheKey);
  if (ok !== undefined) return ok;
  const header = { contract: proof.contract };
  if (proof.schemaFingerprint !== undefined) header.schemaFingerprint = proof.schemaFingerprint;
  ok = protocols.hasValidHeader(header, 'paper-tag-flat-tags');
  FLAT_TAG_HEADER_CACHE.set(cacheKey, ok);
  return ok;
}

function resolveValidConcepts(proof, catalog) {
  if (!isFlatTagContractValid(proof)) return [];
  const shaKey = typeof proof.registrySha256 === 'string' ? proof.registrySha256.trim() : '';
  let snapById = null;
  if (shaKey) {
    snapById = catalog.snapshotsBySha.get(shaKey) || null;
  } else if (!catalog.hasOriginalVersions) {
    snapById = catalog.origById;
  }
  if (!snapById || snapById.size === 0) return [];
  const out = [];
  const seen = new Set();
  const list = Array.isArray(proof.concepts) ? proof.concepts : [];
  for (const rec of list) {
    if (!rec || typeof rec !== 'object' || typeof rec.id !== 'string') continue;
    if (seen.has(rec.id)) continue;
    const node = snapById.get(rec.id);
    const current = catalog.currentById.get(rec.id);
    if (!node || !current) continue;
    if (current.facet !== node.facet) continue;
    if ((current.status || 'active') === 'deprecated' || (node.status || 'active') === 'deprecated') continue;
    if (node.id !== rec.id || node.facet !== rec.facet || node.zh !== rec.label) continue;
    seen.add(rec.id);
    out.push({
      id: node.id,
      facet: node.facet,
      zh: node.zh,
      en: node.en || '',
      ancestorIds: Array.isArray(current.ancestorIds) ? current.ancestorIds : (Array.isArray(node.ancestorIds) ? node.ancestorIds : [])
    });
  }
  return out;
}

const PRINTABLE_ASCII_RE = /^[\x21-\x7e]+$/;
const RFC2396_UNSAFE_RE = /[<>"{}|\\^`\[\]]/;
const RFC1123_HOST_RE = /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)*[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;
const IPV4_HOST_RE = /^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/;
const IPV6_HOST_RE = /^\[[0-9A-Fa-f:]+\]$/;
const RESOURCE_SECTION_HEADING_RE = /^##[ \t]+(?:🔗[ \t]*)?(?:开源与复现资源|论文资源|开源资源)[ \t]*$/;

function isStrictClientHttpsUrl(raw) {
  if (typeof raw !== 'string' || !raw || !PRINTABLE_ASCII_RE.test(raw)) return false;
  let u;
  try { u = new URL(raw); } catch (_) { return false; }
  if (u.protocol !== 'https:' || !u.hostname || u.username || u.password) return false;
  if (u.hostname.includes('_')) return false;
  if (!RFC1123_HOST_RE.test(u.hostname) && !IPV4_HOST_RE.test(u.hostname) && !IPV6_HOST_RE.test(u.hostname)) {
    return false;
  }
  const tail = `${u.pathname}${u.search}${u.hash}`;
  if (RFC2396_UNSAFE_RE.test(tail)) return false;
  if (!IPV6_HOST_RE.test(u.hostname) && RFC2396_UNSAFE_RE.test(raw)) return false;
  return true;
}

function cleanHttpsUrls(text) {
  const urls = [];
  const seen = new Set();
  for (const m of text.matchAll(/https:\/\/[^\s<>"'`)\]]+/g)) {
    const raw = m[0].replace(/[.,;!?。，；！？]+$/, '');
    if (!isStrictClientHttpsUrl(raw)) continue;
    const href = new URL(raw).href;
    if (!isStrictClientHttpsUrl(href)) continue;
    if (!seen.has(href)) {
      seen.add(href);
      urls.push(href);
    }
  }
  return urls;
}

function extractResourceSignalsFromBuffer(bodyBuf) {
  const result = {
    hasCode: false,
    hasModel: false,
    hasDataset: false,
    hasDemo: false,
    hasProjectPage: false,
    codeUrls: [],
    demoUrls: [],
    projectUrls: []
  };
  if (!bodyBuf || bodyBuf.length === 0) return result;
  for (let i = 0; i < RES_MARKERS.length; i += 1) {
    const marker = RES_MARKERS[i];
    let from = 0;
    while (from < bodyBuf.length) {
      const pos = bodyBuf.indexOf(marker, from);
      if (pos < 0) break;
      const lineStart = Math.max(0, bodyBuf.lastIndexOf(0x0a, pos) + 1);
      if (bodyBuf[lineStart] === 0x23 && bodyBuf[lineStart + 1] === 0x23 && (bodyBuf[lineStart + 2] === 0x20 || bodyBuf[lineStart + 2] === 0x09)) {
        let lineEnd = bodyBuf.indexOf(0x0a, pos);
        if (lineEnd < 0) lineEnd = bodyBuf.length;
        const headingLine = bodyBuf.subarray(lineStart, lineEnd).toString('utf8').replace(/\r$/, '');
        if (RESOURCE_SECTION_HEADING_RE.test(headingLine)) {
          let sliceEnd = bodyBuf.indexOf(H2_NL_BUF, lineEnd);
          if (sliceEnd < 0) sliceEnd = bodyBuf.length;
          return extractResourceSignals(bodyBuf.subarray(lineStart, sliceEnd).toString('utf8'));
        }
      }
      from = pos + marker.length;
    }
  }
  return result;
}

function extractResourceSignals(body) {
  const result = {
    hasCode: false,
    hasModel: false,
    hasDataset: false,
    hasDemo: false,
    hasProjectPage: false,
    codeUrls: [],
    demoUrls: [],
    projectUrls: []
  };
  if (!body || (!body.includes('开源与复现资源') && !body.includes('论文资源') && !body.includes('开源资源'))) {
    return result;
  }
  const headMatch = body.match(/^##[ \t]+(?:🔗[ \t]*)?(?:开源与复现资源|论文资源|开源资源)[ \t]*$/m);
  if (!headMatch) return result;
  const afterHead = body.slice(headMatch.index + headMatch[0].length);
  const nextH2 = afterHead.search(/^##[ \t]+/m);
  const sec = nextH2 >= 0 ? afterHead.slice(0, nextH2) : afterHead;
  const codeSet = new Set();
  const demoSet = new Set();
  const projSet = new Set();

  for (const line of sec.match(/^-[ \t]+[^\n]+/gm) || []) {
    const clean = line.replace(/^-[ \t]+/, '').replace(/\*\*/g, '').trim();
    if (/^(?:第三方资源|论文所列链接|论文中引用的开源项目)[：:]/.test(clean)) continue;
    const urls = cleanHttpsUrls(clean);
    if (urls.length === 0) continue;
    const unavailable = clean.includes('链接不可用') || clean.includes('暂时无法访问');
    if (unavailable) continue;

    if (/^(?:代码|开源代码|项目代码|项目与代码)[^：:]{0,16}[：:]/.test(clean)
        && !/(?:未提及代码链接|暂未开源|代码未公开|仓库仅见文档框架|未检出代码)/.test(clean)) {
      result.hasCode = true;
      for (const u of urls) if (codeSet.size < 8) codeSet.add(u);
    }
    if (/^(?:演示资源|Demo|在线演示|试听)[^：:]{0,16}[：:]/i.test(clean)) {
      const isStdDemo = /^演示资源[：:]/.test(clean);
      if (!isStdDemo || clean.includes('链接可访问')) {
        if (!/(?:未提及|暂未公开|未公开|未发布|未提供|暂未提供|无演示)/.test(clean)) {
          result.hasDemo = true;
          for (const u of urls) if (demoSet.size < 8) demoSet.add(u);
        }
      }
    }
    if (/^(?:模型相关资源|模型权重|预训练权重|预训练模型|权重)[^：:]{0,16}[：:]/.test(clean)
        && !/(?:未提及|暂未公开|未公开|未发布|未提供|暂未提供|未开源)/.test(clean)) {
      result.hasModel = true;
    }
    if (/^(?:数据相关资源|数据集|评测集|语料库|基准数据)[^：:]{0,16}[：:]/.test(clean)
        && !/(?:未提及|暂未公开|未公开|未发布|未提供|暂未提供|未开源)/.test(clean)) {
      result.hasDataset = true;
    }
    if (/^(?:项目主页|论文主页|论文首页资源|项目页面|Project\s*Page)[^：:]{0,16}[：:]/i.test(clean)
        && !/(?:未提及|暂未公开|未公开|未发布|未提供|暂未提供)/.test(clean)) {
      result.hasProjectPage = true;
      for (const u of urls) if (projSet.size < 8) projSet.add(u);
    }
  }

  result.codeUrls = [...codeSet];
  result.demoUrls = [...demoSet];
  result.projectUrls = [...projSet];
  return result;
}

const VENUE_NORMALIZE = Object.freeze({
  icassp: 'ICASSP',
  interspeech: 'Interspeech',
  neurips: 'NeurIPS',
  nips: 'NeurIPS',
  iclr: 'ICLR',
  icml: 'ICML',
  acl: 'ACL',
  emnlp: 'EMNLP',
  naacl: 'NAACL',
  aaai: 'AAAI',
  cvpr: 'CVPR',
  eusipco: 'EUSIPCO',
  waspaa: 'WASPAA',
  asru: 'ASRU',
  slt: 'SLT',
  ismir: 'ISMIR',
  speechprosody: 'Speech Prosody',
  nime: 'NIME',
  dafx: 'DAFx',
  icmc: 'ICMC',
  odyssey: 'Odyssey',
  iwslt: 'IWSLT',
  eacl: 'EACL',
  chime: 'CHiME',
  jep: 'JEP'
});

function resolveVenue({ paperId, sourceKind, arxivId, categories, baseName }) {
  if (typeof paperId === 'string' && paperId.startsWith('conference:')) {
    const code = paperId.split(':')[1]?.toLowerCase() || '';
    if (VENUE_NORMALIZE[code]) return VENUE_NORMALIZE[code];
    if (code) return code.toUpperCase();
  }
  const cats = Array.isArray(categories) ? categories : [];
  for (const c of cats) {
    const m = String(c || '').toLowerCase().match(/^(icassp|interspeech|neurips|iclr|icml|acl|emnlp|naacl|aaai|cvpr|eusipco|waspaa|asru|slt|ismir|speechprosody|nime|dafx|icmc|odyssey|iwslt|eacl|chime|jep)(?:-20\d{2})?$/);
    if (m && VENUE_NORMALIZE[m[1]]) return VENUE_NORMALIZE[m[1]];
  }
  if (baseName) {
    const bm = baseName.toLowerCase().match(/^conference-([a-z0-9-]+)-20\d{2}/);
    if (bm && VENUE_NORMALIZE[bm[1]]) return VENUE_NORMALIZE[bm[1]];
  }
  if (sourceKind === 'arxiv' || arxivId) return 'arXiv';
  if (sourceKind === 'conference') return '其他会议';
  return 'arXiv';
}

function normalizeDateStr(value) {
  if (value === undefined || value === null) return '';
  const s = String(value).trim();
  const m = s.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : '';
}

function loadResearchCorpus(repoRoot = process.cwd(), options = {}) {
  const root = path.resolve(repoRoot);
  const basePath = parseBasePath(root);
  const catalog = loadCatalogAssets(root);
  const supplements = loadSupplements(root);
  const postsDir = path.join(root, 'content/posts');
  const entries = fs.existsSync(postsDir) ? fs.readdirSync(postsDir, { withFileTypes: true }) : [];

  const paperPages = [];
  const allRegularPostCount = { paper: 0, daily: 0, conference: 0 };

  const loadResources = options.includeResources !== false;
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
    const fullPath = path.join(postsDir, entry.name);
    const rawBytes = fs.readFileSync(fullPath);
    const { params, bodyBuf } = parseMarkdownPage(rawBytes);
    if (params.draft === true || params.draft === 'true') continue;

    const baseName = entry.name.slice(0, -3);
    const relKey = `content/posts/${entry.name}`;
    const explicitType = typeof params.paper_digest_page_type === 'string' ? params.paper_digest_page_type : '';

    let pageType = 'paper';
    if (explicitType === 'paper') {
      pageType = 'paper';
    } else if (
      /^(?:icassp|iclr|icml)[0-9]{4}-(?:summary|task-.+)$/.test(baseName)
      || /^conference-[a-z0-9-]+-20[0-9]{2}(?:-task-.+)?$/.test(baseName)
      || explicitType === 'conference'
    ) {
      pageType = 'conference';
    } else if (explicitType === 'index' || /^\d{4}-\d{2}-\d{2}$/.test(baseName)) {
      pageType = 'daily';
    }

    allRegularPostCount[pageType] += 1;
    if (pageType !== 'paper') continue;

    // RelPermalink matching Hugo's URL construction for content/posts/<baseName>.md
    let slugPart = baseName.toLowerCase();
    if (typeof params.slug === 'string' && params.slug.trim()) {
      slugPart = params.slug.trim().replace(/^\/+|\/+$/g, '');
    }
    let relPermalink = `${basePath}posts/${slugPart}/`;
    if (typeof params.url === 'string' && params.url.trim()) {
      const rawUrl = params.url.trim();
      const cleaned = rawUrl.replace(/^\/+/, '').replace(/\/+$/, '');
      relPermalink = `${basePath}${cleaned}/`;
    }

    // Lazy SHA calculation ONLY when the page appears in any supplement table
    let cachedPageSha = null;
    let cachedBodySha = null;
    const matchesSha = (rec) => {
      if (!rec || typeof rec !== 'object') return false;
      if (!rec.pageSha256 || !rec.bodySha256) return false;
      if (cachedPageSha === null) cachedPageSha = sha256(rawBytes);
      if (cachedPageSha !== rec.pageSha256) return false;
      if (cachedBodySha === null) cachedBodySha = sha256(bodyBuf);
      return cachedBodySha === rec.bodySha256;
    };

    // 1. Resolve tag proof following exact tag_page_proof.html precedence
    const hasNewTags = ['contract', 'selection_contract', 'registry_version', 'registry_sha256', 'concepts', 'scope']
      .some((sfx) => Object.prototype.hasOwnProperty.call(params, `paper_digest_tags_${sfx}`));
    const prefix = hasNewTags ? 'paper_digest_tags_' : 'paper_digest_taxonomy_';
    let proof = {
      contract: typeof params[`${prefix}contract`] === 'string' ? params[`${prefix}contract`] : '',
      registrySha256: typeof params[`${prefix}registry_sha256`] === 'string' ? params[`${prefix}registry_sha256`] : '',
      concepts: Array.isArray(params[`${prefix}concepts`]) ? params[`${prefix}concepts`] : [],
      primaryTaskLabel: typeof params.paper_digest_primary_task === 'string' ? params.paper_digest_primary_task : '',
      primaryMethodLabel: typeof params.paper_digest_primary_method === 'string' ? params.paper_digest_primary_method : ''
    };
    if (Object.prototype.hasOwnProperty.call(params, `${prefix}schema_fingerprint`)) {
      proof.schemaFingerprint = params[`${prefix}schema_fingerprint`];
    }

    const explicitArxivRaw = typeof params.paper_digest_arxiv_id === 'string' ? params.paper_digest_arxiv_id.trim() : '';
    const explicitPaperIdRaw = typeof params.paper_digest_paper_id === 'string' ? params.paper_digest_paper_id.trim() : '';
    let explicitId = explicitPaperIdRaw;
    if (explicitArxivRaw) {
      explicitId = `arxiv:${explicitArxivRaw.replace(/v[1-9][0-9]*$/, '')}`;
    }

    // Historical v1 / tag-history (only when no frontmatter contract)
    if (!proof.contract) {
      const rec = supplements.tagHistory[relKey] || supplements.legacyHistory[relKey];
      if (rec && matchesSha(rec)) {
        proof = { ...rec, contract: 'paper-taxonomy-flat-tags-compat-v1', evidenceContract: supplements.tagHistory[relKey] ? 'historical-direct-tag-supplement-v2' : 'historical-direct-taxonomy-supplement-v1' };
      }
    }

    // Historical v2
    const v2Rec = supplements.v2History[relKey];
    if (v2Rec && matchesSha(v2Rec)) {
      const okId = (!proof.paperId || proof.paperId === v2Rec.paperId) && (!explicitId || explicitId === v2Rec.paperId);
      if (okId) {
        proof = { ...v2Rec, contract: 'paper-taxonomy-flat-tags-compat-v1', evidenceContract: 'historical-source-taxonomy-supplement-v2' };
      }
    }

    // Controlled current-page v2
    const ctrlRec = supplements.controlledHistory[relKey];
    if (ctrlRec && matchesSha(ctrlRec)) {
      const okId = (!proof.paperId || proof.paperId === ctrlRec.paperId) && (!explicitId || explicitId === ctrlRec.paperId);
      if (okId) {
        proof = { ...ctrlRec, contract: 'paper-taxonomy-flat-tags-compat-v1', evidenceContract: 'historical-current-page-source-taxonomy-supplement-v2' };
      }
    }

    // Historical v3 (no collision with v2/controlled)
    const v3Rec = supplements.v3History[relKey];
    if (v3Rec && !v2Rec && !ctrlRec && matchesSha(v3Rec)) {
      const okId = (!proof.paperId || proof.paperId === v3Rec.paperId) && (!explicitId || explicitId === v3Rec.paperId);
      if (okId) {
        proof = { ...v3Rec, contract: 'paper-taxonomy-flat-tags-compat-v1', evidenceContract: 'historical-source-taxonomy-supplement-v3' };
      }
    }

    // Fullsite audit + publication selection (including withheld!)
    const fsRec = supplements.fullsiteRecords[relKey];
    if (fsRec && matchesSha(fsRec)) {
      const audit = supplements.fullsiteClassifications[fsRec.classificationRef] || null;
      const source = audit && audit.classificationRecord ? audit.classificationRecord.source : null;
      if (supplements.hasFullsiteSelection && supplements.fullsiteWithheldPaths.has(relKey)) {
        proof = { publicationStatus: 'withheld', paperId: fsRec.paperId, source };
      } else if (!supplements.hasFullsiteSelection || supplements.fullsiteEligiblePaths.has(relKey)) {
        const okId = (!proof.paperId || proof.paperId === fsRec.paperId) && (!explicitId || explicitId === fsRec.paperId);
        if (okId) {
          proof = {
            ...fsRec,
            contract: 'paper-taxonomy-flat-tags-compat-v1',
            evidenceContract: 'fullsite-source-taxonomy-audit-supplement-v1',
            classificationContract: 'historical-source-taxonomy-classification-v3',
            source
          };
        }
      }
    }

    // Exact old V2 publication holds
    const oldHold = supplements.oldV2WithheldByPath.get(relKey);
    if (oldHold && matchesSha(oldHold)) {
      proof = { publicationStatus: 'withheld', paperId: oldHold.paperId };
    }

    // Exact R6 corrections overlay
    const r6Entry = supplements.r6Records.get(relKey);
    if (r6Entry && matchesSha(r6Entry.record)) {
      const cSource = r6Entry.audit && r6Entry.audit.classificationRecord ? r6Entry.audit.classificationRecord.source : null;
      proof = {
        ...r6Entry.record,
        contract: 'paper-taxonomy-flat-tags-compat-v1',
        evidenceContract: 'fullsite-source-taxonomy-audit-supplement-v1',
        classificationContract: 'historical-source-taxonomy-classification-v3',
        source: cSource
      };
    }

    // Exact1028 independent qualification overlay
    const ex1028 = supplements.exact1028Records.get(relKey);
    if (ex1028 && matchesSha(ex1028)) {
      proof = ex1028;
    }

    // 2. Resolve identity following exact research_metadata.html & research_identity.html
    let arxivId = '';
    let paperId = '';
    let identityStatus = 'unknown';
    let sourceKind = '';

    if (explicitArxivRaw && ARXIV_ID_RE.test(explicitArxivRaw)) {
      arxivId = explicitArxivRaw.replace(/v[1-9][0-9]*$/, '');
      identityStatus = 'verified';
      sourceKind = 'arxiv';
    }
    if (params.paper_digest_source_kind === 'conference' && CONF_PAPER_ID_RE.test(explicitPaperIdRaw)) {
      paperId = explicitPaperIdRaw;
      sourceKind = 'conference';
      identityStatus = 'verified';
    }
    if (!arxivId && sourceKind !== 'conference') {
      const slugMatch = baseName.match(/[0-9]{4}-[0-9]{4,5}$/);
      if (slugMatch) {
        arxivId = slugMatch[0].replace('-', '.');
        identityStatus = 'inferred';
        sourceKind = 'arxiv';
      }
    }

    if (proof.evidenceContract && proof.paperId) {
      paperId = proof.paperId;
      arxivId = '';
      if ((proof.source && proof.source.kind === 'arxiv-fresh-fetch')
          || (proof.evidenceContract === 'fullsite-source-taxonomy-audit-supplement-v1' && /^arxiv:[0-9]{4}\.[0-9]{4,5}$/.test(paperId))
          || /^arxiv:[0-9]{4}\.[0-9]{4,5}$/.test(paperId)) {
        arxivId = paperId.replace(/^arxiv:/, '');
        sourceKind = 'arxiv';
      } else {
        sourceKind = 'conference';
      }
      identityStatus = 'verified';
    }

    // Identity-only supplements
    const candIdentity = supplements.identityCurrent[relKey] || supplements.identityHistory[relKey];
    if (candIdentity && matchesSha(candIdentity) && candIdentity.paperId) {
      let existingId = '';
      if (identityStatus === 'verified') {
        existingId = sourceKind === 'arxiv' && arxivId ? `arxiv:${arxivId}` : paperId;
      }
      if (!existingId || existingId === candIdentity.paperId) {
        paperId = candIdentity.paperId;
        identityStatus = 'verified';
        arxivId = '';
        if (candIdentity.source && candIdentity.source.kind === 'arxiv-fresh-fetch') {
          sourceKind = 'arxiv';
          arxivId = paperId.replace(/^arxiv:/, '');
        } else {
          sourceKind = 'conference';
        }
      }
    }

    const tagPublicationStatus = proof.publicationStatus === 'withheld' ? 'withheld' : '';
    if (tagPublicationStatus === 'withheld' && proof.paperId) {
      if (!paperId || paperId === proof.paperId) {
        paperId = proof.paperId;
        identityStatus = 'verified';
        sourceKind = 'conference';
        arxivId = '';
        if (/^arxiv:[0-9]{4}\.[0-9]{4,5}$/.test(paperId)) {
          sourceKind = 'arxiv';
          arxivId = paperId.replace(/^arxiv:/, '');
        }
      }
    }

    // Research identity (exact match to layouts/partials/research_identity.html)
    let identity = `page:${relPermalink}`;
    // Client canonical ID (exact match to assets/js/tag-core.js & macOS/Android paper.id)
    let canonicalId = `page:${relPermalink}`;
    if (identityStatus === 'verified') {
      if (arxivId) {
        identity = `arxiv:${arxivId}`;
        canonicalId = `arxiv:${arxivId}`;
      } else if (paperId) {
        identity = `paper:${paperId}`;
        canonicalId = paperId;
      }
    }

    // 3. Valid concepts vs legacy tags (respecting withheld suppression!)
    const validConcepts = tagPublicationStatus === 'withheld' ? [] : resolveValidConcepts(proof, catalog);
    const legacyTags = (tagPublicationStatus !== 'withheld' && Array.isArray(params.tags))
      ? params.tags.map((t) => String(t || '').trim()).filter(Boolean)
      : [];

    // 4. Display metadata (headline, score, date, oneSentence, resources, venue)
    const title = String(params.title || '').trim();
    let headline = title;
    if (typeof params.paper_digest_reader_title === 'string' && params.paper_digest_reader_title.trim()) {
      headline = params.paper_digest_reader_title.trim();
    } else if (bodyBuf.length > 0) {
      const headChunk = bodyBuf.subarray(0, Math.min(bodyBuf.length, 768)).toString('utf8');
      const h1Match = headChunk.match(/^#[ \t]+([^\n]+)/m);
      if (h1Match) headline = h1Match[1].replace(/^📄[ \t]*/, '').trim();
    }
    const originalTitle = (typeof params.paper_digest_original_title === 'string' && params.paper_digest_original_title.trim())
      ? params.paper_digest_original_title.trim()
      : title;
    const description = typeof params.description === 'string' ? params.description.trim() : '';
    const oneSentence = (typeof params.paper_digest_one_sentence === 'string' && params.paper_digest_one_sentence.trim())
      ? params.paper_digest_one_sentence.trim()
      : description;

    let scoreText = '';
    const descScore = description.match(/([0-9]+(?:\.[0-9]+)?)[ \t]*\/[ \t]*10\b/);
    if (descScore) scoreText = descScore[1];
    if (params.paper_digest_score !== undefined && params.paper_digest_score !== null && params.paper_digest_score !== '') {
      scoreText = String(params.paper_digest_score).trim();
    }
    let scoreNum = 0;
    let scoreInt = 0;
    if (/^[0-9]+(?:\.[0-9]+)?$/.test(scoreText)) {
      scoreNum = Number(scoreText);
      scoreInt = Math.max(0, Math.min(100, Math.round(scoreNum * 10)));
    }

    const dateStr = normalizeDateStr(params.date);
    const dateInt = dateStr ? Math.max(0, Math.min(99999999, Number(dateStr.replace(/-/g, '')))) : 0;

    let primaryTask = typeof params.paper_digest_primary_task === 'string' ? params.paper_digest_primary_task.trim() : '';
    if (tagPublicationStatus === 'withheld') {
      primaryTask = '';
    } else if (proof.primaryTaskLabel) {
      primaryTask = proof.primaryTaskLabel;
    } else if (!primaryTask && validConcepts.length) {
      const taskConcept = validConcepts.find((c) => c.facet === 'task');
      if (taskConcept) primaryTask = taskConcept.zh;
    } else if (!primaryTask && legacyTags.length) {
      primaryTask = legacyTags[0];
    }

    const resources = loadResources ? extractResourceSignalsFromBuffer(bodyBuf) : {
      hasCode: false, hasModel: false, hasDataset: false, hasDemo: false, hasProjectPage: false,
      codeUrls: [], demoUrls: [], projectUrls: []
    };
    const categories = Array.isArray(params.categories) ? params.categories : [];
    const venue = resolveVenue({ paperId, sourceKind, arxivId, categories, baseName });

    paperPages.push({
      fileName: entry.name,
      relKey,
      relPermalink,
      identity,
      canonicalId,
      identityStatus,
      sourceKind,
      arxivId,
      paperId,
      title,
      headline,
      originalTitle,
      oneSentence,
      date: dateStr,
      dateInt,
      scoreText,
      scoreNum,
      scoreInt,
      primaryTask,
      venue,
      tagPublicationStatus,
      validConcepts,
      legacyTags,
      resources
    });
  }

  // Match Hugo's site.RegularPages ordering (Date desc, Title asc, FilePath asc)
  paperPages.sort((a, b) =>
    (b.dateInt - a.dateInt)
    || (a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
    || (a.relKey < b.relKey ? -1 : a.relKey > b.relKey ? 1 : 0)
  );

  // Merge multi-appearance pages by research identity (exact match to related_catalog.html!)
  const groups = new Map();
  for (const page of paperPages) {
    const ids = [];
    const idSet = new Set();
    const nodes = Object.create(null);

    for (const c of page.validConcepts) {
      if (ALL_FACETS_SET.has(c.facet) && !idSet.has(c.id)) {
        idSet.add(c.id);
        ids.push(c.id);
        nodes[c.id] = { facet: c.facet, zh: c.zh, ancestorIds: c.ancestorIds || [] };
      }
    }
    if (ids.length === 0 && page.tagPublicationStatus !== 'withheld') {
      for (const tag of page.legacyTags) {
        const lid = `legacy:${tag}`;
        if (!idSet.has(lid)) {
          idSet.add(lid);
          ids.push(lid);
          nodes[lid] = { facet: 'legacy', zh: tag, ancestorIds: [] };
        }
      }
    }

    const prev = groups.get(page.identity);
    if (!prev) {
      groups.set(page.identity, {
        identity: page.identity,
        canonicalId: page.canonicalId,
        page,
        ids,
        idSet,
        nodes,
        validConcepts: [...page.validConcepts],
        legacyTags: [...page.legacyTags],
        tagPublicationStatus: page.tagPublicationStatus
      });
    } else {
      for (const id of ids) {
        if (!prev.idSet.has(id)) {
          prev.idSet.add(id);
          prev.ids.push(id);
        }
        prev.nodes[id] = nodes[id];
      }
      if (page.validConcepts.length) {
        const seenC = new Set(prev.validConcepts.map((c) => c.id));
        for (const c of page.validConcepts) {
          if (!seenC.has(c.id)) {
            seenC.add(c.id);
            prev.validConcepts.push(c);
          }
        }
      }
      if (page.tagPublicationStatus === 'withheld') {
        prev.tagPublicationStatus = 'withheld';
      }
      // Hugo related_catalog.html line 45: `if ge .page.Date $page.Date { $page = .page }`
      // Keep newer page (or earlier in Hugo's Date-desc order when dates are equal).
      if (page.dateInt > prev.page.dateInt) {
        prev.page = page;
      }
    }
  }

  for (const g of groups.values()) {
    g.ids.sort();
  }

  return {
    root,
    basePath,
    catalog,
    paperPages,
    groups,
    counts: {
      ...allRegularPostCount,
      uniqueIdentities: groups.size
    }
  };
}

function writeJsonAtomic(filePath, payload, pretty = false) {
  try {
    if (fs.lstatSync(filePath).isSymbolicLink()) {
      throw new Error(`Refusing to overwrite symlink: ${filePath}`);
    }
  } catch (err) {
    if (!err || err.code !== 'ENOENT') throw err;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temp = `${filePath}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
  const text = (pretty ? JSON.stringify(payload, null, 2) : JSON.stringify(payload)) + '\n';
  try {
    fs.writeFileSync(temp, text, { encoding: 'utf8', mode: 0o644 });
    fs.renameSync(temp, filePath);
  } finally {
    fs.rmSync(temp, { force: true });
  }
}

module.exports = {
  ALL_FACETS,
  DANGEROUS_KEYS,
  isStrictClientHttpsUrl,
  parseBasePath,
  parseMarkdownPage,
  extractResourceSignals,
  extractResourceSignalsFromBuffer,
  resolveVenue,
  loadResearchCorpus,
  writeJsonAtomic
};
