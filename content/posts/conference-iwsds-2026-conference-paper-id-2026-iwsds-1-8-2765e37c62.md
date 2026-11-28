---
title: "Analysing Next Speaker Prediction in Multi-Party Conversation Using Multimodal Large Language Models"
date: 2026-11-27
draft: false
description: "论文以三人日语自由讨论中随机抽取的 1,000 个轮次为对象，用 GPT-5 系列在模型尺寸、是否给轮次转换规则与是否给单帧图像共 12 种条件下预测下一位说话人，发现大模型区分具体人选更准而显式规则以打断避免率下降为代价换来发言机会检出率提升，单帧图像总体无明确增益。"
tags: ["评测协议", "多模态模型", "语音对话系统", "轮次切换"]
categories: ["iwsds-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "三人讨论中谁来接话：多模态大语言模型的过度指名偏置与规则提示的纠偏代价"
paper_digest_original_title: "Analysing Next Speaker Prediction in Multi-Party Conversation Using Multimodal Large Language Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.8"
paper_digest_workbench_source_sha256: "fd5370cca3cc739ff268ee22f0eb9b7059e91e1121c6e2be355386b2e83959ef"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.iwsds-1.8/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.iwsds-1.8.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "轮次切换"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文以三人日语自由讨论中随机抽取的 1,000 个轮次为对象，用 GPT-5 系列在模型尺寸、是否给轮次转换规则与是否给单帧图像共 12 种条件下预测下一位说话人，发现大模型区分具体人选更准而显式规则以打断避免率下降为代价换来发言机会检出率提升，单帧图像总体无明确增益。"
paper_digest_reader_sections: [{"heading":"三人讨论中下一位说话人为何不能直接拿实际接话者当答案","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从完整历史文本加单帧截图到字典式预测的十二条件流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"轮次转换规则提示与人工标注如何定义可预测与不可预测","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"十二条件下区分准确率随尺寸上升而打断与机会指标分化","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"规则提示以打断率为代价换回发言机会而单帧图像总体无明确增益","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"仅 GPT-5 系列与单帧截图限制下的推广边界与选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Graduate School of Informatics, Kyoto University, Japan"],"name":"Taiga Mori"},{"affiliations":["Graduate School of Informatics, Kyoto University, Japan"],"name":"Koji Inoue"},{"affiliations":["Graduate School of Informatics, Kyoto University, Japan"],"name":"Divesh Lala"},{"affiliations":["Graduate School of Informatics, Kyoto University, Japan"],"name":"Keiko Ochi"},{"affiliations":["Graduate School of Informatics, Kyoto University, Japan"],"name":"Tatsuya Kawahara"}]
paper_digest_abstract_sha256: "9e1a91876008a01b3270a2fdb258c7140ca5ebb0d4be9d3581845b07a59b3a43"
paper_digest_sidecars: {"citation.bib":{"sha256":"3990549f83730a1eeb800f3834db688fd405183b1df0f5a13ba6448431cfb887","url":"/audio-research-portal/client/papers/2026-11-27/conference-2765e37c6239ba79a2d4e758/citation.bib"},"citation.json":{"sha256":"f1c8bdbe473679bace0717e28e714b6446e16e19ca44a8901f8b67407b4679f6","url":"/audio-research-portal/client/papers/2026-11-27/conference-2765e37c6239ba79a2d4e758/citation.json"},"citation.ris":{"sha256":"a4b7b6d10922f2cb586d391e3842dd4c5a22e47118455864b5201470cdce735f","url":"/audio-research-portal/client/papers/2026-11-27/conference-2765e37c6239ba79a2d4e758/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e0e22ce97bb1f29f23457d97951d31b89a9ce3f968aff56a645b3ed0964992be","url":"/audio-research-portal/client/papers/2026-11-27/conference-2765e37c6239ba79a2d4e758/rethink-context.json"}}
paper_digest_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.8"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwsds-2026"
paper_digest_conference_name: "iwsds-2026"
paper_digest_doi: "10.18653/v1/2026.iwsds-1.8"
paper_digest_conference_doi: "10.18653/v1/2026.iwsds-1.8"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwsds-1.8/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwsds-1.8.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "727fd58103aef41236de1f2a42a4fe648383d585bf0a11d44c66685b2b980c04"
paper_digest_api_reader_plan_sha256: "edd860a1f4d1589365150fa0ee6bc985a85bd5eaac38c6a479d37206dcc46339"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e0837adaa95ac7551ea233da98c83faee7b770da35d9eff5466233cbeb13a85f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "634a8145e0b20a485f1e9456ac74c10f165fed9f61564a618bdcda02fe4ec788"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b5763898a27228cd892ac1cc7ed23a267d0fabec0195590ac67177254ec31da3"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"task","id":"task.turn-taking","label":"轮次切换"}]
paper_digest_primary_method: "评测协议"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 三人讨论中谁来接话：多模态大语言模型的过度指名偏置与规则提示的纠偏代价

