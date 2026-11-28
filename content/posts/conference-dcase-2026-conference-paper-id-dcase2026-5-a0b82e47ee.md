---
title: "ASD3DP: A Process-Aligned Dataset for Soft and Hard Anomaly Detection in FFF 3D Printing"
date: 2026-11-28
draft: false
description: "针对复杂打印机运转声中正常过程波动掩盖故障声的问题，ASD3DP 以四通道同步音频加统一释放时间轴的过程标注保留常规 10 s 片段检出视图，预训练编码器残差视图在固定会话划分上达到 AUC 0.9895 的排序优势，但软异常排序低且碰撞阈值不稳，结论仅限单机受控协议。"
tags: ["基准测试", "数据集", "数据集构建", "异常声音检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "过程对齐的 3D 打印运转声数据集：软硬异常如何被听见与解释"
paper_digest_original_title: "ASD3DP: A Process-Aligned Dataset for Soft and Hard Anomaly Detection in FFF 3D Printing"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-5"
paper_digest_workbench_source_sha256: "5eb249c8a00c020d7559f6823738eb3e489e85f55db649af5d82a4fe4b91feba"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_5.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "异常声音检测"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对复杂打印机运转声中正常过程波动掩盖故障声的问题，ASD3DP 以四通道同步音频加统一释放时间轴的过程标注保留常规 10 s 片段检出视图，预训练编码器残差视图在固定会话划分上达到 AUC 0.9895 的排序优势，但软异常排序低且碰撞阈值不稳，结论仅限单机受控协议。"
paper_digest_reader_sections: [{"heading":"耦合打印声中正常波动与故障声为何难以只用片段标签区分","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四通道同步采集与统一音频时间轴的数据组织全景","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"常数偏移同步与固定网格筛选如何保留过程上下文","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"固定会话划分下音频基线对软硬异常的区分能力与阈值代价","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"回抽声变化与表征投影揭示的正常过程波动与通道差异","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单机单构建与单标注条件下的适用边界与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["LUDO Lab, Busan, South Korea","Dong-A University, Busan, South Korea"],"name":"JeongSik Kim"},{"affiliations":["LUDO Lab, Busan, South Korea","Dong-A University, Busan, South Korea"],"name":"JongWoo Sung"},{"affiliations":["LUDO Lab, Busan, South Korea","Dong-A University, Busan, South Korea"],"name":"HyeonJun Bae"},{"affiliations":["LUDO Lab, Busan, South Korea"],"name":"BoRyeon Kim"},{"affiliations":["LUDO Lab, Busan, South Korea"],"name":"JiAn Lee"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"cf5d52f5caed14a070a638d61e9a0ae599d144e4b38aa662f3535a91a138b5f1","url":"/audio-research-portal/client/papers/2026-11-28/conference-a0b82e47eee8ec622b200957/citation.bib"},"citation.json":{"sha256":"70cef9aa19b0deacfbb47d9d93ea4666c8c73204a6b34afc68bdfa5b8e3d7a47","url":"/audio-research-portal/client/papers/2026-11-28/conference-a0b82e47eee8ec622b200957/citation.json"},"citation.ris":{"sha256":"69c848e2a9fdfee4c6070a757c916957222f0c05c0ea6df494d2e65695fecd7a","url":"/audio-research-portal/client/papers/2026-11-28/conference-a0b82e47eee8ec622b200957/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"090caa9cf2f7fb57196cc5c90ec35a87981a1e1e8c063c29ba385b92f884aafe","url":"/audio-research-portal/client/papers/2026-11-28/conference-a0b82e47eee8ec622b200957/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-5"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_5.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "791a95a2ea3bfed8e0aedb67ea234b3c6bb3290a8ddfcddf988f6d8ee78b1e01"
paper_digest_api_reader_plan_sha256: "50e18ec93f9edccbc4acd9c6db8a35b8d88f5b930708fb8162e5d6c82f008f1d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3d9e68b28a1f7038bd6283389f3216f3c61c84cb47edb7381fa9e3c6bf791853"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f32c542c8ddcb95f18d6b88de781e7712b153803a45b2993d75462bcf55c9e45"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0c977a2015eef2eb3d657e240233fa6c8db8d02c7a6825880058adc3afdd4554"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f7738a942117a0e58310227677d5064945c07c320cfb17e4535f440482ebbee9"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.anomaly-detection","label":"异常声音检测"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 过程对齐的 3D 打印运转声数据集：软硬异常如何被听见与解释

> 英文题目：*ASD3DP: A Process-Aligned Dataset for Soft and Hard Anomaly Detection in FFF 3D Printing*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-5`
> Track：P2-9




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_5.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[异常声音检测](/audio-research-portal/papers/?concept=task.anomaly-detection)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.0/10** | 创新 7.1/10 | 技术严谨 6.6/10 | 实验充分 6.9/10 | 清晰度 7.2/10 | 影响力 5.2/10 | 开源 8.0/10 | 可复现 5.5/10 | 工程/实践 6.3/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- JeongSik Kim：LUDO Lab, Busan, South Korea；Dong-A University, Busan, South Korea
- JongWoo Sung：LUDO Lab, Busan, South Korea；Dong-A University, Busan, South Korea
- HyeonJun Bae：LUDO Lab, Busan, South Korea；Dong-A University, Busan, South Korea
- BoRyeon Kim：LUDO Lab, Busan, South Korea
- JiAn Lee：LUDO Lab, Busan, South Korea

## 📌 核心摘要

**问题与瓶颈：** 异常声音检测 (anomalous sound detection, ASD) 通常仅用正常录音训练，从声音判断机器是否异常，现有 MIMII 与 ToyADMOS 等数据集已覆盖工厂噪声、受控损伤与域偏移，但缺少将检测器响应与复杂机器演进操作关联的时间对齐证据。熔丝制造 (fused filament fabrication, FFF) 打印机耦合了运动、挤出、冷却、框架振动与喷嘴交互，电机、传送带、风扇与挤出机的重叠声音随速度、方向、加速度与刀具路径变化，正常子系统的声音可能掩蔽另一子系统的故障。二值正常标签丢失了这种正常过程变化，而把密集过程属性直接作为检测输入又会带来调参与评分泄漏。

**核心思路与方法架构：** 与最接近的仅提供片段标签的基线相比，本文的增量是保留常规片段检测视角，同时增加公共释放音频时间线，把每段音频与命令流、遥测、过程状态、打印特征及故障有效区间连接，过程属性仅在模型与阈值固定后用于分析。采集使用一台开放 Voron 0 设计的无封闭打印机与可重复立方体负载，区分慢速与快速采集协议，4 支 Behringer C-2 心形电容麦克风在距机身约 5 cm 的后、前、右、左位置以 48 kHz 同步录音。同步以人工审核的打印结束锚点建立会话常量偏移，固定网格按释放音频时间的 [10k, 10(k + 1)) s 切分 10 s 区间，正常片段要求完全落在打印运动窗口内，异常片段要求与最终故障有效区间重叠至少 0.1 s。软异常允许带降级继续运行，包括传送带松弛与挤出故障，硬异常指需立即干预的工具头碰撞，G 代码模拟指程序化物理故障诱发而非合成音频。

**关键实验与核心代价：** 在种子 13711 的会话不相交划分上，用 1,000 个正常片段训练，在 600 个测试片段上比较 300 个正常与每类 100 个异常，前通道自动编码器 (autoencoder, AE) 总体曲线下面积 (area under the receiver operating characteristic curve, AUC) 为 0.796，部分曲线下面积 (partial AUC, pAUC, 最大误报率 0.1) 为 0.722，F1 为 0.620，其中碰撞 AUC 为 0.998，高于传送带紧张的 0.723 与挤出故障的 0.665，但碰撞 F1 为 0.603 且标准差为 0.331，说明排序能力强不等于固定阈值报警稳定。预训练编码器在相同测试子集上前视图 AUC 为 0.9657，后视图为 0.9873，嵌入空间残差视图为 0.9895，后视图高于前视图，残差视图略高于后视图，但论文未报告运行间不确定性且不定为通用融合规则。正常回抽分析比较 1,133 个前通道 3 s 片段，发现回抽相对沉积的均方根 (root-mean-square, RMS) 与 0-1 kHz 能量比更低而谱质心与中高频能量比更高，但作者明确这不证明回抽导致误报。主要代价是软异常对该基线仍困难，固定阈值不稳定，且对齐误差未独立测量。

**适用边界与深读导览：** 结论成立前提是单台打印机、受限故障词表、受控协议与以沉积为主的测试分布，不覆盖跨打印机、跨材料、跨环境与风扇遥测稀疏等场景，当前结果仅证明与重建式和预训练编码器 ASD 系统的兼容性与注释的可解释用途，不证明注释精度或元数据辅助检测增益。欲深究同步公式与证据来源区分可查下方方法概述和架构，欲核对故障族细分、麦克风视图对比与时序帧分数示例可查实验结果与相关表格。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/LUDO-Lab-Research/ASD3DP> — 链接可访问（HTTP 200）；许可证：MIT

- 论文所列链接：<https://github.com/VoronDesign/Voron-0> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 耦合打印声中正常波动与故障声为何难以只用片段标签区分

异常声检出通常只用正常录音训练，要求从声音判断机器是否异常。已有数据集已经覆盖工厂噪声、受控损伤与运行变化，例如 MIMII 记录工厂环境下工业机器声，ToyADMOS 与 ToyADMOS2 用微型机器控制损伤与录音条件，MIMII DUE 与 MIMII DG 进一步引入域偏移，DCASE 2024 个任务 2 也已包含 3D 打印机这一机型。ASD3DP 要补的不是有无打印机音频，而是缺少把检出器响应与机器运转过程随时间对应起来的证据。一台 FFF 打印机同时存在运动、挤出、冷却、框架振动与喷嘴交互声，电机、皮带、直线部件、风扇与挤出机声音相互叠加，正常子系统可能掩盖另一子系统的故障，混合声还随速度、方向、加速度与刀路不断变化。

论文把异常按运行后果分为软异常与硬异常，而不是按响度划分。软异常允许机器继续运行，但伴随性能下降、质量变差或故障风险上升，当前包括松动的 A 带、B 带或 A 与 B 双带，以及挤出机供料故障，含观察到的堵塞路径与 G-code 诱发的供料失败。硬异常需要立即干预或存在碰撞损伤风险，当前只有工具头碰撞一类。文中 G-code 模拟指用程序指令诱发真实物理故障，不是合成音频，观察与诱发条件保留各自来源。这种标签描述运行后果，标注为故障的区间未必全程可听，含故障的 10 s 片段也可能混入正常听感的帧，这是后文理解检出分数的重要前提。

过程标注在这里不是检出器的输入，而是事后解释的依据。DCASE 区分属性可用与属性不可用两种设定，WILDS 保留元数据做分层评测，切片发现研究则关注成组误差子集并提醒解释局限。ASD3DP 沿用这一思路，会话与条件标签只用于划分评测子集，密集的过程属性要等模型结构、输出与判定阈值全部固定后，才与音频检出结果连接，不参与调参与打分。这样既保留常规片段检出的可比性，又能事后追问误差来自哪种正常波动或哪种运行条件，避免用过程信息泄漏来美化检出分数。

为此数据集提供三部分工作。第一是连续 4 通道音频与精选的 10 s 片段，来自一台耦合的 FFF 机器，保留完整会话文件供自定义切分，也提供固定网格片段供常规检出。第二是统一释放音频时间轴，把指令流、遥测、过程状态、打印特征与故障有效区间连到同一时间上，每段音频都有证据来源区分。第三是用固定音频表征与检出器响应演示标注的用法，揭示正常过程变化与话筒视角差异。发布范围限定在一台打印机组装，不验证跨打印机泛化，这是解读所有实验结论的边界。

### 四通道同步采集与统一音频时间轴的数据组织全景

与最近的打印机音频与振动数据集相比，ASD3DP 的增量不在多一种机器声，而在把连续多通道音频与变化的运行过程连起来，同时保留常规片段视图。平台选用一台无围挡的 Voron 0.2 级别打印机，负载采用可重复的 Voron Design Cube 方块，含墙体、转角、悬垂与变化的冷却设置。采集区分慢速与快速两种会话级协议，指整轮采集的工艺档位，不是瞬时速度恒定，瞬时运动与挤出需看同步遥测。信号规格为四支 Behringer C-2 心形电容话筒接入同一台 Zoom AMS-44 同步录音，每通道存独立单声道 WAV 文件，采样率 48 kHz，名义码率每文件 768 kb/s，话筒距机身约 5 cm 斜指成型区。

要理解 4 路声音为何不同，先看俯视布局如何命名通道与距离。下段示意把隔声室、打印机与 4 个话筒的位置关系一次看清，重点沿虚线箭头看通道编号、前后左右方位与 5 cm 标注，思考不同方位对运动、挤出、冷却与框架声混合比例的影响。这也为后文前方与后方嵌入视图的对比埋下位置依据，阅读时把命名与朝向对应起来。

[![原论文 Figure 1：Plan view of the acquisition setup (not to scale).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-1.png)

*论文图 1：俯视采集布局示意：中央打印机四周四个话筒距机身 5 cm 斜指成型区（原论文 Figure 1）。*

该示意中央为标有 Voron V0 3D printer 的方形，外围大方框为隔声室。上方圆圈为 CH1 后方，下方为 CH2 前方，左侧为 CH4 左侧，右侧为 CH3 右侧，每个圆圈与中央方块之间各有一条 5 cm 虚线箭头指向打印机，表示约 5 cm 近场斜指成型区。原文强调该图未按比例绘制，斜视实物照片只展示悬挂安装，方位以该俯视图为准。4 个位置拾取的混合声不同，共用接口保证相对时序无需事后重采样，论文未声称做过摆位优化。

以 1 s 前方通道录音为例追踪端到端数据流。第一步，声波经 CH2 拾取并以 48 kHz 存为单声道波形，1 s 对应 48,000 个采样点。第二步，4 通道同一秒共享释放音频时间轴，边界相同的 10 s 固定网格把 4 路切成一一对应的片段。第三步，该片段经清单映射到源区间，交集保留遥测采样、指令时间估计、运动与挤出状态及故障区间。第四步，基线只把音频送入自编码器或预训练编码器得到嵌入与帧分数，密集过程属性在阈值固定后才与输出连接。原文未披露帧长步长、频谱维度与码本结构，推理延迟与吞吐也未披露。

### 常数偏移同步与固定网格筛选如何保留过程上下文

音频与打印机记录使用不同时间原点，对齐靠人工复核确定的打印结束锚点完成。对每个会话 s，记释放音频时间为 \( a_{s} \)，打印机时间为 \( p_{s} \)，常数偏移为 \( \Delta_{s} = a_{s} - p_{s} \)，任意打印机时刻映射为 \( t_{release} = t_{printer} + \Delta_{s} \)。该偏移与释放裁剪记在 session_sync_offsets.csv 中，全会话只用一个偏移，不做时钟漂移校正。指令时刻由 G-code 字节位置对照同步遥测与上下文锚点插值估计，重建的宏指令时间保留逻辑顺序，不是精确执行轨迹。端到端对齐误差未独立测量，不能当作采样级机器时序使用。

故障区间分两类证据。皮带与挤出区间描述同步后的故障能力范围，碰撞区间来自音频与频谱复核。最终精选表含 1,373 个故障有效区间，其中 18 个为皮带与挤出区间，1,355 个为碰撞区间，与诊断候选区间相区分。每个碰撞会话由一位标注者复核，未做独立双标注与正式仲裁。遥测与过程时间轴覆盖全部精选片段，紧凑 G-code 上下文覆盖 9,067 个片段中的 9,055 个。标注包只引用音频身份而不复制 WAV 文件，指令、遥测、阶段与故障记录保留各自证据来源。

切分与训练测试划分是两个步骤。会话内固定网格在释放音频时间上定义互不重叠的 \( [10k, 10(k+1)) \) s 区间，4 个通道共用同一边界。正常片段只保留完全落入已发布打印运动窗口者，含符合条件的无丝空走。异常片段要求与最终故障有效区间重叠至少 0.1 s，短标注事件另要求完全包含才发布。区间交集保留过程与故障上下文，清单保留源时间。因此异常片段可能含正常听感的帧，评测实验用互不重叠的录音会话划分，同一源会话的片段与话筒视角不会跨越训练与测试。

规模上数据集含 41 个会话共 28 h 59 min 即 28.99 h，4 通道同步得 164 个会话通道 WAV 文件与 115.97 通道小时，片段视图含 9,067 个互不相同的 10 s 区间，对应 36,268 个通道片段。分布表按不重复计算同一运行区间的方式报告分布，含正常小计 19 个会话 14:01 与 4,766 个片段 13:14，异常小计 22 个会话 14:59 与 4,301 个片段 11:57。发布层还包括会话条件机型材料协议来源、运动沉积空走回抽特征与层信息 2,166,672 个采样，指令 3,804,842 条等。时长均四舍五入到分，独立舍入的行可能求和不完全吻合，原文已注明。

### 固定会话划分下音频基线对软硬异常的区分能力与阈值代价

评测协议与公平性核查集中在本节开头。实验用固定会话不重叠划分，随机种子 13,711，训练用 16 个会话的 1,000 个正常片段，慢速与快速有丝打印及无丝空走各 250 个。测试共 600 个片段，300 个正常来自 3 个留出会话，慢速有丝、快速有丝与快速无丝各 100 个，另有皮带、挤出、碰撞三族故障各 100 个，其中皮带与碰撞用无丝协议，挤出用供料故障协议。训练与阈值选择均不见异常。自编码器用前方通道音频，前方与后方视图指 CH2 与 CH1 的嵌入，残差视图为后方嵌入减 0.5 倍前方嵌入，不是波形相减。所有系统只用音频，过程属性在结构输出阈值固定后才查看。指标中 AUC 指受试者工作特征曲线下面积，pAUC 指误报率上限 0.1 的部分面积，越大越好，F1 取训练正常阈值。本评测未含人工听测，也未用神经代理质量分数。

下表完整呈现原文 Table 4 的三行嵌入视图与三列指标，行分别为前方单视图、后方单视图与嵌入空间残差，后方减 0.5 倍前方，列为 AUC、pAUC 与 F1。F1 采用固定的训练正常阈值，该表不报告多次运行的不确定度。阅读时先看同一列内三行的排序，再看残差相对后方单视图的增量是否在三列一致，这直接对应同步多通道是否有补充信息的提问。

| Embedding view AUC | pAUC | F1 |
| --- | --- | --- |
| Front-only 0.9657 | 0.8308 | 0.8370 |
| Rear-only 0.9873 | 0.9525 | 0.9389 |
| Rear − 0.5 front 0.9895 | 0.9589 | 0.9416 |

该表三列排序一致，后方单视图全面高于前方单视图，AUC 由 0.9657 升至 0.9873，pAUC 由 0.8308 升至 0.9525，F1 由 0.8370 升至 0.9389，残差视图再小幅升至 0.9895、0.9589 与 0.9416，为该展示表内三列最高。论文强调这只说明同步通道有用，不是统计确立或普遍有效的融合规则。同一划分下前方通道自编码器总体 AUC 为 0.796，pAUC 为 0.722，F1 为 0.620，其中皮带张力 AUC 为 0.723，挤出故障为 0.665，工具头碰撞高达 0.998，碰撞 F1 却只有 0.603 且标准差达 0.331，说明排序强不等于固定阈值报警稳，软异常仍是该基线的难点。

片段分数由帧分数平均而来，时间对齐才能看出漏检发生在何处。下组曲线给出 10 s 内帧误差随时间的变化，横轴为 Time (s) 0 至 10，纵轴为 Frame error (MSE) 即均方误差，深色折线为帧误差，绿色横线为片段均值，橙色虚线为训练正常帧分数 99 分位，仅作诊断参考，浅红底为标注的故障区间。左侧为检出的工具头碰撞，右侧为漏检的挤出条件，对比窄尖峰与整段波动的差异。

[![原论文 Figure 5：Frame-score examples aligned with labeled intervals: (a) detected collision; (b) missed extruder…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-5.png)

*论文图 5：两例帧级误差曲线：左侧检出碰撞窄尖峰右侧漏检挤出整段波动（原论文 Figure 5）。*

左侧碰撞平时基线平稳，仅在两个窄阴影内出现远高于基线的尖峰，其余时间贴近底部，片段均值仍贴近基线却因尖峰被检出。右侧挤出条件整段均为浅红异常范围，曲线全程剧烈起伏，多次触及橙色虚线，绿色片段均值低于虚线而漏检。局部强响应与宽区间波动的对比说明该区间未必每帧都异常，虚线仅为诊断参考，不是文件级判定阈值，2 例只演示时间可检视性，不度量早期预警准确率。

### 回抽声变化与表征投影揭示的正常过程波动与通道差异

为分离有效正常运行内的变化，论文比较 1,133 个前方通道 3 s 片段，含至少 0.25 s 回抽，与同会话同速度档的最近参考段配对，后者无回抽且含至少 2.5 s 沉积。回抽指短暂回撤丝料，与铺料沉积动作不同。标准化差异先在每个会话内平均，再对 6 个会话等权平均，误差线为 95% 会话自助区间。这种配对控制时间邻近与速度档，仍不能消除全部混杂，但能暴露二值标签掩盖的过程波动。

下图横轴为回抽减匹配沉积，以会话内标准差为单位，零为界，左侧浅蓝区标回抽更低，右侧浅粉区标回抽更高。纵轴自上而下为均方根电平、频谱质心、0 至 1 kHz、1 至 3 kHz 与 3 至 8 kHz 能量比，圆点为 6 会话均值等权结果，横线为 95% 区间，底部注明 1,133 个配对片段来自 6 个会话。先看圆点落在哪侧，再看区间是否跨零。

[![原论文 Figure 3：Normal retraction minus matched deposition, in within-session standard-deviation units.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-3.png)

*论文图 3：正常回抽与匹配沉积声学差异：左侧为回抽更低指标右侧为回抽更高指标（原论文 Figure 3）。*

图中 5 个指标分居零线两侧，均方根电平与 0 至 1 kHz 能量比位于左侧负区，表示回抽时更低，频谱质心与 1 至 3 kHz 及 3 至 8 kHz 能量比位于右侧正区，表示回抽时更高，横线为 95% 会话自助区间，均不跨过零线，方向在 6 个会话一致。这说明两种有效正常状态声学不同，二值正常标签丢失的上下文，论文明确这不证明回抽导致误报。

下组散点为标准化测试表征的独立主成分投影，左侧为自编码器瓶颈，右侧为前方单视图预训练编码器。上两面板按故障着色，蓝色正常、橙色皮带张力、绿色挤出故障、红色工具头碰撞，下两面板为同一点按平均工具头速度着色，右侧色条为 0 至 200 mm/s。注意左右投影独立拟合，坐标量程不同，轴不可直接比较。先看红色是否独立成团，再看颜色是否随速度渐变。

[![原论文 Figure 4：Separate PCA projections of standardized test representations: AE bottleneck (left), Front-only…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3c2048f0fafb/figure-4.png)

*论文图 4：两种表征主成分投影：上方按故障着色下方按工具头速度着色（原论文 Figure 4）。*

上方左图 3 类软异常与正常大面积重叠，仅碰撞略有分离，右侧编码器图中红色碰撞在右侧独立成团，左侧蓝橙绿呈半环交织。下方同点按速度着色亦见结构，编码器分组方式与自编码器不同。论文提醒故障、协议与会话未完全交叉，分组可能反映运行条件而不只是故障，这些探索性投影不确立因果故障特征，也不保证无偏采样，独立拟合的轴不能直接比较数值大小。

### 单机单构建与单标注条件下的适用边界与复现核对

发布覆盖一台打印机、有限故障词表与受控协议，条件与会话效应耦合。多数测试片段以沉积为主，风扇遥测稀疏，回抽分析仅覆盖 6 个会话。会话内比较不能消除故障与速度及协议的混杂，速度相关结构在投影中同样可见。当前结果只证明基线能跑通该片段视图，不证明跨组装、跨材料与跨环境的泛化，这是选型时首要边界。

时间真值同样受限。端到端对齐误差未独立测量，单会话单偏移且无漂移校正，指令时间由字节位置插值估计，只保逻辑顺序。碰撞区间来自单人音频与频谱复核，未做独立双标注与正式仲裁。标注的故障条件未必全程可听，异常片段可含正常帧，时间对应不能当作采样级机器时序，帧级早期预警准确率也未度量。

复现核对需区分三件事。数据、标注与配套文档所属数据集已通过项目仓库公开，该数据集资源当前可用，含 41 个会话档案、164 个 WAV 文件映射、过程与故障层及同步偏移表。第三方 Voron 0 设计链接为论文提及的开源机型，不代表作者开源该机型。详细采集协议库尚在计划中，未随本次发布提供。清单把每个片段与通道映射到源区间，音频通道与机器档案分别记于对应表格，复现须用会话不重叠划分，同一源会话不得跨越训练与测试。本文未提供基线训练代码与权重下载，系统不可直接运行。

工程上可把该库作过程对齐分析的起点，而非即插即用的检出方案。碰撞排序强但阈值不稳，软异常排序明显更低，后方视角在本次匹配会话比较中占优，残差提升微弱且未经统计确立，不宜当作通用融合规则。过程属性只能在阈值固定后事后查看，不可用于调参与打分。未来版本计划补充协议匹配的正常样本与多台独立组装，覆盖器件厂商、打印件质量、装配维护、材料与环境，并做留一机组评测与纯过程泄漏基线，届时再谈泛化。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：四支心形电容话筒经同一接口同步采集，单声道 WAV 文件采样率 48 kHz，名义码率每文件 768 kb/s，话筒距机身约 5 cm 斜指成型区，命名为后方 CH1、前方 CH2、右侧 CH3、左侧 CH4，片段视图为 10 s 固定网格，回抽对比用前方通道 3 s 片段，前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：41 个会话共 28.99 h，四通道同步得 164 个会话通道 WAV 文件与 115.97 通道小时，9,067 个互不相同 10 s 区间对应 36,268 个通道片段，含正常 19 个会话与 4,766 个片段及异常 22 个会话与 4,301 个片段，覆盖有丝打印、无丝空走、皮带张力、挤出供料故障与工具头碰撞，评测用 16 个会话 1,000 个正常片段训练与 600 个片段测试，无语音语种
- **算力与训练耗时**：原文未披露训练与评测所用 GPU 型号数量、训练步数与耗时及推理硬件配置
- **核心超参数与配置**：优化器学习率批大小层数维度原文未披露，评测划分随机种子 13,711，自编码器阈值为训练批损失伽马拟合 90 分位三种子均值，编码器用固定训练正常阈值，残差系数为后方减 0.5 倍前方，pAUC 误报率上限 0.1，异常片段重叠要求至少 0.1 s
- **推理速度与部署开销**：原文未披露 RTF 延迟吞吐显存或参数量，自编码器用前方通道音频，编码器比较前方后方与嵌入残差三视图，均为离线片段检出，未声称流式因果
- **开源产物与协议状态**：数据标注与配套文档所属数据集已通过项目仓库公开该数据集资源当前可用，第三方 Voron 0 设计链接为论文提及机型当前可达不代表作者开源该机型，详细采集协议库尚在计划中，本文未提供基线训练代码与权重下载及可直接运行系统
- **附录与补充材料要点**：原文未披露独立附录，关键补充载于发布清单含机型材料部件固件协议说明及音频通道表会话机器档案表与会话同步偏移表，未来计划含协议匹配正常样本多台独立组装留一机组评测与纯过程泄漏基线

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.0/10** | 创新 7.1/10 | 技术严谨 6.6/10 | 实验充分 6.9/10 | 清晰度 7.2/10 | 影响力 5.2/10 | 开源 8.0/10 | 可复现 5.5/10 | 工程/实践 6.3/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-5`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_5.pdf)
- Track：P2-9

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：过程对齐公共音频时间线将四通道音频与命令流、遥测、过程状态及故障有效区间统一关联，密集属性仅阈值固定后分析防泄漏。

- 核心优势：在种子13711会话不相交划分上兼容重建式AE与预训练编码器，报告分故障族AUC与固定阈值不稳定的负结果。

- 核心优势：41会话28.99小时9067片段规模配合软硬操作后果划分，以可核对数据揭示软异常更难的细分瓶颈。

- 主要短板：仅单台打印机受限故障词表受控协议，且同步误差未独立测量、碰撞每会话单人审核无双标注仲裁，限制时间真值主张。

- 主要短板：预训练编码器未报告运行间不确定性，残差视图AUC仅从0.9873升至0.9895，论文亦不定为统计确立的融合规则。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
