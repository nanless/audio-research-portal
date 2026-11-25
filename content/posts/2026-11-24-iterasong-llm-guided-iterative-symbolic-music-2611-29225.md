---
title: "IteraSong: LLM-Guided Iterative Symbolic Music Creation in a Web DAW"
date: 2026-11-24
draft: false
tags: [符号音乐生成, 工具增强与约束解码, 规则与词典方法, 多语言]
categories: [论文速递]
description: "针对单次生成难以支撑反复听改对比的作曲需求，IteraSong 以持久 SongProject 与分层 MCP 编辑基元组织生成试听编辑闭环，在 20 个十轮会话中取得 145/160 的任务完成与 40/40 的安全拒止，代价是结论只在规则流行乐功能正确性内成立而未验证听感与泛化。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29225"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "IteraSong 以持久工程组织多轮符号音乐编辑"
paper_digest_original_title: "IteraSong: LLM-Guided Iterative Symbolic Music Creation in a Web DAW"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29225v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29225v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29225v1.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"method","id":"method.rule-based","label":"规则与词典方法"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对单次生成难以支撑反复听改对比的作曲需求，IteraSong 以持久 SongProject 与分层 MCP 编辑基元组织生成试听编辑闭环，在 20 个十轮会话中取得 145/160 的任务完成与 40/40 的安全拒止，代价是结论只在规则流行乐功能正确性内成立而未验证听感与泛化。"
paper_digest_reader_sections: [{"heading":"单次生成与多轮听改之间的断层","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"以持久工程为中心的生成试听编辑闭环","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"分层基元、安全门与版本提交如何限定改动","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"20 个十轮会话中完成率与拒止行为的分布","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"三段集中失效与一条十轮轨迹的依赖链","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"规则流行乐原型的适用边界与复现起点","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Di Lu"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xinran Zhang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Yan Gao"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Yuan Zhang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xiaoqing Wang"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Qingwen Zhou"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China"],"name":"Xiaobing Li"},{"affiliations":["Department of AI Music and Music Information Technology, Central Conservatory of Music","Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China","Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China","Department of Computer Science and Technology, Tsinghua University"],"name":"Maosong Sun"}]
paper_digest_abstract_sha256: "3b300a19d9607f346c777aede4989214386e6bb95fc277c2be3d741579fb0278"
paper_digest_sidecars: {"citation.bib":{"sha256":"af91e716f25402b090a514e29c1c12fed63527fe87d164d021a3e329a42d3eef","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29225/citation.bib"},"citation.json":{"sha256":"c677a51bb933572437a56218f531fd8f77c866b8dd6679df96e6a8ef323fcc8a","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29225/citation.json"},"citation.ris":{"sha256":"6715db7605b6011003c635d736f4c3d475739859020380fdb6b4bac1af16ee23","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29225/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d6793f47f67ff60612e8db7c7360b6a44ceb1006953d71684c6af127eec025bc","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29225/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "94da697436599e29ace6ff0185d56a539280d9e147aa900028180627e4848d25"
paper_digest_api_reader_plan_sha256: "4f82cb1cd22dfd5d777a459ff9b9280bfb12e5f07697ced5f589a152569898f2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e434208dbe7a04c4304f492c25b3c9e34e88b9617fa1aa30cd1db89bededc884"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c348a3284aed74c83eae2c17c7ba1c3d6fd59f38fb8b0fe5e88832d3f4b18df5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ba69991ded9e285ca8a7a8f965c08d1f0b6316c5dd5541653447f031639861a2"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e817378c8bd856b782e093169907898b51cbec34c38698f6495eb272d216e62d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 IteraSong 以持久工程组织多轮符号音乐编辑

> 英文题目：*[IteraSong: LLM-Guided Iterative Symbolic Music Creation in a Web DAW](https://arxiv.org/abs/2611.29225v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [符号音乐生成](/audio-paper-digest-blog/papers/?concept=task.symbolic-music)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)；[规则与词典方法](/audio-paper-digest-blog/papers/?concept=method.rule-based)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.6/10** | 创新 6.2/10 | 技术严谨 6.7/10 | 实验充分 5.3/10 | 清晰度 6.9/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 5.0/10
>
> 发表/录用标记：AAAI 2027


## 👥 作者与机构

- Di Lu：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xinran Zhang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Yan Gao：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Yuan Zhang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xiaoqing Wang：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Qingwen Zhou：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Xiaobing Li：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China
- Maosong Sun：Department of AI Music and Music Information Technology, Central Conservatory of Music；Key Laboratory of Music and Brain Science, Central Conservatory of Music, Ministry of Education, China；Laboratory of AI Music, Central Conservatory of Music, Laboratory of Philosophy and Social Sciences, Ministry of Education, China；Department of Computer Science and Technology, Tsinghua University

## 📌 核心摘要

**问题与瓶颈：** 符号音乐创作处理的是带声部、段落、和弦与音符的多轨乐曲状态，目标是产出可试听且可继续修改的新状态，创作者往往要经过聆听、比较与多轮修订才能定稿。现有符号生成路线擅长一次产出完整片段或对局部空缺做填充，语言模型也能做单轮理解与工具调用，但缺少围绕同一工程的持续记忆，后一次编辑容易触及非目标声部，做坏了也难以干净撤销。这一缺口使自然语言精修停留在孤立调用层面，无法形成生成、试听、编辑与再精修的循环。

**核心思路与方法架构：** 与一次生成后整体重写的路线相比，IteraSong 保留轻量流行乐草稿作为可编辑起点，增量在于用常驻工程状态加分层可控编辑把每一轮请求锚定到明确音乐对象上。用户一键得到带调性、速度、声部分工、段落边界、和弦进行与音符事件的标注草稿，该草稿被规范为符号音乐项目状态 (SongProject) 并在整个会话中保留，测试工程覆盖 11 轨至 12 轨、14 段至 16 段与 6241 个至 8536 个音符事件。用户用中文或英文提出编辑要求后，承担意图解析与动作选择的语言模型 (论文采用 Qwen-Max，未说明微调) 仅负责选择工具，实际改动由工具执行，例如把第 3 轨换成钢琴对应确定性原语 set_instrument，重做 Chorus 2 贝斯对应段落级生成式原语 regenerate_section，调用经模型上下文协议 (Model Context Protocol，MCP) 兼容工具执行。执行前安全模块核查目标是否存在且无歧义、参数合法且操作受支持，不通过则直接拒绝且不改工程，通过则以事务方式产生新版本并记入历史，网页端数字音频工作站 (Digital Audio Workstation，DAW) 以 Node.js 后端呈现谱面并以经 WebAssembly 编译的 FluidSynth 在浏览器内合成播放供试听，撤销则回到明确选定的旧版本。确定性编辑与限定范围的生成式编辑按全局、音轨、段落与小节音符四层组织，观察与播放、停止、跳转、循环、静音与独奏等控制并列，整套串行链路因此只动授权范围。论文未披露 Qwen-Max 参数规模、训练或微调细节与解码参数，语言模型调用按描述为推理期使用。

**关键实验与核心代价：** 功能验证在同源流行乐工程上组织多轮会话，覆盖音轨优先、段落优先、音符优先与混合编辑流程与中文、英文请求，每轮经 Qwen-Max 与实际 MCP 执行链路完成，计分要求每轮达到预期状态且不改授权范围外内容，依赖轮次还须满足前序条件。原文未提供可核对的关键定量结果。代价在于生成后端仍为规则式模板且未评估可听质量，人工主观听测与感知音乐质量评估均未报告，也未与外部基线对比，未披露训练与推理延迟、吞吐或实时率成本。

**适用边界与深读导览：** 上述观察只在流行乐、同源规则式草稿与固定开发流程内成立，作者已说明结果为描述性且不证明泛化，未覆盖更强生成后端、可听回放质量与职业乐手可用性，演示视频可对照观看连续创作、版本回退与试听环节，此处不转述听感。想深究分层原语划分可查方法章节的原语表，想核对逐会话成败与代表性十轮版本变化可查实验章节的关键表与附录，想确认未评估项可查局限章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://youtu.be/XZaHHms5Kl0> → <https://www.youtube.com/watch?v=XZaHHms5Kl0&feature=youtu.be> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单次生成与多轮听改之间的断层

符号音乐生成近年能产出带显式结构的多轨作品，大语言模型也被证明能理解符号音乐并参与推理与生成。但实际作曲很少一次成型，创作者通常要反复聆听、修改、对比与打磨，而非把单次生成当作终点。已有交互系统多聚焦局部补全或结构化作曲，自然语言交互也多停留在单次生成或零散工具调用，尚未把每一轮修改都落在同一工程上形成闭环，这种断层使已确认的编配难以保留。

IteraSong 把输入定义为持久 SongProject 加一句自然语言请求，把输出定义为可试听的新版本工程。SongProject 内含全局调号调式与速度、音轨身份与职能、段落边界、逐音符事件与和弦进行，所有对象都可在网页工作站中可视化并被寻址。用户先一键生成带标注的流行乐草稿，再逐轮发出换音色、再生某段伴奏或微调单个音高的请求，每次被接受的修改都成为下一轮的起点，被拒则保持原状态。

已有路线的瓶颈在于作用域与状态不可控。单次再生会丢弃已确认的编配，局部补全难以同时兼顾全局速度调性、整轨音色、段落和声与单音精修，而缺少安全校验与事务提交的工具调用容易误改授权范围之外的内容，也难以撤销或回退。论文因此把目标收敛为工程级多轮编辑，要求每次只改意图目标、非法请求原样拒止且版本始终一致。

### 以持久工程为中心的生成试听编辑闭环

要看清数据如何从草稿流向可撤销的新版本，可先沿下图从左向右跟随两路箭头。橙色链路从轻量流行乐生成器出发，经归一化得到持久 SongProject 并送入网页工作站，蓝色链路从编辑请求出发，依次经过大语言模型智能体、安全控制、分层编辑基元与状态控制，最终回到同一工程。先把握这一从生成到试听编辑的闭环，再看每步的输入输出与分支汇合位置，注意中间编曲区的段落条与轨道色块正是右侧模块可寻址的对象。

[![原论文 Figure 1：Overall IteraSong architecture for initial draft generation and iterative song editing in the Web…](https://arxiv.org/html/2611.29225v1/fig1_system_v2.3_cropped.png)](https://arxiv.org/html/2611.29225v1/fig1_system_v2.3_cropped.png)

*论文图 1：从轻量流行乐草稿到多轮编辑的完整链路，橙色为初始生成，蓝色为迭代编辑与状态回滚（原论文 Figure 1）。*

图中左侧是轻量流行乐生成器与 SongProject 对象清单，明确列出全局、音轨、段落、音符与和弦 5 类可寻址内容。中间是网页工作站的 Intro、Verse 与 Chorus 段落条，以及 Melody、Bass、Drums 与 Chords 4 类轨道色块，底部示例请求为把第三轨换成钢琴。右侧依次是负责意图接地与动作选择的大语言模型智能体、负责目标与参数校验的安全控制，以及按 Global、Track、Section 与 Bar/note 组织的分层基元，底部状态控制负责提交回滚与版本历史，图例区分橙色初始生成与蓝色迭代编辑。

#### 可寻址草稿从何而来

初始草稿提供器当前使用轻量规则流行乐生成器作为可控试验台，框架也允许接入更强的符号生成模型。生成器给出全局调号调式与速度、音轨身份与职能、段落边界、逐音符事件与和弦进行，归一化为 SongProject 后作为贯穿全程的持久状态。原文未披露采样率、帧率步长与张量维度，因此只能追踪符号对象在模块间的流转，无法给出 1 秒波形的形状变化，通道对应音轨数而非音频声道。

#### 一轮编辑走过哪些模块

用户在网页工作站试听草稿后提交自然语言请求，大语言模型不直接改原始符号数据，而是先识别音乐目标与操作，再经由 MCP 兼容工具调用对应基元。例如把第三轨换成钢琴映射到确定性基元 set_instrument，再生 Chorus 2 的贝斯映射到段落级生成基元 regenerate_section。安全模块先核对目标是否存在且无歧义、参数合法且操作受支持，通过后才执行，更新后的工程立即可试听，可继续编辑、换一版或撤销，被接受的修改成为下一轮起点。

#### 与单次生成路线的改动点

与最接近的单次生成与局部补全路线相比，保留的是带显式结构的多轨符号表示，替换的是输出方式与调用边界。改动集中在三处，以持久 SongProject 代替孤立输出，以分层有界基元代替直接改原始数据，以先校验后事务提交代替无约束写入。信号规格仍在符号域，任务目标是精确限定范围的多轮修订，而非一次听感最优，原文未披露各模块维度与参数量。

下表展示有界动作空间在 4 个层级上的划分，行从 Global 到 Bar/note 由粗到细，列区分直接改参数的确定性操作与重新生成的生成式操作。读表时先看层级粒度决定寻址范围，再看同行两列的操作差异，另有观察类基元暴露工程、音轨、结构、和弦与音符信息，走带控制提供播放、停止、定位、循环、静音与独奏，共同支撑寻址与试听。

| Level | Deterministic | Generative |
| --- | --- | --- |
| Global | set_tempo, set_key_mode, song_transpose | change_entry_strategy, change_ending_strategy |
| Track | set_instrument, add_track, clear_track | regenerate_track |
| Section | set_chords, clear_section, transpose_section | regenerate_section, reharmonize_section |
| Bar/note | add_note, delete_note, transpose_note | regenerate_note |

全局层用 set_tempo、set_key_mode 与 song_transpose 做确定性改写，用 change_entry_strategy 与 change_ending_strategy 调整进入与结尾策略。音轨层用 set_instrument、add_track 与 clear_track 管理音色与轨道，生成侧仅保留 regenerate_track。段落层确定性操作含 set_chords、clear_section 与 transpose_section，生成侧为 regenerate_section 与 reharmonize_section。小节音符层以 add_note、delete_note 与 transpose_note 做单音精修，生成侧为 regenerate_note，原文未给出各基元参数维度。

### 分层基元、安全门与版本提交如何限定改动

分层、校验与版本三者共同决定改动能否只落在意图范围内。基元限定能做什么，安全门决定是否允许做，状态控制保证做错可回退，三者缺一都会让多轮编辑偏离已确认的编配。下文先拆开安全与版本的检查逻辑，再对照界面看符号内容与工具轨迹如何同屏呈现，实现细节上生成与播放链路也影响可复现性，需一并交代。

#### 安全门拦截哪些请求

安全控制在任何变更前检查目标是否存在且无歧义、参数是否合法、操作是否受支持，未通过则直接拒止且不修改工程。这对应后文轨迹中把不存在的 chorus 99 上移两个半音，以及把 track 2 上移 127 个半音的非法请求，两者都被拒止且版本号保持不变。原文未披露歧义判定的阈值细节，只说明经校验的失配会在变更前被拦截，避免误改授权范围之外的内容。

#### 版本状态如何保证可回退

状态控制把每次符号变更以事务方式作用于当前版本，成功则创建新版本与历史条目，失败则保留上一状态不变。撤销与回滚允许后续轮次从显式选定的有效版本继续，版本号只在提交时递增，被拒时保持不变，撤销本身也会产生恢复音乐内容的新版本。这种设计使连续 10 轮会话始终有明确起点，避免部分写入污染后续依赖轮次。

理解约束如何落地，可对照下图左侧编曲区与右侧智能体面板的并置。先看左侧小节标尺、段落条、和弦条与多轨钢琴卷帘的颜色区分，再看右侧已执行工具、用户追问与正在进行的 MCP 读取解析流程，注意两者如何围绕同一 SongProject 展开，重点观察轨道名、乐器名与执行记录的对应关系。

![原论文 Figure 2：IteraSong Web DAW during a multi-round editing session.](/audio-paper-digest-blog/images/papers/2611.29225/figure-2-48069b3ab7187f94.png)

*论文图 2：深色编曲窗口与右侧智能体面板并置，多轨音符、和弦与工具执行轨迹同步可见（原论文 Figure 2）。*

界面顶部显示 IteraSong 工程名、停止与播放键、041 - 01 小节拍位与 01:24.7 时间，以及 Song Creator 与 Download MIDI 按钮。左侧 Arrangement 标注 11 条音轨与 06:01.1 时长，上方依次为小节标尺、粉色段落条与 Interlude 1 等分段、Am、Em、F、C、Bb 与 G 等和弦条，下方 01 Vocal Melody 长笛、02 Drum 鼓组、03 Bass 指拨贝斯与 04 Main Chord 钢弦吉他等轨道以不同色块显示音符。右侧 Music Editing Agent 面板记录 Executed: regenerate_section、regenerate it again 与把 track 1 第 41 小节上移八度的请求，下方列出 Connecting to MCP、Reading SongProject、get_project_summary、get_tracks、get_song_structure、get_chord_progression 与 Waiting for Qwen plan 的执行过程，符号内容与请求轨迹同屏呈现，便于边看边听边改。

实现上初始草稿与生成式编辑共用规则流行乐生成器，网页工作站以后端 Node.js 负责符号可视化、音符级交互与对话，浏览器侧以编译为 WASM 的 FluidSynth 做 MIDI 播放，Qwen-Max 经 MCP 兼容工具调用观察、走带控制、确定性与生成式基元。原文未披露采样率、块大小、延迟与实时率，无法换算波形延迟，只能确认符号级即时试听与版本切换。

### 20 个十轮会话中完成率与拒止行为的分布

评测不是听感对比，而是功能正确性检查。5 个同管线流行乐工程各含 11–12 条音轨、14–16 个段落与 6,241–8,536 个音符事件，每工程按 track-first、section-first、note-first 与混合 4 种流程各测一个 10 轮会话，共 20 个会话 200 轮，其中中文 10 个、英文 10 个。每会话固定含 1 个观察、7 个变更含编辑与撤销重做、2 个非法请求，均经 stdio MCP 客户端服务端链路用 Qwen-Max 执行，全程保留工程状态且不做选择性重试或重置。计分要求每轮达到预期状态且不改授权范围之外内容，依赖轮还需满足前序条件。

#### 总体完成率如何构成

汇总为任务完成 90.63% 即 145/160，安全拒止 100% 即 40/40，状态一致 100% 即 200/200。其中 145 为 20/20 观察成功加 125/140 变更成功，160 为 20 个观察加 140 个变更，40 个非法请求全部被正确拒止，200 轮版本链条全部一致。变更缺口全部来自 15 个未完成轮次，其余观察与拒止无一失手，说明寻址与拒止逻辑稳定，短板在生成式目标绑定与依赖传递。

#### 公平前提与缺失的听感维度

公平性上各工程共享同一生成后端与同一智能体与真实执行链路，未做挑选性重试，但工程同源且轮间依赖使结果仅具描述性，不构成泛化证明。评估未涉及可听播放、感知质量与乐手可用性，也未使用人工主观听测或 UTMOS、DNSMOS、NISQA 等神经代理指标，更未报告 LSD、MCD 或置信区间，因此无法说明听感优劣，只能说明功能是否按指定范围正确执行。

下表按工程与流程展开每会话的观察、变更与拒止成功计数，流程 1–4 依次对应音轨优先、段落优先、音符优先与混合。此处选取全胜代表与 3 段集中失效行并保留总计，完整评估共 20 行，读表时先看变更列的 7/7 与 1/7 等分数，再对照总计行把握整体缺口，避免只看汇总百分比。

| Project | Workflow | Turns | Success / Total Obs. | Success / Total Mut. | Success / Total Rej. |
| --- | --- | --- | --- | --- | --- |
| Project 1 | 1 | 10 | 1/1 | 7/7 | 2/2 |
| Project 2 | 1 | 10 | 1/1 | 1/7 | 2/2 |
| Project 3 | 2 | 10 | 1/1 | 2/7 | 2/2 |
| Project 3 | 4 | 10 | 1/1 | 3/7 | 2/2 |
| Project 4 | 1 | 10 | 1/1 | 7/7 | 2/2 |
| Total (20 sessions) | Total (20 sessions) | 200 | 20/20 | 125/140 | 40/40 |

可见观察 20/20 与拒止 40/40 全部成功，变更 125/140 的缺口集中在 3 个会话，Project 2 流程 1 仅 1/7，Project 3 流程 2 仅 2/7，Project 3 流程 4 仅 3/7，其余 17 个会话均为 7/7。代价是 15 个未完成变更含 3 个主目标绑定错误与 12 个连带依赖失败，且评估只用规则流行乐与限定再生适配器，未用听感指标，未报告波动范围，也未覆盖其他曲风与更强生成后端。

### 三段集中失效与一条十轮轨迹的依赖链

汇总数字无法说明 15 个变更为何未完成，附录的逐轮记录与失效归因补上这一环。15 个未完成变更由 3 个主目标绑定错误与 12 个下游依赖失败组成，其中 3 个中文再生请求把应解析为 section_9 的目标误写为 section_8，校验在变更前拦截了失配，避免了误改。依赖轮还需满足前序条件，一旦主目标失败，后续轮次便沿链失效，而非独立随机出错。

下表是一条英文段落优先的完整 10 轮记录，请求经缩写，版本栏显示每次提交后的新版本号。读表时先跟随第 2 轮至第 5 轮的正常提交与撤销，再看第 6 轮与第 7 轮被拒时版本保持不变，最后看第 8 轮至第 10 轮的速度修改与整轨移调及撤销，体会提交才递增、被拒不递增的规律。

| Turn | Request | Observed effect | Rev. |
| --- | --- | --- | --- |
| 1 | Inspect the structure(read-only). | - | 1 |
| 2 | Raise chorus 2 and its chords by two semitones | 316 notes and chords changed. | 2 |
| 3 | Undo | Restored the original notes and harmony. | 3 |
| 4 | Regenerate track 3 in chorus 2 | 108 replacement notes with rhythm changed. | 4 |
| 5 | On track 2, raise the pitch-33 note at bar 2, beat 1 to 34 | 1 note changed. | 5 |
| 6 | Raise chorus 99 by two semitones | Rejected without mutation. | 5 |
| 7 | Raise track 2 by 127 semitones | Rejected without mutation. | 5 |
| 8 | Set tempo to 100 BPM | Committed. | 6 |
| 9 | Raise track 2 by one semitone | 811 notes transposed. | 7 |
| 10 | Undo the track transposition | Restored the prior musical content. | 8 |

第 1 轮只读查看结构，版本停留 Rev. 1。第 2 轮把 chorus 2 及和弦上移两个半音，316 个音符与和弦被改动并提交为 Rev. 2。第 3 轮撤销恢复原始音符与和声，生成 Rev. 3。第 4 轮再生 chorus 2 内 track 3，108 个替代音符带来节奏变化，记为 Rev. 4。第 5 轮把 track 2 第 2 小节第 1 拍音高 33 改为 34，仅 1 个音符变化，记为 Rev. 5。第 6 轮要求不存在的 chorus 99 与第 7 轮要求上移 127 个半音均被拒止且无变更，版本保持 Rev. 5。

第 8 轮设速度为 100 BPM 获提交为 Rev. 6，第 9 轮把 track 2 整体上移一个半音，811 个音符被移调为 Rev. 7，第 10 轮撤销该移调并恢复先前内容，记为 Rev. 8。可见提交才递增，被拒不递增，撤销产生新版本而非删除历史。计分还要求不改授权范围之外内容，依赖轮失败会沿链放大，缺失不同大模型与去掉安全门状态控制的对比，无法量化各部件贡献。

### 规则流行乐原型的适用边界与复现起点

当前结论只在规则流行乐原型与固定开发流程内成立。工程同源、轮间依赖与限定再生适配器使 90.63% 等数字仅具描述性，不能推广到其他风格、更强生成后端或专业乐手场景。评估未涉及可听播放、感知质量与可用性，也未量化延迟、RTF 与显存占用，因此无法指导实时演出部署，附录已明确声明不建立泛化结论。

复现需区分三件事，代码是否开源、权重可否下载、系统能否运行，原文均未给出仓库、下载与许可说明，仅描述 Node.js 后端、WASM 合成与 Qwen-Max 经 MCP 调用。复现第一步可先用规则生成器搭出带标注草稿与 4 层基元的最小闭环，再接入大语言模型做意图映射。原文给出演示视频，试看时可对照同一工程换音色、再生副歌伴奏、撤销前后是否恢复，以及非法请求被拒时版本不变的现象，不臆测未听过的音质优劣。

工程选型上，若需要工程级多轮修订、精确限定范围与可撤销，值得借鉴持久 SongProject、分层有界动作与先校验后提交的设计，教学演示可用其展示意图映射与版本管理。若追求听感最优、其他曲风或流式低延迟，则需先补感知听测与性能测试，并替换生成后端与扩展动作空间，未来工作也指向这两处，正式创作前不可跳过这步验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：本篇为符号音乐编辑，未涉及波形采样率、帧长步长与码率，原文未披露音频采样参数；浏览器侧 MIDI 播放使用 FluidSynth 编译为 WASM，示例速度为 100 BPM，延迟与 RTF 原文未披露。
- **训练与评测数据**：无模型训练阶段；评测使用 5 个同管线生成的符号化流行乐工程，各含 11–12 条音轨、14–16 个段落、6,241–8,536 个音符事件，每工程测 4 种十轮流程共 20 个会话 200 轮，含中文 10 个与英文 10 个会话。
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与训练耗时；实际推理经 stdio MCP 客户端服务端链路调用 Qwen-Max，后端为 Node.js，浏览器侧为 WASM 合成，具体硬件数量与耗时原文未披露。
- **核心超参数与配置**：原文未披露优化器、学习率与批大小等训练超参数；生成侧为规则流行乐生成器与限定再生适配器，编辑基元为有界分层集合，温度阈值与损失权重原文未披露。
- **推理速度与部署开销**：原文未披露 RTF、首包延迟、吞吐与显存占用；仅说明成功编辑创建新版本并可即时试听，失败保持原状态，支持撤销与回滚，具体开销未量化。
- **开源产物与协议状态**：原文未给出代码仓库、权重下载、数据许可与说明文档覆盖情况，仅在正文给出演示视频链接，未说明系统可运行条件，复现需按描述自行实现。
- **附录与补充材料要点**：附录 A 给出每会话完成计数、代表性十轮记录与失效归因，附录 B 说明编曲窗口与智能体面板并置呈现，附录 C 声明固定流程描述性评估、未测听觉播放、感知质量与乐手可用性。

<details>
<summary>📎 论文与评分元数据</summary>

排名：后50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.29225v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：常驻SongProject持久工程状态加四层MCP分层可控编辑与安全事务版本撤销设计完整自洽，范围精确可撤销。

- 核心优势：经实际MCP执行链路完成20会话200轮功能验证，给出逐会话明细失败归因与十轮版本变化记录。

- 主要短板：无外部基线对比与受控组件消融且未评估可听回放感知质量，仅同源流行乐固定流程描述性验证不证明泛化。

- 主要短板：宣称实时撤销重做与现场交互却未给出RTF延迟吞吐与硬件规格等真实流式部署实测。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
