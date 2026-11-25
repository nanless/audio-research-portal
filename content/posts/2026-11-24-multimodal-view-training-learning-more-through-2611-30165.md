---
title: "Multimodal View Training: Learning More Through Different Modalities"
date: 2026-11-24
draft: false
tags: [音频问答, 多模态学习, 数据增强, LoRA]
categories: [论文速递]
description: "针对同一事实换一种问法就失效的问题，论文提出同一监督下文本语音与打印图像三视图联合训练共享 LoRA，自适应加权在问答召回、遗忘质量与编辑泛化上带来两位数提升，代价是三倍前向训练开销且局部性与图像遗忘仍未解决。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30165"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "同一内容换三种模态呈现如何改善纯文本学习"
paper_digest_original_title: "Multimodal View Training: Learning More Through Different Modalities"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30165v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30165v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30165v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对同一事实换一种问法就失效的问题，论文提出同一监督下文本语音与打印图像三视图联合训练共享 LoRA，自适应加权在问答召回、遗忘质量与编辑泛化上带来两位数提升，代价是三倍前向训练开销且局部性与图像遗忘仍未解决。"
paper_digest_reader_sections: [{"heading":"同一份文本换三种模态呈现能否改善纯文本记忆与改写","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三条模态通路汇入同一语言模型的共享更新闭环","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"统一平均与温度加权的视图损失如何分配更新","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"先对齐连接器再冻结训练 LoRA 的两阶段流程","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"三任务平均增益与跨模态查询下的缺口闭合","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"共享分量与一致性的梯度激活三项检验","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"复现核对清单未解局限与工程选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["New York University"],"name":"Devang Kulshreshtha"},{"affiliations":["Snorkel AI"],"name":"Priyanka Kaswan"},{"affiliations":["Meta"],"name":"Minh Pham"},{"affiliations":["New York University"],"name":"Chinmay Hegde"},{"affiliations":["Technion – Israel Institute of Technology"],"name":"Niv Cohen"}]
paper_digest_abstract_sha256: "0974eed93a590eb52580847dfda3dc9d02f1251206b5a510a9e35d8b409e2346"
paper_digest_sidecars: {"citation.bib":{"sha256":"e7b7ec34a4529522f579b9c94b7380f8c54073acecfd7992a80041c9afbd70d5","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30165/citation.bib"},"citation.json":{"sha256":"dd90375f711319b6a2ab9297d696a2d061770485f3e62ca32c302bed7ceae078","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30165/citation.json"},"citation.ris":{"sha256":"94db8ecb9db3cd592e7c03b501a5f73b3b283d43bb5af85737b97a650484ad6a","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30165/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c1256a8436b70dcb419fb6601cb55665e03f39fe8ff567c1844673d425665396","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30165/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "0692758c0b1f9890da3a2c0af55d4cdcb3bede26ad08aaf7a1266ee4fad9cdc6"
paper_digest_api_reader_plan_sha256: "b21a980aef734001e5a7e678547522d0143324aed966910867f873dc8bff85e0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "560c7fea9bf6fa9ba94dd8c91345ce2f287ad52ad48fe362f8a0f907dfd33d41"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "de61119d293b26d06392c391bcf86d13d30b5925fbfde718da3889bac37428a6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5604cbc6c172117707c1c1e65cb04a56bcb0816cd4fe537c46ffcef7685942ad"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "806a9d27d183d2b9f33b904f41b65fd62e24f669d219250fa2f653f7adfd9391"
paper_digest_api_reader_resource_count: 7
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 同一内容换三种模态呈现如何改善纯文本学习

> 英文题目：*[Multimodal View Training: Learning More Through Different Modalities](https://arxiv.org/abs/2611.30165v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[数据增强](/audio-paper-digest-blog/papers/?concept=method.augmentation)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 7.4/10 | 技术严谨 7.0/10 | 实验充分 7.6/10 | 清晰度 6.9/10 | 影响力 3.8/10 | 开源 0.0/10 | 可复现 6.8/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Devang Kulshreshtha：New York University
- Priyanka Kaswan：Snorkel AI
- Minh Pham：Meta
- Chinmay Hegde：New York University
- Niv Cohen：Technion – Israel Institute of Technology

## 📌 核心摘要

**问题与瓶颈：** 本文处理文本问答、机器遗忘和知识编辑三类文本任务，输入为文本问题，输出为文本答案，评测关注换一种问法后能否保持正确。现有文本增广主要改写词句，可能改变原意或遗漏细节，而在输入嵌入上加均匀噪声或对称噪声只带来局部扰动，难以提供大幅不同的表示。多模态学习虽能利用多源信息，但通常需要收集或对齐多模态观测，无法直接用于只有文本监督的微调。

**核心思路与方法架构：** 与最接近的文本增广基线相比，本文的增量是保持监督不变，只改变输入呈现形式，用语音和印刷体图像视图提供内容相同但表示差异大的训练信号。对于问题 Where was Mira born，文本视图保留原字符串，语音视图用神经 TTS 合成为 16 kHz 单声道语音，图像视图用 Pillow 渲染为 896×448 白底黑字图片。三路分别经分词嵌入或冻结的音频编码器加连接器、视觉编码器加连接器映射到同一输入空间，再送入共享的 Qwen3-Omni-30B-A3B-Instruct 大语言模型。训练只更新注意力投影上的 LoRA 参数，其余权重与编码器和连接器冻结，损失为三视图任务损失的加权组合，温度趋于无穷时退化为平均，自适应版本给高损失视图更大权重。推理只保留文本通路，因此不增加推理计算，而多视图一致性压力促使更新偏向各视图共享的事实方向。

**关键实验与核心代价：** 在 TOFU 问答与遗忘和 ZsRE 编辑上，自适应多模态视图训练相对纯文本训练将问答召回率提高 15.2 个百分点，将遗忘质量提高 40.7 个百分点，将编辑泛化性提高 25.2 个百分点。四个基线平均的六个指标均值从 51.6% 升至均匀加权的 59.7% 和自适应的 62.8%，其中释义结合自适应方法取得最高的文本问答召回率 73.9%，对称噪声结合自适应方法取得最高的遗忘质量 71.3%。跨模态评测显示四个基线平均的编辑可靠性从文本 96.0% 跌至语音 37.5% 和图像 7.4%，而各自结合自适应方法后在三条通路上均超过 99%。主要代价是每个 step 需同时前向三路，有效批量需折算保持为 12，训练 optimizer 步数更多但收敛所需轮数更少。

**适用边界与深读导览：** 上述结论仅在连接器已对齐且编码器冻结、只更新 LoRA 并按释义验证集早停的条件下成立，语音重建字符错误率（CER ↓）平均 10.6% 高于图像 3.7%，因而语音视图更 noisy 且跨模态增益更依赖对齐质量。已知的退化是编辑局部性未改善且图像通路局部性仅 6% 至 9%，图像遗忘虽从 2.1 升至 10.8 仍处低位，遗忘质量的大幅跳变部分源于其 KS 检验 p 值定义对分布微小偏移敏感，未覆盖含噪语音、复杂版式图像或需保留无关知识的部署场景。若想深究加视图为何提高复述迁移，可查阅第 3 节定理 1 与命题 2 及附录 A 的最小范数推导；若想核对跨模态与文本大模型扩展，可查阅第 5.2 节至第 5.4 节与附录 C 和 D 的消融与表示一致性曲线。

## 🔗 开源与复现资源

- 论文所列链接：<https://huggingface.co/datasets/locuslab/TOFU> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/wangzn2001/Model_Editing_Hurt> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/rany2/edge-tts> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/jitsi/jiwer> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/locuslab/tofu> — 链接可访问（HTTP 200）

- 论文所列链接：<https://python-pillow.org> — 链接可访问（HTTP 200）

- 论文所列链接：<https://dejavu-fonts.github.io> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 同一份文本换三种模态呈现能否改善纯文本记忆与改写

大语言模型微调常面临同一事实换一种问法就答错的问题。已有增强多沿两种思路展开，一种改写词句，如复述、词语替换与回译，可能无意改变原意或丢失细节，另一种扰动嵌入，如 MixText、NEFTune 与 SymNoise 在输入嵌入上加均匀噪声或对称噪声，多为小范围局部变化。两种路线都难以在保留原内容的同时给出差异足够大的训练信号，这正是本文要解决的核心矛盾。

论文把任务形式化为文本数据集 D，包含输入 x 与监督 y，模态集合为文本 T、语音 A 与打印图像 I。渲染器把同一 x 分别保留为文本、合成为语音与渲染为图像，编码器与连接器把语音图像映射为语言模型可读的嵌入序列 z_m，三视图共享同一目标 y 与同一任务损失。对问答报告 ROUGE-L 召回率，对遗忘报告遗忘质量 FQ 与模型效用 MU，对编辑报告可靠性、泛化性与局部性，均为越高越好，推理时只用文本通路。

难点在于三视图在模型内部产生不同表征，若直接混训可能互相干扰。纯文本模型本就没有语音图像通路，需要先对齐外部编码器，否则嵌入不可读。不同通路损失大小不一，若简单平均可能被易视图主导。此外，理论上需要解释为何跨模态训练能把更新推向共享事实方向而非表面措辞方向，以及实验增益在何种公平比较与代价下成立。

### 三条模态通路汇入同一语言模型的共享更新闭环

阅读架构图时可先沿左侧示例 x 的 3 条分叉向右追踪，再看中间嵌入与编码器如何汇入右侧共享模型，最后看底部同一监督如何产生 3 个损失并形成一次共享更新。颜色区分了文本、语音与图像 3 条通路，虚线回路表示梯度只更新共享部分，这种布局直接对应后文的冻结边界。

![原论文 Figure 1：MVT: same supervision, different views.](/audio-paper-digest-blog/images/papers/2611.30165/figure-1-e6a51aa3685160bc.png)

*论文图 1：同一监督下文本语音与打印图像三视图汇入共享语言模型并合并损失更新（原论文 Figure 1）。*

图中顶部浅蓝 TEXT 分支显示问题 Where was Mira born？，经分词直接得到 Text embeddings。中间橙色 AUDIO 分支用喇叭图标与波形表示合成语音，依次经过 Audio encoder 与 Connector。底部紫色 IMAGE 分支把同一英文问题打印为图像，依次经过 Vision encoder 与 Connector。3 路箭头共同指向右侧 Shared model f_ω。底部 Supervision y 给出答案 Luma，同一任务目标下计算 3 个损失 ℒ(f_ω(z_T)，y) 等，实线下行与虚线上行的 shared update 表示三损失合并后只更新共享语言模型。

为讲清嵌入环节，公式需要把渲染、编码与映射三步压缩为一个符号。z_m(x) 表示视图 m 的输入表征，r_m 为渲染器，E_m 为预训练模态编码器，ψ_m 为轻量连接器，Embed 为分词器与词嵌入，m 取 T、A 或 I。该式的输出将直接作为共享模型 f_ω 的输入并决定后文每个视图的损失。

\[z_{m}(x)=\phi_{m}(r_{m}(x))=\begin{cases}\operatorname{Embed}(x),&m=T,\\ \psi_{m}(E_{m}(r_{m}(x))),&m\in\{A,I\},\end{cases}\]

该式的物理直觉是用同一语言内容的不同载体产生差异大的内部表征，文本通路保留原始离散符号，语音图像通路先经声学视觉编码再投影到同一嵌入空间。关键是连接器是否已对齐，若未对齐则 ψ_m(E_m(·)) 与文本嵌入不在同一分布，共享模型无法理解。极端下若语音噪声过大或图像模糊，z_A 与 z_I 会偏离原句，训练会更依赖文本视图。输出的嵌入序列决定了下一步任务损失的大小与梯度方向，是三视图能否互相约束的起点。

### 统一平均与温度加权的视图损失如何分配更新

与最近基线相比，MVT 保留了原任务损失与目标答案，替换的是输入呈现与梯度来源。复述基线只在文本侧增加一个 DIPPER 改写样本，NEFTune 与 SymNoise 只在文本嵌入上加噪，而 MVT 增加语音与图像两条新通路并把三损失合并为一次更新。信号规格上语音由 edge-tts 的 en-US-AriaNeural 合成后重采样为 16 kHz 单声道，图像由 Pillow 以黑色 DejaVu Sans 字体渲染在白色 896×448 画布上，任务问题用 32 pt 按 40 字符换行，对齐句子用 28 pt。

#### 温度控制的损失组合

每个视图先在小批量 B 上计算各自任务损失 L_m，MVT 再把三者合成为总体目标 ℒ_MVT。公式中 τ 为温度系数，控制对高损失视图的倾斜程度，w 为归一化权重向量 L 经 softmax 得到。该式的计算目标是在一次前向后得到可反传的加权损失，其输出梯度将直接更新 LoRA 参数。

\[\mathcal{L}_{\mathrm{MVT}}(\omega;B)=\tau\log\left(\frac{1}{3}\sum_{m\in\mathcal{M}}\exp\left(\frac{L_{m}(\omega;B)}{\tau}\right)\right).\]

该式的统计直觉是把难视图放得更重，τ 趋于无穷时退化为三视图均匀平均，各占三分之一，τ 有限时权重为 softmax(L/τ)，损失越大的视图权重越大，τ 越小则越集中于最难视图。关键项是温度退火，实验从 1.0 退火至 0.1，早期兼顾各视图，后期聚焦短板。极端下 τ 趋于 0 会只训练最难视图，可能抖动，τ 过大则难视图得不到补偿。输出的加权梯度是三视图梯度的凸组合，一次反传即同时约束共享参数向三视图都好的方向移动。

#### 一秒输入的端到端走向

以问题 Where was Mira born？ 为例，1 文本通路经分词得到词嵌入序列，直接进入共享模型。2 语音通路把同一问题合成为 16 kHz 波形，1 秒约 16,000 个采样点，经 650M 参数的 AuT 音频编码器提取声学特征，再经两层 MLP 连接器投影为文本嵌入空间的序列。3 图像通路把同一问题渲染为 896×448 打印图像，经 540M 参数的 SigLIP2-So400m 视觉编码器与连接器投影。三序列分别与同一答案 Luma 计算损失后合并，原文未披露各编码器的帧率、降采样倍数与隐藏维度，因此张量形状与帧数无法进一步展开，汇合点在共享模型输入处，拆分点在示例 x 的渲染处。

### 先对齐连接器再冻结训练 LoRA 的两阶段流程

#### 连接器对齐阶段

Qwen3-Omni 本身已具备对齐好的音频图像通路，可直接用于 MVT，而 Llama-3.1-8B、Yi-1.5-9B、OLMo-2-7B 与 Qwen2.5-32B 等纯文本骨干没有多模态通路。方法为每个骨干外挂冻结的 AuT 语音编码器与 SigLIP 图像编码器，再各接一个可训练的两层 MLP 连接器，中间用 GELU 激活。对齐数据为 WikiText-103 筛选的 49,000 句训练与 1,000 句验证，每句同时转语音与图像，输入为渲染视图，目标为原句本身，损失只计目标词元。

对齐目标是让冻结的语言模型能读懂新投影的语音图像嵌入，公式中 D_align 为对齐句分布，s 为原句，z_m(s) 为经编码器与待训练连接器得到的嵌入，ℓ_CE 为词元级交叉熵。该式的计算目标是最小化重构误差，其梯度只更新连接器 ψ_m 而不触及其他参数。

\[\mathcal{L}_{\mathrm{align},m}(\psi_{m})=\mathbb{E}_{s\sim D_{\mathrm{align}}}\ell_{\mathrm{CE}}\big(f_{\omega}(z_{m}(s)),s\big),\]

该式的直觉是把语音图像理解转写为文本重述任务，文本通路的转写能力作为锚点，迫使连接器把声学视觉特征映射到同一语义空间。关键是编码器与语言模型全程冻结，只有连接器可动，避免破坏原有文本能力。极端下若语音转写字符错误率 CER 过高，说明投影仍有噪声，后文任务训练会更依赖文本与图像。输出的已对齐连接器在下一阶段被冻结，成为固定的翻译层。

#### 只更新 LoRA 的任务训练与推理

对齐完成后冻结编码器、连接器与原始权重，只训练共享语言模型注意力投影上的 LoRA 参数，Qwen3-Omni 上为 48 层查询键值输出投影的 rank 32 配置，共 26.7M 参数占 0.08%。优化用 AdamW，学习率 1e-4，10% 线性预热后线性衰减，bfloat16，有效批量 12，MVT 三通路同批前向时累积步数除以 3，最多 12 轮。遗忘任务先在全量 TOFU 上微调 5 轮，再用 SimNPO 遗忘 forget05 并保留 retain95，编辑任务直接用交叉熵学习新答案。验证用德语回译的 50 题释义集，按长度归一化 NLL 相对降低 5% 才更新最优点，推理时丢弃音频图像分支，不增加计算。

### 三任务平均增益与跨模态查询下的缺口闭合

评测覆盖问答、遗忘与编辑 3 类文本任务，均用原任务损失与贪心解码生成最多 100 个新词元。问答在 TOFU 全量上微调后在 600 道释义问题上算 ROUGE-L 召回率，遗忘在 forget05 上用 SimNPO 遗忘后比较遗忘质量 FQ 与模型效用 MU，编辑在 1,000 条 ZsRE 上学习新答案后报告可靠性、泛化性与局部性。所有方法训练至收敛并用同一回译验证集按 NLL 选点，每种配置重复 3 次报告均值与标准差，MVT 的音频图像视图均用原问题且不加噪声，文本增强只加在文本通路，保证比较公平。

#### 主干模型的平均增益与未改善项

下表为论文完整主表的精简摘表，仅展示问答召回率、遗忘质量、编辑泛化性与平均列。分数均为百分比，最后一列为完整表 6 个指标均值的平均，可先看平均行把握整体，再细看关键指标提升，模型效用可靠性与局部性等其余列见论文完整表。

| Method | QA ↑ Recall | Unlearning ↑ Forget quality | Editing ↑ Generality | Average ↑ |
| --- | --- | --- | --- | --- |
| Average of the four | 45.8 | 18.4 | 69.8 | 51.6 |
| + MVT | 54.8 | 33.8 | 88.3 | 59.7 |
| + MVT (adaptive) | 60.3 | 45.3 | 90.5 | 62.8 |

平均 4 种基线时文本单独训练平均为 51.6%，叠加均匀 MVT 升至 59.7%，自适应 MVT 进一步升至 62.8%，对应均匀与自适应分别带来约 9.0 与 14.9 个点的平均增益。正文报告自适应相对文本单独训练在问答召回率上提升 15.2 个点，遗忘质量提升 40.7 个点，编辑泛化性提升 25.2 个点。分项看平均行中问答遗忘与泛化均以自适应取值更高，但论文完整表还报告模型效用均匀 MVT 为 66.2%，自适应为 65.3%，局部性文本单独训练为 17.5%，叠加后为 15.7% 与 15.9%，本节精简摘表未展示这两列，平均列综合了完整表 6 项指标，说明编辑目标优先新事实而牺牲了无关问题保持。遗忘质量的巨大涨幅需结合其为 KS 检验 p 值理解，分布微小移动即可带来大分值变化。

#### 纯文本骨干上的扩展验证

下表为论文完整跨骨干表的精简摘表，仅展示 5 种骨干平均的任务得分两行，任务分数为百分比。对齐质量的负对数似然 NLL 与字符错误率 CER 在 1,000 句 WikiText 验证上报告，越低越好，图像平均 CER 为 3.7% 与语音为 10.6% 出自论文完整表而非本摘表，可对照语音与图像转写噪声理解后文增益。

| Model | Training | QA ↑ Recall | Unlearning ↑ FQ | Unlearning ↑ MU | Editing ↑ Rel. | Editing ↑ Gen. | Editing ↑ Loc. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Average | Text-only | 40.4 | 15.7 | 61.5 | 95.5 | 62.9 | 14.7 |
|  | + MVT (adaptive) | 57.7 | 27.2 | 64.0 | 99.5 | 86.6 | 13.4 |

5 模型平均时文本单独训练问答召回率为 40.4%，自适应 MVT 升至 57.7%，遗忘质量从 15.7% 升至 27.2%，模型效用从 61.5% 升至 64.0%，可靠性从 95.5% 升至 99.5%，泛化性从 62.9% 升至 86.6%，局部性从 14.7% 降至 13.4%。对齐上图像平均 CER 为 3.7%，语音为 10.6%，出自论文完整表，语音噪声明显更大。正文指出 4 种纯文本骨干平均问答提升 17.8 个点，泛化性提升 23.3 个点，遗忘平均提升 4.3 个点，其中 Yi 上遗忘持平，其余三者均提升，局部性仍是共同短板。

#### 跨模态查询下的缺口闭合

先看 3 组柱状图把握跨模态差距，横轴为文本、语音与图像 3 种查询，纵轴分别为问答召回率、遗忘质量与编辑可靠性，灰色为 4 种基线平均，紫色为各自叠加自适应 MVT 后的平均，黑色短线为标准差。重点比较同一指标下灰色柱从文本到图像的跌落，以及紫色柱是否把三者拉平。

![原论文 Figure 2：Performance across text, speech, and image queries.](/audio-paper-digest-blog/images/papers/2611.30165/figure-2-b75df4054a360b70.png)

*论文图 2：三种查询通路下四种基线平均与叠加自适应训练后的问答遗忘编辑对比（原论文 Figure 2）。*

图中左侧问答灰色柱从文本约 45.8% 经语音约 37.1% 跌至图像约 32.4%，紫色柱则稳定在 60.0% 左右。中间遗忘质量灰色柱在三通路上均低于 20.0%，紫色柱在文本与语音上大幅抬升而图像仍偏低。右侧编辑可靠性灰色柱从文本约 96.1% 跌至语音约 37.5% 与图像约 7.4%，紫色柱在三通路上均超过 99.0%。这说明基线学到的事实难以经语音图像取出，而自适应 MVT 让同一更新同时约束三通路，图像遗忘仍是最难的部分。

下表为问答与遗忘跨通路明细的精简摘表，仅展示文本单独训练及其自适应 MVT 版本与四法平均两组共 4 行，列为问答召回率与遗忘质量在 3 种查询下的数值。数值为百分比，可对照柱状图核对文本到图像的跌落与修复程度。

| Method | QA recall ↑ Text | QA recall ↑ Speech | QA recall ↑ Image | Forget quality ↑ Text | Forget quality ↑ Speech | Forget quality ↑ Image |
| --- | --- | --- | --- | --- | --- | --- |
| Text-only | 42.3 | 35.4 | 32.2 | 13.8 | 1.6 | 1.2 |
| + MVT (adaptive) | 57.5 | 57.2 | 55.0 | 54.5 | 86.6 | 17.8 |
| Average of the four | 45.8 | 37.1 | 32.4 | 18.4 | 4.9 | 2.4 |
| + MVT (adaptive) | 60.3 | 60.0 | 57.2 | 45.3 | 59.7 | 11.4 |

文本单独训练问答从文本 42.3% 经语音 35.4% 跌至图像 32.2%，叠加后三者为 57.5%、57.2% 与 55.0%，差距基本闭合。遗忘质量文本单独训练从文本 13.8% 跌至图像 1.2%，叠加后文本 54.5% 与语音 86.6% 大幅提升而图像仅 17.8%。论文完整附录表还报告复述叠加后问答文本为 73.9%，SymNoise 叠加后遗忘文本为 71.3%，本节精简摘表仅展示文本单独训练及其自适应版本与四法平均两组共 4 行，未展示这些单法明细行，说明不同文本增强与 MVT 互补，但图像遗忘仍明显低于文本，代价依然存在。

下表为编辑跨通路明细的精简摘表，仅展示文本单独训练及其自适应 MVT 版本与四法平均两组共 4 行，列为可靠性与泛化性在 3 种查询下的数值，局部性见论文完整附录表。可重点看可靠性从文本到语音图像的下跌，以及泛化性在图像上的提升幅度。

| Method | Reliability ↑ Text | Reliability ↑ Speech | Reliability ↑ Image | Generality ↑ Text | Generality ↑ Speech | Generality ↑ Image |
| --- | --- | --- | --- | --- | --- | --- |
| Text-only | 95.2 | 28.7 | 4.9 | 61.8 | 24.0 | 4.6 |
| + MVT (adaptive) | 99.7 | 99.7 | 99.5 | 87.0 | 80.0 | 59.1 |
| Average of the four | 96.1 | 37.5 | 7.4 | 69.8 | 30.1 | 6.4 |
| + MVT (adaptive) | 99.6 | 99.7 | 99.6 | 90.5 | 84.4 | 65.5 |

文本单独训练可靠性从文本 95.2% 跌至语音 28.7% 与图像 4.9%，叠加后三者为 99.7%、99.7% 与 99.5%，断崖基本修复。泛化性文本单独训练从文本 61.8% 跌至图像 4.6%，叠加后升至 87.0%、80.0% 与 59.1%。论文完整附录表还报告复述叠加后泛化性文本为 96.3%，其局部性文本为 14.2%，低于复述单独训练的 17.4%，本节精简摘表仅展示文本单独训练及其自适应版本与四法平均两组共 4 行，未展示局部性列与单法明细行。平均四基线时可靠性三通路为 96.1%、37.5% 与 7.4%，叠加后为 99.6%、99.7% 与 99.6%，泛化性图像从 6.4% 升至 65.5%，而完整表中局部性图像仅从 6.1% 升至 7.7%，仍是未被改善的短板。

### 共享分量与一致性的梯度激活三项检验

为检验理论假设，论文在 TOFU 问答上比较同事实与随机事实的梯度余弦，追踪三视图预测分歧 Dis 随轮数的变化，并比较 LoRA 适配器激活的跨视图一致性。遗忘与编辑任务重复了相同检验，附录给出了一致与不一致的两面结果，共同支撑后文对适用边界的判断。

#### 共享内容与迁移率的公式直觉

定理把每个事实的梯度拆为共享内容方向 a_i 与表面方向 e_m，前者模长为 1 且与所有表面正交，不同事实间也正交。γ_i 为每视图要求的答案得分提升，Π_i 为表面 Gram 矩阵逆的求和项，ρ_i 为释义保留原文本表面分量的比例，ν_i 为释义上提升占训练提升的比例。该式要回答增加视图如何同时抬高共享分量与迁移率。

\[\begin{aligned} \displaystyle\alpha^{\star} \displaystyle=\frac{\gamma_{i}\Pi_{i}}{1+\Pi_{i}}, \\ \displaystyle\nu_{i} \displaystyle=1-\frac{1-\rho_{i}}{1+\Pi_{i}}. \end{aligned}\]

该式的物理直觉是新增视图若只靠表面线索提分需要更大更新，而共享内容方向一次更新可同时帮助所有视图，最小范数解因此把更多更新分给共享方向，α 星随 Π_i 单调上升。当新增视图表面方向与已有正交时，Π_i 增量最大，迁移率 ν_i 也随之上升。极端下若释义完全保留表面即 ρ_i 为 1，则 ν_i 为 1 完全迁移，若完全丢弃即 ρ_i 为 0，则 ν_i 为 Π_i 除以 1 加 Π_i，仍随视图数增加而改善。输出的共享分量与迁移率直接预测了释义问答召回率的提升方向。

#### 分歧分解的公式直觉

命题把加权交叉熵拆为组合预测损失与视图分歧两项，s_m 为视图 m 的对数几率，p_m 为其 softmax 分布，s_bar 为加权平均对数几率，p_bar 为其组合分布，w_m 为视图权重，D_KL 为组合到各视图的 KL 散度。该式要回答 MVT 损失下降中有多少来自拉近视图预测。

\[\begin{split}\sum_{m\in\mathcal{M}}w_{m}\,\ell_{\mathrm{CE}}(s_{m},y)={}&\ell_{\mathrm{CE}}(\bar{s},y)\\ &+\underbrace{\sum_{m\in\mathcal{M}}w_{m}\,D_{\mathrm{KL}}(\bar{p}\,\|\,p_{m})}_{\text{disagreement}}.\end{split}\]

该式的统计直觉是三视图对同一答案词元给出不同概率时，加权损失不仅惩罚组合预测偏离正确答案，还惩罚各视图偏离组合。关键是分歧项非负，仅当正权重视图预测完全一致时为零，因此最小化 MVT 损失必然推动共享 LoRA 使三分布靠拢。极端下若三视图已一致，分歧为零，损失即组合损失，若严重分歧则分歧主导梯度。输出的一致预测在下一步提升释义与跨模态查询的稳定性，但该式只描述交叉熵目标，不直接适用于遗忘的 SimNPO 目标。

#### 梯度分歧与激活的三项实证

阅读组合图时先看左侧三幅梯度余弦直方图，注意蓝色同事实与灰色随机事实的分离与虚线均值，再看中间分歧 Dis 随轮数的对数纵轴两条曲线，最后看右侧 8 层激活一致性灰色与紫色柱的高度差。三者分别对应共享分量、分歧下降与表征相似三项假设。

![原论文 Figure 3：Testing the theoretical assumptions on TOFU QA.](/audio-paper-digest-blog/images/papers/2611.30165/figure-3-108754bfe905b463.png)

*论文图 3：问答任务上同事实与随机事实梯度余弦分歧变化与逐层激活一致性检验（原论文 Figure 3）。*

左侧文本、语音与图像视图同事实均值分别为 0.27、0.24 与 0.21，随机事实均为 0.01，分布几乎不重叠，支持共享内容分量存在且无关事实近似正交。中间自适应 MVT 的 Dis 从 0.245 降至 0.001，而文本单独训练的 Dis 持续上升，说明联合训练拉近了预测。右侧 8 层中自适应 MVT 的同减异余弦在每一层都高于文本单独训练，平均从 0.07 升至 0.34，表明跨视图表征更相似而非仅输出一致。

该图把激活一致性检验扩展到三任务，横轴为 22 至 44 的 8 个抽查层，纵轴为同问题跨视图余弦减去异问题余弦，灰色为文本单独训练，紫色为自适应 MVT，误差线为 3 次运行的标准差。重点比较同一任务内紫色是否在所有层高于灰色，以及三任务间提升幅度差异。

![原论文 Figure S3：Figure S3: Activation agreement on QA, unlearning, and editing.](/audio-paper-digest-blog/images/papers/2611.30165/figure-6-5cc0648253f2dfbe.png)

*论文图 6：问答遗忘编辑三任务八层上文本训练与自适应训练的激活一致性对比（原论文 Figure S3）。*

问答上紫色在 8 层全面高于灰色，平均从 0.07 升至 0.34，提升最大。遗忘上紫色同样每层更高，但平均仅从 0.06 升至 0.11，编辑上从负 0.01 升至 0.10，提升较小。结合附录，遗忘梯度同事实余弦为文本 0.66、语音 0.37 与图像 0.35，对随机为 0.05、0.03 与 0.03，编辑为 0.71、0.46 与 0.35 对 0.00，均支持共享分量。编辑分歧从 1.10 降至 0.002 而文本单独训练升至 1.46，与命题一致，遗忘分歧两方法均上升而自适应在选中点为 0.356 低于文本的 0.503，因 SimNPO 压低旧答案概率而不适用该命题。

### 复现核对清单未解局限与工程选型建议

理论依赖固定梯度近似与较强的正交假设，要求不同事实梯度正交、内容与表面正交及表面 Gram 矩阵正定，实际微调远离初始化时高阶项不可忽略。实验仅覆盖 TOFU 虚构作者与 ZsRE 前 1,000 条编辑，均为英文短问答，未验证真实隐私数据、长文本、中文或多轮对话。局部性在主表与跨模态表中均未改善，图像遗忘虽有提升但绝对值仍低，遗忘分歧曲线也不支持命题，说明方法并非在所有目标上占优。

复现需先确认数据与渲染链，TOFU 含 4,000 对问答共 200 位虚构作者，遗忘用 forget05 的 200 对与 retain95 的 3,800 对，编辑取 ZsRE 的 1,000 条，语音用 en-US-AriaNeural 重采样至 16 kHz，图像用 Pillow 与 DejaVu Sans 按给定画布渲染。对齐用 WikiText-103 筛选后 49,000 句训练与 1,000 句验证，验证用德语回译 50 题按 NLL 相对降低 5% 选点，附录给出定理证明与分通路全量表及失败案例。

全部实验在 NYU HPC 集群上运行，主实验在单张 H200 GPU 以 bfloat16 训练，Qwen3-Omni 思考器 48 层加 LoRA rank 32 与 alpha 64，共 26.7M 参数占 0.08%。优化用 AdamW 学习率 1e-4，有效批量 12，三通路同批时累积除以 3，最多 12 轮，自适应温度从 1.0 退火至 0.1，遗忘用 SimNPO 参数为 2.5、0 与 0.1375。推理仅保留文本嵌入与 LoRA 模型，丢弃音频图像分支，不增加计算，原文未披露延迟吞吐与显存实测。

原文未披露作者代码权重与演示公开状态，第三方链接只证明 TOFU 数据集、Model_Editing_Hurt 数据集、edge-tts、Pillow、字体与 jiwer 工具可达，不代表作者已开源。若目标是提升释义召回或让遗忘编辑经语音图像仍有效，可尝试 MVT 并优先用自适应加权，第一步先跑文本基线，第二步再加三视图对比验证集。若对无关问题保持要求极高或预算只允许单通路，则需补局部性约束或更强算法，部署时需授权数据并分模态审计。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30165v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：自适应MVT在三次运行均值下将问答召回率提升15.2个百分点、遗忘质量提升40.7个百分点、编辑泛化性提升25.2个百分点，并在四个基线组合上一致增益。

- 核心优势：提出同监督下语音与印刷体图像视图加温度自适应加权的可验证训练形式，给出合并损失与跨视图分歧分解公式及退火策略。

- 核心优势：在四个纯文本主干上经连接器对齐后复现增益，报告语音重建CER平均10.6%与图像3.7%及下游问答与编辑泛化平均提升。

- 主要短板：编辑局部性未随MVT改善且四组中三组下降，图像遗忘仅从2.4升至11.4仍处低位，遗忘质量跳变受KS检验p值敏感性影响。

- 主要短板：理论依赖梯度特征固定与内容表面正交及不同事实正交等较强假设，远离初始化后高阶项可能不可忽略。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
