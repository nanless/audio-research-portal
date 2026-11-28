---
title: "Comparison of Vision-based Object Detectors and an Audio Transformer for Whale Sound Event Detection"
date: 2026-11-27
draft: false
description: "针对南极低采样被动声学监测中鲸类叫声的时域定位与分类问题，论文并排比较在对数梅尔谱图上微调的 YOLOv11 与 RT-DETR 及在上采样波形上微调的 BEATs，发现开发集测试子集上带非极大值抑制的 RT-DETR 以 F1 为 0.679 略超 BEATs 的 0.655，而评估集上三者分别降至 0.376、0.276 与 0.166，代价是视觉预训练迁移有限且跨分布泛化落差明显。"
tags: ["生物声学监测", "迁移学习", "Transformer", "音频事件检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "鲸类叫声事件检测中视觉目标检测器与音频 Transformer 的比较"
paper_digest_original_title: "Comparison of Vision-based Object Detectors and an Audio Transformer for Whale Sound Event Detection"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-66"
paper_digest_workbench_source_sha256: "d179d159d3ebd999cc381d3608d4cdb7ceb88ed608c266660de956afec0ef445"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saeed_66.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频事件检测"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "针对南极低采样被动声学监测中鲸类叫声的时域定位与分类问题，论文并排比较在对数梅尔谱图上微调的 YOLOv11 与 RT-DETR 及在上采样波形上微调的 BEATs，发现开发集测试子集上带非极大值抑制的 RT-DETR 以 F1 为 0.679 略超 BEATs 的 0.655，而评估集上三者分别降至 0.376、0.276 与 0.166，代价是视觉预训练迁移有限且跨分布泛化落差明显。"
paper_digest_reader_sections: [{"heading":"南极低采样水下录音中鲸类叫声为何难做精确定位与分类","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"把声谱图当图像与把波形直接建模的两条路线如何并行比较","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"包围框纵横比的类别差异如何支撑几何一致性检查","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"从冗余框到碎片合并的后处理执行路径","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"开发集测试子集上音频预训练为何取得最高基线 F1","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"后处理消融显示抑制冗余为何优于几何过滤与合并","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、未验证条件与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany"],"name":"Maaz Saeed"},{"affiliations":["Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany"],"name":"Amir Latifi Bidarouni"},{"affiliations":["Computational Humanities, University of Bamberg, Bamberg, Germany","Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany"],"name":"Jakob Abeßer"},{"affiliations":["Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany"],"name":"Hanna Lukashevich"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"1fa7a77c46078e954637d74b6a28ae66a3d015d17b7d01858910deb565da62d7","url":"/audio-research-portal/client/papers/2026-11-27/conference-d47c81ed7fb376aafdf753f4/citation.bib"},"citation.json":{"sha256":"f501049f8b1527e73263878e3fa9bb35f437cbee36ceb7cd96c29d8147c49eac","url":"/audio-research-portal/client/papers/2026-11-27/conference-d47c81ed7fb376aafdf753f4/citation.json"},"citation.ris":{"sha256":"b869cbae2277badeb1c02d6130ab274fa93605d30821d8947958f1245d543d62","url":"/audio-research-portal/client/papers/2026-11-27/conference-d47c81ed7fb376aafdf753f4/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3f1f86b140512abd6ca0bbe97fc690ca33012b339546be5fa5b2a4718cf26e32","url":"/audio-research-portal/client/papers/2026-11-27/conference-d47c81ed7fb376aafdf753f4/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-66"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saeed_66.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "5d2026beb0ef6e7eb60e457e4829869ac220835a8a35ac9d55e65ee06f5df28d"
paper_digest_api_reader_plan_sha256: "ac33c2dc16a8b2efc54da22c35ace45ef591a2a89c61fb714de81b4013a93b03"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9bd5ab30afc3b0c36e22259eedbccb2f7d90077b1b5d3cfda26d64abf921654d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c07d0b6a4a971f212ac2583435f417d10031c40787835c1363f4132655f2c833"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ada3f98d6362f2d22376831aa0e690ed1758d59652c1d551625c538dce0c9358"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ffd6859e9edbb91ba2ff25979d04c5ee1515a60d4337cdce55c90940a9677a0e"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_method: "Transformer"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 鲸类叫声事件检测中视觉目标检测器与音频 Transformer 的比较

> 英文题目：*Comparison of Vision-based Object Detectors and an Audio Transformer for Whale Sound Event Detection*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-66`
> Track：P4-1




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saeed_66.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-research-portal/papers/?concept=task.event-detection)
- **研究方法**：[迁移学习](/audio-research-portal/papers/?concept=method.transfer)；[Transformer](/audio-research-portal/papers/?concept=method.transformer)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 6.9/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 4.3/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Maaz Saeed：Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany
- Amir Latifi Bidarouni：Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany
- Jakob Abeßer：Computational Humanities, University of Bamberg, Bamberg, Germany；Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany
- Hanna Lukashevich：Semantic Media Technologies, Fraunhofer IDMT, Ilmenau, Germany

## 📌 核心摘要

**问题与瓶颈：** 本研究处理南极蓝鲸与长须鲸连续水下被动声学监测（passive acoustic monitoring, PAM）录音，输入统一重采样至 250 Hz，有效呼叫集中在 20 Hz 至 120 Hz，输出为 7 种呼叫类型的起止时间与频率范围，并按生物学意义合并为 3 类进行基于时间轴一维交并比（intersection-over-union, IoU）的事件级评分。数据高度稀疏，目标事件仅占总时长约 5 %，训练集包含 1292 h 与 58 570 个标注事件，验证集为 587 条整小时录音含 17 627 个事件，评估集为 795 条整小时录音且标注 withheld，标注获取昂贵且南极声学条件多变。传统基于能量与谱图的检测器在复杂噪声下脆弱，而在自然图像上预训练的视觉检测器更擅长静态空间纹理而非连续谱时轮廓，音频模型的跨带宽迁移能力与精确定位策略仍待验证。

**核心思路与方法架构：** 与最接近的视觉基线相比，本工作保留对数梅尔谱图（log-Mel spectrogram）上的时频边界框建模，增量在于并行比较两条路线并引入与评测协议对齐的后处理，即微调视觉检测器与音频原生变换器，再用非极大值抑制（non-maximum suppression, NMS）等几何一致性检查对齐实例集合。以一条 30 s、50 % 重叠的片段为例，250 Hz 波形经 512 点快速傅里叶变换、窗长 256 个采样点、跳长 20 个采样点转换为对数梅尔谱图，沿频率轴做 z 分数归一化再按单张谱图做最小最大缩放，并复制为三通道以适配图像预训练输入，起止时间映射为归一化横坐标，频率范围映射为纵坐标构成边界框。同一片段另有一路送入音频双向编码器表示（Bidirectional Encoder Representation from Audio Transformers, BEATs）模型，做法是将 250 Hz 波形上采样至 16 kHz 后微调并仅预测时间边界，再扩展为纵向占满谱图的边界框以参与同一事件级交并比评测，论文未说明冻结层、损失、优化器与因果流式约束。

**关键实验与核心代价：** 在开发集测试集上，音频原生模型微平均 F1 为 0.655，高于实时检测变换器（Real-Time DEtection TRansformer, RT-DETR）基础配置的 0.517 与仅看一次目标检测器（You Only Look Once, YOLOv11）基础配置的 0.430，方向为越高越好，原文称前者相对后者约有 20 % 相对提升。对最优实时检测变换器仅加入非极大值抑制后，微平均 F1 从 0.517 变为 0.679，超过未加后处理的音频模型，而单独边界框合并为 0.666，单独长宽比过滤降至 0.502，三者组合为 0.635，表明抑制重叠冗余最关键。增强的仅看一次目标检测器召回率达 0.767，高于基础配置的 0.670，但精确率从 0.320 降至 0.232，F1 从 0.430 降至 0.356，置信度阈值在 0.3 至 0.4 附近最优。在标注 withheld 的评估集上排序不变，摘要以小数报告 BEATs 为 0.376、带非极大值抑制的实时检测变换器为 0.276、带增强的仅看一次目标检测器为 0.166，结论以无百分号的 37.6、27.6、16.6 报告相同数值，存在量纲书写不一致但数值对应，绝对值较开发集大幅下降。原文未披露训练与推理算力、硬件与耗时成本。

**适用边界与深读导览：** 结论仅在南极窄带低频鲸呼叫、强标签时频框与稀疏事件条件下成立，未覆盖其他物种、频段、开放海洋噪声、实时低时延部署与硬件约束，评估集落差提示在新站点年份上需谨慎外推。论文未提供可试听的音频演示页，深究 512 点谱图参数与边界框映射可查方法概述和架构，消融与跨集对比细节可查实验结果，复现缺口与失效模式可查细节详述与局限与问题。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/ultralytics/ultralytics> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 南极低采样水下录音中鲸类叫声为何难做精确定位与分类

被动声学监测依靠长期布放的水听器连续记录水下声景，用于刻画须鲸等发声类群的分布、移动与行为节律，并评估人为噪声对海洋生物的影响。南极周边长期观测在 2005 年至 2017 年间形成了覆盖 11 个站点年份的大规模录音，全部统一重采样至 250 Hz，有效叫声能量集中在 20 Hz 至 120 Hz 的窄带低频段。这类数据体量远超人工可听辨范围，而鲸类标注稀缺且获取成本高，使得可微调的大规模预训练模型成为关键选择。

BioDCASE 2026 任务 2 将问题定义为有监督、多类别、多标签的声音事件检测，要求模型在长时连续录音中同时给出每个事件的起始与结束时间并判定叫声类型。数据集共标注 7 种原始叫声类型，包括 bma、bmb、bmz、bmd、bp20、bp20plus 与 bpd，评分时合并为 bmabz、bp 与 d 共 3 个生物学聚合类。全部有声事件仅占总时长约 5%，评分采用沿时间轴的一维交并比衡量预测与标注在时域上的重叠，属于强标签事件级评测。

已有主流路线分为两支，一支把对数梅尔谱图视为图像，把叫声建模为时频包围框，直接复用视觉目标检测器的定位与分类能力，另一支利用在海量音频上自监督预训练的音频 Transformer，直接从波形或时频特征学习调制模式与长时依赖。前者受惠于成熟的框回归与分类头，但其骨干网络在自然图像上预训练，更擅长静态空间纹理而非连续的谱时轮廓。后者在 AudioSet 等大规模语料上见过包括鲸类发声在内的多样声音，理论上更贴合窄带低频叫声的结构。

本篇论文的核心矛盾在于低采样、稀疏事件与跨域预训练之间的错位，视觉模型需要把 250 Hz 信号转成谱图图像并重新学习声学轮廓，而音频模型需要把 250 Hz 波形上采样至 16 kHz 以适配预训练输入，尽管带宽并未增加。作者因此在同一 BioDCASE 框架下并排比较 YOLOv11、RT-DETR 与 BEATs，重点考察性能排序、置信度阈值与后处理对实例级 F1 的影响，以及从开发集测试子集到标注未公开的评估集上的泛化落差。

### 把声谱图当图像与把波形直接建模的两条路线如何并行比较

与最近的视觉检测路线相比，本工作的实质增量在于并排比较两类预训练来源，保留 YOLOv11 与 RT-DETR 的检测头与框回归机制，替换输入域与微调目标，使其在对数梅尔谱图上学习时频包围框，同时引入音频原生 BEATs 作为对照。视觉分支沿用自然图像预训练的骨干，再在鲸类谱图上微调，音频分支则沿用大规模音频自监督表示，直接微调为事件检测，以检验哪类先验更适配窄带低频叫声。

信号规格上全部录音统一为 250 Hz，目标频段为 20 Hz 至 120 Hz，视觉分支直接使用原始采样计算谱图，BEATs 分支则上采样至 16 kHz 以匹配预训练输入。谱图计算采用 512 点 FFT，窗长为 256 个采样点，步长为 20 个采样点，在 250 Hz 下分析窗跨度为 1.024 秒。录音按 30 秒窗与 50% 重叠切分，谱图经频率轴标准分数归一化与单张最小最大缩放，并将单通道复制为 3 通道以适配图像预训练格式。

为理解冗余框为何损害事件级评分，可先观察 RT-DETR 在同一谱图片段上的 3 组对照。下图左侧为未经抑制的密集预测，中间为经非极大值抑制后的稀疏保留，右侧为人工标注参考，紫色对应 bmabz，红色对应 d。结合底部低频能量带的连续形态，可直观看到重复检测如何形成，再被抑制步骤消除。

[![原论文 Figure 1：Whale call detections by the RT-DETR model shown without (left) and with (middle) NMS…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-1.png)

*论文图 1：RT-DETR 冗余预测经非极大值抑制前后与人工标注的谱图对照（原论文 Figure 1）。*

图中全部面板均为灰度谱图，横轴为时间，纵轴为频率，底部低频存在连续深色能量带。紫色框标注 bmabz，红色框标注 d，左侧面板中同一位置常出现多个虚线重叠框，例如第二行中部与第三行上部均可见并排重复检测。中间面板经非极大值抑制后重叠虚线框数量明显减少，更接近右侧实线真值的稀疏分布。这一对比说明评价按实例计分时，同一真值上的多个重叠预测会被计为额外误检，直接拉低精确率。

以 1 秒为换算基准，250 Hz 下为 250 个采样点，BEATs 上采样后为 16,000 个采样点，实际模型输入为 30 秒片段即 250 Hz 下 7,500 个采样点或 16 kHz 下 480,000 个采样点。视觉分支将 30 秒谱图映射为归一化横坐标时间与纵向频率范围，BEATs 仅预测时间边界再扩展为覆盖谱图全高的包围框以统一评分。原文未披露梅尔通道数、图像像素尺寸、优化器与冻结边界，推理延迟与显存开销亦未报告。

### 包围框纵横比的类别差异如何支撑几何一致性检查

包围框纵横比 \(AR\) 定义为宽度除以高度，宽度对应时间跨度，高度对应频率范围，数值越小表示垂直细长，数值越大表示水平伸展或近方形。该几何量能区分短促垂直的脉冲类叫声与时域延展的调制类叫声，作者因此统计训练集中 7 种原始类型与 3 个聚合类的经验分布。基于分布为每类设定期望区间，推理时仅保留纵横比落入区间内的预测，其余作为可能误检丢弃，构成廉价的几何一致性检查。

#### 七类原始标注的分布形态

为看清不同叫声在几何上的分离程度，可先查看 7 类原始标注的纵横比百分比曲线。下图横轴为纵横比从 0 至 8，纵轴为百分比从 0% 至 100%，7 条折线分别对应 bma 至 bpd。注意最左侧极小区间内的尖峰高度与中部 0.5 至 2.0 区间内的隆起位置，这直接决定了后续按类设定过滤区间的依据。

[![原论文 Figure 2：Bounding box aspect ratio distribution across 7 call types](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-3.png)

*论文图 3：7 种原始叫声类型包围框纵横比的百分比分布曲线（原论文 Figure 2）。*

图中 bpd、bp20plus 与 bmd 在纵横比约 0.1 处形成接近 90% 至 100% 的极高尖峰，bp20 在约 0.1 处约为 60%，在约 0.3 处降至约 35%，随后快速归零。bmb 在约 0.5 处达到约 31% 的峰值，bmz 在约 0.9 处达到约 23% 的峰值，bma 则呈现最宽的分布，在约 1.5 处约为 11% 并拖尾至 5 以上。这一排序表明 bp 系列几乎全部为垂直细长框，而 bm 系列随类型不同逐渐向水平方向扩展，与正文描述的趋势一致。

#### 合并为三类后的对比

将 7 类合并为 3 个聚合类后，几何差异更加集中，下图横轴同样为 0 至 8，纵轴为百分比，蓝色为 bmabz，橙色为 bp，绿色为 d。重点比较最左侧尖峰的高度与蓝色曲线在 0.5 至 4.0 区间的宽隆起，这解释了为何 bmabz 倾向于水平或近方形框，而另两类几乎全部为垂直框。

[![原论文 Figure 3：Bounding box aspect ratio distribution across 3 aggregated classes](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-4.png)

*论文图 4：合并为 3 个聚合类后纵横比分布的对比曲线（原论文 Figure 3）。*

图中 d 在约 0.1 处接近 98%，bp 在约 0.1 处约为 79% 并在约 0.3 处降至约 19%，两者在大于 0.5 后几乎归零。bmabz 在约 0.1 处接近 0%，在约 0.5 至 1.7 区间形成约 6% 至 10% 的宽峰，峰值位于约 1.3 至 1.5，并在 2.0 至 5.0 区间缓慢拖尾。基于该分布，推理时若某 bp 或 d 预测出现较大纵横比，或某 bmabz 预测出现极小纵横比，即被视为几何不一致而过滤，但消融显示该步骤单独使用反而降低 F1。

### 从冗余框到碎片合并的后处理执行路径

非极大值抑制在每组重叠框中仅保留置信度最高者，其余与之交并比超过预设阈值的框全部丢弃。作者发现将检测置信度阈值降至 0.3 至 0.4 区间可召回更多真阳性并提升 F1，但继续降低会因误分类、定位偏差与同一真值上的多个重叠检测而引入不成比例的误检。YOLO 默认自带该步骤，RT-DETR 原生不包含，因此作者将其作为模型无关的后处理重点评估。

为理解碎片化预测如何产生，以及合并步骤如何修复，下图展示了同一 30 秒谱图片段中单个 bmabz 事件的原始切分与合并结果。横轴为 0 秒至 30 秒的时间窗，纵轴为 0 Hz 至 125 Hz 的频率，橙色虚线为原始预测，紫色虚线为合并后事件，可对照底部低频能量带的连续性阅读。

[![原论文 Figure 4：Box merging of two fragmented event detections of a single bmabz event by RT-DETR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9e203c608914/figure-2.png)

*论文图 2：单个 bmabz 事件被切分为两段后合并为完整时域的示例（原论文 Figure 4）。*

图中在约 13 秒至 24 秒、约 25 Hz 附近可见两个橙色虚线框，分别标注 bmabz，前者覆盖约 13 秒至 18 秒，后者覆盖约 17 秒至 24 秒，两者在时间上部分重叠且频率范围一致。紫色虚线合并框从约 13 秒延伸至约 24 秒，纵向覆盖从 0 Hz 至 125 Hz 的全高，将两个碎片统一为单个事件。右边缘约 30 秒处另有一个极窄橙色虚线与 d 标签，表明片段边界处仍存在零散预测，需结合间隙阈值谨慎处理。

合并规则要求同类连续两预测的时间间隔小于预设阈值且频率范围充分重叠，重叠框因间隔为零而自然满足条件，合并后继承最早起始与最晚结束。过度合并可能将相邻不同事件粘连，因此阈值选择需要在减少碎片与避免粘连之间平衡。推理时全部录音先按 30 秒窗切分，逐窗检测后再拼接，原文未披露非极大值抑制的交并比阈值、合并间隙与频率重叠的具体数值，流式缓存策略亦未说明。

### 开发集测试子集上音频预训练为何取得最高基线 F1

评测采用事件级微平均精确率、召回率与 F1，方向均为越高越好，匹配依据为沿时间轴的一维交并比，7 种原始类型先映射为 3 个聚合类再计分。开发集测试子集上的比较覆盖 YOLO 基础与增强、RT-DETR 在批量大小为 32、30 与 16 下的 3 个配置，以及批量大小为 8 的 BEATs。训练规模为 1,292 小时与 58,570 个事件，验证集为 587 条 1 小时录音，评估集为 795 条 1 小时录音且标注未公开，参数量与码率等细节原文未披露。

下表集中列出开发集测试子集上 6 种配置的微平均召回率、精确率与 F1，便于直接比较音频预训练与视觉预训练的排序，以及增强与批量大小带来的变化。阅读时注意召回率与精确率的反向变动，以及 F1 对两者平衡的综合反映。

| Model | Batch size | Recall | Precision | F1 score |
| --- | --- | --- | --- | --- |
| YOLO (Base.) | – | 0.670 | 0.320 | 0.430 |
| YOLO (Aug.) | 32 | 0.767 | 0.232 | 0.356 |
| RT-DETR | 32 | 0.699 | 0.403 | 0.511 |
| RT-DETR | 30 | 0.700 | 0.394 | 0.503 |
| RT-DETR | 16 | 0.665 | 0.423 | 0.517 |
| BEATs | 8 | 0.696 | 0.619 | 0.655 |

从展示的子表逐格核对，BEATs 以精确率 0.619 与 F1 为 0.655 为同列最高，召回率为 0.696 次于 YOLO 增强的 0.767。RT-DETR 在批量大小为 16 时 F1 为 0.517，约为 YOLO 基础 0.430 的 20% 相对提升。YOLO 引入增强后召回率升至 0.767，但精确率降至 0.232，F1 反而降至 0.356，表明视觉预训练模型在未见音频事件上泛化较弱。评估集上同样排序为 BEATs 的 0.376、带抑制的 RT-DETR 的 0.276 与 YOLO 增强的 0.166，但绝对值大幅下降，揭示了跨分布泛化的落差。

方差、置信区间与听测规模均未报告，指标全部为自动事件评分，无人工听测 MOS 或神经代理质量分的对照，因此无法判断差异的统计显著性。未胜出项清晰，YOLO 增强与纵横比过滤均低于各自基线，RT-DETR 批量大小从 32 降至 16 时 F1 仅在 0.511 至 0.517 间波动，未见实质变化。未评测范围包括逐类 F1、不同交并比阈值下的稳定性，以及长达 1 小时的连续拼接误差，这些都限制了结论向实际部署的直接外推。

### 后处理消融显示抑制冗余为何优于几何过滤与合并

消融以批量大小为 16 的 RT-DETR 为起点，其无后处理时微平均 F1 为 0.517，逐一比较非极大值抑制、纵横比过滤、框合并以及三者组合的效果。全部方案共享同一检测阈值区间与事件级评分，避免了模型权重差异的干扰，聚焦于实例集合层面的修正能力。原文未披露抑制交并比阈值、纵横比期望区间与合并间隙的具体数值，因此结果反映的是作者调优后的相对排序而非可直接复用的阈值。

下表集中列出 5 种后处理方案在同一基线上的微平均 F1，便于判断哪种冗余修正真正对齐了按实例计分的评价协议。阅读时注意单独抑制与单独合并的接近数值，以及组合方案反而回落的现象。

| Post-processing scheme | Micro-averaged F1 score |
| --- | --- |
| – | 0.517 |
| NMS | 0.679 |
| aspect ratio filtering | 0.502 |
| Box merging | 0.666 |
| NMS + filters + merging | 0.635 |

从展示的子表逐格核对，单独非极大值抑制以 0.679 为本表最高，框合并以 0.666 次之，三者组合为 0.635，无后处理为 0.517，纵横比过滤单独使用为 0.502 全组最低。抑制通过折叠重叠框直接减少同一真值上的重复计分，与评价对多检的惩罚精确对齐。合并虽能修复碎片，但阈值过宽会粘连相邻独立事件，过滤则可能误删有效检测，组合后反而低于单独抑制，说明在调优良好的抑制之外追加启发式帮助有限。

缺失的消融包括置信度阈值从 0.3 至 0.4 之外的完整扫描曲线、不同交并比阈值下的敏感性、合并间隙与频率重叠的网格搜索，以及按 bmabz、bp 与 d 分类的提升来源。评估集上仅报告 BEATs、带抑制 RT-DETR 与 YOLO 增强的 3 个 F1，未给出后处理在评估集上的完整消融，因此开发集上的排序能否在未公开标注上保持，仅能以这 3 点间接印证。

### 结论成立的前提、未验证条件与工程选型建议

上述结论成立依赖于若干具体前提，录音统一为 250 Hz 窄带低频，事件稀疏至约 5% 时长，评分经 7 类到 3 类的聚合与一维时域交并比，输入按 30 秒窗切分。BEATs 的优势部分来自 AudioSet 预训练中已见过鲸类发声，且上采样保留了低频能量与平滑轮廓，视觉模型的劣势则与自然图像预训练偏好静态纹理有关。一旦采样率、窗长、聚合方式或交并比阈值改变，排序可能变化。

未验证条件包括因果流式与离线精度的差异、30 秒窗拼接在 1 小时长录音上的误差累积、不同站点年份与季节的分布偏移，以及阈值在新海域上的稳定性。原文未报告 RTF、首音延迟、吞吐、显存与参数量，未披露优化器、学习率、冻结层与训练耗时，方差与置信区间缺失，使得工程上无法估计实时性与复现成本。

复现核对上原文未披露作者代码与权重公开状态，仅引用第三方 YOLO 实现链接，其当前可用不代表作者已开源，系统不可直接运行。附录关键证明与补充消融亦未披露，无试听页可对照，听感描述不适用。若谱图与高分辨率实例标注充足且需要精细时域定位，可考虑 RT-DETR 类检测器并重点调优非极大值抑制与置信度阈值。若标注稀缺则优先采用音频基础模型作为强基线，谨慎使用纵横比过滤与激进合并，并以评估集落差预留性能余量。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原始采样率为 250 Hz，目标频段为 20 Hz 至 120 Hz，谱图采用 512 点 FFT、窗长 256 个采样点、步长 20 个采样点，BEATs 分支上采样至 16 kHz，推理按 30 秒窗与 50% 重叠切分，梅尔通道数与 RTF 未披露
- **训练与评测数据**：训练集含 6,004 条录音共 1,292 小时与 58,570 个事件，验证集含 587 条 1 小时录音共 17,627 个事件，评估集含 795 条 1 小时录音且标注未公开，覆盖 11 个站点年份南极 2005 年至 2017 年连续录音，7 种叫声合并为 3 类且事件仅占约 5% 时长
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时
- **核心超参数与配置**：批量大小覆盖 8 至 32，检测置信度阈值最优范围为 0.3 至 0.4，非极大值抑制交并比阈值与合并间隙阈值等未披露，优化器与学习率未披露
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐、显存与参数量，仅披露按 30 秒窗与 50% 重叠切分的推理方式
- **开源产物与协议状态**：原文未披露作者代码与权重公开状态，仅引用第三方 YOLO 实现链接，其当前可用不代表作者已开源，系统不可直接运行
- **附录与补充材料要点**：原文未披露附录，补充消融、证明与许可限制均未报告

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.6/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 6.9/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 4.3/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-66`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saeed_66.pdf)
- Track：P4-1

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：音频原生BEATs以F1为0.655领先视觉基线并在标注withheld评估集上保持排序不变，跨集验证扎实。

- 核心优势：对最优RT-DETR完成NMS、框合并与长宽比过滤及组合的直接消融，NMS从0.517升至0.679且保留负结果。

- 核心优势：在1292小时58570事件南极连续录音上明确30秒切片与512点谱图参数及三通道时频框映射，数据规模清晰。

- 主要短板：开发集到评估集大幅下降，BEATs从0.655降至0.376，RT-DETR加NMS从0.679降至0.276，外推稳定性受限。

- 主要短板：未披露损失权重、优化器、学习率、轮数、冻结层及NMS交并比阈值、合并间隔与长宽比区间等关键配置。

- 主要短板：摘要以小数0.376报告评估集F1而结论以无百分号的37.6报告相同数值，且3.4节评测集措辞与表题存在出入。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
