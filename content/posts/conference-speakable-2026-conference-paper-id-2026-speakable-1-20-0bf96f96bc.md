---
title: "On the Role of Encoder Depth: Pruning Whisper and LoRA Fine-Tuning in SLAM-ASR"
date: 2026-11-28
draft: false
description: "本文研究 SLAM-ASR 中 Whisper 编码器顶层剪枝与大语言模型低秩适配的交互，发现两层剪枝加适配在丹麦语、荷兰语与英语上均优于完整基线并减少编码器侧参数，但低资源下补偿不稳定且会增加插入错误。"
tags: ["LoRA", "模型剪枝", "低资源", "语音识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "剪掉两层编码器再做轻量适配为何能超越完整语音识别系统"
paper_digest_original_title: "On the Role of Encoder Depth: Pruning Whisper and LoRA Fine-Tuning in SLAM-ASR"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.20"
paper_digest_workbench_source_sha256: "a1eda8025d37491411934b3b772dca50a2736940e713a057eb72873af61c11ca"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.20/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.20.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文研究 SLAM-ASR 中 Whisper 编码器顶层剪枝与大语言模型低秩适配的交互，发现两层剪枝加适配在丹麦语、荷兰语与英语上均优于完整基线并减少编码器侧参数，但低资源下补偿不稳定且会增加插入错误。"
paper_digest_reader_sections: [{"heading":"大模型接管语言处理后语音编码器顶层为何可能冗余","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结编码器加轻量投影器桥接冻结大模型的完整识别流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"自顶向下剪枝与注意力低秩适配的训练冻结边界","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"两层安全剪枝与剪枝加适配超越完整基线的证据","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"从句子到词级错误看语言先验如何补偿声学损失","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"资源依赖与单架构验证带来的应用边界与复现前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex"],"name":"Ganesh Pavan Kartikeya Bharadwaj Kolluri"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex"],"name":"Michael Kampouridis"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex"],"name":"Ravi Shekhar"}]
paper_digest_abstract_sha256: "9f1b9f36f1e1cac6a75445034d1807509866c99c71c2c20b4b8e671967e744b1"
paper_digest_sidecars: {"citation.bib":{"sha256":"0f90ac9d64149b41e6a213ba51dcea99812f1e6c9bdce8172a1d4323197fb0a9","url":"/audio-research-portal/client/papers/2026-11-28/conference-0bf96f96bcb8e3ec38889515/citation.bib"},"citation.json":{"sha256":"7b552758fbf728302739bb8698bd4659e6f28248b71bcb80fe0adb4d44b78710","url":"/audio-research-portal/client/papers/2026-11-28/conference-0bf96f96bcb8e3ec38889515/citation.json"},"citation.ris":{"sha256":"0cba5d3d37363472e8b0fc5039f3c74b5087f0bd446d6b5311f7aa304cde65ae","url":"/audio-research-portal/client/papers/2026-11-28/conference-0bf96f96bcb8e3ec38889515/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"68ad2e3a312257c6ca16276b2d54a976e91d1ec207e0afcae4d6a02d45b6eebe","url":"/audio-research-portal/client/papers/2026-11-28/conference-0bf96f96bcb8e3ec38889515/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.20"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.20"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.20"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.20/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.20.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a5a7d1f3f47147f6c03a5900e3080bab2d568bbb6001af04a59b7e04bea26b74"
paper_digest_api_reader_plan_sha256: "457bc675d76d189d87ee1dfa6a26b0f5d59d4d5f2c3ce1179db7b87b7494e5ac"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "fd37db8dc80165d3c518d275baff39dd69b0068af97f9fd219b9aaaa24fd15ad"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9d144e1c36fcb2e8c011ee2def3381a65293e3d1208bc1f5d788fc4ade85af0c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "16549ce0c9aaf5755c91648ddb5f837ef863d5c55cef013ede483a41bb856964"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c0385a5572a945e30f8d8282f7bb8f827fb89e10811291d52f6e97f44490f270"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 剪掉两层编码器再做轻量适配为何能超越完整语音识别系统

> 英文题目：*On the Role of Encoder Depth: Pruning Whisper and LoRA Fine-Tuning in SLAM-ASR*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.20`
> DOI：`10.18653/v1/2026.speakable-1.20`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.20/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.20.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型剪枝](/audio-research-portal/papers/?concept=method.pruning)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.2/10 | 技术严谨 6.6/10 | 实验充分 7.3/10 | 清晰度 5.2/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ganesh Pavan Kartikeya Bharadwaj Kolluri：School of Computer Science and Electronic Engineering, University of Essex
- Michael Kampouridis：School of Computer Science and Electronic Engineering, University of Essex
- Ravi Shekhar：School of Computer Science and Electronic Engineering, University of Essex

## 📌 核心摘要

**问题与瓶颈：** SLAM-ASR 将冻结的 Whisper 语音编码器经轻量映射器接入冻结的 Qwen2.5-3B 大语言模型，由后者自回归生成转写文本，部署时完整编码器仍需处理每段音频。已有剪枝与蒸馏多面向传统编码器解码器联合训练的 Whisper，对编码器冻结且大语言模型从未见过语音的 SLAM-ASR 架构是否仍需全部上层语义抽象缺乏验证。同时，低秩自适应能否补偿整层删除的退化，以及数据量如何调节剪枝鲁棒性与补偿效果，也未见系统研究。若上层确如层级分析所示偏向语言抽象而与大语言模型能力重叠，则保留全部层级会造成持续的参数浪费。

**核心思路与方法架构：** 与完整 SLAM-ASR 基线相比，本文唯一增量是自顶向下逐层删除 Whisper 编码器顶层并仅重训映射器，另以 LoRA 适配大语言模型注意力矩阵作补偿，其余编码器与大语言模型保持冻结。以 16 kHz 音频为例，波形经 Whisper 预处理变为 80 通道对数梅尔谱，送入如 Small 由 12 层减至 10 层的剪枝编码器提取表示，相邻 5 帧拼接使序列长度降为 1/5，再经隐藏维度 2048 的两层感知机加 ReLU 与丢弃率 0.1 及层归一化映射到文本嵌入空间，最后由冻结大语言模型以束宽 2 的束搜索解码为小写去标点文本。剪枝减少数百万编码器参数而 LoRA 仅增加约 0.8M 至 1.5M 参数，训练时只更新映射器与 LoRA，补偿被假设为利用词汇与语法等语言先验弥补声学细节缺失而非直接修复声学特征。

**关键实验与核心代价：** 在 Common Voice 22 测试集上以 WER 越低越好为指标，Small 12 层基线丹麦语、荷兰语与英语分别为 47.41、17.98 与 21.84，而 10 层剪枝加 LoRA 为 47.23、16.98 与 20.64，在三语上均低于基线。在同一测试条件下，Medium 24 层基线为 39.00、12.74 与 16.33，而 22 层剪枝加 LoRA 为 37.91、11.84 与 15.82，在三语上均低于基线。在同一测试条件下，Large-v2 32 层基线为 36.09、12.05 与 13.36，而 30 层剪枝加 LoRA 为 35.81、11.44 与 12.16，在三语上均低于基线，同时总参数分别减少约 12.7M、23.2M 与 37.8M。去除顶层 1 至 2 层时原文称绝对 WER 增量在 2-4% 内，但按表 2 实际部分配置增量不足 2%，原文如此报告，存在字面口径出入，原文未解释。超出后荷兰语与英语平滑退化而丹麦语出现非单调波动，如 Large-v2 20 层基线丹麦语 WER 高达 130.99，经 LoRA 降至 59.06 仍远高于基线。话语级统计显示两层剪枝使 22.8% 至 42.7% 的话语退化，LoRA 将该比例降低 0.3 至 12.0 个百分点，但仍有 15.4% 至 38.1% 的话语差于未剪枝基线。本文只用 WER 评价，未做人工主观听测，也未用 UTMOS 等神经代理指标。效率代价仅以参数量衡量，未实测延迟、吞吐或 RTF。

**适用边界与深读导览：** 结论成立前提是 Whisper 编码器加拼接映射器加 Qwen2.5-3B 的离线整句架构、自顶向下剪枝与仅重训映射器的流程，以及丹麦语 4.18 小时、荷兰语 54.15 小时与英语 100.00 小时三种资源水平，未覆盖其他编码器族、大语言模型、映射器设计、非自顶向下删除或流式低延迟部署，低资源下的波动与插入变化机制仍需等数据量对照验证。摘要称减参 7-14%，但表明细中 Large-v2 为 5.9%，摘要称丹麦语总词错误下降 4-7% 且插入增加，但表 7 显示丹麦语总计为正的增加且插入为负的减少，原文如此报告，存在字面算术出入，原文未解释。本文未提供音频试听页，深究层级冗余假设、LoRA 配置与话语级及词错误类型分析可查阅下方方法概述和架构、实验结果与局限与问题章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 大模型接管语言处理后语音编码器顶层为何可能冗余

近年来语音识别越来越多借助冻结语音编码器连接冻结大语言模型的模块化方案实现，其中 SLAM-ASR 以结构简单受到关注。它的输入是经 16 kHz 重采样并转为 80 通道对数梅尔频谱图的语音，输出是转写文本，训练时仅更新中间的小型投影器，大语言模型自回归生成结果。编码器负责提供稳健的声学表示，投影器负责把编码器输出映射到大语言模型嵌入空间，大语言模型负责利用词汇与语法知识生成转写，三者分工明确使剪枝效应得以干净分离。部署时完整编码器仍需处理每一秒音频，若顶层对最终转写贡献有限，就会造成持续的计算浪费，这是本文压缩的直接动机。

#### 模块分工与既有压缩路线

已有压缩路线在传统编码器加解码器结构上取得进展，例如非结构化剪枝可压缩 50% 甚至 80% 而保持可比的字符错误率与词错误率，知识蒸馏可把 32 层解码器压缩到两层并实现约 6 倍推理加速。但这些工作联合训练编码器与解码器，而 SLAM-ASR 把解码器替换为从未见过语音的冻结大语言模型，对齐负担全部落在投影器上，编码器表示一旦退化无法依靠联合微调弥补，因此既有结论不能直接迁移到新的解码侧结构。投影器采用两层感知机结构，先把 5 个连续帧拼接以降采样，再经非线性变换与规范化对齐到文本嵌入尺度，容量远小于编码器与大语言模型，因而成为承接表示损失的关键瓶颈。

#### 冗余假设与实验布局

层级分析提示编码器下层偏向声学细节，上层偏向抽象语言信息，而大语言模型本身已具备词汇、语法与上下文能力，上层可能部分冗余。另一方面，低秩适配被用于多语言与低资源改进，但此前无人系统检验结构化整层移除在 SLAM-ASR 中的损伤，也无人检验低秩适配能否补偿这种结构损伤，以及训练数据量如何调节两者交互，这正是本文提出的第一个与第二个研究问题，分别对应剪枝损伤规律与适配补偿能力。为分离数据量与语言覆盖的影响，作者选择 Common Voice 22 中的 3 种资源水平语言，丹麦语训练约 4.18 小时，荷兰语约 54.15 小时，英语约 100.00 小时，三者均被 Whisper 编码器与 Qwen2.5-3B 覆盖。音频统一重采样到 16 kHz，保留 0.5 秒至 30 秒话语，转写统一小写并去除标点但保留缩写撇号，丹麦语特殊字符予以保留，以保证跨语言可比。实验覆盖 Whisper Small 12 层、Medium 24 层与 Large-v2 32 层，从完整编码器逐步剪枝至两层并对比是否使用低秩适配，累计超过 200 次独立训练，以 WER（词错误率）作为主要指标，数值越低表示识别越准确。

#### 数据划分与可比性保障

为保证资源水平对比可信，3 种语言均保留独立的开发集与测试集。丹麦语训练 3,592 个样本约 4.18 小时，开发 2,511 个样本约 3.21 小时，测试 2,684 个样本约 3.45 小时；荷兰语训练 43,458 个样本约 54.15 小时，开发 12,032 个样本约 16.03 小时，测试 12,033 个样本约 16.38 小时；英语训练 58,140 个样本约 100.00 小时，开发 16,398 个样本约 27.22 小时，测试 16,391 个样本约 27.02 小时。3 种语言同时得到语音编码器与大语言模型的覆盖支持，因此退化差异更可能源于可训练数据量而非缺失覆盖。每次更换深度后投影器均从零重新训练，编码器与大语言模型主体保持冻结，为后文比较提供了干净一致的起点。

### 冻结编码器加轻量投影器桥接冻结大模型的完整识别流程

要理解剪枝与适配的位置，先沿信号主路径看清冻结与可训练的边界，下图展示了语音分支与提示词分支如何汇入大语言模型，火焰与雪花标记区分了更新与冻结，箭头方向即为推理时的数据流向。

[![原论文 Figure 1：Overview of the SLAM-ASR architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/f438424514a7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/f438424514a7/figure-1.png)

*论文图 1：冻结编码器经可训练投影器与提示词分支共同汇入冻结大语言模型的双路结构（原论文 Figure 1）。*

像素显示底部左侧绿色 Speech 方框向上经黑色箭头进入浅蓝色 Audio Encoder，右下黄色 Prompt 方框向上进入浅蓝色 Tokenizer。Audio Encoder 右侧带蓝色雪花表示冻结，其输出经黑色箭头向上进入 Projector，Projector 右侧带橙色火焰表示可训练，再经黑色箭头向上进入顶部浅蓝色 LLM。Tokenizer 经黑色箭头向上进入 LLM 右侧，LLM 内部右侧嵌有橙色 LoRA 子块同样带火焰，左侧带雪花表示主体冻结，左右两路箭头最终都指向 LLM，共同驱动自回归转写，全图共 6 个功能框与 5 段纵向向上黑箭头。

相对最近基线，本文保留 Whisper 编码器与 Qwen2.5-3B 主体冻结的做法，实质增量是系统性顶层剪枝与大语言模型注意力低秩适配，投影器每次从零重新训练。信号规格为 16 kHz 重采样、80 通道对数梅尔频谱图，仅保留 0.5 秒至 30 秒语句并做小写与去标点规范化，丹麦语保留 æ、ø 与 å。原文未披露帧长、帧移、码率与编码器输出维度等细节，因此无法换算绝对帧数与跨模态维度差异。

以 1 秒 16 kHz 语音为例，流程可按序追踪为 1 输入波形转为 80 通道频谱，2 经保留层数的 Whisper 编码器得到声学表示序列，3 投影器把连续 5 帧拼接使长度缩为五分之一，再经隐藏维度为 2,048 的两层感知机、ReLU 非线性、0.1 随机失活与层归一化后映射到文本嵌入尺度，4 与提示词分词嵌入拼接后输入冻结大语言模型，5 以束宽为 2 的束搜索自回归生成转写。拼接点是唯一的降采样与汇合点，其余张量维度原文未披露，只能定性描述长度变化而不能给出具体形状。

### 自顶向下剪枝与注意力低秩适配的训练冻结边界

剪枝采用自顶向下策略，从完整层数每次移除顶部两层，直至剩余两层，对 Small、Medium 与 Large-v2 分别评估多种深度。每次更换深度后投影器都从零重新训练，剪枝后的编码器与大语言模型主体保持冻结，因此性能变化可归因于表示损失与投影器重对齐能力，而非编码器微调带来的混杂，这一设计使剪枝效应得以干净分离。投影器先把 5 个连续帧拼接使序列长度降为五分之一，再经两次线性变换与非线性激活完成映射，隐层维度为 2048，随机失活率为 0.1，最后以规范化对齐文本嵌入尺度，整体容量轻量却承担跨模态桥接职责。这一安排源于层级分析的启发，下层偏向低层声学特征而上层偏向抽象语言特征，大语言模型已具备词汇与语法处理能力，因而上层可能与语言模型功能重叠。3 种语言均被编码器与大语言模型覆盖，使语言差异不被覆盖缺失所混淆，全部深度与是否启用适配的组合均以词错误率为准比较。

#### 适配设置与训练配置

低秩适配仅作用于大语言模型全部注意力层的查询、键、值与输出投影矩阵，假设是借助词汇与语法先验弥补声学细节损失，而非直接恢复丢失的声学信息。为防小数据过拟合，丹麦语取秩为 8、缩放系数为 16，荷兰语与英语取秩为 16、缩放系数为 32，随机失活率均为 0.1，新增可训练参数分别约为 0.8M 与 1.5M，相对编码器移除的数十 M 参数属于轻量补偿。预备试验发现丹麦语若取高秩容易过拟合，因而采用降低秩的配置，这一差异使补偿强度与数据规模相匹配，形成少减多补的参数权衡。

训练统一使用 AdamW 优化器，学习率为 \(1\times10^{-4}\)，权重衰减为 0.01，梯度裁剪至 1.0，余弦学习率调度并在前 5% 步骤线性预热，以 bfloat16 混合精度在单块 48 GB 显存的 NVIDIA A6000 上完成。梯度仅流入投影器权重，启用适配时同时流入低秩矩阵，编码器与大语言模型基座权重不更新，确保不同剪枝深度之间的比较条件一致。全部剪枝深度与是否启用适配的组合累计超过 200 次独立训练，使退化曲线与恢复幅度的比较建立在相同起点之上。

#### 评估与推理设定

评估以 WER（词错误率）为主要指标，数值越低表示识别越准确，计算采用 jiwer 工具并对预测与参考做一致的文本规范化。推理为整句离线自回归生成，束宽为 2 的集束搜索，不涉及分块流式、前瞻窗口或缓存设计，原文未披露实时率、首音延迟、吞吐与显存占用等部署开销。丹麦语评估保留特殊字符，避免对正确转写施加额外惩罚，其余语言统一小写并去除标点。这一设定使结论仅适用于离线转写场景，若改为流式或低延迟场景，剪枝对边界帧与长时依赖的影响仍需重新测量，不能默认外推到实时系统。

音频统一重采样至 16 kHz 并转为 80 通道对数梅尔频谱图，遵循 Whisper 预处理流程，仅保留时长在 0.5 秒至 30 秒之间的语句。转写统一小写并去除标点，同时保留缩写中的撇号，丹麦语的特殊字符在规范化时予以保留。上述过滤与规范化在全部语言与全部深度上保持一致，使词错误率差异反映声学表示与语言补偿的变化，而非文本处理口径的变化。

#### 执行顺序与冻结边界

完整执行顺序为音频重采样与频谱提取、冻结编码器前向、投影器拼接降采样与映射、冻结大语言模型自回归生成、文本规范化后计算词错误率，剪枝仅改变第二步的可用层数，适配仅改变第四步的注意力权重。编码器侧选用多语言预训练的 Whisper 系列，大语言模型侧选用同样覆盖 3 种语言的 Qwen2.5-3B，使语言差异不被模型覆盖缺失所混淆。

3 种编码器完整层数分别为 12 层、24 层与 32 层，每次减少 2 层直至剩余 2 层，每一深度独立重训投影器的安排避免了跨深度复用权重带来的历史残留。拼接降采样将序列长度降为五分之一，隐层维度为 2048 的轻量映射承担跨模态桥接，确保退化曲线与恢复幅度均在相同起点上比较。

### 两层安全剪枝与剪枝加适配超越完整基线的证据

评测统一在各语言独立测试集上报告词错误率，数值越低越好，训练规模、参数量与是否使用低秩适配均在表中并列，以保证剪枝深度是唯一变量。公平性前提包括相同预处理与束搜索配置、每种深度独立重训投影器、丹麦语单独降低适配秩以抑制过拟合，且三语言均被编码器与大语言模型覆盖。下表先给出数据划分，作为理解资源差异的基础。

| Language | Split | Samples | Hours |
| --- | --- | --- | --- |
| Danish | Train | 3,592 | 4.18 |
|  | Dev | 2,511 | 3.21 |
|  | Test | 2,684 | 3.45 |
| Dutch | Train | 43,458 | 54.15 |
|  | Dev | 12,032 | 16.03 |
|  | Test | 12,033 | 16.38 |
| English | Train | 58,140 | 100.00 |
|  | Dev | 16,398 | 27.22 |
|  | Test | 16,391 | 27.02 |

表中丹麦语训练为 3,592 条约 4.18 小时，开发与测试各约 3.21 小时与 3.45 小时，荷兰语训练为 43,458 条约 54.15 小时，英语训练为 58,140 条约 100.00 小时，量级差异超过一个数量级。开发与测试时长同样悬殊，意味着低资源下投影器重对齐的样本极少，这为后续非单调波动埋下伏笔，也解释了为何丹麦语需更小的适配秩来控制过拟合。

在渐进剪枝中，移除顶部一至两层在三编码器与三语言上仅带来 2 至 4 个百分点的绝对词错误率上升，被作者称为安全剪枝区。超出该区间后荷兰语与英语平滑单调退化，而丹麦语出现突增与回落交替，且增大编码器容量并未消除不稳定。下表给出各规模下两层剪枝加适配的最优甜点，可直接与完整基线对比，是本文最强的定量证据。

| Encoder | Configuration | Params | Net ∆ | DA | NL | EN |
| --- | --- | --- | --- | --- | --- | --- |
| Small | 12L Baseline | 88.15M | – | 47.41 | 17.98 | 21.84 |
|  | 12L + LoRA | 89.65M | +1.5M | 41.94 | 15.40 | 17.87 |
|  | 10L + LoRA | 75.5M | –12.7M | 47.23 | 16.98 | 20.64 |
| Medium | 24L Baseline | 307.24M | – | 39.00 | 12.74 | 16.33 |
|  | 24L + LoRA | 309.0M | +1.8M | 38.88 | 10.92 | 14.13 |
|  | 22L + LoRA | 284.0M | –23.2M | 37.91 | 11.84 | 15.82 |
| Large-v2 | 32L Baseline | 636.83M | – | 36.09 | 12.05 | 13.36 |
|  | 32L + LoRA | 638.3M | +1.5M | 34.07 | 10.32 | 11.58 |
|  | 30L + LoRA | 599.0M | –37.8M | 35.81 | 11.44 | 12.16 |

甜点配置显示 Small 10 层加适配以 75.5M 参数实现丹麦语 47.23%、荷兰语 16.98% 与英语 20.64%，均低于 88.15M 的 12 层基线 47.41%、17.98% 与 21.84%。Medium 22 层加适配与 Large-v2 30 层加适配同样在三语言上全面低于各自完整基线。摘要概括降幅为 7% 至 14%，而按表中参数计算三档相对降幅约为 14.4%、7.6% 与 5.9%，大档低于摘要下限，原文如此报告，存在字面口径出入，原文未解释。

更深剪枝下适配仍能大幅挽回，例如 Large-v2 丹麦语 20 层基线词错误率高达 130.99%，加适配后降至 59.06%，但丹麦语深层补偿并不稳定。总体上适配对完整基线也有提升，说明它兼具通用对齐收益，而不仅是修补剪枝损伤，至于是通用增益还是针对性补偿，需要比较完整与剪枝两种设定下的下降幅度，这将在误差分析中量化。

### 从句子到词级错误看语言先验如何补偿声学损失

平均词错误率可能掩盖句子间的不均匀变化，为此作者对比完整基线、两层剪枝与两层剪枝加适配在每条测试语句上的升降，把剪枝后词错误率上升的句子记为退化。下表报告退化句子占比及其经适配后的回收情况，是判断增益是否均匀的关键。

| Encoder | Lang | % Utterances Degraded Base−2L | % Utterances Degraded +LoRA | % Utterances Degraded ∆Recov. |
| --- | --- | --- | --- | --- |
| Small | DA | 42.7 | 38.1 | −4.6 |
|  | NL | 33.3 | 23.5 | −9.8 |
|  | EN | 35.9 | 23.9 | −12.0 |
| Medium | DA | 41.9 | 35.7 | −6.2 |
|  | NL | 24.6 | 24.3 | −0.3 |
|  | EN | 25.3 | 22.7 | −2.6 |
| Large-v2 | DA | 33.6 | 25.8 | −7.8 |
|  | NL | 24.1 | 18.2 | −5.9 |
|  | EN | 22.8 | 15.4 | −7.4 |

仅剪枝使 22.8% 至 42.7% 的语句退化，丹麦语三档分别为 42.7%、41.9% 与 33.6%，系统性高于荷兰语与英语。加入适配后 9 种组合的退化率全部下降，回收幅度为 0.3 至 12.0 个百分点，但仍有 15.4% 至 38.1% 的语句差于完整基线，多数 61.9% 至 84.6% 持平或改善，说明平均增益由子集强恢复驱动而非均匀改善。为区分通用增益与针对性补偿，下表比较适配在完整与剪枝设定下的下降幅度。

| Encoder | Lang | WER Reduction Full+LoRA | WER Reduction Pruned+LoRA |
| --- | --- | --- | --- |
| Small | DA | 5.47 | 3.26 |
|  | NL | 2.58 | 4.18 |
|  | EN | 3.97 | 5.17 |
| Medium | DA | 0.12 | 1.82 |
|  | NL | 1.82 | 2.38 |
|  | EN | 2.20 | 2.07 |
| Large-v2 | DA | 2.02 | 2.55 |
|  | NL | 1.73 | 2.17 |
|  | EN | 1.78 | 2.71 |

9 种条件中有 7 种剪枝设定的下降幅度大于完整设定，例如 Small 荷兰语完整下降 2.58 个百分点而剪枝下降 4.18 个百分点，表明受损越大可恢复空间越大。两个例外是 Small 丹麦语 5.47 对 3.26 与 Medium 英语 2.20 对 2.07，前者受低资源不稳定影响，后者差异可忽略。这一对比支持适配不只是均匀增益，下一步需看清具体纠正了哪类词错误。

| Encoder | Lang | Sub | Ins | Del | Tot |
| --- | --- | --- | --- | --- | --- |
| Small | DA | –7.7 | +11.9 | –10.7 | –5.7 |
|  | NL | –17.5 | –37.4 | –15.3 | –20.4 |
|  | EN | –19.8 | –9.8 | –37.4 | –20.6 |
| Medium | DA | –4.9 | +18.4 | –22.9 | –4.4 |
|  | NL | –13.7 | –34.5 | –11.4 | –16.7 |
|  | EN | –10.6 | +0.5 | –30.3 | –11.6 |
| Large-v2 | DA | –8.6 | +10.8 | –11.7 | –6.6 |
|  | NL | –15.3 | –14.9 | –13.5 | –15.0 |
|  | EN | –17.4 | –7.1 | –35.6 | –18.2 |

词级分解显示荷兰语与英语总词错误数下降约 11.6% 至 20.6%，其中替换与删除一致减少，删除最多下降 37.4%，替换最多下降 19.8%。丹麦语总下降仅 4.4% 至 6.6%，而插入错误在三档分别增加 11.9%、18.4% 与 10.8%，Medium 英语插入也微增 0.5%。由于适配仅更新大语言模型注意力矩阵而编码器冻结，这种语言分化指向解码侧语言先验的强弱，而非声学信号本身，低资源下先验不足反而会引入多余词。

定性抽查进一步聚焦剪枝后词错误率大于 0.8 且适配后完全恢复为 0 的句子，发现 5 类可依靠语言知识修复的模式，包括循环重复幻觉、习语与固定搭配扭曲、命名实体碎片化、领域词被合理但错误的词替换，以及音近混淆。这些案例的共同点是声学残留已严重失真，但词汇与常识仍能唯一确定正确答案，与定量中替换与删除主导恢复的现象相互印证，共同指向解码侧补偿机制。

### 资源依赖与单架构验证带来的应用边界与复现前提

上述结论成立的前提是离线整句识别、相同预处理与每深度独立重训投影器，且适配秩按资源分别设置。若改为流式分块、低延迟或远场噪声场景，顶层缺失对长时依赖与边界帧的影响尚未测量。剪枝仅验证自顶向下移除，中间层或非连续层是否更冗余、编码器侧适配能否进一步压缩，均不在本次证据范围内，压缩上限仍未知。逐句分析进一步表明，两层剪枝后仍有 22.8% 至 42.7% 的话语相对完整模型退化，适配虽能挽回其中一部分，但仍有 15.4% 至 38.1% 残留退化，平均指标的改善来自强恢复话语盖过残留回退，而非所有话语均匀变好。

#### 模型与语言覆盖边界

验证仅覆盖 Whisper Small、Medium 与 Large-v2 3 种编码器容量，搭配 Qwen2.5-3B 与两层感知机投影器，未更换其他大语言模型、投影器结构或编码器家族。语言仅覆盖丹麦语、荷兰语与英语，低资源的不稳定究竟源于数据量还是预训练表示质量，原文明确指出需等量数据的对照实验才能定论，因此跨语系推广需谨慎，不能默认所有低资源语言行为一致。字级误差分解显示，荷兰语与英语的替换与删除误差在适配后一致下降，而丹麦语的插入误差在 3 种容量下均上升，说明大语言模型原有语言能力决定了补偿能否落实为有效纠错，而非单纯修复声学信号。

#### 复现与工程选型含义

复现需区分三件事，原文脚注给出代码仓库链接但本次未完成可达验证，权重是否提供下载原文未披露，系统是否可直接运行原文未披露。训练超参与硬件已披露较完整，包括学习率、优化器、混合精度与单卡型号，但帧移、编码器输出维度与大模型嵌入维度等张量细节缺失，复现时需以原文实现为准而非自行补齐，否则难以对齐投影器维度。工程选型上，若资源允许完整编码器且追求最低词错误率，可优先尝试两层剪枝加适配的甜点配置，它在三语言上均优于完整模型并减少编码器侧参数。若数据极少如丹麦语 4.18 小时量级，应预期波动与插入误差增加，并先小秩适配与充分验证。由于原文未提供试听页，无法对照听感，选型应以测试集词错误率与句子级退化率为准，而非仅看平均值，同时关注深剪枝下偶发的高词错误率尖峰。

#### 甜点配置的参数与效果定位

甜点配置的具体参数为小型机从 88.15M 降至 75.5M，中型机从 307.24M 降至 284.0M，大型机从 636.83M 降至 599.0M，对应净减少 12.7M、23.2M 与 37.8M，适配增量仅约 0.8M 至 1.5M。词错误率方面，3 种容量在 3 种语言上均达到或优于完整模型，表明轻量适配足以覆盖两层缺失，其中荷兰语与英语改善稳定，丹麦语小型机改善幅度较小。深剪枝下适配仍能大幅挽回，例如大型机丹麦语 20 层处从 130.99% 降至 59.06%，但低资源深层补偿并不稳定，选型时应以两层为默认上限并结合句子级验证，避免仅凭平均值外推。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 重采样，80 通道对数梅尔频谱图，仅保留 0.5 秒至 30 秒语句，帧长与帧移原文未披露，投影器拼接 5 帧使长度缩为五分之一，推理束宽为 2，实时率与延迟原文未披露
- **训练与评测数据**：Common Voice 22 丹麦语训练 3,592 条约 4.18 小时，荷兰语训练 43,458 条约 54.15 小时，英语训练 58,140 条约 100.00 小时，转写统一小写去标点并保留丹麦语特殊字符
- **算力与训练耗时**：单块 48 GB 显存 NVIDIA A6000，以 bfloat16 混合精度完成累计超过 200 次独立训练，推理硬件原文未单独披露
- **核心超参数与配置**：AdamW 优化器学习率 1×10−4 权重衰减 0.01 梯度裁剪 1.0，余弦调度前 5% 线性预热，投影器隐藏维度 2,048 随机失活率 0.1，低秩适配丹麦语秩 8 系数 16 荷兰语英语秩 16 系数 32
- **推理速度与部署开销**：束宽为 2 的离线自回归束搜索生成，甜点配置相对基线减少约 12.7M 至 37.8M 参数，实时率延迟吞吐与显存占用原文未披露
- **开源产物与协议状态**：原文脚注给出代码仓库链接但本次未完成可达验证，权重下载数据发布与可直接运行状态原文未披露
- **附录与补充材料要点**：原文未设独立附录，局限与未来工作在正文末尾说明，包括单架构验证自顶向下剪枝与需等量数据对照实验

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.2/10 | 技术严谨 6.6/10 | 实验充分 7.3/10 | 清晰度 5.2/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.20`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.20/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.20.pdf)
- DOI：`10.18653/v1/2026.speakable-1.20`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：两层剪枝加LoRA在Small、Medium、Large-v2三规模三语WER上均低于完整未剪枝基线并减少约12.7M至37.8M参数，覆盖200余次逐层深度扫描。

- 核心优势：保留完整基线、完整加LoRA与剪枝加LoRA配对对照，并附话语级退化占比与替换插入删除三类词错误分析及定性案例归纳。

- 核心优势：明确冻结Whisper编码器与Qwen2.5-3B、仅重训拼接映射器与注意力矩阵LoRA的训练边界，并给出映射器与LoRA秩等可核对配置。

- 主要短板：摘要称减参7-14%但Large-v2明细为5.9%，表5两行与表2差值呈转置且表7总计与分项方向矛盾，原文未解释。

- 主要短板：丹麦语LoRA用秩8而荷兰语英语用秩16，秩选择与资源水平绑定使资源调节效应的比较存在混杂。

- 主要短板：效率代价仅以参数量衡量，未实测延迟吞吐或RTF，深层剪枝如130.99降至59.06仍远差于基线，不支持深剪可用。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
