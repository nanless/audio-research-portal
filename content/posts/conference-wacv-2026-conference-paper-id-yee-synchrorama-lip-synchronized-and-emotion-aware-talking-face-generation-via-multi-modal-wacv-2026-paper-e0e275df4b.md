---
title: "SynchroRaMa : Lip-Synchronized and Emotion-Aware Talking Face Generation via Multi-Modal Emotion Embedding"
date: 2026-11-28
draft: false
description: "针对单模态情绪与单帧参考导致的表情平淡与时序不一致，框架 SynchroRaMa 以多模态情绪嵌入加 A2M 运动分支加文本场景描述组织两阶段扩散生成，在 HDTF 与 MEAD 上取得图像与情绪指标领先，代价是同步置信度未居首且仅验证英语肖像。"
tags: ["扩散模型", "多模态学习", "语音情感识别", "语音驱动人像视频生成"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多模态情绪嵌入如何让单图说话人像更生动且嘴型同步"
paper_digest_original_title: "SynchroRaMa : Lip-Synchronized and Emotion-Aware Talking Face Generation via Multi-Modal Emotion Embedding"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper"
paper_digest_workbench_source_sha256: "17a9e77a575597011f79ee98a41e771a73af265907959015546f6c5a1da008bd"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音驱动人像视频生成"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单模态情绪与单帧参考导致的表情平淡与时序不一致，框架 SynchroRaMa 以多模态情绪嵌入加 A2M 运动分支加文本场景描述组织两阶段扩散生成，在 HDTF 与 MEAD 上取得图像与情绪指标领先，代价是同步置信度未居首且仅验证英语肖像。"
paper_digest_reader_sections: [{"heading":"单张肖像与单一路情绪线索为何难以支撑生动说话人","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"SynchroRaMa 两阶段扩散框架如何组织外观与声音","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"多模态情绪嵌入与音频到运动分支怎样补齐表情与动作","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两阶段冻结策略与四个辅助损失如何约束同步与语义","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"在 HDTF 与 MEAD 上的图像质量与情绪还原是否全面领先","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉情绪嵌入与运动帧后表情和同步损失了多少","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"英语肖像训练与单图假设下的可用边界与复现清单","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Phyo Thet Yee"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Dimitrios Kollias"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Sudeepta Mishra"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Abhinav Dhall"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"ac90c9415ea25abfc57c5063ec4186b23f7e7347e7df3f3a7aaed22dd279983b","url":"/audio-research-portal/client/papers/2026-11-28/conference-e0e275df4b0fe271b4682a44/citation.bib"},"citation.json":{"sha256":"3fc5c24f23dc0904dbc12c4e0ab8045c21645f88ecfc3ec0865a363b881a4b3f","url":"/audio-research-portal/client/papers/2026-11-28/conference-e0e275df4b0fe271b4682a44/citation.json"},"citation.ris":{"sha256":"bdfb6976a008c8c8847f825b762cf0cb55a02aa606cef310953773e0755ec26f","url":"/audio-research-portal/client/papers/2026-11-28/conference-e0e275df4b0fe271b4682a44/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b50f0d812030c8172ba728f7dc77213f617df87a1a19bf4ab7c4c116d64f85e5","url":"/audio-research-portal/client/papers/2026-11-28/conference-e0e275df4b0fe271b4682a44/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "480380a5c624e049fba8a35416d523889de6c98c08393c207bdd04453f162df0"
paper_digest_api_reader_plan_sha256: "2abe8483927de61a36996f0f43b129443095433861dd91d32a6cf9ba939902b5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "087eca75b5b0ce1b33977ef82ff59f4fb200c8e9190ccfec4e46e0a197fbd31e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b02e15cc4ca3c37e459f85b5353dcbbe14c2cc0ed308513fe354aff4d6972d2c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1a066bd57c529b71d60073d5cc3ce17d2d4e40943341056f80ff764b2e497ad1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "60078e04caa917722eb63556168d4009721dfda2d1a0c93b148b49af18b3befe"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"task","id":"task.talking-portrait","label":"语音驱动人像视频生成"}]
paper_digest_primary_method: "扩散模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多模态情绪嵌入如何让单图说话人像更生动且嘴型同步

> 英文题目：*SynchroRaMa : Lip-Synchronized and Emotion-Aware Talking Face Generation via Multi-Modal Emotion Embedding*

> 会议身份：`conference:wacv:2026:conference-paper-id:Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-research-portal/papers/?concept=task.emotion-recognition)；[音频驱动视频生成](/audio-research-portal/papers/?concept=task.audio-driven-video) → [语音驱动人像视频生成](/audio-research-portal/papers/?concept=task.talking-portrait)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.7/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 5.2/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Phyo Thet Yee：机构信息未能从会议 PDF 纯文本可靠映射
- Dimitrios Kollias：机构信息未能从会议 PDF 纯文本可靠映射
- Sudeepta Mishra：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinav Dhall：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 说话人脸生成以单张参考图像、驱动音频和文本描述为输入，输出与音频同步且身份一致的说话人脸视频，涉及 512 x 512 分辨率图像序列、16 kHz 音频与 25 fps 时间轴的对齐。现有情感感知路线多依赖音频或图像单一模态做情感嵌入，难以同时覆盖文本语义、语音韵律与效价唤醒度等细微线索。训练常用单帧提供外观参考，无法表达跨帧动作与属性变化，易造成细节缺失与身份漂移。运动一致性要求唇动精确同步且头部运动自然，仅靠外观条件难以兼顾同步精度与表情丰富度。

**核心思路与方法架构：** 与最接近的 ReferenceNet 加去噪 UNet 基线相比，实质增量是并行引入多模态情感嵌入、VideoLLaMA2 场景描述与音频到运动模块，保留稳定扩散 1.5 初始化的双分支去噪结构。以 1 秒样本为例，16 kHz 音频约 16,000 个采样点经 wav2vec 2.0 提取特征，25 fps 视频对应 25 帧 512 x 512 图像，文本描述经 CLIP 文本编码器编码后与参考图像特征共同注入。去噪 UNet 在每个变换器块内设置空间、音频、交叉与时间四种注意力，分别处理面部区域、音频注入、多模态对齐与帧间平滑，ReferenceNet 以空间注意力传递身份与背景特征并以交叉注意力融入文本语义。音频到运动模块以 VAE 编码音频条件并用体保持归一化流增强潜变量表达，再解码为与音频对齐的运动帧，多模态情感嵌入将转写文本情感分析、语音情感识别与效价唤醒度特征拼接后经交叉注意力送入去噪过程。第一阶段冻结 VAE 与 CLIP 图像文本编码器并优化 ReferenceNet 与去噪 UNet，第二阶段注入音频与情感线索，推理采用 40 步 DDIM 采样逐段生成。

**关键实验与核心代价：** 在 HDTF 上，本文方法峰值信噪比（PSNR ↑）为 32.97，高于 Hallo 的 30.63，弗雷歇 inception 距离（FID ↓）为 27.67，低于 Hallo 的 28.91，同步置信度（Sync ↑）为 7.03，低于 VExpress 的 8.07。在 MEAD 上，本文方法 PSNR 为 32.21，高于 Hallo 的 31.69，学习感知图像块相似度（LPIPS ↓）为 0.09，低于 Hallo 的 0.11，Sync 为 6.84，低于 VExpress 的 7.25，弗雷歇视频距离（FVD ↓）按原文陈述在 MEAD 上未保持最优。表情与情感指标上 HDTF 的表情 FID（E-FID ↓）为 1.24，低于 EchoMimic 的 1.32，动作单元 F1（F1 ↑）为 0.71，高于 Hallo 的 0.68，效价一致性（CCCV ↑）为 0.56，高于 Hallo 的 0.53。关键消融均在 MEAD 量级上报告，加入音频到运动模块后 Sync 为 6.84，高于无模块的 4.33，FVD 为 147.87，低于无模块的 182.25，加入文本融合后 PSNR 为 32.21，高于无文本的 31.30，结构相似性（SSIM ↑）为 0.86，高于无文本的 0.62，即去掉文本融合时 SSIM 由 0.86 降至 0.62。20 名计算机科学硕士或博士生按 1 至 5 分评价唇同步、运动多样性、视频平滑度与整体自然度并换算为百分比，本文方法在自然度、运动多样性与平滑度上评分更高，唇同步与 Hallo 相当，未使用 UTMOS 或 DNSMOS 等神经代理指标，也未报告 RTF 或推理时延实测。

**适用边界与深读导览：** 结论在近正面人像、英语音频与 512 x 512 短片段条件下成立，未覆盖全身说话视频与非英语语种，原文明确承认这两点为局限。评测各用 100 个视频，用户研究仅覆盖计算机背景学生，未报告置信区间与统计检验，部署所需的延迟与吞吐实测缺失。原文提供的项目页可对照查看生成现象与基线差异，深究多模态嵌入拼接、体保持流变换与四项辅助损失的形式化含义可查阅下方方法概述，消融与细分对比可查阅实验结果与细节详述。

## 🔗 开源与复现资源

- 论文所列链接：<https://novicemm.github.io/synchrorama> → <https://novicemm.github.io/synchrorama/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单张肖像与单一路情绪线索为何难以支撑生动说话人

音频驱动的说话人脸生成要求仅凭单张参考图像与一段驱动音频合成连续视频，画面中人物身份保持稳定，嘴型与语音同步，头部具有自然运动，表情与情绪与语音内容相符。该任务在游戏与影视与社交与营销与教育等场景受到关注。已有路线主要分为生成对抗网络与扩散模型两类，前者以音频与视觉编码器抽取特征再由生成器合成嘴部动作，后者经由迭代去噪获得质量更高且时序更连贯的结果。即使整体质量提升，精确唇同步与头部姿态连同表情丰富度仍是开放难题。

为帮助初学者建立输入输出直觉，可先阅读示例图理解任务设定。该图左侧纵向排列 4 张风格差异很大的参考图像，中部用话筒图标表示驱动音频并以虚线框给出文本描述，黑色箭头指向右侧。右侧每行给出对应身份的 5 帧连续画面，可对照观察嘴型开合与表情变化以及服装背景是否稳定。这种单图加音频加文本到视频的映射正是本文要解决的核心映射关系。

[![原论文 Figure 1：We propose SynchroRaMa, an expressive talking face generation framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-1.png)

*论文图 1：单图加音频加文本描述生成多帧说话视频的输入输出示例（原论文 Figure 1）。*

图中第一行为银白色机器人，齿轮装饰清晰可见，5 帧中嘴部开合幅度虽小但身份纹理稳定。第二行为蓝发雀斑女孩，直视镜头，表情由微笑到严肃过渡自然。第三行为油画风格深肤色女孩，大耳环与条纹衬衫在各帧保持一致。第四行为红衣妆容男子，侧视姿态下嘴型变化明显，底部胶片齿孔边框强调视频序列属性。全部 4 组均显示服装与背景未漂移，嘴型随音频变化，这为后文多模态情绪与运动分支的必要性提供了视觉依据。

已有情绪感知方法多依赖单一模态嵌入情绪，例如仅用文本情感分析或仅用语音情绪识别，难以捕捉细腻的情感线索。不同模态各有约束，单独使用无法覆盖全部需求。同时已有扩散路线常用训练视频中抽取的一帧作为参考图像提供外观信息，单帧无法反映跨时间的场景与动作与属性变化，例如坐姿改变或转头动作。生成视频还需保证头部运动真实且唇音严格对齐，否则会出现伪影与身份漂移。本文因此引入多模态情绪嵌入与大语言模型场景描述以及音频到运动模块，分别补齐情绪表达与语义一致性与运动真实性。

### SynchroRaMa 两阶段扩散框架如何组织外观与声音

与最近的已有扩散路线相比，本文保留参考网络加去噪 UNet 主干，替换与新增集中在三处。第一是以文本情感与语音情绪识别与效价唤醒 3 路拼接的多模态情绪嵌入替代单路情绪条件。第二是新增由变分自编码器加体保持流构成的 A2M 模块，直接生成与音频对齐的运动帧参与训练。第三是新增由视频大语言模型生成的场景描述经 CLIP 文本编码器注入。信号规格方面，视频统一为 512 x 512 分辨率与 25 fps 帧率，音频重采样至 16 kHz 并归一化，训练片段时长为 3 秒至 20 秒，过滤侧脸与多人后总量约 80 小时。

总体结构包含外观编码与去噪合成两大阶段以及情绪与运动两条侧支，箭头走向较多，初学者宜按数据流向分段阅读。上方为参考网络分支，负责融合参考图像与文本描述的外观特征。下方为去噪分支，负责融合含噪隐变量与音频投影与情绪嵌入。右侧另有音频到运动分支与体保持流细节，底部给出四项辅助损失。先把握主路再看侧支，有助于理解各模块汇合位置。

[![原论文 Figure 2：(a) Overall architecture of SynchroRaMa.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-2.png)

*论文图 2：包含外观编码与情绪嵌入及运动生成的两阶段扩散总体结构（原论文 Figure 2）。*

像素显示左侧参考图像与运动帧分别经变分自编码器编码器与 CLIP 模块后进入上方参考网络，橙色条表示空间注意力，紫色条表示交叉注意力。下方去噪网络在橙色与紫色之外另有浅蓝音频注意力与粉色时间注意力，含噪隐变量自左进入，音频经 Wav2Vec 2.0 与音频投影自下注入，底部粉色块内转写接情感分析与语音情绪识别与效价网络汇聚为情绪向量。右侧分支显示图像加音频特征经编码器输出均值与方差，经体保持流到达解码器输出运动帧，细节图显示翻转与残差耦合层重复 N 次。图例中火焰表示可训练，雪花表示冻结。

以 1 秒音频为例说明端到端数据流。该段音频在 16 kHz 采样下对应 16,000 个采样点，在 25 fps 帧率下对应 25 帧视频画面。音频先经 Wav2Vec 2.0 提取语音特征，一路进入音频投影参与去噪，另一路进入转写与情绪识别与效价网络形成情绪嵌入。参考图像与大语言模型文本描述经 CLIP 文本编码器与变分自编码器编码器形成外观特征，与 A2M 模块生成的运动帧一同进入去噪 UNet，经 40 步 DDIM 采样后由解码器输出视频。原文未披露各阶段张量形状与通道维度与帧率变换细节，此处仅列出已披露的采样率与帧率与分辨率。

### 多模态情绪嵌入与音频到运动分支怎样补齐表情与动作

多模态情绪嵌入整合文本与音频与效价唤醒三重视角。输入音频先经 Whisper 转写为文字，再以情感分类器抽取文本情绪向量。同一段音频并行做语音情绪识别得到声学情绪向量，同时经微调的 Wav2Vec 2.0 提取效价与唤醒连续维度。为捕捉时序变化并抑制背景干扰，原文去除背景音乐并将音频切分为 50% 重叠分段，逐段提取后再拼接为最终表示。3 路向量拼接后经交叉注意力层注入去噪 UNet，使生成表情更贴近说话人意图。

A2M 模块解决运动序列与音频的时间一致性与表现力问题。该分支以参考图像与 Wav2Vec 2.0 音频特征为输入，采用变分自编码器结构。编码器输出高斯分布参数均值与方差并采样得到初始隐变量，若直接使用标准高斯先验会迫使后验趋向均值而限制多样性。为此引入体保持归一化流，将简单隐变量变换为更具表达力的隐变量。流由多层残差仿射耦合层与通道翻转操作堆叠，保证可逆且保持体积。变换后隐变量与音频特征共同进入解码器，合成与音频对齐的视觉运动帧，兼顾多样性与唇同步与帧间平滑。

文本融合弥补单帧参考缺失的时序语义。已有方法训练时多用原视频中抽取的一帧作为参考图像，只能提供身份与背景等静态外观，无法反映人物位置移动或动作改变。本文以 VideoLLaMA2 为整段输入视频生成描述，捕捉耳环与微笑与直视镜头与转头等属性与动作细节。描述经 CLIP 文本编码器编码为语义特征，分别经交叉注意力进入参考网络与去噪 UNet。视觉外观提供细节，文本语义提供跨帧属性与动作约束，两者共同提升外观一致性与视频质量，而唇同步本身不受该分支主导影响。

4 种注意力在每个变换块内分工明确。空间注意力聚焦嘴与眼与表情区域并保持身份一致性。音频注意力将语音特征整合进生成过程。交叉注意力动态桥接参考图像与音频与文本描述 3 类模态。时间注意力保证连续帧之间运动平滑过渡。参考网络侧以空间注意力抽取参考图像特征并经对应层传递至去噪 UNet，同时以交叉注意力融入文本描述的属性与动作语义。这种视觉与文本双条件与音频与情绪双驱动的汇合是本文区别于单条件已有方法的实质增量。

### 两阶段冻结策略与四个辅助损失如何约束同步与语义

训练分为两阶段。第一阶段侧重外观编码，每个样本为 14 帧片段，从中随机选取一帧作为参考帧，另一帧作为目标帧，并加入运动帧以保证时序平滑。此时变分自编码器编码器与解码器以及 CLIP 图像与文本编码器保持冻结，仅优化参考网络与去噪 UNet，两者均以 Stable Diffusion 1.5 权重初始化。第二阶段在完整视频序列上注入音频以实现音视对齐，并加入情绪嵌入以捕捉情感线索。两阶段各训练 30,000 步，批大小为 4，学习率均为 1e-5，实验在 NVIDIA A100 GPU 上完成。

除标准扩散损失外，本文引入四项辅助损失。前两项面向时间与情绪。同步损失以同步检测器估计音频与视频的时间偏移量与错位时刻，比较预测偏移量与真实偏移量之差的平方以及预测时刻与真实时刻之差的平方，强调整体对齐而非局部抖动，更贴近人类感知。情绪损失面向效价与唤醒的时间动态，将生成视频与真实视频的音频分别去除背景音乐并切分为 50% 重叠分段，逐段提取效价与唤醒值形成序列，计算对应段平方误差在全部 K 段上的均值，提供细粒度时序监督。

后两项面向局部动作与高层语义。动作单元损失针对眉眼与嘴部等细微肌肉运动，计算全部 T 帧与 N 个动作单元上预测值与真实值之差平方的均值，补充效价唤醒等全局描述子易忽略的细节，促进表情语义准确性与时空一致性。属性动作损失保证生成视频保留原文的高层属性与动作，先以 VideoLLaMA2 分别为预测视频与真实视频生成文本描述，再计算两者文本嵌入余弦距离，即 1 减余弦相似度，使头部运动与外观线索与原文语义保持一致。四项损失共同约束同步与表达与语义。

推理时模型输入为参考图像与文本提示与驱动音频，通过驱动参考图像的动画按音频生成视频序列，每段输出采用 DDIM 采样 40 步。原文未披露自回归或分块流式细节，未说明前瞻窗口与缓存策略，也未报告延迟与实时因子与显存占用。训练阶段的冻结边界清晰，推理阶段的部署开销缺失，这意味着复现时可按离线整段生成理解，尚不能直接推断流式实时能力。

### 在 HDTF 与 MEAD 上的图像质量与情绪还原是否全面领先

评测公平性需先交代。训练数据为 VFHQ 与 HDTF 及 Hallo3 分享的野外片段，统一为 512 x 512 分辨率与 25 fps 帧率，音频重采样至 16 kHz 并去除背景音乐与噪声，经 MediaPipe 检测过滤极端侧脸与多人后约 80 小时。评测在 HDTF 与 MEAD 各取 100 个视频，所有对比方法均用公开检查点。指标方向为 PSNR 与 SSIM 与 F1 与 Sync 与 CCCV 与 CCCA 越高越好，LPIPS 与 FID 与 FVD 与 E-FID 越低越好。参数量与码率与因果流式属性原文未披露，生成按离线整段理解。下表为主结果对比。

| Method | PSNR ↑ | SSIM ↑ | LPIPS ↓ | FID ↓ | FVD ↓ | E-FID ↓ | F1 ↑ | Sync ↑ | CCCV ↑ | CCCA ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hallo | 30.63 | 0.71 | 0.18 | 28.91 | 156.32 | 1.38 | 0.68 | 7.58 | 0.53 | 0.56 |
| EchoMimic | 28.90 | 0.51 | 0.44 | 71.33 | 153.84 | 1.32 | 0.63 | 6.20 | 0.51 | 0.49 |
| VExpress | 29.41 | 0.61 | 0.36 | 58.63 | 350.18 | 1.85 | 0.46 | 8.07 | 0.32 | 0.30 |
| Aniportrait | 30.64 | 0.66 | 0.23 | 42.38 | 449.51 | 1.97 | 0.41 | 3.15 | 0.11 | 0.12 |
| Ours | 32.97 | 0.73 | 0.17 | 27.67 | 149.67 | 1.24 | 0.71 | 7.03 | 0.56 | 0.58 |
| Hallo | 31.69 | 0.86 | 0.11 | 31.30 | 147.27 | 1.41 | 0.65 | 6.25 | 0.54 | 0.51 |
| EchoMimic | 29.07 | 0.68 | 0.42 | 63.25 | 164.75 | 1.50 | 0.61 | 5.98 | 0.53 | 0.50 |
| VExpress | 29.34 | 0.65 | 0.39 | 61.48 | 443.96 | 2.31 | 0.42 | 7.25 | 0.34 | 0.25 |
| Aniportrait | 30.36 | 0.80 | 0.16 | 51.40 | 508.36 | 2.87 | 0.31 | 2.06 | 0.13 | 0.11 |
| Ours | 32.21 | 0.86 | 0.09 | 28.47 | 147.87 | 1.36 | 0.67 | 6.84 | 0.57 | 0.54 |

主结果显示本方法在图像质量与表情情绪维度保持优势。在 HDTF 子组 5 种方法中本方法 PSNR 为 32.97 与 SSIM 为 0.73 与 FID 为 27.67 在数值方向上好于该子组其余 4 种方法，LPIPS 为 0.17 低于该子组其余 4 种方法对应值，而全表该列还有 MEAD 子组本方法的 0.09 更低，E-FID 为 1.24 与 F1 为 0.71 与 CCCV 为 0.56 与 CCCA 为 0.58 在 HDTF 子组数值方向上好于该子组其余 4 种方法。在 MEAD 上 PSNR 为 32.21 与 LPIPS 为 0.09 与 FID 为 28.47 与 E-FID 为 1.36 与 F1 为 0.67 保持领先，SSIM 为 0.86 与 Hallo 持平。代价是同步置信度未居首，HDTF 上 7.03 低于 VExpress 的 8.07，MEAD 上 6.84 低于 VExpress 的 7.25，且 MEAD 上视频距离 147.87 略高于 Hallo 的 147.27。下表为用户评价结果，以百分比为单位。

| Method | Lip Sync. | Motion Diver- sity | Video Smooth- ness | Overall Natu- ralness |
| --- | --- | --- | --- | --- |
| Hallo | 25.73 | 23.61 | 28.53 | 27.35 |
| EchoMimic | 21.11 | 19.02 | 10.82 | 20.30 |
| VExpress | 26.10 | 7.25 | 5.23 | 7.58 |
| Aniportrait | 2.05 | 5.37 | 2.55 | 2.00 |
| Ours | 25.01 | 44.75 | 52.87 | 42.77 |

用户评价邀请 20 名计算机专业硕士或博士生，每人对同一图像与音频输入下各方法视频按 1 分至 5 分评价唇同步与运动多样性与视频平滑度与总体自然度，再换算为平均百分比。每列 5 种方法合计为 100%，不存在印刷配平问题。本方法在运动多样性 44.75% 与视频平滑度 52.87% 与总体自然度 42.77% 三列领先，唇同步 25.01% 略低于 VExpress 的 26.10% 与 Hallo 的 25.73%，与主表同步未最优一致。评价未报告方差与置信区间，听众均为专业学生，代表性有限。为直观理解情绪还原差异，可看 MEAD 上的定性对比。

[![原论文 Figure 4：Qualitative comparison with the SOTA approaches on MEAD \[31\]. Please zoom in for a better view.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-4.png)

*论文图 4：高兴与惊讶情绪下各方法与真实画面的表情对比（原论文 Figure 4）。*

像素显示该图分左右两大块，左侧高兴组为蓝毛衣女子 3 帧笑容，右侧惊讶组为灰卫衣男子 3 帧圆口，每块纵向六行依次为真实与 Hallo 与 EchoMimic 与 VExpress 与 Aniportrait 与本方法。VExpress 整行以红色框标出，姿态偏移明显，头部上仰夸张。Aniportrait 以红色横框标出嘴部，笑容幅度僵硬且惊讶口型偏小。本方法底行嘴型开合与眼部表情更接近首行真实画面，高兴时露齿笑容自然，惊讶时圆口与睁眼同步出现。结合定量结果看，表情情绪优势成立，但唇同步仍非唯一最优。

### 去掉情绪嵌入与运动帧后表情和同步损失了多少

消融验证情绪嵌入与各损失的归因。评价采用 E-FID 越低越好与 F1 与 CCCV 与 CCCA 越高越好，聚焦表情与情绪还原而非整体图像质量。完整模型与去掉情绪嵌入与去掉情绪损失与去掉动作单元损失 4 种设置对比，可分离全局情绪条件与细粒度监督的作用。下表为原文表 5 的完整内容。

| Method | EFID ↓ | F1 ↑ | CCCV ↑ | CCCA ↑ |
| --- | --- | --- | --- | --- |
| w/o emo embedding | 1.43 | 0.58 | 0.48 | 0.50 |
| w/o emo loss | 1.41 | 0.63 | 0.51 | 0.51 |
| w/o AU loss | 1.38 | 0.63 | 0.53 | 0.48 |
| Ours | 1.36 | 0.67 | 0.57 | 0.54 |

表中完整模型 E-FID 为 1.36 与 F1 为 0.67 与 CCCV 为 0.57 与 CCCA 为 0.54，均为 4 组中最优。去掉多模态情绪嵌入后 E-FID 升至 1.43，F1 降至 0.58，CCCV 降至 0.48，降幅最大，说明 3 路情绪线索缺一不可。去掉情绪损失后各项略降，去掉动作单元损失后唤醒相关由 0.54 降至 0.48，表明局部监督主要补齐唤醒维度。另据原文表 3 与表 4 报告，去掉 A2M 模块时同步置信度由 6.84 降至 4.33，视频距离由 147.87 升至 182.25。去掉文本融合时峰值信噪比由 32.21 降至 31.30，结构相似性由 0.86 降至 0.62，感知距离由 0.09 升至 0.15，而唇同步基本不受影响。下图对照 3 组模块的有无差异。

[![原论文 Figure 5：Effects of Multi-modal Emotion Embedding (left), Audio-to-Motion (A2M) (middle) and Textual…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/e847469d087c/figure-5.png)

*论文图 5：去掉情绪嵌入与运动帧及文本融合前后的嘴部细节变化（原论文 Figure 5）。*

像素显示该图左侧纵列为 3 张参考图像，依次为石像与深肤色女子与彩妆女子。横向分 3 组，左组对照情绪嵌入，中组对照运动模块，右组对照文本融合。每组上行为去掉对应模块并以红色小框标出缺陷，下行为保留模块并以绿色小框标出改善。左组上行嘴部紧闭平淡，下行张口幅度明显。中间组上行笑容夸张但同步偏差，下行唇形与音频更吻合。右组上行眼妆出现伪影且唇色失真，下行眼部细节与唇形保真度恢复。全部 3 组均显示保留模块后更接近参考身份。

情绪损失与动作单元损失的定性效果与上图互补。原文描述去掉情绪损失时愤怒与高兴表情平淡，加入后表情纹与笑容更具表现力。去掉动作单元损失时唇部扁平无表情且参考闭眼时仍闭眼，加入后嘴角表情纹显现且眼睛正常睁开。不足在于未报告方差与置信区间，未做多模块联合去掉与损失权重扫描，也未评估不同性别与年龄与姿态下的稳定性，尚不能判断各增益是否可叠加。

### 英语肖像训练与单图假设下的可用边界与复现清单

可用边界首先来自训练假设。模型主要在肖像图像上训练，目前不能生成全身说话视频。训练仅使用英语语音数据，其他语言上的表现未经评测。输入假设为单张清晰参考图像与单人语音，预处理阶段过滤极端侧脸以保证唇部清晰，并排除多人说话以保持身份一致。若实际输入为侧脸或多人或含背景音乐，效果未经验证。

部署条件亦有边界。原文仅说明离线整段生成与 DDIM 采样 40 步，未披露延迟与吞吐与显存占用，也未说明缓存策略，不能直接推断实时能力。效价-唤醒提取依赖去除背景音乐与 50% 重叠分段，含噪与混响环境下的鲁棒性未测试。评价仅覆盖 HDTF 与 MEAD 各 100 个视频，未涉及长时生成与跨风格卡通形象的系统性测试。

两阶段执行过程进一步限定了适用范围。第一阶段以 14 帧片段为样本，从中随机抽一帧作参考帧、另一帧作目标帧，连同参考图像与视频描述一起送入参考网络，变分自编码器与 CLIP 图像文本编码器保持冻结，仅优化参考网络与去噪网络，且均以稳定扩散模型权重初始化。第二阶段才接入完整视频序列、注入音频并引入多模态情绪嵌入，推理时则以参考图像、文本提示与驱动音频生成片段。这种流程决定了模型依赖清晰单人肖像与干净 16 kHz 音频，对偏离该流程的输入缺乏保证。

从数据、计算与公开状态看，原文交代如下。数据方面，训练约 80 小时，片段 3 秒至 20 秒，统一 512x512 分辨率与 25 fps 帧率，音频为 16 kHz，评测各用 100 个视频，划分细节可按原文过滤规则重建。计算方面，在 NVIDIA A100 GPU 上分两阶段各训练 30,000 步，批大小为 4，学习率为 \(10^{-5}\)，GPU 数量与耗时未披露。公开状态方面，论文给出项目演示页链接，但原文未说明代码与权重与数据是否公开，也未说明附录内容，尚不能视为可直接运行。

演示页可用于感性对照，建议重点观察不同身份下嘴型开合是否自然，表情是否随语音情绪变化，服装背景是否稳定，并与已有方法的伪影位置对比，不做听感断言。选型上，若应用重表情保真与视频平滑，可优先考虑多模态情绪嵌入与动作单元损失带来的增益，前者融合文本情感、语音情绪与效价-唤醒特征以定整体基调，后者以面部动作单元平方误差约束眼眉嘴局部细节，两者搭配兼顾整体与局部，从而提升表情保真与平滑度。若应用重唇音严格对齐，需权衡本方法同步置信度未居首的代价，必要时结合同步更强的方案做取舍。跨语言与全身场景需重新采集数据验证，不宜直接迁移。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频统一 512 x 512 分辨率与 25 fps 帧率，音频重采样至 16 kHz 并归一化，去除背景音乐与噪声，效价唤醒提取采用 50% 重叠分段后拼接，训练片段时长 3 秒至 20 秒，推理采用 DDIM 采样 40 步，码率与实时因子原文未披露
- **训练与评测数据**：训练使用 VFHQ 与 HDTF 及 Hallo3 分享的野外片段，经 MediaPipe 检测过滤侧脸与多人后约 80 小时，片段 3 秒至 20 秒，统一 512 x 512 分辨率与 25 fps 帧率，音频重采样至 16 kHz，评测使用 HDTF 与 MEAD 各 100 个视频
- **算力与训练耗时**：实验在 NVIDIA A100 GPU 上完成，模型分两阶段各训练 30,000 步，批大小为 4，分辨率为 512 x 512，GPU 数量与训练耗时原文未披露
- **核心超参数与配置**：两阶段学习率均为 1e-5，第一阶段采用 14 帧片段并随机选取参考帧与目标帧，冻结变分自编码器与 CLIP 编码器，仅优化 ReferenceNet 与去噪 UNet 并以 Stable Diffusion 1.5 权重初始化，推理使用 DDIM 采样 40 步，优化器与损失权重原文未披露
- **推理速度与部署开销**：推理输入单张参考图像加文本提示加驱动音频并以 DDIM 采样 40 步逐段生成，延迟与吞吐与显存占用及参数量原文未披露
- **开源产物与协议状态**：论文给出项目演示页链接，原文未说明代码与权重及数据是否公开，也未说明运行说明覆盖情况
- **附录与补充材料要点**：原文未提供附录细节，本次输入未包含补充证明或许可限制说明，仅在示例图注提及更多结果见补充材料

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.7/10 | 技术严谨 6.5/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 5.2/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Yee_SynchroRaMa__Lip-Synchronized_and_Emotion-Aware_Talking_Face_Generation_via_Multi-Modal_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：HDTF上PSNR达32.97高于Hallo的30.63，FID为27.67最优且E-FID为1.24、F1为0.71全面领先同表基线。

- 核心优势：直接消融增益显著，加入音频到运动模块后Sync由4.33升至6.84，去掉文本融合时SSIM由0.86降至0.62。

- 核心优势：并行整合文本情感、语音情感识别与效价唤醒度三路拼接嵌入，并给出同步、情感、动作单元与属性动作四项形式化损失。

- 主要短板：评测各仅100个视频且用户研究仅20名计算机背景学生，未报告置信区间与显著性检验，泛化与统计支撑不足。

- 主要短板：未报告RTF或推理时延实测且未说明流式因果约束，部署所需的延迟与吞吐实测缺失。

- 主要短板：论文未提及代码链接与模型权重及训练集发布，仅项目页可访问而未据此确认已开放资源。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
