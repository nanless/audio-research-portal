---
title: "Reproducing Proficiency-Conditioned Dialogue Features with Full-duplex Spoken Dialogue Models"
date: 2026-11-27
draft: false
description: "论文检验全双工模型 Moshi 能否复现人类访谈行为，通过按 CEFR A 级、B 级、C 级分层微调并与 InteLLA 进行各 400 场实时访谈，发现发音速率等三项指标三对趋势全同向且多指标均值偏差部分落入人类波动带，但分布形状距离均未对齐且反应系统性偏慢。"
tags: ["SFT", "统计分析", "全双工语音交互", "语音对话系统"]
categories: ["iwsds-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "全双工语音对话能否复现按熟练度分层的访谈行为"
paper_digest_original_title: "Reproducing Proficiency-Conditioned Dialogue Features with Full-duplex Spoken Dialogue Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.4"
paper_digest_workbench_source_sha256: "eb8ea2317332d40c7d96ecfd8bce6dd76132197a9c36f0d3fbb0e52f36d39a0e"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.iwsds-1.4/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.iwsds-1.4.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "全双工语音交互"
paper_digest_score: 5.7
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文检验全双工模型 Moshi 能否复现人类访谈行为，通过按 CEFR A 级、B 级、C 级分层微调并与 InteLLA 进行各 400 场实时访谈，发现发音速率等三项指标三对趋势全同向且多指标均值偏差部分落入人类波动带，但分布形状距离均未对齐且反应系统性偏慢。"
paper_digest_reader_sections: [{"heading":"轮流式切分为何难以支撑重叠与快速轮换的人类对话","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从 InteLLA 提问到 Moshi 应答的实时访谈链路","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"Mimi 离散编码与双变换器并行生成的 1 秒信号旅程","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"按 CEFR 分层的数据切分、微调配方与沉默抑制手段","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"哪些熟练度趋势被复现而中心偏差部分对齐","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"分布形状为何尚未对齐与场景敏感的负结果诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"启发式操作点、数据不平衡与访谈外推的边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Equmenopolis, Inc.","Institute of Science Tokyo"],"name":"Takao Obi"},{"affiliations":["Equmenopolis, Inc."],"name":"Sadahiro Yoshikawa"},{"affiliations":["Equmenopolis, Inc."],"name":"Mao Saeki"},{"affiliations":["Equmenopolis, Inc.","Waseda University"],"name":"Masaki Eguchi"},{"affiliations":["Equmenopolis, Inc."],"name":"Yoichi Matsuyama"}]
paper_digest_abstract_sha256: "2846f711acf1b5d2351f907154472e45f54078f244bfbc441a15a5116f0b2595"
paper_digest_sidecars: {"citation.bib":{"sha256":"6f7a988c37ec980ea3e4432b52a8e3e5ab6623f34b52e28acabc2327633c9039","url":"/audio-research-portal/client/papers/2026-11-27/conference-225bc3e7a7e771cf82fedb9d/citation.bib"},"citation.json":{"sha256":"34184363e893918d14e12390bccf3164d85346c892051d72f41ab00bb9f3fd3b","url":"/audio-research-portal/client/papers/2026-11-27/conference-225bc3e7a7e771cf82fedb9d/citation.json"},"citation.ris":{"sha256":"38aa8a9bef9d4284284c540765bdb49ca29378979aef2e1bd763074544b7664f","url":"/audio-research-portal/client/papers/2026-11-27/conference-225bc3e7a7e771cf82fedb9d/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8285a62eee9fc5aa2da8b19f2cc1980b150fde40c6b636b9628b351b718b50af","url":"/audio-research-portal/client/papers/2026-11-27/conference-225bc3e7a7e771cf82fedb9d/rethink-context.json"}}
paper_digest_paper_id: "conference:iwsds:2026:conference-paper-id:2026.iwsds-1.4"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwsds-2026"
paper_digest_conference_name: "iwsds-2026"
paper_digest_doi: "10.18653/v1/2026.iwsds-1.4"
paper_digest_conference_doi: "10.18653/v1/2026.iwsds-1.4"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwsds-1.4/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwsds-1.4.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a35c4a046eb7de83322b2c6e9d298aabfc1b33652f33068bc957c8501d0c154a"
paper_digest_api_reader_plan_sha256: "15e5cf7ef9b0c80614dff7768f6c311ca948e55116cb00e58d7bf150c1ca49ab"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d48c277027a0fea8e0896f839f5c03b728007d083d3e7f7950854ac6ad2c51ba"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e802fa2688028c28c9cfd1df20a7fb959e38584a3f84d74b4346722818074338"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5d90063b1574939dc9e0a6321b7cfb99ae77e2c23ace6ca4f7f98a3a07e33893"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ae5a120c96ad2a36ef0bbc85b56d033bbae46683b4247389dfe2f323b69dca61"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"}]
paper_digest_primary_method: "SFT"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 全双工语音对话能否复现按熟练度分层的访谈行为

> 英文题目：*Reproducing Proficiency-Conditioned Dialogue Features with Full-duplex Spoken Dialogue Models*

> 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.4`
> DOI：`10.18653/v1/2026.iwsds-1.4`
> Track：IWSDS 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.4/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.4.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-research-portal/papers/?concept=task.full-duplex)；[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-research-portal/papers/?concept=task.speech-dialogue)
- **研究方法**：[SFT](/audio-research-portal/papers/?concept=method.sft)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.8/10 | 实验充分 5.8/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Takao Obi：Equmenopolis, Inc.；Institute of Science Tokyo
- Sadahiro Yoshikawa：Equmenopolis, Inc.
- Mao Saeki：Equmenopolis, Inc.
- Masaki Eguchi：Equmenopolis, Inc.；Waseda University
- Yoichi Matsuyama：Equmenopolis, Inc.

## 📌 核心摘要

**问题与瓶颈：** 实时人本对话要求系统在无显式轮次切分下处理重叠、抢话、简短反馈与快速轮换，输入为学习者语音流、输出为系统语音流的双向过程需要同时建模。传统轮流架构依赖话轮分割与串行识别合成，难以实现毫秒级同时听说，代表性全双工模型 Moshi 虽用并行双音频流实现实时语音到语音生成，但在会话智能体中的实证仍处于起步阶段。在第二语言能力评估中，自动引出并复现不同熟练度学习者的反应时与流利度分布是构建学习者模拟器的前提，而现有工作缺少对熟练度条件化对话特征能否被全双工模型复现的系统检验。难点在于沉默倾向与水平间数据不平衡会掩盖真实熟练度效应，而启发式截取与解码温度又可能扭曲可测的时间分布。

**核心思路与方法架构：** 与直接使用原始 Moshi 相比，本文保留 Mimi 编解码与 RQ-Transformer 双流生成结构不变，增量是将同一架构按欧洲语言共同参考框架 (Common European Framework of Reference for Languages, CEFR) 聚合的 A 级、 B 级、 C 级分别独立微调为三个熟练度条件模型。沿单条样本看，1 秒 24 kHz 音频经 Mimi 编码器离散为 12.5 Hz 共约 12 帧、每帧 8 个残差向量量化码本符号，时间 Transformer 在 12.5 Hz 上建模序列并输出隐状态与时间对齐文本符号，深度 Transformer 沿码本深度建模声学符号并对声学分支使用单步延迟与无文本时的填充符号，最后由 Mimi 解码器重建波形。训练仅使用从系统话语结束到用户话语结束的片段以抑制过长静音，推理时三个水平模型分别通过 Agora RTC 构建的 WebRTC 链路与访谈官智能体 InteLLA 实时对话，报告典型端到端延迟不超过 200 ms，采样温度固定为 0.95 以提高发声倾向。论文未说明主干参数的冻结与更新范围，评估限定为在线流式交互而非离线整句合成，单话题场景用于稳定对话但也限制了上下文多样性。

**关键实验与核心代价：** 在各 400 场模型会话与各 400 抽样人类访谈的比较中，发音速率 (Articulation rate, AR) 、停顿比 (Pause ratio, PR) 与语速 (Speech rate, SR) 三项在 A-B 、 B-C 、 A-C 全部三对上复现了人类方向，如 AR 人类 A-B Cliff 值为 0.679 而模型为 0.220，SR 人类 A-B 为 0.934 而模型为 0.424，均保持 A 级低于 B 级低于 C 级的方向。反应时在 A-B 对上出现反向，人类 A 级慢于 B 级而模型 A 级快于 B 级，人类 Cliff 值为 0.291 而模型为 0.077，应答频率在模型侧 Kruskal-Wallis 检验无水平差异，人类 A-B 为 A 级低于 B 级 (0.271) 而模型 A-B 无差异 (0.014)。分布比较中模型与人类均值差的自助置信区间在应答频率全部三级、 A 级 AR 、 B 级与 C 级句中停顿比等 10 余组出现部分重叠，反应时用中位数差、其余用均值差，而一维 Wasserstein 距离在全部指标上均未观察到重叠，原文未给出置信区间的具体数值边界。与未经微调的原始 Moshi 基线相比，微调在多指标多级别上减小了均值差绝对值与 Wasserstein 距离，代价是模型仍反应更慢且倾向沉默，单场景聚合还发现一个话题的应答数在 p < 0.01 下低于其余三个话题，说明沉默抑制仍不充分。

**适用边界与深读导览：** 上述结论仅在 InteLLA 访谈、 A 级话题池选出的 4 个单话题场景、片段训练与 0.95 温度下成立，未覆盖重叠与后通道行为的显式量化，也未验证访谈之外的多样对话与部署条件。流利度依赖机器学习标注模型而非人工主观听测，未提供 MOS 或 UTMOS 等听感代理指标的一致性检验，分布对齐仅为中心趋势部分接近而非形态一致。需深究时间定义、统计检验与分布比较细节的读者可查阅下方方法概述中的公式与数据流，以及实验结果中的趋势表与代价分析。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 轮流式切分为何难以支撑重叠与快速轮换的人类对话

实时、以人为中心的会话智能要求系统能以人类颗粒度互动，包括说话重叠、抢话、简短伴随应答与快速调整。传统轮流式架构依赖显式轮次切分，先检测静音再依次识别与合成，天然难以处理双人同时发声。当一方提前开口或另一方用短词确认时，切分边界会被迫截断或延迟，导致反应时间被结构人为拉长，无法反映人类在 200 ms 量级内的衔接能力。

全双工语音对话模型试图取消显式切分，以 Moshi 为代表的设计对用户与系统两路音频并行建模，直接生成语音到语音的实时输出。论文指出，这类模型在音质与风格迁移上进展迅速，但在会话智能中的应用实证仍处于早期。已有工作多关注重叠处理基准、日语系统或交互日志优化，缺少把模型放进真实访谈流程、检验其行为是否随熟练度自然变化的证据。

本文把问题收敛为可检验的复现任务，能否让全双工模型复现人类按熟练度分层的对话特征。输入是面试官系统 InteLLA 的提问音频流，输出是模型在同一实时通道中的应答音频流与时间戳。作者在 InteLLA 采集的第二语言学习者访谈语料上，按欧洲语言共同参考框架 CEFR 聚合为 A 级、B 级、C 级三档，分别微调 3 个模型，再让它们与 InteLLA 进行各 400 场实时访谈，对比反应时间、应答频率与流利度指标的层级趋势与分布。

评价口径不是识别准确率或音质分，而是行为分布，模型输出是否像同级人类学习者那样随等级变快、变长、变流利。若成立，这类模型可作为熟练度条件化用户模拟器，用于自动评测的质量保障与压力测试，大幅减少对真人考生的依赖。若不成立，则需定位是沉默倾向、数据不平衡还是场景敏感导致的偏离，这正是后文用统计检验与自助区间要回答的内容。

### 从 InteLLA 提问到 Moshi 应答的实时访谈链路

与最近的原始 Moshi 相比，本文的实质增量不在结构发明，而在行为条件化。保留的是 Mimi 编解码器与 RQ-Transformer 双路并行生成框架，替换的是训练目标与使用方式，为 CEFR A 级、B 级、C 级各训练一个独立模型。信号规格保持 24 kHz 输入，12.5 Hz 令牌帧率对应 80 ms 帧，8 个残差码本，目标从保真合成转向复现人类时间与流利度特征，这是理解后续所有对比的前提。

完整链路按序为 InteLLA 面试官化身出题，经 Agora RTC 双向音频流送达全双工模型，模型边听边生成应答音频再经同一通道返回，全程典型端到端延迟不超过 200 ms。每次会话独立，模型在会话前重启，InteLLA 轮次管理模块以服务器时钟做毫秒级标注，记录提问结束与应答起始时刻。推理时采样温度固定为 0.95 以提高开口倾向，访谈限定单话题 4 种场景以稳定对话，话题均选自 A 级题库以控制难度。

要理解延迟与重叠为何能被毫秒级度量，需先看清双端实时连接的物理形态。下图左侧为 InteLLA 化身的粉色界面，右侧为全双工模型的黑色监控面板，两侧经网络实时互通而非离线文件传递。请沿从左到右的音频走向观察界面元素与统计数字，这直接对应后文反应时间与应答频率的计时依据。

[![原论文 Figure 1：Real-time spoken interaction over WebRTC between a dialogue system InteLLA (left) and a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-1.png)

*论文图 1：实时访谈连接示意，左侧为 InteLLA 化身界面，右侧为全双工模型监控界面，双路音频经网络实时互通（原论文 Figure 1）。*

像素显示左侧为紫蓝发色化身，底部可见麦克风与音量控制按钮，表明可实时收发语音。右侧黑色面板中央为白色圆环包围的薄荷绿圆点，下方为两列矩形电平条，底部两格呈绿色点亮。右上服务器音频统计栏标注已播放时长、丢失时长、延迟 0.421 与最小最大缓冲 0.002 / 0.124 ，右侧文本框显示英文肯定回复。这证实系统以服务器时钟统一计时，双路音频并行传输，为允许负值反应时间的抢话分析提供了工程基础。

### Mimi 离散编码与双变换器并行生成的 1 秒信号旅程

Mimi 负责声波与离散符号的双向转换，由 SEANet 自编码器与残差矢量量化器构成。编码器把 24 kHz 音频离散为 8 个码本、12.5 Hz 的令牌流，每 80 ms 一帧，解码器则从 RQ-Transformer 输出重建波形。工作时它同时编码用户提问流并解码模型应答流，两路在同一时钟下并行推进，这正是全双工区别于轮流等待的关键，原文未披露各码本的具体维度与码率数值。

RQ-Transformer 负责序列建模，分为时间变换器与深度变换器。时间变换器在 12.5 Hz 上对历史令牌建模，时刻 s 的隐状态由 s 减 1 之前的所有令牌算出，再经线性头采样与时间对齐的文本令牌。深度变换器沿码本深度方向补全声学令牌，为稳定音质对声学令牌做一步延迟，无文本输出处填入 PAD 占位符。以 1 秒提问为例，24,000 个采样点约对应 12 至 13 帧乘 8 码本的令牌矩阵，经 2 级变换器逐步生成后再由 Mimi 还原为 1 秒波形送出，途中任一时刻都可被打断。

抽象的帧率与码本只有对照真实波形才能建立直觉。下图并排展示同一主题下 A 级、B 级、C 级三场会话前 40 秒的波形与转写，橙色为 InteLLA 提问，蓝色为模型应答。请对比蓝色波形的密集程度与转写框长度，观察熟练度升高时应答是从碎片走向连贯长句，这预示了后文发音速率与平均语流长度的趋势。

[![原论文 Figure 2：Audio waveform examples with transcripts for proficiency-conditioned models using the same…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-2.png)

*论文图 2：同一主题下 A 级、B 级、C 级三场会话前 40 秒波形与转写，橙色为提问方，蓝色为模型应答（原论文 Figure 2）。*

像素中每组均含上下两条波形，上为橙色提问，下为蓝色应答，下方配浅红与浅蓝转写框。A 级蓝色多为短促尖峰，转写仅为进食重复与填充词，中后段几乎静默。B 级蓝色出现多组宽幅振动，转写为培根鸡蛋等完整食物描述与每日进食回应。C 级蓝色出现两大段持续高幅振动，转写为米饭煎蛋与长达十余秒的因果解释，提问间隔明显拉长。三档对比直观呈现了从短应答到长叙述的层级差异。

### 按 CEFR 分层的数据切分、微调配方与沉默抑制手段

微调语料来自 InteLLA 在 3 个学年采集的学习者访谈，每段对话附机器标注的 CEFR 标签并聚合为 A 级、B 级、C 级。作者未用全量长访谈直接训练，而是截取从系统话语结束到用户话语结束的片段，以抑制推理时过长静默。下表列出三档的对话数与时长规模，可据此判断数据不平衡对后文 A 级与 B 级区分度的影响，表中时长单位为小时。

| CEFR | Dialogues | Total (h) | Extracted (h) |
| --- | --- | --- | --- |
| A | 8,171 | 722 | 367 |
| B | 13,031 | 1,804 | 1,132 |
| C | 3,118 | 645 | 437 |
| Total | 24,320 | 2,451 | 1,936 |

三档共 24,320 段对话，提取后有效时长为 1,936 小时，其中 B 级达 13,031 段与 1,132 小时，约为 A 级 8,171 段与 367 小时的 3 倍，C 级仅 3,118 段。需要说明，原文报告的总时长为 2,451 小时，而三档分项 722 小时、1,804 小时、645 小时相加为 3,171 小时，原文如此报告，存在字面算术出入，原文未解释。提取后时长分项求和与总计一致，这种不平衡为后文 A 级与 B 级在部分指标上难以区分埋下伏笔。

训练沿用公开微调配方，每档独立训练 3 个轮次，在 8 张 NVIDIA H200 上完成。优化采用 OneCycleLR 策略，最高学习率为 0.000002 ，批大小为 8 ，输入长度为 100 秒，权重衰减为 0.1 。三档训练步数分别为 A 级 621 步、B 级 1,911 步、C 级 738 步。与原始 Moshi 一致，PAD 占位符损失降低 50%，语义令牌与声学令牌损失比为 100 比 1 ，梯度只更新模型参数，流利度标注模型保持冻结。

推理与部署沿分块流式路径执行，无需等待整句结束即可边听边说，缓存与预读窗口的具体长度原文未披露。作者固定采样温度为 0.95 以提高开口倾向，并将会话限定为单话题以稳定对话。这些启发式选择基于预实验，虽有效压制了无声，但可能使学到与测得的时间分布产生偏移，作者在局限中承认需用系统化对比替代。原文未披露每秒浮点运算、显存占用与实时系数，延迟仅给出通道典型值。

### 哪些熟练度趋势被复现而中心偏差部分对齐

评测公平性建立在同等样本量与同种计时上。模型侧每档完成 400 场会话，每种场景 100 场，共 1,200 场。人类侧从带流利度标注的访谈中随机抽 400 样本，其中 A 级 3,117 段、B 级 5,579 段、C 级 778 段，以匹配统计功效。反应时间定义为模型应答起始减去系统提问结束，允许抢话为负值，无应答则不计入反应时间但计入应答频率。应答频率为模型应答数除以需应答的提问数，流利度经机器标注模型计算七项指标。

层级趋势先用 Kruskal-Wallis 检验整体差异，除模型侧应答频率外，人类与模型在多数指标上均达 p 小于 0.01 水平，再用 Mann-Whitney U 两两检验并经 Holm-Bonferroni 校正记录方向，同时报告 Cliff's delta 绝对值。原文完整表 4（本精简表未列出）显示，发音速率、停顿比与语速三项在 3 对比较中均与人类同向，计数为 3 比 3 。句中停顿比等三项为 2 比 3 ，反应时间亦为 2 比 3 但 A 级与 B 级方向相反，不流利比仅 1 比 2 ，应答频率为 0 比 2 ，表明 A 级与 B 级差异最难捕捉。

要判断均值偏差是否落入人类自身波动，需看模型与人类差异的自助区间。下图 9 个子图分别对应反应时间中位数与其他指标均值差异，红色带为人类自助波动，蓝色为微调模型，灰色为原始模型，红色虚线为零。请先注意横轴为模型减人类，零线右侧为偏高，左侧为偏低，再对比蓝条与红带是否重叠。

[![原论文 Figure 3：CIs of the model–human difference for each metric (median in reaction time; mean in others).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-3.png)

*论文图 3：九个指标上模型与人类差异值的自助置信区间，红色为人类波动带，蓝色为微调模型，灰色为原始模型（原论文 Figure 3）。*

图中反应时间 3 条蓝色横须均位于 0.8 至 1.4 右侧，而灰色点位于负 1.2 至负 0.8 左侧，红色带紧贴零线，说明微调模型系统性偏慢而原始模型偏快。应答频率蓝色区间宽达负 0.03 至 0.01 ，与红色带大面积重叠，三档均部分复现。发音速率蓝色略偏左接近零线，灰色远在 1.0 至 3.0 右侧。停顿比、不流利比等亦见蓝色与红色部分重叠，而语速与平均语流长度蓝色仍偏离，证实中心趋势部分对齐但并非全面一致。

### 分布形状为何尚未对齐与场景敏感的负结果诊断

分布比较同时考察均值差异与形状距离。对每个指标记模型与人类均值差为差异值，反应时间用中位数差，其余用均数差，另记一维 Wasserstein 距离为形状差异。以同级人类对话为总体，自助 2,000 次估计差异值与距离的人类波动带，再对模型会话自助 2,000 次得模型区间。若模型区间落入人类带为严格复现，部分相交为部分复现。同时以未经微调的原始 Moshi 按相同流程与解码设置跑完全部访谈，作为非条件化对照。

中心对齐不等于形状一致，需再看距离指标的区间位置。下图 9 个子图横轴均为距离值，越小越相似，红色带为人类自身抽样波动，蓝色与灰色分别为微调模型与原始模型的距离区间。请观察红色带是否贴近零线，以及蓝色横须是否落入其中，这决定了严格复现还是部分复现的判断。

[![原论文 Figure 4：CIs of the model–human one-dimensional Wasserstein distance for each metric.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwsds-2026/ad5c5ad66d9b/figure-4.png)

*论文图 4：九个指标上一维 Wasserstein 距离的自助置信区间，红色为人类自身波动，蓝色与灰色为模型与人类距离（原论文 Figure 4）。*

图中 9 个子图的红色带均贴近零线左侧，宽度多在 0.5 以内，而蓝色与灰色横须整体偏右，如反应时间蓝色约 1.0 至 3.0 ，平均语流长度蓝色约 0.3 至 1.0 ，灰色更达 5.0 至 7.0 ，无一蓝色区间落入红色带，表明形状层面均未复现。但多数子图中蓝色比灰色更靠近红色，如发音速率蓝色约 0.4 至 0.9 而灰色达 1.2 至 2.8 ，说明微调普遍缩小了偏差。

负结果集中于时间行为。微调模型反应系统性偏长，应答频率在三档间无显著差异，且场景级检验发现某一场景应答显著偏少，p 小于 0.01 水平。由于 4 种场景均选自 A 级题库且三档模型间无层级差异，该低谷更可能源于场景特异而非难度。所有区间均为 95% 自助百分位区间，原文未报告人工听测，结论仅在客观计时与流利度口径内成立，沉默倾向的残留是主要代价。

### 启发式操作点、数据不平衡与访谈外推的边界

首要边界来自为压制沉默而引入的启发式操作点。训练截取系统话语结束到用户话语结束的片段，推理固定采样温度为 0.95 ，会话限定单话题。这些选择虽让评估得以稳定运行，但可能使学到与测得的时间分布整体偏移，反应时间系统性偏长即与此相关。作者明确计划用分段窗口与全对话训练的系统对比，以及多温度扫描，替代当前基于预实验的固定取值。

评价覆盖亦不完整。当前指标聚焦反应时间、应答频率与七项流利度，能捕捉时间与语言流畅维度，但未量化重叠与伴随应答等全双工核心现象，也未纳入声学韵律、词汇与语法特征。附带说明中句中与句末停顿的平均时长因可靠性不足已被剔除，意味着结论仅在所报告指标上成立，不可外推为整体对话自然度相当，且缺乏人工听测，无法与主观感受交叉验证。

数据与场景限制同样关键。B 级训练量约为 A 级 3 倍，C 级最少，这种不平衡可能部分解释 A 级与 B 级在句中停顿等指标上区分微弱。所有访谈话题选自 A 级题库，场景级分析已发现某一场景应答显著偏少，说明模型行为具场景敏感性。复现核对上，原文提及微调配方仓库链接，但代码、权重、数据的可获取性与可运行状态原文未披露，附录亦无额外证明，独立复现需自备同规模访谈语料与 8 卡量级算力。

工程选型上，若目标是构建熟练度条件化用户模拟器，本文流程可作为起点，发音速率、停顿比与语速的趋势复现最具参考价值，反应时间与应答频率则需额外沉默抑制与场景设计。未来工作指向更具选择性的静默过滤、更多 A 级与 C 级数据平衡，以及纳入面部表情与注视的多模态扩展，方能检验访谈之外的日常对话是否仍具人类层级特征。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：24 kHz 采样输入，Mimi 以 12.5 Hz 输出离散令牌，帧长 80 ms，共 8 个残差码本，双向流典型端到端延迟不超过 200 ms，声道数与码率原文未披露
- **训练与评测数据**：InteLLA 采集的第二语言学习者访谈，三个学年，按 CEFR 聚合为 A 级 8,171 段 722 小时，B 级 13,031 段 1,804 小时，C 级 3,118 段 645 小时，提取后共 1,936 小时，人类对比抽样 A 级 3,117 段 B 级 5,579 段 C 级 778 段
- **算力与训练耗时**：8 张 NVIDIA H200 完成三档微调，每档 3 个轮次，步数 A 级 621 步 B 级 1,911 步 C 级 738 步，推理经 Agora RTC 实时互通，会话前重启模型
- **核心超参数与配置**：OneCycleLR 策略最高学习率为 0.000002 ，批大小为 8 ，输入长度为 100 秒，权重衰减为 0.1 ，PAD 损失降低 50%，语义与声学损失比 100 比 1 ，推理采样温度 0.95
- **推理速度与部署开销**：典型通道延迟不超过 200 ms，每档 400 场会话，每场景 100 场，实时系数与显存占用与参数量原文未披露
- **开源产物与协议状态**：原文提及公开微调配方仓库链接，代码权重数据的可获取性与可运行状态原文未披露，演示页与许可信息原文未披露
- **附录与补充材料要点**：无独立附录证明，补充分析为场景级应答频率检验与沉默倾向讨论，未报告听测规模与失效音频案例细节

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.8/10 | 实验充分 5.8/10 | 清晰度 5.5/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:iwsds:2026:conference-paper-id:2026.iwsds-1.4`
- 会议来源：[官方记录](https://aclanthology.org/2026.iwsds-1.4/) · [官方 PDF](https://aclanthology.org/2026.iwsds-1.4.pdf)
- DOI：`10.18653/v1/2026.iwsds-1.4`
- Track：IWSDS 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：每级400场实时会话对照400抽样人类访谈，AR、SR、PR三项在A-B、B-C、A-C三对比较上全部复现人类方向。

- 核心优势：经WebRTC与InteLLA实时交互并以服务器时钟毫秒级标注时间戳，反应时定义允许抢话负值且采用KW加Holm校正检验。

- 主要短板：训练表总时长合计2451h与分项722h、1804h、645h之和3171h存在字面算术出入且原文未解释。

- 主要短板：反应时在A-B对上反向且应答频率模型侧无水平差异，一维Wasserstein距离在全部指标上均无重叠，形态对齐未成立。

- 主要短板：流利度完全依赖单一机器标注模型且略去部分停顿时长指标，未经人工主观听测检验且置信区间数值边界未给出。

---

[← 返回 iwsds-2026 论文汇总](/audio-research-portal/posts/conference-iwsds-2026/)
