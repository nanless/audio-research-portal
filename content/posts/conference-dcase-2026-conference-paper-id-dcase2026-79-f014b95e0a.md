---
title: "Exploring Pretrained Audio-Text Encoders for Audio Moment Retrieval: DCASE 2026 Task 6"
date: 2026-11-28
draft: false
description: "针对长录音中按文字描述预测起止时间的问题，本文在冻结 AM-DETR 定位头下系统比较多种预训练编码器与拼接集成，并以双 CLAP 集成加两阶段训练在 CASTELLA 测试集上取得 R1@0.7 为 26.43 ，接近两阶段参考 13.59 的两倍，代价是多编码器拼接与合成预训练带来的存储与计算开销。"
tags: ["模型融合", "多模态学习", "环境声", "音频时间定位"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "换编码器能否让长音频时刻检索定位更准"
paper_digest_original_title: "Exploring Pretrained Audio-Text Encoders for Audio Moment Retrieval: DCASE 2026 Task 6"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-79"
paper_digest_workbench_source_sha256: "bdc0c8a2c8a92be6ccdafb386e9e0b6dab416612bb9b484dab5d25fb85e2851f"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Chunarkar_79.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频时间定位"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对长录音中按文字描述预测起止时间的问题，本文在冻结 AM-DETR 定位头下系统比较多种预训练编码器与拼接集成，并以双 CLAP 集成加两阶段训练在 CASTELLA 测试集上取得 R1@0.7 为 26.43 ，接近两阶段参考 13.59 的两倍，代价是多编码器拼接与合成预训练带来的存储与计算开销。"
paper_digest_reader_sections: [{"heading":"长录音中按文字描述定位时刻为何比短片段排序更难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结编码器加可训练定位头走通切分编码到边界回归","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"四种预训练编码器与拼接集成的参数量取舍","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"合成预训练加真实微调与掩蔽增强的训练边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"双 CLAP 集成在两阶段下达到 26.43 而单阶段下四编码器集成反超","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提代价与未验证的部署边界","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Electrical Engineering, National Tsing Hua University, Taiwan"],"name":"Snehit Chunarkar"},{"affiliations":["Electronics and Communication Engineering, SRM University, Chennai, India"],"name":"Krishnagiri Hamza"},{"affiliations":["Department of Electrical Engineering, National Tsing Hua University, Taiwan"],"name":"Chi-Chun Lee"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"0cf34890b4962f2afb08c93f004d3c14bafdb7d69efb227b24a58bd5d4c45dd7","url":"/audio-research-portal/client/papers/2026-11-28/conference-f014b95e0a18f317ffb6e538/citation.bib"},"citation.json":{"sha256":"7675373984e11e7e4152834a642c8de7f57f86f0094b5a88f86ae0ab24f6394d","url":"/audio-research-portal/client/papers/2026-11-28/conference-f014b95e0a18f317ffb6e538/citation.json"},"citation.ris":{"sha256":"d0aa8b4ad2ce184ea5b1c12279c40c7ce8c352e026426340edafc3cd6b5b2988","url":"/audio-research-portal/client/papers/2026-11-28/conference-f014b95e0a18f317ffb6e538/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"fc1f02efc39a057e8df4206741e736b308d16a600c2fbf6fc1a08a3501088463","url":"/audio-research-portal/client/papers/2026-11-28/conference-f014b95e0a18f317ffb6e538/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-79"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Chunarkar_79.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "9de3576b73db832b759949333f7787838d60f9a29169b6069deb58ac624a0ddb"
paper_digest_api_reader_plan_sha256: "3898c78255d431f47d1077dcc4709c4944186921dc4f434eb7fa5b2aa8f1b652"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "909d0198f5063cbf13fc2270bb760b19ccd2d1a1e830f1851847322c4d578944"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0c2baca77165eb5a871f2d1a8af1ca6172e6b7081b3561403913dcea80755aad"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "34cf63469d35fce1d505ff465a10cfc3442437b9cacd50354f4184fe6b8fdb6a"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"}]
paper_digest_primary_method: "模型融合"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 换编码器能否让长音频时刻检索定位更准

> 英文题目：*Exploring Pretrained Audio-Text Encoders for Audio Moment Retrieval: DCASE 2026 Task 6*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-79`
> Track：P1-14



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Chunarkar_79.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-research-portal/papers/?concept=task.temporal-grounding)
- **研究方法**：[模型融合](/audio-research-portal/papers/?concept=method.model-combination)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **信号**：[环境声](/audio-research-portal/papers/?concept=signal.environmental)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 5.8/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Snehit Chunarkar：Department of Electrical Engineering, National Tsing Hua University, Taiwan
- Krishnagiri Hamza：Electronics and Communication Engineering, SRM University, Chennai, India
- Chi-Chun Lee：Department of Electrical Engineering, National Tsing Hua University, Taiwan

## 📌 核心摘要

**问题与瓶颈：** 音频时刻检索要求根据一条自由文本查询，在一段 1 分钟至 5 分钟的长录音中预测对应时刻的开始与结束时间戳，输入为长音频与自然语言，输出为时间区间而非片段排序。现有主流路线沿用 AM-DETR 基线，以 MS-CLAP 提取音频与文本特征，再经跨模态 Transformer 完成边界回归，但编码器选择对音频语言任务影响显著，而基线未系统比较不同预训练编码器的效果。长音频的时间结构若被压缩为单一全局向量会丢失细粒度定位信息，而逐秒建模又对跨模态对齐与长程上下文提出更高要求。这一缺口使检索精度受限于特征表达，成为制约 CASTELLA 这类真实长音频数据的瓶颈。

**核心思路与方法架构：** 与最接近的 MS-CLAP 基线相比，本文保留 AM-DETR 检索头不变，仅将冻结的音频与文本编码器替换为 M2D-CLAP、LAION-CLAP、BEATs 与 T5 编码器并做特征拼接融合，辅以训练期帧掩码与交并比损失直击特征与定位短板。系统将长录音切分为无重叠的 1 秒片段，1 分钟对应 60 个向量，5 分钟对应 300 个向量，各片段经冻结编码器离线抽取为一个向量，堆叠为 \(T \times D\) 矩阵，其中 \(T \in [60, 300]\) 为片段数，\(D\) 为编码器输出维度，并为每帧追加一个从 0 至 1 线性递增的二维位置向量以保留时序。文本查询经冻结文本编码器得到嵌入后，与音频序列经跨注意力 Transformer 融合，再由解码器预测多个以中心与宽度表示的候选时刻及置信度分数，以 L1 损失、广义交并比损失与分数交叉熵联合训练，其中 M2D-CLAP 约 89M 参数并接受 16 kHz 音频，LAION-CLAP 约 158M 参数并接受 48 kHz 音频，BEATs 约 90M 参数，T5 仅用 Base 版编码器块约 109M 参数，所有编码器全程冻结，集成时仅调整投影层输入维度。

**关键实验与核心代价：** 在 CASTELLA 测试集的两阶段训练下，M2D-CLAP 与 LAION-CLAP 集成模型 M5 的 Recall1@0.7 为 26.43，高于两阶段 MS-CLAP 基线 M1 的 13.59，同一设置下 M5 的 Recall1@0.5 为 43.21，高于基线的 25.61，平均精度均值 mAP 平均为 19.49，高于基线的 12.06。单一编码器中 M2D-CLAP 最强，其两阶段 Recall1@0.7 为 25.39，高于基线的 13.59，而仅在 CASTELLA 上训练时四编码器集成 M8 的 Recall1@0.7 为 18.63，高于同设置下 M2D-CLAP 单编码器的 12.32，两阶段预训练使各配置普遍大幅提升，证实大规模合成数据 Clotho-Moment 预训练的收益。主导收益来自编码器替换与两阶段策略，集成在有预训练时边际收益收窄，两阶段下四编码器 M8 的 24.57 低于双 CLAP 集成的 26.43 即为明证。代价方面 AM-DETR 可训练参数仅 7.05 M 至 7.84 M，编码器冻结并离线抽取特征，原文未披露训练与推理时长及实时率等部署成本。

**适用边界与深读导览：** 结论成立前提为 1 分钟至 5 分钟长音频、冻结编码器加离线特征与两阶段微调流程，未覆盖强噪声、重叠事件密集场景与流式实时部署，也未验证编码器解冻或轻量适配的效果。帧掩码与交并比损失的独立贡献未见消融量化，mAP@0.75 一列中 M8 的 18.13 高于 M5 的 17.96，不宜将 M5 表述为全部精度指标最优。欲深究逐秒切分与位置编码、跨注意力融合与候选回归及两阶段对照，可查阅下文方法概述和架构与实验结果章节的表格与分析。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/Snehitc/AMR-encoder-exploration> — 链接可访问（HTTP 200）

- 论文所列链接：<https://zenodo.org/records/20770460> — 链接可访问（HTTP 200）

- 论文所列链接：<https://zenodo.org/records/20772071> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长录音中按文字描述定位时刻为何比短片段排序更难

音频时刻检索要求系统在 1 分钟到 5 分钟的长录音中，根据一句自由文本描述直接预测目标事件的开始与结束时间。常规音频检索只需对已切好的短片段排序，而这里输入是连续未切分的长波形，输出是时间轴上的区间，系统必须同时理解文字语义与声音内容，并在分钟级时长内保持细粒度时间分辨。这类能力对应监控回看、赛事索引、会议摘要与档案无障碍检索等需求，也因此需要兼顾长时上下文建模与跨模态对齐。

评测以交并比阈值下的召回与平均精度为准。预测区间与人工标注区间的交并比超过 0.5 或 0.7 才算命中，首位候选命中的比例记为 R1@0.5 与 R1@0.7，不同阈值下的平均精度记为 mAP。阈值从 0.5 提高到 0.7 时，对边界误差的容忍显著收紧，因此 R1@0.7 是 DCASE 2026 个任务 6 的首要排序依据，更能反映定位精度。平均精度同时考察排序与定位质量，可补充观察不同严格程度下的稳定性。

参考流程 AM-DETR 将长录音切成无重叠 1 秒片段，逐片段提取音频特征并堆成按时间排序的二维矩阵，再与文本查询特征做跨模态交互，最后回归多个候选区间。为保留时间结构，矩阵中每一行对应 1 秒片段，并附加从 0 到 1 线性递增的二维位置向量，使模型能够区分事件在分钟级录音中的相对先后。原有实现采用 MS-CLAP 同时提取音频与文本特征，但编码器选型对音频语言任务影响显著，而这一维度此前缺少系统比较，长音频的时间上下文建模与合成到真实的领域差异也未得到充分验证。

本文的核心问题是，在保持 AM-DETR 定位头不变的前提下，更换预训练音频与文本编码器能否带来稳定增益，集成多种表示与两阶段训练又分别贡献多少。作者比较 M2D-CLAP、LAION-CLAP、BEATs 音频编码器与 M2D-CLAP、LAION-CLAP、T5 文本编码器，辅以训练时特征掩蔽与交并比辅助损失，试图在 CASTELLA 真实长录音上实现可靠的时间边界回归。编码器在全部实验中保持冻结并离线提取特征，集成时沿特征维度拼接后再送入定位头，从而分离表示质量与定位能力的影响。

### 冻结编码器加可训练定位头走通切分编码到边界回归

要一次看清数据如何从长波形变为时刻区间，可先沿原图从左向右追踪切分、编码与回归 3 段。左侧展示时间切分逻辑，中间展示音频与文本两路编码，右侧展示候选区间输出与人工标注的对照，冻结与可训练的边界也在图中标出。理解这条主线后，再看张量形状与帧率变化会更顺畅。

[![原论文 Figure 1：(a) Audio preprocessing: Windowing long audio, (b) Architecture: Audio Moment DETR](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/2d9c5e48b665/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/2d9c5e48b665/figure-1.png)

*论文图 1：长音频逐秒切分与双编码器加定位头架构示意含冻结可训练标记与示例输出（原论文 Figure 1）。*

原图左侧上方为 0 秒到 60 秒的长波形，青色波形上叠加红色虚线框与向右箭头表示逐秒滑动切分，下方将 0 到 4 秒与 58 到 60 秒的片段并排展示以示意无重叠切分。右侧蓝色为音频编码器，黄色为文本编码器，两者右上角均标有冻结符号，绿色 AM-DETR 标有可训练符号。示例查询为 An electronic bell rings ，输出 3 组开始、结束与分数，首位为 55.9297 秒到 59.6341 秒，分数 0.4702 ，与人工标注 55 秒到 59 秒接近，另两组分数明显更低。

以 1 分钟录音为例，端到端张量流可按序号追踪。第一步将波形切为 60 个无重叠 1 秒片段，帧率从波形采样率降为每秒 1 个向量。第二步每个片段经冻结音频编码器得到一个 D 维向量，堆叠为 \(T \times D\) 矩阵，此处 \(T\) 为 60 ，\(D\) 随编码器而变且原文未给出具体数值。第三步每个向量拼接从 0 到 1 线性递增的二维位置向量，以显式保留时间顺序，矩阵变为 \(T \times (D+2)\) 并存盘供后续直接读取。

第四步文本查询经冻结文本编码器得到语义向量，第五步音频序列与文本向量在 AM-DETR 中经跨注意力融合，解码器输出 \(K\) 个以中心与宽度表示的候选区间及置信分数。训练时仅更新 AM-DETR 内投影与变换器参数，编码器不参与梯度更新，推理时按分数排序取首位作为定位结果，示例中首位候选即命中电子铃声所在区间。

### 四种预训练编码器与拼接集成的参数量取舍

M2D-CLAP 约 89 M 参数，按 16 kHz 输入，将掩蔽建模 Duo 结构与语言音频对比预训练结合，兼顾迁移与零样本能力。LAION-CLAP 约 158 M 参数，按 48 kHz 输入，在 LAION-Audio-630K 大规模音频描述对上做对比学习，特征融合与关键词到描述增强是其训练特点。两者均可同时提供音频与文本分支，替换时保持跨模态交互方式不变，只改变表示来源。

BEATs 约 90 M 参数，采用声学分词器与变换器编码器迭代训练，本文使用 BEATs_iter3+ 以 AS2M 权重版本，侧重语义丰富的音频表示。T5 只取 T5-Base 约 109 M 参数中的编码器部分，用于从自然语言查询提取上下文文本向量。BEATs 与 T5 组合将纯音频自监督表示与纯语言模型表示配对，与 CLAP 类联合预训练形成互补对照。

集成时多编码器特征沿特征维度拼接后送入下游定位头，仅需改变音频与文本投影块首层输入维度以适配拼接长度。按原文统计，单编码器可训练量为 7.05 M 到 7.18 M ，双 CLAP 集成增至 7.45 M ，三编码器增至 7.45 M 到 7.58 M ，四编码器全集成增至 7.84 M 。参数增量主要来自投影层，编码器本身冻结且离线提取，代价更多体现在特征存储与拼接维度增大后的计算量。

信号规格方面，原文明确 1 秒无重叠切分与 60 到 300 个向量的时长对应关系，以及二维位置编码从 0 到 1 的线性设计，但各编码器输出维度 \(D\) 、 BEATs 与 T5 的输入采样率、码率与通道细节原文未披露。不同采样率意味着实际需重采样到 16 kHz 或 48 kHz ，这部分预处理开销与重采样失配风险在文中未量化，是复现时需自行补齐的环节。

### 合成预训练加真实微调与掩蔽增强的训练边界

#### 切片与两阶段衔接

训练分两阶段进行。先在 Clotho-Moment 合成集上预训练，该集将 Clotho 前景事件叠加到 Walking Tour 背景上，训练 32,694 条、验证 4,918 条、测试 6,649 条，规模大且标注完备，可让定位头先学到通用的时刻定位先验。再在 CASTELLA 真实集上微调，该集为 1 分钟到 5 分钟的人工标注长录音，训练 1,009 条、验证 213 条、测试 640 条，两阶段均在每个片段向量后拼接相同的二维位置编码，以保持位置假设一致。长录音按不重叠 1 秒切片堆叠为按时间排序的二维特征矩阵，1 分钟到 5 分钟对应 60 帧到 300 帧，每帧为一个片段向量，位置向量取值从 0 到 1 线性递增，从而保留时序结构而不压缩为单一整体向量，跨合成到真实的域偏移下仍可对齐。

所有实验共享同一组超参数，Adam 优化器学习率设为 \(1 \times 10^{-4}\) ，权重衰减设为 \(1 \times 10^{-4}\) ，训练 200 轮。训练时随机掩蔽 15% 片段级音频特征向量，以提升对局部缺失与含扰动输入的稳健性。编码器在全部实验中冻结，仅做离线特征提取，长录音对应的 \(T \times D\) 矩阵存盘后直接作为 AM-DETR 输入，避免跨轮重复计算。掩蔽迫使定位头利用剩余上下文推断边界，离线存盘将重采样与编码开销一次结清，预训练用合成集训练与验证划分，微调则用真实集训练与验证划分，最终分数均在真实集测试划分计算。

#### 集成拼接与损失分工

集成分支将多编码器特征沿特征维度拼接后再送入下游头，仅需按拼接后长度调整音频与文本投影块首层输入维度，可训练量维持在 7.05 M 到 7.84 M 之间，音频重采样分别适配 16 kHz 与 48 kHz 。音频侧由 M2D-CLAP 、LAION-CLAP 与 BEATs 独立提取，文本侧由 M2D-CLAP 、LAION-CLAP 与 T5 独立提取，M2D-CLAP 约 89 M 参数，LAION-CLAP 约 158 M 参数，BEATs 约 90 M 参数，T5 基础型仅用编码器块约 109 M 参数，冻结后定位头仍为轻量。

定位头沿用 AM-DETR ，经跨注意力融合音频序列与文本向量后，解码器预测 \(K\) 个候选区间。优化目标组合 L1 损失、广义交并比损失与分数交叉熵损失，另加入交并比辅助损失以强化边界回归。L1 约束中心与宽度的绝对误差，广义交并比关注区间重叠的几何形状，分数损失区分正负候选，三者共同驱动梯度只更新定位头。候选以中心与宽度表示并附置信分数，广义交并比在无重叠时仍能给出几何梯度，分数排序选出最终起止时刻。推理为单遍前向按分数排序，无自回归展开与流式分块细节，延迟与吞吐原文未披露。

### 双 CLAP 集成在两阶段下达到 26.43 而单阶段下四编码器集成反超

评测统一在 CASTELLA 测试划分上进行，训练只用训练加验证划分，测试划分仅用于最终打分。主要排序依据为 R1@0.7 ，同时报告 R1@0.5 与不同阈值下的 mAP ，数值越大越好。比较时需注意两类训练规模差异，Clotho-Moment 预训练带来数万条合成先验，而仅用 CASTELLA 训练时可用数据仅 1000 条量级，编码器冻结且特征离线提取保证了编码器对比的公平性，差异主要来自表示本身与两阶段策略。

#### 两阶段与单阶段的编码器对比

两阶段下 M2D-CLAP 单编码器 R1@0.7 为 25.39 ，相比同为两阶段的 MS-CLAP 参考 13.59 提升约 11.8 ，LAION-CLAP 为 21.97 ，BEATs 加 T5 为 19.97 ，均超过参考，说明编码器选型是首要因素。双 CLAP 集成 M5 进一步升至 26.43 ，为全部配置中 R1@0.7 最高，并在 mAP 平均上同样占优，而 mAP@0.75 最优为 M8 的 18.13 高于 M5 的 17.96 ，纳入 BEATs 与 T5 的四编码器 M8 在 R1@0.7 回落至 24.57 ，表明在有合成预训练时额外多样性未带来进一步 R1@0.7 增益。

仅用 CASTELLA 训练时格局反转，四编码器 M8 以 18.63 居首，双 CLAP 集成 M5 为 13.81 ，M2D-CLAP 单编码器仅 12.32 ，LAION-CLAP 与 BEATs 加 T5 分别为 7.42 与 8.02 。此时更广的集成有助于弥补训练数据不足，而预训练充分时这种补偿作用减弱，呈现数据增强与特征多样性之间的互补关系。单阶段下部分配置低于 MS-CLAP 参考 10.32 ，如 M3 的 7.42 与 M7 的 7.28 ，构成明确的未胜出项。

#### 像素对照与结论边界

要直观比较预训练带来的整体抬升，可看原图按模型编号并排的灰青双柱，灰柱为仅用 CASTELLA 训练，青柱为经 Clotho-Moment 预训练再微调，纵轴为 R1@0.7 分数，柱顶标有具体数值。横轴为 M1 到 M8 ，图例区分两种训练策略，柱高差异直接反映预训练增益与编码器差距。

[![原论文 Figure 2：Model Performance on R1@0.7 Score: CASTELLA only vs PT: ClothoMoment FT: CASTELLA](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/2d9c5e48b665/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/2d9c5e48b665/figure-2.png)

*论文图 2：八组模型在两种训练策略下 R1@0.7 对比灰柱单阶段青柱两阶段（原论文 Figure 2）。*

核对纵轴与柱顶数值可见青柱在全部 8 组中均高于灰柱，抬升幅度因编码器而异。M2 从 12.32 升至 25.39 ，M3 从 7.42 升至 21.97 ，M4 从 8.02 升至 19.97 ，M7 从 7.28 升至 22.79 ，增幅均超过 1 倍。最高青柱为 M5 的 26.43 ，次高为 M2 的 25.39 与 M6 的 25.17 ，灰柱中最高为 M8 的 18.63 ，显著高于同组其他灰柱。原文未报告方差与置信区间，掩蔽比例与交并比损失缺少单独消融，最优 M5 需同时运行两种 CLAP 编码器，可训练量从 7.18 M 增至 7.45 M ，存储与计算代价均高于单编码器方案。

### 结论成立的前提代价与未验证的部署边界

#### 指标含义与增益边界

最强结论 26.43 成立于特定前提，编码器冻结、离线特征、200 轮两阶段训练、15% 掩蔽与组合损失共同作用，评测仅覆盖 CASTELLA 测试划分 640 条长录音。若更换采样率处理、掩蔽比例或损失权重，结果可能偏移，而原文未给出这些超参数的敏感性分析，因此增益不能直接外推到其他时长分布或语言风格的数据。排序依据为交并比阈值 0.7 下的首位召回率，另报阈值 0.5 下的首位召回率与阈值 0.5 和 0.75 下的平均精度均值，四者均在同一测试划分计算，阈值越严格越考验边界重合程度，两阶段 M2D-CLAP 单编码器从 12.32 提升到 25.39 即体现预训练增益。

代价与负结果同样明确，双 CLAP 集成与四编码器集成以特征拼接换取精度，需维护多套预训练权重并支付重采样与存储成本，可训练量分别达到 7.45 M 与 7.84 M 。四编码器在两阶段下未超越双 CLAP ，LAION-CLAP 单用在单阶段下低于参考，说明并非编码器越多越好，预训练充足时多样性收益递减。音频侧 M2D-CLAP 约 89 M 参数适配 16 kHz ，LAION-CLAP 约 158 M 参数适配 48 kHz ，BEATs 约 90 M 参数，文本侧 T5 基础型仅用编码器块约 109 M 参数，冻结后定位头仍为轻量，拼接仅改变投影首层维度，单编码器中 M2D-CLAP 始终最强而两阶段高出参考 11.8 。

#### 复现核查与选型取舍

复现方面，论文脚注给出代码与 Clotho-Moment 及 CASTELLA 特征链接，本次收到的资源记录显示 3 条第三方链接当前可达，但类型均标为第三方，未确认为作者维护，因此不宜直接表述为作者已开源。权重下载、运行环境与可直接运行状态原文未披露，复现需自行补齐编码器版本、重采样与投影层维度修改，并以阈值 0.7 下的首位召回率为首要对照，不宜用主观听感替代区间重叠指标。无预训练时四编码器集成达 18.63 而单编码器仅 12.32 ，该反转说明有限真实数据下多样表示可弥补数据不足，预训练后该补充作用减弱。

工程选型上，若具备合成预训练条件，优先采用 M2D-CLAP 单编码器或双 CLAP 集成以兼顾精度与成本，若仅有 1000 条量级真实数据，可考虑纳入 BEATs 与 T5 的更广集成以弥补数据不足。未来可探索细粒度融合与轻量适配器微调冻结编码器，但这些方向在本文中未验证，试听或演示页原文未提供，选型时应以自动指标与计算预算为依据，掩蔽与交并比辅助损失则作为边界稳健性的配套手段。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：M2D-CLAP 按 16 kHz 输入， LAION-CLAP 按 48 kHz 输入， 长录音切为无重叠 1 秒片段， 1 分钟到 5 分钟对应 60 到 300 个片段向量， 每个向量附加从 0 到 1 线性递增的二维位置向量， BEATs 与 T5 输入规格原文未披露， 码率与 RTF 原文未披露
- **训练与评测数据**：Clotho-Moment 合成集训练 32,694 条验证 4,918 条测试 6,649 条， CASTELLA 真实长录音训练 1,009 条验证 213 条测试 640 条， 每条 1 分钟到 5 分钟并带文字描述与起止时间标注， 预训练用 Clotho-Moment 训练加验证划分， 微调用 CASTELLA 训练加验证划分， 评测用 CASTELLA 测试划分
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量与训练耗时， 仅说明编码器冻结并离线提取特征以减少重复计算， 训练与评测硬件原文未披露
- **核心超参数与配置**：Adam 优化器学习率 1 × 10-4 与权重衰减 1 × 10-4 ， 训练 200 轮并在预训练与微调保持一致， 训练时随机掩蔽 15% 片段级音频特征向量， 损失为 L1 损失加广义交并比损失加分数交叉熵损失并辅以交并比损失， AM-DETR 可训练参数量 7.05 M 到 7.84 M
- **推理速度与部署开销**：原文未披露 RTF 与延迟及显存占用， 推理时解码器输出 K 个以中心与宽度表示的候选时刻加置信分数， 集成配置仅增加投影层首层输入维度， 参数量随拼接长度增至 7.84 M
- **开源产物与协议状态**：论文脚注给出代码与两份特征链接， 本次资源核验显示三条第三方记录当前可达， 但类型均标为第三方且归属未确认为作者维护， 因此不作作者已开源断言， 权重下载与可直接运行状态原文未披露
- **附录与补充材料要点**：原文未披露附录证明与补充消融及许可限制， 失效案例未系统总结， 掩蔽比例与交并比损失权重缺少单独消融， 方差与置信区间原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.2/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 5.8/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-79`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Chunarkar_79.pdf)
- Track：P1-14

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：M5两阶段Recall1@0.7达26.43近乎翻倍于基线M1的13.59且多编码器配置一致超越基线。

- 核心优势：Clotho-Moment预训练使8种组合R1@0.7普遍大幅提升如M2从12.32升至25.39证实策略收益。

- 主要短板：训练期帧掩码与交并比辅助损失均无去除对照无法确认其独立定位贡献。

- 主要短板：正文称M5在mAP@0.75领先所有系统与表内M8的18.13高于M5的17.96相矛盾。

- 主要短板：批量大小学习率调度损失权重候选数K硬件与随机种子等关键复现配置均未说明。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
