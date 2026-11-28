---
title: "AudioBERTScore: Objective Evaluation of Environmental Sound Synthesis Based on Similarity of Audio Embedding Sequences"
date: 2026-11-28
draft: false
description: "针对文本生成环境声音主观评价昂贵且已有客观分相关性弱的问题， AudioBERTScore 以冻结音频基础模型的嵌入序列余弦相似度并融合最大值与 p 范数评分，在 Clotho 验证集文本相关性上超过 MCD 、 WARP-Q 与 CLAPScore ，代价是必须依赖高质量参考音频且整体质量维度有所回落。"
tags: ["评测协议", "主观评测", "音频质量评估", "文本到音频生成"]
categories: ["audio-aaai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "环境声音合成的嵌入序列相似度客观评价"
paper_digest_original_title: "AudioBERTScore: Objective Evaluation of Environmental Sound Synthesis Based on Similarity of Audio Embedding Sequences"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:audio-aaai:2026:conference-paper-id:kishi26a"
paper_digest_workbench_source_sha256: "bc948f520e5c2c9e6bf059731b37e17e69bc41bfe3c352cd85120431ebe4732d"
paper_digest_workbench_record_url: "https://proceedings.mlr.press/v312/kishi26a.html"
paper_digest_workbench_pdf_url: "https://raw.githubusercontent.com/mlresearch/v312/main/assets/kishi26a/kishi26a.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频质量评估"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本生成环境声音主观评价昂贵且已有客观分相关性弱的问题， AudioBERTScore 以冻结音频基础模型的嵌入序列余弦相似度并融合最大值与 p 范数评分，在 Clotho 验证集文本相关性上超过 MCD 、 WARP-Q 与 CLAPScore ，代价是必须依赖高质量参考音频且整体质量维度有所回落。"
paper_digest_reader_sections: [{"heading":"文本生成环境声音的主观评价贵在哪里，客观分数又错在哪里","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双路嵌入序列比对的总体评分流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"余弦矩阵上最大值与 p 范数如何分别捕捉局部与弥散相似","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"深层语义特征为何更懂环境声：三类提取器的逐层对比","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"从最大值到 p 范数与负插值：超参数扫描与最终对照","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"方法成立的前提、失效类别与复现核对清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Keio University, Japan"],"name":"Minoru Kishi"},{"affiliations":["Keio University, Japan"],"name":"Ryosuke Sakai"},{"affiliations":["Keio University, Japan","The University of Tokyo, Japan"],"name":"Shinnosuke Takamichi"},{"affiliations":["The University of Tokyo, Japan"],"name":"Yusuke Kanamori"},{"affiliations":["The University of Tokyo, Japan"],"name":"Yuki Okamoto"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"2e2830231e590b9d463ef129be205f1db7adba5e374fde24c423cc3607172dc0","url":"/audio-research-portal/client/papers/2026-11-28/conference-a6b2987575951ca4242b4ab7/citation.bib"},"citation.json":{"sha256":"b1eaebaa55a0e854ca0666264de1c41c34b39e12eed78a212d146c787454a8fe","url":"/audio-research-portal/client/papers/2026-11-28/conference-a6b2987575951ca4242b4ab7/citation.json"},"citation.ris":{"sha256":"b651fa7bfa039d2b9919611ff9ee7ed1e681b178a81ce29278b0180f6f9b4cc5","url":"/audio-research-portal/client/papers/2026-11-28/conference-a6b2987575951ca4242b4ab7/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ffc5414f5145348549138cd80ce19c9784a3adb169d443fa19e312b4ea5e87dd","url":"/audio-research-portal/client/papers/2026-11-28/conference-a6b2987575951ca4242b4ab7/rethink-context.json"}}
paper_digest_paper_id: "conference:audio-aaai:2026:conference-paper-id:kishi26a"
paper_digest_source_kind: conference
paper_digest_conference_id: "audio-aaai-2026"
paper_digest_conference_name: "audio-aaai-2026"
paper_digest_conference_record_url: "https://proceedings.mlr.press/v312/kishi26a.html"
paper_digest_conference_pdf_url: "https://raw.githubusercontent.com/mlresearch/v312/main/assets/kishi26a/kishi26a.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "4712429289f529d87c56f9a39ed9ec3f5c8bbc5b8bd456ef06934ca265495be7"
paper_digest_api_reader_plan_sha256: "a6fa213a13a940f3c14b7bc2b64e59a91353c2ac0dd6f32435e343d26fa6cae9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "39a2b573fce1bea287a18291c17edbc1b955e45d06e0248e00cdac1effa7715e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4bc2463b944b4033aaf81c29914a5d42f0b90d12a80b8be96ee74fac64b785ae"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e8398a099074b9475ea9dc96074a6246f20d0471377ad024dec649c7e642b466"
paper_digest_api_reader_resource_count: 7
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.audio-quality","label":"音频质量评估"},{"facet":"task","id":"task.text-to-audio","label":"文本到音频生成"}]
paper_digest_primary_method: "评测协议"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 环境声音合成的嵌入序列相似度客观评价

