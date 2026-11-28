---
title: "Robust Multimodal Emotion Recognition from Incomplete Modalities via Query-Based Unimodal and Cross-Modal Learning"
date: 2026-11-28
draft: false
description: "针对完整模态训练假设在现实缺失下失效的问题，本文提出仅用缺失输入训练的双查询融合框架，以单模态查询去噪与跨模态查询均衡实现多粒度预测，在两项基准的完整与缺失评测中取得最好成绩，但结论仍限于模拟缺失与监督分类范围。"
tags: ["注意力机制", "多模态学习", "多模态情感极性分析"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "仅用缺失输入实现稳健多模态情感识别的双查询融合"
paper_digest_original_title: "Robust Multimodal Emotion Recognition from Incomplete Modalities via Query-Based Unimodal and Cross-Modal Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper"
paper_digest_workbench_source_sha256: "957b8df17e92e746e4a5b2b50c98afc0e5387acb7d3c7dcd47cdfd14147b808e"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对完整模态训练假设在现实缺失下失效的问题，本文提出仅用缺失输入训练的双查询融合框架，以单模态查询去噪与跨模态查询均衡实现多粒度预测，在两项基准的完整与缺失评测中取得最好成绩，但结论仍限于模拟缺失与监督分类范围。"
paper_digest_reader_sections: [{"heading":"缺失模态下情感识别为何难以摆脱对完整数据的依赖","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"只用缺失输入完成预测的双查询融合总体思路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"查询如何在单模态去噪与跨模态均衡中分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"仅用缺失数据训练的多粒度监督与冻结边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"完整与缺失输入下的准确率与误差对比结论","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"查询模块与层数头数组合的消融归因","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"模拟评测之外的适用边界与复现核对","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["CyberAgent"],"name":"Ryo Miyoshi"},{"affiliations":["CyberAgent"],"name":"Mayu Otani"},{"affiliations":["CyberAgent"],"name":"Yuki Okafuji"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"7c7c58107a7b9243a7834f3172909d79293f085d884b7c90ae1b63fae29038bc","url":"/audio-research-portal/client/papers/2026-11-28/conference-e5139d5565c4dec294fffa5d/citation.bib"},"citation.json":{"sha256":"ecea1d8df8f83e6b6e4680f9f25ae8d83046078ffebdb9c4fa353798b7cf2a61","url":"/audio-research-portal/client/papers/2026-11-28/conference-e5139d5565c4dec294fffa5d/citation.json"},"citation.ris":{"sha256":"e54e9f1f93df9230931b19e87b04b40d0d1e1bd900c915056bb66674036d1282","url":"/audio-research-portal/client/papers/2026-11-28/conference-e5139d5565c4dec294fffa5d/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e6e4195830e7f5094cc518323d6f157eaf249af73c27fc55e30ee0767f278d6f","url":"/audio-research-portal/client/papers/2026-11-28/conference-e5139d5565c4dec294fffa5d/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "b758c9f4ebe90f4fcd005f5527fdd4408aa4c3d74d938905c25c80a8303ee7a4"
paper_digest_api_reader_plan_sha256: "71405f77ec6778c00f59318f26f1e3aaba0ad3dabaebcd31ef7bbff7125ff9df"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2181bf773b1088340191da589747483aeb08ba66126a2512765210db8a655859"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a0f4e532818f975cf37afeeb5f8a05ed810f51756419f628474548e574c23d81"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0d8550da3af88117ddd8b5272ed1ae61d393a4857c3896d2943e47adca8bbb75"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 仅用缺失输入实现稳健多模态情感识别的双查询融合

> 英文题目：*Robust Multimodal Emotion Recognition from Incomplete Modalities via Query-Based Unimodal and Cross-Modal Learning*

> 会议身份：`conference:wacv:2026:conference-paper-id:Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper`
> Track：WACV 2026



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.5/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ryo Miyoshi：CyberAgent
- Mayu Otani：CyberAgent
- Yuki Okafuji：CyberAgent

## 📌 核心摘要

**问题与瓶颈：** 多模态情绪识别以文本、视觉和音频序列为输入，输出情绪类别或情感极性分数，需要在部分观测缺失时仍保持判别能力。现实中传感器故障、传输错误与隐私约束常导致帧级或模态级缺失，而主流方法在训练与推理时默认模态完整，一旦缺失性能急剧下降。重建类方法试图从可观测模态补全缺失特征，易引入与情绪无关的冗余信息并形成瓶颈，且常假设固定缺失模式。蒸馏类方法依赖完整数据训练的教师模型向不完整输入的学生模型迁移知识，在全模态输入下反而表现受损，且训练阶段仍需完整序列，难以落地。

**核心思路与方法架构：** 与依赖重建或蒸馏的最接近基线相比，双查询融合（Dual-Query Fusion，DQF）的实质增量是仅用不完整输入训练，并以两类可学习查询分别强化单模态提取与跨模态融合，保留固定预训练编码器而更新查询与融合参数。单条样本的文本、音频和视觉序列先经 MERBench 预提取特征并以零向量填充缺失帧，再经固定编码器得到嵌入表示，训练时每种模态的掩码率在 0 至 1 范围内按小批量随机采样。查询单模态注意力（Querying Unimodal Attention，Q-UA）为每种模态维护可学习查询，查询经多头自注意力（Multi-Head Self Attention，MHSA）更新与层归一化后与输入特征逐元素相加，再送入 Transformer 编码器得到模态表示，以语义抽象抑制缺失区域噪声。查询跨模态注意力（Querying Cross-modal Attention，Q-CA）为每对模态维护共享查询并依次与两模态特征交互，经对称拼接与线性层融合后连同 [CLS] 令牌输入 MHSA，不同粒度的单模态、双模态与三模态特征分别经各自多层感知机监督并拼接输出，整体按可使用完整已取得序列的方式完成分类或回归。

**关键实验与核心代价：** 在 CMU-MOSEI 完整模态设置下，DQF 的 7 分类准确率（Acc.7）为 55.6，高于最强完整模态模型 MulT 的 53.8，二分类准确率（Acc.2）为 86.9，高于 DMD 的 86.7，平均绝对误差（Mean Absolute Error，MAE）为 0.520，低于 MulT 的 0.532。在 MELD 完整模态设置下，DQF 的加权平均召回率（Weighted Average Recall，WAR）为 63.1，高于 DMD 的 61.9，非加权平均召回率（Unweighted Average Recall，UAR）为 40.4，高于 MulT 的 39.6。在随机帧缺失与零向量填充的不完整设置下，以指标曲线下面积（Area Under Indicators Line Chart，AUILC）汇总缺失率为 0.0 至 1.0 的表现，CMU-MOSEI 三模态同时缺失时 DQF 的 Acc.7 为 52.9，高于最强基线 UMDF 的 50.4，MELD 同配置下 WAR 为 59.0，高于 TFR-Net 的 57.0，UAR 为 34.9，高于 TFR-Net 的 33.4。关键消融显示去掉 Q-CA 的性能下降大于去掉 Q-UA，以 MulT 替代 Q-CA 虽优于替换为拼接后 Transformer 但仍低于 DQF，6 层 4 头配置在多数缺失组合下取得最高准确率与最低误差。效率方面原文称补充材料中 DQF 在多数情况下参数量、计算量与推理时间低于最优基线，主文未给出可核对的具体数值。

**适用边界与深读导览：** 上述结论成立前提是基于 MERBench 预提取特征与帧级随机掩码加零向量填充的模拟缺失评测，覆盖 7 种模态缺失组合与 0.0 至 1.0 的缺失率，其中全模态完全缺失的 1.0 配置被排除，未覆盖真实传感器失效与自然缺失分布下的表现。监督情绪分类与情感回归之外的更广泛情感任务、跨域泛化以及资源受限部署的实测延迟与功耗均未验证，论文明确将真实不完整数据验证列为未来工作。欲深究加性查询交互与对称跨模态融合的公式含义可查阅方法概述和架构，欲核对完整与缺失设置下的数值对比与消融细节可查阅实验结果与细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 缺失模态下情感识别为何难以摆脱对完整数据的依赖

多模态情感识别需要综合文本、音频与视觉 3 类线索，判断说话人的情感状态，输入可记为 3 条序列构成的集合，输出在 CMU-MOSEI 数据集上为 -3 到 +3 的情感分，在 MELD 数据集上为 7 类基本情感中的一类。文本偏向语义，音频携带韵律与能量变化，视觉反映表情与头部动作，三者在时间粒度与特征分布上差异明显。该任务在人机交互中有重要作用，只有融合多路信号才能更准确地理解情绪，而现实中 3 路信号很少同时完整可用。

面向完整输入的已有方法主要分为两类，融合类直接合并特征，例如 TFN 方法用笛卡尔积捕捉高阶交互，MFM 方法用记忆单元融合，MulT 方法用方向性跨模态注意调整时序特征，解耦类则分离共享与特有表示，例如 MISA 方法划分共享子空间与特有子空间，DMD 方法分离无关分量。这些设计假设 3 模态完整对齐，训练与测试均能观测到全部序列，一旦某路缺失就会出现分布偏移，强势模态还会在联合优化中主导融合，导致任务无关表示与过拟合。

为应对缺失，近年工作引入辅助任务，重建类从可观测部分恢复缺失内容，例如 DiCMoR 方法与 IMDer 方法用生成模型恢复分布与语义一致性，TFR-Net 方法与 EMT-DLFR 方法用变换器结构结合局部与全局上下文，蒸馏类则让缺失输入的学生模仿完整输入的教师，例如 CorrKD 方法引入对比与原型引导，UMDF 方法用多粒度注意与动态融合。这两类思路都要求训练阶段能够获得完整多模态序列，重建还可能引入与情感无关的冗余特征，蒸馏的学生更适应缺失输入而在完整输入下表现下降，难以满足传感器故障或隐私约束下的实际需求。

现实中的缺失既有帧级随机丢失，也有整段连续丢失乃至整模态缺失，原文用随机掩码模拟这种情形，对每批每个模态在 0 到 1 范围内采样掩码比，并以零向量替换被遮挡帧，缺失率从 0.0 到 1.0 以 0.1 为步长变化，组合出 7 种缺失情形。核心矛盾在于如何在完全看不到完整序列的条件下，既从受损单模态中提取可信特征，又在模态间保持均衡互补，而不依赖重建完整信号或依赖完整数据训练的教师，这正是后文双查询融合要解决的问题。

### 只用缺失输入完成预测的双查询融合总体思路

总体框图自左向右展示了 3 路输入到最终情感输出的完整走向，左侧为文本句子、音频波形与人物视频帧，中间依次为冻结编码、单模态编码与多模态编码，右侧为多粒度分类器。阅读时可先沿箭头区分训练虚线与推理实线的分合，再注意蓝色单模态查询与粉色跨模态查询出现的位置，以及池化与拼接节点的汇合方式，后文将分别展开两类查询的内部计算与训练监督。

[![原论文 Figure 2：Overview of the DQF: Pretrained encoders first extract embeddings from each modality.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-2.png)

*论文图 2：冻结编码后经单模态查询与两两跨模态查询融合的多粒度预测总体流程（原论文 Figure 2）。*

图中左侧文本框内部分词语呈灰色遮挡，音频波形中段带有灰色覆盖，视频为多帧人物画面，三者分别进入带雪花标记的紫色编码器，表示参数冻结，输出为绿色块堆叠的嵌入序列。中间蓝色虚线框为单模态编码器，每路均含 Conv1D 模块、CLS 标记与蓝色 Q-UA 模块，输出的浅蓝序列进入右侧红色虚线框的多模态编码器，框内 3 个粉色 Q-CA 模块分别处理文本与音频、音频与视觉、文本与视觉的组合，经池化与 MHSA 模块汇合后送入右侧分类器，图例明确了各颜色与线型的含义。

与最近已有方法相比，该设计保留了统一的预提取特征，完全去掉了重建用的解码器与蒸馏用的教师分支，新增了两类可学习查询与多粒度辅助监督。特征采用 MERBench 标准集合，视觉先用 OpenFace 工具裁剪人脸再用 CLIP 预训练 ViT 模型编码，音频用 Wav2Vec 模型编码，文本用 Baichuan-13B 模型编码。每路嵌入先经一维时序卷积捕捉局部模式，缺失帧在输入阶段已置为零向量，掩码比在每批每个模态独立随机采样，原文未披露具体的特征维度与序列长度数值。

以教学例子为例，设输入文本为 You must very had your hands full. ，音频为对应波形，视觉为对应人物帧，流程可分为 5 个步骤。第一步，3 路缺失序列分别经冻结编码得到嵌入，第二步，各嵌入经 Conv1D 模块与位置编码并拼接 CLS 标记，第三步，与各自的可学习查询相加后经变换器编码得到单模态表示，第四步，两两组合经共享查询的跨模态注意得到 3 个双模态表示并池化，再与单模态池化及 CLS 标记一起经 MHSA 模块融合，第五步，将多粒度特征拼接后送入 MLP 分类器得到主预测，训练时各粒度还经独立分类器得到辅助预测。

### 查询如何在单模态去噪与跨模态均衡中分工

细节框图左侧展示了单模态查询的堆叠方式，右侧展示了跨模态查询的对称交互，最右侧粉色大框进一步放大了查询与两路模态特征的点积计算。阅读时可先看底部彩色查询块如何进入多头自注意，再看查询更新后与输入特征汇合的位置有何不同，左侧为相加注入，右侧为以查询为中介的跨模态注意，N 次标记表示整组操作的重复次数。

[![原论文 Figure 3：Overview of Q-UA and Q-CA.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-3.png)

*论文图 3：单模态相加注入查询与跨模态共享查询对称交互的内部结构（原论文 Figure 3）。*

左列底部为彩色可学习查询，向上经多头自注意与加和归一后，与左侧输入特征在相加符号处汇合，再经多头自注意、加和归一、前馈与加和归一后输出顶部绿色序列，左侧标有 N 次循环。右列底部同样为可学习查询，经多头自注意与加和归一后进入粉色的基于查询的跨模态注意，同时接收绿色模态 Hα 与橙色模态 Hβ ，再经加和归一、前馈与加和归一后输出。最右侧粉色放大显示，下方查询先经一次点积注意调制，再分别与两路模态做上层点积注意，两路结果拼接后经线性层输出。

单模态查询的核心直觉是避免对缺失区直接做自注意放大噪声，查询先经多头自注意与层归一化更新，再与输入嵌入逐元素相加后送入变换器编码器。这种相加注入让查询成为自适应的引导信号，促使编码器关注可信片段而压制零向量区域的影响。由于查询在每一层都经自注意更新并重新注入，模型在多样缺失模式训练下逐渐学会突出信息性特征，过滤无关内容，从而在严重缺失下仍能得到稳健的单模态表示。

跨模态查询的核心直觉是用共享查询作中介实现均衡交互，而非让两路特征直接相互注意。查询更新后依次以两路模态为键进行注意，一次以一侧模态调制查询，再以另一侧模态调制，双向分别得到两种方向的表示，拼接后经线性层得到该模态对的融合表示。对文本与音频、音频与视觉、文本与视觉 3 对分别计算并平均池化，再与 CLS 标记一起经 MHSA 模块捕捉高阶交互，既缓解强势模态主导，又保留弱势模态的互补信息，原文未披露各表示的具体维度数值。

### 仅用缺失数据训练的多粒度监督与冻结边界

对比框图分为上下两部分，上方为既往两类做法，下方为本方法，蓝色虚线框表示缺失输入，红色实线框表示完整输入。阅读时可先看上方重建分支如何从缺失指向完整，再看中间蒸馏分支中教师与学生的位置关系，最后看下方本方法如何仅从缺失框与三行查询块出发，经双编码器与 MLP 模块直接得到回归或分类输出，体会训练对完整数据的依赖差异。

[![原论文 Figure 1：Comparison of approaches for robust MER under incomplete-modality conditions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-1.png)

*论文图 1：既往重建与蒸馏依赖完整数据与本方法仅用缺失输入的训练范式对比（原论文 Figure 1）。*

顶部蓝色虚线框内文本部分变灰，波形中段被灰块覆盖，人物帧变暗，经橙色编码器与紫色解码器指向右侧红色完整框，框内文本完整，波形连续，人物帧清晰，标注为重建。中部红色完整框经教师 DNN 模型得到特征条与右侧回归散点或分类柱状小图，下方蓝色虚线缺失框经学生 DNN 模型得到对应特征与小图，中间以蒸馏箭头连接。底部蓝色虚线缺失框与下方三行浅蓝查询块共同进入蓝色编码器与粉色编码器，经 MLP 模块后指向右侧回归散点或分类柱状图，表示直接预测。

训练时预训练编码器的参数冻结，仅更新 Q-UA 模块、Q-CA 模块、MHSA 模块与各分类器，总损失为主任务损失与各粒度辅助损失之和，辅助集合包含文本、音频、视觉、文本与音频、文本与视觉、音频与视觉以及 3 模态共七项。每一粒度的表示都经独立 MLP 分类器得到预测，CMU-MOSEI 数据集上用平均绝对误差，MELD 数据集上用交叉熵，这种多粒度监督迫使每一层级独立学习判别表示，既增强对不同缺失组合的适应性，又促进跨模态交互在各级得到优化。

优化采用动量随机梯度下降，学习率为 1e-5，批大小为 64，训练 100 轮，Q-UA 模块与 Q-CA 模块均设为 6 层，MHSA 模块设为 4 头，所有结果在 5 个随机种子上平均后报告，训练在 NVIDIA RTX 3090 GPU 上基于 PyTorch 框架实现。掩码比在每批每个模态独立随机采样，缺失帧以零向量填充，推理走实线流程，将池化后的多粒度特征拼接后经主分类器输出，训练虚线额外经过各分支分类器计算辅助损失，原文未披露延迟、吞吐或显存等开销数值。

### 完整与缺失输入下的准确率与误差对比结论

评测使用 CMU-MOSEI 数据集与 MELD 数据集，前者包含 22,856 个视频片段，按 16,326 个、1,871 个与 4,659 个划分训练、验证与测试，情感分范围为 -3 到 +3，指标为七分类准确率、二分类准确率与平均绝对误差，除平均绝对误差越低越好外其余越高越好。后者包含 13,708 条话语与 1,433 段对话，标注 7 类情感，指标为加权平均召回率与非加权平均召回率。为公平起见，所有方法采用相同的 MERBench 预提取特征，复现了 14 种可复现已有方法，包括 9 种面向完整输入的方法与 5 种面向缺失输入的方法。

#### 完整输入下的准确率与误差

在完整输入下，DQF 在 CMU-MOSEI 数据集上取得 55.6% 的七分类准确率、86.9% 的二分类准确率与 0.520 的平均绝对误差，相比面向缺失输入的已有最好水平分别高 3.0 个百分点、高 0.4 个百分点并低 0.029，相比面向完整输入的已有最好水平分别高 1.8 个百分点、高 0.2 个百分点并低 0.012。在 MELD 数据集上取得 63.1% 的加权平均召回率与 40.4% 的非加权平均召回率，相比面向缺失输入的最好水平分别高 2.0 个百分点与 0.5 个百分点，相比面向完整输入的最好水平分别高 1.2 个百分点与 0.8 个百分点。

联合表征投影图按两行四列组织，上行为完整输入，下行为 3 模态缺失率均为 0.9 的重度缺失，列从左到右依次为 MulT 方法、EMT-DLFR 方法、CorrKD 方法与 DQF 方法，顶部图例用 7 种颜色表示 -3 到 +3 的情感分。阅读时可先对比上下两行整体形状的变化，再看同行不同列之间蓝色与红色点群的分离程度，以及是否存在碎裂为多个小块或混色严重的情形，从而判断各方法在缺失下的表征稳定性。

[![原论文 Figure 4：Visualization of the joint multimodal representation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59617d10200e/figure-4.png)

*论文图 4：完整输入与重度缺失下四种方法联合表征的二维投影分布对比（原论文 Figure 4）。*

上行四列均呈半环形，左侧蓝色点群对应负向情感，右侧红色点群对应正向情感，中间灰色点群对应中性，分布相对连贯。下行最左列碎裂为左上细长条与右下多个混色小块，蓝红交织严重，中间两列虽保留大致半环但出现分离的小簇且边缘混色增多。最右列在重度缺失下仍保持连贯半环，左侧蓝色与右侧红色分离较清晰，中部灰色过渡自然，仅底部有一个微小孤立点，直观上与定量指标中 DQF 的领先趋势一致。

#### 随机缺失下的整体指标趋势

在随机缺失置零的 AUILC 汇总下，DQF 在 7 种组合中均为最好，AUILC 越高越好，除平均绝对误差越低越好。在 CMU-MOSEI 数据集上 3 模态同时缺失的最难情形下取得 52.9% 的七分类准确率，超出最好基线 2.5 个百分点，在 MELD 数据集上对应情形取得 59.0% 的加权平均召回率与 34.9% 的非加权平均召回率，分别超出最好基线 2.0 个百分点与 1.5 个百分点。跨行看，文本缺失带来的下降通常大于视觉或音频缺失，面向完整输入训练的方法在 AUILC 上常优于面向缺失训练的方法，但 DQF 仅用缺失输入训练仍全面领先。原文仅报告 5 次平均，未给出标准差或置信区间，评测均为自动指标而无人工听测，连续缺失与正态填充的设置仅在补充材料中，正文只报告随机缺失置零的结果。

### 查询模块与层数头数组合的消融归因

消融在 CMU-MOSEI 数据集的缺失条件下以 AUILC 为汇总，比较了 3 个变体，去掉单模态查询后以普通变换器编码器替代，去掉跨模态查询后以拼接特征的变换器替代，以及保留单模态查询但将跨模态部分换为 MulT 方法。层数与头数消融比较了 2 层 2 头、2 层 4 头、4 层 4 头、6 层 4 头与 6 层 6 头 5 种组合，覆盖 7 种缺失情形，指标仍为七分类准确率、二分类准确率与平均绝对误差。

去掉跨模态查询后的下降通常大于去掉单模态查询，例如在仅视觉缺失下前者为 52.3%、85.3% 与 0.546，后者为 52.7%、86.3% 与 0.551，而完整 DQF 为 55.5%、87.1% 与 0.520，说明跨模态均衡更为关键。将跨模态部分换为 MulT 方法后提升至 53.9%、84.9% 与 0.533，优于直接去掉跨模态查询，但仍低于 DQF，表明显式模态间注意有效，而以共享查询为中介的对称融合更具优势。单模态查询则主要改善受损输入的编码稳定性，两者共同支撑补偿与对齐。

层数与头数的结果显示加深总体有益，2 层 2 头在仅视觉缺失下为 54.6%、86.5% 与 0.524，4 层 4 头为 54.6%、86.6% 与 0.524，6 层 4 头达到 55.5%、87.1% 与 0.520，在多数组合下准确率最高且误差最低。继续将头数增至 6 并未带来进一步增益，6 层 6 头回落至 54.8%、86.4% 与 0.529，说明 6 层 4 头取得了较好的平衡，过多的头数不能持续提升效果，实际选型需权衡精度与计算开销。

现有消融未覆盖多粒度辅助损失中各分支的单独贡献，也未对比冻结预训练编码器与微调的差异，以及随机掩码与连续掩码训练策略的影响。从已有结果看，单模态查询负责压制缺失噪声，跨模态查询负责避免强势模态主导，两者缺一都会在全部 7 种组合下一致下降，且跨模态部分的差距更大，这与方法设计中先去噪后均衡的分工是一致的。

### 模拟评测之外的适用边界与复现核对

当前结论建立在模拟缺失之上，缺失帧以零向量替换，掩码比随机采样，缺失率以 0.1 为步长覆盖 0.0 到 1.0，并组合出 7 种情形，3 模态同时为 1.0 的情形已排除。这种模拟能系统比较鲁棒性，但与真实传感器故障、传输丢包或隐私遮挡的分布仍有差距，连续缺失与正态填充的情形仅在补充材料中，正文未将其作为主要依据，真实缺失采集数据的验证仍有待未来工作完成。

任务层面仅覆盖两项基准上的监督情感识别，CMU-MOSEI 数据集为回归与分类混合评测，MELD 数据集为多方对话中的七分类评测，未涉及开放词汇情感理解、更长上下文推理或其余情感库。大视觉语言模型在两项基准上准确率偏低且计算需求较高，在资源受限场景下不如轻量融合实用，但 DQF 是否适用于更大规模或跨语种数据，原文未做验证。从分工看，单模态查询提炼侧重在缺失输入中突出任务相关模式，跨模态查询融合以共享查询居中协调两路交互以保留弱模态互补信息，多粒度目标再对各组合分别监督，三者搭配兼顾缺失补偿与模态协同，换任务仍需复核。

复现需采用相同的 MERBench 预提取特征与划分，优化器、学习率、批大小、轮数、层数与头数均按原文固定，并在 5 个随机种子上平均。原文未给出代码、权重、数据或演示的公开链接，本次也未发现可验证的公开资源，因此无法直接运行原始系统，需自行实现查询模块与多粒度损失。执行上，预训练编码器参数固定，特征先经一维时间卷积捕捉局部时序，再与更新后的查询相加送入编码器，成对融合后与分类标记一起做全局整合。附录与补充材料包含额外缺失模式与效率对比，称 DQF 参数量与推理时间多低于已有方法，但正文未给出具体数值，延迟与显存等部署指标仍需实测。

工程选型上，文本缺失通常带来更大下降，应优先保障文本链路的可靠性，视觉与音频可作为互补。在模型容量上，6 层 4 头在多数缺失组合下表现最好，继续增加头数收益有限，可作为精度与开销的平衡点。消融中去掉跨模态查询融合的下降大于去掉单模态查询提炼，替换为常规跨模态注意力仍不及原文设计。由于 DQF 仅用缺失输入训练仍能泛化到完整输入，适合难以采集完整数据的场景，但在上线前仍需在真实缺失分布上复核，并关注极端缺失下的失效模式。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音频等三模态均采用预提取特征而非原始波形，原文未披露采样率、帧长、步长、码率或前瞻延迟，缺失模拟在特征帧级以零向量替换实现
- **训练与评测数据**：训练与评测使用 CMU-MOSEI 数据集与 MELD 数据集，前者包含 22,856 个视频片段并按 16,326 个、1,871 个与 4,659 个划分训练、验证与测试，情感分范围为 -3 到 +3，后者包含 13,708 条话语与 1,433 段对话并标注七类情感，特征采用 MERBench 标准预提取集合，训练仅用随机掩码模拟的缺失输入
- **算力与训练耗时**：所有模型均在 NVIDIA RTX 3090 GPU 上基于 PyTorch 框架实现并训练，DQF 训练采用动量随机梯度下降并在 5 个随机种子上取平均，原文未披露多卡并行或总耗时细节
- **核心超参数与配置**：学习率为 1e-5，批大小为 64，训练 100 轮，Q-UA 模块与 Q-CA 模块均设为 6 层，MHSA 模块设为 4 头，掩码比在每批每个模态 0 到 1 范围内随机采样，缺失帧以零向量填充
- **推理速度与部署开销**：原文未披露延迟、吞吐、显存或实时率等推理开销数值，补充材料称 DQF 在参数量、计算量与推理时间上多低于已有方法，但正文未给出具体数值，推理时直接经主分类器输出而无需重建或教师模型
- **开源产物与协议状态**：原文未给出代码、权重、数据或演示的公开链接，本次也未发现可验证的公开资源，复现需依据文中 MERBench 特征、超参与训练协议自行实现
- **附录与补充材料要点**：附录与补充材料涵盖连续缺失与正态填充下的额外评测、效率对比以及特征可视化讨论，指出 DQF 在多种缺失模式下保持稳定，但未提供真实缺失采集数据的验证

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.5/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Miyoshi_Robust_Multimodal_Emotion_Recognition_from_Incomplete_Modalities_via_Query-Based_Unimodal_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在CMU-MOSEI与MELD完整及三模态同时缺失设置下同时超越最强完整与不完整基线且有直接消融支撑。

- 核心优势：仅用不完整输入训练，以双查询分别强化单模态提取与跨模态融合，固定编码器隔离融合效应保证公平比较。

- 核心优势：采用MERBench统一特征复现14个基线，覆盖7种缺失组合与0.0至1.0缺失率的系统AUILC评测。

- 主要短板：五次随机种子运行仅报告平均值而未报告标准差与显著性检验，小幅领先的统计稳健性无法核对。

- 主要短板：评测依赖帧级随机掩码加零向量填充的模拟缺失，未验证真实传感器失效与自然缺失分布且列为未来工作。

- 主要短板：效率更优声称仅称补充材料中参数量计算量与推理时间更低，主文未给出任何可核对的具体数值。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
