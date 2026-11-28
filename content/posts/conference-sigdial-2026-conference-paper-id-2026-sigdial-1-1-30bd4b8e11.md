---
title: "DialogueSidon: Recovering Full-Duplex Dialogue Tracks from In-the-Wild Dialogue Audio"
date: 2026-11-27
draft: false
description: "针对野外含噪单声道双人对话难以同时完成质量修复与说话人分离的问题， DialogueSidon 以语音自监督压缩潜空间结合扩散潜变量预测实现双轨恢复，在英语与野外数据上以更低的词错误率与更高的人工评分超越统一对照方法，代价是神经代理感知分数未占优且结论仅在双人电话训练边界内成立。"
tags: ["扩散模型", "变分自编码器", "语音增强", "语音分离"]
categories: ["sigdial-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从含噪单声道混合恢复双轨对话的联合修复与分离解读"
paper_digest_original_title: "DialogueSidon: Recovering Full-Duplex Dialogue Tracks from In-the-Wild Dialogue Audio"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:sigdial:2026:conference-paper-id:2026.sigdial-1.1"
paper_digest_workbench_source_sha256: "4bcb8b4737ec0ef95ee711dc9ce8cb4af262fe08c4de40af003d62ce70ac66af"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.sigdial-1.1/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.sigdial-1.1.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音分离"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对野外含噪单声道双人对话难以同时完成质量修复与说话人分离的问题， DialogueSidon 以语音自监督压缩潜空间结合扩散潜变量预测实现双轨恢复，在英语与野外数据上以更低的词错误率与更高的人工评分超越统一对照方法，代价是神经代理感知分数未占优且结论仅在双人电话训练边界内成立。"
paper_digest_reader_sections: [{"heading":"野外双人对话为何难以直接用作全双工训练数据","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从单声道混合到双轨波形的两阶段总体思路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"压缩编码与扩散预测如何分工并解决说话人排列问题","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"电话语料复原与多重退化如何构造大规模监督数据","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"英语与野外场景中内容保持与听感评价的实际表现","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"潜变量维度与推理速度之间的取舍与未验证因素","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"双人假设与电话训练边界下的复现条件与选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The University of Tokyo, Tokyo, Japan","National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan"],"name":"Wataru Nakata"},{"affiliations":["The University of Tokyo, Tokyo, Japan","National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan"],"name":"Yuki Saito"},{"affiliations":["The University of Tokyo, Tokyo, Japan"],"name":"Kazuki Yamauchi"},{"affiliations":["The University of Tokyo, Tokyo, Japan"],"name":"Emiru Tsunoo"},{"affiliations":["The University of Tokyo, Tokyo, Japan"],"name":"Hiroshi Saruwatari"}]
paper_digest_abstract_sha256: "677e9ea07619cde9f7653134a3a82125b3756222820f1c7948102cedb1624645"
paper_digest_sidecars: {"citation.bib":{"sha256":"5c870dd0c630c5172fd983bba757401a18418d905fd37a4043668b20f087404b","url":"/audio-research-portal/client/papers/2026-11-27/conference-30bd4b8e1150ec90631c0d06/citation.bib"},"citation.json":{"sha256":"016e204bf6128084b6288a2de01fe617f909f390856c455a52f4b510a531c66f","url":"/audio-research-portal/client/papers/2026-11-27/conference-30bd4b8e1150ec90631c0d06/citation.json"},"citation.ris":{"sha256":"b7f134197c927c9fe8b9e3f1e3a1a935d04575ad16750d8d7c8472038236c9eb","url":"/audio-research-portal/client/papers/2026-11-27/conference-30bd4b8e1150ec90631c0d06/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4e2efcbf200b3149657d564ac71cacf38fba3ac943c03f618bcdcb6fbbc58b0f","url":"/audio-research-portal/client/papers/2026-11-27/conference-30bd4b8e1150ec90631c0d06/rethink-context.json"}}
paper_digest_paper_id: "conference:sigdial:2026:conference-paper-id:2026.sigdial-1.1"
paper_digest_source_kind: conference
paper_digest_conference_id: "sigdial-2026"
paper_digest_conference_name: "sigdial-2026"
paper_digest_doi: "10.18653/v1/2026.sigdial-1.1"
paper_digest_conference_doi: "10.18653/v1/2026.sigdial-1.1"
paper_digest_conference_record_url: "https://aclanthology.org/2026.sigdial-1.1/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.sigdial-1.1.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "b76e182a40e65e721a7df0fee79e966f5a1c676f3c28e2c452ee61a93770b911"
paper_digest_api_reader_plan_sha256: "446b52739aecd807652152f0ae1eaf66f17b3a183197a3f46b96b258c54cec0f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c54fb7ea0828c903ec4611f23212af5ecdf2be971c7e6958ab003d1ba7eb068c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d7ba36e1343f72d21237bb416057778b6e0a6c27be064dd92d98d4b4c480a981"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f4d48361786a4826dd9b56252f3693474417943f6d45ba1cf32ca2feb44cb3ac"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a8959bbd9af8d141ac65d8bad049acdf46f7ab6e8084be9b02f9370157156212"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.vae","label":"变分自编码器"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"task","id":"task.speech-separation","label":"语音分离"}]
paper_digest_primary_method: "扩散模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 从含噪单声道混合恢复双轨对话的联合修复与分离解读

> 英文题目：*DialogueSidon: Recovering Full-Duplex Dialogue Tracks from In-the-Wild Dialogue Audio*

> 会议身份：`conference:sigdial:2026:conference-paper-id:2026.sigdial-1.1`
> DOI：`10.18653/v1/2026.sigdial-1.1`
> Track：SIGDIAL 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.sigdial-1.1/) · [官方 PDF](https://aclanthology.org/2026.sigdial-1.1.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-research-portal/papers/?concept=task.speech-enhancement)；[音频分离](/audio-research-portal/papers/?concept=task.audio-separation) → [语音分离](/audio-research-portal/papers/?concept=task.speech-separation)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[生成模型](/audio-research-portal/papers/?concept=method.generative) → [变分自编码器](/audio-research-portal/papers/?concept=method.vae)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.2/10** | 创新 7.6/10 | 技术严谨 6.4/10 | 实验充分 7.5/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 1.5/10 | 可复现 7.8/10 | 工程/实践 7.2/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Wataru Nakata：The University of Tokyo, Tokyo, Japan；National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
- Yuki Saito：The University of Tokyo, Tokyo, Japan；National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
- Kazuki Yamauchi：The University of Tokyo, Tokyo, Japan
- Emiru Tsunoo：The University of Tokyo, Tokyo, Japan
- Hiroshi Saruwatari：The University of Tokyo, Tokyo, Japan

## 📌 核心摘要

**问题与瓶颈：** 输入为单通道退化双人对话混合音频，目标是恢复 2 路干净的全双工说话人波形，供对话建模与分析直接使用。野外音频同时带有背景音乐、环境噪声、混响、削波、编解码压缩与频带受限等多重退化，且 2 个说话人混叠在同一通道，无法直接用于需要干净分轨的系统。先修复后分离的级联会把重叠语音当作损坏加以抑制，先分离后修复则难以应对重度退化，而现有联合修复分离工作多在干净独白混合上训练，与自然重叠、反向通道与轮替时序差异较大，泛化不足。

**核心思路与方法架构：** 与单轨修复模型 Sidon 相比，实质增量是在自监督语音特征压缩的潜空间中引入说话人解耦与扩散精修，保留编解码重建能力。以 1 秒 24 kHz 输入为例，波形对应 24000 个采样点，先经 w2v-BERT 2.0 提取约 1536 维的高维语音特征，再由两层线性加 ReLU 与变分瓶颈压缩至 D = 32 的紧凑潜变量，序列长度 L 保持不变。条件分支对退化混合提取第 13 层特征并以秩 64 的低秩适配微调，辅助头直接回归 2 路粗潜变量并用排列不变训练解决通道无序问题，扩散 Transformer 将 2 路潜变量拼接为 L × 64 建模说话人间依赖并以 v 预测精修，再由解码器重建 2 路 24 kHz 波形。第一阶段冻结自监督模型并训练编码器与解码器，第二阶段冻结解码器并训练条件特征、低秩适配、辅助头与扩散，推理采用 30 步 DPM-Solver++ 离线生成。

**关键实验与核心代价：** 在 20 秒截断的英语电话集 Switchboard 上，DialogueSidon（D = 32）的词错率（word error rate, WER ↓）为 14.390%，低于重训练 GENESES 的 33.540% 与单轨 Sidon 的 57.470%，官方 GENESES 检查点则为 79.990%。同一设置下人工平均意见分（mean opinion score, MOS ↑）从 GENESES 的 3.482 提高到 3.895，高于 Sidon 的 3.289，但语音质量预测指标 NISQA ↑ 与 DNSMOS ↑ 分别为 3.453 与 3.641，低于 Sidon 的 3.942 与 3.999，呈现客观预测与人工听感背离，人工听测覆盖 120 名听音者而非仅用神经代理指标。在野外集 OpenDialog 上 WER 从 43.790% 降至 13.860%，MOS 从 3.131 提高到 3.708。在德语等 5 个语种的 CallFriend 上伪字符错率同样低于重训练基线。潜维度消融显示 D = 128 时 WER 回升至 22.720%，存在容量过大退化。代价方面，20 秒输入在单张 NVIDIA H100 GPU 上实时率（real-time factor, RTF ↓）为 0.010，低于 GENESES 的 0.604，论文报告约 60.4 倍加速，对应扩散模型 88M 参数与 393M 参数的规模差异。

**适用边界与深读导览：** 结论仅在 2 人单通道场景成立，未覆盖 3 人以上、强音乐掩蔽或极端远场等失效情形，训练目标本身由 Sidon 修复的电话对话构成而非原生干净录音。多语评估依赖伪字符错率与伪语音活动标签，属于相对比较而非绝对可懂度，人工听测仅覆盖英语与野外数据。附带音频示例与在线演示可对照试听分离一致性与残留伪影。欲深究变分目标、排列匹配与 v 预测公式可查阅方法概述和架构，欲核对潜维度、多语种与野外细分可查阅实验结果，复现配置见细节详述。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/sarulab-speech/Sidon> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 野外双人对话为何难以直接用作全双工训练数据

自然对话系统需要建模重叠、简短回应声与轮转时机等现象，而全双工录音为每位说话人保留独立音轨，是分析与训练这类行为的关键资源。现有电话语料规模有限，Fisher 语料为 1,958.5 h，总训练数据为 2,225.9 h，远小于前沿语音生成研究所需的数百万 h 量级。自监督模型 w2v-BERT 2.0 在 450 万 h 语音、143 种语言上预训练，为特征压缩提供基础。电话采集流程成本高且易引入延迟与通道损伤，基于轮流文本驱动的语音合成则缺少自发的重叠与时机变化，难以支撑大规模自然交互建模。

互联网上的对话音频涵盖多样的说话人、风格与交互模式，但直接使用面临两重障碍。录音常混入背景音乐、环境噪声、混响、削波与压缩等退化，同时仅以单声道混合形式存在，缺少分轨信号。恢复可用数据的目标因此必须同时完成质量修复与说话人分离，任何只解决其中一端的方法都无法得到干净的分轨波形。只有联合处理退化与混合，才能把野外录音转化为可用于训练的双轨资源。

已有方法的训练假设与该目标存在偏差。分离模型多在干净独白混合上开发，对会话中的重叠分布、韵律与交互节奏泛化不足。修复模型多面向单说话人，常把重叠语音当作损伤加以抑制。先修复后分离会损伤重叠内容，先分离后修复则难以应对重度退化混合。近期统一修复与分离的研究仍以独白混合为主，未能覆盖野外对话的真实交互特性，因此需要面向双人会话的联合建模。

本文任务可形式化为给定含噪单声道双人混合 \(x\)，恢复对应的干净全双工波形 \(y_{1}\) 与 \(y_{2}\)，其中混合与波形均包含 \(T\) 个采样点，每条波形对应一位说话人。研究聚焦双人情形，模型先把目标信号映射为紧凑潜表征，再从混合输入估计分轨潜表征并解码为波形。DialogueSidon 延续语音修复模型 Sidon 的思路，借助在大规模语音数据上预训练的自监督模型特征压缩与扩散潜预测实现上述映射。后续评测围绕内容保持、录音质量与说话人结构三方面展开，以检验其是否适合构造全双工数据。

### 从单声道混合到双轨波形的两阶段总体思路

DialogueSidon 在开源修复模型 Sidon 基础上扩展到对话场景，核心增量是引入说话人分离能力。模型保留语音自监督表征对内容与声学特性的表达优势，新增变分自编码器压缩与扩散潜变量预测两个环节。前者把高维自监督特征压缩为适合扩散建模的紧凑空间，后者从退化混合中恢复分轨潜表征并解码为波形。输出音频为 24 kHz ，目标是把野外单声道混合直接变为干净的双轨信号。

在进入两阶段细节之前，先用原图对照常规采集与本文目标的输入输出差异。上栏从电话分轨出发经单轨修复，下栏从网络单声道出发经联合分离修复，两者最终都指向全双工双轨。请沿箭头观察中间条形的颜色变化与模块方框的标注文字，注意上方为双色分轨而下方为灰色单声道，下一段将结合像素逐项解释对应关系。

[![原论文 Figure 1：Comparison of current full-duplex dialogue audio acquisition and our goal](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/b3792d35c568/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/b3792d35c568/figure-1.png)

*论文图 1：常规电话分轨修复与网络单声道联合分离修复的目标对比，箭头指示从左向右的数据流向（原论文 Figure 1）。*

像素显示上栏左侧为 2 位手持电话的人物图标，中间为蓝红相间的条形双轨，上方带有粉色锯齿形噪声标记，白色圆角框对应 Sidon 的单轨修复功能，右侧输出仍为蓝红双轨。下栏左侧为浏览器框内的双人对话画面，进度显示为 1:35 / 3:40 ，中间为灰色单声道条形并带有相同噪声标记，浅蓝方框对应 DialogueSidon 的联合分离修复功能，右侧输出与上栏一致的蓝红双轨。中间横线分隔常规流程与本文目标，全部箭头方向均为从左向右。

端到端流程可概括为退化混合输入先经微调的自监督模型得到条件表征，再由辅助头给出粗略分轨估计并确定排列，随后扩散模型联合精修双轨潜变量，最后由冻结解码器重建波形。训练分两阶段进行，第一阶段构建紧凑潜空间，第二阶段学习从混合到分轨的映射。推理时辅助估计与 30 步数值求解器配合，在单张 H100 GPU 上处理 20 秒输入仅需极低耗时。

### 压缩编码与扩散预测如何分工并解决说话人排列问题

第一阶段的语音自监督变分自编码器负责定义紧凑潜空间。干净波形经第 8 层 w2v-BERT 2.0 特征得到中间表征 h ，维度为 L × Dh ，其中 Dh 以 1,536 维为高维示例。两层线性加整流激活与变分瓶颈将其压缩为维度 D 的潜变量 z ，满足 D 小于 Dh ，作为第二阶段的预测目标。解码器与判别器沿用描述音频编解码器结构并结合对抗损失与库尔贝克莱布勒正则，权重系数 β 为 1 × 10−5 ，输出保持 24 kHz 。

为理解冻结与训练模块的分工，请先观察训练总览原图的上下虚线框。上框为潜空间构建，下框为潜变量预测，火焰与雪花图标区分训练与冻结，橙色与蓝色区分潜变量与模型模块。沿从左向右的箭头追踪干净语音与退化混合两条路径，注意条件分支与排列匹配的汇合位置，下一段将结合像素说明各方框的输入输出关系。

[![原论文 Figure 2：Overview of DialogueSidon training. indicates frozen modules and indicates trained modules.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/b3792d35c568/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/b3792d35c568/figure-2.png)

*论文图 2：两阶段训练总览，上框构建压缩潜空间，下框从退化混合预测分轨潜变量并解码（原论文 Figure 2）。*

像素显示上框左侧绿色框为干净语音，下接浅蓝自监督模型框并带有雪花标记，再接两层线性框并带有火焰标记，随后为变分瓶颈白框、橙色潜变量框、浅蓝解码器框与绿色重建框。下框左侧绿色框为退化混合，经带低秩适配器 LoRA 的自监督模型得到橙色条件框，分出辅助头蓝框与排列匹配黄框，顶部先验噪声汇入蓝色扩散框，输出橙色精修变量后再经冻结解码器得到绿色分离波形。雪花表示冻结，火焰表示训练，虚线框区分两阶段。

第二阶段的条件表征 c 来自第 13 层特征并经秩为 64 缩放为 16 的低秩适配器 LoRA 微调，适配位置为每个 Conformer 块前馈网络的末层线性层。辅助头为每条音轨设置独立线性投影，直接从 c 得到粗估计，并以排列不变训练选择最优排列，损失为绝对误差和。同一排列被用于扩散模型的说话人排序，使对齐处理与精修解耦，堆叠后的联合表征维度为 L × 2D ，可建模说话人之间的依赖关系。

以 1 秒 24 kHz 输入为例，波形包含 24,000 个采样点，经自监督模型得到长度为 L 的帧序列，具体帧率原文未披露。潜维度取 D = 32 时单轨为 L × 32 ，双轨堆叠为 L × 64 ，加噪输入与条件及粗估计沿维度拼接后送入隐维度为 768 的扩散变换器 DiT 。训练采用 1,000 步线性噪声表与速度预测目标，权重 λ 为 1.0 ，推理采用 30 步 DPM-Solver++ 求解。第一阶段冻结自监督模型，第二阶段冻结解码器，其余模块参与更新，最终解码得到两路波形。

### 电话语料复原与多重退化如何构造大规模监督数据

训练监督对来自经 Sidon 复原的电话对话语料，包含 Fisher 与 5 种 CALLHOME 变体，复原样本由 48 kHz 下采样至 24 kHz 。这类电话数据提供干净分轨监督，但本身并非野外数据，模型需经人工退化流程泛化到互联网场景。每段对话以不同随机种子重复加噪 4 次，最终得到约 8,902 h 的配对数据。每条音轨以 50% 概率独立施加退化后再按权重混合，权重 w 服从 0.3 至 0.7 的均匀分布。

下表为训练语料的时长统计，表头给出数据集名称与小时数，数值保留一位小数。 Fisher 占比最大，其余 5 种语言各约 40 h 至 80 h ，合计为 2,225.9 h 。该分布说明多语覆盖主要依靠小规模电话对话补充，英语仍占主导，阅读时可先关注总量与 Fisher 的主导地位。

| Dataset | Duration (h) |
| --- | --- |
| CALLHOME German (LDC, 2008b) | 58.1 |
| CALLHOME English (LDC, 2008b) | 76.9 |
| CALLHOME Japanese (LDC, 2008c) | 49.3 |
| CALLHOME Spanish (LDC, 2008d) | 43.6 |
| CALLHOME Mandarin (LDC, 2008a) | 39.5 |
| Fisher (Cieri et al., 2004) | 1,958.5 |
| Total | 2,225.9 |

原表共 8 行 2 列， Fisher 为 1,958.5 h ，德语为 58.1 h ，英语为 76.9 h ，日语为 49.3 h ，西班牙语为 43.6 h ，普通话为 39.5 h ，合计为 2,225.9 h ，分项相加与总计一致。训练时每段对话重复 4 次加噪，时长扩大约 4 倍后得到 8,902 h 量级。该规模为两阶段训练提供了多语监督，但电话带宽与野外互联网声学之间仍存在域差距，需在评测中检验泛化能力。

退化流程依次包含混响、背景噪声、带限、削波、压缩、丢包与混合 7 个环节。混响用房间声学工具模拟，余响时间为 0.1 秒至 1.0 秒，房间边长为 2 m 至 20 m 。噪声池覆盖音频集、音乐与风噪等，信噪比为负 5 dB 至 20 dB 。带限在 8 kHz 至 48 kHz 六档重采样中随机选择，削波按分位数截断，压缩码率为 65 kbps 至 245 kbps ，丢包段长为 20 ms 至 200 ms 。模型侧扩散变换器隐维度为 768 ，共 8 层 12 头，低秩适配器秩为 64 ，两阶段各训练 2 天，硬件为 8 张 NVIDIA H100 GPU 。

### 英语与野外场景中内容保持与听感评价的实际表现

#### 评价口径与电话场景

评测覆盖英语电话、多语电话与野外互联网 3 类场景，以检验域内与域外泛化。 SWB 取 100 段各 20 秒的英语电话， CallFriend 取德语、法语、日语、西班牙语与普通话各 20 段各 20 秒， OpenDialog 取 100 段不足 30 秒的野外音频且不再裁剪。可懂度经 Whisper-large-v3 转写得到，英语与野外用 WER ，多语用伪字符错误率 p-CER 并仅作相对比较。语音活动检测在 SWB 以词时间戳为参考，在 CallFriend 以真值输出的检测结果为伪标签，在野外因缺少分轨与标签而不报告。

人工听测与神经代理的区分是理解结论的前提， DNSMOS 与 NISQA 为机器预测的感知分数， MOS 为人工评分。下表为 SWB 上的人工评分结果，听测招募 120 名评分者，每人评估 12 个样本，每种方法共 360 次评分，量表为 5 分制的录音质量与说话人一致性。对比包含原始含噪录音、单轨修复模型 Sidon 、统一模型 GENESES 与本文方法 DialogueSidon ，数值给出均值与标准差。

| Method | MOS ↑ |
| --- | --- |
| Noisy | 2.815 ± 0.999 |
| Sidon | 3.289 ± 1.167 |
| GENESES | 3.482 ± 1.195 |
| DialogueSidon | 3.895 ± 0.948 |

表中人工评分显示 DialogueSidon 为 3.895 ± 0.948 ，统一模型 GENESES 为 3.482 ± 1.195 ，单轨修复模型 Sidon 为 3.289 ± 1.167 ，原始录音为 2.815 ± 0.999 ，两两差异均达到显著水平。客观方面潜维度 D = 32 时 WER 为 14.39% ，低于重训统一模型的 33.54% ，也低于单轨修复的 57.47% 与原始录音的 60.81% ，而官方检查点高达 79.99% 。在 SWB 上感知代理分数呈现背离，单轨修复以 NISQA 3.942 与 DNSMOS 3.999 领先，本文方法为 3.453 与 3.641 ，说话人相似度 0.887 高于统一模型的 0.853 ，语音活动准确率 0.938 高于 0.923 ，说明人工更认可内容保持而非单纯的降噪感。单轨修复不具备分离能力，其相似度基于单轨混合计算，不宜与分轨结果直接对比。

#### 野外泛化与多语相对比较

多语与野外结果需结合相对指标理解， p-CER 受原始录音识别性能影响，仅反映内容保持的相对优劣。下表为野外数据的定量与听感结果，列包含 WER 、 NISQA 、 DNSMOS 与 MOS ，其中前两者为神经代理，后者为人工评分。多语方面本文方法在德语为 14.70% ，法语为 25.44% ，日语为 48.78% ，西班牙语为 18.72% ，普通话为 59.96% ，均低于重训统一模型的 52.30% 、 61.66% 、 89.11% 、 50.48% 与 124.00% ，日语与普通话超过 100% 源于插入错误导致的相对计数特性。

| Noisy† | — | 3.826 | 3.615 | — |
| --- | --- | --- | --- | --- |
| Sidon† | — | 4.676 | 4.131 | — |
| GENESES (orig) | 74.510 | 3.427 | 3.479 | 2.611 ± 1.157 |
| GENESES | 43.790 | 3.809 | 3.620 | 3.131 ± 1.060 |
| DialogueSidon | 13.860 | 3.568 | 3.598 | 3.708 ± 1.006 |

野外 WER 显示本文方法为 13.86% ，低于重训统一模型的 43.79% 与官方检查点的 74.51% ，为可测方法中的最低值。在 OpenDialog 上感知代理分数则未占优， NISQA 为 3.568 ，低于重训模型的 3.809 与单轨修复的 4.676 ， DNSMOS 为 3.598 ，低于重训模型的 3.620 与单轨修复的 4.131 。人工评分则为 3.708 ± 1.006 ，高于重训模型的 3.131 ± 1.060 与官方检查点的 2.611 ± 1.157 ，差异均显著。未胜出项集中在神经代理感知分数，方差以标准差约 1.0 报告，失效案例与流式延迟等条件原文未评测。

### 潜变量维度与推理速度之间的取舍与未验证因素

潜维度试验显示内容保持随容量先升后降，\(D = 8\) 时 WER 为 16.550%，\(D = 16\) 时为 14.950%，\(D = 32\) 时为 14.390%，\(D = 64\) 时为 15.040%，\(D = 128\) 时升至 22.720%。说话人相似度在前四档稳定在 0.887 附近，语音活动准确率稳定在 0.936 至 0.939，而 \(D = 128\) 时分别降至 0.876 与 0.906，表明过大容量在该配置下有害。分工上自监督变分自编码器先把干净话语压缩为紧凑潜表示，辅助头从含噪混合条件特征直接给出粗略分轨估计并以排列不变训练确定轨序，扩散模型再对堆叠后的双轨潜表示做精细修复并由解码器重建波形。基于该趋势后续试验统一取 \(D = 32\)，兼顾内容保持与稳定性。

评估条件覆盖域内英语电话、多语电话与野外互联网 3 类，英语取 100 段会话并统一截为 20 秒，每种多语取 20 段并同样截为 20 秒，野外取 100 段且因单段短于 30 秒而不截断。内容保持用转写错误衡量，英语与野外用词错误率，多语因部分语言缺少标准正字法转写而用相对意义的伪字符错误率，录音质量用预测平均意见分的客观估计，说话人结构用嵌入余弦相似度与帧级语音活动准确度衡量，主观部分要求试听者佩戴耳机并对录音质量与每轨说话人一致性按 5 分制打分。

官方检查点与重训模型的差距证明会话数据不可或缺，SWB 上官方检查点 WER 为 79.990%，重训后为 33.540%，德语伪字符错误率为 76.700% 降至 52.300%，法语为 86.000% 降至 61.660%。普通话为例外，重训为 124.000%，略高于官方检查点的 120.870%，而本文方法降至 59.960%，仍明显更好。野外数据呈现相同趋势，OpenDialog 上官方检查点为 74.510%，重训为 43.790%，本文方法为 13.860%，表明会话训练对野外泛化同样关键。主观平均意见分同样以本文方法最高，SWB 上为 3.895 分，优于重训模型的 3.482 分与未处理录音的 2.815 分，每种方法共 360 次评分且两两差异显著。

训练用经修复的电话会话语料提供干净分轨监督，总时长为 2,225.9 小时，加噪流程以不同随机种子重复 4 次后得到约 8,902 小时成对数据，每种损伤以 0.5 概率独立作用于单轨再按 0.3 至 0.7 间随机权重混为单声道。大规模构建更看重推理开销，20 秒输入在单张 H100 GPU 上的 RTF 为 0.010，对照方法为 0.604，对应 60.4 倍加速。参数量分别为 88M 与 393M，推理采样分别为 30 步与 100 步，小规模扩散模型可能是效率来源。原文已披露低秩适配秩数为 64，缩放系数为 16，训练扩散步数为 1,000 步，损失权重为 1.0，但未提供各部件的独立消融，因此无法判断各部件的独立贡献。

### 双人假设与电话训练边界下的复现条件与选型建议

结论成立依赖双人假设与电话训练边界，模型仅验证两说话人情形，未涉及 3 人及以上重叠。输出固定为 24 kHz，训练以电话带宽为主，语言覆盖限于英语、德语、法语、日语、西班牙语与普通话。混响、音乐与强压缩等野外退化的组合强度超出训练分布时，内容保持是否稳定尚未验证，流式因果处理与低延迟场景同样未评测。

#### 两阶段分工与执行顺序

第一阶段构建紧凑语音潜空间。冻结的语音自监督模型取第 8 层隐特征，经两层线性映射与非线性激活进入变分瓶颈，压缩为低维潜序列，解码器据此重建波形。该阶段把高维内容与声学特征转为适合扩散建模的紧凑表示，波形重建与判别器沿用高保真声码器结构。特征抽取沿用大规模预训练语音模型，覆盖 143 种语言，波形重建沿用描述音频编解码器的解码器与判别器结构。训练以重建项、对抗项与散度正则共同约束，促使潜变量保留可懂内容并抑制冗余维度。

第二阶段在潜空间完成双轨恢复。退化混合经第 13 层特征与低秩适配器得到条件表示，秩为 64 而缩放为 16，适配器仅作用于前馈网络末层线性层。两组辅助头各自线性投射出粗略双轨估计，经排列不变准则与真值对齐，确定说话人顺序后再沿潜维度堆叠。速度目标定义为信号与噪声的线性组合，条件特征与粗估计及加噪输入沿潜维度拼接后送入变换器。扩散变换器隐维度为 768，共 8 层 12 头，训练用 1,000 步线性噪声计划，推断用 30 步采样器精修，最后由第一阶段解码器还原为两路干净波形。对齐与精修分工分离，减轻了扩散模型的负担。

#### 数据条件与推断代价

训练采用电话对话复原语料，其中 Fisher 语料为 1,958.5 h，德语为 58.1 h，英语为 76.9 h，日语为 49.3 h，西班牙语为 43.6 h，普通话为 39.5 h，合计为 2,225.9 h，四次随机加噪后约 8,902 h。复原样本由 48 kHz 下采样至 24 kHz 后用于训练，输出同样为 24 kHz 双轨波形。退化按混响、背景噪声、带限、削波、压缩、丢包顺序逐轨施加，混合权重在 0.3 至 0.7 间均匀抽取。评测覆盖英语电话、5 种语言电话与野外互联网对话，分别取 100 段、每种语言 20 段与 100 段样本。多语言评测中本文方法在 5 种语言的伪字符错误率上均优于同数据重训对照，发言人相似度与语音活动检测准确率亦多占优。推断在单张 GPU 上处理 20 秒输入，相对耗时为 0.010，对照统一模型为 0.604，对应 60.4 倍加速，参数量为 88M 对照 393M。

工程选型应以内容与结构为首要目标，需要双轨全双工数据时优先考虑本文方法，其在可懂度与人工听感上占优，32 维潜变量在英语电话上取得 14.39% 的 WER，优于同数据重训对照的 33.54%。人工听感评分亦显示双轨输出更受偏好，感知代理分数与人工判断不一致时以后者为准。仅需单轨增强而不分离时可选用单轨修复模型，其在神经代理分数上更高且流程更轻。任何仅依赖感知质量预测分的决策都可能误判，野外无真值时应以人工试听与转写可懂度为准，并先在目标声学条件下小规模验证。论文文末列出试听、代码与演示链接，归属与获取方式需以作者说明为准，权重下载与运行方式同样需查阅原说明文档，训练需 8 张 GPU 各 2 天，复现前应确认算力与存储条件。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入为单声道混合，输出为双轨 24 kHz 波形，训练复原样本由 48 kHz 下采样至 24 kHz，退化含重采样与压缩等，具体帧率与潜序列长度原文未披露。
- **训练与评测数据**：Fisher 为 1,958.5 h，CALLHOME 德语 58.1 h 英语 76.9 h 日语 49.3 h 西班牙语 43.6 h 普通话 39.5 h，合计 2,225.9 h，重复 4 次加噪后约 8,902 h，评测用 SWB 100 段与 CallFriend 各 20 段及 OpenDialog 100 段。
- **算力与训练耗时**：训练使用 8 张 NVIDIA H100 GPU，两阶段各训练 2 天，推理在单张 NVIDIA H100 GPU 上处理 20 秒输入。
- **核心超参数与配置**：优化器为 AdamW，学习率为 1 × 10−5，变分正则权重为 1 × 10−5，扩散权重为 1.0，低秩适配器秩为 64 缩放为 16，扩散变换器隐维度为 768 共 8 层 12 头，训练为 1,000 步，推理为 30 步。
- **推理速度与部署开销**：20 秒输入的 RTF 为 0.010，对照统一模型为 0.604，对应 60.4 倍加速，参数量为 88M 对照 393M，采样步数为 30 步对照 100 步。
- **开源产物与协议状态**：论文文末列出试听、代码与演示链接，第三方提及记录不证明作者资源已持续公开，权重与运行方式需以作者说明为准。
- **附录与补充材料要点**：附录给出混响、噪声、带限、削波、压缩、丢包与混合七步退化的完整参数，未提供额外证明与失效案例分析。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.2/10** | 创新 7.6/10 | 技术严谨 6.4/10 | 实验充分 7.5/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 1.5/10 | 可复现 7.8/10 | 工程/实践 7.2/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:sigdial:2026:conference-paper-id:2026.sigdial-1.1`
- 会议来源：[官方记录](https://aclanthology.org/2026.sigdial-1.1/) · [官方 PDF](https://aclanthology.org/2026.sigdial-1.1.pdf)
- DOI：`10.18653/v1/2026.sigdial-1.1`
- Track：SIGDIAL 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：英语Switchboard上WER从重训练基线33.540%降至14.390%，野外OpenDialog从43.790%降至13.860%且人工MOS显著领先。

- 核心优势：五语种CallFriend均保持内容保持优势，并保留官方检查点负结果与D=128时WER回升至22.720%的容量退化对照。

- 核心优势：在SSL压缩潜空间中以辅助头固定排列、扩散拼接建模说话人依赖，给出VAE、PIT与v预测完整公式与两阶段训练分工。

- 主要短板：训练干净目标实为Sidon修复结果而非原生干净录音，可能传递修复伪影且结论仅限双人单通道场景。

- 主要短板：关键消融仅覆盖潜维度D，缺少确定性回归相对扩散、LoRA秩、条件层号与采样步数的直接对照。

- 主要短板：NISQA与DNSMOS多次与人工MOS排序背离，客观指标未报告显著性且人工听测未覆盖多语种。

---

[← 返回 sigdial-2026 论文汇总](/audio-research-portal/posts/conference-sigdial-2026/)
