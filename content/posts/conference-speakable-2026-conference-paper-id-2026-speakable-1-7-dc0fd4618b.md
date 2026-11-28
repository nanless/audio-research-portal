---
title: "Scalable Expansion of Multilingual Speech LLMs for ASR: A Continual Learning Approach"
date: 2026-11-27
draft: false
description: "针对直接微调多语言语音大模型学新语言会冲掉旧语言的问题，论文用冻结编码器与大模型、只训练线性投影器加回放旧样本的任务递增学习，在乌克兰语等四语言序列上证明每种语言 5 个随机回放可稳住首轮、500 个或等预算脆弱度采样可将终点全局平均控制在 26.72% 至 29.46% 而 25 个样本会漂移至 56.06%，代价是新旧表示长期仍缓慢退化且分层并非每种语言都占优。"
tags: ["持续学习", "低资源", "多语言", "语音识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多语言语音大模型如何持续学会新语言而不忘记旧语言"
paper_digest_original_title: "Scalable Expansion of Multilingual Speech LLMs for ASR: A Continual Learning Approach"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.7"
paper_digest_workbench_source_sha256: "5327b3e3d0d26cf5e590298cbcc8f8be5992d0dedaee0325441e78cb7a0c3cf4"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.7/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.7.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对直接微调多语言语音大模型学新语言会冲掉旧语言的问题，论文用冻结编码器与大模型、只训练线性投影器加回放旧样本的任务递增学习，在乌克兰语等四语言序列上证明每种语言 5 个随机回放可稳住首轮、500 个或等预算脆弱度采样可将终点全局平均控制在 26.72% 至 29.46% 而 25 个样本会漂移至 56.06%，代价是新旧表示长期仍缓慢退化且分层并非每种语言都占优。"
paper_digest_reader_sections: [{"heading":"多语言语音大模型扩展时为何学新语言就会忘旧语言","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结编码器与大模型，只训练线性映射层的语音识别流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"按任务递进的数据重放流程与脆弱度分层采样","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"四轮新语言递进中的平均词错率走势与缓冲规模效应","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"每种语言留多少条回放才够用，随机与顺序取样差在哪里","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"可复现的扩展路线、适用边界与未验证的部署条件","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy"],"name":"Lorenzo Concina"},{"affiliations":["Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy"],"name":"Marco Matassoni"},{"affiliations":["Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy"],"name":"Alessio Brutti"}]
paper_digest_abstract_sha256: "2f24703f5e52f3599e52d9d20a18ea1b8f97f96cc2decd885ddb7c8d3b564b2e"
paper_digest_sidecars: {"citation.bib":{"sha256":"4b69fc428cfd9127ccbd1bca1fe1a7c817b1811bb8b151c0868d2293d0413b28","url":"/audio-research-portal/client/papers/2026-11-27/conference-dc0fd4618b50c89a60822abe/citation.bib"},"citation.json":{"sha256":"5e024f0da1808d600c3ae316260db5cf88023524a22abcb2c5511bc3fe7566b7","url":"/audio-research-portal/client/papers/2026-11-27/conference-dc0fd4618b50c89a60822abe/citation.json"},"citation.ris":{"sha256":"d54797ff4c6a3bb6db827f8c130a733688a197b907c86c442725ce2481702c24","url":"/audio-research-portal/client/papers/2026-11-27/conference-dc0fd4618b50c89a60822abe/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2159e43f72f273d3be2a9fd4374ed9a13c017fe271af40bf59f359d33839915f","url":"/audio-research-portal/client/papers/2026-11-27/conference-dc0fd4618b50c89a60822abe/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.7"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.7"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.7"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.7/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.7.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "faab2287bcac1970825217cebf230fb9adec9ef4b63002a3853184afaf175a3d"
paper_digest_api_reader_plan_sha256: "c4a41cea6e937906e1b162aac082f60c905cffe11dfce49c38bf00b669c8429e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "de8258938d8243035e16a0c3814f33acb975490565f0dd5089e464079f5fac62"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fd0a90bbb02ad2edd91ab0bb796d863336e35d771266076e5b17457e54f66e51"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "aab37739f62f032105bec6cf03e1a04b46c9b2b6f8b5c1bfa0d960b4afc4eef2"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "da36f87f822402bb8ca950a8e9b3fb57a8b343f73fd68237492dfb85f667a437"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "持续学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多语言语音大模型如何持续学会新语言而不忘记旧语言

> 英文题目：*Scalable Expansion of Multilingual Speech LLMs for ASR: A Continual Learning Approach*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.7`
> DOI：`10.18653/v1/2026.speakable-1.7`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.7/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.7.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[持续学习](/audio-research-portal/papers/?concept=method.continual)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)；[多语言](/audio-research-portal/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 7.2/10 | 清晰度 5.5/10 | 影响力 6.7/10 | 开源 0.0/10 | 可复现 3.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Lorenzo Concina：Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy
- Marco Matassoni：Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy
- Alessio Brutti：Center for Augmented Intelligence, Fondazione Bruno Kessler, Trento, Italy

## 📌 核心摘要

**问题与瓶颈：** 多语言语音大语言模型需将语音编码器输出映射到大语言模型词嵌入空间，以直接完成自动语音识别任务。现有 MEUSLI 类方案冻结编码器与大语言模型主体，仅训练轻量投影器，虽高效但原生仅覆盖 28 种欧洲语言。当用新语言数据直接微调该共享投影器时，新语言分布覆盖原有多语言对齐，造成原有语言能力近乎崩溃并出现新语言字符幻觉。在低资源与未见语言上可用监督数据极少，如何以极小回放代价持续扩展而不遗忘成为瓶颈。

**核心思路与方法架构：** 与最接近的直接微调基线相比，本文增量是将扩展建模为任务增量学习并引入数据回放约束，保留冻结编码器与大语言模型、仅更新投影器与低秩适配的总体结构。输入语音经冻结的 Whisper-large-v3-turbo 编码器变为高维声学表示，再经线性投影器映射为与 EuroLLM 1.7B-Instruct 词嵌入同空间的伪词元，送入冻结大语言模型生成转写，训练时仅调整约 17.31M 个投影器参数与 1.38M 个低秩适配参数。新语言到来时，训练数据由新语言全量数据与每个旧语言少量回放样本混合组成，随机采样覆盖更广声学分布以锚定共享嵌入空间。在此基础上提出的脆弱性采样将旧语言按基线词错率分为稳健、中间与脆弱三档，分别分配 250 条、500 条与 750 条样本，总量保持 14000 条不变以向脆弱语言倾斜。脆弱分档依据基线表现静态设定，原文明确列为未来工作，未做训练中动态更新。

**关键实验与核心代价：** 在 Common Voice 17 乌克兰语 30 小时上，多语言初始化微调的词错率（Word Error Rate, WER）（越低越好 ↓）为 16.3%，低于同管线单语训练的 20.4%。在仅 46 分钟的阿尔巴尼亚语上，前者为 75.6%，远低于单语从零训练未能收敛的 389%。若无回放直接微调乌克兰语，原有语言在 Fleurs 上崩溃，例如西班牙语从 4.09% 恶化至 90.34%，葡萄牙语从 4.86% 恶化至 109.6%，波兰语从 8.68% 恶化至 100.6%，并伴随乌克兰字符幻觉。加入每语言 1000 条回放后，新乌克兰语为 17.56%，平均词错率（Average WER, AWER）（越低越好 ↓）为 10.65%，低于基线的 18.99%。在乌克兰语 Common Voice 与日语、泰语、越南语 MLC-SLM 挑战训练数据组成的四步序列中，500 条缓冲最终平均词错率为 29.46%，25 条缓冲按原表为 56.06%，而等总量脆弱性采样为 26.72%，并将脆弱的爱沙尼亚语从 42.50% 改善至 39.54%，稳健的西班牙语以一半数据保持在 9.44%，与 9.32% 相近。代价是新语言自身随序列漂移，乌克兰语从 17.10% 升至 26.57%，日语从 27.28% 升至 40.45%，泰语在 25 条设置下出现 278.0% 等极端退化。原文对 25 条最终值另有一处写为 51.67%，对泰语阶段另有一处写为 65.98%，与原表 56.06% 与 64.42% 存在字面算术出入，原文未解释，此处采用原表数值。

**适用边界与深读导览：** 结论仅在 28 种欧洲语言为起点、语序为乌克兰语、日语、泰语与越南语及上述回放配比下成立，未验证逆序、其他语系、大域偏移与部署时延。脆弱分档依赖基线词错率静态划分，阈值自动化与语言顺序影响仍列为未来工作。欲深究任务增量形式化、平均词错率定义与缓冲敏感性及序列权衡，可查阅下文方法概述与实验结果中的公式与对照表。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/X-LANCE/SLAM-LLM> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多语言语音大模型扩展时为何学新语言就会忘旧语言

语音大模型把预训练语音编码器与大语言模型直接相连，试图跳过先转写再理解的级联环节。级联结构会把转写错误传给后级文本生成，切断音高与语调等副语言信息，还会累积多级延迟。端到端结构让语言模型直接读取语音映射后的嵌入，保留更多声学细节。现有先进系统仍偏向英语等高资源语言，对发音与结构差异大的低资源语言表现不稳，这是本文的出发点。

本文聚焦自动语音识别中的转写任务，输入为原始语音波形，输出为对应文字序列。评价采用 WER （词错率），数值越低代表错词越少。跨多语言稳定性采用 AWER （平均词错率），即学完第 i 个任务后对前 i 个任务的 WER 求算术平均。基线系统为 MEUSLI （多语言欧洲语音线性映射器），它连接冻结的 Whisper-large-v3-turbo 编码器与 EuroLLM 1.7B-Instruct 解码器，已支持 28 种欧洲语言。

把该基线扩展到新语言有两条老路，一是从零重训，数据与算力代价过高，二是直接在新语言上微调投影器，虽能快速学会新语言，却会冲掉原有 28 种语言的共享映射。论文用乌克兰语验证了第二条路的代价，在 30 小时 Common Voice 17 数据上微调后乌克兰语达到 16.3%，优于单语从零训练的 20.4%。但西班牙语等原有语言在 FLEURS 与 Common Voice 17 评测上骤升至 90.34% 等量级，输出混入乌克兰字符幻觉，几乎丧失原有转写能力。

阿尔巴尼亚语实验把矛盾推向极端，仅用 46 分钟数据微调即可达到 75.6%，而单语从零训练完全不收敛至 389%。高 WER 超过 100% 是因为插入错误可以无限累加，这恰好说明多语言预训练提供了更好的起点。核心问题于是变为如何以极小回放预算锚住旧映射，同时识别哪些语言更脆弱。论文把扩展建模为任务递增学习，用重放旧语言样本做正则，并在四语言长序列上比较均匀缓冲与按脆弱度分配的效果。

### 冻结编码器与大模型，只训练线性映射层的语音识别流程

要理解后续遗忘与重放，先要看清训练时谁冻结谁更新，以及语音与文本两路在何处汇合。下图把左侧语音通路与右侧文本通路分开绘制，雪花与火焰标记区分了冻结与可训练部件，沿箭头自下而上阅读即可还原一次前向过程，重点观察投影器前后的嵌入颜色与形状变化。

[![原论文 Figure 1：The proposed Speech LLM architecture used in MEUSLI (Multilingual EU Speech LInear projector)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-1.png)

*论文图 1：语音与文本双通路架构，冻结编码器与大模型，仅训练投影器与低秩适配（原论文 Figure 1）。*

像素显示底部有两个输入，左侧绿色为语音 （X_S），右侧蓝色为文本提示与转写 （X_P，X_T）。左路自下而上为语音编码器、绿色语音嵌入 （H_S）、下采样器、投影器、蓝色对齐语音嵌入 （E_S）。语音编码器与顶部大语言模型均标有雪花，表示参数冻结。投影器与右侧 LoRA （低秩适配）标有火焰，表示可训练。右路分词器输出文本嵌入 （E_P，E_T），与左路语音嵌入一同送入顶部大模型。

#### 冻结与可训练的分界

与最近既有做法相比，本文没有改动编码器与大模型主体，而是沿用 MEUSLI 线性投影器做法。实质增量在学习范式而非结构，保留冻结 Whisper-large-v3-turbo 与 EuroLLM 1.7B-Instruct，只更新约 17.31M 参数的线性投影器与约 1.38M 参数的 LoRA （低秩适配）。基线初始训练用了 7,622 小时开源语音，覆盖 28 种欧洲语言，来源为 Common Voice 17、FLEURS 与 VoxPopuli。原文未披露采样率、帧长、步长、码率与嵌入维度，因此无法给出 1 秒样本的精确张量形状，只能定性追踪通路。

#### 定性前向通路

定性来看，一段语音先被编码器变为高维声学表示，再经下采样压缩帧率，再经线性投影器映射到与语言模型词嵌入相同的空间，得到可被当作伪词元读取的语音嵌入。文本提示经分词器变为文本嵌入后与语音嵌入拼接，共同驱动冻结大模型自回归生成转写。训练梯度只流经投影器与 LoRA 分支，不更新编码器与大模型主体。原文未披露分块流式、前瞻窗口、采样步数、延迟、RTF （实时率）与显存开销，因此部署代价无法从本文直接推断。

这种极简设计是遗忘的根源，也是重放有效的原因。线性映射容量小，所有语言共享同一矩阵，不同语言的声学分布会在同一空间中相互挤压。单语言微调会把矩阵拉向新语言方向，旧语言的对齐随即漂移。回放旧语言样本相当于在梯度层面施加锚定，迫使矩阵同时兼顾新旧分布，这为后文仅用几个样本即可稳住全局埋下伏笔。

### 按任务递进的数据重放流程与脆弱度分层采样

多轮扩展不是一次混训，而是随时间逐个加入新语言，每轮都要同时看到新语言全量与旧语言少量回放。下图左侧列出 28 种基线语言方格，中间给出模型与重放模块，右上给出时间轴，右侧给出评测口径，顺着时间箭头阅读即可理解增量循环，重点看回放数据从何处抽取又在何处混合。

[![原论文 Figure 3：The proposed Continual Learning framework utilizing Data Rehearsal to mitigate catastrophic…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-3.png)

*论文图 3：任务递增重放流程，28 种基线语言随时间逐个加入四种新语言（原论文 Figure 3）。*

像素左侧为 28 格基线语言矩阵，包含英语、法语、德语、意大利语、西班牙语、荷兰语、波兰语、匈牙利语、捷克语、罗马尼亚语等，每格同时标注代码与全称。中间浅橙色块为语音语言模型主体，箭头指向浅蓝色重放与数据模块，表示每轮训练数据由重放旧样本与新语言样本混合构成。右上时间轴依次为乌克兰语 （UK）、日语 （JA）、泰语 （TH）、越南语 （VI）。最右侧评测框用双向箭头标出每种语言 WER 与全局 AWER 2 级指标。

#### 任务递增与评测口径

论文把扩展形式化为任务递增学习，T1 为乌克兰语，T2 为日语，依此类推。目标是在最小化新任务误差的同时，约束所有旧任务的退化上界。全局稳定性用 AWER （平均词错率）衡量，即学完第 i 个任务后对前 i 个任务的 WER 求平均。该平均对脆弱语言的飙升非常敏感，单个语言超过 100% 即可拉高整体，这解释了后文为何同时关注平均值与分语言明细。

#### 脆弱度分层与数据域

脆弱度采样保持总预算不变，把均匀分配改为按基线稳健性分层。稳健层 10 种语言每种 250 个样本，共 2,500 个。中间层 8 种语言每种 500 个样本，共 4,000 个。脆弱层 10 种语言每种 750 个样本，共 7,500 个。三层合计 14,000 个，与 28 种语言各 500 个的均匀方案总量相同。分层依据来自基线 WER，高资源且稳定的西班牙语、德语、法语等进入稳健层，爱沙尼亚语、立陶宛语、希腊语等进入脆弱层，乌克兰语等新并入语言按中间层处理。

多轮实验从乌克兰语检查点起步，乌克兰语仍用 Common Voice 数据，日语、泰语、越南语改用 INTERSPEECH 2025 MLC-SLM 挑战训练集，以引入域差异与书写系统差异。该设计刻意加大难度，检验在声学与文字均远离欧洲基线时，重放能否长期锚住表示。比较对象为每种语言 500 个样本的保守方案、每种语言 25 个样本的激进方案，以及总预算相同的脆弱度采样方案。

### 四轮新语言递进中的平均词错率走势与缓冲规模效应

评测围绕转写准确率展开，主指标为 WER （词错率），数值越低越好，全局指标为 AWER （平均词错率），即所有已激活语言的算术平均。基线初始覆盖 28 种欧洲语言，新语言按乌克兰语、日语、泰语、越南语顺序逐轮加入。乌克兰语自举用 Common Voice 17，后三者用 MLC-SLM 挑战数据，存在域差异。原文未披露是否为因果流式或离线解码，也未报告方差、置信区间与听测规模。结果全部来自自动转写得分，没有 MOS （平均意见分）等人工听测，也没有 UTMOS （神经网络平均意见分预测）等神经代理指标，因此结论只在 WER 口径下成立。

#### 精简子集的起点对照

下表为原文完整 Table 4 的精简子集，只保留基线、加乌克兰语阶段与加日语早期的部分行列，用于对照均匀缓冲与脆弱度采样的起点差异。完整表格包含泰语与越南语后期的全部行列，本精简表未列出，后文涉及的后期数值均指原文完整 Table 4 （本精简表未列出）。列选西班牙语、英语、意大利语等稳健语言与芬兰语、乌克兰语、日语等新增或脆弱代表，以及全局平均值。

| Loop Stage | Buffer | ES | EN | IT | FI | UK | JA | Avg WER |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Meusli (Base) | – | 4.09 | 6.34 | 3.32 | 15.29 | – | – | 12.23 |
| + Ukrainian | 25 | 4.95 | 8.97 | 6.67 | 23.35 | 17.16 | – | 17.79 |
|  | 500 | 4.56 | 7.20 | 6.64 | 19.97 | 17.10 | – | 15.74 |
|  | FBS | 4.78 | 7.18 | 6.80 | 18.30 | 16.62 | – | 15.30 |
| + Japanese | 25 | 15 91 | 15 67 | 11 53 | 36 92 | 28 48 | 29 90 | 29 26 |

从可见子集看，加入乌克兰语后全局平均从 12.23% 升至 17.79% （25 个样本）、15.74% （500 个样本）与 15.30% （脆弱度采样）。稳健语言中西班牙语在 500 个样本下为 4.56%，略好于脆弱度采样的 4.78% 与 25 个样本的 4.95%。芬兰语则相反，脆弱度采样为 18.30%，好于 500 个样本的 19.97%。新语言乌克兰语自身在脆弱度采样下为 16.62%，略好于均匀 500 个样本的 17.10%。可见在首轮尚无长程漂移时，差异主要来自采样覆盖，而非总量压制，代价是所有方案都高于基线，说明新语言必然挤占共享映射容量。

#### 长序列的全局漂移

单轮起点稳定不代表多轮长期稳定，关键要看 4 轮递进中全局平均如何随新语言累积而漂移。下图用 3 条曲线对比 25 个样本、500 个样本与脆弱度采样随学习阶段的变化，横轴为基线、乌克兰语、日语、泰语、越南语，纵轴为平均词错率，重点观察泰语后的分叉与终点标注。

[![原论文 Figure 4：Evolution of Average WER across sequential learning loops (UK →JA →TH →VI).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-4.png)

*论文图 4：四轮递进中三种缓冲策略的全局平均词错率演变与终点对比（原论文 Figure 4）。*

像素显示三线起点均在 12% 附近，加泰语后红色 25 个样本线陡增至 60% 以上，最终为 56.06%，蓝色 500 个样本线最终为 29.46%，绿色脆弱度采样线最终为 26.72%。正文与图注另有 51.67% 与泰语阶段 65.98% 的写法，与像素及原文完整 Table 4 （本精简表未列出）的 64.42% 与 56.06% 不一致，原文如此报告，存在字面算术出入，原文未解释。正文写从 15.74% 基线升至 29.46%，而基线应为 12.23%，原文如此报告，存在字面算术出入，原文未解释。脆弱度采样并非全优，原文完整 Table 4 （本精简表未列出）显示德语与日语终点差于均匀方案，说明分层以部分回退换取全局均衡。

### 每种语言留多少条回放才够用，随机与顺序取样差在哪里

在进入 4 轮长序列之前，论文先用单轮乌克兰语实验摸清回放预算的下限，即每种旧语言最少保留多少条才能不崩。下图横轴为每种语言回放条数，纵轴为全局平均词错率，包含随机采样曲线、基线虚线与顺序取样标记，重点看 5 条附近的平台与 1 条处的陡增。

[![原论文 Figure 2：Ablation study of rehearsal buffer size on the global Average WER.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/67478899543f/figure-2.png)

*论文图 2：单轮乌克兰语实验中全局平均词错率随每种语言回放条数的变化（原论文 Figure 2）。*

像素显示横轴为 1、5、25、50、100、500、1,000 个样本，纵轴为平均 WER （词错率）。灰色虚线为无乌克兰语的基线，约在 17% 高度。蓝色圆点随机重放线在 1 个样本处高达约 25%，降至 5 个样本时回到约 14.5%，之后在 25 至 500 区间维持 12% 至 15% 的平台，500 个样本处最低约 12.5%。绿色叉号顺序取首 1,000 条的位置略高于随机 500 个样本，说明同等数量下随机覆盖更有效。顶部残留的英文正文描述了爱沙尼亚语等幻觉现象，属于页面截取附带文字，不影响曲线读取。

首轮乌克兰语基线用每种语言前 1,000 条顺序取样，新语言达到 17.56%，抽查语言的平均为 10.65%，远好于不做重放时的崩溃。消融显示 1,000 与 500 条时随机采样优于顺序取前 N 条，因为随机能覆盖不同说话人与声学条件，防止在小缓冲上过拟合到固定开头。5 个样本每种语言已能稳住首轮旧任务，说明共享映射只需少量锚点即可维持方向，这是资源效率的关键证据。

降至每种语言 1 个样本时，波兰语、捷克语、匈牙利语与爱沙尼亚语等先出现遗忘，旧语言音频被转写出乌克兰词元，表明单点无法代表该语言分布。5 个样本是首轮经验阈值，但该阈值不适用于多轮累积，后文 25 个样本在 4 轮后仍漂移，说明单轮平台不能外推为长期稳定性保证。缺失的消融包括不同随机种子方差、不同新语言顺序，以及除乌克兰语外其他首轮语言的阈值是否同为 5 条。

### 可复现的扩展路线、适用边界与未验证的部署条件

结论成立的前提是任务限定为转写准确率，且只更新线性投影器与 LoRA （低秩适配），编码器与大模型主体全程冻结。新语言顺序固定为乌克兰语、日语、泰语、越南语，基线为 28 种欧洲语言，语言多样性与顺序影响尚未验证。所有比较都在 WER （词错率）口径下进行，没有人工听测，也没有跨域口音与噪声条件的系统评测，因此不能直接推广到对话理解或嘈杂部署环境。

复现需区分三件事，代码、权重与系统是否可直接运行。论文提及第三方 SLAM-LLM 代码库链接本次可达，以及 MEUSLI 投影器地址，但未明确给出本研究 4 轮重放的完整训练脚本、随机采样种子与数据划分脚本。优化器、学习率、批量大小、训练轮数等超参原文未披露，硬件型号与耗时也未披露。附录无额外证明或超参表，关键数字需以正文表格与曲线为准，且注意前文指出的字面出入。

工程上若只能做单轮扩展，可按每种旧语言保留 5 至 25 个随机样本起步，优先保证随机覆盖而非顺序截取。若要连续加入多种远亲语言，应按每种 500 个样本规划总预算，或在同等 14,000 个总量下对脆弱语言倾斜至 750 个，对稳健语言减至 250 个。西班牙语在减半后仍稳定在 9.44% 附近，而爱沙尼亚语从 42.50% 收窄至 39.54%，说明分层能提升公平性，但德语与日语等会出现小幅回退，上线前需按自身语言组合复测。

未来工作指向动态灵敏度分析，在训练过程中自适应识别脆弱表示并实时调整配额，而非依赖事后基线 WER 分层。另一方向是系统检验语言多样性与加入顺序对终点的影响，例如先加日语后加乌克兰语是否改变漂移路径。原文未提供可试听演示页，复现时应以 WER 明细与 AWER 曲线为对照，不宜凭主观听感推断跨语言公平性。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率、前瞻延迟与嵌入维度，仅说明使用冻结 Whisper-large-v3-turbo 编码器与 EuroLLM 1.7B-Instruct 解码器，下采样后经线性投影器映射
- **训练与评测数据**：基线用 7,622 小时开源语音覆盖 28 种欧洲语言，来源为 Common Voice 17、FLEURS 与 VoxPopuli，乌克兰语用 30 小时 Common Voice 17，阿尔巴尼亚语用 46 分钟 Common Voice，日语、泰语与越南语用 INTERSPEECH 2025 MLC-SLM 挑战训练集
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时，也未披露推理硬件与显存占用
- **核心超参数与配置**：投影器约 17.31M 参数，LoRA 约 1.38M 参数，重放预算覆盖每种语言 1、5、25、50、100、500 与 1,000 个样本，脆弱度采样为 250、500 与 750 分层共 14,000 个，优化器、学习率与批量大小原文未披露
- **推理速度与部署开销**：原文未披露 RTF （实时率）、延迟、吞吐与显存开销，解码为自回归生成但未说明分块流式与采样步数
- **开源产物与协议状态**：论文提及第三方 SLAM-LLM 代码库链接与 MEUSLI 投影器地址，未明确给出本研究完整训练与评测脚本、随机种子与权重是否可直接运行
- **附录与补充材料要点**：无独立附录章节，关键细节在正文与参考文献中，失效案例包括单样本重放的脆弱语言幻觉与 25 个样本四轮后的全局漂移

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.2/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 7.2/10 | 清晰度 5.5/10 | 影响力 6.7/10 | 开源 0.0/10 | 可复现 3.2/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.7`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.7/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.7.pdf)
- DOI：`10.18653/v1/2026.speakable-1.7`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：30小时乌克兰语多语言微调WER16.3%优于单语20.4%，46分钟阿尔巴尼亚语从389%降至75.6%，极小数据自举证据扎实可核对。

- 核心优势：等总量脆弱性采样最终平均WER26.72%优于均匀500条29.46%，泰语从91.62%降至39.44%且西班牙语减半数据保持9.44%，对照直接。

- 主要短板：正文中25条最终平均51.67%与原表56.06%、泰语阶段65.98%与原表64.42%存在字面算术出入且原文未解释。

- 主要短板：缺统计显著性与除均匀回放外的持续学习强基线，随机采样优势与缓冲消融均未给出具体数值曲线且未控制域差异。

- 主要短板：损失、学习率、批量、优化器、步数、硬件时长与解码配置均未说明，LoRA秩与插入位置亦缺失，复现信息严重不足。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
