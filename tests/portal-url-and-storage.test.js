'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const {
  cleanHttpsUrls,
  extractResourceSignals,
  extractResourceSignalsFromBuffer
} = require('../scripts/lib/research-corpus');

const REPO_ROOT = path.resolve(__dirname, '..');

function extractInlineScripts(html) {
  return [...html.matchAll(/<script>\s*([\s\S]*?)<\/script>/g)].map((m) => m[1]);
}

function assertAllLocalStorageGuarded(source, label) {
  const scripts = extractInlineScripts(source);
  assert.ok(scripts.length > 0, `${label}: expected inline <script> blocks`);
  let totalMatches = 0;
  for (const script of scripts) {
    for (const m of script.matchAll(/\blocalStorage\./g)) {
      totalMatches += 1;
      const before = script.slice(Math.max(0, m.index - 120), m.index);
      const after = script.slice(m.index, Math.min(script.length, m.index + 160));
      assert.match(
        before,
        /\btry\s*\{/,
        `${label}: localStorage access must be inside try { ... } catch block`
      );
      assert.match(
        after,
        /\}\s*catch\s*\(/,
        `${label}: localStorage try block must be closed by catch (...)`
      );
    }
  }
  assert.ok(totalMatches > 0, `${label}: expected at least one localStorage access`);
}

function makeBlockedStorageContext(baseContext) {
  const ctx = vm.createContext({ ...baseContext });
  Object.defineProperty(ctx, 'localStorage', {
    configurable: true,
    enumerable: true,
    get() {
      throw new Error('SecurityError: storage access is blocked');
    }
  });
  return ctx;
}

test('cleanHttpsUrls extracts valid HTTPS URLs adjacent to CJK prose and fullwidth punctuation', () => {
  assert.deepEqual(
    cleanHttpsUrls('代码：https://github.com/IIP-Group/polymap，论文第 1 页脚注 1 明确标注为开源仓库'),
    ['https://github.com/IIP-Group/polymap']
  );
  assert.deepEqual(
    cleanHttpsUrls('代码：https://github.com/mahesh-ak/forced-aligner-metrics为音素-聚类互信息包，https://github.com/mahesh-ak/MFA为复现实验仓库'),
    [
      'https://github.com/mahesh-ak/forced-aligner-metrics',
      'https://github.com/mahesh-ak/MFA'
    ]
  );
  assert.deepEqual(
    cleanHttpsUrls('Demo：https://youtu.be/6SRUF4_frlk，论文第 4 节标注为演示视频'),
    ['https://youtu.be/6SRUF4_frlk']
  );
  assert.deepEqual(
    cleanHttpsUrls('数据集：获取链接为https://huggingface.co/datasets/intronhealth/AfriSwitch，开源协议为 CC BY 4.0'),
    ['https://huggingface.co/datasets/intronhealth/AfriSwitch']
  );
  assert.deepEqual(
    cleanHttpsUrls('项目主页：<https://liukqchoco.github.io/StreamAVBench/>，地址也可写作 https://musp.vaclis.net。'),
    [
      'https://liukqchoco.github.io/StreamAVBench/',
      'https://musp.vaclis.net/'
    ]
  );
  assert.deepEqual(
    cleanHttpsUrls('重复链接：https://github.com/SonyResearch/RLAT，再次引用 (https://github.com/SonyResearch/RLAT).'),
    ['https://github.com/SonyResearch/RLAT']
  );
});

test('cleanHttpsUrls rejects non-https, invalid, RFC2396-unsafe, and non-ASCII corrupted URLs', () => {
  for (const input of [
    '',
    '代码：http://github.com/IIP-Group/polymap，论文第 1 页',
    '代码：ftp://example.com/archive.tar.gz',
    '代码：https://bad_host.example.com/repo，说明',
    '代码：https://user:pass@example.com/repo，说明',
    '代码：https://example.com/path[0]，说明',
    '代码：https://example.com/path{a}，说明',
    '代码：https://example.com/path|b，说明',
    '代码：https://example.com/path^c，说明',
    '代码：<https://example.com/中文路径>',
    '模型相关资源：<https://github.com/coquI−ai/TTS/>',
    '代码：https://github.com/yh-jun/SNR-Aligned˙diffSE/blob/main/net.py',
    '代码：https://www.pik-potsdam.de/∼donges/pyunicorn/',
    '代码：https://，无地址'
  ]) {
    assert.deepEqual(cleanHttpsUrls(input), [], `must reject invalid URL input: ${input}`);
  }
});

test('extractResourceSignals recovers code, demo, model, and dataset signals from CJK-adjacent URLs', () => {
  const body = [
    '# 📄 测试论文',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码：https://github.com/IIP-Group/polymap，论文第 1 页脚注 1 明确标注为开源仓库',
    '- Demo：https://youtu.be/6SRUF4_frlk，论文第 4 节脚注 2 标注为已录制演示视频',
    '- 模型权重：https://hf.co/mahesh27/mms-300m-ipa-fleurs对应MMS-300M模型',
    '- 数据集：获取链接为 https://huggingface.co/datasets/intronhealth/AfriSwitch，开源协议为 CC BY 4.0',
    '- 项目主页：https://liukqchoco.github.io/StreamAVBench/，包含交互浏览',
    '- 第三方资源：https://github.com/third-party/ignored，不应计入本论文代码'
  ].join('\n');

  const sig = extractResourceSignals(body);
  assert.equal(sig.hasCode, true);
  assert.equal(sig.hasDemo, true);
  assert.equal(sig.hasModel, true);
  assert.equal(sig.hasDataset, true);
  assert.equal(sig.hasProjectPage, true);
  assert.deepEqual(sig.codeUrls, ['https://github.com/IIP-Group/polymap']);
  assert.deepEqual(sig.demoUrls, ['https://youtu.be/6SRUF4_frlk']);
  assert.deepEqual(sig.projectUrls, ['https://liukqchoco.github.io/StreamAVBench/']);

  const bufSig = extractResourceSignalsFromBuffer(Buffer.from(body, 'utf8'));
  assert.deepEqual(bufSig, sig);

  const negativeBody = [
    '# 📄 无效与不可用链接测试',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码：http://github.com/insecure/only，非 HTTPS 链接',
    '- 代码：https://github.com/broken/dead，链接不可用（HTTP 404）',
    '- 模型相关资源：<https://github.com/coquI−ai/TTS/> — 符号损坏链接'
  ].join('\n');
  const negSig = extractResourceSignals(negativeBody);
  assert.equal(negSig.hasCode, false);
  assert.equal(negSig.hasModel, false);
  assert.deepEqual(negSig.codeUrls, []);
});

test('head.html guards all localStorage reads and preserves auto dark-mode fallback when storage is blocked', () => {
  const headHtml = fs.readFileSync(path.join(REPO_ROOT, 'layouts/partials/head.html'), 'utf8');
  assertAllLocalStorageGuarded(headHtml, 'layouts/partials/head.html');

  const scripts = extractInlineScripts(headHtml);
  // First 3 inline scripts correspond to defaultTheme=light, defaultTheme=dark, and auto
  assert.ok(scripts.length >= 3, 'head.html must contain light, dark, and auto theme scripts');
  const [lightScript, darkScript, autoScript] = scripts;

  const runHeadScript = (script, { blocked = false, throwGetItem = false, stored = null, prefersDark = false } = {}) => {
    const htmlEl = { dataset: {} };
    const document = { querySelector: (sel) => (sel === 'html' ? htmlEl : null) };
    const window = { matchMedia: () => ({ matches: prefersDark }) };
    if (blocked) {
      vm.runInContext(script, makeBlockedStorageContext({ document, window }));
    } else {
      const localStorage = {
        getItem() {
          if (throwGetItem) throw new Error('SecurityError: getItem blocked');
          return stored;
        }
      };
      vm.runInNewContext(script, { document, window, localStorage });
    }
    return htmlEl.dataset.theme;
  };

  // Blocked storage getter or throwing getItem must never throw or abort prefers-color-scheme fallback
  assert.equal(runHeadScript(lightScript, { blocked: true }), undefined);
  assert.equal(runHeadScript(darkScript, { blocked: true }), undefined);
  assert.equal(runHeadScript(autoScript, { blocked: true, prefersDark: true }), 'dark');
  assert.equal(runHeadScript(autoScript, { blocked: true, prefersDark: false }), 'light');
  assert.equal(runHeadScript(autoScript, { throwGetItem: true, prefersDark: true }), 'dark');
  assert.equal(runHeadScript(autoScript, { throwGetItem: true, prefersDark: false }), 'light');

  // Working localStorage still honors explicit user preference over system media query
  assert.equal(runHeadScript(lightScript, { stored: 'dark' }), 'dark');
  assert.equal(runHeadScript(darkScript, { stored: 'light' }), 'light');
  assert.equal(runHeadScript(autoScript, { stored: 'dark', prefersDark: false }), 'dark');
  assert.equal(runHeadScript(autoScript, { stored: 'light', prefersDark: true }), 'light');
});

test('footer.html guards all localStorage accesses so blocked storage never breaks menu scroll or details smooth-scroll', () => {
  const footerHtml = fs.readFileSync(path.join(REPO_ROOT, 'layouts/partials/footer.html'), 'utf8');
  assertAllLocalStorageGuarded(footerHtml, 'layouts/partials/footer.html');

  const scripts = extractInlineScripts(footerHtml);
  const menuAndDetailsScript = scripts[0];
  const themeToggleScript = scripts.find((s) => s.includes('theme-toggle'));
  assert.ok(menuAndDetailsScript, 'missing primary footer script');
  assert.ok(themeToggleScript, 'missing footer theme-toggle script');

  const runFooterPrimary = ({ blocked = false, throwMethods = false, initialScroll = null } = {}) => {
    const menu = { scrollLeft: 0, onscroll: null };
    const details = { tagName: 'DETAILS', open: false, parentElement: null };
    const target = {
      id: 'sec-1',
      parentElement: details,
      attrs: new Map(),
      hasAttribute(k) { return this.attrs.has(k); },
      setAttribute(k, v) { this.attrs.set(k, v); },
      scrollIntoView(opts) { this.scrolled = opts; },
      focus(opts) { this.focused = opts; }
    };
    let clickHandler = null;
    const anchor = {
      getAttribute(k) { return k === 'href' ? '#sec-1' : null; },
      hasAttribute() { return false; },
      addEventListener(name, fn) { if (name === 'click') clickHandler = fn; }
    };
    const history = {
      state: { ok: 1 },
      calls: [],
      pushState(st, _, url) { this.calls.push({ method: 'push', st, url }); },
      replaceState(st, _, url) { this.calls.push({ method: 'replace', st, url }); }
    };
    const document = {
      getElementById(id) {
        if (id === 'menu') return menu;
        if (id === 'sec-1') return target;
        return null;
      },
      querySelectorAll(sel) {
        assert.equal(sel, 'a[href^="#"]');
        return [anchor];
      }
    };
    const window = {
      location: { pathname: '/posts/demo/', search: '' },
      matchMedia: () => ({ matches: false })
    };
    const store = new Map();
    if (initialScroll !== null) store.set('menu-scroll-position', String(initialScroll));

    if (blocked) {
      vm.runInContext(menuAndDetailsScript, makeBlockedStorageContext({ document, window, history }));
    } else {
      const localStorage = {
        getItem(k) {
          if (throwMethods) throw new Error('SecurityError: getItem blocked');
          return store.has(k) ? store.get(k) : null;
        },
        setItem(k, v) {
          if (throwMethods) throw new Error('QuotaExceededError: setItem blocked');
          store.set(k, String(v));
        }
      };
      vm.runInNewContext(menuAndDetailsScript, { document, window, history, localStorage });
    }
    return { menu, details, target, anchor, clickHandler, history, store };
  };

  for (const mode of [{ blocked: true }, { throwMethods: true }]) {
    const f = runFooterPrimary(mode);
    assert.equal(typeof f.clickHandler, 'function', 'click handler must still register under blocked storage');
    assert.equal(typeof f.menu.onscroll, 'function');
    f.menu.scrollLeft = 42;
    assert.doesNotThrow(() => f.menu.onscroll());
    const ev = { button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; } };
    f.clickHandler.call(f.anchor, ev);
    assert.equal(ev.defaultPrevented, true);
    assert.equal(f.details.open, true);
    assert.equal(f.target.scrolled.behavior, 'smooth');
    assert.equal(f.history.calls.length, 1);
  }

  const working = runFooterPrimary({ initialScroll: 88 });
  assert.equal(working.menu.scrollLeft, 88);
  working.menu.scrollLeft = 120;
  working.menu.onscroll();
  assert.equal(working.store.get('menu-scroll-position'), '120');

  // Verify theme-toggle script also handles blocked localStorage gracefully
  let toggleHandler = null;
  const attrs = new Map();
  const toggle = {
    addEventListener(name, fn) { if (name === 'click') toggleHandler = fn; },
    setAttribute(k, v) { attrs.set(k, v); }
  };
  const docEl = { dataset: { theme: 'light' } };
  const doc = {
    documentElement: docEl,
    getElementById: (id) => (id === 'theme-toggle' ? toggle : null),
    querySelector: () => null
  };
  vm.runInContext(themeToggleScript, makeBlockedStorageContext({ document: doc }));
  assert.equal(typeof toggleHandler, 'function');
  assert.doesNotThrow(() => toggleHandler());
  assert.equal(docEl.dataset.theme, 'dark');
  assert.equal(attrs.get('aria-pressed'), 'true');
});
