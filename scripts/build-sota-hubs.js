'use strict';

// Wave 14.2B: Audio Task & Benchmark SOTA Hubs pre-Hugo aggregator (pure Node.js, zero deps).
// All metrics, leaderboards, venue breakdowns, trends, and co-occurring methods/benchmarks
// are strictly grounded in verified site papers (respecting withheld tag suppression).
const path = require('node:path');
const {
  DANGEROUS_KEYS,
  loadResearchCorpus,
  writeJsonAtomic
} = require('./lib/research-corpus');

const CONTRACT = 'sota-hubs-auto-v1';
const OUTPUT = 'data/sota-hubs-auto.json';

const HEADLINE_VENUES = Object.freeze([
  'arXiv', 'ICASSP', 'Interspeech', 'NeurIPS', 'ICLR', 'ICML', 'ACL',
  'EMNLP', 'ISMIR', 'DCASE', 'WASPAA', 'ASRU', 'SLT', 'CVPR', 'AAAI'
]);

const HUB_DEFINITIONS = Object.freeze([
  Object.freeze({
    slug: 'asr',
    title: '自动语音识别（ASR）',
    subtitle: 'Automatic Speech Recognition',
    description: '聚焦自动语音识别、音视频识别、多说话人重叠识别、口语对齐与流式低延迟识别研究进展。',
    primaryConceptId: 'task.asr',
    feedPath: 'feeds/topic-asr.xml',
    feedLabel: '订阅 ASR 专题 RSS',
    conceptIds: Object.freeze([
      'task.asr', 'task.av-asr', 'task.multi-talker-asr', 'task.overlapped-speech-recognition',
      'task.asr-error-estimation', 'task.lip-reading', 'task.inverse-text-normalization',
      'task.punctuation-restoration', 'task.forced-alignment', 'task.keyword-detection',
      'task.wake-word', 'application.meeting'
    ]),
    ancestorRoots: Object.freeze(['task.asr']),
    legacyTags: Object.freeze(['语音识别', 'ASR', '自动语音识别', '多说话人语音识别', '音视频语音识别'])
  }),
  Object.freeze({
    slug: 'tts',
    title: '语音合成与声音克隆（TTS & Voice Cloning）',
    subtitle: 'Text-to-Speech & Voice Cloning',
    description: '聚焦文本到语音合成、零样本声音克隆、韵律风格可控生成、播客对话生成与语音配音方向。',
    primaryConceptId: 'task.tts',
    feedPath: 'feeds/topic-tts.xml',
    feedLabel: '订阅 TTS 专题 RSS',
    conceptIds: Object.freeze([
      'task.speech-synthesis', 'task.tts', 'task.voice-cloning', 'task.av-synthesis',
      'task.prosody-style-control', 'task.podcast-dialogue-generation',
      'task.tts-friendly-text-generation', 'task.dubbing'
    ]),
    ancestorRoots: Object.freeze(['task.speech-synthesis', 'task.tts']),
    legacyTags: Object.freeze(['语音合成', '文本到语音', 'TTS', '语音克隆', '情感语音合成'])
  }),
  Object.freeze({
    slug: 'speech-enhancement',
    title: '语音增强与声源分离（Speech Enhancement & Separation）',
    subtitle: 'Speech Enhancement, Restoration & Separation',
    description: '聚焦语音降噪、去混响、回声消除、目标说话人提取、声源分离、带宽扩展与音频修复方向。',
    primaryConceptId: 'task.speech-enhancement',
    feedPath: 'feeds/topic-enhancement.xml',
    feedLabel: '订阅语音增强专题 RSS',
    conceptIds: Object.freeze([
      'task.speech-enhancement', 'task.audio-restoration', 'task.audio-separation',
      'task.speech-separation', 'task.target-speaker', 'task.av-source-separation',
      'task.av-speech-separation', 'task.dereverberation', 'task.echo-cancellation',
      'task.active-noise-control', 'task.bandwidth-extension', 'task.packet-loss',
      'task.declipping', 'task.audio-super-resolution', 'task.speech-super-resolution',
      'task.periodic-waveform-denoising'
    ]),
    ancestorRoots: Object.freeze([
      'task.speech-enhancement', 'task.audio-restoration',
      'task.audio-separation', 'task.speech-separation'
    ]),
    legacyTags: Object.freeze(['语音增强', '语音降噪', '去混响', '语音分离', '音频修复', '声源分离'])
  }),
  Object.freeze({
    slug: 'audio-llm',
    title: '音频/语音大模型与神经编解码（Audio/Speech LLM & Codec）',
    subtitle: 'Audio/Speech LLMs, Full-Duplex Dialogue & Neural Codecs',
    description: '聚焦音频/语音大语言模型、全模态理解与生成、端到端全双工语音对话以及神经音频编解码器与离散词元化。',
    primaryConceptId: 'model_family.audio-language',
    feedPath: 'feeds/topic-audio-llm.xml',
    feedLabel: '订阅音频大模型专题 RSS',
    conceptIds: Object.freeze([
      'model_family.audio-language', 'model_family.speech', 'model_family.speech-to-speech-llm',
      'model_family.unified-audio', 'model_family.omni-multimodal', 'model_family.llm',
      'task.speech-dialogue', 'task.full-duplex', 'task.speech-interaction',
      'task.audio-coding', 'task.speech-coding', 'task.speech-tokenizer', 'method.neural-codec'
    ]),
    ancestorRoots: Object.freeze([
      'model_family.audio-language', 'model_family.speech', 'model_family.llm',
      'task.audio-coding', 'method.neural-codec'
    ]),
    legacyTags: Object.freeze([
      '音频大模型', '语音大模型', '端到端语音对话大模型', 'Audio LLM', 'Speech LLM',
      '神经音频编解码', '语音编码', '语音对话系统'
    ])
  }),
  Object.freeze({
    slug: 'music-mir',
    title: '音乐生成与音乐信息检索（Music Generation & MIR）',
    subtitle: 'Music Generation, Singing Synthesis & MIR',
    description: '聚焦音乐生成、符号音乐、歌声合成、音乐转录、音高与节拍追踪、和弦识别、乐谱对齐与音乐源分离。',
    primaryConceptId: 'task.music-generation',
    feedPath: 'feeds/topic-music.xml',
    feedLabel: '订阅音乐生成与理解 RSS',
    conceptIds: Object.freeze([
      'signal.music', 'scientific_topic.music-information', 'task.music-generation',
      'task.symbolic-music', 'task.singing', 'task.music-understanding', 'task.transcription',
      'task.pitch-melody', 'task.beat-tracking', 'task.chord-recognition',
      'task.music-retrieval', 'task.music-text-retrieval', 'task.music-recommendation',
      'task.music-separation', 'task.music-super-resolution', 'task.score-alignment',
      'task.music-structure-analysis', 'task.music-mixing', 'task.music-post-production',
      'task.optical-music-recognition', 'task.singing-skill-evaluation'
    ]),
    ancestorRoots: Object.freeze(['task.music-generation', 'task.music-understanding', 'task.music-retrieval']),
    legacyTags: Object.freeze([
      '音乐生成', '音乐理解', '音乐分析', '音乐信息检索', '歌声合成', '音乐源分离', '符号音乐生成', '音乐转录'
    ])
  }),
  Object.freeze({
    slug: 'spatial-audio',
    title: '空间音频与声学定位（Spatial Audio & Acoustics）',
    subtitle: 'Spatial Audio, Sound Source Localization & Acoustics',
    description: '聚焦声源定位与追踪、联合事件检测与定位（SELD）、声场重建、房间脉冲响应（RIR）估计、空间音频渲染与物理声学建模。',
    primaryConceptId: 'scientific_topic.spatial-audio',
    feedPath: 'feeds/high-score.xml',
    feedLabel: '订阅高分精选 RSS',
    conceptIds: Object.freeze([
      'signal.spatial-audio', 'scientific_topic.spatial-audio', 'scientific_topic.physical-acoustics',
      'task.localization', 'task.source-tracking', 'task.seld', 'task.sound-field',
      'task.rir-estimation', 'task.spatial-rendering', 'task.spatial-audio-generation',
      'task.acoustic-response-prediction', 'task.acoustic-propagation-prediction',
      'task.audio-navigation', 'task.audio-visual-navigation'
    ]),
    ancestorRoots: Object.freeze(['task.localization', 'task.sound-field', 'task.spatial-rendering']),
    legacyTags: Object.freeze(['空间音频', '声源定位', '声场重建', 'SELD', '房间脉冲响应', '双耳音频'])
  }),
  Object.freeze({
    slug: 'audio-understanding',
    title: '音频理解、分类与事件检测（Audio Understanding & SED）',
    subtitle: 'Audio Understanding, Classification, Captioning & SED',
    description: '聚焦通用音频理解、音频分类、声学场景识别、声音事件检测（SED）、异常声音检测、音频字幕与音频问答。',
    primaryConceptId: 'task.audio-understanding',
    feedPath: 'feeds/high-score.xml',
    feedLabel: '订阅高分精选 RSS',
    conceptIds: Object.freeze([
      'task.audio-understanding', 'task.audio-classification', 'task.scene-classification',
      'task.event-detection', 'task.anomaly-detection', 'task.audio-question-answering',
      'task.audio-captioning', 'task.audio-retrieval', 'task.av-understanding',
      'task.av-question-answering', 'task.spoken-understanding'
    ]),
    ancestorRoots: Object.freeze([
      'task.audio-understanding', 'task.audio-classification',
      'task.event-detection', 'task.av-understanding'
    ]),
    legacyTags: Object.freeze(['音频理解', '音频分类', '声音事件检测', '音频事件检测', '声学场景分类', '音频字幕生成', '异常声音检测'])
  }),
  Object.freeze({
    slug: 'voice-conversion',
    title: '音色转换与可控语音编辑（Voice Conversion & Editing）',
    subtitle: 'Voice Conversion, Speech Editing & Audio Inpainting',
    description: '聚焦音色转换（VC）、可控语音编辑、音频局部补全重绘、声音克隆与韵律风格迁移方向。',
    primaryConceptId: 'task.voice-conversion',
    feedPath: 'feeds/topic-tts.xml',
    feedLabel: '订阅 TTS/语音生成 RSS',
    conceptIds: Object.freeze([
      'task.voice-conversion', 'task.voice-cloning', 'task.speech-editing',
      'task.audio-editing', 'task.dubbing', 'task.prosody-style-control',
      'task.audio-inpainting'
    ]),
    ancestorRoots: Object.freeze(['task.voice-conversion', 'task.speech-editing', 'task.audio-editing']),
    legacyTags: Object.freeze(['语音转换', '音色转换', '语音编辑', '音频编辑', '语音克隆', '语音配音'])
  })
]);

