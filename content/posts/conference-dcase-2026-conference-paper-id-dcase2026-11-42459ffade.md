---
title: "Summary of DCASE 2026 Task 5: Audio-Dependent Question Answering"
date: 2026-11-28
draft: false
description: "DCASE 2026 个任务 5 以四阶段音频依赖过滤筛除可凭文字答对的题目形成含 3,000 道题的 ADQA-Bench，36 个提交中以 MOSS 与 Qwen3-Omni 集成的 58.33% 为最高，而可比提交平均比开发集低 11.91 个百分点且 233 道题被全部错过，揭示轻量编排可接近大规模集成的同时仍需承担跨分布落差与增益未分离的代价。"
tags: ["数据集", "基准设计", "音频大模型", "音频问答"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "靠听才能答对：DCASE 2026 音频依赖问答的过滤、参赛与落差"
paper_digest_original_title: "Summary of DCASE 2026 Task 5: Audio-Dependent Question Answering"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-11"
paper_digest_workbench_source_sha256: "6be58480b2a917f2326746c0ec9c4320a677ad8934bf1a7fa4a3d38651c19a16"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_He_11.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "DCASE 2026 个任务 5 以四阶段音频依赖过滤筛除可凭文字答对的题目形成含 3,000 道题的 ADQA-Bench，36 个提交中以 MOSS 与 Qwen3-Omni 集成的 58.33% 为最高，而可比提交平均比开发集低 11.91 个百分点且 233 道题被全部错过，揭示轻量编排可接近大规模集成的同时仍需承担跨分布落差与增益未分离的代价。"
paper_digest_reader_sections: [{"heading":"静音也能答对：音频问答的文字捷径与评测失真","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四阶段音频依赖过滤如何筛出必须听的题目","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冠军系统如何组织难度分箱、声学标注与多视图集成","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"开发集基线、骨干分组与各队最佳成绩","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"题目难度为何两极分化与开发到评测落差","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"在什么前提下结论成立与轻量部署如何选型","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Haolin He"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Renhe Sun"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zheqi Dai"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Xingjian Du"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Chunyat Wu"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zining Liang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zhengxi Liu"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Jiahe Lei"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Runbang Wang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Jiayi Zhou"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Mingru Yang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Xiquan Li"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Yun Chen"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Xie Chen"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Zhiyao Duan"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Weiqiang Wang"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Mark Plumbley"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Jian Liu"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Qiuqiang Kong"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"df0efbb95757af1cb3848d72edb22aa28031d5bd852d4b46ab0b67fbc4cdf523","url":"/audio-research-portal/client/papers/2026-11-28/conference-42459ffadef1f7d336dfdb20/citation.bib"},"citation.json":{"sha256":"a1a6213939e7774a9a022b3045806ce32a7796bc582baae86592619e9ec07707","url":"/audio-research-portal/client/papers/2026-11-28/conference-42459ffadef1f7d336dfdb20/citation.json"},"citation.ris":{"sha256":"202280d578544fdd869d6ee858f1015413874f474724bbbcc6b77fd584369a9c","url":"/audio-research-portal/client/papers/2026-11-28/conference-42459ffadef1f7d336dfdb20/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b14320a069d97fc34e59cf8a21311542928c51383caf9338ebc4b408bc7bda59","url":"/audio-research-portal/client/papers/2026-11-28/conference-42459ffadef1f7d336dfdb20/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-11"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_He_11.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d6b804b49df7e8e9505e2da169f1e16e81920d9422836e8487ac0523e0653e0d"
paper_digest_api_reader_plan_sha256: "3d2d35625d4624a40eae2789315d0c63311b5f33fab8bfac7dbc519b1d6e3188"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e18ca2f9570ad07775545addcaeaf5ed3b65906d37de73bec15c9cf68ee2dafb"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4d270d21b91e628551226df16d810b3343507ec456a9c7633f670ddfc67f1d4c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9a6c5efb8cc9795b11c7ecdb42be8ec248f7cb7cc2cca97823fa46b7220f42fb"
paper_digest_api_reader_author_count: 19
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "be917dc3c50418db6af0eabd98b034550ca67385a3169e199a04da69bc6768ee"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 靠听才能答对：DCASE 2026 音频依赖问答的过滤、参赛与落差

> 英文题目：*Summary of DCASE 2026 Task 5: Audio-Dependent Question Answering*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-11`
> Track：P1-2




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_He_11.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)
- **模型家族**：[音频大模型](/audio-research-portal/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 6.6/10 | 技术严谨 6.5/10 | 实验充分 7.9/10 | 清晰度 6.9/10 | 影响力 7.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 7.2/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Haolin He：机构信息未能从会议 PDF 纯文本可靠映射
- Renhe Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Zheqi Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Xingjian Du：机构信息未能从会议 PDF 纯文本可靠映射
- Chunyat Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Zining Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengxi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jiahe Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Runbang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayi Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Mingru Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiquan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyao Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Weiqiang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Plumbley：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Qiuqiang Kong：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 大音频语言模型（large audio-language model, LALM）在多选音频评测中常借助文本捷径抬高分数，即使将音频替换为静音仍能答对不少题目，根因是语言先验与数据集伪影使正确答案可从文字中恢复。音频依赖问答（Audio-Dependent Question Answering, ADQA）要求输入为一段录音配一道问题与通常 4 个选项且仅一个正确，文本不足作答，必须依据音频中的停顿、事件顺序与场景线索判断。已有 MMAU、MMAR 与 MMSU 等基准混有可凭常识答对的条目，无法区分模型是否真正听见。继续沿用这类分布会高估听觉接地能力，亟需仅保留必须听音才能作答条目的评测集。

**核心思路与方法架构：** 与最接近的混合基准复用路线相比，实质增量是四阶段音频依赖过滤（Audio-Dependency Filtering, ADF）级联，仅保留听音必需条目并形成 3000 个条目的 ADQA-Bench 隐藏评测集。单条样本经历静音探测、困惑度过滤、常识过滤与人工核验，先用多模型在静音下作答并丢弃多于一个盲模型仍答对者，再计算各选项在静音下的语言模型困惑度并丢弃正确项困惑度最低者，随后由纯文本大语言模型（large language model, LLM）剔除可凭常识答对者，最后经两轮人工确认答案正确且干扰项在声学上不成立。训练侧沿用约 571k 个条目的 AudioMCQ 语料中强音频贡献（Strong Audio-Contribution, StrongAC）子集并蒸馏 Gemini 3.1 Pro 思维链（chain-of-thought, CoT）得到 AudioMCQ-StrongAC，开发集为 1607 个条目，赛道按总参数量划分为不超过 100B 且单部件不超过 30B 的总体赛道与小于 10B 的轻量赛道。冠军流程在 167,541 个候选中按音频与静音配对提示划分 6 个难度类并按组配额抽取 12,800 行，对 D 选项按 1.0 / 1.0 / 1.0 / 1.3 过采样，再以群组奖励解耦归一化策略优化（Group reward-Decoupled Normalization Policy Optimization, GDPO）做低秩适配（Low-Rank Adaptation, LoRA），推理时注入声学标注并以加权对数概率融合多视角，融合权重 λ 约为 0.46。

**关键实验与核心代价：** 在隐藏的 3000 个条目 ADQA-Bench 评测上，以评测集 top-1 准确率比较，Chung-Ang University 的 Lim_CAU_4 以 MOSS-Audio-8B-Thinking（MOSS-8B-Think）融合 Qwen3-Omni-30B 取得 58.33 %，为 36 个提交中最高，高于同队轻量冠军 Lim_CAU_1 的 57.30 %，原文报告相差 1.03 pp，36 个提交区间为 31.87 % 至 58.33 %，随机猜测基线为 25.46 %。组织方最强基线 Qwen3-Omni-30B 在 1607 个条目的开发集上为 62.48 %，因与隐藏评测分布不同而不与参赛分数直接可比。在 30 个可比提交上评测较开发平均下降 11.91 pp，中位数下降 10.91 pp。题目难度呈双峰分布，567 题仅不足 10 % 系统答对，638 题超 90 % 系统答对，233 题（7.8 %）被全部系统答错而 110 题被全部答对，36 系统的并集上界可解 2767 题（92.2 %）。原文未报告训练算力、推理延迟、吞吐、显存或成本实测，标注器增益未与集成解耦，推理时思维链改动多未获益并伴随退化。

**适用边界与深读导览：** 结论仅在多选隐藏答案与禁止人工标注评测音频的协议下成立，不覆盖开放式生成与消除法捷径之外的场景，开发集复用 MMAU、MMAR 与 MMSU 条目使调参与来源重叠混杂，单一样本的规模比较无法分离主干与调优效应。233 个全错题在归因于编码器前仍需标签与推理核查，96.0B 元数据计数集成仅领先 8B 轻量系统 1.03 pp 的现象提示数据筛选与推理编排可弥补规模差距，但仅凭一次比较不宜推广。下文方法概述和架构说明过滤级联、数据划分与赛道规则，下文实验结果列出分组均值、落差分布与推理干预的持平或退化证据，下文局限与问题讨论调参划分与重叠审计建议。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 静音也能答对：音频问答的文字捷径与评测失真

大型音频语言模型在多项选择音频评测中常利用文字捷径抬高分数。原文指出，把音频替换为静音后，先进模型仍能答对不少题目，依靠的是语言先验与数据集编造痕迹，而非真实听觉证据。这种虚高让已有分数无法回答模型是否真的在听，亟需只能靠声音才能做对的题目来重新校准进步方向。

DCASE 2026 个任务 5 把这一需求定义为音频依赖问答。每道题目配一段录音、一道问题与通常 4 个选项，仅有一个正确选项，且仅凭文字不足以锁定答案。题库覆盖音乐、语音与环境声音 3 类，要求模型区分韵律停顿、事件先后与场景细节，而非复述常识。

已有大规模音频理解评测包含可从文字解出的题目，直接沿用会奖励走捷径的系统。组织方因此不再沿用 MMAU、MMAR 与 MMSU 的原始混合题，而是对其中的候选题与新增人工撰写题目施加统一过滤，只保留听觉贡献充分的条目，从而把评测焦点从语言能力转回声音证据。

首届比赛吸引 14 支队伍提交 36 个系统，按总参数量分为不超过 100B 的总体赛道与低于 10B 的轻量赛道。隐藏评测集含 3,000 道题目，随机猜测期望为 25.46%，全部系统均高于这一随机水平。开发集与评测集题目来源与难度不同，任何跨集比较都需先确认划分口径一致。

训练侧以约 571k 条音频选择题为起点，仅保留听觉贡献充分的子集并配以蒸馏自 Gemini 3.1 Pro 的思维链解释，形成官方训练语料。组织方同时发布 5 个带调优提示词的音频语言模型基线，均只在 1,607 道开发集题目上报告首选准确率，其中 Qwen3-Omni-30B 以 62.48% 居首。参赛系统须为开源模型，评测答案全程隐藏且禁止人工标注与转写回灌，总体赛道还要求单部件不超过 30B，每队最多提交 4 个系统。

随机猜测水平高于名义四选项 25% 的原因在于选项数量并不统一，原文按每道题目选项数倒数平均得到 25.46%。开发集共 1,607 道题目，均通过四阶段过滤，评测集则为新抽取的 3,000 道题目并全程隐藏答案。组织方基线只在开发集上计分，参赛系统则在隐藏评测集上计分，两者划分不同，直接对比分数时须先对齐集合口径，避免把跨集差异误读为方法差距。

### 四阶段音频依赖过滤如何筛出必须听的题目

音频依赖过滤级联只保留正确答案依赖音频信号的题目，并同时产出训练与评测两条分支。评测分支从已有评测与人工新题出发，经过硬过滤、软过滤、大语言模型常识检查与人工核查得到 ADQA-Bench。训练分支在 AudioMCQ 语料上做强音频贡献筛选，并蒸馏思维链依据，形成可用于微调的语料。

为一次看清来源、过滤与训练评测分叉，建议先看流程图左侧题源如何进入 3 路过滤，再看中间如何汇入人工核查，最后看右侧训练库与评测集如何分别送入同一批大音频语言模型完成排序。左侧三枚图标代表不同题源，中间矩形框标出 3 类自动检查，箭头汇合方向揭示了筛除逻辑，右侧分支区分了训练与评测的不同去向。本次像素顶部与左侧混入截断的单位行与正文碎片，底部图注仅剩半行，解读时仅依据中间流程框与箭头主体。

[![原论文 Figure 1：Audio-Dependency Filtering (ADF).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-1.png)

*论文图 1：音频依赖过滤流程示意：三路自动检查汇入人工核查形成评测集，训练语料分支单独送入模型排序（原论文 Figure 1）。*

图中显示左侧自上而下排列三枚打字机图标，分别接入标有 Hard-ADF、Soft-ADF 与 LLM 的矩形框，其中中间一路以粗黑箭头强调。3 路输出汇合后指向人工核查框，再向下得到 ADQA-Bench 并向右送评。右侧黄色圆柱数据库标为 AudioMCQ-SAC-GCoT，向下以训练箭头接入黑色人头图标，该图标还接收评测输入并向下输出排序结果。

硬过滤采用静音探测，把音频替换为静音后请一组大音频语言模型作答，若超过一个盲测模型仍选对，则视为不听也能答对而丢弃。软过滤计算每个选项在静音条件下的语言模型困惑度，若正确选项困惑度最低，说明文字本身偏好正确答案，同样丢弃。两步分别从行为与概率层面暴露语言捷径。

大语言模型常识过滤让仅见文字的模型在无音频时作答，答对即视为可用常识或世界知识解出而剔除。两遍人工核查确认标注答案在有音频时正确，且每个干扰项看似合理但在声音上错误。通过的开发集含 1,607 道题目，隐藏评测集含 3,000 道题目。训练语料源于约 571,000 条的 AudioMCQ，经强音频贡献筛选并加入 Gemini 3.1 Pro 蒸馏的思维链依据。

### 冠军系统如何组织难度分箱、声学标注与多视图集成

与已有开源骨干相比，冠军方案的增量不在提出全新编码器，而在围绕 MOSS-Audio-8B-Thinking 的数据组织与推理编排。训练侧用难度分箱与低秩适配微调重塑样本权重，推理侧以外挂声学标注器补充语音与场景证据，再以多视图加权集成压制选项位置偏置。原文未说明冻结与更新的模块边界与优化器细节，采样率等信号规格亦未披露。

训练组织从 167,541 个 AudioMCQ-StrongAC 候选中按音频与静音配对提示划分六档难度，再按组配额抽出 12,800 行。针对报告的位置偏置，对选项 D 做 1.0 / 1.0 / 1.0 / 1.3 的过采样，并在低秩适配器上施加分组奖励解耦归一化策略优化，使模型更关注难例的声音依据而非文字顺序。

推理时路由器按问题关键词把题目分到语音、说话人、音乐与场景等类别，只运行相关标注器，包括语音活动检测、Whisper 韵律、pyannote 说话人分离、ECAPA-TDNN 说话人确认、对比语言音频预训练场景匹配与 librosa 特征，输出转为自然语言片段注入提示词。Lim_CAU_4 以约 0.46 的权重融合两路对数概率并做选项排列集成，拿下总体第一。

这一配方得到参赛群体的呼应。提示词设计覆盖 11 支队伍，低秩适配、有监督微调与思维链提示各覆盖 9 支队伍，群组相对策略优化覆盖 5 支队伍，多数投票覆盖 7 支队伍。多数队伍在 AudioMCQ-StrongAC 上微调，目标从纯答案文本到结构化或教师改写的思维链依据不等。声学注入与注意力约束虽具启发，但原文明确其增益尚未与集成拆分，归因仍待受控消融。

原文未披露采样率、帧长、步长、码率、缓存与实时系数等部署细节，也未给出延迟与显存开销，因此 1 秒样本的张量形状与帧率变化无法逐层追踪。推理侧仅说明多视图数量与投票方式，如十排列视图与五提示词程序投票，只能以类别路由与证据注入的逻辑顺序呈现执行路径，不补充未经证实的维度假设。

### 开发集基线、骨干分组与各队最佳成绩

#### 开源基线在开发集上的起点

为判断参赛系统是否真正进步，需先明确同一开发集上的开源起点与随机水平。开发集含 1,607 道经过滤的题目，选项数不全为 4 个，因此按每题选项数倒数平均的随机期望为 25.46%，而非名义上的 25%。下表列出组织方调优提示词后的 5 个基线，评测口径均为首选准确率。

| Baseline system | Accuracy |
| --- | --- |
| Fun-Audio-Chat-8B [8] | 56.81 % |
| Kimi-Audio-7B [9] | 46.36 % |
| MiMo-Audio-7B [10] | 54.57 % |
| Qwen3-Omni-30B [6] | 62.48 % |
| Step-Audio-2 Mini [11] | 50.53 % |
| Random guess | 25.46 % |

表中 Qwen3-Omni-30B 以 62.48% 居首，其余 4 个基线分布在 46.36% 至 56.81% 区间，均明显高于 25.46% 的随机期望。该成绩仅对应开发集，队伍成绩对应隐藏评测集，两者题目不同，不可直接相减比较。这一口径差异是理解后续开发到评测落差的前提。

#### 骨干分组揭示的规模与选择效应

36 个提交仅使用 6 种公开大音频语言模型，骨干选择高度集中。为避免把单队多提交误读为独立证据，下表按首要骨干分组，报告提交数、队伍数、组内最佳与组内均值。阅读时需注意组内均值受队伍分布影响，不可直接视为骨干能力的无偏估计。

| Base Model | #Sub. | #Teams | Best (%) | Mean (%) |
| --- | --- | --- | --- | --- |
| MOSS-8B-Think | 13 | 5 | 58.33 | 55.49 |
| Qwen3-Omni-30B | 5 | 2 | 57.17 | 56.59 |
| Qwen2.5-Omni-7B | 7 | 3 | 50.60 | 49.16 |
| Fun-Audio-Chat-8B | 3 | 3 | 49.60 | 46.33 |
| MiMo-Audio-7B | 7 | 2 | 49.13 | 45.51 |
| MOSS-4B-Instruct | 1 | 1 | 31.87 | 31.87 |

MOSS-Audio-8B-Thinking 以 13 个提交、5 支队伍拿下组内最佳 58.33%，组内均值 55.49%。Qwen3-Omni-30B 组内均值 56.59% 略高，但其中 5 个提交中有 4 个来自同一队伍的有监督微调变体，跨队均值含义有限。其余骨干组内最佳均未超过 51%，且轻量冠军仅比 96.0B 集成低 1.03 个百分点，说明强 8B 骨干就位后单纯增大参数的边际增益有限。

#### 各队最佳成绩的分布形态

为直观比较 14 支队伍的上限差异，建议沿横轴评测准确率从低到高阅读条形长度，注意颜色代表首要骨干，以及前 4 名突破 56% 的聚集情况。原文图注称有标示 14 队最佳均值的虚线，但本次像素中仅见 0、20、40、60、80 处的浅色点状网格线，未见 49.65% 处的竖线标注，阅读时以横棒长度与末尾百分比为准。阅读时先核对横轴 0 至 80 的刻度与每条末尾标注的队伍名与百分比，再对照底部图例区分 6 种骨干颜色，避免把同一颜色误认为同一队伍。

[![原论文 Figure 2：Best evaluation accuracy per team, colored by primary large audiolanguage model (LALM).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-2.png)

*论文图 2：各队最佳评测准确率条形分布：颜色区分首要骨干，横棒末尾标注队伍与百分比（原论文 Figure 2）。*

图中显示横轴为评测准确率，纵轴自上而下按成绩排列 14 条横棒，顶部 Lim_CAU 为 58.33%，底部 Xu_HUST 为 31.87%。粉色系的 MOSS 骨干占据前三中的两席，紫色系的 Qwen3-Omni 占据第二与第四，蓝色系骨干多在 50% 左右及以下，仅 Tathe_UIUC 以 50.60% 略高于 50%。原文提及的 49.65% 均值虚线在本次像素中未见，仅 4 支队伍达到至少 56% 的结论仍可从横棒末尾百分比直接核对。

### 题目难度为何两极分化与开发到评测落差

3,000 道评测题按 36 个系统答对比例分箱后呈现双峰形态，大量题目极难或极易，中间段人数较少。567 道题目仅被不足 10% 的系统答对，638 道被超过 90% 的系统答对。另有 233 道被所有提交错过，110 道被全部答对，47.6% 的题目被不足半数系统答对，说明共性错误远超全错集合。

为核对双峰是否成立，建议先看横轴每题被答对的系统比例从 0 到 100 的 10 个等宽区间，再看纵轴题数与每根柱顶标注的具体题数，重点比较最左与最右两根柱子的高度与中间八根柱子的低平形态。同时注意颜色由浅黄向深蓝渐变仅表示区间顺序，不代表不同队伍，柱高差异才是难度集中程度的直接证据。

[![原论文 Figure 3：Per-question accuracy across the 36 submissions, grouped into ten 10-percentage-point bins.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f0f83a134102/figure-3.png)

*论文图 3：每题被答对比例的题目数量分布：左右两端高起呈现双峰形态（原论文 Figure 3）。*

图中显示横轴为跨 36 个系统的每题准确率，纵轴为题目数量。最左柱标 567，最右柱标 638，中间依次为 284、176、224、178、235、229、161 与 308，左右两端明显高于中部。原文举例 eval_0002 靠说话人停顿区分找德国人与找德语教师，eval_0120 问冰箱门关闭后出现的电子嗡鸣，分别对应韵律消歧与事件排序，但未报告这两题各自的错误率。

在 30 个有可比开发集分数的提交中，评测成绩全部低于开发成绩，平均低 11.91 个百分点，中位低 10.91 个百分点，标准差为 5.24 个百分点，区间为 6.6 至 25.99 个百分点。按 14 支队伍等权平均则下降 12.62 个百分点，4 个免训练提交仍平均下降 9.75 个百分点，说明落差并非微调独有。按骨干划分，MOSS 组平均下降 11.21 个百分点，Qwen2.5-Omni-7B 组下降 7.89 个百分点，MiMo-Audio-7B 组下降 15.16 个百分点。

推理期附加手段多未带来稳定增益。思维链目标微调在个别骨干上提升开发集分数，但在 MOSS 上也曾出现从 67.70% 跌至 58.99% 的 8.71 个百分点回落，作者归因于灾难性遗忘而非思维链本身。把多数投票换为选最低熵分支下降 8.96 个百分点，Prometheus 思维链裁判与无裁判相比在统计上持平，提示解码选择规则的影响大于裁判形式。

### 在什么前提下结论成立与轻量部署如何选型

音频依赖的定义依赖四重筛除的联合效力，静音探测、困惑度、常识检查与人工核查任一环节的模型池或阈值变化都会改变题库构成。组织方用源数据集训练划分与隐藏答案限制直接标签泄漏，但明确不保证预训练骨干或外部训练数据中不存在评测重叠，开发集复用 MMAU 等题源更让调参与来源复用相互混杂。

性能证据目前仅限多项选择首选准确率，未报告人工听测、置信区间完整估计与失效案例听感。36 个提交共享骨干与训练数据，30 个样本的标准差仅具描述意义，不代表独立重复。233 道全错题在归因于编码器或预训练之前，需先完成标签与推理链核查，开放式生成虽能减少排除法捷径，但仍缺音频盲裁判。

复现需区分三件事：代码是否开源、权重是否提供下载、系统是否可直接运行。原文要求提交开源系统并禁止人工标注评测音频与回灌答案，但本次所给材料未附可验证的代码仓库、权重下载或演示链接，训练硬件、优化器、学习率与批大小等亦未披露。复核时应以开发集 1,607 题调参，另留独立划分做选择，并审计与 MMAU 等来源的重叠。

工程上，8B 轻量冠军以 57.30% 仅落后 96.0B 集成的 1.03 个百分点，说明数据筛选与推理编排可抗衡单纯规模扩张。预算有限时可优先采用提示词设计与选项排列多数投票等低成本手段，微调则建议从 AudioMCQ-StrongAC 难例入手并监控灾难性遗忘。声学标注器与检索增强的增益尚未与集成拆分，上线前应做保留标注器的受控消融再决定是否引入额外延迟。

题目难度呈两端聚集形态，567 道题目仅被不足一成系统答对，638 道则被 90% 以上系统答对，另有 110 道被全部系统答对，36 个系统的并集可解出 2767 道，准确率达 92.2%。其中 47.6% 题目的答对系统不足半数，共享困难超出 233 道全错题的范围。在 30 个可比提交中，评测准确率较开发集平均下降 11.91 个百分点，中位数下降 10.91 个百分点，未经微调的 4 个提交平均仍下降 9.75 个百分点，说明难度落差并非微调独有。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率、通道数、前瞻延迟与 RTF 等信号规格，仅说明每题配一段录音与通常四个选项
- **训练与评测数据**：训练语料为 AudioMCQ-StrongAC-GeminiCoT，源于约 571,000 条的 AudioMCQ，经强音频贡献筛选并加入 Gemini 3.1 Pro 蒸馏的思维链依据，冠军另从 167,541 个候选中抽出 12,800 行。开发集含 1,607 道题目，评测集为隐藏的 3,000 道题目，来源包括 MMAU、MMAR、MMSU 与新增人工撰写题目
- **算力与训练耗时**：原文未披露训练所用 GPU 型号与数量、训练步数与耗时，也未说明推理硬件与显存占用，仅以总参数量划分不超过 100B 与低于 10B 两个赛道
- **核心超参数与配置**：原文未披露优化器、学习率与批大小。已披露的组织细节包括低秩适配及其 4 比特量化变体、群组相对策略优化与分组奖励解耦归一化策略优化、约 0.46 的对数概率融合权重、选项 D 的 1.0 / 1.0 / 1.0 / 1.3 过采样与六档难度分箱
- **推理速度与部署开销**：原文未披露 RTF、延迟与显存开销。已披露的推理组织包括五提示词程序投票、十排列视图集成与六视图加权集成，总参数量按元数据计最高为 96.0B，轻量冠军为 8.0B，两者评测差距为 1.03 个百分点
- **开源产物与协议状态**：原文要求提交开源系统并禁止人工标注评测音频，但本次所给材料未附可验证的代码仓库、权重下载或演示链接，训练硬件与超参亦未完整说明，复现时需以开发集另留划分做选择并审计来源重叠
- **附录与补充材料要点**：附录与讨论给出跨 36 个提交的并集上限为 2,767 道共 92.2%、233 道全错与 110 道全对的分布，以及开发到评测平均下降 11.91 个百分点的落差分析，并列出各队技术报告与所用声学工具的参考文献

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 6.6/10 | 技术严谨 6.5/10 | 实验充分 7.9/10 | 清晰度 6.9/10 | 影响力 7.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 7.2/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-11`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_He_11.pdf)
- Track：P1-2

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：四阶段静音探测、困惑度过滤、常识过滤与两轮人工核验级联，仅保留必须听音条目，协议设计系统完整。

- 核心优势：在3000条隐藏集上比较36个提交并报告平均下降11.91pp与双峰难度分布，规模与诊断均较扎实。

- 核心优势：开发集1607条与评测集3000条已开放，训练语料来源与蒸馏链路交代清晰，形成可复用的基准产物。

- 主要短板：防泄漏规则不能证明预训练主干或外部数据无基准重叠，范式比较仅描述性且与主干混杂。

- 主要短板：声学标注增益未与集成解耦，233个全错题需先做标签与推理核查，归因尚不完整。

- 主要短板：未给出过滤阈值形式化公式与可复现伪代码，阶段间串行无反馈，复现细节缺失较多。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
