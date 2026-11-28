---
title: "RealDESED: A Real-World Domestic Sound Event Detection Benchmark"
date: 2026-11-27
draft: false
description: "针对合成与网络爬取基准与真实家庭部署脱节的问题， RealDESED 以 5,710 个真实家庭录音加多标注者评审标签与丰富元数据构建基准， ATST-F 基线经加权软标签与 cSEBBs 后处理在测试集达到宏平均 PSDS1 为 0.731 ，代价是类别与设备分布不均及长时推理与人工评审开销。"
tags: ["基准测试", "数据集", "数据集构建", "音频事件检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "真实家庭录音如何支撑声音事件检测基准"
paper_digest_original_title: "RealDESED: A Real-World Domestic Sound Event Detection Benchmark"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-40"
paper_digest_workbench_source_sha256: "c179cc1f0a0839e573ad82177ee621c09a1105649cda32076e94683e591d5044"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Schmid_40.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频事件检测"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对合成与网络爬取基准与真实家庭部署脱节的问题， RealDESED 以 5,710 个真实家庭录音加多标注者评审标签与丰富元数据构建基准， ATST-F 基线经加权软标签与 cSEBBs 后处理在测试集达到宏平均 PSDS1 为 0.731 ，代价是类别与设备分布不均及长时推理与人工评审开销。"
paper_digest_reader_sections: [{"heading":"家庭声音事件检测为何缺少真实可比的强标注基准","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"652 人在家采集与多轮标注如何构成 5,710 个场景","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"多标注者分歧应保留为硬投票还是软帧目标","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"10 s 窗的基线如何训练推理与平滑输出","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"聚合后处理与录制条件如何改变 PSDS 分数","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论在何种不均与缺失验证下成立及如何复现","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Florian Schmid"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Paul Primus"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Alexander Fichtinger"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Tara Jadidi"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Tobias Morocutti"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria","LIT Artificial Intelligence Lab, Linz, Austria"],"name":"Gerhard Widmer"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"0c371f4e2e0dc0d91604e5bb07cf114b9d5742abb8433511d2ef9e88f8474393","url":"/audio-research-portal/client/papers/2026-11-27/conference-a1011fecec5290722037a791/citation.bib"},"citation.json":{"sha256":"d547a24d67f4bd437d38147a127b9dcab9eb5740f3ff27d7f0cecf2925f3d422","url":"/audio-research-portal/client/papers/2026-11-27/conference-a1011fecec5290722037a791/citation.json"},"citation.ris":{"sha256":"df05db399ade183c6845d742108baab9c90d322b6467ec5e3f8b2cc5a887bafb","url":"/audio-research-portal/client/papers/2026-11-27/conference-a1011fecec5290722037a791/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b09df14f258ddf22a88ebb7c07cba670b71d315406f9db1641f1b29c2f8e9aa2","url":"/audio-research-portal/client/papers/2026-11-27/conference-a1011fecec5290722037a791/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-40"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Schmid_40.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "3805affb017a20155fe758c3ce8c568e745ceb0aee55242a7b67211d4818f645"
paper_digest_api_reader_plan_sha256: "eb97414509a2f73ad4a123225dc54744d8cb55185b5b3c5de79b0d35be816dc8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cbd25300e36f201ada0c07bcd35c256ce78db40b7e4aa1569f52ff354a82db10"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1b7a202cc28241d4c5fabb7f56a9526ed2cd8cec0a3ecc827e881c4f7ab0cca1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c1f949ddf71019380f26847ae3994a3d62a5682049b29b27557a73ce7d980d42"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "6d234c77da0002dc12a4775725b9ad132d62d4d43f2f3bef7b1fba0061a2a878"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 真实家庭录音如何支撑声音事件检测基准

> 英文题目：*RealDESED: A Real-World Domestic Sound Event Detection Benchmark*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-40`
> Track：P3-11




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Schmid_40.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-research-portal/papers/?concept=task.event-detection)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 6.7/10 | 技术严谨 7.2/10 | 实验充分 7.6/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.2/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Florian Schmid：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Paul Primus：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Alexander Fichtinger：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Tara Jadidi：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Tobias Morocutti：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Gerhard Widmer：Institute of Computational Perception, Johannes Kepler University Linz, Austria；LIT Artificial Intelligence Lab, Linz, Austria

## 📌 核心摘要

**问题与瓶颈：** 声音事件检测需要从家庭录音中判断 15 类常见声音是否出现并给出起止边界，输入为消费级设备采集的 15 s 至 35 s 场景音频，输出为每类事件的时域区间集合。现有基准存在三类失配：AudioSet Strong 规模虽大但为网络爬取音频，录制条件不可控；DESED 与 UrbanSED 依赖合成声景，训练与真实部署之间存在域差距；MAESTRO Real 虽为真实长录音但强标签由弱标签推断，时间粒度受限。此外，事件起止与连续性判断主观性强，固定 10 s 切片限制上下文，单标注者标签难以支撑可靠评测。

**核心思路与方法架构：** 与最接近的 DESED 路线保留合成训练加网络评测的做法不同，本文增量在于全部采用真实家庭采集并配套多标注者加复核与元数据，用于同分布训练与评测。沿一条平均 23.86 s 的录音追踪，系统在训练时随机截取 10 s 片段并以 25 Hz 生成帧级二值标签，经帧级音频频谱 Transformer（frame-level Audio Spectrogram Transformer，ATST-F）输出每帧每类存在概率，ATST-F 先在 AudioSet Strong 上预训练再在 RealDESED 上微调。推理时对超长录音采用重叠滑动窗加三角加权平均合并，再经中值滤波或声音事件边界框（sound event bounding boxes，cSEBBs）得到事件区间，默认窗长 10 s、跳长 5 s、三角下限 0.3、中值窗 360 ms，论文未说明是否为流式因果或实时系统。数据集共 5,710 个录音、37.85 小时，由 652 名参与者采集，按采集者划分 3,704、999 与 1,007 条为训练、验证与测试集，并提供设备、放置、环境与场景描述文本。

**关键实验与核心代价：** 在 RealDESED 测试集上，以多音场景检测分数（Polyphonic Sound Detection Score，PSDS）为指标，固定单标注者训练的 PSDS1 宏平均为 0.675、PSDS1 为 0.503，低于加权软标签加复核的 0.697 和 0.533，方向均为越高越好。后处理对比的正文明确给出 PSDS1 宏平均从原始预测的 0.662 经中值滤波的 0.693 变为 cSEBBs 的 0.731，同样越高越好。长窗推理中平均合并的 0.731 高于最大合并的 0.721，三角下限 0.3 的 0.731 高于均匀平均的 0.726，跳长从 5 s 缩至 2.5 s 仅从 0.731 变为 0.736，收益有限而计算量明显增加。持续性事件如真空吸尘器与流水检测可靠，短促的灯开关与门开关最困难，评测使用 PSDS 客观指标体系。

**适用边界与深读导览：** 结论成立于 15 类家庭声音、无语音内容、手机采集占比 91.80 %、厨房与卧室走廊为主的条件下，静态与移动放置及安卓与苹果设备间的差异分析仅为分组对比，论文自身指出环境特异事件分布可能混杂，需进一步解耦，未验证跨域泛化与部署鲁棒性。想深究加权软标签的 Dice 一致性公式与三角加权长窗合并细节，可查阅下方方法概述和架构与实验结果中的聚合与推理对照。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/fschmid56/RealDESED> — 链接可访问（HTTP 200）

- 论文所列链接：<https://zenodo.org/records/20056072> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 家庭声音事件检测为何缺少真实可比的强标注基准

声音事件检测的目标是在连续录音中同时给出事件类别与起止边界，可支撑安防监控、智能家居与辅助技术以及健康监测等应用。对刚入门的研究者而言，关键是把检测看成帧级别的多标签分类加时序后处理，而非单标签分类。阈值无关分数 PSDS （声音事件检测分数）是常用评价，它在不同工作点下综合统计性能，避免单阈值调参带来的偶然性。真实家庭场景进一步要求系统容忍设备差异、背景噪声与事件重叠，这正是基准设计需要回答的问题。

已有基准在规模真实性与标注质量之间各有侧重。大规模强标注基准 AudioSet Strong 约有 100,000 个网络爬取录音，覆盖 447 个声音类别，但对录制条件缺乏控制。家庭领域常用基准 DESED 结合合成训练声景与强标注网络爬取录音做评测，城市领域的 UrbanSED 则完全依赖合成声景与自动导出强标签。 MAESTRO Real 提供真实长录音，但其强标签由人工弱标签推断得到，时间粒度受限。多数数据集还采用固定 10 s （秒）片段，限制了时间上下文。

这些选择带来具体的物理与统计瓶颈。网络爬取录音混杂多种信道与剪辑风格，难以反映同一家庭内的设备摆位与房间混响。合成声景虽然标签精确，却与真实录音存在域差异，混响、设备频率响应与自然共现关系都难以仿真。由弱标签推断强标签会模糊起止边界，而边界本身具有主观性，事件是否连续、何处算停顿，不同听者判断并不一致。固定短窗还会切断复合动作序列，例如进门、放钥匙、开灯等连续行为。

RealDESED 的定位是直接在目标环境中采集可比的强标注基准。它包含 5,710 个真实家庭录音，由 652 名参与者在各自家中录制，每段 15 s （秒）至 35 s （秒），覆盖 15 个常见家庭类别。每个录音由多名标注者独立标注时间边界，验证集 999 个与测试集 1,007 个全部经过评审，保证评测可靠。训练、验证与测试按采集者 ID 划分，避免同一家庭环境泄漏到不同划分。论文建立的 ATST-F 基线在测试集达到宏平均 PSDS1 为 0.731 ，为后续研究提供起点。

### 652 人在家采集与多轮标注如何构成 5,710 个场景

采集阶段强调真实多样的家庭声景。每名参与者被要求采集 8 个至 10 个场景，每段 15 s （秒）至 35 s （秒），使用手机、平板、便携麦克风等消费级设备，提交后统一转为波形格式。采集指南鼓励覆盖目标类别、多事件与复调场景，允许交通噪声、电器嗡鸣、椅子移动等自然背景声，只要目标事件清晰可闻。设备摆位分为静态放置与移动携带两种，前者放在台面上，后者由采集者随身携带。为保护隐私，含语音的录音不被允许。每个录音附带结构化元数据，包括可闻目标与非目标标签、设备、摆位、环境与一段自由文本场景描述，许可为 CC0 许可或 CC-BY 许可。

标注阶段由 645 名标注者使用 Label Studio Enterprise 平台完成。每人至少标注 20 个片段，包含自己的录音与随机抽取的其他人录音。界面同时显示波形、时间对齐频谱与采集者提供的元数据，但元数据仅作上下文参考，因为可能不完整或不准确。标注者需标出 15 个目标类别的所有可闻事件，包括门铃、咖啡机、餐具、门开关、脚步声、键盘打字、钥匙链、电灯开关、微波炉、电话铃声、流水、冲厕所、吸尘器、衣柜抽屉开关、窗户开关，允许重叠，同一类别若被可感知的停顿隔开则标为多个区间，非目标事件忽略。全部共产生 64,430 个提交标注，平均每文件有 2.45 名标注者，每对文件与标注者平均标出 4.60 个事件区间。

评审阶段是对标注的质量控制。每名评审者负责 5 个至 10 个已标注录音，每个被评审录音至少有两个独立标注，便于对比分歧。评审者检查音频、元数据、波形、频谱与提交标注，核对类别、边界与完整性，必要时修正标签与时间区间，但不要求所有标注的起止完全一致，以容纳感知模糊。约 300 个低质量评审因标注间仍有较大分歧被识别并重新分配。划分上，5,710 个文件按采集者 ID 分为训练 3,704 个、验证 999 个、测试 1,007 个，验证与测试全部评审，训练中有 1,108 个文件评审，占训练数据的 29.91% 。

数据集的统计特征反映真实家庭的丰富性与不均衡。5,710 个录音总计 37.85 小时，时长范围 12.03 s （秒）至 40.64 s （秒），平均 23.86 s （秒）。创建者报告的片段级标签显示每文件含 1 个至 5 个目标声，平均 2.80 个，脚步声出现于 2,686 个文件，门开关出现于 1,791 个文件，门铃 430 个，咖啡机 312 个。非目标声多样性高，2,849 个录音含至少一个非目标标签，占 49.89% ，归一化后有 1,734 种标签，平均每文件 0.72 个，衣物摩擦 215 次，椅子移动 142 次。场景描述平均 24.56 个词。环境字符串 161 种归并为 65 类，厨房 1,686 个，卧室 1,091 个，走廊 1,071 个。设备字符串 523 种归并为 342 种标签，手机占 5,242 个，比例为 91.80% ，静态 3,086 个，移动 2,624 个。标注与元数据的对应上，16,008 个文件与目标类配对中有 15,726 个至少被一个原始标注覆盖，占 98.24% ，另有 2,641 个标注事件超出元数据目标标签，占 64,430 个中的原文报告 4.99% ，原文如此报告，存在字面算术出入，原文未解释，影响 1,134 个文件，占 19.86% 。

### 多标注者分歧应保留为硬投票还是软帧目标

多标注者带来训练目标的聚合问题。验证与测试使用固定的评审后标签集做评测，训练则每个录音有多个原始标注，外加约三分之一文件的评审标注。若只取单个标注者，会浪费其他标注者的信息，也会把个人边界偏好当成真值。论文比较的实质增量是从单标注者随机选择，过渡到每轮重采样，再到硬投票与软平均，最后引入按标注者质量加权的软目标，并在部分数据上融合人工评审。帧级别标签在 25 Hz （赫兹）下生成，即每 1 s （秒）对应 25 帧，每帧对 15 个类别给出二值或软概率。

单标注者基线包括两种随机策略。固定随机是在训练前为每个录音选定一个标注，整个训练不变。按轮随机是每个训练轮次为每个录音重新采样一个标注，相当于用标注分歧做数据增强。硬聚合包括多数投票、交集与并集。多数投票逐帧保留多数人标为活动的部分，交集只保留所有人都标为活动的部分，并集保留任一人标为活动的部分。另有仅用采集者本人标注的策略。直觉上，交集偏保守，并集偏宽松，多数投票居中，但三者都把分歧坍缩为硬 0 或 1 ，丢失了不确定性信息。

软标签保留分歧为帧级别的平均活动率。均匀软标签把 N 名标注者的二值帧标签直接平均，某帧有 2 人标活动、一人标静默，则目标为约 0.667 ，模型被允许输出中间概率，而非被迫拟合硬边界。加权软标签进一步按标注者质量加权，质量分来自帧级别宏平均 Dice 一致性，即对每个活动类别计算 2 名标注者重叠面积占两者总面积的比例，再在类别与录音上平均。一名标注者与其他人的平均 Dice 越高，其权重越大，最终软标签为加权平均。指数 α 为 16 ，经验证集选择，意味着质量差异被显著放大，高一致性标注者主导目标，低一致性标注者的偶发边界被抑制。

融合评审标注的比较揭示自动加权的价值。多数投票加评审与加权软标签加评审分别用评审标签替换对应三分之一训练文件的原始标注，其余文件仍用原策略。评审对多数投票的提升大于对加权软标签的提升，说明加权本身已产生较高质量目标，与人工评审接近。整体上，有效利用多标注者使宏平均 PSDS1 从 .675 提升至 .697 ，其中按轮随机已明显优于固定随机与简单硬聚合，均匀软标签在 PSDS2 宏平均上表现突出，加权软标签在 PSDS1 上最优。这一对比的成立前提是训练与评测都使用真实同分布录音，且评测标签经过评审，否则分歧会被噪声淹没。

### 10 s 窗的基线如何训练推理与平滑输出

基线模型采用帧级别音频频谱 Transformer 即 ATST-F ，先在 AudioSet Strong 上预训练，再在 RealDESED 上微调。原文未披露采样率、频谱维度与模型隐层维度等信号规格，也未说明冻结与更新的层边界，表述为整体微调。训练从训练录音中随机裁剪 10 s （秒）片段，对应预训练模型的输入长度，不同轮次采样不同片段，输入预处理沿用原 ATST-F 设置。帧级别标签在 25 Hz （赫兹）下生成，因此每个 10 s （秒）片段对应 250 帧标签。优化使用 AdamW 优化器，峰值学习率为 4×10−5 ，余弦调度，配合 Mixup 与频率弯折增强，以二元交叉熵为损失。

以一个贯穿的 1 s （秒）样本理解张量流有助于看清各模块衔接。设该 1 s （秒）为某家庭厨房录音中的流水与餐具碰撞段，原文未披露采样率，仅说明已转为统一波形。训练时它作为 10 s （秒）裁剪窗中的十分之一进入模型，模型对窗内每一帧输出 15 个类别的活动概率，1 s （秒）对应 25 帧预测。推理时录音常长于 10 s （秒），例如平均 23.86 s （秒）的录音需用多个重叠 10 s （秒）窗覆盖，相邻窗步长默认为 5 s （秒），重叠区预测经三角加权平均合并，下限为 0.3 ，避免窗边缘不可靠预测主导结果。合并后的帧概率序列再经 360 ms （毫秒）中值滤波或 cSEBBs 事件边界框平滑，得到带起止的事件列表。未披露的维度包括频谱帧率、模型通道数与注意力头数，原文未给出，复现时需查阅 ATST-F 原文与公开实现。

长时推理的参数围绕聚合方式、加权形状与步长展开。平均聚合对重叠区取均值，最大聚合取最大值，前者更稳健，后者易被单窗误检拉高。三角加权下限为 1.0 时退化为均匀平均，下限为 0.0 时边缘权重可降至零，下限为 0.3 与 0.6 居中。步长越小，重叠越大，预测越平滑，但计算量随窗数增加。论文最终选择平均聚合、三角下限 0.3 与步长 5 s （秒），因为从 5 s （秒）降至 2.5 s （秒）的增益相对额外计算量较小，而增大至 7.5 s （秒）或 10.0 s （秒）则性能下降。

后处理负责把帧概率变为时间一致的事件。原始预测未经平滑，抖动多，宏平均 PSDS1 仅为 0.662 。按类中值滤波将宏平均 PSDS1 提升至 0.693 ，但逐类优化阈值与窗长未带来额外增益，反而有在验证集过拟合的迹象。 cSEBBs 通过更强的时序建模达到 0.731 ，因此被用于后续全部实验。类别差异明显，吸尘器、流水等持续事件较易检测，电灯开关、门开关等短时事件最具挑战， cSEBBs 对几乎所有类别都有提升，但短事件的绝对分数仍低，说明时序建模不能完全弥补样本稀少与边界模糊。

### 聚合后处理与录制条件如何改变 PSDS 分数

评测协议与公平性前提需要先交代。训练、验证与测试按采集者 ID 划分，保证同一家庭环境不跨划分，评测为离线全录音推理，非因果流式。性能使用 PSDS （声音事件检测分数）的 PSDS1 与 PSDS2 及其宏平均，标准 PSDS1 取 αCT 为 0 且 αST 为 1 ，宏平均对 15 个类别平均，避免大类主导。所有聚合对比均报告三次独立运行的均值与标准差，输入为 10 s （秒）窗，推理默认重叠窗平均聚合加三角下限 0.3 与步长 5 s （秒），后处理默认 360 ms （毫秒）中值滤波，仅在对应实验中变动单一因素。

#### 标签聚合的比较

标签聚合的趋势是按轮采样优于固定采样，软目标优于硬投票，加权优于均匀，评审增益在加权下变小。下表手写整理自原文完整 Table 1 ，列数遵循原表四列，数值为均值加减标准差，分数越高越好，箭头表示越大越优。表前说明已交代指标方向与三次运行统计口径，表后将结合具体数值解释收益与代价。

| 方法 | PSDS1-M↑ | PSDS1↑ | PSDS2-M↑ |
| --- | --- | --- | --- |
| 1 Random (Fixed) | .675 ± .003 | .503 ± .010 | .916 ± .002 |
| 2 Random (Epoch) | .692 ± .004 | .521 ± .002 | .933 ± .001 |
| 3 Majority | .688 ± .004 | .518 ± .004 | .924 ± .002 |
| 4 Intersection | .681 ± .007 | .511 ± .012 | .904 ± .001 |
| 5 Union | .673 ± .004 | .497 ± .002 | .925 ± .002 |
| 6 Collector | .682 ± .002 | .507 ± .002 | .920 ± .003 |
| 7 Uniform Soft | .690 ± .004 | .519 ± .005 | .933 ± .002 |
| 8 Weighted Soft (α=16) | .696 ± .007 | .532 ± .007 | .930 ± .003 |
| 9 Majority + Reviewed | .696 ± .006 | .533 ± .009 | .927 ± .001 |
| 10 Weighted + Reviewed | .697 ± .005 | .533 ± .004 | .929 ± .004 |

表后解释紧贴上表数值。固定随机基线宏平均 PSDS1 为 .675 ± .003 ，按轮随机提升至 .692 ± .004 ，多数投票为 .688 ，交集为 .681 ，并集最低为 .673 ，仅用采集者为 .682 ，说明简单硬聚合并未超越按轮采样。均匀软标签为 .690 ，加权软标签为 .696 ，融合评审后多数投票升至 .696 ，加权升至 .697 ，整体从 .675 到 .697 。 PSDS2 宏平均上均匀软标签与按轮随机同为 .933 ，为展示表中的最高值，加权为 .930 ，融合评审后略降至 .929 ，说明不同 PSDS 变体对边界宽松度敏感。代价是加权需计算全部标注者两两 Dice 并在验证集调 α ，评审需人工重审三分之一训练数据。

#### 后处理与长窗参数的取舍

后处理与长时窗的定量取舍来自原文 Table 2 与 Table 3 的文字总结。原始预测宏平均 PSDS1 为 0.662 ，中值滤波提升至 0.693 ， cSEBBs 进一步提升至 0.731 ，对应标准 PSDS1 从 0.487 经 0.528 至 0.573 ， PSDS2 宏平均从 0.875 经 0.903 至 0.925 ，三次运行平均。类别上持续事件如吸尘器与流水可靠，短时事件如电灯开关与门开关最难， cSEBBs 对几乎所有类别提升，但短事件绝对值仍低。长窗上平均聚合 0.731 优于最大聚合 0.721 ，三角下限 0.3 的 0.731 优于均匀平均 1.0 的 0.726 与下限 0.0 的 0.703 ，步长 2.5 s （秒）的 0.736 略高于步长 5 s （秒）的 0.731 ，但计算量近乎翻倍，步长 7.5 s （秒）降至 0.718 ，步长 10.0 s （秒）降至 0.711 。未胜出项明确，并集聚合、最大聚合与均匀加权在对应组内垫底，逐类优化中值滤波未带来增益。

#### 设备放置与环境分组的差异

下图导读帮助建立元数据分析的预期。原图为分组柱状图，横轴分为设备、摆位与环境 3 组，纵轴为宏平均 PSDS1 ，数值越高越好，纵轴从 0.675 截断至 0.775 ，需注意不是从零开始。3 组颜色不同，左侧蓝色为设备两柱，中部橙色为摆位两柱，右侧绿色为环境四柱，每柱顶端标注具体数值，均为三次运行平均。观察时应先看组内排序，再看跨组差距，并结合样本不均衡理解因果。

[![原论文 Figure 1：Macro-averaged PSDS1 over three runs grouped by recording device, device placement, and recording…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/087f9093a35d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/087f9093a35d/figure-1.png)

*论文图 1：按设备品牌放置方式与房间类型分组的宏平均声音事件检测分数对比（原论文 Figure 1）。*

图后解释结合真实像素数值。设备组中 Android 为 0.723 ， iOS 为 0.741 ，苹果设备组高约 0.018 ，分析时排除了笔记本与其他异构设备。摆位组中静态放置为 0.718 ，移动携带为 0.739 ，移动组高约 0.021 。环境组中客厅为 0.703 ，走廊为 0.737 ，厨房为 0.733 ，卧室为 0.749 ，卧室最高，客厅最低，差距约 0.046 。像素显示纵轴为 PSDS1 Macro ，横轴标签分别为 Device 、 Placement 与 Environment ，柱数与分组完全对应，无例外反转。结论是录制条件确有实质影响，但环境差异与事件分布混杂，例如厨房多餐具流水，走廊多脚步门声，不能直接归因于混响或设备频率响应，需进一步做分层或域适应实验。

### 结论在何种不均与缺失验证下成立及如何复现

结论成立的前提是分布不均与标注主观性已被量化。类别不均衡显著，原始标注中脚步声 11,597 个，门开关 7,978 个，而咖啡机 1,140 个，吸尘器 1,278 个，文件级标签同样是脚步声 2,686 个最多，咖啡机 312 个最少。设备不均衡更突出，手机占 5,242 个，比例为 91.80% ，平板 173 个，笔记本 172 个，其他 123 个。环境不均衡中厨房 1,686 个，卧室 1,091 个，走廊 1,071 个，阳台车库楼梯各仅 1 个。评审将类别集 Jaccard 相似度从 0.875 提升至 0.994 ，时间交并比从 0.694 提升至 0.862 ，短标注覆盖率从 0.929 提升至 0.975 ，但仍非完美，起止模糊与复调重叠保留，51.07% 的文件与标注者对含不同类重叠，19.25% 的标注时间被两个以上事件覆盖，最多 4 重。

未验证的部署条件构成主要边界。录音平均 23.86 s （秒），虽长于固定 10 s （秒）片段，仍非数小时的真实居家连续流，含语音录音因隐私被排除，课程采集可能偏向配合度高的家庭与刻意设计的场景。评测为离线重叠窗推理，未验证因果流式、低延迟与小步长下的稳定性，也未报告 TTFA 、 RTF 、吞吐与显存占用，步长减半的计算代价仅定性讨论。评价仅用 PSDS 系列阈值无关分数，无人工听测 MOS 或 ABX 对照，也无神经代理分数交叉验证，方差仅来自三次运行的标准差，约 0.002 至 0.012 ，未报告置信区间与失效案例音频。元数据分组差异为相关性分析，设备、摆位与环境与事件先验纠缠，不能直接作为因果结论。

复现核对需区分三件事。论文声明公开数据集、基线实现与采集标注指南，并给出 GitHub 与 Zenodo 两个链接，第三方检查显示链接可达，但本次未确认为作者维护资源，代码是否完整、权重是否提供下载、系统是否可直接运行需以页面实际内容为准。数据划分按采集者 ID ，训练 3,704 个，验证 999 个，测试 1,007 个，验证与测试标签已评审，训练仅 29.91% 评审，复现聚合实验时需严格使用相同划分与固定评审测试集。超参包括 AdamW 、峰值学习率 4×10−5 、余弦调度、 Mixup 、频率弯折与二元交叉熵，加权指数 α 为 16 ，三角下限 0.3 ，步长 5 s （秒），中值窗 360 ms （毫秒），原文未披露采样率、频谱参数、硬件与训练时长，复现时需查阅 ATST-F 原文与链接页面补充。原文未提供试听页，无法对照听感与基线。

工程选型建议应权衡收益与代价。若训练数据有多标注者，优先尝试按轮随机采样，再试均匀软标签，最后在验证集上调加权指数，自动加权已接近人工评审效果，不必一开始就重审全部训练数据。若推理录音长于模型窗，优先用平均聚合加三角下限 0.3 与步长 5 s （秒），仅在算力允许且验证集确认增益时降至 2.5 s （秒）。后处理上，中值滤波是低成本起点， cSEBBs 在几乎所有类别上更优，但需在验证集上调参并警惕过拟合。若部署设备与环境单一，应收集同条件数据做域适应，因为 iOS 与 Android 、静态与移动、卧室与客厅的差距已达 0.018 至 0.046 ，且与事件分布相关，忽略元数据可能高估跨设备性能。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与频谱参数；训练随机裁剪 10 s （秒）片段，帧级别标签率为 25 Hz （赫兹），推理滑动窗口长 10 s （秒），默认步长 5 s （秒），三角加权下限为 0.3 ，中值滤波窗为 360 ms （毫秒）；延迟与 RTF 原文未披露
- **训练与评测数据**：RealDESED 共 5,710 个录音，总计 37.85 小时，平均 23.86 s （秒），范围 12.03 s （秒）至 40.64 s （秒）；652 名参与者在家中采集，645 名标注者共提交 64,430 个事件标注；按采集者 ID 划分，训练 3,704 个，验证 999 个，测试 1,007 个；覆盖 15 个家庭声音类别；验证与测试全部评审，训练约三分之一评审
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练步数耗时；仅说明使用 ATST-F 在 AudioSet Strong 上预训练后在 RealDESED 上微调；输入预处理沿用原 ATST-F 设置
- **核心超参数与配置**：AdamW 优化器，峰值学习率为 4×10−5 ，余弦调度， Mixup ，频率弯折，二元交叉熵损失；帧率为 25 Hz （赫兹）；加权软标签指数 α 为 16 ，经验证集选择；推理采用平均聚合与三角下限 0.3
- **推理速度与部署开销**：重叠 10 s （秒）窗平均聚合，步长 5 s （秒）降至 2.5 s （秒）有小幅增益但计算量明显增加；后处理比较中值滤波与 cSEBBs ；原文未披露 RTF 、延迟、吞吐与显存占用
- **开源产物与协议状态**：论文正文给出 GitHub 与 Zenodo 两个链接并声明公开数据集基线实现与采集标注指南，第三方检查显示链接可达，但本次未确认为作者维护资源，代码权重数据可直接运行状态需以链接页面实际内容为准
- **附录与补充材料要点**：原文未单独披露附录细节；参考文献覆盖安防监控智能家居健康监测与 AudioSet 、 DESED 、 UrbanSED 、 MAESTRO Real 及 ATST-F 预训练等工作；约 300 个低质量评审被重新分配等质量控制细节在正文说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 6.7/10 | 技术严谨 7.2/10 | 实验充分 7.6/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.2/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-40`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Schmid_40.pdf)
- Track：P3-11

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：按采集者ID划分训练验证测试集避免同环境泄漏并对验证测试全量复核保障评测可靠。

- 核心优势：十种聚合策略三次运行均值方差对照及后处理与长窗参数系统对比支撑基准结论。

- 核心优势：公开释放5710条真实家庭录音数据集、基线实现与完整采集标注协议支撑复用。

- 主要短板：基线仅用单一ATST-F且未与DESED或AudioSet Strong现有强系统同条件比较。

- 主要短板：未披露采样率声道归一化、批量轮数硬件时长及cSEBBs验证集优选具体取值。

- 主要短板：元数据可能不完整不准确且设备与环境分组差异未解耦事件分布混杂。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
