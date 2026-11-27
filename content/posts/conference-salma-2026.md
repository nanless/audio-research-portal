---
title: "salma-2026 论文深度解读"
date: 2026-11-27
draft: false
layout: "posts"
paper_digest_pipeline_owned: true
tags: ["表示探测","代码转换","低资源","多模态学习","幻觉与忠实度","基准测试","基准设计","激活因果干预","口语理解","鲁棒性","模型融合","数据集","数据集构建","数据增强","说话人分离标注","提示学习","统计分析","音频理解","音频推理","音频系统攻击与防御","语言识别","语音","语音编码","语音情感识别","语音识别","韵律与风格控制","指令微调","LoRA"]
categories: ["salma-2026 论文"]
description: "共收录 12 篇 salma-2026 会议论文深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-page"
paper_digest_reader_quality_schema_fingerprint: "0591bc89faa58048aa97bb75ab5c5fb13dd2c03caf24e0268ff442a5049b9d01"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"task","id":"task.spoken-understanding","label":"口语理解"},{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"},{"facet":"task","id":"task.speech-coding","label":"语音编码"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"}]
paper_digest_tags_scope: "aggregate-primary-task-counts"
---

# salma-2026 论文深度解读

本汇总收录已核验计划中全部 12 篇已完成分析、标签分配和单篇页面生成的论文。

🏷️ 标签说明：本期标签来自新版词表；热门方向只统计主任务。

## ⚡ 会议概览

计划入选的 12 篇论文已完成深度分析、读者文章和单篇页面生成。

### 🧭 会议研究脉络

