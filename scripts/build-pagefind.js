'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const SKIP_TOP_DIRS = new Set(['pagefind', 'client', 'vendor', 'images', 'js', 'css', 'fonts', 'data', 'feeds']);
const PAGEFIND_READY_ATTR_RE = /\bdata-cmdk-pagefind-ready=(?:"[01]"|'[01]'|[01])(?=[\s>])/g;

function updatePagefindReadyFlag(root, readyValue) {
  let updated = 0;
  const replacement = `data-cmdk-pagefind-ready="${readyValue}"`;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (dir === root && SKIP_TOP_DIRS.has(entry.name)) continue;
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const html = fs.readFileSync(full, 'utf8');
        if (!html.includes('data-cmdk-pagefind-ready=')) continue;
        const next = html.replace(PAGEFIND_READY_ATTR_RE, replacement);
        if (next !== html) {
          fs.writeFileSync(full, next, 'utf8');
          updated += 1;
        }
      }
    }
  }
  walk(root);
  return updated;
}

function buildPagefind(buildDir = 'public', options = {}) {
  const root = path.resolve(buildDir);
  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    throw new Error(`Pagefind 构建目录不存在：${root}`);
  }
  const bin = options.bin || process.env.PD_PAGEFIND_BIN || 'pagefind';
  const runner = options.spawnSync || spawnSync;
  const probe = runner(bin, ['--version'], { encoding: 'utf8', stdio: 'pipe' });
  if (probe.error && probe.error.code === 'ENOENT') {
    return {
      status: 'skipped',
      reason: 'pagefind-binary-not-installed',
      binary: bin,
      pagefindReady: false
    };
  }
  if (probe.error || probe.signal || probe.status !== 0) {
    throw new Error(`Pagefind 可执行文件检查失败：${probe.error ? probe.error.message : (probe.stderr || probe.stdout || (probe.signal ? `signal ${probe.signal}` : `exit ${probe.status}`)).trim()}`);
  }
  const run = runner(
    bin,
    ['--site', root, '--output-subdir', 'pagefind', '--glob', 'posts/**/*.html'],
    { encoding: 'utf8', stdio: 'pipe' }
  );
  if (run.error || run.signal || run.status !== 0) {
    throw new Error(`Pagefind 索引构建失败：${run.error ? run.error.message : (run.stderr || run.stdout || `exit ${run.status}`).trim()}`);
  }
  const entry = path.join(root, 'pagefind', 'pagefind.js');
  if (!fs.existsSync(entry)) {
    throw new Error(`Pagefind 缺少产物入口：${entry}`);
  }
  const updatedHtmlFiles = updatePagefindReadyFlag(root, '1');
  return {
    status: 'built',
    binary: bin,
    version: String(probe.stdout || '').trim(),
    outputDir: path.join(root, 'pagefind'),
    pagefindReady: true,
    updatedHtmlFiles
  };
}

if (require.main === module) {
  try {
    const result = buildPagefind(process.argv[2] || 'public');
    process.stdout.write(`pagefind: ${JSON.stringify(result)}\n`);
  } catch (error) {
    process.stderr.write(`build-pagefind: ${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = { buildPagefind, updatePagefindReadyFlag };
