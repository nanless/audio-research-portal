'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

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
      binary: bin
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
  return {
    status: 'built',
    binary: bin,
    version: String(probe.stdout || '').trim(),
    outputDir: path.join(root, 'pagefind')
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

module.exports = { buildPagefind };
