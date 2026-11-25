'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync, execFileSync } = require('node:child_process');
const { shardIndex } = require('../scripts/shard-search-index');
const { exportDesktopDetails } = require('../scripts/export-desktop-details');

const BLOG_ROOT = path.resolve(__dirname, '..');

// Exact v1.4.6 macOS (LibraryArticleExtractor.swift) & Android (CatalogRepository.kt) split allowlists
const CLIENT_V146_OUTER_HTML_TAGS = new Set([
  'div', 'p', 'span', 'a',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li',
  'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  'img', 'figure', 'figcaption',
  'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
  'br', 'hr',
  'details', 'summary',
  'dl', 'dt', 'dd'
]);

// 29 valid v1.4.6 MathML tags (exact intersection of LibraryDesktopDetails.swift, LibraryArticleExtractor.swift, CatalogRepository.kt)
const CLIENT_V146_MATHML_TAGS = new Set([
  'math', 'semantics', 'annotation', 'mrow', 'mi', 'mn', 'mo', 'mtext', 'ms', 'mspace',
  'mfrac', 'msqrt', 'mroot', 'msup', 'msub', 'msubsup', 'mover', 'munder', 'munderover',
  'mtable', 'mtr', 'mtd', 'mstyle', 'mpadded', 'mphantom', 'menclose',
  'mmultiscripts', 'mprescripts', 'none'
]);

const CLIENT_FORBIDDEN_OR_DETACHED_TAGS = new Set([
  'aside', 'nav', 'header', 'footer', 'mark', 'small', 'abbr', 'kbd', 'time', 'colgroup', 'col',
  'svg', 'button', 'input', 'style', 'script', 'audio', 'video', 'picture', 'section', 'article', 'merror', 'mlabeledtr'
]);

const CLIENT_ALLOWED_OUTER_ATTRS = new Set([
  'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
  'href', 'src', 'loading', 'decoding', 'target', 'rel',
  'hidden', 'aria-hidden', 'tabindex', 'style'
]);

