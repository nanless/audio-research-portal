---
title: "Speech2Lesion: Multi-Head Inference of Brain Lesion Characteristics from Overt Speech"
date: 2026-11-27
draft: false
description: "针对言语到脑病灶多对多映射难求逆与配对数据稀缺问题，Speech2Lesion 以五类言语特征聚合与堆叠集成多头同步推断检出偏侧化分区与体积，在 742 例上实现卒中检出 AUROC 0.989 与顶叶 0.954 及体积方差解释约 26%，代价是偏侧化与体积精度中等、三分类仅约 0.48 且缺实时与开源复现支撑。"
tags: ["集成学习", "多模态学习", "病理语音评估"]
categories: ["avsp-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从公开言语推断脑病灶属性：多头堆叠集成的可行性与边界"
paper_digest_original_title: "Speech2Lesion: Multi-Head Inference of Brain Lesion Characteristics from Overt Speech"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:avsp:2026:conference-paper-id:sanguedolce26_avsp"
paper_digest_workbench_source_sha256: "61c953047a409bf990ae3feec5733cdd6905e9799a75f11c829dde1daa13d5be"
paper_digest_workbench_record_url: "https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "病理语音评估"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对言语到脑病灶多对多映射难求逆与配对数据稀缺问题，Speech2Lesion 以五类言语特征聚合与堆叠集成多头同步推断检出偏侧化分区与体积，在 742 例上实现卒中检出 AUROC 0.989 与顶叶 0.954 及体积方差解释约 26%，代价是偏侧化与体积精度中等、三分类仅约 0.48 且缺实时与开源复现支撑。"
paper_digest_reader_sections: [{"heading":"卒中后言语异质性为何让直接推断病灶位置长期落空","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"言语到病灶的分层多头流程如何组织五类特征与三路集成","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"堆叠泛化校准与对数体积建模如何分工并冻结参数","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"分层诊断从近乎完美的卒中检出到中等体积解释的完整证据","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉哪一类特征反而更好：模态贡献与未做细粒度消融的边界","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"概率性推断的适用边界与复现前必须核对的三件事","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Computing, Imperial College London, UK","Department of Electrical and Electronic Engineering, Imperial College London, UK","Department of Brain Sciences, Imperial College London, UK"],"name":"Giulia Sanguedolce"},{"affiliations":["Department of Brain Sciences, Imperial College London, UK"],"name":"Niahm V. Parkinson"},{"affiliations":["Department of Electrical and Electronic Engineering, Imperial College London, UK"],"name":"Patrick A. Naylor"},{"affiliations":["Department of Brain Sciences, Imperial College London, UK","Imperial College Healthcare NHS Trust, London, UK"],"name":"Fatemeh Geranmayeh"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"feccbe68fef9a3cf08fd0beb341559b1be1a05ae5cc4b2ac4c823a945db9cbf5","url":"/audio-research-portal/client/papers/2026-11-27/conference-fef5b7fbdd562885f0ba0c82/citation.bib"},"citation.json":{"sha256":"0400c837f800428f6a5f3750300b536a98a726caa89559590c16ff00d4ba0b13","url":"/audio-research-portal/client/papers/2026-11-27/conference-fef5b7fbdd562885f0ba0c82/citation.json"},"citation.ris":{"sha256":"889606581a211d0273643eda3e5aaf3bf9d462c326bf926ebf4fa24082f42039","url":"/audio-research-portal/client/papers/2026-11-27/conference-fef5b7fbdd562885f0ba0c82/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"160be282f1cd7c72a620854e6e13fac1dca236af5ea5b4f00d0a1fa71379a351","url":"/audio-research-portal/client/papers/2026-11-27/conference-fef5b7fbdd562885f0ba0c82/rethink-context.json"}}
paper_digest_paper_id: "conference:avsp:2026:conference-paper-id:sanguedolce26_avsp"
paper_digest_source_kind: conference
paper_digest_conference_id: "avsp-2026"
paper_digest_conference_name: "avsp-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "703c8e6bdbe42fe0b2108a2ac5b82739f7a7016b9deec1dc7a998a967c7c0053"
paper_digest_api_reader_plan_sha256: "fb3cf9f00474476504e85bc71dcd543b96cce8c8499d3d2f01db1c38bf51c74d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1de3bbb7628c78c1465393bd8be5ff8bd8c668d08f409257ed21bed45bcafc30"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b42bbd2edea69d53b177da615bed6512fdcc4ac2fdcc1c58bc3b203e37debe0d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1d58a9db08dfcd01cb9687712e30ddd72444d0d6cda6a5af0de5004a33c40541"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "663d34b582353276721d26b3c705e3ddcd2ce3d30136fcd6172d73f322373120"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.ensemble-learning","label":"集成学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"}]
paper_digest_primary_method: "集成学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从公开言语推断脑病灶属性：多头堆叠集成的可行性与边界

