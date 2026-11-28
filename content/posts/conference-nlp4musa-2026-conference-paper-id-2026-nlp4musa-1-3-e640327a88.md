---
title: "Stochastic Parrots or True Virtuosos? Digging Deeper Into the Audio-Video Understanding of AVQA Models"
date: 2026-11-27
draft: false
description: "针对音乐音视频问答高分是否反映真正多模态推理，本文以置零消融与跨样本冲突对照语言基线，发现完整输入 70.58% 高于频繁猜测 47.84% 且去音频跌至 56.13% 而去视频仅至 66.27%，代价是结论限于单个模型并残留答案偏置与冲突下过度自信。"
tags: ["评测协议", "统计分析", "音视频问答", "音乐分析"]
categories: ["nlp4musa-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "随机鹦鹉还是真正大师：音乐音视频问答的反事实检验"
paper_digest_original_title: "Stochastic Parrots or True Virtuosos? Digging Deeper Into the Audio-Video Understanding of AVQA Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.3"
paper_digest_workbench_source_sha256: "16caa1a8096bea23647e1600d3f18d419db3f2e1e86d86fe5cb9a4a9e414049b"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.nlp4musa-1.3/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音视频问答"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音乐音视频问答高分是否反映真正多模态推理，本文以置零消融与跨样本冲突对照语言基线，发现完整输入 70.58% 高于频繁猜测 47.84% 且去音频跌至 56.13% 而去视频仅至 66.27%，代价是结论限于单个模型并残留答案偏置与冲突下过度自信。"
paper_digest_reader_sections: [{"heading":"音乐问答高分是否意味着同时听懂看懂","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"AVST 双定位流程与反事实探针总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"置零消融冲突替换与语言基线的构造细节","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"音频缺失更伤整体准确率且仍高于语言猜测","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"冲突输入下时间问题崩塌而部分比较问题保持高位","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单模型单数据集结论的边界与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Philosophy, Classics, History of Art and Ideas, University of Oslo"],"name":"Sara Pernille Jensen"},{"affiliations":["Department of Informatics, University of Oslo"],"name":"Hallvard Innset Hurum"},{"affiliations":["RITMO, Department of Musicology, University of Oslo"],"name":"Anna-Maria Christodoulou"}]
paper_digest_abstract_sha256: "967ef47b72f81fd3dac58cadfa8ce55b6a6768dd65745323102e51316167b637"
paper_digest_sidecars: {"citation.bib":{"sha256":"98a88a02e6731feb2015e7c692d5b75ba63304240fbf996c8533720e138801b4","url":"/audio-research-portal/client/papers/2026-11-27/conference-e640327a882f3939b930b925/citation.bib"},"citation.json":{"sha256":"f7dbb78b9f0a9486ebd7b1335fcc979b64e6abdebfbcb5e54e57364ff9a0d895","url":"/audio-research-portal/client/papers/2026-11-27/conference-e640327a882f3939b930b925/citation.json"},"citation.ris":{"sha256":"7198ba5ef789ab9e4e3e313d978b1bc95684005a854da036d386704ae0e1438e","url":"/audio-research-portal/client/papers/2026-11-27/conference-e640327a882f3939b930b925/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"34ee3959cded1a1f92a92cb5d1721f3de05838c905b119804ac84fc231c9e2da","url":"/audio-research-portal/client/papers/2026-11-27/conference-e640327a882f3939b930b925/rethink-context.json"}}
paper_digest_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.3"
paper_digest_source_kind: conference
paper_digest_conference_id: "nlp4musa-2026"
paper_digest_conference_name: "nlp4musa-2026"
paper_digest_doi: "10.18653/v1/2026.nlp4musa-1.3"
paper_digest_conference_doi: "10.18653/v1/2026.nlp4musa-1.3"
paper_digest_conference_record_url: "https://aclanthology.org/2026.nlp4musa-1.3/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a076dcd9cf57683305d5b0c35aa919da9298fad05db15aed46d5cef000f05dba"
paper_digest_api_reader_plan_sha256: "865edfdede7ee2389ab864410778d3237d2f5312887c5f967d245fce4972068b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3e3caf113b3a112353ff300654f19865403fa70d1f2116c408fa2200c07b343f"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0486a3e85c391d06e44d00e9131e30dfcc19ddf3075e732af389cf68511d68eb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d7d3adb42406391c674bea2d4343511ab13f7e94617de129d25cf4424d898457"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5a27b54294ce9653bd7cf163c1b6720ea15ed580fcdc0d4c18eca5d4af3d85fa"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"task","id":"task.music-understanding","label":"音乐分析"}]
paper_digest_primary_method: "评测协议"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 随机鹦鹉还是真正大师：音乐音视频问答的反事实检验

