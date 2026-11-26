---
title: "Line-Level Singer Diarization in Multi-Member Pop Songs: A Benchmark, Lead-Vocal Isolation, and Song-Level Decoding"
date: 2026-11-26
draft: false
tags: [说话人分离标注, 聚类与类别匹配, 对比学习, 数据集, 基准测试]
categories: [论文速递]
description: "针对多人流行歌曲已知行时间下按行分歌手的问题，论文用卡拉 OK 主唱分离加歌唱适配声纹加免训练歌曲级解码，在 ColorCoded-SD 上相对标准流程提升 +0.058 B3-F1，在未见歌手的 IdolSongsJp 上提升 +0.066，代价是每首歌约 3.5 min 分离耗时与短行无声纹瓶颈。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33247"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多人流行歌曲按行分歌手：主唱分离、歌唱适配声纹与歌曲级解码"
paper_digest_original_title: "Line-Level Singer Diarization in Multi-Member Pop Songs: A Benchmark, Lead-Vocal Isolation, and Song-Level Decoding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33247v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33247v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33247v1.pdf"
paper_digest_primary_task: "说话人分离标注"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对多人流行歌曲已知行时间下按行分歌手的问题，论文用卡拉 OK 主唱分离加歌唱适配声纹加免训练歌曲级解码，在 ColorCoded-SD 上相对标准流程提升 +0.058 B3-F1，在未见歌手的 IdolSongsJp 上提升 +0.066，代价是每首歌约 3.5 min 分离耗时与短行无声纹瓶颈。"
paper_digest_reader_sections: [{"heading":"已知行时间却分不对人：多人流行歌曲按行分组的任务定义与语音方法的失效","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四段流水线与三处增量：主唱分离、歌唱适配声纹与歌曲级解码","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"主唱分离与歌唱适配编码器：输入净化与声纹微调的分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"黏性维特比与跨歌曲链接：利用换唱持续性与成员复现的免训练解码","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"主结果与输入阶梯：完整系统在两个基准上的增益与主唱因素的决定性","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"编码器、解码与失效画像：代价、负结果与短行瓶颈","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"边界、复现核对与选型建议：何时值得用这套流程","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["nagiflow LLC, Tokyo, Japan"],"name":"Allen Ng"}]
paper_digest_abstract_sha256: "2bf0a6fb3efa92b8a0debaae8f7171348ef8a4077787c4bd23d972cbb30fcc19"
paper_digest_sidecars: {"citation.bib":{"sha256":"da9ca2c822dd6c2cd599bc17df09701a0db8e8c6a90294caa30854474577993a","url":"/audio-research-portal/client/papers/2026-11-26/2611-33247/citation.bib"},"citation.json":{"sha256":"a391eff3b21de02139cbd96183c87acaa7e835c8370c691d12bef8b227875743","url":"/audio-research-portal/client/papers/2026-11-26/2611-33247/citation.json"},"citation.ris":{"sha256":"0c63e3c8faffad14c531ea343de5e391b45c6c970b0de038bcd256e493a9da1b","url":"/audio-research-portal/client/papers/2026-11-26/2611-33247/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9aa5e392b7c15398f2147e7949b0e9c8643e29e4eb2bb1bf0a6214cc3fcfeaad","url":"/audio-research-portal/client/papers/2026-11-26/2611-33247/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "eb9ae6e677f52a889606ab9028a78f037ef82fe81e51f21cfdcceff79117bab7"
paper_digest_api_reader_plan_sha256: "5e71d2f06c1fb569fd4c7f6084f4c2818dc76ee1fd99dc9aac0f490dd50c48d9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7bfaddf3d82d526ec83e522b3370a5026cc4ec6d4ba1d18efe7782226e178da7"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "80da4fbb37649fa70170a704dc3746c74fdc65fa166103aa957c2cafc9b60594"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "fe6632e7d6433014b98038a37ec9f2b6e2210482cb8f19b36a33343000c4d812"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "7af3beb6a99c2cd1274fa92527466cd375e054e39dd532faf039bb03c4b18662"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 多人流行歌曲按行分歌手：主唱分离、歌唱适配声纹与歌曲级解码

> 英文题目：*[Line-Level Singer Diarization in Multi-Member Pop Songs: A Benchmark, Lead-Vocal Isolation, and Song-Level Decoding](https://arxiv.org/abs/2611.33247v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[聚类与类别匹配](/audio-research-portal/papers/?concept=method.clustering)；[对比学习](/audio-research-portal/papers/?concept=method.contrastive)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)；[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.5/10 | 技术严谨 8.0/10 | 实验充分 7.8/10 | 清晰度 7.0/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 7.3/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Allen Ng：nagiflow LLC, Tokyo, Japan

## 📌 核心摘要

**问题与瓶颈：** 多成员流行歌曲需要把每句歌词按演唱者分组，输入是整首歌曲音频与已知起止时间的歌词行序列，输出是每行所属的演唱者分组，组内身份事先未知且通常已知人数。面向讲话的日志系统在该场景明显失效，商用服务在平均 5.3 名歌手的歌曲中平均只找出 1.35 个说话人，43 首中有 33 首只给出 1 个说话人。同团成员在音色、唱法、制作与音域上刻意融合，行内常叠加其他成员的和声与加花，已知行边界反而凸显了音色区分度不足与伴唱干扰这两个根因。

**核心思路与方法架构：** 与最接近的常规路线相比，本文保留按行取嵌入再聚类的骨架，把改进集中在输入清洁度、歌唱适配的表征与利用歌曲结构的解码三处。整首歌曲先重采样到 16 kHz，此时 1 s 对应 16000 个采样点，行两端各去掉 0.1 s 后切成 3 s 窗与 1.5 s 跳步，低于全曲平均幅度的静音窗被丢弃。卡拉 OK 分离模型保留领唱并去除和声，编码器把每个窗映射为向量，全曲去均值与归一化后按行平均得到行向量，再用平均链接凝聚聚类分成给定数量的组。说话人编码器用同曲难负样本的监督对比学习做歌唱适配并用原语音模型做锚定，解码阶段用保持相邻行同歌手的粘性转移与跨歌曲复用成员原型的曲库链接做训练无关的修正，全程离线处理且推理结构不增加参数。

**关键实验与核心代价：** 在 43 首歌曲 1740 行的 ColorCoded-SD 基准上，常规路线 B3-F1 值为 0.641，Acc. 值为 66.3，完整系统达到 0.699 与 72.4，配对差异为 +0.058，p = 0.001，仅确认行上增益为 +0.045，p = 0.012。在 14 首歌曲 309 行且歌手完全未见的 IdolSongsJp 语料上，常规路线为 0.800 与 81.6，完整系统为 0.867 与 87.1，差异为 +0.066，p = 0.003，领唱输入加适配编码器与粘性解码的组合达到 0.875。人类独立标注一致率为 89.1%，完整系统在主基准上约弥合了四分之一差距。领唱分离在保留领唱的行上带来 +0.039 至 +0.059，两种解码叠加带来 +0.028，代价是卡拉 OK 分离在笔记本 GPU 上约需 3.5 min 处理一首歌曲，短行与被静音的行仍无有效声纹。

**适用边界与深读导览：** 结论成立依赖已知人数、已知行时间、只评单人行这三个前提，多人合唱行占标注行的 16.4% 未纳入任务，11% 的行因过短或被静音而无声纹，只能继承邻行标签。调参与评测共用 ColorCoded 歌曲导致该侧数字偏乐观，IdolSongsJp 完全未触碰但仅 14 首歌曲且区间较宽，K-pop 与 J-pop 风格之外的语言与编制尚未验证。发布物不含音频、歌词文本与成员姓名，需自备官方版本再用色度指纹与动态时间规整对齐。若想深究对比损失与粘性译码的公式含义可看方法章节的损失与译码部分，若想核对编码器与解码的增益来源可看实验章节的主表与消融小节。

## 🔗 开源与复现资源

- 论文所列链接：<https://huggingface.co/datasets/nagiflow/colorcoded-sd> — 链接不可用（HTTP 401）

- 论文所列链接：<https://huggingface.co/AcappellaSet/ACappellaSet-Models> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 已知行时间却分不对人：多人流行歌曲按行分组的任务定义与语音方法的失效

多人偶像团体的流行歌曲常由 4 到 10 余位成员轮流演唱，一首歌内频繁换人。粉丝制作的行分配视频逐行为每一句歌词标注成员颜色，背后工具已积累 19,042 个项目，覆盖 6,241 位艺人，其中最耗时的是判断每一行是谁唱的。直接套用面向会议语音的商业系统在这里失效，在 43 首歌曲上，ElevenLabs Scribe v2 平均只找到 1.35 位说话人，而实际平均有 5.3 位歌手，33 首歌曲被归为单人独唱，分组几乎坍缩。

#### 已知时间只做分组：输入输出与人数已知假设

论文把任务定义为已知行时间的分组问题。输入是一首歌的音频加 N 行已知起止时间，按时间排序为 ℓ = 1 到 N，输出是对所有行的划分 \(z_{\ell}\)，取值在 \(1\) 到 \(k\) 之间，歌手身份未知，不借助同团体其他歌曲，除非明确启用跨歌曲链接。多人合唱行占标注行的 16.4%，不在任务内。行时间来自歌词或强制对齐，系统不做切分，只做聚类，这与语音场景先切分再聚类有本质不同。

与语音相比还有两处不同。同一团体成员为和声而挑选，音色、制作与音域接近，行与行之间叠加和声与即兴加花，声纹更易混淆。同时歌手人数通常已知，6,915 个标注项目中有 95.7% 的项目创建的所有成员都在歌中献声，因此主评测给定真实人数 \(k\)，另行报告人数估计的单独实验。这种已知 \(k\) 的设定贴近实际应用，也让评测聚焦于分组本身，而非人数估计误差。

#### 两套评测与一套适配：数据来源与标签推导

要理解后续增益与代价，先看清数据规模与划分。下面这张数据表概括了全文所有数字的来源，区分了基准、纯测试与适配数据，也标明了歌曲数、歌手数与行数。阅读时先确认每组数字的用途，再看主结果，特别注意训练语料已剔除评测艺人，而人类一致率只做参考线，所有结论都只在这两套评测上成立。

|  | Songs | Singers | Lines | Use |
| --- | --- | --- | --- | --- |
| ColorCoded-SD | 43 | 30 | 1,740a | benchmark |
| IdolSongsJp | 14 | 18 | 309 | test only |
| Training corpus | 2,277 | 1,765 | — | adaptation |
| Human agreement | 319 | — | 12,914 | reference |

ColorCoded-SD 包含 43 首歌曲、30 位歌手与 1,740 行，其中 1,470 行为多人确认行，270 行为单标注人行，每首歌 3 到 8 位歌手。IdolSongsJp 用 14 首歌曲、18 位未见过的歌手与 309 行只做测试，任何模型都不在上面训练调参。适配编码器另用 2,277 首歌曲、1,765 位歌手、364 位艺人、约 125 h 演唱组成训练语料，已剔除评测艺人。319 首歌曲、12,914 行的双人独立标注一致率为 89.1%，中位歌曲为 100%，作为行准确率的人类参考线。

IdolSongsJp 的行标签来自推导而非人工。每位歌手 \(X\) 都有完整独唱版混音，若 \(X\) 在母带中领唱该片段，则母带近似等于独唱版。论文在 100 ms 帧上计算残差比 \(R_{X}\)，仅当最小残差低于 0.35 且不到次优残差的 0.35 倍时判为单人帧，连续 1 s 以上成行，最终得到 309 行，覆盖 45% 人声时间，一首全程叠唱的歌曲无行产出，标签过程不使用任何待评模型。

### 四段流水线与三处增量：主唱分离、歌唱适配声纹与歌曲级解码

标准流程是人声分离加说话人向量加单曲聚类，本文保留聚类框架，替换了三处。输入从 HT-Demucs 人声换成 Mel-RoFormer 卡拉 OK 模型保留的主唱，声纹从语音预训练换成歌唱适配后的 ECAPA2-ft 或 ResNet-ft，解码从单曲平均链接层次聚类换成黏性维特比加跨歌曲链接。信号统一重采样到 16 kHz，每行两端各剪 0.1 s，再切 3 s 窗、1.5 s 跳步，静音门限为全曲平均幅度的 1/4，窗内无窗的行后续回退到时间最近邻。

下面的流水线示意标出了增益来源，阅读时先沿从左到右的箭头看主路径，再对照蓝色高亮的两处替换与新增解码，理解数据在何处分叉与汇合。图中下方还标注了对应章节，先建立整体位置感，再进入各模块的输入输出与参数冻结边界，避免把分离、编码与解码的增益混为一谈。

![原论文 Figure 1：Pipeline. The highlighted stages carry the gain over the standard pipeline (vocal separation,…](/audio-research-portal/images/papers/2611.33247/figure-1-174c3a1f704b6e77.png)

*论文图 1：多人歌曲按行分歌手流水线突出主唱分离与歌曲级解码两处增量（原论文 Figure 1）。*

图中从左到右依次是歌曲音频加行时间、主唱分离、切窗与静音门、说话人编码器、歌曲中心化与行平均及 ℓ2 归一化、AHC 聚成 \(k\) 类、歌曲级解码输出行到歌手簇。其中主唱分离与歌曲级解码以蓝色高亮，分别对应第 4.1 节与第 4.3 节，编码器对应第 4.2 节。中心化减去整曲均值向量，意在去掉同一制作共享的通道成分，再做行内平均，这是后续所有余弦比较的基础，短行无窗则直接继承邻行标签。

#### 一秒样本的端到端旅程

以一行中持续 1 s 的片段为例，它随整曲先经卡拉 OK 分离得到主唱轨并重采样为 16,000 个采样点。若该行总长不足 1.2 s 或分离后静音，则切不出任何 3 s 窗，原文记为无声纹，占 ColorCoded-SD 的 11%，直接继承时间最近有声纹行的簇标签。若行足够长，则按 3 s 窗、1.5 s 跳步切分，每个窗经编码器映射为一个向量 \(x_{w}\)，原文未披露具体维度。同一首歌内所有窗向量减去歌曲均值并做 ℓ2 归一化，行内平均再归一化得到行向量 \(v_{\ell}\)，AHC 在余弦距离上做平均链接聚成 \(k\) 类，最后由歌曲级解码调整标签。

### 主唱分离与歌唱适配编码器：输入净化与声纹微调的分工

主唱分离的目标是去掉和声与伴唱，只留领唱。除了完整混音与 HT-Demucs 人声，论文引入 Mel-RoFormer 卡拉 OK 模型，重叠设置为 2，只保留主唱。当该模型判断某行为纯伴唱而输出静音时，声纹回退到 Demucs 轨，这一回退比留空更稳，留空只能继承邻行标签。BS-RoFormer 作为更强的人声分离对照，只去伴奏不去和声，增益小于卡拉 OK 模型，说明去掉其他人声比单纯提升人声质量更关键。

歌唱适配要在不增加推理代价的前提下，让语音声纹分清同团成员。适配沿用监督对比学习，温度为 0.1，正样本为同一歌手在任何歌曲中的窗，来自同首歌不同歌手的负样本权重乘 2，并用锚定项留住语音知识。下式中 \(z\) 为当前窗向量，\(z_{0}\) 为冻结的原始语音向量，\(\lambda\) 为 0.2，上标表示同歌负样本加权，批量包含同歌与跨歌窗，BatchNorm 统计始终冻结。

\[\mathcal{L}=\mathcal{L}_{\text{SupCon}}^{\times 2\,\text{in-song}}+\lambda\,\big(1-\cos(z,z_{0})\big),\quad\lambda=0.2,\]

物理直觉是把同团混淆作为最难负样本加倍惩罚，同时用余弦锚定防止偏离语音先验太远。若 \(\lambda\) 过大，模型退回语音编码器，同团错误率居高不下，若 \(\lambda\) 为 0 且只用歌唱数据，模型易过拟合训练团体的制作风格，在未见歌手上退化。输出的窗向量经歌曲中心化与行平均得到 \(v_{\ell}\)，直接决定后续余弦聚类的可分性，适配前后结构与推理耗时完全不变。

训练批量由 3 到 6 首歌曲、每首 3 位歌手、每位 3 个窗再加跨歌曲各 1 个窗组成，增强仅为随机增益与平滑正负 6 dB 均衡。ResNet-ft 用 AdamW、学习率为 10−4、1,000 步，只训练第 3 层、第 4 层与头，ECAPA2-ft 学习率为 5×10−5、500 步，只训练一维部分，都在 16 GB 显存笔记本 GPU 上完成。结构未增减任何层，BatchNorm 统计冻结，推理耗时与原始语音模型一致。

### 黏性维特比与跨歌曲链接：利用换唱持续性与成员复现的免训练解码

歌曲级解码利用两条先验。290,116 个标注行对统计显示，相邻单人行保持同一歌手占 57.2%，远高于随机猜测的约 \(1/k\) ≈ 20%。同时团体成员跨歌曲复现，单曲聚类中心跨歌曲可链接。短于 1.2 s 或分离后静音而无窗的行没有 \(v_{\ell}\)，直接取时间最近有声纹行的簇，这是解码前就固定的回退规则，不参与相似度计算。

黏性解码从 AHC 出发，交替估计簇中心 \(c_{j}\) 与维特比寻优。下式第一项为行向量 \(v_{\ell}\) 与所分配中心余弦相似度之和，第二项为相邻行标签相同的奖励，\(\beta\) 为黏性系数，指示函数取相邻行标签相同时为 1，\(\ell\) 按时间排序，\(c_{j}\) 为归一化后的类内均值。解码在标签不再变化时停止，再把结果作为跨歌曲链接内的内层解码器使用。

\[\textstyle\sum_{\ell}\cos(v_{\ell},c_{z_{\ell}})+\beta\sum_{\ell>1}\mathbb{1}[z_{\ell}=z_{\ell-1}]\]

直觉是在声纹相似度上加一段持续性奖励，避免因短行噪声频繁跳变。\(\beta\) 为 0 时退化为最近中心分配，\(\beta\) 过大则过度平滑，论文曲线显示 \(\beta\) ≥ 0.5 后 B3-F1 下滑，选用值 \(\beta\) = 0.2 经留一组验证选出。每次维特比后按新标签重估中心，直到标签不再变化，这种轻量时序先验类似帧级 VBx，但作用在行序列上，计算量远小于重训序列模型。

跨歌曲链接分三步。先把每首歌聚成 \(k_{s}\) 个中心 \(C_{s}\)，再用匈牙利算法把每首歌的中心一对一链接到 \(R\) 个团体身份，原型 \(P_{r}\) 为所链接中心的归一化均值，迭代至收敛。最后每首歌对照融合参考 \(\mathrm{norm}(a P + (1-a) C_{s,j})\) 重解码 5 轮，每轮用黏性维特比并更新 \(C_{s}\)，融合权重 \(a\) = 0.75，同样经留一组验证选出。整个解码无需训练，只在推理时利用同团体多首歌曲。

### 主结果与输入阶梯：完整系统在两个基准上的增益与主唱因素的决定性

#### 评测口径与公平性前提

每行都参与预测与打分，指标为 B3-F1（B 立方 F1，按行微平均）与匈牙利映射后的一对一准确率 Acc，前者问行是否被正确归组，后者对应用户命名每个簇一次后看到的准确率。主评测给定真实人数 \(k\)，区间为 2,000 次歌曲自举的 95% 分位，比较时对同一批歌曲重采样并报告双侧 \(p\) 值。所有组件都在 ColorCoded 歌曲上开发调参，IdolSongsJp 的 14 首歌曲与 18 位歌手完全未见，只做测试。本文没有 MOS 类人工听测，人类参考只用双人标注一致率。

下表是主结果，基线为 Demucs 人声上的 ECAPA2 标准流程，对比了主唱输入、两种适配编码器与两种解码的叠加，括号内为 95% 置信区间，\(\Delta\)B3 为相对基线的配对差值。阅读时先看全部 1,740 行与确认行 1,470 行两列是否同向，再看未见歌手的 309 行是否保持增益，注意区间宽度与星号显著性标记。

| System | Input | ColorCoded-SD (43 songs) all 1,740 lines B3-F1 [95% CI] | ColorCoded-SD (43 songs) all 1,740 lines Acc. | ColorCoded-SD (43 songs) all 1,740 lines ΔB3 | ColorCoded-SD (43 songs) confirmed 1,470 B3-F1 | ColorCoded-SD (43 songs) confirmed 1,470 ΔB3 | IdolSongsJp (14 songs, unseen) all 309 lines B3-F1 [95% CI] | IdolSongsJp (14 songs, unseen) all 309 lines Acc. | IdolSongsJp (14 songs, unseen) all 309 lines ΔB3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECAPA2 [standard] | Demucs | 0.641 [0.58,0.70] | 66.3 | — | 0.651 | — | 0.800 [0.72,0.88] | 81.6 | — |
| ECAPA2 | lead | 0.661 [0.60,0.72] | 68.6 | +0.020 | 0.672 | +0.020 | 0.847 [0.76,0.92] | 85.8 | +0.047 |
| ResNet-ft | lead | 0.665 [0.60,0.73] | 69.0 | +0.024 | 0.657 | +0.006 | 0.824 [0.75,0.90] | 82.8 | +0.024 |
| ECAPA2-ft | lead | 0.672 [0.61,0.73] | 69.3 | +0.031∗ | 0.673 | +0.022 | 0.859 [0.78,0.93] | 87.1 | +0.059∗ |
| + sticky decoding | lead | 0.677 [0.61,0.74] | 69.7 | +0.036∗ | 0.680 | +0.028 | 0.875 [0.79,0.94] | 87.7 | +0.075∗ |
| + discography linking | lead | 0.678 [0.61,0.74] | 71.5 | +0.037∗ | 0.674 | +0.023 | 0.856 [0.78,0.93] | 87.1 | +0.055∗ |
| + both (full system) | lead | 0.699 [0.63,0.76] | 72.4 | +0.058∗ | 0.696 | +0.045∗ | 0.867 [0.78,0.94] | 87.1 | +0.066∗ |

在 ColorCoded-SD 全部 1,740 行上，完整系统从 0.641 提升到 0.699，\(\Delta\)B3 为 +0.058，\(p\) = 0.001，Acc 从 66.3% 提升到 72.4%，\(p\) = 0.007，确认行 1,470 行上增益为 +0.045，\(p\) = 0.012。在未见歌手的 IdolSongsJp 上从 0.800 提升到 0.867，\(\Delta\)B3 为 +0.066，\(p\) = 0.003。需逐格核对同列最优，IdolSongsJp 上单加黏性解码达到 0.875，高于完整系统的 0.867，完整系统并非该列最优，跨歌曲链接在该语料上反而拉低。

#### 输入阶梯：越干净编码器差距越小

要判断增益来自输入还是编码器，看只换前端、编码器不变的阶梯。下面曲线在 IdolSongsJp 309 行上比较了混音、HT-Demucs、BS-RoFormer、卡拉 OK 主唱与干声独唱五档输入，横轴从左到右越来越干净，纵轴为 B3-F1。干声独唱是每位歌手的录音室干声，可视为理想分离的上限，阅读时重点比较两条线的起点差距与终点汇合。

[![原论文 Figure 3：IdolSongsJp (14 songs, all 309 lines): B3-F1 by input.](https://arxiv.org/html/2611.33247v1/input_ladder.svg)](https://arxiv.org/html/2611.33247v1/input_ladder.svg)

*论文图 3：IdolSongsJp 上五档输入从混音到干声的 B3-F1 阶梯与编码器差距收敛（原论文 Figure 3）。*

图中蓝色 ECAPA2 起点高于橙色 ResNet-ft，混音处差距约 0.07，随前端变干净两线收敛，卡拉 OK 处差距约 0.02，干声独唱处在灰色底纹区汇合于 0.87 附近，原文记为同为 0.871。从 Demucs 起，BS-RoFormer 加 +0.03，卡拉 OK 模型对 ECAPA2 加 +0.04，对 ResNet-ft 加 +0.06。卡拉 OK 输出静音时回退到 Demucs 声纹，完整系统为 0.699，不回退则为 0.661。在 ColorCoded-SD 有双声纹的 1,308 行上，主唱输入对三编码器分别加 +0.039、+0.044 与 +0.059。

### 编码器、解码与失效画像：代价、负结果与短行瓶颈

#### 编码器与解码的各自代价

下表固定 AHC 与真实人数，只换编码器与输入，EER（等错误率）为同曲行对的等错误率，CPU 为单线程单 3 s 窗耗时，Mix 表示不做分离。阅读时先看 Demucs 与主唱两列的排序是否一致，再看 Mix 列谁最稳，最后把参数量与 CPU 代价对照起来，判断轻量模型何时可替代大模型。

| Encoder | Params | CPU | EER↓ | Mix | Demucs | Lead |
| --- | --- | --- | --- | --- | --- | --- |
| ResNet (speech) | 15.4M | 0.13 s | 30.7 | 0.557 | 0.573 | 0.595 |
| ECAPA2 (speech) | 27.1M | 1.1 s | 27.8 | 0.551 | 0.641 | 0.661 |
| ResNet-ft | 15.4M | 0.13 s | 26.5 | 0.595 | 0.634 | 0.665 |
| ECAPA2-ft | 27.1M | 1.1 s | 26.7 | — | 0.639 | 0.672 |
| Both -ft, concat. | 42.5M | 1.2 s | 25.7 | 0.591 | 0.664 | 0.696 |

歌唱适配让 ResNet 在 Demucs 上从 0.573 提升到 0.634，EER 从 30.7% 降到 26.5%，与 ECAPA2 的差距变为 −0.007，\(p\) = 0.63，可认为统计持平，而参数量少一半，CPU 为八分之一。在混音上 ResNet-ft 只掉 0.039，ECAPA2 掉 0.090，前者领先 +0.044，\(p\) = 0.038，鲁棒性更好。ECAPA2 适配增益较小，主唱输入上 +0.011，\(p\) = 0.30。双适配拼接在主唱上达到 0.696 为该列最优，代价是同时跑两个编码器。

单独看解码，黏性加 +0.005，\(p\) = 0.10，跨歌曲链接加 +0.007，\(p\) = 0.40，都不显著，但链接已让 Acc 提升 2.2 个百分点，\(p\) = 0.001。两者结合以黏性为内层解码器时，在 ECAPA2-ft 单曲基础上加 +0.028 B3-F1 与 3.1 个百分点准确率，确认行上 +0.023，都满足 \(p\) < 0.001。在 IdolSongsJp 上假设不成立，18 位歌手跨歌曲重组而非固定团体，链接为 −0.003，黏性仅 +0.016，\(p\) = 0.24。

跨歌曲增益随团体歌曲数变化，下面按团体拆分的准确率对比了基线、单曲适配与联合解码，横轴为一对一准确率，纵轴为 5 个团体名与括号内人数，纵轴中 BABYMONSTER 缩写显示为 BABYMON. (7)。各团体歌曲数来自图注，BLACKPINK 11 首、KATSEYE 12 首、BABYMONSTER 11 首、ILLIT 6 首与 Stray Kids 3 首。阅读时先看 BLACKPINK、BABYMON. 与 KATSEYE 这 3 个曲目较多的团体，再对比 ILLIT 与 Stray Kids 的标记位置，判断链接何时有效何时传播错误，并理解歌曲数量对链接可靠性的影响。

[![原论文 Figure 5：Per-group line accuracy on ColorCoded-SD (all lines; members in parentheses; songs: BLACKPINK 11,…](https://arxiv.org/html/2611.33247v1/groups.svg)](https://arxiv.org/html/2611.33247v1/groups.svg)

*论文图 5：按团体拆分的一对一准确率对比基线单曲适配与联合解码的效果差异（原论文 Figure 5）。*

图中 BLACKPINK、BABYMON. 与 KATSEYE 这 3 个曲目较多的团体联合标记明显右移，图注对应歌曲数为 11、11 与 12 首，分别增加 4.5、5.7 与 3.0 个百分点。Stray Kids 行灰色基线点约在 78%–79%，单曲适配与联合解码的橙色点均右移至约 82%–83%，相对灰色基线仍有单曲适配增益，但单曲适配与联合解码标记几乎重合，跨歌曲链接未带来额外变化。ILLIT 成员音色相近，基线约 0.48，联合解码反而左移 1.8 个百分点，说明单曲聚类不可靠时链接会传播错误。全图最低为 ILLIT，最高为 BLACKPINK 约 0.91，平均数掩盖了这种异质性。

#### 短行瓶颈与未成功的尝试

剩余误差集中在短行，下面按行属性拆分的准确率以虚线标出整体 0.72，5 个面板分别看时长、歌手占比、音高稳定度、上下文与有无声纹。音高稳定度按 YIN 基频帧间保持在一半音内的比例分五档，阅读时先看时长与声纹两面板的落差，再看两端音高与孤立行的位置。

[![原论文 Figure 6：Line accuracy of the full system by line attribute (ColorCoded-SD, all 1,740 lines; dashed:…](https://arxiv.org/html/2611.33247v1/errors.svg)](https://arxiv.org/html/2611.33247v1/errors.svg)

*论文图 6：完整系统按行时长占比音高稳定度上下文与声纹有无拆分的准确率（原论文 Figure 6）。*

时长不足 1.5 s 的行仅 0.57 正确，1.5 s 到 2.5 s 回到 0.72，2.5 s 以上达 0.77 到 0.78。无声纹的 11% 行继承邻行标签，仅 0.47 正确，有声纹则为 0.76。占比不足 20% 的小成员与无同歌手邻行的孤立行为 0.70 与 0.66，音高稳定度两端说唱式与持续长音同为 0.69，处于易被他人叠唱的高发区，跨团体准确率从 0.91 到 0.48，随成员相似度下降。

下表汇总了开发中未带来增益的做法，数字来自 ColorCoded 上的中间评估，不可与主表直接比较，阅读时只看方向与量级。重点看数据量、权重编辑、上下文模型与目标歌手提取 4 类，理解编码器天花板与分离条件的边界，为后续选题排除已验证无效的路线。

| Approach | Outcome |
| --- | --- |
| 4× training data (577 → 2,277 songs) | no gain (LOO-centroid 79.8 vs. 80.5) |
| Lead-only training data (600 songs) | tie; −0.027 B3-F1 on IdolSongsJp |
| Closed-form weight edits (gain, ridge) | ≤+0.014 B3-F1, mostly n.s. |
| Within-line / group-level whitening | −0.01 to −0.02 B3-F1 |
| Song-context transformer | oracle-k +1.8, LOO-centroid −2.5 |
| Distilling ECAPA2 into the ResNet | worse than using ECAPA2 |
| Training on the full mix | degraded after 250 steps |
| Fusing Demucs and lead voiceprints | −0.01 to −0.02 B3-F1 |
| Target-singer extraction loop | no gain in grouping |
| Multi-singer line detector | AUC 0.80; no all-line gain |

编码器质量早早饱和，数据从 577 增至 2,277 首无增益，留一质心准确率 79.8% 对 80.5%，纯主唱数据训练反而在 IdolSongsJp 掉 0.027。目标歌手提取循环、歌曲上下文 Transformer 与 Demucs 加主唱融合都无全量增益。人数未知时阈值法仅 23% 到 28% 歌曲数对，平均多估约 1 人，B3-F1 几乎不变而 Acc 掉 2.4 到 4.8 个百分点。商业 Scribe 仅 0.386 与 30.6%，标准流程已超其 +0.255，完整系统超其 +0.314 与 41.8 个百分点。

### 边界、复现核对与选型建议：何时值得用这套流程

调参都在 ColorCoded 歌曲上完成，主表数字对调过组件轻微乐观，IdolSongsJp 未触碰并确认了整体增益，但仅 14 首歌曲，置信区间很宽，如 0.800 的区间为 0.72 到 0.88。只标注单人行，占标注行 84%，IdolSongsJp 仅覆盖 45% 人声时间，11% 行无声纹，行时间来自标注而非强制对齐。领域限于 K-pop 与 J-pop 风格，西洋流行、独唱加嘉宾与其他语言均未验证，与 FruitsMusic 的跨歌曲帧级协议不可直接比较。

工程上最重的代价是卡拉 OK 分离，笔记本 GPU 上每首歌约 3.5 min，编码器本身 ResNet 单窗 0.13 s，ECAPA2 单窗 1.1 s。复现需区分三件事，论文称随基准发布对齐与打分工具并给出官方录音标识、10 Hz 色度指纹与 DTW 脚本，但正文未给出代码仓库，数据集原文定于 2026 年 12 月 24 日起公开，IdolSongsJp 衍生标签明确不分发，适配训练只用自有语料，未在评测集上调参。

选型上，若同团和声重且行短，先换主唱输入再考虑编码器，干声越干净编码器差异越小，未见歌手上 ResNet-ft 更稳。若同团体有多首歌曲且单曲聚类可靠，可叠加黏性加跨歌曲链接，歌曲少或成员音色极近时慎用链接。复现第一步建议用 Demucs 加 ECAPA2 跑通单曲 AHC 基线，再接入卡拉 OK 主唱与回退，最后加 \(\beta\) = 0.2 的黏性解码，并补上人数未知与多人合唱行的验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 重采样，每行两端各剪 0.1 s，3 s 窗 1.5 s 跳步，静音门限为全曲平均幅度的 1/4，短于 1.2 s 或分离后静音则无声纹并回退到时间最近邻，卡拉 OK 模型重叠为 2，10 Hz 色度指纹对齐到 0.25 s 网格，位移修剪测试恢复误差在 0.03 s 内，因果流式与 RTF 原文未披露
- **训练与评测数据**：编码器适配用 2,277 首歌曲 1,765 位歌手 364 位艺人约 125 h 演唱的单项目标注，已剔除评测艺人，评测用 ColorCoded-SD 43 首 30 位歌手 1,740 行与 IdolSongsJp 14 首 18 位歌手 309 行只做测试，另有 319 首 12,914 行双人标注一致率 89.1% 只做参考
- **算力与训练耗时**：适配训练在 16 GB 显存笔记本 GPU 上完成，ResNet-ft 1,000 步 ECAPA2-ft 500 步，卡拉 OK 分离在笔记本 GPU 上每首歌约 3.5 min，单 3 s 窗单线程 CPU 耗时 ResNet 0.13 s 与 ECAPA2 1.1 s，具体 GPU 型号与训练耗时原文未披露
- **核心超参数与配置**：监督对比温度 0.1 同歌负样本权重乘 2，锚定权重 0.2，ResNet-ft 用 AdamW 学习率 10-4 只训第 3 层第 4 层与头，ECAPA2-ft 学习率 5×10-5 只训一维部分，BatchNorm 统计冻结，增强为随机增益与平滑正负 6 dB 均衡，AHC 平均链接余弦距离，黏性系数 0.2 与融合权重 0.75 经留一组验证选出
- **推理速度与部署开销**：参数量 ResNet 15.4M 与 ECAPA2 27.1M，双拼接 42.5M，单窗 CPU 0.13 s 与 1.1 s，双拼接 1.2 s，卡拉 OK 分离每首歌约 3.5 min，RTF 延迟显存与吞吐原文未披露
- **开源产物与协议状态**：论文称随基准发布对齐与打分工具并给出官方录音标识 10 Hz 色度指纹与 DTW 脚本，数据集定于 2026 年 12 月 24 日起在 Hugging Face 公开，IdolSongsJp 衍生标签明确不分发，正文未给出代码仓库，该数据集链接当前不可用，提及的 AcappellaSet 模型链接为第三方提及
- **附录与补充材料要点**：原文未设独立附录，关键补充信息在正文第 7 节局限与文末伦理声明中，含 K-pop 与 J-pop 风格限制，单人行覆盖与行时间来源说明，CC BY-NC 4.0 许可与无音频歌词成员名用户信息，IdolSongsJp 仅非商业评测且标签不分发

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.33247v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：发布43首1740行ColorCoded-SD基准并报告人类独立标注一致率89.1%与对齐评分工具支撑核验。

- 核心优势：在两套语料上以2000次按歌曲自助配对检验确认+0.058与+0.066显著增益并给出输入编码解码直接消融。

- 核心优势：15.4M参数ResNet适配后持平27.1M的ECAPA2且CPU单窗0.13秒约为八分之一实现跨规模效率跃升。

- 主要短板：调参与评测共用ColorCoded歌曲致该侧数字偏乐观，第二语料仅14首309行区间宽且地域限K-pop与J-pop风格。

- 主要短板：曲库链接在成员重组的IdolSongsJp下降0.003并在ILLIT扩散误差，未知人数仅23%-28%正确平均多估约1名。

---

[← 返回 2026-11-26 音频研究日报](/audio-research-portal/posts/2026-11-26/)
