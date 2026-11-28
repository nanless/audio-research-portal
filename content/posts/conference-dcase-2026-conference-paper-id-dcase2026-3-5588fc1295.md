---
title: "NAVE: A Normalized, Adaptive Conformer for Antarctic Whale Vocalization Detection"
date: 2026-11-28
draft: false
description: "南极鲸叫检测需在长时低信噪比录音中跨站点定位稀疏叫声，NAVE 以每频点去均值加 PCEN 双通道、频率动态前端与 153 帧宽核 Conformer 在留一站点验证中以 0.518 宏观 F1 超过 0.475 的强基线，代价是 BMABZ 略降且 D 类仍最弱。"
tags: ["生物声学监测", "Conformer", "信号处理", "音频事件检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "归一化自适应 Conformer 如何检测南极鲸叫声"
paper_digest_original_title: "NAVE: A Normalized, Adaptive Conformer for Antarctic Whale Vocalization Detection"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-3"
paper_digest_workbench_source_sha256: "42a766d99716873f004abf7ed8f22c6103aeeb1d8a8aebdc18e4faa436d1d765"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Nagl_3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频事件检测"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "南极鲸叫检测需在长时低信噪比录音中跨站点定位稀疏叫声，NAVE 以每频点去均值加 PCEN 双通道、频率动态前端与 153 帧宽核 Conformer 在留一站点验证中以 0.518 宏观 F1 超过 0.475 的强基线，代价是 BMABZ 略降且 D 类仍最弱。"
paper_digest_reader_sections: [{"heading":"长时低信噪比录音中的稀疏鲸叫为何难做跨站点检测","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"NAVE 如何用归一化前端与宽核 Conformer 重做声学主干","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"每频点去均值与 PCEN 双通道如何压制站点底噪","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"时长匹配的宽深度卷积与阈值调优如何组织训练推理","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"留一站点验证下宽核与归一化前端如何找回最难的 D 类","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提、未验证的部署条件与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Matthias Nagl"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria"],"name":"Paul Primus"},{"affiliations":["Institute of Computational Perception, Johannes Kepler University Linz, Austria","LIT Artificial Intelligence Lab, Linz, Austria"],"name":"Gerhard Widmer"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"a1363f1919c4c3b6715f0125ed27b5b85458a1c8d9a4722db79172764bc50190","url":"/audio-research-portal/client/papers/2026-11-28/conference-5588fc12956cf484d108e1ec/citation.bib"},"citation.json":{"sha256":"8388a9f144936510a61aa29143e5987fe3cc1b3d7f555f5ce78377517b7092e4","url":"/audio-research-portal/client/papers/2026-11-28/conference-5588fc12956cf484d108e1ec/citation.json"},"citation.ris":{"sha256":"c5aac5abd99942ce7a5199485c9c7fb28a67824ce405704e600f8e4b6a0e4413","url":"/audio-research-portal/client/papers/2026-11-28/conference-5588fc12956cf484d108e1ec/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0305ebfa281b90d3882ed9c618c70e63a5d2d5b7203212b5f8cd0a968ef9df9a","url":"/audio-research-portal/client/papers/2026-11-28/conference-5588fc12956cf484d108e1ec/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-3"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Nagl_3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "171e30f7d5c9e345c307904dd1210d0b5139db165ca6d0793cc6916e465f9dbf"
paper_digest_api_reader_plan_sha256: "ef0b413b02800ff5d642c38414a90070a62a618c407507e27c666d551861d999"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c7093206f4205844616ec634f03c9904f4faefdc2ec935713c113011286fb01d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d63aca422fcc1b2dc07c3082767c290aaeb8f935536b0e202624fc9b3187796f"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "7bb85edd569b67f177581dcbe71cd8031b7141c0d9b239ba0b19ee3b804142f0"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.conformer","label":"Conformer"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_method: "Conformer"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
paper_digest_publication_view_contract: "conference-publication-figure-view"
paper_digest_publication_view_schema_fingerprint: "ac79a977940c8e16d3275ff1fdbec1a412d4c933980f42b010f1149c955a812a"
paper_digest_publication_view_raw_page_sha256: "f6eb3b8e9dcebc6bd88d8812a8df9999f6358307fd4afee08737bad35ad6eb05"
paper_digest_publication_view_derivation_sha256: "23853f7d96b8afd9e54d60a6ea6ed99877eec0435a6a3ab180e3cbe72809f8d6"
paper_digest_publication_view_article_sha256: "5da55ee9a876f58d776d766cbc5362afb161bec0b907f55660b5c533af7b10a7"
---

# 📄 归一化自适应 Conformer 如何检测南极鲸叫声

> 英文题目：*NAVE: A Normalized, Adaptive Conformer for Antarctic Whale Vocalization Detection*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-3`
> Track：P4-9



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Nagl_3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-research-portal/papers/?concept=task.event-detection)
- **研究方法**：[Conformer](/audio-research-portal/papers/?concept=method.conformer)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.0/10** | 创新 6.3/10 | 技术严谨 7.2/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 5.6/10 | 开源 6.0/10 | 可复现 6.5/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Matthias Nagl：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Paul Primus：Institute of Computational Perception, Johannes Kepler University Linz, Austria
- Gerhard Widmer：Institute of Computational Perception, Johannes Kepler University Linz, Austria；LIT Artificial Intelligence Lab, Linz, Austria

## 📌 核心摘要

**问题与瓶颈：** 南极蓝鲸与长须鲸呼叫检测要求在长时被动声监测录音中定位呼叫起止并分类，输出为每类事件的时间边界与类别。7 种呼叫按声学相似性归为 BMABZ、D 与 BP 共 3 类，其中 BMABZ 为蓝鲸 A、B、Z 呼叫，D 为蓝鲸与长须鲸 downsweep，BP 为长须鲸 20 Hz 脉冲。呼叫在时间上稀疏且站点间噪声与环境声差异大，时变噪声易掩蔽弱呼叫，站点特有持续谱成分会导致已见站点训练的模型难以泛化，误检控制与召回同等重要。D 类在训练集中集中于 elephantisland2013 与 elephantisland2014 且在验证站点最稀少，对先前检测器最难，Whale-VAD 的 D 类 F1 仅为 0.126。现有 Whale-VAD 与 WhaleVAD-BPN 沿用卷积与双向长短时记忆网络主干，增益主要来自输出门控与后处理调参，未解决前端对慢变噪声抑制不足与主干局部感受野和呼叫时长失配的问题。

**核心思路与方法架构：** 与最接近基线相比，NAVE 保留逐频点复均值去除的三通道相位感知表示与固定后处理框架，增量在于增加自适应归一化通道、频率自适应干与时长匹配的宽卷积 Conformer 主干。30 s 训练分段在 250 Hz 采样率下经 256 点 Hann 窗约 1 s 与 5 点跳即 20 ms 跳长的短时傅里叶变换得到 129 个频点与约 1500 帧的复谱，构造幅度与相位余弦正弦共 3 个通道并附加固定逐通道能量归一化通道形成 4 通道表示，经滤波器组与特征提取把频率从 129 压缩到 14 而时间保持 20 ms 帧率，展平投影到 128 维后送入 4 个 Conformer 块与每类阈值的帧级分类头。逐通道能量归一化以平滑系数 0.025 跟踪背景并压缩动态范围以凸显被掩蔽的瞬态 downsweep，频率动态卷积以 4 个基核的混合在频率分辨率仍高的早期层适配类特有频带，宽深度卷积核 k = 153 覆盖 3.06 s 局部窗以匹配呼叫时长并补足自注意力的全局依赖，全模型含 2,705,787 个参数，推理采用 60 s 重叠 2 s 分段平均后验，属离线整段检测而非流式因果系统。

**关键实验与核心代价：** 在 BioDCASE 2026 Task 2 开发集的 3 个验证站点年份留一站点阈值选择下，事件级交并比阈值为 0.3 的宏 F1 从 WhaleVAD-BPN 的 0.475 提升至 NAVE 汇 pooled 计数的 0.518，折叠平均口径下则从 0.475 提升至 0.510，5 个种子最低为 0.502 均超过基线，本任务无人工主观听测与神经代理指标，依据均为事件级 F1。消融显示逐通道能量归一化使 D 类 F1 从 0.155 提升至 0.269 而 BMABZ 从 0.472 回落至 0.400，宽核 k = 65 使宏 F1 从 0.399 提升至 0.463，进一步取 k = 153 则达到 0.518，核宽扫描在约 k = 65 即 1.3 s 后进入平台，k = 153 相对 k = 129 高 0.026 且在 5 个配对种子上均更好，配对 t 检验 p = 0.036。代价在于长 tonal 易被归一化压低导致 BMABZ 回落，以及宽核每块增加约 19,600 个参数，原文未提供延迟与吞吐实测，单次前向与免边界提议网络的简化仅为结构描述。

**适用边界与深读导览：** 结论成立前提是模型固定而每类阈值在其余 2 个验证站点上调参后用于 held-out 站点并汇 pooled 计数，基线则跨折叠平均精确率与召回率，论文同时给出 NAVE 两种汇合口径以保证可比，未覆盖真正未见海域、不同设备与极端低信噪比下的部署失效，也未验证实时与端侧约束。D 类在感受野足够宽后仍最弱且增益趋平，提示继续加宽主干难再获益，需结合第 3 节前端与主干公式、第 4 节式 1 的宏 F1 定义与留一站点协议及第 5 节表 2 与图 3 的消融与核宽曲线深究。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/TheFruitGuy/NAVE-SED> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档；含权重文件（.pt），许可证：MIT

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长时低信噪比录音中的稀疏鲸叫为何难做跨站点检测

被动声学监测为研究南极蓝鲸与长须鲸提供了非侵入手段，但长期水下录音往往信噪比很低且数据量庞大，人工标注缓慢并依赖专家经验。鲸叫在时间轴上极为稀疏，形态还会随传播距离、时变噪声与采集设备变化。不同站点的环境底噪特性各异，模型在一组海域训练后到新站点部署时容易失配，因此跨站点泛化是核心考验。

为建立直觉，先看一段 50 s 频谱示例的像素构成，横轴为时间，单位为 s，纵轴为频率，单位为 Hz，3 类标注框展示了目标在时频面的尺度差异。蓝色框对应 BMABZ 类，橙色窄框对应 D 类下扫频，绿色小框对应 BP 类脉冲，下一段将结合颜色与位置具体解释。

[![原论文 Figure 1：Spectrogram with whale calls annotated by time–frequency boxes.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3786329d2451/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/3786329d2451/figure-1.png)

> **图片来源：** 原论文 PDF 第 1 页，本文讨论 Figure 1（完整原页）。

*论文图 1：50 s 频谱中三类叫声标注框的尺度与频率位置对比（原论文 Figure 1）。*

像素中横轴为 0 s 至 50 s，纵轴为 0 Hz 至 80 Hz 以上，左上图例用蓝色、橙色与绿色区分 BMABZ、D 与 BP。橙色框多为 45 Hz 以上的窄竖条，内含自上而下倾斜的亮纹，对应持续约 1 s 至 2 s 的下扫频，分别位于 10 s、17 s、23 s 与 40 s 附近。绿色小框位于 5 s 附近 16 Hz 至 26 Hz，尺度最小。蓝色宽框横跨 31 s 至 46 s 的 14 Hz 至 28 Hz，能量延续最长。背景为大量粉紫色碎斑噪声，弱目标几乎淹没其中。

BioDCASE 2026 任务 2 把 7 种叫声按声学相似性归并为 3 个评测类，BMABZ 覆盖蓝鲸 A、B 与 Z 叫声，D 覆盖蓝鲸与长须鲸下扫频，BP 为长须鲸 20 Hz 脉冲，开发集来自 ATBFL。训练集包含 8 个站点年份，验证集为 casey2017、kerguelen2014 与 kerguelen2015 共 3 个站点年份。由于叫声只占极小时间比例，适度的误报率也会产生大量虚假事件，因此误报控制与召回同等重要。D 类在训练集中多来自 elephantisland2013 与 elephantisland2014，在验证站点最稀少，且在已有检测器中分数最低，是主要瓶颈。

### NAVE 如何用归一化前端与宽核 Conformer 重做声学主干

已有路线多沿用卷积与双向长短时记忆网络构成的 Whale-VAD 主干，更强的 WhaleVAD-BPN 保留同一声学主干，仅增加边界提议网络对帧级后验做门控，并系统搜索后处理参数。NAVE 的改动集中在声学模型本身，保留逐频点均值相减思想，新增固定 PCEN 通道，前端卷积改为随频率自适应的频率动态卷积，主干由循环结构换为 4 块 Conformer 编码器，并把深度卷积核展宽到与叫声时长匹配。

为一次看清完整链路，可沿图中的箭头追踪从音频分段到事件输出的主路径，注意 4 通道频谱、频率维压缩与时间维保持不变的设计，以及投影后进入编码器再到帧级头的分支汇合。下一段将结合各方框下标注的张量形状说明帧率与维度的变化，左下图例的颜色区分也有助于定位所处阶段。

[![原论文 Figure 2：Overview of NAVE. A four-channel phase-aware spectrogram (including a fixed PCEN channel) feeds…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/dbba772bb1ea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/dbba772bb1ea/figure-2.png)

*论文图 2：从音频分段到事件输出的四通道频谱与编码器链路（原论文 Figure 2）。*

像素自左向右先给出音频分段，训练用 30 s，评测用 60 s，采样率为 250 Hz，形状记为 1 × L。随后短时傅里叶变换输出 4 × 129 × T，包含幅度、正余弦相位与 PCEN 共 4 通道。紫色特征提取部分依次为 64 × 41 × T 的滤波器组、128 × 14 × T 的特征提取器、记为 C × F × T 的残差堆叠，以及 T × 128 的投影。绿色部分为 T × 128 的 Conformer 编码器与 T × 3 的帧级头，橙色为 T × 3 的后处理，最终得到 BMABZ、D 与 BP 事件。时间维全程不降采样，左下灰、紫、绿、橙分别对应预处理、特征提取、分类与后处理。

信号规格上，短时傅里叶变换采用 256 点 Hann 窗，在 250 Hz 下约 1 s，步长为 5 点即 20 ms，得到 129 个频点。频率轴在前端从 129 压缩至 41 再至 14，而时间轴保持 20 ms 帧率。【教学例子】取 1 s 输入为例，约含 250 个采样点，对应约 50 帧，则 4 通道频谱约为 4 × 129 × 50，经滤波与投影后变为 50 × 128，编码器与预测头仍按每 20 ms 一帧输出 3 类后验。

### 每频点去均值与 PCEN 双通道如何压制站点底噪

#### 逐频点去均值与相位表示

每段录音先按 30 s 切分，再做短时傅里叶变换。变换采用 256 点 Hann 窗，在 250 Hz 采样下约对应 1 s 分析窗，跳步为 5 点即 20 ms，得到 129 个频点的复数频谱。较长分析窗为须鲸低频叫声提供所需频率分辨率。随后在段内按每个频点求复数均值并相减，去除段内持续存在的站点相关频谱成分，保留随时间变化的叫声结构。相减后的复数谱用幅度与相位的余弦、正弦构成 3 通道表示，延续 Whale-VAD 中对低频叫声有效的三角相位表示做法。

#### 能量归一化与频率动态卷积

第四通道对原始幅度谱做固定逐通道能量归一化，平滑系数 s 为 0.025，增益控制强度 α 为 0.98，偏置 δ 为 2.0，指数 r 为 0.5。每个频点先用指数滑动平均估计本地背景能量，再做除法增益控制与压缩非线性，从而压制缓慢变化的背景能量，抬升瞬态事件相对本地底噪的对比度。在 20 ms 步长下，该平均约跟踪 0.8 s 背景，使持续的 BMABZ 纯音被归一化压向底噪，而更短的 D 与 BP 更容易跑赢平均而凸显。原文也指出该通道可能同时放大声学相似的瞬态，这是灵敏度提升的代价。

卷积前端总体沿用 Whale-VAD 特征提取器的压缩思路，滤波器组把 129 个频点映射为更少的学习频带，两层特征提取块继续压缩频率并抬升通道数，瓶颈卷积降维后再用短堆叠深度卷积聚合局部时频邻域。图中依次记为 64 通道配 41 个频点、128 通道配 14 个频点，最终频率轴由 129 压缩至 14。由于绝对频率本身对 3 类叫声具有类别提示作用，同一局部模式在不同频带需要不同滤波器。仅滤波器组与特征提取块首层采用频率动态卷积，其余为普通二维卷积，在高分辨率早期层适配不同叫声的特征频带。

频率动态卷积在每个输出频率处用 K 为 4 的基核加权混合，权重由时域平均后输入经归一化指数注意得到。两者分工在于去均值抑制与时间无关的固定底色，逐通道能量归一化跟踪时变底噪，两路叠加后再送入自适应卷积。沿频率轴的压缩主要发生在细节仍丰富的早期层，最终到 14 个频点后把通道与频率展平并投影至 128 维模型宽度。整个前端时间维不降采样，因此 Conformer 与帧级头始终工作在 20 ms 帧率，这为后文用 153 帧对应 3.06 s 局部窗提供了统一时钟，也保留了叫声边界定位所需的细粒度时间网格。

### 时长匹配的宽深度卷积与阈值调优如何组织训练推理

时序主干为 4 块 Conformer 编码器，每块按三明治式配置含两个前馈模块，夹住自注意力与卷积子层，模型宽度为 128，注意力头数为 4，并采用旋转位置编码。编码器输出经线性层加 Sigmoid 的帧级预测头映射为每 20 ms 一帧的 3 类对数几率，完整模型含 2,705,787 个参数。由于深度卷积按通道独立作用，加宽仅增加 dmodel × k 参数，k 为 153 时每块约增加 19,600 个权重，对总量影响很小。

在 20 ms 帧率下，153 帧对应 3.06 s 连续局部上下文，奇数宽度加对称填充可保持帧数不变。自注意力已提供跨段全局上下文，宽卷积的目的不是扩大可达范围，而是引入固定平移等变的局部操作，使单层一次覆盖整段叫声，与内容相关的全局交互形成互补。原文把核宽视为主要结构变量并系统评估，何时继续加宽不再有益是后续分析重点。

训练采用 RAdam 优化器，学习率为 5 × 10−5 且恒定无热身，权重衰减为 1.0 × 10−3，梯度裁剪为 1.0，批大小为 32，共 40 个轮次。损失为掩蔽加权二元交叉熵，填充帧不计，c 类正项权重 wc 为 N 除以 Nc，N 为 3 类正段总数，Nc 为该类正段数。每轮取全部正段并配等量随机无叫声段，负集每轮重采，并用衰减为 0.999 的指数滑动平均稳定权重与批归一化统计，验证与存档均用平均权重，丢弃率为 0.1，每轮末重调阈值并按 F1 选检查点。

推理时把整段录音切为 60 s 重叠分段，重叠为 2 s，重叠区帧后验平均为全录音单序列，提供比 30 s 训练段更长的上下文。后处理沿用固定流程，每类序列先经 0.5 s 中值滤波再用类特定阈值二值化，同类事件间隔小于 0.5 s 则合并，短于 0.5 s 或长于 30 s 的事件丢弃。仅阈值经坐标下降调优，平滑窗、合并间隔与时长上下限 3 类共享且固定。

### 留一站点验证下宽核与归一化前端如何找回最难的 D 类

评测采用 BioDCASE 2026 任务 2 开发集，8 个站点年份训练，3 个验证站点年份做留一站点阈值选择，模型固定，仅阈值在另两个站点上选择后用于被留出站点，三折事件计数汇总后再算精确率、召回率与宏观 F1。事件匹配用一维时间交并比，阈值为 0.3，每类由真正例、假正例与假反例得精确率与召回率，宏观 F1 先平均 3 类精确率与召回率再求调和平均。每个配置训 5 个随机种子，报告均值与样本标准差，宏观 F1 标准差约 0.01 至 0.02，小差异需谨慎解读。基线在折间平均精确率与召回率，本文主体用计数汇总，另给折平均以保证可比。

#### 逐步消融：前端与核宽各自贡献

从 Conformer 基线起，宏观 F1 为 0.328，BMABZ 为 0.393，D 为 0.100，BP 为 0.465。加入频率动态主干后宏观升至 0.376，主要由 BMABZ 升至 0.472 驱动，D 仅升至 0.155，BP 几乎不变。追加 PCEN 通道后宏观至 0.399，D 首次大幅升至 0.269，BP 升至 0.507，但 BMABZ 回落至 0.400。把深度核展宽至 65 时 3 类齐升，宏观达 0.463，D 达 0.383。继续展宽至 153 的完整 NAVE 宏观达 0.518，BMABZ 为 0.547，D 为 0.438，BP 为 0.518，宽核是单步最大增益。

为理解核宽与叫声时长的关系，可看固定 PCEN 与频率动态结构下仅变核宽的曲线，横轴为核宽，纵轴为留一站点分数，4 条曲线分别对应 3 类与平均，误差条为至少 3 个种子的一个标准差，灰色虚线标出所选 153。下一段将结合像素说明快速上升段与平台期的类间差异。

[![原论文 Figure 3：Effect of the depthwise kernel width on per-class and macro F1 for the full PCEN+FDY architecture…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/dbba772bb1ea/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/dbba772bb1ea/figure-3.png)

*论文图 3：核宽增大时平均分数陡升后进入平台期的类间差异（原论文 Figure 3）。*

像素中横轴为 31 至 161，纵轴为 0.25 至 0.60，顶部图例用蓝色圆点、橙色三角、粉色方块与深灰菱形区分 BMABZ、D、BP 与平均。平均曲线自 31 的约 0.41 陡升至 65 附近约 0.46，此后在 0.48 至 0.52 间平坦波动，153 处约 0.518。蓝色 BMABZ 随核宽总体上行，末段达约 0.56。粉色 BP 全程约 0.505 至 0.525，对加宽最不敏感，末端略降至约 0.50。橙色 D 自 31 的约 0.26 陡升至 57 的约 0.35 与 65 的约 0.38，随后在 0.38 至 0.45 间波动，105 附近达峰后并未单调上升，说明窄核不足而过宽收益耗尽。

#### 与强基线对比：单模型超越边界提议流程

在计数汇总口径下，单 NAVE 宏观为 0.518，标准差为 0.016，5 个种子最低为 0.502，均超过 WhaleVAD-BPN 的 0.475 与 Whale-VAD 的 0.377。在与基线相同的折平均口径下，NAVE 为 0.510，仍领先，D 从 0.340 升至 0.449，BP 为 0.463 对 0.460 基本持平，BMABZ 从 0.615 降至 0.581 略有回落。增益完全来自单次前向加类特定阈值，未用边界提议网络与后处理搜索。D 仍为 3 类最弱，且 153 比 129 高 0.026 虽在 5 个配对种子上一致且配对 t 检验 p 为 0.036，但平台多点落在种子波动内，153 并非证明最优，只是优选区间的有据选择。

### 结论成立的前提、未验证的部署条件与复现核对

结论依赖留一站点验证近似未见站点部署，训练后模型固定，阈值在两个验证站点上调优后用于第三个站点。该协议仍属开发集内交叉验证，与真正未见海域的失配程度不同。单个模型在汇集计数下宏观分数为 0.518，高于边界提议网络基线的 0.475，最低种子 0.502 仍高于该基线，按折叠平均也达 0.510，在两种汇总下均领先。事件分数依赖 0.3 的时间交并比阈值与先平均再调和的宏观定义，5 个种子的波动约 0.01 至 0.02，不宜过度解读单点最优。

#### 难点残留与后续方向

D 类虽被前端与宽核大幅找回，从 0.340 升至 0.449，但仍为 3 类最弱，且核扫显示局部感受野足够宽后收益递减。BMABZ 含最长叫声，随核展宽总体持续获益，BP 对展宽相对不敏感，D 在最窄核上提升明显但在高原区随种子波动。原文据此判断进一步增益更可能来自更丰富或可学习输入表示与更多标注站点，而非继续增大主干容量，并提出多分辨率前端加类特定感受野与显式跨站点自适应。

#### 复现核对与工程取舍

测试时自适应、更强归一化与更广站点覆盖尚未验证，0.5 s 中值平滑、0.5 s 合并间隔与 0.5 s 至 30 s 时长取舍等固定后处理在新声景下的稳健性也未单独评估。复现核对需区分三件事，代码、权重下载与可直接运行。原文给出作者代码仓库链接，作者资源当前可用，文档完整并覆盖安装、推理与微调。训练硬件、耗时、推理延迟、吞吐与显存原文未披露，残差堆叠确切维度与逐通道能量归一化外的消融细节亦未展开，附录关键证明与补充材料原文未披露。

工程选型上，若目标含微弱下扫频且站点底噪时变，优先引入逐频点去均值加逐通道能量归一化双通道与频率自适应前端，并把深度卷积核展宽至覆盖目标时长，约 1.3 s 对应 65 帧是平均分数陡升的拐点，更长则主要利好最长的 BMABZ。其中 D 提升最大，BP 基本不变，BMABZ 小幅回落，选型需按类权衡。复现时应锁定 250 Hz 采样、20 ms 帧率、30 s 训练与 60 s 推理重叠 2 s 的切分，以及 5 个种子留一站点汇总口径，否则分数不可比。若算力敏感，65 已获大部分增益，153 的额外 0.026 需权衡开销，需按类调阈值并监控误报。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率为 250 Hz，短时傅里叶变换用 256 点 Hann 窗约 1 s，步长 5 点即 20 ms，频点数为 129，训练分段为 30 s，推理分段为 60 s 且重叠为 2 s，中值滤波为 0.5 s，合并间隔小于 0.5 s，丢弃短于 0.5 s 或长于 30 s 事件，RTF 与延迟原文未披露
- **训练与评测数据**：训练集为 8 个站点年份，验证集为 casey2017、kerguelen2014 与 kerguelen2015 共 3 个站点年份，开发集来自 ATBFL，留一站点阈值选择汇总计数，每个配置训 5 个随机种子
- **算力与训练耗时**：原文未披露训练所用 GPU 型号数量与训练耗时
- **核心超参数与配置**：优化器为 RAdam，学习率为 5 × 10−5 恒定无热身，权重衰减为 1.0 × 10−3，梯度裁剪为 1.0，批大小为 32，共 40 个轮次，丢弃率为 0.1，指数滑动平均衰减为 0.999，加权二元交叉熵权重为 wc 为 N 除以 Nc
- **推理速度与部署开销**：参数量为 2,705,787，推理用 60 s 分段且重叠为 2 s，单次前向加类特定阈值输出事件，RTF、延迟、吞吐与显存原文未披露
- **开源产物与协议状态**：作者代码仓库当前可用，已公开，文档完整并覆盖安装、推理与微调，权重下载与开箱运行状态原文未单独说明，需按仓库说明配置环境
- **附录与补充材料要点**：原文未披露附录证明与补充材料，失效分析集中于 D 类仍最弱与宽核平台期，许可限制原文未说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.0/10** | 创新 6.3/10 | 技术严谨 7.2/10 | 实验充分 7.8/10 | 清晰度 6.7/10 | 影响力 5.6/10 | 开源 6.0/10 | 可复现 6.5/10 | 工程/实践 6.1/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-3`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Nagl_3.pdf)
- Track：P4-9

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：留一站点汇pooled宏F1达0.518超越基线0.475且五种子最低0.502均领先，双口径一致可核对。

- 核心优势：逐项叠加直接消融量化PCEN与宽核对D类恢复贡献，并附核宽扫描与配对t检验p=0.036支撑。

- 核心优势：四通道归一化前端与频率动态干及3.06秒宽卷积设计参数完整且动机自洽，总参数2705787个。

- 主要短板：验证仅三个验证站点年份且D类分布不均，真正未见海域部署差距仍未验证，外推力有限。

- 主要短板：PCEN使BMABZ从0.472回落至0.400，持续音调与瞬态增益权衡未彻底解决。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
