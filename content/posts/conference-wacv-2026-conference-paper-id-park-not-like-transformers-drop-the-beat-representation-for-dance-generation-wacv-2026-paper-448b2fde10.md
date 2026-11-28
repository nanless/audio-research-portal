---
title: "Not Like Transformers: Drop the Beat Representation for Dance Generation with Mamba-Based Diffusion Model"
date: 2026-11-28
draft: false
description: "针对长舞蹈自回归连贯不足与节拍条件粗糙的问题，MambaDance 以全状态空间双阶段扩散替代 Transformer 并引入高斯节拍先验，在 AIST++ 与 FineDance 上同时提升保真度与节拍对齐，代价是多样性偏保守且渲染与实时部署未经验证。"
tags: ["扩散模型", "状态空间模型", "音乐", "音乐驱动演奏动作生成"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "全状态空间扩散与高斯节拍先验如何生成长短一致的音乐舞蹈"
paper_digest_original_title: "Not Like Transformers: Drop the Beat Representation for Dance Generation with Mamba-Based Diffusion Model"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper"
paper_digest_workbench_source_sha256: "defb9106ea7038efdfb965fbb0336137295f48a425dc01e4a37e463db03845c9"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音乐驱动演奏动作生成"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对长舞蹈自回归连贯不足与节拍条件粗糙的问题，MambaDance 以全状态空间双阶段扩散替代 Transformer 并引入高斯节拍先验，在 AIST++ 与 FineDance 上同时提升保真度与节拍对齐，代价是多样性偏保守且渲染与实时部署未经验证。"
paper_digest_reader_sections: [{"heading":"长序列自回归与粗糙节拍条件为何共同限制舞蹈质量","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"由关键动作到精细片段的两阶段扩散流水线是怎样组织的","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"单模态与跨模态状态空间模块如何替代注意力并引入节拍调制","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"高斯节拍先验与多项物理损失如何约束训练与引导推理","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"两种数据集上的保真度与节拍对齐是否同时领先","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"状态空间替换与高斯节拍各自贡献了多少","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型意味着什么","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Ulsan National Institute of Science and Technology, South Korea"],"name":"Sangjune Park"},{"affiliations":["Ulsan National Institute of Science and Technology, South Korea"],"name":"Inhyeok Choi"},{"affiliations":["Daegu Gyeongbuk Institute of Science and Technology, South Korea"],"name":"Donghyeon Soon"},{"affiliations":["Ulsan National Institute of Science and Technology, South Korea"],"name":"Youngwoo Jeon"},{"affiliations":["Ulsan National Institute of Science and Technology, South Korea"],"name":"Kyungdon Joo"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"274dadfbf9f170585734a5675169a4b9a527fb4122868a88ac430173723fff75","url":"/audio-research-portal/client/papers/2026-11-28/conference-448b2fde10b7327bdf930f67/citation.bib"},"citation.json":{"sha256":"1dbcd5504b04c23a41de46f1fef52f90caace00f66f0062b7b599c6abf8ebb66","url":"/audio-research-portal/client/papers/2026-11-28/conference-448b2fde10b7327bdf930f67/citation.json"},"citation.ris":{"sha256":"3c60f740aa1b690ab688ed978c023ec281ea5f1c1a31d49da4d5b2b7310ee6a9","url":"/audio-research-portal/client/papers/2026-11-28/conference-448b2fde10b7327bdf930f67/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"abcaa814e0dfa1d2c9695a6c34bea6bc75a7d054f4b45497c18d331cf34db754","url":"/audio-research-portal/client/papers/2026-11-28/conference-448b2fde10b7327bdf930f67/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e84ff152468d749531c90044f626511a6ded7a36841c26638ba090a3ccfb85e6"
paper_digest_api_reader_plan_sha256: "cc163423acdbd3c18a05269e5fd06880cc49db160446ffdff21e8eafb6677bdc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "635779019313931d8e5d155c22ee65d4ca331850fbe674d0b31a34f64e58a3f5"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d10e456c8c3a536c6df03c9186c67bf2848049eca8f52c085dd2f48ec7cb3441"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0cefe0148b6232b5323aa265e2c98a0a71266bd724186bc9561c9215091917b1"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "495e7b0aa570dd7d7b9e2475d292eae360ecf73b5903c8c587c72332d7d61588"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-driven-motion","label":"音乐驱动演奏动作生成"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 全状态空间扩散与高斯节拍先验如何生成长短一致的音乐舞蹈

> 英文题目：*Not Like Transformers: Drop the Beat Representation for Dance Generation with Mamba-Based Diffusion Model*

> 会议身份：`conference:wacv:2026:conference-paper-id:Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐驱动演奏动作生成](/audio-research-portal/papers/?concept=task.music-driven-motion)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)
- **信号**：[音乐](/audio-research-portal/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.2/10 | 技术严谨 6.5/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 4.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sangjune Park：Ulsan National Institute of Science and Technology, South Korea
- Inhyeok Choi：Ulsan National Institute of Science and Technology, South Korea
- Donghyeon Soon：Daegu Gyeongbuk Institute of Science and Technology, South Korea
- Youngwoo Jeon：Ulsan National Institute of Science and Technology, South Korea
- Kyungdon Joo：Ulsan National Institute of Science and Technology, South Korea

## 📌 核心摘要

**问题与瓶颈：** 音乐驱动舞蹈生成以单轨音乐为输入，输出人体关节点序列，要求长时自回归连贯与音乐节拍对齐。主流 Transformer 扩散方法擅长全局依赖，却缺少顺序推进的归纳偏置，在数百至上千帧上出现抖动、脚滑与边界断裂，且随长度增加退化明显。节拍侧多把 Librosa 提取的 1 维二值节拍拼入音乐特征，仅提供粗对齐，距离编码类方法仍把影响隐式藏入网络激活，缺少随时间衰减的可解释先验。序列建模不足削弱节奏对齐，节拍表达不足又限制结构化动作，两者耦合导致长舞既不稳定也不合拍。

**核心思路与方法架构：** 与最接近的 Lodge 两阶段扩散基线相比，实质增量是彻底丢掉注意力，保留粗到细的两阶段流程，解码器全部改用状态空间模块，并加入高斯衰减节拍先验。以 30 FPS 计 1 秒对应 30 帧，AIST++ 单帧为 151 维，FineDance 为 139 维，音乐特征为 35 维，节拍表示为 1 维，送入基于 MLP 的 Music-Beat Mixer 与 Mamba 编码器得到强调节拍的条件。带噪动作经输入 MLP 抬升至隐空间，依次经过 8 个解码器块，每个块含处理动作的 Single-Modal Mamba、融合动作与音乐及扩散步数的 Cross-Modal Mamba、前馈网络与自适应线性调制，最后投影回动作维度。全局扩散在 N 长度上生成关键动作并经镜像增强，局部扩散在 n 窗口内以硬线索锚定边界、以软线索引导早期去噪步，并行解码后拼接成长舞。全局与局部独立训练，局部微调时替换首尾真值帧，全程离线利用完整音乐推理，未做流式与实时约束，直击长序列因果与节拍引导不足的根因。

**关键实验与核心代价：** 在 FineDance 数据集 N 为 1024、n 为 256 的全长序列评测下，MambaDance 的运动保真指标 FIDk 为 51.36±0.67，低于最强可比基线 Lodge 的 84.99±2.07。在同一 FineDance 全长评测下，MambaDance 的物理合理指标 PFC 为 0.0119±0.0008，低于 Lodge 的 0.0585±0.014，而节拍对齐指标 BAS 为 0.2441±0.0044，高于 Lodge 的 0.2410±0.0063。在 AIST++ 数据集 N 为 128、n 为 64 的评测下，MambaDance 的 BAS 为 0.2701±0.0116，高于最强可比基线 EDGE 的 0.2572±0.0112。消融显示 Mamba 替换是保真与物理合理性提升主因，高斯节拍先验在保持低 PFC 的同时提升 BAS。代价是多样性偏保守，FineDance 上 Divg 为 6.44，距离真值 7.74 远于 Lodge 的 7.67，且原文未披露训练与推理成本实测。

**适用边界与深读导览：** 结论在 AIST++ 短片段与 FineDance 长序列、30 FPS 及 Librosa 节拍可检出前提下成立，未覆盖无明显节拍音乐、极端风格迁移与实时交互渲染链路。可在项目演示页对照补充视频观察脚滑减少与节拍跟随现象，勿将其视作定量证据。欲深究状态空间解码细节与高斯节拍公式及消融权衡，可查阅下方方法概述和架构、核心创新点与实验结果章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://vision3d-lab.github.io/mambadance> → <https://vision3d-lab.github.io/mambadance/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长序列自回归与粗糙节拍条件为何共同限制舞蹈质量

音乐驱动舞蹈生成的输入是完整乐曲，输出是按时间排列的三维人体动作序列。原文以 SMPL 关节点参数表示动作，在 30 FPS 下评估短片与长片两种情形。AIST++ 包含 1,408 段高质量短舞蹈，覆盖 10 种风格，动作维度为 151。FineDance 提供来自网络视频的长舞蹈，覆盖 16 种风格，动作维度为 139。两类数据共同考察模型在不同时间尺度与分布下的稳健性，切片长度按全局与局部区分，短片取 128 与 64，长片取 1,024 与 256。早期检索插值、生成对抗网络与自编码器路线难以兼顾多样性与可控性，扩散模型逐渐成为主流。

以 FACT、Bailando、EDGE、Lodge 与 POPDG 为代表的 Transformer 路线善于建模全局依赖，却缺少对时间递进的归纳偏置。舞蹈具有强因果与自回归特性，动作需随节拍向前展开并保持长时连贯，单帧合理不等于整段连贯。注意力机制的二次复杂度使长序列训练与推理代价上升，相邻窗口拼接处容易出现抖动与不连贯。原文指出，这类结构在长舞蹈上效率与一致性不足，难以同时保证节奏对齐与时间连贯。

节拍条件的表示同样薄弱。常见做法经 Librosa 提取 35 维音乐特征，其中最后一维为二值节拍信号，仅提供粗略对齐。Beat-It 以最近节拍距离缓解稀疏性，但信号随远离节拍单调变化，仍把节拍影响隐式藏于网络激活，缺少显式时间先验。编舞实践先按节拍切分乐句，再以高动能动作锚定重拍，要求越靠近节拍信号越强，远离时快速而平滑衰减，并能适应不同曲速下的拍间距变化。若先验过于尖锐会忽略准备与缓冲动作，过于平坦则失去锚定意义，需要带宽可调。

两个困难相互耦合。序列建模不足会削弱节奏对齐，节拍表示不足则使模型难以组织结构化与富有表现力的动作。统一方案需同时替换序列建模器并引入可解释的节奏先验。MambaDance 因此提出完全基于状态空间的双阶段扩散结构，并设计基于高斯衰减的节拍表示，目标是在短舞蹈与长舞蹈上稳定生成物理合理且节拍同步的动作。后续先讲总体流水线，再讲状态空间解码器，最后讲节拍先验与损失如何联合约束。

### 由关键动作到精细片段的两阶段扩散流水线是怎样组织的

整体流水线保留 Lodge 的由粗到精思想，但把注意力全部换成状态空间模块，并新增显式节拍支路。全局扩散先生成稀疏关键动作，经镜像增广后交由多个局部扩散并行补全细节，两者共享同一种解码器结构。全局长度 \(N\) 覆盖 128、256 与 1,024，局部长度 \(n\) 覆盖 64 与 256，以适应短片与长片。下段架构图从左至右展示音乐节拍提取、全局与局部协作以及解码器内部堆叠，建议先把握三栏之间的数据走向，再细看张量形状变化。

[![原论文 Figure 2：The overall architecture of MambaDance.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-2.png)

*论文图 2：两阶段扩散总体结构，左侧提取音乐与高斯节拍条件，中间全局生成关键动作并由局部并行补全，右侧为堆叠 8 层的舞蹈解码器（原论文 Figure 2）。*

画面从左栏开始，顶部波形经 Librosa 得到音乐特征，右侧节拍器图标经高斯变换得到节拍表示，两者经混合器与编码器形成条件。中间绿框上方全局扩散输出硬线索与软线索，经镜像增广后送入下方多个并行局部扩散，虚线表示跨段复制与窗内引导关系。右侧黄绿相间的舞蹈解码器显示底部输入含噪动作与条件，顶部输出干净动作，中间 8 个解码器块重复堆叠，最右灰框展开单个块内由下而上的单模态、跨模态与调制结构。

举例说明 1 秒信号的端到端形状变化，假设为 30 FPS 下的 1 秒片段，共 30 帧。在 AIST++ 设定下，音乐特征为 \(30 \times 35\)，节拍表示为 \(30 \times 1\)，两者融合后得到 \(30 \times E\) 的条件，其中 \(E\) 的具体取值原文未披露。含噪动作为 \(30 \times 151\)，经输入多层感知机升维至 \(30 \times E\)，依次通过 8 个解码器块保持长度不变，最终经输出多层感知机映射回 \(30 \times 151\)。在 FineDance 设定下，动作维度由 151 换为 139，长度按 \(N\) 与 \(n\) 切分，其余走向相同，时间与通道维度在块内交替扫描。

相对最近基线 Lodge，实质改动有两处。第一，保留全局生成关键动作再由局部补全细节的两阶段范式，解码器内自注意力与交叉注意力被单模态与跨模态状态空间模块替代，实现线性时间处理。第二，新增随曲速自适应的高斯节拍先验，替代原来混在音乐特征中的二值通道。推理时将全长特征切为长度为 \(N\) 的段，段间复制末尾帧保证连续，局部窗口边界用硬修复固定，早期去噪步用软线索引导，各窗口可并行解码后拼接，支持多分辨率生成。原文未披露延迟与显存等开销。

### 单模态与跨模态状态空间模块如何替代注意力并引入节拍调制

解码器是替换注意力的核心，每个解码器块包含单模态状态空间、跨模态状态空间、轻量前馈网络与自适应线性调制。单模态分支只处理动作隐状态，负责时间连贯与关节协调，跨模态分支再融入音乐条件与扩散时间步。前馈网络提供逐点非线性，调制则对归一化特征做条件仿射。下图左侧为仅处理动作的单模态分支，右侧为融合 3 类输入的跨模态分支，建议先对照颜色区分 3 类输入，再跟踪拼接与截取位置。

[![原论文 Figure 3：Single-Modal Mamba (left) and Cross-Modal Mamba (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-3.png)

*论文图 3：单模态分支的时间与双向空间扫描结构，以及跨模态分支沿时间轴拼接三类输入后统一扫描再截取的流程（原论文 Figure 3）。*

左侧粉色面板显示单模态分支自上而下先经两次时间状态空间块，每块内为一维卷积、状态空间与线性层的串联，再经一次双向空间状态空间块。该块先重排张量维度，使扫描沿通道轴进行，分左右两路分别前向与后向扫描后相加，兼顾关节间协调。右侧蓝色面板显示跨模态分支将浅蓝动作、深蓝条件与粉红时间步沿时间轴拼接为长序列，经单个时间状态空间块处理后，仅截取动作对应部分向下传递，深色输出表示已融合条件信息，虚线标出拼接与截取边界。

时间扫描沿长度轴递推，天然带有因果与自回归偏置，适合舞蹈随时间展开的特性，复杂度随长度线性增长。空间扫描沿特征通道轴双向传播，促进不同关节通道间协调。以 1 秒 30 帧为例，跨模态拼接长度为动作 30 加条件 30 加时间步 2，状态空间对长序列统一扫描后再截取，避免了二次注意力的显存与不连续问题。原文未披露通道维度 \(E\) 与卷积核等细节，但明确堆叠 8 个解码器块，输入输出各用一个多层感知机衔接。

自适应线性调制替代特征仿射思想，对群归一化后的动作隐状态做逐特征缩放与平移。缩放与偏置由音乐条件与时间步汇聚向量的均值池化经线性投影得到，作用于每个解码器块的不同位置。消融显示，仅用跨模态模块时多样性与节拍对齐上升但物理稳定性下降，叠加该调制后保真度与足部接触显著恢复，节拍对齐保持相近，多样性略有回落，起到轻量稳定器的作用。

### 高斯节拍先验与多项物理损失如何约束训练与引导推理

节拍支路先从二值拍点构造最近节拍距离，再经高斯衰减得到显式时间先验，最后与重建及物理损失联合训练。该先验随曲速自适应带宽，越靠近拍点越强，远离时快速平滑衰减，为解码器提供可解释的乐句提示。下图自上而下对比原始二值序列、三角状距离信号与钟形高斯信号，建议先看红色虚线对齐的拍点位置，再比较中间与下方曲线的峰谷方向与衰减快慢。

[![原论文 Figure 4：Visualizations of raw beat (a), Nearest Beat Distance (NBD) (b), and our Gaussian beat…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-4.png)

*论文图 4：二值拍点、三角状最近节拍距离与钟形高斯表示的对比，拍点对齐下峰谷相反且高斯旁瓣衰减更快（原论文 Figure 4）。*

顶部文字行为二值节拍序列，1 表示拍点，0 表示非拍点，分布稀疏。中间蓝色折线为最近节拍距离，在红色虚线拍点处取零，向两拍中点线性增至峰值，取值范围为 0 至 11。下方红色曲线为所提表示，在拍点处取峰值 1，向两侧呈钟形快速衰减至接近零，取值范围为 0 至 1。两子图横轴均为帧序号，纵轴为信号强度，虚线保证三者拍点对齐，可见距离信号与高斯信号峰谷相反，且高斯旁瓣抑制更彻底，中间平坦区更宽。

对每帧取距前后最近拍点的最小距离得到最近节拍距离，边界以首帧与末帧补齐拍点，拍间距记为相邻拍点差。为满足近强远弱与快速平滑衰减，并归一化不同曲速，节拍表示取指数衰减形式，随距离平方增大而减小，分母由平滑系数与拍间距共同决定带宽，平滑系数取值在 0 至 1 之间。拍点附近强调高动能锚定，远离拍点迅速放宽，使解码器获得可解释的乐句结构提示，带宽随曲速自动伸缩。

训练沿用扩散重建损失，比较预测干净动作与真值的均方误差，另加位置、速度、加速度与足部接触一致性损失。位置经运动学正变换比较关节位置，足部损失惩罚预测接触标签下足部滑动，速度与加速度比较相邻帧差分，微调局部模型时另加根平移项抑制漂移。全局与局部模型独立训练，训练局部时将含噪输入首尾各半数关键帧替换为真值，以缓解窗内不连贯。推理时才用硬线索固定窗口边界、软线索在早期去噪步引导，边界锚定后各窗口并行解码再拼接。原文未披露优化器、学习率与训练步数等超参。

### 两种数据集上的保真度与节拍对齐是否同时领先

评测使用 AIST++ 短舞蹈与 FineDance 长舞蹈，动作均按 30 FPS 表示，全部指标在完整全长序列上计算，而非仅截取长度为 \(N\) 的片段，并报告 10 次独立运行的均值与标准差。保真度用运动学与几何弗雷歇距离 FIDk 与 FIDg 衡量，越低越好，物理合理性用足部接触分数 PFC 衡量，越低越好，节拍对齐用 BAS 衡量，越高越好，多样性用 Divk 与 Divg 衡量，越接近真值越好，人工偏好用胜率 Wins 衡量，越高越好。对比如 EDGE、POPDG 与 Lodge 3 种可运行的 Transformer 扩散基线。下表为原文完整主结果。

| Dataset Model | FIDk (↓) | Fidelity FIDg (↓) | PFC (↓) | Beat BAS (↑) | Diversity Divk (→) | Diversity Divg (→) | Wins (↑) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GT | - | - | 0.1852 | - | 10.9924 | 7.7424 | - |
| EDGE | 179.01 ± 3.10 | 1234.28 ± 236.95 | 0.3994 ± 0.0177 | 0.2261 ± 0.0013 | 10.34 ± 0.36 | 31.74 ± 2.76 | 3.5% |
| FineDance |  |  |  |  |  |  |  |
| POPDG | 190.23 ± 1.18 | 1479.14 ± 6.44 | 0.3765 ± 0.0124 | 0.2361 ± 0.0033 | 7.22 ± 0.14 | 14.53 ± 0.12 | 5.5% |
| Lodge | 84.99 ± 2.07 | 64.57 ± 10.74 | 0.0585 ± 0.014 | 0.2410 ± 0.0063 | 7.98 ± 0.20 | 7.67 ± 0.68 | 35.0% |
| Ours | 51.36 ± 0.67 | 43.11 ± 10.54 | 0.0119 ± 0.0008 | 0.2441 ± 0.0044 | 6.38 ± 0.17 | 6.44 ± 0.88 | 56.0% |
| GT | - | - | 1.2544 | - | 9.61 | 7.78 | - |
| EDGE | 125.99 ± 128.69 | 28.72 ± 4.29 | 3.1883 ± 0.5318 | 0.2572 ± 0.0112 | 11.45 ± 3.25 | 4.91 ± 0.56 | 10.5% |
| AIST++ |  |  |  |  |  |  |  |
| POPDG | 777.32 ± 711.65 | 60.08 ± 5.98 | 4.8615 ± 0.6010 | 0.2318 ± 0.0129 | 24.08 ± 7.40 | 7.87 ± 0.59 | 9.0% |
| Lodge | 67.13 ± 2.79 | 28.93 ± 0.47 | 1.4087 ± 0.1296 | 0.2397 ± 0.0158 | 3.34 ± 0.32 | 3.54 ± 0.14 | 32.0% |
| Ours | 65.86 ± 3.11 | 26.58 ± 1.02 | 1.0622 ± 0.2343 | 0.2701 ± 0.0116 | 3.57 ± 0.37 | 4.98 ± 0.43 | 48.5% |

在 FineDance 上，本方法 FIDk 为 51.36 ± 0.67，FIDg 为 43.11 ± 10.54，PFC 为 0.0119 ± 0.0008，BAS 为 0.2441 ± 0.0044，Wins 为 56.0%，五项均居所展示行中均值最优。在 AIST++ 上，本方法 FIDk 为 65.86 ± 3.11，FIDg 为 26.58 ± 1.02，PFC 为 1.0622 ± 0.2343，BAS 为 0.2701 ± 0.0116，Wins 为 48.5%，同样在所展示行中均值领先。代价是多样性偏保守，FineDance 上几何多样性最接近真值的是 Lodge，AIST++ 上最接近真值的是 POPDG，本方法居其次。EDGE 与 POPDG 虽有时多样性数值更高，但伴随明显更高的 FID 与 PFC，暗示额外变化多源于滑步等伪影。部分基线方差很大，例如 AIST++ 上 POPDG 的 FIDk 为 777.32 ± 711.65，EDGE 的 FIDk 为 125.99 ± 128.69，而本方法标准差较小，运行更稳定。

定量指标之外，定性帧序列可直观比较动作幅度与连贯性。下图上半为 FineDance 长序列，下半为 AIST++ 短序列，每组内由上至下依次为 EDGE、POPDG、Lodge 与本方法，每行按固定间隔从完整序列采样 9 帧。建议先按行观察躯干朝向与四肢展开幅度，再纵向对比同一时间位置不同方法的姿态差异，重点看手臂是否长期贴近躯干以及步态是否重复。

[![原论文 Figure 5：Qualitative comparison on the FineDance (top) and AIST++ (bottom) dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/a0e62229a69b/figure-5.png)

*论文图 5：两种数据集上四种方法的人体动作帧序列对比，每行按固定间隔采样，展示姿态变化幅度与连贯性差异（原论文 Figure 5）。*

画面显示上半长序列中，本方法行内人物交替出现侧身、屈膝、抬臂与转体，姿态跨度大且相邻帧过渡自然。EDGE 行内多为小幅摆动，POPDG 行内虽有大幅动作但部分帧朝向突变，Lodge 行内前后帧重复较多。下半短序列中，本方法同样呈现单脚支撑、双臂展开与弯腰等多类姿态，而基线行内站姿重复或手臂长期贴近躯干。原文提醒部分基线的高多样性伴随滑步与朝向异常，补充视频更能体现连续滑步，单帧图只能部分反映。用户研究胜率与上述观感一致，但原文未披露听众人数与置信区间，协议细节见补充材料。未评测范围包括渲染后视觉质量与实时交互部署。

### 状态空间替换与高斯节拍各自贡献了多少

为分离主干替换与节拍先验的贡献，原文在 FineDance 上对比 Lodge、仅替换主干而无显式节拍的 Mamba-only、以最近节拍距离为先验的 Mamba 与 NBD，以及完整高斯先验的本方法。保真度仍以 FIDk、FIDg 与 PFC 衡量，越低越好，节拍对齐以 BAS 衡量，越高越好，多样性以与真值的接近程度衡量。下表为原文完整消融主表，可先看保真度三列再看对齐列。

| Model | FIDk (↓) | Fidelity FIDg (↓) | PFC (↓) | Beat BAS (↑) | Diversity Divk (→) | Divg (→) |
| --- | --- | --- | --- | --- | --- | --- |
| GT | - | - | 0.1852 | - | 10.9924 | 7.7424 |
| Lodge | 84.99 ± 2.07 | 64.57 ± 10.74 | 0.0585 ± 0.014 | 0.2410 ± 0.0063 | 7.98 ± 0.20 | 7.67 ± 0.68 |
| Mamba-only | 60.94 ± 2.01 | 43.46 ± 7.29 | 0.0180 ± 0.0017 | 0.2402 ± 0.0044 | 6.48 ± 0.40 | 7.21 ± 0.79 |
| Mamba+NBD | 83.55 ± 1.35 | 38.43 ± 0.71 | 0.0687 ± 0.0046 | 0.2478 ± 0.0054 | 5.3958 ± 0.17 | 5.78 ± 0.30 |
| Ours | 51.36 ± 0.67 | 43.11 ± 10.54 | 0.0119 ± 0.0008 | 0.2441 ± 0.0044 | 6.38 ± 0.17 | 6.44 ± 0.88 |

Mamba-only 相对 Lodge 将 FIDk 由 84.99±2.07 变为 60.94 ± 2.01，PFC 由 0.0585±0.014 变为 0.0180 ± 0.0017，BAS 为 0.2402 ± 0.0044，基本持平，说明状态空间主干主要改善保真度与物理稳定性。Mamba 与 NBD 的 FIDg 为 38.43 ± 0.71，BAS 为 0.2478 ± 0.0054，在所展示行中均值最优，但其 FIDk 为 83.55 ± 1.35，PFC 为 0.0687 ± 0.0046，均差于 Mamba-only，多样性也更远离真值。本方法 FIDk 为 51.36 ± 0.67，PFC 为 0.0119 ± 0.0008，均居所展示行最优，BAS 为 0.2441 ± 0.0044，次于 NBD 但高于 Lodge，在对齐与自然度之间取得平衡。

另一组消融固定主干，考察跨模态模块与自适应线性调制的组合。第一行为无两者的基准，第二行为仅加入跨模态模块，第三行为两者皆有即完整方法。指标保留 FIDk、PFC、BAS 与多样性，未列出 FIDg。该对比可判断融合是否带来对齐增益，以及调制是否起到稳定作用。下表为原文完整解码器消融表。

| Ablations AdaLM | Ablations | Ablations CMM | FIDk (↓) | PFC (↓) | Metrics BAS (↑) | Divk (→) | Divg (→) |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | GT |  | - | - | 0.1852 | 10.99 | 7.74 |
| ✗ |  | ✗ | 61.28 ± 1.72 | 0.6316 ± 0.0066 | 0.2465 ± 0.0044 | 8.59 ± 0.16 | 5.77 ± 0.41 |
| ✗ |  | ✓ | 62.93 ± 1.80 | 0.7878 ± 0.0070 | 0.2479 ± 0.0057 | 9.93 ± 0.18 | 6.11 ± 0.60 |
| ✓ |  | ✓ | 51.36 ± 0.67 | 0.0119 ± 0.0008 | 0.2441 ± 0.0044 | 6.38 ± 0.17 | 6.44 ± 0.88 |

仅加入跨模态模块时，BAS 由 0.2465±0.0044 变为 0.2479 ± 0.0057，Divk 由 8.59±0.16 变为 9.93 ± 0.18，更接近真值 10.99，但 FIDk 由 61.28±1.72 变为 62.93 ± 1.80，PFC 由 0.6316±0.0066 变为 0.7878 ± 0.0070，稳定性下降。叠加自适应调制后，FIDk 变为 51.36 ± 0.67，PFC 变为 0.0119 ± 0.0008，均居所展示行最优，BAS 为 0.2441 ± 0.0044，保持相近，多样性略有回落。这表明跨模态扫描提供音乐与动作融合增益，调制则正则化融合状态，起到轻量稳定器作用。缺失的消融包括单独调制而不加跨模态的情形，原文未报告。

### 假设边界、复现前提与工程选型意味着什么

方法假设拍点可由常规工具可靠提取，并以此构造高斯先验。若音乐节拍模糊或拍点检测错误，先验峰位将错位，原文未量化该鲁棒性。模型输出止于 SMPL 关节点序列，不含相机、材质、灯光与渲染，完整跳舞虚拟形象仍需下游管线实现。评估覆盖短片与长片两种长度，但未验证极长连续演出、交互式实时生成与跨风格泛化的部署条件，实际落地仍需补测。

复现前提需区分三件事。数据方面，论文在 AIST++ 与 FineDance 上开展实验，具体划分与预处理细节需以原文及补充材料为准。模型方面，训练超参与硬件配置原文未披露，通道维度、学习率与步数均缺失，难以逐字复刻训练曲线。公开状态方面，论文正文给出演示页面地址，该演示页面当前可以访问，但这只证明链接可达，不能据此认定代码与权重已开源，原文未明确代码、权重与许可。

演示视频是重要对照手段，建议对照基线观察长序列的连贯性、足部滑动与朝向突变。单帧图难以反映滑步，连续视频更能体现时间伪影。阅读时可将视频中高动能时刻与高斯先验峰位对照，检验节拍同步是否落到重拍附近，而不凭印象臆断效果。原文鼓励观看补充视频以获得完整比较，定性帧序列可作为快速预览，但最终判断应以连续动作为准。

工程选型上，若任务要求长时连贯、足部稳定与节拍同步，完全状态空间解码器加高斯先验与自适应调制的组合更合适，代价是多样性相对保守。若追求极致姿态离散度，需接受保真度与物理分数下滑的风险，并辅以人工筛选。短舞蹈与长舞蹈均表现稳定，但方差小的结论建立在 10 次运行与全长评测之上，换用截断评测或单次运行可能得到不同排序，选型时应保持评测口径一致。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音乐特征经 Librosa 提取为 35 维，末维为二值节拍，帧率为 30 FPS，动作维度在 AIST++ 为 151、在 FineDance 为 139，采样率与窗长步长等细节原文未披露
- **训练与评测数据**：训练与评测使用 AIST++ 的 1,408 段短舞蹈与 FineDance 的长舞蹈，分别覆盖 10 种与 16 种风格，均按 30 FPS 切片，全局长度 N 为 128 与 1,024，局部长度 n 为 64 与 256，划分与预处理细节见补充材料
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时，推理由全局与局部两阶段扩散构成，支持多窗口并行解码
- **核心超参数与配置**：解码器含 8 个解码器块，节拍平滑系数在 0 至 1 之间，全局与局部长度组合为 128 与 64、1,024 与 256，优化器、学习率、批大小与通道维度等原文未披露
- **推理速度与部署开销**：推理将全长切段并行解码，边界用硬修复固定、早期步用软引导，各窗口拼接为完整舞蹈，延迟、吞吐、显存与参数量等原文未披露
- **开源产物与协议状态**：论文正文给出演示页面地址，该演示页面当前可以访问，但这只证明链接可达，不能据此认定代码与权重已开源，原文未明确代码、权重与许可
- **附录与补充材料要点**：补充材料含评测指标实现与用户研究协议，附录未披露证明、额外消融的完整超参与失效案例的系统整理

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 7.2/10 | 技术严谨 6.5/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 4.6/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Park_Not_Like_Transformers_Drop_the_Beat_Representation_for_Dance_Generation_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：FineDance全长上FIDk由84.99降至51.36且PFC由0.0585降至0.0119，10次均值标准差可核对。

- 核心优势：含Mamba-only与Mamba+NBD及CMM/AdaLM直接消融，分离保真主因与节拍先验权衡。

- 核心优势：两阶段推理泛化至N为128/1024与n为64/256多档，边界锚定后窗口可并行拼接。

- 主要短板：Wins人评主文未报告评测者规模、评测指令与显著性检验，协议细节仅指称补充材料。

- 主要短板：宣称线性时间效率优势却缺少GPU或CPU延迟与吞吐实测，无法验证部署收益。

- 主要短板：各lambda权重、Lkey帧数、alpha具体值、软引导强度s与优化器硬件等关键配置均未披露。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
