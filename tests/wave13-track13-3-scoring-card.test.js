'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync, spawnSync } = require('node:child_process');
const { shardIndex } = require('../scripts/shard-search-index');
const { exportDesktopDetails } = require('../scripts/export-desktop-details');

const BLOG_ROOT = path.resolve(__dirname, '..');

const OUTER_V146_TAGS = new Set([
  'div', 'p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  'img', 'figure', 'figcaption', 'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
  'br', 'hr', 'details', 'summary', 'dl', 'dt', 'dd'
]);
const OUTER_V146_ATTRS = new Set([
  'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
  'href', 'src', 'loading', 'decoding', 'target', 'rel',
  'hidden', 'aria-hidden', 'tabindex', 'style'
]);

function parseTags(html) {
  const tags = [];
  const re = /<(\/?)([A-Za-z][A-Za-z0-9:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = [];
    if (m[1] !== '/') {
      for (const a of (m[3] || '').matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
        attrs.push({ name: a[1].toLowerCase(), value: a[2] ?? a[3] ?? a[4] ?? null });
      }
    }
    tags.push({ name: m[2].toLowerCase(), isClosing: m[1] === '/', attrs });
  }
  return tags;
}

test('Track 13.3: Blog Scoring Card styles v2 weights/strengths/defects, handles partial & legacy v1 cleanly, and obeys strict v1.4.6 allowlist', (t) => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'wave13-track13-3-scoring-'));
  t.after(() => fs.rmSync(workspace, { recursive: true, force: true }));
  const repo = path.join(workspace, 'repo');
  fs.mkdirSync(path.join(repo, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'static/data'), { recursive: true });

  const cfg = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8')
    .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
  fs.writeFileSync(path.join(repo, 'hugo.yaml'), cfg, 'utf8');
  for (const dir of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(BLOG_ROOT, dir), path.join(repo, dir), { recursive: true });
  }
  fs.cpSync(path.join(BLOG_ROOT, 'data'), path.join(repo, 'data'), {
    recursive: true,
    filter: file => {
      const name = path.basename(file);
      return !name.startsWith('fullsite-r6-')
        && !name.startsWith('fullsite-taxonomy-')
        && !name.startsWith('taxonomy-history')
        && !name.startsWith('edition-features')
        && name !== 'current-page-taxonomy-history-v2.json'
        && name !== 'taxonomy-old-v2-publication-holds.json'
        && name !== 'exact1028-qualified-classification.json';
    }
  });
  const confDir = JSON.parse(fs.readFileSync(path.join(repo, 'data/conference-directory.json'), 'utf8'));
  confDir.entries = [];
  fs.writeFileSync(path.join(repo, 'data/conference-directory.json'), JSON.stringify(confDir), 'utf8');
  for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.copyFileSync(path.join(BLOG_ROOT, 'static/data', fn), path.join(repo, 'static/data', fn));
  }

  // 1. Full v2 scoring card under ## ⚖️ 评分明细 (with trailing <hr> return link kept outside card!)
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-24-scoring-v2-2611-92001.md'), [
    '---',
    'title: "Full v2 Scoring Card Paper"',
    'date: 2026-11-24',
    'draft: false',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.92001v1"',
    'paper_digest_score: 8.7',
    '---',
    '',
    '## 📌 核心摘要',
    '',
    '完整评分卡片测试。',
    '',
    '## ⚖️ 评分明细',
    '',
    '评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。',
    '',
    '- 维度权重（方法研究）：创新 2 · 技术严谨 1.5 · 实验充分 1.5 · 清晰度 1 · 影响力 1.5 · 开源 1.5 · 可复现 0.5 · 工程/实践 1.5',
    '- 核心优势：在 40 ms 因果流式约束下实现 LibriSpeech test-other 词错率 4.2%，并开放完整训练脚本。',
    '- 主要短板：未评测多人重叠语音与极低信噪比远场拾音条件。',
    '- 评分规则：type-aware-v2',
    '- 评分模型：muse-spark-1.3-contributor',
    '',
    '---',
    '',
    '[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)',
    ''
  ].join('\n'));

  // 2. Partial v2 scoring card under ## 📊 评分说明 (strengths only, no defects -> zero empty defects box!)
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-24-scoring-partial-2611-92002.md'), [
    '---',
    'title: "Partial Scoring Explanation Paper"',
    'date: 2026-11-24',
    'draft: false',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.92002v1"',
    'paper_digest_score: 8.1',
    '---',
    '',
    '## 📌 核心摘要',
    '',
    '仅含优势无短板的评分说明测试。',
    '',
    '## 📊 评分说明',
    '',
    '- 维度权重（资源评测）：创新 1.5 · 实验充分 2.0 · 开源 2.0',
    '- 核心优势：基准覆盖 12 种语言且协议可复现。',
    ''
  ].join('\n'));

  // 3. Legacy v1 scoring section (no weights/strengths/defects -> clean card with ZERO empty grid boxes!)
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-24-scoring-legacy-2611-92003.md'), [
    '---',
    'title: "Legacy v1 Scoring Paper"',
    'date: 2026-11-24',
    'draft: false',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.92003v1"',
    'paper_digest_score: 7.4',
    '---',
    '',
    '## 📌 核心摘要',
    '',
    '旧版无权重无优缺点评分明细测试。',
    '',
    '## ⚖️ 评分明细',
    '',
    '评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。',
    '- 评分规则：type-aware-v1',
    '- 评分模型：muse-spark-1.3-contributor',
    ''
  ].join('\n'));

  execFileSync('git', ['init'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['config', 'user.email', 'test@example.invalid'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['config', 'user.name', 'Test'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['add', '.'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['commit', '-m', 'test: scoring card fixture'], { cwd: repo, stdio: 'pipe' });

  const buildDir = path.join(workspace, 'public');
  const res = spawnSync('hugo', ['--source', repo, '--destination', buildDir, '--minify', '--noBuildLock', '--panicOnWarning'], {
    cwd: repo, encoding: 'utf8'
  });
  assert.equal(res.status, 0, `${res.stdout}\n${res.stderr}`);

  shardIndex(buildDir);
  exportDesktopDetails(buildDir, repo);

  // Check full v2 scoring card
  const v2Html = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-scoring-v2-2611-92001/index.html'), 'utf8');
  assert.match(v2Html, /class=["']?scoring-audit-card["']?/);
  assert.match(v2Html, /class=["']?scoring-weights-strip["']?/);
  assert.match(v2Html, /class=["']?scoring-evidence-grid["']?/);
  assert.match(v2Html, /class=["']?scoring-strengths-box["']?/);
  assert.match(v2Html, /class=["']?scoring-defects-box["']?/);
  assert.match(v2Html, /class=["']?scoring-audit-meta["']?/);
  // Trailing <hr> + return link stays OUTSIDE .scoring-audit-card
  const cardCloseIdx = v2Html.indexOf('scoring-audit-meta');
  const hrIdx = v2Html.indexOf('<hr', cardCloseIdx);
  assert.ok(hrIdx > cardCloseIdx, 'trailing <hr> must follow scoring card');
  assert.match(v2Html.slice(cardCloseIdx, hrIdx), /<\/div>/, 'scoring-audit-card must close before <hr>');

  // Check partial v2 under 📊 评分说明 (no empty defects box)
  const partialHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-scoring-partial-2611-92002/index.html'), 'utf8');
  assert.match(partialHtml, /class=["']?scoring-audit-card["']?/);
  assert.match(partialHtml, /class=["']?scoring-weights-strip["']?/);
  assert.match(partialHtml, /class=["']?scoring-evidence-grid["']?/);
  assert.match(partialHtml, /class=["']?scoring-strengths-box["']?/);
  assert.doesNotMatch(partialHtml, /scoring-defects-box/, 'must not emit empty defects box');

  // Check legacy v1 page (clean card, zero empty weights/grid/boxes)
  const legacyHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-scoring-legacy-2611-92003/index.html'), 'utf8');
  assert.match(legacyHtml, /class=["']?scoring-audit-card["']?/);
  assert.doesNotMatch(legacyHtml, /scoring-weights-strip|scoring-evidence-grid|scoring-strengths-box|scoring-defects-box/,
    'legacy v1 scoring page must not emit empty weights or evidence grid boxes');

  // Check exported client/details/articles/*.html strictly obey v1.4.6 outer HTML allowlist (NO section, data-*, aria-label!)
  const articlesDir = path.join(buildDir, 'client/details/articles');
  const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));
  assert.equal(articleFiles.length, 3);
  for (const f of articleFiles) {
    const html = fs.readFileSync(path.join(articlesDir, f), 'utf8');
    assert.ok(!html.includes('<!--'));
    for (const tag of parseTags(html)) {
      assert.ok(OUTER_V146_TAGS.has(tag.name), `${f}: unexpected tag <${tag.name}>`);
      for (const attr of tag.attrs) {
        assert.ok(OUTER_V146_ATTRS.has(attr.name), `${f}: unexpected attr ${attr.name} on <${tag.name}>`);
        assert.ok(!attr.name.startsWith('data-') && attr.name !== 'aria-label', `${f}: forbidden attr ${attr.name}`);
      }
    }
  }

  // Check CSS selectors (light/dark, mobile 1-col, print break-inside: avoid)
  const css = fs.readFileSync(path.join(BLOG_ROOT, 'assets/css/extended/zzzz-research-portal.css'), 'utf8');
  for (const sel of ['.scoring-audit-card', '.scoring-weights-strip', '.scoring-evidence-grid', '.scoring-strengths-box', '.scoring-defects-box']) {
    assert.ok(css.includes(sel), `CSS missing ${sel}`);
  }
  assert.match(css, /\.scoring-evidence-grid\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.match(css, /\.scoring-audit-card[\s\S]*?break-inside:\s*avoid/);
});
