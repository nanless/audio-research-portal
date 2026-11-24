---
title: "Language models represent more about emphasis than they can tell you"
date: 2026-11-20
draft: false
tags: [语音属性识别, 表示探测, 韵律, 大语言模型]
categories: [论文速递]
description: "用同一批朗读英文词比较文字与语音路线，文字模型无论大小都停在相近上限，直接提问还不如查词典常见读法，而听录音的模型明显更高并跟随所听的朗读者。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25808"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "文字能猜到多少重读，说不出的部分要靠耳朵"
paper_digest_original_title: "Language models represent more about emphasis than they can tell you"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25808v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25808v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25808v1.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "用同一批朗读英文词比较文字与语音路线，文字模型无论大小都停在相近上限，直接提问还不如查词典常见读法，而听录音的模型明显更高并跟随所听的朗读者。"
paper_digest_reader_sections: [{"heading":"朗读时哪些词该加重，文字能决定多少","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"同一批词上公平比较文字与语音两条路线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结表征上的探测与直接提问考查不同能力","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"文字模型停在同一上限而语音高出一截","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"增益集中在哪些词上，提问偏好错在何处","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"何时用表征读重读，何时必须听录音","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Helsinki, Finland"],"name":"Aarne Talman"},{"affiliations":["University of Turku, Finland","Institute of Language and Speech Processing, Athena Research Centre, Greece"],"name":"Stergios Chatzikyriakidis"}]
paper_digest_abstract_sha256: "9052457f96e9110c73b9ee81fdabf5e5fc1d50f789efa2799d17e56a4ac5f367"
paper_digest_sidecars: {"citation.bib":{"sha256":"79182a6baff8d3856440735c073393c0dd5ab4695e743138258b0dbbde467c4e","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25808/citation.bib"},"citation.json":{"sha256":"15dd389b4e030d41edf27649e9ce863dcb5051a8a7e86ad3aeca208aff566ee6","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25808/citation.json"},"citation.ris":{"sha256":"742c5a9520a0eaea25e928d919ae1a5baa6eb618da9b62ecea7a5b84304fa47d","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25808/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"035f42da9bffe2787b472e67ba54d084f340bc09e4c24dff4b122a90cdf8e206","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25808/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "470704ca70e475ba92aeca110e803523a362796ce5527956c64628a4df8f38fa"
paper_digest_api_reader_plan_sha256: "971a05501b4e651db256db25e2f68739e668f9be01d22ad9bbf82b002fb5d794"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "80fa7ac58d53425c03c0bccebf7cb35ae49d189150c12778d5b59f2ac75189b9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1fa88ee7ac290c2b2f6ebb939495d6a082a1e1649eaebf8951d4b229aeab385b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d33fbe1c4ce43042ca92bc1e198f18e99804e2731826ec33f7eea7472085717c"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "fccc5e0d67d811c47037fe2fc89200c5ed434825db264b8dbfe81d853bd790bb"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 文字能猜到多少重读，说不出的部分要靠耳朵

> 英文题目：*[Language models represent more about emphasis than they can tell you](https://arxiv.org/abs/2611.25808v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音属性识别](/audio-paper-digest-blog/papers/?concept=task.speech-attributes)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **科学主题**：[韵律](/audio-paper-digest-blog/papers/?concept=scientific_topic.prosody)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Aarne Talman：University of Helsinki, Finland
- Stergios Chatzikyriakidis：University of Turku, Finland；Institute of Language and Speech Processing, Athena Research Centre, Greece

## 📌 核心摘要

**问题与瓶颈：** 朗读英语时哪些词被强调，由文字和具体读法共同决定。文字提供内容词与功能词、新旧信息和短语末重音等线索，但同一句话不同朗读者会做出不同选择。论文研究文本模型能从文字恢复多少词级显著度，能否在被问及时说出答案，以及听到录音能补回多少。输入是 LibriTTS 有声读物的英文句子与词级三档标签，输出是每个词的档位，二档任务合并后两档为一类。已有路线或用文本表示预测标签，或让大语言模型直接作答，或用语音表示检测重音，但三者此前没有在同一批词和同一套标签上对比，文本表示中含有的信息与模型愿意报告的信息是否一致也不清楚。

**核心思路与方法架构：** 核心直觉是把文字能决定的共性读法与只有听录音才知道的个人读法分开。沿一个朗读句看，句子切分为词并与录音对齐，文本分支用词的首个或末个子词向量代表该词，语音分支对词时间窗内所有帧的表示取平均得到词向量。文本侧比较冻结编码器与解码大语言模型的逐层线性探针、在冻结特征上训练的逻辑回归与双向长短期记忆分类器、对 BERT 系列的整体微调，以及对商用与开放模型的直接提示，解码器还测试把句子给两遍再读第二遍的回声输入。语音侧探测 WavLM-large、HuBERT-large、Whisper large-v3 编码器和 Qwen2-Audio 7B 的音频编码器与语言模型部分，并以词时长与位置构成的时长分类器和用公开对齐重跑标注流程的上参考作对照。探针冻结主干只训练读出层，微调更新全部参数，提示不更新参数。

**关键实验与核心代价：** 在测试集 4,822 句 90,063 个词上，以词级准确率为主要指标，数值越高越好，词多数基线 3 档为 62.0%，2 档为 80.7%。最佳文本微调 ModernBERT-large 为 68.8% 与 83.2%，XLM-R large 为 68.8% 与 83.3%，冻结最佳序列分类器 3 档为 68.0%，最佳线性探针为 66.9%。同一开放模型 Qwen3.8 27B 线性探针 3 档为 66.7%，高于其词向量层的 62.9%，而直接提示无示例时为 58.6%，加 500 个示例后为 62.0%，2 档为 78.3%，没有超过词多数基线。在测试集三档任务上以 macro-F1 为指标，最佳语音 Whisper large-v3 编码器加双向长短期记忆分类器为 83.0，高于最佳文本 ModernBERT-large 同类分类器的 63.9%。在 89,935 个同词上，3 档词级准确率最佳语音为 84.6%，高于同词最佳文本的 68.1%，用公开对齐重跑标注流程同词为 91.5%，最佳语音仍低 6.9 个点。录音带来的提升在内容词为 22.9 个点，在句末词为 23.4 个点。代价方面，500 示例提示最长一次用 8.1 小时，总计 58.5 个 GPU 小时，而小分类器在少量数据上已接近上限。

**适用边界与深读导览：** 结论限于英语朗读有声读物和由基频、能量与时长经小波分析自动算出的标签，没有用人耳感知标签验证，也没有覆盖对话与其他语言。提示结果限于测试的指令、格式与模型，换用排序式提问可能不同。朗读材料多为 1923 年前出版物，语言模型训练文本多为当代文本，跨时代用词差异的影响没有单独分离。若想深究逐层探针、提示示例数与语音跟随读者的对照分析，可查阅下方长文中的结果与分析部分。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/kan-bayashi/LibriTTSLabel> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 朗读时哪些词该加重，文字能决定多少

刚接触语音与韵律的读者可以先把韵律重读理解成朗读者落在某个词上的突出程度。本文不讨论狭义的对比焦点或强调焦点，而是采用操作性定义，也就是标注测到什么就把什么称作重读。语言之间并没有统一的形式化定义，词重音与短语重音也是不同概念，因此后文的重读轻重完全由标注流程决定。

从文字看，一部分重读是有规律的。实词通常比虚词更容易被加重，新信息通常比已提信息更容易被加重，短语末尾的实词往往承载主要重音。可是朗读者想传达的意思也会改变落点。论文引用了博林格的说法，只有会读心才能完全预测重音。不同朗读者在同一文本上的落点只有部分相同，这意味着文字给定后仍留有选择的余地。

本文的任务可以表述得很具体。输入是一个英文句子的文字，或者是该句子的实际录音，输出是每个词的重读级别。级别记为 0 表示非重读， 1 表示重读， 2 表示很重读。保留 3 个级别时称为 3 类任务，把 1 与 2 合并为重读时称为两类任务。评价以词级准确率为主要指标，数值越高越好，同时兼顾宏平均与各类的召回，因为非重读词约占一半。文字模型、直接提问的大模型与语音模型都在同一批词和同一套标签上比较，比较的起点才是公平的。

期待大模型懂重读是有理由的。大量文字训练可能让模型学到信息结构，而信息结构与重读关系密切，已有合成前端用文本表征预测重读，大模型也被用来为合成选择加重词。论文要回答 3 个相扣的问题。第一，文本表征里能恢复多少当时那次朗读的重读。第二，能恢复是否等于能说出来，也就是直接提问能否得到同样好的答案。第三，语音信号在同一批词上额外带来什么。围绕这三点，后文先走通两条路线的处理过程，再解释探测与提问为何不同，最后看增益落在哪些词上。

### 同一批词上公平比较文字与语音两条路线

#### 标签含义与数据划分

用论文中的一个贯穿例子来走流程。测试句的大意是希尔达的脸颤抖了一下，但她低声说出后半句，包含是、我、想、必须等词。文字路线只能看到词串，语音路线能听到某位朗读者当时如何读这句。两条路线最终都要给每个词一个 0 到 2 的级别，标点不参与计分。标签来自小波韵律工具包，它把基频、能量与词时长合成一条信号，再做连续小波变换得到每个词的韵律分值。论文核对发现 3 类标签就是该分值的固定切分，低于 0.4 为 0 ，低于 1.2 为 1 ，其余为 2 ，分值在零处截断，大量零值堆在零点。标签是录音与词边界的确定性函数，这一点决定了语音上限的含义。

数据划分是理解代价与公平性的关键。下表给出 4 个部分的句子数、词数与 3 类占比。文字模型在较大的训练集上训练，语音模型因逐帧抽取表征开销大而在较小的训练集上训练。为了分离输入与数据量的效应，论文还在小训练集上训练了两个文字分类器作为对照。各划分之间没有相同说话人，模型、层与提示都在开发集上选择，测试集报告词级准确率。文本与语音的直接比较限制在同一批词上，也就是时间起点落在录音前 30 秒内的词，约占测试词的绝大多数，并用配对检验与自助区间判断差异。

| Split | Utterances | Words | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- |
| train_360 | 116,263 | 2,076,289 | 48.3 | 27.4 | 24.2 |
| train_100 | 33,042 | 570,592 | 48.1 | 27.3 | 24.6 |
| dev | 5,727 | 99,200 | 47.9 | 27.7 | 24.4 |
| test | 4,822 | 90,063 | 48.0 | 27.3 | 24.7 |

上表说明了比较的前提。训练量、说话人与标签分布在各划分基本一致，因此文字与语音的差距更可能来自输入本身，而非划分偏移。论文还提到测试集去掉最后一个测试句后结果几乎不变，公开对齐重跑标签流程可作为语音的上限参照。开放模型在单个 NVIDIA GH200 GPU 上以 bfloat16 半精度运行，商用模型经 Azure API 调用，全部运行共耗费 58.5 GPU 小时，其中 500 例提问的测试运行耗时最长，为 8.1 小时。

#### 文字与语音两条处理路线

文字路线的细节决定了它能看到什么。编码器用每个词首个子词的表征，解码器用尾个子词的表征。解码器原本只能看到左侧，因此论文采用复读输入，也就是把同一句子输入 2 次，从第二遍读取表征，以便也能利用右侧词语，复读输入因补上右侧信息在 3 类任务上可提升 0.8–1.2 个百分点。冻结路线保持预训练参数不变，只在上面训练小分类器。微调路线更新全部参数，采用与 2019 年配方相近的优化设置。探测部分先在每层训练线性判别并在开发集选最优层，再在该层训练逻辑回归、多层感知机与双向长短时记忆网络分类器，并用随机词向量做对照。提问路线把句子与编号后的词一起给出，要求每个词返回一个级别，比较了多种指令与回答格式以及不同数量的例子，开放模型还采用受限解码直接取最可能级别，并抽查自由作答以排除格式强迫的解释。

语音路线的处理把声音变成按词可比的向量。语料词与对齐词先做匹配，处理缩写展开与分词差异，每个词取其时间跨度内所有帧的平均作为词表示。对 4 个语音模型的每一层都做探测，同样训练线性与双向网络分类器。另设一个只用时长的线性分类器，输入为时长、音素数、停顿与在句中的位置，用来判断仅看时长能走多远。标注流程本身在现有词边界上重跑一遍，得到语音在这套标签上理论上能接近的位置。两条路线最终落在同一批词上，文字看的是词串的常规读法，语音听的是这次朗读的实际落点。

### 冻结表征上的探测与直接提问考查不同能力

线性探测这个术语第一次出现时需要讲清作用。它指冻结模型参数不变，在隐藏状态上训练一个简单分类器，看标注信息能否被线性读出。后文统一称作线性探测。它的作用是衡量表征把信息放得多么直白，而不是衡量分类器本身有多强。强分类器自身可能学会任务，因此论文把关于表征含有什么的判断建立在线性探测上。双向长短时记忆网络分类器指能同时利用左右上下文的序列分类器，能力较强，随机词向量对照就是为了暴露这一点。在随机向量上它也能学到不少，说明它的一部分分数来自自身学习，而非预训练表征。嵌入层指模型最底层、每个词尚无上下文时的表示，对照它与上下文层可以分离词身份与上下文的贡献。

要理解信息在何处，先看层深度趋势。下图的横轴为相对层深，从嵌入层到末层，纵轴为线性探测的 3 类准确率。左图为文字，右图为语音。读图时先看每条曲线的走向，再比较峰值位置。文字曲线的中段高于两端，语音曲线的中上段最高，编码器输出端有所回落，语音文本大模型的语言模型部分在靠近输入处较好，随后缓慢下降。这说明韵律相关信息并非均匀分布，也说明编码器学到的部分信号在传入语言模型后有所丢失。

![原论文 Figure 3：3-way test accuracy of a linear probe on each layer, by relative depth (0: embeddings, 1: last…](/audio-paper-digest-blog/images/papers/2611.25808/figure-3-cc5e7b4b1db1b498.png)

*论文图 3：左右两图分别显示文字与语音线性探测随相对层深的变化，中段与中上段出现峰值（原论文 Figure 3）。*

上图支撑的机制判断是，探测到的信息主要来自上下文表示，而非词身份本身。嵌入层只编码词本身而无语境，其探测分数接近词典基线，上下文层的线性探测明显更高。语音侧的峰值位置与回落形态也提示，当前语音文本大模型并没有完整保留编码器中的韵律线索。结合随机向量对照，后文在比较同一模型的探测与提问时，会更看重线性探测的差距，而不是双向网络分类器的绝对数值。

直接提问考查的是另一种能力，可以称作元语言判断。它要求模型用文字说出每个词的级别，而不是在内部表示中保留可被读出的线索。论文发现回答格式比指令措辞更重要，例子数从少到多的改善缓慢，两类任务上几乎没有改善。语音文本大模型的落差更大，其编码器探测远好于提问，自由作答时大量重复编号词而不给标签，给标签时几乎全标非重读，说明失败不是受限格式强迫出来的。对初学者而言，关键分工是，探测回答表征里有什么，提问回答模型愿意说什么，两者不一致时不能直接把提问分数当作知识上限。

### 文字模型停在同一上限而语音高出一截

#### 总体准确率与语音增益

主实验的评测口径需要先交代。模型、层与提示都在开发集上选定，测试集报告词级准确率，数值越高越好。由于类别不平衡，论文同时报告宏平均与各类召回。文字与语音的数值比较限定在同一批测试词上，差异用配对检验判断，并给出句级自助区间。下表汇总了基线、微调、冻结探测、提问与语音参照的总体结果，输入分为文字与音频，指标为两类与 3 类准确率。

|  | System | 2-way | 3-way |
| --- | --- | --- | --- |
| Baselines |  |  |  |
| t | Majority class | 52.0 | 48.0 |
| t | Word majority (2019) | 80.7 | 62.0 |
| Fine-tuned |  |  |  |
| t | BERT-base (2019 recipe) | 83.0 ± 0.1 | 68.5 ± 0.1 |
| t | BERT-large | 83.1 ± 0.1 | 68.5 ± 0.1 |
| t | ModernBERT-large | 83.2 ± 0.0 | 68.8 ± 0.1 |
| t | XLM-R large | 83.3 ± 0.1 | 68.8 ± 0.2 |
| Frozen, linear probe |  |  |  |
| t | BERT-base | 81.8 | 64.6 |
| t | best text: Muse Glimmer 30B, echo | 82.6 | 66.9 |
| a | best audio: Whisper large-v3 (encoder) | 88.2 | 78.7 |
| Frozen, BiLSTM classifier |  |  |  |
| t | best text (3-way): Qwen3.5 0.8B, echo | 82.9 ± 0.0 | 68.0 ± 0.1 |
| t | best text (2-way): ModernBERT-large | 83.0 ± 0.0 | 68.0 ± 0.1 |
| a | best audio: Whisper large-v3 (encoder) | 91.0 ± 0.2 | 84.7 ± 0.2 |
| Prompting |  |  |  |
| t | GPT-4o | 79.7 | 59.4 |
| t | DeepSeek-V4-Pro | 79.2 | 60.5 |
| t | Mistral Large 3 | 78.9 | 59.7 |
| t | GPT-5.5† | 78.9 | 58.8 |
| t | Qwen3.8 27B, 500 examples | 78.3 | 62.0 |
| a | Qwen2-Audio, with recording | 51.0 | 39.2 |
| t | Qwen2-Audio, text only | 51.6 | 43.1 |
| Audio references |  |  |  |
| a | Duration only | 83.2 | 65.0 |
| a | Labelling procedure | 94.9 | 91.4 |

把该总表放在一起看时，规律非常集中。不同大小与结构的文字模型，无论探测还是微调，3 类准确率都落在约一点的范围内，最高为 3 类 68.8% 。语音的双向网络分类器达到 3 类 84.7% ，比同表最佳纯文字 68.8% 高出 15.9 个百分点，两类差距较小。这里的 15.9 个百分点是总表口径，与后文同一批 89,935 词子表上 84.6% 减 68.1% 得到的 16.5 个百分点口径不同，两处不要混用。

只看时长的分类器在两类上可与最佳文字相当，但在 3 类上明显更低，说明时长能判断是否重读，但难以判断有多重，需要音高与响度补充。标注流程本身在现有边界上可达 3 类 91.4% ，比语音最佳 84.7% 高出 6.7 个百分点，其中一部分来自对齐差异。提问结果均未超过词多数基线，Qwen3.8 27B 在 500 例时恰好持平 62.0% ，其余低于基线，商用模型 3 类在 60% 上下，两类在 79% 上下。语音文本大模型在有录音时提问分数更低，远低于其编码器探测，说明问题不在听不到，而在说不出。

#### 系统一致性与规模数据效应

要理解上限在文字而非模型，可以看系统之间的一致性。下图为两两系统给出相同 3 类标签的比例，白色线条分隔金标、语音模型、文字模型与提问模型。读图时先看对角线附近的组内深色块，再看跨组颜色变浅的区域，最后把组内一致与各自和金标的一致对比。文字分类器之间高度一致，语音模型之间也高度一致，但两组之间的一致明显更低。

![原论文 Figure 2：How often two systems give a word the same 3-way label (%), on the 89,935 test words used for the…](/audio-paper-digest-blog/images/papers/2611.25808/figure-2-d1deaf30d0f1139a.png)

*论文图 2：下三角热图显示两两系统给出相同 3 类标签的比例，深色表示一致程度高（原论文 Figure 2）。*

该一致性图解释了为何增大规模与增加数据帮助很小。数十个文字系统两两平均在 90% 以上两类一致，但各自与金标仅 80% 左右一致，约 8% 的词被所有文字系统同判错，占平均系统两类错误近半。3 类上文字间平均 80% 以上一致，与金标仅约六成八一致，语音间一致相近但与金标达 80% 以上。把 Qwen 从 0.8B 扩大到 27B 参数，线性探测 3 类仅提升约一个百分点，双向网络分类器几乎不动。用五千句训练的线性探测已接近用全部十余万句的结果，微调用十分之一数据已接近全量。给前文一到三句几乎不改变分数，复读输入因补上右侧信息在 3 类任务上可提升 0.8–1.2 个百分点，符合短语尾重音需要看后文的直觉。

#### 同模型探测提问对照与示例数效应

同一模型的两种取用方式对比更能说明说不出的问题。下表选择同一文本大模型与同一语音文本大模型的线性探测、双向网络分类器与提问结果，输入同样分为文字与音频。表前需要交代的是，探测用标注数据训练分类器，提问直接要求模型作答，两者考查目标不同但标签相同。

| Model | Access | 2-way | 3-way |
| --- | --- | --- | --- |
| Qwen3.8 27B (t) | linear probe | 82.3 | 66.7 |
|  | prompted, no examples | 78.8 | 58.6 |
|  | prompted, 500 examples | 78.3 | 62.0 |
| Qwen2-Audio 7B (a) | linear probe (LM) | 86.4 | 74.4 |
|  | prompted (Instruct) | 51.0 | 39.2 |

该对照的含义是，上下文表示确实超出词身份。文本大模型的嵌入层探测接近词典基线，上下文层线性探测明显更高，但无例子提问远低于探测，给 500 例后 3 类追平词多数基线，两类反而更低。语音侧编码器与语言模型的探测远高于提问，提问分数甚至低于多数类。论文还做了阈值与排序检验。重新选择分界并不能弥合差距，模型给出的重读概率区分重读与非重读的能力与按训练集词频排序几乎相同，说明问题出在词的排序，而非分界位置。偏离词典常见标签时，分类器纠正多于犯错，提问模型犯错多于纠正，超出词身份的信息在提问中多为噪声。

例子数量的影响可以用下图收束。横轴为提示中的例子数，从 0 例到 500 例，纵轴为 3 类准确率。图中实线为开发集提问曲线，点线为同模型测试集线性探测，虚线为测试集词多数基线。读图时先看提问实线的爬升斜率，再看它与点线和虚线的相对位置，提问实线全程低于点线线性探测，但在约 10 例起略高于虚线词多数基线。

![原论文 Figure 4：Prompting Qwen3.8 27B with more examples (500 development utterances).](/audio-paper-digest-blog/images/papers/2611.25808/figure-4-6f5db9e6e09453af.png)

*论文图 4：横轴为提示例子数，纵轴为 3 类准确率，比较提问曲线与线性探测和词多数基线（原论文 Figure 4）。*

该曲线说明例子展示的是单个朗读者的选择，而不是可迁移的规则。提问实线全程低于点线线性探测，但在约 10 例起略高于虚线词多数基线，开发集上从无例子到 500 例仅缓慢爬升数个百分点，两类任务上没有帮助。这种缓慢改善与人类听辨情形相呼应，未训练听者也会受词频期望影响，需要汇合多人判断才可靠，提问答案更像基于词典期望的合理读法，而不是录音中的那次朗读。

### 增益集中在哪些词上，提问偏好错在何处

#### 词类型分解与双朗读者对照

增益来源需要按词的类型与上下文位置分解。下表比较最佳文字与最佳语音在同一批词上的 3 类准确率，按实词虚词、句尾以及文字模型是否一致分组，增量为语音减文字。这种分组不是为了挑选有利子集，而是看录音在何处补上了文字定不了的部分。

| Words | nn | Text | Audio | Δ |
| --- | --- | --- | --- | --- |
| content words | 42,281 | 56.1 | 79.0 | +22.9 |
| function words | 47,654 | 78.7 | 89.6 | +10.8 |
| last word | 4,801 | 51.7 | 75.1 | +23.4 |
| every text model wrong | 9,699 | 0.0 | 58.9 | +58.9 |
| all common words | 89,935 | 68.1 | 84.6 | +16.5 |

该分解的跨行规律很清楚。实词的增益约为虚词的 2 倍，句尾词文字准确率最低而增益最大。其中虚词一行原文给出文字 78.7 、语音 89.6 、增量 +10.8 ，该 +10.8 为原文未四舍五入前计算后报告的差值，若用四舍五入后表值直接相减 89.6 减 78.7 为 10.9 。在所有文字模型都判错的近万词上，语音能对近 60% ，而在所有文字模型都判对的词上，语音保持九成七以上。这意味着文字定不了的词正是录音起作用的词。

论文举例说明，文字模型会把重音放在巴黎这种常规位置，而朗读者实际加重了前面的动词与句尾副词，语音模型找到了朗读者的落点。新旧实词的增益几乎相同，说明语音并非单纯把信息结构学得更好。训练中未见或少见的词增益不小，高频词双方都较高，说明差距不是生僻词造成的。同一文本由 2 人朗读时，跟随谁最能说明输入的作用。论文找到一百余个测试句，其文本同样出现在开发集中但由另一人朗读，共约 1,906 词。语音模型与所听朗读者的 3 类一致高出与另一朗读者约十四个百分点以上，接近 2 位朗读者彼此的一致水平。文字分类器与提问模型对 2 位朗读者几乎无偏好，甚至略偏向另一位。

#### 混淆矩阵与句尾偏好

提问错在何处需要看标签分布与混淆。下图为三块按行归一的混淆矩阵，分别对应同一文本大模型的探测、提问与语音探测，横轴为预测级别，纵轴为金标级别。读图时先看对角线正确比例，再看非对角线的漏检方向，重点比较很重读被判成非重读的比例，以及两端混淆是否常见。

![原论文 Figure 5：Confusion matrices (3-way, test set), normalised by row: the share of the words with each gold…](/audio-paper-digest-blog/images/papers/2611.25808/figure-5-f12f36d32df92963.png)

*论文图 5：三块按行归一的混淆矩阵分别对应文本探测、文本提问与语音探测的预测分布（原论文 Figure 5）。*

该图显示提问不仅模糊了级别边界，还会完全漏掉重读词。提问把较多很重读词判成非重读，比例约为探测的 2 倍，分类器在重读与很重读上的召回明显更高。语音很少把两端互相混淆，错误集中在相邻级别。分布上，探测复现了金标中实词虚词与句尾的最高级比例，提问则把句尾标为最高级的比例推得过高，商用模型在句尾给出最高级的比例远高于实际，即使指令不提位置倾向仍如此，给 500 例后有所纠正但仍低于探测。这种句尾偏好很像把句子主重音默认放在末尾的简易规则，而不是当时录音的落点。宏平均的差距大于准确率的差距，也说明差异集中在重读类别，而非占比较大的非重读词。

### 何时用表征读重读，何时必须听录音

本篇的上限结论是经验性的，只在所测模型、数据与语境下成立。在独立抽样假设下，2 位朗读者的一致程度可以从两侧框定纯文字模型的理论区间，3 类区间下限约为六成三，上限约为 80% ，两类区间更高。最佳文字模型落在 3 类区间的中下段，重抽样区间变化不大。该推导假设每次朗读是给定文字下标签分布的 1 次独立抽取，实际语调实现随语境与说话人系统变化，自动标注也会引入不一致，因此区间只是参考，不是不可逾越的定律。语音最佳仍低于标注流程本身，说明现有语音表示连声学部分也没有完全学全。

数据与标注边界需要如实点明。标签由声学自动算出，语音模型预测的是自身输入的函数，部分文字与语音差距反映的是制作方式，而非人耳感知。标注方法在广播新闻库上与人工重音标注相当，但在本库上没有经过听者验证，人耳可能把带音高重音的词判为重读，而工具更偏向声学最突出的词。词边界并非标签计算时的原始边界，但用公开对齐重跑后与原标签 3 类一致达 90% 以上，分数相关接近一，说明边界差异影响较小。语料为有声读物朗读，文本多为二十世纪二十年代以前作品，从格律诗到儿童故事都有，与大模型训练的当代文本存在年代差，会话语音可能更难预测。全部数据为英语，提示集、回答格式与模型有限，商用模型还会变化，要求词排序而非标签的提问方式尚未测试。

对研究生的工程选型可以给出行动顺序。有标注数据且只需要默认读法时，优先在冻结表征上训练小分类器，甚至只用词身份与标签训练也能接近文字上限，成本远低于数百例提问。需要贴合特定说话人的那次朗读时，必须引入该说话人的录音或对说话人建模，仅看文字只能得到共通读法。把提问大模型直接给的级别当作合成前端或预标注时，应只视作弱先验，仍需声学分析核对。复现第一步是取论文划分与公开对齐，用公布配置跑小波工具得到分值与切分，完成词匹配后先做词多数基线，再在冻结编码器中层训练线性探测。还需补的验证包括听感标签子集、会话语音、其他语言、排序式提问，以及已知朗读者后剩余变异能被说话人信息解释多少。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长与码率；语音侧将词时间跨度内帧平均为词表示，文本与语音比较限于录音前 30 秒内词，标注分值来自基频、能量与时长合成信号的小波分析
- **训练与评测数据**：训练与评测使用 Talman 等发布的 LibriTTS 韵律重读标注，train_360 含 116,263 句 2,076,289 词，train_100 含 33,042 句 570,592 词，开发集 5,727 句 99,200 词，测试集 4,822 句 90,063 词，英文朗读，各划分无相同说话人，三类占比约 48.0、27.3、24.7
- **算力与训练耗时**：开放模型在单个 NVIDIA GH200 GPU 上以 bfloat16 运行，商用模型经 Azure API 调用，全部运行共 58.5 GPU 小时，其中 Qwen3.8 27B 以 500 例提示在测试集上的提问运行耗时 8.1 小时
- **核心超参数与配置**：BERT-base 微调采用 Adam 学习率 5e-5 批量 32 训练 2 轮取末轮模型，大模型微调学习率 2e-5，冻结表征逐层训练线性判别选最优层再训逻辑回归多层感知机与双向长短时记忆网络，提问比较 3 种指令 3 种格式与 0 到 500 例
- **推理速度与部署开销**：原文未披露实时率延迟吞吐与显存，推理开销仅报告总计 58.5 GPU 小时与最长单次 8.1 小时运行，未给出参数量之外的部署成本
- **开源产物与协议状态**：原文未披露专用代码库开源，模型权重可通过论文表 2 所列 Hugging Face 标识获取，数据基于已发布 LibriTTS 及其公开强制对齐与小波韵律工具包配置，原文未提及演示页
- **附录与补充材料要点**：原文未设独立附录，补充分析已在正文讨论部分给出，包括读者一致对纯文字精度的上下界推导、重抽样区间与自动标注局限，典型失效为句尾偏好与很重读漏检

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25808v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
