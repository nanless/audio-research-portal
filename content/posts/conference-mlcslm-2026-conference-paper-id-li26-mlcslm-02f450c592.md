---
title: "The SMIIP System for Multi-Speaker Automatic Speech Recognition in the 2nd MLC-SLM Challenge"
date: 2026-11-27
draft: false
description: "针对无预先说话人标签与时间边界的多语言会话转写，该工作用 w2v-S2SND 切分前端提供离散说话人与时间词元引导基于 Qwen3 的 DM-ASR 逐轮转写，在开发集与评测集上达到 24.50% 与 19.97% 的 tcpMER 大幅优于 79.15% 的官方基线，代价是两阶段训练与切分误差传导且难语言仍高于 40% 。"
tags: ["LoRA", "大语言模型", "说话人分离标注", "多说话人语音识别"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "先切分后逐轮转写的多说话人语音识别系统"
paper_digest_original_title: "The SMIIP System for Multi-Speaker Automatic Speech Recognition in the 2nd MLC-SLM Challenge"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:li26_mlcslm"
paper_digest_workbench_source_sha256: "18700be9e25473ac0316acf2f90952a3495a9b2df65260aedb36fb4c4198a6a4"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "多说话人语音识别"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对无预先说话人标签与时间边界的多语言会话转写，该工作用 w2v-S2SND 切分前端提供离散说话人与时间词元引导基于 Qwen3 的 DM-ASR 逐轮转写，在开发集与评测集上达到 24.50% 与 19.97% 的 tcpMER 大幅优于 79.15% 的官方基线，代价是两阶段训练与切分误差传导且难语言仍高于 40% 。"
paper_digest_reader_sections: [{"heading":"无预先切分时多说话人转写为何要同时回答谁何时说了什么","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"先切分再逐轮转写的总体设计与离散结构接口","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"w2v-S2SND 前端与逐轮对话式识别后端如何分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"单阶段与两阶段训练的冻结边界及推理缓存复用","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"总体大幅优于基线但难语言仍维持高错误率","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"评估前提、复现核对与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Artifcial Intelligence, Wuhan University, China","School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Li Li"},{"affiliations":["School of Computer Science, Wuhan University, China","School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Ze Li"},{"affiliations":["School of Artifcial Intelligence, Wuhan University, China","School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Jincheng Wang"},{"affiliations":["School of Artifcial Intelligence, Wuhan University, China","School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Ming Li"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"dae234ef9272c42ecfa95278d95973969ae8141d9a37483a6208911ae58802b4","url":"/audio-research-portal/client/papers/2026-11-27/conference-02f450c592089b80820a369b/citation.bib"},"citation.json":{"sha256":"4607f19c65ae3fb2e95db93cc9cae30a9de6977ddc6e3be5013e281665532782","url":"/audio-research-portal/client/papers/2026-11-27/conference-02f450c592089b80820a369b/citation.json"},"citation.ris":{"sha256":"b14b71615933d6ff63e687f1ef2314ac98dc31e91270d3bc1394978da678ebcf","url":"/audio-research-portal/client/papers/2026-11-27/conference-02f450c592089b80820a369b/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5dfcd38604aadbb02dd6c719edf9e8e764e98fc527219eb431477beb477c859e","url":"/audio-research-portal/client/papers/2026-11-27/conference-02f450c592089b80820a369b/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:li26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "7efe59aa7e6a3397786c39800144dd00ca9477253719c38b850a9def61aa4d77"
paper_digest_api_reader_plan_sha256: "4d461450997107d5838e2ace7e00017af61e55d8ded2cc70cf9e01b65507cf45"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e03991d808a7d9e12e24847ac0e8f5257cc960d66e12f97e9e40cc05ef8e5594"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "69183fbffb37e2b67a1d95ecf67ff3823a82dc66dbe312456fd83d88724a083a"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9b5c1996d333e3d1f0fa136a73004e265cda2cc028fe0d4d5c7c082e65e7c290"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.multi-talker-asr","label":"多说话人语音识别"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 先切分后逐轮转写的多说话人语音识别系统

> 英文题目：*The SMIIP System for Multi-Speaker Automatic Speech Recognition in the 2nd MLC-SLM Challenge*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:li26_mlcslm`
> Track：Poster Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)；[语音识别](/audio-research-portal/papers/?concept=task.asr) → [多说话人语音识别](/audio-research-portal/papers/?concept=task.multi-talker-asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **模型家族**：[大语言模型](/audio-research-portal/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.0/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.3/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Li Li：School of Artifcial Intelligence, Wuhan University, China；School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China
- Ze Li：School of Computer Science, Wuhan University, China；School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China
- Jincheng Wang：School of Artifcial Intelligence, Wuhan University, China；School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China
- Ming Li：School of Artifcial Intelligence, Wuhan University, China；School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China

## 📌 核心摘要

**问题与瓶颈：** 第 2 届 MLC-SLM 挑战赛任务 1 要求从原始未切分的约 2100 小时多语种会话录音直接输出谁在何时说了什么，全程不提供 oracle 说话人标签与时间边界，覆盖美音、澳音、英音、法语、德语、日语、韩语及加拿大法语、墨西哥西班牙语、巴西葡萄牙语等 21 种语言变体。系统须同时解决词汇识别、说话人归属与时间定位，并在快速轮转、语音交叠与口音差异下保持解耦。官方基线基于微调后的 VibeVoice-ASR 模型，在开发集上平均时间受限最小置换混合错率（time-constrained minimum-permutation mixed error rate，tcpMER，越低越好 ↓）高达 79.15%，说明缺乏显式结构先验时多说话人转写难以成立。

**核心思路与方法架构：** 系统沿用另文 DM-ASR [13] 的 diarization-aware 设计，先由 w2v-S2SND 前端预测 utterance 级说话人标签与起止边界，再将每段 speaker、start 与 end 重映射并离散化为专用说话人序号与时间序号词元，最后由后端逐轮转写。单条会话共享音频上下文，每轮只转写一个说话人在一个时间段内的内容，输出为词汇词元与离散时间戳词元交错的序列以实现词级时间戳。后端由 Whisper-large-v3-turbo 编码器、两层 GELU MLP 投影器与 Qwen3-4B 解码器组成，推理首轮编码音频块并缓存 KV 状态，后续轮次复用缓存的音频表示并仅更新文本提示。说话人归属沿用分离预测，段边界再用大语言模型预测的词级时间戳精修，全程无需提取连续说话人嵌入，主干编码器与大语言模型保持冻结，仅优化投影器与插入的 LoRA 参数。

**关键实验与核心代价：** 开发集上平均 tcpMER 从官方基线的 79.15% 降至 DM-ASR 的 24.60% 与 DM-ASR* 的 24.50%，评测集上 DM-ASR* 的 19.97% 低于 DM-ASR 的 20.36%，均为 MeetEval 协议下时间受限最小置换评测且数值越低越好，评测集仅有经官方服务器返回的平均分。模拟预训练增益较小，开发集从 24.60% 变为 24.50%，评测集从 20.36% 变为 19.97%，且部分语言回升，如 Turkish 从 43.57% 变为 43.69%，English-American 从 21.18% 变为 21.40%。分语言跨度仍大，Spanish-Mexico 的 10.28% 与 Portuguese-Brazil 的 12.73% 较低，而 French-Canada、Turkish 与 Urdu 均高于 40%，其中 Urdu 在 DM-ASR* 下为 47.37%。代价方面，分离前端开发集离线分离错误率（diarization error rate，DER，越低越好 ↓）为 13.61%，训练共用约 4800 小时真实会话与会议语音加 CommonVoice 构造的模拟数据，但原文未报告学习率、批量、步数、硬件与 RTF 或时延等实测成本，时间戳对识别的独立贡献也未单独量化。

**适用边界与深读导览：** 结论成立依赖于分离前端能提供可用的说话人与边界先验，以及评测域落在已覆盖的多语种会话与会议训练分布内，盲测集 19.97% 表明该组合具有一定泛化能力。未覆盖情形包括强口音与低覆盖语言的高错误区、交叠程度的单独量化、在线流式约束与真实延迟吞吐，误差传播与词级时间戳精度也未独立评估，因此尚不能直接推断部署表现。欲深究离散词元接口、KV 复用推理与两阶段训练的实现与消融，可查阅下方方法概述和架构、实验结果与细节详述对应章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 无预先切分时多说话人转写为何要同时回答谁何时说了什么

真实对话转写与单人朗读识别差异明显。系统输入是一段未经切分的原始会话录音，其中包含快速轮换与声音重叠。系统输出需要同时给出文字内容、每一句话的说话人编号以及对应的起始与结束时间。评测使用 MeetEval 工具计算 tcpWER（时间受限最小排列词错误率）与 tcpCER（时间受限最小排列字错误率），并以 tcpMER（时间受限最小排列混合错误率）汇总总量，时间错位与说话人混淆都会直接推高分数。

第二届多语言会话语音建模挑战赛为该问题提供了大规模检验场景。挑战数据包含约 2,100 小时多语言会话语音，覆盖加拿大法语、墨西哥西班牙语与巴西葡萄牙语等多种语言与口音变体。任务一要求在没有任何预先说话人标签与时间边界的条件下，直接从原始录音完成切分与识别。官方基线基于微调后的 VibeVoice-ASR 模型构建，开发集平均成绩明显偏高，说明直接端到端建模仍有很大缺口。

难点集中在 3 个相互纠缠的维度。语言维度需要处理多语种与口音差异，声学维度需要应对重叠语音与快速抢话，结构维度需要判断何时换人以及每段语音的边界位置。若要求单个模型仅从原始监督信号同时推断归属、结构与词汇内容，搜索空间会急剧膨胀，时间偏差还会进一步污染文字与说话人判断。这种耦合使得模型既要记住声音特征，又要学习语言内容，容易顾此失彼。

已有路线大致分为两类。一类是将切分、归属与识别放在一个输出流中联合推断，结构简单但学习负担最重。另一类引入连续说话人向量作为辅助条件，需要在推理时额外抽取向量，并维护切分与识别之间的复杂接口，流程相对繁琐。本文系统选择第三条路线，先用较强的切分前端提供显式结构先验，再让识别后端专注于词汇判断，并以离散词元作为两者之间的简洁接口，从而降低联合推断的难度。

### 先切分再逐轮转写的总体设计与离散结构接口

要一次看清本文流程，建议先对照总览图理解两大模块的分工与数据走向。左侧负责从原始波形中得到说话人与时间结构，中间将结构整理为标准化标注，右侧负责在该结构引导下逐段生成文字。下面先给出官方原图，再结合像素解释各方框、颜色与箭头的具体含义，便于后续追踪交接物的变化。

[![原论文 Figure 1：Overview of our developed system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/7f8174632afc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/7f8174632afc/figure-1.png)

*论文图 1：系统总览：左侧切分前端输出结构标注，右侧识别后端逐轮生成转写文本（原论文 Figure 1）。*

原图上方为一段橙色波形示意，向下箭头指向浅蓝色圆角方框，框内标注说话人切分与 w2v-S2SND 字样。下方虚线框内并列 3 个浅黄色小条，分别标注不同说话人编号与起始结束位置，右侧标有 RTTM 字样。一条黑色折线从该虚线框向右再向上折入右侧浅蓝色大方框，框内标注切分感知的多说话人识别与基于 Qwen3 字样，框下黑色箭头指向文档图标，图标下方标注转写文本字样，整体呈现先切分后识别的走向。

与依赖连续说话人向量的方法相比，本文的实质增量在于接口的离散化。系统保留强切分前端与大语言模型后端的分工，但不再抽取连续向量，而是将预测的说话人编号与起止时间重映射并离散为专用的说话人索引词元与时间索引词元。后端由 Whisper-large-v3-turbo 编码器、轻量 MLP（多层感知机）投影器与基于 Qwen3 的 4B 解码器组成，并增加词级时间戳的交错生成，使每个词都带有预测的时间边界。原文未披露采样率、帧长、步长、码率与特征维度等信号规格。

以 1 秒原始会话录音为例，数据依次经历 4 个交接点。第一步由切分前端从波形抽取帧级声学表示并直接预测话语级边界，无需预先语音端点检测或真实说话人标签。第二步将多个说话人、起始与结束三元组整理为 RTTM（说话人时间标注）形式，再离散为结构词元。第三步将共享音频表示与当前轮次的文本提示共同送入解码器，每一轮只转写一位说话人在一个时间段内的内容。第四步汇总各轮文字与词级时间戳，并结合切分预测的说话人标签形成最终评分输入。原文未披露各阶段张量形状与帧率变化，因此无法给出具体维度数值。

### w2v-S2SND 前端与逐轮对话式识别后端如何分工

切分前端采用 w2v-S2SND 框架，并在原始序列到序列切分结构上替换了音频前端。传统残差网络被替换为在说话人确认任务上微调过的 w2v-BERT 2.0 个模型，用于抽取帧级声学表示。该前端同时支持在线与离线推理，可直接预测话语级时间边界，不依赖预先语音端点检测或真实说话人标签。预训练先在 VoxCeleb2 构造的仿真多说话人混合语音上进行，再在官方挑战训练数据上微调以贴合目标领域。

切分输出的结构先验需要经过离散化才能被后端使用。预测的话语标签与起止边界首先表示为包含说话人、起始与结束的三元组集合，再重映射为统一编号。随后时间边界被量化为离散时间索引词元，说话人编号被映射为专用说话人索引词元。这种表示将谁与何时等结构线索与具体说什么的词汇内容显式解耦，使解码器无需从连续向量中再推断身份与时间，只需按指令完成受限转写。

识别后端遵循切分感知的多说话人建模方式，将整段转写拆为一系列受说话人与时间条件约束的轮次。每一轮给定共享音频上下文与当前段的结构词元，要求模型只转写该说话人在该时间段内的文字，而不是一次性输出全部说话人与时间信息。这种多轮对话式生成降低了单次解码的负担，也使上下文可以在轮次之间得到利用。词级时间戳以词汇词元与时间戳词元交错的形式生成，从而实现细粒度的时间对应并改善结构化输出。

后端硬件由三部分构成。语音编码器负责将音频块转换为高层表示，轻量多层感知投影器负责将语音表示映射到语言模型空间，基于 Qwen3 的解码器负责按轮生成文字与时间戳。与早期依赖连续说话人向量的方法不同，本文解码器仅以离散说话人与时间词元为条件，推理时无需额外抽取说话人向量，接口更为简洁。这种设计把声音层面的区分工作留给前端，把语言层面的识别工作留给后端。

### 单阶段与两阶段训练的冻结边界及推理缓存复用

训练数据由真实会话与仿真会话两部分构成。挑战本身提供约 2,100 小时多语言会话语音，实际训练使用的真实数据共约 4,800 小时，包括官方挑战语料、 AMI ICSI 与 Fisher 等英语会议会话语料，以及 AISHELL-4 AliMeeting MISP2025 HKUST 与 MagicData-RAMC 等普通话会议会话语料。切分前端的仿真预训练另用 VoxCeleb2 构造混合语音，识别后端仿真预训练另用 CommonVoice 构造多语言多说话人会话。提示词构造、训练目标与优化设置沿用 DM-ASR 文献。

两个识别变体仅在是否经过仿真预训练上存在差别。不做仿真预训练的 DM-ASR 采用单阶段训练，直接在真实会话数据上优化投影器与插入的 LoRA（低秩适配）参数，同时冻结语音编码器与大语言模型的主干权重。增加仿真预训练的 DM-ASR* 采用两阶段策略，第一阶段仅在仿真多语言多说话人会话上训练投影器，并冻结编码器与大语言模型，第二阶段再在相同真实数据集上同时优化投影器与插入编码器与解码器的 LoRA 模块，仍保持主干权重冻结。

这种冻结边界的设计意图明确。语音编码器与大语言模型提供通用的声学与语言能力，不直接更新以避免破坏预训练知识，可训练部分集中在模态对齐与任务适配上。第一阶段让投影器先在受控仿真数据上学会多说话人结构，第二阶段再用真实会议与电话会话数据精修投影器与轻量适配参数。原文未披露优化器类型、学习率、批大小、训练步数与硬件耗时，因此无法从优化角度解释收敛细节。

推理执行采用首轮编码复用的方式。第一轮对音频块进行编码并缓存键值状态，后续轮次复用已缓存的音频表示，仅更新文本提示部分，从而减少重复计算。说话人归属采用切分提供的结果，时间边界则用大语言模型预测的词级时间戳进一步精修。最终提交将切分预测的说话人标签与模型生成的词级时间戳及转写文本组合，用于 tcpMER 评分。原文未披露分块长度、前瞻窗口、采样步数、延迟与吞吐等部署开销。

### 总体大幅优于基线但难语言仍维持高错误率

评测采用 MeetEval 协议，指标为时间受限最小排列词错误率与字错误率，总体以 tcpMER 汇总，数值越低表示转写与归属越准确。切分前端在开发集上的离线 DER（切分错误率）为 13.61% ，为后续识别提供结构先验质量参考。所有系统均在开发集上评测，评测集仅能通过官方服务获得总体平均分，分语言评测集分数未公开。官方基线为微调后的 VibeVoice-ASR 模型，本文两个变体仅在是否增加仿真预训练上不同。本文未报告人工听测分数，也未使用神经代理质量分，结论完全基于错误率类客观指标。

下表汇总总体平均成绩，单位为 tcpMER % ，与原表标题一致，数据格保留原数值写法，短横表示该项未公开。为便于初学者对照，行对应不同系统，列对应开发集与评测集，开发集为完整公开分数，评测集仅有总体平均通过官方服务获得，基线评测集总体分数缺失，分语言细节见后文文字说明。

| 语言 | 官方基线开发集 (tcpMER %) | 官方基线评测集 (tcpMER %) | DM-ASR 开发集 (tcpMER %) | DM-ASR 评测集 (tcpMER %) | DM-ASR* 开发集 (tcpMER %) | DM-ASR* 评测集 (tcpMER %) |
| Overall | 79.15 | - | 24.60 | 20.36 | 24.50 | 19.97 |

从总体平均看，官方基线开发集为 79.15% ， DM-ASR 将开发集降至 24.60% ，评测集为 20.36% ， DM-ASR* 进一步将开发集降至 24.50% ，评测集降至 19.97% 。两轮改进幅度显示，从基线到对话式建模的收益最大，增加仿真预训练的额外收益较小，但在盲测评测集上泛化更好。基线评测集总体分数未公开，无法直接对比评测集上的基线差距，开发集到评测集的数值下降也与数据划分差异有关，不宜直接理解为模型在评测集上更强。

分语言表现差异明显，以下分语言数值引自原文完整 Table 1（本精简表未列出）。英语各变体大多在 13% 至 21% 之间，墨西哥西班牙语约 10.28% 与巴西葡萄牙语约 12.73% 为最低，加拿大法语、土耳其语与乌尔都语均高于 40% 。 DM-ASR* 并非在每一语言上都优于 DM-ASR ，例如菲律宾英语、印度英语、法语与德语等出现小幅回升，说明仿真预训练的平均增益伴随一定的语言间波动，剩余误差集中在口音变化大、训练覆盖有限与语言复杂度高的语种。

从归因看，开发集从 24.60% 到 24.50% 与评测集从 20.36% 到 19.97% 的变化仅来自是否增加仿真预训练，增量虽小但评测集相对更明显，支持泛化改善的判断。原文未提供离散与连续接口的直接消融，也未量化词级时间戳与切分误差对最终分数的各自贡献。方差、置信区间、听众规模与显著性检验均未披露，且分语言评测集与基线评测集分数缺失，延迟、吞吐与显存等部署代价也未评测，因此结论仅在给定数据与离线评分条件下成立。

### 评估前提、复现核对与工程选型建议

本文结论依赖两个隐含前提。其一是切分前端提供的说话人与边界足够准确，后续转写默认沿用该归属，仅用词级时间戳精修边界，若切分出现漏检或串话，误差会直接传导到转写。其二是离散词元能够充分表达时间信息，量化粒度与编号方式未在正文中展开，极端重叠与快速轮换下的边界精度仍是潜在瓶颈。开发集离线切分错误率仅作为单点报告，未给出在线模式与不同重叠比例下的表现。

未验证的部署条件较多。原文未披露流式因果与离线模式的对比，未报告 RTF（实时率）、首包延迟、显存占用与参数量，也未说明长录音分块策略与缓存增长情况。对于需要低延迟交互的场景，首轮编码复用虽能减少重复计算，但多轮解码的累计耗时与最长上下文限制仍未知。高错误率语种的声学与语言覆盖不足问题，也未通过增加目标领域数据加以验证。

复现需要区分三件不同的事情。代码是否开源方面，原文仅提及基线仓库、模型页与文献链接，未披露本文系统代码是否公开。权重是否提供下载方面，原文未说明切分与识别权重是否可直接获取。系统是否可直接运行方面，原文未提供环境配置、推理脚本与演示页，文末也未给出试听对照。因此目前只能依据文字描述核对数据构成与训练冻结边界，无法直接运行验证。本文未设试听页，不涉及听感对比。

工程选型可依据语言分布与误差容忍度权衡。若目标以英语变体、墨西哥西班牙语与巴西葡萄牙语等较低错误率语种为主，当前离散接口加逐轮转写的方案具有简洁性优势。若目标包含加拿大法语、土耳其语与乌尔都语等高错误率语种，则需预留领域自适应与切分纠错预算，并优先补足目标口音的训练覆盖。任何上线前都应在自有长录音上复测时间受限混合错误率，而不仅依赖开发集单点分数。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长步长码率通道数与特征维度，输入为原始未切分会话录音，输出为带说话人标签与词级时间戳的转写文本
- **训练与评测数据**：挑战数据约 2,100 小时多语言会话语音，训练使用官方 MLC-SLM 语料加 AMI ICSI 与 Fisher 等英语会议会话语料与 AISHELL-4 AliMeeting MISP2025 HKUST 与 MagicData-RAMC 等普通话会议会话语料共约 4,800 小时，切分前端另用 VoxCeleb2 仿真混合预训练， DM-ASR* 首阶段另用 CommonVoice 构造仿真多语言多说话人会话
- **算力与训练耗时**：原文未披露训练所用 GPU TPU 型号数量步数与耗时，也未披露推理所用硬件配置
- **核心超参数与配置**：语音编码器为 Whisper-large-v3-turbo ，投影器为两层 GELU MLP 解码器为 Qwen3-4B ，训练仅更新投影器与插入的 LoRA 参数并冻结主干权重，优化器学习率批大小轮数等原文未披露并沿用 DM-ASR 文献设置
- **推理速度与部署开销**：推理时首轮编码音频块并缓存键值状态，后续轮次复用音频表示仅更新文本提示，说话人归属沿用切分预测并用词级时间戳精修边界，原文未披露延迟吞吐显存参数量与 RTF
- **开源产物与协议状态**：原文提及官方基线仓库 Qwen3-4B 模型页 DM-ASR 预印本与挑战赛页链接，原文未披露代码权重数据是否公开可下载与可直接运行说明
- **附录与补充材料要点**：原文未设独立附录，未披露额外证明补充消融许可限制，正文仅按语言讨论剩余误差集中情况

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.0/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.3/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:li26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/li26_mlcslm.pdf)
- Track：Poster Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：开发集平均tcpMER从官方基线79.15%降至24.50%，评测集达19.97%，提升幅度巨大且经官方服务器盲测验证。

- 核心优势：分离前端预测话语级边界并离散化为说话人与时间词元，多轮复用KV缓存逐轮转写，管线设计完整自洽。

- 核心优势：覆盖21种语言变体的分语言细粒度对照并报告离线DER为13.61%，高低错误语言分布透明可核对。

- 主要短板：核心多轮分解与纯离散接口完全沿用另文DM-ASR[13]，模拟预训练开发集仅24.60%变为24.50%且Turkish等回升，词级时间戳独立贡献未消融。

- 主要短板：训练目标提示构造与优化设置完全沿用外部文献，未披露学习率批量步数硬件与解码配置及重映射量化规则。

- 主要短板：未报告RTF时延吞吐硬件显存等实测成本，分离采用离线模式，在线流式约束与部署表现未经验证。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
