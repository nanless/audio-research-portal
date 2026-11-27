---
title: "TigerTTS: Draft-Guided Multi-Frame Parallel Speech-Token Language Model for Fast and Robust Text-to-Speech"
date: 2026-11-27
draft: false
tags: [文本到语音, 自回归模型, 向量量化, 流式处理]
categories: [论文速递]
description: "针对自回归语音 Token 模型解码慢且易丢字重复的问题，TigerTTS 用轻量 NAR 草稿先定对齐再让小 LLM 每步并行精修 12 个 Token ，在同卡实测中以 0.35B 系统实现 RTF 0.05 约 20 倍实时并在 SEED 与 LibriSpeech 上取得最低可懂度误差，代价是并行帧数增大时质量单调下降且当前仅支持单流 batch 1 部署。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34241"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "草稿先行再精修的快速语音合成：TigerTTS 解读"
paper_digest_original_title: "TigerTTS: Draft-Guided Multi-Frame Parallel Speech-Token Language Model for Fast and Robust Text-to-Speech"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34241v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34241v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34241v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对自回归语音 Token 模型解码慢且易丢字重复的问题，TigerTTS 用轻量 NAR 草稿先定对齐再让小 LLM 每步并行精修 12 个 Token ，在同卡实测中以 0.35B 系统实现 RTF 0.05 约 20 倍实时并在 SEED 与 LibriSpeech 上取得最低可懂度误差，代价是并行帧数增大时质量单调下降且当前仅支持单流 batch 1 部署。"
paper_digest_reader_sections: [{"heading":"自回归语音 Token 模型为何又慢又容易丢字","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"TigerTTS 把对齐与精修分开的两段式流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"无码本分级量化与非自回归草稿如何定下时长","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"帧对齐引导与多帧并行如何让小 LLM 又快又稳","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"同卡实测的 20 倍实时与可懂度领先在何种口径下成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"单组停机与单流部署带来的边界和复现前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Wiz Holdings Pte. Ltd., Nanjing, China"],"name":"Dewei Kong"}]
paper_digest_abstract_sha256: "006b0b929ba1d5eb76c66d84b4bc5b8de6bec0ec7b4c162425a4f74569ad04dd"
paper_digest_sidecars: {"citation.bib":{"sha256":"bcfa81b14c2fbc187a50bb25645c1046438b3310f34e117e8995d9e5c654fdd2","url":"/audio-research-portal/client/papers/2026-11-27/2611-34241/citation.bib"},"citation.json":{"sha256":"2d430f89bfb16ebb66cf718c5a61d964e2859070c9ae4dcce041ee20dfdd7867","url":"/audio-research-portal/client/papers/2026-11-27/2611-34241/citation.json"},"citation.ris":{"sha256":"14b691f66da6b9a37481868cad20c2d1fdcb28118ab9dd6bc06674ba0fa49443","url":"/audio-research-portal/client/papers/2026-11-27/2611-34241/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d4863cf33cd3e66527ea8180efb0c63fc8021ff9dbea61719d8ab1ddcdbea1c4","url":"/audio-research-portal/client/papers/2026-11-27/2611-34241/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "96ccf2a1a6880397f06624baf3081fd01d72c641182ca1a4a4c4452e071ff8d0"
paper_digest_api_reader_plan_sha256: "a213945556984afc3373634d12676fdb4da316268261cce67e84370e37e87292"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d78359407252e5aa063492174f4a2f220de28c7885e19b3590f3c820887ff27c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f1b2207e2b32b6d1e5b431316b2da14773209c1bff678698184692f801fdea20"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a2698045bfefa6c9de348158f4457c0073be8194655a23a88a4fd33f6f905317"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 草稿先行再精修的快速语音合成：TigerTTS 解读

> 英文题目：*[TigerTTS: Draft-Guided Multi-Frame Parallel Speech-Token Language Model for Fast and Robust Text-to-Speech](https://arxiv.org/abs/2611.34241v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [自回归模型](/audio-research-portal/papers/?concept=method.autoregressive)；[向量量化](/audio-research-portal/papers/?concept=method.vector-quantization)
- **研究条件**：[流式处理](/audio-research-portal/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.6/10 | 技术严谨 8.2/10 | 实验充分 6.2/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 8.2/10


## 👥 作者与机构

- Dewei Kong：Wiz Holdings Pte. Ltd., Nanjing, China

## 📌 核心摘要

**问题与瓶颈：** 文本到语音合成的输入是规范化文本经字素到音素转换得到的音素序列与说话人表征，输出是 16 kHz 采样率波形，中间经由 50 Hz 离散词元与 100 Hz 梅尔频谱衔接。现有路线存在对立失效，非自回归声学模型依赖显式时长拉伸并以 L1 / L2 回归恢复条件均值，输出过平滑而韵律平淡。自回归离散词元语言模型能表达文本到语音的一对多映射，但逐词元解码使时延随序列长度增长，且无显式对齐，在长句、生僻词与数字串上易丢词、重复、提前终止或失控延长，同时离散码本存在坍缩与保真度上限。

**核心思路与方法架构：** 与最接近的自回归词元基线相比，实质增量是保留语言模型但改变分工，由轻量非自回归模型先在相同离散空间起草全句词元并固定对齐与长度，紧凑自回归大模型再以草稿为条件逐步精修，每步并行输出 3 帧乘 4 组共 12 个词元且无接受或拒绝环节。沿 1 秒样本跟踪，16 kHz 波形对应 100 个 10 ms 梅尔帧与 50 个 20 ms 词元帧共 200 个词元，约 16.7 个大模型步骤，16 秒语音仅占上限为 1024 的位置中的约 267 个。FSQ 分词器将 HuBERT 特征量化为每帧 4 组乘 512 类共 36 比特，名义码率约为 1800 bps 且无可坍缩码本。系统总计约 0.35B 参数，其中草稿生成器约 28.8M 参数，大模型约 145.7M 参数，解码器约 139.8M 参数，Vocos 声码器约 40.3M 参数。位置编码仅保留在输入嵌入并按帧索引计数，使多头潜在注意力的权重吸收精确成立，键值缓存由每位置每层 2560 个浮点数压缩至 640 个。训练缓存同编码器在训练文本上的草稿并共用对齐函数，快速模式再以草稿替换前 P / R 步历史做短微调，从而在离线整句与首包流式约束下直击对齐不确定性与串行长度瓶颈。

**关键实验与核心代价：** 在 SEED 测试集上，中文集内容错误率（CER，越低越好 ↓）为 1.09% 对 CosyVoice 2 的 1.45%，英文集词错率（WER，越低越好 ↓）为 1.67% 对 2.57%。在 LibriSpeech test-clean 子集上，WER 为 2.22% 对 2.47%，自然度平均意见分（NMOS，越高越好 ↑）为 4.36 对 3.96，说话人相似度为 0.820 对 0.745，论文未说明听众数与置信区间且未提供 UTMOS / DNSMOS 等神经代理指标对照。在单张 RTX 4090 单流批量为 1 的条件下，默认 3 帧每步的 CUDA Graph 解码的实时率（RTF，越低越好 ↓）为 0.05，约为 20 倍实时，对 VoxCPM2 的 0.25 为 5 倍，对 CosyVoice 2 的 0.8 为 16 倍，快速模式草稿路径 RTF 为 0.03 并先输出 500 ms 音频。改变每步帧数时，1 帧、3 帧、5 帧与 7 帧的 RTF 分别为 0.086、0.050、0.043 与 0.04，质量排序为 1 帧、3 帧、5 帧与 7 帧由好到差，默认取 3 帧以保留接近单帧的质量并获得约 1.7 倍加速，其余去草稿与去 TDNN 等消融在输入中未给出具体数值。

**适用边界与深读导览：** 结论成立依赖草稿质量越高并行假设越接近无损这一前提，以及强制对齐提供的音素时长标签与单流消费级显卡实测条件，未覆盖超长句的音色漂移、连续可控韵律、批量推理与数据中心内核协同场景。深究条件总相关界与无损条件可查下方方法中多帧并行分析，核对帧对齐一致性、输入侧旋转位置编码与图安全采样证明可查对应公式小节，速度与质量权衡与局限可查实验与局限章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 自回归语音 Token 模型为何又慢又容易丢字

文本转语音要把离散文字变成连续可听的波形，输入是音素序列、情感韵律标签与说话人表示，输出是 16 kHz 采样率的波形样本。中间一般经过两层表示，一层是 10 ms 一帧的对数梅尔谱，另一层是 20 ms 一帧的离散语音 Token 。评价要同时看 4 个维度，可懂度常用 ASR 转写后的 WER（词错误率）与 CER（字错误率）衡量，音色相似度看说话人嵌入余弦，自然度看 N-MOS（神经网络估计的平均意见分），效率看 RTF（实时率）与首包延迟。

非自回归声学模型是其中一条主流路线，代表有 FastSpeech 、Glow-TTS 、Matcha-TTS 与 StyleTTS 。它们用显式时长或单调对齐把音素拉伸到帧，再并行生成梅尔谱，速度快且很少跳字或重复。代价在训练目标上，\(L1\) 与 \(L2\) 回归只能恢复给定文本下数据的条件均值或中位数，输出容易过平滑，韵律起伏被抹平，听感偏平。

另一条路线是离散 Token 的语言模型 TTS ，代表有 VALL-E 与 CosyVoice 系列。它自回归地建模 \(p(token|text)\) ，能更好处理一文多读的一对多映射，音质与表现力占优。代价反过来，逐 Token 解码很慢，且没有显式对齐，长句、生僻词与数字串最容易丢字、重复、提前截断或停不下来，出现 runaway 生成。

TigerTTS 要同时解决的三件事因此很具体，解码延迟随序列长度增长，对齐缺失导致的鲁棒性失效，以及离散码本带来的保真度上限。它的分工是让轻量非自回归模型先定下对齐与长度，写出全句草稿 Token ，再让紧凑自回归 LLM 逐块精修。这样既保留语言模型的表达力，又把对齐不确定性提前消除，为后面的多帧并行与首包流式留出条件。

### TigerTTS 把对齐与精修分开的两段式流水线

TigerTTS 的流水线按原文可列为 7 段，文本侧情感韵律预测、ASR 强制对齐、NAR 草稿生成、FSQ 分词、草稿引导 LLM 、梅尔解码器与说话人条件 Vocos 。文本先经 G2P 转为音素 id 序列 \(x\) ，说话人用 192 维 ECAPA 嵌入 \(e\) 与 1024 维全局风格向量 \(ge\) 双重表示，共享同一套对数梅尔谱规格。已训练好的编码器在训练集文本上跑出缓存草稿，供 LLM 做教师强制训练，推理时则现场生成草稿。

要一次看清分工，建议先看下面这张推理总览图的实线主路径，再看虚线训练支路与说话人支路在哪里汇入。主路径从左到右依次经过文本前端、快速编码器、LLM 、解码器与声码器，虚线代表只在训练阶段使用的对齐监督，顶部还有说话人嵌入与参考波形的注入点。

![原论文 Figure 1：An overview of the TigerTTS inference pipeline.](/audio-research-portal/images/papers/2611.34241/figure-1-7bdb3ee803c6b627.png)

*论文图 1：推理总览：文本经快速编码器与 LLM 到解码器与声码器的主路径与训练支路（原论文 Figure 1）。*

图中从左到右的实线箭头是 Text 指向 Emotion Label And G2P ，再指向 Fast Encoder ，再指向 LLM ，再指向 Decoder ，再指向 Vocoder ，最后输出 Wav 16k 。顶部虚线框 ASR Align 用虚线箭头指回 Fast Encoder ，标注 Train ，表示音素时长标签只在训练时提供。顶部 Spk Emb 192 同时指向 Fast Encoder 与 LLM ，顶部 Ref Wav 指向 Decoder ，另有一条从 Fast Encoder 到 Decoder 的虚线旁路，对应 Fast 模式下草稿直接合成前缀的能力。

3 种时间分辨率同时存在，音频 Token 是 50 Hz 每 20 ms 一帧，梅尔谱是 100 Hz 每 10 ms 一帧，波形是 16 kHz 采样。1 秒音频对应 50 个 Token 帧共 200 个 Token ，约 16.7 个 LLM 步，100 个梅尔帧与 16000 个样点，16 秒语音只占 \(Lmax=1024\) 个 LLM 位置中的约 267 个。全系统共 354.6M 参数即 0.35B ，其中草稿生成器 28.8M ，LLM 145.7M ，解码器 139.8M ，Vocos 声码器 40.3M ，FSQ 本身无可学习码本参数。

### 无码本分级量化与非自回归草稿如何定下时长

分词器与草稿生成器是系统的地基，它们的输出空间必须完全一致，LLM 才能把草稿当作同词汇表的先验。TigerTTS 用 4 并行组的 FSQ（有限标量量化）取代向量量化码本，每帧输出 4 个 0 到 511 的整数，标称码率约 1800 bps 。HuBERT 特征进入每组 4 维实数，按 L=[8,4,4,4] 取整，每组类别数 K=512 ，每帧共 36 比特，每秒 50 帧即 1800 比特。系统全程共用同一套对数梅尔特征：16 kHz 采样，nfft=1024，窗长 640 即 40 ms 汉恩窗，跳长 160 即 10 ms，100 个梅尔频带，动态范围压缩且不做均值方差归一化，帧数截为偶数，于是 10 ms 梅尔帧与 20 ms Token 帧严格构成 2 比 1 关系，这为后文 2 倍上采样与帧对齐埋下前提。

#### 有界变换与混合进制如何保证可逆

为让取整恰好落到网格中心，论文对每维做奇对称有界变换，含位移与缩放，偶数电平与奇数电平分开处理，ε=10 的负 3 次方把端点严格留在最外层取整区间内。两个性质随之成立，原点是固定点，初始化零均值时 Token 落在网格中心而不偏向一侧，取整恰好得到对应数量的整数。偶数电平时像趋于负二分之 L 到二分之 L 减 1 并取整到对应整数集，奇数电平时像为对称区间并取整到对称整数集，取整后按半宽归一到负 1 到 1。因为每维独立有界，系统不需要向量量化那套承诺损失、指数滑动平均更新或死码重启，也就没有可坍缩的码本。电平小于 3 不可能：L 为 2 时位移缩放比大于 1 使反双曲正切无定义，这正是二进制量化需要另行方法的原因。编码用混合进制把 4 维等级折成 0 到 511 的码，解码用除模逐维还原，前向与推理走同一数值路径，与残差量化不同，各组对称并行，无残差链。具体而言首项权为 1，后项权为之前所有电平数连乘，对 L 为 8、4、4、4 即权为 1、8、32、128，码为各级加权求和，解码按整除取模逐维还原，于是解码编码结果与前向量化输出按比特一致，推理端解码器走与训练完全相同的数值路径。与残差量化不同，各组对称并行，无残差链，LLM 对各组对称同时预测。

梯度经直通估计回传，前向取整反向直传，大输入幅度处 tanh 饱和梯度消失，因此输入投影缩放到标准差约 1.25 ，源码实测此处 Token 困惑度最高。形式上前向取整反向直传，归一化量化值对输入的导数含 1 减 tanh 平方项，全部监督来自下游梅尔重建损失。每组利用率用困惑度监控，上限为 9 比特，论文报告 4 组共 2048 个码全部用满。与 CosyVoice 2 研究中的 FSQ 相比，这种并行 FSQ 在保留语义信息上更完整，后文 Token 评测会给出 ASR 错误率对比。这里的执行顺序是先由真实 HuBERT 特征经 FSQ 得到离散目标，再用该目标同时做解码器重建训练与全量数据打标，保证分词语义前后一致。

#### 时长预测与累积取整如何守住边界

草稿生成器是 FastSpeech 风格的 4 层双向 Transformer ，宽度 512 ，音素嵌入 508 维拼接 4 维压缩说话人向量，含 RMSNorm 、QK-Norm 加 RoPE 、核长 31 的 Conformer 卷积分支与 SwiGLU 隐藏层 1408 。QK-Norm 用可学习增益约束注意力对数几率，避免 Softmax 饱和，卷积分支在每次带偏置操作后重加掩码，防止填充泄漏。膨胀时长预测器膨胀率为 1 、2 、4 、1 ，输出以 20 ms 为单位的对数时长，经累积和差分把每个音素向量复制对应次数。音素嵌入采用单位方差初始化，4 维压缩说话人向量与之拼接后进入编码器，使内容与音色在入口即分工：音素决定说什么，压缩向量只携带轻量说话人偏置，更重的说话人嵌入与风格向量留给 LLM、解码器与声码器。

推理时时长取整用累积取整，每段前缀累积误差有界，折到每条音素边界在半帧即 10 ms 以内，且每音素至少保证一帧。具体执行是先由速度因子把对数时长转回线性权重，再算前缀累积取整，差分得到每音素帧数，伸缩求和使每前缀偏差有界。相对而言，向上取整平均每音素多 0.5 帧，100 个音素约多 1 秒，逐音素取整误差累积可达句尾一半音素数。残差解码器经 2 倍上采样输出 10 ms 的 100 维梅尔草稿，仿射 Token 头直接给出对应类别的对数几率，中间无非线性，迫使判别信息组织进梅尔草稿本身。残差解码器由带说话人条件的自适应实例归一化块构成，上采样后梅尔草稿恰好回到 10 ms 一帧，与输入共用梅尔保持 2 比 1 对应；仿射 Token 头把梅尔草稿转成多组多类对数几率，相邻两梅尔帧之间不加非线性，迫使编码器把 Token 判别信息组织进梅尔草稿本身，而不是藏在头里。

训练用对数域 MSE 学时长，对应时长对数正态的最大似然，L1 学梅尔对应拉普拉斯似然并抗野值，交叉熵学 Token ，随机猜测约为 ln512 约 6.24 。Token 权重从第 4000 步线性升至 100000 步，梅尔权重衰减至 0.01 下限，这种调度先稳住声学再压实语义。Token 交叉熵的目标正是真实 HuBERT 特征经 FSQ 量化后的码，训练好的编码器在训练文本上的输出会被缓存为草稿，供 LLM 阶段做教师强制训练，从而让训练与推理看到同一分布的草稿，避免曝光偏差。

### 帧对齐引导与多帧并行如何让小 LLM 又快又稳

LLM 的输入是 10 加音素数加步数不超过 1024 位置的单序列，前缀 10 帧含 8 个情感韵律标志帧与 2 个声纹帧，投影到 320 维再平铺 4 倍到 1280 维，不加位置编码。每步输入拼接三部分，前一块的音频嵌入按帧序号加输入端 RoPE ，首步用多个起始符，中间是多帧草稿特征，还有每步重复的 4 维说话人投影，远离前缀可缓解长句音色漂移。单线性头一次给出 12 个 Token 的对数几率块。

#### 帧对齐与单点注入

草稿按规则对齐到任意输出长度，草稿长度内取对应帧，长度处取专用结束符，超出部分取填充符，超长直接截断，结束符与填充符 id 与音频 Token 不重叠。预测某帧时 LLM 看到的是同一帧的草稿，而非靠自己推断在条件序列中的位置，NAR 编码器已解决对齐。结束符恰好落在草稿认为音频结束的帧，紧邻真实结束符，提供强结束先验。训练有效长度取目标与草稿的最大值，音频右侧补停止符并计入损失，草稿多对齐一帧以保住结束符，推理上限取 1.5 倍草稿加 50 与位置余量的最小值。

训练与推理看到的草稿 Token 在有效长度内完全一致，因为两侧调用同一对齐函数，该处取值只与当前位置和草稿长度的关系有关，填充只动有效长度之后帧。训练草稿由同一已训练编码器在训练文本上跑出并缓存，真值 Token 从不被破坏，两侧同分布，无暴露偏差。草稿特征每帧经查表嵌入再过非因果 TDNN ，扩张比为 2 ，核长 21 的深度卷积给出正负 200 ms 感受野，接 1×1 扩展激活收缩、残差与小初始化层缩放，掩码在归一化后卷积前施加，避免填充经偏置漏入有效帧。特征为 2048 维，推理时全句一次算好按步切片，不增加流式延迟，投影矩阵把音频、草稿与说话人三部分一次送入 6 层 Transformer 。

要把上面的拼接与反馈看具体，建议先看下面这张 LLM 细节图的图例与箭头走向。底部是情感、声纹、音素与两类语义 Token 的图例，中部是 TigerTTS MLA Transformer 长条，顶部是 3 组虚线框的输出 Token 经解码器与 Vocos 通向波形，虚线回路表示自回归历史。

![原论文 Figure 2：The TigerTTS pipeline.](/audio-research-portal/images/papers/2611.34241/figure-2-77dcd3b248f7f72d.png)

*论文图 2：LLM 细节：MLA 长条上下连接三组输出 Token 与底部历史槽位（原论文 Figure 2）。*

图中左上图例用灰方块表示情感标签 id ，蓝方块表示说话人嵌入，白方块表示文本音素 id ，白圆圈表示组语义 Token ，灰圆圈表示引导语义 Token 的 TDNN 嵌入。底部从左到右是两个灰块、两个蓝块、标 S 的白块加多个音素白块，接着是 T 方块加灰圆的虚线框，以及两组白圆加灰圆的虚线框，分别接入 Transformer 长条。中部 3 组各 3 个白圆的虚线框向上接入解码器，再经声码器输出波形，两条虚线弧线从 Transformer 指回底部虚线框，表示上一步输出作为下一步历史。

#### 条件总相关界与输入端 RoPE

多帧并行的误差在数学上恰好等于条件总相关，联合分布与连乘之积的散度等于各 Token 条件熵之和减去联合条件熵，非负且被各条件熵之和上界约束。直觉是若草稿已携带目标的大部分信息，每个条件熵都被压向零，上界收紧，草稿完全决定目标时总相关为零，并行假设无损。加条件不增加熵，因此带草稿的界永不差于无草稿并行。同一机制解释为何每步 3 帧可行，音素内帧间与帧内组间的强相关已被草稿解释，LLM 只需解决低熵残差，近似独立。

主干是 6 层预归一化 Transformer ，隐层 1280 ，10 头每头 128 维，前馈 SwiGLU 3456 ，残差输出投影按层数缩放。位置信息只在输入嵌入上，RoPE 对文本从 0 起编，对音频按帧序号编，同一步内各帧相位不同，相邻步差固定倍数，前缀与草稿不加位置编码，草稿靠与音频逐帧拼接隐式定位。这样 RoPE 是绝对编码，一般查询键积与旋转不对易，无法化为相对差函数，但区分了步内帧。回报是 MLA 权重吸收精确成立，无需单独位置分支，KV 缓存每层每位置从 2560 浮点压缩到 640 维隐变量，约 4 倍，满长浮点 32 位约 15.7 MB ，小批量解码受显存带宽约束，直接转化为速度。

#### 单图解码与 Fast 首包路径

合法性用对数几率偏置保证，每组只许小于类别数的合法码，结束 Token 只许出现在组 1 ，停机决策集中一处，解码器输入必合法。结束检测在步内逐帧做累积 Sigmoid ，可在任意帧停而不限于步边界，首帧即结束则回退到草稿 Token 本身，避免空序列，触顶未结束则截断告警。采样温度为 1.0 ，top-k 5 ，top-p 0.9 ，每请求种子重置为 1234 ，top-p 用排他累积和保证最大概率 Token 永不被裁。

传统多项采样需 GPU 与 CPU 同步无法进 CUDA Graph ，论文用单归约指数采样，等价于 Gumbel-max ，证明其分布与多项采样完全一致，可整图捕获。步输入按块分解预计算草稿与说话人线性项，单步解码含嵌入、6 层吸收 MLA 、输出头、采样、结束检测与缓冲回写被捕获为一张 CUDA Graph ，静态 KV 缓存长 1024 ，未写位置掩蔽，每 16 次重放检查一次完成，贪心下与急切解码比特一致。串行步数每秒音频约 16.7 步，为逐帧自回归的 1/3 ，为逐 Token 建模的 1/12 ，二次注意力项缩至约 1/9 。

Fast 模式把草稿生成器当作前缀合成器，它与 LLM 同词汇表，且自带全并行到波形的通路，在部署 GPU 上 RTF 为 0.03 。先用编码器独立输出前 P 帧，P 取步长的倍数，3 秒语句取 24 帧 480 ms 或 75 帧 1.5 s ，500 ms 音频约 15 ms GPU 时间，梅尔草稿经同一 Vocos 直接流出，LLM 尚未解码 1 Token 。随后 LLM 把前缀草稿 Token 当作真实历史，放在为前块预留的历史槽位，从边界步继续自回归，整句草稿仍在单点注入处提供对齐。音色跨界稳定靠共享 ECAPA 与同一 Vocos ，延续以真实 Token 为条件保持韵律，无需交叉淡化。唯一分布错配经一次短微调消除，把前几步真值历史换成缓存草稿，架构不变。

### 同卡实测的 20 倍实时与可懂度领先在何种口径下成立

评测分三块，可懂度用 ASR 转写合成语音报 WER 与 CER ，另计跳字、重复与触顶非终止，音色相似度用 ECAPA 嵌入余弦，自然度用 N-MOS ，效率用 RTF、首包延迟与显存。论文列出 5 组消融，去草稿全填填充符、去输入端草稿特征、R 取不同值、去草稿 TDNN 、草稿直送解码器跳过 LLM 作下界，并按帧组一致率与草稿准确率分桶画 WER 验证分析。除 R 取值的速度质量排序外，其余消融的具体数值在本次摘录正文中未展开，只能看到方向性设计。

#### 同卡速度对比

速度全部在同一张 RTX 4090 24 GB 上单流 batch 1 实测，不引用他文数字，也不跨硬件折算，TigerTTS 默认每步 3 帧加 CUDA Graph 单步解码。此时 RTF 为 0.05 即约 20 倍实时，R 为 1 时为 0.086 ，5 帧时为 0.043 ，7 帧时为 0.04 ，对应 11.6 、20 、23.3 与 25 倍实时。从 R 为 1 到 3 帧加速 1.7 倍，3 到 5 帧为 1.2 倍，5 到 7 帧仅 1.1 倍，序列缩短的收益被单状态发射更多帧的负担抵消，论文以 3 帧为默认，兼顾预测窗口与误差界的大小。

跨系统看，TigerTTS 每步 3 帧比 VoxCPM1.5 的 0.144 快 2.88 倍，比 VoxCPM2 的 0.25 快 5 倍，比 CosyVoice 2 的 0.8 快约 16 倍，比 Fish Audio S2 Pro 的 3.0 快 60 倍，比 Qwen3-TTS 的 2.4 快 48 倍。VoxCPM2 的优化 Nano-vLLM 路径达 0.13 ，TigerTTS 仍快 2.6 倍。解释有三，序列缩至 1/3 ，640 维隐变量单次吸收注意力读缓存，每步一次图重放无主机往返。0.15B 量级主干比 2B 的 VoxCPM2 小一个数量级，总系统 0.35B 对 CosyVoice 2 的 0.5B 主干，仍实现更快，说明速度主要来自并行与缓存而非单纯堆参数。

#### 可懂度与自然度的口径

SEED 上 TigerTTS 中文 CER 为 1.09 对 CosyVoice 2 的 1.45 ，英文 WER 为 1.67 对 2.57 ，为两列最低。LibriSpeech test-clean 子集上 WER 为 2.22 对 2.47 低约 10% ，N-MOS 为 4.36 对 3.96 ，说话人相似度为 0.820 对 0.745 ，三列均为最好。分词器侧，组并行 FSQ 用满全部 2048 个码，利用率 100% ，4 个基准上 ASR 错误率为 6.35% 、4.66% 、4.19% 与 2.52% ，比 CosyVoice 2 研究中 FSQ 的 10.67% 、7.29% 、6.58% 与 4.43% 低约 36% 到 43% ，而 VQ 仅用 963/4096 个码，利用率 23% 。

这些领先成立的前提要讲清，基线行引自 CosyVoice 2 论文自有协议，非同一转写流水线，VoxCPM2 报告中 CosyVoice 2 的 WER 与 CER 为 3.09 与 1.38 ，与自报 2.57 与 1.45 存在同量级偏移，排名只在声明来源下指示性成立。Fish Audio S2 只出现在速度表，SEED 可比行缺失，其 0.54 CER 与 0.99 WER 来自不同转写流水线与 4.6B 模型，不可直接对比。质量排序上 R 为 1 最好，3 、5 、7 依次下降，速度排序恰好反转，R 为 1 与 3 接近但后者快 1.7 倍，这是为速度付出的明确代价。自然度用 N-MOS 神经代理分，未给出人工 MOS 听众数与置信区间，方差与失效案例也未展开，解读时应与人工听测区分。

### 单组停机与单流部署带来的边界和复现前提

论文自列 5 条边界，结束检测只在组 1 做，单次坏采样就可能提前截断，修复思路是连续多帧超阈才停。说话人表示三处不一致，草稿用 4 维压缩，LLM 与声码器用 192 维 ECAPA ，解码器用 1024 维风格向量，零样本克隆能力受最弱一环限制。解码器只用 \(L1\) 训练，预测梅尔易过平滑，且声码器训练吃真实梅尔部署吃预测梅尔，存在错配。8 个标志帧只放离散情感韵律标签，7 类情感、5 类风格与 #1 到 #4 短语断裂，不支持连续风格或语速细粒度控制。InstanceNorm 在填充时间轴上算统计，服务端当前只跑 batch 1 ，组 batch 推理受影响。

复现要区分三件事，代码、权重与系统可运行。本次核查未发现可确认可用的作者资源，公开状态原文未披露，不应视为已开源，复现需以论文超参数与同卡同 ASR 协议为准。训练语音总时长、语种分布与训练用 GPU 型号步数耗时原文未披露，超参数则较完整，AdamW 参数为 0.9 与 0.95 ，矩阵权重衰减 0.1 ，梯度裁剪 1.0 ，学习率 \(2 \times 10^{-4}\) ，2000 步预热余弦衰减至 10% ，batch 16 ，推理温度 1.0 ，top-k 5 ，top-p 0.9 ，种子每请求 1234 。速度复现需同卡 RTX 4090 24 GB 单流，质量复现需同 ASR ，LibriSpeech 用 Whisper-Large V3 去标点算 WER ，SEED 沿 CosyVoice 2 协议，跨流水线对比会引入与增益同量级的偏移。

选型上，若首包延迟敏感，Fast 模式用草稿先流出前 500 ms ，前缀成本约 15 ms ，再由 LLM 续写，适合交互。若追求最高可懂度，R 为 1 是保守下界，质量与每步 3 帧接近但慢 1.7 倍，每步 5 帧与 7 帧只为完整性保留。若部署在意显存带宽，小批量下 4 倍 KV 缓存压缩与单图回放收益最大，batch 放大后需重测 InstanceNorm 与静态图缓存。总体上，草稿定对齐、LLM 管细节的分工成立，但单组停机、表示不一致与 \(L1\) 平滑仍是落地前要补的短板。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz ，nfft 1024 ，窗长 640 点 40 ms Hann 窗，帧移 160 点 10 ms ，100 个梅尔 bins ，动态压缩无均值方差归一化，梅尔帧截为偶数，梅尔与 Token 帧严格 2 比 1 ，Token 50 Hz 每 20 ms 一帧，梅尔 100 Hz 每 10 ms 一帧，标称码率约 1800 bps ，Fast 前缀 RTF 0.03 ，默认 LLM 解码 RTF 0.05 ，因果前瞻原文未披露
- **训练与评测数据**：评测涉及 LibriSpeech test-clean 子集、SEED 中英文与难例集、分词器评测用 CommonVoice 与 Fleurs 英中文，训练语音总时长语种分布与划分原文未披露，文本侧标注用于情感韵律标签，ASR 对齐器提供音素时长标签
- **算力与训练耗时**：推理速度在单张 RTX 4090 24 GB 上单流 batch 1 实测，训练用 GPU 型号数量步数耗时原文未披露，部署为单 GPU 上 CUDA Graph 解码
- **核心超参数与配置**：FSQ 为 4 组乘 512 类电平 8 4 4 4 ，R 3 G 4 每步 12 Token ，LLM 隐层 1280 共 6 层 10 头乘 128 前馈 3456 ，Lmax 1024 ，特殊词表 520 ，AdamW 参数 0.9 与 0.95 权重衰减 0.1 裁剪 1.0 学习率 2e-4 预热 2000 步余弦至 10 百分之 batch 16 ，推理温度 1.0 top-k 5 top-p 0.9 种子 1234
- **推理速度与部署开销**：默认每步 3 帧 RTF 0.05 约 20 倍实时，R 为 1 时 0.086 ，5 帧时 0.043 ，7 帧时 0.04 ，Fast 前缀 RTF 0.03 首包先流 500 ms 约 15 ms GPU 时间，总参数 354.6M 即 0.35B 浮点 32 位，满长 KV 缓存约 15.7 MB ，首包延迟与显存峰值原文未给完整数字
- **开源产物与协议状态**：本次核查未发现可确认可用的作者代码权重数据或演示链接，公开状态原文未披露，不应视为已开源，复现需以论文超参数与同卡同 ASR 协议为准
- **附录与补充材料要点**：原文未设独立附录，关键证明与超参数已在正文给出，含累积取整边界训练推理一致性条件总相关界与指数采样等价性证明，典型失效为单组停机误触发与长句音色漂移，许可限制原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34241v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同卡单流RTF 0.05约20倍实时，对2B VoxCPM2快5倍对CosyVoice 2快16倍且R消融完整。

- 核心优势：SEED中文CER 1.09%英文WER 1.67%最优，LibriSpeech WER 2.22%低于基线，分词器2048码全用且ASR错误率低36%至43%。

- 核心优势：帧对齐草稿引导配条件总相关无损界与无码本FSQ及输入侧RoPE使MLA吸收精确成立，推导完整。

- 主要短板：NMOS 4.36主张自然度领先却未说明听众数与置信区间且无UTMOS与DNSMOS对照，违反听测协议红线。

- 主要短板：去草稿、去输入侧草稿特征与去TDNN等核心消融未给具体数值，且SEED缺说话人相似度与困难集共4格，削弱因果证据。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