const HUB_SLUGS = Object.freeze(HUB_DEFINITIONS.map((h) => h.slug));

function validateHubDefinitions(catalog) {
  if (!catalog || !catalog.currentById || catalog.currentById.size === 0) return;
  const missing = [];
  for (const hub of HUB_DEFINITIONS) {
    for (const id of [hub.primaryConceptId, ...hub.conceptIds, ...hub.ancestorRoots]) {
      const node = catalog.currentById.get(id);
      if (!node || (node.status || 'active') === 'deprecated') {
        missing.push(`${hub.slug}:${id}`);
      }
    }
  }
  if (missing.length > 0) {
    throw new Error(`SOTA hub definitions contain unknown or deprecated catalog concept IDs: ${missing.join(', ')}`);
  }
}

function recentSixMonths(latestDate) {
  let year = 2026;
  let month = 11;
  const m = String(latestDate || '').match(/^(\d{4})-(\d{2})/);
  if (m) {
    year = Number(m[1]);
    month = Number(m[2]);
  }
  const out = [];
  for (let offset = 5; offset >= 0; offset -= 1) {
    let totalMonths = year * 12 + (month - 1) - offset;
    const y = Math.floor(totalMonths / 12);
    const mo = (totalMonths % 12) + 1;
    out.push(`${String(y).padStart(4, '0')}-${String(mo).padStart(2, '0')}`);
  }
  return out;
}

