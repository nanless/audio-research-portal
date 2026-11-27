---
title: "Gold-Preserving Synthetic Augmentation for Verbatim Swedish Automatic Speech Recognition"
date: 2026-11-27
draft: false
description: "针对仅 1.02 小时瑞典语逐字金标导致大模型抑制迟疑的问题，论文以低秩适配器微调并对比伪标注、无引导合成与金标保留合成，发现微调降低迟疑片段 WER（词错误率）约 32% 且区间与基线分离，而三种扩增均值不可区分且 2.35:1 放大会退化，代价是仅 6 个测试文件与 5 个种子下的高方差与无人工听测。"
tags: ["数据增强", "LoRA", "低资源", "语音识别"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "金标保留合成如何为瑞典语逐字识别补足迟疑分布"
paper_digest_original_title: "Gold-Preserving Synthetic Augmentation for Verbatim Swedish Automatic Speech Recognition"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.4"
paper_digest_workbench_source_sha256: "57ba6bbbb16cf17b7afb09aeb9a0928690b7831b3634146359ed2b65a35ffed9"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.4/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.4.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对仅 1.02 小时瑞典语逐字金标导致大模型抑制迟疑的问题，论文以低秩适配器微调并对比伪标注、无引导合成与金标保留合成，发现微调降低迟疑片段 WER（词错误率）约 32% 且区间与基线分离，而三种扩增均值不可区分且 2.35:1 放大会退化，代价是仅 6 个测试文件与 5 个种子下的高方差与无人工听测。"
paper_digest_reader_sections: [{"heading":"逐字转写为何需要保留迟疑而通用大模型倾向删除它们","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"七种配置共享同一适配底座而仅扩增数据不同","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"金标保留流程以画像注入合成对齐过滤实现可审计分布","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"微调大幅降低两类词错误率而六种微调配置均值难分高下","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"配对差值分布审计与合成比例放大的方向性退化","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"小样本不确定性复现核对与无额外音频时的选型规则","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Parma, Italy"],"name":"Giuseppe Chiriatti"},{"affiliations":["Språkbanken, University of Gothenburg, Sweden"],"name":"Dimitrios Kokkinakis"},{"affiliations":["University of Parma, Italy"],"name":"Flavio Bertini"},{"affiliations":["Språkbanken, University of Gothenburg, Sweden"],"name":"Ricardo Muñoz Sánchez"},{"affiliations":["Språkbanken, University of Gothenburg, Sweden"],"name":"Herbert Lange"}]
paper_digest_abstract_sha256: "1c45346f5193c19efad6e21b8a3ac8118c226c4fe1c01cff6a1bd5f948840655"
paper_digest_sidecars: {"citation.bib":{"sha256":"5c9676d65b73e8a6f631b72f59e75f57437bcd4861e3c9884623021008c6ef8e","url":"/audio-research-portal/client/papers/2026-11-27/conference-cf43f70f0a720fa82e70a042/citation.bib"},"citation.json":{"sha256":"94ef814bef55f362388870daf94f5529d333bcfee4035f1b324c33eed5fc9620","url":"/audio-research-portal/client/papers/2026-11-27/conference-cf43f70f0a720fa82e70a042/citation.json"},"citation.ris":{"sha256":"92a557d2271bc86a410ea3d654aec406dbc75efcfa13b19afe62db1e1e814e59","url":"/audio-research-portal/client/papers/2026-11-27/conference-cf43f70f0a720fa82e70a042/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"239ae0d973e7fca4a5784a723246672903f6a164fb3b5dccf574bcc87f2d62ce","url":"/audio-research-portal/client/papers/2026-11-27/conference-cf43f70f0a720fa82e70a042/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.4"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.4"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.4"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.4/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.4.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "58bf26722f232da7027b89148d7c501bfa61ff26e13cd575a91644ff3f0bab1f"
paper_digest_api_reader_plan_sha256: "608b996793fb5c7a9f56ad7feba342367c3cc256b38617f0312133602cb47577"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "30b552a7e875e27fe3675cb1d5863401f40e680531519c52f3d275f28b61517d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f6c967986bb87cf6f6f2e182458a7ba057ed26c2951a2530b0a354093a37f52a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bc2353218a2652fdfefef2d14caaa75acf21785f206a0bf09fb9224a2b08991b"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ac37be86f5941e7f41033566c2a476c0f7633bddc22a31ec0b5db9219f269d67"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "数据增强"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 金标保留合成如何为瑞典语逐字识别补足迟疑分布

> 英文题目：*Gold-Preserving Synthetic Augmentation for Verbatim Swedish Automatic Speech Recognition*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.4`
> DOI：`10.18653/v1/2026.salma-1.4`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.4/) · [官方 PDF](https://aclanthology.org/2026.salma-1.4.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.6/10 | 技术严谨 7.5/10 | 实验充分 5.9/10 | 清晰度 6.7/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 4.5/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Giuseppe Chiriatti：University of Parma, Italy
- Dimitrios Kokkinakis：Språkbanken, University of Gothenburg, Sweden
- Flavio Bertini：University of Parma, Italy
- Ricardo Muñoz Sánchez：Språkbanken, University of Gothenburg, Sweden
- Herbert Lange：Språkbanken, University of Gothenburg, Sweden

## 📌 核心摘要

**问题与瓶颈：** 逐字转写须保留迟疑、重复与互动颗粒以支撑言语认知评估，而主流自动语音识别为可读性将其删去。瑞典语迟疑 inventory 含填充停顿、话语标记、语气小品词与应答词并具位置约束，KB-Whisper-large 继承的流畅语言模型偏好在解码时抑制这类词元。可用金标仅 30 个单声道 16 kHz 老年自发叙事录音共 1.02 小时，经 0.5-25 s 切分得 1248 个片段平均 2.94 s，仍抑制目标现象的教师模型会产出同样消过毒的伪标签，使偏差自我复制。

**核心思路与方法架构：** 核心直觉是以金标逐词元密度与词性上下文为目标分布，按构造保证合成集分布可先验审计。瑞典语指令微调语言模型生成自发叙事初稿，规划器按 V2 回视等位置约束选位、生成器按局部词性选形并设全局比例下限保障稀有词。文本经话音设计模式以 4 个轮换说话人画像合成，不自然迟疑词映射为非言语符号，再经 WhisperX 对齐与零样本基线转写高于 25 % 词错率（WER，word error rate）隔离过滤，得 647 个片段 0.59 小时合成集。共享适配冻结基座主体，仅更新 4 个注意力投影约 31.4M 参数占模型 2 %，前馈模块因 12 GB 显存预算未纳入，推理用束宽 5 与清空抑制词表转写。

**关键实验与核心代价：** 在 30 个录音按文件级说话人不重叠划分为 18/6/6 且测试仅用 6 个真实文件的设置下，以多语言 BasicTextNormalizer 计算词错率（WER），零样本基座总 WER 为 27.58 %、含迟疑片段 WER 为 33.28 %，金标微调后分别降至 19.83 % 与 22.52 %，块自助置信区间互不重叠。三种扩增在 5 个种子均值上不可分，伪标签总 WER 为 19.64 %、含迟疑片段 WER 为 22.10 %，金标保持合成集对应为 19.79 % 与 22.08 %，与金标微调的 19.83 % 与 22.52 % 差距均在种间标准差 4-5 个百分点量级之下，置信区间重叠超 70 %。配对分析中仅规划器版本在迟疑 WER 上五种子全优于金标，平均低 0.78 个百分点、95 % 区间为 -1.27 至 -0.28，p 为 0.012，但经 10 重比较 Bonferroni 校正后不再成立。代价侧按既往建议放至 2.35:1 合成比的版本总 WER 回升至 20.32 %、迟疑 WER 至 23.00 %，高于 0.58:1 版本的 19.79 % 与 22.08 %，而金标保持版本迟疑标准差 4.10 为六组最低并在 789 号种子取得 16.59 % 全项目最低。

**适用边界与深读导览：** 结论成立限于 KB-Whisper-large 单基座、老年瑞典语计划性叙事、注意力低秩适配与 6 个测试文件的小样本评估，未覆盖带元音填充 öh 的语域及其他语言。实践决策是有域内无标注音频时伪标签最廉价，无音频或教师仍抑制目标现象时金标保持管线达到相同精度且无需额外音频，可移植性受制于目标语语音合成与强制对齐器可用性。未检验伪标签迟疑密度、合成集规模未匹配使三组合成对比非受控消融，且下游流畅度特征一致性未测量，金标语料因临床协议不能公开。需深究分布审计与对齐丢失机制可查下方方法概述和架构，数值细节与配对区间可查实验结果，统计效力与资源限制可查局限与问题。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 逐字转写为何需要保留迟疑而通用大模型倾向删除它们

语音携带的迟疑密度与分布是认知衰退的早期信号之一，因而下游分析要求逐字转写完整保留填充停顿、重复与修正。输入是老年瑞典语自发语音，输出是保留表面形式的文本，不使用通用迟疑标签，因为已有证据表明保留声学精确的词汇身份可带来 23.6% 的相对增益。通用识别系统为可读性而整理输出，与该目标直接冲突，逐字还原正是本文的建模起点。

#### 抑制来源与瑞典语迟疑体系

Whisper 从网络规模归一化转写中习得流畅隐式语言模型，并在解码时抑制填充词，返回整理后的版本。瑞典语 KB-Whisper-large 在 32,500 小时上训练，约 60% 一阶段数据为议会演讲，二阶段质量过滤对照不含迟疑的参考转写丢弃逐字片段，进一步加深抑制。这种抑制是习得而非结构所致，在逐字数据上微调可以反转，但低资源语言恰恰缺少此类材料。

瑞典语迟疑体系包含填充停顿 öh、ee、mm，话语标记 alltså、liksom、typ，情态小品 ju、va、nä 与应答词 ja、jo，部分形式位置受限且无英语直接对应。教师模型若仍系统漏掉此类形式，其伪标注也会同样整洁，从而把偏置传给下一轮训练，这正是分布受控合成要切断的循环，审计必须发生在训练之前。

#### 金标规模与可制造性判断

可用金标仅 30 个录音、1.02 小时，每人一个录音，任务为斯德哥尔摩之旅规划口述，面向老年瑞典语受试者，由训练有素的转写员逐字转写。经强制对齐与 0.5–25 s 切分得到 1,248 个片段，平均 2.94 s。16 个目标类型中 10 个出现且高度偏斜，ju 114 次与 ja 100 次主导，ee 与 alltså 各 10 次，jo 9 次，va 6 次，liksom 5 次，eh 4 次，typ 3 次，nä 1 次，其余六形在该叙事语域缺失。

该规模远低于 244M 参数以上模型完整微调退化的 3 小时阈值，因而只能制造缺失材料。作者以同一金标与同一基座模型为起点，比较 3 种扩充：域内无转写音频的伪标注、无分布约束的语言模型加语音合成，以及按金标分布构造、可在训练前审计的金标保留合成。研究问题是分布受控合成能否在无需无转写音频时匹敌伪标注，附带检验 2:1 合成与真实数据配比在逐字低资源微调中是否成立。

### 七种配置共享同一适配底座而仅扩增数据不同

全部变体共享同一 1.02 小时金标语料与同 1 KB-Whisper-large 基座，仅补充训练数据不同。适配冻结基座，仅训练低秩适配器 (LoRA)，秩 \(r=32\)，缩放系数 \(\alpha=8\)，采用秩稳定缩放，作用目标为 4 个注意力投影，可训练参数约 31.4M，占模型 2%。前馈网络模块因 12 GB 显存预算被排除，梯度只进入适配器分支，基座权重保持不变，4 个注意力投影之外的模块不参与更新，在有限显存下保留可运行性。学习率为 \(7 \times 10^{-5}\)，取值沿用已有逐字转写研究的设置，有效批次为 16，至多训练 6 轮，并以验证集词错率 (WER) 早停，避免在小样本上过拟合。信号规格为单声道 16 kHz，经强制对齐后按 0.5–25 s 切分，平均 2.94 s，共 1,248 段，为适配提供统一输入形态。

数据划分只切分 30 个金标录音，按 18/6/6 在文件级划分且说话人不重叠，其中 18 个用于训练，6 个用于验证，6 个用于测试，同一说话人不进入多个划分，避免说话人特征泄漏。验证与测试仅由留出真实语音构成，伪标注与合成材料只进入训练划分，同一随机种子下各配置共用相同 6 个真实测试文件，保证比较条件一致。每个配置训练并评测 5 个独立种子，共得到 35 个词错率数据点，以覆盖划分带来的波动。训练批次中伪标注占比至多 50%，自训练轮数控制在仍有益范围内，合成变体均为金标加对应合成集，评测从不触及合成或伪标注语音。这种设置使增强数据的增量完全落在训练侧，测试侧始终为真实自发语音，从而分离建模效应与评测污染。

推理采用波束宽度 5，强制瑞典语转写，清空抑制词表，不使用提示或对数几率偏置，避免外部语言偏置掩盖适配本身的效果。全部词错率 (WER) 计算使用多语言基础文本归一化工具，英文归一化器会从假设与参考中同时删去填充词，并在预实验中抬高基线 7–8 点，属于必须先修正的度量伪影，只有统一归一化后才能比较迟疑保留能力。报告指标包括总体词错率与含迟疑词错率，后者指参考中以完整词形式含至少一个目标词的片段，更直接反映逐字目标。显著性采用文件级分块自助法，以 1,000 次重采样保持同一说话人内部相关，避免把同一说话人内相关的片段当作独立样本。该组合使解码设置、归一化口径与显著性口径三者一致，增量归因更清晰。

### 金标保留流程以画像注入合成对齐过滤实现可审计分布

流程前两步建立可审计目标。第一步画像从金标转写逐词提取每 100 词密度与词性上下文，并收集高填充密度片段作少样本示例。第二步基底文本由瑞典语指令调优的 Llama-3-8B 以 4 位本地推理生成自发语域叙事，系统提示注入金标画像与真实片段，并明确禁用金标缺失的正式连接词，保障隐私与固定随机种子可复现。原文未披露提示词全文与生成温度等细节。

第三步为具备词性约束的规划器与生成器注入。规划器在位置约束下选择插入点，关键是瑞典语 V2 回顾规则，要求后置小品 ju 之前 3 个词元内出现限定动词或助动词。生成器依据局部词性上下文选择词形。全局比例下限保证稀有金标词元获得非零目标，卡方校验器核对结果分布与金标画像。该设计使合成文本的迟疑分布在训练前即可对照金标审计，而无引导合成无此保证。

后三步完成声音与筛选。第四步语音合成采用 OmniVoice 声音设计模式轮换 4 个说话人画像，字面发音不自然的迟疑词元映射为非言语符号，例如 [sigh] 与 [thinking]，映射经 UTMOS（语音自然度代理分数）对比选择，仅用于择优映射而非最终质量证据，且 UTMOS 在英文上校准。第五步强制对齐采用 WhisperX 加瑞典语 wav2vec2 联结时序分类模型，交叉注意力动态时间规整丢失 72% 的 ja，比例仅 0.29，而联结时序分类对齐恢复至 0.96。第六步生成器与校验器检查以零样本基线转写每份合成并隔离 WER 超过 25% 的文件，最终合成集为 647 个片段、0.59 小时，与金标比为 0.58:1。

两种对照仅换增加数据。伪标注变体以仅金标训练的金标模型转写银集，银集为 30 个同声学人口域无转写自发录音，按平均词元对数概率阈值 -0.8、正则幻觉检测与时长过滤，每批次至多 50% 为伪标注并在有益轮次内截断自训练，过滤后贡献 3,225 个片段、2.93 小时。无引导变体使用相同语言模型与语音合成系统但无画像、注入或分布检查。放大变体将金标保留集扩至 2.40 小时、与金标比 2.35:1，其余不变。

### 微调大幅降低两类词错误率而六种微调配置均值难分高下

评测公平性先行。30 个金标录音按文件与说话人不重叠划为 18 / 6 / 6，验证与测试仅为留出真实语音，伪标注与合成仅进入训练划分，每随机种子对 7 种配置使用相同 6 个真实测试文件，共 5 个随机种子形成 35 个 WER 数据点。指标为总 WER 与迟疑片段 WER，迟疑片段指参考中以完整词出现至少一个目标词元的片段，数值越低越好。显著性采用文件级块自助法 1,000 次重采样以保留说话人内相关，解码波束宽度 5 并使用多语言归一化，未设人工听测。

| Model | WER tot. (%) | WER disfl. (%) |
| --- | --- | --- |
| Base | 27.58 ± 2.90 | 33.28 ± 4.87 |
| FT-gold | 19.83 ± 4.59 | 22.52 ± 4.49 |
| FT-pseudo | 19.64 ± 4.31 | 22.10 ± 4.73 |
| FT-syn-llm | 19.84 ± 4.76 | 22.60 ± 4.83 |
| FT-syn-pg | 19.88 ± 4.56 | 21.75 ± 4.47 |
| FT-syn-gp | 19.79 ± 4.63 | 22.08 ± 4.10 |
| FT-syn-2:1 | 20.32 ± 4.28 | 23.00 ± 4.66 |

全部微调模型较零样本基线降低总 WER 约 7.7 点，相对约 28%，迟疑片段 WER 降低约 10.8 点，相对约 32%，且在每个随机种子上一致，基线与任一微调模型的 95% 块自助置信区间在最难与最易种子上均不重叠。迟疑相对增益更大，证实修正的是反迟疑偏置而非一般精度。分列看，总 WER 最优为伪标注变体 19.64%，次优为金标保留变体 19.79%，迟疑 WER 最优为规划器与生成器变体 21.75%，次优为金标保留变体 22.08%，但六者均值跨度总计仅 0.24 点、迟疑仅 0.85 点。

该跨度远低于 4–5 点的种子间标准差，置信区间两两重叠超过 70%，2 点以内差异与抽样噪声不可区分。在金标之上增加任何来源数据至多带来总 WER 0.19 点与迟疑 WER 0.77 点的均值改善。金标保留变体迟疑标准差为 4.10，对照 4.47–4.83 更稳定，并在 789 号种子上取得项目最低 16.59%，固定随机种子可精确复现且分布可预先审计，无需无转写音频。放大变体总 20.32% 与迟疑 23.00% 均为微调中最差，且无人工听测佐证可懂度。

### 配对差值分布审计与合成比例放大的方向性退化

均值比较被种子间方差淹没，配对比较移除该方差。同一划分下 5 种子配对计算相对仅金标的差值，负值表示扩增系统更优，配对 t 给出 95% 置信区间。下表同时检验分布保真与比例外推，合成集大小与成分并非单变量受控，仅对齐步骤使用相同生成文本比较两种对齐器而得以隔离，规划器与全局比例下限贡献未分离。

| Model | ∆WER tot. | ∆WER disfl. |
| --- | --- | --- |
| FT-pseudo | −0.20 (−0.74, 0.35) | −0.43 (−2.01, 1.16) |
| FT-syn-llm | 0.01 (−0.56, 0.57) | 0.07 (−0.94, 1.08) |
| FT-syn-pg | 0.04 (−0.51, 0.59) | −0.78 (−1.27, −0.28) |
| FT-syn-gp | −0.04 (−0.53, 0.44) | −0.45 (−1.89, 1.00) |
| FT-syn-2:1 | 0.49 (−0.24, 1.22) | 0.47 (−0.97, 1.91) |

总 WER 上 4 种扩增与金标差值区间均被限制在正负 0.75 点以内，仅放大变体上探至 1.22，排除大差异而未证小差异。迟疑 WER 区间更宽，唯一例外是规划器与生成器变体 5 种子全部优于金标，平均改善 0.78 点，区间为 -1.27 至 -0.28，p 为 0.012，但十次比较经 Bonferroni 校正后不再显著，仅记为提示性而非确立。该提示方向在每种子上一致，是数据中扩增优于金标的唯一证据。

分布审计显示控制有效。无引导合成过度产出英语中介填充词，eh 为 8.98 倍，liksom 为 8.18 倍，最频金标小品 ju 仅 0.15 倍。规划器与生成器修复 ju 但动态时间规整破坏 ja 至 0.29。金标保留集 10 个活跃词元中 8 个落入 0.7–1.4 倍保真带，ee 为 1.39，离群 typ 为 2.14 与 eh 为 0.27，而金标样本仅 3–4 次，一次出现即移动比例 25–33%。ju 前接词性余弦相似度为 0.893，99% 落入金标前 3 类。微调后 ju 与 ja 预测比达 0.99–1.12，alltså 约 0.80，句末弱化小品 va 仅 0.34–0.47。

2:1 比例未迁移。放大至 2.35:1 的变体在 5 种子中四次总 WER 差于金标保留，平均增加 0.53 点，三次迟疑 WER 更差，平均增加 0.92 点，虽在 1 倍种子间标准差内但方向一致，边缘比值畸变 alltså 为 0.75，jo 为 1.33。原文归因于合成语音声学差距须由 31M 参数适配器吸收，比例拐点在该逐字低资源区低于 1 比 1 而非 2 比 1。伪标注迟疑密度本身未测量，教师偏置前提未经直接检验，比较亦非等量受控。

### 小样本不确定性复现核对与无额外音频时的选型规则

#### 评估边界与归因缺口

每个随机种子下仅 6 个真实测试文件，种子间标准差 4–5 点，块自助置信区间宽 20–30 点，只能分离微调与零样本模型而不能排序扩增策略，原文如实表述为差异不可检测而非真正等价。5 个随机种子低于稳定方差估计建议的不少于 10 个。单一基座与单一叙事诱发任务缺失元音填充停顿 öh，该类召回未经测试，结论外推须谨慎。

论证缺口集中于归因。伪标注继承教师反迟疑偏置的动机未经验证，因未测量伪标注本身迟疑密度，而这正是直接检验。3 组合成集一次改变多个成分且大小不等，跨集比较不是受控消融，差异部分可能反映数据量而非分布。对齐是唯一被隔离的成分，同一批生成文本分别经动态时间规整与 WhisperX 处理，而规划器与全局比例下限的贡献未分离，成分级消融是未来最有价值的补充。

#### 选型边界与可复现性判断

选型与测量亦有边界。对齐仅比较两种方案，未纳入隐马尔可夫参考，联结时序分类被选因与 WhisperX 及现成瑞典语语音模型的集成直接，而非证优。12 GB 显存预算排除前馈网络模块，可能留有余量。UTMOS 客观质量估计在英文上校准，只用于合成映射择优。下游流畅特征与人工转写一致性等临床效用尚未测量，尚不能支持个体层面的临床推断。

语料依临床协议采集，含可识别嗓音，经哥德堡区域伦理审查批准，不公开，去标识数据可经合理申请、伦理审批、机构要求与数据使用协议考虑。本次未收到作者资源可用性确认，代码是否开源、权重是否提供下载、系统是否可直接运行三者原文均未披露，不可视为已公开或可直接运行，所有触及录音的处理均本地运行，无试听页，不虚构听感。

选型上，有域内无转写音频则伪标注最便宜，无则金标保留流程达到相同准确且唯一可预先审计分布。均值差异被测试集说话人构成主导时，更低的种子间方差比均值更重要，这使方差更低的金标保留合成更适配说话人不受控的认知评估场景，也让无转写音频成为可选项而非必需品。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：单声道 16 kHz 金标 30 个录音 1.02 小时 1,248 个片段 0.5–25 s 切分平均 2.94 s 合成集 647 个片段 0.59 小时与金标比 0.58:1 放大集 2.40 小时比 2.35:1 伪标注 3,225 个片段 2.93 小时原文未披露帧率与前瞻延迟与 RTF
- **训练与评测数据**：金标为 Trip to Stockholm 老年瑞典语自发语音 30 个录音 1.02 小时按文件与说话人不重叠划为 18 / 6 / 6 银集为 30 个同声学人口域无转写录音合成由语言模型与语音合成生成验证与测试仅为留出真实语音语料因临床协议不能公开去标识数据可依申请与伦理审批考虑
- **算力与训练耗时**：原文未披露 GPU 与 TPU 型号数量与训练耗时仅披露 12 GB 显存预算下前馈网络模块被排除语言模型以 4 位本地推理保障隐私与可复现
- **核心超参数与配置**：低秩适配器秩 32 缩放系数 8 秩稳定缩放目标四个注意力投影约 31.4M 可训练参数占模型 2% 学习率 7 × 10-5 有效批次 16 至多 6 轮以验证集 WER 早停伪标注批次占比至多 50% 平均词元对数概率阈值 -0.8 合成隔离阈值 25% WER
- **推理速度与部署开销**：推理波束宽度 5 强制瑞典语转写清空抑制词表无提示或对数几率偏置原文未披露延迟吞吐显存与 RTF 仅披露适配器约 31.4M 参数
- **开源产物与协议状态**：原文未披露代码是否开源权重是否提供下载与数据公开下载本次未收到可用资源确认不可视为已公开语料因临床协议不能公开系统不可直接运行
- **附录与补充材料要点**：原文未设独立附录关键细节在正文与参考文献中含认知标记依据合成比例阈值依据伦理审批号 2016-16 与 T021-18 失效案例为无引导合成分布失真与 2.35:1 放大退化

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.6/10 | 技术严谨 7.5/10 | 实验充分 5.9/10 | 清晰度 6.7/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 4.5/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.4`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.4/) · [官方 PDF](https://aclanthology.org/2026.salma-1.4.pdf)
- DOI：`10.18653/v1/2026.salma-1.4`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：金标逐词元密度与词性上下文剖析结合V2回视规划器与全局下限及卡方校验，使合成集分布在训练前即可审计。

- 核心优势：同文本对照分离出对齐关键瓶颈，CTC将ja比值从0.29恢复至0.96且训练集审计达1.04，机制解释清晰可核对。

- 主要短板：每种子仅6个测试文件、种间标准差4-5点，三组合成集规模未匹配且多组件同时变化故非受控消融。

- 主要短板：未提供人工主观听测，仅以英语校准的UTMOS二选一选择非言语符号映射，感知主张缺乏真人盲测支撑。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
