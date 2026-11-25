---
title: "SpeechSplice: Pronunciation Control in Encoder-Decoder LLM-based TTS by Replacing Encoder Hidden States"
date: 2026-11-24
draft: false
tags: [文本到语音, 激活因果干预, 跨语言, 主观评测]
categories: [论文速递]
description: "针对 LLM-TTS 拿掉可编辑发音接口而频繁读错专有名词的问题， SpeechSplice 以冻结编码器输出处的实体隐状态替换实现无训练局部纠正，在三语母语听测中以接近满分的选择率实现目标读法且自然度无显著下降，但仅在生成器经交叉注意力读取文本且分词标识可分的条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30927"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "冻结编码器输出替换实现 LLM 语音合成的发音控制"
paper_digest_original_title: "SpeechSplice: Pronunciation Control in Encoder-Decoder LLM-based TTS by Replacing Encoder Hidden States"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30927v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30927v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30927v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.activation-intervention","label":"激活因果干预"},{"facet":"setting","id":"setting.cross-lingual","label":"跨语言"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "激活因果干预"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 LLM-TTS 拿掉可编辑发音接口而频繁读错专有名词的问题， SpeechSplice 以冻结编码器输出处的实体隐状态替换实现无训练局部纠正，在三语母语听测中以接近满分的选择率实现目标读法且自然度无显著下降，但仅在生成器经交叉注意力读取文本且分词标识可分的条件下成立。"
paper_digest_reader_sections: [{"heading":"去掉可编辑发音接口后 LLM-TTS 为何频繁读错专有名词","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结编码器输出处拼接目标读法状态的无训练干预","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"实体跨度定位、可变长度拼接与等长池化的实现细节","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三语母语听测接近满分且自然度无显著差异的注入效果","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"交叉注意力读取路径决定注入成败的跨架构对比与遮挡验证","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"只在交叉注意力读取条件下成立的适用边界与复现要点","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Matsuo Institute, Inc., Japan","The University of Tokyo, Japan"],"name":"Kiyoshi Kurihara"},{"affiliations":["Matsuo Institute, Inc., Japan","The University of Tokyo, Japan"],"name":"Jumpei Ukita"},{"affiliations":["Matsuo Institute, Inc., Japan","The University of Tokyo, Japan"],"name":"Yusuke Iwasawa"},{"affiliations":["Matsuo Institute, Inc., Japan","The University of Tokyo, Japan"],"name":"Yutaka Matsuo"}]
paper_digest_abstract_sha256: "4fdde47d680facbd08bca44595b2b30ded2e2aea3e01fff68c39e76a13e38f81"
paper_digest_sidecars: {"citation.bib":{"sha256":"8f8ec0e7b9f91613dd8c539762525a6541dab0a3e6688220028cf1db10f78d34","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30927/citation.bib"},"citation.json":{"sha256":"d9bde70d8ce83e07969a3d7067f90e964fb7dd78e757cf62b37bfcd6ae874f83","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30927/citation.json"},"citation.ris":{"sha256":"36d57384fb0b180c80224d2ce8393f0089d8f55ad0c54d2473ef6d4b7e459764","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30927/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ba2a3ec9e3ec6b5072e3777903820d0bc61a638069d0f10784c5e7ec129487e4","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30927/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "3ba1c5af0a55f75265538c2fe186d7e1ea8931475cbc97666614d12c03073468"
paper_digest_api_reader_plan_sha256: "cd372d07a361fb0996154e451ba9b65c9fea933915bdf11356e3ffc9725413fa"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "92422e035491e0f26ff94d37f16a1a5977278519161954fc00dd802f7a18bf22"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "929c9b51741bc9b4690e39d625ce8d06382e461f4860d71488361525ae91545c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "842b002f65fd9b4ae9a78c15b968219794ce61104b1492e2d983a5fde41f0c0f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "69866c613bf9faf318d157d60788950bf4fdb2eeff6006b8c0c31bc4c4f9aafd"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 冻结编码器输出替换实现 LLM 语音合成的发音控制

> 英文题目：*[SpeechSplice: Pronunciation Control in Encoder-Decoder LLM-based TTS by Replacing Encoder Hidden States](https://arxiv.org/abs/2611.30927v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[激活因果干预](/audio-paper-digest-blog/papers/?concept=method.activation-intervention)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)
- **研究条件**：[跨语言](/audio-paper-digest-blog/papers/?concept=setting.cross-lingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 7.6/10 | 技术严谨 7.1/10 | 实验充分 8.1/10 | 清晰度 6.9/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 7.4/10 | 工程/实践 6.2/10
>
> 发表/录用标记：EACL 2027


## 👥 作者与机构

- Kiyoshi Kurihara：Matsuo Institute, Inc., Japan；The University of Tokyo, Japan
- Jumpei Ukita：Matsuo Institute, Inc., Japan；The University of Tokyo, Japan
- Yusuke Iwasawa：Matsuo Institute, Inc., Japan；The University of Tokyo, Japan
- Yutaka Matsuo：Matsuo Institute, Inc., Japan；The University of Tokyo, Japan

## 📌 核心摘要

**问题与瓶颈：** 近年基于编码器-解码器的大语言模型语音合成把文本直接映射为语音，省去可逐词修改的字素到音素转换前端。输入为包含歧义实体的句子文本，输出为保留目标说话人音色的语音，歧义来自异形同音词、多音字、数字、专有名词与领域术语。缺少发音编辑入口时，基线常读错日常词汇。已有补救通过微调或权重编辑恢复控制，但在语音大模型上易引发质量退化与合成失效，且需离线操作，无法在推理时局部改动单个词的读法。

**核心思路与方法架构：** 与最接近的微调与权重编辑路线相比， SpeechSplice 的增量是保持全部权重冻结，只替换解码器所见的文本侧张量。处理沿一条样本展开：含歧义实体 e 的源句子 x 与把 e 改写为目标读法 re 的目标句子 x' 经同一冻结文本编码器分别编码，得到源隐状态 Hsrc 与目标隐状态 Htgt 。按字符偏移找到实体记号区间 Isrc 与 Itgt ，把目标实体段拼接到源前缀与后缀之间，形成 Htilde ，并重建注意力掩码与位置索引，解码器经交叉注意力读取该序列生成声学或编解码器记号。当源与目标记号数相等时为原位替换，长度变化时序列长度由 T 变为 T - m + n ，固定长度场景则用凸组合池化目标段。这种设计直击根因：最终编码器输出是文本编码与语音生成的瓶颈，交叉注意力按实体位置搬运替换后的状态。

**关键实验与核心代价：** 主基准覆盖英语、日语与汉语，每语言 300 对跨语言样本与 300 对跨架构样本，母语听众每语言完成 500 次配对判断。注入片段被选为实现目标读法的比例为英语 99.4% 、日语 98.6% 、汉语 100.0% ，日语同形纠错集为 98.6% ，自动转写的 Whisper-INJ (越高越好 ↑) 对应为 96.33% 、 92.33% 与 96.00% ，听众多数判断与自动判断仅在 8 个条目分歧且 7 个为自动偏严。自然度平均意见分 (mean opinion score, MOS, 越高越好 ↑) 在三语言均无显著差异，神经网络代理质量指标 (UTMOS, 越高越好 ↑) 与说话人相似度亦无一致变化，基音变化比均低于 1 。英语对照中 SpeechSplice 以 96.33% 高于零样本重合成的 90.00% 与基于扩散的内容替换的 86.00% ，且按构造保持基线时长。跨架构 17 个条件中，编码器-解码器在替换点的音素注入改善率 (phoneme injection-better, PIB, 越高越好 ↑) 最低为 41.67% ，高于解码器独占结构最高 27.00% ，两组无重叠，遮挡实体位置交叉注意力后声学差异归零。全部实验为纯推理，合成约 275 个 GPU 小时，评分约 40 个 GPU 小时，无训练开销。

**适用边界与深读导览：** 结论成立依赖两个前提：生成器在被替换张量处经交叉注意力读取文本，以及分词器对源与目标词给出不同记号标识，论文第 4.1 节说明不满足后一前提的情形。未覆盖长文本、多说话人泛化、每句 3 个以上实体、紧密相邻实体、低资源语言与声调重音细评， MOS 也只用每语言 1 个克隆参考音。论文给出的试听页可对照基线误读与注入后读法。若深究拼接公式与掩码重建看第 3 节，跨架构分离与层深扫描看第 5.3 节至第 5.4 节，交叉注意力遮挡证据看第 5.6 节与附录 A 至附录 B ，听测流程与统计看附录 G 至附录 H 。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/Kuri-san-jp/speechsplice> — 链接可访问（HTTP 200）

- 论文所列链接：<https://kuri-san-jp.github.io/speechsplice/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/Aratako/T5Gemma-TTS-2b-2b> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/microsoft/speecht5_tts> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/meituan-longcat/LongCat-AudioDiT-1B> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/Aratako/Irodori-TTS-v4.1-Small> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/telecomadm1145/Kiseki-TTS> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/coqui/XTTS-v2> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/HKUSTAudio/Llasa-3B> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/sesame/csm-1b> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/suno/bark> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 去掉可编辑发音接口后 LLM-TTS 为何频繁读错专有名词

近年来基于大语言模型 (LLM) 的语音合成 (TTS) 把传统前端折叠进单一序列模型，直接由文本映射到语音，在自然度、多语种覆盖和零样本音色克隆上取得进展，却在推理时拿掉了可编辑的发音接口。传统流水线用字音转换 (G2P) 模块处理多音字与同形异音词，可逐条目修正，而多数 LLM-TTS 系统不再暴露这类入口。于是专有名词、异读词、数字读法和领域术语频繁被读错，用户无法像改词典那样做局部干预。

SpeechSplice 要解决的任务可精确表述为，给定冻结的编码器 - 解码器模型、包含歧义实体 e 的输入句 x ，以及推理时提供的期望读法 re ，只改变 e 的发音而保持模型权重与其余内容不变。具体做法是另写一个目标句 x' ，其中 e 被写成能承载 re 的形式，分别编码 x 与 x' 并在编码器输出处替换实体跨度，再让解码器合成语音。评测只考察说话人相似度、自然度、基频与时长是否保持，其余属性不在保持承诺内。

已有路线难以同时满足在线与局部两点要求。微调与权重编辑如 UtterTune 的低秩适配 (LoRA) 、 SonoEdit 、 ROME 与 MEMIT 能恢复控制，却被报告会引发质量下降与灾难性遗忘，且必须离线操作。文本提示改写与 G2P 基线在源实体与目标实体不同时无法产生目标实体， FlowEdit 需为每条修正优化并存储扰动， VoiceCraft 需重合成整句， EdiTTS 需扩散编辑且不能克隆任意提示音色。更底层的物理瓶颈是，生成器在被替换张量处究竟经交叉注意力读取文本，还是与语音共享同一自注意力序列，这决定替换能否传到语音。

为支撑上述判断，原文构建跨语种与跨架构两套基准，每语种各 300 对，由 50 个手写实体对与 6 个模板构成，源句与目标句仅差一个实体跨度，另有每语种 300 句双实体句与日文同形集，其中字面不变而读法不同，用以检验自然发生的误读。听测材料由冻结模型经音色克隆生成，基线与注入共用提示、文本与解码配置，仅差拼接操作，这为后文归因提供了干净对照。

### 冻结编码器输出处拼接目标读法状态的无训练干预

与最接近的基线相比， SpeechSplice 的增量是把干预点固定在解码器面对的文本侧接口，即冻结文本编码器的最终输出，而不改任何权重、不录制目标词音频、也不做优化。保留的是原模型的编码器、解码器与声码器行为，替换的是实体位置的一段隐状态。信号规格方面，原文明确给出文本跨度定位与层数 L 、替换深度 l* ，以及 T5Gemma-TTS 使用 XCodec2 (音频分词器与声码器) 作波形前后端，但未披露采样率、帧长、步长、码率与通道维度，相关环节只能按未披露处理。

以贯穿全文的英文示例看端到端数据流，输入句为 I called Louis this morning. ，目标读法把 Louis 写成 Lewis ，音标为 /'lu:is/ 。同一冻结编码器分别编码源句与目标句，得到 Hsrc 与 Htgt ，形状为 T × d ，其中 T 为编码器序列长度， d 为隐状态维度。用字符偏移定位源跨度 Isrc 与目标跨度 Itgt ，把源前缀、目标实体段与源后缀按顺序拼接，长度由 T 变为 T - m + n ，并重建注意力掩码与位置索引。解码器经交叉注意力读取拼接后序列，生成声学或编解码 (codec) 序列再经声码器成波。

训练目标与参数边界非常清晰，即无训练阶段，所有 TTS 权重保持冻结，梯度不更新任何模块。推理时只需 2 次前向编码加一次拼接，再走常规解码，无需重训或逐词优化。T5Gemma-TTS 的时长由时长估计器在解码前根据源句文本与音色提示设定，注入时沿用源句估计长度，因此基线与注入片段时长天然一致。解码配置在听测中固定随机种子与采样参数，使两条件仅差编码器输出拼接这一步。

各系统的被替换张量按生成器读取文本的方式选取，5 个编码器 - 解码器系统取送入交叉注意力的编码器输出，如末层隐状态或经归一化与投影后的文本状态，5 个解码器单序列系统取预填充时实体词行上的自注意力隐状态，如特定 GPT 块或解码器层的输出。附录给出每系统的具体层号与是否逐词元独立变换的说明，层扫描则固定其余条件只改变替换深度。

下图给出整体定位，可先沿从左到右的箭头看主路径，再对照上下两处标注理解为何不走文本预处理与微调。图中深色大框代表冻结的 LLM-TTS ，内部并列展示音色克隆、情感、多语种与说话风格能力，下方为按词排列的隐状态序列，其中 Louis 位置被高亮为替换点。左侧输入框为 Louis ，右侧合成框以 Lewis 示出对应目标读音 /'lu:is/ ，便于对照。

[![原论文 Figure 1：Overview of SpeechSplice, which controls pronunciation without a grapheme-to-phoneme (G2P) front…](https://arxiv.org/html/2611.30927v1/figure1_overview.png)](https://arxiv.org/html/2611.30927v1/figure1_overview.png)

*论文图 1：冻结 LLM-TTS 中实体隐状态替换控制发音的总体示意与保持范围（原论文 Figure 1）。*

该示意把输入文本 I called Louis this morning. 与合成后文本 I called Lewis this morning. 并置，右侧框以 Lewis 示出对应目标读音 /'lu:is/ 。下方绿色注射器图标标注隐状态替换，左侧绿色圆圈强调无 G2P 与无文本处理，右侧红色虚线圆圈表示微调会带来灾难性遗忘。雪花图标对应权重冻结，中间 Hidden-state 横线点明干预发生在模型内部而非前端。评测保持项仅为说话人相似度、自然度、音高与时长，与图注说明一致。

### 实体跨度定位、可变长度拼接与等长池化的实现细节

#### 跨度定位与分词器前提

实体跨度的定位完全依赖分词后的字符偏移，对整句做带偏移的分词，凡偏移区间与实体重叠的词元都归入跨度。记源跨度为 Isrc = (s1 , … , sm) ，目标跨度为 Itgt = (u1 , … , un) ，其中 m 与 n 分别为源实体与目标实体的词元数。编码源句 x 与目标句 x' 得到 Hsrc 与 Htgt 后，只在最终编码器输出处读取目标实体状态并拼入源序列的前后缀之间。该设计要求分词器对源词与目标词给出不同标识，否则隐状态无法区分， SpeechT5 在日文与中文条件下正因标识相同而被排除。

可变长度拼接的目标是保留全部目标实体状态，同时保持前后文不变。式中 Htilde 为拼接后序列， hsrc 与 htgt 分别表示源与目标编码输出的行向量，下标 s1 - 1 与 sm + 1 界定源前缀与后缀， u1 : un 截取目标实体块， T 为源编码器序列长度。其中行向量维度为隐状态维度而下标均为整数位置，拼接后长度为 T - m + n ，注意力掩码与位置索引需按新长度重建， m = n 时退化为原位替换。

\[\tilde{\mathbf{H}}=\big(\mathbf{h}^{\mathrm{src}}_{1:s_{1}-1},\ \mathbf{h}^{\mathrm{tgt}}_{u_{1}:u_{n}},\ \mathbf{h}^{\mathrm{src}}_{s_{m}+1:T}\big),\]

从物理直觉看，该式把文本侧接口切开一段再接入另一段编码，解码器随后经交叉注意力读取新段，因此发音朝目标读法移动而不触动权重。当 n 远大于 m 时序列明显变长，掩码与位置必须同步拉长，否则解码会对错位置。当 m = n 时长度不变，实现最干净的局部替换。输出的 Htilde 直接作为解码器每一层交叉注意力的键与值，决定后续声学词元的走向，这是发音能被搬运的关键。

#### 拼接与池化的数学形式

等长池化的目标是在必须固定编码器长度时仍能注入目标信息，该形式在长度敏感的消融与固定时长场景下使用并保持掩码不变。式中 hbar 为源位置 sj 处的代理向量， Ae 为 m × n 的权重矩阵，元素非负且每行和为 1 ， k 遍历目标跨度的 n 个位置， huktgt 为目标实体第 k 个状态。消融中取均匀平均，即 Ajke = 1 / n ，把目标段压缩到源跨度内，长度保持为 T 。

\[\bar{\mathbf{h}}_{s_{j}}^{\mathrm{tgt}}=\sum_{k=1}^{n}A^{e}_{jk}\mathbf{h}_{u_{k}}^{\mathrm{tgt}},\]

该加权平均的统计直觉是，用目标段的凸组合近似源位置应有的读法向量，权重和为 1 保证尺度不漂移。当 n = 1 时退化为直接复制，当 n 很大而 m = 1 时多音节信息被压成一行，可能丢失时序细节。极端下若权重退化为独热向量，则只取单个目标词元，接近截断拼接。池化后的序列同样重建掩码但长度不变，随后送入交叉注意力，声学差异虽仍存在，但目标方向性弱于完整拼接，这正是附录消融用它来隔离传输路径的原因。

#### 双路编码到交叉注意力的走向

下图以 T5Gemma-TTS 为例展示双路编码与单路解码的连接，可先看底部输入文本箭头，再看左右编码器与右侧解码器的虚线交叉注意力。左侧小编码器处理由 Michelle 改写为 Michael 的向量化提示，中间大编码器处理完整源句，顶部橙色 Final layer 为替换发生处，右侧绿色解码器自下而上为首层、中间层与末层。输入文本为紫色标注而编码器框为蓝色解码器框为绿色，以颜色区分阶段。

[![原论文 Figure 2：Overview of SpeechSplice on T5Gemma-TTS.](https://arxiv.org/html/2611.30927v1/figure2_method.png)](https://arxiv.org/html/2611.30927v1/figure2_method.png)

*论文图 2：T5Gemma-TTS 双路冻结编码与交叉注意力解码的拼接位置示意（原论文 Figure 2）。*

像素显示左右蓝色编码器框各含首层、中间层与末层，末层为橙色高亮并以实线箭头连接，表示同一冻结编码器走 2 次。右侧 3 条水平虚线由编码器末层指向解码器各层，标注为 Cross-attention ，说明生成时每层都读取拼接后序列。解码器顶部经 XCodec2 生成波形并标注示例句 Michael presented her findings at the seminar. ，表明实体已按目标读法合成。该结构点明替换点位于文本侧最终输出，而非解码器内部。

### 三语母语听测接近满分且自然度无显著差异的注入效果

#### 评测协议与公平性核查

评测协议把公平性放在首位，基线 BL 与注入 INJ 使用同一文本、同一音色提示与同一解码配置，并在每次合成前把随机种子重置为相同值，使两条件仅差编码器输出拼接。跨语种基准每语种 300 对，由 50 个手写实体对与 6 个模板构成，源句与目标句仅差一个实体跨度。听测招募每语种 20 名母语者，每人评 25 项加 3 个捕捉试次，每项获 10 次独立判断共 500 次，另有 50 对做 5 级平均意见分 (MOS) 自然度评价并明确排除发音正确性。自动侧用包含目标读法的比例 (Whisper-INJ) 、神经代理质量估计 (UTMOS) 、基于 WavLM 的说话人验证嵌入 (WavLM-SV) 余弦相似度、基频变化比与时长差，方向分别为越高越好、越高越好、越高越好、越低越好与越低越好。

#### 主观听测与自动指标的主结果

下表汇总三语种听测与保持性指标，需结合主观与神经代理两类证据一起看。其中听测含配对比较与 MOS 两项独立研究且统计方法不同， INJ selected 为无条件选择率，把选 neither 也计为失败， MOS 为 5 级自然度均值， Whisper-INJ 为转写包含目标读法的比例， UTMOS 为神经代理质量估计，说话人相似度分 BL-INJ 与 INJ-提示两列，基频比低于 1 表示注入扰动小于句间自然起伏。

| Lang. | Paired comparison test INJ selected (%) ↑ | Naturalness MOS p | Whisper-INJ (%) ↑ | Speaker similarity BL–INJ ↑ |
| --- | --- | --- | --- | --- |
| EN | 99.4(+0.6/−0.8) | 0.45 | 96.33 (+1.61/−2.78) | 0.83 ± 0.01 |
| JA | 98.6(+1.4/−2.8) | 0.74 | 92.33 (+2.50/−3.57) | 0.94 ± 0.00 |
| ZH | 100.0(+0.0/−0.0) | 0.96 | 96.00 (+1.70/−2.86) | 0.91 ± 0.01 |

三语种中听者几乎每次都选注入片段， EN 为 99.4% ， JA 为 98.6% ， ZH 为 100.0% ，广义估计方程或精确二项检验均显著高于随机。MOS 的 BL-INJ 差在三语种 p 值分别为 0.45 、 0.74 与 0.96 ，未见显著差异，但原文明确未做等效性检验。自动侧 Whisper-INJ 分别为 96.33% 、 92.33% 与 96.00% ， UTMOS 在 3.3 至 3.9 量级内波动， BL-INJ 相似度高达 0.83 至 0.94 ，基频比均低于 1 。听者多数与 Whisper 在 8 项上不一致，其中 7 项为识别器把正确读音转写成近音词，说明自动分偏保守，另一项为注入多出一个莫拉而听者选 neither ，这是子串匹配漏掉的失效模式。

#### 与现有合成与编辑路线的对照

下表把同一英文子集上的 3 条技术路线放在相同计分口径下对照，重点看发音恢复率与时长音质代价。其中注入与目标句合成及扩散编辑分属不同接口但共用自动语音识别 (ASR) 管线， SpeechSplice 与 VoiceCraft 共用 3.25 s 的 LibriTTS 提示音色， EdiTTS 因不能克隆任意音色而改用其 Grad-TTS 骨干在 LJSpeech 上编辑。三系统声学域不同， UTMOS 只在各自系统内纵向比较，时长差直接反映接口差异。

| System | Whisper-INJ (%) ↑ | UTMOS Injected/ edited ↑ | Speaker similarity BL–INJ ↑ | \|Δduration\| (s) ↓ |
| --- | --- | --- | --- | --- |
| SpeechSplice (ours) | 96.33(+1.61/−2.78) | 3.82 ± 0.05 | 0.83 ± 0.01 | 0.00 ± 0.00 |
| VoiceCraft (zero-shot) | 90.00(+2.91/−3.92) | 3.63 ± 0.04 | 0.87 ± 0.01 | 0.20 ± 0.02 |
| EdiTTS† | 86.00(+3.47/−4.38) | 4.28 ± 0.02 | 0.97 ± 0.00 | 0.13 ± 0.01 |

该对照中 SpeechSplice 以 96.33% 的 Whisper-INJ 高于 VoiceCraft 的 90.00% 与 EdiTTS 的 86.00% ，且时长差为 0.00 s ，天然保持 BL 长度，而另两者分别改变 0.20 s 与 0.13 s 。三者 UTMOS 相对各自基线均无显著变化， p 值分别为 0.07 、 0.54 与 0.09 。说话人相似度上 SpeechSplice 对提示音色的漂移为 -0.001 且不显著， VoiceCraft 为 -0.009 且达到显著， EdiTTS 无法评测该项。基频比三者均较小， EdiTTS 最低为 0.74 ，且时长保持是构造性保证而非优化结果。结论成立的前提是英文单实体替换与相同管线，跨语种与多实体需另看后文。

在证据等级上需严格区分人工主观听测与神经代理指标，配对比较与 MOS 来自母语听者并设 neither 选项与捕捉试次，而 UTMOS 只是神经网络预测分， WavLM-SV 余弦与梅尔倒谱失真 (MCD) 为声学代理。当听者多数与识别器不一致时，多为识别器把正确读音转写成近音词而判失败，另有一例为注入多出莫拉而听者拒绝接受，说明自动分总体偏保守而非夸大，音高重音等仍未被覆盖。

### 交叉注意力读取路径决定注入成败的跨架构对比与遮挡验证

#### 跨架构 PIB 分界与替换深度扫描

跨架构比较覆盖 10 个公开 TTS 系统的 17 个模型语种条件，其中 5 个为编码器 - 解码器结构经交叉注意力读取文本，另 5 个为解码器单序列经自注意力共享文本。比较指标为整句 BL-INJ 的梅尔倒谱失真 (MCD) 与注入更优比例 (PIB) ， PIB 指 N = 300 对中注入降低实体音素错误率 (PER) 的比例， MCD 越高表示声学变化越大， PIB 越高表示越常朝目标读法移动。记 L 为文本经过的层数， l* 为替换发生的层数，编码器 - 解码器在 l* = L 处替换，解码器单序列在 l* = L - 1 处替换，第 5.4 节再扫描其余深度。

\[\mathrm{PIB}=\frac{1}{N}\sum_{p=1}^{N}\mathbf{1}[\,\mathrm{PER}^{\mathrm{INJ}}_{p}<\mathrm{PER}^{\mathrm{BL}}_{p}\,].\]

该比例的统计直觉是逐对比较注入前后相对目标读法的实体错误率，只要 INJ 更低即计 1 ，最后平均，与绝对错误率高低无关。当 N 固定为 300 时， PIB 为 50% 附近表示随机起伏，为 0% 表示无一对改善，为 100% 表示全部改善。极端下若替换未改变任何语义词元，如 Bark 多数对输出相同，则 PER 不变而判失败。PIB 只指示方向性改善，不度量音质，须与 MCD 、 UTMOS 与听测联合解读，下一步才进入跨行趋势。

下表在统一替换点上报告 MCD 与 PIB ，并附层扫描的最小到最大区间与双实体句的槽位准确率。其中层数与替换深度按原文定义并保持其余条件不变，双实体测试每语种 300 句各含两个槽位，共 600 个槽位判断，两槽不独立故按句重采样比较。解读时先看两组 PIB 是否重叠，再看浅层替换能否抬升解码器单序列的表现。

| Model | Lang. | At our replacement point MCD (dB) | At our replacement point PIB (%) ↑ | Two-entity sentences (%) BL | Two-entity sentences (%) INJ (both) ↑ |
| --- | --- | --- | --- | --- | --- |
| T5Gemma-TTS | EN | 9.95 ± 0.20 | 57.00(+5.48/−5.66) | 97.17 | 96.67 |
| Kiseki-TTS | JA | 5.28 ± 0.17 | 41.67(+5.65/−5.44) | 2.67 | 7.00 |
| Qwen3-TTS | EN | 2.30 ± 0.28 | 13.67(+4.35/−3.43) | 97.83 | 0.00 |
| XTTS-v2 | EN | 0.34 ± 0.08 | 2.67(+2.51/−1.31) | 96.33 | 0.00 |
| CSM-1B | EN | 4.74 ± 0.15 | 27.00(+5.29/−4.71) | 96.67 | 0.00 |

在被替换张量处两组 PIB 完全分离，编码器 - 解码器 8 个条件为 41.67% 至 65.33% ，解码器单序列 9 个条件为 2.67% 至 27.00% ，最低的 Kiseki-TTS JA 仍高于最高的 CSM-1B EN 。MCD 在所有条件大于 0 ，即使 XTTS-v2 EN 仅 0.34 dB 其区间也不含 0 ，说明解码器单序列也有声学变化但方向不对。深度扫描显示编码器 - 解码器随 l* 变化平坦， T5Gemma-TTS EN 在 56.67% 至 60.00% 间波动，而 CSM-1B 、 Llasa-3B 、 Bark 与 XTTS-v2 在最浅层可升至 41% 至 54% 量级，唯 Qwen3-TTS 在所有深度停留于 9% 至 15% 。双实体同时替换相对只换一个的句级差区间均含 0 ，未见可检测代价，但解码器单序列在该点两列全为 0.00% 。

#### 实体位置交叉注意力的遮挡证据

为验证实体位置交叉注意力是否为主要传输路径，原文在 T5Gemma-TTS 上做 4 条件消融，对比完整与遮挡实体列注意力的 BL-INJ 差异。注入改用均值池化以固定长度，仅遮挡交叉注意力到实体位置，且实体跨度来自词级时间戳。指标为实体跨度上的对数梅尔 (MEL) 相似度与方差归一化 MCD ，二者只度量声学差异而不指示目标方向，需与音素级验证联合看。

| Lang. | Metric | Cross-attention Intact | Cross-attention Blocked at entity |
| --- | --- | --- | --- |
| EN | MCD (dB) ↑ | 35.31 ± 0.27 | 0.00 ± 0.00 |
|  | MEL Similarity ↓ | 0.88 ± 0.01 | 1.00 ± 0.00 |
| JA | MCD (dB) ↑ | 31.73 ± 0.77 | 0.00 ± 0.00 |
|  | MEL Similarity ↓ | 0.94 ± 0.01 | 1.00 ± 0.00 |
| ZH | MCD (dB) ↑ | 35.37 ± 0.39 | 0.00 ± 0.00 |
|  | MEL Similarity ↓ | 0.86 ± 0.02 | 1.00 ± 0.00 |

遮挡前三语种 MCD 高达 31.73 dB 至 35.37 dB ， MEL 相似度为 0.86 至 0.94 ，表明注入引起巨大声学偏离。遮挡实体位置后 MCD 均为 0.00 dB ， MEL 相似度均为 1.00 ，差异被完全抹除，词元数匹配的日文子集结论相同。附录音素级复核显示日文完整条件下目标匹配率由 20.00% 升至 38.00% 而遮挡后两条件同为 0.00% ，英文则几乎无目标向改善，说明该消融证实路径存在而非独立的发音基准。

### 只在交叉注意力读取条件下成立的适用边界与复现要点

#### 假设边界与未验证范围

该结论成立依赖两个前提，一是生成器在被替换张量处经交叉注意力读取文本，二是分词器对源词与目标词给出不同标识。原文明确后者为预设而非测试结论， SpeechT5 的英文以外条件因此被排除而非计为失败。替换深度需经验确定， Bark 、 Llasa-3B 与 Qwen3-TTS EN 最优点在首层， XTTS-v2 、 CSM-1B 与 Qwen3-TTS 日中在中间层，尚无事前选择准则。目标读法必须在推理时正确给定，变长拼接要求重建掩码与位置索引，对其他位置编码方案的可移植性未经检验。伦理上该机制可被用于故意误读姓名，但需用户明确指定目标读法且干预限于实体跨度，风险相对局部。

未验证范围同样具体， MOS 每语种只用一个克隆参考说话人，自动发音判断依赖 ASR 与音素识别器，而 ASR 会漏掉听者能听出的错误，音高重音未评测。Kiseki-TTS 本身基线识别率极低，双实体仅用 UTMOS 估计音质而无听测，长文本、多说话人、低资源语种、紧密相邻实体与三实体以上均未测试。附录 160 项日文难读基准虽实现 45 处严格误读全部纠正，但其低频读法富集分布不能解读为自然文本错误率。

#### 复现核对与工程选型

复现核对需区分三件事，论文给出生成评分分析代码、基准列表与听测材料的仓库链接，以及试听页链接，本次收到的资源清单显示相关第三方链接可达，但未确认为作者自有资源状态。权重方面 10 个 TTS 与辅助模型均用公开冻结检查点，无训练过程，计算为单块 NVIDIA A100 40 GB GPU 约 275 GPU 小时合成加 40 GPU 小时评分， Irodori-TTS 单实体在 H100 80 GB 上运行。试听时建议对照基线与注入在同文本同音色下的实体读音、自然度与时长是否一致，而不预设未听过的听感。

从工程选型看，该方法适合需要在线局部纠正专有名词且不能重训的场景，前提是确认目标系统的文本侧经交叉注意力读取且分词标识可分。复现第一步建议跑通单实体变长拼接并核对掩码与位置重建，再补做目标语种多说话人与长句验证，同时检查目标读法给定是否正确并记录失败槽位，避免把单说话人 MOS 无显著差异直接解读为等效。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30927v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：三语言母语配对中注入被选率达99.4%、98.6%与100.0%，每语言500次判断并经显著性检验且MOS无显著差异。

- 核心优势：10个公开系统17个条件下编码器-解码器PIB最低41.67%与解码器独占最高27.00%无重叠分离，并有层深扫描与遮挡归零因果证据。

- 核心优势：保持全部权重冻结仅替换解码器所见文本侧张量，给出拼接公式与掩码位置重建及9个系统的文本侧张量指定。

- 主要短板：MOS无显著差异与双实体差异区间含零均未做等效性检验，无显著差异不能等同等效，结论强度受限。

- 主要短板：MOS每语言仅1个克隆参考音且自动判断依赖ASR与音素识别未评声调重音，双实体质量仅用UTMOS估计未做听测。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
