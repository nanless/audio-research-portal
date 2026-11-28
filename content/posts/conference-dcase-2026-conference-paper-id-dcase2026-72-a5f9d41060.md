---
title: "Overview and Meta-Analysis of DCASE 2026 Challenge Task 6: Audio Moment Retrieval from Long Audio"
date: 2026-11-27
draft: false
description: "面对数分钟长录音中按自由文本定位起止时刻的难题，综述以 MS-CLAP 加 DETR 检测网络为基线，在 100 条评测录音上基线 Recall1@0.7 为 13.56% 而前三系统达 48.59% ，代价是依赖更强编码器与检测网络并辅以分数校准与多分辨率融合。"
tags: ["基准测试", "数据集", "基准设计", "音频时间定位"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "长音频时刻检索：DCASE 2026 任务 6 综述与基线分析"
paper_digest_original_title: "Overview and Meta-Analysis of DCASE 2026 Challenge Task 6: Audio Moment Retrieval from Long Audio"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-72"
paper_digest_workbench_source_sha256: "fa38e828c565e4a0ffa7b66758d5aaebaae24c0f40e9327f84d0ab832643bccf"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Munakata_72.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频时间定位"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "面对数分钟长录音中按自由文本定位起止时刻的难题，综述以 MS-CLAP 加 DETR 检测网络为基线，在 100 条评测录音上基线 Recall1@0.7 为 13.56% 而前三系统达 48.59% ，代价是依赖更强编码器与检测网络并辅以分数校准与多分辨率融合。"
paper_digest_reader_sections: [{"heading":"长音频中按文本找时刻为何比短片段排序更难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"以文本查询与长录音为输入的检索流程总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"MS-CLAP 特征与 DETR 检测网络如何分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"合成与人工标注数据怎样组织训练与损失","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"评测协议与参赛系统整体表现","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"分数校准、宽度估计与多指标关联诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["LY Corporation, Japan"],"name":"Hokuto Munakata"},{"affiliations":["LY Corporation, Japan"],"name":"Tatsuya Komatsu"},{"affiliations":["Kyoto University, Japan"],"name":"Keisuke Imoto"},{"affiliations":["Sony Interactive Entertainment, Japan"],"name":"Taichi Nishimura"},{"affiliations":["University of Helsinki, Finland"],"name":"Huang Xie"},{"affiliations":["Tampere University, Finland"],"name":"Tuomas Virtanen"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"0552ab77f8da8abbe6c9567347e8f710f28e2a894a1b70478af6a704e5bda79c","url":"/audio-research-portal/client/papers/2026-11-27/conference-a5f9d410600fac0b282d9d42/citation.bib"},"citation.json":{"sha256":"8f02b6f3426ae5f5d15ca08b2b09371f0d65b4dd5380a76cb6dc3807fdf9df10","url":"/audio-research-portal/client/papers/2026-11-27/conference-a5f9d410600fac0b282d9d42/citation.json"},"citation.ris":{"sha256":"c36bdc4c7a3ef65ea9fbf37c7b00415735674bb530f09c4ae01358f6cb2e1398","url":"/audio-research-portal/client/papers/2026-11-27/conference-a5f9d410600fac0b282d9d42/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"937e60328093743efff6b80a4b4fd00961d988f3bcd04ecc166d31565ccf8bee","url":"/audio-research-portal/client/papers/2026-11-27/conference-a5f9d410600fac0b282d9d42/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-72"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Munakata_72.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "638d038961158bb6894a9c73d2f4a093440d516ea4ad7b4333435d7a28031e3b"
paper_digest_api_reader_plan_sha256: "a6707bfc0c9c90f2c33e12ad920dc916a296a5432d7e081dd3c67a117603a7b9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fbf521e48c831025ff4b8b44ee955db621aef9089f3b778fd1e016816110cc62"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6d94daa53a2e37d53eb09427075338945f6c2236b7f1681ccef4faf949f7b110"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f771d1bfeefe82318ab73b14bd197ce93f875bbfb40b06243445c184c8fd0f13"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 长音频时刻检索：DCASE 2026 任务 6 综述与基线分析

> 英文题目：*Overview and Meta-Analysis of DCASE 2026 Challenge Task 6: Audio Moment Retrieval from Long Audio*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-72`
> Track：P1-6



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Munakata_72.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-research-portal/papers/?concept=task.temporal-grounding)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.6/10 | 技术严谨 6.4/10 | 实验充分 8.2/10 | 清晰度 7.0/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 7.6/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Hokuto Munakata：LY Corporation, Japan
- Tatsuya Komatsu：LY Corporation, Japan
- Keisuke Imoto：Kyoto University, Japan
- Taichi Nishimura：Sony Interactive Entertainment, Japan
- Huang Xie：University of Helsinki, Finland
- Tuomas Virtanen：Tampere University, Finland

## 📌 核心摘要

**问题与瓶颈：** 音频时刻检索（Audio Moment Retrieval, AMR）以数分钟长的未修剪录音与一条自由文本查询为输入，输出与查询语义匹配的一个或多个连续时间区间，每个区间由开始与结束时间戳表示。论文以体育比赛中观众欢呼呐喊为例，说明系统需在 0-5 分钟录音中定位如 2:15-3:40 的目标片段。相邻任务难以直接替代：片段级语言音频检索假设音频已切分，只排序不定位；声音事件检测限定封闭事件集合，无法处理开放词汇与重叠事件或场景描述；视频时刻检索虽提供检测器回归范式，但声学线索只能从声音推断，缺乏视觉辅助。根本困难在于开放词汇跨模态对齐与长程时序建模需同时成立，而长音频人工标注稀缺，合成数据与真实分布存在偏差，置信度与定位质量也常错位。

**核心思路与方法架构：** 基线 Audio Moment DETR（AM-DETR）沿用视频分支 Query-dependent DETR（QD-DETR）的检测器中心与宽度回归框架，将输入模态替换为预训练 MS-CLAP 2023 跨模态嵌入，并在其上做查询条件化时序检测。音频按 1 秒窗 1 秒跳切分，每帧经音频编码器映射为 768 维向量，文本查询经文本编码器映射为 768 维嵌入序列，二者在共享空间已具备初步声文对齐。Transformer 编码器以查询嵌入为条件对音频序列做上下文建模，解码器用 K 为 10 的可学习时刻查询并行预测候选时刻的中心、宽度与置信度，推理时按置信度排序取首位用于主要指标 Recall1@0.7。训练采用预测与参考时刻的二部匹配，时刻损失组合中心与宽度的 L1 损失、广义交并比（generalized IoU, gIoU）损失与置信度交叉熵损失，并沿用高亮检测损失与负样本对损失；检测网络为 2 层编码器解码器，隐藏 256 维，8 个注意力头，前馈 1024 维，在开发训练集训练、开发验证集选模。原文未提及流式或严格因果约束，按描述为整段处理。

**关键实验与核心代价：** 在 100 个真实录音 177 条查询构成的评测集上，以主要指标 Recall1@0.7 衡量，Kibata（YCU）、Kim（CAU）与 Sugawara（YCU）三系统同为 48.59%，高于基线的 13.56%，约为基线 3.5 倍，基线 Recall1@0.5 为 28.25%，平均平均精度（mean Average Precision, mAP）为 12.11%，第四名 Ogawa（YCU）Recall1@0.7 为 46.89%。同一评测内多指标分化明显：Kibata（YCU）Recall1@0.5 为 69.49%，Kim（CAU）为 63.84%，Sugawara（YCU）为 59.89%，三者平均 mAP 分别为 40.67%、41.39% 与 22.69%，显示宽度估计与多区间召回能力分化。主导收益来自特征与检测器升级与校准：在开发测试集上仅将 MS-CLAP 替换为 M2D-CLAP 即使 Recall1@0.7 从 26.80% 变为 40.70%，增加变焦损失（varifocal loss）使 Usui（YCU）从 20.30% 变为 27.62%，引入多层感知机校准器使 Calvet（AUDIAS）从 34.45% 变为 40.01%。代价方面，总参数与成绩相关仅 r 为 0.22，可训练参数相关 r 为 0.57，超 \(10^4\) M 参数的音频大语言模型系统并未形成单调优势，提示增益更依赖损失与后处理而非单纯扩参。

**适用边界与深读导览：** 结论成立前提是 1-5 分钟英语查询的真实长音频，开发测试集源自 AudioCaps 子集而评测集为新采 YouTube 数据，二者 Recall1@0.7 强相关，说明此次域偏有限，但仅在合成数据调优常无法迁移，须以真实开发测试集验证。未覆盖场景包括更长录音、多查询多时刻密集重叠、非英语查询与实时流式部署，预测多个区间仍明显难于首位命中，时刻宽度估计仍是拉开 Recall1@0.5 与 Recall1@0.7 差距的关键。欲深究形式化定义与交并比、召回、平均精度计算可查下方方法概述和架构，欲核对特征替换、Mamba 时序编码器、分数校准与多分辨率集成等取舍可查实验结果与细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长音频中按文本找时刻为何比短片段排序更难

会议存档、生活日志、广播媒体、播客与声学监测常以数分钟未剪辑长录音形式存在，逐段试听寻找感兴趣内容耗时且难以扩展。音频时刻检索允许用户以自由文本描述目标，例如运动场中观众欢呼呐喊，直接返回匹配时刻的开始与结束时间，用于档案索引与导航。每个时刻定义为由起止时间界定的连续区间，一个录音可含一个或多个匹配时刻，也可关联多个查询。与人工拖动进度条逐段试听相比，这种方式把语义理解与时间定位交给系统完成。

系统输入为长录音 \(x\) 与自由文本查询 \(q\) ，录音时长为 \(T\) 秒，输出为按置信度分数排序的 \(N'\) 个预测时刻，每个预测含开始时间、结束时间与分数。查询对应 \(N\) 个参考时刻，其中 \(N \ge 1\) ，参赛者至少提交一个时刻，也可按置信度降序提交多个。评测只看排序首位预测能否与参考时刻高度重合，提交更多时刻仅影响平均精度而不改变主排名。主指标要求首位预测交并比（IoU）达到 0.7 以上，体现对最可信结果定位精度的关注。

与相邻任务相比，差异在于输入形态与词汇约束。短片段语言检索假设音频已预先切分，只做相关性排序，不检测内容何时发生。声音事件检测限定封闭事件集合，估计每类活动的起止区间。音频时刻检索为开放词汇，可描述多个重叠事件或整体声场景，线索只能从声音推断，要求长程时序建模与跨模态对齐。视频时刻检索中检测变换器（DETR）直接回归起止时间的思路被迁移至声音领域，成为本任务建模起点。

核心难点在于长程上下文捕捉与强音频文本表示的结合，同时标注长音频稀缺。开发训练同时使用人工标注与合成数据训练的基线在开发集上 Recall1@0.7 为 13.56% ，说明长音频时刻检索仍具挑战。该分数对应人工标注集与合成集联合训练的配置，而非仅用单一来源。合成与真实分布差异、置信度分数与定位质量错位、时刻宽度估计偏差等问题在后续参赛分析中反复出现，构成理解主实验结论成立条件的重要背景。

### 以文本查询与长录音为输入的检索流程总览

整体流程分为特征提取与时刻检测两大模块。文本查询经文本编码器映射为 768 维嵌入序列，长录音经 1 秒窗 1 秒步长的滑动窗切帧，每帧经音频编码器映射为 768 维嵌入。两者处于同一跨模态空间，已具备初步声语对应。检测网络在文本条件下对音频序列做上下文建模，再以可学习查询并行解码候选时刻，输出中心、宽度与置信度分数并排序。

为建立直觉，先看任务示意。下方示意以 5 分钟波形与一句英文查询为例，箭头标明双路输入如何汇入同一检索系统并输出单一区间，有助于对照后文张量流理解起点与终点。理解双路输入与单区间输出的对应关系，是后文跟踪嵌入维度与候选排序的基础，建议先看清查询框、波形框与系统框的箭头走向。

[![原论文 Figure 1：An overview of audio moment retrieval.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-1.png)

*论文图 1：文本查询与长录音共同输入检索系统并输出起止时刻的任务示意（原论文 Figure 1）。*

图面显示上方紫色框为文本查询，内容为运动场观众欢呼呐喊，下方绿色框为长录音波形，横轴为 0 至 5 的时间，单位为分钟。中间蓝色框为音频时刻检索系统，双路箭头汇入后向右输出 [2:15 - 3:40] 作为检索时刻。主指标仅评估置信度最高的单个预测，与图中单区间输出形式一致，多预测仅用于平均精度。

在实现上，检测网络直接操作预计算嵌入而非原始波形，保持轻量。推理时 10 个候选按分数排序，首位用于 Recall1@0.7 ，全部用于平均精度。这种设计把重心放在表示质量与时间结构建模，后续参赛者多在此两处替换更强模块，而非重写整体流程，因此抓住两模块分工即可复述多数改进。

### MS-CLAP 特征与 DETR 检测网络如何分工

基线特征提取基于预训练 MS-CLAP 2023 模型，将声音与语言映射至共享跨模态嵌入空间。文本查询由文本编码器输出 768 维序列嵌入，音频录音以 1 秒窗长与 1 秒步长的滑动窗口切分，每帧由音频编码器输出 768 维音频嵌入。由于两种模态已在同一空间对齐，所得嵌入起点即具备声学内容与语言描述的相似性，无需从波形重新学习语义。主办方同时分发全部 3 组数据的预提取音频文本特征，使参赛者无需下载原始音频即可训练与评测，后续检测网络只需在轻量嵌入序列上运行。

时刻检测网络改编自视频领域的 QD-DETR ，包含两层变换器编码器与两层解码器，隐层尺寸为 256 ，注意力头为 8 个，前馈尺寸为 1,024 。编码器在查询嵌入条件下对音频嵌入序列建模上下文依赖，解码器以 10 个可学习时刻查询并行预测候选时刻，每个候选由中心、宽度与置信度分数参数化。训练采用预测与参考时刻之间的二分匹配，将无序集合的监督转化为一对一配对问题。推理时全部候选按分数降序排列，首位用于主指标 Recall1@0.7 ，其余仅参与平均精度计算。

训练目标组合矩形回归与分数分类。中心与宽度采用绝对值损失，叠加广义交并比损失以直接优化重叠率，置信度采用交叉熵分数损失，权重分别为 \(\lambda_{L1}\) 、 \(\lambda_{gIoU}\) 与 \(\lambda_{score}\) ，另有高亮检测损失与负样本对损失增强检索。绝对值损失约束位置与尺度的绝对偏差，广义交并比损失约束区间重叠程度，两者互补推动边界同时修正，分数损失则推动排序。训练流程明确为在开发训练划分上训练，在开发验证划分上选择模型，在开发测试划分上评测，并提供仅用人工标注集与联合合成集的两种配置以便复现。

基线以 AdamW 优化，学习率为 \(10^{-4}\) ，批量为 32 ，训练 200 轮，基于 Lighthouse 工具库实现并公开完整训练与评测流程。由于直接在预计算嵌入而非原始波形上运行，检测网络保持轻量。置信度分数与定位质量错位是已知短板，准确定位时刻可能获得偏低分数，这为后文引入交并比感知损失、分数校准器与多时间分辨率集成留下直接动机。

### 合成与人工标注数据怎样组织训练与损失

Clotho-Moment 为大规模合成集，用于弥补标注不足。它将 Clotho 描述音频作为前景叠加至 Walking Tours 长背景上，间隔服从均值 30 秒的指数分布，叠加前去除首尾静音以明确边界，前景与背景按随机相对电平混合。时间戳由叠加过程自动获得，无需人工标注，共 51,240 条 1 分钟录音与 44,261 条描述，规模远超人工集。

CASTELLA 为人工标注真实集，共 1,862 条录音约 120 小时， 3,881 条描述，时长 1 - 5 分钟，每条至多 5 个时刻。录音取自 AudioCaps 子集对应的长视频，短于 1 分钟剔除，长者截至 5 分钟，描述与 1 秒分辨率时间戳经众包收集，听审仅听音频以去除视觉偏置。平均每录音 2.1 个时刻，每描述 7.8 词，划分含训练 2,182 条、验证 352 条、测试 1,347 条。评测集另采 100 条真实录音共 177 条查询，标注方式相同但真值在赛时保密。

DCASE 术语将两集合训练划分合并为 development-training ， CASTELLA 验证为 development-validation ，测试为 development-testing 。模型在 development-training 训练，在 development-validation 选择，在 development-testing 评测，提供仅用 CASTELLA 与联合 Clotho-Moment 两种配置。组织者同时分发三集合预提取 MS-CLAP 音文本特征，参赛者无需下载原始音频即可训练评测。优化采用 AdamW ，学习率 10-4 ，批大小 32 ，共 200 轮，基于 Lighthouse 实现。

仅在合成验证上调优常难迁移至真实，因合成叠加与真实声场景分布存在差距，验证分数提升有时对应真实分数下降。因此在真实 development-testing 上验证被证明必要。 Ogawa 与 Kang 等队在预训练中引入拼接合成与 MomentMix 等混合增强，并借助外部语料缩小差距，这为理解合成数据价值与使用前提提供了依据。

### 评测协议与参赛系统整体表现

评测在 100 条真实录音 177 条查询上进行，每队至多提交 4 个系统，共 21 支队伍 59 个系统。正确性以时间交并比判定，预测与参考区间重叠率达阈值 θ 即算正确。系统以 Recall1@0.5 、 Recall1@0.7 与阈值 0.50 至 0.95 步长 0.05 平均的平均精度报告，主排名依据 Recall1@0.7 ，要求首位预测交并比 ≥ 0.7 。少于 10 个预测的系统其平均精度以灰色标记，需谨慎比较。

为判断性能提升是否仅靠参数规模，下图对比检索性能与总参数量及可训练参数量的关系。横轴为对数刻度参数量，纵轴为评测集 Recall1@0.7 ，虚线为趋势，红点为基线，有助于区分规模效应与结构改进。左右两图分别展示总参数与可训练参数，元数据无效系统已剔除，阅读时需注意横轴为对数刻度。

[![原论文 Figure 2：Comparison of the retrieval performance on the evaluation dataset and the number of total or…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-2.png)

*论文图 2：检索性能与总参数量及可训练参数量的对数散点对比（原论文 Figure 2）。*

图面显示左图横轴为总参数量，右图为可训练参数量，单位均为 M ，纵轴均为 Recall1@0.7 。蓝色圆点为参赛系统，红色圆点位于低分约 13.56% 处为基线。总参数相关系数 r = 0.22 较弱，可训练参数 r = 0.57 较强，右侧超 10,000 M 的点对应音频大语言模型，高分系统并非都需 10 倍于基线的参数，说明结构与损失改进同样关键。

前三系统并列 Recall1@0.7 为 48.59% ，约基线 3.5 倍，第四为 46.89% 。替换特征提取器的队伍中位约 41% ，保留所给 MS-CLAP 特征的队伍中位约 18% 。 Kibata 报告仅将特征换为 M2D-CLAP 而结构不变，开发测试集分数由 26.80% 升至 40.70% 。多数系统采用 UVCOM 、 CG-DETR 与 BAM-DETR 等变体， Kim 与 Choi 以 Mamba 时序编码器替代自注意力并称其为最大单项增益，而免训练方案多未超越基线，说明在真实数据上训练检测网络必不可少。

### 分数校准、宽度估计与多指标关联诊断

置信度与定位质量错位是共性问题。应对分两类，一是损失函数中引入交并比感知，如变焦损失， Usui 报告仅增加该损失即由 20.30% 升至 27.62% 。二是推理期分数校准器，如轻量分支直接预测交并比、独立多层感知器重排与外部校验模型， Calvet 报告多层感知器校准由 34.45% 升至 40.01% 。 Kim 等队在训练中预测交并比并在推理期用于校准， Khan 则用外部专用模型融合。

时间戳精修聚焦宽度而非中心。 Sugawara 指出检测网络常能找准中心却误估宽度，采用加权框融合集成不同时间分辨率特征的模型，并列最高 Recall1@0.7 但 Recall1@0.5 偏低，两指标差距更小，说明宽度估计改善而中心检测未显著提升。 Kang 的同架构大规模集成虽有提升，但两指标差距无清晰趋势，提示简单集成不如考虑时间分辨率关键。

为检验开发集选型能否迁移及高阈值瓶颈何在，下图将评测集 Recall1@0.7 分别与开发测试集同指标、评测集低阈值指标及平均精度对比。虚线为 y = x 参考，红点为基线，右图灰点为少于 10 个预测的系统，有助于定位宽度估计与多区间预测短板，理解高分段差距拉大的含义。

[![原论文 Figure 3：Recall1@0.7 on the evaluation dataset and other metrics.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f411fe2cdc49/figure-3.png)

*论文图 3：评测集主指标与开发集分数及低阈值与平均精度的关联（原论文 Figure 3）。*

图面显示左图横轴为评测集 Recall1@0.7 ，纵轴为开发测试集同指标，点群紧贴 y = x ，表明两分布域偏移有限，开发集选型具有迁移价值。中图纵轴为评测集 Recall1@0.5 ，点群位于 y = x 上方且差距随分数增大，说明高阈值仍有宽度精度空间。右图纵轴为平均精度，同样随分数增大偏离 y = x ，灰点系统性偏低，表明预测多个区间仍具挑战。

### 假设边界、复现前提与工程选型建议

结论成立依赖特定前提。查询为英文自由文本，录音为 1 - 5 分钟 YouTube 类真实音频，主指标只看首位预测交并比 ≥ 0.7 ，多参考时刻下仍只要求命中其一。会议、播客超长、远场噪声、中文查询、重叠语音密集场景均未单独评测，跨域泛化与鲁棒性不在本次证据内，不宜外推至任意长音频。

部署条件亦未验证。基线与参赛系统多为离线整段推理，原文未披露因果流式、分块延迟、前瞻、实时率与显存占用。音频大语言模型需沿序列维度压缩特征以处理长音频，压缩损失与微调成本未量化。自动指标与人工听感的关系未报告，缺少听众数与置信区间的听测，选型时不宜将神经代理分数等同于用户体验。

复现需严格对齐划分与脚本。训练用 development-training ，选择用 development-validation ，报告用 development-testing 与 100 条评测集，匹配与插值遵循官方评测脚本。超参与损失权重、两层结构与 AdamW 配置已披露，预提取特征分发可免音频下载。原文提及基线实现链接与系统技术报告，本次未验证其当前可达与权重下载方式，运行时环境与随机种子等细节需以原文配方为准。

工程上可优先替换更强音频文本编码器如 M2D-CLAP 与 LAION-CLAP 等，再升级至 UVCOM 或 CG-DETR 类检测网络并引入交并比感知损失与分数校准分支。若高阈值落后于低阈值，应考虑多时间分辨率特征的加权框融合以改善宽度估计。合成数据宜做预训练增强并务必在真实验证集选型，避免仅在合成验证上调优导致的迁移失效。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：特征窗 1 秒、步移 1 秒，文本与音频嵌入均为 768 维，5 分钟录音对应约 300 帧，检测查询数 10 ，采样率与延迟及 RTF 原文未披露
- **训练与评测数据**：Clotho-Moment 合成 51,240 条 1 分钟录音 44,261 条描述，CASTELLA 人工标注 1,862 条录音 120 小时 3,881 条描述，评测集 100 条 1 - 5 分钟录音 177 条查询，英文描述平均 7.8 词
- **算力与训练耗时**：原文未披露 GPU 与 TPU 型号数量及训练耗时，仅披露优化器为 AdamW 、批大小 32 、训练 200 轮
- **核心超参数与配置**：两层编码器与两层解码器，隐层 256 ，8 个注意力头，前馈 1,024 ，学习率 10-4 ，批大小 32 ，候选数 10 ，损失含 L1 与广义交并比及交叉熵
- **推理速度与部署开销**：10 个候选按置信度排序，首位计主指标，全部计平均精度，RTF 与显存及 TTFA 原文未披露
- **开源产物与协议状态**：原文提及基线实现链接与预提取 MS-CLAP 特征及评测脚本分发安排，当前可达性与权重获取方式原文未充分说明
- **附录与补充材料要点**：无独立附录，正文含合成与真实差距讨论、指标关联分析与系统报告引用，许可限制原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 6.6/10 | 技术严谨 6.4/10 | 实验充分 8.2/10 | 清晰度 7.0/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 7.6/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-72`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Munakata_72.pdf)
- Track：P1-6

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首次形式化音频时刻检索的输入输出与IoU判定及Recall1与mAP协议，并以官方评测脚本保证可比性。

- 核心优势：构建51240合成与1862录音约120小时人工标注互补体系，另采100录音评测集并分发预提取特征。

- 核心优势：组织21队59系统元分析，以队内对照量化特征替换与校准增益并保留免训练失效等负结果。

- 主要短板：评测集仅100个录音177条查询且未报告置信区间与显著性检验，部分mAP按少于10个预测计算可比性受限。

- 主要短板：结论仅限1-5分钟英语查询，未验证更长录音多语言密集重叠与实时约束，合成到真实迁移仍需真实验证。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
