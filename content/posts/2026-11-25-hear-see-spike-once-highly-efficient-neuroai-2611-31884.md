---
title: "HEAR, SEE, SPIKE ONCE: Highly Efficient NeuroAI Temporal Neural Networks for Low-Precision Multimodal Audio-Visual Classification and Online Learning"
date: 2026-11-25
draft: false
tags: [音视频理解, 语音情感识别, 脉冲神经网络, 持续学习]
categories: [论文速递]
description: "针对多模态脉冲网络依赖全精度深编码器与全局梯度而难部署的问题，NeuTNN-AV 以固定前端加有源树突类层与排序码决策层全用 4 位局部 STDP 学习，在 CREMA-D 以 2.34M 突触达 78.63% 超过 31.00M 的 MISNet-XL，在 UrbanSound8K-AV 以 1.38M 突触达 98.82% 接近最优，代价是依赖手工前端与按演员归一化并在持续学习中有小幅旧任务遗忘。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31884"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "只用一次脉冲与 4 位权重做音画融合"
paper_digest_original_title: "HEAR, SEE, SPIKE ONCE: Highly Efficient NeuroAI Temporal Neural Networks for Low-Precision Multimodal Audio-Visual Classification and Online Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.31884v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31884v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31884v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.spiking-neural-network","label":"脉冲神经网络"},{"facet":"method","id":"method.continual","label":"持续学习"}]
paper_digest_primary_method: "脉冲神经网络"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多模态脉冲网络依赖全精度深编码器与全局梯度而难部署的问题，NeuTNN-AV 以固定前端加有源树突类层与排序码决策层全用 4 位局部 STDP 学习，在 CREMA-D 以 2.34M 突触达 78.63% 超过 31.00M 的 MISNet-XL，在 UrbanSound8K-AV 以 1.38M 突触达 98.82% 接近最优，代价是依赖手工前端与按演员归一化并在持续学习中有小幅旧任务遗忘。"
paper_digest_reader_sections: [{"heading":"多模态脉冲网络为何在精度与硬件效率之间两难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"NeuTNN-AV 如何把固定前端与三层脉冲决策串起来","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"有源树突的斜坡无泄漏单元怎样实现模式比赛","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"奖励调制可塑性与按序融合如何只用局部信号学习","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"小突触规模下精度与能耗的同时下降是否成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉按错增生或换掉排序码会损失多少精度","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单遍适应与部署选型的边界和代价","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["ECE, Carnegie Mellon University"],"name":"Shanmuga Venkatachalam"},{"affiliations":["ECE, Carnegie Mellon University"],"name":"Quinn Jacobson"},{"affiliations":["ECE, Carnegie Mellon University"],"name":"John Paul Shen"}]
paper_digest_abstract_sha256: "1b431ecba70e755e34533b5259364fff3bd2974c15bb929ed37205ec804899b7"
paper_digest_sidecars: {"citation.bib":{"sha256":"cd0990b886123b483c5d576e54384134347545c84d644f19d9b231a1cfb15158","url":"/audio-research-portal/client/papers/2026-11-25/2611-31884/citation.bib"},"citation.json":{"sha256":"5400f4eb8b57d09809b3cbb19679056bd20f9d22c2b010b01feeb25acb518d48","url":"/audio-research-portal/client/papers/2026-11-25/2611-31884/citation.json"},"citation.ris":{"sha256":"1770dc523b92bb938b4fe15e6914e22216bbf4d71b5b86aa2c3a44f3b4e0ff1e","url":"/audio-research-portal/client/papers/2026-11-25/2611-31884/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2ebf567a6910c88ea06bd90062d96c4b9813f84955b75159beb27a7c32cbd55d","url":"/audio-research-portal/client/papers/2026-11-25/2611-31884/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "8b98a661528f2917c7869cc155c74c3365017002befcb3e75b097c2f1a85d89e"
paper_digest_api_reader_plan_sha256: "b07dec19b5bbf06f81eb25dcd50131851a3c93b17430adda4808413dbe81dc72"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "bfd0643355189a26ba717f0c23a30cf136715a44e3b744fa08b3ffc58a0f3c25"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "1ea91ff14d6e6572014886c04d8fbe76f9e5571ca7880927df0c87f4522e65ba"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "408c49cf1a3c839cd0322fd319544a978129c782b2afdd1eabb5eaa2ce43b3be"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4ad5d01224eac44860b9e1d8f5650da0bc8a1fe5967cda13a66f16baf20f404f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 只用一次脉冲与 4 位权重做音画融合

> 英文题目：*[HEAR, SEE, SPIKE ONCE: Highly Efficient NeuroAI Temporal Neural Networks for Low-Precision Multimodal Audio-Visual Classification and Online Learning](https://arxiv.org/abs/2611.31884v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)；[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)
- **研究方法**：[脉冲神经网络](/audio-research-portal/papers/?concept=method.spiking-neural-network)；[持续学习](/audio-research-portal/papers/?concept=method.continual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 8.1/10 | 技术严谨 7.0/10 | 实验充分 7.6/10 | 清晰度 6.9/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 7.3/10 | 工程/实践 5.3/10


## 👥 作者与机构

- Shanmuga Venkatachalam：ECE, Carnegie Mellon University
- Quinn Jacobson：ECE, Carnegie Mellon University
- John Paul Shen：ECE, Carnegie Mellon University

## 📌 核心摘要

**问题与瓶颈：** 音视频分类需要从声音与图像或视频共同判断事件或情绪，输入包含连续声谱与像素阵列，输出为类别标签。现有高精度脉冲方案沿用深度学习路线，依靠多级卷积或 Transformer 编码器加跨模态注意力，并以替代梯度直通时间反向传播端到端训练，保持 32 位全精度参数，且部署后无法在不重训的情况下继续学习。这种路线把精度建立在密集乘加与离线梯度之上，与脉冲硬件期望的稀疏二值活动和低功耗目标存在直接冲突，尤其在表情细微的 CREMA-D 这类数据上代价更为突出。

**核心思路与方法架构：** 本文与最接近基线的实质差异在于保留单脉冲时间编码与整数斜坡响应，同时以多段主动树突神经元替代深层编码器，并以基于排序的微型决策层完成融合。音频前端基于 22.05 kHz 采样与 128 频带对数梅尔谱，UrbanSound8K-AV 侧为对数梅尔统计 192 维加倒谱系数 240 维加谱形状 24 维共 456 维，CREMA-D 侧为倒谱系数 240 维加谱形状 24 维加韵律 16 维加基频能量轮廓 16 维共 296 维，经开与关双线编码为两倍线数上的到达时间，时间步 T = 16，数值越大脉冲越早。视觉在 UrbanSound8K-AV 上为 128 维色彩直方图，在 CREMA-D 上为 10 帧人脸裁剪后的方向梯度直方图平均共 900 维，采用按样本归一的时间编码。两路分别送入每类对应一个神经元的类别层，每个神经元拥有多个远端分支，每个分支按斜坡无泄漏响应累积输入并在达到输入归一化阈值时发放脉冲，类别取最早分支所在神经元。前 3 名按排序编码为 8 步内的至多 3 个脉冲后送入决策层，决策层同样由 4 位整数突触构成并输出最终类别。前端固定不更新，所有权重以局部奖赏调制可塑性按样本在线调整，无反向传播与每突触乘法。

**关键实验与核心代价：** 在 UrbanSound8K-AV 的 70% 训练与 30% 测试划分上，以准确率（%）为融合指标，NeuTNN-AV 以 1.38M 个突触取得 98.82%，低于最强可比基线 MISNet-XL 的 98.96%，但超过 SMMT 四步模型的 96.85%。在 CREMA-D 的 6698 / 744 划分上，以准确率（%）为融合指标，NeuTNN-AV 以 2.34M 个突触取得 78.63%，高于 MISNet-XL 的 77.14%，在同表融合准确率列可比行中为最高值，权重内存小 23 倍至 106 倍。消融显示去掉按错招募后两模态层准确率下降 21% 至 33%，决策层改用数值时间编码则融合准确率下降 4.6% 至 16%。单遍在线学习在 CREMA-D 上达到 73.8%，对 31 个未见说话人的适应平均提升约 32%，而冻结权重基线停留在 40% 附近。代价集中在面部表征上，CREMA-D 每个视觉层约 1.08M 个突触，能量估计为每次推理 8.8 μJ，UrbanSound8K-AV 侧为 1.1 μJ，仍比基线的毫焦量级低两个数量级以上，但该能量按 32 位加法 0.9 pJ 折算而非芯片实测。

**适用边界与深读导览：** 上述结论仅在所用划分与固定前端下成立，未覆盖噪声、遮挡、多语言或跨设备采集等部署条件，能量与内存比较均不含语谱图与预处理开销。本文未提供音频演示页与人工听感评测，这对分类任务并非必需，但能量数字不宜直接视为硬件实测功耗。若需深究机制，可查阅下文方法章节对斜坡响应与归一化阈值的推导，以及消融章节对按错招募与排序编码的定量对比。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多模态脉冲网络为何在精度与硬件效率之间两难

音频视觉分类要求把一段声音与一张图像或一段视频对应到同一事件、物体或情绪标签。论文用两个公开基准检验这一任务：UrbanSound8K-AV 把 8,732 个最长 4 s 的城市声音片段与同类图像配对，共 10 类；CREMA-D 包含 91 位演员朗读 12 个句子的 7,442 个视频片段，共 6 种情绪。CREMA-D 更难，类别差异只体现在同一张脸与同一句话上的表情与韵律变化，人类听评人同时看听也只能恢复约 64% 的演员意图标签。

此前最强的多模态脉冲网络沿用深度学习路线：EMSNN、SMMT 与 MISNet 用卷积或 Transformer 编码器加跨模态注意力，端到端以替代梯度与随时间反向传播训练，全精度 32 位参数，部署后无法不从头重训就继续学习。SMMT 引入 UrbanSound8K-AV 数据集并借用 Spikformer 式脉冲交叉注意力，MISNet 在每级交错多模态 LIF 神经元与 SEW-ResNet 阶段，在两个数据集上超过 PMR 与 QMF 等 ANN 方法。这条路线把精度做高，却没有把硬件效率作为首要设计目标，乘法、浮点与全局梯度都保留下来。

时间神经网络走另一条路线：每条输入线至多发放一个脉冲，用到达时间编码数值，突触响应是高度受权重封顶的斜坡，神经元在总电位首次越阈时发放，学习只用局部 STDP，运算可化为小位宽计数器与比较器。NeuTNN 在此基础上把点神经元换成有源树突神经元，远端多段先各自聚类再由胞体取最早者，单神经元即具两层点神经元的计算能力，在 MNIST 上单层以 2.49M 突触达到 95%，超过 4 层 TNN 的 94% 与 3.10M。本文把 NeuTNN 扩展为 NeuTNN-AV，用每模态一个类层加一个决策层完成融合，全部 4 位整数权重与局部奖励调制学习。

### NeuTNN-AV 如何把固定前端与三层脉冲决策串起来

与最接近的 MISNet 与 SMMT 相比，NeuTNN-AV 保留多流融合的思想，替换三处核心设计：深卷积或 Transformer 编码器换成无参数信号处理前端加单层 NeuTNN 类层，跨模态注意力换成基于排序码的微型决策层，全局替代梯度反向传播换成每层独立的奖励调制 STDP。信号规格上，音频经 22.05 kHz、23 ms 跳步的 128 带 log-mel 谱图提取统计量，视觉用颜色直方图或人脸 HOG，全网时间步 \(T = 16\)，决策层 \(T_f = 8\)，每流只取前 \(m = 3\) 名，所有权重为 0 到 15 的 4 位整数，推理只用比较与加法。

#### 固定前端与脉冲时间码

前端没有任何可学习参数。UrbanSound8K-AV 音频共 456 维，含 192 维 log-mel 统计量、240 维 MFCC 均值方差及一二阶差分、24 维谱形状，视觉为 128 维 HSV 颜色直方图。CREMA-D 音频共 296 维，含 240 维 MFCC、24 维谱形状、16 维韵律与 16 维基频能量轮廓，视觉为 10 帧 48 × 48 人脸 HOG 均值共 900 维。CREMA-D 音频按演员做标准化，不使用标签，以削弱说话人差异盖过情绪差异的影响。

下表给出各 NeuTNN 层的输入线数、编码方式、阈值比、远端段数与突触总数，是跟踪张量形状的依据。结合上下文可看到音频双线使线数翻倍，决策层线数等于流数乘类别数，段数与突触数决定模型主体开销，也是判断融合是否轻量的关键，读表时可先看线数再看段数。

| Layer | Input | Lines | Code | ρ | Seg. | Syn. |
| --- | --- | --- | --- | --- | --- | --- |
| UrbanSound8K-AV |  |  |  |  |  |  |
| audio | spectral | 912 | ON/OFF | 0.6 | 1,237 | 1.13M |
| image | color | 128 | temporal | 0.8 | 1,873 | 0.24M |
| decision | 2 streams | 20 | rank | 0.5 | 20 | 400 |
| CREMA-D |  |  |  |  |  |  |
| audio | spectral, prosody | 592 | ON/OFF | 0.4 | 300 | 0.18M |
| visual layer 1 | face HOG | 900 | temporal | 0.85 | 1,200 | 1.08M |
| visual layer 2 | face HOG | 900 | temporal | 0.8 | 1,200 | 1.08M |
| decision | 3 streams | 18 | rank | 0.5 | 6 | 108 |

音频流因 ON/OFF 双线编码使线数翻倍，如 UrbanSound8K-AV 用 912 线对应 456 维，CREMA-D 用 592 线对应 296 维；视觉流单线时间码保持原维。UrbanSound8K-AV 音频类层以 1,237 段共 1.13M 突触为主，图像类层以 1,873 段共 0.24M 突触为辅，决策层仅 20 段 400 突触。CREMA-D 用两个 1,200 段视觉层各 1.08M 突触加 300 段音频层 0.18M 突触，决策层仅 6 段 108 突触，融合开销可忽略。

音频特征经训练集标准化后可正可负，每个特征 \(z\) 驱动 ON 与 OFF 两条线，活跃线按下式发放，另一线静默。式中 \(T = 16\) 为总步数，\(t\) 为脉冲时间，\(|z|\) 以 3 裁剪，\(a = T - t\) 为早晚，视觉非负特征则按样本内最大值归一的每样本时间码编码，最大者最先发放。

\[t=\mathrm{round}\Bigl(\bigl(1-\min(|z|,3)/3\bigr)(T-1)\Bigr)\]

该式的统计直觉是把高斯化特征的幅度映射为早晚：\(z = 0\) 最晚，\(|z|\) 越大越早，3 以外截断对应约 99.7% 落在界内的高斯假设，兼顾动态范围与步数限制。当 \(|z|\) 很小，两线都接近最晚或静默，贡献小；当 \(|z|\) 很大，脉冲提早到 0 附近，后续斜坡有更长时间累积。输出的早晚向量直接作为类层远端段的输入早晚，静默记为 0，稀疏性与 ON/OFF 对称性在此确立，半数音频线天然静默。

#### 双流类层到排序决策的汇合

先沿从左到右的灰蓝紫箭头看主路径，比较上路音频与下路视觉在类层后的汇合方式，再注意训练期才出现的紫色虚线标签输入。下图把固定与学习部分的色彩分工与每层突触数标得很清楚，读时可对照线数从数百到数十的变化，理解稀疏汇合为何能以极小决策层完成融合。

[![原论文 Figure 2：NeuTNN-AV: Gray blocks have no learnable parameters: front ends turn each modality into features,…](https://arxiv.org/html/2611.31884v1/figs/fig1_full.png)](https://arxiv.org/html/2611.31884v1/figs/fig1_full.png)

*论文图 2：双流固定前端经脉冲编码进入各自类层，仅前三名按排序码汇入微型决策层，虚线标签只在训练出现（原论文 Figure 2）。*

上路音频经 ON/OFF 延迟编码进入蓝色音频类层，下路图像或视频帧经每样本延迟编码进入橙色视觉类层，CREMA-D 用两个视觉层，每类一个神经元，每神经元最多 K 个远端 RNL 段，取最早段作为类脉冲。各流只把前 3 名按排序码送入紫色决策层，决策层在全部流的排序脉冲上再做一次 NeuTNN 分类。灰块固定无参数，蓝橙紫块由局部三因子 STDP 学习，4 位权重，图中已标出两数据集每层突触数。

以 1 秒输入为教学例子跟踪张量：1 秒音频经前端得到 456 维向量，ON/OFF 编码为 912 条线的时间向量，其中约一半静默；912 维早晚向量并行进入 10 个音频类神经元的全部远端段，每段在 16 步内累积斜坡并竞争最早发放，输出 10 个类脉冲时间。视觉 128 维直方图变为 128 条线，进入 10 个视觉神经元竞争。2 流各取前 3 名，按 \(T_f = 8\) 的排序码变为 20 条决策线上的至多 6 个脉冲，决策层 10 个神经元各用少量 4 位突触再竞争一次，输出最早类即预测。

### 有源树突的斜坡无泄漏单元怎样实现模式比赛

经典点神经元把所有突触加到一个总和上，有源树突神经元则让近胞体 proximal 输入主导是否发放，远端每段先对自己的输入聚类，匹配的段使发放提前。一个 AD 神经元因此像两层点神经元网络，单神经元可存同一类的多个子模式。本文每类一个神经元，每神经元最多 K 个远端段，神经元以最早段发放，类层以最早神经元定类别，同拍按 \(V / \theta\) 裕度排序。

#### 斜坡电位与最早发放

每段都是斜坡无泄漏单元，输入线 \(i\) 在 \(t_i\) 发放或静默记为无穷大，权重 \(w_i\) 取 0 到 15 整数，电位按下式计算，目标是给出该段在每步的累积高度并决定发放时刻。式中斜坡为输入后每步加 1，取小与 \(w_i\) 实现封顶，WTA 抑制让最早单元回答。

\[V(t)=\sum_{i}\min\bigl(\max(0,\,t-t_{i}+1),\,w_{i}\bigr),\]

物理直觉是权重封顶而非相乘：每突触至多贡献 \(w_i\)，单个超强特征无法主导整段，运算化为计数与比较。当输入很早且权重很大，斜坡快速爬升并早早封顶；当输入静默或权重为零，该项恒为零。极端下全零权重永不发放，全早输入则比的是权重模板的匹配程度。输出的发放时间越早表示该段模板与输入越吻合，同一神经元内取最小时间作为类脉冲，驱动类间竞争与后续排序编码。

先从左侧早晚不一的输入线看到 3 段斜坡爬升速度的差异，再看中间虚线阈值与右侧取小输出的对应关系，右侧紫色虚线是训练期才加入的标签信号。下图把段内竞争与类脉冲取小的过程画了出来，可对照阈值虚线位置理解谁先穿越谁输出，读时先看输入早晚再看穿越顺序。

[![原论文 Figure 3：One NeuTNN class neuron: Each sensory line spikes once.](https://arxiv.org/html/2611.31884v1/figs/fig2_neuron.png)](https://arxiv.org/html/2611.31884v1/figs/fig2_neuron.png)

*论文图 3：单个类神经元内多远端段共享输入并竞争最早发放，虚线阈值按输入与权重归一化（原论文 Figure 3）。*

左侧每条线至多一个脉冲，越靠左越强，3 段共享同一输入但斜坡形状不同，段 1 最先越过虚线阈值，段 2 稍晚，段 K 未越过。蓝色圆点标出穿越点，右侧 min 节点取 3 段的最早时间作为该类脉冲。下方注明电位为各斜坡与权重取小之和，发放条件为越过阈值。右下紫色标注 proximal 标签在训练期决定招募、增强或抑制，与推理期的纯前向比赛分开。

#### 输入归一化阈值与模式相似度

固定阈值会让强输入点亮所有段，或让大权重段对任何输入都早发放。为此每段阈值按样本重算，取输入总早晚与段总权重中较大者的一定比例，\(\rho\) 为每层 0.4 到 0.85 的超参数，目标是让比赛比较模式而非幅度，式中 \(a\) 为早晚向量，\(w_k\) 为段权重向量，L1 范数为各分量之和。

\[\theta_{k}(\mathbf{a})=\rho\,max\bigl(\lVert\mathbf{w}_{k}\rVert_{1},\lVert\mathbf{a}\rVert_{1}\bigr),\]

该式是除法归一化的阈值形式，生物上对应共享的除性归一化，每段每样本只算一次，不按突触重复。当输入很强而权重很小，阈值跟随输入变大，不会因幅度大就早发放；当权重很大而输入很弱，阈值跟随权重，避免大权重段乱发放。输出阈值直接决定该段能否在 \(T - 1\) 步内发放，结合斜坡电位可化为重叠和与阈值的比值条件，驱动段间公平竞争与胜者选择。

### 奖励调制可塑性与按序融合如何只用局部信号学习

每样本学习只用当前输入、proximal 标签与胜者身份。设胜段为全部段的最早者，正确类最早段为同类中最早者：若正确类丢失且有空闲段并从未印刻过该样本，则把早晚向量直接拷入空闲段，不改其他；若正确类获胜则对胜段做增强，权重向早晚靠拢；若他类获胜则对胜段的活跃突触做抑制，并对正确类最早段做一次增强。\(\eta = 0.2\)，权重裁剪到 0 到 \(T - 1\) 取整并封顶 15，训练初每神经元 1 个活跃段由同类随机样本复制而来。

段能否在 16 步内发放等价于如下相似度条件，左端为重叠和除以输入与权重总和中较大者，右端为阈值比 \(\rho\)，目标是把时间竞争翻译成可解释的模板匹配分数。式中 \(a_i\) 为第 i 线早晚，\(w_{ki}\) 为该段权重，\(\rho\) 与阈值式共用同一超参数，分母取大者使比值落在 0 到 1。

\[\frac{\sum_{i}\min(a_{i},w_{ki})}{max\bigl(\lVert\mathbf{w}_{k}\rVert_{1},\lVert\mathbf{a}\rVert_{1}\bigr)}\geq\rho,\]

直觉上分子是逐线取小的交集，上限为两总和中较小者，分母取较大者使比值落在 0 到 1，类似余弦相似度。当权重与输入逐线相等，比值达 1 必发放；当两者错位或一强一弱，比值小而延迟或静默。极端下全零输入比值为 0 不发放，全匹配则最早发放。该条件不直接算梯度，而是决定胜者身份，进而决定 STDP 的符号与是否招募，把时间早晚转化为结构增长与权重更新。

类层按最佳段发放早晚排序，破平用 \(V / \theta\) 裕度，前 \(m = 3\) 名按排序码在 \(T_f = 8\) 步内发放，首名最早，其余静默。排序码无需跨流校准，保留亚军信息，稀疏短小，决策层只需几百个 4 位突触。决策层是同样的 NeuTNN 层，每类一个神经元，在流数乘类别数的排序线上学习，UrbanSound8K-AV 为 20 线，CREMA-D 为 3 流 18 线。前端固定不学，所有类层与决策层都用同一 STDP 规则，先在验证划分上选超参数再在全训练集重训，无反向传播。

### 小突触规模下精度与能耗的同时下降是否成立

评测沿用基线划分：UrbanSound8K-AV 取 70% 训练 30% 测试，CREMA-D 取 MISNet 的 6,698 / 744 训练测试划分。超参数在训练集内 30% 验证划分上选择，类层在剩余 70% 上训练以产生验证分数，决策层设置经验证划分内二折交叉验证确定，再在全训练集重训并在测试集评一次。参数与能量引用原论文数字，均不计谱图与预处理开销，基线为 32 位，NeuTNN 全层 4 位，突触数直接可比，公平性前提在此确立。

#### 精度随规模的变化

先看城市声音基准的融合精度与参数规模，下表列出 SMMT 不同时间步与 MISNet 各尺寸及 NeuTNN 单流与融合结果。音频与视觉列为 NeuTNN 单模态类层精度，融合列为决策层后精度，参数列直接比较突触数与 32 位参数量，可读出规模差距。

| Method | Audio | Visual | Fused | Params |
| --- | --- | --- | --- | --- |
| SMMT, T=1 | 92.10 | 90.74 | 94.30 | 9.99M |
| SMMT, T=4 | – | – | 96.85 | 9.99M |
| MISNet-XS | – | – | 97.71 | 4.06M |
| MISNet-S | – | – | 98.09 | 7.33M |
| MISNet-L | – | – | 98.52 | 19.63M |
| MISNet-XL | – | – | 98.96 | 31.00M |
| NeuTNN-AV | 92.44 | 92.52 | 98.82 | 1.38M |

NeuTNN 音频 92.44% 与视觉 92.52% 已与 SMMT 单模态编码器相当，融合达 98.82%，超过 SMMT 四步的 96.85% 与 MISNet-XS、S、L，仅比 MISNet-XL 的 98.96% 低 0.14%。代价是 1.38M 突触，对 XL 的 31.00M 约 23 倍缩小，对 XS 的 4.06M 也有约 3 倍缩小。融合相对最佳单流提升约 6.3%，说明 2 模态错误相对独立，微型决策层已能兑现互补。

再看更难的情绪基准，下表同时给出音频、视觉与融合精度，基线含 PMR 与 QMF 等 ANN 方法及 SMMT 与 MISNet 各尺寸。NeuTNN 视觉列含两个视觉层分数，融合列为最终 4 位网络精度，参数列可直接比较规模差异，读数时注意音频单流明显弱于视觉。

| Method | Type | Audio | Visual | Fused | Params |
| --- | --- | --- | --- | --- | --- |
| PMR | ANN | – | – | 61.10 | 22.36M |
| QMF | ANN | – | – | 63.71 | – |
| SMMT | SNN | – | – | 62.50 | 9.99M |
| MISNet-XS | SNN | – | – | 66.45 | 4.06M |
| MISNet-S | SNN | – | – | 68.72 | 7.33M |
| MISNet-L | SNN | – | – | 75.22 | 19.63M |
| MISNet-XL | SNN | – | – | 77.14 | 31.00M |
| NeuTNN-AV | TNN | 52.42 | 71.24 / 65.86 | 78.63 | 2.34M |

NeuTNN 音频仅 52.42%，最佳视觉 71.24%，融合达 78.63%，比 MISNet-XL 的 77.14% 高约 1.5%，比 MISNet-XS 的 66.45% 高约 12%，突触 2.34M 对 31.00M 约 13 倍缩小，对 XS 约一半规模。融合相对最佳单流提升约 7.4%，分情绪看音频擅长愤怒，视觉擅长高兴与厌恶，融合在 6 类上都超过较强单流，中性与悲伤提升约 10%，恐惧与悲伤仍最弱且互混并与中性混淆。

为看清精度随规模的变化，先对比左右两组蓝色与灰色横条的长度与数值，再注意蓝色条在 1M 量级即逼近灰色大模型。横轴分别为精度百分比与百万突触数，纵轴按尺寸排序，下图把这种权衡摆在同一尺寸轴上，便于一次看清代价与收益。

[![原论文 Figure 4：Accuracy and model size on UrbanSound8K-AV (left) and CREMA-D (right).](https://arxiv.org/html/2611.31884v1/figs/fig3_accuracy_vs_size_av.png)](https://arxiv.org/html/2611.31884v1/figs/fig3_accuracy_vs_size_av.png)

*论文图 4：两数据集上精度与规模并排对比，蓝色 4 位模型以小尺寸逼近或超过灰色 32 位基线（原论文 Figure 4）。*

左侧 UrbanSound8K-AV 中 NeuTNN 随每类段上限从 25 到 300 由 85.8% 经 94.1%、97.3%、98.6% 升至 98.8%，尺寸由 0.26M 经 0.50M、0.92M、1.33M 到 1.37M，在 0.92M 已超 SMMT 四步，1.38M 超 MISNet-L 且接近 XL。右侧 CREMA-D 中双层模型在 1.79M 达 75.8% 追平 19.6M 的 MISNet-L，三层最终模型以 2.34M 达 78.6% 超过 31.0M 的 XL。所有 NeuTNN 蓝条都短于最小基线灰条，蓝色为 4 位突触，灰色为 32 位参数。

#### 存储与突触能耗的估算口径

硬件代价按权重存储与每推理突触能耗比较，能量口径与基线一致，把实测 RNL 单元增量按一次 32 位加法 0.9 pJ 计。下表给出两数据集的对照，存储按 4 位与 32 位分别折算，能量均为每片段平均值，可直接读出倍数差距与绝对量级。

| Data | Model | Params | Bits | Memory | Energy |
| --- | --- | --- | --- | --- | --- |
| UB8K-AV | SMMT | 9.99M | 32 | 40.0 MB | 3.99 mJ |
| UB8K-AV | MISNet-XS | 4.06M | 32 | 16.2 MB | 0.97 mJ |
| UB8K-AV | MISNet-XL | 31.00M | 32 | 124.0 MB | 4.23 mJ |
| UB8K-AV | NeuTNN | 1.38M | 4 | 0.69 MB | 0.0011 mJ |
| CREMA-D | SMMT | 9.99M | 32 | 40.0 MB | 5.78 mJ |
| CREMA-D | MISNet-S | 7.33M | 32 | 29.3 MB | 2.41 mJ |
| CREMA-D | MISNet-XL | 31.00M | 32 | 124.0 MB | 6.88 mJ |
| CREMA-D | NeuTNN | 2.34M | 4 | 1.17 MB | 0.0088 mJ |

UrbanSound8K-AV 上 NeuTNN 存储 0.69 MB，对 SMMT 的 40.0 MB 约 58 倍缩小，对 XS 的 16.2 MB 约 23 倍缩小，能耗 0.0011 mJ 比基线低 880 到 3,850 倍。CREMA-D 上存储 1.17 MB，对 XL 的 124.0 MB 约 106 倍缩小，对 S 的 29.3 MB 约 25 倍缩小，能耗 0.0088 mJ 低 270 到 780 倍。实测每片段增量 Urban 为 1.22M，平均每突触 0.89，CREMA-D 为 9.7M，平均每突触 4.2，即使按满权重算也仅 19 与 32 μJ，且 4 位计数器实际远低于 0.9 pJ，比较偏保守。

#### 单遍在线与新演员适应

在线学习看两条曲线的走向：左侧随已见片段数上升的 3 条单流与融合曲线及灰色离线水平线，横轴为已见片段数，纵轴为测试精度；右侧新演员随标注数上升的在线曲线与近乎水平的冻结基线。下图呈现这种差异，读时注意横轴为片段数与标注数，纵轴均为精度百分比。

[![原论文 Figure 5：Online STDP learning on CREMA-D with single-pass, one-clip-at-a-time STDP.](https://arxiv.org/html/2611.31884v1/figs/fig4_online_learning.png)](https://arxiv.org/html/2611.31884v1/figs/fig4_online_learning.png)

*论文图 5：左侧单遍精度随已见片段上升逼近离线水平，右侧新演员精度随标注数上升而冻结基线持平（原论文 Figure 5）。*

左侧单遍逐片段先分类后学习，融合在 6,698 片段后达 73.8%，比同配置离线六遍低 3.9%，仍超多轮训练的 MISNet-S 与 SMMT，突触由 100 片段后的 0.19M 增至全程后的 3.87M。右侧先在 60 位演员 80% 片段上在线学习，再对 31 位新演员各用一半片段学习一半测试，未见时约 40%，平均 20 个标注片段后提升约 19%，全部约 41 个后提升约 32%，冻结权重只更新归一化的基线停在 40% 附近。学完新演员后回测前 60 位融合掉 5.4%，类层仅掉 0.2% 到 3.4%，其余来自 108 突触决策层的近期偏置。

### 去掉按错增生或换掉排序码会损失多少精度

消融一次去掉一个部件，以单层精度与融合精度衡量归因。段上限实验另看每类需要多少原型，UrbanSound8K-AV 的招募会自行停止，CREMA-D 脸层填满上限而音频层很早就饱和，分布还反映类别内在变化程度，值得对照阅读。

下表上半为类层去掉按错增生的单流精度，下半为决策层换用不同编码的融合精度，含非脉冲浮点加权和对照。上半四列为两数据集音频与视觉单层精度，下半两列为融合精度，可直接读出去掉部件后的下降幅度与编码方式的差距。

| Class layer | UB aud. | UB vis. | CR aud. | CR vis. |
| --- | --- | --- | --- | --- |
| Full model | 92.44 | 92.52 | 52.42 | 71.24 |
| No recruit-on-error | 70.69 | 67.82 | 52.69 | 37.23 |
| Decision layer | UB fused | UB fused | CR fused | CR fused |
| Rank code (4-bit) | 98.82 | 98.82 | 78.63 | 78.63 |
| Temporal code of z-scores | 82.86 | 82.86 | 74.06 | 74.06 |
| Float weighted sum (non-spiking) | 97.14 | 97.14 | 76.88 | 76.88 |

去掉按错增生后 Urban 音频由 92.44% 掉到 70.69%，视觉由 92.52% 掉到 67.82%，CREMA-D 脸由 71.24% 掉到 37.23%，因单段平均大量不相似样本。例外是 CREMA-D 音频，52.42% 与 52.69% 基本持平，跨说话人变化太大使平均模板与存储模板同样泛化。决策层用数值的时序码约 20% 样本打平，Urban 融合掉到 82.86%，CREMA-D 掉到 74.06%，排序码以 4 位权重反超浮点加权和，在 Urban 为 98.82% 对 97.14%，在 CREMA-D 为 78.63% 对 76.88%。

段上限由每类 25 到 500 的曲线显示，Urban 两层在约 300 停止招募，更大上限不再增加段数，尺寸由数据决定而非上限。同训练量下音频层给平稳的空调 79 段、引擎怠速 98 段，给多变的狗吠 215 段、街头音乐 190 段。CREMA-D 脸层在约 200 段前持续受益，音频层 25 段的 0.09M 突触已与 200 段相当，200 后脸层持平而音频略降，说明情绪音频不宜用过多原型。

### 单遍适应与部署选型的边界和代价

结论成立有明确前提与代价。前端固定不学，CREMA-D 音频依赖按演员归一化，在线时只能用已见片段向全局收缩估计，新演员冷启动仍需积累。能耗以计数增量乘 0.9 pJ 估算而非芯片实测，且不计谱图与预处理，脸层因 94% HOG 线发放而占主导，Urban 则因 ON/OFF 半数静默、颜色直方图 68% 静默与 43% 到 66% 零权重而更稀疏。持续学习以 5.4% 旧演员融合精度换取新演员约 32% 提升，类层仅掉 0.2% 到 3.4%，遗忘集中在 108 突触决策层。任务只用分类精度，无主观听测，延迟与 RTF 未披露。

复现需对齐三件事：数据划分用 UrbanSound8K-AV 的 70% / 30% 与 CREMA-D 的 6,698 / 744，超参数先在 30% 验证划分上选定再全量重训；关键超参数为 \(\eta = 0.2\)、每层 \(\rho\) 在 0.4 到 0.85、\(T = 16\)、\(T_f = 8\)、\(m = 3\)、决策段在 1、2、4 中选择；训练硬件、代码与权重在原文中未披露可验证公开链接，需自行实现 RNL 计数、输入归一化阈值与 3 个分支 STDP。附录无额外证明，权重存储按 4 位计，基线按 32 位计，比较时需保持这一口径。

工程上，若设备要求常开低功耗且允许部署后用几十个带标签片段适应新说话人或新环境，该路线值得尝试，第一步可从每类 25 到 50 段的小音频层与约 200 段的视觉层起步，\(\rho\) 按模态分别调到 0.4 到 0.85，决策保持 \(m = 3\) 的排序码。若追求离线最高精度或已有大算力，MISNet-XL 仍在 Urban 上高 0.14%，且本方法对脸部预处理与演员归一化敏感，上线前需补真实流式延迟、实测能耗与长期遗忘的验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 22.05 kHz，128 带 log-mel 谱图，跳步 23 ms；编码时间步 T = 16，决策时间步 T_f = 8，每流取前 m = 3 名；UrbanSound8K-AV 音频 456 维对应 912 线，视觉 128 维对应 128 线，CREMA-D 音频 296 维对应 592 线，视觉 900 维对应 900 线；因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：UrbanSound8K-AV 8,732 片段 10 类最长 4 s，70% 训练 30% 测试；CREMA-D 7,442 视频片段 91 位演员 12 句 6 种情绪，6,698 / 744 训练测试划分，人类同时看听约 64%；超参数在训练集内 30% 验证划分选择，决策设置经验证内二折交叉验证，再全量重训评一次
- **算力与训练耗时**：原文未披露训练所用 GPU / TPU 型号与数量、训练步数与耗时，也未披露推理硬件配置
- **核心超参数与配置**：学习率 eta = 0.2，每层 rho 在 0.4 到 0.85，T = 16，T_f = 8，m = 3，决策段 K_f 在 1、2、4 中选择，权重 4 位 0 到 15，裁剪到 0 到 T-1 取整封顶；Urban 音频 1,237 段图像 1,873 段，CREMA-D 音频 300 段视觉各 1,200 段
- **推理速度与部署开销**：推理只用比较与加法，无逐突触乘法，每段每步一次阈值比较加每段一次阈值乘法约 10 万量级；按 RNL 增量以 32 位加法 0.9 pJ 计为 Urban 0.0011 mJ 与 CREMA-D 0.0088 mJ；RTF、延迟与显存原文未披露
- **开源产物与协议状态**：原文未提供经验证的代码、权重、数据或演示公开链接，复现需自行实现前端、编码与 STDP 规则
- **附录与补充材料要点**：原文未披露独立附录，失效分析在正文混淆矩阵中给出，恐惧与悲伤最弱且互混并与中性混淆

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.31884v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在CREMA-D以2.34M突触取得78.63%超越31M的MISNet-XL，在UrbanSound8K-AV以1.38M取得98.82%仅低0.14%，权重内存小23至106倍。

- 核心优势：以多分支主动树突加输入归一化阈值与排序决策层实现4位整数单脉冲推理，无反向传播与每突触乘法并支持局部在线学习。

- 核心优势：直接消融显示去掉按错招募下降21%至33%、改用数值编码下降4.6%至16%，单遍在线达73.8%且新说话人平均提升约32%。

- 主要短板：突触能量按32位加法0.9pJ折算为1.1μJ与8.8μJ而非芯片实测，且比较不含语谱图与预处理开销。

- 主要短板：结论仅在两个固定划分与固定前端下成立，无多次运行方差与显著性检验，未验证噪声遮挡跨设备等部署条件。

- 主要短板：未披露第一方代码仓库、模型权重下载、数据集链接与演示地址，也未说明未来开源计划而无法直接复用产物。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
