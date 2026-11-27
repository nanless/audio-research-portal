'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync, spawnSync } = require('node:child_process');

const protocols = require('../assets/js/protocol-registry');
const commandPalette = require('../assets/js/command-palette');
const { buildPagefind } = require('../scripts/build-pagefind');
const {
  verifyMathFallbacks,
  verifyPagefindReadiness,
  MATH_FALLBACK_ZERO_SINCE,
  MAX_LEGACY_MATH_FALLBACKS
} = require('../scripts/verify-build');

const BLOG_ROOT = path.resolve(__dirname, '..');

const MATHML_V146_TAGS = new Set([
  'math', 'semantics', 'annotation', 'mrow', 'mi', 'mn', 'mo', 'mtext', 'ms', 'mspace',
  'mfrac', 'msqrt', 'mroot', 'msup', 'msub', 'msubsup', 'mover', 'munder', 'munderover',
  'mtable', 'mtr', 'mtd', 'mstyle', 'mpadded', 'mphantom', 'menclose',
  'mmultiscripts', 'mprescripts', 'none'
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

function createMinimalCmdkDom(scriptAttrs = {}) {
  const handlers = {};
  const winHandlers = {};
  class El {
    constructor(tag) {
      this.tagName = String(tag || '').toUpperCase();
      this.attributes = { ...scriptAttrs };
      this.children = [];
      this.childNodes = [];
      this.style = {};
      this.hidden = false;
      this.value = '';
      this.className = '';
      this.classList = { toggle() {}, add() {}, remove() {}, contains: () => false };
    }
    setAttribute(k, v) { this.attributes[String(k).toLowerCase()] = String(v); if (k === 'id') this.id = String(v); }
    getAttribute(k) { const key = String(k).toLowerCase(); return Object.prototype.hasOwnProperty.call(this.attributes, key) ? this.attributes[key] : null; }
    removeAttribute(k) { delete this.attributes[String(k).toLowerCase()]; }
    appendChild(c) { this.children.push(c); this.childNodes.push(c); return c; }
    replaceChildren() { this.children = []; this.childNodes = []; }
    addEventListener(type, fn) { (handlers[type] ||= []).push(fn); }
    focus() {}
    scrollIntoView() {}
  }
  const scriptEl = new El('script');
  Object.entries(scriptAttrs).forEach(([k, v]) => scriptEl.setAttribute(k, v));
  const head = new El('head');
  const body = new El('body');
  const doc = {
    head,
    body,
    currentScript: scriptEl,
    activeElement: body,
    createElement: (tag) => new El(tag),
    createTextNode: (text) => ({ textContent: text }),
    createDocumentFragment: () => new El('#fragment'),
    getElementById: () => null,
    querySelector: (sel) => (sel.includes('data-cmdk-base-path') ? scriptEl : null)
  };
  const win = {
    location: new URL('https://nanless.github.io/audio-research-portal/'),
    addEventListener(type, fn) { (winHandlers[type] ||= []).push(fn); },
    setTimeout(fn) { fn(); return 1; },
    clearTimeout() {}
  };
  return { doc, win, scriptEl };
}

test('hugo.yaml disables enableGitInfo so shallow CI clones match local builds identically', () => {
  const hugoYaml = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8');
  assert.match(hugoYaml, /^enableGitInfo:\s*false\s*$/m);
  assert.doesNotMatch(hugoYaml, /^enableGitInfo:\s*true\s*$/m);
});

test('tag_display_assets.html supports both de-versioned current contracts and historical -v2 while failing closed on invalid headers', (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tag-display-assets-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  fs.mkdirSync(path.join(tmp, 'data'), { recursive: true });
  fs.mkdirSync(path.join(tmp, 'layouts/partials'), { recursive: true });
  fs.cpSync(path.join(BLOG_ROOT, 'layouts/partials'), path.join(tmp, 'layouts/partials'), { recursive: true });
  fs.copyFileSync(path.join(BLOG_ROOT, 'data/paperdigest-protocols.json'), path.join(tmp, 'data/paperdigest-protocols.json'));
  fs.writeFileSync(path.join(tmp, 'hugo.yaml'), 'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
  fs.writeFileSync(path.join(tmp, 'layouts/index.html'), '{{ partial "tag_display_assets.html" . | jsonify | safeHTML }}');

  const baseBody = {
    registryVersion: 'paper-tag-catalog-v3',
    registrySha256: 'a'.repeat(64),
    concepts: [{ id: 'task.asr', facet: 'task', zh: '语音识别', en: 'ASR', aliases: [], ancestorIds: [], status: 'active' }]
  };
  const oldBody = {
    registryVersion: 'paper-taxonomy-v1',
    registrySha256: 'b'.repeat(64),
    concepts: [{ id: 'task.asr', facet: 'task', zh: '自动语音识别', en: 'ASR', aliases: [], ancestorIds: [], status: 'active' }]
  };
  const snapHeader = protocols.recordHeader('paper-tag-catalog-snapshot', 'paper-tag-catalog-snapshot');
  const versHeader = protocols.recordHeader('paper-tag-catalog-versions', 'paper-tag-catalog-versions');

  const v1Old = { contract: 'paper-taxonomy-registry-snapshot-v1', ...oldBody };
  const v1Current = { contract: 'paper-taxonomy-registry-snapshot-v1', ...baseBody };
  const v2Current = { contract: 'paper-tag-catalog-snapshot-v2', ...baseBody };
  const deVersionedCurrent = { ...snapHeader, ...baseBody };

  const writePair = (snap, vers) => {
    fs.writeFileSync(path.join(tmp, 'data/tag-catalog-snapshot.json'), JSON.stringify(snap));
    fs.writeFileSync(path.join(tmp, 'data/tag-catalog-versions.json'), JSON.stringify(vers));
  };
  const build = () => {
    execFileSync('hugo', ['--source', tmp, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
    return JSON.parse(fs.readFileSync(path.join(tmp, 'public/index.html'), 'utf8'));
  };

  // 1. De-versioned display pair with historical v1 saved snapshot in versions.snapshots
  const deVersionedVersionsWithV1Saved = { ...versHeader, currentSha256: baseBody.registrySha256, snapshots: [v1Old, v1Current] };
  writePair(deVersionedCurrent, deVersionedVersionsWithV1Saved);
  const out1 = build();
  assert.equal(out1.current, true);
  assert.equal(out1.snapshot.contract, 'paper-tag-catalog-snapshot');
  assert.equal(out1.snapshot.schemaFingerprint, snapHeader.schemaFingerprint);
  assert.equal(out1.versions.contract, 'paper-tag-catalog-versions');

  // 2. De-versioned display pair with de-versioned snapshot inside versions.snapshots
  const deVersionedVersionsWithCurrentSaved = { ...versHeader, currentSha256: baseBody.registrySha256, snapshots: [v1Old, deVersionedCurrent] };
  writePair(deVersionedCurrent, deVersionedVersionsWithCurrentSaved);
  const out2 = build();
  assert.equal(out2.current, true);
  assert.equal(out2.versions.snapshots[1].contract, 'paper-tag-catalog-snapshot');

  // 3. Historical -v2 pair still accepted seamlessly
  const v2Versions = { contract: 'paper-tag-catalog-versions-v2', currentSha256: baseBody.registrySha256, snapshots: [v1Old, v2Current] };
  writePair(v2Current, v2Versions);
  const out3 = build();
  assert.equal(out3.current, true);
  assert.equal(out3.snapshot.contract, 'paper-tag-catalog-snapshot-v2');

  // 4. Fail-closed rejections
  for (const [label, snap, vers, pattern] of [
    ['missing schemaFingerprint on de-versioned snapshot', { contract: 'paper-tag-catalog-snapshot', ...baseBody }, deVersionedVersionsWithV1Saved, /新版标签显示文件缺失/],
    ['wrong schemaFingerprint on de-versioned snapshot', { contract: 'paper-tag-catalog-snapshot', schemaFingerprint: '0'.repeat(64), ...baseBody }, deVersionedVersionsWithV1Saved, /新版标签显示文件缺失/],
    ['unexpected schemaFingerprint on historical -v2 snapshot', { ...v2Current, schemaFingerprint: snapHeader.schemaFingerprint }, v2Versions, /新版标签显示文件缺失/],
    ['legacy -v1 placed in tag-catalog-snapshot.json', v1Current, v2Versions, /新版标签显示文件缺失/],
    ['legacy -v1 placed in tag-catalog-versions.json', deVersionedCurrent, { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: baseBody.registrySha256, snapshots: [v1Current] }, /新版标签显示文件缺失/],
    ['invalid snapshot contract inside versions.snapshots', deVersionedCurrent, { ...versHeader, currentSha256: baseBody.registrySha256, snapshots: [{ contract: 'unknown-v9', ...baseBody }] }, /标签版本目录中的快照格式/],
    ['extra content field in de-versioned snapshot rejected', { ...deVersionedCurrent, extraField: 'drift' }, deVersionedVersionsWithV1Saved, /当前显示词表与对应原快照的完整内容不一致/]
  ]) {
    writePair(snap, vers);
    assert.throws(build, pattern, label);
  }
});

test('render_katex_formula.html heals legacy LaTeX/LaTeXML patterns at display time with valid v1.4.6 MathML while keeping genuine fallbacks intact', (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'katex-healing-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  fs.mkdirSync(path.join(tmp, 'layouts/partials'), { recursive: true });
  fs.mkdirSync(path.join(tmp, 'data'), { recursive: true });
  fs.copyFileSync(
    path.join(BLOG_ROOT, 'layouts/partials/render_katex_formula.html'),
    path.join(tmp, 'layouts/partials/render_katex_formula.html')
  );
  fs.writeFileSync(path.join(tmp, 'hugo.yaml'), 'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');

  const healCases = [
    { name: 'color-rgb', type: 'block', tex: '{\\color[rgb]{0.5,0.5,0.5}\\mathrm{I}}({\\color[rgb]{0,1,1}\\mathbf{P}})' },
    { name: 'vskip', type: 'block', tex: 'k^{*}=\\arg\\min_{k\\in\\{1,\\ldots,5\\}}\\left\\|\\mathbf{p}-\\hat{\\mathbf{c}}_{t,k}\\right\\|_{2}.\\vskip-5.0pt' },
    { name: 'double-escaped-hat-mathbb', type: 'inline', tex: '\\\\hat\\{D\\} + \\\\mathbb\\{R\\} \\+ 1' },
    { name: 'wavessm-symmetric-caret', type: 'inline', tex: 'A = \\dot{F}F^(FF^)^{-1}' },
    { name: 'double-escaped-norm', type: 'inline', tex: '\\\\frac{\\\\phi(x_1) \\\\bar{W}^\\\\top}{\\\\tau \\\\cdot \\\\|\\\\phi(x_1)\\\\|_2}' },
    { name: 'u29f5-inside-aligned', type: 'block', tex: '\\begin{aligned} ⧵alpha &= 1 \\\\ ⧵beta &= 2 \\end{aligned}' },
    { name: 'text-math-mode-underscore', type: 'inline', tex: '\\text{for $x_i$}.\\vskip-5.0pt' },
    { name: 'textsc', type: 'inline', tex: '\\mathcal{I}_{\\textsc{Shift}}(v;\\Delta)=x' },
    { name: 'symAMSb', type: 'inline', tex: 'n\\in{\\symAMSb Z},\\quad R\\in{\\symAMSb R}_{+}' },
    { name: 'mathbbm', type: 'inline', tex: '\\eta_t = \\mathbbm{1}(t \\geq t^*)' },
    { name: 'mathds', type: 'inline', tex: 'w_t = \\mathds{1}[m_t = 1] \\in \\mathds{R}' },
    { name: 'indep', type: 'inline', tex: '\\hat{Z} \\not\\indep C_d \\mid Z' },
    { name: 'mbox', type: 'inline', tex: '\\mathrm{B\\mbox{-}AUC} = \\mbox{tr}\\{A\\}' },
    { name: 'softmax-clip', type: 'inline', tex: 'g = \\softmax_k(\\clip(x, 0, 1))' },
    { name: 'u29f5-backslash', type: 'inline', tex: 'W_u ⧵in ⧵mathbb{R}^{270⧵times270}' },
    { name: 'u200b-zwsp', type: 'inline', tex: 'p\u200Ba\u200Bt\u200Bc\u200Bh_size=128' },
    { name: 'array-empty-opt-and-at', type: 'block', tex: 'p(\\sigma)=\\left\\{\\begin{array}[]{@{}l@{\\quad}l@{}}a,&b\\\\ c,&d\\end{array}\\right.' },
    { name: 'inline-split', type: 'inline', tex: '\\displaystyle\\begin{split}a&=1\\\\ b&=2\\end{split}' },
    { name: 'text-big-parens', type: 'block', tex: 'y(t)=x(t)\\quad\\text{\\big(EMA\\big)}' },
    { name: 'text-underscore', type: 'inline', tex: 'x_{t+1} = \\text{sde_noise}' },
    { name: 'dangling-caret', type: 'inline', tex: 'T^ , Y^_{xz}, (\\mathbf{y}_k - \\mathbf{y}_k^)^2' },
    { name: 'unicode-math', type: 'inline', tex: 'L = \\|ˆy − y′\\| + ∥P∥ + µ ∆t + c_∅' },
    { name: 'escaped-math', type: 'inline', tex: '\\\\alpha&\\#40;t&\\#41; + u\\[n\\] + 2\\+1' },
    { name: 'cov-var', type: 'block', tex: '\\Var_{x}[D] = \\Cov(x_0 \\mid x_t)^{1/2}' },
    { name: 'html-entities-lt-gt', type: 'inline', tex: '\\theta &lt; 45, \\theta &gt; 135' },
    { name: 'mbox-boldmath', type: 'block', tex: '\\begin{aligned} \\displaystyle{\\mbox{\\boldmath\\(V\\)}}=\\mathsf{AudioEnc}(\\bm{X}) \\end{aligned}' }
  ];
  const fallbackCases = [
    { name: 'unknown-macro', type: 'inline', tex: '\\nonexistentcmd{z}' },
    { name: 'broken-chinese-prose', type: 'inline', tex: '，标准生成过程为：' },
    { name: 'u29f5-set-difference', type: 'inline', tex: 'A ⧵ B' },
    { name: 'u29f5-set-difference-with-vskip', type: 'inline', tex: 'A ⧵ B \\vskip-5pt' }
  ];
  fs.writeFileSync(path.join(tmp, 'data/cases.json'), JSON.stringify([...healCases, ...fallbackCases]));
  fs.writeFileSync(
    path.join(tmp, 'layouts/index.html'),
    '[{{ range $i, $c := hugo.Data.cases }}{{ if $i }},{{ end }}{{ dict "name" $c.name "html" (partial "render_katex_formula.html" (dict "type" $c.type "inner" $c.tex)) | jsonify | safeHTML }}{{ end }}]'
  );

  const res = spawnSync('hugo', ['--source', tmp, '--noBuildLock', '--panicOnWarning'], { encoding: 'utf8' });
  assert.equal(res.status, 0, `${res.stdout}\n${res.stderr}`);
  const outputs = JSON.parse(fs.readFileSync(path.join(tmp, 'public/index.html'), 'utf8'));

  for (const c of healCases) {
    const out = outputs.find(x => x.name === c.name);
    assert.ok(out, `missing output for ${c.name}`);
    assert.doesNotMatch(out.html, /math-fallback|<merror\b/i, `${c.name} should heal cleanly without math-fallback`);
    assert.match(out.html, /class="katex"/, `${c.name} should render KaTeX`);
    const mathBlocks = out.html.match(/<math\b[^>]*>[\s\S]*?<\/math>/g) || [];
    assert.ok(mathBlocks.length >= 1, `${c.name} should emit <math>`);
    for (const mb of mathBlocks) {
      for (const tag of parseTags(mb)) {
        if (tag.isClosing) continue;
        assert.ok(MATHML_V146_TAGS.has(tag.name), `${c.name}: non-v1.4.6 MathML tag <${tag.name}>`);
        for (const attr of tag.attrs) {
          assert.ok(MATHML_V146_ATTRS.has(attr.name), `${c.name}: non-v1.4.6 MathML attr ${attr.name} on <${tag.name}>`);
        }
      }
    }
  }
  for (const c of fallbackCases) {
    const out = outputs.find(x => x.name === c.name);
    assert.match(out.html, /<code class="math-fallback">/, `${c.name} must remain honest math-fallback`);
    assert.doesNotMatch(out.html, /<merror\b/i);
  }

  // Targeted regression assertions for semantic preservation during healing:
  // 1. \in\{1,\ldots,5\} with \vskip-5.0pt must preserve literal set braces { and }
  const vskipOut = outputs.find(x => x.name === 'vskip').html;
  assert.match(vskipOut, /<mo\b[^>]*>\{<\/mo>/, 'literal opening set brace { must be preserved');
  assert.match(vskipOut, /<mo\b[^>]*>\}<\/mo>/, 'literal closing set brace } must be preserved');
  assert.match(vskipOut, /\\in\\\{1,\\ldots,5\\\}/, 'annotation must retain \\in\\{1,\\ldots,5\\}');

  // 2. Double-escaped formatting/accent commands \\hat\{D\} + \\mathbb\{R\} heal cleanly
  const hatMathbbOut = outputs.find(x => x.name === 'double-escaped-hat-mathbb').html;
  assert.match(hatMathbbOut, /\\hat\{D\}\s*\+\s*\\mathbb\{R\}/);
  assert.doesNotMatch(hatMathbbOut, /<mspace\b/i);

  // 3. A = \dot{F}F^(FF^)^{-1} heals BOTH F^( and F^) symmetrically
  const wavessmOut = outputs.find(x => x.name === 'wavessm-symmetric-caret').html;
  assert.match(wavessmOut, /A = \\dot\{F\}F\^\{\*\}\(FF\^\{\*\}\)\^\{-1\}/);
  assert.equal((wavessmOut.match(/<msup><mi>F<\/mi><mo\b[^>]*>∗<\/mo><\/msup>/g) || []).length, 2);

  // 4. Double-escaped L2 norm \\| heals to \| (∥) without spurious <mspace></mspace>
  const normOut = outputs.find(x => x.name === 'double-escaped-norm').html;
  assert.match(normOut, /\\\|\\phi\(x_1\)\\\|_2/);
  assert.match(normOut, /∥/);
  assert.doesNotMatch(normOut, /<mspace\b/i);

  // 5. \text{for $x_i$} keeps $x_i$ as math subscript instead of escaping _ to literal \_
  const textMathOut = outputs.find(x => x.name === 'text-math-mode-underscore').html;
  assert.match(textMathOut, /<msub><mi>x<\/mi><mi>i<\/mi><\/msub>/);
  assert.doesNotMatch(textMathOut, /x\\_i/);

  // 6. Set-difference A ⧵ B is NOT silently corrupted into A \ B (whitespace); stays untouched fallback
  const setDiffOut = outputs.find(x => x.name === 'u29f5-set-difference').html;
  assert.match(setDiffOut, /<code class="math-fallback">A ⧵ B<\/code>/);
  const setDiffVskipOut = outputs.find(x => x.name === 'u29f5-set-difference-with-vskip').html;
  assert.match(setDiffVskipOut, /<code class="math-fallback">A ⧵ B \\vskip-5pt<\/code>/);
});

test('verifyMathFallbacks enforces zero fallbacks on posts >= 2026-11-26, skips posts index/pagination pages, and enforces ceiling on legacy posts', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-math-fallback-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const writePost = (slug, html) => {
    const dir = path.join(root, 'posts', slug);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, 'index.html');
    fs.writeFileSync(file, html, 'utf8');
    return file;
  };
  const writeRaw = (relPath, html) => {
    const file = path.join(root, relPath);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html, 'utf8');
    return file;
  };

  assert.equal(MATH_FALLBACK_ZERO_SINCE, '2026-11-26');
  assert.ok(Number.isSafeInteger(MAX_LEGACY_MATH_FALLBACKS) && MAX_LEGACY_MATH_FALLBACKS >= 0 && MAX_LEGACY_MATH_FALLBACKS < 300);

  const legacyOk = writePost('2026-05-20-legacy', '<meta property="article:published_time" content="2026-05-20T00:00:00+08:00"><code class=math-fallback>bad</code>');
  const freshClean = writePost('2026-11-26-fresh', '<meta property="article:published_time" content="2026-11-26T00:00:00+08:00"><span class=katex>ok</span>');
  const postsIndex = writeRaw('posts/index.html', '<time datetime="2026-11-27">2026-11-27</time><code class="math-fallback">card-excerpt</code>');
  const postsPage2 = writeRaw('posts/page/2/index.html', '<time datetime="2026-11-27">2026-11-27</time><code class="math-fallback">card-excerpt-2</code>');
  const passStats = verifyMathFallbacks([legacyOk, freshClean, postsIndex, postsPage2], root, { maxTotal: 2, zeroSince: '2026-11-26' });
  assert.equal(passStats.totalFallbacks, 1);
  assert.equal(passStats.affectedPages, 1);
  assert.equal(passStats.newPostFallbacks, 0);

  // Exceeding legacy baseline ceiling fails
  assert.throws(
    () => verifyMathFallbacks([legacyOk, freshClean], root, { maxTotal: 0, zeroSince: '2026-11-26' }),
    /超过基线上限/
  );

  // Any fallback on post >= 2026-11-26 fails (even conference slug without date prefix!)
  const newConfBroken = writePost('conference-icml-2026-broken', '<meta property="article:published_time" content="2026-11-27T08:00:00+08:00"><code class="math-fallback">\\broken</code>');
  assert.throws(
    () => verifyMathFallbacks([legacyOk, freshClean, newConfBroken], root, { maxTotal: 50, zeroSince: '2026-11-26' }),
    /2026-11-26.*math-fallback/
  );
});

test('Pagefind 404 elimination: extend_footer defaults ready=0, build-pagefind flips to 1 only when built, command-palette skips fetch when 0, verifyPagefindReadiness enforces parity', async (t) => {
  const tmpPub = fs.mkdtempSync(path.join(os.tmpdir(), 'pagefind-ready-flag-'));
  t.after(() => fs.rmSync(tmpPub, { recursive: true, force: true }));

  const sampleHtml = '<html><body><script defer src="/audio-research-portal/js/command-palette.min.abc123.js" data-cmdk-pagefind-url="/audio-research-portal/pagefind/pagefind.js" data-cmdk-pagefind-ready=0></script></body></html>';
  fs.writeFileSync(path.join(tmpPub, 'index.html'), sampleHtml, 'utf8');
  fs.mkdirSync(path.join(tmpPub, 'posts/demo'), { recursive: true });
  fs.writeFileSync(path.join(tmpPub, 'posts/demo/index.html'), sampleHtml, 'utf8');

  // 1. Skipped build keeps ready=0 and passes verifyPagefindReadiness
  const skipped = buildPagefind(tmpPub, { bin: 'nonexistent-pagefind-binary-xyz-999' });
  assert.equal(skipped.status, 'skipped');
  assert.equal(skipped.pagefindReady, false);
  assert.deepEqual(verifyPagefindReadiness(fs.readFileSync(path.join(tmpPub, 'index.html'), 'utf8'), tmpPub), {
    pagefindBuilt: false,
    readyFlag: '0'
  });

  // 2. command-palette with data-cmdk-pagefind-ready="0" NEVER attempts Pagefind import/fetch
  const domOff = createMinimalCmdkDom({
    'data-cmdk-base-path': '/audio-research-portal/',
    'data-cmdk-pagefind-url': '/audio-research-portal/pagefind/pagefind.js',
    'data-cmdk-pagefind-ready': '0'
  });
  let pagefindAttempts = 0;
  domOff.win.ResearchSearchIndex = {
    load: async () => [{ title: 'Paper', titleZh: '零404论文', permalink: '/audio-research-portal/posts/p/', summary: 'ok', date: '2026-11-27', pageType: 'paper' }]
  };
  const palOff = commandPalette.init({
    document: domOff.doc,
    window: domOff.win,
    debounceMs: 0,
    pagefindReady: false,
    loadPagefind: async () => { pagefindAttempts += 1; return null; }
  });
  palOff.open();
  await new Promise(r => setImmediate(r));
  assert.equal(pagefindAttempts, 0, 'Pagefind loader must NOT be called when pagefindReady=false');
  assert.equal(palOff.state.mode, 'client-index');

  // Also test reading directly from scriptEl data-cmdk-pagefind-ready="0" WITH a real loadPagefind spy (no opts.pagefindReady)
  const domAttrOff = createMinimalCmdkDom({
    'data-cmdk-base-path': '/audio-research-portal/',
    'data-cmdk-pagefind-url': 'https://nanless.github.io/audio-research-portal/pagefind/pagefind.js',
    'data-cmdk-pagefind-ready': '0'
  });
  let attrOffCalls = 0;
  domAttrOff.win.ResearchSearchIndex = {
    load: async () => [{ title: 'Attr', titleZh: '属性关闭论文', permalink: '/audio-research-portal/posts/a/', summary: 'ok', date: '2026-11-27', pageType: 'paper' }]
  };
  const palAttrOff = commandPalette.init({
    document: domAttrOff.doc,
    window: domAttrOff.win,
    debounceMs: 0,
    loadPagefind: async () => { attrOffCalls += 1; return { search: async () => ({ results: [] }) }; }
  });
  palAttrOff.open();
  await new Promise(r => setImmediate(r));
  assert.equal(attrOffCalls, 0, 'data-cmdk-pagefind-ready="0" must skip loadPagefind even when loader is provided');
  assert.equal(palAttrOff.state.mode, 'client-index');

  // And data-cmdk-pagefind-ready="1" with a real loadPagefind spy invokes it once and enters pagefind mode
  const domAttrOn = createMinimalCmdkDom({
    'data-cmdk-base-path': '/audio-research-portal/',
    'data-cmdk-pagefind-url': 'https://nanless.github.io/audio-research-portal/pagefind/pagefind.js',
    'data-cmdk-pagefind-ready': '1'
  });
  let attrOnCalls = 0;
  const palAttrOn = commandPalette.init({
    document: domAttrOn.doc,
    window: domAttrOn.win,
    debounceMs: 0,
    loadPagefind: async () => { attrOnCalls += 1; return { search: async () => ({ results: [] }) }; }
  });
  palAttrOn.open();
  await new Promise(r => setImmediate(r));
  assert.equal(attrOnCalls, 1, 'data-cmdk-pagefind-ready="1" must invoke loadPagefind once');
  assert.equal(palAttrOn.state.mode, 'pagefind');

  // Backward compatibility: absent data-cmdk-pagefind-ready with loadPagefind still enables Pagefind
  const domAttrAbsent = createMinimalCmdkDom({
    'data-cmdk-base-path': '/audio-research-portal/',
    'data-cmdk-pagefind-url': 'https://nanless.github.io/audio-research-portal/pagefind/pagefind.js'
  });
  let attrAbsentCalls = 0;
  const palAttrAbsent = commandPalette.init({
    document: domAttrAbsent.doc,
    window: domAttrAbsent.win,
    debounceMs: 0,
    loadPagefind: async () => { attrAbsentCalls += 1; return { search: async () => ({ results: [] }) }; }
  });
  palAttrAbsent.open();
  await new Promise(r => setImmediate(r));
  assert.equal(attrAbsentCalls, 1, 'absent data-cmdk-pagefind-ready must keep loadPagefind backward compatibility');
  assert.equal(palAttrAbsent.state.mode, 'pagefind');

  // 3. Built Pagefind creates pagefind/pagefind.js and flips data-cmdk-pagefind-ready to "1"
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
  assert.equal(built.pagefindReady, true);
  assert.equal(built.updatedHtmlFiles, 2);
  const homeAfter = fs.readFileSync(path.join(tmpPub, 'index.html'), 'utf8');
  assert.match(homeAfter, /data-cmdk-pagefind-ready="1"/);
  assert.deepEqual(verifyPagefindReadiness(homeAfter, tmpPub), {
    pagefindBuilt: true,
    readyFlag: '1'
  });

  // 4. Mismatch between pagefind/pagefind.js existence and ready flag fails verifyPagefindReadiness
  assert.throws(
    () => verifyPagefindReadiness(sampleHtml, tmpPub),
    /data-cmdk-pagefind-ready/
  );
});
