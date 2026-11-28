---
title: "HARNESS: Lightweight Distilled Arabic Speech Foundation Models"
date: 2026-11-27
draft: false
description: "针对阿拉伯方言多样下通用模型表示不足与大模型难部署的矛盾，该文以约 23,000 小时双语迭代自蒸馏训练 HArnESS 家族并以主成分分析简化监督，冻结评测中教师在三项阿拉伯任务上优于英语与多语基线，而 4 层学生在 79.4% 压缩下保留多数性能但方言辨识下降最明显。"
tags: ["知识蒸馏", "自监督学习", "语音识别", "语音情感识别", "语言识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "轻量蒸馏阿拉伯语音基础模型 HArnESS 的三轮自蒸馏与压缩评测"
paper_digest_original_title: "HARNESS: Lightweight Distilled Arabic Speech Foundation Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.12"
paper_digest_workbench_source_sha256: "a24267daab8bca2bf0b471b99a014db4c68aff1bea24353cfb33402266e7d144"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.12/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.12.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对阿拉伯方言多样下通用模型表示不足与大模型难部署的矛盾，该文以约 23,000 小时双语迭代自蒸馏训练 HArnESS 家族并以主成分分析简化监督，冻结评测中教师在三项阿拉伯任务上优于英语与多语基线，而 4 层学生在 79.4% 压缩下保留多数性能但方言辨识下降最明显。"
paper_digest_reader_sections: [{"heading":"阿拉伯语语音为何需要从零训练的专用基础模型","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三轮迭代自蒸馏如何从掩码预测走向量产学生","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"浅层与窄化压缩及主成分分析简化监督信号","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"23,000 小时双语预训练与冻结编码器评测如何组织","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"冻结特征下大模型与压缩学生在三项任务上的得失","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"初始化、注意力头数与嵌入维度三组消融说明什么","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"冻结评测与数据边界下的结论适用范围与复现前提","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Amazon India"],"name":"Vrunda Nileshkumar Sukhadia"},{"affiliations":["Qatar Computing Research Institute, HBKU, Qatar"],"name":"Shammur Absar Chowdhury"}]
paper_digest_abstract_sha256: "c97ff83044bd16e23e4ae4acf9de88c009c0d87128ed52f071f11c6cdc1041a5"
paper_digest_sidecars: {"citation.bib":{"sha256":"0584beef20d5577af63361ed0c43e6c6bfd2e1c5fdf0c9cb47c8b227d3c7ed34","url":"/audio-research-portal/client/papers/2026-11-27/conference-f340236f4c8c89a3afc10e0d/citation.bib"},"citation.json":{"sha256":"b82e2aa51bdd7a513c4324b157262fba2b49bea4f64237cf261c2f72f4777d47","url":"/audio-research-portal/client/papers/2026-11-27/conference-f340236f4c8c89a3afc10e0d/citation.json"},"citation.ris":{"sha256":"d63a15cd5f08921843c236815b8381d2f0e9f2cf60f071188ff5efae8bbb8710","url":"/audio-research-portal/client/papers/2026-11-27/conference-f340236f4c8c89a3afc10e0d/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d3058b22c324c5300bcaf537b4501943e1453e601b84141e3635c88aa3453662","url":"/audio-research-portal/client/papers/2026-11-27/conference-f340236f4c8c89a3afc10e0d/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.12"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.12"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.12"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.12/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.12.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "4d6a684dc7f17ce3be1f806e256a52068e12ba2a01a8b0dfd1d540702961fe2f"
paper_digest_api_reader_plan_sha256: "172e85a84acf75237a9bac3747623624629c59e9526ca65af40293c7c8db56b4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "11595dfcc32e51cf3e4f94444b97ba6807d100707ff01a84375078c947b86ba9"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f65856a724b963e096f932beb3d95f463e8667ef5f28000df2cabb290009343e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a1c569e6da538b9e3ac4d861627b0e3c24e520121ca62baed398d922de2728dc"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "26c30ec339b6a9626423d0ff7e5e0690dd4830e1e4cfa0e1462c24e0351f7f81"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"task","id":"task.language-identification","label":"语言识别"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 轻量蒸馏阿拉伯语音基础模型 HArnESS 的三轮自蒸馏与压缩评测

> 英文题目：*HARNESS: Lightweight Distilled Arabic Speech Foundation Models*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.12`
> DOI：`10.18653/v1/2026.speakable-1.12`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.12/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.12.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)；[语言识别](/audio-research-portal/papers/?concept=task.language-identification)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[自监督学习](/audio-research-portal/papers/?concept=method.self-supervised)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 6.7/10 | 技术严谨 7.2/10 | 实验充分 7.4/10 | 清晰度 5.5/10 | 影响力 6.3/10 | 开源 3.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：模型报告

## 👥 作者与机构

- Vrunda Nileshkumar Sukhadia：Amazon India
- Shammur Absar Chowdhury：Qatar Computing Research Institute, HBKU, Qatar

## 📌 核心摘要

**问题与瓶颈：** 阿拉伯语语音横跨 22 个国家，方言在发音、形态和词汇上差异显著，且日常与媒体语音常混入英语借词与语码转换，输入为原始语音波形，输出需覆盖内容转写、方言归属与情感类别。通用多语言模型在高覆盖语言上占优，对低覆盖阿拉伯方言的增益受限，难以保留方言敏感与文化相关的声学模式。另一方面，大规模自监督学习模型动辄数百兆参数，对显存、内存与时延提出过高要求，在资源受限部署中难以落地。现有压缩工作多围绕通用英语 HuBERT 变体展开，缺乏从零训练的阿拉伯中心模型与系统性轻量化验证。

**核心思路与方法架构：** 与保留完整容量的 HuBERT 大模型基线相比，本文的实质增量是以双语阿拉伯英语教师做迭代自蒸馏，并用离散伪标签与主成分分析简化监督来适配浅而窄的学生。沿一条阿拉伯语话语追踪，原始波形先经 7 层卷积前端转为帧级特征，再送入 Transformer 编码器做掩码预测，教师 HArnESS-L 保持 24 层、1024 维、16 头、约 316M 参数，学生 HArnESS-S 压缩至 4 层、1024 维、约 65M 参数，HArnESS-ST 进一步收窄至 512 维、约 28M 参数。伪标签来自上一轮模型的帧嵌入经 K 均值聚类，首轮用 39 维梅尔倒谱系数，次轮用第 9 层嵌入，后续用末层嵌入，聚类数 K 均为 1000，启用时先将教师嵌入降至 512 维再聚类。下游评测冻结全部 SSL 编码器，仅训练轻量任务头，属离线特征抽取而非流式识别，直接针对容量与方言保持之间的矛盾。

**关键实验与核心代价：** 在 300 小时 QASR 微调、冻结编码器的统一条件下，MGB2 测试集词错误率（WER，越低越好 ↓）上 HArnESS-L 为 15.50*，低于 XLS-R 的 22.60* 与英语 HuBERT-Large 的 22.6*，MGB3 上为 41.60*，低于 XLS-R 的 51.80* 与 HuBERT-Large 的 51.2*；KSUEmotion 分类准确率（Acc，越高越好 ↑）上为 94.66%，高于 XLS-R 的 73.32% 与 HuBERT-Large 的 91.92%，ADI5 上为 84.98%，高于 XLS-R 的 42.35% 与 HuBERT-Large 的 64.14%。轻量学生仍具竞争力，HArnESS-S 在 MGB2 上为 20.20*，在 KSUEmotion 上为 91.15%，在 ADI5 上为 70.84%，作者报告相对教师 WER 上升 4.7，SER 下降 3.51 个点，DID 下降 14.4 个点，其中 DID 原文如此报告，存在字面算术出入，原文未解释。消融显示初始化差异较小，注意力头从 16 减至 4 时参数从 65M 降至 48M，对 ASR 与 SER 影响有限而 DID 下降明显，嵌入维取 256 时 MGB2 为 22.3，KSUEmotion 为 79.42%，ADI5 为 53.41%，三任务均大幅退化。本工作不涉及语音生成，无需人工主观听测，指标均为可核对的识别与分类分数。已公开的任务专用 Fanar 等结果因数据与协议不同仅作背景参照，原文明确不声称直接最优。

**适用边界与深读导览：** 结论成立于冻结编码器、300 小时以现代标准阿拉伯语为主微调与 1,100 小时阿拉伯语蒸馏数据的范围内，未验证端到端微调、更广阿拉伯专用基线与真实时延吞吐，极端窄化方案已失效。本文未提供音频试听页，无需对照听感。欲深究掩码预测目标、伪标签层选择与压缩调度的取舍，可查阅下方方法概述与实验结果中的架构与消融对照，其中结构压缩量在表 4 与表 5 之间存在字面出入，需按原文字面解读。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 阿拉伯语语音为何需要从零训练的专用基础模型

大规模自监督语音模型已在多种语音任务中展现可迁移表示能力，但动辄数百兆参数的体量让内存占用与推理延迟在资源受限场景中难以承受。阿拉伯语更添难度，该语言横跨 22 个国家，方言在发音、形态与词汇上差异显著，日常与媒体语音中还常混入英语与法语借词并出现语码切换。通用多语模型往往偏向预训练覆盖更高的语言，对代表性不足的阿拉伯方言增益有限，这促使研究转向兼顾语言特性与部署效率的阿拉伯为中心方案。

该文定义的问题可概括为输入一段原始语音波形，输出 3 类不同性质的标签。内容层面要求完成自动语音识别并以 WER（词错误率）衡量转写错误，数值越低越好。方言层面要求在 ADI5 的 5 类地域方言中判定归属，情感层面要求在 KSUEmotion 的 6 类情感中判定类别，后两者以准确率衡量，数值越高越好。方法上将自监督编码器冻结为特征提取器，仅在其输出的帧表示上训练轻量下游模型，以此隔离表示质量本身。

已有主流路线包括以英语为主的 HuBERT-Large 与大规模多语的 XLS-R，两者在英语基准上有成熟评测，但在阿拉伯内容、方言与副语言任务上缺乏统一基准。英语单语模型缺少阿拉伯音系覆盖，多语模型虽见过阿拉伯语却难以捕捉方言敏感与文化相关的语音模式。压缩侧已有面向英语通用场景的蒸馏实践，多聚焦通用压缩，少有从零训练的阿拉伯为中心模型并系统蒸馏为轻量学生的完整实践，这正是本文要补足的空白。

HArnESS 为此提出从零训练的阿拉伯为中心模型家族，先以约 23,000 小时阿拉伯语与英语双语数据训练 24 层大教师 HArnESS-L，再经迭代自蒸馏得到 4 层浅学生 HArnESS-S 与浅窄学生 HArnESS-ST，并以主成分分析压缩教师监督信号以适配小容量学生。评测横跨识别内容、方言信息与情感副语言 3 类任务，旨在验证阿拉伯聚焦预训练结合迭代蒸馏能否在大幅结构压缩下保持可用的精度与效率平衡。

### 三轮迭代自蒸馏如何从掩码预测走向量产学生

与最近的 HuBERT 式基线相比，HArnESS 保留了 7 层卷积前端加多层 Transformer 编码器加离散伪标签掩码预测的基本结构，替换的是数据与训练组织。教师采用阿拉伯语与英语双语预训练以补充声学多样性并适应借词与语码切换，前两轮迭代保持 24 层结构以提炼更强的声学抽象，第三轮才压缩深度与宽度得到学生。另一增量是以主成分分析先降维教师嵌入再聚类，用更简洁的目标空间匹配窄学生的容量，初始化则对比随机与块平均两种策略。

要一次看清 3 轮迭代如何衔接，可沿图 1 自左向右追踪三列模型与两条监督分支。注意左侧两座大模型的层堆叠顺序与虚线回注路径，中间第 9 层与最后层的取特征位置差异，以及右侧教师嵌入分叉为直接聚类与降维后聚类的两路。图例中教师网络与学生网络的底色区分，以及学生侧标注的深度缩减与宽度缩减，都是理解压缩时机与监督来源的关键。

[![原论文 Figure 1：Overview of the iterative self-distillation framework used to build the HArnESS model family.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/a0c8d0b848cf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/a0c8d0b848cf/figure-1.png)

*论文图 1：三轮迭代自蒸馏流程示意：双语大教师经聚类伪标签训练并分叉监督浅层与浅窄学生（原论文 Figure 1）。*

像素显示图 1 左部为 HArnESS-large 第一轮迭代，底部波形经特征提取得到特征并经聚类，虚线将伪标签送回顶部参与掩码预训练，堆叠框自下而上为 CNN 与编码器 1、编码器 2、编码器 9 直至编码器 23、编码器 24，右侧浅蓝条带标示取嵌入的位置。第二列为第二轮迭代，上一轮第 9 层嵌入经聚类得到新目标，堆叠结构相同。第三列为蒸馏阶段，教师最后层嵌入分一路直接聚类，另一路经降维为低维表示再聚类，分别监督标有深度缩减与宽度缩减的学生，底部蓝色实线为输入语音流向，右下图例区分教师与学生网络。

以 1 秒输入为例说明端到端张量流，此例为教学示意，原文未披露采样率与帧移，不代表实测帧数。设输入为 1 秒原始波形，先经 7 层卷积前端，其步长序列为 5、2、2、2、2、2、2，连乘得下采样约 320 倍，帧数约为采样点数除以 320，通道为 512。随后帧特征进入 Transformer 堆叠，帧数保持不变，教师宽度为 1,024，前馈为 4,096，注意力头为 16，学生宽度可降至 512，前馈为 2,048。顶层线性头将每帧映射到 \(K = 1,000\) 个聚类编号上的分布，训练以 0.80 的掩码概率与 10 帧的掩码跨度遮蔽输入，并在掩码与非掩码帧上联合计算交叉熵以稳定收敛。

### 浅层与窄化压缩及主成分分析简化监督信号

HArnESS 编码器由卷积前端与 Transformer 堆叠组成，卷积核宽序列为 10、3、3、3、3、2、2，通道为 512。教师 HArnESS-L 为 24 层，嵌入维度为 1,024，前馈维度为 4,096，注意力头为 16，投影维度为 768，参数量为 316 M。浅学生 HArnESS-S 减至 4 层，嵌入仍为 1,024，前馈为 2,048，参数量为 65 M。浅窄学生 HArnESS-ST 进一步将嵌入压至 512，参数量为 28 M。需说明原文 Table 4 将该浅窄学生标为 93.7%，而嵌入维度表将 512 维对应为 91.14%，原文如此报告，存在字面算术出入，原文未解释。

压缩沿深度、宽度与注意力容量三轴展开，深度指 Transformer 层数由 24 降至 4，宽度指编码器维度由 1,024 降至 512 乃至 256，注意力头数可在 16 与 4 之间调节。将头数由 16 减至 4 时参数量由 65 M 降至 48 M，带来约 26.15% 的附加压缩。原文指出深度压缩对方言辨识冲击最大，头数压缩对识别与情感影响较小，过度窄化则在三项任务上一致骤降，说明不同语音属性对结构容量的敏感度并不相同。

主成分分析压缩的不是学生输入，而是教师监督信号。记教师某帧嵌入为 \(h_{t}\)，维度为 \(D\)，经主成分分析投影为低维表示，维度为 \(D' = 512\)，满足远小于原维度，再对投影后表示聚类得到离散伪标签。降维可去除噪声与冗余方向，使聚类更稳健，同时让目标空间更简单以匹配窄学生的表达能力。直觉上教师原空间过于丰富，小学生难以拟合全部细节，降维后目标更粗但更干净，优化收敛更快且知识迁移更稳定。

伪标签按轮次取不同来源，首轮从原始波形提取 39 维梅尔倒谱特征并以 \(K = 1,000\) 聚类得到初始序列，第二轮取首轮模型第 9 层表示聚类，第三轮及以后取上一轮模型最后层表示聚类。训练时以掩码上下文预测对应伪标签，损失为标准的交叉熵分类。权重初始化对比随机均匀采样与块平均两种方式，后者将学生各层由教师对应块的层平均初始化以平滑过渡，消融显示该选择在第三轮影响较小，性能更多取决于蒸馏监督信号本身。

### 23,000 小时双语预训练与冻结编码器评测如何组织

预训练前两轮使用约 23,000 小时双语混合语音，其中原始干净数据为 7,566.00 小时，含英语子集 3,565.00 小时与阿拉伯子集 4,001.00 小时，另从 15 个阿拉伯国家的视频内容补充方言覆盖。增强数据为 15,434.00 小时，以速度扰动 15,134.00 小时为主，叠加 300.00 小时加性背景噪声增强。第三轮蒸馏转为约 1,100 小时阿拉伯语 QASR 训练语音，聚类时随机抽约 300 小时以兼顾多样性与成本，官方开发与测试划分均排除在预训练之外以防泄漏。

下表给出 23,000 小时语料的语种、方言与增强划分，可据此核对总量自洽与方言占比。原始干净与增强两大部分的构成，以及现代标准语与各区域方言的分布，都是理解双语正则化动机与方言覆盖前提的关键，阅读时可先看总量再看细分行。

| Category | Sub-category / Dialect | Duration (Hrs) |
| --- | --- | --- |
| Original Clean Data |  | 7,566.00 |
|  | English Subset | 3,565.00 |
|  | Arabic Subset | 4,001.00 |
|  | MSA / General Arabic | 3,603.28 |
|  | Levantine | 107.69 |
|  | Egyptian | 109.20 |
|  | Gulf | 77.13 |
|  | Maghrebi | 69.11 |
|  | Other | 34.59 |
| Augmented Data |  | 15,434.00 |
|  | Speed Perturbation (0.9×, 1.1×) | 15,134.00 |
|  | Noise Augmentation (Arabic) | 300.00 |
| Total Training Volume |  | 23,000.00 |

表中原始干净数据 7,566.00 小时恰为英语与阿拉伯之和，阿拉伯 4,001.00 小时中现代标准语与通用阿拉伯语占 3,603.28 小时，黎凡特 107.69 小时、埃及 109.20 小时、海湾 77.13 小时、马格里布 69.11 小时与其他 34.59 小时相加回 4,001.00 小时，增强侧 15,134.00 小时与 300.00 小时相加回 15,434.00 小时，总量回 23,000 小时。方言以现代标准语为主，区域方言每类仅约 70 小时至 110 小时，第三轮仅用阿拉伯语蒸馏意在强化阿拉伯为中心表示。

预训练基于 fairseq 工具，第一轮 500,000 步、第二轮 700,000 步，均用 24 张 H100，每张每批 62.5 s 音频，第三轮 300,000 步用 8 张 H100，每张每批 75 s 音频。聚类数均为 \(K = 1,000\)，掩码概率为 0.80，掩码跨度为 10 帧，启用时降维维度为 512。下游评测冻结编码器，仅平均各层帧表示并训练任务头，方言与情感分类器为 3 层时序卷积加自注意力池化，批量为 4，共 10,000 步，识别则用 2 层 Conformer 编码器加 2 层 Transformer 解码器以联合 CTC 与注意力目标训练 70 轮。

### 冻结特征下大模型与压缩学生在三项任务上的得失

公平性建立在冻结编码器与统一任务头之上，所有模型均固定参数，仅以各层平均表示训练下游头，避免微调增益混入表示比较。识别在 300 小时 QASR 子集上训练，在 MGB2 与 MGB3 测试集上以 WER 报告，数值越低越好。情感在 KSUEmotion 上训练与评测，该集来自 23 位说话人共 6 类情感，划分为训练 3.30 小时、验证 0.83 小时与测试 1.0 小时。方言在 ADI5 的 5 类地域标签上按官方划分评测，以准确率报告，数值越高越好。顶部已发表专用系统结果仅供背景参考，因数据与协议不同不可直接比较，且本文无人工听测与神经代理分数，也未报告方差与置信区间。

下表为冻结特征下主结果的精简整理，星号表示本研究的 300 小时微调结果，数值方向为识别越低越好、分类越高越好。原文完整 Table 4 顶部的已发表专用系统参考块本精简表未列出，仅在正文交代量级差异，阅读时应将参考块与冻结评测块严格区分，不可直接排名。

| 模型 | MGB2 词错误率越低越好 | MGB3 词错误率越低越好 | KSUEmotion 准确率越高越好 | ADI5 准确率越高越好 |
| --- | --- | --- | --- | --- |
| HuBERT-L (English) | 22.6∗ | 51.2∗ | 91.92% | 64.14% |
| XLS-R (Multilingual) | 22.60∗ | 51.80∗ | 73.32% | 42.35% |
| HArnESS-L (Bilingual: Arabic-English) | 15.50∗ | 41.60∗ | 94.66% | 84.98% |
| HArnESS-S (∆S = 79.4%) | 20.20∗ | 52.80∗ | 91.15% | 70.84% |
| HArnESS-ST (∆S = 93.7%) | 23.20∗ | 58.20∗ | 89.02% | 69.77% |
| HArnESS-STΞ (∆S = 93.7%) | 22.50∗ | 55.60∗ | 87.34% | 61.64% |

在该展示的四列中，教师 HArnESS-L 数值最优，识别在两测试集上分别为 15.50∗ 与 41.60∗，情感与方言准确率分别为 94.66% 与 84.98%，均优于同表中的英语与多语基线。浅学生有所回落，识别升至 20.20∗ 与 52.80∗，情感与方言降至 91.15% 与 70.84%，浅窄学生进一步降至 23.20∗ 与 58.20∗ 以及 89.02% 与 69.77%，降维监督变体为 22.50∗ 与 55.60∗ 以及 87.34% 与 61.64%。方言项绝对下降达十余个百分点，显著大于情感项，说明方言线索更难在浅窄结构中保留。

代价与边界同样清晰，浅学生在 MGB3 上为 52.80∗，差于英语基线的 51.2∗，浅窄学生在多列上也不及基线，说明压缩并非在所有分布上占优。已发表专用系统在识别上约领先 5 个点，在方言与情感上与教师接近或略低，但因训练数据与协议不同仅供参考。本文未报告方差与置信区间，也未做端到端微调与更广泛基线对比，结论仅在冻结编码器与 300 小时微调的受限条件下成立。

### 初始化、注意力头数与嵌入维度三组消融说明什么

要判断压缩的哪一轴最伤性能，可先看图 2 的三面板分工。上面两组柱状分别对比初始化方式与注意力头数，横轴均为三测试集，纵轴左侧为越低越好的词错误率并向下绘制，右侧为越高越好的准确率。最下为损失随训练步数的收敛曲线，横轴为 0 至 200,000 步，纵轴为 3 至 10 的损失值，图例以颜色区分是否采用降维监督。

[![原论文 Figure 2：Ablation results for the compressed student models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/a0c8d0b848cf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/a0c8d0b848cf/figure-2.png)

*论文图 2：压缩学生三组消融：初始化对比、注意力头数对比与降维监督的损失收敛曲线（原论文 Figure 2）。*

像素显示上面板中随机初始化与块平均初始化差异很小，识别分别为 20.20 对 21.00，情感分别为 91.15 对 91.00，方言分别为 70.84 对 68.16，浅蓝柱略优但幅度有限。中间板将头数由 16 减至 4，识别由 20.20 升至 22.00，情感由 91.15 降至 90.24，方言由 70.84 降至 66.55，方言回落约 4 个百分点而另两项变化较小。下面板中蓝色无降维线初值约 9.2 最高，红色与紫色降维线初值约 6 至 7 且更快降至 4.5 附近，至 200,000 步三线收敛至约 4.1 至 4.3，说明降维监督起步更稳且收敛更快。

下表进一步比较嵌入维度取 1,024、512 与 256 时的性能与压缩率，可据此判断窄化到何种程度会击穿表示容量。表中行为三测试集与压缩率，列为 3 种宽度，压缩率越大表示参数越少，阅读时应将精度变化与压缩率放在同一列中权衡，不可只看单一指标。

| Test Sets | embd=1024 | embd=512 | embd=256 |
| --- | --- | --- | --- |
| MGB2 (WER ↓) | 20.2 | 23.20 | 22.3 |
| KSUEmotion (Acc ↑) | 91.15% | 89.02% | 79.42% |
| ADI5 (Acc ↑) | 70.84% | 69.77% | 53.41% |
| ∆S | 70.43% | 91.14% | 96.52% |

表中 1,024 维对应压缩 70.43%，识别为 20.2，情感为 91.15%，方言为 70.84%。512 维对应 91.14%，识别为 23.20，情感为 89.02%，方言为 69.77%，下降相对温和。256 维对应 96.52%，识别为 22.3，情感骤降至 79.42%，方言骤降至 53.41%，说明过度窄化会大幅削弱表达能力。结合头数消融，方言对方言线索最敏感，工程上若以方言为关键指标应优先保留宽度而非一味追求最小参数。

### 冻结评测与数据边界下的结论适用范围与复现前提

结论的适用边界首先来自冻结评测，编码器全程不更新，仅以各层平均表示训练下游头，这能干净地比较表示质量，却不能反映端到端微调可能带来的额外增益。双语预训练被解释为声学多样性补充与借词语码切换的正则化，但原文未设严格的单语对照，无法分离英语数据的净贡献。主成分分析仅用于简化教师聚类目标，并未压缩学生输入，降维维度固定为 512，其最优性未充分搜索。

部署条件亦未验证，原文披露了参数量与结构压缩率，却未披露延迟、前瞻窗口、分块流式方式、RTF（实时率）与显存占用，也未说明自回归或采样步数。参数量缩减不等于同比加速，窄化与减层在不同硬件上的收益差异原文未测量。极端压缩的失效案例已经出现，256 维与浅窄变体在方言上大幅落后，说明轻量化的代价集中在细粒度方言区分而非粗粒度情感判断。

复现需区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行。原文表示将公开轻量模型与评测资源并给出地址，KSUEmotion 划分称将发布以利复现，但本次未确认下载与运行状态，是否可直接运行原文未提供可验证信息。可核对的前提包括 23,000 小时语料构成、300 小时聚类子集、1,100 小时蒸馏数据、500,000 步与 700,000 步以及 300,000 步的训练组织，还有掩码与聚类层位的具体设置。

工程选型上资源充足可优先采用 24 层教师以兼顾三项任务，受限场景可采用 4 层浅学生，其在情感上接近教师而在方言上损失约 14 个百分点，需据应用容忍度取舍。若方言为关键指标，应保留嵌入宽度与注意力头数，慎用 256 维极端窄化。原文未提供试听页，不可虚构听感，复现时应先重算语料总量自洽与压缩率定义，再在冻结协议下复测 MGB2、MGB3、KSUEmotion 与 ADI5 四列结果。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与帧移，卷积前端步长连乘约 320 倍下采样，聚类数 1,000 类，掩码概率 0.80 与跨度 10 帧，降维维度 512，前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：预训练约 23,000 小时双语语音，含原始干净 7,566.00 小时与增强 15,434.00 小时，阿拉伯子集 4,001.00 小时与英语子集 3,565.00 小时，第三轮蒸馏用约 1,100 小时阿拉伯语，下游用 300 小时 QASR 微调并在 MGB2 与 MGB3 评测，情感用 KSUEmotion 训练 3.30 小时验证 0.83 小时测试 1.0 小时，方言用 ADI5 官方划分
- **算力与训练耗时**：第一轮与第二轮各用 24 张 H100 分别训练 500,000 步与 700,000 步，每张每批 62.5 s 音频，第三轮用 8 张 H100 训练 300,000 步，每张每批 75 s 音频，总耗时原文未披露
- **核心超参数与配置**：基于 fairseq，聚类数 1,000，首轮 39 维梅尔倒谱特征，次轮取第 9 层表示，后续取最后层表示，掩码概率 0.80 跨度 10 帧，降维 512 维，卷积通道 512，教师 24 层 1,024 维，学生 4 层 1,024 或 512 维
- **推理速度与部署开销**：教师参数量 316 M，浅学生 65 M 压缩 79.4%，浅窄学生 28 M 压缩 91.14%，注意力头减半变体 48 M，延迟吞吐显存与 RTF 原文未披露
- **开源产物与协议状态**：原文表示将公开轻量模型与评测资源并给出 Hugging Face 地址，KSUEmotion 划分称将发布以利复现，本次未确认下载与运行状态，是否可直接运行原文未提供可验证信息
- **附录与补充材料要点**：原文未设独立附录，关键细节已在正文与脚注交代，包括聚类抽样比例与划分发布计划，许可限制与失效案例原文未系统披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 6.7/10 | 技术严谨 7.2/10 | 实验充分 7.4/10 | 清晰度 5.5/10 | 影响力 6.3/10 | 开源 3.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：模型报告
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.12`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.12/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.12.pdf)
- DOI：`10.18653/v1/2026.speakable-1.12`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（模型报告）：创新 18% · 严谨 14% · 实验 22% · 清晰 8% · 影响 18% · 复现 6% · 工程 14%（开源上限加分 +0.6）

- 核心优势：教师在冻结编码器统一协议下四项任务均大幅超越同协议XLS-R与HuBERT-Large，ADI5达84.98%对42.35%。

- 核心优势：浅层学生以79.4%结构压缩仍在多任务上保持竞争力并超越多语言基线，呈现清晰的效率权衡证据。

- 核心优势：构建从零双语预训练经三轮迭代蒸馏到浅窄学生的完整压缩家族，并配套宽度与监督简化的定量对照。

- 主要短板：表4与表5同模型结构压缩量79.4%/93.7%与70.43%/91.14%存在字面算术出入且DID降幅报告亦有出入。

- 主要短板：宣称轻量部署导向却无任何时延吞吐RTF与硬件实测，仅以参数压缩量代替部署效率验证。

- 主要短板：缺学习率优化器损失权重与解码细节且无可验证官方资源URL，限制独立复现与产物复用强度。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
