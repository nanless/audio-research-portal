'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync, spawnSync } = require('node:child_process');

const { shardIndex } = require('../scripts/shard-search-index');
const { exportDesktopDetails, collapseKatexToMathML, sanitizeArticleHtml, assertSafeArticleHtml } = require('../scripts/export-desktop-details');
const { verifyCuratedFeeds, verifyDesktopDetails, CURATED_FEED_FILES } = require('../scripts/verify-build');
const { verifyPageNavigation } = require('../scripts/verify-page-navigation');
const { buildPagefind } = require('../scripts/build-pagefind');
const citationSource = require('../assets/js/citation-source.js');
const figureViewer = require('../assets/js/figure-viewer.js');
const tableWorkbench = require('../assets/js/table-workbench.js');
const commandPalette = require('../assets/js/command-palette.js');

const BLOG_ROOT = path.resolve(__dirname, '..');

const OUTER_V146_TAGS = new Set([
  'div', 'p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  'img', 'figure', 'figcaption', 'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
  'br', 'hr', 'details', 'summary', 'dl', 'dt', 'dd'
]);
const MATHML_V146_TAGS = new Set([
  'math', 'semantics', 'annotation', 'mrow', 'mi', 'mn', 'mo', 'mtext', 'ms', 'mspace',
  'mfrac', 'msqrt', 'mroot', 'msup', 'msub', 'msubsup', 'mover', 'munder', 'munderover',
  'mtable', 'mtr', 'mtd', 'mstyle', 'mpadded', 'mphantom', 'menclose',
  'mmultiscripts', 'mprescripts', 'none'
]);
const OUTER_V146_ATTRS = new Set([
  'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
  'href', 'src', 'loading', 'decoding', 'target', 'rel',
  'hidden', 'aria-hidden', 'tabindex', 'style'
]);
const MATHML_V146_ATTRS = new Set([
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
    tags.push({ name: m[2].toLowerCase(), isClosing: m[1] === '/', attrs, raw: m[0] });
  }
  return tags;
}

// Lightweight DOM mock supporting createElement, createTextNode, querySelector/All, events, classList, dataset
function createMiniDom(locationHref = 'https://nanless.github.io/audio-paper-digest-blog/posts/demo/') {
  class MiniNode {
    constructor(nodeType, tagName, text = '') {
      this.nodeType = nodeType;
      this.tagName = tagName ? tagName.toUpperCase() : '';
      this._text = text;
      this.children = [];
      this.childNodes = [];
      this.parentNode = null;
      this.attributes = {};
      this.dataset = {};
      this.style = {};
      this.hidden = false;
      this.disabled = false;
      this.value = '';
      this.handlers = {};
      this.scrollWidth = 400;
      this.clientWidth = 400;
      this.scrollLeft = 0;
      const self = this;
      this.classList = {
        _set() { return new Set(String(self.className || '').split(/\s+/).filter(Boolean)); },
        add(c) { const s = this._set(); s.add(c); self.className = [...s].join(' '); },
        remove(c) { const s = this._set(); s.delete(c); self.className = [...s].join(' '); },
        contains(c) { return this._set().has(c); },
        toggle(c, force) {
          const s = this._set();
          const on = force === undefined ? !s.has(c) : Boolean(force);
          if (on) s.add(c); else s.delete(c);
          self.className = [...s].join(' ');
        }
      };
    }
    get parentElement() { return this.parentNode && this.parentNode.nodeType === 1 ? this.parentNode : null; }
    get nextElementSibling() {
      if (!this.parentNode) return null;
      const idx = this.parentNode.children.indexOf(this);
      return idx >= 0 && idx + 1 < this.parentNode.children.length ? this.parentNode.children[idx + 1] : null;
    }
    get textContent() {
      if (this.nodeType === 3) return this._text;
      if (this.childNodes.length) return this.childNodes.map(c => c.textContent).join('');
      return this._text;
    }
    set textContent(v) {
      this._text = String(v);
      this.children = [];
      this.childNodes = [];
    }
    setAttribute(k, v) {
      const key = String(k).toLowerCase();
      const val = String(v);
      this.attributes[key] = val;
      if (key === 'id') this.id = val;
      if (key === 'class') this.className = val;
      if (key === 'src') this.src = val;
      if (key === 'alt') this.alt = val;
      if (key === 'href') this.href = val;
      if (key.startsWith('data-')) {
        const camel = key.slice(5).replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
        this.dataset[camel] = val;
      }
    }
    getAttribute(k) {
      const key = String(k).toLowerCase();
      if (Object.prototype.hasOwnProperty.call(this.attributes, key)) return this.attributes[key];
      if (key === 'class') return this.className || null;
      if (key === 'id') return this.id || null;
      if (key === 'src') return this.src || null;
      if (key === 'alt') return this.alt ?? null;
      return null;
    }
    _detach(child) {
      if (!child.parentNode) return;
      const p = child.parentNode;
      const ci = p.children.indexOf(child);
      if (ci >= 0) p.children.splice(ci, 1);
      const ni = p.childNodes.indexOf(child);
      if (ni >= 0) p.childNodes.splice(ni, 1);
      child.parentNode = null;
    }
    appendChild(child) {
      if (child.nodeType === 11) {
        child.childNodes.slice().forEach(item => this.appendChild(item));
        return child;
      }
      this._detach(child);
      child.parentNode = this;
      this.childNodes.push(child);
      if (child.nodeType === 1) this.children.push(child);
      return child;
    }
    insertBefore(child, ref) {
      if (!ref) return this.appendChild(child);
      this._detach(child);
      child.parentNode = this;
      const ni = this.childNodes.indexOf(ref);
      if (ni >= 0) this.childNodes.splice(ni, 0, child);
      else this.childNodes.push(child);
      if (child.nodeType === 1) {
        const ci = this.children.indexOf(ref);
        if (ci >= 0) this.children.splice(ci, 0, child);
        else this.children.push(child);
      }
      return child;
    }
    remove() { this._detach(this); }
    replaceChildren() { this.children = []; this.childNodes = []; this._text = ''; }
    addEventListener(type, fn) {
      if (!this.handlers[type]) this.handlers[type] = [];
      this.handlers[type].push(fn);
    }
    dispatch(type, extra = {}) {
      const evt = {
        type,
        target: extra.target || this,
        defaultPrevented: false,
        preventDefault() { this.defaultPrevented = true; },
        stopPropagation() {},
        ...extra
      };
      (this.handlers[type] || []).forEach(fn => fn(evt));
      return evt;
    }
    click() { this.dispatch('click'); }
    focus() { doc.activeElement = this; }
    scrollIntoView(opts) { this._scrolledIntoView = opts || true; }
    setPointerCapture(pid) {
      if (!this._capturedPointers) this._capturedPointers = new Set();
      this._capturedPointers.add(pid);
    }
    releasePointerCapture(pid) {
      if (this._capturedPointers) this._capturedPointers.delete(pid);
    }
    hasPointerCapture(pid) {
      return Boolean(this._capturedPointers && this._capturedPointers.has(pid));
    }
    _matches(sel) {
      return sel.split(',').some(part => {
        const s = part.trim();
        if (!s) return false;
        if (s.includes(' ')) {
          const pieces = s.split(/\s+/);
          if (!this._matches(pieces[pieces.length - 1])) return false;
          let cur = this.parentElement;
          let idx = pieces.length - 2;
          while (cur && idx >= 0) {
            if (cur._matches(pieces[idx])) idx -= 1;
            cur = cur.parentElement;
          }
          return idx < 0;
        }
        if (s.startsWith('#')) return this.id === s.slice(1);
        if (s.startsWith('.')) return this.classList.contains(s.slice(1));
        if (s.startsWith('[') && s.endsWith(']')) return this.getAttribute(s.slice(1, -1)) !== null;
        return this.tagName.toLowerCase() === s.toLowerCase();
      });
    }
    querySelectorAll(sel) {
      const out = [];
      const walk = (node) => {
        for (const ch of node.children) {
          if (ch._matches(sel)) out.push(ch);
          walk(ch);
        }
      };
      walk(this);
      return out;
    }
    querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
  }

  const winListeners = {};
  const docEl = new MiniNode(1, 'html');
  const head = new MiniNode(1, 'head');
  const body = new MiniNode(1, 'body');
  docEl.appendChild(head);
  docEl.appendChild(body);
  const doc = {
    documentElement: docEl,
    head,
    body,
    activeElement: body,
    readyState: 'complete',
    createElement: (tag) => new MiniNode(1, tag),
    createTextNode: (text) => new MiniNode(3, '', text),
    createDocumentFragment: () => new MiniNode(11, '#fragment'),
    getElementById: (id) => docEl.querySelector('#' + id),
    querySelector: (sel) => docEl.querySelector(sel),
    querySelectorAll: (sel) => docEl.querySelectorAll(sel)
  };
  const win = {
    location: new URL(locationHref),
    addEventListener(type, fn) {
      if (!winListeners[type]) winListeners[type] = [];
      winListeners[type].push(fn);
    },
    dispatch(type, extra = {}) {
      const evt = { type, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...extra };
      (winListeners[type] || []).forEach(fn => fn(evt));
      return evt;
    },
    setTimeout(fn) { fn(); return 1; },
    clearTimeout() {}
  };
  return { doc, win, MiniNode };
}

