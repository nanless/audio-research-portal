---
title: "MIDI-PHOR: Multi-View Distillation for Music Understanding and Captioning"
date: 2026-11-27
draft: false
description: "针对音频嵌入难以追溯音符与配器依据的问题，MIDI-PHOR 以符号、时序与配器图三重视角构建按小节对齐的关系库并约束语言模型只输出带证据的声明，在 97 首检验中验证通过率达 0.804 且幻觉率低至 0.186，代价是声明覆盖率偏低且依赖符号质量与启发式阈值。"
tags: ["规则与词典方法", "信号处理", "音频字幕生成", "音乐分析"]
categories: ["nlp4musa-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "以符号三重视角让音乐标题可回查到小节与声部"
paper_digest_original_title: "MIDI-PHOR: Multi-View Distillation for Music Understanding and Captioning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.6"
paper_digest_workbench_source_sha256: "e0fa15fe61b8c1db0fb1dbbf1a91ac31f7f1f91a7a9b6ff2bc1814c393c0391b"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.nlp4musa-1.6/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.6.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频字幕生成"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频嵌入难以追溯音符与配器依据的问题，MIDI-PHOR 以符号、时序与配器图三重视角构建按小节对齐的关系库并约束语言模型只输出带证据的声明，在 97 首检验中验证通过率达 0.804 且幻觉率低至 0.186，代价是声明覆盖率偏低且依赖符号质量与启发式阈值。"
paper_digest_reader_sections: [{"heading":"只听音频嵌入为何讲不清音符与配器","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"把乐谱蒸馏为可查询知识库的整体流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"三重视角如何从小节线抽出和声律动与乐队关系","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"从关系表到提示词的蒸馏与证据约束","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"事实性检验中验证通过率与幻觉率的变化","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"提示词稳定性与计算开销的拆解诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"没有金标准与人声时的适用边界与复现核对","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Independent Researcher"],"name":"Steven Au"}]
paper_digest_abstract_sha256: "4e4a8d79671076128e16578f620c69e259c6886d1b57567d2407954381e98fdc"
paper_digest_sidecars: {"citation.bib":{"sha256":"efc24908a98843c5be3d58436377fbf8825845c49dfdc6341d6fe0b6416d62ea","url":"/audio-research-portal/client/papers/2026-11-27/conference-f681dac431ca7bec7b09a208/citation.bib"},"citation.json":{"sha256":"1a584531966464ec962bacf1aaa0481e068cada934ec011e59b64d5cd0b4e091","url":"/audio-research-portal/client/papers/2026-11-27/conference-f681dac431ca7bec7b09a208/citation.json"},"citation.ris":{"sha256":"9d6b92dd9f28c42050ff734504436a84c21a49bf03584a289e5daebda793facb","url":"/audio-research-portal/client/papers/2026-11-27/conference-f681dac431ca7bec7b09a208/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ae3e0e6d35136959c99da9d641408f37412be01f82054e5a73d751cefc4a7359","url":"/audio-research-portal/client/papers/2026-11-27/conference-f681dac431ca7bec7b09a208/rethink-context.json"}}
paper_digest_paper_id: "conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.6"
paper_digest_source_kind: conference
paper_digest_conference_id: "nlp4musa-2026"
paper_digest_conference_name: "nlp4musa-2026"
paper_digest_doi: "10.18653/v1/2026.nlp4musa-1.6"
paper_digest_conference_doi: "10.18653/v1/2026.nlp4musa-1.6"
paper_digest_conference_record_url: "https://aclanthology.org/2026.nlp4musa-1.6/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.nlp4musa-1.6.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "fcbebb4c38bbbdd5fa3af775955dd313c2806a7fe8972c0acfa59e75299881e9"
paper_digest_api_reader_plan_sha256: "ffaea4eb6ffd449840e905fb8306cdb6b1e11bdcd64abe39c6590ea4a42bdbfb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "fbc09d746b9981cb14bcec3c2f28076745065f3ef3c1831f8a4489c7b08f0336"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3f8c58319b829ec1c093cf2ec06af7c91f413c32ecb138eb2f4a0953f04cef81"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4f8122acfe15672be4d31eb2e45b633e86d03faf7323bdcc60e1320bf1228c02"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "06d39641d6690511c15b64d6c8967f789387680a28ec66dd9fe4dc4a8cd846d1"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.rule-based","label":"规则与词典方法"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"task","id":"task.music-understanding","label":"音乐分析"}]
paper_digest_primary_method: "信号处理"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 以符号三重视角让音乐标题可回查到小节与声部

