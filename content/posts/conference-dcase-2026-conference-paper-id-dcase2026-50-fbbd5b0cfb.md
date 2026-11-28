---
title: "F1AUDIO: A Formula-1 Engine Audio Dataset"
date: 2026-11-27
draft: false
description: "F1Audio 把分开发布的车载引擎音频与车辆遥测对齐到 50 ms 网格并发布约 266 小时的 PaSST 特征，用线性探针与多层感知机证明声音可以恢复转速与车速，而挡位与油门仍困难且 5 秒以上上下文收益趋平。"
tags: ["基准测试", "数据集", "数据集构建", "声学系统参数估计", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从引擎轰鸣还原车速与挡位：F1Audio 数据集解读"
paper_digest_original_title: "F1AUDIO: A Formula-1 Engine Audio Dataset"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-50"
paper_digest_workbench_source_sha256: "3a19c33a6ff43b94bc0990205e45a985927446761995aafe9fbdb7a271ae01e8"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Madhava_50.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "声学系统参数估计"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "F1Audio 把分开发布的车载引擎音频与车辆遥测对齐到 50 ms 网格并发布约 266 小时的 PaSST 特征，用线性探针与多层感知机证明声音可以恢复转速与车速，而挡位与油门仍困难且 5 秒以上上下文收益趋平。"
paper_digest_reader_sections: [{"heading":"赛车引擎声为何难以直接换算成车速与挡位","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从转播流到特征库的总体流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"50 毫秒网格与 1,295 维嵌入的生成细节","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"探针与感知机如何吃进特征并被评价","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"拉长上下文后哪些目标真正变好","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"只发特征与按赛道留出的结论边界","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Govinda Madhava"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Alexander Lerch"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"8083d208c73f001ab9a81501303df71b257287f46c54f1b84a24390521f0bdd5","url":"/audio-research-portal/client/papers/2026-11-27/conference-fbbd5b0cfbde29485d1ed355/citation.bib"},"citation.json":{"sha256":"071695d65f2a7373a8a312f71264141a53d42f6a6bbfe858176b646986cfd844","url":"/audio-research-portal/client/papers/2026-11-27/conference-fbbd5b0cfbde29485d1ed355/citation.json"},"citation.ris":{"sha256":"fa521a84d079bb4d866967132c848148157e61b5100a3ecf012c69fabd0e2930","url":"/audio-research-portal/client/papers/2026-11-27/conference-fbbd5b0cfbde29485d1ed355/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9c486e135b0681c0b46193ab12ca23e568fad004864201920ba455261e829a60","url":"/audio-research-portal/client/papers/2026-11-27/conference-fbbd5b0cfbde29485d1ed355/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-50"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Madhava_50.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "52c872a7883e3cd447ff4d815861b0119b5553d7c89a5638c3f1f9382a372cc8"
paper_digest_api_reader_plan_sha256: "2b980fa99033edaed814337b705e3f623d01dbed6a21afd8d94bceb7fd51b040"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e9329bd972b18f133f78053e7b8d30be7948493c456a5c8f01c9afc5467e50f0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7f95d4e999ce21ecc32b3af998c01b457d70a2a41b61f0b01980580b4303939d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4333068cf5f5937bf0895b1240aa9fb9a4e0ed079008bdd0bf1cab4769b3201e"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "7ee63010341dd50692b206ff47e8ae3917073018cacf545ba7d7de43f7204e14"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.acoustic-parameter-estimation","label":"声学系统参数估计"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从引擎轰鸣还原车速与挡位：F1Audio 数据集解读

> 英文题目：*F1AUDIO: A Formula-1 Engine Audio Dataset*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-50`
> Track：P2-3




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Madhava_50.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声学系统参数估计](/audio-research-portal/papers/?concept=task.acoustic-parameter-estimation)；[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.2/10 | 技术严谨 6.2/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 8.0/10 | 可复现 6.3/10 | 工程/实践 6.5/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Govinda Madhava：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Lerch：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** F1 赛车引擎声蕴含转速、挡位与油门等状态，经验丰富的工程师可凭排气声尾音辨认换挡与补油，但官方遥测与电视转播音频分属不同通道播发，时间轴并不对齐，难以直接配对研究。既有工作多集中于谐波跟踪估计转速、多普勒频移估计车速或故障诊断，缺少对速度、转速、油门与挡位多维遥测的连续恢复，也无公开数据集同步提供高分辨率音频导出特征与车辆遥测。这一缺失阻碍了档案影像叠加估计遥测、缺遥测条件下的赛事分析以及模拟与游戏用程序化音频生成等应用。

**核心思路与方法架构：** 与最接近的零散声学估计相比，本文增量在于系统构建大规模同步数据集并验证可学习性，保留公开广播音频与 FastF1 遥测来源，新增手动对齐、归一化与稠密插值管线。以 1 s 单声道车载音频为例，原始 48 kHz 16 位录音按发车灯灭时刻裁剪，重采样至 32 kHz 并按整场全局增益归一化至 0.1 均方根 (Root Mean Square, RMS) 目标以保留约 20 dB 裕量。再切分为无重叠 9 s 块送入冻结的补丁舍弃快速频谱图变换器 (Patchout Fast Spectrogram Transformer, PaSST)，每 50 ms 输出 1 个 1295 维嵌入，即每秒 20 帧。同期约 4 Hz 至 8 Hz 非等间隔遥测经线性插值处理连续量与最近邻赋值处理离散量，对齐至同一 50 ms 网格，边界缺测以前后有效值填充，形成特征、清单与汇总三类文件，建模仅使用已发布特征而不回放原始音频，属离线处理，直接缓解通道异构与采样不对齐这一根因。

**关键实验与核心代价：** 在表 3 对应的留出未见测试赛道上，以相同 1 s 分析窗与 0.5 s 跳步平均 20 帧嵌入为输入，比较最强可比基线线性探针 LP (1 s) 与多层感知机 MLP (1 s)。挡位宏平均 F1 分数 (macro-averaged F1 score, Macro F1，越高越好 ↑) 从 0.34 变为 0.39，高于基线，车队 Macro F1 从 0.83 变为 0.92，高于基线。同设置下转速决定系数 (coefficient of determination, R2，越高越好 ↑) 从 0.60 变为 0.68，速度 R2 从 0.71 变为 0.76，油门 R2 从 0.40 变为 0.52，均高于基线。将上下文从 1 s 扩至 5 s 后，MLP (5 s) 的挡位 Macro F1 为 0.52，高于 MLP (1 s) 的 0.39，车队 Macro F1 为 0.96，高于 MLP (1 s) 的 0.92，转速 R2 为 0.78，速度 R2 为 0.85，油门 R2 为 0.69。扩至 9 s 时挡位 Macro F1 为 0.54，高于 5 s 的 0.52，车队 Macro F1 为 0.95，略低于 5 s 的 0.96，表明 5 s 至 9 s 趋于平稳而挡位与油门获益最大。代价在于挡位即使在 9 s 上下文下 Macro F1 仅为 0.54，油门受机械惯性与双峰分布拖累仍难精确，均为客观回归与分类指标回落。

**适用边界与深读导览：** 结论成立前提是 2024 赛季 10 场大奖赛的转播混合音频与 FastF1 遥测，发布物为特征而非原始波形，手动对齐与整场归一化引入约 0.02% 削波并保留车队电台串音，随机帧划分验证与仅 2 条未见赛道测试限制了跨赛季与跨规则泛化。挡位因相同转速区间对应多挡位而存在运动学歧义，刹车样本约 1:4 失衡，窄受众赛事场景与非商用禁止演绎许可亦约束复用。摘要与结论中约 300 h 表述与表 2 的 266 h 11 m 30 s 不一致，应以表 2 为准。欲深究对齐插值与 PaSST 分块细节可查阅下文方法概述对应管线，上下文消融曲线与误差讨论可查阅下文实验结果对应表格与分析。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/GovindaMadhava/F1Audio> — 链接可访问（HTTP 200）

- 数据相关资源：<https://doi.org/10.5281/zenodo.21186137> → <https://zenodo.org/records/21186137> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 赛车引擎声为何难以直接换算成车速与挡位

1 级方程式赛车的引擎声并不是单调噪声，而是随转速、油门开度与挡位连续变化的排气音色。转速拉高会抬升基频与谐波结构，松油与补油会在包络上留下可听起伏，有经验的工程师甚至能靠耳朵判断降挡时的转速补偿。然而现代转播中，高频遥测走官方数据接口，车载声音走广播流，两路信号分开发布且时间基准不一致，研究者很难把声音与车辆状态直接对应起来。

此前围绕机械声音的研究已经覆盖转速跟踪、车速估计与故障诊断等方向。早期工作用振动传感器配合 Vold-Kalman 阶次跟踪分离快速变化的机械频率，后来被迁移到纯麦克风信号并结合卡尔曼平滑，路边场景还尝试用多普勒频移估计车速。工业与电机方向常用梅尔倒谱系数、短时傅里叶变换与梅尔频谱表征运行状态，并叠加深度网络做分类。公开数据方面，环境声数据集与工业异响库都缺少与遥测严格同步的赛车引擎样本。

本文定义的问题是从车载单声道引擎音频恢复车辆状态。输入是按车手与分站录制的连续音频，输出是同一时刻的发动机转速、车速、油门百分比、挡位与车队编号。原始遥测来自 FastF1 接口的非等间隔采样，轮询频率约在 4 Hz 至 8 Hz 之间，转速范围约 3,000 至 13,000，车速范围为 0 至 350 km h-1，挡位包含空挡与 1 至 8 挡，油门为 0 至 100%。任务要求把两路信号统一到 50 ms 网格后再做回归与分类。

难点首先来自物理与统计两方面。油门动作经过机械惯性才改变声音，声学基频不会瞬间跳变，单帧很难判断当前开度。挡位更模糊，不同挡位可以在不同车速下共享完全重叠的转速区间，而引擎音色主要由转速决定，孤立音频帧天然缺乏解耦依据。数据分布也加剧难度，油门集中在 0% 与 100% 两端，制动与非制动帧比例约 1 比 4，高转速与高挡位占比较大，模型容易偏向多数状态。

### 从转播流到特征库的总体流程

数据集的原始材料来自两条独立链路。音频一侧从 F1 TV 官方订阅流经系统内录取得，工具为 OBS Studio，每个车手每场比赛存为一个单声道文件，采样率为 48 kHz，量化字长为 16 位。遥测一侧通过 FastF1 库拉取官方广播数据，以逗号分隔文件原样保存，内含比赛时钟、圈速、转速、车速、挡位、油门与制动状态。两路信号在发车灯灭时刻做人工裁剪对齐，以此建立公共零点。人工抽查显示同一车队不同赛车之间的混音电平没有明显差异，为后续统一响度归一化提供了前提。

下表展示了原始遥测的典型形态，可以看到非等间隔采样与挡位切换时的数值跳变。相邻两行的时间差并不固定，转速与车速在制动点附近快速下降，油门与制动状态同步翻转。这种原始形态无法直接与等间隔音频特征对应，因此后续需要插值到统一网格。表格完整呈现原文示例的连续采样，时间从 56.000 秒延续到 57.638 秒。

| Time | Lap | RPM | Speed | nGear | Throttle | Brake |
| --- | --- | --- | --- | --- | --- | --- |
| 56.000 | 1.0 | 10681.9 | 258.84 | 6 | 100.00 | FALSE |
| 56.419 | 1.0 | 10967.0 | 262.34 | 6 | 100.00 | FALSE |
| 56.930 | 1.0 | 9445.7 | 251.54 | 5 | 89.78 | TRUE |
| 57.290 | 1.0 | 8987.4 | 202.02 | 5 | 34.64 | TRUE |
| 57.638 | 1.0 | 6574.0 | 147.97 | 5 | 0.00 | TRUE |

从表中可以读出一次典型的减速过程。转速从 10,681.9 降至 6,574.0，车速从 258.84 降至 147.97，挡位由 6 降至 5，油门由 100.00% 降至 0.00%，制动由关闭变为开启。时间戳间隔并不相等，直观说明轮询抖动与广播网络波动的存在。这也解释了为何连续量要用线性插值而离散量要用最近邻赋值，否则等间隔特征将对不上真实车况。该示例也说明标签本身带有量化与延迟，建模时必须容忍这种观测起伏。

整个处理被严格分成数据流程与实验流程两段。由于版权限制不允许分发原始转播音频，公开发布的只有预提取特征与对齐后遥测。数据流程负责重采样、响度归一化、清洗与特征提取，实验流程只在已发布特征上训练探针与感知机。数据集按车队、车手与赛道命名组织，分为特征、清单与汇总 3 类文件，总时长名义约 300 小时，实际统计见后续小节。

### 50 毫秒网格与 1,295 维嵌入的生成细节

音频预处理先把每场约 90 分钟的录音重采样到 32 kHz，以满足 PaSST 架构的输入要求。随后按整场比赛计算全局增益，把均方根响度归一化到 0.1，预留约 20 dB 裕量给引擎瞬态。由于只能发布特征而不能发布波形，这一步归一化必须在入库前完成。原文报告仅约 0.02% 的采样点超过削波阈值，且几乎都出现在短促的车队通话脉冲中。

清洗环节直接丢弃开场圈即退赛的不完整场次，晚退赛则保留到机械故障点之前，确保入库的都是有效引擎声。遥测对齐把 4 Hz 至 8 Hz 的非等间隔原始记录插值到 50 ms 均匀网格，连续量做线性插值，挡位与制动做最近邻赋值。若原始流在音频时间轴两端缺失首尾，则重复首尾有效值补齐。最终的高分辨率遥测与特征共享同一时间网格，并附带原始日志以供核查。

PaSST 作为固定的 AudioSet 预训练变换器使用，每 50 ms 产生一个 1,295 维嵌入，即每秒 20 个嵌入。因位置编码长度受限，每场长录音被切成连续无重叠的 9 秒块分别编码再拼接。全库共 197 个音频文件，覆盖 10 条赛道与 10 支车队，总时长为 266 h 11 m 30 s，对应 1,914,020 个特征帧。训练与测试按赛道划分，时长分别为 210 h 17 m 31 s 与 55 h 53 m 59 s，对应 1,511,598 与 402,422 帧。

为了理解数据偏态对建模的影响，需要先看全库遥测的分布形态。下图用 5 个子图分别展示车速、转速、油门、挡位与制动，纵轴统一为帧数且以千为单位。横轴覆盖了从低速到高速、从低转速到高转速的完整工作区间，油门与制动的柱形高度差异尤其直观，为后续加权损失与类别平衡提供了依据。各子图颜色不同但纵轴口径一致，便于横向比较多数状态与少数状态的悬殊。

[![原论文 Figure 1：Telemetry distributions in the F1Audio dataset: broad operating ranges for speek (a) and RPM (b),…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/7d93263e8492/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/7d93263e8492/figure-1.png)

*论文图 1：全库遥测分布直方图：车速宽平，转速偏高，油门双峰，挡位偏高挡，制动类别不均衡（原论文 Figure 1）。*

从像素上看，车速呈宽而相对平坦的分布，覆盖低速到高速的完整区间。转速明显偏向高转速端，在 10,000 以上形成高峰，体现赛车刻意维持峰值功率区间的策略。油门呈典型双峰，大量帧堆积在 0% 与 100% 附近，中间开度稀疏。挡位偏向高挡，1 挡极少，3 挡至 8 挡占主体。制动柱显示关闭远高于开启，与约 1 比 4 的比例描述一致。以 1 秒样本为例，32 kHz 单声道对应 32,000 个采样点，PaSST 每 50 ms 输出一个 1,295 维向量，1 秒对应 20 个向量，实验中再按窗平均成单个向量。

### 探针与感知机如何吃进特征并被评价

所有基准都在已发布的 PaSST 特征窗上训练，划分在全部实验中固定。迈阿密与巴林两条赛道整体留作未见测试集，其余 8 条赛道内的特征帧按 80% 与 20% 随机分为训练与验证集，具体帧级归属写入静态清单以保证可复现。默认输入把 20 个连续的 50 ms 嵌入按 1 秒分析窗平均成一个向量，滑动步长为 0.5 秒。输入与连续目标在训练前做零均值单位方差标准化，缩放器只在训练数据上拟合，避免测试信息泄漏。连续标签已由线性插值落到 50 ms 均匀网格，挡位等离散量按最近邻对齐，首尾缺测段用首末有效值补齐。

回归与分类采用各自适配的损失与指标。转速、车速与油门优化均方误差，其中油门按 20 个等宽分箱的频率倒数加权，以对抗 0% 与 100% 处双峰堆积带来的偏态。挡位优化不加权交叉熵，车队分类按样本频率倒数加平衡权重，以补偿各车队样本量不均。评价时连续量用决定系数 R2，离散量用宏平均 F1，方向均为越大越好，前者反映解释方差比例，后者对各类别同等计分。制动状态虽在分布图中展示，但未列入此次基准的预测目标。

线性探针用于刻画任务下界与可分性。每个连续目标单独训练一个岭回归模型，挡位与车队则用多项逻辑回归，两者都使用同样的标准化 1 秒窗向量。这种设计刻意保持输入与目标处理一致，以便与非线性模型的增益直接对比。车队分类得分还能侧面反映不同动力单元声学指纹的可分程度，得分越高说明车队间音色差异越稳定。

多层感知机为转速、车速、油门、挡位与车队各训练一个参数独立的模型，5 个模型结构相同，各自包含 256 个单元与 128 个单元的两层全连接，激活为整流线性单元，丢弃概率为 0.2，后接单节点回归头或多类分类头。优化器为 Adam，学习率为 \(10^{-3}\)，并用验证损失做提前停止。默认同样使用孤立 1 秒窗，消融中把相邻嵌入按上下文长度 \(C\) 拼成扁平向量，边界不足补零，\(C\) 取 1 秒、2 秒、3 秒、4 秒、5 秒、7 秒与 9 秒，以考察连续声学轨迹对消除瞬时歧义的作用。

### 拉长上下文后哪些目标真正变好

评价统一在两条未见赛道上进行，训练与验证来自另外 8 条赛道，输入与损失在探针与感知机之间保持一致。测试集为迈阿密与巴林，验证集划分固定，所有模型使用相同标准化与损失以保证可比性。下表汇总了线性探针与不同上下文感知机在转速、车速、油门回归与挡位、车队分类上的得分，回归为 R2，分类为宏平均 F1，数值越大表示从声音恢复遥测的效果越好。

| Model | RPM | Speed | Throttle | Gear | Team |
| --- | --- | --- | --- | --- | --- |
|  | (R2) | (R2) | (R2) | (Macro F1) | (Macro F1) |
| LP (1 s) | 0.60 | 0.71 | 0.40 | 0.34 | 0.83 |
| MLP (1 s) | 0.68 | 0.76 | 0.52 | 0.39 | 0.92 |
| MLP (5 s) | 0.78 | 0.85 | 0.69 | 0.52 | 0.96 |
| MLP (9 s) | 0.79 | 0.86 | 0.69 | 0.54 | 0.95 |

表中线性探针在 1 秒窗下转速为 0.60，车速为 0.71，油门为 0.40，挡位为 0.34，车队为 0.83。换成同窗感知机后五项分别变为 0.68、0.76、0.52、0.39 与 0.92，均有提升，其中油门在视觉上改善最为明显。上下文拉到 5 秒时五项为 0.78、0.85、0.69、0.52 与 0.96，9 秒时为 0.79、0.86、0.69、0.54 与 0.95。按列比较，转速、车速与挡位以 9 秒最高，油门在 5 秒与 9 秒并列为 0.69，车队以 5 秒的 0.96 最高。

为了看清增益是持续爬升还是提前饱和，需要观察得分随上下文长度变化的曲线。下图横轴为上下文窗口秒数，纵轴为得分，5 条折线分别对应车速、转速、油门、挡位与车队。重点看 1 秒到 5 秒的斜率以及 5 秒到 9 秒是否走平，同时注意挡位线始终垫底而车队线始终居顶的位置关系，这与表格中的排序完全呼应。

[![原论文 Figure 2：Effect of context window length on MLP performance (R2 for continuous targets, Macro F1 for Gear…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/7d93263e8492/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/7d93263e8492/figure-2.png)

*论文图 2：感知机得分随上下文窗口变化曲线：1 秒至 5 秒爬升最快，5 秒至 9 秒趋于饱和（原论文 Figure 2）。*

从像素上看，5 条曲线都随窗口拉长上升后趋平，1 秒至 3 秒爬升最陡，5 秒至 9 秒基本走平，7 秒处略有起伏但未改变排序。车队线全程最高，从约 0.92 起步并在 5 秒附近达到峰值。车速线居其次，转速线居中，油门线从约 0.52 起步追至约 0.69，挡位线全程最低，从约 0.39 升至 0.54。原文把挡位难做归因于运动学模糊与时间模糊，同一转速可对应不同挡位与车速，单帧音色主要由转速决定。油门难做则归因于机械惯性，声音基频不会随踏板瞬间跳变。评价全部依赖 R2 与宏平均 F1，未安排人工听测，也未报告方差或置信区间，9 秒相对 5 秒的额外输入维度只换来微弱变化。

### 只发特征与按赛道留出的结论边界

数据集只发布预提取特征而不发布波形，后续研究无法更换前端或检验归一化以外的做法。PaSST 以固定特征器使用，其 AudioSet 预训练偏好会原样带入所有基准。单声道转播混音里除了引擎声还包含机械事件与车队通话，虽然削波统计显示仅约 0.02% 采样超过阈值且几乎都出现在短促通话脉冲中，但混响、转播电平与赛道环境的影响并未单独量化。音频在特征提取前统一重采样至 32 kHz 并按每场全局增益归一化至均方根 0.1，约留出 20 dB 裕量，该前处理已固化在发布特征中。

划分上测试集按赛道整体留出，迈阿密与巴林未参与训练，跨赛道泛化检验较为严格。但验证集来自训练赛道内的帧级随机划分，同一场比赛的前后帧可能分居训练与验证两侧，对超参数选择偏乐观。数据只覆盖 2024 赛季 10 场大奖赛，按站汇总后每站约 21 小时至 32 小时，中位值约 28 小时，按车队汇总后每队约 21 小时至 28.5 小时，中位值约 24 小时，结论外推到其他赛季规则与动力单元时需要重新验证。不完整场次整场剔除，晚退赛只保留故障前有效段。

基准只覆盖转速、车速、油门、挡位与车队，未把制动状态纳入预测，油门按 20 个等宽分箱加权与车队按频率倒数加权等细节依赖代码复现。论文给出 Zenodo 数据集链接与代码仓库链接，清单文件固定了帧级划分，重采样、50 ms 网格与 1,295 维嵌入规格明确，具备复跑条件。附录未披露额外证明，延迟、吞吐与显存等部署开销也未报告，选型时应把 5 秒上下文视为精度与输入维度之间的折中点，9 秒仅在挡位与转速要求极限时考虑。较长上下文把转速爬升与车速变化连成轨迹，5 秒附近趋于平稳，油门惯性与挡位转速重叠仍是主要误差来源。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原始车载音频为单声道，48 kHz 采样，16 位字长，重采样到 32 kHz 后提取特征，PaSST 每 50 ms 输出 1,295 维向量，每秒 20 帧，分析窗默认 1 秒跳 0.5 秒，消融上下文为 1 至 9 秒，遥测统一到 50 ms 网格，原文未披露延迟与 RTF
- **训练与评测数据**：2024 赛季 10 场大奖赛约 266 h 11 m 30 s，对应 1,914,020 帧，197 个音频文件，训练与测试时长 210 h 17 m 31 s 与 55 h 53 m 59 s，对应 1,511,598 与 402,422 帧，迈阿密与巴林整体留作测试，其余 8 条赛道帧级 80% 与 20% 划为训练与验证
- **算力与训练耗时**：原文仅致谢佐治亚理工 PACE 计算集群提供算力，未披露 GPU 型号数量、训练步数与耗时
- **核心超参数与配置**：MLP 主干 256 与 128 全连接加整流线性激活，丢弃概率为 0.2，Adam 学习率为 10-3，验证损失提前停止，油门均方误差按 20 等宽分箱频率倒数加权，车队交叉熵按频率倒数加权，输入与连续目标零均值单位方差标准化
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存，仅报告上下文从 1 秒增至 5 秒与 9 秒时的精度变化，9 秒相对 5 秒增益微弱
- **开源产物与协议状态**：论文给出 Zenodo 数据集链接与代码仓库链接，数据集含特征、清单与汇总文件并附静态帧级划分清单，代码仓库含完整实现细节，许可为 CC BY-NC-ND 4.0 仅限学术非商业使用
- **附录与补充材料要点**：原文未设附录，未披露额外证明与补充消融，失效分析集中在正文对油门惯性与挡位模糊的讨论

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 7.2/10 | 技术严谨 6.2/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 8.0/10 | 可复现 6.3/10 | 工程/实践 6.5/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-50`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Madhava_50.pdf)
- Track：P2-3

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首次系统构建266h11m30s、1914020帧、10站10队的F1引擎音频PaSST特征与多维遥测同步数据集并固定发放清单。

- 核心优势：在迈阿密与巴林2条完全未见赛道上完成线性探针与MLP非线性对照及1s/5s/9s上下文直接消融验证可学习性。

- 核心优势：数据集经Zenodo公开可达且帧级划分清单与窗口标准化流程随数据固定发放，支持第三方核对复用。

- 主要短板：8条赛道内帧级随机划分验证因50ms稠密帧与0.5s重叠窗高度相关可能高估验证性能，存在泄漏控制短板。

- 主要短板：摘要与结论约300h表述与表2可加总的266h11m30s不一致，应以表2为准，构成表文口径矛盾。

- 主要短板：单声道混音含车队电台致车队MacroF1高达0.96可能利用人声混音签名，且测试仅2条赛道无显著性报告。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
