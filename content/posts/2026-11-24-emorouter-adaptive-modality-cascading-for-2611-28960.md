---
title: "EmoRouter: Adaptive Modality Cascading for Multimodal Emotion Recognition"
date: 2026-11-24
draft: false
tags: [语音情感识别, 动态计算与早退, 不确定性估计与校准, 多模态情感极性分析]
categories: [论文速递]
description: "针对固定模态又贵又不稳的问题，EmoRouter 用三层级联与共形集合收缩自动选预算，在 4 套基准与 3 个 Omni-LLM 上以 67.9% 到 94.5% 的延迟节省持平或超越全模态，而 MOSI 等文本极强场景仍是例外。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28960"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "EmoRouter：用共形集合大小逐句选择模态"
paper_digest_original_title: "EmoRouter: Adaptive Modality Cascading for Multimodal Emotion Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28960v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28960v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28960v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"method","id":"method.uncertainty-estimation","label":"不确定性估计与校准"},{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对固定模态又贵又不稳的问题，EmoRouter 用三层级联与共形集合收缩自动选预算，在 4 套基准与 3 个 Omni-LLM 上以 67.9% 到 94.5% 的延迟节省持平或超越全模态，而 MOSI 等文本极强场景仍是例外。"
paper_digest_reader_sections: [{"heading":"固定模态又贵又不稳：文本、音频与视觉的逐句分歧","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三层级联与共形预测：用集合大小表示不确定性","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"分层校准、级联退出与收缩选预算","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"主结果：在更低延迟下持平或超越全模态","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"预算、层设计与跨模型迁移：收益从何而来","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现要点与何时值得尝试","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["University of Maryland, College Park"],"name":"Fangxu Yu"},{"affiliations":["University of Maryland, College Park"],"name":"Lingzhi Yuan"},{"affiliations":["University of Illinois Chicago"],"name":"Dehai Min"},{"affiliations":["University of Illinois Urbana-Champaign"],"name":"Tao Feng"},{"affiliations":["University of Illinois Urbana-Champaign"],"name":"Ge Liu"},{"affiliations":["University of Maryland, College Park"],"name":"Furong Huang"},{"affiliations":["Mohamed bin Zayed University of Artificial Intelligence"],"name":"Tianyi Zhou"}]
paper_digest_abstract_sha256: "5ada58a4842fad45a5f4bd114f291d3827b8a640af484e1805f8f7cbaaf6ad39"
paper_digest_sidecars: {"citation.bib":{"sha256":"aba0126586c480d0b54898ea8020fbff2bca0e19ff791c5fbf9611366fd26de4","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28960/citation.bib"},"citation.json":{"sha256":"b0d474ed916aedb37d97e64fba68cdf3eee77b7c239c846ccb2135d03a807b5b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28960/citation.json"},"citation.ris":{"sha256":"27f6d6ceacb4d8aeaee29cddc2f2c8bc5c5c413a995e8edbfa893c5df8c6fdc3","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28960/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5a55648a16ebacbbbd24273bee819da61fc5e698219c80cdddb2b9cf002dad02","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28960/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "18d051928893c6c64132cd695e8b73a94963af7dfb851dfb2bc6e5686f251874"
paper_digest_api_reader_plan_sha256: "c14a606f00cc716c2c9752e2be01a16a0684b83dfd2f0d9b75902a172f0773ca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "268dae10a77274f90385010d2ba369a73c54be243f768a9cff00e879d74c486a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "8bcb06f901124f994dd56cdd7478a0b206b1d1ed36619b0f9760acc0b4884b68"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "499de67fd7c6180f19a55872d16cdf9c7e63581e349cd5087af2f51778574043"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ddedcb125ff48d405e6cedd085b2ce400539a323ed76167d2dfd1222316f90ff"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 EmoRouter：用共形集合大小逐句选择模态

> 英文题目：*[EmoRouter: Adaptive Modality Cascading for Multimodal Emotion Recognition](https://arxiv.org/abs/2611.28960v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)；[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)；[不确定性估计与校准](/audio-paper-digest-blog/papers/?concept=method.uncertainty-estimation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.7/10** | 创新 7.6/10 | 技术严谨 6.9/10 | 实验充分 8.3/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 6.0/10 | 可复现 7.5/10 | 工程/实践 7.9/10


## 👥 作者与机构

- Fangxu Yu：University of Maryland, College Park
- Lingzhi Yuan：University of Maryland, College Park
- Dehai Min：University of Illinois Chicago
- Tao Feng：University of Illinois Urbana-Champaign
- Ge Liu：University of Illinois Urbana-Champaign
- Furong Huang：University of Maryland, College Park
- Tianyi Zhou：Mohamed bin Zayed University of Artificial Intelligence

## 📌 核心摘要

**问题与瓶颈：** 多模态情绪识别要为对话中每个话语判断情绪类别，输入是文本转写、音频波形和视频画面，输出是 IEMOCAP 的 6 类情绪、MELD 的 7 类情绪或 MOSEI 与 MOSI 的正负情感。全模态大模型把三者一起送入模型能利用互补线索，但代价很高：在 MELD 上 Qwen3-Omni-30B 的文本层平均只需 91 个输入词元和 0.21 s，加入音频后增至 144 个词元和 0.38 s，再加入全量视觉上下文后膨胀到 1 311 个词元和 4.12 s，全模态比纯文本慢 19.6 倍。更麻烦的是固定模态组合在不同话语上成败不一：约 45.8% 的话语在 3 个层级上都能判对，25.7% 只在某个特定组合下判对，28.4% 在所有层级都判错。增加模态并不总是改善与标注的一致性，例如该模型在 MELD 上全模态加权 F1 为 59.0，反而低于纯文本的 60.3。因此逐话语固定使用全模态既浪费计算，还可能推翻原本正确的文本判断。

**核心思路与方法架构：** 与需要训练专用路由器的最近工作不同，EmoRouter 保持全模态大模型参数 frozen 不更新，只用免训练的级联与自动预算选择实现逐话语早退。系统按文本 T、文本加音频 T+A、文本加音频加视觉 T+A+V 共 3 级依次运行，累计成本为已执行层级耗时之和。每一非终止层级用共形预测的预测集大小衡量不确定性：非一致性分数取 \(s(x,y)=1-\hat{\pi}_y(x)\)，在校准集上取 \(\lceil (n+1)(1-\alpha_{\ell})\rceil/n\) 分位数得到阈值 \(\hat{q}_{\ell}\)，测试时保留满足 \(\hat{\pi}^{(\ell)}_y(x) \ge 1-\hat{q}_{\ell}\) 的标签构成集合 \(\mathcal{C}^{(\ell)}_{\alpha_{\ell}}(x)\)。若集合至多含 1 个标签则直接输出该层最高概率类别并退出，空集回退到最高概率类别，否则升级到下一模态，最终层无条件输出全模态最高概率类别。为自动确定各层错误预算，集合收缩准则在校准集上计算仍活跃样本从一层到下一层的平均集合缩小量并取跨层平均，在 \(\{0.1, 0.3, 0.5, 0.7, 0.9\}\) 网格中搜索使收缩最大的 \((\alpha_1^*, \alpha_2^*)\) 用于推理。这套机制直击前述根因：文本已自信的话语在第一层退出以省去视觉编码，对残留歧义才支付音频乃至视觉成本。

**关键实验与核心代价：** 在 IEMOCAP、MELD、MOSEI 和 MOSI 共 4 个基准与 Qwen2.5-Omni-7B、Qwen3-Omni-30B-A3B-Instruct（下文简称 Qwen3-Omni-30B）及 MiniCPM-o-2.6 共 3 个骨干上的 12 组设置中，以加权 F1（weighted-F1，wF1，越高越好 ↑）、延迟降低比（Latency Reduction Ratio，LRR，越高越省时 ↑）和时间效用（Time Utility，Utime，表中记为 Ut，越高越好 ↑）评测，EmoRouter 在 11 组取得最高 Ut，并在多数设置上达到或超过全模态 wF1。例如 Qwen2.5-Omni-7B 在 IEMOCAP 上 EmoRouter 为 46.1 对全模态 40.8，高出 5.3 个绝对点而 LRR 为 83.1%，在 MELD 上为 63.6 对 61.2 而 LRR 为 87.1%，在 MOSEI 上为 61.0 对 60.2 而 LRR 为 91.9%，整体 LRR 区间为 67.9% 至 94.5%。关键消融显示固定预算要么过度升级，\(\alpha=0.1\) 在 IEMOCAP、MELD 和 MOSEI 上 LRR 明显低于收缩准则选择，要么退化为纯文本路由，\(\alpha=0.5\) 或 0.9 在 MELD、MOSEI 和 MOSI 上 Ut 为 0.0，收缩准则在 Qwen3-Omni-30B 的 4 个数据集中 3 个取得最高 Ut，仅在 MOSI 上被固定 \(\alpha=0.1\) 超过。在第 2 层退出仍需支付第 1 层加第 2 层耗时，但由于视觉层最贵而音频层仅为全模态约十分之一耗时，平均仍省去大部分延迟；跨模型直接复用源模型标定的分位数阈值而无需目标端重标定，在 MELD 上甚至提升小模型 wF1。

**适用边界与深读导览：** 结论成立依赖校准集与测试集可交换假设且收缩准则在校准集上选优后不再保留形式化覆盖保证，50 至 100 个标注话语即可使 wF1 稳定在全量校准的 ±0.5 以内，而 25 个样本时分位数估计仍不稳定。当文本单例自信但错误或音频把模糊文本推向错误单例时，提前退出会错失后续纠正，MOSI 这类转写已含明确评价词的影评数据上音频与视觉增益有限，层级设计需随数据集调整。若要深究阈值构造与收缩平均可看下文第 3.3 至 3.4 节公式 2 至 9 与算法 1，若要核对主对比与消融可看表 1 与表 4，若要理解早退风险可看附录 E 的失败案例与路由诊断。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/tianyi-lab/EmoRouter> — 链接可访问（HTTP 200）；README 已验证包含安装、推理文档（未见微调文档）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 固定模态又贵又不稳：文本、音频与视觉的逐句分歧

多模态情绪识别要求为对话中每一句话判定情绪，线索分散在文本词句、韵律语调与面部表情之中。近年全模态大语言模型把文本、音频与视觉统一送入同一模型，避免了为每个数据集训练专用图或注意力融合结构，也省去大量标注成本。但统一输入把代价推高，音频波形与视频帧展开成词元后长度远超文本，逐句全量调用难以承受。更关键的是固定模态并不稳定，追加模态有时挽回标注，有时反而推翻正确结论。

#### 对照例子看到的翻转

为建立直觉可先看论文给出的左右对照例子，左侧话语仅靠文本与音频都判错，只有加入视觉才与标注一致，右侧话语只看文本已经判对并可跳过后续模态。下面一段结合图中置信度与延迟条说明翻转现象，解释为何逐句选择模态比固定输入更合理，这种样本级分歧正是路由设计的起点，2 例共用同一模型只留下模态组合的影响。

[![原论文 Figure 1：Prediction outcomes vary across modality configurations in MER.](https://arxiv.org/html/2611.28960v1/illustration.png)](https://arxiv.org/html/2611.28960v1/illustration.png)

*论文图 1：左右对照例子显示模态组合如何翻转结论，右侧跳过音频与视觉并节省延迟（原论文 Figure 1）。*

左例文本为 Why do I take so long to answer，模型在文本层给出 Surprised 且与标注不符，置信度为 45%，加入音频后转为 Angry 仍不符，置信度升至 67%，只有加入视觉后才给出 Joyful 并与标注一致，置信度达 96%。右例文本为 Love is the best medicine，文本层直接给出 Happy 且正确，置信度达 99%，图中以 Skip 标示跳过音频与视觉，下方延迟条显示文本层低而全模态层高，中间节省区间被明确标出，形成鲜明对照。

#### 开销与正确模式的统计

在 MELD 上用 Qwen3-Omni-30B 测得的开销印证了浪费，平均输入从文本层的 91 个词元增至文本加音频层的 144 个词元，推理时间从 0.21 s 增至 0.38 s，而全模态层骤增至 1,311 个词元与 4.12 s，约为文本层的 19.6 倍。文本加音频层比全模态快 10.8 倍，说明音频是相对廉价的中间层，视觉才是主要负担，选择性激活才能兼顾精度与效率。

按各层是否与数据集标注一致划分，45.8% 的话语在 3 层全对，文本已足够，25.7% 的话语仅在单个或特定组合下才对，选对组合才能挽回，28.4% 的话语 3 层全错，升级模态也无法挽回。此时全模态加权 F1 为 59.0，反而低于文本的 60.3，说明追加模态会推翻正确结论。目标因此是为每句话选择最早够用的层，使总耗时最小且精度不低于全模态。

### 三层级联与共形预测：用集合大小表示不确定性

EmoRouter 把输入固定为文本、文本加音频与文本加音频加视觉 3 层递增顺序，运行代价逐层增大，因为音频波形与视频帧要编码成大量词元。若在第 2 层退出则累计付出前两层耗时，依此类推。与最近的训练式二选路由不同，本文方法免训练，直接在全模态大语言模型上运行，不把非文本转成字幕，也不在目标模型上重校准，保留了原模型的预测分布，只增加集合判断。

#### 1 秒话语的数据流

教学例子：取 1 秒话语跟踪端到端数据流，音频以 16 kHz 单声道读入即 16,000 个采样点，直接送入模型音频编码器，视频以 fps=2.0 采样即 2 帧并缩放到 280×280，文本为数据集转写。文本层平均输入为 91 个词元，加入音频后为 144 个词元，加入视觉后达 1,311 个词元，原文未披露各编码器内部特征维度与下采样帧率，故此处不补造，只记录输入规模与累计耗时关系。

#### 离线校准与在线级联

下图把离线校准与在线级联放在同一流程里，建议先从左到右看主路径，再看下方校准如何给出每层阈值。左侧为带文本、音频波形与视频帧的话语与问题，中间三列为 3 层的模型预测与预测集，箭头标示非单例则升级而单例则输出。下面结合图中集合收缩过程说明退出逻辑，理解阈值来源。

[![原论文 Figure 3：Overview of EmoRouter. Given an utterance with text, audio, and visual modalities, EmoRouter…](https://arxiv.org/html/2611.28960v1/main_arch.png)](https://arxiv.org/html/2611.28960v1/main_arch.png)

*论文图 3：三层级联流程与收缩校准，单例退出而多标签升级，阈值来自校准集收缩最大化（原论文 Figure 3）。*

图中第 1 层输入文本后模型输出概率柱状图，预测集包含惊讶、愤怒与开心 3 个标签，因不是单例而继续升级。第 2 层加入音频后集合收缩为愤怒与开心两个标签，仍需升级。第 3 层给出开心单例并以最大概率输出。下方校准框显示在校准集上最大化收缩来选择每层误差预算，绿色与黄色箭头分别表示第 1 层与第 2 层的单例退出，粉色箭头为最终层输出。

#### 不符合分数与预测集

共形预测先为每个候选标签打一个不符合分数，用来衡量模型预测与该标签的贴合程度。对分类器常用 1 减去预测概率，概率越低分数越高，含义是模型越不认可该标签。下面公式给出这一定义，后续分位数与集合都建立在它之上，测试时无需标签即可计算，该分数只依赖概率输出。

\[s(x,y)=1-\hat{\pi}_{y}(x),\]

该式把标签在输入上的预测概率转化为不符合度，若概率接近 1 则分数接近 0，表示非常贴合，若概率接近 0 则分数接近 1，表示强烈不符合。校准阶段对每个校准样本用真实标签计算该分数，得到分数分布，测试时把每个候选标签的分数与分位数阈值比较，分数小则保留。这种构造不依赖测试标签，输出直接决定集合成员，并影响下一步是退出还是升级。

拿到校准分数的分位数阈值后，就可以为新输入构造预测集，集合包含所有分数不超过阈值的标签，等价于保留概率足够高的标签。阈值由指定的误差率决定，误差率越小阈值越严而集合越大。下面公式为集合的构造形式，是退出判断的直接依据，该步骤在每层独立进行。

\[\mathcal{C}_{\alpha}(x)=\bigl\{y\in\mathcal{Y}:s(x,y)\leq\hat{q}\bigr\},\]

该集合的大小直接反映不确定性，单例表示模型在当前模态下只认可一个标签，可以退出并返回最高概率，空集表示没有标签达到阈值，论文仍用最高概率作为回退以节省开销。多标签表示在多个情绪间犹豫，需要升级并引入新模态。在可交换假设下真实标签以至少 1 减误差率的概率落入集合，但用收缩选预算后部署已无形式化覆盖，只把大小当作路由信号。

### 分层校准、级联退出与收缩选预算

EmoRouter 不共用一个误差率，而是为第 1 层与第 2 层各设一个预算，每一层用该层的预测分布在校准集上算不符合分数，再取经验分位数得到阈值。预算越小阈值越严而集合越大，更多样本被推向高成本层，预算越大集合越小而更早退出，但可能在困难样本上过早提交。基数作为无标签的置信信号，驱动下面的级联判断，校准集取自各数据集验证划分。

#### 退出规则的形式

在线推理时逐层运行模型并构造本层预测集，若集合大小不超过 1 则退出并返回该层最高概率，其中单例取唯一元素，空集也回退到最高概率，若包含多个标签则升级。最后一层为无条件回退，直接取最大概率。下面公式为退出层选择的正式写法，从第 1 层扫描到最后一层，首个满足单例或到达末层即停。

\[\small\ell^{*}(x)=\min\Bigl\{\ell\in\{1,\dots,L\}:|\mathcal{C}_{\alpha_{\ell}}^{(\ell)}(x)|\leq 1\;\;\text{or}\;\;\ell=L\Bigr\},\]

该规则的含义是只在当前模态已消除歧义时才停止，当文本概率集中在一个情绪上，集合收缩为单例，继续加音频与视觉的期望收益很小，不如直接输出以省去 10 倍以上的延迟。若概率分散在多个标签上，集合保持多元素，说明文本信息不足，必须引入韵律或表情。单例取唯一元素而空集回退到最高概率，输出直接决定省去后续编码还是重新运行模型。

#### 收缩选预算的原理

两个预算相互耦合，因为第 1 层预算决定哪些样本到达第 2 层，从而改变第 2 层面对的人群，无法用闭式解直接求优。共形集合收缩在校准集上度量相邻层预测集的平均收缩幅度，收缩越大说明新增模态真正消除了上一层未解决的犹豫，值得付出额外耗时。记仍活跃样本为未退出集合，平均减少量为落差，末层按大小 1 处理。下面为收缩在非终止层上的平均。

\[\mathrm{CSC}(\alpha_{1},\dots,\alpha_{L-1};\,\mathcal{D}_{\mathrm{cal}})=\frac{1}{L-1}\sum_{\ell=1}^{L-1}\mathrm{drop}_{\ell}.\]

该目标同时奖励早期解决与有效升级，第一项偏好在文本加音频就收缩到较小集合，便于廉价退出，最后一项以 1 为基准度量被推迟到全模态的残余模糊，鼓励把昂贵推理留给真正含糊的样本。实现上在 0.1、0.3、0.5、0.7 与 0.9 网格上枚举预算组合，计算每层的阈值与集合后求收缩并取最大者。整个流程无需训练路由器，也不更新大模型参数，情绪识别写成多项选择问答，用选项序号概率作为预测分布。

实验在 4 张 NVIDIA RTX A6000 GPU 上完成，推理按多项选择问答取选项序号概率，延迟含模态编码与模型推理。校准集取自各数据集验证划分，测试集用于报告，训练划分不更新任何参数。音频以 16 kHz 单声道读入，视频以 fps=2.0 采样并缩放到 280×280，网格搜索与分位数计算均在校准集离线完成。

### 主结果：在更低延迟下持平或超越全模态

评测用加权 F1 (wF1) 衡量总体精度，方向越高越好，用延迟降低率 (LRR) 衡量相对全模态节省的端到端耗时比例，越高越省时，用时间效用 (Ut) 衡量单位耗时换来的精度增益，越高表示又准又省。所有结果为 3 次运行的均值与标准差，同一模型与同一 3 层级联下比较，延迟含模型推理与模态编码开销。因基线共享相同级联结构，差距可归因于退出信号本身，公平性来自相同的输入顺序与阈值网格。

#### 数据集与时间效用

先看 4 套基准的来源与标签空间，它们覆盖表演与自发、双人与多人、情绪与情感极性，可以检验路由是否随数据特性自适应。下面为数据集总览，交互列区分对话与独白，标签列区分情绪与情感类别数。

| Dataset | Source | Interaction | Label Space | #Classes |
| --- | --- | --- | --- | --- |
| IEMOCAP | Acted sessions | Dyadic | Emotion | 6 |
| MELD | TV series (Friends) | Multi-party | Emotion | 7 |
| MOSEI | YouTube videos | Monologue | Sentiment | 2 |
| MOSI | YouTube movie reviews | Monologue | Sentiment | 2 |

表中 IEMOCAP 为表演式双人对话，6 类情绪，开心与兴奋在词面相近但唤醒度不同，对文本最具挑战。MELD 为电视剧老友记的多人对话，7 类情绪且中性占比近半，恐惧与厌恶各不足 3%。MOSEI 与 MOSI 为网络独白情感二分类，前者覆盖 1,000 余名说话人与 250 个话题，后者聚焦 89 名说话人的电影评论，文本常含显式评价词。IEMOCAP 用第 5 会话 1,623 条测试，MELD 用官方 2,610 条测试。

时间效用把精度增益除以耗时占比，分子为方法加权 F1 减去文本加权 F1，分母为 1 减延迟降低率。分母越小表示越接近全模态耗时，分子越大表示超越文本越多，兼顾准确率与延迟的权衡。下面公式给出定义，后续主表用它综合比较谁在省时前提下涨点更多，而不仅看单点精度。

\[U_{\text{time}}\;=\;\frac{\mathrm{wF1}-\mathrm{wF1}_{\text{T}}}{1-\mathrm{LRR}},\]

该式的统计直觉是单位时间换来的精度，若方法与文本精度相同则为 0，若在大幅省时的同时超越文本则为较大的正值，若不如文本或耗时接近全模态则接近 0 甚至为负。极端下延迟降低率接近 1 时分母很小，微小精度增益也会放大数值，例如 IEMOCAP 上 EmoRouter 的 142.5。输出不用于梯度更新，只用于跨方法比较谁在省时前提下涨点更多。

#### 主表切片的比较

主表在 3 个全模态大语言模型与 4 套数据上比较固定模态、随机路由、自洽级联、最高概率与熵路由及 EmoRouter，指标为加权 F1 越高越好、延迟降低率越高越省时、时间效用越高越好。各基线共享相同三层级联，只差退出信号，阈值网格与收缩搜索一致。下面聚焦 Qwen3-Omni-30B 的 IEMOCAP 与 MELD 切片，完整 12 组中 11 组时间效用最高的结论在表后总结。

| Method | IEMOCAP wF1 | IEMOCAP LRR | IEMOCAP Ut | MELD wF1 | MELD LRR | MELD Ut |
| --- | --- | --- | --- | --- | --- | --- |
| T | 41.4 ± 0.5 | – | 0.0 ± 0.0 | 60.3 ± 0.6 | – | 0.0 ± 0.0 |
| T+A+V | 46.6 ± 0.7 | 0.0 ± 0.0 | 5.2 ± 1.2 | 59.1 ± 0.9 | 0.0 ± 0.0 | −1.2 ± 0.4 |
| SCC | 46.9 ± 0.2 | 72.3 ± 0.6 | 20.0 ± 1.5 | 61.6 ± 0.9 | 68.3 ± 0.5 | 4.0 ± 1.2 |
| Top-1@0.7 | 44.4 ± 0.2 | 94.3 ± 0.3 | 53.1 ± 2.2 | 61.1 ± 0.7 | 91.8 ± 0.1 | 7.9 ± 2.7 |
| EmoRouter | 49.4 ± 0.6 | 94.2 ± 0.8 | 142.5 ± 6.1 | 62.7 ± 0.6 | 90.4 ± 0.2 | 25.0 ± 1.5 |

在该切片上 EmoRouter 在 IEMOCAP 取得 49.4 的加权 F1，高于文本的 41.4 与全模态的 46.6，也高于自洽级联的 46.9，延迟降低率为 94.2% 且时间效用为 142.5。在 MELD 上取得 62.7 的加权 F1，高于文本的 60.3 与全模态的 59.1，也高于自洽级联的 61.6，延迟降低率为 90.4% 且时间效用为 25.0。在 12 组中 11 组时间效用最高，唯一例外是该模型在 MOSI 上的时间效用为 -0.8，不及最高概率阈值基线。

#### 细粒度与路由分布

为检验增益是否只来自多数类，论文在 Qwen3-Omni-30B 上按情绪拆分 F1，观察提升是集中还是分散。下面为 IEMOCAP 6 类情绪的文本与 EmoRouter 对比，平均为宏平均，加权为加权平均，增量为绝对增益。若提升只在多数类，则路由只是偏向多数类，而非真正恢复声学信息。

| Methods | Exc | Fru | Sad | Neu | Ang | Hap | Avg | W-f1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T (text-only) | 35.50 | 43.29 | 40.80 | 49.09 | 37.69 | 36.30 | 40.45 | 41.65 |
| EmoRouter | 39.33 | 50.72 | 57.50 | 57.17 | 43.58 | 41.58 | 48.31 | 49.62 |
| Δ | +3.83 | +7.43 | +16.70 | +8.08 | +5.89 | +5.28 | +7.87 | +7.97 |

表中 6 类情绪全部提升，悲伤从 40.80 升至 57.50，增益达 16.70，中性、沮丧与愤怒分别提升 8.08、7.43 与 5.89，兴奋与开心也有 3.83 与 5.28 的增益。平均从 40.45 升至 48.31，加权从 41.65 升至 49.62，说明提升分散在全标签空间，而非牺牲少数类换多数类。MELD 上恐惧与愤怒等稀有难类同样获得最大增益，与文本已具表达力的分布一致。

下图左侧为路由分布堆叠条，右侧为各层性能散点，建议先看左侧各色块占比理解文本充足度，再看右侧星形标记是否超越所有固定层。下面结合两面板说明自适应如何同时省算力与涨精度，以及不同数据集为何分流比例不同，两面板共用同一模型可排除阈值差异。

[![原论文 Figure 6：Modality Routing Analysis.](https://arxiv.org/html/2611.28960v1/fig_routing_analysis_horizontal.svg)](https://arxiv.org/html/2611.28960v1/fig_routing_analysis_horizontal.svg)

*论文图 6：路由分布与各层性能对比，IEMOCAP 重音频而 MELD 文本退出更多且均超越固定层（原论文 Figure 6）。*

左侧堆叠条显示 IEMOCAP 有 8.0% 退出于第 1 层，83.7% 退出于第 2 层，仅 8.3% 进入第 3 层。MELD 有 32.1% 退出于第 1 层，56.1% 退出于第 2 层，11.8% 进入第 3 层，反映 MELD 文本表达力更强。右侧散点显示无论 IEMOCAP 还是 MELD，EmoRouter 星形标记的加权 F1 均高于文本、文本加音频与全模态任一固定层，说明动态退出不仅绕过冗余计算，还避开了追加模态推翻正确结论的风险。

### 预算、层设计与跨模型迁移：收益从何而来

#### 固定预算与层设计的代价

为分离收缩准则的贡献，论文固定两个预算相等为 0.1、0.5 与 0.9，并对比去掉文本加音频或把文本加音频换成文本加视觉的层设计。所有方法共享同一级联与同一校准集，固定预算实验只换预算选择规则，层设计实验只换中间层构成，因此差距可归因于对应设计。下面聚焦 IEMOCAP 与 MOSI 切片，前者文本不足而需音频，后者文本已强而追加模态易干扰，可以看到收缩目标何时失效。

| Setting | IEMOCAP wF1 | IEMOCAP LRR | IEMOCAP Ut | MOSI wF1 | MOSI LRR | MOSI Ut |
| --- | --- | --- | --- | --- | --- | --- |
| α1=α2=0.1 | 46.3 | 15.7 | 5.5 | 83.5 | 77.4 | 6.0 |
| α1=α2=0.9 | 41.7 | 98.1 | 0.0 | 82.1 | 96.3 | 0.0 |
| w/o T+A | 46.3 | 10.5 | 5.2 | 83.2 | 69.7 | 3.5 |
| Replace T+A with T+V | 43.5 | 44.9 | 3.4 | 82.7 | 89.5 | 5.6 |
| EmoRouter | 49.4 | 94.2 | 142.5 | 81.4 | 72.5 | −0.8 |

表中预算为 0.1 时倾向升级，IEMOCAP 的延迟降低率仅 15.7% 且时间效用为 5.5，远低于 EmoRouter 的 94.2% 与 142.5。预算为 0.5 或 0.9 时过早退出，在 MELD、MOSEI 与 MOSI 上时间效用均为 0.0，与文本持平。去掉文本加音频后 IEMOCAP 的延迟降低率跌至 10.5%，换成文本加视觉后加权 F1 跌至 43.5，说明音频中间层不可替代。但在 MOSI 上固定 0.1 取得 83.5 的加权 F1 与 6.0 的时间效用，高于 EmoRouter 的 81.4 与 -0.8，表明最大化收缩并非在所有数据上最优。

#### 预算敏感性与小样本稳定性

下图固定一个预算为收缩选择值，扫描另一个预算在 0.1 到 0.9 间的加权 F1，灰色虚线为全模态参考。建议先看左侧两面板中第 1 层预算的走势，理解宽松文本层为何在 IEMOCAP 上掉点，再看右侧两面板中第 2 层预算的中间最优，下面说明为何单一阈值无法通用。

[![原论文 Figure 4：wF1 of EmoRouter as \\alpha_1 (left two panels) and \\alpha_2 (right two panels) vary on IEMOCAP…](https://arxiv.org/html/2611.28960v1/fig_alpha_sensitivity.svg)](https://arxiv.org/html/2611.28960v1/fig_alpha_sensitivity.svg)

*论文图 4：误差预算敏感性曲线，第 1 层预算在 IEMOCAP 敏感而第 2 层呈中间最优，虚线为全模态参考（原论文 Figure 4）。*

左侧 IEMOCAP 上第 1 层预算从 0.1 增至 0.9 时 EmoRouter 的加权 F1 从约 49% 跌至约 41%，因宽松文本层放走了本需音频的样本。MELD 上则相对平稳，维持在 61% 附近。右侧第 2 层预算在两套数据上均呈中间最优，过低导致过度升级，过高导致过早提交，最优点约在 0.3 到 0.5 间。灰色虚线显示 IEMOCAP 全模态约 46.6%，MELD 全模态约 59.0%，EmoRouter 在多数预算下仍在其之上。

校准规模从 25 增至 500 时，25 个样本下分位数不稳定而波动，50 个样本即稳定到与全校准相差正负 0.5 个加权 F1 点内，100 个样本已接近全量，说明仅需数十条标注即可适配新域。跨模型迁移时把源模型阈值直接用于目标模型而无需目标校准，在 MELD 上来自大模型的阈值还提升了小模型的加权 F1，验证了阈值在所测主干间的可迁移性。

### 假设边界、复现要点与何时值得尝试

EmoRouter 的结论建立在 3 个前提上，一是校准与测试可交换，分位数才有覆盖含义，而收缩在校准集上选预算后部署已无形式化保证，只把集合大小当路由信号。二是单例只反映给定模态下的不确定性，文本自信但错误时仍会提前退出，音频自信但错误时也会在第 2 层停留，附录失效案例与 2.0% 到 4.6% 的错过修正率说明了这一点。三是退出累计前层耗时，若大量样本进入第 3 层，节省会被稀释，好在 4 套数据上仅约一成进入全模态，延迟降低率仍达 67.9% 到 94.5%。

复现时先区分三件事，代码已公开并可运行，说明覆盖安装与推理，权重依赖公开的全模态大语言模型而非本仓库训练，数据需按官方划分取验证集做校准、测试集报告。建议第一步用 Qwen2.5-Omni-7B 在 MELD 上复现文本、全模态与 EmoRouter 三点，再补 50 条校准的小样本与跨模型阈值迁移。若面向影评等文本极强的场景，需先验证 MOSI 式的反例，即固定小预算或纯文本可能反超，避免盲目最大化收缩。

工程选型上，当视觉编码占主导且文本已具判别力时最值得尝试，音频中间层保留了廉价挽回的机会。附录显示自动转写下文本优先仍优于音频优先，空集在文本层为 0.0% 而在文本加音频层占 3.2% 到 14.2%，继续转发只降延迟降低率而不涨精度，支持遇空即退。部署涉及语音与面部隐私与人口文化偏置，不应作为医疗、就业或执法等高风险决策的唯一依据，需知情同意与数据保护。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.28960v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：12组公开基准上wF1均达到或超过全模态且LRR达67.9%至94.5%，11组取得最高时间效用。

- 核心优势：免训练共形预测集级联与集合收缩准则自动分配逐层预算，阈值构造与早退规则形式化完整。

- 核心优势：针对预算选择与层级设计的直接消融及跨模型阈值复用与ASR泛化对照验证充分且保留负结果。

- 主要短板：收缩准则在校准集选优后不再保留形式化覆盖保证，且依赖可交换假设，25样本时分位数不稳定。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
