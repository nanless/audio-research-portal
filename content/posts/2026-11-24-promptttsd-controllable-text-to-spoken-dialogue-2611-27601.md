---
title: "PromptTTSD: Controllable Text to Spoken Dialogue Synthesis with Open-Ended Text Descriptions"
date: 2026-11-24
draft: false
tags: [多说话人播客与对话生成, 韵律与风格控制, 数据集构建, SFT, 数据集]
categories: [论文速递]
description: "论文以多人演播有声书为源构建带开放式风格描述的大规模对话语音数据 PromptDialog，并用描述感知微调得到 PromptTTSD，在中文评测中保持基础合成能力的同时实现可比肩专有系统的开放式风格控制，并以显式描述将语境适配性从 3.06 提升到 3.52。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.27601"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用开放式描述控制多轮对话语音的合成"
paper_digest_original_title: "PromptTTSD: Controllable Text to Spoken Dialogue Synthesis with Open-Ended Text Descriptions"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.27601v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.27601v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.27601v1.pdf"
paper_digest_primary_task: "多说话人播客与对话生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.podcast-dialogue-generation","label":"多说话人播客与对话生成"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文以多人演播有声书为源构建带开放式风格描述的大规模对话语音数据 PromptDialog，并用描述感知微调得到 PromptTTSD，在中文评测中保持基础合成能力的同时实现可比肩专有系统的开放式风格控制，并以显式描述将语境适配性从 3.06 提升到 3.52。"
paper_digest_reader_sections: [{"heading":"多轮对话语音缺失开放式风格控制","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从多人演播有声书到文本语音描述三元组","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"锚定加上下文扩展的两阶段对齐保住对话连续性","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"描述感知微调把提示织入交错序列","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"对齐质量与开放式控制及语境适配性的验证","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"辅助损失权重与提示位置的取舍","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"边界复现前提与工程选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Beijing University of Posts and Telecommunications","National Key Laboratory of General Artificial Intelligence, BIGAI"],"name":"Sulong Yang"},{"affiliations":["Beijing University of Posts and Telecommunications"],"name":"Zhi Zeng"},{"affiliations":["Beijing University of Posts and Telecommunications"],"name":"Xiupeng Wu"},{"affiliations":["National Key Laboratory of General Artificial Intelligence, BIGAI"],"name":"Juewen Hu"},{"affiliations":["National Key Laboratory of General Artificial Intelligence, BIGAI"],"name":"Pring Wong"},{"affiliations":["Beijing University of Posts and Telecommunications"],"name":"Shuwu Zhang"},{"affiliations":["National Key Laboratory of General Artificial Intelligence, BIGAI"],"name":"Shuo Chen"}]
paper_digest_abstract_sha256: "6e4214b9538a09eb77296f7d6c32288aabe8b6cc97e6040f73eac2b80c8a24b6"
paper_digest_sidecars: {"citation.bib":{"sha256":"056d31b70d1f613d3f0551fad331d103045cb16f472c38829f88690ee2979638","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27601/citation.bib"},"citation.json":{"sha256":"1b867c2a4ff5300f7493e0e7ec27e0935d4ca91eecf876a4c333194aaa6ebf0f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27601/citation.json"},"citation.ris":{"sha256":"b0a0509256ce293aaec128ecf2d4dde19673e296213a4292eb198b0ce034ec2f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27601/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"58fdd2d53e6c40ccc7f8fec75ddd5869ec0ee07875b499e22c7a220b1a641360","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27601/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "d6fa02c6b8a11a83dd48088886b5d0ea72a12106a6deaa9bafc821adcf5bbd8b"
paper_digest_api_reader_plan_sha256: "969a60c927ddc9d0b664c5458876480fe65f5b4487e190b04a98ff55a8b2a3d6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "154d09532f10760647268a40f997f5691882f5ce2a6b03d139020346cf277c58"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "5eb866e356a9ab3ff4003ebfbafab03308775d8dea2dc2f138f8ed3872b62f60"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "92f8cfa631b81fac2cf6856bf064a90f469b4abf4f09d99aa59c9c03cca43652"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b89fb172e67b31040e7d653b808cf0dd290a632a9e6e05239ba11c252b89e04d"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用开放式描述控制多轮对话语音的合成

> 英文题目：*[PromptTTSD: Controllable Text to Spoken Dialogue Synthesis with Open-Ended Text Descriptions](https://arxiv.org/abs/2611.27601v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [多说话人播客与对话生成](/audio-paper-digest-blog/papers/?concept=task.podcast-dialogue-generation)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-paper-digest-blog/papers/?concept=task.prosody-style-control)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)；[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.2/10 | 技术严谨 6.5/10 | 实验充分 7.5/10 | 清晰度 7.0/10 | 影响力 6.9/10 | 开源 1.5/10 | 可复现 7.1/10 | 工程/实践 6.0/10


## 👥 作者与机构

- Sulong Yang：Beijing University of Posts and Telecommunications；National Key Laboratory of General Artificial Intelligence, BIGAI
- Zhi Zeng：Beijing University of Posts and Telecommunications
- Xiupeng Wu：Beijing University of Posts and Telecommunications
- Juewen Hu：National Key Laboratory of General Artificial Intelligence, BIGAI
- Pring Wong：National Key Laboratory of General Artificial Intelligence, BIGAI
- Shuwu Zhang：Beijing University of Posts and Telecommunications
- Shuo Chen：National Key Laboratory of General Artificial Intelligence, BIGAI

## 📌 核心摘要

**问题与瓶颈：** 口语对话合成输入为带说话人身份的多轮对话文本，输出为多人轮流、带语气与副语言声的多轮语音，要求说话人前后一致且 delivery 与场景相合。已有长时生成在音质与一致性上进步明显，但缺少细粒度可控手段，错配语气会直接破坏情绪连贯。已有 expressive 数据集多用工具或人工先取 4 到 8 个预定义标签，再由大语言模型转写成描述，语义被封闭在预设清单内，难以覆盖面部表情、肢体动作、复合情绪与特殊身体状态等开放式风格。多人有声书表演性强本是天然来源，但 LibriHeavy 式对齐常因删除或替换错误丢掉引文前缀或后缀，删错一句即打断多轮连贯。

**核心思路与方法架构：** 与 SoulX-Podcast 相比，本文保留逐句交错的文本与语音序列组织，冻结下游条件流匹配与声码器，只训练大语言模型主干，把原方言 token 换成一段自然语言风格提示 token，并增加小权重辅助文本预测损失。沿一组对话看，同一对话按时间拼接多个轮次，每轮依次为说话人 token、风格提示 token、文本 token 与语音 token，大语言模型依据历史文本与语音上下文预测当前语音 token，再由冻结模块重建波形，训练与推理均保留对话历史，支持零样本音色克隆与自然语言风格控制。数据侧收集 107 部中文与 20 部英文有声书，英文用 Whisper-large-v3、中文用 Paraformer-zh 转写，中文经规范并转成去声调拼音以缓解同音替换。第一阶段用后缀数组以引文跨度检索转写候选，以 token 级编辑距离阈值确认锚点并限制后续搜索区间，可跨 CPU 核并行，第二阶段用最长公共子序列找边界证据，以长度比与边界缺失量向上下文扩展，即使转写漏掉笑声与叹息也能保留在引文跨度内。再按不超过 2 行间隔成组，用 MiMo-v2.5 联合抽取描述与说话人并经 CAM++ 嵌入校验，叙事文本保留了工具难识别的开放式线索，边界扩展保住了对话连续性与副语言成分。

**关键实验与核心代价：** 风格可控评测用 50 个人工编写的简洁描述与对应文本，5 位母语者做听测，指标为风格对比平均意见分（style comparative MOS，Style-CMOS，以本文为 0.00 基准，基线行负值偏向本文、正值偏向基线）、语音质量平均意见分（quality MOS，Q-MOS，越高越好 ↑）、自动语音质量估计（UTMOS，越高越好 ↑）、说话人相似度（speaker similarity，SIM，越高越好 ↑）与字错率（character error rate，CER，越低越好 ↓）。在 Seed-TTS-eval 参考语音条件下，本文 Q-MOS 4.520±0.631 高于 CosyVoice3 的 4.173±0.947，UTMOS 3.436 高于 3.164，Style-CMOS -0.273±1.326 偏向本文。对话合成在 TTSD-ZH 官方协议下报告 CER、说话人归属准确率（speaker attribution accuracy，ACC，越高越好 ↑）、SIM 与语境恰当性平均意见分（contextual appropriateness MOS，CA-MOS，越高越好 ↑），本文无描述时 CER 3.76 低于 SoulX-Podcast 的 4.29 与 MOSS-TTSD 的 4.85，CA-MOS 3.06±1.07 高于 2.93±0.87，加描述后升到 3.52±0.95 而 CER、ACC 与 SIM 保持可比。消融显示辅助权重 0.01 把文本损失从 15.2979 降到 4.1304，同时语音损失最低为 2.7654 且语音 token 准确率最高为 36.4396%，提示放文本前比放文本后 CER 3.046% 对 3.394% 更优。代价集中在英文与说话人泛化，英文词错率（word error rate，WER，越低越好 ↓）7.55% 高于 7.22%，英文 SIM 0.7276 低于 0.7487，中文 SIM 0.8050 低于 0.8280，训练为 36k 步，在 15 张 PPU-ZW810E GPU 上完成。

**适用边界与深读导览：** 结论在中文对话成立较扎实，英文仅 120 小时且多为有声书域，跨域会话与未见音色可能回退，开放式风格缺少公认自动基准，50 例听测无法覆盖全部表情、动作与混合状态。小说描述含场景与动作等弱声学信息，作控制条件可行，直接作语音字幕预测目标则欠定，发布仅提供 YouTube 链接与切分文件而不分发原始录音，仅限学术研究。想深究对齐阈值与边界扩展公式、提示位置与损失权重的取舍，可查下方方法与实验章节及附录的 TTSD-Eval 与对话历史消融表。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/bigai-ai/PromptTTSD> — 链接不可用（HTTP 404）

- 论文所列链接：<https://huggingface.co/datasets/alphappp/PromptDialog-v1> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/spaces/alphappp/PromptDialog-demo> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多轮对话语音缺失开放式风格控制

口语对话合成以写好的多轮剧本为输入，逐句生成多说话人连续语音，要求同一说话人音色稳定，多轮之间韵律与情绪衔接自然。近年系统在长时生成、语音质量与说话人一致性上进步明显，但在细粒度可控性上仍然不足。对话中的说话方式高度依赖语境，若在悼念场景中给出欢快语气，就会破坏情感连贯，这是论文要解决的核心矛盾。

自然语言控制本是可行的出路，但现有表达性数据集大多是封闭式的。常见做法是先用工具或人工得到情绪、音高、语速等 2 至 8 个预定义标签，再让大模型转写为描述，语音也多为单人独白。这类描述无法覆盖表情、动作、复合情绪与特殊身体状态，例如流口水含糊说话、疲惫叹息或奔跑中喘息，外部工具难以可靠识别。

数据侧的另一瓶颈是对齐与说话人标注。多人演播有声书表演性强且贴合原文叙述，是理想的对话语音来源，但需要把长录音与原文小说在话语级对齐且不打断多轮连续性。LibriHeavy 在引文首尾出现删除或替换错误时常只对齐中间部分，若直接过滤会丢掉整轮对话。声学说话人日志在说话人集合未知时也不可靠，引用基准的整体错误率仍有 11.2%，漏检与混淆是主要来源。

论文的回答分为数据与模型两部分。数据上提出可扩展管线，产出 PromptDialog，包含 8,383 小时中文对话语音与 120 小时英文对话语音，共 4,769k 片段，超过 1,000 名说话人，79% 话语带有开放式描述。模型上提出 PromptTTSD，在 SoulX-Podcast 基础上做描述感知微调，支持零样本克隆与自然语言控制。全部评测均在中文下进行，英文仅验证管线可行性，这是理解结论适用范围的前提。

### 从多人演播有声书到文本语音描述三元组

整体管线保留了 SoulX-Podcast 的文本语音交错表示与逐句合成框架，替换的是数据源与控制信号。输入端是小说原文与对应的多人演播录音，中间经自动语音识别转写桥接文本与音频，先做两阶段对齐得到话语级切分，再按原文位置分组为对话组，最后用大模型从邻近叙述中抽取说话人与风格描述。输出是自然对齐的文本语音描述三元组，可直接用于可控对话合成训练。

执行上先收集 107 本中文与 20 本英文多人演播有声书，对应 8,383 小时中文与 120 小时英文对话语音，英文单本偏短故收集更费人工。英文用 Whisper-large-v3 转写，中文用 Paraformer-zh 转写，中文先经 FunASR 归一再转无调拼音以缓解同音替换。第一阶段按引文长度降序做锚点检索，用后缀数组在全长转写中限定区间并以词级编辑距离阈值验收，长跨度先定可减少候选验证量。第二阶段对边界不完整候选计算最长公共子序列与长度比，完整则直接保留，否则按首尾匹配估算两侧缺口并以 2 倍窗口向周围原文与转写上下文扩展找可靠对应，把漏识或误识仍夹在可靠匹配之间的原文保留下来，尤其保住笑声叹息等副语言。

分组时原文中相隔不超过两行的连续引文归为同一对话组，每组写成 JSON 数组并要求输入输出条数一致且引文逐字对应，防止改写源对话文本。描述定义为邻近叙述中直接刻画说法的情绪语气手势动作表情等线索，提示大模型尽量保留原文措辞不做概括，无有效线索则置空串。说话人与描述共用同一对话上下文一次调用完成，兼顾归因精度与标注成本后选用 MiMo-v2.5，后续再用 CAM++ 嵌入做一致性核验与复查。

#### 开放式与标签式两条路径差异

下图左侧为本工作路径，右侧为传统标签路径，阅读时先沿箭头看主流程，再比较描述从何而来。左侧从小说文本与有声书出发，经由自动语音识别转写的文本音频对齐得到目标片段，同时用大模型从上下文抽取说话人与描述。右侧从音频输入出发，先做标注得到 sad 与 male 等属性标签，再由大模型转写为自然语言描述。

[![原论文 Figure 1：Comparison of pipelines for constructing speech datasets with natural-language descriptions.](https://arxiv.org/html/2611.27601v1/pipeline.png)](https://arxiv.org/html/2611.27601v1/pipeline.png)

*论文图 1：开放式管线与标签式管线的对比，左侧从小说文本与有声书经对齐抽取说话人与风格描述，右侧先打属性标签再由大模型转写（原论文 Figure 1）。*

左侧红色虚线框内给出 3 个开放式示例，指着烤鹅流口水含糊说话、饱经世故的眼睛燃起怒火、浑身是汗停下喘息，加粗部分正是外部工具难以标注的细节。右下上下文信息同时给出说话人 Jack 与哽咽绝望的描述，说明说话人与风格来自同一叙述语境。右侧灰色虚线框的最终描述仅为男子低声悲伤说话，语义被限制在预设属性表内。两者的实质差别在于描述是否直接保留原文措辞。

#### 与最近风格数据集的定位差异

下表比较风格数据集的规模、独白与对话类型、描述来源与开源状态，重点看对话类型与描述是否开放。表头中的 Duration 与 Clips 分别对应时长与片段数，Speech Type 区分独白与对话，Description Source 说明标签数量或文本来源。

| Dataset | Dataset Scale Duration | Dataset Properties Speech Type | Dataset Properties Description Source | Dataset Properties Open Source |
| --- | --- | --- | --- | --- |
| TextrolSpeech (Ji et al. 2024) | 330h | Monologue | 5 labels | ✓ |
| SpeechCraft (Jin et al. 2024) | 2,391h | Monologue | 8 labels | ✓ |
| DNASpeech (Cheng et al. 2025) | 18h | Monologue | Movie scripts | ✓ |
| PromptDialog (ours) | 8,503 (6,859) h | Dialogue | Fiction texts | ✓ |

表中 PromptDialog 总时长为 8,503 小时，括号内 6,859 小时为带非空描述部分，对应 4,769k 片段与超过 1,000 名说话人，类型为对话，来源为小说文本且开源。相邻的 SpeechCraft 虽有 2,391 小时与 2,250k 片段，但类型为独白且描述来自 8 个标签。TextrolSpeech 与 DNASpeech 同样为独白，标签数量更少。比较表明规模优势之外，关键增量是对话类型加开放式来源，而非单纯时长堆叠。

### 锚定加上下文扩展的两阶段对齐保住对话连续性

#### 文本处理与锚定检索

文本处理先用自动语音识别得到带时间戳的转写，英文用 Whisper-large-v3，中文用 Paraformer-zh。英文按 LibriHeavy 规范做文本归一化，中文先经 FunASR 归一化再转为去声调拼音 token，以减少同音替换带来的失配。记小说全文 token 序列为 \(Q\)，转写全文 token 序列为 \(T\)，引文片段 \(Q_{i:j}\) 作为查询，在 \(T\) 的后缀数组中检索候选位置。已验证的对齐记为锚点 \(a=(i,j,m,n)\)，相邻锚点保持单调有序，查询只在相邻锚点限定的区间内搜索，区间相互独立，可在多核 CPU 上并行。

第一阶段按引文长度降序处理，较长片段候选少且更可靠，接受后即插入锚点集合，逐步收窄后续短查询的搜索范围。候选是否接受取决于词级编辑距离与长度自适应门限，目标是在长录音全文转写中直接定位对话引文，而不预先切分转写。以下公式给出接受条件，其中 \(d_{lev}\) 为编辑距离，\(\ell\) 为两片段长度最大值，\(\tau\) 为门限函数。

\[d_{\mathrm{lev}}\bigl(Q_{i:j},T_{m:n}\bigr)\leq\tau(\ell),\]

该式的统计直觉是用相对误差而非绝对误差做判决。编辑距离度量替换、删除与插入的综合代价，除以长度后可比，长片段允许少量识别错误，短片段则要求严格一致。当转写完全正确时距离为零必接受，当边界词被误识或漏识时距离增大，若超过门限则拒绝，避免错误锚点污染后续区间。输出是可靠的锚点集合，为第二阶段提供可扩展的边界。

门限的具体形状由下式给出，分段点在长度 9，超过后取长度除以 5 再向下取整。该设计让短查询零容忍，长查询容忍度随长度线性增长，兼顾查准与查全。

\[\tau(\ell)=\begin{cases}0,&\ell\leq 9,\\[3.0pt] \left\lfloor\ell/5\right\rfloor,&\ell>9.\end{cases}\]

该分段函数的行为在两端很清晰。当 \(\ell \le 9\) 时 \(\tau=0\)，要求逐 token 全等，防止短常用语误匹配。当 \(\ell>9\) 时门限约为 20% 长度，例如长度 20 允许 4 个编辑操作。极端情况下若把门限设得过大，短查询会大量误接受并锁死错误区间，若设为零则长对话召回不足。接受后的锚点直接约束后续搜索，这是保持多轮顺序的关键。

#### 边界不完整的上下文修复

下图给出 LibriHeavy 的典型失效，阅读时先看首行目标文本，再比较下面两行转写错误，最后看颜色图例。蓝色为上下文，绿色为匹配，红色为错误，错误集中在 two 一词附近。

[![原论文 Figure 2：Examples of partial speech alignment errors produced by the LibriHeavy alignment pipeline.](https://arxiv.org/html/2611.27601v1/match.png)](https://arxiv.org/html/2611.27601v1/match.png)

*论文图 2：LibriHeavy 对齐在引文边界的替换与删除错误示例，蓝色为上下文，绿色为匹配，红色为错误（原论文 Figure 2）。*

图中 Substitution Error 把 two 误识为 to，Deletion Error 把该词标为未识别，大括号表示缺失。若只保留中间匹配部分，引文首尾会被截断，笑声与叹息等副语言事件也易丢失。第二阶段用最长公共子序列找出 \(H\) 对匹配位置，计算长度比 \(\rho\)，若双边界均有对应且 \(\rho>0.7\) 视为完整，否则由首尾匹配估计左右缺失量 \(\delta_{L}\) 与 \(\delta_{R}\)，构造 2 倍大小的上下文窗口搜索可靠对应，把边界扩展到最外侧匹配处。上下文匹配只作为边界证据，不要求窗口内逐词正确，因此被漏识的原文仍可保留在对齐区间内。

#### 分组抽取与说话人归因

引文按原文位置分组，相邻两条引文若间隔不超过两行则归入同一对话组，以此恢复多轮结构。每条话语的描述定义为直接刻画说法的邻近叙述，可涉及情绪、语调、手势、表情与生理状态，提示词要求尽量保留原文措辞，避免概括改写，无有效线索则置空。说话人与描述在同一次大模型调用中完成，实际选用 MiMo-v2.5，并校验输入输出条数一致且原文未被篡改。未知说话人先用 CAM++ 余弦相似度在局部上下文中指派，门限 0.4，低于 0.3 的已标注话语若另有候选高于 0.5，则交由 Qwen3.8-27B 结合相似度分数裁决是否修正。

### 描述感知微调把提示织入交错序列

#### 与基座的实质增量与冻结边界

基座 SoulX-Podcast 本身不支持自然语言控制，采用文本语音交错的逐句对话表示，文本 token 后接语音 token，多说话人按时间拼接，每句以说话人标记开头，方言位置原为方言标记。本工作保留交错结构与逐句拼接，替换的是方言标记，改为一段自然语言提示 token，下游条件流匹配模型与声码器因重建质量已高而冻结，只训练大模型主干学习提示与目标语音的关系。主干初始化自 Qwen3-1.7B，这是理解辅助损失取值的前提。

每轮对话的组织形式如下，其中 \(\langle Speaker\rangle\) 为说话人标记，\(\langle Prompt\rangle\) 为风格描述，\(\langle Text\rangle\) 与 \(\langle Audio\rangle\) 为目标文本与语音。提示置于文本之前，语音置于最后，历史轮次完整保留作为上下文。

\[\begin{aligned} \displaystyle\langle\mathrm{SPEAKER1}\rangle\langle\mathrm{Prompt}\rangle\langle\mathrm{Text}\rangle\langle\mathrm{Audio}\rangle \\ \displaystyle\langle\mathrm{SPEAKER2}\rangle\langle\mathrm{Prompt}\rangle\langle\mathrm{Text}\rangle\langle\mathrm{Audio}\rangle \\ \displaystyle\langle\mathrm{SPEAKER3}\rangle\cdots \end{aligned}\]

该布局的建模直觉是让模型先读到说话人与意图，再读到说什么，最后生成怎么说。推理时前文的文本与语音均可见，当前轮的提示与文本决定韵律走向，生成的语音再追加为下一轮历史。与把提示放在文本之后相比，前置更符合单说话人表达性合成的惯例，消融中也带来更低的字错率。原文未披露采样率、帧率与码率等信号规格，复现时只能沿用基座默认配置。

#### 训练目标与配置

总体目标在原始语音损失之外增加辅助文本预测损失，\(\mathcal{L}_{speech}\) 监督语音 token，\(\mathcal{L}_{text}\) 监督语义理解，\(\lambda\) 控制权重。引入该项是希望主干真正理解描述语义，而非记住标记到韵律的映射。

\[\mathcal{L}_{\mathrm{total}}=\mathcal{L}_{\mathrm{speech}}+\lambda\mathcal{L}_{\mathrm{text}},\]

该加权和的梯度同时来自语音与文本两路。当 \(\lambda=0\) 时文本分支无监督，主干依赖预训练语义，文本损失高达 15.2979。当 \(\lambda=0.01\) 时文本损失（交叉熵无量纲值）降至 4.1304，且语音损失最低、语音 token 准确率最高；继续增大权重可把文本损失（无量纲值）压到 3.6166 附近，但语音损失（无量纲值）回升至 2.7749 以上，语音 token 准确率停滞或下降，说明过强语义约束会挤占声学建模。因此最终取 0.01，以小权重引入监督而不损伤语音预测。

训练在 15 张 PPU-ZW810E 上微调 6 轮，共 36k 步，采用动态分批与 AdamW，峰值学习率 5×10-5，经 2,500 步预热后余弦衰减。推理为自回归逐句生成，保留对话历史，解码器兼容流式，附录将其扩展为交互聊天与动作条件生成的潜在应用，但均未系统评测，不应视为已验证能力。

### 对齐质量与开放式控制及语境适配性的验证

#### 评测范围与公平性前提

评测分为数据质量与模型能力两层，均在中文下进行。数据层用 10 小时人工标注检验对齐，用 500 条抽样估计描述有效性，用等量 1,083,438 条比较标签多样性，用 100 组对话比较说话人归因。模型层用自建 50 条开放式描述检验风格控制，用 TTSD-ZH 检验对话合成。主观听测区分人工 MOS 与神经代理指标，其中 Q-MOS 与 Style-CMOS 及 CA-MOS 来自人工，UTMOS 为自动估计，SIM 与 CER 来自 Seed-TTS-eval 官方模型。以下先看对齐与数据分布，再看风格与对话结果。

对齐评测中超过 5 词的引文若词错率低于 5% 且首尾词一致则判对，短句与不满足者人工核验，报告句子匹配率与词匹配率，方向均为越高越好。

| Method | Sentence Match (%) ↑ | Word Match (%) ↑ |
| --- | --- | --- |
| LibriHeavy | 71.39 | 89.12 |
| Ours | 94.13 | 94.38 |

本方法句子匹配率从 71.39% 提升到 94.13%，词匹配率从 89.12% 提升到 94.38%。句子级提升远大于词级，说明 LibriHeavy 多数词能对上但常丢边界，而新方法通过上下文扩展找回完整引文。这对多轮对话至关重要，因为丢掉一句就会破坏连贯。代价是该评测仅覆盖 10 小时，且依赖同一自动语音识别模型转写，跨模型泛化未验证。

核验时超过 5 词引文先按词错率低于 5% 且首尾词一致自动判对，短句与不满足者转人工核验，同时报告句子与词两档匹配率。该 10 小时评测复用同一自动语音识别模型转写，故跨模型泛化仍待验证，多轮对话中丢一句即破坏连贯，因此句子级完整性比词级更关键。描述有效性另抽 500 条按非空有风格信息且与听感一致判有效，泛泛的 said 判无效，约 62% 有效且无实质矛盾，多为缺失或过泛。多样性比较用等量 1,083,438 条并按统一协议抽标签分组，归入 7 类后再看独有类型分布。

下图展示 PromptDialog 的规模形态，阅读时先看四幅子图的横轴与均值虚线，再看分布形状。左上话语时长均值 6.32 秒，右上对话时长均值 34.26 秒，左下每对话说话人数均值 2.04，右下每对话轮次均值 5.30。

[![原论文 Figure 4：Distributions of utterance duration, dialogue duration, speaker count, and turn count in…](https://arxiv.org/html/2611.27601v1/tot2.png)](https://arxiv.org/html/2611.27601v1/tot2.png)

*论文图 4：PromptDialog 中话语时长对话时长每对话说话人数与轮次的分布，均值分别为 6.32 秒 34.26 秒 2.04 人 5.30 轮（原论文 Figure 4）。*

4 个分布均为长尾，话语多集中在 1 至 6 秒，对话多在 30 秒以内，说话人数以 1 至 2 人为主，占比分别超过 40% 与 36%，轮次以 1 轮最高约 31% 并快速衰减。这意味着数据以短双人对话为主，长多轮与多说话人样本较少，训练出的模型在超长上下文上的表现需要额外验证。描述词云进一步显示中英文均保留大量动作与表情词汇，与标签集形成对照。

说话人归因只评对话区排除旁白，抽 100 段对话以词级错误率对齐人工真值，大模型标签赋给整句每个词，基线用商用声学聚类逐词输出，文本语境显著优于纯声学，说明多人演播中声学混淆仍难解而原文叙述更可靠。该结论与后续选用大模型做全量标注的执行选择直接衔接，标注时说话人与描述一次调用完成以省成本。

#### 开放式风格控制对比

风格控制用 50 条简洁描述配内容，5 名母语者参与听测。Q-MOS 评价整体质量 1 至 5 分，Style-CMOS 为成对比较 -2 至 +2 分，以 PromptTTSD 为 0 基准，正值偏向基线，负值偏向本方法。UTMOS 为自动质量估计，SIM 为说话人相似度，CER 为内容字错率，方向分别为越高越好、越低越好。下表分两种音色条件比较，seed-tts 音色对 CosyVoice3 与 MiMo-v2.5-TTS，eleven 音色对 Eleven-v3。

| Model | Subjective Metrics Style-CMOS ↑ | Subjective Metrics Q-MOS ↑ | Objective Metrics UTMOS ↑ | Objective Metrics SIM ↑ | Objective Metrics CER ↓ |
| --- | --- | --- | --- | --- | --- |
| CosyVoice3 (Du et al. 2025) | −0.273 ± 1.326 | 4.173 ± 0.947 | 3.164 | 0.646 | 4.897 |
| MiMo-v2.5-TTS (Xiaomi MiMo 2026) | −0.993 ± 1.114 | 3.760 ± 0.939 | 3.179 | 0.588 | 3.973 |
| PromptTTSD (seed-tts voice) | 0.000 | 4.520 ± 0.631 | 3.436 | 0.626 | 5.039 |
| Eleven-v3 (ElevenLabs 2025) | 0.007 ± 1.298 | 4.600 ± 0.733 | 3.247 | 0.421 | 8.555 |
| PromptTTSD (eleven voice) | 0.000 | 4.750 ± 0.591 | 3.390 | 0.662 | 5.515 |

结果显示 PromptTTSD 在两种音色下 Q-MOS 分别为 4.520 与 4.750，UTMOS 为 3.436 与 3.390，均为同条件最高，人工与自动质量一致。Style-CMOS 上 CosyVoice3 为 -0.273，MiMo-v2.5-TTS 为 -0.993，负值表示更偏向 PromptTTSD，Eleven-v3 为 0.007 基本持平，说明与开源系统相比优势明显，与专有系统相当。SIM 保持在 0.626 与 0.662，未因 expressive 生成而崩塌。CER 在 5.039 与 5.515，绝对值偏高，论文归因于笑声与叹息等非言语 vocalization 被误识，而 Eleven-v3 的 8.555 更高，部分因把描述文本误合成为目标语音。

#### 对话合成与显式描述的作用

对话合成在 TTSD-ZH 上按官方协议报告 CER、说话人归因准确率 ACC、说话人相似度 SIM 与语境适配 MOS 即 CA-MOS。CA-MOS 向评测者呈现对话上下文与合成语音，按 1 至 5 分评价情绪与韵律是否贴合场景，例如游戏解说应热情，告别场景应悲伤。PromptTTSD 不带描述直接合成，PromptTTSD Desc. 则用 GPT-5 按上下文为每句生成描述再作为条件。

| Model | CER ↓ | ACC ↑ | SIM ↑ | CA-MOS ↑ |
| --- | --- | --- | --- | --- |
| MOSS-TTSD | 4.85 | 0.959 | 0.795 | 2.86 ± 0.85 |
| SoulX-Podcast | 4.29 | 0.973 | 0.828 | 2.93 ± 0.87 |
| PromptTTSD | 3.76 | 0.969 | 0.805 | 3.06 ± 1.07 |
| PromptTTSD (Desc.) | 4.30 | 0.968 | 0.803 | 3.52 ± 0.95 |

不带描述的 PromptTTSD 的 CER 为 3.76，为四者最低，ACC 为 0.969，SIM 为 0.805，CA-MOS 为 3.06，均接近或略优于 SoulX-Podcast 的 4.29、0.973、0.828 与 2.93，说明微调未损伤基础能力。带描述后 CA-MOS 从 3.06 升至 3.52，提升约 0.46 分，而 CER 回到 4.30，ACC 与 SIM 为 0.968 与 0.803 基本持平，表明显式风格指导改善语境适配且未明显牺牲内容与说话人指标。代价是描述由外部大模型按上下文生成，推理依赖额外模块，且 TTSD-ZH 本身不带标注，增益能否迁移到真实用户描述仍需验证。

### 辅助损失权重与提示位置的取舍

消融在 10% 训练数据上训练 4 轮，检验辅助文本损失权重 \(\lambda\) 从 0 到 1 的变化，报告语音损失、语音 token 准确率与文本损失，方向分别为越低越好、越高越好、越低越好。该设置可快速比较趋势，但与全量 6 轮的最优值不完全可比，解读时应关注相对走向而非绝对数值。

基座沿用不支持自然语言控制的 SoulX-Podcast，只训大模型主干以学描述与目标语音关系，冻结下游条件流匹配与声码器以保重建质量。序列保留文本语音交错逐句合成，每句以说话人标记开头，原方言标记替换为自然语言提示序列，形成说话人提示文本音频的组织，并引入辅助文本预测损失，总目标为语音损失加 λ 倍文本损失。主干由 Qwen3-1.7B 初始化，全量以 15 张 PPU-ZW810E 跑 6 轮共 36k 步，AdamW 优化，预热后余弦衰减，峰值 5×10−5，预热 2,500 步。

| λ | Speech loss ↓ | Token acc. (%) ↑ | Text loss ↓ |
| --- | --- | --- | --- |
| 0 | 2.7665 | 36.4169 | 15.2979 |
| 0.01 | 2.7654 | 36.4396 | 4.1304 |
| 0.05 | 2.7676 | 36.4211 | 3.7535 |
| 0.1 | 2.7683 | 36.4289 | 3.6666 |
| 0.5 | 2.7749 | 36.3771 | 3.6166 |
| 1 | 2.7835 | 36.2953 | 3.6181 |

当 \(\lambda=0\) 时语音损失为 2.7665，准确率为 36.4169%，文本损失高达 15.2979，说明无文本监督时主干难以利用描述语义。当 \(\lambda=0.01\) 时语音损失降至 2.7654、语音 token 准确率升至 36.4396%（两项语音指标均达全表最优），文本损失也骤降至 4.1304。继续增大到 0.05 与 0.1 时文本损失降至 3.7535 与 3.6666，但语音损失回升到 2.7676 以上。0.5 时文本损失（无量纲值）最低为 3.6166，但语音损失（无量纲值）升至 2.7749，准确率回落到 36.3771%。1.0 时语音损失进一步升至 2.7835，证实过大会损伤声学建模，最终保留 0.01。

提示位置比较把提示放在目标文本之前与之后，在 1,000 条合成话语上报告 CER 与 SIM，方向分别为越低越好与越高越好。两种布局仅交换提示与文本顺序，其余上下文相同，可直接归因于自回归条件顺序的影响。

| Prompt position | CER (%) ↓ | SIM ↑ |
| --- | --- | --- |
| Before | 3.046 | 0.6744 |
| After | 3.394 | 0.6731 |

前置的 CER 为 3.046%，后置为 3.394%，前置降低约 0.35 个百分点。SIM 分别为 0.6744 与 0.6731，差异微小。结果支持最终采用说话人、提示、文本、音频的顺序，与单说话人表达性合成的惯例一致。缺口是仅检验两种离散位置，未搜索提示长度、分段插入或分层提示等更细设计，对长对话历史中的位置敏感性也未展开。

### 边界复现前提与工程选型建议

综合全文，PromptDialog 的优势在于规模、对话类型与开放式来源三者叠加，等量比较下标签种类为 4,624 对 2,688，多出 72.0%，独有类型 2,655 对 719，面部表情 714 对 123 与场景交互 283 对 18 的差距最为突出。说话人归因上大模型错误率 0.29% 至 0.62%，远低于 pyannoteAI Precision-2 的 8.70%，但比较仅限对话区域且依赖小说原文，纯音频场景不适用。模型侧在中文开放式控制上与专有系统相当，带描述时语境适配性明显提升，但英文仅 120 小时，TTSD-eval 英文 WER 从 7.22% 升至 7.55%，ACC 与 SIM 也有轻微下降。

复现需区分三件事。数据层面论文不分发原始录音，只提供 YouTube 链接与切分文件，版权归原权利人且仅限学术研究，缺失片段与链接失效会影响复现。代码层面论文给出仓库链接但本次核验当前不可用，权重与训练脚本状态不明。系统层面演示页当前可用，可试听开放式描述样本，重点对照含流口水、喘息、苦笑等动作表情的描述是否比标签基线更贴合，以及 Eleven-v3 误读描述的失效案例。附录的交互聊天与动作条件生成均为未验证的设想，不应计入能力清单。

工程上若做中文有声书、角色配音或播客，且需要逐句指定语气动作，可优先尝试该路线，第一步复现两阶段对齐并在 10 小时上核验句子匹配率，再用 10% 数据复现 \(\lambda=0.01\) 的拐点。若做英文或实时交互，需先补英文数据与延迟实测，并建立更大规模的人工评测，因为现有开放式评测仅 50 条描述与 5 名听者，且缺乏可靠的自动风格指标，神经代理分数不能替代人工对风格贴合的判断。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长码率与声码器细节，仅说明保留 SoulX-Podcast 的条件流匹配模型与声码器并冻结，训练对象为文本语音交错序列中的语音 token，推理为逐句对话合成并保留历史上下文
- **训练与评测数据**：107 部中文有声书与 20 部英文有声书对应 8,383 小时中文对话语音与 120 小时英文对话语音，共 4,769k 片段，79% 话语带描述，非空描述时长 6,859 小时，评测用 TTSD-ZH 与 TTSD-eval 中英文子集及自建 50 条开放式描述
- **算力与训练耗时**：在 15 张 PPU-ZW810E 上微调 6 轮共 36k 步，消融在 10% 数据上训练 4 轮，原文未披露单卡显存与总耗时
- **核心超参数与配置**：仅训练 LLM 主干，初始化自 Qwen3-1.7B，AdamW 优化，峰值学习率 5×10-5，2,500 步预热后余弦衰减，动态分批，辅助文本损失权重 λ 为 0.01，提示置于文本之前
- **推理速度与部署开销**：原文未披露 RTF 延迟与参数量，仅说明继承基座解码器结构兼容流式生成，评测按逐句拼接与保留历史两种方式生成，最长支持 90 分钟的结论来自基座引用而非本轮实测
- **开源产物与协议状态**：论文声明开源模型与数据并给出链接，核验显示数据集与演示页当前可用，代码链接当前不可用，附录声明仅提供 YouTube 链接与切分文件而不分发原始录音且仅限学术研究
- **附录与补充材料要点**：附录给出 TTSD-eval 中英文扩展结果，50 组对话 300 话语的风格准确率，CAM++ 门限 0.4 与 0.3 和 0.5 的说话人校验，边界向邻词中点调整且单侧最大 1.0 秒，以及非言语事件关键词统计与语音设计等未验证的潜在应用

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.27601v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：释放8383小时中文加120小时英文、79%话语带开放式描述的大规模多说话人对话资源。

- 核心优势：等量样本语义标签4624对2688多72%，面部表情714对123覆盖更宽表达与场景线索。

- 核心优势：TTSD-ZH上CER3.76最低且加描述后场景恰当性从3.06升至3.52，风格控制质量指标同组最高。

- 主要短板：英文仅120小时有声书域且词错率7.55对7.22与相似度回退，英文风格控制未系统评测且50例无法覆盖全部分布。

- 主要短板：对齐阈值长度比与余弦阈值及分组间隔等经验选择缺敏感性分析，500条62%有效率外推至4769k条仍不确定。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
