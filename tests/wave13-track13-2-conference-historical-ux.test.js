'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');

function renderFixturePosts(filesByRelPath) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wave13-track13-2-blog-'));
  try {
    const contentDir = path.join(tmpDir, 'content');
    const publicDir = path.join(tmpDir, 'public');
    fs.mkdirSync(path.join(contentDir, 'posts'), { recursive: true });
    for (const [rel, body] of Object.entries(filesByRelPath)) {
      const target = path.join(contentDir, rel);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, body, 'utf8');
    }
    const cfgSrc = fs.readFileSync(path.join(ROOT, 'hugo.yaml'), 'utf8')
      .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
    fs.writeFileSync(path.join(tmpDir, 'hugo.yaml'), cfgSrc, 'utf8');
    for (const sub of ['i18n', 'layouts', 'assets', 'themes']) {
      const src = path.join(ROOT, sub);
      if (fs.existsSync(src)) fs.symlinkSync(src, path.join(tmpDir, sub));
    }
    fs.cpSync(path.join(ROOT, 'data'), path.join(tmpDir, 'data'), {
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
    const confDirPath = path.join(tmpDir, 'data/conference-directory.json');
    if (fs.existsSync(confDirPath)) {
      const confDirData = JSON.parse(fs.readFileSync(confDirPath, 'utf8'));
      confDirData.entries = [];
      fs.writeFileSync(confDirPath, JSON.stringify(confDirData), 'utf8');
    }
    fs.mkdirSync(path.join(tmpDir, 'static/data'), { recursive: true });
    for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
      const src = path.join(ROOT, 'static/data', fn);
      if (fs.existsSync(src)) fs.copyFileSync(src, path.join(tmpDir, 'static/data', fn));
    }
    const res = spawnSync('hugo', ['--source', tmpDir, '--destination', publicDir], {
      cwd: ROOT, encoding: 'utf8', timeout: 60000
    });
    assert.equal(res.status, 0, `hugo failed:\nSTDOUT:\n${res.stdout}\nSTDERR:\n${res.stderr}`);
    const out = {};
    for (const rel of Object.keys(filesByRelPath)) {
      const slug = rel.replace(/^posts\//, '').replace(/\.md$/, '');
      const htmlPath = path.join(publicDir, 'posts', slug, 'index.html');
      out[rel] = fs.readFileSync(htmlPath, 'utf8');
    }
    return out;
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function extractArticleContent(html) {
  const m = html.match(/<div class="post-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>\s*<\/div>|<footer|<\/article>)/);
  assert.ok(m, 'Rendered HTML must contain .post-content');
  return m[1];
}

test('Track 13.2: compacts conference PDF unbound authors (3 inline, 10 folded) & arXiv PDF unbound authors', () => {
  const tenConfAuthors = Array.from(
    { length: 10 },
    (_, i) => `- Author ${i + 1}：机构信息未能从会议 PDF 纯文本可靠映射`
  ).join('\n');
  const rendered = renderFixturePosts({
    'posts/conf-3-authors.md': [
      '---',
      'title: "Conf 3 Unbound Authors"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_source_kind: conference',
      '---',
      '',
      '## 👥 作者与机构',
      '',
      '- Alice Zhang：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Bob Li：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Carol Wu：机构信息未能从会议 PDF 纯文本可靠映射',
      '',
      '## 📌 核心摘要',
      '',
      '会议论文核心摘要内容。',
      ''
    ].join('\n'),
    'posts/conf-10-authors.md': [
      '---',
      'title: "Conf 10 Unbound Authors"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_source_kind: conference',
      '---',
      '',
      '## 👥 作者与机构',
      '',
      tenConfAuthors,
      '',
      '## 📌 核心摘要',
      '',
      '十位作者会议论文核心摘要。',
      ''
    ].join('\n'),
    'posts/arxiv-pdf-authors.md': [
      '---',
      'title: "arXiv PDF Unbound Authors"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      '---',
      '',
      '## 👥 作者与机构',
      '',
      '- Dave Park：机构信息未能从 arXiv PDF 文本可靠映射',
      '- Eva Chen：机构信息未能从 arXiv PDF 文本可靠映射',
      '',
      '## 📌 核心摘要',
      '',
      '纯 PDF arXiv 论文摘要。',
      ''
    ].join('\n')
  });

  const c3 = extractArticleContent(rendered['posts/conf-3-authors.md']);
  assert.match(c3, /<p class="compact-authors-line"><strong>论文作者：<\/strong>Alice Zhang · Bob Li · Carol Wu<\/p>/);
  assert.match(c3, /<p class="compact-authors-note">注：原论文会议 PDF 未提供可逐人可靠绑定的机构上标。<\/p>/);
  assert.doesNotMatch(c3, /compact-authors-details/);
  assert.doesNotMatch(c3, /Alice Zhang：机构信息未能/);

  const c10 = extractArticleContent(rendered['posts/conf-10-authors.md']);
  assert.match(c10, /<details class="compact-authors-details"><summary>论文作者（共 10 位，点击展开全部）<\/summary>/);
  assert.match(c10, /注：原论文会议 PDF 未提供可逐人可靠绑定的机构上标。/);

  const apdf = extractArticleContent(rendered['posts/arxiv-pdf-authors.md']);
  assert.match(apdf, /<p class="compact-authors-line"><strong>论文作者：<\/strong>Dave Park · Eva Chen<\/p>/);
  assert.match(apdf, /<p class="compact-authors-note">注：原论文 PDF 未提供可逐人可靠绑定的机构上标。<\/p>/);
});

test('Track 13.2: historical direct conference page with 论文资源 gets Demo CTA + folded third-party resources + quick spec card', () => {
  const rendered = renderFixturePosts({
    'posts/hist-direct-conf.md': [
      '---',
      'title: "Historical Direct Conference Paper"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_direct_paper_id: "conference:interspeech:2026:isca-paper-id:demo26"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '面向低延迟流式语音增强的因果模型。',
      '',
      '## 🔗 论文资源',
      '',
      '- 演示资源：<https://example.org/audio-demo/>（链接可访问（HTTP 200）；含 6 条试听样本（已验证可访问））',
      '- 论文所列链接：<https://github.com/baseline/repo-a>（链接可访问（HTTP 200））',
      '- 论文所列链接：<https://github.com/baseline/repo-b>（链接可访问（HTTP 200））',
      '',
      '## 🧭 深度解读',
      '',
      '### 因果架构拆解',
      '',
      '正文细节内容。',
      '',
      '## ⚙️ 关键实现与复现规格',
      '',
      '- **音频信号与流式规格**：16 kHz、10 ms 帧移、RTF 0.07。',
      '- **训练数据与规模**：DNS-2024 1,200 小时。',
      ''
    ].join('\n')
  });

  const body = extractArticleContent(rendered['posts/hist-direct-conf.md']);
  assert.match(body, /class="audio-spec-quick-card"/);
  assert.match(body, /class="audio-demo-cta-btn" href="https:\/\/example\.org\/audio-demo\/"/);
  assert.match(body, /含 6 条试听样本（已验证可访问）/);
  assert.match(body, /<dt>音频信号与流式规格<\/dt><dd>16 kHz、10 ms 帧移、RTF 0\.07。<\/dd>/);
  assert.match(body, /<details class="third-party-resources"><summary>论文提及的参考基线与第三方链接（共 2 项）<\/summary>/);
  // Strictly v1.4.6 allowlist: no forbidden tags or HTML comments
  assert.doesNotMatch(body, /<(?:aside|section|article|button|svg|script|style|iframe)\b/i);
  assert.doesNotMatch(body, /<!--/);
});

test('Track 13.2: mixed unbound suffixes, dollar-bearing authors stay uncompacted, and full v1.4.6 54-tag & attr allowlist', () => {
  const ALLOWED_TAGS = new Set([
    'div', 'p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'pre', 'code',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
    'img', 'figure', 'figcaption', 'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
    'br', 'hr', 'details', 'summary', 'dl', 'dt', 'dd',
    'math', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'msubsup', 'mfrac',
    'msqrt', 'mroot', 'mtext', 'mtable', 'mtr', 'mtd', 'mover', 'munder',
    'munderover', 'semantics', 'annotation'
  ]);
  const ALLOWED_ATTRS = new Set([
    'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
    'display', 'mathvariant', 'xmlns', 'encoding',
    'href', 'src', 'loading', 'decoding', 'target', 'rel',
    'hidden', 'aria-hidden', 'tabindex', 'style'
  ]);
  const rendered = renderFixturePosts({
    'posts/mixed-suffix-authors.md': [
      '---',
      'title: "Mixed Unbound Suffixes"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      '---',
      '',
      '## 👥 作者与机构',
      '',
      '- Alice Zhang：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Bob Li：机构信息未可靠披露',
      '',
      '## 📌 核心摘要',
      '',
      '混合不可得提示语测试。',
      ''
    ].join('\n'),
    'posts/dollar-author.md': [
      '---',
      'title: "Dollar Bearing Author"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      '---',
      '',
      '## 👥 作者与机构',
      '',
      '- A$AP Researcher：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Bob Li：机构信息未能从会议 PDF 纯文本可靠映射',
      '',
      '## 📌 核心摘要',
      '',
      '含美元符号作者名保持原列表。',
      ''
    ].join('\n')
  });

  const mixed = extractArticleContent(rendered['posts/mixed-suffix-authors.md']);
  assert.match(mixed, /<p class="compact-authors-line"><strong>论文作者：<\/strong>Alice Zhang · Bob Li<\/p>/);
  assert.match(mixed, /<p class="compact-authors-note">注：原论文未提供可逐人可靠绑定的机构信息。<\/p>/);

  const dollar = extractArticleContent(rendered['posts/dollar-author.md']);
  assert.doesNotMatch(dollar, /compact-authors-line/);
  assert.match(dollar, /<li>A\$AP Researcher：机构信息未能从会议 PDF 纯文本可靠映射<\/li>/);

  // Full 54-tag & attribute allowlist audit on rendered article content
  for (const [name, fullHtml] of Object.entries(rendered)) {
    const body = extractArticleContent(fullHtml);
    assert.ok(!body.includes('<!--'), `${name}: must not contain HTML comments`);
    const re = /<(\/?)([A-Za-z][A-Za-z0-9:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g;
    let m;
    while ((m = re.exec(body)) !== null) {
      const tag = m[2].toLowerCase();
      assert.ok(ALLOWED_TAGS.has(tag), `${name}: unallowlisted tag <${tag}>`);
      if (m[1] !== '/') {
        for (const a of (m[3] || '').matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
          const attr = a[1].toLowerCase();
          assert.ok(ALLOWED_ATTRS.has(attr), `${name}: unallowlisted attr ${attr} on <${tag}>`);
        }
      }
    }
  }
});

test('Track 13.2: conference index page compacts conference unbound authors while keeping mixed bound+unbound untouched', () => {
  const rendered = renderFixturePosts({
    'posts/conf-index-test.md': [
      '---',
      'title: "Conference Index Parity"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: index',
      '---',
      '',
      '### Paper A',
      '',
      '- Alice Zhang：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Bob Li：机构信息未能从会议 PDF 纯文本可靠映射',
      '',
      '### Paper B (mixed)',
      '',
      '- Carol Wu：Tsinghua University',
      '- Dave Park：机构信息未能从会议 PDF 纯文本可靠映射',
      ''
    ].join('\n')
  });

  const body = extractArticleContent(rendered['posts/conf-index-test.md']);
  assert.match(body, /<p class="compact-authors-line"><strong>论文作者：<\/strong>Alice Zhang · Bob Li<\/p>/);
  assert.match(body, /<p class="compact-authors-note">注：原论文会议 PDF 未提供可逐人可靠绑定的机构上标。<\/p>/);
  assert.match(body, /<li>Carol Wu：Tsinghua University<\/li>/);
  assert.match(body, /<li>Dave Park：机构信息未能从会议 PDF 纯文本可靠映射<\/li>/);
});

test('Canonical pageType powers conference Roundup 2.0 cards, task CTAs, historical papers without page_type, and unified venue labels', () => {
  const ALLOWED_TAGS = new Set([
    'div', 'p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'pre', 'code',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
    'img', 'figure', 'figcaption', 'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
    'br', 'hr', 'details', 'summary', 'dl', 'dt', 'dd',
    'math', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'msubsup', 'mfrac',
    'msqrt', 'mroot', 'mtext', 'mtable', 'mtr', 'mtd', 'mover', 'munder',
    'munderover', 'semantics', 'annotation'
  ]);
  const ALLOWED_ATTRS = new Set([
    'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
    'display', 'mathvariant', 'xmlns', 'encoding',
    'href', 'src', 'loading', 'decoding', 'target', 'rel',
    'hidden', 'aria-hidden', 'tabindex', 'style'
  ]);

  const rendered = renderFixturePosts({
    'posts/conference-dafx-2026.md': [
      '---',
      'title: "DAFx 2026 会议总览"',
      'date: 2026-10-15',
      'draft: false',
      '---',
      '',
      '## ⚡ 会议概览',
      '',
      '### 🧭 会议研究脉络',
      '',
      '- **焦点方向**：数字音频效果器与神经建模。',
      '',
      '### 🎯 三档阅读分级',
      '',
      '- **🔥 精读必看**：实时非线性建模。',
      '',
      '### 🌟 会议精选焦点',
      '',
      '> 🥇 **DAFx 精选论文** · 总分 **8.4**/10',
      '',
      '---',
      '',
      '## 📋 论文列表',
      '',
      '### Paper A',
      '',
      '- Alice Zhang：机构信息未能从会议 PDF 纯文本可靠映射',
      '- Bob Li：机构信息未能从会议 PDF 纯文本可靠映射',
      ''
    ].join('\n'),
    'posts/conference-dafx-2026-task-effects.md': [
      '---',
      'title: "DAFx 2026 音频效果专题"',
      'date: 2026-10-15',
      'draft: false',
      '---',
      '',
      '## 📋 论文详情',
      '',
      '### 效果器论文 1',
      '',
      '正文介绍。',
      ''
    ].join('\n'),
    'posts/2026-05-01-historical-missing-type.md': [
      '---',
      'title: "Historical Missing Page Type Paper"',
      'date: 2026-05-01',
      'draft: false',
      'description: "语音合成 | 7.6/10"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '历史论文即使缺失 paper_digest_page_type 也能获得规范化纸页卡片。',
      '',
      '## 👥 作者与机构',
      '',
      '- Alice Zhang：机构信息未能从 arXiv PDF 文本可靠映射',
      '- Bob Li：机构信息未能从 arXiv PDF 文本可靠映射',
      '',
      '## ⚖️ 评分明细',
      '',
      '- 评分规则：type-aware-v1',
      ''
    ].join('\n'),
    'posts/conference-speechprosody-paper.md': [
      '---',
      'title: "Prosody Modeling Study"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_source_kind: conference',
      'paper_digest_paper_id: "conference:speechprosody:2026:paper:p1"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '韵律建模论文。',
      ''
    ].join('\n'),
    'posts/conference-dafx-paper.md': [
      '---',
      'title: "Neural Amplifier Study"',
      'date: 2026-10-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_source_kind: conference',
      'paper_digest_paper_id: "conference:dafx:2026:paper:p2"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '音频效果器建模论文。',
      ''
    ].join('\n')
  });

  // Conference summary without explicit paper_digest_page_type gets digest class, Roundup 2.0 cards, compact authors, and CTA
  const confSummary = rendered['posts/conference-dafx-2026.md'];
  assert.match(confSummary, /research-workbench--digest/);
  assert.match(confSummary, /直达本届论文列表 ↓/);
  const confSummaryBody = extractArticleContent(confSummary);
  assert.match(confSummaryBody, /class="digest-brief-card"/);
  assert.match(confSummaryBody, /class="digest-reading-tiers"/);
  assert.match(confSummaryBody, /class="digest-spotlight-card"/);
  assert.match(confSummaryBody, /<p class="compact-authors-line"><strong>论文作者：<\/strong>Alice Zhang · Bob Li<\/p>/);

  // Conference task page with ## 📋 论文详情 gets digest class and primary CTA "直达论文详情 ↓"
  const confTask = rendered['posts/conference-dafx-2026-task-effects.md'];
  assert.match(confTask, /research-workbench--digest/);
  assert.match(confTask, /class="rw-action rw-action--primary" href="#[^"]+">直达论文详情 ↓<\/a>/);

  // Historical paper without paper_digest_page_type enters paper branch cleanly and hides legacy pipe-stub TL;DR
  const histPaper = rendered['posts/2026-05-01-historical-missing-type.md'];
  assert.doesNotMatch(histPaper, /research-tldr-title/);
  const histBody = extractArticleContent(histPaper);
  assert.match(histBody, /class="executive-abstract-card"/);
  assert.match(histBody, /class="compact-authors-line"/);
  assert.match(histBody, /class="scoring-audit-card"/);

  // Venue display labels on single.html
  assert.match(rendered['posts/conference-speechprosody-paper.md'], /research-signal-pill--venue">Speech Prosody 2026<\/span>/);
  assert.match(rendered['posts/conference-dafx-paper.md'], /research-signal-pill--venue">DAFx 2026<\/span>/);

  // Strict v1.4.6 54-tag & attr allowlist across all rendered article bodies
  for (const [name, fullHtml] of Object.entries(rendered)) {
    const body = extractArticleContent(fullHtml);
    assert.ok(!body.includes('<!--'), `${name}: must not contain HTML comments`);
    const re = /<(\/?)([A-Za-z][A-Za-z0-9:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g;
    let m;
    while ((m = re.exec(body)) !== null) {
      const tag = m[2].toLowerCase();
      assert.ok(ALLOWED_TAGS.has(tag), `${name}: unallowlisted tag <${tag}>`);
      if (m[1] !== '/') {
        for (const a of (m[3] || '').matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
          const attr = a[1].toLowerCase();
          assert.ok(ALLOWED_ATTRS.has(attr), `${name}: unallowlisted attr ${attr} on <${tag}>`);
        }
      }
    }
  }

  // Venue map parity across single.html, paper-library.js, and research-corpus.js
  const corpusApi = require('../scripts/lib/research-corpus');
  const singleSrc = fs.readFileSync(path.join(ROOT, 'layouts/_default/single.html'), 'utf8');
  const librarySrc = fs.readFileSync(path.join(ROOT, 'assets/js/paper-library.js'), 'utf8');
  const expectedVenues = {
    dafx: 'DAFx', icmc: 'ICMC', nime: 'NIME', jep: 'JEP', odyssey: 'Odyssey',
    speechprosody: 'Speech Prosody', iwslt: 'IWSLT', eacl: 'EACL', aistats: 'AISTATS',
    uai: 'UAI', dcase: 'DCASE', iccv: 'ICCV', eccv: 'ECCV', ijcai: 'IJCAI',
    taslp: 'TASLP', ismir: 'ISMIR', emnlp: 'EMNLP', waspaa: 'WASPAA', asru: 'ASRU'
  };
  for (const [key, display] of Object.entries(expectedVenues)) {
    assert.equal(corpusApi.resolveVenue({ paperId: `conference:${key}:2026:paper:1`, sourceKind: 'conference' }), display, `research-corpus ${key}`);
    assert.ok(singleSrc.includes(`"${key}" "${display}"`), `single.html missing ${key} => ${display}`);
    assert.ok(librarySrc.includes(`${key}: '${display}'`), `paper-library.js missing ${key} => ${display}`);
  }
});
