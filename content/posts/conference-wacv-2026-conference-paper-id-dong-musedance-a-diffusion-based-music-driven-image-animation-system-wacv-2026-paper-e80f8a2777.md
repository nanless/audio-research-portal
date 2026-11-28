---
title: "MuseDance: A Diffusion-based Music-Driven Image Animation System"
date: 2026-11-28
draft: false
description: "针对无姿态引导下由音乐与文本驱动图像跳舞的问题，MuseDance 以两阶段扩散与音乐节拍运动三模块实现端到端生成，并在 3,122 条配乐舞蹈新数据集上以图像质量与音乐对齐指标超越两阶段与单阶段基线，代价是长时一致性与复杂泛化仍受限。"
tags: ["数据集", "扩散模型", "音频驱动视频生成"]
categories: ["wacv-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不用姿态序列也能让一张图跟着音乐跳舞"
paper_digest_original_title: "MuseDance: A Diffusion-based Music-Driven Image Animation System"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wacv:2026:conference-paper-id:Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper"
paper_digest_workbench_source_sha256: "ab414c9c52a90e7829a038893b7b0f83ec0e2f59ed68135498ac5334672e7df1"
paper_digest_workbench_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.html"
paper_digest_workbench_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频驱动视频生成"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对无姿态引导下由音乐与文本驱动图像跳舞的问题，MuseDance 以两阶段扩散与音乐节拍运动三模块实现端到端生成，并在 3,122 条配乐舞蹈新数据集上以图像质量与音乐对齐指标超越两阶段与单阶段基线，代价是长时一致性与复杂泛化仍受限。"
paper_digest_reader_sections: [{"heading":"不用姿态序列时音乐驱动跳舞为何困难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两阶段扩散如何先学外观再学动态","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"音乐节拍与运动三个模块如何分工保持同步","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"新数据集与多基线对比揭示了何种增益与代价","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉任一模块或文本音乐条件会发生什么","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界复现要点与选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Stony Brook University"],"name":"Zhikang Dong"},{"affiliations":["Bytedance"],"name":"Weituo Hao"},{"affiliations":["Bytedance"],"name":"Ju-Chiang Wang"},{"affiliations":["Apple"],"name":"Peng Zhang"},{"affiliations":["Stony Brook University"],"name":"Pawel Polak"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"06ef59aa24f9858586a67b5addd2bfb56430130eab88f82dd98d8503eaccd697","url":"/audio-research-portal/client/papers/2026-11-28/conference-e80f8a2777701cc4c73ba354/citation.bib"},"citation.json":{"sha256":"91a56aa5abbdafd3d0c2e9046306b46cf0c248727c9a41b37dde8f041f6d1b23","url":"/audio-research-portal/client/papers/2026-11-28/conference-e80f8a2777701cc4c73ba354/citation.json"},"citation.ris":{"sha256":"ea55a5ba7781b7c456e0a40adc4aac1d2ab704b682b2011d3f3a452a9d489472","url":"/audio-research-portal/client/papers/2026-11-28/conference-e80f8a2777701cc4c73ba354/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6700f4a0fe63ba363de6337112af4dc732109739097287a491294780a6ce971e","url":"/audio-research-portal/client/papers/2026-11-28/conference-e80f8a2777701cc4c73ba354/rethink-context.json"}}
paper_digest_paper_id: "conference:wacv:2026:conference-paper-id:Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "wacv-2026"
paper_digest_conference_name: "wacv-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/WACV2026/html/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/WACV2026/papers/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d4f84c1d2af9389857720d0a779f7b59f2fd65c3c15e7cdd0c12581df58a8a78"
paper_digest_api_reader_plan_sha256: "95f4985c0a8f3ac3d9f50697d168e9ff076f11b35638a049586af6d192f04408"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9947a06c0d127483496de0d0730202627cf100d9875aff66cca7dee5e408736b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "989cb22b76c3aab335ba0b2ccfd902362120f665e4514bde58797128bd61177b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0eaa6bebdab81fa0565a13542e8d700b5b9787db63a1d9a2bc1917dcb94f840a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9fe51cf342f85f541a0a441cc29ae7223c22ccb0ca25187fdcd649a9f4300027"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"task","id":"task.audio-driven-video","label":"音频驱动视频生成"}]
paper_digest_primary_method: "扩散模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 不用姿态序列也能让一张图跟着音乐跳舞

