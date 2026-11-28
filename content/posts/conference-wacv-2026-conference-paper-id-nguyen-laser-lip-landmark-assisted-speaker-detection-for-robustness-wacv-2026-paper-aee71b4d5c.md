---
title: "LASER: Lip Landmark Assisted Speaker Detection for Robustness"
date: 2026-11-28
draft: false
description: "针对说话人检测在视听错位与背景噪声下容易误判的问题，LASER 在训练时把 82 个唇部关键点编码为稠密特征并以一致性损失让纯人脸分支模仿增强分支，在高噪声子集上比 LoCoNet 与 TalkNet 分别高 3.3 与 4.3 个点，代价是训练依赖关键点检测器且干净域内提升仅 0.1 个点左右。"
tags: ["基准测试", "多模态学习", "音视频", "可见活跃说话人检测"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "唇部关键点显式引导如何让说话人检测扛住噪声与错位"
paper_digest_original_title: "LASER: Lip Landmark Assisted Speaker Detection for Robustness"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper"
paper_digest_workbench_source_sha256: "c78f59e4b6a72e5340ef90f345f7c6dfc9b491853465846b0e0fbe2223dbc2f1"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "可见活跃说话人检测"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对说话人检测在视听错位与背景噪声下容易误判的问题，LASER 在训练时把 82 个唇部关键点编码为稠密特征并以一致性损失让纯人脸分支模仿增强分支，在高噪声子集上比 LoCoNet 与 TalkNet 分别高 3.3 与 4.3 个点，代价是训练依赖关键点检测器且干净域内提升仅 0.1 个点左右。"
paper_digest_reader_sections: [{"heading":"只看整脸为何在声音错位与噪声下容易误判","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"唇轨显式并入视觉编码与双路一致训练总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"稀疏坐标如何变成稠密特征并在缺失时保持稳定","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"域内接近饱和而高噪声子集拉开 3 点以上差距","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"编码方式与一致性损失各自带来什么","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"高噪声实例、失效边界与选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["University of Wisconsin - Madison"],"name":"Le Thien Phuc Nguyen"},{"affiliations":["University of Wisconsin - Madison"],"name":"Zhuoran Yu"},{"affiliations":["University of Wisconsin - Madison"],"name":"Yong Jae Lee"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9250a0b380b507eb0b5338280e95b3b2b8cd36108774a853d4d2e4b88c114d7c","url":"/audio-research-portal/client/papers/2026-11-28/conference-aee71b4d5c4be66ab29c2afa/citation.bib"},"citation.json":{"sha256":"0b88a33081c8434123c728ebc4e696393ebb88b4ee73b88b836cb2aa74c3b120","url":"/audio-research-portal/client/papers/2026-11-28/conference-aee71b4d5c4be66ab29c2afa/citation.json"},"citation.ris":{"sha256":"b8e4fec7500f569f05ee9e527200970130caf59f54bde730fafb752e0241c40b","url":"/audio-research-portal/client/papers/2026-11-28/conference-aee71b4d5c4be66ab29c2afa/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"985ae46c236c067c12cf6e224c67e96d7ac39b1cd5cc8c9bb490f9dc57c94138","url":"/audio-research-portal/client/papers/2026-11-28/conference-aee71b4d5c4be66ab29c2afa/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "45ccb0fb6758284c6953f8b7f120b9aceea9aefc9d1b92231a6a235a5c42b800"
paper_digest_api_reader_plan_sha256: "2dde637156b8b0cd01756ca3e582d3ccfa27ad5d5d3e7b3f6a83c62c9bc81052"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7148081b8e9e062771559043ca9463b47d5409dc8c4c969b79822ad89da6ef93"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7f7a40e8289fff1c7a43525b4b37aea27746964da8e1684a2fdbdc8f2b6ed0ff"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c6d21aa1e37738d0f9fc5cca1210b4b04e00629f8ed8af2d932e997f608b100a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c1198bdb79e952e4c2c90f990e8b473fc68a297afdb8aa16c13fff93b3ad3ba0"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.active-speaker-detection","label":"可见活跃说话人检测"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 唇部关键点显式引导如何让说话人检测扛住噪声与错位

> 英文题目：*LASER: Lip Landmark Assisted Speaker Detection for Robustness*

> 会议身份：`conference:wacv:2026:conference-paper-id:Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [可见活跃说话人检测](/audio-research-portal/papers/?concept=task.active-speaker-detection)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 7.7/10 | 清晰度 5.3/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Le Thien Phuc Nguyen：University of Wisconsin - Madison
- Zhuoran Yu：University of Wisconsin - Madison
- Yong Jae Lee：University of Wisconsin - Madison

## 📌 核心摘要

**问题与瓶颈：** 主动说话人检测（Active Speaker Detection, ASD）需对视频中每条人脸轨迹逐帧判断是否说话，输入为人脸裁剪序列与对应音频梅尔谱，输出为逐帧说话标签。人类依赖唇动与语音同步感知说话与否，即使轻微延迟也会察觉错位，而现有 ASD 模型分为视听时序编码与长时上下文建模两阶段，依赖注意力捕捉跨模态交互。论文的梯度加权类激活映射（Gradient-weighted Class Activation Mapping, Grad-CAM）分析显示，基线在音画错位时仍难以聚焦唇部，常将非说话误判为说话。根因被归于视觉编码器本身在进入上下文模块前已缺乏唇音同步信息，而非仅上下文建模不足。

**核心思路与方法架构：** 与最接近的 LoCoNet 基线相比，LASER 保留 3D 卷积加 ResNet-18 加视频时序卷积网络（Video Temporal Convolutional Network, V-TCN）加上下文建模的整体链路，仅在视觉编码训练阶段注入唇关键点轨迹并以一致性损失约束无关键点分支，推理时可完全不依赖关键点检测器。给定一条人脸轨迹 \(V\) 与同步音频，方法先用轻量 Mediapipe 检测器提取每帧 82 个唇关键点二维坐标，形成唇轨 \(M\)，再经编码函数 \(T\) 将离散坐标转为与视觉特征同空间尺寸的稀疏二维图 \(h\)，并以 1x1 卷积将 82 通道压缩至 4 通道得到稠密图 \(h'\)。\(h'\) 与 3D 卷积输出拼接后经 ResNet 逐帧处理与 V-TCN 时序建模得到视觉表示 \(fv*\)，与音频编码器输出 \(fa\) 拼接后送入上下文模块 \(G\) 与三路线性分类器训练，目标为多模态与单模态交叉熵加权和。KL 散度一致性损失对带唇轨预测施加停止梯度，仅更新无唇轨分支，使其隐式学习唇音同步，从而在遮挡或低分辨率导致关键点缺失时仍保持稳健。

**关键实验与核心代价：** 在 AVA 训练并在 AVA 验证集测试的域内条件下，LoCoNet 的平均精度均值（mean Average Precision, mAP）为 95.2，而 LoCoNet + LASER 为 95.3，高于基线；在 Talkies 测试的跨域条件下，双方为 88.4 与 89.0，LASER 高于基线；在 ASW 测试条件下，双方为 88.4 与 88.9，LASER 高于基线。同一 AVA 训练模型在 LASER-bench 高噪声子集上，TalkNet 从 77.8 变为 82.1，LoCoNet 从 86.7 变为 90.0，均高于基线且论文报告分别提升 4.3 点与 3.3 点，而低噪声子集双方基本持平。音画错位测试中，音频交换条件下 AVA 准确率为 75.9 与 77.6，Talkies 为 72.1 与 73.9，ASW 为 56.7 与 59.9，LASER 均高于 LoCoNet。关键消融显示，仅使用唇轨编码而测试使用编码时 AVA 为 95.1 且高噪声为 85.7，均低于 95.2 与 86.7 的基线，加入一致性损失后恢复至 95.3 与 90.0，且测试不使用编码仍保持 95.3 与 90.0，额外参数可忽略。评测仅使用 mAP 与帧准确率及 Grad-CAM 定性对比，未采用人工主观平均意见分（Mean Opinion Score, MOS）或 UTMOS 等神经代理指标。

**适用边界与深读导览：** 结论成立前提是训练时可获得相对可靠的唇关键点，并在 AVA、Talkies、ASW 与 LASER-bench 的多人可见说话场景下验证，未覆盖极端遮挡、大角度侧脸或长时间无关键点视频之外的失效量化，也未实测推理时延与吞吐。LASER-bench 以语音活动检测（Voice Activity Detection, VAD）过滤语音后按均方根（Root Mean Square, RMS）能量 0.03 划分高低噪声，未提供可试听演示页。需深究编码公式与损失细节可查阅下文方法概述和架构对式 1 至式 5 的展开，需核对跨域与噪声增益可查阅下文实验结果对标准评测、LASER-bench 与错位音频的对照。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/plnguyen2908/LASER_ASD> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/plnguyen2908/LASER-bench> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只看整脸为何在声音错位与噪声下容易误判

人类判断谁在说话时，会本能地对照嘴唇开合与声音是否同步，稍有延迟就会感到不适。现有说话人检测模型是否也这样盯住嘴唇，是本文的切入点。下面一组热力对比把同一段视听错位片段分别送入两类模型，上一行对应 LoCoNet 基线，下一行对应本文 LASER，每行各有 3 张连续人脸裁剪，红色表示高响应区域。

[![原论文 Figure 1：Qualitative comparison of Grad-Cam \[22\] visualizations for LoCoNet and our LASER under…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-1.png)

*论文图 1：错位片段下两类模型的注意力对比，上行分散而下行集中于唇部（原论文 Figure 1）。*

对照图中细节可以看出，上一行 3 张的高响应散落在画面边缘、眼部与右下角，唇部几乎没有暖色覆盖，模型在声音与画面错位时仍给出错误倾向。下一行 3 张的高响应则稳定落在嘴唇附近，呈现红黄相间的集中暖色，即使在侧脸与模糊裁剪下也保持在唇区，这种落点差异直观解释了为何前者在错位时难以正确给出未说话判断。

原文把主流模型归纳为两段式流程，先由视觉与音频编码器分别把人脸轨迹与梅尔频谱变成带时序上下文的嵌入，再由上下文建模模块做长时依赖与跨模态交互。作者认为问题出在第一段的视觉特征本身，即在进入上下文建模之前，特征已经没有突出唇动与声音的对应关系，仅靠注意力很难在后续补回。

另一重困难来自真实噪声，常用 AVA 验证集以干净配音的电影片段为主，规模为 8,000 条轨迹与 760,000 张裁剪，而带真实噪声的 ASW 验证集仅有 3,500 条轨迹与 171,000 张裁剪。Talkies 验证集为 6,800 条轨迹与 235,000 张裁剪，同样难以覆盖人群喧哗与环境声交织的现代视频，这正是后文自建 LASER-bench 的动机。

### 唇轨显式并入视觉编码与双路一致训练总览

整体思路是在训练时把唇部位置显式告诉视觉编码器，同时保证测试时即使拿不到唇部位置也能正常工作。下图自左向右展示了人脸轨迹、唇轨编码、音频编码与上下文建模的汇合关系，虚线箭头区分了参数共享、一致性约束与梯度截断 3 类不同含义，沿箭头走一遍就能看清数据如何分叉再汇合。

[![原论文 Figure 2：Illustration of LASER. Given a face track V , we first obtain a lip landmark track using a facial…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-2.png)

*论文图 2：双路视觉编码与音频汇合的总体流程，含唇轨压缩与一致性约束（原论文 Figure 2）。*

对照图像细节可以看出，底部紫色波形为音频轨迹，经音频编码器变为蓝色块表示的音频嵌入，中部黑底绿点为唇轨，每帧可见一圈唇部散点。唇轨先经编码变为浅色块，再经 1x1 卷积压缩，与 3D CNN 输出的紫灰色块拼接后送入下方一路 ResNet 与 V-TCN，上方一路则仅用纯人脸特征，两路共享参数。右侧紫色大块为上下文建模，音频嵌入也汇入其中，最终形成两组预测并以绿色虚线做一致性约束，红色标志表示对带唇轨一侧做梯度截断。

与最近基线相比，改动集中在视觉编码器内部，保留了 3D 卷积加 ResNet-18 加视频时序网络的结构，以及 LoCoNet、TalkNet 与 Light-ASD 的上下文建模，只新增了唇轨编码与 1x1 压缩。输入定义为 T 帧的人脸轨迹与 4T × N 的梅尔频谱，输出为每一帧是否说话的判断，唇点数取 K = 82 个，压缩后通道取 S = 4 个，原文未披露采样率与帧步长等信号细节。

训练时同时走两路前向，一路带唇轨，一路只看人脸，两路预测以散度约束对齐，梯度只更新不带唇轨一侧，使其隐式学会关注唇部。测试时可完全丢掉人脸关键点检测器，只用纯人脸轨迹推理，从而避开低分辨率、遮挡与大角度下约 15% AVA 轨迹无关键点的失效，这种可去掉检测器的设计是后文高噪声收益成立的关键前提。

### 稀疏坐标如何变成稠密特征并在缺失时保持稳定

人脸轨迹指同一人脸在连续帧中裁剪图像组成的序列，长度记为 \(T\) 帧，每帧裁剪尺寸为 \(H \times W\)。视觉编码沿用已有设计，由 3D 卷积、残差主干 ResNet-18 与视频时序网络 V-TCN 组成。LASER 在此基础上对每帧运行轻量人脸关键点检测器，取出唇部二维坐标构成唇轨，每帧包含 \(K = 82\) 个点，记为 \(M\)，后续编码与聚合均围绕该唇轨展开。该检测器采用轻量实现，单帧输出的唇点数固定，便于批量编码与对齐。

基线流程先由视觉编码器 \(F_v\) 与音频编码器 \(F_a\) 分别处理人脸轨迹与梅尔谱图，得到视觉特征与音频特征，再拼接为多模态特征送入上下文建模 \(G\)，以聚合长时时序依赖与跨模态交互。上下文建模同时输出多模态与单模态表示，分别经线性分类器得到帧级预测，3 路交叉熵加权构成原始目标 \(L_{asd}\)，避免建模偏向单一模态。LASER 不改动该后段结构，只替换视觉编码器的输入与内部融合，使唇动线索在进入上下文建模前已融入时序表示。

#### 唇点编码与稠密化

离散坐标无法直接与连续特征图拼接，为此设计编码函数 \(T(M)\)，把每个唇点 \((x_i, y_i)\) 的归一化横纵值写入与视觉特征同尺寸的二维图中。横向图仅在落点处取 \(x_i / W\)，其余位置取零，纵向图仅在落点处取 \(y_i / H\)，其余位置取零，由此得到形状为 \(T \times K \times 2 \times H \times W\) 的稀疏特征，其中 2 对应横纵两个通道。该设计保留唇形位置与形态信息，并与视觉特征在空间尺寸上对齐，为后续融合提供可加性基础。

稀疏特征零元过多且通道冗余，直接拼接不利于优化，因此以 \(1 \times 1\) 卷积把 \(K\) 个通道压缩至 \(S = 4\) 个，得到 \(T \times S \times 2 \times H \times W\) 的稠密特征。压缩后的唇特征与 3D 卷积输出的人脸特征在通道维拼接，再依次经过残差主干做单帧处理与视频时序网络做跨帧建模，得到带时序上下文的视觉表示 \(f_v^*\)，其维度为 \(T \times D\)，其中 \(D\) 为视觉嵌入维度。该表示既含帧级唇形线索，又显式刻画唇动随时间的变化，使上下文建模更易对齐视觉与音频信息，且可直接接入多种上下文建模而不改其结构。

#### 一致性约束与训练目标

实际中检测器会因低分辨率、遮挡或大角度失效，在常用评测中约 15% 的人脸轨迹完全缺失关键点，此时缺失唇轨会导致特征退化。为此引入辅助一致性约束，对同一人脸轨迹分别求不带唇轨的表示 \(f_v\) 与带唇轨的表示 \(f_v^*\)，并以 KL 散度衡量两者最终预测的差异，记为 \(L_{consistency}\)。计算该项时对带唇轨一侧做梯度截断，仅更新不带唇轨分支，使其模仿增强分支的预测，从而在无唇点时仍保持对唇音对应的敏感性。若唇点完整，增强分支提供更准的教师信号，若唇点全部缺失，模型退化为纯人脸模型而不中断训练。

最终训练目标为原有多模态分类目标与一致性项的加权和，记为 \(L = L_{asd} + \lambda_c L_{consistency}\)，其中 \(L_{asd}\) 为 3 路交叉熵加权，权重取 \(\lambda_{av} = 1\)、\(\lambda_a = 0.4\)、\(\lambda_v = 0.4\) 与 \(\lambda_c = 1\)。音频分支仍对梅尔谱图编码得到音频特征，再与视觉表示拼接为多模态特征送入上下文建模，编码器、上下文建模与线性分类器仍端到端训练。训练沿用已有模型的视觉增强与音频加噪做法，推理时可仅用人脸轨迹而不再依赖关键点检测器，由此消除对检测器的依赖并降低延迟，也解释了同一套增强能同时提升不同容量的已有模型的原因。

### 域内接近饱和而高噪声子集拉开 3 点以上差距

所有主结果均在同一训练条件下对比，模型只在 AVA 训练集上训练，分别在 AVA 验证集做域内评测，在 Talkies 与 ASW 验证集做跨域评测，指标为 mAP 且越大越好，带 † 标记的结果为按官方代码复现。LASER-bench 作为域外噪声检验，训练仍只用 AVA，经语音活动检测剔除语音段后按剩余背景的均方根能量以 0.03 为界分为低噪声与高噪声子集。错位检验则保持画面不变而替换或延迟音频，此时全部真值为未说话，故改用逐帧准确率。

#### 标准与噪声评测的设计

下表汇总了 3 种容量不同的基线及其接入 LASER 后的变化，并附带对比学习变体的叠加效果，训练均只用 AVA，评测覆盖 AVA 域内与 Talkies、ASW 跨域，指标均为 mAP 且越大越好，重点看跨域两列是否同步提升以及域内饱和点是否还有余量。表中带 † 的行为按官方代码复现，EASEE 与 MAAS 仅作参考且缺 ASW 一列。

| Model | AVA | Talkies | ASW |
| --- | --- | --- | --- |
| EASEE [3] | 94.1 | 86.7 | - |
| MAAS [2] | 88.8 | 79.7 | - |
| TalkNet † [26] | 92.2 | 85.9 | 85.8 |
| TalkNet + LASER | 92.5 | 87.6 | 86.6 |
| Light-ASD† [16] | 93.5 | 87.6 | 87.4 |
| Light-ASD + LASER | 93.8 | 88.1 | 87.6 |
| LoCoNet † [29] | 95.2 | 88.4 | 88.4 |
| LoCoNet + LASER | 95.3 | 89.0 | 88.9 |
| LoCoNet w/ CL † [11] | 95.5 | 88.3 | 88.5 |
| LoCoNet w/ CL + LASER | 95.4 | 89.7 | 89.5 |

对比可见，接入 LASER 后 3 类基线在跨域两列同步提升，其中 TalkNet 在 Talkies 上从 85.9 mAP 升至 87.6 mAP，在 ASW 上从 85.8 mAP 升至 86.6 mAP，原文报告的提升为 1.7 与 0.8 个点。LoCoNet 从 88.4 mAP 升至 89.0 mAP 与 88.9 mAP，叠加对比学习后在 Talkies 与 ASW 上达到 89.7 mAP 与 89.5 mAP，为该表跨域两列最高。域内 AVA 列最高为 95.5 mAP 的对比学习基线，叠加 LASER 后为 95.4 mAP，略低而未占优。下表把视角切到真实噪声，模型训练仍只用干净电影数据，测试直接放在 LASER-bench 的低噪声与高噪声子集上，指标仍为 mAP 且越大越好，重点看高噪声列的拉开幅度是否远大于低噪声列。

| Models | LASER-bench Low Noise | High Noise |
| --- | --- | --- |
| TalkNet [26] | 94.8 | 77.8 |
| TalkNet + LASER | 95.0 | 82.1 |
| LoCoNet [29] | 96.2 | 86.7 |
| LoCoNet + LASER | 96.4 | 90.0 |

低噪声下两类基线几乎持平，TalkNet 从 94.8 mAP 升至 95.0 mAP，LoCoNet 从 96.2 mAP 升至 96.4 mAP，提升仅 0.2 个点。高噪声下差距显著拉开，TalkNet 从 77.8 mAP 升至 82.1 mAP，提升 4.3 个点，LoCoNet 从 86.7 mAP 升至 90.0 mAP，提升 3.3 个点，说明收益集中在声学困难段，干净段已接近饱和。为检验模型是否真正利用唇音对应而非记忆场景，下图把测试音频整体延迟固定秒数后统计逐帧准确率，3 张子图分别对应 AVA、Talkies 与 ASW，横轴为延迟秒数，纵轴为准确率，蓝色为 LoCoNet，橙色为 LASER，延迟越大，错位越容易被察觉，曲线整体上行。

[![原论文 Figure 3：Evaluation with unsynchronized audios.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-3.png)

*论文图 3：三数据集下延迟增大时两类模型逐帧准确率的变化趋势（原论文 Figure 3）。*

逐点对照可见，3 张子图中橙色折线在所有延迟点均位于蓝色折线上方，没有例外。左侧 AVA 子图横轴为 0.2 s、0.5 s、1.0 s、2.0 s 与 3.0 s，右侧 ASW 子图横轴相同，中间 Talkies 子图横轴为 0.2 s、0.5 s、0.7 s、1.0 s 与 1.5 s。随着延迟增大，两条曲线同步上行但橙色始终保持领先，表明即使是很短的 0.2 s 错位，显式唇部引导也能带来可辨别的准确率优势。原文同样未报告方差与置信区间，延迟曲线的稳定性尚需更多重复验证。

### 编码方式与一致性损失各自带来什么

下表对应音频交换协议，即把测试音频换成另一段视频的声音，画面保持不变，此时每帧真值均为未说话而不适用 mAP，故改用逐帧准确率且越大越好，三列分别对应 AVA、Talkies 与 ASW，重点看 LASER 是否在三列一致提升。交换操作打乱了原本的唇音对应，是对注意力是否盯住嘴唇的直接考验。

| Model | AVA | Talkies | ASW |
| --- | --- | --- | --- |
| LoCoNet [29] | 75.9 | 72.1 | 56.7 |
| LoCoNet + LASER | 77.6 | 73.9 | 59.9 |

可见 LASER 在三列均有提升，AVA 上从 75.9 升至 77.6，Talkies 上从 72.1 升至 73.9，ASW 上从 56.7 升至 59.9，原文描述的增量为 1.7、1.8 与 3.2 个百分点，其中 ASW 绝对值最低但增量最大。下表对比在同一 LoCoNet 框架内 3 种唇部利用方式，第一种为基于关键点位置的特征池化，第二种为直接对原始坐标做卷积，第三种为本文稀疏编码加 1x1 压缩，评测仍为 AVA 域内与 Talkies、ASW 跨域的 mAP，重点看本文方式是否在三列同时占优。

| Model | AVA | Talkies | ASW |
| --- | --- | --- | --- |
| LoCoNet [29] | 95.2 | 88.4 | 88.4 |
| w/ LP [28] § | 94.7 | 88.3 | 88.5 |
| w/ LDI [9] § | 94.9 | 87.9 | 87.9 |
| w/ LASER | 95.3 | 89.0 | 89.5 |

结果显示本文方式在三列均为最高，分别达到 95.3 mAP、89.0 mAP 与 89.5 mAP，而特征池化在 AVA 上降至 94.7 mAP，直接卷积坐标在 Talkies 与 ASW 上降至 87.9 mAP，均未超越纯人脸基线。原文还称本文方式仅增加可忽略的额外参数，具体数值见附录而正文未展开，池化与卷积的失败说明离散坐标需要先变成与视觉特征同尺寸的稠密图再融合。

原文文字还报告了另一组组件消融，仅用唇轨编码而不加一致性损失时，AVA 验证集从 95.2 mAP 降至 95.1 mAP，低噪声与高噪声子集从 96.2 mAP 与 86.7 mAP 降至 96.1 mAP 与 85.7 mAP，主因是测试时约 15% AVA 轨迹与 39% LASER-bench 轨迹无关键点。加入一致性损失后，即使测试时完全去掉唇轨，仍能保持 95.3 mAP、96.4 mAP 与 90.0 mAP，与保留唇轨的 95.3 mAP、96.5 mAP 与 90.0 mAP 基本持平，这也是推理可免检测器的直接证据。

### 高噪声实例、失效边界与选型建议

下面一组球场采访实例来自 LASER-bench 的高噪声段，背景为看台人群欢呼，画面为 3 行 3 列共 9 张截图，行按 a)、b)、c) 区分真值、LASER 与 LoCoNet，列为 3 个时刻，红色框表示未说话，绿色框表示说话，橙色圆圈表示错误预测，对照三行的框色差异就能看出谁在噪声下更稳。

[![原论文 Figure 4：Qualitative Comparison on LASER-bench.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/033d1eeab626/figure-4.png)

*论文图 4：球场欢呼噪声下真值与两类模型在三个时刻的框色对比（原论文 Figure 4）。*

逐格对照可见，首列最左侧在 a) 与 b) 两行均为红框，表示未说话，而末列最左侧在 a) 与 b) 两行均为绿框，表示说话，前两行在三列的红绿分布完全一致。第三行 LoCoNet 则在首列最左侧、中列最左侧与末列中间人物外多出橙色圆圈标记的错误预测，或把未说话判成说话，或漏掉真实说话者，而 LASER 在人群欢呼盖过人声时仍与真值保持一致。

结论成立的前提与代价同样明确，增益高度依赖噪声与错位，干净低噪声段仅 0.2 个点，域内 AVA 仅 0.1 个点左右且叠加对比学习后甚至略低。约 15% AVA 与 39% LASER-bench 测试轨迹无关键点，阈值 0.03 的划分与交换延迟的随机性均未做敏感性分析，也未报告方差与置信区间。训练硬件、步数与推理延迟等未披露，附录称有超参与参数细节但本次未收到。论文正文给出代码与数据集链接且本次可达，但归属显示为第三方引用，尚不能等同于作者已开源，复现前需自行核对权重与脚本完整性。

工程选型上，若应用为多人会议、街访或球场采访等噪声大且对错位敏感的场景，优先考虑在训练期引入唇轨增强并以一致性损失蒸馏到纯人脸分支，测试时可不接关键点检测器以省延迟。若场景为干净影视对白且已接近饱和，则无需为零点几个点的提升引入额外依赖。阅读时可把图 1 的注意力落点与本节球场实例对照，凡遇到红绿翻转处先看嘴部是否开合，再听背景是否压过人声，有助于复述模型的真实依据。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入为人脸轨迹与梅尔频谱，音频特征长度为视频长度的 4 倍，唇点数为 82 个，压缩通道为 4 个，采样率与帧长步长及码率等原文未披露
- **训练与评测数据**：仅在 AVA 训练集训练，在 AVA 验证集做域内评测，在 Talkies 与 ASW 验证集做跨域评测，另在自建 LASER-bench 做噪声检验，LASER-bench 取自 YouTube 现代视频并经两轮校验，保留至少 0.2 s 轨迹
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练步数耗时等硬件细节
- **核心超参数与配置**：损失权重为 λav = 1 与 λa = 0.4 及 λv = 0.4，一致性权重为 λc = 1，唇点数为 K = 82，压缩通道为 S = 4，采用 Mediapipe 检测器并含缩放裁剪翻转旋转与背景混音增强
- **推理速度与部署开销**：测试时可去掉关键点检测器而保持精度，额外参数可忽略并可降低延迟，原文未披露 RTF 与延迟吞吐及显存等具体数值
- **开源产物与协议状态**：论文正文给出代码与数据集链接且本次检查可达，但资源归属为第三方引用，尚不能等同于作者已开源，权重与脚本完整性需自行核对
- **附录与补充材料要点**：原文称训练细节与 S 及 λc 超参消融和额外参数量见附录，本次未收到附录全文，许可限制与完整失效案例原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.3/10 | 技术严谨 6.6/10 | 实验充分 7.7/10 | 清晰度 5.3/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 4.5/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Nguyen_LASER_Lip_Landmark_Assisted_Speaker_Detection_for_Robustness_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同一AVA训练模型在高噪声子集上TalkNet从77.8提升至82.1、LoCoNet从86.7提升至90.0且跨域均高于基线。

- 核心优势：稀疏唇关键点图经1x1卷积压缩至4通道并以KL一致性损失实现测试时免检测器推理，额外参数可忽略。

- 核心优势：新建LASER-bench含4.9K条轨迹与738K张裁剪并以VAD加RMS0.03划分高低噪声，规模显著大于ASW验证集。

- 主要短板：对比学习叠加行按AVA、Talkies、ASW列序印为89.7、89.5、95.4与正文增益描述矛盾，且ASW在88.9与89.5间存在字面出入。

- 主要短板：音频延迟测试仅称AVA至少带来2%增益而未给出各延迟具体数值，且全程未报告置信区间或统计显著性检验。

- 主要短板：优化器、学习率、批量、硬件与训练时长均未说明且训练细节见附录但输入未含附录，复现关键配置缺失较多。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
