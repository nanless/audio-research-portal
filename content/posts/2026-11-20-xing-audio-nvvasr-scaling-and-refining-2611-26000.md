---
title: "Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations"
date: 2026-11-20
draft: false
tags: [语音识别, 音频事件检测, 数据集构建, 数据标注, 基准测试]
categories: [论文速递]
description: "针对自然语音中非言语发声覆盖不足与标注漏标问题，本文以渐进挖掘加交叉核查与全库呼吸筛查迭代提炼约 80 万条语料训练单个 17 亿参数识别器，在四个人工标注基准上平均综合分数达到 64.46 分，并以呼吸召回提升换取精确率下降的代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26000"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "语音与非言语发声联合转写：数据挖掘与监督提炼如何协同"
paper_digest_original_title: "Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26000v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26000v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26000v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.data-annotation","label":"数据标注"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对自然语音中非言语发声覆盖不足与标注漏标问题，本文以渐进挖掘加交叉核查与全库呼吸筛查迭代提炼约 80 万条语料训练单个 17 亿参数识别器，在四个人工标注基准上平均综合分数达到 64.46 分，并以呼吸召回提升换取精确率下降的代价。"
paper_digest_reader_sections: [{"heading":"问题本质：自然语音中文字与非言语发声为何难以一同准确转写","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：五十万小时原始音频如何收敛为八十万条训练与单个识别器","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制：交叉核查与全库呼吸筛查如何分工找回漏标","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"主实验验证：综合分数领先背后的呼吸召回代价与类别差异","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"诊断分析：增加人工标注为何一度让旧测试集分数下滑","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界：何时值得尝试与复现验证如何起步","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pengyu Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gang Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Genliang Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hongjie Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Kang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Lian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yongxiang Li"}]
paper_digest_abstract_sha256: "8a26f6721dad6d1579f01de1a4207236f36ae656110cb34ae1afdbee2edecd12"
paper_digest_sidecars: {"citation.bib":{"sha256":"2d97e5a625b0c1007532759d3e238d9b9fc4d851b2e943bcb43fe3c778acdfa3","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.bib"},"citation.json":{"sha256":"7c7962ed48e575e93536a3fbe73ba568e821e1d4b2644476ca82cfb1298883c2","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.json"},"citation.ris":{"sha256":"5f203ffb35d1a23952a573a420a59f2fcd202b053dd12f657059ebc927104183","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"33986e53d1b437d2bc61e3a8a5fba6cfec2ba1d093fb44a5f894b6d6d9fb30e7","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "d7cba305227ec93b7611dc2ffe03d16eea736728cc101b08867fcf000a502cef"
paper_digest_api_reader_plan_sha256: "498059d45f1b5792ef6e9d90e556a76e49e9367f0c875e9440fff95c3a1b0f8b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "900b3e5f21d392fc5db53298ad1e653e0eb191c23009a7bb00e5b78b82b81325"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "3984095b2fe4a90092de5f915b7f682093140caa88c77ef783d138f5adc38711"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "35b3a4b9df36ee37d5d837dfd1e2e114bb663f1ea44fa3869930b025d6827808"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1e8723531b687cf1860080a5f5ce35d89bfba2a2bd53a0467c3c7998a6a60490"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 语音与非言语发声联合转写：数据挖掘与监督提炼如何协同

> 英文题目：*[Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations](https://arxiv.org/abs/2611.26000v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[音频事件检测](/audio-paper-digest-blog/papers/?concept=task.event-detection)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)；[数据标注](/audio-paper-digest-blog/papers/?concept=method.data-annotation)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Pengyu Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Gang Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Genliang Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Hongjie Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Kang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Lian：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yongxiang Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 联合识别要求从一段语音音频同时恢复文字与发声事件，输出是在词序列对应位置插入标签的带标签转写，覆盖呼吸、笑、哭、咳嗽、清嗓和叹息 6 个类别。现有公开语料缺少自然场景中的自发样本，自动标注存在系统性漏标与类别混淆，轻而短的呼吸尤其容易被丢弃，而模型输出与错误标签一致还会掩盖双方共同遗漏，使单纯依靠一致性筛选无法发现问题。评测同样受损，原始测试集中大量可听呼吸没有对应标签，使检出更多真实呼吸的模型反而被记为误报，因此低分可能来自参考不全而非识别能力不足。

**核心思路与方法架构：** 核心直觉是用便宜的交叉检查过滤简单样本，把昂贵的强模型与人工集中在分歧与系统性漏检上，并让已确认正确的标注在后续轮次中不再被覆盖。沿一个样本看，音频先被切分为 30 秒内短句，两个异构分支分别给出带标签初稿并交换审核，一致则保留，不一致则交由教师模型 Qwen3.5-Omni-Plus 按统一声学标准重写为银标签。随后全部样本经过集成呼吸筛查，专用识别器 Multilingual-NVASR 在文本语境中寻找呼吸，通用事件模型 PANNs CNN14 独立判断整句是否含有呼吸，只要转写缺少呼吸而任一模型提示存在就送人工核查，确认的金标签进入共享集合并免于自动覆盖。5 轮中先修复 170,000 条公开种子，再逐步加入 630,000 条从约 500,000 小时内部音频中经人声分离、粗筛、细筛与均衡采样得到的候选，最终约 800,000 条以事件加权目标与分布引导重采样训练单个参数量 1.7B 的识别器直接生成词与标签。

**关键实验与核心代价：** 在 WESR-400-Relabeled、NVVSpeech-500、XMLY-600 和 XYZ-1800 四个基准上，本文模型平均综合得分 64.46 分，超过最强可比基线 StepAudio 3 Chat Preview 的 58.43 分 6.03 分，四个单基准领先幅度为 1.78 分至 5.04 分，六类平均 F1 同样居首。呼吸 F1 相对教师模型提升 14.40 至 31.57 个百分点，XMLY-600 上从 17.13% 升至 37.59%，召回从 9.44% 升至 25.04%。代价是精度有所下降，XYZ-1800 上带标签转写错误率从 5.13% 升至 6.10%，自然播客上呼吸召回仍仅约四分之一与五分之一，Gemini 3.1 Pro Preview 在这两套自然集上以更高召回取得更高的呼吸 F1。

**适用边界与深读导览：** 结论成立依赖于可听即标的敏感呼吸准则、六类离散事件定义、中英文与播客领域的四套人标参考，以及金标签受保护的 5 轮流程，尚未覆盖稀有长尾类别、与语音重叠的连续事件和需要强度阈值的场景。若想深究加权损失与综合得分的计算、采样配额与训练配置，可查阅下方方法与细节部分对公式和复现条件的说明，若想核对测试遗漏如何翻转结论，可查阅实验部分对原始与重标 WESR 的对照。

## 🔗 开源与复现资源

- 第三方资源：<https://www.ximalaya.com/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.xiaoyuzhoufm.com/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：自然语音中文字与非言语发声为何难以一同准确转写

自然语音转写不仅要写对字，还要在字与字之间标出呼吸、笑、哭、咳嗽、清嗓与叹息出现的位置与类别。论文把输入定义为一段语音，输出定义为包含词汇与 6 类标签的序列，标签直接插在周围文字前后，不给出起止时间戳。重复出现计为多个独立事件，事件顺序与数量都保留在文本相对位置中。例如论文给出的示意输出 Well, [breath] I think we should leave，把一次呼吸放在 Well 与后半句之间，词汇内容与事件位置同时可读，这种形式既要保证字准，也要保证事件类别、数量与前后位置准确。

\[\begin{split}\mathcal{C}=\{&\text{breath},\text{laugh},\text{cry},\text{cough},\\ &\text{throat clearing},\text{sigh}\}.\end{split}\]

上式给出 6 类目标的封闭清单，采用集合形式是因为不同公开语料的命名与类别边界并不一致，需要统一种子整理、教师提示、新数据标注与人工校对的口径。其中呼吸包含安静短促的吸气呼气与话语间呼吸，不设强度与时长门槛，风声与麦克风噪声以及仅凭发音本身都不算呼吸。笑包含轻笑与人群笑声，仅凭语气愉快不算事件，哭需可听的抽泣呜咽，不凭悲伤语气或词义判定，咳嗽与清嗓容易混淆需要区分，叹息需可听的表现性呼气，单纯长呼气或语气词不算。若把连续哭笑长段或更大类别体系直接套入，会把持续事件压成单个离散标签或引入不支持标签，论文在 WESR 筛选中因此排除连续段与未知标记。该集合决定教师固定提示的输出词表、人工核对的类别判定以及评分时向 6 类的投影，抽取出的事件序列 \(E(y)\) 保留类别与词前位置，用于后续对齐与计数。

困难集中在训练监督的覆盖与可靠两方面。公开语料缺少自发场景与多样录音条件，自动标注存在系统性呼吸漏标与类别混淆，候选池长尾严重，呼吸数量远多于其余 5 类之和。测试参考本身也可能漏标，许多可听呼吸没有对应标签，此时模型正确检出反而会被记为误报。呼吸的主观性比其他类别更强，不同标注者对较轻呼吸是否足够显著的判断差异较大，若无明确可操作的纳入规则，遗漏与不一致很难收敛。

已有路线分别从孤立分类、自然语音可扩展标注管线、位置感知评测与双语统一协议推进，通用音频语言模型与专用转写器也在并行发展，挑战中的做法包括源相关提炼加真实媒体挖掘，以及分类调和加采样平衡等。本文把覆盖扩展与标注补全放在同一循环处理，特别指出模型与标注一致也可能共同漏检，因此既要用分歧筛选疑难样本，也要用覆盖全库的筛查找回一致通过但实际漏掉的呼吸。

### 方法全景：五十万小时原始音频如何收敛为八十万条训练与单个识别器

整体流程分为扩展、迭代提炼与识别 3 段。扩展从约 500,000 小时以中文为主的内部音频出发，经过人声分离与切分、粗筛、细筛、文本质量过滤与类别均衡采样，得到 630,000 条挖掘语料。提炼先整理 170,000 条公开种子，再用 5 轮把挖掘语料逐步并入，最终约 800,000 条用于训练单个 Qwen3-ASR-1.7B 识别器，直接由音频生成文字加 6 类标签。人工确认标签逐轮累积并受保护，教师生成标签与保留自动标签留在各自的分区分组中。

下面先看挖掘各阶段的音频规模变化，单位与筛选条件有助于理解投入与取舍。

| Mining stage | Audio (h) |
| --- | --- |
| Internal raw-audio pool | 500,000 |
| After Step-Audio-R1.1 screening | 80,000 |
| After NVVASR screening | 30,000 |
| After text-quality filtering | 26,000 |
| After class-balanced sampling | 1,400 |

该规模序列显示逐级过滤的收益与代价。收益是把海量原始音频收敛到含目标事件的候选，粗筛保留约 80,000 小时，细筛保留约 30,000 小时，文本过滤保留约 26,000 小时，最终均衡采样只取约 1,400 小时共 630,000 条。代价是大量音频被丢弃，且筛选标签只用于发现候选与指导选择，完整训练目标仍需后续标注与提炼建立，切分也把训练片段限制在 30 秒以内。局限是筛选模型的偏好会传导到候选分布，长尾仍需采样环节缓解。

沿一个具体输入走一遍会更清楚。取一段时长在 30 秒以内、以 16 kHz 输入的播客语音，上游处理使用 24 kHz，内容例如 Um [cough] sorry, ma'am. [breath] It's your husband.，其中咳嗽与呼吸紧贴文字。原始音频先经 Demucs v4 分离人声，再用语音活性检测与说话人切分得到短句，保持原始与分离流的对应关系以便切分与标注。Step-Audio-R1.1 在对应原始片段上做粗粒度副语言标注，第一轮后的 NVVASR 模型再做细粒度事件筛查，Qwen3.6-27B 检查预测文本，过滤不完整句子与异常转写。留下的候选进入交叉核查与呼吸筛查，得到教师生成标签或人工确认标签，最终识别器在 800,000 条上微调，推理时直接输出文字加标签，不再调用筛查模型。

下图展示 3 段之间的数据流向，重点看中间提炼循环的分支如何汇合，读图时先看左右主路径再看回路。

[![原论文 Figure 1：Overview of progressive data mining and iterative supervision refinement.](https://arxiv.org/html/2611.26000v1/framework.svg)](https://arxiv.org/html/2611.26000v1/framework.svg)

*论文图 1：Overview of progressive data mining and iterative supervision refinement（原论文 Figure 1）。*

图中左侧为数据扩展的漏斗，中间为迭代提炼循环，右侧为单个识别器的部署输出。中间两个分支分别用 Qwen3-ASR 与 Qwen3-Omni 在不同分组上训练并核查对方分组，分歧送教师重新标注后直接采纳，一致保留后仍要经过全库呼吸筛查。筛查选出的子集经人工标注后加入受保护集合，银标签与保留标签留在原分组，下一轮重新训练。底部标注第一轮 170,000 条，第二轮增加 200,000 条至约 370,000 条，第三至第五轮再增加 430,000 条至 800,000 条总量，约 30,000 次人工核查分布在 5 轮中。

轮次安排体现先修种子再扩增的思路。第一轮对 170,000 条公开种子执行完整提炼，使其支撑后续扩展，第二轮每分支各初始标注 100,000 条，第三至第五轮陆续并入剩余 430,000 条。每轮重复交叉核查、教师标注分歧、全库呼吸筛查、选择性人工标注与重新训练，人工确认集合只增不减并从自动分组中移除，避免被自动覆盖。最终语料包含 170,000 条公开来源与 630,000 条挖掘来源，以及不含目标事件的纯语音样本，用于保持词汇转写并抑制无依据插入。

### 核心机制：交叉核查与全库呼吸筛查如何分工找回漏标

两个筛查阶段分工不同。交叉核查负责过滤相对简单的样本，只把标注与核查转写不一致的分歧送给代价较高的教师。全库呼吸筛查覆盖全部样本，包括核查一致与教师已重标的样本，专门寻找双方共同漏掉的呼吸。教师输出直接采纳为银标签，人工确认标签逐轮累积为受保护集合，两类标签在后续训练中地位不同。

交叉核查用两个异构模型在不相交分组上训练并互查对方分组。记第 \(t\) 轮自动标注样本为分组 A 与分组 B，共享人工确认样本为公共集合，分支 A 用 Qwen3-ASR 在分组 A 加公共集合上训练，分支 B 用 Qwen3-Omni 在分组 B 加公共集合上训练。新批次同样一分为二，分别由一个模型给出初始标签再交由另一模型核查，自动重标样本保留原分组成员关系。核查转写与当前标注不一致的样本由 Qwen3.5-Omni-Plus 在固定 6 类提示下重标，直接替换为银标签，一致样本保留当前标签。教师的呼吸错误以漏检为主，表现为精确率较高而召回率很低，因此核查之后仍需独立的全库筛查。

选择呼吸检测器时，论文比较了专用识别器与教师的呼吸 F1，专用模型在 4 个基准上高出 3.49 至 12.36 个百分点，支持用它作为更敏感的候选发现器。全库筛查同时使用 Multilingual-NVASR 与 PANNs CNN14，前者在词汇语境中定位呼吸，后者只判断整条是否含呼吸，不转写文字也不定位词间位置。两者提供互补证据，前者依赖转写语境，后者独立于转写的声学存在性，初步检查显示后者在整条层面呼吸 F1 较高，适合做敏感候选检测。若交叉核查后保留或更新的文本不含呼吸标签，但任一检测器提示含呼吸，则标记为可能漏检并选出子集送人工核查，人工按统一声学口径剔除误报并修正类别、数量与文本相对位置。

\[\mathcal{G}^{(t+1)}=\mathcal{G}^{(t)}\cup\mathcal{H}^{(t)}.\]

上式为金银标签更新，采用集合并集形式是因为人工确认需要累积且不可丢失，新确认的音频文本对并入共享集合后从自动分组中移除并受保护，不再被自动覆盖。极端情况下若不保护，已修正的呼吸会被下一轮自动标注冲掉，多轮收益无法沉淀。若只累积不重新训练，修正也无法传导到两个分支的核查能力。计算结果直接改变下一轮训练的数据构成，每个分支在更新分组加累积人工集合上按原式重新训练。

下表为最终识别器每轮的采样配额，有助于理解如何在保留头尾结构的同时缩小暴露差距。

| Sampling pool | Exposures per cycle |
| --- | --- |
| Breath | 4,000 |
| Laugh | 2,000 |
| Cry, cough, throat clearing, sigh | 1,500 each |
| Speech without target tags | 8,000 |
| Total | 20,000 |

该配额的收益是保证稀有类别的常规监督，每轮 20,000 条暴露中 12,000 条来自含事件池，8,000 条来自不含目标标签的语音，呼吸 4,000 条，笑声 2,000 条，哭咳嗽清嗓叹息各 1,500 条。多类别样本归入其最少见标签所在池，名额不足的池允许放回采样。代价是偏离原始自然分布，稀有池重复 exposure 可能带来重复，配额本身凭经验选定。局限是原始长尾分布与完全均衡都被观察为次优，保守再平衡只是折中，仍需验证更系统的价值选择。

\[\mathcal{L}(\theta)=-\frac{\sum_{(i,j)\in\mathcal{V}}w_{ij}\log p_{\theta}(y_{ij}\mid x_{i},y_{i,<j})}{\sum_{(i,j)\in\mathcal{V}}w_{ij}}.\]

上式为加权训练目标，采用加权平均负对数似然是因为标签在文本中稀疏，等权会使词汇预测主导训练。目标事件 token 权重取 2，其余监督 token 取 1，提示与填充位置被掩去，词汇与事件联合训练。关键量 \(w_{ij}\) 为标量权重，求和范围为批量内监督位置集合 \(\mathcal{V}\)，\(p_{\theta}\) 为给定音频与前缀的预测分布。若事件权重过大，误插会增多，若过小，事件监督会被淹没。计算出的损失驱动参数更新，配合上述配额决定每类实际 exposure。训练使用 8 张 NVIDIA A800 80 GB 显卡，全局批量 64，学习率 0.00002 经 500 步预热后余弦衰减，权重衰减 0.01，梯度裁剪 1.0，BF16 加梯度检查点，至多 50 轮每轮 20,000 条 exposure，每 500 步按验证综合分数保留前三并在 10 次评估无提升时早停，随机种子取 42，推理采用贪心解码与自动语言识别并限制生成长度。

### 主实验验证：综合分数领先背后的呼吸召回代价与类别差异

评测对象为 5 个版本覆盖 4 个音频集合，共 3,306 条约 8.47 小时，均采用 NVVSpeech 标签文本格式。预测文本经确定性最小编辑对齐到参考，预测标签映射到参考文本坐标，真正例要求类别相同且位置在 5 个汉字或 2 个英文词容差内，一对一匹配先最大化匹配数再最小化位置误差。综合分数、平均归一化标签距离与标签文本错误率方向不同，前者与两类 F1 及精确率召回率越高越好，后两者越小越好。微平均 F1 把所有事件的真正例假正例假反例汇总后计算，宏平均 F1 先按类别分别汇总再对 6 类取平均，平均归一化标签距离在含目标事件的参考句上平均并惩罚错类漏检多检顺序与位置，标签文本错误率按语种用词错误率或字错误率并把标签视作原子 token。分组按参考是否含汉字决定中文或英文模式，XMLY 只用中文模式，其余平均两种模式， headline 均值对 4 个主要基准等权，原始 WESR 不计入均值。比较 9 个模型，4 个为第三方公开权重对比模型，4 个为接口调用对比模型，加论文内评估的本文单个模型（原文为计划发布，不视为当前可用作者资源），通用模型被提示从声学证据转写并保持数量顺序，专用模型用原生转写接口，评分统一投影到 6 类。

\[\begin{split}S_{\ell}=100\big[&0.70F_{1,\ell}^{\mathrm{micro}}+0.20(1-\mathrm{mNTD}_{\ell})\\ &+0.10(1-\min(\mathrm{Err}_{\ell},1))\big].\end{split}\]

上式为分组综合分数，采用加权形式是因为事件检出为主，位置距离次之，文字错误再次之，系数分别取 0.70 与 0.20 以及 0.10，乘 100 化为 0 至 100 分。\(F_{1,\ell}^{\mathrm{micro}}\) 为分组池化微平均 F1，\(\mathrm{mNTD}_{\ell}\) 为分组平均归一化标签距离，\(\mathrm{Err}_{\ell}\) 为分组标签文本错误率并用 1 截断。极端下若事件 F1 为零，分数主要靠后两项，若距离大或错误率超 1，后两项趋零。计算先在分组内完成再平均，而非由池化指标重构， headline 均值再对 4 个主要基准等权。

下表整理平均综合分数与原文报告的领先幅度，分数为 0 至 100 分制，差距以分计，便于在同一口径下看相对位置。

| 项目 | 数值 |
| --- | --- |
| Xing-Audio-NVVASR 平均综合分数 | 64.46 |
| 超过 StepAudio 3 Chat Preview 的幅度 | 6.03 points |
| 超过 Qwen3.5-Omni-Plus 的幅度 | 6.88 points |
| 超过 Multilingual-NVASR 的幅度 | 20.73 points |
| 各基准上超过最强基线的幅度范围 | 1.78 to 5.04 points |

该表显示本方法在 4 个主要基准的综合分数与 6 类宏平均 F1 均居首，平均 64.46 分，领先最强对比约 6 分，各基准领先 1.78 至 5.04 分，对教师领先 6.88 分，对最强公开权重基线领先 20.73 分。收益是事件与位置联合优化带来的全面领先，代价在呼吸上最明显，召回提升伴随精确率下降。局限是领先幅度随基准变化，且部分类别与平台录音上并非最优，不能把平均领先推广到每一类与每一条。

呼吸的权衡值得细读。教师偏保守，精确率高而漏检严重，在 XMLY 与 XYZ 上精确率超过 83%，召回仅约 10%。本方法在 4 个基准上呼吸精确率与召回率更均衡，召回提升 10.90 至 33.53 个百分点，F1 提升 14.40 至 31.57 个百分点。以 XMLY 为例，召回从 9.44% 升至 25.04%，F1 从 17.13% 升至 37.59%，代价是精确率下降，漏检与误检都仍需继续改进。在平台录音上呼吸仍是短板，本方法仅找回约 1/4 与约五分之一的参考呼吸，Gemini 3.1 Pro Preview 靠更高召回与更低精确率在该两集呼吸 F1 更高。

增益不限于呼吸，在真实场景的哭与叹息上也较明显，XMLY 哭 F1 提升 18.15 个百分点，XYZ 叹息 F1 提升 15.36 个百分点。但并非每集每类都优于教师，重标 WESR 的哭与叹息仍低于教师，NVVSpeech 的咳嗽与清嗓以及 XYZ 的咳嗽也仍弱于教师。文本整体质量与事件分数并不完全同向，平均归一化标签距离在 4 个基准均下降，标签文本错误率仅在 3 个基准下降，XYZ 上错误率从 5.13% 升至 6.10%，尽管距离指标改善，说明更多事件检出也可能带来文本层面的额外编辑代价。

下图按类别展示本方法与教师的事件 F1，读图时先对照 4 个子图的基准名称，再比较同类两根柱子的高低。

[![原论文 Figure 2：Per-class event F1 for Xing-Audio-NVVASR and the annotation teacher on all four primary benchmarks.](https://arxiv.org/html/2611.26000v1/per_class_f1.svg)](https://arxiv.org/html/2611.26000v1/per_class_f1.svg)

*论文图 2：Per-class event F1 for Xing-Audio-NVVASR and the annotation teacher on all four primary benchmarks（原论文 Figure 2）。*

图中每个子图横轴为 6 类，纵轴为事件 F1，灰色为教师，深色为本方法。重标 WESR 与 NVVSpeech 上本方法呼吸柱明显高于教师，XMLY 与 XYZ 上哭与叹息的提升也较清晰。反例同样可见，NVVSpeech 的咳嗽与清嗓以及 XYZ 的咳嗽深色柱低于灰色，重标 WESR 的哭与叹息也未实现超越，说明改进集中在呼吸与部分稀有类别，未覆盖全部混淆对。结合文本错误率在 XYZ 的上升，可以判断事件召回与全文准确之间存在权衡，部署时需按应用对漏检与误插的容忍度选择阈值与后处理。

### 诊断分析：增加人工标注为何一度让旧测试集分数下滑

在其他训练条件不变时增加 24,000 条人工标注，曾让原始 WESR 的综合分数与呼吸 F1 明显下滑，引发疑问。按常理更多人工监督应带来提升，下滑指向测试参考本身可能不完整，而非训练变差。论文因此逐条听测并核对参考文本，发现大量可听呼吸没有对应标签，正确检出会被记为误报，原始测试集难以评估呼吸检出能力的真实变化。

针对同一批 427 条录音，论文按可听即标的口径重标，呼吸从 172 条增至 510 条，事件总数从 583 条增至 1,005 条，多类别比例从 10.8% 升至 39.1%，呼吸占净增量的 80%，咳嗽也有增加，叹息略有减少。新旧两版共享音频但参考不同，既保留原始口径下的可比性，也提供更完整的评估基础。重标采用多人核对投票加最终修正，减少对单一判断的依赖。

下表对比两种参考下增加人工数据的效果，分数为 0 至 100 分制，F1 以百分号计，组内写法保留原文的区间表达。

| 参考版本 | 增加人工数据前后综合分数 | 增加人工数据前后呼吸 F1 |
| --- | --- | --- |
| 原始 WESR-400 参考 | 72.69 to 65.10 | 57.23% to 47.94% |
| 重标后 WESR-400-Relabeled 参考 | 66.40 versus 60.43 | 57.34% versus 36.50% |

该对照显示参考完整度决定结论方向。原始参考下增加人工数据综合分数下降 7.59 分，呼吸 F1 下降 9.29 个百分点，重标后综合分数提升 5.97 分，呼吸 F1 提升 20.84 个百分点，增广后模型即本文最终模型。收益是更完整的参考让人工监督的价值显现，代价是重标仅覆盖 427 条，且训练中仍有未找回的遗漏。局限是哭与叹息在重标后仍低于基线，6 类在原始参考下全部下降而在重标后仅 4 类提升，说明测试修正不能替代训练侧的持续补全。

这一诊断的启示是呼吸低分需先排查参考漏标，再讨论声学建模。模型不变仅参考变化即可让同一组训练数据的评价反转，因此在自然语音上报告呼吸弱项时，应同时交代标注口径、是否包含安静短促呼吸以及是否经过多人合并。重标 WESR 为后续评估提供了更贴近可听事件的基准，但其结论仍只在相同容差与权重下成立。

### 适用边界：何时值得尝试与复现验证如何起步

方法假设首先体现在事件范围。研究只覆盖 6 类常见离散发声，稀有长尾类别与混在话语中的连续事件不在范围，WESR 筛选中已排除连续哭笑喘息段与非目标风格段。呼吸采用敏感纳入规则，要求标出每一处可听可辨的呼吸，不设强度时长门槛，风声麦克风噪声与单纯发音不算，笑哭不凭语气或词义判定，咳嗽清嗓需区分，叹息需可听表现性而非单纯长呼气。该口径减少是否足够显著的主观裁量，但仍依赖清晰可操作的指南与多人投票合并，单人标注难以保证一致。

数据价值尚未充分评估。训练仍有大量遗漏，只修正其中一部分已带来明显变化，更完整修正的上限未知。约 800,000 条微调集合可能存在冗余、价值有限甚至有害的样本，当前按整体使用而未做基于价值的选择。论文的发展实验与挑战中的小规模结果都提示，约 50,000 条高质量样本已可支撑较强识别，数万条精心准备的集合可接近大集合的分数，单纯扩大规模难以补偿不完整或错误的监督，未来需要数据估值与选择工作。

评测与部署条件限定结论范围。基准来自 4 个集合的特定版本，语言分组按文本是否含汉字判定，位置容差为 5 个汉字或 2 个英文词，综合分数权重为 0.70 与 0.20 以及 0.10， headline 对 4 个主要基准等权且排除原始 WESR。呼吸在自然录音上召回仍低，误判率延迟与成本未测量，总体趋势不能推广到每一组或每一步。论文计划公开模型权重、推理代码、4 个评测基准、标注指南与评测代码，目前仅为计划，提供的两个平台链接为第三方提及，不代表作者资源已公开。

何时值得尝试可以按顺序判断。若任务需要同时给出文字与事件类别数量顺序与相对位置，手头有大量未标注音频并能承担呼吸漏检的人工复核，且能接受以部分精确率换取召回，适合尝试渐进挖掘加交叉核查与全库筛查的循环。若目标是稀有长尾或连续混合事件，或需要低延迟实时运行，则需另行验证。复现第一步是准备 170,000 条公开种子并统一到 6 类口径，固定教师提示与人工口径，划分不相交分组做互查，用专用识别器与整条声学模型做全库呼吸筛查，累积受保护的人工确认集合，再按事件加权目标与保守配额微调 1.7B 量级识别器，验证集按可用音频身份与来源分组划分并用综合分数选优。

还需要补的验证包括稀有类别的稳定性、连续事件的扩展、不同录音条件下的误插率，以及训练与推理开销的实测。关键信息条件应保留，训练输入 16 kHz，上游处理 24 kHz，片段上限 30 秒，全局批量 64，学习率 0.00002 经 500 步预热后余弦衰减，权重衰减 0.01，梯度裁剪 1.0，BF16，至多 50 轮每轮 20,000 条 exposure，每 500 步评估保留前三，10 次评估无提升早停，随机种子 42，推理贪心解码加自动语言识别。权重可下载、代码可运行与系统可部署是三件事，应分别确认，不把计划公开当作已经可用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.26000v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
