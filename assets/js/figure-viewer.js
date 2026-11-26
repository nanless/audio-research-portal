(function (root, factory) {
  'use strict';
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchFigureViewer = api;
  if (typeof document !== 'undefined' && (typeof module === 'undefined' || !module.exports)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { api.init(); }, { once: true });
    } else {
      api.init();
    }
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';

  var MIN_SCALE = 1;
  var MAX_SCALE = 6;
  var DBLCLICK_SCALE = 2.5;

  function clampScale(value) {
    var num = Number(value);
    if (!Number.isFinite(num)) return MIN_SCALE;
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(num * 100) / 100));
  }

  function isDarkDocument(doc) {
    if (!doc) return false;
    var el = doc.documentElement;
    var body = doc.body;
    if (el && el.getAttribute && el.getAttribute('data-theme') === 'dark') return true;
    if (el && el.classList && el.classList.contains('dark')) return true;
    if (body && body.classList && body.classList.contains('dark')) return true;
    return false;
  }

  function effectiveFigureTheme(img, doc) {
    var explicit = img && img.dataset ? img.dataset.figureTheme : (img && img.getAttribute ? img.getAttribute('data-figure-theme') : '');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return isDarkDocument(doc) ? 'dark' : 'light';
  }

  function setFigureTheme(img, theme) {
    if (!img) return;
    if (img.dataset) img.dataset.figureTheme = theme;
    if (img.setAttribute) img.setAttribute('data-figure-theme', theme);
  }

  function findCaptionText(img) {
    if (!img) return '';
    var parent = img.parentElement;
    if (parent && parent.tagName && parent.tagName.toLowerCase() === 'a') {
      parent = parent.parentElement;
    }
    if (parent && parent.tagName && parent.tagName.toLowerCase() === 'figure') {
      var cap = parent.querySelector && parent.querySelector('figcaption');
      if (cap && cap.textContent && cap.textContent.trim()) return cap.textContent.trim();
    }
    if (parent && parent.nextElementSibling) {
      var next = parent.nextElementSibling;
      if (next.tagName && next.tagName.toLowerCase() === 'p') {
        var em = next.querySelector && next.querySelector('em');
        if (em && em.textContent && em.textContent.trim() && next.textContent.trim() === em.textContent.trim()) {
          return em.textContent.trim();
        }
      }
    }
    return (img.getAttribute && img.getAttribute('alt')) || img.alt || '';
  }

  function themeButtonLabel(theme) {
    return theme === 'dark' ? '原色' : '反色';
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
    if (!doc || typeof doc.querySelectorAll !== 'function') return null;

    var container = opts.container || doc.querySelector('.research-article');
    if (!container || typeof container.querySelectorAll !== 'function') return null;

    var imgs = Array.prototype.slice.call(container.querySelectorAll('img')).filter(function (img) {
      if (!img) return false;
      if (img.dataset && img.dataset.rwFigureBound === '1') return false;
      return Boolean(img.getAttribute ? img.getAttribute('src') : img.src);
    });
    if (!imgs.length) return null;

    var items = [];
    var MODAL_ID = 'figure-lightbox';
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
    var state = {
      open: false,
      index: 0,
      scale: 1,
      tx: 0,
      ty: 0,
      previousFocus: null,
      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      dragOriginX: 0,
      dragOriginY: 0,
      pointers: new Map(),
      pinchStartDist: 0,
      pinchStartScale: 1
    };

    var dialog = null;
    var stageImg = null;
    var stageBox = null;
    var captionNode = null;
    var counterNode = null;
    var zoomNode = null;
    var lbThemeBtn = null;
    var lbPrevBtn = null;
    var lbNextBtn = null;
    var lbCloseBtn = null;
    var lbControls = [];

    function syncInlineThemeButton(entry) {
      var currentTheme = effectiveFigureTheme(entry.img, doc);
      entry.themeBtn.textContent = themeButtonLabel(currentTheme);
      entry.themeBtn.setAttribute('aria-pressed', String(currentTheme === 'light'));
      entry.themeBtn.setAttribute('aria-label', currentTheme === 'dark' ? '切换为图片原色显示' : '切换为深色反色显示');
    }

    function applyTransform() {
      if (state.scale <= 1) {
        state.tx = 0;
        state.ty = 0;
      }
      if (stageImg && stageImg.style) {
        stageImg.style.transform = 'translate3d(' + Math.round(state.tx) + 'px, ' + Math.round(state.ty) + 'px, 0) scale(' + state.scale + ')';
      }
      if (zoomNode) zoomNode.textContent = Math.round(state.scale * 100) + '%';
    }

    function syncLightboxItem() {
      var entry = items[state.index];
      if (!entry || !stageImg) return;
      var src = (entry.img.getAttribute && entry.img.getAttribute('src')) || entry.img.src || '';
      var alt = (entry.img.getAttribute && entry.img.getAttribute('alt')) || entry.img.alt || '';
      if (stageImg.setAttribute) {
        stageImg.setAttribute('src', src);
        stageImg.setAttribute('alt', alt);
      } else {
        stageImg.src = src;
        stageImg.alt = alt;
      }
      var currentTheme = effectiveFigureTheme(entry.img, doc);
      setFigureTheme(stageImg, currentTheme);
      if (lbThemeBtn) {
        lbThemeBtn.textContent = themeButtonLabel(currentTheme);
        lbThemeBtn.setAttribute('aria-pressed', String(currentTheme === 'light'));
      }
      if (captionNode) {
        captionNode.textContent = entry.caption || alt || '论文配图';
      }
      if (counterNode) {
        counterNode.textContent = (state.index + 1) + ' / ' + items.length;
      }
      if (lbPrevBtn) lbPrevBtn.disabled = items.length <= 1;
      if (lbNextBtn) lbNextBtn.disabled = items.length <= 1;
      state.scale = 1;
      state.tx = 0;
      state.ty = 0;
      applyTransform();
    }

    function setZoom(nextScale) {
      state.scale = clampScale(nextScale);
      applyTransform();
    }

    function toggleCurrentTheme(entry) {
      var target = entry || items[state.index];
      if (!target) return;
      var currentTheme = effectiveFigureTheme(target.img, doc);
      var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setFigureTheme(target.img, nextTheme);
      syncInlineThemeButton(target);
      if (state.open && items[state.index] === target && stageImg) {
        setFigureTheme(stageImg, nextTheme);
        if (lbThemeBtn) {
          lbThemeBtn.textContent = themeButtonLabel(nextTheme);
          lbThemeBtn.setAttribute('aria-pressed', String(nextTheme === 'light'));
        }
      }
    }

    function stepImage(delta) {
      if (items.length <= 1) return;
      state.index = (state.index + delta + items.length) % items.length;
      syncLightboxItem();
    }

    function closeLightbox() {
      if (!state.open || !dialog) return;
      state.open = false;
      dialog.hidden = true;
      state.pointers.clear();
      state.dragging = false;
      popModal();
      if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
        state.previousFocus.focus();
      }
      state.previousFocus = null;
    }

    function ensureLightbox() {
      if (dialog) return dialog;
      dialog = doc.createElement('div');
      dialog.className = 'rw-lightbox';
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-label', '论文配图查看器');
      dialog.hidden = true;

      var bar = doc.createElement('div');
      bar.className = 'rw-lightbox__bar';

      var meta = doc.createElement('div');
      meta.className = 'rw-lightbox__meta';
      counterNode = doc.createElement('span');
      counterNode.className = 'rw-lightbox__counter';
      zoomNode = doc.createElement('span');
      zoomNode.className = 'rw-lightbox__zoom';
      meta.appendChild(counterNode);
      meta.appendChild(zoomNode);

      var actions = doc.createElement('div');
      actions.className = 'rw-lightbox__actions';
      var outBtn = createButton(doc, 'rw-lightbox__btn', '−', '缩小图片');
      var resetBtn = createButton(doc, 'rw-lightbox__btn', '1:1', '重置为原始比例');
      var inBtn = createButton(doc, 'rw-lightbox__btn', '+', '放大图片');
      lbThemeBtn = createButton(doc, 'rw-lightbox__btn', '原色', '切换原色或反色');
      lbPrevBtn = createButton(doc, 'rw-lightbox__btn', '←', '上一张图片');
      lbNextBtn = createButton(doc, 'rw-lightbox__btn', '→', '下一张图片');
      lbCloseBtn = createButton(doc, 'rw-lightbox__btn rw-lightbox__btn--close', '关闭', '关闭图片查看器');

      outBtn.addEventListener('click', function () { setZoom(state.scale / 1.25); });
      resetBtn.addEventListener('click', function () { setZoom(1); });
      inBtn.addEventListener('click', function () { setZoom(state.scale * 1.25); });
      lbThemeBtn.addEventListener('click', function () { toggleCurrentTheme(); });
      lbPrevBtn.addEventListener('click', function () { stepImage(-1); });
      lbNextBtn.addEventListener('click', function () { stepImage(1); });
      lbCloseBtn.addEventListener('click', closeLightbox);

      lbControls = [outBtn, resetBtn, inBtn, lbThemeBtn, lbPrevBtn, lbNextBtn, lbCloseBtn];
      lbControls.forEach(function (btn) { actions.appendChild(btn); });

      bar.appendChild(meta);
      bar.appendChild(actions);

      stageBox = doc.createElement('div');
      stageBox.className = 'rw-lightbox__stage';
      stageImg = doc.createElement('img');
      stageImg.className = 'rw-lightbox__img';
      stageImg.setAttribute('alt', '');
      stageImg.setAttribute('draggable', 'false');
      stageBox.appendChild(stageImg);

      captionNode = doc.createElement('p');
      captionNode.className = 'rw-lightbox__caption';

      dialog.appendChild(bar);
      dialog.appendChild(stageBox);
      dialog.appendChild(captionNode);

      stageBox.addEventListener('click', function (event) {
        if (event.target === stageBox) closeLightbox();
      });

      stageBox.addEventListener('dblclick', function (event) {
        if (event && typeof event.preventDefault === 'function') event.preventDefault();
        setZoom(state.scale > 1.1 ? 1 : DBLCLICK_SCALE);
      });

      stageBox.addEventListener('wheel', function (event) {
        if (!state.open) return;
        if (event && typeof event.preventDefault === 'function') event.preventDefault();
        var factor = (event && event.deltaY < 0) ? 1.18 : (1 / 1.18);
        setZoom(state.scale * factor);
      }, { passive: false });

      stageBox.addEventListener('pointerdown', function (event) {
        if (!state.open || !event) return;
        var pid = event.pointerId !== undefined ? event.pointerId : 0;
        if (typeof stageBox.setPointerCapture === 'function' && event.pointerId !== undefined) {
          try { stageBox.setPointerCapture(event.pointerId); } catch (_) {}
        }
        state.pointers.set(pid, { x: event.clientX || 0, y: event.clientY || 0 });
        if (state.pointers.size === 2) {
          var pts = Array.from(state.pointers.values());
          state.pinchStartDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y) || 1;
          state.pinchStartScale = state.scale;
          state.dragging = false;
        } else if (state.pointers.size === 1 && state.scale > 1) {
          state.dragging = true;
          state.dragStartX = event.clientX || 0;
          state.dragStartY = event.clientY || 0;
          state.dragOriginX = state.tx;
          state.dragOriginY = state.ty;
        }
      });

      stageBox.addEventListener('pointermove', function (event) {
        if (!state.open || !event) return;
        var pid = event.pointerId !== undefined ? event.pointerId : 0;
        if (state.pointers.has(pid)) {
          state.pointers.set(pid, { x: event.clientX || 0, y: event.clientY || 0 });
        }
        if (state.pointers.size === 2) {
          var pts = Array.from(state.pointers.values());
          var dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
          if (state.pinchStartDist > 0 && dist > 0) {
            setZoom(state.pinchStartScale * (dist / state.pinchStartDist));
          }
          return;
        }
        if (state.dragging && state.scale > 1) {
          state.tx = state.dragOriginX + ((event.clientX || 0) - state.dragStartX);
          state.ty = state.dragOriginY + ((event.clientY || 0) - state.dragStartY);
          applyTransform();
        }
      });

      function endPointer(event) {
        var pid = event && event.pointerId !== undefined ? event.pointerId : 0;
        if (typeof stageBox.releasePointerCapture === 'function' && event && event.pointerId !== undefined) {
          try {
            if (typeof stageBox.hasPointerCapture !== 'function' || stageBox.hasPointerCapture(event.pointerId)) {
              stageBox.releasePointerCapture(event.pointerId);
            }
          } catch (_) {}
        }
        state.pointers.delete(pid);
        if (state.pointers.size < 2) state.pinchStartDist = 0;
        if (state.pointers.size === 0) state.dragging = false;
      }
      stageBox.addEventListener('pointerup', endPointer);
      stageBox.addEventListener('pointercancel', endPointer);
      stageBox.addEventListener('pointerleave', function (event) {
        if (typeof stageBox.hasPointerCapture === 'function' && event && event.pointerId !== undefined) {
          try { if (stageBox.hasPointerCapture(event.pointerId)) return; } catch (_) {}
        }
        endPointer(event);
      });
      if (win && typeof win.addEventListener === 'function') {
        win.addEventListener('pointerup', endPointer);
        win.addEventListener('pointercancel', endPointer);
      }

      dialog.addEventListener('keydown', handleLightboxKeydown);

      if (doc.body && typeof doc.body.appendChild === 'function') {
        doc.body.appendChild(dialog);
      }
      return dialog;
    }

    function handleLightboxKeydown(event) {
      if (!state.open || !event || event._rwLightboxHandled) return;
      if (event.key === 'Escape') {
        if (!isTopModal()) return;
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        closeLightbox();
      } else if (event.key === '+' || event.key === '=') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        setZoom(state.scale * 1.25);
      } else if (event.key === '-' || event.key === '_') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        setZoom(state.scale / 1.25);
      } else if (event.key === '0' || event.key === '1') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        setZoom(1);
      } else if (event.key === 'i' || event.key === 'I') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        toggleCurrentTheme();
      } else if (event.key === 'ArrowLeft') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        stepImage(-1);
      } else if (event.key === 'ArrowRight') {
        event._rwLightboxHandled = true;
        if (typeof event.preventDefault === 'function') event.preventDefault();
        stepImage(1);
      } else if (event.key === 'Tab') {
        var focusable = lbControls.filter(function (el) { return !el.disabled && !el.hidden; });
        if (!focusable.length) return;
        event._rwLightboxHandled = true;
        var active = doc.activeElement;
        var idx = focusable.indexOf(active);
        if (typeof event.preventDefault === 'function') event.preventDefault();
        if (event.shiftKey) {
          var prev = idx <= 0 ? focusable[focusable.length - 1] : focusable[idx - 1];
          prev.focus();
        } else {
          var next = idx < 0 || idx >= focusable.length - 1 ? focusable[0] : focusable[idx + 1];
          next.focus();
        }
      }
    }

    function openLightbox(index, triggerEl) {
      ensureLightbox();
      state.previousFocus = triggerEl || doc.activeElement || null;
      state.index = Math.max(0, Math.min(index, items.length - 1));
      state.open = true;
      dialog.hidden = false;
      pushModal();
      syncLightboxItem();
      if (lbCloseBtn && typeof lbCloseBtn.focus === 'function') lbCloseBtn.focus();
    }

    imgs.forEach(function (img, index) {
      if (img.dataset) img.dataset.rwFigureBound = '1';
      if (img.style) img.style.cursor = 'zoom-in';
      var bar = doc.createElement('span');
      bar.className = 'rw-figure-bar';
      var themeBtn = createButton(doc, 'rw-figure-btn rw-figure-btn--theme', themeButtonLabel(effectiveFigureTheme(img, doc)), '切换图片原色或反色');
      var zoomBtn = createButton(doc, 'rw-figure-btn rw-figure-btn--zoom', '放大查看', '放大查看此论文配图');
      bar.appendChild(themeBtn);
      bar.appendChild(zoomBtn);

      var entry = { img: img, bar: bar, themeBtn: themeBtn, zoomBtn: zoomBtn, caption: findCaptionText(img) };
      items.push(entry);
      syncInlineThemeButton(entry);

      themeBtn.addEventListener('click', function (event) {
        if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
        toggleCurrentTheme(entry);
      });
      zoomBtn.addEventListener('click', function (event) {
        if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
        openLightbox(index, zoomBtn);
      });
      img.addEventListener('click', function (event) {
        if (event && typeof event.preventDefault === 'function') event.preventDefault();
        openLightbox(index, zoomBtn);
      });

      var anchor = img;
      var host = img.parentElement;
      if (host && host.tagName && host.tagName.toLowerCase() === 'a' && host.parentElement) {
        anchor = host;
        anchor.addEventListener('keydown', function (event) {
          if (event && (event.key === 'Enter' || event.key === ' ')) {
            if (typeof event.preventDefault === 'function') event.preventDefault();
            openLightbox(index, anchor);
          }
        });
        host = host.parentElement;
      }
      if (host && typeof host.appendChild === 'function') {
        if (host.classList && typeof host.classList.add === 'function') {
          host.classList.add('rw-figure-host');
        }
        if (typeof host.insertBefore === 'function' && anchor.nextElementSibling) {
          host.insertBefore(bar, anchor.nextElementSibling);
        } else {
          host.appendChild(bar);
        }
      }
    });

    function syncAllThemeButtons() {
      items.forEach(syncInlineThemeButton);
      if (state.open && stageImg && items[state.index]) {
        var currentTheme = effectiveFigureTheme(items[state.index].img, doc);
        setFigureTheme(stageImg, currentTheme);
        if (lbThemeBtn) {
          lbThemeBtn.textContent = themeButtonLabel(currentTheme);
          lbThemeBtn.setAttribute('aria-pressed', String(currentTheme === 'light'));
        }
      }
    }

    var themeToggle = typeof doc.getElementById === 'function' ? doc.getElementById('theme-toggle') : null;
    if (themeToggle && typeof themeToggle.addEventListener === 'function') {
      themeToggle.addEventListener('click', function () {
        syncAllThemeButtons();
        if (win && typeof win.setTimeout === 'function') {
          win.setTimeout(syncAllThemeButtons, 0);
        }
      });
    }
    var MutationObserverCtor = (win && win.MutationObserver) || (typeof MutationObserver !== 'undefined' ? MutationObserver : null);
    if (typeof MutationObserverCtor === 'function') {
      try {
        var observer = new MutationObserverCtor(syncAllThemeButtons);
        if (doc.documentElement) observer.observe(doc.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
        if (doc.body) observer.observe(doc.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
      } catch (_) {}
    }

    if (win && typeof win.addEventListener === 'function') {
      win.addEventListener('keydown', handleLightboxKeydown);
    }

    return {
      items: items,
      state: state,
      openLightbox: openLightbox,
      closeLightbox: closeLightbox,
      setZoom: setZoom,
      toggleCurrentTheme: toggleCurrentTheme,
      stepImage: stepImage,
      getDialog: function () { return dialog; }
    };
  }

  return {
    MIN_SCALE: MIN_SCALE,
    MAX_SCALE: MAX_SCALE,
    DBLCLICK_SCALE: DBLCLICK_SCALE,
    clampScale: clampScale,
    effectiveFigureTheme: effectiveFigureTheme,
    init: init
  };
}));
