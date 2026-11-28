---
title: "Chronological Thinking in Full-Duplex Spoken Dialogue Language Models"
date: 2026-11-28
draft: false
description: "针对全双工语音对话模型在倾听期重复预测静音标记导致的分布偏置与窗口浪费，本文提出在倾听窗口内按语义片段增量生成五类结构化思维链的 CT-Duplex ，在 SpokenWOZ 推理对话上取得 GPT 分数 2.61 的可运行全双工最优并保持打断处理能力，代价是轮次承接延迟由 0.45 s 增至 0.68 s 且知识问答增益微弱。"
tags: ["自回归模型", "端到端学习", "语音", "全双工语音交互"]
categories: ["sigdial-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "边听边想的全双工语音对话：时序思维替代静音等待"
paper_digest_original_title: "Chronological Thinking in Full-Duplex Spoken Dialogue Language Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:sigdial:2026:conference-paper-id:2026.sigdial-1.33"
paper_digest_workbench_source_sha256: "90ee8fc3786ee3cfcff22eab3e9fb93873e6c7083ff828448b9ab09ca639b2cc"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.sigdial-1.33/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.sigdial-1.33.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "全双工语音交互"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全双工语音对话模型在倾听期重复预测静音标记导致的分布偏置与窗口浪费，本文提出在倾听窗口内按语义片段增量生成五类结构化思维链的 CT-Duplex ，在 SpokenWOZ 推理对话上取得 GPT 分数 2.61 的可运行全双工最优并保持打断处理能力，代价是轮次承接延迟由 0.45 s 增至 0.68 s 且知识问答增益微弱。"
paper_digest_reader_sections: [{"heading":"倾听期空转的代价：重复静音标记为何损害全双工对话","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双流并行的 CT-Duplex 如何分工与传递信号","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"五类节点与迟放截断让思考在因果约束下保持完整","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"合成对话与打断构造支撑十余千小时的实时学习","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"推理显著变强而知识几乎不变的内容与交互证据","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"思维完整率与截断取舍决定多长思考能被放下","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、代价与复现核对","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Nanyang Technological University","StepFun"],"name":"Donghang Wu"},{"affiliations":["Nanyang Technological University","StepFun"],"name":"Haoyang Zhang"},{"affiliations":["Nanyang Technological University"],"name":"Chen Chen"},{"affiliations":["Mila"],"name":"Tianyu Zhang"},{"affiliations":["StepFun"],"name":"Fei Tian"},{"affiliations":["StepFun"],"name":"Xuerui Yang"},{"affiliations":["StepFun"],"name":"Gang Yu"},{"affiliations":["Nanyang Technological University"],"name":"Hexin Liu"},{"affiliations":["Nanyang Technological University"],"name":"Nana Hou"},{"affiliations":["Nanyang Technological University"],"name":"Yuchen Hu"},{"affiliations":["Nanyang Technological University"],"name":"Eng Siong Chng"}]
paper_digest_abstract_sha256: "2479954a04f53988da2caa276674140f7156b0533ee5bf4b0a3cb5366111dd22"
paper_digest_sidecars: {"citation.bib":{"sha256":"97bcbe456867b2b3b97d3ef2f5372c0c302656cbb9f14c9f6134ca0fc4d40bae","url":"/audio-research-portal/client/papers/2026-11-28/conference-397632c024a1b53649c0989b/citation.bib"},"citation.json":{"sha256":"20a4577446997dc5a347dd3ff1093072ebd62f244db27cae8c889e7a40ecc760","url":"/audio-research-portal/client/papers/2026-11-28/conference-397632c024a1b53649c0989b/citation.json"},"citation.ris":{"sha256":"395ef81c7951dc212ec96dc57bfd3ff896b0c521d4f4070a867629f3636ae5e3","url":"/audio-research-portal/client/papers/2026-11-28/conference-397632c024a1b53649c0989b/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d698ed158177491a3b4f88cf28d4c633c64a7bb5201936b3f7b1f2d04c913159","url":"/audio-research-portal/client/papers/2026-11-28/conference-397632c024a1b53649c0989b/rethink-context.json"}}
paper_digest_paper_id: "conference:sigdial:2026:conference-paper-id:2026.sigdial-1.33"
paper_digest_source_kind: conference
paper_digest_conference_id: "sigdial-2026"
paper_digest_conference_name: "sigdial-2026"
paper_digest_doi: "10.18653/v1/2026.sigdial-1.33"
paper_digest_conference_doi: "10.18653/v1/2026.sigdial-1.33"
paper_digest_conference_record_url: "https://aclanthology.org/2026.sigdial-1.33/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.sigdial-1.33.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "4e982383c2f78538779e98585c72d685291eceeb6b36ebd83c1fa144f6430705"
paper_digest_api_reader_plan_sha256: "df4a65c057709e5bf296fef00271bc5936f7b651c64c9ff50ccf88272fa6d7be"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "bb33a4c98173848419562ea88f2f2fea690550f5178db672a40cc34565d8894c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c32f37a606a44d802114db42f4ee8c946141058d4fe4e39acc38388c6c912ffb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7543acf20144b44680ad023ab885374929c33ed1995bc41959e5e4ebeffe7311"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "baa0f49d88b6b4d9bcd3657882a30bbda7bef9074c166c112b18b83bace154ad"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"}]
paper_digest_primary_method: "自回归模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 边听边想的全双工语音对话：时序思维替代静音等待

