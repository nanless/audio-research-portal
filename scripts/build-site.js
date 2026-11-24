'use strict';
const { spawnSync } = require('node:child_process');
const { shardIndex } = require('./shard-search-index');
const { exportDesktopDetails } = require('./export-desktop-details');
const { buildPagefind } = require('./build-pagefind');
const { loadResearchCorpus } = require('./lib/research-corpus');
const { writeRelatedGraphAuto, exportPublicRelatedGraph } = require('./build-related-graph');
const { writeSotaHubsAuto } = require('./build-sota-hubs');
const { exportResourceBadges } = require('./export-resource-badges');
// This check runs before Hugo or any output mutation. An invalid v2 supplement
// must fail the real build entry, not merely a separately invoked audit.
require('./verify-tags-v2').verify(process.cwd());
require('./verify-tags-v3').verify(process.cwd());
require('./verify-fullsite-tags').verify(process.cwd());
// Select from this checkout's latest complete daily; no image/network requests.
const editionFeature = require('./select-edition-feature').writeEditionFeature(process.cwd());
process.stdout.write('edition-feature: ' + JSON.stringify(editionFeature.selection) + '\n');
// Precompute cross-paper knowledge graph and 8 SOTA hubs once from a shared corpus read (gitignored data/*-auto.json).
const sharedCorpus = loadResearchCorpus(process.cwd(), { includeResources: true });
const relatedGraph = writeRelatedGraphAuto(process.cwd(), { corpus: sharedCorpus });
process.stdout.write('related-graph-auto: ' + JSON.stringify(relatedGraph.stats) + '\n');
const sotaHubs = writeSotaHubsAuto(process.cwd(), { corpus: sharedCorpus });
process.stdout.write('sota-hubs-auto: ' + JSON.stringify({ totalPapers: sotaHubs.totalPapers, hubs: sotaHubs.stats }) + '\n');
const result = spawnSync('hugo', ['--minify', '--noBuildLock', '--cleanDestinationDir', '--printPathWarnings', '--panicOnWarning'], {
  stdio: 'inherit',
  env: { ...process.env, GOMEMLIMIT: process.env.GOMEMLIMIT || '3GiB',
    GOMAXPROCS: process.env.GOMAXPROCS || '2', HUGO_NUMWORKERMULTIPLIER: process.env.HUGO_NUMWORKERMULTIPLIER || '1' }
});
if (result.error || result.signal || result.status !== 0) {
  if (result.error) process.stderr.write(result.error.message + '\n');
  process.exitCode = result.status || 1;
} else {
  const manifest = shardIndex('public');
  process.stdout.write(JSON.stringify({ recordCount: manifest.recordCount, totalBytes: manifest.totalBytes, shardCount: manifest.shards.length }) + '\n');
  const desktopDetails = exportDesktopDetails('public', process.cwd());
  process.stdout.write('desktop-details: ' + JSON.stringify(desktopDetails) + '\n');
  const resourceBadges = exportResourceBadges('public', process.cwd(), { corpus: sharedCorpus });
  process.stdout.write('resource-badges: ' + JSON.stringify(resourceBadges) + '\n');
  const publicGraph = exportPublicRelatedGraph('public', process.cwd(), relatedGraph);
  process.stdout.write('related-graph-public: ' + JSON.stringify(publicGraph) + '\n');
  const pagefind = buildPagefind('public');
  process.stdout.write('pagefind: ' + JSON.stringify(pagefind) + '\n');
}
