---
title: "Can Speech LLMs Recognize When Audio Evidence Is Insufficient? A Diagnostic Study and a Pre-Generation Probing Mitigation"
date: 2026-11-24
draft: false
tags: [音频问答, 表示探测, 幻觉与忠实度, 语音大模型]
categories: [论文速递]
description: "论文以端到端语音大模型与语音识别级联的同证据对照加合成与自然语音的配对比较，证明合成语音上感知与推理分离的诊断结论在自然语音上反转，并以冻结提示表示上的生成前探测达到 0.773 的 AUROC 预判模型仍会抢答的不可答题，而代价是小样本、单模型族与宽区间带来的选择乐观。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29393"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "语音大模型能否识别音频证据不足时的拒答边界"
paper_digest_original_title: "Can Speech LLMs Recognize When Audio Evidence Is Insufficient? A Diagnostic Study and a Pre-Generation Probing Mitigation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29393v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29393v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29393v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"model_family","id":"model_family.speech","label":"语音大模型"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文以端到端语音大模型与语音识别级联的同证据对照加合成与自然语音的配对比较，证明合成语音上感知与推理分离的诊断结论在自然语音上反转，并以冻结提示表示上的生成前探测达到 0.773 的 AUROC 预判模型仍会抢答的不可答题，而代价是小样本、单模型族与宽区间带来的选择乐观。"
paper_digest_reader_sections: [{"heading":"录音未给出答案时语音大模型为何仍坚持作答","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双系统对照与三套数据如何分离听觉与推理","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结提示表示上的生成前探测门如何提前预判抢答","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"合成语音上的分离在自然语音上为何消失","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"配对孪生比较与内部表示探测给出何种归因","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"小样本与单模型族下结论的边界与复现清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Moscow Institute of Physics and Technology"],"name":"Vladislav Nesterenko"},{"affiliations":["HSE University"],"name":"Polina Doronicheva"},{"affiliations":["Chelyabinsk State University"],"name":"Olga Golubeva"},{"affiliations":["HSE University"],"name":"Polina Sheviakova"}]
paper_digest_abstract_sha256: "1906ee2d3fdb28b33439ed0c35acb34a1e4098405adfd76df8c7a6f9b01d662c"
paper_digest_sidecars: {"citation.bib":{"sha256":"66a7578d43b17445840e982f22e5171b732a02563e95dc55062d59f68fe5d241","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29393/citation.bib"},"citation.json":{"sha256":"347c65998bb69045353b0ab97d5abc5dbb536d3bee6158d6b8f5e4b902cefee2","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29393/citation.json"},"citation.ris":{"sha256":"f013e310da54092a0950742c829ae16dbffd07bae73c25a8cf92dcb5ecf7604d","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29393/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"75dc7b494d1fb9e1d6737f1c6c490eec1055fbf227fb5da43896582d5b58b7fe","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29393/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "95a4addd608495da5f0f26d6d5ebc5ae21e44fb095bf74c25c365328c9d63363"
paper_digest_api_reader_plan_sha256: "333b3428ef757a3ba72ae3e13e31cd34232b56099572e238eba2f9a13d55b84e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4c9bf448906e21f82a46d93720da4b3b9f69768b3f48879931c847c0bdccf632"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "00151f0d1500a3ccfb5eb05eb6324d0da60fd5acf5bf76283c2c33f1f41524c6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "57203957602017866b4169a280d8a1153943cf6d7e6df1caeeffe205fbbeb870"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "91c780b4a8dec140cec71137660cbd5b2825b2f01aaef433b791bb571588f8d9"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 语音大模型能否识别音频证据不足时的拒答边界

> 英文题目：*[Can Speech LLMs Recognize When Audio Evidence Is Insufficient? A Diagnostic Study and a Pre-Generation Probing Mitigation](https://arxiv.org/abs/2611.29393v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)
- **模型家族**：[语音大模型](/audio-paper-digest-blog/papers/?concept=model_family.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.2/10 | 技术严谨 7.8/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 6.9/10 | 工程/实践 6.0/10


## 👥 作者与机构

- Vladislav Nesterenko：Moscow Institute of Physics and Technology
- Polina Doronicheva：HSE University
- Olga Golubeva：Chelyabinsk State University
- Polina Sheviakova：HSE University

## 📌 核心摘要

**问题与瓶颈：** 任务对象是一段录音加一道文字问题，系统需在有证据时作答、无证据时弃权。现有语音问答评测多假设问题皆可答，端到端语音大模型在无证据时仍流畅作答，而一句允许说不知道的提示又会在可答题上连带拒答。诊断困难在于区分感知失败与推理失败：录音信息是否已足够支撑弃权判断。常用做法是用同一录音的自动转写接文本模型构成级联对照，若对照能正确弃权而端到端不能，则指向推理环节；但该对照的有效性依赖评测材料本身，合成语音更规整易转写、模型自造问题与人工对抗问题难度不同，逐条核对标签无法发现这类整体偏移。

**核心思路与方法架构：** 与最接近的已有做法相比，增量在于固定问题只换音频来源的配对设计，以及把文本领域的生成前探测迁移到多模态弃权判断。沿一条样本看，30 秒录音对应 3000 帧梅尔谱特征，模型 Qwen2-Audio-7B-Instruct 直接消费音频加问题，级联则由 Whisper-medium 先转写再交 Qwen2.5-7B-Instruct 作答，两者均用 8 位量化与贪心解码并共用常规提示与弃权许可提示。权重全程冻结，另在冻结的提示表示上训练岭回归探针，用 10 次采样的错误比例作软目标并按段落分组交叉验证，目标是在生成首个词前预判不可答题是否会被强答。该设计直击根因：双生子集让同一批问题听合成与真人两种录音，感知难度变化只影响转写环节；探针读取问题融合状态而非音频编码，可检验自信编造是否在输出前已可分。

**关键实验与核心代价：** 在 100 条合成诊断集上，弃权许可提示下端到端幻觉率（hallucination rate，指不可答题中给出实质回答的占比，越低越好）为 17.5% 而级联仅 2.5%，过度拒答率（over-refusal rate，指可答题中错误弃权的占比，越低越好）分别为 61.7% 与 6.7%，看似瓶颈在推理。在 376 条真人朗读验证集上结论反转：同提示下端到端与级联幻觉率分别为 69.8%（63.6 - 75.3）与 67.7%（61.4 - 73.3），区间重叠，过度拒答率为 0.7% 与 11.3%，常规提示下为 94.0% 与 87.2%。214 题双生子集显示端到端弃权行为不随音源变化（常规提示 92.1% 对 92.9%，\(p = 1.00\)；许可提示 78.6% 对 72.2%，\(p = 0.10\)），级联则从 11.1% 升至 65.9%（\(p < 10^{-12}\)）。探针在 235 条不可答题上，取提示末位置第 16 层表示达到 AUROC（受试者工作特征曲线下面积，越高越好）0.773（0.671 - 0.863），同批 10 次采样的语义熵（semantic entropy，指多次采样答案含义分歧度）仅 0.506（0.405 - 0.600），因 92% 条目 10 次编造出同一答案。代价是弃权提示以可答准确率换低幻觉，探测则只需一次前向而非 10 次生成。

**适用边界与深读导览：** 结论成立限于英文朗读、Qwen 系列同尺寸模型、单一合成器与 30 秒截断条件，诊断集仅 100 条且探测评估依赖 25 个负例，区间宽且 16 选 1 存在挑选乐观，作者亦承认仅测两种提示。代码、数据、提示、评分管线与运行记录已在 GitHub 仓库公开，可复核原始发现与反驳过程。欲深究配对构建与截断处理可看下文方法与细节，探测层位与池化对比与不确定性失效分析见实验与局限章节。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/ladnlav/slm-audio-evidence> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 录音未给出答案时语音大模型为何仍坚持作答

语音大模型把音频编码器直连指令微调后的文本主干，省去语音识别流水线的延迟，在语音问答上表现流畅。这种流畅背后藏着闭世界假设，即默认每个问题在音频中都有依据。实际部署中录音常常没有给出答案，模型却很少拒答，而是编出流利但无依据的回答。若直接加一句允许说不知道，又会在有答案的问题上无差别拒答，形成幻觉与过度拒答之间的权衡。

论文把任务定义为一次只给一段录音与一道文字问题，系统必须在自由文本通道中作答或拒答，不提供选项也不要求置信度。每题带有类别标记，可述事实对应录音中直接说出的答案，可推事实对应需多步语义组合才能得出的答案，不可答题对应录音未建立任何答案且应拒答。不可答又按缺失原因细分，是否提及实体与属性、是否预设未建立事实、是否完全无关，其中表面重叠高而证据不足的两类最能检验模型是依据证据还是依据话题相似拼凑答案。

为判断幻觉出在感知还是推理，论文引入语音识别级联作为仪器，它把同一段录音转写为文字再交由文本模型作答。若级联能正确拒答而端到端模型不能，所需信息显然已在信号中，瓶颈应在推理侧。该对照的可靠性依赖评测材料，领域常用合成语音与模型生成问题搭建诊断集，已有基准把依赖合成语音列为局限却只做回避而未量化，问题来源与音频来源两处可疑属性是否会扭曲结论，正是后续对照要回答的。

### 双系统对照与三套数据如何分离听觉与推理

方法围绕一对同源系统与 3 套数据展开，目标是把听觉转写难度与问题迷惑性分开。端到端侧为 Qwen2-Audio-7B-Instruct，级联侧为 Whisper-medium 转写加 Qwen2.5-7B-Instruct，两者同为 8 位量化贪心解码，看到的是同一段音频证据。级联不是竞品而是仪器，它把证据显式文字化，若它能拒答而端到端不能，失败应在感知之后。两种提示词贯穿全部对照，朴素提示不提拒答，IDK 提示只加一句限定与固定拒答句式。

#### 双系统与两种提示词的执行路径

以一段 30 秒录音与一道文字问题为例，端到端路径先由音频编码器把波形变为梅尔频谱表示，位置嵌入上限为 1500，对应 3000 个梅尔帧即 30 秒，超出部分直接不可见。编码后的音频区间与问题文本拼接为完整多模态提示，进入冻结的 7B 指令模型做单次贪心前向，输出自由文本回答或固定拒答句。原文未披露采样率、帧移、隐藏维度与注意力细节，这些环节只能说明存在而不能补造具体张量形状。

级联路径处理同一段录音时先由 Whisper-medium 生成文字转写，再把转写以固定前缀拼接到与端到端相同的提问文本之前，交由 Qwen2.5-7B-Instruct 只读文字作答。验证集与孪生子集把录音截断至 30 秒并只保留答案落在可听区间内的可答题，使两系统证据对齐。诊断集搭建较早未截断，段长 31 秒至 55 秒中位 43 秒，级联因此可能看到转写全文而端到端只看到前 30 秒，这一不对称在解释诊断集数字时必须保留。

两种提示词逐字固定，朴素提示要求听音频作答，IDK 提示要求只用音频内信息作答，否则必须原样输出指定拒答句，固定句式也让规则分类器能诚实区分作答、拒答与含糊。分类器先标出 3 类，实质回答在可答类别上再交由 Qwen3-8B 判分器对照转写、问题与金答案判定语义等价，不可答题不经判分，任何实质回答即记幻觉。判分器在 93 个人工核对的可推题上与人一致率为 95%，构成全部准确率数字的下限。

#### 3 套数据的构造与公平性处理

诊断集基于 Spoken-SQuAD 的合成语音，从 40 个手工挑选的多事实段落各取一道原生可述题，另由模板从转写生成可推与不可答候选，经自动过滤与 2 位未参与出题的标注者核验后冻结为 100 题，其中可述 30、可推 30、不可答 40。不可答覆盖实体缺失、属性缺失、虚假预设与话题无关 4 种子类型，共享题校准一致率为 80%，争议题按规则丢弃而非仲裁，冻结后未再改动以保证 4 组运行可比。

验证集同时去掉两个可疑属性，它取 NMSQA 中由 40 位说话人朗读的段落录音，与 SQuAD 2.0 中众包撰写的迷惑性不可答题取交集，再经 30 秒截断与可听性人工复听，冻结为 376 题，含可述 141 与不可答 235，覆盖 48 个段落、51 段录音，无可推类以避免重新引入生成问题。孪生子集从中取 26 个同时持有合成音频的段落，以完全相同的 214 题在两种音频下各问一次，可听内容中位转写长度仅差一词，从而只变音频来源而不变问题。

指标口径在全文固定，不可答题上报告幻觉率与正确拒答率，含糊单独计数，可答题上报告包含拒答惩罚的准确率与过度拒答率。比例均带 95% Wilson 区间，孪生子集为配对设计故用 McNemar 检验不一致条目，探测部分用按段分组交叉验证与自助法区间。分组不是形式要求，共享同一段音频的题目共享证据，若不按段分组会把难度记忆误报为近乎完美的探测分数。

### 冻结提示表示上的生成前探测门如何提前预判抢答

生成前探测把拒答决策提前到解码之前，读取的是已算好的提示表示而非采样输出。表示取自包含音频与问题的完整多模态提示，在第 8、16、24、32 层各取 4 种视图，分别为最后提示位置、全部位置均值、音频位置均值与文本位置均值，单次前向同时捕获使层选择成为事后分析而非事前猜测。探测器本身是标准化特征上的岭回归，权重外置而模型权重冻结，其设想用途是在解码前输出风险分以决定是否作答，论文度量的是该门所依赖的探测质量而非门的工作曲线。

监督信号不是二分类标签而是软目标，即以模型自有温度采样 10 个生成结果中错误的占比，可答题上指实质回答被判错，不可答题上指任何实质回答。采样必须用模型自有温度，否则估计的是另一分布的错误率。训练与评估只用不可答题并按原文段落分组交叉验证，限制在单一类别内使探测器无法靠识别题目类别取巧，可答与不可答难度差异带来的捷径被构造性排除，报告的数值才是关键决策上有用的数值。

候选层事先固定于文本模型中信号最集中的中间层，论文沿用该先验并在层 16 得到验证，两侧的层 8 与层 32 起到包络作用。池化对比给出定位结论，音频位置均值在各层均无可用信号，风险是否编造答案体现在模型如何整合问题，而非如何编码录音。最后提示位置在层 16 达到 0.773 的 AUROC（受试者工作特征曲线下面积），文本位置均值在层 32 亦有相近表现，模式一致比单点最优更值得信任，但 16 选 1 的最优仍带选择乐观。

采样后基线在同一批样本上计算语义熵，即语义分布的不确定性度量，其 AUROC 为 0.506，区间为 0.405 至 0.600。失效原因在标签中直接可见，不可答题中有 92% 的题目 10 次采样给出相同裁决，每次编出同一答案。采样分歧只能发现模型拿不准的失败，对确信的编造天然失明，而内部表示在输出分布无差异时仍能区分，这既是延迟论据之外的准确性论据，也是把门放在生成前而非生成后的理由。

### 合成语音上的分离在自然语音上为何消失

评测固定为两系统乘两种提示词的 4 种配置各单次贪心运行，区间均为二项比例区间。诊断集为合成音频 100 题，验证集为自然朗读 376 题，均报告不可答题幻觉率越低越好与可答题准确率越高越好，过度拒答越低越好。两系统证据在验证集上已对齐至 30 秒，诊断集未截断故级联可能多看转写全文。正确性依赖规则分类加 Qwen3-8B 判分，无人工主观听测，判分器与人一致率 95% 构成准确率下限，含糊单独计数不计入两端。

#### 合成诊断集上的显著分离

下表为合成诊断集的 4 组对照，含 30 道可述、30 道可推与 40 道不可答，括号内为 95% Wilson 区间。阅读时先看同提示下两系统的幻觉率差距，再看 IDK 提示把幻觉压低了多少，最后看可答准确率与过度拒答付出了什么。该表是论文最初得出感知与推理分离判断的依据，也是后续被推翻的起点。

| System | Prompt | Halluc. ↓ | Acc. A ↑ | Acc. B ↑ | Over-ref. ↓ |
| --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | plain | 92.5 (80.1–97.4) | 33.3 | 26.7 | 6.7 |
| Qwen2-Audio | IDK | 17.5 (8.7–32.0) | 23.3 | 6.7 | 61.7 |
| Cascade | plain | 62.5 (47.0–75.8) | 100.0 | 93.3 | 0.0 |
| Cascade | IDK | 2.5 (0.4–12.9) | 93.3 | 83.3 | 6.7 |

IDK 提示下级联幻觉率为 2.5%，端到端为 17.5%，朴素提示下分别为 62.5% 与 92.5%，分离幅度大且区间不重叠。代价端同样尖锐，端到端为换取拒答把过度拒答推高至 61.7%，可述与可推准确率跌至 23.3% 与 6.7%，并非区分听见与未听见而是整体更易拒答。级联在可述上保持 93.3% 至 100%，似乎转写已保留拒答所需信息。该结论的前提是合成语音极易转写与未截断带来的证据不对称，离开该前提便不再成立。

#### 自然验证集上分离的消失与代价反转

下表切换到自然语音验证集，含 141 道可述与 235 道原生迷惑性不可答，无可推类以避免重新引入生成问题。比较条件与上表相同，仍是 4 种配置的幻觉率、准确率与过度拒答，括号内为 Wilson 区间。重点观察同为 IDK 提示时两系统幻觉率是否仍分离，以及为达到相近幻觉率谁付出了更高的过度拒答。

| System | Prompt | Hallucination ↓ | Accuracy ↑ | Over-refusal ↓ |
| --- | --- | --- | --- | --- |
| Qwen2-Audio | plain | 94.0 (90.2–96.4) | 80.1 (72.8–85.9) | 0.0 |
| Qwen2-Audio | IDK | 69.8 (63.6–75.3) | 79.4 (72.0–85.3) | 0.7 |
| Cascade | plain | 87.2 (82.4–90.9) | 72.3 (64.4–79.1) | 0.7 |
| Cascade | IDK | 67.7 (61.4–73.3) | 68.8 (60.7–75.9) | 11.3 |

IDK 提示下级联幻觉率为 67.7%，端到端为 69.8%，区间大幅重叠，朴素提示下为 87.2% 对 94.0%，诊断集上的巨大优势已消失。代价反而反转，级联过度拒答为 11.3% 而端到端仅 0.7%，以更高误拒换取数值上最低的幻觉率。IDK 的效力也大幅衰减，只去掉了端到端约 1/4 的幻觉，而非诊断集上的四分之三。错误集中在转写最弱处，如 Monterey 误作 Ontario，级联可述准确率在验证集为 72.3%，说明前端已先丢失信息。

### 配对孪生比较与内部表示探测给出何种归因

诊断集与验证集同时改变了音频来源与问题来源，无法单独归因。孪生子集固定问题只变音频，探测网格则检验拒答信号是否存在于生成之前。以下 3 张表分别对应配对检验、探测与基线对比、两类混杂的分解，共同回答偏差来自何处与残余失败能否被低成本预判。三者均使用同一判分口径与区间报告方式，显著性在配对处用 McNemar，其余用自助法区间。

#### 配对孪生子集锁定音频来源

下表为 214 道相同题目在合成与自然两种录音下的配对结果，幻觉率分母为 126 道不可答，准确率分母为 88 道可答，p 为双侧 McNemar。两侧录音均截断至 30 秒且可听内容基本一致，级联多看全文的旧不对称已被消除，唯一不共享的部件是转写前端，行为差异可归于音频来源。

| System | Prompt | Hallucination ↓ synth | Hallucination ↓ human | Hallucination ↓ p | Accuracy ↑ synth | Accuracy ↑ human | Accuracy ↑ p |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | plain | 92.1 | 92.9 | 1.00 | 90.9 | 81.8 | 0.013 |
| Qwen2-Audio | IDK | 78.6 | 72.2 | 0.10 | 87.5 | 79.5 | 0.023 |
| Cascade | plain | 64.3 | 87.3 | 4⋅10−6 | 94.3 | 71.6 | 5⋅10−5 |
| Cascade | IDK | 11.1 | 65.9 | <10−12 | 86.4 | 71.6 | 0.012 |

端到端行为几乎不随说话人移动，朴素提示下幻觉率为 92.1% 对 92.9%，p 为 1.00，IDK 下为 78.6% 对 72.2%，p 为 0.10 且方向与伪影解释相反。级联则被彻底改变，IDK 下从 11.1% 跃至 65.9%，p<10−12，不一致条目 72 对 3，朴素提示下从 64.3% 至 87.3%。合成语音对两者作答都有增益，但只有转写阶段把这种易转写性转化为表面上的认知能力，诊断集的分离实为转写难度的度量。

#### 生成前探测与采样不确定性对比

下表为仅在 235 道不可答题上的探测 AUROC 网格，行是 4 种池化，列是第 8、16、24、32 层，最右列为每种池化最优格的 95% 自助区间。语义熵基线用同一批 10 个样本计算为 0.506，区间为 0.405 至 0.600。只看单一类别使类别归属捷径失效，得分高低直接对应能否预判模型会否抢答。

| Pooling | L8 | L16 | L24 | L32 | 95% CI (best) |
| --- | --- | --- | --- | --- | --- |
| Last prompt position | 0.580 | 0.773 | 0.733 | 0.771 | (0.671, 0.863) |
| Mean, text positions | 0.709 | 0.698 | 0.695 | 0.747 | (0.616, 0.860) |
| Mean, all positions | 0.466 | 0.555 | 0.698 | 0.707 | (0.598, 0.812) |
| Mean, audio positions | 0.319 | 0.568 | 0.539 | 0.484 | (0.465, 0.675) |

最后提示位置在层 16 达到 0.773，区间为 0.671 至 0.863，层 24 与层 32 的同行与文本均值在层 32 的 0.747 均落在 0.73 至 0.77 附近，模式一致而非孤点。音频位置均值各层均在机会水平附近，最高区间上限仅 0.675，说明风险不在录音编码而在问题整合方式中。语义熵区间不触及探测器，其失效与标签一致，92% 的不可答题 10 次采样裁决完全相同，输出分布无分歧时内部状态仍可区分，这是生成前设门的准确性依据。

#### 两类混杂因素的归因分解

下表把 3 套数据摆在一起做一次一因素移动，中间列与左列共享合成音频、与右列共享原生问题，第二步为受控孪生配对，第一步还同时改变段落与截断故只具指示性。数值均为 IDK 提示下幻觉率，末两列为问题来源与音频来源各自带来的点数变化，阅读时先看每行哪一列跳变最大。

| System | generated Q synth audio | native Q synth audio | native Q human audio | attributable to questions | attributable to audio |
| --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | 17.5 | 78.6 | 72.2 | +61.1 | −6.3 |
| Cascade | 2.5 | 11.1 | 65.9 | +8.6 | +54.8 |

端到端全部效应在问题来源，换成原生迷惑题增加 61.1 个百分点，音频贡献为负 6.3，级联则相反，音频带来 54.8 个百分点，问题仅 8.6。两种告诫机制独立，各自由其适用的系统证明，而非同一混乱的两种症状。缺失的消融在于未变换合成器与模型族，幅度是否适用于其他语音合成系统与非 Qwen 主干仍未验证，探测侧 16 选 1 的选择乐观与仅 25 个负例带来的宽区间亦未被校正。

### 小样本与单模型族下结论的边界与复现清单

4 个边界限定了数字的适用范围。规模上诊断集仅 100 题，探测评估依赖 235 道不可答中仅 25 个负例，多个区间因此很宽，最优探测配置从 16 格中选出故带选择乐观。模型族上两系统均基于 Qwen 同量级模型，孪生合成侧来自单一语音合成系统，方向应适用于任何比真人语音更可预测的合成器，但幅度只属于该搭配。30 秒编码器窗口是架构性不对称，诊断集未截断已使端到端可述准确率被压低，比较时必须计入。

度量与语言范围亦有上限。正确性由与人一致率 95% 的模型判分，样本仅 93 道可推题且来源与应用处不同，构成准确率的下限而非真值。全部音频为英语朗读而非自发语音，只测两种提示词，故无提示可修复仅指所测的拒答指令而非提示工程整体。附录曾记录作用域缺陷，早期判分器只对可推类触发，验证集一度全用字符串比对并低估转写改写，修正后可述准确率最高提升 30 个百分点，全部正文数字均为修正后结果。

复现核对需区分三件事，论文文本是否给出仓库与清单、已验证资源身份记录状态、本次是否确认可达。论文给出仓库地址并列出清单、提示词、流水线与运行脚本，已验证资源身份记录中该链接为数据集类型且本次状态为暂时不可达，只能记为本次未能确认可达，不能记为作者资源当前可用或已公开。工程选型上，若在合成语音上看到级联拒答远优于端到端，应先用同题配对真人录音复测再下推理瓶颈的结论。残余失败可以尝试生成前探测作为低成本门，复现第一步是按段分组重跑岭回归网格并检查音频池化是否仍在机会水平，再补非 Qwen 主干与自发语音上的验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：Qwen2-Audio 音频编码器具 1500 个位置嵌入，对应 3000 个梅尔帧即 30 秒上限，超出部分不可见；验证集与孪生子集录音均截断至 30 秒且可答题答案须落在可听区间内，诊断集未截断段长 31 秒至 55 秒中位 43 秒；原文未披露采样率、帧移与码率，级联侧接收 Whisper 转写全文不受该窗口限制。
- **训练与评测数据**：诊断集 100 题基于 Spoken-SQuAD 合成语音，含可述 30、可推 30、不可答 40；验证集 376 题为 NMSQA 真人朗读与 SQuAD 2.0 迷惑性不可答题交集，含可述 141、不可答 235，覆盖 48 个段落、51 段录音与 40 位说话人；孪生子集 214 题在 26 个段落上配对合成与真人录音，含可述 88、不可答 126；探测评估仅用 235 道不可答题，其中负例 25 个。
- **算力与训练耗时**：原文未披露 GPU 并行加速硬件型号与数量、训练步数与耗时；两系统均以 8 位量化贪心解码单次运行，探测侧对每道不可答题采样 10 个生成结果，判分器 Qwen3-8B 单响应约 1.09 秒。
- **核心超参数与配置**：两系统冻结无微调；探测为标准化特征上岭回归，按段分组交叉验证，在层 8、16、24、32 与 4 种池化共 16 配置中评估，最优为层 16 最后提示位置，采样温度 1.0，样本数 k 为 10，语义熵基线用同批样本；优化器、学习率与批大小原文未披露。
- **推理速度与部署开销**：端到端与级联均为单次贪心前向，探测增加一次前向即可给出风险分，无需多次采样；语义熵需 10 次采样后才可发言；原文未披露实时率、延迟与显存数值。
- **开源产物与协议状态**：论文给出数据、清单、提示词、分级流水线与运行报告发布地址，当前该链接暂时不可达，只能记为本次未能确认可达；判分器选型与孪生报告、探测训练脚本名见附录，未声称权重与数据的可下载状态超出原文。
- **附录与补充材料要点**：附录 A 说明 AQUA-Bench 与 HalluAudio 为何不能承载本实验；附录 E 记录判分器选型与 93 题人工校准及作用域修正；附录 F 论证 30 秒窗口的架构来源；附录 H 给出 16 格探测网格与分组必要性；附录 J 完整列出规模、单模型族、单合成器与仅两种提示词等边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.29393v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：214题双生配对固定问题只换音源，级联幻觉率从11.1%升至65.9%而端到端不动，提供配对因果证据。

- 核心优势：冻结提示表示上训练岭回归探针，按段落分组交叉验证并统一30秒截断对齐证据，防泄漏设计严密。

- 核心优势：提示末位置第16层探针在235条不可答题上AUROC达0.773，显著高于语义熵0.506并揭示92%自信编造机制。

- 主要短板：诊断集仅100条且探测评估依赖25个负例致区间宽并带16选1挑选乐观，且限Qwen同尺寸单合成器英文朗读。

- 主要短板：探针仅报告AUROC检测质量而未给出弃权门工作曲线，且无端到端延迟吞吐显存实测，落地未经验证。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
