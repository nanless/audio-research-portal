---
title: "OmniMeld: Enhancing Audio-Visual Understanding via Multi-Teacher On-Policy Distillation"
date: 2026-11-27
draft: false
tags: [音视频理解, 知识蒸馏, 数据集]
categories: [论文速递]
description: "OmniMeld 针对音频视觉问答中定位时序推理与整体理解难以统一的问题，用四领域教师路由与四条件模态响应构造的最优传输匹配把专长蒸馏到统一的 3B 学生，该学生在四个音频视觉基准上全面超越 3B 基座并在前三项超越 7B 基座，代价是额外视图打分只用于训练且长视频增益有限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33861"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "四领域教师与模态响应引导的最优传输蒸馏"
paper_digest_original_title: "OmniMeld: Enhancing Audio-Visual Understanding via Multi-Teacher On-Policy Distillation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33861v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33861v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33861v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "OmniMeld 针对音频视觉问答中定位时序推理与整体理解难以统一的问题，用四领域教师路由与四条件模态响应构造的最优传输匹配把专长蒸馏到统一的 3B 学生，该学生在四个音频视觉基准上全面超越 3B 基座并在前三项超越 7B 基座，代价是额外视图打分只用于训练且长视频增益有限。"
paper_digest_reader_sections: [{"heading":"音频视觉问答为何需要四种互补能力与可验证证据","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"OmniMeld 如何用领域路由与四条件响应匹配蒸馏统一学生","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"模态响应向量与最优传输如何改变候选词之间的搬运代价","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"OmniMeld-20K 两阶段管线与冻结边界下的训练配置","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"领域教师与 3B 学生在音频视觉与通用视频基准上的表现","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"预热与多教师蒸馏及最优传输各自带来多少增益","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单教师路由与四视图建模的边界与复现前提","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Peking University"],"name":"Daili Hua"},{"affiliations":["Shanghai Jiao Tong University","Zhongguancun Academy"],"name":"Yifan Dai"},{"affiliations":["Peking University"],"name":"Bohan Zeng"},{"affiliations":["Peking University"],"name":"Yuran Wang"},{"affiliations":["Peking University"],"name":"Zihao Wu"},{"affiliations":["Peking University"],"name":"Chengzhuo Tong"},{"affiliations":["Kuaishou Technology"],"name":"Guoqing Jiang"},{"affiliations":["Kuaishou Technology"],"name":"Liwei Chen"},{"affiliations":["Kuaishou Technology"],"name":"Zhiheng Qin"},{"affiliations":["Kuaishou Technology"],"name":"Xuanping Li"},{"affiliations":["Peking University","Zhongguancun Academy","Beijing Key Laboratory of Data Intelligence and Security (Peking University)"],"name":"Wentao Zhang"}]
paper_digest_abstract_sha256: "d5212fa6a84357cc2a635752c5072d880a83b0d0961ce7aeaacc4df84afb90f1"
paper_digest_sidecars: {"citation.bib":{"sha256":"2057ae2e74d219b602d990afb6422749d76134fdde7e6c3e56215ce91cb2e83c","url":"/audio-research-portal/client/papers/2026-11-27/2611-33861/citation.bib"},"citation.json":{"sha256":"0beae9fdd2405c450889d44778e2ae47173ed17f1b03fd125499611583433918","url":"/audio-research-portal/client/papers/2026-11-27/2611-33861/citation.json"},"citation.ris":{"sha256":"9201ef6b27b335eb4e12b76c8238bd24db1c372ab53afcabb1e0eb8e79eeaf2d","url":"/audio-research-portal/client/papers/2026-11-27/2611-33861/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"829f68d075faee6996eaed0f6d4fd6f7d5b6af46bf9d56b26528a55477053111","url":"/audio-research-portal/client/papers/2026-11-27/2611-33861/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "dbca7874e3b3e3b2b6c3a63c7c771df022091e816f2a3484faee091c660c5a99"
paper_digest_api_reader_plan_sha256: "236cecd421246859cb5d6aaef535a52730aab22f4e1184fefa6131d855157ad1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c746f58192ce4db655c7a4733198408a97850bea5795f49b11cff51c16890ff4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "cca1b6db0763a5397fecaa8fff4ed45b46fbaeec84b4ce81cc9e52bb7480c9b2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f9d6469d1f2bc65b14a2a8370aa83d31d91caf7e24588b4fdf3479235a7674cc"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "63ec1e7186ac4510c8db99895c669a3a24959e06d8ef02417b84a58f00ba22f5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 四领域教师与模态响应引导的最优传输蒸馏

> 英文题目：*[OmniMeld: Enhancing Audio-Visual Understanding via Multi-Teacher On-Policy Distillation](https://arxiv.org/abs/2611.33861v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.6/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Daili Hua：Peking University
- Yifan Dai：Shanghai Jiao Tong University；Zhongguancun Academy
- Bohan Zeng：Peking University
- Yuran Wang：Peking University
- Zihao Wu：Peking University
- Chengzhuo Tong：Peking University
- Guoqing Jiang：Kuaishou Technology
- Liwei Chen：Kuaishou Technology
- Zhiheng Qin：Kuaishou Technology
- Xuanping Li：Kuaishou Technology
- Wentao Zhang：Peking University；Zhongguancun Academy；Beijing Key Laboratory of Data Intelligence and Security (Peking University)

## 📌 核心摘要

**问题与瓶颈：** 音视频问答的输入为文本问题、音频流与视频帧序列，输出为自然语言答案，涉及感知接地与对应、时序事件结构与因果推理等多类能力。现有全模态大语言模型已具备联合处理多模态场景的基础，但不同问题对细粒度定位、事件排序与整体语义的要求差异明显，单一模型难以同时兼顾。知识蒸馏可把多领域专长整合到统一学生模型，已有在策略蒸馏沿学生生成轨迹提供教师反馈，但直接概率匹配只比较完整输入下的分布，未显式刻画候选词元对音频、视觉及其交互的响应差异。仅依据音频缺失或视觉变化调整监督权重的做法，也未联合比较同一候选集在多条件下的变化，因而难以把互补的领域知识稳定迁移。

**核心思路与方法架构：** 与最接近的多教师在策略蒸馏相比，OmniMeld 保留按领域标签路由到冻结教师的机制，新增由模态响应引导的最优传输分布匹配。单条样本以问题、音频与视频三元组输入，学生在完整音视频条件下自回归生成答案前缀，每一步取教师在完整输入下概率最高的 64 个词元作为共享候选集。教师对同一前缀在完整音视频、保留音频但视频置黑、保留视频但关闭音频、无媒体四种视图下分别打分，固定文本上下文计算音频响应、视觉响应与交互响应构成的三维响应向量。候选词元间响应差异经归一化与防止不同词元自由传输的指示项形成传输代价，学生与教师在完整输入下的分布以熵正则最优传输对齐，仅更新学生完整输入路径。教师与学生分别从 Qwen2.5-Omni-7B 与 Qwen2.5-Omni-3B 初始化，音频与视觉编码器冻结，只优化大语言模型主干与多模态对齐器，推理时学生直接从完整输入生成，无需多视图。

**关键实验与核心代价：** 在 DailyOmni、OmniVideoBench、WorldSense 与 LVOmniBench 四个音视频基准上，领域教师均高于本地复测的 Qwen2.5-Omni-7B 基线，最优教师分别高出 9.7、8.7、4.1 和 3.3 个百分点，其中时序教师在 DailyOmni 达到 71.0 分，较基线 61.3 分提高 9.7 个百分点，推理与整体教师在 OmniVideoBench 达到 39.1 分，较基线 30.4 分提高 8.7 个百分点。3B 学生相对 Qwen2.5-Omni-3B 基线在四个基准分别提高 6.1、2.9、2.4 和 0.8 个百分点，对应 66.2 对 60.1、34.7 对 31.8、43.7 对 41.3、33.1 对 32.3，并在前三个基准超过 7B 基线。消融显示 SFT 热身后普通多教师蒸馏在 DailyOmni 从 63.1 提高到 65.7，而引入最优传输后进一步在三个基准提高 0.5、1.1 和 0.2 个百分点，在 LVOmniBench 持平。代价方面，仅 20% 蒸馏样本使用最优传输，其余保留逆向 KL，以控制四视图教师打分与 Sinkhorn 迭代的额外开销，论文未提供可核对的延迟或吞吐实测。

**适用边界与深读导览：** 结论成立依赖领域标签路由正确、四视图能分离模态贡献且候选集固定可比，对多能力交织需多教师协同的问题仅用单教师监督，视图构造与响应建模的替代方案也未系统探索。OmniMeld-20K 共 19598 个样本，来自五个已有视频问答资源的重新生成与核验，覆盖日常、长视频与协同推理场景，但源比例高度不均且未覆盖纯音频或强噪声部署条件。欲深究传输代价与去偏最优传输的公式含义可查阅方法章节的模态响应与分布匹配部分，欲核对教师互补性与蒸馏增益的完整对照可查阅实验章节的主结果与消融表。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频视觉问答为何需要四种互补能力与可验证证据

理解动态真实场景需要同时调用文字、声音与画面 3 类线索。一道题目可能追问画面中物体的属性与声音来源是否对应，另一道则追问事件先后顺序与状态变化，还有题目要求从可观察事实推断意图与因果或在整段视频语境中把握主题与总结。若把感知定位、时序建模、因果推理与整体语境混为单一能力训练模型容易偏向高频模式而在需要跨模态绑定或长程推理的题目上失准。

已有全模态大语言模型为联合理解提供了起点相关工作分别强化了查询定位与模态融合、主动取证、潜状态交错推理或模态内自蒸馏。另一条路线用教师监督学生轨迹做在策略蒸馏并以反向 KL 或不同散度匹配分布多教师版本进一步按领域路由整合专长。近期方法还利用视觉条件变化调整权重或重构目标在音频视觉场景中也有工作用音频缺失与干扰分配监督。但这些做法没有在固定文本与候选集合下并排比较同一教师在完整输入、保留音频、保留视觉与无媒体 4 种条件下的预测变化因而难以刻画候选词对音频、视觉及其交互的依赖差异。

OmniMeld 把输入形式化为问题、音频与视频三元组 x = (q, a, v) 学生在完整输入基础上生成答案 y = (y1, …, yL) 每一步的下一个词分布接受来自按领域标签指派的冻结教师的监督。训练与评测围绕 4 类能力组织分别对应定位与对应、时序与事件结构、因果与推理、语境与整体理解。数据侧强调把模态标注证据、推理与最终答案分离使答案可追溯到具体观察。评测采用 DailyOmni、OmniVideoBench、WorldSense 与 LVOmniBench 4 个音频视觉基准外加 Video-MME 通用视频基准均以准确率为指标不涉及人工听感打分。

### OmniMeld 如何用领域路由与四条件响应匹配蒸馏统一学生

#### 数据教师与分布匹配的 3 段主线

先按从左到右的箭头阅读总览左侧是多源数据整理为 OmniMeld-20K 中部是 4 个领域教师右侧是在策略蒸馏中用 4 条件预测变化构造搬运代价并匹配学生与教师分布。左侧虚线框展示多源音频视觉缩略图与波形汇入数据库与齿轮图标中间箭头指向 4 个彩色教师模块右侧绿色大框内可见被指派教师、学生前缀、4 个胶片视图、教师分布与响应代价矩阵最终汇入分布匹配与回传更新。

[![原论文 Figure 1：Overview of OmniMeld. Multi-source audio-visual data are curated into OmniMeld-20K to train four…](https://arxiv.org/html/2611.33861v1/figure1.png)](https://arxiv.org/html/2611.33861v1/figure1.png)

*论文图 1：左部数据整理中部四领域教师与右部四条件分布匹配的总体流程（原论文 Figure 1）。*

像素右侧顶部并排 4 个胶片条分别对应完整输入、黑色视频帧的音频保留、静音的视觉保留与两者皆无的空视图图标上打叉表示被屏蔽的模态。中部教师分布柱状图以完整输入为目标右侧紫色方格为响应代价矩阵下方学生分布与匹配模块通过环形箭头回传更新标注为采样数据的更新路径。额外视图仅用于教师打分推理时学生直接从完整输入生成无需构造缺失条件这种训练与推理的不对称是理解开销的关键。

#### 反向 KL 作为分布匹配的起点

每个样本按领域标签路由到唯一冻结教师学生在完整音频视觉输入与已生成前缀 y_<t 条件下逐词生成教师在相同前缀下给出下一个词监督。为控制计算只取教师在完整输入下概率最高的 K 个候选组成共享集合 Ct 并在温度 τ 下归一化学生对数几率与教师对数概率梯度只更新学生。这种在策略设置使监督始终围绕学生实际生成的轨迹而非离线参考答案从而支持跨域能力的迁移。

\[\mathcal{L}_{\mathrm{GKD}}^{t}=D_{\mathrm{KL}}(p^{S}_{t}\|p^{T}_{t})=\sum_{j=1}^{K}p^{S}_{t,j}\log\frac{p^{S}_{t,j}}{p^{T}_{t,j}}.\]

该式以反向 KL 为基础目标比较学生分布 pS_t 与教师分布 pT_t 在同一位置 t 的差异。pS_t,j 与 pT_t,j 分别表示第 j 个候选的归一化概率 K 为候选规模求和遍历全部候选 τ 控制分布锐利程度。分子分母均在共享候选集合上归一保证两分布支撑一致为后续引入模态响应代价提供可直接对比的基准。

反向 KL 让学生在教师概率高的区域集中质量呈现找模式倾向而非覆盖全部尾部。当两分布完全一致时对数比为零损失为零。当学生把质量放在教师概率极低的候选上时惩罚迅速增大。该损失的梯度只流向共享学生模型使 4 个领域教师的知识在同一套参数中累积为后续最优传输替换提供可直接对比的起点。

### 模态响应向量与最优传输如何改变候选词之间的搬运代价

#### 四领域分工与跨领域泛化的例证

先看 4 个竖列的标题与示例视频再对比每列下方 4 个教师与学生 S 的作答标记。左侧定位列追问车辆下坡时的声音中间两列分别追问事件顺序与嗓音变化原因右侧整体列追问领导者与年轻一代关系。注意勾叉分布如何随题目领域变化以及学生在四列中是否保持正确从而体会领域专长互补与统一学生的跨域意图。

[![原论文 Figure 2：Examples of the four domain-specialized teachers and the distilled student.](https://arxiv.org/html/2611.33861v1/figure3.png)](https://arxiv.org/html/2611.33861v1/figure3.png)

*论文图 2：四领域示例问答与各教师及统一学生的作答对比（原论文 Figure 2）。*

像素显示左侧定位题只有定位教师 T-G 与学生答对喇叭声其余教师误答为撞击声。中部时序与因果题中多数教师在非专长上失准学生仍给出正确序列与增重解释。右侧语境题中整体教师 T-H 与学生共同答对领导者依靠年轻一代。这种交叉对比直观呈现了领域专长互补以及统一学生跨域作答的意图为按领域路由提供了动机。

定位与对应教师负责细粒度实体识别、空间定位与声源绑定。时序教师负责事件排序、前后关系、状态变化与定位。因果教师负责解释、意图推断、未来预测与假设分析要求结论有证据支撑。整体教师负责主题识别、内容总结与语境解释。四者均从 Qwen2.5-Omni-7B 微调得到蒸馏时按样本领域标签冻结指派学生为共享的 Qwen2.5-Omni-3B 模型。

#### 4 条件预测变化与响应向量的构造

为显式刻画候选对模态的依赖对预选的 20% 蒸馏样本构造 4 个视图。完整视图 AV 保留原音频与视频音频视图 A 以黑色视频帧屏蔽画面视觉视图 V 关闭音频空视图则两者皆无。四视图共享同一问题与学生已生成前缀候选集合固定为教师在 AV 下的前 K 个教师对同一候选在四视图下的打分可直接对比从而分离文本先验与模态增益。

\[r_{j}=\begin{bmatrix}\ell_{j}^{A}-\ell_{j}^{\varnothing}\\ \ell_{j}^{V}-\ell_{j}^{\varnothing}\\ \ell_{j}^{AV}-\ell_{j}^{A}-\ell_{j}^{V}+\ell_{j}^{\varnothing}\end{bmatrix}.\]

该式为每个候选 wj 构造三维响应向量 rj。分量分别为音频响应、视觉响应与交互响应均在温度为 1 的对数概率下计算。ℓjA、ℓjV、ℓjAV 与 ℓj 空分别表示四视图打分下标 j 遍历共享候选文本上下文保持不变。这种构造把绝对概率转为条件间差异使不同候选的模态依赖可比。

音频分量用保留音频减去无媒体剥离纯文本先验后剩下的增益可归因于声音。视觉分量同理。交互项用完整输入减去单模态之和再加回空视图捕捉非加性的协同或冲突。若候选与媒体无关四视图打分相近向量接近零。若候选高度依赖某模态对应分量绝对值增大。该向量不直接作为目标而是决定候选之间搬运难易的几何依据。

\[\begin{aligned} \displaystyle D_{jh} \displaystyle=\|r_{j}-r_{h}\|_{2}^{2}, \\ \displaystyle s \displaystyle=\max\left(1,\frac{1}{K(K-1)}\sum_{u\neq v}D_{uv}\right), \\ \displaystyle C_{jh} \displaystyle=\mathbf{1}[j\neq h]+\frac{D_{jh}}{s}. \end{aligned}\]

该组式子把响应差异转为搬运代价。Djh 为两候选响应向量的平方欧氏距离 s 为全部无序对平均距离与 1 取最大得到的归一尺度 Cjh 为最终代价矩阵元素 j、h、u、v 均为候选索引示性函数在 j 不等于 h 时取 1。这种设计保证代价非负且对角为零符合传输问题的基本要求。

响应越接近的候选对搬运越便宜差异越大代价越高。示性项保证不同词之间至少支付单位成本避免把不同词视为可免费互换。下界 1 防止当全部差异极小时除以过小均值而放大噪声。该矩阵在位置 t 记为 Ct 后续作为最优传输的地面代价引导学生在保持完整输入教师分布为目标的前提下按模态语义相近程度分配概率质量。

#### 熵正则最优传输与去偏损失的含义

有了代价矩阵后需要在候选集合上定义分布之间的传输损失。直接比较概率忽略了词之间的模态相似性最优传输则允许按代价把质量从学生分布搬运到教师分布熵正则使问题可用 Sinkhorn 迭代高效求解。去偏设计进一步消除正则带来的自身偏置使损失在分布一致时严格为零。

\[\begin{aligned} \displaystyle\mathcal{L}_{\mathrm{OT}}^{t}={} \displaystyle F_{\varepsilon}(p^{S}_{t},p^{T}_{t};C_{t}) \\ \displaystyle-\frac{1}{2}F_{\varepsilon}(p^{S}_{t},p^{S}_{t};C_{t}) \\ \displaystyle-\frac{1}{2}F_{\varepsilon}(p^{T}_{t},p^{T}_{t};C_{t}). \end{aligned}\]

该式为去偏的最优传输损失。Fε 表示熵正则强度为 ε 的最优传输值 Γ 为满足边缘为 pSt 与 pTt 的非负传输矩阵 Ct 为同一位置的教师响应代价。三项分别度量跨分布传输与 2 次自传输系数 1/2 用于消除熵带来的自身偏置 ε 在原文配置中取 0.1。

当学生与教师分布完全相同时三项相互抵消损失为零避免正则项导致的虚假惩罚。当学生把质量放在响应迥异的候选上时即使概率数值接近跨项也会因高代价而增大。训练时教师打分与代价视为常数梯度只更新完整输入下的学生推理时学生直接从完整输入生成无需额外视图从而把 4 条件比较的开销限制在训练阶段。

### OmniMeld-20K 两阶段管线与冻结边界下的训练配置

#### 结构化生成审查与媒体验证的管线

阅读左侧两阶段流程时先沿生成器到文本复核再到媒体仲裁的分支看第一阶段再沿复核模型到验证与受限修正看第二阶段最后落到抽样人工检查与 OmniMeld-20K。右侧修正案例展示了证据推理答案 3 段如何从错误答案改到正确结论可对照左侧模块理解支撑关系以及模态标注如何使错误可定位。

[![原论文 Figure 3：Data curation pipeline for OmniMeld-20K, combining structured generation, consistency review,…](https://arxiv.org/html/2611.33861v1/figure2.png)](https://arxiv.org/html/2611.33861v1/figure2.png)

*论文图 3：两阶段数据整理管线与汽车广告修正案例的流程细节（原论文 Figure 3）。*

像素左侧显示第一阶段由全模态模型生成证据推理答案 3 段证据按视觉、音频与跨模态标注独立文本模型做一致性与参考答案比对分歧大的样本交由带媒体模型仲裁失败样本再生或丢弃。第二阶段由同一模型以审查身份逐条判定支持、矛盾或不确定只修正小事实错误不新增主张。右侧汽车广告案例把吉他节奏的证据链从唤起童年游戏记忆修正为彰显豪华定位体现了媒体证据落地的验证作用。

再看数据来源饼图与视频时长柱状图的像素左侧饼图按颜色区分 5 个来源右侧柱状图横轴为时长区间纵轴为占比。重点比较 1 分钟到 3 分钟柱是否显著高于其他区间以及浅紫小扇区是否占比最小从而把握训练数据的时长偏态与来源偏态为理解教师子集的均衡程度做准备。

[![原论文 Figure 4：OmniMeld-20K composition across five source datasets on the left and video duration distribution…](https://arxiv.org/html/2611.33861v1/CVPR_data_main.svg)](https://arxiv.org/html/2611.33861v1/CVPR_data_main.svg)

*论文图 4：五来源饼图与时长柱状图饼图图例将 MiraData 与 VideoVista 重复标为 19.63% 合计 107.19% 存在印刷瑕疵（原论文 Figure 4）。*

像素显示时长分布高度集中 1 分钟到 3 分钟区间占 53.5% 其余区间分别为 13.3%、13.1%、14.2% 与 5.9% 长视频占比较低。来源饼图图例将 MiraData 与 VideoVista 均标为 19.63% 连同 OmniVideo 的 38.11%、LongVALE 的 27.52% 与 LLaVA-Video 的 2.30% 合计为 107.19% 超过 100% 且两扇区面积明显不等存在印刷重复标注瑕疵阅读时不应直接相加引用。这种瑕疵不改变时长偏态的基本判断但具体占比需结合附录数量核对。

#### 数据构成冻结参数与采样超参数

按附录统计 19,598 条样本按能力切分为 4 个教师子集。定位与时序教师的前 4 个来源各占约 21% 到 27% 相对均衡。整体教师 98.68% 来自 OmniVideo、MiraData 与 LongVALE 推理教师 95.37% 来自 OmniVideo 与 LongVALE。格式上兼有多选与开放问答 VideoVista 全部为多选 LLaVA-Video 多选仅占 27.3% 长视频开放问答比例更高这种偏态影响各教师见到的问题类型。

学生训练先用 2K 样本做有监督预热再用 3,840 个样本做在策略蒸馏其中预选 20% 使用最优传输其余保留反向 KL。候选规模 K 取 64 分布温度 τ 取 0.9 熵正则 ε 取 0.1。视频按 2 fps 均匀采样每样本至多 144 帧。学生采样温度取 0.9 top-p 取 0.9 最大生成 1,024 个词元额外视图仅用于教师打分推理无需构造。

教师各自在 4 张 NVIDIA RTX PRO 5000 上微调学生预热用 8 张蒸馏用 12 张其中 4 张承载 4 个领域教师每教师 1 张 8 张训练学生。主干峰值学习率分别为 1×10-5、1×10-5 与 3×10-6 对齐器分别为 2×10-6、1×10-5 与 1×10-6 全局批量分别为 32、20 与 128 预热比 0.05 后余弦衰减。

\[\begin{aligned} \displaystyle\mathcal{L}=\frac{1}{|\mathcal{B}|}\sum_{i\in\mathcal{B}}\frac{1}{L_{i}}\sum_{t=1}^{L_{i}}\Big[ \displaystyle(1-m_{i})\mathcal{L}_{\mathrm{GKD}}^{i,t} \\ \displaystyle+m_{i}\mathcal{L}_{\mathrm{OT}}^{i,t}\Big]. \end{aligned}\]

该式为批次总体损失。B 为训练批次 Li 为样本 i 的有效答案词元数 mi 为预定义的 0 或 1 选择指示。mi 为 1 的样本在全部有效位置使用最优传输损失否则使用反向 KL 损失内外两层平均分别按词元数与批次大小归一不再附加缩放。这种样本级二选一保证同一答案序列内目标一致。

该加权在样本级二选一保证同一答案序列内目标一致。当 mi 全为 0 时退化为普通多教师在策略蒸馏当全为 1 时全部使用模态响应代价。教师打分与代价矩阵视为常数梯度只更新完整输入下的学生主干与多模态对齐器音频与视觉编码器保持冻结。推理时无需额外视图直接从完整输入生成答案。

### 领域教师与 3B 学生在音频视觉与通用视频基准上的表现

#### 四基准总体对比与小参数超越大基座

阅读主结果表时先看表头 4 个基准列再按 30B 开源组、7B 开源组与 3B 组分块比较。重点比较教师与本地评测的 Qwen2.5-Omni-7B 基座以及 OmniMeld 学生与 Qwen2.5-Omni-3B 基座闭源行仅作背景参考不参与同组最优比较星号与缺失符号需单独留意。

| Model | Size | DailyOmni | OmniVideoBench | WorldSense | LVOmniBench |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | 7B | 61.3 | 30.4 | 42.4 | 33.4 |
| T-Grounding | 7B | 68.9 | 35.8 | 44.1 | 34.5 |
| T-Temporal | 7B | 71.0 | 39.0 | 45.8 | 35.8 |
| T-Inferential | 7B | 67.1 | 39.1 | 46.5 | 36.5 |
| T-Holistic | 7B | 68.5 | 39.1 | 46.5 | 36.7 |
| Qwen2.5-Omni | 3B | 60.1 | 31.8 | 41.3 | 32.3 |
| OmniMeld(ours) | 3B | 66.2 | 34.7 | 43.7 | 33.1 |

表内 7B 组中 4 个教师在 4 个基准上均高于本地评测的 7B 基座。时序教师在 DailyOmni 达到 71.0 比基座高 9.7 个百分点。推理与整体教师在 OmniVideoBench 同为 39.1 比基座高 8.7 个百分点。两者在 WorldSense 同为 46.5 比基座高 4.1 个百分点。整体教师在 LVOmniBench 为 36.7 比基座高 3.3 个百分点。教师在同尺寸开源模型中具竞争力但仍低于 30B 组的 OmniVideo-R1 与 OmniSeek 等更大模型闭源模型的 80 以上分数仅作背景不构成同组比较。

3B 学生在 4 个基准上分别为 66.2、34.7、43.7 与 33.1 比 3B 基座高 6.1、2.9、2.4 与 0.8 个百分点增幅以 DailyOmni 最大而 LVOmniBench 最小。在前 3 个基准上该 3B 学生还超过了 7B 基座的 61.3、30.4 与 42.4 呈现小参数超越大基座的现象。全部指标均为准确率无人工听测与神经代理分数之分也未报告方差或置信区间。LatentOmni 在 WorldSense 标注星号的 48.9 来自原文报告其基座在复测中为 42.4 跨表对比时需注意口径差异。

#### 音频类型时长细分与通用视频延伸

再看 OmniVideoBench 按音频类型与视频时长的拆分表头区分音乐、声音、语音 3 类音频与 4 个时长区间。比较时仍聚焦教师与同尺寸模型、学生与 3B 基座避免把闭源的 Gemini-2.5-Pro 当作同组最优缺失符号表示该区间无报告不应补零比较。

| Method | Audio Type Music | Audio Type Sound | Audio Type Speech | Video Duration (0,1] min | Video Duration (1,5] min | Video Duration (5,10] min | Video Duration (10,30] min | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni-7B | 25.3 | 23.8 | 32.3 | 42.7 | 30.0 | 27.8 | 25.3 | 30.4 |
| T-Grounding | 27.8 | 30.2 | 37.9 | 42.9 | 36.0 | 35.0 | 32.0 | 35.8 |
| T-Temporal | 34.4 | 31.8 | 40.9 | 48.0 | 39.5 | 37.6 | 33.6 | 39.0 |
| T-Inferential | 31.9 | 35.6 | 40.7 | 46.8 | 39.1 | 38.5 | 35.0 | 39.1 |
| T-Holistic | 32.6 | 34.0 | 40.9 | 45.2 | 37.3 | 38.9 | 37.7 | 39.1 |
| Qwen2.5-Omni-3B | 26.7 | 32.2 | 32.4 | 40.0 | 31.4 | 29.5 | 29.2 | 31.8 |
| OmniMeld(ours) | 28.6 | 30.8 | 36.2 | 40.9 | 34.5 | 33.9 | 31.9 | 34.7 |

时序教师在音乐类为 34.4 推理教师在声音类为 35.6 时序与整体教师在语音类同为 40.9。时长上时序教师在 1 分钟内与 1 分钟到 5 分钟区间表现较强整体教师在 5 分钟到 10 分钟为 38.9 在 10 分钟到 30 分钟为 37.7。3B 学生比 3B 基座在音乐高 1.9 个百分点在语音高 3.8 个百分点 4 个时长区间均有提升其中 5 分钟到 10 分钟提升 4.4 个百分点表明增益覆盖不同长度。

最后看通用视频基准 Video-MME 在无字幕音频视觉输入下的结果表头区分短中长 3 段与总体。重点比较教师与 7B 基座以及学生与 3B 基座 OmniReasoner 与 OmniAgent 的缺失项较多仅作有限参考不宜据此断言全面超越。

| Method | Short | Medium | Long | Overall |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni-7B | 76.7 | 66.8 | 54.7 | 66.0 |
| T-Grounding | 76.9 | 66.7 | 55.9 | 66.5 |
| T-Temporal | 79.2 | 69.0 | 56.2 | 68.1 |
| T-Inferential | 77.7 | 69.1 | 57.8 | 68.2 |
| T-Holistic | 78.4 | 68.8 | 57.4 | 68.2 |
| Qwen2.5-Omni-3B | 74.6 | 62.1 | 49.9 | 62.2 |
| OmniMeld(ours) | 75.3 | 65.1 | 51.3 | 63.9 |

4 个教师总体分别为 66.5、68.1、68.2 与 68.2 均高于 7B 基座的 66.0 其中推理与整体教师高 2.2 个百分点。时序教师在短视频为 79.2 推理教师在中视频为 69.1 在长视频为 57.8。3B 学生总体从 62.2 提升到 63.9 短中长分别提升 0.7、3.0 与 1.4 个百分点。教师总体高于 OmniReasoner 报告的 65.4 与 OmniAgent 的 67.8 接近但后者缺少短中分项比较范围受限。

### 预热与多教师蒸馏及最优传输各自带来多少增益

阅读消融表时按行从上到下跟踪训练策略的叠加先看有监督预热相对 3B 基座的变化再看普通多教师在策略蒸馏的增量最后看引入最优传输后的变化。平均列为 4 个基准的算术平均便于观察总体趋势单列持平与微降同样值得注意。

| Method | Daily-Omni | OmniVideoBench | WorldSense | LVOmniBench | Avg. |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni-3B | 60.1 | 31.8 | 41.3 | 32.3 | 41.4 |
| + SFT Warmup | 63.1 | 33.6 | 43.6 | 33.1 | 43.4 |
| + SFT Warmup + MOPD | 65.7 | 33.6 | 43.5 | 33.1 | 44.0 |
| + SFT Warmup + MOPD w/ OT | 66.2 | 34.7 | 43.7 | 33.1 | 44.4 |

有监督预热把平均分从 41.4 提升到 43.4 4 个基准分别为 63.1、33.6、43.6 与 33.1 均高于 3B 基座。在相同预热起点上普通多教师蒸馏把 DailyOmni 从 63.1 提升到 65.7 高 2.6 个百分点但其余三项基本持平 OmniVideoBench 仍为 33.6。引入最优传输后三项继续提升 DailyOmni、OmniVideoBench 与 WorldSense 分别为 66.2、34.7 与 43.7 比普通版本高 0.5、1.1 与 0.2 个百分点 LVOmniBench 保持 33.1 不变。

OmniVideoBench 的对比最具信息量因为普通蒸馏在此无增益而响应引导的匹配带来 1.1 个百分点的提升。在域路由与预热不变的前提下该差异支持模态响应代价的有效性。不足在于消融未覆盖候选规模、温度与正则强度的敏感性也未比较多教师协同指导或单教师对照 LVOmniBench 上的持平也表明增益并非在所有长视频理解上一致。

### 单教师路由与四视图建模的边界与复现前提

按主要能力划分领域并单教师路由的做法清晰但复杂问题常同时需要定位、时序与推理。当前每样本只接受指派教师的监督未探索多教师协同或加权组合跨域冲突时的仲裁机制缺失。四视图以黑色帧屏蔽画面与关闭音频构造反事实其视图选择与响应估计方式未经系统比较更细粒度的干预或更高效的估计可能改变代价质量与训练开销。

评测覆盖 4 个音频视觉基准与无字幕 Video-MME 但均为准确率未做人工听测也未报告方差、置信区间与失效案例的系统分析。长视频与开放问答占比较低 5.9% 的 10 分钟以上视频与 2.30% 的 LLaVA-Video 来源限制了对长程与指令跟随的检验。对比中部分基线取自原文报告部分为本地复测硬件与采样差异可能影响可比性 30B 与闭源结果仅作背景。

复现需区分三件事代码、权重与可运行系统。原文披露了 Megatron 后端 ms-swift 与 vLLM 生成、GPU 数量、学习率、批量与采样配置但本次未确认公开资源可用不应声称已开源。附录给出了五源构成、题型分布与完整提示词可用于核对数据配比与证据标注规范。工程选型上若任务集中于定位对应可优先考虑定位教师路线若偏重排序与变化可参考时序教师若需解释与预测则需检验推理链的媒体支撑统一学生适合需要兼顾四域的通用部署但长视频场景仍需额外验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频按 2 fps 均匀采样每样本至多 144 帧；音频采样率与帧长步长码率及延迟 RTF 与显存原文未披露推理直接使用完整音频视觉输入。
- **训练与评测数据**：OmniMeld-20K 共 19,598 条样本约 20K，来自 OmniVideo-100K LongVALE MiraData VideoVista 与 LLaVA-Video，按四领域切分，每教师约 5K 学生预热 2K 蒸馏 3,840 条其中 20% 用最优传输评测用 DailyOmni OmniVideoBench WorldSense LVOmniBench 与 Video-MME 无字幕音频视觉输入。
- **算力与训练耗时**：教师微调每教师用 4 张 NVIDIA RTX PRO 5000 学生预热用 8 张蒸馏用 12 张其中 4 张承载四个领域教师每教师 1 张 8 张训练学生训练步数与耗时原文未披露。
- **核心超参数与配置**：主干峰值学习率教师微调 1×10-5 学生预热 1×10-5 蒸馏 3×10-6 对齐器对应 2×10-6 1×10-5 与 1×10-6 预热比 0.05 后余弦衰减全局批量 32 20 与 128K 取 64τ 取 0.9ε 取 0.1 学生采样温度 0.9 top-p 取 0.9 最大 1,024 词元。
- **推理速度与部署开销**：推理直接从完整音频视觉输入生成答案无需额外视图 RTF 延迟吞吐与显存占用原文未披露。
- **开源产物与协议状态**：本次未确认代码权重数据与演示的公开状态不应声称已公开原文提及训练基于 ms-swift 与 vLLM 但未给出可验证的可用链接。
- **附录与补充材料要点**：附录给出五源在各教师中的数量配比题型按来源与时长分布完整生成审查仲裁与验证修正提示词以及训练实现的采样与优化细节局限讨论指出单教师路由与四视图建模有待扩展。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33861v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以四视图固定文本上下文构造音频、视觉与交互三维响应向量，并用熵正则去偏最优传输对齐分布，机制定义完整可验证。

- 核心优势：在四个公开音视频基准上以同一本地口径对比7B与3B基线、四领域教师与蒸馏学生，并以固定热身起点直接分离普通蒸馏与最优传输增益。

- 主要短板：评测无显著性检验与误差棒，且20%最优传输样本预选依据未说明，微小增益的可信度受限。

- 主要短板：论文未提供可核对的延迟或吞吐实测，四视图教师打分与Sinkhorn迭代的实际负担未知。

- 主要短板：按主能力单教师路由未覆盖多能力交织问题，且推理教师95.37%来自两个数据源，存在领域偏置风险。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
