---
title: "What People Choose Not to Say: A Multimodal Benchmark for Fine-Grained Information Manipulation in Conversations"
date: 2026-11-25
draft: false
tags: [音视频理解, 基准设计, 数据标注, 基准测试]
categories: [论文速递]
description: "针对二元真假标签无法区分隐瞒、泄漏、编造、回避与反驳的问题，InfoCon 用上下文充足的多智能体标注与只给 12 秒片段的受限评测构建 29,480 个片段的六分类基准，Qwen3-Omni 适配后 Macro-F1 从 0.2355 升至 0.3931 并能迁移到法庭域，但隐瞒与泄漏两类仍无改善且片段层面存在固有模糊。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31346"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "人们选择不说什么：对话中细粒度信息操作的基准"
paper_digest_original_title: "What People Choose Not to Say: A Multimodal Benchmark for Fine-Grained Information Manipulation in Conversations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.31346v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31346v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31346v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.data-annotation","label":"数据标注"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对二元真假标签无法区分隐瞒、泄漏、编造、回避与反驳的问题，InfoCon 用上下文充足的多智能体标注与只给 12 秒片段的受限评测构建 29,480 个片段的六分类基准，Qwen3-Omni 适配后 Macro-F1 从 0.2355 升至 0.3931 并能迁移到法庭域，但隐瞒与泄漏两类仍无改善且片段层面存在固有模糊。"
paper_digest_reader_sections: [{"heading":"二元真假标签为何装不下隐瞒与回避的差别","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"InfoCon 把一次回答定义为六选一且只给模型看短片段","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"上下文充足的标注与上下文受限的评测如何分开实现","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"六分类 Macro-F1 只有 0.39 左右而二元一致性超过 0.69","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"哪两类策略学不会而换到法庭录像还能提分","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"短片段可恢复什么与复现核对清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Information, Renmin University of China, Beijing, China"],"name":"Yuhan Bian"},{"affiliations":["Faculty of Engineering, The Chinese University of Hong Kong, Hong Kong, China"],"name":"Zhaokai Liang"},{"affiliations":["School of Information, Renmin University of China, Beijing, China"],"name":"Jia Wang"},{"affiliations":["School of Information, Renmin University of China, Beijing, China"],"name":"Haoyu Liu"},{"affiliations":["School of Smart Governance, Renmin University of China, Suzhou, China","State Key Laboratory of Novel Software Technology, Nanjing University, Nanjing, China"],"name":"Yu Chen"},{"affiliations":["School of Smart Governance, Renmin University of China, Suzhou, China"],"name":"Jianfeng Qu"},{"affiliations":["School of Information, Renmin University of China, Beijing, China","School of Smart Governance, Renmin University of China, Suzhou, China"],"name":"Zhixu Li"}]
paper_digest_abstract_sha256: "87cd20b20433964c122a352edf573da023ae2b34cd970c6ecd49c1ea35c09d6d"
paper_digest_sidecars: {"citation.bib":{"sha256":"1cda6947adc860ef1cdb8f9783d4f3f59220ff36b726533d504ee9fa21c75492","url":"/audio-research-portal/client/papers/2026-11-25/2611-31346/citation.bib"},"citation.json":{"sha256":"a7564c60e9efba92f1e9aed009dc9eac160dd04a9741cd754684e9b0e9203233","url":"/audio-research-portal/client/papers/2026-11-25/2611-31346/citation.json"},"citation.ris":{"sha256":"9532ed61cea83edf134a869ac2f11a418319094b2a78307b5c0a3d2889555c30","url":"/audio-research-portal/client/papers/2026-11-25/2611-31346/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1dc5125bf2bd75fe647498749f492a963f10541fc70da55aee157ed194b2dab7","url":"/audio-research-portal/client/papers/2026-11-25/2611-31346/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "15a100f7aaa7d5adf3b482ce2609461f89db5c6ce6a7362c8bfda7a903cff4c6"
paper_digest_api_reader_plan_sha256: "1f202b24ce93dfbe7a0a3a5033eb0a47610980e886bd145b091fbb32d3ceca81"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "05de93bb1a87ad20778190b9bf0dad45fb26901257a5859f23c914595ebf2ba7"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "4ee8d07aa204576c22a04882d6129301f4ab65c662c6b7ad17c93814505f2df0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8a15a77b3fe612dc9f1c6f3f4cbd5d22f3b9397c92ac02ca2b1490f73c7f2417"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9671519dffbfda131c665a438b4e75b61824cb4c863ace8ec900dd92c987427a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 人们选择不说什么：对话中细粒度信息操作的基准

> 英文题目：*[What People Choose Not to Say: A Multimodal Benchmark for Fine-Grained Information Manipulation in Conversations](https://arxiv.org/abs/2611.31346v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)；[数据标注](/audio-research-portal/papers/?concept=method.data-annotation)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 7.6/10 | 技术严谨 7.3/10 | 实验充分 6.9/10 | 清晰度 7.1/10 | 影响力 6.7/10 | 开源 6.0/10 | 可复现 5.2/10 | 工程/实践 7.0/10


## 👥 作者与机构

- Yuhan Bian：School of Information, Renmin University of China, Beijing, China
- Zhaokai Liang：Faculty of Engineering, The Chinese University of Hong Kong, Hong Kong, China
- Jia Wang：School of Information, Renmin University of China, Beijing, China
- Haoyu Liu：School of Information, Renmin University of China, Beijing, China
- Yu Chen：School of Smart Governance, Renmin University of China, Suzhou, China；State Key Laboratory of Novel Software Technology, Nanjing University, Nanjing, China
- Jianfeng Qu：School of Smart Governance, Renmin University of China, Suzhou, China
- Zhixu Li：School of Information, Renmin University of China, Beijing, China；School of Smart Governance, Renmin University of China, Suzhou, China

## 📌 核心摘要

**问题与瓶颈：** 日常对话里说话人常常不把知道的事实全部说出，模型只能看到一段至多 12 秒的可听可见片段，却要判断说话人是在完整披露、选择性隐瞒、无意泄露、编造、回避还是在被质疑后反驳，输出还要归入与真实沟通一致或不一致两大组。已有评测多做粗粒度情绪识别或二值真假判断，把隐瞒、泄露、回避等不同做法压成同一个欺骗标签，无法区分事实相容但语用误导与直接矛盾事实的差别。更困难的是，同一句话的策略含义取决于隐藏事实、说话人当时知道什么以及对话期待说什么，依据可能远在目标片段之外。可靠标注需要完整来源证据，而公平评测又只能给模型局部片段，这种证据充分性与输入受限之间的张力是此前基准没有显式处理的。

**核心思路与方法架构：** 与最接近的二值欺骗检测基线相比，本文保留音视频片段输入，增量是 6 种策略分类加固定映射得到的粗一致性标签，并把来源丰富的标注与只给片段的评测分开。沿 1 个 10.72 秒的影片片段看，来源证据包先汇集完整视频、独立剧本或角色真相、对齐字幕与说话人信息，4 个情境重建智能体分别确定事实状态、说话人知识、真实沟通期待与回应关系，汇总为结构化证据，再由标签指派智能体选出 6 类之一并派生粗标签，最后经时间对齐、证据支撑、分类一致性与媒体完整性核验后入库。评测时模型只能看到定位后的同步片段。数据集共 29,480 个片段，含 18,237 个影片片段与 11,243 个博弈片段，来自 166 个来源单元，训练集 25,458 个与核心测试集 4,022 个按来源划分，适配时用低秩适配 (Low-Rank Adaptation，LoRA) 或监督微调更新模型，零样本评测则冻结原模型。

**关键实验与核心代价：** 在 4,022 个片段的核心测试集上，六向宏平均 F1 (Macro-F1，越高越好 ↑) 为主要指标。最好的零样本多模态大模型 AffectGPT 为 0.2386，经 InfoCon 监督训练的传统音视频模型 CAV-MAE 为 0.2351，两者接近，说明通用多模态能力没有解决细粒度恢复。InfoCon 适配带来一致提升，Qwen3-Omni 从 0.2355 升至 0.3931，Emotion-LLaMA 从 0.0720 升至 0.2736，粗一致性也同步上升，而 CA2ST 粗一致性 0.6929 与六向 0.1796 的落差说明粗分易而细分难。跨域到 121 个庭审视频上，零样本 Macro-F1 从 44.76% 升至 59.31%，准确率从 52.89% 升至 61.98%，加目标域监督后 Macro-F1 从 62.27% 升至 68.54%。代价集中在少数类，选择性隐瞒 F1 从 32.0% 降至 25.7%，无意泄露从 9.2% 降至 0.0%，原文只给点估计而未做显著性检验，也未披露训练与推理开销。

**适用边界与深读导览：** 结论成立于剧本影片与狼人杀式博弈两种互补场景，前者完整披露占 59.0%，后者回避占 41.6%，无意泄露总体仅 386 个，占 1.3%，核心测试集中占 4.65%，其失败不能简单外推为不可学。100 个分层样本的人审使用完整证据包，测的是标签可复现性而非片段级可解性，一致率 0.860 与 κ 0.819 的估计存在有限样本不确定性，且来源支撑的标签不保证每个片段局部唯一可判。想深究分类边界与证据结构可看下文方法概述中的公式与标注流程，想核对总体与分策略表现可看实验结果中主表与分策略表及跨域验证。

## 🔗 开源与复现资源

- 数据相关资源：<https://huggingface.co/datasets/xilinghuiye/RoomReader-Full> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 二元真假标签为何装不下隐瞒与回避的差别

多模态大模型在情绪识别与真假判断上进步明显，但日常对话的信息管理远比二元标签复杂。说话人可能隐瞒敏感细节，可能无意说漏嘴，可能用含糊回答回避追问，也可能在被质疑时强硬反驳。这些行为在事实真假、知情状态与互动期待上各不相同，却长期被压成真与假两类。论文提出 InfoCon 基准，要求模型从短音视频片段中区分 6 种细粒度信息策略，而不只是判断是否说谎。

为了定位缺口，原文以完整对比表梳理情感、欺骗与社交推理方向的代表基准，阅读时可重点看规模、细粒度标签、信息策略标签与上下文金标签四列。只有同时具备大规模多模态片段与上下文扎实的策略标签，才能支撑对隐瞒与回避差异的可靠评测，而此前工作往往只满足其中一部分内容要求。下表列出 9 个代表基准，覆盖情绪识别、二元欺骗与社交推理 3 类路线。

| Benchmark | Primary Task | Dataset Size | Fine-grained Labels | Info-strategy Labels | Context-rich Gold | Information Management Focus |
| --- | --- | --- | --- | --- | --- | --- |
| MELD [42] | basic emotion recognition | 13,708 | ✓ | ✘ | ✘ | ✘ |
| DFEW [20] | facial expression recognition | 16,372 | ✓ | ✘ | ✘ | ✘ |
| MAFW [30] | compound emotion recognition | 10,045 | ✓ | ✘ | ✘ | ✘ |
| Real-life Trial [38] | binary deception detection | 121 | ✘ | ✘ | ✘ | ✓ |
| Bag-of-Lies [15] | binary deception detection | 325 | ✘ | ✘ | ✘ | ✓ |
| DOLOS [14] | binary deception detection | 1,675 | ✘ | ✘ | ✘ | ✓ |
| Box of Lies [45] | binary deception detection | 1,049 | ✘ | ✘ | ✘ | ✓ |
| Werewolf Among Us [23] | social-deduction behavior | 26,647 | ✓ | ✘ | ✓ | ✓ |
| InfoCon (ours) | fine-grained information manipulation | 29,480 | ✓ | ✓ | ✓ | ✓ |

下表中，MELD 有 13,708 个片段，DFEW 有 16,372 个片段，MAFW 有 10,045 个片段，三者都只做情绪识别，没有信息策略维度与上下文金标签。Real-life Trial 仅 121 个法庭视频，Bag-of-Lies 325 个片段，DOLOS 1,675 个片段，Box of Lies 1,049 个片段，四者规模较小且都属二元欺骗。Werewolf Among Us 达到 26,647 个片段且关注社交推理但仍无信息策略标签，InfoCon 以 29,480 个片段同时满足细粒度标签、信息策略标签、上下文金标签与信息管理聚焦四项要求，是同时满足四项的大规模细粒度信息操作基准。

更关键的矛盾在于标注与评测所需上下文不对等。要判定一次回答是选择性隐瞒还是回避，必须先还原底层事实、说话人当时知道什么、对方期待听到什么，以及回答与期待的关系，这些证据可能远在目标句之外。标注时必须使用完整视频、剧本或角色真相与对齐字幕，评测时却只能给模型至多 12 秒的目标片段，否则特权信息会泄漏。这种充足标注与受限推理的分离是全文方法的起点。

### InfoCon 把一次回答定义为六选一且只给模型看短片段

InfoCon 把理解信息操作定义为分类任务。模型可见输入只有目标音视频片段，不附带标注时使用的剧本真相、角色信息与推理依据。金标签描述由全量证据确立的策略，预测则是从局部可观察线索对该策略的估计。两者信息不对等是所有被测模型的共同条件，并不假设意图可以直接观察，个别样本在片段层面可能本来就难以唯一判定。

#### 模型只看到什么与要预测什么

第一个公式界定模型可见输入的信号规格。公式中 \(x_i\) 表示第 \(i\) 个样本，\(v_i\) 为视觉流，\(a_i\) 为音频流，两者组成同步对话片段。原文未披露采样率、帧率与特征维度，只明确时长至多 12 秒且以目标说话人为中心。理解该式的关键是输入不包含源文本、角色真相与标注依据，这是后文受限评测的执行边界。

\[x_{i}=(v_{i},a_{i}),\]

把输入写成二元组，直觉是要求模型只从局部视听互动中恢复上下文扎实的策略。视觉分支捕捉表情、手势与场景，音频分支捕捉韵律与措辞，两者在投影层之前保持独立。若某分支缺失或质量下降，条件概率的依据会变弱。输出的片段表示直接送入分类器得到六选一分布，驱动下一步的取最大操作，而不经过任何长对话记忆或跨片段检索。

第二个公式给出细粒度预测规则。\(\mathcal{Y}\) 为 6 类策略集合，\(p_{\theta}\) 为模型对每类给出的条件概率，\(\hat{y}_i\) 为取最大概率对应的类别。公式中下标遍历 4,022 个 Core-Test 片段，参数来自模型权重。该式计算目标是从受限观察中估计最可能的策略，是六分类 Macro-F1 的直接来源。

\[\hat{y}_{i}=\arg\max_{y\in\mathcal{Y}}p_{\theta}(y\mid x_{i}).\]

采用取最大而非阈值判断，直觉是 6 类互斥且必须单选，便于与金标签一对一比较。当概率分布平坦时，取最大仍会硬选一类，这解释了小样本类别上 F1 波动大的原因。极端情况下若模型对所有类别输出均匀概率，准确率会退化到按先验猜测。得到的预测一方面参与六分类计分，另一方面经固定映射得到粗粒度一致性标签，衔接下一式的分组逻辑。

#### 一致与不一致分组如何派生

第三个公式把 6 类划分为两个一致性组。\(\mathcal{Y}_{con}\) 表示与真诚沟通期待相容的行为，\(\mathcal{Y}_{inc}\) 表示经由编造、回避或防御性反驳偏离期待的行为。这里一致性是事实相容与回答期待关系的操作性分组，不等于完整或无误导，隐瞒可以事实相容却语用误导，回避可以无假话却违反期待。

\[\mathcal{Y}_{\mathrm{con}}=\{D,W,L\},\qquad\mathcal{Y}_{\mathrm{inc}}=\{F,E,C\},\]

这种划分的直觉是把真假二分保留为粗接口，同时在细层保留意图与完整性差异。主动充分披露、选择性隐瞒与无意泄漏都不直接矛盾于接地事实，只是披露完整性与故意性不同。主动编造、回避回答与防御性反驳则分别对应矛盾事实、填不满被问信息槽，以及对质疑的否认反转。输出的分组直接决定粗粒度 Macro-F1，模型在粗任务上得分远高于细任务，说明能分清大方向却分不清具体手法。

下图总览基准构建协议的 5 段流水线。从左到右依次是源证据输入、上下文推理智能体、金标签指派、独立校验与发布实例。阅读时先沿箭头看主路径如何从完整视频收敛到 12 秒片段，再注意中间结构化证据在事实状态、说话人知识、互动期待与回答关系之间如何汇合，这是理解标注可靠性的关键。

[![原论文 Figure 2：Overview of the InfoCon benchmark construction protocol.](https://arxiv.org/html/2611.31346v1/2.png)](https://arxiv.org/html/2611.31346v1/2.png)

*论文图 2：从完整源视频与剧本真相经四类上下文智能体到标签指派与独立校验，最终只发布短片段的构建流程（原论文 Figure 2）。*

图中左侧源证据包括完整源视频、剧本或源真相、对齐字幕与角色真相转录，并注明不只用字幕。中间 4 个上下文智能体分别重建叙事真相、目标所知、真诚沟通要求与回答和真相的关系，汇总为结构化证据。右侧标签指派智能体先选 6 类之一，再经固定映射派生一致性，校验侧检查时间对齐、源证据支撑、标签一致与媒体完整性，最终只发布目标说话人居中的同步对话片段与 JSON 金标签。

### 上下文充足的标注与上下文受限的评测如何分开实现

标注框架把上下文重建、标签指派与独立校验分开，避免用表面措辞或表情直接定标签。每个证据包包含完整源视频、独立叙事或角色真相、对齐字幕与说话人角色信息，保证能恢复回答之前或之后的远距离证据，同时保持时间对齐。4 个上下文智能体分工重建互补关系，其输出汇总为结构化表示，再由专用指派智能体综合判定。

#### 结构化证据与标注流水线

该公式定义结构化证据的四元组。\(\mathcal{E}_i\) 为第 \(i\) 个样本的证据表示，\(F_i\) 为事实状态，\(K_i\) 为说话人知识，\(X_i\) 为互动期待，\(R_i\) 为回答关系。事实来自剧本或互动历史，知识判断说话人在该时刻知道什么，期待判断真诚沟通要求什么，关系判断回答与前三者的联系。四项缺一不可，否则无法区分故意隐瞒与无意泄漏。

\[\mathcal{E}_{i}=\left(F_{i},\,K_{i},\,X_{i},\,R_{i}\right),\]

用四元组而非单一文本的直觉是把模糊的意图判断拆成可核查的关系链。极端情况下若知识项缺失，就无法判断泄漏是否无意，若期待项缺失，就无法区分部分披露与回避填槽失败。该证据表示不直接送给被测模型，只作为指派智能体的输入，驱动六选一标签与派生一致性标签的生成，从源头保留可追溯的证据引用。

该式概括完整标注流水线。\(\mathcal{S}_i\) 为源证据包，\(\mathcal{A}_{ctx}\) 为上下文智能体组，\(\mathcal{E}_i\) 为结构化证据，\(\mathcal{A}_{label}\) 为标签指派，\(y_i\) 与 \(c_i\) 为细标签与派生粗标签，Verify 为独立校验，\(\mathcal{B}_i\) 为入库实例。校验覆盖时间对齐、事实与知识的源支撑、标签与分类体系一致，以及音画同步与目标居中。

\[\mathcal{S}_{i}\xrightarrow{\mathcal{A}_{\mathrm{ctx}}}\mathcal{E}_{i}\xrightarrow{\mathcal{A}_{\mathrm{label}}}(y_{i},c_{i})\xrightarrow{\mathrm{Verify}}\mathcal{B}_{i},\]

流水线采用先重建后判定再独立核验，直觉是以多智能体交叉减少单模型幻觉。任一校验项失败都会驳回或修订，避免时间错位或证据不足的样本入库。通过后入库样本保存细标签、派生一致性、目标身份与证据引用，而模型输入仅保留局部同步片段。这种上下文充足标注与上下文受限评测的分离，使金标签可靠但片段层面仍可能模糊，这是后文难例分析的前提。

#### 数据规模与来源互补

下表给出 InfoCon 的数据划分与标签分布。阅读时先看总量与训练测试切分，再对比剧本影视与狼人杀两列的分布差异，最后关注泄漏类的极小占比。所有百分比按列内计算，训练测试按源切分，同一完整影片或同一对局的片段不会跨划分出现，以减少源泄漏。

| Statistic | Overall | Scripted film | Werewolf |
| --- | --- | --- | --- |
| Total clips | 29,480 | 18,237 | 11,243 |
| Training / test clips | 25,458 / 4,022 | 15,714 / 2,523 | 9,744 / 1,499 |
| Source units | 166 | 15 | 151 |
| Consistent | 17,591 (59.7%) | 14,120 (77.4%) | 3,471 (30.9%) |
| Inconsistent | 11,889 (40.3%) | 4,117 (22.6%) | 7,772 (69.1%) |
| Active full disclosure | 11,843 (40.2%) | 10,749 (59.0%) | 1,094 (9.7%) |
| Selective withholding | 5,362 (18.2%) | 3,117 (17.1%) | 2,245 (20.0%) |
| Inadvertent leakage | 386 (1.3%) | 254 (1.4%) | 132 (1.2%) |
| Active fabrication | 2,969 (10.1%) | 2,086 (11.4%) | 883 (7.8%) |
| Evasive response | 5,337 (18.1%) | 665 (3.6%) | 4,672 (41.6%) |
| Defensive counterclaim | 3,583 (12.2%) | 1,366 (7.5%) | 2,217 (19.7%) |

总量 29,480 个片段中，剧本影视 18,237 个，狼人杀 11,243 个，训练 25,458 个，测试 4,022 个，源单元共 166 个。一致行为 17,591 个占 59.7%，不一致 11,889 个占 40.3%，但两源相反，影视一致占 77.4%，狼人杀不一致占 69.1%。主动充分披露 11,843 个占 40.2%，影视占 59.0% 而狼人杀仅 9.7%，回避回答 5,337 个占 18.1%，影视仅 3.6% 而狼人杀达 41.6%，无意泄漏仅 386 个占 1.3%，为后续少数类失败埋下伏笔。

#### 案例与人工一致性校验

下面案例展示选择性隐瞒如何从丰富证据定标签。左侧为评测可见的 10.72 秒目标片段与 4 帧画面，中间为标注时才有的四项接地推理，右侧为最终金标签与隐藏上下文声明。阅读时先看目标回答本身为何模糊，再看中间证据如何补足被隐瞒的敏感条目，最后确认评测时哪些信息不会给模型。

[![原论文 Figure 4：An annotation case of selective withholding, illustrating context-rich gold construction from…](https://arxiv.org/html/2611.31346v1/3.png)](https://arxiv.org/html/2611.31346v1/3.png)

*论文图 4：以 Becky Sharp 片段为例展示目标短片段与四项接地推理及最终选择性隐瞒标签的对应关系（原论文 Figure 4）。*

案例来自 Becky Sharp 1935 年影片，Becky 对 Rawdon 说有东西要卖。单看片段只见交易框架，无法判断是否隐瞒。标注证据还原叙事真相涉及债务与敏感信件，确认 Becky 知情且 Rawdon 期待直接解释，而回答只给交易信号却省略敏感条目与战略意图，因此定为选择性隐瞒并映射到一致组。文学源提供事实依据，字幕只做时间对齐，全部上下文在评测时均不提供，模型只能用可观察的措辞与视听表达推断。

下表报告标注可靠性的双重校验。2 名有数据研究经验的研究生在盲态下用同样完整证据重标 100 个分层样本，同时用 Claude 与 GPT 实例化同一多智能体框架对比跨骨干一致性。指标包括一致率、Macro-F1 与超出机遇一致的 Cohen 值，经验上超过 0.60 为高度一致，超过 0.80 为几乎完全一致。

| Setting | Acc./Agreement | Macro-F1 | κ |
| --- | --- | --- | --- |
| Human vs. InfoCon Annotation | 0.860 | 0.842 | 0.819 |
| Human 1 vs. Human 2 | 0.830 | 0.806 | 0.782 |
| Claude vs. GPT | 0.894 | 0.826 | 0.851 |

人与 InfoCon 标注一致率 0.860，Macro-F1 0.842，值为 0.819，人与人之间 0.830，0.806，0.782，Claude 与 GPT 之间 0.894，0.826，0.851，均达到高度以上且前者接近几乎完全一致。需要明确，该审计用完整证据包，测的是标签可复现性而非片段推理能力，且 100 个样本的估计存在有限样本不确定性，不能外推为所有部署条件下的误差率。

### 六分类 Macro-F1 只有 0.39 左右而二元一致性超过 0.69

评测采用官方按源切分，训练 25,458 个，Core-Test 4,022 个，同源片段不跨划分，并从训练中留出源不相交验证集选检查点，测试集只做最终评测。模型只接收至多 12 秒目标片段，不给源转录、角色真相与标注依据。基线分 3 组，传统音视频模型在 InfoCon 训练集上训练，未适配 MLLM 用统一零样本指令评估，另有两组经 LoRA 或监督微调适配。六分类 Macro-F1 为主要指标，每类平等加权以暴露少数类失败。

#### 评测设置与公平性前提

下表为主结果，左半为六分类四项指标，右半为派生二元一致性四项指标。阅读时先看六分类 Macro-F1 列的跨行趋势，再对比同一行左右两半的落差，最后看底部两组适配增益行相对各自基座的变化。原文用颜色标记每列前 3 名，增益行报告相对零样本基座的绝对提升，训练机制已分开展示。

| Model | Mod. | Six-way InfoCon Macro-F1 | Six-way InfoCon Acc. | Coarse Consistency Macro-F1 | Coarse Consistency Acc. |
| --- | --- | --- | --- | --- | --- |
| CAV-MAE [13] | V+A | 0.2351 | 0.3864 | 0.6564 | 0.6691 |
| Qwen3-Omni-30B-A3B-Instruct [51] | V+A | 0.2355 | 0.2578 | 0.5661 | 0.5943 |
| AffectGPT [26] | V+A | 0.2386 | 0.3138 | 0.4957 | 0.5192 |
| Qwen3-Omni + InfoCon | V+A | 0.3931 | 0.5266 | 0.7202 | 0.7300 |
| gain vs. base |  | ↑0.1576 | ↑0.2688 | ↑0.1541 | ↑0.1357 |
| Emotion-LLaMA + InfoCon | V+A | 0.2736 | 0.4580 | 0.6997 | 0.7121 |
| gain vs. base |  | ↑0.2016 | ↑0.2460 | ↑0.2669 | ↑0.1513 |

六分类上最佳零样本 AffectGPT 仅 0.2386，Qwen3-Omni 为 0.2355，传统模型 CAV-MAE 为 0.2351，三者接近，说明单靠通用多模态容量不能解决该任务。粗粒度上 CA2ST 达 0.6929，HiCMAE 达 0.6889，而各自六分类仅 0.1796 与 0.1975，落差表明模型能分清大致一致与否，却分不清具体手法。单看准确率与加权 F1 会掩盖少数类失败，因此必须结合每类分数解读。

经 InfoCon 适配后 Qwen3-Omni 从 0.2355 升至 0.3931，提升 0.1576，Emotion-LLaMA 从 0.0720 升至 0.2736，提升 0.2016，加权 F1、召回、准确率与粗粒度同步提升，且覆盖通用与情绪专用两类基座。比较时需注意训练条件不同，CAV-MAE 使用 InfoCon 监督而未适配 MLLM 为零样本，跨家族比较不能分离模态或适配方法效应，表中均为点估计，小分差只宜作描述性排序。

### 哪两类策略学不会而换到法庭录像还能提分

#### 增益不均匀与两类顽固难例

下表拆解 Qwen3-Omni 适配前后的每类精确率、召回与 F1，支持数为 Core-Test 中该类样本量，F1 均以百分比报告，最后一列为适配后 F1 的绝对变化。阅读时先看披露、回避与反驳三行的大幅上升，再看隐瞒与泄漏两行的下降，最后结合支持数判断困难是否仅由样本量解释。

| Category | Support | Zero-shot P/R/F1 | InfoCon-adapted P/R/F1 | Δ F1 |
| --- | --- | --- | --- | --- |
| Active Full Disclosure | 1,224 | 36.1 / 13.0 / 19.1 | 48.4 / 90.6 / 63.1 | ↑44.0 |
| Selective Withholding | 846 | 24.2 / 46.9 / 32.0 | 60.5 / 16.3 / 25.7 | ↓6.3 |
| Inadvertent Leakage | 187 | 5.8 / 21.9 / 9.2 | 0.0 / 0.0 / 0.0 | ↓9.2 |
| Active Fabrication | 388 | 20.2 / 12.9 / 15.7 | 29.5 / 28.6 / 29.1 | ↑13.3 |
| Evasive Response | 972 | 37.5 / 30.0 / 33.4 | 86.7 / 52.9 / 65.7 | ↑32.3 |
| Defensive Counterclaim | 405 | 47.1 / 24.2 / 32.0 | 45.9 / 60.7 / 52.3 | ↑20.3 |

主动充分披露从 19.1% 升至 63.1%，提升 44.0 个点，回避回答从 33.4% 升至 65.7%，提升 32.3 个点，防御性反驳从 32.0% 升至 52.3%，提升 20.3 个点，主动编造从 15.7% 升至 29.1%，提升 13.3 个点。相反，选择性隐瞒从 32.0% 降至 25.7%，下降 6.3 个点且召回仅 16.3%，无意泄漏从 9.2% 降至 0.0%，下降 9.2 个点。隐瞒支持数 846 个，多于多类显著提升的类别，因此困难不能只归因于类别不平衡，而与说话人知识、故意性与省略边界推理有关。

下图热力矩阵汇总多模型在 6 类上的 F1 百分比，列按 D、W、L、F、E、C 顺序排列，颜色越深分值越高。阅读时先横向比较同一模型六列的不均匀性，再纵向比较同一列跨模型的差异，重点观察泄漏列是否普遍接近零，以及适配前后 Qwen3-Omni 与 Emotion-LLaMA 的变化幅度。

[![原论文 Figure 5：Class-wise performance across multimodal models on the InfoCon Core-Test split.](https://arxiv.org/html/2611.31346v1/classwise-performance.png)](https://arxiv.org/html/2611.31346v1/classwise-performance.png)

*论文图 5：多模型在六类策略上 F1 百分比热力对比，泄漏列普遍接近零而披露与回避列较高（原论文 Figure 5）。*

图中泄漏列普遍最弱，多行接近 0.0%，隐瞒列多数模型也偏低，而披露、回避与反驳列在较强模型上明显更高。例如零样本 Qwen3-Omni 在六列为 19.1%、32.0%、9.2%、15.7%、33.4%、32.0%，经 InfoCon 适配后变为 63.1%、25.7%、0.0%、29.1%、65.7%、52.3%。AffectGPT 零样本在反驳列达 46.6%，回避列达 42.9%，但泄漏列仅 0.8%。这种不均匀说明任务要求捕捉知识、完整性、故意性与互动行为的细微差别，而非单一视听线索。

#### 跨域到法庭录像的迁移

下表检验 InfoCon 监督能否迁移到 Real-life Trial 的 121 个法庭真假视频。该目标域分布、场景与二元标注均不同。零样本指目标域无训练，源训练指先学六分类再直接做二元判断。外部单独微调只用目标监督，源加目标微调先用源监督初始化再用目标监督。阅读时分别比较两组内的增量。

| Benchmark | Setting | Accuracy (%) | Macro-F1 (%) | Δ Macro-F1 |
| --- | --- | --- | --- | --- |
| Real-life Trial | Qwen3-Omni zero-shot | 52.89 | 44.76 | – |
| Real-life Trial | InfoCon-trained zero-shot | 61.98 | 59.31 | +14.55 |
| Real-life Trial | External-only SFT | 63.64 | 62.27 | – |
| Real-life Trial | InfoCon → External SFT | 68.60 | 68.54 | +6.27 |

零样本下 Macro-F1 从 44.76% 升至 59.31%，提升 14.55 个点，准确率从 52.89% 升至 61.98%。有目标监督时 Macro-F1 从 62.27% 升至 68.54%，提升 6.27 个点，准确率从 63.64% 升至 68.60%。跨数据集增益表明学到可迁移的信息管理与互动线索，而非数据集特有标签模式。但目标集仅 121 个视频且为单一法庭域，不能据此量化所有部署场景的变化，谈判与日常对话仍待验证。

### 短片段可恢复什么与复现核对清单

复述结论时需守住 3 个前提。第一，金标签可靠不等于片段可唯一判定，D 与 L、W 与 E、F 与 C 在缺上下文时本就难以区分，这是分类体系层面的模糊对，而非测得的混淆频率。第二，剧本表演与策略博弈动机不同，标签分布互补，聚合分数需按源解读。第三，所有主表均为点估计，未报告标准差与置信区间，小分差只宜作描述性排序，泄漏类在训练仅 199 个、测试 187 个，少数类估计更不稳定。

未验证范围包括长时对话历史建模、跨片段记忆、类别平衡训练与说话人知识显式建模，这些是论文指出的未来方向。复现核对上，数据集已在 Hugging Face 公开可用，训练测试按源切分与至多 12 秒片段规则明确，但计算硬件、优化器、学习率与批量大小等超参数原文未披露，推理实时率与显存开销也未报告。代码与权重细节原文亦未披露，复现第一步应先按官方切分重跑 Core-Test 六分类 Macro-F1，再补跨域与每类分数。

工程选型上，若任务是粗粒度一致性判断，传统音视频模型已接近 0.69 的 Macro-F1，成本较低。若必须区分隐瞒、泄漏、编造、回避与反驳 6 种手法，零样本 MLLM 目前只有 0.23 左右，需要 InfoCon 适配才能到 0.39，且隐瞒与泄漏仍可能无改善，上线前必须补足这两类的硬例挖掘与人工抽查。标签描述的是情境沟通行为而非个人特质，预测不应解读为对诚实或人品的定论。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率、帧率、码率与通道特征维度原文未披露，评测片段至多 12 秒，为目标说话人居中的同步对话音视频片段
- **训练与评测数据**：训练使用 InfoCon 官方划分 25,458 个训练片段与 4,022 个 Core-Test 片段，共 29,480 个片段来自 166 个源单元含 15 部影视与 151 个社交推理对局，同一源内片段不跨划分，另用 Real-life Trial 121 个法庭视频做跨域迁移评测
- **算力与训练耗时**：原文未披露
- **核心超参数与配置**：原文提及用 LoRA 与监督微调适配 Qwen3-Omni 与 Emotion-LLaMA，优化器、学习率、批量大小与训练轮数等原文未披露
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存开销，仅明确评测输入为至多 12 秒的目标说话人同步音视频片段
- **开源产物与协议状态**：数据集已在 Hugging Face 公开可用，代码、权重与演示页原文未披露
- **附录与补充材料要点**：原文未披露附录，补充材料情况原文未披露，正文包含伦理声明强调标签为情境沟通行为而非个人特质判断

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.31346v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以来源级划分25,458训练与4,022测试并限定至多12秒片段评测，显式分离丰富标注与受限推断，有效控制源泄漏。

- 核心优势：在4,022核心测试上以六向Macro-F1为主指标完成三组基线与两组InfoCon适配配对对照，并以121视频跨域验证迁移价值。

- 核心优势：在100个分层样本上人与InfoCon标注一致率0.860与κ0.819，且Claude与GPT双基座一致性达0.894，支撑标签可复现性。

- 主要短板：适配后选择性隐瞒F1由32.0%降至25.7%且召回仅16.3%，无意泄露由9.2%降至0.0%精度召回均为0.0%，总体提升掩盖少数类回退且原文只给点估计未做显著性检验；亦指出100样本估计存在有限不确定性且仅121视频单外部域验证。

- 主要短板：适配变体仅说明用LoRA或监督微调更新，具体冻结层、学习率与优化器原文未披露，统一零样本指令文本亦未披露，复现配置缺失较多。

- 主要短板：未给出第一方代码仓库地址与模型权重下载链接且无演示链接，探测显示代码与权重文件均未检出且许可证未声明，仅数据集文件可达。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
