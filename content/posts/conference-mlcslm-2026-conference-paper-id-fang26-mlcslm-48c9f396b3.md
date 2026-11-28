---
title: "An Omnilingual-ASR-Based Speech-LLM System for the 2nd MLC-SLM Challenge"
date: 2026-11-27
draft: false
description: "针对无预先切分的多语双人电话对话联合区分与识别问题，论文以区分前端加嵌入聚类与低秩适配识别器的四阶段级联在开发集上达到宏平均 29.27% 的时间约束错误率并大幅领先官方基线，但评测集回落至 50.23% 且以牺牲重叠召回与多人通用性为代价。"
tags: ["聚类与类别匹配", "LoRA", "语音识别", "说话人分离标注"]
categories: ["mlcslm-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "先区分后识别如何降低多语电话对话的时间约束错误率"
paper_digest_original_title: "An Omnilingual-ASR-Based Speech-LLM System for the 2nd MLC-SLM Challenge"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:mlcslm:2026:conference-paper-id:fang26_mlcslm"
paper_digest_workbench_source_sha256: "ed7ca347d437e343791b9724f2d2f95668de8b4d0f13c7c10cdf940b384aa95a"
paper_digest_workbench_record_url: "https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对无预先切分的多语双人电话对话联合区分与识别问题，论文以区分前端加嵌入聚类与低秩适配识别器的四阶段级联在开发集上达到宏平均 29.27% 的时间约束错误率并大幅领先官方基线，但评测集回落至 50.23% 且以牺牲重叠召回与多人通用性为代价。"
paper_digest_reader_sections: [{"heading":"无预先切分的多语电话对话为何需要同时解决何时谁说话与说了什么","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"先区分后识别的四阶段级联总览与提交配置选择","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"区分前端如何从语音活动检测走到双说话人聚类","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"识别器低秩适配的冻结边界与语言约束解码","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"开发集大幅领先而评测集回落的成绩与消融归因","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"双人假设与时间约束评分下的边界复现与选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["UGREEN AI Lab, Shenzhen, China"],"name":"Shuming Fang"},{"affiliations":["School of Computer Science (National Pilot Software Engineering School)"],"name":"Shuifei Zeng"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"66bd8b9f8b421be11790ae2fe27e51bfe282482f516d7796d169bd8c536a5b25","url":"/audio-research-portal/client/papers/2026-11-27/conference-48c9f396b32b4e9a2c0efe1f/citation.bib"},"citation.json":{"sha256":"6bdd3db351bc2604d42e24a8623100537e211ead02d490780d44ebe38834171d","url":"/audio-research-portal/client/papers/2026-11-27/conference-48c9f396b32b4e9a2c0efe1f/citation.json"},"citation.ris":{"sha256":"4b2858fde66c0ad60976a5a5734576a4d92d3810ba5e44f247da0da4102d3d4f","url":"/audio-research-portal/client/papers/2026-11-27/conference-48c9f396b32b4e9a2c0efe1f/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"982407d2ad27e2acb90300df7bef38543928a80e01cb280e1dc77ca8e1364e1a","url":"/audio-research-portal/client/papers/2026-11-27/conference-48c9f396b32b4e9a2c0efe1f/rethink-context.json"}}
paper_digest_paper_id: "conference:mlcslm:2026:conference-paper-id:fang26_mlcslm"
paper_digest_source_kind: conference
paper_digest_conference_id: "mlcslm-2026"
paper_digest_conference_name: "mlcslm-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "b71e762322d3a1aed4b7d77ea4f138f42ccb5c41b17fd15ee87cd1baccaf297b"
paper_digest_api_reader_plan_sha256: "4569a233226d473d6a4007ab445dee33882f8c274a2191fcc1c0a93332ef9f45"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b8278d16b2e1e6e9bd676a493303e7179b5c42499f456d1a8550c4d6c6644180"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2139a69fe18db637c164842d983c7fe8f9e9e522354ef56fc6ab428cbed48913"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e8dd27ce5f4574a044c4c85e7180e1e4d9506bd9c41eeafec5856dbf07045071"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "79c4407af96cd7aa3cfb91da90734d4f97c56dc8e23919cab357b9cb21c342b9"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 先区分后识别如何降低多语电话对话的时间约束错误率

> 英文题目：*An Omnilingual-ASR-Based Speech-LLM System for the 2nd MLC-SLM Challenge*

> 会议身份：`conference:mlcslm:2026:conference-paper-id:fang26_mlcslm`
> Track：Poster Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[聚类与类别匹配](/audio-research-portal/papers/?concept=method.clustering)；[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Shuming Fang：UGREEN AI Lab, Shenzhen, China
- Shuifei Zeng：School of Computer Science (National Pilot Software Engineering School)

## 📌 核心摘要

**问题与瓶颈：** 第二届多语种会话语音语言模型挑战任务 1 要求对原始长电话会话直接完成说话人分离标注与识别，不提供 Oracle 切分或说话人标签，统一以时间受限最小置换错误率 (time-constrained minimum-permutation error rate, tcpMER) 排名，其中 18 个语种类别用时间受限词错误率 (time-constrained word error rate, tcpWER) 衡量，日语、韩语和泰语用时间受限字错误率 (time-constrained character error rate, tcpCER) 衡量，容差为 5 s。官方开发集包含 150 段约 30 min 的电话声道会话，覆盖 21 个语种口音类别，英语按 5 种口音细分。现有主流路线将单个语音大模型直接微调后用于长会话转写，在说话人混淆、时间错位和重叠语音重复计错面前失效，导致错误率居高不下。

**核心思路与方法架构：** 与最接近的单模型微调基线相比，本文保留强多语种识别器但新增可独立替换的分离标注前端与嵌入聚类指派，形成分离标注后识别的级联链路。原始会话先经前馈序列记忆网络 (feedforward sequential memory network, FSMN) 语音活动检测切除静音，再由 DiariZen-Large-s80 切分为单说话人区间，窗口为 12 s 且步移为 10%，并丢弃短于 0.7 s 的片段、合并间隔不超过 1.5 s 的同说话人片段、切分长于 25 s 的片段以适配识别器稳定输入范围。每个候选片段以 1.5 s 子窗和 0.75 s 步移抽取 80 维对数滤波器组前端的 192 维 CAM++ 说话人嵌入，全录音嵌入以谱聚类固定为 2 个说话人类并消除残留时间重叠。冻结声学编码器、仅更新秩为 8 的低秩适配 (Low-Rank Adaptation, LoRA) 参数的 omniASR LLM 7B v2 逐段解码，解码时以目标语言约束词表空间，段内按 `` `<sc>` `` 标记拆分子句并依字符长度分配时间戳，再去除相同、子串或相似度不低于 0.9 的重复假设后封装为提交格式。

**关键实验与核心代价：** 在同一 21 类官方协议下，最终系统开发集宏平均 tcpMER 为 29.27%，低于官方基线的 79.15%，原文报告相对降幅约为 63%，其中 18 类词队列微平均 tcpWER 为 29.41%，3 类字符队列微平均 tcpCER 为 27.38%。细分上墨西哥西班牙语为 11.1%，泰语为 18.7%，日语为 20.3%，韩语为 34.8%，巴西葡萄牙语为 40.3%，土耳其语为 65.8%，5 种英语口音平均为 22.2%，评估集在 fangshuming 队名下得分为 50.23%。消融显示端到端式语音活动检测加识别器并以 `` `<sc>` `` 交替指派说话人的 Exp1 为 141.2%，换为 pyannote 切分加 CAM++ 聚类的 Exp2 降至 35.3%，关闭重叠感知的 Exp3 进一步变为 30.6%，换为 DiariZen 的 Exp4 达到 29.27%，证明重叠区被转写两次会直接推高时间受限误差。本文无人工主观平均意见分 (mean opinion score, MOS) 听测，仅以 tcpMER 客观指标评测，未使用神经代理指标。主导代价为 50k 步 LoRA 适配占用单块 NVIDIA RTX 6000 Ada GPU，原文未披露推理实时率或时延。

**适用边界与深读导览：** 结论成立前提为双人电话会话、说话人数固定为 2、解码目标语言已知且以 5 s 容差计分，未覆盖多人会话、未知语言、流式处理与通道语言分布显著漂移时的部署表现，开发集到评估集约 20 个百分点的落差即提示调参存在过拟合风险。文中未提及音频演示页可供试听对照。需深究切分窗口与合并阈值、嵌入聚类与重叠消解、LoRA 训练与语言约束解码及对称归一化计分细节，可查阅下方方法概述和架构、细节详述与实验结果章节对照表 1 至表 3 的原始数值。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 无预先切分的多语电话对话为何需要同时解决何时谁说话与说了什么

第二届多语对话语音语言模型挑战任务一要求系统直接处理原始长对话录音，在测试时没有任何预先给定的切分边界与说话人标签。输入是一段双人电话对话，输出是带起止时间与匿名说话人编号的文本假设。评分时先对说话人置换求最优，再拼接文本计算时间约束错误率，大部分语种采用 tcpWER（词错误率的时间约束版本），日语、韩语与泰语采用 tcpCER（字错误率的时间约束版本），并以 5 s 容差领通过 MeetEval 计算。

官方开发集包含 150 段长对话录音，每段约为 30 分钟电话信道会话，覆盖 21 个语种口音类别，其中英语按口音拆分为 5 个子类别。训练阶段可以使用官方训练清单中的参考轮次边界进行模型适配，但测试时必须完全依靠自身区分与识别。最终提交在评测集上计分，开发集用于选择流程超参数。这种长时、多语、信道受限的设定，使切分误差、说话人混淆与时间错位都会直接计入最终错误率。

官方任务一基线直接在挑战训练集上以 LoRA（低秩适配）微调 VibeVoice-ASR 识别器，属于单一识别器路线。它在相同 21 类别协议与 5 s 容差下开发集宏平均 tcpMER（时间约束最小置换错误率）高达 79.15%，没有任何类别低于 60%。这一结果说明，仅靠识别器隐式处理说话人轮转与长时切分，在电话对话中并不可靠。切分过粗会引入插入与错位，切分过细会打断语义，缺少显式说话人建模更会导致整段归属错误。

时间约束评分进一步放大了流程选择的敏感性。重叠语音若被重复转写两次，会在时间窗内计为多余插入，解码时若出现非目标语种的串词，也会直接增加替换与插入。原文报告的语种间难度差异显著，土耳其语队列高达 65.8%，而西班牙语墨西哥口音仅为 11.1%。因此，论文将问题拆解为可独立替换的区分前端、说话人归属、识别与后处理 4 个环节，以便在统一的 tcpMER 协议下逐段验证增益与代价。

### 先区分后识别的四阶段级联总览与提交配置选择

要理解原始对话如何变为可提交的带时间文本，最直观的方式是沿自上而下的箭头追踪 4 个处理阶段的输入输出与分支汇合。下段放置了本次收到的官方原图，图中用矩形框与箭头标明了从原始录音到提交文件的完整链路，以及底部 3 条消融结论。先对照该图建立整体印象，再逐段核对各模块的信号规格与替换关系。

[![原论文 Figure 1：Overview of the submitted cascaded pipeline (top to bottom) and the main outcomes of our…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/d1c142e8dc43/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/mlcslm-2026/d1c142e8dc43/figure-1.png)

*论文图 1：自上而下级联流程示意：原始对话经区分前端与说话人归属后由适配识别模型转写并整理为提交格式（原论文 Figure 1）。*

原图自上而下包含 6 个矩形框，箭头均垂直向下。顶部为原始对话并注明无预先区分与识别标注，第二框为区分前端并标注 FunASR 前馈序列记忆网络语音活动检测后接 DiariZen-Large-s80 分割，第三框为说话人归属并标注预训练 CAM++ 嵌入后接双说话人谱聚类，第四框为识别并标注经 LoRA 适配的 omniASR LLM 7B v2 与语言约束解码，第五框为后处理并标注说话人切换标记切分与假设去重，底部为提交 hyp.stm 文件。最下方浅底文本框总结 3 条结论，级联嵌入归属优于端到端标记归属，重叠感知分割反而损害指标，DiariZen 分割最低。

与官方基线相比，提交系统的实质增量在于保留识别器的多语能力同时，在识别器之前插入显式区分与归属。基线仅微调单一语音大模型识别器，而本文系统冻结声学编码器，仅更新低秩适配器，并在前端增加神经分割与嵌入聚类。分割模型选用 DiariZen-Large-s80，基于 WavLM-Large 与 Conformer 的端到端区分分割，对比的另一选项为 pyannote 分割 3.0。所有配置共享同一语音活动检测模块，不参与分割模型对比，后处理阈值统一为丢弃短于 0.7 s 片段、合并间隔不超过 1.5 s 的同说话人片段、切分长于 25 s 的片段。

以一段双人电话对话中的 1 秒语音为例进行教学示意，该秒在实际推理中位于一段 12 s 滑窗之内，滑窗步移为窗长的 10%。语音活动检测先判断该秒是否包含人声，无声部分直接丢弃。有声部分由分割模型给出候选边界，再经短片段丢弃与邻近合并形成候选段。对候选段按 1.5 s 子窗与 0.75 s 跳跃提取 80 维对数滤波器组特征并映射为 192 维说话人嵌入，全部嵌入经固定为二的谱聚类得到匿名说话人编号。原文未披露统一采样率与编码器内部张量维度，这里不假设具体采样点数与隐藏层宽度，仅依据原文披露的时间与维度参数追踪变化。

### 区分前端如何从语音活动检测走到双说话人聚类

所有区分配置首先经过 FunASR 前馈序列记忆网络语音活动检测，使用 ModelScope 检查点 speech fsmn vad zh-cn-16k-common-pytorch。该模块在每次推理中共享，不参与后续分割模型对比。在检测结果之上比较两种公开神经分割器，其一为 pyannote 分割 3.0，采用 SincNet 加双向长短时记忆网络的幂集分割头，以 10 s 窗与 10% 跳跃运行，仅作分割器使用。其二为 DiariZen-Large-s80 检查点，基于 WavLM-Large 加 Conformer 的端到端分割模型，以 12 s 窗与 10% 跳跃运行，为提交配置。

原始分割输出先经过三步整理，丢弃短于 0.7 s 的片段，将间隔不超过 1.5 s 的同说话人片段合并，将长于 25 s 的片段切分，使每段保持在识别模型稳定的输入范围内。pyannote 分割头的重叠解码在 Exp2 中开启、在 Exp3 中关闭，用于对比重叠感知的影响。DiariZen 前端可能假设并发说话人，因此增加一步跨说话人时间重叠消解，将重叠区判给较长片段，使送入识别器的片段实际互不重叠。

说话人嵌入采用 3D-Speaker 工具包中的公开预训练 CAM++ 检查点，无需额外说话人模型训练。每个候选段按 1.5 s 子窗与 0.75 s 跳跃切片，从 80 维对数滤波器组前端提取 192 维嵌入。同一录音的全部子窗嵌入经谱聚类分为两类，类别数固定为二，与语料中双人电话对话的先验一致。每个候选段据此获得单一匿名编号，相邻同编号片段再合并。这种显式嵌入归属与仅靠识别器输出的切换标记交替指派有本质区别，后者在消融中表现为数量级差距。

从信号角度看，分割仅解决何时有声与是否换人，不回答是谁在说话。嵌入将短时声学特征映射为可比较的说话人空间，聚类则利用整段录音的全局分布纠正局部边界抖动。原文未披露 WavLM-Large 编码器输出维度与 Conformer 层数，也不披露识别器编码器与连接主义时间分类头的内部维度，因此无法给出完整的每层张量形状。教学上可将 1 秒示例理解为，时间分辨率在分割阶段由滑窗与跳跃决定，在嵌入阶段由子窗划分决定，最终汇合为每段一个说话人编号加一段波形。

### 识别器低秩适配的冻结边界与语言约束解码

识别器选用公开的 omniASR LLM 7B v2 检查点，属于 wav2vec2 风格编码器加连接主义时间分类头结构。适配时冻结声学编码器，仅更新秩为 8、缩放系数为 16、丢弃率为 0.05 的低秩适配器，在连接主义时间分类目标下训练。适配在 fairseq2 中运行 50,000 步，采用全分片数据并行与 bfloat16 精度，输入按 2 s 至 15 s 过滤并按长度分桶，每批至多 400,000 个音频元素并累积 16 步梯度。优化器为 AdamW，学习率为 2×10−4，动量参数为 0.9 与 0.98，无权重衰减，学习率按 0.1 与 0.4 与 0.5 的比例经历预热、保持与衰减三阶段。所有报告系统共用同一检查点。

训练语句由挑战训练集中连续参考轮次拼接而成，训练时可使用参考边界，测试时不可用。拼接时在来自不同说话人的相邻片段之间插入说话人切换标记，在同一说话人的连续片段之间不插入，使模型在学习词汇内容的同时学习轮转边界。这种构造使识别器在推理时也会输出切换标记，为后处理按子句切分提供依据。单卡与 7B 规模下全量微调并不现实，冻结编码器也有助于防止强大多语模型在较小领域数据上过拟合。

推理时每个区分片段独立解码，并显式给定目标语种作为解码约束，将解码限制在目标语种的词表空间内，有效减少非目标语种串词。识别输出的切换标记用于段内切分，按字符长度比例分配每子句时间戳，而非整段共享同一时间。段内近重复子句经统一码兼容分解与大小写折叠后，若完全相同、为子串或序列相似度不低于 0.9 则去重，以抑制解码器回声。经重叠消解后送入识别器的片段已互不重叠，原文未披露流式块划分与实时系数等部署开销。

所有开发集数字均采用相同的官方对称归一化对参考与假设同时处理，先做统一码兼容分解，再按挑战词错误率与字错误率脚本做严格分词，词队列去除标点。官方基线仓库同样对两侧做对称文本归一化，采用统一码规范分解、小写与标点去除，在相同 5 s 容差与时间约束最小置换错误率协议下计分。作者未重新为基线计分，直接引用仓库报告分数，因此两者差距反映结构差异，而非单侧清洗带来的虚假增益。

### 开发集大幅领先而评测集回落的成绩与消融归因

评测沿用挑战官方协议并保持公平可比。开发集为 150 段长对话，覆盖 21 个语种口音类别，其中 18 个类别以 tcpWER 计分，日语、韩语与泰语以 tcpCER 计分，时间容差领为 5 s 并以 MeetEval 计算。每个类别报告微平均错误率，总体宏平均为 21 类微平均的均值，数值越低越好。全部系统共用同一低秩适配检查点与相同对称归一化，基线分数直接引用官方仓库在相同容差与协议下的报告，作者未重新计分。离线整段解码与因果流式的差异在原文未展开，码率与参数量也未作为公平性变量披露。

下表汇总论文报告的 3 个关键宏平均数字，用于一次看清提交系统在开发集与评测集的绝对水平，以及与官方基线的对照。该表为手工整理，数字与单位均与原文逐字一致，语种细分见原文完整 Table 1 与 Table 2，本精简表未列出。

| 评测划分 | 系统 | 宏平均 tcpMER |
| --- | --- | --- |
| 开发集 | 最终级联系统 | 29.27% |
| 开发集 | 官方基线系统 | 79.15% |
| 评测集 | 最终级联系统 | 50.23% |

表中开发集最终系统宏平均 tcpMER 为 29.27%，词队列微平均 tcpWER 为 29.41%，字队列微平均 tcpCER 为 27.38%，官方基线在相同 21 类别协议下为 79.15%，论文同时报告相对降幅约为 63%。评测集提交在团队名下得分为 50.23%，明显高于开发集。原文完整 Table 1 显示语种差异显著，西班牙语墨西哥口音为 11.1%，土耳其语高达 65.8%，5 个英语口音平均为 22.2%。即使最终系统最困难的土耳其语队列，也仅与基线最优类别相当，说明级联结构在电话对话上更有效，但绝对数值仍依赖领域匹配。

下表为原文 Table 3 的完整摘选，展示开发集上 4 个递进配置在相同官方归一化与 5 s 容差下的宏平均 tcpMER，数值越低越好。该表保留了端到端基线与 3 个级联变体，便于定位最大收益来自哪一处改动，以及重叠处理与分割器替换各自的影响。

| Exp | System | tcpMER (%) |
| --- | --- | --- |
| Exp1 | End-to-end: VAD + ASR | 141.2 |
| Exp2 | + pyannote/seg.-3.0, CAM++ | 35.3 |
| Exp3 | + overlap disabled | 30.6 |
| Exp4 | + DiariZen-Large-s80 (repl. pyannote) | 29.27 |

表中 Exp1 仅以语音活动检测切分并依靠识别器输出的切换标记交替指派说话人，宏平均 tcpMER 高达 141.2%，原文明确指出时间约束下插入主导时数值可超过 100%。换用神经分割加 CAM++ 双说话人聚类后 Exp2 降至 35.3%，说明仅靠轮转标记无法可靠推断身份。关闭重叠感知后 Exp3 进一步降至 30.6%，原因是重叠区被重复转写两次。将分割器换为 DiariZen-Large-s80 的 Exp4 达到 29.27%，为展示四行中的最低值，也是最终提交配置。论文未报告方差、置信区间与人工听测，评测集重叠可忽略而分数仍回落，提示开发集调参存在领域偏移风险。曾尝试的自动翻译后处理因参考保留语码混合而变差，未纳入提交。

### 双人假设与时间约束评分下的边界复现与选型建议

系统的有效前提高度依赖双人电话对话假设。谱聚类固定分为两类，相邻同编号合并与短片段消解均按双人设计，若用于多人会议或单人独白，固定类别数与合并阈值将失效。重叠消解将重叠区判给较长片段并送入识别器互不重叠的片段，本质是以牺牲区分召回换取时间约束错误率的下降。在更重视召回或需要逐词时间戳的场景中，关闭重叠未必最优，选型应在目标指标上直接验证，而非沿用区分召回的直觉。

原文未验证的部署条件较多。统一采样率、实时系数、首包延迟与显存占用均未披露，推理按离线整段逐片段解码描述，未说明分块流式、前瞻窗口与缓存策略。训练仅在单张 NVIDIA RTX 6000 Ada 上完成 50,000 步适配，推理硬件与批量吞吐未给出。评测集参考未公开，无法做逐句误差归因，开发集调参的超参数在说话人、信道与语种混合变化时是否稳定，只能从 29.27% 到 50.23% 的回落中间接推测存在偏移。

复现需要区分三件事。代码方面，原文未提供作者自身仓库链接与运行说明，无法确认一键复现流程。权重方面，所用分割、嵌入与识别检查点在原文具名引用，原文未给出作者权重的直接下载说明。数据方面，训练、开发与评测划分沿用挑战官方发布，开发集为 150 段录音与 21 类别协议，评测集通过排行榜计分，系统整体不可直接运行。附录方面，原文未披露补充证明或额外消融，关键细节均在正文与参考文献中交代。

工程选型上，若目标是在时间约束错误率下取得可提交成绩，论文给出 3 条可复用的经验。保留独立的嵌入聚类阶段，不要仅靠切换标记交替指派。在时间约束评分下关闭重叠感知，避免重复转写。在解码时显式给定目标语种约束，减少串词。反之，若任务更关注多人、强重叠或流式低延迟，则需要重新评估固定双说话人、关闭重叠与离线逐段解码的适用性，并在目标数据上复测时间容差与归一化是否与挑战一致。原文未设试听页，无法对照听感，复现应以官方评分脚本为准。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：电话信道长对话，每段约为 30 分钟，原文未披露统一采样率。分割滑窗为 10 s 与 12 s 两种，跳跃均为窗长的 10%。后处理丢弃短于 0.7 s 片段，合并间隔不超过 1.5 s 的同说话人片段，切分长于 25 s 片段。嵌入按 1.5 s 子窗与 0.75 s 跳跃切片，输入为 80 维对数滤波器组特征，输出为 192 维嵌入，聚类数固定为二。解码按区分片段独立进行并带语种约束，评分容差领为 5 s，实时系数与延迟原文未披露。
- **训练与评测数据**：挑战官方训练清单用于低秩适配，训练时可使用参考轮次边界，测试时无预先切分与说话人标签。开发集为 150 段长对话，覆盖 21 个语种口音类别，英语按口音拆分为五个子类别。评测集通过排行榜计分，参考未公开。
- **算力与训练耗时**：识别器低秩适配在单张 NVIDIA RTX 6000 Ada GPU 上完成，共 50,000 步，采用全分片数据并行与 bfloat16 精度。推理硬件与批量配置原文未披露。
- **核心超参数与配置**：仅更新低秩适配器，秩为 8，缩放系数为 16，丢弃率为 0.05，目标为连接主义时间分类。输入过滤为 2 s 至 15 s 并按长度分桶，每批至多 400,000 个音频元素并累积 16 步梯度。优化器为 AdamW，学习率为 2×10−4，动量参数为 0.9 与 0.98，无权重衰减，学习率按 0.1 与 0.4 与 0.5 的比例经历预热保持与衰减。推理带目标语种约束，段内去重阈值为序列相似度 0.9。
- **推理速度与部署开销**：离线逐区分片段解码，经说话人切换标记切分与近重复去重后打包为 hyp.stm。原文未披露实时系数、首包延迟、吞吐与显存占用，未说明分块流式策略。
- **开源产物与协议状态**：原文未提供作者自身代码仓库链接与运行说明，所引分割嵌入与识别检查点在原文具名引用，数据沿用挑战官方划分，系统整体不可直接运行。
- **附录与补充材料要点**：原文未设附录，补充证明与额外消融均未披露，失效案例在正文讨论自动翻译后处理变差与评测集领域偏移推测。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 5.2/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 6.6/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:mlcslm:2026:conference-paper-id:fang26_mlcslm`
- 会议来源：[官方记录](https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.html) · [官方 PDF](https://www.isca-archive.org/mlcslm_2026/fang26_mlcslm.pdf)
- Track：Poster Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：最终系统开发集宏平均tcpMER为29.27%，相对官方基线79.15%下降约63%，覆盖21类与词字符双队列分布。

- 核心优势：Exp1的141.2%经嵌入聚类降至Exp2的35.3%，关闭重叠感知至30.6%，换用DiariZen至29.27%，因果链完整可核对。

- 主要短板：评估集50.23%较开发集29.27%高约20个百分点，管线超参在开发集调优，存在域偏移与过拟合风险。

- 主要短板：固定2说话人谱聚类未验证多人会话，解码目标语言来源是否为Oracle未说明，基线为引用未重评且归一化脚本存在差异。

- 主要短板：主导代价仅报告50k步LoRA占用单块GPU，原文未披露推理实时率或时延，无部署端到端实测支撑。

---

[← 返回 mlcslm-2026 论文汇总](/audio-research-portal/posts/conference-mlcslm-2026/)
