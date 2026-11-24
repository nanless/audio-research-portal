(function (root, factory) {
  'use strict';
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchCommandPalette = api;
  if (typeof document !== 'undefined' && (typeof module === 'undefined' || !module.exports)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { api.init(); }, { once: true });
    } else {
      api.init();
    }
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';

  var MAX_RESULTS = 12;

  var FACET_CHIPS = [
    { id: 'all', label: '全部' },
    { id: 'paper', label: '论文解读' },
    { id: 'high-score', label: '高分 ≥8.0' },
    { id: 'code', label: '含开源' },
    { id: 'demo', label: '含试听' },
    { id: 'daily', label: '每日速递' },
    { id: 'conference', label: '会议专题' }
  ];

  var QUICK_COMMANDS = [
    { id: 'papers', label: '进入论文库（按方向/评分/开源筛选）', path: 'papers/', badge: '导航' },
    { id: 'search', label: '打开高级搜索页', path: 'search/', badge: '导航' },
    { id: 'conferences', label: '浏览会议论文集目录', path: 'conferences/', badge: '导航' },
    { id: 'tags', label: '查看九维研究方向树', path: 'tags/', badge: '导航' },
    { id: 'archives', label: '按日期查看速递归档', path: 'archives/', badge: '导航' },
    { id: 'theme', label: '切换明暗主题', action: 'theme', badge: '快捷操作' }
  ];

  function safeSiteUrl(value, origin, siteBasePath) {
    try {
      if (typeof value !== 'string' || !value.trim() || !siteBasePath || !siteBasePath.endsWith('/')) return null;
      var parsed = new URL(value, origin);
      if (!/^https?:$/.test(parsed.protocol)) return null;
      if (parsed.origin !== origin) return null;
      if (!parsed.pathname.startsWith(siteBasePath)) return null;
      if (parsed.username || parsed.password) return null;
      return parsed.href;
    } catch (_error) {
      return null;
    }
  }

  function decodeBasicEntities(text) {
    return String(text || '').replace(/&(amp|lt|gt|quot|apos|#39|#(\d+)|#x([0-9a-f]+));/gi, function (full, name, dec, hex) {
      if (dec) {
        var c = Number.parseInt(dec, 10);
        return Number.isInteger(c) && c > 0 && c <= 0x10ffff ? String.fromCodePoint(c) : full;
      }
      if (hex) {
        var h = Number.parseInt(hex, 16);
        return Number.isInteger(h) && h > 0 && h <= 0x10ffff ? String.fromCodePoint(h) : full;
      }
      switch (String(name).toLowerCase()) {
        case 'amp': return '&';
        case 'lt': return '<';
        case 'gt': return '>';
        case 'quot': return '"';
        case 'apos':
        case '#39': return "'";
        default: return full;
      }
    });
  }

  // Safe DOM tokenizer for Pagefind excerpts: ONLY <mark>...</mark> produces <mark> nodes;
  // all other HTML tags are stripped and all text is inserted via textContent / createTextNode.
  function tokenizeMarkedExcerpt(rawExcerpt) {
    var input = String(rawExcerpt || '');
    var tokens = [];
    var pattern = /<(\/?)mark\b[^>]*>/gi;
    var cursor = 0;
    var inMark = false;
    var match;
    while ((match = pattern.exec(input)) !== null) {
      if (match.index > cursor) {
        var chunk = decodeBasicEntities(input.slice(cursor, match.index).replace(/<[^>]+>/g, ''));
        if (chunk) tokens.push({ marked: inMark, text: chunk });
      }
      inMark = match[1] !== '/';
      cursor = pattern.lastIndex;
    }
    if (cursor < input.length) {
      var tail = decodeBasicEntities(input.slice(cursor).replace(/<[^>]+>/g, ''));
      if (tail) tokens.push({ marked: inMark, text: tail });
    }
    return tokens;
  }

  function renderMarkedExcerpt(doc, container, rawExcerpt) {
    var tokens = tokenizeMarkedExcerpt(rawExcerpt);
    tokens.forEach(function (part) {
      if (part.marked) {
        var mark = doc.createElement('mark');
        mark.textContent = part.text;
        container.appendChild(mark);
      } else {
        container.appendChild(doc.createTextNode(part.text));
      }
    });
  }

  function tokenizePlainHighlights(text, queryTokens) {
    var source = String(text || '');
    if (!source) return [];
    var cleanTokens = Array.from(new Set((queryTokens || []).map(function (t) {
      return String(t || '').trim();
    }).filter(function (t) { return t.length > 0; })));
    if (!cleanTokens.length) return [{ marked: false, text: source }];
    cleanTokens.sort(function (a, b) { return b.length - a.length; });
    var escaped = cleanTokens.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
    var re = new RegExp('(' + escaped.join('|') + ')', 'gi');
    var out = [];
    var last = 0;
    var m;
    while ((m = re.exec(source)) !== null) {
      if (m.index > last) out.push({ marked: false, text: source.slice(last, m.index) });
      out.push({ marked: true, text: m[0] });
      last = re.lastIndex;
      if (m[0].length === 0) re.lastIndex += 1;
    }
    if (last < source.length) out.push({ marked: false, text: source.slice(last) });
    return out;
  }

  function appendHighlightedText(doc, container, text, queryTokens) {
    var parts = tokenizePlainHighlights(text, queryTokens);
    parts.forEach(function (part) {
      if (part.marked) {
        var mark = doc.createElement('mark');
        mark.textContent = part.text;
        container.appendChild(mark);
      } else {
        container.appendChild(doc.createTextNode(part.text));
      }
    });
  }

  function splitQueryTokens(query) {
    var normalized = String(query || '').normalize('NFKC').trim();
    if (!normalized) return [];
    return normalized.split(/\s+/).filter(Boolean);
  }

  function normalizeClientEntry(item, origin, basePath) {
    if (!item || typeof item !== 'object') return null;
    var href = safeSiteUrl(item.permalink, origin, basePath);
    if (!href) return null;
    var title = String(item.titleZh || item.title || item.originalTitle || '未命名论文').trim();
    var originalTitle = String(item.originalTitle || item.title || '').trim();
    var summary = String(item.summary || '').trim();
    var pageType = ['paper', 'daily', 'conference', 'page'].includes(item.pageType) ? item.pageType : 'paper';
    var scoreNum = item.score !== undefined && item.score !== null && /^(?:\d+(?:\.\d+)?)$/.test(String(item.score))
      ? Number(item.score) : -1;
    if (!Number.isFinite(scoreNum) || scoreNum < 0 || scoreNum > 10 || pageType !== 'paper') scoreNum = -1;
    var tags = Array.isArray(item.tags) ? item.tags.map(String) : [];
    var haystack = [title, originalTitle, item.title || '', summary, item.arxivId || '', item.paperId || '',
      item.task || '', item.method || ''].concat(tags).join(' ').normalize('NFKC').toLocaleLowerCase();
    return {
      title: title,
      originalTitle: originalTitle,
      href: href,
      summary: summary,
      date: String(item.date || ''),
      pageType: pageType,
      score: scoreNum,
      task: String(item.task || ''),
      arxivId: String(item.arxivId || ''),
      hasCode: item.hasCode === true,
      hasDemo: item.hasDemo === true,
      haystack: haystack
    };
  }

  function matchesFacet(entry, facetId) {
    if (!facetId || facetId === 'all') return true;
    if (facetId === 'paper') return entry.pageType === 'paper';
    if (facetId === 'daily') return entry.pageType === 'daily';
    if (facetId === 'conference') return entry.pageType === 'conference';
    if (facetId === 'high-score') return entry.pageType === 'paper' && entry.score >= 8.0;
    if (facetId === 'code') return entry.pageType === 'paper' && entry.hasCode;
    if (facetId === 'demo') return entry.pageType === 'paper' && entry.hasDemo;
    return true;
  }

  function rankClientEntries(entries, query, facetId) {
    var tokens = splitQueryTokens(query).map(function (t) { return t.toLocaleLowerCase(); });
    var lowerQuery = String(query || '').normalize('NFKC').trim().toLocaleLowerCase();
    var matched = [];
    for (var i = 0; i < entries.length; i += 1) {
      var entry = entries[i];
      if (!matchesFacet(entry, facetId)) continue;
      if (tokens.length && !tokens.every(function (tok) { return entry.haystack.includes(tok); })) continue;
      var score = 0;
      if (lowerQuery) {
        if (entry.arxivId && entry.arxivId.toLocaleLowerCase() === lowerQuery) score += 120;
        var lowerTitle = (entry.title + ' ' + entry.originalTitle).normalize('NFKC').toLocaleLowerCase();
        if (lowerTitle.includes(lowerQuery)) score += 40;
        tokens.forEach(function (tok) {
          if (lowerTitle.includes(tok)) score += 12;
          else if (entry.task && entry.task.toLocaleLowerCase().includes(tok)) score += 6;
          else score += 2;
        });
      }
      if (entry.score >= 8.0) score += 2;
      matched.push({ entry: entry, rankScore: score });
    }
    matched.sort(function (a, b) {
      return (b.rankScore - a.rankScore)
        || (b.entry.date.localeCompare(a.entry.date))
        || (b.entry.score - a.entry.score)
        || a.entry.title.localeCompare(b.entry.title, 'zh-CN');
    });
    return matched.slice(0, MAX_RESULTS).map(function (item) { return item.entry; });
  }

  function pagefindFiltersForFacet(facetId) {
    if (facetId === 'paper') return { '类型': '论文解读' };
    if (facetId === 'daily') return { '类型': '每日速递' };
    if (facetId === 'conference') return { '类型': '会议专题' };
    if (facetId === 'high-score') return { '评分': { any: ['8.5+', '8.0+'] } };
    if (facetId === 'code') return { '开源': '含开源代码' };
    if (facetId === 'demo') return { '开源': '含在线试听' };
    return undefined;
  }

  function isEditableTarget(target) {
    if (!target) return false;
    var tag = target.tagName ? String(target.tagName).toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (target.isContentEditable) return true;
    return false;
  }

  function loadSameOriginScript(doc, url, origin, basePath) {
    var safe = safeSiteUrl(url, origin, basePath);
    if (!safe || !doc.head || typeof doc.head.appendChild !== 'function') {
      return Promise.reject(new Error('Script URL outside site origin'));
    }
    return new Promise(function (resolve, reject) {
      var s = doc.createElement('script');
      s.src = safe;
      s.defer = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Failed to load ' + safe)); };
      doc.head.appendChild(s);
    });
  }

  function init(options) {
    var opts = options || {};
    var doc = opts.document || (typeof document !== 'undefined' ? document : null);
    var win = opts.window || (typeof window !== 'undefined' ? window : root);
    if (!doc || !win || !win.location) return null;

    var scriptEl = opts.scriptEl || doc.currentScript || doc.querySelector('script[data-cmdk-base-path]');
    var origin = win.location.origin;
    var basePath = (opts.basePath || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-base-path')) || '/');
    if (!basePath.startsWith('/')) basePath = '/' + basePath;
    if (!basePath.endsWith('/')) basePath += '/';

    var indexUrl = opts.indexUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-index-url')) || (basePath + 'client/index.json');
    var legacyIndexUrl = opts.legacyIndexUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-legacy-index-url')) || (basePath + 'index.json');
    var pagefindUrl = opts.pagefindUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-pagefind-url')) || (basePath + 'pagefind/pagefind.js');
    var protocolsUrl = opts.protocolsUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-protocols-url')) || '';
    var cacheUrl = opts.cacheUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-cache-url')) || '';
    var loaderUrl = opts.loaderUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-loader-url')) || '';
    var workerUrl = opts.workerUrl || (scriptEl && scriptEl.getAttribute && scriptEl.getAttribute('data-cmdk-worker-url')) || '';
    var fetcher = opts.fetch
      || (typeof win.fetch === 'function' ? win.fetch.bind(win) : (typeof fetch === 'function' ? fetch.bind(root) : null));

    var state = {
      open: false,
      facet: 'all',
      mode: 'idle', // 'idle' | 'loading' | 'pagefind' | 'client-index' | 'error'
      pagefind: null,
      clientEntries: null,
      initPromise: null,
      activeIndex: -1,
      selectableItems: [],
      previousFocus: null,
      searchSeq: 0
    };

    var dialog = null;
    var input = null;
    var closeBtn = null;
    var statusNode = null;
    var listNode = null;
    var modeBadge = null;
    var facetButtons = [];
    var debounceTimer = null;

    function resolvePagefind() {
      if (typeof opts.loadPagefind === 'function') {
        return Promise.resolve().then(function () { return opts.loadPagefind(pagefindUrl); });
      }
      var safe = safeSiteUrl(pagefindUrl, origin, basePath);
      if (!safe) return Promise.resolve(null);
      try {
        return import(safe).then(function (mod) {
          if (mod && typeof mod.search === 'function') {
            if (typeof mod.init === 'function') return Promise.resolve(mod.init()).then(function () { return mod; });
            return mod;
          }
          return null;
        }).catch(function () { return null; });
      } catch (_error) {
        return Promise.resolve(null);
      }
    }

    function ensureSearchBackend() {
      if (state.mode === 'pagefind' || state.mode === 'client-index') {
        return Promise.resolve(state.mode);
      }
      if (state.initPromise) return state.initPromise;
      state.mode = 'loading';
      updateModeUi('正在初始化全站索引…');

      state.initPromise = resolvePagefind().then(function (pf) {
        if (pf && typeof pf.search === 'function') {
          state.pagefind = pf;
          state.mode = 'pagefind';
          updateModeUi('全文检索引擎（Pagefind）已就绪');
          return 'pagefind';
        }
        return loadClientIndexFallback();
      }).catch(function () {
        return loadClientIndexFallback();
      });
      return state.initPromise;
    }

    function loadClientIndexFallback() {
      var readyLoader = Promise.resolve();
      if (!win.ResearchSearchIndex && protocolsUrl && loaderUrl) {
        readyLoader = loadSameOriginScript(doc, protocolsUrl, origin, basePath)
          .then(function () { return cacheUrl ? loadSameOriginScript(doc, cacheUrl, origin, basePath).catch(function () {}) : null; })
          .then(function () { return loadSameOriginScript(doc, loaderUrl, origin, basePath); })
          .catch(function () { /* Fall back to direct array index if loader scripts unavailable */ });
      }
      return readyLoader.then(function () {
        var resolvedIndex = new URL(indexUrl, origin).href;
        var resolvedLegacy = new URL(legacyIndexUrl, origin).href;
        if (win.ResearchSearchIndex && typeof win.ResearchSearchIndex.load === 'function') {
          return win.ResearchSearchIndex.load(resolvedIndex, {
            origin: origin,
            basePath: basePath,
            legacyIndexURL: resolvedIndex !== resolvedLegacy ? resolvedLegacy : undefined,
            workerURL: workerUrl || undefined,
            fetch: fetcher || undefined
          });
        }
        if (typeof fetcher !== 'function') throw new Error('索引加载不可用');
        var safeLegacy = safeSiteUrl(resolvedLegacy, origin, basePath);
        if (!safeLegacy) throw new Error('索引地址越界');
        return fetcher(safeLegacy, { credentials: 'same-origin' }).then(function (res) {
          if (!res || !res.ok) throw new Error('HTTP ' + (res ? res.status : 'error'));
          return res.json();
        });
      }).then(function (records) {
        if (!Array.isArray(records)) throw new Error('索引格式无效');
        var seen = new Set();
        state.clientEntries = records
          .map(function (item) { return normalizeClientEntry(item, origin, basePath); })
          .filter(function (entry) {
            if (!entry || seen.has(entry.href)) return false;
            seen.add(entry.href);
            return true;
          });
        state.mode = 'client-index';
        updateModeUi('已载入校验索引（' + state.clientEntries.length.toLocaleString('zh-CN') + ' 条）');
        return 'client-index';
      }).catch(function () {
        state.mode = 'error';
        state.initPromise = null;
        updateModeUi('索引暂时不可用，可使用快捷跳转');
        return 'error';
      });
    }

    function updateModeUi(message) {
      if (statusNode && message) statusNode.textContent = message;
      if (modeBadge) {
        modeBadge.textContent = state.mode === 'pagefind' ? '全文检索' : state.mode === 'client-index' ? '索引检索' : '快捷命令';
      }
    }

    function setActive(index) {
      if (!state.selectableItems.length) {
        state.activeIndex = -1;
        return;
      }
      var next = Math.max(0, Math.min(index, state.selectableItems.length - 1));
      state.activeIndex = next;
      state.selectableItems.forEach(function (item, idx) {
        var isCurrent = idx === next;
        item.row.classList.toggle('is-active', isCurrent);
        item.row.setAttribute('aria-selected', String(isCurrent));
        if (isCurrent && item.row && typeof item.row.scrollIntoView === 'function') {
          item.row.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    function clearList() {
      if (listNode) listNode.replaceChildren();
      state.selectableItems = [];
      state.activeIndex = -1;
    }

    function renderQuickCommands() {
      clearList();
      var fragment = doc.createDocumentFragment();
      QUICK_COMMANDS.forEach(function (cmd) {
        var href = cmd.path ? safeSiteUrl(basePath + cmd.path, origin, basePath) : null;
        if (cmd.path && !href) return;
        var li = doc.createElement('li');
        li.className = 'cmdk-item';
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');

        var el = doc.createElement(href ? 'a' : 'button');
        el.className = 'cmdk-item__link';
        if (href) {
          el.href = href;
        } else {
          el.type = 'button';
          el.addEventListener('click', function () {
            if (cmd.action === 'theme') {
              var toggle = doc.getElementById('theme-toggle');
              if (toggle && typeof toggle.click === 'function') toggle.click();
            }
            closePalette();
          });
        }
        var titleSpan = doc.createElement('span');
        titleSpan.className = 'cmdk-item__title';
        titleSpan.textContent = cmd.label;
        var badge = doc.createElement('span');
        badge.className = 'cmdk-item__badge';
        badge.textContent = cmd.badge;
        el.appendChild(titleSpan);
        el.appendChild(badge);
        li.appendChild(el);
        fragment.appendChild(li);
        state.selectableItems.push({ row: li, actionEl: el });
      });
      listNode.appendChild(fragment);
      if (state.selectableItems.length) setActive(0);
    }

    function renderResultCards(items, queryTokens, isPagefind) {
      clearList();
      if (!items.length) {
        var emptyLi = doc.createElement('li');
        emptyLi.className = 'cmdk-empty';
        emptyLi.textContent = '没有找到匹配内容，可切换分面条件或缩短关键词。';
        listNode.appendChild(emptyLi);
        return;
      }
      var fragment = doc.createDocumentFragment();
      items.forEach(function (item) {
        var safeHref = safeSiteUrl(item.href, origin, basePath);
        if (!safeHref) return;
        var li = doc.createElement('li');
        li.className = 'cmdk-item';
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');

        var link = doc.createElement('a');
        link.className = 'cmdk-item__link';
        link.href = safeHref;

        var titleEl = doc.createElement('div');
        titleEl.className = 'cmdk-item__title';
        appendHighlightedText(doc, titleEl, item.title, queryTokens);
        link.appendChild(titleEl);

        if (item.excerpt) {
          var excerptEl = doc.createElement('p');
          excerptEl.className = 'cmdk-item__excerpt';
          if (isPagefind) {
            renderMarkedExcerpt(doc, excerptEl, item.excerpt);
          } else {
            appendHighlightedText(doc, excerptEl, item.excerpt.slice(0, 180), queryTokens);
          }
          link.appendChild(excerptEl);
        }

        if (item.meta) {
          var metaEl = doc.createElement('div');
          metaEl.className = 'cmdk-item__meta';
          metaEl.textContent = item.meta;
          link.appendChild(metaEl);
        }

        li.appendChild(link);
        fragment.appendChild(li);
        state.selectableItems.push({ row: li, actionEl: link });
      });
      listNode.appendChild(fragment);
      if (state.selectableItems.length) setActive(0);
    }

    function runSearch() {
      if (!input || !listNode) return Promise.resolve();
      var query = input.value.trim();
      var seq = ++state.searchSeq;
      if (!query && state.facet === 'all') {
        renderQuickCommands();
        updateModeUi('输入论文标题、关键词或 arXiv ID；支持 ↑↓ 选择、Enter 打开');
        return Promise.resolve();
      }
      return ensureSearchBackend().then(function (mode) {
        if (seq !== state.searchSeq) return;
        if (mode === 'pagefind' && state.pagefind) {
          var filters = pagefindFiltersForFacet(state.facet);
          var searchOpts = filters ? { filters: filters } : undefined;
          return Promise.resolve(state.pagefind.search(query || null, searchOpts)).then(function (res) {
            if (seq !== state.searchSeq) return;
            var rawResults = (res && Array.isArray(res.results)) ? res.results.slice(0, MAX_RESULTS) : [];
            return Promise.all(rawResults.map(function (entry) { return entry.data(); })).then(function (loaded) {
              if (seq !== state.searchSeq) return;
              var mapped = loaded.map(function (data) {
                var href = safeSiteUrl(data && data.url, origin, basePath);
                if (!href) return null;
                var title = (data.meta && data.meta.title) || data.url;
                var metaParts = [];
                if (data.filters && Array.isArray(data.filters['类型'])) metaParts.push(data.filters['类型'][0]);
                if (data.filters && Array.isArray(data.filters['年份'])) metaParts.push(data.filters['年份'][0]);
                if (data.filters && Array.isArray(data.filters['评分'])) metaParts.push('评分 ' + data.filters['评分'][0]);
                if (data.filters && Array.isArray(data.filters['开源'])) metaParts.push(data.filters['开源'].join(' · '));
                return { href: href, title: title, excerpt: data.excerpt || '', meta: metaParts.filter(Boolean).join(' · ') };
              }).filter(Boolean);
              renderResultCards(mapped, splitQueryTokens(query), true);
              updateModeUi('全文检索找到 ' + (res.results ? res.results.length : mapped.length) + ' 条，显示前 ' + mapped.length + ' 条');
            });
          });
        }
        if (mode === 'client-index' && Array.isArray(state.clientEntries)) {
          var ranked = rankClientEntries(state.clientEntries, query, state.facet);
          var mappedClient = ranked.map(function (entry) {
            var metaParts = [
              entry.pageType === 'daily' ? '每日速递' : entry.pageType === 'conference' ? '会议专题' : '论文解读',
              entry.date,
              entry.score >= 0 ? entry.score.toFixed(1).replace('.0', '') + '/10' : '',
              entry.hasCode ? '💻 开源' : '',
              entry.hasDemo ? '🔊 Demo' : '',
              entry.arxivId ? 'arXiv ' + entry.arxivId : ''
            ].filter(Boolean);
            return {
              href: entry.href,
              title: entry.title,
              excerpt: entry.summary || entry.originalTitle,
              meta: metaParts.join(' · ')
            };
          });
          renderResultCards(mappedClient, splitQueryTokens(query), false);
          updateModeUi('索引检索显示 ' + mappedClient.length + ' 条匹配结果');
          return;
        }
        renderQuickCommands();
      }).catch(function () {
        if (seq !== state.searchSeq) return;
        clearList();
        var errLi = doc.createElement('li');
        errLi.className = 'cmdk-empty';
        errLi.textContent = '本次检索请求失败，请稍后重试或改用全站搜索页。';
        listNode.appendChild(errLi);
        updateModeUi('检索遇到临时错误，请重试');
      });
    }

    function ensureDialog() {
      if (dialog) return dialog;
      dialog = doc.createElement('div');
      dialog.id = 'cmdk-dialog';
      dialog.className = 'cmdk-backdrop';
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-labelledby', 'cmdk-title');
      dialog.hidden = true;

      var panel = doc.createElement('div');
      panel.className = 'cmdk-panel';

      var header = doc.createElement('div');
      header.className = 'cmdk-header';
      var title = doc.createElement('h2');
      title.id = 'cmdk-title';
      title.className = 'sr-only';
      title.textContent = '全站快捷搜索与命令面板';
      input = doc.createElement('input');
      input.id = 'cmdk-input';
      input.className = 'cmdk-input';
      input.type = 'search';
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('placeholder', '搜索论文标题、方法、摘要或 arXiv ID…');
      input.setAttribute('aria-label', '搜索全站论文');
      input.setAttribute('maxlength', '200');

      modeBadge = doc.createElement('span');
      modeBadge.className = 'cmdk-mode-badge';
      modeBadge.textContent = '快捷命令';

      closeBtn = doc.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'cmdk-close';
      closeBtn.textContent = 'Esc';
      closeBtn.setAttribute('aria-label', '关闭快捷搜索');
      closeBtn.addEventListener('click', closePalette);

      header.appendChild(title);
      header.appendChild(input);
      header.appendChild(modeBadge);
      header.appendChild(closeBtn);

      var facetsBar = doc.createElement('div');
      facetsBar.className = 'cmdk-facets';
      facetsBar.setAttribute('role', 'group');
      facetsBar.setAttribute('aria-label', '按分类与特征筛选');
      facetButtons = FACET_CHIPS.map(function (chip) {
        var btn = doc.createElement('button');
        btn.type = 'button';
        btn.className = 'cmdk-facet-chip';
        btn.textContent = chip.label;
        btn.setAttribute('aria-pressed', String(chip.id === state.facet));
        btn.addEventListener('click', function () {
          state.facet = chip.id;
          facetButtons.forEach(function (b, idx) {
            b.setAttribute('aria-pressed', String(FACET_CHIPS[idx].id === state.facet));
          });
          runSearch();
          input.focus();
        });
        facetsBar.appendChild(btn);
        return btn;
      });

      statusNode = doc.createElement('p');
      statusNode.className = 'cmdk-status';
      statusNode.setAttribute('role', 'status');
      statusNode.setAttribute('aria-live', 'polite');

      listNode = doc.createElement('ul');
      listNode.className = 'cmdk-results';
      listNode.setAttribute('role', 'listbox');
      listNode.setAttribute('aria-label', '搜索与命令列表');

      var footer = doc.createElement('div');
      footer.className = 'cmdk-footer';
      footer.textContent = '↑↓ 切换 · Enter 打开 · Esc 关闭 · 支持中英文与 arXiv ID';

      panel.appendChild(header);
      panel.appendChild(facetsBar);
      panel.appendChild(statusNode);
      panel.appendChild(listNode);
      panel.appendChild(footer);
      dialog.appendChild(panel);

      dialog.addEventListener('click', function (event) {
        if (event && event.target === dialog) closePalette();
      });

      input.addEventListener('input', function () {
        if (debounceTimer && typeof win.clearTimeout === 'function') win.clearTimeout(debounceTimer);
        if (typeof win.setTimeout === 'function' && opts.debounceMs !== 0) {
          debounceTimer = win.setTimeout(runSearch, opts.debounceMs || 80);
        } else {
          runSearch();
        }
      });

      function collectDialogFocusable() {
        var nodes = [input, closeBtn].concat(facetButtons);
        state.selectableItems.forEach(function (item) {
          if (item && item.actionEl) nodes.push(item.actionEl);
        });
        return nodes.filter(function (el) {
          return el && !el.disabled && !el.hidden && typeof el.focus === 'function';
        });
      }

      dialog.addEventListener('keydown', function (event) {
        if (!state.open || !event) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          closePalette();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          setActive(state.activeIndex + 1);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          setActive(state.activeIndex - 1);
        } else if (event.key === 'Tab') {
          var focusable = collectDialogFocusable();
          if (!focusable.length) return;
          var idx = focusable.indexOf(doc.activeElement);
          event.preventDefault();
          if (event.shiftKey) {
            var prev = idx <= 0 ? focusable[focusable.length - 1] : focusable[idx - 1];
            prev.focus();
          } else {
            var next = idx < 0 || idx >= focusable.length - 1 ? focusable[0] : focusable[idx + 1];
            next.focus();
          }
        } else if (event.key === 'Enter') {
          if (event.target && event.target !== input && event.target !== dialog) return;
          var active = state.selectableItems[state.activeIndex];
          if (active && active.actionEl) {
            event.preventDefault();
            if (typeof active.actionEl.click === 'function') active.actionEl.click();
            else if (active.actionEl.href && win.location) win.location.href = active.actionEl.href;
          }
        }
      });

      if (doc.body && typeof doc.body.appendChild === 'function') {
        doc.body.appendChild(dialog);
      }
      return dialog;
    }

    function openPalette(triggerEl) {
      ensureDialog();
      if (state.open) return;
      state.previousFocus = triggerEl || doc.activeElement || null;
      state.open = true;
      dialog.hidden = false;
      if (doc.body && doc.body.style) doc.body.style.overflow = 'hidden';
      var hasActiveFilterOrQuery = Boolean((input && input.value.trim()) || state.facet !== 'all');
      if (hasActiveFilterOrQuery) {
        runSearch();
      } else {
        renderQuickCommands();
        ensureSearchBackend().then(function () {
          if (state.open && (input.value.trim() || state.facet !== 'all')) {
            runSearch();
          }
        });
      }
      if (input && typeof input.focus === 'function') input.focus();
    }

    function closePalette() {
      if (!state.open || !dialog) return;
      state.open = false;
      dialog.hidden = true;
      if (doc.body && doc.body.style) doc.body.style.overflow = '';
      if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
        state.previousFocus.focus();
      }
      state.previousFocus = null;
    }

    var trigger = doc.getElementById('cmdk-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () { openPalette(trigger); });
    }
    var searchOpenBtn = doc.getElementById('search-open-cmdk');
    if (searchOpenBtn) {
      searchOpenBtn.addEventListener('click', function () { openPalette(searchOpenBtn); });
    }

    win.addEventListener('keydown', function (event) {
      if (!event) return;
      var key = String(event.key || '');
      if (key === 'Escape' && state.open) {
        event.preventDefault();
        closePalette();
      } else if ((event.metaKey || event.ctrlKey) && key.toLowerCase() === 'k') {
        event.preventDefault();
        if (state.open) closePalette();
        else openPalette(trigger || doc.activeElement);
      } else if (key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey && !state.open && !isEditableTarget(event.target)) {
        event.preventDefault();
        openPalette(trigger || doc.activeElement);
      }
    });

    return {
      state: state,
      open: openPalette,
      close: closePalette,
      runSearch: runSearch,
      getDialog: function () { return dialog; },
      getInput: function () { return input; },
      getList: function () { return listNode; },
      getFacetButtons: function () { return facetButtons; }
    };
  }

  return {
    FACET_CHIPS: FACET_CHIPS,
    QUICK_COMMANDS: QUICK_COMMANDS,
    safeSiteUrl: safeSiteUrl,
    pagefindFiltersForFacet: pagefindFiltersForFacet,
    tokenizeMarkedExcerpt: tokenizeMarkedExcerpt,
    renderMarkedExcerpt: renderMarkedExcerpt,
    tokenizePlainHighlights: tokenizePlainHighlights,
    appendHighlightedText: appendHighlightedText,
    normalizeClientEntry: normalizeClientEntry,
    rankClientEntries: rankClientEntries,
    init: init
  };
}));
