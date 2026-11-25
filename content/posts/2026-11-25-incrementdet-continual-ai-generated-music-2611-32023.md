---
title: "IncrementDET: Continual AI-Generated Music Detection via Enrollment"
date: 2026-11-25
draft: false
tags: [音频深度伪造检测, 持续学习, 数据集, 基准测试]
categories: [论文速递]
description: "针对新音乐生成器不断涌现而通用单模型泛化差与重训代价高的问题，论文提出冻结 MuQ 编码器加每生成器独立针头与 Šidák 校正的 IncrementDET，以 12 步后 97.2% 对 81.4% 的 TPR 与 25 首 93.2% 的新检出证明少样本低遗忘优势，代价是弱针阈值收紧与异源误报仍超目标且仅验证器乐。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32023"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "注册式持续检测如何跟上新音乐生成器"
paper_digest_original_title: "IncrementDET: Continual AI-Generated Music Detection via Enrollment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32023v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32023v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32023v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "持续学习"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对新音乐生成器不断涌现而通用单模型泛化差与重训代价高的问题，论文提出冻结 MuQ 编码器加每生成器独立针头与 Šidák 校正的 IncrementDET，以 12 步后 97.2% 对 81.4% 的 TPR 与 25 首 93.2% 的新检出证明少样本低遗忘优势，代价是弱针阈值收紧与异源误报仍超目标且仅验证器乐。"
paper_digest_reader_sections: [{"heading":"固定单模型在新生成器涌现时为何失准","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"IncrementDET 以注册替代重训的整体流程与信号规格","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结 MuQ 特征与每生成器一根针的训练边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"Šidák 校正与或门判决如何守住整体假正例率","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"十二个生成器序列上的持续检测与少样本注册效果","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"样本量编码器与捷径控制的消融与失效模式","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"何时选用注册式检测与复现前需核对的前提","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["University of Chicago"],"name":"Runbao Du"},{"affiliations":["Fudan University"],"name":"Wei Li"},{"affiliations":["Fudan University"],"name":"Qile He"}]
paper_digest_abstract_sha256: "ddffef05c0bac339a88454423fa4717f0ab4ca9d2b8aea062d82aa611ebc2252"
paper_digest_sidecars: {"citation.bib":{"sha256":"090f0c20137df3e9ce94c0c17229b3d06eb4f479ce0b5678b382b7a22e83a0bf","url":"/audio-research-portal/client/papers/2026-11-25/2611-32023/citation.bib"},"citation.json":{"sha256":"0246e85dd0c84b89e036ea535403ca7157adc5063df7c0c05ea151df4a810620","url":"/audio-research-portal/client/papers/2026-11-25/2611-32023/citation.json"},"citation.ris":{"sha256":"f53ff6a1d9845f97c0d542ffba307133b4321e6d3fda160fefcb7ae6c04985e5","url":"/audio-research-portal/client/papers/2026-11-25/2611-32023/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"58e6d77581c5c38819674e363b84c7f58d04524f624ed6c6a6f50e4f0b55ba10","url":"/audio-research-portal/client/papers/2026-11-25/2611-32023/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "ba1de2ecc5dec376abef92911086b325d4ef078df3dd3c532516b4db50cdd9bd"
paper_digest_api_reader_plan_sha256: "ba88e45369fc7f96a783a6b777a215ac5ad70a25ae5f11ec5a81e109d857d390"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0c0dbf3c2e58e92e708080e64ede2d0a6fd1d53c2574c59c1e1806c69248672d"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "38826c36a34e03e67b30ad2fc4232518f396db020ac7147c296f9c4f1fa909ef"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2fe28abd78aa0cd23ce02cbf9afdc405721f168e83c0db84b991b56b22b56584"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ffa7ef83f6a762170a0d3fa921f1c96177fcda9f54bd585deae8b09d959a935d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 注册式持续检测如何跟上新音乐生成器

> 英文题目：*[IncrementDET: Continual AI-Generated Music Detection via Enrollment](https://arxiv.org/abs/2611.32023v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[持续学习](/audio-research-portal/papers/?concept=method.continual)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)；[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.7/10** | 创新 7.8/10 | 技术严谨 8.1/10 | 实验充分 8.3/10 | 清晰度 7.0/10 | 影响力 6.2/10 | 开源 3.0/10 | 可复现 7.4/10 | 工程/实践 7.1/10


## 👥 作者与机构

- Runbao Du：University of Chicago
- Wei Li：Fudan University
- Qile He：Fudan University

## 📌 核心摘要

**问题与瓶颈：** 持续检测任务的输入是单条乐曲中截取的 5 秒音频窗，输出是该曲来自人类还是已出现的人工智能生成器的二值判定，并在判为生成时给出归属生成器。现有通用检测器把所有生成器混在一起训练一个共享模型，在未见生成器上显著失效，留一生成器评测中通用基线 SpecTTTra 的平均等错误率（EER，误报率与漏报率相等时的错误率，越低越好 ↓）高达 27.4%，在 DiffRhythm 1、DiffRhythm 2、Mureka 与 Suno 上两类检测器在 5% 误报率下的检出率均仅 10% 量级。只用人声音乐建模的人类参考路线缺乏利用新生成器样本的更新机制，而通用模型每次出现新生成器都要用数百条新样本重训或微调，既容易遗忘早期生成器，又带来难以承受的计算开销。

**核心思路与方法架构：** 与最接近的通用基线 SpecTTTra 相比，IncrementDET 保留冻结编码器，把共享分类器换成每个生成器独立的线性针头并用多重比较校正控制误报增长。一条样本的表征流为：截取的 5 秒窗先重采样为 16 kHz 单声道并做 -23 LUFS 响度归一，再送入冻结的 MuQ 编码器，取第 0 层或第 1 层隐状态在时间上求均值和标准差并拼接成 2048 维向量。注册时，该向量与固定的 2000 首人类参考曲一起训练一个类平衡逻辑回归针头，编码器冻结且旧针头不动，仅在 2000 首人类校准曲上按 Šidák 校正重算每个针头的门限。测试时一条曲目只过一次编码器，所有针头以一次矩阵向量乘法并行打分，任一针头超过门限即判为生成并以标准化打分最大者归属，约 7.4 ms 的编码开销主导推理，新增针头几乎不增加时延。

**关键实验与核心代价：** 主基准让 12 个生成器按固定顺序逐个到达，每个新生成器提供 300 条拟合曲，人类侧划分拟合、校准与测试集并设 815 首异源集合，指标为 EER 与在 5% 和 1% 误报率下的检出率。留一生成器评测中 IncrementDET 平均 EER 为 13.2%，低于 SpecTTTra 的 27.4%，在 5% 误报率下平均检出率为 68.0%，高于基线的 40.4%。持续基准最后一步，IncrementDET 对已见生成器的平均检出率为 97.2%，高于全量重训的 81.4% 与经验回放的 74.5%，更新前对新生成器的平均检出率为 57.2%，高于重训下的 27.4%。仅用 25 条新样本注册时，新生成器检出率为 93.2%，其余 11 个生成器保持 99.2%，而微调基线为 84.6% 与 43.1%。消融显示去掉 Šidák 校正后误报率从 3.8% 涨至 33.6%，保留校正仅损失 2.6% 且集中在最弱的两个针头。12 步累计更新耗时为 284 s，约为重训 14 118 s 的五十分之一，单次注册为 9.2 s 至 13.8 s，远低于重训单步的 838 s 至 1 585 s。

**适用边界与深读导览：** 上述结论仅在纯器乐、无人声音乐且预处理与校准分布一致时成立，未覆盖带歌声歌曲与私有微调模型的直接注册，对后者只能依赖同家族针头的迁移检出。在 DiffRhythm 1、DiffRhythm 2、Mureka 与 Suno 四个难检生成器上迁移检出率仍处 10% 量级，MP3 压缩或重采样后若沿用干净门限误报率会大幅上升，异源人类集上 ccMixter 为 4.5% 而 Internet Archive 为 6.6%，且人类参考库老化或混入生成上传会抬高门限，需定期清洗并用部署方自有目录重校准。若想深究 Šidák 门限推导、针头方向相似性与家族迁移机制及劣化鲁棒性与显著性检验，可查阅下方长文中的方法架构、对比实验与消融分析及附录局限性小节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 固定单模型在新生成器涌现时为何失准

流媒体平台上 AI 生成音乐已十分常见，论文引述 Deezer 在 2026 年 6 月某些日期全 AI 曲目超过单日提交半数，而 9,000 人盲听中有 97% 无法区分全 AI 音乐与人类作品。平台需要可靠的 AI 音乐检测来保障内容透明与创作者权益。理想的通用检测器希望用一个模型应对所有生成器，但在新生成器频繁发布的现实中，这种一次训练固定不变的思路很快遇到泛化与更新双重压力。

本文讨论的 12 个文本生成音乐模型集中在 2023 年至 2025 年发布，家族覆盖自回归与扩散等路线，持续涌现意味着检测器必须在只有少量新样本时快速跟进。已有评测多在固定划分上一次打分，SONICS、FakeMusicCaps 与 MoM 虽会留出未见生成器考查泛化，却都不度量学到新生成器的过程。论文回顾指出，即使增大模型与数据，未见生成器上的 EER 仍明显偏高。

#### 持续任务如何度量学前与学后

只建模人类音乐的 MusicDET 可能给分布外样本高似然，缺乏利用新生成样本的机制。通用检测器若用微调跟进则易灾难性遗忘，若全量重训则需保存历史样本并付出高昂计算，这正是持续检测要解决的物理与统计瓶颈。为公平比较不同更新策略，论文把持续检测形式化为按固定顺序到达的序列与人类分布，系统对应不同时刻的模型版本。

评测记录每次更新的 GPU 时间，并用下面公式定义学前与学后两个量，学前看未更新时对新生成器的直接迁移，学后看更新后对已见全部生成器与人类音乐的保持情况。其中 \(D_{t-1}\) 在新生成器到达前固定，\(D_{t}\) 为利用到达时提供的 N 个标注样本更新后的模型。

\[\begin{aligned} \displaystyle\textsc{Pre}(t) \displaystyle=\text{performance of }D_{t-1}\text{ on }g_{t}, \\ \displaystyle\textsc{Post}(t) \displaystyle=\text{performance of }D_{t}\text{ on }g_{1},\dots,g_{t}\text{ and }H. \end{aligned}\]

该数学形式把迁移与遗忘拆成两个可操作的时间点，Pre 只依赖旧模型对新分布的泛化，不含新样本信息，若其值偏高则说明已登记家族的针形方向已覆盖新成员。Post 则同时考核新生成器是否被补上与早期生成器是否被保住，任一维度下滑都会拉低均值。两者的输出直接决定基准的排序方式，后续所有 TPR 与 EER 均在这两个时刻采样。

#### 十二个生成器与人类声源的构成

12 个生成器的到达顺序固定为下表，顺序本身构成评测公平性的一部分，因为先到家族可能帮助后到同族成员，而随机打乱顺序的重复实验则检验结论是否依赖特定排序。表格给出每个生成器的公开版本与生成方式家族，涵盖自回归语言模型、潜在扩散、扩散 Transformer、词元加流匹配以及语言模型加渲染等路线。

| Generator | Version | Family |
| --- | --- | --- |
| MusicGen [12] | medium | Autoregressive LM |
| AudioLDM2 [33] | music | Latent diffusion |
| MusicLDM [8] | – | Latent diffusion |
| Mustango [36] | – | Latent diffusion |
| Stable Audio Open [17] | 1.0 | Diffusion transf. |
| InspireMusic [52] | 1.5B-Long | Tokens + FM |
| DiffRhythm 1 [39] | v1.2 | Flow matching |
| DiffRhythm 2 [25] | – | Flow matching |
| ACE-Step [19, 20] | v1.5 | LM + rendering |
| LeVo [30] | large | LM + rendering |
| Mureka [28] | mureka-9 | Undisclosed |
| Suno [47] | v5, v4.5+ | Undisclosed |

从构成看，前 5 个生成器的曲目取自 FakeMusicCaps 的 10 秒片段，后 7 个由作者自行生成，其中 EvoMusicFake-17K 的 6 个生成器各接受 1,000 条器乐提示。全部曲目限定为器乐，不含人声，这既避免检测器依赖歌声伪影，也意味着带人声歌曲的商业场景尚未被验证。人类声源混合 4 个平台并划分拟合与校准等集合。

### IncrementDET 以注册替代重训的整体流程与信号规格

与最接近的通用基线 SpecTTTra 相比，IncrementDET 保留了用音频特征区分生成与人类的思路，替换的是单模型共享决策与重训更新两处设计。SpecTTTra 用频谱与时域双路 Transformer 处理长歌并以一个分类器覆盖所有生成器，更新需回放或重训。IncrementDET 则冻结 MuQ 编码器，对每个生成器独立训练一个逻辑回归针头，注册只增不改。

信号规格统一为 16 kHz 单声道并归一化至 -23 LUFS，每首只评一个 5 秒无填充窗口，MuQ 输入重采样至 24 kHz。编码器某一层隐状态沿时间池化，取均值与标准差拼接为 2,048 维向量，时间帧数与下采样率原文未披露。向量经该针训练集的标准化平移缩放后与针权重做点积加偏置，多针堆叠即一次矩阵乘。

#### 从波形到针分数的张量路径

以一条 1 秒片段为例，它在 16 kHz 单声道下对应 16,000 个采样点，而实际评测的 5 秒窗口对应 80,000 点，重采样至 24 kHz 后变为 120,000 点送入冻结的 MuQ。标准化可并入权重与偏置而不改变判决，堆叠后一次矩阵乘即得所有针分数。下面的示意对比了两种更新路径的输入规模、耗时与检出效果，上方为通用检测器经回放更新。

[![原论文 Figure 1：A schematic of our work.](https://arxiv.org/html/2611.32023v1/figs/teaser.png)](https://arxiv.org/html/2611.32023v1/figs/teaser.png)

*论文图 1：通用重训与注册式新增的更新代价与检出率对比示意（原论文 Figure 1）。*

上半部分紫色箭头从新生成器指向包含人类歌曲与 300 首新曲目的大方块，经回放学习后进入一个覆盖所有生成器的 SpecTTTra，右侧标注 90.8% 被捕获。下半部分同样从新生成器出发但只指向 25 首的小方块，经注册进入粉色档案，档案中 Generator 1 与 Generator 2 带锁保持不变，顶部新增 New generator 高亮，右侧标注 93.2% 被捕获。

#### 一次前向加一次矩阵乘的推理代价

推理时所有针头并行打分的计算目标是把一条曲目的 2,048 维均值标准差特征映射为每个生成器的原始分数，其中 \(W\) 为堆叠后的权重矩阵，行为已登记生成器数，列为特征维数，偏置长度与行数一致。该式把逐针点积写成一次矩阵向量乘，为分析推理代价提供直接依据，特征来自冻结层时间池化且标准化已折叠进权重。

\[\mathbf{s}(x)=W\bar{f}(x)+\mathbf{b},\qquad W\in\mathbb{R}^{|\mathcal{A}|\times d},\ \mathbf{b}\in\mathbb{R}^{|\mathcal{A}|}.\]

该线性形式的统计直觉是编码器已提供可分特征，针头只需在该空间划出生成器相对人类的方向，矩阵行数随注册增长但每行仍是一次点积。即使登记 12 个生成器，点积开销相对单次编码器前向仍可忽略，实测单窗编码约 7.4 ms 而 12 针点积几乎不增加耗时。输出向量经每针阈值比较进入或门判决，并经标准化得到用于 EER 与归因的最大分数。

### 冻结 MuQ 特征与每生成器一根针的训练边界

特征提取使用冻结的自监督音乐编码器 MuQ 的 MuQ-large-msd-iter 检查点，13 层中按固定规则只选一层，规则是在每个可训练生成器上用 80% 拟合针头并在剩余 20% 上测 EER，取平均 EER 最低层。在留一生成器比较中规则每轮独立执行以防留出泄露，在持续比较中仅用首个生成器拟合轨执行一次，两种情形均选中第 0 或 1 层。

预处理先将音频裁至中央 240 s 以内，重采样至 16 kHz 单声道并响度归一化至 -23 LUFS，再按官方 SpecTTTra 协议取起始于特定偏移的 5 秒窗口，不做补零填充以消除时长捷径。该 5 秒窗重采样至 24 kHz 后送入 MuQ，单层隐状态经时间池化取均值与标准差拼接为 2,048 维，全部人类参考特征只需提取一次。

#### 每生成器一根针的训练目标

每根针的训练目标是在冻结特征上分离该生成器的 N 个样本与固定人类参考集，其中 \(w_{g}\) 为针方向，\(b_{g}\) 为偏置，\(y_{x}\) 取 1 为生成、0 为人类，\(\ell\) 为类别平衡的逻辑回归损失，\(\lambda\) 为固定正则强度对应 C 等于 1。正则强度全生成器固定且损失按类别频数加权，标准化均值方差来自当前针训练集，持续比较中人类参考取 2,000 首固定子集。

\[\displaystyle(w_{g},b_{g})=\arg\min_{w,\,b}\ \sum_{x\in\mathcal{X}_{g}\cup\mathcal{H}_{\text{ref}}}\ell\!\left(y_{x},\ \langle w,\bar{f}(x)\rangle+b\right)+\lambda\|w\|^{2},\]

采用独立线性分类器的物理直觉是每个生成器在冻结空间占据相对稳定的方向，正则与类别平衡使小样本下边界不被人类多数淹没，25 首即可划出可用边界。极端 N 等于 0 时针头不存在，只能靠已登记同族方向迁移，此时均值 TPR 仍有 68.0%。输出方向不仅用于打分，其两两余弦相似还预测跨族迁移，梯度只更新当前针权重。

#### 注册流与测试流的像素对照

下面的总览展开了注册与测试两条路径的完整清单，顶部为 g1 至 g12 到达时间线并标出当前到达的 DiffRhythm 1，紫色箭头为注册流，蓝色箭头为测试流。左侧新生成器 N 首经预处理进入 MuQ，中间经逻辑回归训练针头并用校准集控制 FPR，右侧档案逐层堆叠已登记针头，最右决策面板同时回答是否 AI 与归属。

[![原论文 Figure 2：Overview of IncrementDET.](https://arxiv.org/html/2611.32023v1/figs/method.png)](https://arxiv.org/html/2611.32023v1/figs/method.png)

*论文图 2：从新生成器到达至归档与判决的注册与测试双路径流程（原论文 Figure 2）。*

顶部时间线中已登记的 MusicGen 至 InspireMusic 带锁为灰底实框，到达中的 DiffRhythm 1 为紫色高亮，未登记的 DiffRhythm 2 至 Suno 为灰色虚框，now 标记切分已来与未来。左侧标注 25 首注册不到 10 s，中间绿色大框为 8,800 首拟合集训练每针与 2,000 首校准集设定阈值，MuQ 标星表示冻结。右侧档案 g7 新增高亮，决策柱状显示 g5 超过虚线阈值。

### Šidák 校正与或门判决如何守住整体假正例率

每增加一根针就多一次误报机会，若每针 FPR 为单针误报率且相互独立，整体 FPR 为 1 减 1 减单针率的针数次方，12 针下即使单针很低整体也会显著抬升。阈值取每针在 2,000 首校准人类上的分位数，5% 整体目标对应单针约 0.43%，约由最高的 9 首人类分数决定，因此校准集必须数千量级。由于所有针共享同一特征，不同针分数在人类上正相关。

校正的计算目标是由整体目标反推每针允许的单针率，其中总数为已登记生成器数，整体目标为平台设定的 FPR 目标如 5% 或 1%，阈值为该针阈值，均值与标准差为该针在校准集上的统计量。分位数取自 2,000 首校准人类的针分数分布，整体目标由平台直接设定而单针目标随档案增大自动收紧，重算仅需已存校准分数。

\[\alpha^{\prime}=1-(1-\alpha)^{1/|\mathcal{A}|},\]

Šidák 形式的统计直觉是把整体误报预算按独立假设分摊到每针，独立时整体恰为目标值，正相关时同源人类上实际低于目标，论文在测试集上测得 3.2% 至 4.3% 即偏保守。极端总数增大时单针目标趋小阈值收紧，弱针 TPR 微降而强针几乎不动。输出驱动或门判决，任一针超阈即判 AI，EER 则用最大标准化分排序。

#### 或门判决与归因分数的分工

注册新生成器分四步，提 N 首特征、解正则逻辑回归得针权重、在校准集上算针分数得均值方差、按当前总数重算单针率与全部阈值并存下校准分数。旧针方向与偏置数值不动，仅阈值随总数收紧，这是唯一的代价。12 步后终均值 TPR 从无校正的 99.8% 降至 97.2%，损失几乎全落在 Suno 与 DiffRhythm 1，其余至多降 0.5 个点。

#### 校准集多样性与空针检验

TPR 与 EER 在此分工不同，TPR 用每针阈值判决，EER 用最大标准化分排序，归因准确率在每步保持 97.1% 至 100%。空针检验把每个人类源当生成器拟合，Jamendo、FMA 与 Pixabay 的 EER 为 24.8% 至 41.4%，远差于生成器针平均 0.6%，仅低码率 MP3 的 MagnaTagATune 可分。混合四源的拟合与校准因此必要，单源校准在测试集上 FPR 明显超标。

### 十二个生成器序列上的持续检测与少样本注册效果

评测协议与公平性核查是理解主表的前提，12 个生成器按固定表序与 4 个随机打乱顺序到达，每次到达所有检测器获得相同 N 个新样本与相同人类曲目并记录 GPU 墙钟耗时。所有检测器评同一 5 秒无填充窗口并在同一 2,000 首校准集上定阈，FPR 同时在同源 2,000 首测试集与异源 815 首新源上测量，EER 越低越好而 TPR 越高越好。

全文无人工主观听测，亦无神经代理指标，盲听 97% 仅为动机，阈值与区间来自 1,000 次自助重采样的 95% 置信区间与五顺序均值标准差。留一生成器比较让 12 个生成器轮流被留出，检测器在剩余 11 个上训练后直接测未见者，IncrementDET 用 11 根已登记针头按或门判决。每生成器用 800 首拟合与 200 首测试。

| Held out | SpecTTTra EER | SpecTTTra @5 | SpecTTTra @1 | IncrementDET EER | IncrementDET @5 | IncrementDET @1 |
| --- | --- | --- | --- | --- | --- | --- |
| MusicGen | 23.0 | 58.0 | 41.5 | 2.5 | 99.0 | 95.5 |
| AudioLDM2 | 12.0 | 80.0 | 63.5 | 1.1 | 99.0 | 99.0 |
| MusicLDM | 35.5 | 15.5 | 1.5 | 6.5 | 90.0 | 66.0 |
| Mustango | 24.0 | 42.0 | 22.5 | 0.5 | 100.0 | 99.5 |
| Stable Audio Open | 11.6 | 75.5 | 49.5 | 2.2 | 98.5 | 96.5 |
| InspireMusic | 36.5 | 13.0 | 3.5 | 9.0 | 80.5 | 60.5 |
| DiffRhythm 1 | 47.6 | 4.5 | 1.0 | 31.9 | 14.5 | 6.5 |
| DiffRhythm 2 | 47.6 | 5.0 | 1.0 | 40.6 | 9.0 | 2.5 |
| ACE-Step | 9.0 | 83.0 | 53.5 | 5.0 | 93.5 | 68.0 |
| LeVo | 16.0 | 63.5 | 40.5 | 4.6 | 94.5 | 82.5 |
| Mureka | 35.1 | 10.5 | 1.5 | 33.1 | 11.5 | 0.0 |
| Suno | 30.5 | 34.5 | 11.0 | 21.9 | 25.5 | 9.5 |
| Mean | 27.4 | 40.4 | 24.2 | 13.2 | 68.0 | 57.2 |

均值上 IncrementDET 的 EER 为 13.2% 低于 SpecTTTra 的 27.4%，TPR 在 5% FPR 下为 68.0% 高于 40.4%，12 轮 EER 全部更低且除 Mureka 外均显著，11 轮 TPR 更高且 9 轮显著。但 4 个困难生成器 DiffRhythm 1、DiffRhythm 2、Mureka 与 Suno 双低，平均 TPR 仅 15.1% 对 13.6%。同族迁移解释了优势来源，有同族成员的留出者多被同族针命中。

#### 未更新时的迁移已拉开差距

持续比较的最后一步在 5 个顺序上平均，报告已见全部 12 个生成器的 Post 在 5% 与 1% FPR 下的 TPR，以及更新前对到达者的 Pre 均值，Stored 列为每次更新保留的旧生成器曲目数。IncrementDET 每次用 300 首新曲目与 2,000 首固定人类参考注册，SpecTTTra 则按不更新、微调、EWC、回放与全量重训 5 种策略更新，下表为该终点快照。

| Method | Stored | @5 | @1 | Pre |
| --- | --- | --- | --- | --- |
| SpecTTTra |  |  |  |  |
| No update | 0 | 24.0 ± 5.2 | 14.5 | 17.3 |
| Fine-tuning | 0 | 30.0 ± 3.0 | 17.3 | 17.8 |
| EWC | 0 | 37.8 ± 6.4 | 20.5 | 20.1 |
| Replay | 550 | 74.5 ± 2.1 | 53.1 | 24.8 |
| Retraining | 3,300 | 81.4 ± 1.0 | 56.0 | 27.4 |
| IncrementDET | 0 | 97.2 ± 0.0 | 90.8 | 57.2 |

终点 IncrementDET 在 5% FPR 下为 97.2% 标准差 0.0%，在 1% 下为 90.8%，Pre 为 57.2%，全面高于重训的 81.4%、56.0% 与 27.4%，回放 74.5%、EWC 37.8% 与微调 30.0% 更低。每步已见均值保持 97.2% 至 99.9% 且归因 97.1% 至 100%，首生成器 12 步后仍 96.4% 对重训 79.4%。配对自助差值显示对重训与回放均显著。

#### 时间线曲线揭示遗忘与代价的权衡

下面的三面板时间线把上述终点展开为全过程，横轴分别为已见步数、到达生成器序号与对数累积 GPU 秒，纵轴均为在 5% FPR 下的 TPR。蓝色为 IncrementDET，橙色为重训，绿色为回放，黄色为微调，紫色为 EWC，粉色为不更新，左图看更新后保持，中图看更新前迁移，右图看精度相对累积代价的位置。

[![原论文 Figure 3：Continual comparison in the order of Tab.](https://arxiv.org/html/2611.32023v1/i3_timeline.svg)](https://arxiv.org/html/2611.32023v1/i3_timeline.svg)

*论文图 3：随到达步骤与累积计算代价变化的已见与未见生成器检出曲线（原论文 Figure 3）。*

左图中蓝色几乎贴顶平稳，橙绿高位缓慢下滑，黄紫粉在早期快速崩塌并在 DiffRhythm 段剧烈抖动，说明微调类策略灾难性遗忘。中图蓝色多点高企但在困难生成器处回落，余线长期低位，证实多训旧生成器并未让通用模型准备好迎接新成员。右图对数横轴上蓝色居左上，累积仅 284 s，橙色居右下达 14,118 s 约 50 倍，单次注册 9.2 s 至 13.8 s 对重训数百秒。

### 样本量编码器与捷径控制的消融与失效模式

为剥离 MuQ 编码器红利，消融在同一冻结特征上训练单个逻辑回归头，分别按重训、回放与微调更新，并加入类均值与语音持续学习方法对照。终点仍为持续比较最后一步五顺序均值，FPR 在同源测试集 5% 目标下测量，New 与 Old 为 25 首新到时的新旧 TPR，Attr 标记能否归因，下表并列给出存储量与 3 类指标，全部运行使用 1 张 RTX 3060。

| Method | Stored | @5 | @1 | FPR | New | Old | Attr. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| One classifier |  |  |  |  |  |  |  |
| Retrained | 3,300 | 95.7 | 77.7 | 5.2 | 82.3 | 97.1 | × |
| Replay | 550 | 92.9 | 73.9 | 6.0 | 80.0 | 96.3 | × |
| Fine-tuned | 0 | 84.4 | 66.0 | 5.6 | 86.3 | 96.0 | × |
| Class means | 0 | 9.3 | 4.8 | 5.1 | 5.0 | 5.7 | ✓ |
| IncrementDET | 0 | 97.2 | 90.8 | 3.5 | 93.2 | 99.2 | ✓ |

IncrementDET 在 5% 下 97.2%、1% 下 90.8%、FPR 3.5% 守住目标，而单头即使重训 3,300 首也仅 95.7% 与 77.7% 且 FPR 5.2% 超标，1% 下差距 13.0 个点显著。25 首时 New 为 93.2% 对 80.0% 至 86.3%，Old 为 99.2% 对 96.0% 至 97.1%，类均值仅 9.3% 与 4.8%，RAWM 与 RegO 不超微调。单头无法归因而 IncrementDET 附带正确归因。

#### 少样本注册的收益与微调遗忘

样本量消融从每轮留一比较出发，让留出生成器以嵌套集合 N 等于 0、25、50、100、300 与 700 到达，N 等于 0 为更新前模型。IncrementDET 注册单针，SpecTTTra 按微调 10 轮与回放更新，均用同一 2,000 首人类曲目并在持续测试集上评价，下表以百分比报告新生成器与另 11 个旧生成器在 5% FPR 下的 TPR 均值，拟合集每生成器 800 首。

| N | IncrementDET New | IncrementDET Old | Fine-tune New | Fine-tune Old | Replay New | Replay Old |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 68.0 | 99.4 | 40.6 | 94.8 | 40.6 | 94.8 |
| 25 | 93.2 | 99.2 | 84.6 | 43.1 | 58.5 | 91.3 |
| 50 | 96.7 | 99.2 | 89.7 | 45.6 | 71.4 | 92.0 |
| 100 | 97.3 | 99.2 | 93.7 | 48.4 | 81.4 | 91.0 |
| 300 | 98.4 | 99.2 | 96.2 | 50.6 | 90.8 | 90.7 |
| 700 | 98.8 | 99.2 | 97.2 | 47.5 | 94.1 | 89.5 |

N 等于 0 时 IncrementDET 靠迁移已 68.0% 对 40.6%，旧端 99.4% 对 94.8%。25 首时新端达 93.2% 而微调 84.6%、回放仅 58.5%，旧端保持 99.2% 而微调崩至 43.1% 且随 N 增大仅回升至 47.5% 至 50.6%，回放旧端 89.5% 至 92.0% 但新端需 300 首才 90.8%。10 个生成器 25 首即达 97.5% 以上，仅 DiffRhythm 1 与 Suno 例外。

#### 校正缺失与捷径移除的代价验证

Šidák 缺失时 5% 目标下测试集 FPR 从 3.8% 膨胀至 33.6%，异源从 5.5% 至 41.0%，加入后回落至 3.2% 至 4.3% 与 5.5% 至 7.9%，终均值仅从 99.8% 降至 97.2% 且集中于最弱两针。时长捷径方面 120 秒输入下仅时长即在 5 个 FakeMusicCaps 轮次达 0% EER，故统一 5 秒无填充窗。MP3 与重采样使 EER 升高但仍低于重训，阈值须在退化人类上重定。

### 何时选用注册式检测与复现前需核对的前提

方法假设边界首先是器乐限定，数据集剔除人声以避免依赖歌声伪影，但商业 Suno 与 Mureka 默认带人声歌曲尚未验证，扩展需按伴奏与人声分针或换用人声编码器，结构无需改动。其次全部音频经 16 kHz 单声道与响度归一化，高于 8 kHz 内容被移除而不适合全带宽残差取证，作者认为一次重采样即消失的线索不可靠。早期审计发现污染致 Suno 针大幅波动，最终剔除 53 首。

未验证的部署条件集中在人类源漂移与退化处理，异源 815 首上即使校正仍达 6.9%，平台须用自家目录重定校准。MP3、重采样与均衡改变人类分数分布，干净阈值下 FPR 可升至 30% 量级，在退化人类一半上重定另一半上评价即回到 4.5% 至 5.4%，IncrementDET 重定仅需人类退化曲目无需重训。1% 严格目标下仍 90.8% 但弱针损失集中，误报会影响音乐人收入。

#### 复现规格与公开状态的核对要点

训练与评测数据为 EvoMusicFake-17K 含 6 个新生成器 6,000 首与 4 平台 11,111 首人类曲目，另用 FakeMusicCaps、自采 Suno 等及 FMA 与 MagnaTagATune，每生成器 800 拟合 200 测试，人类 8,800 拟合与 2,000 校准。计算硬件为 1 张 RTX 3060，时间为不含评测的墙钟时间，单次注册 9.2 s 至 13.8 s，12 步累积 284 s 对重训 14,118 s。关键超参为冻结 MuQ 第 0 或 1 层与 C 等于 1。

推理为单次编码器前向加一次矩阵乘，单窗编码约 7.4 ms，加针几乎不增耗时，显存与参数量原文未披露。论文称将发布提示词与收集脚本，但本次证据清单中无可验证的可用链接，只能按证据写原文未披露，未确认任何作者资源当前可用，亦无试听页可对照。工程选型上当新生成器频繁涌现且每批仅数十首时优先试注册。

#### 私有版本漂移与人类数据维护的分工

注册机制上一个针只描述某一产品版本采样下的生成器分布，若商业服务不公告换模，旧针会过时，需用新输出重新注册一次。原文未测针过时速度，但提出未来工作是自动察觉已注册生成器输出变化并决定何时重注册，由于单次注册仅需数秒，一旦发现变化重注册本身开销很小。未公开的私有微调模型在被识别出输出前无法注册，只能靠现有针迁移覆盖，同族迁移结果提示已注册针可能对同源微调变体仍有效，有待未来检验。

人类参考数据的维护是另一项经常性分工，数据集既会老化，又可能混入开放平台的生成上传，越是贴近当前风格的新数据集越暴露于近期生成上传。附录审计表明针本身可在人类数据中筛出疑似生成上传，筛查对严格阈值有可度量影响，因此作者把人类数据筛查列为必要经常任务，并把自动化筛查作为未来工作，而非一次性清洗。

向视觉扩展时结构无需改动，只有编码器与音频相关。原文提炼三点可迁移分工：冻结特征上每生成器一线性分类器在严格误报率下优于在全部存量数据上重训的单一分类器；每增一分类器就多一次误报机会，Šidák 校正与模态无关；基准在每次更新前后测新旧生成器并记录更新耗时，该协议可直接用于图像与视频生成器的持续评测。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32023v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：持续基准最后一步97.2%显著高于全量重训81.4%与回放74.5%，更新前迁移57.2%高于重训27.4%且留一平均EER13.2%低于27.4%。

- 核心优势：独立针头与Šidák校正均有直接因果消融，去校正误报从3.8%涨至33.6%，单分类器对照误报超标且失去归属能力。

- 核心优势：冻结MuQ特征上逐生成器逻辑回归针头加Šidák门限的四步注册与一次矩阵向量推理，单次注册仅9.2至13.8秒且编码7.4毫秒主导。

- 主要短板：仅纯器乐无人声验证，DiffRhythm1/2与Mureka及Suno迁移检出仍处10%量级且异源与劣化需重设门限否则误报大幅上升。

- 主要短板：论文未提及代码链接与模型权重，未给出EvoMusicFake-17K数据集获取链接且无可验证官方资源URL。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
