---
title: "Nuha-Speech: Building General-Purpose Arabic Speech-LLMs"
date: 2026-11-27
draft: false
description: "针对阿拉伯语语音指令数据稀缺与评测缺失，作者拼装 1,501,000 个样本的多任务语料并以两阶段 LoRA 微调 Qwen-Omni 系列，在方言与年龄等副语言任务上由接近随机猜测升至 70% 以上，而 30B 模型字符错误率微升且全程缺乏人工听测。"
tags: ["指令微调", "语音识别", "语言识别", "口语理解"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Nuha-Speech 构建通用阿拉伯语语音大模型"
paper_digest_original_title: "Nuha-Speech: Building General-Purpose Arabic Speech-LLMs"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.2"
paper_digest_workbench_source_sha256: "322fc47c08bd3bd928b0129cec25343036d9c0092bb4a55a699f81abcb9bdce7"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.2/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.2.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对阿拉伯语语音指令数据稀缺与评测缺失，作者拼装 1,501,000 个样本的多任务语料并以两阶段 LoRA 微调 Qwen-Omni 系列，在方言与年龄等副语言任务上由接近随机猜测升至 70% 以上，而 30B 模型字符错误率微升且全程缺乏人工听测。"
paper_digest_reader_sections: [{"heading":"阿拉伯语语音大模型为何缺乏通用指令能力","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"统一三元组格式下 1,501,000 个样本的全景与端到端流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"八组任务语料的来源拼装与合成控制","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"冻结编码器与两阶段课程的微调实现","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"多任务基准显示副语言跃升与语义稳步改善","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"资源受限下的边界条件与工程选型","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Elm Company, KSA"],"name":"Yingzhi Wang"},{"affiliations":["Elm Company, KSA"],"name":"Reem Alhazzani"},{"affiliations":["Elm Company, KSA"],"name":"Muhammad AL-Qurishi"}]
paper_digest_abstract_sha256: "5d49796002c08885b78cee5775100669d5d61c21ffdc8a7e4dd38ef31f7be99c"
paper_digest_sidecars: {"citation.bib":{"sha256":"7d53923e6d826b7f8aefa09a0ef06d93f2541adc418130c3429069a5cdba1fb3","url":"/audio-research-portal/client/papers/2026-11-27/conference-0898f27dc726968a515c9d6e/citation.bib"},"citation.json":{"sha256":"4f9105f4a3f521d003e6111fb43900836e4a5eaad647e61ff265004b21afe995","url":"/audio-research-portal/client/papers/2026-11-27/conference-0898f27dc726968a515c9d6e/citation.json"},"citation.ris":{"sha256":"0c78a48ae2de60a5ff61a7f11422f7015ef7cf05c88ba3e8299765f249162163","url":"/audio-research-portal/client/papers/2026-11-27/conference-0898f27dc726968a515c9d6e/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6deca252b0cb7fcfe49660ab30a98b2c93c17afc33889196926322f5c9b236a7","url":"/audio-research-portal/client/papers/2026-11-27/conference-0898f27dc726968a515c9d6e/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.2"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.2"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.2"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.2/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.2.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "c089e4f7f670e5bf54ab106dd4981d8701d27ebdc749c05cdf1bb84e3fa5df5a"
paper_digest_api_reader_plan_sha256: "c74facf80f9a40c2655e46884f20249a89f27357022a85f581436ae2c549bb3f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8e4b986936521c9242aa2ad0aa655fe465c0f5fc503ec650bc070701311033b7"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7d79a95763e3fb5705ec9b28fadfee2dc3b5c29901ea3bc029dd64904052d6e6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "babbc5eb1016fa434c33c8144f94c1846f906b62b0f686ccdc8d3b1532357ccf"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a3df0f4c1695533ce44d2c729f52796bbe8e14e89c43669a135f1a7db8b68e00"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.instruction-tuning","label":"指令微调"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.language-identification","label":"语言识别"},{"facet":"task","id":"task.spoken-understanding","label":"口语理解"}]
paper_digest_primary_method: "指令微调"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 Nuha-Speech 构建通用阿拉伯语语音大模型

> 英文题目：*Nuha-Speech: Building General-Purpose Arabic Speech-LLMs*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.2`
> DOI：`10.18653/v1/2026.salma-1.2`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.2/) · [官方 PDF](https://aclanthology.org/2026.salma-1.2.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[语言识别](/audio-research-portal/papers/?concept=task.language-identification)；[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding)
- **研究方法**：[指令微调](/audio-research-portal/papers/?concept=method.instruction-tuning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.2/10 | 技术严谨 5.6/10 | 实验充分 7.0/10 | 清晰度 6.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：模型报告

## 👥 作者与机构

- Yingzhi Wang：Elm Company, KSA
- Reem Alhazzani：Elm Company, KSA
- Muhammad AL-Qurishi：Elm Company, KSA

## 📌 核心摘要

**问题与瓶颈：** 本文面向阿拉伯语语音大模型，输入为阿拉伯语语音，输出为纯文本，覆盖语音识别、语音翻译、语音问答、方言识别、情感识别、年龄识别、性别识别与多轮问答。现有阿拉伯语中心 Octopus 仅支持识别、阿英翻译与方言三项任务，缺乏零样本泛化，且依赖私有数据难以复现。Qwen2-Audio 与 Qwen2.5-Omni 虽有多语能力但阿语指令跟随未经证实，仅 Qwen3-Omni 明确支持包含阿语在内的 19 种语音输入语言。更根本的瓶颈在于非识别任务的公开阿语语料极少，真实语音指令对几乎不存在，主流评测基准集中于英语，无法衡量阿语理解与副语言能力。

**核心思路与方法架构：** 与最接近的 Qwen-Omni 基线相比，本文保留其音频编码器与大语言模型骨干，新增大规模阿语指令微调与两阶段课程，冻结编码器而仅以 LoRA 更新大语言模型。单条样本统一为语音、指令与输出三元组，指令集用 GPT-5 设计宽指令集以支撑零样本，语音经冻结的 Whisper-large-v3 或 AuT 编码器映射为音频文本对齐表示，再由 Qwen2.5 或 Qwen3 系大语言模型生成文本答案，涵盖 3B 、 7B 与 30B-A3B 三种规模，全程仅输出文本而不涉及语音合成或流式约束。训练语料共 1501K 个样本，其中识别 790K 个来自 SADA 、 Common Voice 、 MASC 与 MGB-2 并剔除 1 s 以外与 10 s 以外片段，翻译 5K 个来自 CoVoST-v2 加 150K 个经 Qwen3-32B 翻译补足，问答 150K 个封闭式加 150K 个开放式经 Qwen3-32B 生成，方言 150K 个来自 ADI-17 共 17 种方言，情感 20K 个合成，年龄 10K 个真实加 10K 个合成并定义青年 18 岁以下、成人 18 至 60 岁与年长 60 岁以上，性别 51K 个来自 SADA ，多轮 5K 个标注合并加 10K 个情感推理。

**关键实验与核心代价：** 在 CoVoST-v2 阿英测试集 2.3K 个样本上，翻译指标 BLEU 从基线 Qwen2.5-Omni-3B 的 39.27 提高至 Nuha-Speech-3B 的 48.32 ，同期句子相似度从 0.813 提高至 0.884 ，语音问答的 LLM 裁判分从 2.30 提高至 2.60 ，方言识别准确率从 9.70 提高至 57.83 ，均高于基线。主导收益来自全任务微调对副语言能力的补齐，正文称方言与年龄基线接近随机猜测而微调后实现数倍增长，情感与性别基线尚可而微调后达到优秀水平，而 30B 因预训练语义已较强而增益较小。代价方面，第二阶段将识别样本从 790K 个缩减为 200K 个以平衡任务并节省训练时间，编码器全程冻结，LoRA 秩为 8 ，未报告实时率或推理时延，问答评测仅用 LLaMA-3.3-70B-Instruct 作代理裁判而无人工主观听测。

**适用边界与深读导览：** 结论成立前提为现代标准与方言混杂的阿语朗读与广播语音、短句文本输出与域内测试，未覆盖长音频、噪声混响、开放域零样本任务与端侧实时部署，情感与年龄测试与训练共用同族合成语音模型而可能高估泛化，150K 个翻译与 310K 个问答依赖 Qwen3-32B 生成而未经人工质检。评测脚本、裁判提示与测试集承诺经 GitHub 公开而模型权重与完整语料未提供下载，深究语料构造与两阶段课程可查阅下方方法概述和架构，深究七任务基准与前后对比可查阅实验结果，深究超参与缺失项可查阅细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 阿拉伯语语音大模型为何缺乏通用指令能力

近年来语音大语言模型在多语种场景下进展迅速，但阿拉伯语仍明显欠缺。已有阿拉伯语工作以 Octopus 系列为代表，仅支持自动语音识别、阿拉伯语到英语语音翻译与方言识别 3 个任务，采用类似 Salmonn 的语义与声学双编码器结构，且主要依赖私有数据，难以复现。Qwen 系列虽具备语音输入能力，Qwen2-Audio 与 Qwen2.5-Omni 的公开演示集中于英语与中文，阿拉伯语指令跟随未经证实，Qwen3-Omni 明确支持 19 种语音输入并包含阿拉伯语，但系统评测仍然缺失。

从任务定义看，模型输入为阿拉伯语语音，覆盖多方言、不同年龄、性别与情感带来的声学变异，输出限定为纯文本，包括转写文本、译文、问答答案或类别标签。为统一不同任务，作者将每个样本整理为语音、指令与输出构成的三元组，并借助 GPT-5 构造多样化指令集合，以支撑零样本泛化并避免对狭窄提示过拟合。这一设定把识别、翻译、问答与副语言分类纳入同一语义空间，为后续微调奠定格式基础。

已有主流路线难以直接迁移，瓶颈具体而明确。面向非转写任务的公开阿拉伯语料极少，语音情感识别与语音问答缺乏足够规模的可训练数据，语音指令微调数据几乎空白，多数指令语料为英语，少数译成阿拉伯语但缺少真实语音与指令配对。评测同样缺位，现有语音基准多源自英语数据集，任务划分与指标难以反映阿拉伯语方言与形态特点，导致模型是否真正理解阿拉伯语语音无法判断。

Nuha-Speech 正是为填补这一基础设施空白而设，工作围绕三件事展开，一是拼装以公开数据为主且策略透明的 1,501,000 个样本训练语料，覆盖识别、翻译、问答、方言、情感、年龄与性别及多轮问答，二是以 Qwen-Omni 不同规模变体为起点做监督微调，其中 3B 与 7B 沿用 Whisper-large-v3 编码器与 Qwen2.5 主干，30B 采用 AuT 音频编码器与混合专家结构，三是为 7 个任务各自建设测试集并搭配不同指标形成多任务基准。

评测同样按任务搭配指标，识别沿用包含 46,757 个样本的多方言榜单并报告词错误率，翻译在 2,300 个样本上同时考察词汇重合与语义相似度，问答以 1,237 条合成语音配大模型打分，方言、情感、年龄与性别分别以 12,150 个、1,100 个、1,200 个与 2,000 个样本报告准确率。论文在微调前后对比中报告全任务提升，小规模模型增益更显著，副语言任务增益大于语义任务，并强调在阿拉伯语资源受限条件下优先保证可复现性。

### 统一三元组格式下 1,501,000 个样本的全景与端到端流程

与最近基线相比，实质增量不在编码器结构本身，而在数据与课程。作者保留 Qwen-Omni 系列的音频编码器与大语言模型主干，未重新设计声学与语义双编码器或蒸馏分支，新增的是覆盖理解与副语言的阿拉伯语指令语料与两阶段微调。Octopus 采用 Salmonn 风格双编码器并仅覆盖 3 个任务，Qwen 基线未做阿拉伯语系统微调。原文未披露采样率、帧长、步长、特征维度与码率，无法量化张量形状，以下仅描述逻辑流程，下表给出语料全景。

| Task | Data Source | #Samples |
| --- | --- | --- |
|  | MGB-2 | 278K |
|  | MASC | 263K |
| ASR |  |  |
|  | SADA | 171K |
|  | Common Voice | 78K |
|  | CoVoST-v2 (Ar2En) | 5K |
| AST |  |  |
|  | ASR-Curated | 150K |
|  | MGB-2 Closed-ended | 150K |
| SQA |  |  |
|  | MGB-2 Open-ended | 150K |
| DI | ADI-17 | 150K |
| SER | Elevenlabs-Syn | 20K |
|  | SADA | 5K |
| AR | Common Voice | 5K |
|  | Elevenlabs-Syn | 10K |
| GR | SADA | 51K |
|  | SADA | 5K |
| Multi-SQA |  |  |
|  | Emotion Reasoning | 10K |
| Total |  | 1501K |

训练语料总计 1,501,000 个样本，自动语音识别约 790,000 个，来自 MGB-2 的 278,000 个、MASC 的 263,000 个、SADA 的 171,000 个与 Common Voice 的 78,000 个，并剔除 1 秒至 10 秒范围外片段以提升效率。自动语音翻译共 155,000 个，含 CoVoST-v2 阿拉伯语到英语的 5,000 个与由转写经 Qwen3-32B 翻译得到的 150,000 个。语音问答 300,000 个，方言识别 150,000 个，情感、年龄、性别与多轮问答构成余下部分，具体拆分见下节。

以一段 1 秒阿拉伯语语音为教学示例，原文未给出采样率与帧率，形状无法量化，仅能追踪逻辑顺序。第一步，波形送入已冻结的音频编码器，Qwen2.5-Omni 变体为 Whisper-large-v3 编码器，Qwen3-Omni 变体为 AuT 编码器，输出声学表征。第二步，表征经投影进入大语言模型，与指令文本拼接。第三步，大语言模型以自回归方式生成纯文本输出，不涉及语音波形重建。未披露投影维度与帧率变化，如实说明缺失。

推理执行路径同样保持文本输出，模型接受语音与阿拉伯语或英语指令，生成转写、译文、答案或标签。原文未披露分块流式、前瞻窗口、缓存、采样步数、延迟、TTFA、RTF 与显存开销，无法评估实时性。训练侧冻结编码器而仅更新大语言模型，配合 LoRA 稳定训练，具体课程与超参见训练小节。

### 八组任务语料的来源拼装与合成控制

训练语料以公开集与整理集结合，总量为 1501K 个样本，统一覆盖语音理解与语音副语言两大类核心任务。每条样本均整理为语音、指令与输出三元组，且训练输出限定为纯文本，以将不同任务纳入同一语义空间，便于后续统一微调。作者主要采用公开可得数据集与透明可复现的整理策略，便于研究社区复现数据集，该设计旨在弥补阿拉伯语语音指令数据稀缺的短板。

自动语音识别作为首要目标，选用 4 个多方言公开集 MGB-2、MASC、SADA 与 Common Voice，保留 1 秒至 10 秒片段，合计约 790K 个样本，目标是建立稳固的音频文本映射。自动语音翻译采取端到端方式，将源语言口语输入直接映射为目标语言文本，聚焦阿拉伯语到英语，采用 CoVoST-v2 的 5K 个样本，并从上述识别集中随机抽取 150K 个转写经 Qwen3-32B 翻译为英语补足规模，以服务翻译为英语的真实工作流。

语音问答针对口语内容的语义与事实查询，贴近人与对话系统自然交互的方式。因缺少现成阿拉伯语语音问答集，作者以 MGB-2 转写为输入，经 Qwen3-32B 生成 150K 个封闭式与 150K 个开放式问答对，前者强化结构化查询与精确内容检索，后者侧重跨句推理与表达生成。方言识别直接采用 ADI-17 的 150K 个训练样本，覆盖 17 种方言分类，以应对阿拉伯语方言多样性对下游性能的影响，在多方言场景下保持稳健。

语音情感识别长期受大规模开源数据不足限制，作者采用 ElevenLabs 情感转换语音合成模型生成 20K 个样本，愤怒、快乐、悲伤与中性 4 类均衡，每类由 8 个说话人随机合成，并开启风格夸张与说话人相似度控制以保证转换效果，降低说话人偏置风险。年龄识别划分 18 岁以下、18 岁至 60 岁与 60 岁以上 3 组，针对现有标注偏向成年与中年、缺少年幼与年长覆盖的问题，从 SADA 与 Common Voice 抽取年轻与年长稀缺样本并补足成年样本得 10K 个，再以每组 10 个说话人合成 10K 个。性别识别考虑跨语言性能差异，从 SADA 抽取 51K 个男女均衡样本。

多轮语音问答包含两部分，旨在提升复杂口语场景下的稳健性与适应性。一是利用 SADA 的性别、年龄与转写标注合并三项孤立任务，构造 5K 个语音分析风格多轮样本，性别与年龄均衡。二是情感推理多轮，先识别情感再转写内容最后推断 2 模态情感关联，基于合成情感集与转写经 Qwen3-32B 生成 10K 个跨模态推理对。每项任务均以 GPT-5 设计宽指令集，避免过拟合狭窄提示，支持零样本泛化，训练输出限定为纯文本，不涉及语音合成。

### 冻结编码器与两阶段课程的微调实现

基线选用 Qwen-Omni 系列三档规模，Qwen2.5-Omni-3B 与 Qwen2.5-Omni-7B 采用 Whisper-large-v3 编码器并搭配 Qwen2.5 系列大语言模型，Qwen3-Omni-30B 则采用更精细的 AuT 音频编码器与 Qwen3 系列混合专家结构，完整变体为 Qwen3-Omni-30B-A3B-Instruct 。选择同时覆盖 3B 和 7B 与 30B 档，意在系统比较参数量变化下的阿拉伯语理解增益，并借助 Qwen 主干在低资源语言上的泛化能力。

训练采用两阶段课程，思路是先以识别任务打底建立音频文本映射，再扩展到全部任务并控制识别样本占比以保持平衡。编码器在两阶段均冻结，仅微调大语言模型并使用 LoRA 稳定训练，避免破坏已有阿拉伯语语音处理能力。Qwen3-Omni-30B 因在公开阿拉伯语识别榜单已具竞争力而跳过第一阶段，Qwen2.5-Omni-3B 与 Qwen2.5-Omni-7B 则走完全部流程，下表为课程安排。

| Stage | Task | Data | Module | #Epochs |
| --- | --- | --- | --- | --- |
| 1 | ASR | ASR-790K | LLM (Lora) | 3 |
| 2 | All | ASR-200K + Others-711K | LLM (Lora) | 2 |

第一阶段仅用约 790,000 个识别样本训练 3 个轮次，第二阶段将识别样本降采样至 200,000 个，并加入其余约 711,000 个样本训练 2 个轮次，既保留识别性能又减少耗时并平衡任务。原文 Table 2 以阶段、任务、数据、模块与轮次列出安排，第一阶段行为识别专用，第二阶段为全任务。Qwen3-Omni-30B 跳过第一阶段而直接进入第二阶段，体现对已有识别能力的复用，而非从零重学映射。

超参方面，Qwen2.5-Omni-3B 与 Qwen2.5-Omni-7B 在两阶段均用全局批量大小为 16 与学习率为 1e-4 ，Qwen3-Omni-30B 用全局批量大小为 8 与相同学习率，并设混合专家路由负载均衡损失系数为 1e-3 。LoRA 秩为 8 ，缩放系数为 32 ，作用于全部线性层。微调后三档分别命名为 Nuha-Speech-3B 、Nuha-Speech-7B 与 Nuha-Speech-30B ，对应各自基线规模。

### 多任务基准显示副语言跃升与语义稳步改善

#### 评测协议与公平性前提

评测覆盖训练阶段的 7 个任务，兼顾语音理解与副语言。自动语音识别沿用开放通用阿拉伯语识别榜单，基于 6 个数据集的 46,757 个测试样本，报告平均 WER （词错误率）与 CER （字错误率），数值越低越好。语音翻译用 CoVoST-v2 阿拉伯语到英语测试集 2,300 个样本，以 BLEU （词面重叠指标）衡量词面重叠，以基于 Gemma 的句子相似度衡量语义对齐，越高越好。语音问答将 SD-QA 文本段落经 XTTS-v2 以 58 个说话人音色合成，再经 Whisper-large-v3 转写并以 CER 过滤得 1,237 个高质量样本，由 LLaMA-3.3-70B-Instruct 担任评判，按相关性、正确性与简洁性给出 0 至 3 分。

| Task | Data Source | Metric | #Samples |
| --- | --- | --- | --- |
| ASR | OUAAL | Average WER | 47K |
| SQA | SD-QA-Syn | LLM as Judge | 1.2K |
| AST | CoVoST-v2 | BLEU, Sentence-Similarity | 2.3K |
| DI | ADI-17 | Accuracy | 12K |
| SER | Synthesized Speech | Accuracy | 1.1K |
| AR | Common Voice + Elevenlabs-Syn | Accuracy | 1.2K |
| GR | Common Voice | Accuracy | 2K |

方言识别直接用 ADI-17 测试集 12,150 个样本，覆盖 17 个类别，情感识别另合成 1,100 个 4 类均衡样本，年龄识别由 Common Voice 抽样与 ElevenLabs 合成共 1,200 个 3 组均衡样本，性别识别取 Common Voice 的 2,000 个均衡样本，四项副语言任务统一以准确率衡量，超出定义域或预测排除类别均计为错。公平性上，同一测试集比较微调前后，不同参数量分档比较，指标方向明确。原文未安排消融实验，无法分离两阶段与数据配比各自贡献，未报告方差与置信区间，也未做人工听测，神经代理与评判可能与人工感知背离。

#### 主基准逐任务解读

主基准同时列出 3 个基线与其微调版本，共 6 行 9 个指标列，自动语音识别 WER 与 CER 越低越好，翻译 BLEU 与相似度、问答评判分数、方言、情感、年龄与性别准确率越高越好。Qwen2.5-Omni-3B 基线未报告识别两项数值，原文以空缺处理，其余均有完整数字。下表为全部结果，后文分语义与副语言两组解读，并点出未胜出项。

| Model | ASR WER%↓ | ASR CER%↓ | AST Bleu↑ | AST Sim↑ | SQA LLM-Score↑ | DI Acc%↑ | SER Acc%↑ | AR Acc%↑ | GR Acc%↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen2.5-omni-3B | - | - | 39.27 | 0.813 | 2.30 | 9.70 | 51.93 | 41.75 | 60.55 |
| Nuha-Speech-3B | 36.83% | 17.18 | 48.32 | 0.884 | 2.60 | 57.83 | 88.14 | 83.00 | 98.85 |
| Qwen2.5-omni-7B | 74.74 | 48.33 | 42.08 | 0.836 | 2.37 | 13.66 | 72.14 | 33.33 | 86.30 |
| Nuha-Speech-7B | 34.91 | 16.09 | 50.60 | 0.896 | 2.66 | 72.65 | 86.64 | 73.00 | 99.50 |
| Qwen3-omni-30B | 30.71 | 13.67 | 48.71 | 0.889 | 2.59 | 16.78 | 80.23 | 42.67 | 82.25 |
| Nuha-Speech-30B | 29.66 | 14.55 | 51.73 | 0.908 | 2.62 | 76.02 | 84.88 | 85.75 | 94.30 |

语义三项中，识别任务上 Nuha-Speech-3B 取得 WER 36.83% 与 CER 17.18% ，Nuha-Speech-7B 由基线 WER 74.74% 与 CER 48.33% 降至 WER 34.91% 与 CER 16.09% ，Nuha-Speech-30B 由基线 WER 30.71% 降至 WER 29.66% ，但 CER 由基线 13.67% 升至 14.55% ，出现微小回退，为全表唯一的基线优于微调的负例。翻译任务上三档基线已具基础能力，微调后 30B 以 BLEU 51.73 与相似度 0.908 为同列最高，问答任务上三档基线均超 2 分，微调后 7B 以 2.66 分略高于另两档的 2.60 分与 2.62 分。

副语言四项增益更为显著，方言识别基线仅 9.70% 、13.66% 与 16.78% ，接近 17 分类随机猜测，微调后分别达 57.83% 、72.65% 与 76.02% ，其中 30B 最高。年龄识别基线为 41.75% 、33.33% 与 42.67% ，微调后达 83.00% 、73.00% 与 85.75% ，30B 最高。情感识别基线为 51.93% 、72.14% 与 80.23% ，微调后达 88.14% 、86.64% 与 84.88% ，3B 最高。性别识别基线为 60.55% 、86.30% 与 82.25% ，微调后达 98.85% 、99.50% 与 94.30% ，7B 最高。原文另试 Qwen2-Audio-7B 同语料微调仍弱于 Qwen2.5-Omni-7B 而未列入终表，属负结果，全程无人工听测与方差报告。

### 资源受限下的边界条件与工程选型

方法假设限定输出为纯文本，不涉及语音合成与声纹重建，多轮问答仅 15,000 个样本，难以覆盖开放对话。训练剔除 1 秒至 10 秒外片段，长语音与短指令行为未经验证。情感与年龄合成数据经风格夸张与说话人控制，但合成到真实的迁移差距未量化，方言 17 类划分与真实语码切换复杂度仍有距离，问答评判以 0 分至 3 分打分，可能偏好流畅表达而非事实准确。

训练与评测分工进一步限定结论适用范围。3B 与 7B 经历两阶段课程，先以 790,000 个识别样本打底建立音频文本映射，再以 200,000 个识别样本加 711,000 个其余任务样本兼顾保持与均衡，编码器冻结而仅以低秩适配微调语言模型，30B 则跳过第一阶段直接进入多任务阶段。部署条件多未验证，原文未披露采样率、帧宽、码率、前瞻延迟、RTF（实时系数）与显存占用，未说明流式与离线之分，无法判断实时可用性。

复现前提需区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行均未得到确认，原文称评测脚本与测试集将经 GitHub 公开，但公开状态未经证实。训练数据多源自公开集，拼装策略透明，MGB-2、MASC、SADA、Common Voice、CoVoST-v2 与 ADI-17 均可获取，但 150,000 个翻译与 300,000 个问答依赖 Qwen3-32B 生成，情感与年龄合成依赖 ElevenLabs 模型，复现需承担模型调用与合成成本。超参与冻结边界已完整披露，低秩适配部分可复现。

选型上，若资源受限可优先考虑 Nuha-Speech-3B 与 Nuha-Speech-7B，两者需完整两阶段打底，识别与副语言均有大幅改善，7B 在问答与性别上略优。若追求翻译语义相似度与方言年龄上限，Nuha-Speech-30B 在 BLEU、相似度、方言与年龄四列最高，但需接受 CER（字符错误率）微升与混合专家推理负担。落地副语言功能前，建议先以真实分布小规模人工抽查校准合成基准，避免直接以外推准确率估计线上效果。噪声、混响、重叠语音、远场采集与儿童及老年极端分布均未评测，翻译仅覆盖阿拉伯语到英语单向，问答合成测试经 CER（字符错误率）过滤偏向易合成样本，可能高估真实口语问答能力。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、通道数、特征维度、码率、前瞻延迟与 RTF ，无法给出张量形状，仅说明语音输入经冻结编码器映射后送入大语言模型生成纯文本。
- **训练与评测数据**：训练共 1,501,000 个样本，含识别约 790,000 个、翻译 155,000 个、问答 300,000 个、方言 150,000 个、情感 20,000 个、年龄 20,000 个、性别 51,000 个与多轮问答 15,000 个，评测含识别 46,757 个、问答 1,237 个、翻译 2,300 个、方言 12,150 个、情感 1,100 个、年龄 1,200 个与性别 2,000 个。
- **算力与训练耗时**：原文未披露 GPU 型号、数量、训练步数与耗时，仅给出批量大小与学习率等，推理硬件亦未披露，无法评估算力成本。
- **核心超参数与配置**：两阶段课程，第一阶段仅识别 790,000 个样本训练 3 个轮次，第二阶段识别 200,000 个加其他 711,000 个样本训练 2 个轮次，冻结音频编码器，仅以 LoRA 微调大语言模型全部线性层，秩为 8 ，缩放系数为 32 ，学习率为 1e-4 ，3B 与 7B 全局批量大小为 16 ，30B 全局批量大小为 8 并设混合专家路由负载均衡损失系数为 1e-3 ，30B 跳过第一阶段。
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐、显存与参数量细节，仅知输出为纯文本，30B 为混合专家结构，实际部署成本无法评估。
- **开源产物与协议状态**：原文称评测脚本与测试集将经 GitHub 公开，但代码是否开源、权重是否提供下载、系统是否可直接运行三件事均未得到确认，不得视为已公开。
- **附录与补充材料要点**：原文未设附录，未披露证明、补充消融、许可限制与失效案例细节，仅在正文提及排除 Qwen2-Audio-7B 基线的负结果。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 6.2/10 | 技术严谨 5.6/10 | 实验充分 7.0/10 | 清晰度 6.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：模型报告
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.2`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.2/) · [官方 PDF](https://aclanthology.org/2026.salma-1.2.pdf)
- DOI：`10.18653/v1/2026.salma-1.2`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（模型报告）：创新 18% · 严谨 14% · 实验 22% · 清晰 8% · 影响 18% · 复现 6% · 工程 14%（开源上限加分 +0.6）

- 核心优势：3B可核对提升扎实，翻译BLEU从39.27升至48.32，语义相似度从0.813升至0.884，方言准确率从9.70升至57.83。

- 核心优势：构建1501K大规模阿语语音指令三元组语料，覆盖识别翻译问答方言情感年龄性别多轮七项任务，来源与合成策略透明。

- 核心优势：七任务基准结合46757识别榜单、2.3K翻译、12150方言等公开与可控合成测试，指标方向与样本规模交代清晰。

- 主要短板：情感与年龄训练测试共用同族ElevenLabs合成模型可能高估泛化，且150K翻译与310K问答依赖Qwen3-32B生成未经人工质检。

- 主要短板：问答仅用LLaMA-3.3-70B代理裁判而无真人主观听测，无置信区间与显著性检验，且择优排除弱基线存在选择偏置。

- 主要短板：声称GPT-5宽指令集支撑零样本泛化却未测试未见任务，且无消融区分第一阶段与指令多样性的各自贡献。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