> 英文题目：*Chronological Thinking in Full-Duplex Spoken Dialogue Language Models*

> 会议身份：`conference:sigdial:2026:conference-paper-id:2026.sigdial-1.33`
> DOI：`10.18653/v1/2026.sigdial-1.33`
> Track：SIGDIAL 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.sigdial-1.33/) · [官方 PDF](https://aclanthology.org/2026.sigdial-1.33.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-research-portal/papers/?concept=task.full-duplex)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [自回归模型](/audio-research-portal/papers/?concept=method.autoregressive)；[端到端学习](/audio-research-portal/papers/?concept=method.end-to-end-learning)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 7.5/10 | 技术严谨 6.6/10 | 实验充分 6.2/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Donghang Wu：Nanyang Technological University；StepFun
- Haoyang Zhang：Nanyang Technological University；StepFun
- Chen Chen：Nanyang Technological University
- Tianyu Zhang：Mila
- Fei Tian：StepFun
- Xuerui Yang：StepFun
- Gang Yu：StepFun
- Hexin Liu：Nanyang Technological University
- Nana Hou：Nanyang Technological University
- Yuchen Hu：Nanyang Technological University
- Eng Siong Chng：Nanyang Technological University

## 📌 核心摘要

**问题与瓶颈：** 全双工口语对话语言模型 (full-duplex spoken dialogue language models, SDLMs) 以流式用户语音为输入，以智能体文本与语音为输出，需在持续聆听的同时实时合成回复，并处理用户插话与轮次承接。现有主流路线在聆听期令自回归语言模型反复预测静默词元 `<SIL>` 以维持静默，这种单一重复会偏置下一词元分布并加剧退化，同时浪费聆听窗口，未能形成意图假设与回复提纲。人类在聆听时会做轻量增量思考，而流式输入带来严格因果约束，只能依据过去音频更新假设，且用户可随时停说，要求思考可抢占并在聆听期摊销，停说即说而不引入额外延迟。已有思维链 (Chain-of-Thought, CoT) 等事后长链条依赖完整问题与非因果修订，无法直接用于该场景。

**核心思路与方法架构：** 与最接近的 SALM-Duplex 基线相比，本文保留流式语音编码器加语言模型主干的总体链路，改动在于语言模型主干仅预测智能体文本词元并新增 Transformer 解码器预测语音词元，同时以时序思考 (Chronological Thinking) 链替换冗余静默词元。用户语音经 12.5 Hz 流式语音编码器得到连续嵌入，经模态适配器与智能体文本嵌入相加后送入 Qwen2.5-1.5B-Instruct 主干，主干自回归生成含思考链的文本，再以末层隐状态为条件由 Transformer 解码器经 Nanocodec 生成 12.5 Hz 语音码。思考链受自适应思维合理理论 (Adaptive Control of Thought-Rational, ACT-R) 启发，定义实体、意图、动作、知识与逻辑 5 类节点，由 Qwen2.5-72B-Instruct 按语义片段离线生成并以 `<BOC>` 与 `<EOC>` 包裹后置于原静默位置，长度不足时后置以保证因果，超长时截留前 n 个节点以不侵占回复词元，全程流式可抢占且停说即转入回复。训练时联合微调编码器、语言模型主干与解码器，推理时无需额外等待，原文未说明冻结边界。

**关键实验与核心代价：** 在需要推理的 SpokenWOZ 对话上，CT-Duplex 有思维的 GPT 评分从无思维的 2.40 分变为 2.61 分，高于级联系统 GT-LM 的 2.48 分，BLEU 从 12.92 分变为 16.30 分，Sentence-BERT 相似度从 0.52 变为 0.59，原文报告 GPT 相对增益为 8.75%。在日常多轮对话 MtBenchEval 上，有思维的 GPT 评分从 2.39 分变为 2.44 分，仍低于 GT-LM 的 3.15 分，BLEU 从 7.00 分变为 7.34 分，Sentence-BERT 相似度从 0.64 变为 0.67，原文报告增益为 2.09%。在事实知识问答上，Llama Questions 准确率从 30.4% 变为 31.4%，Web Questions 准确率从 13.2% 变为 13.3%，提升可忽略，且均低于 9B 参数半双工 GLM-4-Voice 的 50.7% 与 15.9%。在 Impatient 数据集交互评测中，轮次承接延迟从 0.45 s 变为 0.68 s，高于以 0.43 s 为该列最优的 ORISE，打断延迟从 0.53 s 变为 0.54 s，其中无思维的 0.53 s 为该列最优，低于 ORISE 的 0.61 s，打断成功率从 88.63% 变为 94.05%，仍低于 ORISE 的 96.80%，表明思考未破坏全双工行为但带来少量承接延迟。10 名英语受试者的盲测 A/B 对比显示，有思维在音频保真度上以 0.6375 胜率高于 0.1875 败率，在内容质量上以 0.5500 胜率高于 0.2750 败率，其余为平局，评测仅用人工 A/B 而未提供平均意见分 (mean opinion score, MOS) 或 UTMOS / DNSMOS 等神经代理指标对照。思考链完整性统计显示 GenConv、SpokenWOZ-G 与 Llamaq-G 上 98.91%、96.78% 与 94.69% 轮次的思考词元数少于用户语音帧数，多数链条得以完整保留。

**适用边界与深读导览：** 上述增益成立前提是合成多说话人英语对话训练与 Whisper-large-v3 转写加 gpt-4o-mini 打分的自动评测链路，未覆盖真实噪声、远场拾音、多语种与长时重叠等部署场景，事实问答与日常闲聊上的微弱增益也不支持将该机制视为知识增强手段。欲深究自回归公式中过去音频与历史文本的条件依赖、五类节点的截断对齐策略及转写一致性讨论，可查阅下方方法概述和架构与实验结果对应小节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 倾听期空转的代价：重复静音标记为何损害全双工对话

语音对话模型正从严格轮流转向持续感知与生成并行的全双工形态。早期轮流系统让用户输入与系统输出依次出现，流程清晰但等待感强。全双工智能体在倾听用户语音流的同时合成自身应答，始终处于在线状态，目标是更自然地承接轮次、给出简短附和并在用户抢话时及时让出。输入是连续的用户语音流，输出是与之时间交叠的智能体语音与文本，评价同时关注内容质量与交互时机。

当前主流全双工实现在倾听期让大模型骨干反复预测静音标记 `<SIL>` ，以维持等待状态，轮到智能体说话时再输出起始标记与应答标记，之后用填充标记补齐空隙。这种空转带来两方面代价。一是在自回归预测中长期重复同一标记会扭曲下一标记分布，加剧退化与重复偏置。二是宝贵的倾听窗口被浪费，模型没有利用这段时间形成意图假设或组织应答结构，与人类边听边想的行为明显偏离。

人类倾听并非放空，而是按语义片段增量更新对说话人意图的判断，并草拟应答框架。把这种能力搬到全双工模型上面临两条硬约束。一是严格因果，只能依据过去音频更新假设，不能偷看未来语音或等整句结束再推理。二是可抢占与分摊，用户可能随时停话，思考必须发生在倾听窗口内，停话即刻转入说话，不能带来额外等待。传统思维链冗长且事后展开，还常依赖完整题面与假设修正，难以直接套用。

为此原文提出按时间顺序思考，用结构化增量思考替代重复静音。思考链随用户语义片段增长，每收到一段语义便产生一个或多个节点，节点类型由语义决定而无固定顺序。链首尾分别以起始标记与结束标记界定，尽量靠后放置以保证因果在先，长度受原静音段约束，超出时只保留靠前的完整节点。这种紧凑表达即使在用户突然停话时也能保留有用信息，并直接切换到应答生成。

本文要回答的核心问题是，能否在不增加轮次承接与打断处理延迟的前提下，用上述思考替代重复静音，从而提升需要推理的任务型对话与开放问答质量。原文在 SpokenWOZ 与 MtBenchEval 上检验内容质量，在 Llama Questions 与 Web Questions 上检验知识记忆，在 Impatient 数据上检验承接与打断行为，并以盲测对照验证偏好，构成后文讨论成立前提的基础。

### 双流并行的 CT-Duplex 如何分工与传递信号

与最接近的 SALM-Duplex 相比， CT-Duplex 保留双流同时感知与生成的总体布局，改动集中在两处。一是大模型骨干只预测智能体文本标记 Y txt ，不再同时承担语音标记预测，语音标记 Y spc 交给新增的自回归 Transformer 解码器，条件包含文本标记与大模型隐状态。二是倾听期的重复静音被时序思维链取代。信号规格方面，流式语音编码器帧率为 12.5 Hz ，语音编解码器同样工作在 12.5 Hz ，大模型骨干初始化自 Qwen2.5-1.5B-Instruct ，编码器分词器与编解码器沿用 SALM-Duplex 配置。

下图用 4 组时间轴对照轮流、全双工、边听边想与人类思维的差异，阅读时可先看用户与智能体两条时间轴是否交叠，再看红色重叠区与蓝色圆点的含义，最后对照右下人类思维云的增量联想方式，底部图例有助于区分承接、抢话、空闲与思考 4 种符号。

[![原论文 Figure 1：Comparison of a) turn-based SDLMs, b) full-duplex SDLMs c) chronological thinking in full-duplex…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-1.png)

