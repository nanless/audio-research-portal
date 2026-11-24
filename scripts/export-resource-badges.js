'use strict';

// Wave 14.5 Client Resource Badges Side-Channel Exporter.
// Emits public/client/signals/resource-badges.json strictly OUTSIDE public/client/details/*
// so frozen v1.4.6/v1.4.7 manifests, snapshots, and fingerprints remain 100% untouched.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const protocols = require('../assets/js/protocol-registry');
const tagCore = require('../assets/js/tag-core');
const {
  DANGEROUS_KEYS,
  isStrictClientHttpsUrl,
  loadResearchCorpus,
  writeJsonAtomic
} = require('./lib/research-corpus');

const CONTRACT = protocols.contract('paper-resource-badges-index');
const SCHEMA_FINGERPRINT = protocols.schemaFingerprint('paper-resource-badges-index');
const OUTPUT_RELATIVE = 'client/signals/resource-badges.json';
const MAX_INDEX_BYTES = 8 * 1024 * 1024;
const ALLOWED_ROOT_KEYS = Object.freeze(['contract', 'schemaFingerprint', 'generatedAt', 'papers']);
const ALLOWED_ENTRY_KEYS = Object.freeze([
  'hasCode', 'hasModel', 'hasDataset', 'hasDemo', 'hasProjectPage',
  'codeUrls', 'demoUrls', 'projectUrls'
]);

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function resolveGeneratedAt(repoRoot, explicitTimestamp) {
  if (typeof explicitTimestamp === 'string' && explicitTimestamp.trim()) {
    return explicitTimestamp.trim();
  }
  try {
    const out = execFileSync('git', ['show', '-s', '--format=%cI', 'HEAD'], {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    }).trim();
    if (out && Number.isFinite(Date.parse(out))) return out;
  } catch (_) { /* non-git fixture fallback */ }
  return new Date().toISOString();
}

function sanitizeHttpsUrlList(urls) {
  const out = [];
  const seen = new Set();
  for (const raw of Array.isArray(urls) ? urls : []) {
    if (!isStrictClientHttpsUrl(raw)) continue;
    const href = new URL(raw).href;
    if (!isStrictClientHttpsUrl(href)) continue;
    if (!seen.has(href)) {
      seen.add(href);
      out.push(href);
    }
  }
  return out;
}

function loadBuiltPaperRecords(buildRoot) {
  const clientIndexPath = path.join(buildRoot, 'client', 'index.json');
  const rootIndexPath = path.join(buildRoot, 'index.json');
  let raw = null;
  let shardBaseDir = buildRoot;

  if (fs.existsSync(clientIndexPath)) {
    raw = JSON.parse(fs.readFileSync(clientIndexPath, 'utf8'));
    shardBaseDir = path.join(buildRoot, 'client');
  } else if (fs.existsSync(rootIndexPath)) {
    raw = JSON.parse(fs.readFileSync(rootIndexPath, 'utf8'));
  } else {
    return [];
  }

  const records = [];
  if (Array.isArray(raw)) {
    for (const item of raw) {
      if (item && item.pageType === 'paper') records.push(item);
    }
    return records;
  }
  if (raw && Array.isArray(raw.shards)) {
    for (const shard of raw.shards) {
      if (!shard || typeof shard.url !== 'string') continue;
      const shardFile = path.join(shardBaseDir, shard.url);
      if (!fs.existsSync(shardFile)) continue;
      const arr = JSON.parse(fs.readFileSync(shardFile, 'utf8'));
      if (Array.isArray(arr)) {
        for (const item of arr) {
          if (item && item.pageType === 'paper') records.push(item);
        }
      }
    }
  }
  return records;
}

