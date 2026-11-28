---
title: "Can Large Audio-Language Models Ignore Multilingual Distractors? An Evaluation of Their Selective Auditory Attention Capabilities"
date: 2026-11-27
draft: false
description: "论文提出 MUSI 受控诊断，以英语目标对话叠加四种语言的合理干扰检验 6 个大音频语言模型，发现单流优异不能保证鸡尾酒会稳健，错误以干扰跟随为主且分离只能缓解声学重叠而留下归因缺口。"
tags: ["基准测试", "基准设计", "口语理解"]
categories: ["impactspeech-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多语干扰下大音频语言模型能否只听目标"
paper_digest_original_title: "Can Large Audio-Language Models Ignore Multilingual Distractors? An Evaluation of Their Selective Auditory Attention Capabilities"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.3"
paper_digest_workbench_source_sha256: "148f0c4a43434109c5bbbb9ad8693976f5bbcd94670ca07b4e7e9b8fb72b92ec"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.impactspeech-1.3/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.impactspeech-1.3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "口语理解"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文提出 MUSI 受控诊断，以英语目标对话叠加四种语言的合理干扰检验 6 个大音频语言模型，发现单流优异不能保证鸡尾酒会稳健，错误以干扰跟随为主且分离只能缓解声学重叠而留下归因缺口。"
paper_digest_reader_sections: [{"heading":"目标对话与多语干扰共存时单流理解为何不可靠","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三种输入路径如何把声学重叠与来源归因分开检验","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"受控语料与诊断标签如何保证问题只能从目标得到答案","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"默认混合下单流优势为何不能直接迁移到鸡尾酒会推理","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"信噪比与错误来源如何揭示声学主导与来源混淆","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"受控诊断的边界与可复现部署前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Illinois Urbana-Champaign"],"name":"Heejoon Koo"}]
paper_digest_abstract_sha256: "077e5d3726ec230dc596278823f500e13e934d8572ab412d8bf6f06c312ec835"
paper_digest_sidecars: {"citation.bib":{"sha256":"37a7da6bde843a926d91d929a83f15c5902c5a48bf72ef9cfd61906171327066","url":"/audio-research-portal/client/papers/2026-11-27/conference-298f17a19ae82ad001c5720c/citation.bib"},"citation.json":{"sha256":"0f5260ce47bea1a4d83903b178f9b62ce39f66eb8f3e1465fa886a16c981734f","url":"/audio-research-portal/client/papers/2026-11-27/conference-298f17a19ae82ad001c5720c/citation.json"},"citation.ris":{"sha256":"15753e54ac1a8125eba50d646298fb35a747ec28f95ea9b8dd7960473c9c49c4","url":"/audio-research-portal/client/papers/2026-11-27/conference-298f17a19ae82ad001c5720c/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"531a71f679bd4ce44d2acbfae9d59eb3f976e5cf94ed09871d854815df06c9a5","url":"/audio-research-portal/client/papers/2026-11-27/conference-298f17a19ae82ad001c5720c/rethink-context.json"}}
paper_digest_paper_id: "conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.3"
paper_digest_source_kind: conference
paper_digest_conference_id: "impactspeech-2026"
paper_digest_conference_name: "impactspeech-2026"
paper_digest_doi: "10.18653/v1/2026.impactspeech-1.3"
paper_digest_conference_doi: "10.18653/v1/2026.impactspeech-1.3"
paper_digest_conference_record_url: "https://aclanthology.org/2026.impactspeech-1.3/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.impactspeech-1.3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "9a43a2cfca03cf4f3dbad197f22cf35e1209bc73ff2eea70de142000bae0e34f"
paper_digest_api_reader_plan_sha256: "4b491c4eb55e8f0800f608c956a5b7b27b2ad46b08b46ca5dc9639c582d3a9b8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "21775b7e79ff6641c7fad50e1e06b399d54b70c682999a8725b2dedd5e1ce04c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9dca28aa625c37e0572ba6ad07e6769314f733b2c3d6e35e0ca8dee1658c0761"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e75c103f553cfc9094170f2e34f7552fff40d4660cbca469419bad12a58b1f03"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8d1a7cc8f9a10606d45216f1e11fc11d485eaf8c6446ee15a397d73b31fc3e61"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.spoken-understanding","label":"口语理解"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多语干扰下大音频语言模型能否只听目标

> 英文题目：*Can Large Audio-Language Models Ignore Multilingual Distractors? An Evaluation of Their Selective Auditory Attention Capabilities*

> 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.3`
> DOI：`10.18653/v1/2026.impactspeech-1.3`
> Track：ImpactSpeech 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.3/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[口语理解](/audio-research-portal/papers/?concept=task.spoken-understanding)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.5/10 | 技术严谨 6.6/10 | 实验充分 6.5/10 | 清晰度 7.0/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Heejoon Koo：University of Illinois Urbana-Champaign

## 📌 核心摘要

**问题与瓶颈：** 大音频语言模型需要在重叠语音下完成源接地的理解与推理，输入为单声道混合语音，包含英语目标对话与同域语义合理的干扰语音，输出为四选一答案且只能依据目标流作答。现有转写、分离标注与单流理解基准只考核转写质量、信号重建或干净单流问答，无法检验模型在声学重叠与语义竞争并存时是否跟随了错误声源。在航空与医疗等场景中，同语种或跨语种伴随语音都可能提供突出但无关的证据，目标占优度下降与干扰语种变化会进一步放大源混淆，导致流利但源不一致的回答。

**核心思路与方法架构：** 与最接近的单流问答和分离重建基线相比，增量在于构造多语种可控干扰下的源归因诊断，并用单流、分离两阶段与端到端鸡尾酒会三种设置分离声学重叠与源归因瓶颈。沿一条样本看，英语目标对话描述 402 房低血压与限制补液，西班牙语、韩语或中文干扰流描述恢复室镇痛与呼吸抑制，两者在 0 dB 目标干扰比下混合为单声道输入，问题询问拒绝 20 微克血管加压药的临床指征，正确选项只能从目标流多轮证据整合得出。MUSI 共 200 个样本，覆盖 4 个安全关键域各 50 个，目标固定为男性英语语音，干扰固定为女性语音，全部经 TTS 合成并在 30 s 内截断。单流设置只给目标，分离设置先用 ClearerVoice-Studio 分离再对开放权重模型做双流置信度比较、对闭源模型做双流顺序提示，鸡尾酒会设置直接输入混合语音并要求只依据标为 TARGET 的男性英语作答，全部评测模型冻结不更新。

**关键实验与核心代价：** 在 0 dB 混合与三种设置下，6 个模型的单流准确率均高于鸡尾酒会准确率，例如 Gemini-2.0-Flash 从 0.955 变为 0.242，Audio-Flamingo-3 从 0.908 变为 0.580，Qwen2-Audio 从 0.773 变为 0.466，均表明单流理解不能保证并发推理。分离推理一般高于鸡尾酒会但未恢复单流水平，例如 Qwen2-Audio 从 0.466 变为 0.529，MERaLiON-2 从 0.601 变为 0.693，而 Gemini-2.0-Flash 分离为 0.952 接近单流，GPT-4o mini Audio 鸡尾酒会为 0.636 反而高于分离的 0.586。校准同步恶化，Audio-Flamingo-3 的 ECE（期望校准误差）从 0.030 上升为 0.141。错误以干扰接地为主，鸡尾酒会下干扰占比在 Qwen2-Audio 为 0.769，在 Audio-Flamingo-3 为 0.869，在 Gemini-2.0-Flash 为 0.918，而无依据推理均低于 0.052。本工作为冻结推理诊断而无训练开销，核心代价在推理侧：分离两阶段额外引入分离器与双流比较仍未解决源归因，0 dB 下目标流选择率仅为 Qwen2-Audio 的 59.0% 到 MERaLiON-2 的 78.5%，选错干扰流时准确率骤降且 ECE 很大，即使 +10 dB 平均 SI-SDR（尺度不变信号失真比）达 16.16 dB 仍出现自信的错误流选择。

**适用边界与深读导览：** 结论仅在英语目标、双人单声道合成混合、固定男目标女干扰、单一现成分离器与四选一问答格式下成立，未覆盖自然重叠、中断、空间线索、信道变化、非英语目标、同性别混合与开放式生成中的跨流混合。200 个样本限制了细分域统计效力，开放权重与闭源在流选择流程与校准可用性上的不对称也限制跨组可比性。附录 A 给出时长、相似度与分离质量统计，附录 B 给出提示词、解码与校准公式，附录 C 给出分信噪比、分域与流选择诊断，可按需深读以复核机制与表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 目标对话与多语干扰共存时单流理解为何不可靠

鸡尾酒会难题在听觉神经科学与语音分离研究中由来已久，核心要求听者在声学混合中组织声源并持续注意任务相关语音，同时抑制竞争语音。既有工作多聚焦多说话人识别、说话人区分与信号重建，衡量转写与重建质量。对大音频语言模型而言，能转写或能分离并不保证能围绕正确声源推理，模型可能依赖错误声流、混淆不同来源或生成流畅但与目标证据不一致的答案。在航空与医疗等高风险领域，这种来源混淆会带来实际代价，而周围语音的语言变化还可能引入额外的可靠性波动，需要专门诊断加以澄清。

#### 诊断任务的来源划分

MUSI 把上述担忧转化为可控诊断任务，每一项都配对一段英语目标对话与一段同领域看似合理的干扰语音，干扰语言覆盖英语、西班牙语、韩语与中文，兼顾同语与跨语条件。每项附带一个仅能从目标推导的问题与 4 个选项，其中正确选项唯一依据目标，干扰依据选项仅能从干扰流得到支撑，另有无依据选项不受任一声流支持。评测要求模型在单耳混合或分离条件下只依据男性英语目标作答，完全忽略女性多语干扰，从而检验答案究竟依据目标、竞争声流还是凭空推断，揭示选择性注意的真实水平。

既有评测与该目标存在明确分工差异，面向多说话人的远场识别与单通道分离基准关注转写、区分与信号重建质量，不检验基于语言模型的推理与来源归因。通用大音频语言模型评测多采用干净单流音频，考察理解与多跳推理，但不设置语义并发干扰。可信评测关注声学扰动或指令层威胁，不诊断来源误归因。正因如此，单流表现优异的模型在并发语义干扰下是否仍能坚持目标，干扰语言不同是否带来系统性差异，此前缺乏直接证据，而这正是部署前需要回答的关键问题，不容回避。

#### 干扰控制与评测条件的配合

困难来自声学重叠与语义合理性的叠加，目标与干扰在时间上高度重叠且同属安全关键领域，干扰内容看似相关但与当前任务无关。模型既要抵抗能量层面的掩蔽，又要抵抗语言层面的诱惑，在目标占优与干扰占优的不同能量对比下保持稳定的来源选择。MUSI 通过控制目标干扰能量比与干扰语言，观察准确率随条件的起伏以及错误究竟落入目标误推理、干扰跟随还是无依据推断，从而把选择性听觉注意刻画为可测量的可靠性能力，而非抽象口号，为后续改进提供抓手之外的实证依据。

任务覆盖航空航海、医疗健康、金融商务与施工工厂 4 个安全关键领域，共设 200 个案例，每个领域 50 个，目标与干扰采用固定说话人设定并核对时长与语义相似度，使语言条件成为主要可比维度。为区分声学重叠与来源归因，评测对照仅含目标的单流条件、先分离再推理的两阶段条件与直接输入单声道混合的端到端条件，默认能量比为 0 dB 并另设高低能量比，观察目标占优与干扰占优下的稳定性。

### 三种输入路径如何把声学重叠与来源归因分开检验

要理解评测逻辑，可先沿主路径阅读框架图，图中从左向右依次呈现目标与干扰的产生、混合、分离与作答 3 条路径，有助于一次看清单流、两阶段分离与直接混合的对照关系。该图用不同颜色区分 3 条评测路径，是全文方法讨论的地图，下文先做导引，再结合图面细节解释箭头走向与汇合位置，最后说明信号规格与执行细节，为后续诊断奠定基础。

[![原论文 Figure 1：Our MUSI evaluation framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/3c15da4ca053/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/3c15da4ca053/figure-1.png)

*论文图 1：三路评测流程示意，目标与干扰先混合再分别经单流、两阶段分离与直接混合送入模型作答（原论文 Figure 1）。*

图面左侧上方为标有 ENG 黄色气泡的蓝色目标头像与蓝色目标波形，下方为带有多种文字地球图标的蓝色干扰头像与黑色干扰波形，两者在中左汇成粉紫渐变的混合波形。中部黑色分叉箭头表示声源分离，右侧分出蓝色与黑色两路分离波形。最右侧为戴耳机机器人与黄蓝问答气泡，绿色上箭头表示第一种单流路径，黄色中箭头表示第二种两阶段分离路径，红色下箭头表示第三种直接混合路径，3 路最终汇入同一模型，层次清晰且易于追踪。

#### 路径分工与作答要求

3 种设置构成递进对照，第一种单流只输入英语目标，用于测量无干扰时的理解上限。第二种两阶段先用 ClearerVoice-Studio 分离混合，再用分离流作答，其中能报告词元级对数几率的 4 种模型分别处理两路分离流并按归一化选项置信度选择其一，其余两种模型则在同一提示中依次接收两路分离流并生成答案。第三种鸡尾酒会直接输入单声道同耳混合，要求模型仅依据标为目标的男性英语语音作答，完全忽略标为干扰的音频。

提示强调需综合目标内多处证据并只输出单个大写字母，不附解释与推理步骤，检验严格。目标对话与干扰对话同属一个安全关键领域，干扰在语义上看似合理但与题目无关，题目只能依据目标作答。这种设计把声学重叠与来源归属分开，若分离后恢复单流水平则瓶颈在声学，若仍未恢复则瓶颈在模型自身的来源归因，由此形成可诊断的对照链条。

#### 信号规格与数据构成

信号层面，所有音频采样率为 16 kHz 并以单声道同耳混合呈现，每路时长上限为 30 s ，默认目标干扰能量比为 0 dB 并另设多个能量档，每题固定做 3 种选项轮换以减少顺序偏好。全部语音均由语音合成生成并固定说话人分工，目标为男性、干扰为女性，数据共 200 例并覆盖航空航海、医疗健康、金融商业与施工工厂 4 个领域，每个领域 50 例。

评测覆盖 6 个大音频语言模型，论文将其分为两组，其中一组包含 4 个模型并可报告词元级对数几率，另一组包含 2 个模型，准确率对全部模型报告，校准误差仅对前一组报告。这里仅转述论文的分组与指标口径，不作作者资源可达性判断。原文未披露编码器帧率、特征维度与张量形状等底层细节，也未训练新声学或语言模块，本质是外部份离与提示控制的诊断流程，复现时需注意缺失维度。

### 受控语料与诊断标签如何保证问题只能从目标得到答案

语料构建采用分阶段生成与修订流程，先按航空与海事、医疗与医药、金融与商业、建筑与工厂共 4 个领域构思主题与目标对话，再生成同领域干扰文本并构造诊断选项。文本经人工书写与大语言模型辅助起草后逐项人工修订，每路时长控制在上限以内。质量控制由 2 名标注者独立核验目标可答性、正确选项的目标唯一依据、干扰选项的干扰唯一支撑以及无依据选项的无支撑性，同时检查问题需综合目标多轮证据且不依赖表层词汇线索，翻译还需核对实体、事件顺序、数字与单位的一致性并用回译筛查，存在歧义或泄露的条目一律修订或删除，确保诊断纯净。

下表为数据集统计的精简子表，仅展示目标行的脚本长度、问题长度、选项长度、相似度与时长，用于核对长度与时长是否构成混淆，完整对照见表后说明，敬请结合后文干扰行差异理解。

| Stream | Language | Script Length | Target–Distractor Similarity ↑ | Duration |
| --- | --- | --- | --- | --- |
| Target | English | 45.8 ± 4.6 words | – | 21.4 ± 2.3 s |

精简子表显示目标英语脚本平均长度为 45.8 ± 4.6 words ，问题平均长度为 13.4 ± 2.2 words ，选项平均长度为 12.1 ± 2.1 words ，时长平均为 21.4 ± 2.3 s 。原文完整 Table 4 （本精简表未列出）还包含 4 种干扰语言行的脚本长度、问题与选项长度、目标干扰相似度与时长，其中相似度在 0.796 至 0.842 之间总体可比，非英语干扰时长略长，西班牙语与韩语分别长约 3.3 s 与 2.6 s ，可能影响时间重叠，需在解读语言差异时一并考虑，而非仅归因于语言本身，体现控制混淆的用意。

诊断标签把错误按证据来源分为 3 类，目标误推理指答案依据目标但推理有误，干扰跟随指答案得到干扰流支撑，无依据推断指答案不受任一声流支持。在无干扰的单流条件下，干扰跟随自然不适用，错误只能在目标误推理与无依据推断之间分配。相似度经多语向量模型度量，分离质量经 SI-SDR （尺度不变信号失真比）与 ASR WER （自动语音识别词错误率）度量，具体随能量比变化的数值留待消融部分集中讨论，此处仅明确分类口径为后续归因做准备，避免混淆不同失败模式，保证分析一致。

### 默认混合下单流优势为何不能直接迁移到鸡尾酒会推理

评测协议与公平性核查需先说清，参评为 6 个大音频语言模型，论文将其分为两组，一组包含 4 个模型并可报告词元级对数几率，另一组包含 2 个模型。比较在单流、两阶段分离与鸡尾酒会 3 种条件下进行，默认能量比为 0 dB 并覆盖多个能量档，每题做 3 种选项轮换。准确率越高越好，校准误差越低越好，但后者仅对可报告词元级对数几率的一组报告。分离统一采用现成工具，混合为单声道同耳，固定男性目标与女性干扰且未平衡性别或测试同性别混合，跨组可比性本身受限，需谨慎解读组间差异，不宜过度外推。

#### 解码条件与比较口径

下表为论文报告的其中 4 种模型解码配置精简呈现，用于核对是否抽样、温度、截断与输出上限等推理条件是否一致，表后结合主结果讨论其影响，提示解码差异可能带来的公平性问题。这里仅转述论文记载的解码参数，不作作者资源可达性判断，跨模型比较时需把解码差异纳入考量。

| Model | do_sample | Temp. | Top-p | Top-k | Max tokens |
| --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | True | 0.7 | 0.5 | 20 | – |
| Qwen2.5-Omni | False | 1.0 | 1.0 | 50 | – |
| MERaLiON-2 | – | – | – | – | 256 |
| Audio-Flamingo-3 | True | 0.7 | 0.9 | – | 256 |

表中 4 种模型的抽样开关、温度与截断取值并不统一，输出上限也分为缺省与 256 两档，说明推理随机性控制存在差异，解读准确率与校准误差差距时应将该条件差纳入权衡。

#### 主结果与代价权衡

解码配置显示各模型采样与输出上限并不完全一致，比较时需考虑解码差异。论文完整主结果报告默认 0 dB 下的准确率与校准误差，单流明显高于鸡尾酒会，例如 Gemini-2.0-Flash 从 0.955 降至 0.242 ，说明单流理解不能可靠迁移到并发推理。两阶段分离一般优于直接混合但未恢复单流水平，唯有该模型分离后回升至 0.952 附近，而可报告词元级对数几率的一组校准误差随干扰明显上升，例如 Audio-Flamingo-3 从 0.030 升至 0.141 。

不同干扰语言间的极差也有模型差异，鸡尾酒会下 Qwen2-Audio 与上述模型的跨语言极差分别达 46.3 与 63.4 个百分点，文本相似度在 0.796 至 0.842 之间难以单独解释，原文提示还需考虑语音、时长与模型自身因素，不宜简单归因于语义相似。在高正能量比下鸡尾酒会偶尔略超单流，原文明确不视为系统性增益而归因于有限样本与解码波动。

错误来源分析进一步支撑上述判断，鸡尾酒会下失败多为跟随干扰流的来源混淆，而非无依据推断，论文报告 3 例模型的干扰占比分别达 0.769 、 0.869 与 0.918 ，无依据推断占比均低于 0.052 。这说明干扰主要改变答案的证据来源，而非随机猜测，分离后仍残留归因瓶颈，需在选择声流时显式校准置信度。

这些结论成立的前提是多项选择式来源归因与有限样本统计，未设人工听测对照，也未报告方差与置信区间，神经代理指标未参与主判断。分离虽减轻声学重叠但来源归因仍未解决，常出现高置信度的错误声流选择，表明强单流表现与鸡尾酒会稳健性之间存在缺口，选型时不能以后者直接代替前者，需多条件验证才能部署。

### 信噪比与错误来源如何揭示声学主导与来源混淆

要看清能量对比的作用，可先阅读能量曲线图，该图并排比较分离与鸡尾酒会两种路径下平均准确率随目标干扰能量比的变化，覆盖两个代表模型与 5 个能量档。导引提示先看横轴能量方向与纵轴准确率方向，再对比左右两面板的平坦与陡峭差异，最后落到错误类型与流选择数据，从而理解声学主导如何影响来源选择，掌握诊断的关键线索。

[![原论文 Figure 2：Average accuracy across target-to-distractor SNRs for two models under separation-based (left) and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/3c15da4ca053/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/impactspeech-2026/3c15da4ca053/figure-2.png)

*论文图 2：两个代表模型在分离与鸡尾酒会路径下平均准确率随能量比变化的对比曲线（原论文 Figure 2）。*

图面左面板为分离路径，两条曲线随能量比基本平坦且保持高位，橙色闭源曲线在上，蓝色开放权重曲线在下，横轴为 -10 dB 至 +10 dB 的目标干扰能量比，纵轴为 0.0 至 1.0 的准确率。右面板为鸡尾酒会路径，两条曲线均随能量比从左向右陡峭爬升，蓝色曲线在中段明显高于橙色曲线，两者在 +10 dB 处汇合至高位，图例用圆点实线区分 2 个模型并配浅色网格，趋势对比鲜明，说明显式分离有效缓解了能量掩蔽的影响。

随能量比的误差分布呈现系统性偏移，鸡尾酒会下负能量比以干扰跟随为主，目标转响后干扰占比下降而目标误推理增多，无依据推断始终保持在 0.15 以下，说明失败多为来源混淆而非凭空臆测。代表性 0 dB 鸡尾酒会下干扰占比分别达 0.769 、 0.869 与 0.918 ，而无依据占比均低于 0.052 。分离路径下误差分布随能量比更为稳定，但干扰跟随依然常见，进一步支持存在来源归因瓶颈，而非单纯声学重叠问题，分离不能彻底解决归因，需要模型层面的改进。

基于置信度的流选择显示分离后仍常选错声流，0 dB 下目标选择比例分别为 59.0% 、 78.5% 、 78.1% 与 68.9% ，选中干扰流时准确率骤降且校准误差增大，即使在分离质量超过 16 dB 的高能量比下误选依然存在，韩语干扰的目标选择比例相对更高。分离质量本身强依赖能量比，平均 SI-SDR 从 -10 dB 下的 2.95 dB 升至 +10 dB 下的 16.16 dB ，平均 WER 从 0.251 降至 0.066 ，-10 dB 下韩语保留相对较好而西班牙语与中文数值较低。领域细分中建筑与工厂在严苛能量比下相对更低，例如 Audio-Flamingo-3 在 -10 dB 下仅为 0.097 ，提示程序性数字内容更易混淆，但缺失同性别、非英语目标与多分离器等消融，归因仍不完整，有待后续补充。

### 受控诊断的边界与可复现部署前提

语料规模与合成边界是首要限定，诊断集共设 200 个案例并按航空与海事、医疗与医药、金融与商业、建筑与工厂 4 个领域各放 50 个，全部语音经合成得到并固定说话人分工以控制混淆。每条目均经领域主题与目标对话生成、同域干扰生成与诊断选项构建 3 段流程，再经人工撰写与模型辅助起草后人工修订，并由 2 名标注者核对目标可答性、正确选项的目标依据、干扰选项的干扰依据与无依据选项的落空，不合格即修订或剔除。每路音频限长 30 秒并以单声道混合呈现，自然重叠、打断、可变轮次时机、空间线索、通道变化与丰富韵律均未纳入，因此更宜视为受控诊断而非野外保证，推广时需补充真实场景验证。

#### 条件设定与语言差异解读

条件范围同样受限，目标固定为英语对话，混合固定为双人单声道并仅用一种现成分离工具，默认目标与干扰能量比为 0 dB 并另设从低到高的多个能量比考察稳健性，每题还设 3 个固定选项轮换以减少顺序偏好，说话人固定为男性目标与女性干扰，未平衡性别或测试同性别混合。未来需考察非英语目标、双向语言对、多种分离器以及平衡或同性别配置，才能判断说话人相似度与选择性注意的交互。语言条件差异只讨论模型性能随干扰语言的变化，不涉及人口公平性，不应解读为语言或群体的内在属性，解读时需保持谨慎以免误读带来偏见。

#### 残余混淆与方法不对称

残余混淆仍可能存在，尽管已报告文本向量相似度大致在 0.796 至 0.842 之间、目标平均时长 21.4 秒而西班牙语与韩语干扰分别长约 3.3 秒和 2.6 秒，以及分离质量随目标占优明显提升等统计，实体重叠、语音相似性、合成音色与时间对齐等仍未完全控制，跨语比较需结合时长与分离难度一并理解。方法上开放权重对两路分离结果独立处理并比较选项置信度选流，而闭源经同一提示依次接收 2 流，且校准分析仅限开放权重，跨组可比性受限。两阶段分离能缓解声学重叠却常留下归因缺口并伴随高置信误选，不利能量比下更需谨慎。

评测形式与复现边界同样明确，多项选择能实现可控归因并区分目标误推理、干扰支撑与无依据推断 3 类错误，却不能捕捉自由生成中跨流混合证据的现象，向开放式回答扩展仍是未来工作。原文详述了解码配置、来源归属提示、分离质量与按语言、能量比与领域的细分结果并给出医疗领域示例，但未提供可运行的代码、权重或数据下载，本次亦未确认可用作者资源。工程上单流优异不代表并发稳健，高风险场景应增加人工核验与多条件复测，而非仅凭单流分数部署，以免高估可靠性。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率为 16 kHz 的单声道同耳混合，每路时长上限为 30 s ，目标平均时长为 21.4 s ，默认目标干扰能量比为 0 dB ，另设 -10 dB 、 -5 dB 、 +5 dB 与 +10 dB 共 5 档，固定男性目标与女性干扰配置
- **训练与评测数据**：MUSI 包含 200 个样本，覆盖 4 个安全关键领域各 50 个，每项含英语目标对话、四种干扰语言之一的同领域干扰、目标依据问题与 4 个选项，全部语音经文本转语音合成，训练语料与划分细节原文未披露
- **算力与训练耗时**：原文未披露训练用 GPU 型号数量与耗时，评测涉及 6 个大音频语言模型与 ClearerVoice-Studio 分离，推理硬件配置原文未披露
- **核心超参数与配置**：解码遵循各模型报告设置，如 Qwen2-Audio 采样温度为 0.7 ，MERaLiON-2 最大输出为 256 个词元，学习率与优化器等训练超参原文未披露
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐与显存开销，仅报告准确率、 ECE 、 SI-SDR 与 WER ，分离质量随目标主导提升
- **开源产物与协议状态**：原文未提供代码、权重或数据下载链接，本次未确认可用作者资源，不可表述为已公开或可直接运行
- **附录与补充材料要点**：附录含构建流程、质量控制、数据集统计、分离质量、解码参数、来源归属提示、基于置信度的流选择、能量比与领域细分及医疗示例，明确固定性别与单一分离器等局限

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 7.5/10 | 技术严谨 6.6/10 | 实验充分 6.5/10 | 清晰度 7.0/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:impactspeech:2026:conference-paper-id:2026.impactspeech-1.3`
- 会议来源：[官方记录](https://aclanthology.org/2026.impactspeech-1.3/) · [官方 PDF](https://aclanthology.org/2026.impactspeech-1.3.pdf)
- DOI：`10.18653/v1/2026.impactspeech-1.3`
- Track：ImpactSpeech 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：构造英语目标配四语种同域干扰与三类错误划分的三设置对照诊断协议并经双人独立核验与回译筛查。

- 核心优势：在同一题干下对比6模型三种设置并完成分语种分信噪比分域与校准及分离质量分解，揭示源混淆主导失效。

- 主要短板：核心代码权重数据集与评测管线均未提及公开链接且无可验证官方资源URL。

- 主要短板：承认仅200个TTS合成双人样本且固定男目标女干扰未做性别对衡与同性别混合。

- 主要短板：明确未提供人工主观听测仅保留客观准确率与校准指标，语言效应与时长分离质量交织。

---

[← 返回 impactspeech-2026 论文汇总](/audio-research-portal/posts/conference-impactspeech-2026/)
