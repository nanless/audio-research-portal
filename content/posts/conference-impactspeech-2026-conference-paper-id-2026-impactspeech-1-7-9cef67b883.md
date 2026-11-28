---
title: "Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs"
date: 2026-11-27
draft: false
description: "本文在 SLAM-ASR 上对 Whisper 编码器做自顶向下剪枝并在每一深度重训投影器，发现大模型剪 2 层时总体 WER（词错误率）从 21.6% 降到 21.1% 却让黑人组上升 0.9 pp 且黑人与亚裔差距到 8 层从 13.5 pp 扩大到 24.5 pp，低秩适应虽降低总体却把比值拉大，跨语言对照显示代价必须用分群最差组指标来选型。"
tags: ["LoRA", "模型剪枝", "公平性", "语音识别"]
categories: ["impactspeech-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "剪枝省算力却放大差距：语音大模型压缩的公平代价"
paper_digest_original_title: "Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.7"
paper_digest_workbench_source_sha256: "e8ae79f63ba55aa6ecb60c3b2e632e90cc2c616024dac9c29ed7d601fef645f7"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.impactspeech-1.7/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.impactspeech-1.7.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文在 SLAM-ASR 上对 Whisper 编码器做自顶向下剪枝并在每一深度重训投影器，发现大模型剪 2 层时总体 WER（词错误率）从 21.6% 降到 21.1% 却让黑人组上升 0.9 pp 且黑人与亚裔差距到 8 层从 13.5 pp 扩大到 24.5 pp，低秩适应虽降低总体却把比值拉大，跨语言对照显示代价必须用分群最差组指标来选型。"
paper_digest_reader_sections: [{"heading":"总体词错误率为何掩盖剪枝的不公平代价","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三件套系统与自顶向下剪枝如何构成可比流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结边界训练超参与分群统计口径","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"两层浅剪为何让总体变好却让黑人组变差","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"编码器规模越大浅剪越容易藏住伤害","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"英语荷兰语口音差距留存丹麦语尚难下结论","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"低秩适应降低总体却把相对差距拉得更大","index":7,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单一种子与语料边界下的复现与选型建议","index":8,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Ganesh Pavan Kartikeya Bharadwaj Kolluri"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Michael Kampouridis"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Ravi Shekhar"}]
paper_digest_abstract_sha256: "2f4609089b9d487a7eff7f8b8a79ed03e3abeec3c1395021c7e71e45c1f24794"
paper_digest_sidecars: {"citation.bib":{"sha256":"c5b48407597f2cd5d079ff8486601291646cfc3a134ab5dcf00e0480d380af44","url":"/audio-research-portal/client/papers/2026-11-27/conference-9cef67b883263790d107ca14/citation.bib"},"citation.json":{"sha256":"034f71035753189ed3721f26966270f9c183b700b9d2d392e7b6f0344c5150ca","url":"/audio-research-portal/client/papers/2026-11-27/conference-9cef67b883263790d107ca14/citation.json"},"citation.ris":{"sha256":"778cc2eb64eb5e66f06388435b6bab5918b8dc44d60db72153c3ff1c6f71ef67","url":"/audio-research-portal/client/papers/2026-11-27/conference-9cef67b883263790d107ca14/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"917f3794fca3e9d7a1668775ed6a2ae48f91c0361fd3dbca204a3fe2477b0cf0","url":"/audio-research-portal/client/papers/2026-11-27/conference-9cef67b883263790d107ca14/rethink-context.json"}}
paper_digest_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.7"
paper_digest_source_kind: conference
paper_digest_conference_id: "impactspeech-2026"
paper_digest_conference_name: "impactspeech-2026"
paper_digest_doi: "10.18653/v1/2026.impactspeech-1.7"
paper_digest_conference_doi: "10.18653/v1/2026.impactspeech-1.7"
paper_digest_conference_record_url: "https://aclanthology.org/2026.impactspeech-1.7/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.impactspeech-1.7.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "110645b1b1c59fd046d0bf7ea707fbd7618e4441d448f2a1aaa5fb8988dfa574"
paper_digest_api_reader_plan_sha256: "3bf0b1722ec5be92ecf9ea3262d834d85bd3e3aef844a7299eadfdf896e16e67"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "f0b256aa475645e11d937057ef1e1f6be0d5f7e8911bcec26457dccd0b8f5f5a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9e8b3995bfa882146bb1b2348a87cd79fcc8f79f305d46ecb6e01d646f49209f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c7435381efda80c4c1bcd8170f1e0f8c7869fe90e7a0510d6b9d9ccd093833d2"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "49b2891d52cc5f26653ac33ce4b2cdbf07fd9d91c9013a219c8aaa4cef7498c5"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 剪枝省算力却放大差距：语音大模型压缩的公平代价

> 英文题目：*Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs*

> 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.7`
> DOI：`10.18653/v1/2026.impactspeech-1.7`
> Track：ImpactSpeech 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.7/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.7.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型剪枝](/audio-research-portal/papers/?concept=method.pruning)
- **研究重点**：[公平性](/audio-research-portal/papers/?concept=research_focus.fairness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 6.2/10 | 技术严谨 7.3/10 | 实验充分 8.1/10 | 清晰度 5.5/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ganesh Pavan Kartikeya Bharadwaj Kolluri：School of Computer Science and Electronic Engineering, University of Essex, UK
- Michael Kampouridis：School of Computer Science and Electronic Engineering, University of Essex, UK
- Ravi Shekhar：School of Computer Science and Electronic Engineering, University of Essex, UK

## 📌 核心摘要

**问题与瓶颈：** 自动语音识别（automatic speech recognition, ASR）的任务是以 16 kHz 采样的连续语音为输入，以文字转写为输出，主流语音大模型路线将冻结的预训练语音编码器经轻量投影器接入冻结的大语言模型解码器，因而规模庞大而运行昂贵，剪枝成为部署前常规压缩手段。实际难点在于识别误差在族裔、性别与口音分组上本已不均衡，而现有压缩工作常用聚合词错误率（word error rate, WER）挑选剪枝模型，聚合值会掩盖特定分组损伤。自顶向下移除编码器顶层究竟是均匀抬高各组误差，还是放大不均衡并被聚合指标遮蔽，以及低秩适配（low-rank adaptation, LoRA）恢复是否在组间均等，尚未被系统测量。

**核心思路与方法架构：** 与仅报告聚合 WER 的剪枝基线相比，本文增量是保持训练与选择完全人口统计盲测，仅在评测端引入分组 WER 与最差组准则以直击遮蔽根因。沿英语朗读样本追踪，16 kHz 音频先转为 80 通道对数梅尔谱，送入冻结的 Whisper 编码器，再经可训练投影器压缩时序并映射到冻结的 Qwen2.5-3B 解码器，由固定英文提示离线生成转写。编码器取 Small 12 层、Medium 24 层与 Large-v2 32 层三种规模，每次自顶向下移除 2 层并在该深度从零重训投影器，得到 L-0 至 L-8 乃至 L-10 的可部署系统，LoRA 仅作用于解码器注意力投影而编码器与解码器主体始终冻结。

**关键实验与核心代价：** 在 Fair-Speech 26,417 条评测上，Large-v2 移除 2 层后聚合 WER 从 21.6% 变为 21.1%，同一设置下 Black 分组 WER 从 27.2% 变为 28.1%，是唯一显著恶化的分组，Black 与 Asian 绝对差距从 13.5 个百分点扩大到 L-8 时的 24.5 个百分点，此时 Black 为 51.0% 而 Asian 为 26.5%。编码器规模消融显示 Small 与 Medium 首剪聚合 WER 分别上升 10.8 个百分点与 2.3 个百分点而代价直接可见，只有 Large-v2 首剪聚合改善 0.5 个百分点并使 Black 与 Asian 差异比从 1.99 变为 2.15。LoRA 消融在各深度均降低聚合 WER，如 L-0 从 21.6% 变为 17.7% 且 L-8 从 37.6% 变为 33.0%，并将可用剪枝从 8 层延至 10 层，但差异比在 L-0 从 1.99 变为 2.20，在 L-2 从 2.15 变为 2.36，在 L-8 从 1.93 变为 2.22，在 L-10 对 Asian 恢复 8.0 个百分点而对 Black 仅恢复 3.3 个百分点。在 Common Voice 22 英语上聚合 WER 从 12.1% 变为 13.0%，India 与 South Asia 相对差距从 1.42 变为 1.39 而荷兰语比率维持在 1.3 附近，差距持续但未被遮蔽。本工作为冻结推理的诊断性评估，代价体现为深剪指标折损而非额外推理开销，L-4 聚合已升至 25.2%，训练上英语 100 小时投影器需 2 轮而 LoRA 需 4 轮，荷兰语 54 小时与丹麦语 4.2 小时需更多轮次，转写统一用波束宽度为 2 的束搜索至多生成 128 个新词元。

**适用边界与深读导览：** 结论成立前提是英语朗读语音、Common Voice 22 训练与 Fair-Speech 评测分布、Whisper 加 Qwen2.5-3B 冻结组合、自顶向下整层剪枝加投影器重训，以及聚合 WER 不高于 40% 的可用界与每组不少于 200 条和 30 分钟的分析门限。未覆盖其他编码器与解码器、量化与非结构化稀疏、自发对话与噪声及儿童语音、交叉分组与缓解方法，丹麦语因基线已达 35.5% 且标注稀疏而仅作覆盖说明。深读时可对照下方方法概述查投影器与 LoRA 配置，对照实验结果查分组 WER 与比率表。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 总体词错误率为何掩盖剪枝的不公平代价

自动语音识别已用于语音助手、听写工具与字幕服务，当前主流是语音大模型：一组预训练语音编码器把声学信号变成向量表示，轻量投影器把该表示映射送入冻结的大语言模型解码。模型规模越大运行代价越高，压缩成为训练与部署之间的常规步骤。常用做法是在总体 WER（词错误率）上验证剪枝后模型，该数字在全部测试话语上平均得到。已有工作显示识别效果在不同人群间本就不均衡，此时总体平均可能掩盖分组差异，剪枝会如何改变这种不均衡正是本文起点。

#### 编码器与解码器的分工

本文采用语音与语言对齐识别流程：Whisper 语音编码器保持冻结，拼接线性投影器可训练，Qwen2.5-3B 解码器保持冻结。固定解码器使编码器容量成为唯一变动部件，编码器与解码器权重均不更新，只训练投影器以及需要时训练低秩适应模块，把语言模型规模变化的影响隔离在外。实验覆盖 3 种编码器规模：小型 12 层、中型 24 层与大型第二版 32 层，三者配同一投影器与同一解码器。剪枝按自顶向下每次去掉 2 层，记为 L-2、L-4 直至 L-8，并在每一深度从头重训投影器，使每个深度都是可部署系统而非剪后直接探测。训练与选型全程不使用人口标签，只用总体验证 WER 做选择，与行业只看总体的惯例一致。

投影器本身是两层感知机加时序降采样：把连续 5 帧拼接后长度缩为五分之一，再经两层线性映射、线性整流激活与 0.1 随机失活，最后做层归一化以对齐解码器文本嵌入量级，每一深度都从随机初值重训而非沿用未剪枝权重。音频按 Whisper 流程重采样到 16 kHz 并提取 80 通道对数梅尔谱，只保留 0.5 秒至 30 秒话语，转写统一转小写并去掉标点但保留缩写撇号。推理时把音频嵌入拼在固定转写提示词之前，3 种规模、全部深度与 3 种语言共用同一提示词，生成采用宽度为 2 的集束搜索且不采样、不加长度与重复惩罚，最多生成 128 个新词元，训练中校验则用贪心解码加 1.5 重复惩罚选检查点。

#### 差距度量与待答问题

主评测库 Fair-Speech 含 26,417 条英语朗读，覆盖 7 个可分析族裔组。未剪枝大型模型下亚裔组 WER 为 13.7%，夏威夷原住民组为 13.4%，黑人组高达 27.2%，约为最好组 2 倍，偏置在剪枝前已经存在。作者固定 3 种差距口径：每一深度的最差组 WER 为主要口径，绝对差距以 pp（百分点）计，比值 \(\rho\) 为去量纲校验，组内还看相对自身基线的变化 \(WER_{Lx} / WER_{L0}\)。深剪时所有组都变差，绝对差距与比值会按构造背离，因此两处同时报告，并全程跟踪黑人与亚裔这一最差与最好组合。

显著性来自 2,000 次配对自助重抽样，每次重抽话语后对两种设置重打分，以分差方向翻转比例为 p 值。结论只在可用区内讨论，即总体 WER 不超过 40% 的连续深度，可分析组需同时满足至少 200 条话语与 30 分钟音频。研究提出 3 个问题：第一，剪枝是否放大人口差距且被总体掩盖；第二，效应是否随编码器规模与语言资源变化；第三，低秩适应能否均匀恢复各组。训练数据来自 Common Voice 22，英语、荷兰语与丹麦语分开训练，主系统用英语，跨语言系统分别对应不同资源量。

#### 训练执行与初步答案

优化全程冻结编码器与解码器，只更新投影器以及启用时的低秩适应参数，低秩部分只加在解码器全部注意力层的查询、键、值与输出投影上。英语批量大小为 8，投影器训练 2 轮、联合低秩适应时训练 4 轮，荷兰语批量大小为 8、丹麦语批量大小为 4 并按小语料增加轮数，全部深度共用同一设置以保证深度之间只差编码器层数。优化器采用解耦权重衰减方法，学习率为 1 × 10−4，权重衰减为 0.01，梯度裁剪为 1.0，余弦调度前 5% 步骤线性预热，以半精度在单块 A6000 GPU（图形处理器，48 GB 显存）上训练并以总体验证误差提前停止。

初步答案指向隐藏而非均匀退化。大型模型去掉 2 层后总体从 21.6% 降到 21.1%，p = .038，看似变好，黑人组却上升 0.9 pp，p = .009，是唯一显著变差的族裔组，总体在该深度为基线的 0.98 倍而黑人组为 1.03 倍。到去掉 8 层时黑人组达 51.0%，亚裔组为 26.5%，两者差距从 13.5 pp 扩大到 24.5 pp。低秩适应在各深度都降低总体，却把黑人与亚裔比值拉大。英语与荷兰语口音差距则保持稳定。结论是压缩模型的部署不能只看总体，必须报告分群 WER 并盯住最差组。

### 三件套系统与自顶向下剪枝如何构成可比流程

系统沿用 SLAM-ASR 结构：Whisper 语音编码器分 Small 12 层、Medium 24 层与 Large-v2 32 层 3 个版本，轻量 ConcatLinear 投影器为两层多层感知机，先把连续 5 帧拼接使序列长度压缩为五分之一，再经 ReLU、暂退 0.1、隐层 2,048 维与层归一化对齐大模型文本嵌入维度，Qwen2.5-3B 解码器全程冻结。编码器与解码器都不更新，只有投影器与按需加入的低秩适配器参与训练，因此各深度差异只来自编码器容量。

训练用 Common Voice 22 英语 100 小时、荷兰语 54 小时与丹麦语 4.2 小时，评测用 Fair-Speech 26,417 条与 Common Voice 英语 16,391 条等多语言测试集，支持的人口轴线各不相同，下表先把语料与轴线覆盖关系一次看清，便于理解后文分群比较的公平前提。

| Corpus | Bias axes |
| --- | --- |
| CV-22 (EN/DA/NL) | accent, gender, age |
| Fair-Speech | ethnicity, SES, gender, age, L1 |

上表显示 Common Voice 22 英语、丹麦语与荷兰语提供口音、性别与年龄标签，Fair-Speech 提供族裔、社会经济地位、性别、年龄与第一语言标签。Fair-Speech 只做评测不参与训练，Common Voice 按官方划分保证说话人不重叠，并保留 0.5 秒到 30 秒话语。音频统一重采样到 16 kHz 并按 Whisper 流程提取 80 通道对数梅尔谱，转写统一小写并去掉标点只保留缩写撇号。

以 1 秒 16 kHz 音频为例，波形约 16,000 个采样点，经分帧加窗得到 80 维谱帧序列，送入剩余层数的 Whisper 编码器输出声学向量，投影器把每 5 帧拼接降采样后再映射到语言模型空间，与固定英文提示拼接后做波束搜索，宽度为 2，最多生成 128 个新词元。各模块具体隐层宽度与谱帧步长等细节原文未披露，此处只保留已披露的采样率、5 帧拼接与 5 倍降采样等可核对规格。

### 冻结边界训练超参与分群统计口径

训练只更新投影器与低秩适配器，Whisper 编码器与 Qwen2.5-3B 参数全程冻结。英语用批量 8 训练 2 轮，低秩版本 4 轮；荷兰语批量 8 对应 4 轮与 8 轮；丹麦语批量 4 对应 6 轮与 8 轮。优化器为 AdamW，学习率 0.0001，权重衰减 0.01，梯度裁剪 1.0，余弦调度加前 5% 步数线性热身，bfloat16 在单块 NVIDIA A6000 48 GB 上运行，固定随机种子 42，差异只保留编码器深度。

不同语言数据量相差一个数量级，英语 100 小时收敛最快，荷兰语 54 小时与丹麦语 4.2 小时需要更多遍数，小语料还把批量降到 4 以免单轮内过度重复，低秩配置约用 2 倍轮数以便与从头训练的投影器联合优化，下表列出各语言批量与轮数组合，各编码器规模与剪枝深度共用同一套设置。

| Language | Batch | Proj. | LoRA |
| --- | --- | --- | --- |
| English | 8 | 2 | 4 |
| Dutch | 8 | 4 | 8 |
| Danish | 4 | 6 | 8 |

上表对应附录批量轮数设置，英语批量 8 对应投影器 2 轮与低秩 4 轮，荷兰语批量 8 对应 4 轮与 8 轮，丹麦语批量 4 对应 6 轮与 8 轮。低秩只加在全部注意力层的查询、键、值与输出投影上，丹麦语秩 8 缩放 16，其余秩 16 缩放 32，暂退 0.1，新增约 0.8M 与 1.5M 参数。丹麦语曾试秩 16 出现过拟合故调小。验证用贪心解码加重复惩罚 1.5 选型，测试统一用波束搜索。

评测对总体与各组用同一规则计 WER，差距看最差组 WER、绝对差距 pp 与比值，组内看相对自身未剪枝的变化。显著性来自 2,000 次话语级配对自助，p 为方向翻转比例。结论只在总体 WER 不超过 40% 的连续可用区内讨论，每组需满足不少于 200 条与 30 分钟音频，不足组只列出覆盖不做组间推断。全部选型只看总体验证 WER，不输入人口标签。

### 两层浅剪为何让总体变好却让黑人组变差

Fair-Speech 族裔结果是全文核心。未剪枝大模型下 7 组已拉开：亚裔 13.7%，夏威夷原住民 13.4%，西班牙裔 20.0%，白人 20.6%，美洲原住民 21.5%，中东北非 23.0%，黑人 27.2%，总体 21.6%。黑人组约为亚裔 2 倍，偏置在剪枝前已经存在。去掉顶层 2 层后总体降到 21.1%，美洲原住民还改善 2.5 pp，p = .001，其余组变化不显著，只有黑人组上升 0.9 pp，p = .009。

下图把这种掩盖画成楔形：横轴为自顶向下剪掉层数 0 到 8，纵轴为 WER（%），红色在上为黑人组，绿色在下为亚裔组，黑色虚线为总体，粉色楔面为两组差距，左侧灰带标出总体改善而差距扩大的浅剪窗口。

[![原论文 Figure 1：Compression widens the racial gap, and the aggregate WER hides it.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-1.png)

*论文图 1：总体改善下黑人与亚裔词错误率差距从 13.5 pp 扩大到 24.5 pp（原论文 Figure 1）。*

像素显示左侧 L-0 差距标注 13.5 pp，右侧 L-8 扩大到 24.5 pp，几乎翻倍。灰带内总体曲线从 21.6% 微降到 21.1%，黑人曲线从 27.2% 升到 28.1%，亚裔从 13.7% 降到 13.1%。继续加深到 L-4 总体升到 25.2%，黑人 34.3% 对亚裔 16.3% 差距 18.0 pp；L-6 总体 32.0% 仍在可用界内，黑人已到 42.8% 超出可用；L-8 黑人 51.0% 对亚裔 26.5%，累计分别损失 23.8 pp 与 12.8 pp。

这说明总体有两种误导：在 L-2 报出改善而最差组显著退化，在 L-6 仍报可用而最差组已不可用。相对变化也一样：L-2 总体为自身基线的 0.98 倍，黑人组为 1.03 倍，是唯一高于 1 的族裔组。单一种子 42 下结论依赖 2,000 次配对自助而非多种子方差，趋势在连续深度上一致，而非单点波动。部署若只看总体，就会把小幅平均收益当成可发布信号。

### 编码器规模越大浅剪越容易藏住伤害

3 个规模起点就不平等，比值在 Large-v2 为 1.99，Small 为 2.03，Medium 为 2.16，黑人组约为亚裔 2 倍。第一次剪 2 层把它们分开：Small 总体上升 10.8 pp，Medium 上升 2.3 pp，伤害直接写在总体上；只有 Large-v2 总体改善 0.5 pp，藏住分化。深剪后绝对差距在各规模都扩大，但比值因分子分母同变大而回落，比较必须限定可用区。

下表列出黑人与亚裔比值随深度的变化，斜体表示总体已超 40% 的不可用深度，绝对差距与相对比值在此后会背离，读者可先看数字再看曲线，下表给出跨规模的可比口径与可用区标记。

| Model | L-0 | L-2 | L-4 | L-6 | L-8 |
| --- | --- | --- | --- | --- | --- |
| small (12L) | 2.03 | 1.70 | 1.51 | 1.49 | 1.13 |
| medium (24L) | 2.16 | 2.01 | 1.94 | 1.97 | 1.66 |
| large-v2 (32L) | 1.99 | 2.15 | 2.10 | 1.93 | 1.92 |

上表显示只有 Large-v2 在 L-2 比值从 1.99 升到 2.15，其余两规模比值下降，因为小模型整体崩得太快，好组按比例损失更多。深剪后三规模比值都回落，Large-v2 到 L-8 为 1.92，但绝对差距从 13.5 pp 经 15.0 pp、18.0 pp、20.6 pp 扩大到 24.5 pp。商变小只因分子分母同变大，差变大才是各组真实距离，原文完整 Table 11（本精简表未列出）还给出相对基线比值可对照。

下图为三面板共享纵轴的各组 WER 曲线，横轴为去掉层数 0 到 8，纵轴为 WER（%）0 到 100，黑色虚线为总体，蓝色在上为黑人组，绿色在下为亚裔组，其余各族裔居中，左中右依次为 12 层、24 层与 32 层编码器。

[![原论文 Figure 3：Per-group WER on Fair-Speech as encoder layers are removed, per Whisper scale (shared y-axis;…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-3.png)

*论文图 3：三种编码器规模下各族裔词错误率随剪枝变化仅大模型浅剪持平（原论文 Figure 3）。*

像素显示黑人曲线在每面板每个深度都是最高，亚裔最低。左侧小模型 L-2 总体已上升约 10.8 pp，斜率最陡，到 L-8 各组挤向高位。中间中等模型 L-2 上升约 2.3 pp，右侧大模型 L-2 基本持平。此后三面板都上行，但大模型楔口张得最明显。性别差距从 3.3 pp 扩大到 11.1 pp，社会经济差距维持，年龄差距因整体拉平而收窄，总体都看不见。

### 英语荷兰语口音差距留存丹麦语尚难下结论

Fair-Speech 只覆盖英语，作者另用 Common Voice 英语、荷兰语与丹麦语检验跨语料与跨语言。原文完整 Table 5（本精简表未列出）显示英语口音层级稳定：印度与南亚口音在各深度最高，美国 11.1% 与英格兰 12.2% 在下，总体 L-0 12.1% 到 L-8 19.1%。绝对差距随深度扩大，但比值从 1.42 到 1.39 基本持平，且总体从第一次剪枝就变差，没有隐藏窗口。

丹麦语起点已高且标注稀疏，多数组不足 200 条或 30 分钟阈值，下表列出性别与年龄分组的代表行，完整覆盖还含青少年与五六十岁等不足组，原文完整 Table 8（本精简表未列出）只做覆盖展示而不做组间推断。

| Axis Group | n | L-0 | L-2 | L-4 | L-6 | L-8 |
| --- | --- | --- | --- | --- | --- | --- |
| Male | 1,031 | 36.0 | 38.3 | 40.6 | 49.0 | 51.8 |
| Female† | 299 | 33.0 | 34.1 | 35.2 | 42.9 | 48.0 |
| Aggregate | 1,330 | 35.3 | 37.4 | 39.4 | 47.6 | 50.9 |
| Twenties | 601 | 41.1 | 43.2 | 45.2 | 53.7 | 56.3 |
| Thirties | 392 | 31.5 | 34.2 | 36.8 | 45.0 | 48.3 |

上表显示丹麦语总体 L-0 为 35.3%，L-4 为 39.4%，L-6 为 47.6% 超出 40% 可用界，女性 299 条不足阈值，青少年 50 条等更少。男性 L-0 36.0% 高于女性 33.0%，二十岁组 41.1% 高于三十岁组 31.5%，但因样本与起点限制，作者明确不做组级结论，只说明剪枝前差距已大且可用余量极小。

下图为荷兰语比利时与荷兰口音在 3 种规模下的对照，三面板共享纵轴 WER（%），横轴为去掉层数，红色圆点为比利时组，绿色方块为荷兰组，灰色虚线为总体，每面板在超出可用区处截断，可看绝对差距与相对比值的不同走向。

[![原论文 Figure 8：Common Voice Dutch: Belgian vs Netherlands accent WER under top-down pruning, per Whisper scale…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-8.png)

*论文图 8：荷兰语比利时组始终高于荷兰组绝对差距拉开但比值约 1.1 到 1.3（原论文 Figure 8）。*

像素显示比利时曲线在每面板每个深度都在荷兰曲线之上，起点差距约 2 pp 到 3 pp，末端拉开到约 8 pp 到 10 pp，绝对差距随深度明显张开，不能描述为稳定。原文完整 Table 6（本精简表未列出）报告大型模型 L-0 荷兰 11.5% 对比利时 13.7% 总体 11.8%，到 L-8 荷兰 20.4% 对比利时 25.2% 总体 21.4%，绝对差从 2.2 pp 扩大到 4.8 pp，但比值全程在 1.1 到 1.3 之间，相对差距未系统性拉大。像素上 (c) 面板横轴 8 处约为比利时 20% 到 21%、荷兰约 18%、总体约 18% 到 19%，25%、20% 与 21% 量级实际出现在横轴约 10 处，而非 L-8 名义深度对应位置，引用时须区分原表深度与像素横轴位置。各规模绝对差距都拉开而比值保持平稳，与 Fair-Speech 族裔差距在最大模型上绝对与相对同时走阔的模式不同，说明压缩效应必须按语料、轴线与规模分别实测。

### 低秩适应降低总体却把相对差距拉得更大

低秩适应在每一深度都降低总体：未剪枝总体从 21.6% 降到 17.7%，L-8 从 37.6% 降到 33.0%，可用剪枝推到 10 层，多出 2 层。但分群并不均匀：L-0 黑人与亚裔比值从 1.99 升到 2.20，L-2 从 2.15 升到 2.36，L-8 从 1.93 升到 2.22。总体向好与差距扩大同时发生，说明恢复能力偏向原本表现好的组。

下图为左右两块热图对比，左块为无低秩基线对照，右块为加入低秩适应，行覆盖族裔、社会经济地位、性别、年龄与总体，列为 L-2 到 L-10，格内为相对各自未剪枝的变化 pp，暖红为退化，冷蓝为改善，右侧色条标出变化范围，最下一行为总体，可直接比较同格左右差异。

[![原论文 Figure 4：Change in WER (percentage points) per subgroup as Whisper large-v2 is pruned top-down, without…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/f22bbfe121b8/figure-4.png)

*论文图 4：有无低秩适应时各亚组相对未剪枝变化热图深红表示退化更重（原论文 Figure 4）。*

像素显示黑人行在两块中几乎每列都是最深红，L-2 对照为 +0.9，低秩为 +2.0；亚裔行对照为 -0.7，低秩为 +0.1；总体行对照为 -0.4，低秩为 +1.2。到 L-10 低秩相对对照挽回亚裔 8.0 pp，只挽回黑人 3.3 pp。女性 L-2 对照改善 1.1 pp，男性恶化 0.3 pp；46-65 岁组绝对值起点最高但增量最慢，对照下 31-45 岁组自 L-2 起增量最大、低秩下自 L-4 起增量最大，绝对值在 L-6 超过 46-65 成为最高，差距收窄是向下看齐而非向上帮助。

这回答第三个问题：低秩适应不是公平修复，它在 Common Voice 英语上训练，与 Fair-Speech 存在分布偏移，更擅长补偿训练中常见的语言特征。原文未保留低秩每次输出的逐话语结果，离散度来自重抽样区间而非话语方差。工程上若用低秩延长剪枝深度，必须同时报告最差组变化，否则总体延长 2 层可用会被误读为各组都延长。

### 单一种子与语料边界下的复现与选型建议

研究只用一种组合：Whisper 为唯一语音编码器，Qwen2.5-3B 为唯一解码器，自顶向下整层删除为唯一压缩手段，未比较量化、蒸馏或非结构化稀疏。全部运行只用单一种子 42，投影器在每一深度重训使多种子复制成本成倍增加，作者用 2,000 次配对自助重抽样与跨深度一致趋势弥补，但多种子重复仍是未来工作。低秩运行未保留逐话语输出，离散度只反映组 WER 精度，未评测任何缓解手段，各人口轴线分别分析，交叉效应未检验。

#### 单配置与数据边界

数据边界同样窄。主结论依赖英语朗读 Fair-Speech，自带与 Common Voice 训练分布的偏移，可能惩罚欠代表语言特征；但绝对差距在域内与域外压缩下都扩大，不能单归因于语料偏移。跨语言证据薄：丹麦未剪枝总体已达 35.5%，去掉 4 层后即越过 40% 可用界，且标注稀疏使多数分组低于可分析门限，只能作覆盖记录；荷兰语只有口音、性别与年龄三轴，社会经济与第一语言等更细划分缺失。年龄、性别、族裔等轴线共享同一批说话人却分别统计，特定族裔女性等交叉分组未检验，公平感知压缩目标只在展望中提出。

执行过程按语言区分资源。投影器与低秩模块在 Common Voice 22 上训练，英语约 100 小时，荷兰语约 54 小时，丹麦语约 4.2 小时，训练与测试说话人按官方划分不重叠。音频重采样到 16 kHz，转为 80 通道对数梅尔谱，只保留 0.5 秒到 30 秒的话语，转写统一小写并去标点、保留缩写撇号。投影器把连续 5 帧拼接使序列长度缩为五分之一，再经两层线性映射与归一化对齐解码器文本嵌入维度，并在每一剪枝深度从随机初始化重训，而非从未剪枝断点微调。每种设置在各规模与各深度共用同一超参，深度之间只差编码器层数。解码时投影后音频嵌入前置于固定纯文本提示语之前，3 种规模、全部深度与 3 种语言共用同一提示与同一束宽为 2 的搜索设置，最多生成 128 个新词元，检查点选择阶段在验证集上用贪心解码。

#### 复现对照与选型门限

复现需对照三件事分开看。论文第 1 节给出代码仓库链接，但本次没有收到可验证的可用确认，不能当作已可运行；权重是否提供下载与运行环境是否可直接复刻原文未披露。超参与数据划分已披露，可按英语批量 8、丹麦批量 4 与分语言轮数复刻，优化采用学习率 1 × 10−4、权重衰减 0.01、梯度裁剪 1.0 与前 5% 步骤线性热身的余弦调度，低秩按资源设不同秩以防小语种过拟合。附录还给出相对自身基线的变化、小规模与中规模分群、低秩分群与跨语料细节。评测须保留分群 WER、最差组、绝对 pp 与比值三口径，并限定 40% 可用区与 200 条加 30 分钟门限，显著性以配对自助为准而非多种子方差。

选型建议是把最差组 WER 作为显式门限。大型模型浅剪总体改善 0.5 pp 时仍要检查黑人组是否上升，去掉 6 层时总体为 32.0% 仍在可用界内而黑人组已达 42.8%，此时不得放行。低秩把可用深度延至去掉 10 层，但挽回偏向优势组，去掉 10 层时挽回亚裔组 8.0 pp、黑人组仅 3.3 pp，比值在各匹配深度都更宽。新语料上线前先看总体是否立即变差，若总体平稳更要加测分群，因为掩盖式放大只在 Fair-Speech 大模型出现，荷兰语与英语口音差距只是延续而未系统性拉大。听测方面本文只用 WER 自动指标，无人工 MOS（平均意见分）或 CMOS（比较平均意见分）听测，也无神经代理分数，结论只关于转写错误分布，不涉及自然度或偏好。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 重采样 80 通道对数梅尔谱保留 0.5 秒到 30 秒话语投影器 5 帧拼接降采样 5 倍隐层 2,048 维帧步长与码率原文未披露延迟与 RTF 原文未披露
- **训练与评测数据**：Common Voice 22 英语训练 58,140 条约 100 小时荷兰语 43,458 条约 54 小时丹麦语 3,592 条约 4.2 小时评测 Fair-Speech 26,417 条英语 Common Voice 英语测试 16,391 条荷兰语测试 12,033 条丹麦语测试 2,684 条说话人按官方划分不重叠
- **算力与训练耗时**：单块 NVIDIA A6000 48 GB bfloat16 训练固定种子 42 推理同卡波束宽度 2 最多 128 个新词元
- **核心超参数与配置**：AdamW 学习率 0.0001 权重衰减 0.01 梯度裁剪 1.0 余弦调度加前 5% 热身英语批量 8 投影器 2 轮低秩 4 轮荷兰语批量 8 对应 4 轮与 8 轮丹麦语批量 4 对应 6 轮与 8 轮投影器暂退 0.1 低秩暂退 0.1 丹麦秩 8 缩放 16 其余秩 16 缩放 32 新增约 0.8M 与 1.5M 参数
- **推理速度与部署开销**：解码波束宽度 2 无采样无重复与长度惩罚提示固定延迟吞吐显存与 RTF 原文未披露参数量未单独汇总
- **开源产物与协议状态**：论文第 1 节给出 GitHub 代码链接本次没有收到可验证的可用确认不声称已公开权重数据与演示页状态原文未披露
- **附录与补充材料要点**：附录 A 批量轮数附录 B 相对基线比值附录 C 小中规模分群附录 D 覆盖量与社会经济性别年龄附录 E 低秩分群附录 F 跨语料细节单一种子无缓解方法交叉性未检验

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 6.2/10 | 技术严谨 7.3/10 | 实验充分 8.1/10 | 清晰度 5.5/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.7`
- 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.7/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.7.pdf)
- DOI：`10.18653/v1/2026.impactspeech-1.7`
- Track：ImpactSpeech 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：Large-v2首剪聚合21.6%降至21.1%而Black组27.2%升至28.1%为唯一显著恶化，配对自助p=.009直击聚合遮蔽根因。

- 核心优势：三种Whisper规模复刻自顶向下剪枝并在每深度从零重训投影器，训练与选型全程人口统计盲测有效隔离变量。

- 核心优势：固定最差组绝对差距与比率三度量并同时报告两者，2000次配对自助检验加可用界与样本门限统计口径严谨。

- 主要短板：以效率为动机却未报告任何计算效率测量，使剪枝公平代价缺少效率收益侧对照仅为口头工程价值。

- 主要短板：L-8基线Black-Asian比率表格作1.92而正文4.3节作1.93，取整口径差异原文未解释存在表文不一致。

- 主要短板：缺损失函数训练时长与多种子配置且全用单一种子42，LoRA未保留逐条输出限制机制检验与复现。

---

[← 返回 impactspeech-2026 论文汇总](/audio-research-portal/posts/conference-impactspeech-2026/)
