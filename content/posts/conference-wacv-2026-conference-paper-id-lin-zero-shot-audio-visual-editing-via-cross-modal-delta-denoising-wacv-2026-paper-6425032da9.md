---
title: "Zero-Shot Audio-Visual Editing via Cross-Modal Delta Denoising"
date: 2026-11-28
draft: false
description: "针对单侧编辑导致的声画错位，AVED 以冻结扩散模型的增量去噪加跨模态对比约束实现零样本联合编辑，在 AVED-Bench 上 DINO 达 0.956 且 AV-Align 达 0.42 优于单模态拼接，代价是依赖交叉注意力质量与阈值选择且未报告延迟与显存开销。"
tags: ["基准测试", "对比学习", "扩散模型", "音频编辑", "音视频生成"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "零样本声画联合编辑：跨模态增量去噪如何实现同步"
paper_digest_original_title: "Zero-Shot Audio-Visual Editing via Cross-Modal Delta Denoising"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper"
paper_digest_workbench_source_sha256: "fb2b6ec03bf08bf7b4fa28e5cc43577972b00ceaa3199619a383e3ab6f0d3866"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音视频生成"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单侧编辑导致的声画错位，AVED 以冻结扩散模型的增量去噪加跨模态对比约束实现零样本联合编辑，在 AVED-Bench 上 DINO 达 0.956 且 AV-Align 达 0.42 优于单模态拼接，代价是依赖交叉注意力质量与阈值选择且未报告延迟与显存开销。"
paper_digest_reader_sections: [{"heading":"只改画面或只改声音为何会出现声画错位","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"AVED 用冻结扩散模型加增量去噪实现免训练联合编辑","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"提示相关块如何被挑出并组成跨模态正负对","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"联合编辑在保真与声画对齐上同时优于单模态组合","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"正负对选择方式决定跨模态约束是否生效","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、未验证条件与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["UNC Chapel Hill"],"name":"Yan-Bo Lin"},{"affiliations":["Microsoft"],"name":"Kevin Lin"},{"affiliations":["Microsoft"],"name":"Zhengyuan Yang"},{"affiliations":["Microsoft"],"name":"Linjie Li"},{"affiliations":["Microsoft"],"name":"Jianfeng Wang"},{"affiliations":["Microsoft"],"name":"Chung-Ching Lin"},{"affiliations":["Microsoft"],"name":"Xiaofei Wang"},{"affiliations":["UNC Chapel Hill"],"name":"Gedas Bertasius"},{"affiliations":["Microsoft"],"name":"Lijuan Wang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"97863225a8b19038ba2f1ff1f68493db0015a215de3481ad5808fa5ca9b9610e","url":"/audio-research-portal/client/papers/2026-11-28/conference-6425032da9c241de5035d49f/citation.bib"},"citation.json":{"sha256":"1b65387f6c11e624c20e83fdf52929fc0a798d3cd4a0f4a0cae74b8c12bcae1b","url":"/audio-research-portal/client/papers/2026-11-28/conference-6425032da9c241de5035d49f/citation.json"},"citation.ris":{"sha256":"05a054c64b64828483c77635d935acd1233322124998a0416ac663dc7998b5e5","url":"/audio-research-portal/client/papers/2026-11-28/conference-6425032da9c241de5035d49f/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ed97e0064a52460f198e3e64e82fecb4e7eb491e403ecba5a8ba310358519112","url":"/audio-research-portal/client/papers/2026-11-28/conference-6425032da9c241de5035d49f/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d0ff9a2362bc21b1716e642ed0e9b2a45d03fd0dc1ba87332045523e55d7d561"
paper_digest_api_reader_plan_sha256: "6fef09a7a82f66a2ff3b379b60d6e7d33c9bec3b62069d5c0b972a774dc35315"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "96efec8bd3d67b0c27b7a0e2bb60339e7f3e8aaffe4cd0907f68cb05e8d270c0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3cde25390a471bca417d4c7bec3f5885b7882f85bb8b6c2513271d8d7f6a882e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "91c2ba15b37f5511366189e961ddbe29cde3b55826708c9905d61942e22b2053"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2b92f75b917d4bcc762cd4eecaaa9bec4a7f5f5168df8b28939e69b8d45839cc"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"task","id":"task.audio-editing","label":"音频编辑"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_method: "扩散模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 零样本声画联合编辑：跨模态增量去噪如何实现同步

> 英文题目：*Zero-Shot Audio-Visual Editing via Cross-Modal Delta Denoising*

> 会议身份：`conference:wacv:2026:conference-paper-id:Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编辑](/audio-research-portal/papers/?concept=task.audio-editing)；[音视频生成](/audio-research-portal/papers/?concept=task.av-generation)
- **研究方法**：[对比学习](/audio-research-portal/papers/?concept=method.contrastive)；[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.6/10 | 技术严谨 6.4/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yan-Bo Lin：UNC Chapel Hill
- Kevin Lin：Microsoft
- Zhengyuan Yang：Microsoft
- Linjie Li：Microsoft
- Jianfeng Wang：Microsoft
- Chung-Ching Lin：Microsoft
- Xiaofei Wang：Microsoft
- Gedas Bertasius：UNC Chapel Hill
- Lijuan Wang：Microsoft

## 📌 核心摘要

**问题与瓶颈：** 本文处理零样本音视频编辑，输入为原始音视频与源提示 ysrc 和目标提示 ytrg，输出为与目标文本对齐的新音视频。现有零样本路线分别编辑视频或音频，视频侧依赖文本到图像扩散模型的帧间对应或深度控制，音频侧依赖 DDIM 或 DDPM 反演，缺乏统一的跨模态对齐约束。由此导致发声体运动与声音不匹配，时间轴出现音频伪影，编辑结果不自然且不同步。AVED-Bench 中的犬吠、枪声与环境声等自然事件要求同时改变外观与声音并保持同步，单模态方法难以满足。

**核心思路与方法架构：** 与分别对音频和视频应用增量去噪分数的 DDS 基线相比，AVED 保留源分支与目标分支的分数蒸馏结构，增量为基于跨注意力相似度的块级跨模态对比监督。单条 10 秒样本经预训练 VAE 编码为视频潜变量与音频谱图潜变量，视频帧按 RAVE 方式打乱并拼成网格以复用文本到图像扩散模型，文本提示与音视频特征在交叉注意力层计算相似度并经阈值划分为相关与无关块，采样跨模态正负对并以对比损失约束同步，再与 DDS 损失联合优化目标潜变量并解码为音视频。预训练 VAE 与扩散噪声预测网络保持冻结，仅迭代更新目标潜变量参数，全片段离线编辑，直接约束发声相关区域的一致性以缓解不同步。帧数 F、通道维 dv 与 da、网格数 ng、阈值 tau_a 与 tau_v、温度 alpha 与引导系数 omega 等具体取值与骨干规模在正文未说明，实现细节称在补充材料中。

**关键实验与核心代价：** 在 AVED-Bench 上，AVED 的 DINO 为 0.956，高于最强单体基线 DDS 的 0.921；LPAPS 为 5.55，低于 DDS 的 5.93；AV-Align 为 0.42，高于串行基线 RAVE 到 Diff-Foley 的 0.35 与 DDS 的 0.33；IB 为 0.23，高于 DDS 的 0.20；CLIP-T 为 0.260，高于 DDS 的 0.250；CLAP 为 0.226，高于 DDS 的 0.210。在 OAVE 上，AVED 的 DINO 为 0.959，高于 DDS 的 0.930，LPAPS 为 5.15，低于 DDS 的 5.58，IB 为 0.32，高于 RAVE 的 0.29，CLAP 为 0.250，高于基线的 0.240 到 0.245，但 CLIP-T 为 0.265，低于 RAVE 的 0.268。300 名受试者在 Amazon Mechanical Turk 上的人工总体偏好显示约 75% 偏好 AVED 而非 ControlVideo，超 60% 偏好 AVED 而非 TokenFlow 与 RAVE，未采用 MOS 与 UTMOS 等细粒度量表。消融显示跨模态联合优于单模态，随机跨模态配对导致退化，主要代价为迭代优化的计算开销，但原文未披露延迟与吞吐实测。

**适用边界与深读导览：** 结论适用于 10 秒短片段中具有明确发声体与自然音视事件的编辑，未覆盖长视频、多声源重叠、强噪声或实时交互场景，阈值敏感性与失败模式未系统讨论。项目页提供代码、数据与结果，可对照猫转犬等案例的动作对齐与音频伪影现象。深究可查下方方法概述的公式含义与实验结果的基准对比及消融表，原文本身指出 OAVE 侧 CLIP-F 与 AV-Align 适用性较低。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只改画面或只改声音为何会出现声画错位

#### 任务输入输出与单模态瓶颈

零样本声画编辑要求模型在不做额外训练的前提下，把一段原始声画内容同时改写为符合目标文本提示的新内容。输入包含原始视频帧序列与原始音频，以及分别描述改前与改后事件的源提示与目标提示，输出是改写后的视频与音频。论文为此新建 AVED-Bench 数据集，从 VGGSound 中人工挑选 110 个视频，每个时长 10 秒，分属 11 个类别，覆盖动物、人类动作与环境声等自然事件，每个视频配有人类标注的源提示与目标提示，例如狗吠变为狮吼。同期评测还引入 OAVE 集合，该集合包含 44 个类别，每个类别取 10 张来自片段的图像并配有音频与视觉标注，提供 25 种改写发声对象或环境语境的提示模板。

已有零样本路线分属两个单模态分支。视频分支沿用冻结文本到图像扩散模型，通过打乱噪声、帧间对应或深度图等结构线索维持时间一致，代表方法包括 RAVE、TokenFlow 与 ControlVideo。音频分支沿用冻结文本到音频扩散模型，通过反演与重噪实现改写，代表方法包括 ZEUS 与 SDEdit。直接把两类方法拼接使用，或先改视频再用视频到音频模型补声音，例如 RAVE 后接 Diff-Foley 的顺序方案，仍缺少统一的声画对齐目标。物理层面的困难在于发声体的运动与出现时刻必须与声音包络同步，统计层面的困难在于两套扩散先验各自独立，单侧改写容易在另一侧留下背景错位与时间伪影。

#### 规模对比与声画错位实例

已有评测多为纯视频集合，难以检验声音是否同步改写，这正是新基准需要补足的空白。下表汇总 3 套已有视频编辑评测集与 AVED-Bench 在发表场所、视频数量与覆盖模态上的公开信息，表中场所一列标示方法最初发表的会议或未指定，数量一列直接给出视频个数，模态一列区分纯视频与视频加音频。通过对照规模与模态，读者可以判断此前评测的覆盖范围，以及联合编辑为何需要更大且包含声音的基准来支撑公平比较。

| Method | Venue | # Videos | Modality |
| --- | --- | --- | --- |
| DreamMotion [28] | ECCV’24 | 26 | Video |
| RAVE [32] | CVPR’24 | 31 | Video |
| TokenFlow [16] | ICLR’24 | 61 | Video |
| AVED-Bench | N/A | 110 | Video+Audio |

在所展示的四行中，DreamMotion 包含 26 个视频，RAVE 包含 31 个视频，TokenFlow 包含 61 个视频，三者模态均为纯视频，AVED-Bench 包含 110 个视频且模态为视频加音频，在数量与模态完整性上均居首位，说明新基准把检验从画面扩展到声音与同步。为建立直观印象，下面以狗吠变为狮吼为例对照单侧与联合编辑，原始内容为小狗望窗吠叫，目标是外观变为狮子且声音变为吼叫并保持背景连贯，阅读时可先关注中间帧嘴部开合，再对照下方波形能量是否出现在动作时刻。

[![原论文 Figure 1：Key Challenges in Joint Audio-Video Editing.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-1.png)

*论文图 1：单侧编辑与联合编辑的同步对比：红色圆圈与紫色框标示错位和伪影，绿色圆圈标示对齐（原论文 Figure 1）。*

像素显示顶部为 3 段小狗望窗的胶片条，标题由狗吠指向狮吼。中间浅黄底标注为单侧编辑，3 帧狮子外观已替换，但中间帧红色圆圈内狮口紧闭，与下方居中波形的强能量峰在语义上矛盾，左右两端紫色框内各有一段孤立的强脉冲，与画面动作无对应关系，因而被判定为时间伪影。底部浅蓝底标注为联合编辑，3 帧狮子姿态连贯，中间帧绿色圆圈内狮口张开呈吼叫状，下方波形能量集中于中间时刻，与张嘴动作在时间上吻合，背景窗帘与沙发保持稳定，整体同步感明显优于中排。

### AVED 用冻结扩散模型加增量去噪实现免训练联合编辑

与最近的单模态增量去噪基线相比，AVED 的核心改动是把独立作用于画面与声音的两条增量去噪分支，用一套跨模态对比约束连接起来。保留的部分包括冻结的预训练文本到图像扩散模型、冻结的文本到音频扩散模型、变分自编码器提供的隐空间，以及源分支与目标分支对照的增量去噪思想。新增的部分是在每个去噪时刻，利用扩散模型交叉注意力中的文本相关得分区分需要改写与需要保持的块，并对这些块施加跨模态对比损失。信号规格方面，原文只明确给出视频隐特征 \(z_{v}\) 与音频隐特征 \(z_{a}\) 经由变分自编码器编码，文本提示记为源提示 \(y_{src}\) 与目标提示 \(y_{trg}\)，视频帧数记为 \(F\)，其余采样率、帧率、码率与通道细节均未在正文中披露。

以一段 10 秒原始视频及其伴随音频为例，端到端流程可按序号追踪。第一步，视频帧序列经变分自编码器得到视频隐特征，音频频谱图经编码得到音频隐特征，两者分别保留各自的通道维度与空时维度。第二步，借鉴 RAVE 的做法，把视频在时间上的帧顺序打乱并拼成 \(n_{g}\) 乘 \(n_{g}\) 的空间网格，记为网格隐特征 \(z_{g}\)，其网格数为 \(M\)，从而复用冻结文本到图像模型做视频级编辑。第三步，对源分支与目标分支分别加入噪声，用对应文本提示做条件去噪，得到两路预测噪声并计算增量去噪损失。第四步，从交叉注意力隐藏状态中取出音频嵌入 \(h_{a}\) 与视频嵌入 \(h_{v}\)，按提示相关得分采样正负块并计算跨模态对比损失，最终目标隐变量沿两项损失之和的梯度迭代更新。原文未披露每一步的具体张量形状与帧率变化，阅读时应以符号关系为准。

为看清两条分支在何处汇合，下图给出 AVED 的整体框架，左侧为视频与音频各自的源分支与目标分支，右侧为跨模态增量去噪方案的采样与配对逻辑。阅读时可沿从左到右的箭头，先确认加噪与预测噪声的对应关系，再观察右侧蓝色区域与黑色区域如何分别流向不同的嵌入集合，最后注意绿色箭头标示的正对关系如何把声音与画面中需要改写的部分拉近。

[![原论文 Figure 2：Our AVED Framework. AVED performs zero-shot audio-video editing by employing a cross-modal delta…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-2.png)

*论文图 2：AVED 整体框架：左右两条冻结扩散分支经增量去噪损失连接，右侧跨模态方案完成正负对采样（原论文 Figure 2）。*

像素显示左上为源视频帧经加噪进入冻结文本到图像模型，条件为狗吠提示并输出预测噪声，左中红框优化视频帧对应狮吼提示并输出另一路预测噪声，两路之间以增量去噪损失连接。左下源音频频谱图与红框优化音频沿相同逻辑进入冻结文本到音频模型，同样形成增量去噪损失。右侧上方黑色块处理背景区域，经采样与索引得到源与目标的无关嵌入并构成正对，下方浅蓝块处理蓝色提示相关区域，得到目标分支中狮子外观与吼声的有关嵌入并跨模态构成正对，其余组合视为负对，从而实现改写区域同步、背景区域保持的设计意图。

### 提示相关块如何被挑出并组成跨模态正负对

提示相关块的判定依赖扩散模型交叉注意力层中的查询与键相似度。记音频查询为 \(Q_{a}\)、视频查询为 \(Q_{v}\)，对应键分别来自目标提示的文本特征，相似度经由查询与键转置相乘得到，再沿文本维度取最大值汇聚为每个音频块与每个视频块的提示相关得分。得分经过最小最大值归一化到 0 与 1 之间，得到目标分支的归一化得分。设定音频阈值与视频阈值后，得分高于阈值的块被视为需要改写的有关块，例如狮子的吼声与皮毛区域，得分低于阈值的块被视为背景或无关内容，例如窗帘与环境底噪。原文未披露阈值的具体取值，教学示例中可将其理解为区分前景改写与背景保持的分界线。

在确定有关与无关索引集合后，方法从交叉注意力隐藏状态中取出音频嵌入与视频嵌入，并按索引随机采样以增加视角多样性。有关嵌入只从目标分支采样，记为目标音频有关集合与目标视频有关集合，代表改写后的狮吼与狮貌。无关嵌入则同时从源分支与目标分支按相同空间位置采样，记为源与目标的音频无关集合以及源与目标的视频无关集合，代表改写前后应保持一致的背景。对比损失采用余弦相似度与温度系数，鼓励正对之间相似度高而与负对之间相似度低，最终跨模态损失把多组对齐项平均，形式上为对比损失与增量去噪损失之和，共同驱动目标隐变量的更新。

该设计的统计直觉是把同一实例内部的块关系作为监督，而非依赖不同样本组成的批次。当狗变为狮子时，目标分支中的狮吼有关嵌入与狮貌有关嵌入应相互靠近，构成跨模态正对，而各自与源分支中非狗声、非狮貌的无关嵌入应相互远离，构成负对。若温度系数趋于极小，分布将过分尖锐而只关注最难负例，若趋于极大则区分度下降，原文未披露其具体取值。输出的对比梯度与增量去噪梯度叠加，一路把整体内容推向目标提示，另一路把背景锚定在源内容并把声画改写部分拉齐，从而在每次去噪迭代中同时改善语义对齐与时间同步。

训练与推理边界方面，论文强调零样本含义为不做任何扩散模型的额外训练，所有预训练文本到图像与文本到音频模型参数均保持冻结，可学习的仅为目标分支的隐变量参数。梯度只流经预测噪声之差与对比嵌入，不更新编码器与去噪网络权重，具体优化器、学习率、批大小与迭代步数等超参在正文中未披露，实现细节指向补充材料。推理时对音频与视频同步执行多步去噪优化，每步重新计算提示相关得分与对比损失，原文未披露分块流式方式、前瞻窗口、采样步数、延迟、RTF 与显存开销，因此尚无法从正文判断其是否满足实时或流式部署条件。

### 联合编辑在保真与声画对齐上同时优于单模态组合

#### 评测协议与主结果脉络

评测在 AVED-Bench 与 OAVE 两套数据上展开，公平性前提是所有对比方法均为零样本免训练，直接复用冻结扩散先验而不做针对样本的微调。视频侧指标方向为 CLIP-F（帧间一致性）向上、CLIP-T（文本与视频对齐度）向上、DINO（结构保持）向上、Obj.（目标检出）向上，音频侧为 CLAP（音频与文本相似度）向上、LPAPS（音频感知距离）向下，联合侧为 IB（声画高层相似度）向上、AV-Align（声画低层同步性）向上。其中人工偏好率反映整体编辑质量的主观判断，神经代理分数反映特征空间中的自动相似度，两者不可混为一谈，原文同时报告两类证据但未给出方差与置信区间。

原文完整 Table 2（本精简表未列出）在 AVED-Bench 上对比多组视频模型与音频模型的拼接组合、顺序方案与分别施加增量去噪的方案。AVED 在该完整表中报告视频侧 DINO 得分 0.956，DDS 报告 0.921，AVED 的 CLIP-F 为 0.903、CLIP-T 为 0.260、Obj. 为 0.180。音频侧 AVED 的 CLAP 为 0.226，LPAPS 为 5.55，DDS 的 LPAPS 为 5.93，ZEUS 为 6.41，SDEdit 为 6.93，顺序方案 RAVE 后接 Diff-Foley 的 CLAP 为 0.191、LPAPS 为 7.33。联合侧 AVED 的 IB 为 0.23、AV-Align 为 0.42，顺序方案对应为 0.16 与 0.35，原文称 AV-Align 相对基线有超过 20% 的相对提升。在 OAVE 上 AVED 的 DINO 为 0.959，对照为 0.930，LPAPS 为 5.15，对照为 5.58，IB 为 0.32，对照为 0.29。

#### 增量收益的定量与定性证据

为剥离跨模态约束的净贡献，下表进一步对比基线、仅音频约束、仅视频约束与完整声画约束在 3 个关键指标上的表现。该表对应原文 Table 4，聚焦保真与同步而非全部 8 个指标，表中 DINO 向上、LPAPS 向下、AV-Align 向上，基线指未加跨模态对比损失的增量去噪方案。通过观察从单模态到跨模态的单调变化，可以判断声音与画面信息是各自独立起效还是必须联合才释放最大收益。

| Configuration | DINO↑ | LPAPS↓ | AV-Align↑ |
| --- | --- | --- | --- |
| Baseline | 0.921 | 5.93 | 0.33 |
| + Audio-Only | 0.921 | 5.60 | 0.36 |
| + Video-Only | 0.937 | 5.60 | 0.38 |
| AVED (+AV) | 0.956 | 5.55 | 0.42 |

在所展示的四行三列中，基线 DINO 为 0.921、LPAPS 为 5.93、AV-Align 为 0.33，仅音频与仅视频约束已分别改善声音保真与画面结构，完整 AVED 达到 0.956、5.55 与 0.42，在展示范围内三列均为最优，说明单侧增益需联合才释放最大同步收益。定量之外，猫变为狗的实例更能暴露错位形态，源为白猫张嘴叫，目标是改为白狗外观与犬吠并保持趴卧姿态，上两行为源与本方法，下三行为拼接方案，阅读时先看绿圈嘴部，再对照右侧黑框与蓝框的能量位置。

[![原论文 Figure 4：Qualitative Zero-Shot Audio-Video Editing Results.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/87117e050ff6/figure-3.png)

*论文图 3：猫变为狗的定性对照：绿圈标示嘴部对齐，黑框标示同步声音，蓝框标示错位伪影（原论文 Figure 4）。*

像素显示首行源猫后 2 帧绿圈内猫口张开，右侧黑框内对应时刻出现橙红竖纹，第二行本方法狗外观替换成功且开合节奏与源一致，右侧黑框能量位置与源叫声时刻对齐，下三行拼接方案或姿态突变或嘴闭而声至，右侧蓝框在偏后时刻出现多余竖纹而被判为伪影。人工评测招募 300 名受试者，每人随机评测 5 对视频并在隐藏方法名的条件下选择偏好，约 75% 偏好 AVED 而非 ControlVideo，超过 60% 偏好 AVED 而非 TokenFlow 与 RAVE，但该结果未报告置信区间且未覆盖全部基线，仅说明所测配对中的整体观感优势。

### 正负对选择方式决定跨模态约束是否生效

若不利用提示相关得分而随机挑选正负块，跨模态约束是否仍然有效，这是检验选择策略必要性的关键对照。下表对应原文 Table 5，在与上表相同的 3 个指标上对比基线、同模态随机配对、跨模态随机配对与完整 AVED。其中同模态随机指同位置跨分支配对，跨模态随机指不分区域直接把音频与视频块视为正对。通过观察随机策略与提示感知策略的差距，可以判断区域先验在同步中的实际分量。

| Configuration | DINO↑ | LPAPS↓ | AV-Align↑ |
| --- | --- | --- | --- |
| Baseline | 0.921 | 5.93 | 0.33 |
| Random A/V | 0.930 | 5.83 | 0.35 |
| Random A+V | 0.902 | 6.32 | 0.28 |
| AVED | 0.956 | 5.55 | 0.42 |

在所展示的四行中，基线 DINO 为 0.921、LPAPS 为 5.93、AV-Align 为 0.33，同模态随机小幅升至 0.930、5.83 与 0.35，跨模态随机则跌至 0.902、6.32 与 0.28，完整 AVED 达到 0.956、5.55 与 0.42。可见同模态随机因多数块本就属于背景而略有增益，跨模态随机因把需要改写的局部与背景混为一谈而明显退化，只有基于提示相关得分的选择在三列上同时取得展示范围内的最优，证明了区域划分的必要性。

跨模态随机退化的原因在于发声对象通常只占画面与频谱的局部区域，若把所有音频块与视频块都视为正对，会迫使吼声嵌入靠近背景视觉嵌入，同时迫使狮貌嵌入靠近环境底噪嵌入，从而稀释了真正需要对齐的局部对应。同模态随机之所以未退化，是因为同一空间位置在源与目标分支中大多仍为背景，随机采样仍有较大概率命中背景正对，因而保留了部分保持背景的作用。这一对比说明正对定义的粒度必须与改写区域的空间稀疏性匹配，否则对比损失会引入错误吸引子。

从归因完整性看，原文未提供阈值敏感性、温度系数敏感性、采样块数量与不同扩散主干下的系统消融，也未报告多次运行的方差与显著性检验。未胜出项方面，跨模态随机在三项指标上均弱于基线，构成明确负结果，提示错误配对相比不用约束更有害。未评测范围包括长视频、多发声体、强混响与低信噪比环境，以及除 DINO 与 LPAPS 之外的保真维度，结论不宜直接外推至这些条件。

### 结论成立的前提、未验证条件与复现核对

AVED 的结论依赖若干隐含假设。首先，提示相关得分的质量取决于冻结扩散模型交叉注意力的语义分辨力，若目标概念在预训练中罕见或文本表述模糊，得分图可能无法准确圈出改写区域。其次，阈值划分假设前景与背景在得分上可分，若两者分布重叠，采样将混入噪声正负对。再次，当音频与视频嵌入维度不一致时采用插值对齐，假设插值不破坏判别结构。这些假设在动物与环境声为主的基准上成立，但在细粒度动作或重叠声源下是否成立，原文未做验证。

未验证的部署条件集中在效率与泛化两端。效率侧原文未披露 GPU 型号与数量、训练耗时、推理延迟、RTF、吞吐与显存占用，也未说明是否支持因果流式、分块处理或缓存复用，因此无法判断其在实时创作工具中的可行性。泛化侧 OAVE 侧重声画图像而非连续视频，CLIP-F 与 AV-Align 在该集合上适用性有限，人工评测仅覆盖 3 个视频基线且未与音频基线单独配对，缺少平均意见分与置信区间，神经代理与人工判断背离的风险未被量化。

复现核对需区分三件事。代码方面，原文提及项目页链接并称提供代码、数据与结果，但正文未披露版本、许可与运行说明，尚无法确认可直接运行状态。权重方面，所用文本到图像与文本到音频模型均为冻结预训练模型，正文未给出具体版本与下载方式。数据方面，AVED-Bench 的 110 个视频与人工标注提示称收录于补充材料，OAVE 沿用公开划分，附录亮点包括完整标注与实现细节，复现时应以补充材料中的阈值、采样数与优化步数为准，正文符号关系仅作原理参考。

工程选型上，若任务要求外观与声音同步改写且背景必须稳定，优先考虑联合约束而非单侧拼接或顺序补音，因为后者在 AVED-Bench 上表现出更高的感知距离与更低的同步得分。若任务只改画面或只改声音且另一模态允许保持原样，单模态增量去噪已能提供接近的保真，此时引入跨模态项的收益有限。若发声区域难以从文本中定位，或对延迟与显存有硬性约束，建议先在小规模提示集上验证得分图质量与运行开销，再决定是否采用完整的跨模态方案。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文仅明确视频时长为 10 秒，未披露采样率、帧长、步长、码率、通道数、帧率、前瞻延迟、RTF 与显存占用，隐特征维度与网格参数仅以符号给出
- **训练与评测数据**：训练侧为零样本免训练，无额外训练数据，评测使用 AVED-Bench 的 110 个 10 秒视频，分属 11 个类别，源自 VGGSound 并配人类标注源与目标提示，另一评测为 OAVE 的 44 个类别，每类 10 张图像并配音频与视觉标注与 25 种提示模板
- **算力与训练耗时**：原文未披露 GPU 型号与数量、TPU 配置、训练步数与耗时，本方法无模型训练阶段，仅对目标隐变量做迭代优化，推理硬件与运行环境原文未披露
- **核心超参数与配置**：原文提及分类器自由引导系数、音频与视频阈值、对比温度系数与损失权重等符号，未在正文披露具体取值、优化器、学习率、批大小、层数、维度、码本与迭代步数，实现细节指向补充材料
- **推理速度与部署开销**：原文未披露参数量、RTF、延迟、吞吐、显存占用、采样步数、分块流式方式与缓存策略，无法从正文判断实时性与部署代价
- **开源产物与协议状态**：原文提及项目页链接并称提供代码、数据与结果，正文未披露代码版本、权重下载、数据许可与运行说明，尚无法确认可直接运行状态
- **附录与补充材料要点**：原文称实现细节与 AVED-Bench 完整标注收录于补充材料，正文未披露附录中的证明、补充消融与失效案例细节，复现应以补充材料为准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 7.6/10 | 技术严谨 6.4/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Lin_Zero-Shot_Audio-Visual_Editing_via_Cross-Modal_Delta_Denoising_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：AVED在AVED-Bench八项指标全面最优，DINO达0.956且AV-Align达0.42显著超越DDS与串行基线。

- 核心优势：直接消融显示跨模态联合优于单侧增强，随机跨模态配对全面退化至0.902反证提示相关选择的必要性。

- 核心优势：覆盖视频加音频组合、串行生成与DDS等多类代表性强基线并在OAVE外源数据集验证泛化趋势。

- 主要短板：正文缺失引导系数ω、阈值τa与τv、温度α、步数与骨干规模且实现细节推至未提供的补充材料导致复现受限。

- 主要短板：所有表格仅报告单点均值而无方差与显著性检验，人工评测仅总体偏好率而无置信区间与细分统计。

- 主要短板：网格视频数写作M=F/ng×ng字面等于F疑为F/(ng×ng)排版错误且原文未解释构成关键符号混乱。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
