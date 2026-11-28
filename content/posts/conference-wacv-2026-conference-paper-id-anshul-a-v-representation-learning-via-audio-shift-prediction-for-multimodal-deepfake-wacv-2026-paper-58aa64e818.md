---
title: "A-V Representation Learning via Audio Shift Prediction for Multimodal Deepfake Detection and Temporal Localization"
date: 2026-11-28
draft: false
description: "针对单阶段多模态伪造检测易过拟合已见手法且忽视短片段篡改的问题，本文提出先以分段音频偏移预测自监督学习真视频音画时间对齐再冻结特征支撑检测与定位的两阶段框架，在韩语 KoDF 上以 99.8 的平均精度与 99.8 的曲线下面积达到最优并在 0.95 交并比下定位高出 17.71 个百分点，代价是预训练仍聚焦跨模态对齐而对保持时间一致的篡改建模不足且需全视频离线处理。"
tags: ["自监督学习", "Transformer", "音视频", "音频深度伪造检测", "伪造片段定位"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "以音频偏移预测学习音画对齐支撑伪造检测与时序定位"
paper_digest_original_title: "A-V Representation Learning via Audio Shift Prediction for Multimodal Deepfake Detection and Temporal Localization"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper"
paper_digest_workbench_source_sha256: "1606ff87f06a7877b34ef31f9e63c4c9fb492682bf5e412a0ffec86839db0f6d"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单阶段多模态伪造检测易过拟合已见手法且忽视短片段篡改的问题，本文提出先以分段音频偏移预测自监督学习真视频音画时间对齐再冻结特征支撑检测与定位的两阶段框架，在韩语 KoDF 上以 99.8 的平均精度与 99.8 的曲线下面积达到最优并在 0.95 交并比下定位高出 17.71 个百分点，代价是预训练仍聚焦跨模态对齐而对保持时间一致的篡改建模不足且需全视频离线处理。"
paper_digest_reader_sections: [{"heading":"整段伪造假设为何难以应对短片段篡改与未见手法","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"先学真视频音画时间对齐再冻结抽特征的两阶段思路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结特征复用的三层混合检测与金字塔定位路径","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"跨数据集与跨手法评测中对齐特征的泛化表现","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"分段长度与多样性权重如何影响对齐学习与计算开销","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"时间一致伪造与流式部署前仍需确认的边界","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["College of Computing and Data Science, Nanyang Technological University, Singapore"],"name":"Ashutosh Anshul"},{"affiliations":["College of Computing and Data Science, Nanyang Technological University, Singapore"],"name":"Eng Siong Chng"},{"affiliations":["College of Computing and Data Science, Nanyang Technological University, Singapore"],"name":"Deepu Rajan"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"8f48f9b10c8a719ab9798ee0247d60e537b3163dddafe4da836825e32120d666","url":"/audio-research-portal/client/papers/2026-11-28/conference-58aa64e8185d5b33be26cb52/citation.bib"},"citation.json":{"sha256":"196a1468eb5a0a48dda44c784959be43a9d1f85466496c1b79cce0021d1dd1bb","url":"/audio-research-portal/client/papers/2026-11-28/conference-58aa64e8185d5b33be26cb52/citation.json"},"citation.ris":{"sha256":"6e273597104613eeb937822f34d69be0d1f6da0aa7a802ef2ac1ab3cd7ca9783","url":"/audio-research-portal/client/papers/2026-11-28/conference-58aa64e8185d5b33be26cb52/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4e2186beb1e2aee438a61c45eefff8b7a0a10916a5c81fd547cfc8e21d31aaba","url":"/audio-research-portal/client/papers/2026-11-28/conference-58aa64e8185d5b33be26cb52/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "057eb5ad5a123804e5eb4eedcf7d8fe61a983591f9754685a2c5793c7a7a6207"
paper_digest_api_reader_plan_sha256: "bc5829a22433c29b032dd2d6666e30ee76277c1e97945212ab70fa4a711328dc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cabde0c7d80e266b0e37b1c66b76dd494f9ac3addff5ca926b167d8671d4f609"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ec4b878f059fd71a9d3aee6c7cf4772dd68e6105bf5c6f9809f55db520b119dc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "caf8233adcc388b16e4ecfc17cfeeccb51b64b541f41152cf220d0442afeb60d"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0d85eea89bf017ee4837216bd762bf4bf495a4d18d76a5b0c6da975977d29107"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"task","id":"task.forgery-localization","label":"伪造片段定位"}]
paper_digest_primary_method: "自监督学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 以音频偏移预测学习音画对齐支撑伪造检测与时序定位

> 英文题目：*A-V Representation Learning via Audio Shift Prediction for Multimodal Deepfake Detection and Temporal Localization*

> 会议身份：`conference:wacv:2026:conference-paper-id:Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)；[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [伪造片段定位](/audio-research-portal/papers/?concept=task.forgery-localization)
- **研究方法**：[自监督学习](/audio-research-portal/papers/?concept=method.self-supervised)；[Transformer](/audio-research-portal/papers/?concept=method.transformer)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.0/10** | 创新 7.5/10 | 技术严谨 7.0/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ashutosh Anshul：College of Computing and Data Science, Nanyang Technological University, Singapore
- Eng Siong Chng：College of Computing and Data Science, Nanyang Technological University, Singapore
- Deepu Rajan：College of Computing and Data Science, Nanyang Technological University, Singapore

## 📌 核心摘要

**问题与瓶颈：** 输入为视频帧序列与音频流，输出为整段真伪标签与篡改片段起止时间。单阶段音画伪造检测易聚焦训练集特有的多模态线索，对未见操纵泛化不足。已有自监督音画预训练未充分利用跨模态时间信息，且多假设整段被篡改，忽视仅短片段被改的现实情形。基线 AVAD 需逐帧配对 31 组音画片段并用 InfoNCE 损失拉近同步对，计算昂贵且对非同步对利用不均，另一强基线 AVFF 在分类阶段需微调约 176M 参数的音视频编码器，难以直接用于帧级定位。

**核心思路与方法架构：** 核心直觉是在真视频上先学会细粒度音画时间对齐，再以对齐失配检测并定位伪造。单条视频按互不重叠片段送入视频编码器与音频编码器，分别得到 Tv × f 维视频编码与对齐到同样时长的音频编码，特征维度 f 为 512。音视频编码再按 τ = 8 帧切分为 ns 段，随机偏移生成器在 [-(τ - 1), +(τ - 1)] 范围内为每段音频生成整数偏移并保持首尾段为 0，每段前插入可学习分段令牌形成跨模态表示，经带段内块注意力掩码的 Transformer 编码器融合后预测偏移类别，并以交叉熵损失加权重 λ = 10-3 的段内多样性损失训练。下游冻结预训练编码器与 Transformer 编码器，不再微调，检测拼接未偏移的单模态与跨模态特征经 3 层特征混合层分类，定位则直接拼接三路特征送入 UMMAFormer 回归头做多分辨率时间金字塔预测，全程为离线整视频处理。

**关键实验与核心代价：** 在 FakeAVCeleb 数据集 70% 训练与 30% 评测的同集设置下，本文方法 ACC 为 96.2，低于 AVFF 的 98.6 与 FauForensics 的 99.7，AUC 为 97.6，低于 AVFF 的 99.1 与 FauForensics 的 99.9，属可比但非最优。在 KoDF 跨数据集评测中，本文方法 AP 为 99.8 与 AUC 为 99.8，均高于 AVFF 的 93.1 与 95.5。在 LAV-DF 定位中，本文方法 AP@0.5 为 98.70，略低于 UMMAFormer 的 98.83，AP@0.75 为 96.33，高于 UMMAFormer 的 95.54，AP@0.95 为 55.32，高于 UMMAFormer 的 37.61。关键消融显示 τ = 8 的 AUC 为 97.59，优于 τ = 4 的 97.54 与 τ = 16 的 97.46，λ = 10-3 与 f = 512 最优。主要代价是仍需加载 MARLIN ViT-Base 与 Whisper large-v3 冻结大编码器，同为 512 帧输入本文方法为 4213.13 GFLOPs 与 871.41 ms，远低于 AVAD 的 568102.06 GFLOPs 与 23136.16 ms，但 2240 帧长视频仍需 17121.31 GFLOPs 与 4038.30 ms，原文未披露具体 GPU 型号与显存占用，分类可训参数 28.3M 与预训练可训参数 33.2M 的节省以同集精度回落为代价。

**适用边界与深读导览：** 结论在依赖音画时间不一致的篡改上成立，对保持同步的纯单模态伪影可能失效，作者靠下游加入单模态特征缓解但预训练仍依赖冻结编码器。未覆盖流式音画输入与实时部署约束。欲深究偏移目标生成、分段令牌掩码与两阶段损失权重，可查阅下方方法概述与实验结果中的定位对照与超参消融。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 整段伪造假设为何难以应对短片段篡改与未见手法

近年伪造检测已从单图像单视频单音频的单模态鉴别，转向处理音画同时被篡改的多模态鉴别。生成模型进步让逼真伪造更易批量产生，可能被用于欺诈与误导信息传播。稳健模型不仅要在训练分布内判准整段真假，还要对未见篡改手法与新数据分布保持稳定，这是工程落地的关键要求。单阶段训练容易记住训练集特有的音画组合线索，遇到新手法时稳定性下降，因此需要在真视频上先学习通用时间关系，再做鉴别。多数已有方法默认整段被篡改，而真实情况可能仅改动短片段，因此需要同时回答是否伪造与何处伪造。两阶段思路正是先在真视频上掌握音画时间对应，再以时间不一致作为鉴别与定位依据。

#### 输入形态与两类输出

本文把输入定义为一段视频的帧序列与对应音频的对数梅尔频谱，视频编码与音频编码先各自抽取单模态特征，再做跨模态融合。为对齐两种采样率，视频侧把长视频切分为非重叠短片段逐段编码再拼接为全长逐帧特征，音频侧把频谱经编码与卷积降维后截取与视频等长部分，使两者在帧级一一对应。第一类输出是整视频二分类，给出真或假标签，用准确率 (ACC)，平均精度 (AP) 与曲线下面积 (AUC) 衡量，分数越高越好。第二类输出是时序定位，把伪造看作唯一动作类别，给出每段篡改的起始与结束时间戳，用交并比 (IoU) 阈值 0.50，0.75 与 0.95 下的平均精度衡量，阈值越高对边界越严格。两类任务共用同一套冻结预训练特征，前者经混合层做整视频判决，后者经多分辨率金字塔头做逐帧判决与边界回归。

#### 已有路线与数据分工

已有路线可分 3 类。纯视觉路线聚焦人脸时序，空时，频率，噪声，语义与身份线索，在特定人脸篡改上准确但缺少音频建模，难以抵抗音画联合攻击。多模态路线把两路分开处理后融合，或用对比学习保持弱交互，或用交叉注意力与混合层学习联合表示，但多数仍为单阶段训练。两阶段路线先在真视频上自监督预训练再做鉴别，代表有用音画同步与掩码自编码联合学习特征，但仍存在结构短板。数据分工上，预训练多取自大规模说话人视频，分类训练多在 FakeAVCeleb 上进行并辅以真视频扩充以平衡类别，跨分布检验则转向韩语 KoDF 子集与 LAV-DF 短片段定位，这种分工有助于区分站内拟合与跨分布泛化。

#### 短板与本文两阶段分工

短板集中在两处。第一，同步预训练常需穷举音画配对并用对比损失只推高同步对分数，对其余错位关系利用不充分，推理时逐帧遍历开销大。第二，分类阶段常需微调预训练编码器且只取 16 帧片段，参数量大且难以输出逐帧特征做定位。本文因此提出先在真视频上学习细粒度时间对齐，再冻结抽取单模态与跨模态特征同时支撑检测与定位，避免任务专用微调。常用视频编码器一次仅能处理 16 帧或 32 帧短片段，而 FakeAVCeleb 与 LAV-DF 视频可达 500 帧，本文把长视频切分为非重叠 16 帧片段逐段编码再拼接为全长逐帧特征，为后续分段移位预测与全视频定位保留时间分辨率。

预训练把全长音画编码切分为长度为 \(τ = 8\) 的非重叠片段，对音频施加 \(-(τ - 1)\) 至 \(+(τ - 1)\) 范围内的随机移位并预测移位值，首尾片段固定为零以保留上下文锚点。每段前端插入可学习分段标记，经段内块注意力融合后由两层感知机预测移位类别，用交叉熵损失学习相对同步关系，同时用段内多样性损失约束帧级特征不过度趋同。多样性损失以段内方差的负值计算，权重 \(λ = 0.001\) 经消融选定，下游直接复用冻结特征做整视频分类与全长逐帧定位。

### 先学真视频音画时间对齐再冻结抽特征的两阶段思路

本文采用两阶段框架。第一阶段在真视频上以分段音频偏移预测为自监督目标学习音画时间对齐，第二阶段冻结预训练编码器抽取单模态与跨模态特征做检测与定位。与同步异常检测思路相比，新目标不再穷举每帧配对。与掩码自编码融合思路相比，新流程冻结主干并加入轻量适配器，避免分类时微调约 176M 参数的视频与音频编码器，预训练可训练部分约 33.2M，分类网络约 28.3M，更易输出整视频逐帧特征。

#### 实质增量与信号规格

信号规格方面，视频记为 Tv 帧的帧序列，音频记为 Ta 行梅尔频带数的对数梅尔频谱。视频侧把输入切为互不重叠的 16 帧片段并行送入 VideoMAE 编码器，再经深度可分离与逐点卷积聚合成帧级特征并降至 512 维，拼接得到 Tv × 512 的视频编码。音频侧把输入补齐至 30 秒对应 3,000 帧送入 Whisper 编码器得到 1,500 帧输出，再经核长与步长为 2 的深度卷积与逐点卷积降至 512 维并取前 Tv 帧，得到 Tv × 512 的音频编码。采样率与梅尔频带数等细节原文未披露。按原文 48 帧对应 1.92 秒换算，1 秒样本约对应 25 帧，可据此跟踪形状变化。

#### 1 秒样本的流动对照

为一次看清完整流动，建议沿箭头跟踪 1 秒样本从左右两侧输入到右端双损失的路径。左侧注意两路编码器虚线框与冻结锁标记及卷积投影，中部注意分段移位与段标记插入，右侧注意块对角掩码与双分支输出。下段先概述形状变化，再结合像素解释掩码与损失分工。

[![原论文 Figure 1：Temporal Alignment pretraining: We extract video and audio encodings from the input and generate…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/05d65e33634b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/05d65e33634b/figure-1.png)

*论文图 1：时序对齐预训练流程：音视频编码后音频分段随机偏移并与视觉拼接预测偏移（原论文 Figure 1）。*

原图顶部粉色随机偏移生成器输出一串每段偏移值，如 0，-2，3，-1 等，同时送入中部移位模块与右上交叉熵损失。中部黄色与粉色块分别表示音频分段 ZA 与移位后 Z′A，下方对应视频分段 ZV，两者在拼接处沿特征维拼接成 1,024 维并插入复制后的可学习段标记 S，形成 Tv 加段数行 1,024 列的跨模态表示。中部黑白网格为段内块注意力掩码，3 个黑色方块沿对角分布，只允许同段帧与段标记互见。经 Transformer 编码器后，收集的段标记送入粉色偏移分类头算交叉熵损失，帧级特征送入右下多样性损失分支。

训练目标由段级偏移分类交叉熵损失与段内多样性损失加权相加，权重 λ = 0.001，多样性项取每段帧级特征方差的均值并取负，鼓励同段帧特征保持差异，避免坍缩到相似表示。视频与音频主干权重冻结，仅训练适配器，卷积投影，跨模态变换器与分类头，梯度不回传至 MARLIN 与 Whisper 主干。第二阶段同样冻结，不做任务专用微调，直接复用帧级特征做检测与定位，省去逐帧穷举配对，推理开销随长度近似线性增长。

### 冻结特征复用的三层混合检测与金字塔定位路径

检测阶段冻结并复用预训练编码器与变换器编码器，不再对音频做移位，直接把视觉与音频特征拼接后送入变换器，也不再插入段标记，注意力掩码相应变为 τ × τ 块。预训练只学习跨模态同步，难以覆盖保持时间一致的篡改痕迹，因此同时保留单模态嵌入与跨模态嵌入，用三层特征混合层逐层把跨模态特征与音视频嵌入融合，每层经加法与线性层后再送入下一层，三层输出拼接后送入分类头做二分类，输出对数几率并用二元交叉熵损失训练。

#### 冻结检测头的融合方式

对照原图可按自上而下顺序阅读。顶部先看左右两路人脸帧序列与频谱图如何进入虚线冻结框，中部再看拼接符号与变换器编码器及小掩码，下部重点看粉色混合块内部双解码器结构与蓝色虚线跳接如何汇入最终拼接与分类头。下段据此展开像素细节。

[![原论文 Figure 2：Deepfake detection: We extract visual, audio, and cross-modal features from the pretrained model…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/05d65e33634b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/05d65e33634b/figure-2.png)

*论文图 2：伪造检测流程：冻结编码特征经变换器与三层混合层融合后分类（原论文 Figure 2）。*

原图顶部左侧 3 张重叠人脸帧进入 VideoMAE 编码器加卷积投影的虚线框，右上紫橙频谱进入 Whisper 编码器加卷积投影的虚线框，两框右上角均有蓝色冻结锁标记。两路输出在顶部拼接处汇合后进入浅蓝 Transformer 编码器，右侧配有三块黑色对角方块的小掩码。下方粉色混合层一内含两个黄色 Transformer 解码器层，分别以视频与音频嵌入为辅助输入，输出与中路跨模态特征在相加处汇合后再经前馈网络。混合层二与混合层三以粉条简化表示，蓝色虚线跳接把各层输出汇入底部拼接，最后经紫色分类头输出绿色真与红色假两路。

#### 定位头复用冻结特征的路径

定位阶段沿用同一套冻结特征，把单模态与跨模态嵌入沿特征维拼接后直接送入基于 UMMAFormer 的回归头，不再叠加混合层，因为该头自带平行交叉注意力特征金字塔。金字塔把输入在时间维逐级下采样为 5 个分辨率层级，每层同时预测帧级真假与最近伪造段的起始与结束时间戳，对短片段更敏感。与只取 16 帧微调的方案相比，全视频逐帧特征保留了长程上下文，更适合整视频检测与片段定位共用一套表示。

### 跨数据集与跨手法评测中对齐特征的泛化表现

评测分 4 种场景。数据集上，VoxCeleb2 用于预训练，FakeAVCeleb 按 70% 训练与 30% 评测并补真视频平衡类别，KoDF 与 DFDC 子集测跨数据集，LAV-DF 训练与评测定位。指标上，分类用准确率 (ACC)，平均精度 (AP) 与曲线下面积 (AUC)，数值越高越好，定位用交并比 (IoU) 阈值 0.50，0.75 与 0.95 下的平均精度，阈值越高越严。流程均为整视频离线处理，非流式因果系统。原文未报告人工听测分数与方差区间，本文只讨论仪器指标，不涉及听感判断。

#### 跨数据集对照与趋势解读

下面精简表展示原文 KoDF 跨数据集对照的全部 8 组对照行，涵盖纯视觉与音画两类方法。列为方法名，模态，KoDF 上 AP 与 AUC，数值越高越好。英语数据训练的模型在此测韩语数据，可检验语言与分布变化下的稳定性，实际可运行策略均为整视频直接推理，无需任务专用微调。

| Method | Modality | KoDF [26] AP | KoDF [26] AUC |
| --- | --- | --- | --- |
| Xception [41] | V | 76.9 | 77.7 |
| LipForensics [17] | V | 89.5 | 86.6 |
| FTCN [60] | V | 66.8 | 68.1 |
| RealForensics [18] | V | 95.7 | 93.6 |
| AV-DFD [61] | AV | 79.6 | 82.1 |
| AVAD [14] | AV | 87.6 | 86.9 |
| AVFF [36] | AV | 93.1 | 95.5 |
| Ours | AV | 99.8 | 99.8 |

表中本方法以 99.8 的 AP 与 99.8 的 AUC 列首位，高出次优的纯视觉 RealForensics 的 95.7 与 93.6，以及两阶段融合思路 AVFF 的 93.1 与 95.5。单阶段音画方法 AV-DFD 仅 79.6 与 82.1，同步异常检测思路 AVAD 为 87.6 与 86.9，纯视觉 FTCN 低至 66.8 与 68.1，唇动思路 LipForensics 为 89.5 与 86.6，卷积对照 Xception 为 76.9 与 77.7。跨语言仍保持高分，说明对齐特征不过度依赖特定语种的口型对应，更具分布外稳定性，且保持较少可训练参数。

#### 站内与定位场景的补充与未胜出项

其余场景引用原文完整表格，本精简表未列出。站内 70% 与 30% 划分下原文完整 Table 1（本精简表未列出）显示本方法 ACC 为 96.2，AUC 为 97.6，低于 AVFF 的 98.6 与 99.1，也低于只取 25 帧的人脸动作单元思路的 99.7 与 99.9，但后者难做定位。留一手法评测原文完整 Table 2（本精简表未列出）在真实视觉假音频与假视觉真音频上达到最优，相比 AVFF 分别高出 6.4 个百分点 AP 与 7.1 个百分点 AUC，以及 5.1 个百分点 AP 与 0.9 个百分点 AUC。

在含换脸生成对抗网络的组合上，纯视觉与单阶段方法波动大，本方法保持稳定。定位原文完整 Table 4（本精简表未列出）在 0.75 与 0.95 阈值上最优，在 0.50 上与原定位头可比，在 0.95 上高出 17.71 个百分点。DFDC 结果仅见附录，原文未报告人工听测与方差区间，也未评测流式与强压缩条件，站内未胜出项提示对齐特征并非在所有整视频指标上占优。

### 分段长度与多样性权重如何影响对齐学习与计算开销

效率对照复刻同步异常检测思路的推理过程，测 48 帧与 512 帧两种长度，48 帧为最接近 50 帧的 16 倍数，另测 2,240 帧长视频。指标为 GFLOPs 计算量与毫秒级耗时，越低越好。原文完整 Table 5（本精简表未列出）显示本方法在 48 帧上约 1,259.14 GFLOPs 与 194.10 ms，远低于对照的 53,259.57 GFLOPs 与 1,956.29 ms。在 512 帧上本方法约 4,213.13 GFLOPs 与 871.41 ms，对照高达 568,102.06 GFLOPs 与 23,136.16 ms。在 2,240 帧上本方法约 17,121.31 GFLOPs 与 4,038.30 ms，约 4 秒处理 89.60 秒视频，随长度近似线性增长。

#### 超参分组的说明

下面精简表展示原文超参消融的全部 10 组数据行加表头，覆盖分段长度，多样性权重与特征维度 3 组。默认取 τ = 8，λ = 10−3，特征维度 512，单次只变一组。列为超参分组，取值，AP 与 AUC，越高越好。本表已含 τ = 16 与 λ = 10−2 等关键行，首列空白行归属见后段解释。

| Hyperparameter | Value | AP | AUC |
| --- | --- | --- | --- |
|  | 4 | 99.94 | 97.54 |
|  | 8 | 99.94 | 97.59 |
| Segment Size, τ |  |  |  |
|  | 16 | 99.94 | 97.46 |
|  | 32 | 99.93 | 97.53 |
|  | 0 | 99.92 | 96.97 |
| Diversity Loss Weight, λ | 10−3 | 99.94 | 97.59 |
|  | 10−2 | 99.94 | 97.52 |
| Feature Dim, f | 512 | 99.94 | 97.59 |
|  | 256 | 99.91 | 96.42 |

分段长度上 τ = 8 的 AUC 为 97.59，略高于 τ = 4 的 97.54 与 τ = 16 的 97.46，τ = 32 为 97.53，AP 均在 99.93 至 99.94 间波动很小。过短缺少时序上下文，过长则段数减少，每视频难以覆盖负 7 至正 7 的全部偏移。首列空白的 4，8，16，32 行同属分段长度组，0 与 10−2 行同属多样性权重组，256 行同属特征维度组。

多样性权重上 λ = 10−3 的 AUC 为 97.59，高于 λ = 0 的 96.97，λ = 10−2 回落至 97.52，说明适度多样性避免帧特征坍缩，过大则削弱偏移预测。特征维度 512 的 AUC 为 97.59，高于 256 的 96.42，更大维度未试。

#### 开销优势与缺失消融

效率优势来自免去逐帧遍历配对，一次前向即可给出全视频特征，而对照需为每一视觉段配 31 个音频段并逐次过同步模型。代价是超参差异在 AP 上仅千分之几，AUC 差异更明显，说明分类阈值附近仍敏感。缺失消融包括混合层层数，适配器结构，掩码形状与定位头层级，均未在主文量化。更大特征维度如 768 或 1,024 因参数二次增长未试，资源受限场景仍选 512 更稳妥。

### 时间一致伪造与流式部署前仍需确认的边界

#### 假设边界与特征复用

方法的主要假设是伪造会破坏音画时间对齐，预训练因此只建模跨模态同步。当篡改保持时间一致，如仅替换身份而保留口型节奏，或只改音频语义而不错位，对齐线索减弱，效果可能下降。第二阶段虽加入单模态嵌入弥补，但预训练阶段未显式建模单模态伪影，且依赖冻结的 MARLIN 与 Whisper 主干，若主干对新域人脸或语言覆盖不足，对齐质量也会受限。未来需同时捕捉跨模态与模态内痕迹。对照方法需对每一视觉片段遍历 31 个音频片段并生成 \(T × 31\) 分数矩阵，而本文用分段移位预测一次前向完成全长对齐学习，这种粒度选择直接影响定位可行性。首尾两段移位固定为 0 以保留边界重叠，中间段在全部移位区间内无放回抽样，使单条视频即可覆盖多种相对错位。

第二阶段用 3 个混合层把跨模态特征与音画单模态嵌入逐层丰富后拼接判决，每层先以跨模态特征吸收两路单模态信息，再经相加与线性变换送入下一层，三层输出拼接后送入分类头。块注意力把跨模态变换器的感受野限制在段内，段标记汇总本段对齐证据用于移位分类，多样性损失则排除段标记后最大化段内帧级特征方差，防止帧特征坍缩。定位阶段把拼接特征直接送入 5 个层级下采样金字塔头，预测逐帧标签与邻近篡改段起止时间。这种复用冻结特征的设计减少了可训练参数，分类约 28.3M，预训练约 33.2M，明显少于微调视频与音频编码器所需的约 176M。只处理 25 帧的站内高分方法难以输出全长逐帧特征，也从侧面说明冻结全长特征对短片段定位的价值。

#### 数据覆盖与部署边界

训练与评测均为整视频离线处理，需看到完整序列再抽特征，未扩展至流式音画输入。预训练在 VoxCeleb2 真实视频上学习对齐，分类在 FakeAVCeleb 上训练并以 VoxCeleb2 真实样本补齐类别平衡。定位在 LAV-DF 短片段上有效，但在真实压缩、转码、混响与多说话人条件下的稳定性未量化。跨数据集仅在韩语 KoDF 子集与附录 DFDC 上检验，语种与采集设备的覆盖仍窄。原文未给出人工听测与置信区间，仪器指标高不直接等同人耳可辨。

长视频实测覆盖 48 帧、512 帧与 2240 帧等不同长度，分别对应 1.92 秒、20.48 秒与 89.60 秒，约 1.5 分钟视频仅需约 4 秒处理，耗时随长度近似线性增长，但该结论仍限于离线切分编码条件。视频侧把输入切为互不重叠的 16 帧片段并行编码后拼接为全长特征，音频侧补足 30 秒输入后经步长为 2 的下采样再截取前 \(Tv\) 帧与视频对齐，为冻结复用提供了执行前提。

#### 复现前提与选型参考

复现前提需分三件事看。代码方面，原文脚注给出仓库链接，其当前可用状态未经确认，不宜视为已公开。权重方面，视频侧 MARLIN 检查点与音频侧 Whisper large-v3 检查点为第三方预训练权重，本文适配器与变换器权重是否提供下载原文未披露。系统方面，是否可直接运行一键推理原文未说明。超参默认值 \(τ = 8\)、\(λ = 0.001\) 与特征维度 512 已给出，但优化器、学习率与批大小等原文未披露，附录补有移位生成算法与定位头图解。

若任务需同时做整视频鉴别与短片段定位，且希望一套冻结特征复用并保持较少可训练参数，该框架更合适，尤其适合长视频离线分析。此时应重点考察高阈值定位精度与跨手法稳定性，而不仅看站内整视频分数。若只追求站内整视频准确率最高，或伪造保持严格时间一致，对齐增益有限，可优先补强模态内伪影建模。原文未提供演示页，复现时建议对照纯视觉与单阶段融合对照方法，在同一划分下比较整视频分数与高阈值定位精度，并检查长视频耗时是否随长度线性增长。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频为帧序列输入，音频为对数梅尔频谱输入，Whisper 需补齐至 30 秒对应 3,000 音频帧并输出 1,500 帧，经步长 2 下采样后取前 Tv 帧对齐视频，分段长度 τ = 8，特征维度 f = 512，48 帧对应 1.92 秒，512 帧对应 20.48 秒，采样率与梅尔频带数原文未披露
- **训练与评测数据**：VoxCeleb2 用于自监督预训练，FakeAVCeleb 按 70% 训练与 30% 评测并补充 VoxCeleb2 真视频平衡类别，KoDF 与 DFDC 子集用于跨数据集评测，LAV-DF 用于时序定位训练与评测
- **算力与训练耗时**：原文未披露训练所用 GPU 或 TPU 型号数量与训练步数耗时，仅给出推理侧计算量与耗时对照
- **核心超参数与配置**：分段长度 τ = 8，多样性权重 λ = 0.001，特征维度 f = 512，视频编码器初始化自 MARLIN 的 ViT-Base 检查点，音频编码器初始化自 Whisper large-v3 检查点并冻结，优化器学习率与批大小原文未披露
- **推理速度与部署开销**：冻结推理无需微调，分类网络约 28.3M 可训练参数，预训练可训练部分约 33.2M，48 帧约 1,259.14 GFLOPs 与 194.10 ms，512 帧约 4,213.13 GFLOPs 与 871.41 ms，2,240 帧约 17,121.31 GFLOPs 与 4,038.30 ms
- **开源产物与协议状态**：原文脚注给出代码仓库链接，其当前可用状态未经确认，权重下载与可直接运行状态原文未披露，不宜视为已公开
- **附录与补充材料要点**：附录含随机偏移生成算法说明，定位头结构图解与更多实现细节，DFDC 跨数据集结果置于附录，主文未报告方差区间与失效案例

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.0/10** | 创新 7.5/10 | 技术严谨 7.0/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Anshul_A-V_Representation_Learning_via_Audio_Shift_Prediction_for_Multimodal_Deepfake_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：KoDF跨数据集AP与AUC均为99.8超越AVFF的93.1与95.5，LAV-DF的AP@0.95为55.32大幅高于UMMAFormer的37.61。

- 核心优势：512帧以4213.13 GFLOPs与871.41 ms较AVAD的568102.06 GFLOPs与23136.16 ms实现百倍级效率优势，且冻结复用无需微调。

- 核心优势：对τ、λ与f做系统超参消融，λ=0时AUC为96.97而λ=10-3时为97.59，验证多样性损失防坍缩作用。

- 主要短板：方法聚焦跨模态对齐，对保持时间一致的操纵效果可能下降，预训练未显式建模单模态伪影且仅支持离线整视频处理。

- 主要短板：FakeAVCeleb同集ACC为96.2低于AVFF的98.6，LAV-DF的AP@0.5为98.70略低于98.83，DFDC仅附录提及且无统计检验。

- 主要短板：未说明优化器、学习率、批量、轮数与硬件时长及Transformer层数适配器结构，图像尺寸与梅尔bins等复现关键配置缺失较多。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
