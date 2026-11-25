---
title: "ARRANGE: Agentic Skills for Layering Vocals"
date: 2026-11-24
draft: false
tags: [歌唱生成, 工具增强与约束解码, 主观评测, 基准设计]
categories: [论文速递]
description: "针对给已有钢琴录音加人声时作曲决策难检查难局部修改的问题，ARRANGE 以六阶段技能与可视乐谱加类型化局部编辑组织流程，在 16 请求计划修订中把精确修改率从 0.33–0.69 提升到 0.83–0.98，代价是仅在小规模项目内请求与单人听评上验证且仍依赖乐谱能力与人工审批。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29283"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用可检查的乐谱与类型化编辑给钢琴录音加人声"
paper_digest_original_title: "ARRANGE: Agentic Skills for Layering Vocals"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29283v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29283v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29283v1.pdf"
paper_digest_primary_task: "歌唱生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.singing","label":"歌唱生成"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对给已有钢琴录音加人声时作曲决策难检查难局部修改的问题，ARRANGE 以六阶段技能与可视乐谱加类型化局部编辑组织流程，在 16 请求计划修订中把精确修改率从 0.33–0.69 提升到 0.83–0.98，代价是仅在小规模项目内请求与单人听评上验证且仍依赖乐谱能力与人工审批。"
paper_digest_reader_sections: [{"heading":"给录制好的钢琴加人声为何难改对","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"六阶段技能把作曲决策拆成可审批中间件","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"Score Canvas 与类型化编辑如何定位到单个音符","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"类型化修订能否保住原有编配不被改乱","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"乐谱修正与人声试听在单人评测下看到什么边界","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"什么情况下值得试用 ARRANGE 与复现第一步","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Henry Tan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Eidee Tan"}]
paper_digest_abstract_sha256: "52007021b90b53d0c0d1c41a5177e8c4c61749e55efa772e6eb4bb28362baf49"
paper_digest_sidecars: {"citation.bib":{"sha256":"0cafa9df665bda766d8154a63468ff189bcf38c84cb823568659776736e04323","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29283/citation.bib"},"citation.json":{"sha256":"650be08f1aa8acca2e9f37694fe1d6921086db8dc8edc2c1ad63a0e72a24f5f1","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29283/citation.json"},"citation.ris":{"sha256":"f3c479ba35fcb8d9d88fa9ab9a1253a86d377ffb9bd496f79205aee7ee9ba500","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29283/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1ab67aea10751e259f09855730e119b109c2b8949aca4a47e2566dbe07859174","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29283/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "7331114fda9e10dd5a454f87a73c3e7846652e77784250cb48ecf8a097da0687"
paper_digest_api_reader_plan_sha256: "adcc8f96b66982ddd3dd82392a5c5c346fc34a5c98b8124178590c9425e1d635"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d198695f200c4290b8b87daac49dcec2f6005af2662a1b126f47cfc74c6df69e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "440d9c44cbc6c9ea0bbe43d528347a060c83827703709663d97371deda3cb8e1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "b46b1cbf5d18f5c1be087abd8b1641e83e0a46e7eb81f0157d46c35f1b6366b9"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a7885f13d23b2935075451d0231ee2b7c92299de40fc50ed10ed694acde57835"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用可检查的乐谱与类型化编辑给钢琴录音加人声

> 英文题目：*[ARRANGE: Agentic Skills for Layering Vocals](https://arxiv.org/abs/2611.29283v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [歌唱生成](/audio-paper-digest-blog/papers/?concept=task.singing)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)；[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 6.8/10 | 技术严谨 6.6/10 | 实验充分 6.7/10 | 清晰度 7.0/10 | 影响力 5.2/10 | 开源 6.0/10 | 可复现 6.8/10 | 工程/实践 5.2/10


## 👥 作者与机构

- Henry Tan：机构信息未能在本次解析中与作者逐人可靠绑定
- Eidee Tan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 一位钢琴家录下自己的演奏并为其填词，希望听到人声唱出词句并与原录音叠合，以获得快速试听反馈。这需要连贯决定旋律音高与节奏、音节在音符上的落点、每句相对演奏时间的进入位置、每个音节的发音细节以及演唱音区。作者先用 Suno 试制，发现生成结果替换了原钢琴录音，通过提示词难以逐个修订音符与音节决策。论文强调这只是个人经历，不能证明商用工具普遍存在该局限，并指出 Suno 已记录上传音频与多轨编辑等功能，开源系统也支持编辑与音频条件控制。由此聚焦的具体难题是，大语言模型 (large language model, LLM) 接口怎样在加入人声时显露并保留作曲者的音乐决定，超出仅提供听感可接受混音的目标。

**核心思路与方法架构：** 与让模型重写整个计划或乐谱不同，ARRANGE 保留 LLM 负责理解自然语言与选择操作，但只输出具名参数的类型化编辑，再由确定性脚本校验并作用于已有状态。一条输入从钢琴录音与敲击拍点出发，经听音得到转录音符与拍点映射，作曲者在听录音时于键盘上演奏旋律线，拟合将其与歌词对齐为带序号与逐音发音的音符，计划安排进入与版本选择，演唱按录音时钟调用开放后端渲染，混音输出混音、分轨与工作站工程。乐谱画布把记谱、音节、发音视图与指定音符播放连在一起，作曲者逐阶段批准，脚本只查语法与参数类型，音乐判断留给人耳。这种分工减少模型重生成的状态，发音等合成器实用的信息变得可见可改。论文未披露采样率与张量形状，渲染为离线重渲，15 小节约 1 分钟。

**关键实验与核心代价：** 计划修订基准固定 16 个请求，每个 3 次抽样，覆盖 5 种模型与 4 种条件，共 960 次抽样，以恰改正确率 (exact-change correctness, 越高越好 ↑) 为指标，要求恰好改动预期路径。类型化编辑为 0.83 至 0.98，最强可比基线无文档整计划重写仅 0.33 至 0.69，其中 Claude Sonnet 5.5 为 0.98 高于基线 0.33，探索性配对 Wilcoxon 检验 p = 0.001，未校正多重比较。62 个请求的乐谱编辑基准每个条件 186 次抽样，以正确率 (correctness, 越高越好 ↑) 为指标，结构化提示对全部模型均有提升，如 Claude Sonnet 5.5 类型化提示 0.91 高于原始行重写 0.74，Claude Haiku 5.5 为 0.80 高于 0.60。作者单人听评未校准，也未用平均意见分 (mean opinion score, MOS, 越高越好 ↑) 或神经代理指标，35 次呈现中 SoulX-Singer 均值 95.9 分高于 Seed-VC 88.5 分，8 个音色 15 秒片段上最高音匹配 90 分位规则误差为 1.50 个半音，低于对照中位匹配 6.00 个半音。消融显示文档化重写平均改动 19.9 个无关字段、无文档重写平均改动 22.1 个无关字段并出现 11 次无效输出，挂载技能执行又引入新失败，Sonnet 挂载 0.82 低于单提示 0.91。15 小节重渲约 1 分钟，进入误差在 0.1 秒内，未给出实时率 (real-time factor, RTF, 越低越好 ↓) 测量。

**适用边界与深读导览：** 上述结论仅在两首曲目、一位能读谱并在键盘上演奏旋律的作曲者、小规模项目自建请求集与单人听评条件下成立，不支持跨作曲者可用性或跨听众一致性推断，记谱与模型配置仍是准入门槛，商业 LLM 与开放音频模型混用，录音与仿制音色的使用许可与软件获取相互独立，部分版权拟合与录音未公开导致实验无法完全重算。项目页提供示意乐谱与音频入口，可对照晨音中辅音独立成音、音节多于音符与 Footsteps 跨音断裂三处故障的修补前后试听，但不应虚构听感结论。想深究类型化与重写对比可查计划修订表，乐谱提示与挂载执行差异可查乐谱编辑表，音区规则与听评条件依赖可查音区实验与讨论章。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/htansetiawan/arrange> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）；许可证：Apache-2.0

- 数据相关资源：<https://github.com/htansetiawan/arrange> — 链接可访问（HTTP 200）；许可证：Apache-2.0

- 论文所列链接：<https://htansetiawan.github.io/arrange> → <https://htansetiawan.github.io/arrange/> — 链接可访问（HTTP 200）

- 复现相关资源：<https://github.com/htansetiawan/arrange> — 链接可访问（HTTP 200）；许可证：Apache-2.0

- 代码相关资源：<https://github.com/htansetiawan/ARRANGE> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）；许可证：Apache-2.0

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 给录制好的钢琴加人声为何难改对

目标读者是一位能看谱并在键盘上弹旋律的作曲者，他已经录好一首钢琴曲并写好歌词，想立刻听到人声唱在自己的演奏之上，形成快速反馈。为此必须同时定下多个细粒度决策，声部唱哪些音，每个音节落在哪个音上，每一句相对演奏时钟从何处进入，每个音节按哪些音素发音，以及最终用人声的哪个音区呈现。即使最后混音听起来悦耳，这些决策若藏在端到端生成里，就无法逐项检查与修改。

作者最初用 Suno 尝试过这一任务，结果是编配把原钢琴替换掉，再想用提示词只改某一个音或某一个词变得困难。这段经历只是动机，并不证明商用工具普遍不行，论文明确写道 Suno 已文档化上传音频、多轨编辑、片段音高与时间伸缩等功能，而 YuE、ACE-Step 与 ACE-Step 1.5、YuE2 等开放系统也支持生成与编辑或符号与音频结合。因此论文把问题收窄为交互契约，基于大语言模型（large language model， LLM）的界面如何暴露并保留作曲者的决策，同时把人声加到已录制好的演奏之上。

输入被定义为钢琴录音、敲击拍点、键盘弹奏的旋律 take、自然语言修改请求与参考人声，输出是与录音时钟对齐的人声渲染、混音、stems 与数字音频工作站（digital audio workstation， DAW）会话。物理与统计瓶颈有三处，自然语言请求本身含糊，歌声合成仍随机，伴奏必须保留为源录音而非重生成，而非八度转调还需对原录音做变调。这意味着正确性不能只听最终响度，而要看每个决策是否落在可定位、可回退的中间表示上。

### 六阶段技能把作曲决策拆成可审批中间件

ARRANGE 把加人声编译成 6 个技能，每个技能是装有指令、脚本与参考文件的文件夹，部分阶段共享实现文件夹。与最接近的整曲重写或整计划重写路线相比，保留的是开放音频后端负责转录与演唱，替换的是执行方式，模型不再重写整个产物，而是输出一条类型化编辑，再由确定性脚本校验并作用于已有状态。例如 bring the strings in two bars later 被译为 shift_entry(layer="strings", by_bars=2)，其中操作名、目标层与小节数都有类型约束。

下表按顺序列出 6 个阶段的输入、输出与作曲者审批点，读表时可把每一行看作一次可停下来确认的编译关口。从 Listen 的拍点对齐到 Mix 的平衡摆位，每个产物都有明确归属，而检查点只是流程指令，并不构成形式化验证保证，也不能阻止不受约束的智能体绕过它们。理解这种弱保证对后文评估附带改动与越权修改至关重要，这种分层让缺音节与排期错误各有归属。

| Stage | Input | Output | Composer checkpoint |
| --- | --- | --- | --- |
| Listen | Piano recording and tapped beats | Transcribed notes, key estimate, and performance-relative beat map | Do the bar numbers match how I count the piece? |
| Play the Line | Recording and beat map | Melody take containing pitch and rhythm played on keys | Is this the intended line, or should a phrase be replayed? |
| Fit | Melody take and words | Notes with syllables and per-note pronunciation | Is every intended syllable present, on the right note, with the right sounds? |
| Plan | Approved musical material and language requests | Layer, entry, and take-selection plan | Does the proposed change match the request and retain earlier decisions? |
| Sing | Approved score and voice reference | Vocal render aligned to the recording’s clock, with entry measurements | Does it sing the intended line in a suitable register? |
| Mix | Recording and approved vocal render | Mix, stems, and DAW session | Are balance and placement acceptable? |

表中 Listen 产出转录音符、调性估计与相对演奏的拍点映射，作曲者只确认小节编号是否与自己的数法一致， Play the Line 产出键盘弹奏的旋律 take， Fit 把词与音逐音对齐并给出每个音的发音， Plan 安排声部进入与版本选择， Sing 给出对齐录音时钟的人声与进入时刻测量， Mix 给出混音与会话。这种把决策分层的做法让纠错有明确靶点，缺音节找 Fit，排期错找 Plan，而不是笼统重提需求。

编译器类比只指显式中间表示、校验与局部变换，自然语言的含糊与歌声模型的随机并未被消除。校验只检查操作名与参数是否合乎语法与类型，例如 shift_entry 是否找对层与小节数，并不保证模型正确理解了音乐意图，写对语法也可能改错层或改错方向。因此评测同时统计预期改动是否命中与无关路径是否被连带改动，还记录对作曲者自留字段的越权触碰，时序派生与归属簿记则不计入改动数。

音频后端与交互契约分离， Listen 采用高分辨率钢琴转录， Sing 采用 SoulX-Singer 或 Seed-VC 等语音转换路线，替换后端需要适配乐谱与时钟接口，并非任意模型即插即用。原文未披露采样率、帧长、步长、码率与通道维度等信号规格，也未给出张量形状与帧率变化，因此端到端只能按逻辑时钟追踪，伴奏始终是源录音，但在非八度转调时仍可能需对录音做变调，波形并非一律原样保留。

### Score Canvas 与类型化编辑如何定位到单个音符

Fit 阶段的产物 Score Canvas 是全文可检查性的核心，它把记谱、歌词、发音与播放连在一起。谱面按作曲者敲击拍点编小节号，每个音节有可见序号，发音视图展示送给歌唱合成器的实际音素，从某个音符直接播放则把符号与钢琴和人声录音连起来。作曲者与智能体由此能指向同一音乐事件，而不是各说各的第几句。

下图是项目页上的示意谱例，并非评测用的 15 小节摘段截图，阅读时可先看两小节 4/4 谱面与下方三行文本的对应关系，再看第五个音符上的红圈与引出标注如何把自然语言请求变成一条可执行编辑，这正是局部修正的定位方式。注意显示序号与内部行号相差 1 的换算细节，理解这一对应才能看懂后文的发音切分讨论。

[![原论文 Figure 1：Schematic score example from the ARRANGE project page.](https://arxiv.org/html/2611.29283v1/score_canvas.png)](https://arxiv.org/html/2611.29283v1/score_canvas.png)

*论文图 1：两小节示意谱与音节序号发音对照，红圈标出待改音高的第五个音符（原论文 Figure 1）。*

图中第一小节有 5 个音符，分别对应 Qui-et lan-terns light，下方灰色数字 1 至 5 为显示序号，再下方是 K W AY、AH T、L AE N 等发音拼写，其中第四个音下还叠印 T ER N Z 的切分细节。第五个音符被红圈标出，引线指向标注 note 5 should be E4 与 set(row=4, pitch="E4")，说明显示序号 5 对应内部 row=4。第二小节 the hill 延续编号并用延音弧线把 hill 唱成一音多拍，序号 6 与 7 对应 DH AH 与 HH IH L。

请求定位支持按小节拍点、音节序号、单词、音高或谱面截图指认，编辑词表覆盖设字段、移动或平移音符、插入或删除行、改发音、提问与回答。短显示序号需换算为内部行序号，两套表示必须保持一致。在作者实践中，用琴键一次弹下音高与节奏，比在时间轴上拖音节、改自动转录或打字输入更顺手，但这只是第一人称设计观察，并非对照可用性结论。

3 个真实故障说明中间表示为何重要，把 morning 的辅音单独拆成一个音导致多出元音感，某句音节数多于可用音符使部分词无处可唱， Footsteps 横跨重复音的切分把塞音放在接缝处使单词听感断裂。作曲者在音符或发音层定位后局部修正，例如让一个塞音延续到下一音，发音文件保留该选择供后续渲染使用。但论文强调并非所有可闻缺陷都能从记谱诊断，正确的谱面仍可能被唱坏，每次改完都必须重听。

### 类型化修订能否保住原有编配不被改乱

计划修订基准回答类型化操作能否保住已有编配，它包含 16 个冻结修订请求，其中 7 个来自作者真实编配计划， 9 个来自合成计划，每个请求都有预期改动。每个模型对每个请求抽 3 次，覆盖 4 种执行条件，因此每模型每条件 48 次抽样，5 模型对照共 960 次抽样。正确性要求恰好命中预期变更路径，或在请求含糊与不支持时只提问而不编辑，派生时序与归属簿记不计入改动数。

#### 评测协议与公平性前提

4 种条件构成公平性核查的关键，前 3 种都拿到计划结构信息，分别是 ARRANGE 类型化操作由脚本执行、路径加数值补丁、带计划文档的整计划重写，第四种是只有一句话指令且无文档的整计划重写。因此对照的是指令加表示加执行打包方案，而非单纯词表效应与全部校验行为的分离。模型输出基准不是用户研究，调用上 Claude 模型经 Claude Code 命令行关闭工具单次完成，开放模型经 vLLM 在本地以 FP8 检查点与服务端默认采样运行，完成上限为 32,000 个 token，耗尽推理的 Qwen 调用记为无效。

下表给出 5 模型在 4 条件下的精确改动正确率与类型化相对无文档重写的差值及配对 Wilcoxon 检验 p 值，检验按请求平均正确率配对，属探索性统计且未做多重比较校正。每格基于 16 请求乘 3 次抽样，阅读时先看类型化列是否每行最高，再看无文档重写列的基线高低。

| Model | Typed operations | Path patch | Rewrite with documentation | Rewrite without documentation | Difference and p |
| --- | --- | --- | --- | --- | --- |
| Claude Sonnet 5.5 | 0.98 | 0.81 | 0.38 | 0.33 | +0.65; p = 0.001 |
| Claude Opus 5.5 | 0.90 | 0.73 | 0.71 | 0.69 | +0.21; p = 0.031 |
| Claude Haiku 5.5 | 0.83 | 0.75 | 0.73 | 0.62 | +0.21; p = 0.047 |
| Gemma 4 31B | 0.90 | 0.67 | 0.62 | 0.46 | +0.44; p = 0.009 |
| Qwen 3.5 27B | 0.83 | 0.69 | 0.71 | 0.50 | +0.33; p = 0.078 |

表中类型化操作在 5 个模型上均为最高， Sonnet 达 0.98， Haiku 与 Qwen 最低也为 0.83，而无文档重写仅 0.33 至 0.69。最后一列差值为类型化减无文档重写， Sonnet 差 0.65 且 p = 0.001， Gemma 差 0.44 且 p = 0.009， Opus 与 Haiku 差 0.21 且 p 分别为 0.031 与 0.047， Qwen 差 0.33 但 p = 0.078 未达常规显著阈值，提示小样本下证据强度不一。

#### 跨模型趋势与附带代价

只看正确率会掩盖附带改动，重写条件平均每次抽样改动近 20 个无关字段， Sonnet 带文档与无文档重写分别为 19.9 与 22.1 个，带文档重写在 48 次中还出现 11 次无效输出。类型化条件下 5 模型共记录 2 次受保护作曲者自留字段改动，且都来自 Qwen，但 Haiku 类型化仍出现无关字段改动，说明类型化压缩了重生成状态，却未消除语义理解错误。早期 3 个条件 Sonnet 类型化正确率为 0.96 且无附带改动，与后文 4 个条件 0.98 属不同轮次，不能当作同一批输出的两种估计。

两项补充对照进一步限定结论边界，前沿模型 Claude Fable 5.1 用类型化得 0.94，对无文档重写 0.69，配对 p = 0.062，差距小于 Sonnet，但 frontier 能力并未让任务结构变得多余。链式会话在真实与合成夹具上各连做 8 个请求并重复 3 轮，类型化每模型 6 场中仅 3 场精确落到预期终态，剔除拍点映射缺失的请求后才为 6 场全中，这恰恰暴露输入缺失而非证明完整会话成功。

### 乐谱修正与人声试听在单人评测下看到什么边界

乐谱修正与人声试听分别考察表示能否帮模型执行纠错，以及同一位作曲者兼听众能否选出合适的后端与调性。模型输出基准仍不是用户研究，作者既是作曲者也是全程听众，所有听评都是单人内判断，未做跨听众校准，也未使用 UTMOS、DNSMOS 或 MOS 等多听众主观或神经代理指标，因此不能读成人群层面的可用性证据。

#### 乐谱修正的两套基准

回放研究取自作曲者真实交互中的 15 条乐谱修正，多数只描述可闻症状而非完整编辑。用歌词技能的结构化表示时，三款 Claude 模型被接受修正率为 0.42 至 0.47，若计入合理提问则为 0.53 至 0.69，而直接给原始行重写仅 0.18 至 0.31，配对比较 p = 0.064 属提示性而非确立性改进。发音修正差距最尖锐，类型化 36 次中 26 次成功，原始行 36 次无一成功，原因是结构化条件暴露了原始条件缺失的发音信息。公开版本仅含其中 9 条请求，子集接受率 0.56 至 0.59 对 0.26 至 0.41，与全量结果不可互换。

下表是另一套 62 请求精选基准，覆盖三首歌并含 9 条故意不完整请求，请求经谱面引用或截图指认音符，涵盖局部编辑、模式、乐段、症状、修订与提问。每模型每条件 186 次抽样，成功要求音高与文本符合预期、时值在容差内，或给出恰当澄清与回答，阅读时对比类型化提示与原始行重写的每行差距，并注意安装技能列的额外执行含义。

| Model | Typed prompt | Raw rows and rewrite | Installed skill |
| --- | --- | --- | --- |
| Claude Haiku 5.5 | 0.80 | 0.60 | 0.84 |
| Claude Opus 5.5 | 0.92 | 0.83 | 0.89 |
| Claude Sonnet 5.5 | 0.91 | 0.74 | 0.82 |
| Gemma 4 31B | 0.55 | 0.49 | — |
| Qwen 3.5 27B | 0.68 | 0.58 | — |

表中类型化提示对 5 个模型全部优于原始行， Haiku 为 0.80 对 0.60， Sonnet 为 0.91 对 0.74， Opus 为 0.92 对 0.83，请求级符号检验 Haiku 的 p < 0.001， Sonnet 的 p = 0.004。安装技能让 Claude Code 智能体自行加载技能并调用脚本，结果 Haiku 反升至 0.84，而 Opus 与 Sonnet 分别回落至 0.89 与 0.82，说明单轮受限基准不能替代智能体执行评估，加载指令与使用工具会引入新的失败。 Gemma 的 0.55 对 0.49 与 Qwen 的 0.68 对 0.58 提升较小，且二者无安装技能成绩。

#### 一位作曲者的演唱与调性试听

实作段落检验作曲者能否在自己的录音上听到声乐线并经乐谱修正，它使用作者演奏的 The Color Purple 主题 15 小节，作者敲了 88 个拍点对齐演奏。试听暴露第四节所述三处词与发音故障，作曲者在谱面定位后局部修正并重渲染试听，单次重渲染约 1 分钟，五次渲染的行进入时刻与谱面位置偏差在 0.1 s 内。这些时序与延迟观察只适用于这一段落与这一套配置，下一步要问所选音色与调性是否让该声部可信。

下图比较两种选调规则相对作者最终并排选择的误差，正误差表示选得过高，阅读时先看深色圆点代表的最高音到 90 百分位规则是否聚在零线附近，再看叉号代表的中位数到中位数规则偏高多少。横轴单位是半音，纵轴是 8 个摹仿人声，全部判断都来自同一位听众，理解坐标方向才能看懂偏高偏低的含义。

[![原论文 Figure 2：Register-rule errors relative to the author’s final side-by-side choices for eight copied voices…](https://arxiv.org/html/2611.29283v1/register_rules.svg)](https://arxiv.org/html/2611.29283v1/register_rules.svg)

*论文图 2：八个摹仿人声上两种选调规则相对作者选择的半音误差散点对比（原论文 Figure 2）。*

图中最高音规则平均绝对误差为 1.50 个半音，中位数匹配为 6.00 个半音，前者深色圆点大多落在 0 附近，其中 Jackson 与 Bolton 在约 +3 个半音处，而 Groban 低约 4 个半音， Bublé 低约 2 个半音。后者叉号普遍偏高， Jackson 约为 +6 个半音， Bolton 与 Wonder 高达 +8 个半音。个别误差仍达 4 个半音，在 6 个声音子集上规则平均误差为 1.33 个半音，而大语言模型条件平均偏高 4.0 至 7.4 个半音。该百分位在预试听选定并在盲听前固定，结论只适用于这段 15 秒的 All the Things You Are 摘段。

后端对比上，作者对 SoulX-Singer 与 Seed-VC 做 35 次盲编号呈现，平均分 95.9 对 88.5，音色迁移比花腔、转音与颤音等歌手个性技法更可信，但这是未经校准的单人评分。公开子集 30 个呈现均值为 95.4 对 90.0， 9 对首次听辨中 SoulX 在 7 对更高，配对 p = 0.098，与全文值不可混用。同一 52 个音频在单听与有序调性序列中听，后者紧张感平均低约 7 分，说明数值评分需固定试听条件才能解释，规则只是给出值得试唱的调，是否合适仍由作曲者判断。

### 什么情况下值得试用 ARRANGE 与复现第一步

方法假设边界清晰，目标用户是能看谱并在键盘上弹旋律的作曲者，音乐实例只覆盖两首曲目与一位有经验的作曲者，模型基准是小规模项目内请求集加重复抽样，统计检验均为探索性。记谱能力与模型配置仍是准入门槛，评测同时用了商用大语言模型与开放音频模型，未测量搭建工作量、成本、认知负荷或相对修订耗时，也未验证智能体是否始终尊重作曲者检查点。

复现需区分两件事，代码已公开与系统可完整重运行是两件不同的事。代码与存档评测记录及复现说明在 <https://github.com/htansetiawan/arrange> 可获取，项目演示页在 htansetiawan.github.io/arrange 可访问，但 README 完整度为部分且仅覆盖安装。许多模型重写答案被截断，版权编配、谱面截图、参考录音与部分歌曲未公开，存档摘要可重算，但部分实验无法从公开物完整重评分或重生成。185 次呈现是 48 次预试加 60 次随机盲听加 14 次盲重复加 63 次有序对比之和，并非 185 位独立听众。

若打开演示页试听，建议重点对照 3 类现象，而非只听最终是否好听。一是对缺音节与错音的定位，看序号与发音视图如何把问题钉到行级，二是 Footsteps 这类塞音切分的听感断裂与修正后延续处理的差别，三是同一摹仿声音在过高调上发薄发紧、降到合适调后更满更像本人之间的变化。论文示意谱并非评测摘段截图，音域规则图中 1.50 对 6.00 半音也只是单人并排选择的误差，不可当作人群体估计。

是否值得尝试取决于团队是否有可检查性需求，若已有钢琴录音且作曲者能看谱弹键，又受够整曲重写连带改动， ARRANGE 的分阶段审批与类型化编辑值得一试。复现第一步是跑通 Listen、Play the Line 与 Fit，先敲拍点并核对小节编号是否与自己的数法一致，再弹旋律并检查每音节是否在位、发音是否正确，之后再谈 Plan 修订。补验证时至少补多位作曲者的对照、检查点遵守率与修订耗时，以及更广曲目上的音色与调性匹配，避免把单人评分当作通用结论。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率与通道维度；评测涉及 15 小节摘段与 15 秒摘段，行进入偏差在 0.1 s 内，单次重渲染约 1 分钟。
- **训练与评测数据**：无新歌声模型训练；评测用 16 个冻结修订请求含 7 个真实与 9 个合成计划、15 条回放修正、62 请求精选基准含 9 条不完整请求、35 次盲听后端对比与 185 次呈现的调性实验。
- **算力与训练耗时**：Claude 模型经 Claude Code 命令行关闭工具单次完成，开放模型经 vLLM 本地以 FP8 检查点与服务端默认采样运行，完成上限 32,000 个 token；原文未披露具体 GPU 型号与数量。
- **核心超参数与配置**：每请求 3 次抽样，每模型每条件 48 次抽样，精选基准每模型每条件 186 次抽样；90 百分位规则在预试听选定并在盲听前固定；原文未披露优化器与学习率等训练超参数。
- **推理速度与部署开销**：15 小节段落单次重渲染约 1 分钟，五次渲染进入偏差在 0.1 s 内；原文未披露 RTF、延迟分布、吞吐与显存开销。
- **开源产物与协议状态**：代码与存档评测记录及复现说明在 <https://github.com/htansetiawan/arrange> 可获取，演示页在 htansetiawan.github.io/arrange 可访问，README 完整度为部分且仅覆盖安装，部分版权材料与参考录音未公开。
- **附录与补充材料要点**：数据与代码可用性说明区分全文值与公开子集值，185 次呈现为 48 次预试加 60 次随机盲听加 14 次盲重复加 63 次有序对比，版权编配与谱面截图等未公开导致部分实验无法完整重生成。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.29283v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：类型化编辑0.83-0.98显著高于无文档重写0.33-0.69并同步统计19.9与22.1个无关改动及权属字段。

- 核心优势：Score Canvas连通记谱音节序号逐音发音与指定音符播放，支持音符或发音层级局部修正并保留后续渲染复用。

- 核心优势：结构化提示在62请求186抽样上全面超越原始行且发音修正26比36对比0比36，并诚实报告挂载技能新失败。

- 主要短板：作者单人听评未校准且无MOS与置信区间，有序试听相同音频紧张度相差约7分，小样本探索性检验部分p值未达显著。

- 主要短板：音乐实例仅两首曲目与一位有经验作曲者且记谱弹键仍是门槛，不支持跨作曲者与跨听众推断。

- 主要短板：15小节离线重渲约1分钟且进入误差0.1秒内，但未给出RTF测量与测试硬件规格，无部署延迟吞吐实测。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