- **焦点方向**：[#语音识别](/audio-research-portal/papers/?concept=task.asr)（5 篇，最高 6.7 分）、[#音频理解](/audio-research-portal/papers/?concept=task.audio-understanding)（2 篇，最高 6.7 分）、[#口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding)（1 篇，最高 6.8 分）、[#音频推理](/audio-research-portal/papers/?concept=task.audio-reasoning)（1 篇，最高 6.5 分）。
- **阅读与开源快照**：共 12 篇完成评分（精读必看 0 篇 · 重点关注 1 篇 · 速览参考 11 篇）；资源覆盖 💻 代码 0 篇、🤗 模型或数据 0 篇、🔊 试听演示 0 篇。

### 🎯 三档阅读分级

- **📌 重点关注（7.0–7.9 分）**（共 1 篇）：[说法改变拒绝：韵律条件安全分歧的定位与选择性修复](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/)（7.3 分）
- **⚡ 速览参考（7.0 分以下）**（共 11 篇）：[独立训练的语音与文本是整体重合还是邻域相近](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-10-aa6848466a/)（6.8 分）、[企业混读语音评测如何从字面误差走向任务成败](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-11-d4eee18658/)（6.7 分）、[对话语音核查中上下文与音频补充作用的受控检验](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-12-8280074de6/)（6.7 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[三语口语幻觉检测中合成基准与流水线噪声及来源混杂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-6-65fb3ab7f1/)（6.5 分）、[东南亚语音推理基准如何区分听见与听懂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-8-3eb570c6fc/)（6.5 分）、[弱监督大规模孟加拉语长音频语料的构建与评测](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-13-4d9147f72c/)（6.4 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[冻结识别器加小模型改写提升乌尔都语识别](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-7-8ca6d588d8/)（6.4 分）、[神经音频编码器中韵律的因果归属：输出侧消融揭示的双层结构](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-9-4380c150b5/)（6.4 分）、[金标保留合成如何为瑞典语逐字识别补足迟疑分布](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-4-cf43f70f0a/)（6.3 分）
- **⚡ 速览参考（7.0 分以下）**（续）：[Nuha\-Speech 构建通用阿拉伯语语音大模型](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-2-0898f27dc7/)（6.1 分）、[为对话下一句自动生成语音风格描述：TurnStyle 双模态上下文建模解…](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-1-0347b3b4f6/)（6 分）

### 🌟 会议精选焦点

> 🥇 **[说法改变拒绝：韵律条件安全分歧的定位与选择性修复](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/)** · 总分 **7.3**/10（前50% · 方法研究 · [#音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense)）
>
> 突出维度：技术严谨 8.3/10 · 实验充分 8.1/10 · 创新 7.6/10

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 | 分布 |
|---|---:|---|
| [#语音识别](/audio-research-portal/papers/?concept=task.asr) | 5 篇 | █████ |
| [#音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) | 2 篇 | ██ |
| [#口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding) | 1 篇 | █ |
| [#音频推理](/audio-research-portal/papers/?concept=task.audio-reasoning) | 1 篇 | █ |
| [#音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense) | 1 篇 | █ |
| [#语音编码](/audio-research-portal/papers/?concept=task.speech-coding) | 1 篇 | █ |
| [#韵律与风格控制](/audio-research-portal/papers/?concept=task.prosody-style-control) | 1 篇 | █ |

### 🏷️ 多级标签统计

每个层级都统计本期论文数：`直接` 是成员页面直接标记该标签的篇数，`含子树` 是该标签及其全部下级标签的去重论文数（registry 共 9 个分面，本期只列出有论文的分面）。各级链接进入论文库，按该概念及其下级筛选全站论文；这里的计数仅统计本期。

#### 研究任务

- [#语音识别](/audio-research-portal/papers/?concept=task.asr) — 直接 5 篇 · 含子树 5 篇
- [#音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) — 直接 2 篇 · 含子树 3 篇
  - [#音频推理](/audio-research-portal/papers/?concept=task.audio-reasoning) — 直接 1 篇 · 含子树 1 篇
- [#口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding) — 直接 2 篇 · 含子树 2 篇
- [#语言识别](/audio-research-portal/papers/?concept=task.language-identification) — 直接 2 篇 · 含子树 2 篇
- [#说话人分离标注](/audio-research-portal/papers/?concept=task.diarization) — 直接 1 篇 · 含子树 1 篇
- [#音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense) — 直接 1 篇 · 含子树 1 篇
- [#语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition) — 直接 1 篇 · 含子树 1 篇
- [#音频编码](/audio-research-portal/papers/?concept=task.audio-coding) — 直接 0 篇 · 含子树 1 篇
  - [#语音编码](/audio-research-portal/papers/?concept=task.speech-coding) — 直接 1 篇 · 含子树 1 篇
- [#语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) — 直接 0 篇 · 含子树 1 篇
  - [#韵律与风格控制](/audio-research-portal/papers/?concept=task.prosody-style-control) — 直接 1 篇 · 含子树 1 篇

#### 研究方法

- [#表示探测](/audio-research-portal/papers/?concept=method.representation-probing) — 直接 2 篇 · 含子树 2 篇
- [#激活因果干预](/audio-research-portal/papers/?concept=method.activation-intervention) — 直接 2 篇 · 含子树 2 篇
- [#数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation) — 直接 2 篇 · 含子树 2 篇
- [#参数高效微调](/audio-research-portal/papers/?concept=method.peft) — 直接 0 篇 · 含子树 2 篇
  - [#LoRA](/audio-research-portal/papers/?concept=method.lora) — 直接 2 篇 · 含子树 2 篇
- [#评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) — 直接 0 篇 · 含子树 2 篇
  - [#基准设计](/audio-research-portal/papers/?concept=method.benchmark-design) — 直接 2 篇 · 含子树 2 篇
- [#多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning) — 直接 1 篇 · 含子树 1 篇
- [#模型融合](/audio-research-portal/papers/?concept=method.model-combination) — 直接 1 篇 · 含子树 1 篇
- [#数据增强](/audio-research-portal/papers/?concept=method.augmentation) — 直接 1 篇 · 含子树 1 篇
- [#提示学习](/audio-research-portal/papers/?concept=method.prompt-learning) — 直接 1 篇 · 含子树 1 篇
- [#统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis) — 直接 1 篇 · 含子树 1 篇
- [#指令微调](/audio-research-portal/papers/?concept=method.instruction-tuning) — 直接 1 篇 · 含子树 1 篇

#### 研究条件

- [#低资源](/audio-research-portal/papers/?concept=setting.low-resource) — 直接 2 篇 · 含子树 2 篇
- [#多语言](/audio-research-portal/papers/?concept=setting.multilingual) — 直接 0 篇 · 含子树 1 篇
  - [#代码转换](/audio-research-portal/papers/?concept=setting.code-switching) — 直接 1 篇 · 含子树 1 篇

#### 信号

- [#语音](/audio-research-portal/papers/?concept=signal.speech) — 直接 2 篇 · 含子树 2 篇

#### 研究重点

- [#幻觉与忠实度](/audio-research-portal/papers/?concept=research_focus.hallucination-faithfulness) — 直接 1 篇 · 含子树 1 篇
- [#鲁棒性](/audio-research-portal/papers/?concept=research_focus.robustness) — 直接 1 篇 · 含子树 1 篇

#### 研究产物

- [#数据集](/audio-research-portal/papers/?concept=artifact.dataset) — 直接 6 篇 · 含子树 6 篇
- [#基准测试](/audio-research-portal/papers/?concept=artifact.benchmark) — 直接 3 篇 · 含子树 3 篇

## 📊 论文评分排行榜

| 排名 | 论文 | 中文导览 | 总分 | 分档 | 文档类型 | 主任务 | 资源 |
|---|---|---|---:|---|---|---|---|
| 🥇 | [When How You Speak Changes What Models Refuse: Investigating Prosody\-Conditioned Safety Divergence in Audio\-Language Models](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/) | [说法改变拒绝：韵律条件安全分歧的定位与选择性修复](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/) | 7.3 | 前50% | 方法研究 | [#音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense) | - |
| 🥈 | [Echoes in Plato’s Cave: Measuring Global and Local Alignment Between Speech and Language Representations](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-10-aa6848466a/) | [独立训练的语音与文本是整体重合还是邻域相近](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-10-aa6848466a/) | 6.8 | 前50% | 方法研究 | [#口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding) | - |
| 🥉 | [CoSE\-E: A Benchmark for Code\-switched Speech Evaluation in Enterprise Settings](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-11-d4eee18658/) | [企业混读语音评测如何从字面误差走向任务成败](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-11-d4eee18658/) | 6.7 | 前50% | 数据集与基准 | [#语音识别](/audio-research-portal/papers/?concept=task.asr) | - |
| 4 | [Context\-Aware Multimodal Claim Verification in Spoken Dialogues](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-12-8280074de6/) | [对话语音核查中上下文与音频补充作用的受控检验](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-12-8280074de6/) | 6.7 | 前50% | 数据集与基准 | [#音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) | - |
| 5 | [Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-6-65fb3ab7f1/) | [三语口语幻觉检测中合成基准与流水线噪声及来源混杂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-6-65fb3ab7f1/) | 6.5 | 前50% | 数据集与基准 | [#音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) | - |
| 6 | [SEABED: SouthEast Asian Benchmark for Evaluating Audio Reasoning](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-8-3eb570c6fc/) | [东南亚语音推理基准如何区分听见与听懂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-8-3eb570c6fc/) | 6.5 | 前50% | 数据集与基准 | [#音频推理](/audio-research-portal/papers/?concept=task.audio-reasoning) | - |
| 7 | [Lipi\-Ghor: A Large\-Scale, Diarized, Multi\-Domain Bengali Speech Corpus and a Scalable Pipeline for Building It](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-13-4d9147f72c/) | [弱监督大规模孟加拉语长音频语料的构建与评测](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-13-4d9147f72c/) | 6.4 | 前50% | 数据集与基准 | [#语音识别](/audio-research-portal/papers/?concept=task.asr) | - |
| 8 | [Improving Urdu ASR with Fine\-Tuned Small Language Models for Post\-ASR Error Correction](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-7-8ca6d588d8/) | [冻结识别器加小模型改写提升乌尔都语识别](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-7-8ca6d588d8/) | 6.4 | 前50% | 方法研究 | [#语音识别](/audio-research-portal/papers/?concept=task.asr) | - |
| 9 | [Am I Audible Now? Dissecting Prosody in Neural Audio Codecs](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-9-4380c150b5/) | [神经音频编码器中韵律的因果归属：输出侧消融揭示的双层结构](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-9-4380c150b5/) | 6.4 | 前50% | 方法研究 | [#语音编码](/audio-research-portal/papers/?concept=task.speech-coding) | - |
| 10 | [Gold\-Preserving Synthetic Augmentation for Verbatim Swedish Automatic Speech Recognition](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-4-cf43f70f0a/) | [金标保留合成如何为瑞典语逐字识别补足迟疑分布](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-4-cf43f70f0a/) | 6.3 | 前50% | 方法研究 | [#语音识别](/audio-research-portal/papers/?concept=task.asr) | - |
| 11 | [Nuha\-Speech: Building General\-Purpose Arabic Speech\-LLMs](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-2-0898f27dc7/) | [Nuha\-Speech 构建通用阿拉伯语语音大模型](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-2-0898f27dc7/) | 6.1 | 前50% | 模型报告 | [#语音识别](/audio-research-portal/papers/?concept=task.asr) | - |
| 12 | [TurnStyle: Suggesting Style Prompts for Instruction\-Guided Text\-to\-Speech Using Bimodal Dialogue Contexts](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-1-0347b3b4f6/) | [为对话下一句自动生成语音风格描述：TurnStyle 双模态上下文建模解读](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-1-0347b3b4f6/) | 6 | 前50% | 方法研究 | [#韵律与风格控制](/audio-research-portal/papers/?concept=task.prosody-style-control) | - |

---

## 📋 论文列表

### 1. [说法改变拒绝：韵律条件安全分歧的定位与选择性修复](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/)

> 英文题目：*[When How You Speak Changes What Models Refuse: Investigating Prosody\-Conditioned Safety Divergence in Audio\-Language Models](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-3-63f34bbe3e/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense)
- **研究方法**：[激活因果干预](/audio-research-portal/papers/?concept=method.activation-intervention)；[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.3/10** | 创新 7.6/10 | 技术严谨 8.3/10 | 实验充分 8.1/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.3/) · [官方 PDF](https://aclanthology.org/2026.salma-1.3.pdf)

👥 **作者与机构**

- Akash Das：机构信息未能从会议 PDF 纯文本可靠映射
- Ishan Roy：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 音频语言模型直接摄入原始语音，同时建模词汇内容与语调、强度、语速等副语言声学，本文安全特指对有害指令服从的语义安全而非情绪或社交安全。现有评估多把语音视作带噪文本通道，默认经人类反馈强化学习对齐的文本骨干可跨声学实现保持拒答。但权威或紧迫的韵律交付会重构字面文本的语用含义，使语义安全边界与非词汇特征纠缠而变得多孔。前端频谱滤波或音色转换等粗粒度净化把韵律当噪声去除，会连带破坏对意图与细微差别的理解，无法在感知权威语音的同时守住安全策略。

**核心思路与方法架构：** 与黑盒红队仅演示越狱不同，本文增量在于先建立词汇严格匹配的行为效应，再做白盒因果定位，最后以因果验证方向做免微调的推理时轨迹转向，保留其余表征不动。单条样本取同一有害提示经 StyleTTS 2 生成的中性母波形，再经基频约 ±20%、强度约 ±3 dB、语速 0.8× 与 1.2× 的独立或组合扰动得到词汇相同的对照音频，外部转写与声学校验做保真过滤。分析对象为参数冻结的 Qwen2-Audio-7B-Instruct 与 SALMONN-7B，前者为 61 层架构含 32 层音频编码器加模态投影与解码器，用动态时间规整在匹配词跨度内对齐变长隐状态并池化为 10 个语音区，再以正则线性探测度量可解码性，以双向激活补丁的因果效应与恢复分数区分必要与充分。对验证层内达标的配对差异做奇异值分解取低秩正交基，在推理时以常开几何约束减去不安全子空间投影，强度在验证集权衡后固定并在留出测试集评估。

**关键实验与核心代价：** 在约 5 000 条有害指令与匹配良性对照的合成语料上，混合效应逻辑回归以语义提示与说话人为随机截距，基频扰动的对数几率系数为 0.85（95% 置信区间 [0.57, 1.13]，优势比 2.34），强度为 0.42（95% 置信区间 [0.23, 0.61]），基频与强度交互为 0.65（95% 置信区间 [0.40, 0.90]），语速单独不显著。组合韵律攻击使 Qwen2-Audio-7B-Instruct 的攻击成功率从 58% 降至转向后的 6%，SALMONN-7B 从 55% 降至 9%，均为越低越好。同一操作点上 LibriSpeech 词错率（WER）从 4.2% 微升至 4.4%，IEMOCAP 情绪识别 Macro-F1 从 74% 降至 73%，SLURP 意图准确率从 86% 降至 85%，匹配良性指令成功率保持在 98%，显示安全收益并非以广泛抑制为代价。机制上编码器内探测 AUROC 约 0.51 接近随机，模态接口后攀升并在中后解码器后半语音区超过 0.90，但双向补丁仅在解码器第 14–24 层同时诱发服从与恢复安全，随机方向几乎无效而未过滤原始主成分虽压低服从却破坏效用。未见声学因子上同一固定转向仍能压低服从但幅度弱于发现维度，构成部分负结果。安全判定由独立于被测模型的外部安全判分器给出连续服从分与攻击成功率，并在 240 条跨中性、攻击与转向响应的分层子集上经 3 名标注者验证，Fleiss κ 为 0.82，不涉及听感主观评分。

**适用边界与深读导览：** 结论限于英语合成语音、基频、能量与语速三维及附录未见因子测试，未覆盖频谱与音质等韵律因素与自然语音、多语种及商用模型，解码器第 14–24 层应理解为层与时间联合的因果中介区而非精确词元位置。防御设定为白盒推理时访问隐状态，与攻击侧黑盒仅改韵律不碰参数的威胁模型不对等，且未实测延迟、吞吐与压缩部署下的校准需求。深究对数几率混合模型、因果效应与恢复分数定义、错误发现率校正与低秩截断可查下方方法与附录公式，消融对照与跨架构数值可查实验结果表格。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：组合韵律攻击服从率从58%降至6%且WER仅4.2%升至4.4%效用基本保持，并在SALMONN-7B上复现55%降至9%。

- 核心优势：词汇保真双过滤与DTW对齐结合双向激活补丁及10000次置换FDR校正实现相关可解码与因果中介分离定位。

- 核心优势：混合效应逻辑回归给出基频对数几率0.85等置信区间并经240条三分层人标验证Fleiss κ达0.82。

- 主要短板：结论限于英语合成语音与基频能量语速三维及两开源模型，未覆盖自然语音多语种商用模型与频谱音质因素。

- 主要短板：攻击为黑盒输入操控而防御需白盒访问隐状态且未报告推理代价，使稀疏干预部署可行性无法判断。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 2. [独立训练的语音与文本是整体重合还是邻域相近](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-10-aa6848466a/)

> 英文题目：*[Echoes in Plato’s Cave: Measuring Global and Local Alignment Between Speech and Language Representations](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-10-aa6848466a/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding)
- **研究方法**：[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 6.4/10 | 技术严谨 7.4/10 | 实验充分 7.2/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 8.3/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.10/) · [官方 PDF](https://aclanthology.org/2026.salma-1.10.pdf)

👥 **作者与机构**

- Alef Iury Siqueira Ferreira：Federal University of Goiás, Goiânia, Brazil
- Lucas Rafael Stefanel Gris：Federal University of Goiás, Goiânia, Brazil
- F S de Oliveira：Federal University of Mato Grosso, Cuiabá, Brazil
- Arlindo Rodrigues Galvão Filho：Federal University of Goiás, Goiânia, Brazil
- Anderson Da Silva Soares：Federal University of Goiás, Goiânia, Brazil

📌 **核心摘要**

**问题与瓶颈：** 研究比较 9 个独立训练的语音编码器与 10 个文本编码器的表征是共享整体几何还是仅共享局部邻域结构。输入是语言内容固定的 600 个英语句子在不同说话人与情绪下的语音实现，输出是各层句子向量之间的跨模态相似分数。柏拉图表征假设预期能力越强对齐越强，但跨全部层对取最大值会随搜索数量膨胀，小带宽核在 ℓ2 归一化表征上还会饱和，语音中语言、说话人、韵律信息沿深度纠缠也使单层或未校准的最大值无法区分真实共享与选择偏差。

**核心思路与方法架构：** 与最接近的视觉-文本聚合感知校准基线的实质增量是将同一置换与取最大流程扩展到语音-文本全部层对，并用内容固定而声学受控的合成语料隔离词法内容与实现变异。沿 SICK 句子追踪，同一文本在 24 种说话人-情绪参考下经 4 个零样本 TTS 系统合成 4 个候选并按情绪一致、情绪置信与平均转写误差筛选保留 1 条，共得 14,400 条语音。语音与文本编码器均冻结且不学习跨模态映射，语音隐状态按时间平均池化，文本隐状态按有效非特殊词元平均池化，余弦相似求最近邻，对每个层对计算相似度后取条件级最大值，再对样本对应关系做 200 次置换并重复同一取最大操作，报告与零均值差、超 95 百分位阈值余量与 BH-FDR 校正显著性，全程为离线分析。

**关键实验与核心代价：** 在 600 个句子的 2,160 个条件下，互近邻重叠在 k = 10 时原始最大分数为 0.249 ± 0.035，高于随机基线 0.017，校准后仍为 0.231 ± 0.036，保留 92.4 ± 2.1% 幅度并超出置换阈值 0.226 ± 0.051，2,160/2,160 个条件经校正后显著。同一设置下径向基函数中心核对齐在 σ = 0.1 时原始分数高达 0.986 ± 0.017，校准后仅为 0.072 ± 0.056，只保留 7.4 ± 7.7% 并超出阈值 0.002 ± 0.004，线性中心核对齐原始分数为 0.398 ± 0.095，表征相似性分析为 0.345 ± 0.064，说明近顶分数是核饱和伪影而非全局共享。最大对齐集中于晚期语音层与早期文本层，语音编码器解释 95.4% 的编码器间变异而文本编码器仅解释 3.3%。本研究为表征诊断而非生成评测，未开展人工主观听测，故无平均意见分与神经代理指标的比较。主要代价是每个条件需在 169 至 1,813 个层对上取最大并重复 200 次置换，计算集中于校准而非训练。

**适用边界与深读导览：** 结论成立前提是合成英语、6 个说话人、4 种情绪与 SICK 句式，不覆盖自然语音、复杂声学、其他语言与细粒度全局几何，词法重叠与语义相关也未完全分离。公式中变量、下标与带宽含义可查下方方法概述，层位置、编码器主导性与说话人、韵律、语义零关联的细分证据可查下方实验结果与附录 C 对应表格。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：互近邻重叠经200次聚合感知置换校准后保留92.4%幅度且2160/2160条件显著，余量远超随机基线0.017。

- 核心优势：600句交叉6说话人4情绪经4个TTS合成筛选得14400条内容固定声学受控语料，支撑说话人韵律不变性检验。

- 核心优势：小带宽RBF-CKA原始0.986校准后仅保留7.4%且阈值近0.984，揭示核饱和伪影并与大带宽排序反转形成诊断。

- 主要短板：线性CKA与RSA未执行完整置换校准，论文自认不能据此断言全局几何收敛削弱全局结论完整性。

- 主要短板：结论仅限合成英语6说话人4情绪与SICK句式，可能不迁移至自然语音复杂声学与其他语言场景。

🔗 **开源资源**

- 论文所列链接：<https://github.com/alefiury/Echoes-Platos-Cave> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/alefiury/Echoes-Platos-Cave> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 3. [企业混读语音评测如何从字面误差走向任务成败](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-11-d4eee18658/)

> 英文题目：*[CoSE\-E: A Benchmark for Code\-switched Speech Evaluation in Enterprise Settings](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-11-d4eee18658/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual) → [代码转换](/audio-research-portal/papers/?concept=setting.code-switching)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 7.2/10 | 技术严谨 8.2/10 | 实验充分 6.3/10 | 清晰度 7.0/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.11/) · [官方 PDF](https://aclanthology.org/2026.salma-1.11.pdf)

👥 **作者与机构**

- Shama Gupta：ServiceNow AI Research
- Hoang H Nguyen：ServiceNow AI Research
- Chelsea Huang：Qualcomm Technologies, Inc\.
- Lindsay Devon Brin：ServiceNow AI Research
- Fanny Riols：ServiceNow AI Research

📌 **核心摘要**

**问题与瓶颈：** 企业语音代理处理人力资源与信息技术服务管理请求时，输入常为以非英语为矩阵语言、嵌入英语术语的语码转换 (code-switching, CS) 语音，输出需准确转写关键实体才能正确分单或回答政策问题。现有会话语码转换评测只看转录文本，常用词错率 (Word Error Rate, WER, 越低越好 ↓) 对跨语言书写、大小写与分词高度敏感，且均匀计权会淹没决定任务成败的高信息词。更关键的是错误传播未经检验，即转换点附近的转写失误是否以及多大程度改变下游答案，现有企业语料稀缺使该问题无法回答。

**核心思路与方法架构：** 与最接近的会话语料和商业系统评测相比，增量在于限定企业域、强制全语码转换覆盖并以任务后果为第一目标，保留多指标可比性。流水线以平行人力资源与信息技术服务管理语句为源，先筛选 12 到 40 词且含实体的候选，再用大语言模型生成以非英语为框架、嵌入英语技术片段的多样化文本，随后经数字规范与口语化改写后送入语音合成 (text-to-speech, TTS) 生成 24 kHz、16 位脉冲编码调制单声道音频，最后由母语语言学家校验自然度与保真度。全集含 259 条西班牙语—英语、298 条法语—英语、188 条加拿大法语—英语、173 条德语—英语和 294 条普通话—英语，共 1212 条，自动语音识别 (automatic speech recognition, ASR) 评测时均使用原生自动语言检测。评测除 WER 与语义词错率 (Semantic Word Error Rate, SWER, 越低越好 ↓) 外，以答案错率 (Answer Error Rate, AER, 越低越好 ↓) 为主指标，由问题生成器针对每条参考文本生成 3 个英文理解题，回答器分别依据参考与假设转写作答，对齐裁判比较答案是否语义一致。

**关键实验与核心代价：** 在 5 个语对上比较 8 个系统时，顶层 Scribe-V2、Gemini-3-Flash 与 AssemblyAI 的 WER 集中在 0.02 到 0.05，中层为 Qwen3-Omni、Voxtral、Nova-3 与 Parakeet，Whisper-Large-v3-Turbo 因自动检测下译码为翻译模式而显著落后。同一语对内排序随指标改变，在西班牙语—英语上 Qwen3-Omni 的 WER 为 0.042，排名第六，但 AER 为 0.027，低于 Scribe-V2 而居第一，作者报告低约 18%。中文揭示了表层指标脆弱性，Gemini-3-Flash 经繁体到简体归一后 WER 从 0.167 变为 0.090，降幅为 46%，而 AER 保持 0.059 不变，Whisper 的 WER 为 1.494、字错率 (Character Error Rate, CER, 越低越好 ↓) 高达 2.516，但 AER 上界为 0.515。语码转换代价从 WER 向 AER 衰减，62 个非 Whisper 组合中显著为正的比例从 WER 下 63% 降至 SWER 下 50% 和 AER 下 15%，约 80% 语句在 SWER 与 AER 下完全不变，但一旦引入关键实体错误，下游答案恶化概率从约 5% 升至约 40%，风险比约 8 倍。人工校验显示问题可答率在 97.5% 到 99.8%，Gwet 一致性为 0.978 到 0.991，但无感知质量听测，AER 仅为代理指标。

**适用边界与深读导览：** 结论仅在合成干净语音、英语为嵌入语、句内插入型转换及零单语条件下成立，不覆盖电话信道、口吃重叠、多厂商合成及印地语—英语等高用量语对，单厂商合成可能偏向同厂商识别器。欲复核公式含义与显著性口径可查方法概述中的指标与检验设计，欲复核跨语对排序反转与实体传播机制可查实验结果中两张小表及相邻解读。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：1212条强制零单语覆盖5语对，经母语校验与双基线配对加Holm校正置换检验，协议设计严密可核对。

- 核心优势：同语对内WER与AER排序反转及实体错误致答案恶化风险比约8倍，揭示表层指标与任务后果系统性背离。

- 主要短板：音频为单厂商合成干净语音，不含电话带宽噪声口吃，仅句内插入且英语为嵌入语，声学泛化明显受限。

- 主要短板：AER为大语言模型问答代理指标，未使用MOS或UTMOS等真人听测，感知相关推断缺乏直接人审支撑。

- 主要短板：数据集声称经Hugging Face公开但无可验证精确链接，且未提及代码权重，核心产物开放复用不完整。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 4. [对话语音核查中上下文与音频补充作用的受控检验](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-12-8280074de6/)

> 英文题目：*[Context\-Aware Multimodal Claim Verification in Spoken Dialogues](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-12-8280074de6/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding)
- **研究方法**：[模型融合](/audio-research-portal/papers/?concept=method.model-combination)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.6/10 | 技术严谨 6.5/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 7.9/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.12/) · [官方 PDF](https://aclanthology.org/2026.salma-1.12.pdf)

👥 **作者与机构**

- Chaewan Chun：The Pennsylvania State University, USA
- Delvin Ce Zhang：University of Sheffield, UK
- Dongwon Lee：The Pennsylvania State University, USA

📌 **核心摘要**

**问题与瓶颈：** 播客与直播中的事实性陈述常嵌入多轮双人对话，相关语境分散在不同轮次，听众无法像文本那样依赖引用与超链接核查。现有事实核查多评估孤立书面陈述，相关基准多为文本或文本图像，缺少兼具会话音频、时间戳与可核查标注的大规模资源。口语误导常经互动构建，单独看似无害的陈述可能在附和、质疑、再解释或展开中变得误导，孤立断言模型难以捕捉。既有对话核查多改造文本证据检索管线，未检验语音信号本身是否在转写文本之外提供可验证线索，也未系统比较不同方向与范围的对话上下文对不同模态的作用。

**核心思路与方法架构：** 本文沿用 MAD 管线并以 MoonCast 双人播客合成替代 XTTS-v2 以获得更自然韵律与话轮流转，以 WhisperX 词级时间戳实现断言到音频的精确对齐，并以校准后条件事后融合替代联合微调。MAD2 以 Gemini 2.5 Pro 在不知晓真假标签条件下由 LIAR 的 500 条真与 500 条假政治断言各生成一个脚本， conditioning 于虚构说话人画像、3 类引入方式与 5 类互动场景，共 1000 个对话、8192 个句子、1230 个候选（537 真 / 693 假）与 10 小时 4 分钟音频，平均 36 秒 / 对话。建模实例须同时满足可核查、有继承二值标签、对齐分数 ≥ 0.8 且平均 ASR 置信度 ≥ 0.8，对齐过滤去除 1 个、置信度过滤去除 98 个，剩余 1131 个实例来自 845 个对话。音频支路以 94.68M 参数的 WavLM-base+ 编码两侧各外扩 0.15 s 的 16 kHz 连续波形裁剪，经断言时间戳映射的二值掩膜与双层感知机加 tanh 注意力池化聚焦断言帧，再经层归一化与 Linear-ReLU-Dropout（0.1）-Linear 头输出二分类对数几率。文本支路将同一句子窗的 WhisperX 转写序列化，以 `[CLAIM_START]` 与 `[CLAIM_END]` 标记目标句并以 `[SPK_A]`、`[SPK_B]` 与 `[TURN_SEP]` 保留结构，经 125M 参数的 RoBERTa-base 编码后做掩膜均值池化并经相同结构分类头输出对数几率。融合先比较 Platt 缩放、等温回归与不校准，结果全部组合均选中等温回归，再按上下文与种子在验证集上以 AUC 为准从固定加权、召回提升、音频覆盖、条件加权、取大五种规则加纯文本选项中择优，并以 F1 在验证集上调定阈值。

**关键实验与核心代价：** 在对话不相交且按场景与引入方式分层、三种子平均与 10 000 次配对对话级自助检验下，从仅断言到全对话的 AUC 从音频单模 0.651 变为 0.784，文本单模从 0.746 变为 0.819，融合从 0.727 变为 0.839，原文报告增益分别为 +0.133、+0.073 与 +0.112，文本与音频差距从 0.095 缩小至 0.035。仅用过去两句的实时模式与对称两句的离线模式相比，音频为 0.713 高于 0.686，文本为 0.779 与 0.780 基本持平，融合为 0.779 高于 0.765，三组配对区间在三个种子中均包含零。融合在四个配置中低于文本并在实时 -2 中以 0.779 与 0.779 持平，仅在全对话中以 0.839 高于文本的 0.819，原文报告为 +0.020，但全部上下文与种子组合的融合减文本 AUC 的 95 % 区间均包含零。全对话分层中协作质疑下融合以 0.883 高于文本的 0.804，原文报告为 +0.079，随意传言中以 0.818 高于文本的 0.773，原文报告为 +0.045，经典辩论中以 0.814 低于 0.837，未解决争论中以 0.861 与 0.858 基本持平。主要代价在于音频训练每配置约需 5.7 小时而文本三配置并行约需 1.5 小时，双模态在 20 % 至 38 % 的测试预测上不一致，且初步联合微调含两阶段冻结再联合方案均未在验证集上超过校准融合，本文未做人工主观听测而以 AUC 与 F1 为主并以词错率（WER）4.21 % 检验音频与脚本一致性。

**适用边界与深读导览：** 结论仅在合成英语双人对话、继承 LIAR 真假标签且转写经自动识别获得的条件下成立，合成韵律模式可能与标签相关，难以直接推广至含噪声、重叠与多人交互的真实播客或多语场景。融合的全对话平均优势与分组差异均为探索性描述而非因果证据，部署前仍需人工复核与自然对话校准，深究合成与对齐流程可看下文方法概述和架构，消融与分组数值可查实验结果表格与附录融合规则。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以1000对话8192句1230候选与10小时音频构建带WhisperX词级时间戳与双重质量门控的匹配多模态评测基准。

- 核心优势：在对话不相交分层划分下做六种上下文三模态对照、三种子平均与10000次配对对话级自助检验并保留负结果。

- 主要短板：合成限于双人英语对话且继承LIAR标签，合成韵律可能与标签相关而无法迁移至真实噪声重叠多语播客。

- 主要短板：融合全对话仅以0.839高于文本0.819且全部融合减文本95%区间均包含零，分组差异仅为探索性描述。

🔗 **开源资源**

- 论文所列链接：<https://huggingface.co/datasets/chaewanC/MAD2> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 5. [三语口语幻觉检测中合成基准与流水线噪声及来源混杂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-6-65fb3ab7f1/)

> 英文题目：*[Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-6-65fb3ab7f1/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究重点**：[幻觉与忠实度](/audio-research-portal/papers/?concept=research_focus.hallucination-faithfulness)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.5/10 | 技术严谨 5.8/10 | 实验充分 6.6/10 | 清晰度 6.7/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.6/) · [官方 PDF](https://aclanthology.org/2026.salma-1.6.pdf)

👥 **作者与机构**

- Meruyert Aristombayeva：Satbayev University, Almaty, Kazakhstan
- Jason S Lucas：University of Colorado Boulder, Boulder, CO, USA
- Chaewan Chun：The Pennsylvania State University, University Park, PA, USA
- Dongwon Lee：The Pennsylvania State University, University Park, PA, USA

📌 **核心摘要**

**问题与瓶颈：** 本文研究无参考口语幻觉检测，输入为单条目标新闻的文本、合成语音或 ASR 转录文本，不提供源文章与外部证据，输出为是否篡改的二分类以及篡改类型与严重度分级。现有文本幻觉检测难以直接迁移至语音，原因是文本到语音合成与自动语音识别构成级联噪声并放大误差，低资源哈萨克语的合成自然度与识别精度更弱，且缺乏覆盖英语、俄语与哈萨克语的大规模三态对齐基准，合成基准中人类原文与机器改写和标签完全相关也未在真实谣言上验证。

**核心思路与方法架构：** 与最接近的文本合成幻觉管线相比，增量在于三语平行控制、三种篡改类型与三级严重度分级、语言专用合成到识别渲染、factcheck.kz 真实评估切分与来源控制分析，源文章仅用于生成标签而不提供给检测器。以哈萨克斯坦新闻原文为例，先由 gpt-3.5-turbo 与 gpt-4 生成英文改写、由 gemini-2.0-flash-lite 生成俄文与哈萨克文改写，类型为 factual fabrication、factual contradiction 或 context inconsistency，严重度为 mild、moderate 或 severe，再经 Coqui XTTS-v2、Silero TTS 或 Kazakh TTS 以多说话人合成音频，继而经 Whisper-large-v3 或微调 wav2vec2 转写，随后仅将目标文本、转录文本或音频送入微调多语编码器或冻结零样本多模态解码器分类，全程为离线长音频条件，WER 与 CER 在小写去标点去数字后按语料级计算。

**关键实验与核心代价：** 在合成子集上，语料级 WER 与 CER 在英文为 7.30% 与 2.74%，俄文为 9.08% 与 4.74%，哈萨克文为 34.04% 与 16.90%，总体为 13.02% 与 6.46%，哈萨克文残留误差约为英文与俄文的四倍。在原文文本上微调编码器的二分类 macro-F1 为 0.52 - 0.89，而类型与严重度仅为 0.14 - 0.68 与 0.15 - 0.66，mDeBERTa 在细粒度上降至 0.153 - 0.188。在转录文本上，Gemma-3n 的二分类 macro-F1 为 0.613 / 0.581 / 0.630，高于对应多数类基线 0.399 / 0.419 / 0.409，其余四种解码器未超过各自二分类基线。在合成训练与真实评估条件下，二分类 macro-F1 在真实源文本上为 0.82 - 0.88，与合成测试持平或更高，但俄文忠实 LLM 改写使 ReMBERT 标记率从 0.352 升至 1.000，mDeBERTa 从 0.221 升至 0.586，仍低于其在合成幻觉上的 0.893。主代价是原文到转录总体下降但非一致，XLM-R large 在俄语二分类转录上 macro-F1 为 0.827，高于原文的 0.747，音频中位时长 96 s 且截断未经验证，人工听测缺失，仅有 120 例哈萨克可懂度抽查与 LLM 评分。

**适用边界与深读导览：** 结论仅在朗读式合成新闻、文本级标签与无参考分类前提下成立，不覆盖自发语音、自然录音部署与证据检索验证，英文无真实切分，语言与生成器身份部分混杂，音频与转录因覆盖与类别平衡不同不可直接比较。欲复核提示模板、双评审一致性与转录清洗规则可查附录 A、附录 D 与第 3.4 节，欲深究编码器原文与转录对照、解码器失败模式与来源控制矩阵可查第 4.1 节至第 4.3 节与第 5 节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：12013条英俄哈三语文本-合成音频-转录三态对齐，控制三种篡改类型与三级严重度并配套290条真实谣言平行评估切分。

- 核心优势：双外部评审在事实维度二次加权kappa达0.875与0.897且一点内一致率100%，并以忠实改写四格矩阵量化来源混杂与迁移0.82-0.88。

- 主要短板：38.3%抽查音频存在重大语义偏离且中位96s长音频截断未经验证，文本级标签在音频上可能不可恢复。

- 主要短板：无人工主观MOS且无UTMOS/DNSMOS等代理指标对照，仅120例哈萨克可懂度抽查与LLM评分，主客观对照缺失。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 6. [东南亚语音推理基准如何区分听见与听懂](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-8-3eb570c6fc/)

> 英文题目：*[SEABED: SouthEast Asian Benchmark for Evaluating Audio Reasoning](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-8-3eb570c6fc/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频推理](/audio-research-portal/papers/?concept=task.audio-reasoning)；[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)；[语言识别](/audio-research-portal/papers/?concept=task.language-identification)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.6/10 | 技术严谨 6.2/10 | 实验充分 7.3/10 | 清晰度 6.7/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 5.3/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.8/) · [官方 PDF](https://aclanthology.org/2026.salma-1.8.pdf)

👥 **作者与机构**

- Harshit Rajgarhia：Centific AI Research
- Asif Shaik：Centific AI Research
- Rachuri Lokesh：Centific AI Research
- Sushanta Kumar Pani：Centific AI Research
- Abhishek Mukherji：Centific AI Research

📌 **核心摘要**

**问题与瓶颈：** 现有音频语言模型（large audio language model, LALM）已从转写正确率转向能否从声音中推理，输入为 16 kHz 东南亚真实语音，输出为多项选择与开放作答的答案与依据。东南亚覆盖 6.5 亿人口与上千种语言，许多语言依靠声调区分词义，方言连续体拼写相近而身份与含义寄于韵律，转写会抹去关键证据。英语通用推理基准几乎只测英语通用音频，且 MMAU 近半题目在静音后仍可凭文本先验答对，原文报告为 49.8%，无法证明聆听。东南亚现有评测沿用识别、翻译与副语言分类体系，只能验证是否听见语音，无法验证是否据声学现象完成关系推理与消歧。

**核心思路与方法架构：** 与最接近的英语通用推理基准和东南亚识别类评测相比，SEABED 保留多跳设计、强干扰项与混合题型，增量在于把语言、现象与证据同时受控，围绕东南亚语音特有的声学现象组织 5,404 个音频优先题目。以一条 4 讲者拼接样本为例，16 kHz 波形按随机顺序拼接巴塔克语、爪哇语、巽他语与标准印尼语各一段并以静音分隔，模型仅能听到音频与问题，必须切分音频流、逐段辨认地方变体、保持顺序并回答命名、复述顺序或定位等关系查询，内容受控使文本无法作答。另以结构歧义句为例，同一印尼语句子按指定读法录制，模型须从停顿、短语切分与重音推导句法结构，单句消歧、双读法排序与目标读法聚焦构成推理深度阶梯。方言理解、长时对话、情感识别与效价唤醒解释分别考查非标准音系下的内容理解、7 至 23 分钟多说话人对话的跨段派生，以及不靠情感词的韵律分解。构建全程只用 10 个开放授权语料且重采样至 16 kHz，不新录音且不使用合成语音，方言辨认、情感识别与效价唤醒解释用模板基于语料金答案构造，长对话、方言理解与韵律歧义用大模型辅助起草但金答案恒定源于语料标注或转写锚定，选项经可听混淆锚定与金答案位置去偏，离线评测时仅呈现音频与问题，开放作答由跨家族判分模型二值或分级评分，推理审计再由另一家族模型分类接地情况，全程无训练与参数更新。

**关键实验与核心代价：** 在 SEABED 全量 5,404 问上以样本加权平均准确率（weighted average accuracy, Weighted Avg）为主要指标，Gemini 3.5 Flash 得 50.3%，高于 MERaLiON-3-10B 的 29.4% 与 SeaLLMs-Audio-7B 的 17.5%，也高于同门 Gemini 3.6 Flash 的 47.4% 与 Gemini 2.5 Pro 的 41.6%，显示前沿闭源模型领先而区域模型落后。任务分化明显，长对话多项选择达 80.2%，高于方言理解多项选择的 69.4%，更高于方言与语言辨认最优的 41.5% 多项选择与 34.1% 开放作答。音频必要性消融显示，4 个内容任务上音频相对干净转写为 Gemini 3.5 Flash 带来 51.0% 对 41.8% 的提升，原文报告差值为 9.2 个百分点，韵律歧义单项为 54.5% 对 14.9%，原文报告差值为 39.6 个百分点，而方言理解转写反超音频为音频 59.0% 对转写 82.0%，证明难度在声学而非泄漏。10% 分层审计样本上正确中仅 75.7% 为接地真实推理，幸运猜测占 15.1%，区域模型幸运占比达 26.1%，高于 Gemini 3.6 Flash 的 8.7%，显示准确率与接地质量可分化。开放作答几乎全面低于多项选择，去掉选项使最优方言理解从 69.4% 变为 48.7%，10 选项缩至 4 选项时弱模型膨胀原文报告最高达 18.5 个百分点而最强仅 9.9 个百分点。本工作属诊断型评估而非训练方法，未报告推理时延、吞吐或成本实测，仅以跨家族大模型判分与单模型审计加作者小样本抽查支撑。

**适用边界与深读导览：** 结论仅在印尼语、泰语与马来语真实开放语料、16 kHz 音频优先提问与当前判分与审计配置下成立，未覆盖其他东南亚语言、合成或远场噪声、实时流式与跨家族判分之外的泛化。长音频上限约 5 分钟的区域模型在 7 至 23 分钟对话上失效，说明能力包络先于推理设定下限。方法细节与 6 任务构成可查下文方法概述，逐任务审计分解与选项数、问题语言、声调混淆消融可查下文实验结果，完整生成与判分提示词见附录 G，样本库链接见开源详情。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：5404个音频优先题目隔离六种东南亚声学现象，以内容平行拼接与固定读法实现转写理论不可解的受控设计。

- 核心优势：音频相对干净转写在韵律歧义上54.5%对14.9%提升39.6个百分点，并如实保留方言理解逆向负结果验证聆听必要性。

- 核心优势：生成判分审计分属不同模型家族避免同族自评，配套十选项抗膨胀与五重消融对照构成完整证据链。

- 主要短板：缺系统性人工验证与人类基线，审计仅由家族外单模型分类加作者小样本抽查不能替代人工判分。

- 主要短板：情感标签Fear仅1例的不均衡未讨论评分影响且headline未报置信区间，两任务由Gemini生成而被测多为Gemini存自偏好风险。

- 主要短板：全量5404问与评测代码未开放且未发现可验证官方资源URL，仅样本与提示词可得限制独立核查复用。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 7. [弱监督大规模孟加拉语长音频语料的构建与评测](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-13-4d9147f72c/)

> 英文题目：*[Lipi\-Ghor: A Large\-Scale, Diarized, Multi\-Domain Bengali Speech Corpus and a Scalable Pipeline for Building It](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-13-4d9147f72c/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.6/10 | 技术严谨 6.2/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.13/) · [官方 PDF](https://aclanthology.org/2026.salma-1.13.pdf)

👥 **作者与机构**

- Sanjid Hasan：Department of Electrical and Electronic Engineering, KUET, Khulna, Bangladesh
- A H M Fuad：Department of Computer Science and Engineering, BUET, Dhaka, Bangladesh
- Risalat Labib：Department of Computer Science and Engineering, BUET, Dhaka, Bangladesh
- Bayazid Hasan：Department of Computer Science and Engineering, BUET, Dhaka, Bangladesh

📌 **核心摘要**

**问题与瓶颈：** 孟加拉语有超过 230 million 人使用，是世界第七大语言，但开放自动语音识别语料仍严重局限于短句朗读或众包录制，缺少说话人分离标注与长时音频，无法有效支撑覆盖真实分布的训练与评测。既有资源如表 1 所示仍以短受控语音为主，而情感戏剧、方言口音与长录音中的频繁轮转在其中缺失，导致开放场景下识别系统退化明显且难以定位与说话人结构相关的失效。

**核心思路与方法架构：** 核心洞察是面向域精选字幕密集的少数富集频道即可获得低资源语言的规模，同时以自动说话人分离加字幕对齐保留长时结构与说话人归属来直击缺失根因。流程从按域人工挑选高密度频道开始，第一步用批量查询保留含孟加拉语 bn 字幕轨道的视频，第二步用 yt-dlp 抽取 MP3 与字幕并跨域去重至 998 个视频、596 个频道，第三步调用商用 Precision-2 完成按视频独立的说话人分离标注并与字幕对齐生成说话人、语音、转写、时间戳即 SSTT (Speaker, Speech, Transcription, Timestamp) 片段，全程不重新训练声学模型且跨视频不关联说话人。最终形成 885.34 小时音频，平均每视频约 52 分钟，覆盖 17 个域，共 5,832,680 个词与 181,648 词表，并打包为原始分离输出、885 小时 SSTT 全量与 364 个视频预切分的训练就绪三切分，其中有声书、脱口秀与电影占主导而方言仅 1.29 小时。

**关键实验与核心代价：** 在以 YouTube 字幕为参考的 Lipi-Ghor 留存切分上经统一孟加拉语文本归一化后评分，用约 58 小时 Lipi-Ghor 数据微调后的 Faster Whisper Medium 字错率 (WER，越低越好 ↓) 为 20.70%，低于最强零样本基线 Hishab TITU Conformer-L 的 30.51%。同一评测设置下两者字符错率 (CER，越低越好 ↓) 分别为 11.90% 与 18.23%，微调模型同样低于该基线，证明弱监督语料的训练效用。零样本分域上 Hishab TITU 的 WER 在有声书为 21.02% 而在 Regional/Dialect 域升至 57.01%，Seamless M4T-v2 的 WER 在该方言域达 113.70% 近乎失效。主要代价是字幕噪声与分离标注伪影，包括过分割导致的高说话人数虚高与双人并发上限，以及 17 名志愿者约 30 小时校对的 500 个片段金标所揭示的弱监督偏差。

**适用边界与深读导览：** 结论仅在弱监督预训练语料与字幕参考评测前提下成立，说话人维度为自动生成的元数据而非人工验证的分离标注基准，不可视为人工验证的评测基准。方言仅 4 个视频共 1.29 小时不足以支撑方言鲁棒训练，且不分发原始音频、依赖 YouTube 接口与人工精选限制了完全复现。深读可查下方方法概述了解四阶段流程与三切分，实验结果核对分域与时长表，局限与问题对照重叠上限与过分割证据。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以885.34小时、998视频、596频道、17域与SSTT标注填补孟加拉语长时分离标注训练语料空白。

- 核心优势：约58小时微调使Faster Whisper Medium以20.70% WER低于最强零样本30.51%验证弱监督训练效用。

- 核心优势：发布跨17域分层500片段人工金标并量化各域字幕与人工转写分歧以隔离参考噪声。

- 主要短板：表3的639h/243h与正文639h+246.34h口径不一致且1019与998基数混用需对照阅读。

- 主要短板：500片段金标仅用于衡量字幕分歧而未报告系统在金标上误差且分离标注无检测错率类指标。

- 主要短板：方言仅4视频1.29小时且分离标注存在双人并发上限与过分割虚高不足以支撑鲁棒训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 8. [冻结识别器加小模型改写提升乌尔都语识别](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-7-8ca6d588d8/)

> 英文题目：*[Improving Urdu ASR with Fine\-Tuned Small Language Models for Post\-ASR Error Correction](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-7-8ca6d588d8/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.7/) · [官方 PDF](https://aclanthology.org/2026.salma-1.7.pdf)

👥 **作者与机构**

- Sajjad Haider：机构信息未能从会议 PDF 纯文本可靠映射
- Solat J\. Sheikh：机构信息未能从会议 PDF 纯文本可靠映射
- Zuha Aqib：机构信息未能从会议 PDF 纯文本可靠映射
- Farah Inayat：机构信息未能从会议 PDF 纯文本可靠映射
- Zehra Ahmed：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 乌尔都语约有 246 million 使用者，但在多语言自动语音识别（Automatic Speech Recognition, ASR）基准中错误率偏高，原文指出在比较的 Whisper、Qwen3-ASR 与 NVIDIA Nemotron 3.5 ASR 中仅 Whisper 原生支持乌尔都语，因而改进其输出具有实际价值。常规路线是对识别器本身做语言相关微调，但乌尔都语配对音频文本稀缺，且每次域适配都要重训语音管线，成本较高。另一路线是生成式纠错（Generative Error Correction, GEC），即保持识别器不变，用语言模型重写 1-best 文本，但已有工作多依赖大模型的零样本或少样本提示，缺少面向低资源语言的人工校对监督对，也难以区分增益来自规模还是任务适配。

**核心思路与方法架构：** 本文增量是保持 Whisper-Turbo 冻结不变，转而用教师模型生成的伪金标准对 3.5B - 4B 参数小语言模型做监督微调（Supervised Fine-Tuning, SFT）。具体表征流为将 YouTube 乌尔都语语音经冻结 Whisper-Turbo 转写并过滤后，送入 Gemini 3 Flash Preview 教师模型仅修正转写错误，形成 Whisper-Gemini 配对语料，共 5,225 对，其中 425 对约 4 小时留作测试，其余按 1,600 例、3,200 例与 4,800 例组织训练子集。微调对象为 Tiny-Aya-Fire（3.5B 参数）与 Qwen3-4B-Instruct，在注意力投影矩阵接入低秩适配（Low-Rank Adaptation, LoRA）而其余参数冻结，在单块 NVIDIA RTX-4080 GPU（16 GB 显存）上完成训练，推理时新语音先经冻结 Whisper-Turbo 得到初稿，再经微调小模型重写为终稿，从而绕开重训语音管线直击配对数据稀缺根因。

**关键实验与核心代价：** 在 425 对伪金标准测试集上以词错误率（Word Error Rate, WER，越低越好 ↓）为主指标，未纠错 Whisper-Turbo 基线为 11.74%，零样本 Tiny-Aya-Fire 为 10.41%，零样本 Qwen3-4B 为 9.89%，零样本 Qwen3-14B 为 9.04%，而最强可比零样本基线 Gemma3-12B 为 8.32%。4,800 例微调后 Qwen3-4B 降至 7.81%，Tiny-Aya-Fire 降至 7.83%，均低于上述 12B - 14B 零样本大模型，对应原文报告从 11.74% 到 7.81% 约 33% 的相对下降。配对 Wilcoxon 符号秩检验与 10,000 次配对自助重采样显示增益具有统计意义，其中微调 Qwen3-4B 相对零样本 Gemma3-12B 平均 WER 低 0.51 个百分点，95% 置信区间为 [-0.88%, -0.13%]，而两个微调小模型间差异无统计意义。训练量消融显示 Qwen3-4B 随 1,600 例、3,200 例、4,800 例从 9.03% 变为 8.21% 再变为 7.81%，Tiny-Aya-Fire 从 8.72% 变为 8.26% 再变为 7.83%，字错率（Character Error Rate, CER，越低越好 ↓）趋势与 WER 一致但为简洁仅报告 WER。代价方面，4 小时测试集上 Tiny-Aya-Fire 纠错总耗时最少为 29.6 分钟，折合每分钟语音约 7.4 秒，微调 Qwen3-4B 为每分钟语音约 15.4 秒，且部分小数据微调配置最大单句 WER 高于基线，提示仍有长尾退化。

**适用边界与深读导览：** 上述结论成立前提是参考文本均为 Gemini 教师自动生成而非独立人工转写，仅 100 对经两位母语作者对照音频抽查估计 WER 低于 2.5%，且训练测试按片段而非按来源视频划分，泛化估计偏乐观。音频以标准乌尔都语清晰播客、访谈与新闻为主，未覆盖重口音方言与强噪声会话，纯文本纠错也无法恢复严重声学缺失。欲深究伪金标准构建与过滤规则可查阅下文方法章节，训练量、显著性与时延的完整对照可查阅下文实验章节，承认的参考偏差与划分局限可查阅下文局限章节。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：4800例微调后平均WER从11.74%降至7.81%与7.83%，低于12B-14B零样本基线8.32%与9.04%。

- 核心优势：两小模型三档训练量单调下降并附配对Wilcoxon与10000次自助重采样及95%置信区间检验。

- 核心优势：冻结Whisper-Turbo结合注意力投影LoRA微调与统一指令模板，单卡RTX-4080可完成训练。

- 主要短板：训练与测试参考均源自Gemini教师生成，仅100对人工抽查且按片段而非视频划分，存在循环评测与泄漏风险。

- 主要短板：大模型仅做零样本对照未比较微调大模型，且CER趋势一致却无具体数值，规模与监督公平边界不完整。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 9. [神经音频编码器中韵律的因果归属：输出侧消融揭示的双层结构](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-9-4380c150b5/)

> 英文题目：*[Am I Audible Now? Dissecting Prosody in Neural Audio Codecs](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-9-4380c150b5/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编码](/audio-research-portal/papers/?concept=task.audio-coding) → [语音编码](/audio-research-portal/papers/?concept=task.speech-coding)
- **研究方法**：[激活因果干预](/audio-research-portal/papers/?concept=method.activation-intervention)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究重点**：[鲁棒性](/audio-research-portal/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.2/10 | 实验充分 5.9/10 | 清晰度 5.5/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 7.0/10 | 工程/实践 4.6/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.9/) · [官方 PDF](https://aclanthology.org/2026.salma-1.9.pdf)

👥 **作者与机构**

- Nikunj Gupta：机构信息未能从会议 PDF 纯文本可靠映射
- Shreshth Rai：机构信息未能从会议 PDF 纯文本可靠映射
- Kartik Sharma：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh K Vishwakarma：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 神经音频编码器将 24 kHz 单声道语音压缩为每帧 8 个离散词元，作为语音语言模型分词层，码本剪枝与码率分配需要知道韵律信息位置。以 Mimi 为代表的分裂残差向量量化（Residual Vector Quantization，RVQ）设 1 个语义码本加 7 个声学码本，但架构未规定基频（fundamental frequency，F0）与能量由哪层承载。以往对冻结码本嵌入的探测显示 8 个码本均可解码音高，却无法证明解码器重建时因果依赖哪层，可解码性与因果必需性被混为一谈，噪声下结构是否稳定亦未知。

**核心思路与方法架构：** 与最接近的探测基线相比，本文保留编码器与解码器不变，将干预点从嵌入相关性移到输出波形，对每个码本单独做消融后重解码并测量韵律退化。1 秒 24 kHz 输入约含 24000 个采样点，经 Mimi 编码器变为约 12.5 帧 × 8 码本离散词元，保持其余 7 个码本不变，仅把目标码本置零或替换为全局最高频码字，再经冻结解码器独立重建三路波形。对三路波形分别用卷积音高估计（Convolutional Representation for Pitch Estimation，CREPE）提取 F0、用帧级均方根能量（root mean square，RMS）提取能量、用短时客观可懂度（Short-Time Objective Intelligibility，STOI，越高越好 ↑）衡量可懂度，以同信噪比下未消融重建为参考计算 cents 制 F0 均方根误差与 dB 制能量均方根误差，从而分离该码本在该条件下的因果负荷。

**关键实验与核心代价：** 主实验用 200 条 LibriSpeech test-clean 话语叠加 MUSAN 噪声构成洁净、15 dB、5 dB 与 0 dB 四种条件，在 Mimi 上对 8 个码本逐一做零消融与均值消融，无任何新训练，全为发布检查点离线评测。洁净零消融下码本 1 的 STOI 为 0.578，低于其余码本最低值 0.903，约为后者三分之二，伴随 F0 效应标称值 188.4 cents 为 8 码本中最大，但作者将其判为重建崩溃混杂而排除。排除后 7 码本层级跨噪声高度一致，洁净与 15 dB 秩相关在零消融下为 0.964，5 dB 与 0 dB 均为 1.000，逐话语最优码本一致率 15 dB 为 0.580，高于置换零均值 0.378，5 dB 为 0.490，高于 0.379，0 dB 为 0.440，高于 0.379。代价是零消融与均值消融在总体赢家上并不一致，Mimi 洁净下两者秩相关约 0.68，SpeechTokenizer 在噪声下甚至出现符号翻转，且能量效应随噪声单调收缩，只能作次要佐证，全文无人工主观听测，仅用客观代理指标。

**适用边界与深读导览：** 结论成立前提是级联 RVQ 结构、英语朗读语音与加性平稳噪声，未覆盖多语言、自发与表现力语音、混响与非平稳噪声，也未验证按层级剪枝的实际增益。零消融破坏残差链假设使效应混入失配脆弱性，重采样替换等更干净对照仍待补充。欲深究消融示意与混杂判定可看第 3 节与图 1 至图 2，跨编码器泛化与阈值敏感性可查第 4.4 节及附表 9 至附表 11，能量收缩对照可查附图 10。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：逐码本置零与均值替换后经冻结解码器独立重建，直接度量输出波形F0与能量退化而非冻结嵌入相关性。

- 核心优势：Mimi受限集洁净与15dB秩相关0.964且逐话语一致率显著高于置换零均值，三编码器跨噪声复现稳定层级。

- 核心优势：采用边际保持置换检验与自助置信区间，并做混杂阈值与果断话语剂量响应敏感性验证。

- 主要短板：全文无人工主观听测仅用CREPE、RMS与STOI客观代理指标，主客观是否一致完全无法判断。

- 主要短板：中间层置零使解码器处于训练未产生的残差状态，效应量混入失配脆弱性而非纯因果依赖。

- 主要短板：主文称自助10000次重采样而表4注为5000次话语重采样，存在字面算术出入且原文未解释。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 10. [金标保留合成如何为瑞典语逐字识别补足迟疑分布](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-4-cf43f70f0a/)

> 英文题目：*[Gold\-Preserving Synthetic Augmentation for Verbatim Swedish Automatic Speech Recognition](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-4-cf43f70f0a/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.6/10 | 技术严谨 7.5/10 | 实验充分 5.9/10 | 清晰度 6.7/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.4/) · [官方 PDF](https://aclanthology.org/2026.salma-1.4.pdf)

👥 **作者与机构**

- Giuseppe Chiriatti：University of Parma, Italy
- Dimitrios Kokkinakis：Språkbanken, University of Gothenburg, Sweden
- Flavio Bertini：University of Parma, Italy
- Ricardo Muñoz Sánchez：Språkbanken, University of Gothenburg, Sweden
- Herbert Lange：Språkbanken, University of Gothenburg, Sweden

📌 **核心摘要**

**问题与瓶颈：** 逐字转写须保留迟疑、重复与互动颗粒以支撑言语认知评估，而主流自动语音识别为可读性将其删去。瑞典语迟疑 inventory 含填充停顿、话语标记、语气小品词与应答词并具位置约束，KB-Whisper-large 继承的流畅语言模型偏好在解码时抑制这类词元。可用金标仅 30 个单声道 16 kHz 老年自发叙事录音共 1.02 小时，经 0.5-25 s 切分得 1248 个片段平均 2.94 s，仍抑制目标现象的教师模型会产出同样消过毒的伪标签，使偏差自我复制。

**核心思路与方法架构：** 核心直觉是以金标逐词元密度与词性上下文为目标分布，按构造保证合成集分布可先验审计。瑞典语指令微调语言模型生成自发叙事初稿，规划器按 V2 回视等位置约束选位、生成器按局部词性选形并设全局比例下限保障稀有词。文本经话音设计模式以 4 个轮换说话人画像合成，不自然迟疑词映射为非言语符号，再经 WhisperX 对齐与零样本基线转写高于 25 % 词错率（WER，word error rate）隔离过滤，得 647 个片段 0.59 小时合成集。共享适配冻结基座主体，仅更新 4 个注意力投影约 31.4M 参数占模型 2 %，前馈模块因 12 GB 显存预算未纳入，推理用束宽 5 与清空抑制词表转写。

**关键实验与核心代价：** 在 30 个录音按文件级说话人不重叠划分为 18/6/6 且测试仅用 6 个真实文件的设置下，以多语言 BasicTextNormalizer 计算词错率（WER），零样本基座总 WER 为 27.58 %、含迟疑片段 WER 为 33.28 %，金标微调后分别降至 19.83 % 与 22.52 %，块自助置信区间互不重叠。三种扩增在 5 个种子均值上不可分，伪标签总 WER 为 19.64 %、含迟疑片段 WER 为 22.10 %，金标保持合成集对应为 19.79 % 与 22.08 %，与金标微调的 19.83 % 与 22.52 % 差距均在种间标准差 4-5 个百分点量级之下，置信区间重叠超 70 %。配对分析中仅规划器版本在迟疑 WER 上五种子全优于金标，平均低 0.78 个百分点、95 % 区间为 -1.27 至 -0.28，p 为 0.012，但经 10 重比较 Bonferroni 校正后不再成立。代价侧按既往建议放至 2.35:1 合成比的版本总 WER 回升至 20.32 %、迟疑 WER 至 23.00 %，高于 0.58:1 版本的 19.79 % 与 22.08 %，而金标保持版本迟疑标准差 4.10 为六组最低并在 789 号种子取得 16.59 % 全项目最低。

**适用边界与深读导览：** 结论成立限于 KB-Whisper-large 单基座、老年瑞典语计划性叙事、注意力低秩适配与 6 个测试文件的小样本评估，未覆盖带元音填充 öh 的语域及其他语言。实践决策是有域内无标注音频时伪标签最廉价，无音频或教师仍抑制目标现象时金标保持管线达到相同精度且无需额外音频，可移植性受制于目标语语音合成与强制对齐器可用性。未检验伪标签迟疑密度、合成集规模未匹配使三组合成对比非受控消融，且下游流畅度特征一致性未测量，金标语料因临床协议不能公开。需深究分布审计与对齐丢失机制可查下方方法概述和架构，数值细节与配对区间可查实验结果，统计效力与资源限制可查局限与问题。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：金标逐词元密度与词性上下文剖析结合V2回视规划器与全局下限及卡方校验，使合成集分布在训练前即可审计。

- 核心优势：同文本对照分离出对齐关键瓶颈，CTC将ja比值从0.29恢复至0.96且训练集审计达1.04，机制解释清晰可核对。

- 主要短板：每种子仅6个测试文件、种间标准差4-5点，三组合成集规模未匹配且多组件同时变化故非受控消融。

- 主要短板：未提供人工主观听测，仅以英语校准的UTMOS二选一选择非言语符号映射，感知主张缺乏真人盲测支撑。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 11. [Nuha\-Speech 构建通用阿拉伯语语音大模型](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-2-0898f27dc7/)

> 英文题目：*[Nuha\-Speech: Building General\-Purpose Arabic Speech\-LLMs](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-2-0898f27dc7/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[语言识别](/audio-research-portal/papers/?concept=task.language-identification)；[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding)
- **研究方法**：[指令微调](/audio-research-portal/papers/?concept=method.instruction-tuning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.2/10 | 技术严谨 5.6/10 | 实验充分 7.0/10 | 清晰度 6.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：模型报告

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.2/) · [官方 PDF](https://aclanthology.org/2026.salma-1.2.pdf)

👥 **作者与机构**

- Yingzhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Reem Alhazzani：机构信息未能从会议 PDF 纯文本可靠映射
- Muhammad AL\-Qurishi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

**问题与瓶颈：** 本文面向阿拉伯语语音大模型，输入为阿拉伯语语音，输出为纯文本，覆盖语音识别、语音翻译、语音问答、方言识别、情感识别、年龄识别、性别识别与多轮问答。现有阿拉伯语中心 Octopus 仅支持识别、阿英翻译与方言三项任务，缺乏零样本泛化，且依赖私有数据难以复现。Qwen2-Audio 与 Qwen2.5-Omni 虽有多语能力但阿语指令跟随未经证实，仅 Qwen3-Omni 明确支持包含阿语在内的 19 种语音输入语言。更根本的瓶颈在于非识别任务的公开阿语语料极少，真实语音指令对几乎不存在，主流评测基准集中于英语，无法衡量阿语理解与副语言能力。

**核心思路与方法架构：** 与最接近的 Qwen-Omni 基线相比，本文保留其音频编码器与大语言模型骨干，新增大规模阿语指令微调与两阶段课程，冻结编码器而仅以 LoRA 更新大语言模型。单条样本统一为语音、指令与输出三元组，指令集用 GPT-5 设计宽指令集以支撑零样本，语音经冻结的 Whisper-large-v3 或 AuT 编码器映射为音频文本对齐表示，再由 Qwen2.5 或 Qwen3 系大语言模型生成文本答案，涵盖 3B 、 7B 与 30B-A3B 三种规模，全程仅输出文本而不涉及语音合成或流式约束。训练语料共 1501K 个样本，其中识别 790K 个来自 SADA 、 Common Voice 、 MASC 与 MGB-2 并剔除 1 s 以外与 10 s 以外片段，翻译 5K 个来自 CoVoST-v2 加 150K 个经 Qwen3-32B 翻译补足，问答 150K 个封闭式加 150K 个开放式经 Qwen3-32B 生成，方言 150K 个来自 ADI-17 共 17 种方言，情感 20K 个合成，年龄 10K 个真实加 10K 个合成并定义青年 18 岁以下、成人 18 至 60 岁与年长 60 岁以上，性别 51K 个来自 SADA ，多轮 5K 个标注合并加 10K 个情感推理。

**关键实验与核心代价：** 在 CoVoST-v2 阿英测试集 2.3K 个样本上，翻译指标 BLEU 从基线 Qwen2.5-Omni-3B 的 39.27 提高至 Nuha-Speech-3B 的 48.32 ，同期句子相似度从 0.813 提高至 0.884 ，语音问答的 LLM 裁判分从 2.30 提高至 2.60 ，方言识别准确率从 9.70 提高至 57.83 ，均高于基线。主导收益来自全任务微调对副语言能力的补齐，正文称方言与年龄基线接近随机猜测而微调后实现数倍增长，情感与性别基线尚可而微调后达到优秀水平，而 30B 因预训练语义已较强而增益较小。代价方面，第二阶段将识别样本从 790K 个缩减为 200K 个以平衡任务并节省训练时间，编码器全程冻结，LoRA 秩为 8 ，未报告实时率或推理时延，问答评测仅用 LLaMA-3.3-70B-Instruct 作代理裁判而无人工主观听测。

**适用边界与深读导览：** 结论成立前提为现代标准与方言混杂的阿语朗读与广播语音、短句文本输出与域内测试，未覆盖长音频、噪声混响、开放域零样本任务与端侧实时部署，情感与年龄测试与训练共用同族合成语音模型而可能高估泛化，150K 个翻译与 310K 个问答依赖 Qwen3-32B 生成而未经人工质检。评测脚本、裁判提示与测试集承诺经 GitHub 公开而模型权重与完整语料未提供下载，深究语料构造与两阶段课程可查阅下方方法概述和架构，深究七任务基准与前后对比可查阅实验结果，深究超参与缺失项可查阅细节详述。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（模型报告）：创新 18% · 严谨 14% · 实验 22% · 清晰 8% · 影响 18% · 复现 6% · 工程 14%（开源上限加分 +0.6）

- 核心优势：3B可核对提升扎实，翻译BLEU从39.27升至48.32，语义相似度从0.813升至0.884，方言准确率从9.70升至57.83。

- 核心优势：构建1501K大规模阿语语音指令三元组语料，覆盖识别翻译问答方言情感年龄性别多轮七项任务，来源与合成策略透明。

- 核心优势：七任务基准结合46757识别榜单、2.3K翻译、12150方言等公开与可控合成测试，指标方向与样本规模交代清晰。

- 主要短板：情感与年龄训练测试共用同族ElevenLabs合成模型可能高估泛化，且150K翻译与310K问答依赖Qwen3-32B生成未经人工质检。

- 主要短板：问答仅用LLaMA-3.3-70B代理裁判而无真人主观听测，无置信区间与显著性检验，且择优排除弱基线存在选择偏置。

- 主要短板：声称GPT-5宽指令集支撑零样本泛化却未测试未见任务，且无消融区分第一阶段与指令多样性的各自贡献。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---

### 12. [为对话下一句自动生成语音风格描述：TurnStyle 双模态上下文建模解读](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-1-0347b3b4f6/)

> 英文题目：*[TurnStyle: Suggesting Style Prompts for Instruction\-Guided Text\-to\-Speech Using Bimodal Dialogue Contexts](/posts/conference-salma-2026-conference-paper-id-2026-salma-1-1-0347b3b4f6/)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-research-portal/papers/?concept=task.prosody-style-control)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[提示学习](/audio-research-portal/papers/?concept=method.prompt-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.0/10** | 创新 6.4/10 | 技术严谨 5.7/10 | 实验充分 5.8/10 | 清晰度 7.0/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：方法研究

会议来源：[官方记录](https://aclanthology.org/2026.salma-1.1/) · [官方 PDF](https://aclanthology.org/2026.salma-1.1.pdf)

👥 **作者与机构**

- Jack McLaughlin：Department of Computer Science, Rochester Institute of Technology, Rochester, NY 14586
- Cecilia O Alm：School of Psychology and Cognitive Science, Rochester Institute of Technology, Rochester, NY 14586

📌 **核心摘要**

**问题与瓶颈：** 指令引导文本到语音 (instruction-guided TTS) 以自然语言风格提示控制合成语音的表现力，TurnStyle 本身输入为双模态对话历史与待合成脚本查询，输出为下一句完整句风格描述文本，再交由下游指令引导语音合成系统合成波形，而非直接输出语音波形。用户手写风格提示会打断自然对话节奏，现有商用表现力语音合成界面如 ElevenLabs 和 Speechify 被指不够直观，Wizard-of-Oz 研究显示用户更希望系统自动生成风格提示。现有路线或直接用语言模型改写音素级基频、时长和能量，或学习语音与文本风格嵌入对齐，或仅生成单词级风格标签，缺少对整段双模态对话语境的联合建模。TurnStyle 把任务形式化为从包含语音波形与文本转写的双模态对话预测下一句完整句风格描述，难点在于说话人之间风格相互影响与跨模态互补信息难以用单句转写刻画。

**核心思路与方法架构：** 与最接近的 Zhao 等人对话情绪识别编码器加 StyleCap 单片段前缀路线相比，TurnStyle 的增量是增加跨话轮自注意力池化得到整段单一对话嵌入，并以此生成软提示条件冻结大模型以输出完整句。每轮语音经语音自监督编码器 WavLM-Base-plus 编码 (16,000 Hz 采样，最长 15 s)，文本经 BERT-base 编码，再叠加可学习轮次位置编码。两模态各自经传统因果注意力、说话人内注意力与说话人间注意力融合残差与层归一化得到模态内表示，再以跨模态注意力互查对方键值得到 4 组表示，拼接后沿话轮维自注意力池化为 768 维单一向量。该向量与 10 个可学习常量经 2 层 8 头 Transformer 映射堆栈交互后被丢弃，仅保留 10 个词元前缀向量，与 “Speaking Style:” 拼接后条件冻结的 Llama-3.2-3B-Instruct 自回归生成风格提示，训练更新对话编码器与映射网络而语言模型冻结，采用整段离线推理而非流式。

**关键实验与核心代价：** 在 StyleTalk 测试集 (200 个对话) 上，映射深度为 2 的 TurnStyle 的 ROUGE-L 为 0.574 ± 0.150，高于少样本基线的 0.251 ± 0.015，METEOR 为 0.662 ± 0.094，高于基线的 0.238 ± 0.015，标签 F1 为 0.688 ± 0.013，高于基线的 0.179 ± 0.040。在 Expresso 测试集 (200 个对话) 上，前缀长度为 10 的 TurnStyle 的 BERTScore F1 为 0.919 ± 0.001，高于基线的 0.903 ± 0.004，ROUGE-L 为 0.383 ± 0.008，高于基线的 0.323 ± 0.016，但双方 BERTScore F1 均在 0.9 左右，作者指出短而窄的风格提示难以拉开语义差距。关键消融显示加深映射至 8 层在 StyleTalk 上标签 F1 回落至 0.355 ± 0.324，StyleTalk 上对话长度为 1 时反而优于长度为 3，说明更长语境未必带来收益。代价与效率方面，在 A100 GPU 上以批量 16 推理 200 个实例时，基线推理消耗能量超过 TurnStyle 的 15 倍，峰值内存约为 27 GB 高于 TurnStyle 的 15 GB，测试集推理耗时超过 2 分钟长于 TurnStyle 的 30 秒左右，功耗约为 250 W 高于 TurnStyle 的 50 W 至 100 W，源于基线每次需处理 25 个示例的数百词元而 TurnStyle 语言模型部分仅用 10 至 20 个词元。本工作仅用 BERTScore、METEOR、ROUGE-L、chrF++ 与标签 F1 等文本相似度评价，未做人工主观 MOS 听测与下游语音合成听感验证，也未使用 UTMOS、DNSMOS 或 NISQA 等神经代理指标。

**适用边界与深读导览：** 结论成立前提是 4 个说话人 23 h 的 Expresso 对话与 7 h 合成 StyleTalk 对话及 3 轮上下文窗口，美式英语偏向明显，作者明确承认真实说话人有限与分布外泛化未经验证。评估依赖与金标准描述的字面语义重叠，有效风格提示也可能因措辞不同被低估，且无人工可用性评价与模型不确定度提示，端侧可行性仅由 A100 GPU 推理效率推测而未在端侧实测。本文未提供音频演示页可供试听对照。欲深究对话编码器掩码设计、前缀生成堆栈与长度、映射深度及对话长度消融细节，可查阅下方方法概述和架构、实验结果与细节详述对应表格。

⚖️ **评分说明**

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在Expresso与StyleTalk两公开集上以5次均值加标准差全面超越25样本基线，并附带映射深度与前缀长度直接消融。

- 核心优势：将双模态对话经话轮维自注意力池化压缩为768维单一向量，再以10词元软提示条件冻结Llama-3.2-3B生成完整句。

- 核心优势：在A100批量16下实测200例推理时间能量内存功耗，基线能耗超15倍且内存27GB对比15GB。

- 主要短板：基线仅见转写文本而模型见语音加文本且缺Jeon同类对照，训练测试说话人可重叠存在说话人泄露风险。

- 主要短板：仅用BERTScore等文本相似度评价而无人工MOS与下游合成听感验证，双方BERTScore均约0.9区分度有限。

- 主要短板：StyleTalk对话长度为1时优于长度为3且K为10未超K为5，核心长语境增益假设与消融负结果脱节。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。


---
