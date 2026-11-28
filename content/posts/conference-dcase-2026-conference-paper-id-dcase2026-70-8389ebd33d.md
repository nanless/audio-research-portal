---
title: "Dual-Channel Contrastive Encoding of Sperm Whale Coda"
date: 2026-11-27
draft: false
description: "针对喀哒声个体信息依附类型与候选池而难以辨识的问题，双通道对比编码器把标注节律与全段频谱分开编码再融合，在 1,383 段上随机个体均值达 0.597 但仍低于简单拼接对照与强时序对照，且按日期分组与按年留出暴露明显的泛化落差。"
tags: ["生物声学监测", "对比学习", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "节律与频谱分开编码能否更好地读懂抹香鲸喀哒声"
paper_digest_original_title: "Dual-Channel Contrastive Encoding of Sperm Whale Coda"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-70"
paper_digest_workbench_source_sha256: "593514c63d29355eeb83143e94c7aa1c7fc63adf03bdac34ff10d6afd928eaf4"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Quintanilha_70.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对喀哒声个体信息依附类型与候选池而难以辨识的问题，双通道对比编码器把标注节律与全段频谱分开编码再融合，在 1,383 段上随机个体均值达 0.597 但仍低于简单拼接对照与强时序对照，且按日期分组与按年留出暴露明显的泛化落差。"
paper_digest_reader_sections: [{"heading":"喀哒声同时承载群体方言、节律类型与个体线索带来的辨识难题","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双通道对比编码把标注节律与全段频谱分开建模再融合","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"节律循环编码、卷积频谱编码与融合多层感知器的分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"对比损失、单元配对与冻结线性探针构成的训练评测闭环","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"随机划分与按日期分组下没有模型在三项任务同时占优","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"配对方式、单通道对照与分支融合分化揭示的取舍","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单一种群、标注缺口与录音环境重叠限定结论的外推边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Tufts University, Medford, MA, USA"],"name":"João Quintanilha"},{"affiliations":["Tufts University, Medford, MA, USA"],"name":"Emma Virnelli"},{"affiliations":["Tufts University, Medford, MA, USA"],"name":"Shuo Zhang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"d5ef16ab592af3ba9306f26691e2eb9c5f5f1548b511b878b46ea73311a671c2","url":"/audio-research-portal/client/papers/2026-11-27/conference-8389ebd33da52fb5276d03b2/citation.bib"},"citation.json":{"sha256":"b7de31680e571be5fceb615eee0eaf728e92b02272d12ec19d0789a5428789cc","url":"/audio-research-portal/client/papers/2026-11-27/conference-8389ebd33da52fb5276d03b2/citation.json"},"citation.ris":{"sha256":"29b1aaa4e0a3270b66d946aa5feb08c9f7fe0e7fd0f8bb292292b5697f815d82","url":"/audio-research-portal/client/papers/2026-11-27/conference-8389ebd33da52fb5276d03b2/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"de5a66814a96983dded03751e220240545d875062ae71d26063df47138a750b2","url":"/audio-research-portal/client/papers/2026-11-27/conference-8389ebd33da52fb5276d03b2/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-70"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Quintanilha_70.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "355cf6b52b9f11f948367b86553795a850ac232f5bf7b423a561761a067cb1e0"
paper_digest_api_reader_plan_sha256: "5b0c228fbe0ff969c8a0c01ae150c32550d4b44ffe157a1f504b06fcdaa92dc7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3a89e159c906f18b9a4ce1d524ae8feb434f3cb7ad6c436c47ac7a63af0c6e23"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e96718dc59b27b94cbac381e69aaa092c5f3e1e33c4b7613eff130af97202274"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a8361edd28aa9ea0e598fffaf21038816cb5cac3861a8af29bfda664846c83ae"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "对比学习"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 节律与频谱分开编码能否更好地读懂抹香鲸喀哒声

> 英文题目：*Dual-Channel Contrastive Encoding of Sperm Whale Coda*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-70`
> Track：P4-7



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Quintanilha_70.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[对比学习](/audio-research-portal/papers/?concept=method.contrastive)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.2/10 | 技术严谨 6.5/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 8.1/10 | 工程/实践 3.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- João Quintanilha：Tufts University, Medford, MA, USA
- Emma Virnelli：Tufts University, Medford, MA, USA
- Shuo Zhang：Tufts University, Medford, MA, USA

## 📌 核心摘要

**问题与瓶颈：** 抹香鲸通过短促点击序列即 coda 进行社交交流，每个 coda 包含点击间间隔即 inter-click intervals（ICI）构成的节奏模式与点击内部频谱纹理，任务要求从同一波形中同时读出所属社会单元、coda 类型与个体身份三类标签。现有类人声纹类比只部分成立，个体信息并非与内容无关，而是依赖所发 coda 类型与候选池构成，已有研究指出部分类型几乎不携带个体信息，且同一家族内 73% 至 83% 的判别率在混合多单元时会跌至 46%，原因未明。根本困难在于时序结构本身即是类型定义的一部分，而频谱线索又与类型和录制背景耦合，单一路线的隐式表示难以分离二者贡献，也难以在小样本与强类别不平衡下保持跨日期泛化。

**核心思路与方法架构：** 与最接近的单表示基线相比，本文增量在于把节奏与频谱作为两路显式输入分别编码后再融合，保留轻量线性探测评估表示，其余预训练与探测流程保持可比。沿单条 coda 追踪，设其含 k 个点击则得到 k - 1 个 ICI，数据最多 10 个点击对应最多 9 个间隔，经训练集标准化和右侧零填充后逐个送入 2 层门控循环单元即 gated recurrent unit（GRU），隐层 64 维并经线性映射与层归一化得到 64 维节奏向量 r。同一段音频转单声道并重采样至 48 kHz，1 秒对应 48000 个采样点，经 2048 点 Hann 窗、1152 点跳距的短时傅里叶变换映射到 64 个梅尔频带即 0 至 8 kHz，对数功率做峰值相对与 80 dB 截断并填充至固定的 64 × 256，再经 3 个卷积块即 16、32 与 64 通道与两层多层感知机得到 64 维频谱向量 s。两向量拼接后经层归一化、128 至 64 线性层、ReLU 与 64 至 64 线性层得到 64 维融合表示 z，训练时以温度系数 0.07 的归一化温度互熵即 NT-Xent 拉近同单元对并辅以节奏支路类型交叉熵与频谱支路身份交叉熵，权重各 0.5，编码器训练后冻结，仅训练下游逻辑回归探针，整体为离线整段处理而非流式。

**关键实验与核心代价：** 在 1383 个干净 codas 的三组随机划分上，冻结表示加逻辑回归探针的平均 macro-F1 显示，DCCE 110 即 U+T 在单元、类型与身份三任务上为 0.901、0.865 与 0.597，而原始 ICI 在类型上为 0.987 高于 DCCE，ICI 加时序梅尔统计在身份上为 0.724 高于 DCCE 的 0.597，说明无单一模型在三任务同时领先。加入身份辅助损失的 DCCE 111 即 U+T+I 融合身份均值变为 0.581 低于 110 的 0.597，而其频谱支路身份从 0.367 升至 0.443，呈现支路提升未传导至融合的代价，实际通道交换使随机身份从 0.581 升至 0.657，但日期分组身份从 0.223 降至 0.189。录制日期分组与四个年份留出评估均显著低于随机划分，且年份留出单元 macro-F1 每年均低于冻结 AVES，本文为分类任务故无人工主观 MOS 与 UTMOS 等神经代理指标对比，也不涉及 RTF 实测，训练代价仅为 50 轮 AdamW 小模型，无推理时延报告。

**适用边界与深读导览：** 结论仅在单一种群即 Dominica 2005 年至 2010 年 EC1 部落的 3 个社会单元、22 种 coda 类型与 11 个身份的 754 个身份可用样本上成立，属闭集身份分类，不支持未见个体识别、生物学独立通道或通用架构优势的断言，且标注 ICI 与 WhAM 预训练与评估集重叠等条件限制因果解释。本文未提供音频试听页，深究双通道编码公式与正样本构造可查阅下文方法概述和架构，消融与跨日期泛化细节可查阅下文实验结果与局限与问题。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 喀哒声同时承载群体方言、节律类型与个体线索带来的辨识难题

抹香鲸以母系家庭单元为稳定社会结构，多个单元因共享发声习惯组成发声宗族，本文数据全部来自多米尼克海域 EC1 宗族的 3 个单元。鲸在社交接触时交换被称作喀哒声的短脉冲串，每段包含数枚至十枚脉冲，脉冲个数与间隔共同构成可命名的节律类型。文献把其结构拆为两类线索：脉冲间间隔 ICI 构成的节律模式决定脉冲个数与时序组合，脉冲内部频谱则呈现类似元音的共振形态，随个体变化，粗略类比人类音色对说话人的提示作用。

这一类比只是部分成立，也是个体辨识困难的根源。人声在不同文本下仍能提示说话人，而喀哒声的个体信息依附于发出了哪种节律类型，以及在多大候选集合中比较。同一脉冲串既是群体标记，也可能携带个体差异，不同类型保留的可辨识程度并不一致。节律类型本身由间隔结构定义，频谱细节又与类型存在交互，若把两者混在单一输入中隐式学习，模型难以说明性能究竟来自时序还是频谱。

盖罗等人的野外研究给出两个具体约束：其一，个体信息在不同喀哒声类型中可辨识度差异极大，有的类型近乎统一的群体标记，几乎不含个体信息，有的类型保留足够变异以区分个体；其二，即使可分，也仅在单一家庭单元内达到 73% 至 83%，多单元混合时跌至 46%，原因尚未澄清。本文把任务形式化为给定一段喀哒声音频与标注 ICI，学习一个固定维嵌入，再用轻量线性探针分别预测社会单元、喀哒声类型与个体编号，均为闭集分类，不涉及未见个体的开放验证。

本文的核心问题是把节律与频谱纹理作为两路独立输入分别编码再融合，是否比从单一表征隐式学习能保留更多任务相关结构。回答这一问题需要公平的比较前提：本地训练的表征必须与测试样本严格分离，标注 ICI 的可获得性必须在对照中对齐，随机划分与按日期分组两种协议需要并列观察。否则录音环境、年份分布与群体成员构成的耦合会夸大分数，掩盖跨环境泛化的真实落差，也无法判断增益来自架构还是数据划分。

### 双通道对比编码把标注节律与全段频谱分开建模再融合

与最近的既有基线相比，双通道对比编码器 DCCE 的实质改动在于输入组织方式。鲸声专用 WhAM、通用生物声学 AVES 与鸟声 BirdNET 均从波形或单张频谱出发隐式学习，而 DCCE 保留两路显式输入：一路是人工标注的 ICI 序列，另一路是整段喀哒声的对数梅尔频谱。采样统一到单声道 48 kHz，原生 44.1 kHz、48 kHz、96 kHz 与 120 kHz 均重采样至此，短时傅里叶变换采用 2,048 点汉恩窗与 1,152 点跳长，映射到 0 至 8 kHz 的 64 个梅尔带。

以 1 秒长的喀哒声为例追踪张量流：单声道 48 kHz 对应 48,000 个采样点，经上述分帧加窗得到数十帧频谱，再经梅尔映射与峰值相对对数压缩、80 dB 裁剪，按最小电平补齐到固定的 64 × 256 矩阵，经 x dB 除以 40 加 1 的线性变换进入卷积堆叠。三次 2 × 2 池化把时间与频率同步压缩，最终形成 64 × 8 × 32 特征图，展平后经多层感知器得到 64 维频谱向量 s。另一路 ICI 向量最多 9 个间隔，右侧补零后经循环编码得到 64 维节律向量 r，两者拼接为 128 维再经融合得到 64 维嵌入 z。

下图是理解全流程的关键，请先从左侧两个输入框沿箭头向中间追踪，注意节律与频谱各经一路编码器后再汇入同一融合模块，上下两条可选监督只作用于单路分支。最右侧的对比损失与冻结探针决定了训练与评测的先后顺序，读图时先确认主路径的左右顺序再看分支监督的上下位置，才能对应后文的损失与探针描述。

[![原论文 Figure 1：DCCE: separate input encoders, fusion, and optional branch objectives.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9026026de607/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9026026de607/figure-1.png)

*论文图 1：双通道编码融合示意：标注节律与梅尔频谱分别编码后汇入融合层并接受分支监督（原论文 Figure 1）。*

像素显示左侧浅蓝底的两个输入框分别标注已标注 ICI 与梅尔频谱，前者向右指向浅绿底 GRU r (64)，后者指向浅蓝底 CNN s (64)。两路编码输出同时汇入米黄色融合多层感知器，再向右得到 z (64) 与 NT-Xent。上方由节律分支引出可选类型交叉熵，下方由频谱分支引出可选个体交叉熵，最下方箭头注明在冻结 z 上训练探针，整体为从左向右的主路径加两条分支监督。

训练时对比目标作用于融合嵌入 z，可选的类型与个体交叉熵分别作用于节律分支 r 与频谱分支 s，编码器权重在探针阶段整体冻结，仅训练下游逻辑回归。推理沿同一前向路径一次得到嵌入，无分块流式、前瞻窗口或多步采样设计，原文未披露延迟、实时率与显存开销，离线整段处理是理解代价的前提。

### 节律循环编码、卷积频谱编码与融合多层感知器的分工

节律编码器处理的是以秒为单位的 ICI 序列，一串 k 枚脉冲对应 k 减 1 个间隔，本文数据最多十枚脉冲，故每段喀哒声至多 9 个间隔。序列在右侧补零至统一长度，仅用训练样本计算均值方差做标准化，避免测试信息泄漏。两层门控循环单元以 64 维隐状态逐个读入间隔，层间丢弃率为 0.2，最终隐状态经线性投影与层归一化得到 64 维向量 r。紧凑的循环结构对应短序列与小样本的约束，不引入长程注意力。

频谱分支从整段音频的对数梅尔频谱出发，单声道 48 kHz 输入经 2,048 点汉恩窗与 1,152 点跳长分帧，映射到 64 个梅尔带后取峰值相对对数功率，裁剪到 80 dB 动态范围，不足固定尺寸时按最小电平补齐到 64 × 256，不截断任何梅尔输入。3 组卷积、批归一化、整流线性单元与最大池化堆叠，通道数分别为 16、32 与 64，卷积核均为 3 × 3，池化均为 2 × 2，输出为 64 × 8 × 32 特征图。展平后经丢弃率为 0.3 的丢弃与两层多层感知器加层归一化得到 64 维向量 s，该分支保留全段时序结构，并不限于脉冲内部的个体线索。

融合多层感知器把 r 与 s 拼接为 128 维，先做层归一化，再经线性层由 128 维到 64 维、整流非线性与第二线性层保持 64 维，得到嵌入 z。嵌入在对比损失内部做归一化，主探针使用保存的融合输出，分支探针仅为事后诊断。直接拼接对照把两路向量拼为 128 维，不经过该融合多层感知器，也无独立的后期融合训练，用于检验融合本身是否带来增益，维度差异本身影响比较，判读时需同时考虑容量与训练方式的不同。

为分支分配不同辅助任务意在鼓励判别特征，但并不强制统计独立。类型交叉熵鼓励节律分支保留喀哒声类型信息，而非仅保留单元结构；个体交叉熵鼓励频谱分支增强个体可分性，沿用说话人嵌入中身份分类监督的思路。原文明确指出，这种分工不能证明生物学上存在相互独立的节律与频谱通道，跨通道耦合仍是待设计的开放问题，压缩或目标干扰都可能解释后续分支与融合表现的分化。

### 对比损失、单元配对与冻结线性探针构成的训练评测闭环

训练目标把对比损失与两项可选加权交叉熵相加，权重各为 0.5 的开关系数，记为 U、T、I 3 位二进制，分别对应单元配对、类型损失与个体损失。类型与个体损失按训练计数的逆频率加权，不合格个体标签被掩码。对比项采用温度系数为 0.07 的余弦相似度，对正样本对做对称平均，批内其余视图均作负例，其中可能包含同单元样本，并非把全部同单元喀哒声都视为正例的完全监督对比处理。

正样本构造是监督来源的核心。主条件把来自同一社会单元的不同训练喀哒声 A 与 B 配对，对比 f (rA，sA) 与 f (rB，sB)，因而使用了单元监督。实际通道交换变体则配对 f (rA，sB) 与 f (rB，sA)，检验跨通道组合的作用。若不使用单元配对，正例为同一喀哒声的两次独立增强视图。每次视图随机掩码 4 个频率带与 8 个时间帧，并对非零原始间隔对应的标准化 ICI 条目加入标准差为 0.01 的高斯噪声，补零间隔保持标准化后的填充值。

主要对比 DCCE 110 与 111 仅差个体损失一项，两者均为任务知情模型，无个体损失不等于无监督。000 条件从表征目标与采样器中移除任务标签，但仍保留已标注 ICI 与下游有监督探针。节律单独与频谱单独对照把两项辅助头都加到可用分支上，系数不变。联合拼接对照为 128 维，其余输出均为 64 维，另有 16 kHz 梅尔上限变体在固定带数下改变滤波器间隔，用于考察带宽敏感性而非定位生物学线索。

全部主条件采用均匀混洗采样，50 轮 AdamW 优化，学习率为 0.001，权重衰减为 0.0001，余弦衰减，批大小为 64。温度、辅助权重、采样与优化器设置在本次探索性批量中固定，并非经验证调优。监督式 AVES 适配另用 10 轮固定调度，更新投影层与 12 层变换器，冻结波形卷积前端，单元、类型与个体损失权重为 1、0.5 与 0.5，主干与头部学习率分别为 0.00002 与 0.001，微批为 4 累积到 64，梯度裁剪到 1。该调度与主条件在容量、预训练与预算上均有差异，比较时需保留这一前提。

评测时所有编码器权重冻结，仅训练均衡逻辑回归预测单元、类型或个体，特征按训练数据标准化，正则强度 C 为 1，最多 2,000 次迭代。WhAM 与 AVES 的层选择仅用验证宏 F1，每任务独立选层，平局取最早层，BirdNET 只有单一表征，不做训练加验证合并重训，神经网络检查点取固定末轮。推理为离线整段前向一次得到嵌入，原文未披露分块流式、前瞻缓存、采样步数、延迟与实时率，部署代价无法从本文直接外推。

### 随机划分与按日期分组下没有模型在三项任务同时占优

#### 评测协议与公平性前提

数据集来自多米尼克抹香鲸项目公开版本，1,501 段录音剔除 118 段噪声标记后剩余 1,383 段干净喀哒声，覆盖 3 个社会单元与 22 种喀哒声类型。标签经表格索引重建并定位到 2005 年至 2010 年的 EC1 宗族，个体评测仅用 11 个个体的 754 段，620 段未知个体、8 段双个体歧义与 1 段独单样本不参与个体训练与探针，但可用于其余任务。F 单元占 821 段，约 59.4%，严重不均衡促使采用宏 F1 与均衡类权重，所有任务共享同一划分，本地训练表征与其测试样本严格分离。

随机划分用 0 至 2 3 个种子，按约 64%、16%、20% 划分训练、验证与测试，对合格个体分层、其余按单元分层。按日期分组取五折分层分组划分的前 3 个外折，日期作会话代理，另设 4 个按年留出，年内完全不见测试年，验证用剩余年份的日期分组折，神经网络种子固定为 0。主要宏 F1 只在训练见过的真实测试类与受支持样本上平均，分组个体支持量为 186 / 213、111 / 121 与 145 / 145，覆盖 3、6 与 6 个可评个体，与随机划分描述不同总体，结果报告 3 轮均值与样本标准差，而非置信区间，设计本身为探索性。

#### 主比较的数量关系

主比较中没有模型在三项任务同时占优。原始 ICI 的随机类型宏 F1 为 0.987 ± 0.009，分组为 0.956 ± 0.036，纳入未见类型标签后分别变为 0.968 与 0.919，说明类型标签本身源于间隔结构时，强时序对照不可或缺。ICI 加时序梅尔统计的随机个体宏 F1 为 0.724 ± 0.039，为个体任务的强特征对照。DCCE 110 的随机单元、类型与个体均值为 0.901、0.865 与 0.597，DCCE 111 为 0.907、0.735 与 0.581，增加个体损失并未提升融合个体均值。冻结 AVES 加 ICI 的随机个体为 0.652，显著高于纯音频的 0.491，微调后加 ICI 为 0.544，高于不加 ICI 的 0.414，输入可获得性实质改变比较结论。

要直观比较两种划分协议的落差，请先看下图的横轴平均宏 F1 与三块任务面板，纵轴为 4 个代表模型，蓝色圆点表示随机划分，棕色菱形表示按日期分组，灰线连接同一模型两种协议的均值。重点观察右侧个体面板的线段长度与相对排序，同时注意分组个体覆盖的类别与样本与随机划分并不相同，以免把总体差异误读为单一环境惩罚。

[![原论文 Figure 2：Random versus recording-date-grouped evaluation for four representative models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9026026de607/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9026026de607/figure-2.png)

*论文图 2：随机划分与按日期分组下四个代表模型在三项任务的平均宏 F1 对比（原论文 Figure 2）。*

像素显示三块面板分别为社会单元、喀哒声类型与个体身份，横轴均为 0 至 1 的平均宏 F1，纵轴自上而下为 DCCE U+T、DCCE U+T+I、ICI 加时序梅尔与冻结 AVES 加 ICI。全部 4 个模型在三项任务的棕色菱形均位于蓝色圆点左侧，表明分组均值系统性偏低，但任务间排序不同：类型面板以 DCCE U+T 最高，个体面板以 ICI 加时序梅尔随机值最高而分组值相近，单元面板以冻结 AVES 加 ICI 随机与分组均偏高。原文强调分组个体涉及不同受支持类与样本，落差不能孤立解读为录音环境惩罚。

#### 分组落差的像素解读与年份检验

年份与单元的列联显示强关联，2005 年、2008 年、2009 年与 2010 年的 A、D、F 计数分别为 10、0、358 与 27、171、65 与 30、18、47 与 174、132、351，皮尔逊卡方为 530.04，自由度为 6，未校正克拉默 V 为 0.438，原文界定为数据集关联而非模型依赖录音伪影的因果证据。按年留出的单元宏 F1 在 4 个年份上 DCCE 110 为 0.592、0.362、0.767 与 0.346，DCCE 111 为 0.448、0.391、0.713 与 0.357，每年均低于冻结 AVES。仅 F 单元在全部分组折支持单元内探针，原始 ICI、DCCE 110 与 DCCE 111 的平均个体为 0.384、0.267 与 0.238，减少了一种群体捷径，但未消除类型与环境依赖。

### 配对方式、单通道对照与分支融合分化揭示的取舍

无辅助损失时，同单元配对把随机单元与个体均值从 0.693 与 0.624 变为 0.861 与 0.434，分组个体的排序反转，为 0.181 对 0.245。这一组对照均使用均匀混洗采样与 50 轮训练，仅改变是否以同单元不同喀哒声构造正例，负例仍包含可能的同单元样本，并非完全监督对比。单元分数上升伴随个体分数下降，分组协议下顺序相反，表明配对施加了任务与划分相关的取舍，而非稳定的表征提升。

匹配标签可获得性的通道对照显示，节律单独在随机类型上达 0.978 与 0.973，频谱单独仅 0.202 与 0.199，联合拼接为 0.939 与 0.927；随机个体上节律单独为 0.477 与 0.454，频谱单独为 0.358 与 0.444，联合拼接为 0.636 与 0.696；分组个体上节律单独为 0.352 与 0.331，频谱单独为 0.054 与 0.092，联合拼接为 0.275 与 0.239。这些结果既不支持纯频谱个体编码，也不证明融合多层感知器相对拼接的必要性，且拼接维度为 128，高于其余 64 维输出，判读时需同时权衡维度与训练方式。

实际通道交换相对整段 111 配对，把随机个体从 0.581 提升到 0.657，分组个体从 0.223 跌至 0.189。16 kHz 梅尔上限在无个体损失时把随机个体提升到 0.631，有个体损失时为 0.623，分组对应为 0.250 与 0.173。两者反映带宽与组合方式的敏感性，交换构造打乱了原始两路的对应关系，带宽上限在固定带数下改变滤波器间隔。原文明确不将其解读为生物学身份线索的定位证据，其分组分数的同步下滑进一步说明随机划分的提升不能外推到跨日期场景。

固定检查点的事后探针揭示分支与融合的分化，频谱分支个体从 0.367 升至 0.443，节律分支类型保持 0.983 与 0.982，而融合端未同步跟进，具体融合均值见上一节主比较。辅助分支的提升不必传导至融合，目标干扰或压缩都可能解释这一模式，但实验未确证任一机制为成因。判读时应把分支诊断与融合主分数分开，避免把单路可分性直接等同于整体表征的个体能力，跨通道耦合仍是未来设计的开放问题。

### 单一种群、标注缺口与录音环境重叠限定结论的外推边界

首要限定来自数据本身：单一多米尼克种群、3 个社会单元、全部属于 EC1 宗族，2005 年至 2010 年的录音不能代表其他种群或非整理录音。1,383 段喀哒声没有可用的元音标注，已有手标元音元数据覆盖不同编号，频谱分支经融合对比目标与可选个体分类训练，并未接受显式音系类别监督，因而不能把分支输出等同于元音或音素发现，也无法建立生物学通道的独立性。

已标注 ICI 是波形系统无法直接获得的额外信息，任何未对齐该输入可获得性的比较都会偏向使用标注的一方。个体评测为闭集分类，不检验未见个体的识别与开放验证，更不建立交际语义。身份覆盖稀疏且仅报告 3 轮均值与样本标准差，精度有限，日期仅为会话代理，未经核实的会话划分使环境泛化结论保持谨慎，人工听测的缺席也使感知相关性未经检验。

WhAM 已发表训练使用 DSWP 加 CETI 数据，本次评测亦用 DSWP，在检查点训练成员不可得时，本地留出无法验证外部预训练独立性。探索性设计与异质模型历史进一步限制因果或普遍比较：温度、权重与采样固定而未经验证调优，不同容量的目标、预训练与预算仍有差异，分支与融合的分化可用目标干扰或压缩解释，但实验未确证任一机制，架构优越性并未成立。

复现层面，原文未披露训练硬件、推理延迟与实时率，也未提供可确认的代码、权重下载或可直接运行的系统，元数据需经表格索引自行重建。工程选型上，保留 ICI 加时序梅尔等简单时序对照、按日期分组与按年留出并列评测、显式对齐监督与标注预算，比单点宏 F1 更能暴露权衡。未来工作指向独立录音、跨种群检验与个体目标强度的可调参数，而非默认双通道在生物学或架构上普遍占优。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：单声道 48 kHz，原生 44.1 kHz、48 kHz、96 kHz 与 120 kHz 重采样至此，短时傅里叶变换 2,048 点汉恩窗、1,152 点跳长，64 个梅尔带覆盖 0 至 8 kHz，对数功率峰值相对、80 dB 裁剪，补齐到 64 × 256，不截断，原文未披露延迟与实时率
- **训练与评测数据**：多米尼克抹香鲸项目公开版本 1,501 段中剔除 118 段噪声后 1,383 段干净喀哒声，3 个社会单元、22 种类型、11 个个体 754 段用于个体任务，F 单元 821 段约 59.4%，定位到 2005 年至 2010 年 EC1 宗族，随机划分约 64%、16%、20% 三种子与日期分组三外折加四个按年留出
- **算力与训练耗时**：原文未披露训练所用 GPU 型号数量、训练步数耗时与内存配置，仅给出优化与批量设置
- **核心超参数与配置**：均匀混洗采样 50 轮 AdamW 学习率 0.001 权重衰减 0.0001 余弦衰减批大小 64 温度 0.07 辅助权重各 0.5 循环隐状态 64 丢弃率 0.2 与 0.3 卷积通道 16、32 与 64 探针均衡逻辑回归 C 为 1 最多 2,000 次迭代
- **推理速度与部署开销**：原文未披露延迟、实时率、吞吐、显存或参数量，推理为离线整段冻结前向一次得到嵌入，无流式与前瞻设计
- **开源产物与协议状态**：原文未披露代码、权重、数据下载与演示链接，无法确认公开状态，需自行重建元数据与环境
- **附录与补充材料要点**：原文未提供附录证明、补充消融、许可限制或失效案例细节，相关诊断均在正文呈现，含分支融合分化与按年留出检验

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.2/10 | 技术严谨 6.5/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 8.1/10 | 工程/实践 3.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-70`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Quintanilha_70.pdf)
- Track：P4-7

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：节奏ICI经2层GRU与全coda梅尔谱经CNN分别编码再经MLP融合，训练与冻结探测流程完整可比。

- 核心优势：在同一划分冻结探测下对比原始ICI、时序梅尔、冻结与微调AVES等多组强基线并报告三轮均值与标准差。

- 主要短板：联合拼接随机身份0.636与0.696均高于对应融合0.597与0.581，原始ICI类型0.987与ICI加时序梅尔身份0.724均高于DCCE，无单一胜者。

- 主要短板：日期分组与四年留出全面下降且每年单元指标均低于冻结AVES，结论仅限Dominica EC1三单元闭集身份，标注ICI与WhAM重叠限制因果解释。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
