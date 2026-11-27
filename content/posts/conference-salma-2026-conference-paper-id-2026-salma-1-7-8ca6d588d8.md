---
title: "Improving Urdu ASR with Fine-Tuned Small Language Models for Post-ASR Error Correction"
date: 2026-11-27
draft: false
description: "针对乌尔都语标注稀缺导致 Whisper-Turbo 转写误差偏高的问题，论文冻结识别器并用教师模型生成的伪金标准语料微调 3.5B - 4B 小模型，将平均词错误率从 11.74% 降至 7.81%，代价是评测依赖自动生成的参考文本且纯文本改写无法恢复严重声学缺失。"
tags: ["数据集", "LoRA", "低资源", "语音识别"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "冻结识别器加小模型改写提升乌尔都语识别"
paper_digest_original_title: "Improving Urdu ASR with Fine-Tuned Small Language Models for Post-ASR Error Correction"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.7"
paper_digest_workbench_source_sha256: "d87fd0c7b32339cad8577e9e7830d7d0b96d76734dddf93b4ca094126efdcff5"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.7/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.7.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对乌尔都语标注稀缺导致 Whisper-Turbo 转写误差偏高的问题，论文冻结识别器并用教师模型生成的伪金标准语料微调 3.5B - 4B 小模型，将平均词错误率从 11.74% 降至 7.81%，代价是评测依赖自动生成的参考文本且纯文本改写无法恢复严重声学缺失。"
paper_digest_reader_sections: [{"heading":"乌尔都语转写误差高而标注语音与改写语料双重稀缺","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结识别器加教师学生伪金标准与小模型改写的总体流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"伪金标准语料构造与低秩适配微调的参数边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"小模型微调以约三分之一相对降幅超过大模型零样本改写","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"数据量递增仍有增益而改写延迟不只由参数量决定","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"教师参考与片段划分带来的结论边界与复现前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Sajjad Haider"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Solat J. Sheikh"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zuha Aqib"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Farah Inayat"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zehra Ahmed"}]
paper_digest_abstract_sha256: "cbfe59949ae647e6115bc6eba65039f0002cb5b673ec7df9720fb481d5e292db"
paper_digest_sidecars: {"citation.bib":{"sha256":"772c0dde6954fba1e2c746e034bff37f73cb007a2ce118deb2965fc7a605da33","url":"/audio-research-portal/client/papers/2026-11-27/conference-8ca6d588d88b807c40934efd/citation.bib"},"citation.json":{"sha256":"e41716ae2bc5615569668c795136a650635ac2bf3bb0d1c9b17e9ec04adb4efc","url":"/audio-research-portal/client/papers/2026-11-27/conference-8ca6d588d88b807c40934efd/citation.json"},"citation.ris":{"sha256":"645cb5d0e416e3d26ba9a22222d76da90db04baeaac9603bd6a11f816a4f856f","url":"/audio-research-portal/client/papers/2026-11-27/conference-8ca6d588d88b807c40934efd/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c5e0d60c5883dc3e233ad8361468a622133a575f9e5b4659b41e02db5a8aefd2","url":"/audio-research-portal/client/papers/2026-11-27/conference-8ca6d588d88b807c40934efd/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.7"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.7"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.7"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.7/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.7.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "91827e57b7b5b70e858c0b0c3cf83acfb109420bfd5cc5bf1861ad38e80b1969"
paper_digest_api_reader_plan_sha256: "6567f564de0dd096126db201e097036f4f9c437dbfa682b6f7d150e304f08cd7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5c74eb90ac821122a93b74c20e65deb9b4531e39390d70fec961e920ab6dc94d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f1132ef76c21ffbbd9b84da22146b80a074d68147addcef1a7286dad3ab843ec"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "493be6d91280d8a9f5468444db99a7104e864615d3a475ef3568e42e87856ccd"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b377a9177b90aa38733c5a0bf3053977dba0f4186207a07d3eae0744c5eac9ed"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 冻结识别器加小模型改写提升乌尔都语识别

> 英文题目：*Improving Urdu ASR with Fine-Tuned Small Language Models for Post-ASR Error Correction*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.7`
> DOI：`10.18653/v1/2026.salma-1.7`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.7/) · [官方 PDF](https://aclanthology.org/2026.salma-1.7.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sajjad Haider：机构信息未能从会议 PDF 纯文本可靠映射
- Solat J. Sheikh：机构信息未能从会议 PDF 纯文本可靠映射
- Zuha Aqib：机构信息未能从会议 PDF 纯文本可靠映射
- Farah Inayat：机构信息未能从会议 PDF 纯文本可靠映射
- Zehra Ahmed：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 乌尔都语约有 246 million 使用者，但在多语言自动语音识别（Automatic Speech Recognition, ASR）基准中错误率偏高，原文指出在比较的 Whisper、Qwen3-ASR 与 NVIDIA Nemotron 3.5 ASR 中仅 Whisper 原生支持乌尔都语，因而改进其输出具有实际价值。常规路线是对识别器本身做语言相关微调，但乌尔都语配对音频文本稀缺，且每次域适配都要重训语音管线，成本较高。另一路线是生成式纠错（Generative Error Correction, GEC），即保持识别器不变，用语言模型重写 1-best 文本，但已有工作多依赖大模型的零样本或少样本提示，缺少面向低资源语言的人工校对监督对，也难以区分增益来自规模还是任务适配。

**核心思路与方法架构：** 本文增量是保持 Whisper-Turbo 冻结不变，转而用教师模型生成的伪金标准对 3.5B - 4B 参数小语言模型做监督微调（Supervised Fine-Tuning, SFT）。具体表征流为将 YouTube 乌尔都语语音经冻结 Whisper-Turbo 转写并过滤后，送入 Gemini 3 Flash Preview 教师模型仅修正转写错误，形成 Whisper-Gemini 配对语料，共 5,225 对，其中 425 对约 4 小时留作测试，其余按 1,600 例、3,200 例与 4,800 例组织训练子集。微调对象为 Tiny-Aya-Fire（3.5B 参数）与 Qwen3-4B-Instruct，在注意力投影矩阵接入低秩适配（Low-Rank Adaptation, LoRA）而其余参数冻结，在单块 NVIDIA RTX-4080 GPU（16 GB 显存）上完成训练，推理时新语音先经冻结 Whisper-Turbo 得到初稿，再经微调小模型重写为终稿，从而绕开重训语音管线直击配对数据稀缺根因。

**关键实验与核心代价：** 在 425 对伪金标准测试集上以词错误率（Word Error Rate, WER，越低越好 ↓）为主指标，未纠错 Whisper-Turbo 基线为 11.74%，零样本 Tiny-Aya-Fire 为 10.41%，零样本 Qwen3-4B 为 9.89%，零样本 Qwen3-14B 为 9.04%，而最强可比零样本基线 Gemma3-12B 为 8.32%。4,800 例微调后 Qwen3-4B 降至 7.81%，Tiny-Aya-Fire 降至 7.83%，均低于上述 12B - 14B 零样本大模型，对应原文报告从 11.74% 到 7.81% 约 33% 的相对下降。配对 Wilcoxon 符号秩检验与 10,000 次配对自助重采样显示增益具有统计意义，其中微调 Qwen3-4B 相对零样本 Gemma3-12B 平均 WER 低 0.51 个百分点，95% 置信区间为 [-0.88%, -0.13%]，而两个微调小模型间差异无统计意义。训练量消融显示 Qwen3-4B 随 1,600 例、3,200 例、4,800 例从 9.03% 变为 8.21% 再变为 7.81%，Tiny-Aya-Fire 从 8.72% 变为 8.26% 再变为 7.83%，字错率（Character Error Rate, CER，越低越好 ↓）趋势与 WER 一致但为简洁仅报告 WER。代价方面，4 小时测试集上 Tiny-Aya-Fire 纠错总耗时最少为 29.6 分钟，折合每分钟语音约 7.4 秒，微调 Qwen3-4B 为每分钟语音约 15.4 秒，且部分小数据微调配置最大单句 WER 高于基线，提示仍有长尾退化。

**适用边界与深读导览：** 上述结论成立前提是参考文本均为 Gemini 教师自动生成而非独立人工转写，仅 100 对经两位母语作者对照音频抽查估计 WER 低于 2.5%，且训练测试按片段而非按来源视频划分，泛化估计偏乐观。音频以标准乌尔都语清晰播客、访谈与新闻为主，未覆盖重口音方言与强噪声会话，纯文本纠错也无法恢复严重声学缺失。欲深究伪金标准构建与过滤规则可查阅下文方法章节，训练量、显著性与时延的完整对照可查阅下文实验章节，承认的参考偏差与划分局限可查阅下文局限章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 乌尔都语转写误差高而标注语音与改写语料双重稀缺

多语语音识别近年覆盖语种明显扩大，Whisper 与 Qwen3-ASR 等系统在高资源语言上表现稳定，但使用人口约 2.46 亿的乌尔都语仍处于低资源位置。该语言在公开评测中误差偏高，制约了实际可用性。论文指出，在现有大模型中 Whisper 是唯一原生支持乌尔都语的系统，因此直接提升其转写输出具有现实价值，当前冻结基线的平均词错误率（Word Error Rate，WER）为 11.74%，仍有较大下降空间。

常规做法是拿更多配对语音文本微调识别器本身，但乌尔都语配对数据稀少，重新训练语音流程成本高，已有乌尔都语微调研究只报告了温和改善。更关键的是，每次更换领域都要改动声学模型，部署负担较重，这使得只动文本后处理、不动声学参数的路线更受关注，也引出本文要验证的生成式纠错是否真正可行。

生成式纠错把纠错看成文本到文本的改写任务，识别器先给出初版转写，语言模型再修正替换错误、拼写错误与切分问题，同时保持原意不变。已有工作多用大模型的零样本提示在英语或日语上验证，少数英语工作用低秩适配微调获得超过上下文学习的增益，但在低资源语言上几乎只有大模型零样本结果，规模扩大与任务适配各自贡献不明，结论难以迁移到乌尔都语。

本文把输入输出限定得很清楚，输入是冻结的 Whisper-Turbo 对 10 秒至 30 秒乌尔都语片段的原始转写，输出是小语言模型改写后的乌尔都语文本，监督信号是教师模型生成的伪金标准目标。核心问题是，在没有人工改写语料时，用自动构造的 5,225 对语料微调 3.5B - 4B 小模型，能否稳定超过 12B - 14B 大模型的零样本改写，并明确增益随数据量的变化与统计显著性。

### 冻结识别器加教师学生伪金标准与小模型改写的总体流程

要理解训练与推理如何解耦，可以先看总体框架图，上半为用无标注音频构造训练对的过程，下半为部署时只用冻结识别器加微调小模型的改写链路。图中用颜色区分了语音模块、教师模块与待微调模块，箭头标明了原始转写与教师改写汇合成训练对的位置，以及两个小模型分支的去向，沿箭头阅读能一次看清从音频到文本对再到模型的完整走向。

[![原论文 Figure 1：Overview of the Generative Error Correction framework showing the pseudo-gold training pair…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/a062beea3c85/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/a062beea3c85/figure-1.png)

*论文图 1：训练与推理两阶段框架：无标注音频经冻结识别与教师改写构造训练对再微调小模型（原论文 Figure 1）。*

该图上半为训练阶段，下半为推理阶段，上半左侧白色框为从 YouTube 收集的无标注乌尔都语音频，经深蓝色 Whisper-Turbo 框得到浅蓝色原始转写框，绿色教师框输出绿色教师改写框，两路文本汇入白色伪金标准训练对框，再经橙色微调小模型框分叉到 Qwen3-4B-Instruct 与 Tiny-Aya-Fire 3.5B 两个橙色框。下半则为新音频经同一冻结识别器与微调小模型得到绿色最终改写框的单链，结构明显更短。

与最近的既有路线相比，本文保留了 Whisper-Turbo 完全冻结的做法，替换的是纠错侧的规模假设，不依赖 12B - 14B 大模型的零样本能力，而是用 3.5B - 4B 小模型的任务适配来吸收乌尔都语错误模式。信号规格方面，原文只披露音频为 10 秒至 30 秒片段与总时长约 48 小时等信息，未披露采样率、帧长步长、声学特征维度与码率，文本侧最大序列长度为 1,024 个词元，无法复原逐帧张量形状，只能追踪语料层面的流转。

按语料层面的顺序追踪，一是收集播客、访谈、新闻、记者手记等多风格音频并按静音切分为约 6,400 个片段，二是用冻结识别器得到初版转写并按词数、乌尔都语字符占比与词汇多样性过滤到 5,225 个片段约 40 小时，三是用 Gemini 3 Flash Preview 按只改识别错误、只返回改写文本的约束生成目标，四是将初版与目标配对并划分 425 对约 4 小时作留出评测，其余按三档数据量组织微调，五是部署时新音频只走识别加小模型改写两步。

### 伪金标准语料构造与低秩适配微调的参数边界

语料从公开 YouTube 视频收集约 48 小时乌尔都语，覆盖播客、访谈、新闻、记者手记与记者主播对话等多种口语风格。切分采用静音感知策略，在达到最小时长后遇到的第一个足够长静音处切开，若无合适静音则在最大时长处切断，时长控制在 10 秒至 30 秒，得到约 6,400 个边界自然的话语，避免把连续语音过度碎片化，也为后续过滤保留了完整的韵律单元。

初版转写全部由冻结的 Whisper-Turbo 生成，随后过滤不可靠样本，词数过少易欠识别、过长易出现重复 N 元幻觉予以丢弃，同时要求足够的乌尔都语字符占比与词汇多样性，最终保留 5,225 个片段约 40 小时。教师侧用 Gemini 3 Flash Preview 按附录提示词只修正识别错误并只返回乌尔都语文本，配对构成伪金标准语料，2 位母语作者抽查 100 对对照音频核对，教师改写平均 WER 小于 2.5%，被认为足以支撑训练。

语料划分上留出 425 对约 4 小时作评测，其余用于训练，并为研究数据量影响构造 1,600 例约 12 小时、3,200 例约 24 小时、4,800 例约 36 小时三档递增子集。提示词方面，教师构造用极简约束，而小模型微调与零样本推理统一用更严格的指令模板，要求只改拼写与字符错误、保留正确词原样、不加解释并在改写句后停止，以避免小模型输出解释性文字或改写原本正确的词。

模型选择 Tiny-Aya-Fire 3.5B 与 Qwen3-4B-Instruct 两种指令微调小模型，均用监督微调加低秩适配（Low-Rank Adaptation，LoRA），秩为 16，缩放系数为 32，丢弃率为 0.05，只作用于注意力层的查询、键、值与输出投影矩阵，其余参数冻结。训练 3 个轮次，优化器为 AdamW，余弦调度，有效批大小为 16，半精度训练，在单张 16 GB 的 RTX-4080 上完成，未设独立开发集调参，更大模型因显存限制只做零样本对照。

### 小模型微调以约三分之一相对降幅超过大模型零样本改写

评测在 425 对留出集上进行，参考文本均为教师自动生成的改写，因此 WER 衡量的是与教师改写的一致程度，而非与独立人工转写的差距。主指标为 WER，方向越低越好，原文另算字错误率（Character Error Rate，CER）且趋势与 WER 一致故只报 WER，同时记录改写阶段耗时，下表汇总全部基线、零样本与三档微调结果，可对照平均数、中位数与最大值阅读。

| Model | Average (%) | Median (%) | Max (%) |
| --- | --- | --- | --- |
| Whisper-Turbo (Baseline) | 11.74 | 10.59 | 35.06 |
| Zero-shot Correctors |  |  |  |
| Tiny-Aya-Fire (3.5B) | 10.41 | 8.97 | 36.36 |
| Qwen3-4B-Instruct | 9.89 | 8.84 | 28.57 |
| Qwen3-14B | 9.04 | 8.07 | 28.57 |
| Gemma-12B | 8.32 | 7.32 | 24.56 |
| Fine-tuned Qwen3-4B |  |  |  |
| Qwen_exp_1600 | 9.03 | 7.94 | 49.48 |
| Qwen_exp_3200 | 8.21 | 6.88 | 33.33 |
| Qwen_exp_4800 | 7.81 | 6.67 | 28.89 |
| Fine-tuned Tiny-Aya-Fire (3.5B) |  |  |  |
| Tinyaya_exp_1600 | 8.72 | 7.56 | 48.28 |
| Tinyaya_exp_3200 | 8.26 | 6.84 | 38.57 |
| Tinyaya_exp_4800 | 7.83 | 6.38 | 40.58 |

表中平均 WER 显示，未改写的 Whisper-Turbo 为 11.74%，中位数为 10.59%，最大值达 35.06%。零样本侧 Gemma-12B 为 8.32%，Qwen3-14B 为 9.04%，Qwen3-4B 为 9.89%，Tiny-Aya-Fire 为 10.41%，参数更大的模型零样本更强。微调后 Qwen3-4B 在 4,800 例时达 7.81%，Tiny-Aya-Fire 达 7.83%，相对基线约 33% 相对下降，中位数分别降至 6.67% 与 6.38%，均低于 12B - 14B 零样本，但最大值仍有 28.89% 与 40.58%，说明长尾难例并未完全消除。

为判断增益是整体下移还是少数话语拉动，可以看逐话语 WER 的箱线分布，横轴为 11 种配置，纵轴为词错误率，箱体反映四分位区间，箱内横线为中位数，红色菱形为均值。阅读时须结合纵轴 0.0 至 0.50 的刻度与顶部离群点位置，避免只看均值就得出全面改善的笼统结论，也要注意不同配置离群高度差异较大。

[![原论文 Figure 2：Distribution of per-utterance Word Error Rates (WER) across baseline and fine-tuned models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/a062beea3c85/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/a062beea3c85/figure-2.png)

*论文图 2：逐话语词错误率箱线分布：微调模型箱体下移且随数据量递增逐步降低（原论文 Figure 2）。*

像素显示最右侧原始基线箱体位置最高，均值与中位数明显高于左侧各改写配置，而两个 4,800 例微调箱体明显下移且箱体更矮，表明多数话语同步改善。随着 1,600 例至 3,200 例再到 4,800 例，两条微调曲线的箱体与均值逐步下探，但顶部仍有约 0.40 至 0.49 的孤立离群点。显著性检验用符号秩与 10,000 次配对自助，微调相对基线平均下降约 3.91 个百分点，微调 Tiny-Aya-Fire 相对大模型零样本低 1.21 个百分点，而两微调小模型间差异仅为 0.02 个百分点，P 值为 0.798，无显著差别。

### 数据量递增仍有增益而改写延迟不只由参数量决定

从三档数据量看，2 模型都随数据增加单调变好，Qwen3-4B 从 9.03% 经 8.21% 到 7.81%，Tiny-Aya-Fire 从 8.72% 经 8.26% 到 7.83%，相对各自零样本起点分别带来约 2.08 个百分点与 2.58 个百分点下降。增幅逐步收窄但在 4,800 例处仍未走平，暗示更多伪金标准数据可能继续带来收益，但原文未验证超过 36 小时后的外推，也未做视频级不相交划分下的学习曲线，增益能否完全保留仍待检验。

除准确率外，原文在约 4 小时评测音频上统计改写阶段总耗时与折算到每分钟音频的耗时，以衡量轻量改写的部署代价。该统计只覆盖语言模型改写阶段，不含识别解码本身，也不含端到端内存占用，下表按模型给出总分钟数与每分钟秒数，阅读时应把耗时与前表 WER 结合，判断每一点精度提升需要付出多少额外等待。

| GEC Model | Total (min) | Per Min (s) |
| --- | --- | --- |
| Tiny-Aya-Fire (3.5B FT) | 29.6 | 7.4 |
| Gemma3-12B (Zero-Shot) | 50.3 | 12.6 |
| Qwen3-4B (FT) | 61.6 | 15.4 |
| Qwen3-14B (Zero-Shot) | 94.9 | 23.7 |

表中 Tiny-Aya-Fire 微调版总耗时为 29.6 分钟，折合每分钟音频 7.4 秒，为四者最快，Gemma3-12B 零样本为 50.3 分钟与 12.6 秒，Qwen3-4B 微调版为 61.6 分钟与 15.4 秒，Qwen3-14B 零样本达 94.9 分钟与 23.7 秒。可以看到 Qwen3-4B 参数少于 Gemma3-12B 却更慢，说明耗时不只由参数量决定，还受结构与实现影响，轻量改写总体只引入适度开销，部署时不能只按参数量排序来估计速度。

定性上原文归纳 3 类典型修正，一是专有名词恢复，如把音近误写的人名还原为规范形式，二是复合词切分，把连写词按乌尔都语正字法插入词边界，三是外来词与附加形态规范化，把对话、政策、利息等英语借词的不同拼写映射到规范形式并恢复复数尾缀。这些例子说明微调学到了零样本提示遗漏的语音对应拼写模式，但纯文本改写对严重声学删除仍无能为力，缺失内容无法凭上下文凭空补回。

### 教师参考与片段划分带来的结论边界与复现前提

#### 文本改写的作用范围

首要边界来自只改解码后文本的设定。冻结的 Whisper-Turbo 先给出初始转写，小模型只在文字侧修正替换、拼写、切分与借词写法，能借助上下文恢复音近专有名词与复合词边界，但无法找回声学端严重删除或截断时已经丢失的内容。原文明确指出这类结构性缺失需微调声学模型本身才能处理，因此在当前冻结识别器的设定下，可纠正的误差幅度受限于解码保留的信息量，文字侧只能重排已有的语音证据，不能创造新的语音证据。若未来面对口音较重或录制条件较差的语音，删除类问题占比上升，文字侧能带来的改善会进一步收窄。这一分工也解释了定性分析中 3 类有效修正的共性，专有名词恢复、分词补齐与借词规范都属于字形与词序层面的修复，声学证据缺失时的整句漏译仍在能力之外。

#### 伪金标准与划分带来的评测约束

其次是训练与评测共用教师改写的约束。全部 5,225 对转写均由 Whisper-Turbo 输出经 Gemini 3 Flash Preview 改写得到，其中 425 对留作评测，报告的 WER 本质是与教师改写的一致度，而非与独立人工转写的差距。原文由 2 位母语者抽查 100 对并对照源音频核对，得到小于 2.5% 的核对 WER，说明伪金标准可用作训练监督，但抽查规模有限，更系统的多标注者检验仍然缺失，教师的用词偏好与规范化选择会同时进入训练目标与评测参考。划分按片段而非按来源视频进行，同一视频的不同片段可能分处训练侧与评测侧，说话人音色、话题词汇与录制通道容易在两侧重复，会高估对未见说话人与新话题的泛化，原文也提出未来改用按视频不相交的划分给出更保守的估计。因此从 11.74% 到 7.81% 的约 33% 相对下降，只在该伪金标准协议内成立，不宜直接等同于人工参考下的同等收益，两个微调小模型之间无显著差异的结论同样受该协议限制。

#### 数据域与部署代价的适用前提

数据域同样较窄，部署代价的计量口径也需明确。约 48 小时音频取自公开视频的播客、访谈、新闻与记者口述，经 10 秒到 30 秒静音切分得到约 6,400 个片段，再经词数上下限、乌尔都语文字占比与词汇多样性过滤保留约 40 小时，多为发音清晰的标准乌尔都语，未覆盖重口音方言与嘈杂对话，也未与更小的编码器解码器改写器对比，向其他低资源语言迁移只是方法层面的可比性论述，未经实测。延迟统计只计量改写阶段处理约 4 小时评测音频的耗时，未包含识别解码的端到端耗时与显存占用，因此不能据此推断完整系统的实时表现。复现方面，原文声称在 Hugging Face 以 CC BY-NC 4.0 发布两个适配器与伪金标准数据集，但原始音频与视频标识因版权不分发，附录给出教师与改写两套提示词细节，可用于复刻过滤与推理约束。若目标是本地部署与避免反复训练语音系统，冻结识别器加小模型改写仍是务实选择，但需接受教师偏差与划分偏乐观的代价，在新领域落地前应先补做人工抽检与按视频划分的复测。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与帧长步长特征维度码率，仅披露片段时长 10 秒至 30 秒，总量约 48 小时，过滤后约 40 小时，评测约 4 小时，文本最大序列长度 1,024 个词元，推理为离线整句改写，未披露前瞻延迟与 RTF
- **训练与评测数据**：YouTube 公开乌尔都语约 48 小时多风格语音，经静音切分约 6,400 段，过滤后 5,225 对初版与教师改写伪金标准，留出 425 对约 4 小时评测，其余按 1,600 例约 12 小时与 3,200 例约 24 小时与 4,800 例约 36 小时训练，100 对经母语者抽查核对
- **算力与训练耗时**：单张 16 GB 的 RTX-4080 完成训练，共 3 个轮次，半精度训练，有效批大小 16，未披露总耗时与多卡配置，更大模型因显存限制只做零样本推理
- **核心超参数与配置**：监督微调加 LoRA，秩为 16，缩放系数为 32，丢弃率为 0.05，仅作用于注意力查询键值输出投影，其余冻结，优化器为 AdamW，学习率为括号内公式值，余弦调度，最大序列长度 1,024，统一指令模板
- **推理速度与部署开销**：改写阶段 Tiny-Aya-Fire 微调版每分钟音频 7.4 秒，Gemma3-12B 零样本 12.6 秒，Qwen3-4B 微调版 15.4 秒，Qwen3-14B 零样本 23.7 秒，未披露识别解码本身与端到端显存占用
- **开源产物与协议状态**：原文声称在 Hugging Face 发布两个适配器与伪金标准数据集并采用 CC BY-NC 4.0，原始音频与视频标识因版权不分发，本次未获得可验证的可用链接确认，是否可直接运行需自行核对
- **附录与补充材料要点**：附录给出教师极简提示词与小模型严格指令模板，说明后者经迭代收紧以抑制解释性输出，另有参考文献与致谢，未披露超参搜索细节与系统性失效案例汇总

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.7`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.7/) · [官方 PDF](https://aclanthology.org/2026.salma-1.7.pdf)
- DOI：`10.18653/v1/2026.salma-1.7`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：4800例微调后平均WER从11.74%降至7.81%与7.83%，低于12B-14B零样本基线8.32%与9.04%。

- 核心优势：两小模型三档训练量单调下降并附配对Wilcoxon与10000次自助重采样及95%置信区间检验。

- 核心优势：冻结Whisper-Turbo结合注意力投影LoRA微调与统一指令模板，单卡RTX-4080可完成训练。

- 主要短板：训练与测试参考均源自Gemini教师生成，仅100对人工抽查且按片段而非视频划分，存在循环评测与泄漏风险。

- 主要短板：大模型仅做零样本对照未比较微调大模型，且CER趋势一致却无具体数值，规模与监督公平边界不完整。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
