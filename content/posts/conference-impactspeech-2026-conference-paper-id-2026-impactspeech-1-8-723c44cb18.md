---
title: "Temporal Taxation Compounds Under Post-Training Compression of Whisper Models"
date: 2026-11-27
draft: false
description: "论文追问训练后权重压缩是否重新分配人口组误差负担，以时间税差值与最大最小比在 Whisper 家族三个基准上证明 50% Wanda 剪枝让 Black/AA 对 Asian 差值增长 111% 而蒸馏在 27 组中的 21 组收窄差距，成立前提是英语朗读语音、单实现单检查点与离线整句评测。"
tags: ["知识蒸馏", "模型剪枝", "模型量化", "公平性", "语音识别"]
categories: ["impactspeech-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "压缩后部署如何重新分配语音识别的人口组负担"
paper_digest_original_title: "Temporal Taxation Compounds Under Post-Training Compression of Whisper Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.8"
paper_digest_workbench_source_sha256: "c44382781fe6efe8941ce8a593869cece691de5a8a609280c7b1979993521939"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.impactspeech-1.8/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.impactspeech-1.8.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文追问训练后权重压缩是否重新分配人口组误差负担，以时间税差值与最大最小比在 Whisper 家族三个基准上证明 50% Wanda 剪枝让 Black/AA 对 Asian 差值增长 111% 而蒸馏在 27 组中的 21 组收窄差距，成立前提是英语朗读语音、单实现单检查点与离线整句评测。"
paper_digest_reader_sections: [{"heading":"全精度审计与压缩后部署之间的公平性断层","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"时间税差值与最大最小比如何度量部署负担的相对扩张","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"压缩配方、人口轴与统计口径的具体实施清单","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"50% Wanda 剪枝让最差与最优组的时间税差值增长 111%","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"4 比特量化复合随容量收敛而排序保持稳定","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"循环阈值敏感性与蒸馏收窄的对照诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"英语朗读、单实现与单检查点的边界与复现前提","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Srishti Ginjala"},{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Eric Fosler-Lussier"},{"affiliations":["Air Force Research Laboratory, USA"],"name":"Christopher W. Myers"},{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Srinivasan Parthasarathy"}]
paper_digest_abstract_sha256: "7b52ce08ca557665f93b6600a789a0c797663738fb720fb77fdb2ec7a63cae4b"
paper_digest_sidecars: {"citation.bib":{"sha256":"4594dd0493896b00c4c486a73692d7596d208c4070d41e49524c7884a8900b3a","url":"/audio-research-portal/client/papers/2026-11-27/conference-723c44cb18ebf4b8b65be275/citation.bib"},"citation.json":{"sha256":"cce392b3a7138d4ffe87e1f84c69c52b487cfdefede4db084db581a7b3046a0c","url":"/audio-research-portal/client/papers/2026-11-27/conference-723c44cb18ebf4b8b65be275/citation.json"},"citation.ris":{"sha256":"7e42c111e08a95b467689ab4c280cfcfd5164326235e31a1c62c5313bc35dc66","url":"/audio-research-portal/client/papers/2026-11-27/conference-723c44cb18ebf4b8b65be275/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1c8a4a2c557fbbcfcc5460ab5d31fb0ef83f22eac3583d8e302506e24e2424d6","url":"/audio-research-portal/client/papers/2026-11-27/conference-723c44cb18ebf4b8b65be275/rethink-context.json"}}
paper_digest_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.8"
paper_digest_source_kind: conference
paper_digest_conference_id: "impactspeech-2026"
paper_digest_conference_name: "impactspeech-2026"
paper_digest_doi: "10.18653/v1/2026.impactspeech-1.8"
paper_digest_conference_doi: "10.18653/v1/2026.impactspeech-1.8"
paper_digest_conference_record_url: "https://aclanthology.org/2026.impactspeech-1.8/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.impactspeech-1.8.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "f1fc0e70584e9aaa989c79fe09d32716782dcd2a89c64d67231f2a08cdba077f"
paper_digest_api_reader_plan_sha256: "4cd8369fa3aaa036667e69ef6045c2c4adfeee1535b56c93c72a1730a1f6827a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e4aa7120bcc70faa7615e0c9c76b3f2476e176594411f87cd1b13dd62f90f725"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2dffcf52332c840f5d0fa5b99bc94f4fcf27e2fb0f96d61fe8fd8778bc0567d5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bb852e5b1e25b1abf065682e97e548be934992868a2d613e247b7ce141e4c994"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "51f3b0c103afb87ff418575fd370bf93bd7fc31fcc2636b866fe53ab47e60fd2"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 压缩后部署如何重新分配语音识别的人口组负担

> 英文题目：*Temporal Taxation Compounds Under Post-Training Compression of Whisper Models*

> 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.8`
> DOI：`10.18653/v1/2026.impactspeech-1.8`
> Track：ImpactSpeech 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.8/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.8.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型剪枝](/audio-research-portal/papers/?concept=method.pruning)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型量化](/audio-research-portal/papers/?concept=method.quantization)
- **研究重点**：[公平性](/audio-research-portal/papers/?concept=research_focus.fairness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 6.3/10 | 技术严谨 7.9/10 | 实验充分 8.2/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 3.0/10 | 可复现 6.7/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Srishti Ginjala：The Ohio State University, Columbus, OH, USA
- Eric Fosler-Lussier：The Ohio State University, Columbus, OH, USA
- Christopher W. Myers：Air Force Research Laboratory, USA
- Srinivasan Parthasarathy：The Ohio State University, Columbus, OH, USA

## 📌 核心摘要

**问题与瓶颈：** 自动语音识别需将连续语音音频映射为文字转写，公平性审计多在全精度下报告人口学组间差距，而实际部署的往往是经量化、剪枝与蒸馏压缩权重的模型。论文将转写错误换算为人工校对劳动，把最差与最优服务组之间的额外负担称为时间税差值，压缩若只改变权重而不触碰音频信号仍可能重分负担。既有语音压缩公平性工作多只覆盖 8 比特且缺乏英语方言与口音轴，而视觉与多语言文本压缩已提示剪枝与量化会优先损伤长尾分布，单快照全精度审计因此可能遗漏部署时的负担放大。

**核心思路与方法架构：** 本文核心直觉是把时间税操作化为可报告的时间单位，并同时考察非结构化剪枝、次 8 比特量化与蒸馏的负担再分配。沿单条语音样本看，输入语音经 Whisper 编码器解码器生成假设文本，默认采用贪婪搜索并以波束宽度为 5 作对照，逐句计算词错率（WER ↓）后按人口学组加权平均，再经 Tg 换算为每分钟语音的纠错秒数。评估覆盖 39M 至 1.55B 参数的 5 个 Whisper 主干与 3 对 Distil-Whisper 师生模型，对比 FP16 参考与 INT8、INT4 NF4、INT4 HQQ 及 50% Wanda 剪枝，校准仅用与所有测试集无交叠的 LibriSpeech 数据，压缩全程为训练后权重扰动而不触碰音频信号或特征表示。

**关键实验与核心代价：** 在 Fair-Speech、Common Voice 25 与 AfriSpeech-200 上的评测显示，以 FP16 的 Whisper-large-v3 为基线，50% Wanda 剪枝使 Fair-Speech 上 Black/AA 与 Asian 组的时间税差值在 C = 5 s/edit 时从 30.14 秒变为 63.73 秒，相对增幅为 111.4%，且该相对值不随 C 变化。同组对照下按词错率计的组级损伤高度不对称，Black/AA 组 WER 较 FP16 基线上升 7.89 个百分点，而 Asian 组 WER 仅上升 0.43 个百分点，前者增量远高于后者。波束宽度为 5 的解码将该时间税增幅降至从 27.95 秒变为 51.91 秒，对应增幅仍为 86%，其中 Black/AA 组 WER 增量仍达 5.63 个百分点，并未消除分布形态。边缘容量下 INT4 HQQ 使 AfriSpeech 上 Kanuri、Hausa 与 Yoruba 的灾难环路率分别从 4.55% 变为 30.30%、从 1.53% 变为 9.18% 与从 1.23% 变为 6.33%，约为 5 至 7 倍，而蒸馏在 27 个师生精度数据集组合中的 21 个上收窄了人口学差距。剪枝复合指数随容量从 whisper-tiny 的 -0.56 单调升至 whisper-large-v3 的 +0.58，INT8 整体温和，仅在 427 个组增量中的 7 个上显著，约 150 A100 GPU 小时的评测构成主要计算开销。

**适用边界与深读导览：** 结论成立前提是 Whisper 家族内同权重对比、英语朗读语音、数据无关 4 比特方案与 50% 非结构化剪枝，未覆盖自发语音、声调或黏着语、量化感知训练与人口学感知重训练。信噪比控制后人口学差异依然显著，而大模型环路复合减弱与蒸馏收窄的机制仍待验证，部署需复核自身口音分布。欲深究时间税线性不变性、最大最小比与复合指数定义、环路阈值敏感性与信噪比控制细节，可查阅下方方法概述和实验结果对应部分。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全精度审计与压缩后部署之间的公平性断层

监管与既有研究中的公平性审计多在全精度模型上报告人口组之间的 WER（词错误率）差距，例如商业系统 2 倍的种族差距，以及早期字幕中性别与种族的交互作用。实际发往生产的系统往往不是被审计的同一权重，而是经过量化、剪枝或蒸馏的降阶版本。原文以 Whisper-large-v3 为例，指出该模型每月被下载超过 4,000,000 次，并衍生出大量 INT8 或 INT4 量化、幅度剪枝与蒸馏检查点。单次全精度快照因此无法回答压缩后误差负担如何被重新分配。

在转写、字幕与听写流程中，识别错误通常交由人工校对，人口组之间的 WER（词错误率）差距会转化为校对劳动的时间差距，服务较差的说话人需要为同样 1 分钟语音付出更多修复时间。原文沿用 Choi 和 Choi 在 2025 年提出的时间税概念，把每组错误率换算成每分钟语音所需的校对秒数，使抽象百分比变为可部署的时间单位。由于换算是关于单错误代价的线性缩放，差值相对扩张比例与代价假设无关，只留下绝对锚点依赖假设。

视觉与多语种文本压缩理论曾预测剪枝与量化会不成比例地损伤输入分布的长尾，而文本大模型的量化偏见效应又被报告为复杂且难以预测。语音人口组是否构成这类长尾，在方向上并无把握的先验。原文 3 个发现偏离了简单的长尾外推：剪枝复合指数随模型容量单调上升，从 whisper-tiny 的 -0.56 到 whisper-large-v3 的 +0.58；蒸馏在 27 组评估中的 21 组收窄差距；同为 4 比特的 NF4 与 HQQ 把误差再分配给不同群体，单靠位宽无法选定方向。

为隔离压缩效应与结构、分词器及训练数据的混杂，主分析限定在 Whisper 家族内的 8 个模型，覆盖 5 个主干与 3 个蒸馏学生，参数从 39,000,000 至 1,550,000,000，并排除本身已是层剪枝压缩的 Turbo 变体。评测限定英语朗读语音，跨 Fair-Speech、Common Voice 25 与 AfriSpeech-200 3 个基准，另以 IBM Granite-4.0-1b-speech 附录探测检验 INT8 结论是否走出 Whisper 家族，但不检验剪枝与 INT4 的跨家族推广。

### 时间税差值与最大最小比如何度量部署负担的相对扩张

原文把研究对象明确限定为训练后权重压缩，即改变量化精度、删除权重或用教师伪标签训练学生，而不压缩音频信号或其特征表示。与最近基线相比，实质增量在于首次系统评测 50% Wanda 剪枝的公平性影响，把 8 比特分析扩展到 4 比特以下的英语方言与口音轴，并把时间税从概念提案操作化为可报告的审计口径。信号规格方面，原文未披露采样率、帧长、步长、码率与通道维度，张量形状与特征维度同样未披露，以下追踪只按处理顺序与统计口径展开，不虚构维度。

以 1 秒语音为贯穿示意，以下为教学示意，不引入新数值：整句音频输入 Whisper 编码器与解码器得到假设文本；逐条计算 WER（词错误率）、删除率、插入率，并按 5 元重复数与假设参考长度比判定是否触发循环标志；同一模型与配置单元内按人口组聚合为语句加权平均 WER，并以 200 次自举给出 95% 置信区间；再跨组取最差与最优之比得到 MMR（最大最小比），以及压缩相对全精度的复合指数；最后乘以每分钟词数与单错误代价得到每组时间税，并取最差减最优的差值及其相对变化。

核心指标为 \(T_g = WER_g \cdot C \cdot wpm\)，其中 \(WER_g\) 为组平均词错误率，\(C\) 为假设的单错误校对秒数，\(wpm\) 为每分钟词数。该式是线性缩放，不改变组间排序，只把百分比换成秒每分钟；当取压缩与全精度差值的相对变化时，\(C\) 与 \(wpm\) 在分子分母中约去，因而 111% 这类相对扩张与取 2 秒、5 秒或 8 秒无关，只有 30.14 秒或 63.73 秒这类绝对锚点随 \(C\) 成比例伸缩。循环代价随假设长度非线性增长，故另立循环率轴单独追踪，不并入线性时间税。

全部压缩严格限定训练后，不做量化感知训练或人口感知重训练；量化与剪枝在同一检查点内以全精度权重作组内对照，蒸馏则按对应教师与学生检查点配对评估。校准仅用 LibriSpeech train-clean-100 中 128 条与所有公平性测试集无交叠的语句。推理除消融外一律采用贪心解码并固定随机种子与确定性内核，同硬件两次重跑 100 条可得比特一致假设；波束搜索消融取宽度为 5，约 2 倍推理开销，用于检验解码能否买回公平性。

#### 模型家族与数据划分

主分析覆盖 8 个 Whisper 家族模型，分为 5 款主干与 3 对教师学生配对。5 款主干从极小容量连续延伸至 1.55B 参数，跨度覆盖 tiny 至 large-v3，3 对学生分别为 small、medium 与 large-v3 对应层级。原文排除 large-v3-Turbo，理由是该检查点本身已是 large-v3 的层剪枝压缩，若纳入会与蒸馏臂混杂。单家族设计是有意隔离，把架构、分词器与训练数据的差异固定下来，使压缩前后的组间变化只归因于权重处理。附录另设一次跨家族探针，仅检验全精度与 8 比特量化的间隙结构，不检验剪枝与 4 比特主张。

公平性结论由 3 个基准承载，LibriSpeech test-clean 仅作总体词错误率参照。Fair-Speech 提供 26,471 条受控朗读语音助手提示词，覆盖 593 名说话人，人口轴包括族裔、年龄、性别、地域与是否为母语者。Common Voice 25 取英语测试集 16,398 条，按样本量不低于 50 条筛选出 7 个口音组，美国组 1,343 条、印度组 527 条、英格兰组 437 条、加拿大组 116 条、澳大利亚组 100 条、苏格兰组 53 条与非洲组 53 条。AfriSpeech-200 提供 6,318 条测试语句，覆盖 44 个样本量达标的细粒度非洲口音。剪枝校准所用 128 条全部取自 LibriSpeech train-clean-100，且与上述测试集无交叠。

#### 压缩配方与统计口径

量化扫描对每个模型取 4 档精度，以 FP16 为部署现实参照，另设 INT8、INT4 NF4 与 INT4 HQQ，其中两种 4 比特配方均为免数据方案，使同比特宽度下仍能隔离优化配方的差异。HQQ 适配编码器解码器结构时做了实现修正，并在留出集上以全精度核验。GPTQ 与 AWQ 未纳入的原因是参照库按架构提供校准类，尚不包含编码器解码器语音模型，属实现可得性限制。剪枝采用 Wanda 50% 非结构化稀疏，作用范围覆盖编码器、解码器与解码器交叉注意中的线性层，SparseGPT 因同样缺少对应模型类而未纳入。蒸馏在每档精度下重新配对评估，使教师与学生的精度条件对齐。

逐条指标先算词错误率、删除率与插入率，再按大于 5 次的 5 元重复或假设与参考长度比大于 3 判定循环标志，两组阈值在全量扫描前固定。每个模型、配置与数据集单元内按人口组取语句加权平均词错误率，并以 200 次自举给出 95% 置信区间，单元公平性再以最差与最优之比与相对全精度的复合指数概括。组间差异检验采用逐条配对置换检验，每单元 2,000 次双侧置换并在单元内按人口组做错误发现率调整，排序稳定性以 Kendall τ 概括。信噪比代理检验先逐条计算 SNR（信噪比），再以最小二乘回归词错误率对信噪比的残差重测人口学 F 统计量，用于排除可测录音质量的混杂。

实现边界同样在方法层面交代清楚，Wanda 2:4 结构化剪枝曾在小容量上以 32 条校准语句试跑 20 条测试并出现 194% 词错误率，故主扫描只保留非结构化 50% 稀疏，在 AfriSpeech 上仅覆盖极小、基础与中等三档。跨家族探针只做 FP16 与 INT8 对比，总体词错误率从 10.72% 变为 11.02%，循环率保持在 0.45%，最大最小比几乎不变，用于说明 8 比特温和性在另一架构下依然成立，但不外推至剪枝与 4 比特结论。

### 压缩配方、人口轴与统计口径的具体实施清单

量化扫描覆盖每个模型的 4 种精度：作为部署现实参照的 FP16、INT8、INT4 NF4 与 INT4 HQQ，后两者均为免数据配方，因而在相同位宽与相同校准数据状态下隔离优化配方轴。HQQ 适配编码器解码器所需的实现修正已在留出集上用 FP16 验证。GPTQ 与 AWQ 未纳入并非算法原因，而是参考库按结构暴露校准类，缺少编码器解码器语音模型支持，torchao 的模块级配置路径原文未尝试，附录记录了具体阻断版本。

剪枝采用 Wanda 50% 非结构化稀疏，覆盖编码器、解码器与解码器交叉注意中的线性层，重要性按幅度乘以激活判定。SparseGPT 因同样缺少语音模型结构类而未评测，Wanda 2:4 结构化曾在 whisper-small 上尝试，以 32 条校准在 20 条测试上得到 194% 的 WER（词错误率），因与窄注意力头维度不兼容而放弃。蒸馏直接评估已发布的 Distil-Whisper 学生与对应教师在每种精度下的配对，不重新训练学生。

3 个基准承载公平性结论，LibriSpeech test-clean 仅作总体 WER（词错误率）参照。Fair-Speech 提供 26,471 条朗读语音助手指令，覆盖 593 位说话人，含族裔、年龄、性别、地域与英语母语状态等轴。Common Voice 25 取英语测试集 16,398 段，仅保留样本数不小于 50 条的 7 个口音。AfriSpeech-200 提供 6,318 条测试语句，覆盖 44 个样本数不小于 50 条的非洲口音。Granite 探测仅在 Fair-Speech 上比较 FP16 与 INT8，不涉及剪枝与 INT4。

循环标志在全量扫描前固定：假设含超过 5 个 5 元重复，或假设长度超过参考长度 3 倍即判为循环，阈值来自 100 条预观察中非病态假设至多 5 个重复与至多 2.7 倍长度比。统计采用逐条配对置换检验，每单元 2,000 次置换并在人口组间作 BH（错误发现率）校正，显著阈为 q 小于 0.05；排序稳定性以 Kendall 的 τ 度量；信噪比控制对每条 Fair-Speech 语句计算代理信噪比并作最小二乘回归，再对残差重测人口组效应。混响与非线性失真未被代理，残余混杂无法排除。

### 50% Wanda 剪枝让最差与最优组的时间税差值增长 111%

#### 相对扩张最大的十个单元

下图按相对扩张排序展示前 10 个模型与配置单元，左侧为每分钟语音所需校对秒数的绝对差值，蓝色为 FP16 差值，赭色为压缩后差值，横向延伸线对应单错误代价从 2 秒到 8 秒的区间；右侧为差值相对变化，与代价假设无关。纵轴自上而下按扩张幅度排列，首行即 headline 单元，可对照左右两栏的颜色与百分比读出绝对与相对两层信息。

[![原论文 Figure 1：Temporal-taxation differential under pruning and quantization, between the worst- and best-served…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-1.png)

*论文图 1：前十压缩单元最差与最优组时间税差值的绝对与相对扩张对照（原论文 Figure 1）。*

headline 单元为 whisper-large-v3 加 50% Wanda 剪枝在 Fair-Speech 上的 Black/AA 对 Asian 差值，在 C 为 5 秒每编辑假设下从 30.14 秒每分钟升至 63.73 秒每分钟，相对增幅为 111.4%。在 C 为 2 秒时为 12.06 秒升至 25.49 秒，在 C 为 8 秒时为 48.23 秒升至 101.97 秒，相对值完全一致。不对称集中在弱势组：Black/AA 的 WER（词错误率）上升 7.89 个百分点，样本数为 7,782 条，而 Asian 仅上升 0.43 个百分点，样本数为 3,853 条。前十单元中有 9 个来自 Wanda，量化仅 tiny 加 INT4 HQQ 一席。

#### 损伤的组间分布与质量控制

下图展示逐组 WER（词错误率）损伤，即压缩减去 FP16 的百分点差值，赭色为配对置换 BH（错误发现率）显著单元，灰色为未达阈值。左栏为 Fair-Speech 族裔在 large-v3 加 Wanda 下的分布，右栏为 AfriSpeech 前 25 个增量最大口音在 tiny 加 INT4 HQQ 下的分布。阅读时先看横轴百分点刻度与星号标记，再比较 Black/AA 长条与其他各组的量级差异，以及右栏除 akan 外全部显著的整体抬升。

[![原论文 Figure 2：Per-group WER damage under pruning (a) and quantization (b) concentrates on already-marginalized…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-2.png)

*论文图 2：剪枝与量化下逐组词错误率增量集中在已处弱势群体的分布（原论文 Figure 2）。*

左栏中 Black/AA 以 7.89 个百分点孤立在最右，中东裔 1.50 个百分点与太平洋岛民 1.47 个百分点次之且均显著，Hispanic 与 White 未达显著阈值，删除率分解显示 Black/AA 增量的 61% 来自删除而 Asian 仅 34%。信噪比控制后 34 个 Fair-Speech 单元的人口组效应全部保留显著，且调整后 MMR（最大最小比）平均增大 15.0%，中位数为 13.9%。波束宽度为 5 时复合指数从 +0.584 回落至 +0.468，headline 增幅从 111% 降至 86%，Black/AA 仍以 5.63 个百分点居首。

### 4 比特量化复合随容量收敛而排序保持稳定

#### 容量与配方决定量化方向

下图以模型参数对数横轴展示复合指数相对 FP16 的偏移，每列为一个数据集，每条折线为一种方法，实线为 Whisper 主干，虚线为蒸馏学生。纵轴零线以上为差距扩大，以下为差距收窄。阅读时先对照图例区分 INT8、INT4 NF4、INT4 HQQ 与 Wanda 50%，再沿横轴从 tiny 向 large-v3 追踪紫色 Wanda 曲线与黄色系低比特曲线的走向差异，注意 AfriSpeech 的 Wanda 仅评测至 medium 容量。

[![原论文 Figure 3：Quantization and pruning compounding is method-specific and scales with capacity.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-3.png)

*论文图 3：四种压缩方法的复合指数随模型容量的对数变化趋势（原论文 Figure 3）。*

低比特量化的 WER（词错误率）复合呈现容量有界特征。在 Common Voice 25 上 tiny 加 INT4 HQQ 的 7 个口音增量全部显著，从 Canadian 的 5.45 个百分点到 African 的 13.19 个百分点；large-v3 加同配方仅 England 口音显著为 0.73 个百分点，MMR（最大最小比）偏移为 +0.216。4 个中等容量量化单元反而收窄，复合指数在 -0.13 至 -0.06 之间，例如 base 加 HQQ 时 Canadian 从 9.6% 升至 12.3%，而 African 从 24.9% 升至 27.8%。Fair-Speech 的 Wanda 曲线从 tiny 的 -0.56 经 -0.34、-0.02 与 +0.35 单调至 large-v3 的 +0.58，方向与低比特量化相反。

#### 排序稳定性与波束对照

下表报告各数据集与压缩精度下按 MMR（最大最小比）排序的模型名次在 FP16 与压缩后之间的一致性，用于检验全精度选型能否保留相对顺序。行覆盖 3 个数据集与 4 种压缩条件，列为数据集、精度与 Kendall 的 τ 取值，τ 越接近 1 表示排序越稳定。

| Dataset | Precision | Kendall τ |
| --- | --- | --- |
| AfriSpeech | INT8 | 1.000 |
| AfriSpeech | INT4 NF4 | 1.000 |
| AfriSpeech | INT4 HQQ | 1.000 |
| Common Voice 25 | INT8 | 1.000 |
| Common Voice 25 | INT4 NF4 | 1.000 |
| Common Voice 25 | INT4 HQQ | 1.000 |
| Common Voice 25 | Wanda 50% | 1.000 |
| Fair-Speech | INT8 | 1.000 |
| Fair-Speech | INT4 NF4 | 1.000 |
| Fair-Speech | INT4 HQQ | 0.929 |
| Fair-Speech | Wanda 50% | 1.000 |

上表 11 个单元中有 10 个的 τ 为 1.000，仅 Fair-Speech 加 INT4 HQQ 为 0.929，说明相对排序几乎完全保留，但绝对差距并不保留。波束消融进一步显示，8 个量化单元中有 6 个的波束 MMR（最大最小比）与贪心差异不足 0.2，4 对组合中有 3 对的 NF4 复合指数持平或略降，仅 large-v3 在 Common Voice 25 上从贪心的 +0.138 放大至波束的 +0.296。8 个单元的循环率在波束下全部上升，波束不是量化复合的部署期修复手段。

### 循环阈值敏感性与蒸馏收窄的对照诊断

#### 蒸馏多数收窄但中容量族裔例外

下图按教师学生对分栏展示蒸馏的间隙扩大指数，即学生 MMR（最大最小比）除以教师再减 1，横轴为 4 种精度，颜色为数据集，零线以下为收窄，以上为扩大。阅读时先比较左、中、右三栏的整体朝向，再聚焦中栏 Fair-Speech 在各精度下均为正向的赭色柱，以及右栏大容量学生在多数精度下三色均为负向的收窄，左栏小容量则以 Common Voice 25 的收窄为主。

[![原论文 Figure 5：Distillation narrows the demographic gap on accent axes but widens the Fair-Speech ethnicity gap…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/a14e0dda0800/figure-5.png)

*论文图 5：三对教师学生蒸馏间隙扩大指数按精度与数据集的收窄对照（原论文 Figure 5）。*

蒸馏在部署相关容量上收窄口音轴差距：large-v3 学生在 AfriSpeech 与 Common Voice 25 的 7 个单元中有 6 个降低 MMR（最大最小比），唯一例外在 Common Voice 25 的 FP16 处为 +0.003，属噪声范围。全矩阵 27 个单元中有 21 个收窄、4 个系统性扩大与 2 个近零，扩大集中在 medium 至 distil-medium.en 在 Fair-Speech 族裔的各精度 +0.011 至 +0.151。总体 WER（词错误率）在 27 单元全部上升，学生相对教师从 +0.07% 至 +31.4%，收窄是相对均等而非绝对改善。下表检验循环定义是否驱动边缘结论，行列含义见下段完整对照。

| (rep5, len-ratio) | FP16→HQQ | BH-sig | CI |
| --- | --- | --- | --- |
| Loose (4, 2.5) | 2.07% →6.79% | 6/62 | +0.73 |
| Baseline (5, 3.0) | 1.50% →5.78% | 7/62 | +0.68 |
| Strict (6, 3.5) | 1.42% →5.46% | 8/62 | +0.56 |

该表对照 3 种判定宽严程度下同一边缘单元的总体循环率与显著口音计数，宽松设定下基线与压缩端绝对值均偏高，严格设定下两者同步下移，但压缩端始终数倍于基线，显著计数在 6 个至 8 个之间波动，复合指数保持正向，说明阈值移动只改变绝对水位，不改变压缩放大的方向与排序，为后文按口音展开的倍数讨论提供稳定性依据。

#### 循环定义与边缘容量的灾难性抬升

上表在 whisper-tiny 加 INT4 HQQ 的 AfriSpeech 单元下扰动循环判定阈值，宽松为 4 次重复与 2.5 倍长度，基线为 5 次与 3.0 倍，严格为 6 次与 3.5 倍，报告总体循环率、显著口音数与平滑循环 MMR（最大最小比）复合指数。总体循环率随阈值收紧下降，但 FP16 到 HQQ 的对照与口音排序保持稳定。下表进一步给出 5 个西非 headline 口音在 3 种阈值下的循环率倍数，星号为 BH（错误发现率）显著，可对照上表的总体稳定性读出个体稳健性。

| Accent (n) | Loose | Baseline | Strict |
| --- | --- | --- | --- |
| Kanuri (66) | 4.00×⋆ | 6.67×⋆ | 6.33×⋆ |
| Yoruba (648) | 3.50×⋆ | 5.12×⋆ | 5.00×⋆ |
| Hausa (196) | 4.75×⋆ | 6.00×⋆ | 5.00×⋆ |
| Swahili (521) | 2.71× | 3.40× | 4.25×⋆ |
| Igbo (355) | 2.20× | 2.83× | 2.83× |

上表显示 Kanuri 从 4.00 倍至 6.67 倍与 6.33 倍，Yoruba 从 3.50 倍至 5.12 倍与 5.00 倍，Hausa 从 4.75 倍至 6.00 倍与 5.00 倍，三者在 3 种阈值下全部显著，倍数稳定在 3.5 倍至 6.7 倍区间。headline 绝对值上 Kanuri 样本数为 66 条，从 4.55% 升至 30.30% 为 6.67 倍，Hausa 样本数为 196 条，从 1.53% 升至 9.18% 为 6.0 倍，Yoruba 样本数为 648 条，从 1.23% 升至 6.33% 为 5.12 倍。INT8 在三数据集 427 个组增量中仅 7 个显著，Granite 探测的 INT8 复合指数为 +0.004，循环率持平于 0.45%，未检验剪枝与 INT4 的跨家族推广。

### 英语朗读、单实现与单检查点的边界与复现前提

主结论限定英语朗读语音，覆盖语音助手指令、朗读句子与朗读临床文本，未评测自发语音、音调语言或黏着语。原文指出自发与朗读之间 WER（词错误率）差距在非裔美国人英语与 Black/AA 群体最大，而这些群体恰是压缩后负担加重最重的群体，因而 Fair-Speech 上的 111% 增幅可能是自发场景下限而非上限。朗读评测偏向低估而非高估组间差距，跨语言推广仍属未知，声调与黏着形态下的复合方向不能由现有数据推定。

音频质量来源仍是部分混杂。SNR（信噪比）代理控制显示组间差距不是可测录音质量所致，该检验覆盖 34 个模型与精度组合，调整后最大最小比反而平均增大 15.0%，中位数增大 13.9%。但该代理不捕获混响与非线性失真，感知质量对照未运行，无控制录音环境数据则残余混杂无法排除。每种压缩仅经单一参考实现检验，GPTQ、AWQ 与 SparseGPT 因缺少编码器解码器结构类被排除，Wanda 2:4 结构化在小型模型上因灾难性输出被放弃，剪枝仅覆盖 50% 非结构化稀疏，AfriSpeech 的剪枝仅评测微型、小型与中型 3 个骨干。

全部结果测自单次发布的检查点，组内 FP16 对照虽抵消训练随机性，但复合幅度能否在独立训练的检查点间复现仍未测量，组公平性指标在其他模态已知随训练轮次波动较大。评审提议的四项实验均未完成：经模块级配置路径的 AWQ 变体、核心单元的感知质量对照、与 8 位精度对照的浮点 8 位变体，以及 8 位精度的缩放参数搜索变体。结论应理解为仅覆盖 NF4、HQQ、默认缩放参数的 8 位精度与 50% 非结构化 Wanda，结构化剪枝与感知训练等路径留待后续工作。

复现前提上，代码、配置与结果表原文称将在发表时发布，当前无可验证的公开链接，应区分代码是否开源、权重是否提供下载与系统是否可直接运行三件事。跨家族探测仅验证 8 位精度的温和性与基线差距结构，基线最大最小比在两个家族接近，计算开销约为 150 个 A100 GPU 小时，人口分类沿用来源语料的说话人自报，无新数据采集。原文未提供试听页，无需虚构听感，工程上应在部署精度与剪枝条件下重做审计，而非停用边缘模型。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率与通道维度；评测为离线整句解码；循环判定依据 5 元重复数与假设参考长度比，与声学前端参数无关
- **训练与评测数据**：Fair-Speech 26,471 条 593 位说话人；Common Voice 25 英语测试 16,398 段 7 个口音；AfriSpeech-200 6,318 条 44 个口音；LibriSpeech train-clean-100 中 128 条作剪枝校准并与测试集无交叠
- **算力与训练耗时**：约 150 个 A100 GPU 小时用于推理评测；同硬件两次重跑 100 条得到比特一致假设；原始训练硬件与耗时原文未披露
- **核心超参数与配置**：Wanda 50% 非结构化稀疏；FP16 对照、INT8、INT4 NF4、INT4 HQQ；波束宽度为 5；配对置换 2,000 次、BH 校正、自举 200 次、显著阈 q 小于 0.05
- **推理速度与部署开销**：波束宽度为 5 约两倍推理开销仍残留 86% 增长；INT4 为边缘部署现实精度；延迟、RTF 实时系数与显存占用原文未披露
- **开源产物与协议状态**：原文称代码、配置与结果表将在发表时发布；本次未发现可验证的公开链接，不视为已开源；权重下载与衍生检查点分发状态原文未给出可核验地址
- **附录与补充材料要点**：附录含排序稳定性、删除率分解、时间税敏感性、信噪比控制、循环阈值敏感性、被排除方法阻断细节与 Granite 探测；另有 4 项评审提议实验未完成

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 6.3/10 | 技术严谨 7.9/10 | 实验充分 8.2/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 3.0/10 | 可复现 6.7/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：应用研究
- 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.8`
- 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.8/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.8.pdf)
- DOI：`10.18653/v1/2026.impactspeech-1.8`
- Track：ImpactSpeech 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：在三个公开基准上以FP16同检查点为对照报告111.4%时间税增幅与5至7倍环路率，均经配对置换检验与BH校正支撑。

- 核心优势：采用B=2000配对置换加BH校正、B=200自助区间、阈值扰动与信噪比回归控制，且校准集与所有测试集无交叠。

- 主要短板：承诺发表时释放代码配置与结果表但当前未提供任何可核验仓库链接，无新权重与新数据集产物。

- 主要短板：结论限于Whisper单家族英语朗读语音且压缩仅单一参考实现，未覆盖自发语音与声调黏着语及量化感知训练。

- 主要短板：评测仅报告约150 A100 GPU小时开销而无RTF延迟吞吐显存功耗等端到端部署实测，工程证据不足。

---

[← 返回 impactspeech-2026 论文汇总](/audio-research-portal/posts/conference-impactspeech-2026/)
