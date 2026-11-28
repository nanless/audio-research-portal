---
title: "Low-Latency Real-Time Audio Game Commentary System via LLM-Based Parallel Text Generation"
date: 2026-11-28
draft: false
description: "针对原始游戏视频接入大语言模型时串行等待造成数秒级静音的问题，本文用边播边写的多候选缓冲加轻量视频延迟把平均句间静音压到 0.3 秒量级并显著改善主观节奏，但结论只在 8 个格斗游戏短片段与在线大模型服务条件下成立且多路并发成本未量化。"
tags: ["主观评测", "流式处理", "语音", "视频到声音生成"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "并行文本生成如何消除实时游戏解说的长静音"
paper_digest_original_title: "Low-Latency Real-Time Audio Game Commentary System via LLM-Based Parallel Text Generation"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0972"
paper_digest_workbench_source_sha256: "625917a67711bad8ae513885af81d7aace461675f39eb84c8fbf3b06282dd68f"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/972"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0972.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "视频到声音生成"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对原始游戏视频接入大语言模型时串行等待造成数秒级静音的问题，本文用边播边写的多候选缓冲加轻量视频延迟把平均句间静音压到 0.3 秒量级并显著改善主观节奏，但结论只在 8 个格斗游戏短片段与在线大模型服务条件下成立且多路并发成本未量化。"
paper_digest_reader_sections: [{"heading":"快节奏游戏直播中语音解说为何总出现长时间静音","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"边播边写与视频延迟控制构成的并行解说流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"三路轻量选择与首句对齐的视频延迟如何协同","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"并行生成把平均静音从 9 秒量级压到 0.3 秒量级","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"生成长度拉长时文本重叠度如何变化","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"听测者在节奏与整体质量上更认可哪种流程","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、代价与复现核对清单","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The University of Tokyo, Japan","National Institute of Advanced Industrial Science and Technology, Japan"],"name":"Ryota Kawamatsu"},{"affiliations":["National Institute of Advanced Industrial Science and Technology, Japan","Technical University of Munich, Germany"],"name":"Anum Afzal"},{"affiliations":["The University of Tokyo, Japan"],"name":"Yuki Saito"},{"affiliations":["Keio University, Japan","The University of Tokyo, Japan"],"name":"Shinnosuke Takamichi"},{"affiliations":["Carnegie Mellon University, U.S.A."],"name":"Graham Neubig"},{"affiliations":["Nara Women’s University, Japan"],"name":"Katsuhito Sudoh"},{"affiliations":["National Institute of Advanced Industrial Science and Technology, Japan"],"name":"Hiroya Takamura"},{"affiliations":["National Institute of Advanced Industrial Science and Technology, Japan"],"name":"Tatsuya Ishigaki"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"173a600cede1dff47a6b41f6436beb2997d1ff263ce3d25a0e0c4e28456b1033","url":"/audio-research-portal/client/papers/2026-11-28/conference-f0c976edb4aad5b58484bbc1/citation.bib"},"citation.json":{"sha256":"6cf4547f6fe10d361266a57521696c789220ac1a2716e62b51aa3da87295eb02","url":"/audio-research-portal/client/papers/2026-11-28/conference-f0c976edb4aad5b58484bbc1/citation.json"},"citation.ris":{"sha256":"08b73f16088fb94e230efbf69cd301a1f7bc3c3c2dff4e30f0988e4037327e04","url":"/audio-research-portal/client/papers/2026-11-28/conference-f0c976edb4aad5b58484bbc1/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"72096d9a3fb3264a1834df5a07c35b37aeccc9c874ec83dbc4414fb5fbc4f69e","url":"/audio-research-portal/client/papers/2026-11-28/conference-f0c976edb4aad5b58484bbc1/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0972"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/972"
paper_digest_conference_doi: "10.24963/ijcai.2026/972"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/972"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0972.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "a8abe51a7944fedf392be4ef83ab818a9f0f9c27abb307760db04e99752310ec"
paper_digest_api_reader_plan_sha256: "9f7d9550eb113054b30e2ca69cf45164418931ac1afe807aa02394ee12d403ca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "351db6091b13a1c372e5dd225bd8bb9eb8b16a284e7e5feb3d51a3661796bb4e"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a43502ee66b5f2efcfadfa03a338abb9051ff19b4026c0faf8effd91684cd6af"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9c41e2726e2cc638a3b7291ced05858e99d5e28b0a4db5238521afac4544143a"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "145829b2f1e5bf1d733f16bb24c97eee22cfc37619c99ed8315caf1b573bf7e6"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_method: "主观评测"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 并行文本生成如何消除实时游戏解说的长静音

> 英文题目：*Low-Latency Real-Time Audio Game Commentary System via LLM-Based Parallel Text Generation*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0972`
> DOI：`10.24963/ijcai.2026/972`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/972) · [官方 PDF](https://ijcai.org/proceedings/2026/0972.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio)
- **研究方法**：[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)
- **研究条件**：[流式处理](/audio-research-portal/papers/?concept=setting.streaming)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.0/10** | 创新 5.3/10 | 技术严谨 6.2/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 1.5/10 | 可复现 4.6/10 | 工程/实践 5.0/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Ryota Kawamatsu：The University of Tokyo, Japan；National Institute of Advanced Industrial Science and Technology, Japan
- Anum Afzal：National Institute of Advanced Industrial Science and Technology, Japan；Technical University of Munich, Germany
- Yuki Saito：The University of Tokyo, Japan
- Shinnosuke Takamichi：Keio University, Japan；The University of Tokyo, Japan
- Graham Neubig：Carnegie Mellon University, U.S.A.
- Katsuhito Sudoh：Nara Women’s University, Japan
- Hiroya Takamura：National Institute of Advanced Industrial Science and Technology, Japan
- Tatsuya Ishigaki：National Institute of Advanced Industrial Science and Technology, Japan

## 📌 核心摘要

**问题与瓶颈：** 该任务输入为实时游戏视频流，输出为与画面同步的口语解说音频，系统需依次完成视频分段、文本生成与语音合成再播出。现有主流路线采用严格串行流水线，每轮在当前语音播放结束后才对最新视频段调用多模态大语言模型生成文本，再经文本到语音合成后播放。推理时延不可避免并在轮次间累积，导致话语之间出现长时间非自然静音，破坏解说节奏与观赛沉浸感。将该设定扩展到原始游戏视频与现代多模态大语言模型后，时延瓶颈更为突出。

**核心思路与方法架构：** 核心直觉是在播放当前话语的同时为新到达的视频段并行生成候选文本并缓冲，从而在播放边界实现即时合成以消除等待性静默。沿单条样本看，游戏机以 25 fps 送出视频，采集卡捕获后按 N = 32 帧切分为段 Fk，每段以 base64 编码送入 GPT-4.1-mini 生成解说文本，最大新词元数在 20、40、60、80 与 100 之间变化。生成在当前话语播放期间于后台持续进行，候选存入缓冲，当前播放结束时按最新、最早或随机三种轻量策略之一选取一条立即合成，避免为等待生成而静默。模型不做训练更新并按流式运行，系统另将输出视频缓冲并延迟至首句话语开始以吸收首轮端到端时延，使解说与画面对齐。

**关键实验与核心代价：** 在取自 Smash Corpus 的 8 段 Super Smash Bros. Ultimate 快节奏对局视频上，最大新词元数为 20 时串行 After-Audio 的平均话语间隔静音为 9.5 ± 0.9 秒，而并行 Oldest 策略为 0.3 ± 0.1 秒，累积静音从 134.0 ± 5.2 秒降至 18.9 ± 3.1 秒，话语与静音模式相似度平均交并比 (mean Intersection over Union, mIoU) 从 0.01 ± 0.06 升至 0.60 ± 0.04。以 1 Hz 二值序列度量的 mIoU 上并行三种策略均在 0.59 到 0.60 之间，差异很小，说明收益主要来自并行本身而非选择策略。在 120 名经 Lancers 招募的参与者对取自 20 个场景的 30 秒片段的 5 级量表评分中，解说节奏自然度平均意见分 (Mean Opinion Score, MOS) 上并行方法最高为 3.68，高于串行基线最高 2.58，视频对齐与总体质量亦同向提升。代价侧表现为文本越长占用播放越久，Latest 策略下最大新词元数从 20 增至 100 时平均说话时长从 2.3 ± 0.1 秒增至 4.4 ± 0.1 秒，原文未披露实时率或推理时延与显存实测。

**适用边界与深读导览：** 上述结论成立于单款格斗游戏、8 段视频、特定闭源大语言模型与既有语音合成配置及现场单机演示条件，未覆盖其他游戏类型、网络抖动、长时间直播漂移与多说话人场景，也未验证延迟视频对观赛体验的影响。论文提供演示视频可对照试听并行对间隔静音与节奏的改善，但未公开代码与权重。欲深究分段与并行缓冲实现、视频延迟控制及静音统计与 MOS 细节，可查阅下方方法概述和架构与实验结果章节。

## 🔗 开源与复现资源

- 演示资源：<https://youtu.be/pmrRUlvav8M> → <https://www.youtube.com/watch?v=pmrRUlvav8M&feature=youtu.be> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 快节奏游戏直播中语音解说为何总出现长时间静音

实时游戏解说需要把正在进行的游戏画面直接转成口语解说，再与直播视频合流后推送给观众，帮助观众沉浸在对局进程与背景信息之中。过去的研究大多沿两条独立路线推进，一路研究从结构化数据、视频或多模态输入生成解说文本，另一路研究富有表现力的语音合成，两者很少在原始视频与现代大语言模型条件下端到端衔接。把原始游戏视频交给多模态大语言模型，再接语音合成，是本文要解决的端到端语音解说设定。

系统输入是连续采集的游戏视频流，输出是与视频合流的口语音频。原文把采集时刻记为 fi ，把连续 N 帧记为一段 Fk ，即 Fk 包含从 fi 起的 N 个连续帧。演示与实验统一取 N = 32 ，采集侧以 25 fps（每秒帧数）送视频，因此一段对应约 1.28 秒画面。文本生成使用简单提示，要求模型描述局面，无话可说时保持沉默，生成文本再由语音合成模块转成音频。这一输入输出定义把时间节奏评价放在首位，内容是否说对放在其次。

传统流程采用严格串行等待，当前语音播完才调用多模态大语言模型处理最新一段，文本生成结束再做语音合成，合成播完才触发下一轮。在此期间新到的视频帧只能丢弃，观众听到的是生成等待造成的长静音。摘要报告并行设计把平均句间静音从 9.6 秒降到 0.3 秒，而表 1 在最大新词元数为 20 的条件下报告串行基线均值约为 9.5 ± 0.9 秒，两处口径略有差异，原文未解释，此处并存原文数字。快节奏格斗游戏对延迟格外敏感，数秒级停顿会直接破坏解说节奏与视频音频对应关系。

半串行变体在文本生成结束后不等语音播完就启动下一轮，缩短了部分等待，但仍未实现播音与生成的完全重叠，累积静音依然远高于人类水平。人类熟练解说的累积静音与平均静音明显更低，发声与静音交替更碎更密。因此核心问题不是把单句写得更华丽，而是在推理延迟不可避免时，如何让文本生成与语音播放重叠起来，并在播放边界立即可用，同时用轻量视频延迟吸收初始滞后，保持画面与声音的时间一致。

### 边播边写与视频延迟控制构成的并行解说流程

先沿原图上下两栏把握整体时序，上栏为串行基线，下栏为本文并行系统。两栏左侧都有游戏源与采集卡，中间是按颜色区分的视频帧序列，下方是文本生成与语音合成模块，最底部是发声与静音交替的时间条。请重点对比文本生成被触发的时刻，以及时间条中浅色静音段与深色发声段的相对长度，这是理解等待时间从何而来、又被何种机制消除的关键。

[![原论文 Figure 1：System overview: sequential baseline vs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-1.png)

*论文图 1：串行基线与并行系统的流程对比，突出生成触发时机与发声静音条的差异（原论文 Figure 1）。*

原图上栏只在语音播完后取最新一段送入一个文本生成模块，再经一个语音合成模块产生一段波形，发声条在两次深色发声之间留出很长的浅粉色静音，并用红色文字标注处理期间丢帧且长时间无解说。下栏把每一视频段都同时送入多个并行的文本生成模块，选择框标注 Latest 、 Oldest 、 Random 3 种轻量策略，选中文本才送语音合成，时间条上浅蓝色静音与深色发声交替更密，蓝色文字强调从堆叠帧解码多路文本并在合成后二选一，从而实现边界即时合成。

与最近的串行流程相比，本文保留了视频延迟控制，替换的是文本生成的触发时机与缓冲机制。串行流程播完才生成，并行流程在新视频段到达即生成，即使当前语音仍在播放，后台进程也持续为新到达的片段生成候选文本并存入缓冲，当前语音结束时立即选中一路并合成，避免空等。信号规格方面，原文披露游戏机以 25 fps 送视频，每段取 N = 32 帧，语言模型接收每段的 Base64 编码词元并生成解说文本，文本生成采用 GPT-4.1-mini ，语音合成沿用前人配置，实验对比最大新词元数取 20 、 40 、 60 、 80 、 100 共 5 档。图像分辨率、音频采样率与特征维度等原文未披露，此处不做推测。

以贯穿全文的 1 秒样本为例，采集侧每秒产生 25 帧，不足一段所需的 32 帧，约 1.28 秒才能凑满一段 Fk 。该段经编码送入大语言模型，并行分支同时为相邻多段生成候选，候选文本在缓冲中等待播放边界，边界到达时按既定策略选出一路送语音合成，合成音频与故意延迟后的视频合流后上传。原文未披露各模块间张量形状、帧率变换细节与码本维度，因此无法给出逐模块的形状变化表，只能确认分段、并行生成、缓冲选择与延迟合流 4 个汇合点，以及 25 fps 与 N = 32 这两个唯一可靠的节奏参数。

### 三路轻量选择与首句对齐的视频延迟如何协同

并行文本生成的核心是把等待时间转化为提前量。传统做法把生成放在播放之后，本文把生成放在播放之中，新视频段一旦可用就启动生成，不必等当前语音结束。多个候选在播放期间陆续完成并进入缓冲，当前语音结束瞬间直接取用已完成的文本做语音合成，省去了从零开始的模型推理等待。这一改动不改变单句生成质量本身，改变的是生成与播放的时间重叠关系，因此静音缩短主要来自流程重排，而非语言模型变强。

缓冲命中后选哪一路，原文只测试 3 种轻量策略，即 Latest 取最近片段、 Oldest 取最早缓冲、 Random 随机抽取。轻量是为了避免引入额外决策延迟，在实时条件下任何复杂的打分或重排都可能吃掉并行省下的时间。实验显示三者差异相对较小，静音统计与节奏相似度都处在同一量级，说明主要收益来自并行生成本身，选择策略只影响用哪一段画面的文本来配当前边界，时效与内容覆盖各有侧重，但都不改变即时可用的本质。

即使生成与播放重叠，文本生成与语音合成仍会带来不可避免的滞后，解说总比画面慢半拍。原文考虑面向 YouTube Live 这类直播平台的推送设定，在服务器端把游戏视频与自动生成的语音合成为一路音视频流再上传，因此可以控制视频播放时机。具体做法是缓存视频流，等到第一句解说开始才开始播放，用初始端到端生成延迟吸收后续滞后，使观众看到的画面与听到的解说在时间上大致对齐。所有对比方法都使用相同的视频延迟控制，保证公平。

本文没有模型训练阶段，属于冻结推理与规则控制的系统工作。文本生成直接调用 GPT-4.1-mini ，语音合成沿用前人配置，冻结参数不更新，可调的只有最大新词元数等解码长度参数，不存在梯度更新与损失设计。推理时多路解码在后台并发执行，缓冲、选择与合成在播放边界串接，演示在会场由参会者自愿操作 Nintendo Switch 主机，经采集设备 Elgato HD60 X 实时送入解说服务器，全程不录制不分发，观众可直接感知句间静音与节奏变化。原文未披露推理硬件、并发路数、显存占用与实时系数等开销细节。

### 并行生成把平均静音从 9 秒量级压到 0.3 秒量级

客观评价使用从 Smash 语料中随机抽取的 8 个视频，目标游戏为 Super Smash Bros. Ultimate ，属于节奏很快、对延迟格外敏感的格斗游戏，并配有熟练解说员的参考解说。对比包含 After-Audio 、 After-Text 、 Latest 、 Oldest 、 Random 共 5 种方法，前两者为串行与半串行基线，后三者为并行加不同选择策略，所有方法使用相同的视频延迟控制。评价从时间行为与内容充分性两方面展开，时间方面看累积静音、平均句间静音与发声时长，节奏相似度把每路解说表示为 1 Hz（赫兹）二值序列并计算与人类解说的 mIoU（平均交并比），内容方面在固定 10 秒窗口内计算 ROUGE（文本重叠评价）召回。

下表整理最大新词元数为 20 时的静音统计与节奏相似度，行覆盖人类参考与 5 种系统，列为累积静音、平均句间静音与 mIoU（平均交并比），数值保留原文的 ± 标准差形式。阅读时先看串行基线与人类参考的差距，再看 3 路并行策略把差距收窄到何种程度，同时注意 mIoU 越高表示发声与静音区划分与人类越接近，静音两列数值越小表示等待越短。

| 方法 | 累积静音 | 平均句间静音 | mIoU |
| --- | --- | --- | --- |
| Human | 59.7 ± 11.3 | 1.7 ± 0.4 | – |
| After-Audio | 134.0 ± 5.2 | 9.5 ± 0.9 | 0.01 ± 0.06 |
| After-Text | 125.5 ± 5.8 | 6.8 ± 0.9 | 0.10 ± 0.08 |
| Latest | 24.7 ± 6.6 | 0.4 ± 0.1 | 0.59 ± 0.04 |
| Oldest | 18.9 ± 3.1 | 0.3 ± 0.1 | 0.60 ± 0.04 |
| Random | 19.1 ± 3.6 | 0.3 ± 0.1 | 0.60 ± 0.03 |

表中串行基线的累积静音超过人类参考 1 倍以上，平均句间静音达到 6 秒到 9 秒量级，而 mIoU（平均交并比）仅为 0.01 到 0.10 量级，说明长停顿造成发声静音划分与人类严重错位。3 路并行方法把累积静音压到 20 秒上下，平均句间静音压到 0.3 秒到 0.4 秒量级， mIoU 回升到 0.59 到 0.60 量级，接近人类节奏。策略间差异很小， Oldest 与 Random 的均值略低于 Latest ，但标准差范围高度重叠，不能据此断定某一策略在所有列都更好。

所有数值均带标准差，串行基线的波动主要来自长等待本身，并行方法的波动相对更小，但仍保留数秒级离散，说明不同对局与解说时机仍有影响。内容充分性方面并行同样占优，细节在后文曲线中展开，此处不提前引用被裁掉的行列。需要指出，本文客观指标均为时间统计与文本重叠，没有使用神经代理评分，主观感知完全依赖后文 120 名参与者的 MOS（平均意见分）听测，缺失神经代理与人工的背离分析，复现时应以人工节奏感知为准。

### 生成长度拉长时文本重叠度如何变化

在看 ROUGE 召回曲线之前，先明确坐标与图例的含义。原图包含左中右 3 个子图，横轴均为最大新词元数，取 20 、 40 、 60 、 80 、 100 共 5 档，纵轴分别为 ROUGE-1 召回、 ROUGE-2 召回与 ROUGE-L 召回，取值范围均为 0.0 到 0.7 。图例用 5 种颜色区分 After-Audio 、 After-Text 、 Latest 、 Oldest 与 Random ，误差线表示标准差。请沿横轴观察两组基线是否随长度单调上升，以及 3 路并行曲线是否始终处在高位并趋于平坦。

[![原论文 Figure 2：ROUGE Recall across max new tokens. Error bars denote standard deviation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-2.png)

*论文图 2：三组召回指标随最大新词元数变化的曲线，并行组始终高于串行基线（原论文 Figure 2）。*

像素显示 3 路并行曲线在 3 个子图中都明显高于两条基线曲线，没有例外。 ROUGE-1 召回中并行组约在 0.5 到 0.6 之间，基线组约在 0.2 到 0.4 之间， ROUGE-2 召回中并行组约在 0.25 到 0.35 之间，基线组约在 0.1 到 0.2 之间， ROUGE-L 召回形态与 ROUGE-1 接近。基线随最大新词元数增大而缓慢爬升，并行组在 20 到 40 之后即趋平，3 种选择策略的点位几乎重合，误差线多有重叠，因此不能断定某一策略始终更好，只能说并行整体带来一致增益。

ROUGE 在固定 10 秒窗口内计算，以缓解实时条件下精确时间对齐困难的问题，方向为召回率越高表示覆盖参考解说内容越多。表 2 的长度分析显示，在 Latest 策略下，人类平均发声时长为 2.8 ± 0.5 秒，文本长度为 25.9 ± 4.1 ，而 40 档的发声时长为 2.9 ± 0.1 秒最接近人类， 60 档的文本长度为 28.2 ± 0.8 最接近人类。生成越长，单句发声越久，召回自然走高，但也会改变时间节奏，因此长度选择需要在内容覆盖与节奏自然之间权衡。

跨行看，最大收益来自串行到并行的切换，而非词元数从 20 加到 100 。基线即使拉长到 100 ， ROUGE 仍远低于并行在 20 时的水平，说明等待造成的漏说无法靠把单句写长来弥补。代价是发声时长随词元数从 2.3 秒一路涨到 4.4 秒，文本从 16.8 涨到 36.3 ，过长可能拖慢边界轮换，但原文未报告长句是否造成新的排队，缺失的消融是未测试自适应截断或按局面动态调长，复现时应先固定 20 或 40 再调大。

### 听测者在节奏与整体质量上更认可哪种流程

在解读主观打分之前，先看清原图的版式。上中下三排分别对应解说节奏自然度、视频音频对齐度与总体质量，每排横轴都是 After-Audio 、 After-Text 、 Latest 、 Oldest 、 Random 共 5 组方法，每组内再按最大新词元数 20 、 40 、 60 、 80 、 100 分 5 根柱子，纵轴均为 1 到 5 分的 MOS（平均意见分），柱顶标注具体均值，误差线表示 95% 置信区间。请先对比左侧两组基线与右侧 3 组并行的高度差，再看组内 5 根柱子是否随词元数单调变化。

[![原论文 Figure 3：User study results for Q1–Q3 across methods and max new tokens.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/afa9d4bd5ede/figure-3.png)

*论文图 3：三问主观打分按方法与词元数分组的柱状对比，并行组明显高于基线组（原论文 Figure 3）。*

像素中右侧 3 组并行柱子在三排都明显高于左侧两组基线。节奏自然度一排，并行组约在 3.4 到 3.6 分之间， After-Audio 组约在 1.9 分上下， After-Text 组约在 2.0 到 2.5 分之间。对齐度一排，并行组约在 2.9 到 3.2 分之间，基线组约在 2.2 到 2.7 分之间。总体质量一排，并行组约在 3.0 到 3.3 分之间，基线组约在 1.8 到 2.3 分之间。三排内 Latest 、 Oldest 、 Random 之间没有稳定排序，同一方法内不同词元数的高低也不一致，误差线多有重叠，因此只能说并行整体显著改善感知，策略与长度的细微排序不成立。

主观评价通过 Lancers 招募 120 名有经验的游戏玩家，取 20 个场景各截 30 秒片段，每个片段搭配 5 种方法乘 5 档词元数共 25 种条件之一生成解说。参与者在 5 点量表上打分，报告 MOS（平均意见分），问题覆盖节奏自然度、对齐度与总体质量三问，误差线为 95% 置信区间。这一规模在演示类工作中属于较大听测，但原文未披露每条件有效试听人次、是否做多人重复与随机化平衡，复现时应按场景与条件分层统计，避免少数场景主导均值。

消融视角看，词元数对并行感知的改变很小，节奏分在 3.4 到 3.6 分之间窄幅波动，对齐与总体分同样平坦，说明一旦实现即时可用，单句稍长稍短不伤大局。基线组随词元数略有爬升， After-Text 在节奏上从 2.04 分涨到 2.58 分，但仍远低于并行最低位，代价是更长的合成与播放可能进一步推高等待，原文未量化这一反作用。未胜出项很明确，任何基线在任何主观维度都未超过并行，未评测范围包括不同游戏类型、不同语言与长时间连续直播的稳定性，结论目前只在格斗游戏短片段上成立。

### 结论成立的前提、代价与复现核对清单

结论成立依赖 3 个前提，一是所有方法共用相同的视频延迟控制，公平性才成立，二是评价集中在快节奏格斗游戏的短片段与 10 秒窗口统计上，三是最大新词元数只在 20 到 100 之间测试。离开这些前提，长时直播的误差累积、其他游戏的语速需求与更长生成的排队效应都未被验证。并行用多路并发换即时可用，代价是同一时刻要跑多个大语言模型请求，计算与费用开销必然高于串行，但原文未披露并发数、延迟分布与实时系数，无法给出量化权衡。

部署层面，会场演示依赖本地 Nintendo Switch 、采集卡与解说服务器的稳定链路，视频以 25 fps 实时送达，网络抖动与模型服务波动在会场外可能放大。视频延迟吸收的是初始滞后，若中途某路生成超时，缓冲可能被耗尽而重新出现静音，原文没有给出超时与丢弃策略。跨平台推送、不同分辨率与音频链路的端到端延迟也未测试，因此从演示到线上直播仍有工程距离，不能直接把短片段的 0.3 秒均值外推为全天稳定值。

复现需要区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行。原文未披露代码仓库与权重下载信息，文本生成依赖 GPT-4.1-mini 的在线服务，语音合成沿用前人配置但未给出可运行脚本，附录也未提供证明或补充消融。唯一可核对的是演示视频当前可用，地址为 <https://youtu.be/pmrRUlvav8M> ，可对照串行长静音与并行即时衔接的现象理解节奏差异，不应据此脑补未报告的听感细节。系统演示明确仅在会场进行，不录制不分发，第三方难以完全复刻现场链路。

工程选型上，若目标是快节奏直播的自然节奏，优先采用边播边写的并行流程加视频延迟，而不是把单句写长，最大新词元数先取 20 或 40 ，保证边界轮换轻快，再按内容需要小步上调。若更在意画面与解说的严格对应， Latest 更贴近最新局面， Oldest 更照顾先到先得， Random 可作随机对照，三者感知差异很小，不必过度调参。后续工作应补齐长时间运行的稳定性、超时回退与成本统计，才能把演示效果转化为可上线的服务。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：游戏机以 25 fps（每秒帧数）送视频，每段取 32 帧约 1.28 秒，文本经 Base64 编码送模型，语音合成采样率与声码器细节原文未披露，最大新词元数取 20 到 100 共 5 档
- **训练与评测数据**：无模型训练阶段，评测使用 Smash 语料中随机抽取的 8 个视频，目标为 Super Smash Bros. Ultimate 格斗游戏，配有熟练解说员参考文本，另取 20 个场景各截 30 秒片段用于主观评价
- **算力与训练耗时**：原文未披露训练硬件与训练耗时，无模型训练阶段，推理依赖 GPT-4.1-mini 在线服务与既有语音合成配置，会场经采集设备实时运行，推理硬件型号与数量原文未披露
- **核心超参数与配置**：文本生成采用 GPT-4.1-mini ，每段 32 帧，最大新词元数取 20 40 60 80 100 共 5 档，提示要求描述局面或保持沉默，选择策略为 Latest Oldest Random 三种，优化器学习率批大小等原文未披露
- **推理速度与部署开销**：并行设计把平均句间静音压到 0.3 秒到 0.4 秒量级，但需多路并发请求，原文未披露实时系数延迟分布显存占用与费用，无法量化计算代价，会场演示仅说明实时运行
- **开源产物与协议状态**：原文未披露代码仓库权重下载与可运行系统信息，仅说明演示视频当前可用，会场演示仅在现场进行且不录制不分发，第三方无法直接运行完整链路
- **附录与补充材料要点**：原文未提供附录证明补充消融与许可说明，参考文献列出既有语料模型与合成配置，未报告失效案例与长时稳定性，复现应以正文数字与演示视频现象为准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.0/10** | 创新 5.3/10 | 技术严谨 6.2/10 | 实验充分 7.0/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 1.5/10 | 可复现 4.6/10 | 工程/实践 5.0/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0972`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/972) · [官方 PDF](https://ijcai.org/proceedings/2026/0972.pdf)
- DOI：`10.24963/ijcai.2026/972`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：并行将平均间隔静音从9.5±0.9秒降至0.3±0.1秒且mIoU升至0.60±0.04，对照完整效果大幅改善。

- 核心优势：120名参与者30秒片段5级量表MOS报告95%置信区间且未用代理指标，主观协议规范。

- 主要短板：宣称低延迟实时却未披露实时率推理时延与显存实测，无端到端部署证据支撑。

- 主要短板：摘要写9.6秒到0.3秒而表1为9.5±0.9秒到0.3±0.1秒，原文未解释字面差异。

- 主要短板：视频延迟控制全部方法相同无消融且ROUGE仅图示无数值，覆盖仅8段单款游戏验证不足。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
