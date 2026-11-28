---
title: "Spacewalk-18: A Benchmark for Multimodal and Long-form Procedural Video Understanding in Novel Domains"
date: 2026-11-28
draft: false
description: "论文以 18 段 96 小时太空行走录像构建步骤识别与问答双任务基准，证明人类以 67.0% 远超最强模型的 36.15% 与 46.54%，而冻结模型加任务摘要可将问答从 32.45% 提升至 81.12%，代价是摘要属特权信息且交并比长期处于个位数。"
tags: ["数据集", "基准设计", "音视频问答", "视频动作识别"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "太空行走长视频如何考验模型的域外泛化与长时推理"
paper_digest_original_title: "Spacewalk-18: A Benchmark for Multimodal and Long-form Procedural Video Understanding in Novel Domains"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper"
paper_digest_workbench_source_sha256: "32e4aff535b2582b9bba4b38d21cd4a56f795b60888645673226a8e3d30f0354"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "视频动作识别"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文以 18 段 96 小时太空行走录像构建步骤识别与问答双任务基准，证明人类以 67.0% 远超最强模型的 36.15% 与 46.54%，而冻结模型加任务摘要可将问答从 32.45% 提升至 81.12%，代价是摘要属特权信息且交并比长期处于个位数。"
paper_digest_reader_sections: [{"heading":"太空舱外作业视频为何成为域外泛化试金石","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两项任务与密集标注流水线如何构成完整基准","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"检索式匹配与问答式推理的端到端数据流","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"人类 67% 与模型不足半数的差距在何种协议下成立","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"长时上下文与多模态消融揭示何种权衡与摘要适配","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界复现前提与工程选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Brown University"],"name":"Zitian Tang"},{"affiliations":["Brown University"],"name":"Rohan Myer Krishnan"},{"affiliations":["Brown University"],"name":"Zhiqiu Yu"},{"affiliations":["Brown University"],"name":"Chen Sun"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"c4d74be9aa9d1c3abb78a494206a32afa7c5169f962d6d6f44d63f139d0b966b","url":"/audio-research-portal/client/papers/2026-11-28/conference-f4869ecd1e784090b31c5251/citation.bib"},"citation.json":{"sha256":"36ed4f6fa52dc36200bb670fd798f94cb5a94d00472d27cd8106cbc4dd680da5","url":"/audio-research-portal/client/papers/2026-11-28/conference-f4869ecd1e784090b31c5251/citation.json"},"citation.ris":{"sha256":"520de29d299034a08ba00e65d2c64f0ba34b21822a29aaa14d56d7329e34bf6c","url":"/audio-research-portal/client/papers/2026-11-28/conference-f4869ecd1e784090b31c5251/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"263360ed24b03786a3958fab03013b208df7e348ba9133d4d6b27debee242492","url":"/audio-research-portal/client/papers/2026-11-28/conference-f4869ecd1e784090b31c5251/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "bfab67e79d8752ed16c871c005b05aa6d3fb188ada83135b9c628b1f30cbb8ef"
paper_digest_api_reader_plan_sha256: "79212e4d8b58628b830e325e2d33e3826e24df6ded55d4b59a04bcdb49a09fbf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "727759935a979f31f67f79a05f9e245eabcc530720fbc8cbdf012115702132ae"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6fe397577baa5ac0f74b5b3184796337f29a9c2ef8d4cb2399a2a3e128954eb6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0071a2ed97fda6bf5b3cd86ef8c564cf5b625f212d9897ffb1ef05d3c369e61f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9d167b17d48e1e8bf39bb5be88b1d2123c6530ed6f2548df383bf9b1a02c8291"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"task","id":"task.video-action-recognition","label":"视频动作识别"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 太空行走长视频如何考验模型的域外泛化与长时推理

> 英文题目：*Spacewalk-18: A Benchmark for Multimodal and Long-form Procedural Video Understanding in Novel Domains*

> 会议身份：`conference:wacv:2026:conference-paper-id:Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [音视频问答](/audio-research-portal/papers/?concept=task.av-question-answering)；[视频动作识别](/audio-research-portal/papers/?concept=task.video-action-recognition)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 7.5/10 | 技术严谨 6.4/10 | 实验充分 7.7/10 | 清晰度 5.6/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.2/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Zitian Tang：Brown University
- Rohan Myer Krishnan：Brown University
- Zhiqiu Yu：Brown University
- Chen Sun：Brown University

## 📌 核心摘要

**问题与瓶颈：** 输入为国际空间站舱外活动录像，单次任务长达数小时，混合第一与第三人称视角，并配有语音转写文本，输出要求将录像切分为步骤序列并回答需跨时定位的推理问题。现有程序视频基准多来自厨房与组装等日常域，预训练视频语言模型习惯短片段与视听对齐假设，在太空视觉外观迥异、语音描述与当前画面错位、两名航天员并行作业导致步骤碎片化时失效。人类解决步骤识别需要约 140 秒时间证书长度，平均片段长约 89 秒，属极长视频范畴，为 EgoSchema 的约 1.4 倍，稀疏采样在扩大窗口时丢失细节，长时依赖与新域泛化的矛盾构成根本瓶颈。

**核心思路与方法架构：** 与直接在日常域微调的路线相比，本文增量在于新建 Spacewalk-18 基准与高效标注协议，并系统比较检索式对比模型与问答式大模型的长窗与多模态利用方式。对单个待判时刻 t，取窗口为 1 分钟至 5 分钟的片段 Vt,w 与对应转写 Tt,w，动画侧步骤表示为视频、解说转写与人工标题特征拼接，录像侧为视频与转写特征拼接，经相似度检索或多选问答输出步骤标号。稀疏采样按预训练帧数均匀取帧，稠密采样按 1 FPS 编码，长时特征库将长窗切分为短段并用冻结编码器逐段编码后再池化或经非局部与 Transformer 聚合，末层微调冻结主干只训练线性映射 Gθ，全层微调更新主干而冻结动画特征，问答则输入整小时视频并搜索证据，推理均为含未来上下文的离线窗口式而非严格因果流式。

**关键实验与核心代价：** 在 Spacewalk-18 步骤识别 w 为 5 分钟条件下，以准确率 Accuracy 为指标，InternVL3-8B 为 25.75%，高于同条件 Qwen2.5-VL-7B 的 22.99%，两者均低于人类在无限制上下文下的 67.0%。在问答任务中，以准确率 Accuracy 为指标，GPT-5 为 46.54%，高于开源最强的 LongVU-7B 的 36.44%。消融显示摘要适配收益主导，以准确率 Accuracy 为指标，表 4 中 Caption 增强大模型在步骤识别中从无摘要时的 23.50% 变为有步骤预言时的 28.49%，GPT-4o 问答从无摘要时的 32.45% 变为动画摘要时的 55.59% 再变为步骤预言时的 81.12%，InternVideo 从 9.48% 变为微调后的 13.34%。一次前馈的稀疏与稠密采样随窗口扩大不再提升，长时特征库方法在平均精度均值 mAP 上随上下文延长呈上升趋势，稠密 1 FPS 直接编码受显存限制因帧数随窗长线性增长。

**适用边界与深读导览：** 结论成立前提是提供完整步骤列表或动画摘要等特权信息、窗口截断推理以及既定任务划分，未覆盖无步骤先验的开放词汇发现、小时级无截断端到端推理与在轨实时部署场景。基准已在论文所给页面发布，标注工具公开发布，可对照补充视频观察视听错位与并行作业现象，方法细节可查下方长文对应架构与训练章节，长窗曲线与模态消融可查实验表格与相邻分析。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 太空舱外作业视频为何成为域外泛化试金石

程序视频学习希望具身智能体从人类演示中提炼可执行技能，现有程序基准多取自厨房与家务场景，模型已熟悉锅碗与桌面布局。太空行走录像则来自国际空间站舱外活动，视觉外观、操作对象与叙述方式均与地面数据差异显著。论文收集 18 段录像共 96 小时，每段包含动画预览与数小时实拍，平均每段约 25 个步骤，为预训练视频语言模型提供了域外泛化考验。由于真实出舱次数有限，数据天然稀缺且流程高度结构化，既考验语义理解也考验长时推理。

为建立直观印象，可先看原论文首图的三排对照。上排并置太空与厨房视角，中排对比实拍画面与地面控制中心语音，下排展示同一任务间隔 60 秒的远近视角。它把域外差异、多模态错位与长时依赖并置呈现，下文将结合像素逐排解读。这种编排有助于初学者一次看清基准的三项主张来源，并理解后续任务为何需要双模态与长窗。

[![原论文 Figure 1：Key properties of Spacewalk-18: (1) Domain generalization: a side-by-side comparison of a sample…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/847a187b35a5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/847a187b35a5/figure-1.png)

*论文图 1：三排对照展示域外差异、多模态错位与长时依赖：太空与厨房视角、语音与画面错位及间隔 60 秒同任务（原论文 Figure 1）。*

上排左侧为太空自视角手套操作舱体设备并带直播角标，右侧为厨房俯视双手切菜与橙子香蕉食材，材质光照完全不同。中排左侧为地球弧线与舱体配解说拉到底，右侧为地面控制大厅配偏航 90 度指令，说明当前语音常描述另一时刻画面。下排左侧为太阳能帆板远景宇航员，右侧为 60 秒后同任务近景释放螺栓，需跨时关联才能判定为释放帆板。

基准的难点集中在三处。开放词汇使训练与测试步骤标签不重叠，涉及 51 种物体与 47 种原子动作，措辞因乘组而异。视觉域外且第一与第三人称混合，2 名宇航员常并行不同步骤并出现非连续片段。长时性以时间证书衡量，平均片段 89 秒而确认标签需 140 秒上下文，为最近可比集的 1.4 倍，属于超长时范畴。

### 两项任务与密集标注流水线如何构成完整基准

#### 标注流程与切分策略

数据来自 18 段公开舱外活动录像，总时长 96 小时。每段录像附带动画预览，先由人工将预览切为步骤并配文字说明，平均每段约 25 个步骤。音频按 10 分钟切块送 Deepgram 获取解说文本，转写与画面共同作为后续标注与评测依据。该设计把任务清单固定为动画步骤，避免在数小时长视频上反复定义步骤。

实拍部分采用 PySceneDetect 按镜头边界过分割，共得到 31,812 个短片段。抽查显示仅 6% 片段包含多于一个步骤，因切分引入的错标约占 4% 帧。标注界面同时呈现动画步骤与待标片段，标注者可回看整段录像作为上下文，从步骤列表或无关或不确定中选择。每个片段由至少 3 人标注并取多数投票，相邻同标签片段合并后得到 3,753 个片段，平均长 92 秒，免去了逐帧绘制边界的重负担。

边界破碎与无关镜头是标注难点。单一步骤常被任务控制中心画面、蓝屏与计划外抢做镜头打断，难以一次画准起止。为此先过分割再逐段标注，标注时可回看整段录像，借助前后动作与已完成待完成步骤推断当前。无关类统一收纳控制中心、蓝屏与未列入计划的操作，相邻同标签事后合并为真实区间，兼顾效率与边界可用性。

#### 开放词汇与任务定义

标签空间随任务变化，全部 455 个动画步骤均不含无关类。每步平均对应 5 个合并片段，约 9 分钟视频。名词与动词过滤得到 51 种对象与 47 种原子动作，覆盖电池拆装与脚限位器进出等操作。训练集措辞与测试集不同，例如训练出现 2 人协作拆卸电池，测试则为不同乘组从特定槽位取出新电池，迫使模型理解语义而非记忆编号。双人常在同一时间执行不同步骤，步骤以多段非连续区间出现，并混合第一与第三人称视角。为保证质量，标注者经培训并在保留集达到 80% 准确率后方可上岗。18 段按 10 比 2 比 6 划为训练验证测试，使各划分步骤数均衡。

步骤识别在时间戳 \(t\) 处进行，给定该任务含 \(K\) 个步骤的清单，要求从 \(K\) 加一类中预测当前步骤，0 表示无关。模型可见以 \(t\) 为中心长 \(w\) 的片段 \([t-w/2, t+w/2]\)，包含画面与窗内转写。每段视频构造 2,000 个样本，平均每 10 秒一点，每个步骤均匀抽取 \(2000/(K+1)\) 个时间点。评分采用准确率与平均精度均值，将相邻同预测合并为区间后以交并比衡量与真实边界的重合，采样密度变化对交并比影响很小。

问答将每段视频切为 1 小时连续段，共收集 376 道四选一题目。题型兼顾全局目标与细节定位推理，例如询问先取出何种设备及如何使用，或一人执行某任务时另一人同时行为。部分题型借助步骤标注自动生成，例如询问一人在另一人执行某任务期间的行为。评测时模型需在整小时输入中检索证据，重点考验跨时推理而非单帧识别，与步骤识别共同构成由片段标签到长时推理的递进。

该域视觉新颖且声画常错位，解说对应画面常出现在相邻镜头，单帧难以判定。论文以 5 秒为单位请 8 名标注者在 2.5 小时视频上标定所需上下文，得到平均片段长 89 秒而时间证书长 140 秒，约为最近可比数据的 1.4 倍，属于极长视频范畴。人类在可自由回看整段录像时，双模态达到 67.0% 准确率，高于仅看画面的 52.2% 与仅听解说的 39.1%，说明两路信息互补，为后文多模态对比提供了参照。

长时依赖以时间证书量化。标注者面对按 5 秒切分的碎块，需勾出为确认标签所需的最小子集。论文组织 8 人在 2.5 小时视频上实测，平均片段长 89 秒而所需上下文达 140 秒，约为 EgoSchema 的 1.4 倍，落入极长视频区间。该数值说明单帧加相邻几秒不足以判定，需跨越太阳帆作业与拧螺栓等前后镜头才能确认正在释放太阳帆。

### 检索式匹配与问答式推理的端到端数据流

#### 对比检索与特征构造

评测覆盖对比式与生成式两路。对比如 EgoVLP、VideoCLIP、InternVideo 与 InternVideo2，提供视频与文本对齐嵌入。生成式含 LLaVA-Next-Video、VideoLLaMA2、LongVU、Qwen2.5-VL、InternVL3 与 GPT-4o、GPT-5，另有帧描述增强的大语言模型，以 LLaVA-1.5-13B 写帧描述再交 GPT-4o 推理，纯视频对照为 VideoMAE 接句向量映射。

以 \(t\) 处 1 分钟窗为例，输入含按稀疏策略抽取的 \(k\) 帧与窗内转写文本，采样数沿用预训练设定而与窗长无关。动画侧特征拼接视频、解说与步骤说明 3 路编码，实拍侧拼接视频与转写并重复转写以对齐维度。两路相似度取最大者为预测，动画提供步骤级摘要先验，实拍提供当前证据，转写弥补视觉模糊。

零样本检索时动画侧将视频、解说与步骤说明 3 路编码拼接，实拍侧将视频与转写拼接并把转写重复一次以对齐维度。无关类不用视频，而以一段描述控制中心、蓝屏与计划外任务的文字重复三次构造特征。预测计算实拍与各动画特征的相似度并取最大者，相似度高者即判定为当前步骤，文本重复仅为维度对齐而不引入新信息。

问答与识别共用多选形式。生成式在识别中被问及视频中间帧所属步骤，需在 0 至 \(K\) 间选择，备选项来自该任务动画清单与说明。问答则面对整小时输入，需自行搜索相关片段，题干与 4 个备选均由有经验标注者编写，部分题型借助步骤标注自动生成。描述增强路线先逐帧写说明再推理，帧数与推理计算解耦，利于跨时搜索但丢失细粒度运动。

#### 微调与长窗聚合

零样本直接检索后，末层微调冻结主干并学习线性映射，以交叉熵将实拍特征拉向正确动画特征，无关类不学单一向量而在验证集以最优 F1 选阈值，低于阈值判无关。全层微调更新视频编码器并冻结动画特征。长上下文另试 1 帧每秒稠密编码与长期特征库，含平均池化、历史未来拼接、非局部块与两层变换器聚合。

稀疏抽样计算量稳定但长窗会丢失细节，稠密每秒编码随窗长线性增长而受显存限制。长期特征库先以冻结编码器按秒级分段各取一个嵌入，再对分段嵌入做聚合。平均池化最简，历史未来分别池化再与当前拼接可保留时序，非局部块与两层变换器则学习加权。论文在冻结的 InternVideo 特征上对比这些做法，以检验长窗利用能力而不改动主干。

生成式推理将识别转为多选问答，提示给出视频、转写与全部步骤说明，要求选择中间帧所属步骤。问答输入为整小时视频，模型需自行搜索相关片段。描述增强路线先逐帧生成文字再推理，计算量与帧数解耦但丢失细粒度运动，适合长时问答而步骤级定位仍弱。纯视频对照先抽取视频嵌入再映射到步骤说明的句向量空间，用于检验无文本时视觉泛化的下限。

阈值与代价取舍明确。无关类不学单一向量，而在验证集以最优 F1 选定阈值，低于阈值判无关，假设验证与测试分布一致。全层微调因计算代价高仅在 InternVideo 上实施，动画特征冻结而视频编码器更新。稠密每秒编码随窗长线性增长而受显存约束，稀疏抽样计算稳定但丢失细节，长期特征库以冻结编码器分段编码再聚合，兼顾长窗与可行性。

### 人类 67% 与模型不足半数的差距在何种协议下成立

公平性需先明确。人类标注者可回看整段录像不限上下文，模型仅见固定窗。对比式含零样本与训练集微调，生成式多为零样本。随机猜测步骤准确率约 4.22%，问答约 25.00%。准确率、平均精度均值与交并比方向均为越高越好，交并比对采样密度不敏感，适合连续边界评价。微调仅在训练划分学习映射，测试步骤词汇全新。

为理解长时主张的度量方式，可看时间证书散点图。横轴为片段长度，纵轴为确认标签所需最少上下文，圆点大小表征规模，内嵌小图放大短视频区。该图把太空行走与十余个常用集放在同一坐标系，下文结合像素说明 1.4 倍的由来。初学者可先抓住纵轴越高表征越依赖长时信息这一要点。

[![原论文 Figure 3：Temporal certificate (“long-form-ness”) lengths across commonly adopted datasets with action…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/847a187b35a5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/847a187b35a5/figure-3.png)

*论文图 3：时间证书散点对比长时依赖：横轴片段长度纵轴所需上下文，太空行走居顶并以箭头标 1.4 倍（原论文 Figure 3）。*

像素显示太空行走圆点位于纵轴约 140 秒顶部，EgoSchema 约 100 秒次高，箭头标注 1.4 倍。左下内嵌区聚集 UCF101、Kinetics、Something-Something、AVA 与 Youtube-8m 等短证书集，右下为 LVU 与 ActivityNet-QA 等长片段但低证书集。该布局表明太空行走并非单纯视频长，而是判定所需上下文最长，需跨分钟关联动作与对象。

下表精简整理原文逐字报告的关键数字，保留人类上限、开源与私有最优及纯视频对照，单位与精度与原文一致。原文完整 Table 2（本精简表未列出）还包含多窗格下 EgoVLP 与 VideoCLIP 等基线的准确率、平均精度均值与交并比，阅读极值结论时应以完整表为准。本表仅用于快速对照差距量级，详细趋势见下段分析。

| 评测对象与条件 | 步骤识别准确率 | 问答准确率 |
| --- | --- | --- |
| 人类，多模态，不限上下文 | 67.0% | — |
| 人类，仅视频 | 52.2% | — |
| 人类，仅音频转录 | 39.1% | — |
| 开源最优 InternVL3-8B | 25.75% | — |
| 私有最优 GPT-5 | 36.15% | 46.54% |
| 开源问答最优 LongVU | — | 36.44% |
| 纯视频 VideoMAE，5 分钟窗 | 10.34% | — |

人类多模态达 67.0%，仅视频 52.2%，仅音频转录 39.1%，证明任务本质多模态。开源步骤识别最优 InternVL3-8B 为 25.75%，私有 GPT-5 为 36.15%，问答 GPT-5 为 46.54%，开源 LongVU 为 36.44%，纯视频 VideoMAE 仅 10.34%。即使最强模型仍远低于人类，且交并比多为个位数，说明域外泛化与长时定位尚未解决。

### 长时上下文与多模态消融揭示何种权衡与摘要适配

上下文消融显示先升后降。对比式末层微调与生成式零样本在 3 分钟至 10 分钟达峰，延至 15 分钟与 20 分钟反而下降，极长窗引入无关信息。稀疏与稠密一次前馈均不能随窗延长提升平均精度均值，而长期特征库各变体平均精度均值随窗延长明显上行，其中历史未来拼接在准确率与交并比上相对稳健。

模态消融中人类双模态最优，视频单模态次之，音频最弱，符合人类擅长跨模态抽象。多数开源模型双模态最优，但私有模型仅文本反而最高，可能依赖语言先验。纯视频下 InternVideo 优于多数生成式，显示其视觉泛化相对稳健，但绝对值仍低，单靠视觉无法区分细粒度步骤。

下表为原文 Table 4 的完整呈现，比较微调与摘要适配的相对收益。行覆盖步骤识别与问答两任务，列含方法、是否提供摘要与准确率，精度保留一位小数并带百分号。本表无需精简声明，程序将编译全部 8 行 4 列，数值与原矩阵一一对应，末行多余字符按排版出入理解。

| Task | Method | Summary | Accuracy (%) |
| --- | --- | --- | --- |
|  | InternVideo | - | 9.48 |
| Step | InternVideo (fine-tuned) | - | 13.34 |
| Recog. | Caption-enhanced LLM | - | 23.50 |
|  | Caption-enhanced LLM | Step Oracle | 28.49 |
|  | GPT-4o | - | 32.45 |
| QA | GPT-4o | Animation | 55.59 |
|  | GPT-4o | Step Oracle | 81.12i |

步骤识别中 InternVideo 零样本 9.48%，微调仅升至 13.34%，描述增强基线 23.50% 加步骤清单升至 28.49%，增益超过微调。问答中 GPT-4o 基线 32.45%，加 5 分钟动画升至 55.59%，加步骤清单达 81.12%（原矩阵记为 81.12i，多一字符）。摘要虽属特权信息，却指明冻结模型加浓缩知识比直接微调更有效的适配方向。

### 假设边界复现前提与工程选型建议

#### 假设与未验证条件

结论成立依赖三项假设。镜头过分割假设单片段至多对应一步，抽查中仅 6% 片段包含多步，因镜头切换引入的错标约占 4% 帧，被视为可忽略的代价。每段训练验证测试视频取 2,000 个时间点，平均每 10 秒一点，假设足以代表数小时录像，连续边界交并比对采样密度不敏感支撑该假设。无关类别阈值在验证集以最优 F1 选取，假设验证与测试分布一致，域外波动可能使阈值偏移。

多项部署条件仍未验证。原文未报告延迟吞吐与显存占用，长窗与分段编码再汇聚的计算代价未知。方差置信区间与听测规模缺失，失败案例仅在附录定性展示。问答仅测零样本，微调问答与跨任务迁移未测。问答按小时级连续片段组织，共 376 道四选一题目，涵盖高层目标与细节定位推理，部分由步骤标注自动生成并行任务提问。动画预览与步骤清单属于凝练后的特权摘要，真实部署无法直接获取，增益外推需谨慎。

人类经 3.5 分钟示例后达到 67% 准确率，远超论文报告的步骤识别水平，开源模型中 InternVL3-8B 最高约 25.75%，专有模型中 GPT-5 最高约 36.15%。步骤识别以时间戳为中心截取窗长片段并同时送入画面与解说文本，在 1 分钟 3 分钟 5 分钟等窗长下比较，人类可回看整段录像。问答中 GPT-5 达到 46.54%，具备长时压缩机制的 LongVU 达到 36.44%，纯视频对照在 5 分钟窗下仅 10.34% 准确率、12.91% 平均精度均值与 2.97% 交并比，说明域外视觉泛化与长时利用仍是瓶颈。人类时间证书约 2.3 分钟，而开源模型随窗增大先升后降，无法持续受益。

模态消融印证互补。人类双模态达 67.0% 准确率，高于仅看画面的 52.2% 与仅听解说的 39.1%。多数开源模型双模态最优，专有模型仅看文本反而更高，可能与其语言先验强有关。InternVideo 虽整体弱于生成式，但在纯视频条件下优于多数模型，显示其视觉泛化更稳。人类更善从视频提炼抽象概念并跨模态匹配，而模型更依赖文本，视觉域外泛化仍弱。

#### 复现与选型建议

复现需注意。论文文内给出基准页面地址并说明标注流程，训练验证测试按 10 比 2 比 6 划分，采样与指标定义明确。音频按 10 分钟切分后提取解说文本，镜头边界检测过分割后再由至少 3 人标注取多数，合并相邻同标签片段得到连续边界。对比式检索将动画画面解说与步骤描述拼接为步骤特征，录像片段重复文本特征以对齐维度，阈值法判定无关类别。代码版本权重下载与许可细节原文未披露，转写与切分依赖外部工具版本，复现时需固定这两处以保证切分与文本一致。

工程选型上，若面对新域长视频，优先尝试冻结生成式模型加任务级摘要，而非直接全量微调。对比式模型可配历史未来拼接的特征库以利用长窗。应同时提供视频与文本，纯视频上限低。预期交并比长期处于低位，应以准确率与平均精度均值为主要观察，辅以人工抽查时间边界。问答组织与步骤识别共用长时多模态理解目标，摘要先行压缩全局结构再做局部判定的思路在两类任务中均有体现。

摘要适配的增益在论文对比中十分明显。描述增强路线由帧描述器先将画面转写为文字，再由大语言推理器综合判断，仅靠加入步骤清单便从 23.50% 升至 28.49%，超过将 InternVideo 从 9.48% 微调至 13.34% 的增益。问答中动画摘要将 GPT-4o 从 32.45% 提至 55.59%，步骤清单更提至 81.12%。两者虽属特权信息，但指明以凝练知识适配长视频的方向，即先压缩全局任务结构再做局部判定。

窗长消融显示先升后降。人类时间证书约 2.3 分钟，可自由回看整段录像。开源模型随窗增大初期受益，极长后反而下降，无法持续利用。一次前向的稀疏与稠密抽样表现相近，扩窗不增益，稠密抽样按每秒一帧直接编码，受显存限制难以随窗线性扩展。长期特征库先分段编码再汇聚，平均精度均值随窗延长呈上升趋势，其中历史未来拼接在准确率与交并比上更优，说明分段编码再聚合更适于长视频。

## ⚙️ 关键实现与复现规格

- **训练与评测数据**：训练与评测使用 18 段太空行走录像共 96 小时，31,812 个过分割片段合并为 3,753 个片段，455 个动画步骤标签，51 种物体与 47 种原子动作，按 10 比 2 比 6 划分训练验证测试，每段采样 2,000 点，问答 376 道四选一
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时，仅说明使用布朗大学计算与可视化中心资源，全层微调因计算代价高仅在 InternVideo 上执行
- **核心超参数与配置**：稀疏采样帧数沿用各模型预训练设定，稠密采样为 1 帧每秒，长期特征库含平均池化与拼接及非局部块与两层变换器，无关阈值在验证集以最优 F1 选取，优化器与学习率等原文未披露
- **推理速度与部署开销**：原文未披露延迟吞吐显存或参数量，仅报告准确率平均精度均值与交并比随 1 分钟至 20 分钟窗的变化，问答输入为整小时视频需检索证据
- **开源产物与协议状态**：原文给出基准页面地址并提及标注工具，训练验证测试划分与指标定义明确，代码版本权重下载与许可细节原文未披露
- **附录与补充材料要点**：附录含标注界面示例物体动作统计度量讨论提示词特征库细节定性成功失败案例及优化器引用，失效模式以定性为主，方差与置信区间未报告

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 7.5/10 | 技术严谨 6.4/10 | 实验充分 7.7/10 | 清晰度 5.6/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 6.2/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:wacv:2026:conference-paper-id:Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Tang_Spacewalk-18_A_Benchmark_for_Multimodal_and_Long-form_Procedural_Video_Understanding_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以过分割加三人众数与80%上岗门槛构建96小时455步骤密集标注，协议高效且过程可核对。

- 核心优势：在相同5分钟窗口下系统对比十余种对比模型与视频大模型，并含VideoMAE视频-only负对照与去年层全层微调消融。

- 核心优势：发现摘要适配主导增益，GPT-4o问答从32.45%经动画摘要升至55.59%再经步骤预言升至81.12%，指导明确。

- 主要短板：表1中GPT-5步骤识别36.16%与正文5.3节36.15%存在0.01%字面出入且原文未解释，另有图注与像素矛盾。

- 主要短板：人类无限制上下文与模型截断窗口比较条件不对等，时间证书仅基于2.5小时子集与8名标注者，公平性受损。

- 主要短板：基准与标注工具声称已发布但明确记录未发现可验证官方HTTPS资源URL，且无新权重与评测代码。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
