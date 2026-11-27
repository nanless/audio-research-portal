---
title: "Hierarchical Semantic Learning for Multimodal Sentiment Analysis with Missing Modalities"
date: 2026-11-27
draft: false
tags: [多模态情感极性分析, 多模态学习, 对比学习]
categories: [论文速递]
description: "针对缺失模态下扁平表示的语义平均与病态映射问题， HSL 以高层锚点自顶向下重建中低层并辅以原型监督与层级融合，在四库两类缺失协议平均上取得最优且训练更快，但在纯视觉单模态与单噪声源锚点条件下仍存在明显短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34184"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "层级语义学习如何支撑缺失模态下的多模态情感分析"
paper_digest_original_title: "Hierarchical Semantic Learning for Multimodal Sentiment Analysis with Missing Modalities"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34184v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34184v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34184v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对缺失模态下扁平表示的语义平均与病态映射问题， HSL 以高层锚点自顶向下重建中低层并辅以原型监督与层级融合，在四库两类缺失协议平均上取得最优且训练更快，但在纯视觉单模态与单噪声源锚点条件下仍存在明显短板。"
paper_digest_reader_sections: [{"heading":"缺失模态下扁平表示为何出现语义平均与病态映射","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"HSL 四组件总览与两类缺失协议下的数据走向","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"分层解耦与自顶向下阶梯重建如何保留语义递进","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"原型监督与层级交互融合怎样抑制误差累积","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"两种缺失协议下 HSL 在四库上的平均表现与公平性前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融与几何分析如何证明自顶向下设计的必要性","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界复现核对与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China"],"name":"Chunlei Meng"},{"affiliations":["University of Macau"],"name":"Rong Fu"},{"affiliations":["Aerospace Information Research Institute, Chinese Academy of Sciences"],"name":"Zhan Chen"},{"affiliations":["College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China"],"name":"Yi Liu"},{"affiliations":["School of Information Science and Technology, Fudan University"],"name":"Zhuo Zou"},{"affiliations":["Department of Information Technology, Old Dominion University"],"name":"LiDa Xu"},{"affiliations":["College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China"],"name":"Chun Ouyang"},{"affiliations":["College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China"],"name":"Zhongxue Gan"}]
paper_digest_abstract_sha256: "359ab7378142cf8d176b9947d6d5d8a074b2c9ed64b64fee8d0d1715dbcd33d6"
paper_digest_sidecars: {"citation.bib":{"sha256":"c123f1ef56d80b729e53579fca435f873d970e1fa8fd201817d7979190c762f2","url":"/audio-research-portal/client/papers/2026-11-27/2611-34184/citation.bib"},"citation.json":{"sha256":"1b255447fd6fd654b6684add0b714082849ee62dd6bf4a769b50672a5eeefbde","url":"/audio-research-portal/client/papers/2026-11-27/2611-34184/citation.json"},"citation.ris":{"sha256":"762f8c5f32bb2d32901e8ca1716158538cee86fbb4755378525f42e8b86ff08c","url":"/audio-research-portal/client/papers/2026-11-27/2611-34184/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"18d07534b25f60102814e99385b568acc5ffed65f74b71753351fb463cc44a58","url":"/audio-research-portal/client/papers/2026-11-27/2611-34184/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d85601addddc0377825ecc1bf49f57ed21299913e83dfaf72cef92e2c8d0cd71"
paper_digest_api_reader_plan_sha256: "78b41d5408b434a822a7b43995c442f17982993b8fac49de70c54dfca0609787"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c0522b54df7425cd46c7df17ec690ab35e0fba40eba4bbecb7f887bdf28cbc37"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "9a0fab2a6a3064ded3f71b56841d6668de814beac48cdffb085025ed1e6328ef"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4d62f153d9d5baddf8495e80f85465608fc344e079f998f40e4fb641ffbd8603"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4f5189f873173e68c0d8b511090b4fc0648ab2d55a7541cd58e4aee05ef82dae"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 层级语义学习如何支撑缺失模态下的多模态情感分析

> 英文题目：*[Hierarchical Semantic Learning for Multimodal Sentiment Analysis with Missing Modalities](https://arxiv.org/abs/2611.34184v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[对比学习](/audio-research-portal/papers/?concept=method.contrastive)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 7.3/10 | 技术严谨 6.5/10 | 实验充分 6.6/10 | 清晰度 7.0/10 | 影响力 5.3/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.5/10


## 👥 作者与机构

- Chunlei Meng：College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China
- Rong Fu：University of Macau
- Zhan Chen：Aerospace Information Research Institute, Chinese Academy of Sciences
- Yi Liu：College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China
- Zhuo Zou：School of Information Science and Technology, Fudan University
- LiDa Xu：Department of Information Technology, Old Dominion University
- Chun Ouyang：College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China
- Zhongxue Gan：College of Intelligent Robotics and Advanced Manufacturing, Fudan University, Shanghai, China

## 📌 核心摘要

**问题与瓶颈：** 多模态情感分析以语言、声学和视觉 3 路输入序列 \(X_m\) 为输入，以连续情感分或情绪类别 \(y\) 为输出，实际部署中常因传感器失效、隐私遮蔽或传输不稳定出现模态级缺失与模态内随机擦除。现有主流路线或在编码器末端单层扁平表示上做可靠性加权与对比正则，或单阶段补全缺失模态的末端嵌入，忽略了深层编码器固有的低层物理模式、中层结构组成与高层抽象语义分工。在欧氏重建损失下，对多峰后验求期望会趋向条件均值，造成语义平均与类别边界重叠，而高、中、低层跨模态可对齐程度本就不同，单嵌入被迫吸收异质相关会导致映射病态与分布失配。

**核心思路与方法架构：** 与已利用多层的 EMT、HRLF 的实质差异是，层级语义学习（Hierarchical Semantic Learning，HSL）把每个模态的 12 层编码器显式切为 1 至 4 层低层、5 至 8 层中层与 9 至 12 层高层 3 路特征流，并用已观测模态推断的高层语义做锚，自顶向下逐级恢复缺失模态。以声学缺失为例，语言与视觉的高层特征拼接为上下文 \(C^{High}_{\mathcal{O}}\)，经可学习查询交叉注意力生成缺失声学高层锚，该锚做查询、同层观测证据做键与值，经语义注入解码器（Semantic Injection Decoder，SID）先恢复中层再恢复低层。层级级联误差监督按层做原型对比约束，层级交互融合把全部模态层级词元加模态与层级嵌入后由 Transformer 亲和矩阵路由到聚合词元输出预测，完整前向目标特征截断梯度做常量，其余参数联合更新，流式与实时属性及特征宽度 \(d\) 等细节论文中未披露具体数值。

**关键实验与核心代价：** 在 CMU-MOSI、CMU-MOSEI 与 CH-SIMS 的模态内随机擦除协议下，按 \(r \in \{0.0, 0.1, \dots, 0.9\}\) 平均，HSL 在 CMU-MOSI 上 Non0 F1 为 73.77%，MAE 为 0.965，Corr 为 0.563，对应 P-RMF 为 72.93%、1.038 与 0.525，在 CMU-MOSEI 上为 81.45%、0.635 与 0.612，对应 P-RMF 为 79.33%、0.658 与 0.589，在 CH-SIMS 上 F1 为 75.26% 与 MAE 为 0.476，对应 P-RMF 为 74.65% 与 0.500，均为客观分类与回归指标，论文中未安排人工主观听测。固定模态缺失下 7 种条件平均 F1 在 MOSI 为 81.36%，MOSEI 为 81.67%，IEMOCAP 四分类为 74.36%，六分类为 56.05%，多数条件领先 ROSA 与 P-RMF。主导收益来自跨层重建，去除该模块后 MOSI F1 降至 68.95%，代价是单视觉等弱锚条件下仍落后于 P-RMF，训练成本为每 epoch 17.76 s，接近 P-RMF 的 18.67 s，低于 LNLN 的 24.66 s，推理时延与显存峰值论文中未披露。

**适用边界与深读导览：** 结论成立前提是三模态深编码器、固定三层划分、协议内掩码训练与按指标选最优检查点，未覆盖红外与激光雷达等异质传感器、变采样率与可变层级深度，单路弱观测做锚时不确定性仍会向下传播。欲深究层边界公式、高层锚与注入解码器推导、原型分箱与总损失权重，可查阅下方方法概述和架构与细节详述，欲核对跨缺失率曲线与消融数值可查阅实验结果表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 缺失模态下扁平表示为何出现语义平均与病态映射

多模态情感分析需联合语言声学与视觉线索判断情感极性与强度，完整输入下多源互补常带来增益。实际部署常遭遇模态级缺失与模态内随机擦除，诱因包括传感器失效隐私遮挡与传输不稳定。论文以二值掩码向量刻画可用性，可观测集与缺失集随样本变化，要求模型在多种缺失模式下保持稳定，这构成实用系统的关键门槛。

为理解扁平建模失效与层级重建动机可先对照动机示意图左右两栏，左侧展示单层表示如何压缩低中高语义，右侧展示高层语义作为锚点如何逐级约束中层结构与底层细节，带着缺失时表示模糊与重建清晰的对比阅读有助于把握后文 4 个模块分工。

[![原论文 Fig. 1：Motivation for HSL. (left) Baseline: Flattened outputs disrupt semantic hierarchy, leading to…](https://arxiv.org/html/2611.34184v1/motivation-1.png)](https://arxiv.org/html/2611.34184v1/motivation-1.png)

*论文图 1：扁平建模语义平均与层级锚点自顶向下重建的动机对比（原论文 Fig. 1）。*

示意图左侧灰色梯形并列低中高三色块经粉色竖条压缩为单一向量，再以虚线箭头指向正向负向与其他 3 张人脸，下方散点显示正负两类分离而重建点落在中间模糊区，最终人脸呈模糊状并标注语义平均与病态映射。右侧自上而下排列高层抽象语义中层结构句法与底层物理模式三层梯形，高层经文本与图像图标形成稳定锚点蓝色粗箭头逐级向下传递约束最终人脸清晰并配绿色对勾。

深层编码器本身具有层级结构低层捕捉音高能量词形与像素纹理等物理模式，中层编码韵律动态句法组合与动作单元高层汇总话语级情感语义。扁平方法只正则或补齐最后一层输出在欧氏重建损失下最优预测趋向条件均值产生过度平滑，不同情感类别的重建均值易落入公共区域类别边界重叠导致细粒度区分能力下降。

已有路线分为可靠性加权与显式重建两类前者如 ROSA 估计模态可靠性并自适应加权 MLCL 以多级对比保持一致性，后者如 DAR 在解耦空间重建情感因子 P-RMF 在代理空间生成稳定表示 EMT 与 HRLF 虽利用多层表示但未明确让缺失模态高层推断作为条件逐级重建中低层论文据此提出层级语义学习框架 HSL 把编码器显式拆为 3 流并以高层锚点自顶向下恢复缺失层级再用原型监督与层级融合稳定预测。

### HSL 四组件总览与两类缺失协议下的数据走向

HSL 包含层级语义解耦跨模态跨层语义重建层级级联误差监督与层级交互融合 4 个部分，输入为语言声学视觉 3 路序列输出为情感分数或类别。训练时用模态级掩码模拟缺失并以同一样本无掩码前向结果作为重建目标且截断梯度，评测覆盖模态内随机擦除与固定模态缺失两类协议前者破坏各模态内部位置并保留时序后者直接移除完整模态分别考查局部损坏与整源不可见下的鲁棒性。

为建立端到端数据流整体印象可沿输入到输出从左到右顺序阅读框架总览图，图中以声学缺失为例依次经过解耦重建原型监督与融合 4 个纵栏实线表示数据流向虚线表示监督，请先定位各模态三层特征拆分与汇合位置再观察重建特征如何进入融合序列特别留意缺失与重建在图例中的纹理区分。

[![原论文 Fig. 2：Overview of the Hierarchical Semantic Learning (HSL) framework, illustrated with a missing acoustic…](https://arxiv.org/html/2611.34184v1/HSL-3.png)](https://arxiv.org/html/2611.34184v1/HSL-3.png)

*论文图 2：以声学缺失为例的四组件数据流与监督关系总览（原论文 Fig. 2）。*

总览左侧输入栏并列语言文本框声学波形与视觉胶片条其中声学波形叠加斜纹表示缺失段，解耦栏为每个模态展开低中高三格并标注词法韵律意图等示例重建栏把可观测模态同层特征拼接为上下文经交叉注意力生成声学高层锚点再经两个语义注入解码器逐级得到中层与底层重建监督栏为每层设置原型库融合栏把 9 组模态层级令牌与聚合令牌送入 Transformer 经加和归一与前馈得到正向或负向预测图例区分缺失与重建填充。

公平性处理采用协议相关训练模态内擦除下支持缺失输入的方法在相同缺失率下训练与测试，需要完整输入的方法只在完整数据训练并在测试时承受擦除，固定缺失下完整输入方法在完整训练集训练并以零填充或特殊符号替代缺失缺失模态方法沿用各自原始训练策略 HSL 则使用模态级掩码训练并在测试时移除对应流因此完整 3 模态结果与擦除率为零的结果并不等价最优检查点按评测指标分别选取二分类与其对应 F1 共用同一预测其余指标按各自最优检查点分别选取。

### 分层解耦与自顶向下阶梯重建如何保留语义递进

层级语义解耦把每个模态的 12 层 Transformer 编码器按等深规则切为 3 段，第 1 层至第 4 层为底层第 5 层至第 8 层为中层第 9 层至第 12 层为高层。语言低层偏向词形与局部短语中层偏向组合与上下文高层汇总话语情感声学低层对应音高能量与频谱中层对应韵律与时序动态高层对应发声情感与风格视觉低层对应面部与运动纹理中层对应动作单元与手势结构高层对应表情意图这种相对分层保留可比的抽象阶段而不强求跨模态语义对齐。

\[l_{1}^{m}=\left\lfloor\frac{L_{m}}{3}\right\rfloor,\quad l_{2}^{m}=\left\lfloor\frac{2L_{m}}{3}\right\rfloor,\quad m\in\{l,a,v\}.\]

该式给出每模态切分点 Lm 为编码器总层数 l1 与 l2 为向下取整的三等分边界 m 取语言声学或视觉，等深切分并非断言 3 模态绝对语义深度相同而是提供无搜索可复现的中性划分以暴露相对递进。当总层数不能被 3 整除时向下取整仍能得到连续覆盖的 3 段切分输出的 3 路特征流分别进入跨层重建的查询与键值来源以及后续融合的令牌集合其梯度经由重建损失与任务损失回传从而保留层级结构而非坍缩为单一向量。

跨模态跨层重建采用自顶向下阶梯先用可观测模态的高层拼接构造语义上下文再以可学习的缺失模态查询经交叉注意力生成高层锚点，该锚点作为语义约束既刻画缺失模态在观测上下文下的情感大意又作为下一级重建的查询信号中层与底层重建均以同层观测证据为键值以上层重建为查询通过语义注入解码器逐步注入细节避免低层直接跨模态映射的高度欠定问题。

\[\hat{F}_{B}^{High}=\mathrm{Softmax}\!\left(\frac{(Q_{B}^{High}W_{Q})(C_{\mathcal{O}}^{High}W_{K})^{T}}{\sqrt{d_{k}}}\right)(C_{\mathcal{O}}^{High}W_{V}),\]

该式为高层锚点的交叉注意力生成 Q 为缺失模态查询 C 为观测高层拼接上下文 W 为可学习投影 dk 为缩放维度注意力权重衡量查询与各观测位置的语义相容度加权求和得到锚点表示。当观测上下文充足且情感一致时权重集中锚点稳定当仅剩单一且噪声较大的观测源时权重被迫集中于该源不确定性增大所得锚点直接作为中层解码器的查询逐级向下传递约束从而缩小补全搜索空间并缓解平滑平均。

### 原型监督与层级交互融合怎样抑制误差累积

为抑制逐级误差累积层级级联误差监督为低中高每层维护可学习的原型库回归任务先把情感分数归一化到 0 至 1 区间再均匀分箱分类任务直接按类别数设置原型数同一分箱样本共享粗粒度语义锚但细粒度差异仍由连续表示与回归损失建模每层把观测与重建特征经时序平均池化并可选归一化后与同层原型计算相似度施加对比式监督以保持层级语义一致。

\[\ell_{\mathrm{proto}}(z,y,k)=-\log\frac{\exp\big(z^{\top}p_{c(y)}^{k}/\tau\big)}{\sum_{c=0}^{C-1}\exp\big(z^{\top}p_{c}^{k}/\tau\big)}.\]

该式为单样本在单层的原型损失 z 为池化后特征 pc 为第 c 个原型 tau 为温度系数 c 与 y 组合指示真值所在分箱分母对所有原型求和形成归一化分布拉近同类原型并推远异类原型温度越小分布越尖锐类间分离越强但优化更敏感温度越大监督越平滑该损失对观测与重建特征同时施加梯度经由原型与特征回传迫使重建锚点在进入下一级之前先对齐正确语义区域从而减少级联漂移。

层级交互融合把所有模态与层级的可用流展平为统一令牌序列缺失位置用重建流填充并叠加可学习的模态嵌入与层级嵌入以区分来源与尺度再前置聚合令牌收集全局证据 Transformer 自注意力同时建模跨模态跨层级及其混合依赖亲和矩阵刻画令牌间路由权重最终取聚合令牌输出经回归器或分类头得到预测训练总目标在任务损失之外叠加仅在擦除位置计算的重建损失与上述原型损失。

\[\mathcal{L}_{\mathrm{total}}=\mathcal{L}_{\mathrm{task}}+\lambda_{1}\mathcal{L}_{\mathrm{rec}}+\lambda_{2}\mathcal{L}_{\mathrm{HCES}},\]

该式以 lambda1 与 lambda2 平衡重建保真与语义一致 Ltask 为情感任务损失 Lrec 为掩码位置的 Frobenius 范数 LHCES 为三层原型损失之和 lambda 过大会压制任务目标过小则重建与约束失效重建目标来自无掩码前向且截断梯度避免平凡耦合梯度分别经由融合重建解码器与原型库回传使高层锚点既服务分类回归又保持可恢复的中低层细节形成互补优化。

### 两种缺失协议下 HSL 在四库上的平均表现与公平性前提

评测在 CMU-MOSI 与 CMU-MOSEI 英文视频片段 CH-SIMS 中文影视与 IEMOCAP 情绪语料上展开前三者采用官方划分 IEMOCAP 按 8 比 1 比 1 话语级随机划分情感分数区间英文为负 3 至 3 中文为负 1 至 1 模态内擦除按缺失率从 0.0 至 0.9 以步长 0.1 破坏各模态内部位置声学与视觉以零填充语言以特殊符号替代结果在全部缺失率上平均 HSL 结果为 5 个种子平均基线引自前人报告所有 F1 均为加权 F1 不涉及人工听测。

#### 模态内随机擦除下的平均鲁棒性

在英文双库的模态内擦除平均结果中可重点比较 HSL 与 P-RMF 与 DAR 与 LNLN 等强基线的二分类细粒度分类与误差指标表格保留完整表头方向 MAE 越低越好 Corr 越高越好 Acc-2 与 F1 同时报告负向与非负向以及负向与正向两种划分下表精选 4 组代表性方法以控制篇幅完整对比趋势以原文为准并注意不同指标可能对应不同最优检查点。

| Model | CMU-MOSI F1 | CMU-MOSI MAE (↓) | CMU-MOSI Corr | CMU-MOSEI Acc-5 | CMU-MOSEI Corr |
| --- | --- | --- | --- | --- | --- |
| LNLN [8] | 71.25/72.73 | 1.046 | 0.527 | 46.17 | 0.530 |
| P-RMF [9] | 71.69/72.93 | 1.038 | 0.525 | 45.87 | 0.589 |
| DAR [7] | 71.51/73.15 | 1.069 | 0.520 | 48.01 | 0.583 |
| HSL (Ours) | 73.28/73.77 | 0.965 | 0.563 | 49.76 | 0.612 |

精选子集显示 HSL 在 CMU-MOSI 上 Has0 与 Non0 划分下 F1 为 73.28 与 73.77 MAE 降至 0.965 Corr 达到 0.563 在当前精简表所列行列范围内处于最优在 CMU-MOSEI 上当前精简表仅列出 Acc-5 与 Corr 两列 HSL 的 Acc-5 为 49.76 Corr 为 0.612 高于 P-RMF 的 45.87 与 0.589 以及 DAR 的 48.01 与 0.583 Acc-5 为细粒度五分类准确率与二分类 F1 口径不同原文完整表另有 Non0 划分下 F1 为 81.45 与 MAE 为 0.635 未在当前精简表列出此处不对未列指标断言最优平均值跨越 10 个缺失率且不同列可能来自不同最优检查点。

#### 中文库上的跨语言表现

中文 CH-SIMS 库分数区间与英文库不同评价采用二分类三分类五分类 F1 与 MAE 与 Corr 六项表格延续相同缺失率平均口径 F1 为加权计算下表聚焦 ALMT 与 LNLN 与 P-RMF 与 HSL 的对比以观察跨语言与跨文化表情下的层级重建是否依然有效并留意勘误后基线取值的变化该库对细粒度情感区分更敏感可检验高层锚点在中文影视口语中的约束力。

| Model | Acc-2 | F1 | MAE (↓) | Corr |
| --- | --- | --- | --- | --- |
| ALMT [43] | 71.85 | 67.49 | 0.509 | 0.372 |
| LNLN [8] | 73.15 | 69.18 | 0.515 | 0.387 |
| P-RMF [9] | 73.64 | 74.65 | 0.500 | 0.414 |
| HSL (Ours) | 75.25 | 75.26 | 0.476 | 0.452 |

HSL 在该库六项指标全部最优 Acc-2 为 75.25 F1 为 75.26 Acc-3 为 58.92 Acc-5 为 37.15 MAE 为 0.476 Corr 为 0.452 相对 P-RMF 的 73.64 与 74.65 Acc-2 与 F1 分别提升 1.61 与 0.61 个百分点 Acc-5 提升 2.32 个百分点 LNLN 经勘误后 Acc-2 为 73.15 差距约为 2.10 个百分点该结果表明高层锚点对中文影视口语中的情感大意仍具约束力但仍是缺失率平均值未展示逐率曲线与高缺失尾部行为需结合附录逐率曲线判断高缺失下退化速度。

#### 固定模态缺失与文本缺失硬例

固定缺失直接移除整路信号比随机擦除更能暴露语义空洞尤其在语言缺失时多数模型大幅下滑下表仅展示 CMU-MOSI 的完整 3 模态无文本双模态单声学与平均值四列保留 GCNet 与 P-RMF 与 ROSA 与 HSL 的 F1 分数单位为百分比平均值为 7 种条件均值完整对比还包括 MOSEI 与 IEMOCAP 四分类与六分类趋势一致但此处从略以突出文本缺失硬例与未胜出项。

| Models | Test Conditions (F1-score, %) {l,v,a} | Test Conditions (F1-score, %) {v,a} | Test Conditions (F1-score, %) {a} | Test Conditions (F1-score, %) Average |
| --- | --- | --- | --- | --- |
| GCNet [13] | 83.20 | 70.02 | 65.07 | 75.31 |
| P-RMF [9] | 84.37 | 73.11 | 71.44 | 77.81 |
| ROSA [5] | 86.30 | 83.81 | 81.91 | 80.42 |
| HSL(Ours) | 86.85 | 84.56 | 82.48 | 81.36 |

在 CMU-MOSI 平均值上 HSL 为 81.36 高于 ROSA 的 80.42 与 P-RMF 的 77.81 无文本条件双模态下 HSL 为 84.56 高于 ROSA 的 83.81 单声学下为 82.48 略高于 ROSA 的 81.91 但在单视觉下 HSL 为 59.35 虽高于多数基线却明显低于 P-RMF 的 70.32 构成未胜出项这说明主动合成可弥补主要模态移除的表示空洞但纯视觉线索本身信息有限且噪声较大层级重建难以完全恢复语言主导的情感语义该角落需结合其他生成策略权衡。

为区分缺失率变化带来的波动与随机种子带来的波动可观察 CMU-MOSI 上的小提琴分布与种子稳定性每个小提琴包含 10 个缺失率均值标注均值为跨缺失率平均正负号为缺失率内种子标准差的平均而非小提琴展宽本身请先比较各方法小提琴的中心高度与宽度再对照标注的均值与标准差以明确平均性能与稳定性各自含义。

[![原论文 Fig. 8：Performance variation across missing rates and seed stability on CMU-MOSI.](https://arxiv.org/html/2611.34184v1/Stability.png)](https://arxiv.org/html/2611.34184v1/Stability.png)

*论文图 8：CMU-MOSI 上 F1 与 MAE 随缺失率与种子变化的稳定性分布（原论文 Fig. 8）。*

左侧 F1 小提琴显示 HSL 中心最高均值 73.77 与标准差 0.67 窄于 Self-MM 与 TFR-Net 的宽扁分布略优于 LNLN 的 72.73 与 0.99 右侧 MAE 小提琴显示 HSL 均值 0.965 与标准差 0.090 同样最低且集中图中纵轴分别为 F1 百分比向上越好与 MAE 向下越好颜色区分方法灰色内条表示分位数结果表明 HSL 在不同缺失率下退化较慢且种子间更稳定但基线统计引自 LNLN 的 3 种子报告与 HSL 的 5 种子口径并不完全一致对比时需保留该前提。

### 消融与几何分析如何证明自顶向下设计的必要性

消融在三库的模态内擦除平均口径下报告非负划分 F1 与 MAE 系统移除分层重建监督与融合等要素以定位增益来源同时用表征可视化梯度依赖与训练曲线佐证几何效应与优化稳定性理解时应注意各变体均重新训练性能下降既反映模块功能也包含重训练随机性归因需结合多库一致性判断。

#### 模块移除与重建范式的定量对比

综合消融表覆盖组件重要性重建策略融合机制与正则 4 组共十余个变体下表精选完整模型去除分层去除重建去除监督单阶段重建与去除重建损失六行并保留 MOSI 与 CH-SIMS 的 F1 与 MAE 四列以呈现最关键的性能落差融合机制的加法与乘法基线在原文中显著落后此处从略以突出层级设计的对比并避免表格过宽影响阅读。

| Model Config. | CMU-MOSI F1(%) | CMU-MOSI MAE ↓ | CH-SIMS F1(%) | CH-SIMS MAE ↓ |
| --- | --- | --- | --- | --- |
| HSL (Ours) | 73.77 | 0.965 | 75.26 | 0.476 |
| w/o HSD | 71.24 | 1.012 | 72.39 | 0.510 |
| w/o CM-CLSR | 68.95 | 1.082 | 70.06 | 0.552 |
| w/o HCES | 72.58 | 0.995 | 73.11 | 0.495 |
| Single-Stage | 72.10 | 0.998 | 72.84 | 0.505 |
| w/o ℒrec | 69.10 | 1.075 | 70.36 | 0.548 |

去除跨模态跨层重建导致 MOSI 上 F1 从 73.77 跌至 68.95 MAE 从 0.965 升至 1.082 降幅大于去除分层的 71.24 与去除监督的 72.58 表明主动重建是核心同时去除分层与重建跌至 66.54 验证表示与重建互补自底向上与单阶段分别约为 71.55 与 72.10 低于自顶向下的阶梯设计去除重建损失跌至 69.10 说明显式保真监督不可或缺交叉模态注意力融合达 73.15 接近但仍低于层级交互融合简单加法与乘法仅 64 左右。

#### 表征几何与超参数稳定性的补充证据

为直观理解层级恢复对类别可分性的影响可对照 CMU-MOSI 融合特征的降维可视化六宫格顶部色带从红色负向经黄色中性过渡到绿色正向每点为一个测试样本请先观察完整模型是否形成连续色带再比较缺失分层或重建的变体是否出现颜色混杂并结合定量消融判断几何效应是否一致以便。

[![原论文 Fig. 3：Representation space visualization on CMU-MOSI.](https://arxiv.org/html/2611.34184v1/T-sne.png)](https://arxiv.org/html/2611.34184v1/T-sne.png)

*论文图 3：完整模型与消融变体融合特征的情感流形可视化对比（原论文 Fig. 3）。*

图中左上两格缺失分层与重建的变体红绿点高度混杂无明显流形右上缺失融合与左中缺失分层的变体出现两团但边界松散中间缺失监督的变体呈斜向带状但仍有重叠右下完整 HSL 呈左下红经中部黄到右上绿的紧凑对角过渡颜色渐变最平滑该定性结果与定量消融一致表明高层锚点与原型监督共同维持判别结构但降维示意不能量化类间距与统计显著性。

进一步分析显示超参数权重温度与原型数在较宽区间内 MAE 与 F1 变化平缓中间温度最优训练损失曲线在缺失率增大时完整模型比去除分层与重建的变体振荡更小收敛更快层级必要性对比中扁平重建分层独立重建阶梯无监督与完整模型依次提升完整模型在 MOSI 上 Acc-2 为 0.7421 F1 为 0.7377 MAE 为 0.965 效率方面 HSL 每轮 17.76 秒少于 P-RMF 的 18.67 秒与 LNLN 的 24.66 秒参数量相当。

### 假设边界复现核对与工程选型建议

当前验证集中于语言声学视觉 3 模态情感分析三层划分基于各 12 层编码器的等深切分应视为可复现的相对分层而非普适真理当仅剩单一且噪声较大的观测源时锚点不确定性会向中低层传递这是缺失重建的固有局限而非特定模态偏置原型均匀分箱保留分数序结构但可能在偏态分布下使稀有极性样本不足密度自适应分箱被列为未来方向。

复现核对需区分三件事代码权重与数据系统的可运行性原文实验基于 PyTorch 与单张 A100 80 GB HSL 结果为 5 个种子平均基线多引自前人报告 IEMOCAP 采用 8 比 1 比 1 的话语级随机划分而无固定官方划分论文未提供可确认的代码与权重公开链接因此不能声称已公开附录涉及边界敏感性效率与完整训练对照等细节复现时应以附录超参数与协议相关训练为准并注意完整 3 模态与零擦除结果不等价。

工程选型上若部署场景以随机丢帧与文本噪声为主且允许缺失感知训练 HSL 的自顶向下合成与原型正则可优先考虑尤其在无文本双模态与单声学条件下优势较明显若仅有纯视觉单模态或极端噪声单源预期增益有限 P-RMF 等代理生成在该角落更强向红外激光雷达或生理信号扩展时需重新设计模态接口与层级深度必要时引入层级投影或语义尺度匹配并验证采样率与时空结构差异下的稳定性不宜直接套用三层模板。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露统一采样率与帧率等音频信号规格仅说明语言 token 与声学帧和视觉帧按序列建模擦除后声学与视觉以零填充而语言以特殊符号替代编码器为各 12 层 Transformer 特征宽度记为 d 具体数值未披露
- **训练与评测数据**：训练与评测使用 CMU-MOSI 与 CMU-MOSEI 英文视频片段情感分数区间为负 3 至 3 CH-SIMS 中文影视分数区间为负 1 至 1 IEMOCAP 为四分类与六分类情绪识别前三者采用官方划分 IEMOCAP 按 8 比 1 比 1 话语级随机划分具体样本量原文未披露
- **算力与训练耗时**：所有实验基于 PyTorch 在单张 A100 80 GB 上完成 HSL 结果为 5 个随机种子平均基线多引自前人报告训练效率为每轮 17.76 秒参数量与对照方法相当完整优化器与轮数细节见附录
- **核心超参数与配置**：关键权重包括重建损失权重 lambda1 原型监督权重 lambda2 温度 tau 与原型数 C 默认配置附近较宽区间性能稳定中间温度最优原型数敏感性有限编码器按第 1 至 4 层第 5 至 8 层第 9 至 12 层切分融合层数等细节见附录
- **推理速度与部署开销**：原文未披露延迟与实时率及显存等推理开销仅报告训练效率为每轮 17.76 秒少于 P-RMF 的 18.67 秒与 LNLN 的 24.66 秒推理时移除对应模态流并以重建特征填充后经融合预测未给出延迟与实时率
- **开源产物与协议状态**：论文未说明代码权重与数据演示的公开情况未提供可确认的公开链接复现需依据论文与附录描述自行实现附录涵盖设置与基线及效率分析
- **附录与补充材料要点**：附录涵盖数据集细节与实现及基线说明不同缺失率曲线与效率分析层级边界敏感性与完整训练对照研究其中完整训练对照量化协议差异敏感性与稳定性分析支撑鲁棒性结论

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34184v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在MOSI/MOSEI/CH-SIMS模态内擦除平均上多项最优并对比P-RMF等较强重建基线与ROSA固定缺失平均领先。

- 核心优势：提供去除HSD/CM-CLSR/HCES与自底向上单阶段及多种融合方式的系统性重训练直接消融验证。

- 主要短板：按每个指标分别选最优检查点会高估单一模型综合性能且基线多引自文献非统一重跑。

- 主要短板：纯视觉单弱锚条件下MOSI与MOSEI大幅落后P-RMF说明高层锚并非全缺失模式占优。

- 主要短板：缺失方法加噪训练而完全输入方法干净训练不对称且HSL用5种子而基线引自3种子可比性受限。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
