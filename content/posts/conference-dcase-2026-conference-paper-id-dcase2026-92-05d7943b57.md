---
title: "Reasoning-Oriented Post-Training and Inference-Time LoRA Rescaling for Audio-Dependent Question Answering"
date: 2026-11-27
draft: false
description: "针对音频相关问答中模型依赖文字先验作答的问题，本文在 Qwen2.5-Omni 与 MOSS-Audio-8B-Thinking 上对比答案监督与结构化推理训练后优化及推理时低秩缩放，开发集上 Qwen-CoT 经适度缩放达到 61.05% 而 MOSS 零样本达到 67.70%，代价是强化学习采样与五次投票的额外计算及任务微调对强零样本骨干的损伤风险。"
tags: ["LoRA", "强化学习", "音频问答"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "推理监督与推理时低秩缩放如何影响音频相关问答"
paper_digest_original_title: "Reasoning-Oriented Post-Training and Inference-Time LoRA Rescaling for Audio-Dependent Question Answering"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-92"
paper_digest_workbench_source_sha256: "f3f2943a1e58f1caaa1b272a59dcd54d7caee11dfbab5a67c39eb674e97d9798"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Hu_92.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频相关问答中模型依赖文字先验作答的问题，本文在 Qwen2.5-Omni 与 MOSS-Audio-8B-Thinking 上对比答案监督与结构化推理训练后优化及推理时低秩缩放，开发集上 Qwen-CoT 经适度缩放达到 61.05% 而 MOSS 零样本达到 67.70%，代价是强化学习采样与五次投票的额外计算及任务微调对强零样本骨干的损伤风险。"
paper_digest_reader_sections: [{"heading":"仅靠文字先验就能答对的问答为何不算真正听见音频","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两条骨干、四种应答格式与五次投票构成的完整流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"结构化思维链如何让每一段推理都可监督与可奖励","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"低秩适配的训练参数与推理时只调系数的执行路径","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"训练后优化为何提升 Qwen 却大幅拉低 MOSS","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"推理时调小适配强度能否恢复损失的准确率","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、代价与面向复现的选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Institute of Acoustics, Chinese Academy of Sciences, Beijing, China","University of Chinese Academy of Sciences, Beijing, China"],"name":"Weiteng Hu"},{"affiliations":["Institute of Acoustics, Chinese Academy of Sciences, Beijing, China"],"name":"Yin Cao"},{"affiliations":["Institute of Acoustics, Chinese Academy of Sciences, Beijing, China","University of Chinese Academy of Sciences, Beijing, China","State Key Laboratory of Acoustics and Marine Information, Institute of Acoustics"],"name":"Jun Yang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"e141be7fc899eff2742819267688f3f8ad4d8f5ecf96a3d564598adfcc103a6a","url":"/audio-research-portal/client/papers/2026-11-27/conference-05d7943b576d82224705b543/citation.bib"},"citation.json":{"sha256":"316f07bfcde264b19569a23232409c7c02e1cb4c66702fe943239d02d5fc7300","url":"/audio-research-portal/client/papers/2026-11-27/conference-05d7943b576d82224705b543/citation.json"},"citation.ris":{"sha256":"4274f1cd7bb9505ab3a3f1ec1c83ff3da6337dcef0ec7af479ca963f21ab5455","url":"/audio-research-portal/client/papers/2026-11-27/conference-05d7943b576d82224705b543/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7dfeb4c7219831ed40ebbe4f23919653f05531995defd2b5902f930cecbe606f","url":"/audio-research-portal/client/papers/2026-11-27/conference-05d7943b576d82224705b543/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-92"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Hu_92.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "667c5b704374e64d3bcf3cc96a2be8cf768290384d5dd888b7f2d463decfcb8a"
paper_digest_api_reader_plan_sha256: "3dfe0c0fdd9d6ff872ab12d0086cd1445a544cdec95f0f77c0565f7c93924d13"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e8ec237e2450084ac8feae4156b49ab1dc3087e0923bb1b56fb8cce9f230aad9"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "62bf4dfbe45afecb969e09e9f6d2179b5017bd934749159b2825f25824678c66"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1e38c5efa7a49f2f3605106da97a86d49c483cd90d70e33d623c7b35393a8550"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "478ec4d46d1c994253390299ad082a2eaedf5a28e950195fb95e9cead14bed8c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 推理监督与推理时低秩缩放如何影响音频相关问答

> 英文题目：*Reasoning-Oriented Post-Training and Inference-Time LoRA Rescaling for Audio-Dependent Question Answering*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-92`
> Track：P1-13




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Hu_92.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[强化学习](/audio-research-portal/papers/?concept=method.reinforcement)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.8/10 | 技术严谨 6.0/10 | 实验充分 6.4/10 | 清晰度 7.1/10 | 影响力 6.3/10 | 开源 6.0/10 | 可复现 6.5/10 | 工程/实践 5.4/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Weiteng Hu：Institute of Acoustics, Chinese Academy of Sciences, Beijing, China；University of Chinese Academy of Sciences, Beijing, China
- Yin Cao：Institute of Acoustics, Chinese Academy of Sciences, Beijing, China
- Jun Yang：Institute of Acoustics, Chinese Academy of Sciences, Beijing, China；University of Chinese Academy of Sciences, Beijing, China；State Key Laboratory of Acoustics and Marine Information, Institute of Acoustics

## 📌 核心摘要

**问题与瓶颈：** 音频依赖问答 ADQA 以音频信号连同多选文字问题与候选选项为输入，以选项标签或选项文本为输出，要求答案必须依赖音频内容才能成立。现有大音频语言模型 LALMs 在 MMAU 等基准上即使将原始音频替换为静音仍能答对部分题目，说明题面含有可利用的语言线索，模型可能依赖文本先验而非声学证据。DCASE 2026 Task 5 为此引入音频依赖过滤 ADF，区分弱音频贡献与强音频贡献样本，并提供强依赖训练集 AudioMCQ-StrongAC-GeminiCoT。结局层可验证奖励只核对选项是否正确，不检验是否定位问句相关声学证据，可能奖励未接地推理。同时任务专用微调并非对所有基座一致有益，适配强度与保留预训练能力之间存在权衡。

**核心思路与方法架构：** 与最接近的答案级微调加通用奖励基线相比，本文实质增量是保留 LoRA 适配并引入结构化推理目标与门控多奖励解耦优化，同时在推理时只调节已训练适配器强度而不新增训练。沿单条样本看，音频与问题经编码与多模态投影进入语言模型，Qwen-CoT 先以答案直接生成做有监督微调，再以边想边答提示做 GRPO，Qwen-Structured-CoT 则要求依次输出 `<question_analysis>`、`<question_type>`、`<audio_evidence>` 与 `<reasoning>` 字段后再给答案，并以 GDPO 对多路奖励分别组内归一化再加权。MOSS-Audio-8B-Thinking 保留原生 `<think>` 与 `</think>` 格式做零样本与 LoRA 微调。所有适配均用秩 \(r = 8\) 与训练时 \(α = 32\) 即 \(γ = 4\)，预训练权重 \(W_0\) 冻结而低秩矩阵 \(B\) 与 \(A\) 可训练，覆盖音频编码器、多模态投影器与语言模型全部线性层，推理采用同一后处理加五次投票流程，原文未声称流式、因果或实时约束。

**关键实验与核心代价：** 在 DCASE 2026 Task 5 开发集上以 top-1 准确率衡量，Qwen-CoT 最终 58.93% 高于其提示匹配基线 55.38%，其中微调先从 55.38% 变为 56.50% 而后 GRPO 变为 58.93%，Qwen-Structured-CoT 最终 58.93% 高于其基线 54.39%，其中结构化微调先从 54.39% 变为 57.93% 而后 GDPO 变为 58.93%。同一开发集上 MOSS-Thinking-Label 零样本 67.70% 高于其微调后 60.36%，MOSS-Thinking-Full 零样本 66.02% 高于微调后 58.18%，呈现相反退化。将缩放因子从 \(γ = 4\) 下调后，Qwen-CoT 在 \(γ = 2\) 时从 58.93% 变为 61.05%，MOSS-Thinking-Full 在 \(γ = 0.5\) 时从 66.02% 变为 67.02%，而 MOSS-Thinking-Label 在 \(γ = 1\) 时为 67.52% 仍低于关闭适配器时 67.70%。参赛系统获总排名第三与 10B 参数以下轻量组第二，多选任务无人工 MOS 对比。主导收益来自结构化监督在微调阶段的跃升与降缩放恢复，显著代价是 MOSS 在默认强度下分别下降 7.84 个百分点与 7.34 个百分点，且五次投票增加推理量而原文未量化延迟吞吐。

**适用边界与深读导览：** 上述结论成立前提是开发集划分、管线匹配提示与同一后处理投票流程，仅覆盖 Qwen2.5-Omni-7B 与 MOSS-Audio-8B-Thinking 在官方强依赖集上一轮微调与一轮强化的配置，未覆盖测试集泛化、其他基座与其他秩下的失效模式，也未实测延迟与部署成本。论文中未提及音频试听页，效果以准确率表格为准。欲深究奖励门控与归一化推导可查阅下文关于 Qwen 管线与 LoRA 缩放的公式说明，欲核对阶段收益与缩放趋势可查阅下文两张表格与曲线总结。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/WeitengHu/DCASE2026-Task5> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 仅靠文字先验就能答对的问答为何不算真正听见音频

大音频语言模型已能处理语音、音乐与环境声音，并支持识别、描述与问答等任务。其中音频问答要求模型读懂文字问题，在声音中找到与问题相关的证据，再把声学信息与语言信息结合起来推导答案。输入为音频加问题加候选项，输出为所选选项，评价采用 top-1 准确率。链条中任何一步脱离音频都可能产生看似正确实则无据的答案。

已有评测暴露了这一风险。在 MMAU 、 MMSU 与 MMAR 等基准上，即使把原始音频替换为静音，模型仍能答对其中一部分题目。这说明问题与候选项中存在可利用的语言线索，模型可以依赖文字先验或内部世界知识作答，而没有真正使用与问题相关的声学证据。单纯提高这类基准的总分并不能证明模型真正听见了音频。

为此 DCASE 2026 个任务 5 提出音频相关问答，明确要求正确答案必须依赖所给音频。任务采用音频贡献过滤，把样本区分为弱音频贡献与强音频贡献两类。官方训练集 AudioMCQ-StrongAC-GeminiCoT 取自 AudioMCQ 的强音频贡献子集，共包含 19,480 道选择题，并附带由 Gemini 生成的思维链标注，为面向推理的训练后优化提供监督。

训练后优化本身存在两难。监督微调可适配指令与格式，强化学习可用选项比对给出可验证奖励，但结果级奖励不检查中间推理是否立足音频，模型可能获得高奖励却给出无据推理。同时任务适配可能损伤预训练能力，此前 SALMONN 曾报告减小推理时低秩适配模块强度可部分恢复原有能力。本文正是在这一背景下对比 Qwen2.5-Omni 与 MOSS-Audio-8B-Thinking ，考察推理监督、骨干选择与适配强度如何共同影响音频相关问答。

### 两条骨干、四种应答格式与五次投票构成的完整流程

本文在两条骨干上展开实验。 Qwen2.5-Omni-7B 采用两类训练流程，一类只监督最终答案再做强化学习，另一类监督结构化推理再做多奖励强化学习。 MOSS-Audio-8B-Thinking 作为原生思维模型，保留其自然语言推理格式，只做零样本推理与低秩监督微调。所有初始模型、中间检查点与缩放变体均采用与各自流程匹配的提示词和同一套后处理流程接受评测。

全部训练后优化均使用官方训练集 AudioMCQ-StrongAC-GeminiCoT ，共 19,480 道强音频贡献选择题。对于 Qwen-CoT ，监督目标仅保留最终答案。对于 Qwen-Structured-CoT ，则保留问题分析、问题类型、音频证据与推理 4 个字段，并以字段标签形式组织在最终答案之前。对于 MOSS 则保留自然语言推理，不强加外部字段结构，而以原生思考标签组织推理加最终答案。

所有系统共享同一套后处理流程。先从模型回复中抽取最终答案，再用精确或包含匹配映射到候选项。若抽取失败或无有效映射，则用 Qwen3-Embedding-0.6B 计算回复与各候选项的语义相似度并选择最相似者。为减轻选项顺序偏置，每个系统对原始顺序加 4 种随机打乱顺序各推理一次，共五次运行，最后以多数投票决定答案。

以一道包含 1 秒示例音频的选择题为例，端到端数据流可按序理解。第一步将音频与问题文本加候选项一起送入模型，第二步音频编码器与多模态投影层把声音转为语言模型可读的表征，第三步语言模型按提示生成思维过程加最终答案，第四步后处理抽取并映射到选项，第五步对 5 种选项顺序投票输出。原文未披露采样率、帧长与步长、特征维度与码率等信号规格，张量形状与帧率变化无法按 1 秒样本逐层算出，此处仅保留分支汇合与顺序关系。

### 结构化思维链如何让每一段推理都可监督与可奖励

Qwen-CoT 采用两阶段流程。第一阶段为仅答案监督微调，提示模型直接生成答案而不产生中间推理，目标是适配音频相关问答的选择题指令并为后续强化学习提供稳定起点。第二阶段改用逐步思考提示并执行组相对策略优化，奖励由准确奖励与格式奖励加权组成，仅当抽取答案与标准答案一致时给准确分，仅当回复符合要求格式时给格式分，权重分别取 2.0 与 0.5 。该设计鼓励先推理后作答，但不直接监督中间内容。

Qwen-Structured-CoT 同样分为两阶段，但在监督目标与奖励设计上不同。第一阶段使用重构的结构化标注进行监督微调，模型需依次生成问题分析、问题类型、音频证据、推理与最终答案，目标是学会遵循结构化输出模式并为强化学习预热。相比只监督答案，这种显式监督把问题理解与声学证据查找摆到台面上，尤其有助于本身没有原生思维格式的骨干建立推理习惯。

第二阶段采用组奖励解耦归一化策略优化，复合奖励同时评价最终答案与中间字段。奖励包含答案正确、格式正确、问题类型正确、长度落在有效区间四项二值分，以及由 Qwen3-Embedding-0.6B 计算余弦相似度得到的问题分析、音频证据与推理三项相似分。门控设计规定问题分析相似分仅在问题类型正确时生效，音频证据、推理与长度奖励仅在答案正确时生效，避免答错却因中间文字相似而获得虚高奖励。

为避免多奖励直接相加导致某一项主导或整体坍缩，该阶段对每个奖励分别在组内做归一化得到优势，再按权重求和得到总体优势。权重经经验设定，答案与格式仍为 2.0 与 0.5 ，问题类型取 0.5 ，问题分析取 0.25 ，音频证据与推理各取 0.5 ，长度取 0.25 。训练时每轮对同一提示采样 8 个回复，生成批量取 32 ，最大补全长度取 512 ，学习率为 1 × 10^-5 并带系数为 0.001 的散度正则。

### 低秩适配的训练参数与推理时只调系数的执行路径

低秩适配在冻结预训练权重之外增加两个低秩矩阵乘积作为更新，适配后权重为两者之和再乘以缩放因子。该因子等于低秩 alpha 除以秩，本文记为推理时可调系数。本文所有低秩变体均取秩为 8 ，训练时 alpha 取 32 ，对应系数为 4 ，并作用于音频编码器、多模态投影层与语言模型中的全部线性层。推理时缩放仅改变已训练好矩阵的系数而不做额外训练，取 0 即关闭适配，取 4 即恢复训练时强度。

Qwen 系统的训练在 ms-swift 框架内完成。监督微调阶段训练一轮，学习率为 1 × 10^-4 ，单设备批量为 1 ，梯度累积步数为 8 。强化学习阶段同样训练一轮，学习率为 1 × 10^-5 ，散度正则系数为 0.001 ，每提示采样数为 8 ，生成批量为 32 ，最大补全长度为 512 。推理时 Qwen 系统一律采用贪心解码，以保证输出稳定可比。

MOSS 系统的监督微调在 Hugging Face Transformers 与 Accelerate 下实现，同样训练一轮，学习率为 1 × 10^-4 ，单设备批量为 1 ，梯度累积步数为 8 ，且不强加外部四字段结构。零样本推理区分两种最终答案格式，一种要求输出完整答案文本，另一种只要求输出选项标签，后者旨在减少后处理映射歧义。推理时 MOSS 一律采用温度为 1.0 、 top-p 为 1.0 与 top-k 为 50 的采样配置。

全部实验在 4 张 NVIDIA GeForce RTX 4090 上以 bfloat16 混合精度完成。推理时缩放扫描不更新任何参数，仅重复前向计算，因此额外代价主要来自五次投票推理与多取值扫描。若以单次贪心解码为基准，五次顺序打乱加投票意味着约 5 倍推理量，原文未披露延迟、首词延迟、实时率与显存占用，无法进一步量化部署开销。

### 训练后优化为何提升 Qwen 却大幅拉低 MOSS

评测统一在 DCASE 2026 个任务 5 开发集上进行，指标为 top-1 准确率，数值越高越好。每个系统均用与各自流程匹配的提示词保持初始模型、监督微调与强化学习检查点可比，后处理与五次投票完全相同。训练规模固定为 19,480 道强音频贡献题目，低秩秩与训练时强度固定， Qwen 与 MOSS 的解码方式各自固定，因此阶段间差异可归因于监督目标与强化学习，而非提示或后处理变化。

下表集中展示 4 个系统在初始模型、监督微调与强化学习各阶段的 top-1 准确率，以及最终检查点相对初始模型的百分点变化。 Qwen 两条流程包含完整的两阶段结果， MOSS 两条格式只包含零样本与监督微调结果，便于一次看清两条骨干的相反走向与阶段分布差异。

| System | Baseline | SFT | RL | ∆ |
| --- | --- | --- | --- | --- |
| Qwen-CoT | 55.38 | 56.50 | 58.93 | +3.55 ↑ |
| Qwen-Structured-CoT | 54.39 | 57.93 | 58.93 | +4.54 ↑ |
| MOSS-Thinking-Full | 66.02 | 58.18 | – | −7.84 ↓ |
| MOSS-Thinking-Label | 67.70 | 60.36 | – | −7.34 ↓ |

表中可见 Qwen 两条流程均获提升。 Qwen-CoT 从 55.38% 经 56.50% 升至 58.93% ，净增 3.55 个百分点。 Qwen-Structured-CoT 从 54.39% 经 57.93% 升至 58.93% ，净增 4.54 个百分点，结构化监督在微调阶段带来更大跃升，而强化学习阶段抹平了两条流程的最终差距。与之相反， MOSS-Thinking-Full 从 66.02% 跌至 58.18% ，下降 7.84 个百分点， MOSS-Thinking-Label 从 67.70% 跌至 60.36% ，下降 7.34 个百分点。

这一对比说明任务适配并非普遍有益。 Qwen 起点较低，显式任务适配补齐了指令遵循与推理习惯。 MOSS 本已具备较强的零样本思维能力，在当前监督微调配置下反而被扰动。原文未报告方差、置信区间与听测规模，也未按题型拆分失效案例，因此无法判断 58.93% 持平是能力上限还是采样噪声， MOSS 的大幅下降在多大程度上可归因于单一超参与数据配比仍待更多消融验证。

### 推理时调小适配强度能否恢复损失的准确率

为区分适配矩阵本身与适配强度的影响，作者固定已训练好的低秩矩阵，仅在推理时扫描缩放因子。取 0 即关闭适配，取 4 即恢复训练时强度，中间取值观察准确率如何变化。该操作不做任何额外训练，代价仅为多组取值的重复推理，全部结果仍在同一开发集与同一后处理投票下取得，保证可比。

#### 最优取值的数值对比

下表汇总每个系统在非零取值中表现最好的缩放因子及其 top-1 准确率，并同时给出关闭适配与训练时强度的结果。 Qwen 与 MOSS 的最优取值位置不同，便于判断适度缩放是进一步提升还是仅作恢复。

| System | Baseline | Default | Best Observed γ | Best Acc. |
| --- | --- | --- | --- | --- |
| Qwen-CoT | 55.38 | 58.93 | 2.0 | 61.05 |
| Qwen-Structured-CoT | 54.39 | 58.93 | 4.0 | 58.93 |
| MOSS-Thinking-Full | 66.02 | 58.18 | 0.5 | 67.02 |
| MOSS-Thinking-Label | 67.70 | 60.36 | 1.0 | 67.52 |

表中可见 Qwen-CoT 的最优非零取值为 2.0 ，对应 61.05% ，高于训练时强度的 58.93% 与关闭适配的 55.38% 。 Qwen-Structured-CoT 的最优仍为训练取值 4.0 ，对应 58.93% ，与关闭适配的 54.39% 相比提升明显。 MOSS-Thinking-Full 在 0.5 处取得 67.02% ，略高于关闭适配的 66.02% 并远高于训练强度的 58.18% 。 MOSS-Thinking-Label 在 1.0 处取得 67.52% ，低于关闭适配的 67.70% 但远高于训练强度的 60.36% ，属于部分恢复而非超越。

#### 缩放曲线的像素形态

下图按 4 个子图展示 top-1 准确率随推理时缩放因子变化的完整曲线，红色虚线标出训练时强度位置，蓝色折线连接各实测取值。横轴为缩放因子，纵轴为准确率，有助于直观理解非单调趋势与恢复区间。

[![原论文 Figure 1：Performance changes of different systems on the development set when varying the LoRA scaling…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f73f41726516/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f73f41726516/figure-1.png)

*论文图 1：四种系统在不同推理时适配强度下的准确率变化，红色虚线标出训练时取值（原论文 Figure 1）。*

对照红色虚线标出的训练时强度与蓝色折线的走向，子图 (a) Qwen-CoT 从 0 处约 55.38% 攀升至 2 处峰值约 61.05% ，随后在 3 、 4 、 6 、 8 处逐步回落。子图 (b) Qwen-Structured-CoT 从 0 处约 54.39% 快速升至 1 附近约 58.00% ，在 4 处达到 58.93% 后向 8 处明显下滑。子图 (c) MOSS-Thinking-Full 在 0.5 处达到约 67.02% 峰值后随强度增大持续走低至 4 处约 58.18% 。子图 (d) MOSS-Thinking-Label 从 0 处约 67.70% 出发整体下行，仅在 1 处略有企稳至 67.52% ，再向 4 处跌至约 60.36% 。4 组曲线均呈先升后降或整体走低，不存在随强度单调递增的情形，适度减小强度是关键。

### 结论成立的前提、代价与面向复现的选型建议

上述结论成立依赖若干前提。评测仅基于开发集 top-1 准确率，未涉及开放式作答与人工听测，推理是否真正立足音频仅由答案正确与字段相似间接反映。训练数据固定为 19,480 道强音频贡献题目，低秩秩固定为 8 ，训练强度固定为 4 ，解码与投票流程固定，任何一处改变都可能移动最优取值。

代价方面， Qwen 的提升需要一轮监督微调加一轮强化学习，强化学习每提示采样 8 个回复，计算量明显高于单轮微调。 MOSS 的监督微调在当前配置下带来约 7 个百分点的损失，推理时缩放虽能以零训练代价部分恢复，但五次投票本身带来约 5 倍推理量。适度缩放对 Qwen-CoT 带来约 2.12 个百分点的额外增益，对结构化流程则无额外增益，收益具有流程依赖性。

复现方面，作者代码仓库当前可用，文档完整性为完整，覆盖安装、推理与微调能力，可按说明复现训练与评测。实验使用 4 张 NVIDIA GeForce RTX 4090 与 bfloat16 混合精度，关键超参与权重取值已在正文披露。原文未披露采样率等信号规格与附录细节，权重是否直接提供下载需以仓库实际文件为准，复现时应核对提示词、后处理映射与五次投票实现是否一致。

选型上，若骨干本身无原生思维格式，可优先采用结构化监督加多奖励强化学习，并在推理时尝试 2.0 附近的中等强度。若骨干已具备较强零样本思维能力，应谨慎做任务微调，优先尝试只输出选项标签以减少映射歧义，并通过减小推理时强度恢复性能。提交系统最终在挑战中排名总体第三，在 10B 参数以下轻量组排名第 2，该名次仅对应赛事当时提交版本，不保证在其他划分或部署条件下保持。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、通道数、码率、前瞻延迟与实时率，无法按 1 秒样本给出张量形状与帧率变化
- **训练与评测数据**：官方训练集 AudioMCQ-StrongAC-GeminiCoT 共 19,480 道强音频贡献选择题，附 Gemini 生成的思维链标注，评测使用 DCASE 2026 个任务 5 开发集
- **算力与训练耗时**：4 张 NVIDIA GeForce RTX 4090 ， bfloat16 混合精度训练， Qwen 流程使用 ms-swift 框架， MOSS 流程使用 Hugging Face Transformers 与 Accelerate
- **核心超参数与配置**：低秩秩为 8 ，训练时 alpha 为 32 ，对应缩放因子为 4 ，作用于音频编码器、多模态投影层与语言模型全部线性层，监督微调学习率为 1 × 10^-4 ，强化学习学习率为 1 × 10^-5
- **推理速度与部署开销**：Qwen 采用贪心解码， MOSS 采用温度为 1.0 、 top-p 为 1.0 与 top-k 为 50 的采样，每个系统对原始加四种打乱顺序共五次运行多数投票，原文未披露延迟与显存占用
- **开源产物与协议状态**：作者代码仓库当前可用，地址为 <https://github.com/WeitengHu/DCASE2026-Task5> ，文档完整并覆盖安装、推理与微调，权重与数据获取方式以仓库说明为准
- **附录与补充材料要点**：原文未披露独立附录章节与补充证明，关键超参与消融已在正文呈现，许可限制与失效案例未单独说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 6.8/10 | 技术严谨 6.0/10 | 实验充分 6.4/10 | 清晰度 7.1/10 | 影响力 6.3/10 | 开源 6.0/10 | 可复现 6.5/10 | 工程/实践 5.4/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-92`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Hu_92.pdf)
- Track：P1-13

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：结构化四字段显式监督与门控多奖励GDPO组内归一化公式完整且条件分支清晰。

- 核心优势：四系统基线SFT强化阶段收益与缩放对照完整并保留MOSS大幅退化负结果。

- 核心优势：代码仓库已验证可访问且README包含安装推理与微调文档提供可核对管线。

- 主要短板：推理奖励以Gemini文本相似度代理质量而非直接验证声学接地存在立论脱节。

- 主要短板：仅开发集单点准确率且未报告置信区间与显著性检验未覆盖测试集泛化。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
