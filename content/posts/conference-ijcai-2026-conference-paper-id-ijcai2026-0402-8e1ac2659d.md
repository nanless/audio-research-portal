---
title: "HFFN-ID: A Hierarchical Feature Fusion Network with Bi-Phase Subject ID Modulation for EEG Mel-Spectrogram Reconstruction"
date: 2026-11-28
draft: false
description: "针对非侵入式脑电重建梅尔频谱中个体差异大与跨模态语义鸿沟问题，HFFN-ID 以双阶段被试标识调制与条件引导分层融合结合双向 Mamba 全局建模与包络预训练，在 SparrKULee 上达到 0.0723 的皮尔逊相关系数并减少 38.7% 参数，但绝对相关仍低且依赖已知被试标识。"
tags: ["注意力机制", "状态空间模型", "脑信号", "言语神经解码"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从脑电重建梅尔频谱：被试调制与分层融合如何同时应对个体差异与跨模态鸿沟"
paper_digest_original_title: "HFFN-ID: A Hierarchical Feature Fusion Network with Bi-Phase Subject ID Modulation for EEG Mel-Spectrogram Reconstruction"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0402"
paper_digest_workbench_source_sha256: "967a8487596d8232deb13fb70f816ef77e778cca0327d64d83ce6c5aedf38b41"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/402"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0402.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "言语神经解码"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对非侵入式脑电重建梅尔频谱中个体差异大与跨模态语义鸿沟问题，HFFN-ID 以双阶段被试标识调制与条件引导分层融合结合双向 Mamba 全局建模与包络预训练，在 SparrKULee 上达到 0.0723 的皮尔逊相关系数并减少 38.7% 参数，但绝对相关仍低且依赖已知被试标识。"
paper_digest_reader_sections: [{"heading":"非侵入式脑电重建连续语音为何同时受困于个体差异与模态鸿沟","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"HFFN-ID 三组件如何分工并连成完整重建流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"双阶段调制与门控融合如何实现个性化与跨层一致","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"包络预训练为何能为梅尔重建提供时间骨架","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"梅尔频谱主结果如何在低绝对值下形成相对优势","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"稳定性分布与组件消融能否支撑鲁棒性判断","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"包络泛化与样本级对比如何揭示任务差异","index":7,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"低相关、被试依赖与未验证的部署条件意味着什么","index":8,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China"],"name":"Chi Huang"},{"affiliations":["School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China"],"name":"Zhaohu Liu"},{"affiliations":["School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China"],"name":"Yong Peng"},{"affiliations":["School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China"],"name":"Wanzeng Kong"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"5f04936cd7a5a0c7661d5db1aa81d14569bd13d9e9fe787fe15452e60692952a","url":"/audio-research-portal/client/papers/2026-11-28/conference-8e1ac2659d30db80326d699b/citation.bib"},"citation.json":{"sha256":"499c9a0e9e609e094f23cae9186106e25308d8be4f34196ee4d9bf33695f184c","url":"/audio-research-portal/client/papers/2026-11-28/conference-8e1ac2659d30db80326d699b/citation.json"},"citation.ris":{"sha256":"fbec67c5ec1fdeeb70b0c6bc3b93f5164bab7d2d7cc0f37ccffbd10de02eacae","url":"/audio-research-portal/client/papers/2026-11-28/conference-8e1ac2659d30db80326d699b/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"fab2c3e9ac1cb847f8a3c039dc8771bc69aaed78f75a1e3d885b70732a03584d","url":"/audio-research-portal/client/papers/2026-11-28/conference-8e1ac2659d30db80326d699b/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0402"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/402"
paper_digest_conference_doi: "10.24963/ijcai.2026/402"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/402"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0402.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "7ea855917d5be7398fa9f445a1f07592e1629cbaba1cd39536210f45662bba10"
paper_digest_api_reader_plan_sha256: "eeab0d5b3810938f4d6865fff6231ea2044075020d80ec1b9c7c8459ef93e793"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "26829ada81a7fbf80475cab19a06e12e1e62e57e7fd307893e2c623ac9d6b5cd"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5a218c21dd1a5314e654ec8de1c112bed8858d5a82eff4dcf17bb3571407aa86"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "967f7fdbde47a843d75c655d8e612c09f1aec2759041cc276e095101a54507fc"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "939b2df5da2ce446395809dd4a49e8795625ecd1b30f75e6b4b25e2db2ab95ef"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"signal","id":"signal.neural","label":"脑信号"},{"facet":"task","id":"task.neural-speech-decoding","label":"言语神经解码"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从脑电重建梅尔频谱：被试调制与分层融合如何同时应对个体差异与跨模态鸿沟

> 英文题目：*HFFN-ID: A Hierarchical Feature Fusion Network with Bi-Phase Subject ID Modulation for EEG Mel-Spectrogram Reconstruction*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0402`
> DOI：`10.24963/ijcai.2026/402`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/402) · [官方 PDF](https://ijcai.org/proceedings/2026/0402.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[言语神经解码](/audio-research-portal/papers/?concept=task.neural-speech-decoding)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)
- **信号**：[脑信号](/audio-research-portal/papers/?concept=signal.neural)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.7/10 | 实验充分 6.0/10 | 清晰度 7.1/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 5.1/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Chi Huang：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Zhaohu Liu：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Yong Peng：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China
- Wanzeng Kong：School of Computer Science, Hangzhou Dianzi University, Hangzhou, 310018, China

## 📌 核心摘要

**问题与瓶颈：** 本文处理从非侵入脑电 (electroencephalogram, EEG) 重建梅尔频谱图 (mel-spectrogram) 的任务，输入为预处理至 64 Hz 的多通道 EEG，输出为同步至 64 Hz 的听觉时频特征，用于后续语音重建。该任务的根本困难在于受试者间神经模式差异大，脑结构与心理状态不同导致同一语音对应的 EEG 分布偏移，跨受试者泛化困难。另一困难是异构表征间的分层语义鸿沟，EEG 生理特征与语音谱细节处于不同抽象层级，朴素拼接或相加等静态融合无法自适应对齐上下文与身份条件。长序列建模还面临局部瞬态细节与全局语义兼顾的压力，传统循环结构存在信息衰减与计算瓶颈。

**核心思路与方法架构：** 与最接近的 SSM2Mel 基线相比，本文保留 S4-UNet 局部提取与类 Mamba 长序列建模的总体链路，实质增量是将单层独热加线性映射的受试者适配器替换为双相调制加条件引导分层融合，并引入语音包络预训练初始化。沿单条样本看，5 秒 EEG 片段与受试者编号 (subject ID, sub-id) 一同输入，正弦位置编码加时间多层感知机 (Time multilayer perceptron, Time MLP) 将编号映射为受试者嵌入，再切分为注意力与前馈各用的缩放与偏置参数，在注意力输入前与前馈输入前做两轮仿射校准。校准后的特征经 S4-UNet 提取多尺度上下文，条件引导分层融合先以首轮调制结果为查询引导对上下文做缩放点积注意力筛选，再以轻量门控在精炼上下文与完整调制基座间按空间位置加权求和，融合特征送入双向 Mamba (Bidirectional Mamba, BiMamba) 建模全局依赖后经线性层投射为梅尔频谱图。两阶段训练先在语音包络上预训练捕捉时域包络动态，再在梅尔频谱图上微调迁移至频域细节，论文未说明冻结与解冻细节，推理按描述为离线非重叠切分后拼接，论文未声明流式或因果约束。

**关键实验与核心代价：** 在 SparrKULee 数据集 80% 训练、10% 验证与 10% 测试划分下，梅尔频谱图重建的皮尔逊相关系数 (Pearson correlation coefficient, PCC, 越高越好 ↑) 从 VLAAI 基线的 0.050 提高至本文方法的 0.0723，论文表 1 以三位小数记为 0.072 并报告相对提升 44%，同期最强基线 SSM2Mel 表 1 记为 0.069、表 2 以四位小数记为 0.0692，本文方法仍高于该基线。同一对比下梅尔倒谱失真 (Mel-Cepstral Distortion, MCD, 越低越好 ↓) 从 15.3948 降至 15.3845，结构相似性指数 (Structural Similarity Index Measure, SSIM, 越高越好 ↑) 从 0.8256 升至 0.8258，语音包络重建 PCC 从 SSM2Mel 的 0.208 升至 0.211。关键消融显示去掉条件引导分层融合后 PCC 降至 0.0664，去掉双相调制后为 0.0669，去掉预训练后为 0.0668，三者缺一即退化，完整模型为 0.0723。代价侧参数量从 6.88M 降至 4.22M，论文报告减少 38.7%，运行时间从 44149.62 s 降至 17390.66 s，论文报告约为 2.5 倍加速，分布分析显示本文方法中位 PCC 更高且四分位距更窄，SSM2Mel 存在长尾低分离群，论文未提供人工主观听测，仅以客观相关与失真指标评价，未使用平均意见分 (Mean Opinion Score, MOS)。

**适用边界与深读导览：** 上述结论成立前提是 85 名荷兰语受试者聆听连续弗拉芒语叙事的同一采集与预处理链路，含多通道维纳滤波去伪迹、平均参考与 64 Hz 重采样，论文未说明 80%、10%、10% 划分是否为受试者不相交，故跨受试者泛化强度依据有限，跨语言、跨设备与跨范式是否成立论文未验证。绝对 PCC 仍处于 0.0723 量级，SSIM 与 MCD 差距微小，离线 5 秒分段拼接的设定也不直接对应实时脑机接口部署。欲深究双相调制公式与门控融合推导可查阅下方方法概述和架构，欲核对多基线排序、消融幅度与包络泛化可查阅下方实验结果。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 非侵入式脑电重建连续语音为何同时受困于个体差异与模态鸿沟

语音脑机接口希望从大脑活动恢复说话意图，帮助因损伤或退行性疾病无法发声的人群交流。侵入式记录精度高，但手术风险与临床门槛限制了普及。非侵入式脑电安全易用，却面临信噪比低、易受伪影干扰，以及语言网络分布广泛难以解读的困难。早期工作多做封闭词汇分类，例如短语分类准确率达到 75.2%，字符与数字分类准确率超过 85%，但词汇封闭、语义层级简单，无法处理开放连续的真实语言序列。

本文任务是从脑电直接重建梅尔频谱。梅尔频谱是时频信息丰富的语音中间表示，比缓慢变化的低维语音包络更接近高保真重建需求。困难来自两处。第一是被试间差异，脑结构、心理状态与加工策略不同导致神经模式漂移，模型难以跨被试泛化。第二是异质特征的层级语义鸿沟，脑电时间动态与语音频谱结构分属不同分布，简单拼接或相加容易错位，难以同时保留细粒度谱细节与全局结构完整性。

已有路线从线性回归起步，逐步加入非线性时序建模。VLAAI 引入非线性模块与输出上下文，HappyQuokka 采用前置层归一化 Transformer 与全局条件，Sea-Wave 借用 WaveNet 空洞因果卷积捕捉局部与长程上下文。面向梅尔频谱，ConvConcatNet 用深度卷积与跨块拼接并以包络辅助训练，CAT-WaveNet 加入交叉注意力与由粗到精生成，DMF2Mel 强调动态多尺度融合，SSM2Mel 组合 Mamba 长序列建模、S4-UNet 局部提取与包络强度调制器做被试适配。但其被试模块仅用独热编码加一次线性投影，表达能力有限，而常规融合多为静态非自适应，判别力与稳健性受限。

HFFN-ID 针对上述两点提出对应设计。双阶段被试标识调制将离散编号映射为仿射变换参数，在注意力与前馈两处做可学习的缩放与平移，实现个性化校准。条件引导分层融合以多头注意力做跨层检索，再以自适应门控平衡稳定基座与上下文细节，维护跨层一致与语义互补。双向 Mamba 全局提取负责长时依赖，包络预训练提供时间骨架初始化。SparrKULee 上的皮尔逊相关系数达到 0.0723，相对 VLAAI 提升 44.0%，参数减少 38.7%，训练加速约 2.5 倍，但绝对数值仍低，结论依赖特定评测口径。

### HFFN-ID 三组件如何分工并连成完整重建流程

#### 总体分工与信号规格

与最近的 SSM2Mel 相比，HFFN-ID 保留了状态空间长序列建模与 S4-UNet 局部提取的思路，改动集中在两处。第一是将被试适配器替换为双阶段调制，不再用独热编码加一次线性投影，而是用正弦位置编码加多层感知机生成 4 组仿射参数，分两次注入注意力与前馈。第二是新增条件引导分层融合，用交叉注意力加门控代替静态拼接。信号规格方面，脑电与听觉特征均同步到 64 Hz，训练随机裁剪 5 秒片段，推理切分为多个无重叠 5 秒片段独立处理再拼接。原文未披露通道数、梅尔频带数与隐藏维度。

为一次看清数据走向，可沿总体框图自左向右追踪。左侧为脑电波形与被试编号两个入口，顶部 4 路多层感知机生成调制系数，中部为两次乘加校准夹住多头自注意力与层归一化，下部为分层融合与全局提取，最终经线性层输出梅尔频谱热图。注意查询、键与值的箭头汇合位置，以及全局提取内部的残差回路走向。

[![原论文 Figure 1：The HFFN-ID framework overview, which has three components, i.e., the Bi-Phase Subject-ID…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-1.png)

*论文图 1：分层重建流程总览：双阶段被试调制经由分层融合与全局提取输出梅尔频谱（原论文 Figure 1）。*

图中显示上部被试标识经 4 路多层感知机分别输出缩放系数与偏置符号，记为两组伽马与泽塔，分别作用于注意力前与前馈前的乘法与加法节点。下部左侧分层融合框内可见 UNet 输出作为键与值，调制后特征作为查询进入归一化与交叉注意力，再与另一路调制结果在融合模块汇合。右侧全局提取框内可见前置卷积、卷积、UNet 与 Mamba 模块串联，两处前馈模块各带二分之一残差回路，最终箭头指向线性层与紫橙相间的梅尔频谱。

#### 张量流与推理路径

以 1 秒样本为例，若按 64 Hz 计算对应 320 个时间点。脑电片段先经缩放位置编码叠加顺序信息，再接受第一阶段仿射校准，进入多头自注意力与层归一化得到中间表征，随后接受第二阶段校准并经前馈网络得到个性化隐特征。该特征一路直接作为查询引导与稳定基座，另一路经 S4-UNet 扩展为多尺度上下文库。融合模块先以引导检索上下文，再以门控系数加权相加，最后送入双向 Mamba 建模全局依赖并经线性投影得到对应秒数的梅尔频谱帧序列，具体频带维度原文未披露。

训练采用 PyTorch 实现，Adam 优化器训练 1,000 轮，StepLR 每 50 轮衰减 0.9，平台为 Intel Core i9-13900KF CPU 与 NVIDIA GeForce RTX 4080 GPU。推理时将长时脑电切分为无重叠 5 秒段，逐段独立前向再拼接为完整梅尔频谱，不涉及自回归逐帧生成。原文未披露因果流式、前瞻窗口、实时率与显存占用，因此尚不能断言流式部署延迟。

### 双阶段调制与门控融合如何实现个性化与跨层一致

被试标识本质是一个离散编号。BiPSM 先对其做正弦位置编码，再经线性层与带门控的级联多层感知机变换为被试嵌入，随后切分为 4 段等长仿射参数，分别对应注意力分支的缩放与平移，以及前馈分支的缩放与平移。设计灵感类比扩散模型的时间嵌入，每位被试被赋予独立神经签名，避免独热编码加一次线性投影的表达瓶颈，使模型能区分不同个体的基线漂移与响应增益。

执行时分两个阶段。第一阶段在进入多头自注意力前对叠加位置编码的脑电特征做逐元素仿射，第二阶段在进入前馈网络前对注意力输出再做一次仿射，缩放项均采用加 1 残差形式以保持恒等初值。直觉上缩放控制通道增益，平移控制基线偏移。若缩放接近负 1，原特征被抑制而偏置主导，极端时可能抹去共享语音成分。若参数接近零，调制退化为恒等映射，下游退化为通用解码。正常训练中小幅校准既保留跨被试共享的时间动态，又补偿个体增益差异，梯度经由乘加路径回传到被试嵌入。

分层融合处理 3 路语义不同的特征。首次调制后特征作为查询引导，携带即时被试偏置。完整调制后特征作为恒等基座，提供稳定语义基础。S4-UNet 输出作为上下文库，提供多尺度细节。第一步先对查询与上下文分别做层归一化以缓解分布漂移，再以缩放点积注意力计算相关图，仅让与当前被试状态最相关的上下文通过。第二步将精炼上下文与稳定基座拼接，经轻量编码解码结构与非线性激活生成空间门控系数，取值在 0 到 1 之间，最终加权相加得到融合输出。

全局提取采用双向 Mamba 选择性状态空间模块，辅以卷积层与 S4-UNet 结构增强局部感知，再经前馈模块投影到更高维语义空间。相比传统循环结构，它缓解信息衰减与计算瓶颈，更适合秒级长序列的全局依赖建模。融合后特征经该序列模型处理，再经线性层投影为梅尔频谱。原文未披露 Mamba 层数、卷积核尺寸与特征维度，因此无法复算参数量分布与感受野覆盖。

### 包络预训练为何能为梅尔重建提供时间骨架

两阶段训练基于知识迁移思想。神经响应会跟踪语音包络，包络是压缩的时间能量包络，与梅尔频谱共享低层时间动态。第一阶段先在包络特征上预训练，使网络学会基本时间与谱动态。第二阶段再用预训练权重在更丰富的梅尔频谱上微调，将通用时间知识迁移到具体频域，期望提升稳定性与收敛速度。损失采用平均绝对误差与负皮尔逊相关的组合，前者约束绝对偏差，后者约束线性趋势，平衡系数原文未披露具体取值。

预训练是否合理取决于包络与梅尔各频带是否持续正相关。下图展示 SparrKULee 全部匹配样本上包络与梅尔频带间皮尔逊相关的分布，横轴为相关系数，纵轴为频数，蓝色为直方与平滑曲线，红色虚线标出均值，可据此判断共享成分的强度与离散程度。注意峰位、均值位置与两侧尾部形态，以及低相关端的小凸起形状。

[![原论文 Figure 2：The PCC distribution between speech features of melfrequency bands and envelope.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-2.png)

*论文图 2：语音包络与各梅尔频带间皮尔逊相关的频数分布与均值（原论文 Figure 2）。*

图中显示横轴从 0.0 延伸到 0.8，纵轴频数最高超过 3,000。分布主体集中在 0.2 到 0.5 之间，峰值紧邻红色虚线，均值标注为 0.3285，正文概括为 0.33。左侧 0.0 附近存在高度约数百的小凸起，右侧 0.6 到 0.78 区间稀疏但未断裂。这表明包络与梅尔频带存在一致正相关，适合做初始特征空间，但相关强度中等，预训练只能提供时间骨架，无法替代频谱细节学习。

优化配置为 Adam 加 StepLR，每 50 轮衰减 0.9，共训练 1,000 轮。数据划分为 80% 训练、10% 验证与 10% 测试。训练随机裁剪 5 秒片段以稳定梯度，推理用无重叠切分拼接。原文未明确冻结与更新边界，未说明预训练后哪些模块固定、微调时学习率是否区分，也未披露批大小与学习率初值，因此无法复现完整的梯度流与收敛曲线。

### 梅尔频谱主结果如何在低绝对值下形成相对优势

评测使用 ICASSP 2024 听觉脑电挑战赛数据集 SparrKULee，包含 85 位听力正常荷兰语被试收听连续弗拉芒语叙事的脑电。脑电经多通道维纳滤波去伪影、平均重参考并下采样到 64 Hz，音频经伽马通包络与梅尔频谱提取再经多相重采样与神经数据同步。划分 80% 训练、10% 验证与 10% 测试。主指标为皮尔逊相关系数，数值越高越好。对比覆盖包络解码与梅尔重建两类方法，包含 VLAAI、HappyQuokka、ConvConcatNet 及其集成版、DMF2Mel 与 SSM2Mel。

下表汇总各模型在梅尔频谱恢复上的皮尔逊相关系数与原文报告的相对提升，可对照最强方法的差距与集成策略的效果。注意绝对值均低于 0.1，相对百分比基于 VLAAI 计算，集成版含义需结合正文理解，避免将相对增幅误读为绝对可懂度。

| Model | PCC(↑) | Improvement |
| --- | --- | --- |
| VLAAI | 0.050 | – |
| HappyQuokka | 0.052 | 4.0% |
| ConvConcatNet | 0.058 | 16.0% |
| ConvConcatNet ensembled | 0.063 | 26.0% |
| DMF2Mel | 0.063 | 26.0% |
| SSM2Mel | 0.069 | 38.0% |
| HFFN-ID (ours) | 0.072 | 44.0% |

在所展示的精简表内，HFFN-ID 以 0.072 位列皮尔逊相关系数最高，次高为 SSM2Mel 的 0.069，最低为 VLAAI 的 0.050。原文报告相对 VLAAI 提升 44.0%，相对中间模型的提升介于 4.0% 到 38.0% 之间。ConvConcatNet 集成版与 DMF2Mel 同为 0.063，表明集成与多尺度融合在该口径下效果接近。需强调绝对相关仍低，0.07 量级距离可懂语音重建甚远，相对百分比放大了小基数上的差异。

效率方面，正文报告 HFFN-ID 参数量 4.22M，对比 SSM2Mel 的 6.88M 减少 38.7%。运行时间从 44,149.62 秒降至 17,390.66 秒，约 2.5 倍加速。结构相似性与梅尔倒谱失真也有微弱优势，分别为 0.8258 对比 0.8256 与 15.3845 对比 15.3948，但差距在小数点后第三位，实际听感增益未经人工听测验证。缺失方差、置信区间与统计检验细节，尚不能断言每次运行必复现相同排序。

### 稳定性分布与组件消融能否支撑鲁棒性判断

#### 跨轮次稳定性

除均值外，原文以箱线与小提琴图追踪 1,000 个测试轮次上的皮尔逊相关、梅尔倒谱失真与结构相似分布。左列为箱线，右列为小提琴，横轴均为 SSM2Mel 与本模型两组，纵轴分别为各指标量纲，上方标有显著性星号，可据此判断中位、箱体宽度与离群尾部形态。

[![原论文 Figure 3：Box plot of mel-spectrogram test results (left) and distribution comparison of the metrics (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-3.png)

*论文图 3：梅尔重建在相关、失真与结构相似上的箱线与小提琴分布对比（原论文 Figure 3）。*

图中显示上排皮尔逊相关中，本模型箱体窄而位置高，中位约 0.072，离群点极少。SSM2Mel 箱体宽且向下延伸，出现低至 0.036 附近的离群点，小提琴呈宽胖粉色分布，本模型则为窄高蓝色。中排失真与下排结构相似的均值差距极小，箱体几乎重合为细线，但小提琴仍标出显著差异。这说明优势主要在相关性与稳定性，失真与结构相似的实用差距有限，且显著性未交代检验方法与校正细节。

#### 组件消融归因

为定位贡献来源，消融在预训练阶段移除单个组件再微调以隔离影响，指标为梅尔频谱皮尔逊相关系数。下表列出移除双阶段调制、分层融合与预训练 3 组对照与完整模型的得分及原文报告的下降幅度，可据此判断哪部分缺失损失最大与是否存在协同效应。

| Model | PCC(↑) | Improvement |
| --- | --- | --- |
| w/o BiPSM | 0.0669 | -7.5% |
| w/o CHF | 0.0664 | -8.2% |
| w/o Pretrain | 0.0668 | -7.6% |
| HFFN-ID(ours) | 0.0723 | – |

在所展示的消融精简表内，完整模型以 0.0723 位列最高。移除分层融合后降至 0.0664，原文报告下降 8.2%，为 3 组中最大。移除预训练降至 0.0668，下降 7.6%。移除双阶段调制降至 0.0669，下降 7.5%。三者缺一均明显回落，表明缺一不可且需协同。但原文未做两两组合移除与多次随机种子方差，也未报告置信区间，尚不能量化交互效应与显著性水平。

### 包络泛化与样本级对比如何揭示任务差异

#### 包络任务泛化

为检验框架是否只拟合梅尔频谱，原文补充了语音包络恢复任务，指标仍为皮尔逊相关系数，数值越高越好。下表列出各模型在包络上的得分与相对提升，其中 ConvConcatNet 缺席该任务，HFFN-ID 区分了无预训练与完整版本，可观察预训练带来的增量大小。

| Model | PCC(↑) | Improvement |
| --- | --- | --- |
| VLAAI | 0.161 | – |
| HappyQuokka | 0.185 | 14.9% |
| DMF2Mel | 0.204 | 26.7% |
| SSM2Mel | 0.208 | 29.2% |
| HFFN-ID(ours) w/o Pretrain | 0.209 | 29.8% |
| HFFN-ID(ours) | 0.211 | 31.1% |

在所展示的包络精简表内，HFFN-ID 以 0.211 位列最高，无预训练版本以 0.209 次之，均高于 SSM2Mel 的 0.208。VLAAI 仅 0.161 位列最低，HappyQuokka 与 DMF2Mel 居中。原文报告相对 VLAAI 提升 31.1% 与 29.8%，但包络绝对值本就远高于梅尔的 0.07 量级，两任务难度不同不可直接对比得分高低。包络增量仅 0.002，预训练在该任务上的增益有限，且缺失听测与方差信息。

#### 样本级离散

均值可能掩盖样本间差异，原文随机抽取 100 个测试样本对比均方误差与结构相似的分布与散点。上排为直方，蓝色为 SSM2Mel，红色为 HFFN-ID，下排为散点，横轴为基线方法得分，纵轴为本模型得分，红色虚线为对角线，可据此判断优势是否逐样本成立。

[![原论文 Figure 4：Sample-wise comparison between SSM2Mel (blue) and HFFN-ID (red) in mel-spectrogram reconstruction…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afca3a09ce59/figure-4.png)

*论文图 4：100 个随机样本上误差与结构相似的直方与散点对比（原论文 Figure 4）。*

图中显示左上均方误差直方高度重叠，蓝色尾部延伸到 0.030 到 0.034，红色集中在 0.006 到 0.016 且峰约 0.010。右上结构相似直方均集中在 0.80 到 0.92，红色在 0.86 与 0.90 附近出现高柱。左下散点多数位于对角线有利侧，但左上存在本模型误差更高的例外点。右下散点紧贴对角线，多数略偏上。这支持多数样本更优，但绝非每样本全胜，离群样本仍需个案分析。

### 低相关、被试依赖与未验证的部署条件意味着什么

首要边界是绝对性能仍然极低。梅尔频谱皮尔逊相关 0.0723 虽相对提升显著，但线性相关接近零，距离可懂语音尚远。梅尔倒谱失真与结构相似的改进仅在小数点后第三位，听感层面未经平均意见分或对比平均意见分等人工听测验证，也未报告神经代理指标，无法推断可懂度与自然度。包络任务得分高一个量级，但任务更易，不代表梅尔细节已解决。

其次是对已知被试标识的依赖。调制需要输入被试编号，对未见被试的泛化能力原文未评估，留一被试或跨数据集测试缺席。推理虽为分段前向拼接，但未披露因果性、前瞻延迟、实时率与显存占用，5 秒无重叠切分在流式场景会引入等待与边界不连续，尚不能直接用于实时脑机接口。训练在单张 16 GB 显存 GPU 上完成 1,000 轮，但未披露批大小、学习率初值与微调策略，复现收敛曲线存在缺口。

复现层面，原文未披露代码、权重、数据下载与演示页的公开链接，未能确认可直接运行的系统。需区分三件事，数据集引用不等于本工作系统可直接运行，权重是否提供下载未知，代码是否开源未知。建议后续工作先复现 SSM2Mel 方法对齐数据划分与 64 Hz 同步，再逐步加入双阶段调制与门控融合。若目标是离线分析，可优先借用包络预训练稳定训练。若目标是实时助听，则需先补足流式因果改造与延迟测量，再谈精度收益。

从结果看，HFFN-ID 的价值在于证明显式被试条件与动态分层检索比静态拼接更有效，且以更少参数实现更快训练。但结论成立的前提是已知被试集合、离线分段评测与皮尔逊相关口径，代价是绝对重建质量仍低且依赖标识输入。研究生复述时应抓住两条主线，被试差异用仿射校准，分层鸿沟用注意力加门控弥合，再以效率数据说明轻量设计并非以精度换速度，而是同步改善。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：脑电与听觉特征均同步到 64 Hz，训练随机裁剪 5 秒片段，推理切分为无重叠 5 秒片段拼接，原文未披露原始音频采样率、梅尔频带数、帧长与步长、实时率与前瞻延迟
- **训练与评测数据**：SparrKULee 数据集，85 位听力正常荷兰语被试收听连续弗拉芒语叙事，脑电经多通道维纳滤波、平均重参考并下采样到 64 Hz，音频经伽马通包络与梅尔频谱提取再多相重采样同步，划分 80% 训练、10% 验证与 10% 测试
- **算力与训练耗时**：Intel Core i9-13900KF CPU 与 NVIDIA GeForce RTX 4080 GPU 单卡 16 GB 显存，训练 1,000 轮，推理为分段前向拼接，原文未披露多卡配置与总耗时之外的显存占用
- **核心超参数与配置**：Adam 优化器加 StepLR 调度每 50 轮衰减 0.9，损失为负皮尔逊相关加平均绝对误差加权，平衡系数未披露，批大小、学习率初值、隐藏维度与层数未披露
- **推理速度与部署开销**：参数量 4.22M 对比 6.88M 减少 38.7%，运行时间从 44,149.62 秒降至 17,390.66 秒约 2.5 倍加速，原文未披露实时率、延迟与吞吐
- **开源产物与协议状态**：原文未披露代码、权重、数据下载与演示页的公开链接，未能确认可直接运行的系统
- **附录与补充材料要点**：原文未披露附录证明与补充消融细节，正文已含包络相关分布与稳定性小提琴图，未报告失效案例的听感分析与许可限制

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 6.3/10 | 技术严谨 6.7/10 | 实验充分 6.0/10 | 清晰度 7.1/10 | 影响力 5.4/10 | 开源 0.0/10 | 可复现 5.1/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0402`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/402) · [官方 PDF](https://ijcai.org/proceedings/2026/0402.pdf)
- DOI：`10.24963/ijcai.2026/402`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在多基线对比中PCC达0.0723超越最强基线0.0692，且三项消融缺一即退化7.5%以上显示协同效应。

- 核心优势：在提升重建指标的同时参数从6.88M降至4.22M且运行时间约2.5倍加速，效率收益可核对。

- 主要短板：仅单一荷兰语叙事验证且未说明划分是否受试者不相交，绝对PCC仅0.0723且无显著性检验与人工MOS支撑高保真主张。

- 主要短板：平衡系数学习率批量等复现要素缺失，且离线5秒拼接不等同实时因果部署，部署约束与失效条件未量化。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
