---
title: "Fine-tuning Whisper with Spontaneous Persian Speech (SPS)"
date: 2026-11-27
draft: false
description: "针对波斯语自发对话识别失准问题，本文构建 694 分钟自发语音数据集并以 2 轮微调将中小 Whisper 模型的平均词错误率从 2.5 左右降至 0.8 左右，代价是仅覆盖德黑兰口音且数据集未公开、缺乏人工听测与方差报告。"
tags: ["数据集构建", "SFT", "低资源", "语音识别"]
categories: ["sigul-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "自发波斯语语音识别：SPS 数据集构建与 Whisper 微调解读"
paper_digest_original_title: "Fine-tuning Whisper with Spontaneous Persian Speech (SPS)"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:sigul:2026:conference-paper-id:2026.sigul-1.26"
paper_digest_workbench_source_sha256: "d544cb755ea534a5480003959a7c4d27f92ff819c614564eb426b82f43378259"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.sigul-1.26/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.sigul-1.26.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 5.2
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对波斯语自发对话识别失准问题，本文构建 694 分钟自发语音数据集并以 2 轮微调将中小 Whisper 模型的平均词错误率从 2.5 左右降至 0.8 左右，代价是仅覆盖德黑兰口音且数据集未公开、缺乏人工听测与方差报告。"
paper_digest_reader_sections: [{"heading":"朗读语料主导下波斯语自发语音识别为何失准","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"五步半自动流程如何从视频得到可校对语料","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"切分区间与文本规范如何保证短句可学","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"80/10/10 划分下两轮微调更新了什么","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"11 小时自发数据带来多大词错误率下降","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提、边界与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Behnoosh Namdarzadeh"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Nicolas Ballier"}]
paper_digest_abstract_sha256: "fe5791aa63588a7ecbb26e7bebc118df8e705f2d4ee053b4aa0277d991897731"
paper_digest_sidecars: {"citation.bib":{"sha256":"376fad3811df9e49490dbed38ad0a25420f0148fb3f26b4bc9a46b9804428b02","url":"/audio-research-portal/client/papers/2026-11-27/conference-376dd4b9b8b879332d80b096/citation.bib"},"citation.json":{"sha256":"7b5796c8a1e1e7024141d3623b10a4eb8fae71fd2a9fc981a9a7e5df07c271e4","url":"/audio-research-portal/client/papers/2026-11-27/conference-376dd4b9b8b879332d80b096/citation.json"},"citation.ris":{"sha256":"70fac9f439d3737fb7f1dcc4601bb8cd194ca1d00a87b6819d52e15ce99dfc6e","url":"/audio-research-portal/client/papers/2026-11-27/conference-376dd4b9b8b879332d80b096/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"92f6a89abf20afdcc0382a60ec227d5065f186b9c0f980ede4ab2db74be01882","url":"/audio-research-portal/client/papers/2026-11-27/conference-376dd4b9b8b879332d80b096/rethink-context.json"}}
paper_digest_paper_id: "conference:sigul:2026:conference-paper-id:2026.sigul-1.26"
paper_digest_source_kind: conference
paper_digest_conference_id: "sigul-2026"
paper_digest_conference_name: "sigul-2026"
paper_digest_doi: "10.18653/v1/2026.sigul-1.26"
paper_digest_conference_doi: "10.18653/v1/2026.sigul-1.26"
paper_digest_conference_record_url: "https://aclanthology.org/2026.sigul-1.26/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.sigul-1.26.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "cd49c5e51e48297d9a0c0ca1b0a65099e2cb0664bb12b7dfd20b070e8aa55f76"
paper_digest_api_reader_plan_sha256: "d064eca458ba018da95f9e63742b3a1839db03676df08394d55beb68dc726f64"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3744772fa80213e0e891388fe21f4c2c54ba1606d9681979a3cc67e6f70a64ea"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8d62bbbc2379a67249dfd3a13b7c5d50446c0eca1f86eb4e95dff9580fcdeef8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bb50715163668674cfd1711112df17931d8aeb878b4751b96b7b29712a13b731"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3b5604bbc61588af3743722726031f89131a2e0d50e09fd401ce16e9b72b8080"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 自发波斯语语音识别：SPS 数据集构建与 Whisper 微调解读

> 英文题目：*Fine-tuning Whisper with Spontaneous Persian Speech (SPS)*

> 会议身份：`conference:sigul:2026:conference-paper-id:2026.sigul-1.26`
> DOI：`10.18653/v1/2026.sigul-1.26`
> Track：SIGUL 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.sigul-1.26/) · [官方 PDF](https://aclanthology.org/2026.sigul-1.26.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)；[SFT](/audio-research-portal/papers/?concept=method.sft)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.2/10** | 创新 5.2/10 | 技术严谨 6.2/10 | 实验充分 5.8/10 | 清晰度 5.5/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.0/10

排名：后50% | 文档类型：数据集与基准

## 👥 作者与机构

- Behnoosh Namdarzadeh：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Ballier：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 波斯语自动语音识别长期依赖朗读语料，FARSDAT、TFARSDAT 与 Mozilla Common Voice 波斯语部分均以朗读句为主，难以覆盖犹豫、重复、打断、重叠与话语标记等自发特征。Whisper 等多语言模型以书面与正式语音为主训练，在德黑兰口音青年非正式对话中出现同部位同方法音位混淆、韵律边界切分不稳与跨语言子词泄漏，转写质量下降，真实场景鲁棒性不足。

**核心思路与方法架构：** 与直接使用原始 Whisper 相比，本文增量在于构建 694 分钟自发波斯语语料并以其监督微调模型，保留 Whisper 编码器到解码器 Transformer 结构不变。沿单条样本看，16 kHz 单声道波形输入编码器映射为嵌入序列，解码器逐词元生成转写，YouTube 娱乐对话经 small 起步至 large-v3 转写生成含起止时间的 .srt，再经 pysrt 转为 TextGrid 后由母语者在 Praat 中校对时间戳、正字法与标点。语料覆盖 65 位说话人中 34 位男性和 31 位女性，年龄 20 至 30 岁，2 至 3 人室内外互动，切段 1.24 s 至 3.25 s，摘要记每段 3 至 9 个词，正文细化为 3.16 至 8.77 个词、平均 5.01 个词，总词元 526,585 个，词汇多样性 (TTR) 为 0.352，音频统一为 16 kHz 单声道并做 NFKC 与波斯语字符归一，80% 训练、10% 验证选优后在 10% 测试集评估。

**关键实验与核心代价：** 在 70 分钟子集上，词错误率 (Word Error Rate, WER, 越低越好 ↓) 的 small、medium 和 large 模型分别为 88.72%、83.10% 和 49.04%，基线误差处于高位。在内部 10% 测试切分上，small 模型的平均 WER 从 2.5767 降至 0.8046，平均字错误率 (Character Error Rate, CER, 越低越好 ↓) 从 2.6269 降至 0.5513，medium 模型的平均 WER 从 2.3679 降至 0.7675，平均 CER 从 1.8567 降至 0.5061，均低于对应基线。本文仅用 WER 与 CER 报告，未做人工主观听测，2 个轮次微调即获收益，但未披露学习率、优化器、批量、训练设备、时长与推理时延等代价。

**适用边界与深读导览：** 结论仅在德黑兰口音青年娱乐对话、内部切分与 2 个轮次微调条件下成立，未覆盖其他方言、年龄段、正式域与外部独立测试集，也未验证噪声、重叠与远场部署表现，且数据集因未获频道授权明确不公开，仅限内部非商业研究使用，说话人出现名字信息需匿名化后才可披露。本文未提供在线试听，深究音位对齐实例可看第 5 节表 1，微调前后数值对比可看第 6 节表 2，方言与性别比例讨论可看第 7 节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/blog/fine-tune-whisper> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 朗读语料主导下波斯语自发语音识别为何失准

波斯语属于资源稀缺语言，且存在书面语与口语分离现象，口语非正式变体更为稀少。现有主流资源以朗读语音为主，书面文本在训练集中占据主导，导致模型难以处理口语结构。早期 FARSDAT 包含 304 位朗读者的规范语句，TFARSDAT 约 8 小时电话语音含 25,000 个词元，Mozilla Common Voice 波斯语部分约 350 小时来自 4,100 位说话人，但仍以朗读为主，忽略了自然对话的语言特征。

识别任务的输入为真实场景中的连续对话音频，输出为符合正字法规范的波斯语文本，需保留迟疑、重复、笑声、假启动与话语标记等现象。SPS 数据集共 694 分钟约 11 小时，来自 65 位说话人，其中 34 位男性与 31 位女性，共 526,585 个词元，切分区间为 1.24 秒至 3.25 秒，每段约 3 至 9 词，场景覆盖车内、家庭、商场等安静与嘈杂环境，目标是支撑自然会话研究。

Whisper 模型以原始波形为输入，经编码器映射为嵌入序列，解码器逐词元生成转写文本。作者先用小型、中型与大型模型直接转写 70 分钟自发子集，词错误率 WER （词错误率）分别为 88.72%、83.10% 与 49.04%。音位层面多为发音部位与方式相近的混淆，如浊辅音清化与摩擦音替换，另有整词漏识，说明仅靠既有训练难以应对快速连读与环境干扰下的非正式变体。

与既有波斯语电话与朗读语料相比，SPS 刻意保持约 1 比 1 的男女说话人比例，全部为德黑兰口音母语者，年龄集中在 20 岁至 30 岁，以 2 至 3 人非正式娱乐对话为主，兼顾室内外不同背景声。作者强调其规模接近 Whisper 原有波斯语转写训练量 24 小时的一半，虽小于部分已有研究，但以真实双人互动与丰富词汇为特点，平均词汇多样性 TTR 为 0.352，约每 3 个词元对应一个不同词形，意图以小而精的领域数据弥补口语缺失。

### 五步半自动流程如何从视频得到可校对语料

为理解半自动构建思路，建议先浏览原图中的横向主流程，观察深红箭头走向与上下工具图标的对应关系。下文将按编号逐段说明音频与文本形态变化，便于一次看清从视频到可训练语料的完整链路，也为后续复述切分与校对细节打下基础。

[![原论文 Figure 1：Transcription Pipeline using Whisper](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigul-2026/4eb3f28f0628/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigul-2026/4eb3f28f0628/figure-1.png)

*论文图 1：基于 Whisper 的五步转写流程：视频转音频、自动生成字幕、格式转换、人工校对与元数据保存（原论文 Figure 1）。*

原图以浅粉底色呈现 5 段深红箭头，自左向右标号为一至五，上方与下方交错标注工具图标。第一步显示视频图标指向波形图标，第二步显示波形图标指向字幕图标并标注 Whisper 徽标，第三步标注 .srt 转 TextGrid 并由 pysrt 执行，第四步显示嘴唇图标表示在 Praat 中人工校对，第五步标注由 yt_dlp 保存元数据，箭头走向即为数据流向。

与 FARSDAT 等朗读语料相比，改动核心在于数据源与制作方式：保留 Whisper 开源可复现的转写能力，替换规范朗读为视频平台的真实自发互动，并增加人工校对环节。信号规格方面要求全部音频重采样至 16 kHz 并将立体声平均为单声道，训练切分保留 2 秒至 15 秒的短句，过滤短于 1 秒与长于 15 秒至 20 秒的片段，确保每段非空且清晰可学，文本侧采用统一码规范化与标点校正。

以 1 秒德黑兰口语为例，16 kHz 单声道波形约含 16,000 个采样点，先经 Whisper 编码器映射为嵌入序列，再由解码器逐词元生成带起止时间的字幕文件。字幕经程序库转为 TextGrid 格式后，在 Praat 中由波斯语母语者调整时间边界并修正拼写与标点，同时保存时长与性别等元数据。原文未披露编码器帧率、嵌入维度与词表切分细节，因此无法给出逐帧张量形状，仅能确认输入为原始波形而输出为正字法文本。

### 切分区间与文本规范如何保证短句可学

#### 视频来源与说话人构成

视频来源为 YouTube 公开视频，话题多为娱乐，录制条件从配备高质量麦克风的录音室到车内与超市等繁忙场所不等，意图覆盖真实识别中可能遇到的声学变化。全库共计 694 分钟语音，来自 65 名说话人，其中 34 名为男性，31 名为女性，均为带有德黑兰口音的波斯语母语者，背景涵盖安静的室内与嘈杂的室外。筛选另执行 6 条标准：2 至 3 人自发互动，男女比例均衡，优先德黑兰口音，场景为非正式互动以激发口语词汇与青年俚语，年龄限定在 20 岁至 30 岁，兼顾室内与室外以保留多种背景声。所选互动以 2 人对话为主，至多 3 人，保证语流自然连贯。

切分后区间时长分布在 1.24 秒至 3.25 秒之间，每段包含 3.16 至 8.77 个词，全库平均为 5.01 词，与摘要概括的每段 3 至 9 词一致。全部 TextGrid 文件共计 526,585 个词元，平均词汇多样性为 0.352，表明口语词汇仍相当丰富。切分边界依据人工听感确定，并记录每段波形区间的起始与结束时刻，为后续微调提供时间对齐良好的短句。该分布既保留短句可懂度，又为声学建模留下足够的上下文跨度，也保留了迟疑与重复等自发语流特征的原始位置。

#### 转写流水线与规范化处理

转写流水线先提取视频音频，再送入编码器解码器结构的转换模型。编码器将原始波形映射为嵌入序列，解码器逐词元生成对应文本，系统先自动检测语种，再从小型模型起步逐步尝试至当时可用的最大模型。生成结果包含多种字幕格式，研究所用字幕带有每句的开始与结束时间，再经转换工具转为 TextGrid 格式，以便在语音分析软件中阅读校对。母语者逐段核对波形与文本，修正时间戳、正字法与标点，并保留时长与性别等元数据。编码与解码分工使声学信息先压缩为连续表示，再在语言约束下展开为文字，起止时间则成为人工校对的锚点，这种人工介入的半自动方式虽耗时，但避免了纯合成数据风格失真与偏置放大的风险。

音频标准化要求统一重采样至 16 kHz，并将双通道平均为单通道，避免声道差异引入偏差。用于微调的片段一般保留在 2 秒至 15 秒之间，并滤除时长不足 1 秒或超过 15 秒至 20 秒上限以及文本为空的片段。文本规范化采用统一码 NFKC 形式，将阿拉伯语字形替换为波斯语对应字符，删除变音符号并统一空白，使不同来源的拼写趋于一致。该步骤对波斯语尤为关键，否则同一词汇的多种写法会被计为不同词形，直接抬高错误率。统一采样与单通道平均减少了设备差异，规范拼写则让模型集中学习口语变体而非字形噪声，也为后续微调奠定了可信的监督信号。

### 80/10/10 划分下两轮微调更新了什么

#### 数据划分与评测设定

数据集按 80% 训练、10% 验证与 10% 测试划分，作者选择小型与中型 Whisper 模型各微调 2 轮，先在验证集挑选最优轮次，再在同分布测试集对比微调前后。评测指标为平均词错误率 WER（词错误率）与平均字错误率 CER（字错误率），方向均为越低越好。大型模型仅用于 70 分钟自发语料误差分析，未参与此次微调对比，因此更大规模模型的领域收益仍属未知。

微调前音频先统一为 16 kHz 采样并将双声道平均为单声道，以匹配模型输入并消除通道差异。切分要求训练条目短小、清晰且图文对应，通常保留 2 秒至 15 秒片段，并滤除短于 1 秒、长于 15 秒至 20 秒以及文本为空的样本。这一处理既控制单条时长，也避免过短无意义片段与过长难对齐片段进入训练，原文强调非空文本与时长上下限共同决定可用性。

#### 文本规范与执行过程

波斯语文本规范化是关键预处理，作者采用统一码 NFKC 归一化并统一空白，同时将阿拉伯语字形的卡夫替换为波斯语卡夫，去除变音符号。上述步骤旨在收敛非正式书写中的字形变体，使转写目标与口语实际发音对应，减少因字形混杂带来的字词级误判，为后续学习犹豫、重复与语气词等现象扫清表示障碍。

推理侧沿用 Whisper 原有执行路径：输入原始波形后自动检测语言，经编码器与解码器构成的变换器结构直接生成对应文本。编码器将音频映射为嵌入序列，解码器逐词元关注嵌入并输出文本，可生成含起止时间的字幕文件以便校对。构建语料时同样利用该路径产生初稿再由母语者校对时间戳与标点，微调后生成方式不变，只是声学映射更为准确。

仅用 2 轮学习即期望获得明显收益，反映了领域数据的针对性：自发语料补足了原训练中缺失的非正式语域，包括犹豫、重叠与语气词等。作者推测微调后幻觉显著减少，转写可读性提升，但未在本篇展开逐例转写对比。因此小轮次有效的前提是训练与测试共享口音、年龄与互动形式，若切换方言或场景，同样轮次未必复现相同幅度。

### 11 小时自发数据带来多大词错误率下降

评测分为两段：先在 70 分钟子集上以词错误率检验小型、中型与大型模型的直接转写能力，再以 SPS 内部 80%、10% 与 10% 划分为训练、验证与测试，在测试集上对比微调前后。指标均为自动计算的平均词错误率与平均字错误率，数值越低越好，未安排人工听测 MOS 或对比听辨，也未报告方差与置信区间。训练规模仅约 11 小时，不到原波斯语训练量 24 小时的一半，且测试与训练同属德黑兰口音娱乐对话，公平性仅限同分布内部比较。

下表为原文中第二张主结果表的整理，保留模型名称、平均词错误率与平均字错误率三列及四行数值，方向均为越低越好。为保证公平性说明完整，此处先强调划分比例与指标含义，再呈现具体数值，便于对照小型与中型模型在微调前后的变化幅度与相对排序。

| Model | Mean WER ↓ | Mean CER ↓ |
| --- | --- | --- |
| Whisper-small (baseline) | 2.5767 | 2.6269 |
| Whisper-small (fine-tuned, 2 epochs) | 0.8046 | 0.5513 |
| Whisper-medium (baseline) | 2.3679 | 1.8567 |
| Whisper-medium (fine-tuned, 2 epochs) | 0.7675 | 0.5061 |

微调后小型模型的平均词错误率由 2.5767 降至 0.8046，平均字错误率由 2.6269 降至 0.5513，中型模型分别由 2.3679 降至 0.7675 与由 1.8567 降至 0.5061。两档模型均大幅下降，且中型微调后在两项指标上均保持领先，代价是结论完全依赖自动指标，未经人工听感验证，也未展示长音频与跨方言表现。

误差分析将多模型差异归为 3 类：多语言子词泄漏导致英文、俄文、中文、乌尔都语碎片混入，甚至波斯-阿拉伯文字虽形近却分属阿拉伯语，源于波斯语仅 24 小时而阿拉伯语达 739 小时的训练量差距；小型模型韵律边界不稳，切分长短不一，中型与大型相对稳定；语言层面极小模型几乎无有效输出，小型模型由跨语言碎片随机拼接，中型模型在 80 分钟长音频后半段陷入单字重复的幻觉。原文未提供消融以分离数据量、文本规范与人工校对各自贡献，也未报告多次运行的波动，大型模型未参与微调更使最强模型的改进空间悬置。

### 结论成立的前提、边界与复现核对

#### 同分布前提与验证边界

结论成立严格依赖同分布前提：说话人均为 20 岁至 30 岁德黑兰口音母语者，话题集中于娱乐，2 至 3 人非正式互动，录制虽覆盖车内、商场与居家等场景，但未按噪声分层报告指标。若切换至其他方言、年龄段或正式语体，音位混淆与词汇分布均将变化，现有 2 轮微调的幅度不可直接外推，方言比较仍需按同样方法重建对应语料。

部署层面多项条件未经验证：评测均为离线整句转写，未测试流式分块、低延迟与实时交互下的稳定性；未报告延迟、吞吐、显存占用与 RTF（实时系数）；仅小型与中型模型完成微调，大型模型的领域收益未知；70 分钟误差分析与 10% 测试集均规模有限，且无人工听测对照，自动指标下降未必等同于可懂度与用户体验提升。

#### 数据规模与复现条件

复现需区分三件事：其一为数据，SPS 仅限内部非商业研究使用，未公开发布与共享，需频道所有者同意并经匿名化后才可披露，原文提到对话中出现姓名信息；其二为代码与权重，作者未提供自有仓库与下载，文中引用的 Whisper 实现与微调教程为第三方公开资源当前可用；其三为系统，缺乏硬件、超参数与训练脚本细节，无法直接运行复现，仅能按文中重采样、切分与规范化步骤重新搭建。

从规模看，694 分钟约 11 小时语料接近 Whisper 原有波斯语训练数据 24 小时的近半量，因而少量领域数据即可带来可观补充。说话人包括 34 名男性与 31 名女性，接近一对一，有助于缓解语音识别中的性别偏置。但语料仍聚焦德黑兰口音并排除其他变体，年龄与话题同样集中，跨方言与跨场景的稳健性尚未得到验证。

工程选型上，若目标为特定口音的自发对话，小而精的领域数据确能以较低训练成本改善转写，但须预算视频筛选与母语校对的人力，并以统一码规范与时长过滤保证质量。同时应警惕多语言泄漏与长音频幻觉，如混入多语种字词乃至阿拉伯文字形，以及中型模型在 80 分钟长音频后半段重复无意义单字的情况，建议保留人工抽检与性别均衡，并先在目标方言小集上验证后再扩大采集。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：重采样至 16 kHz 单声道，切分区间 1.24 秒至 3.25 秒，每段 3 至 9 词，微调切分 2 秒至 15 秒，过滤短于 1 秒与长于 15 秒至 20 秒片段，原文未披露帧率与编码维度
- **训练与评测数据**：SPS 数据集 694 分钟约 11 小时，65 位说话人含 34 位男性与 31 位女性，526,585 个词元，80% 训练、10% 验证与 10% 测试，另用 70 分钟子集做误差分析，德黑兰口音 20 岁至 30 岁非正式对话，场景覆盖车内、家庭、商场与录音室
- **算力与训练耗时**：原文未披露训练硬件型号、数量、步数与耗时
- **核心超参数与配置**：微调 Whisper 小型与中型模型各 2 轮，验证集选最优轮次后在测试集评测，音频标准化与波斯语文本规范化，优化器、学习率、批大小、损失权重与冻结边界原文未披露
- **推理速度与部署开销**：原文未披露延迟、前瞻窗口、采样步数、RTF、吞吐、显存与参数量
- **开源产物与协议状态**：SPS 数据集未公开，需频道所有者同意并经匿名化后才可共享，作者未提供自有代码仓库与权重下载，文中引用的 Whisper 实现与微调教程为第三方公开资源当前可用，系统不可直接运行
- **附录与补充材料要点**：原文未披露附录证明与补充消融，仅参考文献列出相关语料与方法，许可限制为仅限研究使用

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.2/10** | 创新 5.2/10 | 技术严谨 6.2/10 | 实验充分 5.8/10 | 清晰度 5.5/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.0/10
- 排名：后50% | 文档类型：数据集与基准
- 会议身份：`conference:sigul:2026:conference-paper-id:2026.sigul-1.26`
- 会议来源：[官方记录](https://aclanthology.org/2026.sigul-1.26/) · [官方 PDF](https://aclanthology.org/2026.sigul-1.26.pdf)
- DOI：`10.18653/v1/2026.sigul-1.26`
- Track：SIGUL 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：构建694分钟65位说话人男女34比31接近均衡的自发波斯语语料，覆盖车内家中商场等多环境并经母语者逐段校对。

- 核心优势：内部测试上small与medium微调后WER与CER均同步低于各自基线，70分钟子集呈现随模型规模扩大的误差下降趋势。

- 核心优势：对音位混淆、多语言子词泄漏、韵律边界差异与幻觉重复做系统分类并给出音素级对齐实例。

- 主要短板：数据集明确不公开且微调后权重与划分清单均未提供，仅限内部非商业研究使用，数据治理存在关键缺口。

- 主要短板：评估仅用内部10%切分而无外部独立集，未报告置信区间与显著性检验，也无分性别分场景细分验证支撑。

- 主要短板：70分钟子集百分比与表2小数均值口径不一致未解释，摘要与正文每段词数表述亦存在出入需澄清。

---

[← 返回 sigul-2026 论文汇总](/audio-research-portal/posts/conference-sigul-2026/)