> 英文题目：*Analysing Next Speaker Prediction in Multi-Party Conversation Using Multimodal Large Language Models*

> 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.8`
> DOI：`10.18653/v1/2026.iwsds-1.8`
> Track：IWSDS 2026



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.8/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.8.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-research-portal/papers/?concept=task.speech-dialogue)；[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [轮次切换](/audio-research-portal/papers/?concept=task.turn-taking)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)
- **模型家族**：[多模态模型](/audio-research-portal/papers/?concept=model_family.multimodal)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 6.2/10 | 技术严谨 7.0/10 | 实验充分 6.0/10 | 清晰度 5.5/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Taiga Mori：Graduate School of Informatics, Kyoto University, Japan
- Koji Inoue：Graduate School of Informatics, Kyoto University, Japan
- Divesh Lala：Graduate School of Informatics, Kyoto University, Japan
- Keiko Ochi：Graduate School of Informatics, Kyoto University, Japan
- Tatsuya Kawahara：Graduate School of Informatics, Kyoto University, Japan

## 📌 核心摘要

**问题与瓶颈：** 本文研究 3 人面对面讨论中的下一说话人预测（next speaker prediction），输入为截至当前轮次的完整日语对话历史文本与可选的轮次结束时刻视频截图，输出为 A 、 B 、 C 中的某一人或表示无法确定的 O 。依据 Sacks 等人提出的轮次转换规则（turn-taking rules），只有当当前说话人通过称呼与邻接对第一部分明确选择下一说话人时才可预测，否则任何人均可自选发言。现有大语言模型路线仅凭语言上下文推测最可能的接话者，在无需预测时仍倾向输出具体人名，导致打断风险与发言机会丢失，难以兼顾可预测情形的判别与不可预测情形的克制。

**核心思路与方法架构：** 与 Inoue 等人仅用简单转录提示 GPT-4o 且准确率仅略高于随机的既有报道不同，本文保留完整历史与冻结的多模态大语言模型（multimodal large language models，MLLMs），增量在于显式加入轮次转换规则的三步推理提示与可选视觉输入，并对比 GPT-5 、 GPT-5-mini 与 GPT-5-nano 三档规模共 12 种条件。以 session-02-city_8 第 09 轮 B 的问句为例，文本历史与分辨率为 1920×480 的结束帧经 Base64 编码后与任务说明一同送入模型，仅在提供规则时模型先判断称呼对象再判断对话行为是否期待回应，若指向明确个体则输出该标签否则输出 O ，全程以 JSON 格式返回标签与 30 词以内理由。所有模型均通过 Python API 调用且无训练与参数更新，温度固定为 1 并采用离线全量历史推理，针对无规则时过度预测的现象。

**关键实验与核心代价：** 在 Teidan 语料 12 个小组 36 场讨论中抽取的 1000 个轮次上，人工标注为 A 、 B 、 C 、 O 的数量分别为 53 、 28 、 46 与 873 个，条件 G5-R-I 的宏平均 F1 为 0.93 ，高于条件 G5N-R-NI 的 0.55 ，而条件 G5-NR-I 与 G5M-NR-I 的中断回避率（Interruption Avoidance Rate，IAR）均达 1.0 ，高于条件 G5N-R-NI 的 0.57 。规则有无形成鲜明权衡，不提供规则时 O 预测平均占比仅为 2% ，提供规则时回升至平均 59% ，对应平均 IAR 从 0.99 降至 0.76 ，平均发言机会检出率（Speaking Opportunity Detection Rate，SODR）从 0.02 升至 0.64 ，该方向以正文为准而附录汇总表 SODR 行标注相反。本研究不涉及语音质量听感评测，故无人工主观 MOS 与 UTMOS 等神经代理指标的比较，模型增大提升判别力而 IAR 与 SODR 无实质差异，单帧静态图像总体无清晰增益且在案例中既有纠正也有误导，推理时延与成本原文未实测。

**适用边界与深读导览：** 上述结论仅在日语熟人三人讨论、单帧结束时刻图像与 GPT-5 系列 API 的条件下成立，未覆盖动态视线变化、多帧时序信息、其他多模态大语言模型与其他语言或陌生人场景，也未验证实时对话系统中的打断代价与部署约束。欲深究 Sacks 规则形式化、提示三步流程与三项指标定义可查阅方法概述和架构，欲核对 12 种条件的完整数值与三个代表性案例的推理差异可查阅实验结果。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 三人讨论中下一位说话人为何不能直接拿实际接话者当答案

近年双人对话研究进展显著，大语言模型已能生成连贯且贴合语境的回复，使自然实用的人机双人交互成为可能。但当参与者增至 3 人，多方对话依然挑战重重，其中轮次转换是基础却困难的环节。与双人不同，3 人场景要求模型推断复杂的社会与多模态线索，例如视线方向、身体朝向与指称行为，否则容易出现话语重叠、不自然停顿或流程混乱。本文聚焦 3 人自由讨论，追问模型尺寸、显式规则知识与视觉信息的作用。

对话分析的经典框架来自萨克斯等人 1974 年的论述，轮次在转换关联位置通过 3 条规则递归适用。规则甲是当前说话人选择下一位，被选者有权利且有义务接话，其余人不再拥有同等权利。规则乙是无人被选时允许自我选择，先开口者获得轮次。规则丙是无人自选时当前说话人可以继续。只有规则甲适用时，下一位说话人才原则上可预测，若同时指向多人或未指明对象，实际由谁接话本质上难以确定。

由此带来标注上的关键区分。论文不把实际观察到的下一位说话人直接当作标准答案，而是由熟悉会话分析的第一作者依据是否明确指称特定听众并做出邻接对的第一部分来判定。若以名字、视线或手势指向某人并提出问题、建议等期待回应的行为，则标为 A、B 或 C，否则标为 O，表示无法从线索唯一确定。这种定义使 O 成为多数类，也为后文两项指标的相反走向埋下伏笔。

已有路线各有物理与统计瓶颈。早期凝视研究发现说话结束时看向听众可示意交接，相关工作用视线加语音特征训练支持向量机证实视线确有贡献。面向机器人的研究在嘈杂真实环境中融合语音、头部姿态与物体操作来管理轮次。近年有用注视、头部、身体与语音的多模态变换器报告超过 80% 的转换预测准确率，也有仅用声学扩展语音活动投射到 3 人日语对话的工作。井上等人仅给 GPT-4o 文字记录时准确率仅略高于随机，说明纯文字与简单提示难以捕捉指称结构。

在上述背景下，本文明确提出三点考察目标。第一是模型尺寸是否影响预测准确率，第二是模型能否在不给显式轮次转换知识时做出合理预测，第三是视觉信息是否提升准确率。贡献相应为检验前沿多模态大语言模型的轮次预测能力、量化尺寸效应，以及判断显式规则与视觉输入的增益。本文的教学例子是 3 人首都迁移讨论，后文将用同一例子贯穿输入形态与成败对比。

### 从完整历史文本加单帧截图到字典式预测的十二条件流程

与仅给文字记录并用简单提示的已有做法相比，本文保留完整对话历史作为核心依据，新增两处显式设计。一是允许直接输入图像，由模型自行挑选显著线索，而非事先把视线转写为文字。二是把轮次转换规则写进提示，要求先判指称对象再判对话行为。信号规格方面，文字来自人工转写后合并的轮次，已剔除伴随性应答与笑声，图像为轮次结束时刻的截图，分辨率为 1,920 × 480 的 3 路拼接画面，提示与对话实际均使用日语。

端到端流程可用一次具体输入贯穿理解。以首都迁移讨论 session-02-city_8 为例，输入为第 01 至 09 行的全部历史，末句为 B 那句征求意见的话，记为当前轮。若在图像条件，则附上一张 3 人画面，若在规则条件，则附上三步推理要求。模型经 Python 接口调用 GPT-5、GPT-5-mini 或 GPT-5-nano 三档之一，输出限定为字典对象，包含下一位说话人 A、B、C 或 O 以及 30 个词以内的理由。条件记法为模型减规则减图像，例如 G5-R-I 表示最大模型加规则加图像，共 3 × 2 × 2 合计 12 种。

要理解图像条件的输入质量，先看帝谈语料的录制与截图形态。下段占位图为论文原图，展示 3 位参与者各自正对镜头的拼接画面，有助于判断模型实际能看到的视线与姿态信息量，以及背景干扰的程度。阅读时注意三格画面的并排关系与下方时间戳，这种每人一机再拼接的方式决定了单帧的视野边界，也是后文讨论动态缺失的基础。

[![原论文 Figure 1：A snapshot from TEIDAN corpus](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-1.png)

*论文图 1：帝谈语料三路拼接截图示例，呈现三位参与者正对镜头的画面与室内背景（原论文 Figure 1）。*

原图像素为左右并排的三格画面，左侧为身穿棕色毛衣的长发参与者，中间为身穿黑色上衣的参与者，右侧为身穿条纹衫加灰色外套的参与者，背景为室内隔断、窗帘与绿植，下方带有 2023 年时间戳。这种每人一机正对拍摄再横向拼接的方式保留了面部朝向与上身姿态，但作为静态单帧无法呈现视线转移与身体移动的动态过程，也包含大量与指称无关的背景细节，这正是后文图像总体无效的直观伏笔。

推理与部署路径方面，论文未训练任何模型，全部为冻结推理加提示驱动。温度参数被固定为 1，未做进一步调节，其余参数保持默认，文本以用户角色传入，图像经 Base64 编码后以图像地址形式传入。GPT-5 系列被描述为内建推理过程的推理模型，无需在提示中要求逐步思考。这种设计使复现只依赖提示词与接口调用，但延迟、吞吐与显存等部署开销完全取决于闭源接口，原文未披露实测数值。

### 轮次转换规则提示与人工标注如何定义可预测与不可预测

规则甲的适用需要两个要素同时成立。一是指称特定参与者，可通过名字、话语衔接、对先前话语的回应修补、礼貌用语以及视线、手势或物体使用来体现。二是做出期待回应的对话行为，类似邻接对的第一部分，例如信息索取、确认请求、邀请、提议或命令等。若两者兼备，被指称者即为下一位说话人。若指称不明、面向全体或行为不期待特定回应，则判为 O，表示无法确定。这种先判对象再判行为的两步逻辑，直接对应提示词中的第一步与第二步。

标注落到 1,000 个样本上。语料原本共 3,121 轮，来自 12 个组别各 3 场不同话题的讨论，话题含首都迁移、荒岛物品、旅行与户外选择等，总时长为 3 小时 38 分 27 秒，平均每场 6 分 04 秒，平均 86.7 轮。因时间所限随机抽取 1,000 轮，并提前剔除每场最后一轮。结果为 A 53 例、B 28 例、C 46 例、O 873 例，O 占比为 87.3%。作为对照，江本等人 2020 年报告当前说话人选择占 21.2%，自我选择占 78.8%，本文 O 更高，作者解释为面向达成共识的群体讨论中大量话语面向全体而非个人。

提示词分三块组织。第一块为任务与格式，说明 3 人代号、历史输入与输出要求，若可确定则答 A、B 或 C，否则答 O，并附 30 个词以内的理由，实际以日语书写。第二块仅在图像条件出现，写明从右至左依次为 A、B 与 C，以及从各自视角看左右关系，要求结合视线、手势与身体朝向判断。第三块仅在规则条件出现，要求按指称分析、对话行为分析与下一位估计三步执行，并给出信息提供、请求、接受、拒绝与反馈等行为示例，若被指称且期待回应则选被指称者，否则选 O。

评测指标围绕对话系统的两种失败来定义。设真实标签为 A、B、C 或 O，预测同样四选一，记特定人集合为 A、B 与 C。打断避免率统计真实为特定人时预测仍为特定人的比例，不计是否找对具体是哪一位，越高越不易打断他人。发言机会检出率统计真实为 O 时预测仍为 O 的比例，越高越能保住系统主动发言的机会。宏观平均 F1 只在真实为特定人的子集上计算 A、B 与 C 各自的精确率与召回率再平均，用于衡量区分具体是谁的能力。三者方向均为越高越好，但前两者存在此消彼长的压力。

### 十二条件下区分准确率随尺寸上升而打断与机会指标分化

评测协议与公平性前提集中在此。同一 1,000 个标注样本在 12 种条件下分别测试，仅改变模型尺寸、是否给规则与是否给图像三因素，其他输入与输出格式保持一致。O 占比高达 87.3% 使数据高度不平衡，宏观平均 F1 只看少数特定人子集，而另两项指标分别看特定人与 O 子集，因此不能只看单一数字。所有模型均为冻结推理，无额外训练，温度固定，比较的是提示与输入条件而非训练量差异。

下图为论文原图的 12 条件得分总览，左侧、中部与右侧分别对应宏观平均 F1、打断避免率与发言机会检出率，上下 3 组对应大、中、小 3 种模型，颜色与花纹区分规则与图像，阅读时先对照横轴 0.0 至 1.0 与图例再看长短，才能看清红蓝反转与尺寸梯度的差异。蓝色表示有规则，红色表示无规则，斜线花纹表示有图像，圆点花纹表示无图像。

[![原论文 Figure 2：Evaluation scores for each condition Blue indicates the presence of turn-taking rules, and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-2.png)

*论文图 2：十二条件三指标得分总览，颜色区分规则有无，花纹区分图像有无（原论文 Figure 2）。*

像素显示三列走向明显不同。宏观平均 F1 列中，最长条为 G5-R-I 的 93%，最短条为 G5N-R-NI 的 55%，同尺寸内 4 条长度接近。打断避免率列中，红色无规则条普遍接近 1.0，其中 G5M-NR-I 与 G5-NR-I 均达 100%，而蓝色有规则条明显偏短，最短为 G5N-R-NI 的 57%。发言机会检出率列则反转，蓝色有规则条较长，最长为 G5-R-NI 的 86%，红色无规则条几乎贴零，最短为 G5-NR-I 的 0.1%，附录显示 G5M-NR-I 同为 0.1%，属并列最低。

结合数值看公平性，尺寸效应只体现在区分能力上，大模型在特定人子集内更能找对具体是谁，而规则与图像对该列影响不大。另两列则几乎不受尺寸与图像左右，主要随规则翻转。这种在同一批样本上用三项互补指标交叉核对的设计，使后文对偏置的判断不是单指标偶然，而是定义上此长彼消的系统行为，但单帧图像与高度偏斜的标签分布仍是结论成立的重要前提。

### 规则提示以打断率为代价换回发言机会而单帧图像总体无明确增益

按变量平均后，规则的相反作用最为清晰。原文报告无规则时打断避免率平均为 99%，有规则时降至 76%，发言机会检出率则反向，有规则时平均为 64%，无规则时仅为 2%。模型尺寸与图像有无在后两项上无实质差异，图像有无在宏观平均 F1 上也几乎相同。预测中 O 的占比平均在有规则时为 59%，无规则时仅为 2%，远低于真实的 87.3%，说明不给规则时模型即使面对无法确定的场合也倾向于指名一位参与者，呈现过度指名单一者的偏置，显式规则缓解了该偏置。

下图为按变量水平平均的三项指标柱状图，附标准误差线，绿色为尺寸，蓝色为规则，红色为图像，阅读时注意中间与右侧两图的蓝色高低反转，以及绿色在左侧的单调上升而在右侧误差线很大的形态，这直接对应规则主导而图像无效的判断。3 个子图从左至右依次为宏观平均 F1、打断避免率与发言机会检出率，纵轴均为 0.0 至 1.0。

[![原论文 Figure 3：Average macro-F1, IAR, and SODR at each variable level](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/cbb68fa5b3f4/figure-3.png)

*论文图 3：按模型尺寸、规则有无与图像有无平均的三指标柱状图，附标准误差线（原论文 Figure 3）。*

像素中左图宏观平均 F1 的三根绿色柱随尺寸单调升高，中等蓝色两柱与红色两柱高度接近。中图打断避免率的无规则蓝色柱接近顶部且误差线极短，有规则柱明显更矮。右图发言机会检出率则完全反转，有规则柱高耸，无规则柱几乎为零，绿色三柱与红色两柱虽有高低但误差线很长，说明尺寸与图像的差异不稳定。附录汇总表中 R 与 NR 在发言机会检出率平均值一栏与正文及本图像素相反，原文如此报告，存在字面算术出入，原文未解释，此处以正文与像素为准叙述趋势。

个案分析解释了图像为何总体无效。首都迁移例 session-02-city_8 中，B 末句在文字上未指名，按无图像规则条件模型判为面向全体的 O，但实际 B 以视线与手势指向 A 并由 A 接话，加图像后模型能结合视线正确指向 A。荒岛例 session-01-island_40 则相反，A 的附和本不期待特定回应，无图像时正确判 O，加图像后模型过度解读 A 看向 C 的视线而误判 C。第三例 session-01-city_3 中 A 的理解性应答本应判 O，实际却由 B 接话后追问 C，无规则模型虽误判 C，却与参与者期待 C 发言的直觉一致，说明语言语境已能推断合理人选，但要贴合实际转换仍需规则约束。

### 仅 GPT-5 系列与单帧截图限制下的推广边界与选型建议

假设边界首先来自模型与输入。实验仅用 GPT-5 系列三档，未验证其他多模态大语言模型是否呈现相同趋势，作者点名的未来方向包括 Gemini 2.5 与 Qwen2-VL 等。输入仅为轮次结束时刻的一张静态截图，无法捕捉视线转移、身体移动与时机等动态线索，且画面信息量大，可能淹没真正相关的指称信号。语料为日语熟人 3 人面向共识的自由讨论，O 高达 87.3%，结论是否适用于争论、会议或陌生人组合仍未经验证。

复现核对前提需区分三件事。数据方面，帝谈语料 12 个组别各 3 场话题，话题含首都迁移、荒岛物品、旅行与东京到大阪出行等，每场约 5 分至 7 分，总计与平均值在附录有逐场统计，标注为 1,000 个随机样本。方法方面，附录给出完整提示词，推理经接口调用、温度固定为 1、其余默认、输出为字典对象，属无模型训练阶段的纯冻结推理。公开状态方面，原文未披露代码、权重、数据下载与可直接运行的系统，本次也未确认作者资源当前可用，不应视为已公开。

工程选型建议取决于对话场景对两类错误的容忍。若处于不允许打断的场合，高打断避免率更重要，无规则条件看似占优，但发言机会检出率仅约 2%，系统几乎拿不到主动发言机会。若希望系统积极参与，高发言机会检出率更重要，应显式加入规则知识，接受打断避免率回落至约 76% 的代价。区分具体是谁的能力则优先选大模型，单帧图像不应作为稳定增益手段，未来可试多帧连续输入、文本形式的视线信息或遮挡无关区域以减少干扰。

未来工作在论文中指向 2 个方向。一是换用其他模型验证趋势是否稳定，二是改进视觉输入，例如纳入多帧以反映视线动态，或反向减少信息量，把视线转写为文字或遮挡无关区域，帮助模型聚焦真正相关的指称线索。这些设想尚未在本研究中验证，也未给出延迟与精度的量化比较，因此不能视为已成立的改进结论。

放在一起看，模型仅凭语言语境与内化知识即可推断看似合理的人选，且越大越准，但在无法唯一确定时仍倾向于过度指名一位。有规则约束后，过度指名得到缓解，O 的预测占比回升，发言机会得以保留。视觉有时成全、有时误导，总体无明确效果。这一结论成立的具体前提是 3 人共识讨论、高度偏斜的标签、静态单帧与冻结提示推理，换条件后需重新评估，不宜直接推广为多模态必然有用的一般判断。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率、帧率与码率原文未披露，语音为每人独立领夹麦克风录制，图像为轮次结束时刻截图，分辨率为 1,920 × 480 的三路拼接画面，原文未给出帧率、前瞻延迟与 RTF 实测值
- **训练与评测数据**：无模型训练阶段，评测用帝谈语料 12 个组别各 3 场日语自由讨论，总时长 3 小时 38 分 27 秒，共 3,121 轮，随机抽取 1,000 轮标注，标签为 A 53 例、B 28 例、C 46 例与 O 873 例
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时，无训练过程，仅经 Python 接口调用 GPT-5、GPT-5-mini 与 GPT-5-nano 三档冻结模型完成推理，推理硬件细节原文未披露
- **核心超参数与配置**：温度固定为 1，其余参数保持默认，输出限定为包含预测标签与 30 个词以内理由的字典对象，提示分任务格式、图像说明与规则步骤三部分，实际以日语书写
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐、显存或参数量，仅提及小模型推理更快更实用，未给出延迟或显存实测开销，部署代价无法从原文量化
- **开源产物与协议状态**：原文未说明代码、权重、数据下载与可直接运行系统的公开状态，本次也未确认作者资源当前可用，不应视为已公开，附录仅提供提示词与统计数值
- **附录与补充材料要点**：附录含 36 场会话时长与轮次统计、完整提示词、日英话题说明、12 种条件详细数值与变量平均值及标准误差，并存在 R 与 NR 在发言机会检出率上与正文相反的字面出入

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.6/10** | 创新 6.2/10 | 技术严谨 7.0/10 | 实验充分 6.0/10 | 清晰度 5.5/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.8`
- 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.8/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.8.pdf)
- DOI：`10.18653/v1/2026.iwsds-1.8`
- Track：IWSDS 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：基于Sacks轮次转换规则形式化可判定性标注与IAR/SODR双率指标分工，定义清晰且直指打断与机会权衡。

- 核心优势：3×2×2共12种条件完整对照规模规则与图像，均值标准误齐备，规模效应与规则权衡结果可逐格核对。

- 主要短板：标注仅由第一作者完成且未报告一致性，1000样本中具体人仅127例且无显著性检验与外部强基线对比。

- 主要短板：附录汇总表SODR均值行R与NR方向与正文图3文字相反且未解释，存在表文口径矛盾需以正文为准。

- 主要短板：仅离线全量历史单帧推理且未实测推理时延成本与实时打断代价，未验证部署约束与用户效益。

---

[← 返回 iwsds-2026 论文汇总](/audio-research-portal/posts/conference-iwsds-2026/)
