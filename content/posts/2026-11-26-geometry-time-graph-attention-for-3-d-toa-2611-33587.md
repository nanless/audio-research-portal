---
title: "Geometry-Time Graph Attention for 3-D TOA Localization in Underwater Acoustic Sensor Networks"
date: 2026-11-26
draft: false
tags: [声源定位, 注意力机制, 图神经网络]
categories: [论文速递]
description: "针对推理时无当前声速剖面下多站 TOA 三维定位受折射与失配偏差困扰的问题，论文提出融合站间几何与有序 TOA 对的 UGAN，并在固定 5 站与两条留出剖面的射线追踪测试中以 0.307 m、0.577 m 与 0.989 m 的平均 RMSE 较 GATv2 降低 52.0%、31.0% 与 22.8%，代价是结论仅在同部署与仿真噪声下成立且近海底与高噪声时误差明显增大。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33587"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "几何时间图注意力实现无剖面输入的水下三维 TOA 定位"
paper_digest_original_title: "Geometry-Time Graph Attention for 3-D TOA Localization in Underwater Acoustic Sensor Networks"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33587v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33587v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33587v1.pdf"
paper_digest_primary_task: "声源定位"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.gnn","label":"图神经网络"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对推理时无当前声速剖面下多站 TOA 三维定位受折射与失配偏差困扰的问题，论文提出融合站间几何与有序 TOA 对的 UGAN，并在固定 5 站与两条留出剖面的射线追踪测试中以 0.307 m、0.577 m 与 0.989 m 的平均 RMSE 较 GATv2 降低 52.0%、31.0% 与 22.8%，代价是结论仅在同部署与仿真噪声下成立且近海底与高噪声时误差明显增大。"
paper_digest_reader_sections: [{"heading":"深度相关声速折射下多站 TOA 三维定位的失配难题","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"UGAN 按目标建图与三层几何时间注意力的端到端流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"站对关系编码如何同时决定注意力权重与消息内容","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"留出声速剖面上 UGAN 相对 GATv2 与常速最小二乘的精度对比","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"关系打分、关系消息与单站 TOA 分支各自带来多少增益与计算代价","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"固定布站与仿真射线追踪界定的适用边界与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China"],"name":"Wei Huang"},{"affiliations":["Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China"],"name":"Hongfei Chang"},{"affiliations":["Electronic Information School, Wuhan University, Wuhan, China"],"name":"Kaitao Meng"},{"affiliations":["Shandong University (Weihai), Weihai, 264200, China"],"name":"Tianhe Xu"},{"affiliations":["Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China"],"name":"Hao Zhang"},{"affiliations":["Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China"],"name":"Yanan Wu"},{"affiliations":["China Waterborne Transport Research Institute, Beijing, China"],"name":"Qian Sun"}]
paper_digest_abstract_sha256: "b3658094d3045666c272bf6f676a2dcceba7011e8dfc25c5723f5b722fe05adc"
paper_digest_sidecars: {"citation.bib":{"sha256":"24509f7cd546669fbe2fadded223c3d402f87a687eabf986801ac42fadd6f181","url":"/audio-research-portal/client/papers/2026-11-26/2611-33587/citation.bib"},"citation.json":{"sha256":"3255802a97c4df24edf81c6521e6c948519f1bbc5c707a263a7fe765e11c9261","url":"/audio-research-portal/client/papers/2026-11-26/2611-33587/citation.json"},"citation.ris":{"sha256":"207040a57d2cc4bb551370a602af3631c83366dae45debb6feeba982694de0c8","url":"/audio-research-portal/client/papers/2026-11-26/2611-33587/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5864d0e5c9542a62eacd63f59cdbc283b5d211d9a89d082b2ac8bb27357e8fd6","url":"/audio-research-portal/client/papers/2026-11-26/2611-33587/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "78ac7701938199c202953b74fce05f03796ff63f089f38db4eb0d23ce423029f"
paper_digest_api_reader_plan_sha256: "ba4ab9402dfe5460139acfa50c7663500a5fad26988fc97ad7dbe6a12c51218b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5fc9f867ffd275a40e892babea59ee8faef52994e88618c77db18ba07b6a5caa"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "047447b96ace891b567ef12868686ff31b850c84e1c6204108d3ebd9b0bc5dfb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1e5b281795c0c569865c0558a0168705e5495dd11b670184c6d5458d17c5b8ae"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a4f904baa6bb9939d59cf85ca65e53ffa462296a5b9a3635fb98f04056328953"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 几何时间图注意力实现无剖面输入的水下三维 TOA 定位

> 英文题目：*[Geometry-Time Graph Attention for 3-D TOA Localization in Underwater Acoustic Sensor Networks](https://arxiv.org/abs/2611.33587v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声源定位](/audio-research-portal/papers/?concept=task.localization)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[图神经网络](/audio-research-portal/papers/?concept=method.gnn)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 7.0/10 | 技术严谨 7.8/10 | 实验充分 7.5/10 | 清晰度 6.9/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 7.0/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Wei Huang：Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China
- Hongfei Chang：Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China
- Kaitao Meng：Electronic Information School, Wuhan University, Wuhan, China
- Tianhe Xu：Shandong University (Weihai), Weihai, 264200, China
- Hao Zhang：Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China
- Yanan Wu：Faculty of Information Science and Engineering, Ocean University of China, Qingdao, Shandong 266100, China
- Qian Sun：China Waterborne Transport Research Institute, Beijing, China

## 📌 核心摘要

**问题与瓶颈：** 本文处理水下传感器网络中的三维目标定位，输入是 5 个参考站点的供给坐标与同一目标在各站点的传播时间观测，输出是目标在边长 1000 m 立方水域中的三维坐标。深海声速随深度变化使声线弯曲，若按等速直线把时间换算为距离，会引入系统性偏差。依赖传播模型的方法需要在推理时获知当前声速剖面，剖面失配会直接污染预测时间。站点安装偏移与站点几何进一步决定时间误差如何放大为位置误差。在当前声速剖面不可用时，如何在几何约束下融合多站时间观测成为关键困难。

**核心思路与方法架构：** 与仅用节点状态计算注意力的 GATv2 基线相比，本文保留图注意力聚合框架，增量在于显式引入站点对几何与有序到达时间对的联合关系，并为每层直接注入单个站点的到达时间特征。对一个目标，方法为其构建一张 5 节点全连接有向图并含自环，节点初态为坐标除以 1000 m 得到的归一化坐标，到达时间用训练集均值与标准差标准化。共享非线性编码器把每个站点的标量时间映射为个体特征，供 3 个几何-时间注意力层复用，每层另用各自参数编码 4 维几何边特征与有序时间对，拼接投影为关系特征，用于 3 层注意力打分，并经零初始化投影在后 2 层加入消息内容。训练时更新全部网络参数，推理时标准化统计量与网络参数冻结，按最多 256 个目标分批前向，经均值池化与两层隐层回归器输出归一化位置再乘回 1000 m。由于相同时间差在不同站间距与深度差下对应不同约束，关系特征使模型无需当前声速剖面即可学习折射环境下的映射。

**关键实验与核心代价：** 评测采用射线追踪仿真，10 条声速剖面训练、2 条验证、2 条未见剖面测试，固定 5 站部署与锚系偏移，每种噪声下测试集含 4000 个样本。三维定位均方根误差越低越好，UGAN 在噪声系数为 0.002、0.005 和 0.01 时均值分别为 0.307 m、0.577 m 和 0.989 m，较最强可比基线 GATv2 的 0.640 m、0.836 m 和 1.281 m 分别降低 52.0%、31.0% 和 22.8%，仍高于同样本条件界参考值 0.163 m、0.407 m 和 0.809 m。在 0.005 噪声下去掉关系打分、关系消息与个体时间分支分别使均值升至 0.828 m、0.637 m 和 0.705 m，对应完整模型带来 30.3%、9.4% 和 18.2% 的降低。代价方面，UGAN 含 3.684 百万个参数，单图需 18.392 百万次乘加操作，4000 个目标在同一 GPU 上中位耗时 58.14 ms，较 GATv2 的 62.51 ms 减少 7.0%，但单目标耗时 2.84 ms 高于 GATv2 的 1.68 ms，且 900 m 至 1000 m 近海底区间误差对噪声更敏感。

**适用边界与深读导览：** 上述结论仅在固定 5 站布局、相同锚系偏移与仿真声速剖面范围内成立，未覆盖实测数据、其他站型布局或大范围偏移，CPU 单线程最小二乘与 GPU 批量推理的时间差也不宜直接归因于算法优劣。论文明确提出未来将用外场实测评估更广剖面与布放条件。想深究条件界推导可查方法中观测模型与费雪信息部分，想核对关系打分与消息的增量作用可查消融与按深度误差分析，想复现计时口径可查执行效率部分的软硬件与同步说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 深度相关声速折射下多站 TOA 三维定位的失配难题

#### 同步 TOA 的输入输出与失配来源

在水下声学传感网中，准确的三维定位是海洋观测数据归位与自主水下航行器导航的基础。由于声波传播距离远，空间分散的参考站能够同时观测同一目标，多站传播时间从不同方向对目标位置形成互补约束。在分层海洋中，温度、盐度与压力随深度变化，声速梯度使声线发生折射，传播时间与距离不再满足常速直线关系。若仍用固定声速换算距离，就会引入系统性偏差，而折射程度又随目标深度与站位几何变化，这使定位精度同时依赖布站形状与环境剖面。

本篇考虑同步到达时间（time of arrival，TOA）设定，发射时刻已知且收发时钟同步，到达时刻与目标一一关联。对目标与站点，传播时间观测为到达时刻减发射时刻，后文简称为 TOA 观测。理想无噪传播时间取决于目标位置、站点真值坐标与深度相关的声速剖面（sound speed profile，SSP），实测值再叠加链路测量误差。估计器可用的站点坐标可能因安装偏移偏离真值，而推理时当前 SSP 不可用。每个目标的输入是 5 组供给坐标与 TOA 标量，输出是一个三维位置估计。

\[t_{n,i}=\tau_{n,i}\!\left(\bm{p}_{n};\bm{b}_{n,i}^{\mathrm{true}},c\right)+\epsilon_{n,i},\]

该式把一次 TOA 观测拆成确定性传播时间与随机测量误差两部分，物理直觉是分层介质中的直达声线时延由端点几何与 SSP 共同决定，统计上误差在给定位置与剖面下建模为独立零均值高斯变量且方差可随位置变化。当 SSP 失配或供给坐标偏离真值时，确定性部分出现模型偏差。当噪声系数增大时，随机部分方差增大。该条件观测模型直接决定后文费歇尔信息的均值灵敏度与方差结构，也决定学习模型需要从多站观测中隐式补偿折射而不能依赖显式剖面。

#### 条件界的统计含义与已有路线的瓶颈

为给三维定位提供理论参考，论文在已知真剖面、真站坐标与噪声系数的条件下推导条件克拉美罗下界（Cramer-Rao lower bound，CRLB）。此时 TOA 向量均值为各链路无噪时延，协方差为对角阵，对角元为各链路方差。均值对位置的雅可比矩阵描述时延灵敏度，对数方差梯度描述方差的位置依赖性。费歇尔信息矩阵由这两部分加权构成，其逆矩阵的迹给出无偏估计均方误差的下界。

\[\bm{F}(\bm{p})=\bm{J}^{\mathrm{T}}(\bm{p})\bm{R}^{-1}(\bm{p})\bm{J}(\bm{p})+\frac{1}{2}\bm{G}^{\mathrm{T}}(\bm{p})\bm{G}(\bm{p}).\]

该式的第一项用逆方差加权时延灵敏度，链路噪声越小或几何灵敏度越高，信息量越大。第二项刻画方差本身随位置变化携带的信息，当方差局部恒定时该项消失。极端情形下，若某链路方差趋于零，其倒数权重使信息趋大，而深海长时延链路按平方累积方差会降低权重。矩阵求逆取迹后得到三维均方误差界，论文在每个真值位置用真剖面计算该界并在测试集平均，仅作为理想信息参考，不代表无剖面输入的网络可达极限。

显式方法需要用假设剖面做分层补偿或射线追踪预报时延，剖面失配即带来偏差，等梯度联合估计又依赖假设剖面族能否覆盖真实海洋。数据驱动方法用仿真覆盖多剖面训练并在留出剖面上测试，但性能依赖训练环境覆盖与观测表示。多站融合的关键是同一到达时间差在不同站间距与深度差下对应不同位置约束，因此需要把有序 TOA 对与站间几何联合编码，并让每层仍能直接看到单站时延，这是后文图注意力设计的直接动机。

### UGAN 按目标建图与三层几何时间注意力的端到端流水线

#### 与最近基线的增量与信号规格

与图注意力网络第二版（graph attention network v2，GATv2）相比，水下图注意力网络（underwater graph attention network，UGAN）保留了动态打分中先合并再非线性的思想，实质改动集中在三处。第一，站间位移、站间距离与有序 TOA 对被联合编码为站对关系特征，3 层都参与注意力打分，后两层还作为关系消息直接进入聚合。第二，另设跨站共享的单站 TOA 非线性编码器，逐层投影注入节点消息。第三，每目标建一张全连接有向图并含自环，均值池化后经回归器输出三维位置，推理时无需当前 SSP。

信号与几何规格按仿真设定，定位区域为边长 1000 m 的立方体，空间缩放因子为 1000 m，节点初态为供给坐标除以该因子。TOA 用训练集均值与标准差标准化，稳定常数为 10−9。部署固定为 5 个站点，包含 1 个海面浮标与 4 个海底锚点。候选目标在立方体内均匀采样，仅保留对全部站点存在有效深度单调直达路径的样本，同一几何在 3 个噪声系数下复用。

为明确训练与评测的公平前提，下表整理按 SSP 划分的数据规模与优化配置。训练用 10 条剖面，验证用 2 条剖面，测试用 2 条留出剖面，三者互不重叠。学习方法与常速最小二乘均无测试剖面输入，检查点按验证均方根误差（root mean square error，RMSE）最低选取。该划分决定模型见过的环境覆盖与早停依据，是理解留出剖面泛化结论成立条件的前提。

| Item | Setting |
| --- | --- |
| Training / validation samples | 20,000 / 4,000 per noise level |
| Target-position proposals | Uniform in [0,1000]2×[−1000,0] m |
| Optimizer | AdamW; weight decay 0 |
| Initial learning rate | 5×10−4 |
| Learning-rate schedule | 10-epoch linear warm-up, then cosine decay to 10−7 |
| Training batch size | 128 |
| Maximum training epochs | 800 |
| Early stopping | No improvement in validation RMSE for 300 consecutive epochs |

该配置用 20,000 个训练样本与 4,000 个验证样本覆盖 10 条与 2 条剖面，批量为 128，最多训练 800 轮并在 300 轮无改善时早停，学习率经 10 轮预热后余弦衰减。按剖面划分保证测试剖面未参与训练与选型，代价是仿真总量大且结论仍限定在同部署与同锚点偏移下，不能直接外推到新布站。

#### 单目标样本的张量流向

以一个目标的 5 站观测为例，端到端张量流可按顺序追踪。第一步输入为 5 行 4 列矩阵，每行是供给坐标三维加一个 TOA 标量。第二步坐标除以 1000 m 得 5 行 3 列初态，TOA 标准化得 5 个标量。第三步共享编码器把每个标量映射为 32 维向量，形成 5 行 32 列嵌入并复用至 3 层。第四步 25 条有向边每条构造 4 维几何特征与 2 维有序 TOA 对。第五步每层各自编码拼接并投影为关系特征，自环置零。第六步 3 层图注意力更新节点状态，经图内均值池化得定长向量，再经回归器得归一化位置并乘回 1000 m。头数与每头维度等原文未披露具体数值。

阅读架构图时可先沿从左到右的主路径看数据流向，再对照上下两条支路看关系与单站特征在何处汇入 3 层。左侧为 5 个接收点与中心目标的全连接示意，中间为坐标矩阵与 TOA 向量，顶部为关系输入矩阵，底部为共享编码器，中间三块为注意力层，右侧为池化与回归，注意各层残差与消息标注的差异。

[![原论文 Fig. 1：UGAN architecture for 3-D TOA localization with geometry–time relation scoring in all three GTA…](https://arxiv.org/html/2611.33587v1/figure_1_architecture.png)](https://arxiv.org/html/2611.33587v1/figure_1_architecture.png)

*论文图 1：UGAN 总体架构：单目标 5 站坐标与 TOA 经关系分支与共享编码器汇入三层注意力再经池化回归输出位置（原论文 Fig. 1）。*

图中左侧蓝色接收点与黄色目标以实线与虚线连接表示全连接有向边含自环。中间初态标注为归一化坐标矩阵，顶部关系矩阵按接收与源编号排列，底部编码器标注跨层共享且输出为多行 32 列。第一层标注仅含节点加 TOA 消息并用投影残差，第二层与第三层额外标注关系消息并用恒等残差。右侧均值池化汇合多站特征后经位置回归输出三元组，自环关系虽被掩零但自身节点与单站消息仍参与聚合。

#### 训练目标与批量推理路径

训练以批量内多张目标图的均方欧氏位置误差为损失，优化器为 AdamW，权重衰减为 0，初始学习率为 5×10−4。推理按最多 256 个目标分批，每批一次前向分别在图内做注意力、聚合与池化，每目标返回一个三维估计。单站特征每图计算一次后复用，站对关系特征每层重算，定位阶段不做射线追踪，归一化统计固定采用训练集结果。

### 站对关系编码如何同时决定注意力权重与消息内容

#### 单站分支与站对分支的分工

同一组 TOA 在网络中有两条使用路径，单站分支保留每条目标到站点链路的时延信息，站对分支把两个时延放在站间几何上下文中解释。单站编码器跨站共享且独立于成对编码器，逐层投影注入保证深层仍能直接看到原始时延。成对分支在消融中始终开启，因此去掉单站分支的对比测的是直接单站通路的增量，而非全部时延信息的贡献。

单站分支先对 TOA 做训练集标准化，再经两层无偏置线性变换与高斯误差线性单元（Gaussian error linear unit，GELU）激活得到特征向量。该向量被 3 层复用，每层经各自投影加入源节点消息。形式上记标准化时延为标量，编码结果为向量，权重矩阵可训练。

\[\bm{u}_{i}=\phi\!\left(\bm{W}_{\mathrm{t2}}\phi\!\left(\bm{W}_{\mathrm{t1}}\tilde{t}_{i}\right)\right),\]

该形式用非线性把单标量时延扩展为高维表示，物理直觉是不同到达时刻对应不同距离与折射累积，共享编码保证各站尺度一致。第一层线性把一维映射到隐层，第二层再映射到嵌入维度，2 次激活引入非线性以适配弯曲传播。若输入时延偏离训练均值较远，标准化值绝对值增大，嵌入范数随之变化并经逐层投影影响消息权重与内容，最终经池化与回归驱动位置更新与梯度回传。

#### 几何与时间联合为关系特征

站对几何先把源站相对接收站的归一化位移与欧氏距离拼接为 4 维向量，自环记为零向量，有序 TOA 对按接收在前源在后的顺序拼接为 2 维向量。两类向量在每层经各自两层非线性编码，再拼接并经按头投影为关系特征，自环经指示函数掩零。

\[{\bm{r}}_{ij}^{(l,k)}=\mathbb{I}_{i\neq j}{\bm{W}}_{\mathrm{r}}^{(l,k)}[{\bm{g}}_{ij}^{(l)};{\bm{s}}_{ij}^{(l)}],\]

该形式把几何与时间放在同一打分空间相加，物理直觉是相同时间差在不同站间距与深度差下对应不同位置约束，联合编码使注意力能区分这两种情形。当两站重合或自环时，关系特征为零向量，注意力退化为仅由节点状态决定，但自环仍经节点与单站消息贡献。输出的关系特征一方面进入 3 层的打分函数改变权重排序，另一方面在后两层经零初始化投影进入消息内容，使训练初期接近无关系消息并逐步引入几何时间修正。

#### 注意力打分与消息聚合的执行细节

注意力按 GATv2 的动态原则先把接收查询、源键与关系特征相加再经激活与打分向量求标量，经行内 Softmax 归一化为权重。消息由源节点状态投影加单站特征投影构成，头输出为加权节点消息加后两层的关系消息，多头拼接加偏置后经层归一化与激活再加残差。第一层用仿射投影匹配坐标初态维度，第二层与第三层用恒等映射，最终节点状态送入图级读出。

阅读单层细节图时可先看顶部 4 类输入如何分流，再看中间联合关系在何处同时连向权重与聚合。左侧节点状态经按头查询键投影，中间几何与 TOA 对经各自编码器汇合为联合关系，右侧单站嵌入经数值投影，中间经激活打分与归一化得权重，下方经加权聚合、拼接、归一化激活与残差相加完成节点更新。

[![原论文 Fig. 3：Geometry–time graph attention layer.](https://arxiv.org/html/2611.33587v1/figure_3_graph_attention.png)](https://arxiv.org/html/2611.33587v1/figure_3_graph_attention.png)

*论文图 3：单层几何时间注意力细节：几何与 TOA 对编码为联合关系后同时参与权重计算与消息聚合（原论文 Fig. 3）。*

图中顶行从左到右依次为节点状态、几何位移距离、TOA 对与单站嵌入四框，第二行分别为按头投影、几何编码器、成对编码器，第三行汇合为联合关系框。中间权重框标注激活到打分再到归一化，右侧数值投影框标注节点加 TOA，下方聚合框汇合两路消息，再经拼接多头、归一化激活与残差相加框。自环掩零与后两层才有关系消息的设定在图注中说明，与正文公式一致。

由于注意力与聚合均在图内按源汇重标进行，且节点级操作保持重标，置换站序仅置换节点行，均值池化后图表示不变。证明要求每个 TOA 始终与对应站坐标配对，池化对站序不变，回归器共享，因此同一目标的估计与记录顺序无关。该性质不代表对未见站数或新布局的泛化，仅说明架构本身与输入排列无关。

### 留出声速剖面上 UGAN 相对 GATv2 与常速最小二乘的精度对比

#### 按剖面划分的评测协议与公平前提

仿真区域为边长 1000 m 的立方体，名义部署为上表面中心 1 个浮标加底部四角 4 个锚点，浮标水平位置在半径 10 m 圆盘内均匀采样，锚点水平偏移服从零均值高斯分布且同一实现贯穿训练、验证与测试。真站坐标用于按分段线性 SSP 做深度单调直达射线追踪生成无噪时延，供给坐标用名义锚点加漂后浮标。14 条南海 SSP 按 10 条训练、2 条验证、2 条测试划分，每噪声系数测试 4,000 个样本，每条测试剖面 2,000 个，3 个噪声系数复用同几何。常速最小二乘用 1500 m/s 与名义锚点，学习方法均无测试剖面输入。

下表在同一留出测试集上比较常速最小二乘与 4 种学习方法，列为 3 个 TOA 噪声系数下的三维定位 RMSE，单位为米，学习方法给出多次训练的均值与样本标准差。最后一行为按真剖面、真站坐标与已知噪声系数平均的条件界，仅作理想信息参考。

| Method | γ=0.002 | γ=0.005 | γ=0.01 |
| --- | --- | --- | --- |
|  | RMSE / m | RMSE / m | RMSE / m |
| NLS [36] | 13.810 | 13.819 | 13.846 |
| MLP | 1.293 ± 0.020 | 1.404 ± 0.022 | 1.749 ± 0.017 |
| GCN [32] | 1.074 ± 0.039 | 1.218 ± 0.019 | 1.603 ± 0.024 |
| GAT [33] | 0.822 ± 0.041 | 0.987 ± 0.041 | 1.417 ± 0.043 |
| GATv2 [19] | 0.640 ± 0.039 | 0.836 ± 0.037 | 1.281 ± 0.033 |
| UGAN | 0.307 ± 0.011 | 0.577 ± 0.018 | 0.989 ± 0.018 |
| Conditional CRLB | 0.163 | 0.407 | 0.809 |

在参与比较的定位方法中 UGAN 三档 RMSE 最低，较学习基线中最低的 GATv2 分别降低 52.0%、31.0% 与 22.8%，相对降幅随噪声增大而减小。常速最小二乘三档在 13.810 m 至 13.846 m 之间几乎不变，说明直线模型与供给锚点偏差带来的系统失配主导误差。条件界三档为 0.163 m、0.407 m 与 0.809 m，均低于 UGAN，说明理想信息下仍有差距，但该界假设已知真剖面与真坐标，不构成无剖面网络的可达极限。

#### 误差分布与空间变化

经验累积分布与分位结果显示 UGAN 在三档的 95 分位最低，数值分别为 0.522 m、0.959 m 与 1.638 m，对应 GATv2 为 1.233 m、1.527 m 与 2.219 m，显示区间 0 m 至 4 m 不截断计算。按真深度每 100 m 分箱，900 m 至 1000 m 在中间噪声下为 1.203 m 对 1.824 m，三档从 0.548 m 升至 2.207 m，近海底对噪声敏感。按水平每 100 m 乘 100 m 分箱 pooled 全部深度，均值在 0.371 m 至 1.064 m 之间，每箱 22 个至 59 个位置，反映固定部署下水平与深度共同决定的误差变化。

#### 执行时间的双对数证据

阅读执行时间图时先确认双对数坐标与图例，再比较串行计算硬件（central processing unit，CPU）单线程序贯曲线与并行计算硬件（graphics processing unit，GPU）批量曲线的斜率差异。横轴为目标数从 1 至 4,000，纵轴为总定位时间从 0.1 ms 至 10000 ms，5 条并行曲线用实线，串行最小二乘用虚线，阴影为 30 次重复的四分位距，最大批量为 256，单精度与双精度与线程数均已固定。

[![原论文 Fig. 10：Total localization time versus the number of targets for five learning-based methods (GPU) and…](https://arxiv.org/html/2611.33587v1/figure_10_execution_efficiency.png)](https://arxiv.org/html/2611.33587v1/figure_10_execution_efficiency.png)

*论文图 10：不同目标数下五种并行方法与串行最小二乘的总定位时间双对数曲线与四分位距（原论文 Fig. 10）。*

图中横轴目标数按对数从 1 增至 4,000，纵轴总时间按对数从 0.1 ms 增至 10000 ms。串行最小二乘虚线从单目标 3.16 ms 升至 4,000 目标 6.91 s，斜率陡峭。5 条并行实线在小负载平坦后上升，4,000 目标时多层感知机 6.99 ms、图卷积 29.02 ms、图注意力 27.96 ms、GATv2 62.51 ms、UGAN 58.14 ms，UGAN 较 GATv2 少 7.0%。单目标时 UGAN 2.84 ms 反高于 GATv2 1.68 ms，说明计算量少不等于各负载都快。1,000 至 4,000 目标近似正比增长，小负载非单调受开销影响，4,000 均值是平均代价而非孤立延迟。

### 关系打分、关系消息与单站 TOA 分支各自带来多少增益与计算代价

#### 消融变体的构造与计算量口径

消融在中间噪声系数下比较全模型与 3 个变体。去掉关系打分保留后两层关系消息与单站分支，首层未用关系编码器被移除，但后层节点状态仍可间接携带时序信息。去掉关系消息等价于后两层系数置零，打分与单站注入保留。去掉单站分支移除共享编码器与各层注入，但有序对仍经关系打分与消息提供成对时延，因此测的是直接单站通路在成对信息存在下的增量，未单独区分逐层注入与仅首层注入的差异。

下表报告单目标 5 站一次前向的可训练参数量与计算量，单位均为百万。计数包含线性投影、注意力点积与图聚合，不含激活、归一化与归一化指数函数，批量推理的访存与主机设备传输不在其中，是理解精度与模型规模权衡的口径前提。

| Model | Parameters (106) | MACs per graph (106) |
| --- | --- | --- |
| MLP | 3.173 | 3.169 |
| GCN | 3.157 | 15.829 |
| GAT | 2.248 | 10.745 |
| GATv2 | 4.353 | 21.298 |
| UGAN | 3.684 | 18.392 |

UGAN 以 3,684,000 参数与 18.392 百万计算量达到三档最低误差，较 GATv2 少 15.4% 参数与 13.6% 计算量。轻量多层感知机、图卷积与图注意力所需参数与计算更少且在 4,000 目标下更快，说明 UGAN 的精度收益以高于三者的规模为代价，是否采用取决于无剖面下的精度需求而非单纯追求最小模型。

#### 柱状图的增益归因与未验证项

阅读消融柱状图时先看横轴 4 种配置的顺序，再看纵轴测试 RMSE 与柱顶标注的均值加减标准差。柱高代表中间噪声下测试集 RMSE 均值，竖线代表多次训练的样本标准差，全模型柱最低且误差棒最短，去打分柱最高，去消息与去单站分支居中，比较时注意误差棒是否重叠。

[![原论文 Fig. 9：Key-module ablation results at \\gamma=0.005 for the full UGAN model and variants without relation…](https://arxiv.org/html/2611.33587v1/figure_9_key_module_ablation.png)](https://arxiv.org/html/2611.33587v1/figure_9_key_module_ablation.png)

*论文图 9：中间噪声下全模型与三种变体的测试 RMSE 均值与标准差对比，全模型最低（原论文 Fig. 9）。*

图中从左到右四柱分别为去关系打分 0.828 m 加减 0.048 m，去关系消息 0.637 m 加减 0.034 m，去单站分支 0.705 m 加减 0.025 m 与全模型 0.577 m 加减 0.018 m。全模型较三者分别降低 30.3%、9.4% 与 18.2%，去掉消息仍增加 0.060 m 说明关系内容有附加益，仅留消息不恢复打分缺失的性能。单站分支在成对信息存在下仍降低 18.2%，但该对比未单独建立逐层注入优于仅首层注入的证据。

### 固定布站与仿真射线追踪界定的适用边界与复现核对

结论成立的前提是固定 5 站部署与同一锚点偏移实现，射线追踪仅考虑深度单调直达路径并按 1 m 间隔累积与时延平方成正比的方差，未包含多径、混响、时钟失配与关联错误。目标在立方体内均匀采样且仅保留全站有效路径的样本，测试仅用 2 条留出剖面，200 m 至 400 m 的偏差带外推有限。参数量与目标数无关是架构性质，不代表对未见站数或新布局的定位精度，近海底区间已显示对噪声更敏感。

复现核对需区分论文方法描述、资源可获取状态与系统可运行性。原文未披露训练所用硬件与完整超参数细节，本次未发现来源绑定且完成验证的作者公开代码、模型或数据资源，因此不能声称代码、模型或数据已公开或当前可用，应按训练配置重建 SSP 划分、固定锚偏移、标准化统计与验证选点。耗时结论绑定特定并行硬件、单精度、单线程、确定性操作与最大批量，串行最小二乘绑定另一精度与求解器，跨硬件比较不能单归因于算法。

当部署与布站固定、当前剖面不可用且需批量处理多目标时，该图模型可以优先考虑，第一步可复现 5 站仿真流水线并核对验证 RMSE 选型。若站数变化、存在明显多径或需单目标极低延迟，则应谨慎，需补实测数据、外推剖面、变布局与单目标延迟验证，并对照常速模型偏差是否主导误差，再决定是否引入关系消息与单站注入的额外复杂度。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧率码率等波形音频参数，本工作输入为每目标 5 个同步 TOA 标量与供给站坐标，无帧长步长与因果前瞻设定，批量推理最大 256 个图，4000 目标中位 58.14 ms，单图计算量 18.392 百万 MACs。
- **训练与评测数据**：训练用 SSP1 至 SSP10，验证用 SSP11 至 SSP12，测试用 SSP13 至 SSP14，共 14 条南海声速剖面，每噪声系数训练 20,000 个样本验证 4,000 个样本，测试 4,000 个样本每条测试剖面 2,000 个，目标在边长 1000 m 立方体内均匀采样并保留全站有效直达路径，固定 5 站部署与同一锚点偏移实现，三个噪声系数复用同几何。
- **算力与训练耗时**：推理在 NVIDIA GeForce RTX 5060 Laptop GPU 上用 PyTorch 2.8.0 与 CUDA 12.8 单精度单 CPU 线程确定性操作关闭 TF32 最大批量 256 测量，常速最小二乘在 Intel Core Ultra 9 275HX 上用 MATLAB R2022b 双精度单线程序贯求解，训练所用硬件原文未披露。
- **核心超参数与配置**：优化器为 AdamW 权重衰减为 0，初始学习率为 5×10−4，经 10 轮线性预热后余弦衰减至 10−7，训练批量为 128，最多 800 轮，300 轮验证 RMSE 无改善早停，空间缩放 L 为 1000 m，TOA 标准化稳定常数为 10−9，共 3 层几何时间注意力，后两层关系系数为 1 首层为 0，检查点按验证 RMSE 最低选取。
- **推理速度与部署开销**：单图 5 站一次前向 UGAN 为 3.684 百万参数与 18.392 百万 MACs，4000 目标中位总时间 58.14 ms 对 GATv2 62.51 ms 少 7.0%，单目标 2.84 ms 对 1.68 ms 反而更高，MLP GCN GAT 更快，MACs 未含激活归一化与 Softmax，耗时含传输与图特征构造。
- **开源产物与协议状态**：原文未给出代码权重数据与演示页链接，本次未发现经 HTTPS 验证的作者公开资源，无法确认开源与可下载状态，复现需按论文仿真与训练配置自行重建。
- **附录与补充材料要点**：原文未披露附录补充证明与额外消融，关键细节已在正文给出条件界推导、复杂度分析与深度水平误差分布，典型失效为近海底高噪声区间误差增大。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33587v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在三档噪声下均取得参与比较方法中最低三维RMSE，较GATv2降低52.0%、31.0%和22.8%并报告多次训练均值与标准差。

- 核心优势：显式引入站间距几何与有序到达时间对联合关系，全三层参与注意力打分并在后两层增强消息，每层直接注入个体时间特征。

- 核心优势：给出含方差梯度项的费雪信息条件精度参考推导与站点置换不变性归纳证明，并明确界的理想信息参考定位。

- 主要短板：训练验证测试共用同一组锚偏移实现且固定5站全连接图未经其他站点数验证，可能高估对偏移与布局变化的稳健性。

- 主要短板：近海底900m至1000m区间误差随噪声明显爬升且无外场实测，噪声方差正比于分段传播时间平方的仿真假设未经实测校准。

---

[← 返回 2026-11-26 音频研究日报](/audio-research-portal/posts/2026-11-26/)
