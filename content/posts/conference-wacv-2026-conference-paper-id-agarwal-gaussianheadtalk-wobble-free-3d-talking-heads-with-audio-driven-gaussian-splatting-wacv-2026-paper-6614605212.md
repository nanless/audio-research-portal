---
title: "GaussianHeadTalk: Wobble-Free 3D Talking Heads with Audio Driven Gaussian Splatting"
date: 2026-11-28
draft: false
description: "针对单目音频驱动人头的抖动问题，论文用两阶段高斯绑定加变换器音频到 FLAME 参数预测实现实时稳定渲染，用户研究中自然度 9.8 分居首，代价是仅限头部且需专人训练。"
tags: ["Transformer", "音视频", "语音", "语音驱动人像视频生成"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "无抖动音频驱动三维人头如何用高斯泼溅实现"
paper_digest_original_title: "GaussianHeadTalk: Wobble-Free 3D Talking Heads with Audio Driven Gaussian Splatting"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper"
paper_digest_workbench_source_sha256: "ab89ff0467e4405adaf0236c9dd1ce7b615505845e414bba9e8a3054a84b45c7"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音驱动人像视频生成"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单目音频驱动人头的抖动问题，论文用两阶段高斯绑定加变换器音频到 FLAME 参数预测实现实时稳定渲染，用户研究中自然度 9.8 分居首，代价是仅限头部且需专人训练。"
paper_digest_reader_sections: [{"heading":"单目视频加任意音频驱动人头为何总在抖动","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两阶段流水线如何把音频变成稳定的头运动","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"高斯绑定与音频到表情参数映射的分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"自重演与跨重演中质量稳定与口型同步的表现","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉参数优化与完整运动迁移后损失了什么","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"只做头部与依赖专人训练带来的边界与选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Edinburgh"],"name":"Madhav Agarwal"},{"affiliations":["University College London"],"name":"Mingtian Zhang"},{"affiliations":["University of Edinburgh"],"name":"Laura Sevilla-Lara"},{"affiliations":["University of Edinburgh"],"name":"Steven McDonagh"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9cd878c36692bd02f05a01ab2234e0ba264606265fa89ac7f47606e97a59177d","url":"/audio-research-portal/client/papers/2026-11-28/conference-661460521255e21d8ed2f04c/citation.bib"},"citation.json":{"sha256":"108bcd511175c495f70c8e5b897667cb239c4d1bd0a28b6f2c3bf440ed659e3c","url":"/audio-research-portal/client/papers/2026-11-28/conference-661460521255e21d8ed2f04c/citation.json"},"citation.ris":{"sha256":"89508e107022ddc1277fb6e3b9d6e08be850113162e98ebf6cbf2dba30151052","url":"/audio-research-portal/client/papers/2026-11-28/conference-661460521255e21d8ed2f04c/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"05f5eac9a17e15d6b99f700d9b3f5af05038887b76027ccabf4930408dbfe46c","url":"/audio-research-portal/client/papers/2026-11-28/conference-661460521255e21d8ed2f04c/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "bc58034bda268c8686a4a99cda4f2e9a81022952a2111163d308604086043dd0"
paper_digest_api_reader_plan_sha256: "ee9069c3492c961b336b9a653687a4d84342e6a16dec18adc5a0de2383cba189"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "fbc86e12fc91c3f7fac5e06bb08a1a392760a15a43f0b57b229a826d29551569"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8b1ab8bb302ec57ccb3ae37fbd92d50f9cbd9890b3511b442178f23a07023a40"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "622e5e4ab7829f859752fcad413a637abf3e0242340daee3a60b604122a8dc8a"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8fff5ac0301603ae92b1e7813f1500c624ffa633f2d94c4b2d79f162df9dbca1"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.talking-portrait","label":"语音驱动人像视频生成"}]
paper_digest_primary_method: "Transformer"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 无抖动音频驱动三维人头如何用高斯泼溅实现

> 英文题目：*GaussianHeadTalk: Wobble-Free 3D Talking Heads with Audio Driven Gaussian Splatting*

> 会议身份：`conference:wacv:2026:conference-paper-id:Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频驱动视频生成](/audio-research-portal/papers/?concept=task.audio-driven-video) → [语音驱动人像视频生成](/audio-research-portal/papers/?concept=task.talking-portrait)
- **研究方法**：[Transformer](/audio-research-portal/papers/?concept=method.transformer)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)；[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 7.2/10 | 技术严谨 6.4/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 1.5/10 | 可复现 5.2/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Madhav Agarwal：University of Edinburgh
- Mingtian Zhang：University College London
- Laura Sevilla-Lara：University of Edinburgh
- Steven McDonagh：University of Edinburgh

## 📌 核心摘要

**问题与瓶颈：** 任务输入为一段单目人物视频与任意语音音频，输出为保留人物身份且口型与音频同步的人像视频。扩散模型虽能生成高质量图像，但推理缓慢且在单图条件下缺乏运动先验，难以满足实时交互。3D 高斯泼溅（3D Gaussian Splatting，3DGS）可实现实时渲染，但现有音频驱动方案多为逐帧独立预测形变，或依赖单目跟踪得到的 3D 可形变人脸模型（3D Morphable Model，3DMM）参数。跟踪误差与缺失长时约束会造成面部区域高频抖动，在视觉上形成晃动与闪烁，制约真实应用。

**核心思路与方法架构：** 与最接近的 GaussianTalker 和 TalkingGaussian 直接预测三平面形变偏移不同，本文保留 GaussianAvatar 绑定式头像并联合优化人脸表情与形状模型（FLAME）参数，仅将音频到表情的映射改为带人物风格嵌入的 Transformer 预测。以 25 fps 视频为例，经通用人头对齐跟踪（Versatile Head Alignment，VHAP）得到真值网格并平均为中性模板网格，音频经冻结的 Wav2Vec 2.0 编码器加线性层得到逐帧特征。Transformer 解码器在周期位置编码与因果掩码下融合长时语义，输出顶点偏移并与风格编码器得到的身份嵌入相加，再经运动解码器映射为不足 100 维的 FLAME 表情与下颌参数。用音频预测唇动并从原视频直接搬运头部姿态，再驱动人物专属高斯头像渲染，在 45.4 FPS 下实现离线训练后实时推理。

**关键实验与核心代价：** 在高清语音视听数据集（High-Definition Talking Face，HDTF）10 名受试者上取前 30 秒为测试集的自重演中，本文 PSNR（越高越好 ↑）为 29.1233，高于次优 IPLap 的 29.0412，结构相似性（Structural Similarity Index Measure，SSIM，越高越好 ↑）为 0.9477，高于 IPLap 的 0.9462，学习感知图像块相似度（Learned Perceptual Image Patch Similarity，LPIPS，越低越好 ↓）为 0.0338，低于 IPLap 的 0.0340，自重演稳定性（Stability score，越低越好 ↓）为 0.6201，低于次优 IPLap 的 0.6633。唇同步采用同步置信度（Sync confidence score，越高越好 ↑），自重演为 6.528，低于 EDTalk 的 7.144 和 Ditto 的 7.023，跨重演为 6.122，低于 EDTalk 的 6.982、Ditto 的 6.844 和 TalkingGaussian 的 6.146，表明图像质量与稳定性同表最优而同步居第三至第四。30 人主观三选排序显示自然度 9.8 高于 TalkingGaussian 的 6.2 与 GaussianTalker 的 4.0，唇同步 7.8 高于 7.2 与 5.0。消融显示去掉参数优化后 PSNR 回落至 27.6987 且稳定性升至 1.1432，仅搬运唇动而固定头部时 PSNR 为 23.5621，证实全量运动搬运的必要性，代价是需人物专属训练且头部运动非音频生成，实时性 45.4 FPS 低于 TalkingGaussian 的 72.2 FPS 和 GaussianTalker 的 59.6 FPS。

**适用边界与深读导览：** 结论仅在人物专属头像、头部区域建模与原视频头部运动可搬运前提下成立，未覆盖半身与全身重演、单图即用或大幅头部转动下的失效模式。项目页提供演示视频，可对照晃动差异观察基线区别，但本文未验证情绪与语速控制。欲深究高斯与网格绑定推导可查下方方法概述和架构，稳定性定义与消融细节可查实验结果与局限与问题。

## 🔗 开源与复现资源

- 演示资源：<https://madhav1ag.github.io/gaussianheadtalk> → <https://madhav1ag.github.io/gaussianheadtalk/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单目视频加任意音频驱动人头为何总在抖动

典型任务是从一段短单目视频与一段任意语音出发，为特定人物生成看似在说该语音的视频。输入是人物外观视频与独立音频，输出是与音频对齐的口型视频，要求保持身份与视觉真实感。这类化身可用于教学讲解、远程医疗助手、视频会议与多语配音，制作方希望降低重复拍摄成本。同一身份模板加不同音频，应产生不同唇动但身份不变，头部姿态则需要额外约束。

#### 已有路线与速度差异

已有路线可分 4 类。二维生成方法以单图加关键点或隐向量驱动像素，生成视频分辨率最高为 256 × 256 像素，推理较快但缺少三维几何，转动与身份保持较弱。扩散方法生成质量较强，但推理缓慢且计算开销大，单图输入缺少时间运动信息，容易出现头部僵硬与躯干失真。神经辐射场方法从多图学习辐射场并用音频控制，在 NVIDIA V100 GPU 上渲染速度常为每秒不足 1 帧，难以实时。近期三维高斯泼溅方法把高斯绑定到参数网格并用音频预测形变偏移，渲染可达实时，但逐帧独立生成与跟踪误差会引入抖动。

在二维路线中，早期方法用面部关键点映射动作到像素空间，三维可变形模型把二维图像映射到三维再返回二维以控制头部转动，但映射不准会损失身份。音频驱动方法侧重唇形同步，头部动作多从训练数据非确定学习，难以保证稳定。在三维路线中，神经辐射场需为特定人物训练，头部与躯干分网建模灵活性受限，多视角合成数据学习的表示同样难以实时。高斯泼溅把高斯绑定到 FLAME 三角面片，用音频融合预测形变偏移，虽可实时渲染，却因缺少长时约束而易晃动。

#### 抖动成因与解耦对策

抖动的核心瓶颈来自时间信息使用不当。一方面，单目彩色视频估计三维网格参数容易出现偏差，若高斯与三角面片对齐不准，渲染会在脸部边缘闪烁。另一方面，若把视频渲染当成逐帧独立任务，帧间缺少约束，鼻部与脸颊轮廓会出现高频振荡。语音与唇动相关性较高，但语音与头部运动不存在一一映射，同一句话可对应多种合理头部动作，直接从音频回归像素空间维度过高且非线性很强，难以覆盖真实外观分布。

为此，论文提出用解耦参数做中间表示，并用长时音频上下文约束连续帧。方法保留人物专属风格嵌入以维持身份，直接预测 FLAME 人脸参数模型表情参数而非数千顶点位置，把学习目标压缩到不足 100 个参数。同时提出混合稳定性分数，用鼻部关键点时间信号加快速傅里叶变换（FFT）捕捉高频抖动，把主观稳定变成可计算指标。贡献可记成三点：基于变换器的音频到参数预测、稳定性度量、实时且兼顾质量与稳定的完整流程。高斯泼溅负责实时成像，人脸参数模型负责解耦控制，变换器负责长时约束，三者搭配把外观、运动与时间分工解开，新增作用是让连续帧预测共享语义上下文，从而减少晃动。

为落实解耦，流程分两阶段执行。第一阶段从输入视频学习人物专属高斯头像，保证每个三角面片至少对应一个高斯，并同步优化平移、姿态与表情参数以缓解错位。第二阶段学习音频到表情参数映射，唇动由音频预测，头部运动由原跟踪序列迁移，避免对弱相关量强行回归。稳定性度量取鼻部关键点时间信号，平均运动差刻画漂移，运动幅度方差刻画起伏，高频功率刻画快速振荡，三项归一化后取均值，数值越低越稳定。

### 两阶段流水线如何把音频变成稳定的头运动

完整流程分两个阶段。第一阶段从身份专属视频学习高斯头模型，用 VHAP 跟踪得到网格与 FLAME 参数，再优化高斯位置、缩放与 FLAME 平移、姿态、表情，使三角面片与高斯保持稳定绑定。第二阶段学习音频到 FLAME 的映射，用冻结的 Wav2Vec 2.0 编码器加可训练变换器块提取长时语义，结合人物模板网格的风格嵌入预测表情参数。推理时用中性模板加任意音频生成网格序列，唇动来自音频预测，头部运动从原视频迁移，最后经三维高斯泼溅渲染输出。

要一次看清两条支路如何汇合，建议沿下图从左向右阅读。左侧是单目视频与输入音频，中间上方蓝色虚线框为高斯头建模，中间下方红色虚线框为音频到参数模型，右侧为渲染器与生成视频。请先看箭头走向，特别注意优化后 FLAME 参数与唇动参数两处回送位置，这是理解稳定来源的关键。

[![原论文 Figure 2：We introduce GaussianHeadTalk, which comprises of Gaussian Head Modeling and audio to facial…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-2.png)

*论文图 2：两阶段流程总览：上方蓝色高斯头建模与下方红色音频到参数模型汇合至右侧渲染（原论文 Figure 2）。*

图中左侧单目视频先进入 FLAME 跟踪器，得到跟踪参数并送入三维高斯化身，输出优化后 FLAME 参数至右侧渲染器。下方音频经冻结 Wav2Vec 2.0 的时间卷积与多头注意力，再经线性投影层进入可训练变换器块，包含自注意力、交叉注意力与前馈层。模板网格经风格编码器得到嵌入，与音频特征相加后送入运动解码器，生成多帧网格并把唇动参数回送渲染器，最终得到生成视频。

以 25 fps 视频的 1 秒为例，约对应 25 帧图像与同步音频。音频按帧切分为特征序列，变换器对第 t 帧只可见 0 至 t 的历史并用二值对齐掩码屏蔽未来，避免信息泄露。模板网格取跟踪网格的平均值编码为身份嵌入，每帧潜在偏移与该嵌入相加后解码为 FLAME 参数。原文未披露音频采样率、帧长步长与特征维度，因此张量宽度的具体数字无法复述。头部姿态与表情的非唇动部分从原视频完整迁移，推理为因果逐帧方式，原文称可实时渲染但未在可核验表中给出延迟与显存数字。

### 高斯绑定与音频到表情参数映射的分工

高斯头建模沿用高斯化身思路，方法基于 PyTorch 实现。场景用 \(K\) 个各向异性三维高斯表示，每个包含中心位置、缩放向量、四元数朝向、不透明度与球谐颜色，协方差分解为旋转与缩放以便高效存储与渲染。初始化时每个 FLAME 三角面片至少绑定一个高斯，依据顶点均值、边方向与法向量放置，再按视空间位置梯度分裂或克隆，按局部复杂度增减数量，并剪除极低不透明度点。与依赖包围层次最近三角搜索的方法不同，该绑定对跟踪误差更具包容性，训练时同时优化高斯位置缩放与平移姿态表情参数，以缓解网格与高斯错位并稳定渲染输出。

#### 音频到运动与身份保持

音频到运动模块先用冻结的 Wav2Vec 2.0 音频编码器提取表示，再加线性投影层得到每帧特征。为补充时序，解码侧使用周期位置编码，二值掩码保证第 \(t\) 帧只能利用历史音频，避免未来信息泄漏。变换器捕捉句子级长程语义，直接预测不足 100 个 FLAME 表情参数，比直接预测数千顶点位置更易学习，也比端到端预测高斯形变偏移更具语义可控性，为连续帧提供来自音频的时间约束。

身份保持靠模板网格与风格编码器实现。中性模板取同一人所有跟踪网格的平均值，输入视频先经 VHAP 跟踪得到真值网格与中性模板，再编码为身份嵌入 \(S\)。每帧潜在顶点偏移与 \(S\) 相加得到风格化嵌入，再经多层线性运动解码器映射到 FLAME 空间，逐帧生成预测网格序列。音频内容与人物身份由此分开建模，避免外观分布干扰唇动学习，也让同一语音能保持不同人的样貌特征。

#### 监督聚焦与训练分工

训练聚焦下颌与唇动参数，把真值网格的唇动部分增强为监督目标，用预测网格与真值网格在顶点空间的二范数损失求和，覆盖全部 \(T\) 帧与 \(N\) 个顶点。头部运动因与音频相关性弱，直接从原跟踪序列迁移，而非从音频强行回归。这种分工使强相关量由模型预测，弱相关量由视频约束，减少不存在一一映射带来的不确定性，也避免逐帧独立生成带来的抖动。

参数冻结边界清晰：Wav2Vec 2.0 保持冻结，只更新投影层、变换器、风格编码器与运动解码器，高斯化身在第一阶段独立优化。训练先在 VOCASET 数据集上预训练音频到参数映射 50,000 步，优化器为 ADAM 自适应矩估计方法，学习率为 \(1e-4\)，硬件为单块 NVIDIA Tesla A100 GPU，显存为 40 GB。VOCASET 提供音频视频与已跟踪参数，HDTF 则用于专人高斯头像训练与评测，分工对应预训练学通用语音表情关联，专人阶段学外观细节。

稳定性度量取鼻部关键点时间信号，因鼻部受张口与表情影响小，再结合快速傅里叶变换捕捉高频抖动。平均运动差、运动幅度方差与高频功率三项按各自最大值归一化后取均值，数值越低表示抖动越小。冻结编码器提供语音表示，风格编码器提供身份表示，运动解码器提供参数映射，三者搭配把内容、身份与控制分开，新增作用是以低维参数约束高维外观，保证唇动准确同时不破坏身份。推理时只需中性网格与任意语音，即可预测连续 FLAME 参数并驱动人物专属高斯头像，实现实时合成。

### 自重演与跨重演中质量稳定与口型同步的表现

评测覆盖两个数据集与两种重演。VOCASET 提供音频视频与三维扫描，用于预训练音频到参数模块。HDTF 提供高清音视频，选取 10 个身份，每个至少 4 分钟，统一转码为 25 fps。自重演取每段前 30 秒做测试，其余做专人训练。跨重演用语音合成模型生成 15 个片段，覆盖 5 种语言，平均时长为 7 秒，音频与训练身份无关。指标方向为 PSNR 越高越好，SSIM 越高越好，LPIPS 越低越好，Sync 置信度越高越好，稳定性分数越低越好，FPS 越高越好，所有高斯与神经辐射场方法均为专人训练，保证公平。

要对比自重演的口型与细节，建议先看下图三列不同身份与四行方法，重点观察每幅大图右侧放大的嘴部小图。第一行与第二行为两种高斯基线，第三行为真值，第四行为本文方法，虚线分隔不同人物。阅读时先看中间列的嘴形开合，再看右侧列脸颊与衣领交界，比较边缘清晰度与伪影差异。

[![原论文 Figure 4：Self-Reenactment Results: We show qualitative results between the Gaussian based methods by…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-4.png)

*论文图 4：自重演三人物对比：两基线、真值与本文方法的全脸与嘴部放大（原论文 Figure 4）。*

像素显示左侧光头人物、中间深色西装人物与右侧深色皮肤人物在相同音频下的嘴形。基线在部分帧嘴部开合偏小或牙齿模糊，右侧列脸颊与衣领交界处偶见错位。本文方法嘴部开合更接近真值行，牙齿更清晰，边缘伪影较少。放大小图可看到唇形轮廓与真值更一致，但不同肤色与光照下清晰度仍有差异，不能据此断言所有帧都更优，需结合数值表判断。

下表是 30 名参与者对 3 种高斯方法的主观评价，覆盖自然度、口型同步与图像质量三项，满分为 10 分。每人观看 10 组三元组，每组平均 5 秒，按最佳 3 分、平均 2 分、最差 1 分计分后归一化。该表可与客观图像质量和 Sync 趋势互相印证，重点看自然度是否支持稳定性判断。

| Method | Natural↔ | LipSync↔ | Quality↔ |
| --- | --- | --- | --- |
| GaussianTalker [9] | 4.0 | 5.0 | 4.0 |
| TalkingGaussian [29] | 6.2 | 7.2 | 6.5 |
| GaussianHeadTalk (ours) | 9.8 | 7.8 | 9.5 |

在本展示表同列逐格核对，本方法在自然度 9.8 分、口型同步 7.8 分、图像质量 9.5 分均为三者最高，分别高于 TalkingGaussian 的 6.2 分、7.2 分、6.5 分与 GaussianTalker 的 4.0 分、5.0 分、4.0 分。自然度第一支持视频更少抖动的判断，口型同步略高于 TalkingGaussian，与 Sync 分数趋势一致。需要说明，原文完整主结果 Table 1（本精简表未列出）中 IPLAP 在部分图像质量上与本文接近，且只建模唇部区域但推理较慢。用户研究未报告方差与置信区间，每人只看 10 组平均 5 秒片段，跨语言合成音频的泛化仍需更大规模听测验证。

### 去掉参数优化与完整运动迁移后损失了什么

消融设置两个变体。去掉参数优化指直接用跟踪得到的非优化 FLAME 参数渲染，不做人物专属微调。去掉完整运动迁移指只迁移下颌唇动参数而保持头部静止，不迁移剩余姿态与表情。两者分别检验绑定对齐与运动间依赖的重要性，评价仍用 PSNR、Sync 与稳定性分数，稳定性越低越好。训练与测试划分与主实验一致，保证变体间可比。

要理解抖动在图像空间的表现，建议观察下图三行方法的绝对差分图。黑色背景上越亮表示与真值差异越大，黄色虚线框标出嘴部、脸颊与额头等关键区域，每列间隔 10 帧。上两行为基线，最下一行为本文方法，对比时先看嘴部框亮度，再看脸颊与额头描边是否漂移。

[![原论文 Figure 3：Facial “wobbling” artifacts can be visualized via the absolute difference between generated and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/73332a60bb0a/figure-3.png)

*论文图 3：抖动可视化：生成与真值差分图越亮差异越大，黄色框标出关键区域（原论文 Figure 3）。*

像素显示上两行两种基线在嘴部与脸颊框内亮度更高，额头顶部白色描边更明显，说明轮廓漂移较大。最下一行本文方法整体更暗，差异更小且位置更稳定，黄色框内亮斑较弱。但最后一列额头仍有残留亮边，说明本文也非完全零误差，仍需结合数值表判断，不能只看单列得出绝对结论。

下表给出两种变体与完整方法的三项数值，覆盖 PSNR、Sync 与稳定性分数，稳定性越低越好。第一行为去掉参数优化，第二行为只迁移唇动，第三行为完整方法。通过对比可直接看到绑定对齐与完整运动迁移各自的代价，特别注意 PSNR 与稳定性两列的变化幅度。

| Method | PSNR↔ | Sync↔ | Stability↗ |
| --- | --- | --- | --- |
| w/o Parameter Optimization | 27.6987 | 6.5123 | 1.1432 |
| w/o Full Motion Transfer | 23.5621 | 6.4962 | 0.9154 |
| GaussianHeadTalk (ours) | 29.1233 | 6.528 | 0.6201 |

在本展示表逐列核对，完整方法以 PSNR 29.1233、Sync 6.528、稳定性 0.6201 在三列均为最优。去掉参数优化后为 27.6987、6.5123、1.1432，图像出现脸部错位伪影。只迁移唇动时为 23.5621、6.4962、0.9154，PSNR 下降最明显，说明 FLAME 参数间存在运动耦合。Sync 三者差距较小，稳定性以完整方法最低。缺失的消融包括冻结与微调编码器对比、位置编码与风格嵌入单独贡献，原文未报告方差与失效案例分布。

### 只做头部与依赖专人训练带来的边界与选型建议

方法目前只针对头部建模，依赖头部专属参数模型，无法渲染部分或完整人体。躯干、肩部与手势不在输出范围内，若需全身重演，需换用全身参数模型并重新设计高斯绑定。音频与唇动关联较强而与头部运动关联较弱，因此唇动由音频预测而头部运动直接搬运原视频跟踪序列，表情随语调与语速的变化也未建模，大幅度转头与情绪变化时的保持能力仍有待验证，真实噪声口音与情绪覆盖也有限。

#### 训练代价与评测范围

每个身份都需要数分钟单目视频做专人训练，不支持单图一次生成。论文在 HDTF 数据集中选择 10 个身份，每个身份至少 4 分钟视频，全部视频转换为每秒 25 帧以保持一致。跨身份评测使用文本转语音模型合成 15 个音频片段，覆盖 5 种语言，平均时长为 7 秒，避免测试音频携带训练身份信息。自重演评测取每段视频前 30 秒做测试集，其余部分做训练，保证训练与测试来自同一人但时段不重叠。音频到参数部件先在 VOCASET 上预训练 50000 步，实验在单个 NVIDIA Tesla A100 GPU 上完成，显存为 40 吉字节。

两阶段分工明确：第一阶段优化高斯与 FLAME 参数以稳定渲染，缓解跟踪不准带来的错位；第二阶段用变换器学习音频到表情参数映射以稳定唇动，用长时上下文约束连续帧，弥补逐帧独立生成缺少时间约束的不足。编码器采用冻结的语音表征模型提取音频特征，再经线性投影与周期位置编码送入变换器解码器，身份专属模板网格经风格编码得到身份嵌入并与顶点偏移相加后映射到低维表情参数。预训练先在 VOCASET 上学习通用语音表情关联，再到 HDTF 上训练专人外观，前者管运动先验，后者管人物细节，搭配使小数据专人训练仍能保持唇动泛化。

#### 局限与伦理方向

头部专属设计带来边界。躯干与手势不在输出范围，大幅度转头与情绪随语调语速变化未建模，真实噪声、口音与情绪变化覆盖有限。论文明确指出未来可探索 SMPL-X 等全身参数模型，以及基于语调语速与外部控制参数的表情变化。生成逼真说话头像存在深度伪造风险，可用于误导、骚扰与身份冒用，论文主张加入稳健水印与检测机制以区分合成内容，提醒技术落地需配套治理。

总体上，该方法用变换器捕捉语义与长程依赖，用混合稳定性分数度量晃动，实现了实时渲染下质量与稳定的兼顾。作者演示页当前可用，可对照观察唇动开合与边缘稳定，重点是示例单词发音时的嘴形与长时间序列的一致性。高斯泼溅与人脸参数模型与稳定性度量的组合中，前者管成像速度，中者管运动解耦，后者管质量评测，搭配原因是把生成与评价都纳入时间维度，新增作用是让稳定从主观感受变为可优化目标。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频统一为 25 fps，音频采样率与帧长步长原文未披露，码率与声道原文未披露，稳定性分数越低越好
- **训练与评测数据**：VOCASET 用于预训练音频到参数映射，HDTF 选取 10 个身份，每个至少 4 分钟，统一为 25 fps，自重演前 30 秒测试，跨重演 15 个合成片段覆盖 5 种语言平均 7 秒
- **算力与训练耗时**：框架为 PyTorch，单块 NVIDIA Tesla A100 GPU，显存为 40 GB，预训练 50,000 步
- **核心超参数与配置**：优化器为 ADAM，学习率为 1e-4，Wav2Vec 2.0 编码器冻结，含周期位置编码与二值对齐掩码，预测不足 100 个 FLAME 表情参数，顶点空间二范数损失
- **推理速度与部署开销**：原文称实时渲染，FPS 见原文完整主表，可核验子表未给出 RTF 与首帧延迟，显存占用原文未披露
- **开源产物与协议状态**：代码与权重原文未披露公开下载，作者演示页当前可用，系统不可直接运行
- **附录与补充材料要点**：原文未披露附录证明与补充细节，伦理部分提倡水印与检测以降低深度伪造风险

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 7.2/10 | 技术严谨 6.4/10 | 实验充分 7.6/10 | 清晰度 6.7/10 | 影响力 6.0/10 | 开源 1.5/10 | 可复现 5.2/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Agarwal_GaussianHeadTalk_Wobble-Free_3D_Talking_Heads_with_Audio_Driven_Gaussian_Splatting_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：HDTF十人自重演中PSNR29.1233、SSIM0.9477、LPIPS0.0338与稳定性0.6201同表最优并对比七种强基线。

- 核心优势：直接消融证实去掉参数优化后PSNR降至27.6987且稳定性升至1.1432，仅搬运唇动时降至23.5621。

- 主要短板：宣称45.4FPS实时却未披露测量硬件与分辨率条件，按红线仅能认定为口头声称而缺实测部署证据。

- 主要短板：三十人三元组盲测与自提稳定性指标均未报告置信区间与显著性检验，跨重演未按语种细分。

- 主要短板：头部姿态从原视频直接搬运且仅限头部建模，人物专属训练排斥单图即用，新韵律泛化待验证。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
