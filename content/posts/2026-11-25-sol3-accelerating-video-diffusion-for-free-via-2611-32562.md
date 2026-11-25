---
title: "Sol^{{{{3}}}}: Accelerating Video Diffusion for Free via Hierarchical Sparse Attention Routing"
date: 2026-11-25
draft: false
tags: [视频生成, 音视频生成, 注意力机制, 高效推理]
categories: [论文速递]
description: "针对块级稀疏在块内异质交互上既浪费精确算力又丢失局部高响应的问题，Sol3 用高斯引导的三级路由与异构统计量实现按需细化，在 Wan2.2 上以 86.37% 稀疏度取得 3.07× 注意力加速并保持最优保真度，代价是去噪整体加速仅 1.88× 且个别成像子项略低于基线。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32562"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Sol3 用分层稀疏路由为视频扩散免费加速"
paper_digest_original_title: "Sol\\(^{3}\\): Accelerating Video Diffusion for Free via Hierarchical Sparse Attention Routing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32562v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32562v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32562v1.pdf"
paper_digest_primary_task: "视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对块级稀疏在块内异质交互上既浪费精确算力又丢失局部高响应的问题，Sol3 用高斯引导的三级路由与异构统计量实现按需细化，在 Wan2.2 上以 86.37% 稀疏度取得 3.07× 注意力加速并保持最优保真度，代价是去噪整体加速仅 1.88× 且个别成像子项略低于基线。"
paper_digest_reader_sections: [{"heading":"块级二选一在视频注意力中为何同时浪费算力又丢失细节","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Sol3 把精确范围从整块逐步收缩到混合块中的少数令牌","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"高斯阈值与异构统计量如何按层选择不同依据","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"跨块紧凑索引与代表项联合归一化如何落地为加速","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"三类扩散任务中保真度与加速如何同时成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"层级统计量与筛选规则各自贡献多少开销与误差","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"方法假设边界与复现选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Guoxin Fan"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Weilun Feng"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences"],"name":"Chuanguang Yang"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Mingqiang Wu"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Xiaokun Liu"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Jitao Lu"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences"],"name":"Zhulin An"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences"],"name":"Libo Huang"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences"],"name":"Boyu Diao"},{"affiliations":["Hangzhou Institute for Advanced Study, University of the Chinese Academy of Sciences"],"name":"Di Gao"},{"affiliations":["State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences","Xiamen Institute of Data Intelligence, Xiamen, China"],"name":"Yongjun Xu"}]
paper_digest_abstract_sha256: "d45d86c92c4a38129d74a78427673be23e2fa6c0a6714aa6c08c582be6f4941b"
paper_digest_sidecars: {"citation.bib":{"sha256":"0e5bdba8f14345f29e2a6b15edbdfe9048e54010cf25baec1ca02fd43a29ed41","url":"/audio-research-portal/client/papers/2026-11-25/2611-32562/citation.bib"},"citation.json":{"sha256":"e8e4323c1564ac5c460dbab84d60a61be964c27a031029b404da02dc7b69deae","url":"/audio-research-portal/client/papers/2026-11-25/2611-32562/citation.json"},"citation.ris":{"sha256":"fd613c8be28fe52d89b9650b8b85e32b430a4da5d6d0c4fc02097c699b8488c9","url":"/audio-research-portal/client/papers/2026-11-25/2611-32562/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"842d5060936dba9a9dea9f3fa66ff0cd5788b2b1fbbb914b152e916cec96edfc","url":"/audio-research-portal/client/papers/2026-11-25/2611-32562/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "bacf59c24af9764a3d08a212e1f6a6b25599ba2089b02ad72cd3cec2a9a21965"
paper_digest_api_reader_plan_sha256: "c2518cf86c607c0f2b3525455f0b3cc824528c2c54b4b92c2958534f330b1096"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9428705b733f24d6a47113954841fb40915c8a57e5f95e25a5932258fb2a9c12"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "3bf6c28edaf32b51110321cf6cf94d92acb61a58602533712bb264c4601232c0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8664e7d8501ce886bd58f0bc57cd21016779e9d9284d3a660d5cf5e765538b5e"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "bcdf403d3dd22e01249108f7cd827933ca3966b61d157ef2ddf05a7c60e6f355"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Sol3 用分层稀疏路由为视频扩散免费加速

> 英文题目：*[Sol^{{3}}: Accelerating Video Diffusion for Free via Hierarchical Sparse Attention Routing](https://arxiv.org/abs/2611.32562v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-research-portal/papers/?concept=task.video-generation)；[音视频生成](/audio-research-portal/papers/?concept=task.av-generation)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)
- **研究重点**：[高效推理](/audio-research-portal/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.1/10 | 技术严谨 7.8/10 | 实验充分 7.2/10 | 清晰度 7.0/10 | 影响力 4.0/10 | 开源 6.0/10 | 可复现 6.8/10 | 工程/实践 7.4/10


## 👥 作者与机构

- Guoxin Fan：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Weilun Feng：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Chuanguang Yang：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences
- Mingqiang Wu：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Xiaokun Liu：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Jitao Lu：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Zhulin An：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences
- Libo Huang：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences
- Boyu Diao：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences
- Di Gao：Hangzhou Institute for Advanced Study, University of the Chinese Academy of Sciences
- Yongjun Xu：State Key Laboratory of AI Safety, Institute of Computing Technology, Chinese Academy of Sciences；Xiamen Institute of Data Intelligence, Xiamen, China

## 📌 核心摘要

**问题与瓶颈：** 视频扩散模型以文本或图像为条件，经多步去噪生成高分辨率长视频，查询与键值之间的注意力交互随词元数平方增长，成为推理瓶颈。已有免训练方法 Sol-Attn 按块均值相关性设定阈值，把整块判为精确计算或代表项近似，并在联合归一化中保留被跳过区域的贡献。该块级二选一难以适应块内差异：少数高响应块承载大部分注意力，而一些整体响应平淡的块内部仍藏有极少数高权重词元，整块精确计算会连带大量低响应交互，整块近似则丢失局部关键交互，同时块中心相关性只反映平均响应，无法刻画块内键与值的离散，难以预判代表项近似是否可靠。

**核心思路与方法架构：** 与最接近的 Sol-Attn 相比，增量在于保留稀疏精确计算加代表项联合归一化的总体结构，把一次块级决策拆为从块到词元的三级按需筛选，并为各级配备不同含义的评分。以 Wan2.2 720p 81 帧生成为例，输入经归一化调制与旋转位置编码得到查询、键、值后，按查询分组与键值块划分并预计算块均值与离散统计。第一级按块中心相关性选出需整块精确计算的全块，第二级在剩余块中按代表项近似难度选出需细分的混合块，其余纯近似块只用代表项，第三级把全部混合块词元放入同一候选集，按原始词元相关性选出需精确计算的成员。选中成员经压缩稀疏行索引跨块批量计算精确注意力，剩余成员按剩余计数加权代表项后与精确项联合归一化。全过程免训练，冻结全部预训练参数，仅通过三组阈值参数控制筛选强度，首层与前若干去噪步保留稠密注意力，属于离线多步去噪推理，高斯阈值让不同查询分组保留不同比例候选，难度评分补足均值相关性缺失的块内信息，跨块统一比较避免在弱块上浪费精确预算。

**关键实验与核心代价：** 主基准覆盖图像到视频、文本到音视频联合生成与世界模拟，保真度以与稠密注意力的峰值信噪比（PSNR，越高越好↑）、结构相似性（SSIM，越高越好↑）和学习感知相似度（LPIPS，越低越好↓）衡量，质量用视频生成基准 VBench、音频质量（AudioBox 平均分，AA，越高越好↑）、文本音频一致性（CLAP，越高越好↑）与同步偏移等衡量，效率用稀疏率、浮点运算量与注意力加速比衡量。在 HunyuanVideo 13B 文本到视频 720p 129 帧生成上，Sol3 的 PSNR 为 24.90、SSIM 为 0.857、LPIPS 为 0.099，对应 Sol-Attn 为 22.60、0.796、0.139，稀疏率 84.75%，注意力加速比 2.84× 高于 Sol-Attn 的 2.25×。在采用 T2AV-Compass 文本提示的 H3-Base 768p 124 帧联合音视频生成中，Sol3 的文本音频一致性（CLAP，越高越好↑）为 0.249，高于 Sol-Attn 的 0.226，AA 为 6.986，高于 Sol-Attn 的 6.878，稀疏率 80.78%，加速比 2.27×。三级全路由在消融中取得最高保真度，异构统计与跨混合块统一比较均优于仅用块中心相关性或块内筛选的变体。代价是仍需保留首层与热身步的稠密计算，如 HunyuanVideo 前 8 步、H3-Base 前 5 步采用全注意力，部分 VBench 子项略低于稠密或 Sol-Attn。

**适用边界与深读导览：** 结论成立于所测的 HunyuanVideo、Wan2.2、H3-Base、FastH3、LTX-2.5 与 SANA-WM 等扩散 Transformer，在 480p 至 1024p、81 至 961 帧范围与单卡 A800 或 RTX PRO 6000 实测条件下有效，仅针对推理阶段免训练加速，不涉及模型训练、严格因果流式或实测端侧部署，音频结论限于联合生成的客观指标，长提示外推与极端相机轨迹等尚未充分验证，可能出现保真度回落或加速比收窄。若想深究高斯分级路由阈值构造与三级选择逻辑可阅读第 3.1 节与附录 C，近似难度推导与跨块统一排序依据可阅读附录 D，融合算子实现与阈值及路由消融可阅读附录 E 与第 4.4 节。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/FofGofx/sol3> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）；许可证：Apache-2.0

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 块级二选一在视频注意力中为何同时浪费算力又丢失细节

视频扩散模型生成长序列时，注意力开销随令牌数量平方增长，成为推理瓶颈。训练无关稀疏化希望在不更新预训练参数的前提下，跳过大部分查询与键值交互。Sol-Attn 是此前较强的块级路线，它用块中心相关估计整体响应，按分布动态设阈，把整块统一判为精确计算或代表项近似，再把两部分放在同一归一化分母下合并。该设计在多个扩散模型上得到验证，但把决策粒度固定在块边界。

要理解块粒度为何不够，需要同时观察块间与块内两个尺度的质量分布。左图按块统计注意力集中度并标出未选中块的位置，右图放大该块并画出块内 64 个令牌的累积质量曲线与均匀基线。下文将对照 99.2% 与 84.5% 两组比例，解释浪费与丢失并存的原因，请先沿横轴块索引与纵轴累积质量读出偏斜程度。

[![原论文 Figure 3：Illustration of a few dominant features across and within blocks.](https://arxiv.org/html/2611.32562v1/fig03_o1.png)](https://arxiv.org/html/2611.32562v1/fig03_o1.png)

*论文图 2：块间与块内注意力偏斜示意，左为块级集中分布，右为弱响应块内少数令牌主导（原论文 Figure 3）。*

左图显示 99.2% 注意力质量集中在前 10% 块中，呈现典型的块间偏斜。右图放大的 Query 671 与 Key 1096 交叉处是一个未被选中的块，其整体响应微弱，但块内前 5 个令牌却承载 84.5% 块内质量，远高于均匀基线。这说明整块精确计算会连带处理大量低响应交互，而整块近似则会抹掉少数高响应令牌的精确贡献，块级二选一无法同时兼顾两者。

第二个瓶颈是评价依据与决策目标错位。原文用一对具有相近块中心相关的块 A 与块 B 说明问题，两者整体响应接近，但用代表项近似后的相对 L2 误差相差多个数量级。进一步按原始令牌相关分布计算一阶 Wasserstein 距离 W1 为 1.189，表明块内键值分布差异很大。只看均值会把难近似的交互留给代表项，而按块独立设阈还会让弱响应块占用过多精确名额。

输入为分组后的查询 Q、键 K 与值 V，输出为接近全注意力 FA 的近似结果。保真度用相对 FA 的 PSNR、SSIM 与 LPIPS 度量，视频质量用 VBench，音视频用 T2AV-Compass 相关指标，世界模型用位姿误差，效率用稀疏度、FLOPs 与加速比共同约束。稀疏度仅统计稀疏调用中的视频交互，未计入预热阶段的全注意力开销，这是理解后文加速数字的前提。

### Sol3 把精确范围从整块逐步收缩到混合块中的少数令牌

#### 与 Sol-Attn 的实质差异与信号规格

与最接近的基线 Sol-Attn 相比，Sol3 保留了稀疏精确计算加代表项补偿加联合归一化的总体框架，替换的是决策粒度与评价统计量。Sol-Attn 对每个键值块只做一次整块精确或整块近似的判断，Sol3 则把非全块细分为难近似的 Mixed 块与可直接近似的 Pure 块，并对 Mixed 块内令牌做第二次筛选。信号层面原文未披露采样率与帧率步长，给出的是视频规格，如 Wan2.2 14B 图生视频 720p 81 帧，H3-Base 33B 文生音视频 768p 124 帧，SANA-WM 精炼器 17B 视频到视频 720p 481 帧。

按算法流程，一组查询 Qi 先与全部键值块索引构成第一级候选集，计算块中心相关并与高斯阈值比较，超过者成为 Full 块并将其全部令牌纳入精确集合。剩余块计算代表近似难度并再次阈值筛选，超过者成为 Mixed 块，其余为 Pure 块。随后把所有 Mixed 块的令牌合并为统一候选集，按原始令牌相关做第三级筛选，得到集合 S3，最终精确集合为 Full 块全体与 S3 的并集，其余令牌按块剩余计数加权代表项参与归一化。

为建立整体印象，可沿框架图自上而下对照两条线。上面一行是异构路由统计量的 3 组计算，分别对应块中心相关、近似难度与令牌相关，下面一行是分层路由的执行顺序，从 Full 块到 Pure 块再到精确令牌，最后合并为最终掩膜。下文将解释颜色与箭头的具体含义，请先注意深蓝为精确而浅青为近似的图例与阈值公式。

[![原论文 Figure 2：Overview of the Sol3 framework. (Top) Heterogeneous Routing Statistics (HRS) computes block-center…](https://arxiv.org/html/2611.32562v1/fig02_method.png)](https://arxiv.org/html/2611.32562v1/fig02_method.png)

*论文图 1：分层路由与异构统计框架，上为三级分数计算，下为掩膜逐步收缩过程（原论文 Figure 2）。*

上半部分用 3 个面板展示统计量来源，第一格用查询块均值与键块均值点积得到块相关，第二格结合键在查询方向的方差与值相对均值的均方根离散，第三格用查询均值与 Mixed 块原始键点积得到令牌相关，阈值形式均为均值加系数乘标准差。下半部分 4 个注意力掩膜依次显示 Full 块选择、Pure 块排除、Mixed 块内精确令牌选择与最终合并，深蓝色为精确，浅青色为近似，青色箭头标出非 Full 进入第二级与跨块合并的流向。

#### 最终精确集合的构成

最终精确集合决定了哪些原始键值参与逐令牌的 softmax 分子分母，哪些只以块代表参与。这里 Fi 为第一级选出的 Full 块集合，Bj 为第 j 个键值块的令牌索引集合，Mi 为第二级选出的 Mixed 块集合，Ci3 为其并集，Si3 为第三级选出的精确令牌，Ei 即为输出所用的精确索引全集。下式把上述并集关系写成紧凑形式，是后文核实现批量读取的依据。

\[\mathcal{E}_{i}=\left(\bigcup_{j\in\mathcal{F}_{i}}\mathcal{B}_{j}\right)\cup\mathcal{S}_{i}^{(3)}.\]

该式把整块保留与按需细选写成并集，直观上 Full 块对应高整体响应的整片保留，S3 对应难近似区域中的少数高相关令牌。当 Mixed 为空时退化为纯块级选择，当 Full 为空时全部精确预算都分配给跨块统一筛选的令牌。Ei 直接决定精确注意力核按压缩稀疏行索引批量读取哪些原始键值，其补集计数则决定代表项的加权强度，共同送入联合归一化。

### 高斯阈值与异构统计量如何按层选择不同依据

#### 按分布设阈的高斯引导路由

第一级到第三级的筛选共享同一种阈值形式。对查询组 i 与层级 l，候选集记为 Ci，候选 u 的分数记为 siu，均值与标准差记为 mu 与 sigma，阈值 tau 与选中集 S 由偏移系数 beta 控制。该设计避免逐组排序，只比较分数与组内阈值，适合流式选择。不同层级的分数含义与量纲不同，但相对位置可比，这是分层共用同一形式的基础。

\[\begin{gathered}\tau_{i}^{(\ell)}=\mu_{i}^{(\ell)}+\beta_{\ell}\sigma_{i}^{(\ell)},\\[6.0pt] \mathcal{S}_{i}^{(\ell)}=\{u\in\mathcal{C}_{i}^{(\ell)}:s_{iu}^{(\ell)}>\tau_{i}^{(\ell)}\},\end{gathered}\]

该式的物理直觉是按分布尾部保留值得精确计算的少数成员。同一层内分数尺度可能差异很大，但相对位置可比，beta 越大阈值越高而保留越少，beta 趋于无穷时几乎全舍，beta 取负则保留过半。选中结果直接收缩下一级的候选范围，第一级输出 Full 块，第二级输出 Mixed 块，第三级输出精确令牌，逐层减少精确交互。

高斯参考把 beta 翻译为期望保留比例。当标准化分数近似标准正态时，保留率可由正态累积函数 Phi 给出，beta 为 0 时约保留一半，beta 为 1.9 时仅保留尾部少数。原文用 KL 散度与校准曲线验证 3 级分数均接近正态，如块相关 KL 为 0.0058，观测保留率与参考值在对角线附近重合，因此可用目标保留率反推 beta。实际 3 级取不同 beta 是因为目标不同，第一级要保留整块高响应区而阈值较严。

#### 难度与相关性的异构评价

第二级的目标是估计代表项近似的不可靠程度。aij 为块中心相关，nj 为块内令牌数，Rj 为值相对块均值的均方根离散，Delta 为键在查询方向的方差修正。该分数把整体响应、块大小与两类块内变化统一到对数域，便于与高斯阈值配合。块均值相同的两块仍可能因内部离散不同而误差悬殊，这正是引入额外项的动机。

\[s_{ij}^{(2)}=a_{ij}+\log\!\left(n_{j}R_{j}\right)+\Delta_{ij},\]

该式的统计直觉是总权重与加权内容变化共同决定误差。Rj 越大说明成员内容越分散而均值代表性越差，Delta 越大说明沿查询方向的权重越不均匀而指数加权偏差越大。对数形式把乘性因子变为加性，便于求均值与方差。当块内完全均匀时后两项趋于零而退化为块中心相关，输出的 Mixed 集合即为需要令牌级细化的块。

要理解为何不能在块内各自设阈，可对比同一查询组下两个 Mixed 块的令牌相关分布。左图显示查询块与天空块 A 和红叶块 B 的空间位置，中右两图分别画出 64 个令牌的相关值、全局虚线阈值与局部点线阈值。下文将解释局部最优为何不是全局最优，请先注意两块基线高度与波动范围的差异。

[![原论文 Figure 6：Illustration of raw token relevance scores and filtering thresholds for key tokens across…](https://arxiv.org/html/2611.32562v1/fig06_mechanism.png)](https://arxiv.org/html/2611.32562v1/fig06_mechanism.png)

*论文图 5：同一查询组下两混合块令牌相关与全局局部阈值对比，说明统一筛选保留全局强者（原论文 Figure 6）。*

块 112 中令牌 A 相关为 0.354，超过局部阈值但低于全局阈值，属于局部仅有。块 115 中令牌 B 相关为 0.525，低于局部最突出者却高于全局阈值，属于全局仅有。统一跨块筛选保留 B 而舍弃 A，说明各块基线与波动范围不同，独立阈值会给弱响应块过多名额，而共享查询均值与阈值能把预算让给真正高相关的令牌。

第三级的目标是在 Mixed 并集内比较原始相关。对查询组均值 qbar 与候选令牌原始键 kt，分数为缩放点积，候选集 Ci3 为所有 Mixed 块的并集。该分数保留了块间原始差异，同一阈值下全局最高者优先被保留。下式给出该层分数的定义，是跨块统一比较的直接依据。

\[s_{it}^{(3)}=\frac{\bar{\mathbf{q}}_{i}^{\top}\mathbf{k}_{t}}{\sqrt{d}},\qquad t\in\mathcal{C}_{i}^{(3)},\]

该式的直觉是共享查询参考下的代理注意力权重保持单调，选全局前 k 个即保留最大代理质量。局部显著但全局较弱的令牌会被舍弃，全局较强但局部不显著的令牌会被保留。输出的 S3 与 Full 块并集构成最终精确索引，其余成员仍以代表项参与分母，避免质量塌陷。组均值决定共享路由结果，而最终输出仍按组内每个原始查询单独计算。

### 跨块紧凑索引与代表项联合归一化如何落地为加速

同一查询组内选出的精确令牌可能分散在多个 Mixed 块中，若按原块组织会碎裂为多个小任务。Sol3 把各组选中索引按压缩稀疏行格式连续存放，用选择计数的前缀和确定写位置，按原始编号顺序写入，便于精确核跨块批量处理。路由核在一次读取中同时计算查询、键与值的块均值与离散统计，第三级复用点积分数求池化均值方差并生成位图，避免第二轮点积。分块尺寸 bq 与 bkv 在原文仅以符号出现，具体数值未披露。

对查询组 i 与键值块 j，精确数 mij 为 Ei 与 Bj 交集大小，剩余数 rij 为 nj 减 mij。Full 块剩余为零，Pure 块剩余为全块，Mixed 块介于两者之间。对组内原始查询 q，输出为精确项与代表项在同一分母下的加权平均，代表对数 logit 与代表值分别记为 tilde l 与 tilde v，并按剩余数加权。下式给出联合归一化的完整形式，是理解代表补偿的关键。

\[\widehat{\mathbf{o}}_{i}(\mathbf{q})=\frac{\sum_{t\in\mathcal{E}_{i}}e^{\mathbf{q}^{\top}\mathbf{k}_{t}/\sqrt{d}}\mathbf{v}_{t}+\sum_{j:r_{ij}>0}r_{ij}e^{\widetilde{\ell}_{ij}(\mathbf{q})}\widetilde{\mathbf{v}}_{ij}(\mathbf{q})}{\sum_{t\in\mathcal{E}_{i}}e^{\mathbf{q}^{\top}\mathbf{k}_{t}/\sqrt{d}}+\sum_{j:r_{ij}>0}r_{ij}e^{\widetilde{\ell}_{ij}(\mathbf{q})}}.\]

该式的归一化直觉是代表项按剩余令牌数放大贡献，合并时把 log rij 加到代表 logit，再用精确核的对数归一化 Lex 与代表在线 softmax 的最大值合并。当某块剩余为零则不参与代表求和，当精确集为空则退化为纯代表近似。随着 Ei 变化，分子分母同步调整，使被跳过的交互仍通过代表项保留贡献。最终每个原始查询仍单独计算输出，只是共享同一组的路由决策。

输入准备与残差更新也做了融合以兑现稀疏收益。归一化后条件缩放与平移融合为单核，旋转位置编码 RoPE 融入 Q 与 K 归一化后的缩放步骤，输出投影后的门控与残差相加融合为单核，避免中间特征往返 GPU 全局内存。注意力计时从 QKV 投影与位置编码后到输出投影前，包含路由、重排、索引、精确计算与代表合并，去噪计时则包含两侧融合算子。全部扩散参数冻结，仅在推理时替换稀疏调用。

### 三类扩散任务中保真度与加速如何同时成立

#### 评测协议与公平性前提

数据集按内容类别抽取子集，HunyuanVideo 用 50 条 VBench 长提示，Wan2.2 用 50 对 VBench-I2V 图文对，H3-Base 与 LTX-2.5 共享 50 条 T2AV-Compass 提示而 FastH3 扩展为 100 条，SANA-WM 用 50 个场景各配两条轨迹共 100 组。保真度以相对 FA 的 PSNR 与 SSIM 越高越好、LPIPS 越低越好度量，视频质量用 VBench 成像质量、主体一致性与八项均值 AVG，音视频用 AA、文本音频一致性、音视频一致性与同步偏移 DS，位姿用旋转、平移误差与运动一致性 CMC。

公平性靠三点保证，同一模型上所有稀疏方法共享基于时间的预热与层保护，FA 采用 FlashAttention-2 作为稠密参照，计时只计稀疏调用的视频查询键交互。硬件上 FastH3 用单张 NVIDIA RTX PRO 6000 GPU，其余用单张 NVIDIA A800 GPU。去噪步数与全注意力预热如 Wan2.2 40 步前 6 步全注意，H3-Base 49 步前 5 步全注意，SANA-WM 精炼器 3 步首步全注意，首层均保留全注意力。

#### 主表保真度与效率权衡

下表集中比较 3 个代表性配置，行为 FA、PISA、Sol-Attn 与 Sol3，列为 PSNR 越高越好、LPIPS 越低越好、VBench AVG 越高越好、稀疏度越高越好与加速比越高越好。其中原表行名简写为 Sol 的即对应 Sol3。括号外为注意力加速，括号内为去噪加速，稀疏度仅统计稀疏调用中的视频交互，未计入预热全注意力步骤。请先对照 FA 基线行理解相对保真度的含义，再比较稀疏方法行的效率差异。

| Method | Similarity PSNR↑ | Similarity LPIPS↓ | VBench AVG↑ | Efficiency Sparsity↑ | Efficiency Speedup↑ |
| --- | --- | --- | --- | --- | --- |
| FA [3] | ∞ | 0.000 | 71.41 | 0.000% | 1.00× (1.00×) |
| PISA [13] | 25.11 | 0.109 | 71.02 | 84.94% | 2.76× (1.51×) |
| Sol-Attn [12] | 25.55 | 0.095 | 70.93 | 84.57% | 2.45× (1.46×) |
| Sol | 25.81 | 0.086 | 71.11 | 86.37% | 3.07× (1.88×) |
| FA [3] | ∞ | 0.000 | 74.98 | 0.000% | 1.00× (1.00×) |
| PISA [13] | 16.17 | 0.371 | 73.91 | 80.27% | 1.98× (1.32×) |
| Sol-Attn [12] | 16.06 | 0.384 | 74.45 | 78.36% | 2.02× (1.32×) |
| Sol | 16.82 | 0.348 | 74.59 | 80.78% | 2.27× (1.45×) |
| FA [3] | ∞ | 0.000 | 76.82 | 0.000% | 1.00× (1.00×) |
| PISA [13] | 24.13 | 0.105 | 76.82 | 78.02% | 2.07× (1.26×) |
| Sol-Attn [12] | 24.11 | 0.101 | 76.95 | 77.75% | 2.21× (1.28×) |
| Sol | 24.55 | 0.097 | 77.03 | 78.19% | 2.33× (1.36×) |

Sol3 在 3 组配置上同时取得最高 PSNR、最低 LPIPS、最高 AVG、最高稀疏度与最高注意力加速。Wan2.2 上为 25.81、0.086、71.11、86.37% 与 3.07×，超过 Sol-Attn 的 25.55、0.095、70.93、84.57% 与 2.45×。H3-Base 上为 16.82、0.348、74.59、80.78% 与 2.27×，SANA-WM 精炼器 481 帧上约为 24.55、0.097、77.03、78.19% 与 2.33×。代价是去噪加速远小于注意力加速，如 3.07× 对应仅 1.88×，且个别成像与主体子项略低于 Sol-Attn，说明端到端收益受非注意力部分限制。

#### 任务质量与姿态一致性

下表补充输入图一致性、音视频质量与相机位姿 3 类任务指标，行为 FA、PISA、Sol-Attn 与 Sol3，列为图生视频主体一致性越高越好、音频质量 AA 越高越好、旋转误差越低越好与运动一致性越低越好。FA 在多数一致性上仍为参照上限，稀疏方法的目标是接近而非超越它。请结合前表保真度一起阅读，以判断加速是否以任务质量为代价。

| Method | Consistency with the Input Image Wan2.2 I2V-SC↑ | Audio-Visual Quality H3-Base AA↑ | Pose Accuracy SANA-WM Refiner R.Err↓ | Pose Accuracy SANA-WM Refiner CMC↓ |
| --- | --- | --- | --- | --- |
| FA | 98.72 | 7.150 | 5.847 | 0.893 |
| PISA | 97.82 | 6.890 | 6.159 | 0.969 |
| Sol-Attn | 98.43 | 6.878 | 6.204 | 0.950 |
| Sol | 98.53 | 6.986 | 6.059 | 0.900 |

Sol3 在 Wan2.2 上取得 98.53 与 99.71 的图文主体与背景一致性，最接近 FA 的 98.72 与 99.73。在 H3-Base 上 AA 为 6.986，高于 PISA 的 6.890 与 Sol-Attn 的 6.878，文本音频一致性 0.249 亦为稀疏中最优。在 SANA-WM 上旋转误差 6.059、平移误差 0.859 与 CMC 0.900，均低于 Sol-Attn 的 6.204、0.911 与 0.950，表明细化精确范围同时改善了生成保真度与相机可控性，但同步偏移与音视频一致性等单项仍存在与 PISA 互有胜负的情况。

### 层级统计量与筛选规则各自贡献多少开销与误差

#### 3 级路由是否缺一不可

下表在 FastH3 上开关 3 个层级，第一级为整块保留，第二级为难度筛选，第三级为令牌筛选。列为稀疏度越高越好、PSNR 与 SSIM 越高越好、LPIPS 越低越好，7 组稀疏度相近而保真度差异明显，可分离结构贡献而非单纯稀疏率效应。请先比较仅保留前 2 级与仅做第三级的两行，再看完整 3 级的增益。

| GHR level 1 | GHR level 2 | GHR level 3 | Sparsity↑ | PSNR↑ | SSIM↑ | LPIPS↓ |
| --- | --- | --- | --- | --- | --- | --- |
| ✓ | ✗ | ✗ | 83.54% | 15.87 | 0.499 | 0.386 |
| ✗ | ✓ | ✗ | 85.25% | 15.83 | 0.499 | 0.390 |
| ✗ | ✗ | ✓ | 85.28% | 15.43 | 0.487 | 0.448 |
| ✓ | ✓ | ✗ | 85.22% | 15.81 | 0.499 | 0.392 |
| ✓ | ✗ | ✓ | 84.70% | 16.05 | 0.515 | 0.402 |
| ✗ | ✓ | ✓ | 85.09% | 16.23 | 0.513 | 0.400 |
| ✓ | ✓ | ✓ | 85.37% | 16.75 | 0.537 | 0.366 |

仅保留第一二级时稀疏度为 85.22% 而 PSNR 仅 15.81，说明 Mixed 块内仍需令牌细化，否则整块精确浪费预算。仅做第三级时稀疏度为 85.28% 而 PSNR 仅 15.43 且 LPIPS 高达 0.448，为 7 组中最差，说明忽略块整体响应会迷失方向。第一加第三级为 16.05，第二加第三级为 16.23，完整 3 级达 85.37%、16.75、0.537 与 0.366，表明先保强响应整块，再聚焦难近似块，最后跨块选令牌的顺序不可省略。

为直观比较筛选范围，可先看以质量 oracle 为参照的保留效果。左起依次为理想参照、整块筛选、逐块独立筛选与跨 Mixed 统一筛选，橙色为正确保留，红色为误选，蓝色为漏检。下文将对照召回率解释统一筛选的优势，请先注意全局统一列的橙色占比明显更高。

[![原论文 Figure 7：Visualization of retained key interactions.](https://arxiv.org/html/2611.32562v1/fig07_selection.png)](https://arxiv.org/html/2611.32562v1/fig07_selection.png)

*论文图 6：以质量 oracle 为参照的三种筛选保留效果对比，统一跨块筛选召回最高（原论文 Figure 7）。*

整块筛选召回为 61.9%，逐块独立筛选为 60.3%，跨 Mixed 统一筛选达 93.6%，最接近 100% 的理想参照。整块方法把整片高响应区一并取舍，逐块独立方法受限于各块局部阈值而漏掉其他块更强的令牌，统一筛选在相同精确预算下保留更多代理注意力质量，相对 L2 输出误差也更低。该现象在附录多模型对比中重复出现，说明跨块比较具有普适性。

#### 筛选规则与阈值敏感性

下表在 FastH3 2 个稀疏水平（约 75% 与约 85% 两档）下比较 Top-K、Top-p 与高斯筛选，列为稀疏度、PSNR、选择耗时与开销比例。Top-K 按固定比例保留，Top-p 按累积权重截断，高斯按组内均值加系数乘标准差设阈而无需排序。请先对照同一稀疏度下三行的 PSNR，再比较选择耗时的数量级差异。

| Method | Sparsity↑ | PSNR↑ | Selection Time(ms)↓ | Overhead ↓ |
| --- | --- | --- | --- | --- |
| Top-K | 75.33% | 17.44 | 735.9 | 172.9% |
| Top-p | 75.31% | 16.08 | 957.0 | 224.9% |
| Gaussian | 75.63% | 17.72 | 30.73 | 7.220% |
| Top-K | 85.28% | 16.55 | 731.7 | 171.9% |
| Top-p | 85.25% | 14.99 | 956.0 | 224.6% |
| Gaussian | 85.37% | 16.75 | 30.78 | 7.230% |

高斯在两档均取得最优保真度，约 75% 档为 75.63% 与 17.72，约 85% 档为 85.37% 与 16.75，分别高于 Top-K 的 17.44 与 16.55 以及 Top-p 的 16.08 与 14.99。选择耗时高斯约 30.73 ms，而 Top-K 约 731.7 ms，Top-p 约 956.0 ms，开销分别为 7.22% 与 171.9%、224.6%，对应约 23.95× 与 31.14× 的选择加速。Top-p 在权重集中时过早截断而把应精确计算的交互交给近似，保真度损失最大。

下表在 H3-Base 上扰动 3 级阈值，行为 Sol-Attn 基线与 7 组 beta 组合，列为稀疏度、PSNR、SSIM 与 LPIPS。默认组合为 (1.9, 0, 0.625)，上下浮动任 1 级后仍全面优于基线，说明优势不依赖精调。请先看默认行的综合表现，再观察上下浮动时稀疏度与保真度的此消彼长。

| (𝜷𝟏,𝜷𝟐,𝜷𝟑) | Sparsity↑ | PSNR↑ | SSIM↑ | LPIPS↓ |
| --- | --- | --- | --- | --- |
| Sol-Attn [12] | 78.36% | 16.06 | 0.570 | 0.384 |
| (1.9,0,0.625) | 80.78% | 16.82 | 0.598 | 0.348 |
| (1.775,0,0.625) | 79.75% | 16.77 | 0.593 | 0.344 |
| (2.025,0,0.625) | 81.67% | 16.19 | 0.587 | 0.377 |
| (1.9,−0.125,0.625) | 79.47% | 16.27 | 0.591 | 0.349 |
| (1.9,0.125,0.625) | 82.12% | 16.38 | 0.592 | 0.375 |
| (1.9,0,0.5625) | 79.85% | 16.78 | 0.587 | 0.351 |
| (1.9,0,0.6875) | 81.63% | 16.31 | 0.590 | 0.360 |

默认组合稀疏度为 80.78%，PSNR 为 16.82，SSIM 为 0.598，LPIPS 为 0.348，综合最均衡。6 组扰动稀疏度在 79.47% 至 82.12% 之间，PSNR 在 16.19 至 16.78 之间，SSIM 在 0.587 至 0.593 之间，LPIPS 在 0.344 至 0.377 之间，均优于 Sol-Attn 的 78.36%、16.06、0.570 与 0.384。异构统计消融中完整组合在 HunyuanVideo 上亦取得 84.75%、24.90、0.857 与 0.099 的最优并延迟最低，单独使用块相关或难度分数均会退化。

### 方法假设边界与复现选型建议

Sol3 的加速建立在 3 个可检验的假设上。3 级分数经矩标准化后近似高斯，KL 散度在 0.0031 至 0.0058 量级，校准曲线接近对角线，因此 beta 可按高斯参考率设置。块均值加离散统计足以代理近似难度，全难度分数与误差的秩相关达 0.826，远高于仅用块中心的 0.040。组内查询共享同一路由决策，最终输出仍按原始查询单独计算，压缩稀疏行索引与代表加权在 Triton 核中精确对齐。若注意力分布极端偏离高斯或块内方差估计失效，阈值与难度排序可能失准。

未验证的范围需要如实说明。评测每项仅用 50 至 100 组提示或场景，无人工主观听测与 MOS，保真度均为相对 FA 的相似度而非绝对质量，神经代理指标缺失时的听感外推不可做。效率口径中稀疏度只计稀疏调用，去噪加速包含预热与前馈等非注意力开销，因此 3.07× 注意力加速对应仅 1.88× 去噪加速。更长帧数与分辨率结果见附录，更大批量、多卡并行与不同采样器下的稳定性原文未披露。

复现需区分三件事。代码仓库当前可用，地址为 <https://github.com/FofGofx/sol3>，文档完整性为部分，仅覆盖安装说明。权重与数据依赖原始扩散模型，需自行准备，Triton 定制核需按附录 E 编译运行。硬件上 FastH3 需单张 NVIDIA RTX PRO 6000 GPU，其余需单张 NVIDIA A800 GPU，并与附录预热层保护配置对齐。建议先跑 FA 基线记录 PSNR 与去噪耗时，再切 Sol3 默认 beta，核对稀疏度、注意力计时区间与 FLOPs 口径是否一致。

工程选型上，当视频扩散的注意力成为长序列瓶颈且不允许训练时值得尝试。复现第一步是复刻 Wan2.2 81 帧或 H3-Base 124 帧的单卡流程，观察纹理丰富区与细结构的颜色噪声与模糊是否接近 FA。需补做的验证是自有提示分布下的 VBench 子项、音视频同步偏移与位姿误差，以及阈值在新模型上的轻微扫描，避免把注意力加速直接等同于端到端加速。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露音频采样率、帧率步长、码率与因果前瞻延迟；音视频质量用 AA、T-A、A-V 与 DS 评价，效率口径与视频注意力计时一致。
- **训练与评测数据**：无模型训练阶段，训练无关推理加速。评测覆盖 HunyuanVideo 13B、Wan2.2 14B、H3-Base 33B、FastH3 33B、LTX-2.5 22B 与 SANA-WM 17B；子集为 VBench 长提示 50 条、VBench-I2V 图文对 50 对、T2AV-Compass 提示 50 条、FastH3 扩展 100 条、SANA-WM 50 场景共 100 组轨迹。
- **算力与训练耗时**：FastH3 使用单张 NVIDIA RTX PRO 6000 GPU，其余模型使用单张 NVIDIA A800 GPU；附录给出各模型去噪步数与全注意力预热步数配置。
- **核心超参数与配置**：三级高斯阈值系数 beta1、beta2、beta3，H3-Base 默认组合为 1.9、0、0.625；查询分组与键值分块符号为 bq 与 bkv，具体数值原文未披露；首层保留全注意力并采用基于时间的预热与层保护。
- **推理速度与部署开销**：Wan2.2 上稀疏度 86.37% 对应注意力加速 3.07× 与去噪加速 1.88×；H3-Base 稀疏度 80.78% 对应 2.27× 与 1.45×；SANA-WM 精炼器稀疏度 78.19% 对应 2.33× 与 1.36×；FLOPs 随模型与帧数变化。
- **开源产物与协议状态**：代码仓库当前可用，地址为 <https://github.com/FofGofx/sol3>，文档完整性为部分，仅覆盖安装说明；权重与数据依赖原始扩散模型需自行准备，未提供独立演示页。
- **附录与补充材料要点**：附录给出跨模型完整结果、更长帧数与分辨率结果、实验与评测口径细节、三级分数推导、细粒度可行域命题、Triton 紧凑索引与融合核实现，以及高斯性与跨块筛选的补充可视化。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32562v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：Wan2.2上Sol3以PSNR25.81、SSIM0.854、稀疏率86.37%与加速比3.07×全面超越Sol-Attn等稀疏基线。

- 核心优势：提出高斯引导三级路由与异构难度评分及跨混合块统一比较，阈值比较无需排序且适配不同查询分组。

- 核心优势：三级全路由与异构组合在FastH3与HunyuanVideo消融中取得最高保真度与最低延迟1750.1s。

- 主要短板：音频结论仅依赖AudioBox、CLAP、ImageBind与Synchformer等客观代理指标，无人工主观MOS、CMOS或ABX验证听感一致性。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
