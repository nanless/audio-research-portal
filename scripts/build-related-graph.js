'use strict';

// Wave 14.2A: Precomputed Cross-Paper Knowledge Graph (pure Node.js, zero external deps).
// Mirrors layouts/partials/related_catalog.html & related_rankings.html 9-facet IDF cosine
// semantics while eliminating per-page O(N^2) Go-template work during Hugo builds.
const path = require('node:path');
const {
  DANGEROUS_KEYS,
  loadResearchCorpus,
  writeJsonAtomic
} = require('./lib/research-corpus');

const AUTO_CONTRACT = 'related-graph-auto-v1';
const PUBLIC_CONTRACT = 'paper-related-graph-v1';
const AUTO_OUTPUT = 'data/related-graph-auto.json';
const PUBLIC_OUTPUT = 'data/related-graph.json';

const FACET_WEIGHTS = Object.freeze({
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
});

const FACET_ROLES = Object.freeze({
  task: '共同研究任务',
  scientific_topic: '共同科学主题',
  method: '共同研究方法',
  model_family: '相同模型家族',
  research_focus: '共同研究重点',
  artifact: '共同研究产物',
  application: '相同应用场景',
  setting: '相同研究条件',
  signal: '相同信号类型',
  legacy: '相同关键词'
});

function formatSortKey(simInt, scoreInt, dateInt, identity) {
  return `${String(10000 - simInt).padStart(5, '0')}:${String(100 - scoreInt).padStart(3, '0')}:${String(99999999 - dateInt).padStart(8, '0')}:${identity}`;
}

function compareCandidate(a, b) {
  if (a.simInt !== b.simInt) return b.simInt - a.simInt;
  if (a.scoreInt !== b.scoreInt) return b.scoreInt - a.scoreInt;
  if (a.dateInt !== b.dateInt) return b.dateInt - a.dateInt;
  return a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0;
}