function exportResourceBadges(buildDir = 'public', repoRoot = process.cwd(), options = {}) {
  const buildRoot = path.resolve(buildDir);
  const repo = path.resolve(repoRoot);
  const corpus = options.corpus || loadResearchCorpus(repo, { includeResources: true });
  const generatedAt = resolveGeneratedAt(repo, options.generatedAt);

  // Index corpus resource signals by both relPermalink and canonicalId
  const byPermalink = new Map();
  const byCanonicalId = new Map();
  for (const page of corpus.paperPages) {
    byPermalink.set(page.relPermalink, page);
    const prev = byCanonicalId.get(page.canonicalId);
    if (!prev || page.dateInt > prev.dateInt) {
      byCanonicalId.set(page.canonicalId, page);
    }
  }

  const merged = new Map();
  const mergeSignal = (canonicalId, signal) => {
    if (typeof canonicalId !== 'string' || !canonicalId || DANGEROUS_KEYS.has(canonicalId)) return;
    let cur = merged.get(canonicalId);
    if (!cur) {
      cur = {
        hasCode: false,
        hasModel: false,
        hasDataset: false,
        hasDemo: false,
        hasProjectPage: false,
        codeUrls: new Set(),
        demoUrls: new Set(),
        projectUrls: new Set()
      };
      merged.set(canonicalId, cur);
    }
    if (signal.hasCode) cur.hasCode = true;
    if (signal.hasModel) cur.hasModel = true;
    if (signal.hasDataset) cur.hasDataset = true;
    if (signal.hasDemo) cur.hasDemo = true;
    if (signal.hasProjectPage) cur.hasProjectPage = true;
    for (const u of sanitizeHttpsUrlList(signal.codeUrls)) {
      if (cur.codeUrls.size < 8) cur.codeUrls.add(u);
    }
    for (const u of sanitizeHttpsUrlList(signal.demoUrls)) {
      if (cur.demoUrls.size < 8) cur.demoUrls.add(u);
    }
    for (const u of sanitizeHttpsUrlList(signal.projectUrls)) {
      if (cur.projectUrls.size < 8) cur.projectUrls.add(u);
    }
  };

  // Prefer built search index records (exact canonical IDs seen by clients), falling back to corpus pages
  const builtPapers = loadBuiltPaperRecords(buildRoot);
  if (builtPapers.length > 0) {
    for (const record of builtPapers) {
      const idInfo = tagCore.identity(record);
      const canonicalId = idInfo && idInfo.key ? idInfo.key : '';
      if (!canonicalId || DANGEROUS_KEYS.has(canonicalId)) continue;
      const matchedPage = byPermalink.get(record.permalink) || byCanonicalId.get(canonicalId) || null;
      const res = matchedPage && matchedPage.resources ? matchedPage.resources : {};
      mergeSignal(canonicalId, {
        hasCode: Boolean(record.hasCode || res.hasCode),
        hasModel: Boolean(res.hasModel),
        hasDataset: Boolean(res.hasDataset),
        hasDemo: Boolean(record.hasDemo || res.hasDemo),
        hasProjectPage: Boolean(res.hasProjectPage),
        codeUrls: res.codeUrls || [],
        demoUrls: res.demoUrls || [],
        projectUrls: res.projectUrls || []
      });
    }
  } else {
    for (const page of corpus.paperPages) {
      mergeSignal(page.canonicalId, page.resources || {});
    }
  }

  const papers = Object.create(null);
  const sortedIds = [...merged.keys()].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  let codeCount = 0;
  let modelCount = 0;
  let datasetCount = 0;
  let demoCount = 0;
  let projectPageCount = 0;

  for (const id of sortedIds) {
    if (DANGEROUS_KEYS.has(id)) continue;
    const s = merged.get(id);
    const entry = {
      hasCode: Boolean(s.hasCode),
      hasModel: Boolean(s.hasModel),
      hasDataset: Boolean(s.hasDataset),
      hasDemo: Boolean(s.hasDemo),
      hasProjectPage: Boolean(s.hasProjectPage)
    };
    if (s.codeUrls.size > 0) entry.codeUrls = [...s.codeUrls];
    if (s.demoUrls.size > 0) entry.demoUrls = [...s.demoUrls];
    if (s.projectUrls.size > 0) entry.projectUrls = [...s.projectUrls];
    papers[id] = entry;
    if (entry.hasCode) codeCount += 1;
    if (entry.hasModel) modelCount += 1;
    if (entry.hasDataset) datasetCount += 1;
    if (entry.hasDemo) demoCount += 1;
    if (entry.hasProjectPage) projectPageCount += 1;
  }

  const payload = protocols.record(CONTRACT, {
    generatedAt,
    papers
  });
  invariant(
    payload.contract === 'paper-resource-badges-index' && payload.schemaFingerprint === SCHEMA_FINGERPRINT,
    'resource-badges.json 协议头或指纹异常'
  );

  const outputPath = path.join(buildRoot, OUTPUT_RELATIVE);
  const serialized = JSON.stringify(payload) + '\n';
  const bytes = Buffer.byteLength(serialized, 'utf8');
  invariant(bytes <= MAX_INDEX_BYTES, `resource-badges.json 超过 8 MiB 上限：${bytes}`);
  writeJsonAtomic(outputPath, payload, false);

  return {
    outputPath,
    contract: payload.contract,
    schemaFingerprint: payload.schemaFingerprint,
    bytes,
    paperCount: sortedIds.length,
    codeCount,
    modelCount,
    datasetCount,
    demoCount,
    projectPageCount
  };
}

if (require.main === module) {
  const buildDir = process.argv[2] || 'public';
  const repoRoot = process.argv[3] || process.cwd();
  const stats = exportResourceBadges(buildDir, repoRoot);
  process.stdout.write(JSON.stringify(stats) + '\n');
}

module.exports = {
  CONTRACT,
  SCHEMA_FINGERPRINT,
  OUTPUT_RELATIVE,
  MAX_INDEX_BYTES,
  ALLOWED_ROOT_KEYS,
  ALLOWED_ENTRY_KEYS,
  exportResourceBadges
};