> 英文题目：*MuseDance: A Diffusion-based Music-Driven Image Animation System*

> 会议身份：`conference:wacv:2026:conference-paper-id:Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper`
> Track：WACV 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频驱动视频生成](/audio-research-portal/papers/?concept=task.audio-driven-video)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 7.4/10 | 技术严谨 6.6/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhikang Dong：Stony Brook University
- Weituo Hao：Bytedance
- Ju-Chiang Wang：Bytedance
- Peng Zhang：Apple
- Pawel Polak：Stony Brook University

## 📌 核心摘要

**问题与瓶颈：** 任务输入为 1 张参考图像、1 段背景音乐与 1 条描述期望动作的文本，输出为与音乐节奏同步且符合文本语义的舞蹈视频。现有主流路线依赖显式运动引导，如人体姿态关键点、骨架序列或深度图，要求用户具备寻找或制作与特定音乐匹配的舞蹈动作先验知识，对无现成编舞的音乐难以适用，且多限于人体对象，难以让卡通形象等非人体对象起舞。另一类路线先由音乐生成 3D 骨架再渲染为视频，运动与外观分步优化，难以联合保证身份保持与节奏对齐。根本困难在于音乐只给出节拍结构与风格情绪，不直接给出运动轨迹，模型须从音频线索推断合理舞蹈，同时保持时序连贯与风格适配，而已有舞蹈数据多为固定编舞与棚拍背景，音乐与动作多样性不足。

**核心思路与方法架构：** 与最接近的姿态引导动画基线的实质增量是取消姿态序列输入，保留 Stable Diffusion 与参考外观分支，新增音乐语义、节拍显式对齐与运动时序三模块串行驱动。640 × 640 像素图像经变分自编码器编码为潜变量，16000 Hz 单声道音乐经音频频谱 Transformer（Audio Spectrogram Transformer，AST）得到音乐嵌入，节拍位置经 Librosa 检波转为二值序列再查表为稠密嵌入，三者经交叉注意力与时间自注意力控制去噪 U-Net 生成潜变量并解码为视频。第一阶段在短时间窗内抽参考帧与目标帧学习外观与单帧生成，引入稠密姿态 DensePose 掩膜强化前景而不施加运动约束，第二阶段冻结空间注意力块以保持外观质量，仅更新音乐、节拍与运动模块，论文未说明实时、流式或因果约束，直接针对音乐无轨迹与风格对齐困难。

**关键实验与核心代价：** 在自建 MuseDance 数据集 228 个视频测试划分上，以均值加减标准差报告 3 次随机种子结果，PSNR 从 EDGE + MIMO 的 28.95±0.09 提高到 29.57±0.07，SSIM 从 MusicInfuser 的 0.658±0.009 提高到 0.675±0.008，FVD 从 352.18±7.88 降低到 315.76±6.57，LPIPS 为 0.266±0.007，弱于 EDGE + MIMO 的 0.261±0.009，未实现全部指标最优。音乐视频对齐上平均节拍距离误差从 0.252±0.007 降低到 0.234±0.007，中位误差从 0.182±0.006 降低到 0.173±0.005，AV Align 从 0.171±0.005 提高到 0.179±0.004，仍弱于真值 0.218±0.003、0.170±0.001 与 0.188±0.002。23 名参与者的 1 到 5 分平均意见分 MOS 中质量 3.92、一致性 3.84、对齐 4.18 均为参评最高，未使用 UTMOS 或 DNSMOS 等神经代理指标。消融显示三模块全移除时 FVD 为 729.65±10.24，仅加音乐为 608.77±7.57，音乐加运动为 391.82±6.92，全加为 315.76±6.57，代价为 32 张 NVIDIA A100 GPU 上两阶段各 30000 步训练，未披露推理时延与吞吐。