> 英文题目：*Speech2Lesion: Multi-Head Inference of Brain Lesion Characteristics from Overt Speech*

> 会议身份：`conference:avsp:2026:conference-paper-id:sanguedolce26_avsp`
> Track：Health Data




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.html) · [官方 PDF](https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[病理语音评估](/audio-research-portal/papers/?concept=task.pathological-speech)
- **研究方法**：[集成学习](/audio-research-portal/papers/?concept=method.ensemble-learning)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 7.0/10 | 实验充分 5.9/10 | 清晰度 6.6/10 | 影响力 5.3/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Giulia Sanguedolce：Department of Computing, Imperial College London, UK；Department of Electrical and Electronic Engineering, Imperial College London, UK；Department of Brain Sciences, Imperial College London, UK
- Niahm V. Parkinson：Department of Brain Sciences, Imperial College London, UK
- Patrick A. Naylor：Department of Electrical and Electronic Engineering, Imperial College London, UK
- Fatemeh Geranmayeh：Department of Brain Sciences, Imperial College London, UK；Imperial College Healthcare NHS Trust, London, UK

## 📌 核心摘要

**问题与瓶颈：** 脑卒中后约 40% 幸存者出现言语与语言障碍，障碍模式随病灶体积、半球偏侧、解剖位置与网络重组而高度异质，结构影像可直接刻画病灶拓扑却资源密集且不适合重复行为监测。既往工作多把言语测量当作神经损伤的行为结局做统计关联，而非从言语反推解剖，声学语言表征与功能脑激活可预测性的进展提示行为信号含有可量化的神经生物学信息，但直接预测仍基本未被探索。根本困难在于言语是分布式损伤的下游后果，可观察声学语言模式与病灶特征呈间接多对多映射，难以求逆，且同步配对高质量录音与体素级病灶分割的数据集稀缺。本文输入为 16 kHz、16 位量化的图片描述 overt 言语录音，输出涵盖卒中检出、左右半球偏侧、左侧神经解剖分区受累、左侧病灶体积连续值与体积三分层，需在可扩展无创条件下从行为信号恢复结构损伤属性。

**核心思路与方法架构：** 与单域病理语音分类相比，实质增量在于并行融合可解释手工特征与 Whisper 隐表示，并以堆叠集成同时驱动多类临床头，保留声门、声学、流畅性与语言学互补维度而按头裁剪最优组合。录音先按人工时间戳剔除访谈者语音并切分为话语片段，再并行提取 96 维声门源参数、88 维 eGeMAPS 声学特征、57 维流畅性特征、83 维文本语言学描述子与 1,024 维 Whisper-medium 编码器末层表示，其中 Whisper 原文仅描述为特征提取，未说明是否微调。每个录音内对各特征取均值与标准差并拼接片段总数，形成定长录音级表示，经稀疏大于 20%、零方差与共线性大于 0.98 筛选后送入多头框架。每个头采用 XGBoost、极端随机树与 L2 正则线性模型 3 个基学习器，以逻辑回归或岭回归元学习器融合，分类概率再经 Platt 缩放校准，体积目标取对数变换 y 为 log(1+v)，全程采用录音级整段聚合，原文未设流式因果约束，从而针对间接映射分别学习检测、定位与定量关系。

**关键实验与核心代价：** 在 742 例受试者（639 例卒中与 103 例健康对照，共 11,435 个话语）的嵌套分层 5 折交叉验证中，原文未提供与外部卒中检测模型的同条件数值对比，仅报告 11 种单模态、留一法与全模态组合的内部优选，全局卒中检出最优配置为去除嵌入的 All w/o Emb.，AUROC 为 0.989，BACC 为 0.966，F1 为 0.969。半球偏侧最优同样为 All w/o Emb.，AUROC 为 0.708，BACC 为 0.680，F1 为 0.767，左侧顶叶感兴趣区 AUROC 为 0.954，BACC 为 0.930，F1 为 0.887，颞叶 AUROC 为 0.840，枕叶 AUROC 为 0.826 但 F1 仅为 0.443，提示阴性易判而阳性召回有限。左侧体积理想回归 R2 为 0.259，r 为 0.514，95% 置信区间为 [0.19, 0.32]，门控回归 R2 为 0.236，r 为 0.485，置信区间为 [0.17, 0.29]，两者大幅重叠而误差传播有限，体积三分层 BACC 为 0.480，宏平均 F1 为 0.472，高于 0.333 的随机基线。主导收益来自顶叶与颞叶等语言网络相关区的多域互补，最显著代价是嵌入特征在多头最优中被舍去与枕叶低 F1 及三分类整体偏低，原文未披露训练设备时长与实时因子等部署成本。

**适用边界与深读导览：** 结论成立前提为受控图片描述任务、人工逐字转写与手动病灶分割条件，仅建模左侧半球分区与体积，右侧、双侧与左侧小脑及纵向康复轨迹未覆盖，自然对话与自动转写误差下的表现未经验证，输出应视为概率性推断而非直接解剖重建。欲深究堆叠集成配置、校准公式与阈值策略及分区与体积头的误差传播，可查阅下方方法概述和架构与实验结果章节的公式与表格对照。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 卒中后言语异质性为何让直接推断病灶位置长期落空

卒中是获得性交流障碍的主要原因之一，约 40% 幸存者遗留言语与语言损伤。公开言语产生可在多个层级受损，包括构音执行、流畅性、语义组织与音系编码。损伤模式高度异质，随病灶范围、半球偏侧化、解剖位置与网络重组而变化，也与长期认知语言结局相关。结构影像显示表达能力与皮层形态相关，临床量表与病灶位置及白质束损伤相关，表明行为言语信号可能包含可量化的神经生物学信息。

结构磁共振可直接刻画病灶拓扑，但资源密集、难以普及，也不适合重复行为监测。与之互补的可扩展无创模态受到关注，表征学习显示高维言语表示可预测语言加工中的功能脑激活，表明行为言语信号包含可量化的神经生物学信息，有望用于推断结构病灶属性。这一思路将筛查与康复监测从重复影像中部分解耦，强调从行为反推结构的逆向框架，而非仅把言语当作结局评分。

尽管前景明确，直接从言语预测病灶属性仍少有人探索。传统多把言语作为神经损伤的行为结局，或只做统计关联而非直接预测。两方面原因造成断层，第一，言语是分布式损伤的下游后果，可观察声学语言模式与病灶属性之间是间接多对多映射，难以求逆。第二，同时具有高质量录音与体素级病灶标注的数据集稀缺，限制了稳健预测模型的开发与验证，也使跨研究公平比较难以展开。

为填补空白，研究整理 SONIVA 数据集，共 742 例，包括 639 例卒中患者与 103 例健康对照，配对转录言语录音与临床扫描衍生的病灶标注，覆盖体素级分割与 12 个解剖分区。在此基础上构建 Speech2Lesion 多模态多头集成框架，同步预测 5 个临床目标，分别为卒中检出、病灶偏侧化、左半球 6 个脑叶分区定位、左半球病灶体积回归与三分位负荷分层，并系统评估各特征域贡献，为筛查与康复监测提供不依赖重复影像的实践路径。

### 言语到病灶的分层多头流程如何组织五类特征与三路集成

与最近既有路线相比，实质增量在于把可解释手工特征与学习嵌入并置于同一记录级表示，并以多头同时覆盖检出、偏侧化、分区定位与体积估计，而非只做患者对照分类。输入为图片描述任务录音，以 16 kHz 采样与 16 位量化记录，人工标注切分出 11,435 个话语以剔除访谈者语音。5 路特征分别为 96 维声门源参数、88 维 eGeMAPS 声学集、57 维流畅性时域构音特征、83 维文本语言学描述子与 1,024 维 Whisper 中层编码器嵌入，病灶标注覆盖额顶颞枕皮层下与小脑共 12 个分区。

下图将全流程压缩为 3 个方框，建议沿从左至右箭头追踪主路径，先看左侧原始语音经预处理后 5 路特征如何并行提取并汇入聚合漏斗，再看中间 3 个基学习器如何经元学习器汇合后分叉为校准分类与对数体积两支，最后看右侧绿色分类框与黄色体积框的阈值标注与触发条件，这有助于一次看清从录音到多目标诊断的拆分汇合点。

[![原论文 Figure 1：Speech2Lesion Pipeline. Hierarchical multi-head framework for stroke lesion diagnosis from speech.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/avsp-2026/c0c47e4826bc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/avsp-2026/c0c47e4826bc/figure-1.png)

*论文图 1：分层多头推断流程示意：五类言语特征经聚合后进入堆叠集成，分别输出分类校准概率与对数体积目标（原论文 Figure 1）。*

图中显示左侧框顶部为原始语音，下接预处理模块，右侧并列声学、声门、流畅性、嵌入与文本语言学 5 个条块，全部指向标注为均值标准差与计数符号的聚合漏斗。中间框并列极端梯度提升树、极端随机树与正则线性 3 个基学习器，经元学习器逻辑回归与岭回归汇合，再分叉为上支普拉特校准概率与下支对数体积目标。右侧框上部 3 个绿色框为卒中检出、偏侧化与感兴趣区映射，下部两个黄色框为理想体积与门控体积，底部紫色框为三分位分层体积，箭头明确了门控仅在偏侧化预测为左时激活。

以 1 秒录音为例，该片段含 16,000 个采样点，经预处理切分去除访谈者语音后，按话语分别提取上述 5 路特征。原文未披露帧长与步长，也未给出帧级张量形状，因此无法追踪毫秒级帧率变化，只能依据披露维度说明记录级聚合，每域特征取均值与标准差并附加片段计数，形成固定长度表示。聚合向量送入 3 路堆叠集成，分类支输出校准概率再经阈值判定，体积支输出对数域预测再还原为体素立方毫米量级估计，门控体积支的激活依赖偏侧化分支的预测结果。

### 堆叠泛化校准与对数体积建模如何分工并冻结参数

每个预测头采用堆叠泛化，基学习器固定为 3 类，第一为极端梯度提升树，设置 800 棵树、学习率 0.05、最大深度 4、行采样 0.85、列采样 0.85、L2 系数 1.0，并在种子 0、1 与 2 上袋装平均，早停耐心为 40 轮。第二为极端随机树，设置 600 棵树、最大特征取平方根、叶节点最小样本为 2。第三为 L2 正则线性模型。三者预测经元学习器融合，分类用逻辑回归，体积用岭回归，岭系数从 1、10、100、1,000 与 10,000 候选中以内层验证性能选择。

分类元概率经普拉特校准映射为临床可解释概率，估计参数来自内层验证数据，避免在外层测试集上泄漏。体积目标取对数变换降低偏态并稳定回归，原始体素体积记为体素数，变换后目标可缓解大病灶长尾影响，另按训练分布三分位离散为小中大三层。阈值在内层验证上选择，卒中检出采用灵敏度约束工作点，要求灵敏度不低于 0.85，偏侧化与各感兴趣区头采用约登指数最大化以平衡灵敏度与特异度。区域与体积头聚焦左半球语言网络，仅当外层训练折正例不少于 75 例才训练，左小脑因仅 11 例被排除。

评估采用嵌套分层 5 折交叉验证，并按参与者分组防止同一说话人片段跨折泄漏。每折外层取 80% 参与者用于开发，20% 留出评测，分层依据卒中状态与偏侧化复合标签。内层再分训练与验证，基学习器在内层训练集拟合，超参、阈值与校准参数在内层验证集优化，外层测试折仅做最终推理。体积设理想与门控双模式，前者在确认左半球病灶上训练评测，后者仅在偏侧化预测为左时激活回归，两者对比可量化从粗定位到体积估计的误差传播。11 种变体覆盖 5 种单模态、5 种留一法与一种全模态融合，用于挑选目标最优配置。

推理时单条录音经聚合形成固定向量后，一次前向通过 3 路堆叠集成，分类支输出校准概率并按各自阈值判定，体积支输出对数域预测并可还原为体素立方毫米量级，门控体积支需先看偏侧化分支结论。原文未披露自回归或分块流式方式、前瞻窗口、采样步数、延迟与显存开销，流程为离线整段推理，未说明 RTF（实时因子）与首次触发延迟，部署代价无法从原文量化。

### 分层诊断从近乎完美的卒中检出到中等体积解释的完整证据

评测公平性建立在嵌套分层 5 折与参与者级分组之上，同一说话人片段不跨折，外层 20% 参与者仅用于评测，阈值与校准参数均在内层验证确定。分类以 AUROC（受试者工作特征曲线下面积）、BACC（平衡准确率）与 F1 为主，方向均为越高越好，体积回归以皮尔逊相关系数与决定系数为主，三分类以 BACC 与宏平均 F1 为主，机遇水平为 0.333。区域与体积头仅针对左半球损伤，右半球与双侧病灶不进入体积建模，左小脑因正例过少未建模，阈值策略在不同头之间并不相同。

下表整理诊断与地形分类头的最优特征配置，覆盖卒中检出、偏侧化与 5 个左半球感兴趣区，共七行，每行给出 AUROC、BACC 与 F1 三项指标，配置栏标注被去掉的一类模态。全表数值方向均为越高越好，便于对照顶叶、颞叶、枕叶、皮层下与额叶对声学、声门、流畅性、文本与嵌入特征的依赖差异，理解为何同一表示在不同解剖目标上表现分化。

| 任务 | 特征配置 | AUROC | BACC | F1 |
| --- | --- | --- | --- | --- |
| 卒中检出 | All w/o Emb. | 0.989 | 0.966 | 0.969 |
| 偏侧化 | All w/o Emb. | 0.708 | 0.680 | 0.767 |
| 顶叶感兴趣区 | All w/o Emb. | 0.954 | 0.930 | 0.887 |
| 颞叶感兴趣区 | All w/o Glottal | 0.840 | 0.734 | 0.645 |
| 皮层下感兴趣区 | All w/o Textual | 0.743 | 0.710 | 0.613 |
| 额叶感兴趣区 | All w/o Fluency | 0.724 | 0.680 | 0.654 |
| 枕叶感兴趣区 | All w/o Fluency | 0.826 | 0.768 | 0.443 |

从表中可见全局卒中检出接近上限，偏侧化处于中等水平，左半球内部分化明显，顶叶头三项指标均为各感兴趣区中最高，颞叶次之，枕叶呈现判别指标尚可而 F1 明显偏低的统计特征，提示阴性易排除而阳性召回有限，皮层下与额叶处于中等偏弱区间。最优配置均来自去掉一类模态的全模态变体，嵌入在多个头被去掉，文本在皮层下被去掉，声门在颞叶被去掉，流畅性在额叶与枕叶被去掉。本研究未设人工听测，全部为客观指标，未见 MOS（平均意见分）类主观评分与神经代理评分的对照，结论仅在客观判别意义上成立。

下表为左半球损伤体积量化与三分位分层的最优配置，回归部分给出决定系数、95% 置信区间与相关系数，置信区间来自 2,000 次自助重采样。由于原表将回归与分类挤在同一两列结构中，本精简选择仅呈现回归两行，分类分层部分在原文完整 Table 2（本精简表未列出），以避免两类量纲混读，多值格含义在表后就近说明。

| Regression Configuration | R2 [95% CI] r |
| --- | --- |
| Idealized (Vtrue)All w/o Textual | 0.259 [0.19, 0.32] 0.514 |
| Gated ( ˆVleft) All w/o Glottal | 0.236 [0.17, 0.29] 0.485 |

理想回归在确认左半球病灶上解释约 26% 体积方差，相关系数约 0.51，95% 置信区间为 0.19 至 0.32，配置去掉文本特征。门控回归在偏侧化预测为左时激活，解释方差略低，相关系数约 0.49，区间为 0.17 至 0.29，配置去掉声门特征，两区间大幅重叠且原文报告方差差为 0.023，表明层级误差传播有限。体积三分层平衡准确率与宏平均 F1 均在 0.47 附近，虽高于 0.333 机遇水平，但绝对水平仍低，提示记录级表示编码了分级体积信息而非简单二分病理线索，该部分数值见原文完整 Table 2（本精简表未列出）。

### 去掉哪一类特征反而更好：模态贡献与未做细粒度消融的边界

模态评估固定为 11 种变体，包括 5 种单模态、5 种留一法与一种全模态融合，每种目标独立挑选最优配置。这种设计使归因聚焦于域级贡献，而非单特征重要性，优点是可直接回答去掉哪一域反而更好，代价是无法定位域内具体驱动特征，也未比较不同融合算子本身的优劣。所有最优均来自留一法而非全模态，说明在当前样本与模型容量下存在冗余或任务无关方差。

结果呈现目标特异的最优缺失模式，卒中检出、偏侧化与顶叶映射在去掉嵌入后最好，颞叶在去掉声门后最好，皮层下与理想体积在去掉文本后最好，额叶、枕叶与门控体积分别在去掉流畅性或声门后最好。讨论将其与语言网络组织对照，皮层下与运动执行及构音韵律关系更密，颞叶后部与词汇语义及听觉加工关系更密，枕叶以视觉为主因而信号较弱，嵌入可能捕获任务通用方差而在手工特征齐备时冗余。

缺失的消融在于未从域级下探到特征级，未报告单特征消融、交互效应与跨折稳定性，也未对比注意力动态融合与当前静态拼接的差异。体积仅针对左半球，右半球与双侧负荷的分层与回归未验证，自然对话与噪声场景的泛化同样未评测，这些边界限制了将模态贡献解读为因果机制。

从工程角度看，域级最优为选型提供了初步依据，声学与声门互补于运动性损伤，文本与流畅性互补于语言学损伤，嵌入并非在所有目标上增益。若要落地筛查，需在目标人群中重做留一验证并结合校准曲线，不宜直接照搬当前最优缺失组合，特征级归因与纵向稳定性应作为下一阶段消融重点。

### 概率性推断的适用边界与复现前必须核对的三件事

卒中损伤破坏分布式网络，不同病灶配置可产生相似言语表型，且受认知储备、人口学与环境因素塑造，病灶与行为关系复杂而非确定性映射。因此各头输出应理解为概率性推断而非直接解剖重建，阈值选择本身隐含临床权衡，卒中检出优先保证灵敏度不低于 0.85，偏侧化与分区则以约登指数平衡灵敏度与特异度，不同学科应用需重新校准工作点。

泛化仍是主要挑战，模型训练于受控图片描述任务，包含院内刺激与失语测验图片场景，是否迁移到自然对话、方言、远场拾音与共病嗓音障碍尚未验证。体积与分区聚焦左半球，右半球与双侧病灶的体积估计未建模，左小脑因样本过少未训练，枕叶阳性召回有限提示小样本与视觉主导区的信号稀疏性，实际部署需在目标人群中重估校准与阈值。

复现前需区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行。原文未提供代码仓库、模型权重下载与可运行系统链接，未说明数据许可与演示页，本次未确认公开资源，复现需自行实现特征提取、堆叠集成与嵌套验证流程。原文未设试听页与演示系统，解读不虚构听感对比或网址，工程选型应以离线整段推理为前提，未披露延迟与显存时不承诺实时筛查。

在影像不可及的人群筛查与康复期重复监测中，言语可作为可扩展无创行为模态，先做高灵敏度初筛，再对左半球高疑似者做分区与体积参考，并结合临床量表与影像复核。选型时优先保留声学、声门、流畅性与文本多域互补，避免单域或单嵌入主导，对小样本分区保持保守解读，未来可探索注意力动态融合、特征级归因与纵向建模以提升稳健性与可解释性。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，16 位量化，图片描述录音，人工切分 11,435 个话语并聚合均值标准差与计数，96 维声门、88 维声学、57 维流畅性、83 维文本与 1,024 维嵌入，帧长步长与前瞻延迟原文未披露，RTF（实时因子）原文未披露
- **训练与评测数据**：SONIVA 数据集共 742 例，含 639 例卒中患者与 103 例年龄匹配健康对照，年龄均值约 60.78 岁与 59.65 岁，19 小时患者言语与 3 小时对照言语，图片描述任务，人工按 CHAT 格式转录，结构磁共振经 FSL 与 SPM 配准至 MNI 空间并人工勾画病灶，覆盖 12 个分区，左偏 64.9%，右偏 20.1%，双侧 15%，切分 11,435 个话语，嵌套分层 5 折按参与者分组评估
- **算力与训练耗时**：原文未披露 GPU、CPU、TPU 型号与数量，未披露训练步数与耗时，堆叠集成以传统机器学习为主，嵌入来自冻结 Whisper 中层编码器，未说明微调算力
- **核心超参数与配置**：极端梯度提升树 800 棵，学习率 0.05，最大深度 4，行采样 0.85，列采样 0.85，L2 系数 1.0，种子 0、1 与 2 袋装，早停耐心 40 轮，极端随机树 600 棵，最大特征平方根，叶最小样本 2，L2 正则线性模型，岭系数候选 1、10、100、1,000 与 10,000 以内层验证选择，体积对数变换与三分位离散，阈值灵敏度约束与约登指数选择
- **推理速度与部署开销**：原文未披露 RTF（实时因子）、延迟、吞吐与显存占用，流程为离线整段记录级推理，门控体积依赖偏侧化分支结论，无法量化部署代价
- **开源产物与协议状态**：原文未提供代码仓库、模型权重下载与可运行系统链接，未说明数据许可与演示页，本次未确认公开资源，复现需自行实现
- **附录与补充材料要点**：原文未设独立附录，关键细节见正文方法与参考文献，含特征提取工具版本、校准与验证流程、置信区间自助方法与失效讨论

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 7.4/10 | 技术严谨 7.0/10 | 实验充分 5.9/10 | 清晰度 6.6/10 | 影响力 5.3/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:avsp:2026:conference-paper-id:sanguedolce26_avsp`
- 会议来源：[官方记录](https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.html) · [官方 PDF](https://www.isca-archive.org/avsp_2026/sanguedolce26_avsp.pdf)
- Track：Health Data

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：742例受试者配对11435个话语与体素级手动病灶掩膜经神经科医师核验，数据规模与标注质量扎实。

- 核心优势：卒中检出AUROC达0.989且左侧顶叶达0.954，头特异留一法比较揭示多域互补规律。

- 核心优势：采用按受试者分组的嵌套分层5折、内验证选阈值与Platt校准及2000次自助置信区间，防泄漏设计严谨。

- 主要短板：未设外部同条件基线且11种变体仅报告最优行无显著性对比，消融与对照证据不完整。

- 主要短板：体积R2仅0.259、三分层BACC仅0.480且枕叶F1仅0.443，定量与小样本头性能绝对值偏低。

- 主要短板：未提及代码权重数据集演示与可验证URL，无任何公开产物可供核查复用。

---

[← 返回 avsp-2026 论文汇总](/audio-research-portal/posts/conference-avsp-2026/)
