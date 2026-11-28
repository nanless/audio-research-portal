---
title: "Efficient Text-to-Audio Generation via Pruning"
date: 2026-11-27
draft: false
description: "针对 AudioLDM 去噪主干重复调用导致部署开销过大的问题，本文用无数据 l1 滤波器剪枝聚焦深块并做轻量微调，在 AudioCaps 上以 (1, 2, 1, 1) 配置减少约 83% 参数与约 39% MACs 并将 FAD 从 3.95 降到 1.57 ，代价是仅剪枝会重创安全关键与机械类语义且恢复依赖 1,000,000 步微调与特定评测条件。"
tags: ["扩散模型", "模型剪枝", "文本到音频生成"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "无数据剪枝如何压缩文本生成音频的扩散主干"
paper_digest_original_title: "Efficient Text-to-Audio Generation via Pruning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-28"
paper_digest_workbench_source_sha256: "52e3fa3a77386767e322fbb49e6fe46ad45414b14f750e2b1b0dabfa3c743bff"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Singh_28.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "文本到音频生成"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 AudioLDM 去噪主干重复调用导致部署开销过大的问题，本文用无数据 l1 滤波器剪枝聚焦深块并做轻量微调，在 AudioCaps 上以 (1, 2, 1, 1) 配置减少约 83% 参数与约 39% MACs 并将 FAD 从 3.95 降到 1.57 ，代价是仅剪枝会重创安全关键与机械类语义且恢复依赖 1,000,000 步微调与特定评测条件。"
paper_digest_reader_sections: [{"heading":"文本生成音频为何被去噪主干的高开销卡住","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"AudioLDM 如何把文字嵌入变成可听波形","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"深块冗余摸底与无数据剪枝重组流程","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"六档剪枝配置的质量代价与微调恢复幅度","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"哪些声音家族最怕剪枝而微调能捡回多少","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"压缩红利成立的前提、未验证条件与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["King’s College London (KCL)"],"name":"Arshdeep Singh"},{"affiliations":["University of Surrey, UK"],"name":"Yi Yuan"},{"affiliations":["King’s College London (KCL)"],"name":"Yun Chen"},{"affiliations":["University of Surrey, UK"],"name":"Wenwu Wang"},{"affiliations":["King’s College London (KCL)"],"name":"Mark D. Plumbley"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"57dbaf5a29a048ac2bc901aa33a1e2e1f030fe73ba4db15d2676890e4dd22940","url":"/audio-research-portal/client/papers/2026-11-27/conference-efb86c1e52c65367829b774a/citation.bib"},"citation.json":{"sha256":"c68ce0a7ce09719e7e76527717126d464768a606216eb2e5b69dfe3edbaf4586","url":"/audio-research-portal/client/papers/2026-11-27/conference-efb86c1e52c65367829b774a/citation.json"},"citation.ris":{"sha256":"1b7b926b8f6c21f0636fc62a6bae705dbcf12755abca6fb4c424ce1b74a6a61d","url":"/audio-research-portal/client/papers/2026-11-27/conference-efb86c1e52c65367829b774a/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0333d0961c2736f58de6bf8898f79b24d45d2017d48800f2215ec557b1858f7c","url":"/audio-research-portal/client/papers/2026-11-27/conference-efb86c1e52c65367829b774a/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-28"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Singh_28.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e50da45baa972b24da7fe719136a8fe1f2ad642e665938772f7f7c6b495838c7"
paper_digest_api_reader_plan_sha256: "f5c755c80b104b6527248712540697187f07198165f8abe90c9df86ccd5f318f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9657798a5ffeca521ea2c0ddc088da954605be35f7b412560ed3a2dfb76f653d"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a6ea680191851e7bc7ebea332b77467fd633df9e648c09a5079e02ff6d8ce745"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2aae04f478591a7244172791abebe2c659ff3669c40f66c5c17a51abb9273cfe"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "dd7b137fd8989b55ce418b655da8094987944097fb402f09996ea8d638f04018"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"task","id":"task.text-to-audio","label":"文本到音频生成"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 无数据剪枝如何压缩文本生成音频的扩散主干

> 英文题目：*Efficient Text-to-Audio Generation via Pruning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-28`
> Track：P1-10




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Singh_28.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [文本到音频生成](/audio-research-portal/papers/?concept=task.text-to-audio)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [模型剪枝](/audio-research-portal/papers/?concept=method.pruning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 5.9/10 | 清晰度 7.1/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Arshdeep Singh：King’s College London (KCL)
- Yi Yuan：University of Surrey, UK
- Yun Chen：King’s College London (KCL)
- Wenwu Wang：University of Surrey, UK
- Mark D. Plumbley：King’s College London (KCL)

## 📌 核心摘要

**问题与瓶颈：** 文本到音频（text-to-audio, TTA）生成任务以自然语言描述为输入，以可听波形为输出，要求输出在语义上与描述一致。以 AudioLDM 为代表的潜在扩散模型（latent diffusion model, LDM）通过多步迭代去噪将噪声转化为结构化声信号，感知质量与语义一致性较好。瓶颈在于去噪骨干网络 U-Net 参数规模大且在每次采样中被反复调用，能量与显存开销随采样步数增长，而增加步数通常提升质量，由此形成质量与效率的直接矛盾。现有加速多集中于潜在空间建模、快速采样求解器与知识蒸馏，较少直接削减扩散模型本体的参数与乘加操作（multiply-accumulate operations, MACs）。

**核心思路与方法架构：** 与最接近的未剪枝 AudioLDM-M-Full 基线相比，本文的增量是保留变分自编码器（variational autoencoder, VAE）、对比语言音频预训练（contrastive language-audio pretraining, CLAP）编码器与高保真生成对抗网络声码器（HiFi-GAN vocoder）不变，仅对 U-Net 深层卷积滤波器做基于 l1 范数的被动式剪枝并做轻量微调。沿单条样本看，公园中犬吠描述经 CLAP 编码器得到文本嵌入 Ey，梅尔频谱经 VAE 编码器压缩为紧凑隐表示 z0，LDM 在隐空间学习条件分布 q(z0|Ey)，推理时从噪声出发经 200 步去噪得到隐表示，再经 VAE 解码器与声码器合成为 10 秒音频。U-Net 含 4 个编码器块、1 个中间块与 4 个解码器块，基线基础通道数为 192 且通道缩放参数为（1, 2, 3, 5），共 416M 参数与 102.94G 计算量，块级分析显示深层 b3 与 b4 集中了多数参数，因而剪枝限定于这两块的卷积层，按每层滤波器 l1 范数排序并移除较小者。微调时仅更新 U-Net 参数而冻结 VAE 与 CLAP，以恢复剪枝造成的表示能力损失。

**关键实验与核心代价：** 在 AudioCaps 测试集与 200 步推理设置下，未剪枝基线取得弗雷歇音频距离（Frechet Audio Distance, FAD, 越低越好 ↓）3.95 与库尔贝克莱布勒散度（Kullback-Leibler divergence, KL, 越低越好 ↓）2.16，而通道配置为（1, 2, 3, 1）的剪枝模型经微调后取得 FAD 1.57 与 KL 1.678，均低于基线对应数值，同时参数减少约 65% 且 MACs 减少约 18%。更小配置（1, 2, 1, 1）经微调后同样取得 FAD 1.57 与 KL 1.778，仍低于基线，对应参数减少 83% 且 MACs 减少 39%，实时率（real-time factor, RTF, 越低越好 ↓）从 2.14 降至 1.86，检查点存储从 4.6 GB 降至 3.2 GB。主导收益来自微调，剪枝后未微调时 FAD 与 KL 均退化且压缩越大退化越大，微调约 0.2M 步内即恢复至基线水平，但客观指标为 FAD 与 KL 及预训练音频神经网络（pretrained audio neural networks, PANNs）召回代理，未设人工主观听测。代价是剪枝显著损伤枪声与警笛等安全关键声音的捕获，虽经微调大多恢复但仍存在残余丢失。

**适用边界与深读导览：** 结论成立前提是 AudioCaps 描述与 10 秒音频生成、固定 200 步采样与 NVIDIA GeForce RTX 3090 测速环境，论文未说明测速卡数，未覆盖长音频、流式低时延部署、多语言描述与跨扩散骨干的泛化。安全关键与机械声音的敏感性提示在警报与工业场景部署前需做事件级召回核查，论文附带的音频演示页可对照试听剪枝前后差异。欲深究块级资源权衡可查方法概述和架构中的通道缩放分析，欲核对压缩与语义恢复的完整数字可查实验结果中的效率表与事件族表。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Arshdeep-Singh-Boparai/PruningAudioLDM.git> → <https://github.com/Arshdeep-Singh-Boparai/PruningAudioLDM> — 暂时无法访问（HTTP 504）

- 论文所列链接：<https://arshdeep-singh-boparai.github.io/EfficientAudioLDM/> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音频为何被去噪主干的高开销卡住

文本生成音频任务要求模型把一句自然语言描述变成波形，例如公园里的犬吠或带雨声的钢琴，生成结果需要在语义上与文字一致。基于扩散的 AudioLDM 在感知质量与语义一致性上表现较好，但每次生成都要把去噪网络重复调用很多次，原文评测使用 200 步采样，能耗与步数成正比，步数越多细化越充分，质量与效率之间存在明显权衡。

已有加速思路多从信号与采样层面入手，例如在隐空间建模以避开直接处理原始波形的高开销，使用常微分或随机微分求解器减少迭代步数，用蒸馏让学生模型逼近教师轨迹，用低秩适配（LoRA）只更新少量参数。滤波器剪枝还可分为主动与被动两类，前者借助训练数据与特征图按熵、秩或能量估计重要性，开销较大，后者仅依据滤波器权重按一阶范数或相似度判断冗余，无需外部数据。然而这些方法没有直接压缩扩散模型本身，去噪主干仍有数亿参数与很高的乘加运算（MACs）负担，显存占用大且每次采样都要重复计算，部署时依然资源消耗严重。

#### 隐空间链路中各模块分工

AudioLDM 的生成链路分为四部分，对比语言音频预训练编码器负责把文字与音频映射到同一表示空间，分别得到文字嵌入 \(E_y\) 与音频嵌入 \(E_x\) ，变分自编码器把梅尔频谱压缩为紧凑隐表示 \(z_0\) ，隐扩散模型在隐空间学习以文字嵌入为条件的分布 \(q(z_0|E_y)\) 。推理时生成的隐表示再经解码器与 HiFi-GAN 声码器还原为波形。隐空间建模避开了对原始波形逐点运算的高开销，但去噪主干仍需在每次迭代中完整运行，因此压缩主干本身成为关键。

去噪主干采用 U-Net 结构，包含 4 个编码块、一个中间块与 4 个解码块，基础通道数为 192 ，编码块通道为各系数与基数之积，解码块通道与编码块对称反转，中间块通道为基数的 5 倍，原始配置为（1，2，3，5），对应 416M 参数与 102.94G 乘加运算量。逐块放缩分析显示深块集中了多数参数，把第四块系数从 5 降到 1 可减少约 65% 参数，第三块系数从 3 降到 1 也能明显降低参数与运算量，而浅块改动收益较小，因此剪枝聚焦于第三与第四深块的卷积层。

#### 深块冗余与无数据剪枝动机

视觉扩散模型的剪枝经验难以直接照搬，例如潜在扩散剪枝器等方法依赖数据集计算重要性，需要生成数千张图像计算弗雷歇初始距离，单次评估就超过 1 小时，构建查找表甚至消耗 126 GPU 小时。更麻烦的是剪枝后模型容易对校准集的提示过拟合，换一批文本就可能失效，因此需要多样化数据与多次评估来保稳健性，整体流程笨重且资源密集。

本文把无数据滤波器剪枝用于 AudioLDM 的 U-Net 去噪主干，目标是只看模型参数估计重要性，不依赖任何外部数据集，从而省去重要性估计的数据开销。每层按一阶范数降序排列，范数小者激活弱、表征贡献小，优先移除，剪后把剪枝 U-Net 放回原始链路并微调恢复损失，微调时仅更新 U-Net 参数，变分自编码器与对比语言音频预训练编码器保持冻结，沿用原始训练配置。输入是文本描述，输出是 10 秒音频波形，研究同时追踪客观质量与语义捕获率，尤其关注枪声、警笛与爆炸等安全关键声音在压缩后是否丢失，为后续高效设计提供依据。

### AudioLDM 如何把文字嵌入变成可听波形

AudioLDM 把文本到音频的生成放在隐空间完成，核心部件包括 CLAP 、变分自编码器、隐扩散模型与 HiFi-GAN 声码器。CLAP 把文本 y 与音频 x 映射到共享表征，得到文本嵌入 \(E_y\) 与音频嵌入 \(E_x\) 。变分自编码器把梅尔频谱压缩为紧凑隐表示 \(z_0\) ，隐扩散模型学习条件分布 \(q(z_0|E_y)\) ，采样得到的隐表示再经解码器与声码器还原为波形。

为了看清训练与采样两条路径如何分工，请沿下图箭头阅读，重点区分蓝色虚线与绿色实线的起点、汇合点以及嵌入符号的走向。

[![原论文 Figure 1：An overview of the AudioLDM pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-1.png)

*论文图 1：AudioLDM 训练与采样流程示意，蓝色虚线为训练，绿色实线为采样，文字与音频经 CLAP 汇入隐扩散模型（原论文 Figure 1）。*

上图顶部黄色块为梅尔频谱与 VAE 编码器，中部橙色为 CLAP ，红色为 LDM ，右侧白色小方块为 \(z_0\) ，底部黄色为 VAE 解码器与声码器。蓝色虚线表示训练，音频 x 同时走向梅尔频谱与 CLAP ，得到 \(E_x\) 与 \(z_0\) 后送入 LDM ，噪声 \(z_N \sim N(0,I)\) 也从顶部注入。绿色实线表示采样，文本 y 经 CLAP 得到 \(E_y\) 后驱动 LDM 生成 \(z_0\) ，再经解码与声码得到 \(\hat{x}\) ，两条路径在 LDM 处汇合又分开。

去噪主干采用 U-Net 结构，含 4 个编码器块、 1 个中间块与 4 个解码器块，基础通道数为 192 ，编码器通道为 \([b_1c_u, b_2c_u, b_3c_u, b_4c_u]\) ，解码器为其镜像，中间块为 \(5c_u\) 。基线配置为 (1, 2, 3, 5) ，对应 416M 参数与 102.94G MACs ，每次生成需重复调用 200 步，因此主干的每一点压缩都会被步数放大，理解深块冗余是后续剪枝的前提。

### 深块冗余摸底与无数据剪枝重组流程

与最近的视觉剪枝路线相比，本文的增量在于只动 U-Net 深层卷积，过滤器重要性完全来自权重本身，不看任何特征图与训练数据。每个卷积滤波器 \(F\) 用 l1 范数 \(\|F\|_1\) 度量，即全部系数绝对值之和，按层内从大到小排序后去掉范数最小的一批。直觉是小范数滤波器产生的激活较弱，对表征贡献小，去掉后影响有限，剪枝后用微调补回损失，整体结构保持编码器解码器对称。原文未披露采样率、帧长与隐变量维度，因此只能追踪模块级流向而非具体张量形状。

#### 深块参数与计算量分布

下表把其余块固定在 (1, 2, 3, 5) 与 192 通道基数，只单独缩放一个块，观察参数量与 MACs 的变化，下表数值均为原文报告的实测配置。

| Scaled Block | Value | Params (M) | MACs (G) |
| --- | --- | --- | --- |
| b4 | 1 | 145 | 83.79 |
|  | 2 | 182 | 86.40 |
|  | 4 | 317 | 95.98 |
|  | 5 | 416 | 102.94 |
| b3 | 1 | 331 | 80.97 |
|  | 2 | 365 | 89.63 |
|  | 3 | 416 | 102.94 |
| b2 | 1 | 385 | 71.50 |
|  | 2 | 416 | 102.94 |

表中可见深块主导了模型体积，将 \(b_4\) 从 5 降到 1 时参数从 416M 降到 145M ，约减少 65% ，MACs 从 102.94G 降到 83.79G 。将 \(b_3\) 从 3 降到 1 时参数从 416M 降到 331M ，MACs 从 102.94G 降到 80.97G 。相比之下 \(b_2\) 从 2 降到 1 只减少约 30M 参数，因此剪枝集中在 \(b_3\) 与 \(b_4\) 的卷积层最有潜力，原文据此选择 \(b_3\) 取 1 或 2 与 \(b_4\) 取 1 、 2 或 4 的组合。

#### 剪枝重组与微调闭环

为了理解剪枝后的小模型如何拼回完整系统，请顺下图方框与箭头阅读，重点看清替换步骤与微调步骤的先后顺序与虚实线含义。

[![原论文 Figure 2：An overall framework to obtain efficient AudioLDM.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-2.png)

*论文图 2：剪枝重组流程示意，原始去噪主干经滤波器剪枝、替换回系统并微调得到高效模型（原论文 Figure 2）。*

上图左侧粉色为原始 U-Net 与未剪枝 AudioLDM ，黄色为滤波器剪枝，浅绿为剪枝后 U-Net ，其通道记为 (1, 2, \(b_3\), \(b_4\)) 。虚线表示把剪枝后 U-Net 替换回未剪枝系统得到剪枝版 AudioLDM ，再经米色微调块得到深绿色的高效 AudioLDM 。该路径表明除 U-Net 外的 VAE 与 CLAP 在微调时保持冻结，只有 U-Net 参数被更新，推理时仍走文本经 CLAP 到 LDM 再到解码与声码的完整流程。

### 六档剪枝配置的质量代价与微调恢复幅度

评测使用 AudioCaps 数据集，含约 49,000 个音频文本对用于训练与 964 个对用于测试，并提供事件级标注。未剪枝基线为 AudioLDM-M-Full ，在 AudioSet 、 AudioCaps 、 FreeSound 与 BBC 音效库的 3,100,000 个 10 秒样本上训练 1,500,000 步，再在 AudioCaps 上微调 250,000 步。剪枝模型在 AudioCaps 训练集上微调 1,000,000 步，仅更新 U-Net ， VAE 与 CLAP 保持冻结，生成时均用 200 步，在 NVIDIA GeForce RTX 3090 上测得 10 秒音频的 RTF ，指标为 FAD 与 KL ，越低越好，全程无人工听测。

#### 剪枝与微调的差值走向

下图横轴为从未剪枝到最小配置的六档参数量与 MACs ，纵轴为相对基线的差值，正值代表优于基线，请先辨清绿色与蓝色、实线与虚线各代表的含义。

[![原论文 Figure 3：Absolute change in FAD and KL of pruned models relative to the unpruned baseline model after…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-3.png)

*论文图 3：六档剪枝配置相对基线的 FAD 与 KL 差值，正值代表优于基线，实线为剪枝加微调（原论文 Figure 3）。*

上图左纵轴为 \(\Delta\) FAD ，右纵轴为 \(\Delta\) KL ，横轴标注 (416M, 103G) 未剪枝到 (70.49M, 63G) 的 (1, 2, 1, 1) 。绿色圆点虚线为仅剪枝的 FAD 差值，在小模型端跌到约负 17 ，蓝色方块虚线为仅剪枝的 KL 差值，跌幅约负 2 。绿色三角与蓝色菱形实线为剪枝加微调，均回到零线附近偏正，说明仅剪枝严重退化且越小越差，微调把两项指标拉回基线甚至略优，虚实线的分叉就是微调的恢复幅度。

#### 主结果数值与横向位置

未剪枝基线在评测集上 FAD 为 3.95 ，KL 为 2.16 。配置 (1, 2, 3, 1) 剪枝加微调后 FAD 为 1.57 ，KL 为 1.678 ，参数减少约 65% ，MACs 减少约 18% 。配置 (1, 2, 1, 1) 剪枝加微调后 FAD 为 1.57 ，KL 为 1.778 ，参数减少约 83% ，MACs 减少约 39% 。未剪枝 RTF 为 2.14 ，上述两档分别为 1.88 与 1.86 ，检查点从 4.6 GB 降到 3.5 GB 与 3.2 GB ，微调约 200,000 步即恢复基线水平。

与 DiffSound 、 AudioGen 、 AudioLDM-S-Full 、 AudioLDM-L-Full 与 AudioLDM2-Full-Large 相比，剪枝系列在 70M 至 320M 参数区间取得有竞争力的 FAD 与 KL ，但图中更大规模的 AudioLDM-L-Full 与 AudioLDM2-Full-Large 在 KL 纵轴上位置更低，因此最优只在中小参数区间成立。原文只对比参数量，因其余模型的 MACs 未公开。评价缺人工听测与方差区间，结论仅在 AudioCaps 客观指标与 200 步采样前提下成立。

### 哪些声音家族最怕剪枝而微调能捡回多少

语义分析选用表现较好的 (1, 2, 3, 1) 配置，用预训练音频网络 PANNs 预测生成音频的事件，若真值标签出现在前 10 预测中算捕获成功，召回率为全部片段交集大小之和除以真值大小之和，记 \(N\) 为片段数，\(G_i\) 为真值集合，\(P_i\) 为预测集合。标签按本体归为安全关键、机械、环境、动物、语音与人类、车辆与其他 7 个家族，例如警笛、枪声、爆炸、钻机与缝纫机分属前两组。

下图对比未剪枝、仅剪枝与剪枝加微调 3 组柱子在 7 个家族上的捕获率，请先看顶部图例颜色与横轴家族排序，再比较同组内三根柱子的高低。

[![原论文 Figure 6：Capture rate across different sound event families generated using unpruned, pruned and pruned…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/6e1e7227bb5b/figure-6.png)

*论文图 6：七个声音家族在未剪枝、仅剪枝与剪枝加微调下的语义捕获率对比（原论文 Figure 6）。*

上图纵轴为捕获率，范围 0 至 100% ，横轴为 7 个家族，蓝色斜线为未剪枝基线，橙色斜线为仅剪枝，绿色交叉为剪枝加微调。全部家族剪枝后都下降，其中语音与人类最稳，从约 73% 微降到约 69% ，车辆从约 56% 降到约 46% 。安全关键从约 56% 跌到约 18% ，机械从约 28% 跌到约 19% ，环境从约 44% 跌到约 25% ，动物从约 62% 跌到约 39% 。微调后多数反超基线，例如机械约 69% 、环境约 68% 、车辆约 66% 、其他从约 27% 升到约 42% ，绿色柱的回升高度就是可恢复的语义损失。

原文完整 Table 3（本精简表未列出）按家族统计相对基线的丢失与恢复，安全关键基线 34 个，丢失 73.5% ，恢复 76.0% ，枪声 8 个丢失 7 个恢复，警笛 7 个丢失 5 个恢复。机械基线 24 个，丢失 75.0% ，恢复 83.3% ，钻机与缝纫机丢失大半后基本恢复。语音与人类基线 358 个，丢失仅 13.1% ，车辆基线 310 个，丢失 28.4% ，其他基线 500 个，丢失 37.0% ，喷雾与滴答各丢失 8 个中的 7 个与 5 个。频发类也会丢失，输入为 Men speak with gunshots and booms 时仅剪枝只留人声，微调后才补回爆裂声。

### 压缩红利成立的前提、未验证条件与复现核对

上述红利只在特定假设下成立，剪枝仅针对深层 \(b_3\) 与 \(b_4\) 卷积块，重要性只按一阶范数逐层排序并去除取值较小者，未对比熵、秩、能量或相似度等主动准则。评测固定 200 步采样与 AudioCaps 分布，未验证少步数、长文本或跨数据集泛化。指标只有弗雷歇音频距离 (FAD) 与库尔贝克散度 (KL)，数值越低表示生成分布越接近真实，且无人工听测与方差和置信区间，平均数改善不能等同于每条样本都变好。与外部模型比较时仅对比参数量，因其乘加运算量未公开，微调后未剪枝模型性能相近但参数与微调开销仍更高，比较口径需注意。

#### 评测条件与部署代价边界

部署代价同样有边界，实时系数 (RTF) 以生成耗时与音频时长之比衡量，在单块 NVIDIA GeForce RTX 3090 上以 200 步生成 10 秒音频测得，未剪枝模型为 2.14，(1, 2, 1, 1) 剪枝模型为 1.86，(1, 2, 3, 1) 剪枝模型为 1.88，降幅约 10%。参数减少 83% 与乘加运算量减少 39% 只换来有限加速，检查点仍需 3.2 GB 与 3.5 GB，相对原始 4.6 GB 虽有下降，但访存与调度开销仍占大头，移动端表现与显存峰值原文亦未给出，选型时不能把参数降幅直接等同于时延降幅。

微调开销不可忽略，剪枝后模型在 AudioCaps 训练集约 49,000 个音频文本对上微调 1M 步，仅更新去噪主干 U-Net 参数而冻结变分自编码器 (VAE) 与对比语言音频预训练 (CLAP) 编码器，并在 964 个测试对上评估，微调配置除数据集外与训练一致。分工上 CLAP 提供文本语义条件，VAE 负责频谱与潜变量压缩重建，U-Net 负责潜空间逐步去噪，冻结前两者可保留语义对齐与重建能力。曲线显示约 0.2M 步可恢复到未剪枝水平，但安全关键声音的充分恢复依赖完整微调，并非剪完即用，省略微调会留下显著语义缺口，少步采样表现原文也未验证。

#### 复现要素与选型建议

复现需要区分三件事，论文给出的代码地址本次未能确认可达，演示页为论文提及的第三方链接，本次同样未能确认可达，来源未确认不视为技术缺陷。权重是否提供下载与系统能否直接运行在原文中未明确，附录也未提供额外证明与许可说明。复现时应核对 192 通道基数、(1, 2, 3, 5) 原始配置、冻结设置、训练测试划分与 200 步设置，否则难以对齐报告数值，跨环境比较还需固定采样步数与硬件条件。

工程选型上，若能承担微调且看重体积，可选 (1, 2, 1, 1) 追求最大压缩，若要兼顾弗雷歇音频距离 (FAD) 与散度，可选 (1, 2, 3, 1) 取得更均衡的位置，两者在微调后弗雷歇音频距离均为 1.57，散度分别为 1.778 与 1.678，均优于未剪枝模型的 3.95 与 2.16。若应用涉及警报、枪声与爆炸等安全关键声音，不可只看平均指标，须按家族做召回抽检并对照试听现象与未剪枝差异。原文展望用低秩适配 (LoRA) 降低微调开销与探索单步生成，但均未验证，选型时应视为未实现路径而非现成收益。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：生成目标为 10 秒音频，采样率、梅尔频谱维度、帧长步长与隐变量形状原文未披露，推理统一用 200 步采样，在单块 NVIDIA GeForce RTX 3090 上测 10 秒生成的 RTF ，未披露流式分块、前瞻延迟与显存峰值
- **训练与评测数据**：评测与微调使用 AudioCaps ，约 49,000 个音频文本对用于训练， 964 个对用于测试，基线 AudioLDM-M-Full 先在 AudioSet 、 AudioCaps 、 FreeSound 与 BBC 音效库的 3,100,000 个 10 秒样本上训练 1,500,000 步，再在 AudioCaps 上微调 250,000 步，剪枝模型在 AudioCaps 训练集上微调 1,000,000 步
- **算力与训练耗时**：原文未披露训练所用硬件型号与数量，推理测速硬件为 NVIDIA GeForce RTX 3090 ，用于生成 10 秒音频并统计 RTF 与检查点体积，未披露训练耗时与吞吐
- **核心超参数与配置**：U-Net 基础通道数为 192 ，基线通道缩放为 (1, 2, 3, 5) ，剪枝目标为深块，取 b3 为 1 或 2 ，b4 为 1 、 2 或 4 ，重要性准则为卷积滤波器 l1 范数，微调时仅更新 U-Net 并冻结 VAE 与 CLAP ，优化器与学习率等细节原文未披露
- **推理速度与部署开销**：未剪枝 U-Net 为 416M 参数与 102.94G MACs ，最小配置 (1, 2, 1, 1) 为 70.49M 参数与 63G MACs ，RTF 从 2.14 降到 1.86 ，检查点从 4.6 GB 降到 3.2 GB ，均衡配置 (1, 2, 3, 1) 为 145M 参数与 84G MACs ，RTF 为 1.88 ，检查点为 3.5 GB
- **开源产物与协议状态**：原文给出代码地址与演示页链接，代码链接本次检查暂未能确认可达，演示页为论文提及的第三方链接本次同样未能确认可达，权重下载、许可与可直接运行状态在原文中未明确
- **附录与补充材料要点**：原文未提供独立附录证明、补充消融细节与许可限制说明，失效案例与事件级恢复数据分散在正文表格与配图中，复现需以正文配置与划分核对为准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.2/10** | 创新 6.1/10 | 技术严谨 6.6/10 | 实验充分 5.9/10 | 清晰度 7.1/10 | 影响力 6.4/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-28`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Singh_28.pdf)
- Track：P1-10

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：剪枝微调后FAD由3.95降至1.57且参数减少65%-83%、MACs减少18%-39%，并附RTX3090上RTF与存储实测，压缩收益可核对。

- 核心优势：提供未剪枝、剪枝未微调与剪枝微调三态对照及7个事件族PANNs召回诊断，定位枪声警笛等安全关键损失与微调恢复。

- 主要短板：质量结论完全依赖FAD与KL及PANNs前10召回等客观代理指标，未设人工主观听测支撑人类感知更优主张。

- 主要短板：评测限于AudioCaps单一测试集964样本且无置信区间或显著性检验，未对比随机剪枝或其他重要性准则难以验证l1必要性。

- 主要短板：未披露优化器学习率批量调度与训练硬件时长及声码器层数采样率细节，论文亦未说明测速卡数，复现信息关键缺失。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