> 英文题目：*Stochastic Parrots or True Virtuosos? Digging Deeper Into the Audio-Video Understanding of AVQA Models*

> 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.3`
> DOI：`10.18653/v1/2026.nlp4musa-1.3`
> Track：NLP4MusA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.3/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [音视频问答](/audio-research-portal/papers/?concept=task.av-question-answering)；[音乐分析](/audio-research-portal/papers/?concept=task.music-understanding)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 6.1/10 | 清晰度 6.9/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 4.6/10 | 工程/实践 5.7/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sara Pernille Jensen：Department of Philosophy, Classics, History of Art and Ideas, University of Oslo
- Hallvard Innset Hurum：Department of Informatics, University of Oslo
- Anna-Maria Christodoulou：RITMO, Department of Musicology, University of Oslo

## 📌 核心摘要

**问题与瓶颈：** 音视频问答（audio-video question answering, AVQA）要求同时依据演出音频、演出视频与自然语言问题给出答案，本文对象是音乐表演问答，输入为音频流、视频帧与文本问题，输出为答案词表上的分类预测，取最高概率答案作为预测结果。所用 MusiQAl 数据集包含 310 个视频和 11,793 个问答对，覆盖存在、计数、位置、比较、时间五类及新增因果与目的两类，在 MUSIC-AVQA 模板基础上扩展 47 个新模板。现有工作多报告约 71% 的总体准确率，较少检验模型究竟依赖音频、视频还是语言先验。瓶颈在于高准确率可能来自问题模板与高频答案的统计关联及非对称模态利用，而非真正的跨模态时空推理，且名义上的音频、视频、音视频三分标签与实际所需模态未必一致。

**核心思路与方法架构：** 与最接近的直接整体准确率评测相比，本文保留音视频空间时间（audio-video spatial-temporal, AVST）的空间定位、时间定位与融合分类主链路，增量在于引入不查看内部表示的黑盒反事实探针。沿单条样本看，音频张量、视频帧与问题文本分别进入空间定位与时间定位模块，融合后经 softmax 得到答案概率分布并取最高者输出。探针包括模态消融与模态冲突两类，消融将音频、视频或两者输入张量置零，迫使模型仅用问题或问题加单模态作答。冲突将音频、视频或两者随机替换为 310 种表演中与问题不匹配的其他表演信号，每种来源替换 3-4 个样本，每种冲突做 5 个可复现随机种子的独立重复，双冲突时音频与视频取自不同表演。为检验置零输入的有效性，作者按相同数据、架构与超参数另训练音频缺失、视频缺失与双缺失三个对照模型。语言先验基线按问题模板计算均匀随机猜测期望准确率 32.14% 与训练集最频答案准确率 47.84%，并比较最高预测概率的置信分布在正确与错误样本上的变化。

**关键实验与核心代价：** 在测试集上，完整输入标准模型准确率为 70.58%，高于均匀猜测 32.14% 与最频答案 47.84%，表明利用了音视频输入但数据集语言偏置较强，70% 样本的候选答案不超过 5 个。消融后准确率从 70.58% 变为视频缺失 66.27%、音频缺失 56.13% 与双缺失 46.49%，音频缺失下降更大，双缺失低于最频基线但仍高于均匀猜测，对应重训对照模型分别为 67.79%、58.50% 与 50.80%，仅略高于直接置零，验证了方法有效性。冲突下准确率从 70.58% 变为视频冲突 61.05%、音频冲突 50.97% 与双冲突 43.79%，同样显示音频主导。按完整输入下答对与答错划分，答对子集中视频、音频与双消融后仍保持 87.78%、70.78% 与 54.13%，答错子集中分别有 14.66%、20.98% 与 28.16% 被纠正，冲突在答错子集中纠正 16.72%、20.34% 与 24.31%，方向互补一致。置信上完整输入正确预测峰值约 90% 均值 76%，高于仅音频、仅视频与仅问题，冲突下正确预测均值 74% 至 76%，错误预测均值 57% 至 61%，双冲突错误预测均值升至 61%，提示证据冲突时过度自信。细分显示视频存在问在视频冲突下几乎不受影响，音视频比较问在各类冲突下保持高准确率，分别与 80% 答案为肯定及 94% 答案为肯定有关，音视频时间问在音频冲突下大幅下降，表明部分名义多模态问题实为单模态或标签错配，代价是双模态缺失或冲突带来明显回落，分类任务无需 MOS 类听感指标且原文未做人工听测。

**适用边界与深读导览：** 结论成立前提限于单个 AVST 模型在 MusiQAl 上的表现，未验证 LAVISH 等其他架构与 MUSIC-AVQA 等其他数据，零张量不等同静默或黑图，对照模型未调超参数，部分类别样本极少。本文未提供可试听的音频演示页与部署成本，分类准确率与置信分析不能直接等同听感或实时可用性。需深究空间定位与时间定位如何融合、消融与冲突的类别差异及置信分布形态，可查阅下方方法概述和架构、实验结果与局限与问题对应内容。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/silyeah/MusiQAl/tree/in5490> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐问答高分是否意味着同时听懂看懂

音乐音视频问答要求模型同时利用演出声音与画面回答问题，例如定位哪件乐器在发声以及发声先后。MUSIC-AVQA 包含超过 45,867 个问答对，分为存在、计数、位置、比较、时间 5 类。MusiQAl 包含 310 个视频与 11,793 个问答对，在前者模板上新增 47 个模板与因果、用途两类，覆盖多种文化与流派。任务被处理为答案词表上的分类，取概率最高者为预测。

已有工作多以整体准确率衡量进步，在 MusiQAl 上约为 71%，能跟踪演奏者但在风格分类与合奏声部分离等复杂场景仍显不足。近期研究发现音乐问答模型仅用问题文本即可接近原始准确率，提示存在语言偏置。若只看总分，无法判断模型究竟依赖音频、视频还是问题中的统计规律。

这种担忧有统计基础。测试集中 70% 样本的候选答案不超过 5 个，均匀猜测期望准确率为 32.14%，按问题模板恒猜训练集中最常见答案可达 47.84%。问题模板带有占位符，例如在前后与音乐对象处填空，答案分布与乐器常用程度相关。名义上标注的音频、视频或音视频需求在训练时并不提供给模型，标注与真实需求可能错位。

本文把核心问题定义为高准确率是否等于真正的音视频推理。它采用黑盒反事实评估，不查看内部权重，只系统干预输入并观察预测与置信度变化。干预包括置零单个或双模态，以及跨样本替换制造冲突信号，并以随机猜测与频繁猜测为基线。只有稳定超越语言基线且对干预呈现合理分化，才能认为存在非平凡的多模态融合。推理时音频、视频与问题文本分别编码后汇入融合环节，再由空间定位模块锁定发声乐器的画面位置，由时间定位模块梳理发声时序，最后输出答案概率分布。这种分工使空间与时间线索各有归属，也为后文按模态拆解依赖提供了对照。

### AVST 双定位流程与反事实探针总览

本研究未提出新结构，而是以 AVST 为案例复训并剖析。该结构保留空间定位与时间定位两个融合模块，未替换主干。实质增量在评估侧，新增模态消融、模态冲突与数据集模式分析 3 组探针。原文未披露采样率、帧长、步长、码率、通道与特征维度等信号规格，也未给出优化器与学习率等超参，因此无法复原 1 秒样本的张量形状与帧率变化，只能追踪逻辑数据流。

下图概括推理时 3 路输入的汇合顺序，阅读时请沿黑色箭头从左侧视频、音频与问题文本经中间特征块看到右侧融合与答案输出，重点观察视频与音频如何先进入空间定位再与文本共同进入时间定位，以及音频虚线分支的走向。该走向决定了时间推理能否同时利用声音与文字线索，为后文消融音频与视频的对比埋下伏笔。

[![原论文 Figure 1：Illustration of the basic components of the ML model used in (Christodoulou et al., 2025) during…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-1.png)

*论文图 1：三路输入经空间定位与时间定位融合后输出答案的推理流程示意（原论文 Figure 1）。*

图中左侧上方为黑白演出视频帧并标出演奏者 A 与 B，上方注明输入，中部为波形音频，下方为问题框其中视觉线索标红而节奏与音乐标蓝。中间红色视频块与蓝色音频块连向绿色空间定位块，灰色文本块与音频虚线连向绿色时间定位块，最终输出为是。图中显示空间定位先融合视听，时间定位再融合文本与空间结果，问题中颜色区分对应不同模态需求。

逻辑上视频、音频与问题分别编码后融合，问答视为分类并经 softmax 取最高概率答案。所有模型均按既有文献规格由作者独立重训，主模型用完整数据，另有 3 组分别在缺音频、缺视频与缺双模态数据上重训以校验置零法的有效性。推理为离线整段预测，原文未说明自回归、分块流式、前瞻窗口、采样步数、延迟与显存开销，无法评估实时部署代价。

### 置零消融冲突替换与语言基线的构造细节

模态消融将音频或视频输入张量置零，迫使模型仅靠问题或问题加单模态作答，属于不观察内部变化的黑盒可解释手段。问答视为对答案词表的分类，取概率最高者为预测，消融前后均按此规则判定。测试样本进一步按完整输入下答对与答错划分，分别统计消融后的准确率，以观察预测在 2 个方向上的变化幅度。模型置信度取最高预测概率，分别统计答对与答错的分布。由于训练时未见全零输入，零张量未必被理解为静音或空白画面，为此另训 3 个同结构同数据同超参的消融模型作参照，但未为其调参，结果仅具指示意义。所有模型均按原数据集论文说明复训，保证干预前后可比。

模态冲突从 310 场不同演出中随机抽取不匹配的音频或视频替换原样本，保持另一模态不变，或将音视频分别换成来自不同演出的样本。每场演出约替换 3 个至 4 个样本，按 1,183 除以 310 约为 3.8 计算以减少代表性偏置。每种冲突类型独立重复 5 轮并使用可复现的不同随机种子，保证替换组合互不相同。该设计可检验单模态问题在另一模态被污染时是否仍可答，以及双模态问题在证据矛盾时的行为，从而区分单模态依赖与跨模态整合。

数据集分析形式化两种无需音视频理解的替代假设。均匀猜测按每种问题模板的候选数计算期望，是否型与哪件乐器型的基数不同，多数样本仅有 5 个或更少候选。频繁猜测按模板恒选训练集中最常见答案，反映乐器使用等可学习的语言规律。期望按模板加权得到整体 32.14% 与 47.84%。若模型表现稳定高于两者，则需动用音视频信息，若处于或低于频繁猜测，则可用语言规律解释。该思路呼应只有同时证伪替代假设才能支撑理解判断的证据观。

置信度分析比较最高概率的均值与分布。答对样本天然概率较高，答错样本较低，完整输入下答对均值最高，缺失模态后逐步下降。候选越多则最高概率自然越低，而多模态模型能答更复杂问题，反而拉低平均置信度，因此跨条件差异可能被低估。冲突实验同样对比正确与错误两组的均值与标准差，以判断模型在证据矛盾时是否校准。若错误时置信度不降反升，则提示对跨模态不一致缺乏推理，并伴随过度自信倾向。

### 音频缺失更伤整体准确率且仍高于语言猜测

评测在 MusiQAl 测试集上以准确率为准，方向为越高越好。标准模型完整输入为 70.58%，约 71%。消融与冲突均在同一测试集上比较，另训模型采用相同结构、数据与超参但输入缺失。冲突每种类型做 5 轮替换。基线为均匀猜测 32.14% 与频繁猜测 47.84%。子类别样本量差异极大，例如音频因果仅 3 个而音视频总数达 653 个，解读小样本类别需格外谨慎。

下图分音频、视觉与音视频 3 组展示模型与两种猜测在各子类别的准确率，横轴括号内为该类别样本量，纵轴为准确率百分比，三色柱分别代表模型、频繁猜测与均匀猜测。阅读时先对比同组内三柱高低，再横向比较不同子类别的差距，并留意样本量仅为个位数的类别。

[![原论文 Figure 2：Comparison of AVST model performance with random and frequentist guessing across question…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-2.png)

*论文图 2：模型与均匀猜测频繁猜测在音频视觉音视频子类别的准确率对比（原论文 Figure 2）。*

图中显示模型在几乎所有子类别高于两种猜测，频繁猜测普遍高于均匀猜测，反映乐器常用程度等语言规律可学。例外是视觉因果约 60% 与频繁猜测持平，并非全面领先。音频时间与视觉存在等小样本类别波动大。为量化模态依赖程度，下表列出标准模型在去除视频、音频与双模态时的整体准确率，以及按完整输入成败划分的子集表现与另训模型的对照。

| Modality Excluded | Standard | Success | Failure | Alt. mod. |
| --- | --- | --- | --- | --- |
| None | 70.58% | 100% | 0% | — |
| Video | 66.27% | 87.78% | 14.66% | 67.79% |
| Audio | 56.13% | 70.78% | 20.98% | 58.50% |
| Both | 46.49% | 54.13% | 28.16% | 50.80% |

表中完整输入 70.58%，去视频为 66.27%，去音频为 56.13%，去双模态为 46.49%，呈现音频重于视频的层级。答对子集中保留率分别为 87.78%、70.78% 与 54.13%，答错子集中纠正率分别为 14.66%、20.98% 与 28.16%，互补趋势一致。另训模型为 67.79%、58.50% 与 50.80%，仅略高于直接置零，佐证方法有效。去双模态低于频繁基线但高于均匀猜测。下图按子类别展示 4 种缺失条件的准确率，注意个别小样本的反常升高。

[![原论文 Figure 3：Test accuracy for the standard model with different modalities removed, across question categories.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-3.png)

*论文图 3：去除视频音频或双模态后各子类别准确率的变化与例外（原论文 Figure 3）。*

图中显示 3 组面板中音频缺失的降幅普遍大于视频缺失，音频时间类在缺音频时跌至约 7% 而缺视频时保持约 35%，音视频时间类在缺音频时跌至约 32% 而缺视频时保持约 60%，说明时间推理主要由音频驱动。例外必须指出，音频存在类去视频略高于完整输入，音频因果类去视频达 100% 而完整仅约 66%，但该类仅 3 个样本。视频存在类在多种缺失下均接近 100%，标签与敏感性无清晰对应，名义多模态问题多可单模态作答。

### 冲突输入下时间问题崩塌而部分比较问题保持高位

下表列出标准模型在视频冲突、音频冲突与双冲突下的整体准确率，并按完整输入下答对与答错划分给出子集准确率，用于比较两种模态被污染时的相对影响。无冲突基线为 70.58%，冲突后下降幅度直接反映模型对该模态的依赖程度，答错子集的回升则反映预测被扰动的方向。

| Modality Conflicted | Standard | Success | Failure |
| --- | --- | --- | --- |
| None | 70.58% | 100% | 0% |
| Video | 61.05% | 79.16% | 16.72% |
| Audio | 50.97% | 65.25% | 20.34% |
| Both | 43.79% | 53.84% | 24.31% |

表中视频冲突为 61.05%，音频冲突为 50.97%，双冲突为 43.79%，再次呈现音频重于视频。答对子集中保留率为 79.16%、65.25% 与 53.84%，答错子集中纠正率为 16.72%、20.34% 与 24.31%，音频扰动更大。双冲突低于频繁基线但高于均匀猜测，说明仍残留语言线索。下图分音频、视觉与音视频 3 组展示 4 种冲突在各子类别的准确率，重点看时间类崩塌与比较类的保持。

[![原论文 Figure 5：Overall accuracy on the test dataset with conflicts applied for a) Audio Sub-categories b) Video…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/313861b02670/figure-5.png)

*论文图 5：视频冲突音频冲突与双冲突下各子类别准确率的分化（原论文 Figure 5）。*

图中显示音频时间类在音频冲突下接近 2% 而视频冲突时保持约 33%，音频计数类视频冲突几乎无下降而音频冲突时降至约 51%。视觉存在类在各类冲突下均保持高位，音视频比较类在所有冲突下维持约 79% 至 85%，音视频时间类在音频冲突下从约 54% 跌至约 28%。原文指出舞者是否一直在跳答是占 80%，视觉线索是否与节奏协调答是占 94%，是否型偏置与错标可解释部分保持高位的现象。

置信度上答对组均值在 74% 至 76% 之间，答错组在 57% 至 61% 之间。消融下答对均值从完整 0.76 经仅音频 0.72 与仅视频 0.70 降至仅问题 0.66，答错组从 0.58 降至 0.51。冲突下答对组无冲突 0.76、视频 0.74、音频 0.75、双冲突 0.75 差异极小，答错组双冲突为 0.61 高于无冲突 0.58，错误时反而更自信。该过度自信提示模型缺乏对跨模态不一致的推理，且正确错误样本数随条件变化，分布差异不能直接等同准确率差异。

### 单模型单数据集结论的边界与复现核对

结论仅来自单个 AVST 模型在 MusiQAl 上的表现，未验证其他结构或跨数据集泛化。零张量未必等同静音或空白画面，虽有消融重训佐证但未调超参，结果仅具指示意义。冲突替换做 5 轮但原文未报告方差与区间，小样本类别如音频因果 3 个与视觉存在 6 个波动极大。标签体系缺少音频或视频均可答一档，名义需求与实测敏感性错位，未来设计应补足该区分。

执行上消融将音频或视频输入张量置零，迫使模型仅凭剩余信息作答，另用相同数据、结构与超参重训缺音频、缺视频与双缺 3 模型作对照。冲突则从 310 种演出中随机抽取不匹配样本替换，每种演出约替换 3–4 个样本并做 5 轮独立重复，双冲突时音频与视频取自不同演出。置信度以每次预测中最高答案概率衡量，完整输入下正确预测峰值约 90%，均值 76%，随模态缺失逐步走低，为判断融合与残留语言线索提供了第二维证据。

部署条件多未验证。原文未披露采样率、帧长、步长、码率、通道维度、训练硬件、步数耗时、延迟与显存等，无法评估流式与实时开销。评测仅用分类准确率，未设人工听测，神经代理指标亦不适用。失效案例已显现，例如时间类高度音频驱动、双冲突下错误更自信，但噪声、遮挡与开放问答下的行为仍属未评测范围。

复现方面论文在开放获取声明中给出代码仓库链接，本次收到的链接信息显示相关第三方链接当前可达，但未确认作者官方仓库的维护状态。数据集沿用公开的音乐问答数据，模型按既有规格独立重训以验可复现。附录收录基线对比、消融子类别、置信度分布与冲突子类别等补充可视化，本文选用其中四幅，余下分布可在原文附录对照，不建议仅凭总分判断融合质量。

工程上可把频繁猜测 47.84% 视为参考下限，把双缺失 46.49% 与双冲突 43.79% 视为语言残留参考。若任务重时间推理，应加强音频分支并修正时间类标注，若追求鲁棒融合，应增加答案均衡的是否型与冲突测试，避免常用乐器与肯定回答带来的捷径。只有在超越语言基线且冲突下置信度保持校准时，才可认为具备初步融合而非鹦鹉学舌。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率、通道数、特征维度、前瞻延迟与 RTF 等信号规格
- **训练与评测数据**：MusiQAl 包含 310 个视频与 11,793 个问答对，覆盖多文化多流派，基于 MUSIC-AVQA 超过 45,867 个问答对的模板扩展 47 个新模板并新增因果与用途两类，评测使用测试集并按完整输入成败与音视频子类别划分
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时等计算硬件信息，仅说明按既有规格独立重训主模型与三个消融模型
- **核心超参数与配置**：原文未披露优化器、学习率、批大小、层数维度、码本与损失权重等关键超参，仅说明消融模型沿用相同结构数据与超参且未调参，结果仅具指示意义
- **推理速度与部署开销**：原文未披露延迟、吞吐、显存占用与参数量等推理开销，仅报告整体与子类别准确率及最高预测概率的均值与标准差
- **开源产物与协议状态**：论文开放获取声明给出仓库链接，本次收到的链接信息记为第三方当前可达，不证明作者资源已公开，模型与数据集的作者维护状态原文未确认
- **附录与补充材料要点**：附录收录图 2 至图 6 的补充可视化，包括基线对比、消融子类别、置信度分布、冲突子类别与冲突置信度，未给出证明许可限制或失效案例专节

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 6.1/10 | 清晰度 6.9/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 4.6/10 | 工程/实践 5.7/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.3`
- 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.3/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.3.pdf)
- DOI：`10.18653/v1/2026.nlp4musa-1.3`
- Track：NLP4MusA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：消融与冲突双表量化音频主导效应，并以三组重训对照验证直接置零排序有效性。

- 核心优势：构造均匀猜测与最频答案双语言基线，并对每种冲突做5个可复现种子的独立重复。

- 主要短板：研究限于单个AVST模型在MusiQAl上的表现，未验证其他架构与数据集导致泛化受限。

- 主要短板：未披露空间时间模块内部层数维度与训练超参硬件预处理，复现需依赖外部规范。

---

[← 返回 nlp4musa-2026 论文汇总](/audio-research-portal/posts/conference-nlp4musa-2026/)
