---
title: "ClusterVAD: Threshold-Free Unsupervised Voice Activity Detection with Pre-Trained Neural Representations"
date: 2026-11-25
draft: false
tags: [语音活动检测, 聚类与类别匹配, 自监督学习, 语音]
categories: [论文速递]
description: "针对跨域失配与标注粒度不一时无监督检测器难以利用数据的问题，ClusterVAD 用冻结基础模型表征加一次声响度标记码本与逐录音隐马尔可夫免阈值决策，在七项暂停级基准上取得最低检测错误率并在轮次级保持次优，代价是编码器计算开销大且短语音与轮次桥接仍弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33059"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "冻结语音表征聚类实现免阈值无监督语音活动检测"
paper_digest_original_title: "ClusterVAD: Threshold-Free Unsupervised Voice Activity Detection with Pre-Trained Neural Representations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33059v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33059v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33059v1.pdf"
paper_digest_primary_task: "语音活动检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.vad","label":"语音活动检测"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对跨域失配与标注粒度不一时无监督检测器难以利用数据的问题，ClusterVAD 用冻结基础模型表征加一次声响度标记码本与逐录音隐马尔可夫免阈值决策，在七项暂停级基准上取得最低检测错误率并在轮次级保持次优，代价是编码器计算开销大且短语音与轮次桥接仍弱。"
paper_digest_reader_sections: [{"heading":"无监督语音活动检测在跨域泛化与标注粒度上的两难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"ClusterVAD 以冻结表征加一次码本实现免阈值检测","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"白化去各向异性与声响度标记的百类码本拟合","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"帧级语音概率与逐录音自适应的两状态隐马尔可夫决策","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"暂停级多数领先而日志两项由有监督保持的检测误差","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"表征、码本与标注信号的消融及噪声下声响度失效对照","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"计算开销、短语音与单语码本决定的适用边界与复现清单","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Idiap Research Institute, Switzerland","EPFL, Switzerland"],"name":"Karl El Hajal"},{"affiliations":["Idiap Research Institute, Switzerland"],"name":"Mathew Magimai. -Doss"}]
paper_digest_abstract_sha256: "91d502dd5f0ad4d5728c8ebbca80481c2e76ab2e89939ad1f57714533d1af50c"
paper_digest_sidecars: {"citation.bib":{"sha256":"b660b66f9f7434a2309ea618bfbf2d757e76e8a15c161f53006e105262c2c331","url":"/audio-research-portal/client/papers/2026-11-25/2611-33059/citation.bib"},"citation.json":{"sha256":"a39b3996e5284e567f4e19b9a69e1bb25776ddeeee6e6a2a12e35a02582b6f4c","url":"/audio-research-portal/client/papers/2026-11-25/2611-33059/citation.json"},"citation.ris":{"sha256":"ba1ba95dc7f2236892eba106ed97c72e8fca9c10a99e144a5ccc2fd3a55481fe","url":"/audio-research-portal/client/papers/2026-11-25/2611-33059/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a5c038d518d230a9727f0d37bc9a50916ae0efb972e045588116022a5e5c5ddc","url":"/audio-research-portal/client/papers/2026-11-25/2611-33059/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "284123224a04946f2d5d13aae57e4a6883cf7528b3e83ebb0b2b061e3119875b"
paper_digest_api_reader_plan_sha256: "9bf30f23cf8712e40194de4fe7f2e3715fe66da276aa819cf4e8df3f7e9e2f28"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d711a893ae3d789c58aaa698ed34246d84d624bc611ee6cdf7fd3bb3b0f4719b"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "3d5b09c40e4aac59b33035c63f1f7ea0d60dcebbe5c4f8479f74126e51500789"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "dc6e679afa5432200f152d5698c0fc1da2fdc98587d9d2de90bbbefe2bbe8bca"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1e4c63b6962d722ec4a1bbd5474035ea09126bea6679b8902c82822bb6090f5c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 冻结语音表征聚类实现免阈值无监督语音活动检测

> 英文题目：*[ClusterVAD: Threshold-Free Unsupervised Voice Activity Detection with Pre-Trained Neural Representations](https://arxiv.org/abs/2611.33059v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音活动检测](/audio-research-portal/papers/?concept=task.vad)
- **研究方法**：[聚类与类别匹配](/audio-research-portal/papers/?concept=method.clustering)；[自监督学习](/audio-research-portal/papers/?concept=method.self-supervised)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 7.5/10 | 技术严谨 7.1/10 | 实验充分 8.1/10 | 清晰度 6.6/10 | 影响力 6.9/10 | 开源 3.0/10 | 可复现 7.9/10 | 工程/实践 6.4/10


## 👥 作者与机构

- Karl El Hajal：Idiap Research Institute, Switzerland；EPFL, Switzerland
- Mathew Magimai. -Doss：Idiap Research Institute, Switzerland

## 📌 核心摘要

**问题与瓶颈：** 语音活动检测要把一段波形切成包含人声与不包含人声的时段，为识别、说话人分离标注和语音语言模型提供入口。有监督检测器依赖逐帧标注训练，容易学到训练语料的领域与标注习惯，换域后失配明显。无监督检测器多用能量、过零率、基频等手工特征加阈值或双高斯拟合，在干净近场尚可，在远场、噪声或非典型发音下迅速退化，也难以从更多无标注数据中获益。难点在于不用标注也能利用大规模数据学到的语音知识，同时在不同粒度标注下保持稳定判决。

**核心思路与方法架构：** 与同样使用冻结表示的有监督对照 INA SSL-VAD 相比，ClusterVAD 保留冻结编码器而省去分类器训练，用一次拟合的码本加声学度量完成标注。对一段音频，冻结编码器每 20 ms 输出一帧向量，1 s 约 50 帧，先用辅助数据上拟合的主成分分析白化去各向异性，再与 100 个质心算余弦相似度并经温度 0.1 的 Softmax 得到聚类后验，加权求和得到每帧语音概率。码本只在 1.8 小时未转写单人朗读英语上拟合一次，主成分保留 128 维，聚类后用音节突显度对每类求平均并经一维二均值分成高低两组，分别记为语音与非语音，推理时不再计算该度量。判决有两种，调优阈值在开发集上搜索阈值与最短时长，免阈值方案把语音概率取对数几率后在每条录音上用 Baum-Welch 拟合双状态高斯隐马尔可夫模型并经 Viterbi 解码，窗长 5 s 跳 2.5 s 并以 Hann 加权平均。这种设计直击根因，语音与非语音的区分已藏在自监督表示中，白化消除大模量维度对距离的支配，聚类把声学相似帧归并，弱度量只负责给类贴标签，逐录音拟合则适配电平与噪声而不调全局阈值。

**关键实验与核心代价：** 在 12 项评测上以检测错误率 DetER ↓ 为主指标，事件级 F1 (Event-F1) 趋势一致，ClusterVAD 在 7 个暂停级基准上取得最低误差，如 AMI 近场暂停级 8.1% 低于 INA SSL-VAD 的 10.6% 与 Silero 的 10.8%，远场暂停级免阈值 HuBERT Large 变体 10.9% 低于 Silero 的 15.3%，含噪 LibriVAD 调优阈值 HuBERT Large 变体 6.5% 低于 pyannote 3.0 的 10.4%。按 SNR 分档的噪声对照更直接，在 AMI 叠加 MUSAN 噪声 0 dB SNR 时 ClusterVAD OLIVE-J 的 DetER 为 25.4% ，低于直接以音节突显度判决的 37.5%，在 LibriVAD -5 dB SNR 时 ClusterVAD HuBERT Large 变体为 10.3% ，低于音节突显度的 18.4%。在说话轮次级与 diarization 标注上 pyannote 3.0 因训练见过同类数据而最优，如 AMI 轮次级 6.2% 低于 ClusterVAD 免阈值 OLIVE-J 变体的 7.2%，VoxConverse 5.0% 低于 5.1%，ClusterVAD 保持第二低且多在置信区间内重叠。消融显示 39 维 MFCC 流水线在 AMI 开发集 30.2% 远高于语音自监督表示的 8.3%。代价主要来自编码器，截至所选层参数 OLIVE-J 36.5M、data2vec 2.0 8.1M、HuBERT Large 139.1M，30 分钟 AMI 上单 CPU 线程实时率 RTF ↓ 为 0.19 到 0.56，单张 RTX 3090 上约 0.0011 到 0.0026，短输入上逐录音拟合欠稳定。

**适用边界与深读导览：** 结论在暂停级细粒度参考下最稳，轮次级需按时长合并短暂停，对说话人信息敏感的桥接仍不如结合说话人线索的 diarization 模型，码本虽只用英语拟合却能转到普通话会议，但其他语种尚未验证。论文提供音频试听页，可对照合成质心与检测曲线听辨元音、浊辅音与非语音的区分，评测均为客观帧级与段级指标，未做人工主观听测。想深究可看下文方法章的白化、软分配、语音概率与隐马尔可夫公式推演，实验章的粒度对照与噪声曲线，以及附录的编码器层选择、码本消融与计算开销表。

## 🔗 开源与复现资源

- 论文所列链接：<https://karlhajal.github.io/ClusterVAD/> → <https://karlhajal.com/ClusterVAD/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 无监督语音活动检测在跨域泛化与标注粒度上的两难

语音活动检测是转录、日志与语音语言模型等流水线的前置步骤，它把连续波形切分为语音段与非语音段，误报会让识别凭空生词，漏报则直接丢失信息。传统无监督路线依赖能量、过零率、谱形或基音等手工特征加阈值，或在单录音上拟合双高斯取均值大者为语音，干净近场尚可，在远场、噪声或非典型发音下迅速失效。统计模型用语音与噪声分布做似然比检验，仍需较强先验假设。

有监督检测器在标注帧上训练分类器，从深度置信网络、循环网络到卷积结构，再到日志用的多说话人分割网络如 pyannote 3.0、Silero 与 MarbleNet，域内数据充足时显著优于无监督，但继承训练语料的领域与标注惯例，跨域失配时可靠性下降。知识驱动的无监督方法则无法有效利用数据量增长。论文假设 wav2vec 2.0、HuBERT、WavLM 与 data2vec 2.0 等语音基础模型在数百至数千小时异构无转录语音上自监督学习时，必须隐式学会区分语音与非语音，这种区分应以易解码形式留在冻结表征中。

标注粒度进一步加剧矛盾。同一说话人轮内的静音称为暂停，说话人之间的静音称为间隙，暂停级参考保留 0.2 s 以上全部非语音，多来自强制对齐，轮次级参考桥接轮内多数暂停只保留间隙，多来自人工标注。AMI 上人工词几乎完全覆盖 0.2 s 至 2 s 强制对齐暂停的 90%，找准暂停反而在轮次级被记错。有监督模型学到训练惯例，跨域仍按粗粒度输出，无监督按特征分辨率切分，需靠时长合并才能适配不同参考。

### ClusterVAD 以冻结表征加一次码本实现免阈值检测

#### 与最近基线的实质增量

与最接近的 INA SSL-VAD 相比，改动集中在三处。两者同用冻结语音基础模型特征，INA 在标注数据上训练分类器，ClusterVAD 则完全不训练检测器，仅用 1 000 句 LJSpeech 共 1.8 h 单说话人干净朗读英语无转录拟合一组码本。保留的是冻结编码器中间层每 20 ms 一帧的表征，替换的是监督分类器与全局阈值，改用 K 均值软分配边缘化得帧级语音概率，再用逐录音拟合的两状态隐马尔可夫模型免阈值决策。选用 OLIVE-J 第 4 层、data2vec 2.0 第 0 层与 HuBERT Large 第 10 层，码本维度与聚类数等超参数全局固定。

拟合只运行一次，推理可对任意目标音频重复运行。拟合把辅助语音经同层编码器转为码本数据，依次估计主成分分析白化的均值与投影矩阵、K 均值质心，以及由声响度一维二均值分组得到的语音与非语音二值标签。推理把目标音频经同层编码、白化、余弦软分配与语音簇边缘化得到语音概率曲线，再经调阈值或逐录音 Baum-Welch 决策成段。编码器全程冻结，声响度在推理时不再计算，长录音按重叠窗 Hann 加权平均。

#### 一秒样本的端到端张量流

教学例子：取 1 秒目标音频按 20 ms 帧率推算。冻结编码器中间层输出 50 帧向量，Base 模型每帧 768 维、Large 模型每帧 1 024 维。减去码本均值并投影到保留的 128 个主成分且方差归一后变为 50 乘 128。与 100 个质心算余弦相似并除以温度 0.1 后做 Softmax，得到每帧 100 维簇后验。对标记为语音的簇求和，得到 50 点语音概率曲线，暂停处下陷。原文未披露采样率与滤波器细节，此处仅按帧率推算形状，未补造缺失维度。

实际推理按 5 s 窗、2.5 s 跳切分长录音，重叠部分帧级概率用 Hann 权重平均，再送入决策。编码器只需前向至选中层，例如 data2vec 2.0 仅用卷积特征编码器，OLIVE-J 用到第 4 层，HuBERT Large 用到第 10 层，后续层不再计算，这直接决定了参数量与实时率的上限，细节在复现规格与开销表中交代。

### 白化去各向异性与声响度标记的百类码本拟合

#### 主成分白化与余弦软分配

拟合第一步要消除语音基础模型层的各向异性。记原始帧为 \(x_t\)，维度为 \(D\)，码本数据均值为 \(\mu\)，协方差前 \(d\) 个特征向量与特征值为 \(V\) 与 \(\Lambda\)，目标是得到白化帧，维度取 \(d\) 为 128。少数大幅值维度会主导距离比较，必须先中心化投影并方差归一，拟合仅用辅助无转录数据。

\[\tilde{\mathbf{x}}_{t}=\boldsymbol{\Lambda}^{-1/2}\,\mathbf{V}^{\top}(\mathbf{x}_{t}-\boldsymbol{\mu}),\]

白化的物理直觉是让各维度等权。Large 模型少数坐标占据平方范数很大份额，直接算余弦会被这些维度绑架，中心化后投影到主成分再除以标准差，相当于把椭球拉成球面。\(d\) 过小会丢语音信息，过大则留噪声，论文取 128 时保留 OLIVE-J 约 85.9% 方差。输出直接驱动 K 均值距离计算，消融显示无白化时开发集误差从 8.3% 升至 11.8%，是不可省略的一步。

第二步在白化空间建 K 均值码本。记质心为 \(c_k\)，总数 \(K\) 取 100，余弦相似记为余弦函数，温度 \(T\) 取 0.1，目标是给出任意帧属于各簇的后验。该后验既用于拟合时加权平均声响度，也用于推理时边缘化成语音概率，是连接两阶段的枢纽。

\[p(k\,|\,\mathbf{x}_{t})=\frac{\exp\big(\cos(\tilde{\mathbf{x}}_{t},\mathbf{c}_{k})/T\big)}{\sum_{j=1}^{K}\exp\big(\cos(\tilde{\mathbf{x}}_{t},\mathbf{c}_{j})/T\big)},\]

余弦加 Softmax 的统计直觉是在球面上按方向投票。\(T\) 越小分配越硬，越大越平均，0.05 至 0.2 间误差稳定，0.5 时明显变差。欧氏距离在相近温度下表现接近，但余弦对白化后的尺度更稳。\(K\) 在 50 至 200 间稳定，取 2 则崩溃，说明需要足够细的音素与噪声子类的划分粒度，后验的软硬直接决定后续概率曲线的锐度。

#### 声响度包络的簇标记

第三步给每个簇贴语音或非语音标签。记辅助音频声响度包络为 \(s_t\)，取值 0 至 1，由 20 个 Gammatone 带在 50 至 7 500 Hz 经 5 Hz 阻尼振子驱动并取最强 10 带求和得到，目标是算出簇级平均声响度，分母为簇后验总量以抑制大簇偏置。

\[\bar{s}_{k}=\frac{\sum_{t\in\mathcal{D}}p(k\,|\,\mathbf{x}_{t})\,s_{t}}{\sum_{t\in\mathcal{D}}p(k\,|\,\mathbf{x}_{t})}.\]

声响度的声学直觉是音节显著度。元音与浊辅音处高，非语音处低，加权平均比单帧阈值稳健。再对 \(K\) 个均值做 1 维 2 均值，以最小与最大为初值，每簇计一次，低组标非语音，高组标语音。声响度仅在辅助数据计算，推理不再需要。对照能量、特征范数等 4 种标记信号，声响度在三编码器上均为最低或并列最低，且不依赖另一检测器。

### 帧级语音概率与逐录音自适应的两状态隐马尔可夫决策

推理时先把软分配边缘化成语音概率。记簇标签为 \(w_k\)，非语音为 1，语音为 0，簇后验为 \(p(k|x_t)\)，目标是对标记为语音的簇求和得到语音概率，输出 0 至 1 曲线，在暂停与间隙处下陷，直接驱动后续两种决策。

\[P(\mathrm{sp}\,|\,\mathbf{x}_{t})=\sum_{k=1}^{K}(1-w_{k})\,p(k\,|\,\mathbf{x}_{t}),\]

边缘化的统计直觉是软投票。簇纯度高时概率趋近 0 或 1，混杂时居中，比硬指派容错。码本过粗或温度过高会把曲线拉平，过低则抖动。概率本身与阈值无关，可先用接收者操作特性曲线评估区分度，再经阈值或隐马尔可夫模型转成段，梯度不更新任何编码器参数，全程为冻结推理加码本查表。

免阈值分支把概率取对数几率记为 \(z_t\)，设两状态非语音与语音，每状态高斯发射各有一均值与方差，加 2 乘 2 转移矩阵。以 \(z\) 分布 10% 与 90% 分位初始化两均值、1/4 方差、等先验与 0.95 自转移，每录音 Baum-Welch 迭代 10 轮，自转移起 hangover 平滑作用。评估前把 \(z_t\) 裁剪至两均值之间保证决策随分数单调，再 Viterbi 解码成段。短语音可用于拟合的音频少，可靠性下降。

调阈值分支把概率与阈值比较，阈值在 0.02 至 0.98 以 0.02 步长搜索，最小语音与非语音时长在 0、0.1 与 0.2 s 中联合选择，以最小化开发集检测错误率为准。为适配桥接暂停的轮次级参考，所有系统再加时长合并，把短于阈值的非语音重标为语音，合并时长在 0 至 5 s 共 11 个取值中每参考单独选择。免阈值分支仅调这一项，基线离散档也纳入同等搜索，保证公平。

### 暂停级多数领先而日志两项由有监督保持的检测误差

#### 评测协议与基准总览

评测覆盖会议近场远场、普通话会议、访谈、构音障碍、多域日志与两种加噪，共 9 组语料 12 个评分点。检测错误率定义为误报加漏报时长除以参考语音时长，越低越好，辅以与阈值无关的接收者操作特性曲线下面积越高越好，以及起止容差 200 ms 的事件 F1 值。所有系统每基准每参考单独调决策，报告 95% 分位自助区间按测试文件 1 000 次重采样，有监督在部分日志语料上属域内，这是解读最优归属的前提。

下段总览各基准的语种、领域、噪声、标注来源与调参划分，文件数从 16 至 14,148，时长从 0.6 至 43.5 h。AMI 与 AliMeeting 同时提供暂停级与轮次级两种参考，加噪两组分别覆盖 20 至 0 dB 与 20 至负 5 dB，Torgo 为留一说话人，DIHARD III 为两折，这些划分决定了阈值与合并时长能否针对参考单独优化。

| Dataset | Language | Domain | Noise (SNR) | Annotations | Tuning | Test files | Hours |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AMI headset mix | English | meetings, close-talk | – | pause-level (forced alignment), turn-level (manual) | development set | 16 | 9.1 |
| AMI far-field | English | meetings, far-field | – | pause-level (forced alignment), turn-level (manual) | development set | 16 | 9.1 |
| AliMeeting | Mandarin | meetings, far-field | – | pause-level (forced alignment), turn-level (manual) | development set | 20 | 10.8 |
| Buckeye | English | interviews | – | pause-level (hand-corrected alignment) | development set | 68 | 10.6 |
| Torgo | English | dysarthric speech | – | pause-level (manual alignment) | leave-one-speaker-out | 662 | 0.6 |
| DIHARD III | English, Chinese | 11 domains | – | diarization labels | two-fold | 259 | 33.0 |
| VoxConverse | English | web video | – | diarization labels | development set | 232 | 43.5 |
| AMI + MUSAN | English | meetings, close-talk | 20 to 0 dB | pause-level (forced alignment) | development set | 16 × 4 | 36.2 |
| LibriVAD | English | read speech | 20 to −5 dB | pause-level (forced alignment) | validation set | 14,148 | 30.2 |

表内列出暂停级多来自强制对齐或人工校对对齐，轮次级多来自人工标注或日志标签，Torgo 虽仅 0.6 h 却有 662 个短句文件，DIHARD III 横跨 11 个领域 33.0 h，VoxConverse 为网络视频 43.5 h。加噪组把同一批 AMI 近场混合分别加至多档信噪比，LibriVAD 混合 9 种噪声。这种异构性正是检验一次拟合码本能否跨域泛化的基础，时长合并参数也必须按参考分别调才公平。

#### 暂停级参考与轮次级参考的差异示例

为理解两种参考的差异，先看 8 s 双说话人 AMI 片段的对照。上排为 ClusterVAD 语音概率曲线，中排为暂停级参考，下排为轮次级参考，底排为说话人轮次，横轴为时间 0 至 8 s，重点观察概率下陷与粉色非语音区间、蓝色语音波形的对应关系，以及轮次级如何桥接轮内暂停而保留说话人间隙。

[![原论文 Figure 4：Pause-level and turn-level references for an AMI excerpt with two speakers.](https://arxiv.org/html/2611.33059v1/references_column.png)](https://arxiv.org/html/2611.33059v1/references_column.png)

*论文图 3：暂停级与轮次级参考对照：同一段双说话人会议中语音概率在暂停与间隙处的下陷差异（原论文 Figure 4）。*

对照显示语音概率在每个暂停级非语音区间均明显下陷，与中排粉色区间对齐，而轮次级参考把同一说话人轮内的多数暂停标为语音，只保留说话人之间的间隙，图中红色虚线框标出被桥接的暂停。AMI 统计上轮次级语音占比从 65.9% 升至 80.4%，每分钟语音段从 22.2 降至 5.6，中位段长从 1.24 s 增至 3.64 s。这种标注差异解释了细粒度检测器在暂停级占优而在轮次级需靠时长合并补偿的原因，也是后文按参考分别调参的依据。

#### 主结果：暂停级多数领先与日志两项的归属

下表为主结果，比较 4 个有监督、4 个无监督与 ClusterVAD 三编码器乘两种决策的检测错误率，越低越好并附 95% 区间。阅读时需逐列核对同列全部可比行，区分暂停级与轮次级，并注意最优与次优的原始标记在完整表中按列判定。基准覆盖近场远场、普通话、访谈、构音障碍与噪声，调参均按基准与参考单独进行，公平性前提在前文已交代。

|  | AMI pause-level | AMI turn-level | AMI far-field pause-level | AMI far-field turn-level | AliMeeting pause-level | AliMeeting turn-level | Buckeye | Torgo | DIHARD III | Vox- Converse | AMI + MUSAN | LibriVAD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| All speech (trivial) | 51.8 | 24.3 | 51.8 | 24.3 | 20.5 | 8.7 | 37.1 | 140.6 | 26.4 | 11.7 | 51.8 | 18.9 |
| Supervised |  |  |  |  |  |  |  |  |  |  |  |  |
| pyannote 3.0 | 17.8 ± 2.6 | 6.2 ± 1.2 | 20.6 ± 2.9 | 7.4 ± 1.5 | 11.6 ± 2.3 | 3.8 ± 0.8 | 15.4 ± 1.5 | 24.4 ± 2.2 | 7.9 ± 0.6 | 5.0 ± 0.4 | 19.5 ± 1.2 | 10.4 ± 0.2 |
| Silero | 10.8 ± 1.1 | 7.9 ± 1.9 | 15.3 ± 2.5 | 11.0 ± 2.8 | 17.0 ± 5.8 | 10.0 ± 4.4 | 11.2 ± 1.5 | 17.3 ± 1.8 | 11.7 ± 1.3 | 5.7 ± 0.5 | 16.6 ± 1.7 | 10.9 ± 0.2 |
| MarbleNet | 14.0 ± 1.1 | 8.9 ± 2.0 | 21.7 ± 2.9 | 12.7 ± 2.7 | 20.8 ± 5.0 | 9.3 ± 2.9 | 13.6 ± 1.5 | 18.1 ± 1.7 | 18.7 ± 1.7 | 5.6 ± 0.5 | 20.6 ± 1.8 | 12.5 ± 0.2 |
| INA SSL-VAD | 10.6 ± 1.0 | 8.5 ± 1.9 | 16.7 ± 1.8 | 10.9 ± 2.1 | 13.6 ± 1.9 | 5.4 ± 1.1 | 9.2 ± 1.4 | 26.9 ± 2.5 | 13.0 ± 1.3 | 5.6 ± 0.5 | 18.3 ± 1.8 | 13.6 ± 0.3 |
| Unsupervised |  |  |  |  |  |  |  |  |  |  |  |  |
| rVAD | 16.8 ± 1.5 | 11.0 ± 1.7 | 19.7 ± 2.6 | 14.4 ± 2.9 | 14.5 ± 2.5 | 9.0 ± 2.7 | 17.4 ± 2.2 | 23.8 ± 1.9 | 13.9 ± 0.9 | 8.1 ± 0.8 | 24.5 ± 1.6 | 12.0 ± 0.2 |
| de Jong & Wempe | 22.0 ± 4.4 | 16.3 ± 3.1 | 40.4 ± 12.6 | 23.3 ± 6.0 | 15.6 ± 3.7 | 6.8 ± 1.9 | 11.7 ± 2.3 | 35.4 ± 4.5 | 16.3 ± 1.7 | 9.9 ± 1.0 | 29.9 ± 2.4 | 16.0 ± 0.2 |
| WebRTC | 16.9 ± 2.4 | 11.9 ± 2.7 | 19.6 ± 2.3 | 14.5 ± 3.0 | 14.1 ± 2.9 | 6.5 ± 1.7 | 14.7 ± 2.2 | 24.2 ± 2.7 | 17.4 ± 1.5 | 9.3 ± 0.9 | 31.0 ± 2.5 | 13.7 ± 0.1 |
| Energy | 15.9 ± 1.9 | 12.1 ± 2.6 | 24.8 ± 3.8 | 16.3 ± 2.7 | 11.5 ± 2.8 | 6.1 ± 2.3 | 12.0 ± 2.3 | 30.3 ± 3.4 | 13.6 ± 1.3 | 9.6 ± 0.9 | 27.9 ± 2.7 | 14.2 ± 0.1 |
| ClusterVAD, tuned threshold |  |  |  |  |  |  |  |  |  |  |  |  |
| OLIVE-J | 8.1 ± 0.8 | 7.5 ± 1.8 | 11.0 ± 1.7 | 9.6 ± 2.3 | 10.8 ± 2.4 | 5.9 ± 1.9 | 7.4 ± 1.3 | 14.2 ± 1.4 | 8.6 ± 0.8 | 5.3 ± 0.5 | 15.1 ± 1.7 | 8.8 ± 0.3 |
| data2vec 2.0 | 8.8 ± 1.0 | 9.0 ± 2.2 | 12.4 ± 1.6 | 10.7 ± 2.4 | 9.9 ± 1.7 | 5.5 ± 1.4 | 8.0 ± 1.4 | 17.4 ± 1.6 | 9.7 ± 1.0 | 6.2 ± 0.6 | 18.1 ± 1.8 | 8.3 ± 0.1 |
| HuBERT-L | 8.8 ± 0.9 | 9.3 ± 2.0 | 11.5 ± 1.4 | 11.9 ± 2.5 | 9.6 ± 1.6 | 4.9 ± 1.0 | 7.6 ± 1.2 | 15.1 ± 1.9 | 8.2 ± 0.7 | 5.5 ± 0.5 | 15.4 ± 1.5 | 6.5 ± 0.1 |
| ClusterVAD, threshold-free decision |  |  |  |  |  |  |  |  |  |  |  |  |
| OLIVE-J | 8.3 ± 0.9 | 7.2 ± 1.8 | 11.2 ± 1.7 | 9.8 ± 2.2 | 11.6 ± 3.2 | 6.7 ± 2.6 | 8.3 ± 1.4 | 13.8 ± 1.4 | 9.0 ± 1.0 | 5.1 ± 0.5 | 15.3 ± 1.7 | 7.8 ± 0.2 |
| data2vec 2.0 | 8.7 ± 1.0 | 8.5 ± 2.2 | 12.9 ± 1.6 | 11.4 ± 2.5 | 11.7 ± 2.8 | 6.6 ± 2.2 | 7.6 ± 1.6 | 22.3 ± 1.8 | 10.2 ± 1.0 | 6.2 ± 0.6 | 17.7 ± 1.8 | 10.5 ± 0.2 |
| HuBERT-L | 9.5 ± 1.2 | 8.4 ± 2.3 | 10.9 ± 1.3 | 9.5 ± 2.1 | 9.6 ± 1.5 | 4.7 ± 1.0 | 8.7 ± 1.5 | 15.7 ± 2.5 | 10.5 ± 2.0 | 5.3 ± 0.5 | 15.8 ± 1.7 | 7.3 ± 0.1 |

完整十二列中 ClusterVAD 最低占七项，涵盖近场远场、普通话、访谈、构音障碍与噪声，例如 AMI 暂停级 8.1%、AMI 远场暂停级 10.9%、AliMeeting 暂停级 9.6%、Buckeye 7.4%、Torgo 免阈值 13.8%、AMI 加噪 15.1% 与 LibriVAD 6.5%。其余五列由 pyannote 3.0 领先，包括三项轮次级与两项日志基准，其中 DIHARD III 上 pyannote 3.0 以 7.9±0.6 优于 ClusterVAD 最优的 8.2 ± 0.7，VoxConverse 上以 5.0±0.4 优于最优的 5.1 ± 0.5。所有无监督基线均被超越，HuBERT Large 免阈值在全部基准上优于同用冻结特征的有监督 INA SSL-VAD。代价是轮次级仍落后，说明仅靠时长桥接不如说话人信息。

为分离标注粒度的影响，再看 Buckeye 上随合并阈值变化的曲线。横轴为短于阈值的暂停在参考中被标为语音的时长阈值，0.2 s 即暂停级参考，纵轴为检测错误率，所有系统按每种参考重调，阴影为 95% 区间，重点比较 ClusterVAD 与有监督随阈值增大时的斜率差异与收敛位置。

[![原论文 Figure 5：DetER (%) on Buckeye when pauses shorter than \\tau are labelled as speech in the reference…](https://arxiv.org/html/2611.33059v1/results_references_column.svg)](https://arxiv.org/html/2611.33059v1/results_references_column.svg)

*论文图 4：Buckeye 上随暂停合并阈值增大的检测错误率变化与 95% 区间（原论文 Figure 5）。*

曲线表明参考保留短暂停时 ClusterVAD 领先全部基线，随着阈值增大，有监督误差下降而神经系统趋于收敛，ClusterVAD 变化最平，rVAD 始终最高。原因在于 ClusterVAD 概率分辨率细，能切出单个暂停，再靠时长合并适配粗参考，而有监督直接按粗粒度输出，在细参考上被罚。这解释了暂停级多数领先、轮次级次优的格局，也说明调参必须按参考分别进行，否则跨粒度比较不公平。

再看帧级分数本身的区分度与段级边界精度。上排为 4 组接收者操作特性曲线及面积，覆盖暂停级 AMI、轮次级 AMI、构音障碍与 LibriVAD，下排为对应事件 F1 柱状图，均附 95% 区间。横轴为假正率，纵轴为真正率，重点看低假正区有监督占优还是中等假正区 ClusterVAD 反超，以及柱状图在轮次级 AMI 上的例外。

[![原论文 Figure 6：Top: ROC curves and AUC where the systems differ. Bottom: Event-F1 with 95% confidence intervals.](https://arxiv.org/html/2611.33059v1/results_roc_eventf1.svg)](https://arxiv.org/html/2611.33059v1/results_roc_eventf1.svg)

*论文图 5：帧级接收者操作特性曲线下面积与段级事件 F1 值的系统对比（原论文 Figure 6）。*

暂停级 AMI 与构音障碍 Torgo 上 ClusterVAD 面积接近最优有监督，有监督在低假正率处真正率更高，ClusterVAD 在中等假正率处更高，这种工作点差异导致检测错误率分化。轮次级 AMI 上 ClusterVAD 分数在轮内暂停处下陷，面积落后于 pyannote，但时长合并在决策阶段补回，使错误率仍接近。LibriVAD 上 HuBERT Large 面积最高。事件 F1 除轮次级 AMI 外均为 ClusterVAD 最高，表明其段边界最贴近参考。

### 表征、码本与标注信号的消融及噪声下声响度失效对照

#### 冻结表征不可替代与码本稳健性

下段对照同一管线换用 39 维梅尔倒谱系数与 3 种冻结表征的开发集误差，调阈值与免阈值 2 种决策并列。需注意梅尔倒谱在 AMI 暂停级达 29.6% 而冻结表征仅 7.6% 至 8.2%，差距悬殊，是判断表征贡献的关键对照，同时留意 Buckeye 与 VoxConverse 上差距明显收窄。

|  | OLIVE-J thr. | OLIVE-J free | data2vec 2.0 thr. | data2vec 2.0 free | HuBERT-L thr. | HuBERT-L free | MFCC thr. | MFCC free |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMI, pause-level | 7.6 | 7.7 | 7.9 | 7.8 | 8.2 | 8.6 | 29.6 | 13.9 |
| AMI, turn-level | 7.6 | 7.4 | 8.4 | 8.1 | 9.2 | 8.3 | 17.9 | 10.2 |
| AMI far-field | 9.7 | 9.8 | 11.1 | 11.4 | 10.4 | 9.9 | 32.1 | 18.6 |
| AliMeeting | 10.9 | 11.8 | 10.6 | 12.1 | 10.0 | 9.9 | 11.5 | 19.7 |
| Buckeye | 7.4 | 8.0 | 6.9 | 7.1 | 7.6 | 8.3 | 9.4 | 7.9 |
| VoxConverse | 3.2 | 3.2 | 3.7 | 3.6 | 3.3 | 3.3 | 5.9 | 6.1 |

表内数据表明冻结表征全面优于手工特征，但幅度因数据集而异。AMI 暂停级上 OLIVE-J 调阈值 7.6% 对梅尔倒谱 29.6%，远场 9.7% 对 32.1%，差距超过 20 个百分点。Buckeye 上 7.4% 对 9.4% 仅领先约 2.0 个百分点，VoxConverse 上 3.2% 对 5.9% 仅领先约 2.7 个百分点，并非 10 个百分点以上。AliMeeting 上梅尔倒谱调阈值 11.5% 与冻结表征 10.0% 至 10.9% 接近。决策上冻结表征两种决策接近，梅尔倒谱并非免阈值一致更好，AliMeeting 调阈值 11.5% 优于免阈值 19.7%，VoxConverse 调阈值 5.9% 优于免阈值 6.1%。

码本消融表明误差对多数选择不敏感。码本数据用 LJSpeech、LibriSpeech 或三者混合相近，用 AMI 训练集反略差，100 句至 10,000 句差异小，簇数 50 至 200 稳定而取 2 时崩溃，温度 0.05 至 0.2 稳定而 0.5 变差，K 均值与球面 K 均值等价，多子集多种子标准差仅 0.4%。白化维度 64 与 128 接近而无白化明显变差，这些共同说明一次拟合的配置无需精调。

#### 声响度仅适合作标记与噪声鲁棒性

下段把声响度与帧能量直接作语音分数，与 ClusterVAD 两种编码器对照，在 AMI 加 MUSAN 最干净与 0 dB，以及 LibriVAD 20 dB 与负 5 dB 共 4 个条件下比较检测错误率越低越好与面积越高越好，以检验标记信号本身能否当检测器。该对照直接回答声响度弱而噪声敏感时为何仍可用于标记簇，而不适合直接检测。

|  | DetER (%, lower is better) AMI + MUSAN clean | DetER (%, lower is better) AMI + MUSAN 0 dB | DetER (%, lower is better) LibriVAD 20 dB | DetER (%, lower is better) LibriVAD −5 dB | AUC (%, higher is better) AMI + MUSAN clean | AUC (%, higher is better) AMI + MUSAN 0 dB | AUC (%, higher is better) LibriVAD 20 dB | AUC (%, higher is better) LibriVAD −5 dB |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sonority | 20.8 ± 2.7 | 37.5 ± 5.7 | 7.4 ± 0.2 | 18.4 ± 0.5 | 91.8 ± 1.7 | 74.7 ± 2.8 | 96.7 ± 0.1 | 72.6 ± 0.7 |
| frame energy | 15.8 ± 1.7 | 39.7 ± 6.1 | 8.2 ± 0.2 | 19.3 ± 0.4 | 90.6 ± 2.0 | 69.2 ± 2.1 | 93.3 ± 0.1 | 63.2 ± 0.4 |
| ClusterVAD OLIVE-J | 8.1 ± 0.8 | 25.4 ± 3.0 | 3.9 ± 0.1 | 22.1 ± 1.3 | 97.1 ± 0.5 | 90.6 ± 1.8 | 98.0 ± 0.1 | 86.6 ± 0.8 |
| ClusterVAD HuBERT-L | 9.2 ± 1.0 | 24.6 ± 2.9 | 4.2 ± 0.1 | 10.3 ± 0.3 | 97.1 ± 0.4 | 91.1 ± 1.6 | 98.4 ± 0.1 | 89.6 ± 0.7 |

表内数据表明声响度直接检测在干净时已明显落后，AMI 干净 20.8% 对 8.1%，0 dB 时 37.5% 对 25.4%，面积从 91.8% 跌至 74.7% 而 ClusterVAD 仍保持 90.6% 以上。LibriVAD 负 5 dB 时 HuBERT Large 仍达 10.3% 与 89.6%，而 OLIVE-J 达 22.1%，说明编码器在极低信噪比下分化，LibriVAD 属有声书域内对冻结模型有利。结论是声响度弱而噪声敏感，仅适合在干净辅助数据上标记簇，不适合直接检测。

最后看全信噪比扫描。每系统用跨全部信噪比调出的单一决策绘制曲线，左为 AMI 加 MUSAN 从干净降至 0 dB，右为 LibriVAD 从 20 dB 降至负 5 dB，横轴为信噪比，纵轴为检测错误率，阴影为 95% 区间。AMI 加 MUSAN 用调阈值绘制，LibriVAD 用免阈值绘制，重点看最低包络归属与 0 dB 处的交叉。

[![原论文 Figure 7：DetER (%) as a function of SNR, with 95% confidence intervals.](https://arxiv.org/html/2611.33059v1/results_noise.svg)](https://arxiv.org/html/2611.33059v1/results_noise.svg)

*论文图 6：两种加噪基准上单一决策随信噪比下降的检测错误率曲线（原论文 Figure 7）。*

曲线表明 LibriVAD 全程由 ClusterVAD 最低，AMI 加 MUSAN 除 0 dB 外亦最低，0 dB 处 pyannote 略低但落在置信区间内。声响度与能量基线随噪声快速上扬，rVAD 与 WebRTC 在低信噪比下更高。单一决策跨信噪比仍稳健，表明语音概率继承了冻结表征的抗噪性，而非声响度本身的鲁棒性。代价是不同编码器在极端噪声下排序互换，选型需按目标信噪比验证。

### 计算开销、短语音与单语码本决定的适用边界与复现清单

下段列出编码器截至选中层的参数量、单线程 CPU 与单卡 GPU 实时率及峰值内存，均在 30 分钟 AMI 音频上实测。实时率越低越快，参数量与内存决定能否部署，这是无监督精度之外的硬代价，需与紧凑检测器权衡。该实测覆盖 OLIVE-J 到第 4 层、data2vec 2.0 卷积编码器与 HuBERT Large 到第 10 层 3 种配置。

| Encoder (layers) | Params (M) | RTF CPU | RTF GPU | Memory (GB) RAM | Memory (GB) GPU |
| --- | --- | --- | --- | --- | --- |
| OLIVE-J (0–4) | 36.5 | 0.27 | 0.0015 | 4.2 | 1.7 |
| data2vec 2.0 (0) | 8.1 | 0.19 | 0.0011 | 3.5 | 1.6 |
| HuBERT-L (0–10) | 139.1 | 0.56 | 0.0026 | 4.4 | 2.3 |

表内参数表明 OLIVE-J 用到第 4 层 36.5M，CPU 实时率 0.27，GPU 0.0015，内存 4.2 与 1.7 GB，data2vec 2.0 仅用卷积编码器 8.1M 最轻，HuBERT Large 用到第 10 层 139.1M，CPU 0.56 最重。即使只算到选中层，仍远超紧凑检测器，轻量蒸馏编码器构建码本留作未来工作。短语音上逐录音拟合数据少，Torgo 与 LibriVAD 短句上免阈值对部分编码器落后于调阈值，长录音则两者相当甚至免阈值更优。

码本仅用英语构建，评测仅覆盖英语与普通话，转至普通话无需改动但其他语种未验证。轮次级参考桥接同说话人暂停，日志系统靠说话人信息区分轮内暂停与换人，ClusterVAD 仅按时长合并，故轮次级落后，集成说话人信息是明确下一步。伦理上仅用已有语料无新采集，语音活动检测可助益识别与合成，也存在监控与克隆滥用风险，需配合水印与伪造检测。

复现第一步是用 1 000 句 LJSpeech 无转录拟合白化、100 类码本与声响度标记，层号按 AMI 开发集暂停级选择后全局冻结，再按各基准开发集调阈值与合并时长。原文称代码将在发表时发布，演示页在论文中提及，本次仅确认第三方链接可达，不代表作者已开源权重与系统可运行。工程上若需细粒度暂停或跨域免标注，值得尝试，若为轮次级识别前端或短句低功耗场景，需补说话人桥接与目标信噪比验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33059v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在7个暂停级基准上取得最低DetER，如AMI近场暂停级8.1%低于INA SSL-VAD的10.6%与Silero的10.8%，并报告1000次重采样95%自助置信区间。

- 核心优势：冻结编码器经PCA白化去各向异性、K=100余弦软分配与音节突显度类级贴标签及逐录音HMM免阈值判决，推理时不再计算声学度量。

- 核心优势：聚类后概率在AMI加噪0dB的DetER为25.4%显著低于直接突显度判决的37.5%，LibriVAD下保持90%以上AUC，验证聚类平均抑制标签噪声。

- 主要短板：ROC与Event-F1未给出具体可核对数值仅报告相对高低，且data2vec免阈值在Torgo上22.3%明显差于调优阈值17.4%显示短输入拟合不稳。

- 主要短板：正文图号与引用存在错位，影响图表对照与核对便利性，清晰度层面构成可核验的组织瑕疵。

- 主要短板：计算开销继承自语音基础模型编码器，虽可截断到所选层但仍重于紧凑检测器，轻量蒸馏表示留待未来工作。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
