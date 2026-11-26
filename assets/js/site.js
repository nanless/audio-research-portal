(function () {
  'use strict';

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  onReady(function () {
    var termsInput = document.getElementById('term-filter');
    var termList = document.getElementById('research-term-list');
    if (termsInput && termList) {
      termsInput.addEventListener('input', function () {
        var query = termsInput.value.trim().normalize('NFKC').toLocaleLowerCase();
        var matches = 0;
        var items = termList.querySelectorAll('li');
        items.forEach(function (item) {
          item.hidden = !item.textContent.normalize('NFKC').toLocaleLowerCase().includes(query);
          if (!item.hidden) matches += 1;
        });
        var termCount = document.getElementById('term-count');
        var termEmpty = document.getElementById('term-empty');
        if (termCount) termCount.textContent = query ? '找到 ' + matches + ' / ' + items.length + ' 项' : '共 ' + items.length + ' 项';
        if (termEmpty) termEmpty.hidden = matches > 0;
      });
    }
    var articleToc = document.querySelector('.workbench-toc details');
    if (articleToc && typeof window.matchMedia === 'function' && window.matchMedia('(max-width: 860px)').matches) {
      articleToc.open = false;
      articleToc.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function () { articleToc.open = false; });
      });
    }
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', '切换深浅主题');
      var syncThemePressed = function () {
        var isDark = Boolean(document.documentElement && document.documentElement.dataset && document.documentElement.dataset.theme === 'dark');
        themeToggle.setAttribute('aria-pressed', String(isDark));
      };
      syncThemePressed();
      if (typeof themeToggle.addEventListener === 'function') {
        themeToggle.addEventListener('click', function () {
          if (typeof window.setTimeout === 'function') window.setTimeout(syncThemePressed, 0);
          else syncThemePressed();
        });
      }
    }

    var progress = document.getElementById('reading-progress');
    if (progress) {
      var ticking = false;
      var updateScrollUi = function () {
        var docEl = document.documentElement || {};
        var scrollTop = window.scrollY || docEl.scrollTop || 0;
        var article = document.getElementById('article-body');
        var start = article && typeof article.getBoundingClientRect === 'function' ? article.getBoundingClientRect().top + scrollTop : 0;
        var clientH = docEl.clientHeight || 0;
        var scrollRange = article ? (article.offsetHeight || 0) - clientH : (docEl.scrollHeight || 0) - clientH;
        var percent = scrollRange > 0 ? Math.min(100, Math.max(0, (scrollTop - start) / scrollRange * 100)) : 0;
        if (progress.style) progress.style.width = percent + '%';
        if (typeof progress.setAttribute === 'function') progress.setAttribute('aria-valuenow', String(Math.round(percent)));
        ticking = false;
      };

      if (typeof window.addEventListener === 'function') {
        window.addEventListener('scroll', function () {
          if (!ticking) {
            ticking = true;
            if (typeof window.requestAnimationFrame === 'function') window.requestAnimationFrame(updateScrollUi);
            else updateScrollUi();
          }
        }, { passive: true });
      }
      updateScrollUi();
    }

    document.querySelectorAll('a[href]').forEach(function (anchor) {
      var value = anchor.getAttribute('href');
      if (!value || !/^https?:/i.test(value)) return;
      try {
        var target = new URL(value, window.location.href);
        if (target.origin !== window.location.origin) {
          anchor.target = '_blank';
          var rel = new Set((anchor.rel || '').split(/\s+/).filter(Boolean));
          rel.add('noopener');
          rel.add('noreferrer');
          anchor.rel = Array.from(rel).join(' ');
        }
      } catch (_) {
        return;
      }
    });

    document.querySelectorAll('img:not([loading])').forEach(function (image) {
      image.loading = 'lazy';
      image.decoding = 'async';
    });

    document.querySelectorAll('.highlight').forEach(function (block) {
      var code = block.querySelector('pre code[class*="language-"]');
      var match = code && code.className.match(/(?:^|\s)language-([\w-]+)/);
      if (match) block.dataset.lang = match[1];
    });

    var toc = document.querySelector('.post-single .toc');
    // Reader pages own both desktop and mobile current-section indicators.
    if (document.getElementById('reading-chapters-trigger')) return;
    if (!toc || !('IntersectionObserver' in window)) return;
    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var linksById = new Map();
    tocLinks.forEach(function (link) {
      try {
        linksById.set(decodeURIComponent(link.hash.slice(1)), link);
      } catch (_) {
        linksById.set(link.hash.slice(1), link);
      }
    });
    var headings = Array.prototype.slice.call(document.querySelectorAll('.post-content h2[id], .post-content h3[id]'));
    var visible = new Set();
    function markCurrent() {
      var current = headings.find(function (heading) { return visible.has(heading.id); });
      if (!current) return;
      tocLinks.forEach(function (link) { link.classList.toggle('active', link === linksById.get(current.id)); });
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      markCurrent();
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    headings.forEach(function (heading) { observer.observe(heading); });
  });
}());
