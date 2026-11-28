---
title: "Listen, Don’t Read: Repairing Chain-of-Thought Data for the DCASE 2026 Audio-Dependent QA Task"
date: 2026-11-27
draft: false
description: "针对官方思维链忽视选项与虚构文本的问题，本文以盲听拒绝采样再生可验证推理并结合监督微调与分组相对策略优化，在仅用官方数据与 100 亿参数以下模型下取得开发集 58.43% 与盲测集 50.60% 的首选项准确率，代价是推理裁判未提升准确率且训练慢约 2.4 倍、过长训练反而回落。"
tags: ["数据清洗", "知识蒸馏", "可验证奖励强化学习", "音频问答"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听而非读：为音频依赖问答修复思维链数据"
paper_digest_original_title: "Listen, Don’t Read: Repairing Chain-of-Thought Data for the DCASE 2026 Audio-Dependent QA Task"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-57"
paper_digest_workbench_source_sha256: "9b2affb96037034b57a426ba9c1b6dfc2b678126544be1303f4442f470faf250"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tathe_57.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对官方思维链忽视选项与虚构文本的问题，本文以盲听拒绝采样再生可验证推理并结合监督微调与分组相对策略优化，在仅用官方数据与 100 亿参数以下模型下取得开发集 58.43% 与盲测集 50.60% 的首选项准确率，代价是推理裁判未提升准确率且训练慢约 2.4 倍、过长训练反而回落。"
paper_digest_reader_sections: [{"heading":"只靠文字就能猜对的音频问答为何不算真听懂","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"先修数据再练模型的两阶段路线总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"从确定性审计到盲听教师级联的思维链再生","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三组监督微调对照与分组相对策略优化的奖励设计","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"说法变了与分数涨了来自不同环节：受控对比与代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"教师上限、时间戳残留与复现选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Illinois Urbana-Champaign, Urbana, IL, USA"],"name":"Aniket Tathe"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"74a6067d2f953ec1ca00e4188550f1d2c79cc8b019bd0550b5521014724da091","url":"/audio-research-portal/client/papers/2026-11-27/conference-c1db848cc70e14f1aceef5eb/citation.bib"},"citation.json":{"sha256":"2b90d593020f084126060d46d5d3ffbf3c235f4743b06145000341d890f2d25d","url":"/audio-research-portal/client/papers/2026-11-27/conference-c1db848cc70e14f1aceef5eb/citation.json"},"citation.ris":{"sha256":"65068d283f0a5899d1405122e83ca2c4e2c6fe6f7bce6dc8bdb51eb4a0ba1eea","url":"/audio-research-portal/client/papers/2026-11-27/conference-c1db848cc70e14f1aceef5eb/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"98ca87815c1fdb18040afa2e06b4e8a1971f4d9e24199e0882b341b9c54476e9","url":"/audio-research-portal/client/papers/2026-11-27/conference-c1db848cc70e14f1aceef5eb/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-57"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tathe_57.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "279e846c05abdc3736259045eb274a2083cc7ed0f9742aab11308e5d4fa10ed2"
paper_digest_api_reader_plan_sha256: "6d8a8a6b066943e1c39cc71e9055ccf4e4e8de310514624950fdd2db311c2e2f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4164655099313abb79187e7f0a6ed9cf1a7bba2500ee0cb67f0e1385ce774a62"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c7044721d820123e59c606e480f73ca320b0b846c28c672a7703d434092d7b7d"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9e80235a24dfbc5034e32242a343562796ad93843bede216349beaf379c62bc4"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.data-cleaning","label":"数据清洗"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "数据清洗"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 听而非读：为音频依赖问答修复思维链数据

> 英文题目：*Listen, Don’t Read: Repairing Chain-of-Thought Data for the DCASE 2026 Audio-Dependent QA Task*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-57`
> Track：P1-1



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tathe_57.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)
- **研究方法**：[数据清洗](/audio-research-portal/papers/?concept=method.data-cleaning)；[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[强化学习](/audio-research-portal/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-research-portal/papers/?concept=method.verifiable-reward-rl)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.4/10 | 技术严谨 7.9/10 | 实验充分 7.5/10 | 清晰度 5.5/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Aniket Tathe：University of Illinois Urbana-Champaign, Urbana, IL, USA

## 📌 核心摘要

**问题与瓶颈：** DCASE 2026 任务 5 音频依赖问答 (audio-dependent question answering, ADQA) 要求模型只听音频作答，输入为一段音频加一道四选一选择题，输出为首选选项，评测先经音频依赖过滤 (audio-dependency filtering, ADF) 剔除仅凭文字即可答对的题目，最终按 3,000 题的 ADQA-Bench 评测集首选准确率排序。官方训练语料 AudioMCQ-StrongAC-GeminiCoT 提供 19,480 个样本，每个样本附一条由 Gemini 3.1 Pro 生成的思维链 (chain-of-thought, CoT) 推理痕迹。作者的可复现审计发现两类系统性缺陷，68.5% 的痕迹从未提及至少一个错误选项，无法示范区分文本上皆可信的干扰项，10.1% 的痕迹引用推理时并不存在的书面文稿或转写文本，直接教授评测所惩罚的文本幻觉行为。后者几乎全部集中于语音类题目，1,977 条污染中有 1,919 条为语音，而时间戳等可疑形式因无法区分听见与抄写被有意放过。

**核心思路与方法架构：** 与最接近的直接微调基线相比，实质增量是只修数据不改模型，对 14,129 条问题痕迹做盲听拒绝采样再生，经听觉验证的逐选项排除式推理再做监督微调与强化学习。教师只见音频、问题与选项，不见正确答案与原痕迹，只有盲选命中金标才保留痕迹，且须逐一按原词点名每个选项并给出听觉 verdict，拒绝听觉不支持的选项，证据不足则标为不确定，含文稿词汇、超过 8 词的逐字引用、长度不在 30 词到 320 词之间或结尾缺少 `<answer>` 标签包裹的原文选项均被剔除。为控成本采用教师级联，Gemma-4-E4B-it 贪心首试 14,129 行并通过 8,948 行，不通过部分升级至更大的 Qwen3-Omni-30B-A3B-Thinking 经采样重试再挽回 3,935 行，合计通过 12,883 行，未通过的 1,246 行因答案条件再生被发现编造证据而整体丢弃，最终形成 18,234 条验证池。学生为 Qwen2.5-Omni-7B 的仅思考器配置，7.62B 语言骨干加 0.64B 音频编码器与 0.68B 视觉编码器共 8.93B 推理参数，视觉编码器在纯音频任务中未被使用，1.80B 发音模块被关闭，全参数微调无 LoRA，按音频身份 70% 与 30% 切分为 12,569 条监督微调集与 5,665 条 GRPO 集，GRPO 每题采样 8 个回答，以正确答案与格式给奖并用组内均值作基线更新。

**关键实验与核心代价：** 在 1,607 题的开发集上，未微调基线首选准确率为 53.08%，可解析率为 86%，而修复转写污染的 SFT-C 为 56.32%，三个 SFT 变体间两两 McNemar 检验 p 均大于 0.2 而无法区分高低。在其上加 300 步无裁判 GRPO 后开发集准确率升至 58.43%，高于其起点 SFT-C，作者报告比未微调基线高 5.35 个百分点，评测集为 50.60%，高于 SFT-C 的 48.67% 与 SFT-B 的 48.33%，在提交范围内开发集与评测集数值均为最高。修复不改变准确率但改变表述，引用不存在文稿的回答在评测集从 6.9% 降至 0.6%，开发集从 7.1% 降至 0.6%，McNemar 检验 p 小于 1e-30，而微调本身将可解析率从 86% 带到 96% 到 100%，基线仅 57% 含规范标签。GRPO 平均带来约 1.6 个百分点的提升，两种初始化平均相差 0.2 个百分点而随种子翻转，有裁判的 57.31% 开发集与 49.83% 评测集均低于无裁判且在种子波动内，训练慢 2.4 倍，600 步时两路均回落，事后 DAPO 与更严裁判均未超过 58.43% 的峰值。

**适用边界与深读导览：** 上述结论仅在只用官方 19,480 条、不引入外部数据与模型、10B 以下轻量赛道、贪心解码与开发集选点的条件下成立，开发集到评测集低约 7 到 8 个百分点，时间戳残留污染、更强教师能否转化为准确率以及音频感知的裁判仍未解决。任务指标为首选准确率与可解析率，未设人工主观评测，也未提供在线演示。欲深究确定性审计正则、拒绝采样过滤与奖励公式及消融稳定性，可查阅下方方法概述与实验结果章节的对照表与分步说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只靠文字就能猜对的音频问答为何不算真听懂

大型音频语言模型在回答语音、声音与音乐问题时，常能借助语言先验猜中答案，而非真正听见音频中的证据。若模型凭常见叙述者画像猜测老年男性，或凭文字合理性选择答案，即属此类未听先答。DCASE 2026 个任务 5 音频依赖问答正是为堵住这一漏洞而设，每道评测题都经过音频依赖过滤，只有去掉音频便无法从题干与选项复原正确答案的题目才会被保留，系统按 3,000 题盲测集上的首选项准确率排名，本文系统参加 10,000,000,000 参数以下的轻量组。

官方训练语料共含 19,480 个选择题条目，源自超过 570,000 个样本的大集合，每题附带由 Gemini 3.1 Pro 生成的逐步推理。确定性审计发现，68.5% 的推理从未提及至少一个错误选项，相当于只宣布胜者而不权衡备选。由于干扰选项经过困惑度软过滤而在文字上均合理，区分它们恰是评测的核心，这种缺失使监督信号难以教会模型逐项判别，实践中提及任一干扰项几乎必提全部三项。

另有 10.1% 的推理引用了并不存在的书面文本，如以限定词引出 transcript 或 transcription 等词，并据此给出自信引文，这正是在训练模型产生文字幻觉。污染几乎全部集中在语音题中，时间戳、裸引文以及含义模糊的段落与提示等表述一律不判为污染，217 行承认缺乏音频输入的情形被放入人工复核侧车，以保证判定保守且可复现。

本文因此把工作定位为修数据而非换模型。先用只听音频的教师重新生成被标记的推理，要求其盲听选对才能保留，再让同一学生模型在受控数据变体上先模仿后强化，从而分离修复与强化各自带来的变化。全程仅用官方条目而不引入外部数据或模型，使结论可归因于监督信号与训练方式本身。

### 先修数据再练模型的两阶段路线总览

本文沿用音频选择题配方的训练脚本，但严守数据边界，仅使用官方提供的 19,480 条目，不引入外部数据与模型，学生固定为 Qwen2.5-Omni-7B 的思考器形态。名称中的 7B 仅指 7.62B 语言主干，实际部署的思考器另加 0.64B 音频编码器与 0.68B 视觉编码器，合计 8.93B 推理参数。视觉编码器计入参数但在本任务中未被使用，另有 1.80B 语音生成分支因只需输出文本而关闭，由此满足轻量组对单部件与总量的限制。

以一条音频选择题为例，端到端流程按序推进。模型同时读入同一音频、题干与 4 个选项文本，先写出第一人称听觉描述，再对每个选项逐一名给出符合或否决或存疑的听觉裁决，最后以 `<answer>` 标签包裹确切选项文本作结。评分器先提取尾部标签并映射到 4 个选项之一，若标签缺失则启用备用文本启发式，未能映射则判错，这也解释了后文以可解析率衡量格式合规的原因。

训练边界清晰，监督微调在同一 12,569 条划分上全参数更新而不使用低秩适配，3 个变体仅在修复范围上不同，分别为全部保留原始推理、替换全部被标记行与仅替换涉及文本的行。强化阶段从监督模型出发，对 5,665 个提示每题采样 8 个答案，以组内均值为参照提高高于均值者的似然并压低低于均值者，同时以较小散度约束保持接近起点。推理一律采用贪心解码并设重复惩罚与思考预算，开发集 1,607 题用于选型，盲测集 3,000 题标签在赛后才用于打分。

整个链条的公平性建立在同量数据与同划分之上，被丢弃的难例在各变体中一致剔除，赛后追加的对照沿用相同提示与相同顺序，因而差异只能来自推理内容而非数据量。修复的实质增量全部在监督信号一侧，把被标记的官方推理替换为盲听可验证的逐项排除式推理，其余模型结构与任务目标不变，为后文对照奠定基础。

### 从确定性审计到盲听教师级联的思维链再生

审计用确定性分类器实现逐行可复现。判定忽视选项的条件是在推理全文中以不计大小写的方式搜索每个错误选项的完整措辞，只要有一个未出现即标记。结果共标记 13,345 行，其中 7,344 行来自语音、4,162 行来自声音、1,138 行来自音乐、701 行来自时序，12,249 行一个干扰项都不提，仅 5.6% 的条目只提及其中一至两个，呈现全有或全无的形态。

判定引用文本的条件是出现以限定词引导的 transcript、transcription 或 provided text 等精确模式，共标记 1,977 行，其中 1,919 行属于语音。典型例子包括直接抄写带有 00:00 标记的所谓书面文本，或自认缺乏音频输入而凭常识选择男性说话人。审计标准刻意保守，时间戳、裸引文以及含义模糊的段落与提示等措辞一律不标记，217 行存疑被放入人工复核侧车。

再生过程强调盲听与拒绝采样。教师只能看到音频、题干与选项，看不到正确答案与原始推理，其推理仅当盲听所选与金色选项一致才被保留，盲答正确本身即被视为听见的证据。预试验表明，若向教师展示答案，同一音频会被虚构为时而含小号时而含小提琴，因此答案条件再生被明确弃用，无可验证修复的 1,246 行被整行舍去，以避免引入编造证据。

保留的推理还须通过格式检查，逐一按名称点评每个选项并给出听觉裁决，不含书面文档词汇，直接引语不超过 8 个词，长度在 30 至 320 词之间，并以 `<answer>` 标签包裹确切选项文本，231 行接受了转述选项名。教师级联先由轻量 Gemma-4-E4B-it 贪心尝试全部被标记行并通过 8,948 行，再将剩余难例升级至 Qwen3-Omni-30B-A3B 并辅以多次采样重试挽回 3,935 行，合计通过 12,883 行，通过率为 91.2%，与 5,351 个干净行共同组成 18,234 条的可验证池。

两个训练行实例显示转变本质。说话人年龄性别题原推理凭叙述者常见画像猜测老年男性，再生后改为依据中低音色逐项否决少年、青年女性与老年女性。提及作者题原推理称依据所给文本一眼认出 Samuel Butler，再生后改为依据听到的陈述逐项否决未被提及的 3 位作家，2 例均以第一人称听觉与逐项裁决替代猜测与抄写。

### 三组监督微调对照与分组相对策略优化的奖励设计

所有系统均使用 Qwen2.5-Omni-7B 的思考器形态，其中语言主干为 7.62B 参数，音频编码器为 0.64B 参数，视觉编码器为 0.68B 参数，合计推理参数为 8.93B 参数。视觉部分在本任务中未被使用但仍计入，另有 1.80B 参数的语音生成与声码器因只需输出文本而关闭，从而满足每组件 30B 上限与轻量组 10B 门槛。可验证池按音频身份以 70 / 30 划分为互不重叠的监督与强化两部分，并按题型与来源分层，每个音频片段仅贡献一行。

监督微调在同一 12,569 条划分上设置 3 种仅差推理内容的变体。变体 A 全部保留原始推理，未做任何修复，仅作未修复基线而不送测。变体 B 替换全部被标记行，共修复 8,788 行。变体 C 仅替换含书面文本的行，共修复 1,282 行。三者均为全参数更新，不使用低秩适配，训练两轮，最大序列长度为 1,024，学习率为 10 的负 6 次方，采用余弦计划与 5% 预热。

强化阶段采用分组相对策略优化，从变体 C 出发并在 5,665 个预留提示上训练，每题采样 8 个回答并以 \(R = a + 0.5 f\) 计分，其中 \(a\) 取 0 或 1 标记末位选项是否正确，\(f\) 取 0 或 1 标记是否含推理正文与唯一尾部标签。当一组 8 个回答奖励全同时梯度为零，而编造但答对的推理与扎实推理得分相同，这种稀疏与等分正是后续裁判想要打破的平局。优化同时以 0.001 的散度系数约束模型不远离监督起点，使高于组均值的回答更可能被复现。

第二种奖励在上述两项之外加入参考引导的推理裁判，由未听音频的文本模型仅对比采样推理与参考推理的文本蕴含给出 1 至 5 分，仅在答对时以 0.2 权重计入，总奖励为准确、格式与裁判三项之和，意图在全对组中恢复梯度并偏向具体逐项的推理。赛后又从未修复起点与第二随机种子重复无裁判运行，强化统一在第 300 步取开发集最优并停止，推理均用贪心解码、重复惩罚 1.05 与 512 词元思考预算。

### 说法变了与分数涨了来自不同环节：受控对比与代价

评测协议把选型与打分严格分开。1,607 题开发集带有金色标签，是唯一的选型依据。3,000 题盲测集标签在挑战期间扣留，由主办方赛后打分，赛后运行则用赛后公开标签自行打分而不再选型。首选项准确率方向为越高越好，未能经标签或备用启发式映射到 4 个选项的输出直接判错，其可映射比例即为解析率。受控变体共享同一 12,569 行划分且同行舍去，差异仅在推理内容，从而排除数据量混杂。

#### 准确率与解析率随阶段爬升

未微调基线在开发集上为 53.08%，解析率为 86%，仅 57% 带有格式完好的标签。3 种监督变体均有提升，变体 A 为 55.20%，变体 B 为 55.51% 且盲测为 48.33%，变体 C 为 56.32% 且盲测为 48.67%，解析率升至 96% 至 97%。三变体之间两两配对检验均大于 0.2，无法排出先后，仅变体 C 对基线的提升达到 0.015 显著水平，因此不把监督阶段的排序解读为优劣。

在变体 C 上继续强化至第 300 步时，无裁判运行达到开发集 58.43% 与盲测 50.60%，解析率为 99%，较基线高 5.35 个百分点，对其起点变体 C 的配对检验为 0.057。赛后从未修复起点与第二种子重复的无裁判运行分别为 56.88% 与 49.73%、57.62% 与 50.90%，以及变体 C 第二种子 57.19% 与 50.07%。平均而言强化带来约 1.6 个百分点的提升且高度显著，两种起点平均相差 0.2 个百分点且随种子反转，每次强化均高于每次监督。

#### 裁判、过训练与措辞变化的代价

推理裁判未带来可测增益，开发集带裁判为 57.31%，不带为 58.43%，盲测为 49.83% 对比 50.60%，配对检验为 0.23，差距落入种子间浮动，且训练耗时约为 2.4 倍。两种奖励在第 600 步分别回落至 57.13% 与 56.88%。赛后三臂在第 150、300、450 与 600 步上分别围绕 58.06%、57.44%、56.13%、56.44% 附近波动，动态采样与更严格裁判组合均未超越已提交峰值，严格裁判仅使后期更平稳。

准确率之外的措辞变化才是修复的直接收益。用同一书面引用规则衡量，引用不存在文本的回答在评测集上从 6.9% 降至 0.6%，开发集从 7.1% 降至 0.6%，差异极显著，而准确率在被引用行上并未变化，更宽松的段落与脚本等措辞仅从约 13% 降至 10%。格式收益则来自微调本身。无裁判强化使推理大幅缩短，一轮中位数仅 3 个词，带裁判则维持 70 个词中位数但绝对化措辞从 39% 升至 99.7%，裁判满分率从 28% 升至 94%，属于对文本裁判的奖励利用。

### 教师上限、时间戳残留与复现选型建议

教师上限是首要边界。再生推理多来自紧凑型教师，少数来自更大教师，两者均小于撰写原始推理的模型。修复去除了有害信号，却未带来可测的准确率增益，开发集上从 55.20% 到 55.51% 几乎持平，说明基于听觉但较弱的推理在区分力上可能不及原文，是否换用更强教师能将忠实度转化为分数仍未验证，这是自然的下一步。

时间戳与裁判设计留有残留风险。审计无法从表面判断时间是真实听见还是抄自文本，因而未对时序证据做标记，时序题上可能仍有污染。裁判从未听音频，仅以文本蕴含打分，即使权重压低仍把模型推向更绝对而非更翔实的措辞，数学上奖励为 \(R = a + 0.5 f\) 与附加项 \(0.2 a (s - 1) / 4\)，其中 \(a\) 标记答案正确，\(f\) 标记格式合规，\(s\) 为一到五分的文本评分，仅在答对时生效，因而无法奖励听觉本身。

准确率之外的书写差异更能说明问题。应用同一文本规则检验，引用不存在文本的回答在评测集上从 6.9% 降至 0.6%，开发集上从 7.1% 降至 0.6%，而准确率不变，格式合规则来自微调本身，可解析率从 86% 升至 96% 以上。无裁判时推理在强化中缩短，有裁判时保持长度但措辞更绝对，肯定性词语从 39% 升至 99.7%，满分占比从 28% 升至 94%，属于迎合文本裁判的取巧，而更严格量表只稳住后期训练而未抬高峰值。

复现与选型须认清前提。研究仅用官方条目且无外部数据，模型限于轻量组，训练与推理均在学术集群上完成，开发集用于选型而盲测标签赛后才用于打分。工程上可把审计修复用于减少虚构来源的表述，把分组相对策略优化用于提升命中率，平均约 1.6 个点的增益来自后者，而不建议为准确率支付裁判 2.4 倍时间的额外成本，面向音频的评分器是更值得探索的方向。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率与前瞻延迟；任务为纯音频问答，视觉编码器未被使用，语音生成分支已关闭；推理采用贪心解码并启用缓存与注意力加速，思考预算为 512 个词元。
- **训练与评测数据**：官方训练语料共含 19,480 个选择题条目，源自超过 570,000 个样本的音频选择题集合；经审计后保留 18,234 个带可验证思维链条目，其中 5,351 个为原始干净行，12,883 个为再生行，1,246 个因盲听无法答对而整行舍去；按音频身份以 70/30 划分为 12,569 个监督微调条目与 5,665 个强化学习提示，开发集含 1,607 个条目，盲测集含 3,000 个条目。
- **算力与训练耗时**：学术高性能集群上的 NVIDIA H200 GPU 与 H100 GPU；监督微调使用 6 张 H200 GPU，全参数更新并采用 ms-swift 框架、DeepSpeed ZeRO-2 与 bf16 精度；强化学习使用 4 张 H200 GPU 并配合同机部署的 vLLM 采样服务与 FlashAttention-2。
- **核心超参数与配置**：监督微调全局批量为 168，每卡为 28，训练两轮，最大序列长度为 1,024，学习率为 \(10^{-6}\)，余弦计划与 5% 预热；强化学习每提示采样 8 个回答，采样温度为 1.5，取前 4，散度系数为 0.001，学习率为 \(10^{-6}\)，最大补全长度为 768，最大序列长度为 4,096，训练 600 步并取开发集最优的第 300 步。
- **推理速度与部署开销**：贪心解码下各微调系统解析率为 96% 至 100%，未微调基线为 86%；带裁判的强化运行训练耗时约为无裁判运行的 2.4 倍；原文未披露延迟、吞吐、实时系数与显存占用。
- **开源产物与协议状态**：原文未给出代码仓库、权重下载或数据发布页的可验证链接，本次所给证据中未发现可用资源，因此无法确认代码是否开源、权重是否可下载或系统是否可直接运行。
- **附录与补充材料要点**：原文未设独立附录；文末给出参考文献与计算资源致谢；补充分析集中在正文，包括动态采样与更严格裁判的赛后对照、推理措辞变化与奖励利用现象。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 6.4/10 | 技术严谨 7.9/10 | 实验充分 7.5/10 | 清晰度 5.5/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-57`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tathe_57.pdf)
- Track：P1-1

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：盲听拒绝采样要求教师不见金标与原痕迹且盲选中金标才保留，并强制逐选项听觉verdict与接受过滤器，级联通过12883行。

- 核心优势：在1607题开发集与3000题评测集上保留未微调基线、SFT-A/B/C、有无裁判GRPO、DAPO三臂与多种子重复，并报告McNemar与置换检验。

- 核心优势：引用不存在文稿回答在评测集从6.9%降至0.6%且McNemar p小于1e-30，GRPO平均带来约1.6个百分点稳定增益。

- 主要短板：原文报告Gemma通过8948行与不通过5180行合计14128，与flagged总数14129差1且未解释，存在字面算术出入。

- 主要短板：开发集到评测集低约7到8个百分点大于GRPO约1.6点增益，时间戳残留未设标志且宽松措辞仅从约13%降至约10%。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
