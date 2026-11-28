---
title: "HumMusQA: A Human-written Music Understanding QA Benchmark Dataset"
date: 2026-11-27
draft: false
description: "针对音乐问答基准靠文本先验即可得高分而测不出真听觉的问题， HumMusQA 数据集以 108 首开放许可录音配 320 道专家手写 4 选项题目并经盲审与 4 次乱序评测，显示 Qwen2.5-Omni-7B 真实音频达 64.3% 均值领先但伪音频仍远高于 25% 随机，代价是题量小且理论维度仍弱。"
tags: ["基准测试", "数据集", "基准设计", "音频问答", "音乐分析"]
categories: ["nlp4musa-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "人工手写音乐理解问答基准如何检验真正的听觉感知"
paper_digest_original_title: "HumMusQA: A Human-written Music Understanding QA Benchmark Dataset"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.9"
paper_digest_workbench_source_sha256: "5c96317769534493ac01b4d6c50834068261d8b5f59be1f45ce711fe32b24ef0"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.nlp4musa-1.9/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.9.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音乐分析"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对音乐问答基准靠文本先验即可得高分而测不出真听觉的问题， HumMusQA 数据集以 108 首开放许可录音配 320 道专家手写 4 选项题目并经盲审与 4 次乱序评测，显示 Qwen2.5-Omni-7B 真实音频达 64.3% 均值领先但伪音频仍远高于 25% 随机，代价是题量小且理论维度仍弱。"
paper_digest_reader_sections: [{"heading":"音乐问答基准为何测不出真正的听觉感知","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"HumMusQA 的数据构成与端到端评测流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"人工出题如何保证必须细听才能作答","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"十三类维度与三档难度是如何标定与分布的","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"六个模型的总体表现与伪音频对照揭示了什么","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提、复现核对与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Benno Weck"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Pablo Puentes"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Andrea Poltronieri"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Satyajeet Prabhu"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Dmitry Bogdanov"}]
paper_digest_abstract_sha256: "571e17dd0003877d814e2eaf60e7552eeb7291bc538eefab74416f3e4ab6d0df"
paper_digest_sidecars: {"citation.bib":{"sha256":"f87c395397a0770d6ce408f1967e720ff65a6524ab11ee335836e1b97410a45e","url":"/audio-research-portal/client/papers/2026-11-27/conference-b86a1cb2974e55ebb72bad74/citation.bib"},"citation.json":{"sha256":"21d0c1aa0156e3ff4f11bd61c0a1bfe4786c8bbb423917b47fc2351e99b2dbf4","url":"/audio-research-portal/client/papers/2026-11-27/conference-b86a1cb2974e55ebb72bad74/citation.json"},"citation.ris":{"sha256":"1fbb6691bc0f577f46a8604118c3a25df06ff5a8d702d6b8d7d0370fb4ebeb35","url":"/audio-research-portal/client/papers/2026-11-27/conference-b86a1cb2974e55ebb72bad74/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"854adc8b0c13f7babb52c3867f42af5372bfb00a32d3d1c202a47b8e8c18088b","url":"/audio-research-portal/client/papers/2026-11-27/conference-b86a1cb2974e55ebb72bad74/rethink-context.json"}}
paper_digest_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.9"
paper_digest_source_kind: conference
paper_digest_conference_id: "nlp4musa-2026"
paper_digest_conference_name: "nlp4musa-2026"
paper_digest_doi: "10.18653/v1/2026.nlp4musa-1.9"
paper_digest_conference_doi: "10.18653/v1/2026.nlp4musa-1.9"
paper_digest_conference_record_url: "https://aclanthology.org/2026.nlp4musa-1.9/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.9.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "89a238a7e3d89492332dfa0aae8b66987285b5a5ebdbf70933a2bcf057c9fcc2"
paper_digest_api_reader_plan_sha256: "7c8cdac87280a37c69b765b99ce5ce44504b356b5ea977e80c4ad27afaaebda1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "77be07ae11433eac8f3cca2e7367a5b4516d7fea331d53e2f07a1566323c6156"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "948e2e59035febcd312c22d3ff58faa59ae0bc713ac0eb0339686bb6a71ba82e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "558224dad0870a4e35648bfbefa21f11fba0d636527aee882527e75e28cd3ca4"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "082c8bdea262ee1f909c29da93c6e17f5c512f87d4cadcac99543d3762ebfe2e"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.music-understanding","label":"音乐分析"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 人工手写音乐理解问答基准如何检验真正的听觉感知

> 英文题目：*HumMusQA: A Human-written Music Understanding QA Benchmark Dataset*

> 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.9`
> DOI：`10.18653/v1/2026.nlp4musa-1.9`
> Track：NLP4MusA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.9/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.9.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)；[音乐分析](/audio-research-portal/papers/?concept=task.music-understanding)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.1/10 | 实验充分 7.1/10 | 清晰度 6.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.7/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Benno Weck：机构信息未能从会议 PDF 纯文本可靠映射
- Pablo Puentes：机构信息未能从会议 PDF 纯文本可靠映射
- Andrea Poltronieri：机构信息未能从会议 PDF 纯文本可靠映射
- Satyajeet Prabhu：机构信息未能从会议 PDF 纯文本可靠映射
- Dmitry Bogdanov：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 大型音频语言模型（Large Audio-Language Models，LALMs）需同时处理音频输入与文本问题，输出立足听觉感知的回答，音乐因层次叠加与信息密度成为最难的领域之一，既要识别配器、调式与结构等感知特征，也要联系流派与情绪等文化语境。现有 MusicQA 与 MusicInstruct 多由大语言模型基于简短字幕或标签自动扩写，缺乏真实听觉 grounding，纯文本模型仅凭题面语言先验即可取得高分，形成感知缺口，难以检验多跳分析与专家级理解。MMAU-Pro 虽引入专家撰写但音频来源混杂且质量不一，MusicTheoryBench 则仅覆盖符号领域，缺少高保真录音的直接感知检验。

**核心思路与方法架构：** 与最接近的自动扩写路线相比，本文保留多项选择问答的评测形式，将题源增量改为 3 位平均从业 15 年且具高级音乐理论资质的专家全手工撰写与盲审互验，并将音频统一为 Creative Commons 许可的高保真录音。单条样本由 30 秒至 90 秒的 Jamendo 曲目片段与 1 道四选一选择题构成，经提示送入冻结的大模型，模型仅做离线推理并返回选项，输出长短不一时再经 gemini-2.5-flash 自动匹配归一为 A 至 D，不更新任何参数。撰写依据 ABRSM 与 GCSE 教学目标，覆盖感知辨认、分析推理与诠释判断，要求精听与乐理且仅有唯一明确答案，主观过强、干扰项可轻易排除或标签不准的题目经多轮修订直至无分歧。全部 320 道题再经 GPT-5 按 13 个音乐维度与低、中、高三档知识要求辅助标注并由 2 位领域专家复核，为分维度诊断提供结构。

**关键实验与核心代价：** 在 320 道题上，作者报告模型 qwen2.5-omni-7b 总体准确率为 64.3 ± 2.9 %，高于同一表内 gpt-audio 的 57.7 ± 1.5 %，经表 2 交叉核对的 music-flamingo 总体为 58.5 ± 1.6 %，低难度 qwen 为 73.9 ± 3.1 % 高于 gpt-audio 的 65.3 ± 3.9 %，中难度 qwen 为 58.1 ± 2.5 % 高于 gpt-audio 的 55.1 ± 1.9 %，高难度 qwen 为 53.2 ± 3.9 %，随难度上升总体呈下降趋势，乐理类和声、旋律与演奏得分低于流派、情绪等文化语境类。4 次随机打乱选项顺序后取平均，qwen2.5-omni-7b 总体一致性为 66.6 %，高于 gemini-2.5-flash 的 35.0 % 与 audsemthinker 的 42.5 %，多数模型对选项位置敏感。将真音频替换为高斯噪声或静音后，qwen2.5-omni-7b 分别降至 46.2 ± 1.3 % 与 47.0 ± 2.0 %，gemini-2.5-flash 降至 37.8 ± 1.5 % 与 39.8 ± 1.6 %，纯文本 gemini-2.5-flash 总体仍有 42.7 ± 0.9 % 且高难度达 50.0 ± 2.0 %，均高于 25 % 随机猜测，表明人工题面仍存在可利用的统计与排除线索。本基准未使用人工主观 MOS 或 UTMOS 等神经代理指标，仅以选项准确率与跨乱序一致性为客观指标，这是以鲁棒性代价换取诊断价值的主要体现。

**适用边界与深读导览：** 结论成立于 108 首开放许可曲目、30 秒至 90 秒片段、四选一客观评测与离线整体输入前提下，未覆盖长曲、开放作答、实时流式与嘈杂采集部署，也未提供人类专家上限与显著性检验。附录示例与 Zenodo 数据可对照题面与干扰项设计，提示词模板与模型配置差异需结合下方方法概述和架构与实验结果中的双表细读，局限与快捷方式成因可查阅局限与问题。

## 🔗 开源与复现资源

- 论文所列链接：<https://doi.org/10.5281/zenodo.18462524> → <https://zenodo.org/records/18462524> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/QwenLM/Qwen2.5-Omni/blob/main/cookbooks/universal_audio_understanding.ipynb> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐问答基准为何测不出真正的听觉感知

大音频语言模型通常由音频编码器与大语言模型拼接而成，能够以音频为条件生成文本回答。与只学习声学特征的自监督表示不同，这类系统被期望覆盖语音之外的全部声音领域，其中音乐最具挑战。音乐在时间上动态分层且信息密集，评测既要听辨乐器、调式与结构等感知特征，也要调用风格、情绪与文化语境知识。开放式作答语言多样，常规词法指标难以衡量回答好坏，问答框架因此成为主流客观手段。

早期音乐问答基准更重视规模而非质量，典型做法是从已有标题或标签出发，用文本大模型自动扩写题目。例如从 MusicCaps 的描述或 MagnaTagATune 的标签派生问题，题面往往停留在表层。由于出题过程没有真正听过音频，文本模型仅凭题面语言先验与世界知识就能取得高分，形成感知缺口。这类题目深度有限，难以构造需要多步推理的专家级问题，测到的是推理能力而非听觉感知。

近期专家标注工作试图弥补深度不足，但仍存在来源上的权衡。 MMAU-Pro 组织了 1,618 道音乐理解题目并经专家手写验证，为防训练集泄漏而从野外与网络仓库抓取音频，音质与元数据可靠性参差。 MusicTheoryBench 质量虽高，却只停留在 ABC 记谱的符号域，没有检验对声音的直接感知。 HumMusQA 数据集主张把专家手写与高保真开放录音结合，用 320 道 4 选项题目覆盖结构、和声、感知与文化维度，并通过设计最小化语言捷径，要求必须真听才能答对。

HumMusQA 数据集的设计目标因此十分明确，即在可公开分发的前提下提供感知严谨的探针。全部音频取自开放许可，题目文本同样以开放许可发布，评测采用 4 次乱序平均加伪音频对照，把语言捷径的度量纳入基准本身。后文将按数据构成、出题验证、标注分布、评测结果与前提代价的顺序展开，帮助初学者一次看清从录音到分数的完整链条。

### HumMusQA 的数据构成与端到端评测流程

与自动扩写路线相比， HumMusQA 数据集保留 4 选项问答形式以支持自动评分，但把题目来源替换为专家手写，并把音频来源替换为 Jamendo 平台的开放许可录音。研究共选出 108 首覆盖多风格、多种配器与制作风格的曲目，每题对应其中 30 秒至 90 秒的片段，起止由出题人按考查内容确定。原文未披露采样率、帧长与步长、码率与通道数等信号规格，也未披露模型内部张量形状，因此本解读不虚构任何维度与参数量，仅记录时长窗口与题量。

以一首曲目中的一段 60 秒伴奏片段为例，完整流程可按序追踪。第一步按出题人标注截取对应时间窗，第二步配上题面与 4 个选项，第三步把音频片段与乱序后的选项文本一同送入待测大音频语言模型，第四步由模型生成自由文本回答，第五步调用解析模型将长回答映射到 A 至 D 的选项字母，最后在 4 次选项乱序重复下平均得到准确率，并统计 4 次答案完全一致的比例作为一致性。由于原文未公开编码器帧率与特征维度，无法给出每秒帧数与张量形状，流程仅在数据与文本层面完整可追踪。

本研究不训练新模型， 6 个待测系统均为冻结推理，评测直接衡量音乐理解而非任务格式理解。所选系统覆盖通用多模态、音频专用与音乐专用 3 类范式，提示模板在附录中逐一给出，大多为问题加选项的直接拼接，仅 Qwen2.5-Omni-7B 采用定制系统提示引导只输出字母。原文未披露延迟、前瞻窗口、采样步数、 RTF 与显存开销，也未报告推理硬件，因此无法讨论分块或部署代价，只能确认评测成本来自 4 次重复调用与 1 次解析调用。

提示与解析细节进一步决定公平性。附录为 6 个系统分别给出提示模板， 5 个系统直接拼接问题与选项， Gemini2.5-Flash 采用专家音乐学家角色提示， Qwen2.5-Omni-7B 因直接问答效果不佳而改用强调细听并只输出字母的系统提示。回答统一由解析模型映射到选项，避免人工判分的漂移，但解析模型本身的误差与偏好未被单独度量，构成评测链条中的隐含假设。

### 人工出题如何保证必须细听才能作答

出题依据来自英国皇家音乐学院联合委员会考纲与英国中学音乐课程，并参考 MuChoMusic 与 MMAU 等已有基准。 3 位乐理专家平均拥有 15 年专业经验且均具高级学位，每人承担约三分之一题量。写作要求明确对应真实教学目标，覆盖感知辨认、分析推理与诠释判断等不同认知需求，题目必须细听加乐理才能答对，且只允许 1 个清晰无歧义的正确答案。题型从面向普通听众的情绪判断，到需要理论的背景吉他不协和音程辨析，跨度刻意拉大。

附录示例显示难度梯度是具体的。低难度如引子主奏乐器是合成器还是贝斯吉他，中难度如吉他伴奏风格指向哪个国家的典型语汇，高难度如背景吉他中哪些音程造成不协和，或诗节中脱离调式的游离音到底是降 A 还是 G 。所有题目均为 4 选项 1 正 3 误，便于自动评分。专家手写的作用在于把问题扎根于真实听觉，没有听过音频的文本模型难以凭空构造出与声音细节咬合的题干与干扰项。

3 位专家兼任出题人与验证人，互相盲答对方题目且事先不知预设答案，并书面记录分歧。常见失败模式包括过于主观依赖个人解读、干扰项不可比而可轻易排除、答案标注不准或不精确。作者按意见修改措辞与选项，直到无人再提异议才纳入最终 320 道。这种迭代同行评议循环保证每题至少经过 1 轮交叉检验，使含糊与可猜性在入库前被尽量消除。

### 十三类维度与三档难度是如何标定与分布的

为系统分析模型表现，每题按两个维度标注。音乐类别沿用 MuChoMusic 的 13 维分类，包括旋律、和声、节拍与节奏、配器、音乐织体、声音质地、演奏、结构、情绪与表达、歌词、流派与风格、历史与文化语境、功能语境。每题指定 1 个主要类别反映考查重心，必要时附加零个或多个次要类别。难度按仅靠聆听所需的乐理程度分为低、中、高 3 档，低档无训练也可答，中档需一定训练或主动聆听经验，高档需正规音乐教育或专门知识。

为保证 320 道题目在 13 个边界上一致，初标由 GPT-5 按结构化提示完成，提示中给出每类定义与示例。随后 2 位领域专家独立复核全部自动标注，分歧经讨论解决。这种大模型初标加专家复核的分工，既减少主观漂移，也保留音乐判断的最终决定权。分类本身不改变题目内容，只为后续按类别与难度拆分准确率提供可比口径。

最终分布覆盖全部 13 类，但并不均衡。配器占比 19.7% ，和声占比 11.3% ，旋律占比 10.6% ，而音乐织体、结构与歌词各自不足 3.5% 。难度上低档占 44.4% ，中档占 38.4% ，高档占 17.2% 。这意味着总体准确率更多反映常见类别与低中难度表现，高难度与稀有类别样本较少，解读按类别雷达时需注意小样本波动，不宜把个别类别的起伏外推为整体能力。

这种分布对解读提出明确要求。总体分数会被配器与低难度主导，若只看单点平均会高估理论分析能力。正确做法是同时查看分难度曲线是否单调下降，以及雷达图中理论角是否系统性内收，并对样本不足 3.5% 的类别保持谨慎。只有把总体、难度与类别 3 组视角结合，才能判断模型是真听见还是靠文化常识作答。

### 六个模型的总体表现与伪音频对照揭示了什么

#### 评测协议与公平性核查

评测向每个模型同时呈现音频片段与 4 选项问题，所有模型此前均在问答任务上微调过，因此格式理解不是主要障碍。为抵消选项顺序敏感性，每题独立进行 4 次评测，每次随机打乱选项顺序，最终准确率取 4 次平均并报告标准差，一致性定义为 4 次回答字母完全相同的题目比例。方向均为越高越好，难度标签用于验证单调性，类别拆分用于定位弱点。评测不含人工听测，全部为自动准确率，解析长回答时调用解析模型统一映射，提示差异在附录中公开。

#### 真实音频与伪音频对照的数值含义

下表为原文 Table 2 的完整呈现，展示 3 个系统在真实音频、高斯噪声与静音 3 种输入下的准确率均值与标准差，单位均为 % ，随机猜测期望为 25% 。该对照用于检验回答是否真正依赖听觉，理想情况下伪音频应回落至随机水平。 3 个系统分别为 Qwen2.5-Omni-7B 、 Music-Flamingo 与 Gemini2.5-Flash ，均为可实际运行的评测对象，数值越高表示听觉依赖越强。

| Model | Accuracy with SD (%) Real | Accuracy with SD (%) Noise | Accuracy with SD (%) Silence |
| --- | --- | --- | --- |
| qwen2.5-omni-7b | 64.3 ± 2.9 | 46.2 ± 1.3 | 47.0 ± 2.0 |
| musicflamingo | 58.5 ± 1.6 | 42.9 ± 3.6 | 42.2 ± 3.0 |
| gemini-2.5-flash | 55.9 ± 1.2 | 37.8 ± 1.5 | 39.8 ± 1.6 |

在该展示的 3 行 3 列中， Qwen2.5-Omni-7B 在真实音频、噪声与静音上的均值均为最高，真实音频为 64.3% ，噪声为 46.2% ，静音为 47.0% ，均明显高于 25% 的随机期望。更关键的是伪音频并未跌至随机，噪声与静音仍保留 37.8% 至 47.0% 的准确率，说明题面与选项本身携带可利用的统计线索。原文完整 Table 1 （本精简表未列出）进一步报告 6 个系统的总体与分难度准确率，作者文字总结随难度增加性能单调下降， Qwen2.5-Omni-7B 在总体与低中难度上占优，但高难度纯文本仍约 50% 答对，暴露语言捷径未被根除。

#### 类别雷达显示的结构性弱点

下图为本次收到的 FIGURE_1 像素，雷达外圈为准确率 10 至 80 ，越靠外越高， 8 个角分别代表配器、和声、旋律、节拍与节奏、声音质地、演奏、流派与风格、情绪与表达。图例用 6 种颜色区分 6 个模型，占比不足 5% 的 5 类未画入。导读时应先看外扩与内收的整体形状，再对比各颜色在同一角的相对位置。

[![原论文 Figure 1：Accuracy across different categories in the benchmark.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/46b4c04f52c6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/46b4c04f52c6/figure-1.png)

*论文图 1：六个模型在八类音乐维度上的准确率雷达分布，情绪与风格外扩而和声旋律内收（原论文 Figure 1）。*

图中折线走向表明没有任一颜色在 8 个角上全面包住其他颜色，通识类角普遍外扩而理论类角普遍内收。情绪与表达角最高，多条线达到 70 以上，流派与风格角也多在 60 以上。配器角 Qwen2.5-Omni-7B 约 61 居首而 Gemini2.5 最内收，和声角 Audio-Flamingo-3 约 63 居首而 Gemini2.5 最内收，节拍与节奏角同样 Audio-Flamingo-3 最外扩，声音质地角 Qwen2.5-Omni-7B 与 GPT-Audio 最外扩。旋律与演奏等角多在 48 至 58 之间徘徊，印证原文判断即文化语境推理强于形式化分析，但须按角分别陈述，不可笼统称某模型全面最优。

### 结论成立的前提、复现核对与工程选型建议

本基准结论依赖 4 选项单选与自动解析口径，准确率只反映在给定干扰项中选对的比例，不等同于开放描述能力。题目共 320 道，配器与低难度占比较高，高难度仅占 17.2% ，稀有类别每类不足 3.5% ，小样本下类别排名易波动。解析步骤引入额外模型，提示措辞与选项顺序均被证实会引起方差， 4 次平均与一致性只是缓解而非消除这种敏感性。研究未安排人工听测，无法用听众打分验证自动准确率与感知的对应关系。

未验证条件包括长音频、多轮对话与嘈杂录音， 30 秒至 90 秒的整段输入结论不宜直接外推到秒级片段或数小时节目。复现方面需区分三件事，论文报告数据集存放于 Zenodo 并声明开放许可，随附链接信息显示该 Zenodo 链接可达但标为第三方提及，未确认为作者自有仓库，模型权重方面开放与闭源并存，附录公开了代表性题目、模型对比与各系统提示模板，可支持按文复跑评测流程，但系统能否一键运行原文未承诺。演示试听页原文未提供，解读不虚构听感，建议对照附录题例自行试听验证现象。

工程选型上若追求总体问答准确率，原文文字报告 Qwen2.5-Omni-7B 在总体与低中难度上占优且一致性较高，但伪音频下仍远高于随机说明不能把高分等同于真听见。若关注和声与节拍等理论维度，雷达形状表明 Audio-Flamingo-3 在对应角上相对外扩，可优先补测。必须正视的负结果是纯文本模型在高难度上仍约 50% 答对，题面措辞如非常流行的合成器音色会直接提示超级锯齿波，选型时应把伪音频与纯文本对照作为必做检查，而非只看真实音频单点分数。

后续工作可从三处改进。一是扩大高难度与稀有类别题量并优化干扰项，使纯文本猜测更接近随机。二是补充人工听测与置信区间，验证自动准确率与人类感知的对应。三是公开采样率、划分细节与一键运行脚本，降低复现门槛。在此之前，使用该基准时应同时报告真实音频、伪音频与纯文本 3 组分数，并按难度与类别拆分，避免用单点总体分代替听觉能力。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、码率、通道数与特征维度，仅披露每题对应 30 秒至 90 秒片段， 108 首曲目来自 Jamendo 开放许可录音，评测为整段输入加文本问题，未报告延迟与 RTF
- **训练与评测数据**：评测数据为 HumMusQA 的 320 道专家手写 4 选项题目，配 108 首 Jamendo 开放许可曲目片段，覆盖 13 类音乐维度与低中高 3 档难度，低档占 44.4% ，中档占 38.4% ，高档占 17.2% ，无额外训练划分， 6 个大音频语言模型均为冻结评测
- **算力与训练耗时**：原文未披露训练硬件与训练耗时，本研究无模型训练阶段，仅为冻结推理评测，推理硬件型号与数量耗时与显存占用均未披露，评测成本来自 4 次乱序重复调用与解析模型调用
- **核心超参数与配置**：无训练优化器与学习率等超参，评测关键设置为每题 4 次独立运行并随机打乱选项顺序，准确率取平均并报告标准差，一致性统计 4 次答案完全一致比例，解析长回答调用解析模型映射到选项，提示模板按模型分别在附录给出
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐与显存等推理代价，仅可确认每题需 4 次模型调用加 1 次解析调用， 6 个系统均未报告参数量与实时性，无法比较部署开销
- **开源产物与协议状态**：论文报告数据集存放于 Zenodo 并声明开放许可，附录公开代表性题例、模型对比与各系统提示模板，随附链接信息显示该 Zenodo 链接与 Qwen 示例文档链接可达但标为第三方提及，未确认为作者自有仓库，代码一键运行与权重直接下载状态原文未明确承诺
- **附录与补充材料要点**：附录给出按类别与难度的代表性题例与正确选项，模型能力与开放状态对比， 6 个系统的提示模板与 Qwen 定制系统提示，伪音频与纯文本对照的失败案例讨论，未提供采样率与超参等补充实验

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.1/10 | 实验充分 7.1/10 | 清晰度 6.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.7/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.9`
- 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.9/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.9.pdf)
- DOI：`10.18653/v1/2026.nlp4musa-1.9`
- Track：NLP4MusA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：3位平均从业15年专家各撰约三分之一题目并经盲答互验书面标注分歧，迭代修订至无异议纳入最终320道唯一明确答案。

- 核心优势：108首Jamendo Creative Commons许可录音配30至90秒内容相关片段，经Zenodo以Creative Commons许可公开可自由分发复现。

- 核心优势：4次随机乱序平均准确率并计算跨轮一致性，辅以高斯噪声静音替换与纯文本对照量化感知依赖与位置鲁棒性。

- 主要短板：纯文本对照总体42.7%且高难度达50.0%均远高于25%随机水平，表明题面仍含可利用的统计与排除线索。

- 主要短板：样本仅320道且Musical Texture等长尾类别各不足3.5%，无人类专家上限与显著性检验，总体领先幅度需谨慎解读。

- 主要短板：各模型提示模板不统一，qwen2.5-omni-7b经官方手册专门调优而其余多为直输，且输出归一依赖gemini-2.5-flash自身。

---

[← 返回 nlp4musa-2026 论文汇总](/audio-research-portal/posts/conference-nlp4musa-2026/)
