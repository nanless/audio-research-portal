---
title: "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding"
date: 2026-11-20
draft: false
tags: [音视频理解, 语音识别, 多模态学习, 强化学习]
categories: [论文速递]
description: "针对真实视频需要联合视听时序推理而开源模型易漏细节与幻觉的问题，WeMM-Video 用统一记号交错加时间戳与三段预训练三段后训练实现直接作答与思考推理双模式，在 33 项联合视听基准上以 35B-A3B 刷新开源最优并以 9B 越级超过 30B 级开源对照，代价是思考模式更长且音乐转写等细粒度仍逊于专有模型"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26409"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "视听合一的视频理解：WeMM-Video 如何兼顾听觉视觉与推理"
paper_digest_original_title: "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26409v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26409v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26409v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.reinforcement","label":"强化学习"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对真实视频需要联合视听时序推理而开源模型易漏细节与幻觉的问题，WeMM-Video 用统一记号交错加时间戳与三段预训练三段后训练实现直接作答与思考推理双模式，在 33 项联合视听基准上以 35B-A3B 刷新开源最优并以 9B 越级超过 30B 级开源对照，代价是思考模式更长且音乐转写等细粒度仍逊于专有模型"
paper_digest_reader_sections: [{"heading":"问题本质：只看画面或只听声音为何读不懂真实视频","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：多模态信号如何变成同一串语言记号","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"训练组织：约 1.2 万亿记号如何分阶段补齐听觉与长程对齐","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"主实验验证：联合视听领先在哪些口径下成立","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"适用边界：何时值得尝试与复现第一步做什么","index":5,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["WeChat Vision, Tencent Inc.","Tsinghua University"],"name":"Changli Tang"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Jie Yang"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Tianyi Wang"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Lei Li"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Daoze Zhang"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Zijie Xin"},{"affiliations":["WeChat Vision, Tencent Inc.","Tsinghua University"],"name":"Zhan Liu"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Li Li"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Jinchang Xu"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Fengyun Rao"},{"affiliations":["Tsinghua University"],"name":"Chao Zhang"},{"affiliations":["WeChat Vision, Tencent Inc."],"name":"Jing Lyu"}]
paper_digest_abstract_sha256: "3793a354181826e97994cea5b9ac92cf0c4abea74ba17b024b307369542a26d9"
paper_digest_sidecars: {"citation.bib":{"sha256":"c304116aa0486a1161947eaee49356b44864eeacca1fed4a9580ac58af8b83d0","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.bib"},"citation.json":{"sha256":"34a624fbdaead20e084e02b5b2618a8844da4e70bcbd7597a2a4102f977c519e","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.json"},"citation.ris":{"sha256":"1e9e7c51673929b305d8d496440bf4c9a1be6f028a20fdec5d2b3153b3381f72","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"25e698e397faf1c784801c7095f8fc2fc0a92ae50f468da9393cc16ca0633e35","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "9069ab7f5bf60e0f74af5956e2c7e6d558b41e476b1caace8aa0b5134eaf2de5"
paper_digest_api_reader_plan_sha256: "3014f277090f3029f8f916e1f526ff2d930d613497d8687ee9708cdfd07ca890"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d639d7e5617288c227d0de12f081367c88eed79cffc280247c6414d5eff003a4"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "05441581fcdd3722ada12d829527cdadfb103c0fdc198df108216aa84c143ee1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "db93d850115f8036cf857c1a18250d5504e9dd9ed31e1705019f3840bebd56a6"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5ec8486062449299afc1980cf3551c7f081295e79ae49ba9606981824ec8d836"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 视听合一的视频理解：WeMM-Video 如何兼顾听觉视觉与推理

> 英文题目：*[WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding](https://arxiv.org/abs/2611.26409v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.0/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Changli Tang：WeChat Vision, Tencent Inc.；Tsinghua University
- Jie Yang：WeChat Vision, Tencent Inc.
- Tianyi Wang：WeChat Vision, Tencent Inc.
- Lei Li：WeChat Vision, Tencent Inc.
- Daoze Zhang：WeChat Vision, Tencent Inc.
- Zijie Xin：WeChat Vision, Tencent Inc.
- Zhan Liu：WeChat Vision, Tencent Inc.；Tsinghua University
- Li Li：WeChat Vision, Tencent Inc.
- Jinchang Xu：WeChat Vision, Tencent Inc.
- Fengyun Rao：WeChat Vision, Tencent Inc.
- Chao Zhang：Tsinghua University
- Jing Lyu：WeChat Vision, Tencent Inc.

## 📌 核心摘要

**问题与瓶颈：** 处理对象是有声视频，输入包含连续视觉帧与伴随的对话、音乐和环境声，输出是对情节、人物、声源与因果的问答、描述与推理。难点在于快速动作与细微状态变化散落在大量帧中，长视频的远距离事件需要跨段记忆，而声音与画面经常互补错位，必须把发声时刻与可见动作对准。现有开源模型常偏重单侧线索，容易漏掉关键视听细节，对不准说话人与动作，还会生成缺乏视频证据的内容，可靠性不足。

**核心思路与方法架构：** 核心直觉是把对齐到同一时间轴的视听证据交给同一语言模型，再按需选择直接回答或逐步推理。视觉侧沿用基座原生视觉编码器与投影，2B、4B、9B 分别基于 Qwen3.5-2B、Qwen3.5-4B 与 Qwen3.5-9B，35B-A3B 基于 Qwen3.6-35B-A3B。音频侧按 16000 Hz 采样并切成 30 秒片段，经基于 Whisper 的音频编码器提取特征，再经窗口级查询变换器 (window-level Q-Former) 在 0.1 秒窗口内压成单个音频 token，即每秒 10 个音频 token。两类 token 按时间顺序交织并配文字时间戳，一起送入自回归语言模型，教学指令模式 (instruct) 直接作答，思考模式 (thinking) 先写出基于画面与声音的推理痕迹再作答。训练采用三段渐进预训练衔接三段后训练，首段只优化音频对齐器，随后解冻除视觉编码器外的参数并逐步扩展上下文，后段依次做多教师在策略蒸馏 (multi-teacher OPD)、抗重复多轮偏好优化 (anti-repetition MrDPO) 与专家强化学习 (specialist RL)。

**关键实验与核心代价：** 评测覆盖 120 余个基准，其中音视频联合部分含 33 个基准，准确率与模型打分越高越好，总错误率与词错率则越低越好。旗舰思考模式在含音频的 Video-MME 上以准确率 86.4 高于 Seed2.0-Mini-0428 的 83.6 与 Qwen3.5-Omni-Flash 的 79.3，仍低于 Gemini-3.0-Flash 的 88.6，在 Daily-Omni 上以准确率 83.4 高于 Seed2.0-Mini-0428 的 82.5。同旗舰思考模式在 SVHalluc 上以样本级准确率 80.3 高于 Seed2.0-Mini-0428 的 75.4，在 DVD-Bench 英文集上以说话人准确率 79.1 高于 Seed2.0-Mini-0428 的 75.3，在 MMOU 小规模测试集上以准确率 74.5 高于 Qwen3.5-Omni-Flash 的 69.9。轻量 9B 思考模式在含音频的 Video-MME 上以准确率 85.1 高于 30B 级开源基线 Qwen3-Omni-30B-A3B-Instruct 的 77.3。同系列在静音视频与纯音频等单模态对照上保持可比竞争力，未出现接入音频后的明显视觉退化。代价集中在约 1.2T token 的训练规模，长上下文与思考链增加推理负担，后训练需离线挖掘重复解码难例并仅更新低秩适配器以稳定优化。

**适用边界与深读导览：** 结论仅在中英双语有声视频与原文 33 个联合基准及静音、音频、图像文本对照的评判协议内成立，依赖 GPT-4o、GPT-6.1-Sol 与 Qwen3-235B-A22B 等自动评判器，换评判器、改语言分布、缺失或噪声音频、强音乐干扰及超长流式与多视频场景可能退化。训练超参数、硬件、数据筛选阈值、解码配置与时延吞吐等均未披露，各后训练模块缺少可核对的消融，归因仍需补足。架构细节见原文第 2 节，数据配比见第 3 节，三段预训练与三段后训练见第 4 节，联合与单模态对照及评判器注脚见第 5 节表格。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Tencent/WeMM-Video> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/collections/tencent/wemm-video> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：只看画面或只听声音为何读不懂真实视频

真实视频的理解难点在于画面与声音必须一起读。输入是连续的视频帧加上伴随的声音，声音里混着对白、环境音和音乐，输出则是针对提问的文字回答、描述或推理。模型既要捕捉帧与帧之间的细微动作变化，又要把相隔很远的事件连起来，还要把声音线索和画面事件对上，才能抓住高层语义。比如带货直播里价格口播与手持商品的对应，短剧里一句台词与人物表情的呼应，都要求时间维度上的细粒度对齐。已有开源模型在这类场景下容易脆弱，经常漏掉关键的视听细节，把声音安到错误的画面上，甚至编造视频里并不存在的依据，形成跨模态幻觉。

针对这一缺口，论文提出 WeMM-Video 系列中英双语全模态基础模型，覆盖 2B 、 4B 、 9B 与 35B-A3B 4 种规模。模型统一处理文本、图像、音频和视频，输出文字，采用混合思考范式，同时支持直接作答模式与思考推理模式。前者追求低延迟直接回答，后者生成显式的逐步推理轨迹，在纯视觉输入与视听联合输入上都给出可追溯的依据，以此缓解幻觉并提升复杂任务表现。训练使用约 1.2 万亿记号的多模态语料，经过渐进式预训练与三阶段后训练。论文同时公开权重与评测复现流程，代码仓库与模型合集作者资源当前可用，已公开，便于社区复现与二次开发。

要直观理解论文想解决的 4 类任务，可以先看首图安排的 4 个象限。它把同一中心模型放在中间，周围分别展示理解、推理、聆听与阅读的具体问答，用带时间戳的视频帧、波形与柱状图把输入形态讲清楚，为后文的结构与评测铺垫具体对象。

[![原论文 Figure 1：WeMM-Video can perceive and understand omni-modal videos, perform complex multimodal reasoning,…](https://arxiv.org/html/2611.26409v1/WeMM-Video-capabilities-compact.png)](https://arxiv.org/html/2611.26409v1/WeMM-Video-capabilities-compact.png)

*论文图 1：WeMM-Video can perceive and understand omni-modal videos, perform complex multimodal reasoning, and effectively handle general tasks across audio, image, and text modalities（原论文 Figure 1）。*

左上象限用 7 个带时间戳的画面展示全模态理解，从 00:00 到 05:18 ，主播依次介绍白色水壶与绿色杯子，字幕给出 39 美元、满价、 20 美元每个等口播信息。提问何时确认 30 美元组合价且覆盖何物，模型回答在 04:32 确认，覆盖两个绿色杯子，不含白色水壶，体现把价格语音与商品外观在时间轴上对齐的能力。右上象限用 7 帧短剧展示全模态推理，围绕项链失窃误会展开，孩子承认弄坏卡扣，男子出示维修单据，模型据此解释女子为何不再怀疑盗窃，体现跨越对白与表情的因果链。左下象限用唱片与波形展示音频音乐理解，模型指出中段鼓组加入钢琴，节奏稳定，情绪由平静转热烈。右下象限用 1 月 18 、 2 月 26 、 3 月 34 的销量柱状图展示图文理解，模型算出 2 月增速约 44.4% ，高于 3 月约 30.8% ，体现图表数值推理。中间环形标注感知、推理、聆听与阅读，点明统一处理 4 种模态的定位。

### 方法全景：多模态信号如何变成同一串语言记号

WeMM-Video 的整体结构沿用 video-SALMONN 2 的思路，把文本、图像、音频和视频都转成同一语言模型的输入记号 (token)，再自回归生成文字。 2B 、 4B 、 9B 三档基于 Qwen3.5-2B 、 Qwen3.5-4B 与 Qwen3.5-9B ， 35B-A3B 基于 Qwen3.6-35B-A3B 。视觉部分沿用各自基座原生的视觉编码器与映射，保留图像视频能力。声音部分新增专用音频模块，包含基于 Whisper 的音频编码器与窗口级查询变换器 (window-level Q-Former)，前者负责从声波中提取声学特征，后者负责把特征压缩成语言模型可读的记号。音频编码器参数从 Qwen2.5-Omni 初始化，视觉编码器则继承基座已有的较强表征。

沿一个带解说的视频走一遍更清楚。假设输入是一段直播回放，画面是连续帧，声音以 16,000 Hz 采样，包含主播报价与背景音。音频先按 30 秒分块送入基于 Whisper 的编码器提取特征，再经过窗口级查询变换器在 0.1 秒局部窗内压缩，每个窗映射为 1 个音频记号，折合每秒 10 个记号，保留细时间分辨率。图像与视频帧走视觉编码器得到图像记号与视频帧记号。文本提问转成文本记号，时间信息转成时间戳记号。带伴音的视频输入把视觉记号与音频记号按时间顺序交错排列，并加上显式文字时间戳，帮助跨模态细对齐。所有记号拼成一串送入大语言模型，模型逐字生成回答或描述。分支分工明确，视觉支路管外观与运动，听觉支路管语音与环境声，汇合点在语言模型的输入序列里，共享时间戳提供的对齐依据。

结构图把上述分流与汇合画得很具体，可以先看底部 3 类输入与中部两个编码器的对应，再看顶部语言模型处不同颜色记号的排列，理解分支在哪里分开、在哪里拼回一串，为训练阶段的冻结策略做铺垫。

[![原论文 Figure 2：Model architecture of WeMM-Video.](https://arxiv.org/html/2611.26409v1/wemmvideo.svg)](https://arxiv.org/html/2611.26409v1/wemmvideo.svg)

*论文图 2：Model architecture of WeMM-Video（原论文 Figure 2）。*

底部从左到右是图像图标、 5 个带播放标记的视频帧加下方声波、以及右侧声波图标代表的纯音频。蓝色块是视觉编码器，橙色块是音频编码器。图像只走视觉支路，视频帧同时关联视觉编码与底部声波，纯音频只走音频支路。顶部浅绿长条是大语言模型，下方一排小方块是输入记号序列，图例区分文本记号、图像记号、视频帧记号、音频记号、时间戳记号与输出记号。虚线箭头标出映射关系，并配有原文的图像、视频与音频提示语，以及 &lt;0.0 sec&gt; 、 &lt;1.0 sec&gt; 这类时间戳记号。右上绿色小块是输出记号，示意模型最终生成文字描述。整图说明原始信号先分模态编码成记号，再统一交给语言模型推理的流程。

在输出方式上，模型区分直接作答与思考推理两种模式，直接作答对应原文 instruct 模式，追求快速直接给答案，思考推理对应原文 thinking 模式，先展开显式逐步推理再给结论。推理轨迹同时覆盖纯视觉与视听输入，论文强调后者能有效缓解跨模态幻觉，在复杂视频任务上带来明显提升，代价是生成更长，需要更多计算与等待。两种模式在后训练中联合优化，推理时按任务选择，简单感知可用直接作答，复杂因果与对齐问题更适合思考推理。

### 训练组织：约 1.2 万亿记号如何分阶段补齐听觉与长程对齐

训练语料约 1.2 万亿记号，其中视听联合数据占 45.4% ，是最大的一块，为复杂动态建模提供稠密时间监督。按任务看，描述类占 37.7% ，是感知基础。论文在两类描述上加力，一类是细粒度视觉描述，挑选竞技体育、电子竞技、游戏、舞蹈与户外等动作事件密集的片段，标注快速身体动态与细微状态变化。另一类是视听联合描述，扩大影视、短剧、访谈、综艺与直播带货等原生全模态视频，综合描述视觉动作、对白与环境声，并沿时间线组织。候选描述都经过自动质量打分、语义去重与有害内容过滤。基座原本缺乏听觉，另配专用音频语料覆盖语音识别、音乐理解与通用音频理解。面向多视频与信息流，另设跨媒体子集，覆盖双视频对比、配乐匹配度、电商商品与广告一致性等。知识与推理问答采用双路补充，既引入带高质量思考轨迹的视觉语言科学知识推理数据，迁移深层推理能力，也组织原生视听推理任务，避免只会看不会想。

预训练分 3 段逐步扩大上下文。第一段声学模态对齐用紧凑上下文，只优化音频对齐器，即窗口级查询变换器，冻结基座语言模型与各编码器，用基础语音文本对建立听觉，覆盖语音识别与通用音频描述。第二段全模态知识注入扩大上下文，除视觉编码器外解冻全部参数，因视觉编码已足够强，混合文本、视觉、听觉与视听联合数据，建立统一跨模态表征。第三段长上下文扩展保持同样的可训练配置，进一步拉长可处理的多模态序列，用长视频、长音频与多视频场景增强跨模态长程依赖，同时保持通用任务表现。3 段的逻辑是先补听觉缺口，再灌全模态知识，最后拉长时序，避免一步到位造成模态干扰。

后训练针对 3 类剩余问题，通用语言与视觉语言能力可再提升，复杂场景生成不稳定，常出现过长或重复冗长解码，专家任务如视听说话人辨认、配乐匹配、结构化音乐理解与复杂视听推理仍需加强。为此设 3 段流水线。第一段多教师在策略蒸馏 (OPD)，用更强的外部教师指导文本与视觉语言任务以提升通用感知推理，用同系列教师保留音频与视听能力，并做文本到音频的跨模态蒸馏以增强语音理解与指令跟随，实现互补又不遗忘。第二段抗重复多轮直接偏好优化 (MrDPO)，针对预训练与蒸馏后仍有的重复解码倾向，离线挖掘视频、音频与视觉语言任务中的难负例，相对在线方法更高效捕捉稀有退化，每轮只更新低秩适配 (LoRA) 参数，并在轮间合并与重初始化，保证多轮稳定。第三段专家强化学习聚焦难例，先离线推理评估筛掉已稳定做对的样本，按可验证性分配奖励，可验证用规则奖励，开放式用评分细则与教师一致性奖励，动态路由按任务分发，思考推理与直接作答两种模式经随机采样联合优化，并扩展到更长帧覆盖与序列长度，适应长输入并维持生成稳定。

原文未披露优化器超参数、学习率安排与硬件开销等细节，也未给出每段上下文窗的具体长度数值与视觉帧采样配置，只说明逐步扩大与延长覆盖。形状、分辨率与参数更新的完整计算细节缺失时不应猜测，复现应以公开仓库中的安装与推理说明为准，先核对采样率、分块时长与窗口映射是否与 16,000 Hz 、 30 秒分块、 0.1 秒窗一致，再确认冻结与解冻范围及两种模式的调用方式，避免从模型名称反推实现。

### 主实验验证：联合视听领先在哪些口径下成立

评测覆盖视频、音频、图像与文本四核，规模含 2B 、 4B 、 9B 与 35B-A3B 。全模态视频对照领先专有模型 Gemini-3.0-Flash 、 Seed2.0-Mini-0428 与 Qwen3.5-Omni-Flash ，以及开源 Qwen3-Omni-30B-A3B-Instruct 与 MiniCPM-o-4.5-9B ，无声视频另加入 Qwen3.5-9B 与 Qwen3.6-35B-A3B 。 35B-A3B 同时报告直接作答与思考推理，中小尺寸在视频侧主要报告思考推理，音频侧用直接作答，图文侧用思考推理。全模态设 33 个基准，分通用理解、幻觉、视频音乐、交互与详细描述 5 维。无声视频设 32 个基准，分通用、长视频、细粒度感知、时间定位、空间理解、流式与多视频 7 维。音频设 18 个基准，图像设 28 个基准，文本设 12 个基准。部分开放式评测用 GPT-4o 、 GPT-6.1-Sol 等作裁判，语音识别类用词错率 (WER) 与字错率 (CER)，越低越好，其余准确率与评分越高越好。

先看纯文本对照，口径是同一组 12 个纯文本基准，分知识、指令跟随、长上下文、STEM 与数学推理 5 维。 WeMM-Video 各尺寸均用思考推理，对照 Qwen3.5-Omni-Flash 与各自基座 Qwen3.6-35B-A3B 、 Qwen3.5-9B 。分数越高越好，重点检验加入音视频训练后语言能力是否保持。

| Benchmark | Qwen3.5-Omni- | Qwen3.6- | Qwen3.5- | WeMM-Video- | WeMM-Video- | WeMM-Video- | WeMM-Video- |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Benchmark | Flash | 35B-A3B | 9B | 2B (Thinking) | 4B (Thinking) | 9B (Thinking) | 35B-A3B (Thinking) |
| Knowledge |  |  |  |  |  |  |  |
| MMLU-Pro | 79.9 | 85.2 | 82.5 | 63.7 | 78.3 | 81.6 | 84.7 |
| MMLU-Redux | 90.0 | 93.3 | 91.1 | 75.7 | 88.7 | 90.5 | 93.7 |
| SuperGPQA | 54.9 | 64.7 | 58.2 | 36.3 | 52.4 | 56.7 | 63.4 |
| C-Eval | 86.0 | 90.0 | 88.2 | 72.0 | 84.8 | 87.6 | 90.4 |
| Instruction-Following |  |  |  |  |  |  |  |
| IFEval | 85.2 | 90.9 | 91.5 | 84.3 | 91.3 | 93.2 | 93.2 |
| IFBench | 38.4 | 63.7 | 64.5 | 45.3 | 63.7 | 70.7 | 70.7 |
| CFBench | 83.4 | 87.3 | 85.3 | 77.6 | 86.0 | 86.9 | 87.7 |
| Long Context |  |  |  |  |  |  |  |
| AA-LCR | 46.0 | 60.0 | 63.0 | 14.0 | 56.0 | 59.0 | 64.0 |
| LongBench v2 | 46.4 | 59.6 | 55.2 | 33.8 | 53.5 | 54.7 | 58.1 |
| STEM |  |  |  |  |  |  |  |
| GPQA | 76.4 | 86.0 | 81.7 | 56.1 | 73.2 | 77.8 | 83.8 |
| Reasoning |  |  |  |  |  |  |  |
| HMMT Nov 25 | 59.0 | 89.1 | 82.9 | 26.7 | 75.8 | 75.0 | 90.0 |
| IMOAnswerBench | 51.5 | 78.9 | 67.8 | 22.5 | 58.8 | 62.8 | 74.8 |

结果显示文本能力基本保持， 35B-A3B 在知识与指令跟随上全面超过 Qwen3.5-Omni-Flash ，如 MMLU-Pro 84.7 分高于 79.9 分 ， MMLU-Redux 93.7 分高于 90.0 分 ， C-Eval 90.4 分高于 86.0 分 ， IFEval 93.2 分高于 85.2 分 ，并与基座 Qwen3.6-35B-A3B 基本持平， IFBench 70.7 分高于基座 63.7 分 ， HMMT 90.0 分略高于基座 89.1 分 。 9B 同样超过专有对照并接近基座，如 IFEval 93.2 分高于基座 91.5 分 。代价在小尺寸推理短板清晰， 2B 在 HMMT 仅 26.7 分、IMOAnswerBench 仅 22.5 分 ，说明复杂数学推理仍需规模支撑，不宜用小模型承载高难解题。

再看中小尺寸与开源对照的口径， 2B 、 4B 、 9B 均用思考推理，对照参数更大的 Qwen3-Omni-30B-A3B-Instruct 与 MiniCPM-o-4.5-9B ，基准是同一组 33 项联合视听任务，重点检验跨尺度效率与小规模可用性。下表为代表性摘录，完整评测共 33 项。

| 基准 | Qwen3-Omni-30B-A3B-Instruct | MiniCPM-o-4.5-9B | WeMM-Video-2B (Thinking) | WeMM-Video-4B (Thinking) | WeMM-Video-9B (Thinking) |
| --- | --- | --- | --- | --- | --- |
| Video-MMEw/ audio | 77.3 | 69.2 | 72.4 | 83.9 | 85.1 |
| Video-MME-v2w/ audio | 36.3 | 28.1 | 37.7 | 48.1 | 51.6 |
| Daily-Omni | 70.7 | 80.2 | 76.5 | 82.5 | 83.6 |
| AVUT Human | 74.2 | 78.6 | 80.2 | 84.3 | 85.8 |
| Video-Holmes | 57.6 | 64.3 | 48.8 | 58.8 | 61.3 |
| FutureOmni | 55.1 | 56.1 | 45.2 | 50.9 | 53.7 |
| MUSIC-AVQA | 71.0 | 71.6 | 75.4 | 78.0 | 79.3 |
| SVHalluc | 65.2 | 68.9 | 73.9 | 80.2 | 86.8 |
| Omni-Cloze | 27.0 | 27.1 | 38.4 | 40.1 | 41.5 |

跨尺度效率是本系列最突出的规律， 9B 在多数通用理解与下游任务上超过 30B 级开源对照， 4B 也在绝大多数基准上实现超越。即使最小的 2B 也在多项感知、幻觉与描述基准上追平或反超 30B 对照，适合资源受限部署。短板同样清晰， 2B 在需要长链推理的基准上明显偏弱，影视推理与未来导向类得分偏低，说明小规模仍难以承载复杂视听因果，选型时需按任务难度权衡规模与推理开销。

无声视频对比检验加入听觉后视觉是否退化，口径是 32 个纯视觉基准，覆盖通用、长视频、细粒度、时间定位、空间、流式与多视频。 35B-A3B 给出直接与思考两档，对照包含 Gemini-3.0-Flash 、 Seed2.0-Mini-0428 、 Qwen3.5-Omni-Flash 与强视觉基座 Qwen3.6-35B-A3B ，后者是未加入音频前的参照。下表为代表性摘录，完整评测共 32 项。

| Benchmark | Gemini-3.0-Flash | Seed2.0-Mini-0428 | Qwen3.5-Omni-Flash | Qwen3.6-35B-A3B | WeMM-Video-35B-A3B (Instruct) | WeMM-Video-35B-A3B (Thinking) |
| --- | --- | --- | --- | --- | --- | --- |
| Video-MME | 86.4 | 78.1 | 77.0 | 82.5 | 78.0 | 80.4 |
| Video-MME-v2 | 55.6 | 44.4 | 33.7 | 45.3 | 39.8 | 45.2 |
| MVBench | 70.0 | 73.4 | 70.8 | 74.6 | 72.8 | 73.1 |
| MME-VideoOCR | 81.5 | 80.5 | 70.5 | 75.8 | 73.3 | 78.4 |
| MLVU | 87.9 | 81.6 | 81.9 | 86.2 | 80.8 | 85.3 |
| MotionBench | 65.0 | 68.4 | 61.7 | 66.1 | 67.1 | 65.7 |
| TimeLens-Charades | 58.8 | 56.9 | 40.8 | 47.4 | 54.7 | 54.8 |
| OVO-Bench | 69.3 | 70.6 | 55.7 | 61.0 | 63.1 | 63.9 |

结果显示加入音频并未带来明显视觉退化，旗舰在几乎全部无声基准上大幅领先 Qwen3.5-Omni-Flash ，并与自身视觉基座与 Seed2.0-Mini-0428 基本持平，部分感知与定位基准上思考推理还略有超出。代价是与最强的 Gemini-3.0-Flash 相比，在通用长视频与部分细粒度上仍有距离，且思考推理并非处处更优，个别问答直接作答反而略高，说明推理展开只在需要多步关联时才划算，常规识别不必强行拉长。

独立音频对比检验听觉基本功，口径是 18 个纯音频基准，分通用理解、音乐理解、语音识别、歌词识别与语音交互 5 维。 WeMM-Video 各尺寸均用直接作答，对照 Qwen3.5-Omni-Flash 、 Qwen3-Omni-30B-A3B-Instruct 与 MiniCPM-o-4.5-9B 。语音与歌词识别用词错率与字错率，越低越好，其余用准确率与通过率，越高越好。

| Benchmark | Qwen3.5-Omni-Flash | Qwen3-Omni-30B-A3B-Instruct | MiniCPM-o 4.5-9B | WeMM-Video-2B (Instruct) | WeMM-Video-4B (Instruct) | WeMM-Video-9B (Instruct) | WeMM-Video-35B-A3B (Instruct) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MMAU | 80.4 | 77.5 | 76.9 | 72.4 | 75.2 | 77.0 | 78.0 |
| MMAU-Pro | 64.8 | 60.2 | 62.7 | 62.9 | 68.1 | 70.9 | 70.6 |
| MMSU | 72.2 | 69.0 | 67.4 | 65.6 | 72.6 | 76.8 | 76.0 |
| RUL-MuchoMusic | 60.5 | 52.0 | 43.9 | 46.8 | 55.4 | 57.2 | 57.4 |
| HumMusQA | 69.6 | 65.9 | 56.6 | 55.9 | 66.6 | 65.3 | 70.0 |
| MusTBench | 42.2 | 32.4 | 24.0 | 33.9 | 41.8 | 42.0 | 46.6 |
| GigaSpeech (WER ↓) | 9.2 | 8.7 | 10.1 | 9.1 | 8.6 | 8.5 | 8.6 |
| VoxPopuli (WER ↓) | 5.7 | 6.4 | 8.5 | 6.7 | 5.7 | 5.6 | 5.7 |
| MIR-1K (vocal, CER ↓) | 4.9 | 5.9 | 25.9 | 9.7 | 8.3 | 8.1 | 7.9 |
| Opencpop (CER ↓) | 1.1 | 1.5 | 23.0 | 3.1 | 2.6 | 2.8 | 2.4 |
| VoiceBench | 87.8 | 85.5 | 68.3 | 66.5 | 83.0 | 89.0 | 88.4 |
| IFEval-Audio | 58.2 | 57.9 | 52.1 | 44.3 | 56.1 | 59.6 | 63.6 |
| Speech-IFEval | 88.2 | 77.6 | 64.8 | 94.1 | 91.7 | 95.7 | 96.5 |
| Audio MultiChallenge | 58.2 | 52.2 | 45.4 | 37.7 | 54.9 | 59.2 | 62.0 |

听觉整体呈均衡偏强的态势， 35B-A3B 与 9B 在通用理解的困难集与语音指令跟随上领先开源对照，并与专有对照相当，音乐结构化理解也有提升。代价在底层转写精度上，干净朗读集的词错率与歌词字错率仍逊于专有对照，说明语义推理强不等于逐字转写强，歌词场景还需专门优化，不宜把理解分直接等同于转写分。

静态图像对比检验多模态训练是否损伤图文能力，口径是 28 个图像基准，分科学推理、通用问答、文本图表、空间、多图、计数与指令跟随 7 维。 WeMM-Video 各尺寸用思考推理，对照 Qwen3.5-Omni-Flash 与各自基座 Qwen3.6-35B-A3B 、 Qwen3.5-9B 。分数越高越好。

| Benchmark | Qwen3.5-Omni- | Qwen3.6- | Qwen3.5- | WeMM-Video- | WeMM-Video- | WeMM-Video- | WeMM-Video- |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Benchmark | Flash | 35B-A3B | 9B | 2B (Thinking) | 4B (Thinking) | 9B (Thinking) | 35B-A3B (Thinking) |
| STEM/Puzzle |  |  |  |  |  |  |  |
| MMMU | 76.9 | 81.7 | 78.4 | 61.2 | 78.4 | 78.9 | 81.1 |
| MMMU-Pro | 68.2 | 75.3 | 70.1 | 49.4 | 64.7 | 69.4 | 72.9 |
| MathVision | 65.4 | 80.4 | 78.9 | 49.2 | 73.3 | 76.0 | 79.6 |
| MathVista (mini) | 82.9 | 86.4 | 85.7 | 78.8 | 85.2 | 86.1 | 86.6 |
| DynaMath | 79.3 | 82.8 | 83.6 | 73.4 | 81.8 | 82.2 | 81.5 |
| ZEROBench | 1.0 | 5.6 | 3.0 | 0.4 | 0.8 | 2.0 | 3.8 |
| ZEROBench_sub | 26.0 | 34.4 | 31.1 | 21.0 | 25.8 | 30.5 | 34.1 |
| VisualPuzzles | 44.9 | 58.1 | 55.1 | 39.6 | 53.4 | 56.8 | 60.1 |
| General VQA |  |  |  |  |  |  |  |
| RealWorldQA | 77.5 | 85.3 | 80.3 | 73.6 | 80.1 | 80.3 | 83.4 |
| MMStar | 75.7 | 80.7 | 79.7 | 71.8 | 76.4 | 77.9 | 79.8 |
| MMBenchEN-DEV-v1.1 | 88.8 | 92.8 | 90.1 | 83.1 | 88.9 | 89.9 | 90.9 |
| MMBenchCN-DEV-v1.1 | 81.7 | 88.9 | 86.7 | 80.1 | 88.2 | 88.9 | 89.2 |
| SimpleVQA | 54.4 | 58.9 | 51.2 | 45.9 | 51.9 | 55.4 | 62.0 |
| WorldVQA | 13.6 | 19.9 | 15.7 | 14.1 | 20.3 | 23.6 | 28.6 |
| Text/Doc |  |  |  |  |  |  |  |
| CharXiv RQ | 64.4 | 78.0 | 73.0 | 62.0 | 70.3 | 73.6 | 75.7 |
| CC-OCR | 80.8 | 81.9 | 79.3 | 79.8 | 82.9 | 84.7 | 84.2 |
| AI2D_TEST | 89.0 | 92.7 | 90.2 | 83.2 | 88.4 | 89.6 | 90.6 |
| MMLongBench-Doc | 53.6 | 61.2 | 57.7 | 42.8 | 55.5 | 56.1 | 60.2 |
| OCRBench | 89.1 | 87.9 | 89.2 | 81.8 | 85.7 | 89.6 | 90.2 |
| DocVQA | 95.3 | 97.3 | 97.2 | 95.1 | 96.5 | 97.5 | 97.5 |
| Spatial |  |  |  |  |  |  |  |
| ERQA | 50.0 | 59.8 | 55.5 | 43.8 | 53.0 | 54.5 | 61.8 |
| RefCOCO (avg) | 92.6 | 92.0 | 89.7 | 63.7 | 86.3 | 89.0 | 89.5 |
| EmbSpatialBench | 82.7 | 84.3 | 83.0 | 79.0 | 83.3 | 82.8 | 83.9 |
| CV-Bench | 86.6 | 87.8 | 87.2 | 84.2 | 88.6 | 88.6 | 89.2 |
| Multi-Image |  |  |  |  |  |  |  |
| MIHBench | 61.8 | 81.3 | 81.8 | 80.8 | 81.5 | 82.9 | 83.1 |
| Counting |  |  |  |  |  |  |  |
| CountBench | 88.2 | 96.3 | 97.2 | 83.9 | 93.3 | 94.3 | 96.3 |
| TallyQA | 81.2 | 79.8 | 79.8 | 78.8 | 80.4 | 81.5 | 80.7 |
| Instruction-Following |  |  |  |  |  |  |  |
| MMIFEval | 67.0 | 81.1 | 79.5 | 58.8 | 74.6 | 80.8 | 81.4 |

图文能力基本得到保留， 35B-A3B 与 9B 在几乎全部图像基准上全面超过 Qwen3.5-Omni-Flash ，并与各自基座持平，指令跟随类还有进一步提升。极限解谜类基准绝对分仍然很低，说明高难视觉谜题对所有对照都是瓶颈，并非本方法独有。计数与文档理解保持高位，表明加入音频并未挤占原有的细粒度图文表征。纯文本侧同样保持基座水平，知识、长上下文与数学推理相当，指令跟随更优。

### 适用边界：何时值得尝试与复现第一步做什么

方法假设决定了结论边界。模型依赖较强的基座与 Whisper 初始化，预训练中冻结视觉编码器的前提是视觉表征已足够强，若换用较弱视觉基座，统一表征的效果需要重新验证。时间戳加交错排列假设视听时间同步可靠，若输入本身音画错位或时间戳缺失，对齐收益会打折扣。思考推理缓解幻觉依赖高质量思考轨迹与评分裁判的质量，开放式评测多用大模型作裁判，裁判偏好可能放大某些风格优势，不能等同于人工判断。双语能力集中在中英，跨语言泛化超出此范围未经检验。

还有多处未经验证的部署条件。论文提到模型已在微信内多项视频业务中应用，覆盖直播带货、短剧解析与互动视频，但未报告延迟、算力开销、误判率与线上稳定性，实验室基准领先不能直接承诺线上改善。后训练 3 段各有多大独立贡献，原文未给出逐段消融，思考相对直接的提升虽可见，但蒸馏、去重复与强化各自的增益无法分离。长上下文扩展声称增强长程依赖，但流式与多视频仅用少量基准覆盖，更长的信息流与噪声环境仍待检验。

复现核对应当从公开资源起步。代码仓库与模型合集作者资源当前可用，已公开，文档说明覆盖安装与推理，完整度为部分可用。第一步是按文档跑通推理，先核对音频采样、分块与窗口映射是否与 16,000 Hz 、 30 秒分块、 0.1 秒窗折合每秒 10 个记号一致，再确认视觉编码器冻结范围、基座版本与两种模式的调用开关。需要分清三件事，代码开源不等于权重可直接商用，权重可下载不等于系统开箱可运行，评测流程可复现不等于线上效果一致，许可、算力与数据合规都要单独确认。

工程选型上，联合视听推理任务值得优先尝试，尤其是需要把对白、环境声与画面动作一起理解的中英场景，资源受限时可从 9B 或 4B 起步，简单感知用直接作答保延迟，复杂因果与争议判断切到思考推理。纯逐字转写、歌词精校与细粒度配乐辨别若是核心指标，则不宜直接套用本系列的理解优势，需要补专门的转写与音乐验证。补验证时至少做三项，在自有视频上做人工抽查幻觉率，在长视频与多视频上测稳定性与重复率，并用人工或异构裁判交叉核对大模型裁判的偏好，避免把裁判风格误当能力差距。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.26409v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
