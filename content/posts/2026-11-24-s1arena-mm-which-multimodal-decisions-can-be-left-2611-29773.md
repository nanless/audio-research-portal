---
title: "S1Arena-MM: Which Multimodal Decisions Can Be Left to System 1?"
date: 2026-11-24
draft: false
tags: [音频理解, 全双工语音交互, 基准设计, 实时处理]
categories: [论文速递]
description: "论文用同一决策请求比较一次前向的 System-1 与在答案标记处读取的多模态大语言模型，发现 System-1 在图像上领先 4.9 个百分点且概率更好，但在物理与闭环对话上仍有硬伤，而思考与密集读取只能以更高延迟换取有限精度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29773"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "哪些多模态决策可以留给一次前向的 System-1"
paper_digest_original_title: "S1Arena-MM: Which Multimodal Decisions Can Be Left to System 1?"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29773v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29773v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29773v1.pdf"
paper_digest_primary_task: "音频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用同一决策请求比较一次前向的 System-1 与在答案标记处读取的多模态大语言模型，发现 System-1 在图像上领先 4.9 个百分点且概率更好，但在物理与闭环对话上仍有硬伤，而思考与密集读取只能以更高延迟换取有限精度。"
paper_digest_reader_sections: [{"heading":"多模态离散决策为何需要一次前向给出概率","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"同一请求各自读取的基准规模与比较口径","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"读取策略答案归一化与游戏语音桥接","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"静态精度领先与概率质量分化及闭环拉开差距","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"思考帧预算实时延迟与对话失效的代价","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论边界未验证条件与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The University of Texas at Austin"],"name":"Lang Lin"},{"affiliations":["The University of Texas at Austin"],"name":"Tianyu Chen"},{"affiliations":["The University of Texas at Austin"],"name":"Yi Gu"},{"affiliations":["The University of Texas at Austin"],"name":"Yang Zhao"},{"affiliations":["The University of Texas at Austin"],"name":"Xinran Song"},{"affiliations":["The University of Texas at Austin"],"name":"Xinyang Liu"},{"affiliations":["Meta AI"],"name":"Jianpeng Cheng"},{"affiliations":["The University of Texas at Austin"],"name":"Mingyuan Zhou"}]
paper_digest_abstract_sha256: "774565aaab6cd4acd3d4080b65d416e170ae64b4b0d8da6fc4e99624944337b5"
paper_digest_sidecars: {"citation.bib":{"sha256":"bed5105e38a0243915087896dda25ebf5cbd6feaf0aa3659c49ddc00f23903cb","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29773/citation.bib"},"citation.json":{"sha256":"326e6c188ddaa98591d28da9925a38904838f19d18d0a60791821ea91a07b6fe","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29773/citation.json"},"citation.ris":{"sha256":"70330dcd2a75a38a148758edacb42ce0157d65887325322450eac87cc22f72a6","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29773/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"674b044cb021b03ca3178ec2cb445f18a48d9fa9cd5731216c1f1d69334683d7","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29773/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "b39e95ea043fb271ec763245300df76c6f2e7b5d63c614848fc7d6a74f495c1c"
paper_digest_api_reader_plan_sha256: "36697e36b21495a9a174738782024401449f5da4ece8d1912df39b81de6328d8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2e10fb0c5d54cd014fc1164c53c008fb364f5417832f1b6db6546b6327d08703"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2c5c339b85dc5106ad095297686b786fe6239390fc1dbf9169aa9e0beb9af547"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1c94d139bfe4221e4286f8606e231fb25c7bbc6f2ea0c2a67d8d21c56edf5ecb"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b5199ea1d0cd3e7d4ee0683ede265b6e9e91c59de573a1a838a0c07ad2da30fc"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 哪些多模态决策可以留给一次前向的 System-1

> 英文题目：*[S1Arena-MM: Which Multimodal Decisions Can Be Left to System 1?](https://arxiv.org/abs/2611.29773v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.2/10** | 创新 7.8/10 | 技术严谨 6.6/10 | 实验充分 8.3/10 | 清晰度 6.9/10 | 影响力 7.4/10 | 开源 8.0/10 | 可复现 7.9/10 | 工程/实践 7.6/10


## 👥 作者与机构

- Lang Lin：The University of Texas at Austin
- Tianyu Chen：The University of Texas at Austin
- Yi Gu：The University of Texas at Austin
- Yang Zhao：The University of Texas at Austin
- Xinran Song：The University of Texas at Austin
- Xinyang Liu：The University of Texas at Austin
- Jianpeng Cheng：Meta AI
- Mingyuan Zhou：The University of Texas at Austin

## 📌 核心摘要

**问题与瓶颈：** 感知系统常要做离散判断，输入是图像、视频或音频，输出是对有限选项的选择并附带概率，例如判定表情包是否仇恨、行人是否即将横穿、声音是否为伪造、游戏下一步走法。这类请求量大且部分有时限，场景在模型决策时继续变化。现有可生成文本的多模态大语言模型靠逐词解码作答，既增加延迟与成本，也给不出可靠的概率。已有视频问答基准只比生成答案的准确率，不评概率质量，也很少覆盖审核、质检、裁判与路由等应用判断，游戏评测多在暂停下进行，使延迟无法影响结果。纯文本的 System-1 对比又只限文字，无法回答哪些多模态判断可以交给单次前向的快速模型。

**核心思路与方法架构：** 与最接近的文本 System1-Arena 相比，增量是把同一套带类型问题推广到图像、视频与音频，并把阅读策略视为模型身份的一部分，统一比概率而非只比答案。沿论文的行人例子看，请求状态给出视频文件、0.0 s 至 2.5 s 可见窗口与勾勒目标行人的标记框，问题是布尔型，判断未来 2 s 内是否开始横穿。单次前向给出概率的快速判断模型（System-1 模型）用自有引擎把窗口按每秒 1 帧或每秒 2 帧采样成帧序列，直接经决策头或选项标签的对数几率一次前向输出分布，如 d3 给出真 0.85、假 0.15。开源多模态大语言模型走同一请求转成的提示，在回答位读取各标签的对数概率并归一化，同样一次前向得到分布。游戏桥把截图与文字观测拼成状态、合法动作拼成单选题，得分最高动作被执行，暂停模式等待决策，实时模式按在 H100 上测得的中位延迟推进游戏。阅读量决定证据与成本，概率评分暴露校准差距，闭环与实时才让速度参与胜负。

**关键实验与核心代价：** 在 40 个图像任务 23,000 问上，d3 准确率 69.7%，领先最强多模态大语言模型 Qwen3.8-27B 的 64.8% 达 4.9 个百分点。在 32 个全体可做的静态视频任务上，d3 为 66.9%，领先 Qwen3.5-35B-A3B 的 66.0% 仅 0.9 个百分点。在 19 个音频任务 10,560 问上，Clef-Omni 为 62.9%，领先 Qwen3-Omni-30B-A3B 的 62.5% 仅 0.4 个百分点。概率质量差距更大，视频上 12 对中有 10 对 System-1 模型的 Brier 分数低于其基座。思考最多 2,048 个词元时，Qwen3.8-27B 约用 400 词元在图像上超过 d3，Qwen3.5-35B-A3B 约用 1,200 词元在视频上超过，但 13 个模型中有 10 个在图像、12 个在视频上 Brier 分数上升。闭环差距拉大，基于 Qwen3.8-27B 的 3 个 System-1 模型在 BALROG 达到 22.0% 至 33.3%，无思考时其他模型均不超过 9.7%。代价上，OneJev-27B 长视频每请求 2.17 s，Jev-Omni 仅 0.90 s，实时 GameWorld 每步 0.09 s 至 1.14 s 进度变化为 -6.7 至 6.1 个百分点。本文无人工主观听测，全部用准确率与 Brier 分数等决策指标。

**适用边界与深读导览：** 结论只在全体可做的静态划分与暂停闭环下成立，物理碰撞与重复计数仍是全局短板，最高分别不超过 61% 与 28.6%，固定 16 帧预算在长视频针孔任务上从 94.2% 跌至 60.2% 至 84.6%。对话中离线能分清插话与附和的 Clef-Omni，在线对纯附和仍有 77% 停话，高于基座的 17%。实时结论只按中位延迟在 H100 批量 1 下测得，更慢硬件或单次慢决策未覆盖。若想深究标签对数概率归一化、阅读策略与思考截断细节，可查下文方法与附录思考预算、逐任务精度与流式对话表。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/zhaoyang02/S1Arena-MM> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/betterup/candor-tabular> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/datasets/Swindl/S1Arena-MM> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多模态离散决策为何需要一次前向给出概率

实际应用中的感知系统常常只需要一个离散选项加概率，例如判定表情包是否仇恨，预测行人是否在 2 秒内横穿，判断登录语音是否为伪造，或在游戏中选择下一步动作。这类请求量大且需要可靠概率，部分还受时间限制。System-1 模型用一次前向直接返回各选项概率，不生成文本，而多模态大语言模型需要逐词生成文本，再从答案位置读取概率，带来延迟与成本，也难以保证概率质量。

为统一比较，论文把每个静态样本与游戏单步都写成决策请求，状态加问题集。状态包含具名域，可以是文本、图像、视频、音频引用或其有序列表，还可携带时间窗口与框标记，例如只允许观察 0 到 2.5 s 视频并用红框标出行人。问题共享同一状态，分为是非题、2 到 255 选一的选择题与 2 到 10 级评分题，每题附带指令与选项描述，模型需对每题输出选项上的概率分布，参考答案为硬标签或标注者分布。

评测不只看准确率。准确率比较概率最大选项与硬标签是否一致，Brier 分数对预测分布与目标分布逐选项求平方误差和，范围为 0 到 2，越低表示概率越好。任务分数先在源内平均，再在任务间等权平均，图像、视频、音频分别汇总，静态分数取所有模型都能做的 32 个视频任务，排除需音频的视听任务。覆盖率记录模型能接的请求比例，不支持的模态不计分但单独报告，延迟取每次请求的中位耗时。

已有基准难以回答核心问题。Video-MME、MVBench 与 EgoSchema 等主要评测生成答案的准确率，不评分概率，也很少覆盖审核、质检、裁判与路由等应用决策。BALROG 与 VS-Bench 在模型决策时暂停游戏，延迟不影响结果。文本上的 System1-Arena 对比过一次前向决策模型与大语言模型，但仅限纯文本。本文要问的是，哪些图像、视频与音频决策可以留给一次前向的 System-1，哪些仍需多模态大语言模型。

### 同一请求各自读取的基准规模与比较口径

S1Arena-MM 包含 51,060 个类型化问题，覆盖 94 个任务，源自 94 个公开数据集与 3 个程序生成源。其中图像 23,000 个问题对应 40 个任务，视频 17,500 个问题对应 35 个任务，音频 10,560 个问题对应 19 个任务。另有 102 个闭环游戏环境，来自 GameWorld、BALROG 与 VS-Bench 共 3 套体系，共 97 个可玩环境计分，其余因需自由文本动作或在固定框架上无法运行而未计入。

#### 规模与领域构成

下表按领域拆分静态任务构成，便于理解评测覆盖的应用类型与模态分布。图像侧包含基础感知、知识推理、文档图表、社会判断与专业任务，视频侧区分 11,500 个短视频与 6,000 个长视频问题，其中 1,500 个需同时听音频，例如根据会议录像判断是否形成决议。公开基准子集保留原始问题并单独报告，避免与应用决策混淆。

| Domain | Image Tasks | Image Questions | Video Tasks | Video Questions | Audio Tasks | Audio Questions |
| --- | --- | --- | --- | --- | --- | --- |
| Basic perception | 3 | 2,000 | 5 | 2,500 | 6 | 5,079 |
| Professional | 4 | 2,850 | 3 | 1,500 | 2 | 1,301 |
| Model-as-judge | 4 | 1,886 | 3 | 1,500 | 2 | 1,409 |
| All | 40 | 23,000 | 35 | 17,500 | 19 | 10,560 |

从表中构成可见任务权重并非按问题数，而是按任务等权平均，每个任务先在内部源间平均，再跨任务平均。这种设计防止大任务主导分数，也让路由、具身、游戏对话等小而难的决策被看见。短视频、长视频与视听任务分开汇总，静态分数只取 32 个所有模型都能做的视频任务，保证跨模型可比，视听任务仅对支持音频的 14 个模型计分，其余 19 个模型的覆盖率为 76.4%。

#### 比较口径与模型集合

基准坚持 3 个设计。首先是同一请求、各自读取，运行器只下发原始媒体与窗口，不预先抽帧或重采样，模型按自身发布策略决定帧率、最大帧数、分辨率与音频长度，该策略视为模型身份的一部分并随结果报告。其次是不止准确率，每题都要求概率，由此同时得到准确率、Brier 分数、期望校准误差、覆盖率与延迟。最后是闭环决策，游戏每步转为合法动作构成的选择题，执行概率最大动作，暂停与实时两种模式分别计分。

评测覆盖 33 个开放模型，包括 12 个 System-1 模型与 21 个多模态大语言模型。System-1 包括基于 Qwen3.8-27B 的 d3、Clef 与 OneJev-27B，基于 Qwen3.5 系列的多个 OneJev 与 Clef-Flash，基于 Qwen3-Omni-30B-A3B 的 Clef-Omni，基于 Gemma 4 的 Jev-Omni 与 Xor-26B-A4B，以及基于 Qwen3.5-2B 的 Raya-Decision-v1。开放多模态模型均在答案标记处读取一次前向的标签对数几率并归一化，主结果关闭思考模式，以保证同样是一次决策。

### 读取策略答案归一化与游戏语音桥接

#### 媒体读取与答案概率

阅读策略直接决定成本与证据。OneJev 按 1 帧每秒读取全部网格，Jev-Omni 从该网格固定取 16 帧并读取完整音频，Raya 取 8 帧，Xor、Gemma 4 与 DiffusionGemma 取 32 帧，d3 以 2 帧每秒在 4 到 32 帧间自适应。Clef、Clef-Flash 与 Qwen 系列按处理器默认以 2 帧每秒取 4 到 768 帧，Clef-Omni 按 1 帧每秒网格截断至上下文，MiniCPM-o 与 Nemotron 最多 64 帧，Phi-4-multimodal 取 16 帧。长音频按发布允许截断，例如 Nemotron 只听前 600 s，Qwen2.5-Omni 取前 300 s，Gemma 4 12B 服务端保留前 30 s。

概率来源分两路。System-1 直接从决策头或选项标签的对数几率输出分布，不生成文本。开放多模态模型把状态媒体、单个问题与带短标签的选项拼成提示，标签为选择题 A、B 起，评分为 0 到 9，是非题为 yes 与 no，提示结束于答案开始处，一次前向得到每个标签的对数几率，再经 softmax 归一化为选项概率。DiffusionGemma 用一次只读去噪在答案槽读取标签概率。调用失败、无可用回答或输入超限的请求记 0 分，不支持的模态则记为不支持并排除在分数外。

决策请求统一记为状态加问题集，状态含文本、媒体引用与多视角列表，引用注明文件、哈希与时间窗并可叠加目标框，问题共享状态并分是非、单选与评分三型且自带说明与选项描述。请求中保存原始媒体与窗口而非采样后帧数，运行器先比对媒体种类与模型模态，缺失则不发起调用并记为不支持。文本域可用占位符嵌入第 k 张图像，游戏步可交错截图与历史，所有模型收到相同请求文本，仅读取策略不同。

#### 闭环与对话执行路径

游戏桥把每步转为决策请求。GameWorld 下发当前截图与至多前 2 帧，BALROG 下发 16 轮文本与一张图像，VS-Bench 下发模型角色的图像与观测，合法动作组成至多 255 个选项的选择题，模型以最高概率选项执行，失败调用按技术失败结束该回合且不补默认动作。所有模型用同一桥与同一回合序列，GameWorld 按任务进展、BALROG 按推进度、VS-Bench 按每游戏在有结果模型间最小最大归一化的回报计分，各环境等权平均。暂停模式等待决策，实时模式按模型在 H100 PCIe 上测得的中位延迟推进游戏时间，较慢模型只能基于更旧画面行动。

语音对话另建 4 个流式环境，共 631 个回合，取自 Full-Duplex-Bench 的轮流、停顿处理、中断与听话人简短应答集。用户音频以 100 ms 包按时释放，Silero 语音活动检测在每次停顿触发决策，听时选项为等待与发言，说时选项为继续与停止，选项顺序经回合与决策号哈希随机化。状态会标明模型是否正在发言，问题统一询问当前应采取何种动作，若用户在决策返回前再次开口则丢弃该次决策。

所有模型共用 Qwen3-Omni-30B-A3B-Instruct 作为发声模型，发言按 20 ms 块以 24 kHz 播放，超时、缓冲与待定决策按右删失处理，不合并为单一分数。发声时长包含检测等待的 500 ms 静音、决策与语音生成，因此不可与单步延迟表直接对比。轮流按对方接管时刻统计发言与早说，停顿按 277 个标定暂停统计发言，中断与应答按实际播放回合统计取消回应，发声均经同一模型因此只比决策。

### 静态精度领先与概率质量分化及闭环拉开差距

主结果按模态分别汇总任务等权分数，静态视频分数只含 32 个公共任务，视听任务单独列出，闭环分数在暂停模式下取 97 个可玩环境的均值。System-1 在图像上领先明显，在视频与音频上与最强多模态模型接近，但在概率质量与闭环进展上分化更大。下文先看静态精度，再看概率与闭环，全部数值方向为准确率越高越好，Brier 分数与期望校准误差越低越好。

#### 静态精度图像领先视频音频接近

下表截取视频与闭环的核心对比，保留静态准确率与 Brier 分数、长视频准确率与两套闭环进展，覆盖最强的 3 个 System-1 与最强的 2 个开放多模态基线。静态按 32 个公共视频任务平均，长视频单独平均 7 个任务，闭环为暂停模式下 GameWorld 进展与 BALROG 进展的环境均值，便于在同一公平口径下观察精度与序列决策的落差。

| Rank | Model | Static Acc. | Static Brier | Long video Acc. | Closed loop (paused) GameWorld | Closed loop (paused) BALROG |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | d3 | 66.9 | 0.419 | 60.3 | 40.9 | 29.2 |
| 2 | Clef | 66.5 | 0.425 | 60.5 | 30.9 | 33.3 |
| 4 | OneJev-27B | 65.8 | 0.417 | 61.7 | 39.8 | 22.0 |
| 3 | Qwen3.5-35B-A3B (Int4) | 66.0 | 0.427 | 59.4 | 31.2 | 7.0 |
| 10 | Qwen3.8-27B (FP8) | 62.5 | 0.509 | 53.9 | 34.6 | 8.1 |

表中 d3 以 66.9% 居静态视频首位，领先最强的开放模型 Qwen3.5-35B-A3B 的 66.0% 不到 1 个百分点，前 4 名集中在 65.8% 到 66.9% 之间。长视频上 OneJev-27B 以 61.7% 反超，显示密集读取对长时证据的价值。闭环上差距陡增，d3 的 GameWorld 为 40.9%，Clef 的 BALROG 为 33.3%，而表中最强的开放基线 BALROG 仅 7.0% 与 8.1%，静态相近的模型在序列中完全分开，说明单步准确率不能预测闭环进展。

图像与音频结果进一步确认模态差异。下表保留图像准确率、Brier 分数、公开基准准确率与音频准确率、Brier 分数，图像为 40 个任务等权平均，音频为 19 个任务等权平均，公开基准为 7 个标准图像基准的 3,454 个问题。音频仅列出支持音频的模型，其余记为不支持而不惩罚准确率，比较时只在可比任务上进行。

| Model | Image Acc. | Image Brier | Image Public | Audio Acc. | Audio Brier |
| --- | --- | --- | --- | --- | --- |
| d3 | 69.7 | 0.377 | 87.2 | – | – |
| OneJev-27B | 67.8 | 0.388 | 85.9 | – | – |
| Clef-Omni | 62.0 | 0.488 | 83.9 | 62.9 | 0.495 |
| Qwen3.8-27B (FP8) | 64.8 | 0.439 | 83.5 | – | – |
| Qwen3-Omni-30B-A3B | 54.3 | 0.672 | 81.0 | 62.5 | 0.520 |

图像上 d3 以 69.7% 领先，最好的开放模型 Qwen3.8-27B 为 64.8%，差距为 4.9 个百分点，按本表仅前 2 名 d3 与 OneJev-27B 高于最优开放基线 Qwen3.8-27B 的 64.8%。音频上最好的 System-1 为 Clef-Omni 的 62.9%，最好的开放模型为 Qwen3-Omni-30B-A3B 的 62.5%，差距不足 1 个百分点。Brier 分数上 d3 在图像为 0.377 最低，OneJev-27B 在静态视频为 0.417 最低，均优于同精度段的开放模型，表明后训练主要改善了概率而非单纯拉高命中率。

#### 概率改善与闭环分离的像素证据

下图把静态视频准确率与闭环进展及 Brier 分数放在同一坐标下，每个点为一个模型，灰箭头从基座多模态模型指向由其后训练得到的 System-1。左面板横轴为静态视频准确率，纵轴为 BALROG 进展，右面板横轴相同，纵轴为 Brier 分数，箭头方向直接显示后训练带来的是精度移动还是概率改善，有助于区分两种收益。

[![原论文 Figure 1：Static accuracy does not predict closed-loop progress, and post-training for decisions mainly…](https://arxiv.org/html/2611.29773v1/front.svg)](https://arxiv.org/html/2611.29773v1/front.svg)

*论文图 1：静态精度与闭环进展及后训练概率改善散点，灰箭头示基座到 System-1 的移动（原论文 Figure 1）。*

左面板静态前 4 名 65.8% 到 66.9% 的模型在 BALROG 上散开到 7.0% 到 33.3%，其中 3 个基于 Qwen3.8-27B 的 System-1 达到 22.0% 到 33.3%，而其基座仅 8.1%。右面板 12 对基座与后训练对比中有 10 对 Brier 分数下降，准确率则在 -6.9 到 +5.6 个百分点间双向移动。Gemma 4 12B 与 Raya-Decision-v1 处在左上高 Brier 低精度区，d3 处在右下低 Brier 高精度区，箭头多为向下，证实后训练稳定改善概率但不保证提升命中。

### 思考帧预算实时延迟与对话失效的代价

静态与闭环的主效应需要放在预算与任务类型下检验。思考用 128 到 2,048 个词元截断同一条思路，帧预算对比每秒 1 帧的密集读取与固定 16 帧的稀疏读取，实时模式按中位延迟推进游戏，对话则对比离线判别与在线执行的落差。下文用后训练增量表与延迟表拆解收益来源与代价，思考曲线进一步显示多写不等于更可信。思考执行上每题只采样一条思路并在不同长度截断，闭合聊天模板后读取标签概率，DiffusionGemma 以只读去噪采样思路并回读，零预算对应空思考提示，闭环每决策同样限 2,048 词元且暂停计分，高达 39% 视频思路与 92% 闭环决策触及上限。

#### 思考预算精度涨概率差

下表为每个 System-1 减去其基座的差值，正的准确率与闭环差与负的 Brier 差表示 System-1 更好。视频静态为 32 个公共任务，图像与音频为各自任务平均，闭环为暂停模式分数，便于判断后训练在哪些模态与环节真正起作用，哪些只是噪声级波动，原文以至少 1 个百分点或 0.01 标记实质变化。

| System-1 model | Non-agentic Video static Acc. | Non-agentic Video static Brier | Non-agentic Image Acc. | Non-agentic Image Brier | Agentic Closed loop GameWorld | Agentic Closed loop BALROG |
| --- | --- | --- | --- | --- | --- | --- |
| d3 | +4.4 | −0.090 | +4.9 | −0.062 | +6.4 | +21.1 |
| Clef | +4.0 | −0.085 | +2.5 | −0.023 | −3.7 | +25.2 |
| OneJev-27B | +3.2 | −0.092 | +3.0 | −0.051 | +5.2 | +13.9 |
| Xor-26B-A4B | −2.1 | −0.243 | +0.2 | −0.190 | −7.4 | −3.3 |
| Raya-Decision-v1 | −6.9 | +0.152 | −5.4 | +0.092 | +1.5 | −1.3 |

本 5 行摘表无音频列，视频静态 Brier 为负共 4 行，分别为 -0.090、-0.085、-0.092 与 -0.243，图像 Brier 为负共 4 行，BALROG 除 21.1、25.2 与 13.9 外仅余 -3.3 与 -1.3 两行，Raya-Decision-v1 在视频静态准确率上为 -6.9 个百分点且两项 Brier 均为正。进一步地，在论文完整 12/13 对汇总（未全列于本 5 行摘表）中，视频静态 Brier 有 10 对为负，图像有 11 对为负，音频 3 对全为负，准确率则在 -6.9 到 +5.6 个百分点间双向移动。

思考预算的取舍在 4 条曲线上清晰可见。以 2,048 个词元为上限采样一条思路并在不同长度截断，零词元即关闭思考的设置。约 400 个词元时 Qwen3.8-27B 在图像上超过 d3，约 1,200 个词元时 Qwen3.5-35B-A3B 在视频上超过 d3，但 128 词元的小预算反而让 DiffusionGemma 在图像与视频上掉 13 个百分点以上。更关键的是思考让 13 个模型中图像 10 个、视频 12 个的 Brier 分数变差，且所有带思考的 Brier 仍高于 d3，闭环虽全员涨分但平均需上千词元。

下图分四格显示图像与静态视频的准确率与 Brier 随平均思考词元的变化，星号虚线标出零词元的 d3。左两格准确率随词元总体上扬但起点常先跌，右两格 Brier 随词元上扬或持平，横轴为每题平均思考词元，纵轴分别为准确率与 Brier 分数，图例区分 Gemma、DiffusionGemma 与 Qwen 系列，有助于看清多写换命中但买不到可信概率的取舍。

[![原论文 Figure 3：Thinking can raise accuracy but worsen Brier scores.](https://arxiv.org/html/2611.29773v1/thinking.svg)](https://arxiv.org/html/2611.29773v1/thinking.svg)

*论文图 3：思考词元增加时图像与视频精度与 Brier 分数变化曲线及零词元基线（原论文 Figure 3）。*

上图左上图像准确率在 128 词元处明显下探，DiffusionGemma 跌幅最大，右上图像 Brier 同步上扬并始终高于 d3 的 0.377 虚线。左下静态视频准确率随词元缓慢爬升，右下静态视频 Brier 在 331 到 1,286 词元区间仍高于 d3 的 0.419，Gemma 4 26B-A4B 与 DiffusionGemma 的 Brier 曲线明显高于 Qwen 系列。证实多写能换命中但买不到更可信的概率，延迟与成本见延迟表。

#### 帧预算物理短板与实时对话

延迟决定一次决策的真实价格。下表为批量为 1 时在 NVIDIA H100 80 GB SXM 上从请求到概率的中位耗时，含媒体解码与该请求全部问题，不含加载，短视频、长视频、公开子集各取 10 个请求，视听取 20 个，闭环取 100 个。同一输入与同一摆放下比较，帧数与分辨率是主要变量，音频过长按发布截断，超限请求记 0 分。所有决策均在答案处一次前向给出概率且不先写文本，因此单步成本主要来自媒体解码与提示前向。

| Model | GPUs | Median latency per request (s) Short | Median latency per request (s) Long | Median latency per request (s) Loop |
| --- | --- | --- | --- | --- |
| Clef | 1 | 1.28 | 3.15 | 0.78 |
| OneJev-27B | 1 | 0.79 | 2.17 | 0.76 |
| Jev-Omni | 1 | 0.54 | 0.90 | 0.15 |
| Qwen3.8-27B (FP8) | 1 | 0.68 | 1.42 | 0.30 |
| Qwen3.5-0.8B | 1 | 0.33 | 0.74 | 0.11 |

表中 5 个代表模型的闭环单步为 Qwen3.5-0.8B 的 0.11 s 到 Clef 的 0.78 s、短视频为 0.33 s 到 1.28 s（论文全量评测中短视频跨度为 Raya 的 0.31 s 到 Phi-4-multimodal 的 1.44 s），长视频 OneJev-27B 达 2.17 s 而 Jev-Omni 仅 0.90 s。密集读取的代价换来 needle 任务 94.2% 对 42.2% 的差距，把 OneJev-27B 压到 16 到 64 帧时其 needle 从 94.2% 跌到 60.2% 到 84.6%，其他长视频任务变化很小。物理与计数仍是硬骨头，接触碰撞类二选一无人超 61%，平均约 52%，重复计数最高仅 28.6%，思考到任何预算也未突破 58% 与 30.2%。

实时模式按 H100 PCIe 上闭环决策的中位延迟收费，每步 0.09 s 到 1.14 s。跨模型进展变化为 -6.7 到 +6.1 个百分点，仅 Qwen3-Omni-30B-A3B Thinking 的 +6.1 超过 2 倍标准误，变化与延迟仅弱相关，最慢的 Clef 与 OneJev-27B 损失不足 3 个百分点。原文明确这是在批量为 1 与中位延迟下的结论，更慢硬件、共享服务或单次慢决策可能带来未观测到的损失。

离线准确不等于在线可用。Clef-Omni 在录音上离线区分听话人简短应答与打断达 99.7%，基座为 74.8%，但在环中遇到纯听话人简短应答时 77% 的回合停下回应，基座仅 17%。两个 Jev-Omni 同样比基座 Gemma 4 12B 更易停，Nemotron 在 98 个听话人简短应答中 98 次取消回应。共用发声下 MiniCPM-o 4.5 与 Phi-4-multimodal 几乎总选等待，在 117 个轮流回合中零次发言，因而也很少早说或误停，计数表需结合发言率解读。

### 结论边界未验证条件与工程选型建议

#### 假设与未覆盖条件

标签直接沿用来源，来源的标注噪声会原样进入分数，不少视频为公开内容，可能已在模型训练中见过。媒体按许可分发，可再分发的进入门控数据集并附许可文本，禁止再分发或需单独授权的由用户自行下载，10 个不分发标注的源仅发布构建方式并由加载器本地重建。监控与暴力任务按设计含有不适内容，论文保留原发布样貌，高分不代表可在法律、安全或医疗等高风险决策中直接信任，仍需人工复核。

实时结论只在特定执行条件下成立。实时模式按批量为 1 时在 H100 上测得的中位延迟推进游戏，不反映更慢硬件、共享排队或单次长尾的影响。流式对话所有模型共用同一发声模型且只在检测到的停顿处决策，不含重叠发言下的连续打断处理。思考实验每题只采样一条思路并截断，高达 39% 的视频思路与 92% 的闭环决策触及 2,048 上限。80 个预试回合包含在 631 个回合池内，并非完全留出测试集。

覆盖与可玩性边界同样影响解读。33 个模型全部支持图像与视频，14 个支持音频，其余覆盖率为 76.4%，视听分数只在支持者间比较。Wordle 因超过 255 个动作、3 个 TextWorld 因需自由文本、NetHack 因 248 个动作无法经桥执行而不可玩，Minesweeper 对 Clef 与 Clef-Flash 超出输入上限而不计入，最终按 97 个可玩环境等权平均。闭环按套件原有框架运行，GameWorld 每环境 5 任务共 170 回合，BALROG 共 255 回合，VS-Bench 共 100 回合，合法动作组成单选并取最高概率执行，失败即结束回合，成功率按定义成功的环境平均。

#### 复现核对与选型建议

失效案例提示不能只看平均分。Raya-Decision-v1 在视频静态低 6.9 个百分点且 Brier 高 0.152，Xor 在视频静态低 2.1 个百分点，Xor 在足球犯规任务上为 0.0%，两个 Jev-Omni 在 VS-Bench 上比基座低 20 个百分点以上。物理接触、碰撞风险与重复计数全员偏低，文本匹配平均达 96.2% 则全员偏高，说明依赖单帧外观的检索易做，依赖时序动力学的判断难做。MiniCPM-o 4.5 与 Phi-4-multimodal 在轮流中零发言，低误停是以不发言换来的。

工程上可按 3 条规则选型。请求量大、需可靠概率、输入为图像或短视频且可接受一次前向时，优先试 d3、OneJev-27B 或 Clef，并把读取帧预算与 Brier、期望校准误差一起报告。长视频中有短暂关键证据时不要用固定 16 帧，需按 1 帧每秒或更高密度读取并承担 2 s 级延迟。涉及物理后果、计数、自由文本动作、超长会议音频或听话人简短应答敏感的对话时，当前分数不支持直接部署，需补做自有硬件上的实时测试、长音频截断测试与人工听测复核。复现第一步应用同一桥与同一回合重跑暂停分数，再核对覆盖率与延迟摆放是否一致。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.29773v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：51,060问跨94任务与102闭环环境统一比概率而非只比答案，规模与问题定义扎实可核验。

- 核心优势：33个开源模型系统对比揭示d3图像领先4.9点且BALROG拉开至22.0%至33.3%的高区分度。

- 核心优势：请求仅存原始媒体与窗口并把阅读策略视为模型身份，暂停与实时游戏桥设计具备复用价值。

- 主要短板：标签沿用来源噪声且公开视频可能见过训练，防泄漏控制缺失限制结论的因果强度。

- 主要短板：覆盖率剔除致分母不同且VS-Bench按参评极值归一化，失败记0分混淆能力与超限，可比口径受损。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