*论文图 1：轮次交替与全双工及边听边想三种对话模式与人类倾听思维的对照示意（原论文 Figure 1）。*

像素显示左上轮流模式用户与智能体波形严格错开，中间由绿色虚线分隔。右上全双工出现红色重叠区，绿色箭头标示轮次承接，红色箭头标示抢话，智能体倾听段为黑色虚线空闲等待。左下本文方案倾听段换成蓝色圆点，表示边听边想，仍保留承接与打断箭头与红色重叠区。右下人类示例用思维云展示按语义片段的增量联想，如由 Tony Stark 联想到 Iron Man 与 Jarvis ，底部图例明确区分 4 种符号的含义。

以 1 秒用户语音为例，流式语音编码器按 12.5 Hz 输出约 12 帧连续嵌入 X ，经模态适配器投影后与智能体文本嵌入相加送入解码器大模型。大模型自回归预测智能体文本通道标记，倾听期输出思维链标记而非静音，起答后输出应答文本。其最后隐状态 h 与已生成的文本及语音历史共同条件化 Transformer 解码器，逐帧预测语音标记，再经语音投影层与音频编解码器合成波形。原文未披露嵌入维度与投影层宽度，帧率变化仅给出 12.5 Hz 这一级。

### 五类节点与迟放截断让思考在因果约束下保持完整