function buildRelatedGraph(repoRoot = process.cwd(), options = {}) {
  const root = path.resolve(repoRoot);
  const corpus = options.corpus || loadResearchCorpus(root, { includeResources: false });
  const groupList = [...corpus.groups.values()].sort((a, b) =>
    a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0
  );
  const totalN = groupList.length;

  // Build inverted index (conceptId -> list of paper indices) and facet map
  const bucketLists = new Map();
  const facetById = new Map();
  for (let idx = 0; idx < totalN; idx += 1) {
    const g = groupList[idx];
    for (const cid of g.ids) {
      let arr = bucketLists.get(cid);
      if (!arr) {
        arr = [];
        bucketLists.set(cid, arr);
      }
      arr.push(idx);
      const node = g.nodes[cid];
      if (node && node.facet) facetById.set(cid, node.facet);
    }
  }

  // Exact 9-facet IDF weights matching related_catalog.html
  const weightById = new Map();
  const postings = new Map();
  for (const [cid, arr] of bucketLists.entries()) {
    const df = arr.length;
    const facet = facetById.get(cid) || 'legacy';
    const baseWeight = FACET_WEIGHTS[facet] || 1;
    const idfRaw = Math.round(Math.log((totalN + 1) / (df + 1)) * 10);
    const idf = idfRaw > 1 ? idfRaw : 1;
    weightById.set(cid, baseWeight * idf);
    postings.set(cid, Int32Array.from(arr));
  }

  // Precompute per-paper norms & numeric sort fields
  const normArr = new Float64Array(totalN);
  const scoreIntArr = new Int32Array(totalN);
  const dateIntArr = new Int32Array(totalN);
  const identityArr = new Array(totalN);
  for (let i = 0; i < totalN; i += 1) {
    const g = groupList[i];
    let normSq = 0;
    for (const cid of g.ids) {
      const w = weightById.get(cid) || 1;
      normSq += w * w;
    }
    normArr[i] = Math.sqrt(normSq);
    scoreIntArr[i] = g.page.scoreInt || 0;
    dateIntArr[i] = g.page.dateInt || 0;
    identityArr[i] = g.identity;
  }

  // Exact top-3 cosine similarity using reusable typed arrays (O(sum df^2) integer ops)
  const dotArr = new Int32Array(totalN);
  const touched = new Int32Array(totalN);
  const papers = Object.create(null);
  let edgeCount = 0;

  for (let i = 0; i < totalN; i += 1) {
    const g = groupList[i];
    const id = g.identity;
    if (DANGEROUS_KEYS.has(id)) continue;
    const normI = normArr[i];
    if (normI <= 0) {
      papers[id] = [];
      continue;
    }

    let touchedCount = 0;
    for (let c = 0; c < g.ids.length; c += 1) {
      const cid = g.ids[c];
      const w = weightById.get(cid) || 1;
      const w2 = w * w;
      const list = postings.get(cid);
      if (!list) continue;
      for (let p = 0; p < list.length; p += 1) {
        const j = list[p];
        if (j === i) continue;
        if (dotArr[j] === 0) {
          touched[touchedCount] = j;
          touchedCount += 1;
        }
        dotArr[j] += w2;
      }
    }

    // Track top 3 candidates using primitive checks BEFORE allocating any objects
    const top = [];
    let minSim = -1;
    let minScore = -1;
    let minDate = -1;
    let maxIdent = '';
    for (let t = 0; t < touchedCount; t += 1) {
      const j = touched[t];
      const dot = dotArr[j];
      dotArr[j] = 0;
      const normJ = normArr[j];
      if (dot <= 0 || normJ <= 0) continue;
      let simInt = Math.round((dot / (normI * normJ)) * 1000);
      if (simInt < 1) simInt = 1;
      else if (simInt > 1000) simInt = 1000;

      if (top.length === 3) {
        if (simInt < minSim) continue;
        if (simInt === minSim) {
          const sJ = scoreIntArr[j];
          if (sJ < minScore) continue;
          if (sJ === minScore) {
            const dJ = dateIntArr[j];
            if (dJ < minDate) continue;
            if (dJ === minDate && identityArr[j] >= maxIdent) continue;
          }
        }
      }

      const cand = {
        idx: j,
        simInt,
        scoreInt: scoreIntArr[j],
        dateInt: dateIntArr[j],
        identity: identityArr[j]
      };
      if (top.length < 3) {
        top.push(cand);
        top.sort(compareCandidate);
      } else {
        top[2] = cand;
        top.sort(compareCandidate);
      }
      if (top.length === 3) {
        minSim = top[2].simInt;
        minScore = top[2].scoreInt;
        minDate = top[2].dateInt;
        maxIdent = top[2].identity;
      }
    }

    const entries = [];
    for (const win of top) {
      const other = groupList[win.idx];
      const weightedReasons = [];
      for (const cid of g.ids) {
        if (other.idSet.has(cid)) {
          const concept = g.nodes[cid];
          const w = weightById.get(cid) || 1;
          const role = FACET_ROLES[concept.facet] || '相同研究条件';
          weightedReasons.push({
            sortKey: `${String(1000000 - w).padStart(8, '0')}:${cid}`,
            label: `${role}：${concept.zh}`
          });
        }
      }
      weightedReasons.sort((a, b) => (a.sortKey < b.sortKey ? -1 : a.sortKey > b.sortKey ? 1 : 0));
      const reasons = [];
      const seenLabels = new Set();
      for (const r of weightedReasons) {
        if (!seenLabels.has(r.label)) {
          seenLabels.add(r.label);
          reasons.push(r.label);
        }
      }
      entries.push({
        identity: other.identity,
        relPermalink: other.page.relPermalink,
        score: win.simInt,
        reasons
      });
    }

    papers[id] = entries;
    edgeCount += entries.length;
  }

  const generatedAt = options.generatedAt || new Date().toISOString();
  const autoManifest = {
    contract: AUTO_CONTRACT,
    totalN,
    basePath: corpus.basePath,
    generatedAt,
    papers
  };
  const publicManifest = {
    contract: PUBLIC_CONTRACT,
    generatedAt,
    paperCount: totalN,
    edgeCount,
    papers
  };

  return {
    autoManifest,
    publicManifest,
    stats: { paperCount: totalN, edgeCount, concepts: weightById.size }
  };
}

function writeRelatedGraphAuto(repoRoot = process.cwd(), options = {}) {
  const root = path.resolve(repoRoot);
  const built = buildRelatedGraph(root, options);
  const outPath = path.join(root, AUTO_OUTPUT);
  writeJsonAtomic(outPath, built.autoManifest, false);
  return built;
}

function exportPublicRelatedGraph(buildDir = 'public', repoRoot = process.cwd(), prebuilt = null) {
  const root = path.resolve(repoRoot);
  const built = prebuilt && prebuilt.publicManifest ? prebuilt : buildRelatedGraph(root);
  const outPath = path.join(path.resolve(buildDir), PUBLIC_OUTPUT);
  writeJsonAtomic(outPath, built.publicManifest, false);
  return {
    outputPath: outPath,
    paperCount: built.stats.paperCount,
    edgeCount: built.stats.edgeCount
  };
}

if (require.main === module) {
  const targetRoot = process.argv[2] || process.cwd();
  const t0 = Date.now();
  const built = writeRelatedGraphAuto(targetRoot);
  const elapsedMs = Date.now() - t0;
  process.stdout.write(JSON.stringify({ ...built.stats, elapsedMs }) + '\n');
}

module.exports = {
  AUTO_CONTRACT,
  PUBLIC_CONTRACT,
  AUTO_OUTPUT,
  PUBLIC_OUTPUT,
  FACET_WEIGHTS,
  FACET_ROLES,
  buildRelatedGraph,
  writeRelatedGraphAuto,
  exportPublicRelatedGraph
};
