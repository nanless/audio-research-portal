---
title: "Face Is Not All You Need: MIME Benchmark for Incomplete Multimodal Emotion Recognition"
date: 2026-11-24
draft: false
tags: [多模态情感极性分析, 基准设计, 基准测试, 数据集]
categories: [论文速递]
description: "针对高度依赖人脸的情绪识别在真实缺失下崩塌的问题，MIME 以 7 档细粒度与粗粒度缺失加情感链评测为手段，证明身体与场景可在面部退化时补偿而最强模型 F1 仍不足 50，代价是 2,000 规模较小且依赖模型生成与自动打分。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30288"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "脸并非全部：面向缺失模态的情绪识别基准 MIME 解读"
paper_digest_original_title: "Face Is Not All You Need: MIME Benchmark for Incomplete Multimodal Emotion Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30288v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30288v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30288v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对高度依赖人脸的情绪识别在真实缺失下崩塌的问题，MIME 以 7 档细粒度与粗粒度缺失加情感链评测为手段，证明身体与场景可在面部退化时补偿而最强模型 F1 仍不足 50，代价是 2,000 规模较小且依赖模型生成与自动打分。"
paper_digest_reader_sections: [{"heading":"只依赖人脸的情绪识别为何在真实缺失中失效","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"MIME 如何把缺失分级并串起从退化到评分的流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"情感链如何把场景理解与情绪推理拆开打分","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"七类缺失子集与 2,000 个片段的分布控制","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"七个大模型在缺失下的得分、补偿效应与情绪差异","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"基准边界、复现核对与何时借用 MIME 做稳健性验证","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["School of Computer Science and Engineering, Northeastern University, Shenyang, China","Hubei Key Laboratory of Multimedia and Network Communication Engineering, Wuhan University, Wuhan, China"],"name":"Yuxin Jia"},{"affiliations":["School of Computer Science and Engineering, Northeastern University, Shenyang, China","State Key Lab. of Novel Software Technology, Nanjing University, Nanjing, China"],"name":"Xing Lan"},{"affiliations":["School of Computer Science and Engineering, Northeastern University, Shenyang, China","National Engineering Research Centre for Multimedia Software (NERCMS), Wuhan University, Wuhan, China"],"name":"Wensong Wang"},{"affiliations":["School of Engineering Science, University of Chinese Academy of Sciences, Beijing, China"],"name":"Jian Xue"},{"affiliations":["School of Computer Science and Engineering, Northeastern University, Shenyang, China"],"name":"Feiliang Ren"},{"affiliations":["School of Engineering Science, University of Chinese Academy of Sciences, Beijing, China"],"name":"Ke Lu"}]
paper_digest_abstract_sha256: "571b1d8a7cb4e47d9a7bad6db7e3218fbab0907993256a11b2bb4ef97fb490e4"
paper_digest_sidecars: {"citation.bib":{"sha256":"6a029f9c50ffd19e748fb7e79e76f680b69e7c56710bcdc4d136692476edde8f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30288/citation.bib"},"citation.json":{"sha256":"9c4f27a96073ef06705dca6c7740afca4d39a1fcaad807a1eaf6fb3bbc264755","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30288/citation.json"},"citation.ris":{"sha256":"f76e0a69f02e8cc7cf191748c9c96937d64a693f76e441cc096fa591de7390e0","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30288/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a1e3330b91d9ae8d2edb64cb80e8f2e92b51bf825e3e1d9686fce14c2cc2dc8b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30288/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "61205258f939396618ffd45ea981000d05c89fe44269a3ddaad941053701e12c"
paper_digest_api_reader_plan_sha256: "e4bd17097c981955e74050d8d1f5c5fe1f46cf9d07cee5384fd5fdea08192cd1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "43fb98deceb12351fb2b13e68232cf6dd527b3cb329a7ee5ad0307b88c778e87"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "c9ae8eabd8157fcf3d83010882e76682cc4f01d49659def3f804956c70cfa295"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7454174630b919acb1114bd797cea23a0961b3f7c29946629e22ef248484b8b2"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "445f021420baf4624dd42aafbe51baa977cfc47d870a76a3e61f4d836e2d0be8"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 脸并非全部：面向缺失模态的情绪识别基准 MIME 解读

> 英文题目：*[Face Is Not All You Need: MIME Benchmark for Incomplete Multimodal Emotion Recognition](https://arxiv.org/abs/2611.30288v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.5/10 | 技术严谨 6.6/10 | 实验充分 6.4/10 | 清晰度 6.9/10 | 影响力 5.6/10 | 开源 8.0/10 | 可复现 5.5/10 | 工程/实践 6.2/10
>
> 发表/录用标记：ACM MM 2026
>
> DOI：`10.1145/3767308.3838643`


## 👥 作者与机构

- Yuxin Jia：School of Computer Science and Engineering, Northeastern University, Shenyang, China；Hubei Key Laboratory of Multimedia and Network Communication Engineering, Wuhan University, Wuhan, China
- Xing Lan：School of Computer Science and Engineering, Northeastern University, Shenyang, China；State Key Lab. of Novel Software Technology, Nanjing University, Nanjing, China
- Wensong Wang：School of Computer Science and Engineering, Northeastern University, Shenyang, China；National Engineering Research Centre for Multimedia Software (NERCMS), Wuhan University, Wuhan, China
- Jian Xue：School of Engineering Science, University of Chinese Academy of Sciences, Beijing, China
- Feiliang Ren：School of Computer Science and Engineering, Northeastern University, Shenyang, China
- Ke Lu：School of Engineering Science, University of Chinese Academy of Sciences, Beijing, China

## 📌 核心摘要

**问题与瓶颈：** 多模态情绪识别要从人脸、身体、场景和音频等线索综合判断人物情绪，输入是一段包含画面与声音的视频片段，输出是高兴、悲伤、中性、愤怒、厌恶、恐惧和惊讶 7 种情绪之一。现有主流方法把清晰人脸当作核心判断依据，在完整对齐输入下表现较好，但在遮挡、光照变化、传感器故障、丢包或隐私遮蔽导致面部细节受损乃至视觉或音频完全缺失时性能急剧下降。已有缺失模态研究多是粗粒度地整体删掉一路信号，无法模拟面部局部退化这类细粒度损失，也缺少对模型如何利用残余线索推理情绪的可解释分析。这一缺口使得实验室结果难以反映真实部署的可靠性。

**核心思路与方法架构：** 与直接删掉整路模态的粗粒度评测不同，本文把不完整多模态情绪识别形式化为多粒度缺失下的泛化与鲁棒性评测，把缺失细化为面部细节与面部结构两个层级，并与音频缺失组合形成 7 个子集。多模态情绪缺失信息基准 Missing Information in Multimodal Emotion (MIME) 包含 2000 个视频片段，来源覆盖社交媒体与 CAER、DFEW、MAFW 和 FERV39k 四个野外基准，情绪类别经均衡重采样。一个待测片段先按缺失类型做模态退化处理，保留可用的面部、身体、场景和音频证据，再要求被测大模型按情绪链 Chain of Emotion (CoE) 分三步作答：先描述各可用模态的客观线索，再把线索映射为情绪状态的推理过程，最后给出离散情绪标签。参考答案由 Qwen3-Omni 经四阶段流程生成并抑制幻觉，评分阶段用 Qwen3.5-plus 作为评判模型对生成文本打分，被测的 7 个模型均在零样本下做离线推理，不做任何更新。评测分两阶段，分类用准确率 ACC 与 F1，推理质量用 0 到 10 分的三项分数及其加权综合指数衡量，其中综合指数 Holistic CoE Index (HCI) 对三者按 0.4、0.3 和 0.3 加权。

**关键实验与核心代价：** 在 MIME 全量子集上的总体比较中，Gemini-3.1-flash 的 F1 为 46.61，略高于最强可比基线 Doubao-seed-2-0 的 45.27，而 Qwen3.5-plus 为 42.60，GPT-5.4-nano 与 GPT-5-nano 则分别仅为 26.21 和 27.01，所有 7 个模型 F1 均低于 50。推理质量上 Qwen3.5-plus 的 HCI 为 5.60，略高于 Gemini-3.1-flash 的 5.59，但其上下文感知 Context Perception Score (CPS) 为 6.70，明显高于情感推断 Affective Inference Score (AIS) 的 5.32，暴露出能看清线索却难做共情推理的瓶颈。子集对比显示音频具有补偿作用，面部细节受损时再去掉音频，Qwen3.5-27b 的 WF1 从 46.81 降至 30.75，Gemini-3.1-flash 从 49.82 降至 37.31。主要代价是面部与音频联合缺失时只能依赖身体与场景，分类与推理同步下滑，且轻量模型推理链碎片化更明显。评判依赖模型自动打分，虽在 173 个样本上经 3 位专家核验达到 Spearman 相关 0.9415、Cohen Kappa 系数 0.8542 和组内相关系数 0.9628，但仍缺少更大规模人工核验。

**适用边界与深读导览：** 上述结论仅在零样本、离线片段评测和本文模拟的 7 种缺失组合下成立，未覆盖持续视频流、真实丢包时序、多轮交互或端侧实时约束，也未验证微调或专门补偿训练能否恢复性能。想深究三项感知与推理指标的加权计算与缺失指示变量处理，可查阅方法章节的公式说明；想核对各子集与各情绪的细分胜负，可查阅实验章节的两张关键表格。

## 🔗 开源与复现资源

- 代码相关资源：<https://yuxinokk.github.io/MIME> → <https://yuxinokk.github.io/MIME/> — 链接可访问（HTTP 200）

- 数据相关资源：<https://yuxinokk.github.io/MIME> → <https://yuxinokk.github.io/MIME/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只依赖人脸的情绪识别为何在真实缺失中失效

多模态情绪识别（Multimodal Emotion Recognition, MER）要从人脸动态、语音语调、身体姿态与场景上下文共同推断人的情绪状态，覆盖 Happy、Sad、Neutral、Anger、Disgust、Fear 与 Surprise 共 7 种基本类别。近年方法通过融合多路线索在完整对齐输入下取得较好效果，但这一成绩建立在输入完整可用的理想假设上。真实部署中常出现面部遮挡、光照波动、传感器故障、网络丢包与隐私遮蔽，导致关键证据部分退化或完全丢失，高度依赖人脸的模型会出现性能骤降乃至功能失效。

为贴近这种现实，论文正式定义不完整多模态情绪识别（Incomplete Multimodal Emotion Recognition, IMER）任务，考察模型在多粒度模态缺失与情感信息丢失下的泛化与稳健性。与标准 MER 不同，IMER 不再假设视觉与音频完整出现，而是系统评估细粒度面部细节退化、严重面部结构缺失与极端全模态丢失。已有缺失模态研究多为粗粒度整路删除，仅保留一到两种模态，无法刻画面部证据部分可用时的语义损失，也缺少对推理过程的可解释剖析，这正是新任务要补齐的空白。

下表对照 MIME 与 12 种相关基准的格式与能力差异，比较维度包括数据格式、是否支持缺失评估、缺失粒度是粗粒度还是细粒度与粗粒度兼顾，以及是否提供情感链解释。早期文本与图像基准完全不支持缺失评估，IEMOCAP 与 MOSI 虽支持缺失但仅为粗粒度整路删除，MME-Emotion 虽有情感链却不支持缺失评估。这一对照有助于看清 MIME 把视频模态解耦为脸部、身体、场景与音频并同时支持细粒度缺失与推理链的增量位置。

| Benchmark | Format | Supp. Incomplete | Incom. grained | Chain of Emotion |
| --- | --- | --- | --- | --- |
| IEMOCAP (Busso et al., 2008a) | Video | ✓ | Coarse | ✗ |
| MOSI (Zadeh et al., 2016) | Video | ✓ | Coarse | ✗ |
| MME-Emotion (Zhang et al., 2026) | Video | ✗ | ✗ | ✓ |
| MIME (Ours) | Video | ✓ | Fine & Coarse | ✓ |

从对照可见，仅有 MIME 同时满足视频格式、支持缺失评估、覆盖细粒度与粗粒度缺失并提供情感链，其余基准至多满足其中一项。IEMOCAP 与 MOSI 的粗粒度设定无法区分面部细节模糊与结构遮挡，MME-Emotion 的推理链无法用于稳健性排序。这种完备性代价是规模仅为 2,000 个片段，远小于无约束视频库，且细粒度退化依赖人工构造的模拟缺失，与真实遮挡与丢包仍有分布差距，选用时需意识到覆盖度与仿真保真度的权衡。

### MIME 如何把缺失分级并串起从退化到评分的流水线

MIME 从社交媒体与 CAER、DFEW、MAFW、FERV39k 共 4 种野外基准收集原始视频，覆盖 7 种基本情绪并做均衡重采样以缓解长尾偏置，最终形成 2,000 个片段。关键设计是把视频信号解耦为 7 个子集，分别为完整模态（Full Modality, FM）、面部细节缺失（Face Details Missing, FDM）、面部结构缺失（Face Structures Missing, FSM）、视觉缺失（Visual Modality Missing, VMM）、面部细节加音频缺失（Face Details and Audio Missing, FDAM）、面部结构加音频缺失（Face Structures and Audio Missing, FSAM）与音频缺失（Audio Modality Missing, AMM）。前两者刻画面部证据部分退化而非全有全无，后两者考察跨模态联合丢失。

数据构造采用以 Qwen3-Omni 为核心的四阶段管线，先从清晰视频抽取脸部、音频、场景与身体线索，再在 FDM、FSM、FDAM 与 FSAM 等涉及面部退化的子集中做残留线索校验，只保留退化后仍可判读的样本。随后模型在真实标签约束下生成包含场景理解、情绪分析与结论的三段式标准情感链，并经预测与真值一致性检查加人工核查过滤，不一致样本直接丢弃。这一设计把缺失仿真、线索可判读性与标签对齐绑在一起，避免用完全不可解的样本惩罚模型。

阅读流水线示意图时可先看顶部测试提示与 7 个子集定义，再沿中部蓝色数据集构造框追踪从清晰视频到线索抽取、残留验证、标准链生成与质量过滤的闭环，接着看右侧被测模型的 3 段输出如何送入底部评测套件，最后对照右下角人工验证的直方图与一致性数值，整体就形成从退化构造到自动评分再到人工校准的完整回路。

[![原论文 Figure 1.：Illustration of Our Data Construction and Evaluation Strategy.Overview of the MIME construction…](https://arxiv.org/html/2611.30288v1/figs/fig_pipeline.png)](https://arxiv.org/html/2611.30288v1/figs/fig_pipeline.png)

*论文图 1：MIME 数据构造与评测流水线，覆盖模态退化、线索校验、情感链生成、自动评分与人工验证（原论文 Figure 1）。*

图中顶部明确列出 Subset 1 至 Subset 7 的缺失定义，测试提示要求模型按场景理解、情绪分析与结论三节组织推理，候选标签限定为 7 种基本情绪。中部示例并置面部不可用的模糊视频与清晰视频，右侧模型输出以白衣女子指向前方的客厅场景为例给出 Anger 结论。底部评测套件示例显示 Face 为 Null 时仅对身体、场景与音频打分，得到上下文感知 6.67 分、情感推断 7.67 分与标签一致 10 分，综合为 7.97 分。右下角人类验证给出 Spearman 系数为 0.9415、Kappa 系数为 0.8542 与组内相关系数为 0.9628，直方图显示机器与专家打分高度重叠。

### 情感链如何把场景理解与情绪推理拆开打分

情感链（Chain of Emotion, CoE）要求被测多模态大语言模型（Multimodal Large Language Model, MLLM）在给出最终类别前，先分模态陈述观察再做推理，把以往只看准确率的黑盒评估拆为可检查的中间步骤。具体分为场景理解（Scene Understanding, Csene）、情绪分析（Emotional Analysis, Aemo）与预测情绪（Predicted Emotion, L）三折。场景理解只描述可用模态中的客观事实，情绪分析显式写出从线索到内在状态的逻辑链，结论则必须与真值标签对齐的离散类别。这种解耦使身体与场景补偿是否被正确利用变得可见。

#### 感知打分如何只聚合有效模态

上下文感知得分（Context Perception Score, CPS）考察模型是否准确捕获残存物理线索，只在有效模态上平均。记模态集合为 \( \mathcal{M} = \{f, b, s, a\} \)，分别对应脸部、身体、场景与音频，\( I_m \) 为示性变量，取 1 表示该模态可用或退化但可观察，取 0 表示真正缺失，\( s^{cps}_m \) 为该模态在 0 到 10 分之间的感知小分。分母为有效模态总数，避免缺失模态拉低平均。

\[CPS=\frac{\sum_{m\in\mathcal{M}}I_{m}\cdot s^{cps}_{m}}{\sum_{m\in\mathcal{M}}I_{m}}\]

采用加权平均而非求和的直觉是公平比较不同缺失组合，若直接求和，缺失两路的样本天然低于完整样本。极端情形下若仅剩音频，则分母为 1，CPS 完全由音频小分决定，若全部缺失则分母为零而无定义，实际评测中至少保留一路可观察模态。CPS 的输出不直接决定类别，而是作为后续判断推理是否建立在正确事实上的前提，若感知错误而结论正确，则可判定为猜中而非合理补偿。

情感推断得分（Affective Inference Score, AIS）沿用同样的有效模态平均形式，但考察从已感知线索推出情绪状态的逻辑严密性，并对幻觉做显式惩罚。符号含义与 CPS 一致，\( s^{ais}_m \) 为每一有效模态在 0 到 10 分之间的推断小分，\( I_m \) 仍指示该模态是否参与计分。两式分母相同，保证感知与推理在同一有效集合上比较，差异只来自小分本身而非参与模态不同。

\[AIS=\frac{\sum_{m\in\mathcal{M}}I_{m}\cdot s^{ais}_{m}}{\sum_{m\in\mathcal{M}}I_{m}}\]

AIS 与 CPS 拉开差距正是论文要暴露的认知瓶颈，模型能看见客厅摆设与身体前倾，却可能把紧张误读为愤怒或把恐惧误判为惊讶。极端取值上，若模型在脸部为 Null 时仍描述面部细节，AIS 会被扣分，即使 CPS 因正确描述身体与场景而较高。若 AIS 持续低于 CPS，说明视觉基础尚可但共情映射不足，后续综合指数会因此下调，引导研究者优先补齐跨模态重加权而非单纯增强检测器。

#### 综合指数如何强调基础理解

标签一致性得分（Label Consistency Score, LCS）检查长文本推理的语义结论是否与最终分类严格一致，一致得 10 分，否则得 0 分。综合情感链指数（Holistic CoE Index, HCI）把三者加权为单一可比指标，其中 \( \alpha = 0.4 \) 与 \( \beta = 0.3 \) 为经验权重，剩余权重 0.3 留给 LCS，以突出基础上下文理解的决定作用。所有分量量纲统一为 0 到 10 分，加权后仍落在同一区间。

\[HCI=\alpha\cdot CPS+\beta\cdot AIS+(1-\alpha-\beta)\cdot LCS\]

加权而非等权的直觉是推理再流畅也不能脱离事实，若感知崩塌而标签偶然猜中，HCI 仍会被 CPS 拉低。极端情形下 LCS 取 0 会直接扣除 3 分，即使 CPS 与 AIS 满分也只能得 7 分，反之三项满分则得 10 分。HCI 不参与梯度更新，因为基准只做零样本评测不训练模型，它的下游作用是作为模型排序与失效归因的依据，HCI 高而准确率低或反之的背离都提示评委打分或标签本身需要复核。

### 七类缺失子集与 2,000 个片段的分布控制

7 个子集的划分体现多粒度思想，FDM 保留面部结构但模糊细节，模拟远距离、低分辨率或轻度遮挡，FSM 进一步破坏结构使表情不可读，接近重度遮挡或隐私打码。VMM 与 AMM 为极端整路丢失，分别只留音频或只留视觉，FDAM 与 FSAM 则为跨模态联合缺失，要求模型在脸部不可靠且无声时仅靠身体与场景推断。这种从细节退化到结构破坏再到整路消失的阶梯，使评测能定位模型究竟在哪一级开始崩塌，而非笼统报告缺失即下降。

观察任务类型轮盘时可先看中心 MIME 向外辐射的 7 个扇区，内圈标注从 FM 到 AMM 的缺失类型，外圈对应生活方式、电影、博客、动作、喜剧、科幻、惊悚、脱口秀、日常生活与综艺等野外场景。再比较不同扇区的外圈颜色与标签密度，就能判断缺失类型是否被系统解耦到多样上下文，而非集中在单一影视来源，这一分布控制是泛化结论可信的前提。

[![原论文 Figure 2.：Overview of MIME’s Task Types.Task types across diverse video scenarios.MIME task types across…](https://arxiv.org/html/2611.30288v1/fig1_left.png)](https://arxiv.org/html/2611.30288v1/fig1_left.png)

*论文图 2：MIME 七类缺失子集与生活方式、影视、博客等多类野外场景的轮盘分布（原论文 Figure 2）。*

轮盘显示 Subset 1 对应 FM，Subset 2 对应 FDM，Subset 3 对应 FSM，Subset 4 对应 VMM，Subset 5 对应 FDAM，Subset 6 对应 FSAM，Subset 7 对应 AMM，每个内圈缺失类型都向外连接到多个场景标签，如电影、剧集、短视频、家庭、办公室、学校、婚礼与演唱会等。原文另以条形分布说明 7 种情绪样本均衡且不同子集的平均音视频时长分布均匀，避免用时长线索或类别先验投机取巧。这种双重均衡使跨子集比较更接近能力差异而非数据偏置，但 2,000 个片段分摊到 7 个子集与 7 种情绪后，每格样本仍然偏少，长尾情绪如 Disgust 的估计方差会偏大。

### 七个大模型在缺失下的得分、补偿效应与情绪差异

评测在零样本设定下比较 7 个主流 MLLM，包括 GPT-5 系列的 gpt-5.4-nano、gpt-5-mini 与 gpt-5-nano，Gemini 系列的 gemini-3.1-flash，Qwen 系列的 qwen3.5-plus 与 qwen3.5-27b，以及 doubao-seed-2-0。所有模型收到统一测试提示并被要求输出三段式 CoE，评委模型 Qwen3.5-plus 以多线程并发对生成文本按事实依据与逻辑一致打分。第一阶段报告准确率（Accuracy, ACC）与 F1 分数，第二阶段报告 CPS、AIS、LCS 与 HCI，人工验证用 3 位专家标注 173 个样本校准自动打分，公平性建立在同提示、同标签集与同评委的条件下。

#### 总体分类与推理质量的上限

下表汇总各模型在全部缺失条件下的总体表现，F1 与 HCI 为主要排序依据，CPS 与 AIS 揭示感知与推理的落差，LCS 反映推理与结论的一致性。原表头标注 F1 单位为 %，CPS、AIS、LCS 与 HCI 量纲为 0 到 10 分，数值越大越好。比较时需注意评委与被测模型存在同源可能，qwen3.5-plus 既是选手又是评委，其 HCI 优势需结合人工验证的相关性来理解，而非视为绝对真理。

| Model | F1 | CPS | AIS | LCS | HCI |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5-27b (Qwen Team, 2026) | 40.99 | 6.57 | 5.13 | 4.32 | 5.46 |
| Qwen3.5-plus (Qwen Team, 2026) | 42.60 | 6.70 | 5.32 | 4.43 | 5.60 |
| GPT-5.4-nano (OpenAI, 2026c) | 26.21 | 5.41 | 3.97 | 2.93 | 4.23 |
| Gemini-3.1-flash (Google, 2026) | 46.61 | 6.54 | 5.24 | 4.68 | 5.59 |
| GPT-5-mini (OpenAI, 2026a) | 33.52 | 5.91 | 4.42 | 3.48 | 4.73 |
| Doubao-seed-2-0 (ByteDance Seed Team, 2026) | 45.27 | 6.43 | 4.96 | 4.65 | 5.46 |
| GPT-5-nano (OpenAI, 2026b) | 27.01 | 5.53 | 4.06 | 2.95 | 4.31 |

总体上没有模型越过 F1 为 50 的门槛，最强的 gemini-3.1-flash 为 46.61%，其次为 doubao-seed-2-0 的 45.27% 与 qwen3.5-plus 的 42.60%，而 gpt-5.4-nano 与 gpt-5-nano 分别仅为 26.21% 与 27.01%，HCI 也只有 4.23 与 4.31，呈现轻量模型断崖式落后。推理质量上 qwen3.5-plus 以 CPS 为 6.70、AIS 为 5.32 与 HCI 为 5.60 居首，gemini-3.1-flash 以 LCS 为 4.68 与 HCI 为 5.59 紧随，说明能看见不等于能理解，所有模型的 CPS 都高于 AIS。代价是高分仍远离满分 10 分，且 Disgust 等类别的短板被平均数掩盖，需结合分情绪表才能看全。

#### 缺失组合如何暴露音频补偿

下表聚焦跨子集的加权 F1 表现，展示 FM、FDM、FSM、FDAM、FSAM 共 5 个多模态条件下的 WF1 分数，数值越大越好，意在对比面部退化程度相同时有无音频的差异。FDM 与 FDAM 仅差音频是否缺失，FSM 与 FSAM 同理，FM 作为完整输入的参照。本表未列 VMM 与 AMM，两者定义来自原文 7 子集划分，VMM 只留音频而 AMM 只留视觉，解读时不与本表列混淆，避免把场景偏置误读为模态重要性。

| Model | FM WF1 | FDM WF1 | FSM WF1 | FDAM WF1 | FSAM WF1 |
| --- | --- | --- | --- | --- | --- |
| gpt-5.4-nano (OpenAI, 2026c) | 18.92 | 19.70 | 27.80 | 16.29 | 29.72 |
| gpt-5-mini (OpenAI, 2026a) | 24.13 | 22.80 | 34.70 | 21.98 | 42.36 |
| gemini-3.1-flash (Google, 2026) | 44.83 | 49.82 | 50.09 | 37.31 | 47.33 |
| gpt-5-nano (OpenAI, 2026b) | 19.87 | 16.48 | 25.22 | 16.61 | 33.47 |
| qwen3.5-plus (Qwen Team, 2026) | 45.32 | 42.26 | 38.79 | 32.30 | 49.28 |
| qwen3.5-27b (Qwen Team, 2026) | 40.57 | 46.81 | 40.79 | 30.75 | 44.43 |
| doubao-seed-2-0 (ByteDance Seed Team, 2026) | 48.10 | 48.29 | 45.61 | 38.02 | 47.65 |

去掉音频的代价在面部细节退化时最为清晰，原文报告 qwen3.5-27b 从 46.81 降至 30.75，降幅为 16.06，gemini-3.1-flash 从 49.82 降至 37.31，降幅为 12.51，说明音频在脸部不可靠时起补偿作用。完整输入并非总是最优，doubao-seed-2-0 在 FM 取得 48.10 的高分，但在 FDAM 跌至 38.02，跨模态联合缺失仍是较难条件。原文完整 Table 3 中 VMM 下 gpt-5-mini 的 WF1 为 48.78，这一数值未列于本表，而本表 FSM 下 gemini-3.1-flash 保持 50.09 的稳定，提示不同模型对身体与场景线索的重加权策略差异很大，不能用单一主线索解释全部排序。

#### 情绪类别差异与典型推理失效

下表展示 7 种情绪各自的 F1 分数，数值越大越好，ACC 列为节省篇幅略去，完整 ACC 可回查原表。情绪维度能揭示总体平均掩盖的结构性偏置，例如某些模型靠 Happy 与 Anger 拉高平均，却在 Disgust 与 Surprise 上系统失效。比较时需注意 F1 量纲为 0 到 1，与前两表的 % 量纲不同，不可跨表直接相减，同一情绪列内比较才有意义。

| Model | Happy F1 | Sad F1 | Neutral F1 | Anger F1 | Disgust F1 | Fear F1 | Surprise F1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| gpt-5.4-nano (OpenAI, 2026c) | 0.23 | 0.27 | 0.28 | 0.41 | 0.16 | 0.35 | 0.14 |
| gpt-5-mini (OpenAI, 2026a) | 0.28 | 0.36 | 0.31 | 0.43 | 0.20 | 0.45 | 0.30 |
| gemini-3.1-flash (Google, 2026) | 0.57 | 0.52 | 0.41 | 0.52 | 0.32 | 0.46 | 0.47 |
| gpt-5-nano (OpenAI, 2026b) | 0.19 | 0.29 | 0.31 | 0.39 | 0.09 | 0.38 | 0.24 |
| qwen3.5-plus (Qwen Team, 2026) | 0.59 | 0.48 | 0.35 | 0.54 | 0.14 | 0.48 | 0.40 |
| qwen3.5-27b (Qwen Team, 2026) | 0.58 | 0.45 | 0.35 | 0.49 | 0.12 | 0.45 | 0.43 |
| doubao-seed-2-0 (ByteDance Seed Team, 2026) | 0.59 | 0.50 | 0.40 | 0.53 | 0.27 | 0.41 | 0.46 |

Happy 上 doubao-seed-2-0 与 qwen3.5-plus 均达 0.59 并列领先，Anger 上 qwen3.5-plus 以 0.54 居首，Sad 上 gemini-3.1-flash 以 0.52 领先，而 Disgust 全员低迷，最高的 gemini-3.1-flash 仅为 0.32，最低的 gpt-5-nano 仅为 0.09，说明厌恶的细微面部与语气线索在缺失下最难补偿。Neutral 上 gemini-3.1-flash 以 0.41 领先却伴随 ACC 高达 68.20 的偏置，Fear 上 qwen3.5-plus 以 0.48 领先，Surprise 上 gemini-3.1-flash 以 0.47 领先。这种分化意味着总体 F1 第一不等于每类都强，部署到厌恶敏感场景时仍需单独验证。

在看失效案例图前可先读顶部任务要求与标准情感链，再逐行对比 Qwen3.5-plus 与 GPT-5-mini 的场景理解与情绪分析，最后对照右侧三项评分，重点观察面部重度模糊时身体前倾、昏暗草地与颤抖高音如何被不同模型利用或误用，这一对比能把 CPS 与 AIS 的分差落到具体文本上。

[![原论文 Figure 4.：Error cases of model responses.Examples comparing ground-truth CoE reasoning with model…](https://arxiv.org/html/2611.30288v1/fig_failed_example.png)](https://arxiv.org/html/2611.30288v1/fig_failed_example.png)

*论文图 4：面部重度模糊下标准情感链与两模型推理对比，揭示感知与推理的落差（原论文 Figure 4）。*

标准链明确给出 Fear，依据是头部上倾、双臂贴紧、高音颤抖的问句与阴森场景放大的不安。Qwen3.5-plus 正确抓住昏暗蓝调灯光、相对静止中的轻微前倾与包围感，虽未点名颤抖语调仍判为 Fear，获得场景 4.67 分、推理 5 分与一致 10 分。GPT-5-mini 则过度强调多次剧烈抬头与右侧亮斑，把短暂惊跳误判为 Surprise，场景同样得 4.67 分但推理仅 3 分且一致为 0 分。2 例 CPS 相同而 AIS 与 LCS 分化，正好说明看见与理解的鸿沟，以及标签一致对综合指数的杠杆作用。

### 基准边界、复现核对与何时借用 MIME 做稳健性验证

MIME 的结论建立在三点假设上，一是用模糊与遮挡模拟真实退化，无法完全复刻光照突变、运动模糊、麦克风失真与网络抖动的联合分布，二是用 7 类离散标签概括连续情绪，混合情绪与微表情会被迫归入单类，三是用 Qwen3.5-plus 做评委，虽经 173 个样本的人工校准取得 0.9415 的 Spearman 相关与 0.8542 的 Kappa 一致，仍可能偏好同系列模型的表达风格。这些边界意味着跨数据集与跨语言部署时排序可能漂移，未验证流式分块、前瞻延迟与实时率等在线条件，实验室零样本分数不能直接换算为产品体验。

复现核对需区分三件事，代码与数据集已在 <https://yuxinokk.github.io/MIME> 公开且当前可访问，附带构造管线与评测脚本说明。模型权重是否可下载取决于第三方，被测的 GPT-5、Gemini、Qwen 与 Doubao 多以接口提供，需自行申请密钥而非本地权重。系统可运行还要求补齐接口费用、并发限速与版本锁定，因为闭源模型会迭代，原文的 gpt-5.4-nano 与 gemini-3.1-flash 快照可能随时间变化，建议先跑通 FM 与 AMM 这 2 个极端子集再扩展到全部 7 个子集。

若打开演示页试看，建议重点对照面部打码后身体与场景如何补偿，例如在 FDAM 样本中只听语调与看站姿能否得出 Fear，以及 Disgust 样本为何全员偏低，比较不同模型的情感链是否出现无面部却写面部细节的幻觉。工程选型上，当业务涉及遮挡、远摄或隐私打码且不能保证音频常在时，值得借用 MIME 做稳健性摸底，优先关注 FDAM 与 FSAM 的 WF1 与 HCI 而非仅看完整输入。复现第一步是固定提示模板与评委版本，再补做重复运行方差与人工抽检，避免把评委偏好误读为能力差距。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露统一采样率、帧率与码率；各子集平均音视频时长分布均匀，具体秒数未以数字表给出；无因果前瞻延迟与 RTF 报告。
- **训练与评测数据**：MIME 含 2,000 个视频片段，源自社交媒体与 CAER、DFEW、MAFW、FERV39k，覆盖 7 类基本情绪并做均衡重采样，按 FM 等 7 个子集划分；评测为零样本，无额外训练。
- **算力与训练耗时**：原文未披露 GPU/TPU 型号与数量及训练耗时；评测调用 7 个 MLLM 接口并以 Qwen3.5-plus 多线程并发打分，未披露具体硬件配置。
- **核心超参数与配置**：无模型训练；HCI 权重 alpha 为 0.4、beta 为 0.3，CPS、AIS、LCS 量纲为 0 到 10 分；CoE 生成用 Qwen3-Omni，裁判用 Qwen3.5-plus，人工校准 173 个样本。
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存；全部实验为零样本推理加 LLM 裁判打分，无本地推理开销报告。
- **开源产物与协议状态**：数据集与代码在 <https://yuxinokk.github.io/MIME> 公开且本次可访问；被测 GPT-5、Gemini、Qwen 与 Doubao 多为闭源接口，需自行申请密钥。
- **附录与补充材料要点**：附录披露 CoE 四阶段生成管线细节与预测和真值一致性过滤规则；未给出完整超参数表与全量失效统计。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.30288v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：区分面部细节缺失与结构缺失并与音频缺失正交组合形成7个子集，2000片段经均衡重采样覆盖社交媒体与四野外基准。

- 核心优势：提出三折CoE范式与仅在有效模态平均的CPS/AIS/LCS/HCI公式，并在173样本上经3位专家核验达Spearman0.9415与Kappa0.8542。

- 核心优势：在7个主流MLLM上给出总体与7子集加权F1及分情绪ACC/F1全量对比，量化音频补偿如16.06与12.51个百分点下降。

- 主要短板：参考CoE由Qwen3-Omni生成致幻觉偏好渗入真值标签，且人工模态退化与真实遮挡丢包时序特性仍有距离。

- 主要短板：评判模型Qwen3.5-plus既当裁判又当选手未做跨家族裁判对照，且HCI相关性未报告显著性检验与提示词消融。

- 主要短板：遮挡算子模糊强度音频静音实现与各子集样本量及平均时长秒数在正文未说明，提示词阈值仅放附录。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
