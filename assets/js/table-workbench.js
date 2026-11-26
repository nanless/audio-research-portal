(function (root, factory) {
  'use strict';
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchTableWorkbench = api;
  if (typeof document !== 'undefined' && (typeof module === 'undefined' || !module.exports)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { api.init(); }, { once: true });
    } else {
      api.init();
    }
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';

  var MISSING_PATTERN = /^(?:|-|--|—|–|n\/a|na|null|none|\/|\*|tbd|\?)$/i;
  var UNIT_MULTIPLIERS = {
    k: 1e3, K: 1e3, M: 1e6, B: 1e9, T: 1e12,
    ms: 1e-3, s: 1, m: 1,
    Hz: 1, kHz: 1e3, MHz: 1e6, GHz: 1e9,
    KB: 1e3, MB: 1e6, GB: 1e9, TB: 1e12,
    bps: 1, kbps: 1e3, Mbps: 1e6
  };

  function unitMultiplier(suffix) {
    return suffix && Object.prototype.hasOwnProperty.call(UNIT_MULTIPLIERS, suffix)
      ? UNIT_MULTIPLIERS[suffix]
      : 1;
  }

  function parseNumericCell(rawText) {
    var trimmed = String(rawText || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
    if (MISSING_PATTERN.test(trimmed)) {
      return { kind: 'missing', value: null, bias: 0 };
    }
    var normalized = trimmed
      .replace(/[−–]/g, '-')
      .replace(/,/g, '')
      .replace(/\s*[±]\s*[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\s*%?/g, '')
      .replace(/\s*\([^)]*\)\s*$/g, '')
      .replace(/[\s*†‡↓↑]+$/g, '')
      .trim();

    var bias = 0;
    var cmpMatch = normalized.match(/^(<=|>=|[<>≤≥~≈])\s*/);
    if (cmpMatch) {
      if (cmpMatch[1] === '<') bias = -1e-12;
      else if (cmpMatch[1] === '<=' || cmpMatch[1] === '≤') bias = -5e-13;
      else if (cmpMatch[1] === '>') bias = 1e-12;
      else if (cmpMatch[1] === '>=' || cmpMatch[1] === '≥') bias = 5e-13;
      normalized = normalized.slice(cmpMatch[0].length).trim();
    }

    // Match scientific notation like 3.1×10^-4 or 3.1 x 10^-4 with case-sensitive SI/audio units
    var sciCross = normalized.match(/^([+-]?\d+(?:\.\d+)?)\s*[×x]\s*10\^?([+-]?\d+)\s*(%|dB|ms|s|m|Hz|kHz|MHz|GHz|KB|MB|GB|TB|bps|kbps|Mbps)?$/);
    if (sciCross) {
      var valCross = Number(sciCross[1]) * Math.pow(10, Number(sciCross[2])) * unitMultiplier(sciCross[3] || '');
      if (Number.isFinite(valCross)) return { kind: 'number', value: valCross, bias: bias };
    }

    // Case-sensitive match for number + SI/audio units (lowercase 'm' stays meters=1, uppercase 'M'=1e6, ms=1e-3, kHz=1e3, etc.)
    var match = normalized.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)\s*(%|dB|ms|s|m|Hz|kHz|MHz|GHz|KB|MB|GB|TB|bps|kbps|Mbps|x|×|[kKMBT])?$/);
    if (match) {
      var baseNum = Number(match[1]);
      if (Number.isFinite(baseNum)) {
        var suffix = match[2] || '';
        return { kind: 'number', value: baseNum * unitMultiplier(suffix), bias: bias };
      }
    }

    return { kind: 'text', value: trimmed, bias: 0 };
  }

  function compareCells(aRaw, bRaw, direction) {
    var a = parseNumericCell(aRaw);
    var b = parseNumericCell(bRaw);
    // Missing values ALWAYS stay pinned at the bottom regardless of asc/desc.
    if (a.kind === 'missing' && b.kind === 'missing') return 0;
    if (a.kind === 'missing') return 1;
    if (b.kind === 'missing') return -1;

    var dir = direction === 'desc' ? -1 : 1;
    if (a.kind === 'number' && b.kind === 'number') {
      if (a.value !== b.value) return (a.value - b.value) * dir;
      if (a.bias !== b.bias) return (a.bias - b.bias) * dir;
      return 0;
    }
    if (a.kind === 'number' && b.kind !== 'number') return -1;
    if (a.kind !== 'number' && b.kind === 'number') return 1;
    return String(a.value).localeCompare(String(b.value), 'zh-CN', { numeric: true }) * dir;
  }

  function cellSpan(cell, attrName) {
    var val = cell && cell.getAttribute ? cell.getAttribute(attrName) : (cell && cell[attrName]);
    var num = Number(val);
    return Number.isInteger(num) && num > 1 ? num : 1;
  }

  function canFreezeFirstColumn(table) {
    if (!table || typeof table.querySelectorAll !== 'function') return false;
    var rows = Array.prototype.slice.call(table.querySelectorAll('tr'));
    if (!rows.length) return false;
    var maxCols = 0;
    for (var i = 0; i < rows.length; i += 1) {
      var cells = Array.prototype.slice.call(rows[i].querySelectorAll('th, td'));
      if (cells.length > maxCols) maxCols = cells.length;
      for (var j = 0; j < cells.length; j += 1) {
        if (cellSpan(cells[j], 'colspan') > 1 || cellSpan(cells[j], 'rowspan') > 1) {
          return false;
        }
      }
    }
    return maxCols >= 3;
  }

  function canSortTable(table) {
    if (!table || typeof table.querySelector !== 'function') return false;
    var thead = table.querySelector('thead');
    var tbody = table.querySelector('tbody');
    if (!thead || !tbody) return false;
    var headRows = Array.prototype.slice.call(thead.querySelectorAll('tr'));
    var bodyRows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    if (headRows.length !== 1 || bodyRows.length < 2) return false;
    var headers = Array.prototype.slice.call(headRows[0].querySelectorAll('th, td'));
    if (headers.length < 2) return false;
    for (var h = 0; h < headers.length; h += 1) {
      if (cellSpan(headers[h], 'colspan') > 1 || cellSpan(headers[h], 'rowspan') > 1) return false;
    }
    for (var r = 0; r < bodyRows.length; r += 1) {
      var cells = Array.prototype.slice.call(bodyRows[r].querySelectorAll('th, td'));
      if (cells.length !== headers.length) return false;
      for (var c = 0; c < cells.length; c += 1) {
        if (cellSpan(cells[c], 'colspan') > 1 || cellSpan(cells[c], 'rowspan') > 1) return false;
      }
    }
    return true;
  }

  function createButton(doc, className, label, ariaLabel) {
    var btn = doc.createElement('button');
    btn.type = 'button';
    btn.className = className;
    btn.textContent = label;
    if (ariaLabel) btn.setAttribute('aria-label', ariaLabel);
    return btn;
  }

  function init(options) {
    var opts = options || {};
    var doc = opts.document || (typeof document !== 'undefined' ? document : null);
    var win = opts.window || (typeof window !== 'undefined' ? window : root);
    if (!doc || typeof doc.querySelectorAll !== 'function') return [];

    var container = opts.container || doc.querySelector('.research-article');
    if (!container || typeof container.querySelectorAll !== 'function') return [];

    var tables = Array.prototype.slice.call(container.querySelectorAll('table')).filter(function (table) {
      return table && (!table.dataset || table.dataset.rwTableBound !== '1');
    });
    if (!tables.length) return [];

    var modal = null;
    var modalBody = null;
    var modalCloseBtn = null;
    var activeModalState = null;
    var MODAL_ID = 'table-fullscreen';

    function getModalStack() {
      if (!win) return [];
      win.__rwModalStack = win.__rwModalStack || [];
      return win.__rwModalStack;
    }
    function pushModal() {
      var stack = getModalStack();
      var pos = stack.indexOf(MODAL_ID);
      if (pos >= 0) stack.splice(pos, 1);
      stack.push(MODAL_ID);
      if (doc.body && doc.body.style) doc.body.style.overflow = 'hidden';
    }
    function popModal() {
      var stack = getModalStack();
      var pos = stack.indexOf(MODAL_ID);
      if (pos >= 0) stack.splice(pos, 1);
      if (!stack.length && doc.body && doc.body.style) doc.body.style.overflow = '';
    }
    function isTopModal() {
      var stack = getModalStack();
      return stack.length === 0 || stack[stack.length - 1] === MODAL_ID;
    }

    function closeFullscreen() {
      if (!activeModalState || !modal) return;
      var st = activeModalState;
      activeModalState = null;
      if (st.placeholder && st.placeholder.parentNode) {
        st.placeholder.parentNode.insertBefore(st.shell, st.placeholder);
        st.placeholder.remove();
      }
      st.shell.classList.remove('rw-table-shell--fullscreen');
      modal.hidden = true;
      popModal();
      st.updateScrollState();
      if (st.triggerBtn && typeof st.triggerBtn.focus === 'function') st.triggerBtn.focus();
    }

    function ensureModal() {
      if (modal) return modal;
      modal = doc.createElement('div');
      modal.className = 'rw-table-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', '全屏查看数据表格');
      modal.hidden = true;

      var panel = doc.createElement('div');
      panel.className = 'rw-table-modal__panel';

      var header = doc.createElement('div');
      header.className = 'rw-table-modal__header';
      var title = doc.createElement('strong');
      title.textContent = '数据表格全屏视图';
      modalCloseBtn = createButton(doc, 'rw-table-btn rw-table-btn--close', '关闭全屏 (Esc)', '关闭全屏表格视图');
      modalCloseBtn.addEventListener('click', closeFullscreen);
      header.appendChild(title);
      header.appendChild(modalCloseBtn);

      modalBody = doc.createElement('div');
      modalBody.className = 'rw-table-modal__body';

      panel.appendChild(header);
      panel.appendChild(modalBody);
      modal.appendChild(panel);

      modal.addEventListener('click', function (event) {
        if (event && event.target === modal) closeFullscreen();
      });
      modal.addEventListener('keydown', function (event) {
        if (!activeModalState || !event) return;
        if (event.key === 'Escape') {
          if (!isTopModal()) return;
          event.preventDefault();
          closeFullscreen();
        } else if (event.key === 'Tab') {
          var focusable = typeof modal.querySelectorAll === 'function'
            ? Array.prototype.slice.call(modal.querySelectorAll('button, a, input, select, textarea')).filter(function (el) {
                return el && !el.disabled && !el.hidden && typeof el.focus === 'function';
              })
            : (modalCloseBtn ? [modalCloseBtn] : []);
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
        }
      });

      if (doc.body && typeof doc.body.appendChild === 'function') {
        doc.body.appendChild(modal);
      }
      return modal;
    }

    var controllers = [];
    var resizeUpdaters = [];

    tables.forEach(function (table) {
      if (table.dataset) table.dataset.rwTableBound = '1';
      var parent = table.parentNode;
      if (!parent || typeof parent.insertBefore !== 'function') return;

      var shell = doc.createElement('div');
      shell.className = 'rw-table-shell';

      var bar = doc.createElement('div');
      bar.className = 'rw-table-bar';

      var hint = doc.createElement('span');
      hint.className = 'rw-table-bar__hint';
      var sortable = canSortTable(table);
      var freezable = canFreezeFirstColumn(table);
      hint.textContent = sortable ? '点击列标题可按数值排序' : '支持横向滚动与全屏查看';

      var actions = doc.createElement('div');
      actions.className = 'rw-table-bar__actions';
      var resetBtn = createButton(doc, 'rw-table-btn rw-table-btn--reset', '恢复原序', '恢复表格原始行顺序');
      resetBtn.disabled = true;
      var fullBtn = createButton(doc, 'rw-table-btn rw-table-btn--fullscreen', '全屏查看', '全屏展开此数据表格');

      if (sortable) actions.appendChild(resetBtn);
      actions.appendChild(fullBtn);
      bar.appendChild(hint);
      bar.appendChild(actions);

      var scrollBox = doc.createElement('div');
      scrollBox.className = 'rw-table-scroll';

      parent.insertBefore(shell, table);
      scrollBox.appendChild(table);
      shell.appendChild(bar);
      shell.appendChild(scrollBox);

      function updateScrollState() {
        var sw = Number(scrollBox.scrollWidth) || 0;
        var cw = Number(scrollBox.clientWidth) || 0;
        var sl = Number(scrollBox.scrollLeft) || 0;
        var overflows = sw > cw + 2;
        var hasLeft = overflows && sl > 2;
        var hasRight = overflows && (sl + cw < sw - 2);
        if (scrollBox.dataset) {
          scrollBox.dataset.scrollLeft = String(hasLeft);
          scrollBox.dataset.scrollRight = String(hasRight);
        }
        scrollBox.setAttribute('data-scroll-left', String(hasLeft));
        scrollBox.setAttribute('data-scroll-right', String(hasRight));
        var sticky = freezable && overflows;
        if (shell.dataset) shell.dataset.stickyCol = String(sticky);
        shell.setAttribute('data-sticky-col', String(sticky));
      }

      scrollBox.addEventListener('scroll', updateScrollState, { passive: true });
      resizeUpdaters.push(updateScrollState);
      updateScrollState();

      var sortState = { col: -1, dir: 'none' };
      var originalRows = [];
      var headers = [];
      var indicators = [];

      function applySort(colIndex, nextDir) {
        if (!sortable) return;
        var tbody = table.querySelector('tbody');
        if (!tbody) return;
        sortState.col = nextDir === 'none' ? -1 : colIndex;
        sortState.dir = nextDir;

        var rowsToPlace = originalRows.slice();
        if (nextDir !== 'none') {
          rowsToPlace.sort(function (a, b) {
            var aCells = a.row.querySelectorAll('th, td');
            var bCells = b.row.querySelectorAll('th, td');
            var aText = aCells[colIndex] ? aCells[colIndex].textContent : '';
            var bText = bCells[colIndex] ? bCells[colIndex].textContent : '';
            var cmp = compareCells(aText, bText, nextDir);
            return cmp !== 0 ? cmp : (a.origIndex - b.origIndex);
          });
        }
        rowsToPlace.forEach(function (entry) {
          tbody.appendChild(entry.row);
        });

        headers.forEach(function (th, idx) {
          var active = idx === sortState.col && sortState.dir !== 'none';
          th.setAttribute('aria-sort', active ? (sortState.dir === 'asc' ? 'ascending' : 'descending') : 'none');
          if (indicators[idx]) {
            indicators[idx].textContent = active ? (sortState.dir === 'asc' ? ' ↑' : ' ↓') : ' ⇅';
          }
        });
        resetBtn.disabled = sortState.dir === 'none';
      }

      if (sortable) {
        var tbody = table.querySelector('tbody');
        var bodyRows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
        originalRows = bodyRows.map(function (row, idx) { return { row: row, origIndex: idx }; });
        headers = Array.prototype.slice.call(table.querySelector('thead tr').querySelectorAll('th, td'));
        headers.forEach(function (th, colIndex) {
          th.setAttribute('aria-sort', 'none');
          th.classList.add('rw-table-sortable');
          var hasInteractiveChild = Boolean(
            typeof th.querySelector === 'function' && th.querySelector('a, button, input, select, textarea')
          );
          var sortTrigger = doc.createElement('button');
          sortTrigger.type = 'button';
          sortTrigger.className = hasInteractiveChild ? 'rw-table-sort-btn rw-table-sort-btn--inline' : 'rw-table-sort-btn';
          var ind = doc.createElement('span');
          ind.className = 'rw-table-sort-ind';
          ind.setAttribute('aria-hidden', 'true');
          ind.textContent = ' ⇅';
          if (hasInteractiveChild) {
            var labelText = String(th.textContent || '').trim() || ('第 ' + (colIndex + 1) + ' 列');
            sortTrigger.setAttribute('aria-label', '按「' + labelText + '」排序');
            sortTrigger.appendChild(ind);
            th.appendChild(sortTrigger);
          } else {
            var labelNodes = Array.prototype.slice.call(th.childNodes || []);
            if (labelNodes.length) {
              labelNodes.forEach(function (child) { sortTrigger.appendChild(child); });
            } else {
              sortTrigger.textContent = th.textContent || '';
            }
            sortTrigger.appendChild(ind);
            th.appendChild(sortTrigger);
          }
          indicators.push(ind);

          sortTrigger.addEventListener('click', function () {
            var nextDir = 'asc';
            if (sortState.col === colIndex) {
              nextDir = sortState.dir === 'asc' ? 'desc' : (sortState.dir === 'desc' ? 'none' : 'asc');
            }
            applySort(colIndex, nextDir);
          });
        });

        resetBtn.addEventListener('click', function () {
          applySort(-1, 'none');
        });
      }

      fullBtn.addEventListener('click', function () {
        if (activeModalState && activeModalState.shell === shell) {
          closeFullscreen();
          return;
        }
        ensureModal();
        if (activeModalState) closeFullscreen();
        var placeholder = doc.createElement('div');
        placeholder.className = 'rw-table-placeholder';
        placeholder.hidden = true;
        if (shell.parentNode) shell.parentNode.insertBefore(placeholder, shell);
        modalBody.appendChild(shell);
        shell.classList.add('rw-table-shell--fullscreen');
        modal.hidden = false;
        pushModal();
        activeModalState = {
          shell: shell,
          placeholder: placeholder,
          triggerBtn: fullBtn,
          updateScrollState: updateScrollState
        };
        updateScrollState();
        if (modalCloseBtn && typeof modalCloseBtn.focus === 'function') modalCloseBtn.focus();
      });

      controllers.push({
        table: table,
        shell: shell,
        scrollBox: scrollBox,
        sortable: sortable,
        freezable: freezable,
        sortState: sortState,
        applySort: applySort,
        updateScrollState: updateScrollState,
        openFullscreen: function () { fullBtn.click ? fullBtn.click() : null; },
        closeFullscreen: closeFullscreen
      });
    });

    if (resizeUpdaters.length) {
      var resizeFrame = false;
      var runAllResize = function () {
        resizeFrame = false;
        resizeUpdaters.forEach(function (fn) { fn(); });
      };
      var scheduleResize = function () {
        if (resizeFrame) return;
        resizeFrame = true;
        if (win && typeof win.requestAnimationFrame === 'function') {
          win.requestAnimationFrame(runAllResize);
        } else {
          runAllResize();
        }
      };
      var ResizeObserverCtor = (win && win.ResizeObserver) || (typeof ResizeObserver !== 'undefined' ? ResizeObserver : null);
      if (typeof ResizeObserverCtor === 'function') {
        try {
          var ro = new ResizeObserverCtor(scheduleResize);
          controllers.forEach(function (c) { ro.observe(c.scrollBox); });
        } catch (_) {
          if (win && typeof win.addEventListener === 'function') win.addEventListener('resize', scheduleResize, { passive: true });
        }
      } else if (win && typeof win.addEventListener === 'function') {
        win.addEventListener('resize', scheduleResize, { passive: true });
      }
    }

    if (win && typeof win.addEventListener === 'function') {
      win.addEventListener('keydown', function (event) {
        if (activeModalState && event && event.key === 'Escape') {
          if (!isTopModal()) return;
          event.preventDefault();
          closeFullscreen();
        }
      });
    }

    return controllers;
  }

  return {
    parseNumericCell: parseNumericCell,
    compareCells: compareCells,
    canFreezeFirstColumn: canFreezeFirstColumn,
    canSortTable: canSortTable,
    init: init
  };
}));
