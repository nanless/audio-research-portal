---
title: "Leveraging Speech Models for Audio-based Lexical Retrieval in Dictionaries: The Case of the Teochew Language"
date: 2026-11-27
draft: false
description: "针对不会潮汕话拼音难以查词典的问题，论文对比转写加编辑距离与嵌入加动态时间规整两条路线，在 172 个域外查询上转写路线以 R@10 0.82 优于直接比对最优 0.63，代价是依赖额外声调去除与元音加权调优且两者并非完全可比。"
tags: ["SFT", "信号处理", "语音识别", "音频检索"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用语音模型实现潮汕话词典的听音查词：转写匹配与直接声学比对的对比"
paper_digest_original_title: "Leveraging Speech Models for Audio-based Lexical Retrieval in Dictionaries: The Case of the Teochew Language"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.16"
paper_digest_workbench_source_sha256: "579671f46b2a17ec951358772f27d79a5f4bebd3ca1c08c5b4cbbed2845a34e6"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.16/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.16.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频检索"
paper_digest_score: 5.8
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "针对不会潮汕话拼音难以查词典的问题，论文对比转写加编辑距离与嵌入加动态时间规整两条路线，在 172 个域外查询上转写路线以 R@10 0.82 优于直接比对最优 0.63，代价是依赖额外声调去除与元音加权调优且两者并非完全可比。"
paper_digest_reader_sections: [{"heading":"不会拼写就查不到词：潮汕话词典面临的遗产语言查词障碍","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两条检索路线如何分工：先转写再比文本与直接比声音","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"声音直接比对如何保留时序：无池化嵌入与动态时间规整","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"去声调与元音加权为何提升文本匹配：三组召回对比","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"哪一层嵌入最适合检索：微调前后 24 层逐层变化","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论在什么条件下成立：声调建模缺失与小规模域外评测的代价","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Siman Chen"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Ilaine Wang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Maxime Fily"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Pierre Magistry"}]
paper_digest_abstract_sha256: "ee1aa1f9d922d3dc39de6045c1fd96c556954bca5d8336eba53574fbb67bc216"
paper_digest_sidecars: {"citation.bib":{"sha256":"6b38aaf06254c1dc4aa754dc6b2ab325b47961ad6efdf6be9f86b4114bf9714c","url":"/audio-research-portal/client/papers/2026-11-27/conference-52dfa74082ff211260c07519/citation.bib"},"citation.json":{"sha256":"6fc2951db802248ef0b66a03a01c504c75ce69d1cc17199ff980f84f6bc2c994","url":"/audio-research-portal/client/papers/2026-11-27/conference-52dfa74082ff211260c07519/citation.json"},"citation.ris":{"sha256":"7bfc8ea5c2d073cf9f4372cffc167c9e5736fdb27e1c20eea4fa4d61fcd1cc16","url":"/audio-research-portal/client/papers/2026-11-27/conference-52dfa74082ff211260c07519/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e328a9e20e1a505a74e2b0f9a50c335a12430c8e138a2c0e055e9db6a3fe6d24","url":"/audio-research-portal/client/papers/2026-11-27/conference-52dfa74082ff211260c07519/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.16"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.16"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.16"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.16/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.16.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "49b467ec478e0d09958407b60996f1e332163abecbb09cd82e6974072b9070bc"
paper_digest_api_reader_plan_sha256: "f6779d559f376bf7ff01facf37c8f83d822acda65084919e63d3fded170b9001"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "64c40bf67688460f65f74574820304b7a6ef87d216fb60af0bcc7cc6c87301d5"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "77e889e3711ca2bc600d83036c4fda8aba95ee6a56795178e39a80b0190960b3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d74a7718db1c5bb0dd7ecb8d4fefbd1956a8580832b95efe489cb23d027be60d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c08ab1dd94a5adc343933a3b04f266a5ccac4f351057e20ff6500cde6f6f6eea"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"}]
paper_digest_primary_method: "SFT"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 用语音模型实现潮汕话词典的听音查词：转写匹配与直接声学比对的对比

> 英文题目：*Leveraging Speech Models for Audio-based Lexical Retrieval in Dictionaries: The Case of the Teochew Language*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.16`
> DOI：`10.18653/v1/2026.speakable-1.16`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.16/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.16.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[音频检索](/audio-research-portal/papers/?concept=task.audio-retrieval)
- **研究方法**：[SFT](/audio-research-portal/papers/?concept=method.sft)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.8/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Siman Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ilaine Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Maxime Fily：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Magistry：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 潮州话属闽南语支传承语言，在家户口头传递，在中国粤东及泰国、柬埔寨、法国等地形成多变体，汉字书写残缺且无统一规范，广东拼音式 Guangdong Peng’im（GD）与社群改进的 Gaginang Peng’im（GGN）等多套拉丁转写并存，多数使用者不识拼音。词典应用 WhatTCSay 已收录 6,700 余条目，约 65% 配有创始人录音，但使用者既读不懂条目，也无法由听到的词反查拼写。任务输入是用户以手机录制的孤立词发音，输出是在 4,603 条音频候选中的排序列表。现有示例查询口语词检测 Query-by-Example Spoken Term Detection（QbE-STD）分为转写后文本匹配与声学直接匹配两路，但在该场景下失效根因明确：八声调加变调使训练标注的本调与词典实际变调不一致，元音跨口音极不稳定，设备与背景差异使帧级声学对齐脆弱。

**核心思路与方法架构：** 与仅用冻结英文或多语表示做模板匹配的最接近基线相比，本文增量在于用潮州话有监督数据同时改造两路并引入语言知识，保留大规模多语预训练表示，改变其目标语言适配与匹配代价。波形统一重采样至 16 kHz 后送入 Wav2Vec2-XLS-R-300M（含 24 层 Transformer），自动语音识别 Automatic Speech Recognition（ASR）路经微调转写为 GD，再经规则转换器转为 GGN，用编辑距离与词典文本比对；动态时间规整 Dynamic Time Warping（DTW）路保留帧级嵌入而不做时间池化，直接计算查询与每条词典录音的距离并排序。编辑代价体现语言先验：默认替换、插入、删除均为 1，单音位双字母组合如 `<bh>`、`<gh>`、`<ng>`、`<ch>` 与 `<eu>` 按单音位处理，元音替换降为 0.7，四组高频混淆 i↔e、a↔o、eu↔o、eu↔a 进一步降为 0.25，经六折交叉验证确定；DTW 路对比预训练基座与微调版表示，冻结层未说明。

**关键实验与核心代价：** 在 172 个真实查询、31 个词、6 名说话人的域外评测集上，以排序召回率 Recall at rank k（R@k）为指标，基于 ASR 的检索在 R@1、R@5、R@10 上分别为 0.57、0.77、0.82，高于基于 DTW 的检索的 0.42、0.59、0.63。微调模型的词错率 Word Error Rate（WER ↓）在验证集为 13.51，在测试集为 12.52，但在 9,343 个对齐音节上声调错误率达 51.42%，作者将其归因于口音差异与训练本调标注同词典变调标注的不一致，例如训练为 jap8 ghueh4 而词典为 jap4 ghueh4，去除声调并加权后 R@10 从 0.74 变为 0.82。DTW 表示中，微调版第 24 层为 0.42、0.59、0.63，高于基座第 13 层的 0.20、0.33、0.36，12 层至 17 层在前十召回上亦表现相近，词越长两路召回均更高。代价在于作者明确承认两路未在完全可比优化条件下比较，且 DTW 对静音与噪声敏感，10 条问题样本中 8 条在去除静音或噪声后排序提升；本任务为检索排序，未做人工主观平均意见分 Mean Opinion Score（MOS ↑）或神经代理指标听测，仅有巴黎社群工作坊的定性满意观察。

**适用边界与深读导览：** 结论成立前提是孤立词查询、GGN 词典文本与已有录音候选，未覆盖连续语音、多词表达被拆分为单条目、声调建模与实时延迟实测等场景，文中讨论实时检索重要性但未给出延迟或吞吐实测。深究微调配置与转写流程可查方法概述和架构，深究归一化消融、层效应与按音节长度细分的数值对比可查实验结果，复现缺失项与承认局限可查细节详述与局限。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 不会拼写就查不到词：潮汕话词典面临的遗产语言查词障碍

潮汕话属于汉藏语系闽南语支，主要分布在中国广东东部，并随 18 至 20 世纪移民扩散至泰国、柬埔寨、新加坡、马来西亚以及美国、法国、澳大利亚等地。论文引用 Tan (2020) 的估计，泰国约有 5,000,000 至 7,000,000 位使用者，法国约有 80,000 至 150,000 位使用者，同时提醒这些数字来自 1989 至 2004 年间的旧来源，且人口普查统计族群而非实际语言能力。在中国境内，潮汕话相对普通话也是家庭语言，在散居社区更受泰语、高棉语、马来语、法语与英语的长期接触影响，产生语音干扰与大量借词，呈现明显的多变体特征。

潮汕话并非无文字语言，但文字使用高度分散。汉字书写因缺乏持续规范而残缺，许多口语词与借词没有公认写法，例如表示男孩的口语词与来自马来语的警察一词。拉丁字母转写同样并存多种方案，包括 19 世纪传教士创制的白话字系 Swatow 教会罗马字、1960 年广东省教育部门基于汉语拼音制定的广东拼音，以及散居社区在 Discord 上推广的 Gaginang 拼音。后者去掉带变音符号的 ê 以方便不同键盘输入，并用数字标写 8 个声调，例如 Gaginang 拼音的 jap8 ghueh4 在广东拼音中写作 zab8 ghueh4。

WhatTCSay 是由北美与法国遗产说话人众筹协作开发的手机词典应用，现行版本收录超过 6,700 个词条，每个词条包含 Gaginang 拼音词形、英文或法文释义与词性，可选汉字与创始人录音。约 65% 词条配有真人录音，下一版本计划扩展至超过 10,000 个词条，并对缺录音条目使用 Magistry 等人 (2024) 的语音合成补齐。开发者在 2026 年报告累计下载接近 20,000 次，但多数使用者不熟悉拼音拼写，既看不懂无音频条目，也无法凭听到的发音猜出拼写。为说明这种文本查词门槛，下段展示词典条目的真实界面截图，可对照拼音、释义与录音图标的位置关系。

[![原论文 Figure 1：Screenshot of the entry for gu6 chai2 gue2 (‘chive cakes’) in the French Android version of…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-1.png)

*论文图 1：潮汕话词典条目界面截图：法语释义、拼音、汉字与录音图标的版式（原论文 Figure 1）。*

该截图对应法语安卓版中 gu6 chai2 gue2 的条目，上方为法语释义 Galette de ciboule，下方标注词性 Nom，中间一行在绿色喇叭图标右侧给出潮汕话拼音 gu6 chai2 gue2，并注明 Teochew，最下方为汉字韭菜粿，左侧另有复制图标，右上角有感叹号提示图标。这一版式把拼音文本作为检索键与发音依据，汉字与音频处于辅助位置。对不会拼音的使用者而言，即使能说出读音，也无法输入 gu6 chai2 gue2 这样的字符串完成查找。论文因此把任务重构为用例查询的口语词检测，即用一段孤立词音频直接匹配词典中的孤立词音频或文本，而非在连续语料中定位词出现位置。

### 两条检索路线如何分工：先转写再比文本与直接比声音

论文对比两条可实际运行的检索路线。第一条先用自动语音识别把用户语音转写为广东拼音，再经规则转换器转为 Gaginang 拼音，最后用编辑距离与词典的 Gaginang 拼音文本比对排序。第二条跳过文字，直接用语音模型提取查询音频与词典参考音频的帧级嵌入，再用动态时间规整计算距离并排序。两条路线共用同一个 Wav2Vec2-XLS-R-300M 编码器，前者使用在潮汕话上微调后的识别器，后者对比微调前后编码器。全部音频统一重采样至 16 kHz，文本仅保留潮汕话拼音相关符号，去除与发音无关的标点。

训练使用 Teochew Wild 语料，共 18.9 小时在线媒体语音，来自 20 位中国说话人，其中 11 位男性与 9 位女性，合计约 12,500 句，标注为汉字与广东拼音。词典底库为创始人录制的 4,603 个 mp3 文件，共 1.28 小时与 9,423 个音节，多为孤立词。评测集为 6 位遗产说话人用手机录制的 172 个刺激，对应 31 个词，分布为 35 个单音节、101 个双音节与 36 个三音节及以上，要求每词至少 4 位说话人发音并过滤噪声，与训练无重叠。

微调沿用 Wav2Vec2-XLS-R-300M，该模型在 128 种语言共 436,000 小时语音上预训练，含 24 层 Transformer。论文以连通时间分类损失微调，批量大小为 16，共训练 50 轮，学习率为 3e-4，开启 fp16，注意力、隐藏层与特征投影丢弃率均为 0.1，掩蔽时间概率为 0.05，丢层率为 0.1，损失归约为均值。微调后在拼音转写上验证集 WER 为 13.51%，测试集 WER 为 12.52%。为理解转写结果如何变为排序，下段给出转写匹配流程图，可沿箭头观察查询音频、转写系统转换与词典文本汇合的位置。

[![原论文 Figure 2：Workflow for the ASR-based methodology](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-3.png)

*论文图 3：转写匹配流程：查询音频经识别与拼音系统转换后与词典文本做编辑距离排序（原论文 Figure 2）。*

该图顶部为粉色训练数据框，内含 WAV 波形与标为 GDPI 的文本，红色箭头指向中间白色框 Wav2Vec2-XLS-R-300M 表示微调。右侧蓝色查询音频框向该模型输入波形，下方蓝色箭头输出标为 GDPI 的转写文本，再经黑色箭头完成转写系统转换至 GGNPI 文本。左下绿色虚线框为词典参考文本，同样为 GGNPI，两路文本在右下 Levenshtein Distance 处汇合排序。教学例子：若查询为三音节词 gu6 chai2 gue2，系统先得到带声调的广东拼音串，转换至 Gaginang 拼音并可选择去声调，再与词典中全部 Gaginang 拼音条目计算加权编辑距离，距离越小排名越靠前。为适配 Gaginang 拼音，bh、gh、ng、ch 与 eu 被视为单音位，元音替换代价降至 0.7，4 组高频混淆进一步降至 0.25，并经六折交叉验证防止过拟合。

### 声音直接比对如何保留时序：无池化嵌入与动态时间规整

直接比对路线不经过文字，保留完整时序结构。查询音频与每条词典参考音频分别送入同一编码器，取某一 Transformer 层的帧级嵌入序列，不做时间池化，以保留细粒度声学变化。随后对两个变长序列做动态时间规整，允许在时间轴上伸缩对齐，距离越小表示越相似，据此对全部 4,603 条候选排序。论文同时测试预训练编码器与潮汕话微调后编码器，并逐层比较第 1 层至第 24 层的检索效果，以观察微调如何重塑表征层级。

以 1 秒输入为例贯穿张量流有助于理解代价。1 秒 16 kHz 音频对应 16,000 个采样点，先经卷积特征编码器降采样为帧序列，再送入 24 层 Transformer 得到每层帧级嵌入。原文未披露卷积步长、每秒帧数、嵌入维度与动态时间规整的具体距离定义，因此无法给出精确的帧数与形状变化。关键在于该路线对每个查询都要与数千条词典音频逐一做帧级对齐，计算量随词典规模与音频长度增长，而转写路线每个查询仅需一次识别加文本比对。

微调边界方面，动态时间规整本身无可训练参数，编码器参数在检索阶段冻结，仅在前期以识别目标微调。推理时查询与参考音频均走前向传播，无自回归解码与语言模型约束。为看清查询嵌入、参考嵌入与对齐矩阵如何衔接，下段给出直接比对流程图，可重点观察蓝色查询分支与绿色词典分支在编码器处的汇合，以及下方对齐热图的坐标含义。

[![原论文 Figure 3：Workflow for the DTW-based methodology](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-2.png)

*论文图 2：直接声学比对流程：查询与词典音频经同一编码器提取嵌入后做动态时间规整对齐（原论文 Figure 3）。*

该图顶部粉色框同样为 Teochew Wild 波形与文本，红色箭头表示微调得到 Wav2Vec2-XLS-R-300M。右侧蓝色框为测试查询波形，下方绿色虚线框为 WhatTCSay 词典参考波形，两路箭头分别输入编码器，输出标注为查询音频嵌入与参考嵌入。底部为动态时间规整对齐矩阵，横纵轴约为 0 至 23 帧，灰度表示帧间距离，深色为大距离，浅色为小距离，红色折线为最优对齐路径，沿对角线延伸并在中段出现阶梯状停留。教学例子：若查询与参考为同一词的不同口音发音，路径仍接近对角线，但元音差异与首尾静音会使局部距离增大，这也解释了后续静音与背景噪声子集实验中 10 个查询有 8 个在去除静音或噪声后排名提升的现象。

### 去声调与元音加权为何提升文本匹配：三组召回对比

评测采用排序召回 R@1、R@5 与 R@10，统计 172 个查询中有多少次正确答案出现在前 1、前 5 与前 10 名中，数值越大越好。该评测为域外条件，查询说话人与录制设备均未出现在训练中，词典底库为单人录制的孤立词。公平性方面需注意，转写路线经过声调去除与元音加权等额外优化，而直接比对路线未获得同等程度的调优，原文摘要已明确两者并非完全可比条件下优化。初步分析发现 9,343 个对齐音节的声调错率为 51.42%，部分源于训练标注为本调而词典标注为变调后声调，例如 jap8 ghueh4 与 jap4 ghueh4 的差异。下表对比 3 种查询归一化设置，可观察去声调与加权的效果。

| ASR Query Setting | R@1 | R@5 | R@10 |
| --- | --- | --- | --- |
| Query with tones | 0.50 | 0.67 | 0.74 |
| Query removing tones | 0.55 | 0.67 | 0.76 |
| Query removing tones + | 0.57 | 0.77 | 0.82 |
| weighted Levenshtein |  |  |  |

精简表显示带声调查询的 R@1、R@5 与 R@10 为 0.50、0.67 与 0.74，去除声调后变为 0.55、0.67 与 0.76，去除声调再加权编辑距离后进一步升至 0.57、0.77 与 0.82。原文完整 Table 4 第三行因换行在结构化数据中被拆为两行，实际对应同一条件。提升主要来自 R@5 与 R@10，说明声调噪声与元音不稳定是主要误差源，加权使部分共享片段仍能命中。若以 74% 进入前 10 名为起点，加权后 82% 进入前 10 名，代价是引入拼音转换、去声调与人工设定的混淆权重。下表给出两条路线在各自最优设置下的直接对比，可判断文本中间表示是否带来稳定优势。

| Method | R@1 | R@5 | R@10 |
| --- | --- | --- | --- |
| ASR-based retrieval | 0.57 | 0.77 | 0.82 |
| DTW-based retrieval | 0.42 | 0.59 | 0.63 |

该对比显示转写检索的 R@1、R@5 与 R@10 为 0.57、0.77 与 0.82，直接比对最优层为 0.42、0.59 与 0.63。按原文报告的相对提升计算，转写路线分别高出 35.7%、30.5% 与 30.2%。优势在 3 个截断处一致，且转写路线在部分匹配时仍可通过编辑距离找回正确答案，而动态时间规整对局部声学畸变与时间错位更敏感。需要强调该差距包含优化不均衡的影响，不能简单解读为声学方法本身上限更低。下表按音节长度报告平均召回，即 R@1、R@5 与 R@10 的均值，可检验词长效应是否在两条路线中一致。

| Method | 1-syll | 2-syll | 3+-syll |
| --- | --- | --- | --- |
| ASR-based retrieval | 0.50 | 0.75 | 0.86 |
| DTW-based retrieval | 0.35 | 0.58 | 0.68 |

按音节分组后，转写路线在单音节、双音节与三音节及以上组平均召回为 0.50、0.75 与 0.86，直接比对路线对应为 0.35、0.58 与 0.68。两条路线均随词长增加而提升，长词提供更多可区分片段，短词更易混淆。即使在最有利的三音节及以上组，直接比对仍低于转写路线。原文未报告方差、置信区间与显著性检验，评测仅基于 31 个词与 6 位说话人，未覆盖多词表达连读等情况，例如 jiahbeung 被拆为 jiah 与 beung 两条独立条目时，整体发音难以命中。巴黎工作坊观察到用户只要目标出现在结果页即基本满意，提示实际可用性不只取决于 R@1。

### 哪一层嵌入最适合检索：微调前后 24 层逐层变化

为检验表征层级的影响，论文对预训练与微调后编码器的第 1 层至第 24 层逐层提取嵌入并做直接比对，相当于以层选择为消融变量。评价仍在同一 172 个查询上计算 R@1、R@5 与 R@10，层间趋势可揭示语音信息在深度上的分布。若中间层编码更多音位信息而深层受识别目标重塑，则 2 模型的峰值位置应不同。下段曲线图同时显示 6 条曲线，红色为微调后模型，黑色为预训练模型，实线、虚线与点线分别对应 R@1、R@5 与 R@10，可先对照图例与横纵轴再观察峰值与交叉。

[![原论文 Figure 4：Retrieval results from both models’ transformer layer 1-24 using DTW; the crosses indicate…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/af27b34719e6/figure-4.png)

*论文图 4：逐层检索召回曲线：预训练与微调模型在第 1 层至第 24 层的 R@1、R@5 与 R@10 变化（原论文 Figure 4）。*

图中显示横轴为 Transformer 层第 1 层至第 24 层，纵轴为召回率，范围 0.0 至 0.8，上方为高召回。图例中红色为微调后模型，黑色为预训练模型，实线、虚线与点线分别对应 R@1、R@5 与 R@10。黑色三线在第 13 层附近达到自身峰值后逐步下滑，至第 22 层跌至接近零并维持低位。红色三线整体随层数上升，第 12 层后明显超过黑色，第 24 层达到全图最高，交叉符号标出各曲线峰值。中段第 12 层至第 17 层红色虚线与点线已处于高位，说明深层并非唯一可用位置。下表摘出 2 模型各自最优层的数值，便于与曲线峰值相互核对。

| Method | R@1 | R@5 | R@10 |
| --- | --- | --- | --- |
| XLS-R-300M (layer 13) | 0.20 | 0.33 | 0.36 |
| XLS-R-300M-ft (layer 24) | 0.42 | 0.59 | 0.63 |

该表显示预训练模型第 13 层的 R@1、R@5 与 R@10 为 0.20、0.33 与 0.36，微调后模型第 24 层的对应值为 0.42、0.59 与 0.63。微调后各截断均明显高于预训练中间层最优，相对提升接近 50% 量级，说明识别微调重塑了深层表征，使其更利于区分细粒度音位差异。中间层第 12 层至第 17 层在前 10 名召回上已表现相近，提示中层编码的语音信息同样具有竞争力，深层优势在前 1 名上更为突出。这一结果也表明直接比对并非完全无监督，其效果强烈依赖与目标语言一致的有监督微调。原文未消融冻结高层或截断重初始化等变体，也未可视化各层音位特征，层效应在低资源下的普适性仍待验证。

### 结论在什么条件下成立：声调建模缺失与小规模域外评测的代价

#### 声调处理与元音加权的适用边界

潮州话具有八声调并存在连续变调，训练语料标注本调而词典标注变调后读音，二者直接比对会引入系统性噪声。论文在 9,343 个对齐音节上统计声调错误率为 51.42%，为此在检索时去除声调信息。这种处理虽能提升召回，却也丢弃了区分同音节的重要线索。原文明确未研究声调在自监督表征中的编码方式，也未建模曲线声调与变调规则，因此难以解释哪些查询因声调不可找回。

为适应拼写特点，转写路线把广东拼音转写为 Gaginang 拼音后计算编辑距离，并把对应单音位的二合字母视为整体。论文先将替换、插入与删除代价均设为 1，再依据词典音频转写误差把元音替换代价降至 0.7，并对 i 与 e、a 与 o、eu 与 o、eu 与 a 4 组常见元音混淆进一步降至 0.25，同时以六折交叉验证控制过拟合。这些权重来自小规模转写统计，能否推广至其他散居口音仍未知。

直接比对的执行过程保留完整时序，不做时间池化，由动态时间规整在帧级做对齐，距离越小表示越相似。原始模型与潮州话微调模型分工不同，前者在第十三层附近召回最高，后者向深层移动并在第二十四层达到最高，第十二至第十七层在前 10 名召回上已接近最优，整体相对提升接近 50%。2 模型差异在末层最显著，说明识别目标对高层影响最强，中间层偏重可迁移的语音区分，深层经塑造后更贴合本任务的音位区分，因而选层对效果影响明显。

#### 评测规模与两条路线比较条件的差异

评测基础较为狭窄。训练采用 18.9 小时网络媒体语料，包含 20 位中国潮州话说话人约 12,500 句话；词典底库为创始人单人录制的 4,603 个文件，共 1.28 小时与 9,423 个音节，多为孤立词。评测仅用 31 个词与 172 个查询，覆盖 35 个单音节、101 个双音节与 36 个三音节及以上样例，由 6 位说话人以自备手机录制。规模虽具真实感，但未报告方差与置信区间，且查询与底库声学条件并不匹配。

两条路线的优化程度并不对等。转写路线享受拼音转换、去声调与加权编辑距离等一系列调优，直接比对路线仅比较微调前后与不同表征层，未做系统性预处理。论文对含明显静音或背景噪声的子集做了小规模试验，10 个查询中 8 个在去除静音或噪声后排名提升，提示预处理确有增益，但子集过小不足以量化。实时检索延迟、显存占用与吞吐等部署指标原文未披露，难以评估上线代价。

评测以目标条目是否进入前几名衡量命中比例，贴近词典翻页查找。按音节长度划分，两条路线均随词长增加而提升，转写路线在单音节、双音节与三音节及以上平均召回分别为 0.50、0.75 与 0.86，直接比对路线对应为 0.35、0.58 与 0.68。较长词提供更多可比片段，编辑距离可借部分重叠找回目标，而逐帧对齐仍对局部失真与时长错位更敏感，这解释了长词优势在两条路线中同时出现。

#### 复现要点与面向词典的选型思路

复现方面，论文给出训练语料名称 Teochew Wild 与词典音频来源 WhatTCSay 3，并列出微调超参与词错率，计算方面仅说明获得法国高性能计算资源分配，未披露具体硬件型号数量、训练耗时与推理配置。原文无补充证明或大篇幅消融，仅在讨论中提及巴黎社区工作坊的定性观察。若要复现，需自行准备 16 kHz 重采样、标点清洗、广东拼音至 Gaginang 拼音转换与编辑距离权重，并按第十三层与第二十四层等关键层重新跑逐层检索。原文未披露代码仓库与权重下载地址。

选型上，若词典已有规范拼音文本且能承担微调与文本归一化，转写匹配在当前数据上召回更高，并可复用文本下游应用，代价是维护转写转换与声调处理。若目标语言缺乏书写共识或拼写变异大，直接比对可绕开正字法，但需接受对音量、背景噪声与口音差异更敏感，并预留静音切除与响度归一化步骤。实际部署可借鉴工作坊经验，在首轮未命中时提示用户分字慢读，并提供重说一次或换词两种选择。未来可在识别微调中加入语言模型约束转写，或探索把元音加权思想转化为帧级距离权重。下一版词典计划收录超过 10,000 个词条并覆盖多地口音，对缺录音条目以语音合成补齐。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：全部音频统一重采样至 16 kHz，训练为句子级话语，词典底库与评测为孤立词，编码器含 24 层 Transformer，直接比对不做时间池化，原文未披露卷积帧移、每秒帧数、嵌入维度与实时系数
- **训练与评测数据**：训练用 Teochew Wild 约 18.9 小时约 12,500 句 20 位说话人标注广东拼音，词典底库为创始人录制 4,603 个文件共 1.28 小时 9,423 个音节，评测为 6 位说话人手机录制 172 个刺激对应 31 个词含 35 个单音节 101 个双音节 36 个三音节及以上
- **算力与训练耗时**：论文仅说明获法国 GENCI 分配的高性能计算资源，未披露 GPU 型号数量、训练耗时与推理硬件
- **核心超参数与配置**：微调 Wav2Vec2-XLS-R-300M，批量大小 16，训练 50 轮，学习率 3e-4，开启 fp16，注意力隐藏层特征投影丢弃率 0.1，掩蔽时间概率 0.05，丢层率 0.1，连通时间分类损失均值归约，编辑距离初始代价 1 元音替换 0.7 四组混淆 0.25 经六折交叉验证
- **推理速度与部署开销**：原文未披露实时系数、首字延迟、吞吐与显存占用，仅定性报告巴黎工作坊用户只要目标出现在结果页即基本满意，直接比对需与数千条候选逐一对齐，计算量随词典规模增长
- **开源产物与协议状态**：原文未给出代码仓库与权重下载地址，未说明可直接运行状态，论文提及训练语料与词典音频来源但本次未确认公开下载状态
- **附录与补充材料要点**：原文无独立附录证明，补充讨论包括巴黎社区工作坊定性观察、多词连读拆分问题、静音噪声子集 10 个查询中 8 个提升，以及高层截断重初始化等未来方向

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.8/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.16`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.16/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.16.pdf)
- DOI：`10.18653/v1/2026.speakable-1.16`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：172条手机录制查询覆盖全音位表，由6名传承说话人域外录制，候选为4603条创始人录音，贴合真实查词场景。

- 核心优势：针对GGN单音位双字母与元音不稳定设计加权编辑距离，经六折交叉验证确定元音0.7与四组混淆0.25代价。

- 核心优势：微调版第24层DTW达0.42、0.59、0.63显著高于基座第13层0.20、0.33、0.36，并给出24层逐层与音节长度分组对比。

- 主要短板：ASR与DTW两路未在完全可比优化条件下比较，前者获得额外语言学优化而后者没有，跨路线结论公平性受限。

- 主要短板：9343个对齐音节声调错误率达51.42%，训练本调标注与词典变调标注不一致引入系统噪声且未建模声调。

- 主要短板：文中讨论实时检索重要性却未给出任何延迟吞吐RTF与测试硬件规格实测，仅为口头主张。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