> 英文题目：*MIDI-PHOR: Multi-View Distillation for Music Understanding and Captioning*

> 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.6`
> DOI：`10.18653/v1/2026.nlp4musa-1.6`
> Track：NLP4MusA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.6/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.6.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-research-portal/papers/?concept=task.audio-captioning)；[音乐分析](/audio-research-portal/papers/?concept=task.music-understanding)
- **研究方法**：[规则与词典方法](/audio-research-portal/papers/?concept=method.rule-based)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.9/10 | 技术严谨 6.4/10 | 实验充分 6.1/10 | 清晰度 5.4/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Steven Au：Independent Researcher

## 📌 核心摘要

**问题与瓶颈：** 任务输入为 MIDI 符号文件中的离散事件，包含音高、节奏、配器与控制变化，输出为描述曲式、和声进行、织体与乐器互动的自然语言字幕，并要求每条主张附带可追溯到小节与音轨的证据指针。现有主流路线一是音频文本生成模型，直接学习音频与文本对应以合成音乐，内部结构不可查，无法引用具体音符或配器佐证输出，二是联合嵌入检索模型，擅长全局情绪标签但丢失和弦转位与声部角色等颗粒度。三是 MIDI-Caps 类做法将 MIDI 渲染为音频再提取音色与流派特征，该文指出合成器与音色库选择引入非确定性方差，使模型被原作曲不存在的伪影误导，同时符号数据本身缺少隐式音色线索，语义鸿沟未解。

**核心思路与方法架构：** 与最接近的渲染转音频基线相比，MIDI-PHOR 保留 MIDI 符号真值并删除音频渲染环节，新增以小节对齐的关系型 DuckDB 后端组织三视图，并将冻结的大语言模型限定为基于检索事实的摘录式主张选择器，从而把语言生成与音乐真值校验分离。沿一条 82 BPM、4/4 拍、E 大调的曲目看，解析先由 miditoolkit 与 pretty_midi 按 MIDI 时间签名图建立小节骨架并落入标准化音轨与音符表，再由 music21 理论引擎做和弦化与罗马数字标记，全局调存入 key_changes 而 4 小节滑窗的 Krumhansl-Schmuckler 跟踪存入 key_regions 以兼容转调。离散事件再投影为 ts_bar 中的小节级连续代理信号，包括条块色度分布、相邻色度距离的新颖度、余弦相似度的重复度、16 分音符网格上的起始熵、切分与反拍代理及属到主在强拍解决的终止强度。正文 3.4 称蒸馏为三类制品，附录 A.1 列为 ScoreSpec、ScoreSpec-Lite、增强事实与分层事实四级，原文如此并存，未解释对应关系。配器图以音轨与乐段为节点，每条边均存小节级证据跨度，在 K = 10 的主张预算下只允许输出带证据指针的主张。整个链路无新语言模型训练，提取器为确定性启发式，语言模型冻结调用，未声明流式或实时约束。

**关键实验与核心代价：** 在 Clean Lakh MIDI 数据集随机抽取的 100 首中取 97 首做 Claim-Evidence 验证时，MIDI-PHOR 验证通过率为 0.804，高于 Render+Audio 基线的 0.486，幻觉率为 0.186，低于该基线的 0.538，而 Symbolic-Only 基线居中为验证通过率 0.701 与幻觉率 0.317，结论另以百分比复述为 18.6% 对 53.8%。在固定 K = 10 预算下该方法证据覆盖率为 0.990，主张覆盖率为 0.718，附录以同一口径解释后者低于 1.0 系简洁性取舍而非遗漏。不变性检验在 100 首曲目上以 Jaccard ≥ 0.9 为通过线，移调正负 12 半音、速度乘 0.8 到 1.25、力度乘 0.5 到 1.5 三组扰动通过率均为 0.929。提示敏感性在 30 首子集上三提示槽位集合 Jaccard 相似度为 0.769，同槽取值一致率为 0.843，证据指针一致率为 1.000。计算侧正文报告端到端 2.36 s/min，低于基线的 3.53 s/min，附录另报告均值 2.40 s/min 与总量 2.402 s/min，原文如此报告，存在字面算术出入，其中合成占基线约 2.72 s/min。代价是评估无人类听测与感知金标准，仅以数据库自洽与不变性代理稳健性，未证明听感有效性。

**适用边界与深读导览：** 结论成立依赖 Lakh MIDI 流行与摇滚曲库中相对规整的量化、完整鼓组与 4/4 反拍假设，以及罗马数字与调性网格对西方调性音乐的适用性，作者承认爵士、古典与非西方传统需重调阈值，缺失打击乐、极端量化或事件损坏会直接劣化特征与字幕，且标准 MIDI 无人声与歌词，只能编码人声旋律线而无法恢复语义。深读可对照正文第 3 节三视图构建与第 4 节三维评估，附录 A 查四级产物定义与审计指标口径，附录 B 查基线实现与耗时分项，附录 C 查阈值逻辑与特征清单，图 2 与表 7 有具体曲例的配器热图与生成字幕对照。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只听音频嵌入为何讲不清音符与配器

音乐理解要求系统不仅给乐曲贴标签，还要讲清结构关系并用语言描述出来，输入可以是音频或符号乐谱，输出是人类可读的标题语句，理想的语句应能指回具体小节、音高、和声进行或乐器分工，缺少这种指回，流畅的描述也难以用于教学核查与档案整理，对刚入门的研究者而言，先分清标签正确与证据可查是关键。

音频语言模型已形成生成与检索两条路线，生成侧以 MusicLM 与 MusicGen 为代表，学习音频文本对应以合成新音乐，检索侧以 CLAP 与 MuLan 为代表，将音频与文本映射到共享空间以支持零样本查询，为缓解数据稀缺，LP-MusicCaps 与 MusicLingo 用语言模型批量生成伪标题，但底层仍依赖主观的音频分析，和声标注中专家一致率仅约 54%，全局情绪尚可，倒位和弦与声部角色等细节往往丢失。

符号乐谱把音乐记为离散事件，包含音高、节奏、配器与控制变化，天然支持细粒度分析，早期 MusicBERT 以掩码建模学习结构，Moonbeam 改进了领域切分，但多面向分类或生成而非可解释性，最接近的 MIDI-Caps 构建了大规模符号标题数据，却把 MIDI 渲染成音频再提取音色与流派特征，不同合成器与混响设置会引入原作曲中不存在的伪影，让模型混淆配器真相与合成痕迹。

本文要解决的矛盾是，如何在不渲染音频的前提下补足质感与结构线索，并把语言生成与真实性核验分开，MIDI-PHOR 把 MIDI 视为结构化知识对象，蒸馏出符号、时序与配器图三重视角，统一存入按小节对齐的关系库，语言模型只做声明选择，从库中挑选有证据支撑的表述，视图、事实、声明与证据指针的 4 级定义让每一句标题都能回查到库表。

### 把乐谱蒸馏为可查询知识库的整体流程

整体流程从两路输入出发，左侧 MIDI 为主路，可选音频为辅路，两路汇入中央 DuckDB 关系库，库内同时维护符号、时序与图结构，库后分出两条蒸馏路径，一条经 ScoreSpec 构造器生成完整版与精简版，再分别形成事实与摘要，两路连同直接标题一起汇入生成模块，这种设计让高层描述始终能回查到底层小节与声部。

[![原论文 Figure 1：Pipeline from MIDI/audio to ScoreSpec, facts, and generation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/fcc77c7ae102/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/fcc77c7ae102/figure-1.png)

*论文图 1：两侧输入汇入中央关系库再经精简与事实组织进入生成模块的整体流程（原论文 Figure 1）。*

像素中的方框与箭头与上述走向一致，左侧 MIDI 与 Audio（optional）两个方框分别以弧线箭头指向中央 DuckDB 方框，中央框内标注 symbolic · graph · time-series，中央框上方长箭头直指 Captions，下方短箭头指向 ScoreSpec builder，构造器再分叉到 ScoreSpec 与 ScoreSpec-Lite，分别经 Facts 与 Summary 汇入右侧 Generation，Captions 也以弧线汇入该框，全图为深色描边白底，箭头方向清晰无交叉歧义。

与最近的 MIDI-Caps 式做法相比，改动在于保留符号解析而替换音频渲染，符号侧沿用稳健的事件解析与乐理引擎，质感与结构线索改由符号时序投影与配器图直接派生，避免音色库依赖，原文未披露采样率、帧长、码率或通道维度，教学例子可设想一首 4/4 拍曲目按小节推进，复音在 tick 网格内计算，密度按每小节触键活动归一化，全程不经过波形处理，因此不存在传统频谱帧率变化。

为实现可约束生成，原文定义视图为 3 种分析视角之一，事实为按小节索引的库表原子条目，声明为模型输出的自然语言判断，证据指针为指回库表的元数据链接，库表再蒸馏为 ScoreSpec、ScoreSpec-Lite、增强事实与分层事实四档，模型以抽取式摘要方式工作，只在检索到的事实范围内组织语言，声明数量上限 K = 10 既控制开销又防止靠罗列槽位刷覆盖率。

### 三重视角如何从小节线抽出和声律动与乐队关系

#### 符号解析与调性分层

符号视角先用 miditoolkit 与 pretty_midi 解析事件并规整音轨与音符表，再依据拍号图建立小节主干，和声分析调用 music21 的乐理引擎做和弦化并标注罗马数字，调性处理分离全局与局部，全局调存入 key_changes 作为罗马数字基准，局部调以四小节滑动窗口用 Krumhansl-Schmuckler 算法存入 key_regions，复音在小节内 tick 网格计算以免疫速度缩放，密度按每小节触键活动归一化。

时序与配器视角的输出可用编配总览直观理解，下图以一首 4/4 拍、82 BPM、E 大调曲目为例，上方为合并后的段落时间线，下方为段落与声部活跃度热图，它完全由音符与合并边界派生，是完整交互图的易读伴随视图，沿着小节轴观察声部进入与持续方式，有助于建立分段与角色活动的整体印象。

[![原论文 Figure 2：Arrangement view for Aba Heidschi Bumbeidschi.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/fcc77c7ae102/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nlp4musa-2026/fcc77c7ae102/figure-2.png)

*论文图 2：以 82 BPM 与 E 大调为例的段落时间线与声部活跃度热图（原论文 Figure 2）。*

像素顶部标题给出 meter 4/4、82 BPM 与 key E:maj，横轴为 Bar 从 1 至 74，灰色长条被切为 4 段并均标注 other，下方热图纵轴为 drums、bass、harmony、melody、fx 与 other，横轴为 S1:other 1-32、S2:other 33-48、S3:other 49-56 与 S4:other 57-74，格内数值显示鼓组首段仅 0.22 而后 3 段达 1.00、1.00 与 0.94，贝斯 4 段为 0.88、0.94、0.88 与 0.89，和声为 0.97、1.00、1.00 与 0.94，旋律等行接近空白，右侧色标为段内活跃小节占比从 0.0 至 1.0。

#### 时序信号与配器关系

时序投影把离散事件变为小节级连续信号并存入 ts_bar，音高类别分布构成小节 chroma，相邻 chroma 距离给出 novelty_bar，chroma 余弦相似给出 repeat_score_bar 与 recurrence_density_bar，节奏显著性在 16 分音符网格上计算起始熵 onset_entropy_16th，并派生切分与反拍代理，符号通量结合速度方差与 chroma 变化， groove 熵以香农熵衡量节奏复杂度，属解决 V 到 I 在强拍的启发式峰值与新颖峰共同支撑边界发现。

配器图把音轨与段落作为节点，把声部互动作为边并附小节证据，节奏锁定要求贝斯与鼓在四小节窗内起始位置交并比大于 0.6，呼应模式看两条旋律包络的滚动相关系数小于负 0.5，支撑边要求铺底声部持续时长覆盖旋律活动时间的 80% 以上，加倍边要求音高与起始一致度高于 90%，每条边存有 edge_evidence 小节区间，例如铺底支撑主旋律的判断可直接回查到具体小节范围。

### 从关系表到提示词的蒸馏与证据约束

DuckDB 中的关系表需再蒸馏为语言模型友好的形态，原文给出 3 种互补形式，一是融合段落、活跃角色与显著信号的分段感知支架，二是可直接注入提示词的扁平增强事实列表，三是按和声、节奏、配器、动机组织成分层事实索引，三者经统一 SCORESPEC JSON 接口序列化，保证生成只以可审计事实为条件而非依赖模型先验。

四档产物分工不同，ScoreSpec 编码细粒度数据，含分段、乐器元数据、音级跨度、动机出现与完整结构图，ScoreSpec-Lite 只保留段落级摘要，含速度、小节范围、密度、活跃乐器与和声概要以降低开销，增强事实是人类可读的要点条目便于直接注入，分层事实按结构、和声、节奏、配器、动机与曲式重组以支持主题查询与精确检索。

生成时模型输出 JSON 声明列表，每条含取值与证据指针如小节区间，库表负责核验取值是否与事实一致，这种把标题重写为有证据支撑的抽取式摘要的做法，让措辞变化难以凭空捏造新事实，声明预算固定为 K = 10，覆盖率反映在有限槽位内的利用效率而非穷举库表，简洁性与可比性由此得到保证。

与依赖重型音频库的对照做法不同，本框架把音频渲染视为可选，保留需要时的多模态融合入口但不强制其工具链开销，一次提取的关系表可重复用于检索、问答与分析而无需重算源文件，对照做法的预处理多为一次性可丢弃特征，两者在复用性上的差异直接影响长期维护成本。

层级界定让追溯有落点，视角对应 3 种解析角度之一，事实是按小节编号存入关系库的原子条目，声明是模型给出的自然语言描述，证据指针把每条声明锚定到库内事实，3 类提取器输出先按小节对齐再统一落库，生成只在已检索事实范围内组织措辞，检索槽位保持稳定而取值随措辞变化的余地被压缩，审计时即可逐条核对取值与库内真值是否一致，这种以库表为依据的组织方式把标题生成转为有约束的抽取式概括，简洁性与可核查性同时得到支撑。

### 事实性检验中验证通过率与幻觉率的变化

评测围绕可靠性、事实性与效率三维展开，样本取自 Clean Lakh MIDI 数据集的随机 100 首，不变性检验用 N = 100，事实性检验报告 N = 97，缺失 3 首的原因原文未解释，提示词敏感性另取 30 首子集，对照组为原始符号直接提示与渲染加音频标签两条路线，指标方向以覆盖率与通过率越高越好、幻觉率越低越好为准，全程固定声明预算且无人工听测参与，先看结构边界在变换下的稳定性。

| Transformation | Pass | Expected Behavior |
| --- | --- | --- |
| Transpose (±12 semi) | 0.929 | Harmonic content rotates. |
| Tempo (×0.8–1.25) | 0.929 | Tick-based features re- |
| Velocity (×0.5–1.5) | 0.929 | Dynamics shift pre- |

精简子表保留表头与三行变换，移调正负 12 半音、速度乘 0.8 至 1.25、力度乘 0.5 至 1.5 的通过率均为 0.929，判定标准为扰动前后边界集合 Jaccard 相似度不低于 0.9，三者持平而非一方更高，说明基于 tick 的特征对速度缩放不敏感，原文以此对比音频特征易随合成伪影漂移的现象，但稳定不等于感知有效，金标准缺失仍是前提，下一组事实性数字需在固定预算下理解。

| Method | Claim | Evid. | Verify | Halluc. |
| --- | --- | --- | --- | --- |
|  | Cov. ↑ | Cov. ↑ | Pass ↑ | Rate ↓ |
| MIDI-PHOR (Ours) | 0.718 | 0.990 | 0.804 | 0.186 |
| Symbolic-Only | 1.000 | 0.974 | 0.701 | 0.317 |
| Render+Audio | 1.000 | 0.954 | 0.486 | 0.538 |

完整原表显示四列方向各异，MIDI-PHOR 在证据覆盖率 0.990、验证通过率 0.804 与幻觉率 0.186 三列上优于符号直接提示的 0.974、0.701、0.317 与渲染加音频的 0.954、0.486、0.538，验证通过最高且幻觉最低的判断在展示范围内逐格成立，但在声明覆盖率一列 MIDI-PHOR 的 0.718 低于两条对照路线均为 1.000，这是未胜出项，反映其在有限槽位内重精度而非重数量，附录审计指标与提示词稳定性留待开销一节合并讨论。

公平性上 3 组共享同一声明预算与核验库，对照渲染流程复刻 MIDI-Caps 式混合路线，包含合成、元解析、情绪流派标签与和弦提取，参数量与训练规模原文未披露，方差与置信区间未报告，听测规模缺失意味着结论仅限机器核验层面，渲染对照的幻觉主要来自描述超出本次合成实际支撑的细节，符号直接提示则因缺乏结构约束而次之。

### 提示词稳定性与计算开销的拆解诊断

稳定性与开销诊断共用同一批样本逻辑，提示词敏感性在 30 首上用 3 种措辞重复生成，槽位集合重叠以 Jaccard 衡量，取值与证据指针一致性另计，计算开销以每分钟音乐秒数报告均值、中位与 95 分位并区分磁盘占用，下表精简出行列以突出合成瓶颈与端到端总计的对比，原文完整 Table 5（本精简表未列出）中的中间分项不再参与极值判断。

| Stage | Runtime (s/min) Mean | Runtime (s/min) P50 | Notes |
| --- | --- | --- | --- |
| symbolic.run | 2.241 | 2.075 | Parsing + bar grid + symbolic features |
| Total | 2.402 | 2.218 | End-to-end (no audio rendering) |
| Audio Render | 2.716 | 2.645 | Synthesis dominates runtime |
| Total | 3.529 | 3.485 | Audio-driven pipeline |

精简表显示符号主阶段均值 2.241 秒，中位 2.075 秒，端到端总计均值 2.402 秒，中位 2.218 秒，95 分位 4.059 秒，对照音频渲染单步均值 2.716 秒，总计均值 3.529 秒，中位 3.485 秒，95 分位 4.351 秒，符号流程磁盘占用为低而音频流程为高，合成约占对照总耗时的四分之三，附录另给出 2.40 秒的表述而正文另有 2.36 秒的表述，原文如此报告，存在字面算术出入，原文未解释，分项求和与总计约差 0.08 秒亦应视为未单列开销。

提示词层面槽位集合稳定性为 0.769，槽位被选中时取值一致率为 0.843，证据指针一致率达 1.000，说明换措辞会改变选题但不改变证据指向，摊销视角下符号表一次计算可复用于检索与问答，而对照预处理多为一次性特征，未评测范围包括人声歌词、复杂转调感知有效性与爵士古典阈值迁移，缺失的诊断是各阈值与各视图单独贡献的剥离。

### 没有金标准与人声时的适用边界与复现核对

首要边界是结构现象缺少大规模人工金标准，段落边界、掉点位置与呼应段落无法算精度与召回，只能以不变性与库内一致性代替，不变性通过仅说明检测器不受移调变速干扰，不能证明人类听感上的有效性，事实性核验依赖自建库表，若提取本身有偏，验证通过也会继承该偏置。

标准 MIDI 只记录器乐演奏而无演唱音色与歌词主题，声乐旋律虽可记为音符但语义语境无法恢复，需要符号与音频文本融合才能补足，符号语料以西方流行结构为主，罗马数字与 4/4 反拍等特征对非西方与先锋音乐可能误表，情感标签如悲伤或凯旋更不宜当作客观事实，复杂度与协和度的定义本身带有文化特定性。

多条图边依赖阈值启发式，节奏锁定、呼应负相关、铺底覆盖与加倍一致度的具体门限按流行摇滚调参，换到爵士或古典需重调，输入质量直接决定上限，缺打击乐、过度量化或事件错乱都会劣化特征与标题，伦理上应把输出定位为基于文件内容的证据描述而非权威乐理判断，部署前需在目标风格上重验阈值。

复现核对以前提区分三件事，代码是否开源、权重是否提供下载与系统是否可直接运行，本文未发现经验证的公开链接，应按无公开系统处理，评测基于 Clean Lakh MIDI 随机样本与标准 CPU 计时，超参与硬件细节原文未披露，工程选型上若需可审计与低依赖且符号质量可靠可优先符号流程，若需音色流派或人声主题则需外接音频融合并承担合成方差与工具链成本。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率与帧长步长码率，全程为纯符号流程，以小节为索引，复音在 tick 网格计算，节奏在 16 分音符网格统计，开销以每分钟音乐秒数计
- **训练与评测数据**：评测采用 Clean Lakh MIDI 数据集随机抽取的 100 首，不变性检验 N 为 100，事实性检验 N 为 97，提示词敏感性子集为 30 首，语种划分与训练过程原文未披露
- **算力与训练耗时**：标准 CPU 环境，具体型号与内存原文未披露，耗时以每分钟音乐秒数报告均值中位与分位，磁盘占用分高低两档记录
- **核心超参数与配置**：生成声明上限 K 为 10，局部调性采用四小节滑动窗口，不变性判定阈值为 Jaccard 不低于 0.9，配器图含交并比大于 0.6 与相关系数小于负 0.5 等阈值
- **推理速度与部署开销**：符号流程端到端均值 2.402 秒每分钟，中位 2.218 秒，对照音频流程总计均值 3.529 秒，其中合成单步均值 2.716 秒，符号侧磁盘占用低而音频侧为高
- **开源产物与协议状态**：本次核查未发现经验证的公开代码权重数据或可运行系统链接，原文未给出直接运行说明，复现需依据附录特征定义与提示词描述自行实现
- **附录与补充材料要点**：附录给出四档产物的定义，审计指标与提示词敏感性分析，基线结构与摊销视角，不变性度量解释，三视图特征表与定性对照示例

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.9/10 | 技术严谨 6.4/10 | 实验充分 6.1/10 | 清晰度 5.4/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 5.6/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:nlp4musa:2026:conference-paper-id:2026.nlp4musa-1.6`
- 会议来源：[官方记录](https://aclanthology.org/2026.nlp4musa-1.6/) · [官方 PDF](https://aclanthology.org/2026.nlp4musa-1.6.pdf)
- DOI：`10.18653/v1/2026.nlp4musa-1.6`
- Track：NLP4MusA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：97首固定K=10预算下验证通过率0.804、幻觉率0.186，均优于符号提示与渲染转音频两条基线。

- 核心优势：小节对齐DuckDB三视图组织符号真值、时序代理与配器图，并以证据指针将冻结LLM约束为摘录式主张选择器。

- 主要短板：表3行列数值错位需靠正文与附录交叉还原，耗时2.36对2.40对2.402存在字面出入，三组不变性同为0.929未解释。

- 主要短板：缺大规模人类标注金标准与人类听测，仅以数据库自洽与不变性代理稳健性代替精度召回，未证明感知有效性。

- 主要短板：图边阈值按Lakh流行摇滚调优，缺打击乐或极端量化会劣化输出，仅适用于西方调性4/4假设需重调适配他类风格。

---

[← 返回 nlp4musa-2026 论文汇总](/audio-research-portal/posts/conference-nlp4musa-2026/)
