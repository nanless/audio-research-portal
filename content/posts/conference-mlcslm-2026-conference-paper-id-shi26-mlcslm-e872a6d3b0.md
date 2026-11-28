---
title: "Leading-Silence Augmentation and Multi-Stage Synthetic Supervision for the Second MLC-SLM Challenge"
date: 2026-11-28
draft: false
description: "本文解读第二届多语对话挑战的双任务方案，任务 1 用前导静音裁剪加指数移动平均把 tcpMER 从 18.30% 降到 16.73%，任务 2 用合成问答加静音过滤与分布匹配把准确率从 78.0% 提升到 86.0%，但结论均以累积消融与评测集分布为前提且未报告方差与部署开销。"
tags: ["数据增强", "LoRA", "语音识别", "音频问答", "说话人分离标注"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "前导静音裁剪与多阶段合成监督如何改进长对话转录与理解"
paper_digest_original_title: "Leading-Silence Augmentation and Multi-Stage Synthetic Supervision for the Second MLC-SLM Challenge"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:shi26_mlcslm"
paper_digest_workbench_source_sha256: "809371cc9ae8bcfc64e082fde62a51c04ced0357d4a22359da8e3fdcb95b977c"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 5.8
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "本文解读第二届多语对话挑战的双任务方案，任务 1 用前导静音裁剪加指数移动平均把 tcpMER 从 18.30% 降到 16.73%，任务 2 用合成问答加静音过滤与分布匹配把准确率从 78.0% 提升到 86.0%，但结论均以累积消融与评测集分布为前提且未报告方差与部署开销。"
paper_digest_reader_sections: [{"heading":"完整无切分多轮对话为何同时难住说话人归属与长音频理解","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"任务一保留单遍解码只改变微调时序起点的总体设计","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"任务二用四阶段合成监督补足问答训练集的构造流程","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两任务低秩微调的冻结边界训练配置与推理抽取路径","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"官方评分下两任务累积改进的幅度前提与条件性","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"累积结论的适用边界复现核对与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Ant Group","UESTC"],"name":"Kexin Shi"},{"affiliations":["Ant Group"],"name":"Renhe Sun"},{"affiliations":["Ant Group"],"name":"Yuge Huang"},{"affiliations":["UESTC"],"name":"Ximeng Wang"},{"affiliations":["Ant Group"],"name":"Jiayi Zhou"},{"affiliations":["Ant Group"],"name":"Jian Liu"},{"affiliations":["UESTC"],"name":"Malu Zhang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"26b0610681db12892f6c5d07673f055ececbda44789745c17b59a03c92bc91c5","url":"/audio-research-portal/client/papers/2026-11-28/conference-e872a6d3b0f02f7857fbfca6/citation.bib"},"citation.json":{"sha256":"f8fa1082c12fd2c5585ed0449928b38565f6419b9d3a46b2eaa5a3f6db7b6cc5","url":"/audio-research-portal/client/papers/2026-11-28/conference-e872a6d3b0f02f7857fbfca6/citation.json"},"citation.ris":{"sha256":"3cd9add96b4e1abc09076615604ab26b7ea263e0d1b9400be58cbe53fda3b2ae","url":"/audio-research-portal/client/papers/2026-11-28/conference-e872a6d3b0f02f7857fbfca6/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"fae07b2961a24fa5b2b9226a8088e95b278dbbae9bdafe84ef37c41e994b0bfb","url":"/audio-research-portal/client/papers/2026-11-28/conference-e872a6d3b0f02f7857fbfca6/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:shi26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "fefd78dcf0a022d1fc091722a9e8a71b9ce4e6404736147b22755e9204836105"
paper_digest_api_reader_plan_sha256: "e8304df75760552aa53ea52aa910dd98cc4462915595dfc707797f26b3c5f53c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1bae004fd5013d3789cac329fa3e695fa07c75e3fbf72b49c0ab07e4c28bf288"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "969b17456336ddadf6e8a88422049fa738d5c402ef39dc297a150a0eba49086c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3abcbd5d6f7a12ac7605551de588d3a324c16db97909b335e73dff3c11a7a9a3"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "98e81cfea1df4e3884232fef345dea98a9dcec558b48b01c518512c9d2b197bb"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"}]
paper_digest_primary_method: "数据增强"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 前导静音裁剪与多阶段合成监督如何改进长对话转录与理解

> 英文题目：*Leading-Silence Augmentation and Multi-Stage Synthetic Supervision for the Second MLC-SLM Challenge*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:shi26_mlcslm`
> Track：Poster Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.8/10** | 创新 6.1/10 | 技术严谨 7.0/10 | 实验充分 6.3/10 | 清晰度 5.5/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.6/10

排名：后50% | 文档类型：系统技术报告

## 👥 作者与机构

- Kexin Shi：Ant Group；UESTC
- Renhe Sun：Ant Group
- Yuge Huang：Ant Group
- Ximeng Wang：UESTC
- Jiayi Zhou：Ant Group
- Jian Liu：Ant Group
- Malu Zhang：UESTC

## 📌 核心摘要

**问题与瓶颈：** 第二届 MLC-SLM 挑战要求在完整未切分多语对话上完成两项任务，任务 1 需从整段录音直接输出按时间排序的转写文本、说话人身份与时间戳，任务 2 需仅凭整段对话音频回答二至四选一的单选题，覆盖声学、语义与联合理解。评测时均不提供语句边界与说话人标签，任务 2 仅提供开发集示例而无问答训练集。任务 1 的困难在于首个标注语句前的非语音时长在录音间差异明显，单遍编码解码对绝对时间原点与前导上下文变化敏感。任务 2 的困难在于长音频模型在定位、时序推理、计数与非音素信息上仍显不足，且部分合成多选题在音频被替换为静音后仍可答对，说明监督未必依赖音频证据。

**核心思路与方法架构：** 与最接近基线相比，任务 1 保留 VibeVoice-ASR-7B 原架构、单遍解码与官方序列化格式，仅改变微调阶段的时间呈现与参数平均，任务 2 保留 Qwen3-Omni-30B-A3B-Instruct 直接处理原始对话音频，仅新增合成监督与标签化直接作答。以一段时长为 \(T\)、首个标注起点为 \(s1\) 的完整录音为例，训练时采样裁剪量 \(\delta\) 且满足 \(0 \le \delta \le s1\)，删除区间 \([0, \delta)\) 并将全部标注起止时间统一减去 \(\delta\)，转写文本、说话人标签、轮次顺序与相对时序保持不变，仅改变前导非语音上下文、绝对原点与总时长，具体采样分布原文未说明。任务 1 对 LoRA 可训练参数维护衰减系数为 0.99 的指数滑动平均，逐优化步更新且不改变推理。任务 2 先用 Gemini 2.5 Pro 按开发集题型、语言与时间戳风格生成约 210k 候选问答，再用 Qwen2.5-Omni-7B 以静音替换做反事实过滤，保留约 67k 例、约 32%，另经翻译与长选项合成新增约 60k 例以匹配评测端平均选项 77.9 字符相对开发集示例 38.0 字符更长以及非英语对话配英语题干现象，最终统一为含音频占位符与 `<answer></answer>` 标签的指令格式，推理关闭采样并将温度设为 0.0 后提取标签内文本作预测，全程每任务单模型且无模型、分数或输出层面融合。

**关键实验与核心代价：** 任务 1 在评测集上以官方 tcpMER 越低越好为指标，LoRA 基线为 18.30%，加入前导静音裁剪与时间戳校正后为 17.27%，再加入 EMA 后为 16.73%，原文报告相对降幅分别为 5.6%、3.1% 与 8.6%，绝对点数变化分别为 1.03、0.54 与累计 1.57，推理仍为原单遍流程而不增加解码改动。任务 2 在评测集上以准确率越高越好为指标，直接作答基线为 78.0%，加入候选生成后为 81.0%，加入静音过滤后为 83.0%，再加入分布匹配增强后为 85.0%，最后引入标签化直接作答后为 86.0%，其中原文摘要明确将分布匹配增强与标签化作答联合表述为从 83.0% 到 86.0%，正文明确从 78.0% 到 86.0% 单调提升。主要代价在于合成管线保留约 67k 例并扩充至约 127k 例，任务 1 增加裁剪随机性与 EMA 状态维护，但两任务均未报告延迟、吞吐或显存实测。

**适用边界与深读导览：** 上述增益均为累积消融中的条件比较，EMA 差异仅在已启用裁剪后测得，缺少独立 EMA 行故无法分离交互作用，总体 tcpMER 未给出分语言、分时长或首语音起始条件细分，裁剪本身不直接证明轮次边界鲁棒性，静音过滤只提高音频依赖似然而不保证声学接地。结论成立前提是完整对话输入、官方 5 秒容限评分与单模型提交设置，未覆盖强噪声、重叠严重或极长录音下的失效分析，且结论中 83.0% 推理后作答基线表述与表 2 中 83.0% 过滤后配置的行定义衔接不明，原文未解释。有意深究可查阅下文方法概述中的裁剪公式与 EMA 更新式，以及实验结果中两张累积消融表的数值与条件说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 完整无切分多轮对话为何同时难住说话人归属与长音频理解

第二届多语对话语音语言模型挑战要求在完整且未经切分的长对话录音上完成两项任务。任务 1 需要同时给出说话人区分与识别结果，任务 2 则用单选多选题考查声学、语义以及两者联合理解。评测时两项任务均不提供正确的语句边界与说话人标签，任务 2 甚至不提供问答训练集，仅给出开发示例。这种设定把长时说话人归属转录与监督稀缺的会话级音频理解放在同一评测条件下。

任务 1 的难点在于长录音的时序起点与前导非语音长度各不相同，而模型必须一次输出按时间排序的文本、说话人身份与时间戳。官方评分先用说话人区分错误率（DER）确定参考与假设说话人之间的最优映射，再在映射后按语言分别计算带时间容差的识别错误率。日语、韩语和泰语采用 tcpCER，其余语言采用 tcpWER，容差窗为 5 s，计算工具为 MeetEval，跨语言平均值记为 tcpMER，数值越低越好。

任务 2 的难点在于监督缺失与音频证据不足。长音频模型在定位、时序推理、计数和非音素信息上本就吃力，而直接生成的大规模合成问答可能存在文本先验捷径。原文指出，部分多选题在把音频替换为静音后仍能答对，说明题目未必真正依赖会话证据。因此，如何构造与任务匹配、真正依赖音频、且与评测输入分布相近的合成监督，成为任务 2 的核心矛盾。

两项任务均要求每个任务只提交一个预测模型，不做模型、分数或输出层面的融合。任务 2 只有评测集分数计入最终排名。这一约束意味着所有改进必须落到单个模型的微调数据与训练策略上，无法靠集成掩盖单点失效。下文先看任务 1 如何只改微调时序起点，再看任务 2 如何用多阶段合成监督补足训练集。

### 任务一保留单遍解码只改变微调时序起点的总体设计

与最近既有基线相比，任务 1 的实质增量不在解码器结构，而在微调阶段。系统保留 VibeVoice-ASR-7B 的原始结构与单遍公式，一次编码完整录音，直接按官方格式串行输出时间有序的文本、说话人身份与时间戳。该骨干支持最长 60 分钟录音、50 余种语言与语码切换，适合多语会话。改动仅有三处，随机前导静音裁剪改变时间起点，一致时间戳修正保持标注对齐，指数移动平均跟踪可训练参数，推理与输出串行方式均不改变。

为建立从长音频输入到富转录输出的整体印象，建议先浏览任务一系统总览图。图中部浅蓝色长条为 VibeVoice-ASR 主体，下方为双编码器与连续隐变量序列，上方为自回归文本符号与右上角富转录示例。底部虚线框专门解释随机前导静音裁剪前后时间轴如何平移。带着输入从下向上、输出从右向左回看的顺序阅读，有助于理解单遍流程中裁剪只动起点不动内部轮次边界。

[![原论文 Figure 1：Overview of our Task 1 system, which retains the original VibeVoice-ASR backbone and adds random…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/57d164b40e03/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/57d164b40e03/figure-1.png)

*论文图 1：任务一单遍架构与前导静音裁剪示意，双编码器汇合与富转录输出对应时间平移（原论文 Figure 1）。*

该图上半部分用图例区分声学符号编码器、语义符号编码器、离散文本符号与连续隐变量。60 分钟长音频经两路编码器相加后形成连续隐变量序列，左侧虚线圆圈表示可选上下文，右侧从 `<begin>` 开始自回归生成离散符号。右上角富转录框以谁、何时、说什么三列示意，示例包含说话人 1 在 0 ~ 10.25、说话人 2 在 10.3 ~ 33.33，以及末尾说话人 N 在 3575.5 ~ 3600。底部裁剪示意把原始前导静音与裁剪后起点对比，移去时长记为 \(\Delta t\)，所有时间戳同步减去该量，并注明若首位说话人从 0 开始则无可裁剪静音。

以前导时长为教学例子说明端到端变化，设完整录音时长为 \(T\)，首段标注起点为 \(s_1\)，训练时采样裁剪量 \(\delta\) 并满足 \(0 \le \delta \le s_1\)，删去区间 \([0, \delta)\)。随后所有标注按同一偏移平移，总时长变为 \(T - \delta\)，起止时间变为 \(s_i - \delta\) 与 \(e_i - \delta\)。该约束保证不删去已标注语音，只改变前导非语音、绝对时间原点与总时长，转录文本、说话人标签、轮次顺序、段时长与相对时序保持不变。原文未披露采样率、帧长与步长、特征维度与码率等信号规格，因此这里无法给出 1 秒样本的具体张量形状与帧率变化，只能确认裁剪不合成新对话，也不扰动内部说话人轮次边界。

### 任务二用四阶段合成监督补足问答训练集的构造流程

任务 2 选用 Qwen3-Omni-30B-A3B-Instruct 作为唯一预测模型。每个样本的用户消息包含完整会话音频、一道单选题、2 个至 4 个候选选项，以及要求把所选答案放在 `<answer>` `</answer>` 标记内的指令。模型直接处理原始会话音频，不依赖外部生成的文本转录，因此同时保留词汇内容与非词汇声学线索。带标记的直接作答格式既给出一致的监督目标，也让评测时可用统一规则抽取标记内文本作为预测。

#### 候选生成与静音反事实过滤

要看清从约 210k 候选到约 67k 困难样本再到约 127k 全集的数量变化，建议纵览任务二合成监督流程图的四列布局。第一列为训练音频与转录经大模型生成候选，第二列为静音替换与过滤，第三列为面向评测集的分布匹配增强，第四列为统一指令格式串行化。先抓住每列底部数据库图标旁的数量，再对比第三列中选项长度平均值的差异，最能把握流程主线。

[![原论文 Figure 2：Task 2 synthetic-supervision pipeline: candidate generation, silent-audio filtering,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/57d164b40e03/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/57d164b40e03/figure-2.png)

*论文图 2：任务二四阶段合成监督流程，从候选生成经静音过滤与分布匹配到统一格式串行化（原论文 Figure 2）。*

该图第一列显示训练音频波形与含时间起止与说话人的转录经 Gemini-2.5 Pro 与专门设计的提示词生成约 210k 初始问答候选。第二列把原始语音替换为静音音频后送入 Qwen2.5-Omni-7B，图上左红框标为音频无关、答错与予以滤除，右绿框标为音频依赖、答对与予以保留，底部汇入 67k 困难样本。第三列点出困难样本选项平均长度为 38.0 个字符，而评测集为 77.9 个字符，并并列翻译非英语问答为英语与合成长选项样本两路，新增约 60k 增强样本。第四列给出统一指令格式的 JSON 示例，包含音频占位、问题、选项与作答指令，以及仅含标记答案的助手消息，最终全集约 127k。

#### 分布匹配与统一串行化

候选生成阶段用 Gemini 2.5 Pro 从已发布训练音频生成约 210k 问答对，提示词在题型、语言、时间表达与 2 个至 4 个选项的单答案格式上向开发示例看齐。静音过滤按正文文字定义保留问题、选项与期望答案不变，仅把音频换成静音，仍答对判为音频无关予以滤除，变错判为音频依赖予以保留，保留约 67k，占比约 32%。该配对与图 2 第二列像素正好相反，像素左红框为音频无关加答错加滤除、右绿框为音频依赖加答对加保留，属源图与正文之间的字面出入，原文未解释，下文数量归因以正文文字为准。

分布匹配阶段仅利用无标签的聚合输入属性，发现评测选项更长且部分非英语会话配英语题面，于是翻译所选训练问题并合成长选项样本约 60k，且未把评测集的任何问题、选项或答案复制进训练。串行化把保留与增强样本统一转为对话式结构，训练时用户消息含音频占位、问题、候选选项与输出指令，助手消息仅含放在 `<answer>` `</answer>` 内的标准答案，评测时模型只收到用户消息。结合数量看，67k 过滤样本加 60k 增强样本构成约 127k 全集，数量自洽，未见字面算术矛盾。

### 两任务低秩微调的冻结边界训练配置与推理抽取路径

任务 1 用低秩适配微调 VibeVoice-ASR-7B，秩设为 32，缩放因子设为 128，丢弃概率设为 0.05，共训练 5 个轮次。16 个数据并行工作单元各用单样本批大小并累积 4 步梯度，有效全局批大小为 64。随机前导静音裁剪、时间戳修正与指数移动平均在整个微调过程中保持启用，解码器结构与输出格式冻结不变，梯度只流向低秩适配引入的可训练参数及其移动平均状态。

优化配置采用学习率 \(1 \times 10^{-4}\)，预热比例 0.03，权重衰减 0.01，梯度裁剪最大范数为 1.0。内存侧用梯度检查点、bfloat16 计算与 DeepSpeed ZeRO-2 降低占用。指数移动平均的衰减系数 \(\lambda\) 设为 0.99，每次优化器更新后更新一次可训练参数的平均状态，推理时不改变解码与串行化。原文未披露采样率、帧移、前瞻窗口、块式流式方式、采样步数与延迟、RTF 与显存开销，因此无法复述 1 秒样本的帧率与缓存细节。

任务 2 用低秩适配微调 Qwen3-Omni，可训练部分为低秩适配参数、视觉变换器与模态对齐器，其余参数冻结。训练学习率为 \(5 \times 10^{-5}\)，共 2 个轮次，微批大小为 4，跨 16 个加速设备的全局批大小为 64。推理时关闭采样并把温度设为 0.0，抽取 `<answer>` `</answer>` 标记内文本作为预测。每个任务的提交均来自单个训练模型。Gemini 2.5 Pro 与 Qwen2.5-Omni-7B 仅用于离线数据构造，所有提交的任务 2 预测均只由 Qwen3-Omni 生成，前者按任务 2 商业接口例外用于离线构造。

从部署视角看，两任务都保持单模型单遍或单次直接作答的执行路径，未引入多模型融合。任务 1 保留原始单遍推理，任务 2 为带标记的直接作答，无需外部转录与多步推理链。原文未披露流式分块、TTFA、RTF、吞吐与显存占用，也未给出不同录音时长下的延迟分解，因此工程选型只能确认训练侧的批大小与轮次，无法预估线上实时性与资源代价。

### 官方评分下两任务累积改进的幅度前提与条件性

评测公平性需先看口径。任务 1 用官方评分器与基线配置，先以区分错误率确定说话人最优映射，再在映射后按语言计算带 5 s 容差的识别错误率，日语、韩语和泰语用 tcpCER，其余语言用 tcpWER，工具为 MeetEval，跨语言平均为 tcpMER，越低越好。任务 2 用单选多选题准确率，每题 2 个至 4 个选项中有且仅有一个正确答案，可能需要声学、语义或两者联合证据，只有评测集分数计入最终排名。两表均为在评测集上的累积配置结果，未报告方差与置信区间。

#### 任务一前导裁剪与平均权重的递进效果

下表为任务 1 在官方 tcpMER 口径下的三行累积消融。第一行为低秩适配基线，第二行在基线之上加入随机前导静音裁剪与必需的时间戳修正，第三行在前两者之上再加入指数移动平均。阅读时注意后两行的改进均为条件改进，而非独立因素的边际效应，表后将结合原文说明逐项拆解幅度与局限。

| System configuration | tcpMER (%) ↓ |
| --- | --- |
| LoRA baseline (ours) | 18.30 |
| + random leading-silence cropping | 17.27 |
| + EMA training strategy | 16.73 |

该表显示基线为 18.30%，加入裁剪后为 17.27%，绝对下降 1.03 个百分点，相对下降约 5.6%。在已启用裁剪的基础上再加入指数移动平均后为 16.73%，进一步绝对下降 0.54 个百分点，相对前一行下降约 3.1%。完整配置相对基线共下降 1.57 个百分点，相对下降约 8.6%，且保留原始单遍推理。由于消融行为累积，裁剪行实际捆绑了保持标签有效的时间戳修正，平均权重行的差异仅在已启用裁剪后测得。原文未设单独平均权重行，也未按语言、录音时长或首音出现位置分解，因此无法定位收益是否均匀，也无法估计两策略的交互作用。

#### 任务二合成数据与作答格式的递进效果

下表为任务 2 在评测集上的六行递进结果，指标为准确率，越高越好。起点为直接作答基线 78.0%，随后依次加入候选生成、静音过滤、分布匹配增强与带标记直接作答。阅读时把每一步的百分点增量与数据规模变化对照，并注意最后两步对应摘要中从 83.0% 到 86.0% 的联合提升表述，表后将逐段归因并指出缺失的方差与细分分析。

| Configuration | Accuracy (%) ↑ |
| --- | --- |
| Baseline (direct answering) | 78.0 |
| + candidate generation | 81.0 |
| + silent-audio filtering | 83.0 |
| + distribution-matched augmentation | 85.0 |
| + tagged direct answering | 86.0 |

该表显示候选生成把准确率从 78.0% 提升到 81.0%，增加 3.0 个百分点，说明合成问答提供了有效的任务监督。静音过滤进一步到 83.0%，增加 2.0 个百分点，表明滤除静音仍可答对的样本有助于保留音频依赖示例。分布匹配增强到 85.0%，增加 2.0 个百分点，表明向更长选项与跨语言题面看齐有助于泛化。带标记直接作答到 86.0%，增加 1.0 个百分点，除性能外还让答案抽取更可靠。从 83.0% 到 86.0% 的 3.0 个百分点联合提升与摘要一致。原文未报告多次运行的方差，未做人工听测对比，未分解声学题与语义题的各自收益，也未展示失效案例，因此无法判断改进在题型与语言上的均匀性。

### 累积结论的适用边界复现核对与工程选型建议

两项改进的结论都带有明确前提。任务 1 的裁剪只改变时间起点与前导非语音，不合成新对话，也不扰动内部轮次边界，因此聚合消融只能度量前导静音增强的效果，不能直接证明对轮次边界错误的稳健性。任务 2 的静音过滤提高保留问题依赖音频的可能性，但原文明确指出其本身不保证声学层面的可靠依据。分布匹配仅利用无标签的聚合输入属性，如选项平均长度与跨语言题面比例，未复制评测集的任何问答内容，其泛化增益仍以评测集分布为条件。

多处部署条件未经验证。任务 1 的聚合 tcpMER 无法显示改进是否在不同语言、录音时长与首音出现位置上均匀，缺少按语言与按首音条件的分解。任务 2 未报告方差与置信区间，未按声学题、语义题与联合题分解收益，也未展示典型失效案例。两任务均未披露延迟、RTF、吞吐与显存占用，未说明分块流式、前瞻窗口与缓存策略，因此无法从原文推断长录音在线转录或长音频问答的实时可行性。

复现需区分三件不同的事。代码方面，原文未给出可运行的代码仓库地址与运行说明。权重方面，原文未给出任务 1 微调后权重与任务 2 微调后权重的下载地址，仅在正文提及所用 Qwen 系列检查点并作披露，Gemini 仅按任务 2 商业接口例外用于离线数据构造。本文未收到经核验可用的资源绑定，不确认代码、模型或数据的当前可达状态。系统可直接运行方面，原文未提供可直接启动的系统与演示页面，本文也未收到试听页像素，因此无法对照现象与基线听感。附录方面，原文未设独立附录，未补充证明、额外消融或许可限制细节，复现只能依据正文的超参与流程描述。

工程选型上，若长对话录音的前导静音长度变化大且首音位置不固定，随机前导静音裁剪加时间戳修正是成本较低的微调增强，但需配套实现裁剪量约束与全量时间戳平移。若问答监督稀缺且多选题易被文本先验猜中，可参考候选生成加静音反事实过滤再加分布匹配增强的顺序，每步在原文中分别带来 1.0 个至 3.0 个百分点的提升。代价是需要调用大模型生成约 210k 候选、再用音频语言模型全量过滤，并微调 7B 与 30B 量级模型，训练开销明显。推理侧因保持单模型单遍输出与带标记直接作答，未引入融合复杂度，适合希望保持部署简单的团队优先复现。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、码率与通道数等信号规格，仅说明任务 1 骨干支持最长 60 分钟录音，任务 1 评测用 5 s 容差窗，任务 2 困难样本选项平均 38.0 个字符而评测集平均 77.9 个字符，推理延迟与 RTF 原文未披露
- **训练与评测数据**：任务 1 在完整挑战录音上微调并按官方格式串行输出，任务 2 用 Gemini 2.5 Pro 生成约 210k 候选，经静音过滤保留约 67k，再经分布匹配新增约 60k，构成约 127k 全集，任务 2 无问答训练集仅有开发示例，评测用完整未切分多语会话
- **算力与训练耗时**：任务 1 用 16 个数据并行工作单元训练 5 个轮次，任务 2 用 16 个加速设备训练 2 个轮次并以全局批大小 64 训练，原文未披露 GPU 或 TPU 具体型号与数量及训练耗时
- **核心超参数与配置**：任务 1 低秩适配秩 32 缩放因子 128 丢弃概率 0.05 学习率 1×10-4 预热比例 0.03 权重衰减 0.01 梯度裁剪范数 1.0 指数移动平均衰减系数 0.99，任务 2 学习率 5×10-5 低秩适配加视觉变换器与模态对齐器可训练其余冻结，微批大小 4 推理温度 0.0 关闭采样
- **推理速度与部署开销**：两任务均用单个模型单遍或单次直接作答且无融合，任务 1 保留原始单遍推理，任务 2 抽取标记内文本，原文未披露参数量、RTF、延迟、吞吐与显存占用
- **开源产物与协议状态**：原文未给出代码仓库地址与权重下载地址，未说明系统可直接运行，仅在正文提及所用 Qwen 系列检查点并作披露，Gemini 仅按任务 2 商业接口例外用于离线数据构造，本次未收到经核验可用的资源绑定，不确认当前可达状态
- **附录与补充材料要点**：原文未设独立附录，未提供补充证明与额外消融，关键细节均在正文，含单遍公式保留、裁剪约束与时间戳平移、静音过滤不保证声学依据、分布匹配未复制评测问答等边界说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.8/10** | 创新 6.1/10 | 技术严谨 7.0/10 | 实验充分 6.3/10 | 清晰度 5.5/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.6/10
- 排名：后50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:shi26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/shi26_mlcslm.pdf)
- Track：Poster Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：任务1以官方tcpMER从18.30%降至16.73%，任务2准确率从78.0%升至86.0%，两链条均含基线与中间行可核对增量来源。

- 核心优势：保留单遍编码解码与官方序列化格式，给出裁剪平移公式与λ=0.99的EMA逐步更新式及LoRA训练配置，方法自洽可核查。

- 核心优势：任务2以约210k候选经静音反事实过滤保留约67k再扩充至约127k，明确不复制评测标签且符合单模型提交合规要求。

- 主要短板：与累积消融为条件比较，EMA差异仅在已启用裁剪后测得且无独立EMA行，无法估计交互作用。

- 主要短板：结论中83.0%推理后作答基线与表2中83.0%过滤后配置的行定义衔接不明，原文未解释致表文口径不一致。

- 主要短板：训练硬件具体型号与时长、优化器与损失函数、裁剪量采样分布与过滤阈值均未披露，存在关键复现缺口。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
