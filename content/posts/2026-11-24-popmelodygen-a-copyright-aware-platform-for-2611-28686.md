---
title: "PopMelodyGen: A Copyright-Aware Platform for Controllable Pop-Melody Generation"
date: 2026-11-24
draft: false
tags: [符号音乐生成, 规则与词典方法, Transformer, 数据集]
categories: [论文速递]
description: "针对可再分发流行旋律数据稀缺，PopMelodyGen 用规则合成预训练加少量许可 RWC 适应实现可控生成，Real-FT 以 MOS 3.548 与 48.3% 偏好领先但客观可控性小幅回落且风格覆盖仍有限"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28686"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "版权审慎的可控流行旋律生成：合成预训练与少量真实适应的平台实践"
paper_digest_original_title: "PopMelodyGen: A Copyright-Aware Platform for Controllable Pop-Melody Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28686v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28686v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28686v1.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"method","id":"method.rule-based","label":"规则与词典方法"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "规则与词典方法"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对可再分发流行旋律数据稀缺，PopMelodyGen 用规则合成预训练加少量许可 RWC 适应实现可控生成，Real-FT 以 MOS 3.548 与 48.3% 偏好领先但客观可控性小幅回落且风格覆盖仍有限"
paper_digest_reader_sections: [{"heading":"可分发流行旋律数据稀缺带来的可复现性瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四阶段流水线如何把规则知识与神经生成衔接起来","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"专家合成器怎样用模板与乐理规则造出带标注旋律","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"事件编码与两阶段训练如何保留可控性","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"三后端客观指标与 30 人听测共同指向的适应效果","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"合成规模与回放比例的取舍如何决定最终配置","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"版权边界、复现前提与何时尝试该范式","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Di Lu"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xinran Zhang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Qingwen Zhou"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Yan Gao"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Yuan Zhang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xiaoqing Wang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Yuming Sun"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xiaobing Li"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China","Department of Computer Science and Technology, Tsinghua University"],"name":"Maosong Sun"}]
paper_digest_abstract_sha256: "10f05e2dca8e8ab7c9203eca55df0309c2298c5b40cd59e09918c23fe5eaf8e4"
paper_digest_sidecars: {"citation.bib":{"sha256":"6074722904858a47a05f53d5176e7d7c9937ee5a2e7d25e01a90405ee61ce743","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28686/citation.bib"},"citation.json":{"sha256":"0817afaac3714eb8120f14a7464b173895133653cce2182bd8f223d65d34669c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28686/citation.json"},"citation.ris":{"sha256":"710f982b4e9f10219b287a44f54e2afc9ffa80bd8222c2ab25cf94b726263e20","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28686/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6c68623e5c989a8bd34b0101a0a72f38b00440d44178362f4a1d20aa3fb6565a","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28686/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "8eaaf6921f3f94f7effe7d4115def11bcbf0c4552ccfc2062c383d560e06ebb3"
paper_digest_api_reader_plan_sha256: "2b83fbe188824f7ae7e032248f6e23886faf26bbc9de424ecbc866bd4774bb1e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6c7f5a976a24554e9edc858a64cb45499f7a27471f963fdb5a59a783dbd3436e"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "de979a90a16cc2a216f84f62ac54ac78c96a6b1a360527d6946d22ac808d1645"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f3562750454f2be3f33a2394d1a5c5eebad229708c7bb5da2859f7d620f24927"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9fa0f7551ae45d90751a8edd458627f4bf5f42c439ce71e990c437028b9f418e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 版权审慎的可控流行旋律生成：合成预训练与少量真实适应的平台实践

> 英文题目：*[PopMelodyGen: A Copyright-Aware Platform for Controllable Pop-Melody Generation](https://arxiv.org/abs/2611.28686v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [符号音乐生成](/audio-paper-digest-blog/papers/?concept=task.symbolic-music)
- **研究方法**：[规则与词典方法](/audio-paper-digest-blog/papers/?concept=method.rule-based)；[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 6.9/10 | 技术严谨 7.1/10 | 实验充分 6.6/10 | 清晰度 7.0/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 5.2/10
>
> 发表/录用标记：AAAI 2027


## 👥 作者与机构

- Di Lu：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xinran Zhang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Qingwen Zhou：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Yan Gao：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Yuan Zhang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xiaoqing Wang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Yuming Sun：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xiaobing Li：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Maosong Sun：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China；Department of Computer Science and Technology, Tsinghua University

## 📌 核心摘要

**问题与瓶颈：** 可控流行旋律生成需要把调式、速度类型、声部音区、曲式结构与和弦进行等条件映射为符号旋律，通常以 MIDI 文件为载体记录音高、位置与时值。主流神经路线依赖大规模真实流行语料学习自然旋律形态，但商用流行歌曲难以大规模再分发，POP909 与 RWC 等流行指向数据集在规模与条件覆盖上不足，更大的可再分发符号语料 PDMX 又不是为可控流行旋律预训练设计，可复现开发因此缺少合适底座。

**核心思路与方法架构：** 与直接在真实语料上训练可控生成基线相比，本文的增量是用专家合成器的大规模规则合成预训练替代大规模真实预训练，保留解码器专用变换器（decoder-only Transformer）的自回归学习，再用小规模授权真实语料加合成重放做改编。合成器依次实例化全局设置、18 种曲式模板、按段落与速度类型组织的 201 个和弦进行模板、在八分音符网格上的乐句节奏型，以及强弱位置分两步的音高采样，输出旋律 MIDI 文件与结构化元数据。上述 MIDI 与元数据对被线性化为事件词元序列，前缀为全局控制词元，每小节包含段落与和弦信息，其后为音高、位置与时值的音符事件，6 层、512 维、8 头、上限 1,300 的变换器先在 100k 条合成数据上做下一词元预测得到 Synth-Base，再以 847 个 RWC 改编样本混合 1/2 重放合成样本按 2:1 在更低学习率下继续训练得到 Real-FT。推理时每小节边界注入指定和弦词元引导后续音符解码，平台生成整曲后提供鼓、贝斯、钢琴与吉他伴奏试听与导出，同时支持按条件批量构造标注数据集。

**关键实验与核心代价：** 客观评测在 12 个调 × 3 种速度类型 × 2 种音区 × 2 种结构族 × 6 种和弦进行 × 每条件 5 个样本的网格下，让专家合成器、Synth-Base 与 Real-FT 各生成 4,320 条，共 12,960 条。和声贴合率 HAR 越高越好 ↑ 与终止式贴合 CAD 越高越好 ↑ 衡量控制跟随，Synth-Base 的 HAR 为 0.998、CAD 为 0.893，接近专家参考的 1.000 与 1.000，Real-FT 的 HAR 为 0.983、CAD 为 0.834，向 RWC 真实参考的 0.898 与 0.798 移动。在 30 位参与者对 6 组提示下 3 个系统共 18 首作品打分的 5 分制人评中，Real-FT 的 MOS 越高越好 ↑ 为 3.548 ± 0.057，高于最强可比基线 Synth-Base 的 3.244 ± 0.064，专家为 3.231 ± 0.059，三选一偏好率 Best-of-three 越高越好 ↑ 同向为 48.3%，高于 Synth-Base 的 26.1% 与专家的 25.6%。消融显示 10k 到 100k 带来大幅提升而 300k 的 CAD 回落至 0.828，纯真实微调的 CAD 跌至 0.320 而 2:1 重放恢复至 0.834。代价是真实改编仅源自 98 个仅旋律半曲，风格与结构覆盖有限，合成规则简化限制了多样性，平台未报告时延或实时率。

**适用边界与深读导览：** 结论成立于固定 4/4 拍、12 个大调、60 秒至 180 秒、八分音符量化、符号旋律的范围内，不含歌词、演唱与习得式多声部编配，伴奏仅用于试听。12,960 条生成与 RWC 参考的音程 n 元最近邻相似度均值为 0.061、最大值为 0.336，人工抽查最高分对未发现明显近似复制，但作者明确这只是经验检查而不构成法律保证。欲深究合成规则、词元化与损失、重放权衡与人评协议，可查阅下文方法、附录与评测表格对应章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/ld04080106/PopMelodyGen> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 可分发流行旋律数据稀缺带来的可复现性瓶颈

符号化流行旋律的可分发数据稀缺是本文的起点。商业流行歌曲受版权限制，难以大规模再分发，导致可实际部署与可复现的音乐生成研究缺少合适底座。已有可控符号生成探索了不同架构，但训练仍依赖语料。POP909 与 RWC 等面向流行的符号数据规模与条件覆盖有限，PDMX 等更大规模可复用符号语料则并非为可控流行旋律预训练设计。

任务输入是一组显式音乐条件，包括 tempo 类别、调性与调式、人声声部、歌曲结构与和弦进行，输出是流行风格旋律的 MIDI 符号轨道及其结构化元数据，平台还会配鼓、低音、钢琴与吉他伴奏供试听与导出。难点在于规则系统可控但分布偏离人类创作，神经模型需要大数据却拿不到可再分发的真实流行旋律，小规模许可语料直接微调又容易过拟合并且削弱条件跟随。

PopMelodyGen 的选择是用规则合成解决规模与来源可审计问题，再用少量许可真实流行数据校正自然度。专家合成器只依据通用乐理与音乐人整理的结构、和声与节奏模板生成，不摄入或改写已有流行旋律，每条样本来源可查。神经模型先在合成语料上预训练学习可控自回归生成，再与合成回放混合做真实流行适应，最终以网页平台同时服务创作者交互与研究者批量建库。论文强调这种版权审慎不等于法律意义上的安全保证。

### 四阶段流水线如何把规则知识与神经生成衔接起来

平台按四阶段组织，合成数据生成、合成预训练、真实流行适应与交互部署依次衔接，对应 3 种可切换生成后端。专家规则后端直接输出旋律，Synth-Base 是合成预训练后的检查点，Real-FT 是经过真实流行适应后的检查点。用户在网页端选定音乐条件与后端，系统返回 MIDI 供可视化、播放与导出，研究者则可批量构造带标注符号数据集。

#### 与既有路线的增量和信号对象

与依赖大规模真实流行语料的路线相比，改动集中在数据来源与两阶段训练。数据侧保留 MIDI 符号形式与事件编码惯例，替换为大规模规则合成旋律做预训练主体，真实流行侧只引入经许可的 RWC 流行音乐库的少量预处理旋律。模型侧保留 6 层 decoder-only Transformer 的自回归形态，替换训练流程为合成预训练加带回放的适应，避免小数据直接微调冲掉可控性。信号对象始终是符号级 MIDI，不涉及波形采样率与码率，节奏量化在八分音符网格上进行，结构时长限定在 60 秒至 180 秒。

要一次看清数据与模型的走向，可沿四阶段方框的箭头阅读，从合成语料库到预训练模型，再到混合真实语料的微调，最后到网页端的双模式输出，注意合成库、基座模型与适应模型在何处落盘，以及用户选择在何处分流为单曲与批量。

[![原论文 Figure 1：Overview of the PopMelodyGen pipeline, from synthetic data generation to interactive deployment.](https://arxiv.org/html/2611.28686v1/fig1_popmelodygen2_v2.3.png)](https://arxiv.org/html/2611.28686v1/fig1_popmelodygen2_v2.3.png)

*论文图 1：四阶段流水线示意：从合成语料库到预训练、真实适应再到网页双模式部署（原论文 Figure 1）。*

流程从左侧专家合成器出发，生成 MIDI 与元数据构成的合成语料库。第二阶段用该语料预训练 decoder-only Transformer，得到 Synth-Base 模型。第三阶段混入真实流行语料做微调，得到 Real-FT 模型。第四阶段用户经由 Web UI 选择 Expert 合成器、Synth-Base 或 Real-FT，输出分流为创作者单曲模式与研究者批量模式，分别对应单首 MIDI 试听导出与多首 MIDI 集合下载。

#### 从条件到可播放输出的走向

一条输入可理解为选定的全局条件组合，例如 C 大调、MID 速度类、Female 声部、A8-A8-C8-B8-B8 结构与分段和弦进行。专家侧依次实例化全局设置、段落结构、小节和声、短语节奏与音高，落为旋律 MIDI 与 JSON 元数据。神经侧将 MIDI 与元数据线性化为事件 token 序列，输入 Transformer 做自回归预测，推理时在每小节边界注入指定和弦 token 以约束后续音符。原文披露最大上下文长度为 1,300，隐状态维度为 512，注意力头数为 8，其余中间张量形状与上下采样帧率未披露，不做补算。

### 专家合成器怎样用模板与乐理规则造出带标注旋律

专家合成器的目标是造出大规模、多样且可控的预训练语料，输入可控条件与输出标注都围绕同一套模板体系展开。系统按全局设置、结构、和声、节奏与音高的顺序实例化，最终输出旋律 MIDI 文件与结构化元数据，元数据记录速度、调性、声部、段落边界与和声，来源完全可检查。

#### 全局结构与和声模板

全局条件包括 Slow、Mid 与 Fast 三档 tempo 类别、调性与调式、人声声部、歌曲结构与和弦进行，预训练实现枚举 12 个大调并固定 4 / 4 拍。结构族为 Intro、Verse、可选 Pre-chorus、Chorus 与 Outro，其中 Intro 与 Outro 固定 8 小节，Pre-chorus 固定 8 小节，Verse 与 Chorus 各有 8 小节与 16 小节候选，3 种 Verse 形态、两种 Pre-chorus 取舍与 3 种 Chorus 形态笛卡尔积形成 18 种结构模板，并按 60 秒至 180 秒的时长范围过滤。

和声模板由音乐人按段落类型、tempo 类别与段落长度整理，共 201 个进行模板，存于 pop_chordprog.py。16 小节及以上段落选择更长进行或重复短进行，Chorus 进行复用于 Intro 与 Outro。在真实流行标注协议中 Intro 与 Outro 被视为固定 8 小节区域，不要求和弦标注，这与合成侧的模板复用逻辑相互配合，保证条件覆盖而无需复制已有歌曲。

要理解规则如何逐层收窄选择，可从上到下阅读合成器示意，先看左侧 5 类输入条件如何进入全局设置，再看结构、和声、节奏与音高四层方框如何依次增加五线谱上的信息密度，最后看右上输出如何同时落为 MIDI 与 JSON，注意每层新增的约束类型。

[![原论文 Figure 2：Expert synthesizer for synthetic melody generation.](https://arxiv.org/html/2611.28686v1/fig2_expert.drawio_5.png)](https://arxiv.org/html/2611.28686v1/fig2_expert.drawio_5.png)

*论文图 2：专家合成器逐层实例化示意：全局设置、结构、和声、节奏与音高依次叠加并输出 MIDI 与 JSON（原论文 Figure 2）。*

示意顶部将 tempo 类别、调式、结构、声部与和弦进行汇入全局设置，示例为 1 = C 与速度 80。向下每层都在同一段落框架上叠加新约束，结构层划分 Intro、Verse、Chorus 与 Outro 的小节位置，和声层标注各段罗马数字级数，节奏层在 Verse 位置落出八分音符时值点，音高层进一步把符头放到具体音高。黑色箭头表示自上而下的实例化顺序，最底层输出经右侧回线同时生成 MIDI 与 JSON。

#### 节奏与音高的两阶段采样

节奏在八分音符网格上按短语生成，每段含 4 个短语，8 小节段用 2 小节短语，16 小节段用 4 小节短语。2 小节短语音节数采自 5 至 13，4 小节短语采自 8 至 18，再分配给 Pickup、Full、Unfull 与 Ending 4 类组件。Pickup 可从长休止弱起，Full 稠密无休止，Unfull 可从短休止进入，Ending 尾部可留休止形成终止空间，每类与音节数对应的全部八分音符型已预枚举为查找表，实现见 pop_rhythm.py，生成时按组件序列与音节分配随机查表抽取。

音高分两步生成，先定强弱位置再先强后弱采样。强拍定义为每小节正拍与每短语最后一音以保证收束，但强拍上的倚音仍判弱并把强位让给后一音。强音在音域、和声与音程转移约束下采样，弱音群再按调式、和弦、前后强音与群长度用手工规则填充。强位置偏向和弦音，弱位置偏向音阶音，从而兼顾和声贴合与人声可唱性，完整转移表与规则见 pop_melody.py。

### 事件编码与两阶段训练如何保留可控性

神经侧把合成 MIDI 与元数据转为事件 token，再用同一词表完成预训练与适应。训练分两段，推理另有一条小节级和弦约束路径，规则后端不走神经推理。两阶段共用 6 层 decoder-only Transformer，上下文与优化设置保持可比，仅数据构成与学习率不同，下文按编码、目标与推理顺序展开。

#### 事件编码与条件前缀

编码把一条旋律与其元数据线性化为事件 token 序列，序列以全局控制 token 开头，记录调式、tempo 类别、声部与歌曲结构，每小节再含段落与和弦信息，其后是音符事件的音高、起音位置与时值。这种前缀加分节事件的设计使 decoder-only Transformer 能在自回归中始终看到条件，合成与适应两阶段共用同一分词器与事件词表。

阅读编码示意时先看最左音乐控制 token 与最右结束符框住的整体，再看中间按小节重复的蓝色小节事件与粉色音符事件，留意虚线框如何把控制前缀与音乐事件区分开，以及省略号表示的多小节展开方式，这有助于理解前缀如何约束后续生成。

[![原论文 Figure 4：Event-based tokenization with a control-token prefix followed by bar-level and note-level events.](https://arxiv.org/html/2611.28686v1/fig3_tokennizer.drawio_5.svg)](https://arxiv.org/html/2611.28686v1/fig3_tokennizer.drawio_5.svg)

*论文图 4：事件编码示意：左侧音乐控制前缀与按小节展开的小节事件和音符事件组成完整序列（原论文 Figure 4）。*

示意最左为 BOS 起始与 KEY、MODE、TEMPO、GENDER、STRUCT 等控制 token，中间为重复的 BAR 级事件块，每块含 SECTION、BAR 与 CHORD 的蓝色 token，其后跟 PITCH、POS 与 DUR 等粉色音符 token，省略号表示多小节展开，最右为 EOS。推理时用户指定的全局条件即以这段前缀初始化解码，和弦 token 则在每小节边界处按需插入。

#### 预训练目标与回放混合

预训练目标是对合成语料做教师强制的下 1 token 交叉熵。记第 i 条 token 化旋律为 \(xi\)，长度为 \(Ti\)，首 token 为 BOS，\(xi,t\) 为第 t 个事件，\(xi,<t\) 为此前全部事件，\(theta\) 为 Transformer 参数，该记号覆盖全局前缀、小节事件与音符事件。

\[\mathcal{L}_{\mathrm{pretrain}}(\theta)=-\sum_{i}\sum_{t=1}^{T_{i}}\log p_{\theta}(x_{i,t}\mid x_{i,<t}).\]

该形式把可控生成转化为长序列条件概率建模，模型只需学会在给定控制前缀与已生成事件下预测下一事件。对数几率经 softmax 归一后取对数，预测越准则该步损失越小，若某步概率趋近于 1 则贡献趋近于 0，若趋近于 0 则损失急剧增大并产生大梯度。梯度经反向传播更新 Transformer 参数，学到专家合成器的和声、终止与结构行为，得到 Synth-Base 检查点，合成预训练覆盖多调性、速度、结构、声部与和弦进行。

适应阶段为防止小规模真实流行数据冲掉可控性，将全部真实样本与按比例采样的合成回放混合。记 \(D_real\) 为真实集合，\(D_syn\) 为合成全集，\(rho\) 为回放比例，\(D_syn(rho)\) 为采样子集，\(D_adapt(rho)\) 为混合后的适应集，\(rho\) 越大回放占比越高，两阶段共用同一分词器与事件词表。

\[\begin{split}\left|\mathcal{D}_{\mathrm{syn}}^{(\rho)}\right|&=\rho\left|\mathcal{D}_{\mathrm{real}}\right|,\\ \mathcal{D}_{\mathrm{adapt}}^{(\rho)}&=\mathcal{D}_{\mathrm{real}}\cup\mathcal{D}_{\mathrm{syn}}^{(\rho)}.\end{split}\]

该构造的直觉是用合成样本锚住已学到的控制行为，再让真实样本把分布拉向人类流行旋律。\(rho\) 为 0 即纯真实微调，可控性最易丢失，\(rho\) 增大则和声与终止保持更好，但模型更接近合成预训练行为。混合集仍以交叉熵训练，梯度同时来自真实与回放样本，从而在自然度与条件跟随之间形成可调权衡。

#### 结构超参与推理执行路径

两阶段共用同一轻量结构，具体超参与数据划分如下表所示，预训练只用合成样本，适应阶段用真实加回放，优化器与正则设置保持一致，仅学习率下调一个数量级，上下文长度足以容纳多小节展开，下表是复现时最直接的对照依据。

| Item | Pretraining | Adaptation |
| --- | --- | --- |
| Max context length | 1,300 | 1,300 |
| Hidden size | 512 | 512 |
| Decoder layers | 6 | 6 |
| Attention heads | 8 | 8 |
| Dropout | 0.1 | 0.1 |
| Optimizer | AdamW | AdamW |
| Learning rate | 3×10−4 | 3×10−5 |
| Batch size | 16 | 16 |
| Epochs | 20 | 20 |
| Train/val/test | 8:1:1 | 8:1:1 |
| Training examples | Synthetic only | Real-pop + replay |

最大上下文 1,300 容纳全局前缀加多小节事件，6 层 512 维 8 头结构规模较小，dropout 为 0.1，AdamW 优化下预训练学习率为 3×10−4，适应为 3×10−5，批大小均为 16，轮数均为 20，训练、验证与测试按 8 比 1 比 1 划分。适应样本由 98 首预处理旋律经 12 调移调扩增得到 847 个 token 化样本。推理时用户全局条件初始化自回归解码，并在每小节边界前注入对应和弦 token 以引导后续音符事件，规则 Expert 后端则沿用自身和声与音高规则而不经过神经解码。

### 三后端客观指标与 30 人听测共同指向的适应效果

客观比较在统一提示网格下进行，每后端在 12 个调、3 档 tempo、2 种声部、2 种结构族与 6 种和弦进行组合下各生成 5 条，共 4,320 条，三系统合计 12,960 条。指标含 HAR 和声贴合率、CAD 终止贴合率、RGL 合唱与主歌音区抬升、SMR 级进比例，其中 HAR 与 CAD 越高表示越贴合专家约束，RGL 与 SMR 应相对 RWC 真实流行参照解读。阶段间共用同一分词器与 6 层 Transformer 规模，公平性依赖同网格采样与评测代码中的阈值聚合。

#### 最终三后端的客观位置

最终检查点比较把 Expert、Synth-Base 与 Real-FT 并置，并以 RWC 真实流行参照标定风格方向，四项指标的单调性含义并不相同，其中两项越高越好，另两项需相对参照解读，具体阈值依赖评测代码，该表是判断预训练是否复刻专家行为与适应是否向真实移动的核心依据。

| System | HAR ↑ | CAD ↑ | RGL | SMR |
| --- | --- | --- | --- | --- |
| Expert | 1.000 | 1.000 | 5.992 | 0.634 |
| Synth-Base (100k) | 0.998 | 0.893 | 5.881 | 0.612 |
| Real-FT (2:1) | 0.983 | 0.834 | 4.946 | 0.663 |
| RWC real-pop reference | 0.898 | 0.798 | 3.231 | 0.724 |

Synth-Base 的 HAR 为 0.998，CAD 为 0.893，RGL 为 5.881，SMR 为 0.612，紧贴 Expert 的 1.000、1.000、5.992 与 0.634，表明 Transformer 已复刻专家合成器的音乐特性。Real-FT 的 HAR 为 0.983，CAD 为 0.834，RGL 为 4.946，SMR 为 0.663，向 RWC 参照的 0.898、0.798、3.231 与 0.724 一致移动，但未完全到达，代价是部分和声与终止可控性回落，仍保留大部分预训练学到的跟随能力。RGL 与 SMR 不作越高越好解读。

四面板折线把三后端与两参照放在同一纵轴下比较，横轴从 Expert 经 Synth-Base 与 Real-FT 到真实流行，虚线标出两参照位置，可直观看到控制指标的微降与风格指标的迁移幅度，以及 Real-FT 是否落在中间过渡带，阅读时先看纵轴范围再看折线斜率，避免把风格位移误读为质量高低。

![原论文 Figure 8：Objective comparison of Expert, Synth-Base, and Real-FT across four symbolic metrics.](/audio-paper-digest-blog/images/papers/2611.28686/figure-8-5661dc2785230749.png)

*论文图 8：三后端与两参照在和声贴合、终止控制、音区抬升与级进比例四项指标上的对比折线（原论文 Figure 8）。*

左上 HAR 面板三后端维持在 0.98 以上再跌向真实参照的 0.898，右上 CAD 从 1.000 经 0.893 与 0.834 走向 0.798。左下 RGL 从 5.992 经 5.881 跌至 4.946 再到 3.231，迁移幅度最大，右下 SMR 从 0.634 经 0.612 升至 0.663 再到 0.724。灰色与绿色虚线分别对应专家与真实流行参照，Real-FT 在四图上都位于中间过渡带，证实适应在保留可控的同时向真实风格靠近。

#### 听测与近似重复检查

人工评价用 30 位参与者对 6 组提示共 18 首生成歌曲打分，每组内三系统并列比较，采用 5 分制 MOS 均值加标准误与组内三选一偏好率，该设计直接反映感知质量而非代理分数，样本量与分组方式决定结论外推边界。

| System | MOS ↑ | Best-of-three ↑ |
| --- | --- | --- |
| Expert | 3.231 ± 0.059 | 25.6% |
| Synth-Base | 3.244 ± 0.064 | 26.1% |
| Real-FT | 3.548 ± 0.057 | 48.3% |

Real-FT 的 MOS 为 3.548 ± 0.057，三选一偏好率为 48.3%，高于 Expert 的 3.231±0.059 与 25.6%，以及 Synth-Base 的 3.244±0.064 与 26.1%。听感收益的代价是客观 HAR 与 CAD 的小幅回落，且样本仅 18 首，标准误与偏好率的统计外推有限，未覆盖多风格与长时结构。评价依赖人工主观听测而非神经代理指标，结论更贴近感知但成本更高。

版权审慎检查对 12,960 条生成旋律提取移调不变的音程 n-gram 并检索 RWC 参照集中的最近邻，平均最近邻相似度为 0.061，最大值为 0.336，最高分对经人工核查未发现明显近似重复。该分析基于有限真实参照集，只能提示近似复制风险而不能作为法律保证，论文亦明确不宣称版权安全。

### 合成规模与回放比例的取舍如何决定最终配置

以下两组消融沿用同一网格与指标定义，分别回答合成量给多少合适与回放给多少合适，最终配置的选择直接来自这两条曲线，理解其权衡有助于避免盲目扩大数据或误用纯真实微调，两组都以专家参照为上限并对照真实流行参照，重点看控制保持与风格迁移的此消彼长。

#### 合成规模何时饱和

合成规模消融固定模型与训练流程，仅改变合成预训练量，观察 HAR 与 CAD 随 10k 至 300k 的变化并以专家参照为上限，该对比回答预训练数据量对控制跟随的回报何时耗尽，四档覆盖一个数量级以上的跨度，足以看到快速爬升与平台期。

| System | HAR ↑ | CAD ↑ |
| --- | --- | --- |
| Expert reference | 1.000 | 1.000 |
| Synth-10k | 0.914 | 0.543 |
| Synth-30k | 0.991 | 0.834 |
| Synth-100k | 0.998 | 0.893 |
| Synth-300k | 0.998 | 0.828 |

从 10k 到 100k 两项指标大幅爬升，Synth-100k 的 HAR 为 0.998，CAD 为 0.893，已接近专家参照的 1.000。300k 的 HAR 停在 0.998 未再提升，CAD 回落到 0.828，表明继续扩大规则合成量不再带来和声收益且终止控制反而受损。论文据此选定 Synth-100k 作为 Synth-Base，代价是 300k 档的额外合成与训练开销未转化为质量。

#### 回放比例的权衡

适应阶段固定真实数据而改变合成回放比例，比较纯真实微调与 3 种混合比例的 HAR 与 CAD，并同时对照专家参照与真实流行参照，该对比揭示保持控制与靠近真实分布之间的可调权衡，回放越多越接近合成行为，越少则越接近小数据适应的风险区。

| Real-pop:synthetic replay | HAR ↑ | CAD ↑ |
| --- | --- | --- |
| 1:0 (real-only) | 0.917 | 0.320 |
| 2:1 (final Real-FT) | 0.983 | 0.834 |
| 1:1 | 0.987 | 0.844 |
| 1:2 | 0.994 | 0.890 |
| Expert reference | 1.000 | 1.000 |
| Real-pop reference | 0.898 | 0.798 |

纯真实微调的 HAR 为 0.917，CAD 骤降到 0.320，说明小数据直接微调严重削弱终止控制。加入回放后 CAD 回升到 0.834 至 0.890，HAR 回到 0.983 至 0.994，回放越多越接近合成行为。最终 Real-FT 取 2 比 1，因其在向真实参照靠近的同时保留较强和声与终止可控性，更大回放虽指标更高但会削弱向真实分布的迁移，论文把该取舍留给后续按应用调节。

### 版权边界、复现前提与何时尝试该范式

平台落地为网页双模式，创作者与研究者共用同一批后端与条件体系，但在交互目标与输出形态上分开。理解其版权边界、复现前提与选型建议，有助于把合成预训练加小规模适应的范式用在合适的场景，避免误读客观指标或高估风格覆盖。

#### 版权审慎不等于安全与风格边界

论文把自身定位为版权审慎而非法律安全，合成语料只用通用乐理与元素级模板而不摄入改写已有流行旋律，真实流行仅经许可的 RWC 库引入。相似度检查用音程 n-gram 最近邻在有限参照集上排查风险，最高分对未见明显重复，但参照有限且方法只看局部移调不变片段，不能构成法律保证。

风格与建模边界同样明确，专家侧依赖预设结构、201 个和弦模板与简化的短语规则，可控可复现但多样性受限。真实适应只用少量许可旋律经移调扩增得到适应样本，覆盖的风格与结构有限。神经模型只做符号旋律，平台的鼓、低音、钢琴与吉他伴奏仅供试听，歌词、歌声与学习型多轨编配不在建模范围。

演示页提供两条互补路径，创作者模式选后端并指定调式、tempo 类别、声部、结构与和弦进行，生成带伴奏旋律即时试听，可同条件换后端再生比较并导出完整 MIDI、旋律 MIDI、版权说明与元数据。研究者模式配置音乐条件范围，例如 12 调乘 3 档 tempo，批量生成带标注 MIDI 与元数据包直接下载，同一系统兼顾创作工具与可复现实验的数据工厂。

#### 复现前提与选型建议

复现需区分三件事，论文给出代码链接与演示视频链接，第三方存档本次显示可达，但这只证明链接提到可达而不证明作者已开源。合成侧实现分布于 pop_chordprog.py、pop_rhythm.py 与 pop_melody.py，评测侧的阈值与聚合依赖评测代码。真实侧需自行获取许可 RWC 流行音乐库并按八分音符量化、跨小节切分与多调移调复现适应样本，前端为 Node.js 经后端 API 推理，GPU 型号、训练耗时、RTF 与显存原文未披露。

若可再分发真实数据不足但能请音乐人整理模板，该范式值得尝试。复现第一步建议跑通专家合成器生成小批量 MIDI 与元数据，再按 1,300 上下文与两阶段学习率训出 Synth-Base 并复算 HAR 与 CAD。落地前需补更大风格覆盖、更多听众与曲目的主观验证，以及更大参照集上的近似重复排查，不把客观指标或代理分数当作版权结论。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：符号 MIDI 为唯一信号对象，无波形采样率与码率；固定 4/4 拍，八分音符网格量化，歌曲时长 60 秒至 180 秒；最大上下文 1,300；RTF、延迟与显存原文未披露
- **训练与评测数据**：合成侧用专家合成器生成 100k 旋律做预训练，另有 10k、30k、300k 用于规模消融；真实适应侧用许可 RWC 流行音乐库经预处理得 98 首半曲旋律再经 12 调移调扩增为 847 个 token 化样本；客观评测每后端按 12 调乘 3 速度类乘 2 声部乘 2 结构族乘 6 和弦进行各 5 条生成 4,320 条，三系统合计 12,960 条；人工听测 30 人评 6 组共 18 首
- **算力与训练耗时**：原文未披露 GPU、TPU 型号与数量及训练耗时；仅说明 Web 界面用 Node.js 实现并部署于专用服务器，模型推理经后端 API 提供
- **核心超参数与配置**：6 层 decoder-only Transformer，隐状态 512 维，8 注意力头，dropout 0.1，AdamW 优化，预训练学习率 3×10−4，适应学习率 3×10−5，批大小 16，轮数 20，训练验证测试 8 比 1 比 1，最大上下文 1,300，最终回放比例为真实比合成 2 比 1
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存；推理为自回归解码，用户全局条件初始化并在每小节边界注入和弦 token，规则 Expert 后端走自身规则；平台提供鼓、低音、钢琴与吉他伴奏试听
- **开源产物与协议状态**：论文正文给出 <https://github.com/ld04080106/PopMelodyGen> 代码链接与演示视频链接，第三方存档本次显示代码链接可达，这只证明链接被提及且可达而不证明作者已开源；合成实现见 pop_chordprog.py、pop_rhythm.py 与 pop_melody.py，评测阈值与聚合依赖评测代码，RWC 需自行获取许可
- **附录与补充材料要点**：附录详述专家合成器五层实例化、合成语料构造与 RWC 八分音符量化移调流程、事件编码与两阶段训练、提示网格与 HAR、CAD、RGL、SMR 定义、规模与回放消融、30 人 MOS 与偏好、音程 n-gram 近似重复检查及风格与多轨建模局限

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.28686v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：专家合成器以18种结构与201个和弦模板生成可审计来源的大规模合成语料。

- 核心优势：12960条系统网格评测与合成规模及重放比例直接消融支撑控制权衡结论。

- 核心优势：30人人评中Real-FT以3.548分与48.3%偏好率一致领先，方向与客观指标同向。

- 主要短板：未与任何外部可控生成系统同表对比，最优性无法跨方法核验。

- 主要短板：人评仅6组提示18首作品且未报告听众构成与显著性检验，验证规模有限。

- 主要短板：平台未报告时延吞吐与硬件规格，缺乏端到端部署实测支撑。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
