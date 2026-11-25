---
title: "SWIFT: A Handcrafted, Arithmetic-Minimal FPGA Engine for Real-Time Audio Deepfake Detection"
date: 2026-11-24
draft: false
tags: [音频深度伪造检测, 信号处理, 集成学习, 硬件系统设计与验证]
categories: [论文速递]
description: "针对大模型伪造检测器难以上边缘的问题，SWIFT 以一阶整数残差与九族定点描述子加校准堆叠在八个基准上达到最高 99.86% 准确率与最低 0.03% EER，但可见生成器评测与仅前端加线性分类器上板使 1.33 个百分点的部署损失与泛化边界成为代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29315"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "无神经网络的整数音频伪造检测与 FPGA 实时实现"
paper_digest_original_title: "SWIFT: A Handcrafted, Arithmetic-Minimal FPGA Engine for Real-Time Audio Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29315v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29315v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29315v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.ensemble-learning","label":"集成学习"},{"facet":"method","id":"method.hardware-system-design","label":"硬件系统设计与验证"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对大模型伪造检测器难以上边缘的问题，SWIFT 以一阶整数残差与九族定点描述子加校准堆叠在八个基准上达到最高 99.86% 准确率与最低 0.03% EER，但可见生成器评测与仅前端加线性分类器上板使 1.33 个百分点的部署损失与泛化边界成为代价。"
paper_digest_reader_sections: [{"heading":"生成式克隆迫使伪造检测转向高频噪声域","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"SWIFT 双层流水线与 1 秒音频的张量旅程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"整数残差与九族描述子如何刻画噪声底","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"十一路校准堆叠与稀疏融合的训练边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"八基准主结果与部署分类器的性能代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"变换与分类器对照揭示的增益来源","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"可见生成器评测与单基准部署的适用边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Information Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India"],"name":"Chirantan Banerjee"},{"affiliations":["School of VLSI Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India"],"name":"Soumita Chatterjee"},{"affiliations":["School of VLSI Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India"],"name":"Bhargab B. Bhattacharya"},{"affiliations":["Department of Information Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India"],"name":"Hafizur Rahaman"}]
paper_digest_abstract_sha256: "8761d561b74b29bbbf7bb1b405ef1fc28602ee09c0d9bf7319585febe62b171a"
paper_digest_sidecars: {"citation.bib":{"sha256":"8cab6b9e2ae303310d7ae3508bb78c0213831104efee9971bf6f4efbe8ae92d6","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29315/citation.bib"},"citation.json":{"sha256":"4a7487e7ed6bf9e5fbf3eaa9128c8a0d549bdadf762d096d00aefbc4a42b605c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29315/citation.json"},"citation.ris":{"sha256":"8c64c2e620385f6e4eedd64c24ae767bbc1ade60468e3e5d9e73f53575f3db6d","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29315/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e06c16d105c2f11a90544b5124ac9a0444a86833e3cd540bc975c6a80bf39142","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29315/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "45cd4a5620c82c714cc8e74496af38aeba624e0667336542b7489f6201e393b0"
paper_digest_api_reader_plan_sha256: "957b4ab4e30317e2ff484197b44e443ed46c80030b68a0a3ad729c208959f4ee"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "10f4708d1ec3005951d1c6ae7bc12e44c1bceea76b7e1ec4c178a163fd3d0416"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "49aea3efae76c2c7c6a24de2f809d263a9b3cf8c9646d8c2623d5c07ccf13591"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1d0ade78e04abb7467d70f6fbfd60125257d173875bf28a1110c8fd6ad1c9147"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "daffcecd888dcfb1e86283d71ad4887ad3b48f73a43af37beada87a2802cbd98"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 无神经网络的整数音频伪造检测与 FPGA 实时实现

> 英文题目：*[SWIFT: A Handcrafted, Arithmetic-Minimal FPGA Engine for Real-Time Audio Deepfake Detection](https://arxiv.org/abs/2611.29315v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-deepfake)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)；[集成学习](/audio-paper-digest-blog/papers/?concept=method.ensemble-learning)；[硬件系统设计与验证](/audio-paper-digest-blog/papers/?concept=method.hardware-system-design)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.6/10 | 技术严谨 6.3/10 | 实验充分 7.4/10 | 清晰度 6.7/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.9/10 | 工程/实践 7.3/10


## 👥 作者与机构

- Chirantan Banerjee：Department of Information Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India
- Soumita Chatterjee：School of VLSI Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India
- Bhargab B. Bhattacharya：School of VLSI Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India
- Hafizur Rahaman：Department of Information Technology, Indian Institute of Engineering Science and Technology, Shibpur, Howrah, West Bengal 711103, India

## 📌 核心摘要

**问题与瓶颈：** 数秒参考音频即可克隆声音并绕过声纹认证，听众已难以分辨真伪，自动鉴伪成为保护通话与支付的刚需。现有主流路线依赖大参数自监督编码器与高精度浮点运算，无法装入呼叫中心、物联网设备与移动取证套件。早期针对 GAN 声码器的检测器在扩散模型与编解码语言架构带来的分布偏移下泛化变差，而梅尔滤波与语义特征恰好压缩或平滑掉合成器在高频噪声底中留下的上采样棋盘格、相位失配与渲染足迹，长序列注意力进一步推高功耗与延迟，边缘实时部署因此受阻。

**核心思路与方法架构：** 与最接近的单模型手工特征基线相比，本文的增量是保留离线训练与融合思想，改用全整数高频噪声域九族描述子与位精确前端，彻底去掉预训练神经网络与浮点单元。16 kHz 单声道峰值归一化音频按 40 ms 窗与 20 ms 跳切分，每帧 640 点经 Q15 定点量化后做一阶整数差分得到噪声残差，再经整数 LeGall 5/3 提升小波两级分解、非对称交织复用与仅用移位加法的 BinDCT26 压缩为 104 维倒谱分位数。残差分布漂移、庞加莱几何、相位抖动、局部关系、token 周期流、基频抖动闪烁、谱包络差与调制谱比共同组成 192 维向量，11 路并行成员经方差过滤、标准化、可选主成分白化与类别平衡 LightGBM 加 3 折 Platt 校准输出伪造概率，再由稀疏 L1 逻辑回归融合。整数前端与 26 系数线性分类器映射到 PYNQ-Z2 可编程逻辑，权重加载与直接内存访问控制留给 ARM 处理系统，训练完全离线。高频残差隔离语义共振而放大合成周期性突刺，多分辨率小波同时捕捉细边界与子带能量偏移，正是直击梅尔压缩与单分辨率短时傅里叶失效根因的机制。

**关键实验与核心代价：** 在 ShiftySpeech 基准相同特征与相同外折划分下，281945 个片段上软件参考集成 F1-Score（宏平均，越高越好 ↑）为 99.95%，EER（等错误率，越低越好 ↓）为 0.05%，优于同特征同折 5 个标准分类器中最强的 3 层 MLP 的 92.96% F1-Score 与 7.18% EER。变换对比中整数提升小波的 0.05% EER 优于短时傅里叶变换的 1.67% EER，梅尔倒谱的 75.83% 准确率与恒 Q 变换的 56.67% 准确率则大幅落后。8 基准中准确率最高为 MLAAD 的 99.86%，EER 最低为 LibriTTS 的 0.03%，两者不在同一数据集，不可拼成同一次最优，而准确率最低为多声码器混合的 WaveFake 的 90.42%，EER 最高为 ASVspoof 的 1.81%。部署的 int16 权重线性分类器在同折上保留 98.45% 准确率与 0.42% EER，相对软件集成的 1.33 个百分点损失中有 0.35 个百分点来自量化。PL 数据通路每 40 ms 帧仅 7.85 μs，相当于 127.4k frames/s，约为 20 ms 跳对应的 50 frames/s 实时需求的 2500 倍以上，整板 1.734 W，占用 11.22% LUT。

**适用边界与深读导览：** 结论仅在片段级划分、嵌套交叉验证与真伪共享同一解码重采样链下成立，未覆盖压缩、电话信道、噪声、对抗攻击与跨语料迁移，FPGA 上仅运行前端与线性分类器且部署分类器只评了一个基准，端到端含直接内存访问开销的延迟未报告，各特征族贡献也未单独消融。想深究整数小波复用与堆叠融合的公式与实现可查下文方法概述和架构，想核对跨基准与硬件代价的完整数字可查实验结果与细节详述，局限的原文表述集中在局限与问题一节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 生成式克隆迫使伪造检测转向高频噪声域

语音已成为身份认证与资金授权的信任凭证，只需数秒参考音频即可克隆声纹的生成技术，让听众难以靠耳朵分辨真伪，伪造语音因此被用于绕过银行声纹核验、实施企业欺诈与定向虚假信息传播，自动检测成为保护语音通信的必要环节。现有检测多依赖大参数神经编码器，需要高精度浮点运算与较高功耗支撑，在呼叫中心、物联网设备与便携取证装备等边缘场景难以部署，算力与功耗往往比精度更先触顶。

早期伪造以 GAN（生成对抗网络）声码器为主，WaveFake、LibriTTS 与 ASVspoof 2021 构成当时的攻防标尺，扩散模型与 VALL-E 这类编解码语言架构兴起后，针对 GAN 调优的检测器泛化明显下滑，MLAAD、AUDETER、ShiftySpeech 与 CodecFake 等基准为覆盖更宽分布漂移而建立。检测方法随之分化为手工声学特征结合序列模型、呼吸等活体线索、深度卷积 Transformer（变换器）、Mel 频谱轻量 CNN（卷积神经网络）、双自监督小波 Transformer 与 HuBERT-ECAPA、WavLM 融合等路线，精度虽高却共同依赖大型预训练编码器，嵌入式硬件无法承载，而 FPGA 加速此前仅覆盖数据中心卡上的图像视频量化 CNN。

SWIFT 把任务定义为单片段二分类取证判决，输入为一条语音片段，输出为伪造概率与真伪标签，核心假设是声码器、扩散合成器与编解码语言模型都会在高频噪声底留下上采样棋盘格、相位失配与渲染足迹等结构化痕迹，而语义特征恰好压制了这部分信息。主流 Mel 滤波器组压缩高频、单分辨率谱变换难以兼顾细边界尖峰与子带能量漂移，若真伪音频解码与重采样链不一致，检测器还可能学到存储格式痕迹而非合成痕迹，这正是后续统一重采样链与泄漏控制评测要解决的前提。

### SWIFT 双层流水线与 1 秒音频的张量旅程

SWIFT（Streaming Whiten-Integer Forensic Trust-Engine，流式白化整数取证引擎）是一条无神经网络的纯 DSP（数字信号处理）流水线，软件参考模型包含九族 192 维固定点描述子与 2 级校准堆叠集成，FPGA 路径 SWIFT-HW 则只把整数前端与一个固定点线性分类器映射到可编程逻辑。整体可按输入预处理、第一阶段纯噪声取证提取与第二阶段混合距离异常识别、九族特征汇聚、11 路 Level-0 校准与 L1 稀疏元学习融合来理解，训练与评测的精度数字全部来自软件参考模型，硬件数字只覆盖前端加线性分类器。

#### 主路径与框图导读

为定位后续公式与表格在流水线中的位置，可先沿框图自上而下跟踪主干，比较预处理、第一阶段与第二阶段、特征族与分类引擎四层方框的衔接关系，再看底部 11 路堆叠如何汇成最终判决。框图顶部区分真实基线与伪造候选两路输入，中部绿色预处理完成归一化与分帧量化，紫色分支完成小波与异常计算，黄色区域汇聚九族特征，底部灰色与红色区域完成校准与稀疏融合，这种分层有助于理解软硬划分的切分点。

[![原论文 Figure 1：Block diagram of the proposed SWIFT pipeline.](https://arxiv.org/html/2611.29315v1/BD_new.png)](https://arxiv.org/html/2611.29315v1/BD_new.png)

*论文图 1：两阶段流水线框图：预处理、噪声取证提取、九族特征汇聚与堆叠分类引擎的衔接（原论文 Figure 1）。*

框图显示两路音频信号箭头汇入峰值归一化、16 kHz 重采样、40 ms 分帧与 20 ms 交叠、Q15 量化与高通滤波，随后进入整数提升小波变换、交织复用与 BinDCT26（仅用移位加法的二进制离散余弦变换）分支，以及基于真实类均值与逆协方差的噪声距离向量分支，下方注明马氏基线只在每个外层训练折内拟合。中部黄色大框并列 9 个特征族，底部从左到右依次为随机搜索与分层 K 折优化的 11 路 LGBM（梯度提升机）管线、经 3 折 Sigmoid（S 形）Platt 校准的验证阶段，以及 L1 逻辑回归堆叠输出的融合概率，最终分叉为 Real 与 Fake 两类，箭头走向与正文两阶段描述一致。

#### 1 秒样本的张量旅程与软硬分工

以 1 秒输入为例，单声道 16 kHz 音频共 16,000 个采样点，经峰值归一化到负 1 到 1 区间并量化为 Q15（定点小数）整数，40 ms 帧长对应 640 点，20 ms 步长对应 320 点且交叠 50%，1 秒约产生 49 帧。每帧经一阶差分 2 倍抽取得到约 320 点噪声残差，送入 2 级整数 LeGall 5/3 提升小波，第一级近似分量丢弃，细节带 LH 再分解为 HL 与 HH，再经非对称交织复用把每四抽一的 128 点序列组合为紧凑向量，随后 BinDCT26 压缩为 26 个系数。

26 个系数按均值、中值绝对偏差、5% 与 95% 分位数汇总为 104 维小波倒谱描述子，与其余八族拼接为 192 维，每条片段的所有帧级量最终聚合为一条 192 维向量。11 路成员管线各输出一个校准后伪造概率，组成样本数乘 11 的堆叠矩阵，经稀疏逻辑回归融合成最终判决。在硬件划分上，可编程逻辑只负责残差、小波、复用、BinDCT26 与线性分类的整数加移与定点乘加，ARM 侧负责权重装载、DMA（直接存储器访问）搬运与分数回读，其余八族与树集成训练全部留在软件浮点域，软硬件结果经位精确模型比对一致。

### 整数残差与九族描述子如何刻画噪声底

九族特征的设计逻辑是互补覆盖，一族漏掉的指纹可能被另一族暴露，既有刻画小波边界离散的倒谱分位数，也有度量分布漂移、相空间扰动、轨迹微变、段内非平稳、帧率节奏、韵律微颤、帧间包络变化与音节节奏的描述子，共同构成 192 维向量。第一阶段多分辨率小波保留合成块边界的周期尖峰，第二阶段以真实类为基准度量偏离，辅以局部相对异常与庞加莱几何捕捉过平滑或突变，后四族则针对节奏与发声微颤形成正交视角。

#### 九族分工与维度构成

下表列出 9 个特征族的名称、维度与针对目标，可对照理解 104 维小波倒谱为何占一半以上，其余八族如何分摊剩余维度。阅读时先看维度列累加为 192 的构成，再看目标列区分边界离散、分布漂移、相空间破坏、轨迹微变、段内非平稳、帧率节奏、韵律微变、帧间变化与音节节奏的分工，为后续公式找到各自的输入输出位置。

| # | Feature Family | Dim. | Target |
| --- | --- | --- | --- |
| 1 | DWT cepstral quantiles | 104 | Wavelet boundary disc. |
| 2 | Noise Mahalanobis anomaly | 10 | Distribution shift |
| 3 | Noise Poincaré geometry | 24 | Phase-space disruption |
| 4 | Noise phase jitter | 10 | Trajectory micro-var. |
| 5 | Local relational anomaly | 10 | Within-clip non-stat. |
| 6 | Token periodicity flux | 8 | Frame-rate rhythm |
| 7 | F0 jitter & shimmer | 8 | Prosodic micro-var. |
| 8 | Spectral envelope delta | 10 | Inter-frame change |
| 9 | Modulation spectrum | 8 | Syllabic rhythm |
| Total | Total | 192 |  |

表中第 1 族小波倒谱分位数占 104 维，目标为小波边界离散，第 2 族噪声马氏异常占 10 维，目标为分布漂移，第 3 族噪声庞加莱几何占 24 维，第 4 族噪声相位抖动与第 5 族局部相对异常各占 10 维，第 6 族令牌周期流、第 7 族基频抖动与闪烁、第 9 族调制谱各占 8 维，第 8 族谱包络差分占 10 维，合计 192 维。这种分配把高频细节交给小波，把全局偏离交给马氏距离，把短长时不规则交给相空间，把节奏交给周期与调制谱，形成多尺度互补。

#### 残差、小波与全局异常

预处理的核心是一阶整数高通残差，目标是从 Q15 量化语音中剥离低频共振，保留高频噪声底，符号中 x_Q15 为 Q15 定点样本，n 为抽取后索引，hf 为残差输出。该式为 Haar 提升方案的预测步，幅频响应为 2 倍正弦绝对值形式，随后 2 倍抽取，每个输出只花一次整数减法，无需乘法器，且取值范围在负 2 到 2 之间，保证软硬件位精确一致。

\[hf[n]=x_{Q15}[2n{+}1]-x_{Q15}[2n],\]

采用差分形式的物理直觉是浊音共振变化缓慢，相邻样本相近则差分接近零而被抑制，高频合成伪影变化剧烈则差分幅值突出，低频语义因此被衰减，噪声底被暴露。极端取值下，若输入为平稳元音，残差接近零向量，后续小波细节能量很低，若输入含上采样棋盘格或拼接边界，残差出现周期尖峰，直接驱动 2 级整数小波分解与交织复用进入细节带分析。

第二阶段用真实类拟合的马氏异常距离度量每帧偏离，目标是考虑特征相关性后的标准化偏离，符号中 xt 为帧特征向量，μreal 为真实类均值，Σreal 为真实类协方差，均只在每个外层训练折内用真实样本拟合，DM 为距离分数。该形式对相关性强的方向自动降权，避免把麦克风底噪的自然相关误判为伪造，每帧分数再经 10 个汇总统计聚合成片段级特征。

\[D_{M}(\mathbf{x}_{t})=\sqrt{(\mathbf{x}_{t}-\boldsymbol{\mu}_{\text{real}})^{\!\top}\boldsymbol{\Sigma}_{\text{real}}^{-1}(\mathbf{x}_{t}-\boldsymbol{\mu}_{\text{real}})},\]

统计直觉是真实麦克风噪声底形成紧致分布，合成器难以复刻其联合协方差，伪造帧因此落在分布尾部而距离增大，真实帧则聚集在较小距离附近。极端情况下，若协方差接近奇异，逆矩阵会放大微小偏离，工程上依赖方差阈值与标准化缓解，若测试生成器与训练完全同分布，距离直方图呈现双峰分离，输出的 10 维统计直接送入局部异常与堆叠成员作为互补证据。

#### 相空间与节奏调制

庞加莱嵌入把噪声残差映射为相空间散点，用短轴与长轴扩展刻画几何，目标是区分自然发声的丰富不规则吸引子与确定性合成器的过平滑或过随机轨迹，符号中 y 为残差样本，τ 为嵌入延迟，σ 为沿 n 的标准差，SD1 反映样本间短期不规则，SD2 反映吸引子长期扩展。该族共 24 维，伴随的相位抖动描述子跟踪帧间几何漂移。

\[SD_{1}=\frac{\sigma(y[n+\tau]-y[n])}{\sqrt{2}},\qquad SD_{2}=\frac{\sigma(y[n+\tau]+y[n])}{\sqrt{2}},\]

几何直觉是真实声带振动叠加湍流，短时差分与和的扩展保持一定比例且帧间起伏，合成器按块生成则吸引子过于规整或在拼接处突跳，SD1 过小或 SD2 突增成为线索。极端取值下，若信号完全周期，差分支接近零而 SD1 趋零，若为白噪声，和差扩展趋于相近，帧间抖动特征进一步把这种突变放大，输出与马氏异常形成正交视角。

调制谱带比针对音节节奏，目标是对比慢调制与音节调制带的能量，符号中 M 为调制谱幅度，f 为以 Hz（赫兹）为单位的调制频率，分子累加 4 Hz 以下能量，分母累加 4 到 20 Hz 能量，天然 4 到 8 Hz 音节节奏落在分母带内。该比值与令牌周期流、基频抖动闪烁、谱包络一阶二阶差分共同覆盖节奏与发声微颤，合成器压平或夸张微颤时会改变比值。

\[R_{\mathrm{mod}}=\frac{\sum_{f<4}M(f)}{\sum_{4\leq f<20}M(f)},\]

采用比值的直觉是对整体响度归一化，只看节奏分布，若合成器帧率锁定导致周期性过强，4 到 20 Hz 带能量相对抬升而比值偏小，若过渡过平滑，慢带残留相对偏大而比值偏大。极端情况下，若语音被过度平滑，比值显著偏离真实分布，若拼接边界呈脉冲，调制谱高带泄漏同样改变比值，该 8 维特征与抖动闪烁互补，驱动堆叠成员从韵律侧投票。

### 十一路校准堆叠与稀疏融合的训练边界

192 维固定点描述子送入 2 级堆叠引擎，Level-0 并行训练 11 条成员管线，分别对应 9 个特征族、白化后全拼接与不做 PCA（主成分分析）白化的全拼接，每条遵循方差阈值、标准化、可选 PCA 去相关与类平衡 LightGBM 极随机分裂的四步级联，再经 3 折 Platt（普拉特）S 形校准输出概率。这种设计让每族独立投票，白化分支看全局相关，非白化分支保留原始尺度，避免单模型视角遮蔽互补痕迹。

#### 11 路管线与校准

每条管线先剔除方差小于 0.00001 的维度，再做标准化，除 all_nopca 分支外均做保留 99.5% 方差的 PCA 白化，随后拟合类平衡 LightGBM，超参数在每个外层训练折内经随机搜索与内层分层交叉验证选择。校准阶段把原始对数几率映射为可靠概率，堆叠矩阵 P 为样本数乘 11，每列为一条管线在袋外数据上的后验概率，确保 Level-1 融合器看到的是未泄漏的泛化行为而非训练拟合。

Level-1 用 L1 正则逻辑回归融合 11 列概率，目标是在交叉熵损失上加稀疏惩罚自动抑制冗余管线，符号中 w 为 11 维融合权重，b 为偏置，LCE 为交叉熵损失，C 的倒数为控制稀疏的正则强度。该形式保留最互补的概率流，冗余成员权重被压为零，最终输出伪造后验用于 ROC（受试者工作特征）曲线与 EER（等错误率）工作点计算。

\[\min_{\mathbf{w},\,b}\;\mathcal{L}_{\mathrm{CE}}(\mathbf{w},b)+C^{-1}\|\mathbf{w}\|_{1},\]

#### 稀疏融合与冻结边界

稀疏惩罚的直觉是成员间高度相关时不必重复计票，L1 几何倾向把权重集中到少数互补列上，C 越小惩罚越强而保留管线越少，极端取零则所有权重为零只剩偏置，极端放宽则退化为普通逻辑回归。融合器只在外层训练折的袋外概率上训练，梯度只更新 w 与 b，不回传到 Level-0，这种冻结边界配合嵌套交叉验证，保证精度数字反映的是跨折泛化而非折内过拟合。

推理时软件参考模型走全 192 维树集成路径，FPGA 路径 SWIFT-HW 则改用离线训练在 26 个 BinDCT 系数上的线性分类器，权重量化为 int16（16 位整数）与 int32 偏置，用定点乘加在 DSP 切片上求点积。树集成需要比较器遍历，乘加通路无法直接映射，因此部署分类器是精度换可实现性的折中，其 1.33 个百分点的损失在结果节量化，映射树集成的比较器逻辑留作未来工作。

### 八基准主结果与部署分类器的性能代价

#### 评测协议与公平性前提

每条片段的所有帧级量被聚合为一条 192 维向量，因此划分一律在片段级完成，同一片段的交叠帧永不跨越训练测试边界，帧交叠无法造成泄漏。性能用嵌套交叉验证估计，外层为分层 5 折，内层在外层训练折内做随机超参数搜索，方差阈值、标准化、PCA、真实类马氏基线、LightGBM 成员、3 折 Sigmoid 校准与 L1 融合强度 C 全部只在外层训练折内拟合，融合器训练在袋外概率上。由于同语料库内外层按标签分层，相同生成器同时出现在训练与测试，测得的是可见生成器检测，跨语料与未见生成器在结论节列为未验证。

因检测器观察频谱顶部，真伪必须共享同一解码重采样链，否则会学到存储痕迹，源语料库在此并不一致，MLAAD 伪造为 22.05 kHz WAV（波形音频）而真实为 16 kHz FLAC（无损压缩），CodecFake 真伪位深与采样率也不同，所有片段因此统一经 16 位取整、经公共 14 kHz 中间级的 16 kHz 重采样与首尾静音切除，滤波器通带低于 6 kHz、阻带高于 7 kHz。指标以伪造为正类，融合器袋外伪造概率汇成单一分数向量，AUC（曲线下面积）为排序型面积，EER 为虚警与漏检相等的工作点，准确率召回率与宏平均 F1（F1 分数）取自同一判决，原文方法节声称评测代码强制校验 AUC 不小于 1 减 EER 的几何约束。

为建立残差是否带来可分性的直觉，可先看噪声域与原始域的马氏距离直方图，横轴为马氏残差距离，纵轴为密度估计概率，蓝色为真实语音噪声，红色为伪造音频噪声，右上小图为原始音频对照。该图把高通残差是否带来可分性画成双峰距离，若主图双峰分离而小图重叠，则说明增益来自残差隔离而非距离度量本身，为后续变换对照提供动机。

[![原论文 Figure 2：Isolated noise-domain Mahalanobis distances reveal distinct real vs.](https://arxiv.org/html/2611.29315v1/Audio.png)](https://arxiv.org/html/2611.29315v1/Audio.png)

*论文图 2：噪声域马氏距离直方图：主图真伪双峰分离与右上原始音频重叠对照（原论文 Figure 2）。*

主图显示蓝色真实峰集中在 1 到 5 附近，红色伪造峰集中在 5 到 8 附近，两者在距离 4 附近仅有小范围交叠，各自叠加的密度曲线同样左右错开，直方条与曲线走向一致。右上小图横轴 1 到 7 范围内蓝色真实原始音频与红色伪造原始音频几乎完全重叠，峰形与曲线难以区分，与主图的清晰分离形成对照，证实是一阶差分隔离噪声底带来了可分性，而非马氏公式本身的区分力。

#### 跨基准主结果

下表汇总 8 个基准的软件参考模型性能，覆盖 TTS（文本转语音）与编解码、GAN 声码器、ASVspoof 与混合类型，样本量从 15,228 条到 281,945 条不等，指标方向为准确率、召回率、F1 与 AUC 越高越好，EER 越低越好。阅读时先对照类型列区分现代 TTS 与多声码器混合的难度差异，再看准确率与 EER 列的此消彼长，注意汇集分数向量与可见生成器前提，跨表比较需回到同折同特征的限定。

| Dataset | Type | Samples | Accuracy (%) | Recall (%) | F1-Score (%) | AUC | EER (%) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Audeter | TTS/codec | 15,228 | 99.68 | 99.65 | 99.79 | 0.9896 | 0.29 |
| MLAAD | TTS/codec | 18,000 | 99.86 | 99.91 | 99.84 | 0.9898 | 0.12 |
| CodecFake | TTS/codec | 94,242 | 99.29 | 99.16 | 99.29 | 0.9889 | 0.66 |
| ShiftySpeech | TTS/codec | 281,945 | 99.78 | 99.66 | 99.95 | 0.9995 | 0.05 |
| WaveFake | GAN | 104,800 | 90.42 | 89.56 | 90.40 | 0.9235 | 1.54 |
| LibriTTS | GAN | 20,929 | 99.52 | 99.35 | 99.55 | 0.9992 | 0.03 |
| ASVspoof | TTS/VC | 121,461 | 97.84 | 97.12 | 97.48 | 0.9816 | 1.81 |
| SONAR | Mixed | 113,122 | 98.42 | 97.39 | 98.37 | 0.9741 | 1.27 |

在 TTS 与编解码四库上 EER 为 0.05% 至 0.66%，而在全表八库中 GAN 类的 LibriTTS 以 0.03% 取得全表最低 EER，全表 EER 范围为 0.03% 至 1.81%。四库准确率保持 99.29% 到 99.86%，其中 MLAAD 以 99.86% 为同表准确率最高者，ShiftySpeech 以 99.78% 与 0.05% 紧随。WaveFake 因多声码器混合最难，仅 90.42% 与 1.54%，SONAR 混合九家供应商为 98.42% 与 1.27%，ASVspoof 为 97.84% 与 1.81%。虽然原文方法节声称评测代码校验 AUC ≥ 1 - EER，但原论文主结果表刊印的 Audeter、MLAAD、CodecFake、WaveFake、ASVspoof 与 SONAR 六行数值实际上低于 1 - EER（如 WaveFake 的 0.9235 < 0.9846），存在原论文内部数值不一致，阅读时须注意此差异。未报告标准差与置信区间，逐折记录只在补充材料中提供，压缩电话信道与噪声下的表现未被评测。

#### 部署分类器与硬件代价

下表把同一 ShiftySpeech 同折上的 3 种分类器并列，比较 192 维树集成参考、26 维浮点线性与部署的 int16 与 int32 定点线性，特征数与算术形式的代价一目了然。阅读时先看浮点线性到定点线性的量化损失，再看定点线性到树集成的结构损失，区分可映射性与量化各自吃掉多少精度，为边缘选型提供可直接引用的权衡点。

| Classifier | Accuracy (%) | AUC | EER (%) |
| --- | --- | --- | --- |
| Linear, 26 BinDCT features, floating point | 98.80 | 0.9921 | 0.35 |
| SWIFT-HW: linear, int16/int32 (deployed) | 98.45 | 0.9904 | 0.42 |
| Software reference ensemble (192 features) | 99.78 | 0.9995 | 0.05 |

浮点线性在 26 个 BinDCT 特征上已达 98.80% 与 0.35%，量化为部署定点后为 98.45% 与 0.42%，量化单独带来 0.35 个百分点损失，部署分类器相对软件参考 99.78% 与 0.05% 共低 1.33 个百分点。IP 核输出与位精确整数模型一致，证实损失主要来自从 192 维树集成压缩到 26 维乘加分类器的结构简化，而非实现错误，该部署评估只在 ShiftySpeech 单基准上完成，其余七库的定点表现尚未验证。

硬件侧 IP 核在 50 MHz（兆赫兹）下占 5,968 个 Slice LUT（查找表，占比 11.22%）、8,647 个寄存器与 42 个 DSP 切片，可编程逻辑数据通路延迟为每 40 ms 帧 7.85 μs（微秒），折合 127.4k 帧每秒，约为 20 ms 步长所需 50 帧每秒的 2,500 倍以上，整板功耗 1.734 W（瓦特）。该延迟只覆盖可编程逻辑数据通路，不含 DMA 与处理器系统开销，端到端延迟未报告，11.22% 的占用意味着同一芯片仍有余量集成音频接口与后处理，但树集成尚未上板。

### 变换与分类器对照揭示的增益来源

#### 噪声域上何种变换真正有效

下表把 4 种变换同等地作用在噪声残差上并走同一 SWIFT 流水线，比较短时傅里叶变换、Mel 倒谱、常数 Q 变换与本文整数提升小波，指标方向与主表一致。阅读时先看 Mel 与常数 Q 是否因压缩高频而塌陷，再看短时傅里叶与小波在多分辨率上的差距，判断增益究竟来自残差本身还是变换选择。

| Transform (on Noise Residual) | Accuracy (%) | AUC | EER (%) |
| --- | --- | --- | --- |
| Short-Time Fourier Transform | 97.50 | 0.9986 | 1.67 |
| Mel-Frequency Cepstral Coefficients | 75.83 | 0.8600 | 23.33 |
| Constant-Q Transform | 56.67 | 0.6594 | 40.00 |
| Integer Lifting DWT (ours) | 99.78 | 0.9995 | 0.05 |

整数提升小波以 99.78% 与 0.05% 为同表准确率最高且 EER 最低者，短时傅里叶以 97.50% 与 1.67% 为次优，Mel 倒谱仅 75.83% 与 23.33%，常数 Q 变换仅 56.67% 与 40.00% 垫底。原文解释是常数 Q 对数分箱平滑了声码器边界的细高频尖峰，Mel 压缩了伪影集中的高频，短时傅里叶单固定分辨率难以兼顾令牌边界尖峰与上采样子带漂移，而多分辨率整数小波同时捕获两者，该对照未做各族消融，单族贡献仍是缺口。

#### 堆叠相对单模型的提升

下表把 5 种常用分类器与 SWIFT 放在同一 192 维特征、同一外层折与同一预处理上比较，F1 为宏平均，AUC 越高越好而 EER 越低越好，属于本文唯一公平的同条件对照。阅读时先看单模型天花板，再看堆叠相对单 LightGBM 的跳变，判断增益来自特征还是集成结构，注意先验系统对照因基准不同而不具可比性。

| Classifier | Accuracy (%) | Recall (%) | F1-Score (%) | AUC | EER (%) |
| --- | --- | --- | --- | --- | --- |
| SVM (RBF) | 89.71 | 91.06 | 89.71 | 0.9685 | 10.42 |
| MLP (3-layer) | 92.96 | 93.48 | 92.96 | 0.9761 | 7.18 |
| Random Forest | 82.45 | 82.78 | 82.45 | 0.9070 | 17.49 |
| XGBoost | 88.51 | 88.98 | 88.51 | 0.9559 | 11.42 |
| LightGBM (single) | 88.62 | 89.00 | 88.62 | 0.9576 | 11.30 |
| SWIFT (ours) | 99.78 | 99.66 | 99.95 | 0.9995 | 0.05 |

五基线均未超过 93% 准确率且 EER 均高于 7%，其中随机森林最弱为 82.45% 与 17.49%，3 层 MLP（多层感知机）最强为 92.96% 与 7.18%，单 LightGBM 为 88.62% 与 11.30%，而 SWIFT 堆叠达 99.78%、99.66% 召回、99.95% F1、0.9995 与 0.05%，在同表同列中准确率最高且 EER 最低。从单 LightGBM 到堆叠的跃升说明单模型无法覆盖全貌，稀疏融合保留了互补概率流，但每族独立贡献未被分离，留一族消融列为未来工作。

原文还引用 WavLM 加多融合注意力等先验系统约 89% 到 93% 的数字，但那些数字引自原论文的不同基准与划分，与本表 ShiftySpeech 同折结果不可直接比较，公平比较应以本表为准。固定点路径能上板而这些大编码器无法上板才是部署维度的差异，神经代理指标与人工听测的背离在此不适用，因评测完全基于检测精度而非听感分数。

### 可见生成器评测与单基准部署的适用边界

4 个边界决定结论成立的前提，生成器在训练测试折间共享，测得的是可见生成器检测，未见生成器、压缩电话信道与噪声、对抗攻击与跨语料迁移均未测试，而这些退化恰好改变 SWIFT 依赖的噪声底。只有前端与线性分类器上板，树集成、Platt 校准与 L1 融合仍在软件，部署分类器只在 ShiftySpeech 单基准验证，其余七库定点表现与含 DMA 与处理器系统的端到端延迟均未报告，每族独立贡献也未分离。

复现需区分三件事，代码权重系统均无已确认公开来源，论文未披露训练硬件与完整超参数搜索空间，只给出方差阈值、PCA 保留 99.5%、3 折校准等关键点，补充材料提供逐折记录可用于核对汇集分数向量的计算。第一步应重建统一 16 kHz 链与片段级嵌套交叉验证，保证真伪同链与折外拟合，再实现 Q15 残差与整数小波的位精确对齐，否则存储痕迹会虚增精度。

工程选型上，若设备无法承载预训练编码器且能保证干净 16 kHz 输入与离线训练条件，SWIFT 的整数前端加稀疏堆叠值得尝试，7.85 μs 数据通路与 1.734 W 功耗为余量设计留出空间。若部署信道包含压缩电话或强噪声，或需跨生成器泛化，则须先补未见生成器留一法、降质信道与跨语料评测，并评估全基准定点损失与端到端延迟，再决定是否把树集成映射为比较器逻辑或接受 1.33 个百分点的结构损失。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.29315v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：ShiftySpeech同特征同折下堆叠以99.78%准确率与0.05%等错误率大幅超越最强单模型多层感知机的92.96%与7.18%。

- 核心优势：全整数高频残差与两级LeGall 5/3提升小波经非对称交织复用与BinDCT26形成104维位精确前端并配共享重采样链。

- 核心优势：PYNQ-Z2可编程逻辑实测每帧7.85微秒约127.4k帧每秒整板1.734瓦占用11.22%查找表且无预训练神经模型。

- 主要短板：九族互补声称下各特征族贡献未单独隔离留待留一族消融，且生成器折间共享未覆盖压缩电话信道噪声对抗与跨语料迁移。

- 主要短板：论文断言ROC过等错误率点必有曲线下面积不小于1减等错误率并称已强制检查，但该下界不成立且多行低于该值需核查同源。

- 主要短板：可编程逻辑仅运行前端与线性分类器且部署分类器只评一个基准，含直接内存访问与处理系统开销的端到端延迟未报告。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
