---
title: "Overlapping Call Density Regression for Acoustic Population Size Estimation"
date: 2026-11-27
draft: false
description: "针对大群体同步鸣叫重叠导致传统计数系统性低估的问题，论文提出两阶段重叠鸣叫密度回归，经平方根域损失与线性映射恢复绝对数量，在开发集留一验证中把平均绝对误差从 23.0 降至 1.5 并在官方评测中排名第一，代价是依赖少量站点真值校准与计数范围选择。"
tags: ["生物声学监测", "CNN", "RNN", "生态物种识别与分布预测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "重叠鸣叫密度回归如何从严重重叠录音中估计鸟类种群数量"
paper_digest_original_title: "Overlapping Call Density Regression for Acoustic Population Size Estimation"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-64"
paper_digest_workbench_source_sha256: "402c9c7f894dead914770e78751b1177cb15c7a716f2a7dec2184b1ebfb8617a"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Yang_64.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "生态物种识别与分布预测"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对大群体同步鸣叫重叠导致传统计数系统性低估的问题，论文提出两阶段重叠鸣叫密度回归，经平方根域损失与线性映射恢复绝对数量，在开发集留一验证中把平均绝对误差从 23.0 降至 1.5 并在官方评测中排名第一，代价是依赖少量站点真值校准与计数范围选择。"
paper_digest_reader_sections: [{"heading":"大群体同步鸣叫为何让已有声学计数系统性失效","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两阶段密度回归从录音到种群数量的完整链路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"卷积循环回归器怎样把对数梅尔谱压缩为一个密度标量","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"生成混合训练与平方根域损失怎样抑制高密度主导","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"开发集留一验证与官方评测的误差下降在何种口径下成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"训练计数范围损失函数与抽样策略如何各自影响误差","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"均值与标准差映射的假设边界与复现核对","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Wuhan University, Wuhan, Hubei 430072, China"],"name":"Jing Yang"},{"affiliations":["Wuhan University, Wuhan, Hubei 430072, China"],"name":"Siyi Li"},{"affiliations":["Signal Processing Research Center, Tampere University, Tampere, Finland"],"name":"Yuzhu Wang"},{"affiliations":["Wuhan University, Wuhan, Hubei 430072, China"],"name":"Gongping Huang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"2d64873373b02e033e378f2625a4bbec1de7ff06032a612005ed2a42f05728c6","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbb99084b7a661e6e665d1be/citation.bib"},"citation.json":{"sha256":"36a5ccffd2f6d63cf3ac0540d79dc6edc74e15f658573fcf9ca25aae1d2e4f9c","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbb99084b7a661e6e665d1be/citation.json"},"citation.ris":{"sha256":"3937cc76103115e27549a08b80f2cd940a7df59faebc7fe84059e4dd2ab12d8d","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbb99084b7a661e6e665d1be/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c2c0139dff059ac801473cfff677059d09b2ef9c1efc14ec073e09da8cb773f7","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbb99084b7a661e6e665d1be/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-64"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Yang_64.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "fdcee92ae528718236a43a0343a43bdd97149cdc2514f423fdd1cbd6b3f448f9"
paper_digest_api_reader_plan_sha256: "0598468d3c1fd99953a0b8084bb34f19044ece31ac9e95624e1a4b64e9f5dc34"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "830321218f857c28f531b628e4db321d8a10ee67958f7e44b3ae2d031510a0b2"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e71041a5b4104e55fa776cd5b3c1d9d1e2a45929a97e158217af3c25641bd045"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "229f7d54374a7e6a98d939769f828013f97737e87a1aeac2feb7ac77bc5e6e16"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8add67650fe0482bd8f04d164346326ed53d6b9aec559c0a677264255120ef1f"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"task","id":"task.ecological-species-prediction","label":"生态物种识别与分布预测"}]
paper_digest_primary_method: "CNN"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 重叠鸣叫密度回归如何从严重重叠录音中估计鸟类种群数量

> 英文题目：*Overlapping Call Density Regression for Acoustic Population Size Estimation*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-64`
> Track：P4-8




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Yang_64.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[生态物种识别与分布预测](/audio-research-portal/papers/?concept=task.ecological-species-prediction)
- **研究方法**：[CNN](/audio-research-portal/papers/?concept=method.cnn)；[RNN](/audio-research-portal/papers/?concept=method.rnn)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 6.7/10 | 技术严谨 6.6/10 | 实验充分 7.8/10 | 清晰度 5.6/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 7.3/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jing Yang：Wuhan University, Wuhan, Hubei 430072, China
- Siyi Li：Wuhan University, Wuhan, Hubei 430072, China
- Yuzhu Wang：Signal Processing Research Center, Tampere University, Tampere, Finland
- Gongping Huang：Wuhan University, Wuhan, Hubei 430072, China

## 📌 核心摘要

**问题与瓶颈：** 研究对象是被动声学监测 (passive acoustic monitoring, PAM) 录音中的鸟类种群数量估计，输入为含目标物种鸣叫、非目标鸟种鸣叫与环境噪声的长时录音，输出为该站点的个体总数。现有检测类方法先检测可数声学单元再映射到数量，检测无关类方法直接由声学特征回归数量，两类方法在个体较少且鸣叫可分时可用。随着种群增大，火烈鸟等集群鸣叫物种频繁同步发声，重叠使可数单元不可分，直接回归也在大种群上出现饱和，只能反映相对发声密度而无法恢复绝对数量。

**核心思路与方法架构：** 与最接近的合唱混合直接回归基线相比，本文保留检测无关范式，增量是将单段预测目标改为连续的重叠鸣叫密度，并增加由分段密度均值与标准差到种群数的站级线性校准，同时用平方根域损失抑制高密度样本主导。以 1 个 3 s、32 kHz 单通道片段为例，波形经 128 个梅尔滤波器、1024 点傅里叶变换、320 点帧移、50 Hz 至 12000 Hz 与功率转 dB 得到对数梅尔频谱图 (log-mel spectrogram)，再经逐样本 z-score 归一化送入 3 个卷积块与双向循环层，频维均值与最大值池化拼接后建模时序，时维均值与最大值池化得到段级表示，最后由两层线性层加 ReLU、Dropout、层归一化与 Softplus 输出非负密度标量。全系统为离线分段独立处理，论文中未提及流式因果约束与冻结更新边界，第二阶段用已知数量站点拟合线性系数，将平均鸣叫强度与波动映射为总数，以此绕开重叠下漏检导致的系统性低估。

**关键实验与核心代价：** 在 BioDCASE 2026 鸟类计数挑战真实鸟舍数据上，以大火烈鸟为目标物种，开发集 4 个鸟舍留一法下平均绝对误差 (mean absolute error, MAE) 由官方基线的 23.0 降至本文系统的 1.5，低于基线，决定系数 (coefficient of determination, R2) 由 0.46 升至 0.99，高于基线，均方根误差 (root mean square error, RMSE) 由 33.2 降至 1.6，低于基线；其中 107 只的 Aviary-2 误差由 -64 收窄至 -2，161 只的 Aviary-4 误差由 +9 收窄至 -1，2 个 52 只鸟舍误差也在 +1 至 +2 之间。官方评测集上火烈鸟 MAE 本文系统的 20.0 低于第二名 Leon UFAM task6 3 的 23.5，也低于官方基线的 69.0，综合排名分本文的 9.2 低于第二名的 13.3 与官方基线的 24.5，联合三物种的 RMSE 由官方基线的 51.4 降至本文系统的 13.0，低于基线，R2 由官方基线的 0.55 升至本文系统的 0.97，高于基线，排名全部提交第一，但 Quelea 与 Ibis 两物种沿用调参后官方基线，Quelea 单列本文为 4.5，弱于 You PKU 的 3.5 与官方基线的 1.5，并非全部最优。本文无人工主观听测，指标均为计数误差。主导收益来自平方根域均方误差损失，同为 [0, 50] 训练范围时该损失 MAE 为 1.5，低于 MAE 损失的 6.5 与 MSE 损失的 33.3。训练鸣叫数上限 Kmax 呈 U 形影响，Kmax 为 50 时 MAE 为 1.5、RMSE 为 1.6，低于过窄与过宽取值，过窄学不到高密度，过宽使回归更难。计算代价方面论文仅说明在单张 NVIDIA RTX 4090 GPU 上训练，未披露延迟、吞吐或 RTF。

**适用边界与深读导览：** 结论成立前提是集群同步鸣叫的大火烈鸟鸟舍 PAM 场景，且第二阶段需少量已知数量站点做最小二乘校准，未覆盖野外开放环境、无标注站点校准与非集群物种的直接迁移，深读可查下方方法概述中两阶段公式与回归器结构，实验结果中官方榜单、留一法、损失消融与采样鲁棒性表格，以及细节详述中混合生成与训练配置。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 大群体同步鸣叫为何让已有声学计数系统性失效

被动声学监测让长期大规模录音成为可能，鸟类种群数量估计是生态监测与保护的基础任务，需要从录音中推断目标物种的个体总数。录音中同时包含目标物种鸣叫、其他鸟种干扰与环境噪声，标注真实鸣叫次数的样本稀少，重叠严重的区域更难准确标注。论文把问题形式化为已知一段录音包含未知数量 \(C\) 的目标物种个体与其他声音，将录音切分为 \(N\) 个固定时长片段，每个片段具有重叠鸣叫数 \(D\)，目标是从整段录音的声学证据中恢复绝对数量 \(C\)，而非仅区分相对活跃程度。

已有方法分为两类。第一类基于检测的方法先在短窗内检测可数声学单元，例如个体声纹或鸣叫事件，再把检测计数的汇总统计量映射到种群数量。这条路线曾用于从鸣叫计数统计估计蝙蝠密度，通过鸣叫活跃度变异刻画草原鹀种群，以及用置信度加权的检测率预测多个鸟种数量。这类流程假设录音中的声学事件可以被区分开来，而声学重叠会直接破坏这一假设，造成系统性低估，且群体越大重叠越频繁严重，误差随之增大。

第二类免检测方法跳过显式检测，直接从声学特征预测种群数量或丰度相关代理量。例如用梯度提升回归器在生成的合唱混合物上直接预测大火烈鸟数量。这类方法在小群体或鸣叫仍可区分时表现尚可，但当应用于个体数远超训练范围的真实鸟舍录音时，预测在训练范围上界附近饱和，只能反映发声密度的相对差异，无法恢复绝对种群数量。两类方法在重叠严重时共享同一个瓶颈，而大群体恰好更容易产生同步群叫与严重重叠。

本工作以大火烈鸟为代表性群叫物种，该物种常在大群体中同步频繁鸣叫，重叠问题突出。作者在 BioDCASE 2026 鸟类计数挑战赛的真实鸟舍被动声学监测录音上展开验证，开发集包含 140,899 个 3 秒片段，评测集包含约 380,000 个 3 秒片段。核心矛盾是重叠越严重，传统依赖可区分事件的证据越失真，而直接回归又容易被高密度样本主导或被训练计数范围限制。论文因此提出基于重叠鸣叫密度回归的两阶段系统，试图在严重重叠下仍能估计绝对数量。

### 两阶段密度回归从录音到种群数量的完整链路

与最近的免检测基线相比，本系统保留直接从声学特征预测的范式，替换与新增三处核心设计。第一处把卷积循环网络主干原本的帧级多标签分类输出替换为时域池化与回归头，使网络对整个片段输出一个连续标量密度，而非逐帧序列。第二处引入平方根域均方误差损失，先对真值与预测开平方再计算均方，以降低高密度样本在优化中的主导作用。第三处把生成训练混合物的目标物种鸣叫数上限从 10 扩展到对 200 的系统考察，默认采用 0 至 50 的范围。信号规格为 32 kHz 单通道，片段时长固定为 3 秒，第二阶段仅用均值与标准差两个统计量经线性模型映射到站点数量。

为了看清两阶段如何衔接，可以先阅读原图总览。该图从左至右排列 6 个虚线框，依次为原始录音、片段切分、密度回归器、统计量汇总、线性回归与种群数量估计，下方用两个大括号标出第一阶段段级密度预测与第二阶段种群数量估计的划分。箭头表示数据流向，中间用 \(y\) 与 \(D\) 符号区分波形片段与其密度，右侧用均值与标准差符号以及散点拟合示意映射关系。沿箭头追踪即可理解从连续录音到单个站点估计的完整链路，以及两个阶段在何处交接。

[![原论文 Figure 1：Overview of the proposed two-stage population estimation system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-1.png)

*论文图 1：两阶段种群估计流程：原始录音切分后经密度回归与均值标准差线性映射得到站点数量（原论文 Figure 1）。*

图显示第一阶段包含左侧 3 个框。原始录音框带有麦克风与波形图标，经切分得到集合 \(y1\) 至 \(yn\)，每个片段进入中间红色框的密度回归器，输出对应的密度估计。全部段级估计进入第二阶段，先汇总为均值 \(mu\) 与标准差 \(sigma\)，柱状图示意分布，再经横轴为均值纵轴为标准差的散点直线拟合完成线性映射，最终输出站点级估计 \(C_hat\)。下方两个括号明确划分两个阶段，全部箭头自左向右，没有反馈回路，说明段级预测相互独立，站点映射只依赖汇总统计量。

以一段 3 秒录音为例，在 32 kHz 下对应 96,000 个采样点。系统先按固定时长切分为 \(N\) 个片段，每个片段独立经过对数梅尔谱前端与回归器得到一个标量密度。同一站点的全部分段估计再被聚合成均值与标准差，分别刻画平均鸣叫活跃度与其起伏，随后经线性公式映射为站点数量。原文披露的拟合结果为 \(w1\) 为 88.86，\(w2\) 为负 34.67，偏置 \(b\) 为 38.46，采用最小二乘在已知数量的站点上求解。由于站点级监督数量有限，这种低复杂度映射有助于防止过拟合。

### 卷积循环回归器怎样把对数梅尔谱压缩为一个密度标量

密度回归器建立在卷积循环主干之上。每个片段波形先经梅尔滤波器组与对数压缩得到对数梅尔谱，再做逐样本 z 分数归一化，以降低不同片段间的量级差异并稳定训练。具体前端参数为 128 个梅尔频带，n_fft 为 1,024，hop 为 320，频率范围为 50 至 12,000 Hz，输出形状记为 \([1, 128, T]\)，其中 \(T\) 为该片段的谱帧数。随后幅度转分贝采用功率模式，top_db 为 80。归一化使用单样本自身的均值与标准差，不跨样本统计。

为了跟踪张量形状如何逐级收缩，可以阅读回归器结构图。该图分为四栏，从左至右依次为信号前端、卷积编码器、频率池化与双向门控循环单元、时间池化与回归头，每栏内用方框标注操作与形状，箭头自左向右连接。编码器部分标注通道数从 1 到 32 到 64 到 128 的增长，以及时间维从 \(T\) 到 \(T / 2\) 到 \(T / 4\) 到 \(T / 8\) 的减半过程。右侧回归头用层归一化、线性、非线性与 Softplus 的串联表示标量输出。按栏追踪即可看清频率与时间两个维度的池化位置与拼接点。

[![原论文 Figure 2：Architecture of the density regressor for segment-level call density prediction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-2.png)

*论文图 2：密度回归器结构：对数梅尔谱经卷积编码双向循环与双分支池化输出单个密度标量（原论文 Figure 2）。*

该图承接上段的分栏导读，展示从原始波形到单个密度标量的完整变换。信号前端将 3 秒波形变为对数梅尔谱，卷积编码器把通道数提升至 128 并把时间维压缩至 \(T / 8\)，频率维经均值与最大值双分支池化拼接为每帧 256 维序列，送入双向循环层建模时序上下文，时间维再经双分支池化拼接为 512 维表示，最后由回归头输出非负标量。

#### 卷积编码与频率池化

图显示卷积编码器包含 3 个卷积块。第一块将 1 个通道变为 32 个通道，形状为 \([1, 32, 64, T / 2]\)，第二块变为 64 个通道，形状为 \([1, 64, 32, T / 4]\)，第三块变为 128 个通道，形状为 \([1, 128, 16, T / 8]\)。剩余频率维经均值与最大值池化各得到 \([1, 128, T / 8]\)，拼接转置后为 \([1, T / 8, 256]\)，送入两层双向门控循环单元，输入维度为 256，隐状态为 128，双向，丢弃率为 0.25，输出仍为 \([1, T / 8, 256]\)。时间维再经均值与最大值池化各得到 \([1, 256]\)，拼接为 \([1, 512]\)，经层归一化、线性、ReLU 与丢弃、线性与 Softplus 得到目标物种重叠鸣叫数的预测值，保证输出非负。

#### 时间池化与回归输出

仍以一个 3 秒片段为例，96,000 个采样点先变为 \([1, 128, T]\) 的谱图，经 3 个卷积块后时间帧率逐级减半至 \(T / 8\)，频率剩余 16 个分箱。频率池化把通道与频率信息折叠为每帧 256 维序列，循环层建模片段内时序上下文，时间池化把变长序列压缩为 512 维段级表示，两处拼接分别是频率分支的均值与最大值拼接，以及时间分支的均值与最大值拼接。回归头把 512 维向量映射为一个标量密度。原文未披露各卷积块内部核尺寸与步长细节，此处仅按图中所给形状追踪输入输出，不补足缺失的层内超参。

推理时每个 3 秒片段独立前向一次，没有自回归逐步生成，也没有跨片段缓存传递。原文未披露分块流式的前瞻窗口、缓存机制、采样步数、延迟、RTF（实时系数）与显存开销，因此无法从原文推断在线部署的时延与吞吐。训练阶段的计算配置为单个 NVIDIA RTX 4090 GPU，这属于训练硬件，不能等同于推理代价。第二阶段的线性映射为闭式最小二乘求解，推理时仅为两次乘加与一次加偏置，开销可忽略。

### 生成混合训练与平方根域损失怎样抑制高密度主导

#### 目标与干扰素材筛选

真实录音中精确到鸣叫次数的标注稀少，重叠严重区域更难准确标注，因此段级回归器用生成数据训练。目标物种素材从 Xeno-Canto 收集 429 个大火烈鸟野外录音文件，每个文件切为 3 秒片段并有 50% 重叠，用 BirdNET 与 PERCH v2 两个独立检测器对每段打分，仅保留两者置信度均不低于 0.9 的片段并合并相邻重叠段，再用均方根能量包络做自适应边界检测提取鸣叫事件，帧长为 20 ms，步长为 10 ms，平滑为 7 帧，共得到 2,587 个时长在 0.1 秒至 1.5 秒的片段。干扰素材按同样流程从 18 个其他鸟种收集 337 个片段，背景从挑战赛开发集鸟舍录音中经 BirdNET 与 ARIA 物种检测器过滤，仅保留两者均未指示大火烈鸟的 3 秒候选段，共 47,531 个，仍可能包含其他鸟种鸣叫。

#### 混合协议与数据划分

混合前全部素材重采样为 32 kHz 单通道，每个 3 秒训练片段由大火烈鸟片段、其他鸟种干扰片段与背景段相加生成，\(K\) 为目标物种鸣叫数即段级标签，\(M\) 从 0 至 3 中随机抽取表示干扰数，每个片段赋予段内随机起始位置从而允许重叠，并赋予负 10 dB 至正 10 dB 的随机增益以模拟真实录音差异。默认目标计数范围为 0 至 50，每个计数值生成 150 个训练片段与 10 个验证片段，构成均衡的多密度多干扰数据集。为防止数据泄漏，源素材按录音划分训练与验证子集，片段只在各自子集内生成。训练集规模随 \(Kmax\) 增大而增加，因为每个计数值固定生成相同数量片段。

#### 平方根域损失与参数边界

回归器用平方根域均方误差训练，即先对真值 \(D\) 与预测分别开平方再求均方差，以缓解高密度样本主导优化并稳定高重叠样本的梯度。训练至多 100 个轮次，批量为 32，采用 AdamW 优化器，初始学习率为 0.0003，权重衰减为 0.0001，当验证均方误差 3 个轮次无改善时学习率乘以 0.5，最低至 0.000001，10 个轮次无改善时早停，梯度裁剪最大范数为 5.0。输入特征采用 SpecAugment，2 个频率掩蔽最大宽度为 12 个梅尔频带，2 个时间掩蔽最大宽度为 20 帧。鸟舍级线性回归用留一协议在 4 个大火烈鸟鸟舍上拟合。

参数更新边界清晰。第一阶段卷积循环回归器的全部参数参与梯度更新，第二阶段线性模型的 3 个参数 \(w1\)、\(w2\) 与 \(b\) 用最小二乘闭式求解，不与第一阶段联合反向传播。推理时回归器冻结，仅前向预测段级密度，线性系数固定为 88.86、负 34.67 与 38.46。原文未披露回归器总参数量与每轮训练耗时，因此无法核算单位数据的计算量与收敛效率。

### 开发集留一验证与官方评测的误差下降在何种口径下成立

评测围绕 BioDCASE 鸟类计数挑战赛展开。开发集包含 140,899 个 3 秒片段，来自欧洲动物园 6 个鸟舍，评测集包含约 380,000 个 3 秒片段，来自 10 个留出鸟舍。研究聚焦大火烈鸟，开发集中 4 个鸟舍含有该物种，评测集中 2 个鸟舍含有该物种，录音同时包含非目标鸟种与环境噪声。指标采用 MAE（平均绝对误差）、RMSE（均方根误差）与 R2（决定系数），前两者越低越好，后者越高越好，RMSE 对大误差惩罚更重。公平性口径需要区分两种拟合方式，官方评测的大火烈鸟估计来自在全部 4 个开发鸟舍上拟合的第二阶段模型，而开发集数字采用留一验证，每个鸟舍的估计来自未见过该鸟舍真值的模型，避免用自身真值校准自身。

下面的主结果表为开发集留一交叉验证结果，保留全部行列与原始符号。首行为表头，区分 4 个开发鸟舍的带符号误差与总体 MAE、RMSE、R2。首列为方法，真值行给出 4 个鸟舍的个体数，基线行与本方法行给出每个鸟舍的估计偏差，正号表示高估，负号表示低估，总体列给出平均误差与解释方差比例。该表是判断误差下降是否在不同种群规模下成立的关键依据，阅读时先看真值行的规模跨度，再对比两行在每个鸟舍的偏差绝对值，最后看总体列的下降幅度。

|  | Aviary-2 (Dev) | Aviary-4 (Dev) | Aviary-5 (Dev) | Aviary-6 (Dev) | MAE↓ | RMSE↓ | R2↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ground truth | 107 | 161 | 52 | 52 | – | – | – |
| Baseline | +9 | −64 | +5 | +14 | 23.0 | 33.2 | 0.46 |
| Ours | +1 | −2 | +2 | −1 | 1.5 | 1.6 | 0.99 |

总体上本方法把 MAE（平均绝对误差）从 23.0 降至 1.5，把 RMSE（均方根误差）从 33.2 降至 1.6，把 R2（决定系数）从 0.46 提升至 0.99。真值跨度从 52 只至 161 只，基线在 161 只的鸟舍低估 64 只，而本方法在该鸟舍偏差仅为负 2 只，在其余鸟舍偏差绝对值也不超过 2 只，显示在不同规模下均能保持个位数误差。官方评测集中大火烈鸟 MAE（平均绝对误差）从 69.0 降至 20.0，提交为 Yang WHU task6 1，在全部提交中排名第 1。原文说明另两个物种沿用调参后的官方基线，排名分数、RMSE 与 R2 在 3 个物种上联合计算，且大火烈鸟误差远高于另 2 物种，与其同步群叫导致更严重重叠的解释一致。

### 训练计数范围损失函数与抽样策略如何各自影响误差

#### 计数范围的非单调效应

为了理解生成数据的计数上限如何影响最终精度，可以阅读计数范围曲线图。该图横轴为最大目标物种鸣叫数 \(Kmax\)，取值为 10、20、30、40、50、100 与 200，每个取值对应独立生成并训练一个密度回归器，训练量随上限增大而增加。纵轴为开发集 MAE（平均绝对误差）与 RMSE（均方根误差），深色圆圈线为 MAE，橙色方块线为 RMSE，每个点旁标注具体数值，最低点用虚线引出最佳 MAE 为 1.5 与最佳 RMSE 为 1.6。观察时先看两条线是否同向起伏，再看最低点位置与两端抬升幅度。

[![原论文 Figure 3：Development-set MAE and RMSE for different target-species call count ranges \[0, Kmax\].](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/cec85249e1dd/figure-3.png)

*论文图 3：不同训练计数上限下的开发集误差曲线：上限为 50 时平均与均方根误差同时最低（原论文 Figure 3）。*

图显示两条线呈 U 形且同步起伏。\(Kmax\) 为 10 时 MAE 为 31.7，RMSE 为 36.5，\(Kmax\) 为 20 时分别降至 16.5 与 18.9，\(Kmax\) 为 30 时 MAE 为 18.0，RMSE 为 20.2，\(Kmax\) 为 40 时 MAE 为 20.0，RMSE 为 23.8，\(Kmax\) 为 50 时骤降至最低的 1.5 与 1.6，\(Kmax\) 为 100 时回升至 11.0 与 13.6，\(Kmax\) 为 200 时升至 42.8 与 45.7。范围过窄时模型学不好高密度片段，范围过宽时重叠更严重的样本使回归任务本身变难，抵消训练量增大的好处，退化方向与本工作强调的重叠难题一致。

#### 损失函数与抽样稳健性

在固定范围 0 至 50 下，4 种损失的总体误差差异明显。MAE 损失总体 MAE 为 6.5，RMSE 为 7.3，MSE 损失总体 MAE 为 33.3，RMSE 为 37.4，为四者中最差，平方根域平均绝对误差总体 MAE 为 5.8，RMSE 为 6.5，平方根域均方误差总体 MAE 为 1.5，RMSE 为 1.6，为四者中最低。该对比显示平方根变换缓解高计数样本在优化中的主导作用，其中平方根域均方误差同时取得最低的总体误差。在 4 个开发鸟舍上平方根域均方误差的偏差始终控制在 2 只以内，说明增益在不同规模上成立。原文未提供该消融的方差与显著性检验，也未消融频率与时间池化中均值与最大值各自的贡献。

下面的抽样稳健性表报告两个评测鸟舍在不同数据量与连续性下的种群估计，数值为均值加减标准差。首行为表头，区分抽样策略、抽样比例与两个鸟舍的估计。策略分为连续块抽样与随机抽样，比例分为 20%、50% 与 80%，每种组合无放回抽取 3 秒片段并重复 1,000 次。阅读时先看同一鸟舍内均值是否随比例漂移，再看标准差是否随比例缩小，最后对比同比例下两种策略的标准差差异。

| Strategy | Sampling ratio (%) | Aviary-4 (Eval) | Aviary-8 (Eval) |
| --- | --- | --- | --- |
| Contiguous | 20 | 41.1 ± 1.7 | 180.5 ± 20.0 |
| Contiguous | 50 | 40.8 ± 0.9 | 173.0 ± 5.8 |
| Contiguous | 80 | 40.4 ± 0.5 | 178.6 ± 1.8 |
| Random | 20 | 40.2 ± 0.7 | 183.9 ± 1.4 |
| Random | 50 | 40.2 ± 0.4 | 183.9 ± 0.7 |
| Random | 80 | 40.1 ± 0.2 | 184.0 ± 0.4 |

两个鸟舍的均值在全部策略与比例下保持稳定，随比例变化仅在个位数内波动，而标准差随比例增大而缩小。在每个比例下随机抽样的标准差均小于连续块抽样，20% 比例下差异最突出，其中 Aviary-8 评测鸟舍随机抽样标准差为 1.4，连续块抽样标准差为 20.0。该现象说明系统不依赖时序连续性，在只能使用部分录音的计算或存储受限场景下优先采用随机抽样。原文未给出这两个评测鸟舍的真值，因此该表只能证明稳定性，不能直接证明绝对精度的高低。

### 均值与标准差映射的假设边界与复现核对

本系统的结论依赖两个较强假设。第一，站点级描述仅用段级密度的均值与标准差，丢失分布形态与时序结构，线性映射能否在分布明显偏态或双峰时仍成立，原文未验证。第二，第二阶段需要已知数量的站点做最小二乘校准，开发集仅用 4 个大火烈鸟鸟舍，留一验证每次留出 1 个，样本量很小，跨设备、跨生境与跨年度的迁移能力未知。未来工作提出探索更丰富的分布描述与更少或零标注站点的校准方法，但本文未给出具体方案与证据。

部署条件的验证边界同样清晰。评测仅报告 MAE（平均绝对误差）、RMSE（均方根误差）与 R2（决定系数）三项客观误差，没有人工听测如 MOS 或 ABX，也没有神经代理指标的对比，不涉及可懂度或音质维度。推理代价方面，原文未披露延迟、前瞻、RTF、吞吐与显存，处理均为离线整段估计，未评估因果流式或低延迟分块。物种方面，结论集中在大火烈鸟这一同步群叫物种，另两个物种沿用调参基线，不能把大火烈鸟上的增益直接推广到非群叫物种。

复现核对需要区分三件事。第一，代码是否开源，原文未披露仓库链接与运行说明。第二，权重是否提供下载，原文未披露预训练模型与生成数据的获取方式。第三，系统是否可直接运行，原文未提供演示页面与一键流程。可依据的细节包括信号前端参数、编码器形状、循环层配置、混合增益与计数范围、优化器与早停策略，以及线性系数 88.86、负 34.67 与 38.46。附录方面，原文未披露补充证明、额外消融或许可限制，参考文献仅用于方法与指标来源。

从工程选型看，当目标为群居同步鸣叫物种且重叠严重、拥有少量站点级真值可做线性校准时，两阶段密度回归值得优先尝试，其代价是需要按录音划分生成均衡混合数据并仔细选择计数上限与平方根域损失。当群体较小且鸣叫可区分时，更简单的检测计数流程可能足够，不必引入密度回归与站点校准。若只能使用部分录音，随机抽样比连续块抽样更稳健，可在 20% 至 50% 比例下先做快速估计，再按需补足数据以缩小波动。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 32 kHz 单通道，片段时长 3 秒，对数梅尔谱 128 个频带，n_fft 为 1,024，hop 为 320，频率 50 至 12,000 Hz，幅度转分贝功率模式 top_db 为 80，逐样本 z 分数归一化，原文未披露窗函数细节与 RTF
- **训练与评测数据**：段级回归器用生成混合数据训练，含 429 个大火烈鸟野外文件过滤得到的 2,587 个片段，18 个其他鸟种的 337 个干扰片段，以及 47,531 个过滤背景段，默认范围 0 至 50 每值 150 个训练与 10 个验证，评测用 BioDCASE 鸟类计数挑战赛开发集 140,899 个 3 秒片段与评测集约 380,000 个片段
- **算力与训练耗时**：单个 NVIDIA RTX 4090 GPU 上训练至多 100 个轮次，批量 32，原文未披露训练耗时与多卡配置
- **核心超参数与配置**：AdamW 优化器初始学习率 0.0003 权重衰减 0.0001，验证 3 个轮次无改善减半最低 0.000001，10 个轮次早停，梯度裁剪范数 5.0，双向门控循环 2 层输入 256 隐 128 丢弃 0.25，SpecAugment 频率掩蔽 2 个宽 12 时间掩蔽 2 个宽 20，第二阶段最小二乘得 88.86 负 34.67 与 38.46
- **推理速度与部署开销**：每个 3 秒片段独立前向无自回归，第二阶段仅为线性计算，原文未披露延迟 RTF 吞吐与显存
- **开源产物与协议状态**：原文未披露代码仓库模型权重数据下载与演示页面的获取方式，无法确认公开状态
- **附录与补充材料要点**：原文未披露附录补充证明许可限制或失效案例，未来工作拟探索更丰富分布描述与更少或零标注站点校准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 6.7/10 | 技术严谨 6.6/10 | 实验充分 7.8/10 | 清晰度 5.6/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 7.3/10 | 工程/实践 4.5/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-64`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Yang_64.pdf)
- Track：P4-8

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：开发集留一法MAE由23.0降至1.5、R2由0.46升至0.99，评测集火烈鸟MAE20.0与综合分9.2均为全榜最低的第一名。

- 核心优势：固定[0,50]训练范围下Sqrt-MSE的MAE为1.5显著低于MAE的6.5与MSE的33.3，且四鸟舍误差均控制在2只以内。

- 核心优势：两阶段密度回归加均值标准差线性校准公式完整，源材料按录音级划分训练验证子集以防止数据泄漏。

- 主要短板：评测集火烈鸟MAE为20.0远高于开发集的1.5，站级监督仅4个开发集鸟舍，held-out泛化损失明显仍有过拟合风险。

- 主要短板：Quelea与Ibis沿用调参后官方基线且Quelea单列4.5弱于官方基线1.5，本文方法对非集群物种适用性未经验证。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
