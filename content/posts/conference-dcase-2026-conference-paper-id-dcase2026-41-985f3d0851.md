---
title: "Addressing Class Imbalance in Cross-Domain Mosquito Bioacoustic Species Classification via Multi-Task Learning"
date: 2026-11-27
draft: false
description: "针对跨设备蚊鸣识别中稀有种类稀缺与未见采集地失效，论文以多样增强、混合风格扰动、域对抗与四损失联合训练加置信度级联集成，在开发集将未见域平衡准确率由 0.1751 提升至 0.4016，代价是多分支训练与多模型推理开销，以及官方评测集回落至 0.205。"
tags: ["生物声学监测", "领域适应", "多任务学习", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨域蚊鸣种类识别中的类别不平衡与域偏移联合治理"
paper_digest_original_title: "Addressing Class Imbalance in Cross-Domain Mosquito Bioacoustic Species Classification via Multi-Task Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-41"
paper_digest_workbench_source_sha256: "2398b3edb038301c35ad59b1b4ced3bd5e6c5752b6d29b544bc7859634f0cdf2"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Lyu_41.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对跨设备蚊鸣识别中稀有种类稀缺与未见采集地失效，论文以多样增强、混合风格扰动、域对抗与四损失联合训练加置信度级联集成，在开发集将未见域平衡准确率由 0.1751 提升至 0.4016，代价是多分支训练与多模型推理开销，以及官方评测集回落至 0.205。"
paper_digest_reader_sections: [{"heading":"未见采集地失效与稀有种类稀缺构成的双重瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从录音到集成的端到端流程总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"频谱规格与针对稀有种的增强和采样","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"域不变编码器与四项损失的联合训练","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"开发集未见域提升与集成代价的定量剖析","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"泛化边界、复现前提与工程选型含义","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Meiting Lyu"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Ruicheng Liu"},{"affiliations":["Waseda University, Japan"],"name":"Xu Shen"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Zongye Chen"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Jiatong Wu"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Ziyu Wang"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Wei Liu"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China"],"name":"Gongping Huang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"dba6826f0466b902b90100e8a690dd5a5f505658ca6320b8c3abd2ad4f9c264a","url":"/audio-research-portal/client/papers/2026-11-27/conference-985f3d0851776277e9a06243/citation.bib"},"citation.json":{"sha256":"cef9e23dcb5787cf40b43a48cfb4167f15cfd6653abff04157550f962c7e7b39","url":"/audio-research-portal/client/papers/2026-11-27/conference-985f3d0851776277e9a06243/citation.json"},"citation.ris":{"sha256":"fe7ca9659c7722a28fd5c3746d08f278ac90336582d01fedc5a6e47926427b16","url":"/audio-research-portal/client/papers/2026-11-27/conference-985f3d0851776277e9a06243/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"897d34c53f92afc18e48e2e8ec53420d206b5cae2e87d53502a36c772ac85979","url":"/audio-research-portal/client/papers/2026-11-27/conference-985f3d0851776277e9a06243/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-41"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Lyu_41.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "253df1419daea1f9353a6eddfdedb2f9a558c50c5036104e0a8bce7ed6f2618c"
paper_digest_api_reader_plan_sha256: "c56433aa2974672dda5f3f4d6d8c3c31ed959fdb995954e40eb838c4994e53de"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3e30d160f50941618abdf0ea3c1c514d69447fa00983eb9d1285ac759122c98e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "290ff645f805b969a2b33f8a4e1f1711259ea86b3715c7fb6e7d8849c9508ae4"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "d24e9b09d9228996bd209873d57643f5b96798e9b776c86231e8cdb93b8042c9"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.domain-adaptation","label":"领域适应"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "多任务学习"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 跨域蚊鸣种类识别中的类别不平衡与域偏移联合治理

> 英文题目：*Addressing Class Imbalance in Cross-Domain Mosquito Bioacoustic Species Classification via Multi-Task Learning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-41`
> Track：P4-13



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Lyu_41.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[迁移学习](/audio-research-portal/papers/?concept=method.transfer) → [领域适应](/audio-research-portal/papers/?concept=method.domain-adaptation)；[多任务学习](/audio-research-portal/papers/?concept=method.multitask)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.1/10 | 技术严谨 6.7/10 | 实验充分 7.6/10 | 清晰度 5.5/10 | 影响力 5.3/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Meiting Lyu：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Ruicheng Liu：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Xu Shen：Waseda University, Japan
- Zongye Chen：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Jiatong Wu：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Ziyu Wang：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Wei Liu：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China
- Gongping Huang：Electronic Information School, Wuhan University, Wuhan, Hubei 430072, China

## 📌 核心摘要

**问题与瓶颈：** 跨域蚊种分类的输入为野外采集的蚊虫振翅飞行音，输出为 9 个蚊种标签之一，须在训练未见的记录域上保持可辨别性。现有路线在源域上易过拟合到设备、增益与环境底噪等域特异线索，而飞行音本身窄带、低信噪比，不同设备、地域与采集协议进一步放大分布偏移。训练集在物种间严重不均衡，稀有种录音短且少，短片段既浪费填充容量又限制时序上下文。官方评测以可见域平衡准确率 BAseen 与未见域平衡准确率 BAunseen 分开报告，并以两者绝对差即域偏移间隙 DSG 越低越好为次要指标，直接暴露新域退化程度。

**核心思路与方法架构：** 与仅用交叉熵训练单一主干的最接近基线相比，本文增量在于以类平衡采样与针对性增强缓解不均衡，以特征统计扰动与四任务联合优化逼迫编码器保留种属相关线索，并以置信度门控级联集成补足单模型短板，其余数据划分与评测协议保持不变。特征侧每段录音重采样到 8 kHz 并峰值归一化后转为 128 梅尔对数谱，计算采用 512 点 Hann 窗、80 点跳跃，覆盖 200–4000 Hz，再经 99.5 分位削波与 0.5 概率的逐频带本底扣除。增强后的单通道谱送入 ImageNet 预训练的 DenseNet121 编码器，首卷积沿通道求和适配单通道，主干前附加沿频率轴的批量归一化，并在 pool0 与 transition2 后插入 MixStyle 模块，以 Beta(1, 1) 采样的混合系数在小批量内插值通道均值与标准差，训练时模拟域变化。尾部经压缩激励重标定与两层多层感知机投影到 128 维 L2 归一化嵌入，共享给物种 CosFace 头、3 类属头与经梯度反转层的 5 类域头，训练时联合优化物种、属、域与监督对比四项损失，推理时关闭 CosFace 裕度并按置信度级联决策，流式与因果约束未说明。

**关键实验与核心代价：** 在开发集测试划分上，集成系统在未见域的 BAunseen 为 0.4016，高于官方基线的 0.1751，同表可比条件下开发集单模型 BAunseen 为 0.3533，集成后提高到 0.4016，总体测试 BA 从 0.5159 提高到 0.5602，物种准确率为 0.6361，DSG 从 0.3228 降低到 0.2987，其中 DSG 越低越好。主干对比显示 DenseNet121 在可见域与未见域分别取得 0.912 与 0.194，均高于同表其余 6 个卷积主干的对应数值，方向均为越高越好。渐进消融显示在 MTRCNN 基线 BAunseen 为 0.175 的基础上，加入类平衡采样后为 0.238，再加针对性 SpecAugment 后为 0.245，再加选择性 GRL 后为 0.266，再加短片段拼接后为 0.275，可见域准确率则从 0.881 缓慢下降到 0.821。损失消融中物种加属损失取得 BAunseen 为 0.288，另两行同标记行分别取得 0.266 与 0.256，四损失联合取得 0.299 与最低 DSG 为 0.576。本任务为闭集分类，无人工听测要求，代价是三模型级联与多损失调参增加复杂度，原文未提供可核对的延迟与吞吐实测，官方评估集上 BAunseen 仅为 0.205，高于基线的 0.172 但远低于开发集的 0.4016，且 DSG 为 0.431，差于基线的 0.409。

**适用边界与深读导览：** 结论成立前提是遵循官方 trainval 与测试划分的 9 物种 5 记录域开发集分布，稀有种在未见域样本极少，如 An. dirus 仅 40 个样本，跨采集协议与新地域的完全未见条件不在保证范围内。官方评估集的大幅回落表明对全新记录条件的泛化仍不足，集成阈值依赖开发集调优，跨域部署时需重新校准。若需深究特征扰动公式与四损失权重调度，可查阅下方方法概述和架构与细节详述，若需核对分域与分物种退化，可查阅实验结果中主干、消融与集成对比。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 未见采集地失效与稀有种类稀缺构成的双重瓶颈

蚊媒疾病仍是全球公共卫生的重大威胁，准确识别蚊种是监测与防控的前提。视觉方法依据外观分类已有进展，但依赖图像质量与捕获条件，在野外布设时多有不便。音频监测无需高分辨率成像，可低成本大面积部署，因而受到关注。蚊鸣飞行音本质是窄带振翅声，常在偏低信噪比下录制，并随麦克风、增益、距离、地域与声环境变化，模型易记住地点相关的底噪与混响，而非种类相关的谐波结构。

BioDCASE 2026 跨域蚊种分类任务为此提供统一基准，覆盖 9 个物种与 5 个记录域 D1 至 D5，包括埃及伊蚊、白纹伊蚊、致倦库蚊、冈比亚按蚊、阿拉伯按蚊、迪拉斯按蚊、淡色库蚊、微小按蚊与斯氏按蚊。评价将已见域平衡准确率 BAseen 与未见域平衡准确率 BAunseen 分开报告，域偏移差距 DSG 定义为两者绝对差，越小越好。同一物种在不同域的未见测试量差异极大，例如阿拉伯按蚊在 D1 有 1,820 个，而迪拉斯按蚊在 D4 仅 40 个，这为衡量退化提供了具体口径。

另一重困难是严重的类别不平衡。稀有种类捕获少且活动具季节性，短录音进一步挤占有效时长，常规交叉熵易偏向多数类。单一分类目标也难以兼顾种类可分与域稳健，官方基线在未见域仅 0.1751，说明跨域是实际部署的中心瓶颈。输入可定义为一段飞行音录音，输出为 9 选一的种类标签，附带属与域作为辅助监督。训练与测试采集条件不一致，且各类样本量悬殊，决定了方法须同时扩大样本多样性并抑制域相关线索。

已有主流路线多在单一目标下改进特征或损失，但物理与统计瓶颈依然清晰。物理上窄带谐波易被稳态底噪与脉冲噪声淹没，不同站点增益与距离带来幅度漂移。统计上多数类主导梯度，编码器易利用站点伪影走捷径。本文框架因此围绕四点展开，分别为多样增强、特征级扰动、多损失约束与面向特定种类的集成推理，后续小节将按数据流逐一拆解其输入输出与前提代价。

### 从录音到集成的端到端流程总览

整体流程可概括为特征提取、增强采样、编码嵌入、多头训练与集成推理 5 个环节。录音先重采样至 8 kHz 并做峰值归一化，再转为 128 个梅尔频带的对数梅尔频谱。频谱经短片段拼接、幅度缩放与谱增强三重增强，并按有效样本数权重做类别均衡采样。采样结果进入 DenseNet121 编码器，经混合风格 MixStyle 扰动与压缩激励重加权后投影为 128 维归一化嵌入，同时接受种类、属、域与对比 4 个分支的联合约束，测试时再由 3 个互补模型按置信度级联给出最终种类。

阅读框架示意图时，建议沿从左向右的主箭头追踪张量去向，先看 3 路增强如何汇入均衡采样，再看编码器与嵌入的衔接。底部展开链展示了稠密编码器内部两个混合风格模块的插入位置，右侧 4 个任务头中 3 个为实线指向，一个域头为虚线指向。抓住实虚线的区别，就能理解反转梯度在反向传播中阻断域信息的作用，后一段将对照像素逐块解释颜色与箭头含义。

[![原论文 Figure 1：Overview of the proposed framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/fb8e6a6ccb75/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/fb8e6a6ccb75/figure-1.png)

*论文图 1：多任务蚊种分类整体流程：对数梅尔特征经增强与均衡采样进入含混合风格与压缩激励的稠密编码器并分出四个任务头（原论文 Figure 1）。*

像素显示主路径自左向右依次为白色音频片段、蓝色特征提取、绿色三框并列、橙色均衡采样、黄色稠密分类器、红色压缩激励层与蓝色嵌入。嵌入向右引出 4 条分支，其中上 3 条实线指向淡紫色余弦边距分类器、属分类器与种类对比分支，最下一条虚线指向灰色域反转梯度头。底部黄色长链进一步展开编码器，依次为归一化与池化、第一个混合风格模块、稠密块至过渡层、第二个混合风格模块与后续稠密块至归一化，与正文所述插入位置一致。

相对最近的基线设置，该框架保留了卷积编码器处理二维频谱的思路，替换与新增集中在稳健性环节。新增包括特征统计插值的域扰动、通道重加权的压缩激励、利用亲缘结构的属辅助任务、掩膜式域对抗与有监督对比约束，以及针对稀有种的加倍掩膜与短拼接。保留的是对数梅尔输入与交叉熵分类主线。收益是未见域可分性提升，代价是训练分支增至四项损失并需维护 3 个推理模型，调试与计算负担明显加重。

### 频谱规格与针对稀有种的增强和采样

特征提取将每段录音重采样至 8 kHz，峰值归一化后以 512 点汉恩窗、 80 点跳步计算对数梅尔频谱，频带数为 128，覆盖 200 Hz 至 4,000 Hz。记频谱为 \(X\)，时间帧数为 \(T\)，频带数为 \(F\)，则单样本形状为 \(T\) 行 \(F\) 列。随后先对每张频谱按 99.5 分位截幅以抑制偶发脉冲噪声，再以 0.5 概率减去按时间轴 10 分位估计的每频带稳态底噪。超过 200 帧即 2 秒的片段裁为固定 200 帧窗口，训练时起点均匀随机，验证与测试时固定在起始处。以 1 秒为例， 8,000 个采样点约对应 100 帧，形状约为 100 行 128 列，组批后为 \(B\) 批 1 通道 \(T\) 帧 \(F\) 带，例如批量 64 时 1 秒输入约为 64 乘 1 乘 100 乘 128。

三重增强仅在训练期按序作用于频谱。记片段帧数为 \(n\)，若 \(n\) 小于 65，则沿时间轴拼接一段同种随机片段，若无同种可用则保持不变，以减少稀有种因短录音造成的填充浪费与上下文缺失。幅度缩放将频谱乘以服从 0.5 至 1.5 均匀分布的因子 \(\alpha\)，模拟不同麦克风、增益与距离带来的幅度差异。谱增强 SpecAugment 则施加一个至多 10 帧的时域掩膜与一个至多 16 个梅尔格的频域掩膜，对序号 5、 7 与 8 的迪拉斯按蚊、微小按蚊与斯氏按蚊 3 类最稀有物种，每种掩膜数量加倍，以对易过拟合的类别施加更强正则。

即便经过增强，训练集在 9 个目标种之间仍高度不平衡。每个物种 \(c\) 的样本量记为 \(n_{c}\)，采样权重按有效样本数形式随样本量增大而饱和，控制系数 \(\beta\) 取 0.999。该权重同时用于训练时的加权采样与种类损失的加权，直觉是多数类新增样本的边际效益递减，稀有类应获得更高的抽中概率与梯度比重。但加权只能改变抽样频率，不能创造新的声学变体，若无增强配合，稀有类仍易记住个别录音的偶然细节。

需要如实说明未披露的规格边界。编码器内部各稠密块的通道数、下采样倍数与帧率变化原文未给出，1 秒示例经编码器后的时间分辨率无法精确追踪，仅知池化特征最终投影至 128 维嵌入并做 L2 归一化。教学例子中的形状为按采样率、窗长与跳步推算的示意，不补无来源数值。首卷积由 3 通道求和适配单通道以保持原始响应量级，以及沿频率轴的前置批归一化，均属于输入分布层面的工程处理，不改变上述张量流的主干结论。

### 域不变编码器与四项损失的联合训练

主干采用在 ImageNet 上预训练的 DenseNet121 编码器，首卷积沿通道求和以适配单通道频谱输入，并在主干前加入沿频率轴的批归一化。为学习域不变表示，在池化层后与第二个过渡层后插入混合风格 MixStyle 模块。同一小批量内随机配对样本 \(x\) 与打乱版本，计算各自通道均值与标准差，再以服从 Beta(1, 1) 的系数 \(\lambda\) 插值得到混合统计量并重整特征，训练时即在特征层模拟域变化。末稠密块后加入压缩比为 16 的压缩激励模块，按全局平均池化得到的门控标量重加权各通道。池化特征经两层感知机映射至 128 维嵌入，结构为线性、归一化、激活、 0.5 丢弃、线性与归一化，最后做 L2 归一化并被 3 个任务头共享。

共享嵌入分出 4 个分支。种类头计算嵌入与各类权重向量间的余弦夹角 \(\theta_{c}\)，对真实类减去角边距 0.2 再乘尺度 30 得到对数几率，推理时关闭边距。属头以线性层映射至伊蚊、库蚊与按蚊 3 类，利用同属亲缘结构提供分类学一致的辅助监督。域头以两层感知机预测 D1 至 D5，嵌入与分类器之间插入系数为 1.0 的反转梯度层，前向不变而反向取反，使编码器被迫丢弃域可分信息。序号为 5 的迪拉斯按蚊因样本最少且早期缺乏可靠种类特征，其样本以二值掩膜排除在域损失之外，避免干扰域对抗的稳定。

总目标为四项加权和，种类权重为 1.0，域权重为 0.5，对比权重为 0.5，属权重由 1.0 线性衰减至 0.5 后固定。种类损失在余弦边距对数几率上采用聚焦系数为 2.0 的聚焦损失并加 0.1 标签平滑，再乘有效数权重。属损失为加 0.1 平滑的交叉熵，域损失为掩膜后的交叉熵，对比损失为温度 0.05 的有监督对比损失，将同种视为正例在超球面拉近同种、推远异种。4 路梯度在共享编码器汇合，其中域分支经反转层取反，形成种类可分与域不变之间的相互制衡，任一分支过强都可能损害另一目标。

优化采用 AdamW，学习率取 0.001，权重衰减取 0.0001，批量取 64，至多训练 100 轮。若验证集种类平衡准确率连续 6 轮无提升，学习率乘 0.5，下限为 0.000001，至少热身 15 轮且耐心为 10 轮时早停，全部训练在单张 RTX 3090 GPU 上完成。推理采用 3 轮置信度级联融合，首模型仅在 Softmax 置信度超过按种类设定的 0.5 至 0.6 阈值时接受，次模型以较低阈值处理被拒样本，剩余难例由第三模型无阈值兜底以保证每段录音均有预测。原文未披露延迟、实时率与显存开销，集成需运行不同主干、梅尔分辨率与掩膜配置的 3 个模型，计算量约为单模型的数倍。

### 开发集未见域提升与集成代价的定量剖析

评测遵循官方训练验证与测试划分，报告种类级宏平均召回，分别计已见域与未见域，并给出分域平衡准确率，排序首看未见域，次看差距。未见域样本极不均衡，阿拉伯按蚊在 D1 有 1,820 个测试样本，而迪拉斯按蚊在 D4 仅 40 个，淡色库蚊在 D3 仅 68 个，斯氏按蚊在 D4 仅 74 个。基线对照采用仅交叉熵、无均衡与无域适应的 7 种卷积主干，以识别合适的特征提取器。公平性上参数量、码率与因果流式等前提原文未系统披露，且全程无人工听测，仅以分类准确度量，不涉及神经代理分数与主观平均意见分的对照。

主结果显示最佳单模型未见域为 0.3533，集成后升至 0.4016，明显高于官方基线的 0.1751。集成整体平衡准确率由 0.5159 升至 0.5602，种类准确率由 0.6219 升至 0.6361，差距由 0.3228 缩至 0.2987。分域看 D2 在测试集达 0.7135， D5 达 0.7003，而 D4 仅 0.1182，成为明显短板。七主干基线对照中稠密网络已见为 0.912，未见为 0.194，均为最高，但未见绝对值仍不足 0.2，说明若无均衡与域适应，仅换主干无法解决跨域失效。

渐进消融基于 MTRCNN 基线，已见 0.881，未见 0.175，差距 0.706。加入均衡采样后未见升至 0.238，差距缩至 0.634。叠加针对性谱增强后未见为 0.245，差距为 0.612。再加选择性反转梯度后未见为 0.266，差距为 0.561。最后加短拼接后未见为 0.275，差距为 0.546，而已见缓降至 0.821，呈现以已见小幅下降换未见持续上升的权衡。3 模型分工互补，例如第二模型在冈比亚按蚊召回为 0.2934，远高于第一模型的 0.0098，损失组合消融固定全部模块，仅变损失搭配，单加对比或单加域对抗均未改善未见，四损失齐备时未见达 0.299 且差距最小为 0.576。

方差与失效同样重要。主干对照报告 10 个随机种子的均值与标准差，如 MobileNet 已见标准差达 0.232，显示训练不稳定。损失消融为 5 个种子平均，单加域对抗时未见标准差达 0.025，提示域分支引入波动。未胜出项包括 EfficientNet 未见仅 0.113，为七者最低。3 个单模型对迪拉斯按蚊召回均为 0.0000，对致倦库蚊亦接近于零，说明稀有与易混种类仍未被攻克。官方评测集上集成未见回落至 0.205，已见为 0.636，差距为 0.431，仅略高于基线的 0.172、 0.582 与 0.409，且差距反而略大，表明开发集增益不能直接外推至全新采集条件，未评测范围包括新设备与季节变化。

### 泛化边界、复现前提与工程选型含义

方法隐含多项假设，其边界决定了结论成立的前提。混合风格与幅度缩放假设训练域的统计插值可覆盖未见域的变化，属监督假设同属共享可迁移声纹，域对抗假设抑制域可分即保留种类相关。针对序号 5 样本的掩膜与稀有种加倍掩膜假设强正则可弥补样本不足。这些在开发集测试上带来未见域由 0.175 附近升至 0.4016 的改善，但在官方评测集上仅由 0.172 升至 0.205，说明当记录条件完全更新时，外推能力迅速衰减。

未验证的部署条件构成另一层代价。原文未披露延迟、实时率、吞吐与显存，集成需依次运行 3 个不同梅尔分辨率与掩膜配置的模型，计算量约为单模型的数倍。野外低功耗设备难以承担此类开销，且原文未测试流式分块、前瞻窗口与缓存策略。若以单模型部署，未见域将回落至 0.3533 附近，是否接受约 0.048 的未见提升换取数倍推理成本，需要结合功耗与响应要求具体权衡。

复现核对需区分三件事。训练数据为 BioDCASE 2026 个任务 5 开发集，含 9 个蚊种与 5 个记录域的官方划分，优化器、学习率、批量、轮数、调度与早停均已给出，在单张 RTX 3090 GPU 上可复现训练流程。但代码、权重、数据下载与演示链接原文未提供，本次亦未发现可用公开资源，不能视为已开源。附录仅为参考文献，无额外证明或失效案例，复现时须自行实现频谱截幅、底噪相减与掩膜加倍等细节，任何默认参数的改动都可能改变稀有种的稳定性。

工程选型上，若目标为未见域稳健且可接受多模型成本，可采用均衡采样加选择性域对抗加短拼接的组合，并优先验证稠密连接主干。若资源受限，则需评估集成收益是否值得额外开销，或退回单模型加四损失的折中方案。原文未提供试听页，无法对照听感验证谐波与底噪的分离效果，建议对照混淆矩阵重点检查按蚊稀有种与 D4 域，再决定是否引入属约束与对比约束，避免在已见域上付出不必要的下降。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：重采样至 8 kHz，512 点汉恩窗，80 点跳步，200 Hz 至 4,000 Hz 范围内 128 个梅尔频带，超过 200 帧即 2 秒裁固定窗，推理延迟与实时率原文未披露
- **训练与评测数据**：BioDCASE 2026 个任务 5 开发集，9 个蚊种跨 5 个记录域 D1 至 D5，官方训练验证与测试划分，未见域每种 40 至 1,820 个样本，时长分布原文未披露
- **算力与训练耗时**：单张 NVIDIA RTX 3090 GPU，至多 100 轮训练，验证平衡准确率连续 6 轮无提升则学习率乘 0.5，早停热身 15 轮耐心 10 轮，总耗时原文未披露
- **核心超参数与配置**：AdamW 优化器，学习率 0.001，权重衰减 0.0001，批量 64，有效数权重系数 0.999，混合风格 Beta(1, 1)，余弦边距尺度 30 边距 0.2，聚焦系数 2.0，标签平滑 0.1，对比温度 0.05
- **推理速度与部署开销**：三模型置信度级联融合，阈值 0.5 至 0.6 与较低阈值及无阈值兜底，边距推理关闭，参数量与显存延迟原文未披露，计算量约为单模型数倍
- **开源产物与协议状态**：原文未提供代码权重数据下载或演示链接，本次未发现可用公开资源，不视为已开源，复现需自行实现
- **附录与补充材料要点**：无附录证明与补充消融，参考文献 26 篇，官方评测集结果在正文末披露，未见域 0.205，已见域 0.636

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.1/10 | 技术严谨 6.7/10 | 实验充分 7.6/10 | 清晰度 5.5/10 | 影响力 5.3/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.5/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-41`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Lyu_41.pdf)
- Track：P4-13

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：开发集集成BAunseen从单模型0.3533提升至0.4016且大幅超越官方基线0.1751，并报告多种子均值方差。

- 核心优势：给出MixStyle插值公式、四损失权重调度、CosFace裕度与选择性GRL掩码等完整可核对设计细节。

- 核心优势：在官方评估集上如实保留BAunseen仅0.205且DSG差于基线的负结果，体现诚实报告与公开泛化验证。

- 主要短板：损失消融表两行勾选标记字面完全相同却报告不同数值且正文未解释，存在表内标记矛盾。

- 主要短板：官方评估集BAunseen从开发集0.4016大幅回落至0.205且DSG为0.431差于基线0.409，显示泛化不足。

- 主要短板：三模型级联增加复杂度但原文未提供可核对的延迟吞吐RTF或功耗实测，工程实测缺失。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