function summarizePaper(group) {
  const p = group.page;
  const desc = (p.oneSentence || '').replace(/\s+/g, ' ').trim();
  return {
    identity: group.identity,
    relPermalink: p.relPermalink,
    headline: p.headline || p.title,
    originalTitle: p.originalTitle || p.title,
    date: p.date,
    score: p.scoreNum,
    scoreText: p.scoreText,
    venue: p.venue,
    hasCode: Boolean(p.resources && p.resources.hasCode),
    hasDemo: Boolean(p.resources && p.resources.hasDemo),
    primaryTask: p.primaryTask || '',
    oneSentence: desc.length > 180 ? desc.slice(0, 179) + '…' : desc
  };
}

function paperMatchesHub(group, hub, conceptSet, rootSet, legacySet) {
  // Strictly respect withheld tag suppression: withheld papers never match legacy tags and have 0 verified concepts.
  if (group.tagPublicationStatus === 'withheld') return false;
  if (group.validConcepts.length > 0) {
    for (const c of group.validConcepts) {
      if (conceptSet.has(c.id)) return true;
      if (Array.isArray(c.ancestorIds)) {
        for (const anc of c.ancestorIds) {
          if (rootSet.has(anc)) return true;
        }
      }
    }
    return false;
  }
  if (group.legacyTags.length > 0 && legacySet.size > 0) {
    for (const t of group.legacyTags) {
      if (legacySet.has(t)) return true;
    }
  }
  return false;
}

