---
title: "Quantizing Whisper: How Design Choices Affect ASR Performance"
date: 2026-11-27
draft: false
description: "论文针对大语音模型在受限设备上难部署的问题建立四库统一评测，发现 GPU 上 Quanto 动态 int8 在压缩 57% 的同时反超基线，而低比特虽最高压缩 71% 却在困难语音上明显退化。"
tags: ["模型量化", "高效推理", "语音", "语音识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "量化 Whisper 设计选择如何影响精度速度与压缩"
paper_digest_original_title: "Quantizing Whisper: How Design Choices Affect ASR Performance"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.5"
paper_digest_workbench_source_sha256: "56d742a3440a604933bad988e4577ddb5ee05794e347d12b3f63fb668870c024"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.5/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.5.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文针对大语音模型在受限设备上难部署的问题建立四库统一评测，发现 GPU 上 Quanto 动态 int8 在压缩 57% 的同时反超基线，而低比特虽最高压缩 71% 却在困难语音上明显退化。"
paper_digest_reader_sections: [{"heading":"大语音模型在受限设备上为何难兼顾精度与开销","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四库统一评测如何让精度延迟压缩结果可比","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"粒度方案与位宽以何种方式塑造量化误差","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"Whisper-small 在干净与困难语音上呈现的分化结果","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"低比特与小模型为何在困难语音上退化更快","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提代价与复现核对要点","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Copenhagen Business School, Copenhagen, Denmark"],"name":"Arthur Söhler"},{"affiliations":["Danske Bank, Copenhagen, Denmark"],"name":"Julian Irigoyen"},{"affiliations":["Jabra (GN Group), Copenhagen, Denmark"],"name":"Andreas Søeborg Kirkedal"}]
paper_digest_abstract_sha256: "65bb255e18bd3aff3a2fd0d24ca242154684c3a4aeb8583b56d0f258385d0b53"
paper_digest_sidecars: {"citation.bib":{"sha256":"08089fac2c8bf8fcfb2db6762d2f2ff3290307ce78cab1c8037bd7bc02950128","url":"/audio-research-portal/client/papers/2026-11-27/conference-7a30c838c4b2b92920f0ad45/citation.bib"},"citation.json":{"sha256":"dcb041e4a139da3114de1de37ff0eb740a0df389193b6bda17b5549859054a7f","url":"/audio-research-portal/client/papers/2026-11-27/conference-7a30c838c4b2b92920f0ad45/citation.json"},"citation.ris":{"sha256":"aab7c5b947458395c699681f62c9da7297893d029c395f727de1bf97cfcc0eba","url":"/audio-research-portal/client/papers/2026-11-27/conference-7a30c838c4b2b92920f0ad45/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b7268233ebd1fcf1c9a22ecb1e4cc95b72d0022a5317c5f717cefe6c013c4557","url":"/audio-research-portal/client/papers/2026-11-27/conference-7a30c838c4b2b92920f0ad45/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.5"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.5"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.5"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.5/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.5.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "6bd04f6ed5307fa800c3d8c646b46e6146e2dbb2a82ec8f06970dad0a38e0dc8"
paper_digest_api_reader_plan_sha256: "e9a12d1fedb09fa4717ca1418692d5d42b80da2e237ca67d0826be965b38be9b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1fc642b8c5494af5d2fb9478610fd0ea94dfab9d7952e43ee8c813a18c8f4897"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "eed69044be028d6a721c45b41ab8cdfcb2e269e2db1ea0d3c620a72c2311a90c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "137bbdd469cf5a7c84aa3e0df9415e3518c47906c818e8ecb406f873758ee909"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "7d362dfaaf874e5108158be2a79a0cf1f23ceb610f83ce8adb8126da90776444"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "模型量化"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 量化 Whisper 设计选择如何影响精度速度与压缩

> 英文题目：*Quantizing Whisper: How Design Choices Affect ASR Performance*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.5`
> DOI：`10.18653/v1/2026.speakable-1.5`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.5/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.5.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型量化](/audio-research-portal/papers/?concept=method.quantization)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究重点**：[高效推理](/audio-research-portal/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 5.3/10 | 技术严谨 6.2/10 | 实验充分 6.7/10 | 清晰度 7.0/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.4/10

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Arthur Söhler：Copenhagen Business School, Copenhagen, Denmark
- Julian Irigoyen：Danske Bank, Copenhagen, Denmark
- Andreas Søeborg Kirkedal：Jabra (GN Group), Copenhagen, Denmark

## 📌 核心摘要

**问题与瓶颈：** 自动语音识别需将连续语音声学信号转为文字，Whisper-small 这类 244M 参数 Transformer 模型精度高但显存与算力开销大，在算力与内存受限的低资源与端侧场景难以部署与系统评测。训练后量化（PTQ）无需重训练即可将 32 位浮点权重与激活映射为低精度格式，是兼顾效率与易用性的压缩路径，但已有低比特与离群值处理工作多集中于视觉与大语言模型，对 Whisper 这类语音 Transformer 的影响尚未充分厘清。尤其层归一化（LayerNorm）、Softmax 与 GELU 等操作对低精度敏感且激活常呈重尾分布，不同库的实现支持与额外开销会实质改变部署时的精度、速度与压缩表现，缺少统一协议下的跨库对照就难以判断设计选择的效果。

**核心思路与方法架构：** 本文不提出新量化算子，而是以 Whisper-small 为对象，在同一预处理、划分、解码与计时协议下并行比较 PyTorch、Optimum-Quanto、HQQ 与 bitsandbytes 支持的方案、方法、粒度与位宽组合，并用 Whisper-base 与 Whisper-tiny 做趋势验证。单条 LibriSpeech 朗读语音经标准 WhisperProcessor 转为输入特征，不足 30 s 的语音补零至固定 30 s 窗后送入参数冻结的编码器解码器做离线整句生成，输出转写文本，再以词错误率（WER，越低越好 ↓）与字符错误率（CER，越低越好 ↓）衡量精度，以生成耗时除以音频时长的实时率（RTF，越低越好 ↓）衡量速度，并以相对 32 位浮点基线的缩减比例衡量压缩。对照维度包括运行时计算缩放的动态量化与依赖校准预定缩放的静态量化，零点居中的对称量化与平移零点的非对称量化，整张量共享缩放的每张量量化、每通道独立缩放的每通道量化及其折中的每组量化，位宽覆盖 int8、int4、int3、nf4 与 fp8，静态校准采用与测试同管线的随机 10% 评测子集。库覆盖各有侧重，PyTorch 提供 CPU 原生动态 int8，Quanto 支持 CPU、GPU 与 MPS 上的整数与低精度浮点格式，HQQ 基于半二次优化并允许配置组大小，bitsandbytes 提供仅 GPU 的 nf4 及可选双重量化，相对 RTF 差异在固定窗设置下可比，但作者明确其主要反映相对快慢而非端侧绝对时延。

**关键实验与核心代价：** 在 LibriSpeech test-clean 与 test-other 上，GPU 上 Quanto 动态 int8 的 WER 为 3.41 与 10.65，分别低于基线 3.48 与 11.88，CER 为 0.97 与 3.29，分别低于基线 1.02 与 3.62，同时尺寸缩减 57%。CPU 上 PyTorch 动态 int8 的 RTF 为 0.077，低于基线 0.121，原文报告快 36.4%，尺寸缩减 57%，但 WER 为 3.72 与 13.67，分别高于基线 3.48 与 11.88。更激进压缩伴随鲁棒性代价，CPU 上 HQQ 动态 int4 尺寸缩减 69% 而 WER 为 3.52 与 14.09，GPU 上 BNB nf4 尺寸缩减 70% 但 test-other WER 为 13.49，高于基线 11.88，HQQ int3 尺寸缩减 71% 但 test-other WER 为 12.93，高于基线 11.88，而 CPU 上 Quanto 静态 int8/fp8 的 WER 为 5.95 与 15.92，RTF 为 0.169，高于基线 0.121，呈现精度与速度双重退化。对 Whisper-base 与 Whisper-tiny 仅用最强动态配置验证，趋势一致但低位宽退化更明显，如 base 上 Quanto 动态 int8 的 WER 为 5.10 与 14.72，分别高于基线 5.08 与 12.87，tiny 上 BNB nf4 的 WER 为 11.16 与 32.19，明显高于基线 7.60 与 23.69。主要代价是 GPU 上量化后 RTF 略有上升，如 Quanto 动态 int8 为 0.008，高于基线 0.006，且 8 位以下格式在 test-other 上误差扩大更快。本文只用 WER、CER 与 RTF 评价，未做人工主观听测，也不涉及 MOS 类代理指标。

**适用边界与深读导览：** 上述结论成立于英语朗读语音的 LibriSpeech test-clean 与 test-other、小尺寸 Whisper 家族成员及丹麦 HPC 固定 30 s 窗测量之下，未覆盖多语言、自发语音、口音、领域偏移及 Whisper-medium 与 Whisper-large，也未评估量化感知训练与 ONNX Runtime 导出栈，且跨模型验证省略了已明显落后的静态量化。8 位精度是作者建议在声学多变场景下为注意力与 LayerNorm 等敏感部件保留的安全下限，int3 与 nf4 只适合内存优先且可接受 test-other 退化的场景，需按设备与声学条件选用，而非跨场景通用。需深究量化公式与粒度权衡可看下文方法概述与背景，完整数值与设备差异可查实验结果中转录的 Table 2 与 Table 3 及原文 Figure 1 的相对趋势描述，部署取舍规则可对照讨论中的 Table 4 总结。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 大语音模型在受限设备上为何难兼顾精度与开销

#### 精度与部署的矛盾

大语音识别模型 Whisper 以多语言多任务预训练获得很强的转写精度，但其数亿参数带来显存与计算负担，在算力与内存受限的设备上难以直接部署与评测。论文聚焦这类低资源与端侧场景，指出若不压缩，强模型在实际中既难以运行，也难以系统评测。训练后量化因无需重训而成为现实选择，但不同工具的实现差异会实质影响速度与稳健性，需统一比较才能指导选型。

任务定义清晰，输入为英文朗读语音，输出为文本转写，主模型为 244M 参数的 Transformer 结构 Whisper-small。评测沿 3 个维度展开，精度用 WER （词错误率）与 CER （字符错误率）衡量，效率用 RTF （实时率因子）衡量，压缩用相对 32 位浮点基线的体积缩减比例衡量。只有同时观察三者，才能判断某种量化是否真正可用，而非只看单一精度数字。

已有路线分为无需重训的训练后量化与需额外训练的量化感知训练，前者在激进压缩下易掉精度，后者更稳但成本更高。更关键的物理与统计瓶颈在于 Transformer 中的 LayerNorm 、Softmax 与 GELU 对低精度敏感，激活常呈重尾分布，离群通道会放大误差。不同压缩库对这些算子的支持与额外开销不同，因此脱离具体工具与设备的单一精度数字难以指导部署，这是统一评测的动机。

#### 评测基准的构成

为暴露干净与困难声学条件下的差异，论文选用语料库 LibriSpeech 中的两个英文测试子集，其划分依据来自早期混合系统的词错误率排序，并兼顾说话人层面的性别均衡。下表给出两子集的时长与说话人构成，后续所有精度与延迟对比都基于同一划分展开，理解该构成有助于解释低比特为何更怕困难语音。

| Subset | Hours | Minutes/ | Female | Male | Total |
| --- | --- | --- | --- | --- | --- |
|  |  | speaker | speakers | speakers | speakers |
| test-clean | 5.4 | 8 | 20 | 20 | 40 |
| test-other | 5.1 | 10 | 17 | 16 | 33 |

表中 test-clean 为 5.4 小时 40 位说话人，test-other 为 5.1 小时 33 位说话人，前者代表较易任务，后者取自词错误率第三四分位区间，声学多样性更高。论文在两子集上同时报告词与字符错误率，正是为了检验压缩是否以牺牲困难条件下的稳健性为代价，这一视角贯穿后文的增量分析与跨模型验证。

### 四库统一评测如何让精度延迟压缩结果可比

#### 框架增量与信号流程

论文的实质增量不是提出新的量化算子，而在于建立跨库统一评测框架，将分散的工具选择放在同一测量协议下比较。保留的是预训练 Whisper 权重与标准解码流程，替换与对比的是压缩库与位宽组合，覆盖 PyTorch 与 Quanto 与 HQQ 与 bitsandbytes 4 种工具。位宽跨 int8 到 int3 与 nf4 及 fp8，方案跨动态与静态，方法跨对称与非对称，粒度跨逐张量与逐通道，这是此前单工具研究未同时做到的。

设想一段 1 秒英文朗读音频进入系统，先经标准 WhisperProcessor 转为模型输入特征，再送入编码器与解码器生成文本。原文未披露采样率与帧率步长与特征维度与码率，因此无法给出逐模块的张量形状与帧率变化，只能说明流程层面的汇合与拆分。已知的是模型采用固定 30 s 前端，不足时长零填充，因此 1 秒短句实际仍按 30 s 窗口推理，这直接抬高短句的绝对耗时，但相对比较仍有效。

#### 量化机制与执行边界

量化本质是将 32 位浮点权重与激活映射到低精度整数或浮点格式，内存近似按位宽除以 32 缩放，压缩比约为 32 除以位宽。粒度的含义是缩放因子共享范围，逐张量全层共用一个缩放，逐通道每输出通道独立缩放，逐组居中折中。动态在运行时按当前激活计算缩放，静态则提前用校准数据固定，对称以零为中心，非对称另设零点以适配偏置分布。

本研究无模型训练阶段，属纯冻结推理加量化参数确定，不更新 Whisper 权重。静态量化校准随机取全部评测数据的 10% 子集，并沿用同一特征提取流程，动态量化则在推理时实时计算缩放。跨模型验证仅沿用 Whisper-small 中最强的动态配置用于 Whisper-base 与 Whisper-tiny，不再做静态，因为静态在主体实验中已明显落后，继续穷举只会增加体量而不改变结论。

推理与部署路径分设备展开，计时仅围绕模型生成阶段，GPU 含同步等待，测前含预热，RTF 定义为总生成耗时除以音频总时长。库支持决定可运行设备，PyTorch 原生动态 int8 面向 CPU，Quanto 支持 CPU 与 GPU，bitsandbytes 仅面向 GPU，HQQ 支持可配组大小。所有测量固定于同一高性能计算设施，因此报告的延迟应理解为相对快慢，而非端侧设备的绝对延迟。

### 粒度方案与位宽以何种方式塑造量化误差

#### 粒度与方法的分工

粒度决定缩放因子能精细到何种程度。逐张量在整个张量上共用一个缩放，计算简单，量化与反量化开销小，但在分布差异大时易扭曲数值。逐通道为每个输出通道分配独立缩放，能更好保留通道间的细微差异，尤其契合权重近零中心分布的变换器结构，但需存储更多参数并付出额外计算。逐组将通道聚类后组内共享，是效率与精度的折中，HQQ 的组大小可配即属此类。

方法决定数值在量化区间内如何分布。对称量化以零为中心，适合零均值附近的权重，非对称引入零点平移，更适配非零中心的权重分布。论文还对照仅量化权重与同时量化权重加激活，前者主要缩小体积，后者同时牵动计算路径与精度。PyTorch 动态 int8 采用逐张量非对称，计算轻但表达灵活性低，Quanto 动态 int8 采用逐通道对称，精度高但开销大，这解释了两者在速度与精度上的分化。

粒度与方法需联合选择才能解释库间差异。逐张量偏向效率，逐通道偏向精度，而对称与非对称分别对应不同分布假设。论文把 4 个工具库放在同一预处理流程、数据集划分与计时协议下比较，使速度与精度的差异可归因于方案与粒度的实现，而非数据或解码流程不一致。困难语音下分布漂移更大，粗粒度与固定缩放更易失效，这为后文动态与静态的对比埋下伏笔。

#### 方案与位宽的权衡

方案决定缩放何时确定。静态提前用校准数据固定，理论上运行时开销小，应用固定缩放即可。动态在运行时按当前输入计算，理论上稍慢，但能适应分布漂移。在 Whisper-small 上实测与理论相反，静态既更慢又更不准，可能原因是 LayerNorm 与 Softmax 缺乏高效低比特实现，被迫反复解量化，抵消了固定缩放的收益。固定校准的缩放又难以应对困难语音的分布变化，导致精度进一步下滑。

位宽决定压缩强度与风险等级。8 位是实践中的可靠工作点，能在大幅压缩的同时保持稳健。低于 8 位后，int4 与 nf4 及 int3 虽能继续缩小体积，但对离群激活与声学变化更敏感，误差在困难条件下会快速放大。混合精度与离群保留等思路试图只对敏感维度保持高精度，但本研究限于各库已支持的配置，未穷举所有粒度与位宽组合，因此结论是结构化比较而非穷尽搜索。

执行过程进一步限定了结论边界。静态校准使用随机抽取的 10% 评测数据，且与测试采用相同特征提取流程。推理只对生成阶段计时，GPU 上同步后预热再测，输入按默认 30 秒前端补零，因此相对差异可比。跨模型验证只沿用小型模型上最强的动态配置，不再重复静态，正因静态在小型模型上已明显落后，避免以大量实验改变主要实践结论。

### Whisper-small 在干净与困难语音上呈现的分化结果

#### 公平性前提

评测公平性建立在统一协议上，所有配置共用同一预处理流程与数据集划分与批量大小与解码流程与硬件选择与计时方法。音频经标准 WhisperProcessor 转为输入特征，短句按固定 30 s 窗口补零后推理，RTF 只计生成阶段并经预热与同步。静态校准用 10% 评测数据，跨 CPU 与 GPU 分别计时，报告的延迟为同一设施下的相对值。精度方向为 WER 与 CER 越低越好，压缩为体积缩减越大越好，延迟为 RTF 越低越快。

下表集中呈现 Whisper-small 在 test-clean 与 test-other 上的最优动态与静态配置，含 CPU 与 GPU 两套基线，便于同设备内直接对比。每行给出两子集的词与字符错误率及实时率因子与体积缩减，动态标注为 dyn.，静态标注为 stat.，读者可先看同设备基线，再看各压缩行的精度损失与速度收益。

| Device/Method | WERc | WERo | CERc | CERo | RTF | Size Red. |
| --- | --- | --- | --- | --- | --- | --- |
| CPU |  |  |  |  |  |  |
| Baseline (fp32) | 3.48 | 11.88 | 1.02 | 3.62 | 0.121 | – |
| PyTorch int8 (dyn.) | 3.72 | 13.67 | 1.11 | 4.21 | 0.077 | 57% |
| HQQ int4 (dyn.) | 3.52 | 14.09 | 1.09 | 4.38 | 0.155 | 69% |
| Quanto int8/fp8 (stat.) | 5.95 | 15.92 | 1.83 | 5.03 | 0.169 | 57% |
| GPU |  |  |  |  |  |  |
| Baseline (fp32) | 3.48 | 11.88 | 1.02 | 3.62 | 0.006 | – |
| Quanto int8 (dyn.) | 3.41 | 10.65 | 0.97 | 3.29 | 0.008 | 57% |
| BNB nf4 (dyn.) | 3.54 | 13.49 | 1.05 | 4.05 | 0.008 | 70% |
| HQQ int3 (dyn.) | 4.11 | 12.93 | 1.22 | 3.77 | 0.019 | 71% |

CPU 上 PyTorch 动态 int8 最快，RTF 为 0.077，相对基线 0.121 加快约 36.4%，代价是 test-clean 从 3.48 升至 3.72，test-other 从 11.88 升至 13.67。HQQ 动态 int4 在干净语音上保持 3.52，压缩达 69%，但 RTF 为 0.155 反而更慢。静态 Quanto 为 5.95 与 15.92，明显落后。GPU 上 Quanto 动态 int8 在 test-clean 为 3.41，在 test-other 为 10.65，均优于基线 3.48 与 11.88，压缩 57%。BNB nf4 压缩 70%，干净为 3.54 接近基线，困难升至 13.49。HQQ int3 压缩 71% 最小，但误差与延迟均更高。总体动态优于静态，8 位最稳。

#### 代价与未胜出项

这些结论成立需认清测量前提。精度仅用词与字符错误率自动指标衡量，未含人工听测 MOS 或 CMOS 及 ABX，也未用 UTMOS 与 DNSMOS 等神经代理分数，因此无法反映主观听感。原文未报告方差与置信区间与听众规模，单次测量的稳定性未知。静态校准触及评测数据，存在与测试分布重叠的公平性疑问。RTF 来自高性能计算节点，固定 30 s 窗口会放大短句耗时，不能直接当作端侧延迟。未胜出项明确，静态与低比特在困难集上均未取胜。

### 低比特与小模型为何在困难语音上退化更快

#### 跨模型验证

跨模型验证的设计意图是检验主体趋势是否随模型规模稳定，而非再做一次穷举。论文将 Whisper-base 与 Whisper-tiny 限定在 Whisper-small 中最强的动态配置，即 Quanto 动态 int8 与 BNB nf4，省略已落后的静态，以控制实验体量。数据集与测量流程与主体完全一致，因此相对排序可比，但绝对误差会因模型容量不同而整体平移。

下表给出两款小模型在两子集上的基线与两种动态量化的词与字符错误率及实时率因子与体积缩减。阅读时先看各自基线，再看 int8 的保持程度，最后看 nf4 为换取更大压缩付出的增量，重点比较困难子集的放大效应，而非只看干净子集。

| Device/Method | WERc | WERo | CERc | CERo | RTF | Size Red. |
| --- | --- | --- | --- | --- | --- | --- |
| Whisper-base |  |  |  |  |  |  |
| Baseline (fp32) | 5.08 | 12.87 | 1.93 | 6.76 | 0.0022 | – |
| Quanto int8 (dyn.) | 5.10 | 14.72 | 1.93 | 7.60 | 0.0037 | 36.2% |
| BNB nf4 (dyn.) | 6.05 | 18.09 | 2.31 | 10.16 | 0.0036 | 52.1% |
| Whisper-tiny |  |  |  |  |  |  |
| Baseline (fp32) | 7.60 | 23.69 | 2.98 | 12.84 | 0.0015 | – |
| Quanto int8 (dyn.) | 7.64 | 24.64 | 2.99 | 13.24 | 0.0025 | 19.3% |
| BNB nf4 (dyn.) | 11.16 | 32.19 | 4.78 | 20.20 | 0.0026 | 37.5% |

趋势与主体一致，动态 int8 仍是最稳工作点。Whisper-base 基线为 5.08 与 12.87，int8 为 5.10 与 14.72，压缩 36.2%。BNB nf4 为 6.05 与 18.09，压缩 52.1% 但困难集增幅更大。Whisper-tiny 基线为 7.60 与 23.69，int8 为 7.64 与 24.64，压缩 19.3%。nf4 跌至 11.16 与 32.19，压缩 37.5% 却损失显著。模型越小，绝对误差越高，低比特的脆弱性被进一步放大，但 int8 稳健而 nf4 激进的相对关系不变。

#### 稳健性增量的图像证据

为直观比较稳健性差距，下图展示 Whisper-small 4 种配置从 test-clean 到 test-other 的词错误率增量，纵轴为增量百分点，横轴为基线与 3 种量化，柱顶标注具体数值。该视角剥离绝对精度差异，只看声学变难带来的额外损失，可直接读出低比特是否放大敏感性。

[![原论文 Figure 1：WER increase on test-other relative to test-clean for selected quantized models of Whisper-small.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/e3cb691d66c2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/e3cb691d66c2/figure-1.png)

*论文图 1：Whisper-small 四配置从干净到困难语音的词错误率增量对比（原论文 Figure 1）。*

图中四柱均为浅蓝单色柱状，无多线混淆，数值从左至右为 8.50、7.24、9.95、8.82。Quanto 动态 int8 增量最小为 7.24，低于基线，是唯一稳健性优于基线的配置，与其在困难集反超基线的现象一致。BNB nf4 增量最大为 9.95，HQQ int3 为 8.82，均高于基线，说明低于 8 位后压缩以稳健性为代价。需注明一处字面算术出入，基线按表内 11.88 减 3.48 应为 8.40，而图注为 8.50，原文如此报告，存在字面算术出入，原文未解释，其余三柱与表差一致。

### 结论成立的前提代价与复现核对要点

#### 适用边界与选型表

结论的适用边界首先来自数据与模型范围。评测仅用英文朗读的 LibriSpeech 两子集，未覆盖口音与自发语音与多语言与多领域，困难仅指 test-other 的声学多样性。模型仅含 Whisper-small 与 base 及 tiny，未含 medium 与 large 及其他架构。方法仅为训练后量化，未试量化感知训练，执行栈排除需导出与图优化的 ONNX 路径，库支持限制使组合无法穷举，因此为结构化比较而非全面最优证明。

从部署视角看，论文将经验总结为按优先级选型的法则，下表完整保留原文三列与七行，含表头在内未做删减与改写。阅读时按行看优先级与对应最优模型与需付出的代价，重点理解速度精度体积三者不可兼得，只能按设备约束与声学条件匹配。

| Priority | Best Model | Trade-off |
| --- | --- | --- |
| Fastest Inference | PyTorch | Higher WER |
|  | Dynamic int8 | compared to baseline |
| Best Accuracy | Quanto | Higher RTF |
|  | Dynamic int8 | compared to baseline |
| Best Size Reduction | HQQ | Higher WER and RTF |
|  | Dynamic int3 | compared to baseline |

表中速度优先对应 PyTorch 动态 int8，代价是词错误率高于基线。精度优先对应 Quanto 动态 int8，代价是实时率因子高于基线。体积优先对应 HQQ 动态 int3，代价是误差与延迟均高于基线。结合正文，CPU 延迟敏感选前者，GPU 稳健要求选后者，极端内存受限才考虑低比特，且敏感部件如注意力与归一化应保持 8 位，声学多变环境不应贸然低于 8 位。

#### 复现核对与工程建议

复现核对需区分三件事，代码是否开源与权重是否提供下载与系统是否可直接运行。原文未披露代码与权重与演示链接，本次可确认范围未发现作者公开资源，因此不能直接运行，需自行搭建环境并获取公开语料。校准用 10% 评测数据，计时依赖高性能计算设施与固定 30 s 窗口，迁移到端侧需重测延迟。无试听页可对照，选型时应以自身数据复测困难集增量为准。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与帧长步长与码率与通道特征维度，披露采用标准 WhisperProcessor 特征流程与固定 30 s 前端，不足时长零填充，短句按 30 s 窗口推理，RTF 相对可比
- **训练与评测数据**：评测使用语料库 LibriSpeech 英文朗读子集 test-clean 与 test-other，前者 5.4 小时 40 位说话人，后者 5.1 小时 33 位说话人，无模型训练阶段，静态量化校准随机取 10% 评测数据并沿用同一特征提取流程
- **算力与训练耗时**：计算在丹麦国家高性能计算设施 Lenovo ThinkSystem SR675 V3 节点完成，单节点含双路 AMD EPYC 9454 处理器共 192 个虚拟核心与 768 GB 内存及 4 块 80 GB 显存的 H100 GPU，评测分 CPU 与 GPU 两套相对计时
- **核心超参数与配置**：对比位宽含 int8 与 int4 与 int3 及 nf4 与 fp8，工具含 PyTorch 与 Quanto 与 HQQ 与 bitsandbytes，涉及动态与静态两类方案及对称与非对称两类方法与逐张量与逐通道两种粒度，静态校准比例为 10%，组大小依库支持可配
- **推理速度与部署开销**：效率以 RTF 衡量即生成耗时除以音频总时长，CPU 基线 0.121 与 GPU 基线 0.006 为参照，动态 int8 体积缩减约 57%，低比特最高达 71%，报告值为固定 30 s 窗口与预热同步下的相对比较而非端侧延迟
- **开源产物与协议状态**：原文未披露代码仓库与权重下载与数据链接与演示页面，本次可确认范围未发现作者公开资源，复现需自行搭建环境与获取公开语料库 LibriSpeech
- **附录与补充材料要点**：原文未披露独立附录证明与补充消融细节，关键限定与未来方向见正文局限部分，含多领域多语言与更大模型及混合精度分层策略等未验证内容

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.2/10** | 创新 5.3/10 | 技术严谨 6.2/10 | 实验充分 6.7/10 | 清晰度 7.0/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.4/10
- 排名：前50% | 文档类型：应用研究
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.5`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.5/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.5.pdf)
- DOI：`10.18653/v1/2026.speakable-1.5`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：同一预处理划分与计时协议下并行比较四库CPU与GPU行为并统一报告WER/CER/RTF与压缩比。

- 核心优势：GPU上Quanto动态int8尺寸缩减57%且WER为3.41与10.65低于基线3.48与11.88精度可核对。

- 核心优势：对Whisper-base与tiny复用最强动态配置验证趋势稳定，动态int8仍最接近基线而nf4退化更大。

- 主要短板：静态校准取自评测数据随机10%子集存在与测试重叠泄漏风险且未报告置信区间与显著性检验。

- 主要短板：仅覆盖英语朗读LibriSpeech与小尺寸Whisper变体，未验证多语言自发语音口音及QAT与ONNX栈。

- 主要短板：将CPU速度与GPU精度优势归因于每张量非对称与每通道对称方案但明确为作者推测无独立配置消融。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
