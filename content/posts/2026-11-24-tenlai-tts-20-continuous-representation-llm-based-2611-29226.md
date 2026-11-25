---
title: "Tenlai-TTS 2.0: Continuous-Representation LLM-Based TTS System with End-to-End Training"
date: 2026-11-24
draft: false
tags: [文本到语音, 语音克隆, 端到端学习, 流匹配]
categories: [论文速递]
description: "Tenlai-TTS 2.0 用能量归一化加噪瓶颈限定信息率并让编码器与语言模型联合训练，再用预测隐变量的重建与识别反馈校准生成，在 Seed-TTS-eval 上降低可懂度误差并提升细粒度跟随，代价是对大数据与客观评测的依赖以及容量与可预测性的权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29226"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "连续表征语音合成的端到端训练：Tenlai-TTS 2.0 解读"
paper_digest_original_title: "Tenlai-TTS 2.0: Continuous-Representation LLM-Based TTS System with End-to-End Training"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29226v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29226v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29226v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Tenlai-TTS 2.0 用能量归一化加噪瓶颈限定信息率并让编码器与语言模型联合训练，再用预测隐变量的重建与识别反馈校准生成，在 Seed-TTS-eval 上降低可懂度误差并提升细粒度跟随，代价是对大数据与客观评测的依赖以及容量与可预测性的权衡。"
paper_digest_reader_sections: [{"heading":"连续隐变量保真易预测难：分阶段训练留下的结构性矛盾","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Tenlai-TTS 2.0 把编码器语言模型解码器识别器放进同一回路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"容量可控高斯瓶颈决定表示上限，扩散头实现补丁级自回归","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"联合训练定表示，反馈优化与强化学习分工校准生成","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"更大容量未必更好合成：阶段增益细粒度跟随与推理控制的实测","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"容量预算与两级反馈决定上限：复现核对与工程选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Changfeng Gao"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Yong Ren"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Jun Yuan"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Zhengkun Tian"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Ye Bai"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Zhao You"},{"affiliations":["Tencent Yuanbao, Tencent Ethereal Audio Lab"],"name":"Shidong Shang"}]
paper_digest_abstract_sha256: "0ed5114c1c3a96825dd607db158f7e8d3c61a28b252290c4c2b508c7233c7724"
paper_digest_sidecars: {"citation.bib":{"sha256":"c94827912a492d1fe207963b7a84bfd3c5414a754ebda06566fc2e3d34619e97","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29226/citation.bib"},"citation.json":{"sha256":"96a19f45c30bc185e2097559eb3a494fa62ed2ce6335c96a3c8ec8bbf3ef9438","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29226/citation.json"},"citation.ris":{"sha256":"c7d222620de88808a9e77a1af514d1d481f2b800414aa8ce8c638da036c83d0f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29226/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5aa983a9fc2eda8a70f3980e6c9f6e4d2e441d3d90a423afdd8a82e998e53d2e","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29226/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "84ccda1e7b97a279193754eeecb62b069b2c412ec85aa7c22f4cfc777a7da84e"
paper_digest_api_reader_plan_sha256: "4fc0a89e8a46bb050f7aa144544fb823ed70f2712d48a8e093bb65af6b54fed3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "eca577a567b324a68cc32ecbb3334f4ba334dee9879245b837d32e89fe6241c2"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "15bc169f4650acced8efdf59ba050ecaf58591b9215733f10446074812ca30a5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a53db2c3da5a43b8b4e08685a8aada3143416d1093c5eb9034ce0a2ccc679807"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "bb29970de359d677be29f570668940e8cf0579e6feb121123fafc1a0afdf0f7f"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 连续表征语音合成的端到端训练：Tenlai-TTS 2.0 解读

> 英文题目：*[Tenlai-TTS 2.0: Continuous-Representation LLM-Based TTS System with End-to-End Training](https://arxiv.org/abs/2611.29226v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 7.8/10 | 技术严谨 7.1/10 | 实验充分 6.4/10 | 清晰度 6.9/10 | 影响力 7.0/10 | 开源 0.0/10 | 可复现 4.6/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Changfeng Gao：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Yong Ren：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Jun Yuan：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Zhengkun Tian：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Ye Bai：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Zhao You：Tencent Yuanbao, Tencent Ethereal Audio Lab
- Shidong Shang：Tencent Yuanbao, Tencent Ethereal Audio Lab

## 📌 核心摘要

**问题与瓶颈：** 自回归文本到语音需要把文本和参考音频映射为可直接合成波形的语音表示，输出通常为 24 kHz 波形。离散词元把预测简化为分类问题，但有限码本预算会丢掉细节并限制重建上限。连续潜变量保留更丰富的声学信息，却带来两难：面向重建训练的编码器倾向存入难以逐帧预测的细节，而自回归生成要求潜空间具备稳定的语言结构。主流做法先冻结为重建调好的变分自编码器空间再训练语言模型，生成器无法参与决定语义与声学配比。回归或扩散损失也不区分哪些潜误差真正改变词义或音色，因而缺乏解码后的代价信号。

**核心思路与方法架构：** 与冻结表征基线相比，本文把表征学习放进语音合成系统内部联合优化，保留连续建模以避免量化损失，同时用可计算容量上界约束信息量。1 秒 24 kHz 输入先经语音编码器变为 25 Hz、384 维的均值序列，经全局能量归一化并注入固定方差高斯噪声后形成潜变量 z，σ = 0.5 时容量上界为 11.1 kbps。编码器与多任务识别模型、流匹配梅尔谱解码器、大语言模型及其自回归扩散变换头一起训练，识别分支约束内容与音色，重建分支保留声学细节，下一补丁预测分支约束可预测性。每 3 帧潜变量拼为一个输入块，大语言模型运行在约 8.3 Hz，每个语音步长由该扩散头按条件流匹配生成下一 3 帧补丁，并用一步估计得到可微预测潜序列反馈给冻结的识别模型与解码器。上述反馈让生成器知道何种误差在解码后真正可闻，而容量约束迫使联合训练在可预测性与保真度之间取舍，推理使用完整参考音频的离线方式，未涉及流式约束。

**关键实验与核心代价：** 在 Seed-TTS-eval 零样本克隆上，以字符错误率（character error rate，CER，越低越好 ↓）、词错率（word error rate，WER，越低越好 ↓）和说话人相似度（speaker similarity，SIM，越高越好 ↑）衡量，反馈优化相对联合训练将 test-zh 的 CER 从 0.82% 降至 0.74%，将 test-hard 的 CER 从 8.32% 降至 7.08%，将 test-en 的 WER 从 1.32% 降至 1.27%。后续强化学习进一步将 test-hard 的 CER 降至 6.29%，将 test-en 的 WER 降至 1.08%，三个集合的 SIM 分别为 0.811、0.766 和 0.784。同表最强可比基线中，JoyAI-Voice 2.0-Base 的 test-zh CER 为 0.74% 与 test-en WER 为 1.27%，Qwen3-TTS-1.7B-Base 的 test-en WER 为 1.23%，本文强化学习后模型的 test-en WER 最低且 test-zh SIM 最高，但强化学习后 test-zh CER 微升至 0.77%（略高于第二阶段与 JoyAI-Voice 2.0-Base 持平的 0.74%），test-en SIM 也未居首。容量消融显示 σ = 0.2 时上界升至 22.6 kbps，但 test-zh CER 升至 0.92% 且 test-en WER 升至 1.63%，说话人相似度同步下降，说明更大容量有助于编码器端重建却更难预测。代价方面，第二阶段说话人相似度微降，强化学习后 test-zh CER 由 0.74% 微升至 0.77%，且全文未报告人工主观平均意见分，仅用识别器与嵌入相似度及皮尔逊相关系数评估，未验证主客观一致性。

**适用边界与深读导览：** 结论成立于中英文零样本克隆及所用 Paraformer 与 Whisper-large-v3 识别器和余弦相似度量之下，尚未覆盖低资源语言、强噪声远场或实时流式部署的失效情形。演示页已公开，可对照试听不同提示路由与引导强度下的可懂度与音色跟随差异，但正文未提供可核对的人工听感分数。若想深究容量上界推导可查附录 A 的高斯信道求和与詹森不等式步骤，若想复现两阶段梯度路径与强化学习权重可查方法 3.5 节与训练 4 章及下方长文对应章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://tenlai-tts.github.io/Tenlai-TTS-2.0/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://doi.org/10.48550/arXiv.2301.02111> → <https://arxiv.org/abs/2301.02111> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 连续隐变量保真易预测难：分阶段训练留下的结构性矛盾

基于大语言模型的语音合成一般先把波形映射为中间表示，再让语言模型按文本自回归生成该表示，最后经解码器与声码器还原音频。离散词元把每一步变成分类预测，训练目标清晰，但码本容量有限，容易丢失音色与细节，重建保真度存在上限。连续隐变量保留更完整的声学信息，却失去量化对误差的约束，微小预测偏差会在长序列中累积，稳定生成变得更困难。

当前主流做法是先训练重建导向的自编码器或变分自编码器，再冻结隐变量空间训练语言模型，中间用语义蒸馏、多任务识别或语义声学解耦来折中。表示一旦冻结，语言模型只能被动拟合既定分布，无法决定哪些信息值得保留。回归或扩散损失平等对待所有维度误差，不能区分改变词义与说话人的关键偏差和人耳不敏感的细微差别，反馈缺失使可预测性与保真度难以同时达到最优。

Tenlai-TTS 2.0 把表示学习放回系统内部，用能量归一化加固定方差高斯噪声构成容量可算的瓶颈，在有限信息预算内让编码器同时接收重建、识别与下一补丁预测 3 路梯度。预测出的连续隐变量可直接送回流匹配解码器与识别模型，用重建与识别损失对语言模型给出可微反馈，不再需要直通 Gumbel 采样的近似。后续强化学习再用 utterance 级奖励校准内容、音色与时长稳定性，形成互补优化。

### Tenlai-TTS 2.0 把编码器语言模型解码器识别器放进同一回路

系统包含 4 个可独立冻结的部件：语音编码器输出 25 Hz、384 维连续隐变量；语言模型主干初始化自 Qwen3-1.7B-Base，每 3 帧拼为一个输入补丁，约 8.3 Hz 建模文本与语音历史；自回归扩散头按条件流匹配生成下一补丁；流匹配梅尔解码器加预训练 HiFT 声码器负责波形重建；多头识别模型用 Conformer 主干约束内容与说话人属性。训练时编码器隐变量走实线，语言模型预测隐变量走虚线并接受重建与识别反馈。

阅读总览图时建议先沿底部 24 kHz 语音经编码器到中部语言模型再到右侧解码器的实线主路径，确认文本与语音历史如何汇合，再追踪顶部扩散头输出的虚线预测隐变量同时进入识别与重建分支的位置，最后对照底部总损失理解四项监督如何加权求和。注意说话人嵌入在三处条件中的注入点，以及多头识别中分类回归与蒸馏任务的颜色区分。

![原论文 Figure 1：Overview of Tenlai-TTS 2.0.](/audio-paper-digest-blog/images/papers/2611.29226/figure-1-728cfed8b794dcf4.png)

*论文图 1：端到端总览：底部编码器输出加噪隐变量，中部语言模型与扩散头建模，右侧识别与流匹配解码器并行监督，虚线为预测反馈路径（原论文 Figure 1）。*

图中底部蓝色框为编码器，声学表示经能量归一化与高斯加噪得到隐变量 z。橙色大框为语言模型与扩散头，文本嵌入与补丁编码器分别处理文本与历史隐变量。右上绿色框为多头识别模型，共享主干后分出语音识别、说话人、情感、语速等任务头。右中紫色框为流匹配解码器，经前视局部上下文与扩散估计器输出梅尔频谱。棕色虚线是第二阶段新增的可微反馈，实线是第一阶段已有的编码器监督。

与 Dots.TTS、FireRedTTS3 与 JoyAI-Voice 2.0 先固定隐变量再补救的做法不同，本系统让生成器直接参与表示选择。与离散版 Tenlai 前作相比，连续隐变量省去直通估计，但必须显式控制容量。信号规格上保留 24 kHz 输入与 25 Hz 帧率，用 11.1 kbps 上限替代离散码本的 0.20 到 2.2 kbps，在推理时保留无分类器引导强度与 3 路提示路由作为可调控制。

### 容量可控高斯瓶颈决定表示上限，扩散头实现补丁级自回归

连续隐变量若不设约束，编码器可以塞入大量难以预测的细节，重建好看但语言模型学不动。做法是先把编码器输出除以全局均方根得到单位平均功率，再加固定标准差 σ 的高斯噪声，使每维成为单位功率加性高斯信道。按香农容量公式，信息上限仅由 σ 决定，训练前即可算出。σ 变小意味着容量放大，重建与识别容易变好，但预测负担加重，选择 σ 就是在可预测性与保真度之间定预算。

在分析容量与合成质量的关系之前，需要统一离散词元与连续隐变量的比较口径。下表并列给出各自瓶颈类型、帧率与理论信息率上界，单位为 kbps，便于判断 11.1 kbps 与 22.6 kbps 在现有系统中的相对位置。表中包含单码本与多码本离散系统以及本系统两种 σ 设置，帧率差异已折算到每秒比特数，阅读时先看帧率列再看码率列。

| System | Bottleneck | Frame rate (Hz) | Rate bound (kbps) |
| --- | --- | --- | --- |
| CosyVoice 3 (Du et al., 2025) | FSQ, 38 | 25 | 0.32 |
| Qwen-Audio-3.0-TTS (Xiang et al., 2026) | FSQ, 310 | 12.5 | 0.20 |
| Qwen3-TTS-25Hz (Hu et al., 2026) | VQ, 32,768 | 25 | 0.38 |
| Qwen3-TTS-12Hz (Hu et al., 2026) | RVQ, 16 × 2,048 | 12.5 | 2.2 |
| Ours, σ = 0.5 | Gaussian, 384-d | 25 | 11.1 |
| Ours, σ = 0.2 | Gaussian, 384-d | 25 | 22.6 |

本系统 σ 为 0.5 时上限为 11.1 kbps，约为 Qwen3-TTS 多码本残差量化的 2.2 kbps 的 5 倍，是 CosyVoice 3 单码本 0.32 kbps 的 30 倍以上。σ 放宽到 0.2 时上限升至 22.6 kbps，但后文实测显示合成可懂度与相似度反而下降，说明更大预算保留了更多声学细节，却让自回归预测更困难。容量选择必须联合考虑生成与重建，而非只看重建上限。

#### 1 秒语音的张量形状与分支去向

以 1 秒 24 kHz 输入为例，信号共 24,000 个采样点，沿系统前向的张量形状与帧率变化如下，原文未披露语言模型隐层维度与梅尔维度时如实略去。该例子同时覆盖训练与推理的公共主干，区别在于训练用编码器隐变量做历史与目标，推理用已生成历史做自回归，噪声注入与分块位置保持一致。

- 1）编码器将 1 秒波形映射为 25 帧 384 维向量，能量归一化后加 σ 为 0.5 高斯噪声，得到 25 × 384 的隐变量序列 z。
- 2）每 3 帧拼为一个补丁，语言模型输入约 8.3 Hz，共约 8 个补丁，文本嵌入与补丁编码分别处理文本与语音历史。
- 3）自回归扩散头以语言模型隐状态、历史补丁与说话人嵌入为条件，用条件流匹配生成下一 3 帧补丁，目标从编码器隐变量截断梯度取得。
- 4）隐变量同时送入多头识别模型与流匹配解码器，前者经 Conformer 主干输出内容与说话人约束，后者经前视上下文生成梅尔频谱再由 HiFT 还原波形。
- 5）第二阶段预测隐变量 zhat 经一步流匹配恒等式由预测速度场算出，可微地送回解码器与冻结识别模型，形成反馈。

该流程的关键是历史与目标同处加噪空间，推理喂回的分布与训练一致。编码器在两阶段始终可训练，目标补丁截断梯度与能量归一化共同防止隐变量坍缩。推理时无分类器引导与 3 路提示开关决定参考音频是否进入语言模型、扩散头与解码器，实现可控克隆。

#### 识别解码与语言建模的任务分工

基础识别模型只开语音识别与说话人嵌入两头，分别用 CTC 与冻结 CAM++ 蒸馏监督，保证零样本克隆最关键的内容与音色。微调时扩展情感、语言方言、性别年龄、语速音高与音频事件等头，音频事件缺标签时从冻结 PANNs 蒸馏。流匹配解码器沿用 CosyVoice 3 结构，以说话人嵌入与提示为条件。语言模型另设句尾预测头，训练随机丢条件以支持引导，推理用少量欧拉步采样。

### 联合训练定表示，反馈优化与强化学习分工校准生成

端到端训练分两阶段。第一阶段编码器、识别模型、解码器与语言模型联合训练，损失为扩散头损失加句尾损失加编码器隐变量的重建与识别损失，编码器同时收到 3 路梯度，表示由所有任务共同选择。第二阶段在第一阶段路径不变的基础上新增预测隐变量的反馈损失，编码器继续训练，识别模型冻结为参照，解码器适配预测分布，生成器学会避开解码后影响大的误差。

要复现冻结与更新边界，需要对照两阶段端到端训练与目标说话人微调的模块开关。下表列出编码器、识别模型、解码器、语言模型与反馈损失在 4 个阶段是否参与训练，勾选表示计入优化。阅读时先看端到端两列理解表示如何形成，再看目标说话人两列理解适配时如何保护已学表示。

| Component | Stage 1 | E2E training Stage 2 | Target-speaker SFT Stage A | Stage B |
| --- | --- | --- | --- | --- |
| Encoder | Train | Train | Frozen | Frozen |
| RM | Train | Frozen | Train | Frozen |
| FM decoder | Train | Train | Train | Frozen |
| LLM + AR-DiT | Train | Train | Frozen | Train |
| Feedback loss Lfb | – | ✓ | – | ✓ |

端到端第一阶段五项中仅反馈关闭，其余全开。第二阶段冻结识别模型，其余继续训练并打开反馈，避免识别器迎合生成器误差。目标说话人微调先冻结编码器与语言模型，只适配识别与解码，再冻结声学侧只训练语言模型并打开反馈，使生成向目标音色靠拢同时保住内容。强化学习阶段则固定编码器、解码器与奖励模型，只更新语言模型与适配器。

#### 两阶段训练流的差异与反馈路径

对照两阶段训练流示意图有助于定位新增监督的位置。上半为第一阶段，下半为第二阶段，灰色为保持不变的编码器路径，棕色粗虚线为新增的预测隐变量反馈，阅读时先看实线如何从编码器分到 3 个模块，再看虚线如何从扩散头回到解码器与识别模型。

![原论文 Figure 2：Training-flow comparison. Solid arrows carry the encoder latent; thick dashed arrows highlight the…](/audio-paper-digest-blog/images/papers/2611.29226/figure-2-fe4cb01e7822880e.png)

*论文图 2：两阶段训练流对比：第一阶段仅用编码器隐变量监督各模块，第二阶段新增预测隐变量经冻结识别模型与解码器的可微反馈（原论文 Figure 2）。*

上图中编码器输出 z 同时作为语言模型历史、扩散头目标与右侧两模块条件，目标处截断梯度。下图中预测隐变量 zhat 从扩散头引出，以可微方式进入右侧，损失记为重建与识别在预测序列上的版本并加权求和。公式以第一阶段四项加第二阶段两项加权的形式呈现，冻结标识明确标出第二阶段识别模型不再更新。

#### 目标说话人与强化学习的补充优化

目标说话人微调分 A 与 B 两步，编码器全程冻结以保护表示。强化学习改编扩散负感知微调，按文本与说话人条件采样多条生成轨迹，解码后打 utterance 级内容、相似度与时长分，组内标准化为 0 到 1 权重，用正负重建分支分别鼓励高分样本与抑制低分样本，保持每条 utterance 等权并用滑动平均行为策略加正则稳定优化。

### 更大容量未必更好合成：阶段增益细粒度跟随与推理控制的实测

评测以零样本克隆为主。Seed-TTS-eval 的中文、英文与难例集分别用 Paraformer 算中文 CER、用 Whisper-large-v3 加英文文本归一算英文 WER，SIM 为整句与提示音频的余弦相似度均值。另用 198 条 CV3-Eval 主观集子集与 CommonVoice 中英文测试集做重建与识别分析。语速、音高与音量跟随用参考与合成的 Pearson r 衡量，全程无人工 MOS 或 CMOS，主观差异只能从客观相关性间接推断。

#### 声学细节跟随更能区分连续与离散

当词错率与相似度趋于饱和，细粒度克隆需要看语速、音高与音量是否跟随参考。下表在 3 个测试集上对比单码本离散、多码本离散与 3 个连续系统的 Pearson r，越高表示跟随越好，阅读时先分测试集再分三列指标。

| Test set | Model | Speech rate | Pearson r↑ Pitch (log F0) | Volume (dBFS) |
| --- | --- | --- | --- | --- |
|  | FishAudio-Drama3 | 0.443 | 0.928 | 0.818 |
|  | CosyVoice3-0.5B | 0.599 | 0.966 | 0.908 |
| Seed-TTS zh | Dots.TTS | 0.633 | 0.961 | 0.918 |
|  | FireRedTTS3 | 0.669 | 0.968 | 0.930 |
|  | Tenlai-TTS 2.0 | 0.760 | 0.973 | 0.919 |
|  | FishAudio-Drama3 | 0.371 | 0.910 | 0.813 |
|  | CosyVoice3-0.5B | 0.332 | 0.933 | 0.859 |
| Seed-TTS en | Dots.TTS | 0.425 | 0.924 | 0.890 |
|  | FireRedTTS3 | 0.410 | 0.944 | 0.925 |
|  | Tenlai-TTS 2.0 | 0.401 | 0.942 | 0.927 |
|  | FishAudio-Drama3 | 0.730 | 0.766 | 0.836 |
|  | CosyVoice3-0.5B | 0.790 | 0.913 | 0.884 |
| CV3-sub | Dots.TTS | 0.868 | 0.927 | 0.901 |
|  | FireRedTTS3 | 0.837 | 0.918 | 0.934 |
|  | Tenlai-TTS 2.0 | 0.850 | 0.961 | 0.948 |

中文集上本系统语速相关达 0.760，明显高于 FireRedTTS3 的 0.669 与 Dots.TTS 的 0.633，音高 0.973 与音量 0.919 处于最优或次优。英文集语速整体偏低，本系统 0.401 未占优，但音量 0.927 为最高。CV3 子集上音高 0.961 与音量 0.948 均为最高，语速 0.850 略低于 Dots.TTS 的 0.868。连续系统在语速与音量上普遍高于离散基线，音高差异较小，说明有限码本更易保留音高，而连续表示能承载更宽的 timing 与能量细节，但英文语速跟随仍是短板。

#### 联合反馈与强化学习的阶段增益

容量与优化阶段的主效应需要放在同一口径下比较。下表给出 σ 为 0.5 时联合训练、反馈优化与强化学习在中文、英文与难例集上的 CER、WER 与相似度，强化学习从第二阶段 checkpoint 起步 1,000 步更新。阅读时先看中文与英文的可懂度变化，再看难例集的大幅下降，最后对照相似度列判断代价。

| Training condition | test-zh CER (%)↓ | SIM↑ | test-en WER (%)↓ | SIM↑ | test-hard CER (%)↓ | SIM↑ |
| --- | --- | --- | --- | --- | --- | --- |
| Stage 1 (joint) | 0.82 | 0.787 | 1.32 | 0.745 | 8.32 | 0.757 |
| Stage 2 | 0.74 | 0.782 | 1.27 | 0.744 | 7.08 | 0.752 |
| RL | 0.77 | 0.811 | 1.08 | 0.766 | 6.29 | 0.784 |

第一阶段中文 CER 为 0.82%、英文 WER 为 1.32%、难例 CER 为 8.32%，第二阶段分别降至 0.74%、1.27% 与 7.08%，对应难例相对下降约 14.9%，相似度微降 0.787 到 0.782、0.745 到 0.744 与 0.757 到 0.752。强化学习进一步把英文 WER 降到 1.08%、难例 CER 降到 6.29%，相对第二阶段约 15.0% 与 11.2%，相似度回升到 0.811、0.766 与 0.784，中文 CER 微升到 0.77%。σ 为 0.2 时第一阶段中文 CER 升到 0.92%、英文 WER 升到 1.63%，相似度同步下滑，证实更大容量损害可预测性。

训练曲线能判断第二阶段是否走出平台。图中三面板分别为中文、英文归一化与难例集误差，横轴为累计步数千为单位，蓝色为第一阶段从 50k 起，红色为第二阶段偏移 200k，虚线为阶段切换，阅读时先看蓝色后期的平坦再看红色初期的跳变。

![原论文 Figure 3：Seed-TTS-eval training curves: Stage 1 (blue, from 50k) and Stage 2 (red, offset by 200k).](/audio-paper-digest-blog/images/papers/2611.29226/figure-3-f99a944b448ae2b5.png)

*论文图 3：三组零样本训练曲线：蓝色第一阶段与红色第二阶段以虚线为界，中文英文与难例集误差在平台期后继续下移（原论文 Figure 3）。*

左面板中文 CER 蓝色在 0.8% 到 0.9% 间波动，红色直接落到 0.7% 附近并保持平稳。中面板英文归一化 WER 蓝色从 1.8% 缓降到 1.3%，红色在 1.1% 到 1.5% 间波动但均值更低。右面板难例 CER 蓝色波动剧烈，多次冲高到 11%，红色收窄到 7% 到 9% 区间。波动仍大说明难例与英文评估不稳定，但阶段切换后整体下移支持反馈带来持续增益，而非单点偶然。

#### 目标说话人适配与推理时控制

目标说话人微调的效果用 3 位匿名说话人的柱状图呈现。左中右分别为中文、英文与难例集，纵轴刻度各不相同，斜纹柱为第二阶段零样本参照，实心柱为适配后 3 位说话人，阅读时先对照同一面板内的参照高度再跨面板比较下降幅度。

![原论文 Figure 4：Content consistency on Seed-TTS-eval for three anonymized target-speaker models, compared with the…](/audio-paper-digest-blog/images/papers/2611.29226/figure-4-314a5cf8c7820404.png)

*论文图 4：三位目标说话人微调与零样本参照的内容一致性柱状对比，中文英文与难例集分别采用不同纵轴刻度（原论文 Figure 4）。*

中文 CER 参照为 0.74%，适配后 3 位为 0.80%、0.77% 与 0.71%，基本持平。英文 WER 从 1.27% 降到 0.83%、0.95% 与 0.80%，难例 CER 从 7.08% 降到 4.97%、4.70% 与 5.06%，英文与难例集改善明显。图中纵轴差异大，难例集绝对值仍数倍于普通集，说明适配提升可懂度但未改变难例本身的高误差特性，且仅验证 3 位说话人，泛化范围有限。

推理时控制用无分类器引导强度与提示路由调节可懂度与跟随的平衡。下表固定路由 111 扫描引导强度，给出词错率、相似度与语速相关 r，阅读时先看词错率随强度单调下降，再看相似度与相关性的峰值位置。该扫描在 CV3 相关子集上进行，词错率单位为百分比，r 越高表示语速跟随越好。

| CFG | WER↓ | SIM↑ | r ↑ |
| --- | --- | --- | --- |
| 0.0 | 11.55 | 0.7526 | 0.864 |
| 0.1 | 9.23 | 0.7544 | 0.858 |
| 0.5 | 7.07 | 0.7644 | 0.866 |
| 0.7 | 6.70 | 0.7621 | 0.836 |
| 1.0 | 6.01 | 0.7581 | 0.832 |
| 1.5 | 5.61 | 0.7615 | 0.789 |
| 2.0 | 5.46 | 0.7522 | 0.715 |

引导从 0 升到 2.0，WER 从 11.55% 降到 5.46%，相对下降约 52.7%，相似度在 0.5 处达峰 0.7644，语速相关同样在 0.5 处达峰 0.866，到 2.0 跌到 0.715。原文还报告去掉语言模型提示的 011 路由把 WER 从 6.01% 降到 3.59%，仅解码器提示的 001 路由进一步到 2.99%，语速相关保持 0.832 到 0.827 相近，说明把自回归规划与声学参考解耦有助于可懂度，但强引导会牺牲表达跟随。

### 容量预算与两级反馈决定上限：复现核对与工程选型建议

结论成立依赖特定前提：训练用 1.6M 小时加 50,000 小时难例的私有数据，评测限于 Seed-TTS-eval 客观指标与 Pearson 跟随，未做人工听测，也未报告 UTMOS、DNSMOS 或 ViSQOL 等神经代理与 LSD、MCD 声学失真，无法判断主观自然度。未披露训练硬件、步时、推理 RTF、延迟与显存，流式与端侧部署成本未知。英文重建词错率高于离散基线、第二阶段相似度微降与强化后中文 CER 回升，说明可懂度与相似度仍需权衡。

复现核对要区分三件事：演示页 <https://tenlai-tts.github.io/Tenlai-TTS-2.0/> 当前可访问，可对照连续与离散基线试听语速与音量跟随差异；代码、权重、数据与训练脚本的公开状态原文未披露，1.6M 小时语料不可复得。附录仅给出容量上界推导，无额外超参与失效细节。复现第一步应先实现能量归一化加噪瓶颈与 3 路损失，再验证 σ 为 0.5 在小规模上的容量预测性权衡，然后再引入预测反馈。

工程上若追求高保真零样本克隆且能承担大语料与两阶段训练，容量可控连续表示可以尝试，默认 σ 为 0.5 并保留反馈优化。若数据有限或需要低延迟流式，应先补 RTF 与延迟实测，并验证难例集之外的口语与噪声鲁棒性。推理时先用引导 0.5 兼顾可懂度与跟随，再按需切换 011 或 001 路由分离音色与韵律，避免盲目加大引导导致表达跟随下降。

#### 两阶段端到端分工与容量约束

第一阶段做联合成形，语音编码器与识别模型、流匹配解码器、大语言模型加自回归扩散头一起训练，编码器同时收到重建、识别与下一块预测 3 路梯度，目标块从编码器侧截断梯度并配合能量归一化防止坍缩。瓶颈固定为 25 Hz、384 维，能量归一化加固定方差高斯噪声构成加性高斯信道，σ 为 0.5 时上界为 11.1 kbps，σ 为 0.2 时放宽到 22.6 kbps，联合训练在该预算内决定保留何种信息，而不是先为重建单独冻结表征。

#### 预测反馈与识别约束的执行过程

执行上大语言模型约以 8.3 Hz 运行，每 3 帧合并为一个输入嵌入，自回归扩散头每次生成 3 帧一块，训练目标即对应 3 帧编码块，并以条件流匹配学习从噪声到目标块的速度场。推理用少量欧拉步并随机丢条件以支持无分类器引导，3 路独立开关分别控制是否向大语言模型、自回归扩散头与流匹配解码器提供参考音频。

反馈路径利用流匹配恒等式由插值块与预测速度一步估计目标块，再拼接为完整预测序列，分别经流匹配解码器算重建损失、经冻结识别模型算识别损失，梯度经一步估计可微回传大语言模型与扩散头，连续隐变量因此无需直通估计。第二阶段保留编码器可训练并冻结识别模型为判分基准，使解码器同时适应编码隐变量与预测隐变量的分布，生成器由此知道何种隐误差在解码后真正影响字词与说话人。

识别侧以 Conformer 主干加多任务头核验内容、说话人与副语言属性，基座只用 CTC 语音识别与对冻结说话人编码器的嵌入预测约束零样本克隆最关键的字词与身份。微调才扩展情感、语言方言、性别年龄、质量、语速、音高与音频事件等指令属性，其中音频事件在缺标签时从冻结标签器蒸馏，识别部分的反馈因此不仅核对说什么与谁在说，也核对以何种方式说。

#### 推理控制与目标说话人适配的衔接

推理侧用引导强度与 3 路开关衔接解码，例如 111 为 3 路全给、011 为去掉语言模型侧提示、001 为仅保留解码器侧提示并依赖说话人嵌入保持身份，引导增大可压低词错率但会削弱语速跟随。目标说话人适配分两步走，先冻结生成侧而在编码隐变量上适配解码器与识别模型，再冻结声学与识别侧而微调生成侧并保留反馈监督，编码器全程冻结以保住已学表征。强化阶段在生成历史下做前向过程更新，以内容准确、说话人相似、语速时长一致与截断静音削波惩罚等奖励加权正负重建分支，补足反馈优化后英文与难例的剩余误差。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入 24 kHz 语音，编码器输出 25 Hz、384 维连续隐变量，每 3 帧拼为一个补丁，语言模型约 8.3 Hz 建模，流匹配解码器输出梅尔频谱再经预训练 HiFT 声码器合成，16 kHz 版本用于部分组件，因果流式延迟 RTF 与显存原文未披露
- **训练与评测数据**：通用 1.6M 小时中英文语音，覆盖方言、教育、有声书、播客、影视、会议及耳语，另加 50,000 小时难例覆盖极端语速、长语音、方言风格与儿童年长者，评测用 Seed-TTS-eval 中文英文难例集、198 条 CV3-Eval 子集及 CommonVoice 中英文测试集
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量、训练步数耗时与显存占用
- **核心超参数与配置**：语言模型初始化自 Qwen3-1.7B-Base，隐变量 384 维，瓶颈 σ 默认 0.5 对应 11.1 kbps，对比 0.2 对应 22.6 kbps，每 3 帧一片，条件流匹配训练 AR-DiT，随机丢条件支持无分类器引导，推理用少量欧拉步，反馈权重与优化器学习率批量原文未披露
- **推理速度与部署开销**：原文未披露 RTF、首包延迟、吞吐与参数量，仅披露可用无分类器引导强度与三路提示路由做推理时控制，扩散采样用少量欧拉步
- **开源产物与协议状态**：论文给出演示页 <https://tenlai-tts.github.io/Tenlai-TTS-2.0/> 可试听，代码权重数据与训练脚本公开状态原文未披露，第三方检查显示演示页当前可访问
- **附录与补充材料要点**：附录给出高斯瓶颈容量上界推导，384 维 25 Hz 下 σ 为 0.5 每帧 446 比特，σ 为 0.2 每帧 902 比特，离散词元上界为帧率乘码本对数，未提供额外消融超参与失效案例细节

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.29226v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：端到端联合优化语音编码器与多任务识别模型及流匹配解码器和LLM扩散头，容量上界训练前可算σ=0.5时为11.1kbps，设计完整可核验。

- 核心优势：反馈优化将test-zh CER从0.82%降至0.74%且test-hard从8.32%降至7.08%，强化学习后英文WER最低达1.08%，容量与阶段消融直接支撑权衡结论。

- 主要短板：全文未报告人工主观平均意见分，仅用识别器错误率与嵌入相似度及皮尔逊相关系数评估，主客观一致性未经检验。

- 主要短板：160万小时通用语料与5万小时难例均为私有且λ权重与学习率优化器批量调度等关键训练配置缺失，第三方难以独立复核。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