> 英文题目：*AudioBERTScore: Objective Evaluation of Environmental Sound Synthesis Based on Similarity of Audio Embedding Sequences*

> 会议身份：`conference:audio-aaai:2026:conference-paper-id:kishi26a`
> Track：Audio-AAAI 2026



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://proceedings.mlr.press/v312/kishi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v312/main/assets/kishi26a/kishi26a.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频质量评估](/audio-research-portal/papers/?concept=task.audio-quality)；[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [文本到音频生成](/audio-research-portal/papers/?concept=task.text-to-audio)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.2/10 | 技术严谨 5.8/10 | 实验充分 7.2/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 3.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Minoru Kishi：Keio University, Japan
- Ryosuke Sakai：Keio University, Japan
- Shinnosuke Takamichi：Keio University, Japan；The University of Tokyo, Japan
- Yusuke Kanamori：The University of Tokyo, Japan
- Yuki Okamoto：The University of Tokyo, Japan

## 📌 核心摘要

**问题与瓶颈：** 文本到音频生成（text-to-audio generation，TTA）以文本提示合成环境声，合成质量以整体质量（overall quality，OVL）与文本相关性（relevance，REL）两项主观平均意见分（mean opinion score，MOS）衡量，人工评测耗时耗钱。现有无监督、有音频参考的客观指标如梅尔倒谱失真（mel-cepstral distortion，MCD）与 WARP-Q 只比较信号处理特征，与主观分的相关性在 TTA 语境下未经系统验证，而弗雷歇音频距离（Fréchet audio distance，FAD）需大量样本估计分布才稳定。对比语言音频预训练相似度如对比语言音频预训练分数（contrastive language-audio pretraining score，CLAPScore）依赖文本音频成对预训练的语言覆盖，监督回归基准又需大规模主观分训练。环境声兼有枪声类瞬时局部事件与溪流类非局部连续纹理，照搬自然语言与语音的极大值对齐假设难以兼顾两类结构。

**核心思路与方法架构：** 与极大值对齐基线相比，实质增量是在余弦相似矩阵池化中引入 p 范数平均与极大值插值，保留音频基础模型提取嵌入序列的无监督、有参考、语言无关路线。单条样本取合成波形与参考波形，统一重采样至 16 kHz，经同一编码器得到维度为 D 的帧嵌入序列，长度由各自时长决定。对两序列逐帧求余弦相似度构成相似矩阵，先按行列取极大值得到精确率、召回率与 F1，再用 p 范数在行列方向求平均，p 为 1 时为全局平均，p 增大时偏向局部峰值，p 趋于无穷时退化为极大值。最终以系数 λ 插值两者，论文定义域为 0 到 1 之间，实验最优取 p 为 106 与 λ 为 -3.5，超出原定义区间以加重非局部项，编码器按无需训练的描述为预训练参数直接使用。特征提取对比中，音频频谱 Transformer（audio spectrogram transformer，AST）第 13 层与自监督音频教师学生 Transformer 帧模型（ATST-Frame）第 10 层相关性较高，前者在环境声分类微调后更具上下文信息，计算需完整合成与参考音频的整段相似度。

