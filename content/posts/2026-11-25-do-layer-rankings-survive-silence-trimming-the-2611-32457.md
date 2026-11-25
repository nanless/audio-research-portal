---
title: "Do Layer Rankings Survive Silence Trimming? The Silence Shortcut in Frozen WavLM Representations for Audio Deepfake Detection"
date: 2026-11-25
draft: false
tags: [音频深度伪造检测, 表示探测, 统计分析, 语音]
categories: [论文速递]
description: "本文以冻结 WavLM Base 每层单分类器与保留修剪四格设计检验层排序，发现 40 dB 修剪使域内误差全层上升且排序仅部分保留，最优层不变但浅层大幅跌落，而域外效应呈层选择性，代价是更严阈值下最优层漂移与宽说话人级不确定性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32457"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "静音修剪后冻结 WavLM 层排序能否保留"
paper_digest_original_title: "Do Layer Rankings Survive Silence Trimming? The Silence Shortcut in Frozen WavLM Representations for Audio Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32457v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32457v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32457v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文以冻结 WavLM Base 每层单分类器与保留修剪四格设计检验层排序，发现 40 dB 修剪使域内误差全层上升且排序仅部分保留，最优层不变但浅层大幅跌落，而域外效应呈层选择性，代价是更严阈值下最优层漂移与宽说话人级不确定性。"
paper_digest_reader_sections: [{"heading":"首尾静音在 ASVspoof 2019 LA 中为何成为可利用线索","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结单层流水线与四格训练测试如何分离静音影响","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"均值统计池化与轻量分类器如何界定冻结边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"修剪后域内误差全层上升而域外方向反转","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"失配效应分解与更严阈值下的最优层漂移","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"双条件报告与无填充提取才是可复现的选层前提","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Department of Biomedical Engineering, Fatih Sultan Mehmet Vakif University, Istanbul, Türkiye"],"name":"Nur Elabid"},{"affiliations":["Department of Electrical and Electronics Engineering, Fatih Sultan Mehmet Vakif University, Istanbul, Türkiye"],"name":"Mahmud Esad Arar"}]
paper_digest_abstract_sha256: "554355383e4823cd407374067c61f693d410b0b3d99ed943546d8c498d3efe0e"
paper_digest_sidecars: {"citation.bib":{"sha256":"728d13747ed51bbdf24fa7053d97693f85145399e6915f6472bf14a283f7e20b","url":"/audio-research-portal/client/papers/2026-11-25/2611-32457/citation.bib"},"citation.json":{"sha256":"8e3efc4859e134ed4cb04e8afd0ef226c4a89ec0dde104cf1483b2ba3349d56d","url":"/audio-research-portal/client/papers/2026-11-25/2611-32457/citation.json"},"citation.ris":{"sha256":"73ee56be555afa68a625547f3b0ee2e8d399051c6ac005a151d4c1174b7cef77","url":"/audio-research-portal/client/papers/2026-11-25/2611-32457/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ea0e65155ff492642947a31db9b4c50dcfccb4abc06b4a613d9672b9fe506f2c","url":"/audio-research-portal/client/papers/2026-11-25/2611-32457/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "c2bc6b401234c9ff2e282f810416e8a1ccaaf159fa1cb7680e03c3b716d2fec0"
paper_digest_api_reader_plan_sha256: "1904f24e3da9c499d956900c64a4b98fd2e9378a5f1d60bd788039f64d0d4bdf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "42a818bab84f2e536bf865eef41b840ef2c2764b51bf923603a7ffbee016ddb7"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "83811ddcf18bed04d65afc014442466600c7a5c438991b561c82a5673605c71b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "b879c7d40474267597212a152fedf62cc71543360713d4e5004db99f28e7244a"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0dcdabab9f18859463857b24284d2c874bde8ac9026808956c486269f4ccd24e"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 静音修剪后冻结 WavLM 层排序能否保留

> 英文题目：*[Do Layer Rankings Survive Silence Trimming? The Silence Shortcut in Frozen WavLM Representations for Audio Deepfake Detection](https://arxiv.org/abs/2611.32457v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 6.7/10 | 技术严谨 8.0/10 | 实验充分 7.8/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 6.0/10 | 可复现 8.2/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Nur Elabid：Department of Biomedical Engineering, Fatih Sultan Mehmet Vakif University, Istanbul, Türkiye
- Mahmud Esad Arar：Department of Electrical and Electronics Engineering, Fatih Sultan Mehmet Vakif University, Istanbul, Türkiye

## 📌 核心摘要

**问题与瓶颈：** ASVspoof 2019 逻辑访问分区中，真品语音的首尾静音明显长于伪造语音，检测器可直接利用静音时长区分两类，形成静音捷径。任务输入为 16 kHz 单声道波形，输出为真伪检测得分，冻结编码器的层级分析希望回答伪造信息位于哪一层。如果某一层更善于编码静音，其排名靠前可能只是静音编码能力强，而非伪造鉴别能力强。现有工作多在含静音音频上比较各层，或仅覆盖部分训练测试组合，没有检验 12 层的排序在去除静音后是否成立。

**核心思路与方法架构：** 与微调整个前端的最接近路线不同，本文固定 WavLM Base 编码器全部约 94.4M 参数，只为每一层单独训练一个两层小分类器，使层间差异完全归因于表示与是否去静音。一条 1 s 输入对应 16,000 个采样点，经卷积编码器得到每 20 ms 一帧的隐藏状态，单层输出约为 50 × 768 矩阵，再经均值池化得到 768 维向量或统计池化得到 1,536 维向量，送入 768 或 1,536 → 128 → 2 的网络输出伪造类概率。全部 12 层分别在原始音频与 40 dB 去除首尾静音音频上训练，并在两种测试条件下交叉评测，形成完整 2 × 2 设计，辅以 20 dB 与 15 dB 敏感性分析。特征按文件原长逐个抽取而不补零，以避开分组归一化引入的填充偏移，编码器始终冻结并处于评测模式，分类器为唯一更新部分，分析窗口为中央至多 4 s 的离线裁剪。

**关键实验与核心代价：** 在 ASVspoof 2019 评测集上，去静音使每一层的等错误率 EER（等错误率，越低越好 ↓）都上升，开发集所选配置从原始统计池化第 3 层 1.61% 升至去静音统计池化第 5 层 5.03%，仅修剪测试音频就带来 6.3 至 19.9 个百分点的上升，每层配对区间都不含零。12 层排序仅部分保留，评测集上 Kendall τ 为 0.58，In-the-Wild 上为 0.73 至 0.76。在 40 dB 最优层不变，评测集为第 5 层，In-the-Wild 为第 4 层，在 15 dB 两种池化与 20 dB 均值池化下评测集最优层变为第 6 层，20 dB 统计池化下第 5 层与第 6 层几乎持平。补零使第 4 层特征相对偏差在原始与去静音音频上达 0.31 与 0.44，注意力掩码仅降至 0.15 与 0.34。分攻击看 A10 上升 16.7 至 24.3 个百分点，而 A17 小幅显著下降。主要代价是域内误差成倍上升，浅层第 1 层从 3.15% 升至 15.97%，更严阈值进一步推高至 5.80% 与 6.20%，且 In-the-Wild 说话人级区间宽约正负 5 个百分点。

**适用边界与深读导览：** 上述结论仅在冻结 WavLM Base、单语料训练、至多 4 s 中央窗口、仅去除首尾静音的条件下成立，未覆盖微调系统、话语内部停顿、大模型与其他编码器，也未做人工听感评测。实际使用中，层级研究应同时报告原始与去静音两种条件，WavLM Base 特征应按原长抽取而不补零。若需深究，可查阅下文方法中 2 × 2 效应定义与统计分析，以及结果中排序一致性、填充影响与分攻击表格。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Nooralabd/silence-shortcut-wavlm-layers> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档；许可证：MIT

- 论文所列链接：<https://datashare.ed.ac.uk/handle/10283/3336> → <https://datashare.ed.ac.uk/items/31074a11-b6f6-4e92-a4ad-07093f8c0c45> — 链接可访问（HTTP 200）

- 论文所列链接：<https://deepfake-total.com/in_the_wild> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/microsoft/wavlm-base> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/docs/transformers/model_doc/wav2vec2> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/pytorch/audio/issues/2242> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 首尾静音在 ASVspoof 2019 LA 中为何成为可利用线索

语音合成与声音转换的自然度持续提升，使伪造语音能够绕过为拒绝冒充者而设计的自动说话人验证系统，欺诈性音频证据与大规模虚假信息因此成为现实风险。近年反欺诈对策多以 wav2vec 2.0、HuBERT、WavLM 或 XLS-R 等自监督语音模型为前端，再联合微调检测头。联合优化难以区分预训练表征本身已编码的伪造信息与微调新增的判别能力，冻结编码器则固定表征，仅训练轻量后端，使层间比较可归因于后端与条件选择。已有工作据此报告冻结 WavLM Base 的中间层最具信息量，例如第 4 层在 6 种冻结模型的跨域比较中单层最优。

在 ASVspoof 2019 LA 上，上述层排序结论建立在一个已知捷径之上。真语音的首尾静音明显长于伪造语音，评估集全文件测得中位前导静音真为 0.77 s、伪造仅 0.05 s，4 s 分析窗内为 0.72 s 与 0.04 s。仅用首尾静音时长与窗内静音训练的逻辑回归在评估集达到 18.82% EER（等错误率，数值越低越好）与 23.40% EER（30 dB 与 40 dB 度量），远好于随机猜测。In-the-Wild 方向相反，中位前导静音真为 0.00 s、伪造为 0.24 s，同样的静音分类器仅得 49.20% 至 58.48% EER，接近或差于随机，说明域内线索在域外失效。

若某层排名靠前部分源于其更擅长读取静音，那么在该基准上测得的层排序只是各层读取静音能力的排序。本文核心问题是冻结 WavLM Base 的 12 层排序在去除首尾静音后是否保留。作者对每一层分别在保留与去除静音两种条件下训练小型分类器，构成训练与测试各两种的四格设计，并在 ASVspoof 2019 LA 评估集与零样本 In-the-Wild 上评估，配合说话人级自助法区间。目标不是刷低误差，而是量化每层行为对静音的依赖程度与排序保留的统计不确定性。

### 冻结单层流水线与四格训练测试如何分离静音影响

#### 与最近路线的增量与信号规格

与最近基线相比，本文保留冻结编码器与单层单分类器的极简设定，替换的是评测维度。Wang 等评估 10 种对策含微调 wav2vec 2.0，覆盖 3 种训练测试组合但无冻结编码器、无逐层误差与无 In-the-Wild。Xiao 与 Vu 在冻结 XLS-R 上逐层接分类器并融合决策，用余弦距离分布说明浅层受静音影响最大，但仅以图形报告一种训练条件的逐层误差，无完整四格与排序检验。Müller 等与 Shim 等分别在 RawNet2 与 AASIST-L 上覆盖三格或四格，均不分析冻结编码器逐层。本文对 WavLM Base 全部 12 层实现四格，检验排序保留并做域外零样本评估。

信号规格统一为 16 kHz 单声道，静音修剪用 librosa 0.11.0 的 effects.trim，能量低于最响帧 40 dB 的首尾帧被去除，帧长 400 采样点、步长 160 采样点，剩余不足 0.5 s 则保留原文件。两条件随后均执行中央裁剪至不超过 4 s 即 64,000 采样点，短文件保持原长不补零，短于 400 采样点才补至 400 点，最后做峰值归一化。训练集含 2,580 个真与 22,800 个伪共 25,380 个文件，开发集 2,548 个真与 22,296 个伪共 24,844 个文件，评估集 7,355 个真与 63,882 个伪共 71,237 个文件，In-the-Wild 含 19,963 个真与 11,816 个伪共 31,779 个文件，仅用于零样本测试。

#### 1 s 输入的端到端张量旅程

在进入数字之前，先沿流水线示意的箭头阅读主路径，从左上 16 kHz 波形出发，经过虚线修剪分支与中央裁剪峰值归一化，再向下进入冻结编码器与单层池化分类器。请重点区分虚线仅在修剪条件执行，以及编码器冻结与分类器可训练的边界位置，这有助于理解后文 1 s 样例的形状变化与四格设计在何处分叉。

![原论文 Figure 1：Detection pipeline. Silence trimming (dashed) is applied only in the trimmed condition.](/audio-research-portal/images/papers/2611.32457/figure-1-f074040173844ccd.png)

> **图片来源：** 原论文 PDF 第 7 页（含图 1）

*论文图 1：冻结 WavLM 流水线：虚线修剪分支、中央裁剪与单层池化分类器边界（原论文 Figure 1）。*

示意从左到右从上到下依次为 16 kHz 单声道波形、40 dB 静音修剪虚线框、中央裁剪至不超过 4 s 且不补零、峰值归一化、卷积编码器、12 层 Transformer 输出 H(1) 至 H(12)、单层 T × 768 特征、均值或统计池化、D 至 128 至 2 分类器与分数输出。下方标注 WavLM Base 冻结参数约 94.4M，分类器可训练参数约 197K。虚线框表明修剪分支可开关，文件以自身长度进入编码器，这是后文无填充提取的关键。

以下 1 s 输入为教学例子，用于追踪张量形状。1 s 对应 16,000 采样点，经修剪去除首尾低能量后保留语音主体，中央裁剪不改变短文件长度。卷积编码器以每 20 ms 一帧输出约 50 帧，单层隐状态为 50 × 768。均值池化压缩为 768 维向量，统计池化拼接均值与标准差为 1,536 维，再经 128 维隐层与 ReLU 及丢弃率为 0.3 的 Dropout 输出 2 类对数几率，取伪造类 softmax 概率为分数，符号反转后送入官方评估脚本。

#### 四格设计与选择规则

训练测试四格记训练条件为保留或修剪，测试条件亦然，匹配格为保留对保留与修剪对修剪，失配格为保留对修剪与修剪对保留。每层两种池化共 24 种配置，每种以 42 至 46 共 5 个种子训练 50 轮，Adam 学习率为 \(10^{-4}\)，权重衰减为 \(10^{-5}\)，批量为 128，余弦退火，开发集 EER 在第 1、5、10 至 50 轮共 11 次评估中选最优检查点。层与检查点选择仅用开发集，评估集与 In-the-Wild 不参与任何选择，第 4 层作为文献参照并行报告，不确定性用 1,000 次类别内分层自助法在文件级与说话人级估计，配对差区间不含零视为显著。

### 均值统计池化与轻量分类器如何界定冻结边界

#### 冻结提取与批量策略

特征提取阶段 WavLM Base 全程冻结，以评估模式运行并关闭丢弃、层丢弃与 SpecAugment，不计算梯度。每文件单独送入编码器，批量为 1 且不传入注意力掩码，因此从不添加零填充。每条件特征提取一次并缓存，后续 240 组匹配训练与 240 组交叉条件训练仅更新分类器。这种设计使层间与条件间差异可归因于所选层与训练测试条件，而非微调带来的表征漂移，但也意味着结论未必外推至微调系统。

#### 均值池化将变长帧平均为句向量

均值池化的计算目标是将变长帧序列压缩为定长 768 维句向量，以便后接固定维度的分类器。关键符号中 \(T\) 为 20 ms 步长下的帧数，随文件时长变化，\(h_{t}\) 为所选第 \(l\) 层第 \(t\) 帧的 768 维隐状态，\(\mu\) 为时间维度平均向量，单位与编码器隐状态幅度一致，求和范围为 \(t\) 从 1 至 \(T\)。

\[\boldsymbol{\mu}=\frac{1}{T}\sum_{t=1}^{T}\mathbf{h}_{t}\in\mathbb{R}^{768},\]

该形式的统计直觉是用时间平均抹除时长差异，保留各维度在整句上的平均激活强度，使长短文件可比。当 \(T\) 为 1 时退化为单帧复制，当静音帧占比高时均值被拉向静音对应的激活，静音线索因此混入句向量。输出的 768 维向量直接送入两层网络，梯度止于分类器，不回传至冻结编码器，下一步的判别完全依赖该平均是否保留伪造痕迹。

#### 统计池化补上离散度与轻量分类器

统计池化的目标是在均值之外补上时间离散度，形成 1,536 维句向量，以保留帧间变化信息。符号 \(\sigma\) 为逐元素标准差，采用除以 \(T\) 的总体定义，\(v_{stats}\) 为均值与标准差的拼接，维度为 1,536，前 768 维为均值，后 768 维为标准差，求和与开方均逐元素进行，单位仍为隐状态幅度。

\[\boldsymbol{\sigma}=\sqrt{\frac{1}{T}\sum_{t=1}^{T}(\mathbf{h}_{t}-\boldsymbol{\mu})^{2}},\qquad\mathbf{v}_{\mathrm{stats}}=[\boldsymbol{\mu};\boldsymbol{\sigma}]\in\mathbb{R}^{1536}.\]

该形式的直觉是标准差捕捉整句的起伏，静音与语音交替会导致某些维度方差增大，从而为分类器提供除均值位置之外的第二视角。当整句为纯静音或纯平稳语音时 \(\sigma\) 趋近于零，退化为均值加零向量，当首尾静音被修剪后 \(\sigma\) 的来源更多转向语音内部变化。输出维度翻倍使分类器参数从 98,690 增至 196,994，仍远小于冻结的 94.4M，下一步同样送入同一两层结构。

轻量分类器的目标是将 768 或 1,536 维句向量映射为真伪两类的对数几率。符号 \(D\) 为输入维度，对应均值或统计池化，128 为隐层宽度，ReLU 为非线性，Dropout 丢弃率为 0.3，末层输出两类未归一化分数，训练用加权交叉熵，权重真类约 4.92，伪类约 0.56，以缓解约 9 比 1 的类别失衡。

\[\mathrm{Linear}(D,128)\rightarrow\mathrm{ReLU}\rightarrow\mathrm{Dropout}(0.3)\rightarrow\mathrm{Linear}(128,2),\]

该结构的物理直觉是以两层非线性在冻结表征空间中划出真伪边界，隐层提供有限容量以避免记住说话人，丢弃与类别加权缓解伪多真少失衡。当输入全为静音残留时网络只能依赖静音激活的偏置，修剪后则被迫使用语音内部差异。输出经 softmax 取伪造概率为分数，符号反转后适配期望真分数更高的官方脚本，梯度仅更新该两层，冻结边界清晰。

### 修剪后域内误差全层上升而域外方向反转

#### 零填充经组归一化污染特征

在比较保留与修剪的误差之前，先看补零是否改变表征本身。请横向阅读横轴 WavLM 层数与纵轴相对平均偏差，比较青色保留音频与红色修剪音频的高低，再比较实线无掩码与虚线有掩码的差距，竖线标出第 4 层位置。这组曲线决定后文为何坚持每文件以自身长度送入编码器，避免批量补零引入额外变量。

[![原论文 Figure 3：Relative deviation of padded from unpadded WavLM Base features at each layer, for 500 randomly…](https://arxiv.org/html/2611.32457v1/padding_diff.svg)](https://arxiv.org/html/2611.32457v1/padding_diff.svg)

*论文图 3：补零导致各层特征相对偏差，修剪音频更高而注意力掩码仅部分缓解（原论文 Figure 3）。*

在随机 500 个训练文件上，第 4 层补零至 4 s 导致特征相对自身幅度的偏差在保留音频为 0.31，在修剪音频为 0.44，加入注意力掩码后分别降至 0.15 与 0.34，仍未消除。修剪后文件更短，中位填充为 1.76 s 对 0.85 s，偏差随填充量增长，修剪音频在第 4 层填充不足 1 s 时约 0.20，超过 3 s 时约 0.94。仅用填充量分类接近随机，EER 为 41.6% 至 48.9%，无填充提取在两参照配置上评估集为 1.48% 与 6.44%，与补零的 1.23% 与 6.42% 各有胜负，说明无填充的理由是表征仅依赖自身样本，而非性能。

为确认静音本身的判别力，作者不使用任何音频模型，仅用首尾静音时长与窗内静音训练逻辑回归，特征经对数变换与标准化并按类别加权。下表比较仅静音与静音加时长填充两种特征在 30 dB 与 40 dB 度量下开发集、评估集与 In-the-Wild 上的 EER，EER 单位为 %，数值越低表示静音线索越强。

| Features | Threshold | Development | Evaluation | In-the-Wild |
| --- | --- | --- | --- | --- |
| sil | 30 dB | 31.90 | 18.82 | 49.20 |
| sil | 40 dB | 30.22 | 23.40 | 58.39 |
| sil+dur | 30 dB | 31.12 | 18.75 | 49.24 |
| sil+dur | 40 dB | 34.50 | 23.25 | 58.48 |

评估集上静音特征单独达到 18.82% EER 与 23.40% EER，加上样本数与填充量几乎不变，说明首尾静音时长已是远好于随机的强线索。In-the-Wild 上同样模型仅得 49.20% 至 58.48% EER，接近或差于随机，且中位前导静音真伪方向反转，预示域内依赖静音的模型在域外未必受益，这为后文域内上升域外下降的方向反转埋下伏笔。

#### 匹配条件下各层误差方向反转

接下来对比保留与修剪两条曲线随层数的变化。请先区分左右两面板，左侧为 ASVspoof 2019 LA 评估集，右侧为 In-the-Wild，再看青色保留与红色修剪的高低，以及实线统计池化与虚线均值池化的细微差异。阴影标出第 3 至 5 层，竖线为第 4 层，方块标记开发集选中层，据此可先判断最优区间与池化差异大小。

[![原论文 Figure 4：EER of each WavLM Base layer on (a) the ASVspoof 2019 LA evaluation set and (b) In-the-Wild, for…](https://arxiv.org/html/2611.32457v1/layers.svg)](https://arxiv.org/html/2611.32457v1/layers.svg)

*论文图 4：各层在评估集与 In-the-Wild 上的误差曲线，域内上升而域外反转（原论文 Figure 4）。*

评估集上修剪曲线在全部 12 层均高于保留曲线，浅层差距最大，统计池化第 1 层从 3.15% 升至 15.97%，第 5 层从 1.37% 升至 5.03%。In-the-Wild 方向反转，修剪在第 2 至 9 层降低误差，第 11 至 12 层基本不变。两种池化差异微小，最优三层在保留条件与域外均为第 3 至 5 层，修剪后域内变为第 4 至 6 层，第 4 层在保留修剪与两种池化的 4 种组合下域外均为最低，开发集在保留条件选中第 3 层，在修剪条件选中第 5 层。

开发集在保留条件选中第 3 层，在修剪条件选中第 5 层，第 4 层作为既往文献单层最优的参照并行报告。下表仅展示其中 4 行代表性配置在评估集与 In-the-Wild 上的 EER 与 95% 说话人级区间，EER 单位为 %，数值越低越好，区间由 1,000 次说话人级自助法得到。原文完整实验另有 6 种配置的开发集 EER 与最小 t-DCF 数据，不在当前表格内。

| Configuration | ASVspoof 2019 LA evaluation EER | ASVspoof 2019 LA evaluation 95% CI | In-the-Wild EER | In-the-Wild 95% CI |
| --- | --- | --- | --- | --- |
| clean/mean/L3 | 1.73 ± 0.01 | [1.36, 2.11] | 19.28 ± 0.28 | [14.34, 24.47] |
| clean/stats/L4 | 1.48 ± 0.02 | [1.15, 1.85] | 18.26 ± 0.48 | [13.64, 23.27] |
| trimmed/mean/L5 | 5.18 ± 0.02 | [4.52, 5.92] | 16.54 ± 0.07 | [12.45, 21.15] |
| trimmed/stats/L5 | 5.03 ± 0.04 | [4.29, 5.75] | 16.46 ± 0.14 | [12.57, 21.06] |

就表内 4 行而言，评估集 EER 从 1.73% 升至 5.18% 与从 1.48% 升至 5.03%，分别上升 3.45 与 3.55 个百分点。In-the-Wild EER 从 19.28% 降至 16.54% 与从 18.26% 降至 16.46%，分别下降 2.74 与 1.80 个百分点。原文完整实验报告 6 种配置评估集上升 3.7 至 7.2 个百分点且文件级与说话人级均显著，最小 t-DCF 从 0.0416 至 0.0528 升至 0.1290 至 0.1667，该范围来自原文完整实验而非当前表格。In-the-Wild 每类仅 54 个说话人，区间宽约正负 5 个百分点。

#### 排序保留程度与浅层跌落

为量化排序是否保留，作者用种子平均 EER 计算保留对保留与修剪对修剪两匹配格的 Kendall τ 与 Spearman ρ，τ 越接近 1 表示排序越一致，并记录自助重采样中最优层比例。下表比较两种池化在两个测试集上的一致性，p 为 12 层固定时的精确双侧检验，不反映文件与说话人抽样不确定性。

| Set | Pooling | Kendall’s τ | p (exact) | Spearman’s ρ | Best layer (clean / trimmed) |
| --- | --- | --- | --- | --- | --- |
| Evaluation | stats | 0.58 [0.39, 0.64] | 0.009 | 0.66 [0.52, 0.76] | L5 (82%) / L5 (82%) |
| Evaluation | mean | 0.58 [0.42, 0.64] | 0.009 | 0.66 [0.51, 0.76] | L5 (99%) / L5 (55%) |
| In-the-Wild | stats | 0.73 [0.42, 0.85] | 0.0005 | 0.90 [0.57, 0.94] | L4 (90%) / L4 (82%) |
| In-the-Wild | mean | 0.76 [0.39, 0.82] | 0.0002 | 0.87 [0.51, 0.94] | L4 (91%) / L4 (69%) |

40 dB 下评估集 τ 为 0.58，区间为 0.39 至 0.64 与 0.42 至 0.64，域外为 0.73 与 0.76，但区间宽至 0.42 至 0.85 与 0.39 至 0.82，不宜直接比较两集高低。最优层不变，评估集第 5 层在 55% 至 99% 重采样中最优，域外第 4 层在 69% 至 91% 中最优。分歧来自浅层，第 1 至 2 层增量最大并从第 6 与第 5 名跌至第 12 与第 10 名，第 7 至 12 层误差约翻倍但相对顺序不变，说明排序仅部分保留。

### 失配效应分解与更严阈值下的最优层漂移

#### 四格效应分解显现层依赖

四格效应的计算目标是将修剪的影响分解为训练侧与测试侧，以便判断模型在何处依赖静音。符号 \(E(C,C)\) 等表示训练条件与测试条件组合下的 EER，\(C\) 为保留，\(T\) 为修剪，\(\Delta_{test}\) 为仅修剪测试音频的变化，\(\Delta_{train}\) 为测试修剪时再修剪训练的变化，\(\Delta_{total}\) 为双端修剪总变化，另两项为单侧训练与单侧测试效应，\(I\) 为交互，均以 EER 百分点为单位。

\[\begin{aligned} \displaystyle\Delta_{\mathrm{test}} \displaystyle=E(\mathrm{C},\mathrm{T})-E(\mathrm{C},\mathrm{C}), \\ \displaystyle\Delta_{\mathrm{train}} \displaystyle=E(\mathrm{T},\mathrm{T})-E(\mathrm{C},\mathrm{T}), \\ \displaystyle\Delta_{\mathrm{total}} \displaystyle=E(\mathrm{T},\mathrm{T})-E(\mathrm{C},\mathrm{C}), \\ \displaystyle\Delta_{\mathrm{train}}^{\mathrm{C}} \displaystyle=E(\mathrm{T},\mathrm{C})-E(\mathrm{C},\mathrm{C}), \\ \displaystyle\Delta_{\mathrm{test}}^{\mathrm{T}} \displaystyle=E(\mathrm{T},\mathrm{T})-E(\mathrm{T},\mathrm{C}), \\ \displaystyle I \displaystyle=\Delta_{\mathrm{test}}^{\mathrm{T}}-\Delta_{\mathrm{test}}=\Delta_{\mathrm{train}}-\Delta_{\mathrm{train}}^{\mathrm{C}}. \end{aligned}\]

该定义的统计直觉是 \(\Delta_{test}\) 度量保留训练模型对测试静音的依赖，\(\Delta_{train}\) 度量测试修剪时修剪训练的补偿，\(I\) 为负说明测试效应依赖训练条件，即修剪训练削弱对测试静音的依赖。当模型完全忽略静音时各项趋近于零，当完全依赖时长时 \(\Delta_{test}\) 接近静音分类器的判别力。输出直接驱动对浅层脆弱与深层稳健的判断，因编码器冻结，梯度层面的变化仅反映分类器边界移动，而非表征本身的改变。

在阅读效应曲线时，先区分上下两行，上行为评估集，下行为 In-the-Wild，再区分左列测试效应与右列交互作用。请比较实线统计池化圆点与虚线均值池化方点的走势，误差条为 95% 说话人级配对区间，纵轴在行内共享，行间量级差异巨大，需注意域内以 10 个百分点计而域外以 1 个百分点计。

[![原论文 Figure 6：Effects of trimming by layer on the ASVspoof 2019 LA evaluation set (a, top row) and on…](https://arxiv.org/html/2611.32457v1/effects_by_layer.svg)](https://arxiv.org/html/2611.32457v1/effects_by_layer.svg)

*论文图 6：逐层测试效应与交互作用，域内全层显著而域外呈层选择性（原论文 Figure 6）。*

评估集上 \(\Delta_{test}\) 在 24 种配置中为 6.27 至 19.88 个百分点且区间均不含零，第 4 层最小，第 1 层最大。用修剪训练的模型再修剪测试仅变化 0.11 至 4.13 个百分点，12 组区间含零。用修剪训练而测试保留则上升 2.03 至 8.91 个百分点且均显著。以统计第 4 层为例，四格为 1.48%、7.75%、5.37% 与 5.99%，交互为负 5.65 至 15.74 个百分点且 24 组均显著，说明保留训练模型处处依赖静音。In-the-Wild 上仅修剪测试变化至多 1.11 个百分点，3 组显著符号混合，而交互在第 3 至 5 层 6 组均显著为负。

下表摘录统计池化下 5 层示例，给出两个测试集上的三项效应与 95% 说话人级配对区间，均以 EER 百分点为单位，Eval 为评估集，ITW 为 In-the-Wild。完整 12 层与均值池化结果见原文完整实验，区间均未调整 24 重比较的多重性，解读时需考虑同时推断的膨胀风险。

| Set | L | Δtest | Δtotal | I |
| --- | --- | --- | --- | --- |
| Eval | 1 | +17.58 [15.44, 19.98] | +12.82 [10.97, 14.58] | −13.66 [−15.60, −12.04] |
|  | 4 | +6.27 [5.33, 7.28] | +4.51 [3.73, 5.38] | −5.65 [−6.55, −4.78] |
|  | 5 | +6.90 [5.80, 7.94] | +3.67 [3.06, 4.26] | −6.73 [−7.68, −5.86] |
|  | 6 | +7.87 [6.35, 9.53] | +2.90 [2.18, 3.62] | −7.08 [−8.36, −5.87] |
|  | 11 | +15.47 [13.23, 17.67] | +5.26 [4.05, 6.45] | −15.14 [−17.22, −12.98] |

原文完整 12 层结果显示，评估集交互为负 5.65 至 15.74 个百分点且 24 组均显著，Δtotal 为正 2.90 至 12.82 个百分点。域外交互仅 11 组显著为负，第 12 层统计池化交互为正 1.55 [0.02, 3.14]。第 6、8、9 层修剪训练在保留测试上也降低 2.53 至 5.41 个百分点，当前表格仅摘录 5 层示例，完整数值见原文完整实验。

#### 阈值收紧与攻击时长诊断

40 dB 修剪后仍残留中位 0.16 s 真与 0.03 s 伪前导静音，更严阈值去除更多音频并可能触及弱语音。下表比较 40、20 与 15 dB 下回退文件数、中位去除时长、开发选中层、两集误差、排序一致性与最优层归属，20 与 15 dB 下交叉格仅计算第 3 至 5 层，结论为事后敏感性分析。

|  | 40 dB | 20 dB | 15 dB |
| --- | --- | --- | --- |
| Fallback files, eval / ITW | 21 / 49 | 158 / 708 | 279 / 1,147 |
| Median removed (s), eval, bona / spoof | 1.17 / 0.29 | 1.56 / 0.45 | 1.64 / 0.51 |
| Median removed (s), ITW, bona / spoof | 0.01 / 0.35 | 0.71 / 0.63 | 0.78 / 0.71 |
| Dev-selected layer, trimmed | L5 | L5 | L5 |
| Eval EER, stats, L5 (%) | 5.03 | 5.80 | 6.20 |
| ITW EER, stats, L5 (%) | 16.46 | 16.42 | 16.67 |
| Kendall’s τ, eval, stats / mean | 0.58 / 0.58 | 0.48 / 0.39 | 0.42 / 0.36 |
| Kendall’s τ, ITW, stats / mean | 0.73 / 0.76 | 0.52 / 0.58 | 0.64 / 0.48 |
| Best layer, eval | L5 (82%) | L5 (44%) | L6 (63%) |
| Best layer, ITW | L4 (82%) | L4 (99%) | L4 (98%) |
| Δtest, eval, L3–L5, both poolings | 6.3 to 10.2 | 10.6 to 18.0 | 11.2 to 19.1 |
| Δtotal, eval | 4.51 [3.73, 5.38] | 6.59 [5.57, 7.69] | 6.79 [5.68, 7.98] |
| Interaction, eval | −5.65 [−6.55, −4.78] | −10.80 [−12.35, −9.32] | −11.15 [−12.70, −9.66] |
| Δtotal, ITW | −3.18 [−6.53, 0.29] | −4.55 [−8.15, −0.80] | −4.06 [−7.93, 0.002] |
| Interaction, ITW | −1.23 [−1.93, −0.48] | −3.83 [−5.24, −2.23] | −3.47 [−4.95, −1.80] |

评估集中位去除从真 1.17 s 伪 0.29 s 增至 15 dB 下 1.64 s 与 0.51 s，真文件去除中位达 54% 时长，In-the-Wild 从 0.01 s 与 0.35 s 增至 0.78 s 与 0.71 s。开发选中修剪层恒为第 5 层，评估误差从 5.03% 升至 5.80% 与 6.20%。τ 从 0.58 降至 0.42 与 0.36，15 dB 与 20 dB 均值池化下最优层从第 5 移至第 6 层，20 dB 统计池化下第 5 与第 6 层 5.80% 与 5.82% 几乎持平。A10 增量最大 16.7 至 24.3 个百分点，A17 唯一下降 0.76 至 1.27 个百分点，A19 在更严阈值下转为下降，长文件窗口滑动不解释短文件效应。

### 双条件报告与无填充提取才是可复现的选层前提

本研究的方法边界需要如实说明。仅检验 WavLM Base 一种编码器，其卷积编码器用组归一化，大模型或其他归一化未测试。分析窗固定为中央 4 s，仅去除首尾静音，句内停顿未考察。分类器为冻结上的小型网络，微调系统行为可能不同，训练仅用 ASVspoof 2019 LA。20 与 15 dB 为 40 dB 结果已知后追加的敏感性分析，交叉格仅算第 3 至 5 层，40 dB 残留部分线索，更严阈值新增去除始于 40 dB 检出有声处，可能含弱语音或呼吸但未听检。In-the-Wild 每类 54 个说话人，区间宽约正负 5 个百分点，τ 区间亦宽。

复现需区分三件事。作者代码当前可用，地址为 github 仓库 silence-shortcut-wavlm-layers 发布 v1.0 MIT 许可，含安装推理微调说明与结果表。权重为公开的 microsoft wavlm-base，数据经第三方链接获取 ASVspoof 2019 LA 与 In-the-Wild。系统可运行依赖无填充提取，即每文件以自身长度送入编码器，批量为 1，不传注意力掩码，PyTorch 2.11.0 与 Transformers 5.17.0 在 NVIDIA T4 上验证一致。复现第一步可先跑静音逻辑回归与第 4 层四格，核对评估集 1.48% 与 5.99% 量级，再扩展至 12 层。

工程选型上，在 ASVspoof 2019 LA 上做层分析或声称浅层与最优层时，应同时报告保留与修剪双条件，否则浅层排名与更严阈值下的最优层漂移不可见。仅关心域内部署且测试分布保留长静音时，保留训练更优，跨域或测试静音不可控时，第 3 至 5 层需注意训练测试交互，第 6、8、9 层修剪训练在保留测试上也有增益。推理可只计算下半层以至少减半参数。任何 WavLM Base 管道应避免定长补零，改用变长截断，需补验证包括其他编码器归一化类型、句内停顿、微调系统与更大说话人群的残留静音测量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32457v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：固定约94.4M参数WavLM Base编码器，仅训练每层两层小分类器，使层间差异完全归因于表示与去静音条件。

- 核心优势：对12层实施完整2×2训练测试设计并定义显式效应差值，辅以20dB与15dB敏感性分析与说话人级自助区间。

- 核心优势：定量测得补零在第4层引入0.31与0.44相对偏差而掩码仅降至0.15与0.34，确立按原长抽取的防污染规范。

- 主要短板：仅研究WavLM Base单一编码器且单语料训练，固定4s中央窗口并仅去除首尾静音，未覆盖微调系统与话语内部停顿。

- 主要短板：In-the-Wild每类仅54位说话人使说话人级区间宽约正负5个百分点，域外降低仅部分说话人级显著；24配置多重比较未校正需谨慎解读。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
