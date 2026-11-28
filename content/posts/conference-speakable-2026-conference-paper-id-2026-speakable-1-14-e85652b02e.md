---
title: "SpeechLM for Automatic Speech Recognition in Low-resource Languages"
date: 2026-11-28
draft: false
description: "研究检验通用语音语言模型 LLaMA-Omni 能否经监督微调适配为巴斯克语和马耳他语识别器，发现其在约 676.0 小时巴斯克语上相对专用编码器基线提升约 22% 但在分布外退化，而在约 35.37 小时马耳他语上退化约 50%，语言适配大语言模型可部分改善分布外稳健性，代价是更高数据阈值与训练成本。"
tags: ["多模态学习", "SFT", "低资源", "语音识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "通用语音语言模型能否做好低资源语音识别：巴斯克语与马耳他语的适配检验"
paper_digest_original_title: "SpeechLM for Automatic Speech Recognition in Low-resource Languages"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.14"
paper_digest_workbench_source_sha256: "8c9cebcc1b874742d7fc565fe04519d86369339ac8ba7945c88f8c152f1e3590"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.14/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.14.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 5.8
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "研究检验通用语音语言模型 LLaMA-Omni 能否经监督微调适配为巴斯克语和马耳他语识别器，发现其在约 676.0 小时巴斯克语上相对专用编码器基线提升约 22% 但在分布外退化，而在约 35.37 小时马耳他语上退化约 50%，语言适配大语言模型可部分改善分布外稳健性，代价是更高数据阈值与训练成本。"
paper_digest_reader_sections: [{"heading":"低资源语音识别为何难以直接复用通用语音语言模型","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"LLaMA-Omni 四部件如何把语音接到大语言模型","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"固定提示与冻结边界下的监督微调如何组织","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"同分布精度为何在巴斯克语提升而在马耳他语下降","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"数据量控制与方言分布外如何暴露鲁棒性短板","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提代价与复现核对清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["HiTZ Center, University of the Basque Country, Spain"],"name":"Md Abdur Razzaq Riyadh"},{"affiliations":["HiTZ Center, University of the Basque Country, Spain"],"name":"Eneko Agirre"},{"affiliations":["HiTZ Center, University of the Basque Country, Spain"],"name":"Eva Navas"},{"affiliations":["Dept. of Artificial Intelligence, University of Malta, Malta"],"name":"Claudia Borg"}]
paper_digest_abstract_sha256: "ab6939c8e0b789a0765a8e110d7b63803d1081f12a6cb2a659cb1df224daebc5"
paper_digest_sidecars: {"citation.bib":{"sha256":"af9101c6d4685e1d73bcef7cc9a5fbe068d2ca4489aac077e59f30249fbe2d75","url":"/audio-research-portal/client/papers/2026-11-28/conference-e85652b02e8edb13b720ebce/citation.bib"},"citation.json":{"sha256":"d6055aaaecad1750fdd6d504f7c0f2ee22b0551cb8c2c5d9a9f794fa41a1316e","url":"/audio-research-portal/client/papers/2026-11-28/conference-e85652b02e8edb13b720ebce/citation.json"},"citation.ris":{"sha256":"22e228824f1aa5002081344ff41f27e1fb0f14f7aeb2e1bd952579b502e40bbe","url":"/audio-research-portal/client/papers/2026-11-28/conference-e85652b02e8edb13b720ebce/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3cb91d434ead1dae24986970fd259f011e082306212d7194d7f4b9e30075fbe9","url":"/audio-research-portal/client/papers/2026-11-28/conference-e85652b02e8edb13b720ebce/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.14"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.14"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.14"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.14/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.14.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a791a71e0435ffdcc8c8c00fb23015b583a93a9ba40e5636cde7d80987aa8820"
paper_digest_api_reader_plan_sha256: "926ba70ea910a2e51825b4530d8d90794ee62b2274f576f59c1651c515af345e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "19fe199c5ce29aefb7a3a262bf44c592f455a7b7fd1be654a7f8bbd84e8bdc12"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "87600cdcbab26560f9f898f031ab4732d28ca821ad73c86571d2e8b7697aa7d2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2cbb1fbac62883627ce90a816bdcf5f2bc0aee5c818b67717b60b236540f5b36"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "7046fb9497136ee2c04d3ce7032eb7aa7c39c8c2661985353c27be9bd6cab5b5"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "SFT"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 通用语音语言模型能否做好低资源语音识别：巴斯克语与马耳他语的适配检验

> 英文题目：*SpeechLM for Automatic Speech Recognition in Low-resource Languages*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.14`
> DOI：`10.18653/v1/2026.speakable-1.14`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.14/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.14.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[SFT](/audio-research-portal/papers/?concept=method.sft)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.8/10** | 创新 5.2/10 | 技术严谨 6.6/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.2/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Md Abdur Razzaq Riyadh：HiTZ Center, University of the Basque Country, Spain
- Eneko Agirre：HiTZ Center, University of the Basque Country, Spain
- Eva Navas：HiTZ Center, University of the Basque Country, Spain
- Claudia Borg：Dept. of Artificial Intelligence, University of Malta, Malta

## 📌 核心摘要

**问题与瓶颈：** 自动语音识别需将连续语音波形转写为文字，低资源语言因标注语音少且方言与领域差异大而难以训练可靠系统。近期多模态语音语言模型将语音编码器与大语言模型拼接，面向通用指令跟随优化，在英语高资源任务上验证较多，在低资源转写上的适配效果尚不明确。现有路线多冻结语音编码器而仅调适配器与大语言模型，在数据极少或口语自发、带音乐与方言变体的测试中可能出现声学混淆与语言规则泛化不足。本文以 Basque 语和 Maltese 语为对象，考察通用语音语言模型能否经监督微调胜任低资源转写，并分离语言适配部件的影响。

**核心思路与方法架构：** 与最接近的基线微调 whisper-large-v3 编码器相比，本文增量在于保留该编码器并引入大语言模型推理，以 LLaMA-Omni 整体做监督转写，仅更新语音适配器与大语言模型而冻结语音编码器与语音解码器。单条样本处理为语音输入经 whisper-large-v3 编码器得到声学表示，再经语音适配器映射为与文本对齐的向量序列并替换固定提示词中的 `<speech>` 占位，提示词另含 `<language>` 指明 Basque 语或 Maltese 语，大语言模型据此直接生成对应文字，语音解码器全程不参与文本转写。论文未披露适配器层数与维度及采样率等结构细节，训练沿用交叉熵损失与 AdamW 优化器加余弦调度与 5% 预热。为检验语言适配作用，作者另构建 Latxa-Omni，将大语言模型替换为经 Basque 语持续预训练的 Latxa Instruct，其余流程不变，另以同训练数据微调的编码器替换原冻结编码器做对照，并在 Basque 语上设 35 小时子集对照以隔离数据量影响。

**关键实验与核心代价：** 在 Basque 语分布内评测上，Composite Corpus EU v2.1 训练约 676 小时，Common Voice 18、Basque Parliament 与 OpenSLR 三个测试集平均 WER（词错率，越低越好 ↓）从基线 whisper-large-v3 的 10.43% 降至 LLaMA-Omni 的 8.09%，Latxa-Omni 进一步降至 7.98%，适配编码器版本为 8.18%，论文报告相对基线约 22% 的改进。在 Maltese 语约 35.37 小时训练下，Common Voice 22 与 MASRI 平均 WER 从基线的 16.74% 升至 LLaMA-Omni 的 25.65%，适配编码器版本为 25.13%，论文报告约 53% 的退化，35 小时 Basque 对照升至 18.37%，相对基线约 76% 恶化、相对全量 Basque 模型约 127% 恶化，支持数据量为主因。分布外 Faktoria 测试上基线在标准与方言子集分别为 18.56% 与 29.42%，均低于 LLaMA-Omni 的 25.23% 与 54.81%，而 Latxa-Omni 的 21.87% 与 31.54% 在适配变体中相对最好。每次训练约 30 小时，推理采用核采样温度为 0.6 与 p 为 0.9，全文仅用 WER 评价，未报告显著性检验与置信区间。

**适用边界与深读导览：** 结论成立依赖充足分布内标注语音与冻结编码器加微调适配器与大语言模型的固定提示设置，对自发会话、背景音乐与方言变体等分布外条件泛化较弱，在极小数据下反而不及直接微调编码器，Maltese 语尚无分布外验证。论文自称首个低资源下语音语言模型转写的系统性评估，但语种仅覆盖两种，OpenSLR 单集上全部语音语言模型变体已差于基线。欲深究三组对照设计与超参数搜索范围可查方法与数据章节，欲核对分布内与分布外数值及定性错误类型可查结果表格与分析章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 低资源语音识别为何难以直接复用通用语音语言模型

自动语音识别要把连续语音波形转写为书面文字，本研究用词错率 WER 衡量精度，数值越低越好。研究聚焦巴斯克语和马耳他语两种相对低资源语言，检验通用语音语言模型能否经监督学习适配为识别器。巴斯克语训练约 676.0 小时，马耳他语仅约 35.37 小时，测试分别约 63.0 小时与约 3.36 小时，规模差异构成天然对照。所有对比均在相同划分上取多切分平均，避免单一切分偶然性。

#### 高资源验证与低资源缺口

已有语音语言模型多在英语等高资源场景验证指令跟随与问答，典型如 LLaMA-Omni 强调低延迟理解与生成，SoundWave 强调有限资源训练，EchoX 强调声学稳健问答，GLM-4-Voice 覆盖多语但仍限高资源。这些工作很少系统考察低资源语种识别精度，也未分离大语言模型与语音编码器各自的语言适配贡献。本文正好补上这一缺口，首次在巴斯克语和马耳他语上做系统评估，并控制数据量变量。

#### 输入输出与评价口径

输入为巴斯克语或马耳他语朗读与自发语音，输出为对应正字法文本，提示固定为语音向量加请直接复述某语言句子。巴斯克语同分布评测含 Common Voice 18、议会语料与 OpenSLR 76，分布外评测用 Faktoria 电台脱口秀，含标准语与方言两个子集，伴随自发对话、背景音乐与口音变化。马耳他语评测含 MASRI 多采集子集与 Common Voice 22，暂无分布外数据，评价口径统一为 WER。

物理与统计瓶颈集中在三处。其一是数据稀缺，大模型阈值更高，数十小时难以约束 8B 量级大语言模型。其二是声学多变，方言、音乐与自发语速拉大训练与部署差异。其三是语言混杂，马耳他语存在语码切换与填充词，语音编码器能抓住发音但大语言模型难学拼写与形态规则，同音近音词在上下文不足时更难区分。

为此研究提出 3 个问题。第一，通用语音语言模型能否适配为巴斯克语和马耳他语识别器。第二，把通用大语言模型换为巴斯克适配的 Latxa Instruct 能否提升精度。第三，把通用语音编码器换为同数据微调版本能否带来额外增益。另设 35 小时巴斯克语对照，与马耳他语等量，以分离语言特性与数据量的影响，回答架构与数据何者主导。

### LLaMA-Omni 四部件如何把语音接到大语言模型

为看清后续微调动了哪条通路，先沿原图自下而上梳理信号走向。原文图注称该图为引自 Fang 等的 LLaMA-Omni 模块架构，但像素右下实际标注 LLaMA-S2S，本节按像素如实说明并借此理解四部件分工。图中展示语音经编码器与适配器进入大语言模型，以及文本与语音两路输出如何并行展开，是理解冻结与替换实验的基础。

[![原论文 Figure 1：LLaMA-Omni’s modular architecture, from Fang et al. (2025)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/3535f54801b7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/3535f54801b7/figure-1.png)

*论文图 1：LLaMA-S2S 同时生成架构示意：语音经编码器与适配器接入大语言模型后并行生成文本与语音（原论文 Figure 1）。*

像素自下而上可读出完整链路。底部麦克风给出英语示例波形，上方蓝色块为语音编码器，再上橙色块为语音适配器，输出以圆圈表示的语音序列 S 接入绿色大语言模型条。模型上方文本行出现红黄绿方块并标注 Certainly!、Writing 与 a、high 等示例词，经橙色上采样得到对应语音行，再经蓝色语音解码器得到含 65、27、98、11、53 与占位符的离散单元行，最上经声码器合成波形。左侧红色箭头标注同时生成与延迟，右下为羊驼徽标与 LLaMA-S2S 字样，与原文图注的 LLaMA-Omni 称谓存在出入，此处以像素为准，将其视为同时生成架构的借用示意。

LLaMA-Omni 包含语音编码器、语音适配器、大语言模型与语音解码器 4 个主要部件，编码器采用 whisper-large-v3，大语言模型采用 LLaMA 3.1-8B-Instruct。本文识别只用文本输出，语音解码器全程冻结。与最近基线相比，实质增量有两处。一是把通用大语言模型替换为持续预训练的巴斯克适配 Latxa Instruct，构成 Latxa-Omni。二是把通用编码器替换为同训练集微调版本，其余部件保持不变。

以 1 秒音频为教学例子追踪张量流。设输入为 1 秒巴斯克语朗读，波形先经冻结的语音编码器转为声学表示，再经语音适配器映射为与文本嵌入同空间的向量序列。该序列替换固定提示中的语音占位符，与请直接复述巴斯克语句子拼接后送入大语言模型，自回归生成转写词序列。语音解码器与声码器不参与识别，原文未披露采样率、帧率与特征维度，故此处不虚构具体形状。

信号规格方面原文披露有限，未给出采样率、帧长步长、码率与通道数，仅明确任务目标为低资源识别精度与分布外稳健性。训练仅更新适配器与大语言模型，编码器即使在替换实验中也保持冻结，解码器始终冻结。这种冻结边界把架构增益与编码器单体增益分离，使后续与微调编码器基线的对比更公平，也限定了可调参数范围。

### 固定提示与冻结边界下的监督微调如何组织

监督微调的目标是让通用语音语言模型学会逐句复述，损失采用交叉熵，优化器采用 AdamW 配合余弦调度与 5% 预热。所有实验固定提示模板，仅替换其中语言名，预实验发现只要前后一致，具体措辞影响不大。推理采用核采样，温度设为 0.6，概率阈值 p 设为 0.9，直接生成文本，不调用语音解码器，流程为整句离线转写。

下表展示马耳他语数据构成，有助于理解数据稀缺程度。训练涵盖耳机、远场、展位与议会等多采集条件，测试与验证划分较小，整体规模远小于巴斯克语。结合小时数与样本量可判断，模型需在数十小时内学会拼写与形态规则，这对大语言模型构成严峻约束。表中部分名称因合并单元格显示空白，实际对应 TUBE 与 Common Voice 22 的训练与验证行，需结合上下文还原。

| Dataset | Set | Hour | # Samples |
| --- | --- | --- | --- |
| Headset v2 | Train | 6.50 | 4979 |
| Farfield | Train | 9.50 | 4476 |
|  | Train | 13.25 | 8956 |
| TUBE | Test | 1.00 | 663 |
| CV 22 | Test | 2.36 | 1661 |

从单元格读出，耳机训练为 6.50 小时 4,979 个样本，远场训练为 9.50 小时 4,476 个样本，TUBE 测试为 1.00 小时 663 个样本，Common Voice 22 测试为 2.36 小时 1,661 个样本。训练合计约 35.37 小时，测试合计约 3.36 小时。相比巴斯克语约 676.0 小时训练与约 63.0 小时测试，马耳他语数量级更小，这为后文约 50% 相对退化埋下伏笔，也解释为何需要 35 小时对照。

超参搜索覆盖学习率 1 × 10-4、5 × 10-5、2 × 10-5、1 × 10-5 与 5 × 10-6 共 5 档，以及批大小 32、64、128 与 256 共 4 档。巴斯克语训练 6 轮，马耳他语训练 4 轮，轮数经预实验确定。每次训练约需 30.0 小时，硬件型号原文未披露。编码器与解码器始终冻结，只有适配器与大语言模型参与梯度更新，梯度不回传至声学前端。

推理与部署路径为整句离线转写，非流式分块，未披露前瞻窗口、缓存与实时率。替换编码器实验先在同训练集上单独微调编码器，再整体装入语音语言模型但冻结其参数，以检验声学适配增益。35 小时巴斯克语对照随机采样，保持其余设置不变，从而单独考察极端数据约束的影响，排除语言自身难度干扰。

### 同分布精度为何在巴斯克语提升而在马耳他语下降

评测采用词错率 WER，数值越低越好，所有对比取多个测试切分平均。基线与语音语言模型在各自语言相同训练集上微调，并在相同测试集上评测。基线选用 whisper-large-v3，恰为模型内部编码器，可分离架构增益。巴斯克语基线由 Aholab 微调，马耳他语基线由作者自行微调。研究未安排人工听测，也未报告方差与置信区间，仅依赖自动指标，需注意感知质量未经验证。

#### 马耳他语同分布结果

下表为马耳他语同分布结果，含基线与两种语音语言模型变体在 Common Voice 22 与 MASRI 上的表现。两列均为 WER，平均列为二者算术平均，可直接比较架构在小数据下的得失，判断适配编码器能否弥补瓶颈。该表保留全部可比行与基线，满足公平性核查要求。

| Model/Corpus | CV 22 | MASRI | Average |
| --- | --- | --- | --- |
| whisper-large-v3 | 11.44% | 22.04% | 16.74% |
| LLaMA-Omni | 21.08% | 30.22% | 25.65% |
| LLaMA-Omni (+ adapted SE) | 20.93% | 29.33% | 25.13% |

逐格核对显示基线全面最优。基线在 Common Voice 22 上为 11.44%，在 MASRI 上为 22.04%，平均为 16.74%。通用模型分别为 21.08%、30.22% 与 25.65%，适配编码器变体分别为 20.93%、29.33% 与 25.13%。后者略优于前者，但仍比基线差约 50% 相对幅度，原文如此报告。任一列均未出现语音语言模型反超，说明小数据下架构未能兑现增益，且编码器适配无法补足缺口。

#### 巴斯克语对照与定性观察

巴斯克语同分布走向相反，数字来自原文完整 Table 3，本精简表未列出。基线平均为 10.43%，通用模型平均为 8.09%，原文报告相对提升约 22%。语言适配模型 Latxa-Omni 平均为 7.98%，适配编码器变体平均为 8.18%，三者在议会语料上均远优于基线 13.72%。语言适配在同分布下仅带来边际增益，架构本身已贡献主要提升。

定性分析指出，清晰朗读易得零错，而同音近音与带噪声样本错误集中。马耳他语常见语码切换按发音拼写，填充词被忽略，形态切分偶发不可懂串并带意大利语痕迹，例如原文举例的区分词被转写为近音片段。这表明编码器能抓住发音，但有限数据约束大语言模型习得正字法与语法规则，大模型阈值更高，数据不足时反而弱于专用编码器。

### 数据量控制与方言分布外如何暴露鲁棒性短板

为分离语言特性与数据量，作者在巴斯克语上随机采样 35 小时子集，保持其余设置不变。该对照平均为 18.37%，在 Common Voice 18 上为 16.62%，在议会语料上为 11.04%，在 OpenSLR 上为 27.45%。原文报告其比基线高约 76%，比全量通用模型高约 127%。这一幅度与马耳他语退化方向一致，支持数据稀缺为主要限制的判断，该数字来自原文完整 Table 3，本精简表未列出。

#### 分布外方言鲁棒性

下表为巴斯克语分布外 Faktoria 结果，含标准语与方言两个子集，均为 WER。录制来自电台脱口秀，含自发对话、背景音乐与口音变化，与训练域差异显著，可检验架构泛化与语言适配部件的稳健性价值。该表保留基线与 3 个语音语言模型变体，支持逐列核对最优归属。

| Model/Corpus | Faktoria (EUS only) | Faktoria (others) |
| --- | --- | --- |
| whisper-large-v3 | 18.56% | 29.42% |
| LLaMA-Omni | 25.23% | 54.81% |
| Latxa-Omni | 21.87% | 31.54% |
| LLaMA-Omni (+ adapted SE) | 22.88% | 45.14% |

逐格核对显示基线在两列仍全面最优，标准子集为 18.56%，方言子集为 29.42%。通用模型分别为 25.23% 与 54.81%，退化明显。Latxa-Omni 分别为 21.87% 与 31.54%，适配编码器变体分别为 22.88% 与 45.14%。方言子集全面恶化，原文指出所有模型均缺方言稳健性。语言适配变体优于通用模型，其中 Latxa-Omni 相对优势原文报告约 13%，但仍未反超基线，说明改善有限。

归因上，同分布时语言适配增益微弱，分布外时增益显现，提示大语言模型的语言知识在偏移下比单纯声学适配更关键。缺失的消融包括适配器结构对比、不同冻结组合、方差与显著性检验，以及马耳他语分布外评估。研究也未安排人工听测，无法判断 WER 差异是否对应可感知质量变化，神经代理指标亦未使用，结论限于自动词错率。

失效模式集中在发音模糊与上下文不足样本，巴斯克语最佳与最差转写对比显示，清晰发音易得零错，近音词则难区分。Latxa-Omni 与通用模型在难样本上高度重合，部分样本甚至更差，替换词多为同音近音，说明语言适配未根本解决声学混淆，更多在分布外提供先验补偿，声学瓶颈依然存在。

### 结论成立的前提代价与复现核对清单

结论成立依赖若干前提。训练为监督微调，仅更新适配器与大语言模型，编码器与解码器冻结，提示固定且前后一致。评价取多切分平均，未报告方差，基线与模型共享训练与测试划分。巴斯克语结论基于数百小时，同分布三切分平均，分布外仅 Faktoria 两子集。马耳他语结论基于约 35.37 小时，无分布外验证，外推至其他低资源语言需谨慎。

未验证条件包括流式部署、实时率与显存、前瞻延迟、噪声与远场以外的采集变化，以及跨语种迁移。研究未披露采样率与特征维度，未测试不同采样步数与解码策略敏感性。定性举例虽揭示语码切换与形态错误，但未量化其占比，也未提供可试听示例对照，无法从听感上复核，工程部署前需补测延迟与稳定性。

复现核对需区分三件事。数据方面，巴斯克语聚合语料、Common Voice、议会语料、OpenSLR 与 MASRI 均为公开资源，Faktoria 来自外部机构，获取路径原文已给。代码与权重方面，本次核验未发现经确认可用的作者资源，原文亦未给出可验证下载，不可视为已公开。超参与训练轮次披露完整，但硬件型号缺失，每轮约 30.0 小时耗时可作成本参考，复现需预留相应预算。

工程选型上，若有数百小时标注且域内稳定，可尝试语音语言模型复用大语言模型先验，优先验证巴斯克语式约 22% 相对增益能否复现。若仅数十小时或需方言泛化，优先微调专用编码器基线，其在小数据与分布外均更稳健。确需大模型时，优先引入语言适配大语言模型以改善分布外，而非仅适配编码器，同时预算额外数据与 30.0 小时量级训练代价，权衡精度与稳健性。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长步长、码率与前瞻延迟，语音编码器为 whisper-large-v3，文本提示固定，特征维度原文未披露
- **训练与评测数据**：巴斯克语聚合语料约 676.0 小时训练与约 63.0 小时测试，含 Common Voice 18、议会语料、OpenSLR 76 及 Faktoria 分布外测试；马耳他语 MASRI 与 Common Voice 22 约 35.37 小时训练与约 3.36 小时测试
- **算力与训练耗时**：原文未披露 GPU 型号与数量，仅说明巴斯克语每次训练约需 30.0 小时，马耳他语训练轮次较少，推理硬件原文未披露
- **核心超参数与配置**：仅更新语音适配器与大语言模型，编码器与解码器冻结；学习率 5 档含 1 × 10-4 与 5 × 10-6，批大小 4 档含 32 与 256，巴斯克语 6 轮马耳他语 4 轮，优化器 AdamW 加余弦调度与 5% 预热，推理核采样温度 0.6 与 p 0.9
- **推理速度与部署开销**：原文未披露 RTF、首包延迟与显存占用，仅说明推理采用核采样生成文本，语音解码器不参与识别
- **开源产物与协议状态**：本次核验未发现经确认可用的作者代码、权重或数据下载，公开状态以原文为准，原文未给出可验证链接
- **附录与补充材料要点**：原文未设独立附录，补充信息见正文定性分析与资助说明，未披露额外证明或许可限制

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.8/10** | 创新 5.2/10 | 技术严谨 6.6/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.2/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.14`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.14/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.14.pdf)
- DOI：`10.18653/v1/2026.speakable-1.14`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：Basque分布内平均WER从基线10.43%降至LLaMA-Omni的8.09%，Latxa-Omni进一步降至7.98%，同数据公平基线对照扎实可核对。

- 核心优势：设计三组受控实验分离语言适配大模型与适配编码器影响，并设35小时Basque子集对照匹配Maltese规模以孤立数据量主因。

- 核心优势：包含Faktoria自发对话背景音乐方言变体分布外压力测试，主动报告Maltese约53%退化与分布外反转等负结果与定性错误类型。

- 主要短板：全文仅用WER评价未报告显著性检验与置信区间，且Maltese无分布外验证，OpenSLR单集全部变体已差于基线。

- 主要短板：未披露语音适配器层数维度与采样率预处理增强，最优学习率批量未逐语言报告且训练硬件未披露，复现配置缺失较多。

- 主要短板：未提及代码模型权重数据集演示与复现材料链接，未发现可验证官方HTTPS资源，属于闭源无承诺。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