**关键实验与核心代价：** 在以多样性核心集选出的 100 条 Clotho 自然声音为参考、4 种合成系统生成并经众包打分过滤后保留 324 个样本的测试集上，F1 在 λ 为 -3.5 且 p 为 106 的配置在相关性上整体高于同条件基线。原文报告整体质量线性相关系数（linear correlation coefficient，LCC）为 0.374，高于 MCD 的 0.158 与 WARP-Q 的 0.027，文本相关线性系数为 0.375，高于两者的 0.059 与 0.045。同一配置文本相关斯皮尔曼等级系数（Spearman’s rank correlation coefficient，SRCC）为 0.354，高于 PAM 的 0.143 与 LAION CLAP 的 0.339，但在整体质量斯皮尔曼系数上为 0.332，低于 PAM 的 0.417。消融显示 p 在 100 附近达到峰值且 106 略优于 100，λ 从 1 降至 -4 相关性上升而至 -5 回落，引入 p 范数与负 λ 使整体质量线性系数从极大值基线的 0.426 降至 0.374 而文本相关线性系数从 0.339 升至 0.375。方法无需监督训练，逐样本计算全相似矩阵，原文未实测延迟与吞吐。按 AudioSet 顶层类别拆分后，除器物声外各类别均受益，而器物声在非局部加权下相关性下降，提示脉冲非平稳声不适用该加权。

**适用边界与深读导览：** 结论依赖有高质量参考音频且参考与文本强相关，已剔除相关性主观分低于 3.5 的样本，未覆盖无参考、跨语言提示与长时部署场景。音乐类仅 4 个样本，其 REL 的 LCC 在该配置下为 0.911，在 F1max 下为 0.809，样本过少不宜外推。方法需逐样本计算全相似矩阵，对 15 秒至 30 秒音频的显存与耗时原文未实测。欲深究极大值与 p 范数公式及层消融曲线可查下方方法概述和架构与实验结果对应小节，对照表 3 与表 4 核对跨类别差异。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/lourson1091/audiobertscore> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/haoheliu/AudioLDM2> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/haoheliu/AudioLDM> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/facebookresearch/audiocraft> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/spaces/declare-lab/tangoFlux> → <https://huggingface.co/spaces/declare-lab/TangoFlux> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/nttcslab/byol-a/blob/master/v2/AudioNTT2022-BYOLA-64x96d2048.pth> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/YuanGongND/ast/blob/master/pretrained_models/README.md> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成环境声音的主观评价贵在哪里，客观分数又错在哪里

文本到音频生成要求由一句话合成一段环境声音，例如由英文描述生成小狗吠叫。这类合成音频常用于媒体素材与角色情绪表达，其最终质量在 DCASE 2024 挑战中仍以人工听测为准。人工评价分为整体质量与文本相关性两个维度，前者关注自然度与听感，后者关注声音与输入文本是否对应。两种分数通常采用 5 分制，由多位评分者取平均，但逐样本组织听测需要大量时间与经费。

已有客观分数可按是否需要训练、是否使用参考以及是否使用预训练模型划分。信号距离类如 MCD 与 WARP-Q 只比较合成与参考音频的信号处理特征，具有输入文本语言无关的优点，但其与主观分的相关性此前未在文本到音频任务中验证。分布距离类 FAD 比较两组嵌入分布的距离，需要足够多样本才稳定。免参考类 CLAPScore 与 PAM 依赖文本与音频配对预训练，适用语言受预训练语料限制，且已有报告显示 CLAPScore 与主观分相关性偏低。有监督的 RELATE 基准直接拟合主观分，相关性潜力高，但需要大规模主观标注。

自然语言的 BERTScore 与语音合成的 SpeechBERTScore 给出一条可借鉴的路线，即用预训练模型抽取上下文嵌入序列，再以强制对齐方式计算两序列相似度。这条路线默认高相似嵌入在时间上局部集中，对词组与音段成立。环境声音并不总是如此，枪声是瞬时局部事件，嵌入在时间上成团，而溪流潺潺这类连续非结构声音的嵌入会弥散在很长时间上。若只取每一帧的最大相似度，弥散的次高相似会被丢弃，难以反映整体氛围的符合程度。