思维链受 ACT-R 认知架构启发，定义 5 类节点。实体节点对应视觉模块，抽取对话中的实体。意图节点对应目标模块，表示用户目的。动作节点对应操作模块，表示智能体可执行操作。知识节点对应陈述性记忆模块，召回事实或过程知识。逻辑节点对应产生式系统，记录智能体生成的规则或推理。节点写作花括号内节点类型加节点属性，类型顺序不固定，完全由语义片段决定。附录 3 轮订餐示例展示了生日意图、意大利菜实体、人数加总与跨轮 @ctx 实体绑定，方括号转写仅用于数据生成，不进入模型输入输出流。

下图展示 CT-Duplex 的双流网络与双通道对齐关系，建议沿左侧用户波形经编码器到嵌入区的上行路径阅读，再看右侧文本通道中蓝色思维标记与应答文本的排列，最后追踪虚线对齐到下方双路音频通道的映射，并注意绿色箭头的回流方向与红色打断区的对应位置。

[![原论文 Figure 2：The network architecture of CT-Duplex with chronological thinking mechanism.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-2.png)

*论文图 2：CT-Duplex 双流架构示意：流式编码器与大模型骨干及文本与语音投影层协同生成思维与应答（原论文 Figure 2）。*

像素中左侧用户波形经流式语音编码器得到用户嵌入，右侧文本通道按 `<SIL>` 、蓝色 C1 C2 C3 、 T1 T2 T3 、 `<PAD>` 、 `<SIL>` 与蓝色 C1 C2 C3 的顺序排列，蓝色块对应思维链， T 块对应 Sure I can help you 等应答文本。解码器大模型的隐状态同时送入文本投影层与 Transformer 解码器，后者经语音投影层与音频编解码器生成下方两路音频通道。绿色虚线标示对齐，绿色箭头标示文本嵌入与音频波形的回流，底部图例区分轮次承接、抢话、边听边想与对齐符号，红色块标示打断重叠区。

为满足因果与延迟，思维链标记 C 前后加上起始 `<BOC>` 与结束 `<EOC>` ，放入原静音位置。记思维链长度为 M ，原静音长度为 S 。若 M 不大于 S 减 2 ，则替换最后 M 加 2 个静音，使思维尽量迟放，保证对应语义片段的思考出现在该片段之后。若 M 更长，则按节点切分，保留前 n 个节点使累计长度 M ′ 不超过 S 减 2 ，舍弃后续节点，优先保证完整节点与应答不受挤占。训练采用多通道下一标记预测，联合微调流式语音编码器、大模型骨干与 Transformer 解码器，思维链本身由 Qwen2.5-72B-Instruct 按对话文本离线生成。

### 合成对话与打断构造支撑十余千小时的实时学习

训练数据全部经合成扩展。通用对话 GenConv 以 Wikipedia 主题为种子，覆盖常识与时事，由 Qwen2.5-72B-Instruct 生成文本对话。推理对话 SpokenWOZ-G 以 SpokenWOZ 训练集为种子，按相同格式生成跨轮、时间、数学与语义推理对话，并用 thefuzz 计算相似度，丢弃相似度超 90% 的重复样本。知识对话 Llamaq-G 对 Llama Questions 采用同样流程。三者规模分别为 10.5 k 小时、 2.0 k 小时与 2.7 k 小时，文本对话同步生成对应的时序思维链。

文本对话与思维链经 Step-Audio-TTS-3B 合成为语音，该模型支持高质量声音克隆。为学会打断行为，每轮以 50% 概率截断智能体语音以制造用户抢话，抢话后强制 0.64 s 延迟智能体才停止发声。用户话毕到智能体起答之间保留 0.32 s 间隔，以增强自然度。上述构造沿用 SALM-Duplex 的验证有效的做法。

模型实现基于 NeMo 工具，在 8 张 L40s GPU 上训练，每张显存为 48 G 。大模型骨干初始化自 Qwen2.5-1.5B-Instruct ，语音编码器、分词器与语音编解码器沿用 SALM-Duplex 配置。优化器为 AdamW ，学习率初值为 3e-4 ，预热 2,500 步，采用逆平方根衰减。流式语音编码器、大模型骨干与 Transformer 解码器联合微调，目标为多通道下一标记预测，梯度同时流经文本与语音两条预测路径。

需要明确的是，思维链生成器 Qwen2.5-72B-Instruct 只参与离线数据标注，不参与在线推理。推理时模型完全根据已到达的过去音频增量生成思维节点，不依赖完整话语或外部转写。附录指出若用流式语音识别转写充当思考，其上限对应无思考文本大模型的表现，且填充标记会破坏语义连贯，这也是本文采用结构化节点而非转写拼接的原因之一。

### 推理显著变强而知识几乎不变的内容与交互证据

评测公平性先说清。内容质量在 SpokenWOZ 推理对话与 MtBenchEval 日常多轮对话上检验，指标为 gpt-4o-mini 给出的 0 到 5 分 GPT 分数、文本 BLEU 与 Sentence-BERT 相似度。知识能力在 Llama Questions 与 Web Questions 上以准确率检验，生成语音经 Whisper-large-v3 转写后计分。交互行为在 Impatient 数据上检验，平均约每 2 秒一次打断，指标为轮次承接延迟、打断延迟与 1.5 s 内停止占比。对照包含复现的 SALM-Duplex 、无思维的 CT-Duplex w/o thk 与有思维的 CT-Duplex w/ thk ，另设以真实用户文本驱动大模型的 GT-LM 作为级联上限参考。原文未报告方差与置信区间，听测规模后文单独说明。

#### 需要推理的对话收益最大

下表列出 SpokenWOZ 与 MtBenchEval 上的三项内容指标，阅读时先看同一数据集内四行由弱到强的排序，再对比有无思维两行的差值，最后观察 GT-LM 上限在两类对话上的不同位置，注意日常对话与推理对话的收益差异，并留意解耦语音预测带来的基线差距。

| Method | GPT score | SpokenWOZ BLEU | Sentence-BERT | GPT score | MtBenchEval BLEU | Sentence-BERT |
| --- | --- | --- | --- | --- | --- | --- |
| GT-LM | 2.48 | 7.60 | 0.55 | 3.15 | 10.18 | 0.73 |
| SALM-Duplex∗ | 2.11 | 8.73 | 0.34 | 2.25 | 5.31 | 0.47 |
| CT-Duplex w/o thk | 2.40 | 12.92 | 0.52 | 2.39 | 7.00 | 0.64 |
| CT-Duplex w/ thk | 2.61 | 16.30 | 0.59 | 2.44 | 7.34 | 0.67 |

数据显示有思维的 CT-Duplex w/ thk 在 SpokenWOZ 上取得 GPT 分数 2.61 、 BLEU 16.30 与 Sentence-BERT 0.59 ，均高于无思维的 2.40 、 12.92 与 0.52 ，也高于复现的 SALM-Duplex 的 2.11 、 8.73 与 0.34 。按原文口径， GPT 分数相对提升为 8.75% 。在 MtBenchEval 上对应分数为 2.44 、 7.34 与 0.67 ，相对无思维的 2.39 、 7.00 与 0.64 仅小幅上移，相对提升约 2.09% 。 GT-LM 在 SpokenWOZ 上为 2.48 ，低于有思维的 2.61 ，但在 MtBenchEval 上以 3.15 、 10.18 与 0.73 居首，说明无需推理的日常对话更受益于理想输入，而需要推理的任务更受益于边听边想。两版 CT-Duplex 均明显优于 SALM-Duplex ，支撑了解耦语音预测负担的有效性。

#### 知识记忆与交互时机

下表比较知识问答准确率，包含模态、参数量与是否全双工信息，阅读时先看 CT 两行与 SALM-Duplex 的对比，再看与 7B 与 9B 模型的规模差异，最后注意半双工大参数模型不受实时因果约束，不宜直接等同比较，重点观察思维带来的增量是否微弱。

| Method | Modality | # Params Full-duplex | Llama Questions | Web Questions |
| --- | --- | --- | --- | --- |
| TWIST | S→S | 7B | 4.0 | 1.5 |
| SpeechGPT | S→T | 7B | 21.6 | 6.5 |
| Spectron | S→T | 1B | 21.9 | 6.1 |
| Moshi | S→S | 7B | 21.0 | 9.2 |
| GLM-4-Voice | S→S | 9B | 50.7 | 15.9 |
| SALM-Duplex∗ | S→S | 1.5B | 15.0 | 6.7 |
| CT-Duplex w/o thk | S→S | 1.7B | 30.4 | 13.2 |
| CT-Duplex w/ thk | S→S | 1.7B | 31.4 | 13.3 |

在 Llama Questions 上，有思维版本为 31.4% ，仅比无思维版本的 30.4% 高 1.0 个百分点。在 Web Questions 上为 13.3% ，比无思维版本的 13.2% 高 0.1 个百分点，基本可视为无增益，符合知识问答主要依赖记忆而非推理的判断。两版 CT-Duplex 均高于复现的 SALM-Duplex 的 15.0% 与 6.7% ，也高于参数量更大的 Moshi 7B 的 21.0% 与 9.2% 。仅 GLM-4-Voice 以 50.7% 与 15.9% 居首，但其参数量为 9B 且为半双工结构，不受实时因果约束，不宜直接等同比较。

下表检验轮次承接延迟、打断延迟与打断成功率，数值越低越好对应前两列，成功率越高越好对应末列，阅读时先对齐两列延迟的含义，再看有无思维两行的变化方向，最后对比外部基线在承接与打断上的各自最优位置，注意成功率与延迟的权衡关系。

| Method | Turn-taking Lat (↓) | Lat (↓) | Barge-in Suc rate (↑) |
| --- | --- | --- | --- |
| Freeze-Omni | 1.17 | 1.20 | 79.50% |
| dGSLM | 0.57 | 0.86 | 85.00% |
| Moshi | n.a. | 0.81 | 55.10% |
| ORISE | 0.43 | 0.61 | 96.80% |
| SALM-Duplex∗ | 0.92 | 0.69 | 87.50% |
| CT-Duplex w/o thk | 0.45 | 0.53 | 88.63% |
| CT-Duplex w/ thk | 0.68 | 0.54 | 94.05% |

轮次承接延迟上 ORISE 以 0.43 s 仍为展示行中最优，无思维的 CT-Duplex 为 0.45 s 紧随其后，有思维版本为 0.68 s ，增加了 0.23 s 。打断延迟上无思维版本以 0.53 s 为展示行中最优，仍低于 ORISE 的 0.61 s ，有思维版本为 0.54 s ，基本持平，仅增加 0.01 s 。打断成功率上 ORISE 以 96.80% 居首，有思维版本以 94.05% 次之，高于无思维版本的 88.63% 。总体表明思维链未破坏倾听期到应答期的切换，打断处理保持可用，代价主要体现在轮次承接延迟的上升，而非打断响应本身。

#### 主观偏好与连带提升

下图为有无思维两版系统的盲测条形图，分为音频保真度与内容质量两行，每行由胜、平、负 3 段构成，阅读时先看蓝色胜率段的长度，再核对 3 段相加是否为 100% ，最后对比两行负率段的差异，白色段对应平局，橙色段对应失败，标题已标明对照双方。

[![原论文 Figure 3：The A/B test results, including evaluations of both audio generation quality and response content…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/sigdial-2026/d36b9df18b75/figure-3.png)

*论文图 3：有无时序思维盲测对照条形图：音频保真度与内容质量的胜平负占比分布（原论文 Figure 3）。*

像素中音频保真度行为蓝色胜率段 0.6375 ，白色平局段 0.1875 ，橙色负率段 0.1750 ，三者相加为 1 。内容质量行为 0.5500 、 0.1750 与 0.2750 ，同样相加为 1 。两行蓝色胜率均超过一半，且音频行高于内容行。内容行橙色负率高于音频行，说明内容判断分歧更大。原文解释认为内容变好降低了文本预测损失，使模型能从音频预测损失中学到更多，从而连带提升音频质量。该盲测由 10 名流利英语受试者完成，每人随机评 20 条，每条至少听 3 遍，可重复播放，评价维度分为音频保真度与内容质量，未报告置信区间。

### 思维完整率与截断取舍决定多长思考能被放下

结构化节点的另一动机是压缩长度，使思考能在有限静音窗口内完整保留。原文统计每个用户话语的帧数与对应思维链标记数，计算标记数少于帧数的轮次占比。该口径直接对应能否不挤占应答而放下思考，占比越高说明截断丢弃越少。若占比偏低，则前 n 个节点的截断策略会频繁生效，长尾推理可能被截断。

下表给出 3 个训练集上的完整保留比例，阅读时先看三行均超过 90% 的总体水平，再对比通用对话与知识问答两类数据的差异方向，最后结合前文迟放与截断规则理解长尾丢弃的发生频率，注意测试集未报告对应统计，外推时需谨慎。

| Dataset | Ratio |
| --- | --- |
| GenConv | 98.91% |
| SpokenWOZ-G | 96.78% |
| Llamaq-G | 94.69% |

GenConv 为 98.91% ， SpokenWOZ-G 为 96.78% ， Llamaq-G 为 94.69% ，三者均超过 90%，说明多数轮次无需截断即可放下全部节点。通用对话最长尾最少，知识问答相对最低，但仍保持在 94% 以上。结合前文 M 与 S 减 2 的迟放与截断规则，可以认为压缩表示在训练分布上基本够用，但原文未给出测试集上的对应统计，也未按话语时长分段报告长话语的截断率，这是完整性结论的外推边界。

归因方面，本文仅对照有无思维两版系统，未进一步消融 5 类节点中每一类的贡献，也未对比不同思维长度或不同迟放位置的影响。附录虽讨论了流式语音识别转写作为思考的替代路线，并指出其上限对应 GT-LM 且填充标记破坏连贯，但未给出该路线在相同数据上的可运行分数，因此不能量化结构化节点相对转写拼接的净收益。知识问答上几乎无增益这一负结果也提示，思维链的价值集中在需要多步推理的对话，而非事实记忆。

### 结论成立的前提、代价与复现核对

结论成立依赖若干前提。训练语音全部来自 Step-Audio-TTS-3B 合成，其中通用对话约 10.5k 小时，推理增强对话约 2.0k 小时，知识增强对话约 2.7k 小时。文本对话先以维基类话题与问答集为种子，由大规模指令模型生成，再经语音克隆合成，相似度过高样本已被过滤。打断与间隔按 50% 概率、0.64 s 停止延迟与 0.32 s 起答间隔构造，评测打断约每 2 秒一次。这种受控分布与真实自发对话中的重叠、噪声、口音与长尾话题仍有距离。

内容指标依赖 gpt-4o-mini 打分与 Whisper-large-v3 转写，自动分数与真实听感之间可能存在偏差，且原文未报告方差与置信区间，单次运行的波动范围未知。任务型对话采用 0 分至 5 分的模型打分，辅以文本相似度度量，知识问答采用准确率，交互行为采用承接延迟、打断延迟与打断成功率，盲测同时考察音频保真度与内容质量。不同指标各有侧重，不宜只看单一分数下结论。

代价方面需要权衡。有思维版本在轮次承接延迟上高于无思维版本，而打断延迟基本持平，打断成功率反而有所提升。模型参数量因新增解码器略有增加，离线标注依赖大规模指令模型，训练需多卡并行。原文未披露吞吐与显存占用，实时部署的计算开销仍待实测。知识问答上的增益微弱，说明若任务以事实记忆为主，不必为思维链付出额外复杂度。

实现层面可核对三件事。模型骨干取自轻量指令模型，语音编码器以每秒 12.5 帧输出连续表征，语音编码采用低帧率编解码器，优化器采用自适应矩估计变体并配合逆平方根退火，学习率从 3e-4 起步并有 2500 步预热，训练使用 8 张 L40s。代码、权重与数据均未提供公开下载，核查未发现可用作者资源，系统不可直接运行。第三方 NeMo 工具可获取，但仅覆盖实现框架。

附录给出流式语音识别对比讨论、3 轮订餐思维链示例、完整率统计、盲测流程与仅用 ChatGPT 做语言润色的声明，可作为复现数据构造与评价流程的文字依据，但关键超参与合成语音的随机种子等细节仍需自行补齐。工程选型上，若应用需要全双工实时交互且涉及多轮推理，边听边想是值得尝试的路线，重点观察推理对话的改善与承接延迟的容忍度。若应用以知识问答或短指令为主，或对轮次承接极为敏感，则应谨慎评估。原文未提供试听页，判断应以盲测条形图与客观指标为准，不宜自行想象听感差异，部署前还需在真实噪声与长话语上补充验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：流式语音编码器帧率为 12.5 Hz ，语音编解码器生成码率对应 12.5 Hz ，用户抢话后智能体停止延迟为 0.64 s ，用户话毕到智能体起答间隔为 0.32 s ，采样率与声道数等原文未披露
- **训练与评测数据**：合成训练含 GenConv 10.5 k 小时与 SpokenWOZ-G 2.0 k 小时与 Llamaq-G 2.7 k 小时，种子覆盖 Wikipedia 主题与 SpokenWOZ 训练集格式与 Llama Questions 格式，经 Qwen2.5-72B-Instruct 生成文本对话与思维链并用 Step-Audio-TTS-3B 合成音频，相似度超 90% 的生成对话被丢弃，每轮以 50% 概率构造打断，评测使用 SpokenWOZ 与 MtBenchEval 与 Llama Questions 与 Web Questions 与 Impatient 数据集
- **算力与训练耗时**：使用 NeMo 工具在 8 张 L40s 48 G GPU 上训练，大模型骨干初始化自 Qwen2.5-1.5B-Instruct ，推理硬件与训练耗时原文未披露
- **核心超参数与配置**：优化器为 AdamW ，学习率初值为 3e-4 ，预热 2,500 步，采用逆平方根衰减，联合微调流式语音编码器与大模型骨干与自回归 Transformer 解码器，目标为多通道下一标记预测，思维链由 Qwen2.5-72B-Instruct 生成
- **推理速度与部署开销**：CT-Duplex 参数量为 1.7 B ，对照 SALM-Duplex 为 1.5 B ，轮次承接延迟与打断延迟与成功率见主表， RTF 与吞吐与显存原文未披露
- **开源产物与协议状态**：原文未提供代码与权重与数据的公开下载，核查未发现可用作者资源， NeMo 为第三方公开工具，系统不可直接运行
- **附录与补充材料要点**：附录讨论流式语音识别转写作为思维上限及其填充破坏问题，给出三轮订餐对话思维链示例与跨轮实体绑定写法，统计思维链完整率，说明主观盲测由 10 人每人评 20 条且每条至少听 3 遍，声明仅用 ChatGPT 做语言润色

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 7.5/10 | 技术严谨 6.6/10 | 实验充分 6.2/10 | 清晰度 7.1/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:sigdial:2026:conference-paper-id:2026.sigdial-1.33`
- 会议来源：[官方记录](https://aclanthology.org/2026.sigdial-1.33/) · [官方 PDF](https://aclanthology.org/2026.sigdial-1.33.pdf)
- DOI：`10.18653/v1/2026.sigdial-1.33`
- Track：SIGDIAL 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以因果自回归公式与M与S-2后置截断规则实现聆听期增量思考，严格无前视且停说即转回复。

- 核心优势：在SpokenWOZ上以直接有无思维消融实现GPT从2.40到2.61与BLEU大幅提升，且打断行为保持可比。

- 主要短板：自动评测经Whisper转写加gpt-4o-mini打分无置信区间显著性检验，人类A/B仅10人且无MOS对照。

- 主要短板：宣称流式零额外延迟却未提供RTF算法前瞻帧延迟与推理硬件规格，仅有轮次延迟数字。

---

[← 返回 sigdial-2026 论文汇总](/audio-research-portal/posts/conference-sigdial-2026/)
