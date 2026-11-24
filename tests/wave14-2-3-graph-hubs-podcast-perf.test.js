'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const protocols = require('../assets/js/protocol-registry');
const podcastPlayer = require('../assets/js/podcast-player');
const { shardIndex } = require('../scripts/shard-search-index');
const { exportDesktopDetails } = require('../scripts/export-desktop-details');
const {
  writeRelatedGraphAuto,
  exportPublicRelatedGraph,
  buildRelatedGraph
} = require('../scripts/build-related-graph');
const {
  HUB_DEFINITIONS,
  HUB_SLUGS,
  validateHubDefinitions,
  writeSotaHubsAuto
} = require('../scripts/build-sota-hubs');
const {
  CONTRACT: BADGES_CONTRACT,
  SCHEMA_FINGERPRINT: BADGES_FP,
  exportResourceBadges
} = require('../scripts/export-resource-badges');
const {
  verifyRss,
  verifyDesktopDetails,
  verifyRelatedGraph,
  verifySotaHubs,
  verifyResourceBadges
} = require('../scripts/verify-build');
const { verifyPageNavigation } = require('../scripts/verify-page-navigation');

const BLOG_ROOT = path.resolve(__dirname, '..');

function gitExec(cwd, args) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'Test Runner',
      GIT_AUTHOR_EMAIL: 'test@example.invalid',
      GIT_COMMITTER_NAME: 'Test Runner',
      GIT_COMMITTER_EMAIL: 'test@example.invalid'
    }
  });
}

function copySafeData(destDataDir) {
  fs.cpSync(path.join(BLOG_ROOT, 'data'), destDataDir, {
    recursive: true,
    filter: (file) => {
      const name = path.basename(file);
      return !name.startsWith('fullsite-r6-')
        && !name.startsWith('fullsite-taxonomy-')
        && !name.startsWith('taxonomy-history')
        && !name.startsWith('edition-features')
        && !name.startsWith('related-graph-auto')
        && !name.startsWith('sota-hubs-auto')
        && name !== 'current-page-taxonomy-history-v2.json'
        && name !== 'taxonomy-old-v2-publication-holds.json'
        && name !== 'exact1028-qualified-classification.json';
    }
  });
  const confPath = path.join(destDataDir, 'conference-directory.json');
  if (fs.existsSync(confPath)) {
    const conf = JSON.parse(fs.readFileSync(confPath, 'utf8'));
    conf.entries = [];
    fs.writeFileSync(confPath, JSON.stringify(conf), 'utf8');
  }
}

function setupFixtureRepo(t, prefix, { copyHubs = true, copyTopLevelPages = true, enableGit = false } = {}) {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  t.after(() => fs.rmSync(workspace, { recursive: true, force: true }));
  const repo = path.join(workspace, 'repo');
  fs.mkdirSync(path.join(repo, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'static/data'), { recursive: true });
  for (const dir of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(BLOG_ROOT, dir), path.join(repo, dir), { recursive: true });
  }
  copySafeData(path.join(repo, 'data'));

  let cfg = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8');
  if (!enableGit) {
    cfg = cfg.replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
  }
  fs.writeFileSync(path.join(repo, 'hugo.yaml'), cfg, 'utf8');

  for (const entry of fs.readdirSync(path.join(BLOG_ROOT, 'static'))) {
    const full = path.join(BLOG_ROOT, 'static', entry);
    if (fs.statSync(full).isFile()) {
      fs.copyFileSync(full, path.join(repo, 'static', entry));
    }
  }
  for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.copyFileSync(path.join(BLOG_ROOT, 'static/data', fn), path.join(repo, 'static/data', fn));
  }
  if (fs.existsSync(path.join(BLOG_ROOT, 'static/vendor'))) {
    fs.cpSync(path.join(BLOG_ROOT, 'static/vendor'), path.join(repo, 'static/vendor'), { recursive: true });
  }
  if (copyTopLevelPages) {
    for (const entry of fs.readdirSync(path.join(BLOG_ROOT, 'content'))) {
      const full = path.join(BLOG_ROOT, 'content', entry);
      if (fs.statSync(full).isFile() && entry.endsWith('.md')) {
        fs.copyFileSync(full, path.join(repo, 'content', entry));
      }
    }
  }
  if (copyHubs) {
    fs.cpSync(path.join(BLOG_ROOT, 'content/hubs'), path.join(repo, 'content/hubs'), { recursive: true });
  }
  return { workspace, repo };
}

function runHugo(repo, destDir) {
  execFileSync('hugo', [
    '--source', repo,
    '--destination', destDir,
    '--minify',
    '--noBuildLock',
    '--cleanDestinationDir',
    '--panicOnWarning'
  ], {
    stdio: 'pipe',
    env: { ...process.env, GOMAXPROCS: '4', HUGO_NUMWORKERMULTIPLIER: '2' }
  });
}

function makeConceptHelpers() {
  const snap = JSON.parse(fs.readFileSync(path.join(BLOG_ROOT, 'data/tag-catalog-snapshot.json'), 'utf8'));
  const byId = new Map(snap.concepts.map((c) => [c.id, c]));
  const flatHeader = protocols.recordHeader('paper-tag-flat-tags', 'paper-tag-flat-tags');
  return {
    snap,
    byId,
    flatHeader,
    conceptObj(id) {
      const node = byId.get(id);
      assert.ok(node, `Missing concept ${id} in tag-catalog-snapshot.json`);
      return { id: node.id, facet: node.facet, label: node.zh };
    }
  };
}

function writePost(repo, slug, fmObj, body) {
  fs.writeFileSync(
    path.join(repo, 'content/posts', `${slug}.md`),
    `---\n${JSON.stringify(fmObj)}\n---\n\n${body}\n`,
    'utf8'
  );
}

