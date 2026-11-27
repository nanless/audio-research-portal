---
title: "Modality-Shift Contrastive Decoding for Temporally Grounded Audio-Visual Understanding"
date: 2026-11-27
draft: false
tags: [音视频问答, 对比学习, 音视频, 模型评估]
categories: [论文速递]
description: "针对音画大模型对音画时间对齐不敏感的问题，MSCD 以免训练的窗口内循环移位构造四路对数几率对比来放大对齐支持，在 DAVE 上为 OmniVinci 与 video-SALMONN 2+ 分别带来 5.5 与 3.0 个百分点的提升，代价是每步需 4 次语言模型前向与约 1.9 至 2.4 倍的中位耗时。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34162"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "模态偏移对比解码如何强化音画时间对齐"
paper_digest_original_title: "Modality-Shift Contrastive Decoding for Temporally Grounded Audio-Visual Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34162v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34162v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34162v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音画大模型对音画时间对齐不敏感的问题，MSCD 以免训练的窗口内循环移位构造四路对数几率对比来放大对齐支持，在 DAVE 上为 OmniVinci 与 video-SALMONN 2+ 分别带来 5.5 与 3.0 个百分点的提升，代价是每步需 4 次语言模型前向与约 1.9 至 2.4 倍的中位耗时。"
paper_digest_reader_sections: [{"heading":"听见提示音时画面在做什么：对齐敏感度不足成为瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"共享编码与四路对比构成的免训练流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"窗口内对半交换与四路对数几率对比如何分离对齐贡献","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三项基准准确率提升与音频偏移跟随行为","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"对比项、扰动形式与强度取值的消融证据","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、开销与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Integrated Vision Language Lab, KAIST"],"name":"Minyeong Jeong"},{"affiliations":["Integrated Vision Language Lab, KAIST"],"name":"Yeonju Kim"},{"affiliations":["Integrated Vision Language Lab, KAIST"],"name":"Yong Man Ro"}]
paper_digest_abstract_sha256: "5d842b4ce5614f22d00216d7a0ce5aab6ee224dfdaeb49592f1d122219768a7c"
paper_digest_sidecars: {"citation.bib":{"sha256":"bc7b9f250a0880172043bf55bab6d9b05d8599e742f5465c09700f68a5d7d18d","url":"/audio-research-portal/client/papers/2026-11-27/2611-34162/citation.bib"},"citation.json":{"sha256":"3a2a915a6c933ecd6911966cd392cac903b7b03edec9fe3b13038c4ebc69af04","url":"/audio-research-portal/client/papers/2026-11-27/2611-34162/citation.json"},"citation.ris":{"sha256":"3c0d5328aeb249c127d1576db9736e16eeb3e1a2e3ede5b5cca2075c31b913bc","url":"/audio-research-portal/client/papers/2026-11-27/2611-34162/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c0916169f1b8da0d6b9f81c1698247844617ac7d3aadbc8d5b98aea1e764efaf","url":"/audio-research-portal/client/papers/2026-11-27/2611-34162/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a6f6323388540557fc60455d5e66ca7f7a2ac0969e94d66de31fa2e3c231ba05"
paper_digest_api_reader_plan_sha256: "06e5908c8bce88a8eb079706ddeb0747b4056351f93093f64b470ac3b68ec373"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "43ec2539273cb2ccb2a37f767fbe7dc0503fd07e9831fc36834d795a4f7e0a16"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e73be0278d0ca437c1b599746bb282fb0a5024253b4a7c754b62721123da1a72"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "cdb8f9b8dbe4eac5008c67f0774294feac552fea0e412916cf73e44bf3cdecba"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b8dda24de2fe3930a4bc00f5e6c42d5437d03ac7a88e9db5af2cdff09507bb65"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 模态偏移对比解码如何强化音画时间对齐

> 英文题目：*[Modality-Shift Contrastive Decoding for Temporally Grounded Audio-Visual Understanding](https://arxiv.org/abs/2611.34162v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [音视频问答](/audio-research-portal/papers/?concept=task.av-question-answering)
- **研究方法**：[对比学习](/audio-research-portal/papers/?concept=method.contrastive)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)
- **研究重点**：[模型评估](/audio-research-portal/papers/?concept=research_focus.evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.1/10 | 技术严谨 6.2/10 | 实验充分 8.1/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 8.3/10 | 工程/实践 5.4/10


## 👥 作者与机构

- Minyeong Jeong：Integrated Vision Language Lab, KAIST
- Yeonju Kim：Integrated Vision Language Lab, KAIST
- Yong Man Ro：Integrated Vision Language Lab, KAIST

## 📌 核心摘要

**问题与瓶颈：** 音视频大语言模型 (Audio-Visual Large Language Model, AV-LLM) 以视频帧序列与音频波形为输入，以文本回答为输出，需要把何时听到的声音与何时看到的动作按时间对应起来。现有 AV-LLM 已通过时间分组、交错模态词元和显式时间编码表征时序结构，但表征不等于使用，模型仍可能忽略相对时序而依赖单模态线索。在 DAVE 多模态同步任务上的受控音频偏移探测显示，将整段混音波形平移并保持视频与题面不变后，模型选择原对齐答案的比例为 34.3% 至 38.0%，高于选择新对齐答案的 22.7% 至 29.4%，8 秒延迟实例仍坚持原答案 D 而非新答案 A。

**核心思路与方法架构：** 与侧重抑制跨模态幻觉的 AVCD、MAD、CAD 和 ASD 不同，模态偏移对比解码 (Modality-Shift Contrastive Decoding, MSCD) 的增量是免训练地在解码时放大时间对齐的贡献，保留骨干编码与语言模型参数不变。沿一条样本看，编码器先输出音频特征序列 A 与视频特征序列 V 并按时间组交错为 XAV，MSCD 以 w = 30 秒为窗在每窗内交换前后两半，对应目标位移为 w / 2 秒，分别构造仅移音频、仅移视频和等量双移三类扰动输入，四路共享编码输出而由解码器分别计算原始对数几率 (logit) z 与扰动对数几率 zA、zV 和 zAV。对数几率组合为 Δz 等于 1 / 2 乘以括号内 z 减 zA 减 zV 加 zAV，最终对数几率为 z 加 α 乘 Δz，其中 α 在 OmniVinci 上取 5.0，在 video-SALMONN 2+ 上取 1.5，加性近似把单模态重排效应减去而保留跨模态对齐效应。评测采用离线多选题首步概率选答，不更新任何参数。

**关键实验与核心代价：** 在 DAVE 多模态同步 2022 道题目、Daily-Omni 6 个子任务 1197 道题目和 AVUT 3 个匹配任务 1120 道题目上，MSCD 在两个骨干的三个基准平均准确率上均高于基线。OmniVinci 在 DAVE 上从 44.3% 升至 49.8%，提升 5.5 pp，Daily-Omni 从 61.2% 升至 63.3%，提升 2.2 pp，AVUT 从 66.5% 升至 67.7%，提升 1.2 pp；video-SALMONN 2+ 在 DAVE 上从 42.5% 升至 45.5%，提升 3.0 pp，Daily-Omni 从 61.6% 升至 64.4%，提升 2.8 pp，AVUT 从 61.8% 升至 62.4%，提升 0.6 pp。综合表 1，MSCD 在 6 组模型基准组合中有 5 组取得对比方法中最高平均准确率，仅在 video-SALMONN 2+ 的 AVUT 上低于 MAD 的 62.8% 与 CAD 的 62.5%。消融显示仅用音频偏移或视频偏移均不如完整四路对比，OmniVinci 上均值变体在 Daily-Omni 上为 58.1% 而完整 MSCD 为 63.3%；循环移位优于位置偏移与随机排列，30 秒窗优于 10 秒与 20 秒窗。代价是每解码步需 4 次解码器前向，DAVE 上 100 题中位首词元推理耗时为基线的 1.91 倍与 2.38 倍，全部为多选题准确率对比，未提供人工主观听测，仅在 TCA-Bench 上给出定性字幕示例。

**适用边界与深读导览：** 结论成立前提是多选题首步选答、每骨干在三基准未加权均值上选定单一 α，以及扰动作用于编码后特征而非原始波形，长于 120 秒的 AVUT 分组仅 71 道题目，结论需谨慎对待。未覆盖场景包括开放式生成定量增益、流式因果解码与端侧实时部署，以及音频提前与延迟方向上的不对称收益。欲深究加性分解假设、循环移位实现与窗口时长误差分析，可查阅下方方法概述和架构、实验结果与细节详述对应小节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 听见提示音时画面在做什么：对齐敏感度不足成为瓶颈

#### 从独立识别到时间对应

音画大语言模型 AV-LLM 将语言推理扩展到视觉与听觉输入，目标是在同一场景中联合处理视频与音频。仅在各自模态内识别事件并不充分，模型还需判断哪些声音与哪些画面属于同一情境。时间对齐是重要线索，声音与视觉事件的相对时机有助于确定观察之间的归属。已有工作引入时间分组、交错模态标记与显式时间编码来表征跨流的时间结构，但表征结构并不必然保证模型在关联证据时会使用这种对应关系。

DAVE 数据集中的多模态同步任务为检验提供了具体载体。该任务包含 2,022 个问题，每个片段标注 4 个视觉动作，并在音轨上叠加一段外部提示音。问题询问当听到特定声音时正在发生哪个视觉动作，输入为视频、混合后音频、问题文本与 5 个选项，输出为选项编号。正确答案由提示音与动作区间的时间重叠决定，这种设计迫使模型必须使用音画相对时机，而不能仅靠单模态内容猜测。

#### 受控偏移探针揭示的偏好

为检验敏感度，作者把整段混合音频相对视频平移 \(\delta\)，取值覆盖 \(\pm 4\)、\(\pm 8\) 与 \(\pm 16\) 秒，正移表示延迟，负移表示提前，并用静音填充与裁剪保持总时长不变。视频、问题与选项顺序保持固定，利用标注把平移后与提示音重叠最大的动作定为新的正确答案，仅保留正确答案发生变化的样本。每个位移量级合并正负 2 个方向统计模型在平移后输入上选择原正确答案与新正确答案的比例，全部 5 个选项始终开放。

结果显示模型更偏好原来对齐的事件。以 8 秒延迟为例，正确答案从 D 变为 A，但模型在两种条件下均预测 D。汇总全部位移量级，模型选择原正确答案的比例为 34.3% 至 38.0%，而选择新正确答案的比例仅为 22.7% 至 29.4%，其余预测落到其他动作或无对应选项。这种系统性偏好说明即使同时看到听到两路信号，模型也没有把变化后的时间对应作为决定性依据，从而引出在解码阶段放大对齐贡献的思路。

已有免训练推理方法多以抑制跨模态幻觉为目标，例如 AVCD 对音频、视频或两者做注意力引导掩膜，MAD 按问题相关性加权单双模态对比，CAD 在模态冲突时转移权重，ASD 增强对跨模态汇聚标记的注意力。这些方法不直接针对时间对齐的扰动设计对照，而 MSCD 的实质增量正是构造保持与破坏对齐的 4 路输入，并在对数几率层面做对比，使时间对应在预测中更具决定性，且无需更新任何模型参数。

### 共享编码与四路对比构成的免训练流水线

#### 与既有基线的改动与信号规格

与最近的分组与交错表征基线相比，MSCD 保留了原有编码器与语言模型权重，替换的是单次前向解码。同一组编码特征被复用于原始、音频偏移、视频偏移与音视频同移 4 种条件，每步解码执行 4 次语言模型前向。新增的音视频同移保持双模态相对对齐但重排各自内容，作为抵消模态内顺序效应的对照，这是区别于仅掩膜或加权单模态预测的关键设计。

信号规格沿用各基座原生预处理。音频偏移探针使用 16 kHz 单声道波形，OmniVinci 对每段视频均匀采样 64 帧并缩放到 448×448 像素，video-SALMONN 2+ 约每秒采样 1 帧且至多 120 帧，单帧像素预算为 61,250。音频经 Whisper 类编码器得到特征序列 \(A\)，视频经 SigLIP 类编码器得到特征序列 \(V\)，问题经文本嵌入得到序列 \(Q\)。时间窗口 \(w\) 取 30 秒，目标位移为半窗，与视频总时长无关，特征维度等细节原文未披露。

教学例子：以架构图中时钟闹铃问题为例，设输入为 1 秒厨房视频片段与闹铃声。流程按序为 1 视频帧进入视频编码器得到视觉标记，2 音频波形进入音频编码器得到音频特征，3 问题文本进入文本嵌入得到 \(Q\)，4 按时间组交错为 \(X_AV\)，5 在每个 30 秒窗口内对半交换构造 4 路输入，6 冻结的 AV-LLM 输出 4 组对数几率，7 对比后选择答案。原文未披露每组标记数 \(n_k^v\) 与 \(n_k^a\) 的具体取值，此处仅示意拆分汇合位置。

#### 通用对比解码的起点

对比解码的计算目标是在同一模型下比较原始输入与扰动输入的下一标记偏好。记解码步 \(t\) 的词表对数几率为 \(\mathbf{z}_t\)，扰动输入下的对数几率为 \(\mathbf{z}_t^{\prime}\)，文本序列 \(Q\) 与已生成前缀 \(y_{\lt t}\) 在两路中保持固定，\(\alpha \ge 0\) 为对比强度，\(f_{\theta}\) 为参数 \(\theta\) 的模型映射，\(p_{\theta}\) 为 softmax 后的分布。

\[\begin{aligned} \displaystyle\mathbf{z}_{t}^{\mathrm{CD}} \displaystyle=\mathbf{z}_{t}+\alpha\bigl(\mathbf{z}_{t}-\mathbf{z}^{\prime}_{t}\bigr), \\ \displaystyle p_{\rm CD}(\cdot\mid A,V,Q,y_{\lt t}) \displaystyle=\operatorname{softmax}(\mathbf{z}_{t}^{\mathrm{CD}}), \end{aligned}\]

该式的统计直觉是放大原始与扰动之间的差异方向，对扰动更敏感的标记获得更大增益。当 \(\alpha = 0\) 时退化为原始分布，当 \(\alpha\) 增大时差异被线性放大，极端大值可能过度抑制合理标记。输出的对比分布直接决定采样或首标记选择的排序，并在自回归中影响后续前缀，这是 MSCD 在音画场景下复用该框架的基础。

#### 架构总览导读

为一次看清从共享编码到对数几率对比的完整路径，可先沿输入到输出的箭头浏览主分支，再比较音频偏移、视频偏移与音视频同移在何处分叉与汇合。下图把编码共享、4 路时间偏移与对比选择放在同一视图，颜色区分视频、音频与文本，红色边框标出被移动的标记，有助于定位后续公式中 4 组对数几率的输入来源。

[![原论文 Figure 2：Overview of Modality-Shift Contrastive Decoding (MSCD).](https://arxiv.org/html/2611.34162v1/mscd_main.png)](https://arxiv.org/html/2611.34162v1/mscd_main.png)

*论文图 2：共享编码、四路时间偏移与对数几率对比的完整流程，颜色区分模态且红色边框标出移位（原论文 Figure 2）。*

图中左侧为共享编码，视频帧进入视频编码器，波形进入音频编码器，时钟闹铃问题进入文本嵌入，中间按 \(t_1\) 至 \(t_4\) 展示一个时间窗口。原始行保持 \(V_1\)、\(V_2\) 与 \(a_1\) 等交错顺序，音频偏移行仅移动橙色音频标记，视频偏移行仅移动蓝色视频块，音视频同移行两者同移。右侧冻结的 AV-LLM 输出 \(\mathbf{z}\)、\(\mathbf{z}_A\)、\(\mathbf{z}_V\) 与 \(\mathbf{z}_AV\)，再按半权重对比与加权叠加选择答案，底部注明窗内交换且保留全部特征。

### 窗口内对半交换与四路对数几率对比如何分离对齐贡献

#### 循环移位算子与 3 路扰动构造

构造扰动的第一步是定义窗内循环移位。记单窗内 \(m\) 个音频特征向量或视觉时间块组成的序列为 \(\mathbf{h} = [\mathbf{h}_0,\ldots,\mathbf{h}_{m-1}]\)，目标位移对应 \(s\) 个元素，\(R_s\) 为循环移位算子，\(w\) 为窗口时长且目标位移取 \(w/2\)。该操作在每个 30 秒窗口内独立执行，音频沿时间序列移动，视觉以完整时间块移动以保持空间组织。

\[R_{s}\mathbf{h}=\big[\mathbf{h}_{m-s},\ldots,\mathbf{h}_{m-1},\mathbf{h}_{0},\ldots,\mathbf{h}_{m-s-1}\big].\]

该算子的物理直觉是把后半窗整体搬到前半窗之前，同时保持每半内部顺序不变，并保留全部编码特征而不丢弃或填充。极端取值为 \(s = 0\) 时序列不变，\(s\) 取半窗时实现前后两半对调，若 \(s\) 接近 \(m\) 则近乎整序列轮换。输出的移位序列直接决定后续 \(R_A\) 与 \(R_V\) 的输入位置，是 3 路扰动共用的基础变换。

基于该算子定义 3 路扰动，文本 \(Q\) 与前缀 \(y_{\lt t}\) 始终固定。音频偏移对 \(A\) 施加 \(R_A\) 而保持 \(V\) 不变，视频偏移对 \(V\) 施加 \(R_V\) 而保持 \(A\) 不变，音视频同移对两者施加相同目标位移以保持对齐。OmniVinci 在约束旋转时间嵌入前移动编码特征，video-SALMONN 2+ 在解码器输入处移动标记并固定位置编号，末窗不足 \(w\) 秒时仍对半交换，4 路共享媒体编码而解码分别执行。

#### 对齐与顺序贡献的加法分离与最终解码

对比项的计算目标是从单移位差异中分离跨模态对齐贡献。记原始对数几率为 \(\mathbf{z}\)，3 路扰动下分别为 \(\mathbf{z}_A\)、\(\mathbf{z}_V\) 与 \(\mathbf{z}_AV\)，单移位差异拆为对齐项 \(\mathbf{a}_A\)、\(\mathbf{a}_V\) 与模态内顺序项 \(\mathbf{o}_A\)、\(\mathbf{o}_V\) 之和，同移差异近似为两顺序项之和。\(\Delta \mathbf{z}\) 取两单移位差异之和减去同移差异再乘以 \(1/2\)，以抵消重排自身内容的影响。

\[\begin{aligned} \displaystyle\Delta\mathbf{z} \displaystyle=\tfrac{1}{2}\bigl[(\mathbf{z}-\mathbf{z}_{A})+(\mathbf{z}-\mathbf{z}_{V})-(\mathbf{z}-\mathbf{z}_{AV})\bigr] \\ \displaystyle=\tfrac{1}{2}\bigl(\mathbf{z}-\mathbf{z}_{A}-\mathbf{z}_{V}+\mathbf{z}_{AV}\bigr). \end{aligned}\]

该组合的统计直觉是把顺序效应作为干扰参数予以相减，仅保留当音画对齐被保持时更受支持的答案方向。若模型完全忽略对齐，则各项差异接近零而 \(\Delta \mathbf{z}\) 微弱，若顺序效应完全可加且共享，则相减后恰为对齐两项的均值。得到的 \(\Delta \mathbf{z}\) 以向量形式加回原始对数几率，直接改变每个候选标记的相对排序与梯度方向。

最终解码的计算目标是把对比项按强度叠加到原始预测。记 \(\tilde{\mathbf{z}}\) 为增强后的对数几率，\(\alpha \ge 0\) 为对比强度，\(\Delta \mathbf{z}\) 为上一式输出，softmax 后得到选择分布。主实验按基座各选一个 \(\alpha\)，在 0 至 6 范围以 0.5 步长最大化三项基准的无加权平均准确率，得到 OmniVinci 取 5.0，video-SALMONN 2+ 取 1.5。

\[\widetilde{\mathbf{z}}=\mathbf{z}+\alpha\Delta\mathbf{z},\]

该式的行为直觉是沿对齐支持方向推动分布，对齐保持时更受支持的标记被放大。在 \(\alpha = 0\) 时退化为基线，\(\alpha\) 过大则可能放大噪声并在 AVUT 上下滑，实际曲线显示 DAVE 与 Daily-Omni 在较宽范围均优于基线。输出经 softmax 后取首个解码步概率最高的选项，多步字幕生成时则逐步影响前缀与后续标记。

### 三项基准准确率提升与音频偏移跟随行为

#### 评测协议与公平性前提

评测覆盖 DAVE 多模态同步 2,022 个问题、Daily-Omni 1,197 个问题含 6 个子任务、AVUT 1,120 个问题含字符、物体与文本 3 个匹配任务，均采用多项选择并以准确率衡量，高者为优。基座为 9B 参数的 OmniVinci 与 7B 参数的 video-SALMONN 2+，前者按时间分组并加入显式时间嵌入，后者交错音频与对应视觉标记。所有方法与基线使用相同视频预处理与首标记最高概率选答案，保证因果与离线条件一致。

MSCD 取窗口 \(w\) 为 30 秒，\(\alpha\) 按基座分别取 5.0 与 1.5，对照方法 AVCD、MAD、CAD 与 ASD 的超参数跨基准固定。需要区分的是本文报告均为客观准确率与选择率，未包含人工听测的 MOS 或 CMOS，也未报告方差与置信区间。平均准确率指基准内全部问题的总体准确率，变化量以百分点计，而非相对百分比。

#### 主结果：唯一全面超越基线的解码

下表提炼主结果的核心列，保留 DAVE、Daily-Omni 平均与 AVUT 平均三列，行保留基线、AVCD、MAD 与 MSCD 在两个基座上的表现。列数遵循原表且未添加无来源列，子任务细节在正文补充，以核查 MSCD 是否为唯一在三项基准上均超越基线且在多数列保持最高的可运行策略。

| Method | DAVE | Daily-Omni Avg. | AVUT Avg. |
| --- | --- | --- | --- |
| Base | 44.3 | 61.2 | 66.5 |
| + AVCD [12] | 43.6 | 60.6 | 66.3 |
| + MAD [4] | 43.2 | 59.7 | 65.8 |
| + MSCD | 49.8(+5.5) | 63.3(+2.2) | 67.7(+1.2) |
| Base | 42.5 | 61.6 | 61.8 |
| + AVCD [12] | 42.0 | 61.3 | 61.6 |
| + MAD [4] | 42.6 | 61.2 | 62.8 |
| + MSCD | 45.5(+3.0) | 64.4(+2.8) | 62.4(+0.6) |

MSCD 是唯一在三项基准上同时超越基线的方法。OmniVinci 在 DAVE 从 44.3% 升至 49.8%，提升 5.5 个百分点，Daily-Omni 平均从 61.2% 升至 63.3%，提升 2.2 个百分点，AVUT 平均从 66.5% 升至 67.7%，提升 1.2 个百分点。video-SALMONN 2+ 在 DAVE 从 42.5% 升至 45.5%，提升 3.0 个百分点，Daily-Omni 从 61.6% 升至 64.4%，提升 2.8 个百分点，AVUT 从 61.8% 升至 62.4%，提升 0.6 个百分点，并在 6 组模型与基准组合中的 5 组取得最高。

细分上两基座在 Daily-Omni 音视频事件对齐与上下文理解均明显获益，OmniVinci 前者从 48.3% 升至 54.6%，提升 6.3 个百分点，后者从 57.5% 升至 61.7%，提升 4.1 个百分点。对照方法多未超越基线，ASD 在首标记评测中与基线完全相同，AVCD、MAD 与 CAD 多数下滑。未胜出项同样存在，video-SALMONN 2+ 的 AVUT 平均仍低于 MAD 的 62.8% 与 CAD 的 62.5%，OmniVinci 比较与推理子任务及字符匹配保持不变，说明收益并非遍及所有切分。

#### 偏移跟随与定性字幕

为检验是否真正跟随时间变化，下表汇总音频延迟探针在合并正负方向后的选择率，\(N\) 为各量级合格样本数而非去重问题数。列给出新正确答案与原正确答案在基线与 MSCD 下的选中比例，箭头向上表示越高越好，原答案列无方向性，仅用于观察偏好是否逆转。

| Delay (s) | N | Shifted correct answer (%) ↑ Base | Shifted correct answer (%) ↑ MSCD | Original correct answer (%) Base | Original correct answer (%) MSCD |
| --- | --- | --- | --- | --- | --- |
| ±4 | 603 | 22.7 | 25.7(+3.0) | 35.7 | 37.0(+1.3) |
| ±8 | 1457 | 25.0 | 29.6(+4.6) | 38.0 | 37.7(-0.2) |
| ±16 | 938 | 29.4 | 35.6(+6.2) | 34.3 | 26.9(-7.5) |

MSCD 在全部 3 个量级均提高新正确答案的选择率。\(\pm 4\) 秒从 22.7% 升至 25.7%，提升 3.0 个百分点，\(\pm 8\) 秒从 25.0% 升至 29.6%，提升 4.6 个百分点，\(\pm 16\) 秒从 29.4% 升至 35.6%，提升 6.2 个百分点。在 16 秒处新答案 35.6% 超过原答案 26.9%，逆转了基线中原答案 34.3% 高于新答案 29.4% 的排序，平均错误距离也从 9.98 秒降至 9.27 秒与从 9.77 秒降至 9.50 秒。

按方向拆分后增益主要来自音频提前，\(-16\) 秒新答案从 24.8% 升至 34.8%，提升 10.0 个百分点，而 \(+16\) 秒保持 36.9% 不变。由于各方向与量级的合格子集不同，不能单独归因于方向或幅度。\(N\) 在 \(\pm 4\)、\(\pm 8\) 与 \(\pm 16\) 秒分别为 603、1,457 与 938，远距离错误选择率在 8 秒以上各区间均下降，例如 12 至 16 秒 OmniVinci 从 19.2% 降至 14.3%，8 秒以内变化较小或方向混杂。

除选择率外，定性字幕例子可对照发言人与画面的归属现象。下图截取 TCA-Bench 上 video-SALMONN 2+ 的两组代表性片段，每组配对参考帧、说话人描述与台词，再并列基线与 MSCD 的生成摘录，橙色与蓝色分别标出错误指派与对应修正，便于把时间对齐增益与语义关联联系起来。

![原论文 Figure S1：Figure S1: Qualitative caption excerpts from video-SALMONN 2+ on TCA-Bench.](/audio-research-portal/images/papers/2611.34162/figure-4-b986f767841eedde.png)

*论文图 4：法庭与便利店两组字幕摘录对比基线错配与 MSCD 修正的说话人归属（原论文 Figure S1）。*

左侧法庭证词中女性证人与男性律师各说一句，基线把律师的汽车专业知识证言归于女性，MSCD 改为男性叙述。右侧便利店中柜台后女性与蒙面男子各说一句，基线把女性的台词归于男声并把男子的反问归于女性，MSCD 恢复为女性先说而男声追问。2 例均使用贪心解码至多 192 个标记，\(\alpha\) 取 1.5，\(w\) 取 30 秒并加自适应合理性约束，摘录为原文逐字复现，仅为例示而非定量证明。

### 对比项、扰动形式与强度取值的消融证据

#### 对比形式：为何需要音视频同移

下表比较仅用音频偏移、仅用视频偏移、两者均值与加入音视频同移的完整形式，对比强度按基座固定为 5.0 与 1.5。列保留两基座在 DAVE 与 Daily-Omni 的准确率，行覆盖基线与 4 种对比项，完整形式的默认设置以底纹标出，变化量均相对基线以百分点计。

| Variant | OmniVinci DAVE | OmniVinci Daily-Omni | video-SALMONN 2+ DAVE | video-SALMONN 2+ Daily-Omni |
| --- | --- | --- | --- | --- |
| Base | 44.3 | 61.2 | 42.5 | 61.6 |
| Audio shift | 48.6(+4.3) | 58.1(-3.0) | 44.6(+2.1) | 61.6(+0.0) |
| Video shift | 38.0(-6.2) | 55.3(-5.8) | 41.1(-1.4) | 62.5(+0.9) |
| Mean | 43.3(-0.9) | 58.1(-3.1) | 43.4(+0.9) | 63.0(+1.4) |
| Ours | 49.8(+5.5) | 63.3(+2.2) | 45.5(+3.0) | 64.4(+2.8) |

在本次对比的消融变体中完整形式在当前精简表的 DAVE 与 Daily-Omni 列均高于其他消融变体，OmniVinci 在 DAVE 达 49.8%，提升 5.5 个百分点，Daily-Omni 达 63.3%，提升 2.2 个百分点，AVUT 达 67.7%，提升 1.2 个百分点出自原文完整消融表未在当前精简表列出的列。仅音频偏移在 DAVE 有益，OmniVinci 从 44.3% 升至 48.6%，提升 4.3 个百分点，但在 Daily-Omni 降至 58.1%，下降 3.0 个百分点，AVUT 降至 62.3%，下降 4.2 个百分点，说明单移位收益不能稳定外推。

仅视频偏移多低于基线，OmniVinci 在 DAVE 降至 38.0%，下降 6.2 个百分点，均值形式在 OmniVinci 三项基准上均低于基线。相对均值加入同移后 OmniVinci Daily-Omni 从 58.1% 升至 63.3%，video-SALMONN 2+ 在 Daily-Omni 从 63.0% 升至 64.4%，支持用同移抵消模态内重排效应的设计，未做该消融则无法区分对齐与顺序贡献。

#### 扰动策略：循环移位为何最稳

下表在同一对比框架下比较位置偏移、随机排列与循环移位，窗口均取 30 秒且强度固定。位置偏移仅平移时间坐标而不改变内容顺序，随机排列在窗内随机重排时间块，循环移位对半交换并保持每半内部顺序，行覆盖基线与 3 种策略，列为两基座在两项基准上的准确率。

| Perturbation | OmniVinci DAVE | OmniVinci Daily-Omni | video-SALMONN 2+ DAVE | video-SALMONN 2+ Daily-Omni |
| --- | --- | --- | --- | --- |
| Base | 44.3 | 61.2 | 42.5 | 61.6 |
| Pos. offset | 44.3(+0.0) | 61.2(+0.1) | 43.7(+1.2) | 62.7(+1.2) |
| Random perm. | 47.6(+3.3) | 62.1(+0.9) | 42.7(+0.2) | 63.2(+1.7) |
| Cyclic shift | 49.8(+5.5) | 63.3(+2.2) | 45.5(+3.0) | 64.4(+2.8) |

循环移位在两基座两项基准上均为最高，OmniVinci 在 DAVE 达 49.8%，Daily-Omni 达 63.3%，video-SALMONN 2+ 在 DAVE 达 45.5%，Daily-Omni 达 64.4%。位置偏移对 OmniVinci 几乎无变化，DAVE 保持 44.3%，Daily-Omni 为 61.2%，提升 0.1 个百分点，对另一基座提升约 1.2 个百分点。随机排列优于基线但低于循环移位，前者频繁断裂使顺序效应难抵消，后者在边界留下缺失特征，循环移位同时缓解这两点。

#### 强度与窗口的权衡

下图展示对比强度 \(\alpha\) 从 0 至 6 的准确率变化，纵轴为相对基线的百分点增益，横轴为强度，平均指三项基准的无加权均值，垂直虚线标出主结果取值。先看整体是否在宽范围优于基线，再比较 DAVE、Daily-Omni 与 AVUT 3 条曲线的分化，有助于理解为何两基座选择不同强度。

[![原论文 Figure 3：Effect of the contrastive strength \\alpha.](https://arxiv.org/html/2611.34162v1/alpha_sensitivity_with_average.svg)](https://arxiv.org/html/2611.34162v1/alpha_sensitivity_with_average.svg)

*论文图 3：对比强度从 0 至 6 的准确率增益曲线，虚线标出两基座主结果取值（原论文 Figure 3）。*

左子图 OmniVinci 取 \(\alpha = 5\)，DAVE 蓝色曲线随强度攀升至约 5 个百分点后趋平，Daily-Omni 橙色与平均黑色稳步为正，AVUT 绿色贴近零线。右子图 video-SALMONN 2+ 取 \(\alpha = 1.5\)，Daily-Omni 橙色曲线约在 2 处达峰后缓慢回落，DAVE 蓝色曲线在 1.5 之后继续明显上升，直到约 3.5 至 4 处才达峰，峰值约高出基线 4 个百分点，AVUT 在 1.5 后明显下滑至负值，高强度处约下降 3 至 4 个百分点。两基座在 DAVE 与 Daily-Omni 的宽范围均优于基线，但最优强度因基准而异，AVUT 偏好更小取值。

窗口时长比较显示 30 秒优于 10 秒与 20 秒，OmniVinci 在 DAVE 分别为 45.7%、47.9% 与 49.8%，video-SALMONN 2+ 在 Daily-Omni 分别为 62.7%、63.7% 与 64.4%。整片段单窗在 OmniVinci DAVE 达 50.4%，提升 6.1 个百分点，但在 Daily-Omni 为 62.7%，低于 30 秒的 63.3%，另一基座两者相近。AVUT 长视频超过 120 秒仅 71 问，所有设置在该组多低于基线，需谨慎解读，Daily-Omni 30 秒与 60 秒两组则均提升约 2.2 至 3.1 个百分点。

### 假设边界、开销与复现核对

#### 加法假设与未验证范围

MSCD 的核心假设是单移位差异可加分为对齐与顺序两部分，且同移的顺序项与对应单移位共享并可加合并。实际实现中舍入会打破严格等价，OmniVinci 双模态舍入到各自时间网格后实现位移可能不同，video-SALMONN 2+ 按估计块时长换算音频标记数，短窗引入更频繁的时间断裂，长窗减少断裂但可能跨越多个事件。这些近似使相减仅为估计而非精确消除，窗口越短或视频越长时偏差可能更大。

未验证范围同样需要说明。无音频时两基座仍达 41.6% 与 40.8%，目标动作为 4 个中最长者占 52.5%，模型约 39% 选择最长动作，说明时长偏置可部分解释视频单模态表现。8 秒以内近距离错误变化小或混杂，30 秒窗口在 AVUT 长视频上增益不稳定，方向拆分显示提前增益大而延迟增益小。评测仅用首标记多选准确率与客观选择率，未做人工听测与方差报告，字幕例子仅为例示。

#### 开销、复现与选型建议

开销方面 MSCD 每步需 4 次语言模型前向并共享编码输出。在 100 个 DAVE 问题、单张 NVIDIA TITAN RTX、FP16 精度与批量为 1 的条件下，OmniVinci 中位耗时从 2.22 秒增至 4.26 秒，为基线的 1.91 倍，video-SALMONN 2+ 从 0.60 秒增至 1.42 秒，为基线的 2.38 倍，处于对照方法的 1.70 至 3.77 倍区间内。参数量为 9B 与 7B，显存、吞吐与实时率原文未披露，流式分块与缓存策略也未给出。

复现核对上需区分三件事，代码开源、权重可下载与系统可运行均未在正文确认，无可验证的作者资源说明，附录详述了采样、移位位置、基线超参数、扰动变体与探针协议，可作为复现起点。选型上若任务依赖音画时间对应且视频多在 30 秒左右，30 秒窗口与按基座选择的强度是稳妥起点，若延迟敏感或长视频为主，需权衡约 2 倍耗时与小样本上的不确定性，并先在自身数据上复核近距离混淆是否改善。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：探针音频为 16 kHz 单声道，OmniVinci 每视频均匀采样 64 帧并缩放到 448×448 像素，video-SALMONN 2+ 约每秒 1 帧至多 120 帧且单帧至多 61,250 像素，窗口 30 秒目标位移为半窗，码率、因果前瞻与 RTF 原文未披露
- **训练与评测数据**：无模型训练阶段，评测用 DAVE 多模态同步 2,022 问、Daily-Omni 1,197 问含 6 个子任务、AVUT 1,120 问含 3 个匹配任务，语种与划分细节原文未披露
- **算力与训练耗时**：无训练硬件说明，推理耗时在单张 NVIDIA TITAN RTX 上以 FP16 精度批量为 1 测得 100 个 DAVE 问题，训练步数与耗时原文未披露
- **核心超参数与配置**：窗口 30 秒，对比强度 OmniVinci 取 5.0 且 video-SALMONN 2+ 取 1.5，搜索范围 0 至 6 步长 0.5，对照方法超参数跨基准固定，优化器与学习率不适用
- **推理速度与部署开销**：每步 4 次语言模型前向并共享编码，OmniVinci 中位 4.26 秒为基线 1.91 倍，video-SALMONN 2+ 中位 1.42 秒为基线 2.38 倍，参数量 9B 与 7B，RTF 与显存原文未披露
- **开源产物与协议状态**：原文未披露代码权重数据与演示的公开方式，无可验证的可用资源说明，复现需依据附录实现细节自行搭建
- **附录与补充材料要点**：附录给出采样与移位位置、基线超参数、位置偏移与随机排列变体、误差与探针协议，以及视频单模态、窗口与视频时长、方向拆分、耗时与 TCA-Bench 字幕例子的补充分析

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34162v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：MSCD在两骨干三基准上均高于基线且在6组模型基准组合中有5组取得对比方法中最高平均准确率。

- 核心优势：完整四路对比在DAVE与Daily-Omni四列消融中均为最高，循环移位优于位置偏移与随机排列且30秒窗经系统验证。

- 主要短板：加性分解为未经形式化证明的设计假设，双移经各自时间网格取整后实际位移可能不一致。

- 主要短板：α在评测均值上选定可能偏乐观且未报告置信区间，长于120秒的AVUT分组仅71题需谨慎解读。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