**适用边界与深读导览：** 结论成立前提为单人独舞、画面清晰、镜头基本正面稳定的竖屏居中短片段，约 4 秒时长，未覆盖多人共舞、长时编舞与大幅运镜，AIST++ 等棚拍数据的简单背景结论不能直接外推。数据集宣称在 GitHub 链接开放，可对照试听非人体对象随不同音乐起舞的现象与基线差异。欲深究外观预训练与三模块串行融合公式及消融与对齐表，可查阅下方方法概述和架构与实验结果章节。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/Dongzhikang/musedance> — 链接可访问（HTTP 200）；仓库仅见文档框架（未检出代码/权重文件）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 不用姿态序列时音乐驱动跳舞为何困难

论文要解决的核心任务可表述为输入一张参考图加一段音乐与一句文本，输出一段人物或物体外观保持不变但动作随音乐起伏的舞蹈视频。参考图提供身份与背景，音乐提供风格节奏与情绪，文本提供希望出现的动作方向。三者需要在同一扩散生成过程中汇合，既不能丢失参考图细节，也不能让动作与节拍脱节。

已有路线主要依赖显式运动引导，例如人体关键点骨架序列深度图或光流，再用参考图渲染。寻找与特定音乐匹配的引导序列本身很困难，莫扎特或贝多芬等曲目几乎没有现成舞蹈引导，普通用户也不具备舞蹈领域知识。另一类三维骨架生成只输出关节点，无法直接得到可观看视频，而二维姿态加音乐的方法仍需姿态输入，限制了泛化。

为理解输入输出关系，可看一个贯穿示例。上方给出一张夜景熊猫参考图，下方给出一张室内人物参考图，每张图下方都有一条由蓝变紫的波形与 4 个鼓形节拍标记，以及一句只描述动作的英文。模型需让熊猫交替抬放手臂并左右换重心，让人物做上身小幅摆动与甩发，且转折点尽量落在节拍附近。

导读：下面示例同时展示了非人物与人物两种对象，有助于建立对任务输入输出的直观认识，请注意参考图波形节拍标记与动作描述三者的对应位置。