// ============================================================================
// 1. Deliverable 0: KaTeX partialCached + MathML fast-strip + newScratch parity
// ============================================================================
test('Deliverable 0: render_katex_formula partialCached & newScratch protect_katex_blocks preserve exact HTML/MathML output with zero O(K^2) merge', (t) => {
  const passthroughSrc = fs.readFileSync(path.join(BLOG_ROOT, 'layouts/_default/_markup/render-passthrough.html'), 'utf8');
  const katexPartialSrc = fs.readFileSync(path.join(BLOG_ROOT, 'layouts/partials/render_katex_formula.html'), 'utf8');
  const protectSrc = fs.readFileSync(path.join(BLOG_ROOT, 'layouts/partials/protect_katex_blocks.html'), 'utf8');
  const readerSrc = fs.readFileSync(path.join(BLOG_ROOT, 'layouts/partials/reader_article_content.html'), 'utf8');

  assert.match(passthroughSrc, /partialCached\s+"render_katex_formula\.html"/, 'render-passthrough must delegate to partialCached render_katex_formula.html');
  assert.match(katexPartialSrc, /transform\.ToMath/, 'render_katex_formula must render via transform.ToMath');
  assert.match(katexPartialSrc, /in \$lower "style="/, 'render_katex_formula must short-circuit MathML attribute regex loop on simple formulas');
  assert.doesNotMatch(protectSrc, /\$protected\s*=\s*merge\s+\$protected/, 'protect_katex_blocks must eliminate O(K^2) merge $protected');
  assert.doesNotMatch(readerSrc, /\$protected\s*=\s*merge\s+\$protected/, 'reader_article_content must eliminate O(K^2) merge $protected');
  assert.match(protectSrc, /newScratch/, 'protect_katex_blocks must use newScratch');
  assert.match(readerSrc, /newScratch/, 'reader_article_content must use newScratch');

  const { workspace, repo } = setupFixtureRepo(t, 'wave14-perf-parity-', { copyHubs: false, copyTopLevelPages: false });
  // Write a paper containing repeated simple formulas, block formulas with macros, matrices, and invalid LaTeX
  const repeatedInline = Array.from({ length: 12 }, () => String.raw`\(x_i + \bm{\theta}_i\)`).join('、');
  const body = [
    '# 📄 公式缓存与保护等价测试',
    '',
    '## 📌 核心摘要',
    '',
    `重复简单公式：${repeatedInline}，以及简单下标 \\(y_t\\) 与 \\(y_t\\)。`,
    '',
    '\\[',
    '\\mathcal{L}(\\bm{\\theta}) = \\sum_{i=1}^{N} \\frac{\\exp(s_i)}{\\sum_j \\exp(s_j)} + \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
    '\\]',
    '',
    '错误公式回退：\\(\\nonexistentcmd{z}\\)。',
    '',
    '## 🧭 深度解读',
    '',
    '### 章节含公式 \\(E = mc^2\\) 与代码 `a < b`',
    '',
    '正文内联公式 \\(\\alpha \\le \\beta\\) 与 \\(\\hat{y} = f(x)\\)。'
  ].join('\n');

  writePost(repo, '2026-11-24-katex-parity-2611-94001', {
    title: 'KaTeX Parity Paper',
    date: '2026-11-24',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.94001',
    paper_digest_score: 8.4
  }, body);

  const destCached = path.join(workspace, 'public-cached');
  runHugo(repo, destCached);
  const htmlCached = fs.readFileSync(path.join(destCached, 'posts/2026-11-24-katex-parity-2611-94001/index.html'), 'utf8');

  // Verify no disallowed v1.4.6 MathML attributes appear inside any <math> block
  const mathBlocks = htmlCached.match(/<math\b[^>]*>[\s\S]*?<\/math>/gi) || [];
  assert.ok(mathBlocks.length >= 4, 'expected multiple SSR <math> blocks');
  const disallowedAttrRe = /\s(?:linebreak|mathsize|mathcolor|mathbackground|largeop|form|columnspan|rowspan|numalign|denomalign|bevelled|style)=/i;
  for (const mb of mathBlocks) {
    assert.doesNotMatch(mb, disallowedAttrRe, `disallowed MathML attr leaked: ${mb.slice(0, 120)}`);
    assert.doesNotMatch(mb, /<\/?mlabeledtr\b/i, 'mlabeledtr must be normalized to mtr');
  }
  assert.match(htmlCached, /<code class=["']?math-fallback["']?[^>]*>\\nonexistentcmd\{z\}<\/code>/);
  assert.doesNotMatch(htmlCached, /<merror\b/i);

  // Swap render-passthrough back to direct uncached logic and verify 100% BIT-FOR-BIT identical HTML!
  const uncachedPassthrough = [
    '{{- $opts := dict "displayMode" (eq .Type "block") "output" "htmlAndMathml" "throwOnError" true "macros" (dict "\\\\bm" "\\\\boldsymbol{#1}") -}}',
    '{{- with try (transform.ToMath .Inner $opts) -}}',
    '  {{- with .Err -}}<code class="math-fallback">{{ $.Inner }}</code>{{- else -}}',
    '    {{- $rendered := printf "%s" .Value -}}',
    '    {{- range $mathBlock := findRE `(?s)<math\\b[^>]*>.*?</math>` $rendered -}}',
    '      {{- $cleanMath := $mathBlock -}}',
    '      {{- if in $cleanMath "mlabeledtr" -}}{{- $cleanMath = replaceRE `(?i)<(/?)mlabeledtr\\b` `<${1}mtr` $cleanMath -}}{{- end -}}',
    '      {{- range $tag := findRE `<[a-zA-Z][^>]*>` $cleanMath -}}',
    '        {{- $cleanTag := replaceRE `(?i)\\s+(?:linebreak|mathsize|mathcolor|mathbackground|largeop|form|columnspan|rowspan|numalign|denomalign|bevelled|style)=(?:"[^"]*"|\'[^\']*\')` "" $tag -}}',
    '        {{- if ne $cleanTag $tag -}}{{- $cleanMath = replace $cleanMath $tag $cleanTag -}}{{- end -}}',
    '      {{- end -}}',
    '      {{- if ne $cleanMath $mathBlock -}}{{- $rendered = replace $rendered $mathBlock $cleanMath -}}{{- end -}}',
    '    {{- end -}}',
    '    {{- $rendered | safeHTML -}}',
    '  {{- end -}}',
    '{{- end -}}'
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'layouts/_default/_markup/render-passthrough.html'), uncachedPassthrough, 'utf8');

  const destUncached = path.join(workspace, 'public-uncached');
  runHugo(repo, destUncached);
  const htmlUncached = fs.readFileSync(path.join(destUncached, 'posts/2026-11-24-katex-parity-2611-94001/index.html'), 'utf8');

  assert.equal(htmlCached, htmlUncached, 'partialCached render_katex_formula must be 100% byte-for-byte identical to uncached rendering');
});

// ============================================================================
// 2. Deliverable 1: Wave 14.2A Precomputed Related Graph + O(1) Hugo Lookup
// ============================================================================
test('Deliverable 1 (Wave 14.2A): build-related-graph matches Hugo 9-facet IDF cosine exactly, respects withheld suppression, and supports O(1) lookup + fallback', (t) => {
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-related-graph-', { copyHubs: false, copyTopLevelPages: false });
  const { snap, flatHeader, conceptObj } = makeConceptHelpers();

  const makeVerifiedPaper = (slug, { arxiv, paperId, sourceKind, date, score, conceptIds, tags = [] }) => {
    const fm = {
      title: `Paper ${slug}`,
      date,
      draft: false,
      paper_digest_page_type: 'paper',
      paper_digest_score: score,
      paper_digest_tags_contract: flatHeader.contract,
      paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
      paper_digest_tags_registry_sha256: snap.registrySha256,
      paper_digest_tags_concepts: conceptIds.map(conceptObj),
      tags
    };
    if (arxiv) fm.paper_digest_arxiv_id = arxiv;
    if (paperId) {
      fm.paper_digest_paper_id = paperId;
      fm.paper_digest_source_kind = sourceKind || 'conference';
    }
    writePost(repo, slug, fm, `# 📄 ${slug}\n\n## 📌 核心摘要\n\n摘要内容 ${slug}。`);
  };

  makeVerifiedPaper('target', { arxiv: '2611.61000', date: '2026-11-24', score: 8.5, conceptIds: ['task.asr', 'model_family.audio-language', 'scientific_topic.prosody'] });
  makeVerifiedPaper('best-rare', { arxiv: '2611.61099', date: '2026-11-20', score: 7.2, conceptIds: ['task.asr', 'model_family.audio-language', 'scientific_topic.prosody'] });
  makeVerifiedPaper('old-2401', { arxiv: '2401.00001', date: '2024-01-10', score: 6.5, conceptIds: ['task.asr'] });
  makeVerifiedPaper('new-high', { arxiv: '2611.61088', date: '2026-11-18', score: 9.2, conceptIds: ['task.asr'] });
  makeVerifiedPaper('conf-match', { paperId: 'conference:interspeech:2026:paper:demo1', sourceKind: 'conference', date: '2026-11-22', score: 8.1, conceptIds: ['task.asr'] });
  // Background papers raising df of task.asr
  for (let i = 0; i < 6; i += 1) {
    makeVerifiedPaper(`bg-${i}`, { arxiv: `2402.0000${i}`, date: `2024-02-0${i + 1}`, score: 5.5, conceptIds: ['task.asr'] });
  }
  // Legacy-only paper
  writePost(repo, 'legacy-a', {
    title: 'Legacy A', date: '2026-11-10', draft: false, paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.61201', paper_digest_score: 7.0, tags: ['声学仿真专属旧标']
  }, '# Legacy A\n\n摘要。');
  writePost(repo, 'legacy-b', {
    title: 'Legacy B', date: '2026-11-11', draft: false, paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.61202', paper_digest_score: 7.4, tags: ['声学仿真专属旧标']
  }, '# Legacy B\n\n摘要。');

  // Pass A: Hugo without related-graph-auto.json (fallback to related_rankings.html)
  const destFallback = path.join(workspace, 'public-fallback');
  runHugo(repo, destFallback);

  // Pass B: Generate related-graph-auto.json and re-run Hugo (O(1) graph fast path)
  const built = writeRelatedGraphAuto(repo);
  assert.equal(built.stats.paperCount, 13);
  const autoGraph = JSON.parse(fs.readFileSync(path.join(repo, 'data/related-graph-auto.json'), 'utf8'));
  assert.equal(autoGraph.contract, 'related-graph-auto-v1');
  assert.equal(autoGraph.totalN, 13);
  assert.deepEqual(
    autoGraph.papers['arxiv:2611.61000'].map((x) => x.identity),
    ['arxiv:2611.61099', 'arxiv:2611.61088', 'paper:conference:interspeech:2026:paper:demo1'],
    'rare IDF match first, then higher score, then conference paper — zero 2401.* ASCII dominance'
  );
  // Conference paper itself must be keyed by `paper:conference:...` to match research_identity.html!
  assert.ok(Array.isArray(autoGraph.papers['paper:conference:interspeech:2026:paper:demo1']));
  assert.ok(autoGraph.papers['paper:conference:interspeech:2026:paper:demo1'].length === 3);

  const destFast = path.join(workspace, 'public-fast');
  runHugo(repo, destFast);

  // Verify 100% bit-for-bit parity of related-posts HTML across ALL 13 papers!
  for (const slug of ['target', 'best-rare', 'old-2401', 'new-high', 'conf-match', 'legacy-a', 'legacy-b']) {
    const htmlA = fs.readFileSync(path.join(destFallback, 'posts', slug, 'index.html'), 'utf8');
    const htmlB = fs.readFileSync(path.join(destFast, 'posts', slug, 'index.html'), 'utf8');
    const relA = htmlA.match(/<section class=["']?related-posts[\s\S]*?<\/section>/)?.[0] || '';
    const relB = htmlB.match(/<section class=["']?related-posts[\s\S]*?<\/section>/)?.[0] || '';
    assert.ok(relA.length > 0, `${slug} should have related recommendations`);
    assert.equal(relB, relA, `${slug} O(1) precomputed graph must match Hugo related_rankings bit-for-bit`);
  }

  // Freshness guard test: stale totalN in related-graph-auto.json must fall back cleanly without corrupting links
  const stale = { ...autoGraph, totalN: 999999, papers: { 'arxiv:2611.61000': [{ identity: 'arxiv:9999.99999', relPermalink: '/broken/', score: 999, reasons: ['假标签'] }] } };
  fs.writeFileSync(path.join(repo, 'data/related-graph-auto.json'), JSON.stringify(stale), 'utf8');
  const destStale = path.join(workspace, 'public-stale');
  runHugo(repo, destStale);
  const targetStaleHtml = fs.readFileSync(path.join(destStale, 'posts/target/index.html'), 'utf8');
  assert.doesNotMatch(targetStaleHtml, /\/broken\//, 'stale related-graph-auto must never inject broken links');
  assert.match(targetStaleHtml, /\/posts\/best-rare\//, 'stale related-graph-auto must seamlessly fall back');

  // Public graph export & verifyRelatedGraph checks
  exportPublicRelatedGraph(destFast, repo, built);
  const graphStats = verifyRelatedGraph(destFast);
  assert.equal(graphStats.paperCount, 13);
  assert.ok(graphStats.edgeCount > 0);

  // Negative verifyRelatedGraph check: reject dangerous key
  const badGraphPath = path.join(destFast, 'data/related-graph.json');
  fs.writeFileSync(badGraphPath, '{"contract":"paper-related-graph-v1","generatedAt":"2026-11-24T00:00:00Z","paperCount":1,"edgeCount":0,"papers":{"__proto__":[]}}', 'utf8');
  assert.throws(() => verifyRelatedGraph(destFast), /非法键|不能为空/);

  // Withheld suppression test: a paper placed under an active publication hold (without R6/exact1028 release)
  // MUST have ZERO tag-derived recommendations and MUST NOT fall back to its frontmatter legacy tags!
  const heldRepo = path.join(workspace, 'repo-withheld');
  fs.cpSync(repo, heldRepo, { recursive: true });
  fs.rmSync(path.join(heldRepo, 'data/related-graph-auto.json'), { force: true });
  const crypto = require('node:crypto');
  const heldPageRel = 'content/posts/legacy-a.md';
  const heldRaw = fs.readFileSync(path.join(heldRepo, heldPageRel));
  const heldText = heldRaw.toString('utf8');
  const heldHeader = heldText.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  const heldPageSha = crypto.createHash('sha256').update(heldRaw).digest('hex');
  const heldBodySha = crypto.createHash('sha256').update(heldText.slice(heldHeader[0].length), 'utf8').digest('hex');
  fs.writeFileSync(path.join(heldRepo, 'data/taxonomy-old-v2-publication-holds.json'), JSON.stringify({
    contract: 'root-source-qualified-exact-old-v2-publication-holds-v1',
    rows: [
      {
        paperId: 'arxiv:2611.61201',
        originalTuple: {
          pages: [{ pagePath: heldPageRel, pageSha256: heldPageSha, bodySha256: heldBodySha }]
        }
      }
    ]
  }), 'utf8');
  const heldGraph = buildRelatedGraph(heldRepo);
  assert.deepEqual(heldGraph.autoManifest.papers['arxiv:2611.61201'], [], 'active withheld paper must have ZERO recommendations');
  assert.deepEqual(heldGraph.autoManifest.papers['arxiv:2611.61202'], [], 'peer sharing only legacy tag with withheld paper must not link to it');

  // Also verify SOTA hub strictly excludes a withheld paper whose legacy tags match ASR!
  const heldHubPaperRel = 'content/posts/held-asr-legacy.md';
  writePost(heldRepo, 'held-asr-legacy', {
    title: 'Withheld ASR Legacy Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.61999', paper_digest_score: 9.5,
    tags: ['语音识别', 'ASR']
  }, '# Withheld ASR\n\n摘要。');
  const heldHubRaw = fs.readFileSync(path.join(heldRepo, heldHubPaperRel));
  const heldHubText = heldHubRaw.toString('utf8');
  const heldHubHdr = heldHubText.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  fs.writeFileSync(path.join(heldRepo, 'data/taxonomy-old-v2-publication-holds.json'), JSON.stringify({
    contract: 'root-source-qualified-exact-old-v2-publication-holds-v1',
    rows: [
      {
        paperId: 'arxiv:2611.61999',
        originalTuple: {
          pages: [{
            pagePath: heldHubPaperRel,
            pageSha256: crypto.createHash('sha256').update(heldHubRaw).digest('hex'),
            bodySha256: crypto.createHash('sha256').update(heldHubText.slice(heldHubHdr[0].length), 'utf8').digest('hex')
          }]
        }
      }
    ]
  }), 'utf8');
  const heldHubs = writeSotaHubsAuto(heldRepo);
  const asrTopIds = heldHubs.manifest.hubs.asr.topPapers.map((p) => p.identity);
  assert.ok(!asrTopIds.includes('arxiv:2611.61999'), 'SOTA hub must strictly exclude withheld paper even with matching legacy tags');
});

// ============================================================================
// 3. Deliverable 2: Wave 14.2B Audio Task & Benchmark SOTA Hubs
// ============================================================================
test('Deliverable 2 (Wave 14.2B): 8 verified SOTA hubs respect catalog IDs & withheld holds, render cleanly in Hugo with zero nested index.xml', (t) => {
  const { snap, flatHeader, conceptObj } = makeConceptHelpers();
  // Verify EVERY concept ID in HUB_DEFINITIONS is active in the real catalog
  validateHubDefinitions({ currentById: new Map(snap.concepts.map((c) => [c.id, c])) });
  assert.equal(HUB_SLUGS.length, 8);
  assert.throws(
    () => validateHubDefinitions({ currentById: new Map([['task.asr', { id: 'task.asr', status: 'deprecated' }]]) }),
    /unknown or deprecated/
  );

  // Verify all 9 static content/hubs/*.md files have ZERO paper_digest_arxiv_id and outputs: [HTML]
  const hubMdFiles = fs.readdirSync(path.join(BLOG_ROOT, 'content/hubs')).filter((f) => f.endsWith('.md'));
  assert.equal(hubMdFiles.length, 9, 'expected _index.md + 8 hub pages');
  for (const fn of hubMdFiles) {
    const raw = fs.readFileSync(path.join(BLOG_ROOT, 'content/hubs', fn), 'utf8');
    assert.doesNotMatch(raw, /paper_digest_arxiv_id/, `${fn} must NEVER contain paper_digest_arxiv_id`);
    assert.match(raw, /type:\s*"hubs"/, `${fn} must set type: "hubs"`);
    assert.match(raw, /outputs:[\s\S]*-\s*HTML/, `${fn} must restrict outputs to HTML`);
  }

  const { workspace, repo } = setupFixtureRepo(t, 'wave14-sota-hubs-', { copyHubs: true, copyTopLevelPages: true });

  // Populate fixture papers spanning all 8 hubs with scores, venues, code, and demo links
  const fixtures = [
    { slug: '2026-11-24-asr-2611-95001', arxiv: '2611.95001', date: '2026-11-24', score: 8.7, concepts: ['task.asr', 'method.conformer', 'setting.streaming'], code: true, demo: false },
    { slug: '2026-11-22-tts-2611-95002', arxiv: '2611.95002', date: '2026-11-22', score: 8.5, concepts: ['task.tts', 'task.voice-cloning', 'method.flow-matching'], code: true, demo: true },
    { slug: '2026-10-15-se-2610-95003', arxiv: '2610.95003', date: '2026-10-15', score: 8.2, concepts: ['task.speech-enhancement', 'method.diffusion'], code: false, demo: true },
    { slug: '2026-11-20-llm-2611-95004', arxiv: '2611.95004', date: '2026-11-20', score: 9.0, concepts: ['model_family.audio-language', 'method.neural-codec', 'task.speech-dialogue'], code: true, demo: true },
    { slug: '2026-09-12-music-2609-95005', arxiv: '2609.95005', date: '2026-09-12', score: 8.3, concepts: ['task.music-generation', 'signal.music', 'method.transformer'], code: true, demo: true },
    { slug: '2026-08-18-spatial-2608-95006', paperId: 'conference:icassp:2026:icassp-arnumber:11990001', sourceKind: 'conference', date: '2026-08-18', score: 8.1, concepts: ['task.localization', 'scientific_topic.spatial-audio'], code: false, demo: false },
    { slug: '2026-11-18-sed-2611-95007', paperId: 'conference:interspeech:2026:paper:demo95007', sourceKind: 'conference', date: '2026-11-18', score: 8.4, concepts: ['task.audio-understanding', 'task.event-detection', 'artifact.benchmark'], code: true, demo: false },
    { slug: '2026-11-19-vc-2611-95008', arxiv: '2611.95008', date: '2026-11-19', score: 8.0, concepts: ['task.voice-conversion', 'task.speech-editing'], code: false, demo: true }
  ];

  for (const f of fixtures) {
    const fm = {
      title: `Hub Paper ${f.slug}`,
      date: f.date,
      draft: false,
      paper_digest_page_type: 'paper',
      paper_digest_score: f.score,
      paper_digest_one_sentence: `一句话总结 ${f.slug}。`,
      paper_digest_tags_contract: flatHeader.contract,
      paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
      paper_digest_tags_registry_sha256: snap.registrySha256,
      paper_digest_tags_concepts: f.concepts.map(conceptObj)
    };
    if (f.arxiv) fm.paper_digest_arxiv_id = f.arxiv;
    if (f.paperId) {
      fm.paper_digest_paper_id = f.paperId;
      fm.paper_digest_source_kind = f.sourceKind;
    }
    const resLines = ['## 🔗 开源与复现资源', ''];
    if (f.code) resLines.push(`- 代码相关资源：<https://github.com/example/${f.slug}> — 链接可访问（HTTP 200）`);
    if (f.demo) resLines.push(`- 演示资源：<https://example.github.io/${f.slug}/> — 链接可访问（HTTP 200）`);
    writePost(repo, f.slug, fm, `# 📄 ${f.slug}\n\n## 📌 核心摘要\n\n测试摘要。\n\n${resLines.join('\n')}`);
  }
  writePost(repo, '2026-11-24', {
    title: '语音/音乐/音频论文速递 2026-11-24',
    date: '2026-11-24',
    draft: false,
    paper_digest_page_type: 'index'
  }, '# 语音/音乐/音频论文速递 2026-11-24\n\n共分析 8 篇论文。');

  // 1. Test isolated Hugo build WITHOUT sota-hubs-auto.json first (graceful fallback!)
  const destNoAuto = path.join(workspace, 'public-no-auto');
  runHugo(repo, destNoAuto);
  verifySotaHubs(destNoAuto);
  verifyPageNavigation(destNoAuto);
  const fallbackHubHtml = fs.readFileSync(path.join(destNoAuto, 'hubs/asr/index.html'), 'utf8');
  assert.match(fallbackHubHtml, /sota-hub-fallback/);

  // 2. Generate sota-hubs-auto.json and re-run Hugo
  const builtHubs = writeSotaHubsAuto(repo);
  for (const slug of HUB_SLUGS) {
    assert.ok(builtHubs.manifest.hubs[slug].totalPapers >= 1, `hub ${slug} must match at least 1 fixture paper`);
  }
  assert.equal(builtHubs.manifest.hubs.spatial_audio, undefined);
  assert.equal(builtHubs.manifest.hubs['spatial-audio'].venueBreakdown[0].venue, 'ICASSP');
  assert.equal(builtHubs.manifest.hubs['audio-understanding'].venueBreakdown[0].venue, 'Interspeech');
  assert.equal(builtHubs.manifest.hubs['audio-understanding'].topBenchmarksAndSettings[0].id, 'artifact.benchmark');

  const destWithAuto = path.join(workspace, 'public-with-auto');
  runHugo(repo, destWithAuto);
  const hubCheck = verifySotaHubs(destWithAuto);
  assert.equal(hubCheck.hubCount, 8);
  verifyPageNavigation(destWithAuto);

  const listHtml = fs.readFileSync(path.join(destWithAuto, 'hubs/index.html'), 'utf8');
  assert.match(listHtml, /自动语音识别（ASR）/);
  assert.match(listHtml, /音色转换与可控语音编辑/);
  const asrHubHtml = fs.readFileSync(path.join(destWithAuto, 'hubs/asr/index.html'), 'utf8');
  assert.match(asrHubHtml, /2026-11-24-asr-2611-95001/);
  assert.match(asrHubHtml, /feeds\/topic-asr\.xml/);
  assert.match(asrHubHtml, /papers\/\?concept=task\.asr/);
  assert.match(asrHubHtml, /高分精选 Top 20/);

  // Verify zero nested index.xml across entire public/
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(d, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });
  const xmlFiles = walk(destWithAuto).filter((f) => path.basename(f) === 'index.xml');
  assert.deepEqual(xmlFiles, [path.join(destWithAuto, 'index.xml')], 'ONLY public/index.xml may be named index.xml');
});

// ============================================================================
// 4. Deliverable 3.1: Wave 14.3 Daily Podcast Player + subscribe.html RSS
// ============================================================================
test('Deliverable 3.1 (Wave 14.3): daily_podcast_player stays strictly outside #article-body, enforces GitHub Release URL allowlist, and podcast-player.js has zero forbidden sinks', (t) => {
  // Static security checks on assets/js/podcast-player.js
  const playerJsSrc = fs.readFileSync(path.join(BLOG_ROOT, 'assets/js/podcast-player.js'), 'utf8');
  assert.doesNotMatch(playerJsSrc, /\.(?:innerHTML|outerHTML)\s*=|\.insertAdjacentHTML\s*\(|document\.write\s*\(|\beval\s*\(|\bnew\s+Function\b/);
  assert.doesNotMatch(playerJsSrc, /cdn\.jsdelivr\.net|unpkg\.com|cdnjs\.cloudflare\.com/i);
  assert.match(playerJsSrc, /textContent/);

  // URL allowlist unit tests
  assert.equal(podcastPlayer.isAllowedPodcastAudioUrl('https://github.com/nanless/audio-paper-digest/releases/download/podcast-2026-11-24/daily-2026-11-24.mp3'), true);
  assert.equal(podcastPlayer.isAllowedPodcastAudioUrl('https://github.com/nanless/audio-paper-digest-blog/releases/download/v1/ep.mp3'), true);
  for (const bad of [
    'http://github.com/nanless/audio-paper-digest/releases/download/v1/ep.mp3',
    'https://evil.example/ep.mp3',
    'javascript:alert(1)//.mp3',
    'https://github.com/otheruser/audio-paper-digest/releases/download/v1/ep.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/ep.mp3?token=leak',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/ep.mp3#frag',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/../ep.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/ep.wav'
  ]) {
    assert.equal(podcastPlayer.isAllowedPodcastAudioUrl(bad), false, `must reject ${bad}`);
  }

  // Interactive chapter jump & playback rate test using lightweight DOM mock
  const makeBtn = (attrs) => {
    const handlers = {};
    const classes = new Set();
    const map = { ...attrs };
    return {
      classList: { toggle: (c, on) => (on ? classes.add(c) : classes.delete(c)), contains: (c) => classes.has(c) },
      getAttribute: (k) => (Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null),
      setAttribute: (k, v) => { map[k] = String(v); },
      removeAttribute: (k) => { delete map[k]; },
      addEventListener: (ev, fn) => { (handlers[ev] ||= []).push(fn); },
      click: () => { (handlers.click || []).forEach((fn) => fn()); }
    };
  };
  const audioHandlers = {};
  let playCalls = 0;
  const mockAudio = {
    currentTime: 0,
    playbackRate: 1.0,
    getAttribute: (k) => (k === 'src' ? 'https://github.com/nanless/audio-paper-digest/releases/download/podcast-2026-11-24/ep.mp3' : null),
    addEventListener: (ev, fn) => { (audioHandlers[ev] ||= []).push(fn); },
    play: () => { playCalls += 1; return Promise.resolve(); }
  };
  const statusEl = { textContent: '' };
  const rate15 = makeBtn({ 'data-podcast-rate': '1.5', 'aria-pressed': 'false' });
  const rateBad = makeBtn({ 'data-podcast-rate': '9.9', 'aria-pressed': 'false' });
  const ch0 = makeBtn({ 'data-start-sec': '0' });
  const ch1 = makeBtn({ 'data-start-sec': '125' });
  const cardAttrs = {};
  const mockCard = {
    getAttribute: (k) => cardAttrs[k] || null,
    setAttribute: (k, v) => { cardAttrs[k] = v; },
    querySelector: (sel) => (sel === 'audio' ? mockAudio : sel === '[data-podcast-status]' ? statusEl : null),
    querySelectorAll: (sel) => (sel === '[data-podcast-rate]' ? [rate15, rateBad] : sel === '[data-start-sec]' ? [ch0, ch1] : [])
  };
  assert.equal(podcastPlayer.initPodcastPlayers({ querySelectorAll: () => [mockCard] }), 1);

  ch1.click();
  assert.equal(mockAudio.currentTime, 125);
  assert.equal(playCalls, 1);
  assert.equal(ch1.getAttribute('aria-current'), 'true');
  assert.match(statusEl.textContent, /02:05/);

  rate15.click();
  assert.equal(mockAudio.playbackRate, 1.5);
  assert.equal(rate15.getAttribute('aria-pressed'), 'true');
  assert.match(statusEl.textContent, /1\.5x/);

  rateBad.click();
  assert.equal(mockAudio.playbackRate, 1.5, 'out-of-allowlist playback rate must be ignored');

  mockAudio.currentTime = 5;
  (audioHandlers.timeupdate || []).forEach((fn) => fn());
  assert.equal(ch0.getAttribute('aria-current'), 'true');
  assert.equal(ch1.getAttribute('aria-current'), null);

  // Full Hugo integration test (including exportDesktopDetails v1.4.6 contract!)
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-podcast-hugo-', { copyHubs: true, copyTopLevelPages: true, enableGit: true });

  writePost(repo, '2026-11-24-paper-2611-96001', {
    title: 'Podcast Referenced Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.96001', paper_digest_score: 8.6
  }, '# 📄 播客提及论文\n\n## 📌 核心摘要\n\n测试论文正文。');

  writePost(repo, '2026-11-24', {
    title: '语音/音乐/音频论文速递 2026-11-24', date: '2026-11-24', draft: false, paper_digest_page_type: 'index'
  }, '# 语音/音乐/音频论文速递 2026-11-24\n\n共分析 1 篇论文。\n\n## 论文列表\n\n### 1. [播客提及论文](/audio-paper-digest-blog/posts/2026-11-24-paper-2611-96001/) {#paper-1}\n\n摘要。');

  writePost(repo, '2026-11-23', {
    title: '语音/音乐/音频论文速递 2026-11-23', date: '2026-11-23', draft: false, paper_digest_page_type: 'index'
  }, '# 语音/音乐/音频论文速递 2026-11-23\n\n共分析 0 篇论文。');

  writePost(repo, '2026-11-22', {
    title: '语音/音乐/音频论文速递 2026-11-22', date: '2026-11-22', draft: false, paper_digest_page_type: 'index'
  }, '# 语音/音乐/音频论文速递 2026-11-22\n\n共分析 0 篇论文。');

  fs.writeFileSync(path.join(repo, 'data/podcast-episodes.json'), JSON.stringify({
    contract: 'paper-daily-podcast-feed',
    episodes: [
      {
        date: '2026-11-24',
        title: '2026-11-24 音频前沿播客',
        summary: '本期速览语音识别与音频大模型新进展。',
        audioUrl: 'https://github.com/nanless/audio-paper-digest/releases/download/podcast-2026-11-24/daily-2026-11-24.mp3',
        durationSeconds: 425,
        chapters: [
          { title: '开场与趋势总览', startSeconds: 0 },
          { title: '精读：播客提及论文', startSeconds: 125, paperAnchor: '#paper-1', paperUrl: '/audio-paper-digest-blog/posts/2026-11-24-paper-2611-96001/' }
        ]
      },
      {
        date: '2026-11-23',
        title: '恶意外部音频链接测试',
        audioUrl: 'https://evil.example/malicious.mp3',
        durationSeconds: 120
      }
    ]
  }), 'utf8');

  // Create static/feeds/podcast.xml to verify subscribe.html conditional link
  fs.mkdirSync(path.join(repo, 'static/feeds'), { recursive: true });
  fs.writeFileSync(path.join(repo, 'static/feeds/podcast.xml'), '<?xml version="1.0"?><rss version="2.0"><channel><title>Podcast</title></channel></rss>\n', 'utf8');

  gitExec(repo, ['init']);
  gitExec(repo, ['add', '.']);
  gitExec(repo, ['commit', '-m', 'test: wave 14.3 podcast fixture']);

  const dest = path.join(workspace, 'public');
  runHugo(repo, dest);
  shardIndex(dest);
  exportDesktopDetails(dest, repo);
  verifyDesktopDetails(dest);
  verifyPageNavigation(dest);

  const validDaily = fs.readFileSync(path.join(dest, 'posts/2026-11-24/index.html'), 'utf8');
  const podcastIdx = validDaily.indexOf('daily-podcast-card');
  const toolsIdx = validDaily.indexOf('daily-edition-tools');
  const bodyIdx = validDaily.indexOf('id=article-body') >= 0 ? validDaily.indexOf('id=article-body') : validDaily.indexOf('id="article-body"');
  assert.ok(podcastIdx > 0 && toolsIdx > podcastIdx && bodyIdx > toolsIdx, 'podcast player must render strictly BEFORE daily-edition-tools and strictly OUTSIDE #article-body');
  const articleBodySlice = validDaily.slice(bodyIdx, validDaily.indexOf('</article>', bodyIdx));
  assert.doesNotMatch(articleBodySlice, /<audio\b|daily-podcast-card/, '#article-body must never contain <audio> or podcast player markup');
  assert.match(validDaily, /<audio[^>]+preload=none[^>]+controls[^>]+src=https:\/\/github\.com\/nanless\/audio-paper-digest\/releases\/download\/podcast-2026-11-24\/daily-2026-11-24\.mp3/);
  assert.match(validDaily, /data-start-sec=125/);
  assert.match(validDaily, /data-podcast-rate=1\.5/);
  assert.match(validDaily, /时长 07:05/);
  assert.match(validDaily, /🎙️ 每日播客 RSS/);

  // Malicious URL daily must NOT render player
  const badDaily = fs.readFileSync(path.join(dest, 'posts/2026-11-23/index.html'), 'utf8');
  assert.doesNotMatch(badDaily, /daily-podcast-card|<audio\b/, 'non-allowlisted audioUrl must fail closed');

  // Unmatched date daily must NOT render player
  const noEpDaily = fs.readFileSync(path.join(dest, 'posts/2026-11-22/index.html'), 'utf8');
  assert.doesNotMatch(noEpDaily, /daily-podcast-card|<audio\b/, 'date without episode must be a graceful no-op');

  // Removing static/feeds/podcast.xml hides the subscribe link cleanly
  fs.rmSync(path.join(repo, 'static/feeds/podcast.xml'));
  const destNoRss = path.join(workspace, 'public-no-podcast-rss');
  runHugo(repo, destNoRss);
  const dailyNoRss = fs.readFileSync(path.join(destNoRss, 'posts/2026-11-24/index.html'), 'utf8');
  assert.doesNotMatch(dailyNoRss, /🎙️ 每日播客 RSS/);
});

// ============================================================================
// 5. Deliverable 3.2: Wave 14.5 client/signals/resource-badges.json Export
// ============================================================================
test('Deliverable 3.2 (Wave 14.5): export-resource-badges emits exact paper-resource-badges-index contract strictly outside client/details/*', (t) => {
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-resource-badges-', { copyHubs: true, copyTopLevelPages: true, enableGit: true });

  writePost(repo, '2026-11-24-full-signals-2611-97001', {
    title: 'Full Signals Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.97001', paper_digest_score: 8.8
  }, [
    '# 📄 全套开源资源论文',
    '',
    '## 📌 核心摘要',
    '',
    '提供代码、模型权重、数据集、试听 Demo 和项目主页。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码相关资源：<https://github.com/example-lab/full-audio> — 链接可访问（HTTP 200）',
    '- 模型相关资源：<https://huggingface.co/example-lab/full-audio-ckpt> — 链接可访问（HTTP 200）',
    '- 数据相关资源：<https://huggingface.co/datasets/example-lab/full-audio-bench> — 链接可访问（HTTP 200）',
    '- 演示资源：<https://example-lab.github.io/full-audio-demo/> — 链接可访问（HTTP 200）',
    '- 项目主页：<https://example-lab.github.io/full-audio/> — 链接可访问（HTTP 200）'
  ].join('\n'));

  writePost(repo, '2026-11-24-negative-only-2611-97002', {
    title: 'Unavailable & Third-Party Only Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.97002', paper_digest_score: 7.4
  }, [
    '# 📄 无可用作者自有资源论文',
    '',
    '## 📌 核心摘要',
    '',
    '仅列出第三方链接与不可访问链接。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码相关资源：<https://github.com/example-lab/dead-repo> — 暂时无法访问',
    '- 模型相关资源：<https://huggingface.co/example-lab/dead-model> — 链接不可用',
    '- 第三方资源：<https://github.com/pytorch/audio> — 链接可访问（HTTP 200）'
  ].join('\n'));

  writePost(repo, 'conference-icassp-2026-demo97003', {
    title: 'Conference Code Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:icassp:2026:icassp-arnumber:11997003',
    paper_digest_score: 8.1
  }, [
    '# 📄 会议开源代码论文',
    '',
    '## 📌 核心摘要',
    '',
    '会议论文带代码仓库。',
    '',
    '## 🔗 论文资源',
    '',
    '- 代码：<https://github.com/example-lab/icassp-audio> — 链接可访问（HTTP 200）'
  ].join('\n'));

  gitExec(repo, ['init']);
  gitExec(repo, ['add', '.']);
  gitExec(repo, ['commit', '-m', 'test: wave 14.5 resource badges fixture']);

  const dest = path.join(workspace, 'public');
  runHugo(repo, dest);
  shardIndex(dest);
  exportDesktopDetails(dest, repo);
  const badgeStats = exportResourceBadges(dest, repo);

  // Desktop details manifest/snapshots/fingerprints must remain 100% untouched & valid!
  verifyDesktopDetails(dest);

  assert.equal(badgeStats.contract, 'paper-resource-badges-index');
  assert.equal(badgeStats.schemaFingerprint, 'a050092542a07bfdfc8bd20f0bfe012ab36b8e1f394c7c0bdbcf8ee98aee6724');
  assert.equal(badgeStats.contract, BADGES_CONTRACT);
  assert.equal(badgeStats.schemaFingerprint, BADGES_FP);
  assert.equal(fs.existsSync(path.join(dest, 'client/signals/resource-badges.json')), true);
  assert.equal(fs.existsSync(path.join(dest, 'client/details/resource-badges.json')), false, 'must stay strictly outside client/details/*');

  const verified = verifyResourceBadges(dest);
  assert.equal(verified.paperCount, 3);

  const data = JSON.parse(fs.readFileSync(path.join(dest, 'client/signals/resource-badges.json'), 'utf8'));
  const fullEntry = data.papers['arxiv:2611.97001'];
  assert.equal(fullEntry.hasCode, true);
  assert.equal(fullEntry.hasModel, true);
  assert.equal(fullEntry.hasDataset, true);
  assert.equal(fullEntry.hasDemo, true);
  assert.equal(fullEntry.hasProjectPage, true);
  assert.deepEqual(fullEntry.codeUrls, ['https://github.com/example-lab/full-audio']);
  assert.deepEqual(fullEntry.demoUrls, ['https://example-lab.github.io/full-audio-demo/']);
  assert.deepEqual(fullEntry.projectUrls, ['https://example-lab.github.io/full-audio/']);
  assert.equal(Object.prototype.hasOwnProperty.call(fullEntry, 'hasWeights'), false, 'must use protocol-declared hasModel, never undeclared hasWeights');

  const negEntry = data.papers['arxiv:2611.97002'];
  assert.equal(negEntry.hasCode, false);
  assert.equal(negEntry.hasModel, false);
  assert.equal(negEntry.hasDataset, false);
  assert.equal(negEntry.hasDemo, false);
  assert.equal(negEntry.hasProjectPage, false);

  // Conference paper canonical ID matches macOS/Android paper.id (NO `paper:` prefix!)
  const confEntry = data.papers['conference:icassp:2026:icassp-arnumber:11997003'];
  assert.ok(confEntry, 'conference paper must be keyed by canonical paperId without paper: prefix');
  assert.equal(confEntry.hasCode, true);

  // Negative fail-closed tests on verifyResourceBadges
  const badgePath = path.join(dest, 'client/signals/resource-badges.json');
  const writeAndExpectThrow = (mutated, pattern) => {
    fs.writeFileSync(badgePath, typeof mutated === 'string' ? mutated : JSON.stringify(mutated), 'utf8');
    assert.throws(() => verifyResourceBadges(dest), pattern);
  };
  writeAndExpectThrow({ ...data, schemaFingerprint: '0'.repeat(64) }, /协议校验|指纹/);
  writeAndExpectThrow({ ...data, papers: { 'arxiv:2611.97001': { hasCode: true, hasWeights: true } } }, /未声明字段/);
  writeAndExpectThrow('{"contract":"paper-resource-badges-index","schemaFingerprint":"a050092542a07bfdfc8bd20f0bfe012ab36b8e1f394c7c0bdbcf8ee98aee6724","generatedAt":"2026-11-24T00:00:00Z","papers":{"__proto__":{"hasCode":true}}}', /危险|不能为空/);
  writeAndExpectThrow({ ...data, papers: { 'arxiv:2611.97001': { hasCode: true, codeUrls: ['http://insecure.example/repo'] } } }, /HTTPS/);
  writeAndExpectThrow({ ...data, papers: { 'arxiv:2611.97001': { hasCode: true, codeUrls: ['https://user:pass@github.com/a/b'] } } }, /HTTPS/);
});

// ============================================================================
// 6. Round 1 Adversarial Review Regressions (P0 #1/#2, P1 #3/#4/#5/#6, P2 #7/#8)
// ============================================================================
test('Round 1 Regression (P0 #1 & P0 #2): render-image strips KaTeX HTML from alt text with proper HTML escaping and 2026-05-08 missing-image page emits zero placeholder_for_fig links', (t) => {
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-r1-p0-', { copyHubs: true, copyTopLevelPages: true, enableGit: true });

  // P0 #1: Linked image with \[a, i, I, u\] (like shao26-jep) + inline math \(M_i\) + quotes & angle brackets in alt, followed by H3 headings!
  const jepLikeBody = [
    '# 📄 图像 Alt 含公式与引号回归测试',
    '',
    '## 📌 核心摘要',
    '',
    '测试 Goldmark passthrough 在图片 alt 中触发 KaTeX SSR 时不会破坏 HTML 属性或吞掉后续章节标题。',
    '',
    '## 🧭 深度解读',
    '',
    '### 共振峰点云是否支持高央元音的定位',
    '',
    '[![原论文 Figure 2：Nuages de points de \\[a, i, I, u\\] "quoted" <tag>](https://nanless.github.io/audio-paper-digest-blog/og-default.png)](https://nanless.github.io/audio-paper-digest-blog/og-default.png)',
    '',
    '![图 1：模型 \\(M_i\\) 与阈值 \\(\\alpha < \\beta\\) 的 "A & B" 对比](https://nanless.github.io/audio-paper-digest-blog/og-default.png)',
    '',
    '### 振幅距离时间曲线能否把摩擦元音等同于擦音',
    '',
    '下游章节正文保持完整可见。',
    '',
    '### 何时值得参考本研究，还需补哪项验证',
    '',
    '结尾章节同样保持完整锚点。'
  ].join('\n');

  writePost(repo, '2026-11-24-alt-math-2611-98001', {
    title: 'Alt Math Regression Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.98001', paper_digest_score: 8.3
  }, jepLikeBody);

  // P0 #2: Copy the real 2026-05-08 post and real missing_image_presentations.json to verify zero placeholder_for_fig*.jpg
  writePost(repo, '2026-05-08', {
    title: '语音/音乐/音频论文速递 2026-05-08', date: '2026-05-08', draft: false, paper_digest_page_type: 'index'
  }, '# 语音/音乐/音频论文速递 2026-05-08\n\n共分析 1 篇论文。');
  fs.copyFileSync(
    path.join(BLOG_ROOT, 'content/posts/2026-05-08-predictive-generative-drift-decomposition-for.md'),
    path.join(repo, 'content/posts/2026-05-08-predictive-generative-drift-decomposition-for.md')
  );
  fs.copyFileSync(
    path.join(BLOG_ROOT, 'data/missing_image_presentations.json'),
    path.join(repo, 'data/missing_image_presentations.json')
  );
  // Copy only the 2026-05-08 entry from taxonomy-history.json / identity-history.json if needed for verified citation
  for (const fn of ['taxonomy-history.json', 'identity-history.json']) {
    const src = path.join(BLOG_ROOT, 'data', fn);
    if (fs.existsSync(src)) {
      const full = JSON.parse(fs.readFileSync(src, 'utf8'));
      const key = 'content/posts/2026-05-08-predictive-generative-drift-decomposition-for.md';
      if (full.records && full.records[key]) {
        fs.writeFileSync(path.join(repo, 'data', fn), JSON.stringify({ contract: full.contract, records: { [key]: full.records[key] } }), 'utf8');
      }
    }
  }

  gitExec(repo, ['init']);
  gitExec(repo, ['add', '.']);
  gitExec(repo, ['commit', '-m', 'test: P0-1 and P0-2 regression fixture']);

  const dest = path.join(workspace, 'public');
  runHugo(repo, dest);
  shardIndex(dest);
  exportDesktopDetails(dest, repo);
  verifyDesktopDetails(dest);
  verifyPageNavigation(dest);

  const altHtml = fs.readFileSync(path.join(dest, 'posts/2026-11-24-alt-math-2611-98001/index.html'), 'utf8');
  assert.match(altHtml, /id=振幅距离时间曲线能否把摩擦元音等同于擦音|id="振幅距离时间曲线能否把摩擦元音等同于擦音"/, 'downstream H3 heading anchor must survive image alt math');
  assert.match(altHtml, /id=何时值得参考本研究还需补哪项验证|id="何时值得参考本研究还需补哪项验证"/);
  const imgs = altHtml.match(/<img\b[^>]*>/gi) || [];
  assert.ok(imgs.length >= 2);
  for (const img of imgs) {
    assert.doesNotMatch(img, /\\"/, 'render-image must not emit Go %q backslash-escaped quotes');
    assert.doesNotMatch(img, /<span|<math|class=katex/i, 'render-image alt must strip KaTeX HTML spans/math');
  }

  const driftHtml = fs.readFileSync(path.join(dest, 'posts/2026-05-08-predictive-generative-drift-decomposition-for/index.html'), 'utf8');
  assert.doesNotMatch(driftHtml, /placeholder_for_fig[0-9]+\.jpg/, '2026-05-08 post must replace all 3 placeholder_for_fig*.jpg with honest unavailable notices');
  assert.equal((driftHtml.match(/image-unavailable-notice/g) || []).length, 3);

  // Also verify Hugo 0.160.1 home RSS (/index.xml) is NOT shadowed by layouts/index.rsshighscore.xml!
  const rssFile = path.join(dest, 'index.xml');
  const rssXml = fs.readFileSync(rssFile, 'utf8');
  const rssStats = verifyRss(rssXml, fs.statSync(rssFile).size);
  assert.equal(rssStats.itemCount, 1, 'main /index.xml must contain only daily index posts');
  assert.match(rssXml, /\/posts\/2026-05-08\//);
  assert.doesNotMatch(rssXml, /2026-11-24-alt-math-2611-98001|feeds\/high-score\.xml/);
  const highScoreXml = fs.readFileSync(path.join(dest, 'feeds/high-score.xml'), 'utf8');
  assert.match(highScoreXml, /feeds\/high-score\.xml/);
  assert.match(highScoreXml, /2026-11-24-alt-math-2611-98001/);
});

test('Round 1 Regression (P1 #3 & P1 #4): strict podcast audioUrl/paperUrl allowlists, float guards, pre-metadata seek, and error handler', (t) => {
  // P1 #3: Strict GitHub release tag/filename segment checks
  for (const bad of [
    'https://github.com/nanless/audio-paper-digest/releases/download/./daily.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/..mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/%2e%2e/daily.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/nested/daily.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/bad@name.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/v1/bad\\name.mp3',
    'https://github.com/nanless/audio-paper-digest/releases/download/' + 'a'.repeat(129) + '/daily.mp3'
  ]) {
    assert.equal(podcastPlayer.isAllowedPodcastAudioUrl(bad), false, `JS must reject ${bad}`);
  }

  // P1 #4: Pre-metadata seek (<audio preload="none">, readyState === 0) + loadedmetadata clamp + error event
  const makeBtn = (attrs) => {
    const handlers = {};
    const classes = new Set();
    const map = { ...attrs };
    return {
      classList: { toggle: (c, on) => (on ? classes.add(c) : classes.delete(c)), contains: (c) => classes.has(c) },
      getAttribute: (k) => (Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null),
      setAttribute: (k, v) => { map[k] = String(v); },
      removeAttribute: (k) => { delete map[k]; },
      addEventListener: (ev, fn) => { (handlers[ev] ||= []).push(fn); },
      click: () => { (handlers.click || []).forEach((fn) => fn()); }
    };
  };
  const audioHandlers = {};
  let loadCalls = 0;
  let playCalls = 0;
  let seekCount = 0;
  let curTime = 0;
  const mockAudio = {
    readyState: 0,
    duration: Number.NaN,
    playbackRate: 1.0,
    get currentTime() { return curTime; },
    set currentTime(v) { seekCount += 1; curTime = v; },
    getAttribute: (k) => (k === 'src' ? 'https://github.com/nanless/audio-paper-digest/releases/download/podcast-2026-11-24/daily.mp3' : null),
    addEventListener: (ev, fn) => { (audioHandlers[ev] ||= []).push(fn); },
    load: () => { loadCalls += 1; },
    play: () => { playCalls += 1; return Promise.resolve(); }
  };
  const statusEl = { textContent: '' };
  const chLate = makeBtn({ 'data-start-sec': '500' });
  const cardAttrs = {};
  const mockCard = {
    getAttribute: (k) => cardAttrs[k] || null,
    setAttribute: (k, v) => { cardAttrs[k] = v; },
    querySelector: (sel) => (sel === 'audio' ? mockAudio : sel === '[data-podcast-status]' ? statusEl : null),
    querySelectorAll: (sel) => (sel === '[data-start-sec]' ? [chLate] : [])
  };
  assert.equal(podcastPlayer.initPodcastPlayers({ querySelectorAll: () => [mockCard] }), 1);

  // Click while readyState === 0 -> queues pending seek and calls load(), does NOT prematurely set currentTime
  chLate.click();
  assert.equal(loadCalls, 1);
  assert.equal(seekCount, 0, 'must wait for loadedmetadata when readyState < 1');

  // Metadata arrives with shorter duration (300s) -> clamps pending seek to 300s
  mockAudio.readyState = 1;
  mockAudio.duration = 300;
  (audioHandlers.loadedmetadata || []).forEach((fn) => fn());
  assert.equal(seekCount, 1);
  assert.equal(curTime, 300);
  assert.ok(playCalls >= 2);

  // Error event clears pending seek and announces honest error message via textContent
  mockAudio.readyState = 0;
  chLate.click();
  (audioHandlers.error || []).forEach((fn) => fn());
  assert.equal(statusEl.textContent, '音频加载失败，请稍后重试或点击下载 MP3');
  mockAudio.readyState = 1;
  const beforeErrMeta = seekCount;
  (audioHandlers.loadedmetadata || []).forEach((fn) => fn());
  assert.equal(seekCount, beforeErrMeta, 'error handler must clear pendingSeekSec');

  // Hugo template test for malformed duration/startSeconds and malicious audioUrl / paperUrl
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-r1-p1-podcast-', { copyHubs: false, copyTopLevelPages: false });
  writePost(repo, '2026-11-24', { title: 'Daily 1', date: '2026-11-24', draft: false, paper_digest_page_type: 'index' }, '# Daily 1');
  writePost(repo, '2026-11-23', { title: 'Daily 2', date: '2026-11-23', draft: false, paper_digest_page_type: 'index' }, '# Daily 2');
  fs.writeFileSync(path.join(repo, 'data/podcast-episodes.json'), JSON.stringify({
    episodes: [
      {
        date: '2026-11-24',
        title: 'Malformed Numbers & PaperUrl Guard',
        audioUrl: 'https://github.com/nanless/audio-paper-digest/releases/download/podcast-2026-11-24/ep.mp3',
        durationSeconds: 'not-a-float',
        chapters: [
          { title: 'Valid Zero Chapter', startSeconds: 0, paperUrl: '/posts/evil?x=1' },
          { title: 'Bad Percent PaperUrl', startSeconds: 30, paperUrl: '/posts/a%2fb/' },
          { title: 'Malformed Start Chapter', startSeconds: 'oops-not-number' },
          { title: 'Good Chapter', startSeconds: 60, paperUrl: '/posts/valid-paper-1/' }
        ]
      },
      {
        date: '2026-11-23',
        title: 'Nested Path AudioUrl Blocked',
        audioUrl: 'https://github.com/nanless/audio-paper-digest/releases/download/v1/nested/ep.mp3'
      }
    ]
  }), 'utf8');

  const dest = path.join(workspace, 'public');
  runHugo(repo, dest);
  const d1 = fs.readFileSync(path.join(dest, 'posts/2026-11-24/index.html'), 'utf8');
  assert.match(d1, /Valid Zero Chapter/);
  assert.match(d1, /Good Chapter/);
  assert.doesNotMatch(d1, /Malformed Start Chapter/, 'non-numeric startSeconds chapter must fail closed without panicking Hugo');
  assert.doesNotMatch(d1, /evil\?x=1|a%2fb/, 'malformed paperUrl with query or percent-encoding must be dropped');
  assert.match(d1, /\/audio-paper-digest-blog\/posts\/valid-paper-1\//);
  const d2 = fs.readFileSync(path.join(dest, 'posts/2026-11-23/index.html'), 'utf8');
  assert.doesNotMatch(d2, /daily-podcast-card|<audio\b/, 'nested release path must be rejected');
});

test('Round 1 Regression (P1 #5, P1 #6, P2 #7, P2 #8): zero-norm graph guard, RFC 2396 URL hygiene, strict verifyBuild checks, symlink atomic refusal & heading scan', (t) => {
  const { workspace, repo } = setupFixtureRepo(t, 'wave14-r1-p1-p2-', { copyHubs: true, copyTopLevelPages: true });
  const { snap, flatHeader, conceptObj } = makeConceptHelpers();

  // P1 #5: Zero-norm paper must NEVER receive stale graph recommendations, and normal paper must reject zero-norm targets
  writePost(repo, 'zero-norm', {
    title: 'Zero Norm Paper', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.99001', paper_digest_score: 7.0, tags: []
  }, '# Zero Norm');
  writePost(repo, 'normal-a', {
    title: 'Normal A', date: '2026-11-24', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.99002', paper_digest_score: 8.2,
    paper_digest_tags_contract: flatHeader.contract, paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256, paper_digest_tags_concepts: [conceptObj('task.asr')]
  }, '# Normal A');
  writePost(repo, 'normal-b', {
    title: 'Normal B', date: '2026-11-23', draft: false,
    paper_digest_page_type: 'paper', paper_digest_arxiv_id: '2611.99003', paper_digest_score: 8.0,
    paper_digest_tags_contract: flatHeader.contract, paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256, paper_digest_tags_concepts: [conceptObj('task.asr')]
  }, '# Normal B');

  // Tampered graph injecting recommendations for zero-norm AND pointing normal-a at zero-norm
  fs.writeFileSync(path.join(repo, 'data/related-graph-auto.json'), JSON.stringify({
    contract: 'related-graph-auto-v1',
    totalN: 3,
    basePath: '/audio-paper-digest-blog/',
    generatedAt: '2026-11-24T00:00:00Z',
    papers: {
      'arxiv:2611.99001': [{ identity: 'arxiv:2611.99002', relPermalink: '/audio-paper-digest-blog/posts/normal-a/', score: 900, reasons: ['伪造推荐'] }],
      'arxiv:2611.99002': [{ identity: 'arxiv:2611.99001', relPermalink: '/audio-paper-digest-blog/posts/zero-norm/', score: 900, reasons: ['指向零向量'] }],
      'arxiv:2611.99003': [{ identity: 'arxiv:2611.99002', relPermalink: '/audio-paper-digest-blog/posts/normal-a/', score: 1000, reasons: ['共同研究任务：语音识别'] }]
    }
  }), 'utf8');

  const dest = path.join(workspace, 'public');
  runHugo(repo, dest);
  const zeroHtml = fs.readFileSync(path.join(dest, 'posts/zero-norm/index.html'), 'utf8');
  assert.doesNotMatch(zeroHtml, /<section class=["']?related-posts|related-papers-title|伪造推荐/, 'zero-norm paper must never render stale graph recommendations');
  const normAHtml = fs.readFileSync(path.join(dest, 'posts/normal-a/index.html'), 'utf8');
  const normARelated = normAHtml.match(/<section class=["']?related-posts[\s\S]*?<\/section>/)?.[0] || '';
  assert.doesNotMatch(normARelated, /\/posts\/zero-norm\//, 'graph entry pointing to zero-norm target must be rejected and fall back');
  assert.match(normARelated, /\/posts\/normal-b\//, 'normal-a must fall back to real match normal-b');

  // P2 #7: verifySotaHubs({ requireLive: true }) fails when hubs used fallback, passes when built with live auto data
  assert.throws(() => verifySotaHubs(dest, { requireLive: true }), /静态降级|实时统计/);
  writeSotaHubsAuto(repo);
  const destLive = path.join(workspace, 'public-live');
  runHugo(repo, destLive);
  assert.equal(verifySotaHubs(destLive, { requireLive: true }).requireLive, true);

  // P2 #7: verifyRelatedGraph rejects self-loops, count mismatches, invalid generatedAt, off-prefix relPermalink, non-string reasons
  const graphFile = path.join(destLive, 'data/related-graph.json');
  fs.mkdirSync(path.dirname(graphFile), { recursive: true });
  const baseGraph = {
    contract: 'paper-related-graph-v1',
    generatedAt: '2026-11-24T00:00:00Z',
    paperCount: 2,
    edgeCount: 1,
    papers: {
      'arxiv:2611.99002': [{ identity: 'arxiv:2611.99003', relPermalink: '/audio-paper-digest-blog/posts/normal-b/', score: 900, reasons: ['共同研究任务：语音识别'] }],
      'arxiv:2611.99003': []
    }
  };
  fs.writeFileSync(graphFile, JSON.stringify(baseGraph), 'utf8');
  assert.equal(verifyRelatedGraph(destLive).edgeCount, 1);
  for (const [label, mut, re] of [
    ['self-loop', { ...baseGraph, papers: { ...baseGraph.papers, 'arxiv:2611.99002': [{ identity: 'arxiv:2611.99002', relPermalink: '/audio-paper-digest-blog/posts/normal-a/', score: 900, reasons: [] }] } }, /自环/],
    ['paperCount mismatch', { ...baseGraph, paperCount: 99 }, /paperCount/],
    ['edgeCount mismatch', { ...baseGraph, edgeCount: 99 }, /edgeCount/],
    ['bad generatedAt', { ...baseGraph, generatedAt: 'not-a-date' }, /generatedAt/],
    ['off-prefix relPermalink', { ...baseGraph, papers: { ...baseGraph.papers, 'arxiv:2611.99002': [{ identity: 'arxiv:2611.99003', relPermalink: '/other/posts/x/', score: 900, reasons: [] }] } }, /越界/],
    ['non-string reason', { ...baseGraph, papers: { ...baseGraph.papers, 'arxiv:2611.99002': [{ identity: 'arxiv:2611.99003', relPermalink: '/audio-paper-digest-blog/posts/normal-b/', score: 900, reasons: [123] }] } }, /字符串数组/]
  ]) {
    fs.writeFileSync(graphFile, JSON.stringify(mut), 'utf8');
    assert.throws(() => verifyRelatedGraph(destLive), re, `verifyRelatedGraph must reject ${label}`);
  }

  // P1 #6: RFC 2396 / Java URI strict URL checks in isStrictClientHttpsUrl & verifyResourceBadges
  const { isStrictClientHttpsUrl, writeJsonAtomic, extractResourceSignalsFromBuffer } = require('../scripts/lib/research-corpus');
  assert.equal(isStrictClientHttpsUrl('https://github.com/example/repo'), true);
  for (const badUrl of [
    'https://bad_host.example.com/repo',
    'https://example.com/path[0]',
    'https://example.com/path{a}',
    'https://example.com/path|b',
    'https://example.com/path^c',
    'https://example.com/中文路径',
    'https://user:pass@example.com/repo'
  ]) {
    assert.equal(isStrictClientHttpsUrl(badUrl), false, `must reject RFC2396/Java-URI unsafe URL: ${badUrl}`);
  }
  const badgesFile = path.join(destLive, 'client/signals/resource-badges.json');
  fs.mkdirSync(path.dirname(badgesFile), { recursive: true });
  const writeBadge = (papers) => {
    fs.writeFileSync(badgesFile, JSON.stringify({
      contract: BADGES_CONTRACT,
      schemaFingerprint: BADGES_FP,
      generatedAt: '2026-11-24T00:00:00Z',
      papers
    }), 'utf8');
  };
  writeBadge({ 'arxiv:2611.99002': { hasCode: true, codeUrls: ['https://bad_host.example.com/repo'] } });
  assert.throws(() => verifyResourceBadges(destLive), /RFC 2396/);
  writeBadge({ 'arxiv:2611.99002': { hasCode: true, codeUrls: ['https://example.com/a[1]'] } });
  assert.throws(() => verifyResourceBadges(destLive), /RFC 2396/);
  writeBadge({ 'arxiv:2611.99002': { hasCode: true, codeUrls: Array.from({ length: 9 }, (_, i) => `https://github.com/a/r${i}`) } });
  assert.throws(() => verifyResourceBadges(destLive), /超长/);

  // P2 #8: writeJsonAtomic refuses existing symlink target
  const targetReal = path.join(workspace, 'real.json');
  const targetLink = path.join(workspace, 'link.json');
  fs.writeFileSync(targetReal, '{}', 'utf8');
  fs.symlinkSync(targetReal, targetLink);
  assert.throws(() => writeJsonAtomic(targetLink, { x: 1 }), /symlink/);

  // P2 #8: extractResourceSignalsFromBuffer skips false H2 heading containing keyword and finds real heading below
  const trickyBody = Buffer.from([
    '# Paper',
    '',
    '## 讨论：开源资源对比分析',
    '',
    '- 这里只是正文讨论，不是资源清单。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码相关资源：<https://github.com/real-org/real-repo> — 链接可访问（HTTP 200）',
    '- 模型相关资源：<https://huggingface.co/real-org/real-ckpt> — 链接可访问（HTTP 200）'
  ].join('\n'), 'utf8');
  const sig = extractResourceSignalsFromBuffer(trickyBody);
  assert.equal(sig.hasCode, true);
  assert.equal(sig.hasModel, true);
  assert.deepEqual(sig.codeUrls, ['https://github.com/real-org/real-repo']);
});
