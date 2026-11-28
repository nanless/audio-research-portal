---
title: "Diarization-Guided Qwen-ASR Adaptation for Multilingual Two-Speaker Conversational Speech"
date: 2026-11-27
draft: false
description: "针对双人多语对话需同时回答谁在何时说话与各语种说什么的难题，该系统以固定双人谱聚类前端切分音频并用全参数微调加合成语音低秩适配加组相对策略优化三阶段适配 Qwen3-ASR-1.7B，在开发集上将平均 tcpMER 从 30.53 降至 23.70，代价是强化学习增益微弱且土耳其语等难点仍未突破。"
tags: ["数据增强", "SFT", "可验证奖励强化学习", "说话人分离标注", "多说话人语音识别"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "双人多语对话识别的分段与适配：说话人分离引导的 Qwen 语音模型"
paper_digest_original_title: "Diarization-Guided Qwen-ASR Adaptation for Multilingual Two-Speaker Conversational Speech"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:wu26_mlcslm"
paper_digest_workbench_source_sha256: "2b27b36d656724ccbfc49ac81adc90fb161edfe6e1d3d7e1aac7815a3cf7b692"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "多说话人语音识别"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对双人多语对话需同时回答谁在何时说话与各语种说什么的难题，该系统以固定双人谱聚类前端切分音频并用全参数微调加合成语音低秩适配加组相对策略优化三阶段适配 Qwen3-ASR-1.7B，在开发集上将平均 tcpMER 从 30.53 降至 23.70，代价是强化学习增益微弱且土耳其语等难点仍未突破。"
paper_digest_reader_sections: [{"heading":"双人多语对话为何必须同时解决谁在何时说话与说什么","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四泳道整体流程与三阶段适配总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"固定双人谱聚类前端如何从波形得到说话人分段","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"合成语音增强与三阶段识别器训练如何落地","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"开发集平均误差下降成立的评测前提与代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"三阶段各自贡献与强化学习的稳定作用","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Shanghai Qi Zhi Institute, Shanghai, China"],"name":"Hao Wu"},{"affiliations":["Shanghai Qi Zhi Institute, Shanghai, China"],"name":"RongQi Han"},{"affiliations":["Shanghai Qi Zhi Institute, Shanghai, China"],"name":"Zhen Wang"},{"affiliations":["Megatronix (Beijing) Technology Co., Ltd"],"name":"Wei Liang"},{"affiliations":["Shanghai Qi Zhi Institute, Shanghai, China"],"name":"Wei Xu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"6e0fb6527ece70d77ef24451d71fcc61bbf894cd33966dce8681ac8c9ffc5318","url":"/audio-research-portal/client/papers/2026-11-27/conference-a6fb120d622db21266eb86db/citation.bib"},"citation.json":{"sha256":"3442688334faf5daa3205b19172800702fdebd73f81e45a88efcebe2e23c498d","url":"/audio-research-portal/client/papers/2026-11-27/conference-a6fb120d622db21266eb86db/citation.json"},"citation.ris":{"sha256":"8c5f54ac617a4ca9f75788387bc17f0c14b251293475278f59f328ccc3a836fb","url":"/audio-research-portal/client/papers/2026-11-27/conference-a6fb120d622db21266eb86db/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e104330f79b7f8e70b7b73dd2c5c334cf1a88b4967d34c572152e38752902301","url":"/audio-research-portal/client/papers/2026-11-27/conference-a6fb120d622db21266eb86db/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:wu26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "242e07e49531469880e26592a10cf5e9e67bbd17cf8206f22401377cceac3b1f"
paper_digest_api_reader_plan_sha256: "f393068943eb920f0153d9f34994c8343992542b6a85467499c536bb9b6255db"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4ac7b13ce48051114450a5913a93edd90331c3c5bffceb2a20f87abc023622b2"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "28b63c15d8e5c5d489bc988be6db0be15be4804c5470eeec6e6b295785c1cb68"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e2b9b64003f583cece6a3a5779784102b135ecd1516d366e3ab2c521b8f6665a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "847320e0f46a342558d4fa20b995bea4937b5d202c39ea3b0f5cf44356da22f7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.multi-talker-asr","label":"多说话人语音识别"}]
paper_digest_primary_method: "SFT"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 双人多语对话识别的分段与适配：说话人分离引导的 Qwen 语音模型

> 英文题目：*Diarization-Guided Qwen-ASR Adaptation for Multilingual Two-Speaker Conversational Speech*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:wu26_mlcslm`
> Track：Poster Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)；[语音识别](/audio-research-portal/papers/?concept=task.asr) → [多说话人语音识别](/audio-research-portal/papers/?concept=task.multi-talker-asr)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[SFT](/audio-research-portal/papers/?concept=method.sft)；[强化学习](/audio-research-portal/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-research-portal/papers/?concept=method.verifiable-reward-rl)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 7.6/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Hao Wu：Shanghai Qi Zhi Institute, Shanghai, China
- RongQi Han：Shanghai Qi Zhi Institute, Shanghai, China
- Zhen Wang：Shanghai Qi Zhi Institute, Shanghai, China
- Wei Liang：Megatronix (Beijing) Technology Co., Ltd
- Wei Xu：Shanghai Qi Zhi Institute, Shanghai, China

## 📌 核心摘要

**问题与瓶颈：** 本文处理双人多语种会话的转写任务，输入为 16 kHz 安静室内录制的两人对话长音频，输出为带说话人归属的多语种文本。挑战覆盖 21 个语种/区域条件，包含空格分隔文字与日语、韩语、泰语等非空格分隔文字，短轮次、重叠语音与频繁换人使边界与归属易错。现有分离式路线将说话人分离标注与自动语音识别独立优化，分离标注错误直接传给识别，识别错误又进入最终计分，难以联合纠偏。评测采用时间受限排列混合错误率（time-constrained permutation mixed error rate，tcpMER，越低越好 ↓），对空格分隔语种计词错误率（word error rate，WER，越低越好 ↓），对日语、韩语、泰语计字符错误率（character error rate，CER，越低越好 ↓），并在说话人排列下取最小值，说话人分离标注质量另以说话人分离标注错误率（diarization error rate，DER，越低越好 ↓）监测，但原文未报告 DER 数值。

**核心思路与方法架构：** 与直接使用未微调 Qwen3-ASR-1.7B 的最接近基线相比，本文增量在于保留模块化说话人分离标注前端的同时，以三阶段任务适配重塑识别器并按语种分组批量解码。流程先经语音活动检测得到语音区，再切分为 1.5 s 窗长、0.75 s 跳距的子段并提取 192 维 CAMPPlus 说话人嵌入，频谱聚类固定为 2 类并生成 RTTM 划分，长段再切分后按语种/区域分组送入适配后 Qwen3-ASR-1.7B 模型批量转写，最后经文本规范化得到带说话人标记的假设并计算 tcpMER。适配阶段先在官方训练集上全参数监督微调以学习转写风格，再用三管线 TTS 合成语音做低秩适配，仅更新文本解码器 28 层中查询、键、值与输出投影共 112 个线性模块的秩 64 适配器与音频投影层，其余基座参数冻结，最后以组相对策略优化做强化精炼，采样 K 为 2 的候选并以 WER/CER 准确率减去重复与长度偏离惩罚构成奖励，直接抑制过长、低多样性与重复输出。推理采用贪婪解码，温度为 0，最大输出长度为 256 个词元，原文未说明流式、严格因果或实时约束。

**关键实验与核心代价：** 在官方开发集本地评分流水线中，相同说话人分离标注输出下完整系统平均 tcpMER 为 23.70，低于未微调 Qwen-ASR-1.7B 的 30.53，低于 Whisper-large-v3 的 29.94 与 Omniasr-LLM-7B-v2 的 31.52，也低于官方 VibeVoice-ASR LoRA 基线的 79.15，相对 Qwen-ASR-1.7B 的绝对下降为 6.83。分语种看，乌尔都语从 102.84 降至 19.77，塔加洛语从 49.49 降至 33.90，土耳其语为 56.02，与 Whisper-large-v3 的 55.98 基本持平且在完整系统内误差数值最高。在最终评测集上系统平均 tcpMER 为 17.97，来自任务排行榜，原文未给出该集合上的基线对照与分语种明细。消融显示全量监督微调贡献最大，平均 tcpMER 从 30.53 降至 24.3，合成语音低秩适配进一步降至 23.78，强化学习微调至 23.70，主要收益为抑制长噪段重复与幻觉，土耳其语等个别语种出现小幅回升。任务为识别计分，未组织人工主观听测。训练、推理与部署的显存、时延或实时率代价原文未披露。

**适用边界与深读导览：** 结论成立前提为双人会话、安静室内 16 kHz 录音与 21 个已覆盖语种/区域条件，未验证多人、强噪声、远场或未见语种下的失效模式，相似音色说话人边界混淆与低资源语种合成语音质量仍是短板，长噪段残留不稳定也未完全消除。文本大模型后纠错被明确留作未来工作，作者称其易过纠与幻觉，尤其对日语、韩语、泰语风险更高。需复核频谱聚类参数、LoRA 秩与奖励权重对稳定性的影响可查阅下方方法概述和架构与细节详述，需核对分语种增益与消融幅度可查阅下方实验结果表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 双人多语对话为何必须同时解决谁在何时说话与说什么

多语双人对话转写要求单个系统同时完成说话人分离与多语识别，输入是一段包含 2 名说话人的连续录音，输出是按时间对齐且带说话人标签的多语文本。挑战覆盖 21 个语言区域条件，包含英语多种口音与法语加拿大变体等，书写体系差异大，短轮次、重叠语音与频繁换轮进一步加剧难度。分离错误会直接传给识别器，识别错误又会进入最终计分，两者耦合紧密，独立优化难以取得高分。

评测采用时间受限排列混合错误率 (tcpMER) 与分离错误率 (DER)，前者先按语言自适应选择词错误率或字错误率，对空格分隔语言用词错误率 (WER)，对日语、韩语与泰语用字错误率 (CER)，再在时间约束下对说话人排列取最小值，后者单独监控分离质量。开发集每语言约 4 小时，训练集约 1,500 小时，英语约 500 小时，其余语言各约 100 小时，另有他加禄语等新增内容，文本遵循统一规范，在训练与推理中保持一致。

已有主流路线包括模块化语音活动检测加嵌入加聚类、端到端神经分离以及先分离再转写的会议识别流程，本文选择模块化路线并将说话人数固定为 2 人在谱聚类中实现。物理瓶颈在于短时子段嵌入区分度不足、相似音色易混淆、重叠段边界模糊，统计瓶颈在于低资源语言声学与词汇覆盖不足，未适配模型在乌尔都语等语言上误差很高。把分离与识别视为独立模块会留下较大精度损失，因此需要精细耦合的分离加识别流程。

为此，作者提出 SQZ-Qwen-ASR-1.7B 系统，仅针对任务一，在 3D-Speaker 框架内构建分离前端，在 Qwen3-ASR-1.7B 基础上做三阶段适配，并以 3 流程合成语音扩展数据。开发集本地评测平均 tcpMER 为 23.70，较未微调版本降低 6.83，评测集榜单为 17.97，消融显示全参数监督微调贡献最大，合成语音低秩适配与强化学习进一步提升稳健性。

### 四泳道整体流程与三阶段适配总览

整体系统分为分离、识别与评测三部分，训练单独进行再部署到推理流程。推理时先做语音活动检测与可选重叠精修，再在短子段上提取说话人嵌入并聚为两类，由分离结果切分音频，按语言区域分组后批量送入适配后的识别模型。识别文本经规范化后计算 tcpMER 与 DER，同一分离输出在对比中保持共享，以保证差异仅来自识别部件。

下图将 4 个泳道从上到下展开，能一次看清从波形到分数的完整走向，建议沿箭头先看上方分离泳道如何产生时间标签，再看中部推理泳道如何按标签切分与分组，最后看下方适配泳道如何产出部署模型。注意颜色区分不同功能，蓝色为检测与嵌入聚类，绿色为标签与假设，青色为切分与推理，紫色为规范与评测，橙色为三阶段训练，右侧虚线表示部署方向。

[![原论文 Figure 1：End-to-end framework of the SD ASR system, organized into four swim lanes.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/cb7b5311ba59/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/cb7b5311ba59/figure-1.png)

*论文图 1：四泳道端到端流程示意：分离标注、按语言切分识别、文本规范计分与三阶段模型适配闭环（原论文 Figure 1）。*

图中显示顶部淡紫色分离泳道从左至右依次为评测波形、语音活动检测子段、 CAMPPlus 嵌入、谱聚类与 RTTM 标签，中部淡绿色推理泳道从右至左依次为基于 RTTM 的波形切分、按语言分组的原始列表、适配模型批量推理与假设 STM。紫色评测泳道完成文本规范与 tcpMER 与 DER 计算，底部淡橙色适配泳道从官方训练数据经全参数监督微调、低秩适配与强化学习精修得到适配模型，右侧灰色虚线标注部署并向上接入推理泳道，另有一路大语言模型文本加语音合成音频汇入低秩适配。

与最近基线相比，实质增量不在分离框架本身，而在识别器的任务适配与数据扩展，保留 Qwen3-ASR-1.7B 的音频编码器与文本解码器结构，替换训练策略为全参数监督微调加合成语音低秩适配加组相对策略优化，并在解码器全部 28 层自注意力投影中插入秩为 64 的适配器。信号规格统一为 16 kHz 输入，语音活动检测帧长 25 ms，帧移 10 ms，分块窗口 200 ms，嵌入子段长 1.5 s，跳跃 0.75 s，最大音频长度 30 s，最大输出长度 256 个词元。

### 固定双人谱聚类前端如何从波形得到说话人分段

分离前端基于 3D-Speaker 框架，语音活动检测采用 FunASR 中的 FSMN 模型，帧长 25 ms，帧移 10 ms，分块窗口 200 ms，后验阈值 0.5，并带负 0.1 与正 0.3 的信噪比修正项。检测到的语音区被切为长 1.5 s、跳跃 0.75 s 的子段，重叠率为 50%，每段提取 80 维滤波器组特征并映射为 192 维 CAMPPlus 嵌入，遵循 CAM++ 结构与生产级嵌入实践，短时设计兼顾边界精度与说话人区分度。

谱聚类将说话人数固定为两类，最小、最大与预言人数均设为 2，相似度阈值 0.8，显著性阈值 0.012，最小簇尺寸为 4，相邻同说话人区间在间隔低于 0.8 s 时可合并，但开发集评测默认关闭该合并，重叠检测仅作为可选精修。聚类输出写成 RTTM 标签，录音按标签切分，长区间进一步细分以适合识别器输入，切分列表按语言区域分组，共覆盖评测集 21 个条件，再由适配模型批量转写为带说话人归属的假设。

以 1 秒 16 kHz 样本为例，波形含 16,000 个采样点，语音活动检测按 10 ms 步长给出约 100 帧有话判决，若整秒均为语音，则落入一个 1.5 s 窗内的有效部分并得到一个 192 维嵌入，聚类赋予说话人一或说话人二标签。标签经 RTTM 切分为对应音频段，按所属语言进入相应批量，识别器以贪婪解码在温度 0 下输出至多 256 个词元，最终经文本规范进入计分，原文未披露各模块间精确张量形状与帧率变换细节，此处仅追踪逻辑流与可观测规格。

推理执行为离线分块批量方式，非流式因果模式，无前视窗口与缓存设计，延迟、实时率与显存开销原文未披露。解码温度固定为 0，最大输出长度为 256，与训练阶段强化学习采样上限一致，保证长噪段输出不发散，同一分离输出在主对比中共享，使识别器差异可比。

### 合成语音增强与三阶段识别器训练如何落地

识别器适配第一步是在官方训练集上做全参数监督微调，学习挑战转写风格与双人对话设定，优化器为 AdamW，线性调度，预热比例 0.02，权重衰减为 0，最大梯度范数为 1.0，峰值学习率为 2×10−5，共训练 4 轮，每设备批量为 8，梯度累积为 4，最大音频长度为 30 s，全部基座参数参与更新，为后续轻量适配打下基础。

第二步利用合成语音做低秩适配，适配器插入文本解码器全部 28 层自注意力投影的查询、键、值与输出共 112 个线性模块，秩为 64，缩放系数为 128，丢弃率为 0.05，仅解冻音频投影器的两层权重与偏置，其余基座参数冻结，训练 5 轮，峰值学习率为 5×10−5。合成数据围绕 OmniVoice 零样本克隆构建，文本扩展生成 166,633 个 3 轮对话组，直接说话人注入保留 32,700 条伪标签不一致样本，相似度引导从外部公开数据按 0.76 至 0.83 余弦阈值保留 35,000 条，共 234,333 项，均转为识别清单格式直接混入训练。

下图聚焦强化学习闭环，建议先看底部语音音频加文本提示的多模态输入如何进入策略采样，再看中部两个候选如何分叉为概率支路与奖励支路，最后看顶部损失如何回传更新执行器。图例中黄色、蓝色与粉色分别对应输入文本词元、输出文本词元与语音音频词元，组相对优势是理解无需独立价值评估模型设计的关键。

[![原论文 Figure 2：GRPO-based reinforcement learning for Qwen3-ASR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/cb7b5311ba59/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/cb7b5311ba59/figure-2.png)

*论文图 2：组相对策略优化闭环：双候选采样、规则奖励评分与优势驱动的执行器更新（原论文 Figure 2）。*

图中显示底部多模态输入经策略采样产生长度不等的候选一与候选二，左侧可训练执行器给出各自概率，右侧基于规则的奖励模块按字词错误率、幻觉、重复与长度偏差打分并算出优势一与优势二，4 路箭头共同汇入顶部组相对策略优化损失，再以虚线更新执行器。奖励以准确项减去重复与长度惩罚并截断至 0 至 1，重复权重为 0.10，长度权重为 0.10，幻觉触发直接返回负 1.0，采样温度为 0.7，候选数为 2，截断比为 0.2，学习率为 1×10−6，有效批量为 256 个提示，散度正则系数为 0.005，不向奖励注入散度项。

### 开发集平均误差下降成立的评测前提与代价

评测协议与公平性核查集中在开发集本地流程，解码统一用温度 0 的贪婪解码，最大输出长度为 256，分离采用 CAMPPlus 嵌入加固定双人谱聚类加基于 RTTM 的切分，同一分离输出在所有系统中共享，使差异仅反映识别部件，唯一外部资源是已披露的 OmniVoice 合成器。指标方向为越低越好，平均值在 21 个语言区域组上平均，日语、韩语与泰语用受限字错误率，其余用受限词错误率，原文未报告方差、置信区间与人工听测，结论仅依赖自动错误率。

下表提炼主对比的平均行，保留官方基线与 3 个公开识别基线，便于一次看清完整系统的相对位置，完整 21 语言明细见原文完整 Table 2，本精简表未列出逐语言行。选择平均值是因为它是榜单与摘要共同强调的口径，能避免在单语言波动上过度解读，同时为消融的阶段增益提供起点。

| 系统 | 平均 tcpMER |
| --- | --- |
| 官方 VibeVoice 基线 | 79.15 |
| Whisper-large-v3 | 29.94 |
| Omniasr-LLM-7B-v2 | 31.52 |
| Qwen-ASR-1.7B | 30.53 |
| SQZ-Qwen-ASR-1.7B | 23.70 |

表中平均 tcpMER 显示完整系统为 23.70，明显低于官方基线的 79.15，也低于 Whisper 的 29.94、Omnia 的 31.52 与未微调 Qwen 的 30.53，在所展示的平均行内为最低。分语言看，原文完整 Table 2（本精简表未列出）中乌尔都语从 102.84 降至 19.77，他加禄语从 49.49 降至 33.90，增益集中在基线最弱处，但土耳其语 56.02 与 Whisper 的 55.98 基本持平，仍是最难情形，残留误差来自短重叠轮次的边界与混淆、代码切换与命名实体及标点流畅性风格差异。

该结论成立的前提是离线批量推理、固定双人假设与安静室内 16 kHz 录音，且开发集每语言约 4 小时规模较小，未验证流式、重叠严重或远场噪声条件。缺少人工听测意味着自动错误率与人感知的对应关系未经检验，神经代理指标亦未使用，榜单评测集平均 17.97 低于开发集，反映分布差异而非同一集合可比，引用时需区分本地与榜单两种口径。

### 三阶段各自贡献与强化学习的稳定作用

下表为原文 Table 3 的完整转录，保留全部四阶段行与单列平均 tcpMER，用于分离三阶段各自贡献，数值越低越好，阶段按训练顺序累加，同一分离输出保持共享。选择完整展示是因为该表仅有两列五行，无需精简即可一次看清递减趋势，也为判断强化学习微弱增益是否值得额外采样开销提供依据。

| System | tcpMER |
| --- | --- |
| Base Qwen-ASR-1.7B | 30.53 |
| + Full SFT on official data | 24.3 |
| + Synthetic-speech LoRA | 23.78 |
| + Reinforcement learning | 23.70 |

表中从基线 30.53 经全参数监督微调降至 24.3，为最大单步下降，说明学习双人对话设定与转写规范是关键，合成语音低秩适配进一步降至 23.78，强化学习微调至 23.70，呈现主增益加尾段稳健化的格局。原文指出合成增益集中在最难语言，强化学习主要抑制长噪段的病态重复与幻觉，但在奖励噪声较大的语言如土耳其语会出现小幅回退，整体仍以稳定输出见长。

缺失的消融包括未单独评估嵌入维度、聚类阈值、合成数据 3 流程各自占比与强化学习采样数的影响，也未对比冻结与解冻不同模块的替代方案，因此无法判断低秩秩数与数据配比是否最优。强化学习被定位为低风险稳定器而非精度引擎，若目标是极限压低平均误差，继续增大采样开销的回报可能有限，资源应优先投向监督数据与合成质量。

至少一个未胜出项是土耳其语未超越 Whisper，一个负结果是部分语言在强化学习后小幅回退，一个未评测范围是真实重叠语音的分离质量与长时漂移，原文未给出失效案例音频与显著性检验，工程上需预留回退策略。

### 假设边界、复现前提与工程选型建议

系统假设每段录音恰含 2 名说话人，聚类数固定为 2，不处理单人或 3 人以上场景，训练依赖带预言切分与说话人标签的官方数据，推理依赖语音活动检测与嵌入质量，安静室内假设使远场、混响与强噪声下的表现未经验证。文本规范在训练与推理中一致，若部署时标点与大小写规范变化，误差可能上升，低资源语言合成语音质量亦是隐性上限。

复现核对需区分三件事，代码是否开源原文未说明，权重是否提供下载原文未说明，系统是否可直接运行原文未说明，原文未给出公开链接与一键运行方式。训练数据为官方划分加 3 流程合成共 234,333 项，合成器为已披露的 OmniVoice，评测需复刻贪婪解码、最大长度 256 与共享分离输出，否则平均值不可比，开发集本地 23.70 与榜单评测集 17.97 属不同集合，不可直接相减论证泛化。

工程选型上，若任务固定为双人离线转写，可直接复用固定双人谱聚类加批量识别的路线，优先投入全参数监督微调，再以合成语音扩展难例，最后视稳定性需求决定是否引入强化学习。若需流式低延迟或说话人数可变，则当前固定人数与离线批量设计不再适用，需重新设计在线聚类与分块解码，并补测延迟、实时率与显存，原文未披露此类开销，选型时应预留评测预算。

原文未提供试听演示页，无法对照听感与基线差异，未来工作指向更强的分离与识别耦合及更保守的事后校正，避免对日语、韩语与泰语的过度纠正与幻觉。初学者复述时可抓住一条主线，分离定边界，识别定文字，三阶段适配先学规范再补难例最后压制病态输出，平均误差下降主要来自第一阶段，后两阶段以稳健性见长。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，语音活动检测帧长 25 ms，帧移 10 ms，分块窗口 200 ms，嵌入子段长 1.5 s，跳跃 0.75 s，重叠率 50%，80 维滤波器组特征，192 维嵌入，最大音频长度 30 s，最大输出长度 256 个词元，贪婪解码温度 0，码率与实时率原文未披露
- **训练与评测数据**：官方训练集约 1,500 小时，英语约 500 小时，其余语言各约 100 小时，新增他加禄语等与三个区域变体，开发集每语言约 4 小时，共 21 个语言区域条件，合成数据 234,333 项含 166,633 个对话组加 32,700 条与 35,000 条，文本遵循统一规范
- **算力与训练耗时**：原文未披露训练所用处理器型号数量与训练步数耗时，也未说明推理硬件配置
- **核心超参数与配置**：AdamW 优化器，全参数微调峰值学习率 2×10−5，共 4 轮，低秩适配秩 64 缩放 128 丢弃率 0.05，峰值学习率 5×10−5，共 5 轮，强化学习学习率 1×10−6，采样数 2，截断比 0.2，散度系数 0.005
- **推理速度与部署开销**：贪婪解码温度 0，最大输出长度 256 个词元，离线批量推理，延迟实时率显存与参数量原文未披露
- **开源产物与协议状态**：原文未给出代码与权重的公开链接，也未描述一键运行方式与演示地址，外部合成器已按规则披露
- **附录与补充材料要点**：原文未设独立附录，关键超参与数据配比已在正文给出，参考文献覆盖挑战基线与工具来源

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 7.6/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:wu26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/wu26_mlcslm.pdf)
- Track：Poster Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：相同分离标注下完整系统平均tcpMER为23.70，相对未微调Qwen下降6.83并优于全部四个对照，乌尔都语从102.84降至19.77。

- 核心优势：三阶段适配细节完整，给出LoRA秩64与112个线性模块及GRPO奖励截断公式，并配套234333条三管线合成数据配比。

- 主要短板：最终评测集仅报告平均tcpMER为17.97而无基线对照与分语种明细，且DER仅作监测描述未报告数值，无法判断分离标注瓶颈占比。

- 主要短板：强化阶段组采样K为2使优势估计方差偏高，平均增益仅0.08且土耳其语出现回退，直接注入仅保留不一致样本或引入选择偏置。

- 主要短板：训练推理部署的显存时延或实时率代价原文未披露，且原文未说明流式因果或实时约束，工程实测证据缺失。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
