---
title: "The MOSS Systems for the MLC-SLM Challenge 2026"
date: 2026-11-27
draft: false
description: "针对无预切分多语长对话同时需要识别、说话人归属与时间定位的难题，论文以 MTD 端到端生成带时间戳说话人转写并以 MOSS-Audio-8B-Thinking 直接从音频推理选择题，在评测集取得 14.93 tcpMER 与两阶段 0.94 准确率，代价是十万小时量级多阶段预训练与 128k 长上下文适配。"
tags: ["多模态学习", "语音识别", "音频问答", "说话人分离标注"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多语长对话的端到端转写归属与音频直接理解"
paper_digest_original_title: "The MOSS Systems for the MLC-SLM Challenge 2026"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:chen26_mlcslm"
paper_digest_workbench_source_sha256: "22ac88ccc65e9dcc119a2049c029851a9243106324a65c4fb420012210835b55"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音识别"
paper_digest_score: 5.7
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对无预切分多语长对话同时需要识别、说话人归属与时间定位的难题，论文以 MTD 端到端生成带时间戳说话人转写并以 MOSS-Audio-8B-Thinking 直接从音频推理选择题，在评测集取得 14.93 tcpMER 与两阶段 0.94 准确率，代价是十万小时量级多阶段预训练与 128k 长上下文适配。"
paper_digest_reader_sections: [{"heading":"无预切分多语长对话为何同时考验识别归属与定位","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两套音频中心系统如何分工完成转写与理解","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"MTD 三阶段训练怎样建立多语识别与说话人归属","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"无训练问答标签时如何构造挑战风格监督与强化信号","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"评测协议与分语种表现如何支撑最终成绩","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"成绩成立的假设边界与未验证部署条件","index":6,"kind":"limitation","roleLabel":"适用边界"},{"heading":"复现核对清单与工程选型指引","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["MOSI Intelligence, Shanghai, China","Fudan University, Shanghai, China"],"name":"Hanfu Chen"},{"affiliations":["MOSI Intelligence, Shanghai, China","Fudan University, Shanghai, China","Shanghai Innovation Institute, Shanghai, China"],"name":"Chen Yang"},{"affiliations":["MOSI Intelligence, Shanghai, China","Fudan University, Shanghai, China"],"name":"Zhengyuan Lin"},{"affiliations":["MOSI Intelligence, Shanghai, China","Fudan University, Shanghai, China"],"name":"Donghua Yu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"fbe23ff92ddd1aa8368eeec45df12ab67a088f3d33e2288926860558adff0eb9","url":"/audio-research-portal/client/papers/2026-11-27/conference-a35024313f3a078427cc9d4a/citation.bib"},"citation.json":{"sha256":"cc4262ff5d736e7a087eb3cf61642054b63b81d3ab2c86cfc165f881a5c78a41","url":"/audio-research-portal/client/papers/2026-11-27/conference-a35024313f3a078427cc9d4a/citation.json"},"citation.ris":{"sha256":"bb1ec66f7c98449ae2c93141258bc7c0429c9d5ec26af62a42789983f65c46b7","url":"/audio-research-portal/client/papers/2026-11-27/conference-a35024313f3a078427cc9d4a/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"aabd1147df2ac87eaeb1dafcf7d9db216f1f9188b26f61ee9581944894e8e3bd","url":"/audio-research-portal/client/papers/2026-11-27/conference-a35024313f3a078427cc9d4a/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:chen26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "fc1a74a851dfa1b3d87852b01a18d4fc6f102305ae63a96d1b6e0076f5d381c5"
paper_digest_api_reader_plan_sha256: "a786d2cd1611906f3d6582bbcb6501aee125bd5cf0e5ea0fa0510e008cf1cdbb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "963bec830e2110c59751673fdb1d650a632760a2c59f043639f50de8d2e9627d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e0cebc0d142f542d7637f53a5246ba8d0d7846e0da1de1d26f0c9701676fbcd2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "49f4ca0d3a5f0a857a9834ab2507f82ba704a13eb230fcdb7719f501519f1f93"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a3f6981b4d52b138c38b9db69aa8f313ef82f9f30c8b0b932eddb6d16bd2d8bf"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多语长对话的端到端转写归属与音频直接理解

> 英文题目：*The MOSS Systems for the MLC-SLM Challenge 2026*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:chen26_mlcslm`
> Track：Oral Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.6/10 | 实验充分 5.4/10 | 清晰度 6.9/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：系统技术报告

## 👥 作者与机构

- Hanfu Chen：MOSI Intelligence, Shanghai, China；Fudan University, Shanghai, China
- Chen Yang：MOSI Intelligence, Shanghai, China；Fudan University, Shanghai, China；Shanghai Innovation Institute, Shanghai, China
- Zhengyuan Lin：MOSI Intelligence, Shanghai, China；Fudan University, Shanghai, China
- Donghua Yu：MOSI Intelligence, Shanghai, China；Fudan University, Shanghai, China

## 📌 核心摘要

**问题与瓶颈：** MLC-SLM 2026 评测多语言会话长录音，要求在无预先切分与无说话人标签条件下同时完成转写、说话人归属与时间定位，并基于同一风格录音回答多项选择理解题。传统流水线先做说话人分离标注（diarization，指标注录音中谁在何时说话）再做语音识别（ASR，指将声学语音转写为文字），硬切分界面会在重叠、轮转密集与长上下文条件下放大误差，而长录音理解还需联合内容、说话人身份、轮次顺序与时间关系证据，单一转写文本难以支撑。

**核心思路与方法架构：** 本文 Task 1 采用 MOSS Transcribe Diarize，遵循编码器适配器解码器结构，以 Whisper-large-v3 编码器抽取帧级表示并做时域合并压缩，经声学适配器映射至 Qwen3-8B 解码器隐空间并插入音频占位处，输出序列化为 `[start][Sxx] transcript [end]` 格式，其中 `[Sxx]` 为录音内局部说话人编号，并插入 5 秒时间标记以强化长录音时间定位。训练分三阶段推进，先用约 10 万小时量级公开 ASR 数据激活多语言识别，再用会议会话数据加约 5 千小时合成多说话人会话激活说话人归属生成，最后在 7080 条约 2505.8 小时官方数据上做领域适配，全程采用 32k 或 128k 词元上下文并对局部说话人编号做随机重映射增强。Task 2 复用 MOSS-Audio-8B-Thinking，以 0.6B 量级音频编码器经门控多层感知适配器连接 Qwen3-8B 解码器，编码器以 12.5 Hz 输出并用滑窗注意力实现长度线性扩展，叠加跨层注入与时间标记后直接从音频回答选择题，训练先做监督适配再做基于规则奖励的 DAPO 强化学习，全程不使用 Task 1 转写作为中间证据。

**关键实验与核心代价：** Task 1 在官方多语言会话转写评测中，开发集时间受限混合错率 tcpMER（按语言选用 tcpWER 或 tcpCER，越低越好 ↓）为 15.73，评测集 tcpMER 为 14.93，论文未设置外部基线对比故无法量化相对差距。Task 2 在多项选择理解准确率 Accuracy（越高越好 ↑）上第一阶段为 0.94，第二阶段为 0.94，两阶段持平，同样无外部基线与人工听感评测，仅以规则奖励的选项正确性为优化目标。同期开发集总体字错率 CER（越低越好 ↓）为 7.39，含说话人归属的字错率 cpCER（越低越好 ↓）为 10.29。开发集按语言细分显示法语加拿大口音 tcpMER 为 31.85，土耳其语为 25.60，而西班牙语墨西哥口音为 7.18，英语澳大利亚口音为 8.19，提示口音与语言差异仍是主要误差来源。关键消融缺失，论文未报告移除时间标记、合成数据或强化学习后的指标变化，唯一提及的代价处理是对出现重复幻觉尾部的少数样本用贪婪解码重解一次，训练与推理硬件耗时与实时率 RTF 均未披露。

**适用边界与深读导览：** 上述结论仅在 MLC-SLM 官方长会话多语言录音与官方评分归一化条件下成立，未覆盖强噪声、儿童语音、未见语种或实时流式部署下的失效模式，且口音细分样本多为 5 条至 11 条，单点数值波动较大。俄语 CER 为 27.99 而 tcpMER 为 17.21，原文说明 tcpMER 按语言选用 tcpWER 或 tcpCER，故跨语言不宜直接比较绝对值。时域合并倍数、适配器结构与问答生成过滤阈值等复现细节缺失，开发集仅用于诊断与解码选择，评测集仅用于最终提交，外部资源均为公开资源。欲深究三阶段数据配比与超参可查阅下方方法概述和架构与细节详述，欲核对分语言误差分布可查阅实验结果表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 无预切分多语长对话为何同时考验识别归属与定位

MLC-SLM 2026 挑战使用多语会话录音，覆盖多种语言、口音、说话人数与声学条件，评测音频为长形态自然对话，与干净朗读差异明显，测试时不提供人工切分边界与说话人标签，系统需要在统一视角下处理语音识别、说话人归属、时间定位与长上下文理解，任何依赖预切分的处理都无法直接套用。

任务一为带说话人归属的多语会话转写，要求输出局部说话人标签与时间戳，主要指标为随语种变化的 tcpMER ，该指标按语种选用 tcpWER 或 tcpCER ，开发阶段辅以 CER 与 cpCER 字符级诊断，系统既要降低词或字错误，又要保持说话人一致性与切分时刻准确，两类误差相互牵制。

任务二为同一风格长录音上的选择题理解，给定一段多说话人对话录音、一个问题与多个候选项，系统必须抽取语义、说话人相关与时间方面的证据并选出唯一有效选项，官方指标为选择准确率，论文强调直接从音频作答，不把任务一转写结果作为中间文本证据。

已有主流路线若把切分、归属与识别拆成独立阶段，硬接口会传播误差，长录音中的轮替、停顿与重叠更会放大边界错误，而多语混合与口音变化又使声学建模与语言建模同时承压，因此论文把转写侧统一为端到端序列建模，把理解侧统一为音频条件直接推理，以减少阶段割裂带来的信息损失。

### 两套音频中心系统如何分工完成转写与理解

论文为 2 个任务准备了相互独立的音频中心系统，任务一使用 MOSS Transcribe Diarize ，简称 MTD ，任务二使用 MOSS-Audio-8B-Thinking ，两者的训练资源与最终评测协议在第 4 节汇总，任务二的训练与推理均不使用 MTD 假设作为中间文本证据，从而保持音频直接作答的接口一致。

信号规格方面，任务一输入波形重采样至 16 kHz 并提取对数梅尔特征， Whisper-large-v3 编码器提取帧级声学表示，相邻编码状态在时间上合并以压缩序列长度，声学适配器再投影至 Qwen3-8B 隐空间，并插入解码器序列的音频占位处，使大语言模型能在保留自回归生成的同时以语音为条件，任务二编码器约 0.6B 规模，经 GatedMLP 适配器连接 Qwen3-8B 解码器，输出 12.5 Hz 表示并采用滑动窗口注意力，使计算随音频长度线性增长，另以跨层注入与交织时间标记提供定位能力。

以 1 秒样本贯穿张量流为例， 1 秒 16 kHz 波形先变为对数梅尔特征帧，经编码器得到帧级表示，相邻帧合并压缩后经适配器映射为与解码器同维的音频嵌入，嵌入放在占位位置与指令提示拼接，解码器按序生成 [开始] [说话人编号] 转写文本 [结束] 结构，其中 5 秒时间标记穿插在音频流中，帮助长录音建立时刻对应，任务二则把整段录音、问题与全部候选项装入同一提示模板，先生成显式推理过程再锁定单个选项标签。

输出格式把识别、切分、时间戳与归属统一为序列目标，形式为 [开始] [Sxx] 转写文本 [结束] ，其中 [Sxx] 表示录音内局部说话人编号，解码提示要求模型产生符合挑战格式的有效时间戳转写，任务二的思考变体则先输出推理轨迹再给出最终选择，适用于需要综合长距离多说话人线索的理解问题。

### MTD 三阶段训练怎样建立多语识别与说话人归属

第一阶段激活多语识别能力，使用 32k 词元上下文，全局批量 960 ，单轮训练，基础学习率 1e-4 ， Whisper 低秩适配学习率 1e-3 ，混合语料强调野外与长形态来源，包括网页音频、访谈、会议、讲座与自发语音，而非仅干净朗读，原始音频被归一为统一转写风格，其中一部分时间戳字幕数据保留时刻信息，使模型在任务适配前先学习时间感知生成。

该阶段的公开语料规模均为近似小时数， YODAS 约 35,000 小时， Emilia 约 25,000 小时， WenetSpeech 约 10,000 小时， People’s Speech 约 10,000 小时， GigaSpeech 约 5,000 小时， SPGISpeech 约 3,000 小时， Common Voice 约 7,000 小时， LibriLight 约 5,000 小时，另有其他公开识别语料，论文未给出精确合计，教学时可把这一阶段理解为用 100000 小时量级数据换取多语与多风格覆盖。

第二阶段激活说话人归属生成，使用 128k 词元上下文与 5 秒时间标记，全局批量 32 ，共 3 轮，学习率 1e-4 ，公开会议会话语料包括 AISHELL-4 120 小时， AliMeeting 119 小时， MagicData-RAMC 180 小时， AMI 100 小时， ICSI 72 小时， VoxConverse 50 小时， NOTSOFAR-1 约 1,000 小时， IVOD 约 1,000 小时， VoxPopuli 与 Europarl-ST 约 1,000 小时，另从监督语料与官方训练集抽取轮替结构、停顿、重叠与时间戳模式，以说话人级话语片段合成约 5,000 小时多说话人对话，并按目标域响度与频谱特性过滤调整。

第三阶段在第二阶段检查点上用官方 MLC-SLM 训练集做领域适配，共 7,080 条约 2,505.8 小时，使用 128k 词元上下文，全局批量 8 ，学习率 1e-5 ，共 3 轮，开发集用于诊断与解码后处理选择，第二与第三阶段还做说话人标签与标记增强，包括随机重映射局部说话人编号、替换等价标记形式、扰动编号分布并生成内容与时刻不变的等价目标，推理采用固定指令提示，温度 0.8 ，核采样阈值 0.95 ，候选 50 ，解码后仅做评分协议要求的格式与轻量文本归一，极少数出现重复幻觉尾部的样本用贪心重解码一次并在消除退化时采用。

### 无训练问答标签时如何构造挑战风格监督与强化信号

任务二的官方训练材料提供会话音频、转写与说话人信息，但不提供训练集选择题标签，因此论文用 Qwen3-235B-A22B 从官方训练转写与说话人标签生成挑战风格问答，题型贴近官方开发问答，覆盖话语内容、说话人身份、轮次顺序、时间关系与会话意图，并按可答性、候选项无歧义、答案标签有效与源转写一致性过滤，官方开发问答集仅留作提示与解码设置选择，未使用公开指令或问答语料。

监督适配阶段把每例的录音、问题与全部候选项装入与推理相同的思考提示模板，目标答案归一为单个选项标签，不使用 MTD 假设作为中间文本证据，使训练与推理接口完全一致并迫使模型从音频作答，模型先产生显式推理轨迹再给出最终选择，这种紧凑问答格式有助于长多说话人会话的综合推理。

监督之后接 DAPO 风格强化学习阶段，奖励完全基于规则，仅当回答落入候选集合且与参考答案一致才给奖励，每提示扩展为多采样回答组，奖励方差为零的组被动态过滤，更新集中于对错并存的疑难问题而非已饱和题目，使强化信号聚焦困难样本而非重复学习已掌握内容，论文未披露采样数量与优化步数等细节。

推理时每条录音与问题及全部候选项沿用适配时的固定提示模板，以思考格式解码并用确定性解析器抽取最终选项，校验器检查抽取答案属于候选集合，畸形或缺失答案归一为有效提交格式再打包，官方指标为选择准确率，整个问答链路不依赖转写文本，从而避免识别误差向理解环节传导。

### 评测协议与分语种表现如何支撑最终成绩

评测沿用官方协议，任务一以随语种变化的 tcpMER 为准，按语种选用 tcpWER 或 tcpCER ，开发阶段辅以 CER 与 cpCER 字符级诊断，任务二以选择准确率为准，官方评测集仅用于最终提交，外部语音与文本资源均为公开资源，开发集用于诊断评估与解码后处理选择，下表列出任务一开发与评测成绩，数值越低越好。

| 划分 | tcpMER |
| --- | --- |
| 开发集 | 15.73 |
| 评测集 | 14.93 |

开发集 tcpMER 为 15.73 ，评测集 tcpMER 为 14.93 ，评测略优于开发，表明领域适配与解码选择在未见音频上没有明显退化，但原文未报告方差、置信区间与说话人归属相关的 DER 细节，也未提供人工听测对照，因此只能确认平均误差下降，无法判断波动范围与时间定位质量。

任务二分两个评测阶段，均以选择准确率为准，数值越高越好，提示模板与解码设置在开发问答集上选定后冻结用于评测，训练与推理均保持音频直接作答而不引入转写中间结果，第一阶段准确率为 0.94 ，第二阶段准确率为 0.94 ，两阶段完全一致，说明音频条件直接推理在不同评测批次上保持稳定，但原文未披露题目数量、选项分布与难度构成，也未报告神经代理分数或人工听测，无法从感知质量角度交叉验证，稳定性结论仅在官方准确率口径下成立。

开发集分语种共 150 条，总体 CER 为 7.39 ， cpCER 为 10.29 ， tcpMER 为 15.73 ，覆盖多个语种与口音，下表按语种列出字符级诊断与官方语种相关计分，数值越低越好，语种相关计分按语种选用词级或字符级口径，有助于定位弱势口音与口径切换影响。

| Language | N |  | CER cpCER tcpMER |
| --- | --- | --- | --- |
| Total | 150 7.39 | 10.29 | 15.73 |
| English/American | 9 5.19 | 8.57 | 13.35 |
| English/Australian | 6 3.69 | 5.06 | 8.19 |
| English/British | 9 3.46 | 7.91 | 11.94 |
| English/Filipino | 7 2.70 | 8.46 | 13.89 |
| English/Indian | 6 5.33 | 6.21 | 12.94 |
| French | 8 7.23 | 10.05 | 16.58 |
| French(Canada) | 9 10.75 | 18.18 | 31.85 |
| German | 7 8.20 | 9.95 | 17.44 |
| Italian | 6 4.17 | 6.44 | 13.45 |
| Japanese | 11 12.48 | 14.77 | 14.93 |
| Korean | 8 7.57 | 14.76 | 15.46 |
| Portuguese | 10 9.62 | 12.95 | 21.95 |
| Portuguese(Brazil) | 7 4.37 | 4.61 | 9.95 |
| Russian | 5 27.99 | 30.42 | 17.21 |
| Spanish | 5 3.68 | 5.86 | 11.83 |
| Spanish(Mexico) | 5 2.74 | 3.88 | 7.18 |
| Tagalog | 7 6.44 | 7.31 | 24.81 |
| Thai | 5 7.12 | 9.41 | 9.97 |
| Turkish | 7 7.80 | 12.83 | 25.60 |
| Urdu | 5 12.42 | 15.72 | 19.59 |
| Vietnamese | 8 6.43 | 7.63 | 12.23 |

从表中可见西班牙语墨西哥口音 5 条下 tcpMER 为 7.18 ，澳大利亚英语 6 条下为 8.19 ，巴西葡萄牙语 7 条下为 9.95 ，同属较好一端，另一端加拿大法语 9 条下高达 31.85 ，土耳其语 7 条下为 25.60 ，他加禄语 7 条下为 24.81 ，俄语 5 条下 CER 高达 27.99 而 tcpMER 为 17.21 ，日语 11 条下为 14.93 ，韩语 8 条下为 15.46 ，弱势口音仍是主要误差来源，语种相关计分在字符与词级口径间切换。

### 成绩成立的假设边界与未验证部署条件

两项成绩成立的前提是任务专用适配、显式时间标记与紧凑解码格式共同生效， MTD 依赖 128k 词元长上下文容纳长录音，依赖合成多说话人数据与说话人标签增强弥补真实标注不足，任务二依赖从官方转写生成的挑战风格问答与规则奖励强化，离开该数据混合与格式约束，时间定位与说话人一致性难以保证，跨域泛化也未经验证。

代价方面，第一阶段需 100000 小时量级多语识别预热，第二与第三阶段需 128k 上下文多轮微调，任务二还需大模型生成问答与多采样强化，原文未披露计算硬件型号数量、训练步数耗时与推理 RTF 、延迟、显存开销，未说明流式分块或前瞻缓存，工程落地前需自行补测延迟与资源占用，否则无法估计长录音解码成本。

评测层面，任务一未报告说话人归属相关的 DER 时间误差分布，任务二未披露题目数量、选项分布与难度构成，两项均未报告方差、置信区间与人工听测对照，幻觉尾部仅提及少量样本用贪心重解码补救，未量化触发比例与通用性，因此平均指标下降不能等同于时间定位准确与感知质量提升。

### 复现核对清单与工程选型指引

复现核对需区分数据、代码与可运行系统三件事，训练与评测数据清单披露完整，官方训练集为 7,080 条约 2,505.8 小时，三阶段批量、轮数与学习率均有明确数值，推理温度与采样阈值亦有记录，但计算硬件型号数量与训练耗时原文未披露，本次未发现经来源绑定且完成验证的作者代码、权重、数据或演示资源，不应视为已公开。

原文未提供试听页与演示系统，也未列出附录补充证明、额外消融与许可细节，仅在参考文献列出所用公开资源，需按各公开语料各自许可自行准备，复现时应先以开发集分语种诊断确认加拿大法语等弱势口音的短板，再决定是否追加数据或调整提示与解码设置，不虚构听感对比。

工程选型上，若需带时间戳说话人转写且能承担大批量多语预训练与长上下文微调，可参考端到端序列化以避免硬切分接口传播误差，若需长音频选择题理解且无训练问答标签，可参考从转写生成问答再做监督加规则奖励强化的做法，但须预留领域适配数据与解码校验，并以开发集表现作为上线前门槛。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入重采样至 16 kHz 并提取对数梅尔特征，任务二编码器输出 12.5 Hz 表示并采用滑动窗口注意力，音频流穿插 5 秒时间标记，训练使用 32k 与 128k 词元上下文，推理延迟与 RTF 原文未披露
- **训练与评测数据**：任务一第一阶段用 YODAS 约 35,000 小时等十万小时量级公开识别语料，第二阶段用 AISHELL-4 120 小时等会议会话语料加约 5,000 小时合成多说话人对话，第三阶段用官方 7,080 条约 2,505.8 小时训练集，任务二仅用官方数据生成的挑战风格问答并以开发问答集做选择
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时，无推理硬件说明
- **核心超参数与配置**：第一阶段 32k 上下文批量 960 单轮基础学习率 1e-4 低秩适配 1e-3 ，第二阶段 128k 上下文批量 32 三轮学习率 1e-4 ，第三阶段批量 8 学习率 1e-5 三轮，推理温度 0.8 核采样阈值 0.95 候选 50 ，任务二监督归一为单标签加规则奖励强化并过滤零方差组
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐与显存占用，仅披露固定提示解码设置与极少数幻觉尾部用贪心重解码一次的补救
- **开源产物与协议状态**：本次未发现经来源绑定且完成验证的作者代码、权重、数据或演示资源，不应视为已公开，需按各公开语料许可自行准备
- **附录与补充材料要点**：原文未披露附录补充证明、额外消融、许可细节或系统失效分布，仅在参考文献列出所用公开资源

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.6/10 | 实验充分 5.4/10 | 清晰度 6.9/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:chen26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/chen26_mlcslm.pdf)
- Track：Oral Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：三阶段约10万小时公开ASR加会议会话与合成会话再加7080条2505.8小时官方适配构成完整长会话训练链条。

- 核心优势：在官方开发集tcpMER15.73与评测集14.93及两阶段准确率0.94上双划分报告，并附150条分语言诊断与样本量。

- 主要短板：无任何外部基线对照且未报告时间标记合成数据说话人增强与强化学习的消融，贡献无法归因。

- 主要短板：未披露实时率延迟显存功耗与训练推理硬件耗时的任何实测，仅为整录音离线解码。

- 主要短板：时域合并倍数适配器结构问答生成过滤阈值与优化器调度等关键复现细节缺失影响复现。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
