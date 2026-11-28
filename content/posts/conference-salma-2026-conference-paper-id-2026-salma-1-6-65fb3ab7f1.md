---
title: "Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts"
date: 2026-11-27
draft: false
description: "针对参考无关的三语口语事实改写分类，原文构建 12,013 个样本与 290 条真实错误信息的三形态基准，证明微调编码器在真实内容上达 0.82–0.88 宏平均 F1 而仅 Gemma-3n 在转写本二元上超基线，代价是转写退化随识别误差放大、音频与转写本不可比及合成二元信号混杂机器风格。"
tags: ["基准测试", "数据集", "数据集构建", "幻觉与忠实度", "音频理解"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "三语口语幻觉检测中合成基准与流水线噪声及来源混杂"
paper_digest_original_title: "Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.6"
paper_digest_workbench_source_sha256: "cf31de7504d1ed2e8ebef93ff68922aa96aa667faec0b0975510067f6f1963cf"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.6/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.6.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频理解"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对参考无关的三语口语事实改写分类，原文构建 12,013 个样本与 290 条真实错误信息的三形态基准，证明微调编码器在真实内容上达 0.82–0.88 宏平均 F1 而仅 Gemma-3n 在转写本二元上超基线，代价是转写退化随识别误差放大、音频与转写本不可比及合成二元信号混杂机器风格。"
paper_digest_reader_sections: [{"heading":"参考无关分类在三语语音条件下面临何种瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从原文到转写本的三形态数据流水线全景","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"合成改写与真实世界拆分的构造与质量核验","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"编码器微调冻结边界与解码器零样本推理执行路径","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"原文转写本退化、解码器失效与真实迁移的定量剖析","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"假设边界、复现核对与低资源部署选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Satbayev University, Almaty, Kazakhstan"],"name":"Meruyert Aristombayeva"},{"affiliations":["University of Colorado Boulder, Boulder, CO, USA"],"name":"Jason S Lucas"},{"affiliations":["The Pennsylvania State University, University Park, PA, USA"],"name":"Chaewan Chun"},{"affiliations":["The Pennsylvania State University, University Park, PA, USA"],"name":"Dongwon Lee"}]
paper_digest_abstract_sha256: "bd198859db4b3e5b3068c861278b799b54b3681f53f134bf4804ed8e3f7fe6db"
paper_digest_sidecars: {"citation.bib":{"sha256":"8e0deb66e729bc5702cdede13843333979df2f40230fcf8febd4b4786c758dae","url":"/audio-research-portal/client/papers/2026-11-27/conference-65fb3ab7f10fe761e9be2282/citation.bib"},"citation.json":{"sha256":"d7a70cd0f6c8e62ed24738e7ed5c8e081cb92a0dbcb9c05a2253407e12a45946","url":"/audio-research-portal/client/papers/2026-11-27/conference-65fb3ab7f10fe761e9be2282/citation.json"},"citation.ris":{"sha256":"585f246e2ea35c608573e40525d60af19bbaae841c2219070a989c2dad67efe3","url":"/audio-research-portal/client/papers/2026-11-27/conference-65fb3ab7f10fe761e9be2282/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e25d49cd0a655e84f6bcc1330d7a497c40d433f8ccbd635bca8278f9cda03f0e","url":"/audio-research-portal/client/papers/2026-11-27/conference-65fb3ab7f10fe761e9be2282/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.6"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.6"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.6"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.6/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.6.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "f5a7f90835fb684132ed5cfad9eb1062b1e3cecfcf6f0a5201eb5252da24b53d"
paper_digest_api_reader_plan_sha256: "ccef969f0ecf131e73e7d338f4fbf53e0af788c4a9935dad89a54cecd68b682c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b6266e8a4b929ac607b831ee7d18aa8bdcd786aa8dc4e7f44a28138e4d47170d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9471b780a3d3292f0ba256823229a90635bf16cd374be3f95a98dbc8a84e2d56"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2a5ed46c0076da11d9e5f6cd243f0031321d10750957ff9fa5722376c8a69ae0"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "69259f02b9f8a3bd6f3866e71a1983e162f98baa4ab0f6f3e04b8d4fd44a18c1"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 三语口语幻觉检测中合成基准与流水线噪声及来源混杂

> 英文题目：*Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.6`
> DOI：`10.18653/v1/2026.salma-1.6`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.6/) · [官方 PDF](https://aclanthology.org/2026.salma-1.6.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究重点**：[幻觉与忠实度](/audio-research-portal/papers/?concept=research_focus.hallucination-faithfulness)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.5/10 | 技术严谨 5.8/10 | 实验充分 6.6/10 | 清晰度 6.7/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Meruyert Aristombayeva：Satbayev University, Almaty, Kazakhstan
- Jason S Lucas：University of Colorado Boulder, Boulder, CO, USA
- Chaewan Chun：The Pennsylvania State University, University Park, PA, USA
- Dongwon Lee：The Pennsylvania State University, University Park, PA, USA

## 📌 核心摘要

**问题与瓶颈：** 本文研究无参考口语幻觉检测，输入为单条目标新闻的文本、合成语音或 ASR 转录文本，不提供源文章与外部证据，输出为是否篡改的二分类以及篡改类型与严重度分级。现有文本幻觉检测难以直接迁移至语音，原因是文本到语音合成与自动语音识别构成级联噪声并放大误差，低资源哈萨克语的合成自然度与识别精度更弱，且缺乏覆盖英语、俄语与哈萨克语的大规模三态对齐基准，合成基准中人类原文与机器改写和标签完全相关也未在真实谣言上验证。

**核心思路与方法架构：** 与最接近的文本合成幻觉管线相比，增量在于三语平行控制、三种篡改类型与三级严重度分级、语言专用合成到识别渲染、factcheck.kz 真实评估切分与来源控制分析，源文章仅用于生成标签而不提供给检测器。以哈萨克斯坦新闻原文为例，先由 gpt-3.5-turbo 与 gpt-4 生成英文改写、由 gemini-2.0-flash-lite 生成俄文与哈萨克文改写，类型为 factual fabrication、factual contradiction 或 context inconsistency，严重度为 mild、moderate 或 severe，再经 Coqui XTTS-v2、Silero TTS 或 Kazakh TTS 以多说话人合成音频，继而经 Whisper-large-v3 或微调 wav2vec2 转写，随后仅将目标文本、转录文本或音频送入微调多语编码器或冻结零样本多模态解码器分类，全程为离线长音频条件，WER 与 CER 在小写去标点去数字后按语料级计算。

**关键实验与核心代价：** 在合成子集上，语料级 WER 与 CER 在英文为 7.30% 与 2.74%，俄文为 9.08% 与 4.74%，哈萨克文为 34.04% 与 16.90%，总体为 13.02% 与 6.46%，哈萨克文残留误差约为英文与俄文的四倍。在原文文本上微调编码器的二分类 macro-F1 为 0.52 - 0.89，而类型与严重度仅为 0.14 - 0.68 与 0.15 - 0.66，mDeBERTa 在细粒度上降至 0.153 - 0.188。在转录文本上，Gemma-3n 的二分类 macro-F1 为 0.613 / 0.581 / 0.630，高于对应多数类基线 0.399 / 0.419 / 0.409，其余四种解码器未超过各自二分类基线。在合成训练与真实评估条件下，二分类 macro-F1 在真实源文本上为 0.82 - 0.88，与合成测试持平或更高，但俄文忠实 LLM 改写使 ReMBERT 标记率从 0.352 升至 1.000，mDeBERTa 从 0.221 升至 0.586，仍低于其在合成幻觉上的 0.893。主代价是原文到转录总体下降但非一致，XLM-R large 在俄语二分类转录上 macro-F1 为 0.827，高于原文的 0.747，音频中位时长 96 s 且截断未经验证，人工听测缺失，仅有 120 例哈萨克可懂度抽查与 LLM 评分。

**适用边界与深读导览：** 结论仅在朗读式合成新闻、文本级标签与无参考分类前提下成立，不覆盖自发语音、自然录音部署与证据检索验证，英文无真实切分，语言与生成器身份部分混杂，音频与转录因覆盖与类别平衡不同不可直接比较。欲复核提示模板、双评审一致性与转录清洗规则可查附录 A、附录 D 与第 3.4 节，欲深究编码器原文与转录对照、解码器失败模式与来源控制矩阵可查第 4.1 节至第 4.3 节与第 5 节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 参考无关分类在三语语音条件下面临何种瓶颈

口语中的事实改写检测长期缺乏系统基准，文本幻觉研究已较成熟，但无需参照原文的语音事实改写分类仍少有人探索，尤其在低资源语言中更为突出。语音内容常经由合成与识别多级处理，噪声逐级累积，错误传播会直接影响下游判断。与相对干净的文本输入不同，语音流程会引入转写失真与语义漂移，在真实语音约束下评估稳健性因此十分关键。

本工作将口语幻觉操作定义为新闻原文中经合成引入的事实或语境改写，标签在文本生成阶段相对原文确定。检测器在推理时仅接收目标新闻条目，可为原文文本、合成音频或识别转写本，无法获取原文与外部证据。任务包含二元判断是否改写，以及改写类型与严重度分级，属于无需参照的分类，而非基于证据的事实核查，结论不能外推为开放世界真伪验证。

#### 基准缺口与低资源动机

既有路线存在三方面瓶颈。音频与音频语言模型幻觉基准多为英语问答，缺少口语检测视角。多语幻觉基准多为纯文本，且幻觉行为与语言数字足迹并非简单对应，哈萨克语这类真正低资源语言值得单独考察。合成基准天然存在来源混杂，忠实样本由人工撰写而改写样本由大模型生成，来源与标签完全相关，是否能迁移至人工撰写的真实错误信息尚未得到检验。

为覆盖上述缺口，原文以哈萨克斯坦新闻平台文章为源，区分高资源英语、中资源俄语与低资源哈萨克语，并在主题与文体保持可比的前提下系统改写。3 种改写各有分工，事实矛盾指与原文直接冲突的陈述，事实编造指貌似合理但无来源支撑的新增细节，语境不一致指不借助显性事实错误而扭曲强调与因果的细微改动。每一类型再分轻度、中度与重度，以控制偏离强度。

#### 构建思路与真实对照

基准共计 12,013 个新闻样本，其中英语 3,967 个、哈萨克语 3,978 个、俄语 4,068 个，每个样本均具有文本、合成语音与识别转写本 3 种形态。英语批次由 gpt-3.5-turbo 与 gpt-4 生成，俄语与哈萨克语批次由 gemini-2.0-flash-lite 生成，生成提示要求模型给出结构化自评，再由分属不同家族的两个外部评判模型独立验证，并辅以对合成语音的人工抽查。

另收集 290 条经事实核查的真实错误信息，其中俄语原生 225 条与哈萨克语原生 65 条，经机器翻译形成每语言 290 条的平行对照，并经双语作者逐条核验且判定全部可用。每语言另以主题与时间相近的 290 篇人工原文作忠实对照，经词频逆文档频率余弦贪心匹配选出，且在评估前从训练与验证划分中剔除。全部真实条目同样经过相同合成识别链路渲染，仅带二元标签而不再标注类型与等级，用于检验合成训练信号能否迁移至人工撰写的自然错误信息。

### 从原文到转写本的三形态数据流水线全景

基准围绕 4 种数据形态组织，记为原文 Da 、改写文本 Db 、音频 Dc 与转写本 Dd 。忠实分支直接保留原文文本，非忠实分支经大模型按指定类型 T 与等级 L 生成改写文本，每篇文章对应 3 种类型与 3 个等级的受控组合。两种文本再经语言相关语音合成得到音频，再经识别得到转写本，从而支持在干净文本、转写文本与原始音频 3 种输入上评估同一标签体系。

下图展示从新闻原文到三形态对齐数据的完整走向，建议先沿箭头区分忠实直通与改写分支，再观察类型与等级受控组合、语音合成与语音识别的汇合位置，并注意真实世界拆分经机器翻译形成平行对照的附加路径，以建立端到端数据流的整体印象。

[![原论文 Figure 1：Data generation pipeline framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/ebcc1903e5bb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/ebcc1903e5bb/figure-1.png)

*论文图 1：三语新闻从原文经大模型改写、语音合成与识别形成三形态对齐数据的完整流程（原论文 Figure 1）。*

图中左侧新闻框并列英语 EN 、俄语 RU 与哈萨克语 KZ 三语标识，经金色虚线直达上方非幻觉文本 NHT ，经红色虚线进入大模型 LLM 生成下方幻觉文本 HT ，该框内以 L x3 与 T x3 标示 3 种类型与 3 个等级的组合。随后两路文本共同进入语音合成 TTS M ，经黑色圆箭头得到非幻觉音频 NHA 与幻觉音频 HA 构成的音频 Dc ，再经语音识别 ASR 得到非幻觉语音 NHS 与幻觉语音 HS 构成的转写本 Dd ，右侧仍保留三语标识，箭头颜色区分了忠实与改写两条主路径。

语音合成按语言选型，英语 EN 采用 Coqui XTTS-v2 ，俄语 RU 采用 Silero ，哈萨克语 KZ 采用开源哈萨克语模型并使用多说话人以增加多样性。识别侧英语 EN 与俄语 RU 采用 Whisper-large-v3 ，哈萨克语 KZ 采用微调 wav2vec2 模型。真实世界拆分中每条原生错误信息经机器翻译得到另一语言平行版本，再与经主题时间匹配的忠实原文一同走相同合成识别流程，保证三形态评估条件一致。

### 合成改写与真实世界拆分的构造与质量核验

合成子集基于哈萨克斯坦新闻平台的原文，视其为事实参照，英语 EN 批次由 gpt-3.5-turbo 与 gpt-4 生成，俄语 RU 与哈萨克语 KZ 批次由 gemini-2.0-flash-lite 生成。事实矛盾指与原文直接冲突的陈述，事实编造指植入貌似合理但无依据的细节，语境不一致指不引入显性事实错误但扭曲含义、强调或语境。每篇文章按类型与等级改写，生成提示还要求模型给出结构化自评，但该自评不独立，后续另设跨家族外部评判。

全部原文与改写文本均经合成与识别，标签在文本生成阶段确定，后续差异视为流程退化而不改变标签。转写失真以词错率 WER 与字错率 CER 在语料级度量，经小写、去标点与去数字归一化后，英语 EN 为 7.30% / 2.74% ，俄语 RU 为 9.08% / 4.74% ，哈萨克语 KZ 为 34.04% / 16.90% ，总体为 13.02% 与 6.46% 。哈萨克语过高源于合成与识别级联退化，专有名词与哈萨克斯坦术语失真、黏着形态导致整词误判相对字级更为膨胀。

质量核验采用分层抽样 216 篇，每类型严重度语言单元 8 篇，由 Claude Haiku 4.5 与 DeepSeek Chat 在相同协议下独立评判。维度按类型取七项，含类型充分性、流畅度、连贯性、逻辑连贯、内部一致、可信度、事实准确性、相关性与满意度，采用 1 分至 5 分有序量表。两评判在事实准确性与可信度上二次加权 Kappa 为 0.875 与 0.897 ，在一点以内 100% 一致，其余主观维度原始一致率仍高但偶然校正后 Kappa 偏低，表明事实退化信号稳健而风格维度方差有限。

真实世界拆分收集事实核查网站 factcheck.kz 在 2024 年 10 月公开存档的 290 条已证伪条目，俄语 RU 原生 225 条与哈萨克语 KZ 原生 65 条，去除 15 条完全重复后经 Google Translate 互译，双语作者逐条核验 290 条译文均判为可接受。每语言配 290 篇经 TF-IDF 余弦贪心匹配的忠实原文作阴性，训练与开发划分排除这些条目以防泄漏。另由哈萨克语母语作者抽检 120 段合成语音，94.2% 判为基本可懂，无完全不可懂，但 61.7% 存在轻微语义偏离而 38.3% 存在重度偏离，提示低资源条件下文本标签在音频端未必完全可恢复。

### 编码器微调冻结边界与解码器零样本推理执行路径

编码器在二元任务上微调，有效批量 16 ，物理批量 4 累积 4 步，学习率 2e-5 ，3 轮，最大序列长度 512 ，半精度加梯度检查点，开发集宏平均 F1 早停等待 1 轮，随机种子 42 。mDeBERTa-v3 在半精度下不稳定，改用单精度与急切注意力，学习率 1e-5 加 10% 线性预热，物理批量 8 累积 2 步保持有效批量 16 不变。数据按 80% / 10% / 10% 依语言与标签分层划分，评估真实世界拆分的专用轮次将 580 篇忠实阴性先移出训练与开发池再追加至合成测试集，确保评测条目未参与训练。

训练与冻结边界清晰，4 个多语编码器 XLM-R base 、XLM-R large 、mDeBERTa 与 ReMBERT 的全部参数参与微调，转写本列模型在合成语料转写本上以相同文章编号划分重新微调。5 个解码器不做任何任务微调，含 Qwen2.5-Omni 3B 、Qwen2-Audio 7B-Instruct 、Gemma-3n-E4B 、LFM2-Audio 1.5B 与 Step-Audio-2-mini ，均采用贪心解码与最大新词元 256 ，仅接收目标文本或音频并输出 JSON 片段，解析失败与拒答计为错误。

提示在直接条件下统一，音频输入提示分析音频内容，文本输入将音频内容替换为文本内容并追加待分析段落。二元、类型与严重度各为独立调用，输出键分别为 binary 、type 与 degree 。思维链条件下要求先逐步思考再给出终判，但 Qwen2-Audio 在细粒度音频调用中全部索要音频，Qwen2.5-Omni 在哈萨克语 KZ 二元音频调用中 33% 拒绝，加之 Gemma-3n 高达 78% 不可解析，仅直接提示结果可比，思维链输出不可用。

推理执行侧音频中位时长 96 s ，英语 EN 达 212 s ，98% 超过 30 s 。Qwen2-Audio 的 Whisper-large-v3 前端文献记载超 30 s 截断，Qwen2.5-Omni 采用分块流式编码器而 LFM2-Audio 采用 FastConformer 编码器，均未记载该限制，但原文未验证各模型实际是否截断，信息损失仍是可能的模型相关局限。音频子集与转写本全集在样本量与类别平衡上差异显著，哈萨克语音频子集 85% 未改写而语料仅 28% ，准确率不可直接对比，比较音频与转写本在此基准上不成立。

### 原文转写本退化、解码器失效与真实迁移的定量剖析

评测统一报告准确率 Acc 与宏平均 F1 ，方向均为越高越好，编码器在原文 O 与转写本 T 配对比较，解码器在转写本 T 与直接音频 A 上因样本量与类别平衡不同不可直接比较。转写本全集二元为 3,965 / 3,977 / 4,067 条，细粒度为 2,627 / 2,865 / 2,809 条，音频子集从全集到 344 / 150 与 100 / 150 不等，多数类基线随划分而变。检测无人工听测 MOS 或 CMOS ，仅有大模型评判与 120 段可懂度人工抽检，方差与置信区间原文未报告，跨表比较需限定在同一次微调轮次内。

#### 编码器在原文与转写本上的退化幅度

下表精简汇总微调编码器在二元、类型与严重度上的宏平均 F1 区间，原文完整 Table 2（本精简表未列出）含 4 个编码器在三语言与两种输入上的准确率与 F1 全格。该精简表仅呈现区间以说明二元相对易而细粒度更难，完整行列对比需以原表逐格核对，不可将区间极值误读为单模型单格最优。

| 任务 | 宏平均 F1 区间 | 趋势要点 |
| --- | --- | --- |
| 二元检测 | 0.52–0.89 | 多数原文高于转写本但非一致 |
| 类型分类 | 0.14–0.68 | 细粒度更难且退化不一致 |
| 严重度分级 | 0.15–0.66 | 细粒度更难且退化不一致 |

区间表明二元检测宏平均 F1 为 0.52–0.89 ，类型为 0.14–0.68 ，严重度为 0.15–0.66 ，性能多数在原文上高于转写本但非一致，个别单元转写本持平或反超，如俄语 RU 上 XLM-R base 。mDeBERTa 跨语言最稳健，ReMBERT 在二元上可比但在类型与严重度上仅 .153–.188 。对 mDeBERTa 与 ReMBERT ，二元退化随单语识别误差增大而加大，哈萨克语 KZ 最大，但该趋势在细粒度与 XLM-R 上不一致，原文未报告方差，行内加粗仅表示该行 4 个编码器中数值最大，需逐格核对方向。

#### 解码器零样本在转写本与音频上的失效模式

下表精简汇总唯一在转写本二元上超过多数类基线的解码器，原文完整 Table 3（本精简表未列出）含 5 个解码器在三语言与两种输入上的准确率与宏平均 F1 全格。该精简表仅呈现 Gemma-3n 的转写本数值与对应基线区间，音频因样本量与类别平衡不同不可直接对比，完整可比单元仅为全集模型在转写本上的同条目格。

| 任务 | Gemma-3n 转写本宏平均 F1 | 基线宏平均 F1 |
| --- | --- | --- |
| 二元检测 | .613/.581/.630 | .40–.42 |
| 严重度分级 | .399/.328/.370 | .167 |

Gemma-3n 在三语言转写本二元上为 .613/.581/.630 ，对照 .40–.42 ，严重度为 .399/.328/.370 ，对照 .167 ，类型预测贴近基线。其余四者在各自二元基线上未超越，转写本上仅 Qwen2-Audio 在细粒度基线上有零星超过，多数呈常数预测，Qwen2.5-Omni 在哈萨克语 KZ 转写本上恒判否定。思维链输出因拒答与不可解析不可用，音频近常数预测与截断可能、类别偏斜及 38.3% 重度语义偏离一致，不能说明音频推理能力。

#### 真实迁移与来源混杂及识别误差工具差异

下表为合成测试与真实世界拆分的二元宏平均 F1 ，编码器仅在合成子集训练，专用轮次将每语言 290 篇忠实阴性移出训练与开发池后追加至合成测试集，使两行共享同 290 篇忠实类。O 列与 T 列分别在原文与转写本上微调且文章编号划分一致，数值源自独立微调轮次，不可直接对比完整语料轮次的编码器全表。

| Lang Split | ReMBERT O | ReMBERT T | mDeBERTa O | mDeBERTa T |
| --- | --- | --- | --- | --- |
| Synth (test) | .786 | .819 | .825 | .771 |
| ru |  |  |  |  |
| Real | .819 | .835 | .870 | .811 |
| Synth (test) | .863 | .794 | .831 | .748 |
| kz |  |  |  |  |
| Real | .883 | .818 | .878 | .753 |

俄语 RU 上 ReMBERT 合成为 .786 ，真实为 .819 ，mDeBERTa 合成为 .825 ，真实为 .870 ，哈萨克语 KZ 上 ReMBERT 合成为 .863 ，真实为 .883 ，mDeBERTa 合成为 .831 ，真实为 .878 ，真实持平或超过合成测试，显示合成训练在该拆分上保持高分类性能。O 到 T 退化随识别误差增大，俄语 RU 在 6 个百分点以内且 ReMBERT 转写本微调甚至补偿噪声，哈萨克语 KZ 达 12.5 个百分点。290 对平行伪造中 mDeBERTa 仅 3.8% 不一致，跨语言稳定性较强，但来源剖分显示忠实改写仍抬升标记率，合成二元分数量化了事实敏感性与机器风格的混合。

下表为相同合成音频上单多语模型与分语言优选的语料级词错率与字错率，计算前统一小写、去标点与去数字，跨语言直接对比词错率需谨慎。该表保留英语 EN 、俄语 RU 与哈萨克语 KZ 三列及所用系统行，说明基准为何对英语 EN 与俄语 RU 选用 Whisper-large-v3 而对哈萨克语 KZ 选用微调 wav2vec2 模型。

| ASR system | EN | RU | KZ |
| --- | --- | --- | --- |
|  | WER/CER WER/CER |  | WER/CER |
| Whisper-large-v3 | 7.30/2.74 | 9.08/4.74 | 64.27/32.03 |
| wav2vec2 (fine-tuned) | – | – | 34.04/16.90 |
| Used in benchmark | Whisper | Whisper | wav2vec2 |

Whisper-large-v3 在英语 EN 为 7.30% / 2.74% ，俄语 RU 为 9.08% / 4.74% ，哈萨克语 KZ 高达 64.27% / 32.03% ，微调 wav2vec2 将哈萨克语 KZ 降至 34.04% / 16.90% ，近乎减半但仍约为前两语言 4 倍，残余工具差距未消除。哈萨克语黏着形态使轻微形态偏离即计整词错误，词错率相对字错率更为膨胀，加之新闻专有名词与地域术语欠代表，合成失真经识别忠实转写仍计为全词错误。该误差格局与编码器二元退化随语言排序一致，但细粒度上不一致，且无人工听测基线对照。

### 假设边界、复现核对与低资源部署选型建议

基准主要使用朗读式合成语音而非自发或原生录制，转写本误差同时来自合成与识别，趋势未必直接迁移至自然部署。针对哈萨克语链路的高误差，母语作者随机抽查 120 段音频，按可懂度、忠实度与是否因质量剔除加以评定。其中 94.2% 被评为基本可懂，5.8% 为较难听懂，无完全不可懂样本。语义层面 61.7% 存在轻微出入，38.3% 存在明显出入，无因音质问题剔除的样本，说明链路保持整体可感知但引入显著语义扰动。

词错率对切分与形态敏感，哈萨克语黏着特性使微小偏离即计整词错误，原文同时报告字错率并按语言关联误差与下游退化，而非将原始词错率直接视为语言难度。同一批合成音频上，英语词错率与字错率分别为 7.30% 与 2.74%，俄语为 9.08% 与 4.74%，哈萨克语为 34.04% 与 16.90%。新闻领域专名密集与地域术语欠覆盖进一步放大误差，语音合成对专名的音变会被识别如实转写却计为整词错误。

#### 生成器混杂与来源混杂

语域仅限新闻，英语改写由 gpt-3.5-turbo 与 gpt-4 生成而俄语与哈萨克语由 gemini-2.0-flash-lite 生成，语言与生成器身份部分混杂，跨语言差异不能完全归因于资源。生成提示附带自评并不独立，原文另以分属不同家族的两个外部评判模型作独立验证，并在分层抽样上核验事实性维度的一致性，以降低单一评判偏好带来的偏差。

合成二元中来源与标签完全相关，忠实为人工而改写为机器，分类器可能响应机器风格。类型与严重度无此二元混杂但仍可能保留提示或生成器痕迹，需以人工伪造与忠实改写对照加以剖分。在俄语原文分析中，同一批忠实文章的人工真值与人工伪造的检出率差异显著，而将真值忠实改写为机器文体后，两个编码器的检出率上升幅度明显不同，说明二元分数同时包含真伪信号与依赖模型强弱的文体信号。

#### 评估边界与内容使用边界

所有模型均为无需参照，仅接收目标文本、转写本或音频，不接触原文与检索证据，且未控制新闻事实是否在模型训练截止前后，结果应理解为相对原文定义的合成改写识别，而非开放世界证据核查。真实世界拆分仅含俄语原生 225 条与哈萨克语原生 65 条，哈萨克语翻译占比更大可能引入翻译痕迹，且不含英语并仅作评估，事实核查样本非随机抽样，来源语域差异本身可能带来分布线索。

解码器均为零样本提示而未经任务音频微调，部分模型文档未载明哈萨克语支持，跨语言结果首先反映覆盖范围与输出可解析性。音频条目中位时长为 96 秒，英语达 212 秒，多数超出常见编码器窗口，推理时是否截断未经逐模型核验，音频与转写本在覆盖量与类别比例上亦不一致，故原文只报告而不直接比较两种模态。原文不分发原稿与伪造文本，仅发布链接、标签与元数据，改写文本明确标注为合成变更，语料仅限研究使用。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长步长码率与通道细节，仅披露音频中位时长 96 s 、英语 EN 212 s 、98% 超过 30 s ，以及分语言合成识别选型与词错率字错率，前瞻延迟与实时率未披露
- **训练与评测数据**：合成子集 12,013 个新闻样本含英语 EN 3,967 个哈萨克语 KZ 3,978 个俄语 RU 4,068 个，覆盖三种改写类型与三个严重度等级并配三形态，真实世界拆分每语言 290 条伪造与 290 篇忠实阴性，训练开发测试按 80% / 10% / 10% 分层划分，专用轮次排除 580 篇阴性以防泄漏
- **算力与训练耗时**：原文未披露 GPU / TPU 型号数量与训练耗时，仅说明编码器微调有效批量 16 与 3 轮等配置，解码器为零样本冻结推理，附录未给出算力细节
- **核心超参数与配置**：编码器有效批量 16 ，学习率 2e-5 ，3 轮，最大长度 512 ，半精度加检查点，早停等待 1 轮，随机种子 42 ，mDeBERTa-v3 改用单精度学习率 1e-5 加 10% 预热，解码器贪心解码最大新词元 256 ，直接提示可比而思维链不可用
- **推理速度与部署开销**：原文未披露延迟前瞻实时率吞吐与显存，仅披露音频中位时长与截断可能解析失败与拒答计为错误覆盖范围与类别平衡差异导致音频与转写本不可比，解码器参数 1.5B 至 8B ，编码器 279M 至 576M
- **开源产物与协议状态**：原文在正文与附录给出数据集仓库链接与拆分文件说明，但本次未确认链接可用性，代码与模型权重是否公开原文未披露，附录含提示模板与拆分文件清单
- **附录与补充材料要点**：附录逐字给出三类改写生成提示与俄语 RU 哈萨克语 KZ 行级差异、评判提示与维度定义、转写清洗提示、训练细节、模型语言支持表、分语言识别误差表、双评判一致性表与完整质量评分表，以及真实世界拆分翻译核验与忠实改写指令

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 7.5/10 | 技术严谨 5.8/10 | 实验充分 6.6/10 | 清晰度 6.7/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.6`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.6/) · [官方 PDF](https://aclanthology.org/2026.salma-1.6.pdf)
- DOI：`10.18653/v1/2026.salma-1.6`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：12013条英俄哈三语文本-合成音频-转录三态对齐，控制三种篡改类型与三级严重度并配套290条真实谣言平行评估切分。

- 核心优势：双外部评审在事实维度二次加权kappa达0.875与0.897且一点内一致率100%，并以忠实改写四格矩阵量化来源混杂与迁移0.82-0.88。

- 主要短板：38.3%抽查音频存在重大语义偏离且中位96s长音频截断未经验证，文本级标签在音频上可能不可恢复。

- 主要短板：无人工主观MOS且无UTMOS/DNSMOS等代理指标对照，仅120例哈萨克可懂度抽查与LLM评分，主客观对照缺失。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
