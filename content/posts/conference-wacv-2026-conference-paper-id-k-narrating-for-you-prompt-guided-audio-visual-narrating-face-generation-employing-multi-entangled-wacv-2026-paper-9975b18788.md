---
title: "Narrating For You: Prompt-guided Audio-visual Narrating Face Generation Employing Multi-entangled Latent Space"
date: 2026-11-28
draft: false
description: "针对仅给单张照片、2 秒参考音频与目标文本即需同步生成个性化说话人音视频的问题，论文提出双路纠缠隐空间并行框架，在三个数据集的视频分布保真与三个数据集的音频分布失真上领先基线，代价是在部分运动距离与可懂度指标上让步且依赖英文数据与较大显存。"
tags: ["扩散模型", "多模态学习", "音视频生成", "文本到语音"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "一张照片加 2 秒声音：文本驱动的音画同步说话人脸生成解读"
paper_digest_original_title: "Narrating For You: Prompt-guided Audio-visual Narrating Face Generation Employing Multi-entangled Latent Space"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper"
paper_digest_workbench_source_sha256: "bec666acd67409927c4be8fc3a198b90ccfebadd7309dc89b6832c006f03c923"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音视频生成"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对仅给单张照片、2 秒参考音频与目标文本即需同步生成个性化说话人音视频的问题，论文提出双路纠缠隐空间并行框架，在三个数据集的视频分布保真与三个数据集的音频分布失真上领先基线，代价是在部分运动距离与可懂度指标上让步且依赖英文数据与较大显存。"
paper_digest_reader_sections: [{"heading":"只用一张照片、两秒声音和一句话生成会说话的人脸为何困难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三阶段并行框架如何组织编码、纠缠与解码","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"声音外观与文本编码器如何拼出等长令牌","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"双路交叉注意力、频谱合成与扩散去噪如何联合优化","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"四个数据集上的音画质量与同步性在何处领先、何处让步","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"独立双编码器与两处交叉注意力各自带来多大增益","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"泛化优势成立的前提、失效边界与复现选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India"],"name":"Aashish Chandra K"},{"affiliations":["Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India","Georgia Institute of Technology, USA"],"name":"Aashutosh A V"},{"affiliations":["Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India"],"name":"Abhijit Das"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"398192a484a18b8ae7c2775c040a59bc116665f6d8390e7cd05c75a31a2fead4","url":"/audio-research-portal/client/papers/2026-11-28/conference-9975b187882da3dee6ccb411/citation.bib"},"citation.json":{"sha256":"65f23cda9a22812d6300791b3897716a3e8ac6d92edf4016c39b790743434edf","url":"/audio-research-portal/client/papers/2026-11-28/conference-9975b187882da3dee6ccb411/citation.json"},"citation.ris":{"sha256":"d777f05c2fa51444fe51fa308ce64587b168a0fa6011d25f9e1f27da384847a7","url":"/audio-research-portal/client/papers/2026-11-28/conference-9975b187882da3dee6ccb411/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"130c8bbb35f8e9f77975c2dbb1384f3ec182519ba2675aee0e0bd18939f9fe99","url":"/audio-research-portal/client/papers/2026-11-28/conference-9975b187882da3dee6ccb411/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "2246b7194b416a623c6b706f17e97301f5b3ac7c76243296a573775e6455a2da"
paper_digest_api_reader_plan_sha256: "2a7e876b495bd3d257b0ddcf39fbbb93d5b0b4f3da7b1a74ed45bd2e7e74f5a0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "642068411e8af4b2b53e8da1f7a1d0c5d2d75990978b171dc1fc7eaacc8bc154"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "29928326f9a8d3d9bf6138b140524ff9a90d8a7af8fb2bf56b7d3bb60fa801d8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "13d2447bedc6a2f2b635c5bca6d9d79f0ace830c4cb97ea57b76d440545140d3"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ea8b12f0013e058a331d291c2a6df4aa56670cda5de48420a8f3ed1e5c949582"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 一张照片加 2 秒声音：文本驱动的音画同步说话人脸生成解读

> 英文题目：*Narrating For You: Prompt-guided Audio-visual Narrating Face Generation Employing Multi-entangled Latent Space*

> 会议身份：`conference:wacv:2026:conference-paper-id:K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-research-portal/papers/?concept=task.av-generation)；[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.6/10 | 技术严谨 5.4/10 | 实验充分 6.4/10 | 清晰度 5.3/10 | 影响力 6.2/10 | 开源 6.0/10 | 可复现 6.1/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Aashish Chandra K：Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India
- Aashutosh A V：Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India；Georgia Institute of Technology, USA
- Abhijit Das：Machine Intelligence Group, Department of CS&IS, BITS Pilani, Hyderabad Campus, India

## 📌 核心摘要

**问题与瓶颈：** 本文处理文本驱动的有声叙述人脸生成，输入为 1 张静态人脸图像、1 段 2 秒参考音频对应的音色特征与 1 段目标文本，输出为与文本内容同步的个性化语音波形与说话人脸视频。现有文本到语音模型只合成声音，谈话人脸模型只在给定音频或文本下生成画面，两类单模态路线无法同时保证音画时间对齐与身份一致。级联方案把合成语音再驱动唇形，误差逐级放大，难以建模语调、表情与个人发音习惯的耦合。已有联合生成工作只针对特定人且不使用音频提示，泛化到任意身份时音色不可控，弱监督面部先验也导致唇同步偏差与表情细节丢失。

**核心思路与方法架构：** 与级联基线相比，本文增量在于以双路交叉注意力并行纠缠文本、音频与视觉隐变量，保留预训练编码器与解码器，只学习模态间时空同步。音频分支用 HiFi-GAN 编码器得到序列特征，用 Wav2Vec 编码器得到音色签名，文本分支用字节对编码得到 512 维词元，三者拼接为长度 5609 加文本长度的联合序列。视觉分支用变分自编码器编码外观，用关键点检测得到人脸掩膜与唇掩膜，拼接为 3136 × 512 的视觉特征，同样与文本词元拼接以注入内容约束。两路 Transformer 分别以音频序列与图像序列为查询，以另一模态与文本拼接为键值做交叉注意力，得到提示增强的音视频联合隐变量，再分别送入基于 GPT-2 的梅尔谱合成器与带交叉注意力的去噪扩散 U-Net，最后由 HiFi 生成器声码器与预训练图像解码器输出波形与多帧视频。

**关键实验与核心代价：** 训练集为 VoxCeleb、FakeAVCeleb、HDTF 与 CelebV-HQ 筛选英文后组成的 36000 个视频，测试为每库 200 个以上共 800 个以上未见样本，视频裁为 512 × 512、25 FPS、前 20 秒。在 VoxCeleb 上本文模型弗雷歇初始距离 (Fréchet Inception Distance, FID, 越低越好 ↓) 为 42.88，低于 Hallo 的 67.28，弗雷歇视频距离 (Fréchet Video Distance, FVD, 越低越好 ↓) 为 49.78，低于 Hallo 的 70.69。在 HDTF 上本文 FID 为 11.72，低于 Hallo 的 20.54，FVD 为 15.58，低于 Hallo 的 25.81，但弗雷歇视频运动距离 (Fréchet Video Motion Distance, FVMD, 越低越好 ↓) 为 1784.16，高于 Hallo 的 1290.57，未能保持最低。音频侧本文在 HDTF 上弗雷歇音频距离 (Fréchet Audio Distance, FAD, 越低越好 ↓) 为 106.43，低于 XTTS v2 的 135.11，梅尔倒谱失真 (Mel Cepstral Distortion, MCD, 越低越好 ↓) 为 44.05，低于 Your TTS 的 49.38，短时客观可懂度 (Short-Time Objective Intelligibility, STOI, 越高越好 ↑) 为 0.15，与 Your TTS 的 0.15 持平，但全表 STOI 仅 0.07 到 0.22，整体可懂度偏低。人工平均意见分 (Mean Opinion Score, MOS, 越高越好 ↑) 由 35 位专家在 0-5 分内打分，视频 4.22 高于 Hallo 的 4.10，音频 4.56 高于 Tortoise 的 4.32，未报告置信区间，也未使用 UTMOS 或 DNSMOS 等神经代理指标对照。消融显示显式双 Transformer 加扩散交叉注意力与嵌入交叉注意力后 FID 从 86.70 降为 42.88，但 FVMD 从 2720.41 回升至 4192.07，代价为模型仅 1575936 个参数与每次生成 5.39 GFLOPs，推理需 12 GB VRAM，未实测延迟或实时率。

**适用边界与深读导览：** 结论仅在英文朗读、正面清晰人脸与干净 2 秒音色提示下成立，作者自述强噪声音色会导致输出微弱，闭眼源图会破坏面部动态。音画同步唇同步误差置信度 (Lip Sync Error Confidence, LSE-C, 越高越好 ↑) 5.74 与唇同步误差距离 (Lip Sync Error Distance, LSE-D, 越低越好 ↓) 8.38 均数值优于真值的 5.45 与 8.52，提示指标可能偏乐观，不宜直接视为超越真实录制。去视觉词元时 FAD 为 221.07，优于完整模型的 241.75，MCD 为 63.25，优于完整模型的 75.39，说明音频分支并非全面依赖视觉提示。未覆盖多语、遮挡、长时叙述与端侧部署，推理成本也与所列微小参数规模存在口径疑问。欲深究双路交叉注意力公式与扩散同步机制可查阅方法概述和架构，欲核对跨库对比与双消融表可查阅实验结果。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/narratingForYou/NarratingForYou> — 链接可访问（HTTP 200）

- 模型相关资源：<https://github.com/narratingForYou/NarratingForYou> — 链接可访问（HTTP 200）

- 数据相关资源：<https://github.com/narratingForYou/NarratingForYou> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只用一张照片、两秒声音和一句话生成会说话的人脸为何困难

这篇论文要解决的是一次生成两种模态的难题，输入只有三样东西，一张静态人脸照片，一段约 2 秒的参考音频，以及一句想要说出的目标文本，输出则是同一个人的说话视频与对应语音，要求嘴型、表情、韵律与身份同时成立，应用指向音视频聊天机器人、数字讲师与无障碍沟通等需要实时音画同步的场景。初学者可以把任务理解为给照片配上符合文本的嘴部动作，同时给文本配上符合照片身份的声音，两路输出在时间上还要互相咬合。

已有路线各管一段，文本转语音模型只管合成声音，说话人脸模型只管根据音频或文本或图像生成画面，两类模型直接级联的做法是先用语音合成得到波形，再用画面模型对口型，误差会在两段之间累积，同步与表现力都受限，另一类联合生成只针对特定人训练，音频不受参考声音控制，难以泛化到任意身份。更深的瓶颈在于依赖弱监督面部先验或固定运动模板，导致唇同步不准，难以用已有声音画像微调个性，细微表情与语调等个体特征也无法同时与文本对齐。

从输入输出定义看，编码阶段需要把异构的个人签名与可变的驱动文本变成等长令牌，纠缠阶段需要建立跨模态时空关联，解码阶段需要各自还原为波形与像素，评价也要分 3 路，视觉保真用 FID (图像分布距离) 、FVD (视频分布距离) 与 FVMD (视频运动距离) 等越低越好，音频用 FAD (音频分布距离) 、MCD (梅尔倒谱失真) 越低越好与 STOI (短时客观可懂度) 越高越好，同步用 LSE-D (唇同步误差距离) 越低越好与 LSE-C (唇同步误差置信度) 越高越好。

论文的切入点是用多重纠缠隐空间替代强运动先验，以文本令牌为锚点组织双路信息交换，声称首个面向任意身份的文本驱动多模态联合框架，编码器保留已有预训练能力，纠缠层负责在隐空间中做线性位移来构造时序，既保持身份方差，又学习音视频协同，后续小节沿 1 秒量级的张量流展开具体做法。

### 三阶段并行框架如何组织编码、纠缠与解码

整体框架分为三阶段，第一阶段是多模态编码，第二阶段是多重纠缠隐空间，第三阶段是条件解码，与最近既有基线相比，保留的部分包括 HiFi-GAN 声音序列编码器、Wav2Vec 声音画像编码器、变分自编码器外观编码器、关键点结构编码器、Hallo 层次扩散与 XTTS 与 GPT-2 频谱合成器，替换的部分是去掉三维可变形模型与固定姿态字典，改用两个并行的 Transformer 编码器加扩散交叉注意力来建立同步。

为了建立端到端直觉，建议先读架构图，从左侧三输入出发，沿编码、展平、双路交叉注意力、频谱与扩散合成，再到右侧音视频输出，重点看查询来自哪一路，键值对来自哪一路，以及两路在何处分叉又在扩散块中重新汇合，底部形状标注给出关键维度线索，读图时可对照下文编码器分工理解令牌来源。

[![原论文 Figure 1：Our Network Architecture: Text Prompt-guided joint audio-visual learning representations using…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-1.png)

*论文图 1：三阶段网络架构：编码、双路纠缠与音视频解码的完整数据走向（原论文 Figure 1）。*

像素显示左侧自上而下为参考音频的梅尔频谱热图、文本提示框与源人像，中部紫色与橙色与青色块为 5 组编码器，箭头经 \(L(.)\) 展平后形成 \(Qa\) 与 \(Kti\) 与 \(Vti\) 以及 \(Qi\) 与 \(Kta\) 与 \(Vta\) 两组交叉注意力，中央灰色长条为 GPT-2 与去噪 U-Net 与参考网络，黑色双向箭头表示音视频扩散块之间的互信息交换，右侧分别输出梅尔频谱与纵向人脸视频条带，底部标注如 \(R5609 \times 512\) 与 \(R3136 \times 512\) 等形状。

信号规格方面，预处理把视频统一为 512 × 512 ，截取前 20 秒按 25 FPS 得到 500 帧，用 ffmpeg 分离音频后以 Whisper 转写文本，参考音频截取 2 秒，声称每 0.2 秒一帧展开为 \(R5609 \times 512\) ，视觉融合为 \(R3136 \times 512\) ，视频隐张量为 \(R4 \times f \times 64 \times 64\) ，采样率、量化码率与通道数等原文未披露，下一节用具体样本追踪形状变化。

### 声音外观与文本编码器如何拼出等长令牌

音频侧用两套编码器分工，序列编码器采用 HiFi-GAN 编码器，把梅尔频谱经转置卷积上采样到输出序列长度得到 \(fAS\) ，画像编码器采用 Wav2Vec 编码器，从参考音频提取高维个人向量 \(fAP\) ，两者拼接为 \(fASP\) ，再与文本特征 \(ft\) 拼接为 \(ft \oplus fAS \oplus fAP \in R5609+T \times 512\) ，其中 \(T\) 为文本令牌数，教学例子可设短句对应 \(T = 20\) ，则拼接长度约为 5,629 ，通道均为 512 ，展平函数 \(L(.)\) 负责把多维特征拉直为令牌序列。

文本侧采用字节对编码与分词得到 \(ft\) ，原文记为 \(T\) 个 512 维令牌，可理解为 \(T \times 512\) 矩阵，文本令牌同时拼入音频路与视觉路，作为两路 Transformer 的锚定令牌，一方面给声音查询隐式加入文本条件，另一方面拆分后可作为文本图像嵌入的代理权重，这种设计让时序位移沿文本方向在隐空间中线性推进，而不依赖外部音素姿态字典。

视觉侧同样双编码器，外观编码器采用变分自编码器提取身份风格 \(fi\) ，结构编码器采用关键点检测提取面罩 \(ffm\) 与唇罩 \(flm\) ，融合为 \(fi \oplus flm \oplus ffm \in R3136 \times 512\) ，再与 \(ft\) 拼接送入另一路，底部像素标注显示 \(fi \in R4 \times 64 \times 64\) ，面部结构为 \(R3 \times 512 \times 512\) ，展平后统一为 512 通道，这种显式分离外观与结构的做法保留身份，又给嘴部留出可动自由度。

贯穿全文的 1 秒量级追踪可按序理解，第一步输入 512 × 512 源图与 2 秒参考音频与短文本，第二步各编码器输出上述 512 通道令牌，第三步 \(L(.)\) 展平并按最大长度补齐，第四步双路交叉注意力输出提示工程化音频嵌入 \(fASP\) 与音视频嵌入 \(fav \in R3136 \times 512\) ，第五步分别进入频谱合成与扩散合成，未披露的采样率与帧移如实记为未知，不补数值。

### 双路交叉注意力、频谱合成与扩散去噪如何联合优化

纠缠层有两块 Transformer 编码器，第一块以 \(Qa = L(fAS \oplus fAP) \in R5609 \times 512\) 为查询，以 \(L(ft \oplus fi \oplus flm \oplus ffm)\) 为键值对 \(Kti\) 与 \(Vti\) 做双流交叉注意力，第二块对称以 \(Qi = L(fi \oplus ffm \oplus flm)\) 为查询，以 \(L(ft \oplus fAS \oplus fAP)\) 为键值对 \(Kta\) 与 \(Vta\) 做注意力，前者输出提示工程化音频嵌入，后者输出音视频嵌入 \(fav\) ，两路共享文本锚点但各自编码，消融显示独立编码优于共享编码。

合成侧分两条，音频侧把解缠出的 \(fAS\) 与 \(fAP\) 与 \(fav\) 中的文本令牌一起送入 GPT-2 解码器，自回归生成梅尔频谱令牌，再经 HiFi 生成器声码器得到波形，视频侧把 \(fav\) 与高斯噪声样本一起送入去噪 U-Net 与参考网络，每一步注入嵌入交叉注意力，并在音视频扩散块之间再做扩散交叉注意力，使两路去噪过程互相感知时序，输出 \(f\) 帧 \(R4 \times f \times 64 \times 64\) 隐张量，再经预训练解码器还原像素视频。

训练目标由两项构成，视频损失为全部 \(f\) 帧逐像素 L1 之和，音频损失为频谱域均方误差，总损失为 \(L_{Total} = \lambda L_{audio} + L_{video}\) ，其中音频项系数 \(\lambda = 0.1\) ，梯度同时流向双 Transformer、合成器与解码器，预训练的 HiFi-GAN、Wav2Vec、变分自编码器、扩散与 GPT-2 解码器会与整体一起继续微调，而非完全冻结，推理时为离线整段生成，原文未披露分块流式、前瞻窗口与采样步数。

优化采用 AdamW ，学习率 1e-4 ，权重衰减 1e-2 ，步进调度步长 1,000 ，衰减系数 0.5 ，批量 8 ，训练 10 轮，硬件为 1 张 A6000 ，推理需 12 GB 显存，报告参数量 1,575,936 ，每次生成 5.39 GFLOPs ，未披露单步耗时、显存峰值随帧数变化与 RTF ，复现时应以批量与调度为准，不自行外推延迟。

### 四个数据集上的音画质量与同步性在何处领先、何处让步

评测建立在四数据集组合上，训练用 VoxCeleb、FakeAVCeleb、HDTF 与 CelebV-HQ 过滤英文后共 36,000 个视频，Whisper 转写文本，源图取首帧，音频画像截 2 秒，测试在每集 200 个以上样本共 800 个以上未见样本上进行，视频统一 512 × 512 ，前 20 秒按 25 FPS 取 500 帧，视频基线为 Audio2Head、Hallo、EAT 与 SadTalker ，音频基线为 Tortoise、Your TTS、XTTS v2 与 GlowTTS ，另有 35 位人工 MOS 在 0 分到 5 分打分，需区分人工听测与客观指标。

#### 视频分布与运动指标对比

下表为视频流程跨数据集主结果，列为 FID (↓) 、FVD (↓) 与 FVMD (↓) ，均越低越好，行按四数据集分组，每组含 4 种基线与本模型，完整展示便于核对跨数据集泛化是否成立，而非只看单集最优。公平性上各方法均在同一分辨率与帧率下比较，但训练数据构成不同，泛化结论需结合多集趋势判断。

| Dataset | Model | FID (↓) | FVD (↓) | FVMD (↓) |
| --- | --- | --- | --- | --- |
| VoxCeleb | Audio2Head | 81.00 | 90.12 | 5100.92 |
|  | Hallo | 67.28 | 70.69 | 5703.44 |
|  | EAT | 85.16 | 80.38 | 4878.36 |
|  | SadTalker | 119.36 | 112.77 | 6352.19 |
|  | Our Model | 42.88 | 49.78 | 4192.07 |
| FakeAVCeleb | Audio2Head | 93.59 | 97.85 | 1329.23 |
|  | Hallo | 26.88 | 39.42 | 2351.20 |
|  | EAT | 94.34 | 98.49 | 1324.91 |
|  | SadTalker | 81.77 | 77.10 | 4158.18 |
|  | Our Model | 47.24 | 49.15 | 2263.54 |
| CelebV-HQ | Audio2Head | 90.22 | 102.76 | 2939.49 |
|  | Hallo | 42.76 | 56.10 | 2816.68 |
|  | EAT | 47.88 | 56.21 | 2894.31 |
|  | SadTalker | 52.60 | 52.55 | 2789.19 |
|  | Our Model | 34.01 | 43.67 | 2743.29 |
| HDTF | Audio2Head | 37.78 | 32.69 | 2633.04 |
|  | Hallo | 20.54 | 25.81 | 1290.57 |
|  | EAT | 29.57 | 29.34 | 2573.05 |
|  | SadTalker | 22.34 | 23.57 | 2410.89 |
|  | Our Model | 11.72 | 15.58 | 1784.16 |

从展示数字看，本模型在 VoxCeleb 以 42.88 、49.78 与 4192.07 领先，在 CelebV-HQ 以 34.01 与 43.67 领先 FID 与 FVD ，在 HDTF 以 11.72 与 15.58 大幅领先 FID 与 FVD ，但在 FakeAVCeleb 的 FID 上 Hallo 以 26.88 优于本模型的 47.24 ，在 HDTF 的 FVMD 上 Hallo 以 1290.57 优于本模型的 1784.16 ，在 FakeAVCeleb 的 FVMD 上 EAT 以 1324.91 最优，说明并非全面高于，优势集中在分布保真而非所有运动指标。

#### 音频失真分布与可懂度对比

下表为音频流程跨数据集主结果，列为 FAD (↓) 、MCD (↓) 越低越好与 STOI (↑) 越高越好，行分组同视频表，基线为 4 种语音合成，完整展示可核对失真、分布与可懂度三方面的权衡。注意 STOI 绝对值整体偏低，需结合 MCD 与 FAD 一起读，不宜单看一列断言可懂度。

| Dataset | Model | FAD (↓) | MCD (↓) | STOI (↑) |
| --- | --- | --- | --- | --- |
| VoxCeleb | Tortoise | 258.54 | 82.37 | 0.10 |
|  | Your TTS | 199.52 | 111.79 | 0.19 |
|  | XTTS v2 | 249.17 | 100.80 | 0.13 |
|  | GlowTTS | 329.21 | 103.94 | 0.15 |
|  | Our Model | 241.75 | 75.39 | 0.17 |
| FakeAVCeleb | Tortoise | 871.14 | 82.12 | 0.10 |
|  | Your TTS | 445.38 | 65.60 | 0.21 |
|  | XTTS v2 | 184.39 | 77.88 | 0.11 |
|  | GlowTTS | 482.04 | 87.11 | 0.18 |
|  | Our Model | 171.52 | 55.12 | 0.19 |
| CelebV-HQ | Tortoise | 529.06 | 113.18 | 0.09 |
|  | Your TTS | 520.01 | 137.58 | 0.16 |
|  | XTTS v2 | 509.90 | 124.61 | 0.07 |
|  | GlowTTS | 549.18 | 139.81 | 0.22 |
|  | Our Model | 244.83 | 85.76 | 0.18 |
| HDTF | Tortoise | 425.30 | 67.15 | 0.11 |
|  | Your TTS | 467.42 | 49.38 | 0.15 |
|  | XTTS v2 | 135.11 | 49.65 | 0.14 |
|  | GlowTTS | 510.61 | 66.42 | 0.12 |
|  | Our Model | 106.43 | 44.05 | 0.15 |

数字显示本模型在 FakeAVCeleb 以 171.52 与 55.12 、在 CelebV-HQ 以 244.83 与 85.76 、在 HDTF 以 106.43 与 44.05 在 FAD 与 MCD 上领先，但在 VoxCeleb 的 FAD 上 Your TTS 以 199.52 优于本模型的 241.75 ，STOI 上 CelebV-HQ 的 GlowTTS 以 0.22 高于本模型的 0.18 ，VoxCeleb 的 Your TTS 以 0.19 高于 0.17 ，且四集 STOI 均在 0.07 到 0.22 之间，可懂度提升有限，结论是失真控制较稳而可懂度并未拉开差距。

下表为音频质量综合指标，列为 ESTOI (扩展短时客观可懂度) 、PESQ (语音质量感知评估) 、WER (词错误率) 与 MOS (平均意见分) ，其中 MOS 为 35 位人工在 0 分到 5 分的听测，其余为客观计算，完整展示可区分人工感知与机器估计是否一致。

| Method | ESTOI (↑) | PESQ (↑) | WER (↓) | MOS (↑) |
| --- | --- | --- | --- | --- |
| Tortoise | 0.42 | 3.80 | 0.21 | 4.32 |
| Your TTS | 0.31 | 3.71 | 0.30 | 3.61 |
| XTTS v2 | 0.33 | 3.51 | 0.34 | 3.21 |
| GlowTTS | 0.39 | 3.83 | 0.33 | 3.52 |
| Proposed | 0.43 | 4.01 | 0.18 | 4.56 |

逐格核对显示本模型以 0.43 、4.01 、0.18 与 4.56 在四列均为展示表内最优，次优为 Tortoise 的 0.42 、3.80 、0.21 与 4.32 ，Your TTS 等其余基线在 WER 上为 0.30 到 0.34 ，MOS 为 3.21 到 3.61 ，表明在该汇总口径下人工与客观一致指向本模型，但原文未报告方差与置信区间，显著性无法判断，缺人工听测规模之外的细节。

#### 同步性与定性可视化核对

下表为音画同步性，列为 LSE-C (↑) 越高越好与 LSE-D (↓) 越低越好，行含真值、4 个视频基线与共享编码器 STE 及独立编码器 ETE 即本模型，完整展示可核对同步是否接近真值。公平性上同步评估器对各方法一致，但评估器本身可能存在偏好，需谨慎解读超越真值的数值。

| Model | LSE-C (↑) | LSE-D (↓) |
| --- | --- | --- |
| Groundtruth | 5.45 | 8.52 |
| Hallo | 3.03 | 8.71 |
| Audio2Head | 2.51 | 10.34 |
| EAT | 4.39 | 9.35 |
| SadTalker | 5.44 | 10.09 |
| STE | 5.71 | 8.41 |
| ETE/Proposed | 5.74 | 8.38 |

数字显示 ETE 以 5.74 与 8.38 在两列均为展示表内最优，STE 以 5.71 与 8.41 次之，真值为 5.45 与 8.52 ，其余基线如 SadTalker 为 5.44 与 10.09 ，Hallo 为 3.03 与 8.71 ，本模型数值上甚至优于真值，解读时应谨慎，这可能源于评估器偏好而非真正超越真实同步，且未报告多次运行方差，同步优势需结合主观观察复核。

下面这组 VoxCeleb 对比图最适合检验泛化视觉质量，建议按行读 6 种方法，按列读时间推进，重点对比第二行本模型与第一行目标在嘴型开合、头部朝向与背景保持上的接近程度，再看其余四行基线是否出现模糊或表情僵硬。

[![原论文 Figure 2：Visual comparison on VoxCeleb, in the order: Ground Truth, Ours, Audio2Head, EAT, Hallo, and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-3.png)

*论文图 3：VoxCeleb 上真值、本模型与四种基线方法的逐帧视觉对比（原论文 Figure 2）。*

像素显示上下两组人物各有六行，首行为目标，次行为本模型，其下依次为 Audio2Head、EAT、Hallo 与 SadTalker ，每行 5 帧连续变化，本模型在两组人物上均与目标行的脸部轮廓与嘴部动作最接近，Audio2Head 在部分帧出现齿部夸张，EAT 头部偏转较大，Hallo 表情偏平，SadTalker 变化幅度较小，总体支持量化表中本模型在该集领先的判断，但仅为两个身份的定性示例。

下面这组三数据集示例用于检验跨分辨率与跨场景稳定性，建议分 3 段阅读 FakeAVCeleb、HDTF 与 CelebV-HQ ，每段对比上下两行真值与生成，关注身份一致性、眼镜与背景文字等细节是否保持，以及侧脸与正脸切换时是否稳定。

[![原论文 Figure 3：Results of our model on FakeAVCeleb, Celeb-HQ and HDTF datasets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-2.png)

*论文图 2：三数据集真值与生成视频帧对比：身份保持与口型变化（原论文 Figure 3）。*

像素显示每数据集各有 4 帧真值在上、4 帧生成在下，FakeAVCeleb 侧脸男士的胡须与肤色保持较好，HDTF 戴眼镜男士的西装与演播背景文字基本稳定，CelebV-HQ 金发女士的发髻与笑容变化自然，3 组生成行与真值行在整体构图上接近，但 FakeAVCeleb 生成行的头部朝向与真值行不完全对应，说明视觉接近不等于逐帧对齐，定量仍需回到 FID 与 FVD 。

下面这组频谱图用于直观核对音频时频结构，建议分 (a) 到 (d) 4 个子图阅读，每个子图上为真值下为生成，横轴为时间秒，纵轴为频率 Hz ，颜色表示对数幅度，重点看低频共振峰条带与静音间隙是否在时间上对齐。

[![原论文 Figure 4：Ground Truth vs. Generated Audio Spectrograms for (a) VoxCeleb, (b) CelebV-HQ, (c) FakeAVCeleb…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/59d5f478b72c/figure-4.png)

*论文图 4：四数据集真值与生成语音频谱的时频能量分布对比（原论文 Figure 4）。*

像素显示 (a) VoxCeleb 约 10 秒、(b) CelebV-HQ 约 10 秒、(c) FakeAVCeleb 约 4 秒到 5 秒、(d) HDTF 约 13 秒，生成图的低频红色高能量区与真值的高能量区在时间位置上大致对应，高频绿色背景纹理也相近，但生成图的高频细节更平滑，部分竖直静音缝隙更宽，表明时序包络学到而细微纹理有平滑，支持 MCD 降低但 STOI 未大幅领先的量化现象。

### 独立双编码器与两处交叉注意力各自带来多大增益

第一组消融比较编码器共享与独立及两处注意力，基线为仅用显式编码器时的 FID 86.70 与 FVD 80.88 ，改用共享编码器 STE 后降至 68.83 与 74.19 ，再逐步加入扩散交叉注意力 DC 与嵌入交叉注意力 EC 后降至 63.68 与 71.38 以及 61.44 与 69.15 ，完整独立编码器 ETE 加 DC 加 EC 即本模型达到 42.88 与 49.78 ，音频侧 FAD 从 328.27 降至 241.75 ，MCD 从 95.44 降至 75.39 ，STOI 从 0.07 升至 0.17 ，说明 Transformer 公共隐空间最关键，且 DC 去掉时恶化大于 EC ，独立编码优于共享。

第二组消融针对编码器输入，仅关注视觉令牌时 FID 68.31 与 FAD 304.98 ，仅关注音频令牌时 69.02 与 301.49 ，去掉音频序列编码即去掉 HiFi-GAN 分支时恶化最大至 85.25 与 498.33 且 STOI 跌至 0.09 ，去掉音频画像编码即去掉 Wav2Vec 分支时为 70.10 与 309.95 ，去掉视觉令牌编码时为 54.38 与 221.07 ，完整模型为 42.88 与 241.75 等，表明音频序列时序信息不可或缺，视觉与画像缺一都会明显损失。

缺失的消融包括文本编码方式、损失权重 λ 取 0.1 之外的取值、扩散步数与 U-Net 深度、不同补齐长度的影响，原文也未报告多次随机种子的方差与置信区间，负结果方面作者提到强噪声画像会导致输出微弱，闭眼源图会影响面部动态，不同口音与儿童与成人交叉画像仅定性称有效且无偏，未给出量化支撑，解读增益时应留有余地。

### 泛化优势成立的前提、失效边界与复现选型建议

结论成立的前提是英文过滤后的四数据集混合训练与 512 × 512 与 25 FPS 的预处理一致，优势在 VoxCeleb、CelebV-HQ 与 HDTF 的分布保真上最稳，在 FakeAVCeleb 的 FID 与 HDTF 的运动距离上让步，在 VoxCeleb 音频分布与多集 STOI 上也未领先，说明通用化以部分指标为代价，跨数据集记忆专用模型在单集上仍可能反超。

未验证的部署条件包括非英语文本、多语口音量化、长于 20 秒的连续生成、侧脸大角度与遮挡、实时流式的前瞻与缓存，以及不同采样率与压缩条件下的声码器表现，原文推理只报 12 GB 显存与 5.39 GFLOPs ，未披露延迟、TTFA 与 RTF ，工程上不能直接推断实时性。

复现核对上需区分三件事，代码当前可用，模型检查点当前可用，所提数据集组织当前可用，三者均指向同一 GitHub 地址并返回 200 ，论文称含全部检查点与代码，训练超参如 AdamW、学习率 1e-4 、批量 8 与调度已披露，但采样率、FFT 参数与附录证明等原文未披露，复现应以披露的形状与调度为准，不补未给的信号细节。

选型建议上，若任务是任意身份的文本驱动音画同步，且能接受提供 2 秒声音画像与首帧照片，并有 A6000 量级训练与 12 GB 量级推理显存，可考虑此类并行纠缠路线，若只需单模态高保真或特定人定制，级联语音合成加说话人脸或单集专用模型可能更轻，涉及隐私与伪造风险时须遵循伦理规范，对照仓库示例与基线核对现象，不虚构听感。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：参考音频截取 2 秒梅尔频谱，每 0.2 秒一帧展开为 R5609 × 512 令牌，文本令牌维度 512，视觉融合特征 R3136 × 512，视频隐张量 R4 × f × 64 × 64，预处理视频 512 × 512，25 FPS，前 20 秒即 500 帧，采样率与声码器帧移等原文未披露
- **训练与评测数据**：VoxCeleb、FakeAVCeleb、HDTF 与 CelebV-HQ 四集过滤英文后组合 36,000 个视频训练，Whisper 转写文本，源图取首帧，音频画像截 2 秒，每集 200 个以上样本共 800 个以上未见样本测试，视频统一 512 × 512
- **算力与训练耗时**：1 张 A6000 训练，推理需 12 GB 显存，训练 10 轮，批量 8，原文未披露单步耗时
- **核心超参数与配置**：AdamW 学习率 1e-4，权重衰减 1e-2，步进调度步长 1,000，衰减系数 0.5，总损失权重 λ = 0.1，HiFi-GAN、Wav2Vec、变分自编码器、扩散与 GPT-2 解码器预训练后联合微调
- **推理速度与部署开销**：参数量 1,575,936，每次生成 5.39 GFLOPs，推理需 12 GB 显存，延迟与 RTF 原文未披露
- **开源产物与协议状态**：代码、模型检查点与所提数据集均在 <https://github.com/narratingForYou/NarratingForYou> 当前可用，论文称含全部检查点与代码
- **附录与补充材料要点**：原文未披露独立附录证明与补充消融，许可限制未说明，失效案例在正文提及强噪声画像与闭眼源图

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.6/10 | 技术严谨 5.4/10 | 实验充分 6.4/10 | 清晰度 5.3/10 | 影响力 6.2/10 | 开源 6.0/10 | 可复现 6.1/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/K_Narrating_For_You_Prompt-guided_Audio-visual_Narrating_Face_Generation_Employing_Multi-entangled_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在VoxCeleb与HDTF等四库公开对比中FID与FVD多数最低并对照Hallo等强基线。

- 核心优势：双消融表覆盖显式与共享Transformer及扩散与嵌入交叉注意力的直接受控对照。

- 核心优势：以双路交叉注意力并行纠缠文本音频视觉实现任意人音画联合生成的完整链路。

- 主要短板：35人MOS未报告置信区间与盲测协议且LSE-C与LSE-D数值优于真值提示评测乐观。

- 主要短板：完整模型FVMD回升至4192.07且去视觉词元时FAD与MCD反而更优原文未解释。

- 主要短板：1575936个参数与5.39GFLOPs难以涵盖所列Wav2Vec扩散与GPT-2规模口径存疑。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
