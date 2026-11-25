---
title: "Spoof Localization as Boundary Regression"
date: 2026-11-24
draft: false
tags: [伪造片段定位, 语音伪造检测, 端到端学习, 自监督学习, 多任务学习]
categories: [论文速递]
description: "针对帧级分类受 20 ms 分辨率束缚而无法输出帧内边界的问题，论文提出单阶段连续边界回归并以精确区间训练，在 PartialSpoof 上以最大融合取得最低点式与区间式等错误率且跨库泛化更好，代价是依赖精确标注并需 Soft-NMS 后处理且整句全伪造存在任务错位。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29085"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把伪造定位做成连续边界回归"
paper_digest_original_title: "Spoof Localization as Boundary Regression"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29085v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29085v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29085v1.pdf"
paper_digest_primary_task: "伪造片段定位"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.forgery-localization","label":"伪造片段定位"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.multitask","label":"多任务学习"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对帧级分类受 20 ms 分辨率束缚而无法输出帧内边界的问题，论文提出单阶段连续边界回归并以精确区间训练，在 PartialSpoof 上以最大融合取得最低点式与区间式等错误率且跨库泛化更好，代价是依赖精确标注并需 Soft-NMS 后处理且整句全伪造存在任务错位。"
paper_digest_reader_sections: [{"heading":"部分伪造音频为何难以用固定帧分类精确定位","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"单阶段边界回归一次输出起止时刻与可信分数","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"多粒度金字塔与概率期望边界如何协同工作","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"中心采样加权与多任务损失如何避免量化误差污染","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"三组评测揭示的精度收益、跨域泛化与标签错位","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"连续时间假设的适用边界与复现选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Stuttgart, Germany"],"name":"Yixuan Xiao"},{"affiliations":["National Institute of Informatics, Japan"],"name":"Xin Wang"},{"affiliations":["German Research Center for Artificial Intelligence (DFKI), Germany"],"name":"Yassine El Kheir"},{"affiliations":["German Research Center for Artificial Intelligence (DFKI), Germany"],"name":"Feidi Kallel"},{"affiliations":["German Research Center for Artificial Intelligence (DFKI), Germany"],"name":"Arnab Das"},{"affiliations":["German Research Center for Artificial Intelligence (DFKI), Germany"],"name":"Tim Polzehl"},{"affiliations":["Technical University of Berlin, Germany"],"name":"Sebastian Möller"},{"affiliations":["University of Stuttgart, Germany"],"name":"Ngoc Thang Vu"}]
paper_digest_abstract_sha256: "9a79add266f688f3c197eceead2de832bab5497c921816ff12b8a73da04db9f3"
paper_digest_sidecars: {"citation.bib":{"sha256":"f3ca5116ad2e7586990fb922db3daad6619d3fbba8485f16fbad5750c69a9194","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29085/citation.bib"},"citation.json":{"sha256":"f45b4b1bbf504ee987255468010b24dce182c02047267e0389fcbcec176e67ad","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29085/citation.json"},"citation.ris":{"sha256":"1076033e71537bb5d911917ec437091ab9f4191b16f5ae058ab1b88e48e2feed","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29085/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"65b5b4c61d041a4bda3c071fc7cab1500d9f248926879a1e837a24c667811d2e","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29085/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "fb019d4fd0df46832cfc2f521bc84827aa39bf77714d05bd06a7c510b29866d9"
paper_digest_api_reader_plan_sha256: "090a86b5f2712638a104c89cb44ecdd5d57b9f9805eccd535dea092f7a79b316"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "708f725e8fe279479a9ab759328e619925089ee93a7e3f2f5ff26150b44cc00d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "084956099ce1145e9e7d47b6f7cd00c5285bac4e291ddf0c3a5e732f491f3674"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e79de635b030a35effbb96366aa28c977c709fd306b711b0972121af893f9214"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "d1cc6b714504c63b95038cebcf51d605eac003ebee3742f4c8a60097c2a032d3"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把伪造定位做成连续边界回归

> 英文题目：*[Spoof Localization as Boundary Regression](https://arxiv.org/abs/2611.29085v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [伪造片段定位](/audio-paper-digest-blog/papers/?concept=task.forgery-localization)；[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-paper-digest-blog/papers/?concept=task.speech-spoofing)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)；[多任务学习](/audio-paper-digest-blog/papers/?concept=method.multitask)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 7.6/10 | 技术严谨 7.4/10 | 实验充分 7.7/10 | 清晰度 7.1/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Yixuan Xiao：University of Stuttgart, Germany
- Xin Wang：National Institute of Informatics, Japan
- Yassine El Kheir：German Research Center for Artificial Intelligence (DFKI), Germany
- Feidi Kallel：German Research Center for Artificial Intelligence (DFKI), Germany
- Arnab Das：German Research Center for Artificial Intelligence (DFKI), Germany
- Tim Polzehl：German Research Center for Artificial Intelligence (DFKI), Germany
- Sebastian Möller：Technical University of Berlin, Germany
- Ngoc Thang Vu：University of Stuttgart, Germany

## 📌 核心摘要

**问题与瓶颈：** 部分伪造音频把少量伪造片段嵌入真实话语，任务是定位这些片段的起止时间。主流对抗措施把音频切成固定步长的帧，例如 wav2vec2 风格前端每 20 ms 输出一帧，再对每一帧做真实或伪造二分类。这种做法把参考标签、模型输出和评测都绑在预设分辨率上，含边界的帧无论伪造占比多少都被打上同一标签，训练引入量化误差，模型无法输出帧内部边界，基于点的等错误率（EER，越低越好 ↓）也随评分分辨率明显漂移。基于区间的等错误率能缓解评测漂移，但论文指出其理论基础尚不充分，也未解决训练与输出精度问题。

**核心思路与方法架构：** 与最接近的已有基线相比，本文保留 300M XLS-R 前端，把逐帧分类改为对连续时间戳的单阶段边界回归，直接学习精确区间。一条话语先被表示为 1024 维帧序列，帧间隔 20 ms，其中 Transformer 块参与微调而卷积特征抽取器冻结。该序列经两层一维卷积投影到 256 通道，再经步长 2 最大池化堆出 6 级特征金字塔，覆盖 20 ms 至 640 ms 不同跨度，每级用 SGP 块融合话语级上下文与局部上下文。每个层级的每个瞬时位置输出一个三元组，包含起始时间、结束时间和该区间的伪造分数，距离用起止分数加邻域偏移的 Softmax 期望得到，再用幅度不超过半步长的残差修正，话语级头经注意力统计池化与多层感知机输出整句含伪造概率并在推理时门控，辅助帧头只用于对照且梯度截断。全部回归与分类损失对照精确区间训练，不再量化参考标签，因此能直击帧内边界不可表示的根因。

**关键实验与核心代价：** 在 PartialSpoof 上，最大融合取得基于点的等错误率 4.92 与基于区间的等错误率 5.34，低于已报告的最强帧级基线 BAM 的基于点的等错误率 5.20，也低于复现的多分辨率基线的基于点的等错误率 15.57 与基于区间的等错误率 16.07。回归分支把起点与终点平均绝对误差控制在 10 ms 内，约 95% 的参考区间在交并比 0.5 条件下被匹配，而帧级对照分支仅匹配 78–80% 且误差超过 13 ms。在 LlamaPartialSpoof 上零样本直接迁移仍困难，基于点的等错误率在 24.47% 至 44.54% 之间，但本文设置在每组都低于已报告基线，原文报告整体低 5.79–12.23%。微调后在全部话语上，CFPRF 的基于点的等错误率从 41.47% 降至 5.96%，本文帧头分支从 33.84% 降至 1.31%，优于 CFPRF。主要代价是六级金字塔加多个卷积头与 Soft-NMS 后处理，话语门控不改变等错误率但可过滤真实话语以减少后处理，最大融合虽精度最高却需同时维护两条输出。

**适用边界与深读导览：** 结论成立的前提是有精确到秒的区间标签与相近的合成分布，跨合成器、跨编辑方式直接部署仍需微调，整段伪造与局部定位存在任务错位。边界误差分析还发现 PartialEdit 已发布标签的终点错位较重，经归一化互相关校验起点 92% 文件匹配而终点仅 37% 文件匹配，修正后训练的等错误率从 7% 以上降至约 1% 或更低。原文未报告实时率或推理时延，也未做人工主观听测。想深究边界解码期望与残差可看第 2.2 节与图 1，想核对区间评估的平稳与各态历经假设可看附录 A，想复现训练与门限设置可看下文细节详述与实验结果。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/XIAOYixuan/boundary_detection/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/DeepFense/partialedit-corrected> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 部分伪造音频为何难以用固定帧分类精确定位

在部分伪造场景中，攻击者并不合成整句，而是把一句真实语音中的几个词替换为伪造语音，语义被改变而大部分波形仍为真实。在法医分析等应用中，仅给出整句真假并不够，需要指出哪一段被篡改。论文把输入定义为整句波形，输出定义为一组连续时间区间与分数 \( (s, e, c) \)，其中 \( s \) 与 \( e \) 以秒为单位，\( c \) 表示该区间为伪造的可信程度。真实语句对应空集合，含多段伪造的语句对应多个区间，任务目标是同时给出位置与可信度。

主流对策沿用帧级分类流程。前端常用 XLS-R 或 WavLM 等自监督模型，把波形变为每 20 ms 一帧的特征序列，后端对每一帧判为真实或伪造。帧数由卷积步长决定，伪造区间 \( [t_s, t_e] \) 的真实起止时刻与该分辨率无关，却在训练时被量化为帧标签。完全落在伪造区内的帧与仅小部分被伪造污染的帧会被赋予相同的伪造标签，尽管二者的伪造程度并不相同，这种量化抹去了边界附近的渐变信息。

这种绑定带来三处具体限制。训练参考存在不可避免的量化误差，模型输出精度被限制在帧内，无法预测帧内部的边界，评测也与分辨率绑定，点式等错误率会随打分分辨率明显变化，常需在多种分辨率下报告而不易直接比较。区间式等错误率虽缓解了评测对齐问题，但其理论基础尚未完全确立，也不能解决前两处训练与预测精度的损失。论文因此把定位重构为直接回归连续边界，训练、预测与评测均不再使用量化标签。

### 单阶段边界回归一次输出起止时刻与可信分数

与最接近的多分辨率帧分类基线相比，新对策保留了 300M XLS-R 前端与卷积投影思路，替换了 3 个核心设计。帧序列被扩展为 20 ms 至 640 ms 的六层特征金字塔，每处位置观察不同时长的上下文。每处位置不再输出单一帧标签，而是回归其周围伪造区间的精确起止时刻并给出区间分数。另增一个话语级门控头，判断整句是否含有伪造区间。信号规格上，前端输出为 1024 维帧序列，投影后为 256 通道，基础分辨率 \( \Delta \) 为 20 ms。

#### 整体架构与信号走向

为跟随 1 秒示例在各模块间的形状与帧率变化，可先浏览整体架构示意，重点看前端到金字塔再到 3 类输出头的分叉，以及帧头梯度截断与话语头汇聚的位置。理解哪条分支产生连续区间、哪条分支仅用于对比，有助于区分主体与辅助监督，避免把帧头的量化标签误认为进入了主体梯度流。同时注意六层跨度如何由细到粗排列，以及共享头如何在不同层复用。

[![原论文 Figure 2：Architecture overview.](https://arxiv.org/html/2611.29085v1/fig2_arch.svg)](https://arxiv.org/html/2611.29085v1/fig2_arch.svg)

*论文图 2：整体架构示意：XLS-R 前端经卷积投影到六层金字塔并分叉至定位头、帧头与话语头（原论文 Figure 2）。*

示意顶部为波形输入与绿色 XLS-R 前端框，下接 2 次一维卷积投影至 256 通道。左侧纵向排列 L1 至 L6 蓝色条带，分别标注 20 ms、40 ms、80 ms、160 ms、320 ms 与 640 ms，每层经 SGP 模块处理。右侧黄色定位框内含瞬时分类、起始、中心、结束与残差头并注明作用于每层输出，虚线帧头仅接 L1 且注明不回传梯度，底部绿色话语头对所有层做注意力统计池化。这种布局把多粒度表示与多任务头解耦，主体始终面向精确区间。

教学例子：取 1 秒输入跟踪张量流。经前端约得到 50 帧 1024 维特征，每 20 ms 一帧。2 次核长为 3 的一维卷积将其映射为 50 帧 256 通道序列。金字塔以步长 2 最大池化逐层减半，L1 约 50 个时刻，L2 约 25 个，L3 约 12 个，L4 约 6 个，L5 约 3 个，L6 约 1 至 2 个，步长 \( q_l = 2^{l-1} \) 帧。每个时刻 \( t \) 在每层各产生一个 \( (s, e, c) \) 候选，原文未披露采样率与具体填充长度，\( \delta \) 仅记为类似短时傅里叶变换左填充的实现常数。

推理时所有候选经 Soft-NMS 合并为 100 个区间。非门控设置保留全部候选，门控设置对被话语头判为真实的语句直接输出空集，阈值取 0.2。帧头可单独输出逐帧分数，最大融合取门控候选与帧头分数的逐帧最大值。原文未披露实时率与显存开销，流式分块与前瞻延迟也未定义，默认按整句离线处理，门控的主要价值在于减少真实语句的后处理量。

### 多粒度金字塔与概率期望边界如何协同工作

金字塔的目的是让每个时刻看到不同跨度的输入，从音素级细节到词级以上连续性。六层跨度覆盖 20 ms 至 640 ms，每层由上一层经步长 2 最大池化得到，步长 \( q_l \) 随层指数增长。每层随后各经一个 SGP 模块建模全局与局部上下文，再送入共享的分类与回归头。这种设计使短区间可由细粒度层精确定位，长区间可由粗粒度层保持连续，避免单一分辨率顾此失彼。

#### 多粒度建模与上下文加权

记某层特征为 \( \mathbf{X} \)，维度为 \( C \times T_l \)，其中 \( C = 256 \)，\( T_l \) 为该层时刻数，\( \bar{\mathbf{x}} \) 为沿时间的均值向量。\( \phi \)、\( \psi \)、\( \mathrm{FC} \)、\( \mathrm{Conv}_w \) 与 \( \mathrm{Conv}_{kw} \) 分别承担全局加权与局部卷积，窗口取 \( w = 1 \) 与 \( k w = 3 \)。下式给出该模块的核心变换，输入先做层归一化，输出后接组归一化与前馈网络并带第二处残差，结构沿用时序动作检测中的 TriDet 设计。

\[\begin{split}F_{\mathrm{SGP}}(\mathbf{X})={}&\phi(\bar{\mathbf{x}})\odot\mathrm{FC}(\mathbf{X})\\ &+\psi(\mathbf{X})\odot\big(\mathrm{Conv}_{w}(\mathbf{X})+\mathrm{Conv}_{kw}(\mathbf{X})\big)+\mathbf{X},\end{split}\]

该式的物理直觉是同时利用整句统计与邻域细节。\( \phi(\bar{\mathbf{x}}) \) 由整句均值算一次并作用于每个时刻，使每个瞬时被话语级上下文加权，适合抑制整句为真实时的虚警。\( \psi \) 与两种窗口的深度卷积刻画每个瞬时的局部连续性，窗口 1 保留自身，窗口 3 引入前后各一时刻。当输入接近平稳段时，局部卷积输出变化小，全局加权主导。当 \( T_l \) 很小如顶层仅 1 至 2 个时刻时，均值与瞬时接近，全局项退化为自加权，仍保留残差 \( \mathbf{X} \) 避免信息丢失。输出特征直接送入瞬时分类、起止、偏置与残差头，驱动后续分数与距离预测。

#### 概率期望距离与残差修正

对每层每个时刻 \( t \)，模型需输出区间 \( (\hat{s}_t, \hat{e}_t) \)。\( \Delta \) 为 20 ms 基础分辨率，\( q_l \) 为该层相对帧的步长，\( \Delta t q_l \) 为该时刻的粗略中心。\( d_s, d_e \) 为经概率建模得到的到起止点的期望距离，\( r_s, r_e \) 为界于负 0.5 至 0.5 的有界残差，\( \delta \) 为实现常数。下式把中心、距离与残差换算为连续秒级时刻，附加项使边界可落在帧内任意位置。

\[\begin{split}\hat{s}_{t}&=\Delta\big[(t-d_{s}+r_{s})\,q_{l}\big]+\delta,\\ \hat{e}_{t}&=\Delta\big[(t+d_{e}+r_{e})\,q_{l}\big]+\delta,\end{split}\]

采用该形式的统计直觉是把离散时刻选择转化为连续期望。起始与结束头先对本时刻及两侧各 \( B = 16 \) 个邻居打分，偏置头调整这些分数后经 softmax 得到概率 \( \tilde{P}_s(b) \)，距离取 \( \sum b \tilde{P}_s(b) \)，相当于在 0 至 16 步之间按可信度加权。若分数集中在 \( b = 0 \)，距离趋于 0，区间紧贴中心。若分数分散，期望向外推移，天然表达不确定性。仅用非负距离会强制区间包含 \( t \)，对短于步长的区间无法把起点推到 \( t \) 右侧或终点收到 \( t \) 左侧，残差 \( r = 0.5 \tanh(F_r[t]) \) 以半步长为限修正这一偏差。算出的 \( (\hat{s}_t, \hat{e}_t) \) 随后与参考区间算交并比与边界绝对误差，驱动回归头更新。

为看清期望距离与残差如何共同决定边界，可先看单时刻双侧解码示意，注意左侧蓝色起始分支与右侧橙色结束分支的对称结构，以及底部两种损失分别作用于边界与区间。重点观察邻域分数如何经偏置调整变为概率，再如何取期望并叠加残差，这直接对应公式中的距离与残差分工。同时对比起止两侧的颜色与箭头走向，理解区间如何由两个独立边界组合而成。

[![原论文 Figure 1：Boundary decoding at one instant t of one level.](https://arxiv.org/html/2611.29085v1/fig1_compact.svg)](https://arxiv.org/html/2611.29085v1/fig1_compact.svg)

*论文图 1：单时刻双侧边界解码：邻域起止分数经偏置调整取期望并叠加残差得到连续边界（原论文 Figure 1）。*

示意顶部为带粉色伪造段的波形与离散时刻轴，黑点标出当前 \( t \)。中部蓝色与橙色条形分别表示起止分数 \( F_s \)、\( F_e \) 与偏置 \( F_c \)，虚线框圈出 \( t \) 两侧各 \( B \) 个邻居，概率条形经 softmax 归一化后按距离取期望得到 \( d_s \) 与 \( d_e \)。紫色小块为残差 \( r_s \) 与 \( r_e \)，虚线箭头把期望与残差相加并乘以步长得到 \( \hat{s}_t \) 与 \( \hat{e}_t \)。底部左侧粉黑条带标注边界 Huber 损失作用于起止绝对误差，右侧灰黑条带标注交并比损失作用于区间重叠，分工与训练目标一致。

### 中心采样加权与多任务损失如何避免量化误差污染

前端中卷积特征提取器冻结，Transformer 块微调，后端投影、金字塔、SGP 与各头全部更新。参考为秒级精确区间集合 \( G \)，真实语句对应空集。所有回归与分类任务直接对照精确区间，仅辅助帧头使用量化标签且梯度在头输入处截断，因此量化误差不会进入主体。超参数在 PartialSpoof 开发集上固定，不按数据集单独调优，\( \lambda_h = 0.05 \)，门控阈值 0.2，邻域 \( B = 16 \)，通道 \( C = 256 \)。

#### 中心采样分类与交并比加权

瞬时分类判断每个时刻是否靠近某参考区间中心。头为三层卷积，前两层核长 3、256 通道加 ReLU，末层投影为 1 分。同一头作用于六层输出，每个时刻得 1 分 \( c^t \) 并复用为区间分数。正负样本由中心采样划分，每个正时刻被指派到一个参考区间 \( g \)。下式为其损失，\( \mathcal{P} \) 与 \( \mathcal{N} \) 为批量正负集合，\( \mathcal{F}_t \) 为二元 focal 损失，\( \mathrm{IoU}_t \) 为预测区间与指派参考的交并比。

\[\mathcal{L}_{\mathrm{cls}}=\frac{1}{|\mathcal{P}|}\sum_{t\in\mathcal{P}}\mathrm{IoU}_{t}\,\mathcal{F}_{t}+\frac{1}{|\mathcal{N}|}\sum_{t\in\mathcal{N}}\mathcal{F}_{t},\]

该式的统计直觉是让分数同时反映存在性与定位质量。正样本项以 \( \mathrm{IoU}_t \) 加权，定位越准则该时刻对分类损失贡献越大，促使高分候选也是高重叠候选。若某正时刻预测区间与参考几乎不重叠，\( \mathrm{IoU}_t \) 趋于 0，其 focal 项被抑制，避免模型为难定位样本强行推高分数。若负样本极多，第二项以均值归一化保持平衡。当所有正样本交并比都很低时，分类头整体梯度变小，训练重心自然转向回归头改善重叠。输出的 \( c^t \) 随后作为区间分数参与排序与 Soft-NMS 合并。

#### 边界回归与话语门控

边界回归需同时学距离与残差。起始头与结束头各输出 1 分 \( F_s \) 与 \( F_e \)，偏置头输出 \( F_c \) 调整邻居分数，残差头输出 \( F_r \) 经 \( 0.5 \tanh \) 限幅。残差头前两层共享，末层按层独立，以适应不同步长的剩余误差。下式给出区间交并比损失与边界 Huber 损失，\( \tau_b = 20 \) ms 为归一化尺度，\( h(u) \) 在 \( u < 1 \) 时为 \( u^2/2 \)，否则为 \( u - 1/2 \)。

\[\begin{aligned} \displaystyle\mathcal{L}_{\mathrm{hub}} \displaystyle=\frac{1}{|\mathcal{P}|}\sum_{t\in\mathcal{P}}\Big[h\big(\tfrac{|\hat{s}_{t}-s_{g}|}{\tau_{b}}\big)+h\big(\tfrac{|\hat{e}_{t}-e_{g}|}{\tau_{b}}\big)\Big], \\ \displaystyle\mathcal{L}_{\mathrm{IoU}} \displaystyle=\frac{1}{|\mathcal{P}|}\sum_{t\in\mathcal{P}}(1-\mathrm{IoU}_{t}), \end{aligned}\]

两项互补的物理原因是区间重叠与绝对时间误差敏感度不同。\( \mathcal{L}_{\mathrm{IoU}} \) 衡量预测区间与参考的重叠，对长区间数毫秒误差几乎无变化，单独使用会导致边界松弛。\( \mathcal{L}_{\mathrm{hub}} \) 把起止误差除以 20 ms 后按 Huber 惩罚，小误差平方平滑，大误差线性抑制异常值，使长短区间都获得毫秒级约束。当预测完全不重叠时，交并比梯度仍能提供方向，而 Huber 保证边界向参考靠拢。两者与分类损失相加，并附话语级二元交叉熵 \( \mathcal{L}_{\mathrm{utt}} \) 与辅助帧交叉熵 \( \mathcal{L}_{\mathrm{fr}} \)，总损失为 \( \mathcal{L}_{\mathrm{cls}} + \lambda_h \mathcal{L}_{\mathrm{hub}} + \mathcal{L}_{\mathrm{IoU}} + \mathcal{L}_{\mathrm{utt}} + \mathcal{L}_{\mathrm{fr}} \)。

话语头把六层 SGP 输出沿时间拼接，经注意力统计池化为加权均值与加权标准差，再经隐层 256 的两层感知机与 sigmoid 得到整句含伪造概率 \( p_u \)，以类别平衡二元交叉熵训练。纯真实语句此前仅靠负样本 focal 项约束，分数稍低即梯度消失，仍会输出候选，话语门控在推理时直接过滤被判为真实的语句。帧头仅取 L1 输出，结构同瞬时分类头，以量化帧标签训练且梯度截断，仅用于与帧级基线对比。

### 三组评测揭示的精度收益、跨域泛化与标签错位

评测沿用 3 套数据。训练与评测统一在 PartialSpoof、LlamaPartialSpoof 与 PartialEdit E1 上进行，超参数在 PartialSpoof 开发集固定后不再按集调优，所有模型各训 3 个随机种子取均值。指标方向为点式等错误率与区间式等错误率越低越好，起点与终点平均绝对误差以 ms 计越低越好，匹配率指交并比不低于 0.5 的参考区间占比越高越好。点式等错误率按 20 ms 分辨率打分，区间模型对覆盖某帧的所有候选取最高分，无覆盖记 0 分，帧模型把归一化分数高于 0.5 的连续帧拼接为区间。

#### 评测协议与对齐方式前提

为理解点式与区间式打分的对齐差异，可先看真值与输出对齐示意，重点区分最左列展示的转换真值协议引发的对齐歧义问题，以及右侧三列依次展示的 3 种解法。注意最左列把真值下采样为固定格，右侧三列分别把输出插值为连续分数、按边界打碎或按固定小间隔切分，这决定了评测是否依赖检测器分辨率。理解该差异有助于判断跨分辨率比较的公平性。

[![原论文 Figure 4：Three ways of solving alignment issue between ground truth and model outputs for evaluation of…](https://arxiv.org/html/2611.29085v1/evaluation-eer.svg)](https://arxiv.org/html/2611.29085v1/evaluation-eer.svg)

*论文图 4：真值与输出对齐问题与三种解法：最左列协议转换引发歧义，右侧三列分别插值、打碎与固定切分（原论文 Figure 4）。*

示意共四列，其中最左列展示转换真值协议引发的对齐歧义问题，右侧三列依次展示原论文提出的 3 种解法。最左列顶部为 Y-N-Y 真值条带，中部经协议下采样为 Y Y Y N N N Y 共七格序列，底部检测器输出行与之等宽对齐同样为七格，箭头标注真值转换存在歧义。第二列顶部同样真值，中部直接给出 3 段分数 0.8、0.1 与 0.9，底部检测器输出需经插值上采样，对应第一种解法。第三列把真值与输出边界全部打碎为细小片段再对齐，对应第二种解法，第四列以独立于检测器的固定小间隔同时切分真值与输出，对应第三种解法。论文主张保持真值不变的思路更符合真值不变原则，依赖检测器分辨率或行为的转换较难跨模型比较。

#### 部分伪造与跨域泛化的精度对比

下表比较 PartialSpoof 上的点式与区间式等错误率、起止误差与匹配率，包含多分辨率、粗到细提议与边界注意力等已发表基线，以及本方法 4 种推理设置。比较时注意点式按 20 ms 打分而区间式计入帧内误差，起止误差以 ms 计越低越好，匹配率以交并比不低于 0.5 为准越高越好，缺失值以横线表示未报告。

| Model | Point EER | Range EER | MAE s / e | Matched |
| --- | --- | --- | --- | --- |
| MRM[2, 9] | 12.84 | 30.40 | – | – |
| MRM, re-impl.† | 15.57 | 16.07 | 13.9 / 15.2 | 69.0 |
| CFPRF[18] | 7.61 | – | – | – |
| SaC[6] | 6.55 | – | – | – |
| BAM[7] | 5.20 | – | – | – |
| Ours, w/o utt | 6.01 | 6.89 | 9.8 / 9.3 | 95.8 |
| Ours, ungated | 5.00 | 5.55 | 8.7 / 9.3 | 94.5 |
| Ours, gated | 5.00 | 5.56 | 8.7 / 9.3 | 94.3 |
| Ours, frame head | 5.89 | 6.36 | 14.2 / 17.9 | 78.9 |
| Ours, max fusion | 4.92 | 5.34 | 13.0 / 14.3 | 80.6 |

同表内点式栏最低为最大融合的 4.92%，区间式栏最低为最大融合的 5.34%，均优于边界注意力基线的 5.20% 点式与重实现多分辨率的 15.57% 点式与 16.07% 区间式。回归设置起点与终点误差均在 10 ms 内并匹配约 95% 区间，而纯帧头误差升至 14.2 ms 与 17.9 ms 且匹配率仅 78.9%。区间式普遍高于点式，因其计入帧内边界误差。代价是最大融合的匹配率回落至 80.6%，区间精度让位于帧头召回的折中。未加话语头的训练使两项等错误率升至 6.01% 与 6.89%，说明联合训练本身有助于定位。

下表为在 LlamaPartialSpoof 上的点式等错误率，左侧为 PartialSpoof 训练后直接测试的零样本结果，右侧为在子集上微调后的结果，列按全集、部分伪造子集与两者合并划分，数值越低越好。注意全集含整句全伪造，部分伪造子集更贴近定位任务，话语头单列仅在全集上有定义，横线表示该设置不适用。

| Model | Zero-shot full | Zero-shot partial | Zero-shot both |  | Fine-tuned full | Fine-tuned partial | Fine-tuned both |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MRM[2, 18] | 40.98 | 32.76 | 44.54 |  | 6.04 | 10.31 | 8.20 |
| CFPRF[5, 18] | 36.22 | 35.01 | 41.47 |  | 2.89 | 8.72 | 5.96 |
| Ours, ungated | 30.01 | 26.18 | 34.39 |  | 3.23 | 1.76 | 2.85 |
| Ours, gated | 30.43 | 26.10 | 34.63 |  | 3.04 | 1.71 | 2.78 |
| Ours, frame head | 28.75 | 24.47 | 33.84 |  | 0.83 | 2.00 | 1.31 |
| Ours, max fusion | 29.57 | 24.60 | 33.79 |  | 0.87 | 1.77 | 1.33 |
| Ours, utterance head | 37.03 | – | – |  | 0.61 | – | – |

零样本下各方法误差整体偏高，其中合并集上最大融合为 33.79%，帧头为 33.84%，均低于多分辨率的 44.54% 与粗到细的 41.47%，说明精确边界训练泛化更好。微调后大幅下降，合并集上帧头为 1.31%，部分伪造子集上门控为 1.71%，均为同列最低。尖锐代价是全集微调后非门控为 3.23%，差于粗到细的 2.89%，因提议未必覆盖整句全伪造，属定位与整句检测的任务错位。单用话语头在全集微调后为 0.61%，显示所学特征仍具区分力，但该行未评测部分伪造定位。

#### 标签错位诊断与纠偏后重训

下表为 PartialEdit E1 评测集按重对齐参考打分的结果，上半为用发布标签训练，下半为用重对齐单区间子集训练，指标方向与前表一致。注意上半与文献报告的边界注意力数字基于不同标签与评测集，不可直接对比，起止误差栏中斜线前后分别为起点与终点误差，均以 ms 计。

| Model | Point EER | Range EER | MAE s / e | Matched |
| --- | --- | --- | --- | --- |
| Trained on the released labels |  |  |  |  |
| BAM†[7, 1] | 3.80 | – | – | – |
| MRM, re-impl. | 7.43 | 7.51 | 10.7 / 127.3 | 89.4 |
| Ours, ungated | 7.23 | 7.65 | 25.2 / 82.7 | 99.0 |
| Trained on the realigned labels |  |  |  |  |
| MRM, re-impl. | 0.53 | 0.54 | 10.0 / 8.4 | 99.0 |
| Ours, ungated | 1.05 | 0.78 | 7.2 / 5.8 | 99.5 |
| Ours, gated | 1.05 | 0.79 | 7.2 / 5.8 | 99.4 |
| Ours, frame head | 0.41 | 0.44 | 8.4 / 6.8 | 99.1 |
| Ours, max fusion | 0.44 | 0.43 | 9.6 / 7.4 | 99.3 |

用发布标签训练时，本方法非门控点式为 7.23%，重实现多分辨率点式为 7.43%，且终点误差分别为 82.7 ms 与 127.3 ms，数倍于起点误差 25.2 ms 与 10.7 ms，匹配率却达 99.0% 与 89.4%。改用重对齐标签训练后，两类模型点式均降至约 1% 或以下，本方法非门控起止误差为 7.2 ms 与 5.8 ms，匹配率 99.5%，帧头点式 0.41% 为同列最低，最大融合区间式 0.43% 为同列最低。代价是发布标签下本方法点式高于文献报告的边界注意力 3.80%，但该数字基于发布标签与作者自有评测集，比较前提并不相同。

为看清发布标签终点错位的直接证据，可先看单区间文件的互相关对比示意，重点比较起始处蓝色实线与终点处两条橙色垂直线的含义。注意橙色虚线标出发布终点，橙色实线标出重对齐终点，两线之间以橙色双向箭头标注 180 ms，而底部黑色横条是另一计算窗口，需结合绿框中互相关数值理解系统性偏移。

[![原论文 Figure 3：Comparing the boundaries using cross-correlation.](https://arxiv.org/html/2611.29085v1/fig3_compact.svg)](https://arxiv.org/html/2611.29085v1/fig3_compact.svg)

*论文图 3：单区间文件互相关对比：橙色虚线为发布终点，橙色实线为重对齐终点，两线间橙色双箭头标 180 ms，底部黑条为终点后计算窗口（原论文 Figure 3）。*

示意上下两条灰色波形分别为原始与编辑文件，蓝色实线标出起始，橙色虚线标出发布终点，橙色实线标出重对齐终点并位于 180 ms 箭头右端。左侧绿框注明起始前在零延迟互相关达 1.000，说明起始准确。右侧绿框注明按约 180 ms 延迟对齐时互相关达 1.000，而底部黑色横条是从发布终点向右延伸的长区间，对应发布终点之后按相同延迟计算仅得 0.508。两条橙色垂直线之间的橙色双向箭头标注 180 ms，为发布终点与重对齐终点的偏差。论文据此统计单区间文件中起始匹配率 92%，终点仅 37%，并重对齐全部单区间文件形成纠偏子集。

下表为附录中贝叶斯决策代价矩阵，用于解释等错误率作为最大决策风险的含义，行表示真实类别，列表示用户动作，对角为 0，误接受与误拒绝代价分别记为两类符号。该矩阵虽无定位精度数字，但为理解点式与区间式指标的理论前提提供了必要背景。

|  |  | Action = 𝙰𝙲𝙲𝙴𝙿𝚃 | Action = 𝚁𝙴𝙹𝙴𝙲𝚃 |
| --- | --- | --- | --- |
| True class = 𝖸 |  | 0 | Cfr𝖸 |
| True class = 𝖭 |  | Cfa𝖭 | 0 |

该矩阵把误接受与误拒绝的代价分别记为 \( C_{\mathrm{fa}} \) 与 \( C_{\mathrm{fr}} \)，等错误率对应二者均取 1 时随先验变化的最大风险。附录证明区间式等错误率要保留该解释，需附加平稳性与各态历经性假设，即分数过程分布不随时变且时间平均收敛于集合平均。实践中这些假设是否成立仍待检验，因此论文提醒区间式指标的理论基础尚未完全确立，比较时需同时看点式、区间式与边界误差。

### 连续时间假设的适用边界与复现选型建议

连续时间建模假设参考区间精确已知且提议经 Soft-NMS 可去重。若参考本身错位，回归会拟合错误边界，PartialEdit 终点偏差即为例证。平稳与各态历经假设仅为区间式指标提供解释，不保证跨库分数分布不变，零样本直接部署仍不可用，跨库需微调。话语门控假设整句检测与区间定位共享特征，全伪造整句的提议覆盖不足暴露了任务错位，整句检测仍需独立头补充。

复现需区分三件事。论文正文脚注给出边界检测代码库链接与纠偏后数据集链接，附录给出等错误率推导与对齐讨论。权重是否随代码发布、运行环境与随机种子细节需以链接页面实际内容为准，原文仅说明单张 48 GB RTX A6000、AdamW 学习率与早停策略，未披露训练耗时与显存峰值。复现第一步建议先在 PartialSpoof 上跑通非门控设置并核对点式与区间式双指标，再做跨库微调。

何时值得尝试取决于需求。若应用需毫秒级起止时刻或法医级区间报告，且能提供精确到秒的区间标注，边界回归比帧分类更直接。若仅需整句真假或标注本身为帧级，帧头或话语头已够用，引入金字塔与 Soft-NMS 会增加后处理。未验证范围包括流式低延迟、长句多区间重叠与强噪声，补做验证时应同时报告点式、区间式、起止误差与匹配率，并检查终点误差是否系统性大于起点误差。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：基础帧分辨率 20 ms，特征金字塔覆盖 20 ms 至 640 ms，层步长 q_l 为 2 的幂次帧数；采样率与码率原文未披露；推理为整句离线处理，流式分块与 RTF 原文未披露
- **训练与评测数据**：训练与评测使用 PartialSpoof、LlamaPartialSpoof 与 PartialEdit E1，另用 VCTK 源文件做互相关核验；具体时长与划分细节原文未披露，超参数在 PartialSpoof 开发集固定后不再按集调优
- **算力与训练耗时**：单张 48 GB RTX A6000，前端使用 fp16 autocast；AdamW 优化器，XLS-R 学习率 10−5，其余部分 10−4，权重衰减 0.05，5 轮线性预热加 30 轮余弦衰减，每批 8 个整句，早停耐心为 3；训练耗时原文未披露
- **核心超参数与配置**：通道 C 为 256，邻域 B 为 16，损失权重 λ_h 为 0.05，门控阈值 0.2，归一化尺度 τ_b 为 20 ms，SGP 窗口 w 为 1、k_w 为 3，话语头隐层 256，Soft-NMS 合并至 100 个候选
- **推理速度与部署开销**：推理时所有候选经 Soft-NMS 合并为 100 个区间，门控设置过滤判为真实的语句以减少后处理；RTF、延迟、吞吐与显存峰值原文未披露
- **开源产物与协议状态**：论文脚注给出边界检测代码库链接与纠偏后数据集链接，本次核验为第三方可达，不代表作者官方开源状态已确认；权重是否发布与运行环境需以链接页面实际内容为准
- **附录与补充材料要点**：附录给出二元分类贝叶斯决策与等错误率作为最大决策风险的证明，讨论区间式等错误率需平稳性与各态历经性假设，并给出对齐问题展示与决策代价矩阵

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.29085v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：保留300M XLS-R前端而将逐帧分类改为连续时间戳单阶段边界回归，不再量化参考标签直击帧内边界根因。

- 核心优势：最大融合点EER4.92%区间EER5.34%低于BAM5.20%，回归分支双端误差10ms内且匹配率约94%至96%远超帧头分支。

- 核心优势：用归一化互相关校验发现起点92%匹配而终点仅37%匹配，提出重对齐子集使EER从7%以上降至约1%。

- 主要短板：零样本跨库点EER仍在24.47%至44.54%之间，未覆盖噪声混响压缩与多语言口音等压力条件且跨库最优性未经验证。

- 主要短板：未说明训练库时长话语数划分与预处理增强等数据细节，关键数据配置披露存在缺口。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
