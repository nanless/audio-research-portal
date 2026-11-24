'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

const FACET_WEIGHTS = {
  task: 5,
  scientific_topic: 4,
  method: 4,
  model_family: 4,
  research_focus: 3,
  artifact: 3,
  application: 3,
  setting: 2,
  signal: 1,
  legacy: 1
};

function computeIdfCosineTop3(groups, targetIdentity) {
  const totalN = groups.size;
  const df = new Map();
  const facetById = new Map();
  for (const g of groups.values()) {
    for (const [id, facet] of g.facets.entries()) {
      df.set(id, (df.get(id) || 0) + 1);
      facetById.set(id, facet);
    }
  }
  const conceptWeight = new Map();
  for (const [id, freq] of df.entries()) {
    const base = FACET_WEIGHTS[facetById.get(id)] || 1;
    const idfRaw = Math.round(Math.log((totalN + 1) / (freq + 1)) * 10);
    const idf = idfRaw > 1 ? idfRaw : 1;
    conceptWeight.set(id, base * idf);
  }
  const normOf = (g) => {
    let sumSq = 0;
    for (const id of g.ids) {
      const w = conceptWeight.get(id) || 1;
      sumSq += w * w;
    }
    return Math.sqrt(sumSq);
  };
  const current = groups.get(targetIdentity);
  const currentNorm = normOf(current);
  if (currentNorm <= 0) return [];
  const ranked = [];
  for (const cand of groups.values()) {
    if (cand.identity === targetIdentity) continue;
    let dot = 0;
    for (const id of current.ids) {
      if (cand.ids.has(id)) {
        const w = conceptWeight.get(id) || 1;
        dot += w * w;
      }
    }
    if (dot <= 0) continue;
    const candNorm = normOf(cand);
    if (candNorm <= 0) continue;
    let simInt = Math.round((dot / (currentNorm * candNorm)) * 1000);
    if (simInt < 1) simInt = 1;
    if (simInt > 1000) simInt = 1000;
    const sortKey = `${String(10000 - simInt).padStart(5, '0')}:${String(100 - cand.scoreInt).padStart(3, '0')}:${String(99999999 - cand.dateInt).padStart(8, '0')}:${cand.identity}`;
    ranked.push({ ...cand, simInt, sortKey });
  }
  ranked.sort((a, b) => (a.sortKey < b.sortKey ? -1 : a.sortKey > b.sortKey ? 1 : 0));
  return ranked.slice(0, 3);
}

function buildFixtureSite(t, source, writePostsFn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-mixed-cache-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const content = path.join(root, 'content');
  fs.mkdirSync(path.join(content, 'posts'), { recursive: true });
  writePostsFn(content);
  const dataDir = path.join(root, 'data');
  fs.cpSync(path.join(source, 'data'), dataDir, {
    recursive: true,
    filter: file => {
      const name = path.basename(file);
      return !name.startsWith('fullsite-r6-') && !name.startsWith('fullsite-taxonomy-')
        && !name.startsWith('taxonomy-history') && name !== 'current-page-taxonomy-history-v2.json'
        && name !== 'taxonomy-old-v2-publication-holds.json' && name !== 'exact1028-qualified-classification.json';
    }
  });
  for (const directory of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(source, directory), path.join(root, directory), { recursive: true });
  }
  const config = path.join(root, 'hugo.yaml');
  fs.writeFileSync(config, [
    'baseURL: https://example.test/blog/',
    'theme: PaperMod',
    'buildFuture: true',
    'staticDir: []',
    'dataDir: ' + JSON.stringify(dataDir),
    'outputs:',
    '  home: [HTML, JSON]',
    'params:',
    '  ShowToc: true',
    '  mainSections: [posts]',
    '  homeInfoParams:',
    '    Title: Research'
  ].join('\n'));
  const destination = path.join(root, 'public');
  execFileSync('hugo', [
    '--source', root, '--config', config, '--contentDir', content,
    '--destination', destination, '--noBuildLock', '--panicOnWarning'
  ], { stdio: 'pipe', env: { ...process.env, GOMAXPROCS: '8', HUGO_NUMWORKERMULTIPLIER: '2' } });
  return destination;
}

