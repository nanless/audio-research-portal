---
title: "SAID: Semantic Acoustic Imaging Detector for Sound Event Localization and Detection"
date: 2026-11-27
draft: false
description: "针对只预测点方向而缺失声源区域与能量的不足，SAID 以按方向排布的全景特征加 16 个槽位查询逐源预测带标签声学图，在 DCASE2026 官方评价集上以 0.1080 的 Macro mAP 与 0.3962 的 Macro Pearson r 位列第一，代价是依赖大规模仿真预训练与外部语义编码器且绝对精度仍低、实时性未验证。"
tags: ["注意力机制", "CNN", "多通道", "联合声音事件检测定位"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从 4 通道音频到带标签声学图：SAID 如何同时预测声源区域、能量与类别"
paper_digest_original_title: "SAID: Semantic Acoustic Imaging Detector for Sound Event Localization and Detection"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-46"
paper_digest_workbench_source_sha256: "8f8fa031de440ffaac95a4e65a89ea97a81fd84faf9697ccb4d73e36c6fd5a14"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_46.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "联合声音事件检测定位"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对只预测点方向而缺失声源区域与能量的不足，SAID 以按方向排布的全景特征加 16 个槽位查询逐源预测带标签声学图，在 DCASE2026 官方评价集上以 0.1080 的 Macro mAP 与 0.3962 的 Macro Pearson r 位列第一，代价是依赖大规模仿真预训练与外部语义编码器且绝对精度仍低、实时性未验证。"
paper_digest_reader_sections: [{"heading":"从点方向到带能量的区域：语义声成像要回答什么","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"SAID 全流程总览：全景编码与槽位解码如何分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"Audio2Sph 编码器：时频特征如何变为按方向排布的全景特征","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"Sph2Imaging 解码器：槽位查询如何读空间与语义特征并成图","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"在线仿真与两阶段训练：目标图、损失权重与冻结边界","index":5,"kind":"training","roleLabel":"训练与优化"},{"heading":"压缩、官方排名与评价前提：数字在什么条件下成立","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融对照：预训练与语义分支缺失时会发生什么","index":7,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现核对与选型建议：何时可用 SAID","index":8,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Nanjing University, China","The Chinese University of Hong Kong, Hong Kong SAR, China","Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China"],"name":"Runbang Wang"},{"affiliations":["The Chinese University of Hong Kong, Hong Kong SAR, China","Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China"],"name":"Qiuqiang Kong"},{"affiliations":["The Chinese University of Hong Kong, Hong Kong SAR, China","Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China"],"name":"Zining Liang"},{"affiliations":["Institute of Acoustics, Chinese Academy of Sciences, China"],"name":"Yin Cao"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9b33791998a993a1942dbc5abe52b012aba60cf86b4c399e8d3de89a3faef36f","url":"/audio-research-portal/client/papers/2026-11-27/conference-c4a80ddcc119d1f85324530a/citation.bib"},"citation.json":{"sha256":"1050c215f4b0f7687e793bfc531d5ad5bd838d89beacd7c9b9ec46b11c420e3a","url":"/audio-research-portal/client/papers/2026-11-27/conference-c4a80ddcc119d1f85324530a/citation.json"},"citation.ris":{"sha256":"d5e609fc1a0a6b688ac6369d38df1b748f3eeb7e8e92a2c7752a0f025e088ffe","url":"/audio-research-portal/client/papers/2026-11-27/conference-c4a80ddcc119d1f85324530a/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e693bd265af109c08d0c5285f640cbbb037654e407c21bcac693579ef639ecb7","url":"/audio-research-portal/client/papers/2026-11-27/conference-c4a80ddcc119d1f85324530a/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-46"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_46.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "7240707a92181f508e414f54665c9910c2b4111648d22ed6b0ef76af33516e73"
paper_digest_api_reader_plan_sha256: "067180280bfc5e7152e4ad9e5304b0f0ae59393019fefc1d61f77017f378523d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "667779199b06fdf74c1f7fd48cb77e1b50274c33a146d31da6cc8374feae65d2"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6c1ed0c295076f8bf40b6eed59bc1f59370ddaf2cda88f61442f64fd7ace14d6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9d72272f7fb7ead4ce8ab1758408b23d95a0817d35ebc346b2840bb6166d61ba"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b76513150143b2b4ac9866f27c1eea673fed9c06ae016108693696e538245e13"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"setting","id":"setting.multichannel","label":"多通道"},{"facet":"task","id":"task.seld","label":"联合声音事件检测定位"}]
paper_digest_primary_method: "注意力机制"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从 4 通道音频到带标签声学图：SAID 如何同时预测声源区域、能量与类别

> 英文题目：*SAID: Semantic Acoustic Imaging Detector for Sound Event Localization and Detection*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-46`
> Track：P2-2




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_46.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[联合声音事件检测定位](/audio-research-portal/papers/?concept=task.seld)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[CNN](/audio-research-portal/papers/?concept=method.cnn)
- **研究条件**：[多通道](/audio-research-portal/papers/?concept=setting.multichannel)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.6/10 | 实验充分 7.6/10 | 清晰度 6.9/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.4/10 | 工程/实践 4.9/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Runbang Wang：Nanjing University, China；The Chinese University of Hong Kong, Hong Kong SAR, China；Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China
- Qiuqiang Kong：The Chinese University of Hong Kong, Hong Kong SAR, China；Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China
- Zining Liang：The Chinese University of Hong Kong, Hong Kong SAR, China；Shun Hing Institute of Advanced Engineering (SHIAE), Hong Kong SAR, China
- Yin Cao：Institute of Acoustics, Chinese Academy of Sciences, China

## 📌 核心摘要

**问题与瓶颈：** 日常语音、脚步声与音乐等声源需要同时回答是什么与在哪里，输入为 4 通道空间音频，输出为每个活动声源一张带类别标签的声学图，覆盖水平 360 ° 与垂直 180 °，图上以区域表示声源占据方向并以数值表示区域内声音能量，可供机器人感知与增强现实叠加显示。现有联合声音事件检测定位 (sound event localization and detection, SELD) 多预测类别加单点方向，不给出区域范围与能量分布，也难以区分邻近方向声源，而声源数量、位置与区域大小随时间变化。图像分割可处理可变数量区域，但音频时频特征并不天然按声学图方向排布，缺少按方向组织的特征难以逐源生成声学图。

**核心思路与方法架构：** 与最接近的 DCASE2026 Mask R-CNN 基线相比，语义声成像检测器 (Semantic Acoustic Imaging Detector, SAID) 保留逐源掩膜思想，增量在于新增按方向排布的全景编码器 Audio2Sph 与基于槽查询的成像解码器 Sph2Imaging。沿 48 kHz 采样的 2 秒 4 通道片段看，短时傅里叶变换以 2048 点 Hann 窗与 480 点跳长输出 100 fps 的幅度与相位正余弦，经输入卷积与 4 级 ConvNeXt 得到 3 个尺度特征，再经球面交叉注意力将频率维映射到 45 × 90 方向网格 queries 得到方向特征，时间对齐后形成 10 fps 全景特征。在解码侧，多尺度可变形注意力构建由粗到细的空间金字塔，冻结的 PaSST 提供类别特征，16 个槽查询经 9 层掩膜解码器迭代更新，由映射头、活动头与类别头分别输出 45 × 90 槽掩膜、活动概率与 13 类概率，再经精修块升至 180 × 360 输出。Audio2Sph 先经无类别能量图预训练定位能力，再与 Sph2Imaging 联合训练，PaSST 分支冻结，训练模拟用 2 秒片段，推理滑窗划分与流式因果未说明。

**关键实验与核心代价：** 在官方 DCASE2026 Task 3 Track A 评估集的 79 段共约 3.5 小时 13 类 4 通道音频上，SAID 的宏平均平均精度 (macro-averaged mean average precision, Macro mAP) 为 0.1080，宏平均皮尔逊相关 (Macro Pearson r) 为 0.3962，两项均为参评队伍最佳且官方按两项排名之和列第一。开发测试集 78 段全长压缩使 JSON 总存储降低 97.81 %，Macro mAP 从 0.1202 变为 0.1177，Macro Pearson r 从 0.4268 变为 0.4487。关键消融显示去掉 PaSST 分支后 Macro mAP 降至 0.0260，不做 Audio2Sph 预训练则降至 0.0000，证实语义与定位预训练主导收益，代价为 16 槽 9 层解码与高分辨率图存储，未报告 RTF 或时延实测。

**适用边界与深读导览：** 结论成立前提为 4 通道输入、闭集 13 类、10 fps 输出与模拟预训练加真实微调管线，含 0 °、90 °、180 ° 与 270 ° 方位旋转增强，未覆盖单通道、开放词汇、大房间强混响外推与终端部署约束，任务指标为区域重叠与能量相关，未做真人听测。欲深究注意力映射、槽更新与损失加权可查阅下文方法概述的公式与数据流，欲核对排名与消融可查阅下文实验结果的两张表格。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/kkoutini/PaSST/releases/tag/v0.0.1-audioset> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从点方向到带能量的区域：语义声成像要回答什么

人们在日常生活中能同时听出语音、脚步声与音乐，并大致判断声音从哪个方向传来。语义声成像把这种能力形式化为声学图预测：以听者为中心，用一张覆盖水平 360 度与垂直 180 度的矩形图像表示方向，每个活动声源独占一张图，图上区域标记声源占据的方向范围，像素值表示该方向的声能量，并附带语音或脚步声等类别标签。机器人可借此理解周围环境，增强现实也可将声区与标签叠加显示。

此前的方向估计与定位检测路线只能给出不完整答案。经典的广义互相关相位变换与多重信号分类把声源看作空间中的点，并假设直达声主导，在混响房间中容易受回声误导。后续的声音事件定位与检测联合预测类别与点方向，从卷积循环网络发展到注意力网络，并能区分同时出现的同类声源，但仍不描述区域与能量。图像分割中的 Mask R-CNN 改编基线与掩码变换器能预测可变数量的带标签区域，却要求输入本身就是按空间排布的图像，而音频录音并不直接提供按方向排布的特征。

论文归纳了 3 个具体困难。第一，常规定位检测只输出类别加点的方向，缺少区域形状与区域内能量分布，无法支撑需要显示声区与强弱的应用。第二，活动声源的数量、位置与区域尺寸随时间变化，且近邻方向的声源需要在各自独立的声学图上分离，模型必须在未知源数下逐源成图。第三，音频的时频表示按时间与频率组织，与声学图的方向网格不对齐，因此需要先把音频特征重排为按方向组织的表示，再逐源解码为带标签的声学图。

输入被定义为 4 通道空间音频，输出为每一帧若干张带标签声学图，每张图包含连续的区域掩码、能量分布、类别标签与置信度。评价采用两个按类别平均的指标： Macro mAP (类别平均的检测精度指标) 考察类别正确性与区域重叠，漏检与误检都会受罚； Macro Pearson r (类别平均的能量相关性指标) 考察空间匹配后预测与参考能量模式的相关性。官方排名将两个指标的排名相加，数值越高表示区域与能量同时更准，但绝对分数仍受任务难度与标注方式制约。

### SAID 全流程总览：全景编码与槽位解码如何分工

为了看清整体分工，可沿图示从左到右跟踪一次前向过程。最左侧为 4 通道波形，中间经过 Audio2Sph 编码器变为按方向排布的绿色网格全景特征，再经过 Sph2Imaging 解码器变为右侧浅蓝面板中的多张带标签声学图。下方由虚线连接的全景解码器与类别无关图仅在预训练阶段出现，正式成图时会被移除。

[![原论文 Figure 1：SAID overview. Audio2Sph encodes audio into panoramic features; Sph2Imaging predicts labeled…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-1.png)

*论文图 1：整体流程示意：4 通道音频经全景编码与槽位解码得到多槽位声学图，虚线分支仅用于预训练（原论文 Figure 1）。*

图中左侧 4 条蓝色波形表示 4 通道输入，箭头指向梯形编码器。中间绿色网格代表全景特征，其中一个深色格示意当前有能量的方向。右侧浅蓝面板展示 6 张示意声学图，分别标注 S1 至 S4 与 S15 至 S16，其中 S1 至 S3 呈现不同颜色的亮斑表示不同类别的有目标声源，S4 与 S15 至 S16 为全黑表示无目标。下方小梯形为全景解码器，其输出的类别无关图包含 3 个亮斑，对应全部活动声源的能量叠加，与上方逐源分离的显示形成对照。

与 DCASE2026 官方的 Mask R-CNN 改编基线相比，SAID 保留了逐帧预测可变数量目标的思想，但替换了特征组织与解码方式。基线直接在时频或混合特征上做区域提议，而 SAID 先通过可学习的方向查询把多尺度时频特征重排为全景特征，再用 16 个槽位查询各自解码一张声学图。信号规格方面，输入采样率为 48 kHz (采样率单位)，短时傅里叶变换使用 2,048 样本 Hann 窗与 480 点跳长，对应 100 fps (每秒帧数) 的时频帧率，输出声学图为 10 fps，粗图为 45 × 90，精修图为 180 × 360，类别数为 13。

完整流程分为两阶段。第一阶段仅训练 Audio2Sph 编码器与全景解码器，在无类别标签下估计各方向声能量，学会定位能力后移除解码器。第二阶段保留预训练编码器并接入 Sph2Imaging 解码器，在带标签仿真场景上联合训练区域、能量与类别，最后在真实录音上微调。以下两节将分别展开编码器与解码器的张量变化，并以 1 秒输入为例说明帧率与形状的衔接，训练损失与冻结边界将在训练一节集中说明。

### Audio2Sph 编码器：时频特征如何变为按方向排布的全景特征

图示展示了编码器从波形到全景特征的完整链路，上方为主链，下方左右分别为球面交叉注意力与全景解码器的放大细节。阅读时可先看上方从短时傅里叶变换到卷积多尺度特征，再到方向网格特征与时间汇聚的箭头，再对照下方两个放大部分理解查询加权与上采样解码的具体操作。

[![原论文 Figure 2：Audio2Sph maps time–frequency features onto a directional grid through learned queries.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-2.png)

*论文图 2：编码器细节：时频特征经多尺度卷积后由方向查询转为网格特征并汇聚，全景解码器仅预训练使用（原论文 Figure 2）。*

上方主链最左为 4 通道波形与短时傅里叶变换方框，其后并排显示幅度谱的红黄条纹与相位谱的绿色纹理。中间浅色梯形为卷积网络，输出三块橙色网格分别对应不同频率分辨率的多尺度特征。右侧蓝色竖框为球面交叉注意力，输出三块绿色网格再经加号汇合为全景特征，最右为时间汇聚后的特征。左下浅蓝框放大了单个方向查询与时频特征的线性投影与两次相乘加权过程，右下绿框放大了 3×3 卷积与 2 倍上采样交替并以 Sigmoid 收尾的解码结构，下方类别无关图呈现 3 个横向分布的亮斑。

#### 时频前端与多尺度卷积

举例说明，以 1 秒 48 kHz 的 4 通道片段为例，第一步经 STFT (时频变换方法) 得到约 100 fps 的幅度与相位表示，其中对数幅度与相位正余弦拼接后送入卷积前端。第二步经 4 级卷积网络提取多尺度特征，级间在时间与频率上的核与步幅分别为 (2, 2)、(1, 2) 与 (1, 2)，后 3 级输出记为 \(X1\)、\(X2\) 与 \(X3\)，形状为 \(T0\) 帧时间乘频率位置乘通道数。原文对 2 秒输入报告 \(T0\) 为 101 帧，1 秒对应的具体帧数未单独披露，此处仅按 100 fps 与降采样比例示意时间减半的趋势，不虚构精确数值。

#### 球面查询重排与时间汇聚

第三步由球面交叉注意力完成频率到方向的重排。每个方向对应一个可学习的查询 \(Qhw\)，方向网格为 45 行仰角乘 90 列方位角，通道为 16 维，三尺度特征分别进入独立的注意力块但共享同一套随机初始化的网格查询。每个查询经归一化与线性投影得到 \(Q\)，时频特征投影得到 \(K\) 与 \(V\)，频率权重经归一化指数函数在频率维取柔最大值后加权求和，再经拼接投影与残差前馈得到该方向特征。第四步将三尺度输出按位置相加得到 \(Y0\)，再对自适应平均池化与最大池化结果取平均，实现从约 100 fps 到 10 fps 的时间汇聚，得到 \(T\) 帧乘高乘宽乘通道的全景特征。预训练时 \(Y0\) 绕过汇聚直接进入全景解码器，预测 180 × 360 的类别无关图，训练后该解码器被移除。

### Sph2Imaging 解码器：槽位查询如何读空间与语义特征并成图

解码器图的信息密度较高，本次收到的像素主要保留了下半部分的语义分支与输出面板，上半部分的多尺度空间细节被裁切。阅读时可先从左侧 4 通道音频进入语义编码器的箭头看起，再看中间类别特征的线性变换与偏置叠加，最后落到右侧的活动度、类别与带标签声学图 3 个输出上。

[![原论文 Figure 3：Sph2Imaging updates slot queries using multi-scale spatial features and PaSST features.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/5c923f39fb47/figure-3.png)

*论文图 3：解码器可见下半部分：语义与卷积特征汇入槽位查询并输出活动度、类别与精修声学图（原论文 Figure 3）。*

可见像素左下为 4 通道波形与语义编码器方框，其输出经频率池化与时间缩放得到 \(T\) 乘 768 的类别特征，再经线性变换与 13 类可学习嵌入叠加为每一帧 13 组键值。中间下方为卷积多尺度特征的缩放与拼接，输出 2 倍频带拼接特征作为类别头的键值。右下为活动头与类别头的两个输出方框，分别对应 \(N\) 乘 \(T\) 的活动度与 \(N\) 乘 \(T\) 乘类别数的类别分数，最右侧浅蓝面板仍显示 S1 至 S3 的彩色亮斑与 S4 等黑色无目标槽位，与总览图的表现一致。被裁切的上半部分多尺度注意力结构以正文文字为准，不依据缺失像素推测。

#### 多尺度空间特征的构建

解码先将 \(T\) 帧全景特征投影到 256 通道，再经两次步幅为 2 的卷积把 45 × 90 网格逐次减半并向上取整，形成由细到粗的三层表示。多尺度可变形注意力以带位置信息的网格特征为查询，在三层网格上预测采样位置与权重并加权更新，最粗输出记为小特征。再经两个上采样块逐级恢复中特征与大特征，每个上采样块依次做双线性上采样、细网格 1×1 投影相加与 3×3 卷积，最终 1×1 卷积得到供成图的图特征。

#### 槽位查询的更新与精修输出

模型用 16 个可学习的槽位查询代表候选声源，成图头以三层感知机映射查询后与图特征点积并经 Sigmoid 得到 45 × 90 的槽位图掩码。9 层掩码解码器按大、中、小循环选取特征，先在 0.5 阈值二值化的注意区域内做空间交叉注意力，再读取语义特征并做槽位间自注意力与前馈更新。语义分支将冻结编码器的 \(T\) 乘 768 特征投影并叠加 13 类可学习嵌入作为键值，类别头另用卷积特征缩放拼接做交叉注意力并残差相加后输出类别分数。精修块经转置卷积上采样到 180 × 360 并点积成图，置信度为活动度乘最高类别概率乘高于 0.5 像素均值，无超阈像素时为零。

### 在线仿真与两阶段训练：目标图、损失权重与冻结边界

#### 在线仿真场景与扩展源

数据流程全部围绕先仿真后真实微调展开。预训练采用镜像源法在 Python 房间仿真工具中在线生成 2 秒 4 通道录音，每景放置 0 至 4 个语音声源，房间宽与长在 2 至 10 m 间采样，高在 2 至 4 m 间采样，反射阶数至多 5 阶，壁面吸收在 0 至 0.5 间均匀采样。带标签训练则构建 SourceBank，共 122,359 个片段约 95.4 小时，来源覆盖语音、音乐与通用声音并映射到 13 个类别，每景放置 1 至 6 个声源。由于镜像源法只能模拟点源，同一片段驱动分布在区域内的多个发射点以近似扩展源，声源位置、范围与活动共同决定目标图，类别由所选片段决定。

#### 预训练目标与正式损失

第一阶段预训练绕过时间汇聚，直接在约 100 fps 下预测 180 × 360 的类别无关图。每一帧以有效活动声源为中心放置角标准差为 4 度的球面高斯，逐点取最大形成目标图，无源帧为全零图，预测与目标间的无加权二值交叉熵在批量、时间与像素上取平均。预训练共 2,500,000 步，批大小为 1，该阶段只让编码器学会定位声能量，全景解码器随后被移除。

第二阶段保留预训练编码器并接入解码器，在 10 fps 下训练逐源成图与分类。初始查询与 9 层更新共形成 10 组预测，每一帧用匈牙利算法按图与类别一致性独立匹配槽位与声源。图头在不确定性引导与随机采样位置上接受二值交叉熵与 Dice 监督并在 10 组上求和，180 × 360 精修图则在最终匹配上叠加全图二值交叉熵、Dice 以及 1 减平均皮尔逊相关与软交并比。活动头用线性层高效预测类别以参与匹配，匹配槽位目标为源类别权重为 1，未匹配为无目标权重为 0.1，类别头在最终匹配上用焦点损失，伽马为 2，类频权重经逆平方根归一并裁切到 0.25 至 4 之间。

完整目标为 2 倍类别交叉熵加 5 倍图二值交叉熵加 5 倍 Dice 再加精修项与焦点损失，精修项内相关与交并损失各占 0.5 权重。最后在真实录音上用相同目标微调，增强时对每段截取 4 种麦克风通道组合以模拟 0 度、90 度、180 度与 270 度的方位旋转，并将目标图水平平移对应。参数边界方面，语义编码器先在训练数据上继续训练后冻结，全景解码器仅预训练使用，编码器与解码器主体在第二阶段联合更新，优化器与学习率等细节原文未披露。

### 压缩、官方排名与评价前提：数字在什么条件下成立

评价分为开发集压缩验证与官方评价集排名两部分。开发测试集包含 78 个全长录音，用于检验稀疏存储对精度的影响。官方评价集包含 79 个录音共约 3.5 小时，覆盖 13 个声音类别，系统需仅用 4 通道音频在无视频条件下以 10 fps 预测带标签声学图。两个指标均为按类别平均： Macro mAP 考察多重叠阈值下的类别与区域重叠，对漏检与误检计罚； Macro Pearson r 考察同类空间匹配后能量模式的相关性。官方按两指标排名之和排序，为满足每录音 20 MB (存储容量单位) 上限，预测经稀疏点存储与高斯平滑重建。

稀疏压缩保留每个网格单元内不低于图峰值 10% 的最强像素，置信度不低于 0.20 的图采用 2 像素间距，否则采用 6 像素间距，低置信图另在低能量边界外偏 2 像素处补充取峰值 12% 能量的支撑点并保留全部检测。结果显示总量下降 97.81%，最大单文件从 941.50 降至 18.70，平均从 369.58 降至 8.08，且每个文件均低于 20 MB。精度方面 Macro mAP 下降 0.0024，Macro Pearson r 上升 0.0219，表明压缩主要去除了冗余点且平滑重建对能量相关略有帮助，但该对比未报告多次随机种子的方差。

官方结果中，本队提交以 0.1080 的 Macro mAP 与 0.3962 的 Macro Pearson r 位列第一，并在两列上均为单列最高。原文报告其余队伍分数分别为第 2 名 Medisensing 为 0.0662 与 0.2765，第 3 名武汉大学为 0.0091 与 0.3185，第 4 名三星电子为 0.0215 与 0.1394，第 5 名为 0.0001 与 0.0274。由于本次结构化证据仅提供消融表的可绑定单元格，官方表的完整行列未纳入可绑定范围，此处分数转述自正文文字与原表文字，不另制表以免引用未展示行列。绝对值上 0.1080 仍处于低位，说明在 13 类与可变源数下同时保证类别与区域重叠极具挑战。

结论成立的前提包括 4 通道阵列、10 fps 输出、13 类封闭集合与离线高斯重建，且开发集与评价集均为固定场景分布。原文未做人工听测，两个指标均为机器计算的几何与能量度量，不能直接等同于人耳感知的方向与类别体验。未评测范围包括实时因果流式、不同阵列与采样率、强噪声与快速移动声源，以及延迟与显存开销，选型时不应将离线提交分数直接视为在线性能。

### 消融对照：预训练与语义分支缺失时会发生什么

消融在 78 个开发测试录音上对比 4 种配置，指标越高越好。除主指标外另有两个诊断指标： Mask AP (不区分语义类别的区域检测指标) 将全部类别合并后按官方平均精度计算，反映纯定位能力； Macro Class-F1 (仅评估分类的调和平均指标) 先在不看类别下按角距离匈牙利匹配预测与参考峰值，仅保留 20 度内的配对再按类别计算精确率与召回率的调和平均，未在参考中出现的类别不计，未匹配源不纳入分类统计。下表为原文完整消融表的精简呈现，保留全部行列含义。

| Variant | Macro mAP | Macro Pearson r | Mask AP | Macro Class-F1 |
| --- | --- | --- | --- | --- |
| SAID (PaSST) | 0.1202 | 0.4268 | 0.2380 | 0.3885 |
| SAID (AudioMAE) | 0.1134 | 0.4307 | 0.2287 | 0.3951 |
| SAID (None) | 0.0260 | 0.4224 | 0.2293 | 0.1347 |
| w/o Audio2Sph pretraining | 0.0000 | 0.0510 | 0.0000 | 0.3785 |

表中可见的最强反差来自是否做全景预训练。去掉该预训练后 Macro mAP 与 Mask AP 均归零，Macro Pearson r 跌至 0.0510，说明逐源区域与能量完全依赖预训练学到的方向组织能力。去掉语义分支后 Macro mAP 跌至 0.0260，Macro Class-F1 跌至 0.1347，但 Mask AP 与 Macro Pearson r 仍保持在 0.2293 与 0.4224 的高位，说明定位与能量估计可与分类解耦。将语义分支换为 AudioMAE 后各项与 PaSST 接近，Macro Pearson r 与 Macro Class-F1 略高而 Macro mAP 略低，表明语义编码器的选择主要影响分类而非定位。

另一组对照显示无预训练配置的 Macro Class-F1 仍达 0.3785，接近完整模型的 0.3885。这是因为该分数只在 20 度内空间匹配成功后才计算分类，定位失败的样本大多未进入统计，分母变小使得分类分数虚高。反之，无语义分支时定位指标几乎无损而分类崩塌，说明语义分支承载了主要的类别信息，而全景特征本身类别区分不足。两组对照共同表明区域定位与类别判定在该架构中相对独立，预训练解决前者，外部语义编码器解决后者。

缺失的消融包括槽位数 16、多尺度层数与上采样块设计、损失中 2、5、5 与 0.5 等权重的敏感性，以及精修块与不确定性采样的贡献。原文未报告多次随机种子的均值与标准差，也未给出人工听测或置信区间，无法判断 0.0024 级别的涨落是否超出随机波动。此外，消融仅在开发测试集上进行，未在官方评价集上重复，跨分布稳定性仍待验证。

### 假设边界、复现核对与选型建议：何时可用 SAID

方法依赖若干仿真假设。在线生成采用镜像源法模拟点源，再以多点同片段驱动近似扩展源，房间尺寸、反射阶数与吸收系数的采样范围有限，真实房间的家具遮挡、非均匀吸收与快速移动声源未被覆盖。SourceBank 将多个数据集映射到 13 个类别，长尾类别与开放词汇声音不在训练与评价范围内，类别先验可能随场景变化而失效。

部署条件方面原文披露较少。模型按帧独立更新槽位查询，未说明因果流式、前瞻窗口、缓存与块划分方式，也未报告延迟、RTF (实时系数指标)、吞吐与显存占用。20 MB 稀疏存储与高斯重建面向离线提交设计，机器人与增强现实所需的在线端到端延迟与可视化链路未验证。不同麦克风阵列、采样率与通道数下的迁移能力同样未知，直接换阵列可能需要重新仿真与微调。

复现时需区分三件事。代码方面原文未给出可运行仓库链接，不可视为已公开。权重方面仅第三方 PaSST-S 的 AudioSet 预训练检查点当前可用，Audio2Sph 与完整 SAID 的权重以及 SourceBank 生成脚本的公开状态原文未披露，不可直接下载运行。数据方面仿真依赖公开的房间仿真与声音数据集，但复现官方分数还需 DCASE2026 任务的真实录音与标注声学图，以及 48 kHz 4 通道与 10 fps 的严格对应，缺一不可。

工程选型可按需求取舍。若应用只需类别加点方向，传统定位检测更轻量；若需同时显示区域与能量，则可参考按方向组织特征加槽位逐源成图的思路，并务必保留无标签的能量预训练，否则区域指标可能归零。若类别精度优先，可保留或替换语义分支并在目标数据上继续训练后冻结；若存储受限，可采用官方稀疏点方案并验证重建后的能量相关变化。原文未提供试听页，选型时应以客观指标与自有场景实测为准，不依据想象的听感做判断。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入为 48 kHz 的 4 通道音频，短时傅里叶变换采用 2,048 样本窗长与 480 点跳长，对应约 100 fps，时间汇聚后全景特征为 10 fps，方向网格为 45 行乘 90 列，通道为 16 维，粗图为 45 乘 90，精修图为 180 乘 360，原文未披露延迟与 RTF。
- **训练与评测数据**：在线镜像源法生成 2 秒 4 通道场景，预训练每景 0 至 4 个语音源，房间宽长为 2 至 10 m，高为 2 至 4 m，反射至多 5 阶，吸收为 0 至 0.5，SourceBank 共 122,359 个片段约 95.4 小时映射到 13 个类别，每景 1 至 6 源，微调采用 DCASE 真实录音，开发测试为 78 个录音，官方评价为 79 个录音约 3.5 小时。
- **算力与训练耗时**：原文未披露计算硬件型号数量与训练耗时，仅披露预训练为 2,500,000 步且批大小为 1，推理硬件未披露。
- **核心超参数与配置**：优化器与学习率原文未披露，方向网格为 45 行乘 90 列，通道为 16 维，投影为 256 通道，槽位为 16 个，类别为 13 类，频率拼接宽度为 64，掩码解码器为 9 层，损失权重为 2 与 5 与 0.5，焦点损失伽马为 2，类频权重裁切到 0.25 至 4，活动头权重为 1 与 0.1。
- **推理速度与部署开销**：参数量与显存原文未披露，提交时经稀疏压缩满足每录音 20 MB 上限，总量下降 97.81%，最大为 18.70，平均为 8.08，延迟与吞吐原文未披露。
- **开源产物与协议状态**：原文未说明 SAID 代码与权重是否公开，仅引用第三方语义编码器预训练检查点当前可用，仿真依赖公开房间仿真与声音数据集，系统不可直接运行。
- **附录与补充材料要点**：原文未设附录，关键证明与补充消融均在正文，许可限制未披露，失效案例可从消融推断，方差与置信区间未报告。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 7.3/10 | 技术严谨 6.6/10 | 实验充分 7.6/10 | 清晰度 6.9/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.4/10 | 工程/实践 4.9/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-46`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_46.pdf)
- Track：P2-2

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在官方79段约3.5小时评估集上Macro mAP 0.1080与Macro Pearson r 0.3962双项最高并列第一。

- 核心优势：直接消融显示去PaSST后mAP降至0.0260、无预训练崩溃至0.0000，因果证据完整且定位分类解耦清晰。

- 核心优势：提出45×90方向查询球面交叉注意力全景编码器与16槽9层掩膜解码器，给出完整公式与三阶段数据流。

- 主要短板：推理滑窗划分与流式因果未说明且未报告RTF或时延硬件实测，仅有离线压缩存储。

- 主要短板：预训练250万步但优化器与学习率未说明，联合与微调步数及训练硬件时长均缺失。

- 主要短板：官方最佳Macro mAP仅0.1080漏误检仍重，且结论限于4通道13类闭集未验证开放词汇外推。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
