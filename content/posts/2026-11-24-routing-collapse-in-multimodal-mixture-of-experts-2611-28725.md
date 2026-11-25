---
title: "Routing Collapse in Multimodal Mixture-of-Experts: Cross-Modal Conditioning Restores Expert Diversity Without Improving Accuracy"
date: 2026-11-24
draft: false
tags: [语音情感识别, 混合专家模型, 多模态学习]
categories: [论文速递]
description: "在 IEMOCAP 四分类上固定 7 专家头并仅切换融合方式，对照实验显示跨模态注意力把路由熵从 0.241 提升到 0.537 却没有带来加权准确率的可检测提升，同时暴露 13 个点的种子抖动使单次运行比较不可靠。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28725"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "路由坍缩与跨模态修复：专家多样性恢复为何换不来准确率"
paper_digest_original_title: "Routing Collapse in Multimodal Mixture-of-Experts: Cross-Modal Conditioning Restores Expert Diversity Without Improving Accuracy"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28725v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28725v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28725v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "在 IEMOCAP 四分类上固定 7 专家头并仅切换融合方式，对照实验显示跨模态注意力把路由熵从 0.241 提升到 0.537 却没有带来加权准确率的可检测提升，同时暴露 13 个点的种子抖动使单次运行比较不可靠。"
paper_digest_reader_sections: [{"heading":"小数据多模态情绪识别中 7 专家路由为何会名存实亡","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"固定 7 专家头只换融合输入的标量门控与跨模态注意力对照设计","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"成对跨模态注意力与逐维门控如何改变送入专家头的表示","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"熵从 0.241 到 0.537 而加权准确率未动的路由与任务分离","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"最坍缩的一次反而最准揭示熵与准确率解耦及种子抖动","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"诊断坍缩不等于值得修复的证据边界与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Computer Science, FAST National University of Computer and Emerging Sciences, Karachi 75030, Pakistan"],"name":"Syed Hussamuddin"},{"affiliations":["Department of Computer Science, FAST National University of Computer and Emerging Sciences, Karachi 75030, Pakistan"],"name":"Mubashra Fayyaz"}]
paper_digest_abstract_sha256: "41d548c82c898295d10ca2cf248c861720d84f7282c3917e4da30ccb51655fe7"
paper_digest_sidecars: {"citation.bib":{"sha256":"9885c284bae6a5585f94847cefc579e79fb52647acbd6c762401ca554e1aea0a","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28725/citation.bib"},"citation.json":{"sha256":"2dc827ecc7dd86de7d214b36e4852bb99048cf03c3e834980b7058d4d67731d8","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28725/citation.json"},"citation.ris":{"sha256":"36b656338160770c67f50783261953d3db62843fdd0df9713e09d81b118798ed","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28725/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"fdc574aebdbe5c7bcaa6d56c8a3aec5c823ed4378940f28afe921f9b19c2e860","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28725/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "8cb8c6ef2203dd67b29462a8204ff8180861667ae7e3aa4d7bbd1d5a12b94f98"
paper_digest_api_reader_plan_sha256: "9c28fd6c1a2533f153d9ea54156e180cd5c549a2b80bc27b5ca24691b7c4693d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2abfec229788f722c95d09cc6f64c9b87271f06b7e2b1d81006225372eb285b9"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "55290f0c2c6874e20d694af52c5aabd7ed381b45161902a1b995ed81860bc7e9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f6a37c2d6b70f008f84257429da8691428e5faee1a491fed4a4987d741edce38"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "6a181bdad0b31464f5bb55f479ca686a0b355a57da1e07a0966adc1d9ff807f8"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 路由坍缩与跨模态修复：专家多样性恢复为何换不来准确率

> 英文题目：*[Routing Collapse in Multimodal Mixture-of-Experts: Cross-Modal Conditioning Restores Expert Diversity Without Improving Accuracy](https://arxiv.org/abs/2611.28725v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)
- **研究方法**：[混合专家模型](/audio-paper-digest-blog/papers/?concept=method.moe)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 7.0/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 4.2/10


## 👥 作者与机构

- Syed Hussamuddin：Department of Computer Science, FAST National University of Computer and Emerging Sciences, Karachi 75030, Pakistan
- Mubashra Fayyaz：Department of Computer Science, FAST National University of Computer and Emerging Sciences, Karachi 75030, Pakistan

## 📌 核心摘要

**问题与瓶颈：** 论文研究多模态情感识别中混合专家 (Mixture-of-Experts, MoE) 分类头的健康度，输入是一条同时带有文本、语音和动作捕捉标记的语音段，输出是愤怒、悲伤、中性和兴奋 4 类中的一类。已有工作假设不同专家会自动分工处理不同情感模式，却很少直接测量路由器是否把负载分开。在不足 4000 条训练样本同时支撑路由学习与专家学习的小数据条件下，路由器容易坍缩到少数专家，名义上有 7 个专家，实际参与决策的远少于此，而参数量和架构描述不变。

**核心思路与方法架构：** 与最接近基线的实质差异是保持 7 专家头完全不变，只改变送入该头的融合表示是否经过跨模态注意力丰富。一条样本先经三条分支编码，文本用冻结的 300 维 GloVe 向量经双向长短期记忆网络与 Transformer 块编码，语音用 34 个短时特征经一维卷积、双向长短期记忆网络与 Transformer 块编码，动作捕捉把头部、手部与面部标记拼成 200 × 189 图经三层步长二维卷积编码，每条分支输出 128 维嵌入。对照组 EMoE 只用可学习标量门加权相加三者并投影到 256 维，实验组 CMET + EMoE 先对 6 个有向模态对做 4 头注意力交互，再用可学习逐维门融合自身与跨模态内容并经层归一化与拼接投影到同一 256 维。同一 256 维向量同时送给路由器与专家，路由器经 softmax 输出 7 维权重，7 个两层网络各输出 4 维类别对数几率 (logits)，加权求和后再经 softmax 得到预测，全程不加辅助负载均衡损失，以便观察架构自然产生的路由行为。

**关键实验与核心代价：** 主基准是 IEMOCAP 四类子集共 4936 条，前 4 个会话 3838 条训练，第 5 个会话留作说话人无关测试，路由统计基于 3 个种子，准确率基于 6 个种子，用双侧 t 检验比较均值，用 F 检验比较方差。以标量融合 EMoE 为最强可比基线，归一化路由熵上 EMoE 仅为 0.241 ± 0.076，CMET + EMoE 升至 0.537 ± 0.145，后者高于前者，约为前者的 2.23 倍 (p = 0.035，Cohen’s d = 2.55)，有效专家数也由 1.88 ± 0.35 升至 3.25 ± 0.76，且出现情感区分的路由分布。但在加权准确率 (weighted accuracy，WA) 上 EMoE 为 66.51 ± 4.98，CMET + EMoE 为 67.79 ± 4.33，后者高于前者 1.28 个点，差异无统计显著性 (p = 0.646，95% CI -4.7 至 +7.3)，方差亦无差异 (F = 1.32，p = 0.768)，同配置下 6 个种子极差达 13 个点。代价是跨模态注意力与门控带来额外参数，却没有带来可检测的任务收益。

**适用边界与深读导览：** 结论成立于单一基准、单一说话人无关划分、固定 7 专家且无负载均衡损失的设定，早停与选点都参考了留出会话，绝对准确率偏乐观但两组可比。更大数据规模、完整五折交叉验证或显式均衡损失下是否仍解耦尚未验证。若想深究融合门公式与路由熵定义可查下文方法与路由指标小节，对照表 1 与图 1、图 2 理解分布差异与种子波动。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 小数据多模态情绪识别中 7 专家路由为何会名存实亡

混合专家分类器把输入交给路由器加权组合多个并行子网络，理想情形是不同专家分管不同情感模式，整体容量随专家数增长。在大规模语言建模中，路由器坍缩到少数专家已是已知故障，通常用辅助负载均衡损失来约束。但在多模态情绪识别的小数据区，训练话语不足 4000 条却要同时学会路由与专家，论文指出已有工作直接把准确率提升归因于专家分化，却很少实测路由分布是否真的分散。

论文使用 IEMOCAP (Interactive Emotional Dyadic Motion Capture, 交互式情绪数据集) 的四分类子集作为检验场，输入是同一条话语的文本、语音与动作捕捉 3 路信号，输出是愤怒、悲伤、中性与兴奋四选一的情绪标签。子集共 4,936 条话语，其中愤怒 1,103 条、悲伤 1,084 条、中性 1,708 条、兴奋 1,041 条，较小的快乐类被排除。训练集取第 1 至第 4 会话共 3,838 个样本，测试集固定为说话人未在训练中出现的第 5 会话，构成与说话人无关的单划分。任务指标是加权准确率，诊断指标是路由熵与有效专家数。

为分离融合方式对专家头的影响，作者固定同一个 7 专家头，只改变送入该头的融合表示是否经过跨模态注意力丰富。标量门控直接加权 3 路嵌入，跨模态条件先做六向成对注意力再融合，其余训练与评测完全一致。核心问题是路由健康与任务性能是否绑定，若跨模态输入让路由更分散且按情绪分化，准确率与稳定性是否随之改善。论文的回答是否定的，多样性恢复了，准确率却没有可检测的变化，诊断坍缩不等于值得修复。

### 固定 7 专家头只换融合输入的标量门控与跨模态注意力对照设计

#### 与最近基线的实质增量与信号规格

2 对照共用完全相同的 3 分支编码器与 7 专家头，差异仅在融合表示的生成方式。文本分支用冻结的 300 维 GloVe 向量经双向长短期记忆网络与 Transformer 块编码，语音分支用 34 维短时特征经两层一维卷积、双向长短期记忆网络与 Transformer 块编码，动作捕捉分支把头部、手部与面部标记拼成 200 × 189 图经三层步长二维卷积编码。每路输出 128 维嵌入，记为文本、语音与动作捕捉向量，全程未使用预训练基座模型。标量门控条件以可学习标量加权求和再投影到 256 维，跨模态条件则先做成对注意力再经门控与投影得到同维表示，额外引入注意力与门控参数。

#### 一秒话语的张量旅程

以 1 秒话语为例追踪张量形状，原文未披露采样率、帧长与步长，因此时间维度的收缩过程无法复原，只能追踪已披露的向量级变换。3 路编码器各输出 1 个 128 维向量，标量门控按 3 个标量系数加权求和后再经投影得到 1 个 256 维融合向量，跨模态条件则先让每个 128 维向量关注另两路并经逐维门控、层归一化与拼接后投影到同样的 256 维。该 256 维向量同时送入路由器与 7 个专家，路由器输出 7 维权重，专家各输出 4 维类别对数几率，加权求和后再经 Softmax 得到预测。原文未披露卷积后帧率与注意力中间维度之外的全部形状，此处不补造。

路由器与预测的计算目标是把 256 维融合表示转为 7 维专家权重，再把 7 个专家的 4 维对数几率加权为最终类别概率。关键符号中融合向量 \(\mathbf{f}\) 属于 256 维实向量空间，路由矩阵 \(\mathbf{W}_{r}\) 与偏置把其映射为 7 维未归一化分数，专家函数 \(E_{k}\) 各把同一融合向量映射为 4 维类别对数几率，求和范围覆盖全部 7 个专家。该式同时决定路由分布的形状与梯度流向，是后文熵统计的直接来源。

\[\begin{aligned} \displaystyle\mathbf{w} \displaystyle=\mathrm{softmax}(\mathbf{W}_{r}\mathbf{f}+\mathbf{b}_{r}),\qquad\mathbf{w}\in\mathbb{R}^{7}, \\ \displaystyle\hat{\mathbf{y}} \displaystyle=\mathrm{softmax}\Big(\textstyle\sum_{k=1}^{7}w_{k}\,E_{k}(\mathbf{f})\Big), \end{aligned}\]

该加权形式的统计直觉是软选择投票，路由器按输入内容分配信任度，专家按各自子网络给出判断，加权平均后归一化为概率。若权重接近独热分布，预测几乎由单个专家决定，容量名存实亡。若接近均匀分布，7 个专家平均出力，单样本困惑度接近 7。由于未使用辅助负载均衡损失，交叉熵梯度同时流向路由器与被选中的专家，容易形成赢者通吃，坍缩行为得以原样暴露。输出的类别概率直接用于带标签平滑的交叉熵训练，并产生后文每个样本的路由熵。

训练目标与参数边界方面，文本 GloVe 保持冻结，其余编码器、融合层、路由器与专家均参与更新，损失为带 0.1 标签平滑的类别交叉熵并配合均衡类别权重，优化器为 Adam 并采用余弦衰减学习率。推理为离线整句分类，一条话语一次前向得到四分类概率，原文未披露流式分块、前瞻窗口、采样步数、实时率与显存开销，不做延迟推断。

### 成对跨模态注意力与逐维门控如何改变送入专家头的表示

跨模态增强分支对 3 个模态计算全部 6 个有向注意力对，每个模态同时关注另两个模态并把两路交叉输出求和为该模态的外部信息。注意力采用 4 头、每头键维度 32 的多头结构，设计上与已有门控跨模态融合相关，但补全了完整成对图而非单次交互。随后可学习逐维门控把自身内容与外部内容逐元素混合，3 路结果经层归一化、拼接后再经同一 256 维投影，与标量条件对齐维度后送入相同专家头。

该门控的计算目标是逐维度决定保留多少自身模态信息、引入多少跨模态信息，关键符号中交叉项 \(\mathrm{cross}_{x}\) 为两路注意力输出之和，拼接向量经线性映射与 GELU 激活得到同维门控系数 \(\boldsymbol{\alpha}_{x}\)，逐元素乘法分别作用于自身向量与交叉向量。下标代表文本、语音与动作捕捉 3 个模态，门控维度与模态嵌入维度一致，求和与拼接范围覆盖全部有向对。

\[\begin{aligned} \displaystyle\boldsymbol{\alpha}_{x} \displaystyle=\mathrm{GELU}\big(\mathbf{W}_{x}[\mathbf{x};\mathrm{cross}_{x}]+\mathbf{b}_{x}\big), \\ \displaystyle\mathbf{x}_{\mathrm{out}} \displaystyle=\boldsymbol{\alpha}_{x}\odot\mathbf{x}+(1-\boldsymbol{\alpha}_{x})\odot\mathrm{cross}_{x}, \end{aligned}\]

采用逐维门控的物理直觉是让融合表示在每个特征维度上自适应偏向本模态或他模态，跨模态上下文丰富时可引入对方证据，本模态更可靠时可保留自身。由于门控经 GELU 而非 Sigmoid 激活，系数不受限于 0 至 1 区间，混合是可学习的仿射组合而非凸组合，极端时可能放大、抑制甚至反号。若门控接近全 1，输出退化为自身。若接近全 0，输出几乎完全来自交叉信息。混合后的 3 路输出经层归一化与投影形成新的融合向量，同时改变路由器输入与专家输入，从而整体重塑路由分布。

两条件的对照逻辑需要向初学者说清，专家头结构、专家数与损失完全相同，唯一变量是融合表示是否经过跨模态丰富，且该表示同时喂给路由器与专家，因此比较的是整个专家头的输入效应，而非单独路由器输入效应。代价是跨模态分支额外引入注意力与门控参数，参数量并不匹配，路由改善不能直接等同于零代价的结构红利。作者刻意不加辅助负载均衡损失，正是为了观察架构自身产生的路由行为。

### 熵从 0.241 到 0.537 而加权准确率未动的路由与任务分离

#### 评测协议与公平性前提

评测采用单说话人无关划分而非完整五折交叉验证，训练用第 1 至第 4 会话，测试固定为第 5 会话，早期停止与检查点选择均监视该留出会话，因此绝对准确率偏乐观，但两条件共享流程，比较公平。每条件训练 6 个随机种子 42 至 47，准确率统计全部 6 次，路由统计仅保留检查点的 3 个种子 42 至 44。指标方向均为越高越好，归一化路由熵越高越分散，有效专家数越多越好，加权准确率越高越好。本研究不涉及 MOS 主观听测或 UTMOS 等神经代理指标，结论仅针对客观分类准确率。组间均值用双侧 t 检验，方差用双侧 F 检验，跨模态分支多出参数是唯一的非匹配因素。

路由熵的计算目标是量化单条测试样本的路由分散程度，关键符号中样本索引 \(i\) 覆盖全部留出样本，专家索引覆盖 7 个专家，权重 \(w_{ik}\) 为路由器输出的 7 维概率，对数归一化使结果落在 0 至 1 区间。均值熵为全部测试样本熵的算术平均，0 表示完全坍缩到单个专家，1 表示 7 个专家均匀分担。该定义是后文有效专家数与占优比例的计算基础。

\[H_{i}=-\frac{1}{\log K}\sum_{k=1}^{K}w_{ik}\log w_{ik},\qquad K=7,\]

采用归一化熵的统计直觉是把路由分布与均匀分布比较，越接近均匀，不确定性越高，负载越均衡。极端独热时单项权重为 1，其余为 0，熵为 0。均匀时每项权重为七分之一，熵为 1。熵本身只描述单样本的分散度，平均后得到条件级健康度，并进一步换算为有效专家数以便直观理解容量利用。

有效专家数的计算目标是把抽象熵值换算为典型输入实际动用的专家个数，关键符号中单样本熵 \(H_{i}\) 先乘以 7 的对数再取指数得到单样本困惑度，最后在全部测试样本上平均。下标覆盖测试集大小，求和范围为全部留出样本，区别于先平均熵再取指数的整体困惑度。作者强调按詹森不等式该平均不小于由平均熵换算的值，差距随样本间熵的离散程度增大。

\[\bar{E}=\frac{1}{N}\sum_{i=1}^{N}\exp\!\big(H_{i}\log K\big),\]

采用逐样本困惑度再平均的直觉是反映典型输入的参与度，而非整体平均分布的参与度，更贴近一次前向的实际负载。极端坍缩时有效数趋近 1 个专家，均匀时趋近 7 个专家。若不同样本坍缩到不同专家，平均熵可能中等而有效数仍较高，因此该指标与熵互补。输出直接用于比较两条件的容量利用，并配合每个专家占优样本比例与超过 1% 门限的专家计数共同诊断。

#### 路由显著分离而准确率无差异

下表汇总两条件在相同 7 个专家头下的均值与标准差对照，路由熵与有效专家数来自保留检查点的 3 个种子，加权准确率与区间来自全部 6 个种子，最后一列为组间检验的双侧 p 值。阅读时先看路由两行是否显著分离，再看准确率两行是否同步改善，最后一行区间用于感受种子抖动的数量级。该表是判断路由修复是否换来任务收益的核心依据，比较时注意路由样本量与准确率样本量不同。

|  | EMoE | CMET+EMoE | p |
| --- | --- | --- | --- |
| Router entropy H¯ a | 0.241 ± 0.076 | 0.537 ± 0.145 | 0.035 |
| Effective experts E¯ a | 1.88 ± 0.35 | 3.25 ± 0.76 | 0.046 |
| Weighted accuracy b | 66.51 ± 4.98 | 67.79 ± 4.33 | 0.646 |
| Accuracy range b | 58.20–71.58 | 59.29–70.86 | — |

跨行趋势是路由与任务彻底分离，熵提升 2.23 倍并在 p = 0.035 水平显著且 Cohen’s d 为 2.55，有效专家数在 p = 0.046 水平显著，而加权准确率的均值差异仅 1.28 个百分点并在 p = 0.646 水平远未显著，方差检验同样不支持稳定性改善。代价层面跨模态分支用额外参数换来路由健康，却未换来任务收益，置信区间同时排除约 7 个百分点以上的大增益，但无法排除几个百分点的微弱差异。准确率区间跨度均超过 11 个百分点，说明单次运行的排序极不可靠，这是理解后文种子抖动的前提。

#### 从独占到分散与按情绪分化

为看清坍缩的具体形态，先沿横轴 7 个专家与纵轴占优样本比例阅读左右两组柱状分布，灰色虚线为均匀路由的 14.3% 基准，3 种深浅分别对应种子 42 至 44 的 3 次运行。左侧为标量门控，右侧为跨模态增强，比较时先看单柱高度是否远超虚线，再看零高度专家的数量，最后看 3 次运行偏好的专家是否一致。

[![原论文 Fig. 1：Proportion of held-out samples for which each expert is the argmax, over three seeds per condition…](https://arxiv.org/html/2611.28725v1/fig_utilisation.png)](https://arxiv.org/html/2611.28725v1/fig_utilisation.png)

*论文图 1：两条件下 7 专家占优样本比例分布，虚线为均匀路由基准，三色对应三个种子（原论文 Fig. 1）。*

左侧标量门控下每组几乎被单一颜色主导，个别专家独占超过 60% 甚至接近 80% 的测试样本，多个专家柱高接近零，意味着整组测试中从未成为首选专家。右侧跨模态条件下各专家均有可见柱高，分布更贴近虚线，虽仍不均匀且不同种子偏好的专家不同，但不再出现大面积零负载，印证有效专家数从 1.88 个专家提升到 3.25 个专家的均值变化。专家编号在不同种子间不可比，比较的是分布形状而非具体编号。

为检验恢复的多样性是否为情绪分化，再看以情绪为行、专家为列的平均路由权重热图，颜色越亮表示该情绪平均分给该专家的权重越大，右侧色标给出权重刻度。左右分别为种子 42 下的标量门控与跨模态增强，行覆盖愤怒、兴奋、中性与悲伤 4 类，列覆盖 7 个专家。阅读时先锁定每行最亮格所在列，再看四行峰值是否落在不同专家。

[![原论文 Fig. 2：Mean router weight per emotion class on the held-out session for one seed per condition (seed 42,…](https://arxiv.org/html/2611.28725v1/fig_per_class.png)](https://arxiv.org/html/2611.28725v1/fig_per_class.png)

*论文图 2：单一种子下四类情绪平均分配给 7 专家的路由权重热图，亮格为各情绪主导专家（原论文 Fig. 2）。*

左侧标量门控下愤怒、兴奋与中性三行最亮格均落在同一列专家上，仅悲伤略有分散，说明 3 类情绪共享主导专家。右侧跨模态下愤怒偏向第六列与第三列，兴奋集中于第三列高亮格，中性分散于第三列与第五列，悲伤偏向第五列，四行峰值分布在 3 个不同专家上。右侧色标上限约 0.8，高于左侧约 0.7，亮格更集中，表明按情绪的条件路由确实出现，但结合主表可知这种分化未转化为准确率收益。

### 最坍缩的一次反而最准揭示熵与准确率解耦及种子抖动

#### 熵与准确率在条件内外的双重分离

条件间的分离在条件内同样成立，标量门控中最坍缩的一次熵低至 0.155，有效专家仅 1.53 个，两专家瓜分 99.1% 的测试样本且三专家零样本，却取得该条件内最高的 71.58% 准确率，路由更分散的运行并未超越它。作者据此推测专家并未学到互补函数，若互补，分散负载应有帮助。实际是把有限训练信号碎片化到更多专家，反而稀释了学习。表观的按情绪分化因此是输入侧的区分，而非输出侧的功能分化，路由分布区分了输入，专家输出并未区分决策。

#### 13 个点的种子抖动意味着什么

种子抖动进一步削弱单次比较的可信度，标量门控 6 次准确率从 58.20% 到 71.58%，跨度约 13 个点，跨模态条件从 59.29% 到 70.86%，跨度约 11.6 个点，且有一个种子同时拉低两条件。6 个种子下 95% 置信区间为负 4.7 至正 7.3，约 7 个点以上的大增益可被排除，但几个点的差异无法排除。运行间方差比为 1.32，对应 p = 0.768，说明坍缩并未带来可检测的不稳定。缺失的消融包括固定 7 专家外的专家数扫描、显式负载均衡损失、完整五折验证以及更大样本下的复现，路由统计仅 3 个种子也限制了功效。

### 诊断坍缩不等于值得修复的证据边界与工程选型建议

结论成立的前提需要一次看清，证据来自单一 IEMOCAP 四分类基准、单一说话人无关划分且该划分同时用于早期停止与选检查点、固定 7 专家与无负载均衡损失、路由统计仅 3 个种子。是否在更大数据规模、完整交叉验证或显式均衡损失下仍解耦，原文明确留白。动作捕捉模态与特定编码器选择也限制外推，换主干或换任务后路由行为可能完全不同。

复现核对要区分三件事，代码是否公开、权重是否提供下载与系统是否可独立运行。本次未发现来源绑定且完成 HTTPS 状态验证的资源，不得声称代码、模型或数据已公开。原文未披露训练硬件、训练耗时、推理实时率与显存，附录与补充材料亦未提供，作者仅说明逐次路由测量可向作者索取，未给出公开仓库与演示页。复现第一步应按 6 个种子 42 至 47 重训两条件并保留检查点，分别复算 6 种子的加权准确率与 3 种子的平均熵及有效专家数，同时记录每个专家占优比例与超过 1% 门限的专家数，避免只比单次峰值。

工程选型上，若在小数据多模态任务中使用多专家头，应直接报告路由熵、有效专家数与按类路由分布，而非从准确率反推专家分化。把路由健康当作诊断量而非优化目标，修复分布前先验证专家是否学到互补功能，否则分散反而碎片化信号。原文未提供试听或演示页，不涉及听感对比，选型依据应回到加权准确率的均值、方差与置信区间，而非路由是否好看。当样本不足四千且种子抖动达十余个点时，优先补多次种子与方差估计，而非急于引入更复杂的融合。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：文本为冻结 300 维 GloVe 向量，语音为 34 维短时特征含 MFCC、chroma 与频谱描述子，动作捕捉为 200 × 189 个图，三路各输出 128 维嵌入并投影到 256 维融合表示，采样率、帧长、步长与帧率原文未披露，无流式前瞻与 RTF 报告。
- **训练与评测数据**：IEMOCAP 四分类子集共 4,936 条话语，愤怒 1,103 条、悲伤 1,084 条、中性 1,708 条、兴奋 1,041 条，第 1 至第 4 会话 3,838 个样本训练，第 5 会话留出测试，单说话人无关划分，未做完整五折交叉验证。
- **算力与训练耗时**：原文未披露
- **核心超参数与配置**：Adam 余弦衰减学习率 2×10−3 至 10−6，标签平滑 0.1，均衡类别权重，批大小 64，早停耐心 12，7 专家两层网络，4 头注意力键维度 32，6 个有向跨模态对，无辅助负载均衡损失，6 个种子 42 至 47。
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存，推理为离线整句四分类一次前向。
- **开源产物与协议状态**：原文未提供代码仓库、权重下载与数据链接，未说明开源状态，逐次路由测量可向作者索取，未给出公开演示页。
- **附录与补充材料要点**：原文未披露附录或补充材料，关键证明、补充消融与许可限制均无，典型失效案例见正文最坍缩运行与种子抖动分析。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.28725v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在固定7专家头的受控对照下直接测量路由熵与有效专家数，并报告双侧t检验、F检验、效应量与置信区间，统计披露扎实。

- 核心优势：诚实报告路由显著改善但准确率无差异的阴性结果与13点种子极差，最坍缩单轮反而最高分，有力支撑解耦判断。

- 核心优势：明确给出路由器softmax加权、归一化熵与困惑度平均公式，并辨析Jensen不等式与GELU仿射组合，定义严谨。

- 主要短板：CMET增加了注意力与门控容量，路由改善混杂容量增加影响，未做容量匹配对照分离条件本身作用。

- 主要短板：结论仅成立于单一IEMOCAP划分、固定7专家且无均衡损失，路由仅3种子且6种子仅能排除约7点以上大增益，泛化与效力有限。

- 主要短板：早停与选点均监测留出会话，绝对准确率偏乐观存在测试泄漏，绝对性能不可直接外推。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