const CLIENT_ALLOWED_MATHML_ATTRS = new Set([
  'display', 'xmlns', 'encoding', 'mathvariant', 'displaystyle', 'scriptlevel',
  'stretchy', 'fence', 'separator', 'accent', 'accentunder', 'lspace', 'rspace',
  'width', 'height', 'depth', 'voffset', 'columnalign', 'rowalign', 'columnspacing',
  'rowspacing', 'columnlines', 'rowlines', 'frame', 'framespacing', 'equalrows',
  'equalcolumns', 'linethickness', 'notation', 'maxsize', 'minsize', 'movablelimits',
  'symmetric', 'dir', 'id', 'class', 'title'
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

test('Track 12.4: Audio quick-spec card, Demo CTA, collapsible 8+ authors, Daily Roundup 2.0 cards, and strict v1.4.6 client allowlist', () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'wave12-track12-4-blog-'));
  const tmpRoot = path.join(workspace, 'repo');
  fs.mkdirSync(tmpRoot, { recursive: true });
  try {
    const hugoYaml = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8')
      .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
    fs.writeFileSync(path.join(tmpRoot, 'hugo.yaml'), hugoYaml);
    for (const dir of ['i18n', 'assets', 'layouts', 'themes']) {
      const src = path.join(BLOG_ROOT, dir);
      if (fs.existsSync(src)) fs.cpSync(src, path.join(tmpRoot, dir), { recursive: true });
    }
    fs.cpSync(path.join(BLOG_ROOT, 'data'), path.join(tmpRoot, 'data'), {
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
    const confDirData = JSON.parse(fs.readFileSync(path.join(tmpRoot, 'data/conference-directory.json'), 'utf8'));
    confDirData.entries = [];
    fs.writeFileSync(path.join(tmpRoot, 'data/conference-directory.json'), JSON.stringify(confDirData), 'utf8');
    fs.mkdirSync(path.join(tmpRoot, 'content/posts'), { recursive: true });
    fs.mkdirSync(path.join(tmpRoot, 'static/data'), { recursive: true });
    for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
      fs.copyFileSync(path.join(BLOG_ROOT, 'static/data', fn), path.join(tmpRoot, 'static/data', fn));
    }
    for (const page of ['papers.md', 'tags-directory.md', 'search.md', 'archives.md', 'conferences.md']) {
      const src = path.join(BLOG_ROOT, 'content', page);
      if (fs.existsSync(src)) fs.copyFileSync(src, path.join(tmpRoot, 'content', page));
    }

    const nineAuthors = Array.from({ length: 9 }, (_, i) => `- Author ${i + 1}：机构信息未能在本次解析中与作者逐人可靠绑定`).join('\n');

    // Paper A: Full implementationSpecs + verified Demo + 9 unbound authors + special chars ($100, **, inline code)
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24-paper-full-spec-2611-91001.md'), [
      '---',
      'title: "音频规格卡片与试听测试论文"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2611.91001v1"',
      'paper_digest_arxiv_url: "https://arxiv.org/abs/2611.91001v1"',
      'paper_digest_pdf_url: "https://arxiv.org/pdf/2611.91001v1.pdf"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '本文提出流式音频编解码器，把因果前瞻延迟压低至 40 ms。',
      '',
      '## 👥 作者与机构',
      '',
      nineAuthors,
      '',
      '## 🔗 开源与复现资源',
      '',
      '- 代码相关资源：<https://github.com/audiolab/streamcodec> — 链接可访问（HTTP 200）',
      '- 演示资源：<https://short.example/s1> → <https://audiolab.github.io/streamcodec/?v=1&lang=zh> — 链接可访问（HTTP 200）；含 6 条试听样本（已验证可访问），含基线对比表，HF Space 状态：RUNNING（t4-small）',
      '',
      '## ⚙️ 关键实现与复现规格',
      '',
      '- **音频信号与流式规格**：采样率 `24kHz`，帧率 50 Hz，预算约 \\$100，支持 \\*\\*流式\\*\\* 推理与隐状态维度 \\(d_{\\text{model}} = 512\\)。',
      '- **训练数据与规模**：LibriTTS-R 585 小时。',
      '- **模型参数与结构**：约 95M 参数。',
      ''
    ].join('\n'));

    // Paper D: Demo-only pre-v5 paper (no implementationSpecs) -> card title switches to "在线试听演示"
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24-paper-demo-only-2611-91004.md'), [
      '---',
      'title: "仅含演示链接的旧格式论文"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2611.91004v1"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '仅提供在线试听页面，不含实现规格节。',
      '',
      '## 🔗 开源与复现资源',
      '',
      '- 演示资源：<https://audiolab.github.io/only-demo/> — 链接可访问（HTTP 200）',
      ''
    ].join('\n'));

    // Paper E: Signed current API Reader paper exercising REAL markdown_hugo_gate.validate_hugo_rendered_html_gate (not skipped!)
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24-paper-v5-gate-2611-91005.md'), [
      '---',
      'title: "真实门禁核验流式音频解码论文"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2611.91005v1"',
      'paper_digest_api_reader_contract: "beginner-researcher"',
      'paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '本文提出流式音频编码框架，兼顾低延迟与保真度。',
      '',
      '## 🔗 开源与复现资源',
      '',
      '- 演示资源：<https://audiolab.github.io/gate-demo/> — 链接可访问（HTTP 200）；含 4 条试听样本（已验证可访问）',
      '',
      '## ⚙️ 关键实现与复现规格',
      '',
      '- **音频信号与流式规格**：采样率 `24kHz`，隐状态维度 \\(d_{\\text{model}} = 512\\)，前瞻延迟 40 ms。',
      '- **训练与评测数据**：LibriTTS-R 585 小时。',
      ''
    ].join('\n'));

    // Paper B: Unavailable demo + no specs -> NO quick-spec card at all
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24-paper-no-spec-2611-91002.md'), [
      '---',
      'title: "无规格且演示不可达论文"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2611.91002v1"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '该论文未提供可用演示，也无规格表。',
      '',
      '## 🔗 开源与复现资源',
      '',
      '- 演示资源：<https://broken.example/demo> — 链接不可用（HTTP 404）',
      ''
    ].join('\n'));

    // Paper C: Non-HTTPS demo URL -> fail-closed (no Demo CTA)
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24-paper-insecure-demo-2611-91003.md'), [
      '---',
      'title: "非HTTPS演示链接拦截测试"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2611.91003v1"',
      '---',
      '',
      '## 📌 核心摘要',
      '',
      '测试非 HTTPS 链接不会被提升为试听按钮。',
      '',
      '## 🔗 开源与复现资源',
      '',
      '- 演示资源：<http://insecure.example/demo> — 链接可访问（HTTP 200）',
      ''
    ].join('\n'));

    // Daily Roundup 2.0 Index Page
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24.md'), [
      '---',
      'title: "语音/音乐/音频论文速递 2026-11-24"',
      'date: 2026-11-24',
      'draft: false',
      'paper_digest_page_type: index',
      '---',
      '',
      '## ⚡ 今日概览',
      '',
      '### 🧭 今日研究脉络',
      '',
      '- **焦点方向**：语音合成（2 篇，最高 8.5 分）。',
      '- **阅读与开源快照**：共 2 篇完成评分。',
      '',
      '### 🎯 三档阅读分级',
      '',
      '- **🔥 精读必看（8.0 分及以上）**（共 1 篇）：[音频规格卡片与试听测试论文](/audio-paper-digest-blog/posts/2026-11-24-paper-full-spec-2611-91001)（8.5 分 💻 🔊）',
      '',
      '### 🌟 今日精选焦点',
      '',
      '> 🥇 **[音频规格卡片与试听测试论文](/audio-paper-digest-blog/posts/2026-11-24-paper-full-spec-2611-91001)** · 总分 **8.5**/10',
      '>',
      '> 突出维度：方法创新 1.9/2 · 实验充分 1.4/1.5',
      '',
      '---',
      '',
      '## 📋 论文列表',
      '',
      '### 🥇 [音频规格卡片与试听测试论文](/audio-paper-digest-blog/posts/2026-11-24-paper-full-spec-2611-91001)',
      '',
      '👥 **作者与机构**',
      '',
      nineAuthors,
      '',
      '📌 **核心摘要**',
      '',
      '第一段核心摘要完整显示，交代任务背景与核心痛点。',
      '',
      '第二段方法细节同样直接展示，不再折叠。',
      '',
      '第三段实验与适用边界完整呈现，无论多长都不折叠。',
      '',
      '🔗 **开源资源**',
      '',
      '- 代码相关资源：<https://github.com/audiolab/streamcodec> — 链接可访问（HTTP 200）',
      '',
      '---',
      '',
      '### 🥈 [单段摘要论文](/audio-paper-digest-blog/posts/2026-11-24-paper-no-spec-2611-91002)',
      '',
      '📌 **核心摘要**',
      '',
      '只有一段核心摘要时同样完整显示。',
      '',
      '---',
      ''
    ].join('\n'));

    execFileSync('git', ['init'], { cwd: tmpRoot, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.email', 'test@example.invalid'], { cwd: tmpRoot, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.name', 'Test'], { cwd: tmpRoot, stdio: 'pipe' });
    execFileSync('git', ['add', '.'], { cwd: tmpRoot, stdio: 'pipe' });
    execFileSync('git', ['commit', '-m', 'test: init wave12 track 12.4 fixture'], { cwd: tmpRoot, stdio: 'pipe' });

    const buildDir = path.join(workspace, 'public');
    const buildRes = spawnSync('hugo', ['--source', tmpRoot, '--destination', buildDir, '--minify', '--noBuildLock'], {
      cwd: tmpRoot,
      encoding: 'utf8'
    });
    assert.equal(buildRes.status, 0, `${buildRes.stdout}\n${buildRes.stderr}`);

    // Run client export to verify full v1.4.6 54-tag & attribute allowlist
    shardIndex(buildDir);
    exportDesktopDetails(buildDir, tmpRoot);

    // 1. Paper A assertions
    const fullHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-paper-full-spec-2611-91001/index.html'), 'utf8');
    assert.match(fullHtml, /class=["']?audio-spec-quick-card["']?/);
    assert.match(fullHtml, /class=["']?audio-demo-cta-btn["']?/);
    assert.match(fullHtml, /href=["']https:\/\/audiolab\.github\.io\/streamcodec\/\?v=1&amp;lang=zh["']/);
    assert.match(fullHtml, /含 6 条试听样本（已验证可访问）/);
    assert.match(fullHtml, /<dl class=["']?audio-spec-grid["']?/);
    assert.match(fullHtml, /<dt>音频信号与流式规格<\/dt>/);
    assert.match(fullHtml, /<code>24kHz<\/code>/);
    assert.match(fullHtml, /＄100/);
    assert.match(fullHtml, /<span class=["']?katex["']?><span class=["']?katex-mathml["']?><math\b[^>]*>[\s\S]*?<annotation encoding="application\/x-tex">d_\{\\text\{model\}\} = 512<\/annotation>/, 'inline LaTeX in implementationSpecs must render via KaTeX SSR without plainify corruption');
    assert.doesNotMatch(fullHtml, /href=["']https:\/\/short\.example\/s1["'][^>]*class=["']?audio-demo-cta-btn/, 'CTA must lift final redirected URL, not pre-redirect URL');
    assert.match(fullHtml, /class=["']?implementation-specs-card["']?/);
    assert.match(fullHtml, /<details class=["']?compact-authors-details["']?><summary>论文作者（共 9 位，点击展开全部）<\/summary>/);
    assert.match(fullHtml, /class=["']?compact-authors-line["']?/);

    const demoOnlyHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-paper-demo-only-2611-91004/index.html'), 'utf8');
    assert.match(demoOnlyHtml, /<p class=["']?audio-spec-quick-title["']?><strong>在线试听演示<\/strong><\/p>/);
    assert.match(demoOnlyHtml, /href=["']?https:\/\/audiolab\.github\.io\/only-demo\/["']?/);

    // CSS specificity & PaperMod override checks (P0-5, P0-6, P1-9, P2-4)
    const portalCss = fs.readFileSync(path.join(BLOG_ROOT, 'assets/css/extended/zzzz-research-portal.css'), 'utf8');
    assert.match(portalCss, /\.research-main \.post-content a\.audio-demo-cta-btn\b/);
    assert.match(portalCss, /\.audio-spec-item dt\s*\{[^}]*width:\s*auto;/);
    assert.match(portalCss, /\.audio-spec-item dd\s*\{[^}]*width:\s*auto;[^}]*padding-inline-start:\s*0;/);
    assert.match(portalCss, /\.research-main \.post-content \.digest-spotlight-card > blockquote:first-of-type\b/);
    assert.match(portalCss, /break-inside:\s*avoid/);

    // 2. Paper B & C fail-closed assertions
    const noSpecHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-paper-no-spec-2611-91002/index.html'), 'utf8');
    assert.doesNotMatch(noSpecHtml, /audio-spec-quick-card|audio-demo-cta-btn|implementation-specs-card/);
    const insecureHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-paper-insecure-demo-2611-91003/index.html'), 'utf8');
    assert.doesNotMatch(insecureHtml, /audio-spec-quick-card|audio-demo-cta-btn/);

    // 3. Daily Roundup 2.0 Index assertions
    const indexHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24/index.html'), 'utf8');
    assert.match(indexHtml, /class=["']?digest-brief-card["']?/);
    assert.match(indexHtml, /class=["']?digest-reading-tiers["']?/);
    assert.match(indexHtml, /class=["']?digest-spotlight-card["']?/);
    assert.match(indexHtml, /<details class=["']?compact-authors-details["']?><summary>论文作者（共 9 位，点击展开全部）<\/summary>/);
    assert.doesNotMatch(indexHtml, /index-abstract-more/, 'multi-paragraph abstract must never fold');
    assert.doesNotMatch(indexHtml, /展开其余\s*\d+\s*段核心摘要/, 'abstract fold summary label must never appear');
    assert.match(indexHtml, /<p>第一段核心摘要完整显示，交代任务背景与核心痛点。<\/p>\s*<p>第二段方法细节同样直接展示，不再折叠。<\/p>\s*<p>第三段实验与适用边界完整呈现，无论多长都不折叠。<\/p>/);
    assert.match(indexHtml, /<p>只有一段核心摘要时同样完整显示。<\/p>/);
    assert.doesNotMatch(indexHtml, /\/audio-paper-digest-blog\//, 'legacy site-relative links in untouched historical Markdown must normalize to /audio-research-portal/');
    assert.match(indexHtml, /href=["']?\/audio-research-portal\/posts\/2026-11-24-paper-full-spec-2611-91001["']?/);

    // 4. Verify EVERY exported client/details/articles/*.html (5 papers + 1 daily index) strictly obeys v1.4.6 allowlist
    const articlesDir = path.join(buildDir, 'client/details/articles');
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));
    assert.equal(files.length, 6);
    for (const f of files) {
      const html = fs.readFileSync(path.join(articlesDir, f), 'utf8');
      assert.ok(!html.includes('<!--'), `${f}: no HTML comments`);
      assert.doesNotMatch(html, /katex-html|<svg\b/i, `${f}: KaTeX HTML/SVG must collapse to pure MathML`);
      const tags = parseTags(html);
      const ids = new Set();
      let mathDepth = 0;
      for (const tag of tags) {
        assert.ok(!CLIENT_FORBIDDEN_OR_DETACHED_TAGS.has(tag.name), `${f}: forbidden tag <${tag.name}>`);
        if (tag.name === 'math') {
          if (!tag.isClosing) mathDepth += 1;
          else mathDepth = Math.max(0, mathDepth - 1);
        }
        const insideMath = mathDepth > 0 || tag.name === 'math';
        if (insideMath) {
          assert.ok(CLIENT_V146_MATHML_TAGS.has(tag.name), `${f}: non-MathML tag <${tag.name}> inside <math>`);
          for (const attr of tag.attrs) {
            assert.ok(CLIENT_ALLOWED_MATHML_ATTRS.has(attr.name), `${f}: unallowlisted MathML attr ${attr.name} on <${tag.name}>`);
          }
        } else {
          assert.ok(CLIENT_V146_OUTER_HTML_TAGS.has(tag.name), `${f}: unallowlisted outer HTML tag <${tag.name}>`);
          for (const attr of tag.attrs) {
            assert.ok(CLIENT_ALLOWED_OUTER_ATTRS.has(attr.name), `${f}: unallowlisted outer attr ${attr.name} on <${tag.name}>`);
            if (attr.name === 'id' && attr.value) {
              assert.ok(!ids.has(attr.value), `${f}: duplicate id ${attr.value}`);
              ids.add(attr.value);
            }
          }
        }
      }
      assert.equal(mathDepth, 0, `${f}: balanced <math> tags`);
    }

    // 5. Run sibling markdown_hugo_gate.py and assert the current API Reader paper is ACTUALLY inspected (not skipped!)
    const gateScript = path.resolve(BLOG_ROOT, '..', 'audio-paper-digest', 'scripts', 'markdown_hugo_gate.py');
    if (fs.existsSync(gateScript)) {
      const py = [
        'import sys, re',
        'from pathlib import Path',
        'sys.path.insert(0, str(Path(sys.argv[1]).parent))',
        'import markdown_hugo_gate as gate',
        'build_dir = Path(sys.argv[2])',
        'gate_paper = Path(sys.argv[3])',
        'fm, body = gate.load_frontmatter(gate_paper)',
        'assert gate.format_gate_is_current_api_reader(fm), "Paper E must actually enter current_api_reader Hugo gate"',
        'issues = gate.validate_hugo_rendered_html_gate(build_dir, [{"path": str(gate_paper), "frontmatter": fm, "body": body}])',
        'assert issues == [], f"markdown_hugo_gate failed: {issues}"',
        '# Also directly verify Paper A quick-spec-card fragment has zero math/emphasis issues ($100 -> ＄100, ** -> <span>*</span>*)',
        'paper_a_html = Path(sys.argv[4]).read_text("utf-8")',
        'm = re.search(r\'<div class="?audio-spec-quick-card"?[^>]*>.*?</dl>\\s*</div>\', paper_a_html, flags=re.S)',
        'assert m, "audio-spec-quick-card must exist in Paper A HTML"',
        'card_issues = gate.math_and_emphasis_issues(m.group(0), "paper-a-quick-card", rendered_html=True)',
        'assert card_issues == [], f"quick-spec-card math/emphasis issues: {card_issues}"',
        'assert "**" not in m.group(0), "quick-spec-card must not leak **"'
      ].join('\n');
      execFileSync('python3', [
        '-c', py, gateScript, buildDir,
        path.join(tmpRoot, 'content/posts/2026-11-24-paper-v5-gate-2611-91005.md'),
        path.join(buildDir, 'posts/2026-11-24-paper-full-spec-2611-91001/index.html')
      ], { encoding: 'utf8' });
    }
  } finally {
    fs.rmSync(workspace, { recursive: true, force: true });
  }
});
