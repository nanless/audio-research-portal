---
title: "SEAR: Segment-Evidence-Aware Routing for Weak-to-Strong Multilingual Speech MCQ"
date: 2026-11-28
draft: false
description: "针对多语言双人会话选择题中文本先验掩盖真实听觉理解的问题， SEAR 以时间戳事件切分加语义声学双分支合成与无音频探测分流，配合弱项监督微调与强项分组序列策略优化，在最终评测集上达到 90.92% 准确率并获得第二名，代价是评估阶段混合与合成验证依赖大模型判断。"
tags: ["LoRA", "强化学习", "多语言", "音频问答"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "分段证据感知路由如何让弱到强训练真正听见声音"
paper_digest_original_title: "SEAR: Segment-Evidence-Aware Routing for Weak-to-Strong Multilingual Speech MCQ"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:le26_mlcslm"
paper_digest_workbench_source_sha256: "1b5f7eef397b7c39585321a67c21cd18911ccf2bf45e70b3ac2c9386104f4e09"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对多语言双人会话选择题中文本先验掩盖真实听觉理解的问题， SEAR 以时间戳事件切分加语义声学双分支合成与无音频探测分流，配合弱项监督微调与强项分组序列策略优化，在最终评测集上达到 90.92% 准确率并获得第二名，代价是评估阶段混合与合成验证依赖大模型判断。"
paper_digest_reader_sections: [{"heading":"多语言双人会话选择题为何不能只看转写","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三阶段分段证据感知流程如何组织数据与训练","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"事件保留切分与双分支题目合成如何保证证据可追溯","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"弱到强两阶段训练如何稳定优化音频依赖题目","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"主结果在混合评估集上达到多高准确率及其可比性前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"分类分流与稳定化强化学习带来多大增益","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界与复现选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["CAKE by VPBank, Vietnam"],"name":"Huy Hoang Le"},{"affiliations":["CAKE by VPBank, Vietnam"],"name":"Long-Bao Nguyen"},{"affiliations":["CAKE by VPBank, Vietnam"],"name":"Minh Tri Dao"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"2c36226c1976305fb5979dcd64ea70681feb998f46f8c2d182bf2f891e35ecd5","url":"/audio-research-portal/client/papers/2026-11-28/conference-abce7146b7c3529e7192b87e/citation.bib"},"citation.json":{"sha256":"91f9552fc3c691fb874549a380e2373b8def0454cf4934fb7f2af1a8ae67a1b7","url":"/audio-research-portal/client/papers/2026-11-28/conference-abce7146b7c3529e7192b87e/citation.json"},"citation.ris":{"sha256":"81ad886b44cc9a305f2e862be235a119ae52025edf6d4d4341a7754162596e49","url":"/audio-research-portal/client/papers/2026-11-28/conference-abce7146b7c3529e7192b87e/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ca2e6d66dba315b2f0cd0f2a98d70983e23edb5e393fce9e89ff9f249a4a287d","url":"/audio-research-portal/client/papers/2026-11-28/conference-abce7146b7c3529e7192b87e/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:le26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d89ed05701fffa3c9010e65dbb534b62067bfefb4d3f6c6c6a514cdd122c4196"
paper_digest_api_reader_plan_sha256: "c737ab85461981e1868017b36d56e5ce38b50e4589ae985f647b3d94a6eb4b4f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "10a2aa16f028b915fd21e2c48aeaa5c8922af3fcaa66b6c91439f82849e976cf"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2d0d63db35e03b86343aedf3b9c289fab2a4c626e3ce22bf6fb0acd228e05aef"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "094ae1e8697f84727e2ce6df16c9c98ad8533e130218ec298c26eda04337db25"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "20252dc4bf88d264ed6d9358bab4788af14b56cf5c2fac80911cf0d99549e457"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "强化学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 分段证据感知路由如何让弱到强训练真正听见声音

> 英文题目：*SEAR: Segment-Evidence-Aware Routing for Weak-to-Strong Multilingual Speech MCQ*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:le26_mlcslm`
> Track：Oral Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[强化学习](/audio-research-portal/papers/?concept=method.reinforcement)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 7.1/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.4/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Huy Hoang Le：CAKE by VPBank, Vietnam
- Long-Bao Nguyen：CAKE by VPBank, Vietnam
- Minh Tri Dao：CAKE by VPBank, Vietnam

## 📌 核心摘要

**问题与瓶颈：** 任务 2 以多语言双人对话录音连同文字问题与 4 个选项为输入，要求模型输出正确选项字母，官方指标为答案准确率。挑战对话覆盖 14 种语言范围内的非正式自发谈话，题目同时探查说了什么与怎么说，仅靠转写文本无法回答。现有音频大模型的根本困难是文本先验过强，许多题目不听音频也能凭文字线索答对，形成零音频贡献效应，抬高表观准确率却在真正依赖听觉的问题上失效。若对所有样本同等训练，会在文本可答题上浪费监督，并稀释真正需要听觉的监督信号。

**核心思路与方法架构：** 与最近的音频贡献感知后训练基线相比，实质增量是将时间戳事件保留切分、双分支语义与声学题目合成、目标模型可训练性筛选与去偏序列级强化学习组合为弱到强路由。原始长对话先经语音识别得到带时间戳的转写单元，语言模型从有序转写中抽取自包含事件区间并按可变边界余量向两侧扩展后裁剪波形，模型可见时间戳重定为相对裁剪起点的局部时间。语义分支把局部转写与事件跨度交给 Qwen3.6-27B 生成内容与话语关系类四选项题，声学分支把裁剪波形交给 Gemini 3.1 Flash-Lite 生成说话人与韵律情感类四选项题，候选经接地与格式校验及目标模型 8 次 rollout 可训练性探测后保留 359,825 题。无音频探针把不听音频也能答对者判为弱项用于监督微调（supervised fine-tuning, SFT），其余强项用于组序列策略优化（Group Sequence Policy Optimization, GSPO），基座为总量约 30B、激活约 3B 的混合专家（Mixture-of-Experts, MoE）模型 Qwen3-Omni-30B-A3B-Instruct，仅语言模型加低秩适配（low-rank adaptation, LoRA）而冻结音频编码器与对齐器。

**关键实验与核心代价：** 在官方开发集上，SEAR 准确率为 96.02%，高于 Qwen3-Omni-30B-A3B 零样本的 92.40% 与 Qwen2.5-Omni-7B 基线的 83.16%，指标方向为越高越好。在官方评测集上基线 77.36% 来自第 1 阶段评测集而 SEAR 的 90.92% 来自第 2 阶段终测集，两阶段题目不同故不可直接视为同条件超越，论文报告终测排名为第 2。同为第 2 阶段终测集的可比对照中，不做弱强区分的全数据对照为 88.24%，低于 SEAR 的 90.92%，原文报告差距为 2.68 个百分点。主导收益来自弱到强强化学习阶段，但事件切分监督微调行与终行分属不同评测阶段故跨阶段差值仅供参考。代价侧为每提示 8 条 rollout、滚动批量 64 与截断重要性校正阈值 2 及动态过滤带来的额外 rollout 开销，原文未披露训练与推理时延或吞吐实测。

**适用边界与深读导览：** 结论成立前提是转写时间戳基本准确、双分支生成与语言模型评审的接地判断可靠，以及二元精确匹配奖励能代表选择题正确性，未覆盖转写严重错误、强噪声重叠或未见口音下的失效与部署成本。论文明确承认语言模型事件与质量判断可能引入相关错误，未来需结合独立验证器并随策略能力刷新可训练性标签。需深究切分公式、去偏优势与序列级裁剪目标及消融口径可查阅下方方法概述和架构、实验结果与局限与问题章节对照原表阅读。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多语言双人会话选择题为何不能只看转写

任务 2 的输入是一段多语言双人会话录音与一道四选一问题，输出是从 A 、 B 、 C 、 D 中选出的单个选项，官方指标为回答准确率。会话覆盖 14 种语言，语体随意自发，问题同时探查说了什么与怎么说，前者包括内容意图事实话语关系与时间顺序，后者包括说话人身份音高语速情感音质背景声与重叠等可听事件，系统必须联合解释声学内容与语言含义，无法仅靠语音识别文本完成。

核心困难在于文本先验过强，模型不真正聆听也能答对许多题目。原文引用的已有分析指出，大型音频语言模型常凭借文字线索给出正确答案，却忽略音频输入，这种零音频贡献现象虚增了表面准确率，但在声学支撑题目上会失效。仅凭转写的做法因此不可靠，必须检验每道题目是否必须听到波形才能回答，否则评估无法反映真实听觉理解能力。

若把所有样本同等对待，监督会被文本可答题目占据，真正需要聆听的信号被稀释。语义类题目多可从转写恢复，声学类题目必须直接感知波形，两类对听觉的依赖程度不同。把易题与难题混在一起优化，模型会继续沿语言捷径猜答案，浪费本可用于学习聆听的梯度，区分证据来源成为训练设计的关键，弱到强分流正是为此而设。

长会话还带来证据定位难题，随意截取固定窗口会切断完整轮次与邻近韵律语境，也会混入无关片段，破坏问题与证据的一一对应。理想做法是先依据带时间戳的转写找到自足对话事件，再保留边界语境后裁剪，并把面向模型的时间戳换算到裁剪起点，使时间指向实际输入波形的开头，与评测条件一致，这正是分段证据感知路由的出发点。

### 三阶段分段证据感知流程如何组织数据与训练

系统以 Qwen3-Omni-30B-A3B-Instruct 为基座，这是一种混合专家音频大模型，总参数约 30B ，激活参数约 3B ，多语言音频理解能力与挑战的 14 种语言范围匹配。适配仅在语言模型上加低秩适配器，秩为 32 ，缩放系数为 64 ，丢弃率为 0.05 ，预训练音频编码器与多模态对齐器保持冻结，避免在相对较小的挑战集上微调导致多语言声学知识的灾难性遗忘。整体流程分为三阶段，分别完成事件定位，双分支合成与验证，以及音频贡献分流。

下图为全文主流程，建议沿箭头从左向右阅读。左侧为事件定位，中间为双分支合成与验证，右侧为音频贡献分流，重点观察片段集合符号如何传入合成，验证后如何得到已验证片段，以及无音频探测如何按答对与答错分出两条去向，分别对应监督微调与分组序列策略优化，理解数据如何从长会话变为可训练题目。

[![原论文 Figure 1：Segment-level Audio MCQ curation and routing.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-1.png)

*论文图 1：三阶段分段选择题组织示意，从事件定位到双分支合成验证再到按音频贡献分流（原论文 Figure 1）。*

图中显示 3 个虚线大框自左向右排列。第一框内有两个色块，左侧为原始音频加时间戳转写，右侧为大模型事件跨度加边界余量，箭头之间标注片段集合符号。第二框内有 3 个色块，依次为双分支选择题合成与语义声学标注，质量与可训练性验证，已验证片段选择题三元组。第三框先是无音频文本探测，随后分叉为上方弱文本可答走向监督微调，下方强音频依赖走向分组序列策略优化，分支上分别标注答对与答错，完整呈现从长会话到分流训练的闭环。

与最近既有做法相比，实质增量不在基座本身，而在数据与训练组织。保留的是混合专家基座与冻结声学知识，替换的是任意固定窗口切分与单一文本生成，改为大模型提取事件跨度加可变边界余量，以及语义分支用转写与元数据生成，声学分支直接用波形生成。原文未披露采样率帧长步长码率通道与特征维度，目标始终是四选一准确率，未涉及语音增强或分离等波形重建目标。

### 事件保留切分与双分支题目合成如何保证证据可追溯

分段先对每段原始会话做语音识别，得到带起止时间的转写单元序列，大模型阅读有序转写后返回自足对话事件区间。每个区间向两侧扩展一个可变边界余量而非固定值，再裁剪到录音边界并合并强重叠窗口，既保留完整轮次与邻近韵律语境，又避开无关部分。所有面向模型的时间戳按局部时间等于绝对时间减去裁剪起点换算，绝对偏移仅作来源记录，确保时间指向实际输入波形的开头。

题目合成走两条互补分支。语义分支把局部转写事件跨度与会话上下文交给 Qwen3.6-27B ，生成内容意图事实话语关系与时间顺序四选一问题。声学分支把裁剪波形交给 Gemini 3.1 Flash-Lite ，生成说话人身份音高语速情感音质背景声重叠与其他可听事件问题。每道候选序列化为片段问题选项正确答案与来源记录，来源包含绝对与换算时间戳语言与题型，正确选项位置经随机排列以减轻位置偏好。

校验分两层。第一层由大模型裁判检查证据支撑，要求问题可答且仅有一个正确选项，干扰项似是而非但无支撑，换算时间戳落在片段内，语言流畅，题干与选项不泄露答案，声学题加做波形支撑检查，不合格者拒绝或重生成。第二层用目标模型做每题 8 个音频条件采样的可训练性探测，标记为全对可学与全错，全对仍留作监督微调但暂不进入强化学习队列，可学者为主要强化学习池，全错者保留并随策略变强动态准入。

以下为教学例子，用于理解端到端逻辑流，不添加无来源数值。假设取某双人会话中的一个事件片段，先经转写与事件定位得到区间并加边界余量裁剪，再分送语义与声学分支生成候选题，经上述两层校验后形成已验证片段，最后经无音频探测分入弱项或强项。原文未披露采样率帧率与特征维度，因此无法给出具体张量形状与帧数变化。全库共 359,825 个已验证题目，覆盖 21 种语言与口音变体，弱项 197,231 个，强项 162,594 个，语义题弱比例为 68.0% ，声学题弱比例仅 41.6% ，支撑了按听觉依赖分流的设计。

### 弱到强两阶段训练如何稳定优化音频依赖题目

第一阶段监督微调解决指令与格式适应，训练全部已验证弱项。助手目标为最小序列 `<answer>`X`</answer>` ，其中 X 取自 A 、 B 、 C 、 D 。优化器学习率为 1×10−4 ，采用余弦衰减，预热比例为 0.05 ，权重衰减为 0.01 ，梯度裁剪至 1.0 ，最大序列长度为 32,768 ，精度为 bf16 。该阶段让模型熟悉多语言提问风格与严格单选项格式，避免因格式错误在后续二值奖励中得 0 分，梯度只更新语言模型侧低秩适配器。

第二阶段强化学习只用强项。对每个音频依赖提示，从旧策略采样 8 个回答，以二值精确匹配为奖励，完全等于正确选项包裹格式得 1 分，否则得 0 分，格式错误同样得 0 分。由于奖励附着于完整回答序列，优化采用分组序列策略优化，其长度归一化序列似然比与整回答裁剪对混合专家模型更稳定，避免了词元级别比值因专家路由微小变化而剧烈波动，这是相对组内归一化方法的重要区别。

三处稳定化组合是关键。去偏优势放弃组内标准差归一化，只保留组均值基线，使更新幅度反映组内真实分歧，避免单个异常采样因歧义标注噪声或解码随机被过度放大。序列目标对整回答做长度归一化对数似然差再取指数，并在序列级别裁剪。针对采样引擎与训练后端数值不一致，引入截断重要性校正，用训练与采样对数似然差的序列均值取指数并上限为 2 ，再乘到每条回答的损失项上，防止后端失配轨迹主导梯度。

动态过滤在每次更新丢弃奖励标准差为零的组，并补充采样新提示直至有效批量填满，遵循动态采样原则。由于策略能力随训练变化，在线规则比永久删除基座答对题目更可靠。强化学习超参为每提示采样数 8 ，采样批量为 64 ，下裁剪阈值为 3×10−4 ，上裁剪阈值为 4×10−4 ，散度系数为 0 ，截断阈值为 2 ，同时监控保留组比例奖励裁剪比例序列失配与有效样本量。原文未披露音频采样率前瞻延迟往返系数与显存开销，推理为离线整段问答，未说明自回归分块流式细节。

### 主结果在混合评估集上达到多高准确率及其可比性前提

评测采用官方任务 2 开发集与评测集，指标为准确率，方向为越高越好。训练规模为 359,825 个分段题目，覆盖 21 种语言与口音变体，每变体约 11.5K–21.9K 个，弱项 197,231 个用于监督微调，强项 162,594 个作为强化学习候选。基座总参数约 30B，激活约 3B，仅语言模型加低秩适配。原文未披露码率因果流式与离线之分，题目均为裁剪片段上的四选一，可视为离线片段级理解，无人工听测与方差报告。

#### 评测条件与主表

下表为任务 2 准确率主结果，列为开发集与评测集准确率，单位均为 %，表注说明评测列混合了不同阶段集合，基线行对应第一阶段评测集，本系统行对应第二阶段最终评测集，黑体在原文中标出最优，开发集与最终集难度可能不同。

| System | Dev ↑ | Eval ↑ |
| --- | --- | --- |
| Qwen2.5-Omni-7B (baseline) [11] | 83.16 | 56.42 |
| Qwen3-Omni-30B-A3B (zero-shot) [3] | 92.40 | 77.36 |
| Ours (SEAR) | 96.02 | 90.92 |

表中可见本系统开发集为 96.02%，最终评测集为 90.92%，高于零样本模型的 92.40% 与 77.36%，以及小基座的 83.16% 与 56.42%，含义与表注一致。但评测列混合阶段，第一阶段数值与第二阶段最终数值不在同一分布上，直接相减会夸大或低估增益。原文报告本系统在官方榜单位列 2，说明仍有未胜出系统，代价是大量合成与验证开销及对大模型判断的依赖。

#### 跨语言分布是否一致

下图为 21 种语言口音变体的音频依赖分布，每个柱子归一化至 100%，按弱项占比从高到低排序。纵轴为占比，横轴为语言代码，橙色为弱项，青色为强项，50% 虚线与最右侧阴影区区分强弱多数，分流后两类数据规模决定后续训练是否充足。

[![原论文 Figure 2：Audio-dependency generalizes across all 21 languages.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-2.png)

*论文图 2：21 种语言口音变体的弱强占比堆叠分布，按弱项占比排序并标出强占优三变体（原论文 Figure 2）。*

图中显示 21 根堆叠柱从左 En-IN 向右 Th 依次降低橙色占比，虚线标出 50% 分界。前 18 个变体橙色超过一半，仅最右侧 Ru、Tl、Th 三柱青色超过一半并带浅底纹，与图注文字一致。纵轴为 0% 到 100% 占比，横轴为语言代码，柱体本身无计数标注，每变体 11.5K–21.9K 个与全库 359,825 个的数字来自图注与正文，而非柱体标注。

### 分类分流与稳定化强化学习带来多大增益

消融采用累积式设计，考察两大决策，分段监督与弱到强强化学习，后者将分流加去偏重要性校正与动态过滤作为单步整体报告，而非对各子组件做组合扫描。另设全数据对照，在相同数据上训练但不做弱强区分，以检验分类本身的价值。原文未提供去除边界余量或单分支生成的消融，也未报告方差置信区间与人工听测，缺失的组件级归因使稳定化三件套各自贡献无法分离。

#### 累积消融与对照

下表为累积消融，列为评测集准确率与相对上一行的增量，单位均为 % ，零样本与已验证事件分段监督微调行对应第一阶段评测集，对照与最终行对应第二阶段最终集，阶段混合使增量不可直接相加，阅读时须对照表注的阶段说明，不跨阶段解释增益。

| Configuration | Eval ↑ | ∆ |
| --- | --- | --- |
| Qwen3-Omni-30B-A3B, zero-shot | 77.36 | – |
| + SFT full data, no weak-strong split | 88.24 | +10.88 |
| + verified event-segment MCQ SFT | 86.55 | +9.19 |
| + weak-to-strong GSPO RL (SEAR) | 90.92 | +4.37 |

表中零样本为 77.36 ，全数据无区分监督微调为 88.24 ，增量为 10.88 个百分点，已验证事件分段监督微调为 86.55 ，增量为 9.19 个百分点，最终弱到强系统为 90.92 ，增量为 4.37 个百分点。对照比最终低 2.68 个百分点，支持分类带来改进。但原文如此报告，存在字面算术出入，原文未解释， 86.55 减 77.36 得 9.19 个百分点，并非相对上一行 88.24 ，且混合不同阶段评测集，跨行相减不具严格可比性，须按阶段分别理解。

#### 题型决定音频依赖

下图按题型对比音频依赖，共 3 条横向堆叠柱，建议先看左侧语义声学总体标签与样本量，再比较橙色文本可答与青色音频依赖的长度，重点观察 50% 虚线与右侧 32% 到 58% 的 1.8 倍标注，思考双分支设计是否拉开听觉依赖差距，以及强项数量是否足以支撑强化学习。

[![原论文 Figure 3：Question type predicts audio dependence.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/531250d33cb2/figure-3.png)

*论文图 3：语义声学总体三行弱强对比，声学题音频依赖占比约为语义题 1.8 倍（原论文 Figure 3）。*

图中显示语义行橙色 68.0 青色 32.0 ，声学行橙色 41.6 青色 58.4 ，总体行橙色 54.8 青色 45.2 ，每段数字直接标在色块内，横轴为 0% 到 100% 占比。三行样本量分别标注为 180K 、 180K 与 360K ，与 359,825 的精确总数接近但为约数。音频依赖占比从 32.0% 升至 58.4% ，约 1.8 倍，验证了声学分支更需要听觉，为强化学习提供 162,594 个明确强项，也说明语义题仍有近三分之一必须听音频。

### 假设边界与复现选型建议

系统的首要假设是大模型事件与质量判断可靠，但这类判断可能引入相关错误，例如事件边界划分偏好与题目难度估计相互关联，错误会在合成与验证中放大。原文结论也承认这一点，提出未来结合独立验证器并随策略变强刷新可训练性标签，当前全错题目的动态准入仍依赖初始探测，标签时效性有限，声学题的波形支撑检查同样依赖模型自身。

未验证范围包括方差与显著性，全文仅报告单点准确率，无标准差置信区间与多次运行统计，也无人工听测与神经代理的对比，无法判断对照差距是否稳定。评测混合第一阶段与第二阶段集合，开发集与最终集难度不同，跨阶段增量不可直接解释为方法增益，位列 2 也说明存在更优系统但未做对比分析，失效案例与语言别短板未展开。

复现核对上，训练数据为任务 2 训练会话合成的 359,825 个题目，划分与语言分布已披露，提示词模板与超参完整，包括低秩适配秩 32 与学习率等，采样数批量与裁剪阈值明确。但代码权重数据与演示均无可确认的公开链接，公开状态未确认。计算硬件训练步数耗时延迟往返系数与显存均原文未披露，仅知致谢中提到计算资源支持，复现需自行准备混合专家基座与双生成模型。

工程选型上，若目标是多语言会话选择题且能承担合成开销，可借鉴事件保留切分加双分支合成与弱强分流，把文本可答题留作格式适应，把音频依赖题留给稳定化强化学习。若资源有限或需流式低延迟部署，本文未验证延迟与分块方式，直接套用风险较高，建议先在小语种上检验声学题占比与无音频探测有效性，再决定是否引入分组序列优化与动态过滤。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长步长码率通道与特征维度，题目为裁剪片段上的四选一，评测为离线片段级理解，未说明流式分块前瞻延迟往返系数与显存开销
- **训练与评测数据**：训练用任务 2 训练会话合成的 359,825 个分段题目，覆盖 21 种语言与口音变体，每变体 11.5K–21.9K 个，弱项 197,231 个用于监督微调，强项 162,594 个作为强化学习候选，评测用官方开发集与第一阶段及第二阶段最终评测集，指标为准确率
- **算力与训练耗时**：原文未披露 GPU 型号数量训练步数与耗时，仅致谢中提到计算资源支持，需承载混合专家基座与双生成模型，但具体配置无来源
- **核心超参数与配置**：低秩适配秩 32 ，缩放系数 64 ，丢弃率 0.05 ，冻结音频编码器与多模态对齐器，监督微调学习率 1×10−4 ，余弦衰减，预热比例 0.05 ，权重衰减 0.01 ，梯度裁剪 1.0 ，最大序列长度 32,768 ，精度 bf16 ，强化学习每提示采样 8 ，采样批量 64 ，下裁剪阈值 3×10−4 ，上裁剪阈值 4×10−4 ，散度系数 0 ，截断阈值 2
- **推理速度与部署开销**：原文未披露延迟吞吐显存或往返系数，已知总参数约 30B ，激活约 3B ，奖励解析仅接受单个选项格式，采样与训练共用分词器模板终止符与同步权重
- **开源产物与协议状态**：原文未提供代码权重数据或演示的下载链接，公开状态未确认，提示词模板与超参在正文中完整披露，复现需自行准备基座与生成模型
- **附录与补充材料要点**：原文未设附录，关键证明补充消融许可限制或失效案例均未披露，仅在结论中承认大模型判断可能引入相关错误并提出未来结合独立验证器

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 7.1/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.4/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:le26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/le26_mlcslm.pdf)
- Track：Oral Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：开发集同条件96.02%较强基座92.40%提升3.62个百分点，终测90.92%获第2名，同阶段全数据对照88.24%到SEAR提升2.68个百分点验证路由必要性。

- 核心优势：时间戳事件保留切分结合双分支语义与声学合成，经8次rollout可训练性筛选构建359825题覆盖21个语言口音变体，去偏序列级GSPO配方给出完整公式。

- 主要短板：表1评测列将第1阶段基线77.36%与第2阶段终测90.92%并列，表2增量10.88个百分点实际对零样本而非前一行，原文未解释跨阶段口径矛盾。

- 主要短板：缺置信区间与显著性检验及逐语言准确率数值，稳定化去偏与校正及动态过滤子组件无组合消融数值，验证覆盖存在缺口。

- 主要短板：原文未披露训练与推理时延或吞吐实测且推理为离线整段输入，无端到端部署效率证据支撑工程价值主张。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
