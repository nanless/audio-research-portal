---
title: "Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition"
date: 2026-11-28
draft: false
description: "针对类别不确定时确定标签易误导的问题，该工作把输出扩展为类别加置信度加拟声描述并用冻结编码器加可训练投影与分类实现，在 31 个类别子集上保持约 98% 可比精度的同时，拟声模板在偏好对比中以 94.4% 与 73.7% 胜出，代价是模板刻板与不贴切拟声会损害自然度且效果依赖检索准确率。"
tags: ["多模态学习", "检索增强", "主观评测", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "误识别还是抽象化：用置信度与拟声词重塑声音事件识别输出"
paper_digest_original_title: "Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-82"
paper_digest_workbench_source_sha256: "2a07640e4d8f2257d465b732440ea73aa596afae04875b23e8e53bc59e062804"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tomida_82.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对类别不确定时确定标签易误导的问题，该工作把输出扩展为类别加置信度加拟声描述并用冻结编码器加可训练投影与分类实现，在 31 个类别子集上保持约 98% 可比精度的同时，拟声模板在偏好对比中以 94.4% 与 73.7% 胜出，代价是模板刻板与不贴切拟声会损害自然度且效果依赖检索准确率。"
paper_digest_reader_sections: [{"heading":"当声音听不清时，为何只输出确定标签会丢失关键信息","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"类别加置信度加拟声词的三档输出如何随可靠程度切换","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结双编码器后，投影器与分类器如何共用同一音频嵌入","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"识别精度保持可比，而拟声输出在偏好对比中占优","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"模板短板与人工听测如何修正大语言模型评价的乐观程度","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"在什么前提下拟声输出值得用，复现与选型又该注意什么","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Kyoto University, Japan"],"name":"Naoya Tomida"},{"affiliations":["The University of Tokyo, Japan"],"name":"Yuki Okamoto"},{"affiliations":["Kyoto University, Japan"],"name":"Keisuke Imoto"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"14af06b08459cc1d7cecca5e75f09766eb92e9c5b598db92c3e3864c22484712","url":"/audio-research-portal/client/papers/2026-11-28/conference-59a306843feaf69e82f5c337/citation.bib"},"citation.json":{"sha256":"2a512050df17c8d20577ebac6f976baaa1f6f0a7ee2cba239158330adeeeaecf","url":"/audio-research-portal/client/papers/2026-11-28/conference-59a306843feaf69e82f5c337/citation.json"},"citation.ris":{"sha256":"58157804a2af66af2deeb5548f8eca0766f775830208cd7585ba9cb831819bac","url":"/audio-research-portal/client/papers/2026-11-28/conference-59a306843feaf69e82f5c337/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"78dd11e23357e95125f758a2f689ce6b017fa509bc46ae04a1548bda9a5f1e4e","url":"/audio-research-portal/client/papers/2026-11-28/conference-59a306843feaf69e82f5c337/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-82"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tomida_82.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e332b63ecf5e2d0de17005c6236d3d40f71b522ba8ae09f6a1fc1e34d536ff4b"
paper_digest_api_reader_plan_sha256: "3b4ea478f250e17b99950702b803bc573ce6be28a1d5bebad3e5b1f6eedf1855"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "81d3523b0af06d18a1822187193816d074d7eb8624e6898ae0a3c1c4920b2bf8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6aacccb1387e56b40545caefe4fa950a965aba801858cee88e39c869a9e5a916"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bde9d43bba011f6840395190faeb533b966a86ad38569fbabaeb440df069ade6"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b785189d47b9fbf9a9c5e7d494079f0c35ce6b8b792ebf2046504c62cad79c6f"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 误识别还是抽象化：用置信度与拟声词重塑声音事件识别输出

> 英文题目：*Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-82`
> Track：P3-9




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tomida_82.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[检索增强](/audio-research-portal/papers/?concept=method.retrieval-augmented)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.5/10 | 实验充分 7.2/10 | 清晰度 7.0/10 | 影响力 5.6/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Naoya Tomida：Kyoto University, Japan
- Yuki Okamoto：The University of Tokyo, Japan
- Keisuke Imoto：Kyoto University, Japan

## 📌 核心摘要

**问题与瓶颈：** 常规声音事件识别以整段音频为输入，输出单一声音事件类别标签，隐含假设目标类别可被正确辨认。输入经对数梅尔谱等时频变换后映射为类别对数几率，再经 Softmax 或 Sigmoid 与阈值判为离散标签，其余声学细节被丢弃。在真实聆听中声源常不明确，人即使无法命名类别仍能借助拟声描述理解环境并采取行动，如听到巨响而不知确切来源时用类似爆炸的拟声提醒他人。现有路线把误识仅视为待降低的错误，未回答低置信时应输出什么，导致不确定下仍给出武断标签。

**核心思路与方法架构：** 与最接近的同编码器纯分类基线相比，本文保留音频编码器与分类头，增量是冻结对比语言音频预训练 (contrastive language-audio pretraining, CLAP) 双编码器并增加拟声文本投影器与最近邻拟声检索，使同一音频同时产出类别、置信度与拟声描述。以 16 kHz 输入为例，音频经 1024 点窗与 480 点跳提取为 64 维对数梅尔谱，送入分层 Token 语义音频 Transformer (Hierarchical Token Semantic Audio Transformer, HTS-AT) 得到音频嵌入，文本侧由 RoBERTa 得到拟声嵌入并经 3 层多层感知机投影器对齐。训练冻结双编码器，仅以均方误差拉近配对音频与投影后拟声嵌入，并以交叉熵训练分类器，两项以权重 1.0 相加。推理用前两类 Softmax 概率的归一化差作为边距置信度，用欧氏距离检索候选拟声，再按示例阈值 0.5 与 0.2 切换模板，或把三元组交由大语言模型组织为自然语句，从而在高置信保留类别断言、低置信退为声学抽象。

**关键实验与核心代价：** 在 ESC-50 中 31 类子集的官方五折交叉验证下，每折重复 10 个随机种子，微平均 F 值 (Micro-F, 越高越好 ↑) 为常规基线 97.81 ± 0.66% 与本文方法 98.54 ± 0.51%，宏平均 F 值 (Macro-F, 越高越好 ↑) 为 97.80 ± 0.66% 与 98.52 ± 0.51%，数值略高但作者定性为相当，未声称最优。为模拟不确定，对话评估将训练轮数调至两系统准确率约 85%，大语言模型裁判的平均意见分 (mean opinion score, MOS, 越高越好 ↑) 显示本文模板自然度为 3.87 ± 0.36 分，高于标签直出的 2.91 ± 0.31 分和大语言模型改写的 3.71 ± 0.55 分，丰富度为 3.97 ± 0.61 分，高于 1.78 ± 0.47 分和 2.04 ± 0.25 分，有用性为 4.39 ± 0.87 分，高于 3.96 ± 1.08 分和 4.06 ± 0.27 分。两两偏好中本文模板以 99.8% 优于标签直出，以 73.7% 优于大语言模型改写，大语言模型改写以 94.4% 优于标签直出。310 位参与者的众包听音在每种方法 1240 个样本上得到相近趋势，丰富度为 3.70 ± 1.01 分，高于 2.92 ± 1.18 分和 3.26 ± 1.05 分，有用性为 3.69 ± 1.05 分，高于 3.56 ± 1.16 分和 3.62 ± 1.04 分，自然度为 3.69 ± 1.05 分、3.62 ± 1.07 分与 3.63 ± 1.02 分，基本持平。主导收益来自拟声补充的声学细节，代价是过长或不匹配的拟声会损害自然度，低置信下缺失候选类别有时被认为用处不足，且对齐退化条件放大了检索误差。

**适用边界与深读导览：** 结论成立于 31 类环境声闭集分类与候选集内拟声检索，未覆盖开放词汇、重叠事件定位与实时机器人部署，模板阈值与 ChatGPT 5.5 middle 裁判均为示例性设计且裁判未听输入音频，人工评分方差大于模型裁判并存在个体偏好差异。本文未提供可核对的推理时延与计算开销，拟声不匹配时的退化已在原文讨论。欲深究对数几率到置信度的归一化差、投影器均方误差与分类交叉熵联合目标及检索式，可查阅下文方法概述和架构，消融与主客观对照可查阅实验结果中两张表格及相邻分析。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/Y-Okamoto1221/ESC-50-Onomatopoeia> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 当声音听不清时，为何只输出确定标签会丢失关键信息

通用声音识别希望从环境声中判断周围发生了什么，常见任务包括声音事件识别、音频标注以及带定位与检测的扩展，输出多为离散的类别标签。自动音频描述与音频问答虽然生成自然语言，仍以事件类别及其时序共现为依据。长期以来，这类系统默认输入中的目标类别可以被正确辨认，失败仅被视为需要通过结构、特征或数据来降低的错误。这种假设在真实聆听中并不总是成立，却很少有人讨论当类别无法确定时系统究竟应该输出什么。

为了看清常规做法的信息瓶颈，可以先沿着第一幅流程示意追踪一次完整判断。左侧输入一段波形，中间经过识别模型与类别指派，顶部还有一个面向多标签的判定阈值，右侧只剩一个狗的图标与类别名。这种从连续声音到单一离散标签的收缩，正是后文要改造的起点。

[![原论文 Figure 1：Conventional output of SER system](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-1.png)

*论文图 1：常规识别流程示意：波形经模型与类别指派后只剩单一标签（原论文 Figure 1）。*

该示意用蓝色波形表示音频输入，中间两个实线方框分别为识别模型与类别指派，外层大框标明常规系统边界。上方虚线框给出判定阈值，下方箭头依次连接输入、模型、指派与输出，右侧虚线框内是狗的卡通图标与类别文字。整个路径没有保留置信度与声学细节的分支，一旦最高分对应错误类别，错误标签就会被直接呈现，用户无法得知判断是否可靠。本次收到像素顶部混入作者单位行与左侧相邻栏残留，底部题注仅剩上半截，但主体流程仍清晰可辨。

形式上，输入声学信号先变为时频特征 \(X\)，维度记为频率维 \(D\) 与时间帧数 \(T\)，常用语谱图或对数梅尔语谱图。识别函数输出对数几率向量 \(y\)，类别数为 \(C\)，再经归一化或逐类挤压得到分数。单标签取最高分对应类别，多标签则保留超过阈值 \(ϕ\) 的全部类别。分数虽能反映相对高低，却不是经过校准的正确概率。拟声词等模仿性表达提供了另一条线索，能够在类别不清时仍描述时频形态，但以往检索、转换与生成工作很少回答低置信度下应如何呈现输出。

### 类别加置信度加拟声词的三档输出如何随可靠程度切换

新设计保留常规类别预测，同时并列给出置信度分数与拟声描述，使输出在类别不确定时仍有信息量。与仅训练分类头的常规做法相比，改动集中在两处，一是引入面向拟声文本的映射分支，二是按置信度切换最终表述形式。信号规格沿用原文披露的 16 kHz 采样与 64 维对数梅尔语谱图，窗长为 1,024 点，跳长为 480 点，目标是在 31 个类别子集上完成分类与检索。

三档话术共用同一组识别与检索结果，只是类别断言的语气与拟声词的位置随可靠程度变化。高置信度时先肯定类别再补充拟声，例如先说是狗再补一句像 Bow wow。中置信度时前置拟声并弱化断言，例如先说像 Bow wow 再猜测可能是狗。低置信度时不再给出候选标签，只描述听到了何种拟声声音。这种分档避免在不可靠时断言错误标签，也为模板拼接与大语言模型组织语言留出统一接口。

原文给出的一套模板以 0.5 与 0.2 为分界，高于或等于 0.5 时同时给出类别与拟声，介于 0.2 与 0.5 之间时弱化类别断言并前置拟声，低于 0.2 时只描述拟声。这套模板易于实现，但容易重复刻板。更灵活的做法是将预测标签、置信度分数与拟声词一并交给对话系统中的大语言模型，由模型组织成自然回复。两种方式区别仅在于最后的语言包装，识别与检索部分完全相同。

### 冻结双编码器后，投影器与分类器如何共用同一音频嵌入

实现上沿用预训练的对比语言音频预训练模型，音频编码器采用分层词符语义音频变换器，文本编码器采用 RoBERTa，检查点为 630k-audioset-best.pt 非融合版本。音频与拟声文本本应落在同一联合嵌入空间，但原检查点见过的拟声文本不足，因此在文本侧增加一个多层感知机实现的投影模块。训练时两个编码器冻结，仅更新投影模块与分类器，这种冻结边界使声学表征保持稳定，只学习拟声侧的映射与类别分界面。

第三幅总览图把双路编码、联合空间与双头输出画在一条横向流程中，适合对照张量走向阅读。上面一路从音频波形进入音频编码器，下面一路从 Bow wow 文本进入文本编码器与投影模块，中间汇入同一嵌入空间，再分别走向分类器与检索器。注意雪花与火焰图标的含义，它们标明了冻结与更新的分界。

[![原论文 Figure 3：Overview of implementation of proposed method](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-3.png)

*论文图 3：双编码器加投影器的实现总览：冻结编码器，可训练投影与分类（原论文 Figure 3）。*

像素中左右各有两个蓝色标题，左侧为音频输入与文本输入，右侧为声音事件类别与拟声词。音频编码器与文本编码器右上角均有雪花标记，表示参数冻结，投影模块与分类器右上角为火焰标记，表示参与训练。中间虚线框为联合嵌入空间，绿色圆点代表音频嵌入，橙色三角代表文本嵌入。以 1 秒输入为例作教学估算，16 kHz 采样约得 16,000 个样点，按 1,024 点窗长与 480 点跳长约得 32 帧左右，特征形状约为 64 维乘以 30 余帧，具体帧数取决于补齐方式，原文未披露补齐与嵌入维度细节。本次像素底部题注仅剩顶部残留，但双路流程与图标均清晰可辨。

下表汇总原文披露的训练配置，可据此核对复现时的网络层数、宽度、权重系数与优化器选择。投影模块与分类器均采用三层结构，每层宽度在表中给出，损失权重与优化器也一并列出。这些细节决定了映射项与分类项的相对强度，以及冻结边界之外的可训练参数规模，阅读时可对照上一段的冻结说明。

| Network for MLP and classifier | 3 dense layers |
| --- | --- |
| # units in MLP and classifier layers | 512, 256, 128 |
| λ | 1.0 |
| Optimizer | AdamW [17] |

表中三层结构宽度依次为 512、256 与 128，损失权重 \(λ\) 取 1.0，优化器为 AdamW。训练目标由拟声映射项与分类项相加而成，前者为音频嵌入与投影后文本嵌入的均方距离，后者为常规交叉熵，权重系数平衡两者。推理时分类器给出类别与基于前 2 名概率差的置信度 \(s\)，检索器在候选拟声集合中寻找欧氏距离最小的一项，再按置信度选择模板或交由大语言模型组织语言。

### 识别精度保持可比，而拟声输出在偏好对比中占优

评测建立在 ESC-50 的 31 个类别子集上，共 1,240 个音频样本，每个样本配 150 条拟声标注，合计 186,000 对音频拟声组合。实验沿用官方五折划分，每折重复 10 个随机种子，结果以均值加减标准差报告，分数越高越好。为保证公平，常规系统与新系统共用同一音频编码器与分类头，前者仅用分类损失训练，后者联合训练映射分支与分类器，超参均预先确定，未用评测划分调参。

#### 识别精度对比

下表给出基础识别能力的直接对比，指标为微平均 (Micro-F score) 与宏平均 (Macro-F score)，均为越高越好。两行分别对应仅用分类器的常规做法与增加拟声分支的新做法，后者在命名上多了拟声后缀。阅读时先看两列分数的绝对位置与标准差范围，再看增加分支是否带来损失，这决定了后文偏好结论是否以牺牲精度为代价。

| Method | Micro-F score | Macro-F score |
| --- | --- | --- |
| CLAP + classifier | 97.81 ± 0.66 | 97.80 ± 0.66 |
| CLAP + onoma. |  |  |
|  | 98.54 ± 0.51 | 98.52 ± 0.51 |
| (Proposed) |  |  |

常规做法取得 97.81% 微平均与 97.80% 宏平均，新做法取得 98.54% 微平均与 98.52% 宏平均，符号后为跨折与多种子下的标准差。新做法数值略高且标准差区间高度重叠，原文据此判断为可比，而非显著超越。这一结论成立的前提是完整精度的五折设定，若换成后文为模拟不确定而故意降至约 85% 的训练轮数，绝对分数会明显走低。

#### 输出模板与偏好对比的像素证据

为理解后文偏好评价所用的话术差异，需先看清新输出按置信度分档的具体措辞。左侧仍是蓝色波形输入，中间是识别模型与输出生成，上方有两个置信度阈值负责分流，右侧自上而下排列高、中、低三档话术。狗与 Bow wow 的例子贯穿三档，只是类别断言的语气与拟声词的位置随置信度变化。

[![原论文 Figure 2：Example of proposed output representation of SER system remains unclear.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-2.png)

*论文图 2：新输出按置信度分三档：高断言类别，中弱化猜测，低只给拟声（原论文 Figure 2）。*

像素层面，左侧虚线框内是双峰状蓝色波形，中间实线框从左到右为识别模型与输出生成，外层大框标明新系统边界。上方虚线框标注输出控制参数与两个阈值符号，箭头指向输出生成。右侧 3 个虚线框分别以橙色标题区分高、中、低置信度，高档先肯定是狗再补充像 Bow wow，中档先说像 Bow wow 再猜测可能是狗，低档只说听到了 Bow wow 声。这种设计避免在不可靠时断言错误标签，也为模板与大语言模型两种落地方式留出接口。本次像素底部题注仅剩顶部残留，三档话术文字完整可读。

在降级条件下，评价者不再只看标签对错，而是比较 3 种话术，场景设定为面向环境理解的陪伴机器人，标准为表述自然度、声音描述丰富度与交流有用性，音频本身不直接交给大语言模型评价者。下一幅横条图展示两两偏好比例，横轴为偏好比例，纵轴为 3 组对照，颜色区分胜负双方，阅读时先看横轴方向与每条总和是否为 100%。

[![原论文 Figure 5：Pairwise preference scores for SER output representations, obtained using LLM-as-a-judge](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/852689ca6caf/figure-4.png)

*论文图 4：两两偏好横条：改写话术胜直接标签，拟声模板胜其余两种话术（原论文 Figure 5）。*

条形显示 3 条横条总和均为 100%，第一条为两种常规话术之间对照，大语言模型改写的标签话术以 99.8% 胜过直接输出标签的约 0.2%，说明仅做语言包装已大幅改善观感。第二条中新模板以 94.4% 胜过直接标签的 5.6%，第三条中新模板以 73.7% 胜过改写话术的 26.3%。拟声模板仅在后两条直接参比并获胜，第一条不含拟声模板，三者经传递可排出先后，但不能说拟声模板在 3 组中直接参比均占优，第三组优势收窄也提示语言包装本身有价值。本次像素底部图题仅剩首行顶部，不影响 3 条横条读取。

### 模板短板与人工听测如何修正大语言模型评价的乐观程度

除两两偏好外，原文还用 5 分制平均意见分 (MOS) 从自然度、丰富度与有用性三项分别打分，评价者包括大语言模型与众包人工。人工部分招募 310 名参与者，先听输入音频再评对应输出，共覆盖 1,240 个样本乘以 3 种做法，筛除 3.2% 明显错误作答。新做法在两类评价中均采用最简单的模板实现，且处于映射质量被故意拉低的降级条件下，因此结果反映的是下限而非上限。

#### 大语言模型打分细节

下表为大语言模型评价者给出的三项平均分，行是 3 种做法，列是自然度、丰富度与有用性，数值越大越好。两种常规做法分别为直接输出标签与经大语言模型改写的话术，新做法为带拟声的模板。阅读时重点看丰富度一列的拉开幅度，以及自然度是否同步提升，这能揭示拟声信息的主要贡献。

| Method | Naturalness | Richness | Usefulness |
| --- | --- | --- | --- |
| CLAP + classifier (event label) | 2.91 ± 0.31 | 1.78 ± 0.47 | 3.96 ± 1.08 |
| CLAP + classifier (LLM) | 3.71 ± 0.55 | 2.04 ± 0.25 | 4.06 ± 0.27 |
| CLAP + onoma. (template) | 3.87 ± 0.36 | 3.97 ± 0.61 | 4.39 ± 0.87 |

直接标签在自然度、丰富度与有用性上依次为 2.91、1.78 与 3.96，改写话术为 3.71、2.04 与 4.06，带拟声模板为 3.87、3.97 与 4.39，符号后均为标准差。新做法在三列均为最高，丰富度从 2.04 跃升至 3.97 为最强收益，自然度与有用性也有提升但幅度较小。大语言模型评价的标准差普遍小于人工，它未直接听到音频，对拟声与声音是否匹配并不敏感。

#### 人工听测打分细节

下表为人工听测的对应打分，结构与上一表相同，但评价者直接听到原声，因而对拟声是否贴切更为挑剔。人工打分的离散程度通常更大，个体偏好差异也会显现。阅读时除看均值排序外，还需看标准差是否超过 1.0，以及自然度一列是否仍保持优势，这正是检验大语言模型评价是否乐观的关键。

| Method | Naturalness | Richness | Usefulness |
| --- | --- | --- | --- |
| CLAP + classifier (event label) | 3.69 ± 1.05 | 2.92 ± 1.18 | 3.56 ± 1.16 |
| CLAP + classifier (LLM) | 3.62 ± 1.07 | 3.26 ± 1.05 | 3.62 ± 1.04 |
| CLAP + onoma. (template) | 3.63 ± 1.02 | 3.70 ± 1.01 | 3.69 ± 1.05 |

人工结果中直接标签为 3.69、2.92 与 3.56，改写话术为 3.62、3.26 与 3.62，带拟声模板为 3.63、3.70 与 3.69。丰富度与有用性仍以新做法最高，但三者差距明显缩小，自然度三者几乎持平。标准差均在 1.0 以上，远大于大语言模型评价。原文还指出过长重复的拟声会损害自然度，不贴切的拟声反而拉低描述质量，低置信度下完全不给候选标签有时被认为不够有用，这些都是未胜出项与失效模式。

### 在什么前提下拟声输出值得用，复现与选型又该注意什么

上述偏好结论成立依赖若干具体前提，一是类别集合仅覆盖 31 类环境声，二是偏好与打分均在识别准确率约 85% 的降级条件下取得，三是拟声候选来自固定集合的最近邻检索而非开放生成。若回到接近 98% 的完整精度，低置信度样本稀少，拟声的增益可能难以显现。原文未验证流式分块、实时延迟与嘈杂远场等部署条件，也未报告检索失败时的回退策略，因此在机器人连续聆听或强噪声场景中的表现仍属未知。

复现层面，信号处理与网络配置披露较完整，包括采样率、语谱图维度、窗跳参数、编码器型号、投影与分类器宽度、损失权重与优化器。计算硬件、训练轮数与耗时原文未披露，拟声候选集的规模与文本编码细节也未完全展开。公开状态方面，原文未说明系统代码与模型权重是否提供下载，仅在脚注给出拟声数据集网址，该第三方链接当前可达，但不代表整套系统可直接运行。读者若试听演示，应对照同一音频下直接标签、改写话术与拟声模板的差异，重点听拟声与原声是否贴合，而非仅看文字是否流畅。

工程选型上，若应用以环境理解为目标且允许不确定表达，带拟声的输出更值得考虑，尤其在丰富度与有用性要求高时。若追求最自然的单句，模板的刻板感可能抵消收益，此时可将标签、置信度与拟声一并交给大语言模型组织语言，并控制拟声长度以免冗余。无论哪种落地，拟声检索的准确率都是关键，不贴切的拟声宁可弱化或省略。总体而言，该工作把误识别重新理解为抽象层次的切换，用置信度决定说得多确定、用拟声补足说得多具体，为不确定下的声音传达提供了一种可复用的输出思路。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 采样，64 维对数梅尔语谱图，窗长 1,024 点，跳长 480 点，一秒约 32 帧，输出按 0.5 与 0.2 双阈值切换三档话术，延迟与 RTF 原文未披露
- **训练与评测数据**：ESC-50 中 31 个类别子集，共 1,240 个音频样本，每个样本 150 条拟声标注，合计 186,000 对音频拟声组合，官方五折划分，每折重复 10 个随机种子，超参预先确定未用评测划分调参
- **算力与训练耗时**：原文未披露训练所用 GPU 型号数量与训练步数耗时，仅说明使用预训练检查点与冻结编码器策略
- **核心超参数与配置**：投影与分类器均为三层全连接结构，宽度 512、256、128，损失权重 1.0，优化器 AdamW，音频编码器为 HTS-AT，文本编码器为 RoBERTa，检查点 630k-audioset-best.pt 非融合版本，降级评价时轮数调至准确率约 85%
- **推理速度与部署开销**：推理时分类器输出类别与前两名概率差置信度，检索器按欧氏距离取最小拟声，模板直接拼接或交由大语言模型组织语言，参数量与延迟显存原文未披露
- **开源产物与协议状态**：原文未披露系统代码与模型权重公开状态，仅在脚注给出 ESC-50-Onomatopoeia 数据集网址，该第三方链接当前可达，不代表整套系统可直接运行
- **附录与补充材料要点**：原文未披露附录证明与补充细节，参考文献覆盖设备监测生态评估等多任务背景，失效分析集中在正文对过长重复与不贴切拟声的讨论

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.5/10 | 实验充分 7.2/10 | 清晰度 7.0/10 | 影响力 5.6/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-82`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Tomida_82.pdf)
- Track：P3-9

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：冻结HTS-AT与RoBERTa双编码器并以均方误差加交叉熵联合训练投影器，公式与冻结边界完整自洽。

- 核心优势：在ESC-50中31类子集官方五折每折10种子下验证附加拟声对齐未损害分类且作者未夸大为最优。

- 主要短板：对话评估依赖约85%降质对齐且ChatGPT裁判未听音频，阈值0.5与0.2未经论证且自然度主客观背离。

- 主要短板：未报告显著性检验与分细类混淆误差分析，人工评分方差大而仅比较均值趋势且无跨数据集泛化。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
