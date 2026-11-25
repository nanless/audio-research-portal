---
title: "Phoneme-identity depth profiles do not reliably predict LoRA placement for dysarthric ASR"
date: 2026-11-25
draft: false
tags: [语音识别, LoRA, 表示探测, 语音]
categories: [论文速递]
description: "本文在同一管线下对比 Qwen3-ASR 与 Whisper-small 在 CDSD 与 UASpeech 上的探针深度曲线与四段 LoRA 扫描，证明最优段随编码器翻转而探针最低点恒在深部，三条读曲线定段的启发式全部失效，代价是结论受限于 6 与 5 个测试说话人且需以数小时扫描替代探针。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32455"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "音素探针深度不能可靠预测构音障碍适配的 LoRA 位置"
paper_digest_original_title: "Phoneme-identity depth profiles do not reliably predict LoRA placement for dysarthric ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32455v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32455v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32455v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "LoRA"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文在同一管线下对比 Qwen3-ASR 与 Whisper-small 在 CDSD 与 UASpeech 上的探针深度曲线与四段 LoRA 扫描，证明最优段随编码器翻转而探针最低点恒在深部，三条读曲线定段的启发式全部失效，代价是结论受限于 6 与 5 个测试说话人且需以数小时扫描替代探针。"
paper_digest_reader_sections: [{"heading":"构音障碍适配的关键不是能否微调而是该动编码器哪一段","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"同一配方下换编码器：增量只有两处但信号网格完全不同","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"1 秒音频的张量旅程与三种探针的合法性边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"CDSD 上的四段扫描随编码器翻转而基线能力差距悬殊","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"探针最低点恒在深部而训练量与启发式相继失效","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"扫描替代探针：局限、复现核对与工程选型","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["The Scott-Morgan Foundation, United Kingdom","SMF Labs, 28 rue du Colonel Pierre Avia, 75015 Paris, France"],"name":"Bernard Muller"},{"affiliations":["The Scott-Morgan Foundation, United Kingdom","SMF Labs, 28 rue du Colonel Pierre Avia, 75015 Paris, France"],"name":"LaVonne Roberts"}]
paper_digest_abstract_sha256: "658ca9504ef3a4312cc36e930a8845c38788bb35ffafaf9092f9d7030416dd60"
paper_digest_sidecars: {"citation.bib":{"sha256":"b6b0865bc8fcec32347071940de22249c6eb8ca414f8d24883031876a97ab2b5","url":"/audio-research-portal/client/papers/2026-11-25/2611-32455/citation.bib"},"citation.json":{"sha256":"9b2796f3fe9c4768596143b042f96bf4af031b03ff5f2476bea583163ed226a1","url":"/audio-research-portal/client/papers/2026-11-25/2611-32455/citation.json"},"citation.ris":{"sha256":"776cf15016e45dfe1eaa9b44cb78f62f46deede48bc95a33245319f3779fc421","url":"/audio-research-portal/client/papers/2026-11-25/2611-32455/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e587b68e00102e5aea50254c827d145d20d684c94980cb0ae5c38a796e9a6ce1","url":"/audio-research-portal/client/papers/2026-11-25/2611-32455/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "fb457069ac89c2091010369144543d18479b3ea228541ea29913f34e141dd112"
paper_digest_api_reader_plan_sha256: "5c00ff2abc66bd984e80227f734947fdbf3457dede0f37b3830ecd64801dc796"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9a668551495d2f26d42f11643651ca8906081b4cd2c07d9f52ff40c1313edaeb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f9321a33cf4cbe79c26cff3946c320af4ff25a2545b530e7c39350b1ade91f8c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "299b20e2752270298b5c68e7e754f1215567944c6609d9e2937ed8ce4bf946a3"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "20de289f5d1f13672c2117f1361a516b57f21e55c013e06d31918d2445715c61"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 音素探针深度不能可靠预测构音障碍适配的 LoRA 位置

> 英文题目：*[Phoneme-identity depth profiles do not reliably predict LoRA placement for dysarthric ASR](https://arxiv.org/abs/2611.32455v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 6.3/10 | 技术严谨 8.1/10 | 实验充分 6.8/10 | 清晰度 7.0/10 | 影响力 5.5/10 | 开源 6.0/10 | 可复现 7.8/10 | 工程/实践 6.2/10


## 👥 作者与机构

- Bernard Muller：The Scott-Morgan Foundation, United Kingdom；SMF Labs, 28 rue du Colonel Pierre Avia, 75015 Paris, France
- LaVonne Roberts：The Scott-Morgan Foundation, United Kingdom；SMF Labs, 28 rue du Colonel Pierre Avia, 75015 Paris, France

## 📌 核心摘要

**问题与瓶颈：** 构音障碍语音的自动识别长期不可用，常见做法是在大规模预训练模型上做参数高效微调，而把低秩适配器放在编码器哪一段缺乏依据。已有研究在 12 块 Whisper-small 编码器上探测到音素错误率在中段平稳，据此主张中段适配最有效，这一读法可能被直接搬运到其他架构。困难在于层序号在不同编码器中含义不同，时间分辨率、训练目标与下游解码器都不同，成熟深度相同的表象未必对应相同的最佳适配位置。论文要检验的正是这种从探测曲线读出适配位置的做法能否跨模型成立。

**核心思路与方法架构：** 与最接近的已有基线相比，本文的增量是把跨论文引用换成同一流程内的对照，保留语料、划分、完整性门控与适配配方，只更换编码器，并在第二个语料上重复全部探测与扫描。取 1 秒中文朗读语音为例，声学特征先按约 77 ms 一帧送入 24 块 Qwen3-ASR 音频编码器，得到 25 组隐藏状态，Whisper-small 对应做法是按 20 ms 一帧给出 13 组抽头，两种网格都冻结不动。音素身份探测在每一层独立训练连时分类读出，记录分层音素错误率，难度探测与跨条件余弦距离刻画另一侧信息，而适配阶段只更新所选频段自注意力投影上的低秩增量，解码器全程冻结。低频段覆盖 1 块至 8 块，中频段覆盖 9 块至 16 块，高频段覆盖 17 块至 24 块，全编码器适配作为三倍参数的对照，这种安排直接检验成熟深度是否决定适配收益。

**关键实验与核心代价：** 在中文朗读语料 CDSD 的 5,388 条留存测试语音上，Qwen3-ASR 的高频段取得 CER（字符错误率，越低越好 ↓）29.88%，优于全编码器适配的 31.19%，差值 -1.31 个百分点，95% 区间为 [-2.16，-0.25]，而 Whisper-small 在相同划分上呈现相反排序，全编码器 53.56% 优于高频段 56.95%，交互项为 -4.71 个百分点，区间为 [-6.17，-2.89]。四条探测曲线最低点都落在相对深度的 83% 至 92% 之间，频段排序完全相同，无法解释上述位置差异，三种从曲线到频段的读法在四个模型与语料组合中最多只对一格，跟随最优启发式平均仍损失约 2.27 个百分点。在英文孤立词 UASpeech 的 3,798 条测试语音上，两个模型都不偏好高频段，Qwen3-ASR 低频段甚至比不适配差 9.90 个百分点，区间不含零。一次四频段扫描在 CDSD 上约需 12 小时至 14 小时 GPU 时间，在 UASpeech 上不足 2.5 小时，探测提取与训练合计需数小时，这是直接扫描相对探测推测要付出的显性代价。

**适用边界与深读导览：** 结论成立的前提是同一语料、同一划分与同一配方下的对照，跨语料并不成立，CDSD 上的反转在 UASpeech 上消失，6 位与 5 位测试说话人使所有区间都宽，Qwen3-ASR 高频段优于全编码器的结论只在微平均下成立，在说话人等权下不再成立。浅层适配对声学非典型说话人有害，表现为流利但与音频无关的替代文本，而非长度膨胀，论文把语言先验接管只表述为机制假设。想深究探测对适配的失效细节，可对照分层探测曲线、四格适配扫描与遗憾值量化，复现所需的划分、随机种子与冻结解码细节论文与仓库已披露。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/SMF-Labs/encoder-depth-dysarthric-asr> — 链接可访问（HTTP 200）；README 已验证包含安装、推理文档（未见微调文档）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 构音障碍适配的关键不是能否微调而是该动编码器哪一段

构音障碍语音识别的困难不在于解码器不够强，而在于如何用极少的数据把基座模型拽到病理语音分布上。低秩适配器 LoRA 因此常见，但具体该动编码器的哪一段长期缺乏论证。Muthu 等人曾给出一条看似有机制的路线：在 12 块 Whisper-small 编码器上逐层训练音素身份 CTC 探针，发现音素错误率在中段后趋平，据此把适配器放在中段 5-8 块与单层 7 ，结果接近全编码器适配，而上段 9-12 较弱。其 v2 报告中段 68.64 与 66.21 对全块 64.35 CER ，相对差距 6.67% 与 2.89% ，未适配基线 89.98 CER 。这条中段最优的结论此后很容易被当作通用建议引用。

层索引在不同编码器中含义并不相同。深度、时间分辨率、训练目标与下游解码器同时变化：Whisper-small 是 12 块、 20 ms 帧、文本解码器直连，而 Qwen3-ASR 音频塔是 24 块、约 77 ms 帧、经投影接入大语言模型解码器。顶层承受的压力不同，音素信息成熟的深度也可能不同，照搬层号会把文献建议变成误导。本文的假设起初是放置差异来自成熟深度差异，但后半被自己的测量推翻：在统一管线下两者的探针最低点都落在深部，深度 profile 并不能解释放置差异。

检验沿两个正交轴展开。一是固定数据换编码器：同一中文 CDSD 语料、同一划分与完整性门控、同一 LoRA 配方与种子纪律下，对比 24 块 Qwen3-ASR 与 12 块 Whisper-small ，差异只能归于编码器整体而非单一结构因子。二是固定编码器换语料：在英文孤立词 UASpeech 上重复同样的 4 段扫描与双探针，该语料在语言、内容类型与严重度标签上全部不同。4 个模型与语料组合的探针最低点均在相对深度 83% 至 92% 之间，而适配最优段却随格子变化。本文不比较哪个基座更强，也不声称探针指导是新想法，只检验跨模型移植与 3 条自然启发式是否成立。

### 同一配方下换编码器：增量只有两处但信号网格完全不同

与最近基线的实质增量只有两处，保留的部分更多。保留的是 Muthu 的探针结构、适配对象与分段逻辑：CTC 音素探针、只动编码器自注意力 q_proj 、 k_proj 、 v_proj 与 out_proj 、按比例划分下中上 3 段。替换的是编码器与测量方式：把 12 块 Whisper-small 换成 24 块 Qwen3-ASR-1.7B 音频塔，帧周期从 20 ms 放粗到实测约 77 ms ，隐维从 768 增至 1024 ，并把跨论文引用曲线换成同一管线下的自测曲线。信号规格上，Qwen3-ASR 标称 128 维滤波器组 8 倍下采样约 12.5 Hz ，实测每秒 12.5 至 13.2 帧；CDSD 适配清单为 33,617 训练、 8,682 验证与 5,388 测试 utterance ，说话人按 31 、 7 与 6 划分，探针与适配共用该划分以保证可比。

下表把 4 种适配变体放在同一参数预算下比较，是理解后文放置与容量争论的前提。3 段等预算各占 32 个适配器张量与 4,194,304 可训练参数，约占模型 0.205% ，全块则为 96 个张量与 12,582,912 参数，约占 0.614% 。训练耗时在 3.12 至 3.54 h 之间，合并差异已逐段校验，避免了适配器静默失效导致各段看似相同的陷阱。

| Variant | Encoder blocks | Modules | Trainable params | % of model | Train hours |
| --- | --- | --- | --- | --- | --- |
| lower | 1–8 | 32 | 4,194,304 | 0.205% | 3.25 |
| middle | 9–16 | 32 | 4,194,304 | 0.205% | 3.16 |
| upper | 17–24 | 32 | 4,194,304 | 0.205% | 3.12 |
| all | 1–24 | 96 | 12,582,912 | 0.614% | 3.54 |
| base | — | 0 | 0 | 0% | — |

该预算设计把放置与容量解耦了一半：下段 1-8 、中段 9-16 与上段 17-24 在参数量上完全对齐，分别是 12 块编码器上 1-4 、 5-8 与 9-12 的比例类比，全块则多出 3 倍容量。因此上段优于全块不能直接读作放置胜利，还需预算匹配对照。解码统一走模型自带推理路径并合并适配器，中文按字切分计 CER ，英文孤立词同时报告 WER 与 CER ，所有对比均在说话人内配对后用自助法形成区间。

### 1 秒音频的张量旅程与三种探针的合法性边界

#### 编码器时间网格与抽头定义

取 1 s 中文朗读作为贯穿例子。128 维滤波器组经 8 倍下采样后，Qwen3-ASR 编码器名义 token 率为 12.5 Hz，实测在 0.40–9.40 s 的 5 个 CDSD 语句上为每秒 12.5–13.2 帧，即每帧约 77 ms，1 s 对应约 13 帧；若按名义 80 ms 计算，后文亚帧比例只会更加极端，因此统一采用实测值以避免低估问题。Whisper-small 则为 20 ms 一帧，1 s 对应约 50 帧，时间分辨率约为前者的 4 倍。该差异不是实现细节，而是决定亚帧比例的第一性因素，也为全节提供了统一的时间标尺，使不同编码器的帧数可以直接对比。任何跨编码器的帧级比较都必须先对齐这一网格，否则结论必然混淆表征与采样。

Qwen3-ASR 共返回 25 个隐状态，索引 0 为卷积后输入，1-24 为块输出，每帧 1024 维；Whisper-small 对应 13 个抽头，即嵌入输出加 12 个块输出。两者深度相差 1 倍，宽度为 1024 维对 768 维，前者含 16 个注意力头与 4096 维前馈并向语言模型解码器投影为 2048 维，后者接文本解码器，下游压力不同。需要强调的是 0 号状态已是卷积之后，此前不存在更细粒度的可抽头位置，因此分辨率限制无法靠更换抽头绕开。该对应关系沿用先前工作的层号惯例，适配带亦按块序号命名，上带即 17–24 块，便于跨研究直接比较。

#### 探针执行分工与训练过程

探针 B 问音素身份能否被 CTC 读出，读出结构为层归一化接 128 维瓶颈与残差时域卷积后再接线性分类器，逐层独立训练。优化器为 Adam，学习率 1e-3，批量 256，10 轮，梯度裁剪 1.0，丢弃率 0.3，空标签偏置为 0.0，损失为 CTC 损失，以声调敏感 PER 选型，同时记录声调无关 PER 作对照。训练用 6,200 条，即 31 个训练说话人每人 200 条，验证用 7 个未见说话人，测试用 6 个未见说话人，绝对数值因数据量不同不可与先前约 39,000 条的研究直接比较，只比较随深度的形状。UASpeech 上则换成基于发音词典的 ARPAbet 音素，每个抽头跑 3 个种子并报告均值与波动，单位与切分保持一致。

探针 C 问基座模型自身难度的可解码性，对均值池化后的编码器状态做三分类线性 Softmax，损失为交叉熵，优化器同样为 Adam，学习率 1e-3，批量 4096，10 轮。评估采用说话人 disjoint 五折交叉验证，若随机划分则探针可能记住说话人身份而非难度本身，指标为 macro-F1，机会水平 0.333。难度标签来自基座解码自身的 CER 分布，因无更强且未污染的中文解码器，只能定义为对通用模型而言的难。由于分布存在 2,267 条恰为 0.0 与 2,853 条恰为 1.0 的大质量点，直接按分位数会塌缩为 2,943、5,503 与 354 条，故在自然断点处分层，高难为 CER 大于等于 1.0，低难为小于 0.2，得到 2,813、2,780 与 3,207 条，3 层均值分别为 0.024、0.531 与 1.061，层间分离良好且与临床标签无关。

边界探针 A 未运行，因为在该网格上逐帧二分类已不是良定义问题。半数音素短于一帧，任何帧级边界 F1 刻画的都是网格而非表征，论文明确放弃跨编码器比较该指标。这不是否认表征中没有亚帧 timing 信息，池化或带容差的表述仍可检验，只是帧级写法不可比。身份探针不受此限，99.9% 语句满足目标长度不大于输入帧数，中位帧数与音素数之比为 3.47，对齐充足；语句级难度与跨条件 pooled 分析同样不需要时间分辨率，因此几何前置只否决了边界探针的合法性，而保留了其余探针。

#### 几何分布与适配推理链路

几何前置条件决定了哪些探针合法。CDSD 强制对齐基于 21,251 个音素、2,640 条语句与 44 个说话人，分布为下四分位之前均为 30 ms，中位音素 80 ms，上四分位等为 140、230 与 300 ms，均值 110.4 ms。在 20 ms 网格下仅 1.3% 音素短于一帧，短于 2 帧者占 28.6%，平均每音素 5.52 帧；在实测约 77 ms 网格下 49.4% 音素短于一帧，77.8% 短于 2 帧，平均仅 1.43 帧。两组数字的对比说明，同一语料在不同网格下的可观测性完全不同，因此帧级边界 F1 在 Qwen3-ASR 上刻画的是网格而非表征，论文明确放弃跨编码器比较该指标。

训练侧 LoRA 取 r 为 64、α 为 128、丢弃率 0.1、AdamW 学习率 3e-5、有效批量 128、6 轮余弦调度与权重衰减 0.03。适配对象为选定 8 个块的 4 个投影，即 q_proj、k_proj、v_proj 与 out_proj，其余权重与整个解码器冻结，梯度只流入被选块的适配器，且从未适配的基座出发，不存在微调基础上的 2 次适配。全块适配不是全参数微调，而是在全部 24 个块上加低秩矩阵，基座权重本身从不直接更新。3 个八块带共享完全相同的可训练预算 4,194,304 参数，占模型 0.205%，全块则为 12,582,912 参数，占 0.614%，训练耗时分别为 3.25、3.16、3.12 与 3.54 小时。训练前经干跑核对模块数，训练后合并差异确认每个适配器只触及本带，没有跨带污染，且 33,617 条训练语句全部成功读取。

推理侧合并适配器后走自带路径，在 5,388 条未见语句与 6 个未见说话人上解码，中文按字切分计 CER，不记为 WER，因为中文没有词边界，字级编辑率本身即为 CER。Whisper 侧加重复控制与时长自适应截断以消除循环导致的插入膨胀，即 no_repeat_ngram_size 为 3、束宽为 5 并按时长缩放最大输出长度；此前在平均 2.4 s 语句上用固定 200 token 的贪心解码会放大循环插入，而固定小预算又会在最长 18.3 s 与 19.5 s 语句上制造删除。适配器合并后经自带推理链解码，6 个测试说话人的配对比较可抵消说话人难度差异，评估同时报告逐说话人、微平均与宏平均，并用 B 为 10,000 的自助区间与留一敏感性补充。

数据划分与完整性门控是执行链的一部分。说话人划分固定为 31 个训练、7 个验证与 6 个测试，探针的 8,800 条与适配的 47,687 条共用该划分以保证可比，其中训练、验证与测试分别为 33,617、8,682 与 5,388 条。1 h 子集共 55,851 条，因无真实音素去掉 7,720 条，因缺 TextGrid 去掉 444 条，合计去掉 8,164 条约 14.6%，保留 47,687 条。剔除率随严重度轻微上升，轻、中、重分别为 10.1%、14.3% 与 15.4%，保留集平均时长 2.37 s 而剔除集仅 1.59 s，说明短与空录音是主因。门控对所有带与基线完全相同，故不会凭空制造带间差异。

跨条件对比采用匹配分布而非严格匹配语句，37 个说话人提供条件重合成，39 个健康对照提供无条件合成，44 个真实说话人提供原始端，每人约 400 条取均值后算余弦距离，并用 411 条严格配对子集作一致性校验。3 个训练种子为 42、43 与 44，所有区间均为说话人与种子联合重采样，探针曲线本身仍为单轮，故只论带而不论具体层。3 个八块带的参数量经干跑核对完全一致，合并差异张量数分别为 32、32、32 与 96，排除了静默挂载失败导致各带实为同一基座的风险，使带间排序可归因于位置而非容量或实现事故。

### CDSD 上的四段扫描随编码器翻转而基线能力差距悬殊

#### 上段在 Qwen3-ASR 数值最优但仅部分可分辨

先看 24 块模型在中文朗读上的 4 段扫描，这是全文的主结果锚点。下表统一了块索引、参数量与微平均 CER ，3 段等预算而全块为 3 倍容量，未适配基线为确定性单次评估 32.06% 。中重度分层同时给出，但严重度标签是 CER 衍生而非临床标签，只能读作难度代理，所有适配条件均跑 3 个种子并报告均值与标准差。

| Variant | Blocks | Params | Micro CER |
| --- | --- | --- | --- |
| base (no adaptation) | — | 0 | 32.06 |
| lower | 1–8 | 4.19 M | 35.52 ± 1.15 |
| middle | 9–16 | 4.19 M | 30.71 ± 0.31 |
| upper | 17–24 | 4.19 M | 29.88 ± 0.36 |
| all | 1–24 | 12.58 M | 31.19 ± 0.37 |

数值排序为上段 29.88% 、中段 30.71% 、全块 31.19% 、基线 32.06% 与下段 35.52% ，上段在 3 个种子中均为最低。3 种子离散显示下段标准差达 1.15 ，上段与中段仅 0.36 与 0.31 。说话人与种子联合自助 B 为 10,000 给出上段减全块负 1.31 ，区间负 2.16 至负 0.25 不含零，而上段减中段负 0.83 ，区间负 2.06 至正 1.86 含零；对基线的 4 个对比区间全部含零，说明能说上段优于部分策略，但不能说适配本身显著优于不适配。

#### 换编码器后最优段翻转且上段垫底

同一清单、划分、门控、配方与种子纪律换到 12 块 Whisper-small ，结论不再是上段最优。下表报告同一 5,388 条未见说话人 utterance 上的 CER ，基线经重复控制后为 77.57% ，远弱于 Qwen3-ASR 的 32.06% ，因此绝对值不可跨模型比较，只能比较段间排序与配对差值及其区间是否含零。

| Variant | CER | vs unadapted |
| --- | --- | --- |
| unadapted base | 77.57 | — |
| all (1–12) | 53.56 ± 0.01 | −24.01 |
| middle (5–8) | 55.16 ± 0.13 | −22.41 |
| lower (1–4) | 56.28 ± 0.07 | −21.29 |
| upper (9–12) | 56.95 ± 0.08 | −20.61 |

该格排序为全块 53.56% 、中段 55.16% 、下段 56.28% 与上段 56.95% ，上段恰为最差，与 Qwen3-ASR 的赢家位置完全对调。全块减上段负 3.40 ，区间负 5.03 至负 1.84 ，在微平均、宏平均与精确符号翻转检验下均可分辨，未调整精确 p 为 0.031 ，已达 6 说话人下限；全块减中段负 1.60 ，区间含零。种子标准差仅 0.01 至 0.13 ，比 Qwen3-ASR 侧小一个量级，但基线能力差距仍是未被控制的混杂。

#### 归一化并排把交互摆到台面上

把两侧扫描按各自基线归一化并排，能直观看出交互而非各自最优。下图左侧为 Qwen3-ASR ，右侧为 Whisper-small ，纵轴为相对未适配的 CER 百分比，柱上印绝对 CER ，空心圆为单个测试说话人，虚线为不适配。若只看一侧会误以为上段或全块天然更好，并排才显示最优段随编码器翻转。

[![原论文 Figure 4：Four-band LoRA sweep on CDSD, same manifest, split, gate, recipe, parameter budget and seed…](https://arxiv.org/html/2611.32455v1/fig4_band_placement.svg)](https://arxiv.org/html/2611.32455v1/fig4_band_placement.svg)

*论文图 4：CDSD 四段扫描按各自基线归一化的并排柱状与逐说话人分布（原论文 Figure 4）。*

左侧橙色柱为上段 29.88% ，是唯一明显低于虚线的最优，下段 35.52% 高出虚线，意味着浅层适配不如不适配；右侧橙色柱为全块 53.56% ，上段 56.95% 为四者最高。两侧基线 32.06% 对 77.57% 的差距提醒读者纵轴不可直接比较高度，只能比较柱间排序与圆点分布。CDSD_08 在两侧均为异常点，保留该说话人使适配对基线的增益被拉平，这正是后文留一说话人分析保留它的理由。

### 探针最低点恒在深部而训练量与启发式相继失效

#### 四格最低点恒在深部而适配结论随格子变

若成熟深度决定放置，两条探针曲线应一中一晚并各自指向本模型赢家。下图把 33,617 条训练 utterance 下的两条音素错误率曲线画在相对深度轴上，空心标记为各自最低点，浅带跨过两者，比较的是形状而非绝对 PER ，因为词表、门控与材料不同使绝对值不可比。

[![原论文 Figure 2：Tone-sensitive phoneme error rate against relative encoder depth, both architectures at matched…](https://arxiv.org/html/2611.32455v1/fig2_depth_profiles.svg)](https://arxiv.org/html/2611.32455v1/fig2_depth_profiles.svg)

*论文图 2：两架构音素错误率随相对深度的深部最低点与浅带跨度（原论文 Figure 2）。*

两条曲线都在深部触底：Whisper-small 在 12 块中第 10 层约 83% 处， Qwen3-ASR 在 24 块中第 22 层约 92% 处，从中点到最低点仍有约 10.14 与 14.03 个百分点的增益，不存在中段平台。四格探针最低点全部落在 83% 至 92% 之间，3 个比例段的均值排序均为上段最低而下段最高，且最低层在种子间移动 1 至 2 块，不亚于跨语料移动。因此近乎常量的深度统计量无法选择随格子变化的最优段。

#### 训练量制造的尾部差异与 3 条启发式的代价

早期的跨架构差异可能是探针训练量不足的假象。下图左右分别为 6,200 与 33,617 条训练 utterance 下的同一对曲线，标注为各自最低点到末层的回升幅度，优化轮数固定为 10 轮因而数据量与步数联动，比较的是尾部形状的稳定性而非数据效率机制。

[![原论文 Figure 3：The same two depth profiles at two probe-training volumes.](https://arxiv.org/html/2611.32455v1/fig3_volume_artefact.svg)](https://arxiv.org/html/2611.32455v1/fig3_volume_artefact.svg)

*论文图 3：两种探针训练量下尾部回升幅度的收缩与最深层敏感性差异（原论文 Figure 3）。*

小数据下 Whisper-small 尾部回升 6.56 ， Qwen3-ASR 仅 1.85 ，看似架构差异；大数据下回升变为 2.07 对 1.82 ，差异收缩至 0.25 。原因是 Whisper-small 最深层对训练量最敏感，增益 9.15 为全栈均值 4.88 的 1.87 倍，而 Qwen3-ASR 最深层增益 2.25 仅为均值 3.03 的 0.74 倍。3 条启发式为此付出代价：最陡改善选下段，平均后悔 9.60 ，在 UASpeech 上最高达 19.10 ；最低段均值与拐点选上段为主，平均后悔 2.27 与 2.65 ，各自仅在一个格命中。

#### 跨语料复制与跨条件距离的联合诊断

跨语料对比把放置是否随语料变摆到台面上。下表为 Qwen3-ASR 在 CDSD 与 UASpeech 上的配对差值与说话人与种子联合区间，负值偏向前者，正值偏向后者， n.s. 表示区间含零。两语料内容、语言与标签体系完全不同，绝对 CER 不可比，只能比较差值方向与是否可分辨。

| Comparison | CDSD Δ (95% CI) | UASpeech Δ (95% CI) |
| --- | --- | --- |
| upper − middle | −0.83 [−2.06, +1.86] n.s. | −2.21 [−4.37, −0.39] |
| upper − lower | −5.64 [−10.87, −2.43] | −17.44 [−24.44, −10.05] |
| upper − all | −1.31 [−2.16, −0.25] | +1.66 [−0.51, +4.46] n.s. |
| upper − base | −2.18 [−6.78, +4.60] n.s. | −7.54 [−11.53, −3.83] |
| lower − base | +3.46 [−3.74, +12.26] n.s. | +9.90 [+5.17, +14.97] |

两语料一致的是上段优于下段与中段优于下段，区间均不含零；分歧的是上段对全块， CDSD 为负 1.31 ，区间负 2.16 至负 0.25 ， UASpeech 为正 1.66 ，区间负 0.51 至正 4.46 含零。上段对中段在 UASpeech 为负 2.21 可分辨而 CDSD 为负 0.83 不可，下段对基线在 UASpeech 为正 9.90 可分辨而 CDSD 含零。因此参数效率结论只在单语料成立，全块在 UASpeech 上数值最优而在 CDSD 上不是。

探针的另一半是跨条件距离与难度编码，它们决定了除音素身份外还有什么可被读出。上图上半为构音障碍与说话人条件重合成语音的余弦距离随层变化，实线为 411 对严格配对，深色虚线为分布近似；下半为难度探针 macro-F1 随层变化，误差棒为五折标准差。两面板共享横轴层索引，纵轴分别为距离与 F1 。

[![原论文 Figure 1：Upper: cross-condition representational distance (1 - cosine) between dysarthric and…](https://arxiv.org/html/2611.32455v1/fig1_divergence_difficulty.svg)](https://arxiv.org/html/2611.32455v1/fig1_divergence_difficulty.svg)

*论文图 1：跨条件距离中段达峰后坍缩与难度探针深部最强的双面板曲线（原论文 Figure 1）。*

上半在第 11 层达峰 0.1218 后向输出端坍缩至 0.0577 ，峰谷比 2.11 倍，3 个敏感性分析同样在 11 层达峰后下降 2.1 至 3.7 倍，与文献中随深度上升的结论相反；合成语音间距离全程小一个量级，峰值仅 0.0116 。下半从 0.421 单调升至第 24 层 0.646 ，折标准差随深度收紧，是唯一复现的先验发现。结合音素曲线看，上三分之一在抽象掉说话人与合成痕迹的同时继续锐化语言内容，符合接入语言模型解码器的预期。

### 扫描替代探针：局限、复现核对与工程选型

约束首先是人数：CDSD 仅 6 个测试说话人，UASpeech 仅 5 个，边际区间宽达 30 至 54 个百分点，只有配对差值可解释，精确检验下限 0.031 使多重校正后无一可分辨。其次是门控与能力混杂：完整性门控移除 14.6% utterance ，重度移除率 15.4% 高于轻度 10.1% ，且基线 32.06% 对 77.57% 的能力差距未被控制，2x2 预算匹配中两个放置对比区间均含零。CDSD 探针单轮、拐点阈值在 2% 至 10% 间移动两格预测、膝点规则已被作者撤回，这些都说明 1.5 个百分点左右的段间差在种子可移动范围内。

复现核对需分清三件事：代码与聚合结果当前可用，单提交 4ea79e2 含划分、种子、逐说话人分数、自助与精确检验代码、探针 CSV 与冻结解码规格；适配权重、音频、转写、对齐与逐条预测均未发布，需向托管方申请。耗时上探针阶段不足 2 h ，匹配量抽取 Qwen3-ASR 侧 73 GB 约 41 min 、 Whisper-small 侧 107 GB 约 1.7 h ，单变体 CDSD 约 3.1 至 3.5 h 而 UASpeech 不足 0.6 h ，4 段扫描约 12 至 14 h 与不足 2.5 h 。陷阱是推理必须走自带路径，通用模板在重叠集上给出 124.57% 对 32.38% ，且 rank 为 192 的合并须在 CPU 上执行。

工程上应以短扫描替代探针定段：3 段等预算加全块共四跑，直接回答本模型本语料的最优段，探针即使跑在语料上也未挽回预测力。可优先试上段而非下段与中段，该排序在两语料上最稳；但上段对全块只在 CDSD 可分辨，UASpeech 上点估计反向且区间含零，不可当作通用推荐。浅层适配在 Qwen3-ASR 的 UASpeech 上比不适配差 9.90 ，在 Whisper-small 上则轻微有益，因此切勿假设浅层无害。复现第一步应先跑回归清单验证解码，再补留一说话人与说话人等权重估计，并报告逐说话人结果以暴露对非典型说话人的集中损伤。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：Qwen3-ASR 标称 128 维滤波器组 8 倍下采样约 12.5 Hz ，实测每秒 12.5 至 13.2 帧约 77 ms 每帧； Whisper-small 为 20 ms 每帧； CDSD 中位音素 80 ms 均值 110.4 ms ；采样率细节、码率、因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：CDSD 中文 1h 子集 55,851 条中保留 47,687 条， 44 说话人按 31 、 7 与 6 划分，适配训练 33,617 条验证 8,682 条测试 5,388 条； UASpeech 英文 449 词表实得 15 说话人按 8 、 2 与 5 划分，测试 3,798 条；探针训练 6,200 条与匹配量 33,617 条， UASpeech 探针训练 5,979 条
- **算力与训练耗时**：单工作站 GPU ， GB10 统一内存； Qwen3-ASR 单变体 CDSD 约 3.12 至 3.54 h ， UASpeech 约 0.53 至 0.60 h ， Whisper-small 在 UASpeech 单变体约 0.36 至 0.55 h ；探针抽取与扫描合计为数小时至十余小时量级
- **核心超参数与配置**：LoRA 作用于编码器自注意力 q_proj 、 k_proj 、 v_proj 与 out_proj ， r 为 64 ， α 为 128 ，丢弃率 0.1 ， AdamW 学习率 3e-5 ，有效批量 128 ， 6 轮余弦调度权重衰减 0.03 ； 2x2 中 α 取 2r ；探针 CTC 与线性 Softmax 均为 Adam 学习率 1e-3 批量 256 与 4096 各 10 轮
- **推理速度与部署开销**：适配器合并后经自带推理路径解码； Whisper 侧用束宽 5 与 no_repeat_ngram_size 3 及时长自适应截断；上段参数 4,194,304 全块 12,582,912 ； RTF 、延迟、吞吐与显存原文未披露
- **开源产物与协议状态**：代码与聚合结果当前可用，含划分、种子、逐说话人分数、自助与精确检验代码、探针 CSV 、参数计数与冻结解码规格及回归清单；音频、转写、对齐、逐条预测与适配权重未发布，需向语料托管方申请
- **附录与补充材料要点**：附录含解码敏感性、留一说话人、微平均与宏平均及精确检验对比、浅层失效个案与 19 条局限；探针量敏感性、基线能力混杂与未复现中段平台列为开放问题；早期合成分析因来源问题已移除

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32455v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同一语料同一配方下跨架构对照呈现CDSD反向已分辨交互-4.71pp且三种估计量一致，为核心因果证据。

- 核心优势：三种探测到频段映射均被证伪并量化遗憾，作者主动撤回曾提出的膝点规则，诚实度高。

- 核心优势：三种子联合自助10000次与等参容量2×2分离位置与容量混杂，冻结解码与合并核查排除伪影。

- 主要短板：Qwen3-ASR高频段优于全编码器仅微平均成立，等权下-0.98区间含零且p=0.156，测试仅6位与5位说话人区间宽。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