本文提出的 AudioBERTScore 保留无监督与使用音频参考的设定，维持语言无关的优点，同时用音频基础模型的嵌入替代信号特征，并以最大值范数与 p 范数的插值兼顾局部与非局部相似。论文用线性相关系数与斯皮尔曼秩相关系数衡量客观分与主观分在全部样本上的单调与线性一致性。结论成立的前提是参考音频本身与文本高度相关、特征提取器参数冻结且超参数在独立数据上调好，代价是推理时必须有可信参考音频，并承担基础模型的计算开销。

### 双路嵌入序列比对的总体评分流程

AudioBERTScore 的输入是两段波形，输出是一个分数。右侧分支由文本经文本到音频系统生成合成音频，左侧是与该文本构成真值对的参考自然音频。两路音频分别经过相同的特征提取器，得到两条长度可能不同的嵌入序列，再送入基于相似度的度量模块，输出分数。论文期望该分数与合成音频的主观分具有高相关性，从而在不做人工听测时预判整体质量与文本相关性。

在阅读原图之前，建议先沿箭头追踪 3 条线索，顶部的文本与真值对连线，中间两路从波形到嵌入的变换，以及底部从分数指向主观分的双向箭头，这样可以一次看清数据从何而来、向何处汇合，并理解为何评价必须同时使用合成与参考两路音频而非仅用文本。