test('Track 13.4c & 13.4a: Hugo KaTeX SSR, pure MathML export collapse, curated RSS feeds, OSS/Demo index flags & Pagefind metadata', (t) => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'wave13-track13-4-hugo-'));
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
  for (const entry of fs.readdirSync(path.join(BLOG_ROOT, 'static'))) {
    const full = path.join(BLOG_ROOT, 'static', entry);
    if (fs.statSync(full).isFile()) fs.copyFileSync(full, path.join(repo, 'static', entry));
  }
  for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.copyFileSync(path.join(BLOG_ROOT, 'static/data', fn), path.join(repo, 'static/data', fn));
  }
  fs.cpSync(path.join(BLOG_ROOT, 'static/vendor'), path.join(repo, 'static/vendor'), { recursive: true });
  for (const page of fs.readdirSync(path.join(BLOG_ROOT, 'content'))) {
    const full = path.join(BLOG_ROOT, 'content', page);
    if (fs.statSync(full).isFile() && page.endsWith('.md')) {
      fs.copyFileSync(full, path.join(repo, 'content', page));
    }
  }

  const snap = JSON.parse(fs.readFileSync(path.join(BLOG_ROOT, 'data/tag-catalog-snapshot.json'), 'utf8'));
  const flatHeader = require('../assets/js/protocol-registry').recordHeader('paper-tag-flat-tags', 'paper-tag-flat-tags');
  const conceptObj = (id) => {
    const c = snap.concepts.find(x => x.id === id);
    assert.ok(c, `missing concept ${id}`);
    return { id: c.id, facet: c.facet, label: c.zh };
  };

  const makePost = (slug, fm, body) => {
    fs.writeFileSync(path.join(repo, 'content/posts', slug + '.md'), '---\n' + JSON.stringify(fm) + '\n---\n\n' + body + '\n', 'utf8');
  };

  // Paper 1: ASR + High Score + Math (inline \bm, display \sum/\bmatrix/\quad, H3 math, spec math, syntax error fallback) + Primary Code + Verified Demo
  makePost('2026-11-24-asr-katex-2611-93001', {
    title: 'KaTeX SSR ASR Paper',
    date: '2026-11-24',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.93001v1',
    paper_digest_score: 8.8,
    paper_digest_tags_contract: flatHeader.contract,
    paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256,
    paper_digest_tags_concepts: [conceptObj('task.asr')]
  }, [
    '## 📌 核心摘要',
    '',
    '用矩阵形式 \\(\\bm{y} = \\bm{W}\\bm{x} + \\bm{b}\\) 统一声学编码，并处理非法宏 \\(\\nonexistentcmd{z}\\)。',
    '',
    '\\[\\sum_{i=1}^N \\alpha_i \\quad \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\]',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码相关资源：<https://github.com/example/asr-katex> — 链接可访问（HTTP 200）',
    '- 演示资源：<https://example.github.io/asr-demo/> — 链接可访问（HTTP 200）；含 5 条试听样本（已验证可访问）',
    '- 第三方资源：<https://github.com/espnet/espnet> — 链接可访问（HTTP 200）',
    '',
    '## ⚙️ 关键实现与复现规格',
    '',
    '- **音频信号与流式规格**：采样率 16 kHz，隐藏维度 \\(d_{\\text{model}} = 512\\)。',
    '',
    '## 🧭 深度解读',
    '',
    '### 为什么需要 \\(\\bm{W}\\) 门控约束',
    '',
    '公式 \\(0 < g_t < 1\\) 保证因果稳定。',
    ''
  ].join('\n'));

  // Paper 2: TTS + Conference + Third-party-only links (hasCode MUST be false, hasDemo MUST be false!)
  makePost('2026-11-23-tts-conf-demo', {
    title: 'Conference TTS Paper',
    date: '2026-11-23',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:interspeech:2026:paper:tts93002',
    paper_digest_conference_record_url: 'https://isca.example/tts93002',
    paper_digest_score: 7.4,
    paper_digest_tags_contract: flatHeader.contract,
    paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256,
    paper_digest_tags_concepts: [conceptObj('task.tts')]
  }, [
    '## 📌 核心摘要',
    '',
    '纯文本语音合成会议论文（不含公式）。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 第三方资源：<https://github.com/someone/other-repo> — 链接可访问（HTTP 200）',
    '- 演示资源：<https://broken.example/demo> — 链接不可用（HTTP 404）',
    ''
  ].join('\n'));

  // Paper 3: Speech Enhancement (score 8.2)
  makePost('2026-11-22-enh-2611-93003', {
    title: 'Speech Enhancement Paper',
    date: '2026-11-22',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.93003v1',
    paper_digest_score: 8.2,
    paper_digest_tags_contract: flatHeader.contract,
    paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256,
    paper_digest_tags_concepts: [conceptObj('task.speech-enhancement')]
  }, '## 📌 核心摘要\n\n语音增强论文摘要。');

  // Paper 4: Music Generation (score 7.8)
  makePost('2026-11-21-music-2611-93004', {
    title: 'Music Generation Paper',
    date: '2026-11-21',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.93004v1',
    paper_digest_score: 7.8,
    paper_digest_tags_contract: flatHeader.contract,
    paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256,
    paper_digest_tags_concepts: [conceptObj('task.music-generation')]
  }, '## 📌 核心摘要\n\n音乐生成论文摘要。');

  // Paper 5: Audio LLM (score 8.6)
  makePost('2026-11-20-audiollm-2611-93005', {
    title: 'Audio LLM Paper',
    date: '2026-11-20',
    draft: false,
    paper_digest_page_type: 'paper',
    paper_digest_arxiv_id: '2611.93005v1',
    paper_digest_score: 8.6,
    paper_digest_tags_contract: flatHeader.contract,
    paper_digest_tags_schema_fingerprint: flatHeader.schemaFingerprint,
    paper_digest_tags_registry_sha256: snap.registrySha256,
    paper_digest_tags_concepts: [conceptObj('model_family.audio-language')]
  }, '## 📌 核心摘要\n\n音频大模型论文摘要。');

  // Daily digest index
  makePost('2026-11-24', {
    title: '语音/音乐/音频论文速递 2026-11-24',
    date: '2026-11-24',
    draft: false,
    paper_digest_page_type: 'index'
  }, '共分析 5 篇论文。');

  execFileSync('git', ['init'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['config', 'user.email', 'test@example.invalid'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['config', 'user.name', 'Test'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['add', '.'], { cwd: repo, stdio: 'pipe' });
  execFileSync('git', ['commit', '-m', 'test: track 13.4 hugo fixture'], { cwd: repo, stdio: 'pipe' });

  const buildDir = path.join(workspace, 'public');
  const buildRes = spawnSync('hugo', ['--source', repo, '--destination', buildDir, '--minify', '--noBuildLock', '--panicOnWarning'], {
    cwd: repo, encoding: 'utf8'
  });
  assert.equal(buildRes.status, 0, `${buildRes.stdout}\n${buildRes.stderr}`);

  shardIndex(buildDir);
  exportDesktopDetails(buildDir, repo);

  // Full navigation & desktop details verification
  verifyPageNavigation(buildDir);
  verifyDesktopDetails(buildDir);

  // 1. Verify KaTeX SSR on math paper vs absent on non-math paper + Pagefind attrs + cmdk trigger
  const asrHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-24-asr-katex-2611-93001/index.html'), 'utf8');
  assert.match(asrHtml, /vendor\/katex\/katex\.min\.css/);
  assert.match(asrHtml, /class=["']?katex-display["']?/);
  assert.match(asrHtml, /class=["']?katex["']?/);
  assert.match(asrHtml, /<code class=["']?math-fallback["']?[^>]*>\\nonexistentcmd\{z\}<\/code>/);
  assert.doesNotMatch(asrHtml, /<merror\b/i, 'syntax error fallback must never emit <merror>');
  assert.doesNotMatch(asrHtml, /MathJax|medium-zoom|cdn\.jsdelivr\.net/i);
  assert.match(asrHtml, /id=["']?cmdk-trigger["']?/);
  assert.match(asrHtml, /data-pagefind-body/);
  assert.match(asrHtml, /data-pagefind-ignore=["']?all["']?/);
  assert.match(asrHtml, /data-pagefind-filter=["']?类型["']?/);
  assert.match(asrHtml, /data-pagefind-filter=["']?开源["']?/);
  assert.match(asrHtml, /figure-viewer\.min\.[a-f0-9]+\.js/);
  assert.match(asrHtml, /table-workbench\.min\.[a-f0-9]+\.js/);
  assert.match(asrHtml, /command-palette\.min\.[a-f0-9]+\.js/);
  // H3 math preserved cleanly inside .reader-section-roadmap!
  const roadmapMatch = asrHtml.match(/<div class=["']?reader-section-roadmap["']?[^>]*>[\s\S]*?<\/ol>\s*<\/div>/);
  assert.ok(roadmapMatch && roadmapMatch[0].includes('mathvariant="bold-italic"'), 'H3 math must stay SSR-rendered inside roadmap');

  const ttsHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-23-tts-conf-demo/index.html'), 'utf8');
  assert.doesNotMatch(ttsHtml, /vendor\/katex\/katex\.min\.css/, 'non-math page must not load KaTeX CSS');

  // 2. Verify exported client/details/articles/*.html have pure MathML, ZERO .katex-html/<svg>, ZERO data-pagefind inside #article-body, and 100% v1.4.6 allowlist!
  const articlesDir = path.join(buildDir, 'client/details/articles');
  const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));
  let sawMath = false;
  let sawSelfClosingMspace = false;
  for (const f of articleFiles) {
    const html = fs.readFileSync(path.join(articlesDir, f), 'utf8');
    assert.ok(!html.includes('<!--'));
    assert.doesNotMatch(html, /katex-html|katex-display|<svg\b|data-pagefind/i);
    if (html.includes('<math')) sawMath = true;
    if (/<mspace\b[^>]*\/>/.test(html)) sawSelfClosingMspace = true;
    let mathDepth = 0;
    for (const tag of parseTags(html)) {
      if (tag.name === 'math') {
        if (!tag.isClosing) mathDepth += 1;
        else mathDepth = Math.max(0, mathDepth - 1);
      }
      if (mathDepth > 0 || tag.name === 'math') {
        assert.ok(MATHML_V146_TAGS.has(tag.name), `${f}: non-v1.4.6 MathML tag <${tag.name}>`);
        for (const attr of tag.attrs) {
          assert.ok(MATHML_V146_ATTRS.has(attr.name), `${f}: non-v1.4.6 MathML attr ${attr.name} on <${tag.name}>`);
        }
      } else {
        assert.ok(OUTER_V146_TAGS.has(tag.name), `${f}: non-v1.4.6 outer HTML tag <${tag.name}>`);
        for (const attr of tag.attrs) {
          assert.ok(OUTER_V146_ATTRS.has(attr.name), `${f}: non-v1.4.6 outer attr ${attr.name} on <${tag.name}>`);
        }
      }
    }
    assert.equal(mathDepth, 0);
  }
  assert.ok(sawMath, 'exported article must contain collapsed pure MathML');
  assert.ok(sawSelfClosingMspace, 'self-closing <mspace ... /> must be preserved as valid XML for macOS v1.4.6');

  // 3. Verify Curated RSS feeds + untouched index.xml + zero nested index.xml + subscribe links
  const feedStats = verifyCuratedFeeds(buildDir);
  assert.deepEqual(Object.keys(feedStats).sort(), [...CURATED_FEED_FILES].sort());
  assert.equal(feedStats['high-score.xml'].itemCount, 3, 'high-score feed has 3 papers >= 8.0');
  assert.equal(feedStats['topic-asr.xml'].itemCount, 1);
  assert.equal(feedStats['topic-tts.xml'].itemCount, 1);
  assert.equal(feedStats['topic-enhancement.xml'].itemCount, 1);
  assert.equal(feedStats['topic-music.xml'].itemCount, 1);
  assert.equal(feedStats['topic-audio-llm.xml'].itemCount, 1);
  const asrFeedXml = fs.readFileSync(path.join(buildDir, 'feeds/topic-asr.xml'), 'utf8');
  assert.doesNotMatch(asrFeedXml, /\\bm\{|katex-html/, 'RSS plain summary must strip KaTeX duplicate HTML and TeX annotation');
  assert.match(asrHtml, /feeds\/high-score\.xml/);
  assert.match(asrHtml, /feeds\/topic-audio-llm\.xml/);

  // 4. Verify index.json OSS/Demo booleans (primary only, no third-party false positive!)
  const clientManifest = JSON.parse(fs.readFileSync(path.join(buildDir, 'client/index.json'), 'utf8'));
  const allIndexed = clientManifest.shards.flatMap(s => JSON.parse(fs.readFileSync(path.join(buildDir, 'client', s.url), 'utf8')));
  const asrRec = allIndexed.find(r => r.permalink.includes('2026-11-24-asr-katex-2611-93001'));
  const ttsRec = allIndexed.find(r => r.permalink.includes('2026-11-23-tts-conf-demo'));
  assert.equal(asrRec.hasCode, true);
  assert.equal(asrRec.hasDemo, true);
  assert.ok(!asrRec.summary.includes('katex-html') && !asrRec.summary.includes('\\bm{'));
  assert.equal(ttsRec.hasCode, undefined, 'third-party-only paper must NOT set hasCode');
  assert.equal(ttsRec.hasDemo, undefined, 'HTTP 404 demo paper must NOT set hasDemo');
});

test('collapseKatexToMathML unwraps minified & unminified KaTeX spans and strips SVG/aria-hidden/style/v1.4.6-disallowed MathML attrs while preserving valid MathML attrs', () => {
  const sample = '<p>A <span class=katex-display><span class=katex><span class=katex-mathml><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="true" largeop="true" form="prefix">∑</mo><mspace width="0.5em" linebreak="newline"/></mrow><annotation encoding="application/x-tex">\\sum</annotation></semantics></math></span><span class=katex-html aria-hidden=true><svg><path d="M0 0"/></svg><span style="top:-2em">x</span></span></span></span> B</p>';
  const collapsed = collapseKatexToMathML(sample);
  assert.doesNotMatch(collapsed, /katex|svg|aria-hidden|style=/);
  assert.match(collapsed, /<math xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML" display="block">/);
  const sanitized = sanitizeArticleHtml(sample, 'katex-unit');
  assert.match(sanitized, /stretchy="true"/);
  assert.doesNotMatch(sanitized, /largeop=|form=|linebreak=/);
  assert.match(sanitized, /<mspace width="0\.5em" \/>/);
});

test('Track 13.4a: /papers/ library filters by minScore, source (arxiv/conference), oss (code/demo/any), syncs URL & renders zero-innerHTML badges', async () => {
  const libSource = fs.readFileSync(path.join(BLOG_ROOT, 'assets/js/paper-library.js'), 'utf8');
  assert.doesNotMatch(libSource, /\.innerHTML\s*=/);

  const nodes = {};
  class El {
    constructor(tag = 'div') {
      this.tagName = tag; this.children = []; this.dataset = {}; this.handlers = {}; this.attributes = {};
      this.hidden = false; this._text = ''; this._value = ''; this.classList = { toggle() {}, remove() {} };
    }
    set textContent(v) { this._text = String(v); this.children = []; }
    get textContent() { return this._text + this.children.map(c => c.textContent).join(''); }
    get options() { return this.children; }
    get selectedIndex() { return Math.max(0, this.children.findIndex(c => c.value === this._value)); }
    set value(v) { this._value = this.tagName === 'select' && !this.children.some(c => c.value === v) ? '' : String(v); }
    get value() { return this._value; }
    appendChild(c) {
      if (c.tagName === 'fragment') { c.children.slice().forEach(x => this.appendChild(x)); return c; }
      c.parentNode = this; this.children.push(c); return c;
    }
    replaceChildren() { this.children = []; this._text = ''; }
    setAttribute(k, v) { this.attributes[k] = String(v); }
    addEventListener(k, fn) { this.handlers[k] = fn; }
    dispatch(k) { this.handlers[k]?.({ preventDefault() {} }); }
    focus() {}
  }
  const add = (id, tag = 'div', vals = []) => {
    const el = nodes[id] = new El(tag);
    el.id = id;
    vals.forEach(v => { const o = new El('option'); o.value = v; o.textContent = v; el.appendChild(o); });
    return el;
  };
  add('paper-library').dataset.indexUrl = '/audio-paper-digest-blog/index.json';
  add('library-query', 'input');
  add('library-type', 'select', ['paper', 'daily', 'conference', 'all']);
  add('library-year', 'select', ['all']);
  add('library-sort', 'select', ['newest', 'score', 'title', 'relevance']);
  add('library-score', 'select', ['all', '8.5', '8.0', '7.0']);
  add('library-source', 'select', ['all', 'arxiv', 'conference']);
  add('library-oss', 'select', ['all', 'code', 'demo', 'any']);
  ['library-count', 'library-results', 'library-more', 'paper-library-filters'].forEach(id => add(id));

  const items = [
    { title: 'A', titleZh: '高分开源试听 arXiv', permalink: 'https://nanless.github.io/audio-paper-digest-blog/posts/a/', date: '2026-11-24', pageType: 'paper', score: '8.7', sourceKind: 'arxiv', arxivId: '2611.00001', hasCode: true, hasDemo: true, summary: 's1' },
    { title: 'B', titleZh: '高分会议仅代码', permalink: 'https://nanless.github.io/audio-paper-digest-blog/posts/b/', date: '2026-11-23', pageType: 'paper', score: '8.2', sourceKind: 'conference', hasCode: true, summary: 's2' },
    { title: 'C', titleZh: '中分会议无资源', permalink: 'https://nanless.github.io/audio-paper-digest-blog/posts/c/', date: '2026-11-22', pageType: 'paper', score: '7.1', sourceKind: 'conference', summary: 's3' }
  ];
  const win = {
    location: new URL('https://nanless.github.io/audio-paper-digest-blog/papers/?minScore=8.0&source=conference&oss=code'),
    history: { replaceState(_s, _t, target) { win.location = new URL(target, win.location); }, pushState(_s, _t, target) { win.location = new URL(target, win.location); } },
    addEventListener() {}, clearTimeout() {}, setTimeout(fn) { fn(); return 1; }
  };
  const doc = {
    getElementById: id => nodes[id] || null,
    createElement: tag => new El(tag),
    createDocumentFragment: () => new El('fragment'),
    querySelectorAll: () => []
  };
  vm.runInNewContext(libSource, {
    document: doc, window: win, URL, URLSearchParams,
    fetch: () => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(items) })
  });
  await new Promise(r => setImmediate(r));

  assert.equal(nodes['library-results'].children.length, 1);
  assert.match(nodes['library-results'].textContent, /高分会议仅代码/);
  assert.match(nodes['library-results'].textContent, /💻 开源/);
  assert.doesNotMatch(nodes['library-results'].textContent, /🔊 Demo/);

  nodes['library-source'].value = 'all';
  nodes['library-oss'].value = 'demo';
  nodes['library-oss'].dispatch('change');
  assert.equal(nodes['library-results'].children.length, 1);
  assert.match(nodes['library-results'].textContent, /高分开源试听 arXiv/);
  assert.match(nodes['library-results'].textContent, /🔊 Demo/);
  assert.equal(win.location.searchParams.get('oss'), 'demo');
  assert.equal(win.location.searchParams.get('minScore'), '8.0');
});

test('Track 13.4b: figure-viewer supports dark-mode theme toggle, 1x-6x wheel/pinch/dblclick zoom, drag pan, keyboard & focus trap with zero innerHTML', () => {
  const src = fs.readFileSync(path.join(BLOG_ROOT, 'assets/js/figure-viewer.js'), 'utf8');
  assert.doesNotMatch(src, /\.innerHTML\s*=/);
  const css = fs.readFileSync(path.join(BLOG_ROOT, 'assets/css/extended/zzzz-research-portal.css'), 'utf8');
  assert.match(css, /invert\(0\.88\)\s+hue-rotate\(180deg\)\s+contrast\(1\.04\)/);

  const { doc, win } = createMiniDom();
  doc.documentElement.setAttribute('data-theme', 'dark');
  const article = doc.createElement('div');
  article.className = 'research-article';
  const p1 = doc.createElement('p');
  const img1 = doc.createElement('img');
  img1.setAttribute('src', '/img/fig1.png');
  img1.setAttribute('alt', 'Figure 1 architecture');
  p1.appendChild(img1);
  const p2 = doc.createElement('p');
  const img2 = doc.createElement('img');
  img2.setAttribute('src', '/img/fig2.png');
  img2.setAttribute('alt', 'Figure 2 results');
  p2.appendChild(img2);
  article.appendChild(p1);
  article.appendChild(p2);
  doc.body.appendChild(article);

  const ctrl = figureViewer.init({ document: doc, window: win });
  assert.equal(ctrl.items.length, 2);
  // Default in dark mode -> effective theme is dark, toggle button shows 原色
  assert.equal(ctrl.items[0].themeBtn.textContent, '原色');
  ctrl.items[0].themeBtn.click();
  assert.equal(img1.getAttribute('data-figure-theme'), 'light');
  assert.equal(ctrl.items[0].themeBtn.textContent, '反色');

  // Open lightbox via zoom button
  ctrl.items[0].zoomBtn.click();
  const dialog = ctrl.getDialog();
  assert.equal(dialog.hidden, false);
  assert.equal(dialog.getAttribute('role'), 'dialog');
  assert.equal(dialog.getAttribute('aria-modal'), 'true');
  assert.equal(ctrl.state.scale, 1);

  // Double click toggles 1x <-> 2.5x
  const stage = dialog.querySelector('.rw-lightbox__stage');
  stage.dispatch('dblclick');
  assert.equal(ctrl.state.scale, 2.5);
  // Drag pan when zoomed
  stage.dispatch('pointerdown', { pointerId: 1, clientX: 100, clientY: 100 });
  stage.dispatch('pointermove', { pointerId: 1, clientX: 140, clientY: 125 });
  stage.dispatch('pointerup', { pointerId: 1 });
  assert.equal(ctrl.state.tx, 40);
  assert.equal(ctrl.state.ty, 25);

  // Wheel zoom clamped at 6x max
  for (let i = 0; i < 20; i++) stage.dispatch('wheel', { deltaY: -100 });
  assert.equal(ctrl.state.scale, 6);
  // Keyboard '0' resets 1:1
  dialog.dispatch('keydown', { key: '0' });
  assert.equal(ctrl.state.scale, 1);
  assert.equal(ctrl.state.tx, 0);
  // Keyboard ArrowRight switches to figure 2
  dialog.dispatch('keydown', { key: 'ArrowRight' });
  assert.equal(ctrl.state.index, 1);
  // Keyboard 'i' toggles figure 2 theme to light
  dialog.dispatch('keydown', { key: 'i' });
  assert.equal(img2.getAttribute('data-figure-theme'), 'light');
  // Pinch zoom with 2 pointers
  stage.dispatch('pointerdown', { pointerId: 1, clientX: 0, clientY: 0 });
  stage.dispatch('pointerdown', { pointerId: 2, clientX: 100, clientY: 0 });
  stage.dispatch('pointermove', { pointerId: 2, clientX: 200, clientY: 0 });
  stage.dispatch('pointerup', { pointerId: 1 });
  stage.dispatch('pointerup', { pointerId: 2 });
  assert.equal(ctrl.state.scale, 2);
  // Escape closes and returns focus to zoomBtn
  dialog.dispatch('keydown', { key: 'Escape' });
  assert.equal(dialog.hidden, true);
  assert.equal(doc.activeElement, ctrl.items[0].zoomBtn);
});

test('Track 13.4b: table-workbench parses scientific cells, sorts 3-state pinning missing last, freezes sticky col & toggles fullscreen with zero innerHTML', () => {
  const src = fs.readFileSync(path.join(BLOG_ROOT, 'assets/js/table-workbench.js'), 'utf8');
  assert.doesNotMatch(src, /\.innerHTML\s*=/);

  // Scientific numeric parser checks
  assert.equal(tableWorkbench.parseNumericCell('94.2 ± 0.3%').value, 94.2);
  assert.equal(tableWorkbench.parseNumericCell('2.1 ↓').value, 2.1);
  assert.equal(tableWorkbench.parseNumericCell('-12.4 dB').value, -12.4);
  assert.equal(tableWorkbench.parseNumericCell('95M').value, 95e6);
  assert.equal(tableWorkbench.parseNumericCell('1.2B').value, 1.2e9);
  assert.equal(tableWorkbench.parseNumericCell('48K').value, 48e3);
  assert.equal(tableWorkbench.parseNumericCell('1.5e-3').value, 0.0015);
  assert.ok(tableWorkbench.compareCells('<0.01', '0.01', 'asc') < 0);
  assert.equal(tableWorkbench.parseNumericCell('—').kind, 'missing');
  assert.equal(tableWorkbench.parseNumericCell('N/A').kind, 'missing');
  assert.ok(tableWorkbench.compareCells('—', '1.0', 'asc') > 0, 'missing pinned last in asc');
  assert.ok(tableWorkbench.compareCells('—', '1.0', 'desc') > 0, 'missing pinned last in desc');

  const { doc, win } = createMiniDom();
  const article = doc.createElement('div');
  article.className = 'research-article';
  const table = doc.createElement('table');
  const thead = doc.createElement('thead');
  const hRow = doc.createElement('tr');
  ['Model', 'WER (%)', 'Params'].forEach(label => {
    const th = doc.createElement('th');
    th.appendChild(doc.createTextNode(label));
    hRow.appendChild(th);
  });
  thead.appendChild(hRow);
  const tbody = doc.createElement('tbody');
  const rowsData = [
    ['Baseline', '5.9 ± 0.2', '120M'],
    ['MissingRow', '—', 'N/A'],
    ['Ours', '4.1 ↓', '95M'],
    ['Tiny', '<0.01', '48K']
  ];
  rowsData.forEach(vals => {
    const tr = doc.createElement('tr');
    vals.forEach(v => { const td = doc.createElement('td'); td.textContent = v; tr.appendChild(td); });
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  article.appendChild(table);
  doc.body.appendChild(article);

  const ctrls = tableWorkbench.init({ document: doc, window: win });
  assert.equal(ctrls.length, 1);
  const ctrl = ctrls[0];
  assert.equal(ctrl.sortable, true);
  assert.equal(ctrl.freezable, true);

  // Overflow simulation triggers sticky col + scroll shadows
  ctrl.scrollBox.scrollWidth = 900;
  ctrl.scrollBox.clientWidth = 400;
  ctrl.scrollBox.scrollLeft = 50;
  ctrl.updateScrollState();
  assert.equal(ctrl.shell.getAttribute('data-sticky-col'), 'true');
  assert.equal(ctrl.scrollBox.getAttribute('data-scroll-left'), 'true');
  assert.equal(ctrl.scrollBox.getAttribute('data-scroll-right'), 'true');

  // 3-state sort on WER column (index 1): asc -> desc -> none
  const werSortBtn = hRow.children[1].querySelector('.rw-table-sort-btn');
  const rowOrder = () => tbody.children.map(tr => tr.children[0].textContent);
  werSortBtn.click();
  assert.deepEqual(rowOrder(), ['Tiny', 'Ours', 'Baseline', 'MissingRow']);
  werSortBtn.click();
  assert.deepEqual(rowOrder(), ['Baseline', 'Ours', 'Tiny', 'MissingRow']);
  werSortBtn.click();
  assert.deepEqual(rowOrder(), ['Baseline', 'MissingRow', 'Ours', 'Tiny']);

  // Fullscreen modal open & Esc close
  ctrl.openFullscreen();
  const modal = doc.querySelector('.rw-table-modal');
  assert.equal(modal.hidden, false);
  win.dispatch('keydown', { key: 'Escape' });
  assert.equal(modal.hidden, true);
});

test('Track 13.4d: command-palette supports Pagefind safe <mark> tokenizer, client/index.json fallback, shortcuts, same-origin gate & build-pagefind optional skip', async () => {
  const src = fs.readFileSync(path.join(BLOG_ROOT, 'assets/js/command-palette.js'), 'utf8');
  assert.doesNotMatch(src, /\.innerHTML\s*=/);

  // Same-origin gate tests
  assert.equal(commandPalette.safeSiteUrl('https://evil.example/audio-paper-digest-blog/x', 'https://nanless.github.io', '/audio-paper-digest-blog/'), null);
  assert.equal(commandPalette.safeSiteUrl('javascript:alert(1)', 'https://nanless.github.io', '/audio-paper-digest-blog/'), null);
  assert.equal(
    commandPalette.safeSiteUrl('/audio-paper-digest-blog/posts/a/', 'https://nanless.github.io', '/audio-paper-digest-blog/'),
    'https://nanless.github.io/audio-paper-digest-blog/posts/a/'
  );

  // Mode 1: Pagefind mode with hostile HTML inside excerpt -> ONLY <mark> nodes created, <img> stripped!
  const dom1 = createMiniDom();
  const trigger1 = dom1.doc.createElement('button');
  trigger1.setAttribute('id', 'cmdk-trigger');
  dom1.doc.body.appendChild(trigger1);

  const pfCalls = [];
  const palette1 = commandPalette.init({
    document: dom1.doc,
    window: dom1.win,
    basePath: '/audio-paper-digest-blog/',
    debounceMs: 0,
    loadPagefind: async () => ({
      search: async (q, opts) => {
        pfCalls.push({ q, opts });
        return {
          results: [
            {
              data: async () => ({
                url: '/audio-paper-digest-blog/posts/safe-paper/',
                meta: { title: '流式语音识别论文' },
                excerpt: '提出 <mark>流式</mark> 编码器 <img src=x onerror=alert(1)> 降低延迟',
                filters: { 类型: ['论文解读'], 年份: ['2026'], 评分: ['8.5+'] }
              })
            },
            {
              data: async () => ({
                url: 'https://evil.example/audio-paper-digest-blog/phish/',
                meta: { title: 'Evil Offsite' },
                excerpt: '<mark>bad</mark>'
              })
            }
          ]
        };
      }
    })
  });

  // '/' inside an input must NOT open palette
  const dummyInput = dom1.doc.createElement('input');
  dom1.win.dispatch('keydown', { key: '/', target: dummyInput });
  assert.equal(palette1.state.open, false);

  // Cmd+K opens palette
  dom1.win.dispatch('keydown', { key: 'k', metaKey: true });
  assert.equal(palette1.state.open, true);
  await new Promise(r => setImmediate(r));
  assert.equal(palette1.state.mode, 'pagefind');

  palette1.getInput().value = '流式';
  await palette1.runSearch();
  const list1 = palette1.getList();
  assert.equal(list1.children.length, 1, 'off-site Pagefind URL must be blocked by same-origin gate');
  assert.equal(list1.querySelectorAll('mark').length, 2, 'title + excerpt <mark> nodes');
  assert.equal(list1.querySelectorAll('img').length, 0, 'XSS <img> in excerpt must be stripped');

  // Mode 2: Client-Index fallback when Pagefind is absent
  const dom2 = createMiniDom();
  const sampleRecords = [
    { title: 'Streaming ASR', titleZh: '流式语音识别', permalink: '/audio-paper-digest-blog/posts/asr/', summary: '低延迟流式语音识别模型', date: '2026-11-24', pageType: 'paper', score: '8.7', hasCode: true, hasDemo: true, arxivId: '2611.00001' },
    { title: 'Audio Note', titleZh: '低分笔记', permalink: '/audio-paper-digest-blog/posts/low/', summary: '低分流式实验', date: '2026-11-20', pageType: 'paper', score: '6.5' }
  ];
  dom2.win.ResearchSearchIndex = { load: async () => sampleRecords };
  const palette2 = commandPalette.init({
    document: dom2.doc,
    window: dom2.win,
    basePath: '/audio-paper-digest-blog/',
    debounceMs: 0,
    loadPagefind: async () => null
  });
  dom2.win.dispatch('keydown', { key: '/', target: dom2.doc.body });
  assert.equal(palette2.state.open, true);
  await new Promise(r => setImmediate(r));
  assert.equal(palette2.state.mode, 'client-index');

  // Click '高分 ≥8.0' facet chip (index 2) and search '流式'
  palette2.getFacetButtons()[2].click();
  palette2.getInput().value = '流式';
  await palette2.runSearch();
  assert.equal(palette2.getList().children.length, 1);
  assert.match(palette2.getList().textContent, /流式语音识别/);
  assert.doesNotMatch(palette2.getList().textContent, /低分笔记/);
  assert.ok(palette2.getList().querySelectorAll('mark').length >= 1);

  // Test scripts/build-pagefind.js graceful skip when binary absent & success when built
  const tmpPub = fs.mkdtempSync(path.join(os.tmpdir(), 'pagefind-builder-'));
  try {
    const skipped = buildPagefind(tmpPub, { bin: 'nonexistent-pagefind-binary-xyz-999' });
    assert.equal(skipped.status, 'skipped');
    const built = buildPagefind(tmpPub, {
      bin: 'mock-pagefind',
      spawnSync: (_bin, args) => {
        if (args[0] === '--version') return { status: 0, stdout: 'pagefind 1.3.0\n', stderr: '' };
        fs.mkdirSync(path.join(tmpPub, 'pagefind'), { recursive: true });
        fs.writeFileSync(path.join(tmpPub, 'pagefind/pagefind.js'), 'export async function search(){return {results:[]};}\n');
        return { status: 0, stdout: 'Indexed', stderr: '' };
      }
    });
    assert.equal(built.status, 'built');
  } finally {
    fs.rmSync(tmpPub, { recursive: true, force: true });
  }
});

test('Round 1 Regression (P0-1): strict v1.4.6 MathML intersection & mathDepth tracking in sanitizeArticleHtml / assertSafeArticleHtml', () => {
  // 1. Disallowed v1.4.6 MathML attrs + mlabeledtr + invalid <annotation> inside <math>
  const dirtyMath = [
    '<p>Before ',
    '<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">',
    '<semantics><mrow>',
    '<mstyle mathsize="0.7em" mathcolor="red"><mi>x</mi></mstyle>',
    '<mspace mathbackground="black" linebreak="newline" width="1em" />',
    '<mo largeop="true" form="prefix" stretchy="true">∑</mo>',
    '<mtable><mlabeledtr><mtd columnspan="2" rowspan="2"><mn>1</mn></mtd></mlabeledtr></mtable>',
    '<mfrac numalign="left" denomalign="right" bevelled="true"><mn>1</mn><mn>2</mn></mfrac>',
    '</mrow>',
    '<annotation encoding="text/html"><b>evil</b></annotation>',
    '<annotation>missing encoding</annotation>',
    '<annotation encoding="application/x-tex">\\sum x</annotation>',
    '</semantics></math>',
    ' orphan <mi>y</mi> and <annotation>z</annotation> and </math></p>'
  ].join('');

  const cleaned = sanitizeArticleHtml(dirtyMath, 'regression-math');
  assert.doesNotMatch(cleaned, /\b(?:mathsize|mathcolor|mathbackground|linebreak|largeop|form|columnspan|rowspan|numalign|denomalign|bevelled)=/i);
  assert.doesNotMatch(cleaned, /<\/?mlabeledtr\b/i);
  assert.doesNotMatch(cleaned, /encoding="text\/html"/i);
  assert.doesNotMatch(cleaned, /missing encoding/i);
  assert.match(cleaned, /<annotation encoding="application\/x-tex">\\sum x<\/annotation>/);
  assert.match(cleaned, /<mspace width="1em" \/>/);
  assert.match(cleaned, /&lt;mi&gt;y&lt;\/mi&gt;/);
  assert.match(cleaned, /&lt;annotation&gt;z&lt;\/annotation&gt;/);
  assert.match(cleaned, /&lt;\/math&gt;/);

  // Verify cleaned output passes strict v1.4.6 allowlist + mathDepth check
  let depth = 0;
  for (const tag of parseTags(cleaned)) {
    if (tag.name === 'math') {
      if (tag.isClosing) depth -= 1;
      else if (!tag.raw?.endsWith('/>')) depth += 1;
      assert.ok(depth >= 0);
    } else if (MATHML_V146_TAGS.has(tag.name)) {
      assert.ok(depth > 0, `MathML child <${tag.name}> must stay inside <math>`);
      for (const attr of tag.attrs) {
        assert.ok(MATHML_V146_ATTRS.has(attr.name), `MathML attr ${attr.name} must be in v1.4.6 intersection`);
      }
    } else {
      assert.ok(OUTER_V146_TAGS.has(tag.name), `Outer tag <${tag.name}> must be allowlisted`);
    }
  }
  assert.equal(depth, 0);

  // 2. assertSafeArticleHtml fail-closed rejections
  assert.throws(() => assertSafeArticleHtml('<p><mi>x</mi></p>', 'orphan-mi'), /不允许在 <math> 外部/);
  assert.throws(() => assertSafeArticleHtml('<p><math><mi>x</mi></p>', 'unclosed-math'), /未闭合的 <math>/);
  assert.throws(() => assertSafeArticleHtml('<p></math></p>', 'unmatched-close-math'), /没有对应起点的 <\/math>/);
  assert.throws(() => assertSafeArticleHtml('<p><math><mstyle mathsize="0.7em"><mi>x</mi></mstyle></math></p>', 'bad-mathsize'), /非白名单或危险属性/);
  assert.throws(() => assertSafeArticleHtml('<p><math><mspace linebreak="newline" /></math></p>', 'bad-linebreak'), /非白名单或危险属性/);
  assert.throws(() => assertSafeArticleHtml('<p><math><mo largeop="true">+</mo></math></p>', 'bad-largeop'), /非白名单或危险属性/);
  assert.throws(() => assertSafeArticleHtml('<p><math><mlabeledtr><mtd><mn>1</mn></mtd></mlabeledtr></math></p>', 'bad-mlabeledtr'), /非白名单或禁止标签/);
  assert.throws(() => assertSafeArticleHtml('<p><math><annotation>x</annotation></math></p>', 'bad-annotation'), /合法 encoding/);
});

test('Round 1 Regression (P0-2, P1-8, P1-9, P1-11, P2-14): Hugo SSR strips disallowed MathML attrs, handles frontmatter math, guards withheld tags, fixes topic-enhancement & negative hasCode', () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'wave13-r1-hugo-'));
  const tmpRoot = path.join(workspace, 'repo');
  fs.mkdirSync(tmpRoot, { recursive: true });
  try {
    const hugoYaml = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8')
      .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
    fs.writeFileSync(path.join(tmpRoot, 'hugo.yaml'), hugoYaml);
    for (const dir of ['i18n', 'assets', 'layouts', 'themes', 'static']) {
      const src = path.join(BLOG_ROOT, dir);
      if (fs.existsSync(src)) fs.cpSync(src, path.join(tmpRoot, dir), { recursive: true });
    }
    fs.cpSync(path.join(BLOG_ROOT, 'data'), path.join(tmpRoot, 'data'), {
      recursive: true,
      filter: file => {
        const name = path.basename(file);
        return !name.startsWith('fullsite-r6-')
          && name !== 'exact1028-qualified-classification.json'
          && !name.startsWith('taxonomy-history')
          && !name.startsWith('fullsite-taxonomy-')
          && name !== 'taxonomy-old-v2-publication-holds.json'
          && name !== 'current-page-taxonomy-history-v2.json';
      }
    });

    const postsDir = path.join(tmpRoot, 'content/posts');
    fs.mkdirSync(postsDir, { recursive: true });

    // Post 1: Real KaTeX formulas emitting linebreak/mathsize/mathcolor/largeop/form + frontmatter math + H3 math heading
    fs.writeFileSync(path.join(postsDir, '2026-11-24-math-edge.md'), `---
title: "Math Edge Cases"
date: 2026-11-24T10:00:00+08:00
draft: false
categories: ["论文速递"]
tags: ["语音分离"]
paper_digest_page_type: "paper"
paper_digest_reader_title: "矩阵 \\\\(W_q\\\\) 与误差分析"
paper_digest_one_sentence: "在 \\\\(0.971 \\\\\\\\pm 0.004\\\\) 置信区间下验证流式分离性能。"
paper_digest_score: "8.6"
paper_digest_tags_task: ["task.audio-separation"]
paper_digest_tags_signal: ["signal.speech"]
paper_digest_reader_sections:
  - heading: "损失函数 \\\\(\\\\mathcal{L}_{sep}\\\\)"
    roleLabel: "核心目标"
---

## 🧭 深度解读

### 损失函数 \\(\\mathcal{L}_{sep}\\)

数值误差：\\(0.971 \\\\pm 0.004\\)，换行测试 \\(a \\\\ b\\)，字号颜色 \\(\\small x + \\color{red}{y}\\)，求和 \\(\\sum_{i=1}^{n} (x_i)\\)。

\\[\\begin{bmatrix} a \\\\ \\vdots \\\\ b \\end{bmatrix}\\]

### 实验结论

验证按标题而非按索引匹配 paper_digest_reader_sections 的带公式 H3 角色标签。

## 🔗 开源与复现资源

- **代码仓库**：暂未开源（参见项目说明 https://example.com/placeholder-doc ）
`);

    // Post 2: Frontmatter-only math (NO math in body) -> extend_head MUST still load katex.min.css!
    fs.writeFileSync(path.join(postsDir, '2026-11-24-frontmatter-only-math.md'), `---
title: "Frontmatter Only Math"
date: 2026-11-24T09:00:00+08:00
draft: false
categories: ["论文速递"]
tags: ["音乐源分离"]
paper_digest_one_sentence: "目标函数 \\\\(\\\\alpha + \\\\beta = 1\\\\) 的音乐源分离实验。"
paper_digest_score: "8.2"
paper_digest_tags_task: ["task.music-separation"]
paper_digest_tags_signal: ["signal.music"]
---

## 📖 正文

正文不含任何数学公式，仅验证页头 KaTeX 样式自动按 frontmatter 加载。

## 🔗 开源与复现资源

- **代码仓库**：仓库仅见文档框架 https://github.com/example/empty-readme
`);

    // Post 3+: Copy the 5 REAL cryptographically verified withheld pages + exact hold authority + their 5 taxonomy-history-v2 records
    // so Hugo's real tag_old_v2_publication_holds.html marks them tagPublicationStatus = "withheld" without any synthetic shortcut!
    const holdAuthority = JSON.parse(fs.readFileSync(path.join(BLOG_ROOT, 'data/taxonomy-old-v2-publication-holds.json'), 'utf8'));
    const fullHistoryV2 = JSON.parse(fs.readFileSync(path.join(BLOG_ROOT, 'data/taxonomy-history-v2.json'), 'utf8'));
    const heldRecords = {};
    const heldPageSlugs = [];
    for (const row of holdAuthority.rows) {
      for (const p of row.originalTuple.pages) {
        fs.copyFileSync(path.join(BLOG_ROOT, p.pagePath), path.join(tmpRoot, p.pagePath));
        heldRecords[p.pagePath] = fullHistoryV2.records[p.pagePath];
        heldPageSlugs.push(path.basename(p.pagePath, '.md'));
      }
    }
    fs.copyFileSync(
      path.join(BLOG_ROOT, 'data/taxonomy-old-v2-publication-holds.json'),
      path.join(tmpRoot, 'data/taxonomy-old-v2-publication-holds.json')
    );
    fs.writeFileSync(
      path.join(tmpRoot, 'data/taxonomy-history-v2.json'),
      JSON.stringify({ contract: fullHistoryV2.contract, records: heldRecords })
    );

    // Required site pages
    fs.writeFileSync(path.join(tmpRoot, 'content/papers.md'), '---\ntitle: "论文库"\nlayout: "library"\nurl: "/papers/"\n---\n');
    fs.writeFileSync(path.join(tmpRoot, 'content/search.md'), '---\ntitle: "搜索"\nlayout: "search"\nurl: "/search/"\n---\n');
    fs.writeFileSync(path.join(tmpRoot, 'content/posts/2026-11-24.md'), '---\ntitle: "2026-11-24 音频论文速递"\ndate: 2026-11-24T07:00:00+08:00\ndraft: false\ncategories: ["每日速递"]\n---\n\n今日共收录 3 篇。\n');

    const publicDir = path.join(tmpRoot, 'public');
    execFileSync('hugo', ['--source', tmpRoot, '--destination', publicDir, '--minify'], { stdio: 'pipe' });

    // P0-2: Live HTML MathML has ZERO disallowed attributes while .katex-html renders cleanly
    const mathHtml = fs.readFileSync(path.join(publicDir, 'posts/2026-11-24-math-edge/index.html'), 'utf8');
    const liveMathBlocks = mathHtml.match(/<math\b[^>]*>[\s\S]*?<\/math>/g) || [];
    assert.ok(liveMathBlocks.length >= 5, `Expected >=5 SSR <math> blocks, got ${liveMathBlocks.length}`);
    for (const mb of liveMathBlocks) {
      assert.doesNotMatch(mb, /<mlabeledtr\b/i);
      for (const tag of parseTags(mb)) {
        if (tag.isClosing) continue;
        assert.ok(MATHML_V146_TAGS.has(tag.name), `Live MathML tag <${tag.name}> must be in v1.4.6 29-tag intersection`);
        for (const attr of tag.attrs) {
          assert.ok(MATHML_V146_ATTRS.has(attr.name), `Live MathML attr ${attr.name} on <${tag.name}> must be in v1.4.6 37-attr intersection`);
        }
      }
    }
    assert.match(mathHtml, /class=["']?katex-html\b/, 'Browser visual .katex-html must remain intact');

    // P1-11: Reader H3 role matched through math heading AND JSON-LD description has zero KaTeX/TeX duplication!
    assert.match(mathHtml, /核心目标/, 'Reader H3 heading containing math must match declared roleLabel');
    const ldBlocks = [...mathHtml.matchAll(/<script type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/g)];
    const blogLd = ldBlocks.map(m => JSON.parse(m[1])).find(o => o['@type'] === 'BlogPosting');
    assert.ok(blogLd && blogLd.description, 'BlogPosting JSON-LD must exist');
    assert.doesNotMatch(blogLd.description, /\\mathcal|\\small|katex-html/, 'JSON-LD description must strip KaTeX duplicate HTML and TeX annotations');

    // P1-11: Frontmatter-only math loads self-hosted vendor/katex/katex.min.css AND list/OG/JSON-LD have clean plain summary
    const fmHtml = fs.readFileSync(path.join(publicDir, 'posts/2026-11-24-frontmatter-only-math/index.html'), 'utf8');
    assert.match(fmHtml, /vendor\/katex\/katex\.min\.css/, 'Frontmatter-only math page must load KaTeX CSS');
    const ogMatch = fmHtml.match(/<meta property=["']?og:description["']? content=(?:"([^"]*)"|'([^']*)')/);
    const ogVal = ogMatch ? (ogMatch[1] ?? ogMatch[2] ?? '') : '';
    assert.ok(ogMatch && ogVal && !/\\alpha|katex-html/.test(ogVal), 'og:description must not leak raw KaTeX HTML/annotations');

    // P1-8: topic-enhancement.xml includes task.audio-separation (math-edge) and EXCLUDES task.music-separation (frontmatter-only-math)!
    const enhXml = fs.readFileSync(path.join(publicDir, 'feeds/topic-enhancement.xml'), 'utf8');
    assert.match(enhXml, /2026-11-24-math-edge/, 'topic-enhancement.xml must include task.audio-separation');
    assert.doesNotMatch(enhXml, /2026-11-24-frontmatter-only-math/, 'topic-enhancement.xml must NOT pull task.music-separation');

    // P1-9: Real withheld pages must NOT leak .Params.tags into curated RSS feeds, <category> elements, or paper_toolbar data-paper-meta
    for (const feedName of ['topic-asr.xml', 'topic-tts.xml', 'topic-enhancement.xml', 'topic-music.xml', 'topic-audio-llm.xml']) {
      const xml = fs.readFileSync(path.join(publicDir, 'feeds', feedName), 'utf8');
      for (const slug of heldPageSlugs) {
        assert.doesNotMatch(xml, new RegExp(slug), `withheld page ${slug} must not match ${feedName} via legacy .Params.tags`);
      }
    }
    const hiXml = fs.readFileSync(path.join(publicDir, 'feeds/high-score.xml'), 'utf8');
    const hiItems = hiXml.match(/<item>[\s\S]*?<\/item>/g) || [];
    for (const slug of heldPageSlugs) {
      const itemXml = hiItems.find(block => block.includes(slug));
      if (itemXml) {
        assert.doesNotMatch(itemXml, /<category>/, `withheld page ${slug} in high-score.xml must not emit <category> tags`);
      }
      const heldHtml = fs.readFileSync(path.join(publicDir, 'posts', slug, 'index.html'), 'utf8');
      const metaAttr = heldHtml.match(/data-paper-meta=(?:"([^"]*)"|'([^']*)')/);
      assert.ok(metaAttr, `withheld page ${slug} should render paper_toolbar`);
      const rawMeta = metaAttr[1] ?? metaAttr[2] ?? '';
      const decodedMeta = JSON.parse(
        rawMeta.replace(/&quot;/g, '"').replace(/&#34;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      );
      assert.deepEqual(decodedMeta.tags, [], `withheld page ${slug} must have empty tags in paper_toolbar data-paper-meta`);
      // Also confirm withheld page is not recommended to other papers via legacy tags
      assert.doesNotMatch(heldHtml, /相同关键词：/, `withheld page ${slug} must not receive legacy-tag related reasons`);
    }

    // P2-14: Negative/placeholder code statements must NOT set hasCode = true in index.json!
    const indexRecords = JSON.parse(fs.readFileSync(path.join(publicDir, 'index.json'), 'utf8'));
    const mathRec = indexRecords.find(r => r.permalink.includes('2026-11-24-math-edge'));
    const fmRec = indexRecords.find(r => r.permalink.includes('2026-11-24-frontmatter-only-math'));
    assert.equal(Boolean(mathRec.hasCode), false, '暂未开源 line with URL must NOT set hasCode=true');
    assert.equal(Boolean(fmRec.hasCode), false, '仓库仅见文档框架 line with URL must NOT set hasCode=true');

    // P0-3: Verify hugo --minify preserved native import( in command-palette AND zero new Function across all UX scripts
    const jsAssets = fs.readdirSync(path.join(publicDir, 'js')).filter(f => f.endsWith('.js'));
    const cmdkMinFile = jsAssets.find(f => f.startsWith('command-palette'));
    assert.ok(cmdkMinFile, 'Minified command-palette script must exist');
    const cmdkMin = fs.readFileSync(path.join(publicDir, 'js', cmdkMinFile), 'utf8');
    assert.match(cmdkMin, /import\(/);
    assert.doesNotMatch(cmdkMin, /\bnew\s+Function\b|\beval\s*\(/);
  } finally {
    fs.rmSync(workspace, { recursive: true, force: true });
  }
});

test('Round 1 Regression (P0-3, P0-4, P1-5, P1-6, P1-7, P1-10, P2-12, P2-13, P2-15, P2-16): JS/CSS/build-pagefind hardening', async () => {
  // P0-3: No forbidden sinks in any UX script
  const forbiddenSink = /\.(?:innerHTML|outerHTML)\s*=|\.insertAdjacentHTML\s*\(|document\.write\s*\(|\beval\s*\(|\bnew\s+Function\b/;
  for (const rel of ['assets/js/command-palette.js', 'assets/js/figure-viewer.js', 'assets/js/table-workbench.js']) {
    const src = fs.readFileSync(path.join(BLOG_ROOT, rel), 'utf8');
    assert.doesNotMatch(src, forbiddenSink, `${rel} must not contain forbidden DOM/eval sinks`);
  }

  // P0-4: Strict `this === win` fetch binding in command-palette.js
  const domFetch = createMiniDom();
  let fetchCalledWithWin = false;
  domFetch.win.fetch = async function strictFetch(url) {
    if (this !== domFetch.win) throw new TypeError('Illegal invocation');
    fetchCalledWithWin = true;
    return {
      ok: true,
      json: async () => [{ title: 'Bound Fetch Paper', titleZh: '绑定 Fetch 论文', permalink: '/audio-paper-digest-blog/posts/bound/', date: '2026-11-24', pageType: 'paper', score: '8.4' }]
    };
  };
  const palFetch = commandPalette.init({
    document: domFetch.doc,
    window: domFetch.win,
    basePath: '/audio-paper-digest-blog/',
    debounceMs: 0,
    loadPagefind: async () => null
  });
  palFetch.open();
  await new Promise(r => setImmediate(r));
  assert.equal(fetchCalledWithWin, true, 'win.fetch must be invoked bound to win');
  assert.equal(palFetch.state.mode, 'client-index');

  // P1-5: Pagefind high-score facet uses OR syntax { any: ['8.5+', '8.0+'] } + .catch error handling
  assert.deepEqual(commandPalette.pagefindFiltersForFacet('high-score'), { '评分': { any: ['8.5+', '8.0+'] } });
  const domErr = createMiniDom();
  const palErr = commandPalette.init({
    document: domErr.doc,
    window: domErr.win,
    basePath: '/audio-paper-digest-blog/',
    debounceMs: 0,
    loadPagefind: async () => ({
      search: async () => { throw new Error('WASM network failure'); }
    })
  });
  palErr.open();
  await new Promise(r => setImmediate(r));
  palErr.getInput().value = 'error-trigger';
  await palErr.runSearch(); // Must NOT reject!
  assert.match(palErr.getList().textContent, /失败/);

  // P1-10: Enter on facet chip is NOT hijacked; scrollIntoView called; Tab trap cycles; win Escape closes; reopen skips quick-cmd flash
  const domKbd = createMiniDom();
  let facetClickCount = 0;
  const palKbd = commandPalette.init({
    document: domKbd.doc,
    window: domKbd.win,
    basePath: '/audio-paper-digest-blog/',
    debounceMs: 0,
    loadPagefind: async () => null
  });
  domKbd.win.ResearchSearchIndex = {
    load: async () => [
      { title: 'Alpha ASR', titleZh: '阿尔法语音', permalink: '/audio-paper-digest-blog/posts/a/', date: '2026-11-24', pageType: 'paper', score: '8.5' },
      { title: 'Beta ASR', titleZh: '贝塔语音', permalink: '/audio-paper-digest-blog/posts/b/', date: '2026-11-23', pageType: 'paper', score: '8.1' }
    ]
  };
  palKbd.open();
  await new Promise(r => setImmediate(r));
  const facetBtn = palKbd.getFacetButtons()[1];
  facetBtn.addEventListener('click', () => { facetClickCount += 1; });
  const enterOnFacet = palKbd.getDialog().dispatch('keydown', { key: 'Enter', target: facetBtn });
  assert.equal(enterOnFacet.defaultPrevented, false, 'Enter on focused facet button must NOT be hijacked by palette');

  // ArrowDown triggers scrollIntoView on newly active row
  palKbd.getDialog().dispatch('keydown', { key: 'ArrowDown', target: palKbd.getInput() });
  assert.ok(palKbd.getList().children[1]._scrolledIntoView, 'setActive must call scrollIntoView({ block: nearest })');

  // Tab trap wraps from input -> closeBtn and Shift+Tab wraps backwards
  palKbd.getInput().focus();
  palKbd.getDialog().dispatch('keydown', { key: 'Tab', shiftKey: false });
  assert.equal(domKbd.doc.activeElement.className, 'cmdk-close');
  palKbd.getInput().focus();
  palKbd.getDialog().dispatch('keydown', { key: 'Tab', shiftKey: true });
  assert.notEqual(domKbd.doc.activeElement, palKbd.getInput());

  // Reopen with active query directly searches without resetting to quick commands
  palKbd.getInput().value = '阿尔法';
  await palKbd.runSearch();
  domKbd.win.dispatch('keydown', { key: 'Escape' });
  assert.equal(palKbd.state.open, false, 'Escape on window must close palette');
  palKbd.open();
  await new Promise(r => setImmediate(r));
  assert.equal(palKbd.getList().children.length, 1, 'Reopening with active query must render filtered results without quick-command flash');

  // P1-6 + P2-12: figure-viewer uses <span class="rw-figure-bar"> + rw-figure-host + setPointerCapture + theme-toggle sync + win shortcuts
  const domFig = createMiniDom();
  const toggleBtn = domFig.doc.createElement('button');
  toggleBtn.setAttribute('id', 'theme-toggle');
  toggleBtn.addEventListener('click', () => {
    const isDark = domFig.doc.documentElement.getAttribute('data-theme') === 'dark';
    domFig.doc.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  });
  domFig.doc.body.appendChild(toggleBtn);
  const figArticle = domFig.doc.createElement('div');
  figArticle.className = 'research-article';
  const figP = domFig.doc.createElement('p');
  const figImg = domFig.doc.createElement('img');
  figImg.setAttribute('src', '/img/demo.png');
  figP.appendChild(figImg);
  figArticle.appendChild(figP);
  domFig.doc.body.appendChild(figArticle);

  const fv = figureViewer.init({ document: domFig.doc, window: domFig.win });
  assert.equal(fv.items[0].bar.tagName, 'SPAN', 'rw-figure-bar must be phrasing <span> inside <p>');
  assert.equal(figP.classList.contains('rw-figure-host'), true, 'Host <p> must receive rw-figure-host class');
  assert.equal(fv.items[0].themeBtn.textContent, '反色');
  toggleBtn.click();
  assert.equal(fv.items[0].themeBtn.textContent, '原色', 'Inline theme button must sync when #theme-toggle switches document to dark');

  fv.openLightbox(0, fv.items[0].zoomBtn);
  const stage = fv.getDialog().querySelector('.rw-lightbox__stage');
  stage.dispatch('pointerdown', { pointerId: 7, clientX: 100, clientY: 100 });
  assert.equal(stage.hasPointerCapture(7), true, 'pointerdown must call setPointerCapture');
  domFig.win.dispatch('pointerup', { pointerId: 7 });
  assert.equal(fv.state.pointers.size, 0, 'window pointerup must clean up active pointers');
  domFig.win.dispatch('keydown', { key: '+' });
  assert.ok(fv.state.scale > 1, 'window keydown shortcuts must work while lightbox is open');
  domFig.win.dispatch('keydown', { key: 'Escape' });
  assert.equal(fv.state.open, false);

  // P2-15: table-workbench lowercase 'm' stays meters; <= / >= parse cleanly; <th><a> not nested in <button>; modal Tab focus trap
  assert.equal(tableWorkbench.parseNumericCell('1.5 m').value, 1.5);
  assert.equal(tableWorkbench.parseNumericCell('1.5M').value, 1.5e6);
  assert.equal(tableWorkbench.parseNumericCell('12k').value, 12000);
  assert.equal(tableWorkbench.parseNumericCell('<=0.05').kind, 'number');
  assert.equal(tableWorkbench.parseNumericCell('>=90%').kind, 'number');
  assert.ok(tableWorkbench.compareCells('<0.05', '<=0.05', 'asc') < 0);
  assert.ok(tableWorkbench.compareCells('<=0.05', '0.05', 'asc') < 0);
  assert.ok(tableWorkbench.compareCells('0.05', '>=0.05', 'asc') < 0);

  const domTbl = createMiniDom();
  const tblArticle = domTbl.doc.createElement('div');
  tblArticle.className = 'research-article';
  const tbl = domTbl.doc.createElement('table');
  const thead = domTbl.doc.createElement('thead');
  const hr = domTbl.doc.createElement('tr');
  const thLink = domTbl.doc.createElement('th');
  const aEl = domTbl.doc.createElement('a');
  aEl.setAttribute('href', 'https://example.com');
  aEl.textContent = 'Model';
  thLink.appendChild(aEl);
  const thVal = domTbl.doc.createElement('th');
  thVal.textContent = 'Dist';
  hr.appendChild(thLink);
  hr.appendChild(thVal);
  thead.appendChild(hr);
  const tb = domTbl.doc.createElement('tbody');
  for (const [m, v] of [['A', '2.5 m'], ['B', '1.5 m']]) {
    const tr = domTbl.doc.createElement('tr');
    const td1 = domTbl.doc.createElement('td'); td1.textContent = m;
    const td2 = domTbl.doc.createElement('td'); td2.textContent = v;
    tr.appendChild(td1); tr.appendChild(td2); tb.appendChild(tr);
  }
  tbl.appendChild(thead); tbl.appendChild(tb); tblArticle.appendChild(tbl); domTbl.doc.body.appendChild(tblArticle);
  const tCtrls = tableWorkbench.init({ document: domTbl.doc, window: domTbl.win });
  assert.equal(aEl.parentNode, thLink, 'Interactive <a> inside <th> must NOT be wrapped inside <button>');
  assert.ok(thLink.querySelector('.rw-table-sort-btn--inline'), 'Header with <a> must still provide sibling inline sort button');
  tCtrls[0].openFullscreen();
  const tModal = domTbl.doc.querySelector('.rw-table-modal');
  const tClose = tModal.querySelector('.rw-table-btn--close');
  tClose.focus();
  tModal.dispatch('keydown', { key: 'Tab', shiftKey: false });
  assert.notEqual(domTbl.doc.activeElement, tClose, 'Table modal Tab focus trap must move focus among modal controls');
  tCtrls[0].closeFullscreen();

  // P2-13: citation-source strips Unicode U+2028/U+2029 line separators
  const obsidian = citationSource.formatObsidianNote(
    { identityStatus: 'verified', sourceKind: 'arxiv', arxivId: '2611.00001', title: 'Line\u2028Sep\u2029Test', url: 'https://arxiv.org/abs/2611.00001' },
    { headline: '标题\u2028换行\u2029测试', oneSentence: '摘要\u2028段落', blogDate: '2026-11-24' }
  );
  assert.doesNotMatch(obsidian, /[\u2028\u2029]/, 'Obsidian note must strip U+2028/U+2029');

  // P1-6, P1-7, P2-15, P2-16 CSS assertions
  const portalCss = fs.readFileSync(path.join(BLOG_ROOT, 'assets/css/extended/zzzz-research-portal.css'), 'utf8');
  assert.match(portalCss, /\.scoring-audit-card li > p \{ margin: 0; \}/);
  assert.match(portalCss, /p\.rw-figure-host/);
  assert.match(portalCss, /:is\(\.research-main \.post-content,\.rw-table-modal__body\) table/);
  assert.match(portalCss, /tbody tr:nth-child\(even\) td:first-child \{ background: color-mix\(in srgb,var\(--rw-surface-subtle\) 36%,var\(--rw-surface\)\); \}/);
  assert.match(portalCss, /@media\(max-width:600px\)\s*\{[^}]*max-width:\s*44vw/);
  const baseFigImgIdx = portalCss.indexOf('p.rw-figure-host, p:has(> img:only-child, > a:only-child > img:only-child)) img { display: inline-block');
  const darkFigImgIdx = portalCss.indexOf('img[data-figure-theme="dark"]');
  assert.ok(baseFigImgIdx > 0 && darkFigImgIdx > baseFigImgIdx, 'data-figure-theme dark rule must appear AFTER base figure img rule');

  // P2-16: build-pagefind.js only skips on ENOENT; throws on EACCES / non-zero crash / signal
  const tmpPub2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pagefind-err-'));
  try {
    assert.throws(
      () => buildPagefind(tmpPub2, { bin: 'mock-pf', spawnSync: () => ({ error: Object.assign(new Error('permission denied'), { code: 'EACCES' }) }) }),
      /可执行文件检查失败/
    );
    assert.throws(
      () => buildPagefind(tmpPub2, { bin: 'mock-pf', spawnSync: () => ({ status: 2, stderr: 'segfault' }) }),
      /可执行文件检查失败/
    );
    assert.throws(
      () => buildPagefind(tmpPub2, { bin: 'mock-pf', spawnSync: () => ({ signal: 'SIGKILL' }) }),
      /可执行文件检查失败/
    );
  } finally {
    fs.rmSync(tmpPub2, { recursive: true, force: true });
  }
});

test('KaTeX SSR display-time healing wraps bare CJK characters inside math delimiters without math-fallback', (t) => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'katex-cjk-healing-'));
  t.after(() => fs.rmSync(workspace, { recursive: true, force: true }));
  fs.mkdirSync(path.join(workspace, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(workspace, 'layouts/_default/_markup'), { recursive: true });
  fs.mkdirSync(path.join(workspace, 'layouts/partials'), { recursive: true });
  fs.writeFileSync(path.join(workspace, 'hugo.yaml'), [
    'baseURL: https://example.com/',
    'markup:',
    '  goldmark:',
    '    extensions:',
    '      passthrough:',
    '        enable: true',
    '        delimiters:',
    '          block: [["\\\\[", "\\\\]"]]',
    '          inline: [["\\\\(", "\\\\)"]]'
  ].join('\n') + '\n');
  fs.cpSync(path.join(BLOG_ROOT, 'layouts/_default/_markup/render-passthrough.html'), path.join(workspace, 'layouts/_default/_markup/render-passthrough.html'));
  fs.cpSync(path.join(BLOG_ROOT, 'layouts/partials/render_katex_formula.html'), path.join(workspace, 'layouts/partials/render_katex_formula.html'));
  fs.writeFileSync(path.join(workspace, 'layouts/_default/single.html'), '{{ .Content }}');
  fs.writeFileSync(path.join(workspace, 'content/posts/cjk.md'), [
    '---',
    'title: CJK Math Healing',
    '---',
    '视觉增强 \\(AV 一致 - AO\\)，视觉干扰 \\(AO - AV 不一致\\)，标准 \\(\\text{音频} + x\\)，非法宏 \\(\\nonexistentcmd{z}\\)。'
  ].join('\n') + '\n');
  execFileSync('hugo', ['--source', workspace, '--destination', path.join(workspace, 'public')], { stdio: 'pipe' });
  const html = fs.readFileSync(path.join(workspace, 'public/posts/cjk/index.html'), 'utf8');
  assert.equal((html.match(/class="math-fallback"/g) || []).length, 1, 'only genuinely invalid macro should fall back');
  assert.equal((html.match(/class="katex"/g) || []).length, 3, 'bare CJK math expressions should render via KaTeX');
  assert.match(html, /一致/);
  assert.match(html, /不一致/);
});
