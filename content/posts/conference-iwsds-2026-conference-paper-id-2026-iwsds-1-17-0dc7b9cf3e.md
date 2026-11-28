---
title: "Can Small-Scale LLMs Balance Content Accuracy and Speaker Faithfulness in Noisy French Dialogue Summarization?"
date: 2026-11-27
draft: false
description: "论文检验 8B 参数以内小模型在模拟含噪法语辩论摘要中能否兼顾内容与说话人忠实，对比直接提示、思维链与干净及含噪微调，发现噪声使 ROUGE-L 与可读性大跌，干净微调仅使 DeepSeek 类模型回升并降低人物虚构而思维链更通用，但仅 5 个工业辩论显示未见说话人与主题仍难泛化。"
tags: ["LoRA", "提示学习", "模型评估", "语音摘要"]
categories: ["iwsds-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "小模型在含噪法语辩论摘要中能否兼顾内容与说话人忠实"
paper_digest_original_title: "Can Small-Scale LLMs Balance Content Accuracy and Speaker Faithfulness in Noisy French Dialogue Summarization?"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.17"
paper_digest_workbench_source_sha256: "1addd16c9fda5bbdb865e810a5d2f34a530842b17049026c6ff923d33a8771d2"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.iwsds-1.17/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.iwsds-1.17.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音摘要"
paper_digest_score: 5.4
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文检验 8B 参数以内小模型在模拟含噪法语辩论摘要中能否兼顾内容与说话人忠实，对比直接提示、思维链与干净及含噪微调，发现噪声使 ROUGE-L 与可读性大跌，干净微调仅使 DeepSeek 类模型回升并降低人物虚构而思维链更通用，但仅 5 个工业辩论显示未见说话人与主题仍难泛化。"
paper_digest_reader_sections: [{"heading":"本地部署约束下含噪法语辩论摘要为何难以兼顾内容与说话人","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三策略对比总览：直接提示、思维链与干净及含噪微调","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"指令格式与低秩适配细节：冻结边界与输入模板差异","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"噪声使自动分数与可读性同步下滑，仅深思模型从干净微调获益","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"归一化噪声更伤语义，人物提及揭示说话人遗漏与虚构分化","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"小模型可用边界：泛化缺口、复现前提与选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Rim Abrougui"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Guillaume Lechien"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Elisabeth Savatier"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Benoît Laurent"}]
paper_digest_abstract_sha256: "094a55f9529181113818ea70aff9d9e19f2e1efef829b1ef404e1e2b7a0745ce"
paper_digest_sidecars: {"citation.bib":{"sha256":"bfca6625e7adea34ae117e75c3fd9c463ddc47d6bba900bc8eea26ba836a556d","url":"/audio-research-portal/client/papers/2026-11-27/conference-0dc7b9cf3ec0273abda8f6fc/citation.bib"},"citation.json":{"sha256":"949b97cd824d17ff0739964eea8507619c438f65b7d778dd7e1adb38b7af7379","url":"/audio-research-portal/client/papers/2026-11-27/conference-0dc7b9cf3ec0273abda8f6fc/citation.json"},"citation.ris":{"sha256":"8ab6deeade47b5aa745e25ae510980807cd4576fa3ed15688647c6de62fac068","url":"/audio-research-portal/client/papers/2026-11-27/conference-0dc7b9cf3ec0273abda8f6fc/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1a3581f7b4bb934d9ff6c8b5c068229b90d0a79d9d5cfb348114aa085e27605a","url":"/audio-research-portal/client/papers/2026-11-27/conference-0dc7b9cf3ec0273abda8f6fc/rethink-context.json"}}
paper_digest_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.17"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwsds-2026"
paper_digest_conference_name: "iwsds-2026"
paper_digest_doi: "10.18653/v1/2026.iwsds-1.17"
paper_digest_conference_doi: "10.18653/v1/2026.iwsds-1.17"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwsds-1.17/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwsds-1.17.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e2054b967d495e097d9d9fa66c4106a8cea4b4ad954e00ec022adfc7d7c96855"
paper_digest_api_reader_plan_sha256: "038d3935562a699e3d177ec50bb32cda7a60d2b48eea8019faba901566ec19e7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "067ad46e35972fe6043263b820ad9c2f6c6bd9aac74c5e2c589f47c417677631"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b3f52b0662cbc0dbdd51890b3fed62d57b547718d081d094b476779d6d1dec85"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4f8e079c86be5c359a5246e600b9d33599fd6e9db44cba700509fc648c0362e4"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "15a5e89492ee4890264cc83f8802a2db37b189d5665cb94def5d7159604a0dd5"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"task","id":"task.speech-summarization","label":"语音摘要"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 小模型在含噪法语辩论摘要中能否兼顾内容与说话人忠实

> 英文题目：*Can Small-Scale LLMs Balance Content Accuracy and Speaker Faithfulness in Noisy French Dialogue Summarization?*

> 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.17`
> DOI：`10.18653/v1/2026.iwsds-1.17`
> Track：IWSDS 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.17/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.17.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding) → [语音摘要](/audio-research-portal/papers/?concept=task.speech-summarization)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[提示学习](/audio-research-portal/papers/?concept=method.prompt-learning)
- **研究重点**：[模型评估](/audio-research-portal/papers/?concept=research_focus.evaluation)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.4/10** | 创新 5.2/10 | 技术严谨 6.8/10 | 实验充分 6.0/10 | 清晰度 5.4/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Rim Abrougui：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Lechien：机构信息未能从会议 PDF 纯文本可靠映射
- Elisabeth Savatier：机构信息未能从会议 PDF 纯文本可靠映射
- Benoît Laurent：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 本文处理带噪法语多说话人政治辩论的抽象摘要任务，输入为缺少大小写与标点的自动语音识别转写文本，输出为约 6 到 8 句的中立流畅摘要，需覆盖说话人身份、讨论主题与关键论点。现有大语言模型虽在对话摘要上表现较强，但硬件成本与数据保密要求使其难以在媒体工业场景本地部署。辩论话语包含多方对立观点与复杂主题，而语音识别错误、标点缺失与说话人标记丢失进一步破坏可读性与事实一致性。法语辩论摘要数据稀缺，公开可用的 FREDSum 数据集成为唯一可借助的基准，噪声鲁棒性与说话人忠实度成为核心瓶颈。

**核心思路与方法架构：** 与最接近的直接提示基线相比，本文的增量在于系统比较三种低成本策略在模拟工业噪声下的表现，并保留原模型结构而不引入新架构，覆盖 Flan-T5 large、正文称 LLaMA-3B 而表 2 作 Llama-3.2-3B、Mistral-7B-Instruct 而表 2 作 Mistral-7B-Instruct-v0.3 与基于 LLaMA 3.1-8B 的 DeepSeek-R1-Distill-Llama-8B 共 4 个 8B 参数以下模型。单条样本沿如下链路处理：原始 FREDSum 手工转写先拼接发言轮次并去除轮首说话人标记，再做排版规范化并转为全小写无标点形式，随后随机以 `<unk>` 替换部分词、插入语气词并利用内部词典做同音替换，最后切分重组模拟交错错误，形成噪声文本。噪声文本连同法语提示模板送入模型，Mistral-7B-Instruct 使用 `[INST]` … `[/INST]` 指令格式，其余模型使用 `<source>` 与 `<summary>` 包裹的简单格式，模型在本地下载、不调用外部 API 的条件下生成法语摘要。微调采用 LoRA 方案，秩为 8，alpha 为 16，批量大小为 3，最多训练 10 个轮次，分别在干净训练集与加噪训练集上进行，以检验干净域数据能否提升噪声鲁棒性。

**关键实验与核心代价：** 在 FREDSum 干净与噪声对照上，噪声使直接提示的 ROUGE-L 从 Mistral-7B-Instruct 的 23.2 降至 5.0，BERTScore 从 72.7 降至 64.6，DeepSeek 模型的 ROUGE-L 从 16.0 降至 9.5，BERTScore 从 66.3 降至 55.1，表明内容准确性明显受损。思维链提示将噪声条件下 Mistral 的 ROUGE-L 提升至 15.9，DeepSeek 提升至 10.4，而在干净集微调条件下 DeepSeek 取得 R1 为 35.4、ROUGE-L 为 17.8、BERTScore 为 67.1，高于同为干净集微调的其他 3 个模型，人工可读性达 3.5 分并以约 6% 的片段抽取率保持法语流畅输出。说话人忠实度上，微调 DeepSeek 的人名正确提及为 62.9，遗漏为 37.1，幻觉为 5.6，全说话人检出率为 48.3% 的辩论，而思维链 Mistral 对应为 8.2、91.8、73.1 与 17.2%，显示微调显著减少幻觉但仍有遗漏。在仅 5 个工业辩论的初步评测中，DeepSeek 与 Mistral 的 ROUGE-L 分别为 14 与 13，BERTScore 分别为 60.7 与 59.5，表现接近且说话人遗漏仍普遍。代价方面，除 DeepSeek 外所有模型在噪声集微调后表现最差并倾向复述噪声片段，Flan-T5 与 Llama-3B 可读性仅 1.5 分，且批量大小与 LoRA 秩等超参调整未带来显著改善，人工评估仅用 1 到 5 分可读性量表，未报告评分人数与一致性。

**适用边界与深读导览：** 结论成立依赖于模拟噪声近似真实 WFST 与 Kaldi 管线伪影、法语政治辩论域内评测以及 8B 参数以下本地模型条件，未覆盖未见说话人与新主题的泛化，5 个工业辩论仅支持定性观察且两模型均难以完整识别说话人。本文未实测延迟、吞吐与部署成本，也未说明流式或实时设置，默认为整篇离线摘要，不宜直接作为部署选型依据。欲深究噪声构造与提示模板可查阅方法概述，欲核对 Top 系统分噪声表现与人名错误分布可查阅实验结果，欲复现 LoRA 配置与评测细节可查阅细节详述与局限与问题。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 本地部署约束下含噪法语辩论摘要为何难以兼顾内容与说话人

工业媒体场景对本地可部署摘要提出硬约束，隐私与数据保护要求禁止调用外部接口，所有模型必须在本地运行，大规模部署成本高昂。论文聚焦法语政治辩论，这类对话包含多位说话人围绕复杂议题展开对立论述，摘要需要同时给出参与者、讨论主题与关键论点。研究限定在 8B 参数以内的小模型，检验其在资源受限与数据主权双重压力下能否产出可靠的抽象式摘要。

输入是缺乏大小写与标点的自动转写风格文本，论文用公开 FREDSum 数据集模拟这种形态，先拼接去除每轮开头说话人标记的发言，再做印刷归一化，随后随机以未登录词符号替换部分词、插入语气词、按词典做同音替换，最后切分重组模拟生产流程中的交错错误。这种构造刻意保留无标点连写形态以便与内部转写对齐。输出要求为 6 至 8 句的中立流畅短文，需在含噪输入下保持可读并忠实还原人物等事实信息。

#### 噪声构造的分工细节

噪声构造分为 4 段分工，拼接去除说话人标记保证输入为纯发言流，印刷归一化统一大小写与标点缺失形态，3 类替换分别模拟词表缺失、口语停顿与发音混淆，切分重组复现生产流程特有的交错串话。四者搭配的原因在于单一替换只能覆盖局部失真，只有叠加结构错位才能逼近真实转写的连写与错位特征，新增的交错步骤使长辩论的轮次边界模糊，迫使摘要模型在缺失指代线索时仍需维持论点归属。

已有主流路线难以直接套用，大模型在对话摘要上表现强但受硬件、成本与保密限制，小模型在电话摘要等任务上经提示与微调取得进展，医学对话曾用合成含噪数据提升稳健性，早期工作还用子词与发音表示或标点恢复对抗识别错误。这些方法多面向短轮或单主题场景，对辩论式长程对立结构与说话人忠实度的联合考验不足，辩论的频繁切换与论点交锋进一步抬高忠实要求，而法语辩论数据本身也稀缺。

#### 4 种条件的执行分工

4 种条件按由简到繁执行，直接提示仅给含噪辩论求摘要，思维链提示先要求提炼主旨再筛选关键段落最后改写为中立流畅短文，干净微调与含噪微调分别用两类数据做低秩适配，秩取 8、缩放取 16、批量取 3、至多训练 10 轮。Mistral 保留其指令前后缀，其余模型采用来源与摘要标签区分输入输出，提示用语为法语而图示为英语，评价兼顾内容准确、可读性与人物忠实，形成内容与忠实并重的检验链条。

论文要回答 3 个可检验问题，噪声究竟使内容准确性与可读性下降多少，干净领域数据微调能否比含噪微调更稳健并减少虚构，思维链提示与微调在人物提及与说话人全对率上如何分化。作者比较直接提示、思维链提示、干净微调与含噪微调 4 种条件，覆盖 4 个小模型，并在仅 5 个工业辩论上做初步泛化试探，该设计兼顾内容准确与说话人忠实两条主线，避免单指标误导选型。

### 三策略对比总览：直接提示、思维链与干净及含噪微调

下面这张原图给出思维链提示的完整版式，它是理解后续对比的关键，作者强调指令故意保持简单以避免模型逐条照办而忽视整体连贯。阅读时先看顶部黑色标题栏与下方浅紫色正文区的分区，再注意 3 段动作与句数约束的位置，最后确认辩论占位符如何接入，若忽视版式细节，后续关于简化指令的讨论将难以理解。

[![原论文 Figure 1：Chain of Thought Prompting](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-1.png)

*论文图 1：思维链提示模板：分三步识别观点、挑选段落并改写为 6 至 8 句短文（原论文 Figure 1）。*

原图像素显示顶部黑底白字标题为提示含义，下方浅紫底框内为等宽字体英文指令，大意是按识别主要观点、挑选关键段落、再以清晰中立流畅风格改写为 6 至 8 句短文的顺序执行，末尾带有辩论占位符。框体为圆角黑边，文字分五行排列，句数约束以数字形式明确写出，整体为单面板无子图，这种极简措辞与作者所述简化取舍一致，这种设计与后文微调模板形成对照。

端到端数据流可按五步追踪，第一步取 FREDSum 人工转写并去除轮首说话人标记，第二步做印刷归一化得到可比底本，第三步注入 3 类扰动并切分重组模拟交错，第四步将含噪辩论填入不同模板，第五步由小模型生成摘要。该流程未使用声学模型输出的时间戳与置信度，纯靠文本线索恢复结构。信号规格方面原文未披露采样率、帧长、码率与声学特征维度，全程为文本转文本，不涉及频谱或波形张量，帧率与通道等音频参数不适用。

4 种条件共用同一批含噪输入以保证可比，直接提示仅给辩论不给示例，思维链在直接提示上增加分步推理要求，干净微调与含噪微调用对应版本训练集做低秩适配。参评模型为 Flan-T5 large 、LLaMA-3.2-3B 、Mistral-7B-Instruct-v0.3 与 DeepSeek-R1-Distill-Llama-8B ，提示语本身为法语而图示为英语译意，所有提示均先以法语撰写，图示译为英语仅为展示可读性，复现须用回法语原文。

### 指令格式与低秩适配细节：冻结边界与输入模板差异

下面这张原图规定微调时的输入拼接格式，不同模型的前后缀差异直接影响适配效果，阅读时先看上半部分关于第四组实验沿用第三组配置仅换含噪数据的说明，再对照下半部分两种模板的标记符号，才能明白为何作者强调遵循指令模型的原生格式，若混淆两类标记，微调增益可能被格式错配完全掩盖。

[![原论文 Figure 2：Finetuning input format for different models](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-2.png)

*论文图 2：微调输入拼接格式：指令模型与通用模型的标记差异（原论文 Figure 2）。*

原图像素上半为两行英文正文说明第四组实验配置，下半为黑底白字标题加浅紫底框，框内分两行给出模板，第一行为 Mistral-7B 指令式前后缀包裹辩论与摘要，第二行为其他模型用来源与摘要标签包裹对应内容。字体为等宽，方括号与尖括号标记清晰可辨，单面板无曲线，标题栏与正文区配色与前一张提示图一致，便于对照阅读，这种格式差在消融中被证实不可忽略。

微调采用低秩适配，秩为 8 ，缩放系数为 16 ，批大小为 3 ，至多训练 10 轮，训练集为 FREDSum 干净版本或其含噪版本。Mistral-7B-Instruct-v0.3 必须使用指令前后缀，去掉后性能明显下降，其他模型使用来源与摘要标签结构。作者还试过调整批大小、秩与缩放系数，但对自动分数尤其可读性无显著影响，训练目标为给定辩论生成参考摘要，优化器、学习率与冻结层细节原文未披露。

参数冻结边界原文未明确说明，按常规低秩适配理解应为基座冻结仅更新适配器，但原文未给出冻结层清单与梯度流细节。推理侧所有实验均在本地下载模型完成，未调用外部接口且无数据外传，本地运行还保证无数据外传，符合媒体场景的数据保护诉求。解码采样步数、前瞻窗口、缓存策略以及延迟、吞吐与显存开销原文未披露，部署时不能默认具备流式能力。

### 噪声使自动分数与可读性同步下滑，仅深思模型从干净微调获益

评测在 FREDSum 干净与模拟含噪两个版本上展开，条件记为干净提示、含噪提示、思维链、干净微调与含噪微调，分别简写为 PC 、PN 、CoT 、FC 与 FN 。指标为词重叠类的 ROUGE-1 、ROUGE-2 、ROUGE-L 与语义类的 BERTScore ，数值越高越好，另加 1 至 5 分人工可读性评分。同一批辩论在不同模型与条件下重复测试，码率、参数量与因果流式等公平前提原文未设对照，属离线文本摘要对比，可读性为主选型依据。

|  |  | R1 | R2 | RL | Bertscore |
| --- | --- | --- | --- | --- | --- |
|  | PC | 33.2 | 9.6 | 16.0 | 66.3 |
| Deepseek-R1- | PN | 19.4 | 4.0 | 9.5 | 55.1 |
| R1-LLama-8B | CoT | 20.6 | 4.2 | 10.4 | 57.2 |
|  | FC | 35.4 | 11.0 | 17.8 | 67.1 |
|  | FN | 33.2 | 10.3 | 17.6 | 65.7 |
|  | PC | 44.4 | 16.2 | 23.2 | 72.7 |
| Mistral-7B- | PN | 29.5 | 7.2 | 5.0 | 64.6 |
| Instruct-v0.3 | CoT | 32.0 | 8.4 | 15.9 | 65.4 |
|  | FC | 18.3 | 4.5 | 11.6 | 58.2 |
|  | FN | 9.1 | 8.2 | 7.2 | 51.3 |
|  | PC | 21.0 | 4.4 | 10.1 | 50.6 |
|  | PN | 23.7 | 3.9 | 11.5 | 59.4 |
| Llama-3.2-3B | CoT | 23.8 | 3.9 | 11.6 | 59.4 |
|  | FC | 15.5 | 4.5 | 8.2 | 51.1 |
|  | FN | 15.0 | 4.2 | 8.1 | 49.6 |
|  | PC | 15.1 | 4.2 | 9.7 | 53.5 |
|  | PN | 15.1 | 4.0 | 7.7 | 44.9 |
| FlanT5-large | CoT | 7.8 | 1.3 | 4.7 | 37.5 |
|  | FC | 9.2 | 2.2 | 5.5 | 33.7 |
|  | FN | 10.0 | 2.4 | 6.2 | 39.3 |

下表为原文主结果的完整转写，跨行可见噪声冲击最大，Mistral-7B-Instruct-v0.3 的 ROUGE-L 从 23.2 跌至 5.0 ，DeepSeek-R1-Distill-Llama-8B 从 16.0 跌至 9.5 ，BERTScore 同步下降 8 至 11 分。思维链对两者有回升，Mistral 回到 15.9 ，DeepSeek 回到 10.4 ，而 LLaMA-3.2-3B 因复读片段在含噪下略升，Flan-T5 large 则全面走低。干净微调仅 DeepSeek 获益至 17.8 与 67.1 ，其余多过拟合复现噪声片段，含噪微调对多数模型最差。

人工可读性与自动分数走向一致，直接提示下 Mistral 平均 3.0 分，DeepSeek 平均 2.5 分，表现为语法可读但混入英语或原文复制，LLaMA-3B 与 Flan-T5 large 仅 1.5 分，思维链未带来显著可读提升。干净微调后 DeepSeek 达 3.5 分且多为法语流畅输出，仅约 6% 为片段摘抄，其余模型仍倾向复现噪声。不同超参组合对可读性无显著改变，含噪微调虽让 DeepSeek 稍抗噪但仍产出碎片化输出。

基于可读性作者选出两个后续系统，原文写作 DeepSeek-8B (FN) 经干净数据微调，与前文 FC 为干净、FN 为含噪的定义存在字面不一致，原文未解释，此处照录并提醒以分数最高的干净微调行为为准。另一系统为 Mistral-7B-Instruct 思维链提示，两者在自动分数上各有胜负而可读性相对最稳，后续说话人与噪声拆分均围绕它们展开，工业试探也仅对比这两者。

### 归一化噪声更伤语义，人物提及揭示说话人遗漏与虚构分化

下面这张柱状图拆分两类噪声对语义分数的影响，它是判断归一化缺失与语音识别错误何者更伤的关键证据，阅读时先看顶部图例两色与纵轴区间，再对比左右两组模型在两种条件下的高低，才能理解稳健性差异的来源与后续选型含义，该拆分也为人物忠实分析提供背景。

[![原论文 Figure 3：Impact of Noise Types - BertScore (%)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/486f2c7edc41/figure-3.png)

*论文图 3：两类噪声下语义分数对比：归一化缺失比识别错误更伤（原论文 Figure 3）。*

原图像素为双组双柱结构，横轴左侧为 DeepSeek 微调系统，右侧为 Mistral 思维链系统，纵轴为 BERTScore 从 50.0 至 70.0 。紫色归一化柱分别为 66.0 与 62.4 ，蓝色识别错误柱分别为 68.4 与 68.2 ，柱顶均标出数值。两系统在识别错误下表现接近且较高，归一化下均更低且 Mistral 跌幅更大，说明缺标点大小写比丢词更破坏可读结构，微调系统整体更稳健。

人物忠实度用多语言 GLiNER 抽取人物实体，经人工剔除误检并按简称与全名等价合并后统计，分为正确、遗漏与虚构 3 类。说话人判定更严，仅当一篇摘要检全该场全部参与者才算正确，否则记为部分或失败。下表为两个优选系统的误差分布完整转写，行列与原表一致，可直接对照虚构与遗漏的分化，该口径比自动分数更贴近工业可用性。

| Model | Correct | Omission | Hallucination |
| --- | --- | --- | --- |
| DeepSeek-8B (FN) | 62.9 | 37.1 | 5.6 |
| Mistral-7B (CoT) | 8.2 | 91.8 | 73.1 |

数据显示微调系统正确 62.9% ，遗漏 37.1% ，虚构仅 5.6% ，而思维链系统正确仅 8.2% ，遗漏高达 91.8% ，虚构达 73.1% 。说话人全对率前者为 48.3% 加 10% 仅对一位，后者为 17.2% 加 17% 偏向单人，常导致摘要偏颇。仅 5 个工业辩论的初步试探中两者 ROUGE-L 为 14 对 13 ，BERTScore 为 60.7 对 59.5 ，可读性相近但思维链出现一次不可读，微调偶发将训练见过的人名与引语安到新说话人，主题把握上思维链更均衡。

### 小模型可用边界：泛化缺口、复现前提与选型建议

结论成立依赖多重假设，噪声为人工模拟而非真实 Kaldi 与 WFST 流程产物，词表、同音词典与交错切分参数未公开，归一化与识别错误仅分两类。参评限于 4 个 8B 以内小模型，无大模型对照，GLiNER 抽取加人工清洗的误差未量化，自动分数无方差与置信区间，工业验证仅 5 个手动摘要辩论，话题与说话人均为未见，样本过小不能外推。

#### 噪声类型与人物核验的分工

噪声影响分为归一化缺失与语音识别错误两类，前者抹去大小写与标点边界更难恢复，后者为局部词形变异仍可凭借上下文推断整体含义，微调后的 DeepSeek 对前者更稳健而思维链 Mistral 在前者下落幅更大，两者在后者表现接近。人物核验分为抽取清洗与归并判定，抽取后人工剔除误检并将同一人物的不同写法归并，再按正确提及、遗漏与虚构统计分布，只有检出辩论全部说话人才算全对，该搭配把内容流畅与人物忠实分开度量，新增的全对口径暴露了只看主题覆盖时会掩盖的偏向性遗漏。

部署侧多项条件未验证，延迟、首次输出时间、RTF（实时系数） 与显存占用原文未披露，输入为纯文本故采样率、帧率与码率不适用。混合干净含噪微调与低成本适配仅列为未来工作，未做消融，长辩论分块、流式增量与多语言迁移均未测试，标点缺失下的论点归属错误案例也未系统统计，实际落地前需补测时延与稳定性。

#### 复现边界与选型建议

复现需区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行，当前未发现来源绑定且完成可用性验证的资源，不得声称已公开。复现者需自行获取 FREDSum，按描述重建噪声，微调取秩 8、缩放 16、批量 3、至多 10 轮，注意提示用语为法语而图示为英语，Mistral 须保留指令前后缀，优化器、学习率、硬件与数据划分原文未披露。

工程上若有干净领域数据且看重人物忠实，可选干净微调的 DeepSeek 类 8B，其可读性 3.5 分且虚构更少，但要接受未见说话人与主题仍会遗漏，并加人工核对。若无微调资源或需主题均衡，可用思维链 Mistral-7B，其讨论脉络更清晰但人物遗漏与虚构显著更高。两者均不宜直发，须经说话人校验与事实复核，无试听页可对照，建议以原文分数与本解读转写表为核对基线。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率、帧率、码率、前瞻延迟与 RTF 原文未披露，全程为文本转文本，不涉及声学前端
- **训练与评测数据**：FREDSum 法语政治辩论及其模拟含噪版本，训练分干净与含噪两版，评测含干净与含噪及仅 5 个工业辩论，划分与规模原文未披露
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时，仅说明本地下载模型运行，未调用外部接口
- **核心超参数与配置**：低秩适配秩为 8 ，缩放系数为 16 ，批大小为 3 ，至多训练 10 轮，优化器与学习率原文未披露
- **推理速度与部署开销**：RTF 、延迟、吞吐与显存原文未披露，人工可读性 1 至 5 分为主选型依据
- **开源产物与协议状态**：未发现完成可用性验证的作者资源，不得声称代码、权重、数据或演示已公开，复现需自行获取数据与模型
- **附录与补充材料要点**：原文未披露附录证明与补充消融，许可限制未说明，失效案例散见于人物虚构与工业泛化段

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.4/10** | 创新 5.2/10 | 技术严谨 6.8/10 | 实验充分 6.0/10 | 清晰度 5.4/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.17`
- 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.17/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.17.pdf)
- DOI：`10.18653/v1/2026.iwsds-1.17`
- Track：IWSDS 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：在FREDSum干净与噪声对照上量化ROUGE-L与BERTScore降幅并对比思维链与干净微调回升幅度，数据可核对。

- 核心优势：以人名正确提及62.9对8.2与全说话人检出率48.3%对17.2%区分微调与思维链忠实度上下界，含负结果对照。

- 核心优势：构造拼接去说话人标记与&lt;unk&gt;替换语气词插入同音替换交错模拟的噪声链路并给出表1前后示例贴近工业管线。

- 主要短板：第3.3节称DeepSeek-8B FN为干净集微调与表2将FN定义为噪声微调存在字面出入，原文未解释清楚。

- 主要短板：人工可读性仅报告均值未报告评分人数指南与一致性，噪声类型直方图未给数值且工业评测仅5例定性观察。

- 主要短板：噪声模拟随机比例词典规模切分长度未量化，且仅给出LoRA秩批量轮次缺优化器学习率种子硬件等更新边界。

---

[← 返回 iwsds-2026 论文汇总](/audio-research-portal/posts/conference-iwsds-2026/)
