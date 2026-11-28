---
title: "ToyADMOS2026: A Dual-Channel Dataset for Noise-Aware First-Shot Unsupervised Anomalous Sound Detection"
date: 2026-11-27
draft: false
description: "针对非平稳背景噪声导致的训练测试失配，ToyADMOS2026 以固定几何的近端与远端同步录制与脉冲响应仿真构建可比基准并给出近端单通道参考，双通道噪声感知自监督集成的汇总分数更高，但增益混杂预训练与集成设计且缺乏受控消融，在负信噪比等条件下仍不稳健。"
tags: ["基准测试", "数据集构建", "多通道", "异常声音检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "双通道近端与远端观测如何支撑噪声感知首发异常声音检测"
paper_digest_original_title: "ToyADMOS2026: A Dual-Channel Dataset for Noise-Aware First-Shot Unsupervised Anomalous Sound Detection"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-63"
paper_digest_workbench_source_sha256: "2d4dbd9488b275648222825d7fca4a0821d59c7ea0a2fca3c0b7b7b733dbb3f2"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Harada_63.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "异常声音检测"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对非平稳背景噪声导致的训练测试失配，ToyADMOS2026 以固定几何的近端与远端同步录制与脉冲响应仿真构建可比基准并给出近端单通道参考，双通道噪声感知自监督集成的汇总分数更高，但增益混杂预训练与集成设计且缺乏受控消融，在负信噪比等条件下仍不稳健。"
paper_digest_reader_sections: [{"heading":"非平稳背景噪声为何让只见过正常声音的检测器失灵","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双通道观测定义与房间几何固定的目标噪声相对关系","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"四类机器运转条件与物理异常构成的域偏移","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"双通道混合生成与近端单通道参考的训练评分流程","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"近端单通道参考与双通道自监督集成的差距在何种前提下成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"可复现的边界与未验证的部署条件及工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["NTT, Inc., Japan"],"name":"Noboru Harada"},{"affiliations":["Tokyo Metropolitan University, Japan"],"name":"Daisuke Niizumi"},{"affiliations":["NTT, Inc., Japan"],"name":"Daiki Takeuchi"},{"affiliations":["NTT, Inc., Japan"],"name":"Masahiro Yasuda"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"5f1e2e782063dd5efa89c00c7c48cfa9613875ae9f962248154893e40c33cc11","url":"/audio-research-portal/client/papers/2026-11-27/conference-0ef019767eb09e7f78b8e7ad/citation.bib"},"citation.json":{"sha256":"c8899f99a0ebf0a63abf335e2d9ba17cfc86da75d9fa154794f5a67f081513c0","url":"/audio-research-portal/client/papers/2026-11-27/conference-0ef019767eb09e7f78b8e7ad/citation.json"},"citation.ris":{"sha256":"38cc3a982b08f09dd9cf79801b13eba7386fe8009f31fdbcb7682f6b2ed944fe","url":"/audio-research-portal/client/papers/2026-11-27/conference-0ef019767eb09e7f78b8e7ad/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4edb89a7fa8c6f43ba3227ccfb194e0a6d921cbce879b060a45e54bac9b141ff","url":"/audio-research-portal/client/papers/2026-11-27/conference-0ef019767eb09e7f78b8e7ad/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-63"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Harada_63.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "cd1ce330e3ac423f90d49c2b95b9b89a738ed96cae69807e356a6f62ae9ceeda"
paper_digest_api_reader_plan_sha256: "4789d8a6155d8dd6858fa288dd92f37c7c2810cfa507fe85f3882b2b33bf972b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f2b0e72decd18eb1593b5271f7ea5fac2a11c71ccc20d29ef37dc831c5cf7024"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6bcc804feaee27aae0ee18899c252bddf7c2e087640f2a5f7d2a82d0bfb5176d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "67c2c99bb4ac94a97eb4c1495fba50160e62c3eb96ec01c446684bf51405bd1e"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"setting","id":"setting.multichannel","label":"多通道"},{"facet":"task","id":"task.anomaly-detection","label":"异常声音检测"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 双通道近端与远端观测如何支撑噪声感知首发异常声音检测

> 英文题目：*ToyADMOS2026: A Dual-Channel Dataset for Noise-Aware First-Shot Unsupervised Anomalous Sound Detection*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-63`
> Track：P2-8



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Harada_63.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[异常声音检测](/audio-research-portal/papers/?concept=task.anomaly-detection)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究条件**：[多通道](/audio-research-portal/papers/?concept=setting.multichannel)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.5/10 | 技术严谨 7.3/10 | 实验充分 6.6/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Noboru Harada：NTT, Inc., Japan
- Daisuke Niizumi：Tokyo Metropolitan University, Japan
- Daiki Takeuchi：NTT, Inc., Japan
- Masahiro Yasuda：NTT, Inc., Japan

## 📌 核心摘要

**问题与瓶颈：** 无监督异常声音检测仅用正常运行声音训练模型，并为每段测试音频输出异常分数，用于机器状态监测。实际部署中目标机器与周围设备及环境噪声混叠，当背景噪声非平稳时训练与测试条件失配，噪声起伏可能被误判为故障，导致监测性能下降。DCASE 任务 2 自 2020 年起以 ToyADMOS 与 MIMII 建立该设定，历经域偏移、域泛化与首发学习演进，要求开发集与评估集机器类型不同且禁止针对评估调参。DCASE 2026 任务 2 在保留首发与域泛化要求的同时引入噪声感知，同步提供目标主导的近端与更反映背景的远端，但已有数据集缺乏受控几何下的同步双通道记录。

**核心思路与方法架构：** 核心洞察是近端与远端虽均为目标与环境声的混合，但目标与噪声主导度及到达时间不同，学习两者相对电平、时延与跨通道关系即可在无纯噪声参考下分离机器变化与环境变化。输入为 x ∈ R2×L 的立体声片段，左通道为近端信号，右通道为远端信号，文件通道索引与物理记录麦克风编号严格区分，且同一机器类型内麦克风几何在训练与测试间固定。ToyCar 、 ToyDrone 与 ToothBrush 为双麦克风实录，时长分别为 11 s 、 16 s 与 6 s ， ToyCarEmu 则将 ToyADMOS2 近端等效记录与日本桥下环境声分别与新测脉冲响应卷积，再经均方根增益调整与逐通道混合生成 12 s 片段，原始信号与脉冲响应均以 48 kHz 24 位记录，最终以 16 kHz 24 位双通道 WAV 发布，近端基准混合信噪比分别为 6 dB 、 3 dB 、 12 dB 与 -20 dB 。每种机器类型用 990 段源域与 10 段目标域正常音频训练，测试在各域含 50 段正常与 50 段异常，评估集每种机器 200 段测试且标签隐藏， ToyCar 与 ToyCarEmu 共用排布与噪声以对照直接记录与脉冲响应仿真。基线兼容立体声 WAV 输入但仅取左通道做与 DCASE 2025 基线相同的特征提取、训练与打分，首发自动编码器模式以近端均方重构误差训练与打分，选择性马氏距离模式则以源域与目标域协方差距离取最小值打分，刻意不利用远端噪声信息，作为双通道方法的近端参考。

**关键实验与核心代价：** 在 DCASE 2026 任务 2 官方评估中，表 4 以分数形式报告源域 AUC 、目标域 AUC 与虚警率上限为 0.1 的部分 AUC 及谐波均值， ToyCar 与 ToyCarEmu 为开发集结果不计入排序用谐波均值与算术均值。同一表内近端参考 FS-AE 的源域 AUC 谐波均值为 0.6606 ，而双通道 Fujimura MERL task2 3 噪声感知自监督集成在同一指标上为 0.7381 ，高于前者，目标域 AUC 谐波均值从 FS-AE 的 0.5732 变为该系统的 0.7279 ，部分 AUC 谐波均值从 0.5687 变为 0.6484 ，均以后者更高。选择性马氏距离自动编码器近端基线在三项谐波均值上分别为 0.6086 、 0.4985 与 0.5467 ，低于 FS-AE 与双通道系统，目标域相对源域下降显示域偏移影响仍明显。作者明确指出优胜系统的收益不能仅归因于第二通道，因预训练模型、判别微调、打分与集成设计同时不同，强调受控的近端对比近端加远端消融仍必要，这正是本文以近端基线为对照付出的关键代价，即双通道收益需额外消融才能确证。工程上双麦克风立体声输入在普通物联网设备上无需太多额外成本即可实现，但远端同时拾取混响与泄漏的机器声，只能作实用参考而非理想噪声信号，优胜集成还以预训练与集成复杂度换取性能，本文未提供可核对的人工主观听测，因检测任务以 AUC 与部分 AUC 为准。

**适用边界与深读导览：** 结论成立依赖同一机器类型内麦克风几何固定、近端与远端均为混合而非纯噪声参考，以及训练仅用 990 段源域与 10 段目标域正常音频的无监督首发条件，未覆盖麦克风移位、未知强非平稳噪声或单通道物联网设备的直接部署。远端泄漏与混响使纯降噪假设失效，普通立体声输入物联网设备即可实现该设置，但向工业现场迁移仍需验证几何与噪声变化下的鲁棒性。欲深究混合信噪比定义、自动编码器与马氏距离打分及 AUC 与部分 AUC 谐波均值公式，可查阅下文方法与实验章节对式 1 至式 11 与表 2 至表 4 的说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 非平稳背景噪声为何让只见过正常声音的检测器失灵

无监督异常声音检测只用正常运转声音训练模型，再为每段测试音频给出异常分数，分数超过阈值即判为异常。DCASE 任务 2 自 2020 年起以 ToyADMOS 与 MIMII 系列建立这一设定，目标是发现未知机器故障。实际中目标机器总与周边设备和环境噪声同时被观测，当背景噪声非平稳时，训练与测试条件失配会使正常变化看起来像异常。噪声既可能掩盖故障特征，也可能自身被误判为异常，直接拉低设备状态监测的可靠性。

任务随后不断加入更贴近现实的分布偏移，2021 年引入域偏移，2022 年引入域泛化，2023 年至 2025 年延续首发设定。首发要求开发集与评测集使用不同机器类型，每类机器内部再包含源域到目标域的偏移，开发集上选定的模型不得针对评测机器类型调参。ToyADMOS2 与 MIMII DUE 与 MIMII DG 以及 ToyADMOS2+ 与 ToyADMOS2# 与 ToyADMOS2025 先后支撑了这些阶段，评测调参与否成为公平性的关键边界，也对泛化能力提出更高要求。

DCASE 2026 个任务 2 保留首发与域泛化要求，新增噪声感知双通道观测。每段音频提供同步的近端与远端麦克风信号，发布为立体声 WAV 文件，左通道为近端信号而右通道为远端信号。2 通道都是目标与环境声音经不同传播路径形成的混合，只是目标与噪声的主导比例不同，还带有相对电平与时延与相位差异。这种设计在普通立体声输入物联网设备上即可实现，布置时只需将一只麦克风贴近目标而另一只靠近噪声侧，额外成本不高。

关键难点在于远端通道并非纯噪声参考，它同样拾取混响与泄漏的目标声音，只能作为实用参考而非理想噪声信号。系统因此不能做简单相减，而需利用电平与时延与相位以及学习到的跨通道关系，把机器自身变化与环境变化分开。本文的贡献正在于形式化这一近端与远端设定，记录 ToyCar 与 ToyCarEmu 与 ToyDrone 与 ToothBrush 的录制与生成与工况与物理异常，并给出兼容立体声的参考与评测分析，为后续噪声感知方法提供可复现基准。

### 双通道观测定义与房间几何固定的目标噪声相对关系

任务仍是非监督的，系统只从正常片段学习，再为每段测试片段输出异常分数与二值判定。开发集与评测集的机器类型不同，每类机器内部设有源域到目标域的偏移，模型选择必须泛化而不能针对评测类型调参。新输入记为 \(x\)，形状为 2 通道乘以采样点数，发布文件中左通道为近端而右通道为远端。必须区分文件通道序号与表 2 中的物理录制麦克风编号，两者含义不同，单通道与噪声参考与全多通道方法都被允许，为不同硬件条件留出空间。

要一次看清几何如何固定目标与噪声的相对关系，可先看房间平面与麦克风布置图。该图把 4.0 m 乘 5.1 m 房间内的桌子与垫子与四角扬声器与近端与远端麦克风画在同一坐标下，左侧对应 ToyCar 与 ToyCarEmu 而右侧对应 ToyDrone 与 ToothBrush。观察时沿虚线距离与高度标注比较近端贴近目标而远端靠近噪声侧的位置差异，再看图例如何区分垫子与桌子与麦克风序号与扬声器。

[![原论文 Figure 2：Room layouts and microphone arrangements for (a) ToyCar, (b) ToyCarEmu, (c) ToyDrone, and (d)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-2.png)

*论文图 2：4.0 m 乘 5.1 m 房间内桌子与四角扬声器与近端与远端麦克风的平面布置（原论文 Figure 2）。*

画面左侧显示长 4.0 m 宽 5.1 m 的房间，中央桌上标出 ToyCar 目标，近端麦克风记为 1 号而高度为 0.05 m，远端麦克风记为 2 号而高度为 0.77 m，四角各有一只扬声器，图中还标出 1.25 m 与 0.75 m 与 1.80 m 与 1.50 m 与 2.00 m 等距离。右侧显示 ToyDrone 悬停点与 ToothBrush 固定刷洗位，近端分别记为 3 号与 4 号而高度为 0.88 m，远端共用 5 号而高度为 77 cm，图例区分垫子与桌子与麦克风序号与扬声器。同一机器类型内该几何在训练与测试之间保持固定，这是可比性的前提。

以 1 s 同步片段为例，在 16 kHz 下每通道为 16,000 个采样点，输入形状为 2 乘 16,000，左通道为近端而右通道为远端。参考流程只取左通道的 1 乘 16,000 进入与 DCASE 2025 相同的特征提取与自动编码器，特征帧率与维度原文未披露，重构误差直接作为异常分数。几何固定的意义在于 2 通道形成不同的目标与噪声主导比例与到达时间线索，相对电平与时延与相位以及学习到的跨通道关系都可用于抑制环境变化，而非简单相减。

### 四类机器运转条件与物理异常构成的域偏移

完整开发集包含 ToyCar 与 ToyCarEmu 与 Fan 与 GearboxEmu 与 BearingEmu 与 SliderEmu 与 ValveEmu，追加训练集与评测集包含 ToyDrone 与 ToothBrush 与 SewingMachine 与 Sander 与 BlowerDustCollector，本文聚焦作者新增的 4 组配置。评测测试集中每类机器的正常与异常与源域与目标域以及属性标签全部隐藏，文件名与属性表格只提供阶段允许的信息。其中 ToyCarEmu 与 ToyDrone 提供训练属性，而 ToyCar 与 ToothBrush 的属性隐藏，以维持首发难度。

要理解 4 类目标的外观与异常位置，可先看目标机器配置图。该图按 ToyCar 与 ToyCarEmu 与 ToyDrone 与 ToothBrush 4 组并列展示，本次收到图片仅为其中 ToothBrush 所在局部裁切。可重点观察白色刷柄并排排列与每支刷头 3 张特写之间的对应关系，再对照正文补足其余 3 组以机器实例与电压与速度描述为准，避免对未显示部分作画面断言。

[![原论文 Figure 1：Target-machine configurations for (a) ToyCar, (b) ToyCarEmu, (c) ToyDrone, and (d) ToothBrush.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-1.png)

*论文图 1：电动牙刷刷柄与三组刷头特写的并列展示，对应刷毛破损与异物等物理异常（原论文 Figure 1）。*

画面显示标注为 (d) 的三支白色电动牙刷刷柄，底部有红色与青色色环，中部有椭圆形透气孔，每支右侧配 3 张刷头特写。特写中蓝色与白色刷毛出现发黑与缺失与附着黄色与绿色异物等形态，对应正文所述刷毛破损与异物与部分缺失以及刷头卡异物的物理异常。其余 (a) 与 (b) 与 (c) 的小车与无人机外观不在本次图片范围内，不作画面层面的断言，相关描述以图注与正文为准。

每类机器均设 A 号与 B 号训练而 C 号测试的个体偏移，再叠加工况偏移，ToyCar 与 ToyCarEmu 为电压 2.8 V 与 3.1 V 与 3.4 V 与 3.7 V 对应的速度 1 与 2 与 3 变为 1 与 4，ToyDrone 为快与中变为慢，ToothBrush 为模式 1 变为模式 2。训练为 990 个源域正常片段加 10 个目标域正常片段，开发测试为每域 50 个正常加 50 个异常，评测为每类 200 个片段且标签隐藏。ToyCar 类异常设于转轴弯曲与齿轮变形熔化与车轮破损，无人机异常设于螺旋桨与机臂与机身的不平衡配重，牙刷异常集中于刷毛与刷头。

### 双通道混合生成与近端单通道参考的训练评分流程

要把纸面距离落到真实录制现场，可先看近端与远端麦克风的实拍照片。该组照片按 (a) 与 (b) 与 (c) 与 (d) 4 组标注麦克风序号与高度，左侧为桌面小车而右侧为悬停无人机与固定牙刷架。观察时沿白色标注找到近端贴近目标而远端立于房间噪声侧的位置，再核对高度数值是否与平面图一致，确认序号对应关系。

[![原论文 Figure 3：The near/far microphones for (a) ToyCar, (b) ToyCarEmu, (c) ToyDrone, and (d) ToothBrush.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-3.png)

*论文图 3：桌面小车与悬停无人机与固定牙刷架的近端与远端麦克风实拍与高度标注（原论文 Figure 3）。*

照片左上显示 Mini4WD 小车置于白桌，近端麦克风记为 1 号而紧贴车身，远端麦克风记为 2 号而立于远处支架。右上显示小型无人机悬于白色圆形垫上，近端记为 3 号而高度为 88 cm，远端记为 5 号而高度为 77 cm，背景可见音箱与相机。下图显示牙刷固定架，近端记为 4 号而高度为 19.5 cm，远端记为 5 号而高度为 77 cm，桌旁同样立有音箱。3 组实拍的高度与序号与平面图相互印证，说明几何未随采集改变。

要理解仿真如何复用同一几何而不重复录制，可再看 ToyCarEmu 的脉冲响应测量照片。该图左侧为中央单扬声器条件而右侧为房间侧四扬声器条件，分别对应目标位置与环境噪声扬声器位置到近端与远端麦克风的传递路径。观察时注意黄色近端与远端箭头与品红色扬声器标记的指向关系，区分目标路径与噪声路径的测量位置。

[![原论文 Figure 4：IR measurement for ToyCarEmu from the target and environmental-noise loudspeaker positions to the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/b88108cb5f7b/figure-4.png)

*论文图 4：目标与噪声扬声器位置到近端与远端麦克风的脉冲响应测量现场与标记（原论文 Figure 4）。*

照片左侧标出中央 1 扬声器与近端与远端麦克风箭头，右侧标出外部 4 扬声器与 4 个被品红色圆圈标出的黑色音箱，以及近端与远端箭头。原始信号与脉冲响应按 48 kHz 与 24 位录制，ToyCarEmu 把 ToyADMOS2 中已录制的近端等效机器信号与环境噪声分别与这些实测脉冲响应卷积，再按均方根做增益调整并分通道混合，而非复制噪声的双声道信号。近端混合信噪比按均方根计为 ToyCar 6 dB 与 ToyCarEmu 3 dB 与 ToyDrone 12 dB 与 ToothBrush -20 dB，远端沿用同一噪声增益，最终下采样为 16 kHz 与 24 位双通道文件。

兼容立体声的参考在训练与推理时只用近端通道，加载器读入立体声 WAV 后丢弃右通道，沿用 DCASE 2025 的特征提取与自动编码器结构，特征帧率与维度原文未披露。简单自动编码器以近端正常输入与重构的均方误差为损失直接更新全部参数，原文未提及冻结模块。测试时以查询片段近端重构误差为异常分数，选择性马氏距离模式则取源域与目标域马氏距离较小者，阈值以上判异常。原文未披露分块流式方式与前瞻窗口与采样步数与延迟与 RTF 与显存开销。

### 近端单通道参考与双通道自监督集成的差距在何种前提下成立

评测要求为每段测试片段提交异常分数与二值判定，分数决定每域的 AUC 与误报率上限为 0.1 的部分 AUC，官方总分是对全部机器与区间与域上 AUC 与部分 AUC 取调和平均，判定得到的精确率与召回率与 F1 不影响排名。系统级调和平均为官方排序依据而算术平均仅供参考，ToyCar 与 ToyCarEmu 作为开发集结果不计入汇总。开发与追加训练与评测包分别发布，赛后真值与结果与报告与实现一并公开，版本 4 系列对应 DCASE 2025 个任务 2 而版本 5 系列对应 DCASE 2026 个任务 2。

两个参考模式都只用近端，保证与往年首发设定的连续性，也为双通道方法提供公平对照。噪声感知系统则可利用远端做条件或抑制，或学习电平与时延与相位与表征层面的跨通道关系，在去噪表征空间评分。由于远端同样混响与泄漏，它只是实用参考而非理想噪声信号，增益不能单独归因于通道数，还需考虑预训练与微调等差异。

原文以分数形式报告源域 AUC 与目标域 AUC 与部分 AUC，近端单通道参考整体处于中等水平，部分目标域数值低至 0.3787 与 0.4402 一带，部分 AUC 多在 0.50 至 0.61 之间，总分调和平均约在 0.59 至 0.61 附近。使用双通道的 Fujimura MERL 任务 2 第三系统在噪声感知自监督学习与去噪表征空间评分与集成下汇总更高，部分 AUC 达 0.6484 一带而总分达 0.7024 一带，展示了噪声感知设定的潜力。但该增益同时来自预训练模型与判别微调与评分与集成设计，不能单独归因于第二个通道，仍需近端单通道对比近端加远端的受控消融。

至少有一个明确的未胜出信号值得注意，选择性马氏距离自动编码器在部分机器与域上反而低于简单自动编码器，例如 ToothBrush 这类近端混合信噪比为 -20 dB 的极低信噪比条件与 Sander 等未在本文详述的机器上波动较大。原文未报告方差与置信区间，异常检测以 AUC 为准而不涉及人工听测，失效案例也未逐段剖析。扬声器重放的桥下与排水与空调风扇噪声不能等同真实工厂非平稳噪声，麦克风几何变化与物联网硬件失配同样未被评测。

### 可复现的边界与未验证的部署条件及工程选型建议

该基准的可复现性建立在若干固定假设上，同一机器类型内麦克风几何在训练与测试之间固定，房间与桌子与四角扬声器位置不变，机器运转与扬声器噪声分开采集再按均方根调平后分通道混合。脉冲响应仿真假设线性时不变传递路径，ToyCarEmu 的基底是已录制的近端等效信号而非消声室干声。作者有意强调对非平稳信号不指定单一信噪比，而是做基于均方根的增益调整，远端沿用同一噪声增益，保证 2 通道相对关系真实。

录制与生成与工况与域偏移与物理异常与元数据划分在正文与表格中交代较全，采样与时长与通道对应与混合信噪比均有明确数值，训练划分与测试构成与评测隐藏规则也已说明。原文提及开发集与追加训练集与评测集的 Zenodo 记录与参考代码库地址与版本分支，但本次未确认其可达状态。是否提供可下载代码与权重与可运行系统原文未给出可验证说明，不宜仅凭提及即认定已公开，复现前需核对实际页面。

原文未提供试听页，解读不虚构听感。若只有近端可用，可先用近端单通道自动编码器作参考，预期在非平稳噪声与目标域偏移下分数有限。若具备立体声输入物联网设备，可尝试以远端为条件或抑制近端信号，或学习电平与时延与相位与表征层面的跨通道关系，重点学习正常近端与远端关系并对背景变化保持稳健。ToothBrush 类负信噪比场景应单独评估，任何双通道改进都应补做同模型下有无远端的受控对比，避免把预训练增益误算为通道增益。

综合来看，核心问题是在保留首发与域泛化约束下缓解非平稳噪声导致的训练测试失配，端到端数据流是从双通道波形到取近端特征再到正常建模与异常评分，远端只在噪声感知方法中参与条件或去噪。数据集以固定几何的实录加脉冲响应仿真提供可比基准，近端参考保证连续性，双通道自监督集成的更高汇总分数提示方向，但代价是预训练与集成等混杂因素与缺失消融。后续工作需补齐受控消融与几何鲁棒性与真实工厂验证，才能把该基准迁移为可靠的工业监测方案。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原始录制为 48 kHz 与 24 位，经脉冲响应卷积与均方根增益调整与分通道混合后发布为 16 kHz 与 24 位双通道 WAV 文件，左通道为近端信号而右通道为远端信号，ToyCar 片长为 11 s 而 ToyCarEmu 为 12 s 而 ToyDrone 为 16 s 而 ToothBrush 为 6 s，近端混合信噪比分别为 6 dB 与 3 dB 与 12 dB 与 -20 dB，原文未披露帧长与步长与延迟与 RTF
- **训练与评测数据**：开发集包含 ToyCar 与 ToyCarEmu 与 Fan 与 GearboxEmu 与 BearingEmu 与 SliderEmu 与 ValveEmu，追加训练集与评测集包含 ToyDrone 与 ToothBrush 与 SewingMachine 与 Sander 与 BlowerDustCollector，每类机器训练为 990 个源域正常片段加 10 个目标域正常片段，开发测试为每域 50 个正常加 50 个异常，评测为每类 200 个片段且标签隐藏，背景噪声分别为桥下与排水与空调风扇声
- **算力与训练耗时**：原文未披露训练与评测所用计算硬件型号与数量与训练步数与耗时
- **核心超参数与配置**：原文未披露优化器与学习率与批大小与网络层数与维度与温度或损失权重等超参，仅说明参考沿用 DCASE 2025 自动编码器特征提取与训练与评分设置
- **推理速度与部署开销**：原文未披露延迟与 RTF 与吞吐与显存或参数量等推理开销，仅说明测试时以近端通道重构误差作为异常分数并经阈值判定
- **开源产物与协议状态**：原文提及开发集与追加训练集与评测集的 Zenodo 记录与参考代码库地址与版本分支，本次未确认其可达状态，是否提供可下载代码与权重与可运行系统原文未给出可验证说明
- **附录与补充材料要点**：原文未披露附录，参考文献列出 DCASE 各年任务描述与数据集论文与优胜系统技术报告，未给出补充证明与许可限制与失效案例细节

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 7.5/10 | 技术严谨 7.3/10 | 实验充分 6.6/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-63`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Harada_63.pdf)
- Track：P2-8

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：在受控几何下提供近端远端同步双通道实录与脉冲响应仿真双轨构建，ToyCar与ToyCarEmu共用排布噪声可对照直接记录与仿真差异。

- 核心优势：首发无监督与域泛化协议严密，开发训练含990段源域加10段目标域正常音频，评估每种机器200段测试且标签隐藏，开发集结果不计入排序。

- 核心优势：官方评估保留源域到目标域退化负证据，双通道系统三项谐波均值高于近端基线且作者诚实声明增益不可仅归因第二通道。

- 主要短板：优胜双通道增益不能仅归因第二通道，受控的近端对比近端加远端消融仍缺失，无法确证双通道本身的独立贡献。

- 主要短板：远端同时拾取混响与泄漏机器声仅作实用参考而非理想噪声信号，几何在同一机器类型内固定，未验证麦克风移位与未知强噪声部署。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
