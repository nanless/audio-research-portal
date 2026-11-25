---
title: "Who Plays What: Same-Instrument Music Separation from Video"
date: 2026-11-24
draft: false
tags: [音乐源分离, 音视频声源分离, 多模态学习, 注意力机制]
categories: [论文速递]
description: "同乐器合奏中音色与外形都无法选人，本文用冻结跟踪加双路运动 token 经交叉注意力控制预训练分离器，在 58 人 URMP 上达 5.30 dB、纯二重奏 18.73 dB 且听测一致，代价是需视频点击与滑窗推理并在大人群与混合铜管中明显变弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29411"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "视频点击如何按人分离同乐器合奏"
paper_digest_original_title: "Who Plays What: Same-Instrument Music Separation from Video"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29411v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29411v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29411v1.pdf"
paper_digest_primary_task: "音乐源分离"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-separation","label":"音乐源分离"},{"facet":"task","id":"task.av-source-separation","label":"音视频声源分离"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.attention","label":"注意力机制"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "同乐器合奏中音色与外形都无法选人，本文用冻结跟踪加双路运动 token 经交叉注意力控制预训练分离器，在 58 人 URMP 上达 5.30 dB、纯二重奏 18.73 dB 且听测一致，代价是需视频点击与滑窗推理并在大人群与混合铜管中明显变弱。"
paper_digest_reader_sections: [{"heading":"同乐器合奏里音色与外形同时失效时要按点击分离谁","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"点击跟踪加双路运动表征加预训练分离器的完整管线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"关节点速度与视频 token 如何在频带分离器时间层注入","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"58 人真实合奏与听测共同指向运动而非外形的增益","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"静帧时移与只用关节点三项检验锁定对齐的作用","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界复现核对与工程选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Singapore University of Technology and Design"],"name":"Abhinaba Roy"},{"affiliations":["University of Venice"],"name":"Ambuj Mehrish"},{"affiliations":["University of Venice"],"name":"Sebastiano Vascon"},{"affiliations":["Singapore University of Technology and Design"],"name":"Dorien Herremans"}]
paper_digest_abstract_sha256: "f250599480e07807f6f3743ab8630a682d60d1510c2afca996b0c800a02e8c76"
paper_digest_sidecars: {"citation.bib":{"sha256":"963fb1c583986d7c4fc8f29850608342cbdbf193fb7b5ff9b15347780d841d90","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29411/citation.bib"},"citation.json":{"sha256":"e385d4cbbb2bfea19ad1e570204834f452c9324c890a717a624d9e53b0192d77","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29411/citation.json"},"citation.ris":{"sha256":"60ba625903672097a67e8dba1360bec66ee368f0f5dff5b14f9a1f0779ca95d5","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29411/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"37ee163d6de875fdca29daf25364714b05c22b4d0c3bdb5c1904b9285c999b5e","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29411/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "34ce53afdf8cf98ba09bb95343ed372daa15932aac8090ec3b2a87914fe54e82"
paper_digest_api_reader_plan_sha256: "a68322404063403e2e91e1f62402df99de1e684aa79699c007df0d8d2ee33b0b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c76ad1796b0846d6bf7c162345663b342ffd80dd28383698ceaeb36a98dc6096"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "a98fee86420fca274abdcd043c6fde71458bc12f92ec0c2e2e617581104e22d8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5aac54bccccd2ad3dde45d0cb18d78ae876b9c9c8f06aa6c9c962bb0890fadf4"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c86786e461d2b7846c0ecdef0a4e600564fa6cc97143ce28814ecf946cbb2b69"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 视频点击如何按人分离同乐器合奏

> 英文题目：*[Who Plays What: Same-Instrument Music Separation from Video](https://arxiv.org/abs/2611.29411v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [音乐源分离](/audio-paper-digest-blog/papers/?concept=task.music-separation)；[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [音视频声源分离](/audio-paper-digest-blog/papers/?concept=task.av-source-separation)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 8.0/10 | 技术严谨 7.8/10 | 实验充分 7.7/10 | 清晰度 7.0/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 8.4/10 | 工程/实践 6.0/10


## 👥 作者与机构

- Abhinaba Roy：Singapore University of Technology and Design
- Ambuj Mehrish：University of Venice
- Sebastiano Vascon：University of Venice
- Dorien Herremans：Singapore University of Technology and Design

## 📌 核心摘要

**问题与瓶颈：** 输入为包含多位演奏者的合奏录音与同步视频，输出为用户在首帧点击的那一位演奏者的独奏声音，即使另有一人演奏同种乐器也要只保留被点击者。现有纯音频分离器按乐器种类输出音轨，一首弦乐四重奏中的两把小提琴会被装进同一条小提琴音轨，多数音视频分离器把乐器外观与音色关联起来做选择，两把小提琴外观相同便无法指派音符归属。真正随演奏者变化的是动作与发声在时间上的对应关系，例如运弓换向对应发音起点，左手按弦对应音高变化，吹奏呼吸对应乐句起点，而以往利用动作的工作只在独奏视频人工混音上打分，没有公开代码，也没有在真实合奏录音上逐人打分。

**核心思路与方法架构：** 本文保留预训练音乐分离器对乐器音色的建模能力，新增交叉注意力通路把被点击者的视频信息注入时序建模，从而把选择哪一位的问题交给视频动作时序。以 48 kHz 采样的合奏片段为例，音频经 2048 点窗长、512 点跳长的短时傅里叶变换分频带进入 12 个宽度为 256 的处理块。用户在首帧的点击经冻结的可点击分割跟踪模型 SAM 2.1 逐帧跟踪得到正方形裁剪，冻结的自监督视频编码器 V-JEPA 2 ViT-L 每 2 帧输出 4x4 格共 16 个 1024 维标记，相当于每秒 12.5 个时间步。冻结的全身关键点估计器 RTMW 每帧估计 48 个身体与手部关键点并换算为经边界框归一化的帧间速度，连同置信度组成每帧 144 维向量，两类标记在 10 ms 共享网格上用旋转位置编码对齐时间戳。每个时间层之后以音频特征为查询、演奏者标记为键与值做交叉注意力，输出投影以零初始化保证初始行为与预训练一致，最后由单个复数掩码头经逆变换重建被选声音。训练只用 Solos 与 MUSIC-21 独奏视频合成的 4 秒混音，覆盖 26 种乐器，从不使用合奏录音，SAM 2.1、V-JEPA 2 与 RTMW 全程冻结，只有主干、交叉注意力与掩码头共 43.9M 参数参与更新，推理按 4 秒窗、50% 重叠离线拼接。

**关键实验与核心代价：** 在 URMP 数据集真实合奏逐人评测设置中，以中位信号失真比 (SDR, signal-to-distortion ratio，越高越好) 衡量，本文模型在全部 58 位被点击者上达到 5.30 dB，高于最强可比基线 MVSep Mega 的 0.30 dB。在 8 位纯二重奏上本文达到 18.73 dB，高于基线最高 1.75 dB，合奏声中另一位同乐器干扰被压到目标之下 23.65 dB，纯二重奏中达 39.01 dB。消融显示无视频模型仅 0.52 dB，仅关键点速度模型仍有 4.15 dB，静帧输入跌至 -0.97 dB，视频延迟 0.08 秒跌至 1.38 dB，延迟 0.16 秒后增益消失，说明增益来自动作及其对齐。训练在 4 块 RTX PRO 6000 GPU 上耗时 13.7 小时，原文未报告实时率或延迟实测。

**适用边界与深读导览：** 结论在 URMP 分轨录制后合成的合奏视频上成立，尚未验证现场同期合奏、更大编制或 26 种训练乐器之外的音色与风格，三重奏、五重奏与小号邻近铜管的分组仅略高于平凡参照，12 位演奏者仍低于该参照，两对五重奏中的小提琴在跟踪正确且声部不同时仍失败且原因不明，同一设置只训练一次，MVSep Mega 未公开训练数据重叠也无法排除。想深究交叉注意力注入位置、4 种干扰混合比例与多分辨率损失权重可看方法与训练设置，想核对分组、时移与点击变化的完整数字可看试验对比与补充表格。

## 🔗 开源与复现资源

- 论文首页资源：<https://huggingface.co/datasets/amaai-lab/who_plays_what> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 同乐器合奏里音色与外形同时失效时要按点击分离谁

#### 为什么音色和外形会同时撞车

拿一段弦乐四重奏录像来说，如果只想听第二小提琴，纯音频分离器只能给出一个小提琴声部，里面混着 2 位乐手的所有音符。以往依赖外观的音视频分离器同样难以抉择，因为两把小提琴在画面中几乎一样，模型会得到两次相同的视觉证据。这正是按人分离与按乐器分离的根本差别，前者必须指明保留哪一位演奏者，后者只需指明保留哪一类音色。当音色与外形同时撞车，传统管线就失去了选择依据。

唯一还保留区分度的线索是动作发生的时间。右手换弓方向往往对应音符起点，左手手指移动对应音高变化，吹奏者在乐句之前吸气，这些动作在时间上只与本人的声音对齐。早期工作曾用弓速关联矩阵分解的激活，Sound of Motions 与 Music Gesture 用轨迹与关节点做过同乐器二重奏，但都只在独奏视频合成的混合上评分，没有公开代码，也没有在真实合奏录像上按人逐个打分。因此真实合奏中的按人评测一直缺失。

#### 点击式任务定义与评分口径

任务形式是可直接使用的一次点击。用户在首帧点中一位乐手，模型就要在多人混合录音中只返回该乐手的声音，即使曲中有另一位同乐器乐手。设混合为加法叠加，目标编号为首帧点击选定的声部，其全部视频条件记为随时间变化的运动表征，模型输出对该声部的估计。下标遍历所有声部，可训练参数控制分离行为，视频条件承担点名作用，乐器标签本身不再足够区分同对 2 人。

\[x=\sum_{n=1}^{N}s_{n},\qquad\hat{s}_{k}=f_{\theta}(x,Z_{k}),\]

加法形式对应麦克风记录声波叠加的物理过程，分离就是从总和里恢复其中一项。视频条件的直觉是点名，音频分支只说明混了什么，视频分支只说明留下谁。当曲中只有一位乐手，任务退化为恒等映射，视频作用很小。当同对另一位音量占优，仅靠音色无法确定编号，模型必须依赖运动与声音的时间对齐来选人。输出的估计波形直接送入按秒计算的失真度评分，再按人取中值，是否跟随点击就由正确点击与点错点击的分数差决定。

评测口径决定结论能否成立。URMP 由分轨录制再合成为合奏视频与混合音频，本文取 29 对同乐器共 58 位被点击者，包含 26 把小提琴与 2 把中提琴，还有 12 支长笛与 16 支小号及 2 支萨克斯，曲目含 2 至 5 人，其中 8 人处于纯二重奏。每人得分是输出与本人分轨在 48 kHz 下按 1 s 窗求信号失真比再取中值，总体取 58 人中值并用 10,000 次自助法给出 95% 区间，同对 2 人一起重采样。只降音量的平凡参考得 0.82 dB，方法有效起码要超过它。

### 点击跟踪加双路运动表征加预训练分离器的完整管线

#### 与最近基线的实质增量

与最接近的 MVSep Mega 相比，本模型保留预训练频带切分与 12 层 BS-RoFormer 主干共 26.3M 参数，把 53 个乐器头换成单个复数掩码头，并在每层时间建模后插入交叉注意力。SAM Audio 与 iQuery 及 DAVIS-Flow 3 个音视频基线分别用掩码与裁剪加乐器名及裁剪做提示，主要依赖外形选择乐器。本模型改用被点击者的运动时间选择演奏者，训练只用独奏合成混合，从不在 URMP 真实合奏上训练，这是关键差别。

以 1 s 输入为例，音频在 48 kHz 下为 48,000 个采样，经 2048 点窗长与 512 点跳长的短时傅里叶变换得到约 90 余帧频谱，再经频带切分变为宽 256 的音频特征，原文未披露每秒音频 token 确切数。视频经冻结 SAM 2.1 跟踪掩码取方形裁剪，训练裁剪约 360 px 宽，URMP 约 480 px 宽。V-JEPA 2 每 2 帧输出 4×4 共 16 个 1024 维 token，约每秒 12.5 个时间步，1 s 约 200 个 token，RTMW 每帧给出 48 点 25 Hz 的 144 维速度向量。

理解全景时先沿左下到右上的主箭头通读，再对照右栏三块细节看条件如何注入。下图把视频跟踪与双路表征及交叉注意力与输出重建放在同一张全景里，绿色为视频，紫色为运动，蓝色为音频，玫红为目标，星号表示冻结模块。阅读时先分清四色与 K V Q 箭头，再看共享 10 ms 网格与 4 s 滑窗推理的位置，这样能一次看清端到端数据流。

[![原论文 Figure 2：Method overview. A click selects the target player.](https://arxiv.org/html/2611.29411v1/method_video_music.png)](https://arxiv.org/html/2611.29411v1/method_video_music.png)

*论文图 1：点击跟踪与双路运动表征经交叉注意力控制预训练分离器的完整流程（原论文 Figure 2）。*

图中左下视频分支用 SAM 2.1 把首帧点击变成整段跟踪与方形裁剪，分别送入冻结的 V-JEPA 2 与 RTMW，得到外观动作 token 与速度向量。右下混合分支把波形经短时傅里叶变换与频带切分变成音频特征，中间长条是 12 层分离器，每层时间建模后都用演奏者 token 做一次交叉注意力，输出投影零初始化。左上说明 4 种训练混合与镜像增强，右上给出速度公式与注意力更新，右下说明 4 s 窗半交叠推理。

推理时整曲按 4 s 窗与 50% 交叠滑窗处理并用 Hann 窗混合，单声道复制到双通道喂给立体声主干再平均输出。音频特征在每层先做时间自注意力，再加零初始化投影的交叉注意力结果，最后做频带间交换。这种位置把选人信息先放在时间结构里，再让频带共享决策，避免高低频各自为政。训练冻结 SAM 2.1 与 V-JEPA 2 及 RTMW，只训练主干与交叉层及掩码头共 43.9M 参数。

### 关节点速度与视频 token 如何在频带分离器时间层注入

#### 双路演奏者表征与 10 ms 对齐

被点击者的视频条件由两路互补描述组成。V-JEPA 2 ViT-L 为自监督视频编码器，冻结使用，保留演奏者与乐器及可见动作的外观信息。RTMW 为全身关节点估计器，每帧给出 48 个身体与手部关节点的位置与置信度，用包围盒尺寸归一化帧间差分得到速度，位置本身不再输入。目的是去掉演奏者在画面中的绝对位置，只保留如何运动，两路 token 按 10 ms 共享网格打时间戳并加旋转位置编码。

\[\begin{aligned} \displaystyle u_{t,i} \displaystyle=\frac{p_{t,i}-p_{t-1,i}}{b_{t}}, \\ \displaystyle m_{t} \displaystyle=[u_{t,1},\ldots,u_{t,48},c_{t,1},\ldots,c_{t,48}]\in\mathbb{R}^{144}, \end{aligned}\]

速度形式强调运动而非静止姿态，包围盒归一化让远近与裁剪大小不再决定数值，置信度拼接让模型知道哪些点不可靠。当演奏者静止，速度接近零向量，快速运弓或快速指法对应分量变大。静止与运动的差别直接决定条件是否携带时间结构，静帧输入会让这路退化为常量。两路按共享网格对齐后，音频帧能按时刻查询对应动作，为跨注意力提供可对齐的键与值。

#### 跨注意力注入与训练冻结边界

分离器初始化自 MVSep Mega，在 12 层中每层时间层后加一层交叉注意力，音频特征做查询，演奏者 token 做键与值，输出经零初始化投影加回音频特征，再送频带层。零初始化保证训练起点与预训练主干行为一致，增益完全来自后续梯度。掩码头输出复数掩码，与混合频谱相乘后经逆变换得到目标波形，整个过程保持时间结构先行。

\[\begin{aligned} \displaystyle H \displaystyle\leftarrow\mathrm{Time}_{\ell}(H), \\ \displaystyle H \displaystyle\leftarrow H+W_{\ell}\,\mathrm{CrossAttn}_{\ell}(H,Z_{k}), \\ \displaystyle H \displaystyle\leftarrow\mathrm{Band}_{\ell}(H). \end{aligned}\]

把选人信息放在时间层之后与频带交换之前，直觉是先让每一时刻的音频知道该时刻谁在动，再让频带间共享决策。当输出投影为零，交叉项无作用，模型退化为原乐器分离器。训练后投影放大与动作同步的时频点，抑制非同步声部。频带层随后在频带间传播已带指向性的特征，避免高低频各自为政，从而实现按人选择而非按乐器选择。

训练只用合成混合，每例目标 4 s 加干扰，第二人按 0.20 不同乐器与 0.30 同乐器异视频及 0.25 音高速度匹配与 0.25 同人异时刻抽取，另加 0 至 3 个其他乐器。4 种情况从第一步就混合，镜像概率 0.5，镜像时水平速度取反并交换左右。优化用 AdamW 加 1,000 步暖机与 52k 步余弦调度，批量 32，以验证集目标信噪比选检查点，附录称在 4 张 RTX PRO 6000 上训练十余小时。

\[\begin{aligned} \displaystyle\mathcal{L} \displaystyle=\mathcal{L}_{\mathrm{wav}}+\sum_{r=1}^{5}\mathcal{L}_{\mathrm{spec}}^{(r)}, \\ \displaystyle\mathcal{L}_{\mathrm{wav}} \displaystyle=\lVert\hat{s}_{a}-s_{a}\rVert_{1}, \\ \displaystyle\mathcal{L}_{\mathrm{spec}}^{(r)} \displaystyle=\lVert\mathrm{STFT}_{r}(\hat{s}_{a})-\mathrm{STFT}_{r}(s_{a})\rVert_{1}, \end{aligned}\]

损失为波形绝对值误差加 5 个分辨率复数谱绝对值误差等权相加，谱窗取 4096 与 2048 及 1024 与 512 及 256 点，跳长 147 点，范数覆盖实部虚部与全部元素的均值绝对值。多分辨率迫使波形与不同时频尺度的谱同时逼近，避免只拟合粗包络。预训练主干用新层六分之一学习率，学习率为 3×10−4，权重衰减 0.01，这种设置让分离能力保留而选人能力从零学起。

### 58 人真实合奏与听测共同指向运动而非外形的增益

#### 真实合奏主结果与泄漏拆分

主结果在 URMP 真实合奏上按人打分，共 58 位被点击者，其中弦乐 28 人与管乐铜管 30 人，8 人处于只有同对 2 人的纯二重奏，其余 50 人伴有其他乐器。输入栏区分纯音频与音视频，指标为中值信号失真比越高越好，并给出 95% 自助区间与本模型胜过该行的累计人数。保留混合另加 500 个合成混合与 134 个纯二重奏混合做域内对照，iQuery 与 DAVIS-Flow 仅输出 11 kHz 会丢失 5.5 kHz 以上成分，评分时统一重采样到 48 kHz。

| Method | Input | URMP, real ensemble recordings All (58) Median [95% interval] | URMP, real ensemble recordings Pure duets (8) | Held-out mixtures All (500) |
| --- | --- | --- | --- | --- |
| Unchanged recording | none | −6.29 [−6.79, −5.61] | 0.00 | −4.46 |
| Scaled recording, x/N | none | 0.82 [0.66, 1.00] | 2.91 | 1.09 |
| SAM Audio | A + V | −3.92 [−4.58, −3.16] | −0.20 | −2.47 |
| iQuery | A + V | −0.45 [−0.78, −0.10] | 0.29 | −0.66∗ |
| DAVIS-Flow | A + V | 0.01 [−0.09, 0.01] | 0.02 | −0.18 |
| MVSep Mega | A | 0.30 [0.19, 0.78] | 1.75 | 0.26† |
| Ours | A + V | 5.30 [1.86, 10.31] | 18.73 | 9.56 |

跨行看，没有已发布基线超过只降音量的平凡参考，音频 Mega 在全部 58 人上为 0.30 dB，3 个音视频基线在 0.01 dB 及以下，本模型达 5.30 dB 且区间下限 1.86 dB 仍高于所有基线与平凡参考。纯二重奏差距拉大到 18.73 dB，已发布基线最高为 1.75 dB，平凡参考为 2.91 dB；保留混合上本模型为 9.56 dB，已发布基线最高为 0.26 dB，平凡参考为 1.09 dB。区间很宽是因为有些曲目极好而有些失效，代价是必须有视频点击与更重的推理管线，结论依赖曲目分布。

信号失真比把所有不需要的声音混在一起扣分，看不出留下的是同对另一位还是其他乐器。本文把每 1 s 输出窗按最小二乘拟合为被点击者与同对搭档及其他乐器的加权和，取能量比中值表示泄漏，数值越高表示该干扰被压得越低。这不是 museval 的 SIR，只是单增益拟合，静音窗跳过，搭档定义为同乐器对中的另一位，拆分后能直接看出模型分的是人还是乐器。

| Method | Partner All (58) | Partner Pure duets (8) | Other instruments (50) |
| --- | --- | --- | --- |
| SAM Audio | −0.61 | 0.14 | −17.39 |
| iQuery | 0.08 | −0.76 | 2.32 |
| DAVIS-Flow | 0.26 | 1.07 | 4.78 |
| MVSep Mega | 0.00 | 0.00 | 18.09 |
| No-video model‡ | 0.00 | 0.00 | −0.82 |
| Curriculum model‡ | 21.14 | 32.81 | 14.23 |
| Ours | 23.65 | 39.01 | 21.23 |

所有基线都把搭档留得与目标一样响，搭档抑制在负 0.76 至 1.07 dB 之间，Mega 对其他乐器压到 18.09 dB 但对搭档为 0.00 dB，说明它分乐器不分人。无视频消融同样对搭档为 0.00 dB。本模型把搭档压到 23.65 dB 之下，纯二重奏达 39.01 dB，其他乐器 21.23 dB，课程变体也接近，增益来自视频选人而非训练数据本身，这是按人分离的关键证据。

#### 跟随点击的直接检验与分组强弱

要判断输出是否真正跟随点击，需要把点对人与点错到同对另一位放在同一轴上比较，胜负计数比单一中值更直接。下图左右分别给出全部 58 人与 8 个纯二重奏的正确点击与点错分数，蓝点为正确，橙圈为点错，横轴为中值信号失真比。阅读时先看蓝橙距离，再看右侧标注的胜负人数，这样能判断模型是否按点击切换声部。

[![原论文 Figure 3：Does the output follow the click?](https://arxiv.org/html/2611.29411v1/fig_click.svg)](https://arxiv.org/html/2611.29411v1/fig_click.svg)

*论文图 2：正确点击与点错点击的分数对比，胜负人数显示是否跟随点击切换声部（原论文 Figure 3）。*

左侧全部 58 人里本模型正确点击高于点错的有 51 人，中值差距约 7.5 dB，右侧纯二重奏 8 人全胜，差距约 20.5 dB。3 个音视频基线胜率仅 23 至 29 人，近乎随机，SAM Audio 常返回更突出的那一位而不切换。点错后本模型中值跌到负值，说明同一模型能根据点击返回不同人的声音，而基线几乎不切换，这排除了只增强显著声部的解释。

主结果的中值掩盖了曲目规模与乐器差异，需要按每曲人数与被点击乐器拆开看强弱。下图左侧按 2 至 5 人分组，右侧按小提琴与长笛及小号分组，灰为降音量参考，深灰为纯音频 Mega，蓝色为本模型，纵轴为中值信号失真比。阅读时先对比同组内三色高低，再看样本数是否太少，中提琴与萨克斯各只有一对不宜下结论。

[![原论文 Figure 5：Where the method works. Median SDR by the number of players per piece (left) and by instrument…](https://arxiv.org/html/2611.29411v1/fig_groups.svg)](https://arxiv.org/html/2611.29411v1/fig_groups.svg)

*论文图 4：按每曲人数与乐器分组的中值分数，本模型与降音量参考及纯音频基线对比（原论文 Figure 5）。*

本模型在所有分组都高于基线，纯二重奏与 4 人曲最强，4 人曲达 10.34 dB，长笛与小提琴也较好。3 人曲仅 1.80 dB，5 人曲仅 1.14 dB，小号组仅 1.14 dB，只略高于降音量参考。小号失效多发生在旁边有长号圆号与大号时，小号二重奏本身仍接近 20 dB，2 对 5 人曲小提琴在跟踪正确且声部不同音时仍失败，原因未知，说明大编制仍是弱项。

#### 基线自有基准复现与听测验证

为排除基线运行错误，作者在基线自有 MUSIC 双乐器基准上复现，构建 200 个不同乐器混合，覆盖 11 种 MUSIC 乐器，采用基线原协议的 BSS Eval v3 信号失真比在 11,025 Hz 下双源平均。混合窗长 5.94 s，iQuery 与本模型输入两源之和，DAVIS-Flow 输入均值并按论文缩放输出，录音均不在本模型训练与选点集中，复现分数能检验运行是否正确。

| Method | Mean SDR [95% interval] | In its paper |
| --- | --- | --- |
| The mixture itself | 0.16 |  |
| iQuery | 11.61 [10.88, 12.36] | 11.17 |
| DAVIS-Flow | 12.21 [11.40, 13.03] | 12.01 |
| Ours | 19.08 [18.22, 19.97] |  |

两基线都复现到发表分数 0.5 dB 以内，iQuery 为 11.61 dB 对 11.17 dB，DAVIS-Flow 为 12.21 dB 对 12.01 dB，说明 URMP 弱结果不是运行失误。本模型达 19.08 dB，高出较好基线 6.9 dB，在至少 183 个混合上更优。但该基准全是不同乐器，考的是常规任务而非同乐器，且本模型起点见过 53 类 stems，乐器覆盖更广，因此不能直接证明同乐器能力。

波形分数依赖响度且只比数值，作者另做 MUSHRA 听测，每试次给听者看标出被点击者的静帧与本人真值参考，再对 7 个匿名片段按接近参考程度打 0 至 100 分。共 10 个试次覆盖 2 至 5 人曲，4 个弦乐与 6 个管乐铜管试次，10 s 片段按固定规则在听前选定并归一到负 23 LUFS，16 位非作者听者经耳机完成，顺序随机打乱。

| Method | All trials (10) | Pure duets (3) |
| --- | --- | --- |
| Hidden reference | 95.3 (91.7, 98.1) | 95.5 (91.4, 98.6) |
| SAM Audio | 30.5 (16.8, 45.2) | 38.5 (25.1, 52.4) |
| iQuery | 22.1 (14.2, 30.3) | 19.7 (11.4, 29.6) |
| DAVIS-Flow | 18.2 (10.7, 26.8) | 11.4 (1.4, 27.2) |
| MVSep Mega | 30.2 (21.1, 40.6) | 29.8 (18.9, 40.5) |
| Ours | 69.0 (50.0, 85.2) | 88.0 (73.8, 98.1) |
| Anchor (unchanged recording) | 26.0 (16.3, 36.6) | 31.3 (19.0, 45.4) |

本模型平均 69.0 分，纯二重奏 88.0 分，最好的 SAM Audio 与 Mega 仅 30.5 与 30.2 分，纯二重奏 38.5 与 29.8 分。16 位听者每人对本模型的平均分都高于任一基线，Holm 校正后 p 为 1.2×10−4。基线相对未处理锚点 26.0 分几乎无提升，iQuery 与 DAVIS-Flow 甚至更低，人耳判断与波形分数一致，说明增益可听而非响度技巧，但区间仍宽。

### 静帧时移与只用关节点三项检验锁定对齐的作用

#### 静帧时移与只看关节点

要证明增益来自动作与时间的对齐，需要固定外形只去掉运动，再固定运动只打乱时间。下图左为全部 58 人，右为纯二重奏，横轴为视频相对音频延后秒数，纵轴为中值信号失真比，虚线为无视频模型，点线为静帧，蓝区为纯二重奏保留的增益。阅读时先看延后增大时 3 条曲线的下跌速度，再看蓝区高度与虚线位置，这样能分离运动量与对齐的作用。

[![原论文 Figure 4：Movement, with time, carries the separation.](https://arxiv.org/html/2611.29411v1/fig_motion.svg)](https://arxiv.org/html/2611.29411v1/fig_motion.svg)

*论文图 3：视频相对音频延后时中值分数变化，虚线为无视频对照与点线为静帧（原论文 Figure 4）。*

全部人上延后 0.08 s 本模型从同步大幅跌落，0.16 s 已到无视频水平，更大延后至 4 s 也不回升，说明 0.1 s 量级的错位就破坏分离。纯二重奏保留部分增益，在表列四档时移下纯二重奏介于 6.43 至 10.54 dB 之间，仍高于无视频的 2.95 dB，表明二重奏里还有不依赖时间的身份线索。只看关节点的模型对一帧 0.04 s 已敏感，0.4 s 后回到无视频附近，时间对齐是主要因素。

时移表给出每个延后量的精确中值，V-JEPA 2 模型只能按 0.08 s 步长移动，一个 token 的时长，只看关节点模型可按单帧 0.04 s 移动。所有模型用同一检查点不重训，视频整体后移并在曲尾回绕，外形与运动量不变，只破坏运动与声音的时刻对应。空单元格为未运行条件，最后一行给出无视频模型的对照水平，便于判断增益是否消失。

| Shift (s) | Ours All | Ours Duets | Keypoints only All | Keypoints only Duets |
| --- | --- | --- | --- | --- |
| 0 | 5.30 | 18.73 | 4.15 | 12.18 |
| 0.08 | 1.38 | 10.54 | 0.45 | 2.93 |
| 0.16 | 0.11 | 6.79 | −0.04 | 3.89 |
| 0.4 | −0.32 | 8.82 | −0.68 | 1.67 |
| 4 | −0.54 | 6.43 | −0.71 | 1.02 |
| No-video model | 0.52 | 2.95 | 0.52 | 2.95 |

全部人上 0.08 s 本模型从 5.30 跌到 1.38 dB，0.16 s 已到 0.11 dB，低于无视频的 0.52 dB。纯二重奏本模型在表列四档下为 10.54 与 6.79 及 8.82 与 6.43 dB，关节点模型从 0.4 s 起贴近无视频。时移逐人计数也支持结论，0.08 s 已有 45 人下降，4 s 达 50 人，说明增益需要对齐而非运动量。

#### 消融与提示词稳健性

消融每次只改一处，课程变体只改混合引入顺序，无视频去掉全部 token 与交叉层，只看关节点去掉 V-JEPA 2，无镜像去掉翻转增强，未预训练把主干随机初始化。指标仍为 URMP 中值与保留混合中值，弦乐与管乐铜管及纯二重奏拆开可看互补性。保留混合对本模型是域内，对基线是域外，解读时需注意公平性前提，域内差距不能直接外推。

| Model | URMP All | URMP Duets | Held-out |
| --- | --- | --- | --- |
| Ours | 5.30 | 18.73 | 9.56 |
| curriculum | 3.43 | 15.66 | 9.90 |
| (a), no video | 0.52 | 2.95 | 1.24 |
| (a), keypoints only | 4.15 | 12.18 | 6.46 |
| (a), no mirror augm. | 3.29 | 11.04 | 9.54 |

无视频跌到与降音量相当，说明数据本身给不出选人信息。课程引入为 3.43 dB 低于常规 5.30 dB，44 人常规更高，保留混合两者相近。视频 token 在全部人与纯二重奏各加约 1 与 6 dB，同人异时刻也从 3.86 提到 6.31 dB，管乐铜管两者接近。镜像增强在全部列都有帮助，960 px 小裁剪与随机主干都会大幅跌落，说明预训练分离能力与足够大的外观不可或缺，动得多本身不带来增益。

### 适用边界复现核对与工程选型建议

#### 方法假设边界与未验证条件

方法假设画面能稳定跟踪到被点击者且动作与声音在 0.1 s 内对齐，假设乐器在 26 种训练覆盖内，假设分轨式录制混合能代表真实合奏。3 人曲与 5 人曲及小号邻铜管组只略高于降音量参考，2 对 5 人曲小提琴在跟踪正确且声部不同音时仍失败，原因未知。部分演奏者低于降音量参考，部分未超纯音频 Mega，中值区间的上半很宽，结论依赖曲目，12 人低于平凡参考提示仍有失效。

评估用分轨录制再合成，声场串扰与现场视听同步误差未覆盖，部分设计受 URMP 启发，每种设置只训一次，MVSep Mega 未公开数据可能重叠。训练从未见现场合奏，实时合奏与无效点击拒绝及其他乐器与其他风格是否成立仍未验证，文本提示找错人与静帧异常输入也提示分布外行为需谨慎。附录给出损失权重与基线运行及区间分组与时移点击与其他提示词及失效细节，可供核对。

#### 复现核对与工程选型

复现需区分三件事，代码与权重及数据演示是否可运行。本文给出演示页与代码库及数据集链接，资源身份记录未确认其作者归属与可达状态，均按论文提及的第三方链接处理，不宜直接断言可运行。训练需 4 卡与批量 32 及十余小时，推理按 4 s 窗半交叠混合，首帧三点经检测器加人工核对，其余提示词无需重训。推理延迟与实时率及显存原文未披露，第一步应补实测。

若要在教学跟练或演唱会重混里按人取声，纯同乐器二重奏与 4 人曲是优先试点，试听时重点对照被点击者与搭档谁更响，有无其他乐器残留，失真与丢音是否可接受。先在合成混合上复现验证信噪比，再在目标乐器真实现场小规模验证对齐与跟踪。动得多不等于分得好，增益取决于动作是否与音符对齐，这是选型时最关键的判断依据。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：URMP 按 48 kHz 评分并重采样所有输出；分离器 STFT 窗长 2048 点、跳长 512 点；V-JEPA 2 每 2 帧输出 16 个 1024 维 token 约每秒 12.5 步；RTMW 每帧 48 点 25 Hz 速度向量；共享 10 ms 网格加旋转位置编码；推理按 4 s 窗 50% 交叠 Hann 混合；RTF 与延迟原文未披露
- **训练与评测数据**：训练用 Solos 与 MUSIC-21 独奏视频合成 4 s 混合，覆盖 26 种乐器，1,088 训练、51 验证、78 测试，排除 MUSIC 与 MUSIC-21 基准测试集 158 个录音，从不在 URMP 上训练；评测用 URMP 29 对同乐器共 58 位乐手与 500 个保留合成混合及 200 个 MUSIC 双乐器混合
- **算力与训练耗时**：4 张 RTX PRO 6000，每批 32 个 4 s 混合，52k 步余弦调度加 1,000 步暖机，本模型 37k 步达最佳验证信噪比 10.27 dB，训练耗时 13.7 小时；课程变体 49k 步 17.6 小时
- **核心超参数与配置**：AdamW 学习率 3×10−4、beta (0.9,0.95)、权重衰减 0.01，预训练主干用新层六分之一学习率；损失为波形绝对值误差加 5 个分辨率复数谱绝对值误差等权相加，谱窗 4096 至 256 点、跳长 147 点；第二人抽取概率 0.20、0.30、0.25、0.25，镜像概率 0.5
- **推理速度与部署开销**：推理按 4 s 窗 50% 交叠滑窗并 Hann 混合，单声道复制到双通道喂立体声主干再平均输出；训练参数 43.9M 其中主干 26.3M，冻结 SAM 2.1 与 V-JEPA 2 及 RTMW；RTF、延迟与显存原文未披露
- **开源产物与协议状态**：论文给出演示页、代码库与数据集链接，数据集链接本次作为第三方可达，代码与演示页未确认作者归属与可运行状态，均按论文提及处理；附录覆盖损失权重、基线运行与分组细节
- **附录与补充材料要点**：附录给出损失权重与优化细节、基线运行与重采样处理、自助区间与分组数字、保留混合按人数与第二人种类拆分、时移全量表、运动量相关性、点击检验、泄漏拟合公式、提示词变化与失效案例及听测协议

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.29411v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在URMP真实合奏58位逐人评测达5.30dB中位SDR，同对干扰压至23.65dB以下，纯二重奏达18.73dB远超0.30dB最强基线。

- 核心优势：三级运动因果对照完整，无视频仅0.52dB、静帧跌至-0.97dB、0.08秒时移跌至1.38dB，且16人MUSHRA盲测69.0分显著领先。

- 核心优势：冻结SAM2.1跟踪加V-JEPA2与48点归一化关键点速度经旋转位置编码对齐，以零初始化交叉注意力注入预训练分离器。

- 主要短板：三重奏1.80dB与五重奏1.14dB仅略高于平凡参照，12位低于参照，两对五重奏小提琴跟踪正确仍失败且原因不明。

- 主要短板：每种设置只训练一次且纯二重奏仅8位致区间较粗，iQuery等以11kHz输出在48kHz全频带打分且Mega训练重叠无法排除。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