[![原论文 Figure 1：MuseDance generates a dancing video from a reference image, synchronizing movements to the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-1.png)

*论文图 1：一张参考图加一段音乐波形与节拍标记及一段动作描述生成多帧舞蹈示例（原论文 Figure 1）。*

该示例像素显示上下两组各有左侧一张参考图与右侧连续 5 帧生成帧，帧间人物手臂高低与熊猫站姿均有变化。波形横贯下方，鼓形标记均匀分布，提示节拍是动作切换的外部时钟。中部两句英文分别描述挥手拍手与身体摇摆加甩发，均回避外貌与背景，说明文本只约束运动语义。这种设计把显式姿态序列替换为音乐语义加节拍时刻加文本语义的组合，是后文三模块的动机来源。

### 两阶段扩散如何先学外观再学动态

与最近既有基线相比，实质增量在于取消姿态输入并引入两阶段分工。第一阶段只学单帧外观与文本运动解耦，第二阶段冻结空间注意力后新增音乐理解节拍对齐与运动对齐 3 个分支。参考分支沿用与去噪主干同结构的 ReferenceNet，而非要求参考与目标对齐的控制分支，因为训练用的参考帧与目标帧取自短时间窗内不同时刻，只共享外观相关特征。

信号规格方面，原文披露视频画面为 640 × 640 像素，第二阶段每样本生成 4 秒视频，帧率为 12 FPS，即共 48 帧。音乐为 16,000 Hz 单声道。文本由 CLIP 编码，音乐由音频频谱变换器编码，节拍由 Librosa 提取后转为独热向量。隐空间下采样倍数与通道维度原文未披露，此处如实说明缺失，不做推测。

以 1 秒信号为例可追踪端到端张量流。第一步，参考帧经变分自编码器编码为潜变量，同时其 DensePose 分割经卷积网络下采样为前景掩膜特征并残差相加，突出主体。第二步，参考分支与去噪分支特征沿宽度拼接后做空间自注意力，保留前一半，再与文本特征做交叉注意力，得到单帧外观能力。第三步，进入第二阶段后，噪声由单帧扩展为 K 帧序列，音乐嵌入长度为 L 的序列与其做跨模态交叉注意力，再在时间维重排做自注意力。第四步，节拍二值向量经查表变为稠密向量后同样做交叉与时间注意力。第五步，拼接最近 M 个已生成帧隐状态做时间自注意力并取后 K 帧输出，最后经解码器得到像素视频。原文明确 M 为 2。

导读：下面架构图完整呈现了上述两阶段数据流与新增模块位置，请先看左侧输入分组与右侧输出分组的颜色区分，再看中间 5 种注意力的图例。

[![原论文 Figure 2：In the first training stage, we train the model to capture spatial information by generating…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-2.png)

*论文图 2：两阶段训练架构：外观预训练与音乐节拍运动驱动的去噪分支汇合（原论文 Figure 2）。*

像素核查显示左侧黄色底块标注第一阶段输入与第一阶段输出，分别为单张噪声与单张人物图，对应单帧外观学习。左下绿色底块标注第二阶段输入，包含堆叠噪声频谱图与波形，右侧绿色底块标注第二阶段输出为堆叠多帧人物图，对应视频序列学习。因此黄色对应单帧路径，绿色对应多帧视频路径。蓝色箭头表示参考分支特征向去噪主干的汇入，黑色箭头表示文本音乐与节拍编码的注入。这种冻结空间只训练时间与条件分支的策略，意在保留外观质量的同时获得节奏同步与帧间连贯。

### 音乐节拍与运动三个模块如何分工保持同步

音乐理解模块负责高层语义与隐式节奏。给定上一模块隐状态与长度为 L 的音乐嵌入，模型先在帧与音乐序列间做交叉注意力，使音乐动态控制每帧生成，再把隐状态重排为空间位置数乘帧数乘通道的形状并沿时间维做自注意力。这种先跨模态后时间的顺序让风格情绪先塑造内容，再由时间注意力补齐连续性。但音频频谱变换器本身不显式编码时间动态，因此单用该模块难以提升时间连贯，这是消融中需要运动模块配合的原因。

节拍对齐模块负责显式时刻锚定。Librosa 检测到的节拍位置转为与视频帧数 K 对齐的二值向量，有节拍处为 1，否则为 0，再经查表嵌入为稠密向量。隐状态与其做交叉注意力，之后同样重排做时间注意力。由于多数舞蹈视频中节拍常对应启动停止或风格切换，该模块把动作变化约束到节拍附近，补充了音乐模块缺少的精确时钟。文本中强调该设计借鉴了自然语言处理中词元处理思想，即把离散节拍当作可查表的词元。

运动对齐模块负责帧间内容连续。除了前两个模块自带的时间注意力，该模块把当前隐状态与前 M 个已生成帧隐状态拼接为运动拼接状态，沿时间序列维做自注意力后取最后 K 个作为当前帧。原文在推理与训练一致性部分明确 M 为 2，即用最后 2 帧隐状态参与约束。这种设计不简单拼接嵌入，而是按音乐语义先行，节拍细化结构，运动平滑过渡的顺序集成，使语义节奏与平滑性同时得到保障。

三者缺一时的行为在后文消融中得到验证。仅有音乐时语义有所改善但时间连贯提升有限，加入运动后视觉质量与平滑性大幅提升，再加入节拍后节奏同步进一步改善。教学例子可设想鼓点处若无节拍分支，模型可能仍生成大幅动作但落点偏移，若无运动分支则相邻帧可能出现抖动。原文未给出各分支参数量占比，此处不做数量推测。

### 新数据集与多基线对比揭示了何种增益与代价

评测协议与公平性前提需要先交代。数据集层面，原始 304 个网络视频经人工筛选与剪辑得到 3,122 个片段，含 489 首音乐与 3,122 条描述，测试集随机抽 228 个含人与非人物样本。指标方向为 PSNR 与 SSIM 越高越好，LPIPS 与 FVD 越低越好，对齐指标为平均与中位距离误差越低越好，音频视频对齐分数越高越好。基线分两类，两阶段类先用 EDGE 由音乐生成动作再经 DISCO 与 Champ 与 MIMO 渲染，单阶段类为 MM-Diffusion 与 MusicInfuser 并在新数据集上微调以保证公平。每个测试重复 3 次不同随机种子并报告均值与标准差。人工听测采用 23 人 5 分制，含质量一致性与对齐三方面，但未报告置信区间。

#### 数据集规模与模态完整性对比

数据集对比的说明段如下。原文强调已有集合或缺音乐文本，或风格背景单一，而新集合覆盖街舞传统舞手势舞并含职业与非职业舞者与真实背景。下表完整呈现 4 个集合在视频音乐与文本三列的差异，数字为原文报告的条目数。该对比有助于理解新集合为何能支撑音乐文本双条件训练，而旧集合因缺失模态或风格单一难以支撑端到端学习。

| Dataset | Videos | Music | Text |
| --- | --- | --- | --- |
| Everybody Dance Now [13] | 105 Videos | ✁ | ✁ |
| TikTok [34] | 350 Videos | ✁ | ✁ |
| AIST+1 [42] | 1408 Videos | 60 Songs | ✁ |
| MuseDance (ours) | 3122 Videos | 489 Songs | 3122 Captions |

新集合在规模与模态完整性上占优。Everybody Dance Now 为 105 个视频，TikTok 为 350 个视频，两者均无音乐与文本。AIST++ 为 1,408 个视频与 60 首音乐但无文本，且多为棚内简单背景。新集合为 3,122 个视频与 489 首音乐及 3,122 条描述。文本由 GPT-4o 按每 10 帧抽样生成并要求只描述动作不描述外貌背景，因此文本质量依赖大模型描述能力，这是复现时需注意的前提。街舞传统舞与手势舞并存且背景为真实场景，使得动作多样性明显高于棚内录制集合。

#### 图像质量与对齐分数的定量增益

主结果覆盖两类基线与 3 组维度。下表列出 6 行方法与 4 列指标，箭头标明最优方向，数值为 3 次运行的均值与标准差，精度与原文一致。该表同时保留两阶段流水线与单阶段端到端两类基线，以便观察联合优化相对分开优化的差异。机制上三模块分工明确，音乐理解模块经音频频谱变换器提取流派风格情绪等高层语义并以交叉注意力注入帧序列，节拍模块经 Librosa 检出节拍位置转独热向量再查表为稠密嵌入并以交叉注意力锚定启停与风格切换点，运动模块拼接前序已生成帧隐状态沿时间维做自注意力并取后段输出，三者按语义先行节拍精化运动平滑的顺序串联。

第二阶段为保持外观生成能力冻结空间注意力块，只训练新增的音乐节拍与运动分支。参考网络与去噪主干结构相同，沿宽度维拼接后做空间自注意力取前半，再与 CLIP 文本特征做交叉注意力，从而在短窗采样的参考帧与目标帧之间传递前景与背景细节。DensePose 只作分割掩膜经卷积下采样残差加入以突出主体，不提供骨骼关键点轨迹，因此不构成显式姿态约束。第二阶段每例生成 4 秒时长视频，运动分支利用最后 2 帧隐状态参与约束，以兼顾外观保持与帧间连贯。

| 方法 | PSNR ↗ | SSIM ↗ | LPIPS ↘ | FVD ↘ |
| --- | --- | --- | --- | --- |
| EDGE 加 DISCO | 27.62 ± 0.12 | 0.601 ± 0.011 | 0.276 ± 0.008 | 401.95 ± 8.21 |
| EDGE 加 MIMO | 28.95 ± 0.09 | 0.651 ± 0.010 | 0.261 ± 0.009 | 356.31 ± 7.36 |
| EDGE 加 Champ | 28.43 ± 0.08 | 0.629 ± 0.012 | 0.269 ± 0.010 | 372.42 ± 9.42 |
| MM-Diffusion | 27.79 ± 0.11 | 0.469 ± 0.013 | 0.299 ± 0.010 | 576.95 ± 11.34 |
| MusicInfuser | 28.82 ± 0.10 | 0.658 ± 0.009 | 0.265 ± 0.008 | 352.18 ± 7.88 |
| MuseDance | 29.57 ± 0.07 | 0.675 ± 0.008 | 0.266 ± 0.007 | 315.76 ± 6.57 |

对比可见 MuseDance 在 PSNR、SSIM 与 FVD 三列为同组最优，分别为 29.57 ± 0.07、0.675±0.008 与 315.76 ± 6.57。在 LPIPS 列最优为 MusicInfuser 的 0.265 ± 0.008，MuseDance 的 0.266±0.007 略高 0.001，因此不能宣称四列全部最优。两阶段基线中 EDGE 加 MIMO 优于 DISCO 与 Champ，但仍受限于动作与渲染分开优化。单阶段中 MM-Diffusion 在四列均为最差，FVD 高达 576.95 ± 11.34，反映其缺乏舞蹈专用设计。

MusicInfuser 因无参考图与显式节拍建模，在时间连贯与对齐上落后。对齐方面原文报告 MuseDance 平均距离误差 0.234 ± 0.007、中位 0.173 ± 0.005、对齐分数 0.179 ± 0.004，优于全部基线但仍逊于真实值 0.218、0.170 与 0.188，说明仍有差距。人工评分中 MuseDance 三项分别为 3.92、3.84 与 4.18，均为最高，但样本仅 23 人且无方差，需谨慎看待。节拍显式建模是差距收窄的关键，而音乐语义单独难以提升时间连贯，需与运动结构配合。

#### 非人物泛化与文本保持的定性对照

导读：下面第一组定性示例检验非人物泛化能力，请注意四行文本各不相同且音符与均衡条颜色按行区分，每行对应一段不同音乐，观察动物姿态连续与背景稳定是否同时成立。该组有助于判断模型在骨骼差异很大的对象上能否维持身份与节奏，而非相同条件下的直接对照。

[![原论文 Figure 4：Music driven dancing video generation on non-human objects.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-4.png)

*论文图 4：四种卡通动物在各自文本音乐条件下生成的四帧舞蹈序列（原论文 Figure 4）。*

左侧蓝色气泡英文分别要求手放髋部再抬起、胸前上下摆手、双脚轻跳加爪子摆动、原地弹跳加前后肢抬起，中间音符与均衡条颜色按行取粉紫浅蓝蓝绿橙区分，确认每行对应一段不同音乐。因此不能理解为相同条件下的比较，而是 4 种独立条件的生成能力展示。右侧每行 4 帧中兔猫等动物姿态连续，背景保持稳定，说明模型在骨骼结构差异很大的对象上仍能维持身份与节奏。

导读：下面第二组示例检验同一文本在不同人物上的语义保持，请注意顶部为同一句动作描述，箭头指向三列不同参考图，观察手臂摆动与重心移动是否随音乐与人物变化而合理迁移。该组同时给出生成帧与真实帧对照，可重点比较动作幅度与相位差异，并以节拍对齐与外观保持为主要评价依据。

[![原论文 Figure 5：Dance video generations with the same text prompt but different reference images and music.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wacv-2026/34aa82742453/figure-5.png)

*论文图 5：同一段文本引导下三张不同参考图生成的舞蹈帧与真实帧对照（原论文 Figure 5）。*

该图顶部为同一句要求手臂上下有力摆动并左右换重心的文本，箭头指向三列不同参考图。左列白衣少年、中列橙衣长发女子、右列浅色古装女子三者在生成行均出现手臂张开幅度变化，但与底部真实行相比幅度与相位存在差异，例如左列生成为单手上举而真实为双手胸前合拢。这表明文本能提供动作方向约束，但具体相位仍受音乐与参考图影响，评价时应以节拍对齐与外观保持为主要依据，而非逐帧复刻真实动作。

### 去掉任一模块或文本音乐条件会发生什么

消融设计围绕第二阶段三模块展开，共 4 种组合。全部去掉时 PSNR 为 24.49 ± 0.11，SSIM 为 0.608 ± 0.010，LPIPS 为 0.295 ± 0.009，FVD 为 729.65 ± 10.24，为最差。仅加音乐时 PSNR 微升至 24.54 ± 0.10，SSIM 至 0.623 ± 0.009，LPIPS 至 0.284 ± 0.008，FVD 至 608.77 ± 7.57，说明语义引导改善感知但时间连贯改善有限。音乐加运动时三项大幅改善，PSNR 至 28.89 ± 0.09，SSIM 至 0.671 ± 0.008，FVD 至 391.82 ± 6.92。三者全加时达到 29.57 ± 0.07、0.675 ± 0.008、0.266±0.007 与 315.76 ± 6.57，节拍分支主要贡献节奏精修。原文未对单加节拍或单加运动做独立消融，此处不做外推。

条件缺失实验进一步区分文本与音乐作用。去掉音乐与文本时质量一致性对齐三项人工分分别为 3.39、2.56 与 3.02，为最低。仅去掉音乐时对齐降至 3.31，而一致性为 3.17，说明节奏线索缺失直接影响同步。仅去掉文本时质量 3.74、一致性 3.28、对齐 4.06，对齐仍较高但一致性下降，说明文本主要约束运动结构。完整条件时三项为 3.92、3.84 与 4.18，证实两者互补。需要强调人工分无标准差与显著性检验，且基线在人工评测时去掉了音乐与节拍嵌入，公平性弱于客观指标中的微调设置。

未胜出项与负结果值得记录。客观表中 LPIPS 最优并非 MuseDance，而是 MusicInfuser 的 0.265 ± 0.008。对齐分数上 MusicInfuser 的 0.171±0.005 接近 MuseDance 的 0.179 ± 0.004，差距小于图像指标差距，说明联合音乐文本端到端本身已能捕捉部分节奏。MM-Diffusion 在对齐上全面落后，平均误差高达 0.538 ± 0.012。此外，数据集仅含单人前向镜头，多人共舞未评测，长序列连贯性原文明确列为未来工作，这些都是当前结论不覆盖的范围。

### 假设边界复现要点与选型建议

#### 假设边界与三分支分工

方法成立依赖若干明确假设。第一，参考图需为单主体居中且镜头基本稳定，训练与测试均以前向单人为主，多人遮挡或大范围运镜未验证。第二，音乐为单声道且节拍可被传统算法检出，若为无明显鼓点或变速曲目，节拍分支效果可能下降。第三，文本描述限定为动作本身，由大模型按固定提示生成，若提示改为包含外貌背景，可能重新耦合外观与动作。第四，第二阶段冻结空间注意力的前提是第一阶段已学好外观，若更换主干权重需重新权衡冻结范围。

三模块在去噪网络中按顺序衔接。音乐理解分支用音频频谱变换器提取曲风与情绪等高层语义，通过交叉注意将音乐嵌入注入视频隐状态，再沿时间维做自注意以维持连贯。节拍分支用传统音频工具检出节拍位置，转为二值向量后经查找嵌入变为稠密向量，同样以交叉注意学习节拍信息并叠加时间注意。运动分支拼接前 2 帧隐状态并沿时间做自注意，取后段作为当前帧输出。先语义后节拍再平滑的顺序，使内容成形、节奏锚定与帧间过渡各有归属。

#### 复现核对与选型观察

复现核对需区分三件事。数据方面，作者资源当前可用，仓库提供数据集说明，原始 304 视频到 3,122 片段的切分与清洗细节需按论文复刻，228 测试划分的随机种子原文未披露。代码权重方面，原文仅说明初值取公开权重与 AnimateDiff，未说明训练代码与最终权重是否公开，不可默认可直接运行。系统方面，两阶段各 30,000 步在 32 卡上的配置对普通实验室过重，复现时可先验证单卡小批量与短序列，再扩展到 4 秒 48 帧。评测时需三次随机种子取均值与标准差，并同时报告图像与对齐两类指标，避免只看 PSNR。

第一阶段在短时间窗内随机抽取参考帧与目标帧，两者仅共享空间相关特征而不做严格对齐。稠密姿态掩膜经卷积网络下采样后残差加入隐表示，以突出前景并保持灵活性。参考特征网与去噪主干同结构，沿宽度拼接后做空间自注意并保留一半输出，再与文本嵌入做交叉注意以解耦外观与动作。第二阶段冻结空间注意以保住外观生成能力，只训练新增分支，复现时可先确认单帧外观已稳定，再进入后续训练以符合原文安排。

工程选型上，若目标是为任意图片配任意音乐快速生成短舞蹈且无姿态数据，该框架省去了姿态采集成本，适合社交媒体与教育演示。若目标是高精度编舞复刻或长片连贯性，仍需考虑显式时间线标注或后处理平滑。若对象为非人物卡通，文本应尽量具体描述四肢摆动方式，实验显示即使笼统描述仍可生成，但具体描述有助于稳定手臂动作。试听与试看时建议对照节拍标记观察动作切换是否落在鼓点附近，并对比基线渲染的抖动，这是论文主观示例希望传达的现象，不应虚构听感细节。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音乐采样率为 16,000 Hz 单声道，第二阶段每样本生成 4 秒视频且帧率为 12 FPS，节拍为与帧数 K 对齐的二值向量，运动模块引用最近两帧隐状态，延迟与 RTF 原文未披露
- **训练与评测数据**：原始 304 个网络视频经人工收集与剪辑得到 3,122 个竖屏单中心片段，覆盖街舞与传统舞蹈及手势舞等多种风格，包含真实人与动物合成动画等非人对象，要求单人出镜画面清晰特效少机位稳定且前视为主，去除片头片尾与闲聊段落后每段约 4 秒，共配 489 首背景音乐与 3,122 条动作描述，描述由 GPT-4o 每 10 帧抽样生成且只写动作忽略外观背景，测试划分随机抽取 228 个含人与非人物样本
- **算力与训练耗时**：训练与推理均在 32 张 NVIDIA A100 80 GB 上进行，两阶段各训练 30,000 步，第一阶段每卡批大小为 12，第二阶段每卡批大小为 2，原文未披露单卡耗时与总时长及具体并行方式
- **核心超参数与配置**：两阶段学习率均为 1e-5 并采用 Adam 优化器更新参数，去噪分支与参考分支初值取 stable-diffusion-v1-5，运动模块初值取 AnimateDiff，丢弃率为 0.05 并用 DDIM 采样，文本经 CLIP 编码后参与交叉注意力，音乐经 AST 编码后参与跨模态注意力，节拍经 Librosa 提取后转为与帧数对齐的二值向量再查表编码，画面保持 640 × 640 像素
- **推理速度与部署开销**：原文未披露 RTF 与首帧延迟及显存占用，仅说明第二阶段每样本生成 4 秒 12 FPS 视频并用 DDIM 采样，运动一致性依赖前两帧隐状态沿时间维自注意力传递，推理质量同时受音乐语义与节拍约束影响
- **开源产物与协议状态**：论文给出数据集链接且对应作者资源当前可用，其余代码权重与推理脚本原文未披露，复现需按论文两阶段描述自行搭建参考分支与音乐节拍运动模块
- **附录与补充材料要点**：原文提及补充材料含基于光流的运动幅度与音频信号对照示例与人工评分标准细则，覆盖清晰度与连贯性及同步性三方面 1 分至 5 分说明，未来工作提出加入更精确时间线标注以改善长序列连贯性，未给出独立附录编号

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 7.4/10 | 技术严谨 6.6/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:wacv:2026:conference-paper-id:Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper`
- 会议来源：[官方记录](https://openaccess.thecvf.com/content/WACV2026/html/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/WACV2026/papers/Dong_MuseDance_A_Diffusion-based_Music-Driven_Image_Animation_System_WACV_2026_paper.pdf)
- Track：WACV 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：取消姿态序列输入，保留外观分支并新增音乐语义节拍运动三模块串行驱动实现端到端生成。

- 核心优势：在228视频测试上三次均值加减标准差报告，PSNR/SSIM/FVD与节拍对齐三指标均居参评方法最优。

- 核心优势：构建3122视频489首音乐3122条动作文本三元组，规模与配对完整性超过AIST++等已有集。

- 主要短板：23人1-5分MOS仅报告均值未报告方差置信区间与盲测协议，缺显著性支撑。

- 主要短板：声称全面超越所有基线但LPIPS的0.266弱于EDGE+MIMO的0.261，表文口径自相矛盾。

---

[← 返回 wacv-2026 论文汇总](/audio-research-portal/posts/conference-wacv-2026/)
