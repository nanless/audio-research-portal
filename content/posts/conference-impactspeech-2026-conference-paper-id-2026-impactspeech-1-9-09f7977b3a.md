---
title: "TurkSV-Bench: Assessing Demographic Bias and Preprocessing Effects in Speaker Verification"
date: 2026-11-28
draft: false
description: "针对土耳其语缺少人口多样基准导致的跨语言评测与偏差盲区，该研究用全自动 YouTube 流程构建 461 位说话人 1,844 条录音的 TurkSV-Bench 并对比 9 个冻结模型，发现约 6.63 百万参数的 ResNet34-LM 以 0.0055% 阈值优化半总误差率整体最强，而温和预加重与倒谱均值归一化仅带来微小增益且激进降噪一致恶化，结论受伊斯坦布尔占 83% 的不均衡与同视频同源评测偏乐观的限制。"
tags: ["基准设计", "数据集构建", "公平性", "说话人验证"]
categories: ["impactspeech-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "土耳其语说话人确认的基准、人口偏差与预处理效应"
paper_digest_original_title: "TurkSV-Bench: Assessing Demographic Bias and Preprocessing Effects in Speaker Verification"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.9"
paper_digest_workbench_source_sha256: "7ef8abf05def7d462040c241cbe763ca7877f66b975659810c86047fc2778e23"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.impactspeech-1.9/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.impactspeech-1.9.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "说话人验证"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对土耳其语缺少人口多样基准导致的跨语言评测与偏差盲区，该研究用全自动 YouTube 流程构建 461 位说话人 1,844 条录音的 TurkSV-Bench 并对比 9 个冻结模型，发现约 6.63 百万参数的 ResNet34-LM 以 0.0055% 阈值优化半总误差率整体最强，而温和预加重与倒谱均值归一化仅带来微小增益且激进降噪一致恶化，结论受伊斯坦布尔占 83% 的不均衡与同视频同源评测偏乐观的限制。"
paper_digest_reader_sections: [{"heading":"土耳其语说话人确认的跨语言鸿沟与基准缺口","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从地区播放列表到 12 秒入库样本的端到端构建流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"人口构成、模型家族与冻结评测的对比起点","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"十余种预处理与组合滤波链的信号直觉","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"基线整体最优、方言差距与温和预处理的有限收益","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"不均衡分布、同源乐观与复现选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Ahmet Berkay Kantarcı"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Abdulkadir Parlak"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Ahmet Karazor"}]
paper_digest_abstract_sha256: "efa60fdeeb8e589c6d4119cb56b310d4159090f6fb6c1c4cedf8f9a79a044c77"
paper_digest_sidecars: {"citation.bib":{"sha256":"67f54510b4740975ba69f0783b934e31a17500860226c136f69a9dedf66dedc5","url":"/audio-research-portal/client/papers/2026-11-28/conference-09f7977b3ad7a8ec6a63aecb/citation.bib"},"citation.json":{"sha256":"b7b43884c5f81f3192e70b8c469cc908695faae450ac52202ca7eae7201e753a","url":"/audio-research-portal/client/papers/2026-11-28/conference-09f7977b3ad7a8ec6a63aecb/citation.json"},"citation.ris":{"sha256":"d9fad15a8f1d81c2a7084025772bea8448fae19485b201195fbb6d4b917702ff","url":"/audio-research-portal/client/papers/2026-11-28/conference-09f7977b3ad7a8ec6a63aecb/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7d4740c6474134e6c3294ab44b5a09f89a7c195ad4fdf8392a40d6bef5e8ca54","url":"/audio-research-portal/client/papers/2026-11-28/conference-09f7977b3ad7a8ec6a63aecb/rethink-context.json"}}
paper_digest_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.9"
paper_digest_source_kind: conference
paper_digest_conference_id: "impactspeech-2026"
paper_digest_conference_name: "impactspeech-2026"
paper_digest_doi: "10.18653/v1/2026.impactspeech-1.9"
paper_digest_conference_doi: "10.18653/v1/2026.impactspeech-1.9"
paper_digest_conference_record_url: "https://aclanthology.org/2026.impactspeech-1.9/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.impactspeech-1.9.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "698e78a3a3386dc8bc91e55b35ae7fd64f782d9e0a9129abaf2a974e193b0c0a"
paper_digest_api_reader_plan_sha256: "4cb5f5e5c7154f4f9566586a638543b9ea8b7bca339de85fa0895c55bc11185d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0d2deab2106d78a743f7701b1e1bfc5e198c4cb0b7ef448b0e54d3b465af1775"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3843548d43d7e4ca8942d1b75f2301d61b655a35978474d31e6ec8650d7eb2a1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c7cec9de33ce3d7ecbe2e4434a20cf98a399b06e8bd6796c1c3ba4ba24f51bfc"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0d3776a9055a0f0ae360c79f08333c60bf1778ab958f467f128a0a6197216c2d"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"task","id":"task.speaker-verification","label":"说话人验证"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 土耳其语说话人确认的基准、人口偏差与预处理效应

> 英文题目：*TurkSV-Bench: Assessing Demographic Bias and Preprocessing Effects in Speaker Verification*

> 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.9`
> DOI：`10.18653/v1/2026.impactspeech-1.9`
> Track：ImpactSpeech 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.9/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.9.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人验证](/audio-research-portal/papers/?concept=task.speaker-verification)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)；[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究重点**：[公平性](/audio-research-portal/papers/?concept=research_focus.fairness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.0/10** | 创新 5.8/10 | 技术严谨 6.1/10 | 实验充分 7.3/10 | 清晰度 6.6/10 | 影响力 5.1/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Ahmet Berkay Kantarcı：机构信息未能从会议 PDF 纯文本可靠映射
- Abdulkadir Parlak：机构信息未能从会议 PDF 纯文本可靠映射
- Ahmet Karazor：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 说话人验证需判定两段语音是否属于同一人，本文输入为 16 kHz 单声道波形，输出为嵌入向量间余弦相似度经阈值判定的接受或拒绝。主流嵌入架构多在英语或多语数据上训练，用于土耳其语属零样本跨语言迁移，而黏着形态、音位结构、节奏与地区口音差异易使语言失配损伤说话人判别特征。已有土耳其语评测仅覆盖 73 位说话人且人口属性单一，缺乏按性别、年龄与地区口音划分的可追溯基准，预处理多级滤波是增强还是破坏特征亦无统一结论。

**核心思路与方法架构：** 本文不训练新模型，而是以自动化管线构建含 461 位说话人的 TurkSV-Bench 基准，再在统一协议下比较 9 种预训练架构并以最优基线系统评测单级与多级预处理组合。以 YouTube 来源音频为例，处理跳过前 60 秒并限至第 1000 秒区间，仅取音频流转为 16 kHz 单声道 WAV，经语音活动检测（Voice Activity Detection，VAD）去静音、pyannote.audio 3.1 说话人日志与重叠清理后截取 14 秒并各去首尾 1 秒得到 12 秒样本。重复身份经 VoxCeleb 训练的 ECAPA-TDNN 嵌入比对加人工听审剔除，性别与年龄组由 wav2vec 2.0 预测模型标注并经人工核验，每人保留 4 段非重叠录音并附 8 类元数据，评测时全部验证权重冻结，仅在嵌入提取前插入预处理并离线计算余弦分数。其中基线 ResNet34-LM 含约 6.63M 参数，对比的 ERes2Net-Large 与 TitaNet-Large 分别达约 22.46M 与约 23M 参数，该固定集合与试次划分使架构泛化、人口效应与信号处理效应得以分离。

**关键实验与核心代价：** 在包含 461 位说话人、1,844 条录音、2,766 个目标试次与 1,696,480 个冒认试次的全集上，ResNet34-LM 的阈值优化半总错误率（Threshold-Optimized Half Total Error Rate，TO-HTER）为 0.0055、凸包等错误率（ROC Convex Hull Equal Error Rate，ROCCH-EER）为 0.0107 与最小检测代价（minimum Detection Cost Function，minDCF）为 0.0091，均低于 TitaNet-Large 的 0.0812、0.0591 与 0.0100。分组上男性 TO-HTER 为 0.0100、女性为 0.0080，成年组为 0.0076、年长组为 0.0116，伊斯坦布尔组为 0.0057 低于其他口音组的 0.0356，对应 ROCCH-EER 为 0.0112 与 0.0656。但分组最优并非均为该基线，伊斯坦布尔分组 ERes2Net 为 0.0055 略低于基线的 0.0057，年长分组 TitaNet-Large 为 0.0080 低于基线的 0.0116。预加重系数 0.97 将全集 TO-HTER 从 0.0055 变为 0.0051、ROCCH-EER 从 0.0107 变为 0.0096，倒谱均值归一化（Cepstral Mean Normalization，CMN）变为 0.0052 与 0.0098，Blackman 加窗与 CMN 组合维持 0.0051 与 0.0098，Hann 加窗与预加重 0.97 组合为 0.0051 与 0.0096 且误接受为 172 个略少于前者的 173 个，而谱减法与维纳滤波分别恶化至 1.0113 与 2.0258 的 TO-HTER。本文无平均意见分（Mean Opinion Score，MOS）人工听感对比，也不使用 UTMOS、DNSMOS 或 NISQA 等神经代理指标，人工仅用于同一说话人 4 段录音一致性听审，最优预处理改进仅千分之百分点量级且峰值归一化等在全集上与基线完全相同，说明基线已具鲁棒性而激进降噪代价显著。

**适用边界与深读导览：** 上述结论限于同一视频源的近会话条件且伊斯坦布尔口音占比为 83、男性占比为 67，不宜直接外推至跨会话、跨信道或均衡口音部署，原始音频因隐私政策不共享而无法完全重放。阈值与凸包等错误率定义、分群试次与预处理链取舍可查阅下文方法概述和架构与实验结果中的协议说明与表格对照，全部两两与三重组合已测试但正文因篇幅仅报告最优链。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 土耳其语说话人确认的跨语言鸿沟与基准缺口

说话人确认是要判断两段语音是否来自同一位说话人，它只做一对一的接受或拒绝，而不像说话人辨认那样要在多人中指认身份。这类系统已用于电话银行、呼叫中心身份核验、智能助手、移动设备、门禁与司法取证。深度学习兴起后，基于嵌入的方法成为主流，系统把具有说话人区分性的特征压缩为低维表示向量，再用余弦相似度比较，在 VoxCeleb 与 CN-Celeb 等基准上取得很高精度，文本无关场景更依赖声纹本身，对信道与语言变化敏感。打分阈值决定接受与拒绝的边界，阈值上下移动会权衡错误接受与错误拒绝，这是理解后续半总误差率与等误差率的前提。

多数现有模型在英语或多语言数据上训练，直接用于土耳其语构成跨语言迁移。土耳其语在语音结构、黏着形态、语速节奏与地区方言上与训练语言差异明显，语言失配会削弱语言无关表示的有效性。文献中一项土耳其语研究仅用 73 位说话人，其中男性 47 位、女性 26 位，结果显示训练与测试语言不一致会显著降低确认精度，但样本与人口覆盖有限，无法回答偏差与泛化问题。土耳其语的方言多样进一步放大失配，不同地区在元音与韵律上的系统差异可能被模型误读为说话人差异。

土耳其语长期缺少可追溯的大规模基准，既有数据在年龄、性别与地区方言上覆盖不足，难以按子群拆分评估。偏差研究指出，确认误差会随年龄、性别与方言起伏，若评测集以单一地区或性别为主，整体低误差可能掩盖特定人群的高误差。本篇论文因此不提出新模型，而是建立一套从公开视频自动采集、清洗与管理的完整流程，并发布可复用的基准，用于零样本跨语言评测与人口偏差分析。若只报告全集平均而不拆分人口，部署到少数方言人群时可能出现预期外的高拒识或高误接受。

研究分为两阶段，第一阶段在统一协议下对比多种主流预训练结构，找出在土耳其语上区分性最强的基线结构，第二阶段固定该基线，逐一并组合测试归一化、预加重、加窗、降噪与语音活动检测等预处理，目标是降低错误接受率并提升参考与测试音频的相似度，同时观察多级滤波链是增强还是削弱说话人特征。这种先定基线再查预处理的顺序避免了在多个模型上重复调参，也让偏差分析固定在同一打分尺度下进行。后续解读将沿数据构建、模型冻结边界、评测协议与预处理效应的顺序展开。

### 从地区播放列表到 12 秒入库样本的端到端构建流程

基准构建从按地区方言组织的 YouTube 视频与播放列表链接出发，先下载音频流，再做格式统一与剪裁，随后做语音活动检测以去除静音，只保留含话段落。接着用说话人分离确定各说话人时段，清理重叠语音，再按单人与多人分支分别标记身份并存入数据集，最后依次做重复说话人检查、年龄与性别估计以及人工试听核验。整个链条强调可追溯，每条录音保留来源链接、起止时间、人数、性别、年龄组与地区等元数据。去重时用现成说话人嵌入比较高相似身份并人工剔除，年龄性别先由基于 wav2vec 2.0 的模型预测再经人工核对，以减少自动标签噪声。

为一次看清分支与汇合，建议沿下图从左向右追踪箭头，先看下载、成形、检测与分离的主干，再聚焦中间菱形判断框的否与是两条去向，最后看绿色存入节点后 3 段尾部核验的顺序。

[![原论文 Figure 1：Pipeline for building the speaker verification benchmark dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a0973ca4d0e7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a0973ca4d0e7/figure-1.png)

*论文图 1：从地区播放列表到人工核验的端到端构建流程，含分支判断与去重环节（原论文 Figure 1）。*

下图从左到右依次为地区方言的 YouTube 视频与播放列表链接、下载视频音频流、格式与剪裁、语音活动检测、说话人分离，随后进入浅蓝色菱形判断框，框内文字为说话人数量是否大于 1 。选择否的上支标记为单说话人后直接汇入绿色圆柱体存入数据集，选择是的下支先检测并去除重叠片段，再将每位说话人标记为不同个体后同样汇入该圆柱体。尾部从该节点向右依次为重复说话人检查、年龄与性别估计、人工核验，全部箭头单向连接，灰色矩形为处理步骤，分支汇合清晰，没有回路。

信号规格统一为 16 kHz 单声道 WAV 格式，为避开片头音乐、广告与字幕段，跳过每个视频前 60 秒，并将处理区间截断至第 1,000 秒。系统先截取 14 秒片段，再从两端各去除 1 秒以消除说话人切换与截断词的影响，最终得到 12 秒样本。以教学例子说明， 1 秒输入在 16 kHz 下对应 16,000 个采样点，单声道进入语音活动检测后仅保留语音帧，分离模块再按时间切分身份，重叠段直接丢弃。原文未披露各模块内部张量形状与多数嵌入维度，仅 TitaNet-Large 明确为 192 维，其余维度缺失如实保留。每位说话人的 4 条样本取自同一视频的不同非重叠时段，可组成多个真实配对以更可靠估计类内差异，但同源条件也带来乐观偏差。

### 人口构成、模型家族与冻结评测的对比起点

#### 总量与不均衡分布

为理解偏差结论的稳健性，需先看清基准的总量与拆分。下表列出总量与按性别、年龄、地区方言的说话人数、录音条数与占比，理解伊斯坦布尔高度集中与小方言样本稀少是后续判断整体误差能否代表各人群的前提，也是选择基线时必须考虑的公平性背景。

| Category | Speakers | Recordings | % |
| --- | --- | --- | --- |
| Total | 461 | 1,844 | 100 |
| Gender |  |  |  |
| Male | 310 | 1,240 | 67 |
| Female | 151 | 604 | 33 |
| Age |  |  |  |
| Adult (< 50) | 293 | 1,172 | 63.6 |
| Elder (≥50) | 168 | 672 | 36.4 |
| Regional Dialect |  |  |  |
| Istanbul | 381 | 1,524 | 83 |
| Black Sea | 24 | 96 | 5 |
| Central Anatolia | 21 | 84 | 4 |
| Eastern | 19 | 76 | 4 |
| Thrace | 8 | 32 | 2 |
| Aegean | 8 | 32 | 2 |

全集共 461 位说话人 1,844 条录音，每人固定 4 条。性别上男性 310 位 1,240 条占 67% ，女性 151 位 604 条占 33% 。年龄上成年 293 位 1,172 条占 63.6% ，年长 168 位 672 条占 36.4% 。地区上伊斯坦布尔 381 位 1,524 条占 83% ，黑海 24 位 96 条占 5% ，中部安纳托利亚 21 位 84 条占 4% ，东部 19 位 76 条占 4% ，色雷斯 8 位 32 条占 2% ，爱琴海 8 位 32 条占 2% 。伊斯坦布尔高度集中，而色雷斯与爱琴海各仅 8 位，后续子群误差估计必然更不稳定。

#### 冻结模型的对比起点

对比的 9 个模型全部为文献主流结构，评测时冻结不更新。WeSpeaker ResNet34-LM 以对数梅尔滤波器组为输入，用二维卷积学习时频局部模式，约 6,630,000 参数，在 VoxCeleb2 开发集训练并做大间隔微调。ECAPA-TDNN 约 20,800,000 参数，用通道注意力与多尺度聚合改进向量结构，经注意力统计池化输出固定维度嵌入。CAM++ 约 7,180,000 参数，基于密集连接时延网络，前端二维卷积加语境掩蔽抑制噪声。ERes2Net 系列通过注意力融合多阶段特征，其中 ERes2NetV2 约 17,800,000 参数，ERes2Net-Large 约 22,460,000 参数。TitaNet-Large 约 23,000,000 参数，结合一维深度可分离卷积与激励压缩层，输出 192 维向量。另有结合自监督前端的 ESPnet ECAPA-WavLM 与 64 头多头因子注意力池化的 WavLM-MHFA ，后者约 96,200,000 参数。原文未披露多数嵌入维度与帧率细节。这种冻结评测直接检验跨语言迁移，不在土耳其语上做任何训练，因此性能差距可归因于结构与原训练策略，而非土耳其语调参技巧。

评测构造 1,699,246 对试验，其中真实配对 2,766 对，冒充配对 1,696,480 对。每对用余弦相似度打分，分数大于或等于阈值 θ 则接受为同一人，否则拒绝。错误接受率与错误拒绝率分别指冒充对被误接受与真实对被误拒绝的占比。半总误差率为两者算术平均，阈值优化半总误差率取使两者绝对差最小的经验阈值。凸包等误差率取接收者操作曲线凸包与对角线交点，用于离散阈值无精确相等时的低误差估计。最小检测代价为加权应用代价的最小值，零漏拒下错误接受率指无真实对被拒的最严阈值处的接受率，另报告经验计数与介于可达点之间的期望计数。期望计数可能出现小数，因为凸包等误差率工作点可能落在两个经验阈值之间，需按插值比例折算错误数，而非实际观察到的整数计数。

### 十余种预处理与组合滤波链的信号直觉

基线固定后测试的预处理覆盖能量、频谱与帧边界 3 类。峰值归一化以绝对最大幅度为基准缩放到目标范围，均方根归一化按平均能量调整以抵抗突发峰值，幅度缩放仅线性乘以常数，响度归一化按人耳频率敏感度校准至 -23 LUFS ，直流偏移去除将均值置零以消除低频伪影。预加重用一阶高通平衡语音频谱倾斜，对比系数 0.95 、 0.97 与 0.99 ，以突出高频共振峰。倒谱均值归一化在短时傅里叶域减去对数幅度均值后重合成波形，以抑制静态信道失真。加窗对比汉明窗、汉宁窗与布莱克曼窗，帧长 25 ms 步移 10 ms 后经叠加相加还原。谱减从低能量段估计噪声谱并相减，维纳滤波按最小均方误差自适应提升信噪比。单方法之外还穷举两两与三重组合，但受篇幅所限仅报告最优链。

直觉上，归一化只调音量而不改形态，对余弦打分影响很小。预加重与倒谱均值归一化分别补偿高频衰减与信道偏置，理论上能让说话人特征更清晰。加窗主要缓解帧边界不连续与频谱泄漏，重建后波形变化温和。相反，谱减与维纳滤波属于强噪声抑制，若噪声估计不准或原始录音本已干净，会连同细微声纹一起抹除，反而抬高误差。原文的成败分化正好对应温和校准与激进滤波的差别，温和方法保持或微降误差，激进方法在各子群一致恶化。

所有预处理均在嵌入提取前对波形操作，模型本身保持冻结，梯度不更新。加窗与倒谱均值归一化等需经分帧与频域变换再返回时域，其参数如帧长与步移已披露，但滤波器具体实现细节与计算开销原文未披露。由于仅最优组合可见，无法判断次优链的分布，解读组合收益时需留有余地，不把个别链的微小下降外推为普遍规律。

### 基线整体最优、方言差距与温和预处理的有限收益

评测在 1,844 条录音上做全量两两比对，共 1,699,246 对试验，指标越小越好。所有模型均为离线零样本评测，未在土耳其语上训练或调参，信号均为 12 秒干净片段，不含人工听测打分，也无神经代理分数，因此结论只反映机器判别误差，不代表主观听感。参数量从约 6.63 百万到约 96.2 百万不等，码率与流式延迟等公平性因素原文未披露，比较时只能把结构与训练策略作为主要变量。试验中真实配对仅 2,766 对，冒充配对高达 1,696,480 对，极不平衡的构成使错误接受率的分母很大，微小阈值移动即影响计数。

判定以成对嵌入向量间余弦相似度为分数，设判定阈值为 \( \theta \) ，分数大于或等于阈值即判为同一说话人，否则判为不同人。冒充配对误判为同一人记为错误接受，真实配对误判为不同人记为错误拒绝，两类错误率分别以冒充与真实试验总数为分母按阈值统计。半总误差率为两类错误率的算术平均，经验阈值优化工作点取使 \( |FAR(\theta)-FRR(\theta)| \) 最小的阈值。凸包等误差率取受试者工作特征凸包与对角线的交点，最小检测代价取各阈值下应用加权代价的最小值，凸包工作点的期望错误计数可为非整数。

#### 整体基线与人口拆分

下表精简呈现基线在全集上的 3 个核心误差，用于锚定后续子群与预处理讨论的量级。更全面的 9 模型横向对比见原文完整 Table 3（本精简表未列出），性别、年龄与方言拆分见原文完整 Table 4（本精简表未列出），此处先固定最强基线的数值位置，避免跨表混用极值结论。所有指标越小越好，阈值优化半总误差率与凸包等误差率以百分比报告，最小检测代价为无量纲加权代价。

| 模型 | TO-HTER | ROCCH-EER | minDCF |
| --- | --- | --- | --- |
| ResNet34-LM | 0.0055% | 0.0107% | 0.0091 |

原文报告 ResNet34-LM 为整体最强，其阈值优化半总误差率为 0.0055% ，凸包等误差率为 0.0107% ，最小检测代价为 0.0091 。原文同时指出，尽管该结构参数量远小于部分竞争者，跨语言泛化反而更好，提示容量本身不决定土耳其语确认精度，结构设计与训练策略可能更关键。本精简表仅展示该基线一行，不对原文完整表格中其余 8 个模型的逐列排序作最优断言，具体差距以原文完整 Table 3（本精简表未列出）为准。

按子群拆分，基线在性别与年龄上差异较小。男性阈值优化半总误差率为 0.0100% ，凸包等误差率为 0.0187% ，女性对应为 0.0080% 与 0.0152% 。成年为 0.0076% 与 0.0148% ，年长为 0.0116% 与 0.0217% 。方言差距更大，伊斯坦布尔为 0.0057% 与 0.0112% ，其他方言合计为 0.0356% 与 0.0656% ，后者约为前者的数倍。上述拆分均来自原文完整 Table 4（本精简表未列出），且其他模型在方言上的分化更剧烈，说明伊斯坦布尔主导的整体低误差不能代表小方言条件。

#### 预处理效应与激进滤波的代价

固定基线后，温和预处理的整体收益很窄。系数 0.97 的预加重为 0.0051% 与 0.0096% ，倒谱均值归一化为 0.0052% 与 0.0098% ，布莱克曼窗加倒谱均值归一化等两两与三重组合也维持在相近低误差区间。多数归一化与加窗方法与基线完全一致，计数保持 186 个错误接受与 0 个错误拒绝。相反，谱减升至 1.0113% 与 0.9782% ，维纳滤波升至 2.0258% 与 2.0219% ，高出两个数量级以上。细节见原文完整 Table 5（本精简表未列出），结论是无需激进滤波即可保持结构稳健性。

子群层面，预处理效果随指标与人群而变。男性基线 0.0100% 经系数 0.99 预加重变为 0.0078% ，女性基线 0.0080% 经系数 0.97 预加重变为 0.0077% 。成年基线 0.0076% 与 0.0148% 经倒谱均值归一化或系数 0.97 预加重变为 0.0075% 与 0.0142% ，年长基线 0.0116% 经倒谱均值归一化或系数 0.99 预加重变为 0.0082% 。其他方言基线 0.0356% 经倒谱均值归一化变为 0.0297% ，经布莱克曼窗加倒谱均值归一化等组合变为 0.0287% 。谱减与维纳滤波在各子群一致恶化。上述来自原文完整 Table 6（本精简表未列出）。原文未报告方差或置信区间，也无人工听测，色雷斯与爱琴海各仅 8 位说话人，估计必然不稳，且至少存在归一化无效等负结果。

评测分两个阶段展开，先比较各模型以确定最具判别力的结构作为后续基线，再固定该基线检验各类预处理，整体结果与按性别年龄方言拆分的结果分别报告。所有两两与三重串联组合均已测试，受篇幅与可读性所限仅报告最成功的链条，其余组合未详细列出，避免把未列出误读为未测试。各子群改善幅度均在相应工作点上度量，而工作点随预处理配置而变，因此跨配置比较需注意阈值位置不同，不能只看单一误差数字。

### 不均衡分布、同源乐观与复现选型建议

基准的最大前提是不均衡。伊斯坦布尔占 83% ，男性占 67% ，成年占 63.6% ，黑海、中部安纳托利亚、东部各约 4% 至 5% ，色雷斯与爱琴海各仅 2% 。小方言每个子群仅 8 位说话人 32 条录音，误差率分母很小，一两个错误接受就会大幅摆动。此外，每位说话人的参考与测试均取自同一视频的不同非重叠时段，信道与场景高度一致，相比真实跨会话条件偏乐观，整体 0.0055% 量级的极低误差不宜直接外推到跨设备部署。年龄与性别标签虽经人工核对，但地区标签来自播放列表归属，可能存在噪声。

复现需区分三件事。代码与权重原文未披露下载链接，本次未确认可用公开资源，不能视为已开源。数据方面，原始音频因个人信息政策不能共享，仅提供采集方法与元数据字段，研究者需用 Silero 语音活动检测、pyannote.audio 3.1 分离流程、自带 ECAPA-TDNN 去重与基于 wav2vec 2.0 的年龄性别估计重新搭建，并经人工试听核验。地区标签来自播放列表归属，可能存在噪声，年龄性别自动预测也需人工校正。附录证明与补充消融原文未披露，复现时应以论文正文的试验规模与指标定义为准。

选型上，若做土耳其语零样本确认，可优先以 ResNet34-LM 为基线，其在约 6,630,000 参数下已取得整体最低误差，不必迷信更大容量。预处理优先试系数 0.97 附近的预加重或倒谱均值归一化，以及布莱克曼窗加倒谱均值归一化等温和组合，期望仅为千分之几百分点的微降，且需按性别、年龄与方言分别验证。避免谱减与维纳滤波等强抑制，其在全集与各子群一致抬高误差。部署前应补充跨会话、跨设备与更均衡方言的评测，并补人工听测以核对机器误差与听感是否一致。

未来工作可扩大色雷斯、爱琴海等小方言样本，平衡性别与年龄，并引入更多声学条件，以获得更稳健的偏差估计。同时应公开可运行的采集与评测脚本，使阈值选择、期望计数的非整数特性与最小检测代价的权重含义可被独立重复。只有在分布更均衡且跨会话验证通过后，温和预处理的微小收益才值得固化为默认配置，否则保持基线原样是更稳妥的选择。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 单声道 WAV ，最终每条 12 秒，每位说话人 4 条非重叠样本，中间截取 14 秒后去头尾各 1 秒，跳过视频前 60 秒并截断至第 1,000 秒，加窗帧长 25 ms 步移 10 ms ，响度目标 -23 LUFS ，原文未披露 RTF 与前瞻延迟
- **训练与评测数据**：训练沿用 VoxCeleb1 与 VoxCeleb2 等公开语音，评测为新建 TurkSV-Bench ，含 461 位说话人 1,844 条录音，覆盖男女性别、成年与年长两档年龄及伊斯坦布尔等 6 类地区方言，评测试验 1,699,246 对
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量与训练耗时，本研究仅做冻结预训练模型评测，未在土耳其语上训练
- **核心超参数与配置**：优化器与学习率原文未披露，预加重系数 0.95 、 0.97 与 0.99 ，响度目标 -23 LUFS ，加窗帧长 25 ms 步移 10 ms ，余弦阈值决策，TitaNet-Large 输出 192 维嵌入
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐与显存，报告参数量为 ResNet34-LM 约 6.63 百万至 WavLM-MHFA 约 96.2 百万，评测为全量两两比对
- **开源产物与协议状态**：原文未披露代码与权重下载链接，本次未确认可用公开资源，原始音频因个人信息政策不能共享，仅说明方法与元数据字段
- **附录与补充材料要点**：附录信息原文未披露，局限为地区与人口分布不均衡及同源参考与测试条件偏乐观，伦理声明仅限研究用途并已匿名化

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.0/10** | 创新 5.8/10 | 技术严谨 6.1/10 | 实验充分 7.3/10 | 清晰度 6.6/10 | 影响力 5.1/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.5/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.9`
- 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.9/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.9.pdf)
- DOI：`10.18653/v1/2026.impactspeech-1.9`
- Track：ImpactSpeech 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以Silero VAD、pyannote.audio 3.1日志与重叠清理加ECAPA去重与全部1844条人工听审构建461人12秒基准并附8类元数据，质检链条完整可追溯。

- 核心优势：在统一余弦协议下以2766个目标与1696480个冒认共1699246试次比较9种冻结架构，确认约6.63M参数ResNet34-LM全集最优并保留谱减法与维纳滤波一致退化负结果。

- 主要短板：其他口音合计仅80人共320条而伊斯坦布尔达381人，最优改进仅对应十余个误接受变化且全程未报告显著性与置信区间，分组估计噪声大。

- 主要短板：原始音频因个人数据政策明确不共享且无代码仓库与可验证官方URL，基准产物无法直接获取复用。

- 主要短板：引言将VAD列为预处理分析目标之一，但评测表格中VAD仅作为管线质检步骤未作为变量对比，存在目标与验证脱节。

---

[← 返回 impactspeech-2026 论文汇总](/audio-research-portal/posts/conference-impactspeech-2026/)
