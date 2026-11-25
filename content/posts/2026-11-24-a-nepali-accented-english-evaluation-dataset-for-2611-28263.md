---
title: "A Nepali-Accented English Evaluation Dataset for Automatic Speech Recognition"
date: 2026-11-24
draft: false
tags: [语音识别, 数据集构建, 基准测试, 数据集]
categories: [论文速递]
description: "针对尼泊尔口音英语缺少专门评测基准的问题，论文构建 57 位说话人每人固定 22 个提示的留出评测集并附人口统计与录音质量标注，描述性基线显示开源模型在该集上 WER 升至 38.15% - 55.00%，远高于官方模型卡报告的 LibriSpeech test-clean 2% - 4%，代价是样本偏向年轻高学历工程背景且跨数据集对比并非严格受控。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28263"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "尼泊尔口音英语的专用评测集：固定提示采集与基线压力测试"
paper_digest_original_title: "A Nepali-Accented English Evaluation Dataset for Automatic Speech Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28263v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28263v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28263v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对尼泊尔口音英语缺少专门评测基准的问题，论文构建 57 位说话人每人固定 22 个提示的留出评测集并附人口统计与录音质量标注，描述性基线显示开源模型在该集上 WER 升至 38.15% - 55.00%，远高于官方模型卡报告的 LibriSpeech test-clean 2% - 4%，代价是样本偏向年轻高学历工程背景且跨数据集对比并非严格受控。"
paper_digest_reader_sections: [{"heading":"母语基准低错误率为何覆盖不了尼泊尔口音英语","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"固定每人 22 提示的留出评测集总体设计与远程采集","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"三类提示分工与自发语音的切分转写链路","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"57 人构成偏向年轻工程背景，地理覆盖多县但不均衡","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"录音多为干净或轻微噪声，开源基线 WER 升至约 38% - 55%","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"适用边界、复现核对与何时值得尝试该基准","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Santosh Dahal"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kiran Chandra Dahal"}]
paper_digest_abstract_sha256: "63a89de8d44720192d77fa3443739858d078afa557025e99c78e4bd4dccabf1d"
paper_digest_sidecars: {"citation.bib":{"sha256":"2b9937033bcafc125b9952c9b5388f1428e18ebef7968af720546a52aed13dbb","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28263/citation.bib"},"citation.json":{"sha256":"c6f26a97f5c8c15193d27215a29564bdde85ed40b1c3bd5604eb97377c97f396","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28263/citation.json"},"citation.ris":{"sha256":"a0fcbcc9bc7c2f926341f6946294b1370d1487d56ef5799ea1ecc1387479d30a","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28263/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2738f107269aecfe1a83c34f7376edb6b92f58e9af381e9043ec71d549d24c28","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28263/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "c8206ab5e6319dc3ef44aace891f2c38857f6fdabe9c0ec23ff040cbad342b41"
paper_digest_api_reader_plan_sha256: "d5b48fc8e83cf241e3c0c3e9f67c8bb2a37e1b89950ee8054a2014269a70b99f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "f888e2bb55e5700545e62558ef7502bec672c7c414dad6fd2feef5855d44aa32"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "15d94f62bf66fe2dc0146e262ce1bc20770900f01522918f3352354746d75123"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d085407acc8ef4e520c4ebad24a595616185164748f6296506a0772bd46ab8c6"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "50cfd2d503d1b074ca815e01e0492860c14d417bfe49704dfa13f444593138d3"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 尼泊尔口音英语的专用评测集：固定提示采集与基线压力测试

> 英文题目：*[A Nepali-Accented English Evaluation Dataset for Automatic Speech Recognition](https://arxiv.org/abs/2611.28263v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 6.2/10 | 技术严谨 6.0/10 | 实验充分 6.5/10 | 清晰度 6.8/10 | 影响力 5.2/10 | 开源 8.0/10 | 可复现 5.5/10 | 工程/实践 6.0/10
>
> DOI：`10.3126/east.v2i1.98619`


## 👥 作者与机构

- Santosh Dahal：机构信息未能在本次解析中与作者逐人可靠绑定
- Kiran Chandra Dahal：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 待识别对象是由尼泊尔语为母语者读出或自发说出的英语语音，系统需输出对应的英文文本。主流自动语音识别在母语基准上已达很低错误率，但在代表性不足的非母语口音下常明显退化，根因在于训练与评测资源缺位导致的口音失配和尼泊尔式音系迁移未被覆盖。现有资源难以回答这一基本问题：L2-ARCTIC 覆盖 6 种母语口音却无尼泊尔口音，CSLU 外国口音英语集同样未针对尼泊尔说话人，Svarah 虽设尼泊尔口音子集但说话人来自印度且缺乏尼泊尔本土固定语音覆盖，而尼泊尔语识别研究针对的是尼泊尔语本身而非带尼泊尔口音的英语。

**核心思路与方法架构：** 本文未提出新声学模型，增量在于提供尼泊尔本土专用的固定协议留出评测资源，以每人相同的语音、领域与自发三维覆盖直击口音、词汇与语体缺位。一条样本的旅程始于基于网页的单页应用：参与者在无直接身份标识下完成会话初始化，再确认知情并填写元数据，随后按条录制并可重录，最后复核提交。每会话固定包含 22 个提示，其中 11 个语音提示沿 CMU Arctic 风格组织音素与常见音节组合，10 个领域提示经公开文本整理并做可读性归一化，1 个自发提示依自报兴趣话题引出自然话语。自发长录音先经串行切分再由生成模型转写后拼接，质检在说话人一级完成，转写与评测模型均只做推理而无训练更新，采集为离线志愿录音而非流式约束。

**关键实验与核心代价：** 在 57 位说话人构成的采集集上，以 WER（词错误率）为指标，将开源基线在采集集上的实测值与官方模型卡报告的 LibriSpeech test-clean 参考值做描述性跨数据集对照，而非同一管线重跑的口音唯一归因。具体而言，最强可比基线 Whisper Large 的 WER 在 LibriSpeech test-clean 上报告为 3.00，在采集集上实测为 38.15，采集集实测值高于 LibriSpeech 报告值。同条件下 Conformer Large 的 WER 为 2.20 对 38.30，Conformer Small 为 3.70 对 46.00，Whisper Small 为 3.43 对 55.00，采集集实测值均高于对应报告值。本文未安排人工主观听测，结论仅基于 WER。代价一面是即使最强的大模型仍停留在较高水平而小模型退化更剧烈，另一面是 93.0% 会话为干净或仅轻微噪声的现实变异与偏向年轻高学历工程背景的样本结构共同限定了结论外推，原文也未给出按提示类型或子组的分解 WER。

**适用边界与深读导览：** 该语料适用于口音鲁棒性基准测试、按提示类型或粗粒度人群的误差分析，以及训练缺失尼泊尔口音时的分布外泛化测量，附带的人口学与说话人级质量标签仅支持探索性过滤而不支持说话人画像或排名。不适用场景包括大规模预训练替代、多口音联合训练、强子组比较与工作室级纯净条件下的部署断言，远程设备与环境变异及知情同意与访问控制边界仍需遵守。想深究固定提示表与采集流程可查第 3 节，想核对人口分布、质量标注与基线对照可查第 4 节表 4 至表 6 与第 5 节表 7，想理解推荐用途与局限可查第 6 节。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/santoshdahal2016/Nepali-Accented-English-Evaluation-Dataset> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 母语基准低错误率为何覆盖不了尼泊尔口音英语

近年 ASR (自动语音识别) 在母语英语基准上已取得很低的 WER (词错误率)，但这类成绩并不能可靠迁移到非母语口音语音。尼泊尔口音英语是欠服务情形的典型代表，英语在尼泊尔教育、技术、公共服务与职业交流中使用广泛，而训练与评测资源依然稀缺。论文聚焦的基础问题是，现有模型在尼泊尔母语者所说英语上的实际表现如何，由于缺少专门基准，这一问题此前难以给出可比的定量回答，亟需覆盖发音、词汇与自然语体的留出评测集。

已有资源从 2 个方向接近该问题，但都留下缺口。多口音英语一侧，L2-ARCTIC 提供 6 种母语背景的精读语音，适合口音自适应研究，但不含尼泊尔口音；CSLU 外国口音英语覆盖更广，同样未面向尼泊尔说话人做专门评测；Svarah 覆盖印度口音英语并设置尼泊尔口音子集，显示偏离母语基准时的明显退化，但该子集说话人来自印度而非尼泊尔，且整体是多背景多条件的宽口径基准，没有提供尼泊尔单口音的固定语音与话题覆盖。尼泊尔语一侧，此前工作用卷积、循环与 Conformer 结构识别尼泊尔语本身，与识别带尼泊尔语音迁移的英语属于不同任务。

为此论文把目标收窄为构建留出评测基准，而非大规模预训练资源。语料通过网页平台从 57 位说话人采集，每人固定完成 22 个提示，兼顾发音覆盖、话题词汇与自然语体，并附带人口统计元数据与说话人级录音质量标签。作为描述性参照，开源基线在该集上 WER 达到 38.15% - 55.00%，而官方模型卡报告的 LibriSpeech test-clean 对应值仅为 2% - 4%。输入是尼泊尔口音英语录音，输出是可复用的评测 WER 与分组误差分析，定位是检验口音鲁棒性与分布外泛化。

### 固定每人 22 提示的留出评测集总体设计与远程采集

数据集的设计原则是每位参与者贡献可比且多样的 utterances 集合，以支持受控评测而非随意采样。采集通过单页网页应用远程完成，不收集直接身份标识元数据，只保留分析所需的元数据、时间戳与完成状态。每位说话人的全部话语录自同一会话，环境与设备条件在会话内基本恒定，这为后文按说话人标注质量提供了依据，也决定了质量标签的粒度。

下表概括评测集的总体规格，目标定位为尼泊尔口音英语的留出评测基准，规模为 57 位说话人，采集方式为远程网页录制，会话结构为每人 22 个提示，标注包括元数据与 5 级录音质量标签，预期用途限定为口音鲁棒评测与误差分析。读者可先对照该表建立整体框架，再进入采集流程与提示细节，理解规模不大但每人覆盖相同的取舍。

| Aspect | Description |
| --- | --- |
| Primary goal | Held-out evaluation benchmark for Nepali-accented English ASR |
| Participants | 57 speakers |
| Collection mode | Remote recording through a web-based platform without directly identifying metadata |
| Speech styles | Controlled read speech and one spontaneous response per session |
| Session structure | 22 prompts per participant |
| Prompt mix | 11 phonetic prompts, 10 domain prompts, 1 spontaneous prompt |
| Metadata | Age range, gender, highest qualification, occupation, ethnicity, district of origin, and topic of interest |
| Quality annotation | Manual speaker-level recording-quality label on a five-point ordinal scale |
| Intended use | Accent-robust ASR evaluation, coarse subgroup analysis, and error analysis |

从该表可以读出 3 个关键取舍。第一，规模不大但每人覆盖相同，目标是公平比较模型而非训练大模型。第二，语音风格同时包含受控朗读与每会话 1 段自发回答，兼顾可控性与自然度。第三，元数据覆盖年龄段、性别、学历、职业、族群、来源县与兴趣话题，质量标注采用 5 级有序量表，支持粗粒度分组探索与按质量过滤，但不构成经严格验证的声学标注层。

#### 采集流程与隐私边界

参与流程分为 4 个阶段，依次为无直接身份信息的会话初始化，知情同意确认与元数据填写，逐提示录音并允许重录或重试，以及最终检查与提交。这种轻量引导在保持跨说话人与跨会话一致性的同时降低了参与负担。平台仅存储分析与整理所需的元数据，会话信息与时间戳用于筛选最终评测集。由于语音本身仍可能具备可识别性，论文明确要求后续分发与复用应保持在参与者同意范围内，并采取适当的访问控制。

会话结构固定为每人 22 个提示，其中 11 个语音提示、10 个领域提示与 1 个自发提示。全部朗读加自发的组合使每位说话人都有音素、词汇与语体三方面的样本，便于按提示类型做误差分析。数据集的预期用途是口音鲁棒评测、粗分组分析与误差诊断，作者明确不建议用元数据做说话人画像或对参与者排名，元数据仅用于探索性鲁棒性分析而非身份推断。

### 三类提示分工与自发语音的切分转写链路

每个会话的 22 个提示分为 3 类，语音提示负责发音覆盖，领域提示负责话题词汇，自发提示负责非脚本化的自然话语结构。下表列出每类数量与设计目的，固定配比保证不同说话人之间在音素与话题维度上可比，避免因每人朗读内容不同而无法公平比较模型，也为后文按提示类型分析错误奠定了基础。

| Prompt type | Count | Purpose |
| --- | --- | --- |
| Phonetic | 11 | Cover English phonemes and common phonotactic contexts using CMU Arctic-style prompts |
| Domain | 10 | Introduce topic-specific vocabulary from domains such as technology, science, history, environment, culture, health, education, geography, and society |
| Spontaneous | 1 | Elicit natural speech from a participant-selected interest topic such as sports, reading, music, or cooking |

语音提示仿照 CMU Arctic 提示库风格组织，覆盖英语音素与常见音节组合，并在参与者之间保持均衡。领域提示选自公开文本来源，覆盖技术、科学、历史、环境、文化、健康、教育、地理与社会等话题，并做可读性与采集一致性归一化。自发提示与参与者自报的兴趣话题绑定，如运动、阅读、音乐或烹饪，保证每人至少一段较少脚本约束的语音，从而引入更自然的话语结构。

#### 自发语音切分与模型转写

自发回答先按元数据中标记的自发条件与朗读材料区分，每条波形分配简短说话人标识与唯一会话话语编号，存入语料的自发分区。长于 20 s 的录音在自动转写前切分，用 ffmpeg silencedetect 近似静音边界，噪声阈值 -35 dB，最小静音时长 1.0 s，切分后单段不超过 20 s，最短 0.25 s，20 s 及以下录音保持单段。该约束兼顾转写接口的长度限制与话语完整性，并保留时间顺序以便拼接。

切分后每段调用 Google Generative Language API，以 Python google-genai 客户端送入 wav 音频与固定英文指令，模型为 gemini-3.1-pro-preview。指令要求只输出听到的英文词，不加时间戳、说话人标签与 Markdown 前缀，无可懂语音时精确输出 [NO_SPEECH]。模型输出做空白归一化，空假设视为无语音。多段录音按时间顺序以空格拼接为每会话话语一行，写入 trans.txt，形式为话语编号加完整文本，[NO_SPEECH] 段在组装时不贡献内容。

元数据表单支持年龄段 18 - 30、30 - 45、45 - 60、60+、性别、最高学历、职业领域、族群类别、来源县与兴趣话题。正文汇总分析使用性别、族群、年龄组、最高学历、职业领域与兴趣话题 6 个属性，来源县在采集时收集但不在汇总表中拆分。该取舍使地理分布由地图单独展示，而分组分析集中在样本量相对可解释的维度上，避免在过小分组上做强结论。

### 57 人构成偏向年轻工程背景，地理覆盖多县但不均衡

最终评测集包含 57 位参与者，整体并非人口均衡抽样，但在年龄、教育、族群、职业与兴趣话题上保留了一定变异。分布明显偏向年轻、高学历与工程技术背景，自发部分的话题则因旅行、运动与阅读居前而有一定多样性。理解这种偏斜对解释基线结果与限定分组结论强度都很重要，也是判断该基准适用人群的前提。

#### 地理分布与人口画像

下图按报告的来源县展示参与者在尼泊尔全国的地理分布，蓝色填充表示有参与者覆盖的县，圆圈数字标出部分县的人数。先看整体着色范围判断覆盖广度，再对比东西部留白与东南角深色区的差异，并注意多数县为浅色少量覆盖，少数县人数相对集中，有助于理解口音样本的地域来源集中程度与代表性局限。

[![原论文 Figure 1.：Geographic distribution of participants by reported district of origin across Nepal.](https://arxiv.org/html/2611.28263v1/map.png)](https://arxiv.org/html/2611.28263v1/map.png)

*论文图 1：尼泊尔地图上按报告来源县着色的参与者分布，蓝色深浅与圆圈数字表示各县人数（原论文 Figure 1）。*

图中着色集中在中西部横带、加德满都周边与南部及东南局部，东部大面积县保持白色无覆盖，说明地域覆盖并不均匀。多个圆圈标注为 5、7、9、10 与 6 等人数，东南端蓝色最深，表明局部县人数相对集中。结合正文来源县已采集但未在汇总表拆分的说明，该图是判断地域代表性的主要依据，不宜将其解读为按县分层的识别性能结论。

下表汇总性别、年龄组与学历的人口画像，每组给出计数与百分比，样本总量为 57。先确认总量与百分比口径，再观察男性、18 - 30 岁与本科群体占比是否超过半数，有助于判断后文分组分析中哪些对比因样本过小而不宜做强结论，并为录音质量与识别结果的解释提供背景。

| Attribute | Category | Count | % |
| --- | --- | --- | --- |
| Gender | Male | 37 | 64.9 |
| Gender | Female | 20 | 35.1 |
| Age group | 18–30 | 45 | 78.9 |
| Age group | 30–45 | 10 | 17.5 |
| Age group | 45–60 | 2 | 3.5 |
| Qualification | Bachelors | 38 | 66.7 |
| Qualification | Masters | 12 | 21.1 |
| Qualification | +2 (higher secondary) | 7 | 12.3 |

表中男性 37 人占 64.9%，女性 20 人占 35.1%；18 - 30 岁 45 人占 78.9%，30 - 45 岁 10 人占 17.5%，45 - 60 岁仅 2 人；本科 38 人占 66.7%，硕士 12 人占 21.1%，+2 高中 7 人占 12.3%。年轻与本科主导意味着口音样本更接近受过高等教育的青年群体。正文另表显示族群中 Brahmin / Chhetri 43 人占 75.4%，职业中 Engineering / Technology 31 人占 54.4%，兴趣以 Travelling 17 人占 29.8% 居首，多数细分格样本很小，只适合粗粒度探索。

### 录音多为干净或轻微噪声，开源基线 WER 升至约 38% - 55%

在评测协议上，论文把语料当作留出基准，用开源识别模型做描述性参照，而非受控的口音唯一退化估计。LibriSpeech test-clean 数值取自各模型官方模型卡，而非同一流水线重跑，因此跨数据集对比包含领域、录制条件与文本归一化差异。复用该基准时应配套提供参考文本、归一化规则与评分脚本，才能保证可复现，这是理解后文数字成立前提的关键。

#### 说话人级录音质量

由于同一说话人的全部话语录自同一会话，环境噪声、麦克风位置与房间声学在会话内基本恒定，因此质量按说话人而非逐句标注。每位说话人随机抽 3 条话语在固定试听条件下判为 clean、mild noise、noisy、very noisy 或 bad recording 五档之一。下表给出计数与百分比，可先看 clean 与 mild noise 合计占比判断整体可用性，再看尾部噪声类别的规模。

| Label | Count | % |
| --- | --- | --- |
| Clean | 29 | 50.9 |
| Mild noise | 24 | 42.1 |
| Noisy | 3 | 5.3 |
| Very noisy | 0 | 0.0 |
| Bad recording | 1 | 1.8 |

表中 clean 29 人占 50.9%，mild noise 24 人占 42.1%，两者合计 93.0%，noisy 3 人占 5.3%，very noisy 0 人，bad recording 1 人占 1.8%。多数会话可用但保留了远程志愿录制的真实变异，适合做按质量过滤或误差分析。论文强调这些标签是粗粒度探索性标签，而非经正式验证的声学标注层，不宜当作精确的信噪比度量使用，过滤阈值的选择会影响可比性。

#### 开源基线与跨数据集参照

下表对比 4 个开源模型在官方模型卡报告的 LibriSpeech test-clean WER 与在本采集集上实测的合并 WER，指标均为 WER，越低越好。先核对同表同列方向，再比较大模型与小模型的退化幅度，注意 LibriSpeech 值并非本次重跑，解读时应视为描述性跨数据集参照，而非口音单一因素的受控估计，这决定了结论的措辞分寸。

| Model | LibriSpeech test-clean | Collected set |
| --- | --- | --- |
| Conformer Small | 3.70 | 46.00 |
| Conformer Large | 2.20 | 38.30 |
| Whisper Small | 3.43 | 55.00 |
| Whisper Large | 3.00 | 38.15 |

4 个模型在本集上均大幅退化，Conformer Small 从 3.70 升至 46.00，Conformer Large 从 2.20 升至 38.30，Whisper Small 从 3.43 升至 55.00，Whisper Large 从 3.00 升至 38.15。其中 Whisper Large 的 38.15% 为本表采集集列最低，即相对最优，而 Whisper Small 的 55.00% 为最高，即退化最严重。即使最强的两个大模型也从约 2% - 3% 升至约 38%，小模型退化更尖锐，说明母语基准高分不能保证尼泊尔口音英语下的可靠性能，该语料可作为口音鲁棒性的压力测试。

### 适用边界、复现核对与何时值得尝试该基准

该语料的 3 个优势在于固定提示的音素与话题覆盖加自发语音，比纯朗读基准信息更丰富；元数据支持超出单一总 WER 的粗分组与鲁棒性探索；说话人级质量标签支持按噪声过滤或分析会话噪声影响。但三者都有边界，多数细分格样本很小，无法支撑强比较结论，质量标签未经正式验证，地域与人口偏斜限制了向更广泛尼泊尔人群的推广，解读时需保持克制。

当前局限集中在代表性与采集条件。参与者偏向 18 - 30 岁、本科及以上与工程技术背景，族群与职业分布高度集中；远程采集带来设备与环境变异，即使 93.0% 会话可用，仍非录音室条件；规模与设计定位于留出评测与误差分析，不宜替代大规模多口音训练语料。论文建议的 3 类适用场景是口音鲁棒评测、按提示类型或粗分组的误差分析，以及训练缺尼泊尔口音时的分布外泛化度量，不建议用元数据做画像或排名。

复现核对需区分三件事。数据集在 GitHub 公开且本次资源检查显示可用，包含音频、元数据与自发文本组织方式；论文中出现的 Conformer 与 Whisper 为第三方提及的基线模型，并非本论文训练的新模型，资源身份记录中没有本文作者模型资源；系统可运行则要求自行准备参考文本、归一化规则与评分脚本，论文明确指出基准发布应打包这些文件。转写链路依赖 Google Generative Language API 与 gemini-3.1-pro-preview，复现自发文本处理需注意 -35 dB、1.0 s、20 s 与 [NO_SPEECH] 等细节是否一致。

工程选型上，若目标是检验模型在尼泊尔口音英语上的鲁棒性，或分析音素、领域词与自发语体 3 类错误，第一步可直接用该集做留出评测，并先按 clean 与 mild noise 分层复算 WER，再看大模型与小模型的差距是否复现。若要在该人群部署，则需补做覆盖更均衡年龄、地域与设备的验证，并补充人工听测或与声学失真指标的对照，因为当前证据仅为 WER 描述性参照，没有提供置信区间与失效案例的系统统计。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、码率、通道数与因果前瞻延迟及 RTF，仅说明经由网页平台远程录音且同一说话人全部话语录自同一会话
- **训练与评测数据**：57 位说话人，每人 22 个提示，包括 11 个语音提示、10 个领域提示与 1 个自发提示，含受控朗读与自发回答，附性别、族群、年龄组、学历、职业、兴趣话题及来源县元数据与说话人级五档质量标签，定位为留出评测基准，LibriSpeech 数值仅取自官方模型卡作参照
- **算力与训练耗时**：原文未披露模型训练所用 GPU / TPU 型号与数量、训练步数与耗时，自发语音转写调用 Google Generative Language API 的 gemini-3.1-pro-preview，原文未披露本地推理硬件配置
- **核心超参数与配置**：切分采用 ffmpeg silencedetect，噪声阈值 -35 dB，最小静音 1.0 s，单段最长 20 s，最短 0.25 s，空语音标记为 [NO_SPEECH]，评测指标为 WER，原文未披露优化器、学习率与批大小
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存开销，基线为 Conformer Small、Conformer Large、Whisper Small 与 Whisper Large 的离线 WER 评测，未报告流式或部署成本
- **开源产物与协议状态**：数据集在 GitHub 公开，作者资源当前可用，地址为 <https://github.com/santoshdahal2016/Nepali-Accented-English-Evaluation-Dataset>，论文建议发布时打包参考文本、归一化规则与评分脚本，原文未明确评分脚本是否已随附
- **附录与补充材料要点**：原文未披露附录或补充材料中的证明、额外消融、许可限制与典型失效案例，正文已说明元数据仅用于粗粒度探索而不做身份推断

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.28263v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：针对尼泊尔本土57位说话人首次提供专用留出评测资源，填补L2-ARCTIC等无尼泊尔口音覆盖的明确缺口。

- 核心优势：每会话固定22提示实现语音11加领域10加自发1的三维可比覆盖，采集四阶段流程与重录分支完整可核对。

- 核心优势：以4个冻结开源基线实测38.15%至55.00%合并WER形成可核对压力测试证据，诚实声明为描述性跨数据集对照。

- 主要短板：自发参考由gemini-3.1-pro-preview自动转写生成且未报告人工核验比例，误差直接进入WER参考文本，可靠性待核查。

- 主要短板：未给出按语音领域自发提示类型或人口子组分解的WER，固定三维设计的性能价值尚未获分解支撑。

- 主要短板：样本偏向年轻高学历工程背景且远程采集引入设备环境变异，若干子组过小难以支撑强比较，外推受限。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
