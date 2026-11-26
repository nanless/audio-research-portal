---
title: "On-Policy Codec Distillation for Efficient All-in-One Video Generation"
date: 2026-11-26
draft: false
tags: [视频生成, 知识蒸馏, 高效推理]
categories: [论文速递]
description: "针对多条件拼接导致注意力成本二次增长的问题，论文用 H.264 运动向量与残差剪掉平均 66% 条件词元，并以同策略自蒸馏训练 LoRA 适配器，在接近教师质量下实现最高 2.30× 去噪加速与最高 73% 缓存显存下降。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31184"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用视频编码器信号剪掉冗余条件词元并以自展蒸馏保持质量"
paper_digest_original_title: "On-Policy Codec Distillation for Efficient All-in-One Video Generation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31184"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31184.pdf"
paper_digest_primary_task: "视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多条件拼接导致注意力成本二次增长的问题，论文用 H.264 运动向量与残差剪掉平均 66% 条件词元，并以同策略自蒸馏训练 LoRA 适配器，在接近教师质量下实现最高 2.30× 去噪加速与最高 73% 缓存显存下降。"
paper_digest_reader_sections: [{"heading":"条件拼接为何让可控视频生成的注意力成本失控","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"CodecOPSD 双分支流水线与适配器插入位置","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"从 H.264 运动向量与残差到 VAE 词元掩码","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"同策略自蒸馏如何用丢弃词元做特权监督","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"自研多条件模型与三款开源大模型的加速实测","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"丢弃率与师生差距的权衡及单条件自由丢弃区间","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现核对与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Adobe Research","University of Virginia"],"name":"Boyang Wang"},{"affiliations":["Adobe Research"],"name":"Kevin Blackburn-Matzen"},{"affiliations":["Adobe Research"],"name":"Oindrila Saha"},{"affiliations":["Adobe Research"],"name":"Matheus Gadelha"},{"affiliations":["University of Virginia"],"name":"Zezhou Cheng"}]
paper_digest_abstract_sha256: "0e9a62b462e92914a3a16eb963251a521633ff7c0766b5323c14beee57f57473"
paper_digest_sidecars: {"citation.bib":{"sha256":"6440d5e79e3843b78618607693fcbe59f1102e5137f1d564ff2e1ed1cd6877ed","url":"/audio-research-portal/client/papers/2026-11-26/2611-31184/citation.bib"},"citation.json":{"sha256":"3652af758ff2bb66d8435f20436209c96a8aa56518d002f20d1a7f0eb53cd34e","url":"/audio-research-portal/client/papers/2026-11-26/2611-31184/citation.json"},"citation.ris":{"sha256":"7b546d577118895c35add8101cadc356034cc1368fbbddcf47638b76875ed8af","url":"/audio-research-portal/client/papers/2026-11-26/2611-31184/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"650e7a9f088d51c9c644d1dfac1653768e8c58da9eade50a85235beffc1be828","url":"/audio-research-portal/client/papers/2026-11-26/2611-31184/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "b86c3247513c77c838a78346308733ac3ccf71068a1d1280d285851aa68b8ba2"
paper_digest_api_reader_plan_sha256: "31e083a5966ba135c8eba2844daae2f4b477dc29607c63596e58623a9324c7c5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b1700be65fb1cfb971ce4c122d066110a63a44ce9cd1203c9bae33f407b3ae0c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "45e7394498b6548c7e20c68a5cccc8859d6d15adc672332b8fbe1c53ac5e2b24"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7f3ada9be675b93c13aab4b6badf67d5e7070d8fe9c19b86436715cbee55fee3"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0dc60ca022266d408d4b1da8f101a9d2ddf1467dc1809a345ff0b1211ad4e885"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用视频编码器信号剪掉冗余条件词元并以自展蒸馏保持质量

> 英文题目：*[On-Policy Codec Distillation for Efficient All-in-One Video Generation](https://arxiv.org/abs/2611.31184)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-research-portal/papers/?concept=task.video-generation)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)
- **研究重点**：[高效推理](/audio-research-portal/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 8.1/10 | 技术严谨 7.6/10 | 实验充分 7.9/10 | 清晰度 7.1/10 | 影响力 3.8/10 | 开源 8.0/10 | 可复现 7.3/10 | 工程/实践 8.2/10


## 👥 作者与机构

- Boyang Wang：Adobe Research；University of Virginia
- Kevin Blackburn-Matzen：Adobe Research
- Oindrila Saha：Adobe Research
- Matheus Gadelha：Adobe Research
- Zezhou Cheng：University of Virginia

## 📌 核心摘要

**问题与瓶颈：** 一体化视频生成需要同时接受身份图、涂鸦、深度图、人体姿态与运动轨迹等多种控制信号，模型把每种条件经 3D VAE 编码成词元后与噪声隐变量拼接成单一长序列做自注意力去噪。当条件数量、帧数与分辨率增长时，注意力开销随序列长度二次增长，条件词元迅速主导计算。以往加速多从减少采样步数、FlashAttention、量化、特征缓存或稀疏注意力入手，很少在源头削减条件词元。实际上静态背景逐帧重复而运动路径只占少数像素，条件中存在大量时空冗余，而经典视频编码器正是为去除这类冗余而设计的。

**核心思路与方法架构：** 与 FullDiT 等把全部条件词元直接拼接的做法相比，本文的增量是先用标准 H.264 的运动向量与残差做词元筛选，再用在位自蒸馏让带 LoRA 的学生适配缺失输入，推理时不再需要教师。以 1 秒条件视频为例，条件先并行走两路，一路经冻结的 VAE 编码为条件词元，另一路经 CPU 端 x264 编码得到每像素块的运动向量与残差，映射到每个覆盖 32×32 像素与 8 帧的 DiT 词元上形成运动分数与残差分数。基于这两个分数，阈值模式按固定阈值保留变化显著的词元，优先级模式按能量值排序以满足指定丢弃预算，不同模态采用不同阈值与编码预设。保留词元保持原有 3D RoPE 位置并与噪声隐变量拼接输入 DiT，VLM 路径的视觉词元也用同一信号剪枝。训练时教师与学生共享同一基座，教师冻结并额外看到被丢弃词元作为特权信息，学生在自身 rollout 的高噪声前 8 个状态上匹配教师速度场，LoRA 仅作用于条件词元投影。这种设计直击冗余根源，因为被保留的是真正新增内容，可推断的重复区域交由学生补全。

**关键实验与核心代价：** 在自研 16 种条件视频模型上，阈值剪枝平均丢弃 66% 的条件词元，去噪在无 KV 缓存时加速 1.54× 到 2.30×，在 KV 缓存模式下加速 1.15× 到 1.37× 且缓存内存缩小 62% 到 73%。同一预算下与随机丢弃、降分辨率、DINO 注意力与显著性图对比，免训练的编解码剪枝在 12 项指标中 8 项最优，叠加在位自蒸馏后在微调组 12 项中 10 项最优并接近全条件教师，FID 为 23.0 对 22.4，FVD 为 113.8 对 118.0。VBench 六维得分变化均在 1.0 分以内，20 名评分者的 384 次盲测中有 92% 认为条件遵循不差于教师，88% 认为视觉质量不差于教师。扩展到 MiniMax-H3 Ref2VA 平均丢弃 71.6% 的 DiT 词元与 36.2% 的 VLM 词元，加速 1.87× 且总分下降不超过 0.6 分，更多参考、更高分辨率与更长帧数下最高加速 3.72×。MiniMax-H3-Image 在 2048×2048 分辨率下加速 3.06×，Cosmos3 在视频延续与视频到音频等任务上最高加速 2.30× 且指标保持在教师 3 次种子的正负 2 倍标准差内。主要代价是每例约 1.13 秒的 CPU 编解码筛选时间，但可与 VAE 与文本编码并行，分割与轨迹跟踪两项未取得组内最优。原文未提供可核对的听感主观 MOS，音频侧仅用多模态裁判的匹配概率评价。

**适用边界与深读导览：** 结论成立的前提是条件冗余以时域重复与平坦区域为主，且阈值与编码预设按模态调优，运动轨迹中静止后消失的点可能与遮挡混淆，边界框与模糊等细节模态需更低阈值。本文未验证极端相机运动与高频纹理下的保守性，也未给出端到端延迟与训练能耗的完整拆解。若想深究运动分数与残差分数的映射公式、阈值随分辨率缩放规则与四处编解码读取修正，可查阅下文方法概述和架构与细节详述，若想核对消融与跨模型扩展，可查阅实验结果与补充消融。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Kiteretsu77/CodecOPSD> — 链接可访问（HTTP 200）；README 已验证包含安装、推理文档（未见微调文档）

- 论文首页资源：<https://kiteretsu77.github.io/CodecOPSD_website/> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/HikariDawn/CodecOPSD-H3-Ref2VA> — 链接可访问（HTTP 200）；含权重文件（.safetensors）

- 模型相关资源：<https://huggingface.co/HikariDawn/CodecOPSD-H3-Image> — 链接可访问（HTTP 200）；含权重文件（.safetensors）

- 演示资源：<https://huggingface.co/spaces/HikariDawn/CodecOPSD-H3-Ref2VA> — 链接可访问（HTTP 200）

- 演示资源：<https://huggingface.co/spaces/HikariDawn/CodecOPSD-H3-Image> — 链接不可用（HTTP 401）

- 论文所列链接：<https://huggingface.co/akhaliq/Minimax-H3-ref2v_Real_2_Anime> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/ostris/minimax_h3_ref2va_jacked_lora> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/MATLOWAI/MiniMax-H3-ORB360-CardSpin> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/akhaliq/minimax-h3-image-pdmd-2step> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/pdmd2026/pdmd_2NFE_lora> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/Pika-Labs/Pika-H3-Flex> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 条件拼接为何让可控视频生成的注意力成本失控

要把午后在家的一段生活变成视频，创作者可能同时拿出客厅沙发的照片、房间的手绘草图、两个人的姿态骨架、柯基的身份图以及它在地板上的运动轨迹。当前可控视频模型把每种条件都编码为词元并拼接到同一输入序列，文本之外每增加一张参考图或一段控制视频都会拉长序列，自注意力计算随条件数量二次增长，控制越精细负担越沉重。

条件信号本身高度可压缩，静态背景在各帧重复出现，运动轨迹只占据少量像素，素描与深度图的平坦区域也携带大量重复信息。已有加速路线主要减少采样步数、引入 FlashAttention、量化、特征缓存或稀疏注意力，它们与条件数量正交，并没有在源头减少条件词元。降低分辨率或随机丢弃虽能缩短序列，却会抹掉细节或破坏整体布局。

论文把输入定义为文本加 1 至 5 种视觉条件，每种条件渲染为图像或视频并经冻结 VAE 编码为条件词元，再与噪声隐变量拼接后送入 DiT 去噪，输出为受控视频。16 种条件覆盖分割、框、身份、草图、边缘、深度、法线、姿态、稀疏与稠密跟踪、模糊、灰度、插帧延续、修复与外扩。核心矛盾是识别何为真正新增信息，并在丢弃多数词元后仍让模型忠实还原被剪内容。

### CodecOPSD 双分支流水线与适配器插入位置

CodecOPSD 由两部分组成，编码器剪枝负责按 H.264 信号丢弃冗余条件词元，同策略自蒸馏负责让模型适应剪枝后的输入。与最近基线相比，它保留 VAE 与 DiT 结构不做修改，把随机丢弃、降分辨率、DINO 注意力与显著性选择的打分规则替换为运动向量加残差的编解码规则，把在带真值片段上的有监督微调替换为在学生自展状态上的教师监督，只在条件词元投影上增加可训练 LoRA。

下图左侧展示剪枝与 VAE 编码并行、保留词元与噪声隐变量拼接的完整数据流，右侧展示冻结教师在学生轨迹状态上提供密集监督的训练闭环。阅读时先沿底部条件经编码器到输入序列的箭头看主路径，再看右侧教师不展轨而学生在同一含噪状态上被比较的分工，图中还标出每类条件不同的丢弃比例与总体丢弃示例。

[![原论文 Figure 3：Pipeline of CodecOPSD. Left: Codec pruning runs in parallel with the VAE encoder and drops…](https://arxiv.org/html/2611.31184v1/pipeline.png)](https://arxiv.org/html/2611.31184v1/pipeline.png)

*论文图 3：编码器剪枝与自蒸馏双分支流水线，展示条件编码拼接与师生特权监督闭环（原论文 Figure 3）。*

像素显示底部有遮罩首帧、多视角身份、第二身份、草图、运动点与框等条件，顶部学生网络含前馈与自注意力模块并输出生成视频，右侧教师保留全部条件词元而学生只见保留部分，两者在相同含噪状态上输出速度并计算平方误差。剪枝可选地作用于 VLM 的视觉词元，ViT 仍读全图而在进入语言模型前丢弃。该设计让推理时只需学生与保留词元，教师不再参与。

信号规格上内部模型 VAE 为 32× 空间与 8× 时间压缩，每个隐单元对应一个 128 维词元并保留原始三维旋转位置。剪枝在 CPU 上与 GPU 的 VAE 与文本编码并行平均 1.134 秒即可完成。推理支持 KV 缓存模式条件键值在首步计算一次后复用后续步骤仅输入噪声词元因此加速随条件数、帧数与分辨率增长而放大。

### 从 H.264 运动向量与残差到 VAE 词元掩码

#### 编码器信号与词元分数

H.264 把视频分为帧内编码帧与预测帧，帧内块从同帧已编码邻块预测，预测帧块从前帧搜索最佳匹配并记录运动向量，匹配误差存为残差。论文只用这两类信号不涉及变换量化与熵编码。直接读取解码器残差会把平坦背景与运动形体内部误判为新内容因此增加四项修复，未编码帧内块与帧间块置 128 表零残差，从解码器亮度平面而非 RGB 转换读取并把跳过宏块视为静止。

每个 DiT 词元覆盖像素空间约 32×32 像素在 8 帧上的区域而编码器块为 4×4 至 16×16 像素。为适应分辨率还按条件尺寸对阈值做缩放。要把稠密像素信息变为每词元标量论文对词元覆盖的像素集合取运动模长的最大值对残差绝对值取空间均值后再取时间最大值分别得到运动分数与残差分数。

\[\begin{aligned} \displaystyle M_{i} \displaystyle=\max_{t\in\mathcal{F}_{i}}\max_{p\in\mathcal{P}_{i}}\|m_{t}(p)\|, \\ \displaystyle R_{i} \displaystyle=\max_{t\in\mathcal{F}_{i}}\operatorname*{mean}_{p\in\mathcal{P}_{i}}\big|r_{t}(p)\big|. \end{aligned}\]

该式把位移与新增误差压缩为两个标量，最大值捕捉区域内任何移动，极端静止时运动分数接近零，均值则反映平均新内容，平坦背景两者皆低而被丢弃，边缘与运动物体至少一项偏高而被保留。归一化后两者还组合为可排序能量输出直接驱动阈值保留或按能量从低到高丢弃。

#### 阈值保留与能量排序

阈值剪枝为每段视频寻找平衡点适于压缩难度差异大的视频。它用或逻辑保留运动或残差任一超阈的词元阈值在标准尺寸下定义并按高宽缩放残差阈值对短边超 1,024 像素的图像另做调整。运动轨迹与框采用更低阈值以留住小而关键的变化身份图仅有单帧残差决定。

\[b_{i}=\begin{cases}1,&\text{if }M_{i}\geq\tau_{m}\text{ or }R_{i}>\tau_{r},\\ 0,&\text{otherwise},\end{cases}\]

或逻辑的直觉是移动与新生只要出现其一就值得保留，极端全静态视频两者皆低则大量丢弃，高运动视频则自动保留更多。掩码按元素乘到各条件词元上未剪枝的噪声隐变量保持完整。优先级排序则按能量从低到高丢弃运动项以 1 加权重倍放大低残差词元的能量实践中权重取 1。

下图分四步说明从像素到词元的映射，先看帧内预测箭头与帧间最佳匹配箭头的含义，再看块等于最佳匹配加残差的等式，最后看词元级运动与残差分布如何经阈值或排序得到保留词元。阅读时注意运动向量为绿色箭头残差为橙色块分布图中蓝色对应运动强度橙色对应残差大小两条路径分别对应阈值保留与能量排序。

[![原论文 Figure 2：From codec signals to kept tokens. (a) An I-frame predicts each block from its coded neighbours.](https://arxiv.org/html/2611.31184v1/codec.png)](https://arxiv.org/html/2611.31184v1/codec.png)

*论文图 2：帧内预测与帧间运动残差示意，以及像素块分数汇聚到词元掩码的剪枝路径（原论文 Figure 2）。*

像素显示帧内块从已编码邻块外推预测帧块指向前帧匹配位置残差为两者之差词元级示例仅保留少量词元保留部分集中在人体轮廓与运动边缘。以 1 秒输入为例条件视频经 x264 编码一次得到每像素运动与残差同时 VAE 并行编码得到条件词元掩码按阈值动态决定保留率并拼接到序列。VLM 分支复用同一信号视频参考丢视觉词元图像参考同时参考 DiT 丢弃位置实现一次剪枝两处复用。

### 同策略自蒸馏如何用丢弃词元做特权监督

#### 特权师生与速度预测

师生为同一基座模型教师冻结并看到全部条件词元学生共享基座权重并在条件词元投影上增加可训练 LoRA。学生输入为保留词元教师额外看到被剪掉的词元作为特权信息两者条件类型完全相同不引入额外模态。训练只更新 LoRA 噪声词元与 VLM 词元投影不加适配器推理时教师不再需要。

在同一含噪状态下两者分别预测速度场教师因多看被剪内容而能给出密集指导。符号中 \(x\) 为含噪隐变量，\(\sigma\) 为噪声水平，保留词元与被剪词元分别记为不同集合，\(\theta\) 为基座参数，\(\phi\) 为 LoRA 参数。该设定让师生输入除特权词元外完全一致速度差异直接反映被剪信息的缺失程度。

\[\begin{aligned} \displaystyle v_{\mathrm{T}}(x,\sigma) \displaystyle=v_{\theta}(x,\sigma;\tilde{\mathcal{C}}\cup\mathcal{C}^{\star}), \\ \displaystyle v_{\mathrm{S}}(x,\sigma) \displaystyle=v_{\theta,\phi}(x,\sigma;\tilde{\mathcal{C}}). \end{aligned}\]

该设计的统计直觉是保留词元已是最具代表性的子集被剪区域可由其推断差距大小适中可学。极端学生丢弃过多则差距过大难以推断教师也被剪则指导不足两者都会退化。输出的速度差直接构成监督信号驱动学生以少量词元模仿全量指导从而在推理时仅用保留词元也能接近教师行为。

#### 自展轨迹与多状态监督

学生先无梯度展出自身轨迹从纯噪声出发沿推理采样器的多个递减噪声水平逐步去噪。每步用学生自己的速度更新状态暴露其在真实推理中会遇到的误差而非有监督微调中加噪真值状态。自研模型取 30 步中的前 8 步，MiniMax 模型为省算力从较小网格随机抽取状态。

\[x_{k+1}=x_{k}+(\sigma_{k+1}-\sigma_{k})\,v_{\mathrm{S}}(x_{k},\sigma_{k}),\]

该式沿学生分布产生监督位置早期高噪声状态决定整体布局后期低噪声状态细化纹理细节。其中 \(x_{k}\) 为第 \(k\) 个状态，\(\sigma_{k}\) 为对应噪声水平，输出的状态序列决定后续在哪些状态上比较师生。单状态监督每步更快但轨迹跟踪略差多状态监督覆盖更完整因而更稳实践中可按算力权衡选择。

在每个被监督状态上师生输入相同状态与噪声水平损失为两者速度预测的平方误差在被监督集合上的平均再对条件与噪声取期望整个目标不含真值。符号 \(\ell_{k}\) 为单状态误差集合大小决定平均分母期望覆盖训练条件与初始噪声。

\[\begin{aligned} \displaystyle\ell_{k} \displaystyle={\big\|v_{\mathrm{S}}(x_{k},\sigma_{k})-v_{\mathrm{T}}(x_{k},\sigma_{k})\big\|_{2}^{2}}, \\ \displaystyle\mathcal{L}_{\mathrm{OPSD}}(\phi) \displaystyle={\mathbb{E}_{\mathcal{C},\epsilon}\Big[}\frac{1}{|\mathcal{N}|}\sum_{k\in\mathcal{N}}\ell_{k}{\Big]}, \end{aligned}\]

平方误差的直觉是匹配向量场方向与大小差距大时梯度推动 LoRA 恢复被剪内容差距小时逐渐接近教师。梯度只流经学生 LoRA 教师始终冻结。自研模型用 AdamW 学习率 1e-4 训练 2K 步，MiniMax 用较小学习率训练 3,000 步，推理时统一使用分类器无关引导以增强条件遵循。

### 自研多条件模型与三款开源大模型的加速实测

#### 相同预算下的剪枝对比

评测公平性上测试片段取自 VidGen-1M 的 2,000 片段池主表用 400 个片段各带 1 至 4 个条件推理主要在 512×768 与 81 帧下以 30 步采样。所有剪枝方法控制相同平均丢弃率质量用 FID、FVD 与 LPIPS 衡量分布与真值差距条件遵循各用专用指标预处理耗时单独记录。

|  | Method | Prep. (s) ↓ | Quality and Fidelity FID ↓ | Quality and Fidelity FVD ↓ | Quality and Fidelity LPIPS ↓ |
| --- | --- | --- | --- | --- | --- |
|  | Teacher | 0 | 22.4 | 118.0 | 0.273 |
| Training-free | Codec (ours) | 1.13 | 24.5 | 132.3 | 0.307 |
|  | SFT, Codec (ours) | 1.13 | 23.8 | 130.9 | 0.297 |
| Fine-tuned | CodecOPSD (ours) | 1.13 | 23.0 | 113.8 | 0.278 |

训练无关组中本方法在 12 项中的 8 项最优，FID 为 24.5、FVD 为 132.3、LPIPS 为 0.307，明显好于随机与显著性，降分辨率崩到 FID 为 56.3 与 FVD 为 381.1。微调后 CodecOPSD 在 12 项中的 10 项最优，FID 为 23.0、FVD 为 113.8、LPIPS 为 0.278，接近教师的 22.4、118.0、0.273。预处理仅 1.13 秒远低于 DINO 的 23.8 秒与显著性的 75.0 秒且与 VAE 编码并行。

#### 去噪时间与缓存显存

下图在 512×896 与 121 帧、8 步采样、单张 H200 上测量 1 至 5 个条件的变化趋势。阅读时先看横轴条件数再看左侧无缓存耗时两条曲线的分叉速度最后看右侧有缓存耗时与缓存显存柱状图的同步下降两侧纵轴分别为去噪秒数与缓存显存占用加速倍数直接标在曲线上方。

[![原论文 Figure 4：Denoising time and memory change.](https://arxiv.org/html/2611.31184v1/stress.svg)](https://arxiv.org/html/2611.31184v1/stress.svg)

*论文图 4：不同条件数下去噪耗时与缓存显存变化，展示加速倍数随条件数增长趋势（原论文 Figure 4）。*

像素显示无 KV 缓存时教师耗时随条件数快速上升本方法增长缓慢加速从 1.54× 升至 2.30×。有 KV 缓存时条件键值首步计算后复用注意力只从噪声词元指向条件加速为 1.15× 至 1.37×缓存小 62% 至 73%。该模式依赖条件词元不关注噪声词元的设计参考关注噪声的模型不采用缓存。感知上 VBench 6 维变化均在 1.0 分以内，20 位评分者的 384 个盲测回答多数认为持平或更好。

#### 跨模型与多任务扩展

下表在 MiniMax-H3 Ref2VA 的 237 个参考最丰富的 OmniVBench 案例上按任务族报告行取结构、跨任务与总体列保留任务、DiT 丢弃率、加速比、技术质量与参考保真度。教师用 50 步采样质量含技术、美学、物理、参考与指令 5 维加速为稠密耗时除以本方法耗时。

| Task | Token Drop (%) DiT | Denoise Speedup | Quality ↑ Technical | Quality ↑ Reference Fidelity |
| --- | --- | --- | --- | --- |
| Structure | 79.7 | 2.21× | 16.0−0.2 | 86.3+5.1 |
| Cross | 77.9 | 2.55× | 19.2+0.2 | 77.2−0.4 |
| Overall | 71.6 | 1.87× | 17.9 ± 0.0 | 76.7 +1.6 |

像素显示总体丢 71.6% 的 DiT 词元与 36.2% 的 VLM 词元加速 1.87×总体无得分下降超 0.6 分。结构任务加速 2.21×跨任务加速 2.55×运动与风格的参考保真度分别提升 5.8 与 5.0 分叙事指令实现提升但参考保真度有所下降。随参考数、帧数与分辨率增大加速升至 3.72× 且质量持平高分辨率下本方法仍可放 16 图而稠密模型显存溢出。

下表在 Cosmos3-Nano 上按任务报告行取分割、延续、视频到音频与视频到动作为代表列保留任务、指标、教师均值正负 2 倍标准差、蒸馏结果、丢弃率与加速比。教师值为 3 种子平均评测用官方流程与单张 A100 降幅按固定比例选择以留在教师区间。

| Task | Quality Metric | Quality Dense (teacher) | Quality +CodecOPSD | Efficiency Token Drop (%) | Efficiency Denoise Speedup |
| --- | --- | --- | --- | --- | --- |
| Segmentation | mIoU↑ | 0.715 ± 0.035 | 0.751 | 84.2 | 1.93× |
| Continuation | Physics-IQ↑ | 50.6 ± 5.2 | 50.6 | 89.4 | 1.93× |
| Video-to-audio | AV match↑ | 0.864 ± 0.017 | 0.866 | 70.0 | 2.30× |
| Video-to-action | EE err. (cm)↓ | 2.16 ± 0.06 | 2.21 | 44.0 | 1.21× |

教师分割 mIoU 为 0.715±0.035 本方法为 0.751 丢 84.2% 加速 1.93×；延续 Physics-IQ 为 50.6±5.2 本方法为 50.6 丢 89.4% 加速 1.93×；视频到音频匹配为 0.864±0.017 本方法为 0.866 丢 70.0% 加速 2.30×；视频到动作末端误差为 2.16±0.06 本方法为 2.21 丢 44.0% 加速 1.21×。模糊与边缘为留在教师区间改用固定比例加速仅 1.36× 与 1.24×。

### 丢弃率与师生差距的权衡及单条件自由丢弃区间

#### 单条件自由丢弃区间

为看每种模态的鲁棒性论文每次只给单个条件并按能量从低到高逐步丢弃以目标指标相对教师的变化衡量。教师种子噪声为正负 2 倍标准差绿色为保持在带内的自由丢弃橙色为超出带宽的有损丢弃。每条件测 50 个片段指标与主表一致素描、框与去模糊另有专用分数测试覆盖稠密与稀疏两组。

下图左侧为稠密条件随丢弃增加的质量曲线中间为稀疏条件曲线右侧为各条件自由丢弃值的条形汇总。阅读时先看灰带宽度理解教师自身种子波动再看绿色自由区延伸长度判断耐剪程度最后对比右侧条形长短区分稠密与稀疏模态横轴为丢弃比例纵轴为相对教师的质量保持率。

[![原论文 Figure 5：Per-condition drop rates.](https://arxiv.org/html/2611.31184v1/percond_rates.svg)](https://arxiv.org/html/2611.31184v1/percond_rates.svg)

*论文图 5：单条件逐步丢弃的质量保持曲线与各条件自由丢弃区间的条形汇总（原论文 Figure 5）。*

像素显示右侧条形汇总 10 个单条件的自由丢弃值稠密条件为 26% 至 71% 其中法线为 26%、草图为 44%、去模糊为 70%、深度为 71% 稀疏条件为 80% 至 94% 其中分割为 80%、身份为 91%、运动轨迹为 94%。绿色自由区内质量保持在教师种子噪声正负 2 倍标准差带内超出则进入橙色有损区稀疏小形体更耐剪而稠密外观需保留更多。

#### 师生差距大小

下表控制师生差距大小差距分别让学生丢 90% 或让教师也按一半阈值被剪测试时三者用相同阈值剪枝因此输入一致仅训练不同。行覆盖小差距、本方法与大差距列保留方法、FID、FVD、LPIPS、姿态正确率与轨迹误差数值越小或越大按箭头方向判断优劣。

|  | Quality and Fidelity FID ↓ | Quality and Fidelity FVD ↓ | Quality and Fidelity LPIPS ↓ | Condition Following PCK ↑ | Condition Following TrajErr ↓ |
| --- | --- | --- | --- | --- | --- |
| Smaller gap | 23.7 | 123.9 | 0.290 | 0.853 | 12.04 |
| Ours | 23.0 | 113.8 | 0.278 | 0.911 | 7.80 |
| Larger gap | 23.8 | 124.3 | 0.287 | 0.906 | 9.90 |

本方法 FID 为 23.0、FVD 为 113.8、LPIPS 为 0.278、姿态正确率为 0.911、轨迹误差为 7.80，小差距退到 23.7、123.9、0.290、0.853、12.04，大差距退到 23.8、124.3、0.287、0.906、9.90，在展示的 5 项指标上小差距与大差距两个变体均劣于本方法。更特权教师若额外看到同片段其他条件在少条件上还会洗白颜色单状态监督可省约三分之二单步时间但轨迹跟踪有所退化。结论是差距须可推断且大小适中。

### 假设边界、复现核对与工程选型建议

方法假设运动与残差能指示新增信息且保留词元足以代表被剪区域。该假设在多数条件下成立但运动轨迹点在首次出现后长期静止时会被剪掉剩余词元易把静止与遮挡混淆。细节模态如框、轨迹与模糊需单独调整预设与阈值阈值过高丢掉难恢复的小内容过低则丢弃率不足学习式搜索阈值是明确的后续方向。

未验证的部署条件包括更高分辨率长视频的稳定性、不同 GPU 与推理优化下的加速波动以及参考关注噪声时无法使用 KV 缓存的限制。视频到动作在更快 GPU 上受核启动开销主导加速有限。人类评测仅 20 人少量回答，VLM 代理评分在 MiniMax 上改用开放模型，与官方评测不可比，背离时应以人工为准，代理分数只供参考。

复现核对上代码已公开但说明仅覆盖安装与推理权重中 H3 相关 2 模型可下载，Ref2VA 演示可访问而 Image 演示当前不可用。训练需内部数据池加 OpenVid、VidGen、SpatialVID、DL3DV 与 DROID 等来源自研第二阶段需 16 张 H200 训练 2K 步。建议先复现阈值剪枝的丢弃率与张量流再训练 LoRA 并对比训练无关剪枝的失败案例。

演示页以视频呈现高丢弃仍跟随条件的现象可重点对照故事板保持、延续运动不重启、姿态人脸对齐与标签字母不虚构等现象。工程上当条件多、帧长、分辨率高时收益最大单条件少参考时加速有限。首步应按模态设定阈值并补测自由丢弃区间再决定是否引入单状态训练以节省算力避免盲目加大丢弃率。

#### 从像素信号到保留词元

编解码剪枝与 VAE 编码并行运行先把 H.264 的运动向量与残差从 4×4 到 16×16 像素块映射到每个 DiT 词元覆盖的 32×32 像素乘 8 帧区域再按最大值与均值聚合为运动分与残差分并按条件尺寸重缩放。阈值方式保留任一分数超限的词元优先级方式按归一化残差与运动加权的能量排序定额丢弃前者适配单条件自然丢弃率后者适配多条件预算控制。保留词元保持原有三维位置编码并与噪声隐变量拼接输入对含视觉语言模型的分支则在视觉编码器读完全部参考后丢弃对应视觉词元再进入语言模型。

#### 师生分工与训练执行

在位自蒸馏把同一基座同时作为师生学生在条件投影上加可训练低秩适配器而不改动噪声与视觉词元通路冻结教师则额外看到被剪掉的特权词元。学生从纯噪声出发沿推理采样器的噪声递减序列展开自身轨迹只在高噪声的前段状态接受监督以两方速度预测的均方误差对齐而不引入真值标签推理时仅用学生不再需要教师。该分工解释了静止点混淆与阈值敏感的来源剪枝只度量相对前帧的变化长期静止的新内容缺乏残差支撑只能靠蒸馏从保留代表中推断补齐。

执行过程上自研模型先以稠密条件训练低秩权重第二阶段在 16 张 H200 上以固定阈值剪枝结果训练 2K 步推理采样用 30 步并在训练时展开前 8 个高噪声状态优化器采用 AdamW 与较小学习率并在推理启用分类器无关引导。剪枝在 6 核 CPU 上约 1.13 秒完成并与编码重叠平均丢弃 66% 条件词元对应约 2 倍去噪加速与 KV 缓存最高 73% 收缩。稠密外观模态自由丢弃区间为 26% 至 71% 稀疏轨迹与框可达 80% 至 94% 这与首步按模态设阈值并补测自由丢弃区间的工程建议一致也为单状态训练节省算力的选择提供依据。

跨模型复用时同一套编解码信号同时剪除 DiT 条件词元与视觉语言模型视觉词元在参考增多、帧变长与分辨率升高时加速比继续增大单条件少参考时则因可剪冗余少而加速有限。训练无需目标输出只需输入与提示并在学生自身状态上接受教师指导因此阈值过高导致的小内容丢失难以从保留代表中恢复阈值过低则保留过多而丢弃率不足学习式搜索各模态预设与阈值是明确的后续方向。

## ⚙️ 关键实现与复现规格

- **训练与评测数据**：训练数据取自 OpenVid-1M、VidGen-1M、SpatialVID、DL3DV-10K、DROID 与内部数据池，自研模型第一阶段用稠密条件训练，第二阶段与各扩展模型用输入加提示训练；评测用 VidGen-1M 中 2,000 片段池抽取的 400、200、100 与每条件 50 片段，扩展评测用 OmniVBench 237 例、GEdit-Bench-EN 606 例、OmniContext 400 例及 PAI-Bench-C、Physics-IQ、FoleyBench 与 DROID 抽样子集。
- **算力与训练耗时**：自研模型第一阶段在 48 张 GPU 上训练 50,000 步，第二阶段在 16 张 H200 上训练 2K 步；MiniMax-H3 Ref2VA 与 H3-Image 的 LoRA 在 16 张 GPU 上训练 3,000 步，Cosmos3-Nano 在 16 张 H200 上训练 3,000 步；推理测速用单张 H200 与单张 A100，MiniMax 高分辨率测试用 141 GB H200，剪枝在 6 核 Intel Xeon Platinum 8275CL 上与编码并行。
- **核心超参数与配置**：优化器为 AdamW，自研模型学习率 1e-4，MiniMax 模型学习率 5e-5；自研第一阶段 LoRA 秩 320，第二阶段与扩展模型 LoRA 秩 128；阈值按条件类型设定并按尺寸重缩放，能量权重取 1；推理采样 30 步并用分类器无关引导，训练监督前 8 个高噪声状态或单随机状态，MiniMax 采用 16 步网格与 6 步网格单状态监督。
- **推理速度与部署开销**：自研模型平均丢弃 66% 条件词元，无 KV 缓存时去噪加速 1.54× 至 2.30×，有 KV 缓存时加速 1.15× 至 1.37× 且缓存小 62% 至 73%，剪枝预处理平均 1.13 秒；MiniMax-H3 Ref2VA 平均加速 1.87× 最高 3.72×，H3-Image 最高 3.06×，Cosmos3 最高 2.30×，原文未披露 RTF 与逐词元延迟。
- **开源产物与协议状态**：代码仓库已公开但说明仅覆盖安装与推理，项目演示页可访问；H3 Ref2VA 与 H3-Image 权重可下载，Ref2VA 在线演示可访问而 H3-Image 在线演示当前不可用；训练依赖的内部数据池未公开，第三方社区 LoRA 与加速模型仅证明论文提及链接可用不代表作者已开源。
- **附录与补充材料要点**：附录给出 22B 内部模型结构与 KV 缓存注意力掩码、H.264 编码预设与四项残差修复、更长微调与单条件丢弃统计、特权教师与单多状态监督消融、MiniMax 与 Cosmos3 的任务划分与训练细节以及运动轨迹静止点混淆与阈值需按模态调整等局限，原文未披露许可信息。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.31184)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以H.264运动向量与残差聚合为词元分数并保留3D RoPE位置的剪枝设计直击时空冗余根源。

- 核心优势：同预算下CodecOPSD在微调组12项中10项最优且FVD超越教师并经教师间隔因果消融验证。

- 核心优势：跨MiniMax与Cosmos多任务实现1.21×至3.72×实测加速且指标保持在教师种子方差带内。

- 主要短板：自研22B模型与内部数据池未公开使主表400片段结果无法独立复算验证。

- 主要短板：MiniMax评测以Qwen代替官方Gemini裁判致分数不可比且音频侧仅用裁判匹配概率缺少人工听测。

---

[← 返回 2026-11-26 音频研究日报](/audio-research-portal/posts/2026-11-26/)
