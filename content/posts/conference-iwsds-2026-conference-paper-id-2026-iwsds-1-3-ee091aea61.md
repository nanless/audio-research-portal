---
title: "Personality Expression in Spoken Dialogue Systems: From Text to Speech"
date: 2026-11-28
draft: false
description: "针对短时首次对话中用户无法感知全部 Big Five 的问题，研究先以 155 段日语对话的第三方评分压缩出 EO 、 AC 与 N 三维，再用语言模型零样本生成与语音韵律叠加做文本语音对照，证明外向开放可仅靠文本可靠感知而神经质需填充词与变速才能显现，代价是文本下维度串扰与单一合成引擎偏置尚未排除。"
tags: ["统计分析", "主观评测", "外显人格估计", "语音对话系统"]
categories: ["iwsds-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从文本到语音只表达能被感知的三维人格"
paper_digest_original_title: "Personality Expression in Spoken Dialogue Systems: From Text to Speech"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.3"
paper_digest_workbench_source_sha256: "baa555ef5a73aad4d0973c49203fd4e39d7a048126294160fc5718accc05d30b"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.iwsds-1.3/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.iwsds-1.3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "外显人格估计"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对短时首次对话中用户无法感知全部 Big Five 的问题，研究先以 155 段日语对话的第三方评分压缩出 EO 、 AC 与 N 三维，再用语言模型零样本生成与语音韵律叠加做文本语音对照，证明外向开放可仅靠文本可靠感知而神经质需填充词与变速才能显现，代价是文本下维度串扰与单一合成引擎偏置尚未排除。"
paper_digest_reader_sections: [{"heading":"首次相遇中系统设定的五维人格为何只能被感知到一部分","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从五维到三维的压缩依据与语料第三方评分的降维结构","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"同一话题下的人格提示生成与语音叠加流程","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"文本条件下三维是否比五维更清晰的均值分离与相关证据","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"加上韵律后三维能否独立控制的停顿与填充词模态对照","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"压缩结论成立的前提与未验证的部署条件和复现边界","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["SANKEN, University of Osaka, Japan"],"name":"Kenta Yamamoto"},{"affiliations":["SANKEN, University of Osaka, Japan"],"name":"Kazunori Komatani"}]
paper_digest_abstract_sha256: "6537af9b7c9ae2c5e03f532530885f56f4a4858eb98f127d598ff4f8e0948379"
paper_digest_sidecars: {"citation.bib":{"sha256":"221ef8e0568105bbbe12109c18690172fdee18e24fa5a880774cc0ccc9332ae5","url":"/audio-research-portal/client/papers/2026-11-28/conference-ee091aea61de1eac20e877de/citation.bib"},"citation.json":{"sha256":"af3907352042b86f409f169e7a7364c27a64b4a41822d3a5500f6804f805a987","url":"/audio-research-portal/client/papers/2026-11-28/conference-ee091aea61de1eac20e877de/citation.json"},"citation.ris":{"sha256":"f98c82ce0b691bdb3c14fbccab8d6af4422b05891aeadb4a2e33d7a0b92d8f52","url":"/audio-research-portal/client/papers/2026-11-28/conference-ee091aea61de1eac20e877de/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1bd5810406bcac3a5a8e3fd076d333e35daf208ab968aec26832f01a97017ad4","url":"/audio-research-portal/client/papers/2026-11-28/conference-ee091aea61de1eac20e877de/rethink-context.json"}}
paper_digest_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.3"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwsds-2026"
paper_digest_conference_name: "iwsds-2026"
paper_digest_doi: "10.18653/v1/2026.iwsds-1.3"
paper_digest_conference_doi: "10.18653/v1/2026.iwsds-1.3"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwsds-1.3/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwsds-1.3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "57f2b1a42171c99d3bd04436ed4d26c0709e778dd19f7c55c9fae55e1b48a6b0"
paper_digest_api_reader_plan_sha256: "b601a98ea064a23b7f1b71e7e7b957d2b90b9b7c29fb2ce3db087155a5fee39f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "57f8cd86edb8545879840f8abefebc9f2486121654c763ad687d8d6642a3ae84"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6a05ac0449649a1bcdf3221b96b4be40b29414e7e88e4dc72898af8f1fd24397"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e4129df0a6b1031508c211ce3eaad2180fa7f16bc96424322ac6bfbe8f68a3a4"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "747a042520eab7417ef2d59e8c3c5e4515d4f40a4f5f0dacae4ce75d90c6319c"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.apparent-personality-estimation","label":"外显人格估计"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"}]
paper_digest_primary_method: "统计分析"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从文本到语音只表达能被感知的三维人格

> 英文题目：*Personality Expression in Spoken Dialogue Systems: From Text to Speech*

> 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.3`
> DOI：`10.18653/v1/2026.iwsds-1.3`
> Track：IWSDS 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.3/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[外显人格估计](/audio-research-portal/papers/?concept=task.apparent-personality-estimation)；[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-research-portal/papers/?concept=task.speech-dialogue)
- **研究方法**：[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 5.4/10 | 技术严谨 6.6/10 | 实验充分 6.2/10 | 清晰度 5.1/10 | 影响力 4.7/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 4.3/10

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Kenta Yamamoto：SANKEN, University of Osaka, Japan
- Kazunori Komatani：SANKEN, University of Osaka, Japan

## 📌 核心摘要

**问题与瓶颈：** 本文研究口语对话系统中人格表达的可感知性，输入是保留用户话语的 10 轮单话题对话文本及其语音实现，输出是第三方对系统外显人格的 Japanese Ten Item Personality Inventory（TIPI-J，日语版十项人格量表）7 点量表评分。现有主流路线假设 Big Five 的外向性、开放性、宜人性、尽责性与神经质 5 个维度可同等表达，但初次短交互提供的语言线索稀疏，文本缺少语速、停顿与填充词等副语言信息，导致部分维度难以被准确感知。语料第三方评分也显示不同特质在感知层面相互混淆，直接控制 5 维会带来交叉干扰与表达不清。

**核心思路与方法架构：** 可感知性不取决于表达维度多少，而取决于是否顺应第三方感知的混淆结构并为文本缺失的副语言维度补上独立线索。语料分析环节取 Hazumi 语料 155 段对话的第三方 TIPI-J 评分做主成分分析与探索性因子分析，将 Big Five 压缩为 EO （外向性加开放性）、AC （宜人性加尽责性）与 N （神经质）3 个经验维度，EO 取两特质均值，AC 取两特质均值，N 直接取值。文本生成环节固定用户话语与话题连贯，从 Hazumi1911 选 10 段对话各截同一话题连续 10 轮，用 GPT-4 （版本 gpt-4-0613，温度固定为 0）以含人格形容词的提示词零样本重写全部系统话语而不做微调，形成 8 种人格条件加原文共 90 个样本。语音叠加环节沿用同一语言内容经 VoiceText 女性音色合成约 1.5 分钟对话，EO 高条件在用户说话中按 3 s 与 5 s 间隔插入后向通道而低条件不插入，AC 高条件将轮次停顿从语料基准 1.0 s 延长至 3.0 s 而低条件缩短至 0.5 s，N 高条件在句首加填充词并在 80% 与 110% 语速间交替，TTS 同样冻结，仅靠外部参数控制。该链条直击根因在于以降维减少文本线索重叠导致的跨维度干扰，再以正交的节律与填充线索为 N 等情绪相关维度提供文本之外的独立载体，评测采用离线众包打分而非实时交互。

**关键实验与核心代价：** 在 Hazumi 155 段对话第三方评分上，前 3 个主成分共解释 86% 方差，外向性与开放性相关为 r = 0.68，宜人性与尽责性相关为 r = 0.34，神经质与开放性相关为 r = -0.51，神经质与尽责性相关为 r = -0.39。原文表 1 累积方差行印刷为 0.49、0.71、0.96、1.00，与分项 0.49、0.22、0.15、0.10、0.04 及正文 86% 的表述无法对齐，原文如此报告，存在字面算术出入，原文未解释。在文本三维实验中，EO 高条件 EO 评分为 4.8 而低条件为 3.7，AC 高条件 AC 评分为 5.0 而低条件为 4.0，均高于各自低条件且差异显著，N 高条件 N 评分为 3.4 而低条件为 3.1，未达到显著差异。在语音三维实验中，EO 高条件 EO 评分为 4.6 而低条件为 4.0，AC 高条件 AC 评分为 4.8 而低条件为 4.0，N 高条件 N 评分为 3.6 而低条件为 3.0，均高于各自低条件且仅在匹配维度显著，作者报告的 N 控制与 N 评分 Spearman 相关在文本为 0.14 而在语音为 0.28。本研究未使用语音质量主观评分或神经网络代理指标，仅使用 TIPI-J 人格感知评分。主要代价是文本中 EO 操控同时抬高 AC 感知，存在语言线索重叠，而语音虽减少跨维度干扰却引入 TTS 音色本身对印象的影响。

**适用边界与深读导览：** 结论成立前提是日语、女性角色 Mei、熟人式闲聊、初次短时接触、无视觉信息的黑屏图标呈现与单一合成音色，未覆盖男性音色、其他语言文化、长期交互、视觉与上下文自适应控制及真实部署中的延迟与鲁棒性，论文中未提及可试听演示页。欲深究降维依据可查阅下方主成分与因子载荷说明，欲核对语言与语音操控差异可查阅实验结果中两张均值对照表及文本与语音相关性说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 首次相遇中系统设定的五维人格为何只能被感知到一部分

刚接触语音对话系统的研究生常会先问，为何给系统设定了完整人格，听起来却不像那么回事。原文的起点是行为一致性决定了自然感与可信度，当系统前后矛盾，用户会困惑并降低信任，而这种一致性常被理解为人格。心理学常用的 Big Five 模型包含外向性、开放性、宜人性、尽责性与神经质 5 维，描述力强但要在短对话中全部表达清楚并不现实。

要理解本文的问题定义，可以把输入看作限定话题的短对话历史与目标人格设定，输出则是系统产生的回应以及用户实际感知到的人格印象，关键落差在设定与感知之间。下面一幅示意把这种落差画得很直白，请沿从左向右的箭头阅读左右两箱的对照，再看下方红色结论行。左侧绿色箱列出系统试图表达的 5 维，中间是系统与用户图标及气泡，右侧浅色箱列出用户实际感知到的子集。

[![原论文 Figure 1：Perception of Big Five personality traits in first-time interactions](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-1.png)

*论文图 1：系统试图表达五维而用户仅感知子集的落差示意与人格重设计指向（原论文 Figure 1）。*

这幅示意的像素细节值得细读，左侧浅绿圆角框并列写出外向性等 5 个黑字 trait ，绿色箭头指向带齿轮的侧脸系统图标，中间上下两个空白气泡指向挥手的用户简笔画，右侧浅粉框同样列出 5 维但其中宜人性与开放性两行呈极浅灰色近乎隐去，底部红色英文强调仅子集被感知并以黑色三角引出人格重设计。这种画法把核心矛盾点破，系统端全量表达不等于用户端全量接收，短时首次相遇只能留下部分印象。

已有主流路线正好撞在这堵墙上，早期基于规则的生成框架与 persona 条件序列模型把说话人信息塞进解码器，近期大语言模型靠微调或提示注入人格描述，多数仍沿用 Big Five 框架。经验规律是外向性靠多话与热情容易被听出，而尽责性与神经质仅靠文字很难区分，开放性在闲聊中很少显露。更深的瓶颈在模态与评价视角，文本缺少语速与语调等副语言线索，而 Big Five 本为自评设计，用来做短时他评会出现意图与印象的系统性偏离。

### 从五维到三维的压缩依据与语料第三方评分的降维结构

全文的三步走逻辑可以用一幅框架图一次看清，请先看顶部绿色 Big Five 模型框如何经由语料分析沉降为 3 维，再顺着横向箭头看文本与语音两路验证的分工，底部英文点明主题是对话系统中的人格表达实验。顶部写着 E / O / A / C / N ，中部浅粉框写着 EO / AC / N ，右侧并列紫色文本框与蓝色语音框，这一导引帮你建立地图，后续所有数字都能对号入座。

[![原论文 Figure 2：Overview of the research framework](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-2.png)

*论文图 2：从五维模型经语料分析压缩为三维再分文本与语音两路验证的研究框架（原论文 Figure 2）。*

像素层面，顶部浅绿圆角框居中写着 Big Five 模型与 E / O / A / C / N ，黑色粗箭头垂直向下指向标注语料分析的浅粉框，框内写着感知显著 trait 与 EO / AC / N ，再由黑色横箭头向右同时指向紫色文本框与浅蓝语音框，分别标注对应章节，底部居中一行英文收束主题。箭头只有两条且方向明确，含义是先压缩维度再分模态验证，而非并行尝试 5 维，这种顺序决定了后文先讲语料再讲实验的叙事。

语料基础决定了压缩结论的可信度，下表转写了第三方评分的 Big Five 两两斯皮尔曼相关矩阵，阅读前需明确口径。语料为日语多模态 Hazumi 的 155 段人机闲聊，来自 4 个子库并混合面对面与在线采集，系统侧由人工操作员扮演名为 Mei 的角色以保持自然变异。评分者观看录像后用日语版 TIPI-J 在 7 点量表上打分，每段由 5 名独立评价者取平均，主成分分析与带 Varimax 旋转的探索性因子分析据此寻找感知维度。

|  |  | Annotation rating of Big Five traits E | Annotation rating of Big Five traits O | Annotation rating of Big Five traits A | Annotation rating of Big Five traits C | Annotation rating of Big Five traits N |
| --- | --- | --- | --- | --- | --- | --- |
|  | E | – | 0.68 | 0.19 | 0.05 | −0.32 |
| Rating | O | – | – | 0.22 | 0.38 | −0.51 |
|  | A | – | – | – | 0.34 | −0.20 |
|  | C | – | – | – | – | −0.39 |

相关模式与降维结果相互印证，前 3 个主成分共解释 86% 的方差，意味着观察者实际只区分出 3 个正交方向。外向性与开放性相关达到 0.68 且在同一因子上高载荷，共同构成表现力维度，宜人与尽责中等共变构成合作可靠维度，神经质则与开放性和尽责呈负相关而独立成维。这一压缩并非替换 Big Five 理论，而是说明短时他评视角下用户只用有限社会线索做判断，为后文只控三维提供了经验依据。

### 同一话题下的人格提示生成与语音叠加流程

与直接操控 5 个独立维度的最近做法相比，本文的实质增量不在生成器本身而在人格表示，先保留大语言模型的零样本提示生成方式，再把控制变量从 5 维替换为语料压缩出的 EO 、 AC 与 N 3 维。信号规格方面原文未披露采样率、帧长、码率与特征维度等音频工程参数，目标也不是提升音质，而是让同一句话在不同人格条件下产生可区分的感知。理解这一取舍很关键，后续所有操作都围绕可感知性而非声学保真度展开。

为跟踪一次系统回应如何从条件变为文本再变为语音，请带着一个贯穿例子阅读下一幅实验总览，设想取 Hazumi1911 中一段同一话题的 10 轮对话中的一次系统轮次，看它如何依次穿过条件表、语言模型、文本样本库、语音合成与韵律叠加直至接受众包评价。下段将结合像素拆解左右两路分支的汇合点，原文未披露张量形状与向量维度，故只能描述符号级流转。

[![原论文 Figure 3：Overview of the experiments.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/1041f6f5fc4c/figure-3.png)

*论文图 3：共用文本内容下语言模型生成与语音特征叠加形成三维对照样本的实验总览（原论文 Figure 3）。*

像素中左侧可见上下两张条件表，上表按 5 维逐个切换高低，下表按 EO 、 AC 与 N 三维切换，均以浅橙表示高与浅蓝表示低并保留基线行，蓝色与红色横箭头分别引入上下两个黑色 LLM 方块。中部纵列文档图标标注文本三维样本，右侧黑色方块写着语音合成加语音特征，再向右引出 3 个喇叭图标的语音三维样本，底部两处人物简笔画以橙色箭头指向评价文字。这种布局表明文本与语音共用同一语言内容，语音路只在文本基础上叠加韵律操作，从而保证模态对照的公平性。

训练与推理边界原文交代得相当干净，语言模型采用 GPT-4 的 gpt-4-0613 版本并固定温度为 0 以保证确定性输出，人格控制仅靠提示模板中替换人格形容词实现，全程无微调也无示例条件。对话历史由交替的用户与系统轮次构成，每次以最近用户话语为输入逐轮替换全部系统话语而保持用户原话不动。原文未披露分块流式、前瞻窗口、采样步数、延迟与显存开销，实际执行更接近离线整段生成加整段合成，而非实时对话部署。

### 文本条件下三维是否比五维更清晰的均值分离与相关证据

评测协议是判断文本结论能否成立的前提，两项文本实验共用同一套公平底座。对话刺激取自 Hazumi1911 的 10 段录音转写，每段截取同一话题的连续 10 轮以保证连贯，系统话语全部替换而用户话语原样保留。实验 1 按 5 维各设高低共 8 种语言模型条件加原始版本，每对话形成 9 条件合计 90 个样本，由 100 名日语母语众包者每人评 10 段，实验 2 按三维同样构成 9 个条件 90 个样本由 90 名母语者每人评 10 段，均用 TIPI-J 的 7 点量表并以双题均值计分，显著性采用 Welch 双侧 t 检验。

下表完整转写了实验 1 中指定控制维度与 5 维评分之间的斯皮尔曼等级相关，读表前需明确行是控制条件而列是评价维度，对角线反映意图是否被感知，非对角线反映串扰。控制编码与评分方向均为高值代表该 trait 更强，神经质方向同样按量表原始分理解，正负号直接对应感知增减，理解这一口径才能看懂后文为何说 5 维缠绕。

|  |  | E | O | Rated Traits A | Rated Traits C | N |
| --- | --- | --- | --- | --- | --- | --- |
|  | E | 0.27 | 0.18 | 0.24 | 0.06 | −0.13 |
|  | O | 0.22 | 0.23 | 0.21 | 0.21 | −0.20 |
| Control | A | 0.16 | 0.24 | 0.39 | 0.27 | −0.30 |
|  | C | 0.20 | 0.19 | 0.25 | 0.31 | −0.29 |
|  | N | 0.08 | −0.05 | −0.08 | −0.03 | 0.09 |

该矩阵的趋势是意图大体成立但缠绕严重，对角线多为正相关而宜人控制达 0.39 相对突出，说明语言模型确实能按提示改变措辞。然而外向或宜人操作同时抬高开放与尽责评分，热情友好类语言线索同时作用于多维。承接这一缠绕问题，下表转写了实验 2 中三维控制与三维评分的斯皮尔曼相关，行仍为控制而列为评价，控制编码为高 1 、语料基线 0 与低负 1 ，外向开放控制与自身达 0.47 ，宜人尽责控制与自身达 0.36 ，而神经质控制与自身仅 0.14 。

|  |  | Rated Traits EO | Rated Traits AC | N |
| --- | --- | --- | --- | --- |
|  | EO | 0.47 | 0.43 | −0.18 |
| Control | AC | 0.04 | 0.36 | −0.13 |
|  | N | 0.07 | −0.08 | 0.14 |

均值检验层面三维高低条件在目标维度上均达显著，但交叉效应仍在，外向开放升高会连带抬高宜人尽责印象，说明热情措辞同时携带亲和信号。教学例子可标出，如把高 EO 理解为更主动的寒暄与包容性措辞，它在提升自身感知的同时难免让可靠感同步上浮。神经质在文本下始终是未胜出项，相关微弱且高低均值几乎无分离，印证了情绪维度缺少犹豫与韵律支撑时难以成立。

### 加上韵律后三维能否独立控制的停顿与填充词模态对照

语音对照的公平性建立在语言内容完全复用之上，同一批文本样本经女性声音的 VoiceText 引擎合成全部系统轮次，用户原话同样合成以形成完整对话，每样本约 1.5 分钟并以黑底双图标视频呈现以避免视觉偏置。180 名母语者每人评 5 段，评分口径与文本实验完全一致。下表列出三维各自独立操控的语音特征，高低两极只动一类韵律而保持措辞不变，这是判断独立性的关键前提。

| Traits | Condition High | Low |
| --- | --- | --- |
| EO | Backchannels inserted | None |
| AC | Long pause (3.0 s) | Short pause (0.5 s) |
| N | Fillers added; variable speech rate | None |

具体操作上，外向开放维度以倾听中的附和声有无区分，高条件在用户说话期间按约 3 秒与 5 秒间隔插入短应答，低条件完全不插。宜人尽责维度只动轮替停顿，高条件从语料基线的 1.0 s 拉长至 3.0 s ，低条件压缩至 0.5 s 。神经质维度在每句系统话语开头加入类似迟疑的填充词并让语速在 80% 与 110% 之间交替，低条件则无填充且语速不变。下表转写了语音条件下控制与评分的斯皮尔曼相关，行列含义与文本实验一致，可直接对比串扰是否缩小。

|  |  | Correlation coefficients EO | Correlation coefficients AC | Correlation coefficients N |
| --- | --- | --- | --- | --- |
|  | EO | 0.33 | 0.09 | −0.05 |
| Control | AC | 0.04 | 0.33 | −0.15 |
|  | N | −0.19 | −0.16 | 0.28 |

矩阵显示语音带来了更干净的分离，对角线三值分别为 0.33 、 0.33 与 0.28 ，非对角绝对值多在 0.2 以下， Welch 检验也仅在评价与控制同维时显著。与文本下神经质仅 0.14 且混杂相比，语音中填充词与变速将其推高至 0.28 ，成为全文最关键的模态增益。代价同样清晰，不同合成引擎自带音色与节奏偏好可能塑造印象，原文明确提醒需换引擎验证，这是结论成立的重要限定。

从工程选型看，若产品只能做文本，优先表达外向开放复合维度最稳妥，它仅靠措辞即可被可靠感知，宜人尽责虽可表达但需接受与前者的串扰。若允许语音，则三维可相对独立控制，尤其适合用停顿塑造可靠感、用填充与变速传递情绪波动。教学例子可标出，如把长停顿理解为给人留出思考空间的礼貌信号，它在文本中无法实现，必须靠时间维度落地。未评测范围包括视觉与长期交互，短时首次印象的结论不宜直接推广到熟人对话。

### 压缩结论成立的前提与未验证的部署条件和复现边界

结论成立的前提相当具体，语料与实验均为日语短时闲聊，评价者是观看录像的第三方而非对话亲历者，量具为 TIPI-J 的 7 点他评，场景限定为首次相遇的有限轮次。这种设定下压缩出的 EO 、 AC 与 N 反映的是旁观者用社会线索快速归类的倾向，而非人格理论本身的结构。一旦换语言文化、换长期熟人对话或加入视觉与情境信号，哪些维度显著可能变化，原文在结尾也明确要求跨语言验证。

统计口径与部署代价同样需要看清，文本与语音实验均报告均值与标准差并以 Welch 双侧 t 检验判断高低差异，相关采用斯皮尔曼等级相关，但原文未报告置信区间与评价者间一致性，也未展示失效对话案例。语音增益依赖单一女性声音引擎，音色本身可能携带亲和或情绪偏置，附和声间隔、停顿秒数与变速比例均为人工设定而非学习得到。若直接搬到实时系统，还需考虑合成延迟、打断处理与用户个性适配，这些在离线整段合成中均未测量。

复现核对要区分三件事，代码是否开源方面原文未披露实现仓库，权重是否提供下载方面语言模型与合成引擎均直接调用现成服务而无自训练权重可下载，系统是否可直接运行方面缺少可执行流程与环境说明。原文提及 Hazumi 语料的多个公开链接、 VoiceText 引擎名称与众包平台名称，但本次未完成可用性验证，不能视为作者资源已公开。原文也未提供试听页，因此无法通过听感对照基线，复现时应以文中均值与相关矩阵为核对目标而非主观听感。

留给工程的选型建议是做减法而非做加法，文本产品先把外向开放复合维度做扎实，用主动包容的措辞传递热情与好奇，接受它会连带提升可靠感的现实。有语音通道再补齐另外 2 维，用轮替停顿塑造从容可靠，用填充词与变速点出情绪波动但避免过度抖动造成不适。未来值得探索的是结合视觉与上下文的自适应控制，以及在其他语言中重做语料压缩，只有确认压缩结构稳定，简化人格才算真正可迁移。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率、通道数与特征维度，前瞻延迟、 RTF 、吞吐与显存均未报告，仅披露轮替停顿 1.0 s 基线、 3.0 s 高条件与 0.5 s 低条件，语速 80% 与 110% 交替，附和声按 3 秒与 5 秒间隔插入，单样本视频约 1.5 分钟，合成采用女性声音，评价用黑底双图标视频以避免视觉偏置。
- **训练与评测数据**：训练方面无模型训练阶段，语言生成为零样本提示驱动，语料分析用日语 Hazumi 多模态对话的 155 段，来自 4 个子库并混合面对面与在线采集，角色为 Mei ，第三方评分用 TIPI-J 的 7 点量表每段 5 人平均，实验刺激取 Hazumi1911 的 10 段各截同一话题连续 10 轮，文本实验 1 由 100 人各评 10 段，实验 2 由 90 人各评 10 段，语音实验由 180 人各评 5 段，均为日语母语众包者。
- **算力与训练耗时**：原文未披露 GPU 、 CPU 、 TPU 型号数量与训练耗时，无模型训练阶段故无优化步数，推理侧调用 GPT-4 的 gpt-4-0613 版本与 VoiceText 女性声音引擎，众包评价经由第三方平台组织，硬件配置与单样本合成耗时均未报告，无法估算复现所需算力。
- **核心超参数与配置**：语言模型温度固定为 0 以保证确定性输出，人格控制仅替换提示模板中的人格形容词，全程无微调与示例条件，用户话语保持原样逐轮替换系统话语，语音侧外向开放以附和声有无区分，宜人尽责以轮替停顿长短区分，神经质以填充词有无与语速交替区分，显著性采用 Welch 双侧 t 检验阈值 p 小于 0.05 ，相关采用斯皮尔曼等级相关。
- **推理速度与部署开销**：原文未披露 RTF 、首包延迟、吞吐、参数量与显存占用，无分块流式与缓存设计说明，实际为离线整段生成加整段合成，单对话样本视频约 1.5 分钟，众包总人次文本约 1,000 与 900 人次，语音约 900 人次，部署为实时系统时的延迟与并发成本未知。
- **开源产物与协议状态**：原文未披露代码仓库是否公开，模型权重无可下载项，系统不可直接运行，文中提及 Hazumi 语料多个链接、合成引擎名称与众包平台名称，但本次未完成可用性验证，不能视为作者资源已公开，复现需自行实现提示生成与韵律叠加流程。
- **附录与补充材料要点**：原文未设独立附录，未披露补充证明、补充消融、许可限制与失效案例清单，致谢提及两项日本学术振兴会资助编号，参考文献覆盖人格生成与语料相关工作，未来方向仅在正文结尾概述跨语言与多模态验证。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.6/10** | 创新 5.4/10 | 技术严谨 6.6/10 | 实验充分 6.2/10 | 清晰度 5.1/10 | 影响力 4.7/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 4.3/10
- 排名：后50% | 文档类型：方法研究
- 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.3`
- 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.3/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.3.pdf)
- DOI：`10.18653/v1/2026.iwsds-1.3`
- Track：IWSDS 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：语音三维实验三个维度均仅在匹配维度显著且跨维度干扰最小，N高3.6低3.0差异显著补足了文本短板。

- 核心优势：基于Hazumi155段第三方TIPI-J评分做PCA与Varimax旋转EFA，前三成分解释86%方差支撑了三维压缩。

- 主要短板：语音后向通道、停顿与填充词分别绑定EO、AC与N而未做单因素消融，且仅用10段单话题对话样本量小。

- 主要短板：表1累积方差0.49、0.71、0.96、1.00与分项及正文86%无法对齐，且4.1节8条件与5.1节6变体表述不一致。

- 主要短板：评价者间一致性、人格形容词具体词表与众包质量控制缺失，使提示复现存在关键缺口。

---

[← 返回 iwsds-2026 论文汇总](/audio-research-portal/posts/conference-iwsds-2026/)