function buildSotaHubs(repoRoot = process.cwd(), options = {}) {
  const root = path.resolve(repoRoot);
  const corpus = options.corpus || loadResearchCorpus(root, { includeResources: true });
  validateHubDefinitions(corpus.catalog);

  const allGroups = [...corpus.groups.values()];
  let latestDate = '';
  for (const g of allGroups) {
    if (g.page.date && g.page.date > latestDate) latestDate = g.page.date;
  }
  const monthWindow = recentSixMonths(latestDate);
  const monthWindowSet = new Set(monthWindow);

  const hubs = Object.create(null);
  const summaryStats = {};

  for (const hub of HUB_DEFINITIONS) {
    const conceptSet = new Set(hub.conceptIds);
    const rootSet = new Set(hub.ancestorRoots);
    const legacySet = new Set(hub.legacyTags);

    const matched = [];
    let openSourceCount = 0;
    let demoCount = 0;
    let highScoreCount = 0;

    const venueCounts = new Map();
    for (const v of HEADLINE_VENUES) venueCounts.set(v, 0);
    let otherVenueCount = 0;

    const monthCounts = new Map();
    for (const mo of monthWindow) monthCounts.set(mo, 0);

    const methodCounts = new Map();
    const artifactSettingCounts = new Map();

    for (const g of allGroups) {
      if (!paperMatchesHub(g, hub, conceptSet, rootSet, legacySet)) continue;
      matched.push(g);
      const p = g.page;
      if (p.resources && p.resources.hasCode) openSourceCount += 1;
      if (p.resources && p.resources.hasDemo) demoCount += 1;
      if (p.scoreNum >= 8.0) highScoreCount += 1;

      if (venueCounts.has(p.venue)) {
        venueCounts.set(p.venue, venueCounts.get(p.venue) + 1);
      } else {
        otherVenueCount += 1;
      }

      const ym = p.date ? p.date.slice(0, 7) : '';
      if (monthWindowSet.has(ym)) {
        monthCounts.set(ym, (monthCounts.get(ym) || 0) + 1);
      }

      for (const c of g.validConcepts) {
        if (c.facet === 'method' || c.facet === 'model_family') {
          const prev = methodCounts.get(c.id);
          if (prev) prev.count += 1;
          else methodCounts.set(c.id, { id: c.id, zh: c.zh, facet: c.facet, count: 1 });
        } else if (c.facet === 'artifact' || c.facet === 'setting' || c.facet === 'research_focus' || c.facet === 'application') {
          const prev = artifactSettingCounts.get(c.id);
          if (prev) prev.count += 1;
          else artifactSettingCounts.set(c.id, { id: c.id, zh: c.zh, facet: c.facet, count: 1 });
        }
      }
    }

    const venueBreakdown = [];
    for (const v of HEADLINE_VENUES) {
      const cnt = venueCounts.get(v) || 0;
      if (cnt > 0) venueBreakdown.push({ venue: v, count: cnt });
    }
    if (otherVenueCount > 0) {
      venueBreakdown.push({ venue: '其他会议', count: otherVenueCount });
    }

    let maxMonthCount = 0;
    for (const mo of monthWindow) {
      const c = monthCounts.get(mo) || 0;
      if (c > maxMonthCount) maxMonthCount = c;
    }
    const monthlyTrend = monthWindow.map((mo) => {
      const count = monthCounts.get(mo) || 0;
      const ratioPct = maxMonthCount > 0 ? Math.max(count > 0 ? 8 : 0, Math.round((count / maxMonthCount) * 100)) : 0;
      return { month: mo, count, ratioPct };
    });

    // Top-20 highest-scored papers
    const topPapers = matched
      .filter((g) => g.page.scoreInt > 0)
      .sort((a, b) =>
        (b.page.scoreInt - a.page.scoreInt)
        || (b.page.dateInt - a.page.dateInt)
        || (a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0)
      )
      .slice(0, 20)
      .map(summarizePaper);

    // Latest-15 recent papers
    const latestPapers = [...matched]
      .sort((a, b) =>
        (b.page.dateInt - a.page.dateInt)
        || (b.page.scoreInt - a.page.scoreInt)
        || (a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0)
      )
      .slice(0, 15)
      .map(summarizePaper);

    // Top open-source & demo papers
    const openSourceDemoPapers = matched
      .filter((g) => g.page.resources && (g.page.resources.hasCode || g.page.resources.hasDemo))
      .sort((a, b) => {
        const bothA = (a.page.resources.hasCode && a.page.resources.hasDemo) ? 1 : 0;
        const bothB = (b.page.resources.hasCode && b.page.resources.hasDemo) ? 1 : 0;
        return (bothB - bothA)
          || (b.page.scoreInt - a.page.scoreInt)
          || (b.page.dateInt - a.page.dateInt)
          || (a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0);
      })
      .slice(0, 15)
      .map(summarizePaper);

    const sortCo = (a, b) => (b.count - a.count) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const topMethods = [...methodCounts.values()].sort(sortCo).slice(0, 12);
    const topBenchmarksAndSettings = [...artifactSettingCounts.values()].sort(sortCo).slice(0, 12);

    const conceptChips = [];
    for (const cid of hub.conceptIds) {
      const node = corpus.catalog.currentById.get(cid);
      if (node && (node.status || 'active') !== 'deprecated') {
        conceptChips.push({ id: node.id, zh: node.zh, facet: node.facet });
      }
    }

    if (!DANGEROUS_KEYS.has(hub.slug)) {
      hubs[hub.slug] = {
        slug: hub.slug,
        title: hub.title,
        subtitle: hub.subtitle,
        description: hub.description,
        primaryConceptId: hub.primaryConceptId,
        libraryFilterUrl: `papers/?concept=${encodeURIComponent(hub.primaryConceptId)}`,
        feedPath: hub.feedPath,
        feedLabel: hub.feedLabel,
        totalPapers: matched.length,
        openSourceCount,
        demoCount,
        highScoreCount,
        venueBreakdown,
        monthlyTrend,
        topPapers,
        latestPapers,
        openSourceDemoPapers,
        topMethods,
        topBenchmarksAndSettings,
        conceptChips
      };
      summaryStats[hub.slug] = {
        totalPapers: matched.length,
        highScoreCount,
        openSourceCount,
        demoCount
      };
    }
  }

  const manifest = {
    contract: CONTRACT,
    totalN: corpus.groups.size,
    basePath: corpus.basePath,
    latestDate,
    generatedAt: options.generatedAt || new Date().toISOString(),
    hubOrder: [...HUB_SLUGS],
    hubs
  };

  return { manifest, stats: summaryStats, totalPapers: corpus.groups.size };
}

function writeSotaHubsAuto(repoRoot = process.cwd(), options = {}) {
  const root = path.resolve(repoRoot);
  const built = buildSotaHubs(root, options);
  const outPath = path.join(root, OUTPUT);
  writeJsonAtomic(outPath, built.manifest, false);
  return built;
}

if (require.main === module) {
  const targetRoot = process.argv[2] || process.cwd();
  const t0 = Date.now();
  const built = writeSotaHubsAuto(targetRoot);
  const elapsedMs = Date.now() - t0;
  process.stdout.write(JSON.stringify({ totalPapers: built.totalPapers, hubs: built.stats, elapsedMs }) + '\n');
}

module.exports = {
  CONTRACT,
  OUTPUT,
  HUB_DEFINITIONS,
  HUB_SLUGS,
  HEADLINE_VENUES,
  validateHubDefinitions,
  buildSotaHubs,
  writeSotaHubsAuto
};
