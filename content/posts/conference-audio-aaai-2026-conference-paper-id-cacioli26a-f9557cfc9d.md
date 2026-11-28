---
title: "Can You Hear Naples? Building and Benchmarking a Neapolitan Speech Corpus"
date: 2026-11-27
draft: false
description: "针对标准意大利语识别系统在那不勒斯语上系统性失效的问题，本文构建了 141 个片段的单说话人朗读语料并以意大利语配置的冻结 Whisper 为外部评测工具，得到词错误率 86.94 % 与 BLEU 0.0436 等极低分数，代价是结论仅适用于该说话人与朗读场景而无法推广到人群层面。"
tags: ["数据集", "数据集构建", "低资源", "语音", "语音识别"]
categories: ["audio-aaai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听见那不勒斯：首个那不勒斯语口语语料库的构建与评测"
paper_digest_original_title: "Can You Hear Naples? Building and Benchmarking a Neapolitan Speech Corpus"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:audio-aaai:2026:conference-paper-id:cacioli26a"
paper_digest_workbench_source_sha256: "9c08d7f650ce47e81fccb77b65b19581913317910b44d8629adbf4325b530b62"
paper_digest_workbench_record_url: "https://proceedings.mlr.press/v312/cacioli26a.html"
paper_digest_workbench_pdf_url: "https://raw.githubusercontent.com/mlresearch/v312/main/assets/cacioli26a/cacioli26a.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音识别"
paper_digest_score: 5.5
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对标准意大利语识别系统在那不勒斯语上系统性失效的问题，本文构建了 141 个片段的单说话人朗读语料并以意大利语配置的冻结 Whisper 为外部评测工具，得到词错误率 86.94 % 与 BLEU 0.0436 等极低分数，代价是结论仅适用于该说话人与朗读场景而无法推广到人群层面。"
paper_digest_reader_sections: [{"heading":"那不勒斯语与标准意大利语的系统性差异为何导致识别失效","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三阶段语料构建与外部评测流程如何实现可复制","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"单说话人录音规范与方言特征保留的具体做法","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"141 个片段上的四项指标揭示了怎样的失效程度","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"四类典型错误如何暴露意大利语先验的系统性偏置","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单说话人与朗读场景限制下的复现边界与选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Michael Cacioli"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Liam Eggleston"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Jatin Sarabu"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Kevin Zhu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"37477b6ae3bd0d795a7e16d6aa18f4b55247d77c9b6a83687ec052a13264760a","url":"/audio-research-portal/client/papers/2026-11-27/conference-f9557cfc9d08e0d477cd54e8/citation.bib"},"citation.json":{"sha256":"642c6846cb1ffce86bc5320370c6f33ac6cf612a7e95a12577cfbac029c4de89","url":"/audio-research-portal/client/papers/2026-11-27/conference-f9557cfc9d08e0d477cd54e8/citation.json"},"citation.ris":{"sha256":"4c640ae265a84223329b20309e4552c1f035661bcb1e5d36822edefefa04ea5e","url":"/audio-research-portal/client/papers/2026-11-27/conference-f9557cfc9d08e0d477cd54e8/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8d9b096ae49759c6b2852d44c4a4bdaef0df5b1f96513abfac5ec863114a54e5","url":"/audio-research-portal/client/papers/2026-11-27/conference-f9557cfc9d08e0d477cd54e8/rethink-context.json"}}
paper_digest_paper_id: "conference:audio-aaai:2026:conference-paper-id:cacioli26a"
paper_digest_source_kind: conference
paper_digest_conference_id: "audio-aaai-2026"
paper_digest_conference_name: "audio-aaai-2026"
paper_digest_conference_record_url: "https://proceedings.mlr.press/v312/cacioli26a.html"
paper_digest_conference_pdf_url: "https://raw.githubusercontent.com/mlresearch/v312/main/assets/cacioli26a/cacioli26a.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "02e75d23acd49496cf9a6beb0d6cb6ca0e5195b96c5fda76e813b709f739c16d"
paper_digest_api_reader_plan_sha256: "4502a4f696f6c20e3a821e4ff0a3d1b0195862a8af7a08925daf657e039717d2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d3ac84dbcf169f09cbc2d75b24dd7bf173a7682848f0579098c085c1bda7563d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "47a0e19e26757746efe7533e6b0c8c231490647688de3079493314ef8e18023c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2ba17501d7820f2aefdbb57fbc4b20980f2d5ee5c6ac73e8757eff1049cdfd2f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a9a5f0232d7d435819c6dcebfddfbe19d742fd597c4df2555e072727948a5f56"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 听见那不勒斯：首个那不勒斯语口语语料库的构建与评测

> 英文题目：*Can You Hear Naples? Building and Benchmarking a Neapolitan Speech Corpus*

> 会议身份：`conference:audio-aaai:2026:conference-paper-id:cacioli26a`
> Track：Audio-AAAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://proceedings.mlr.press/v312/cacioli26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v312/main/assets/cacioli26a/cacioli26a.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.5/10** | 创新 6.2/10 | 技术严谨 5.6/10 | 实验充分 5.2/10 | 清晰度 6.8/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 4.5/10

排名：后50% | 文档类型：数据集与基准

## 👥 作者与机构

- Michael Cacioli：机构信息未能从会议 PDF 纯文本可靠映射
- Liam Eggleston：机构信息未能从会议 PDF 纯文本可靠映射
- Jatin Sarabu：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Zhu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 那不勒斯语是意大利南部那不勒斯及周边省份使用的意大利罗曼语变体，输入为单句朗读语音，输出为正字法转写文本，语料平均每句约 5.27 s，共 141 句。现有主流做法在调用通用多语言识别模型时直接以标准意大利语代理那不勒斯语，因两者并非口音差异而是系统性分化，频繁出现词尾元音删除、辅音同化、重音移位及标准意大利语中不存在的方言词项，导致意大利语先验把方言音段误判为无关意大利语词，句法也被强制改写为标准意大利语序，语义看似流畅实则失真。更根本的瓶颈是此前缺乏结构化口语资源，无法系统度量这种跨方言迁移失效，也难以支撑方言学研究与公平语音技术。

**核心思路与方法架构：** 与依赖现成意大利语料复用的路线相比，本文增量在于新建小而受控的那不勒斯语口语语料库并以其为探针做跨方言诊断，保留自然方言结构，舍弃多说话人混杂以保证可复制性。流程沿单条样本展开，母语者朗读经筛选的剧本、诗歌或博客句子，经 iPhone 13 自带录音应用 Voice Memos 在安静室内以稳定语速音量录制为 M4A 文件，再做峰值归一化到 -1.0 dB 与 -35 dB 静音修剪并统一命名为 NNN.m4a，配以包含编号、领域、转写与时长的 JSON 元数据，人工转写采用那不勒斯语正字法并以撇号标记删音、双写辅音标记长音。评测阶段不训练任何模型，仅以后期外部工具方式调用 Whisper API 并固定 language 为 it，对 141 个片段做离线整句识别，再与人工参照比较文本重叠，直击意大利语模型对系统性音系与词汇分化的处理失效。

**关键实验与核心代价：** 在 141 个片段的那不勒斯语口语语料上，以人工转写为参照，Whisper 意大利语设置转写质量很差，WER（词错率，越低越好 ↓）平均为 86.94%（σ = 16.54%），对应 1 - WER 平均为 0.1306（σ = 0.1654），约 87% 的词与参照不一致。同一设置下 BLEU（n 元组重叠分数，越高越好 ↑）平均为 0.0436（σ = 0.0961），多数片段接近于 0，归一化 Levenshtein 相似度（字符级相似度，越高越好 ↑）平均为 0.6360（σ = 0.1375），Jaccard 相似度（词集合重叠，越高越好 ↑）平均为 0.1078（σ = 0.1294），其中 Jaccard 相似度低于 Levenshtein 相似度，说明词级错位重于字符级差异。论文未做多模型对比与显著性检验，也未设消融，主要代价是单人单设备约 12 分钟的小规模与非自发朗读，结论仅为说话人内诊断。

**适用边界与深读导览：** 结论成立前提是单名中部那不勒斯男性说话人在安静室内以同一设备录制的朗读句，不覆盖女性、儿童、老年人、自发对话、噪声与远场及跨地区变体，论文明确界定为说话人内诊断而非群体水平估计。那不勒斯语书写未标准化也使参照转写存在惯例依赖，Whisper 仅用意大利语单基线评测，无法区分模型特异缺陷与方言难度。欲深究三域筛选标准与录音归一化可查阅下文方法部分，欲核对四类幻觉与替换实例及三域分布与四指标明细可查阅下文实验部分，欲了解单人小规模与正字法分歧的完整讨论可查阅下文局限部分。

## 🔗 开源与复现资源

- 论文所列链接：<https://huggingface.co/datasets/anonymous-nsc-author/Neapolitan-Spoken-Corpus/tree/main> → <https://huggingface.co/datasets/michaelcacioli/Neapolitan-Spoken-Corpus/tree/main> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 那不勒斯语与标准意大利语的系统性差异为何导致识别失效

那不勒斯语 Napoletano 是意大利南部那不勒斯周边使用的意大利罗曼语变体，拥有深厚历史与文化影响，但在计算资源中长期缺位。已有意大利语口语语料与方言辨识研究强调系统性记录的重要性，而那不勒斯语与标准意大利语的差异是系统性的，覆盖音系与词汇，并非仅是口音轻重不同。这种缺位既限制方言学研究，也阻碍公平语音技术的发展，促使本文构建首个结构化口语资源并检验现有识别系统的跨方言表现。

为理解为何集中考察那不勒斯及周边地区，先看官方原图的地理分布示意。该图以意大利全境为底，用深红色标出当代那不勒斯语使用者的集中省份，直观呈现方言核心区与边缘区的空间关系，为后文单说话人取自中部那不勒斯变体的代表性讨论提供地理依据。读者可先确认红色区域是否围绕 Napoli 向周边延伸，再思考单点采样在多大程度上能反映整个红色范围内的变异。

[![原论文 Figure 1：Geographic distribution of contemporary Neapolitan speakers across southern Italy, with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-1.png)

*论文图 1：意大利南部那不勒斯语使用者地理分布，红色区域集中于那不勒斯及周边省份（原论文 Figure 1）。*

像素显示意大利半岛及西西里与撒丁岛轮廓为米白色底，各省以细线划分并标注名称，南部 Campania 至 Calabria 北部共 7 个左右省份被填为醒目红色，白色文字标注 CASERTA、NAPOLI、AVELLINO、SALERNO、POTENZA、BENEVENTO 与 COSENZA 等。该着色集中于那不勒斯市及其周边，与正文所述中部那不勒斯音系特征的都市区定位一致，说明语料的地理来源明确但覆盖范围有限，无法代表红色区外的意大利语变体。

本文定义的问题是朗读式方言识别评测。输入为安静室内条件下以稳定语速朗读的那不勒斯语句音频，每段对应一句正字法转写，输出要求还原方言原文而非标准意大利语改写。主流做法是借用相近高资源语言的识别模型，例如以 language = it 配置调用 Whisper 处理那不勒斯语。由于频繁的词尾元音删除、辅音同化及方言特有词等现象，意大利语模型学到的先验会把方言音段误判为意大利语同源词，导致流利却语义失真的转写，这是后文定量评测要暴露的物理与统计瓶颈。

### 三阶段语料构建与外部评测流程如何实现可复制

与此前面向标准意大利语的 VoLIP 等语料相比，本文的实质增量是首次为那不勒斯语建立结构化口语语料，并配套可复制的构建与评测流程。文本覆盖戏剧、诗歌与博客 3 种语域，全部由母语者按真实性、方言音系特征与自然度 3 条标准筛选。音频统一在安静室内以 iPhone 13 自带录音应用录制，保存为 M4A 格式并做峰值归一化与静音修剪，每段为一句，附带编号、领域、转写与时长等元数据。附录明确编码为 AAC 且码率为 256 kbps，归一化目标为 -1.0 dB，修剪阈值为 -35 dB，文件统一命名为 NNN.m4a 形式。原文未披露采样率、帧长与通道数等信号细节，复现时只能沿用上述已披露的设备与处理参数。

为一次看清从文本到分数的完整流程，先看三阶段流程示意图。该图从左至右以黄、蓝、绿三色方框表示文本选择、录音整理与识别评测，箭头标明先后顺序，每个框内配有小图标与关键词。读者可沿箭头追踪数据如何从公开文学与博客文本变为一致质量的音频文件，再变为外部模型的转写分数。

[![原论文 Figure 2：Three-stage pipeline for building and assessing the Neapolitan spoken corpus: (1) domain-specific…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-2.png)

*论文图 2：三阶段语料构建与评测流程，从文本选择经录音整理到识别评测（原论文 Figure 2）。*

像素显示左侧黄色框顶部标注 Text Selection，框内列出 Plays、poetry、blogs 与 Curated by a native speaker，配地球与书本图标。中间蓝色框顶部标注 Audio Recording，框内为 Native speaker read-alouds 指向 Consistent quality audio files，配话筒与音箱图标。右侧绿色框顶部标注 ASR Evaluation，框内为 Transcribed with Whisper 指向 Evaluated using BLEU，配机器人与柱状图图标。三框底色分别为浅黄、浅蓝与浅绿，箭头为白色粗箭头，整体强调先后依赖而非并行分支。需注意该图仅写 BLEU 一项，而正文实际使用四项指标，图示是对评测环节的简化呈现。

以 1 秒朗读片段为例追踪符号流。第一步从戏剧、诗歌或博客中选出一句经母语者验证的那不勒斯语文本，要求包含词尾删除或辅音同化等标记。第二步由同一位男性母语者在安静室内以稳定语速与音量朗读并录制，剔除误读或带噪片段并修剪边界静音。第三步将音频峰值归一化并统一命名，文本存入 JSON 元数据。第四步调用冻结的 Whisper 服务并指定 language = it 获得意大利语转写。第五步将转写与人工参考对比，计算词级与字符级分数。由于原文未披露采样率与帧率，无法给出每秒帧数与特征维度，只能确认全程保持单通道一致录制条件。

### 单说话人录音规范与方言特征保留的具体做法

录音环节刻意控制声学一致性以支撑可复制诊断。说话人为成长于那不勒斯市中心的一位男性母语者，口音属于中部那不勒斯变体，录音在安静室内以 iPhone 13 自带录音应用完成，全程保持语速与音量稳定。附录进一步明确保存为 M4A 格式的 AAC 编码，码率为 256 kbps。录音体现系统的词尾删除、辅音同化、非重读元音弱化以及 vastaso、scetato、zumpa 等标准意大利语中未见的词项。正字法采用撇号标记删除、双写辅音表示长音，尽量避免意大利化拼写，以保留方言身份标记。

评测环节未训练任何新模型，全部推理基于冻结的 Whisper 外部服务。Whisper 是在大规模多语言多任务监督数据上训练的通用识别系统，但不支持那不勒斯语，因此统一以 language = it 调用标准意大利语配置，这是处理无专用模型方言时的常见替代做法。论文强调 Whisper 未参与语料创建与整理，仅在语料建成后作为外部评测工具，用以刻画跨方言迁移的失效程度。由于意大利语先验过强，元音弱化与词尾辅音删除常被误判为意大利语整词，导致输出在意大利语层面流利但在方言语境中语义错乱。

为直观感受上述先验偏置的后果，先看转写失配示意图。该图左侧为标注 Neapolitan 的灰色方框，右侧为绿色 Whisper 标识，中间以两条灰色长箭头连接，上箭头携带语音图标与方言原文，下箭头返回模型的错误转写并配有困惑表情。读者可先读上箭头的原文，再看下箭头的输出，体会整句语义如何丢失。

[![原论文 Figure 3：Illustration of a transcription mismatch between a spoken Neapolitan sentence (“Qua sta ’a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-3.png)

*论文图 3：方言原句与识别输出的失配示例，整句语义被误听为无关词（原论文 Figure 3）。*

像素显示上箭头旁标注 Qua sta ’a cena. 并配有喇叭图标，含义接近这里是晚餐，下箭头旁标注 Castagena 并配有沉思表情，模型把整句听成一个从未说过的意大利语风格地名。左侧灰框与右侧绿色 Whisper 框色彩对比鲜明，箭头方向明确表示输入与输出的对应关系。该例对应附录中的语音幻觉类型，即在无对应同源词时插入意大利语先验词，是后文 4 类错误中最具代表性的整句级失真。

### 141 个片段上的四项指标揭示了怎样的失效程度

评测协议是将 141 个片段的人工参考转写与意大利语配置的 Whisper 输出逐句对比，统计四项文本重叠指标的方向与分布。词错误率 WER 越低越好，其互补分数 1 - WER、短语重叠 BLEU、字符级归一化 Levenshtein 相似度与词集合 Jaccard 相似度均越高越好。由于语料为单说话人朗读且录制条件一致，结果应解读为针对该说话人与领域的诊断，而非人群层面的难度估计。先看语料按文本来源的构成，因为时长与领域多样性决定评测覆盖的文体广度，下表按戏剧、诗歌与博客列出片段数与时长以供核对。

| Source | Clips | Avg. Duration (s) | Total Duration (s) |
| --- | --- | --- | --- |
| Plays | 63 | 4.59 | 289.34 |
| Poetry | 49 | 4.01 | 196.61 |
| Blogs | 29 | 8.89 | 257.77 |
| Total | 141 | 5.27 | 743.72 |

表中戏剧 63 个片段平均 4.59 s 共 289.34 s，诗歌 49 个片段平均 4.01 s 共 196.61 s，博客 29 个片段平均 8.89 s 共 257.77 s，总计 141 个片段平均 5.27 s 共 743.72 s，约 12 min，分项求和与总计一致，未发现字面算术出入。为更直观比较 3 类来源的数量对比，再看附录中的领域分布柱状图，该图横轴为 Plays、Poetry 与 Blogs，纵轴为片段数量，读者可对照上表数值估计每根橙色柱的高度是否对应。

[![原论文 Figure 4：Distribution of text-source domains in the corpus.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/a2af1a88e447/figure-4.png)

*论文图 4：三类文本来源的片段数量分布，戏剧最多博客最少（原论文 Figure 4）。*

像素显示标题为 Domain Distribution of NSC Corpus (Clip Counts)，左上角残留 Appendix F 字样，纵轴标注 Number of Clips，横轴标注 Domain，三根橙色实心柱高度依次降低，与 63、49 与 29 的排序一致，最高柱略高于 60，最低柱接近 30，未标注百分比也不存在求和问题。再看四项指标的集中汇总，因为单看构成无法判断失效严重程度，下表将均值与标准差放在一起并以箭头标明方向，百分号仅出现在词错误率两格。

| 指标与方向 | 均值 | 标准差 σ |
| --- | --- | --- |
| WER ↓ | 86.94 % | 16.54 % |
| 1 - WER ↑ | 0.1306 | 0.1654 |
| BLEU ↑ | 0.0436 | 0.0961 |
| 归一化 Levenshtein 相似度 ↑ | 0.6360 | 0.1375 |
| Jaccard 相似度 ↑ | 0.1078 | 0.1294 |

表中词错误率均值 86.94 % 对应 1 - WER 仅 0.1306，BLEU 均值 0.0436 接近于零，Jaccard 相似度均值 0.1078 同样极低，表明词层面几乎无重叠。归一化 Levenshtein 相似度均值 0.6360 相对最高，但标准差 0.1375 与其他指标的大离散一道说明个别接近意大利语的句子偶有高分，字符接近并不等于语义正确，这是需要警惕的假象。所有指标均未报告置信区间且无人工听测对照，结论成立的前提是接受自动文本重叠作为正确性代理，代价是无法反映可懂度与方言真实感。

### 四类典型错误如何暴露意大利语先验的系统性偏置

定性检查将 Whisper 输出归纳为 4 类反复出现的错误。语音幻觉指插入从未说过的意大利语同源词，例如 Qua sta ’a cena. 被听成 Castagena。句法过度纠正指把方言句式改写为标准意大利语句法，例如 Aggio juto a Rroma ajere. 被改写为 Oggi sono andato a Roma ieri.。自动意大利化指把方言词替换为最近的意大利语等价词，例如 vere 被替换为 vedere。重音错位指把元音弱化误判为删除，进而改变词义。4 类共同指向训练偏置是语言层面而非单纯声学原因，模型优先保证意大利语结构而牺牲方言标记。

那不勒斯语与标准意大利语的平行对照进一步解释了上述偏置的来源。例如 Si ero ancora giovan, avesse scalat chella mundagn’. 对应 Se fossi stato giovane, avrei scalato quella montagna.，Aggio juto a Rroma l’at ajere. 对应 Sono andato a Roma ieri.，以及 Si fusse stato in Norvegia, avesse potuto vere l’laurora boreal. 对应 Se fossi stato in Norvegia, avrei potuto vedere l’aurora boreale.。这些对照显示词尾元音、辅音长度与重音位置均发生规则变化，而非偶然口误。若无方言词典与音系规则，模型只能回退到最接近的意大利语形式，偶有正确识别一两个词也难以保住整句可懂度。

原文未提供按领域或按句长的消融对比，也未比较不同识别架构，因此无法判断戏剧、诗歌与博客何者更难，也无法区分模型特有弱点与方言本身难度。附录中的 3 例错误与扩展的类型表均指向同一方向，即跨语言干扰使系统优先选择主导语言结构而非本地句法。这种单一基线设计使归因停留在描述层面，缺少反事实验证，未来需补充多说话人与多模型对照才能分离数据集难度与模型失效。

### 单说话人与朗读场景限制下的复现边界与选型建议

复现与推广时需守住两个硬边界。第一，语料仅含一位男性母语者的 141 个朗读片段，总时长约 12 min，录制条件完全一致，优点是声学可控，代价是无法估计人群层面的方言变异，代际差异、韵律节奏与地方语调轮廓均未覆盖，所有定量结论仅为针对该说话人与领域的诊断。第二，那不勒斯语尚无统一现代书写规范，19 世纪统一后标准意大利语的推广抑制了方言书写，不一致的拼写与重音标记会轻微影响正确性判断，所谓标准答案本身带有变异，这是活态方言的真实写照而非标注失误。

评测层面的边界同样明确。研究以意大利语配置的 Whisper 为唯一外部工具，未引入其他架构对照，因此难以分离模型失效与数据难度，报告的低分可能低估未来方言专用模型的潜力。论文自身也指出，基于标准语训练的系统常继承文化与语言假设，词错误率等技术指标在低资源场景下既反映算法精度，也折射社会语言学层面的边缘化，公平比较需要显式考虑语言多样性而非仅声学变异。

可复现性方面，论文声明语料在 CC BY-NC 4.0 许可下供非商业研究使用，并要求引用论文与数据集标识，正文脚注给出 HuggingFace 地址。本次收到的第三方可达性记录显示该地址当前可访问，但归属未确认为作者资源，因此只能转述论文的公开声明，不宜直接断言作者已开源。代码、训练脚本与可直接运行的系统均未披露，Whisper 为外部在线服务，不涉及权重下载。附录补充了说话人人口学、中部变体音系、录音设备与正字法约定，以及峰值归一化、静音修剪、统一命名与 JSON 元数据等处理细节，为重走流程提供核对清单。

母语者视角为选型提供社会依据。受访者回忆童年说写那不勒斯语会受罚，书写共识缺失但口语高度一致，因此优先保留真实发音的音频语料被评价为极具创新性，口头传承成为延续文化意义的最后载体。未来工作规划沿 3 个方向扩展，即增加年龄、性别与地区口音多样性，纳入自发对话与口头叙事，以及提供高质量转写、音素对齐与语码切换标注。工程上若需归档或研究级高保真转写，不宜直接采用意大利语配置的通用模型输出，至少需人工校对并遵守非商业许可与知情同意要求，原文已获书面同意并按最小风险语言采集免除正式伦理审查。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：录音设备为 iPhone 13 自带录音应用，安静室内稳定语速音量，保存为 M4A 格式 AAC 编码 256 kbps，峰值归一化至 -1.0 dB，静音修剪阈值 -35 dB，统一命名 NNN.m4a，采样率帧长通道等原文未披露
- **训练与评测数据**：文本来自公开那不勒斯语戏剧诗歌博客，经母语者按真实性方言音系自然度筛选，音频为一位中部那不勒斯男性母语者朗读的 141 个单句片段，总时长 743.72 s，附人工正字法转写与领域时长元数据，评测为同一批数据的转写对比
- **算力与训练耗时**：无模型训练阶段，仅调用外部 Whisper 服务进行转写评测，录音与归一化在手机与常规计算机上完成，原文未披露 GPU 型号数量与训练耗时
- **核心超参数与配置**：无可训练超参，推理固定 language = it 对应标准意大利语，未做微调与温度采样说明，文本筛选三标准与音频归一化阈值 -1.0 dB 和 -35 dB 为主要可复现参数
- **推理速度与部署开销**：原文未披露延迟吞吐显存与实时率，评测规模为 141 个片段约 12 min 音频，单句平均 5.27 s，调用云端服务成本取决于外部接口而非本地部署
- **开源产物与协议状态**：论文声明语料在 CC BY-NC 4.0 许可下供非商业研究使用并给出 HuggingFace 地址，第三方检查显示该地址当前可访问但归属未确认为作者资源，代码权重与可运行系统原文未披露
- **附录与补充材料要点**：附录给出说话人人口学中部变体音系与录音条件，正字法与三阶段构建细节，Whisper 三例错误类型与扩展类型表，未来多说话人自发对话与最小对立集扩展计划及伦理许可说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.5/10** | 创新 6.2/10 | 技术严谨 5.6/10 | 实验充分 5.2/10 | 清晰度 6.8/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 4.5/10
- 排名：后50% | 文档类型：数据集与基准
- 会议身份：`conference:audio-aaai:2026:conference-paper-id:cacioli26a`
- 会议来源：[官方记录](https://proceedings.mlr.press/v312/cacioli26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v312/main/assets/cacioli26a/cacioli26a.pdf)
- Track：Audio-AAAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首个结构化那不勒斯语口语资源填补跨方言迁移失效系统度量的空白并支撑方言学研究。

- 核心优势：三条真实性筛选标准与单设备一致录音及峰值归一化流程完整可核对并附音系档案。

- 核心优势：四指标联合量化与语音幻觉等四类误差实例形成声近义远的完整诊断证据链。

- 主要短板：仅用Whisper意大利语单基线评测而无多模型对比与显著性检验且未报告分域分数。

- 主要短板：单人单设备约12分钟朗读无自发对话与性别年龄地域变异且结论明确限于说话人内诊断。

- 主要短板：Whisper具体版本解码参数与四指标实现分词归一化细节缺失导致跨时间复现存在不确定性。

---

[← 返回 audio-aaai-2026 论文汇总](/audio-research-portal/posts/conference-audio-aaai-2026/)
