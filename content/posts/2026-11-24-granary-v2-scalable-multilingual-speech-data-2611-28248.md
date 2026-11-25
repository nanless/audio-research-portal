---
title: "Granary-v2: Scalable Multilingual Speech Data Curation for Predictable and Controllable Model Outputs"
date: 2026-11-24
draft: false
tags: [语音识别, 语音翻译, 音频字幕生成, 数据集构建, 数据集]
categories: [论文速递]
description: "Granary-v2 围绕同一段语音构造对齐的多形式转写与指令目标对，以 843,579.22 小时 48 种语言支撑语音语言模型的可控输出，并在固定 300,000 步下用高质量子集把英文平均 WER 从 4.91% 降到 4.67%，代价是三项干净集略有回退与高度集中的语料分布。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28248"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Granary-v2：为可控输出构造多目标语音监督"
paper_digest_original_title: "Granary-v2: Scalable Multilingual Speech Data Curation for Predictable and Controllable Model Outputs"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28248v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28248v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28248v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "Granary-v2 围绕同一段语音构造对齐的多形式转写与指令目标对，以 843,579.22 小时 48 种语言支撑语音语言模型的可控输出，并在固定 300,000 步下用高质量子集把英文平均 WER 从 4.91% 降到 4.67%，代价是三项干净集略有回退与高度集中的语料分布。"
paper_digest_reader_sections: [{"heading":"同一段录音需要多种写法，单一转写难以支撑指令控制","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三条可独立运行的流水线把原始音频变成带质量标记的训练目标","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"语言相关双模型转写与幻觉校验得到语音忠实文本","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"文本加工从语音忠实文本派生书面形式问答与翻译并打包指令","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"高质量筛选在固定步数下降低平均词错误率但三项干净集略有回退","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"覆盖不均与纯文本推断的边界决定复现与选型前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nithin Rao Koluguri"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Meline Mkrtchyan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nune Tadevosyan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Aaftab V"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sushmitha Deva"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fan Qian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Davit Karamyan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kunal Dhawan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Taejin Park"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Piotr Zelasko"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Arushi Dhingra"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Viraj Karandikar"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shuoyang Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Slyne Deng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Onur Yilmaz"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Praateek Mahajan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Utkarsh Vaidya"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nikolay Karpov"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jagadeesh Balam"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Boris Ginsburg"}]
paper_digest_abstract_sha256: "84d9f0ac430561b8163a5b584e29a5b7076e4ecd68ccdb9d447afb36ecdc5bdf"
paper_digest_sidecars: {"citation.bib":{"sha256":"9fdcfd5ef6399053c35ec286ee2a18b2a5646c4232ab07a9755f0f25bf2234ee","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28248/citation.bib"},"citation.json":{"sha256":"c8be3fbfc4501003d8a5f7baacad0fec134f1ba6ac4ea2227a3faa6caa6ef62d","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28248/citation.json"},"citation.ris":{"sha256":"5125e2314ed91e9c6e9778fceed39a372fddb378689450e316f40f0f178915fb","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28248/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"382757ec8562fcb7a224a8c4d5b741cf3a1f9858d23a9c91626e24fcf29dbb3b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28248/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "5549ea99c12b1e8d302731480bb6e1247e18eccae9b72151c73aef9733310134"
paper_digest_api_reader_plan_sha256: "849657926652af22862d6443786beec80f2bafacc82b42751ffc2aa9195a8ca3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1cb732d6fc189349d0aac7cbdddd7c00ea7aba172f4b6582c47a15e6d216eb13"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "6fedb8d846940ec1e4b5efcd5afd5120de6a9b358c24954a8e867f55fbea98fc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1b1ea050c83651162490ba825e524031ec6c2d9f840fadd31bf605e3f0efee8f"
paper_digest_api_reader_author_count: 20
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3788d126b5394b9436e105e4486741dfbd44b4f3a22dd77fd3d3fce3f3285d5a"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Granary-v2：为可控输出构造多目标语音监督

> 英文题目：*[Granary-v2: Scalable Multilingual Speech Data Curation for Predictable and Controllable Model Outputs](https://arxiv.org/abs/2611.28248v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 6.7/10 | 技术严谨 6.9/10 | 实验充分 7.1/10 | 清晰度 7.0/10 | 影响力 7.5/10 | 开源 0.0/10 | 可复现 6.2/10 | 工程/实践 7.8/10


## 👥 作者与机构

- Nithin Rao Koluguri：机构信息未能在本次解析中与作者逐人可靠绑定
- Meline Mkrtchyan：机构信息未能在本次解析中与作者逐人可靠绑定
- Nune Tadevosyan：机构信息未能在本次解析中与作者逐人可靠绑定
- Aaftab V：机构信息未能在本次解析中与作者逐人可靠绑定
- Sushmitha Deva：机构信息未能在本次解析中与作者逐人可靠绑定
- Fan Qian：机构信息未能在本次解析中与作者逐人可靠绑定
- Davit Karamyan：机构信息未能在本次解析中与作者逐人可靠绑定
- Kunal Dhawan：机构信息未能在本次解析中与作者逐人可靠绑定
- Taejin Park：机构信息未能在本次解析中与作者逐人可靠绑定
- Piotr Zelasko：机构信息未能在本次解析中与作者逐人可靠绑定
- Arushi Dhingra：机构信息未能在本次解析中与作者逐人可靠绑定
- Viraj Karandikar：机构信息未能在本次解析中与作者逐人可靠绑定
- Shuoyang Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Slyne Deng：机构信息未能在本次解析中与作者逐人可靠绑定
- Onur Yilmaz：机构信息未能在本次解析中与作者逐人可靠绑定
- Praateek Mahajan：机构信息未能在本次解析中与作者逐人可靠绑定
- Utkarsh Vaidya：机构信息未能在本次解析中与作者逐人可靠绑定
- Nikolay Karpov：机构信息未能在本次解析中与作者逐人可靠绑定
- Jagadeesh Balam：机构信息未能在本次解析中与作者逐人可靠绑定
- Boris Ginsburg：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 语音语言模型需要按自然语言指令对同一段录音给出不同形态，听写场景要求数字读作文字并保留语气词、重复与口误，展示场景要求数字写作符号并删除填充词与中断，分析场景还需要领域词提示、语种混合转写与跨语翻译。现有语料多为一段录音配一种转写，各来源在标点、数字与迟疑处理上并不统一，模型看不到同一音频在多种规范下分别应该输出什么，也缺少指令与目标形态的成对证据，输出选择难以预测与控制。Granary-v1 只提供单一转写加翻译，语言覆盖 25 种，也无法支撑多任务指令训练，因而需要可复用的多语言数据治理系统。

**核心思路与方法架构：** 核心洞察是围绕同一语音忠实文本派生多种对齐目标，并把任务与形态要求写进指令，让模型从同一音频学会输出选择。系统以 NeMo Curator 组织元数据、识别标注、文本生成三条管线，短句输入跳过元数据步直接进入标注，长录音才经过流式或离线 diarization 与语种识别。标注按语种选择主备识别模型给出候选并做结构校验与幻觉过滤，有可信人工转写时用音频引导的 Qwen3-Omni 补齐口语细节并保留实体拼写，字符级语种用字符错率阈值 0.05、词级语种用词错率阈值 0.01 等一致性规则筛选高质量记录。清洗后的口语文本由 Qwen3.6-27B-FP8 生成标点文本、口语形态、保留与去除迟疑的书面形态、语码混合文本、字幕与问答，上下文与翻译只在通过筛选的记录上补充，其中翻译用 Qwen3.5-122B-A10B-FP8 并保留质量估计分数，全部生成模型仅用于推理标注而不参与下游训练更新。最终全量处理约 843,600 小时唯一音频并覆盖 48 种语言，为每段音频打包指令与目标对以支持提示控制。

**关键实验与核心代价：** 在固定 300,000 步预算下，英语 Transformer-TDT 识别器以全部 347,178.90 小时为基线，以 162,845.95 小时高质量子集为对照，在 9 个基准上比较无加权平均词错率（WER，越低越好 ↓），基线为 4.91%，高质量子集为 4.67%，后者低于基线并在 6 个基准上更好。其中 AMI 清理集从 8.72% 降至 7.84%、Earnings22 清理集从 6.15% 降至 5.77%、SPGISpeech 从 3.08% 降至 2.74%，LibriSpeech 清晰集从 1.10% 升至 1.13% 等三项小幅回升。使用 Granary-v2 参与训练的 Nemotron-3.5-Transcribe 在 7 语种识别榜单上取得 4.62% 的 WER，在 FLEURS 37 语种上取得 9.29% 的平均 WER 与字错率（CER，越低越好 ↓），CoVoST 2 17 语种上为 12.19%，翻译质量指标（BLEU，越高越好 ↑）在多方向均值上处于 26.34 至 33.67 之间。代价是高质量筛选仅保留 46.91% 英语时长，上下文生成约 30 音频小时每节点小时，翻译质量估计阈值 0.7 进一步限制可用翻译对，结论以自动指标为准而未涉及主观听感评测。

**适用边界与深读导览：** 上述收益成立于英语识别器与固定步数预算，是否适用于其他语种、其他架构与指令族组合仍需验证，文本阶段只读转写而没有用音频直接核验，实体恢复、归一化与翻译可能引入无音频依据的改动。公开子集仅含 16 个来源条目对应 463,062.37 小时来源音频，排除了 YODAS2 等来源的标签与指令对，下游混合还包含全量之外的额外语料。若想深究语言相关路由与阈值、提示词与校验回退、吞吐核算与下游多语得分，可查阅下文方法概述和架构、细节详述与实验结果对应小节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/NVIDIA-NeMo/Curator/tree/main/tutorials/audio/granary_v2> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/NVIDIA-NeMo/Speech> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/nvidia/Granary-v2> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/marian-nmt/cometoid22-wmt23> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/bodhan-ai/indic-transcribe-core> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 同一段录音需要多种写法，单一转写难以支撑指令控制

语音识别的应用对输出形式要求并不一致，听写系统希望数字写成阿拉伯数字并去掉犹豫词，语言分析则希望保留口语数字形式、重复与自我修正，另一些场景还需要领域上下文、语码混合转写或翻译。语音语言模型希望用自然语言指令表达这些要求，但训练需要把同一段录音与不同指令下的正确输出对应起来。多数语料每段录音只给一个参考文本，转写规范也不统一，单个参考无法教会模型生成多种合法形式或按指令选择。

Granary-v2 把这一缺口定义为数据组织问题，围绕同一段语音构造对齐的多目标监督。系统以语音忠实转写为公共源头，保留口语数字形式、语法、填充词、重复与假启动，再由文本流水线派生书面形式与其他任务标签，每条音频通过指令与目标字段配对。与最接近的 Granary-v1 相比，语言覆盖从 25 种扩展到 48 种，处理规模从 643,000 小时扩展到 843,579.22 小时，并新增口语与书面形式区分、去犹豫词控制、上下文与翻译等指令家族。

为定位增量，下表并列处理后全量与已有大规模语料的时长、语言数与监督形式，重点比较监督维度而非单纯堆时长。Granary-v2 全量统计包含 YODAS2、YouTube-Commons 与 ReazonSpeech-v2 3 个来源，但其标签未进入公开子集，阅读时需区分处理范围与公开范围，后续将围绕语音忠实源头解释多目标如何对齐。

| Dataset | Hours | Langs | Text Supervision |
| --- | --- | --- | --- |
| Granary-v2 (processed) [33] | 843,579 | 48 | Multiple aligned transcript forms; contextual ASR and translation |
| Granary-v1 [48] | 643,000 | 25 | ASR transcripts; speech translation |
| MOSEL [11] | 441,000 | 24 | ASR transcripts |
| YODAS [27] | ∼500,000 | 100+ | Captions (where available) |
| YODAS v3 [6] | >1,100,000 | 100+ | Captions; English translations (where available) |
| GigaSpeech 2 [70] | ∼30,000 | 3 | ASR transcripts |
| Emilia [17] | 101,654 | 6 | ASR transcripts |
| Common Voice v26 [28] | 28,893 | 294 | ASR transcripts |
| VoxPopuli [64] | 1,800 | 23 | ASR transcripts |
| MLS [44] | ∼50,000 | 8 | ASR transcripts |

对照可见 Granary-v2 已处理全量在时长上与 YODAS v3 的大于 1,100,000 小时量级相当，语言数 48 种少于 YODAS 的 100+ 种和 Common Voice 26.0 的 294 种，但在文本监督上提供多种对齐转写形式、上下文语音识别与翻译，而 MOSEL 的 441,000 小时、GigaSpeech 2 的约 30,000 小时与 Emilia 的 101,654 小时等主要提供单一语音识别转写。这种对比明确增量不是多收录音，而是为每段音频补齐可选择的输出形式。

输入被明确区分为无可信文本的纯音频与带有来源转写本的录音，输出则是一组与同一音频对齐的文本目标。核心是语音忠实规范化文本，保留口语词、数字读法、语法与不流畅现象，作为逐字识别与翻译源头的公共基准。物理瓶颈在于教师模型会传播识别错误，来源转写本自带格式噪声，纯文本阶段推断的规范化与翻译缺乏声学核对，筛选必须在保留规模与保证一致性之间权衡。

### 三条可独立运行的流水线把原始音频变成带质量标记的训练目标

系统由元数据、语音识别标注与文本标签 3 条流水线组成，均基于 NeMo Curator 构建，可独立选择运行。元数据流水线把长录音切成 0.5 秒至 40 秒的短语音段，输出 16 kHz 单声道 Opus 片段、JSONL 清单与 RTTM 说话人时间线。语音识别流水线生成或改进转写，文本流水线派生多种形式并组装指令目标对。发布记录包含音频标识、语料与语言标识、文本目标、可选上下文与翻译、指令目标对与 high_quality 布尔标记，内部 manifest 另存中间假设与质量决策，支持按分片与阶段断点续跑。

为看清 3 条流水线如何衔接，可以跟随单个样本从原始波形走到可训练目标，重点看分段、双模型转写与多键目标如何汇合为指令打包。下段示意把端到端过程压缩在一张图中，箭头方向即数据流向，中间各框即各阶段产物，阅读时先沿主箭头走完全程再对比各文本键的差异。

[![原论文 Figure 1：Illustrative Granary-v2 curation flow and instruction–target packing.](https://arxiv.org/html/2611.28248v1/figures/granary-v2-pipeline-still.png)](https://arxiv.org/html/2611.28248v1/figures/granary-v2-pipeline-still.png)

*论文图 1：跟随单个样本从原始音频到可训练目标的加工示意，展示分段转写与多键打包（原论文 Figure 1）。*

图中左侧为约 12 分钟的单样本波形，经切分得到 4.6 秒、3.8 秒、6.2 秒与 5.1 秒 4 个片段，标注 VAD 加说话人分离与语言标识 en。中间语音识别框以约 3.8 秒片段为例，主模型保留 Like 与 uh 等不流畅，兜底模型给出干净形式，最优预测选择保留不流畅的语音忠实文本。右侧文本框依次列出 tn_raw、itn_raw、itn_clean、translations、captioning_text、speech_qa_text 与 context_asr，最右侧训练视图把 Transcribe without disfluencies 指令与去除不流畅的目标配对。

与 Granary-v1 相比，实质增量是统一的语音忠实源头加对齐多目标，而非仅扩大时长。信号规格统一为 16 kHz 单声道，声学语言标识用 SpeechBrain 的 VoxLingua107 ECAPA-TDNN 给出 0 至 1 置信度，声音事件用 PANNs CNN14 区分语音、音乐与其他。当前 Granary-v2 的输入已是短语音段，因此跳过元数据提取，直接走语音识别与文本加工两条路径。生产运行按音频时长分片，记录分片完成标记与行数校验，模型服务复用 NVIDIA Dynamo 与 vLLM，结合 SLURM 阵列与流式 Ray 图分发。

### 语言相关双模型转写与幻觉校验得到语音忠实文本

标注流水线按有无可信人工转写本分两条路线。无参考音频走完整伪标签模式，用语言相关的双模型产生候选并互相校验。有来源转写本则走人工标签改进模式，在支持的语言上用音频引导的 Qwen3-Omni 修订措辞并保留可信实体拼写，其余语言保留对齐后的来源标签。两种路线最终都收敛到语音忠实转写，提示词明确要求保留填充词、重复、假启动、口语缩略与口语数字形式。

路由把 48 种语言分为 7 组，A 组 15 种用 Qwen3-Omni 对 Qwen3-ASR，B 组 3 种用 Qwen3-ASR 对 Whisper，C 组 8 种用 Parakeet v3 对 Whisper，D 组 9 种反向用 Whisper 对 Parakeet v3，E 组希伯来语专用 Whisper，F 组 11 种印度语言用 Indic-Transcribe-core 对单语 IndicConformer，G 组印地语用内部 Hindi Parakeet 兜底。分组决定主备模型选择，是理解双模型校验的前提。

理解双分支选择时，先看左侧菱形按有无人工标签分叉，再对比上方蓝色虚线框的双模型加幻觉校验与下方紫色虚线框的人工改进加回退如何汇入右侧绿框。下段流程图把这一判断逻辑完整呈现，阅读时先区分否与是两条路径，再看汇合点如何形成语音忠实文本。

![原论文 Figure 4：ASR-labeling pipeline. Inputs without human transcripts use language-dependent primary and…](/audio-paper-digest-blog/images/papers/2611.28248/figure-4-4c61c3a075873368.png)

> **图片来源：** 原论文 PDF 第 7 页（含图 4）

*论文图 4：语音识别标注流水线的双分支选择，区分无参考与有人参考两条路线（原论文 Figure 4）。*

图中音频按语言与来源进入菱形判断，回答否进入主备语音识别、幻觉检查与转写选择，回答是进入音频引导的 Qwen3-Omni 改进与支持路由或对齐标签回退。选择阶段默认取主模型预测，主模型触发幻觉规则时切换到恢复模型，若两者同时触发但相互间 WER (词错误率) 与 CER (字错误率) 均为零则因一致例外保留主模型。正则清洗去除非法符号并压缩多余空白，特定语言把孤立大写字母连接为缩写。

以 1 秒 16 kHz 单声道输入为例，共 16,000 个采样点，经重采样与单声道转换后进入语言路由器，按上文分组调用主备模型。音频提示词要求转写每个可听音节，包括较弱与重叠语音，数字一律保留口语词形。原文未披露各标注模型的帧级张量维度与下采样细节，此处只追踪音频时长与文本字段的对应，不补造中间特征形状。幻觉校验与一致例外是控制长尾伪标签发散的关键，其代价是双模型推理使标注成本翻倍。

### 文本加工从语音忠实文本派生书面形式问答与翻译并打包指令

#### 核心变换保留原词并派生书面形式

文本流水线读取清洗后的语音识别转写，为同一音频派生多种对齐目标。每条任务提示词定义一种文本变换，如加标点、数字转换或去不流畅，模型选用上印度语言用 Gemma-4-31B-it-FP8，其余语言用 Qwen3.6-27B-FP8，选择依据是词保留的定性观察与处理成本。核心字段包括口语形式 tn_raw、带不流畅书面形式 itn_raw、去不流畅书面形式 itn_clean、语码混合文本、标题与问答对，后续上下文与翻译只在通过质量筛选的记录上展开。

实体恢复仅在有可信来源时运行，把来源中纯字母人名与缩写的拼写大小写写回规范化文本。标点与大小写阶段只允许改标点大小写，要求词序与词形不变。文本规范化把数字、日期、时间、货币、单位与符号展开为口语形式并保留填充与重复，转写语言标识核对主语言与混合语言，逆规范化再把口语数词写回数字符号，去不流畅阶段删除填充词、重复与假启动。语码混合恢复英文原拼写并保留本土词缀，标题生成一至两句摘要，问答至多生成一对并在不适合时返回 SKIP。

#### 质量门控决定发布与增值分支

核心阶段先行、质量门控居中的顺序，可按从左到右的主路径阅读，再看虚线表示的高质量分支与可选适配器走向。下段流程图把核心发布标签与下方增值分支的位置关系完整呈现，阅读时先走主路径到菱形决策，再追踪虚线如何分叉到上下文与翻译。

![原论文 Figure 5：Text and supervision pipeline. Quality decisions are retained for processed records.](/audio-paper-digest-blog/images/papers/2611.28248/figure-5-60209c0538521600.png)

> **图片来源：** 原论文 PDF 第 9 页（含图 5）

*论文图 5：文本与监督流水线的质量门控与分支增值标签走向（原论文 Figure 5）。*

图中从左到右为语音忠实转写、核心文本阶段、质量过滤规则与模型一致性、菱形决策与核心发布标签，下方紫色框为上下文标签与跨语言翻译，灰色框为可选的指令打包训练适配器。质量过滤先做结构检查，字符速率默认 4 至 30 个字符每秒，中文、日语、韩语与粤语下限降至 1.5，Dusha 与 Golos 降至 2.0，上限保持 30，残留 ASCII 数字与已知幻觉开头短语直接拦截。一致性评分别用第二模型或来源转写本作参考，英文用公开榜单规范器，其他语言用多语基础规范器，词计语言用 WER，字符计语言用 CER 并去空白，接受阈值按字符计 CER 不超过 0.05，词计且逆规范化未改动时 WER 不超过 0.01，已改动时与同语料语言组均值差距不超过 0.01，否则拒绝。

#### 上下文翻译与计算账目

上下文生成只在高质量记录上运行，抽取领域、实体、实体类别与上下文术语，并生成同领域但不在文本中的干扰项，声学条件允许时再加发音相近词。训练适配器提供粗粒度领域、细粒度领域加相关词、混合干扰词、部分子集与负例无关领域 5 种提示变体，目标始终系同一音频的转写。翻译用 Qwen3.5-122B-A10B-FP8 读 tn_raw，非英文译入英文，英文译出到 31 种目标语言，早期全量后改为以高质量为主，发布包含两类运行因此覆盖不限于最终高质量标记。翻译保留不完整语句，空译与超长丢弃，余下用 Cometoid22 经 PyMarian 打参考无关质量分，指令打包以 0.7 分为训练对阈值。

计算账目按作业累加分配时长，下式给出 logged 计算量的定义，式中下标 j 遍历作业，g_j 为固定分配卡数，t_j 为占用小时数。该式把每个作业的卡数乘以占用小时数再求和，得到以卡时计的 logged 计算量，直觉是资源消耗与并行宽度和时间成正比，便于把不同分片与重试纳入同一口径。

\[G_{\mathrm{logged}}=\sum_{j}g_{j}t_{j}.\]

该定义中 g_j 取该作业的固定分配，如文本阶段每节点 8 卡，t_j 取实际占用小时并包含启动、失败与重试，空闲排队不计入，CPU 节点单独统计。若某阶段处理 H 小时音频且速率为 R，则估计需 H 除以 R 个节点小时，再乘以每节点卡数得卡时。输出不参与梯度更新，而是用于估算处理 843,579.22 小时全量与翻译子集的成本，指导分片大小与模型服务复用数的权衡。

### 高质量筛选在固定步数下降低平均词错误率但三项干净集略有回退

评测先交代数据划分与公平性前提。实验只用源语料训练切分，排除来源验证与测试切分，翻译标签附着在已计时的音频上不重复计时。英文过滤对比固定 300,000 步训练预算与同一架构配方，只切换全量与高质量子集，目标均为 tn_raw。下游 Nemotron-3.5-Transcribe 引用独立技术报告的协议与分词器，与公开子集划分无关。

#### 全量与公开子集的计数口径

下表区分处理后全量与公开子集，明确翻译小时数已含在语音识别小时内，破折号表示未单独统计，重点核对公开排除范围。Granary-v2 全量含 19 个语料条目与 48 种语言，公开子集排除 YODAS2、YouTube-Commons 与 ReazonSpeech-v2 的全部标签与指令对，阅读时需区分处理规模与可下载规模。

| Measure | Full processed | Public subset |
| --- | --- | --- |
| Corpus entries | 19 | 16 |
| Languages | 48 | 48 |
| Unique ASR hours | 843,579.22 | 463,062.37 |
| Utterance records | ∼213.4 million | – |
| High-quality ASR hours | 317,724 | – |
| Translation into English, hours | 142,778.43 | 92,495.56 |
| Translation out of English, hours | 55,772 | – |

全量含 19 个语料条目、48 种语言、843,579.22 小时去重音频与约 213,400,000 条目，其中 317,724 小时带高质量标记，译英 142,778.43 小时，译出英文 55,772 小时到 31 种语言。公开子集剩余 16 条目对应 463,062.37 小时源音频与 92,495.56 小时译英。计数上 VoxPopuli 的两种标签版本分开，LibriSpeech 仅保留 LibriSpeech-PC，翻译双向各计一次且不叠加超语料时长。英文过滤混合在去重前达 347,178.90 小时，高质量占 162,845.95 小时即 46.91%，全量英文在分布图中约 318,486 小时，含未公开来源。

#### 固定预算下的英文过滤对比

英文对比固定架构配方与步数，只切换全量与高质量子集，下表列出其中 6 个基准的 WER (词错误率) 分数，越低越好，需逐格核对方向。该 6 行子集取自论文 9 基准完整对比，GigaSpeech-Cleaned、Voice Arena Monsoon 与 URGENT24 等其余基准不在本表行内，而是论文另列基准，完整平均才从 4.91% 降到 4.67%。

| Benchmark | High-quality labels | All labels |
| --- | --- | --- |
| AMI-Cleaned [4] | 7.84 | 8.72 |
| Earnings22-Cleaned-AA-chunked [10] | 5.77 | 6.15 |
| LS Clean [40] | 1.13 | 1.10 |
| LS Other [40] | 2.67 | 2.61 |
| SPGISpeech [39] | 2.74 | 3.08 |
| Voxpopuli-AA-Cleaned [64] | 1.68 | 1.57 |

在表列 6 个基准中 3 个更优、3 个略差，具体为 AMI-Cleaned 7.84% 对 8.72%、Earnings22-Cleaned-AA-chunked 5.77% 对 6.15%、SPGISpeech 2.74% 对 3.08% 更优，而 LS Clean 1.13% 对 1.10%、LS Other 2.67% 对 2.61%、Voxpopuli-AA-Cleaned 1.68% 对 1.57% 略差。论文另列的 GigaSpeech-Cleaned、Voice Arena Monsoon 与 URGENT24 等基准不在本表行内，而是完整 9 基准中的其余改善项，完整平均从 4.91% 降至 4.67%，代价是干净朗读集的轻微回退。

#### 时长集中度与下游引用结果

为理解时长集中度，下图按语料条目展示语音识别音频与译英子集的对数分布，横轴为音频小时对数刻度，阅读时先看横轴刻度再对比深浅两色条形长度。该图包含 YODAS2、YouTube-Commons 与 ReazonSpeech-v2 的处理统计，但其标签未进入公开子集，翻译子集仅为语音识别音频的子集。

![原论文 Figure 7：Unique ASR audio hours and translation coverage by corpus entry in the full processed collection…](/audio-paper-digest-blog/images/papers/2611.28248/figure-7-c6f38e8a3c250fd5.png)

*论文图 7：各语料条目的语音识别音频与译英子集的对数分布及条形标签（原论文 Figure 7）。*

横轴为音频小时对数刻度，刻度为 1、10、100、1k、10k、100k 与 1M，从 10 的 0 次方到 10 的 6 次方跨越 6 个数量级即 10 的 6 次方倍，浅绿为语音识别音频，深绿为译英子集，条尾标签为语音识别小时取整。顶部 VoxPopuli 带 MOSEL 标签 380,711 小时、YODAS2 222,914 小时与 YouTube-Commons 122,259 小时占主导，LibriLight 49,334 小时次之，底部多条仅数十小时。ReazonSpeech-v2 的 35,344 小时仅部分覆盖译英，深绿条在对数轴上明显短于浅绿条，落后约半个数量级。VoxPopuli 带 MOSEL 标签、YODAS2、YouTube-Commons、LibriLight 与 ReazonSpeech-v2 合计约 96.1%，其余 14 条目合计约 3.9%，训练必须重视语料与语言采样。

下游引用 5 行汇总给出多语榜单与 FLEURS 双向翻译，下表仅含这 5 行，需注意方向与分词器差异。紧邻 Transcribe 表不含 CoVoST 2 翻译的 33.67 与 26.34 分数，若提及该两项须明确为论文另列翻译基准，不作为本表行，阅读时先区分榜单协议与独立评测协议。

| Evaluation | Languages | Score | Metric |
| --- | --- | --- | --- |
| Multilingual ASR leaderboard | 7 | 4.62 | WER (%)† |
| FLEURS ASR [8] | 37 | 9.29 | Mean WER/CER (%) |
| CoVoST 2 ASR [65] | 17 | 12.19 | Mean WER/CER (%) |
| FLEURS: other languages to English | 36 | 29.20 | Mean BLEU |
| FLEURS: English to other languages | 36 | 26.54 | Mean BLEU∗ |

紧邻 Transcribe 表的 5 行给出多语榜单 7 种语言 4.62% WER，FLEURS 语音识别 37 种语言平均 9.29% WER 或 CER，CoVoST 2 语音识别 17 种语言平均 12.19%，以及 FLEURS 双向翻译 36 种语言平均 29.20 与 26.54 BLEU 分数。论文另列的 CoVoST 2 翻译基准给出 33.67 与 26.34 等分数，不作为紧邻 Transcribe 表的行。FLEURS 英译他方向泰语目标用 spBLEU，其余保留来源报告分词器，印地语用正字法知情 WER，挪威语转写 63.26% 保留但报告注明非官方支持。加工速率上标注约 281 音频小时每节点小时，文本富化 15 至 25，质量过滤约 10,400，上下文约 30，日译英约 144，均依赖作业切分与硬件边界。

### 覆盖不均与纯文本推断的边界决定复现与选型前提

#### 覆盖局限与评估边界

语言与来源覆盖高度不均，顶部 5 条目合计约 96.1% 的已报告语音识别小时，剩余 14 条目合计约 3.9%，英语单语约 318,486 小时而尾部多语仅个位数小时。教师模型会共享转写错误，来源转写本自带识别与格式噪声，实体恢复、规范化、上下文与翻译可能引入无支持的改动，文本阶段只读转写本推断，歧义口语形式、不流畅与语码混合词缺乏声学核对，生成标题可能用错目标语言，质量阈值依赖字符速率与一致性等经验区间。

英文过滤结论只覆盖一种约 600M 参数的 Transformer-TDT 架构与固定 300,000 步预算，衡量的是标签过滤而非各指令家族的单独贡献。编码器为 32 层 1280 维 10 头约 630.9M 参数，英文分词 1,024 个 BPE 单元，多语 16,384 个，TDT 时长集合为 0 至 4。音频为 16 kHz 采样，128 维对数梅尔特征，25 ms 窗长与 10 ms 步长，编码器 8 倍下采样约每 80 ms 一个表示。优化用 AdamW 峰值 5e-04，betas 为 0.9 与 0.95，权重衰减 1e-02，余弦调度 15,000 步热身至最低 1e-06，BF16 精度。生产测量用 A100 80 GB 分配，每节点 8 卡，原文未披露推理 RTF、延迟、吞吐与显存开销，已披露均为数据加工速率而非模型推理成本。

#### 发布范围与复现指引

论文称流水线见 NeMo Curator 教程路径，训练配方见 NeMo Speech，公开子集见 Hugging Face 的 nvidia/Granary-v2 个数据集，源音频需向各语料方另行获取。本次收到的第三方链接检查显示可访问，但仅证明论文提到该链接，不证明作者已开源。发布为标签清单而非音频，附录给出 19 条目时长与公开状态、文本生成与翻译启动配置、48 种语言路由与检查点、A 至 G 提示词原文、发布字段与质量规则、训练指令池与上下文采样、Transcribe 分语言结果，以及 27B 与 35B 和 122B 的定性对比。

复现第一步应按 16 kHz 单声道与短分段准备数据，先跑双模型一致性与结构检查，再补所选语言的上下文与翻译验证。公开子集排除 YODAS2、YouTube-Commons 与 ReazonSpeech-v2 的全部标签与指令对，其统计只说明处理与实验范围。high_quality 标记衡量结构有效性与转写一致性，不是隐私或有害内容标记。

#### 流水线分工与执行顺序

3 条流水线分工在原文中有明确界定，可独立运行。元数据流水线负责将原始长音频转为 16 kHz 单声道，先用 Nemotron-3 Diarization 在完整录音上记录说话人活动并保留 RTTM 时间线，再用 Silero VAD 切出 0.5 至 40 秒语音分段并回填说话人数，同步运行 PANNs 声音事件检测与 VoxLingua107 语种识别，最终写出 Opus 片段与 JSONL 清单。无语音记 vad_empty，不可解码记 read_error，每条输入均需完成标记才算可恢复，便于按音频时长分片与断点续跑。

ASR 标注流水线按有无可信转写分两路执行。无参考音频走语言相关主备模型并做幻觉模式检查，默认取主模型，主失败切备模型，双触发但成对词错率与字错率均为零则按一致例外保留主，随后做符号清洗与孤立大写字母粘连修复。有源转写在支持语言上用音频引导的 Qwen3-Omni 改写并保留参考实体拼写，其余保留对齐标签，实体恢复仅在有源参考且转写不一致时运行。无有效候选或清洗后为空则留在清单中记录原因，不进入后阶段。

文本流水线按固定顺序派生对齐目标：标点恢复存 pnc_text，文本规范化展开数字日期货币单位存 tn_raw，转写语种识别核对源语言，逆规范化得到带不流畅书面形 itn_raw，再串行去不流畅得到 itn_clean，同时恢复语码混合拼写并生成标题与至多一对问答，不合适问答记 SKIP 不入指令对。质量过滤在 CPU 上先做字符速率、幻觉首词、残留数字与语言失配等结构检查，再按字符计语言 CER≤0.05、词计且 ITN 未改 WER≤0.01、ITN 已改组均差≤0.01 接受其余拒绝。

上下文标注仅对通过质量过滤的记录运行，抽取领域、实体类别与语义干扰项并配粗细、干扰、部分与负例 5 种提示变体，转写目标仍与原音频绑定。翻译早期用全量后期多用高质量，非英译英与英译 31 语言分别计数且不重复计入音频时长，每条译文经 Cometoid22 参考无关打分保留。指令打包为确定性 CPU 步骤，以 0.7 分阈值筛选翻译对并优先用 tn_raw 组装转写指令，空值与 SKIP 不入训练对。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.28248v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：全量处理约843579小时覆盖48种语言并打包多形态对齐目标与8族指令，表列 6 个基准中 3 个变好、3 个略差（完整保留负面结果）且平均WER从4.91%降至4.67%。

- 核心优势：基于NeMo Curator的三管线可复用治理系统明确7组语言路由与CER≤0.05等一致性筛选规则，管线与数据子集已公开发布。

- 主要短板：英语筛选实验仅覆盖单架构固定步数预算，文本富化仅三语种定性观察而无可核对自动分数支撑。

- 主要短板：翻译含早期全量与后期高质量两次运行，下游混合含全量之外额外语料，挪威语等未正式支持语种混入均值不宜直接外推。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
