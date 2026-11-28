---
title: "ijcai-2026 论文深度解读"
date: 2026-11-28
draft: false
layout: "posts"
paper_digest_pipeline_owned: true
tags: ["案例研究与实践报告","大语言模型","代码转换","对比学习","对抗训练","多模态情感极性分析","多模态学习","多模态语义传输","多任务学习","多语言","符号音乐生成","关键词检测","环境声","混合专家模型","静默语音接口","空间音频生成","扩散模型","联邦学习","流匹配","流式处理","鲁棒性","目标说话人提取","脑信号","偏好优化","评测协议","迁移学习","弱监督学习","生物声学监测","时频分析","视频到声音生成","视频生成","数据集","数据增强","通用多模态问答","图神经网络","文本到语音","无障碍","向量量化","信号处理","言语神经解码","音频分类","音频深度伪造检测","音频事件检测","音视频理解","用户研究","语音","语音到语音翻译","语音翻译","语音交互","语音配音","语音情感识别","语音识别","语音伪造检测","域泛化","知识蒸馏","主观评测","注意力机制","状态空间模型","自监督学习","CNN","LoRA","Transformer"]
categories: ["ijcai-2026 论文"]
description: "共收录 23 篇 ijcai-2026 会议论文深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-page"
paper_digest_reader_quality_schema_fingerprint: "0591bc89faa58048aa97bb75ab5c5fb13dd2c03caf24e0268ff442a5049b9d01"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"task","id":"task.multimodal-semantic-transport","label":"多模态语义传输"},{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"task","id":"task.silent-speech","label":"静默语音接口"},{"facet":"task","id":"task.spatial-audio-generation","label":"空间音频生成"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"task","id":"task.neural-speech-decoding","label":"言语神经解码"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"},{"facet":"task","id":"task.speech-to-speech-translation","label":"语音到语音翻译"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"task","id":"task.speech-interaction","label":"语音交互"},{"facet":"task","id":"task.dubbing","label":"语音配音"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_tags_scope: "aggregate-primary-task-counts"
---

# ijcai-2026 论文深度解读

本汇总收录已核验计划中全部 23 篇已完成分析、标签分配和单篇页面生成的论文。

🏷️ 标签说明：本期标签来自新版词表；热门方向只统计主任务。

## ⚡ 会议概览

计划入选的 23 篇论文已完成深度分析、读者文章和单篇页面生成。

### 🧭 会议研究脉络

- **焦点方向**：[#文本到语音](/audio-research-portal/papers/?concept=task.tts)（2 篇，最高 6.8 分）、[#音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)（2 篇，最高 6.4 分）、[#语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing)（2 篇，最高 6.9 分）、[#多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment)（1 篇，最高 6.3 分）。
- **阅读与开源快照**：共 23 篇完成评分（精读必看 0 篇 · 重点关注 1 篇 · 速览参考 22 篇）；资源覆盖 💻 代码 5 篇、🤗 模型或数据 2 篇、🔊 试听演示 2 篇。

### 🎯 三档阅读分级

- **📌 重点关注（7.0–7.9 分）**（共 1 篇）：[从说到做：符号音乐创作中知行鸿沟的可观察分析](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/)（7 分）
- **⚡ 速览参考（7.0 分以下）**（共 22 篇）：[语义空间对齐支撑的细粒度语码切换语音翻译](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0636-ebd392f918/)（6.9 分 💻）、[以短关键词替代注册语音的目标说话人提取](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0644-13da1bf46a/)（6.9 分）、[复杂影视场景的零样本配音：数据流程与多模态模型如何协同](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0654-42e51178c5/)（6.9 分 💻 🔊）
- **⚡ 速览参考（7.0 分以下）**（续）：[用音素指纹守护特定人物的声音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0667-d3f3ce476d/)（6.9 分 💻 🤗）、[情绪保留的条件瓶颈如何实现无域标注的语音情感泛化](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0414-b28c2719d7/)（6.8 分）、[切分频率与通道子空间的环境声音伪造检测](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0471-be88e06d86/)（6.8 分 💻）
- **⚡ 速览参考（7.0 分以下）**（续）：[公式朗读如何让盲生听懂科学符号](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0812-a2871d2f2c/)（6.8 分 💻 🤗）、[编解码伪造在东南亚语言中的检测空白与轻量小模型方案](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0791-4d8e2744a3/)（6.7 分）、[视觉引导的高保真双耳音频生成与大规模伪双耳数据](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0198-7d5b91df46/)（6.5 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[听声计数：以声音为提示的零样本目标计数](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0194-7c7c4954b6/)（6.4 分）、[模态主导污染全局教师时联邦蒸馏如何实现自适应平衡](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0482-7c1694e19f/)（6.4 分）、[以两级参照约束控制缺失模态下的判定漂移](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0108-3e1156d464/)（6.3 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[用列表排序学习让文本提示真正控制语音情感强度](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0652-7f4ad03612/)（6.2 分）、[从脑电重建梅尔频谱：被试调制与分层融合如何同时应对个体差异与跨模态鸿沟](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0402-8e1ac2659d/)（6.1 分）、[噪声信道下统一语义通信 Bridge 的解耦 对齐与重建](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0465-a8c5962d12/)（6.1 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[并行文本生成如何消除实时游戏解说的长静音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0972-f0c976edb4/)（6 分 🔊）、[风格一致的多风格舞蹈运镜合成解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0136-5989917c9d/)（5.9 分）、[跳长与窗长优先于主干加深的虎鲸叫声分类](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0982-634adc5b6f/)（5.9 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[面向数字健康的可信以人为中心人工智能：感知、理解与能力增强](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0910-3f7877bd36/)（5.6 分）、[档案弱标签如何经交互精炼迁移为野外声学监测检测器](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0979-b875da011f/)（5.4 分）、[DeepL Voice 面向商务沟通的实时语音翻译系统解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0962-443fe0e542/)（5 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[触摸与对话结合：面向盲人的多模态图书与网店演示](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0991-a83d069482/)（4.2 分）

### 🌟 会议精选焦点

> 🥇 **[从说到做：符号音乐创作中知行鸿沟的可观察分析](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/)** · 总分 **7**/10（前50% · 方法研究 · [#符号音乐生成](/audio-research-portal/papers/?concept=task.symbolic-music)）
>
> 突出维度：实验充分 8.2/10 · 创新 7.6/10 · 技术严谨 6.9/10

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 | 分布 |
|---|---:|---|
| [#文本到语音](/audio-research-portal/papers/?concept=task.tts) | 2 篇 | ██ |
| [#音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) | 2 篇 | ██ |
| [#语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing) | 2 篇 | ██ |
| [#多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment) | 1 篇 | █ |
| [#多模态语义传输](/audio-research-portal/papers/?concept=task.multimodal-semantic-transport) | 1 篇 | █ |
| [#符号音乐生成](/audio-research-portal/papers/?concept=task.symbolic-music) | 1 篇 | █ |
| [#静默语音接口](/audio-research-portal/papers/?concept=task.silent-speech) | 1 篇 | █ |
| [#空间音频生成](/audio-research-portal/papers/?concept=task.spatial-audio-generation) | 1 篇 | █ |
| [#目标说话人提取](/audio-research-portal/papers/?concept=task.target-speaker) | 1 篇 | █ |
| [#视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio) | 1 篇 | █ |
| [#视频生成](/audio-research-portal/papers/?concept=task.video-generation) | 1 篇 | █ |
| [#言语神经解码](/audio-research-portal/papers/?concept=task.neural-speech-decoding) | 1 篇 | █ |
| [#音频分类](/audio-research-portal/papers/?concept=task.audio-classification) | 1 篇 | █ |
| [#音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake) | 1 篇 | █ |
| [#音频事件检测](/audio-research-portal/papers/?concept=task.event-detection) | 1 篇 | █ |
| [#语音到语音翻译](/audio-research-portal/papers/?concept=task.speech-to-speech-translation) | 1 篇 | █ |
| [#语音翻译](/audio-research-portal/papers/?concept=task.speech-translation) | 1 篇 | █ |
| [#语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) | 1 篇 | █ |
| [#语音配音](/audio-research-portal/papers/?concept=task.dubbing) | 1 篇 | █ |
| [#语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition) | 1 篇 | █ |

### 🏷️ 多级标签统计

每个层级都统计本期论文数：`直接` 是成员页面直接标记该标签的篇数，`含子树` 是该标签及其全部下级标签的去重论文数（registry 共 9 个分面，本期只列出有论文的分面）。各级链接进入论文库，按该概念及其下级筛选全站论文；这里的计数仅统计本期。

#### 研究任务

- [#音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) — 直接 0 篇 · 含子树 3 篇
  - [#语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing) — 直接 2 篇 · 含子树 2 篇
  - [#音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake) — 直接 1 篇 · 含子树 1 篇
- [#音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) — 直接 2 篇 · 含子树 2 篇
- [#语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition) — 直接 2 篇 · 含子树 2 篇
- [#语音翻译](/audio-research-portal/papers/?concept=task.speech-translation) — 直接 1 篇 · 含子树 2 篇
  - [#语音到语音翻译](/audio-research-portal/papers/?concept=task.speech-to-speech-translation) — 直接 1 篇 · 含子树 1 篇
- [#音频生成](/audio-research-portal/papers/?concept=task.audio-generation) — 直接 0 篇 · 含子树 2 篇
  - [#视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio) — 直接 2 篇 · 含子树 2 篇
  - [#空间音频生成](/audio-research-portal/papers/?concept=task.spatial-audio-generation) — 直接 1 篇 · 含子树 1 篇
- [#语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) — 直接 0 篇 · 含子树 2 篇
  - [#文本到语音](/audio-research-portal/papers/?concept=task.tts) — 直接 2 篇 · 含子树 2 篇
- [#多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment) — 直接 1 篇 · 含子树 1 篇
- [#多模态语义传输](/audio-research-portal/papers/?concept=task.multimodal-semantic-transport) — 直接 1 篇 · 含子树 1 篇
- [#关键词检测](/audio-research-portal/papers/?concept=task.keyword-detection) — 直接 1 篇 · 含子树 1 篇
- [#静默语音接口](/audio-research-portal/papers/?concept=task.silent-speech) — 直接 1 篇 · 含子树 1 篇
- [#视频生成](/audio-research-portal/papers/?concept=task.video-generation) — 直接 1 篇 · 含子树 1 篇
- [#通用多模态问答](/audio-research-portal/papers/?concept=task.generic-multimodal-qa) — 直接 1 篇 · 含子树 1 篇
- [#言语神经解码](/audio-research-portal/papers/?concept=task.neural-speech-decoding) — 直接 1 篇 · 含子树 1 篇
- [#音频分类](/audio-research-portal/papers/?concept=task.audio-classification) — 直接 1 篇 · 含子树 1 篇
- [#音频事件检测](/audio-research-portal/papers/?concept=task.event-detection) — 直接 1 篇 · 含子树 1 篇
- [#语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) — 直接 1 篇 · 含子树 1 篇
- [#语音配音](/audio-research-portal/papers/?concept=task.dubbing) — 直接 1 篇 · 含子树 1 篇
- [#语音识别](/audio-research-portal/papers/?concept=task.asr) — 直接 1 篇 · 含子树 1 篇
- [#音乐生成](/audio-research-portal/papers/?concept=task.music-generation) — 直接 0 篇 · 含子树 1 篇
  - [#符号音乐生成](/audio-research-portal/papers/?concept=task.symbolic-music) — 直接 1 篇 · 含子树 1 篇
- [#音频分离](/audio-research-portal/papers/?concept=task.audio-separation) — 直接 0 篇 · 含子树 1 篇
  - [#语音分离](/audio-research-portal/papers/?concept=task.speech-separation) — 直接 0 篇 · 含子树 1 篇
    - [#目标说话人提取](/audio-research-portal/papers/?concept=task.target-speaker) — 直接 1 篇 · 含子树 1 篇

#### 研究方法

- [#多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning) — 直接 6 篇 · 含子树 6 篇
- [#生成模型](/audio-research-portal/papers/?concept=method.generative) — 直接 0 篇 · 含子树 4 篇
  - [#扩散模型](/audio-research-portal/papers/?concept=method.diffusion) — 直接 2 篇 · 含子树 2 篇
  - [#流匹配](/audio-research-portal/papers/?concept=method.flow-matching) — 直接 2 篇 · 含子树 2 篇
- [#人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) — 直接 0 篇 · 含子树 3 篇
  - [#主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation) — 直接 2 篇 · 含子树 2 篇
  - [#用户研究](/audio-research-portal/papers/?concept=method.user-study) — 直接 1 篇 · 含子树 1 篇
- [#对比学习](/audio-research-portal/papers/?concept=method.contrastive) — 直接 2 篇 · 含子树 2 篇
- [#对抗训练](/audio-research-portal/papers/?concept=method.adversarial-training) — 直接 2 篇 · 含子树 2 篇
- [#知识蒸馏](/audio-research-portal/papers/?concept=method.distillation) — 直接 2 篇 · 含子树 2 篇
- [#注意力机制](/audio-research-portal/papers/?concept=method.attention) — 直接 2 篇 · 含子树 2 篇
- [#状态空间模型](/audio-research-portal/papers/?concept=method.state-space) — 直接 2 篇 · 含子树 2 篇
- [#迁移学习](/audio-research-portal/papers/?concept=method.transfer) — 直接 1 篇 · 含子树 2 篇
  - [#域泛化](/audio-research-portal/papers/?concept=method.domain-generalization) — 直接 1 篇 · 含子树 1 篇
- [#信号处理](/audio-research-portal/papers/?concept=method.signal-processing) — 直接 1 篇 · 含子树 2 篇
  - [#时频分析](/audio-research-portal/papers/?concept=method.time-frequency) — 直接 1 篇 · 含子树 1 篇
- [#参数高效微调](/audio-research-portal/papers/?concept=method.peft) — 直接 0 篇 · 含子树 2 篇
  - [#LoRA](/audio-research-portal/papers/?concept=method.lora) — 直接 2 篇 · 含子树 2 篇
- [#案例研究与实践报告](/audio-research-portal/papers/?concept=method.case-study) — 直接 1 篇 · 含子树 1 篇
- [#多任务学习](/audio-research-portal/papers/?concept=method.multitask) — 直接 1 篇 · 含子树 1 篇
- [#混合专家模型](/audio-research-portal/papers/?concept=method.moe) — 直接 1 篇 · 含子树 1 篇
- [#联邦学习](/audio-research-portal/papers/?concept=method.federated) — 直接 1 篇 · 含子树 1 篇
- [#偏好优化](/audio-research-portal/papers/?concept=method.preference-optimization) — 直接 1 篇 · 含子树 1 篇
- [#评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) — 直接 1 篇 · 含子树 1 篇
- [#弱监督学习](/audio-research-portal/papers/?concept=method.weak-supervised) — 直接 1 篇 · 含子树 1 篇
- [#数据增强](/audio-research-portal/papers/?concept=method.augmentation) — 直接 1 篇 · 含子树 1 篇
- [#图神经网络](/audio-research-portal/papers/?concept=method.gnn) — 直接 1 篇 · 含子树 1 篇
- [#向量量化](/audio-research-portal/papers/?concept=method.vector-quantization) — 直接 1 篇 · 含子树 1 篇
- [#自监督学习](/audio-research-portal/papers/?concept=method.self-supervised) — 直接 1 篇 · 含子树 1 篇
- [#CNN](/audio-research-portal/papers/?concept=method.cnn) — 直接 1 篇 · 含子树 1 篇
- [#Transformer](/audio-research-portal/papers/?concept=method.transformer) — 直接 1 篇 · 含子树 1 篇

#### 研究条件

- [#多语言](/audio-research-portal/papers/?concept=setting.multilingual) — 直接 1 篇 · 含子树 2 篇
  - [#代码转换](/audio-research-portal/papers/?concept=setting.code-switching) — 直接 1 篇 · 含子树 1 篇
- [#流式处理](/audio-research-portal/papers/?concept=setting.streaming) — 直接 1 篇 · 含子树 1 篇

#### 信号

- [#语音](/audio-research-portal/papers/?concept=signal.speech) — 直接 2 篇 · 含子树 2 篇
- [#环境声](/audio-research-portal/papers/?concept=signal.environmental) — 直接 1 篇 · 含子树 1 篇
- [#脑信号](/audio-research-portal/papers/?concept=signal.neural) — 直接 1 篇 · 含子树 1 篇

#### 应用

- [#生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics) — 直接 2 篇 · 含子树 2 篇
- [#无障碍](/audio-research-portal/papers/?concept=application.accessibility) — 直接 2 篇 · 含子树 2 篇

#### 研究重点

- [#鲁棒性](/audio-research-portal/papers/?concept=research_focus.robustness) — 直接 1 篇 · 含子树 1 篇

#### 研究产物

- [#数据集](/audio-research-portal/papers/?concept=artifact.dataset) — 直接 9 篇 · 含子树 9 篇

#### 模型家族

- [#大语言模型](/audio-research-portal/papers/?concept=model_family.llm) — 直接 1 篇 · 含子树 1 篇

## 📊 论文评分排行榜

| 排名 | 论文 | 中文导览 | 总分 | 分档 | 文档类型 | 主任务 | 资源 |
|---|---|---|---:|---|---|---|---|
| 🥇 | [Music Atelier: Exploring the Knowing–Doing Gap in LLM Creativity via Symbolic Music Composition](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/) | [从说到做：符号音乐创作中知行鸿沟的可观察分析](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/) | 7 | 前50% | 方法研究 | [#符号音乐生成](/audio-research-portal/papers/?concept=task.symbolic-music) | - |
| 🥈 | [Towards Fine\-Grained Code\-Switch Speech Translation with Semantic Space Alignment](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0636-ebd392f918/) | [语义空间对齐支撑的细粒度语码切换语音翻译](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0636-ebd392f918/) | 6.9 | 前50% | 方法研究 | [#语音翻译](/audio-research-portal/papers/?concept=task.speech-translation) | 💻 |
| 🥉 | [Detect, Attend and Extract: Keyword Guided Target Speaker Extraction](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0644-13da1bf46a/) | [以短关键词替代注册语音的目标说话人提取](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0644-13da1bf46a/) | 6.9 | 前50% | 方法研究 | [#目标说话人提取](/audio-research-portal/papers/?concept=task.target-speaker) | - |
| 4 | [FunCineForge: A Unified Dataset Pipeline and Model for Zero\-Shot Movie Dubbing in Diverse Cinematic Scenes](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0654-42e51178c5/) | [复杂影视场景的零样本配音：数据流程与多模态模型如何协同](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0654-42e51178c5/) | 6.9 | 前50% | 方法研究 | [#语音配音](/audio-research-portal/papers/?concept=task.dubbing) | 💻 🔊 |
| 5 | [Profiling the Voice: Speaker\-Specific Phoneme Fingerprinting for Speech Deepfake Detection](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0667-d3f3ce476d/) | [用音素指纹守护特定人物的声音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0667-d3f3ce476d/) | 6.9 | 前50% | 方法研究 | [#语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing) | 💻 🤗 |
| 6 | [An Emotion\-Preserving Conditional Information Bottleneck for Domain\-Generalizable Speech Emotion Recognition](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0414-b28c2719d7/) | [情绪保留的条件瓶颈如何实现无域标注的语音情感泛化](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0414-b28c2719d7/) | 6.8 | 前50% | 方法研究 | [#语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition) | - |
| 7 | [BEAT2AASIST: BEATs Feature Splitting with Dual\-Branch AASIST for Environmental Sound Deepfake Detection](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0471-be88e06d86/) | [切分频率与通道子空间的环境声音伪造检测](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0471-be88e06d86/) | 6.8 | 前50% | 方法研究 | [#音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake) | 💻 |
| 8 | [Improving Scientific Formula Verbalization in Large Speech Language Models for Accessible Learning](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0812-a2871d2f2c/) | [公式朗读如何让盲生听懂科学符号](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0812-a2871d2f2c/) | 6.8 | 前50% | 方法研究 | [#文本到语音](/audio-research-portal/papers/?concept=task.tts) | 💻 🤗 |
| 9 | [Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec\-Synthesized Speech Deepfakes in South\-East Asian Languages](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0791-4d8e2744a3/) | [编解码伪造在东南亚语言中的检测空白与轻量小模型方案](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0791-4d8e2744a3/) | 6.7 | 前50% | 数据集与基准 | [#语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing) | - |
| 10 | [SpatialV2A: Visual\-Guided High\-fidelity Spatial Audio Generation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0198-7d5b91df46/) | [视觉引导的高保真双耳音频生成与大规模伪双耳数据](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0198-7d5b91df46/) | 6.5 | 前50% | 方法研究 | [#空间音频生成](/audio-research-portal/papers/?concept=task.spatial-audio-generation) | - |
| 11 | [Listen and Count: Expanding the Frontier of Zero\-shot Object Counting to Sound\-centric Counting](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0194-7c7c4954b6/) | [听声计数：以声音为提示的零样本目标计数](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0194-7c7c4954b6/) | 6.4 | 前50% | 方法研究 | [#音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) | - |
| 12 | [FedAMB: Adaptive Modality Balancing for Dominance\-Robust Multimodal Federated Distillation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0482-7c1694e19f/) | [模态主导污染全局教师时联邦蒸馏如何实现自适应平衡](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0482-7c1694e19f/) | 6.4 | 前50% | 方法研究 | [#音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) | - |
| 13 | [Controlling Decision Drift in Multimodal Sentiment Analysis with Missing Modalities](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0108-3e1156d464/) | [以两级参照约束控制缺失模态下的判定漂移](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0108-3e1156d464/) | 6.3 | 前50% | 方法研究 | [#多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment) | - |
| 14 | [Emo\-LiPO: Listwise Preference Optimization for Fine\-Grained Emotion Intensity Control in LLM\-based Text\-to\-Speech](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0652-7f4ad03612/) | [用列表排序学习让文本提示真正控制语音情感强度](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0652-7f4ad03612/) | 6.2 | 前50% | 方法研究 | [#文本到语音](/audio-research-portal/papers/?concept=task.tts) | - |
| 15 | [HFFN\-ID: A Hierarchical Feature Fusion Network with Bi\-Phase Subject ID Modulation for EEG Mel\-Spectrogram Reconstruction](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0402-8e1ac2659d/) | [从脑电重建梅尔频谱：被试调制与分层融合如何同时应对个体差异与跨模态鸿沟](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0402-8e1ac2659d/) | 6.1 | 前50% | 方法研究 | [#言语神经解码](/audio-research-portal/papers/?concept=task.neural-speech-decoding) | - |
| 16 | [Bridge: A Cross\-Modal Learning Framework for Unified Semantic Representation in Noisy Communication](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0465-a8c5962d12/) | [噪声信道下统一语义通信 Bridge 的解耦 对齐与重建](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0465-a8c5962d12/) | 6.1 | 前50% | 方法研究 | [#多模态语义传输](/audio-research-portal/papers/?concept=task.multimodal-semantic-transport) | - |
| 17 | [Low\-Latency Real\-Time Audio Game Commentary System via LLM\-Based Parallel Text Generation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0972-f0c976edb4/) | [并行文本生成如何消除实时游戏解说的长静音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0972-f0c976edb4/) | 6 | 前50% | 系统技术报告 | [#视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio) | 🔊 |
| 18 | [DanceStyleCam: Style\-Based 3D Multi\-Style Dance Camera Movement Synthesis](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0136-5989917c9d/) | [风格一致的多风格舞蹈运镜合成解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0136-5989917c9d/) | 5.9 | 后50% | 方法研究 | [#视频生成](/audio-research-portal/papers/?concept=task.video-generation) | - |
| 19 | [Optimizing Spectrogram Resolution and Training Strategies for Real\-Time Killer Whale Call Type Classification](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0982-634adc5b6f/) | [跳长与窗长优先于主干加深的虎鲸叫声分类](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0982-634adc5b6f/) | 5.9 | 后50% | 方法研究 | [#音频分类](/audio-research-portal/papers/?concept=task.audio-classification) | - |
| 20 | [Human\-Centred Trustworthy AI for Digital Health: Sensing, Understanding, and Empowerment](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0910-3f7877bd36/) | [面向数字健康的可信以人为中心人工智能：感知、理解与能力增强](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0910-3f7877bd36/) | 5.6 | 后50% | 综述 | [#静默语音接口](/audio-research-portal/papers/?concept=task.silent-speech) | - |
| 21 | [Making Weak Supervision Interactive: Exploring Transfer from Sound Libraries to Passive Acoustic Monitoring Data](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0979-b875da011f/) | [档案弱标签如何经交互精炼迁移为野外声学监测检测器](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0979-b875da011f/) | 5.4 | 后50% | 系统技术报告 | [#音频事件检测](/audio-research-portal/papers/?concept=task.event-detection) | - |
| 22 | [DeepL Voice: Real\-Time Speech\-to\-Speech Translation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0962-443fe0e542/) | [DeepL Voice 面向商务沟通的实时语音翻译系统解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0962-443fe0e542/) | 5 | 后50% | 系统技术报告 | [#语音到语音翻译](/audio-research-portal/papers/?concept=task.speech-to-speech-translation) | - |
| 23 | [AI\-Powered Interactive Multimodal Digital Book & Online Shop For Blind and Visually Impaired Users](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0991-a83d069482/) | [触摸与对话结合：面向盲人的多模态图书与网店演示](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0991-a83d069482/) | 4.2 | 后50% | 系统技术报告 | [#语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) | - |

---

## 📋 论文列表

### 1. [从说到做：符号音乐创作中知行鸿沟的可观察分析](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/)

> 英文题目：*[Music Atelier: Exploring the Knowing–Doing Gap in LLM Creativity via Symbolic Music Composition](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0614-dc46b74db3/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-research-portal/papers/?concept=task.music-generation) → [符号音乐生成](/audio-research-portal/papers/?concept=task.symbolic-music)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [用户研究](/audio-research-portal/papers/?concept=method.user-study)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.0/10** | 创新 7.6/10 | 技术严谨 6.9/10 | 实验充分 8.2/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/614) · [官方 PDF](https://ijcai.org/proceedings/2026/0614.pdf)

👥 **作者与机构**

- Zhejing Hu：Department of Computing, The Hong Kong Polytechnic University
- Yan Liu：Department of Computing, The Hong Kong Polytechnic University
- Zhi Zhang：Department of Computing, The Hong Kong Polytechnic University
- Sean Fontaine：Clozzz Lab
- Gong Chen：Clozzz Lab

📌 **核心摘要**

**问题与瓶颈：** 该文研究符号音乐作曲中的知行鸿沟，输入为编码创作意图的用户输入 x，涵盖文字提示或给定旋律乐句，中间为模型产生的非结构化推理轨迹 r，输出为以 ABC 记谱法表示的符号音乐终态产物 y。现有主流路线集中于终态产物评价，包括输出质量或偏好对齐、属性级统计以及把已生成产物作为封闭对象的大模型判断，这类做法能描述结果好坏，却无法刻画推理阶段表达的意图相关想法以何种对应关系落入可辨识的音乐元素。论文把这一失效定位于推理到产物的实现阶段，模型能够流利阐述和声、调性与节奏等乐理并给出连贯的创作计划，但在符号序列中并未一致实例化这些论述，而符号作曲属于规则引导而非规则决定的创作，因而成为观察计划与实现之间结构性错位的自然试验场。

**核心思路与方法架构：** 与最接近的过程导向分析相比，实质增量在于保留大模型判断能力的同时，把判断对象从单个终态产物改为跨阶段映射，并引入思维图（thought graph）作为可分析的中间表示与双维度标注。以旋律续写为例，一条 ABC 记谱旋律与延续指令进入模型，模型在推理中表达多条创作想法，框架先以提示约束 Pinit 从 r 生成初始图 \(G^{(0)}=(N^{(0)}, L^{(0)})\)，节点为短文本想法，边为求精、依赖或推进关系，再用句嵌入模型 all-MiniLM-L6-v2 计算节点间余弦相似 \(s^{P}\) 并以自适应阈值 \(\tau_{P}=\mu+\sigma\) 筛选候选重复，仅对候选调用大模型做语义去重得到精简图 \(G=(N, L)\)。随后每条想法 \(n_{i}\) 被转写为可验证问题 \(q_{i}\)，再以产物 y 为证据作答得到 \(a_{i}\)，计算语义一致分 \(s^{R}\)，以双阈值 \(\tau_{hi}=\mu+\sigma\) 与 \(\tau_{lo}=\mu-\sigma\) 分流，仅将模糊区间送入显式验证 \(v_{i}\) 以确定实现标签 \(\ell^{R}\)，同时独立判定意图与想法关系标签 \(\ell^{U}\)，取值为保留、详述、偏移或背离，并按关系类别汇总实现率 \(\Phi\)。整个分析使用冻结的大模型完成推理判断，不更新被分析的创作模型参数，属于离线过程分析，该链路把抽象的知行鸿沟转化为节点级可核查的实现判定，从而使选择性实现与丢失直接可见。

**关键实验与核心代价：** 主评测覆盖 3 种符号作曲设置各 150 个样本，其中旋律配伴奏与旋律续写使用 Pop909 乐句级数据，文字到音乐使用 MidiCaps 中至少包含 2 个可控属性的提示，分析骨干统一为 GPT-4o，并以 15 位音乐领域专家的 4,500 个评分作为参照，专家间组内相关系数 ICC 高于 0.8。消融显示完整配置的意图与想法一致率 I–I Pearson 相关为 0.67，高于无结构表示时的 0.28，想法与产物一致率 I–A Pearson 相关为 0.78，高于无结构时的 0.39，对应平均绝对误差 MAE 分别从 0.38 和 0.25 降至 0.12 和 0.11。跨 15 个 LLM 的诊断显示意图理解并不构成瓶颈，以 Mistral-7B 为例 I–I 为 80.3%，高于同模型 I–A 的 21.3%，即使 GPT-o3 的 I–I 达到 93.8%，其 I–A 仍为 47.1%，全体模型的 I–I–A 仅为 12.4% 至 41.9%。代价方面，自适应剪枝以 11.51 s 达到与逐对验证 244.86 s 相同的非冗余度 0.94，而问答加证据分流以准确率 0.86 和误报率 FPR 0.26 平衡了直接判断的 0.79 准确率与 0.93 高误报。本工作未报告 MOS 主观听测或 UTMOS、DNSMOS、NISQA 等神经代理音频质量指标，也未做音乐审美层面的听感对比，用户研究以 180 位作曲爱好者在 6 周内对照使用 3 套系统，Mutelier 在透明度 5.18、可控性 4.80、协作感 5.25 上高于仅输出基线的 3.58、3.45 和 4.06，差异在 0.01 水平上成立。

**适用边界与深读导览：** 结论成立依赖于 ABC 符号表示、模型显式外化的推理文本以及较强符号音乐理解能力的分析模型，论文报告 GPT-4o 的平均 Pearson 相关为 0.67 而 LLaMA3-8B 仅为 0.42，对应 MAE 分别为 0.12 和 0.28，未外化的潜在内部过程仍不可观测，音频渲染音色、演奏表现与真实部署约束亦未覆盖，论文中未提及可试听演示页。需深究实现判定公式、双阈值分流与意图关系四分类依据可查阅下文方法概述和架构，需核对消融配置、剪枝耗时与 15 模型诊断明细可查阅下文实验结果及表格。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以(x,r,y)三元组与思维图G=(N,L)双阈值验证把跨阶段映射转为节点级可核查判定。

- 核心优势：全配置I–I相关0.67、I–A相关0.78显著优于双基线并含结构剪枝验证的直接消融。

- 核心优势：15位专家4500个评分ICC高于0.8且180位爱好者6周对照用户研究差异显著。

- 主要短板：分析性能依赖强符号理解模型GPT-4o平均相关0.67而LLaMA3-8B仅0.42且仅观测外化推理文本。

- 主要短板：固定提示模板内容未披露且分析骨干统一为GPT-4o可能引入判断偏好尚需对照确认。

- 主要短板：稳定性结论基于单一样本11次重复且每任务150样本对15模型诊断覆盖有限泛化待检验。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 2. [语义空间对齐支撑的细粒度语码切换语音翻译](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0636-ebd392f918/)

> 英文题目：*[Towards Fine\-Grained Code\-Switch Speech Translation with Semantic Space Alignment](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0636-ebd392f918/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-research-portal/papers/?concept=task.speech-translation)
- **研究方法**：[混合专家模型](/audio-research-portal/papers/?concept=method.moe)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual) → [代码转换](/audio-research-portal/papers/?concept=setting.code-switching)
- **模型家族**：[大语言模型](/audio-research-portal/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 6.7/10 | 技术严谨 6.6/10 | 实验充分 7.4/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 6.0/10 | 可复现 4.9/10 | 工程/实践 5.4/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/636) · [官方 PDF](https://ijcai.org/proceedings/2026/0636.pdf)

👥 **作者与机构**

- Yan Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Yazheng Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhibin Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Yidong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Derek F\. Wong：机构信息未能从会议 PDF 纯文本可靠映射
- Jinsong Su：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 代码转换语音翻译以英西混杂或中英混杂语音为输入，要求直接生成英语目标文本，难点在于同一话语内语言交替打断语义连续性。预实验用 Whisper 编码器特征经 t-SNE 降维与 KDE 可视化显示，同语种样本紧密聚集而异语种样本明显分离，证实跨语种存在语义空间间隔。主流做法沿用单个共享投影器连接语音编码器与大语言模型，难以同时贴合不同语种分布，加之大语言模型本身跨语种能力有限，代码转换场景表现弱于单语场景。高质量代码转换语音翻译数据稀缺且人工标注成本高，合成数据又常出现切换生硬与语序紊乱，进一步限制训练。

**核心思路与方法架构：** 与最接近基线 LLaST 的单共享投影器相比，本文保留 Whisper-large-v3 编码器与 Llama-3-8B-Instruct 解码器的总体链路，将投影器替换为按语种分组的混合专家模型并配套四阶段训练。单条样本沿链路流动为语音 s 经编码器得到序列 h，再经 3 层 ReLU 混合专家投影器映射为与大语言模型同维的 hs，最后与提示文本嵌入 ht 拼接为 hz 送入大语言模型生成译文。每语种分配 7 个专家，Fisher 与 NTUML2021 均为 2 组共 14 个专家，推理时全局取 top-7，训练时对大语言模型与语音编码器用 LoRA 微调而对投影器全参数更新。路由按 token 级概率加权求和前 k 个专家输出，语言特有损失约束语音帧路由至对应语种组，组内负载均衡损失促进组内专家分工，跨阶段过渡损失以 λ = b / B 线性混合相邻任务目标。

**关键实验与核心代价：** 主评测在 Fisher 英西混杂与 NTUML2021 中英混杂测试集上进行，指标为 SacreBLEU（越高越好 ↑）与 COMET（越高越好 ↑），同一测试集内直接对比最强可比基线 SeamlessM4T。Fisher 代码转换子集上本文方法 BLEU 为 37.51，高于 SeamlessM4T 的 36.89，COMET 为 77.54，高于 SeamlessM4T 的 76.13；NTUML2021 代码转换子集上本文方法 BLEU 为 39.52，高于 SeamlessM4T 的 38.03，COMET 为 81.33，高于 SeamlessM4T 的 79.93，原文报告四组单语与代码转换测试平均提升 0.86 BLEU 与 0.93 COMET。关键消融显示 NTUML2021 代码转换测试集上去掉混合专家投影器后 BLEU 从 39.52 变为 36.85，COMET 从 81.33 变为 79.95，去掉第一阶段后 BLEU 变为 38.14，去掉第三阶段后 BLEU 变为 37.74。NTUML2021 代码转换验证集上 n 从 3 增至 7 时 BLEU 从 38.02 升至 38.55，n = 7 时 top-1 仅得 27.76 BLEU 而 top-7 达 38.90，更多专家带来计算开销，原文未披露训练时长、硬件与推理时延，任务输出为文本译文故不涉及 MOS 类语音听感指标。

**适用边界与深读导览：** 结论成立前提限于到英语的两个代码转换方向及论文划分的单语与代码转换子集划分，未覆盖更多语种对、反向翻译及真实噪声会议等部署场景。路由分析显示英文与西班牙文帧 top-1 正确组命中率超 95 % 而中文为 85.21 %，提示数据不均衡下中文建模仍有短板。全部质量结论依赖 SacreBLEU 与 COMET 自动指标，论文中未提及人工评估与统计显著性检验。欲深究路由公式、损失定义与消融细节可查阅下方方法概述和架构、实验结果与细节详述对应章节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在Fisher与NTUML2021两套公开代码转换集上以BLEU与COMET双指标一致超越SeamlessM4T等强基线。

- 核心优势：直接消融显示去掉MoE投影器后BLEU从39.52降至36.85，证实核心模块具有因果贡献。

- 核心优势：给出按语种分组MoE路由公式与语言特有损失、组内均衡及四阶段过渡训练的完整形式化定义。

- 主要短板：全部质量结论依赖SacreBLEU与COMET自动指标，未报告人工评估与统计显著性检验。

- 主要短板：未披露学习率优化器批量步数调度、损失权重、训练硬件时长与解码设置，复现关键配置缺失较多。

🔗 **开源资源**

- 代码相关资源：<https://github.com/XMUDeepLIT/CSST-SSA> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档；许可证：Apache-2.0

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 3. [以短关键词替代注册语音的目标说话人提取](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0644-13da1bf46a/)

> 英文题目：*[Detect, Attend and Extract: Keyword Guided Target Speaker Extraction](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0644-13da1bf46a/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[关键词检测](/audio-research-portal/papers/?concept=task.keyword-detection)；[音频分离](/audio-research-portal/papers/?concept=task.audio-separation) → [语音分离](/audio-research-portal/papers/?concept=task.speech-separation) → [目标说话人提取](/audio-research-portal/papers/?concept=task.target-speaker)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[多任务学习](/audio-research-portal/papers/?concept=method.multitask)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.8/10 | 技术严谨 6.4/10 | 实验充分 7.2/10 | 清晰度 6.6/10 | 影响力 6.7/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 5.4/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/644) · [官方 PDF](https://ijcai.org/proceedings/2026/0644.pdf)

👥 **作者与机构**

- Haoyu Li：School of Intelligence Science and Technology, Nanjing University, Suzhou, China；X\-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China
- Yu Xi：X\-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China；ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Yidi Jiang：National University of Singapore, Singapore
- Shuai Wang：School of Intelligence Science and Technology, Nanjing University, Suzhou, China；Shenzhen Loop Area Institute, Shenzhen, China
- Kate Knill：ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Mark Gales：ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Haizhou Li：The Chinese University of Hong Kong, Shenzhen, China；Shenzhen Loop Area Institute, Shenzhen, China
- Kai Yu：X\-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China

📌 **核心摘要**

**问题与瓶颈：** 目标说话人提取 (Target Speaker Extraction, TSE) 需从多名竞争说话人的混合波形 x 中恢复目标波形 y，依赖提示线索 q 指明提取对象。主流路线依赖干净注册语音提取全局说话人向量，或依赖唇动与波达方向 (Direction of Arrival, DOA) 等持续辅助线索，在临时会议与语音助手交互中难以为所有潜在说话人预先注册干净语音，也难以要求目标保持固定位置或唇部持续可见。根本困难在于如何由仅覆盖约三成转录的局部关键词推断全局说话人表示，完成内容与说话人对齐后再提取整句语音。

**核心思路与方法架构：** 与干净注册语音基线相比，实质增量是用混合信号自身与短关键词转录经跨模态对齐生成的说话人向量替代外部注册向量，保留基于频带分割循环网络 (Band-Split RNN, BSRNN) 的掩码提取主干。以 16 kHz 混合语音为例，信号经短时傅里叶变换 (Short-Time Fourier Transform, STFT) 得到时频谱，另一路提取 80 维对数梅尔滤波器组 (Filterbank, FBank) 特征送入基于 Transformer 的语音编码器，关键词经音素嵌入与文本编码器得到潜在表示，在每层语音编码块中以语音为查询、关键词表示为键值做交叉注意力融合。STFT 采用 512 点窗与 128 点跳，FBank 采用 25 ms 窗与 10 ms 移，融合后多层表示经加权求和与时间平均池化得到固定维度说话人向量，该向量条件化 BSRNN 估计的复数谱掩码，相乘后经逆变换重建波形。训练分两阶段，先以连接主义时间分类 (Connectionist Temporal Classification, CTC) 语音识别损失与说话人验证损失联合训练关键词引导的线索编码器，再冻结该编码器训练提取主干，推理时若检测判定关键词缺失则直接输出静音，否则执行关注与提取，整体为整句输入的离线处理。检测阶段对末层音素级交叉注意力图做动态规划搜索，以 O (Lkw T) 复杂度求最大路径分数并与阈值比较判定存在性与起止帧。

**关键实验与核心代价：** 在 Libri2Mix 双说话人全重叠 min 版本 16 kHz 测试集上，以 4 个连续关键词约占完整转录 28.4% 为线索的 DAE-TSE 在多项指标上高于干净注册语音基线与多层说话人表示基线，尺度不变信噪比提升 (Scale-Invariant Signal-to-Noise Ratio improvement, SI-SNRi，越高越好 ↑) 为 16.45 dB，高于标准系统的 13.52 dB 与多层系统的 16.08 dB，提取准确率 (Accuracy，越高越好 ↑) 为 98.98%，高于 90.83% 与 97.18%，感知语音质量评估 (Perceptual Evaluation of Speech Quality, PESQ，越高越好 ↑) 为 2.87，高于流水线的 2.84 与标准及多层系统的 2.86，短时客观可懂度 (Short-Time Objective Intelligibility, STOI，越高越好 ↑) 为 95.18，高于标准系统的 89.51 与多层系统的 93.71，说话人相似度 (Speaker Similarity, SPK-SIM，越高越好 ↑) 为 0.982，高于标准系统的 0.967 与多层系统的 0.978，差分词错率 (Differential Word Error Rate, dWER，越低越好 ↓) 为 13.62%，低于 19.84% 与 15.14%。消融显示移除关键词感知的 CTC 损失后 SI-SNRi 从 16.45 dB 变为 3.47 dB，准确率从 98.98% 变为 70.15%，单个关键词仍达 15.34 dB，高于标准系统的 13.52 dB，而 4 个关键词与完整转录的 16.48 dB 差距可忽略，关键词定位起止误差均在 100 ms 量级。代价方面，参考无关的感知质量估计 (Deep Noise Suppression Mean Opinion Score, DNSMOS，越高越好 ↑) 总分 OVRL 为 3.14，低于流水线基线的 3.17，未形成全面领先，论文未提供人工主观平均意见分 (Mean Opinion Score, MOS) 听测，仅以客观与神经代理指标评估，且未披露推理时延与吞吐实测。

**适用边界与深读导览：** 结论成立前提为英文 Libri2Mix 双说话人全重叠混合、线索编码器预训练与主干训练说话人互不重叠、关键词在混合中可能缺失且缺失时输出静音、多名说话人说出同一关键词时随机选择其一，未覆盖三人以上、稀疏重叠、背景噪声与混响等挑战场景，论文结论亦将此类鲁棒性列为未来工作。可对照随文公开的演示页试听关键词存在与缺失时的对齐与提取现象，但不应将其视为定量证据。欲深究交叉注意力对齐与联合损失公式、检测动态规划与阈值影响、关键词长度与损失消融及嵌入可视化，可查阅下方方法概述和架构、实验结果与细节详述对应章节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以仅占平均转录28.4%的4个连续关键词在SI-SNRi等6项指标上超越干净注册语音标准与多层强基线，SI-SNRi达16.45dB。

- 核心优势：直接消融移除CTC损失后SI-SNRi从16.45dB跌至3.47dB且准确率从98.98%跌至70.15%，内容对齐因果证据扎实。

- 主要短板：DNSMOS总分3.14低于全部基线且全文无人工MOS盲测，仅凭客观与神经代理指标无法支撑人类感知更优主张。

- 主要短板：结论仅限英文双人全重叠模拟混合，未覆盖三人以上、稀疏重叠、背景噪声混响，多人同说关键词随机选择未经评估。

- 主要短板：Transformer层数维度与BSRNN子带数宽度等关键结构配置未说明，复现所需核心架构细节缺失较多。

🔗 **开源资源**

- 论文所列链接：<https://github.com/GnafiY/DAE-TSE> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 4. [复杂影视场景的零样本配音：数据流程与多模态模型如何协同](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0654-42e51178c5/)

> 英文题目：*[FunCineForge: A Unified Dataset Pipeline and Model for Zero\-Shot Movie Dubbing in Diverse Cinematic Scenes](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0654-42e51178c5/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音配音](/audio-research-portal/papers/?concept=task.dubbing)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.6/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.3/10 | 影响力 6.6/10 | 开源 6.0/10 | 可复现 5.8/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/654) · [官方 PDF](https://ijcai.org/proceedings/2026/0654.pdf)

👥 **作者与机构**

- Jiaxuan Liu：National Engineering Research Center of Speech and Language Information Processing
- Yang Xiang：Independent Researcher, Beijing, China
- Han Zhao：Independent Researcher, Beijing, China
- Xiangang Li：Independent Researcher, Beijing, China
- Zhenhua Ling：National Engineering Research Center of Speech and Language Information Processing

📌 **核心摘要**

**问题与瓶颈：** 电影配音以无声视频片段、配音脚本、分段级时间戳、文本指令与参考语音为输入，合成与画面时间对齐、口型同步且保留目标音色与情感的语音，视频为 25 fps，音频为 16 kHz。基于唇部区域学习对齐的路线依赖清晰正脸高分辨率唇动，在遮挡、频繁切镜、多人共存、远距离与低分辨率实拍场景中无法建立可靠视听对应。依赖单人清晰人脸与一致音色的质量与相似度路线在人脸切换、音色切换与中间静音段出现截断与泄漏，而指令驱动的多模态大语言模型路线受限于 V2C-Animation 仅 6.8 小时、短片段独白为主、高词错误率与稀疏标注的手工数据，难以训练复杂场景。

**核心思路与方法架构：** 与最接近的指令驱动基线相比，本文保留多模态大语言模型加流匹配声学解码主干，增量为显式时间模态、帧级唇对比弱监督与支持切换的声学解码，并配套自动化数据管线。25 fps 视频每 5 帧采样得到 5 fps 序列再上采样回原帧率，与 25 Hz 语音词元对齐，16 kHz 人声经人声分离去伴奏、语音活动检测切分并剔除重叠语音后，由自动语音识别转写加精对齐得到字符级时间戳。音频用说话人嵌入模型提身份向量，视觉用轻量检测加说话人检测选主说话人并经关键点定位唇区与人脸编码器提身份嵌入，联合聚类输出富转录时间标记，再由大模型纠错生成性别、年龄、音色、语速与情感指令，编辑距离大于 72% 或身份不一致样本丢弃，不确定属性填 `` `<unknown>` `` 并掩码。指令与脚本拼接作字节对编码文本词元，时间戳-说话人分词器用 1500 个帧索引码本编码 60 秒内起止时间并联说话人属性词元，以强监督约束何时说与谁在说，以语音活动损失与交叉熵约束说什么，以唇对比损失细化对齐，流匹配在每段前静音词元后插入对应说话人嵌入并经扩散 Transformer 重建梅尔谱再经声码器成波。两模块在 CineDub 上分别训练 20 轮以上并以 0.5B 语音模型初始化，编码器是否冻结未说明，单片段限 60 秒，流式与实时未说明，直接应对切镜切换与平均音色问题。

**关键实验与核心代价：** 在 CineDub 独白测试集上，本文模型唇同步置信度 LSE-C 为 8.92，高于 InstructDubber 的 8.08，唇同步距离 LSE-D 为 3.60，低于 7.93，说话人边界保真误差 SBFE 为 0.073，低于 0.156，说话人余弦相似度 SSIM 为 78.62，高于 74.53，词错误率 WER 为 4.30，低于 12.80，字符错误率 CER 为 1.49，低于 5.05，自然度预测 UTMOS 为 3.97，高于 3.82，但梅尔倒谱失真经动态时间规整 MCD-DTW 为 4.17，差于 InstructDubber 的 3.84，未实现全指标最优，而时长加权变体 MCD-DTW-SL 为 4.25，优于 5.23。消融显示去除时间戳-说话人元组后独白 SBFE 从 0.073 升至 0.084，去除唇对比损失后独白 SSIM 降至 75.20，去除说话人切换拼接后多说话人 SSIM 降至 54.64，明显低于完整模型多说话人场景 64.51 的水平。听感仅报告情感风格一致性人工平均意见分 ES-MOS 与神经代理指标 UTMOS，未说明听众数与置信区间，也缺大规模人工自然度听测，主客观一致性无法核验。主要代价是管线串联多个专用模型与大模型验证且训练需 8 张 NVIDIA A100 GPU，推理时延与实时率未披露，论文亦承认片段变长与场景变复杂时对齐与口型同步下降。

**适用边界与深读导览：** 结论成立依赖准确分段时间戳-说话人元组、参考语音与 55 词左右结构化指令，适用于 60 秒内中英标准发音、人声突出的电视剪辑独白、旁白、对话与多说话人场景，重叠语音已被丢弃。不适用于无时间戳、无参考音色、强遮挡远距离低分辨率与实时流式部署，完整 9000 小时数据因版权仅提供抽样，泛化受限。演示页可对照试听对齐与音色切换现象，公式与机制细节见方法概述，消融与跨场景退化见实验结果，数据规模与指令分布见细节详述。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同数据独白测试中WER 4.30、LSE-D 3.60、SBFE 0.073等多项显著优于InstructDubber与DeepDubber-V1，优势可核对。

- 核心优势：去除时间戳-说话人元组、唇对比损失与说话人切换拼接均导致对齐或相似度退化，形成三组件直接因果证据。

- 核心优势：四阶段自动化管线串联人声分离、对齐、视听聚类与大模型纠错，支撑9000小时多场景CineDub构建与质量提升。

- 主要短板：全指标最优主张与表字面矛盾，本文MCD-DTW 4.17差于InstructDubber的3.84，未实现全优。

- 主要短板：情感一致性仅报告ES-MOS而无听众数与置信区间，自然度仅用UTMOS代理而缺大规模人工听测。

- 主要短板：72%过滤阈值、温度γ与权重w_t、冻结策略与推理代价等关键配置均未披露，削弱可复现性。

🔗 **开源资源**

- 论文所列链接：<https://github.com/FunAudioLLM/FunCineForge/> → <https://github.com/QwenAudio/FunCineForge> — 链接可访问（HTTP 200）

- 代码相关资源：<https://funcineforge.github.io/> — 链接可访问（HTTP 200）

- 演示资源：<https://funcineforge.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 5. [用音素指纹守护特定人物的声音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0667-d3f3ce476d/)

> 英文题目：*[Profiling the Voice: Speaker\-Specific Phoneme Fingerprinting for Speech Deepfake Detection](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0667-d3f3ce476d/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing)
- **研究方法**：[自监督学习](/audio-research-portal/papers/?concept=method.self-supervised)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.1/10 | 技术严谨 6.5/10 | 实验充分 7.7/10 | 清晰度 5.6/10 | 影响力 6.3/10 | 开源 6.0/10 | 可复现 5.1/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/667) · [官方 PDF](https://ijcai.org/proceedings/2026/0667.pdf)

👥 **作者与机构**

- Jun Xue：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Tong Zhang：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Zhuolin Yi：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Yihuan Huang：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Yi Chai：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Yiyang Zhang：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University
- Yanzhen Ren：Key Laboratory of Aerospace Information Security and Trusted Computing, Ministry of Education；School of Cyber Science and Engineering, Wuhan University

📌 **核心摘要**

**问题与瓶颈：** 个性化语音伪造检测面向特定被保护人物 (person-of-interest, POI)，输入为待测语音与该人物少量真实参考语音，输出为真伪判定及音素级可疑定位。现有通用检测多以自监督学习 (self-supervised learning, SSL) 嵌入加黑盒分类器建模整句声学模式，决策边界易偏向合成器与语料层面的频谱伪影。当攻击者用目标人物真实语音做零样本克隆时，此类伪影被抹平，细微的个人发音习惯差异难以捕捉，且整句分数无法解释何处异常。音素实现虽共享类别，却受个人声道结构与习惯性协同发音塑造而保持稳定，现有工作仅将其作整句分类的辅助信号，未做人物专属分布建模。

**核心思路与方法架构：** 与最接近的音素辅助通用基线相比，本文保留 SSL 声学表示与说话人嵌入，仅把整句二分类改为按音素建模个人发音分布的验证，并以分层回退与分数融合保证覆盖。单条待测语音先经微调过的 SSL 主干提取帧级嵌入序列，再由联接时间分类 (Connectionist Temporal Classification, CTC) 对齐器给出每个音素实例的起止帧并做均值池化得到音素向量，同时用冻结的 ECAPA-TDNN 提取整句全局说话人嵌入。建档阶段仅用约 1% 真实语音为每个音素拟合对角协方差的高斯混合模型 (Gaussian Mixture Models, GMMs)，并以参考样本平均对数似然的指数缩放得到可靠性权重，同步为全局嵌入拟合另一 GMM。推理时按显著音素交集、全部参考音素、大类映射三层回退选择可用证据，经 Sigmoid 归一化后得到音素分，再以系数 α = 0.8 与全局身份分线性插值得到最终分，偏离个人分布的音素以低置信热图标出。对齐器与说话人嵌入参数冻结，仅 GMM 统计量从参考语音估计，整个流程为离线建档加逐句验证，不依赖伪造数据训练，因而对未见合成算法保持算法无关。

**关键实验与核心代价：** 在自建中文 ZH-Famous 与英文 Famous Figures (EN-Famous) 上，以等错误率 (Equal Error Rate, EER, 越低越好 ↓) 与曲线下面积 (Area Under ROC Curve, AUC, 越高越好 ↑) 为指标，本文方法在论文表 3 所列 9 种通用基线中取得最好结果：ZH-Famous 上 AUC 从次优的 61.63% 提高到 94.58%，EER 从 41.74% 降低到 11.37%，EN-Famous 上 AUC 从 64.49% 提高到 96.61%，EER 从 39.50% 降低到 7.24%。即插即用评测显示各 SSL 主干均获益，例如 hubert-xlarge 在 ZH-Famous 上 EER 从 39.80% 降低到 19.21%，AUC 从 63.70% 提高到 89.36%，wav2vec2-small 在 EN-Famous 上 EER 从 24.16% 降低到 9.93%，AUC 从 84.58% 提高到 96.17%。消融显示去掉音素建模改用整句建模后 ZH-Famous 上 AUC 从 94.58% 回落到 92.80%，EER 从 11.37% 回升到 14.95%，证实细粒度建模为主收益来源。代价侧同样明确：EN-Famous 上用余弦相似度替代 GMM 的变体 AUC 为 98.16%，高于完整模型的 96.61%，去掉全局嵌入的变体 AUC 为 98.42%，同样高于完整模型，说明增益并非在全部条件下一致，完整模型胜在跨数据集平均最稳。全文未报告人工主观听测的平均意见分 (mean opinion score, MOS) 或 ABX，仅用 EER 与 AUC 及可视化热图示意可解释性，也未披露实时因子 (real-time factor, RTF) 或推理时延等部署成本，轻量之称缺乏实测支撑。

**适用边界与深读导览：** 上述结论成立前提是拥有目标人物纯净真实参考语音、测试内容可被对齐器切分为已知音素且合成攻击未针对音素分布做自适应抹平，未覆盖强噪声、电话信道、大规模说话人、流式实时与对抗自适应等场景，文中亦未提供可试听的音频演示页供对照感知现象。深读时可对照第 4.2 节至第 4.5 节核对 GMM 建模、显著音素筛选、分层决策与混合融合的公式与超参，第 5.2 节至第 5.5 节核对跨主干、跨语种对比、消融与个案热图，表 3 与表 4 集中呈现与最强基线的差距及非一致性证据。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在ZH-Famous上AUC从61.63%提升至94.58%、EER从41.74%降至11.37%，9基线对比下优势可逐格核对。

- 核心优势：跨hubert-xlarge等多主干即插均获益，且去音素建模退化最一致，证实细粒度建模为主收益来源。

- 主要短板：EN-Famous上w/o GMM的AUC为98.16%高于完整模型96.61%，w/o Speaker Embedding达98.42%同样反超，单组件增益并非无条件成立且无显著性检验。

- 主要短板：以轻量自居却未披露RTF、推理时延与测试硬件规格，部署成本主张与验证脱节。

- 主要短板：式8与式9复用β_spk与γ_spk需按上下文区分，且EM求解器、自适应Kp规则与可靠性缩放α取值均未说明。

🔗 **开源资源**

- 代码相关资源：<https://github.com/JunXue-tech/PVP> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）

- 数据相关资源：<https://github.com/JunXue-tech/PVP> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 6. [情绪保留的条件瓶颈如何实现无域标注的语音情感泛化](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0414-b28c2719d7/)

> 英文题目：*[An Emotion\-Preserving Conditional Information Bottleneck for Domain\-Generalizable Speech Emotion Recognition](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0414-b28c2719d7/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)
- **研究方法**：[对抗训练](/audio-research-portal/papers/?concept=method.adversarial-training)；[对比学习](/audio-research-portal/papers/?concept=method.contrastive)；[迁移学习](/audio-research-portal/papers/?concept=method.transfer) → [域泛化](/audio-research-portal/papers/?concept=method.domain-generalization)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.6/10 | 实验充分 7.9/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 4.3/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/414) · [官方 PDF](https://ijcai.org/proceedings/2026/0414.pdf)

👥 **作者与机构**

- Zhichen Yuan：South China University of Technology
- C\. L\. Philip Chen：South China University of Technology
- Shuzhen Li：Lund University
- Tong Zhang：South China University of Technology

📌 **核心摘要**

**问题与瓶颈：** 领域泛化语音情感识别以未知说话人、语言与录制条件下的稳定识别为目标，输入为连续语音经 HuBERT 模型提取的声学表示，输出为话语级情绪类别标签。现有对齐式与对抗式路线依赖语料或说话人等域标签，仅在预定义域间拉齐分布，难以覆盖开放组合的长尾偏移。情绪与干扰因素共享基频与能量等声学载体，在话语级弱监督下情绪证据时间稀疏不均，无条件不变性在抑制干扰时易连带丢弃可判别结构。

**核心思路与方法架构：** 与依赖隐式域代理的既有免域方法相比，EP-CIB 的增量在于显式学习情绪抑制的干扰代理并在标签条件下解耦，训练全程无需任何域标注。单条话语先经两路编码，干扰代理编码器基于 ECAPA-TDNN 骨干对全话语与 K 个裁剪视图做多层教师学生对齐，教师以指数滑动平均更新，对比项在同情绪类内区分干扰差异，梯度反转层在多层去除残留情绪泄漏。情绪编码器将帧特征切分为重叠块并前置可学习 `[CLS]` 针点，经聚类按与针点的相似度估计标签一致性，再按一致性排序路由至不同容量专家并以交叉注意力融合得到粗粒度表示。标签条件瓶颈以可学习类条件均值残差化干扰代理与情绪表示，再以线性核 HSIC 度量类内依赖并与情绪分类损失联合优化，在保留共享载体判别性的同时压缩干扰导致的类内离散。HuBERT 模型仅作为输入特征来源，论文未说明是否冻结微调，整体按离线话语级推理设计，未声称流式因果约束。

**关键实验与核心代价：** 在说话人无关划分下，EmoDB 上 EP-CIB 的加权平均召回率（Weighted Average Recall，WAR）↑ 为 95.72%，未加权平均召回率（Unweighted Average Recall，UAR）↑ 为 95.64%，高于同表去瓶颈变体的 88.12% 与 87.51%，也高于 DTNET 的 91.43% 与 91.12%。说话人相关十折划分下，EmoDB 上 EP-CIB 为 99.20% 与 99.06%，高于 AMHNET 的 98.11% 与 98.15%，IEMOCAP 上为 82.34% 与 81.48%，高于 EFNET 的 79.30% 与 79.14%。跨语料平均上，EP-CIB 的 WAR ↑ 为 61.70%，高于 GDDA 的 52.12% 与去瓶颈变体的 44.58%，其中 EmoDB 到 CASIA 方向从 47.89% 变为 65.66%，与摘要称约 18% 提升的描述一致。关键消融显示去掉多层对抗去情绪后 EmoDB 说话人相关 WAR 从 99.20% 变为 92.05%，同时去掉聚类与多专家后变为 93.67%，探测显示干扰代理情绪仅 27.38% 而说话人、性别与语言分别高达 91.96%、98.03% 与 88.14%，情绪表示经瓶颈后情绪从 73.26% 变为 84.57% 而三项干扰降至 17.96%、35.15% 与 29.83%。本任务为分类识别，不涉及语音生成听感评测，故无人工主观平均意见分与神经代理指标比较需求，原文亦未披露延迟、吞吐或参数量等部署代价。

**适用边界与深读导览：** 结论成立前提为仅用话语级情绪标签且无需任何域标注，在 IEMOCAP、CASIA、EmoDB 与 RAVDESS 共 3 种语言的表演性语料上验证，未覆盖自发情绪、强噪声与实时交互等部署条件。CASIA 到 EmoDB 方向作者承认细粒度时频方法在 UAR 上仍具优势，IEMOCAP 说话人无关 UAR 为 75.15%，略低于 AEDD 的 75.47%，提示清晰表演语音与离散证据语料间的稳定性差异。方法 3.3 节给出标签条件解耦推导，3.1 节与 3.2 节给出代理与情绪编码细节，实验 4.3 节至 4.5 节给出完整消融、探测与可视化依据。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：跨语料平均WAR达61.70%显著高于GDDA的52.12%，其中EmoDB到CASIA方向从47.89%提升至65.66%。

- 核心优势：直接消融覆盖代理三约束与情绪两机制，去多层对抗后WAR从99.20%降至92.05%因果链完整。

- 核心优势：线性探测显示干扰代理情绪仅27.38%而说话人性别语言高达91.96%以上，瓶颈后情绪升至84.57%而干扰大降。

- 主要短板：以情绪抑制代理替代不可观测干扰的充分性假设未予证明，类条件残差近似有效性缺乏理论保证。

- 主要短板：关键超参与结构缺失较多，λc、λa、τ、K、对齐层、块长步长、β与优化器训练配置均未披露。

- 主要短板：无显著性检验且EmoDB仅535条下相关精度高达99.20%存在小库过拟合风险，IEMOCAP无关UAR略低于AEDD。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 7. [切分频率与通道子空间的环境声音伪造检测](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0471-be88e06d86/)

> 英文题目：*[BEAT2AASIST: BEATs Feature Splitting with Dual\-Branch AASIST for Environmental Sound Deepfake Detection](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0471-be88e06d86/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[图神经网络](/audio-research-portal/papers/?concept=method.gnn)
- **信号**：[环境声](/audio-research-portal/papers/?concept=signal.environmental)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 6.6/10 | 技术严谨 6.7/10 | 实验充分 7.5/10 | 清晰度 5.6/10 | 影响力 6.2/10 | 开源 6.0/10 | 可复现 6.0/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/471) · [官方 PDF](https://ijcai.org/proceedings/2026/0471.pdf)

👥 **作者与机构**

- Sanghyeok ‍Chung：Department of Mathematics, Korea University, South Korea
- Seungsang Oh：Department of Mathematics, Korea University, South Korea
- Donggun Kim：Department of Mathematics, Korea University, South Korea
- Jeongbin You：Department of Mathematics, Korea University, South Korea
- Il\-Youp Kwak：Department of Statistics and Data Science, Chung\-Ang University, South Korea；Department of Smart Cities, Chung\-Ang University, South Korea
- Gaeun Heo：Department of Statistics and Data Science, Chung\-Ang University, South Korea
- Eujin Kim：Department of Statistics and Data Science, Chung\-Ang University, South Korea
- Nahyun Lee：Department of Smart Cities, Chung\-Ang University, South Korea
- Sunmook Choi：Center for Applied Mathematics, Cornell University, USA
- Soyul Han：Department of Big Data Application, Hannam University, South Korea

📌 **核心摘要**

**问题与瓶颈：** 环境声音伪造检测以 16 kHz 采样、固定 4 秒时长的环境录音为输入，输出真实与伪造的二分类判定，需在文本到音频与音频到音频生成伪造下同时应对未知生成器泛化与黑盒低资源两种部署条件。与语音不同，环境声覆盖多样非语言事件且时序结构松散，声学条件变化大，对未知合成管线的泛化更为困难。官方基线将通用音频基础模型双向音频 Transformer 编码表示 (Bidirectional Encoder representation from Audio Transformers, BEATs) 输出的 768 维分片嵌入展平为一维词元序列后送入单个分类器，显式频谱时间结构在展平中丢失，且仅依赖最后一层 Transformer 嵌入，难以保留频率依赖或通道特异的细微伪造痕迹，在生成器多样性不足时易过拟合特定合成痕迹。

**核心思路与方法架构：** 与最接近基线的实质差异在于保留前端整体微调与图注意力后端不变，将统一表示显式拆分为两个互补子空间并行建模，再以顶部多层融合与分赛道声码器增强补足多样性。输入经截断或重复补齐至固定长度后转为 25 ms 帧长、10 ms 帧移与 128 个梅尔滤波器组的梅尔频谱图，按 16×16 频率时间分片嵌入为 (H×W, 768) 维词元序列，其中 H 与 W 分别为频率与时间方向分片数。频率切分将该序列重排为 (H, W, 768) 后沿频率轴均分为低频与高频两路，通道切分则沿嵌入维切为 2 路 (H×W, 384)，每路送入独立的音频反欺骗图注意力网络 (Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks, AASIST) 建模互补线索后融合判定，全参数微调直击展平导致的结构丢失。顶部 k 层融合提供拼接、卷积门控与压缩激励门控三种形式，门控权重经归一化加权求和为统一表示后再切分，第 1 赛道仅用 HiFi-GAN，第 2 赛道叠加 UnivNet 与 BigVGAN 并配合 SpecAugment 缓解黑盒分布不确定性。

**关键实验与核心代价：** 在 EnvSDD 数据集上以等错误率 (equal error rate, EER) 评测，第 1 赛道测试集含 1,000 个真实样本与 3,000 个未知生成器伪造样本，第 2 赛道测试集含 1,994 个真实样本与 7,980 个黑盒伪造样本。榜单对照采用同一 Test EER 量表，最终成绩为第 1 赛道 Test EER 为 1.60 位列第 4，第 2 赛道 Test EER 为 0.35 位列第 3，分别高于同榜第 1 名的 0.30 与并列 0.25。单模型层面，第 1 赛道通道切分结合压缩激励门控融合 (k 为 10) 在 HiFi-GAN 增强下评测 EER 为 1.66% 且测试 EER 为 1.70%，低于同条件基线的 1.69% 与 1.88%，第 2 赛道频率切分结合卷积门控融合 (k 为 4) 在三种声码器增强下评测 EER 为 0.42% 且测试 EER 为 0.46%，低于同赛道拼接基线的 0.61% 与 0.75%。消融在学习率为 7×10^-7 下复测 5 个单模型，移除声码器增强退化最大，代表列评测 EER 从 1.45 变为 2.54 且测试 EER 从 1.60 变为 2.60，第 2 赛道代表列从 0.43 变为 1.83 且从 0.46 变为 1.75，另两列测试 EER 分别退化至 1.91 与 1.96，移除特征切分或多层融合亦在两赛道一致劣化。最终系统以 2 个与 3 个模型集成少于榜首的 5 个模型，论文未披露推理时延、吞吐或显存代价且未做人工听测，检测任务以 EER 为准不涉及平均意见分 (Mean Opinion Score, MOS) 类听感指标。

**适用边界与深读导览：** 结论成立前提为 16 kHz、4 秒切分的 EnvSDD 环境声与挑战定义的未知生成器及黑盒划分，未覆盖长音频流中伪造片段的时间定位、多模态联合验证与生成技术持续演进下的在线适应，部署所需的延迟、算力与跨设备鲁棒性亦未验证，不宜直接外推至其他采样率或语种场景。欲深究切分维度选择与门控融合公式可查阅下方方法概述和架构对双分支与三种融合的展开，欲核对集成权重、声码器组合与各组件贡献可查阅下方实验结果对榜单与消融表的对照及训练配置。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：双分支切分与多层融合经直接消融验证，移除任一组件两赛道EER一致劣化且单模型超越同条件基线。

- 核心优势：在EnvSDD两赛道公开榜单分别取得第4名1.60%与第3名0.35%，以2个与3个集成少于榜首5个实现有竞争力成绩。

- 核心优势：分赛道声码器增强保留语义引入合成偏置，Track2叠加三种声码器提升黑盒鲁棒性且消融中退化幅度最大。

- 主要短板：未报告置信区间与统计检验，集成权重按单模型精度经验选择而无交叉验证说明。

- 主要短板：表1验证集排版对齐不清且表2部分集成行N/A与表4榜单测试成绩无法逐格对应原文未解释。

- 主要短板：硬件型号数量与训练时长缺失使训练成本不可核对，后端AASIST关键超参细节亦未披露。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ikwak2/BEAT2AASIST> — 链接可访问（HTTP 200）；README 已验证包含微调文档（未见安装、推理文档）；许可证：MIT

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 8. [公式朗读如何让盲生听懂科学符号](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0812-a2871d2f2c/)

> 英文题目：*[Improving Scientific Formula Verbalization in Large Speech Language Models for Accessible Learning](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0812-a2871d2f2c/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **应用**：[无障碍](/audio-research-portal/papers/?concept=application.accessibility)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.4/10 | 影响力 6.0/10 | 开源 6.0/10 | 可复现 6.3/10 | 工程/实践 4.9/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/812) · [官方 PDF](https://ijcai.org/proceedings/2026/0812.pdf)

👥 **作者与机构**

- Xueyi Li：Guangdong Institute of Smart Education, Jinan University
- Tianqiao Liu：TAL Education Group
- Zitao Liu：Guangdong Institute of Smart Education, Jinan University
- Teng Guo：Guangdong Institute of Smart Education, Jinan University
- Yongdong Wu：Guangdong Institute of Smart Education, Jinan University

📌 **核心摘要**

**问题与瓶颈：** 在线学习中视障学生依赖 AI 助教的语音反馈理解课程，当内容涉及科学公式时只能通过朗读获知结构与语义。论文将任务定义为把 LaTeX 符号序列 x 输入映射为口语化语音词元序列 y 输出，公式具有紧凑层级语法与学科语义，通用语音模型难以直接对齐。主流级联管线串联 ASR 与 LLM 与 TTS，存在高时延与跨阶段误差累积。端到端大语音语言模型虽支持低时延交错生成，却在符号发音上频繁出错，例如将分式乘法读成含 frac 的非自然形式，根因是预训练缺乏公式文本与语音配对，大规模公式预训练又难以获取。

**核心思路与方法架构：** 与最接近的骨干 GLM-4-Voice 相比，增量在于冻结原始参数并插入轻量公式语义适配器，仅以 LoRA 更新查询键值投影，同时新增双语三学科配对数据与重复惩罚加语言模型评判的 GRPO 奖励。单条样本以 LaTeX 输入 \(\frac{1}{2}\) 为例，文本编码器与语音编码器分别输出文本词元与语音词元，对齐后的序列经交错解码同时产生文本片段与语音波形，目标朗读为 One over two。训练分两阶段，先用 EduDialogue 的 3417 段多轮对话与 SciFormula 的 SFT 切分学习公式到口语的基本映射，再用 RL 切分采样 8 个候选并以组内归一化奖励优化简洁性与正确性，骨干权重冻结而适配器更新，论文未披露采样率与帧率故不展开每秒张量形态。

**关键实验与核心代价：** 在 Math2k 中文测试上，Formula-Speech 的 WER（词错率，越低越好 ↓）为 0.3421，低于 Step-Audio 的 0.9846，BLEU（越高越好 ↑）为 0.7082，高于 Step-Audio 的 0.4210，LLMS（0 至 3 分，越高越好 ↑）为 1.5032，高于 Step-Audio 的 1.1019，HumanS（人工准确性，0 至 3 分，越高越好 ↑）为 1.7140，高于 Step-Audio 的 1.1190，三学科英文与中文共 12 组 WER 与 BLEU 均为最优。端到端模型在 4 组平均指标上超过 Whisper-Large-v3 加 Qwen2.5-7B-Instruct 加 CosyVoice2 级联管线，图示未给出可核对数值。消融显示 LoRA-SFT 的平均 WER 为 0.5039，而完整两阶段 LoRA-SFT 加 GRPO 的平均 WER 为 0.5166，平均 BLEU 从 0.5203 变为 0.5297，平均 LLMS 从 1.3709 变为 1.4084，RL 以轻微词级差异换取语义提升。语音质量以 NMOS（归一化平均意见分，最高 5 分，越高越好 ↑）神经代理估计与 HumanF（人工流畅度，0 至 3 分，越高越好 ↑）衡量，图 4 未附数值表，像素显示 Formula-Speech 中文 HumanF 高于 Qwen2.5-Omni，GLM-4-Voice 英文 HumanF 为全场最低而 Formula-Speech 英文明显更高，故正文关于平均最高与两者相近的合并表述与分语言像素不一致，不作为定量结论，代价是 8 个节点各 8 张 NVIDIA A100 GPU 的训练开销。

**适用边界与深读导览：** 结论成立于中英文双语数学与物理与化学公式朗读，且训练语音由 CosyVoice2 合成并经专家复检，评测依赖特定 ASR 转写与 Claude Sonnet 4 打分，未覆盖真实课堂噪声与超长嵌套公式及视障学生的长期学习增益。部署层面未实测流式时延与 RTF（实时因子，越低越好 ↓），8 节点训练成本限制了极低资源复用。深究编码器与适配器与解码器的数据流可查阅下方方法概述和架构，消融与三学科细分可查阅下方实验结果，复现配置可查阅下方细节详述。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：Formula-Speech 9B在Math2k中英文WER低至0.3421与BLEU高达0.7082且三学科12组自动指标均为最优。

- 核心优势：五配置直接消融覆盖全参数与LoRA对照，证实须先经SFT建立对齐且RL以轻微WER代价提升语义。

- 核心优势：冻结骨干仅更新查询键值LoRA并设计重复惩罚加LLM评判的GRPO奖励，公式推导自洽完整。

- 主要短板：训练奖励与评测共用同一ASR与Claude Sonnet 4，存在自我印证的公平性风险与循环验证隐患。

- 主要短板：宣称低时延流式与端到端优势却未实测RTF与帧延迟，部署主张缺乏测量支撑仅为口头声称。

- 主要短板：图4分语言HumanF像素与正文平均最高与相近合并表述不一致，且化学中文LLMS存在一格例外未解释。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ai4ed/FormulaSpeech> — 链接可访问（HTTP 200）；含权重文件（.bin/.pt/.pth）

- 数据相关资源：<https://github.com/ai4ed/FormulaSpeech> — 链接可访问（HTTP 200）；含权重文件（.bin/.pt/.pth）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 9. [编解码伪造在东南亚语言中的检测空白与轻量小模型方案](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0791-4d8e2744a3/)

> 英文题目：*[Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec\-Synthesized Speech Deepfakes in South\-East Asian Languages](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0791-4d8e2744a3/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.4/10 | 技术严谨 7.3/10 | 实验充分 7.9/10 | 清晰度 5.5/10 | 影响力 7.0/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://ijcai.org/proceedings/2026/791) · [官方 PDF](https://ijcai.org/proceedings/2026/0791.pdf)

👥 **作者与机构**

- Orchid Chetia Phukan：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Arun Balaji Buduru：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 本文处理编解码伪造检测，输入为语音波形，输出为真或伪二分类判定。主流检测器多在声码器合成数据上训练，而音频语言模型依赖神经音频编解码器编码生成语音，其伪影分布与声码器差异明显，导致已有模型跨机制泛化困难。东南亚覆盖 7 亿以上人口，涉及南岛、孟高棉、台卡岱与汉藏等多语系，音位、声调与韵律多样性突出，而现有编解码伪造基准仅覆盖英语与汉语，东南亚语言完全缺位。同期东南亚语音伪造工作仅限声码器且数据集未公开，无法评估编解码路径风险。

**核心思路与方法架构：** 与单编码器大模型微调基线相比，本文增量在于冻结语义与韵律双编码器并以詹森香农散度对齐后接入轻量解码器做问答式判定，其余编解码重建流程保持不变。真实源覆盖泰米尔语、印地语、泰语、印度尼西亚语、马来语与越南语，伪造由 \(q = F(s)\) 与 \(\hat{s} = G(q)\) 重建得到，内容与说话人保持而引入编解码器特有伪影。GARUDA 冻结 Whisper 基础版约 74M 参数与 x-vector 约 4.2M 参数，各输出 512 维表示，经核尺寸为 3 的一维卷积加最大池化与 S 形门控筛选，再以温度系数 0.5 的软最大值转为分布并计算对齐损失。对齐后拼接经 90 个神经元全连接层映射为连续前缀，与固定提示词共同输入 0.5B 参数的 Qwen2 解码器，仅预测 fake 或 real 一词，最终目标为 \(L_{total} = L_{LM} + \lambda L_{JS}\)，其中 \(\lambda\) 为 0.4。

**关键实验与核心代价：** 在可见编解码器条件下混合训练 CodecFake 与 SEA-CF 并分别测试时，GARUDA-FT 在 SEA-CF 上准确率 ACC ↑ 为 99.36% 且等错误率 EER ↓ 为 1.68%，在 CodecFake 上为 98.41% 与 2.78%，平均 98.89% 与 2.23%，高于微调后 Qwen2-Audio-Base 的平均 94.47% 与 5.58%。零样本下 Qwen2-Audio-Base 在 CodecFake 上仅 8.41% 与 91.53%，在 SEA-CF 上仅 19.48% 与 80.47%，而仅在 CodecFake 上训练的 AASIST 从 94.08% 与 6.76% 跌至 SEA-CF 上的 70.65% 与 28.13%，证实跨语言跨机制泛化失效。未见编解码器下 GARUDA-FT 平均仍达 97.59% 与 2.70%，保持最优但较可见条件下降。代价方面，投影与 LoRA 参数合计约 110M，总量仍小于 1B，平均推理耗时为 1.21 秒，低于微调后 Qwen2-Audio-Base 的 12.32 秒。本文仅以 ACC 与 EER 为依据，未做听感评测。

**适用边界与深读导览：** 结论成立依赖域内混合训练与重建式编解码伪造，未覆盖纯文本提示生成语音、真实网络压缩与未见语种等部署场景。泰米尔语与印地语归入东南亚基准的口径与地理界定存在出入，原文沿用 SEA-Spoof 语言集合但未解释。深读可查下方方法概述中的双编码器与损失公式，以及实验结果中可见与未见划分对照表。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首个覆盖6语种8类神经编解码器多采样率的SEA-CF平行重建基准，8:1:1全程保持划分并沿用Indic预设test-known与test-unknown防泄漏。

- 核心优势：可见与未见双条件下GARUDA-FT均列最优且配对McNemar检验p远小于0.05，单编码器与拼接无对齐及交叉注意力与KL及JS直接消融分离互补与对齐贡献。

- 主要短板：未见测试表MiO平均ACC报告88.50%与分项均值89.50%算术不一致且原文未解释，构成表内算术自相矛盾。

- 主要短板：生成样本均为编解码重建而非文本提示完全生成语音，仅用单一提示词模板且未覆盖真实网络压缩与未见语种具体数值。

- 主要短板：平均推理耗时1.21秒对比12.32秒未说明批量音频时长与硬件配置口径，无法核对端到端部署延迟与可复现性。

🔗 **开源资源**

- 论文所列链接：<https://helixometry.github.io/SEACodecFake/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/CodeVault-girish/Neural-Codecs> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 10. [视觉引导的高保真双耳音频生成与大规模伪双耳数据](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0198-7d5b91df46/)

> 英文题目：*[SpatialV2A: Visual\-Guided High\-fidelity Spatial Audio Generation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0198-7d5b91df46/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [空间音频生成](/audio-research-portal/papers/?concept=task.spatial-audio-generation)；[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.5/10 | 技术严谨 6.2/10 | 实验充分 6.7/10 | 清晰度 5.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/198) · [官方 PDF](https://ijcai.org/proceedings/2026/0198.pdf)

👥 **作者与机构**

- Yanan Wang：Shandong University
- Linjie Ren：Shandong University
- Zihao Li：Shandong University
- Junyi Wang：Shandong University
- Tian Gan：Shandong University

📌 **核心摘要**

**问题与瓶颈：** 视频到声音生成以视频帧序列为输入，输出应与画面语义一致且时间同步的音频波形。现有主流路线依赖单声道数据集训练单通道模型，无法学习视觉到双耳空间映射，生成音频缺少声源方向、位置与移动线索，沉浸感不足。论文指出两处根因，一是缺少显式空间化模块，难以从画面定位发声区域并估计相对强度与扩散形态，二是大规模双耳录制需要专用设备与人力，现有双耳数据规模小、类别少或缺少文本标注，难以支撑空间视频到声音建模。

**核心思路与方法架构：** 与最接近的 MMAudio 基线相比，实质增量是保留多模态联合语义与同步表征，同时新增双分支双耳合成与视觉引导空间条件。数据侧以 VGGSound 为源，经时长、静音与质量过滤后由视觉引导 PseudoBinaural 转换得到 187 k 个片段、519 h、309 个类别的 BinauralVGGSound。生成侧文本与视觉分别经预训练 CLIP 编码器提取语义特征，同步特征经 Synchformer 提取，发声热图经预训练 ACL 声源定位网络估计。热图进一步计算水平位置、发声面积占比、热图方差、左右能量偏置与扩散形状共 5 个空间特征，经上采样与卷积多层感知机及层归一化形成空间条件 Cs。音频波形经预训练变分自编码器编码为 20 维、31.25 fps 隐表示，双耳左右隐变量先经 6 个多模态联合 Transformer 块联合更新，再经 12 个单模态双通道块分左右支路独立合成通道差异，推理时从高斯噪声出发经条件流场变换后由变分自编码器解码为梅尔频谱并经 BigVGAN 声码器恢复为 16 kHz 双耳波形。

**关键实验与核心代价：** 主评测在与 BinauralVGGSound 共享视频编号的 3 000 个 VGGSound 测试视频子集上进行，对比单声道模型与空间模型。分布匹配采用弗雷歇音频距离（Fréchet Audio Distance，FAD ↓，越低越好）与库尔贝克莱布勒散度（Kullback-Leibler divergence，KL ↓，越低越好），语义与时间采用 ImageBind 相似度（ImageBind，IB ↑，越高越好）与去同步误差（DeSync ↓，越低越好）。SpatialV2A 的 KL PaSST 为 1.56，低于 MMAudio 的 1.57，KL PANNs 为 1.55，低于 MMAudio 的 1.59，DeSync 为 0.49，低于 MMAudio 的 0.51，FAD PaSST 为 381.90，高于 MMAudio 的 303.92，FAD PANNs 为 12.53，高于 MMAudio 的 8.05，IB 为 0.28，低于 Seeing&Hearing 的 0.36。人工主观平均意见分（Mean Opinion Score，MOS ↑，越高越好，1 分为差，5 分为优，20 名受试者头戴式耳机评分）中时间对齐为 4.14 ± 0.54，高于 MMAudio 的 4.05 ± 0.60，语义对齐为 4.08 ± 0.36，低于 MMAudio 的 4.11 ± 0.31。音频质量与空间评测中 SpatialV2A 的 Inception Score（IS ↑，越高越好）为 14.36 与 14.91，内容享受度（Content Enjoyment，CE ↑，越高越好）为 4.09，内容有用性（Content Usefulness，CU ↑，越高越好）为 5.77，生产质量（Production Quality，PQ ↑，越高越好）为 6.07，耳间互相关（Interaural Cross-Correlation，IACC ↓，越低越好）为 0.51，耳间级差（Interaural Level Difference，ILD ↑，越高越好）为 5.69，MOS 音质为 4.21 ± 0.43，MOS 空间感为 3.90 ± 0.53。消融显示移除空间化后 FAD 变优但语义、同步与空间指标回落，论文未披露推理延迟或吞吐实测。

**适用边界与深读导览：** 结论成立前提是合成双耳信号可作为训练与评测真值，且发声定位与空间渲染依赖 PseudoBinaural 与 ACL 的估计质量，未覆盖真实双耳录制、长视频连贯合成与实时部署场景。有音频质量工具分与人工听测两类证据，试听时应以人工评分为准。欲深究球谐域伪双耳推导、双耳流匹配目标与 5 维空间特征构造，可查阅下方方法概述与实验结果对应表格及公式说明。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：双分支双耳流匹配与5维视觉空间条件Cs构造完整，给出双耳速度场目标与球谐渲染公式支撑。

- 核心优势：在3000视频公开子集对比5个基线，KL与DeSync最低且MOS时间对齐最高，并含移除空间条件的直接消融。

- 核心优势：构建187k片段519h309类BinauralVGGSound并验证CE/CU/PQ不降且新增耳间线索的可扩展底座。

- 主要短板：双耳真值由PseudoBinaural模型合成而非实录，空间指标提升可能部分反映合成器偏置而非真实泛化。

- 主要短板：FAD两项均劣于MMAudio且IB低于Seeing&Hearing，MOS语义对齐亦略低于MMAudio，分布保真存在代价。

- 主要短板：20人MOS规模较小且未报告受试者筛选与显著性检验细节，推理延迟与吞吐未做任何实测验证。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 11. [听声计数：以声音为提示的零样本目标计数](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0194-7c7c4954b6/)

> 英文题目：*[Listen and Count: Expanding the Frontier of Zero\-shot Object Counting to Sound\-centric Counting](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0194-7c7c4954b6/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 5.4/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.3/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/194) · [官方 PDF](https://ijcai.org/proceedings/2026/0194.pdf)

👥 **作者与机构**

- Mingjie Wang：Department of Mathematics, Zhejiang Sci\-Tech University, Hangzhou, China
- Zhuohang Li：Department of Mathematics, Zhejiang Sci\-Tech University, Hangzhou, China
- Qi Zhang：College of Computer Science and Software Engineering, Shenzhen University, Shenzhen, China
- Jun Zhou：School of Information Science and Technology, Dalian Maritime University, Dalian, China
- Zili Yi：School of Intelligence Science and Technology, Nanjing University, Nanjing, China
- Minglun Gong：School of Computer Science, University of Guelph, Guelph, Canada

📌 **核心摘要**

**问题与瓶颈：** 类别无关计数需在无类别先验下根据辅助提示估计图像中指定类实例总数并输出密度图，输入为待计数图像与声音或文本提示。已有路线依赖难获取的图像样例或受一词多义困扰的文本类名，如 Speaker 可指扬声器或演讲者，在仅有动物鸣叫等声音的音频感知场景中甚至无可用文本提示。声音本身具有更具区分度的声学指纹，但缺乏大规模声像配对计数数据与细粒度跨模态对齐机制，且 CLAP 与 CLIP 特征空间不兼容、长时音频时序建模开销大，阻碍直接引导。

**核心思路与方法架构：** 与最接近的文本引导 T2ICount 相比，实质增量是以声音为引导并以文本为枢纽做适配与校准，保留 Stable Diffusion 主干的多尺度视觉表示。单条样本流程为一段 10 秒声音经冻结的 CLAP 编码为粗时频特征，送入 SoundMamba 依次经层归一化、1 维卷积、GELU 激活与线性投影及多层 Mamba 块建模长程依赖，再与多层感知机分支的局部特征融合为 768 维声音潜变量。图像经变分自编码器压缩为潜变量后由微调的 U-Net 做一步扩散提取 4 个尺度特征，声音校准模块由粗到细融合多尺度特征，并用顺时针与逆时针圆形扫描 Mamba 将局部特征转为全局表示后与声音潜变量做全局交叉注意力，输出相似图与密度图。训练冻结变分自编码器与 CLAP，仅更新适配器与 U-Net，推理为离线整图计数。多层级混合优化从幅度、语义与分布三路约束对齐，直接针对模态失配与背景干扰。

**关键实验与核心代价：** 在自建 SoundCount 验证集上，S2ICount 的平均绝对误差 (Mean Absolute Error, MAE) ↓ 为 6.80，低于文本引导中表现最好的 T2ICount 的 7.55，也低于同加 SoundMamba 的 T2ICount 声音变体的 7.81。对应均方根误差 (Root Mean Square Error, RMSE) ↓ 为 18.72，低于上述两者的 21.20 与 19.87。测试集声音引导下 S2ICount 的 MAE 为 7.87，RMSE 为 23.20，分别低于 T2ICount 声音变体的 8.28 与 24.85。消融显示移除 SoundMamba 后验证集 MAE 从 6.80 升至 9.09，测试集 MAE 从 7.87 升至 9.27，为最主要的代价；去除 Mamba 的变体验证集 RMSE 为 18.24 但测试集 RMSE 升至 28.12，呈现验证与测试背离的负结果。论文未披露参数量、显存、RTF 或推理时延等部署成本，计数任务以 MAE 与 RMSE 为准，不涉及人工主观听测与神经代理指标对比。

**适用边界与深读导览：** 结论成立前提是声音类别在 SoundCount 的 66 个类别覆盖内且声像对应清晰，对未见类别、强混响、多声源重叠及超高密度场景的泛化尚未验证，论文称数据集、演示与实现代码已在 GitHub 公开，可对照演示中的声音引导计数现象理解适用范围。深读可查下方方法概述和架构中的圆形扫描与三重损失公式含义，以及实验结果中主对比与消融表的条件与代价分析。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以声音替代文本引导类别无关计数，验证集MAE6.80优于文本最优T2ICount的7.55，范式增量明确可核对。

- 核心优势：设置文本与声音变体对照及八组直接消融，移除SoundMamba后验证MAE升至9.09因果贡献最明确。

- 核心优势：构建2351场景66类1650音频源的SoundCount声像配对基准，平均每图58实例支撑训练与评测。

- 主要短板：仅在自建SoundCount评测无外部基准，且去适配损失测试RMSE21.10与去SoundMamba21.25反超全量23.20提示划分敏感。

- 主要短板：原文表3存在MAE与RMSE印刷顺序错位，且正文称最低测试RMSE21.85与归位后21.10字面出入而原文未解释。

- 主要短板：伪显著图阈值phi与xi、数据划分、硬件与推理成本均未说明，多声源重叠与未见类别等失效场景未评测。

🔗 **开源资源**

- 论文所列链接：<https://github.com/ZSTU-CV-Lab/S2ICount> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 12. [模态主导污染全局教师时联邦蒸馏如何实现自适应平衡](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0482-7c1694e19f/)

> 英文题目：*[FedAMB: Adaptive Modality Balancing for Dominance\-Robust Multimodal Federated Distillation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0482-7c1694e19f/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[联邦学习](/audio-research-portal/papers/?concept=method.federated)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.9/10 | 清晰度 5.5/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/482) · [官方 PDF](https://ijcai.org/proceedings/2026/0482.pdf)

👥 **作者与机构**

- Seungjin Han：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea
- Juyeob Lee：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea
- Sangmin Lee：Department of Computer Science and Engineering, Korea University, Korea
- Eunil Park：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea；Department of Computer Science and Engineering, Jaume I University, Spain

📌 **核心摘要**

**问题与瓶颈：** 联邦知识蒸馏（federated knowledge distillation，Fed-KD）以共享代理数据集上的预测对数几率（logits）为通信载体，可降低大模型参数传输开销并兼容客户端异构架构。在多模态联邦学习中，单一易学模态主导优化的现象称为模态主导，会压制弱模态互补信号，导致融合模型在缺失模态推理时失效。在非独立同分布联邦环境下，不同客户端形成不同模态偏置，这些偏置经服务端聚合放大，污染全局教师并回传给各客户端，形成偏差循环。现有干预多假设静态失衡并施加统一加权或随机模态丢弃，难以适应跨客户端与跨轮次的状态依赖变化，还可能破坏原本稳定的融合。

**核心思路与方法架构：** 与直接聚合代理对数几率的 Fed-KD 基线相比，FedAMB 保留代理对数几率聚合主链路，新增客户端选择性调控与服务端逐分量蒸馏两处状态感知干预。沿一条客户端私有标注样本追踪，模态编码器抽取特征并按类别计算局部原型，服务端以样本量加权聚合成全局原型后下发，客户端用余弦相似度得到原型预测准确率并以阈值 \(\gamma = 1.5\) 判定主导状态与弱模态。当判定失衡且融合准确率低于主导模态准确率超过阈值 \(\tau\) 时，方法屏蔽主导特征构造去主导融合对数几率，并与弱模态单分支头输出相加形成弱模态训练对数几率，仅在该状态下替代标准多模态对数几率计算交叉熵损失。在知识蒸馏阶段，客户端上传代理样本的多模态对数几率，服务端平均为全局教师，再以固定温度 \(T_{kd}\) 蒸馏回每个客户端的多模态分支与弱模态分支，全程为离线多轮联邦更新，\(\tau\) 与 \(T_{kd}\) 取值未说明。

**关键实验与核心代价：** 在 CREMA-D、AVE 和 UR-FUNNY 的独立同分布与非独立同分布划分下，论文以多模态分类准确率为指标报告 3 个随机种子的均值与标准差，FedAMB 在同表同列均高于最强基线。在 CREMA-D 上，独立同分布准确率从最强基线 DaFKD 的 44.82% 提高到 50.11%，非独立同分布从 41.09% 提高到 42.73%；在 AVE 上，独立同分布从随机模态丢弃的 36.44% 提高到 36.74%，非独立同分布从 FedMD 的 35.00% 提高到 35.15%；在 UR-FUNNY 上，独立同分布从 58.14% 提高到 58.27%，非独立同分布从 54.62% 提高到 55.18%。单模态分析显示 CREMA-D 视觉分支从无干预基线的 15.03% 提高到 34.12%，相对最强单模态基线 RMD 的 22.65% 提高 11.47 个百分点，音频分支保持 40.78% 居首。域失配代理实验改用 CMU-MOSEI 仍保持各列居首，但绝对值较同域下降。消融显示完整模型较无干预基线在 CREMA-D 多模态提高 9.03 个百分点，而单独干预在 AVE 多模态出现回落，表明组合必要性。论文仅用准确率评测，未实测通信量、吞吐或时延，代价以额外原型与对数几率传输为主。

**适用边界与深读导览：** 结论成立依赖域内无标注代理数据集可用、客户端具备双头结构与原型统计上传条件，以及分类准确率与零向量替代的单模态评测方式，未覆盖无代理蒸馏、训练期缺失模态与端侧部署场景。作者在讨论中承认代理获取困难、域失配与类原型计数可能泄露类别分布，并建议结合安全聚合与扰动机制。欲深究状态判定与双重门控公式可查阅方法 3.3 节至 3.5 节，欲核对多模态与单模态权衡可查阅实验 4.1 节至 4.4 节及消融表。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：FedAMB在CREMA-D、AVE、UR-FUNNY共6列IID与Non-IID条件下均超越6个代表性基线并报告3个种子均值标准差。

- 核心优势：基于全局原型的双重门控状态变量与逐分量蒸馏形成可验证的阶段式干预闭环且公式链条自洽。

- 核心优势：域失配CMU-MOSEI代理下仍保持各列领先，且单模态与双头消融验证了弱模态增益与组合必要性。

- 主要短板：消融表第三行与第七行字面仍标SMR✓CMD×与正文仅CMD含义矛盾且原文未解释，构成表文标记出入。

- 主要短板：编码器与融合头结构、优化器学习率、τ与Tkd取值及硬件时长均未说明，复现信息缺失较多。

- 主要短板：AVE完整增益仅0.63个百分点且单部件出现多模态回落，覆盖仅单点α=1.0非独立同分布，增益具数据集依赖性。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 13. [以两级参照约束控制缺失模态下的判定漂移](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0108-3e1156d464/)

> 英文题目：*[Controlling Decision Drift in Multimodal Sentiment Analysis with Missing Modalities](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0108-3e1156d464/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究重点**：[鲁棒性](/audio-research-portal/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.7/10 | 技术严谨 7.1/10 | 实验充分 7.6/10 | 清晰度 6.5/10 | 影响力 3.9/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/108) · [官方 PDF](https://ijcai.org/proceedings/2026/0108.pdf)

👥 **作者与机构**

- Chenglizhao Chen：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Yuchen Cao：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Xinyu Liu：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Mengke Song：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Guisheng Zhang：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Xiaomin Yu：The Hong Kong University of Science and Technology &#40;Guangzhou&#41;

📌 **核心摘要**

**问题与瓶颈：** 多模态情感分析以文本、声学和视觉三路信号为输入，以二分类情感标签为输出，需在语句级对齐条件下融合异质线索。现有缺失模态补全路线常由可见模态直接生成缺失特征，但各模态表达机制与情感动态不同，生成特征易偏离真实分布并误导预测，形成生成偏置。即使模态齐全，噪声、遮挡或异常表达仍会造成质量不均衡，不可靠模态在融合中被过加权并将预测推离正确目标，形成融合偏置，两类偏置本质均为模态可靠性退化导致的决策漂移，缺乏跨组合稳定的参考约束。

**核心思路与方法架构：** 与直接生成缺失原始信号并参与融合的路线相比，TLRA 即两级参考对齐框架保留三路独立编码与融合预测结构，增量在于引入特征层与决策层两级稳定参考，将补全目标由信号重建改为情感结构补偿，并以原型投票抑制不可靠决策。沿一条样本看，文本经 BERT 得到 H_l，声学经 Librosa 得到 H_a，视觉经 OpenFace 得到 H_v，可用模态经独立模态编码器映射为共享情感空间特征 F_m，同时经查询编码器得到查询特征，并以完整模态样本构建参考结构。查询特征经池化为全局向量后在可学习模板库中按相似度检索加权为模板上下文，再按一致性权重融合为补全表示，并经对齐损失向完整模态参考靠拢，从而把不同缺失组合约束到同一情感空间。决策层为每模态维护正负类原型，先以软引导将特征向高相似原型平滑，再在原型稳定后以多数投票替换少数不一致模态并融合输出，编码器以预训练初始化，对齐与融合模块端到端更新，原型库随机初始化后在线更新，论文未说明流式约束与采样率细节。

**关键实验与核心代价：** 在 CMU-MOSI 完整模态条件下，本文方法 ACC 为 86.28，高于次优 MECAM 的 85.80，F1 为 86.24，高于 MECAM 的 85.80，在 CMU-MOSEI 完整模态条件下，本文方法 ACC 为 85.88，高于次优 UEFN 的 85.67，F1 为 85.86，高于 UEFN 的 85.76，四格均为同表同列最高。缺失模态比较覆盖音频、视觉、文本单模态及 AV、AL、VL 双模态组合，论文报告在多数组合下更好或相当，并在严重缺失下退化更小。关键消融显示 CMU-MOSI 上全模态 AVL 组合由基线 ACC 78.51 变为完整模型 86.28，移除模态编码约束的对照由 85.25 回落至 84.32，证实两级对齐缺一不可。跨数据集上 MOSEI 训练 MOSI 测试 ACC 为 82.16，高于 DLF 的 80.18，MOSI 训练 MOSEI 测试 ACC 为 79.91，高于 DLF 的 74.77，但跨域数值低于域内数值。代价方面，模板检索与原型匹配随模板与原型数线性增长，主计算仍在模态编码，论文未提供实测时延、吞吐或显存数据，本任务为分类评测，未涉及 MOS 类听感指标。

**适用边界与深读导览：** 结论成立前提为已对齐的语句级三模态输入与二分类阈值划分，未覆盖未对齐长视频、连续情感强度回归、多语种口音及强噪声遮挡下的失效形态，也未验证实时部署成本，跨域仍有下降故不宜视为域不变。需深究双路径编码与模板加权公式可查阅方法概述和架构，需核对完整模态、跨数据集与消融数值可查阅实验结果，需复现超参与缺失项可查阅细节详述与开源详情。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在CMU-MOSI与CMU-MOSEI完整模态四格均为同表最高，分别超越次优MECAM与UEFN的可核对领先。

- 核心优势：双向跨数据集转移均为最高且保留DMD崩溃退化负结果，严重缺失下退化更小显示可迁移情感结构。

- 核心优势：在CMU-MOSI上经No.0至No.11逐级叠加模态编码与两级对齐的直接受控消融，No.10回落证实缺一不可。

- 主要短板：声称资源受限可部署与有限开销却未提供任何延迟吞吐显存功耗实测，工程主张与验证脱节。

- 主要短板：缺模板数K、间隔δ、原型动量、一维卷积结构、数据划分与种子等关键配置，影响复现完整度。

- 主要短板：未报告统计显著性检验与置信区间，原型相似度分析仅定性描述无具体数值，误差分析不足。

🔗 **开源资源**

- 论文所列链接：<https://github.com/LiuXY3366/TLRA> → <https://github.com/liuxy1005/TLRA> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 14. [用列表排序学习让文本提示真正控制语音情感强度](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0652-7f4ad03612/)

> 英文题目：*[Emo\-LiPO: Listwise Preference Optimization for Fine\-Grained Emotion Intensity Control in LLM\-based Text\-to\-Speech](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0652-7f4ad03612/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[偏好优化](/audio-research-portal/papers/?concept=method.preference-optimization)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 6.9/10 | 技术严谨 6.6/10 | 实验充分 6.3/10 | 清晰度 5.6/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/652) · [官方 PDF](https://ijcai.org/proceedings/2026/0652.pdf)

👥 **作者与机构**

- Yihang Lin：The Chinese University of Hong Kong, Shenzhen
- Li Zhou：The Chinese University of Hong Kong, Shenzhen
- Congwei Cao：The Chinese University of Hong Kong, Shenzhen；Shenzhen Loop Area Institute
- Dongchu Xie：The Chinese University of Hong Kong, Shenzhen
- Xiaoxue Gao：Agency for Science, Technology and Research
- Chen Zhang：National University of Singapore
- Haizhou Li：The Chinese University of Hong Kong, Shenzhen；National University of Singapore；Shenzhen Research Institute of Big Data；Shenzhen Loop Area Institute

📌 **核心摘要**

**问题与瓶颈：** 本文研究提示词条件的大语言模型文本到语音中的细粒度情绪强度控制。输入为文本转录 t 与情绪提示 Pc,l，其中 c 为情绪类别，l 为相对强度等级，输出为承载语言内容与指定情绪的语音 S。现有主流路线或在声学域显式建模强度但缺乏文本驱动的灵活控制，或用自然语言提示控制离散类别而把强度留给声学层隐式实现。由于文本情绪描述与语音实现之间存在语义声学鸿沟，强度词难以诱发可感知的强度区分，尤其在高强度提示下表达不稳定且区分微弱，制约了可控性与表现力。

**核心思路与方法架构：** 与最接近的成对偏好基线 Emo-DPO 只做二元局部比较不同，Emo-LiPO 把强度控制重构为学习排序问题并保留监督微调初始化的主干，仅把偏好建模从成对扩展为列表级全局排序。单条样本沿转录 t、情绪提示 Pc,l 与说话人嵌入联合输入，以 CosyVoice-300M-Instruct 为自回归语音词元生成主干，先经监督微调学习指令跟随得到参考策略，再以列表偏好优化对齐强度排序，论文未说明参数冻结范围与流式或离线约束。列表构建对同一转录组织 K + 2 个候选，包含目标样本、同情绪不同强度样本、中性样本与随机异情绪负样本，并按与目标强度的绝对距离排序后赋予基于位置的偏好分，排序分由当前策略相对参考策略的对数比经系数 β 缩放得到，带强度感知权重 λ 的列表排序损失对违反全局顺序的候选对施加更大惩罚，从而直接对齐文本相对强度与生成语音的可感知排序。

**关键实验与核心代价：** 在自建多说话人 ESD-plus 评测上，Emo-LiPO 在微调后情绪识别准确率（Recall-ft，越高越好 ↑）上为 39.54，高于最强可比基线 Emo-DPO（I）的 37.21，同设置下情绪分类召回率（Recall，越高越好 ↑）为 27.56，高于该基线的 26.87，而情绪相似度（EmoSIM，越高越好 ↑）为 91.93，低于消融变体 - w/o λ 的 92.30。语音质量侧，词错率（WER，越低越好 ↓）为 4.26，低于 Emo-DPO（I）的 6.79，语音质量预测（NISQA，越高越好 ↑）为 4.79，与 EmoVoice 和消融变体持平，语音自然度预测（UTMOS，越高越好 ↑）为 4.18，低于 CosyVoice 的 4.30，降噪语音质量预测（DNSMOS，越高越好 ↑）为 3.26，低于 EmoVoice 的 3.29。人工 Arena 式二选一评测（5 名标注者，允许平局，无置信区间，并非平均意见分 MOS）显示 Emo-LiPO 在强度控制胜率上对 CosyVoice 为 86.08%，对 Emo-DPO（E）为 66.44%，对 Emo-DPO（I）为 58.33%，客观代理指标与人工判断总体一致但缺少 MOS 与统计检验。关键消融将权重 λ 固定为 1 后 Recall-ft 回落至 37.59 且单调性减弱，而增加异情绪负样本至 2 个或 3 个反而损害强度排序，论文未披露训练、推理或部署的耗时与实时因子。

**适用边界与深读导览：** 结论成立依赖英文 ESD-plus 的 4 种非中性情绪与 3 档强度、10 个合成音色及固定转录的列表比较，未覆盖中文等多语种、真实录音分布、自发对话与部署时延约束，且训练集未经人工逐条校验。深读可查下方方法概述和架构中的排序分与权重公式含义，以及实验结果中按强度分档与消融对照的完整数值与人工评测口径。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：将强度控制重构为列表级全局排序，以K+2同转录候选与强度感知权重λ显式对齐文本相对强度与可感知排序。

- 核心优势：在ESD-plus上Recall-ft达39.54与Recall达27.56均居同表最高，超越最强成对基线Emo-DPO(I)的37.21与26.87。

- 核心优势：构建45,500样本约36.89小时的ESD-plus多说话人强度数据集，开发测试集经人工成对校验达91.23%通过率。

- 主要短板：正文断言仅Emo-LiPO呈稳定单调上升，与图3像素显示Emo-DPO(E)同样低小于中小于高缓慢上升矛盾且正文自述前后不一致。

- 主要短板：人工Arena评测仅5名标注者允许平局且非MOS量表，未报告置信区间方差与显著性检验，对Emo-DPO(I)强度胜率仅58.33%。

- 主要短板：学习率批量优化器步数硬件β取值与解码细节均未说明，训练语音来自合成且训练集未经人工校验，关键复现配置缺失较多。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 15. [从脑电重建梅尔频谱：被试调制与分层融合如何同时应对个体差异与跨模态鸿沟](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0402-8e1ac2659d/)

> 英文题目：*[HFFN\-ID: A Hierarchical Feature Fusion Network with Bi\-Phase Subject ID Modulation for EEG Mel\-Spectrogram Reconstruction](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0402-8e1ac2659d/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[言语神经解码](/audio-research-portal/papers/?concept=task.neural-speech-decoding)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)
- **信号**：[脑信号](/audio-research-portal/papers/?concept=signal.neural)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.7/10 | 实验充分 6.0/10 | 清晰度 7.1/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 5.1/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/402) · [官方 PDF](https://ijcai.org/proceedings/2026/0402.pdf)

👥 **作者与机构**

- Chi Huang：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Zhaohu Liu：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Yong Peng：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Wanzeng Kong：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China

📌 **核心摘要**

**问题与瓶颈：** 本文处理从非侵入脑电 (electroencephalogram, EEG) 重建梅尔频谱图 (mel-spectrogram) 的任务，输入为预处理至 64 Hz 的多通道 EEG，输出为同步至 64 Hz 的听觉时频特征，用于后续语音重建。该任务的根本困难在于受试者间神经模式差异大，脑结构与心理状态不同导致同一语音对应的 EEG 分布偏移，跨受试者泛化困难。另一困难是异构表征间的分层语义鸿沟，EEG 生理特征与语音谱细节处于不同抽象层级，朴素拼接或相加等静态融合无法自适应对齐上下文与身份条件。长序列建模还面临局部瞬态细节与全局语义兼顾的压力，传统循环结构存在信息衰减与计算瓶颈。

**核心思路与方法架构：** 与最接近的 SSM2Mel 基线相比，本文保留 S4-UNet 局部提取与类 Mamba 长序列建模的总体链路，实质增量是将单层独热加线性映射的受试者适配器替换为双相调制加条件引导分层融合，并引入语音包络预训练初始化。沿单条样本看，5 秒 EEG 片段与受试者编号 (subject ID, sub-id) 一同输入，正弦位置编码加时间多层感知机 (Time multilayer perceptron, Time MLP) 将编号映射为受试者嵌入，再切分为注意力与前馈各用的缩放与偏置参数，在注意力输入前与前馈输入前做两轮仿射校准。校准后的特征经 S4-UNet 提取多尺度上下文，条件引导分层融合先以首轮调制结果为查询引导对上下文做缩放点积注意力筛选，再以轻量门控在精炼上下文与完整调制基座间按空间位置加权求和，融合特征送入双向 Mamba (Bidirectional Mamba, BiMamba) 建模全局依赖后经线性层投射为梅尔频谱图。两阶段训练先在语音包络上预训练捕捉时域包络动态，再在梅尔频谱图上微调迁移至频域细节，论文未说明冻结与解冻细节，推理按描述为离线非重叠切分后拼接，论文未声明流式或因果约束。

**关键实验与核心代价：** 在 SparrKULee 数据集 80% 训练、10% 验证与 10% 测试划分下，梅尔频谱图重建的皮尔逊相关系数 (Pearson correlation coefficient, PCC, 越高越好 ↑) 从 VLAAI 基线的 0.050 提高至本文方法的 0.0723，论文表 1 以三位小数记为 0.072 并报告相对提升 44%，同期最强基线 SSM2Mel 表 1 记为 0.069、表 2 以四位小数记为 0.0692，本文方法仍高于该基线。同一对比下梅尔倒谱失真 (Mel-Cepstral Distortion, MCD, 越低越好 ↓) 从 15.3948 降至 15.3845，结构相似性指数 (Structural Similarity Index Measure, SSIM, 越高越好 ↑) 从 0.8256 升至 0.8258，语音包络重建 PCC 从 SSM2Mel 的 0.208 升至 0.211。关键消融显示去掉条件引导分层融合后 PCC 降至 0.0664，去掉双相调制后为 0.0669，去掉预训练后为 0.0668，三者缺一即退化，完整模型为 0.0723。代价侧参数量从 6.88M 降至 4.22M，论文报告减少 38.7%，运行时间从 44149.62 s 降至 17390.66 s，论文报告约为 2.5 倍加速，分布分析显示本文方法中位 PCC 更高且四分位距更窄，SSM2Mel 存在长尾低分离群，论文未提供人工主观听测，仅以客观相关与失真指标评价，未使用平均意见分 (Mean Opinion Score, MOS)。

**适用边界与深读导览：** 上述结论成立前提是 85 名荷兰语受试者聆听连续弗拉芒语叙事的同一采集与预处理链路，含多通道维纳滤波去伪迹、平均参考与 64 Hz 重采样，论文未说明 80%、10%、10% 划分是否为受试者不相交，故跨受试者泛化强度依据有限，跨语言、跨设备与跨范式是否成立论文未验证。绝对 PCC 仍处于 0.0723 量级，SSIM 与 MCD 差距微小，离线 5 秒分段拼接的设定也不直接对应实时脑机接口部署。欲深究双相调制公式与门控融合推导可查阅下方方法概述和架构，欲核对多基线排序、消融幅度与包络泛化可查阅下方实验结果。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在多基线对比中PCC达0.0723超越最强基线0.0692，且三项消融缺一即退化7.5%以上显示协同效应。

- 核心优势：在提升重建指标的同时参数从6.88M降至4.22M且运行时间约2.5倍加速，效率收益可核对。

- 主要短板：仅单一荷兰语叙事验证且未说明划分是否受试者不相交，绝对PCC仅0.0723且无显著性检验与人工MOS支撑高保真主张。

- 主要短板：平衡系数学习率批量等复现要素缺失，且离线5秒拼接不等同实时因果部署，部署约束与失效条件未量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 16. [噪声信道下统一语义通信 Bridge 的解耦 对齐与重建](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0465-a8c5962d12/)

> 英文题目：*[Bridge: A Cross\-Modal Learning Framework for Unified Semantic Representation in Noisy Communication](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0465-a8c5962d12/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态语义传输](/audio-research-portal/papers/?concept=task.multimodal-semantic-transport)
- **研究方法**：[对比学习](/audio-research-portal/papers/?concept=method.contrastive)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[向量量化](/audio-research-portal/papers/?concept=method.vector-quantization)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.7/10 | 技术严谨 5.3/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 3.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/465) · [官方 PDF](https://ijcai.org/proceedings/2026/0465.pdf)

👥 **作者与机构**

- Liang Chen：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Yanze Huang：School of Computing and Data Science, Fujian University of Technology, Fuzhou 350118, China
- Limei Lin：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Xiaoding Wang：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Wei Lou：The Hong Kong Polytechnic University, Hong Kong, China
- Jie Wu：China Telecom Cloud Computing Research Institute, Beijing 100088, China
- Sun\-Yuan Hsieh：Department of Computer Science and Information Engineering, National Cheng Kung University, Tainan 701, Taiwan

📌 **核心摘要**

**问题与瓶颈：** 多模态语义通信需将视频、音频与文本三路异构信号压缩为统一语义表示，并在带宽受限与加性高斯白噪声及瑞利衰落信道下完成重建与任务推理。现有单模态路线分别优化文本、语音与视觉语义，但在语义定义模糊与信道失配下难以稳定传输。已有多模态工作借助多模态 Transformer 与注意力机制建模跨模态关系，却仍面临对齐低效与实时性不足。更根本的是，信道噪声与衰落会重塑传输特征分布，引发语义漂移与跨模态失配，致使一致性、鲁棒性与可部署效率难以兼顾。

**核心思路与方法架构：** Bridge 的直觉是以解耦抑制模态专属噪声泄漏，以门控对齐压制不可靠跨模态匹配，再以共享码本压缩传输。单条样本流动时，文本、音频与视频输入先经各自模态编码器提取初级特征，再分入模态专属支路与共享支路，前者经投影与正则保留个性，后者经共享编码器得到模态不变表示。上述不变表示经互信息解耦与模态感知跨模态语义模块优化分离与对齐，其中门控对比以可学习成对门控调节对数几率的自适应温度，再经最近邻向量量化为离散码索引后传输。接收端先由轻量模态解码器重建波形、帧与词元，再由 CLAP、CLIP 与 BERT 分别映射至共享语义嵌入空间做一致性验证与增强。投影维度、码本规模与损失系数等原文未披露具体取值，基础模型冻结状态与流式约束原文亦未说明，该设计直击分布差异与信道扰动放大的失配根因。

**关键实验与核心代价：** 在 COCO2017 的 AWGN 信道 SNR 0 dB 条件下，Bridge 的峰值信噪比（PSNR，越高越好）为 26.97，高于最强可比基线 ADJSCC 的 22.57，学习感知图像块相似度（LPIPS，越低越好）为 0.057，低于最强可比基线 SGD-JSCC 的 0.122。在 Rayleigh 信道 SNR 10 dB 条件下，Bridge 的峰值信噪比为 29.80，高于 SGD-JSCC 的 22.67，学习感知图像块相似度为 0.029，低于 SGD-JSCC 的 0.095。在 CMU-MOSEI 的 SNR -6 dB 条件下，Bridge 的分类准确率为 72.53%，高于次强基线 T-DeepSC（-2）的 71.66%，至 SNR 12 dB 时为 82.15%，高于 T-DeepSC（12）的 80.04%。论文未安排人工主观听测，音频侧仅以嵌入相似度、均方误差与尺度不变信干比（SI-SDR，越高越好）等客观指标呈趋势，图 2 未给出可逐字核对的数值表故不转录。消融显示完整 Bridge 雷达包络最外，去除任一组件均内缩，原文称低信噪比下峰值信噪比提升约 16.3% 但未给出可复算的基线数值对，未报告参数量、显存或时延实测。

**适用边界与深读导览：** 结论成立前提为合成 AWGN 与 Rayleigh 信道、所选 VGGSound、COCO2017 与 CMU-MOSEI 划分及客观重建与分类指标，未覆盖真实无线衰落、码率约束部署、长时流式与主观听感场景。第二阶段依赖大规模基础模型校验，但未量化额外计算与时延开销。欲深究解耦与门控对比的形式含义及组件贡献，可查阅方法概述和架构与实验结果节的公式与表格对照。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：COCO2017中0dB AWGN下PSNR 26.97高于ADJSCC的22.57且LPIPS 0.057低于SGD-JSCC的0.122，八组条件全面最优。

- 核心优势：CMU-MOSEI全SNR范围准确率最优，-6dB达72.53%高于次强71.66%，至12dB达82.15%仍保持领先。

- 核心优势：双支路解耦与门控对比自适应温度构成针对信道漂移的可验证对齐机制，消融显示去除任一组件均退化。

- 主要短板：消融正文-10dB起始值与图5像素标注逐项不符，降幅无法对应到图示，原文未解释。

- 主要短板：确定性映射下互信息不变的表述在一般情形下不成立，且缺少可检查的推导与评估模型细节。

- 主要短板：投影维度码本规模损失系数硬件划分等关键配置大面积缺失，第二阶段基础模型开销未量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 17. [并行文本生成如何消除实时游戏解说的长静音](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0972-f0c976edb4/)

> 英文题目：*[Low\-Latency Real\-Time Audio Game Commentary System via LLM\-Based Parallel Text Generation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0972-f0c976edb4/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio)
- **研究方法**：[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)
- **研究条件**：[流式处理](/audio-research-portal/papers/?concept=setting.streaming)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.0/10** | 创新 5.3/10 | 技术严谨 6.2/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 1.5/10 | 可复现 4.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：系统技术报告

会议来源：[官方记录](https://ijcai.org/proceedings/2026/972) · [官方 PDF](https://ijcai.org/proceedings/2026/0972.pdf)

👥 **作者与机构**

- Ryota Kawamatsu：The University of Tokyo, Japan；National Institute of Advanced Industrial Science and Technology, Japan
- Anum Afzal：National Institute of Advanced Industrial Science and Technology, Japan；Technical University of Munich, Germany
- Yuki Saito：The University of Tokyo, Japan
- Shinnosuke Takamichi：Keio University, Japan；The University of Tokyo, Japan
- Graham Neubig：Carnegie Mellon University, U\.S\.A\.
- Katsuhito Sudoh：Nara Women’s University, Japan
- Hiroya Takamura：National Institute of Advanced Industrial Science and Technology, Japan
- Tatsuya Ishigaki：National Institute of Advanced Industrial Science and Technology, Japan

📌 **核心摘要**

**问题与瓶颈：** 该任务输入为实时游戏视频流，输出为与画面同步的口语解说音频，系统需依次完成视频分段、文本生成与语音合成再播出。现有主流路线采用严格串行流水线，每轮在当前语音播放结束后才对最新视频段调用多模态大语言模型生成文本，再经文本到语音合成后播放。推理时延不可避免并在轮次间累积，导致话语之间出现长时间非自然静音，破坏解说节奏与观赛沉浸感。将该设定扩展到原始游戏视频与现代多模态大语言模型后，时延瓶颈更为突出。

**核心思路与方法架构：** 核心直觉是在播放当前话语的同时为新到达的视频段并行生成候选文本并缓冲，从而在播放边界实现即时合成以消除等待性静默。沿单条样本看，游戏机以 25 fps 送出视频，采集卡捕获后按 N = 32 帧切分为段 Fk，每段以 base64 编码送入 GPT-4.1-mini 生成解说文本，最大新词元数在 20、40、60、80 与 100 之间变化。生成在当前话语播放期间于后台持续进行，候选存入缓冲，当前播放结束时按最新、最早或随机三种轻量策略之一选取一条立即合成，避免为等待生成而静默。模型不做训练更新并按流式运行，系统另将输出视频缓冲并延迟至首句话语开始以吸收首轮端到端时延，使解说与画面对齐。

**关键实验与核心代价：** 在取自 Smash Corpus 的 8 段 Super Smash Bros. Ultimate 快节奏对局视频上，最大新词元数为 20 时串行 After-Audio 的平均话语间隔静音为 9.5 ± 0.9 秒，而并行 Oldest 策略为 0.3 ± 0.1 秒，累积静音从 134.0 ± 5.2 秒降至 18.9 ± 3.1 秒，话语与静音模式相似度平均交并比 (mean Intersection over Union, mIoU) 从 0.01 ± 0.06 升至 0.60 ± 0.04。以 1 Hz 二值序列度量的 mIoU 上并行三种策略均在 0.59 到 0.60 之间，差异很小，说明收益主要来自并行本身而非选择策略。在 120 名经 Lancers 招募的参与者对取自 20 个场景的 30 秒片段的 5 级量表评分中，解说节奏自然度平均意见分 (Mean Opinion Score, MOS) 上并行方法最高为 3.68，高于串行基线最高 2.58，视频对齐与总体质量亦同向提升。代价侧表现为文本越长占用播放越久，Latest 策略下最大新词元数从 20 增至 100 时平均说话时长从 2.3 ± 0.1 秒增至 4.4 ± 0.1 秒，原文未披露实时率或推理时延与显存实测。

**适用边界与深读导览：** 上述结论成立于单款格斗游戏、8 段视频、特定闭源大语言模型与既有语音合成配置及现场单机演示条件，未覆盖其他游戏类型、网络抖动、长时间直播漂移与多说话人场景，也未验证延迟视频对观赛体验的影响。论文提供演示视频可对照试听并行对间隔静音与节奏的改善，但未公开代码与权重。欲深究分段与并行缓冲实现、视频延迟控制及静音统计与 MOS 细节，可查阅下方方法概述和架构与实验结果章节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：并行将平均间隔静音从9.5±0.9秒降至0.3±0.1秒且mIoU升至0.60±0.04，对照完整效果大幅改善。

- 核心优势：120名参与者30秒片段5级量表MOS报告95%置信区间且未用代理指标，主观协议规范。

- 主要短板：宣称低延迟实时却未披露实时率推理时延与显存实测，无端到端部署证据支撑。

- 主要短板：摘要写9.6秒到0.3秒而表1为9.5±0.9秒到0.3±0.1秒，原文未解释字面差异。

- 主要短板：视频延迟控制全部方法相同无消融且ROUGE仅图示无数值，覆盖仅8段单款游戏验证不足。

🔗 **开源资源**

- 演示资源：<https://youtu.be/pmrRUlvav8M> → <https://www.youtube.com/watch?v=pmrRUlvav8M&feature=youtu.be> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 18. [风格一致的多风格舞蹈运镜合成解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0136-5989917c9d/)

> 英文题目：*[DanceStyleCam: Style\-Based 3D Multi\-Style Dance Camera Movement Synthesis](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0136-5989917c9d/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-research-portal/papers/?concept=task.video-generation)
- **研究方法**：[对抗训练](/audio-research-portal/papers/?concept=method.adversarial-training)；[Transformer](/audio-research-portal/papers/?concept=method.transformer)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.9/10** | 创新 7.0/10 | 技术严谨 6.2/10 | 实验充分 6.6/10 | 清晰度 5.6/10 | 影响力 3.8/10 | 开源 0.0/10 | 可复现 5.4/10 | 工程/实践 4.5/10

排名：后50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/136) · [官方 PDF](https://ijcai.org/proceedings/2026/0136.pdf)

👥 **作者与机构**

- Xiaoying Huang：School of Information and Communication Engineering, Communication University of China, China
- Sanyi Zhang：School of Data Science and Media Intelligence, Communication University of China, China；Key Laboratory of Media Audio & Video &#40;Communication University of China&#41;
- Xirui Wang：Hainan International College of Communication University of China, China
- Qin Zhang：Key Laboratory of Media Audio & Video &#40;Communication University of China&#41;
- Long Ye：School of Data Science and Media Intelligence, Communication University of China, China；State Key Laboratory of Media Convergence and Communication, Communication University of China

📌 **核心摘要**

**问题与瓶颈：** 舞蹈运镜合成以音乐特征序列与舞蹈动作序列为输入，输出与之时间对齐的相机运动序列，相机以 MMD 极坐标形式编码参考点位置、相对旋转、距离与视场角，直接决定舞蹈表演的视觉表达与编舞音乐的契合度。DanceCamera3D 与 DanceCamAnimator 等现有路线以音乐舞蹈内容为条件生成运镜，却未将运镜风格作为显式条件建模，难以区分长短镜切换节奏、环绕与跳切等不同艺术表达。如图 1 所示，无风格表达的模型倾向于复用有限的运镜模式，而有丰富风格表达的运镜需要模仿与特定风格因子关联的多样模式，这是内容同步之外未被系统建模的关键缺口。

**核心思路与方法架构：** 与最接近的内容驱动基线相比，实质增量是将离散风格标签经可学习风格编码器映射为紧凑风格嵌入，并以风格一致对抗训练约束生成分布，使单一模型能按指定风格合成运镜，其余音乐舞蹈编码与两阶段流程保留动画师先定关键帧再插值的先验。沿一条 T 帧样本追踪，风格标签 s 先被编码为风格嵌入向量 es，广播复制为长度 L 的序列后与滑动窗内的音乐子序列、舞蹈子序列以及关键帧标签子序列拼接，经变换器 (Transformer) 编码器与分类头预测未来 w 帧内每帧为关键帧的概率，阈值化得到二值关键帧序列 k。随后合成阶段在相邻关键帧位置处基于历史运镜、当前音乐舞蹈上下文与 es 合成关键帧相机参数，再预测随风格变化的单调递增插值函数，对非关键帧做线性插值得到完整序列 c，全模型含关键帧检测 39M、合成 64M 与判别器 1M 参数，共 104M 参数，原文未说明采样率、帧率、冻结策略与窗口 h、w 具体取值，含未来窗的设计据滑动窗定义推断需要前视而非严格因果。

**关键实验与核心代价：** 在保留原始划分的 DCM 数据集 108 个动画师设计的三元组上，DanceStyleCam 的 FIDk 为 2.751，低于 TemMEGA 的 3.237，FIDs 为 0.254，低于 TemMEGA 的 0.255，Distk 为 3.201，高于 DanceCamAnimator 的 3.140，Dists 为 1.380，高于 TemMEGA 的 1.347，DMR 为 0.0016，低于 TemMEGA 的 0.0020，LCD 为 0.138，低于 TemMEGA 的 0.141。风格一致性上 Top-1 为 48.84，高于 DanceCamAnimator 的 35.66，平均余弦相似度 Mean CosSim 为 0.7565，高于 DanceCamAnimator 的 0.5658。消融显示去掉风格一致对抗训练后 FIDk 从 2.751 变为 3.457 且 Top-1 从 48.84 变为 38.26，训练代价为 5 个 NVIDIA GeForce RTX 3090 GPU 上训练 1 天，原文未披露推理时延、吞吐或实时因子。

**适用边界与深读导览：** 结论成立依赖于 DCM 数据集的 MMD 社区创作分布、8 种已标注风格与已提供关键帧标注的 MMD 极坐标 8 维表示，跨风格、跨数据集泛化、长序列稳定性与部署成本在正文未验证。论文给出的 GitHub 项目页可对照可视化现象与基线差异，深究滑动窗条件概率、插值与对抗损失的形式化定义可查阅下方方法概述和架构，消融与风格原型细节可查阅实验结果与细节详述。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：DanceStyleCam在DCM上FIDk降至2.751且六项质量多样性保真指标居可比方法最优，风格Top-1达48.84%大幅领先DanceCamAnimator的35.66%。

- 核心优势：针对ScAT的直接消融显示去掉全部对抗后Top-1从48.84%降至38.26%，去掉对比损失降至40.28%，验证了双重对抗机制的因果贡献。

- 核心优势：将离散风格标签经可学习编码器映射为风格嵌入并统一驱动关键帧检测与合成，再以风格相关插值实现多风格单模型合成，设计完整自洽。

- 主要短板：仅108样本单一DCM验证且源自MMD社区分布，无跨数据集泛化与长序列验证，滑动窗需未来帧而不支持严格因果实时推理。

- 主要短板：原文称全面最优但完整模型在Distk上3.201低于消融组3.214且DMR上0.0016高于0.0012，星号基线与胜率缺失行及正负号含义均未解释。

- 主要短板：窗口h与w取值、阈值、风格嵌入维度、网络层级维度与30维风格原型构造等关键复现配置缺失且引用的附录细节正文未提供。

🔗 **开源资源**

- 论文所列链接：<https://github.com/YCCCCM/DanceStyleCam> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 19. [跳长与窗长优先于主干加深的虎鲸叫声分类](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0982-634adc5b6f/)

> 英文题目：*[Optimizing Spectrogram Resolution and Training Strategies for Real\-Time Killer Whale Call Type Classification](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0982-634adc5b6f/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[CNN](/audio-research-portal/papers/?concept=method.cnn)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing) → [时频分析](/audio-research-portal/papers/?concept=method.time-frequency)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.9/10** | 创新 6.3/10 | 技术严谨 5.3/10 | 实验充分 6.6/10 | 清晰度 5.2/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 6.9/10

排名：后50% | 文档类型：方法研究

会议来源：[官方记录](https://ijcai.org/proceedings/2026/982) · [官方 PDF](https://ijcai.org/proceedings/2026/0982.pdf)

👥 **作者与机构**

- Vladislav Naumov：MIRIAI
- Iaroslav Sheipak：MIRIAI
- Yuriy Ivanov：HSE University
- Ilya Makarov：AXXX；Trusted AI Research Center, RAS

📌 **核心摘要**

**问题与瓶颈：** 虎鲸呼叫类型分类以连续水下录音为输入，按固定时长切分为片段并判为 11 种固定呼叫类型或噪声共 12 个类别，输出为片段级标签。通用框架 ANIMAL-SPOT 默认短时傅里叶变换（short-time Fourier transform，STFT）参数偏重频率分辨率，难以分辨短时频率调制呼叫中依赖时间调制的细微差异，典型难点为结构相似的 K12 类与 K14 类。论文指出该框架还存在两点不足，一是无法更换卷积神经网络（convolutional neural network，CNN）骨干网络（backbone），二是缺少正则化与类别均衡策略，在数量不均的呼叫分布上泛化受限。人工判读语谱图（spectrogram）难以扩展到大规模被动声学监测数据，因而需要兼顾分辨率与训练策略的自动化方案。

**核心思路与方法架构：** 与最接近的 ANIMAL-SPOT 基线相比，实质增量是保留残差网络（residual network，ResNet）-18 轻量骨干的同时，联合优化信号处理与训练策略而非增加架构复杂度。以 44.1 kHz 采样音频为例，经 FFT 大小 1024 与跳长 172 的 STFT 得到幅度语谱图，仅保留 500 Hz 至 10000 Hz 频带并经线性插值调整为 256 个频点，再转分贝并归一化至 [0, 1] 后输入网络。骨干将首层改为单通道 1×7×7 卷积以适配语谱图，经残差块、全局平均池化与全连接层输出 12 个类别，论文中未提及冻结。训练引入平滑系数 0.1 的标签平滑（label smoothing）与按逆类频平方根加权的定向过采样（oversampling），演示端以重叠窗切分连续录音并输出 Raven 选择表格式的时间分辨预测。更细跳长提升时间分辨率以直击 K12 类与 K14 类的时域调制混淆，演示系统在高端 GPU 上达到端到端实时。

**关键实验与核心代价：** 在俄罗斯 Avacha Gulf 野外录音构成的 45,429 个标注片段数据集上，同一留出测试集的片段级准确率从 ANIMAL-SPOT 基线的 96.2% 提高到最优配置的 97.1%，高于基线 0.9 个百分点，对应原文报告的相对误差降低 23.7%。消融显示在 800 ms 条件下加入定向过采样使 K12 类准确率从 80.0% 提高到 88.2%，并使总体准确率从 96.0% 提高到 96.7%。将段长从 800 ms 延长至 1200 ms 进一步达到 97.1%，但延长至 1500 ms 则回落至 96.1%，而 ResNet-34 在 800 ms 为 96.9%，ConvNeXt-Tiny 在 1000 ms 与 1200 ms 分别为 95.3% 与 94.8%，均低于 ResNet-18 在 1200 ms 的最优。本任务为分类准确率评测，不涉及人工主观听测与神经代理指标，最优 ResNet-18 在 RTX 5090 上的端到端实时系数（real-time factor，RTF）为 0.007。

**适用边界与深读导览：** 结论成立前提是单一海域种群与固定切分评测，论文明确承认未验证跨种群方言与不同录音条件下的泛化，t 分布随机邻域嵌入（t-distributed stochastic neighbor embedding，t-SNE）仍显示 K12 类与 K14 类部分重叠。过长片段与更大骨干均未带来收益，表明最优段长与轻量骨干的结论可能随呼叫时长分布与噪声条件变化。演示系统便于快速浏览被动声学监测数据，但实时性仅在高端 GPU 上实测，未覆盖端侧与流式延迟约束。欲深究问题形式化与训练配置可查阅方法概述和架构，消融与细分证据可查阅实验结果，复现条件与承认局限可查阅细节详述与局限与问题。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同一留出测试集上系统比较段长与骨干并如实报告长窗与更大骨干退化等负结果。

- 核心优势：针对K12与K14时间调制混淆明确给出FFT1024跳长172与频带等完整语谱图参数。

- 核心优势：最优模型在RTX5090上实测包含预处理与推理的端到端RTF为0.007。

- 主要短板：基线与最优同时改变采样率、下限频率、跳长、平滑、过采样与段长，无法分离STFT本身净增益。

- 主要短板：仅用Avacha Gulf单一海域数据且单次切分无置信区间，未验证跨种群方言泛化，最优下K12仍低于基线。

- 主要短板：摘要称评估五个段长而正文表格仅呈现四个取值，且结论将联合增益归因于平滑与过采样，存在口径出入。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 20. [面向数字健康的可信以人为中心人工智能：感知、理解与能力增强](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0910-3f7877bd36/)

> 英文题目：*[Human\-Centred Trustworthy AI for Digital Health: Sensing, Understanding, and Empowerment](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0910-3f7877bd36/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)；[静默语音接口](/audio-research-portal/papers/?concept=task.silent-speech)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 6.3/10 | 技术严谨 5.2/10 | 实验充分 4.6/10 | 清晰度 7.0/10 | 影响力 5.8/10 | 开源 0.0/10 | 可复现 2.5/10 | 工程/实践 5.0/10

排名：后50% | 文档类型：综述

会议来源：[官方记录](https://ijcai.org/proceedings/2026/910) · [官方 PDF](https://ijcai.org/proceedings/2026/0910.pdf)

👥 **作者与机构**

- Zhao Ren：Cognitive Systems Lab, University of Bremen, Germany

📌 **核心摘要**

**问题与瓶颈：** 本文面向非侵入可穿戴数字健康，输入为语音、体音与表面肌电等生理行为信号，输出为疾病筛查与严重度评估、连续监测与可听通信语音等可行动健康洞察。现有主流路线多为单病种单模态只求精度的深度模型，在异构噪声大、纵向多模态数据上难以解释决策依据，高风险临床场景中不准确、有偏或不可解释的预测直接影响患者安全与诊疗决策，构成准确性之外的可信鸿沟。基础模型与多模态大语言模型虽能跨模态迁移知识，却进一步加深黑盒复杂性，放大鲁棒性、公平性、隐私与安全顾虑。低成本可穿戴已能连续采集信号，但缺乏透明、鲁棒、安全且高效的系统承接，导致实验室精度难以转化为临床信任与日常可用性。

**核心思路与方法架构：** 与最接近的单任务高精度基线相比，本文保留信号处理与机器学习骨干，增量是提出感知、理解、赋能三支柱可信框架，将传感技术与临床决策支持直接衔接而非替换临床专家。感知分支覆盖语音副语言与心音呼吸音声学解剖，用于抑郁、双相障碍、阿尔茨海默病筛查与心血管呼吸监测，理解分支组合注意力局部解释、原型与辅助分数模型全局解释、概念级解释与声学验证，以及稀疏可迁移攻击、联合表示对抗训练、两阶段联邦防御、联邦学习与知识蒸馏轻量化设计。赋能分支聚焦面部肌电信号，肌电片段经因果端到端架构 Stream-ETS 直接转换为可听语音波形，同一任务也可用扩散概率模型 Diff-ETS 建模以改善自然度，并首提静默副语言学解码情感与社交意图等副语言状态。

**关键实验与核心代价：** 本文为愿景型框架论文，以既有独立研究汇总与公开语料建设为证据，未设置统一主基准与最强可比基线的同表同列对照。原文未提供可核对的关键定量结果。涉及的解释性、鲁棒性、轻量化与静默语音自然度与实时性改进均仅以文字定性描述呈现，未在本文件内给出可逐字核对的双方数值、单位与聚合方式，相关计算、显存与部署代价边界亦未披露。

**适用边界与深读导览：** 结论成立前提限于非侵入可穿戴采集的筛查、监测与喉切除等发声障碍者的静默通信增强，强调辅助临床专家而非替代，多模态生物信号基础模型、纵向学习、分布偏移与异构真实数据下的可解释鲁棒公平隐私与不确定性感知均列为未来方向，未覆盖失效场景、临床试验与部署成本验证。本文工作部分由德国研究基金会项目 Silent Paralinguistics 资助，生成式 AI 仅用于语言润色。需深究注意力与原型解释、攻防与蒸馏机制可查理解部分，肌电到语音系统与静默副语言学协议可查赋能部分，整体路线与未解问题可查引言框架图与展望结论部分。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（综述）：创新 16% · 严谨 18% · 实验 14% · 清晰 20% · 影响 22% · 复现 6% · 工程 4%（开源上限加分 +0.3）

- 核心优势：感知、理解、赋能三支柱框架将分散的传感解释与静默语音工作统一为可信路线图并明确辅助而非替代临床专家。

- 核心优势：以EMG-Vox与EMG-VCTK为基础布局跨说话人多说话人与零样本合成，并首提静默副语言学扩展到情感与社交意图识别。

- 主要短板：Diff-ETS主观显著改善仅文字定性描述，无听众数、MOS/CMOS数值与置信区间，主客观一致性完全无法判断。

- 主要短板：Stream-ETS实时声明仅有10ms片段7.72ms单点延迟，缺GPU型号、基线延迟、批量与方差，端侧可行性无法判断。

- 主要短板：作者自述仅从自身研究视角组织而非全领域综述，无系统检索去重协议、无定量表与统计检验，综述方法严谨性不足。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 21. [档案弱标签如何经交互精炼迁移为野外声学监测检测器](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0979-b875da011f/)

> 英文题目：*[Making Weak Supervision Interactive: Exploring Transfer from Sound Libraries to Passive Acoustic Monitoring Data](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0979-b875da011f/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-research-portal/papers/?concept=task.event-detection)
- **研究方法**：[迁移学习](/audio-research-portal/papers/?concept=method.transfer)；[弱监督学习](/audio-research-portal/papers/?concept=method.weak-supervised)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.4/10** | 创新 5.5/10 | 技术严谨 6.5/10 | 实验充分 5.8/10 | 清晰度 5.3/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 3.8/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：系统技术报告

会议来源：[官方记录](https://ijcai.org/proceedings/2026/979) · [官方 PDF](https://ijcai.org/proceedings/2026/0979.pdf)

👥 **作者与机构**

- Novruz Mammadli：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany；Carl von Ossietzky University of Oldenburg, Oldenburg, Germany
- Rida Saghir：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany；Carl von Ossietzky University of Oldenburg, Oldenburg, Germany
- Kanwar Ammar Ali：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany
- Prathmesh Doddanawar：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany
- Thiago S\. Gouvêa：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany；Carl von Ossietzky University of Oldenburg, Oldenburg, Germany
- Daniel Sonntag：German Research Center for Artificial Intelligence &#40;DFKI&#41;, Oldenburg, Germany；Carl von Ossietzky University of Oldenburg, Oldenburg, Germany

📌 **核心摘要**

**问题与瓶颈：** 被动声学监测（Passive Acoustic Monitoring， PAM）通过长期布设传感器实现生态系统连续观察，但海量野外录音依赖实例级标注即目标声事件起始与结束时间，而此类标注费时费力且需要野外专业知识。博物馆与社区声音典藏如 FNJV、Macaulay Library 和 Xeno-Canto 仅提供文件级弱标签即记录中出现何种物种，不给出时间定位，且多为归档目的录制，目标鸣声稀疏并常与他种鸣声、环境噪声及口述元数据混杂。既有启发式高能量片段提取仅依赖信号显著性，假设目标鸣声信噪比高于背景，未显式建模信息内容，在鸣声微弱、重叠或嵌入复杂声景时失效。作者前期多实例学习（Multiple Instance Learning， MIL）研究仅用强标注 PAM 数据衍生的弱标签训练与评测，且交互原型未迭代改进实例级模型，尚未打通真实馆藏到 PAM 部署的链路。

**核心思路与方法架构：** 与最接近基线即在 PAM 衍生弱标签上训练 MIL 并做一次性定位相比，本文增量在于把二进制 MIL 定位直接用于真实馆藏，经冻结声学嵌入迁移至独立 PAM 数据集，并以主动学习式人工二值标注迭代细化。单条馆藏录音以文件级存在语句如目标物种 c 出现于本记录作为弱标签，被切分为帧或短窗构成的包，实例级模型输出每帧存在概率，再经平均池化聚合为记录级预测，若至少一帧含目标鸣声则包判为正。系统支持 TALNet、CDur 与冻结 BirdNET 嵌入加轻量线性分类器三种实例级模型与池化策略可配，交互细化阶段冻结嵌入仅更新线性分类器，以降低迭代计算并在少量新标注下保持稳定。另设手动感兴趣区域（Region of Interest， ROI）检索入口，对单段标注提取嵌入并在目标 PAM 数据集中做向量相似检索，用于快速核查嵌入空间与迁移行为，论文未说明流式或严格因果约束。

**关键实验与核心代价：** 主评测在 FNJV 馆藏弱标签训练、AnuraSet PAM 强标注子集评测的迁移条件下进行，覆盖 5 个无尾目物种，以 3 秒分辨率计算实例级 F1、精确率（Precision）与召回率（Recall），数值越高越好。在 DENMIN 上 TALNet 的 F1 0.7865 高于 CDur 的 F1 0.4657，而 BirdNET 线性分类器的 F1 0.5782 居中，同一物种不同表示与 MIL 实例化差异明显。在 DENNAN 上 TALNet 的精确率 0.9943 与召回率 0.0878 呈高精度低召回形态，而 BirdNET 在该物种三项均为 0.0000。稀有鸣声物种 SCIFUS 上三模型 9 项指标均为 0.0000，全部失效。本文未报告主动学习细化后的定量增益与消融，冻结嵌入虽被表述为降低交互重训开销，但未披露训练推理耗时、显存占用或延迟实测。

**适用边界与深读导览：** 结论成立前提限于同时具备 FNJV 弱标签与 AnuraSet 强标注的 5 个新热带无尾目物种及 3 秒实例分辨率，未覆盖鸣声极稀疏、重叠严重或跨生境部署，也未量化标注人力与细化轮次对下游召回的换算关系。正文存在未解析的表格引用 table ??，且 BirdNET 持续高精确率的文字概括与表 1 中 BOARAN 精确率 0.0156、DENNAN 全零等数值存在字面出入。演示视频页可对照系统交互与迁移现象。欲深究二进制包假设、平均池化聚合与冻结嵌入轻量更新机制可查阅下方方法概述和架构，欲核对分物种分模型数值与失败证据可查阅实验结果章节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：在FNJV训练、AnuraSet评测的真实迁移下报告5物种×3模型的完整F1矩阵并保留SCIFUS全零失败行，负结果诚实可核对。

- 核心优势：采用冻结BirdNET嵌入仅更新线性分类器的交互设计，兼顾小样本稳定与快速迭代，并保留TALNet与CDur及池化策略可配。

- 主要短板：核心交互细化声称可改善馆藏定位与下游召回，但未报告细化前后定量增益与受控消融，主张与验证脱节。

- 主要短板：部分行F1与精确率召回率调和关系不一致，且正文BirdNET持续高精确率概括与表1低值零值矛盾，另有table ??未解析。

- 主要短板：以实时细化表述交互优势却未披露延迟、RTF、显存或硬件实测，也未说明流式因果约束，工程声称无实测支撑。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 22. [DeepL Voice 面向商务沟通的实时语音翻译系统解读](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0962-443fe0e542/)

> 英文题目：*[DeepL Voice: Real\-Time Speech\-to\-Speech Translation](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0962-443fe0e542/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[语音翻译](/audio-research-portal/papers/?concept=task.speech-translation) → [语音到语音翻译](/audio-research-portal/papers/?concept=task.speech-to-speech-translation)
- **研究方法**：[案例研究与实践报告](/audio-research-portal/papers/?concept=method.case-study)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.0/10** | 创新 5.2/10 | 技术严谨 6.2/10 | 实验充分 4.0/10 | 清晰度 6.8/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 2.0/10 | 工程/实践 5.0/10

排名：后50% | 文档类型：系统技术报告

会议来源：[官方记录](https://ijcai.org/proceedings/2026/962) · [官方 PDF](https://ijcai.org/proceedings/2026/0962.pdf)

👥 **作者与机构**

- Johannes Ernesti：DeepL Research
- Peter Kaiser：DeepL Research
- Jonas Heinze：DeepL Research
- Elnaz Shafaei\-Bajestan：DeepL Research
- Kristina Geißler：DeepL Research
- Weiyue Wang：DeepL Research
- Johannes Beck：DeepL Research
- Sascha Brinker：DeepL Research
- Thorben Finke：DeepL Research

📌 **核心摘要**

**问题与瓶颈：** 实时语音到语音翻译 (speech-to-speech translation, S2ST) 以连续语音为输入，以译文文本与译文语音为输出，要求在说话尚未结束时即产生翻译。现有级联路线将自动语音识别 (automatic speech recognition, ASR)、机器翻译 (machine translation, MT) 与语音合成 (text-to-speech, TTS) 串行堆叠，延迟在各级累积，且组件间局部启发式决策难以做全局权衡。逐词直译还会产生闪烁现象，即已显示译文随上下文不断推翻重写，既干扰阅读，也不适合送入 TTS 发声。德语动词后置从句与日语主宾谓语序更迫使系统在等待完整子句与提前猜测之间两难，文本瓶颈还会丢弃情感与强调等韵律信息。

**核心思路与方法架构：** 与最接近的常规级联基线相比，本文保留 ASR → MT → TTS 分工与 DeepL 神经机器翻译主体，增量在于以稳定文本流策略决定译文定稿时机，并配套面向商务的定制与企业部署，而端到端方案仅作并行探索未进入生产。对一条连续会议语音，专有实时 ASR 模型先做流式转写，MT 对不完整识别片段做增量翻译，稳定策略在质量、延迟与稳定性之间选择定稿点，一旦定稿便不再改写，从而消除闪烁并为后续 TTS 提供稳定的韵律基础。定制层提供正式度控制、术语表与口语术语功能，分别控制人称与动词形态、保证品牌与领域用词一致、保障缩略语与产品名被正确转写，从源头减少级联误差。生产形态包括会议实时字幕、移动双向对话与语音应用程序接口，原文未披露采样率、帧率、模型规模与冻结更新边界，也未给出定稿阈值与延迟预算。

**关键实验与核心代价：** 原文未提供可核对的关键定量结果，未报告评测数据集、划分、指标名、基线数值与对比方向，也未提供人工主观平均意见分 (mean opinion score, MOS, 越高越好 ↑) 与 UTMOS (越高越好 ↑)、DNSMOS (越高越好 ↑) 等神经代理指标，缺失人工听测且无法判断主客观是否一致。唯一可核对的事实是系统于 2024 年 11 月上线，支持 18 种输入语言和 30+ 种目标语言，并已接入 Microsoft Teams 与 Zoom 会议字幕、移动应用与应用程序接口。作者未做消融对比，未量化稳定策略对质量与延迟的影响，也未测量端到端延迟、实时系数或计算开销。主要代价在文中以定性方式交代，处理德语动词后置与日语语序重构时若要维持准确性便需等待完整子句，延迟必然上升，而提前输出则可能大幅改写并损害稳定性。

**适用边界与深读导览：** 现有结论仅适用于已覆盖语言的商务会议与面对面交流等企业场景，依赖稳定的会议平台集成与术语定制，尚未证明在低资源语对及医疗与法律等专业领域的表现。完整语音克隆式 S2ST 仍在研发与早期体验阶段，当前生产系统以语音到文本翻译为主，韵律与音色保留问题并未解决。读者可在产品网页对照会议字幕与语言选择等现象，但不应将其视为受控听感证据。欲深究级联取舍、语言特异性困难与定制机制，可查阅下文方法概述和架构、核心创新点与局限与问题对应内容。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：生产系统2024年11月上线，支持18种输入与30以上目标语言并接入Teams与Zoom三种部署形态。

- 核心优势：提出稳定文本流定稿权衡以消除闪烁，为TTS提供稳定输入并定性讨论德日语序延迟代价。

- 核心优势：组合8语种正式度控制、术语表与口语术语形成商务定制闭环并已部分落地企业场景。

- 主要短板：未设基准数据集、基线对照与统计检验，未开展MOS听测与代理指标评测且未做直接消融对比。

- 主要短板：宣称实时低延迟却未给RTF、前瞻、帧延迟与硬件规格，无端到端延迟吞吐成本实测支撑。

- 主要短板：未披露ASR与MT架构、数据规模预处理、采样率参数量与定稿阈值延迟预算等关键复现细节。

🔗 **开源资源**

- 论文所列链接：<https://www.deepl.com/products/voice> → <https://www.deepl.com/en/products/voice> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 23. [触摸与对话结合：面向盲人的多模态图书与网店演示](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0991-a83d069482/)

> 英文题目：*[AI\-Powered Interactive Multimodal Digital Book & Online Shop For Blind and Visually Impaired Users](/posts/conference-ijcai-2026-conference-paper-id-ijcai2026-0991-a83d069482/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-research-portal/papers/?concept=task.generic-multimodal-qa)；[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **应用**：[无障碍](/audio-research-portal/papers/?concept=application.accessibility)

<!--paper-tag-hierarchy-v1:end-->

评分：**4.2/10** | 创新 5.2/10 | 技术严谨 5.0/10 | 实验充分 2.5/10 | 清晰度 6.8/10 | 影响力 3.8/10 | 开源 0.0/10 | 可复现 2.2/10 | 工程/实践 4.5/10

排名：后50% | 文档类型：系统技术报告

会议来源：[官方记录](https://ijcai.org/proceedings/2026/991) · [官方 PDF](https://ijcai.org/proceedings/2026/0991.pdf)

👥 **作者与机构**

- Mazen Salous：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel Westphal：机构信息未能从会议 PDF 纯文本可靠映射
- Wilko Heuen：机构信息未能从会议 PDF 纯文本可靠映射
- Ayoub Ben Dhiab：机构信息未能从会议 PDF 纯文本可靠映射
- Charles Hudin：机构信息未能从会议 PDF 纯文本可靠映射
- Sabrina Paneels：机构信息未能从会议 PDF 纯文本可靠映射
- Susanne Boll：机构信息未能从会议 PDF 纯文本可靠映射
- Larbi Abdenebaoui：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 本工作服务盲人与低视力人群理解数字图像，输入为教材插图与商品图像等二维视觉内容，输出应为可触摸的材质分区、可听的语义标签与可追问的语音回答。传统替代文本与静态触觉图形制作费力且细节有限，无法支持像明眼人那样对局部连续细看与追问。已有音触结合工具多依赖预先编排的解说，缺少由用户触摸位置实时驱动的识别。困难在于触摸坐标、图像区域语义与语音问句必须在同一时刻对齐，任一环节缺失都会造成反馈错位，而长文本描述又难以承载空间与材质信息。

**核心思路与方法架构：** 与整图描述或预制触觉板相比，实质增量是把触摸触发的实时分割、开放词汇发现与语音到语音对话连成可交互循环，感知主干仍沿用现成模型。用户触摸 15.6 英寸 OLED 触摸屏上某区域时，触摸坐标触发分割模型 Segment Anything Model（SAM）做区域分割，同时开放集目标识别模型 Grounding DINO 做目标与子部件发现，两路视觉结果与触摸位置一并送入由 Whisper 与 GPT-4 构成的基于 OpenAI 的语音对话模块，模块返回结合上下文的语音回答。触觉侧由 16 个后置压电执行器与触觉模式库渲染反馈，模式库以频率、幅度、调制与包络区分材质与边界，并以空间掩膜限定作用范围。原文未披露各模型的冻结与更新边界，交互强调实时低时延，形态为便携可触摸原型，直接回应触摸与语义对齐的根因。

**关键实验与核心代价：** 原文未提供可核对的关键定量结果，未报告数据集划分、识别准确率、问答准确率或听测分数，也未与最强可比基线做同条件数值对比。展示性证据来自 2 个场景实例。在数字图书中触摸鸟类插图的翅膀与羽毛时触发振动并播报区域标签，用户可追问 What am I touching now，在在线商店中触摸运动鞋时区分织物与标志贴等不同触感，触摸标志贴为尖锐平滑振动，其他区域模拟更粗糙或更柔软材质，并回答 Is this rubber or fabric 等材质问句。早期用户反馈仅定性表述为可按自己节奏探索、提问并更独立地获取视觉信息，未给出人数、任务成功率或置信区间。关键消融、负结果与参数、显存、推理时延等代价均未披露，无法判断收益来源与开销。

**适用边界与深读导览：** 现有结论仅在演示级原型与示例图像上成立，前提是触摸定位准确、分割与对话服务可用且材质映射经预先设计，未覆盖复杂场景泛化、噪声语音、长期学习效果与部署成本。原文称系统由开源与低成本组件构建，未来可在学校、图书馆或家庭部署，但未给出成本与稳定性证据。演示视频可对照触摸问答的现象，但原文未提供可复现的评测数据。欲深究分割与对话衔接、触觉模式设计与场景实例，可查阅下文对应章节的组件说明与实例展开。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：把同一触摸坐标同时作为SAM分割查询、语音问答上下文与触觉渲染依据，形成可交互循环的问题定位清晰。

- 核心优势：覆盖数字图书鸟类插图与在线商店运动鞋双场景实例，触摸材质映射与追问示例具体可对照演示现象。

- 主要短板：未报告任何数据集、指标与基线数值且无消融对照，仅2个定性实例，无法判断收益来源与开销。

- 主要短板：宣称实时低时延与便携可部署却无RTF、延迟、吞吐、功耗或成本实测，属口头声称的工程主张。

- 主要短板：无定量评测致分割错误、识别错误与对话幻觉影响无法评估，材质映射保真度未经知觉实验验证。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---
