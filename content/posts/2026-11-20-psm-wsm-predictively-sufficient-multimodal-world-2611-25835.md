---
title: "PSM-WSM: Predictively Sufficient Multimodal World Social Modeling"
date: 2026-11-20
draft: false
tags: [多模态情感极性分析, 视频动作识别, 状态空间模型]
categories: [论文速递]
description: "论文针对当前语义相同但未来分叉时隐状态应保留什么信息的问题，提出用冻结未来目标逼近预测充分并结合事件条件混合转移的 PSM-WM（arXiv 元数据标题作 PSM-WSM）框架，在 Hi-EF、IEMOCAP 与 MELD 上以最高加权 F1 分数验证，同时付出概率推断与多步展开的额外训练代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25835"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "预测充分的多模态社会世界建模：为未来演化保留历史信息"
paper_digest_original_title: "PSM-WSM: Predictively Sufficient Multimodal World Social Modeling"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25835v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25835v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25835v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"task","id":"task.video-action-recognition","label":"视频动作识别"},{"facet":"method","id":"method.state-space","label":"状态空间模型"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对当前语义相同但未来分叉时隐状态应保留什么信息的问题，提出用冻结未来目标逼近预测充分并结合事件条件混合转移的 PSM-WM（arXiv 元数据标题作 PSM-WSM）框架，在 Hi-EF、IEMOCAP 与 MELD 上以最高加权 F1 分数验证，同时付出概率推断与多步展开的额外训练代价。"
paper_digest_reader_sections: [{"heading":"当前语义相同但未来分叉时预测状态应保留什么","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"概率推断、冻结目标与混合转移构成的可演化状态流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结未来目标锚定内容与事件条件混合转移刻画演化","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"Hi-EF、IEMOCAP 与 MELD 上的未来预测增益与状态充分性证据","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"部件消融、固定转移对照与缺失模态下的稳健性诊断","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"事件自举与冻结目标依赖下的适用边界与复现清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Fudan University"],"name":"Chunlei Meng"},{"affiliations":["Fudan University"],"name":"Zhenyu Yu"},{"affiliations":["University of Southern California"],"name":"Pengbin Feng"},{"affiliations":["Cornell University"],"name":"Jacqueline J. Pang"},{"affiliations":["Peking University"],"name":"Jiabin Luo"},{"affiliations":["University of New South Wales"],"name":"Chih-Ting Liao"},{"affiliations":["Peking University"],"name":"Zhaolu Kang"},{"affiliations":["Fudan University"],"name":"Chun Ouyang"},{"affiliations":["Fudan University"],"name":"Zhongxue Gan"}]
paper_digest_abstract_sha256: "1870ac392cccf6b525b79c46b9cf0ce4637ee429b9bdb7edcba397fa866a12f4"
paper_digest_sidecars: {"citation.bib":{"sha256":"fccc60af7c11269670135ce7402b6bd651dfbb8454dccf0276face9c11e5c425","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25835/citation.bib"},"citation.json":{"sha256":"ce7f1a3c43fe6bfecc4f46d81a35ea57ed7d0424cb2f30b4a0da696a39681ca0","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25835/citation.json"},"citation.ris":{"sha256":"6beeb2c7b961fbc248f65e4653609e83822b1bae59be26f6785af3c3c0ba0cb9","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25835/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"28ed2e499c84740a8988f017fce1b70700d04a78817a3a5cb91dec9b11c27e6e","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25835/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "5d94a770f134915edf3aee751c75547f3f5ba345098f5d32d619da08dc6587c0"
paper_digest_api_reader_plan_sha256: "e75f903d72f1230378d1ae49225298e5f5cb2f5d9209862c33c5ccd49aa0b5de"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "048d9083cb812a767689205263ec1cc130d4dfbb27ba501b8b29a98b2154dd69"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "afc372bf9e44d18711d943c018f3b4fc1ce60eafc5c612aa425048e680badddf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "42f1d52de8b0cceed939e6e986ef59874a719fe6d5abeb9eafc50305f18fea4c"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "fc970ef5065bae8be224a3b62e55e3fb8c487027e5b54a51c56686ef7341e5c8"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 预测充分的多模态社会世界建模：为未来演化保留历史信息

> 英文题目：*[PSM-WSM: Predictively Sufficient Multimodal World Social Modeling](https://arxiv.org/abs/2611.25835v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)；[视频动作识别](/audio-paper-digest-blog/papers/?concept=task.video-action-recognition)
- **研究方法**：[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Chunlei Meng：Fudan University
- Zhenyu Yu：Fudan University
- Pengbin Feng：University of Southern California
- Jacqueline J. Pang：Cornell University
- Jiabin Luo：Peking University
- Chih-Ting Liao：University of New South Wales
- Zhaolu Kang：Peking University
- Chun Ouyang：Fudan University
- Zhongxue Gan：Fudan University

## 📌 核心摘要

**问题与瓶颈：** 社交互动建模需要从不断到达的语言、声音和视觉观测中形成内部状态，既要解释当前语义，又要支撑未来多步演化。现有主流路线或为当前语义优化表示，或把历史直接映射到未来结果，或在假定状态已给定的前提下只学习转移机制。多模态观测常存在缺失与部分可观测，历史冗余与未来相关信号交织，使仅优化当前理解或直接预测的表示难以稳定支撑长程演化。图 1 提示的困难在于，相同当前语义可能对应不同的未来走向，缺少对状态本身应保留何种信息的定义，预测准确也无法证明模型已获得可复用的未来导向状态。

**核心思路与方法架构：** 直觉是让状态保留历史中与未来有关的成分，使已知状态和事件后历史不再提供额外预测信息。沿一个时刻 t 的样本看，历史 Ht 先经概率信念推断得到分布，均值表示状态估计，方差表示观测不完整带来的不确定性，并用标准正态先验做 KL 正则。状态 St 与事件上下文 Et 经预测映射生成未来语义表示，逼近被冻结的未来编码器提取的目标，以此近似保留预测信息。演化由事件条件混合转移描述，多个高斯分支保留多假设未来，事件预测器在推理时从预测状态估计事件，实现不使用未来观测的自主多步展开，训练以信念正则、状态预测、转移、事件和多步一致性五项加权构成。为保证长程一致性，转移模型被递归应用于预测状态并对齐未来隐表示，多步损失按折扣加权，冻结表示下的状态探针进一步检验预测闭合与历史残余增益。

**关键实验与核心代价：** 在 Hi-EF、IEMOCAP 和 MELD 未来交互预测上以 W-F1 衡量，PSM-WM 分别取得 75.76、68.61 和 69.97，高于最强可比世界模型基线 ModularAgent 的 74.91、68.15 和 69.62。在 Ego4D 未来活动预测上以 Acc 衡量，PSM-WM 为 48.5，消融显示去掉预测充分性目标后 MELD W-F1 由 69.97 降至 68.76、Ego4D Acc 由 48.5 降至 46.9，降幅大于去掉信念推断、事件条件、随机转移与展开一致性等其他组件。代价是需要联合优化五项损失并维护混合随机转移与递归展开，原文未披露参数量、显存、时延或吞吐等可复核成本。

**适用边界与深读导览：** 结论成立依赖于时间对齐的多模态历史、可观测的事件上下文和预训练并冻结的未来语义目标，评测集中在有限预测 horizon 内的社交与第一人称交互，更长 horizon、动作条件预测、分布偏移下的不确定性和真实交互部署尚未验证。状态层探针显示更低的预测闭合差距与历史残余增益以及更强的未来检索，但这只是经验证据而非形式化保证。想深究条件预测公式、混合转移与自主展开的实现以及状态探针与轨迹分离证据，可查阅下文方法概述和架构、实验结果与局限与问题对应部分。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 当前语义相同但未来分叉时预测状态应保留什么

注：arXiv 元数据标题写作 PSM-WSM，而论文原文标题、正文与图示统一简称 PSM-WM，下文统一沿用原文简称 PSM-WM（arXiv 元数据标题作 PSM-WSM）。对于刚进入语音、音乐或音频领域的研究生，可以把社会交互理解成语言、声音与画面 3 路信号随时间展开的过程。每个时刻观测包含文字内容、语调能量与表情动作，到时刻 t 的全部观测记成历史，未来窗口轨迹记成预测对象。已有表征学习擅长解释当前语义，直接预测习惯从历史映射到未来标签，世界模型侧重隐状态如何转移，都没有回答隐状态应保留历史中哪些信息才能在不回看完整历史时支撑未来演化，这正是预测充分性要解决的核心。

#### 相同开心标签下分叉的两段历史

在进入形式化定义之前，先看动机示意左右两栏的对照设计。左侧蓝色底纹代表只为理解当前而学习的表征，右侧粉色底纹代表面向未来演化的预测状态学习。阅读时先沿左侧两段历史的胶片、文稿图标与波形往下看编码器与当前情绪判断，再对比右侧同一段历史如何经过事件与预测状态走向不同的未来轨迹。注意左侧标注的相似关系与右侧标注的变积极与变消极两条曲线走向，这种版式对比直接引出后文的状态构造准则。

[![原论文 Figure 1：Motivation of predictive state learning.](https://arxiv.org/html/2611.25835v1/figures/motivation.png)](https://arxiv.org/html/2611.25835v1/figures/motivation.png)

*论文图 1：当前语义相同但未来分叉的动机对照与预测状态学习目标示意（原论文 Figure 1）。*

示意左侧给出历史 A 与历史 B 两段多模态片段。历史 A 是男孩接球后欢呼的连续画面配蓝色波形，历史 B 是女孩面对生日蜡烛从吹气到微笑的画面配绿色波形。两段历史经过各自编码器得到当前表示 \(Z_{t}^{a}\) 与 \(Z_{t}^{b}\)，图中用双向箭头标为相似，并都判为当前情绪是开心。右侧把同样的两段历史重新组织，历史 A 对应一条向上走的红色轨迹并标注会变得更积极，历史 B 对应一条向下走的蓝色轨迹并标注会变得更消极。中间竖排给出事件 \(e_{t}\) 与预测状态 \(S_{t}\)，底部点明要学习保留未来演化所需信息的状态。这一对比说明只保留当前语义会把走向不同的历史压缩到一起，未来建模需要把决定分叉的历史因素保留在状态里。

#### 条件分布近似写成的充分性要求

论文把这种直觉写成条件分布层面的要求。记历史为 \(H_{t}\)，预测状态为 \(S_{t}\)，可观测的事件上下文为 \(E_{t}\)，未来窗口轨迹为 \(F_{t+1:t+k}\)。理想的预测状态不是单独决定未来，而是与事件上下文一起，能够替代完整历史对未来的预测作用。也就是说，在已知状态与事件的条件下，剩余历史对当前评测任务提供的额外信息应当很小。这一视角把表征学习从解释当前观测转向保留未来演化动力学，并把状态应该存什么与状态如何演化分成两个可分别检验的问题。

\[p(F_{t+1:t+k}|H_{t},E_{t})\approx p(F_{t+1:t+k}|S_{t},E_{t}),\]

这一公式采用条件分布近似的形式，是因为未来演化本身具有不确定性，不能写成确定性等式，只能要求两个预测分布接近。式中 \(F_{t+1:t+k}\) 表示未来窗口内的交互轨迹，\(H_{t}\) 表示到时刻 t 的多模态历史，\(S_{t}\) 表示待学习的隐状态，\(E_{t}\) 表示从历史中可得的事件条件。下标 \(t+1:t+k\) 标明预测跨度，竖线右侧为已知条件。当状态保留了全部未来相关信息时，两侧分布差很小，残留历史增益趋近于零。若状态只存当前语义而丢掉转折因素，两侧分布就会拉开，完整历史仍能显著改善预测。算出的分布差距不直接用于分类，而是作为状态构造的判据，指引后续用未来表征预测损失去逼近这一要求，并为只用状态预测与补加历史预测的差距评估埋下依据。

与充分统计思想对应，论文把最小化 \(I(F_{t+1:t+k} ; H_{t} \mid S_{t}, E_{t})\) 作为等价表述，强调已知状态与事件后历史与未来的条件互信息应当减小。事件上下文在这里不可或缺，它承载交互场景等可观测条件，避免要求状态独自解释一切。后续框架因此分成 3 段分工，概率推断负责从不完整多模态证据中估计状态分布与不确定性，预测充分构造负责把未来相关信息压入状态，事件条件随机转移负责刻画状态如何随时间演化并支撑长程展开。

### 概率推断、冻结目标与混合转移构成的可演化状态流水线

沿一个具体输入样本走一遍 PSM-WM（arXiv 元数据标题作 PSM-WSM）全流程，有助于看清各模块的分工。设某段交互到时刻 t 有历史 \(H_{t}\)，其中每个时刻的观测包含语言文字、声音波形与图像帧，例如文字记录人物进入与拿起杯子等描述，声音为对应片段的波形，画面为人物在桌旁活动的连续帧。3 路信号先分别经过语言编码器、声音编码器与画面编码器得到各自特征，再由时间历史编码器融合为多模态历史表示。这一表示同时分出两路，一路进入概率状态推断估计预测状态，另一路经历史编码得到事件上下文 \(E_{t}\)。原文没有披露采样率、帧率、时长或张量维度，因此这里只讲对象与变换关系，不补造具体形状与分辨率数字。

#### 五栏布局与箭头走向的读图顺序

在细讲概率与损失之前，先看框架总览图的五栏布局与箭头走向。阅读时从最左侧多模态历史栏的三行输入往右看，先看概率状态推断栏如何从编码器得到高斯参数与预测状态，再看预测充分构造栏如何用冻结未来编码器形成目标与预测的对照。接着看事件条件随机转移栏的混合分布与事件预测分支，最后看最右侧长程展开栏如何在不泄露未来的条件下自举推进。注意图中冻结锁形标记、虚线自举箭头与损失模块的位置，它们对应后文 5 个优化项的分工。

[![原论文 Figure 2：The framework learns predictive multimodal states through probabilistic belief state inference,…](https://arxiv.org/html/2611.25835v1/figures/PSM-WM-2.png)](https://arxiv.org/html/2611.25835v1/figures/PSM-WM-2.png)

*论文图 2：概率推断、预测充分构造、混合转移与长程展开构成的框架总览（原论文 Figure 2）。*

总览最左侧把历史 \(H_{t}\) 展开为语言、声音与画面三行，语言栏给出人物进入与拿起杯子等文本片段，声音栏给出绿色波形，画面栏给出人物在桌旁的图像帧，下方 3 个编码器与时间历史编码器汇成历史表示。中间第一栏用多模态编码器与时间历史编码器输出信念分布 \(q_{\phi}(S_{t} \mid H_{t})\) 的均值 \(\mu_{t}\) 与方差 \(\sigma_{t}^{2}\)，并以先验为基准形成约束，得到椭圆表示的预测状态 \(S_{t}\)。中间第二栏把未来片段经冻结未来编码器得到目标未来隐表示，再与预测头输出的预测未来隐表示对照形成预测充分损失。中间第三栏给出混合随机转移与事件预测分支，最右侧则让预测状态与预测事件交替推进并在每步与冻结编码器得到的真实未来隐表示逐跳对照。整图的箭头表明训练时可用历史得到事件与未来目标，推理时只能从预测状态自举事件，避免看到未来观测。

#### 高斯信念分布与历史可得的事件条件

概率推断要解决的是社会状态无法直接观测且证据常常不完整。论文把隐状态表示成高斯信念分布，均值代表对当前状态的估计，方差代表由观测缺失与歧义带来的不确定性，并用标准正态先验约束分布形状，防止不确定性任意膨胀。这一设计让模型在模态缺失时仍能给出带不确定性的状态，而不是输出一个过度自信的点估计，为后续的状态构造与转移提供起点。

\[L_{belief}=D_{KL}(q_{\phi}(S_{t}|H_{t})||p(S_{t})).\]

该目标采用 KL 散度的形式，是因为需要把估计的信念分布拉向先验以规范隐空间几何，而不是只约束单个向量长度。式中 \(q_{\phi}(S_{t} \mid H_{t})\) 是由历史编码得到的后验，\(p(S_{t})\) 为标准正态先验，下标 \(\phi\) 标明推断网络参数。当观测完整且一致时，网络可以输出较小方差并让均值偏离原点。当模态缺失或证据矛盾时，优化会让分布靠近先验以保留较大不确定性。若去掉这一项，状态方差可能塌缩或随意扩张，后续的预测与转移都会建立在不可靠的点上。算出的散度作为总体目标中的第一项参与加权求和，其梯度只更新推断与历史编码部分，不改变已被冻结的未来编码器。

事件上下文 \(E_{t}\) 只从时刻 t 可得的历史经编码得到，不接触未来观测。它在训练时为预测头与转移提供场景条件，在推理时则需要由预测状态经事件预测网络自举估计。这种历史可得与未来不可见的区分，保证了长程展开不会泄露未来信息，也让状态本身被要求保留预测事件条件所需的信息，为下一节的预测充分损失与混合转移做好输入准备。

### 冻结未来目标锚定内容与事件条件混合转移刻画演化

#### 冻结未来编码器提供的稳定目标

PSM-WM（arXiv 元数据标题作 PSM-WSM）的状态构造要回答保留什么信息，直接优化条件互信息并不可行，因为完整未来分布未知且维度很高。论文的做法是引入未来表征编码器，将未来轨迹映射为语义隐表示作为固定目标，再让当前预测状态与事件上下文经预测头去逼近这个目标。未来编码器在优化期间保持冻结并预先训练好，因此目标是稳定的参照，而不是随状态一起漂移的自适应表示。这种用固定未来语义做锚点的设计，把抽象的预测充分要求转化为可计算的距离最小化，同时避免状态与目标共谋塌缩。

\[\mathcal{L}_{PS}=d(g_{\theta}(S_{t},E_{t}),Z^{F}_{t+1:t+k}).\]

该损失采用预测隐表示与目标隐表示之间距离的形式，是因为距离越小意味着状态与事件一起保留的未来信息越多，符合预测充分的替代目标。式中 \(g_{\theta}(S_{t}, E_{t})\) 是从状态与事件预测未来的映射，\(Z_{t+1:t+k}^{F}\) 是冻结编码器从真实未来得到的固定语义目标，\(d(\cdot,\cdot)\) 为距离度量，下标 \(\theta\) 标明预测头参数。当状态丢失关键转折因素时，预测表示会偏离目标，距离增大并产生梯度。当状态已包含充分未来线索时，距离趋近于零，梯度自然减小。若未来编码器不冻结而联合更新，目标会随预测移动，距离缩小不再代表信息保留。算出的距离梯度主要更新预测头与底层的历史与状态编码，冻结分支不接收梯度，从而把未来语义压力传导到状态构造上。

#### 多峰未来的混合随机转移

只保留未来信息还不够，状态还要能随时间演化。社会交互常常存在多种合理走向，确定性转移会把不确定轨迹平均成模糊预测。论文把一步转移写成以状态与事件为条件的混合高斯分布，每个分量对应一种可能的演化模式，混合权重代表各模式的概率。为了支撑自主展开，还学习一个事件预测网络，从状态估计交互条件，训练时用历史编码得到的事件标签做监督，推理时则从预测状态自举未来事件，再交替采样下一步状态。这种设计让模型能同时维持多个未来假设，而不是塌缩到单一平均轨迹。

混合形式之所以必要，是因为单一高斯只能表达单峰不确定性，无法刻画分叉的多峰未来。转移分布 \(p_{\theta}(S_{t+1} \mid S_{t}, E_{t})\) 由混合权重 \(\pi_{m}(S_{t}, E_{t})\) 与各分量的高斯参数 \(\mu_{m}\) 和 \(\sigma_{m}^{2}\) 共同决定，求和项数 \(M\) 为模式个数。当交互走向明确时，某个权重趋近于一，转移接近单峰。当未来分叉时，多个权重同时显著，采样会得到多样轨迹。若退化为确定性映射，遇到歧义历史只能输出均值，长期展开会快速模糊。转移的对数似然与事件预测的对数似然共同构成动力学目标，前者约束状态如何变化，后者要求状态保留预测事件条件的信息，两者的梯度分别更新转移网络与事件预测网络，并回传到状态表示。

#### 五项加权与折扣展开的训练代价

为保证长程一致性，论文在单步转移之外增加递归展开约束。做法是从当前预测状态出发，用自举事件与混合转移逐跳采样得到未来状态序列，再经预测头映射为未来隐表示，并与冻结编码器从真实未来观测得到的隐表示逐跳对照，按折扣因子加权求和。折扣让近端未来权重更大，远端仍被约束但允许更大偏差。最终训练目标是信念正则、预测充分、转移、事件预测与展开一致五项的加权和，权重分别控制不确定性约束强度、未来信息保留强度、动力学拟合与长程稳定之间的权衡。原文给出了权重符号与折扣符号，但没有披露具体取值，因此复现时需要自行搜索。

\[L=L_{belief}+\lambda_{1}L_{PS}+\lambda_{2}L_{trans}+\lambda_{3}L_{event}+\lambda_{4}L_{roll}.\]

加权求和的形式是因为 5 个性质互补，任何一项都不能单独保证预测状态的全部要求。式中 \(L_{belief}\) 约束状态分布形状，\(L_{PS}\) 逼近预测充分，\(L_{trans}\) 学习一步演化，\(L_{event}\) 保留事件条件信息，\(L_{roll}\) 约束多步展开，\(\lambda_{1}\) 至 \(\lambda_{4}\) 为各项系数。当去掉预测充分项时，状态可能退回解释当前语义。当去掉展开项时，单步准确但多步漂移会加大。五项的梯度流向不同子网络，冻结的未来编码器始终不更新，这是计算代价的一部分。概率推断带来分布参数与采样开销，混合转移带来多分量参数与模式选择开销，递归展开带来随步数线性增长的对照开销，这些都是为未来建模能力付出的训练成本。

### Hi-EF、IEMOCAP 与 MELD 上的未来预测增益与状态充分性证据

评测围绕 4 个问题展开，核心是 PSM-WM（arXiv 元数据标题作 PSM-WSM）能否改善未来多模态演化建模，以及学到的状态是否具备预测状态性质。数据集包括 Hi-EF、IEMOCAP 与 MELD 3 个具有时间演化的社会交互基准，都提供对齐的语言、声音与画面信号，另外用 Ego4D 检验向人与环境长时交互的泛化，该库以画面与语言观测为主。未来预测性能在社会交互库上用加权 F1 分数衡量，数值越高代表未来建模能力越强，在 Ego4D 上用未来活动预测准确率衡量。状态质量用预测闭合差距、残留历史增益与未来隐检索衡量，前两者越低代表状态越接近充分，检索召回率与平均倒数排名越高代表与未来语义越对齐。所有方法使用相同多模态编码器，结果在多个随机种子上平均并报告均值与标准差，保证差异来自状态与动力学而非编码器容量。

#### 三个社会交互库上的加权 F1 对比

在相同编码器与相同评测划分下比较 3 类路线，有助于定位增益来源。3 类路线分别侧重当前语义解释、未来一致嵌入与隐转移建模，对应不同的状态假设。参与比较的包括多模态表征学习、预测性表征学习与隐动力学世界模型 3 组共十余种方法，指标方向都是加权 F1 分数越高越好。下表摘出每组代表性基线与最强世界模型基线，同本方法并列，给出在 3 个社会交互库上的具体得分。

| Method | Hi-EF | IEMOCAP | MELD |
| --- | --- | --- | --- |
| Multimodal Representation Learning |  |  |  |
| MISA [10] | 71.24 | 65.31 | 66.52 |
| EMOE [5] | 72.18 | 66.02 | 67.14 |
| TSD [17] | 72.83 | 66.71 | 68.21 |
| EMART [24] | 73.12 | 67.03 | 68.64 |
| HyperEF [22] | 73.84 | 67.45 | 68.92 |
| Predictive Representation Learning |  |  |  |
| CPC [20] | 72.96 | 67.18 | 67.86 |
| BYOL [7] | 73.21 | 67.42 | 68.14 |
| V-JEPA [2] | 74.10 | 67.85 | 68.95 |
| Predictive State and World Models |  |  |  |
| RSSM [8] | 74.62 | 67.83 | 69.39 |
| DreamerV3 [9] | 74.80 | 68.02 | 69.52 |
| LPWM [4] | 74.65 | 68.05 | 69.42 |
| HAUWM [27] | 74.75 | 68.10 | 69.55 |
| ModularAgent [31] | 74.91 | 68.15 | 69.62 |
| PSM-WM (Ours) | 75.76 | 68.61 | 69.97 |

并列得分显示本方法在 3 个库上都取得最高，Hi-EF 为 75.76，IEMOCAP 为 68.61，MELD 为 69.97，相对最强的世界模型基线 ModularAgent 分别高出 0.85、0.46 与 0.35 个百分点。与侧重当前语义的多模态表征相比，差距更大，说明只解释当前的表示对未来演化的帮助有限。与预测性表征相比，本方法进一步把未来相关保留写成状态构造准则，而不只是做未来一致的嵌入。与隐动力学基线相比，增益表明只学转移机制不够，状态里存了什么同样关键。需要看到的另一面是 MELD 上的领先幅度明显小于 Hi-EF，说明在对话结构更复杂的库上优势收窄，而且该表没有报告推理延迟与训练预算，无法从这里判断为增益付出的运行代价。

#### 闭合差距、残留增益与未来检索的探针评估

预测准确高不等于学到了可复用的预测状态，因为预测时可能仍在隐式依赖完整历史。论文因此用冻结表示与相同探针的受控评估隔离状态本身的质量，只比较状态里保留了多少未来信息。所有评估冻结表示并使用相同探针容量，保证差异来自状态本身而非预测器能力。下表完整呈现预测闭合差距、残留历史检验与未来隐检索 3 组状态中心指标，方向是前两组越低越好，检索越高越好。

|  | Predictive Closure Gap (↓) | Predictive Closure Gap (↓) | Predictive Closure Gap (↓) | Residual History Test (MELD) | Residual History Test (MELD) | Residual History Test (MELD) | Future Latent Retrieval (↑) | Future Latent Retrieval (↑) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Hi-EF | IEMOCAP | MELD | State Only | State+History | RHG (↓) | Recall@1 | MRR |
| MISA [10] | 8.72 | 1.84 | 5.46 | 65.12 | 67.47 | 2.35 | 32.80 | 0.440 |
| CPC [20] | 6.53 | 1.39 | - | - | - | - | 40.51 | 0.543 |
| BYOL [7] | 6.18 | 1.33 | 3.46 | 67.12 | 68.86 | 1.74 | 41.73 | 0.563 |
| RSSM [8] | 5.12 | 1.06 | 1.37 | 69.21 | 70.43 | 1.22 | 43.82 | 0.591 |
| LPWM [4] | 4.18 | 0.78 | 1.16 | 69.42 | 70.24 | 0.82 | 45.36 | 0.624 |
| HAUWM [27] | 4.02 | 0.64 | 1.03 | 69.55 | 70.31 | 0.76 | 45.72 | 0.636 |
| ModularAgent [31] | 3.86 | 0.57 | 0.96 | 69.62 | 70.28 | 0.66 | 46.15 | 0.632 |
| PSM-WM (Ours) | 2.30 | 0.41 | 0.61 | 69.97 | 70.58 | 0.61 | 47.81 | 0.656 |

完整矩阵显示本方法在 Hi-EF、IEMOCAP 与 MELD 上的预测闭合差距为 2.30、0.41 与 0.61，都是同列最低，说明仅用状态预测与用完整历史预测的性能差最小。在 MELD 的残留历史检验中，仅用状态已达 69.97，补加原始历史后为 70.58，增益为 0.61，同样为最低，意味着已知状态后历史能补的额外信息最少。未来隐检索的召回率与平均倒数排名为 47.81 与 0.656，都是最高，表明状态与未来语义的隐结构更对齐。横向看，当前表征的差距与残留增益明显更大，而世界模型基线介于中间，说明通用未来预测或压缩有帮助，但不如预测充分构造更接近充分。局限在于这些是探针设定下的经验证据，不是形式化保证，换探针容量或预测跨度结论可能变化。

#### 配对相似度拉开的轨迹分离间隔

要检验状态是否超越当前语义区分未来走向，可以看配对样本相似度分析的版式。阅读时先看左侧横轴为余弦相似度、纵轴为 4 种构造策略的点线图，蓝色点为不同未来相似度，红色点为相同未来相似度，线段长度代表轨迹分离间隔，再看右侧以分离间隔为横轴的汇总对比。注意本方法在保持相同未来高相似的同时把不同未来压得更低，这种一高一低的拉开方式是后文间隔数字的来源。

[![原论文 Figure 6：Representation similarity for matched sample pairs with identical current semantics.](https://arxiv.org/html/2611.25835v1/figures/4-10.png)](https://arxiv.org/html/2611.25835v1/figures/4-10.png)

*论文图 6：相同当前语义下相同未来与不同未来相似度及轨迹分离间隔对比（原论文 Figure 6）。*

左图每行用灰线连接同一方法的两种相似度。当前表征的相同未来相似度为 0.858，不同未来相似度为 0.824，间隔仅 0.034，说明只存当前语义时未来相同与不同几乎不可分。未来预测状态把间隔拉到 0.171，加入变分信息瓶颈后为 0.194，本方法达到 0.351，其中相同未来相似度为 0.862，不同未来相似度为 0.511。右图把间隔单列对比，同样呈现从 0.034 经 0.171 与 0.194 到 0.351 的递增。这一结果支持预测充分构造在保持匹配轨迹一致的同时更好地区分不同演化，但它只在当前标签相同而未来标签序列是否一致的配对构造下成立，换用其他配对或相似度度量结论需要重新检验。

### 部件消融、固定转移对照与缺失模态下的稳健性诊断

#### 去掉五项后的双库下降幅度

为分离状态构造与动力学各自的贡献，PSM-WM（arXiv 元数据标题作 PSM-WSM）在相同训练与评测流程下逐项去掉部件，并在社会交互库与自我中心视角泛化库上同时观察。指标仍是 MELD 加权 F1 分数与 Ego4D 未来活动准确率，方向都是越高越好。下表给出完整模型与 5 个变体的并列得分，去掉项分别切断未来信息保留、不确定性建模、场景条件、多假设分支与长程对齐，对应预测充分、信念状态、事件条件、随机转移与展开一致。

| Variant | MELD W-F1 | Ego4D Acc. |
| --- | --- | --- |
| PSM-WM | 69.97 | 48.5 |
| w/o Predictive Sufficiency | 68.76 | 46.9 |
| w/o Belief State | 69.12 | 47.4 |
| w/o Event Conditioning | 69.31 | 47.7 |
| w/o Stochastic Transition | 69.42 | 47.8 |
| w/o Rollout Consistency | 69.28 | 47.3 |

并列得分显示去掉任何一项都会在两个库上同时下降，说明状态构造与动力学缺一不可。完整模型为 69.97 与 48.5，去掉预测充分后降到 68.76 与 46.9，降幅最大，表明面向未来的状态构造是首要来源。去掉信念状态后为 69.12 与 47.4，说明在证据不完整时概率建模确有帮助。去掉事件条件、随机转移与展开一致后分别降到 69.31、69.42 与 69.28，以及 Ego4D 上的 47.7、47.8 与 47.3，表明场景条件、多假设与长程约束各自贡献中等幅度。反例是随机转移的单项降幅在 MELD 上最小，容易让人低估其作用，但在需要多样假设的长程展开与校准评估中它的价值才会显现，不能只看单步分数。

#### 固定转移换状态与缺失模态下的衰减

为区分是状态本身更好还是转移更强，需要看固定转移下换状态与固定状态下换转移的两组对照，以及随预测步长增加的衰减曲线。左组固定转移只换状态，中组固定状态只换转移，右组递归展开考验长期稳定性。阅读时先看左组柱状图中 4 种状态在 3 个库上的高低，再看中组点线图中从确定性转移到事件条件随机转移的递进，最后看右组折线图中各方法随步长从 1 到 3 的下滑速度。

[![原论文 Figure 3：Predictive state evolution analysis.](https://arxiv.org/html/2611.25835v1/figures/PSE-Analysis.png)](https://arxiv.org/html/2611.25835v1/figures/PSE-Analysis.png)

*论文图 3：固定转移换状态、固定状态换转移与随步长增加的稳定性分析（原论文 Figure 3）。*

左组在固定转移下比较通用编码器状态、循环状态空间模型隐状态、历史预测状态与本方法预测状态，本方法在 3 个库上都最高，说明未来相关保留为演化提供了更好的起点。中组在相同预测状态下比较转移设计，确定性转移为 69.21，加入事件条件后为 69.61，再引入随机性后为 69.74，完整模型为 69.97，呈现逐步提升，说明场景条件与多假设各有增益。右组把预测步长从 1 拉到 3，本方法从 69.97 经 68.42 降到 66.31，下滑速度慢于 RSSM 与 DreamerV3 等基线，表明预测状态提供了更稳定的长期展开空间。代价是混合转移与递归展开增加了参数与计算，步长越长开销越大，这部分在原文没有量化。

在不完整观测下，所有方法都随缺失比例上升而下降，本方法下降更慢，概率信念推断被认为是保留未来相关信息的关键。在区分去掉语言、声音与画面 3 种缺失模式时，本方法在各种模式下都保持领先，说明没有过度依赖单一模态。不确定性校准用负对数似然、期望校准误差与连续分级概率评分衡量，数值越低代表可靠性越好，本方法优于确定性表示与随机动力学基线。但这些结论只在 MELD 缺失构造与所用校准探针下成立，缺失比例的划分方式与真实采集中的系统性缺失仍有差距，分布偏移下的校准也没有验证。

受控状态构造比较进一步把编码器、隐维度、转移、事件表示、未来目标与优化预算全部固定，只换状态构造方式。当前表征只为当前语义优化，未来预测状态增加未来意识但没有显式信息约束，未来预测加变分信息瓶颈引入通用压缩，本方法则用预测充分准则约束保留内容。结果是未来预测优于当前表征，通用压缩有额外好处，但本方法取得最低的预测闭合差距与残留历史增益，说明针对未来演化的构造比通用未来预测或压缩更有效。这一结论只在相同架构与预算的受控设定下成立，换编码器容量结论需要重测。

### 事件自举与冻结目标依赖下的适用边界与复现清单

把 PSM-WM（arXiv 元数据标题作 PSM-WSM）结论放回适用条件看会更稳妥。事件上下文只从历史编码得到，未来事件靠状态自举，这种无未来泄露的设定是长程展开成立的前提，一旦评测允许看到未来片段，优势可能变化。未来目标的质量完全依赖预训练并冻结的未来编码器，若该编码器本身对未来语义表达不足，预测充分损失的锚点就会偏移。混合模式数、4 个加权系数、事件权重与折扣因子的具体取值在正文没有披露，复现需要自行搜索。训练与评测使用 Hi-EF、IEMOCAP、MELD 与 Ego4D，所有方法共用相同编码器并在多个随机种子上平均，原文未披露采样率、帧率、码率、GPU 型号、训练步数、优化器与学习率等细节，附录仅对相关方法差异做更全面讨论。评测集中在 3 个社会交互库与一个第一人称库，任务是未来交互与活动预测，没有涉及动作条件预测、更长跨度与真实交互部署，延迟与算力成本也没有报告，因此不能把这里的增益直接推广到实时系统。

什么时候值得尝试，可以按顺序判断。若任务需要从不完整多模态历史中估计未来走向，且当前语义相同的样本确实存在分叉，预测充分构造的优先级高于单纯加大转移网络。若模态经常缺失，概率信念表示值得保留。复现第一步是先统一多模态编码器与划分，再实现高斯信念推断与标准正态约束，固定预训练好的未来编码器并实现预测头距离、混合转移、事件预测与折扣展开五项加权目标，保证推理时只用历史与自举事件。还需要补的验证包括更长步数下的稳定性、分布偏移与系统性缺失下的校准，以及训练与推理开销的实测。原文未披露公开代码、模型权重、数据集或演示页链接，不能默认这些资源已公开，代码、权重与可运行系统需要分别确认。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25835v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
