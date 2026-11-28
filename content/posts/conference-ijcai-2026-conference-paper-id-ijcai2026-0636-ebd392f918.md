---
title: "Towards Fine-Grained Code-Switch Speech Translation with Semantic Space Alignment"
date: 2026-11-28
draft: false
description: "针对语码切换语音翻译中语言交替导致语义建模困难与高质量语码切换数据稀缺的问题，本文提出按语言分组的混合专家语音投影器与从单语识别经单语翻译平滑过渡到语码切换翻译的四个阶段训练范式，在 Fisher 与 NTUML2021 四个测试条件下平均超过 SeamlessM4T 约 0.86 BLEU 与 0.93 COMET 并在 NTUML2021 语码切换上达到 1.49 BLEU 的最大增量，代价是每种语言需维持 7 个专家并在推理时激活前 7 个带来的计算开销以及对单语帧级语言标签监督的依赖。"
tags: ["混合专家模型", "大语言模型", "代码转换", "语音翻译"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "语义空间对齐支撑的细粒度语码切换语音翻译"
paper_digest_original_title: "Towards Fine-Grained Code-Switch Speech Translation with Semantic Space Alignment"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0636"
paper_digest_workbench_source_sha256: "a289ac6ba2c3e06140408d97b70632565b4af7f9ff07c214bba3fde631482430"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/636"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0636.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音翻译"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语码切换语音翻译中语言交替导致语义建模困难与高质量语码切换数据稀缺的问题，本文提出按语言分组的混合专家语音投影器与从单语识别经单语翻译平滑过渡到语码切换翻译的四个阶段训练范式，在 Fisher 与 NTUML2021 四个测试条件下平均超过 SeamlessM4T 约 0.86 BLEU 与 0.93 COMET 并在 NTUML2021 语码切换上达到 1.49 BLEU 的最大增量，代价是每种语言需维持 7 个专家并在推理时激活前 7 个带来的计算开销以及对单语帧级语言标签监督的依赖。"
paper_digest_reader_sections: [{"heading":"语码切换语音翻译为何同时受困于语义鸿沟与数据稀缺","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"混合专家投影器怎样衔接语音编码器与大语言模型","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"四阶段过渡训练如何用单语数据铺平语码切换适配","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"Fisher 与 NTUML2021 上的翻译质量究竟提升了多少","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"哪些模块真正带来了增益，路由是否按语言分流","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Yan Gao"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Yazheng Yang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zhibin Lan"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Yidong Chen"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Min Zhang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Daimeng Wei"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Derek F. Wong"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Jinsong Su"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"48c01b50d03bad9bd17beb7c70361e73b4a6316a5caa4af74f10f313053ca533","url":"/audio-research-portal/client/papers/2026-11-28/conference-ebd392f918e30b6811238856/citation.bib"},"citation.json":{"sha256":"42cf990ee834a77625cfdee7ecb3992a3c0065e50908b5b8ef5064f699deb4c6","url":"/audio-research-portal/client/papers/2026-11-28/conference-ebd392f918e30b6811238856/citation.json"},"citation.ris":{"sha256":"2b32e42191d0896cb3f59722208a148ea66d71157c37e43715f684fdc7482ccc","url":"/audio-research-portal/client/papers/2026-11-28/conference-ebd392f918e30b6811238856/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b82eb2bdd55f99b461b026eba66a50b4727a5227e60bf1bc6969cae3c031cc86","url":"/audio-research-portal/client/papers/2026-11-28/conference-ebd392f918e30b6811238856/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0636"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/636"
paper_digest_conference_doi: "10.24963/ijcai.2026/636"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/636"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0636.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "1f23f9c01da7b7fea84add11bc4bb96564b38cc2782a68d1388af47686e02a48"
paper_digest_api_reader_plan_sha256: "518bb69324ba46fec79effdbc3d04207797ec998b23daf939c4c668b2376dd2a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9e56067a443bc6364966b281f8231a177b135b2b2fa25ee0eac4177740b9424a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7a0737921ada1290552099726dd71a6c5390b3ae9d398c922ec772c46b29b41b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "43d478871a595db053751d977d591b77bbecf27486cf705bed94986628ebee1d"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4b3a46521c31c7177074728c919c9784a2efee14ffb06a04bab123a78062ea3a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"setting","id":"setting.code-switching","label":"代码转换"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 语义空间对齐支撑的细粒度语码切换语音翻译

> 英文题目：*Towards Fine-Grained Code-Switch Speech Translation with Semantic Space Alignment*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0636`
> DOI：`10.24963/ijcai.2026/636`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/636) · [官方 PDF](https://ijcai.org/proceedings/2026/0636.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-research-portal/papers/?concept=task.speech-translation)
- **研究方法**：[混合专家模型](/audio-research-portal/papers/?concept=method.moe)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual) → [代码转换](/audio-research-portal/papers/?concept=setting.code-switching)
- **模型家族**：[大语言模型](/audio-research-portal/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 6.7/10 | 技术严谨 6.6/10 | 实验充分 7.4/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 6.0/10 | 可复现 4.9/10 | 工程/实践 5.4/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yan Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Yazheng Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhibin Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Yidong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Derek F. Wong：机构信息未能从会议 PDF 纯文本可靠映射
- Jinsong Su：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 代码转换语音翻译以英西混杂或中英混杂语音为输入，要求直接生成英语目标文本，难点在于同一话语内语言交替打断语义连续性。预实验用 Whisper 编码器特征经 t-SNE 降维与 KDE 可视化显示，同语种样本紧密聚集而异语种样本明显分离，证实跨语种存在语义空间间隔。主流做法沿用单个共享投影器连接语音编码器与大语言模型，难以同时贴合不同语种分布，加之大语言模型本身跨语种能力有限，代码转换场景表现弱于单语场景。高质量代码转换语音翻译数据稀缺且人工标注成本高，合成数据又常出现切换生硬与语序紊乱，进一步限制训练。

**核心思路与方法架构：** 与最接近基线 LLaST 的单共享投影器相比，本文保留 Whisper-large-v3 编码器与 Llama-3-8B-Instruct 解码器的总体链路，将投影器替换为按语种分组的混合专家模型并配套四阶段训练。单条样本沿链路流动为语音 s 经编码器得到序列 h，再经 3 层 ReLU 混合专家投影器映射为与大语言模型同维的 hs，最后与提示文本嵌入 ht 拼接为 hz 送入大语言模型生成译文。每语种分配 7 个专家，Fisher 与 NTUML2021 均为 2 组共 14 个专家，推理时全局取 top-7，训练时对大语言模型与语音编码器用 LoRA 微调而对投影器全参数更新。路由按 token 级概率加权求和前 k 个专家输出，语言特有损失约束语音帧路由至对应语种组，组内负载均衡损失促进组内专家分工，跨阶段过渡损失以 λ = b / B 线性混合相邻任务目标。

**关键实验与核心代价：** 主评测在 Fisher 英西混杂与 NTUML2021 中英混杂测试集上进行，指标为 SacreBLEU（越高越好 ↑）与 COMET（越高越好 ↑），同一测试集内直接对比最强可比基线 SeamlessM4T。Fisher 代码转换子集上本文方法 BLEU 为 37.51，高于 SeamlessM4T 的 36.89，COMET 为 77.54，高于 SeamlessM4T 的 76.13；NTUML2021 代码转换子集上本文方法 BLEU 为 39.52，高于 SeamlessM4T 的 38.03，COMET 为 81.33，高于 SeamlessM4T 的 79.93，原文报告四组单语与代码转换测试平均提升 0.86 BLEU 与 0.93 COMET。关键消融显示 NTUML2021 代码转换测试集上去掉混合专家投影器后 BLEU 从 39.52 变为 36.85，COMET 从 81.33 变为 79.95，去掉第一阶段后 BLEU 变为 38.14，去掉第三阶段后 BLEU 变为 37.74。NTUML2021 代码转换验证集上 n 从 3 增至 7 时 BLEU 从 38.02 升至 38.55，n = 7 时 top-1 仅得 27.76 BLEU 而 top-7 达 38.90，更多专家带来计算开销，原文未披露训练时长、硬件与推理时延，任务输出为文本译文故不涉及 MOS 类语音听感指标。

**适用边界与深读导览：** 结论成立前提限于到英语的两个代码转换方向及论文划分的单语与代码转换子集划分，未覆盖更多语种对、反向翻译及真实噪声会议等部署场景。路由分析显示英文与西班牙文帧 top-1 正确组命中率超 95 % 而中文为 85.21 %，提示数据不均衡下中文建模仍有短板。全部质量结论依赖 SacreBLEU 与 COMET 自动指标，论文中未提及人工评估与统计显著性检验。欲深究路由公式、损失定义与消融细节可查阅下方方法概述和架构、实验结果与细节详述对应章节。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/XMUDeepLIT/CSST-SSA> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档；许可证：Apache-2.0

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语码切换语音翻译为何同时受困于语义鸿沟与数据稀缺

语码切换语音翻译的输入是一段话语内部交替出现两种语言的语音，输出是统一目标语言的英文文本。本文涉及英语与西班牙语交替的 Fisher 数据，以及中文与英语交替的 NTUML2021 数据。难点有两处，一是同一句话的声学与语义特征随语言快速切换，二是高质量语码切换语音翻译数据稀少且构建成本高。

此前做法或是把跨语言语义交给模型隐式学习，或是依赖人工标注与合成数据，前者难捕捉细粒度差异，后者规模小且切换不自然。单个投影器连接语音编码器与大语言模型在单语翻译上有效，但在语码切换数据上仍弱于单语数据，相关探索大多停留在文本翻译。

原文用 Common Voice 三语识别数据验证，把 Whisper 编码器平均池化特征经 t-SNE 降至二维后可视化，发现同语种抱团紧密，不同语种之间几乎不重叠。在仅微调投影器而冻结编码器与大语言模型的条件下，分语种专家投影器的英语 WER（词错误率）、西班牙语 WER 与中文 CER（字符错误率）分别为 7.05%、4.52% 与 13.21%，优于共享投影器的 7.07%、6.01% 与 14.26%。

这一对比说明按语言拆分映射有助于捕捉语义区别，但语码切换语音缺少帧级语言标签，只能自适应分流。同时需先用易得单语识别与单语翻译数据建立对齐与翻译能力，再过渡到语码切换场景，这正是后文分组建模与四阶段训练的动机。

### 混合专家投影器怎样衔接语音编码器与大语言模型

与把预训练语音编码器经单个投影器接入大语言模型的主流结构相比，本文保留 Whisper-large-v3 编码器与 Llama-3-8B-Instruct 解码器的组合，核心改动是把单路共享投影器替换为按语言分组的混合专家投影器。假设语码切换涉及 m 种语言，则为每种语言设置一组包含 n 个专家的分组，专家总数 N = n × m ，每层专家均为线性变换，层间插入稀疏路由器为每一帧选择前 k 个专家加权求和。投影器共设置 3 层并使用 ReLU 激活，目标是让不同语种的语音帧进入各自擅长的语义子空间，再统一映射到大语言模型的输入维度。

下面这张框架图左侧画出从波形到译文的主链路，右侧放大了混合专家投影器内部的分组、路由与汇合细节。建议沿自下而上的箭头先看语音与提示词如何拼接，再看右侧路由器如何把同一输入分发到不同语言组，有助于一次看清整体数据走向与可训练位置。虚线框与花括号的含义将在图后一段逐一说明。

[![原论文 Figure 2：Illustration of the proposed framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-2.png)

*论文图 2：混合专家投影器衔接编码器与大语言模型的整体框架与分组路由细节（原论文 Figure 2）。*

左侧最下方为声波示意，向上依次为语音编码器、混合专家投影器、拼接后的提示词与语音表示，最上方为大语言模型及其生成的文本块。灰色方块代表文本字符，浅蓝色方块代表语音帧，火焰标记代表训练时更新的参数，蓝色立方体代表预训练基座。右侧虚线框内底部为路由器，上方柱状示意前 k 选择，蓝色 Group 1 到橙色 Group m 共 m 组，每组堆叠 n 个专家，左侧花括号标出 n ，顶部花括号标出 m ，输出经交叉相加符号汇合，外圈 L 标记表示该结构重复堆叠 3 层。

教学例子：设输入为 1 秒包含中英交替的语音 s ，编码器将其变为 h ，形状为 Ts 行 Denc 列，其中 Ts 为语音帧数，Denc 为编码器隐层维度。混合专家投影器对每一帧独立路由并加权，输出 hs 形状为 Ts 行 DLLM 列，其中 DLLM 为大语言模型隐层维度，帧数保持不变。提示词经分词与嵌入得到 ht ，形状为 Tt 行 DLLM 列，其中 Tt 为提示词长度。两者拼接得到 hz ，形状为 Tt + Ts 行 DLLM 列，直接送入大语言模型自回归生成目标英语文本。原文未披露 Ts 、Denc 与 DLLM 的具体数值，也未披露采样率、帧长与步长，因此这里只保留形状关系，不补充无来源的帧率数值。

### 四阶段过渡训练如何用单语数据铺平语码切换适配

第一阶段的目标是建立语音与文本的初步对齐。针对目标语码切换场景涉及的 m 种语言，每种语言随机初始化一个多层感知机投影器，并用对应单语的自动语音识别数据以交叉熵为目标独立预训练。此时仅学习把声学特征映射到文本语义附近，为后续分组提供良好起点，也避免随机初始化带来的方差干扰。

第二阶段把每个语言的预训练投影器复制为该组 n 个专家的相同初始权重，再把所有语言组拼成完整的混合专家投影器，并在层间插入随机初始化的路由器。训练仍使用相同的单语识别数据，但总目标在交叉熵之外增加语言特异损失与组内负载均衡损失。前者对每一帧惩罚被分到非本族语言组的概率，引导跨组正确分流，后者统计同一语言内各专家被选中的比例与平均路由概率的乘积，促进组内均匀分担，避免少数专家垄断。

第三阶段着重补齐翻译能力，把单语识别数据与单语翻译数据混合，并引入过渡损失。过渡权重 λ = b / B 随批次下标 b 从 0 增长到总批次数 B ，识别损失权重为 1 减 λ ，翻译损失权重为 λ ，训练初期偏识别、后期偏翻译，实现从识别到翻译的平滑切换，同时保留两项辅助损失以维持路由稳定。第四阶段把单语翻译数据与语码切换翻译数据混合，沿用同样的过渡形式从单语翻译滑向语码切换翻译。由于语码切换语音缺少帧级语言标签，这一阶段去掉语言特异损失与组内负载均衡损失，只保留过渡加权的交叉熵。

参数更新边界清晰，训练时对大语言模型与语音编码器采用 LoRA 微调，对混合专家投影器与路由器全量微调。超参数选择上，每组专家数 n 与激活数 k 在 NTUML2021 语码切换验证集上确定，最终取每组 7 个专家、推理激活前 7 个。原文未披露优化器类型、学习率与批量大小，采样率与帧级超参同样未披露，复现时只能沿用公开代码的默认配置。

### Fisher 与 NTUML2021 上的翻译质量究竟提升了多少

#### 评测协议与语义间隔证据

评测覆盖 Fisher 英语与西班牙语交替到英语，以及 NTUML2021 中文与英语交替到英语两套数据，每套再分语码切换与单语两类，共 4 个测试条件。指标为 SacreBLEU 与 COMET ，两者均为越高越好，前者侧重词面重叠，后者为神经网络打分。基线包含 Whisper 、SeamlessM4T 、Whisper 与 LLaMA 级联以及 LLaST ，其中 LLaST 代表把预训练编码器经投影器接入大语言模型的单语主流结构。数据划分沿用前人对 Fisher 单语与语码切换的切分，以及 NTUML2021 原始切分并以转写是否同时含中文与英文区分语码切换，均为离线端到端翻译。

要理解为何单一共享映射难以同时处理多种语言，可以先看下面这张基于验证集语音特征的二维密度图。它把英语、西班牙语与中文样本的平均池化编码器特征经 t-SNE 降维后画在同一平面，颜色区分语种，等高线疏密反映密度，有助于建立对语义空间间隔的直观认识。横轴与纵轴均为降维后的抽象坐标，右上角图例标明 3 种颜色的归属，观察团块位置与重叠程度即可判断间隔是否存在。

[![原论文 Figure 1：KDE plots of speech features from the validation set for different languages using t-SNE.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-1.png)

*论文图 1：三种语言语音特征的二维密度分布，显示不同语种分居独立子空间（原论文 Figure 1）。*

这张图包含 3 个独立团块，右上角图例中蓝色代表英语，黄色代表西班牙语，红色代表中文。蓝色团块主要分布在横轴 0 到 80 、纵轴零下 50 到 50 的右侧区域，黄色团块占据横轴零下 70 到 0 、纵轴零下 25 到 80 的左上区域，红色团块集中在横轴零下 65 到 15 、纵轴零下 80 到零下 35 的下方区域。3 组等高线内部密集、之间几乎没有重叠，同一语种样本抱团紧密，不同语种之间留出明显空白，说明即使经过大规模多语预训练的编码器输出，不同语言的语音特征仍然分居不同语义子空间。

#### 主结果概览

下表整理了 5 个系统在 4 个测试条件下的 BLEU 与 COMET 组合分数，每个单元格以斜杠分隔两个分数，左侧为 BLEU ，右侧为 COMET 。阅读时请先看行代表的系统，再看列代表的 Fisher 语码切换、Fisher 单语、NTUML2021 语码切换与 NTUML2021 单语，有助于对比本文方法与最强基线的差距。每列数值越大表示翻译质量越好，箭头方向均为向上。

| 模型 | Fisher 语码切换 BLEU / COMET | Fisher 单语 BLEU / COMET | NTUML2021 语码切换 BLEU / COMET | NTUML2021 单语 BLEU / COMET |
| --- | --- | --- | --- | --- |
| Whisper | 31.56 / 72.63 | 31.04 / 75.93 | 29.12 / 74.90 | 28.92 / 77.54 |
| SeamlessM4T | 36.89 / 76.13 | 35.04 / 79.71 | 38.03 / 79.93 | 35.78 / 81.17 |
| Whisper+LLaMA | 29.67 / 70.99 | 33.20 / 76.08 | 34.85 / 79.08 | 35.21 / 81.68 |
| LLaST | 33.78 / 75.35 | 30.67 / 78.37 | 32.53 / 78.92 | 33.81 / 79.03 |
| Ours | 37.51 / 77.54 | 35.87 / 80.14 | 39.52 / 81.33 | 36.27 / 81.65 |

本方法在 4 个条件共 8 个分数中拿下 7 个最高，Fisher 语码切换为 37.51 / 77.54 ，Fisher 单语为 35.87 / 80.14 ，NTUML2021 语码切换为 39.52 / 81.33 ，NTUML2021 单语为 36.27 / 81.65 。与 SeamlessM4T 相比，4 个条件的 BLEU 增量分别为 0.62 、0.83 、1.49 与 0.49 ，平均约 0.86 ，COMET 增量分别为 1.41 、0.43 、1.40 与 0.48 ，平均约 0.93 ，最大 BLEU 增量出现在 NTUML2021 语码切换，最大 COMET 增量出现在 Fisher 语码切换。唯一未胜出的是 NTUML2021 单语 COMET ，本文 81.65 略低于 Whisper 与 LLaMA 级联的 81.68 。本文没有人工听测，BLEU 与 COMET 均为自动指标，且原文未报告方差与置信区间，单语条件的 COMET 增量明显小于语码切换条件。

#### 专家数与激活数的验证集取舍

超参数 n 与 k 均在 NTUML2021 语码切换验证集上调优，先固定激活前 3 个并改变每组专家数。下表列出每组 3 、5 、7 、9 与 11 个专家时的验证集分数，BLEU 与 COMET 分列两栏，便于观察性能随容量先升后降的趋势。选择时需同时考虑验证集峰值与推理开销，避免盲目增大容量。

| Model | BLEU | COMET |
| --- | --- | --- |
| Experts-3 | 38.02 | 80.95 |
| Experts-5 | 38.40 | 80.62 |
| Experts-7 | 38.55 | 81.02 |
| Experts-9 | 38.35 | 80.99 |
| Experts-11 | 37.74 | 80.77 |

随着每组专家数从 3 增加到 7 ，BLEU 从 38.02 经 38.40 升至 38.55 ，COMET 从 80.95 经 80.62 升至 81.02 ，在 7 处达到峰值。继续增至 9 与 11 时，BLEU 回落到 38.35 与 37.74 ，COMET 为 80.99 与 80.77 ，说明容量过大后出现过拟合或路由稀释。最终取每组 7 个专家，这一选择基于验证集表现，属于验证集事后最优，而非测试集上的神谕选择，测试集上的泛化仍需主结果验证。

固定每组 7 个专家后，进一步比较激活前 1 、3 、5 与 7 个专家的验证集效果。下表同样以 BLEU 与 COMET 两栏呈现，重点看只激活 1 个专家时是否明显落后，以及增加激活数后收益是否持续。这有助于判断稀疏路由是否需要足够多的专家协同工作。

| Model | BLEU | COMET |
| --- | --- | --- |
| Top-1 | 27.76 | 76.38 |
| Top-3 | 38.55 | 81.02 |
| Top-5 | 38.53 | 81.01 |
| Top-7 | 38.90 | 81.14 |

只激活 1 个专家时 BLEU 仅 27.76 ，COMET 仅 76.38 ，明显低于激活多个专家的 38 以上与 81 左右。激活前 3 、前 5 与前 7 时 BLEU 分别为 38.55 、38.53 与 38.90 ，COMET 分别为 81.02 、81.01 与 81.14 ，整体随激活数增加而提升，前 7 达到最好。代价是推理计算量随激活数线性增长，本文最终选择推理激活前 7 个，即在该分组下全量激活，这是在验证集上权衡质量与开销后的事后选择。

### 哪些模块真正带来了增益，路由是否按语言分流

#### 消融：投影器、损失与阶段的贡献

下表在 NTUML2021 语码切换测试集上对比完整模型与 7 个变体，包含去掉混合专家投影器、去掉语言特异损失、去掉组内均衡损失、去掉过渡损失、换用传统均衡损失、去掉第一阶段与去掉第三阶段。每行给出 BLEU 与 COMET，有助于定位每个设计的独立贡献，阅读时先看完整模型行，再逐行对比降幅。

| Model | BLEU | COMET |
| --- | --- | --- |
| Ours | 39.52 | 81.33 |
| w/o MoE Speech Projector | 36.85 | 79.95 |
| w/o Llang | 39.05 | 80.88 |
| w/o Lbalance | 38.86 | 81.03 |
| w/o Ltransition | 39.21 | 81.24 |
| conventional L′ balance | 38.68 | 80.79 |
| w/o Stage 1 | 38.14 | 80.31 |
| w/o Stage 3 | 37.74 | 80.02 |

完整模型为 39.52 / 81.33，去掉混合专家投影器后跌至 36.85 / 79.95，降幅最大，说明细粒度分组是核心来源。去掉语言特异损失与组内均衡损失分别跌至 39.05 / 80.88 与 38.86 / 81.03，去掉过渡损失跌至 39.21 / 81.24，换用传统均衡损失为 38.68 / 80.79，去掉第一阶段与第三阶段分别跌至 38.14 / 80.31 与 37.74 / 80.02。可见三阶段铺垫与定制均衡损失均有正向作用，但原文未做显著性检验，也未报告多次运行的方差，单次差值在 0.3 以内的对比需谨慎看待。

#### 路由准确率与专家语义分析

由于语码切换语音缺少帧级语言标签，路由准确率只能在 Common Voice 单语数据上用已知语言衡量。下表统计每帧前 k 个专家中属于对应语言组的比例，行区分前 1 与前 7 以及是否去掉语言特异损失，列区分 Fisher 模型的英语与西班牙语，以及 NTUML2021 模型的英语与中文。

| Top-k | En | Fisher Es | En | NTUML2021 zh-CN |
| --- | --- | --- | --- | --- |
| Top-1 | 97.62% | 95.66% | 99.99% | 85.21% |
| w/o Llang | 54.42% | 51.16% | 45.72% | 69.28% |
| Top-7 | 96.72% | 95.76% | 99.98% | 81.03% |
| w/o Llang | 51.06% | 55.00% | 45.66% | 69.80% |

保留语言特异损失时，前 1 准确率在 Fisher 英语为 97.62%，西班牙语为 95.66%，NTUML2021 英语高达 99.99%，中文为 85.21%，前 7 时分别为 96.72%、95.76%、99.98% 与 81.03%。去掉该损失后四者跌至 54.42%、51.16%、45.72% 与 69.28% 附近，前 7 去掉后为 51.06%、55.00%、45.66% 与 69.80%，说明该损失是跨组正确分流的关键。中文明显低于英语与西班牙语，原文归因于数据不均衡，这也是一个未完全解决的短板。组内排序均值与方差同样显示定制均衡损失降低了方差，Fisher 为 4.25 与 0.69，去掉后为 4.14 与 1.05，NTUML2021 为 4.77 与 0.88，去掉后为 4.67 与 1.21。

为了进一步看组内专家是互补还是冗余，可以看下面这张固定单专家与路由器组合的识别误差对比图。它包含上下两个子图，分别对应 Fisher 与 NTUML2021 两个模型，横轴为组内专家序号，纵轴为 WER（词错误率）或 CER（字符错误率），虚线与柱子分别代表路由器与固定专家，颜色区分语种。

[![原论文 Figure 3：Comparison of WER↓(En, Es) and CER↓(zh-CN) scores for the router and fixed-index variants.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/15233093fcca/figure-3.png)

*论文图 3：路由器组合与固定单专家在两种模型上的识别误差对比（原论文 Figure 3）。*

上子图纵轴为英语与西班牙语共用的 WER，横轴为 7 个专家序号，浅蓝柱对应英语固定专家，WER 分数在 8.74% 至 13.32% 之间，橙色柱对应西班牙语固定专家，WER 分数在 5.18% 至 7.09% 之间，两条水平虚线分别代表两种语言路由器组合，均低于各自全部 7 根柱子。

下子图左纵轴为英语 WER，右纵轴为中文 CER，浅蓝柱对应英语固定专家，WER 分数在 9.26% 至 14.45% 之间，橙红柱对应中文固定专家，CER 分数在 15.51% 至 21.84% 之间，两条虚线对应路由器组合，同样低于全部同色柱子。固定单专家单独工作时性能下降有限，说明各专家均学到一定语义，而路由器组合始终最优，体现了自适应加权的互补收益。

### 假设边界、复现前提与工程选型建议

本文结论成立的前提较为集中，语言对仅覆盖英语与西班牙语交替以及中文与英语交替，且目标语言均为英语，未验证其他语种组合或非英语目标。训练依赖单语识别与单语翻译数据铺路，对低资源语言是否仍有效原文未验证。评测均为离线端到端翻译，没有流式、前瞻延迟与实时率数据，也没有人工听测与显著性检验，COMET 作为神经打分与 BLEU 的词面重叠可能背离真实听感，缺失的方差信息使小幅差距难以断言稳定。

复现核对需要区分三件事，代码当前可用，作者在 <https://github.com/XMUDeepLIT/CSST-SSA> 公开实现与补充附录，说明文档完整并覆盖安装、推理与微调。权重是否提供下载与系统是否可直接运行原文未披露，本文依据未含权重链接与一键运行脚本。超参数中投影器层数、每组专家数与激活数明确，但优化器、学习率、批量大小、采样率与帧步长原文未披露，需以公开代码默认配置为准。

工程选型上，若场景以语码切换为主且能负担每组 7 个专家、推理激活前 7 个的开销，混合专家投影器值得尝试，尤其在西班牙语与中文区间收益更明显。若资源受限，可先从减少每组专家数或激活数入手，但需接受验证集中观察到的明显回落。试听或试用时可对照基线重点听语言切换边界处的漏译与错译，原文未提供试听页，实际听感需自行搭建演示验证，不宜仅凭自动分数选型。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率与前瞻延迟，编码器采用 Whisper-large-v3 ，投影后帧数与输入帧数保持对应，推理时每组激活前 7 个专家
- **训练与评测数据**：使用 Common Voice 英语、西班牙语与中文单语识别数据，Fisher 英语与西班牙语到英语翻译数据，NTUML2021 中文与英语到英语翻译数据，训练规模如 Common Voice 英语 233.0 K 对与 364.4 H ，Fisher 语码切换 8.2 K 对与 14.7 H ，NTUML2021 语码切换 7.9 K 对与 5.1 H ，验证与测试划分沿用原文并区分语码切换与单语
- **算力与训练耗时**：原文未披露 GPU 型号、数量、训练步数与耗时
- **核心超参数与配置**：混合专家投影器共 3 层并使用 ReLU 激活，每种语言每组 7 个专家，推理激活前 7 个，大语言模型与语音编码器采用 LoRA 微调，混合专家投影器与路由器全量微调，优化器、学习率与批量大小原文未披露
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存占用，推理策略为每组 7 个专家中激活前 7 个，投影器共 3 层
- **开源产物与协议状态**：作者代码与补充附录已在 <https://github.com/XMUDeepLIT/CSST-SSA> 公开，说明文档完整并覆盖安装、推理与微调
- **附录与补充材料要点**：原文称补充附录随代码发布，本文依据未含附录细节，许可限制与失效案例原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 6.7/10 | 技术严谨 6.6/10 | 实验充分 7.4/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 6.0/10 | 可复现 4.9/10 | 工程/实践 5.4/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0636`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/636) · [官方 PDF](https://ijcai.org/proceedings/2026/0636.pdf)
- DOI：`10.24963/ijcai.2026/636`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在Fisher与NTUML2021两套公开代码转换集上以BLEU与COMET双指标一致超越SeamlessM4T等强基线。

- 核心优势：直接消融显示去掉MoE投影器后BLEU从39.52降至36.85，证实核心模块具有因果贡献。

- 核心优势：给出按语种分组MoE路由公式与语言特有损失、组内均衡及四阶段过渡训练的完整形式化定义。

- 主要短板：全部质量结论依赖SacreBLEU与COMET自动指标，未报告人工评估与统计显著性检验。

- 主要短板：未披露学习率优化器批量步数调度、损失权重、训练硬件时长与解码设置，复现关键配置缺失较多。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
