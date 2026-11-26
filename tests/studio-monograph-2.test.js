'use strict';

const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

test('Studio Monograph 2.0: partialCached footer isolates .Section so hubs never strip #reading-progress from posts, and titles/nav/RSS stay clean', (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'studio-monograph-2-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const repo = path.join(tmp, 'repo');
  fs.mkdirSync(path.join(repo, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'content/hubs'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'data'), { recursive: true });
  for (const dir of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(ROOT, dir), path.join(repo, dir), { recursive: true });
  }
  for (const file of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json', 'taxonomy-registry.json', 'taxonomy-catalog.json', 'paperdigest-protocols.json']) {
    if (fs.existsSync(path.join(ROOT, 'data', file))) {
      fs.copyFileSync(path.join(ROOT, 'data', file), path.join(repo, 'data', file));
    }
  }
  fs.writeFileSync(path.join(repo, 'data/conference-directory.json'), JSON.stringify({ contract: 'conference-directory-metadata-v1', entries: [] }));
  for (const fn of ['favicon.svg', 'favicon-32x32.png', 'apple-touch-icon.png', 'og-default.png']) {
    fs.mkdirSync(path.join(repo, 'static'), { recursive: true });
    fs.copyFileSync(path.join(ROOT, 'static', fn), path.join(repo, 'static', fn));
  }
  const cfg = fs.readFileSync(path.join(ROOT, 'hugo.yaml'), 'utf8')
    .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
  fs.writeFileSync(path.join(repo, 'hugo.yaml'), cfg);

  fs.cpSync(path.join(ROOT, 'content/hubs'), path.join(repo, 'content/hubs'), { recursive: true });
  for (const p of ['papers.md', 'archives.md', 'search.md', 'about.md', 'links.md', 'conferences.md']) {
    fs.copyFileSync(path.join(ROOT, 'content', p), path.join(repo, 'content', p));
  }
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-26.md'), [
    '---',
    'title: "语音/音乐/音频论文速递 2026-11-26"',
    'date: 2026-11-26',
    'description: "共分析 2 篇语音/AI 论文"',
    'tags: [语音识别, 语音合成, 音频大模型, 音乐生成, 语音增强, 声源定位]',
    'categories: [论文速递]',
    'paper_digest_page_type: index',
    '---',
    '# 音频研究日报 2026-11-26',
    '每篇论文保留完整分层分类；热门方向按主任务的最上级方向统计。',
    '- **焦点方向**：[语音识别](/audio-research-portal/papers/?concept=task.asr)（2 篇）'
  ].join('\n'));
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-26-paper-a.md'), [
    '---',
    'title: "Paper A English"',
    'date: 2026-11-26',
    'paper_digest_page_type: paper',
    'paper_digest_reader_title: "论文甲中文标题"',
    'paper_digest_arxiv_id: "2611.90001"',
    'paper_digest_score: 8.4',
    'tags: [语音识别]',
    '---',
    '## 📌 核心摘要',
    '摘要甲。'
  ].join('\n'));
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-25-paper-b.md'), [
    '---',
    'title: "Paper B English"',
    'date: 2026-11-25',
    'paper_digest_page_type: paper',
    'paper_digest_reader_title: "论文乙中文标题"',
    'paper_digest_arxiv_id: "2611.90002"',
    'paper_digest_score: 7.9',
    'tags: [语音合成]',
    '---',
    '## 📌 核心摘要',
    '摘要乙。'
  ].join('\n'));

  const dest = path.join(tmp, 'public');
  execFileSync('hugo', ['--source', repo, '--destination', dest, '--minify', '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });

  const paperA = fs.readFileSync(path.join(dest, 'posts/2026-11-26-paper-a/index.html'), 'utf8');
  const paperB = fs.readFileSync(path.join(dest, 'posts/2026-11-25-paper-b/index.html'), 'utf8');
  const daily = fs.readFileSync(path.join(dest, 'posts/2026-11-26/index.html'), 'utf8');
  const hubAsr = fs.readFileSync(path.join(dest, 'hubs/asr/index.html'), 'utf8');

  assert.match(paperA, /id=reading-progress\b/);
  assert.match(paperB, /id=reading-progress\b/);
  assert.match(daily, /id=reading-progress\b/);
  assert.doesNotMatch(hubAsr, /id=reading-progress\b/);

  // Paper prev/next nav filters strictly to paper pages and renders Chinese headline + labels
  assert.match(paperA, /下一篇论文/);
  assert.match(paperA, /论文乙中文标题/);
  assert.doesNotMatch(paperA.match(/<nav class=paginav[\s\S]*?<\/nav>/)?.[0] || '', /2026-11-26\//);

  // Localized titles for /tags/, /categories/, /404.html
  assert.match(fs.readFileSync(path.join(dest, 'tags/index.html'), 'utf8'), /<title>标签总览 \| 音频研究门户<\/title>/);
  assert.match(fs.readFileSync(path.join(dest, 'categories/index.html'), 'utf8'), /<title>分类总览 \| 音频研究门户<\/title>/);
  assert.match(fs.readFileSync(path.join(dest, '404.html'), 'utf8'), /<title>页面未找到 \| 音频研究门户<\/title>/);

  // Clean main RSS description (no boilerplate notice text)
  const rss = fs.readFileSync(path.join(dest, 'index.xml'), 'utf8');
  assert.match(rss, /共分析 2 篇语音\/AI 论文/);
  assert.doesNotMatch(rss, /每篇论文保留完整分层分类/);

  // Homepage daily card topic pills + unified Chinese aria-label
  const home = fs.readFileSync(path.join(dest, 'index.html'), 'utf8');
  assert.match(home, /class=edition-row__tag>语音识别<\/span>/);
  assert.match(home, /\+2<\/span>/);
  assert.match(home, /aria-label="阅读：2026年11月26日 音频研究日报"/);

  // Prefilled GitHub issue errata link & zero inline styles on copyright + 404
  assert.match(paperA, /issues\/new\?title=/);
  assert.doesNotMatch(paperA.match(/<aside class=post-copyright[\s\S]*?<\/aside>/)?.[0] || '', /\bstyle=/);
  assert.doesNotMatch(fs.readFileSync(path.join(dest, '404.html'), 'utf8').match(/<section class=not-found-card[\s\S]*?<\/section>/)?.[0] || '', /\bstyle=/);
});

test('Studio Monograph 2.0: site.js syncs Giscus theme on load and message handshake without looping, and guards IME composition', () => {
  const source = fs.readFileSync(path.join(ROOT, 'assets/js/site.js'), 'utf8');
  assert.doesNotMatch(source, /\.(?:innerHTML|outerHTML)\s*=|\.insertAdjacentHTML\s*\(/);
  const posted = [];
  const winHandlers = {};
  const iframeHandlers = {};
  const iframe = {
    dataset: {},
    contentWindow: { postMessage(msg, origin) { posted.push({ msg, origin }); } },
    addEventListener(name, fn) { iframeHandlers[name] = fn; }
  };
  const doc = {
    readyState: 'complete',
    documentElement: { dataset: { theme: 'dark' } },
    getElementById: () => null,
    querySelector: (sel) => (sel === 'iframe.giscus-frame' ? iframe : null),
    querySelectorAll: () => []
  };
  const win = {
    addEventListener(name, fn) { (winHandlers[name] ||= []).push(fn); },
    matchMedia: () => ({ matches: false })
  };
  vm.runInNewContext(source, { document: doc, window: win, URL });
  assert.equal(posted.length, 1);
  assert.deepEqual(JSON.parse(JSON.stringify(posted[0])), {
    msg: { giscus: { setConfig: { theme: 'dark' } } },
    origin: 'https://giscus.app'
  });
  // Duplicate message handshake with same theme does not loop
  winHandlers.message.forEach((fn) => fn({ origin: 'https://giscus.app', data: { giscus: { resizeHeight: 300 } } }));
  assert.equal(posted.length, 1);
  // Changing site theme before a subsequent Giscus message triggers sync
  doc.documentElement.dataset.theme = 'light';
  winHandlers.message.forEach((fn) => fn({ origin: 'https://giscus.app', data: { giscus: { resizeHeight: 320 } } }));
  assert.equal(posted.length, 2);
  assert.equal(posted[1].msg.giscus.setConfig.theme, 'light');
  // Iframe load always syncs current theme
  iframeHandlers.load();
  assert.equal(posted.length, 3);
});
