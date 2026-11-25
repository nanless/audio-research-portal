(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.PaperDigestPodcastPlayer = api;
  }
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { api.initPodcastPlayers(document); }, { once: true });
    } else {
      api.initPodcastPlayers(document);
    }
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var AUDIO_URL_PATTERN = /^https:\/\/github\.com\/nanless\/(?:audio-paper-digest(?:-blog)?|audio-research-(?:workbench|portal))\/releases\/download\/([A-Za-z0-9._-]{1,128})\/([A-Za-z0-9._-]{1,128})\.mp3$/;
  var ALLOWED_RATES = [0.75, 1.0, 1.25, 1.5, 2.0];

  function isAllowedPodcastAudioUrl(url) {
    if (typeof url !== 'string' || !url || url.indexOf('..') !== -1) return false;
    var match = AUDIO_URL_PATTERN.exec(url);
    if (!match) return false;
    var tag = match[1];
    var fileBase = match[2];
    if (tag === '.' || fileBase === '.') return false;
    return true;
  }

  function formatSeconds(sec) {
    var whole = Math.max(0, Math.floor(sec));
    var h = Math.floor(whole / 3600);
    var m = Math.floor((whole % 3600) / 60);
    var s = whole % 60;
    var mm = m < 10 ? '0' + m : String(m);
    var ss = s < 10 ? '0' + s : String(s);
    return h > 0 ? String(h) + ':' + mm + ':' + ss : mm + ':' + ss;
  }

  function isAllowedRate(rate) {
    for (var i = 0; i < ALLOWED_RATES.length; i += 1) {
      if (Math.abs(ALLOWED_RATES[i] - rate) < 1e-6) return true;
    }
    return false;
  }

  function setActiveChapter(chapterButtons, activeBtn) {
    for (var i = 0; i < chapterButtons.length; i += 1) {
      var btn = chapterButtons[i];
      var isCurrent = btn === activeBtn;
      btn.classList.toggle('is-active', isCurrent);
      if (isCurrent) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    }
  }

  function bindPodcastCard(card) {
    if (!card || card.getAttribute('data-podcast-bound') === 'true') return false;
    var audio = card.querySelector('audio');
    if (!audio) return false;
    var src = audio.getAttribute('src') || '';
    if (!isAllowedPodcastAudioUrl(src)) return false;

    card.setAttribute('data-podcast-bound', 'true');
    var statusEl = card.querySelector('[data-podcast-status]');
    var rateButtons = Array.prototype.slice.call(card.querySelectorAll('[data-podcast-rate]'));
    var chapterButtons = Array.prototype.slice.call(card.querySelectorAll('[data-start-sec]'));
    var pendingSeekSec = null;

    function announce(message) {
      if (statusEl) statusEl.textContent = message;
    }

    function tryPlay() {
      try {
        if (typeof audio.play === 'function') {
          var playRes = audio.play();
          if (playRes && typeof playRes.catch === 'function') playRes.catch(function () {});
        }
      } catch (_) { /* autoplay policy */ }
    }

    function clampToDuration(sec) {
      var dur = Number(audio.duration);
      if (Number.isFinite(dur) && dur > 0) return Math.min(sec, dur);
      return sec;
    }

    audio.addEventListener('loadedmetadata', function () {
      if (pendingSeekSec === null) return;
      var target = clampToDuration(pendingSeekSec);
      pendingSeekSec = null;
      try {
        audio.currentTime = target;
      } catch (_) { /* ignore seek failure */ }
      tryPlay();
    });

    audio.addEventListener('error', function () {
      pendingSeekSec = null;
      announce('音频加载失败，请稍后重试或点击下载 MP3');
    });

    function applyRate(rate, activeBtn) {
      if (!isAllowedRate(rate)) return;
      audio.playbackRate = rate;
      for (var i = 0; i < rateButtons.length; i += 1) {
        var btn = rateButtons[i];
        var active = btn === activeBtn;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
      announce('播放倍速已调整为 ' + rate + 'x');
    }

    rateButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var raw = btn.getAttribute('data-podcast-rate') || '';
        var parsed = Number(raw);
        if (Number.isFinite(parsed) && isAllowedRate(parsed)) {
          applyRate(parsed, btn);
        }
      });
    });

    var parsedChapters = [];
    chapterButtons.forEach(function (btn) {
      var rawSec = btn.getAttribute('data-start-sec');
      var sec = Number(rawSec);
      if (!Number.isFinite(sec) || sec < 0) return;
      parsedChapters.push({ btn: btn, startSec: sec });
      btn.addEventListener('click', function () {
        setActiveChapter(chapterButtons, btn);
        if (typeof audio.readyState === 'number' && audio.readyState < 1) {
          pendingSeekSec = sec;
          try {
            if (typeof audio.load === 'function') audio.load();
          } catch (_) { /* ignore load error */ }
          tryPlay();
        } else {
          pendingSeekSec = null;
          try {
            audio.currentTime = clampToDuration(sec);
          } catch (_) { /* audio not yet seekable */ }
          tryPlay();
        }
        announce('已跳转至 ' + formatSeconds(sec));
      });
    });

    parsedChapters.sort(function (a, b) { return a.startSec - b.startSec; });

    if (parsedChapters.length > 0) {
      audio.addEventListener('timeupdate', function () {
        var now = Number(audio.currentTime);
        if (!Number.isFinite(now)) return;
        var current = null;
        for (var i = 0; i < parsedChapters.length; i += 1) {
          if (parsedChapters[i].startSec <= now + 0.25) current = parsedChapters[i].btn;
          else break;
        }
        if (current) setActiveChapter(chapterButtons, current);
      });
    }

    return true;
  }

  function initPodcastPlayers(doc) {
    var root = doc || (typeof document !== 'undefined' ? document : null);
    if (!root || typeof root.querySelectorAll !== 'function') return 0;
    var cards = root.querySelectorAll('[data-podcast-player]');
    var bound = 0;
    for (var i = 0; i < cards.length; i += 1) {
      if (bindPodcastCard(cards[i])) bound += 1;
    }
    return bound;
  }

  return Object.freeze({
    AUDIO_URL_PATTERN: AUDIO_URL_PATTERN,
    ALLOWED_RATES: ALLOWED_RATES,
    isAllowedPodcastAudioUrl: isAllowedPodcastAudioUrl,
    formatSeconds: formatSeconds,
    bindPodcastCard: bindPodcastCard,
    initPodcastPlayers: initPodcastPlayers
  });
}));
