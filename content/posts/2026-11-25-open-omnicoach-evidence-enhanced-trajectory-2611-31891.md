---
title: "Open-OmniCoach: Evidence-Enhanced Trajectory Learning for Omni Video Agents"
date: 2026-11-25
draft: false
tags: [音视频问答, 音频时间定位, 可验证奖励强化学习, 数据集构建, 工具增强与约束解码]
categories: [论文速递]
description: "针对全域视频智能体找不准证据与不会改错的问题，本文用三阶段管线合成 248.2K 条多跨度与反思轨迹并提出逐步证据引导优化 SEPO，在 7B 与 30B 两档基座上同时提升音视频与通用视频理解，代价是依赖强教师合成与更多轮工具交互。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31891"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用细粒度证据与逐步奖励训练会找证据的全域视频智能体"
paper_digest_original_title: "Open-OmniCoach: Evidence-Enhanced Trajectory Learning for Omni Video Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.31891v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31891v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31891v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"}]
paper_digest_primary_method: "可验证奖励强化学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全域视频智能体找不准证据与不会改错的问题，本文用三阶段管线合成 248.2K 条多跨度与反思轨迹并提出逐步证据引导优化 SEPO，在 7B 与 30B 两档基座上同时提升音视频与通用视频理解，代价是依赖强教师合成与更多轮工具交互。"
paper_digest_reader_sections: [{"heading":"全域视频智能体缺的不是问答对而是找证据与改错的能力","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Open-OmniCoach 三阶段管线与动态取证环境的整体分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"分层证据问答、多跨度轨迹与反思轨迹如何合成","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两轮监督微调与逐步证据引导的策略优化","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"音视频理解与通用视频理解上的主结果","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"多跨度、反思与逐步奖励各自贡献了多少","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"方法边界、复现核对与何时值得尝试","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weisong Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangtai Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haochen Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haiquan Wen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhaoxiang Zhang"}]
paper_digest_abstract_sha256: "e820aa9e52eec5d127f91ace6221fec23e58ac8ffcc0349d3cec25ba28b3f4d4"
paper_digest_sidecars: {"citation.bib":{"sha256":"67486b1e8eb47a17dad555a7bf1741ea28017bad7961d3925db8a3be4dfcff10","url":"/audio-research-portal/client/papers/2026-11-25/2611-31891/citation.bib"},"citation.json":{"sha256":"b9d8b1f2723d89f4ddce79c2c2a4846b7f7c74b7ec3e84e9f422373dae135bff","url":"/audio-research-portal/client/papers/2026-11-25/2611-31891/citation.json"},"citation.ris":{"sha256":"07dea1460c8e82f52e20250f6d3bd8b2d0f67c5fff5080c20dd0ef950bda5645","url":"/audio-research-portal/client/papers/2026-11-25/2611-31891/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"aea58d34165d59d3892f86c34e415afcc2a4b6ea9d079f3c06293f97832691b2","url":"/audio-research-portal/client/papers/2026-11-25/2611-31891/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "ce842e0144b1436810833d22e70e351ce42142bf50bee979ee5d118373194195"
paper_digest_api_reader_plan_sha256: "7b3563c9cfa360578ce65c3e331cba7c0af30f2c1eeae4b598b4a2a4aea72c7e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ad1a8078f20358d0cabd5c2352df33cc6fc43af3fad53ad61e0f70f9d1e262c2"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "0443764f91994e6550b035eb8b76f736c69885eb51a719ca8325927079aec006"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0e910fbafe21cdc0b3186720ead063f42244b90bccd39eba3b54e12a41a0aee7"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3b62896e2d2f3e6c0ef84019d1b9632d8f73b9f3b485bf7e844036eb6bf6cfda"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用细粒度证据与逐步奖励训练会找证据的全域视频智能体

> 英文题目：*[Open-OmniCoach: Evidence-Enhanced Trajectory Learning for Omni Video Agents](https://arxiv.org/abs/2611.31891v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [音视频问答](/audio-research-portal/papers/?concept=task.av-question-answering)；[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-research-portal/papers/?concept=task.temporal-grounding)
- **研究方法**：[强化学习](/audio-research-portal/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-research-portal/papers/?concept=method.verifiable-reward-rl)；[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)；[工具增强与约束解码](/audio-research-portal/papers/?concept=method.tool-augmentation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 8.2/10 | 技术严谨 7.4/10 | 实验充分 8.0/10 | 清晰度 6.8/10 | 影响力 7.6/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Weisong Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangtai Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Haochen Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haiquan Wen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhaoxiang Zhang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 音视频智能体需要在长视频中主动查找、关联并修正与任务相关的证据，输入是跨越数十分钟的画面与声音，输出是选项或时间区间。现有问答数据多建在数分钟视频上，证据标注只用于拼问题，不监督多轮取证过程，工具调用多为单跨度串行，容易把中间误解带入后续决策。只用成功轨迹监督时，模型仍会做出取证不支持的断言，而把同一条轨迹级优势平均分给每一步，会让发现新证据的调用与重复观察得到相同更新，难以抑制幻觉。

**核心思路与方法架构：** 与最接近的 OmniAgent 等仅监督成功单跨度轨迹的做法相比，本文增量是自底向上合成带时间与模态标注的证据层级、允许一次调用并行比较多个跨度、从学生失败中生成反思监督，并用证据增益逐步骤调节优势，保留组序列策略优化（Group Sequence Policy Optimization，GSPO）作为底层优化器。以一条 42 分钟视频上 17 步的时间定位轨迹为例，智能体先看 0.5 FPS 采样的初始概览帧与完整音频，再通过 get_multi_span 一次请求 4 个远距区间并为每段独立指定音频、画面或音视频联合观察，在同一轮内对比街边餐车误导线索与气罐手推车及石板路声响，最后收敛到 29:13.0 至 29:17.5。监督微调先用 230.7K 条多跨度轨迹训练，再混入 17.4K 条反思轨迹共 248.2K 条训练，强化学习阶段冻结监督微调参考策略并以 0.001 系数约束 KL 散度，用 0.1 强度的证据增益调节更新推理时最多 12 轮的取证策略，该步骤级方法称为步骤级证据引导策略优化（Step-Level Evidence-Guided Policy Optimization，SEPO）。

**关键实验与核心代价：** 在 5 个音视频理解基准上，Open OmniAgent-30B 平均准确率为 58.1%，相对基座 Qwen3-Omni 的 52.7% 提升 5.4 个百分点，其中 OmniVideoBench 为 47.9% 对 38.4% 提升 9.5 个百分点，LVOmniBench 为 48.0% 对 35.8% 提升 12.2 个百分点，摘要另报告 5 个音视频加 4 个通用视频共 9 个基准平均提升 6.3 个百分点，口径不同但方向一致。在通用视频理解上，Video-MME v2 准确率为 44.4% 对 34.1% 提升 10.3 个百分点，LVBench 为 63.5% 对 50.2% 提升 13.3 个百分点并超过 Qwen3-VL-235B-A22B 在 Video-MME v2 上的 43.3%。7B 模型平均准确率为 51.3% 对 45.1% 提升 6.3 个百分点，显示跨基座迁移性。消融显示多跨度监督、反思监督与 SEPO 逐级叠加，SEPO 相对 GSPO 基线在 4 基准平均上再提升约 0.8 个百分点，同时取证更聚焦但仍需平均约 5.5 次工具调用，多阶段教师生成与验证带来额外构建成本。

**适用边界与深读导览：** 结论成立前提是基于 Qwen2.5-Omni-7B 与 Qwen3-Omni-30B-A3B 两个基座、在 WorldSense、Daily-Omni、JointAVBench、OmniVideoBench、LVOmniBench 等 5 个音视频基准加 Video-MME、Video-MME v2、LongVideoBench、LVBench 等通用视频基准上的结果，以及 TimeLens 与 LongVALE 时间定位评测，项目页可对照长视频多跨度取证现象，但论文未覆盖其他基座、全部失效模式与端侧实时部署。想深究机制可查下文方法概述中证据效用与优势调节公式、实验结果中多跨度与反思消融及过程级取证审计、细节详述中学习率与工具限制，以及附录 11 中模态加权与协议惩罚实现。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/Open-OmniCoach/omnicoach> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/Open-OmniCoach> — 链接可访问（HTTP 200）

- 论文所列链接：<https://open-omnicoach.github.io> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全域视频智能体缺的不是问答对而是找证据与改错的能力

全域视频智能体面对的是同时带有画面与声音的长视频，输入为完整视频加音频与自然语言问题，输出为多项选择答案或时间区间。好的智能体需要主动调用工具去不同时刻取证，把分散的视觉与听觉线索拼起来，并在证据不足时修正已有假设。原文强调仅靠多样问答对不够，关键是可靠地发现、连接与纠正任务相关证据，这正是本文要解决的核心问题。

已有全域数据管线存在两处具体瓶颈。第一是证据可控性不足，多数全域数据集建立在几分钟视频上，很少要求关联相距很远的时刻，也很少要求在长视频中定位短暂事件。证据标注多为时间加文本，缺少模态区分，交互又以单区间串行请求为主，一次取多个区间的并行比较不受支持，轮次增加也容易把中间误解带到后续决策。

第二是监督信号偏弱，现有管线只用成功轨迹训练，从不展示如何从自身错误中恢复，而训练后的智能体仍会做出缺乏证据支撑的断言。强化学习阶段若对整条轨迹使用同一个轨迹级优势，发现新证据的调用与重复旧观察的调用会得到相同更新强度，冗余调用无法被区分。针对这两点，本文提出细粒度证据合成与逐步奖励的新框架。

### Open-OmniCoach 三阶段管线与动态取证环境的整体分工

#### 框架的三件套与基线差异

Open-OmniCoach 包含高质量数据集 OmniCoach-240K 与新的智能体强化学习方法 SEPO（逐步证据引导的策略优化）。数据集共 248.2K 条交互轨迹，其中 230.7K 条为多跨度轨迹，17.4K 条为反思轨迹。与最接近的 OmniAgent 基线相比，保留了跨轮文本记忆与多轮取证思路，新增的是多区间单次调用、模态独立指定与基于自身错误的反思监督。训练基座为 Qwen3-Omni-30B-A3B-Instruct（30B-A3B 表示 30B 总参、每词元激活 3B）与 Qwen2.5-Omni-7B，推理时最多允许 12 个交互轮次。

下图展示了三阶段数据生成管线的分工，适合先把握整体再读细节。上方为阶段 1 的分层证据问答生成，包含证据构建、事件匹配、技能引导与质量过滤 4 步。中间为阶段 2 在动态取证环境中的多跨度轨迹生成，右侧为阶段 3 基于学生失败的反思生成，最右侧给出问答类型、视频时长与轨迹步数的统计分布。

[![原论文 Figure 2：OmniCoach-240K data generation pipeline.](https://arxiv.org/html/2611.31891v1/fig2.png)](https://arxiv.org/html/2611.31891v1/fig2.png)

*论文图 2：三阶段数据管线分工与右侧数据统计：分层证据生成、多跨度合成与反思纠错（原论文 Figure 2）。*

从右侧统计可见，阶段 1 保留 95.7K 条问答，其中 MCQ（多项选择问答）与 TG（时序定位）的环形分布对应约 55.3K 与 40.4K 条。轨迹侧 248.2K 中多跨度占 93.0% 而反思占 7.0%。视频时长直方覆盖 16,306 个视频，1 分钟以内与 10 分钟到 30 分钟为两个高峰。轨迹步数上多跨度平均 2.11 步而反思平均 4.87 步，6 步到 10 步区间反思比例明显更高，反映纠错需要更长的交互。

#### 从原始视频到可训练轨迹的流向

一条问答样本的旅程是先由阶段 1 生成带时间加模态标注的任务证据，再与 10K 条外部公共问答一起进入阶段 2，由教师模型在动态取证环境中生成可执行的观察思考行动序列并通过结局检验，最后将阶段 2 模型的失败展开转化为反思轨迹。两类轨迹先后用于两轮 SFT（监督微调），再进入 SEPO 强化学习，得到 Open OmniAgent-7B 与 Open OmniAgent-30B 2 个模型。

### 分层证据问答、多跨度轨迹与反思轨迹如何合成

#### 分层证据问答的 4 步构造

阶段 1 先按视觉场景变化与音频停顿切分视频，维护人物、声源与物体全局实体表，逐段生成记录语音、音乐、非语音声音与画面的细粒度脚本，再用原音视频回查修正边界与归因错误。接着把脚本整合成简洁全局事件时间线，每个事件保留指向源证据的链接，形成自底向上可回溯的证据层级。模型依据技能目录选择有充分证据支撑的题型，展开关联细粒度脚本生成 MCQ 与 TG 任务，并保留答案相关证据作为任务级标注，最后经文本可猜性剔除与双路证据充分完备检验，只保留双路答案一致的样本。

下表对比了代表性视频与全域视频训练数据集在问答多样性、动态取证与错误恢复上的差异，有助于定位本文数据增量的位置。本表仅展示 3 行（OmniVideo-100K、OmniAgent 与 Open OmniCoach）与 6 列（Dataset、#QA、Formats、#Traj.、Multi-span、Error Recovery），不含平均时长与证据标注列。

| Dataset | #QA | Formats | #Traj. | Multi-span | Error Recovery |
| --- | --- | --- | --- | --- | --- |
| OmniVideo-100K [3] | 100K | MCQ, FF | – | – | × |
| OmniAgent [37] | N.R. | TG, MCQ, FF | 58K | × | ✓† |
| Open OmniCoach (Ours) | 95.7K | TG, MCQ, FF | 248.2K | ✓ | ✓ |

本表可见本文是唯一同时支持单次多区间调用与从学生失败中恢复的方案，问答量为 95.7K，格式覆盖 TG、MCQ 与 FF（自由生成），轨迹量达 248.2K。相比之下，OmniVideo-100K 虽有 100K 问答但无轨迹，OmniAgent 有 58K 轨迹但不支持多跨度，其恢复仅为合成自反思或环境错误重试，而本文恢复来自失败学生展开的诊断纠正。原文另报告平均时长与证据标注细节，但这两列未在本表展示。

#### 多跨度取证与从错误中恢复

阶段 2 的动态取证环境允许每个请求指定一个或多个时间区间，并为每个区间独立指定音频、视觉帧或音视频联合 3 种观察模态，单次返回合并为一次联合观察。工具包括 get_frames、get_audio、get_clip 与 get_multi_span，其中多跨度单次可请求 2 到 8 个有序区间，总量上限为 256 帧与 128 秒音频。教师模型仅见任务问题、初始媒体概览与工具接口，在无参考答案条件下逐轮生成观察与思考字段，MCQ 要求选项正确，TG 要求集合级 tIoU（时序交并比）与最小覆盖达阈值，最终保留 230.7K 条轨迹。

阶段 3 针对学生模型的失败展开，每条问题采样 8 条学生轨迹并挑选失败轨迹做错误诊断。验证器先选出影响答案或后续取证的关键步骤，按时间顺序抽取相对历史的新增或修正事实主张，用当前观察检验音视频支撑与行为决策，在首个确认错误处停止并定为恢复点。教师保留学生错误草稿，写入基于媒体的纠正与修订行动，形成观察到错误草稿到纠正到行动的步骤并继续交互至结局检验通过，共得到 17.4K 条反思轨迹，其中 9.7K 条对应 3,926 个困难问题，表现为 8 条学生展开全错或常规教师采样无可接受轨迹。

### 两轮监督微调与逐步证据引导的策略优化

#### 两轮监督微调的冻结与更新边界

训练分两轮监督微调加一轮强化学习。第一轮在 230.7K 条多跨度轨迹上做标准下一词预测，第二轮在合并后的 248.2K 条轨迹上继续训练，得到强化学习的起点。两轮监督学习率均为 1e-5，各训练 2 个轮次，优化器为 AdamW。强化学习阶段采用 SEPO，每任务采样 8 条轨迹，学习率 1e-6，共更新 834 次，推理时最多 12 轮。基座的感知与语言能力被整体更新，未冻结特定模块，教师模型 Gemini 3.6 Flash 只用于数据合成不参与梯度更新。

#### 逐步证据奖励如何缩放轨迹优势

强化学习 RL 的起点是组序列策略优化 GSPO（组序列策略优化），目标是最大化同一问题下 G 条采样轨迹的裁剪目标均值。每条轨迹的奖励由结局奖励与格式奖励相加，MCQ 为选项匹配的二值正确性，TG 参照 TimeLens2 计算，格式奖励检查最终答案是否符合规范。组相对优势为单条总奖励减去组均值，不除以组标准差。下式给出 GSPO 目标，其中 s 为长度归一化序列重要性比率，A 为轨迹级优势，epsilon 为裁剪阈值。

\[\mathcal{J}_{\mathrm{GSPO}}(\theta)=\mathbb{E}_{x,\{\tau_{i}\}}\left[\frac{1}{G}\sum_{i=1}^{G}\ell\!\left(s_{i}(\theta),A_{i}\right)\right].\]

该形式的统计直觉是用组内相对好坏替代绝对奖励，裁剪则限制新旧策略比率偏离过远时的更新幅度。当优势为正时，比率上裁剪防止过度放大单条成功轨迹，当优势为负时，下裁剪防止过度压制。其输出是对整条轨迹所有生成词元施加同一优势，无法区分发现新证据与重复旧观察的步骤，这正是 SEPO 要改进的起点，下一步需要引入逐步证据增益来重缩放每个步骤。

SEPO 用任务级证据标注来评价每步的增量贡献。记 A_x 为标注证据区间集合，C_i,k 为轨迹 i 到步骤 k 实际取回的全部候选片段。评分器在候选集合上做有界穷举子集搜索，选出得分最高的支持子集，当前证据效用为该子集与标注的匹配分 q。为了避免无关候选拉低已获证据的分数，搜索只用于计算效用而不代表模型动作。下式定义历史最优效用与单步增益，U_i,0 初始化为 0。

\[U_{i,k}=\max\left(U_{i,k-1},\widehat{U}_{i,k}\right),\qquad\Delta U_{i,k}=U_{i,k}-U_{i,k-1},\qquad U_{i,0}=0.\]

该式的物理直觉是只奖励覆盖新标注证据的取证，重复或无关检索的增益为 0。取历史最大值保证效用单调不减，增益为当前最优与上一步最优之差。若某步取回片段首次覆盖 E1 或 E2，增益为正，若仅重复已有区间或取回空白，增益为 0。增益序列随后在轨迹内标准化并裁剪，用于调节该步骤对应词元的梯度强度，高增益步骤在正优势轨迹中得到更强增强，在负优势轨迹中受到更弱压制，且不改变优势符号。

将增益转化为优势调节时，先计算轨迹内增益均值 mu_i 与标准差 sigma_i，加稳定项 delta 后标准化并裁剪到负 1 到 1 区间，再按强度 lambda 缩放轨迹级优势的绝对值。下式中 A_i 为轨迹级优势，lambda 在 0 到 1 之间控制调节强度，取 0 即退化为相同代码与奖励下的 GSPO 基线。实现中还把非法或重复调用的轮次协议惩罚折入标准化前的步骤分，对无证据标注任务则增益为 0 但协议项仍生效。

\[\widetilde{A}_{i,k}=A_{i}+\lambda|A_{i}|\operatorname{clip}\!\left(\frac{\Delta U_{i,k}-\mu_{i}}{\sigma_{i}+\delta},-1,1\right).\]

该调节保持符号不变是因为加项为 lambda 乘优势绝对值再乘裁剪后的标准化分，裁剪区间对称但乘数非负偏移不超过 1。当标准化增益为 1 且 lambda 为 0.1 时，正优势步骤的更新强度变为 1.1 倍，负优势步骤在低增益时接近 0.9 倍。若全轨迹增益相同或单轮直接作答，标准化分全为 0，权重为 1。调节后的步骤优势被赋给该步骤生成的所有词元，直接缩放对应词元的策略梯度贡献。

下图用一条示例展开说明了这种差异化奖励的来源，适合对照虚线与实柱阅读。横轴为依次调用 get_clip 与作答的 4 个步骤，纵轴为增益与平均优势，顶部为视频条带上 E1 与 E2 两个标注证据的位置。虚线为 GSPO 对每步施加的同一优势，实柱为每步的增益，只有覆盖新证据的步骤增益为正。

[![原论文 Figure 3：SEPO on one rollout (illustrative values).](https://arxiv.org/html/2611.31891v1/sepo.png)](https://arxiv.org/html/2611.31891v1/sepo.png)

*论文图 3：单条展开中逐步证据增益与统一轨迹优势的对比：仅新证据步骤获正增益（原论文 Figure 3）。*

图中第 1 步取回覆盖 E1 的片段增益为 0.46，第 2 步重复请求增益为 0，第 3 步覆盖 E2 增益为 0.44，第 4 步作答增益为 0。GSPO 对 4 步使用同一水平虚线，而 SEPO 只放大第 1 步与第 3 步的更新，重复步骤不被增强。这种设计使成功轨迹中的冗余调用不搭便车，失败轨迹中的有效取证仍能保留部分正向信号，附录实现中权重被限制在 0.9 到 1.1 之间。

将步骤优势赋给词元后，优化目标采用 GSPO-token 形式，对每条轨迹先按生成词元数 N_i 平均，再在组内平均。下式中 s_i,t 为词元级重要性比率，k(i,t) 表示词元 t 所属步骤，N_i 为轨迹生成词元总数。训练时每个展开批次做一次同策略梯度更新，此时比率为 1，轮次切分的实现与该目标的词元级策略梯度完全一致，比率裁剪界 0.8 到 1.28 仅作数值保护，并附加对冻结 SFT 参考策略的 KL 惩罚系数 0.001。

\[\mathcal{J}_{\mathrm{SEPO}}(\theta)=\mathbb{E}_{x,\{\tau_{i}\}}\left[\frac{1}{G}\sum_{i=1}^{G}\frac{1}{N_{i}}\sum_{t=1}^{N_{i}}\ell\!\left(s_{i,t}(\theta),\widetilde{A}_{i,k(i,t)}\right)\right].\]

该目标的直觉是把轨迹级好坏拆到步骤级执行，证据增益高的步骤承担更多更新责任。当 lambda 为 0.1 且某轮为非法或重复调用时，过程分中的负惩罚会拉低其标准化分，从而在正优势轨迹中减弱增强，在负优势轨迹中加重压制。梯度只流经当前词元的条件生成概率，检索到的原始媒体不直接产生梯度，证据效用只通过优势权重间接驱动策略向更紧凑有效的取证行为移动。

### 音视频理解与通用视频理解上的主结果

#### 评测协议与公平性前提

评测覆盖 5 个音视频理解基准与 5 个通用视频理解基准，前者考察听觉与视觉证据的融合，后者考察时序推理，所有分数均为精度百分比，平均值为多个基准的无加权均值。比较分 3 组，私有模型、开源通用模型与开源智能体模型，本文的增量 Delta 由未舍入分数相对各自基座计算，7B 相对 Qwen2.5-Omni，30B 相对 Qwen3-Omni。基座与本文模型在榜单设置上保持字幕音频条件一致，时序定位另用 mIoU（平均交并比）衡量，过程审计基于 OmniVideoBench 的 1,000 条轨迹与 3,577 条人工步骤证据。

#### 全域视频理解的主结果

下表给出 4 个音视频基准上的精度对比，保留了部分基线便于判断提升来源。列为 WorldSense、Daily-Omni、OmniVideoBench、LVOmniBench 与平均值，未展示 JointAVBench 列，短横表示原文未报告结果。行包含两个基座与其对应的 Open OmniAgent 模型，其中上面一行 Open OmniAgent（Ours）平均 51.3 对应 7B 模型，下面一行平均 58.1 对应 30B-A3B 模型。

| Method | WorldSense | Daily-Omni | OmniVideoBench | LVOmniBench | Avg. |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | 45.4 | 62.1 | 29.3 | 32.0 | 45.1 |
| Qwen3-Omni-Instruct | 54.0 | 71.9 | 38.4 | 35.8 | 52.7 |
| Open OmniAgent (Ours) | 48.9 | 70.2 | 40.4 | 37.8 | 51.3 |
| Open OmniAgent (Ours) | 54.8 | 75.0 | 47.9 | 48.0 | 58.1 |

本表上面一行 Open OmniAgent（Ours）平均 51.3 对应 7B 模型，相对 Qwen2.5-Omni 提升 6.3 个百分点，其中 OmniVideoBench 提升 11.1 个百分点，Daily-Omni 提升 8.1 个百分点。下面一行平均 58.1 对应 30B-A3B 模型，相对 Qwen3-Omni 提升 5.4 个百分点，在本表展示的 4 个基准上均为所比较开源模型中的最优，最大增益出现在 OmniVideoBench 的 9.5 个百分点与 LVOmniBench 的 12.2 个百分点。两档基座同时提升支持了数据与训练方法的迁移性，代价是需要多轮工具交互而非单次前向。

#### 通用视频理解的扩展与实例

下表转向以视觉为中心的通用视频理解，检验交互取证能力是否超出音视频专用基准。列为 Video-MME、Video-MME v2 的精度与评分、LongVideoBench、LVBench 与 VideoZeroBench 的第 3 级精度，Video-MME v2 基线采用榜单的带字幕音频设置，短横同样表示未报告。

| Method | Video-MME | Video-MME v2 | LongVideoBench | LVBench | VZB |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | 64.3 | – | 53.8 | 43.0 | – |
| Qwen3-Omni-Instruct | 70.5 | 34.1 | 66.9 | 50.2 | – |
| Open OmniAgent-7B | 67.9 | 36.5 | 57.1 | 51.7 | 6.4 |
| Open OmniAgent-30B | 75.9 | 44.4 | 67.4 | 63.5 | 12.0 |

表中 30B 模型在 Video-MME 上达 75.9%，Video-MME v2 精度 44.4 分，LVBench 达 63.5%，相对 Qwen3-Omni 分别提升 5.4、10.3 与 13.3 个百分点，并在 Video-MME v2 上超过参数更大的 Qwen3-VL-235B-A22B。7B 模型在 Video-MME 上为 67.9%，LVBench 为 51.7%，相对 Qwen2.5-Omni 分别提升 3.6 与 8.7 个百分点。未胜出项同样存在，例如 LongVideoBench 上 30B 仅提升 0.5 个百分点，说明长视频通用推理的收益并不均匀。

下图上半为 42 分钟视频上的 17 步定位轨迹实例，下半为两档模型相对基座在 5 个基准上的精度柱状对比，适合先看实例如何排除干扰再看整体增益。实例问题为男子推动载有 3 个煤气罐的手推车在石板路上产生 rattling 声，目标为输出时间区间，工具调用包括高分辨率帧检验、并行多跨度搜索与音视频联合确认。

[![原论文 Figure 1：Open-OmniCoach at a glance.](https://arxiv.org/html/2611.31891v1/fig1_teaser.png)](https://arxiv.org/html/2611.31891v1/fig1_teaser.png)

*论文图 1：42 分钟视频上 17 步定位实例与两档模型相对基座的精度提升对比（原论文 Figure 1）。*

上半时间轴从 00:00 到 42:24，11:28 处橙色小车被高分辨率帧判定为街边餐车而排除，13 步并行查询 19:30 到 39:30 的 4 个远距区间并命中 29:16 附近，14 到 16 步用 get_clip 确认煤气罐手推车画面与石板 rattling 声，最终预测为 29:13.0 到 29:17.5，相对人工标注 29:13.5 到 29:17.0 的 IoU（交并比）为 0.78。下半柱状中灰色为基座，浅蓝与深蓝为 7B 与 30B，标注增益与主表一致，例如 LVOmniBench 上 5.8 与 12.2 个百分点，OmniVideoBench 上 11.1 与 9.5 个百分点。

### 多跨度、反思与逐步奖励各自贡献了多少

#### 四阶段叠加的增益分解

下表在 Qwen3-Omni-30B-A3B-Instruct 上逐段叠加多跨度轨迹、反思轨迹、GSPO 与 SEPO，4 个基准均为精度百分比，平均值为 4 基准均值。SFT 变体均从基座训练，强化学习均从反思后检查点启动，便于分离每段增量的贡献。

| Method / Setting | Video understanding Video-MME | Video understanding Video-MME-v2 | Audio-visual reasoning OmniVideoBench | Audio-visual reasoning LVOmniBench | Avg. |
| --- | --- | --- | --- | --- | --- |
| Qwen3-Omni-30B-A3B-Instruct | 70.5 | 34.1 | 38.4 | 35.8 | 44.7 |
| + Multi-Span Trajectory | 72.9 | 40.7 | 44.7 | 46.8 | 51.3 |
| + Reflection Trajectory | 74.4 | 42.6 | 46.3 | 47.5 | 52.7 |
| + GSPO (RL baseline) | 75.4 | 43.3 | 46.9 | 47.7 | 53.3 |
| + SEPO (Ours, final) | 75.9 | 44.4 | 47.9 | 48.0 | 54.1 |

基座平均 44.7%，加入多跨度后达 51.3%，再加反思后达 52.7%，GSPO 达 53.3%，SEPO 最终达 54.1%。其中 SEPO 相对 GSPO 在 Video-MME v2 上再提升 1.10 个百分点，在 OmniVideoBench 上再提升 0.99 个百分点。4 步均为正增益，且多跨度贡献最大，说明主动取证与纠错监督互补，而逐步奖励在强基线上仍有可测提升。

#### 反思的等量对照、扩展性与过程行为

为排除反思增益来自额外轨迹量，原文在 25% 子集上做等量对照，总量 62.0K 条中 57.7K 为多跨度，4.4K 在成功与反思之间替换。用 4.4K 成功轨迹时 4 基准均值 48.0%，用完整反思时 49.2%，仅监督首个纠正轮时已达 48.5% 且每轮词元更少。查询源对照中自有查询相对 OmniVideo-100K 查询平均高 1.0 个百分点。扩展性上自有管线从 25% 的 51.75% 单调升至 100% 的 56.01%，而直接微调在 75% 后回落，表明交互轨迹扩展性更好。

下表在 OmniVideoBench 的 1,000 条评测轨迹上审计中间取证行为，指标方向已在列头标明。平均调用次数、无效或无进展比例越低越好，平均请求时长越短越好，30 秒内聚焦命中与错误纠正比例越高越好。比较对象为反思后 SFT、GSPO 与 SEPO，便于观察强化学习是否带来更紧凑的搜索。

| Method | Avg. Calls | Invalid / No-Prog. Calls (%) ↓ | Avg. Span (s) ↓ | Focused Hit ≤30 s (%) ↑ | Error-to-Correct (+ Ans. Right) (%) ↑ |
| --- | --- | --- | --- | --- | --- |
| Reflection SFT | 3.9 | 8.4 | 43.3 | 58.2 | 9.0 (5.5) |
| + GSPO (λ=0) | 5.4 | 15.1 | 46.0 | 61.3 | 12.0 (5.0) |
| + SEPO (λ=0.1) | 5.5 | 13.2 | 42.1 | 62.9 | 12.6 (7.1) |

反思后 SFT 平均 3.9 次调用，强化学习后增至 5.4 到 5.5 次，但 SEPO 相对 GSPO 把无效或无进展调用从 15.1% 降至 13.2%，平均区间从 46.0 秒收紧至 42.1 秒，聚焦命中从 61.3% 升至 62.9%，早期错误纠正从 12.0% 升至 12.6%，且纠正后答对从 5.0% 升至 7.1%。这组权衡说明性能提升伴随更多调用，代价是交互轮次与计算开销上升，好在无效调用占比下降部分抵消了开销。

下图对比了自有数据与 OmniVideo-100K 在 25% 到 100% 训练量下的平均精度曲线，适合判断扩展性差异。横轴为训练数据比例，纵轴为 4 个基准的平均精度，蓝色为本文管线的智能体微调，橙色为 OmniVideo-100K 的直接微调。

[![原论文 Figure 4：Data scaling using 25%–100% of OmniVideo-100K and our dataset. Per-benchmark results are in Tab. 8.](https://arxiv.org/html/2611.31891v1/task_data_scaling_compact.svg)](https://arxiv.org/html/2611.31891v1/task_data_scaling_compact.svg)

*论文图 4：自有管线与直接微调在 25% 到 100% 数据量下的平均精度扩展曲线（原论文 Figure 4）。*

曲线显示橙色在 75% 达到约 54.5% 后在 100% 回落至约 53.6%，蓝色从 25% 的约 51.8% 单调上升至 100% 的约 56.0%，在 75% 处实现反超。这种背离与附录按基准拆分一致，自有数据在 OmniVideoBench 与 LVOmniBench 上随数据量持续走高，而直接问答监督难以教会多轮取证。局限是该对比混合了数据内容与监督格式两种差异，不能单独归因于查询质量。

### 方法边界、复现核对与何时值得尝试

方法的假设边界需要明确。轨迹合成依赖强教师模型与多阶段验证，成本较高，反思仅覆盖已诊断的感知幻觉与决策错误，未覆盖全部失效模式。评测限于少数全域骨干与榜单基准，长视频时序定位虽有 mIoU 提升，但 30B 在 TimeLens 上 49.8% 仍低于 Gemini-2.5-Pro 的 58.2%，通用长视频推理的增益也不均匀，LongVideoBench 提升有限即是一例。

复现核对需区分三件事。论文文末给出项目页、代码与模型数据 3 个链接，本次第三方可达性记录显示 3 个链接当前可达，这只证明链接可达，不证明作者长期维护或许可开放。附录 8 到 12 给出时序定位、扩展性、过程审计、任务构造、工具接口与奖励实现的细节，是复现奖励与验证流程的关键。训练超参与工具上限已披露，但硬件型号与耗时原文未披露，需自行补测。

工程选型上，若任务需要长视频多证据关联或音视频联合定位，且能承担多轮交互延迟，本文的动态取证加反思监督值得尝试，第一步可从 7B 智能体微调复现开始。若为短视频单次问答或延迟敏感场景，直接微调可能更经济。补验证应包括无效调用率、聚焦命中与人工听测，因为本文主结果均为精度与 mIoU，缺少 MOS 类主观听测，无法直接推断听感层面表现。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.31891v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：30B在5个音视频基准平均58.1%超基座5.4个百分点且7B跨基座提升6.3个百分点并在Video-MME v2超越235B模型。

- 核心优势：三阶段管线合成230.7K条多跨度轨迹加17.4K条反思轨迹共248.2K条并经双遍验证器检验充分性。

- 核心优势：同代码库同奖励同KL的GSPO对照下SEPO再提升约0.8个百分点且审计跨度42.1秒更聚焦无效调用更少。

- 主要短板：未报告置信区间与统计显著性检验且过程审计盲判由模型完成而无人工对照支撑。

- 主要短板：未披露训练硬件型号数量与时长及部分时间定位过滤阈值使复现预算难估计。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
