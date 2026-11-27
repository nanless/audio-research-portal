---
title: "UMAI: UM Aware Inference with a Frozen Qwen3-ASR"
date: 2026-11-27
draft: false
tags: [语音属性识别, 表示探测, 统计分析]
categories: [论文速递]
description: "在冻结 Qwen3-ASR-1.7B 一字不改且只解码一次的约束下，UMAI 用注意力定位的音频窗口与两阶段线性判别加等渗校准找回漏掉的 uh 与 um，在 AMI 评测集上将填充词 F1 从 12.2 提升至 82.6，代价是处理时间增加 14% 与幻觉率上升。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34256"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "冻结识别器一字不改如何找回漏掉的 uh 与 um"
paper_digest_original_title: "UMAI: UM Aware Inference with a Frozen Qwen3-ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34256v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34256v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34256v1.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "在冻结 Qwen3-ASR-1.7B 一字不改且只解码一次的约束下，UMAI 用注意力定位的音频窗口与两阶段线性判别加等渗校准找回漏掉的 uh 与 um，在 AMI 评测集上将填充词 F1 从 12.2 提升至 82.6，代价是处理时间增加 14% 与幻觉率上升。"
paper_digest_reader_sections: [{"heading":"逐字转写要留下 uh 与 um，冻结识别器一字不改更难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"UMAI 只读一次解码记录，删掉标签即回原文","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"注意力混合头框出间隙窗口，帧后验给出声学证据","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两阶段判别先分层压缩再汇合校准，形式另走声学加语言偏好","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"AMI 上 F1 从 12.2 到 82.6，Nyra 高分需看阈值选择前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论在冻结单次解码下成立，失效与复现边界要先看清","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Computer Science, Hanyang University, Seoul, South Korea"],"name":"Gyeongmin Kim"}]
paper_digest_abstract_sha256: "02b92d97a0ddf4e4e44839ac73ebc2a140ede9a454af5cc0cd01c91a4bd661f5"
paper_digest_sidecars: {"citation.bib":{"sha256":"ba3e8f631cc6ff1451447ce3e59c386d683f9c5e0e8c731881ede8f167f21778","url":"/audio-research-portal/client/papers/2026-11-27/2611-34256/citation.bib"},"citation.json":{"sha256":"781bfc5d68b5089efc1c1bc441789993faf5d8a428062105dfaf4ad68ecf792f","url":"/audio-research-portal/client/papers/2026-11-27/2611-34256/citation.json"},"citation.ris":{"sha256":"a953acccdcd51ca5185b449f42f77f1a62c276bde7354d7318288097927f7bf8","url":"/audio-research-portal/client/papers/2026-11-27/2611-34256/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f4f25ad1ca307060fbbeab8d784067034a442913d0355e1a0f272752faf6ff03","url":"/audio-research-portal/client/papers/2026-11-27/2611-34256/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "c39fd5e1cb8cc373992be4a32d74bb8176a9ffab313b5d9591d0a35abfa28663"
paper_digest_api_reader_plan_sha256: "d507d6d8c0304306a98c8cc366375c800a488ffaa683bb21593038741afca55d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "811a874293976227949a1f9b263f493e133e7122e7ce570ffa446c1afaaebc3f"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "1caffdce33a84f5945fb84af41e3bbccaa93617f27f6e207f4f91c25ccad8e7e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "03c28a261a3c0b6aee2af2b934cbece07f43a1637d44dd4c9578081fbe94963e"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e3322a9694290487044a419d9c1993b97d8255671903290bfd422dea8f44d9a2"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 冻结识别器一字不改如何找回漏掉的 uh 与 um

> 英文题目：*[UMAI: UM Aware Inference with a Frozen Qwen3-ASR](https://arxiv.org/abs/2611.34256v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音属性识别](/audio-research-portal/papers/?concept=task.speech-attributes)
- **研究方法**：[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 7.2/10 | 技术严谨 6.7/10 | 实验充分 6.0/10 | 清晰度 6.5/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.3/10 | 工程/实践 5.9/10


## 👥 作者与机构

- Gyeongmin Kim：Department of Computer Science, Hanyang University, Seoul, South Korea

## 📌 核心摘要

**问题与瓶颈：** 任务输入为英文耳机采集的连续会议与朗读语音，输出为保留 uh 与 um 等填充停顿的逐字文本，可用于临床言语评估与自然语音合成数据管线。主流识别器为追求可读性常在转写中丢弃此类词，而基于逐字转写的微调或提示偏置虽能找回填充词，却会连带改变词选择、标点与数字格式，无法保证原有转写逐字不变。冻结的 Qwen3-ASR-1.7B 在 Nyra 英文集 3,072 个填充标注上仅写出 713 个，其中 704 个正确，精度达 98.7%，召回率仅 22.9%，在 AMI 会议评估集上召回率更降至 6.6%。根本矛盾在于单次贪婪解码已丢弃填充词的显式输出，但解码注意力与帧后验中仍残留其声学与状态证据，缺少只读不改词面的事后找回机制。

**核心思路与方法架构：** 与改动解码的路线不同，UMAI（UM Aware Inference）冻结识别器并只运行一次贪婪解码，事后仅在词间空隙插入 [uh] 与 [um] 标签，删除标签即恢复原识别文本，从而直击词面不变约束下的找回难题。对单个空隙 k，方法先混合全部 448 个解码头的注意力得到单一对齐头，以期望最大化（expectation-maximization, EM）学到的权重定位音频窗口，并在窗口内池化五类帧后验及其对数得到音频特征，同时以相邻词窗口补充拉长词首的混淆证据。再将该音频特征与解码器在下一词首步 g 及次步 g+1 的各层状态经第一阶段线性判别分析（linear discriminant analysis, LDA）得到的 224 维分数拼接，经第二阶段 LDA 与等渗回归（isotonic regression）校准为概率，超过阈值则插入标签。形式选择另用语言模型偏好与音频似然比经二类判别得到 um 概率，决定写 [uh] 还是 [um]。全程无梯度训练，类均值与收缩协方差、对齐头权重与概率表均有闭式或统计估计，离线在解码后执行，读出结果为独立于识别器的 5.7 MB 文件。

**关键实验与核心代价：** 在 7,490 条话语、含 3,067 个填充词的 AMI 评估集上，默认阈值 0.75 下填充词 F1 从 12.2 升至 82.6，精度由 93.1% 变为 93.3%，召回率由 6.6% 升至 74.0%。在 4,957 条话语、含 3,072 个填充词的 Nyra 全集上，F1 从 37.2 升至 96.5，召回率由 22.9% 升至 95.1%，精度为 98.0%。AMI 上最优 F1 出现在阈值 0.50 处为 84.7 而非默认 0.75，阈值从 0.90 升至 0.95 时召回率急剧下降，经空隙级重标注后 AMI 的 F1 为 86.3，平均精度达 0.900。在单 GPU、批量为 1、bfloat16 下对单说话人 501.7 s 音频计时，150 条话语的实时率（real-time factor, RTF, 越低越好 ↓）由 0.139 升至 0.158，增幅为 14%，峰值显存由 4.08 GiB 升至 4.19 GiB。

**适用边界与深读导览：** 结论成立于英文耳机语音、冻结 Qwen3-ASR-1.7B 单次贪婪解码、词面完全不变的约束下，默认阈值在 Nyra 上选定故该集分数偏乐观，且朗读式 Nyra 与自发多方会议 AMI 存在域差异。连续多个填充词只给一个标签、话语末尾空隙与被写成他词的填充词仍易漏检，紧跟已写填充词的空隙几乎不打标签，非英文、远场噪声、流式部署及儿童与病理语音均未验证。论文未提供可试听的音频演示页，仅给出代码与 5.7 MB 参数文件地址。欲深究对齐头混合、两阶段判别与校准堆叠及重标注评分差异，可查阅下方方法概述和实验结果对应小节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/kdrkdrkdr/umai> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 逐字转写要留下 uh 与 um，冻结识别器一字不改更难

逐字转写要求写下说话人真正说出的内容，包括 uh 与 um 这类填充停顿。 这类记录可用于临床言语评估，也可用于自然语音合成数据管线与非流利现象分析。 Nyra 逐字语音基准正是为这些用途设计的英文评测之一。 但许多识别器会主动丢掉填充词，已有报道指出 Whisper 会删掉大量填充词。 在该基准英文集合的 3,072 个填充标签中，冻结的 Qwen3-ASR-1.7B 只写出 713 个填充词，其中 704 个正确，精度高达 98.7%，但召回率仅为 22.9%。

论文把输入定义为头戴式麦克风语音，输出定义为识别器原有词序列外加插在词间隙的 [uh] 与 [um] 标签。 关键约束是删掉标签后必须逐字还原 Qwen3-ASR 原文，一个识别词、标点或数字格式都不允许改动，且识别器只做一次贪心解码。 微调逐字语料、提示词引导或偏置填充词符号都能找回一部分填充词，但都会改变解码路径，连带改动词选择与格式。 因此问题不是单纯提高填充词召回率，而是在一字不改的前提下，能否从一次解码留下的内部状态中找回漏掉的填充词。

已有主流路线分为两类，一类在转写文本上做非流利检测，例如双向长短时记忆网络或自注意力句法分析器，另一类从 wav2vec 2.0 这类自监督特征中检测口吃。 它们都不直接使用识别器自身的解码状态，也不保证与识别词对齐。 另一类逐字微调路线如 CrisperWhisper 会调整分词器并微调 Whisper，必然改动原文。 UMAI 把每个词间隙作为决策单位，用解码注意力定位音频窗口，再用编码器与解码器状态联合判断此处是否漏掉 uh 或 um，同时为截断词、重复与邻词误识留出单独解释。

### UMAI 只读一次解码记录，删掉标签即回原文

与最近的逐字微调基线相比，UMAI 的实质增量是不动模型也不动文本。 CrisperWhisper 改分词器并微调 Whisper，而 UMAI 冻结 Qwen3-ASR-1.7B，只在一次贪心解码后读取记录值。 音频编码器为 24 层加投影层，文本解码器为 28 层，解码语言固定为英语，最长 260 个 token。 逐字语料只用来估计统计量，最终读出部分折叠为一个 5.7 MB 文件，与识别器分开发布。 删除所有 [uh] 与 [um] 标签即可逐字还原识别原文。

总览示意用灰色表示冻结的 Qwen3-ASR-1.7B，用绿色表示无需梯度训练的 UMAI 读出。 阅读时先沿从音频到不变文本的主路径看一次贪心解码，再看每个词间隙 k 的两路证据在哪里汇合，一路是注意力定位的音频窗口与帧后验，另一路是相邻解码步的全部层状态。 建立这个分叉汇合位置感后，再分节拆解窗口构造与两阶段判别会更清晰。

![原论文 Figure 1：UMAI overview. Grey: the frozen Qwen3-ASR-1.7B, run once.](/audio-research-portal/images/papers/2611.34256/figure-1-555f514e7cdfa745.png)

*论文图 1：冻结识别器单次解码与绿色读出分支在词间隙汇合的总览（原论文 Figure 1）。*

示意中灰色主链为音频进入 24 层编码器加投影层，再进入 28 层解码器贪心运行一次，输出如 okay so we should go with … 的不变文本。 绿色分支在每个间隙 k 取 3 组记录，一是两层堆叠 5 分类 LDA 给出的帧后验 p_t，二是由对齐头算出的音频窗口 w_k，三是步骤 g 与 g+1 处 28 层的解码器状态。 音频侧把 p_t 与 log p_t 加权池化为 20 维特征，解码器侧经每层 LDA 压缩为 224 维，两者在第二阶段 5 分类 LDA 汇合为概率 P_k，大于阈值 τ 则插入标签。 右侧小分支用末层状态的语言模型偏好 l_k 与投影帧声学得分 f_k 决定写 [uh] 还是 [um]。

以一个 1 秒会议片段为贯穿教学假设，设其解码文本为 okay so we should go with …，共形成词前间隙与句尾间隙。 解码按序完成，第一步记录全部注意力查询与音频键，第二步按词首步骤 g 与下一步 g+1 取出解码器状态，第三步由对齐头算出每个间隙的归一化窗口，第四步池化帧后验得到音频特征，第五步经两阶段 LDA 与等渗回归得到 P_k 并与阈值比较。 末尾间隙缺少 g+1 与下一词窗口，改用单独的 123 输入模型处理。 全程不启动第二次解码。

### 注意力混合头框出间隙窗口，帧后验给出声学证据

解码器每一步对音频帧的注意力权重常被看作对齐。 UMAI 把 28 层共 448 个头的注意力混合为一个对齐头，混合权重 π 用期望最大化算法估计，目标是最大化正确识别的采样词上各头归一化注意力质量的对数似然。 采样词限定为两个字符以上的非重复参考词，并按 40 ms 分箱使时长分布贴近填充、截断与重复片段。 估计结果高度集中，第 21 层第 15 个头占 0.91，仅另有 3 个头权重超过 0.001，其余 62 个非零头分布在 20 层中，推理时只需重算这些头。

\[w_{k}(t)\propto C_{j_{\mathrm{prev}}}(t)\,\bigl(1-C_{g}(t)\bigr)_{+},\]

该式计算第 k 个间隙的音频窗口 w_k 在每帧 t 的权重。 C_j 为对齐头在步骤 j 之前累积到第 t 帧的注意力比例，j_prev 为前一个词首步骤，g 为后一个词首或句尾结束步骤。 (x)_+ 表示取与 0 的最大值，正部以外的负值置零，整个窗口归一化为和为 1。 若间隙前无词，则令 C_jprev 恒为 1，表示从句首开始累积。

直觉上 C_jprev 随前词推进而上升，1 减 C_g 在后词开始处下降，两者相乘只保留前词已说完而后词尚未开始的中间地带，正好对应可能漏掉填充词的时间。 若前后词紧挨无停顿，差值接近 0，窗口质量分散，缺失特征会被均值替代，避免强行判为填充词。 若中间有较长静音或填充段，窗口会在该段取得大权重。 该窗口随后作为权重对帧后验 p_t 及其对数加权求和，得到间隙的声学证据，并以同样形式对下一词窗口求出对照特征，用于区分拉长词首与真正填充词。

每帧声学后验 p_t 覆盖静音、普通词、填充词、截断词与重复 5 类，标签来自参考词时间。 先对 24 个编码器层与投影层共 25 个来源各做一个 5 分类 LDA，再把拼接分数送入第二个 LDA，得到最终 5 维后验。 间隙特征 a_k 把 w_k 加权的 p_t 与 log p_t 拼接为 10 维，再拼接下一词窗口的同类池化得到共 20 维。 以 1 秒示例看，若窗口落在 uh 段，填充维后验会被放大，对数项进一步拉开与词维的差距。 缺失的下一词窗口或解码步特征一律用拟合数据均值填充，保持维度固定。

### 两阶段判别先分层压缩再汇合校准，形式另走声学加语言偏好

拟合数据中每个间隙被标为 5 类之一，O 表示无缺失，F 表示参考在此有 uh 或 um，E 表示有被漏掉的其他词如截断词或重复，U 表示邻词被误识，Q 表示下一词是识别器自己写出的填充词。 只有 F 为目标，其余 4 类为解码器状态异常提供单独解释，避免把所有异常都推给填充词。 教学例子中，若参考为 uh 而识别直接连读，则该间隙标为 F，若邻词把 gonna 写成 going to，则相关间隙标为 U。

#### 是否插入标签

第一阶段对每个解码器层 l 与步骤 j 做 5 分类 LDA，j 取 g 与 g+1，共 28 乘 2 组模型。 每组协方差在类间共享，并用 oracle 近似收缩估计修正，形式为样本类内协方差与单位矩阵的加权平均，收缩系数 ρ 有闭式解。 每组只保留相对 O 的 4 个对数后验比，共 28 乘 2 乘 4 等于 224 个分数，把高维状态压缩为可比的判别分。

第二阶段输入 x_k 为 245 维，包含 224 个第一阶段分数、间隙与下一词的 20 维音频特征，以及示前一片是否为识别器写出的填充词的二值 q_k。 第二个 5 分类 LDA 给出对数几率 s_k，即属于 F 的概率与不属于 F 的概率之比的对数。 句尾间隙缺少 g+1 与下一词窗口，改用仅在句尾间隙上拟合的 123 输入模型。 两阶段在 softmax 之前都是线性，可在推理时折叠为一个矩阵。 s_k 经等渗回归映射为校准概率 P_k，大于阈值 τ 则插入标签，默认 τ 为 0.75。 拟合按 AMI 会议系列分 5 折，第二阶段与等渗均用折外分数堆叠，入库模型再在全量数据上重拟合。

#### 写 uh 还是 um

形式判断走独立小分支，同时利用识别器自身的语言模型偏好与投影帧的声学似然。 声学侧在参考填充段内的投影帧上训练 LDA，给出每帧 um 相对 uh 的对数似然比，再以 w_k 加权并按填充后验加权平均为 f_k。 语言侧用量化为 l_k 的偏好表示，两者经二分类 LDA 与等渗回归得到 um 的概率 R_k，大于 0.5 写 [um]，否则写 [uh]。 该分支在 23,767 个邻词匹配的 F 间隙上拟合。

\[\ell_{k}=\log\!\sum_{v\in\mathcal{V}_{\mathrm{um}}}\!P_{\mathrm{LM}}(v)-\log\!\sum_{v\in\mathcal{V}_{\mathrm{uh}}}\!P_{\mathrm{LM}}(v),\]

该式计算语言侧偏好 l_k，即下一词为 um 系列与 uh 系列的对数概率差。 P_LM 为把末层状态 h_g 的第 28 层经最终归一化与输出层得到的下 1 token 分布，V_um 与 V_uh 各为 10 种单 token 拼写集合。 softmax 分母相消，推理时只需计算 10 个输出行的点积。

直觉上 l_k 度量冻结解码器在当前上下文更倾向把下一声写成哪一类填充词，若 um 拼写总质量更高则为正，反之为负。 若解码器对两者都赋予极低概率，差值接近 0，决策更多交给声学 f_k。 若某类拼写概率占优，差值绝对值变大，会推动二分类 LDA 向该侧倾斜。 该对数差与 f_k 共同输入二维 LDA 与等渗回归，输出 R_k 直接决定标签形式，不影响是否插入的 P_k 判定。

### AMI 上 F1 从 12.2 到 82.6，Nyra 高分需看阈值选择前提

评测沿用 Nyra 基准的计分器，输出填充词含识别器自写与 UMAI 插入两部分。 与参考填充词对齐为真正例 TP，否则为假正例 FP，参考填充词无对应输出为假负例 FN。 填充词 F1 为 2 乘 TP 除以 2 乘 TP 加 FP 加 FN，精确 F1 还要求 uh 与 um 形式一致。 非流利幻觉率分母为全部填充加截断词，AMI 评测集为 4,488，Nyra 为 6,120。 方向上 F1 越高越好，幻觉率越低越好。 本节只用自动计分，无人工听测 MOS 或 ABX 对照。

拟合数据为 AMI 训练会议加 IB4005 共 66,900 条，评测为同划分的 16 个会议共 7,490 条含 3,067 个参考填充词，评测说话人未出现在拟合中，任何统计量、结构选择与阈值都未在该集上挑选，均为单次运行结果。 Nyra 为 4,957 条英文含 3,072 个参考填充词，默认 τ 为 0.75 在该集上选定，因此该阈值下 Nyra 结果偏乐观。 计分仅把 uh 与 um 计为填充词，hm 与 ah 等仍按普通词处理，输出侧规则在读完评测误差后加入，只改变计分不改变输出。

#### 主结果与阈值权衡

下表精简了主结果，保留两集各自的识别器基线与关键阈值，完整阈值扫描见原文表格。 阅读时先对照插入数量与真正例、假正例、假负例，再看 F1 与精确 F1 的提升幅度，最后看幻觉率的代价。 阈值从低到高移动时，插入数与假正例同步下降，召回率随之回落。 两集分开比较有助于区分朗读与自发会议的难度差异。

| Set | System | TP | FP | FN | F1 | Hal. |
| --- | --- | --- | --- | --- | --- | --- |
| AMI | Qwen3-ASR | 201 | 15 | 2,866 | 12.2 | 0.65 |
| eval | τ=0.50 | 2,473 | 300 | 594 | 84.7 | 4.34 |
|  | τ=0.75 | 2,270 | 162 | 797 | 82.6 | 2.30 |
| Nyra | Qwen3-ASR | 704 | 9 | 2,368 | 37.2 | 0.41 |
|  | τ=0.75 | 2,920 | 61 | 152 | 96.5 | 0.72 |

在 AMI 评测集上，默认 τ 为 0.75 时 Ins. 为 2,216 仅指 UMAI 在识别器原生输出之外的额外插入数，表中 TP 与 FP 均为两部分之和，识别器自身已原生输出 201 个 TP 与 15 个 FP 共 216 处，合计预测 216 加 2,216 等于 2,432 处，对应 TP 为 2,270 与 FP 为 162 即 2,270 加 162 等于 2,432，FN 为 797，F1 为 82.6，精确 F1 为 80.0，幻觉率为 2.30%，而识别器自身 F1 为 12.2。 召回率从 6.6% 升至 74.0%，精度保持在 93.3% 附近。 在 Nyra 上同阈值下 TP 为 2,920，FP 为 61，FN 为 152，F1 为 96.5，精确 F1 为 94.9，召回率从 22.9% 升至 95.1%，精度为 98.0%。

升高阈值以召回换取更少假正例，τ 从 0.90 到 0.95 时召回率在 AMI 从 65.5% 跌至 44.3%，在 Nyra 从 92.8% 跌至 82.3%。 AMI 最优 F1 在 τ 为 0.50 处取得 84.7，低于默认阈值，说明在 Nyra 上选定的阈值并非 AMI 最优。 代价是幻觉率从基线的 0.65% 与 0.41% 升至数个百分点。 Nyra 显著高于 AMI，既含阈值选择的乐观偏差，也与语料性质有关，Nyra 为单人朗读会话转写，AMI 为自发多方会议，识别器自身在 Nyra 已达 22.9% 召回，远高于 AMI 的 6.6%，论文未分离两种成因，明确以 AMI 为主要估计。 原文未报告去掉音频分支或解码器分支的单独消融，归因主要靠阈值扫描与重标对比支撑。

#### 重打标签后的间隙计分

计分器词对齐在邻词误识时会把标签与参考填充词错配，论文因此用同一语言模型读者按间隙重标 AMI 评测集。 下表为间隙计分结果，TP 与 FP 含识别器自写的 201 个 TP 与 15 个 FP，P 与 R 为精度与召回率。 重标区域从识别文本与参考单独挑选，读者未见模型概率与标签，排除间隙不计分。

| System | TP | FP | FN | P | R | F1 |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3-ASR | 201 | 15 | 2,547 | 93.1 | 7.3 | 13.6 |
| τ=0.50 | 2,400 | 318 | 348 | 88.3 | 87.3 | 87.8 |
| τ=0.75 | 2,217 | 171 | 531 | 92.8 | 80.7 | 86.3 |

按间隙计分时 τ 为 0.75 的 F1 为 86.3，高于词对齐计分的 82.6，其中约 0.9 个点来自计分方式本身，约 2.9 个点来自重标与 148 个排除间隙。 未重标前间隙 F1 为 83.45，识别器自身为 14.67，重标后识别器自身降至 13.6。 标签自身的平均精度 AP 从 0.834 升至 0.900，开发集上为 0.898，精度在两种计分下相近，剩余误差以漏检为主，FN 为 531，FP 为 171。 该对比未做方差或置信区间报告，单次运行结果需按固定流程复现核对。 过高阈值并不可取，τ 为 0.95 时 F1 回落至 64.8。

### 结论在冻结单次解码下成立，失效与复现边界要先看清

结论成立依赖 3 个前提，一是语言固定为英语且填充词仅计 uh 与 um，二是间隙定义依赖空白切分与 ASCII 字母数字判定，uh huh 按一个后向通道词处理，三是输出侧计分规则把 hm 与 ah 等按普通词处理，该规则在读完评测误差后加入。 若换语种、换填充词表或换官方归一化，AMI 评测集参考填充词将从 3,067 变为 3,434，F1 口径随之变化。 句尾间隙用单独模型处理，连续两个填充词只给一个标签、识别器把填充词写成他词、句尾漏检等仍是主要漏检来源。

代价方面，UMAI 不增加解码遍数，但需重算 62 个非零头的注意力并逐间隙做小矩阵运算。 在单 GPU 上以批大小 1 与 bfloat16 计时 150 条连续语句共 501.7 s 音频，实时率为 0.139 升至 0.158，增加 14%，单条均值从 0.465 s 升至 0.529 s，中值从 0.187 s 升至 0.228 s，峰值显存从 4.08 GiB 升至 4.19 GiB。 误差分析基于转写文本的双读者抽查，60 个假正例中 37 个为识别器写出的 hmm 或 ah，17 个为真实误报，其中 13 个把 uh 放在冠词 a 或 the 旁，60 个假负例中 30 个为单个漏标，12 个为识别器改写后无法替换。 这些小样本只说明类型存在，不代表频率。

复现需区分三件事，论文给出拟合用的 AMI 头戴式音频与强制对齐时间、Nyra 英文全划分，以及阈值之外的设计均在开发集上比较，评测集保持未动。 论文称代码与 5.7 MB 读出文件发布于文内链接，拟合用全量非 O 间隙 154,138 个加等量采样 O 间隙并按原频率加权，5 折按会议系列划分。 工程选型上，若必须一字不改且只能承受约一成延迟增长，该读出是合适选择，若可接受改动原文或重解码，微调与偏置路线可能更直接。 试听或文本对照时应以 AMI 自发会议为主，Nyra 朗读数据的高分不宜直接外推。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：头戴式麦克风音频，采样率与帧移原文未披露，40 ms 分箱用于采样词时长匹配，音频窗口按注意力累积差构造并归一化，推理实时率从 0.139 升至 0.158，峰值显存从 4.08 GiB 升至 4.19 GiB，单 GPU 批大小 1 与 bfloat16 计时
- **训练与评测数据**：拟合为 AMI 会议语料训练会议加 IB4005 共 66,900 条，排除 IS1003b 与 3 条超长音频，含 26,408 个 F 间隙等共 154,138 个非 O 间隙加等量采样 O 间隙，评测为同划分 16 个会议共 7,490 条含 3,067 个参考填充词，开发集 8,665 条，Nyra 英文 4,957 条含 3,072 个参考填充词
- **算力与训练耗时**：拟合计算硬件原文未披露具体型号，耗时计时在单 GPU 上以批大小 1 与 bfloat16 运行 150 条连续语句共 501.7 s 音频，另加 5 条预热，均值从 0.465 s 升至 0.529 s，中值从 0.187 s 升至 0.228 s
- **核心超参数与配置**：贪心解码语言为英语最长 260 个 token，对齐头混合 448 个头权重经期望最大化算法估计，协方差用 oracle 近似收缩估计，第二阶段输入 245 维句尾 123 维，等渗回归校准，默认阈值 0.75，形式阈值 0.5，按会议系列分 5 折堆叠后全量重拟合
- **推理速度与部署开销**：不增加解码遍数，重算 20 层中 62 个非零头在词首与结束步骤的注意力并逐间隙做小矩阵运算，实时率从 0.139 升至 0.158 增加 14%，峰值显存从 4.08 GiB 升至 4.19 GiB
- **开源产物与协议状态**：论文给出 <https://github.com/kdrkdrkdr/umai> 的代码与 5.7 MB 读出文件地址，拟合统计与阈值选择流程在正文交代，权重下载与运行说明以该地址实际内容为准
- **附录与补充材料要点**：原文未披露附录，补充细节散见正文，包括官方归一化下 AMI 为 3,434 个参考填充词时 F1 从 16.5 到 78.1，开发集平均精度为 0.898，句尾与连续填充词等失效模式在误差分析中列出

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34256v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：AMI评估集F1由12.2升至82.6召回率6.6%升至74.0%精度维持93.3%，Nyra上F1由37.2升至96.5召回率达95.1%精度98.0%且词面零改动。

- 核心优势：冻结单次贪婪解码事后读出全程无梯度训练，以EM混合448个解码头定位音频窗口经两阶段LDA与等渗回归校准，产物仅5.7MB。

- 核心优势：保留τ0.50至0.95阈值权衡与退化端点对照，经空隙级重标注后F1达86.3平均精度达0.900，并实测RTF由0.139升至0.158与显存变化。

- 主要短板：无逐字微调或提示偏置解码基线且多组件无直接消融，无法判断线性读出相对改动解码路线的优劣。

- 主要短板：默认阈值在Nyra上选定致该集结果偏乐观，单次运行无置信区间且跨语言远场噪声流式部署均未验证。

- 主要短板：连续多个填充词只给一个标签，话语末尾空隙与被写成他词的填充按设计漏检，紧跟已写填充词的空隙几乎不打标签。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
