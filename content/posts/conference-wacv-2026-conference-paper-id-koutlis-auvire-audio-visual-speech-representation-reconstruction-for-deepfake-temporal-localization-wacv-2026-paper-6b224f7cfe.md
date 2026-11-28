---
title: "AuViRe: Audio-visual Speech Representation Reconstruction for Deepfake Temporal Localization"
date: 2026-11-28
draft: false
description: "针对音视频局部伪造难以精确定位的问题， AuViRe 以冻结语音表征为基础做跨模态与单模态重建并编码重建差异，在 LAV-DF 上以 99.94 AUC 与 AP@0.95 提升 8.9 个点取得最优，代价是野外分数回落到 75.5 且对音频高斯噪声更敏感。"
tags: ["多模态学习", "音视频", "语音", "伪造片段定位"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨模态语音重建差异如何实现深度伪造时间定位"
paper_digest_original_title: "AuViRe: Audio-visual Speech Representation Reconstruction for Deepfake Temporal Localization"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper"
paper_digest_workbench_source_sha256: "4754a8dd1b4856ab7fd1e91d83ff8ef32e428e7eb5d03bd8e2c489c764585535"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "伪造片段定位"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音视频局部伪造难以精确定位的问题， AuViRe 以冻结语音表征为基础做跨模态与单模态重建并编码重建差异，在 LAV-DF 上以 99.94 AUC 与 AP@0.95 提升 8.9 个点取得最优，代价是野外分数回落到 75.5 且对音频高斯噪声更敏感。"
paper_digest_reader_sections: [{"heading":"局部伪造定位为何需要盯住唇音一致性","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结语音主干加可训练重建与差异编码的全流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"跨模态重建与差异放大的关键设计","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"受控基准上定位与检测为何同时达到最优","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"野外整体分数与失真鲁棒性如何共同变化","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"野外误报主因与部署边界","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Christos Koutlis"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Symeon Papadopoulos"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"81c1c5e3155b735881f59f9f08921f445af23af5297f37f0b0a2b21b4c197830","url":"/audio-research-portal/client/papers/2026-11-28/conference-6b224f7cfe3c958c7519e7a0/citation.bib"},"citation.json":{"sha256":"15a418984d44c1c9b11a388851d6a3a9da11b5c887aaa20c1ed2b84e34da94fe","url":"/audio-research-portal/client/papers/2026-11-28/conference-6b224f7cfe3c958c7519e7a0/citation.json"},"citation.ris":{"sha256":"bd0d4ecdca8ce8710703f49620453c52acad021be4d4b61e1a89d53d368fb498","url":"/audio-research-portal/client/papers/2026-11-28/conference-6b224f7cfe3c958c7519e7a0/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9f30e114574e4ff9388c11bad26b7224d000e55cbf548eb17b765631a048decb","url":"/audio-research-portal/client/papers/2026-11-28/conference-6b224f7cfe3c958c7519e7a0/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "cd68016118d0051788600388e2e96b036dae77c7eccc6d723082eb7f67f04c51"
paper_digest_api_reader_plan_sha256: "0181b3fc1bbae891d513d77ae59a34ab620a5fbbb0e9aadf856d26d15e93de24"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5c1ce05533a5a4e2446e1ff7e821d1cc8e891d4241b63ce0fe7279a283980e95"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4950573bc6bc59554dcb0328dd880338571b5a3534274c65a285e7e49e5691d7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "022ad656803c62dacdb63127f22fdc1371a11a9e2c38cc2905d06ccde5693964"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2499975c5fc37b142ce50193c6440ff8bcc11b1f09a411d62a12972d9826963b"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.forgery-localization","label":"伪造片段定位"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 跨模态语音重建差异如何实现深度伪造时间定位

> 英文题目：*AuViRe: Audio-visual Speech Representation Reconstruction for Deepfake Temporal Localization*

> 会议身份：`conference:wacv:2026:conference-paper-id:Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [伪造片段定位](/audio-research-portal/papers/?concept=task.forgery-localization)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)；[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.4/10** | 创新 7.6/10 | 技术严谨 6.6/10 | 实验充分 8.3/10 | 清晰度 6.5/10 | 影响力 7.3/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 8.1/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Christos Koutlis：机构信息未能从会议 PDF 纯文本可靠映射
- Symeon Papadopoulos：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 任务输入为包含视觉流与音频流的视频，输出为逐帧是否被篡改的标记与篡改片段起止边界，需同时支持细粒度时间定位与粗粒度视频级检测。现有主流路线多做粗粒度视频分类，直接拼接或注意力融合原始音视频信号，忽略了对细粒度跨模态不一致的建模。直接处理原始信号易过拟合到特定伪影，对压缩与噪声等失真鲁棒性不足，难以捕捉高层语义不一致。另一些方法虽使用预提取特征，但依赖通用编码器，缺乏面向语音内容的表示能力。在局部音视频伪造下，保持视听同步的生成器使粗分类失效，定位需要语音相关的帧级判据。

**核心思路与方法架构：** 与最接近的 DiMoDif 直接编码比较语音特征不同，AuViRe 的实质增量是以跨模态重建误差为判据，从音频重建视觉语音表示并放大伪造段差异。单条视频先经冻结的 AV-HuBERT 主干分别提取视觉表示与音频表示，避免模态混合抹除差异。重建模块以一维卷积与下采样编码加反卷积上采样解码实现从音频到视觉表示的预测，并辅以单模态重建，正则化真实样本的重建误差。重建差异编码器对三路误差拼接后的张量做保持与下采样卷积并叠加特征金字塔，输出多尺度伪造特征，再由分类头与回归头给出逐帧篡改概率与边界，并经 SoftNMS 得到片段集合。模型以焦点损失与 DIoU 损失优化定位，以平均绝对误差约束真实样本重建，视频级分数由帧级最大值或野外部署的聚合分数导出，支持离线整段与分块处理。

**关键实验与核心代价：** 在 LAV-DF 测试集上，AuViRe 的 AP@0.95 为 46.5，高于次优 UMMAFormer 的 37.6，AP@0.5 为 98.9，高于 98.8，AR@50 为 94.6，高于 DiMoDif 的 93.7。在 AV-Deepfake1M 上，AP@0.5 为 96.5，高于 DiMoDif 的 86.93，AP@0.95 为 11.7，高于 5.43，AR@50 为 86.0，高于 81.57。视频级检测在 LAV-DF 达到 AUC 99.94，高于 DiMoDif 的 99.84，在 AV-Deepfake1M 达到 AUC 99.8，高于 DiMoDif 的 96.3，野外 371 个视频集合上操纵占比分数达到 AUC 75.5 与 AP 67.2，高于 RealForensics 的 70.4 与 59.9。关键消融显示仅保留视觉自重建时 AP@0.95 跌至 13.25，改用乘法估计差异时为 39.75，改用 Transformer 变体时为 34.55，均低于完整的 46.50，证明跨模态重建不可或缺。代价方面，模型含 12.1M 个可学习参数，单视频特征单次前向需 1.0 GFLOP，野外平均处理时间与视频时长比为 0.58，约 43 FPS，在音频高斯噪声下鲁棒性下降多于对照，仅以检测定位指标评价，未采用人工主观听测。

**适用边界与深读导览：** 结论成立依赖于视频同时含视觉与音频流、存在可检测的说话人脸且口部可观测、有效片段不短于 2 秒等前提，对长镜头、多说话人同框、非英语语音及语音音乐混合等条件性能下降，野外以误报为主。方法未覆盖纯视觉或纯音频伪造的单模态定位，对重度压缩与噪声之外的失真及长时操纵的泛化仍待验证。欲深究重建与差异编码的卷积配置、损失组合与聚合分数的推导，可查阅下方方法概述和架构与实验结果及细节详述对应内容。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/mever-team/auvire> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 局部伪造定位为何需要盯住唇音一致性

生成式音视频合成让局部篡改变得肉眼难辨，伪造者可以只替换一句话的口型与对应波形，其余部分保持真实。这种细粒度操纵直接威胁新闻取证与社交内容可信度，检测系统不仅要给出视频级真假判断，还要标出伪造片段的起止时间。时间伪造定位因此比二分类更贴近实战，也对跨模态一致性提出了更高要求。

原文把输入视频记为时长为 \(Δ\) 秒的样本，视觉流记为 \(Φ\) ，音频流记为 \(h\) ，真值包含逐帧操纵标记 \(p\) 与每帧所属伪造段的起止边界 \(b\) 。目标是学习映射 \(f\) ，输出逐帧伪造概率与边界回归，再经柔性非极大值抑制得到片段集合。视频级判断则由定位结果派生，若没有任何帧被判为伪造即视为真实，这种由细到粗的派生关系是理解后续检测分数的关键。

此前主流路线分为两支，一支只看画面，做空域频域痕迹或数据增强下的单类别异常检测，在完整伪造视频上有效，遇到音画局部篡改容易失效。另一支拼接原始音画特征做注意力融合，直接处理波形与像素容易记住特定生成器的痕迹，遇到压缩与噪声鲁棒性下降。近期时间定位工作改用通用编码器提取高层特征，但通用表征缺少对唇动与语音内容的针对性，难以捕捉细微的口型与发音错位。

AuViRe 的直觉是把语音表征本身作为一致性探针，先用冻结的语音模型分别提取唇动表征 \(x_{v}\) 与音频表征 \(x_{a}\) ，再用可训练网络从音频重建视觉表征，同时保留单模态自重建作为参照。真实片段中跨模态映射容易学准，重建误差小，伪造片段中口型与声音被分别合成，映射关系被破坏，误差显著放大。差异编码器负责放大这种误差并输出多尺度伪造特征，这是它与直接比较特征的本质区别。

### 冻结语音主干加可训练重建与差异编码的全流程

整体流程分为四步，冻结语音主干 \(B\) 先对视觉流 \(Φ\) 与空输入，以及空输入与音频流 \(h\) 分开编码，得到等长序列 \(x_{v}\) 与 \(x_{a}\) ，避免早期混合抹掉跨模态差异。重建模块 \(R\) 把 \(x_{a}\) 与 \(x_{v}\) 分别送入同一结构，输出跨模态重建与两种单模态重建。差异计算与拼接形成 3 倍维度的输入，送入差异编码器 \(E\) 得到金字塔特征 \(f\) ，最后由分类头 \(C\) 与回归头 \(G\) 给出逐帧概率与边界，并用柔性非极大值抑制去重。

要一次看清冻结与可训练的分界、3 路重建从何处分叉又在何处汇合，以及损失从哪些箭头回流，可以沿着结构图自上而下追踪。从顶部胶片与波形符号出发，注意雪花与火焰标记的含义，再看中部红色与下部蓝紫色块的连接方向，虚线与实线的区别是读懂训练与推理的关键。

[![原论文 Figure 1：The proposed AuViRe architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-1.png)

*论文图 1：AuViRe 整体结构：冻结语音主干输出双路表征，经可训练重建与差异编码得到定位与边界（原论文 Figure 1）。*

结构图顶部左右各有一个白色梯形 \(B\) ，左上接入胶片图标 \(Φ\) 与空输入，右下接入空输入与波形图标 \(h\) ，雪花符号表示训练时冻结，右侧分别引出浅黄底 \(x_{v}\) 与浅蓝底 \(x_{a}\) 。中部红色对称块标注为一维卷积与反卷积，火焰符号表示可训练，右侧引出 3 个浅色块，依次为音频到视觉、视觉到视觉、音频到音频的重建。黑色实线箭头向下汇入橙色拼接块，再进入蓝色差异编码器与两侧紫色双头，底部实线汇出概率与边界，左侧暗红虚线标出重建损失、定位损失与总损失的回流路径。

原文未披露采样率与每秒帧数，时间轴统一用帧数 \(t\) 描述，最大序列长度取 512 ，不足补零。表征维度记为 \(d\) ，中间模型维度 \(d_{a}\) 取 128 ，重建网络在 LAV-DF 实例中取预投影 2 层、下采样 3 层、上采样 3 层、后投影 2 层，核尺寸 \(k\) 取 15 。差异编码器取保持 2 层加下采样 2 层，输出多尺度特征。以一段 \(t\) 帧的讲话片段为例，输入经过冻结主干后仍为 \(t\) × \(d\) ，重建后保持同形，拼接后变为 \(t\) × \(d\) · 3 ，再被编码为 \(t\) × \(l\) × \(q\) 的金字塔特征。

训练时只有 \(R\) 、 \(E\) 、 \(C\) 、 \(G\) 参与更新， \(B\) 始终冻结。优化器为 Adam ，初始学习率取 0.001 ，遇平台下降，批大小取 64 ，训练 100 轮，耐心为 10 的早停依据验证集平均精度与召回之和选点，硬件为 NVIDIA GeForce RTX 4090 。推理时对长视频做 20 秒分块，只在人脸面积占比超过 3% 且嘴部运动能量高于阈值的有效片段上运行，短于 2 秒的片段跳过，最终用阈值或扫描式积分得到视频级分数。

### 跨模态重建与差异放大的关键设计

重建模块 \(R\) 本质是一个一维卷积自编码器，预投影用核为 3 步幅为 1 的卷积对齐通道，下采样用核为 15 步幅为 2 的卷积压缩时间分辨率，上采样用对应反卷积恢复长度，后投影再映射回 \(d\) 维，每层后接层归一化与线性整流。同一结构被复用三次，分别学习从音频到视觉、视觉到视觉、音频到音频的映射。设计意图是让网络在真实数据上学会稳定的唇音对应，使伪造段因口型与声音不匹配而难以重建。

差异计算取逐元相减，即重建减去原始目标，记为 \(γ\) ，3 路差异在通道维拼接，得到 \(x\) 。编码器 \(E\) 先用保持时间步的卷积保留细粒度边界，再用步幅为 2 的卷积逐级下采样，并在顶部叠加特征金字塔，形成 \(l\) 个尺度的伪造特征 \(f\) 。相减操作保留方向与幅度，伪造段的大误差会被后续卷积放大。原文消融显示改用相乘会明显变差，说明保留残差符号与线性幅度更为关键。

分类头输出每帧在每个尺度上的伪造概率，回归头输出对应边界的起止偏移。定位损失由焦点损失处理类别不平衡，由距离交并比损失优化边界回归，且边界损失只在真值为伪造的帧上累计。重建损失为平均绝对误差，且只在真实帧上计算，避免让网络去拟合伪造段的对应关系。总损失为两者相加，梯度只回流到重建、编码与双头，冻结主干不接受更新。

输入组合消融最能说明问题，仅用视觉自重建时平均排名垫底，仅用音频自重建同样偏弱，加入跨模态分支后迅速提升，完整 3 路组合取得最佳平均排名。损失组合的波动相对较小，附加视频级交叉熵并未带来稳定增益。更换为另一语音主干或把卷积换成变换器结构也会下降，表明当前容量与归纳偏置更适合捕捉局部唇音错位。

### 受控基准上定位与检测为何同时达到最优

#### 受控划分与评价口径

受控评测沿用 LAV-DF 与 AV-Deepfake1M 的官方划分，前者含 78,703 个训练样本、 31,501 个验证样本与 26,100 个测试样本，后者含 746,180 个训练样本、 57,340 个验证样本与 343,240 个无公开标签测试样本。时间定位用不同交并比阈值下的平均精度与不同召回数下的平均召回，视频级检测用受试者工作特征曲线下面积与平均精度。比较时需注意输入模态与是否同为语音表征，对照方法中 DiMoDif 同样使用语音线索，最能检验重建设计的增量。

下面精简表摘自视频级检测主表，保留 LAV-DF 上接近顶部的对照与本方法，列为方法名、输入模态与曲线下面积。该分数并非单独训练二分类得到，而是由时间定位结果经取最大置信度派生，野外部署时对小而稀疏的检测更为敏感，比较时需结合定位条件理解。

| Method | Modality | AUC |
| --- | --- | --- |
| BA-TFD [7] | AV | 99.0 |
| UMMAFormer [39] | AV | 99.8 |
| DiMoDif [20] | AV | 99.84 |
| AuViRe (ours) | AV | 99.94 |

表中 AuViRe 以 99.94 的曲线下面积居首， DiMoDif 为 99.84 ，通用多模态方法为 99.8 ，差距看似只有零点几个点，但在接近饱和区每一点都对应漏检与误报的实质减少。更重要的是，该视频级最优是在只优化定位损失的条件下涌现的，说明帧级差异特征本身已具备区分性，而非靠视频级监督强行拟合。

#### 时间定位的阈值敏感性

时间定位主表的完整矩阵未在本次结构化证据中给出，这里用论文正文逐字报告的绝对提升整理为对照表，单元格内保留数值与指标的完整写法，避免拆分量纲。行按数据集区分，列为论文明确写出的交并比与召回指标提升，该整理有助于在缺少完整矩阵时仍能核对核心增量。

| 数据集 | 论文报告的绝对提升 |
| --- | --- |
| LAV-DF 时间定位 | +8.9 AP@0.95 |
| AV-Deepfake1M 时间定位 | +9.6 AP@0.5, +13.4 AP@0.75, +14.2 AP@0.9, +6.3 AP@0.95, +4.5 AR@50, +5.0 AR@30, +5.3 AR@20, +6.1 AR@10, +7.2 AR@5 |

最难的严格阈值最能拉开差距， LAV-DF 上 AP@0.95 的 8.9 个点提升意味着在高交并比要求下仍能准确定位边界，而 AV-Deepfake1M 上从宽松到严格阈值全面提升，说明重建差异对长短伪造都有效。由于 DiMoDif 同样使用语音输入，增量可以归因于重建与差异编码，而非单纯换用语音特征。需要提醒的是， AV-Deepfake1M 测试标签未公开，论文经由竞赛平台评测，复现时需走同一通道。

### 野外整体分数与失真鲁棒性如何共同变化

#### 野外落差与评价方式

野外评测收集 371 个社交视频，其中 225 个真实与 146 个伪造，中位时长为 1 分钟，最短 10 秒，最长 11.3 分钟，覆盖 39 种语言。实验室的取最大置信度策略在野外对微小稀疏误报过于敏感，因此提出操纵占比与扫描式积分两种聚合，前者为预测伪造总长占有效总长的比例，后者按重叠区间平均置信度再依时长加权。阈值取 0.01 以压制大量低于该值的含噪预测。

下面精简表为野外整体表现，行为方法，列为曲线下面积与平均精度，两种聚合分别记为 Ψm 与 Ψs 。该表保留了同场比较的语音对照与自监督人脸对照，是判断泛化是否成立的关键，解读时需同时看两列而非单看一列。

| method | AUC | AP |
| --- | --- | --- |
| DiMoDif [20] | 61.6 | 55.7 |
| RealForensics [16] | 70.4 | 59.9 |
| AuViRe (Ψm) | 75.5 | 67.2 |
| AuViRe (Ψs) | 71.0 | 62.3 |

表中操纵占比版本的 AuViRe 以 75.5 的曲线下面积与 67.2 的平均精度领先，扫描式积分为 71.0 与 62.3 ，对照的自监督方法为 70.4 与 59.9 ，另一语音方法仅为 61.6 与 55.7 。与受控基准近 99.9 的分数相比，落差超过 20 个点，说明野外压缩、光照与多样手法仍是主要挑战，但相对优势依然存在。

#### 失真条件下的稳定性

要判断上述优势是否只是记住干净数据的痕迹，需要观察在系统性失真下性能如何随强度衰减。下面的鲁棒性组图把视觉与音频失真分开着色，并给出总体平均，沿横轴失真等级看 4 条曲线的分叉位置，就能定位各自的脆弱环节。

[![原论文 Figure 3：Robustness analysis using visual (cyan plots) and audio (yellow plots) distortions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-3.png)

*论文图 3：十一组失真下定位性能随强度变化曲线与总体平均，比较两种方法（原论文 Figure 3）。*

组图共 12 个子图，横轴均为失真等级 0 到 5 ，纵轴为性能百分比 95 到 100 。前 7 个浅青底为视觉失真，包括饱和度、对比度、分块、视觉高斯噪声、高斯模糊、图像压缩与视频压缩，后 4 个浅黄底为音频失真，包括音频高斯噪声、音高偏移、混响与音频压缩，右下浅绿底为总体平均。对照方法在视觉高斯噪声、视频压缩与音高偏移下紫色点划线下滑更快，本方法红色虚线在多数条件下保持平稳，唯一明显短板是音频高斯噪声，总体平均仍以本方法占优。

### 野外误报主因与部署边界

#### 分语言表现与误报结构

野外分数的分布显示， 146 个伪造中仅 8 个的操纵占比低于 23.27 ，而 225 个真实中有 141 个高于该值，说明落差主要来自误报而非漏检。正确与误判真实样本的阈值分别取低于 12.64 与高于 62.04 ，对两组做人工核查后发现，远景、多人同框、多人轮流讲话与非英语是差异最大的因素，单色、性别、遮嘴与肤色差异较小。

下面精简表按语言拆分野外分数，列出视频数与两种聚合下的曲线下面积和平均精度。英语占 282 个，其余语种样本较少，解读小样本语言的最优值时需考虑方差，该表有助于判断语言多样性是否是误报来源之一。

| Language | Videos (#) | Ψm AUC | Ψm AP | Ψs AUC | Ψs AP |
| --- | --- | --- | --- | --- | --- |
| English | 282 | 77.9 | 64.4 | 73.6 | 60.0 |
| Welsh | 42 | 86.2 | 74.4 | 71.4 | 56.2 |
| French | 24 | 60.1 | 68.3 | 54.5 | 59.7 |
| Greek | 17 | 90.9 | 73.5 | 81.8 | 74.6 |
| Spanish | 16 | 86.7 | 94.2 | 88.3 | 94.8 |

表中希腊语 17 个样本下操纵占比达 90.9 ，西班牙语 16 个样本下平均精度达 94.2 ，威尔士语 42 个样本也高于英语，而法语 24 个样本明显偏低。这种起伏与样本量过小有关，不能直接得出某语言更易伪造的结论。英语作为多数派为 77.9 与 64.4 ，可视为野外基线，跨语言泛化仍需更大规模的均衡评测。

#### 实例对照与部署代价

数字之外的实例更能说明误报来自场景而非身份，下面的并排截图左侧为判对的真实样本，右侧为误判的真实样本，注意比较人物数量、遮挡、镜头切换与字幕叠加，就能理解差异编码器在何种条件下会被干扰，读图时先看边框颜色再看画面细节。

[![原论文 Figure 2：Examples of correctly (left; https : / / www .](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/b51dbd72576b/figure-2.png)

*论文图 2：野外真实样本对照：左侧单人清晰讲话判对，右侧多人遮挡与话筒遮嘴被误判（原论文 Figure 2）。*

左侧绿框为单人近景，人物正对镜头，字幕完整，无遮挡与硬切，背景噪声未影响判断。右侧红框为多人场景，主讲人戴耳机被大话筒遮嘴，前景叠加另一人画中画与多层文字，镜头语言复杂。图 2 附带的短视频地址与补充材料可对照观察，不做额外听感断言。论文给出代码地址，第三方检查显示链接可以访问，仅说明链接可达，权重下载与直接运行条件原文未披露。处理耗时与时长之比为 0.58 ，参数为 12.1M ，约 1.0 GFLOP 与 43 FPS ，快于实时，但仍需有效片段筛选，多人分离与音频噪声是未验证的部署前提。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与每秒帧数，最大序列长度为 512 帧，模型维度为 128 ，卷积核尺寸为 15 ，野外部署按 20 秒分块，有效人脸占比阈值为 3% ，有效片段最短为 2 秒
- **训练与评测数据**：LAV-DF 含 78,703 个训练样本、 31,501 个验证样本与 26,100 个测试样本， AV-Deepfake1M 含 746,180 个训练样本、 57,340 个验证样本与 343,240 个测试样本，野外集含 371 个视频，其中 225 个真实与 146 个伪造，中位时长为 1 分钟，覆盖 39 种语言
- **算力与训练耗时**：训练使用 NVIDIA GeForce RTX 4090 ，训练 100 轮，批大小为 64 ，早停耐心为 10 ，依据验证集平均精度与召回之和选点
- **核心超参数与配置**：优化器为 Adam ，初始学习率为 0.001 ，遇平台下降，最大序列长度为 512 ，模型维度为 128 ，核尺寸为 15 ， LAV-DF 实例重建层为 2 、 3 、 3 、 2 ，差异编码器为 2 加 2 ， AV-Deepfake1M 实例部分层数取 1
- **推理速度与部署开销**：野外平均处理耗时与视频时长之比为 0.58 ，标准差为 0.25 ，可学习参数为 12.1M ，单次前向约 1.0 GFLOP ，含特征提取约 43 FPS ，快于实时，对照方法约为 1.0 倍速
- **开源产物与协议状态**：论文正文给出代码地址为 <https://github.com/mever-team/auvire> ，第三方检查显示链接可以访问，仅说明链接可达，不等同于作者已公开代码与权重，权重下载与直接运行条件原文未披露
- **附录与补充材料要点**：原文提到补充材料含更多正确与误判实例，正文致谢欧洲地平线项目资助，未披露证明附录与许可限制，失效分析集中于远景与多人场景

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.4/10** | 创新 7.6/10 | 技术严谨 6.6/10 | 实验充分 8.3/10 | 清晰度 6.5/10 | 影响力 7.3/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 8.1/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Koutlis_AuViRe_Audio-visual_Speech_Representation_Reconstruction_for_Deepfake_Temporal_Localization_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：LAV-DF上AP@0.95达46.5大幅超越次优UMMAFormer的37.6且四项指标均为最高，AV-Deepfake1M多档AP与AR全面领先最接近语音对照DiMoDif。

- 核心优势：直接消融显示仅视觉自重建跌至AP@0.95为13.25、乘法差异降至39.75、Transformer变体降至34.55，证实跨模态重建路径不可或缺。

- 主要短板：鲁棒性11种失真各5档强度仅以曲线展示而无具体数值且音频高斯噪声降幅大于对照，阈值θ为0.01敏感性未给曲线，压力测试可核对性不足。

- 主要短板：AV-Deepfake1M表注星号表示验证集性能但未明确对应行且跨表小数精度不一致，虽不影响主结论但限制细粒度复核。

- 主要短板：未披露表示维度d、伪造特征维度q与SoftNMS重加权超参，且缺随机种子、完整调度细节与训练时长等复现信息。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