test('cold concurrent page stores retain metadata, empty classifications and exact 9-facet IDF cosine recommendations across mixed signatures', t => {
  const source = process.env.BLOG_PERF_SOURCE || path.resolve(__dirname, '..');
  const snapshot = JSON.parse(fs.readFileSync(path.join(source, 'data/taxonomy-registry.json')));
  const nodes = ['task', 'method', 'setting'].map(facet => snapshot.concepts.find(n => n.facet === facet));
  const groups = new Map();
  const pages = [];

  const destination = buildFixtureSite(t, source, (content) => {
    for (let i = 0; i < 120; i++) {
      const identityNumber = Math.floor(i / 2);
      const profile = identityNumber % 6;
      const unknown = identityNumber % 7 === 0;
      const conference = identityNumber % 19 === 0;
      const empty = identityNumber % 11 === 0;
      const selected = empty ? [] : profile === 0 ? nodes : profile < 4 ? [nodes[profile - 1]] : [];
      const name = 'paper-' + String(i).padStart(4, '0');
      const arxiv = '2609.' + String(identityNumber).padStart(5, '0');
      const identity = unknown ? 'page:/blog/posts/' + name + '/' : 'arxiv:' + arxiv;
      const tags = empty ? [] : [profile === 5 ? '待核旧标' : '历史共同标签'];
      const ids = selected.length ? selected.map(n => n.id) : tags.map(tag => 'legacy:' + tag);
      const dateStr = i % 2 ? '2026-09-30' : '2026-09-29';
      const scoreVal = Number((6 + (identityNumber % 4) * 0.7).toFixed(1));
      const metadata = {
        title: 'Title ' + name,
        date: dateStr,
        paper_digest_page_type: conference ? 'conference' : 'paper',
        paper_digest_arxiv_id: unknown ? '' : arxiv,
        paper_digest_score: scoreVal,
        paper_digest_taxonomy_contract: 'paper-taxonomy-flat-tags-compat-v1',
        paper_digest_taxonomy_registry_sha256: profile === 5 ? '0'.repeat(64) : snapshot.registrySha256,
        paper_digest_taxonomy_concepts: selected.map(n => ({ id: n.id, facet: n.facet, label: n.zh })),
        tags
      };
      fs.writeFileSync(path.join(content, 'posts', name + '.md'), '---\n' + JSON.stringify(metadata) + '\n---\n# ' + metadata.title + '\n## Evidence\nCache fixture.');
      pages.push({ name, identity, ids, conference, unknown });
      if (!conference) {
        const prev = groups.get(identity);
        const facetMap = new Map(prev ? prev.facets : []);
        if (selected.length) selected.forEach(n => facetMap.set(n.id, n.facet));
        else tags.forEach(tag => facetMap.set('legacy:' + tag, 'legacy'));
        const dateInt = Number(dateStr.replace(/-/g, ''));
        const scoreInt = Math.round(scoreVal * 10);
        const keepNew = !prev || dateInt >= prev.dateInt;
        groups.set(identity, {
          identity,
          ids: new Set([...(prev?.ids || []), ...ids]),
          facets: facetMap,
          name: keepNew ? name : prev.name,
          dateInt: keepNew ? dateInt : prev.dateInt,
          scoreInt: keepNew ? scoreInt : prev.scoreInt
        });
      }
    }
  });

  const index = JSON.parse(fs.readFileSync(path.join(destination, 'index.json'), 'utf8'));
  for (const page of pages) {
    const html = fs.readFileSync(path.join(destination, 'posts', page.name, 'index.html'), 'utf8');
    assert.match(html, new RegExp('<h1>Title ' + page.name));
    const indexed = index.find(record => record.permalink.endsWith('/posts/' + page.name + '/'));
    assert.ok(indexed && indexed.titleZh, page.name + ' keeps metadata during cold parallel reads');
    assert.equal(indexed.pageType, page.conference ? 'conference' : 'paper');
    assert.equal(indexed.citation.identityStatus, page.conference || page.unknown ? 'unknown' : 'verified');
    if (page.conference) continue;
    const expected = computeIdfCosineTop3(groups, page.identity).map(c => c.name);
    const related = html.match(/<section class="related-posts[\s\S]*?<\/section>/)?.[0] || '';
    const actual = [...related.matchAll(/href="\/blog\/posts\/(paper-\d+)\/"/g)].map(match => match[1]);
    assert.deepEqual(actual, expected, page.name + ' has exact 9-facet IDF cosine top3 with score/date tiebreaks');
    if (page.ids.some(id => id.startsWith('legacy:')) && actual.length) assert.match(related, /相同关键词/);
  }
});

test('9-facet IDF related papers prefer rare concepts, higher scores and newer dates instead of 2401.* ASCII dominance', t => {
  const source = process.env.BLOG_PERF_SOURCE || path.resolve(__dirname, '..');
  const snapshot = JSON.parse(fs.readFileSync(path.join(source, 'data/tag-catalog-snapshot.json')));
  const pick = (facet, idx = 0) => snapshot.concepts.filter(c => c.facet === facet && c.status !== 'deprecated')[idx];
  const commonTask = pick('task', 0);
  const rareModelFamily = pick('model_family', 0);
  const rareTopic = pick('scientific_topic', 0);
  const rareArtifact = pick('artifact', 0);
  const flatHeader = require('../assets/js/protocol-registry').recordHeader('paper-tag-flat-tags', 'paper-tag-flat-tags');

  const writePaper = (content, slug, { arxiv, date, score, concepts }) => {
    const metadata = {
      title: 'Paper ' + slug,
      date,
      paper_digest_page_type: 'paper',
      paper_digest_arxiv_id: arxiv,
      paper_digest_score: score,
      paper_digest_tags_contract: flatHeader.contract,
      paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
      paper_digest_tags_registry_sha256: snapshot.registrySha256,
      paper_digest_tags_concepts: concepts.map(c => ({ id: c.id, facet: c.facet, label: c.zh }))
    };
    fs.writeFileSync(path.join(content, 'posts', slug + '.md'), '---\n' + JSON.stringify(metadata) + '\n---\n# ' + metadata.title + '\nBody.');
  };

  const destination = buildFixtureSite(t, source, (content) => {
    // 1. Target paper has commonTask + rareModelFamily + rareTopic
    writePaper(content, 'target', { arxiv: '2611.50000', date: '2026-11-20', score: 8.5, concepts: [commonTask, rareModelFamily, rareTopic] });
    // 2. Candidate sharing rareModelFamily + rareTopic + commonTask (highest similarity!)
    writePaper(content, 'best-rare-match', { arxiv: '2611.99999', date: '2026-11-18', score: 7.2, concepts: [commonTask, rareModelFamily, rareTopic] });
    // 3. Three candidates sharing ONLY commonTask (identical similarity!) with different scores & dates:
    //    - Oldest 2401.* low score (would have won under ASCII tie-break!)
    writePaper(content, 'old-ascii-2401', { arxiv: '2401.00001', date: '2024-01-10', score: 6.5, concepts: [commonTask] });
    //    - Newer 2611.* high score (must beat 2401.*!)
    writePaper(content, 'new-high-score', { arxiv: '2611.88888', date: '2026-11-15', score: 9.1, concepts: [commonTask] });
    //    - Newer 2611.* same score as another older paper (newer date must win!)
    writePaper(content, 'new-mid-score', { arxiv: '2611.77777', date: '2026-11-19', score: 8.0, concepts: [commonTask] });
    writePaper(content, 'old-mid-score', { arxiv: '2401.00002', date: '2024-01-11', score: 8.0, concepts: [commonTask] });
    // 4. Add extra background papers with commonTask so commonTask has high df (low IDF)
    for (let k = 0; k < 10; k++) {
      writePaper(content, 'bg-' + k, { arxiv: '2402.0000' + k, date: '2024-02-0' + ((k % 9) + 1), score: 5.5, concepts: [commonTask] });
    }
    // 5. Pair sharing ONLY artifact facet (verifies non-core 9-facet matching & reason label!)
    writePaper(content, 'artifact-a', { arxiv: '2611.60001', date: '2026-11-20', score: 7.5, concepts: [rareArtifact] });
    writePaper(content, 'artifact-b', { arxiv: '2611.60002', date: '2026-11-21', score: 8.2, concepts: [rareArtifact] });
  });

  const targetHtml = fs.readFileSync(path.join(destination, 'posts/target/index.html'), 'utf8');
  const targetRelated = targetHtml.match(/<section class="related-posts[\s\S]*?<\/section>/)?.[0] || '';
  const targetLinks = [...targetRelated.matchAll(/href="\/blog\/posts\/([^/]+)\/"/g)].map(m => m[1]);
  assert.deepEqual(targetLinks, ['best-rare-match', 'new-high-score', 'new-mid-score'],
    'IDF rare match first, then higher score, then newer date — zero 2401.* ASCII dominance!');
  assert.match(targetRelated, /相同模型家族/);
  assert.match(targetRelated, /共同科学主题/);

  const artifactHtml = fs.readFileSync(path.join(destination, 'posts/artifact-a/index.html'), 'utf8');
  const artifactRelated = artifactHtml.match(/<section class="related-posts[\s\S]*?<\/section>/)?.[0] || '';
  assert.match(artifactRelated, /href="\/blog\/posts\/artifact-b\/"/);
  assert.match(artifactRelated, /共同研究产物/);
});
