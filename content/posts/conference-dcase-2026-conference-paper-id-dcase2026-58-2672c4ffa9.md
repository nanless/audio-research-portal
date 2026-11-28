---
title: "Temporal-Scale Modeling and Audio-Text Alignment for Audio Moment Retrieval with Zero-Training Saliency Reuse"
date: 2026-11-27
draft: false
description: "针对长录音中自由文本查询的起止定位在严格交并比下对短而多的时刻格外困难的问题，本文以冻结 M2D-CLAP 加 QD-DETR 为底座叠加粗监督含噪恢复双向状态空间有界级联与三级对齐并在推理时把帧显著性复用为并行提案流，在 1,347 个查询开发集上把 R1@0.7 从 25.76 推到 33.70 且盲测单模型达 41.24 并列第 6，代价是双检查点汇合与显著性提案的额外推理开销及开发集优选设置向盲测迁移有限。"
tags: ["多模态学习", "状态空间模型", "音频时间定位"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨时间尺度与多粒度对齐的音频时刻检索及免训练显著性复用"
paper_digest_original_title: "Temporal-Scale Modeling and Audio-Text Alignment for Audio Moment Retrieval with Zero-Training Saliency Reuse"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-58"
paper_digest_workbench_source_sha256: "42c3a331f066ef1f934a819ad5c167ed0448951b8343575f988760bf1491380b"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Choi_58.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频时间定位"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对长录音中自由文本查询的起止定位在严格交并比下对短而多的时刻格外困难的问题，本文以冻结 M2D-CLAP 加 QD-DETR 为底座叠加粗监督含噪恢复双向状态空间有界级联与三级对齐并在推理时把帧显著性复用为并行提案流，在 1,347 个查询开发集上把 R1@0.7 从 25.76 推到 33.70 且盲测单模型达 41.24 并列第 6，代价是双检查点汇合与显著性提案的额外推理开销及开发集优选设置向盲测迁移有限。"
paper_digest_reader_sections: [{"heading":"长录音按句找片段为何在严格重叠下格外困难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结音频文本编码器加查询条件检测器的总体走向","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"粗分支去噪双向状态空间与有界级联如何分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"片段边界帧三级对齐与推理时显著性复用","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"四阶段累积在开发集与盲测集上的收益与统计前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的边界复现核对与工程选型","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["KAIST, Daejeon, Republic of Korea"],"name":"Seungdeok Choi"},{"affiliations":["KAIST, Daejeon, Republic of Korea"],"name":"Yong-Hwa Park"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"ebd7ac1d415d7e88e6af0124dc665a5b3c918a616b7c5f47386055f5d2493754","url":"/audio-research-portal/client/papers/2026-11-27/conference-2672c4ffa9fb6137b75a46ea/citation.bib"},"citation.json":{"sha256":"443d54c9b92efec77de19bcd9ead6771c79de90182a87e808fa82d13fbca086a","url":"/audio-research-portal/client/papers/2026-11-27/conference-2672c4ffa9fb6137b75a46ea/citation.json"},"citation.ris":{"sha256":"6e8ca8aafbe8f029bb70ded0ac07ffadb888309f5c6fd41932bb60906024b44e","url":"/audio-research-portal/client/papers/2026-11-27/conference-2672c4ffa9fb6137b75a46ea/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d05eb84d3e1cf532360a81caa01e2336b56f4bdba66e45e41ae626191218b78d","url":"/audio-research-portal/client/papers/2026-11-27/conference-2672c4ffa9fb6137b75a46ea/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-58"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Choi_58.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "893cb80e8c6ed659e4beb4b91e072aa2529a62750365476fbc32b5b633dd247f"
paper_digest_api_reader_plan_sha256: "3c0a092591b235092cebd7ab84768cd94e79e4382eb2a013962e70530e3d4473"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2dce46d967302c3310abc01de9c8f6152bc3fd17566f4b7570aa8dc7178bee38"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fd375119971890eb377f8ccaa9d22a8338056d5ce532adc5dc2aff6d8f90b24e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c27b5e0e59605a8021c28ddd4738facbdf7f434b6290d183b38e8cbf4a1490e5"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f34de506e836027d8ac85e853ef9e287fabbd65c76a88ad54ec67dd2f2836b24"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 跨时间尺度与多粒度对齐的音频时刻检索及免训练显著性复用

> 英文题目：*Temporal-Scale Modeling and Audio-Text Alignment for Audio Moment Retrieval with Zero-Training Saliency Reuse*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-58`
> Track：P1-9




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Choi_58.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-research-portal/papers/?concept=task.temporal-grounding)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 6.7/10 | 技术严谨 7.6/10 | 实验充分 7.4/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.9/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Seungdeok Choi：KAIST, Daejeon, Republic of Korea
- Yong-Hwa Park：KAIST, Daejeon, Republic of Korea

## 📌 核心摘要

**问题与瓶颈：** 音频时刻检索以长时未修剪录音与自由文本查询为输入，输出与查询匹配的一个或多个时间跨度起止点。目标事件从短瞬态延续到数十秒声场景，跨度差异使严格交并比评价的容差随查询大幅变化。等长预测偏移为 δ 时满足 IoU ≥ 0.7 需要 δ ≤ 0.18ℓ，其中 ℓ 为真值跨度长度。以 1 秒音频特征计，约 5.7 秒以下短跨度连单帧偏移也无法容忍，提案覆盖与边界放置误差被同步放大。基于固定解码器查询的 DETR 类模型以有限槽位生成候选，当同一查询对应多个短时刻时易覆盖不足，而单粒度音频文本对齐难以兼顾事件内部、边界过渡与长场景整体。

**核心思路与方法架构：** 与最接近的 QD-DETR 基线相比，本文保留单路冻结 M2D-CLAP 编码器与条件 DETR 解码器，增量在于多尺度时序建模与帧、边界、跨度三级音频文本对齐，并在推理时复用显著性头生成并行提案。沿单条录音追踪，1 秒滑动窗被编码为 T × 768 维音频词元，文本查询被编码为词元级嵌入，先经文本到音频交叉注意力完成查询条件化，再经单层双向 Mamba 在整段时长上聚合长程上下文并送入 DETR 解码器。解码器以 10 个可学习查询输出归一化中心与宽度及前景概率，训练时叠加二倍平均池化粗分支、5 组高斯扰动去噪查询与界幅 κ = 0.05 的局部级联修正，推理时移除粗分支与去噪分支而保留级联精修。跨度重排与边界对比仅作训练正则，帧级显著性对比在训练对齐之外保留对数几率用于推理成段，显著性提案与双检查点级联提案融合排序取前 10 个输出，全程为离线检索，流式与因果约束未提及。

**关键实验与核心代价：** 在 CASTELLA 的 1347 个查询开发测试划分上，top-10 协议下 R1@0.7 从基础检测器的 25.76 变为完整系统 4 的 33.70，高于同表可比行与官方 MS-CLAP 基线的 13.59。提案源对照显示相同 R1@0.7 下仅解码器提案从 31.03 变为加入显著性提案后的 32.37，含 4 个以上真值时刻的 370 个查询从基础检测器到系统 4 的增益为 +14.87，而长跨度大于等于 10 秒的 448 个查询基本持平。消融与配对检验表明每阶段至少在一个指标上通过错误发现率控制的检验，但单阶段 R1@0.7 差异仍处种子波动内，如去除双向 Mamba 在三种子中均下降而去除边界对齐均值效应接近零。代价方面单模型可训练参数为 8.0 M，在单张 NVIDIA RTX 3090 GPU 上完成两阶段各 200 轮训练，论文未提供人工主观听测与 RTF 或时延实测，仅以 R1 与 mAP 及显著性提案对照验证排序价值。

**适用边界与深读导览：** 结论成立前提是 1 秒特征分辨率、离线全录音可访问与 CASTELLA 及 Clotho-Moment 的长音频分布，未覆盖开放域查询、强重叠与实时流式部署下的失效模式，盲测中系统 4 略低于系统 3 也提示开发集选择的推理设置迁移有限。论文未提供可试听演示页，深究双向 Mamba 与级联残差公式、边界对比损失构造及种子与显著性检验细节可查阅下方方法与实验章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长录音按句找片段为何在严格重叠下格外困难

音频时刻检索要解决的是在未经剪辑的长录音中定位自由文本查询所描述声音的起止时间，输入是完整录音波形与一句查询文本，输出是时间轴上的一个或多个片段。与 AudioSet 与 AudioCaps 推动的短片段理解不同，声音事件检测、声音事件定位、音频标注与片段级音频文本检索只判断孤立片段内含有什么，并不回答描述出现在原始录音的何处。长录音可能是广播、监控存档或声音档案，用户无法逐段试听，检索必须直接给出可跳转的时间区间，CASTELLA 这类人工标注长录音与 Clotho-Moment 这类合成数据正是对这种需求的回应。

定位的难点不仅在于判断声音是否存在，更在于精确划定边界。短暂瞬态依赖细粒度边界线索，而持续数十秒的声景需要更宽上下文才能与周围内容区分。在严格重叠评价下这种差异被放大，对于等长预测平移 \( \delta \) 的情形，满足 \( IoU \ge 0.7 \) 需要 \( \delta \le 0.18 \ell \)，其中 \( \ell \) 为真值跨度长度。在 1 秒音频特征下，短于约 5.7 秒的片段连一帧平移都无法容忍，提案覆盖是否命中与边界放置是否准确直接决定成败，保留局部时间精度与长程上下文必须兼顾。

对齐粒度同样关键，查询可能指向短促事件、时刻边界附近的过渡，也可能描述长场景的整体内容，单一时间粒度的对齐难以覆盖。基于解码查询的集合预测模型用固定数量的解码查询生成候选，当同一查询对应多个短相关时刻时容易覆盖不足。本文思路因此分为两路，一路做跨时间尺度与上下文感知定位，另一路在帧、边界与片段 3 级上绑定音频与文本，并把训练得到的帧级显著性信号在推理时转成一路并行提案流，以补足固定槽位的覆盖缺口。

### 冻结音频文本编码器加查询条件检测器的总体走向

与最近的查询条件检测器相比，本文保留 QD-DETR 的整体集合预测框架与匈牙利匹配训练范式，替换与新增集中在编码与监督两侧。音频与文本统一换成单个冻结的 M2D-CLAP 编码器，原始音频自注意力编码器被单层双向 Mamba 编码器取代，文本到音频交叉注意力编码器仍负责查询条件化。训练侧新增粗分辨率辅助分支、含噪跨度恢复训练与有界级联精炼，并在片段、边界与帧 3 级上加入对齐目标，推理侧新增免训练显著性复用与双检查点分数汇合。信号规格上原文只明确 1 秒滑动窗口与 768 维音频词元，未披露采样率、窗叠加与通道细节。

#### 具体样本的张量走向

以 60 秒长录音与一句查询为例，输入音频先切为 60 个 1 秒窗口，经冻结音频编码器得到 \( A \in R^{T \times d_f} \)，此处 \( T = 60 \)，\( d_f = 768 \)，查询文本经冻结文本编码器得到 \( Q \in R^{L \times d_f} \)，\( L \) 为词元数。文本到音频交叉注意力先让音频词元以查询为条件，再经双向 Mamba 前向与反向扫描求和归一得到音频记忆，条件 DETR 解码器把 10 个学习查询映射为归一化中心与宽度及前景概率。粗分支把音频序列做 2 倍平均池化并重算时间端点特征后走共享变换器与预测头，去噪分支为每个真值生成 5 个高斯扰动副本作注意力隔离查询，级联分支在首阶段预测两侧各扩 10 帧重注意力并预测残差修正。

#### 总览图导读与推理保留路径

在阅读总览图之前可以先明确颜色与线型的分工，浅蓝框为训练与推理共用的冻结编码器，灰色虚线框为仅训练使用的辅助监督，绿色框为推理时复用的显著性路径，红色框为推理精炼与解码路径，紫色框为提案汇合与输出。沿从左到右的箭头追踪，可以看清音频记忆如何同时送入帧显著性打分、解码器与级联精炼，再汇入右上角的公共提案池。

[![原论文 Figure 1：Overview of the proposed AMR system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/94ad776f360f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/94ad776f360f/figure-1.png)

*论文图 1：总览图右下部分：帧显著性打分经归一阈值合并为区间提案并与解码器提案汇合输出（原论文 Figure 1）。*

图中右下裁切部分实际显示了绿色显著性复用链与紫色汇合输出，左侧绿色柱状条为全局条件下的帧相关性打分，中间经过 S 形曲线归一、阈值筛选与连续显著区间合并，右侧紫色框把种子、精炼解码器提案与显著性提案合并排序，底部紫色条带在 0 到 T 时间轴上标出最终取回的多个时刻。图例同时给出 5 类颜色含义，虚线训练模块在推理时移除的标注与正文描述一致，箭头方向表明显著性提案与解码器提案是并行汇入而非串行精炼。

参数冻结边界清晰，M2D-CLAP 音频与文本编码器全程冻结，只有查询条件编码器、双向 Mamba、解码器与各预测头参与更新，粗分支、含噪恢复分支与片段边界对齐分支只在训练时提供梯度。推理时保留级联精炼后的解码器跨度与帧显著性提案流，两个独立训练的检查点在开发集上优选后把各自跨度与前景分数直接放入公共池，不跨检查点平均坐标，所有候选按各自分数排序取前 10 个作为最终时刻。

### 粗分支去噪双向状态空间与有界级联如何分工

粗分辨率辅助分支把音频序列做 2 倍平均池化，池化后重算时间端点特征再送入共享检测器，用与主分支相同的匈牙利匹配检测损失监督但权重降为 0.25，推理时整支移除。该设计的直觉是让共享编码器同时看到正常与减半分辨率的时间结构，粗尺度监督迫使模型在更宽覆盖下保持跨度一致，对长场景的上下文判别有帮助，也能在一定程度上平滑细粒度抖动，权重过大反而会拖累主分支精度。

含噪查询训练借鉴 DN-DETR，每条真值跨度的中心与宽度都加入高斯扰动生成 5 个扰动副本，作为注意力隔离的解码查询追加到解码器，训练目标是恢复对应的干净跨度，推理时全部移除。据作者说明这是该机制在音频时刻检索中的首次应用，其直觉是用已知真值附近的扰动样本稳定二部匹配，避免早期训练因匹配震荡导致梯度起伏，扰动过小起不到稳定作用，扰动过大则偏离真值过远。

双向 Mamba 编码取代原 QD-DETR 中的音频自注意力编码器，前向与反向两次扫描结果相加归一后作为解码器使用的音频记忆。该结构用选择性状态空间实现长序列建模，能够携带分钟级上下文而避免自注意力随长度平方增长的开销，对区分长场景与周围内容尤为重要。匹配种子上的留一分析显示移除该模块后效果下降最为稳定，但作者也强调不能据此把累积增益单独归因于它。

有界局域级联对每个首阶段预测向两侧各扩展 10 帧音频记忆并重注意力，只预测中心与宽度的残差修正，精炼结果为归一化区间投影下的截断梯度首阶段预测加 \( \kappa \tanh \) 约束项，其中 \( \kappa = 0.05 \) 约束单步修正幅度，残差头零初始化且首阶段预测在级联训练时分离。精炼跨度沿用首阶段匈牙利分配并以相同的一范数与广义交并比损失监督，约束过大容易漂移，过小则精炼不足，首阶段分离保证了精炼只学局部修正而不回传干扰。

### 片段边界帧三级对齐与推理时显著性复用

片段级对齐在每个解码查询的预测跨度内对音频记忆做平均池化，把池化音频与均值池化文本投影到共享嵌入空间，余弦相似度以匈牙利匹配的前景分配为标签做二元交叉熵监督。该分支仅作训练时对齐正则，推理时移除，其作用是让跨度级音频表征与整句查询语义直接可比，避免解码器只学边界回归而忽视语义一致性，它与粗辅助监督共同构成第一个累积阶段。

边界级对齐针对每条真值的起始与结束边界，取边界内外紧邻的各 \( K = 3 \) 帧，内侧帧均值池化构成边界正表示，外侧帧保留为单个负样本，以投影文本特征为锚做边界对比损失，温度系数为 \( \tau \)，仅训练时使用。其直觉是边界附近的过渡帧最易混淆，把紧贴内侧的正确内容拉近查询、把紧贴外侧的背景推远，能够提高边界判别，内外各取 3 帧是在保留局部过渡与引入过多背景之间的折中。

帧级对齐沿用 QD-DETR 的显著性对比目标，把标注时刻内的帧视为相关帧，时刻外的帧作为负样本，逐帧音频特征与文本查询对齐，得到每帧的显著性对数几率。训练时它提供最稠密的音频文本对齐信号，推理时其打分头被完整保留并转成提案源，这正是免训练复用的基础。显著性权重固定为 1，梯度裁剪设为 0.10，与检测损失共同优化，跨度重排权重为 0.50，边界对比权重为 0.20。

免训练显著性复用不引入新参数、新目标与新优化，把已训练显著性头的每帧对数几率经 S 形函数归一，再以阈值取连续高于阈值的区间为候选，其得分为区间内平均，保留得分最高的 10 个显著性提案。分数汇合把两个独立训练的检查点在开发集上优选后各自的级联精炼跨度与前景分数直接入池，不跨检查点平均坐标，再加入显著性提案统一按分排序取前 10 个，阈值取 0.50 是在召回与误检之间的选择。

### 四阶段累积在开发集与盲测集上的收益与统计前提

评测沿用 DCASE 2026 个任务 6 的数据划分与评价规程，每模型先在 Clotho-Moment 上预训练 200 个周期，再在 CASTELLA 上微调 200 个周期，优化器为 AdamW，两阶段学习率分别为 0.0001 与 0.00008，批大小为 32，硬件为单块 NVIDIA RTX 3090。冻结 M2D-CLAP 从 1 秒音频窗口提取 768 维特征，检测权重分别取 10、1 与 4，背景权重为 0.10。在 1,347 个查询的 CASTELLA 开发测试划分上按前 10 个预测评价 R1@0.5、R1@0.7 与平均精度，以 R1@0.7 为主要指标，另在官方盲测集上评价 4 个累积系统，相邻阶段用 McNemar 精确检验与 10,000 次配对自助检验并以 Benjamini-Hochberg 在 q = 0.05 下控制错误发现率。

#### 累积主结果与盲测表现

开发集上从基线检测器经 System 1 到 System 4 呈单调上升，R1@0.5 依次为 42.98、43.06、47.07、48.40 与 50.41，R1@0.7 依次为 25.76、28.36、29.55、31.03 与 33.70，平均精度依次为 21.69、23.36、24.30、25.82 与 29.16。盲测集上官方基线 R1@0.7 为 13.56，4 个系统 R1@0.7 依次为 33.90、37.85、41.24 与 40.68，其中单模型 System 3 为团队最优并列第 6，共 21 支队伍，System 4 在开发集最优但在盲测略低于 System 3，表明开发集优选的推理设置迁移有限。多种子下后 3 个阶段的 R1@0.7 均值加标准差分别为 26.13 ± 1.74、28.47±0.80 与 28.83 ± 2.16，每阶段至少在一个评价维度上显著，多个单阶段差异仍在种子波动范围内。

|  y Configuration |  R1@0.7 ∆vs. S2 S2 wins |
| --- | --- |
| System 1 | 26.75±1.50 −1.78±0.54 3/3 |
| −Bi-Mamba | 26.51±1.09 −2.03±1.63 3/3 |
| −boundary alignment | 28.63±2.49 +0.10±2.87 2/3 |
| System 2 | 28.53 ± 0.97 – – |
| (e) Zero-training saliency-reuse analysis |  |
| Setting | Result / test |

该表为原文 Table 1 的完整呈现，覆盖累积系统、超参扫视、留一分解与显著性复用控制等子表，开发集数字取默认种子 2023，多种子统计来自独立训练种子。阅读时需注意方向均为越高越好，显著性符号中特殊标记表示多重校正下均显著、错误发现率显著与仅未校正显著三档。开发集 3 个指标最优均为 System 4，盲测 R1@0.7 最优为 System 3，两者在不同划分上各有取舍，不能把开发集单调上升直接外推为盲测单调上升。

#### 超参取舍显著性与复用控制

超参扫视均为单种子结果，粗损失权重取 0.25 时为 27.10，优于关闭时的 25.76 与取 0.50 时的 23.61，去噪强度取 0.05 时为 29.55，优于取 0.03 时的 26.50 与取 0.10 时的 27.62。边界损失权重取 0.20 时为 28.36，优于取 0.10 时的 26.06 与取 0.30 时的 27.91，级联约束取 0.05 时为 31.03，优于取 0.03 时的 29.40 与取 0.10 时的 28.73，显著性阈值取 0.50 时为 32.74，优于取 0.30 时的 32.07 与取 0.70 时的 29.40。

3 种子留一分解中 System 1 为 26.75 ± 1.50，移除双向 Mamba 为 26.51 ± 1.09，移除边界对齐为 28.63 ± 2.49，完整 System 2 为 28.53 ± 0.97，完整版在全部 3 个匹配种子上都优于 System 1，但移除单部件的效应并不稳定。其中移除双向 Mamba 在 3 个种子上都下降，移除边界对齐仅在 2 个种子上有益且有一次大幅反转，均值效应接近于零，因此无法把累积增益归因于单一部件。

在固定推理设置下显著性复用在多个架构种子组合上都提升 R1@0.7，解码器提案仅用时为 31.03，加入显著性提案后为 32.37，而加入中间解码器提案仅为 22.42，加入粗分支提案为 30.81，表明稠密显著性提供的是互补候选而非单纯增加数量。仅显著性复用的提升经 McNemar 检验显著，平均精度提升经自助检验显著，逐流等渗校准可再提升，而按秩交错反而下降，高分区间的显著性提案在相同分数段更可能满足交并比要求，尽管解码器分数更集中于 1 附近，说明显著性分数含有可用的排序信息。

#### 时长与数量分层及覆盖诊断

按真值时长分层后检索仍高度依赖时长，短于 3 秒的 365 个查询从基线到 System 4 依次为 6.03、9.86、11.78、12.88 与 21.92，3 秒到 10 秒的 534 个查询依次为 23.97、24.53、29.03、32.58 与 32.40，长于或等于 10 秒的 448 个查询依次为 43.97、47.99、44.64、43.97 与 44.87，全部 1,347 个查询依次为 25.76、28.36、29.55、31.03 与 33.70。训练定位阶段主要改善中等长度时刻，推理阶段在短时刻上增益最大，按真值数量分层后增益随数量增长，1 个的 573 个查询增益为 4.19，2 个到 3 个的 404 个查询增益为 6.93，4 个及以上的 370 个查询增益为 14.87，与固定解码查询在多时刻下覆盖受限的解释一致。

为区分提案覆盖与边界精炼，原文分析 System 3 到 System 4 之间首位正确性变化的查询，短时刻由错变对为 49 个，由对变错为 16 个，其中 38 个新正确来自显著性提案占 78%，中等时刻由错变对为 39 个，由对变错为 40 个，其中仅 5 个新正确来自显著性提案占 13%，长时刻对应为 24 个、20 个与 0 个占 0%。由于短跨度的交并比容差低于一帧特征，在 1 秒分辨率下覆盖与边界精度紧密耦合，偏一帧即可能跌破目标阈值，中等时刻推理阶段主要重排已有候选。本文为定位检索未使用人工听测与神经代理听感指标，方差证据来自多种子标准差与配对检验。

### 结论成立的边界复现核对与工程选型

结论依赖若干前提，特征分辨率为 1 秒，短跨度在交并比不低于 0.70 下容差不足一帧，固定 10 个解码查询决定了多时刻下的覆盖上限，单层双向状态空间承担分钟级上下文，冻结编码器假设音频文本表征已足够通用。这些前提在 CASTELLA 开发测试划分与 DCASE 2026 盲测集上得到验证，未验证在更长录音、更高采样密度或开放词汇查询下的表现，也未验证流式低延迟部署时的缓存与前瞻开销，原文未披露采样率与实时系数，无法直接推断端侧代价。

负结果同样重要，最后一个推理阶段在盲测略低于前一个单模型阶段，长时刻未见增益，边界对齐在 3 种子留一中均值效应接近于零且有一次大幅反转，粗权重与去噪强度等扫视均为单种子结论。多种子标准差显示最后一个训练阶段波动较大，多个单阶段差异仍在种子波动范围内，每阶段至少一指标显著不等于每指标每阶段都显著，引用时应同时给出均值、标准差与校正符号，避免把单种子峰值当作稳定增益。

复现核对上，训练需 Clotho-Moment 预训练与 CASTELLA 微调各 200 个周期，单块 RTX 3090，批大小为 32，每模型约 8,000,000 个可训练参数。本次未发现经可用性验证的作者代码、权重或数据链接，不应写作已公开，技术报告另见原文引用，无试听页可对照现象。工程选型上，若查询多为短而多的时刻，显著性复用与双检查点汇合的收益最大，若以中等长度为主，级联精炼与多粒度对齐训练更为关键，长场景已较高时可优先保证覆盖而非追加推理复杂度，逐流校准可作为低成本补充但需在开发集上单独验证阈值。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：1 秒滑动窗口，768 维音频词元，2 倍平均池化粗分支，级联两侧各扩 10 帧，显著性阈值为 0.50，采样率与窗叠加原文未披露
- **训练与评测数据**：Clotho-Moment 预训练，CASTELLA 微调与 1,347 个查询开发测试划分，另有官方盲测集，语种与总时长原文未披露
- **算力与训练耗时**：单块 NVIDIA RTX 3090，Clotho-Moment 预训练 200 个周期，CASTELLA 微调 200 个周期
- **核心超参数与配置**：AdamW，两阶段学习率分别为 0.0001 与 0.00008，批大小为 32，检测权重为 10、1 与 4，背景权重为 0.10，显著性权重为 1，粗分支权重为 0.25，跨度重排权重为 0.50，边界对比权重为 0.20，梯度裁剪为 0.10，去噪强度为 0.05，级联约束为 0.05，解码查询数为 10，边界内外各取 3 帧
- **推理速度与部署开销**：每模型约 8,000,000 个可训练参数，双检查点分数汇合取前 10 个，显著性提案保留 10 个，延迟与实时系数原文未披露
- **开源产物与协议状态**：本次未发现经可用性验证的作者代码权重数据链接，不应视为已公开，技术报告见原文引用
- **附录与补充材料要点**：原文未设独立附录，补充分析含时长与数量分层、提案来源控制与逐流校准，失效案例为盲测后段略低与长时刻无增益

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 6.7/10 | 技术严谨 7.6/10 | 实验充分 7.4/10 | 清晰度 6.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.9/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-58`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Choi_58.pdf)
- Track：P1-9

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在1347查询CASTELLA开发测试集上R1@0.7从25.76提升至33.70并经FDR控制的配对检验，分层显示短时刻与多时刻增益集中。

- 核心优势：零训练显著性复用将已训练帧级显著性头阈值化为并行提案流，不增加参数与优化且提案源对照验证其互补性。

- 核心优势：单冻结M2D-CLAP编码器下以8.0M可训练参数实现紧凑系统，盲测单模型并列第6并给出完整级联残差公式。

- 主要短板：去除边界对齐均值差仅0.10±2.87且两胜一负，完整系统2增益无法归因单组件，单阶段R1差异处种子波动内。

- 主要短板：盲测中系统4略低于系统3且长跨度在系统1后未持续改善，开发集选择的双检查点融合设置迁移有限。

- 主要短板：边界对比温度τ与推理设置α=1.0含义均未说明，调度策略与训练时长等关键配置披露缺失影响精确复现。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