[![原论文 Figure 1：Overview of the proposed AudioBERTScore.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-1.png)

*论文图 1：双路评分流程示意：文本生成合成音频，两路波形经特征提取器得到嵌入序列后汇入相似度度量并与主观分对比（原论文 Figure 1）。*

原图左侧为蓝色边框的参考波形，右侧为深红色边框的合成波形，上方米色块为文本，灰色块分别标注文本到音频变换与两路特征提取器。两组彩色短条表示嵌入序列，箭头在中央灰色相似度度量块汇合，向下输出米色分数块。顶部折线将文本与参考音频连为真值对，分数块与最下方的主观分之间以双向箭头连接，并标注高相关性，表明评价目标不是重建波形，而是预测人工听感排序。

以 1 秒音频为例，若按 16 kHz 采样，波形为 16,000 个采样点的一维序列。编码器将其映射为长度为 L 的嵌入序列，每一帧为 D 维向量，合成与参考的长度分别记为 Lsyn 与 Lref ，一般并不相等，具体帧率与维度原文未披露。两序列经两两余弦相似度展开为 Lsyn 行 Lref 列的矩阵，再按行或列汇聚为准确率、召回率及其调和平均。整个流程中预训练编码器参数冻结，不做任何微调，推理时为离线整段计算，原文未披露分块流式、前瞻延迟、实时率或显存开销。

### 余弦矩阵上最大值与 p 范数如何分别捕捉局部与弥散相似

特征提取阶段记合成波形为 \(s\) ，参考波形为 \(r\) ，两者采样点数 Tsyn 与 Tref 一般不同。编码器输出嵌入序列 \(S\) 与 \(R\) ，维度为 \(D\) ，长度分别为 Lsyn 与 Lref ，由时长决定。相似度矩阵 \(M\) 的每个元素为对应 2 帧嵌入的余弦相似度，取值在 - 1 至 1 之间，数值越大表示音色与语义越接近。该矩阵不做时间对齐，允许长短不一的两段音频逐帧互相寻找最相似的对应帧。

下图分为上下两板，共用同一组示例数值，上板演示只取最大值，下板演示 p 范数同时计入整行整列，中间以虚线分隔，阅读时请先对比右侧汇聚箭头标注的最大值与 p 范数，再看金色边框强调的单元素与全元素差异，以及右侧平均与下方平均的方向区别。

[![原论文 Figure 2：Similarity computation in our method.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-2.png)

*论文图 2：最大值与 p 范数汇聚对比：上板每行每列只取峰值，下板整行整列共同参与平均（原论文 Figure 2）。*

上板中第一行 0.62 、 0.30 、 0.87 、 0.58 、 0.01 的最大值为 0.87 ，第四行最大值为 0.82 ，逐行取最大值后平均得到最大值版准确率。逐列取最大值得到 0.68 、 0.43 、 0.87 、 0.58 、 0.82 ，平均后得到最大值版召回率，金色边框提示 0.82 只被计数一次。下板在 p = 2 时同一行算出 0.46 ，同一列算出 0.41 ，右侧 0.56 、 0.33 、 0.40 与下方 0.57 、 0.26 、 0.50 、 0.43 均为整行或整列共同贡献的结果，标注全元素均被计数。两板对比直观说明最大值只保留峰值， p 范数保留弥散相似。

当 \(p = 1\) 时为简单平均，强调整体非局部相似， \(p\) 增大则更重视局部峰值， \(p\) 趋于无穷时退化为最大值。为兼顾两者，方法以系数 \(λ\) 对最大值版与 p 范数版做线性插值， \(λ = 1\) 或 \(p\) 趋于无穷时等价于最大值版。原文将 \(λ\) 定义在 0 至 1 之间，但实验进一步试探负值，相当于反向放大 p 范数的权重，其物理意义弱于常规插值，使用时应视为经验外推。准确率表示合成覆盖参考的程度，召回率表示参考被合成覆盖的程度，两者调和平均为 F1 分数。

### 深层语义特征为何更懂环境声：三类提取器的逐层对比

评测使用两个数据集， PAM 测试集用于调节 \(p\) 、 \(λ\) 与特征提取器， Clotho OVL-REL 测试集用于验证最优配置，两者无重叠，且后者与特征提取器的训练数据也无重叠。 PAM 测试集含 100 组自然音频与文本及 4 种系统生成的 400 段合成音频，每段合成时长为 5 秒，参考时长为 10 秒。 Clotho 测试集精选 100 条文本并以 4 种系统各生成 1 段，合成时长与参考对齐，约为 15 秒至 30 秒。全部音频下采样至 16 kHz ，主观分均为 5 分制下 10 位评分者的平均值，并剔除参考文本相关性低于 3.5 分的低质量组。相关性在全部样本上计算线性与秩相关系数，同条件对比为 MCD 与 WARP-Q ， FAD 因需多样本分布计算而未纳入逐样本对比。

下图包含 12 个子图，行为准确率、召回率与 F1 分数，列为整体质量与文本相关性在线性与秩相关下的 4 种组合，阅读时请先看横轴第 1 层至第 13 层与纵轴相关性，再对比蓝色圆点 AST 、橙色方块 ATST-Frame 与 3 条 BYOL-A 水平线的相对位置，并注意左列整体质量与右列文本相关性的差异。

[![原论文 Figure 3：Correlation under several settings of feature extractors and similarity computation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-3.png)

*论文图 3：三类提取器逐层相关性： AST 深层最高， ATST-Frame 中层起伏， BYOL-A 水平线偏低（原论文 Figure 3）。*

图线显示 AST 的蓝色折线多随层数上升，在深层达到最高，尤其在文本相关性两列攀升明显。 ATST-Frame 的橙色折线在中层上升较快，部分子图在第 7 层至第 10 层曾超过 AST ，随后持平或回落，并非在所有层与所有指标上落后。 BYOL-A 的 3 条水平线大多贴近 0 至 0.2 ，局部特征在整体质量上略高，全局与拼接特征在文本相关性上略高，但在深层最佳配置下明显低于两个 Transformer 模型。纵轴范围均为 0 至 0.5 以上，横轴均为第 1 层至第 13 层，网格与图例在 12 个子图中保持一致。

按平均相关性选出的最佳配置为 AST 第 13 层最大值版 F1 分数，整体质量线性相关为 0.426 与秩相关为 0.395 ，文本相关性分别为 0.339 与 0.317 。 ATST-Frame 第 10 层最大值版召回率整体质量为 0.366 与 0.362 ，文本相关性为 0.256 与 0.250 。 BYOL-A 全局特征最大值版召回率整体质量仅为 0.055 与 0.045 ，文本相关性为 0.116 与 0.121 。结果表明上下文建模能力与环境声音分类微调均有增益，且召回率普遍高于准确率， AST 在第 6 层至第 7 层准确率跃升、第 8 层至第 10 层召回率跃升的原因原文称仍需进一步研究。

### 从最大值到 p 范数与负插值：超参数扫描与最终对照

固定 AST 第 13 层 F1 分数后，论文在 PAM 测试集上扫描 \(p = 1\) 、 \(5\) 、 \(10\) 、 \(50\) 、 \(100\) 、 \(150\) 与 \(λ\) 在 0 至 1 之间的组合。 \(p = 1\) 接近全局平均， \(p = 100\) 已接近最大值行为， \(p = 106\) 在正文中报告略优于 \(p = 100\) ，最终在独立验证集上采用 \(p = 106\) 与 \(λ = -3.5\) 。扫描目标是观察局部峰值与弥散相似的不同权重如何影响整体质量与文本相关性，特别是在 \(λ = 0\) 纯 p 范数端与 \(λ = 1\) 纯最大值端的差异。

下图有 4 个子图，分别为整体质量与文本相关性在线性与秩相关下的表现，横轴均为 \(λ\) 从 0 至 1 ，纵轴均为相关性，阅读时请按颜色区分 \(p\) 取值，重点比较深蓝色小 \(p\) 曲线的陡峭上升与浅色大 \(p\) 曲线的高位平坦，以及右两列文本相关性对 \(p\) 更敏感而左两列整体质量变化平缓的现象。

[![原论文 Figure 4：Correlation using p-norm-based calculation with various p and λ. (The PAM test set)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/audio-aaai-2026/b16b04bf5295/figure-4.png)

*论文图 4：p 与插值系数扫描：小 p 曲线陡峭上升，大 p 曲线高位平坦，文本相关性分层更明显（原论文 Figure 4）。*

图线显示 \(p = 1\) 的深蓝色曲线起点最低，整体质量线性相关约 0.23 ，文本相关性线性与秩相关分别约 0.26 ，随 \(λ\) 增大陡峭上升至 1.0 端约 0.37 、 0.40 与 0.49 。 \(p = 100\) 的浅色曲线起点最高，整体质量约 0.40 ，文本相关性分别约 0.52 与 0.54 ，随 \(λ\) 增大略降并在右端与其他曲线汇合。 \(p = 150\) 的红色曲线略低于 \(p = 100\) ，表明并非 \(p\) 越大越好。左两列整体质量随 \(p\) 与 \(λ\) 变化幅度较小，右两列文本相关性分层更明显，说明非局部信息主要改善语义对应而非听感质量。

在 Clotho 验证集上，最大值版 F1 分数整体质量为 0.426 与 0.395 ，文本相关性为 0.339 与 0.317 。纯 p 范数版 \(λ = 0\) 、 \(p = 106\) 整体质量为 0.420 与 0.346 ，文本相关性升至 0.392 与 0.335 。负插值版 \(λ = -3.5\) 、 \(p = 106\) 整体质量回落至 0.374 与 0.332 ，文本相关性为 0.375 与 0.354 。相比之下 MCD 整体质量仅为 0.158 与 0.112 ， WARP-Q 更低。不同条件的 PAM 整体质量秩相关为 0.417 ，略高于本方法， LAION 版 CLAPScore 文本相关性为 0.361 与 0.339 。按事件分解， p 范数与负插值在动物、自然、人声等类别提升明显，但在器物碰撞等脉冲非平稳声音上下降，音乐类仅 4 个样本，相关性数值不稳定。

### 方法成立的前提、失效类别与复现核对清单

该方法的有效范围建立在 3 个执行前提之上。首先是参考音频本身与文本高度相关，PAM 测试集以 100 组自然音频为参考并用 4 种合成系统各生成 1 段合成音频，剔除参考文本相关性低于 3.5 分的 17 组；Clotho OVL-REL 测试集按文本与音频多样性挑选 100 条自然声音为参考并用 4 种系统合成，剔除低于 3.5 分的 19 组，所有音频降采样至 16 kHz，合成与参考时长在 PAM 为 5 秒对 10 秒，在 Clotho 为对齐的 15 秒至 30 秒。若参考本身偏离文本，相似分数便失去比较基准。其次是单样本逐段评分，余弦相似矩阵先算合成覆盖参考的准确率与参考被覆盖的召回率再取调和平均，需要多样本估计分布的 FAD 不在同一比较口径内。第三是编码器参数冻结，语言无关的优点成立，但增益依赖环境声音表示，离线整段计算未验证分块流式情形。

最大值与 p 范数的分工解释了整体与分事件走向。最大值版只计每帧最大相似，假定高相似在时间上集中，枪声等瞬时声符合该假定而溪流等连续声不符合；p 范数版计入全部相似，\(p = 1\) 时为整体平均，\(p\) 增大则更偏重局部峰值，\(p \to \infty\) 时回到最大值版，\(\lambda\) 在两者之间插值。引入 p 范数与负插值后，整体质量线性与秩相关均下降，而文本对应线性与秩相关均上升，说明弥散相似有助于捕捉语义对应，却会抑制对音质损伤的敏感度。分事件看，人类声音与自然声音等具有时谱结构的类别全面提升，器物碰撞与门关闭等非平稳脉冲声则全面下降，音乐类仅 4 个样本不宜外推，论文亦未报告方差与置信区间。

复现应严格对齐论文给出的组合与待发布事项。论文写明代码与 Clotho OVL-REL 测试集将在项目页公开，特征提取器权重分别指向各自公开仓库，同条件对照为 MCD 与 WARP-Q，PAM 与 CLAPScore 仅作不同条件参考。人工听测在 PAM 为每样本 10 位评分者的 5 级平均意见分，在 Clotho 为众包平台按相同指导语收集，具体人数与一致性未在正文量化。原文未披露训练硬件与推理实时率等工程细节，超参数应采用 AST 第 13 层、\(p = 106\) 与 \(\lambda = -3.5\) 的组合。若更看重文本对应可采用负插值版，若更看重音质可保留最大值版，对脉冲声与长时连续声应分别验证后再选型。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：全部音频下采样至 16 kHz ， PAM 测试集合成时长为 5 秒参考时长为 10 秒， Clotho 验证集合成与参考对齐约为 15 秒至 30 秒，编码器帧率步长码率通道维度与目标响度原文未披露
- **训练与评测数据**：无度量训练阶段，编码器参数冻结， PAM 测试集含 100 组自然音频文本与 400 段合成音频，剔除 17 组低文本相关性后剩余 83 组， Clotho 验证集精选 100 条文本生成 400 段合成音频，剔除 19 组后剩余 81 组共 324 段合成音频用于验证
- **算力与训练耗时**：原文未披露训练与推理所用 GPU 型号数量步数耗时与显存占用，仅说明使用冻结预训练模型做离线评分
- **核心超参数与配置**：最佳配置为 AST 第 13 层最大值版 F1 分数，对比配置为 ATST-Frame 第 10 层最大值版召回率与 BYOL-A 全局特征，最终验证采用 p = 106 与 λ = -3.5 ，纯 p 范数对应 λ = 0 ，纯最大值对应 λ = 1
- **推理速度与部署开销**：原文未披露实时率延迟吞吐与显存开销，方法为整段离线余弦矩阵计算，时长不同则矩阵行列数不同，未说明分块流式或前瞻窗口
- **开源产物与协议状态**：论文称代码将在项目页公开，资源核查显示该链接当前可达但记录归属为第三方，不等同于作者已正式开源， Clotho 验证集论文称将发布，编码器权重指向各自公开仓库
- **附录与补充材料要点**：原文未披露附录证明补充消融许可限制，事件分解与负插值讨论均在正文第 4 节，失效案例为器物类脉冲声音与仅 4 个样本的音乐类

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.2/10 | 技术严谨 5.8/10 | 实验充分 7.2/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 3.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:audio-aaai:2026:conference-paper-id:kishi26a`
- 会议来源：[官方记录](https://proceedings.mlr.press/v312/kishi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v312/main/assets/kishi26a/kishi26a.pdf)
- Track：Audio-AAAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在324样本Clotho测试集上REL SRCC达0.354为对比列最高，同条件大幅超越MCD与WARP-Q且调参与验证集分离。

- 核心优势：给出余弦相似矩阵极大值与p范数插值完整公式，并系统对比AST第13层等三类编码器与p与λ扫参形成直接消融链。

- 主要短板：λ定义域为0到1却外推至-3.5加重非局部项，仅以实验趋势假设支撑而无理论证明。亦承认层间突变需进一步研究。

- 主要短板：未报告置信区间与显著性检验，最终配置OVL SRCC为0.332明显低于PAM的0.417且器物声加权后四项系数全面下降。

---

[← 返回 audio-aaai-2026 论文汇总](/audio-research-portal/posts/conference-audio-aaai-2026/)
