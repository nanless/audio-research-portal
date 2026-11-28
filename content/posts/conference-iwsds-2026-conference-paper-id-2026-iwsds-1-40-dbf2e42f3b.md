---
title: "ReflectOR: an LLM-based Agent for Post-Operative Surgical Debriefing"
date: 2026-11-27
draft: false
description: "针对术后复盘常被压缩且依赖记忆易漏信息的问题，ReflectOR 采用音频增强转写加协调器调度六个专科子智能体的两段设计，在 5 分钟意大利语模拟手术音频上以零样本取得转写 10.72% 与分离 10.89% 的最低误差，而代价是结论高度依赖音频质量且仅经单中心受控小样本定性验证。"
tags: ["信号处理", "工具增强与约束解码", "语音识别", "说话人分离标注", "语音摘要"]
categories: ["iwsds-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "手术室术后复盘智能体：从噪声对话到结构化总结"
paper_digest_original_title: "ReflectOR: an LLM-based Agent for Post-Operative Surgical Debriefing"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.40"
paper_digest_workbench_source_sha256: "2d937e42030e93b3ca983f68fb31d2294046b7e3cd43934ae88ccd6d3bf64f34"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.iwsds-1.40/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.iwsds-1.40.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音摘要"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "针对术后复盘常被压缩且依赖记忆易漏信息的问题，ReflectOR 采用音频增强转写加协调器调度六个专科子智能体的两段设计，在 5 分钟意大利语模拟手术音频上以零样本取得转写 10.72% 与分离 10.89% 的最低误差，而代价是结论高度依赖音频质量且仅经单中心受控小样本定性验证。"
paper_digest_reader_sections: [{"heading":"术后复盘为何总被压缩：时间压力与记忆依赖下的信息丢失","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"ReflectOR 的两段式总体设计：先做干净转写再做专科分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"音频处理链路：从手术视频到带说话人与时间戳的终稿","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"协调器调度六个专科子智能体：请求拆解与报告汇总","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"零样本意大利语手术音频上的转写分离效果与定性演示","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"小样本定性验证的边界：前提、代价与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Information Engineering and Computer Science, University of Trento, Italy"],"name":"Lorenzo Fumi"},{"affiliations":["Department of Information Engineering and Computer Science, University of Trento, Italy"],"name":"Marco Bombieri"},{"affiliations":["Azienda Provinciale per i Servizi Sanitari, Trento, Italy"],"name":"Sara Allievi"},{"affiliations":["Azienda Provinciale per i Servizi Sanitari, Trento, Italy"],"name":"Stefano Bonvini"},{"affiliations":["Institute of Cognitive Science and Department of Computer Science, University of Colorado, Boulder, USA"],"name":"Theodora Chaspari"},{"affiliations":["Medical Robotics and Computer Assisted Surgery (MRCAS) Laboratory, Division of Cardiac Surgery, Veterans Affairs Boston Healthcare System, Boston, MA, USA","Division of Cardiac Surgery, Brigham and Women’s Hospital, Mass General Brigham, Harvard Medical School, Boston, MA, USA"],"name":"Marco A. Zenati"},{"affiliations":["Department of Information Engineering and Computer Science, University of Trento, Italy"],"name":"Paolo Giorgini"}]
paper_digest_abstract_sha256: "04e19b70f16464eed9e944a5126176ea99152c7ddce889edfd660302dd16db62"
paper_digest_sidecars: {"citation.bib":{"sha256":"eb2e159274c1409d7648044bb2b8b85c9356007a9300a7c04a28cc6e0cbf3a8d","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbf2e42f3b65d7d1baec0dd1/citation.bib"},"citation.json":{"sha256":"7b684f72dd95327ed0d0ed015f576cd896337d5b15e1ba93e1ccd35cd4b29d78","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbf2e42f3b65d7d1baec0dd1/citation.json"},"citation.ris":{"sha256":"f1a66a57fbfd8c5515642ab9b2c5335e404489e99a089c05d9ea24aec46ca8b3","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbf2e42f3b65d7d1baec0dd1/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"174bd42a82b3a56aa925bb486177aef7d1e9fc2a207f50814e10913c46d6572a","url":"/audio-research-portal/client/papers/2026-11-27/conference-dbf2e42f3b65d7d1baec0dd1/rethink-context.json"}}
paper_digest_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.40"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwsds-2026"
paper_digest_conference_name: "iwsds-2026"
paper_digest_doi: "10.18653/v1/2026.iwsds-1.40"
paper_digest_conference_doi: "10.18653/v1/2026.iwsds-1.40"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwsds-1.40/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwsds-1.40.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "3a12bd5d1be9e41ca89773755764856ed10d5fb8b5599f2d03b90b456b962f93"
paper_digest_api_reader_plan_sha256: "cbec85f420fba136255c07b829492a8ee36a4f38a37ab829cb752196c6df3679"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9ad2bb2cee252ebf40afc188291ae1395089fcaff08e95ea76c95cb9fa7309cc"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "379400ec61821562f935537d69ee33605eff1625c85f6e269bf4f18960f2c8e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "13a4404042a2412099170606c514bbe3ebc77cd9a122380c6f9eb47d40d6dac7"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "52a7678d2dbc8d346bdd07486b221155371544b217a8871fd45d2383cde5bcbc"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.speech-summarization","label":"语音摘要"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 手术室术后复盘智能体：从噪声对话到结构化总结

> 英文题目：*ReflectOR: an LLM-based Agent for Post-Operative Surgical Debriefing*

> 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.40`
> DOI：`10.18653/v1/2026.iwsds-1.40`
> Track：IWSDS 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.40/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.40.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)；[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding) → [语音摘要](/audio-research-portal/papers/?concept=task.speech-summarization)
- **研究方法**：[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)；[工具增强与约束解码](/audio-research-portal/papers/?concept=method.tool-augmentation)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 5.4/10 | 技术严谨 5.5/10 | 实验充分 4.7/10 | 清晰度 7.0/10 | 影响力 4.8/10 | 开源 6.0/10 | 可复现 5.6/10 | 工程/实践 5.0/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Lorenzo Fumi：Department of Information Engineering and Computer Science, University of Trento, Italy
- Marco Bombieri：Department of Information Engineering and Computer Science, University of Trento, Italy
- Sara Allievi：Azienda Provinciale per i Servizi Sanitari, Trento, Italy
- Stefano Bonvini：Azienda Provinciale per i Servizi Sanitari, Trento, Italy
- Theodora Chaspari：Institute of Cognitive Science and Department of Computer Science, University of Colorado, Boulder, USA
- Marco A. Zenati：Medical Robotics and Computer Assisted Surgery (MRCAS) Laboratory, Division of Cardiac Surgery, Veterans Affairs Boston Healthcare System, Boston, MA, USA；Division of Cardiac Surgery, Brigham and Women’s Hospital, Mass General Brigham, Harvard Medical School, Boston, MA, USA
- Paolo Giorgini：Department of Information Engineering and Computer Science, University of Trento, Italy

## 📌 核心摘要

**问题与瓶颈：** 术后复盘需要把手术室内的多人对话音频转化为可回顾的结构化结论，包括发生过什么、是否存在差错与材料消耗，而现有复盘常因时间紧张、疲劳与依赖记忆被压缩，导致关键信息遗漏与记录偏差。现有大语言模型 (LLM) 方案多为单模型总结或事件检测，且多面向英语数据，难以直接处理含背景噪声、重叠语音与专业术语的意大利语手术对话。转写与说话人分离标注质量决定下游复盘可用性，但在噪声环境与非英语临床口语下零样本性能尚不明确，云端部署还涉及隐私、数据保护与服务连续性顾虑。

**核心思路与方法架构：** 与最接近的单模型加检索增强路线相比，ReflectOR 的增量是把复盘拆分为可编排的多智能体分工，保留转写文本作为唯一语音证据入口，再由中央协调器按临床请求的意图调用专科子智能体。单条录音沿链路流动为从手术视频提取音频轨道，经整体放大、DeepFilterNet 去噪、响度归一化、SpeechBrain 增强与 Demucs 人声分离后，送入转写与说话人分离模型得到带时间戳的说话人转写文本，协调器通过图形用户界面 (GUI) 接收自然语言指令并调取患者信息、材料计价库或医疗大模型，最后汇总生成结构化 PDF 报告。协调器与医疗大模型使用 GPT-4O 与 MEDGEMMA 且温度设为 0.7，任务型子智能体温度设为 0.0 以保证确定性，框架基于 LangGraph 实现，未声称流式或实时约束，全部转写与分析模型均未做领域微调而直接调用现成模型或应用程序编程接口 (API)。

**关键实验与核心代价：** 在意大利语模拟血管腔内动脉瘤修复术 (EVAR) 的 52 分钟录音中，取前 5 分钟人工标注为基准并在零样本下比较，转写词错误率 (WER, 越低越好 ↓) 显示 GEMINI-2.5-PRO 为 10.72%，低于同表 GEMINI-2.5-FLASH 的 20.58% 与 WHISPER-LARGE-V3 的 41.16%，说话人分离标注错误率 (DER, 越低越好 ↓) 显示 GEMINI-2.5-PRO 为 10.89%，低于 GEMINI-2.5-FLASH 的 11.53%、PYANNOTE-AUDIO 的 14.84% 与 NVIDIA NEMO 的 26.42%。由 3 名临床医生与 3 名工程师组成的多学科小组审阅完整演示后认为时间线与总结总体清晰但部分步骤被简化或轻微错位，错误检测存在误报，0:44 至 0:50 的背景噪声导致对话几乎不可辨并造成报告缺段。工作未提供人工主观平均意见分 (MOS) 或 UTMOS、DNSMOS、NISQA 等神经代理指标，也未报告统计显著性，主要代价是依赖云端 API 带来的隐私与服务连续性风险，而本地部署则面临算力成本与精度下降，未实测实时因子 (RTF) 或推理时延。

**适用边界与深读导览：** 结论仅在单手术室受控模拟、3 人意大利语团队与短时标注样本下成立，未覆盖多医院、多术式、长时异构流程与真实患者数据的多样声学条件，对智能体整体也仅做定性演示而无定量评分，跨多台手术的绩效分析子智能体亦未得到验证。外部仓库提供演示视频与界面截图，可对照时间线、差错与材料表示例观察转写误差如何向下游传导，不宜将其视为临床有效性证明。欲深究去噪级联配置、转写提示模板与协调器调度逻辑，可查阅下方长文对应章节中的模型版本、温度设置与对照表。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/DeeJack/ReflectOR-Data> — 链接可访问（HTTP 200）；许可证：Apache-2.0

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 术后复盘为何总被压缩：时间压力与记忆依赖下的信息丢失

在手术这种高压协作场景中，配合失误与沟通不畅是导致医疗差错的重要风险因素，术后复盘因此被视为提升团队表现与患者安全的关键环节。理想的复盘需要结构化回顾操作过程、指出差错、肯定成功处置并讨论意外，但临床现实是复盘常因时间不足、体力消耗与心理压力而被压缩为简短非正式交谈。

从输入输出看，自动复盘系统的输入是手术室内的对话录音，输出应是一套可供讨论的结构化材料，包括过程摘要、事件时间线、潜在差错清单、材料与费用统计以及汇总报告。本文聚焦的难点在于输入端条件恶劣，录音可能混杂设备噪声、多人重叠说话与远场拾音，而输出端需要同时完成多种语义任务。

已有工作沿两条路线推进，一条是用大语言模型直接总结模拟手术转写并用满意度问卷收集临床反馈，另一条是用卷积网络重建术中事件或持续改进语音转文本质量。相关讨论反复强调，只有转写与说话人分离足够准确，下游复盘才有意义，而医学术语、口音与非英语语种会进一步放大识别难度。

为此，本文提出 ReflectOR 并围绕一个研究问题展开，能否在不做领域微调的零样本条件下，用现有转写与分离模型处理含明显背景噪声的意大利语手术录音并获得可用性能，部署能从术中对话做复盘的智能体还需要解决哪些关键挑战。对应贡献有两项，一是在人工标注数据上实现原型并定量比较转写与分离方法，二是向由临床与工程人员组成的多学科小组演示原型并系统整理其反馈。

### ReflectOR 的两段式总体设计：先做干净转写再做专科分工

ReflectOR 的总体思路可概括为两段，先把手术视频中的音频变为带说话人与时间戳的文字，再由一个协调器按临床需求调度专科子智能体完成不同分析。与仅做摘要或事件检测的近期方案相比，实质增量在于把患者信息读取、材料与费用估算、时间线抽取、差错识别、总结生成与跨手术表现分析纳入同一调度框架，并首次在意大利语模拟血管腔内修复术数据上给出对照评测。

#### 实质增量与信号规格

信号规格方面，原文披露有限，已知音频以 .wav 格式从手术录像中抽取，共收集 52 分钟，其中前 5 分钟完成人工转写与分离标注。对话为意大利语，参与者为 1 名男性外科教授与 2 名一年级医学生助手。采样率、声道数、帧长与步长、码率与特征维度等底层参数均未披露，张量形状与帧率变化也无从追踪，解读只能给出模块级数据流而非逐层维度变化。

以开头 5 分钟为例，端到端数据流可按序号追踪，第一步从录像中抽取音频轨道，第二步整体放大以托起低音量片段，第三步用深度增强抑制背景噪声，第四步做响度归一化以平衡不同说话人，第五步再做语音质量增强，第六步分离出纯人声，第七步得到带时间戳与说话人的文字，第八步由协调器分发任务，第九步各子智能体分别产出结果，最后一步汇总为结构化 PDF 报告。

#### 端到端链条与执行边界

训练与执行边界清晰，全部转写与分离模型均以零样本方式直接使用，未做领域微调，协调器与子智能体均为冻结的大语言模型，仅靠角色提示词区分行为。协调器与外部医学模型采用 0.7 的温度以保留一定多样性，其余任务型子智能体采用 0.0 以强调确定性。系统基于 LangGraph 实现，通过图形用户界面接收请求，原文未披露流式分块、前瞻窗口、采样步数、延迟、实时系数与显存开销。

### 音频处理链路：从手术视频到带说话人与时间戳的终稿

手术室录音的难点在于麦克风质量不理想、关键时刻多人同时说话、低音量片段容易被淹没。为此，原文设计了多步增强组合，先整体放大，再用 DeepFilterNet 的 v0.5.6 版本抑制背景噪声，接着做音量归一化，随后用 SpeechBrain 的 v1.0.3 版本进一步提升可懂度，最后用 Demucs 分离人声与残留噪声。每一步都针对一类失真，放大解决听不清，降噪解决噪声盖过人声，归一化解决说话人间响度不均，人声分离则保证送入识别的尽量是纯说话内容。

#### 分支总览导读

下面的原图展示了从视频到终稿转写的完整分支结构，阅读时建议从左向右沿箭头追踪，先看增强环节列出的 4 个子步骤，再对比上方云端分支与下方虚线框内本地分支的走向差异，最后落到右侧终稿的汇合点。注意框内标注的转写与分离分工，以及两条路径都标注的改进转写箭头，这有助于理解为何同一段音频会有两条技术路线可选。

[![原论文 Figure 1：Audio processing pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/68a3abe824c2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/68a3abe824c2/figure-1.png)

*论文图 1：手术视频到终稿转写的分支链路，区分云端整体处理与本地分步合并两条路线（原论文 Figure 1）。*

从像素看，最左侧为场记板样式的视频图标，经抽取箭头变为青绿色圆形音频图标，再经增强箭头指向中央菱形决策节点，旁边纵向列出噪声抑制、语音增强、归一化与放大 4 个条目。上方云端分支指向标有 LLM 字样的 Gemini-2.5-pro 图标，注明转写加分离，再经改进转写箭头指向右侧终稿文档。下方虚线框为本地选项，框内 Whisper 负责转写，NVIDIA NeMo 负责分离，两路汇合后再经改进转写指向同一终稿。

#### 转写选项与误差定义

转写与分离共测试 5 种配置，本地转写为 WHISPER-LARGE-V3 配 WhisperX 后端，本地分离为 NVIDIA 相关模型与 PYANNOTE 相关模型，云端为 GEMINI-2.5-FLASH 与 GEMINI-2.5-PRO 以端到端方式同时完成两项任务。云端提示词要求用意大利语输出、带时间戳与说话人名、只用音频中出现的信息、不用特殊修饰、仅用意大利字母、静音或噪声不输出，并给出时间加姓名的示例，温度取默认。

评价采用 2 个方向一致的指标，WER 为替换、插入与删除总数除以参考词数，DER 为归属错误的语音时长除以总语音时长，两者均越低越好。前者反映术语与拼写准确性，后者反映何人何时说话的切分准确性。在零样本与噪声重叠条件下，两类误差都会被推高，后续定量对比需紧扣越低越好的方向理解，不可倒置优劣。

### 协调器调度六个专科子智能体：请求拆解与报告汇总

协调器是整个分析侧的调度中枢，它接收来自图形用户界面的自然语言指令，判断意图后决定调用哪一个或哪几个子智能体，必要时还从机构数据库调取患者信息或借助外部医学模型查询通用医学知识。各子智能体只负责一类任务，彼此不直接通信，结果由协调器收集汇总。这种星形调度把复杂复盘拆为可独立改进的模块，提示词也可按任务分别优化。

#### 调度总览导读

下面的原图是协调器与周边组件的交互总览，建议先定位中央的协调器节点，再向上看用户与医学模型，向左右看两类数据库，向下看虚线框内的子智能体集群。注意箭头方向区分单向读取与双向对话，实线双箭头多为对话往返，单箭头多为读取，这决定了数据在调度中如何流动与回传，理解这一点才能看懂后续 6 个模块的分工。

[![原论文 Figure 2：Agentic-AI architecture: Coordinator and its interactions with other system components.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/68a3abe824c2/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/68a3abe824c2/figure-2.png)

*论文图 2：以协调器为中心的调度架构，连接用户、知识库与六个专科子智能体（原论文 Figure 2）。*

从像素看，顶部为 MedGemma 模型图标与用户圆形头像，中央为协调器图标，三者间以双向箭头连接。左侧为 ChromaDB 圆柱形数据库图标，与协调器双向连接，右侧为患者信息数据库圆柱图标，由协调器单向指向。下方虚线框标注子智能体，框内并列 6 组图标与名称，从左至右为表现分析、材料抽取、错误检测、患者信息、总结生成与时间线抽取，每组均以双向箭头连回中央协调器。

#### 6 个子智能体与执行路径

6 个子智能体的分工明确，患者信息负责读外部库并返回患者与计划术式与团队，材料抽取负责识别术中提及的材料器械并按标准价格估算成本，时间线抽取负责按时间排序关键事件，差错识别负责发现偏离规程与协作低效，总结生成负责产出简明过程与结局，表现分析负责跨多台手术评估优缺点。协调器与子智能体均为 GPT-4O，外部医学模型为 MEDGEMMA，协调器与医学模型温度为 0.7，其余子智能体温度为 0.0，提示词细节存于代码仓库补充材料。

执行时，协调器按请求依次或并行调用子智能体，最终收集各路输出生成带议程的结构化 PDF 报告，演示中使用 52 分钟全部音频的转写结果驱动。图中 ChromaDB 与协调器双向连接，但正文未详述其检索用途，此处不做超出原文的推断。原文未披露分块流式、前瞻缓存、采样步数与延迟等部署参数，因此应将其理解为离线批量演示而非已验证的实时系统。

### 零样本意大利语手术音频上的转写分离效果与定性演示

#### 评测协议与公平性前提

定量评测仅针对音频处理链路，数据为模拟血管腔内修复术的意大利语对话，共录制 52 分钟，仅前 5 分钟做了人工转写与分离标注并用于计算 WER 与 DER，两者均越低越好。所有模型均以零样本方式运行，未做领域微调，比较时需注意样本仅覆盖手术初期，其语言与声学特征可能无法代表全程。演示侧则用 52 分钟全部音频的转写结果驱动智能体，并邀请 3 名临床医生与 3 名工程师共同点评。

#### 转写与分离的定量对比

下表为原完整 Table 2 中转写部分的整理呈现，共比较 3 个模型，指标为 WER，数值越低表示与人工参考越接近，公平性前提是零样本且仅用前 5 分钟初期对话。原文完整 Table 2（本精简表未列出）的分离部分见下一张表，此处保留模型名与误差值两列，表头采用原文的 Model 与 WER (%) 写法，便于先看清转写一侧的排序。

| Model | WER (%) |
| --- | --- |
| GEMINI-2.5-PRO | 10.72% |
| GEMINI-2.5-FLASH | 20.58% |
| WHISPER-LARGE-V3 | 41.16% |

在展示的三行中，GEMINI-2.5-PRO 以 10.72% 为最低，GEMINI-2.5-FLASH 以 20.58% 居中，WHISPER-LARGE-V3 以 41.16% 为最高，表明大模型在手术领域术语上更稳健。但原文未报告方差、置信区间与人工听测，仅凭自动指标与 5 分钟样本不能外推到全程或真实手术室，噪声、重叠说话与领域词汇仍是残留误差的主要来源。

下表为原完整 Table 2 中分离部分的整理呈现，共比较 4 个模型，指标为 DER，方向同样越低越好，公平性前提与转写侧完全一致。原文完整 Table 2（本精简表未列出）的转写部分见上一张表，此处保留模型名与误差值两列，表头采用原文的 Model 与 DER (%) 写法，便于对照同一云端模型在两项任务上的表现。

| Model | DER (%) |
| --- | --- |
| GEMINI-2.5-PRO | 10.89% |
| GEMINI-2.5-FLASH | 11.53% |
| PYANNOTE-AUDIO | 14.84% |
| NVIDIA NEMO | 26.42% |

在展示的四行中，GEMINI-2.5-PRO 以 10.89% 为最佳，GEMINI-2.5-FLASH 以 11.53% 紧随其后，PYANNOTE-AUDIO 以 14.84% 居中，NVIDIA NEMO 以 26.42% 为最差。云端大模型借助上下文与跨模态表示改善了切分与归属，但 5 分钟受控样本与缺失的增强消融使结论适用范围受限，未胜出的本地模型恰说明噪声环境下传统分离仍有明显短板。

#### 子智能体输出的定性表现与失效

下表为材料抽取子智能体的输出示例，原完整 Table 5 包含材料名、使用时刻与费用三列，此处选取表头加 3 行示例以展示其量化资源的能力。原文完整 Table 5（本精简表未列出）中的省略行未展示，时间格式为分秒，费用单位为原文标注的 C，数值保持原精度未做四舍五入，公平性上属于定性演示而非定量评测。

| Name | Used at | Cost (C) |
| --- | --- | --- |
| Soft guide | 05:03 | 123 |
| Rigid guide | 08:00 | 246 |
| Pigtail catheter | 12:05 | 321 |

展示的三行分别为软导丝在 05:03 费用 123，硬导丝在 08:00 费用 246，猪尾导管在 12:05 费用 321，专家认为清晰有用，并建议区分耗材与药品费用并增加用量优化建议。同期时间线示例在 00:20 识别腹主动脉瘤病例，在 01:36 讨论颈部 52 mm，在 02:19 给出 15° LAO 与 8° 尾向投照，差错示例在 01:36 指出未核对 CT 的测量，在 03:28 指出入路争议，在 05:03 指出肝素时机需纠正，总结示例保留 44 mm 瘤体与 26 mm 直径等关键细节。

专家总体肯定了上下文理解与时间组织能力，但也指出时间线偶有简化或错位，差错识别偶发误报可能引发不必要担忧，0 分 44 秒至 0 分 50 秒的噪声使对话几乎不可闻并导致报告缺段。原文对智能体整体仅做定性讨论，未做定量评测与方差报告，也未验证多中心、多术式与全程异质录音，改进方向包括更有效的音频处理、临床示例的少样本提示与思维链推理。

### 小样本定性验证的边界：前提、代价与复现核对

首要边界是样本选择偏差，定量比较仅用前 5 分钟的手术初期对话，其语言密度、术语分布与声学条件可能无法代表中后期的紧张协作与器械噪声。采集仅来自特伦托大学单一手术室的受控模拟，声学环境、团队构成与术式多样性均不足，跨医院与跨专科的稳健性与可扩展性未经验证。要得到可推广结论，需要更长、更多样且全程标注的异质录音。

其次是评价范围不完整，原文仅对转写与分离给出 WER 与 DER 的定量结果，智能体整体仅停留在概念演示与专家定性点评，未见针对摘要、时间线、差错与材料各模块的定量指标、用户研究与长期随访。计算上全部依赖接口调用的大语言模型，数据需上传云端，带来隐私、安全与服务连续性顾虑，本地部署虽可缓解但计算成本高且精度常低于云端方案，越狱攻击风险也需专门防护。

复现核对需区分三件事，代码已公开且作者资源当前可用，地址含运行代码、演示视频、界面截图与各智能体提示词，但说明文档覆盖不完整。模型权重未随附，需自行申请 GPT-4O、GEMINI-2.5 系列与 MEDGEMMA 的接口权限并配置机构数据库、价格库与 LangGraph 环境，因此系统不可直接运行。附录无额外证明，复现还需自备意大利语手术音频与人工标注，并核对增强工具版本与提示词模板。

工程选型上，若需意大利语多任务复盘原型，可复用增强加云端大模型零样本转写的路线与协调器调度模式，但须为误报预留人工复核，为材料统计拆分耗材与药品并关联历史差错记录。建议对照代码仓库中的演示视频观察时间线与基线差异，不虚构听感，优先在多中心长时数据上补做定量评测，再评估本地模型在隐私与精度之间的权衡，然后才讨论临床试点。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音频以 .wav 格式从手术录像抽取，共 52 分钟，人工标注前 5 分钟，意大利语 3 位说话人，增强链为放大、DeepFilterNet v0.5.6、归一化、SpeechBrain v1.0.3、Demucs，采样率帧长步长声道与码率原文未披露
- **训练与评测数据**：模拟血管腔内修复术，1 名男性外科教授与 2 名一年级医学生助手，意大利语对话，特伦托大学增强健康环境实验室单手术室受控录制，52 分钟录像，前 5 分钟人工转写与分离标注，3 名临床医生加 3 名工程师参与演示点评
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量与训练步数耗时，无模型训练阶段，转写分离与智能体均为冻结模型零样本推理，GEMINI 系列更新至 2025 年 6 月 17 日，推理硬件原文未披露
- **核心超参数与配置**：协调器与外部医学模型温度 0.7，其余子智能体温度 0.0，GEMINI 系列温度取默认，本地转写为 WHISPER-LARGE-V3 配 WhisperX 后端，分离为 NEMO 相关模型与 PYANNOTE 相关模型，优化器学习率批大小等训练超参不适用
- **推理速度与部署开销**：延迟、实时系数、吞吐与显存原文未披露，云端接口依赖带来隐私与连续性代价，本地部署可缓解但计算成本高且精度常低于云端方案
- **开源产物与协议状态**：作者代码资源当前可用，已公开地址含运行代码、演示视频与界面截图及各智能体提示词，地址为 https github.com DeeJack ReflectOR-Data，说明文档覆盖不完整，模型权重未随附，需自行申请外部大语言模型接口，系统不可直接运行
- **附录与补充材料要点**：无独立附录证明，补充材料存于代码仓库，含各智能体提示词与完整子智能体输出示例及演示视频，局限为仅 5 分钟定量评测与单中心受控采集，失效案例为 0 分 44 秒至 0 分 50 秒噪声致缺段与偶发误报

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.6/10** | 创新 5.4/10 | 技术严谨 5.5/10 | 实验充分 4.7/10 | 清晰度 7.0/10 | 影响力 4.8/10 | 开源 6.0/10 | 可复现 5.6/10 | 工程/实践 5.0/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.40`
- 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.40/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.40.pdf)
- DOI：`10.18653/v1/2026.iwsds-1.40`
- Track：IWSDS 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：GEMINI-2.5-PRO在零样本下WER10.72%与DER10.89%均为所测模型中最低，对手术术语相对稳健。

- 核心优势：基于LangGraph实现协调器按意图调度六专科子智能体并汇总为结构化PDF报告，形成完整复盘闭环。

- 核心优势：作者坦诚承认单场景短样本选择偏差与云端隐私局限，并讨论自满与越狱风险，边界交代清晰。

- 主要短板：智能体整体仅定性演示无定量评分，0:44至0:50背景噪声致对话几乎不可辨并造成报告缺段。

- 主要短板：仅前5分钟早期对话作基准且单受控手术室采集，跨多台手术绩效分析功能在单次模拟中无法验证。

- 主要短板：五级去噪增强级联均为现成模型直接调用且未披露参数细节与逐级消融，无法证明每级增益。

---

[← 返回 iwsds-2026 论文汇总](/audio-research-portal/posts/conference-iwsds-2026/)
