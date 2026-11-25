---
title: "LiveAudio: From Bidirectional to Autoregressive Diffusion for Real-Time Streaming Video-to-Audio Generation"
date: 2026-11-24
draft: false
tags: [视频到声音生成, 一致性模型与少步蒸馏, 流式处理, 实时处理]
categories: [论文速递]
description: "LiveAudio 针对视频边播边配音的实时交互需求，选择把双向视频到音频扩散模型经因果微调与少步蒸馏转为块自回归流式生成器，在 VGGSound 上以 DeSync 0.395 取得全部对比模型中最优同步并在单张 A100 上以 RTF 0.79 实现实时，代价是分布距离略升且结论依赖神经代理指标与有限主观听测。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30714"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "LiveAudio：从双向扩散到自回归扩散的实时流式视频生成音频"
paper_digest_original_title: "LiveAudio: From Bidirectional to Autoregressive Diffusion for Real-Time Streaming Video-to-Audio Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30714v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30714v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30714v1.pdf"
paper_digest_primary_task: "视频到声音生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"method","id":"method.consistency-distillation","label":"一致性模型与少步蒸馏"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "一致性模型与少步蒸馏"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "LiveAudio 针对视频边播边配音的实时交互需求，选择把双向视频到音频扩散模型经因果微调与少步蒸馏转为块自回归流式生成器，在 VGGSound 上以 DeSync 0.395 取得全部对比模型中最优同步并在单张 A100 上以 RTF 0.79 实现实时，代价是分布距离略升且结论依赖神经代理指标与有限主观听测。"
paper_digest_reader_sections: [{"heading":"流式视频到音频必须在只看过去画面的条件下实时发声","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"LiveAudio 把因果与效率解耦为四阶段离线到直播转换","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"块因果 Transformer 与因果 VAE 加同步对齐条件实现零前视","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"四阶段先因果后效率，非对称分布匹配找回同步","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"VGGSound 上同步最优且实时，主观听测与延迟分解相互印证","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"四阶段与同步对齐条件缺一不可，非对称监督是同步关键","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"同一模型兼顾文本到音频，部署需在单卡实时与同步增益间权衡","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Tsinghua University"],"name":"Yuxuan Jiang"},{"affiliations":["Tsinghua University"],"name":"Zehua Chen"},{"affiliations":["Monash University"],"name":"Yusheng Dai"},{"affiliations":["Renmin University of China"],"name":"Andong Wang"},{"affiliations":["Tsinghua University"],"name":"Weibei Dou"},{"affiliations":["Tsinghua University"],"name":"Jun Zhu"}]
paper_digest_abstract_sha256: "b64150cf0b90e6b6d08362f0a2dafc14600336d95ccfa4699b263b9805b017ba"
paper_digest_sidecars: {"citation.bib":{"sha256":"5f5e74d24569bc515875b204505c991e3338c29fcbd9183266110f994e8e576c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30714/citation.bib"},"citation.json":{"sha256":"5f183e2eb870087a89f23d3eeda6e55cf65cdbe99506844229d6137246351456","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30714/citation.json"},"citation.ris":{"sha256":"aa8839dcc969eca4df0d1bd9715177c692e439c837dcbd389295ca117c827c61","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30714/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"57a26b21beafab98eb86bd1b5b5657b40209c0bb1b0fa56c01203c0074fcc3dc","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30714/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "a5e478b241caead808b826c8b5d6dff9075581d5eda18791d8c44a487ac787bb"
paper_digest_api_reader_plan_sha256: "e8e8f0dd7f6c6a64a88226bfb4ff72703b0eca451029686c43b73d3b599e8159"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e755d4c0d6125f9947afefcf0426d8b26c2d30e53422c3336815d7db07a475eb"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "e7fd2acc253c5666678cf69cefe24a9125261944b39b2233d97686155f076b7e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9876b0299d3bd49ecc642903d34bb589e4c2e4b2f1b13084575b3b84f737c66d"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8f915084b53e40338bc57882c754958110a749da5ddb8b0631ffb15c9ae57bf0"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 LiveAudio：从双向扩散到自回归扩散的实时流式视频生成音频

> 英文题目：*[LiveAudio: From Bidirectional to Autoregressive Diffusion for Real-Time Streaming Video-to-Audio Generation](https://arxiv.org/abs/2611.30714v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-paper-digest-blog/papers/?concept=task.video-to-audio)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [一致性模型与少步蒸馏](/audio-paper-digest-blog/papers/?concept=method.consistency-distillation)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.7/10** | 创新 7.9/10 | 技术严谨 7.4/10 | 实验充分 8.2/10 | 清晰度 7.0/10 | 影响力 7.2/10 | 开源 0.0/10 | 可复现 7.5/10 | 工程/实践 7.8/10


## 👥 作者与机构

- Yuxuan Jiang：Tsinghua University
- Zehua Chen：Tsinghua University
- Yusheng Dai：Monash University
- Andong Wang：Renmin University of China
- Weibei Dou：Tsinghua University
- Jun Zhu：Tsinghua University

## 📌 核心摘要

**问题与瓶颈：** 视频到声音生成要让声音在内容与时间上与画面对齐，离线双向扩散变换器对整段视频与音频做双向注意力，只有拿到完整视频才能开始采样，难以用于视频边播边配音的直播、游戏与交互世界模型。此前流式模型多从零训练因果自回归主干加局部扩散头，同步对齐视频条件等改进虽缩小了差距，音质与同步仍需重新学习，无法直接继承双向模型已有的分布。落到实现上还有三重约束：视频条件随播放到达，生成当前块只能用已播帧；因果模型看不到后文音频与视频，同步容易受损；每块要在块时长内完成视频编码、数步采样与波形解码，否则延迟会逐块累积。

**核心思路与方法架构：** 与从零训练不同，LiveAudio 把双向模型原地转为自回归少步生成器，保留 24 层 1536 宽约 1.2B 参数量级的扩散变换器权重与双路视频注入方式，只把注意力掩码、视频供给与采样步数改掉。以 1 s 为例，48 kHz 立体声经冻结的因果音频变分自编码器下采样 1600 倍，得到 30 Hz 共 30 个 64 维隐变量，每 3 个组成 0.1 s 的块；视频侧 25 fps 的 Synchformer 以 0.08 s 切片为单位用拖尾滑窗编码当前块已播帧并经自适应层归一化调制对应音频词元，8 fps 的 CLIP 特征只对已到达帧做交叉注意力，可选文本由冻结的 Flan-T5 base 编为至多 128 个词元。训练分四段推进：先在同步对齐条件下预训练双向模型，再做块因果微调使每块只见历史，接着用常微分方程回归把 48 步加引导的轨迹蒸为 4 步无引导生成器，最后用双向教师对生成器自产整段做非对称分布匹配蒸馏加对抗损失，把丢失的同步补回。推理时已完成块的键值缓存在显存中复用，当前块经 4 步采样后由有状态因果解码器即刻播出，平均视频等待约 0.11 s，常数播放延迟 0.23 s 即可不间断播放。

**关键实验与核心代价：** 在 VGGSound 测试集上，LiveAudio 的去同步误差（DeSync，越低越好 ↓）为 0.395，低于自家双向教师的 0.484，也低于离线 MMAudio 的 0.457 与流式 LiveFoley 的 0.480 和 WorldSonus 的 0.659，为全表最低；语义侧 ImageBind 相似度（IB，越高越好 ↑）为 0.323，CLAP 相似度（CLAP，越高越好 ↑）为 0.252，均为流式最优且接近离线水平。分布与音质侧，Fréchet 距离 FDV（越低越好 ↓）为 1.30，FDP 为 7.32，PANNs 初始分数（ISP，越高越好 ↑）为 15.87，Audiobox 美学生产质量（PQ，越高越好 ↑）为 6.41，均优于有数值的流式基线，PQ 为全表最高。20 人主观评测中时间对齐平均意见分（MOS-T，越高越好 ↑）为 4.06 ± 0.27，为除真实音频外所有生成模型最高，音质分（MOS-Q）为 3.66 ± 0.19，为流式最高，与客观指标一致；同一模型在 AudioCaps 文本到声音任务上 FDV 为 2.02，为全表最低。代价侧，4 步无引导采样在单张 A100 GPU 上首帧延迟（TTFF，越低越好 ↓）为 0.143 s，实时因子（RTF，越低越好 ↓）为 0.79，消融显示第 4 阶段把 DeSync 从 0.544 降到 0.395，但 FDV 从 1.18 回升到 1.30，FDP 从 6.22 升到 7.32，符合分布匹配蒸馏偏好众数的倾向。

**适用边界与深读导览：** 上述结论成立于 10 s 片段、以声源可见为特点的 VGGSound 评测协议与单张 A100 GPU 批量为 1 的实测条件，去同步与 IB 只在前 8 s 上计算。长流仅在文本到声音 60 s 外推上验证并需保留最近 5 s 缓存，真实直播的网络抖动、多说话人与强噪声场景尚未覆盖。若想复听标题卡静音与鼓点击打等案例的对齐差异，可对照演示页试听；若想深究块因果掩码、常微分方程回归与非对称蒸馏梯度的公式与消融，可重点看下文方法、实验结果与细节详述对应小节。

## 🔗 开源与复现资源

- 论文所列链接：<https://streamaudio.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式视频到音频必须在只看过去画面的条件下实时发声

视频到音频生成要求根据画面内容与时间点合成声音，近期双向扩散 Transformer 在音质与同步上进步明显，但其注意力让每个音频位置都能看到整段视频与整段音频，只有拿到完整视频后才能开始生成。直播、游戏与交互式世界模型等场景以帧为单位连续给出视频，要求声音边播边生成，且生成速度不慢于播放速度，这就把离线假设打破了。

已有流式路线多为从零训练因果模型，从 V-AURA 的自回归离散 token，到 SoundReactor、SwanSphere、WorldSonus 与 LiveFoley 的因果自回归骨干加局部扩散头，其中 LiveFoley 的同步已接近离线模型。这条路线的代价是音质与同步都要重新学习，无法继承双向模型已具备的能力。视频生成领域则走通了另一条路，先做因果微调再做蒸馏，把双向模型转为因果少步自回归生成器，并已用于化身与音视频联合生成，但尚未在视频到音频上验证，原因在于条件随时间到达、因果带来同步损失、采样与视频编码都要计入实时预算。

为此论文把问题写成按块分解的流式条件分布，设文本为 y，视频帧为 f1:T，音频隐变量按时间切为 K 个块 x1:K，第 k 块覆盖 [sk, ek)，在时刻 τk 生成时只能用已到达的视频 f≤τk、文本与已生成历史。下面的因式分解把因果与实时两项要求形式化，也是后文块因果掩码与 KV 缓存的依据。

\[p_{\theta}(x_{1:K}\,|\,f_{1:T},y)=\prod_{k=1}^{K}p_{\theta}(x_{k}\,|\,c_{k}),\]

该式目标是把整段音频联合分布写成各块条件概率连乘，每块上下文 \(c_k\) 包含 y、历史 \(x_{\lt k}\) 与已播视频 \(f_{\leq \tau_k}\)，θ 为生成器参数。采用连乘的统计直觉是自回归分解保证无未来泄露，物理直觉是声音不早于画面，每块起始隐变量时刻早于 τk。极端取值下，若允许看到未来帧就退回离线双向模型，若历史为空则首块只靠已播视频与文本生成。该分解直接驱动推理按块顺序执行，前块结果经缓存成为后块条件，训练时也据此对每块并行施加流匹配或蒸馏损失。

### LiveAudio 把因果与效率解耦为四阶段离线到直播转换

与从零训练的流式基线相比，LiveAudio 的实质增量是继承而非重学，保留 MMAudio 与 Omni2Sound 的双路视频注入与 DiT 主干，只改变因果可见性与采样步数。信号规格上沿用 SoundReactor 因果音频 VAE，48 kHz 立体声编码为 64 维 30 Hz 隐变量，每 3 个 token 组成 0.1 s 音频块，DiT 为 24 层 24 头宽度 1536 约 1.2B 参数，Synchformer 跑 25 fps 切片 0.08 s，CLIP 跑 8 fps，文本由冻结 Flan-T5 base 编码至多 128 个 token，训练与推理默认 10 s 片段。

以 1 秒输入为例，它对应 30 个隐变量即 10 个 0.1 s 块，视频侧约 12 至 13 个 Synchformer 切片与 8 个 CLIP 帧。流程按序为 1 视频按显示顺序解码并增量抽特征，2 每个音频 token 经同步对齐只取包含其起始时刻的切片特征，3 块因果 DiT 在 KV 缓存下用 4 步生成当前块，4 因果 VAE 解码器立即输出 0.1 s 波形并播放，5 已完成块的键值写入缓存供后块注意，全程无重算历史。原文未披露码率，缺失维度如实说明。

下图总览把上述数据流与四阶段训练放在一起，左侧为按块生成与解码的因果链路，中间标注 CLIP 与 Synchformer 双路注入与 KV 缓存位置，右侧为从双向到四步无引导生成器的渐进变化，读时先沿视频到达箭头看每块依赖，再对照 4 个阶段框看每次只改一处性质的递进关系。

[![原论文 Figure 2：Overview of LiveAudio. (a) Audio is generated block by block and decoded as soon as it is…](https://arxiv.org/html/2611.30714v1/overview.png)](https://arxiv.org/html/2611.30714v1/overview.png)

*论文图 2：按块生成解码的因果链路与四阶段从双向到四步生成器的训练递进（原论文 Figure 2）。*

图中 (a) 顶部为随时间向右的视频帧，已播帧为实线彩色而未来为空虚线框，f1 至 f5 与 now 标记到达边界，CLIP 标每帧 8 fps 经交叉注意进入，Synchformer 标拖尾窗口 25 fps 经 AdaLN 调制，文本编码器为可选虚线框。下方蓝色大框为块因果 DiT，橙色标 KV 缓存与当前块 4 步无引导去噪至噪声，底部橙色长条为因果 VAE 解码器，音频波形 a1、a2 与 a3 按块实线输出而未来为虚线。(b) 4 个蓝框为阶段 1 双向全注意加噪整段、阶段 2 干净历史因果注意、阶段 3 从 t 等于 1 到 0 的 ODE 轨迹学终点、阶段 4 自身历史 4 步的分布匹配，箭头标 init 继承关系，损失分别注为 LCFM 与 LODE、LDMD。

### 块因果 Transformer 与因果 VAE 加同步对齐条件实现零前视

#### 因果编解码与块注意力结构

已有文本到音频与视频到音频系统的音频 VAE 多用非因果卷积，解码一个隐变量需要看到后续隐变量，按块提前解码会出现边界咔哒声。LiveAudio 直接沿用 SoundReactor 的因果 VAE 并全程冻结，编码器以 2、4、5、5 与 8 步长共 1600 倍下采样，把 48 kHz 立体声压为 30 Hz 64 维隐变量，解码器以因果转置卷积镜像重建，有状态解码在调用间保留过去输入，每 3 个隐变量即解出 0.1 s 音频。附录对比显示双向 VAE 按块流式解码会在每个边界产生 clicks，而因果 VAE 流式与整段解码波形一致。

主干为 Stable Audio Open 结构的扩散 Transformer，10 s 片段对应 300 个 token 切为 100 块，自注意力掩码为块因果，块内全可见而块间只能看当前与历史块，看不到未来块。双向模型用一个携带整段噪声水平的 token，流式版本给每块各自的噪声水平 token，使不同块可处不同噪声。训练时当前块加噪而历史保持干净，推理时已完成块经一次干净前向写入 KV 缓存，后块只处理本块 3 个 token 并注意缓存，单块跨整段时即退化为双向模型，权重可直接迁移而无需增参。

#### 同步对齐的双路视频注入

视频条件保留 MMAudio 的两条路径，Synchformer 特征经自适应层归一化调制每个音频 token，CLIP 特征与文本一起进入交叉注意。流式改法是每 2 帧记为一片，Synchformer 对以该片结尾的拖尾窗口增量编码，每 token 取包含其起始时刻那片特征，CLIP 按 8 fps 采样，token 只能注意在其片结束前已到达的帧，文本全程可见。第 k 块在全部 token 对应切片播完的时刻 τk 生成，只等最后 token 的一片，不做额外前视，视频等待 τk 减 sk 平均约 0.11 s，时序线索随播放到达，语义上下文随历史累积。

#### 流匹配目标与带引导的常微分方程采样

双向与因果模型都用条件流匹配学习速度场，把高斯噪声输运到数据，区别仅在前者对整段建模而后者对单块在因果上下文下建模。训练时沿线性路径加噪并回归路径速度，视频与文本以 0.1 概率联合丢弃以支持无条件预测，该设计让双向与因果共享同一速度回归形式，只需更换掩码与上下文即可迁移权重，下式为该阶段的核心监督。

\[\mathcal{L}_{\mathrm{CFM}}=\mathbb{E}_{t,\,x,\,\epsilon}\left[\left\|v_{\theta}(x_{t},c,t)-(\epsilon-x)\right\|_{2}^{2}\right].\]

该损失期望对噪声水平 t、干净样本 x 与噪声 ϵ 取平均，\(x_t\) 为线性插值，\(v_\theta\) 为预测速度，c 为上下文。采用最小二乘的统计直觉是让模型速度逼近真实位移 ϵ 减 x，t 越大噪声越多，t 服从 logit 正态分布以覆盖不同难度。极端下 t 接近 1 时输入近纯噪声需大步指向数据，t 接近 0 时输入近干净只需微调，空条件时退化为无条件速度。学到的速度场直接决定推理常微分方程的 drift，下一阶段的因果微调与 ODE 蒸馏都复用同一目标，只是把上下文换成因果历史。

推理时单靠条件速度一次去噪不够稳定，论文沿用分类器无关引导，把无条件与条件预测线性组合以增强条件依从性。训练时的条件丢弃正为此准备，推理需两次前向分别得到空条件与带条件速度，再按引导尺度外推，下式给出从 t 等于 1 到 0 求解的常微分方程，也是后文抽取 ODE 轨迹的起点。

\[\frac{\mathrm{d}x_{t}}{\mathrm{d}t}=v_{\theta}(x_{t},\varnothing,t)+w\,\big[v_{\theta}(x_{t},c,t)-v_{\theta}(x_{t},\varnothing,t)\big].\]

该式目标是从噪声解出干净块，\(x_t\) 为 t 时刻状态，空集为无条件，w 为引导尺度，实验取 4.5。物理直觉是无条件项给出大方向，括号内差值指向条件特有细节，w 放大该差值以压住通用背景声。极端下 w 等于 0 退化为无条件生成，w 过大则过拟合条件而失真。求解需 50 步 Euler 积分且每步两次 DiT 前向，代价高但轨迹确定，这正是后文用 ODE 回归蒸为 4 步的动机，引导信息被固化进轨迹终点而不再需要在线组合。

### 四阶段先因果后效率，非对称分布匹配找回同步

#### 前两阶段建立因果起点

第一阶段在因果 VAE 隐空间训练双向 DiT，数据为 SoundAtlas 的 470k 视频音频文本三元组加 AudioCaps 与 WavCaps 文本音频，任务按视频文本到音频 0.35、视频到音频 0.55、文本到音频 0.10 混合，噪声水平服从 logit 正态，条件丢弃 0.1，500k 步后取指数滑动平均作后文真分数。第二阶段只换掩码为块因果并微调 100k 步，目标数据与视频条件不变，采用教师强制把干净与加噪拷贝拼入一序列，每块独立抽噪声水平，所有块并行监督，得到仍需 50 步加引导采样的因果模型。

#### 后两阶段蒸为四步无引导生成器

第三阶段解决效率，用 ODE 回归把因果模型蒸为无需引导的少步生成器。用第二阶段模型在真值历史下解带引导常微分方程，48 步均匀网格恰含 1、0.75、0.5 与 0.25 4 个采样时刻，存下 131,072 个训练片段在四时刻的状态与终点。生成器由因果模型初始化，随机抽一时刻预测终点，训练 30k 步且不再丢条件，因为引导已包含在轨迹中，此时生成器仍未见过自身历史。

\[\mathcal{L}_{\mathrm{ODE}}=\mathbb{E}_{\bar{x},\,k,\,i}\!\left[\left\|G_{\phi}(\bar{x}_{k,t_{i}},c_{k},t_{i})-\bar{x}_{k,0}\right\|_{2}^{2}\right],\]

该损失期望对轨迹片段、块与时刻取平均，\(G_\phi\) 为一步前向的生成器，横线 x 为存储的中间状态，\(c_k\) 为因果上下文，\(t_i\) 为四时刻之一，终点为轨迹输出。采用终点回归的直觉是把多步积分压缩为直接跳跃，统计上匹配教师轨迹的确定性映射而非分布。极端下若只学 t 等于 1 则退化为纯噪声到数据的一步映射，难度最大，若学接近 0 的时刻则近恒等映射。预测终点后按线性路径重加噪到下一时刻交替执行即得四步采样，下一阶段将在此基础上用自身历史微调同步。

第四阶段解决同步，用非对称分布匹配蒸馏让双向教师监督因果学生的整段自生音频。生成器按块用自身输出作历史产生整段，加噪后比较真假分数差以更新，真分数来自冻结双向指数滑动平均加 4.5 引导，假分数由同权重初始化并在线跟随生成分布的副本给出，分数均由速度预测换算。另在假分数第 12 块后加判别头区分真假隐变量，最小二乘对抗损失在生成器权重 0.01 与假分数权重 0.005，3k 迭代中假分数每步更新而生成器每 5 步更新一次，共 600 次生成器更新。

\[\nabla_{\phi}\mathcal{L}_{\mathrm{DMD}}=\mathbb{E}_{t,\,\epsilon,\,\epsilon^{\prime}}\!\left[\big(s_{\mathrm{fake}}-s_{\mathrm{real}}\big)(\tilde{x}_{t},c,t)\,\frac{\partial\tilde{x}_{t}}{\partial\phi}\right],\]

该梯度目标是最小化生成分布与教师分布在各噪声水平的逆向 KL，波浪线 x 为重加噪后的自生片段，真假 s 分别为两分布分数，φ 为生成器参数。采用分布而非轨迹匹配的直觉是教师无需与学生同上下文，可整段评判同步而学生保持因果。极端下若两者一致则梯度为零，若生成偏离则差值方向推动其向教师高密度区移动。梯度经偏导回传只更新退出步输出，配合对抗损失提升感知质量，最终在不增加前视与步数下把同步拉回甚至超过教师。

### VGGSound 上同步最优且实时，主观听测与延迟分解相互印证

#### 离线流式主对比与效率

VGGSound 测试集评测覆盖分布匹配、音频质量、模态对齐与效率 4 组，分布用 OpenL3、VGGish 与 PANNs 的 Fréchet 距离 FDO、FDV、FDP 与 PaSST、PANNs 的 KL 散度 KLS、KLP，质量用 PANNs inception 分数 ISP 与 Audiobox 美学 PQ，对齐用 Synchformer 偏移绝对值 DeSync、ImageBind 相似度 IB 与 CLAP 相似度，效率用首帧时间 TTFF 与实时率 RTF。对比含离线 MMAudio 与自研双向教师，流式含 V-AURA、WorldSonus 与引自原文的 LiveFoley，其余均用官方权重实测，离线 TTFF 以横线表示不参比。

| Method | Distribution Matching FDV↓ | Audio Quality ISP↑ | Audio Quality PQ↑ | Modality Alignment DeSync↓ | Modality Alignment IB↑ | Modality Alignment CLAP↑ | Efficiency TTFF (s)↓ | Efficiency RTF↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MMAudio | 0.76 | 14.20 | 5.90 | 0.457 | 0.327 | 0.308 | - | 0.37 |
| LiveAudio (teacher) | 1.29 | 15.81 | 6.26 | 0.484 | 0.324 | 0.260 | - | 0.50 |
| V-AURA | 2.88 | 10.10 | 6.00 | 0.678 | 0.279 | 0.252 | 7.148 | 2.31 |
| WorldSonus | 1.67 | 9.09 | 6.28 | 0.659 | 0.258 | 0.197 | 0.502 | 0.60 |
| LiveFoley† | - | 11.42 | 6.26 | 0.480 | 0.290 | - | 0.156 | - |
| LiveAudio (ours) | 1.30 | 15.87 | 6.41 | 0.395 | 0.323 | 0.252 | 0.143 | 0.79 |

主结果中 LiveAudio 的 DeSync 为 0.395，在同表同列全部可比方法中最低，低于教师 0.484、MMAudio 0.457 与 LiveFoley 0.480，IB 为 0.323 是流式中最高并接近离线 Omni2Sound 的 0.338，CLAP 为 0.252，与流式 V-AURA 的 0.252 相同，但低于离线 MMAudio 的 0.308 与 Omni2Sound 的 0.284。PQ 为 6.41 是全表最高，ISP 为 15.87 是流式中最高但低于离线 Omni2Sound 的 16.70，FDV 为 1.30 优于全部流式但不及 MMAudio 的 0.76 与 Omni2Sound 的 0.63，说明分布拟合仍有差距。效率上 TTFF 为 0.143 s，低于 WorldSonus 的 0.502 s，RTF 为 0.79 快于实时，而 V-AURA 的 7.148 s 与 2.31 明显不可实时。

#### 主观听测与神经代理指标的分工

主观评测与客观指标分工不同，MOS-Q 只评声音本身清晰自然度，MOS-T 只评声音与画面动作的时间对齐，均为 20 名参与者在 8 个视频上按 1 至 5 分打分并给出 95% 置信区间，音频截前 8 s 并归一到响度负 23 LUFS。神经代理如 PQ 与 DeSync 虽能大规模计算，但不能替代人耳，下表把两者并置以核查一致性，Ground Truth 作为上限锚点。

| Method | MOS-Q↑ | MOS-T↑ |
| --- | --- | --- |
| Ground Truth | 4.06 ± 0.25 | 4.26 ± 0.17 |
| MMAudio | 3.80 ± 0.28 | 3.69 ± 0.20 |
| Omni2Sound | 3.87 ± 0.26 | 3.97 ± 0.19 |
| WorldSonus | 3.35 ± 0.25 | 3.42 ± 0.24 |
| LiveAudio (ours) | 3.66 ± 0.19 | 4.06 ± 0.27 |

听测中 LiveAudio 的 MOS-T 为 4.06 ± 0.27，是全部模型中最高并超过 Omni2Sound 的 3.97±0.19 与 MMAudio 的 3.69 ± 0.20，MOS-Q 为 3.66±0.19 是流式中最高并接近最佳离线的 3.87 ± 0.26。Ground Truth 的 4.06±0.25 与 4.26±0.17 仍领先，说明仍有提升空间。客观 DeSync 最优与主观 MOS-T 最优相互印证，而 PQ 最优与 MOS-Q 流式最优也一致，表明此处神经代理未与人听背离，但样本仅 8 个视频且置信区间较宽，推广需谨慎。

#### 首块延迟分解与实时播放

下图把单张 A100 上 batch size 为 1 时的延迟拆到毫秒，首块从视频流开始到 CPU 拿到首个波形样本记为 TTFF，稳态每块处理时间与 0.1 s 块时长对比记为 RTF，读时先看横轴时间与两行条形占比，再看 TTFF 与 RTF 标注是否满足实时。测量前模型已预热并开启双 CUDA 图，视频帧按显示间隔实时供给以还原直播等待。

[![原论文 Figure 5：Latency breakdown of LiveAudio in milliseconds for the first block and for each block, with DiT…](https://arxiv.org/html/2611.30714v1/latency_breakdown.svg)](https://arxiv.org/html/2611.30714v1/latency_breakdown.svg)

*论文图 5：首块与稳态每块的毫秒级延迟分解及实时率标注（原论文 Figure 5）。*

图中横轴为时间 0 至 160 ms，首行 4 个视频帧后接斜纹视频等待 80 ms、视频编码 21 ms、DiT 生成 34 ms 与 VAE 解码 8 ms，合计 TTFF 为 143 ms，其中等待超过一半。次行稳态每块视频编码 37 ms、DiT 生成 34 ms 与解码 8 ms，块时长 100 ms，平均 RTF 为 0.79，每块时长内可处理完。论文指出按 1.25 片每块的稳态编码开销虽高于首块，但仍快于实时，实时到达时固定 0.23 s 播放延迟即可不间断播放，全部耗时含解码特征抽取采样与解码而不含加载写文件。

### 四阶段与同步对齐条件缺一不可，非对称监督是同步关键

#### 逐阶段与跳阶段证明流水线必要性

逐阶段消融固定 VGGSound 测试集与 FDV、FDP、ISP、PQ、DeSync 5 个核心口径，(a) 为每阶段后实测，(b) 为同等预算下跳过某阶段直接做阶段 4，对比可分离因果化损失、少步化保持与同步恢复 3 段贡献。所有行均在 10 s 片段与同一视频等待下测得，TTFF 与 RTF 另见效率分析，此处聚焦质量与同步权衡。

| Stages | FDV↓ | FDP↓ | ISP↑ | PQ↑ | DeSync↓ |
| --- | --- | --- | --- | --- | --- |
| Stage 1 (Bidirectional) | 1.29 | 5.11 | 15.81 | 6.26 | 0.484 |
| Stage 2 (Block-causal) | 1.44 | 6.79 | 12.54 | 6.24 | 0.535 |
| Stage 4 (DMD) | 1.30 | 7.32 | 15.87 | 6.41 | 0.395 |
| 1→2→4 | 1.87 | 9.76 | 13.94 | 6.37 | 0.425 |
| 1→3→4 | 2.46 | 11.05 | 12.79 | 6.21 | 0.423 |
| 1→2→3→4 (ours) | 1.30 | 7.32 | 15.87 | 6.41 | 0.395 |

阶段 1 双向教师 FDV 为 1.29，FDP 为 5.11，ISP 为 15.81，PQ 为 6.26，DeSync 为 0.484，阶段 2 因果化后 FDV 升至 1.44，FDP 升至 6.79，ISP 降至 12.54，DeSync 升至 0.535，说明只看过去会损失质量与同步。阶段 3 ODE 后 FDV 回到 1.18，DeSync 为 0.544 基本保持，说明少步化未进一步恶化同步。阶段 4 后 DeSync 降至 0.395 并超过教师，而 FDV 与 FDP 略升至 1.30 与 7.32，符合分布匹配的模式寻优特性。跳过阶段的 1→2→4 为 1.87、9.76、13.94、6.37、0.425，1→3→4 为 2.46、11.05、12.79、6.21、0.423，均不及完整流水线，1→4 更崩溃至 7.89 与 0.621，证明每段必要。

#### 视频条件前视消融

下图对比标准 VT2A 条件与同步对齐条件在四阶段后 FDV、FDP、KLP、ISP 与 DeSync 5 条曲线，标准条件在双向阶段允许看到未来约 0.64 s，同步对齐只用已播帧，2 模型除条件外四阶段设置完全相同，数值见附录对照表，此处看曲线分叉点即可判断前视依赖，读时先看阶段 1 两线接近，再看阶段 2 后红线显著上飘而蓝线保持平稳。

[![原论文 Figure 3：Ablation of the video conditioning on the VGGSound test set.](https://arxiv.org/html/2611.30714v1/conditioning_stages.svg)](https://arxiv.org/html/2611.30714v1/conditioning_stages.svg)

*论文图 3：标准条件与同步对齐条件在四阶段后五项指标的消融曲线对比（原论文 Figure 3）。*

图中横轴为双向、因果、ODE 与 DMD 四阶段，纵轴五列分别为 FDV、FDP、KLP、ISP 与 DeSync，红色为标准条件，蓝色为同步对齐，绿色星为最终模型，绿色虚线为参考。阶段 1 两线接近且标准略占优，阶段 2 后红色在分布与同步上显著恶化而蓝色保持平稳，最终阶段蓝色在 FDV、FDP、ISP 与 DeSync 多数面板领先，但在 KLP 上红色方块位于蓝色圆点下方即标准条件略优，证实流式必须从双向起就不用前视，否则训练依赖的前视在推理时缺失。

#### 非对称蒸馏三变体

非对称 DMD 消融固定同一阶段 3 模型并只改一处，分别去掉对抗损失、把真分数换为块因果教师的对称蒸馏、训练时用真值历史而非自生历史，口径覆盖分布、质量与对齐以定位同步来源。对抗权重与真假分数设置与主模型一致，生成历史是否为自生是关键变量。

| Variant | Distribution Matching FDO↓ | Distribution Matching FDV↓ | Audio Quality ISP↑ | Audio Quality PQ↑ | Modality Alignment DeSync↓ | Modality Alignment IB↑ |
| --- | --- | --- | --- | --- | --- | --- |
| LiveAudio (ours) | 70.97 | 1.30 | 15.87 | 6.41 | 0.395 | 0.323 |
| w/o adversarial loss | 85.25 | 2.15 | 14.81 | 6.36 | 0.403 | 0.308 |
| Symmetric DMD | 94.84 | 2.71 | 12.49 | 6.38 | 0.502 | 0.269 |
| Ground-truth history | 191.82 | 8.12 | 5.76 | 6.02 | 0.711 | 0.147 |

去掉对抗后 DeSync 为 0.403 变化很小，但 FDO 从 70.97 升至 85.25，FDV 从 1.30 升至 2.15，ISP 从 15.87 降至 14.81，说明对抗主要管音质。对称蒸馏 DeSync 仅到 0.502，IB 从 0.323 降至 0.269，证实必须由能看全段的双向教师监督。用真值历史则全面崩溃至 FDV 8.12 与 DeSync 0.711，说明分布匹配只在自生历史分布上有效，与 Self Forcing 结论一致。

### 同一模型兼顾文本到音频，部署需在单卡实时与同步增益间权衡

#### 跨任务泛化与长音频外推

同一模型在四阶段中始终混入文本音频任务，因而无需改结构即可做流式文本到音频与视频文本到音频，文本侧 Synchformer 置零而其余流程不变。下表在 AudioCaps 测试集上对比离线文本模型与流式基线，WorldSonus 为官方代码适配，LiveAudio 以因果 4 步生成，口径与主表一致。

| Method | FDV↓ | FDP↓ | ISP↑ | PQ↑ | CLAP↑ |
| --- | --- | --- | --- | --- | --- |
| TangoFlux | 2.21 | 21.66 | 11.92 | 5.89 | 0.544 |
| MMAudio | 3.32 | 18.33 | 11.52 | 5.61 | 0.489 |
| AudioGen | 2.11 | 17.51 | 9.34 | 5.28 | 0.455 |
| WorldSonus | 2.46 | 20.65 | 8.63 | 5.81 | 0.442 |
| LiveAudio (ours) | 2.02 | 19.12 | 10.76 | 6.09 | 0.460 |

表中 LiveAudio 的 FDV 为 2.02，低于 AudioGen 的 2.11 与 TangoFlux 的 2.21，是本表 5 个系统中最低，FDP 为 19.12，高于 AudioGen 的 17.51 与 MMAudio 的 18.33，但低于 WorldSonus 的 20.65，ISP 为 10.76，低于 TangoFlux 的 11.92 与 MMAudio 的 11.52，PQ 为 6.09，为本表最高，CLAP 为 0.460，高于 AudioGen 的 0.455 与 WorldSonus 的 0.442，但低于 TangoFlux 的 0.544 与 MMAudio 的 0.489。附录还在 VGGSound-Omni 与 Clotho v2 及 60 s 长音频上验证，仅保留最近 5 s 缓存即可外推，块自回归未绑定训练长度。

#### 假设边界复现核对与选型建议

方法假设视频等待加计算不超过块时长，实测在单张 A100 上成立，TTFF 0.143 s 中等待占 0.08 s，稳态 RTF 0.79，换卡或更高分辨率视频需重测。同步增益依赖双向教师整段评判与自生历史训练，若改用对称教师或真值历史则同步不再恢复，消融已证伪。复现需区分三件事，演示页 <https://streamaudio.github.io/> 可试听军鼓三击位置与标题卡静音段与基线的差异，但论文未披露代码权重数据是否公开，训练需 32 卡起步与 131,072 条轨迹抽取，推理需双 CUDA 图与 BF16。选型上，若应用可容忍 0.23 s 固定播放延迟且需最优时间对齐，可优先复现此路线并先跑 2 步变体验证质量延迟权衡，若追求分布距离最低则离线 MMAudio 仍占优，需补更大规模主观听测与 8 s 外长视频评测。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：48 kHz 立体声经因果 VAE 以 1600 倍下采样为 64 维 30 Hz 隐变量，每 3 个 token 组成 0.1 s 块，Synchformer 跑 25 fps 切片 0.08 s，CLIP 跑 8 fps，平均视频等待 0.11 s，TTFF 143 ms，RTF 0.79
- **训练与评测数据**：四阶段同语料训练，视频音频文本来自 SoundAtlas 470k 三元组，文本音频来自 AudioCaps 50k 与 WavCaps 400k，任务混合 VT2A 0.35、V2A 0.55、T2A 0.10，评测为 VGGSound 测试集、VGGSound-Omni 文本与 AudioCaps 测试集
- **算力与训练耗时**：单张 A100 测延迟，训练用 A100，阶段 1 用 32 卡 500k 步，阶段 2 用 8 卡 100k 步，阶段 3 用 8 卡 30k 步与 131072 条轨迹，阶段 4 用 8 卡 3k 迭代
- **核心超参数与配置**：DiT 24 层 24 头宽 1536 约 1.2B 参数，AdamW 学习率阶段 1 为 10−4 后续 2×10−6，条件丢弃 0.1，引导尺度 4.5，双向与因果用 50 步 Euler，蒸馏后用 4 步无引导采样
- **推理速度与部署开销**：单张 A100 上 batch size 为 1，TTFF 0.143 s，RTF 0.79 快于实时，稳态每块 0.1 s 内处理完，固定 0.23 s 播放延迟可不间断播放，耗时含解码特征抽取采样与波形解码
- **开源产物与协议状态**：演示页 <https://streamaudio.github.io/> 可访问试听，原文未披露代码权重数据是否公开，基线均用官方权重实测，SoundReactor 与 LiveFoley 结果引自原文
- **附录与补充材料要点**：附录给出 SoundAtlas 与 AudioCaps 数据过滤、FDO FDV FDP KLS KLP ISP PQ DeSync IB CLAP 与 MOS 定义、VAE 与 DiT 结构、四阶段超参数、VT2A T2A 长音频与步数消融及频谱案例

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30714v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：将24层1536宽约1.2B双向扩散变换器原地转为块因果自回归生成器，仅改掩码与视频供给与步数而无需改结构。

- 核心优势：VGGSound上DeSync 0.395为全表最低且PQ 6.41为全表最高，流式内分布音质与语义对齐全面最优并超越自家教师同步。

- 核心优势：四段渐进链条与跳段对照及同步对齐条件对照齐备，单卡实测TTFF 0.143s与RTF 0.79并附20人主观MOS与置信区间验证。

- 主要短板：去同步与IB仅前8s双窗口平均且剔除短片段，主观仅8条视频20人，长视频流与强噪声真实直播抖动场景尚未覆盖。

- 主要短板：全文未披露第一方代码仓库地址与模型权重下载及协议，训练评估数据亦未给获取链接，仅演示页可访问而不视为开源。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
