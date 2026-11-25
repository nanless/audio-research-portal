---
title: "Towards Robust Partial-Edit Deepfake Localization: An edit and Generator Conditioned Analysis"
date: 2026-11-24
draft: false
tags: [伪造片段定位, 评测协议, 统计分析, 语音]
categories: [论文速递]
description: "针对整句判真无法指出局部篡改位置且总体平均分掩盖条件差异的问题，本文复用 SAL 框架对比 WavLM-Large 与 XLS-R 在 PartialEdit 上按内容、语义、操作三轴及生成器拆分评估，发现 SSR-Speech 删除编辑最难而句子新颖度影响较小，代价是未查明声学成因且结论仅限两个公开生成器与离线帧级指标。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26903"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "平均分之外的短板：按编辑类型与生成器拆解局部伪造定位"
paper_digest_original_title: "Towards Robust Partial-Edit Deepfake Localization: An edit and Generator Conditioned Analysis"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26903v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26903v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26903v1.pdf"
paper_digest_primary_task: "伪造片段定位"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.forgery-localization","label":"伪造片段定位"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对整句判真无法指出局部篡改位置且总体平均分掩盖条件差异的问题，本文复用 SAL 框架对比 WavLM-Large 与 XLS-R 在 PartialEdit 上按内容、语义、操作三轴及生成器拆分评估，发现 SSR-Speech 删除编辑最难而句子新颖度影响较小，代价是未查明声学成因且结论仅限两个公开生成器与离线帧级指标。"
paper_digest_reader_sections: [{"heading":"整句判真不够用：局部编辑定位要回答篡改在哪里且何种编辑更难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"实线音频主链与虚线文本旁路：方法总览与双路径分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"WavLM-Large 与 XLS-R 共用同一 SAL 下游的特征与建模细节","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"总体分数很高但生成器一拆就分化：E1 与 E2 的定位差距","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"三轴编辑条件与句子新颖度：删除操作与 SSR-Speech 组合最难","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"平均分掩盖的短板与复现选型建议：何时可信何时需补验证","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Wichita State University, USA"],"name":"Aishwarya Fursule"},{"affiliations":["Wichita State University, USA"],"name":"Vamshi Nallaguntla"},{"affiliations":["The University of Texas at Austin, USA"],"name":"Yuan Tseng"},{"affiliations":["The University of Texas at Austin, USA"],"name":"David Harwath"},{"affiliations":["Institut national de la recherche scientifique (INRS-EMT), Canada"],"name":"Anderson Avila"},{"affiliations":["Wichita State University, USA"],"name":"Shruti Kshirsagar"}]
paper_digest_abstract_sha256: "47465d50d01f9e2a1903db34f1acf478dacd6d49a1c7c9546e015205015ecbc2"
paper_digest_sidecars: {"citation.bib":{"sha256":"2d9e486ba863c899eed3a6229c2133e6678609eef78f8b08f9b70ab0d9abb8cc","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26903/citation.bib"},"citation.json":{"sha256":"30ff5fa50a009875acad9bfa91c3943e864832daaa9563a3cfeb138d541c41ac","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26903/citation.json"},"citation.ris":{"sha256":"502121a586217456d808c565ff11069c031c1db88fb74d0a3cfd8f7197bad56c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26903/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a16d79c34bfd9ae5c052ce5cbb69cfacea1e9b1b394bda44ed2e0362ed91d799","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26903/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "b46c8d7acf00bbc8960f83ed0cb540a27b28bd3dfeef3ea4a2c5394ad66044ea"
paper_digest_api_reader_plan_sha256: "c37c61c4acba5fd1909b8d6e6a3f8f26b9273c9f1a3e2c8a531e96126ad0a66b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "08c254ff7dd2622b31820b95db499c8c10ed86a9028f9c393dbe4b5ad05d4b1a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "31c1d9d50bd5bdb9312ce30e46375a665f1336cc7961b4a3559cab27187ee395"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d341be03803fc127e21478ad809ae33be600568f9064ff8191f10d04e2d7b3d2"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e6a48036fd7fe493686664c5c33ac4a1d9feee459a832a1f1c4d7e1a23df31c8"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 平均分之外的短板：按编辑类型与生成器拆解局部伪造定位

> 英文题目：*[Towards Robust Partial-Edit Deepfake Localization: An edit and Generator Conditioned Analysis](https://arxiv.org/abs/2611.26903v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [伪造片段定位](/audio-paper-digest-blog/papers/?concept=task.forgery-localization)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol)；[统计分析](/audio-paper-digest-blog/papers/?concept=method.statistical-analysis)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 6.2/10 | 技术严谨 7.0/10 | 实验充分 6.9/10 | 清晰度 6.8/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 4.5/10


## 👥 作者与机构

- Aishwarya Fursule：Wichita State University, USA
- Vamshi Nallaguntla：Wichita State University, USA
- Yuan Tseng：The University of Texas at Austin, USA
- David Harwath：The University of Texas at Austin, USA
- Anderson Avila：Institut national de la recherche scientifique (INRS-EMT), Canada
- Shruti Kshirsagar：Wichita State University, USA

## 📌 核心摘要

**问题与瓶颈：** 部分编辑语音伪造定位要求对以真实语音为主、仅局部被改写的录音逐帧标出被篡改区段，输入为单声道 16 kHz 波形，输出为 160 ms 分辨率的真实与篡改标签。现有工作多报告总体等错误率（EER，越低越好 ↓）和被篡改帧 F1 分数（Fake-F1，越高越好 ↑），分数看起来已很高。论文指出这种平均数可能掩盖结构性弱点，因为改写内容类型、原文与改写文本的语义关系、替换、删除、插入等操作方式，以及生成器本身的声学痕迹都可能改变定位难度。

**核心思路与方法架构：** 与最接近的已有基线相比，本文保留基于自监督表示的定位模型不变，增量在于引入三轴转录本衍生分类和分生成器评估做诊断，且分类标签只用于事后分析，从不输入模型。波形经自监督语音编码器 WavLM-Large 或 XLS-R-300M 得到 1024 维特征序列，两种编码器均为 24 层 Transformer、16 注意力头结构并经 S3PRL 接口做隐层加权组合，特征序列进入同一片段感知定位（Segment-Aware Localization， SAL）下游模型，经平均池化和 cf 序列建模输出 160 ms 级预测。训练使用合并的 E1 与 E2 数据并切分为 4 秒片段，辅以概率为 0.5 的增加声学多样性的 RawBoost 增强和比例为 0.2 的跨片段混合（Cross-Segment Mixing），另一路转录本元数据经转录本对齐得到操作标签、经 spaCy 得到内容标签、经 WordNet 与 all-MiniLM-L6-v2 句相似度得到语义标签，仅用于分组计分。这种音频主链路与元数据离线支路并行而不相交的设计使操作与生成器效应得以分离，正好对应总体分数掩盖弱点的根因。

**关键实验与核心代价：** 在 PartialEdit 的 E1（VoiceCraft）与 E2（SSR-Speech）合并测试集上，以 XLS-R 为最强可比基线，WavLM-Large 的 Fake-F1 为 96.15，高于 XLS-R 的 95.45，EER 为 2.23，低于 XLS-R 的 2.53，分生成器后差距放大，WavLM-Large 在 E1 上 Fake-F1 为 98.86，在 E2 上变为 93.20，XLS-R 从 97.93 降至 92.78。在操作轴内总体删除的 Fake-F1 仅为 87.21 和 84.01，明显低于替换的 96.42 和 95.76，而 E2 删除进一步跌至 79.15 和 75.44，相对 E1 删除的 96.42 和 94.06 分别下降 17.27 和 18.62，约为总体 E1 与 E2 差距的 3 倍，且 E2 删除的 EER 升至 8.27 和 10.38，为操作轴内各生成器与操作组合中最差。内容与语义轴影响较小，仅语义无适用关系明显偏低，句子是否在训练中出现过总体差异很小。统计检验虽在每轴均显著，但效应量仅为 0.008 至 0.010，说明分类只能解释小部分逐句差异，代价是诊断仍未控制时长与篡改帧占比等因素，且原文未披露训练硬件耗时与推理实时率。

**适用边界与深读导览：** 上述结论仅在公开的 E1 与 E2 子集、同一 SAL 框架和两种表示下成立，E3 与 E4 因未公开未纳入，删除困难的声学成因尚未确定。想深究分类构建与训练细节可看第 2 节，想核对分生成器操作对照、统计检验与句子重叠结果可看第 3 节表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 整句判真不够用：局部编辑定位要回答篡改在哪里且何种编辑更难

语音合成与语音变换已经能生成高度逼真的连续语音，整句真假判断只能回答一段录音是否含假，却无法指出哪几帧被改过。局部编辑场景更具迷惑性，原始录音大多真实，只有替换、插入或删除的一小段由合成系统生成，检测器既要发现篡改存在，又要给出准确的时间位置。已有定位工作引入自监督表征与边界建模并报告了很高的总体分数，但单一平均分无法回答哪种编辑内容与哪种生成器更难。

本文把任务定义为帧级二分类定位，输入是单声道 16 kHz 波形，输出是每 160 ms 一帧的真实与篡改标签，评价聚焦被篡改类，采用 Fake-F1（被篡改类 F1 分数，越高越好）与 EER（等错误率，越低越好）。由于真实帧占多数，总体准确率会被多数类稀释，只有同时考察两类错误的帧级指标才有诊断意义。若删除类编辑或某个生成器系统性偏难，平均值会将其掩盖，因此必须按条件拆分评估。

#### 三轴分类的建立方式

为把总体分拆开，作者整理出三轴转录本分类，分别描述改了什么信息、改前后语义关系以及通过何种操作实现，并保留生成器身份以便交叉对比。下表列出各轴类别与原文到改后文本的示例，阅读时可先对照动作与属性、替换与删除等典型例子建立直觉，再看后文按条件分组的性能差异，这种设计让诊断独立于模型输入，只在评估时切片。

| Category | Example (original → edited) |
| --- | --- |
| Axis 1: Content |  |
| Action | He opened → closed the door |
| Attribute | a red car → a blue car |
| Object | a cat → a dog |
| Function | on the table → under the table |
| Entity | John → Mike |
| Multi | red car → blue truck |
| Other | um → uh |
| Axis 2: Meaning |  |
| Unrelated | He is reading → She is dancing |
| Opposite | He is happy → He is sad |
| Related | a cup → a mug |
| Similar | big → large |
| Uncertain | I think → I guess |
| N/A | no defined meaning relationship |
| Multi | multiple meaning changes |
| Axis 3: Operation |  |
| Substitution | red → blue |
| Deletion | He is here → He … |
| Insertion | He sat → He quickly sat |
| Multi | multiple operation types |

内容轴包含动作、属性、客体、关系、实体、多重与其它，语义轴区分无关、相反、相关、相似、不确定、N/A（不适用）与多重，操作轴区分替换、删除、插入与多重。操作标签来自转录本对齐，内容类别借助 spaCy 得到，语义类别结合 WordNet 与 all-MiniLM-L6-v2 句子相似度判定，N/A 表示无明确语义关系，Multi 表示一次编辑涉及多个类别或多种操作。这些标签只用于事后分组评估，从不输入定位模型。

#### 生成器身份的保留原因

生成器维度同样保留，E1 指 VoiceCraft，E2 指 SSR-Speech，E3 与 E4 因未公开而不纳入分析。同一类文本编辑由不同编辑系统生成时，声学连续性与伪影可能完全不同，因此必须按生成器分别报告，否则难以发现特定组合的短板，后续实验正是围绕这种交叉条件展开。这种保留让同一文本改动在不同合成器下的声学表现得以直接对比，为后文交叉表提供分组依据。

### 实线音频主链与虚线文本旁路：方法总览与双路径分工

整体流程分为上下两路，上路是实际参与训练与推理的音频主链，下路是只用于事后分组的离线文本旁路，两路在最后评估处汇合。下图用实线表示音频从数据集经预处理、特征提取到分段感知学习再到评估，虚线表示文本从数据集经转录本衍生分类到元数据分类再到评估，读图时先沿实线看主路径，再看虚线如何提供分组标签。

[![原论文 Figure 1：Overview of the proposed methodology.](https://arxiv.org/html/2611.26903v1/EditTYpe_ICASSP.drawio.png)](https://arxiv.org/html/2611.26903v1/EditTYpe_ICASSP.drawio.png)

*论文图 1：实线音频主链与虚线文本旁路双路径示意，上路训练推理下路仅用于事后分组评估（原论文 Figure 1）。*

图中上方浅蓝色为音频主链，从 Dataset 经 Audio 箭头到 Pre-Processing，再依次到 Feature Extraction、Segment Aware Learning 与 Evaluation，均为实线连接。下方浅黄色为文本旁路，从 Dataset 经 Text 虚线到 Transcript Derived Taxonomy，再到 Metadata taxonomy，最后以虚线回到 Evaluation。这种画法强调文本标签不进入模型，只在评估时用于按条件切片，避免把诊断信息误认为模型输入。

与最接近的 SAL 基线相比，本文没有改动定位网络结构，保留 SSL_SeqModel_8Labels_2Loss 架构与 cf 序列模型、平均池化与 Cross-Segment Mixing 训练策略，新增的是系统性诊断维度。同一 SAL 下游分别接 WavLM-Large 与 XLS-R-300M 两种 1024 维表征，输入统一为单声道 16 kHz，训练用 4 s 分段，参考标签原始分辨率为 20 ms，对齐到模型输出的 160 ms 分辨率后比较。

### WavLM-Large 与 XLS-R 共用同一 SAL 下游的特征与建模细节

以 1 s 输入为例，它进入时是 16 kHz 采样下的 16,000 个采样点单声道波形，训练时实际按 4 s 切段处理，因此 1 s 只是其中一段。波形先经预处理与 RawBoost 增强，再送入 24 层 Transformer 编码器得到 1024 维特征序列，下游 SAL 在 160 ms 分辨率下输出篡改概率。按 160 ms 换算，1 s 约对应 6 至 7 帧，4 s 约对应 25 帧，原始 20 ms 参考标签需对齐合并后才能逐帧比较，原文未披露编码器内部下采样帧率。

两种编码器均为 24 层 16 注意力头、隐层 1024 维，分别用 WavLM-Large 与 XLS-R-300M，通过 S3PRL 接口加权组合各层隐状态，得到同一尺寸的 1024 维序列后送入相同 SAL 下游。SAL 建模真实与篡改段的时间结构，训练时以 0.2 比例使用 Cross-Segment Mixing 构造更多段组合，减少对特定真假交界模式的依赖，下游采用平均池化汇聚信息。

#### 评价公式的计算目标与符号

定位评价聚焦被篡改帧而非整句准确率，因为真实帧占多数会稀释漏检。由于篡改帧占比很小，整句准确率容易被多数真实帧主导，因此必须单独统计被篡改类的查全与查准才能反映定位质量。设 \(P\) 为被篡改帧的精确率，\(R\) 为被篡改帧的召回率，两者均为 0 至 1 之间的标量，下式将其调和为 Fake-F1，EER 则在另一阈值处衡量两类错误相等时的错误率。

\[\text{Fake-F1}=\frac{2PR}{P+R},\]

调和平均的直觉是同时惩罚漏报与误报，只有精确率与召回率都高时分数才高，任一极端偏低都会大幅拉低结果，这比只看准确率更能反映小比例篡改区的定位质量。当模型把篡改帧全部漏掉或大量误报真实帧时，\(P\) 或 \(R\) 趋近于 0，Fake-F1 趋近于 0。当两类帧都判准时趋近于 1。评估时在不同阈值下计算该分数与 EER，并按三轴与生成器分组切片，直接驱动后文对删除与 SSR-Speech 组合短板的定位。

#### 训练配置与推理边界

训练方面，每个表征单独在合并的 E1 加 E2 训练集上训练 SAL，批大小为 32，Adam 学习率为 10−5，权重衰减为 10−4，最多 50 轮并以 StepLR 每 10 轮乘以 0.1，共用 42、123 与 2026 3 个随机种子。原文未明确编码器权重是否冻结，也未披露流式分块、前瞻缓存、采样步数与 RTF 等推理开销，因此复现时只能按离线整段推理理解，延迟与显存代价无法从本文确认。

### 总体分数很高但生成器一拆就分化：E1 与 E2 的定位差距

评测统一在 PartialEdit 上进行，训练、验证与测试分别含 15,704、15,576 与 53,727 个话语，测试覆盖 E1 与 E2 两个公开子集。指标为帧级 Fake-F1 越高越好与 EER 越低越好，均在 160 ms 分辨率下计算并在 3 个种子上报告均值与标准差。两个表征共用相同数据划分与 SAL 训练配置，比较时生成器身份与编辑条件只用于分组，不参与训练，因此跨表征与跨生成器的差异可归因于表征与数据本身，而非划分不一致。

#### 总体与分生成器结果

下表给出总体与按生成器拆分后的定位性能，总体指 E1 加 E2 混合测试，分生成器指分别在 VoiceCraft 与 SSR-Speech 上评估。阅读时先看总体行确认两种表征都处于高位，再对比 E1 与 E2 行的落差，重点关注同一表征在两个生成器之间的变化是否远大于两种表征之间的差异。这种先总体后分组的顺序有助于判断落差来源是表征还是生成器本身。

| Encoder | Test Set | EER ↓ | Fake-F1 ↑ |
| --- | --- | --- | --- |
| WavLM-Large | E1+E2 | 2.23 ± 0.04 | 96.15 ± 0.08 |
| XLS-R | E1+E2 | 2.53 ± 0.01 | 95.45 ± 0.02 |
| WavLM-Large | E1 | 0.75 ± 0.01 | 98.86 ± 0.01 |
| XLS-R | E1 | 1.18 ± 0.01 | 97.93 ± 0.04 |
| WavLM-Large | E2 | 3.78 ± 0.08 | 93.20 ± 0.16 |
| XLS-R | E2 | 3.96 ± 0.01 | 92.78 ± 0.06 |

混合测试下 WavLM-Large 为 2.23% EER 与 96.15% Fake-F1，XLS-R 为 2.53% 与 95.45%，前者略优但差距仅约 0.3 个百分点 EER 与 0.7 个百分点 Fake-F1。按生成器拆分后差异急剧放大，E1 上两者分别达 98.86% 与 97.93% Fake-F1，E2 上跌至 93.20% 与 92.78%，对应下降 5.66 与 5.15 个百分点，EER 同步升至 3.78% 与 3.96%。同表同列比较，最优为 E1 上 WavLM-Large 的 0.75% EER 与 98.86% Fake-F1，最差为 E2 上 XLS-R 的 3.96% EER 与 92.78% Fake-F1，生成器间落差数倍于表征间差异。

#### 稳定性与公平性核查

3 个种子标准差均较小，总体与分生成器趋势在各种子下一致，说明差距不依赖特定初始化。WavLM-Large 在各测试划分上均略优于 XLS-R，但优势远小于生成器带来的落差。该表未控制编辑时长、篡改帧占比与边界连续性，无法回答 E2 更难的声学成因，且 E3 与 E4 未公开，结论暂不能外推到未见编辑系统。

### 三轴编辑条件与句子新颖度：删除操作与 SSR-Speech 组合最难

把混合测试按三轴切片后，三轴呈现不同模式，内容轴在动作与属性上较好而在多重与关系上回落，语义轴多数类别相近而 N/A 明显偏低，操作轴则在两种表征上呈现一致排序。理解时需同时看 EER 与 Fake-F1 方向是否一致，并注意最差类别是否在两种表征间相同，这决定了难度来自编辑本身还是表征特异。

#### 操作轴呈现最一致的难度排序

下表为不分生成器的三轴总体性能，内容、语义、操作各类别分别报告两种表征的 EER 与 Fake-F1。先沿操作轴比较替换、删除、插入与多重的排序，再看语义轴 N/A 是否孤立偏低，最后看内容轴最差类别是否在两种表征间发生切换。这种不分生成器的视角先建立各轴内部排序，再为后文交叉生成器分析铺垫。

| Axis | Category | WavLM-Large EER | WavLM-Large Fake-F1 | XLS-R EER | XLS-R Fake-F1 |
| --- | --- | --- | --- | --- | --- |
| Content | Action | 1.77 ± 0.02 | 96.96 ± 0.07 | 2.05 ± 0.02 | 96.30 ± 0.01 |
| Content | Attribute | 1.86 ± 0.05 | 96.74 ± 0.12 | 2.17 ± 0.01 | 95.98 ± 0.04 |
| Content | Object | 2.15 ± 0.05 | 96.14 ± 0.08 | 2.28 ± 0.01 | 95.73 ± 0.01 |
| Content | Relation | 2.69 ± 0.03 | 95.20 ± 0.10 | 3.21 ± 0.02 | 94.12 ± 0.08 |
| Content | Entity | 2.85 ± 0.08 | 95.36 ± 0.09 | 2.88 ± 0.06 | 95.07 ± 0.10 |
| Content | Multi | 3.88 ± 0.09 | 94.10 ± 0.11 | 4.36 ± 0.04 | 93.31 ± 0.07 |
| Content | Other | 2.09 ± 0.10 | 94.61 ± 0.35 | 3.91 ± 0.09 | 91.04 ± 0.64 |
| Meaning | Unrelated | 2.10 ± 0.04 | 96.42 ± 0.06 | 2.39 ± 0.01 | 95.76 ± 0.03 |
| Meaning | Opposite | 1.92 ± 0.06 | 96.54 ± 0.12 | 2.24 ± 0.03 | 95.72 ± 0.02 |
| Meaning | Related | 2.01 ± 0.03 | 96.50 ± 0.10 | 2.26 ± 0.02 | 95.82 ± 0.03 |
| Meaning | Similar | 1.86 ± 0.06 | 96.77 ± 0.07 | 2.27 ± 0.07 | 96.06 ± 0.36 |
| Meaning | Uncertain | 2.16 ± 0.03 | 96.20 ± 0.06 | 2.34 ± 0.02 | 95.70 ± 0.04 |
| Meaning | N/A | 4.43 ± 0.20 | 89.79 ± 0.49 | 5.55 ± 0.06 | 87.45 ± 0.09 |
| Meaning | Multi | 3.88 ± 0.09 | 94.10 ± 0.11 | 4.36 ± 0.04 | 93.31 ± 0.07 |
| Operation | Substitution | 2.06 ± 0.03 | 96.42 ± 0.07 | 2.33 ± 0.01 | 95.76 ± 0.02 |
| Operation | Deletion | 4.81 ± 0.37 | 87.21 ± 0.70 | 6.39 ± 0.04 | 84.01 ± 0.19 |
| Operation | Insertion | 3.32 ± 0.26 | 94.28 ± 0.32 | 3.70 ± 0.11 | 93.34 ± 0.16 |
| Operation | Multi | 3.88 ± 0.09 | 94.10 ± 0.11 | 4.36 ± 0.04 | 93.31 ± 0.07 |

操作轴趋势最清晰，两种表征均在替换上最优而在删除上最差，WavLM-Large 从 96.42% 跌至 87.21%，XLS-R 从 95.76% 跌至 84.01%，EER 分别升至 4.81% 与 6.39%，插入与多重居中。语义轴单类编辑（Unrelated、Opposite、Related、Similar 与 Uncertain）的 Fake-F1 在 95% 至 97% 区间，Multi 略低（WavLM-Large 为 94.10%、XLS-R 为 93.31%），N/A 进一步跌至 89.79% 与 87.45%，为该轴明显洼地。内容轴最差类别在表征间不同，WavLM-Large 为多重的 94.10%，XLS-R 为其它的 91.04%，说明内容难度更依赖表征，而操作难度具有跨表征一致性。

#### 交叉生成器后删除短板急剧放大

总体切片仍可能掩盖生成器差异，下表进一步按 E1 与 E2 分别报告三轴性能，每类编辑对应 4 个 EER 与 4 个 Fake-F1。阅读时固定操作类别比较 E1 与 E2 列，重点看删除从 E1 到 E2 的跌幅是否远超总体 E1 到 E2 的约 5 个百分点落差，并核对两种表征是否同向。

| Axis | Category | WavLM-Large E1 EER | WavLM-Large E1 Fake-F1 | WavLM-Large E2 EER | WavLM-Large E2 Fake-F1 | XLS-R E1 EER | XLS-R E1 Fake-F1 | XLS-R E2 EER | XLS-R E2 Fake-F1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Content | Action | 0.55 ± 0.02 | 99.15 ± 0.02 | 3.02 ± 0.05 | 94.62 ± 0.15 | 0.95 ± 0.01 | 98.28 ± 0.05 | 3.21 ± 0.01 | 94.19 ± 0.06 |
| Content | Attribute | 0.55 ± 0.02 | 99.15 ± 0.03 | 3.19 ± 0.09 | 94.18 ± 0.21 | 0.93 ± 0.04 | 98.26 ± 0.05 | 3.45 ± 0.06 | 93.58 ± 0.14 |
| Content | Object | 0.50 ± 0.03 | 99.18 ± 0.03 | 3.85 ± 0.10 | 92.82 ± 0.16 | 0.89 ± 0.02 | 98.37 ± 0.03 | 3.75 ± 0.02 | 92.86 ± 0.05 |
| Content | Relation | 0.79 ± 0.03 | 98.72 ± 0.03 | 4.65 ± 0.06 | 91.45 ± 0.21 | 1.37 ± 0.05 | 97.49 ± 0.12 | 5.14 ± 0.03 | 90.57 ± 0.05 |
| Content | Entity | 0.68 ± 0.08 | 98.93 ± 0.11 | 5.26 ± 0.17 | 91.08 ± 0.11 | 0.99 ± 0.03 | 98.27 ± 0.08 | 4.98 ± 0.10 | 91.25 ± 0.14 |
| Content | Multi | 2.61 ± 0.10 | 96.34 ± 0.12 | 5.26 ± 0.09 | 91.49 ± 0.29 | 3.46 ± 0.04 | 95.12 ± 0.08 | 5.39 ± 0.05 | 91.20 ± 0.12 |
| Content | Other | 0.71 ± 0.09 | 98.31 ± 0.24 | 3.42 ± 0.41 | 90.80 ± 0.93 | 1.31 ± 0.17 | 96.90 ± 0.27 | 6.67 ± 0.33 | 85.13 ± 0.99 |
| Meaning | Unrelated | 0.56 ± 0.02 | 99.12 ± 0.02 | 3.67 ± 0.09 | 93.48 ± 0.11 | 1.00 ± 0.01 | 98.23 ± 0.05 | 3.86 ± 0.03 | 93.09 ± 0.11 |
| Meaning | Opposite | 0.60 ± 0.00 | 99.05 ± 0.01 | 3.28 ± 0.11 | 93.88 ± 0.24 | 0.99 ± 0.05 | 98.10 ± 0.05 | 3.54 ± 0.02 | 93.22 ± 0.03 |
| Meaning | Related | 0.61 ± 0.01 | 99.07 ± 0.03 | 3.45 ± 0.05 | 93.74 ± 0.18 | 0.92 ± 0.03 | 98.28 ± 0.04 | 3.67 ± 0.03 | 93.19 ± 0.02 |
| Meaning | Similar | 0.44 ± 0.08 | 99.22 ± 0.03 | 3.32 ± 0.07 | 94.17 ± 0.15 | 1.02 ± 0.02 | 98.26 ± 0.11 | 3.59 ± 0.11 | 93.73 ± 0.64 |
| Meaning | Uncertain | 0.57 ± 0.01 | 99.10 ± 0.03 | 3.82 ± 0.03 | 93.02 ± 0.16 | 1.01 ± 0.02 | 98.17 ± 0.02 | 3.76 ± 0.01 | 93.01 ± 0.10 |
| Meaning | N/A | 1.17 ± 0.13 | 97.29 ± 0.26 | 7.75 ± 0.35 | 82.62 ± 0.78 | 2.18 ± 0.15 | 95.22 ± 0.42 | 9.05 ± 0.10 | 80.16 ± 0.47 |
| Meaning | Multi | 2.61 ± 0.10 | 96.34 ± 0.12 | 5.26 ± 0.09 | 91.49 ± 0.29 | 3.46 ± 0.04 | 95.12 ± 0.08 | 5.39 ± 0.05 | 91.20 ± 0.12 |
| Operation | Substitution | 0.58 ± 0.01 | 99.10 ± 0.02 | 3.58 ± 0.07 | 93.52 ± 0.15 | 0.99 ± 0.02 | 98.20 ± 0.04 | 3.74 ± 0.01 | 93.13 ± 0.07 |
| Operation | Deletion | 1.30 ± 0.17 | 96.42 ± 0.31 | 8.27 ± 0.63 | 79.15 ± 1.10 | 2.28 ± 0.16 | 94.06 ± 0.61 | 10.38 ± 0.15 | 75.44 ± 0.51 |
| Operation | Insertion | 0.88 ± 0.16 | 98.63 ± 0.18 | 5.97 ± 0.68 | 89.44 ± 0.74 | 1.76 ± 0.20 | 96.96 ± 0.15 | 5.75 ± 0.17 | 89.35 ± 0.51 |
| Operation | Multi | 2.61 ± 0.10 | 96.34 ± 0.12 | 5.26 ± 0.09 | 91.49 ± 0.29 | 3.46 ± 0.04 | 95.12 ± 0.08 | 5.39 ± 0.05 | 91.20 ± 0.12 |

交叉后删除短板被显著放大，WavLM-Large 删除 Fake-F1 从 E1 的 96.42% 跌至 E2 的 79.15%，下降 17.27 个百分点，XLS-R 从 94.06% 跌至 75.44%，下降 18.62 个百分点，约为总体落差的 3 倍。两者 E2 删除 EER 分别达 8.27% 与 10.38%，为全表生成器与操作组合中的最高值，Fake-F1 则为最低值。相比之下替换在 E2 仍保持 93% 以上，其它内容与语义类别的 E1 到 E2 落差也小于删除，表明删除与 SSR-Speech 的组合是两种表征共同的最难条件，但时长与篡改占比等成因尚未分离。

#### 句子新颖度影响较小而统计效应量很小

除编辑类型外，测试句是否在训练中出现过也可能影响定位，下表按已见与未见句子拆分总体与分生成器性能。先看混合行已见与未见差距，再看 E1 与 E2 各自是否稳定，特别关注 E2 在未见句下是否出现额外回落。该划分直接检验模型是否依赖训练中见过的句子内容，而非真正的篡改声学线索。

| Condition | Gen. | WavLM-Large EER | WavLM-Large Fake-F1 | XLS-R EER | XLS-R Fake-F1 |
| --- | --- | --- | --- | --- | --- |
| Seen | E1+E2 | 2.08 ± 0.04 | 96.35 ± 0.06 | 2.46 ± 0.01 | 95.45 ± 0.04 |
| Seen | E1 | 0.74 ± 0.01 | 98.88 ± 0.02 | 1.13 ± 0.01 | 97.95 ± 0.04 |
| Seen | E2 | 3.47 ± 0.07 | 93.60 ± 0.12 | 3.85 ± 0.04 | 92.75 ± 0.11 |
| Unseen | E1+E2 | 2.46 ± 0.05 | 95.88 ± 0.11 | 2.63 ± 0.02 | 95.46 ± 0.02 |
| Unseen | E1 | 0.77 ± 0.02 | 98.85 ± 0.01 | 1.24 ± 0.02 | 97.90 ± 0.03 |
| Unseen | E2 | 4.23 ± 0.09 | 92.65 ± 0.21 | 4.12 ± 0.03 | 92.82 ± 0.02 |

混合测试下已见与未见差距较小，WavLM-Large 从 96.35% 到 95.88%，XLS-R 几乎持平在 95.45% 附近。分生成器看 E1 近乎不变，E2 则更敏感，WavLM-Large 在 E2 上从 93.60% 降至 92.65%，EER 从 3.47% 升至 4.23%，XLS-R 在 E2 上变化较小。结果表明句子重复不能解释总体定位行为，未见句只给 E2 带来附加难度，且该附加难度在 WavLM-Large 上更明显。

统计层面按话语 Fake-F1 对每轴、每表征、每种子做 Kruskal-Wallis 检验并报告 epsilon2 效应量与 Cramér's V 轴间关联，所有检验 p 均小于 0.05，但 epsilon2 仅约 0.008 至 0.010，最优到最差差距虽存在，分组只能解释话语间变异的很小部分。结合测试集规模很大，显著性本身在意料之中，不能据此认为分类轴决定了单句成败，缺失的时长与声学连续性分析仍是主要缺口。

### 平均分掩盖的短板与复现选型建议：何时可信何时需补验证

平均分掩盖短板是本文的核心提醒，总体 95% 以上的 Fake-F1 并不能保证删除与 SSR-Speech 组合同样可靠，而该组合的成因尚未分离。编辑时长、边界声学连续性、篡改帧占比与生成器特有伪影都可能在 E1 与 E2 删除之间存在系统差异，现有分组无法区分。统计上分组效应量仅约 0.008 至 0.010，说明单句成败主要由分组之外的因素决定，且评估仅限离线帧级指标与两个编码器同一 SAL 下游。

复现层面需区分三件事，数据方面 E1 与 E2 子集公开且划分明确，训练方面批大小、学习率、衰减、轮数与 3 个种子均已披露，但计算硬件、训练耗时、编码器是否冻结、推理延迟与显存均未披露。本次未发现经验证的代码与权重资源，因此不能声称系统可直接运行。复现第一步应重建单声道 16 kHz 预处理、4 s 切段、20 ms 到 160 ms 标签对齐与 S3PRL 加权特征，再用相同 SAL 配置在合并训练集上训练并按三轴切片评估。

工程选型上，若应用需定位删除类编辑或面对 SSR-Speech 风格合成，不应只看总体分数选型，而应单独验证删除与 E2 个条件，并补做时长与篡改占比受控对比。若以 VoiceCraft 风格替换为主，现有两种表征均已很强，WavLM-Large 略优可优先尝试。原文未提供试听演示页，无法通过听感对照边界不连续性，未来工作需在控制时长后复测，并扩展到未公开生成器与流式低延迟条件后再做部署判断。

#### 音频主路与转录旁路的分工

方法上的分工在原文图示中表述为实线音频主路与虚线转录元数据旁路，前者负责训练与推理，后者仅用于事后切片评估。音频先转单声道 16 kHz，按 4 s 切段并以 0.5 概率做 RawBoost，再经 WavLM-Large 或 XLS-R-300M 提取特征，两者均为 24 层 Transformer、16 注意力头与 1024 维隐表示，并经 S3PRL 加权组合后送入同一 SAL 下游。下游统一采用 SSL_SeqModel_8Labels_2Loss 结构与 cf 序列模型并做平均池化，训练中以跨段混合降低对特定真伪过渡模式的依赖。转录派生的内容、含义与操作标签从不对模型可见，其中操作来自转录对齐，内容借助 spaCy，含义借助 WordNet 与 all-MiniLM-L6-v2 相似度，N/A 与 Multi 分别表示无适用语义关系与多类混合。

#### 训练与切片评估的先后顺序

训练与评估按合并训练集、同一 SAL 配置、3 种子平均的顺序执行，批量大小为 32，Adam 学习率为 10−5、权重衰减为 10−4，最多 50 轮并以 StepLR 每 10 轮乘 0.1，跨段混合比例为 0.2，种子为 42、123 与 2026。数据划分上训练、开发与评测分别含 15,704、15,576 与 53,727 条，E1 与 E2 合并训练后仍分生成器评测。20 ms 参考标签对齐到 160 ms 输出后计算操纵类 Fake-F1 与等错误率，再按内容、含义、操作三轴与 E1、E2 生成器分别切片，并以 Kruskal–Wallis 与 ϵ2 检验分组一致性，用句级已见与未见划分检验句子新颖性，未来工作明确要求在控制编辑时长与篡改帧占比后复测删除差距。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.26903v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：音频主链路与转录本离线支路并行不相交且标签仅用于事后分组，从设计上隔离泄漏使操作与生成器效应得以分离。

- 核心优势：在53727条公开评测上以三个随机种子均值±标准差报告总体与分生成器对照，两种表示趋势一致并量化E2删除劣化约为总体差距3倍。

- 主要短板：评估限于同一SAL框架搭配两种表示且E3与E4未纳入，未覆盖边界感知等其他定位路线，删除成因未做时长与占比分层。

- 主要短板：统计检验虽每轴均显著但效应量仅0.008至0.010解释力有限，且Cramér's V未给出具体数值，大样本显著性需谨慎解读。

- 主要短板：原文未披露训练硬件耗时与推理实时率且无端到端延迟吞吐实测，部署代价与实时可行性无法判断。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
