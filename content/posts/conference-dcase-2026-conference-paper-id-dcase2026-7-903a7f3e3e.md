---
title: "An S5 System based on Multi-stage Separation and Classification"
date: 2026-11-27
draft: false
description: "针对多通道混合中目标与干扰数量可变且同类多源难以兼顾计数分离与分类的问题， 本文采用联合分离计数加集成分类加类别提示精修的三阶段级联， 在最终评测集获得 CA-PI-SDRi 为 12.94 dB 与标签准确率为 76.92% 的分类最佳， 代价是集成 10 个计数模型与 5 个分类模型的高推理成本与精修增益有限。"
tags: ["模型集成", "Transformer", "音频分类", "音频分离"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多阶段分离计数分类与精修实现空间语义分割"
paper_digest_original_title: "An S5 System based on Multi-stage Separation and Classification"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-7"
paper_digest_workbench_source_sha256: "63ed8ec44d660534a014b822c111064f5042c488ecf90fcc77da324e7415bfe5"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saijo_7.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分离"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对多通道混合中目标与干扰数量可变且同类多源难以兼顾计数分离与分类的问题， 本文采用联合分离计数加集成分类加类别提示精修的三阶段级联， 在最终评测集获得 CA-PI-SDRi 为 12.94 dB 与标签准确率为 76.92% 的分类最佳， 代价是集成 10 个计数模型与 5 个分类模型的高推理成本与精修增益有限。"
paper_digest_reader_sections: [{"heading":"空间语义分割为何必须同时回答有几个是什么与怎样分开","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三阶段级联如何把计数分离分类与精修串成一条流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"联合分离计数如何用计数令牌解耦表征与可变源输出","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"分离波形分类与类别提示精修如何抑制残留干扰","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"精修增益有限而分类集成带来最强标签准确率","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"计数令牌长度预训练与分类器集成的消融指向何处","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界未验证条件与复现核对如何影响工程选型","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Information Technology R&D Center, Mitsubishi Electric Corporation, Kanagawa, Japan"],"name":"Kohei Saijo"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Yoshiki Masuyama"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Christoph Boeddeker"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Gordon Wichern"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Julius Richter"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Takahiro Edo"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA"],"name":"Jonathan Le Roux"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"0a7b9c795278c341203d714f8d2ba1c88de93431820446dfef884dea7588a198","url":"/audio-research-portal/client/papers/2026-11-27/conference-903a7f3e3e5cad02b899be97/citation.bib"},"citation.json":{"sha256":"3bfc5f102bc9ed6857bad30bc53136b8ec71206d631887feb2a9c4235e8a3dd2","url":"/audio-research-portal/client/papers/2026-11-27/conference-903a7f3e3e5cad02b899be97/citation.json"},"citation.ris":{"sha256":"c7a186ab2b3baf8cf6fef9440c3e303698b923de94bed177c2fa731aae7ffd2b","url":"/audio-research-portal/client/papers/2026-11-27/conference-903a7f3e3e5cad02b899be97/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"97c4850243eebe6dbed601f89be27d11d0a03402795ca9653336670f48de36ba","url":"/audio-research-portal/client/papers/2026-11-27/conference-903a7f3e3e5cad02b899be97/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-7"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saijo_7.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e6ad26ae8bcbfa3db800ef6719f3960b6aafcb788deb158323e8be9945cdaf77"
paper_digest_api_reader_plan_sha256: "cf8673c2544e8088eeafd24c4ef899411ae3163d0e6c527107ed41448d108c25"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d6031c512f961cfc361ffd4cf8f330c34e9f76051c43cfb7024d3d99d2d661c3"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "29f9b355b1142a81108a277daaeff9910a629a70e3d9d31ab49fd82b64199765"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "55a10e77efd64f361e0dbd7357cda4d701eb08676adcefa915289071c6a0304f"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "11813002a43e83882bebfafde468f6d32deda282d654138eb4e4b8d003180950"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.model-ensemble","label":"模型集成"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.audio-separation","label":"音频分离"}]
paper_digest_primary_method: "Transformer"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多阶段分离计数分类与精修实现空间语义分割

> 英文题目：*An S5 System based on Multi-stage Separation and Classification*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-7`
> Track：P2-5




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saijo_7.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)；[音频分离](/audio-research-portal/papers/?concept=task.audio-separation)
- **研究方法**：[模型融合](/audio-research-portal/papers/?concept=method.model-combination) → [模型集成](/audio-research-portal/papers/?concept=method.model-ensemble)；[Transformer](/audio-research-portal/papers/?concept=method.transformer)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 7.7/10 | 清晰度 6.9/10 | 影响力 7.2/10 | 开源 0.0/10 | 可复现 7.0/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Kohei Saijo：Information Technology R&D Center, Mitsubishi Electric Corporation, Kanagawa, Japan
- Yoshiki Masuyama：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA
- Christoph Boeddeker：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA
- Gordon Wichern：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA
- Julius Richter：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA
- Takahiro Edo：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA
- Jonathan Le Roux：Mitsubishi Electric Research Laboratories (MERL), Cambridge, MA, USA

## 📌 核心摘要

**问题与瓶颈：** S5 任务输入为 4 通道一阶 Ambisonics（first-order Ambisonics，FOA）混合信号，包含 0 至 3 个目标声源、0 至 2 个干扰声源与背景噪声，目标覆盖 18 个预定义类别，要求在全向 W 通道上分离每个目标并给出类别。同一类别可出现多个声源，计数、分离与分类必须联合完成。先打标签再分离的路线难以处理同类多源，先分离再分类的路线则受固定输出槽与能量阈值影响，对残留干扰敏感且需逐类别调阈。若计数与分离共用同一特征，增大计数损失权重会损伤分离质量，形成表示耦合瓶颈。

**核心思路与方法架构：** 与 2025 年优胜的先分离后分类级联相比，本文保留三级级联但将计数解耦并引入类别条件精炼与多模型集成。样本经短时傅里叶变换（short-time Fourier transform，STFT）进入谱特征压缩（Spectral Feature Compression，SFC）编码器得到 D 维特征，再与可学习 CLS 词元拼接后送入第一组 TF-Locoformer 块。计数头对 CLS 词元做卷积、池化与平均后经 Softmax 在 0 至 5 源间判决，判决数驱动选择对应线性层将共享特征扩展为对应源数特征，各源特征经权重共享的第二组 TF-Locoformer 块与 SFC 解码器得到单通道分离信号。第二级分类器对每路 W 通道信号提取 BEATs 等表示并输出 19 类软标签，第三级精炼模型将混合与多通道多帧维纳滤波（multi-channel multi-frame Wiener filter，MCMFWF）优化后的分离信号拼接编码，并以类别相关提示向量替代 CLS 词元，经逐源乘积与共享块解码得到最终目标信号，分为同时估计多源的 MIMO 与逐源提取的 SISO 两种变体。

**关键实验与核心代价：** 在最终评测集上，最优 SISO 精炼系统类感知排列不变信干比提升（class-aware permutation-invariant signal-to-distortion ratio improvement，CA-PI-SDRi，越高越好 ↑）为 12.94 dB，高于官方基线的 6.76 dB，混合级分类准确率为 76.92%，高于基线的 55.16%。仅用前两级的 System 1 已达 12.77 dB 与 75.00%，加入精炼仅带来小幅增益。第一级消融显示 CLS 词元 T' = 4 在验证集取得 92.44% 计数准确率与 13.75 dB 的 CA-PI-SDRi，高于共用特征 Z 的 91.39% 与 13.50 dB，无混合不变训练（mixture invariant training，MixIT）预训练时则从 13.75 dB 回落至 12.67 dB。第二级集成 5 个表示模型在开发测试集取得 79.10% 混合级与 84.08% 源级准确率，高于单个 BEATs 的 76.32% 与 81.78%。代价是计数用 10 模型集成、分类用 5 模型集成且需两轮分离，原文未报告实时率或时延实测，也未做人工主观听测。

**适用边界与深读导览：** 结论成立于 FOA 4 通道、目标至多 3 个且干扰至多 2 个、18 类封闭集与 10 s 左右混合的评测条件，当 4 个及以上声源被判为目标时精炼系统（System 2 至 System 4）按类别概率丢弃至 3 个。对开放类别、移动声源、流式低时延部署与强混响下计数失效的情形原文未验证。原文未提及音频演示。需深究计数解耦公式与提示精炼结构可查下方方法概述和架构，需核对消融与混淆矩阵可查实验结果中表 2、表 3 与相关描述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 空间语义分割为何必须同时回答有几个是什么与怎样分开

空间语义分割要求从多通道混合录音中同时回答 3 个问题： 场景中有几个非背景声源， 每个声源的波形是什么， 每个波形属于哪一个语义类别。 原文把混合建模为 K 个目标源、 J 个干扰源与背景噪声之和， 其中 K 取 0 至 3， J 取 0 至 2， 全部信号以一阶 Ambisonics 格式记录， 通道数 M 为 4。 目标源限定为 18 个预设类别， 干扰源来自其余类别， 最终需在全向 W 通道上输出分离波形并给出每路标签。

已有主流路线在顺序上存在分歧。 挑战基线先做混合级标注再按估计类别分离， 并引入静音类统一处理分类与计数。 2025 年参赛路线之一改用帧级事件检测获得较强分类效果， 但难以处理同一类别出现多个实例的情形。 另一路线先分离再分类， 以较强分离性能获得当年第一， 但分类仍有提升空间。 这些路线共同暴露物理与统计瓶颈： 固定输出槽位需靠能量阈值判断空槽， 阈值随类别与残留干扰漂移， 同类多源与数量未知使排列与标签对齐更加脆弱。

从输入输出看， 系统输入为多通道时频混合， 输出为数量可变的单通道波形集合与对应标签。 评测同时惩罚 3 类错误： 数量估计错误导致多出或缺失声源， 分离波形失真降低信干比， 标签错误进一步拉低类感知指标。 原文采用 CA-PI-SDRi、 混合级准确率与声源级准确率， 其中 CA-PI-SDRi 对类别错误敏感， 而消融中另用与类别无关的 SDRi 做对照。 这种设计使计数、 分离与分类误差相互牵连， 任何一环的偏差都会向下游传播。

本文的总体思路是把三件事拆成可独立优化又能级联的阶段： 先用联合分离计数模型输出全部非背景声源与总数估计， 再对每路分离信号做单标签分类， 区分 18 个目标类与干扰类， 最后用类别感知的精修模型结合原始混合、 初分离结果与预测标签重新分离。 该设计沿用 2025 年优胜系统的分离优先思想， 但以可变源输出与计数令牌替代能量阈值， 以大规模预训练与集成分类器弥补分类短板， 以提示驱动的精修争取额外增益。 后续小节沿这一流程追踪张量与训练细节。

### 三阶段级联如何把计数分离分类与精修串成一条流程

与最近基线相比， 实质改动集中在三处。 第一阶段以 TF-Locoformer 为骨干并加入谱特征压缩编码器与解码器， 将固定源分离扩展为可变源分离， 计数不再依赖能量阈值而由专用计数分支经线性层与 Softmax 在 0 至 5 源上做六分类。 第二阶段放弃混合级标注， 直接在分离波形上训练 5 个通用音频表征分类器并做概率平均， 类别数扩为 19 类以显式容纳干扰。 第三阶段把分离器改为类别提示驱动， 用可学习提示向量替代计数令牌， 并引入多通道多帧维纳滤波后的信号作为辅助输入， 提供多输入多输出与单输入单输出两种精修形态。

以 1 秒 W 通道片段为例追踪端到端形状变化有助于一次看清全貌。 混合的 4 通道波形经短时傅里叶变换得到 2M × F × T 复谱堆叠， 其中因子 2 对应实部与虚部， F 与 T 分别为频点与帧数。 谱特征压缩编码器经交叉注意力把频率压缩至 F′ 为 48， 得到 D 为 64 的特征 Z。 计数令牌 C 与 Z 在时间维拼接后送入第一组 TF-Locoformer 模块， 计数分支池化并平均后输出总数估计 N̂。 源数相关线性层把 Z 映射为 N̂ D 维并重排为每源 D 维特征， 经第二组模块与解码器恢复为每源 2 × F × T 波形谱再逆变换为波形。 分类器在波形域提取特征并做时间平均， 输出 19 维软标签， 精修阶段再把混合、 初分离与标签提示汇合为最终 K̂ 路目标波形。

下图为原文系统总览， 建议沿箭头先看主路径再看丢弃分支。 左侧混合同时进入第一阶段与第三阶段， 第一阶段输出进入第二阶段分类， 分类结果与分离结果共同经过两次丢弃后与原始混合一起进入精修。 注意图中蓝色为分离与精修模块， 浅橙色为分类集成， 下方两个白色框为干扰丢弃与数量截断， 右端输出为最终 K̂ 路声源。

[![原论文 Figure 1：Overview of our system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5f03975528c6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5f03975528c6/figure-1.png)

*论文图 1：三阶段级联流程示意：联合分离计数经分类与两次丢弃后与原始混合汇入类别提示精修（原论文 Figure 1）。*

图中显示第一阶段框内标注分离与计数， 输出以双线进入分类， 分类框以叠影表示多模型集成。 下方标注 K̂ 加 Ĵ 路声源与标签， 经丢弃干扰得到 K̂ 路标签与声源， 再经标注为 min(0， K̂ 减 3) 的框截断至多 3 路后送入精修。 原文正文表述为当目标数超过 3 时按类别概率从低到高丢弃至 3 路， 此处照录图中文字而不改写符号。 顶部长箭头表示原始混合直达精修， 说明精修同时利用观测混合、 初分离与类别提示 3 类信息。

### 联合分离计数如何用计数令牌解耦表征与可变源输出

第一阶段编码器输入为 M 通道短时傅里叶谱堆叠， 经谱特征压缩编码器以 F′ 个可学习查询做交叉注意力， 把频率维压缩至 48 而保持时间维， 得到 D 为 64 的特征 Z。 可学习计数令牌 C 在时间维与 Z 拼接并在频率维广播， 一起送入 B1 为 8 的第一组 TF-Locoformer 模块。 该组模块在第一阶段使用无位置编码变体， 维度配置为 C 为 384， K 为 4， S 为 1， H 为 4， G 为 8， 注意力维度 E 为 128， 后续 B2 为 4 的第二组模块则把 C 与 E 调整为 256 与 96。

计数分支对变换后的 C 多次施加一维卷积块并沿频率池化， 在时间维平均后经线性层与 Softmax 在 0 至 5 源上预测总数 N̂， 覆盖 K 加 J 的全部非背景声源。 随后源数相关线性层按 N̂ 选择 5 组线性层之一， 把 Z 映射为 N̂ D 维并重排为每源 D 维特征。 若 N̂ 为 0 则跳过后续计算， 否则每源特征独立送入权重共享的第二组模块， 再经谱特征压缩解码器以 F 个查询恢复频率维， 得到每源 2 × F × T 分离谱。 这种按估计数量动态开槽的方式避免了固定槽位与能量阈值。

训练目标为时域阈值信噪比损失与计数交叉熵之和， 权重 γ 取 1。 直觉上分离损失推动波形逼近真值排列， 计数损失推动总数分类正确， 两者梯度分别流入共享与专用表征。 若沿用混合表征 Z 同时做计数， 增大 γ 会挤占分离容量而出现权衡， 原文预实验观察到分离性能下降。 引入独立计数令牌后， 计数与分离表征解耦， 极端大 γ 不再直接扭曲 Z 的分离结构， 计数错误仅通过开槽数量影响下游， 而分离误差仍可经解码器梯度修正。

为缓解监督数据不足， 分离模型先在 AudioSet 上以混合不变训练做无监督预训练， 固定输出 8 路并采用单声道输入， 批大小为 32， 输入时长为 6 s， 步数为 262,500， 优化器为 AdamW 并固定学习率为 0.001。 微调时以前两组块数为 6 与 3 的预训练权重初始化， 新增块复制最后一块参数， 计数令牌与提示向量随机初始化， 输入时长延至 10 s， 步数为 150,000 并采用余弦衰减。 训练时提供真实数量与标签做教师强制， 推理时集成 10 个不同批大小与令牌长度取 1、 2、 4、 8 的模型并平均计数概率。

### 分离波形分类与类别提示精修如何抑制残留干扰

第二阶段在每路分离波形上预测单一标签， 类别空间为 18 个目标类加干扰类共 19 类。 模型基于 5 个通用音频表征： BEATs、 M2D、 ASiT 与 PE-A-Frame 的小尺寸与基础尺寸版本， 每路均含特征提取器与 Transformer 模块。 其中 M2D 计算对数梅尔谱， BEATs 与 ASiT 使用类似滤波器组特征， PE-A-Frame 则用连续隐变量编码器编码时域信号。 分类头在时间维平均后经 Softmax 输出软标签， 预训练主干与分类头联合优化， 除 PE-A-Frame 外均在特征域做线性插值的混合增强， 混合系数服从参数为 0.2 的贝塔分布。

为适应分离残留与伪影， 分类训练同时使用真值 W 通道源与第一阶段输出的分离信号， 且训练用分离器与最终系统分离器不同以增强鲁棒性。 因官方孤立源有限， 原文从 AudioSet 保留每目标类至多 1,000 个单标签片段， 每干扰类至多 100 个， 并从 NIGENS、 SINS 与 STARSS23 抽取真空吸尘器、 拍手、 脚步与倒水等片段。 信号按表征预训练采样率重采样至 16 kHz 或 48 kHz， 另做频率弯折与滤波增强， 优化采用 AdamW 并设 1,000 步预热， 分类头与主干峰值学习率分别为 0.0004 与 0.00004， 指数滑动平均衰减为 0.999 并按类平均 F1 选择检查点， 集成时平均 5 个模型的 Softmax 输出。

精修模型结构接近第一阶段， 但编码器输入为多通道混合与初分离信号的拼接， 且实际使用多通道多帧维纳滤波后的精修信号而非原始初分离。 模型以类别相关可学习提示向量替代计数令牌， 向量尺寸为 D × 1 × 1， 按第二阶段预测标签选取 K̂ 个提示并在频率维广播。 经 B1 为 6 的第一组 TF-Locoformer 模块后， 取第 k 个变换提示与特征 Z 沿时间广播做逐元乘积得到每源特征， 替代源数相关线性层。 后续 B2 为 3 的第二组模块与解码器与第一阶段相同， 第三阶段第一组使用旋转位置编码， 维度配置与第一阶段对应组一致。

原文对比两种精修形态： 多输入多输出同时估计全部目标源并利用全部辅助信息， 单输入单输出每次只用对应单路估计信号与标签加混合单独抽取目标。 前者能利用源间信息， 后者对辅助信号与标签错误更稳健。 推理时先丢弃判为干扰的声源， 若剩余目标数达到 4 路及以上则按最大类别概率从低到高丢弃至 3 路。 该截断与类别提示共同决定精修输入， 原文未披露流式前瞻、 RTF 或显存开销， 实际部署代价需另行实测。

### 精修增益有限而分类集成带来最强标签准确率

#### 评测协议与主结果

评测覆盖验证集、 开发测试集与最终评测集， 指标方向均为越高越好： CA-PI-SDRi 以 dB 计并对类别错误敏感， 混合级与声源级准确率以 % 计， 计数准确率仅在有真值源的验证集报告。 分离模型经无监督预训练再微调， 分类器见过真值与分离两种信号， 4 个对比系统共享计数与分类集成但在是否精修、 精修形态与是否集成上不同。 需要强调的是， 原文未报告人工听测 MOS 或 CMOS， 也未给出方差与置信区间， 结论完全依赖客观分离指标与分类准确率， 与主观听感的一致性未经验证。

下表整理原文明确报告的最优系统在最终评测集的取值， 数值与单位同格呈现以避免量纲混淆。 4 个系统均大幅超越官方基线， 第一阶段已获得合理计数与分离， 精修带来温和提升， 集成对比显示计数与分类同步改善。 表前说明至此， 表中数值为摘要与正文一致确认的最终评测结果， 其余分集细节见正文论述而不逐行复述。

| 评测集合 | 指标 | 取值 |
| --- | --- | --- |
| 最终评测集 | CA-PI-SDRi | 12.94 dB |
| 最终评测集 | 标签准确率 | 76.92% |

表中最优系统在最终评测集获得 CA-PI-SDRi 为 12.94 dB， 总排名为第 3 名， 标签预测准确率为 76.92%， 为所有提交中的分类最佳。 原文指出第一阶段已受益于无监督预训练而表现合理， 精修因随机初始化提示与位置编码差异存在预训练与微调失配， 增益有限而有待进一步分析。 系统 3 与系统 4 的对比表明集成同时改善计数与分类， 但精修形态与截断策略的代价是当目标数超过 3 时必须丢弃低置信度声源， 可能漏检弱目标。

#### 混淆矩阵的像素细节

下图为原文混淆矩阵， 建议先看坐标轴与色标再看对角线。 横轴为预测标签， 纵轴为真实标签， 均含 18 个目标类与干扰类共 19 类并按行归一化， 右侧色标从 0.0 至高值， 亮黄表示高占比而深紫表示低占比。 左两面板为验证集的干净训练基线与 5 模型集成， 右两面板为开发测试集的对应对比， 作图时即使估计出 4 路及以上目标也不丢弃。

[![原论文 Figure 2：Confusion matrices for BEATs-clean (the first row in Table 3) and ensemble of the five models…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5f03975528c6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5f03975528c6/figure-2.png)

*论文图 2：四面板混淆矩阵：干净训练与五模型集成在验证集与开发测试集的按行归一化对比（原论文 Figure 2）。*

图中显示四面板总体对角线占优， 说明多数类别可被正确归类， 但 MechanicalFans 与 Percussion 等在最右干扰列存在非对角亮点， 表明部分目标被误判为干扰。 对比每行第一面板与第二面板可见集成的非对角亮点有所减弱， 分类鲁棒性有所提升。 右两面板最下一行对应干扰真值的行为空， 因开发测试集无干扰真值而不参与评测， 数量高估时的多余输出亦从可视化中略去， 阅读时不应将其视作零误差。

### 计数令牌长度预训练与分类器集成的消融指向何处

消融在验证集上固定 B1 为 6、 B2 为 3 并把批大小降至 16， 以控制计算量。 计数准确率以 % 计， SDRi 以 dB 计并用估计与真值间的最优排列计算， 该指标不惩罚类别错误但保留与 CA-PI-SDRi 相同的计数惩罚， 适合隔离分离本身。 分类消融在开发测试集报告混合级与声源级准确率， 基线为仅用干净真值训练的 BEATs 模型。 原文未报告多次随机种子的方差， 单次取值的微小差异需谨慎解读。

下表为原文分类对比的精简摘选， 仅列出表头与干净训练基线一行以锚定量纲与起点， 完整多模型数值见原文完整 Table 3（本精简表未列出）。 本表列数为 3 而行数为 2， 不代表原文全部行列， 阅读时不应将其误认为全表最优比较。 表前说明至此， 表后将结合未列出行列的原文记录讨论趋势而不复述排版符号。

| Model | Acc. (mix) | Acc. (src) |
| --- | --- | --- |
| BEATs-clean | 65.74 | 72.31 |

精简表显示干净训练基线的混合级与声源级准确率分别为 65.74% 与 72.31%， 该取值明显低于原文完整 Table 3（本精简表未列出）记录的用分离信号与外部数据增强后的各表征取值与集成取值。 原文完整 Table 3（本精简表未列出）记录集成后混合级与声源级分别达到 79.10% 与 84.08%， 单个表征中 BEATs 的对应取值为 76.32% 与 81.78%， 其余表征取值分布在相近区间。 这种差距验证了让分类器见过分离伪影与补充孤立源的有效性， 但因方差缺失而不宜夸大单个小数点的排序意义。

第一阶段消融的数值来自原文完整 Table 2（本精简表未列出）， 此处仅转述趋势而不展示全表。 用特征 Z 做计数的对照取得计数准确率为 91.39%， SDRi 为 16.95 dB， CA-PI-SDRi 为 13.50 dB， 改用计数令牌后分离指标升至 17.08 dB 至 17.13 dB 区间而计数准确率保持在 91.10% 至 92.44% 区间， 令牌长度取 1、 2、 4、 8 的差异较小。 去掉混合不变预训练后分离指标回落至 16.09 dB 与 12.67 dB 而计数准确率仍为 91.44%， 说明预训练主要改善分离而不明显影响计数。 未见对提示初始化、 维纳滤波开关与丢弃阈值的单独消融， 精修失配的解释仍属推测。

### 假设边界未验证条件与复现核对如何影响工程选型

系统的结论成立依赖若干明确假设： 目标数 K 不超过 3 且干扰数 J 不超过 2， 输入为一阶 Ambisonics 4 通道， 输出仅评估 W 通道全向分量， 精修最多保留 3 路目标。 当混合中目标超过 3 路时流程按概率丢弃低置信度声源， 弱目标可能被系统性漏检。 同类多源依赖分离先行的可变槽位， 若计数高估则多出虚假声源， 若低估则直接丢失整路目标， 误差无法被后级分类纠正。

多项部署条件未经验证。 原文未披露因果流式与离线之分、 前瞻窗口、 RTF、 延迟与显存， 推理需集成 10 个计数模型与 5 个分类模型， 计算代价显著但无实测。 未做人工听测， 神经代理指标亦未使用， 客观信干比与分类准确率能否代表主观质量未知。 开发测试集缺乏干扰真值而剔除不匹配输出， 混淆矩阵的可视化排除了高估部分， 真实场景的虚警代价被低估。 方差与置信区间缺失使温和提升的显著性存疑。

复现核对需区分三件事： 代码是否开源、 权重是否提供下载、 系统是否可直接运行。 本次未发现可验证的作者资源链接， 不可确认公开状态， 系统不可直接运行。 数据侧官方集与 AudioSet、 NIGENS、 SINS、 STARSS23 的组合可部分复现分类增强， 但分离微调依赖的双分离器输出与 10 模型集成的具体配置未完全公开。 附录亦未披露证明或额外失效案例， 仅能以混淆矩阵中向干扰类的误判为起点做对照试听。

工程选型上， 若首要目标是标签准确率， 集成 5 个表征的收益明确但需承担 5 倍推理成本， 单用 BEATs 可在成本与效果间折中。 若首要目标是分离信干比， 第一阶段加预训练已提供主体增益， 精修的多输入多输出形态适合利用源间信息， 单输入单输出形态对标签错误更稳健， 需按标签可信度选择。 任何选型都应补测长时流式、 重叠语音与强混响下的计数稳定性， 并以小规模人工试听校准客观指标， 不宜仅凭单次客观取值部署。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：分离模型短时傅里叶窗长为 1,024 点、跳步为 512 点、压缩后频点为 48，分类器重采样至 16 kHz 与 48 kHz，分离采样率原文未披露，延迟与 RTF 原文未披露
- **训练与评测数据**：AudioSet 预训练与 DCASE 2026 任务 4 数据微调，另用 AudioSet 单标签片段与 NIGENS、SINS、STARSS23 扩充分类训练，评测分验证集、开发测试集与最终评测集
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时，仅给出批大小、输入时长与训练步数等配置
- **核心超参数与配置**：分离损失权重为 1，预训练学习率为 0.001 并微调余弦衰减，分类头与主干峰值学习率分别为 0.0004 与 0.00004，混合系数服从参数为 0.2 的贝塔分布，指数滑动平均衰减为 0.999
- **推理速度与部署开销**：推理集成 10 个计数模型与 5 个分类模型，精修分多输入多输出与单输入单输出两种形态，RTF、延迟与显存原文未披露
- **开源产物与协议状态**：本次未发现可验证的作者代码、权重或数据下载链接，不可确认公开状态，系统不可直接运行
- **附录与补充材料要点**：原文未披露附录证明或补充消融，失效分析集中于混淆矩阵中向干扰类的误判

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 7.7/10 | 清晰度 6.9/10 | 影响力 7.2/10 | 开源 0.0/10 | 可复现 7.0/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-7`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Saijo_7.pdf)
- Track：P2-5

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：最优SISO精炼系统在最终评测集达12.94dB与76.92%混合级准确率，较官方基线6.76dB与55.16%提升显著且可核对。

- 核心优势：CLS词元T'=4在验证集取得92.44%计数准确率与13.75dB，优于共用特征Z的91.39%与13.50dB，并有无预训练回落对照。

- 核心优势：五模型集成在开发测试集达79.10%混合级与84.08%源级准确率，明显高于单个BEATs与仅干净训练的BEATs-clean负对照。

- 主要短板：计数用10模型集成、分类用5模型集成且需两轮分离，却未报告实时率或时延实测，集成计算代价完全未被量化。

- 主要短板：当4个及以上声源被判为目标时按类别概率丢弃至3个，会直接丢失目标且使精炼系统与无精炼系统准确率不可比。

- 主要短板：开发测试集混淆矩阵排除不匹配目标的分离输出与高估冗余输出，且分类训练所用分离器与最终系统不同存在失配。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
