---
title: "MusicListenBench: Can Audio LLMs Hear the Difference Yet?"
date: 2026-11-24
draft: false
tags: [音乐分析, 基准设计, 可验证奖励强化学习, 基准测试]
categories: [论文速递]
description: "论文用翻转与保持配对把察觉音乐变化与忽略声音变化分开检验，发现 GRPO 把 Qwen2.5-Omni 的干净准确率推到 99.0% 却只到翻转保持 86.0% ，接近人类 87.0% ，代价是嘶声与移调误翻长期居高不下。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.29375"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "MusicListenBench 是否真能听出差别"
paper_digest_original_title: "MusicListenBench: Can Audio LLMs Hear the Difference Yet?"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.29375v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.29375v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.29375v1.pdf"
paper_digest_primary_task: "音乐分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用翻转与保持配对把察觉音乐变化与忽略声音变化分开检验，发现 GRPO 把 Qwen2.5-Omni 的干净准确率推到 99.0% 却只到翻转保持 86.0% ，接近人类 87.0% ，代价是嘶声与移调误翻长期居高不下。"
paper_digest_reader_sections: [{"heading":"听辨是否相同才是音乐理解的地基：已有评测为何测不出差距","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四任务与三形态条目：渲染与真实录音的双测试集如何组织","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"翻转与保持如何分离两种失败：漏检与误翻的统计口径","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"只用干净配对做 GRPO：奖励、冻结边界与字母读法","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"未训练模型几乎全在机遇线：干净与翻转保持的主结果","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"学会察觉远快于学会忽略：嘶声、移调与跨任务迁移的代价","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论与工程选型：何时值得用、复现第一步与未验证边界","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Singapore University of Technology and Design"],"name":"Abhinaba Roy"},{"affiliations":["University of Venice"],"name":"Ambuj Mehrish"},{"affiliations":["Singapore University of Technology and Design"],"name":"Dorien Herremans"}]
paper_digest_abstract_sha256: "2352cdb7a537ffe7696b1c9bec427881a79233800efc1a63eb287962a5f92996"
paper_digest_sidecars: {"citation.bib":{"sha256":"3acd8f320826c848062314d757eaa01e7d170ea58349752e8346aaf67273c82c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29375/citation.bib"},"citation.json":{"sha256":"c7f4da12ca94e9e6225d896187eb0fd28e14a4c1f5db99654f925ec53992f55d","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29375/citation.json"},"citation.ris":{"sha256":"5f8fb8bdd8db061ff402ef563f258696b3e96bc4e53492b1be54f453060e6c4b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29375/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f334d38bc1aae98823b243da77b29b37703a9808c2fc2ac25a3537730b635679","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-29375/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "e7382b8877a4cbfb3e119e3da03935d6573fa81a88a62ac224049c5326a0b837"
paper_digest_api_reader_plan_sha256: "2f1dbc18a57266e9b65d9c0b9dbb474160e6680f148a840bc3e24721fea34b53"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c452bc59e68f81f54133fe35be32d192044a89fb84ae9f139db83418226ea6e4"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6608ea03595deea60635c86ed123d27679c333c7b757994372ac8126b70cf07e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9ddd9e8098990da8f8a018d6194142946daada8e9dfa1852f7750c8e1510fe7c"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0a7ac65c50dbe694a08009cf891c8b548edd6bfc5b759d733114048a3bd5cb75"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 MusicListenBench 是否真能听出差别

> 英文题目：*[MusicListenBench: Can Audio LLMs Hear the Difference Yet?](https://arxiv.org/abs/2611.29375v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-paper-digest-blog/papers/?concept=method.verifiable-reward-rl)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.3/10** | 创新 8.2/10 | 技术严谨 7.3/10 | 实验充分 8.5/10 | 清晰度 6.9/10 | 影响力 7.0/10 | 开源 8.0/10 | 可复现 8.2/10 | 工程/实践 7.4/10


## 👥 作者与机构

- Abhinaba Roy：Singapore University of Technology and Design
- Ambuj Mehrish：University of Venice
- Dorien Herremans：Singapore University of Technology and Design

## 📌 核心摘要

**问题与瓶颈：** 输入是一段拼接音频与一道文字问题，音频将片段 A、1.0 s 静音与片段 B 连成一个文件，问题询问两段是否演奏相同旋律、相同和弦性质、相同乐器或哪段速度更快，模型只输出字母 A 或 B。该两两比较属于听觉相同与不同判断，论文报告 12 位听众达到 87.0% 的翻转保持准确率。现有音频大语言模型擅长描述流派与情绪，却在该基础听辨上接近 50% 机会水平，干净相同对可凭整体听感相似作答而无须理解音乐内容。仅报告干净准确率会高估能力，字母偏好与文本先验也会混入分数，而现有基准只做零样本评测，瓶颈在于缺少同时检验注意到该变的变化与忽略不该变的变化的对照设计及可训练划分。

**核心思路与方法架构：** 增量在于每个条目配对生成答案相反的翻转与保持变体，并提供 10,000 条目训练划分与条件隔离的测试划分。以 2.5 s 旋律为例，符号音乐经 music21 写成 4 音动机，以 44.1 kHz 渲染为单声道波形并归一到 -23 LUFS，再与 1.0 s 静音拼接成 6.0 s 文件，问题从 8 至 10 种措辞抽取并比较字母 A 与 B 的对数概率。翻转变体替换片段 B 以改变被测属性并使答案翻转，保持变体只施加房间混响、温和 EQ、-50 dBFS 嘶声或 200 音分以内整体移调而答案不变，两者答案相反使忽略音频者只能得 50%。渲染测试使用训练未见音高区、MuseScore_General 音色库与测试专用效果，另有 600 个干净条目与 1,200 个配对条目构成的真实录音集，编码器冻结只更新语言模型侧，从而让整体相似捷径失效并单独暴露相对音高与抗噪能力。

**关键实验与核心代价：** 在渲染测试上，8 个开放模型中有 7 个翻转保持准确率落在 50% 上下 4 个百分点内，两个 GPT-Audio 模型同样在机会水平，最好的未训练模型 Gemini 2.5 Pro 干净准确率 79.2% 与翻转保持准确率 74.2%，仍低于人类听众 12.8 个百分点。用 10,000 个干净渲染对做群组相对策略优化后，Qwen2.5-Omni 在留出干净对上从 61.2% 升至 99.0%，未参与训练的和声任务从 59.2% 升至 96.4%。同一模型翻转保持只达 86.0%，漏检率从 36.7% 降至 1.9%，误翻率仅从 41.0% 降至 26.1%，其中音色与节奏上 94 次误翻有 85 次来自嘶声，分效果看 EQ 误翻从 33.7% 降至 1.4%，而嘶声与移调几乎不动，冻结编码器上嘶声引起距离为真实音乐变化的 2.75 倍，EQ 仅为 0.04 倍。真实录音上开放模型仍在 48.3% 至 55.5% 之间，训练后该模型从 52.1% 升至 62.8%，加入纯声音变化对后升至 70.1%，代价是学会发现变化远快于学会忽略变化，加入声音对可将渲染嘶声误翻降至 37.7% 并将翻转保持推至 88.2%，但干净准确率回落 3.4 个百分点且移调仍无改善。

**适用边界与深读导览：** 结论成立前提是单乐器或单鼓组干声、短动机与受控声学变化，完整混音、细微音色对如小提琴与中提琴、12 音与 24 音长旋律、真实演唱与强噪声尚未覆盖。相对音高仍是难题，所有配置在移调对上错误率约 40% 至 50%，嘶声在 -80 dBFS 已开始恶化，模型倾向把任意录音差异判为音乐变化。若想深究配对计分与条件误翻定义可看方法章节公式与划分，若想理解编码器距离、嘶声扫描与探测器对照可看训练分析与附录，复现细节可看生成参数与群组相对策略优化设置及开源脚本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/AMAAI-Lab/MusicListenBench> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/datasets/amaai-lab/MusicListenBench> — 链接可访问（HTTP 200）

- 论文所列链接：<https://amaai-lab.github.io/MusicListenBench/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/CarlGao4/Muse-Sounds> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 听辨是否相同才是音乐理解的地基：已有评测为何测不出差距

音频大语言模型已能描述歌曲的流派、情绪与乐器，但这类描述依赖更基础的听辨能力。两段短音频是否演奏同一旋律、同一和弦性质、同一乐器，谁更快，这些是否相同判断是听觉研究的标准工具，也是人类音乐能力测试的核心。论文报告 12 名听众总体原始答对率为 87.5% ，其中翻转保持准确率为 87.0% ，若模型连短动机是否相同都答不对，其对整曲的描述依据便存疑。

近期基准发现音频大语言模型在移调辨别等基础感知上接近机遇水平，但存在两个统计缺口。其一，是否相同分数把两种能力混在一起，发现应变的变化与忽略不应变的变化。其二，文本先验与选项字母偏好会抬高分数，总是答 A 也能在干净配对上拿到 52.8% 。已有工作只评测现成模型，无法回答训练能否修复听辨。

MusicListenBench 用配对听力测试直面这两个缺口。每个测试条目配一个翻转版本与一个保持版本，两者答案相反，忽略音频的模型只能得 50% 。渲染测试集用符号音乐生成，答案精确已知，并设置训练未见的音高区间、音色库与声音效果。另有 10,000 条训练集与真实录音第二测试集，使训练干预与跨录音泛化可被直接检验。

### 四任务与三形态条目：渲染与真实录音的双测试集如何组织

基准围绕 4 个任务组织，每个任务查询的属性、变化方式与片段时长均不同。训练与干净测试各有固定配额，难度等级在测试中均匀分布。下表列出任务定义，是后文所有准确率与错误率的比较基础。旋律与和声考相对音高，音色考乐器族，节奏考快慢，覆盖是否相同与快慢两种问法。

| Task | Question | Difference | Levels | Clip |
| --- | --- | --- | --- | --- |
| Melody | Same melody? | one note of a four-note motif moves | 100, 200, 400, 700 cents | 2.5 s |
| Harmony | Same chord quality? | the third of the chord moves | 100, 200, 300 cents | 2.0 s |
| Timbre | Same instrument? | instrument family (piano, guitar, violin, flute) | one (categorical) | 2.5 s |
| Rhythm | Which clip is faster? | click rate of a hi-hat track | rate ratio 1.10, 1.20, 1.35, 1.50 | 4.0 s |

四任务的片段时长分别为 2.5 s 、 2.0 s 、 2.5 s 与 4.0 s ，每个任务训练 2,500 条、干净测试 250 条。旋律移动一个音，和声移动三音中的三度，音色更换乐器族，节奏改变镲片点击率。难度按移动音分与速率比划分，测试条目在各难度上均匀铺开，避免单一难度主导结论。

下图把生成、配对、训练与评测 4 步放在一张版式中，先看左上符号经 FluidSynth 到波形的渲染分支，再看右上同一文件 3 种形态的答案变化，最后看左下训练与右下评测的隔离条件。这是判断泛化是否成立的关键，请按左上到右下的顺序阅读。

[![原论文 Figure 1：MusicListenBench overview.](https://arxiv.org/html/2611.29375v1/fig1_v2.png)](https://arxiv.org/html/2611.29375v1/fig1_v2.png)

*论文图 1：符号音乐渲染、三形态配对、GRPO 训练与留出评测的总体流程（原论文 Figure 1）。*

左上用 music21 生成符号谱，经 FluidSynth 渲染为波形，保证标签精确、等长与 -23 LUFS 等响。右上把片段 A 、 1.0 s 静音与片段 B 拼为一个文件，基础版答 A ，翻转版改查询属性后答案切换为 B ，保持版只加混响、均衡、嘶声或移调后答案仍为 A 。左下用 10,000 条干净配对做 GRPO ，右下在未见音高、 MuseScore 音色库与测试专用效果上评测 8 个开源、 4 个商用模型与人类听众。渲染音频为 44.1 kHz 单声道 16 位 PCM ，全文件按任务分别为 6.0 s 、 5.0 s 与 9.0 s 。

### 翻转与保持如何分离两种失败：漏检与误翻的统计口径

每个干净测试条目派生两个版本。翻转版替换片段 B 并改变查询属性，旋律移一音、和声移三度、音色换乐器族、节奏交换两片段位置，正确答案切换。保持版替换片段 B 但只改变声音，混响 0.2 s 、 0.5 s 或 1.0 s 、 ±3 dB 搁架均衡、 -50 dBFS 嘶声，旋律与和声另加 200 音分内移调，正确答案不变。漏检率是翻转版答错占比，误翻率是保持版答错占比，两者平均得翻转保持准确率。

三项是否相同任务中 A 恒指相同，两版本字母相反，忽略音频必得 50% 。节奏任务每版本独立抽取快慢问法， 250 条中有 131 条两版本同字母，恒答 A 得 47.8% ，三任务平均后恒答 A 在 2,000 条上得 49.45% ，在干净集上得 52.8% 。干净相同对的两片段波形完全一致，模型比波形相似即可得分，保持版让相同对在声音上也不同，堵住只比相似度的捷径。测试字母固定，训练约半数条目交换字母含义，使字母无法预测答案。

以一条旋律测试为例，片段 A 为 2.5 s 四音动机，片段 B 为同长编辑或加效果版本，中间 1.0 s 静音，全文件 6.0 s 。每片段先归一到 -23 LUFS 再拼接，保证时长相同而响度一致。评测时同一文件配一条 8 到 10 种问法之一加固定指令，模型在首个答案位置比较 A 与 B 的对数几率或直接生成字母。开源模型多以 16 kHz 输入， MiMo-Audio 为 24 kHz ，编码器内部帧率、特征维度与下采样路径原文未披露，此处不补造。

渲染训练与测试在三处隔离。旋律与音色起始音训练为 MIDI 60 到 72 ，测试为 55 到 59 ，和声根音训练为 48 到 60 ，测试为 62 到 67 。训练用 FluidR3_GM 与 GeneralUser GS ，测试用 MuseScore_General 。混响、均衡与嘶声只出现在测试，主训练只用干净配对。真实录音集同样按四任务、等长、等响与同问法构建，旋律与和声经 Rubber Band 移调，和声只移三度弦，音色两片段必出来自不同录音，节奏经时间拉伸，用于检验渲染结论是否成立。

#### 四任务分工与难度梯度

四任务各有 2,500 条训练与 250 条干净测试。旋律问是否相同旋律，不同指四音动机中一音移动，幅度为 100、200、400、700 音分，片段长 2.5 s 。和声问是否相同和弦性质，不同指三音移动，幅度为 100、200、300 音分，片段长 2.0 s 。音色问是否相同乐器，不同指乐器族变化，钢琴、吉他、小提琴、长笛四选一，片段长 2.5 s 。节奏问哪段更快，不同指踩镲点击率之比为 1.10、1.20、1.35、1.50 ，片段长 4.0 s 。

旋律、和声与节奏设多档难度，测试条目在各档均匀分布。旋律按移动音分分档，和声按三音移动分档，节奏按速率比分档，音色为单类判别。和声大调三音下移、小调三音上移，100 音分移动即实现大小调互转，且移动后三音与根音、五音保持至少 50 音分距离，避免产生含糊音高。

#### 精确标签生成与时长响度控制

每条目先用 music21 写成符号谱，再经 FluidSynth 与通用 MIDI 音色库渲染。从每条生成谱渲染一组文件：基础对、改变答案的一个编辑片段 B 、只改变声音的两个或 3 个片段 B 。因音频由生成得到，每题答案精确已知，无需人工标注。同一任务所有片段时长完全相同，节奏更快只表现为点击更多而非文件更短，所有片段响度均为 -23 LUFS 。

每次编解码后核对采样点数与任务片段长一致。测试文件为片段 A 、 1.0 s 静音、片段 B 拼接，旋律与音色全长 6.0 s ，和声全长 5.0 s ，节奏全长 9.0 s ，同一任务采样点数相同。每片段归一到 -23 LUFS 后存为 44.1 kHz 单声道 16 位 PCM WAV ，保证时长相同而响度一致，排除响度与时长捷径。

#### 翻转保持组合与问法字母规则

每条干净测试派生一条翻转与一条保持，共 1,000 条翻转与 1,000 条保持。保持沿用原片段 A ，片段 B 取自声音变化版本；旋律、和声与音色只改片段 B ，且编辑渲染的片段 A 与原片段 A 字节一致；节奏通过交换两片段实现翻转。每条翻转答案均与基条相反，三项是否相同任务字母亦相反。声音变化在条目间轮换：均衡 294 条、嘶声 292 条、混响 290 条、移调 124 条，其中移调只用于旋律与和声。

分任务看，旋律与和声各为翻转 250 条、均衡 63 条、嘶声 63 条、混响 62 条、移调 62 条；音色与节奏各为翻转 250 条、均衡 84 条、嘶声 83 条、混响 83 条、无移调。每任务翻转保持合计 500 条，四任务合计 2,000 条。均衡为 200 Hz 与 4 kHz 处 ±3 dB 搁架滤波，混响用 pyroomacoustics 仿真，嘶声为 -50 dBFS 加性噪声。

每任务有 8 到 10 种手写问法，节奏有 10 种，分别问更快与更慢，正确答案随问法确定。每问末尾附固定指令，说明字母含义，测试字母固定为 A 表相同或第一段。每条测试文件以固定种子抽取一种问法，基条、翻转与保持版本通常问法不同。训练约半数条目交换字母含义，使字母无法预测答案，测试 1,000 条中 528 条答案为 A 。

#### 隔离条件与真实录音复刻

渲染训练与测试在三处隔离。起始音与根音不重叠，混响、均衡与嘶声只出现在测试，主训练只用干净配对；训练音频用 FluidR3_GM 或 GeneralUser GS 渲染，测试全部用 MuseScore_General 。同一生成条目的文件不跨划分存放。另设留一任务测试，在 3 个任务 7,500 条上训练，测试第四任务 250 条干净条目，检验是否学到通用相同判断。

真实录音集同样按四任务、等长、等响与同问法构建，共 600 条干净与 1,200 条翻转保持，从不用于训练。旋律与和声用 GuitarSet 吉他录音经 Rubber Band 移调，和声只移三度弦，相同对亦经过零音分移调使处理一致；音色用 Medley-solos-DB 独奏录音，每对两片段必出来自不同录音；节奏用 MUSDB18-HQ 鼓干声经时间拉伸，两片段取自同一窗口，用于检验渲染结论是否成立。

### 只用干净配对做 GRPO：奖励、冻结边界与字母读法

后训练在 4 个开源模型上做 GRPO ，只用训练集干净基础对，声音版本不参与主训练。奖励为答对得 1 ，否则为 0 ，另加 0.2 可解析奖励与至多 0.1 防字母坍缩项。每步 8 个提示，每提示 8 条采样，共 64 条回滚， Qwen2.5-Omni 的 LoRA 版用 6 卡 24 提示共 192 条。学习率 LoRA 为 1×10−5 ，全量为 1×10−6 ， KL 系数为 0.10 ，最大生成 8 个新 token ，报告第 1,000 步， Audio Flamingo 3 全量版提前至第 500 步。

所有运行冻结音频编码器，只更新语言解码器的注意力与前馈投影， LoRA 秩为 16 ，缩放为 32 。训练不改变编码器输出，语言侧只能重读同一特征。对照运行 R1 每批一半干净对一半声音版，含编解码、音色库替换与移调，从不含测试的混响、均衡与嘶声。 R2 把 GRPO 换为对正确字母的交叉熵，提示、批量、步数与 LoRA 不变。留一任务迁移用 7,500 条在三任务上训练 500 步，第四任务 250 条干净集从未见过。

开源模型取首个答案位置 A 与 B 的对数几率，贪心解码与直接读字母在所有条目上一致。商用模型读生成字母，无字母回复在渲染主表记为 A ，在真实与 Slakh 集记为错误。人类 12 人各答 24 条，共 288 答，耳机听同文件同问题。 250 条上 43.8% 到 56.2% 与机遇无显著差异， 2,000 条上为 47.8% 到 52.2% 。 GRPO 在单节点多卡运行，每运行 2 张 GPU ，主为 NVIDIA A100 80 GB ， LoRA 版 Qwen2.5-Omni 约 5.9 小时，代码与数据集作者资源当前可用，排行榜页面论文已给出， MusicCaps 2,735 条仅用于描述副作用。

### 未训练模型几乎全在机遇线：干净与翻转保持的主结果

下表是未训练时的主结果，干净准确率按四任务各 250 条统计，翻转保持在 2,000 条上统计漏检与误翻。比较时先看机遇线， 250 条上 43.8% 到 56.2% 均与 50% 无显著差异， 2,000 条上为 47.8% 到 52.2% 。人类 12 人共 288 答作参照，恒答 A 作字母基线，商用模型中无字母回复按 A 计。

| Model | Clean accuracy All | flip/stay AccFS | flip/stay MR | flip/stay FFR |
| --- | --- | --- | --- | --- |
| Qwen2-Audio | 47.2 | 50.7 | 47.7 | 50.9 |
| Qwen2.5-Omni | 61.2 | 61.2 | 36.7 | 41.0 |
| Step-Audio 2 | 54.4 | 52.7 | 49.1 | 45.5 |
| GPT-Audio-1.5 | 47.3 | 52.1 | 45.8 | 50.1 |
| Gemini 2.5 Pro | 79.2 | 74.2 | 24.7 | 26.9 |
| Gemini 3.8 Flash | 66.5 | 64.0 | 33.0 | 39.1 |
| Human (12) | 87.5 | 87.0 | 5.2 | 20.8 |
| Always ‘A’ | 52.8 | 49.5 | 53.0 | 48.1 |

干净集上 8 个开源模型中 7 个落在 47.2% 到 56.5% ，与恒答 A 的 52.8% 接近。翻转保持上 5 个落在机遇区间， Fun-Audio-Chat 的 53.6% 与 Step-Audio 2 的 52.7% 仅略高于上限，只有 Qwen2.5-Omni 的 61.2% 明显脱离。两 GPT-Audio 模型为 49.6% 与 52.1% ， Gemini 3.8 Flash 为 64.0% ， Gemini 2.5 Pro 为 74.2% ，仍比人类翻转保持准确率 87.0% 低 12.8 个百分点，人类干净准确率与总体原始答对率均为 87.5% ，两者口径不同。

#### 干净分数被字母偏好抬高

字母偏好解释了部分干净分数。 Qwen2-Audio 在 98.6% 的干净条目上答 B ， Phi-4-multimodal 在 95.9% 的干净条目上答 A ， Audio Flamingo 3 在 87.7% 的干净条目上答 A ，按答案类别平均后三者分别为 49.9% 、 49.7% 与 50.6% ，回到机遇。 Qwen2.5-Omni 的 A 回答率为 52.4% ，类别平均为 61.1% ，是唯一不靠偏好脱离机遇的开源模型。分任务看，音色是多数模型唯一高于机遇的任务，旋律只有 Qwen2.5-Omni 与两 Gemini 模型高于机遇。

下表是 GRPO 后的 held-out 结果，测试仍用未见音高区间与新音色库，主运行只训干净对。比较时盯住三列，干净总准确率是否摆脱记忆，翻转保持准确率是否同步跟上，漏检与误翻哪一侧下降更多。 Audio Flamingo 3 全量版为第 500 步，其余为第 1,000 步。

| Model | GRPO | Clean accuracy All | flip/stay AccFS | flip/stay MR | flip/stay FFR |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | none | 61.2 | 61.2 | 36.7 | 41.0 |
| Qwen2.5-Omni | LoRA | 99.0 | 86.0 | 1.9 | 26.1 |
| Qwen2.5-Omni | full | 96.2 | 83.5 | 4.2 | 28.9 |
| Audio Flamingo 3 | full† | 79.4 | 70.4 | 22.5 | 36.7 |

GRPO 在 8 组中 7 组提升干净准确率 10.0 个百分点到 37.8 个百分点。 Qwen2.5-Omni 的 LoRA 版达 99.0% ，全量版为 96.2% ， Audio Flamingo 3 全量版为 79.4% ， Qwen2-Audio 的 LoRA 版为 68.9% 。节奏只有 Qwen2.5-Omni 两版与 Audio Flamingo 3 全量版学到，其余仍在 50.8% 到 52.0% 。字母差距同步缩小， Audio Flamingo 3 全量版的类别差距从 75.3 个百分点降到 17.0 个百分点， Qwen2-Audio 的 LoRA 版从 97.2 个百分点降到 39.6 个百分点。

#### 翻转保持平面显示改进方向单一

下图把所有模型放在漏检为横轴、误翻为纵轴的平面上，灰色对角线为等准确率线，虚线对角为忽略音频的 50% 线。先看灰圈与深色菱形的未训练分布，再看绿色三角与方块经 GRPO 向左向下的位移，黑色圆点为人类听众位置。请对比向左与向下的幅度差异。

[![原论文 Figure 4：Every model on the two flip/stay error rates, before and after GRPO.](https://arxiv.org/html/2611.29375v1/fig_plane.svg)](https://arxiv.org/html/2611.29375v1/fig_plane.svg)

*论文图 4：漏检与误翻平面上未训练与 GRPO 后模型及人类位置（原论文 Figure 4）。*

GRPO 后最佳运行漏检降至 1.9% 但误翻仍为 26.1% ，与未训练 Gemini 2.5 Pro 的 26.9% 相当，左移幅度远大于下移幅度。未训练灰圈多集中于 50% 虚线附近，绿色三角与方块沿等准确率对角线向左移动，人类听众黑点位于左下低误翻区，三者对比显示模型只学会察觉变化而未学会忽略无关声音变化。

### 学会察觉远快于学会忽略：嘶声、移调与跨任务迁移的代价

GRPO 的干净高分掩盖了不对称学习。 7 组学到东西的运行中 6 组漏检下降比误翻下降多 2.2 到 3.2 倍， Phi-4-multimodal 全量版两端各降约 10 与 9 个百分点是例外。 Qwen2.5-Omni 的 LoRA 版漏检从 36.7% 到 1.9% ，误翻从 41.0% 到 26.1% ，漏检为 Gemini 2.5 Pro 的十三分之一，误翻却相当。只计干净答对条目的误翻率更能说明新错， Gemini 从 26.9% 降到 20.8% ，训练模型从 26.1% 只到 25.7% ，几乎全是干净答对后被声音带偏。

下图每行一组 GRPO 运行，橙色箭头为漏检变化，蓝色为误翻变化，起点空圈为训练前，终点为训练后，竖虚线标出 26.1% 的误翻下限。先对比同行橙蓝箭头长度，再看所有蓝色终点是否都停在虚线右侧。注意 Phi-4-multimodal 的 LoRA 行几乎无位移，是未学到的对照。

[![原论文 Figure 2：Misses and false flips on flip/stay before and after GRPO, one row per run.](https://arxiv.org/html/2611.29375v1/fig_mr_ffr.svg)](https://arxiv.org/html/2611.29375v1/fig_mr_ffr.svg)

*论文图 2：GRPO 前后各运行漏检率与误翻率变化的不对称对比（原论文 Figure 2）。*

六行橙色箭头明显长于蓝色，比例 2.2 到 3.2 ，检验均显著。 Qwen2.5-Omni 两行橙色直达 2% 附近，蓝色仍停在 26% 以上。 Audio Flamingo 3 与 Qwen2-Audio 也有同向不对称，只是起点更高终点更差。 Phi-4-multimodal 的 LoRA 行起点终点重合，与主表 52.3% 到 52.3% 一致。没有一行蓝色终点越过 26.1% 虚线左侧，说明只训干净对无法把误翻压到人类水平。

#### 声音类型决定误翻：均衡可学，嘶声与移调学不会

下表对比同为 Qwen2.5-Omni 的 3 种训练，主运行 R0 只用干净对， R1 每批一半干净一半声音版， R2 为同数据量的监督微调。声音版含编解码、音色库替换与移调，从不含测试的混响、均衡与嘶声。比较时看干净总分损失多少，翻转保持总分与分声音误翻各降多少，移调列是否松动。

| Run | All | AccFS | MR | FFR | EQ | Room | Hiss | Tr. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| No training | 61.2 | 61.2 | 36.7 | 41.0 | 33.7 | 37.2 | 49.0 | 48.4 |
| R0: GRPO, clean (Table 3) | 99.0 | 86.0 | 1.9 | 26.1 | 1.4 | 16.6 | 52.4 | 45.2 |
| R1: GRPO, clean + sound-only | 95.6 | 88.2 | 4.9 | 18.7 | 2.7 | 4.5 | 37.7 | 45.2 |
| R2: SFT, clean | 97.4 | 84.6 | 3.0 | 27.8 | 2.4 | 20.7 | 52.7 | 46.0 |

R0 干净 99.0% 而翻转保持 86.0% ，漏检 1.9% 而误翻 26.1% 。 R2 模式相同，漏检降 33.7 个百分点而误翻只降 13.2 ，说明不对称不依赖 GRPO ，训干净对即如此。 R1 干净降到 95.6% ，代价主要在和声从 96.8% 到 84.4% ，换来翻转保持 88.2% ，混响误翻从 16.6% 到 4.5% ，嘶声从 52.4% 到 37.7% ，移调停在 45.2% 不动。加声音版能缓解未见过的混响与嘶声，但教不会相对音高，整体移调仍被判为不同。

下图按保持版声音类型拆分误翻率，四列分别为均衡 294 条、混响 290 条、嘶声 292 条与移调 124 条。每行蓝色箭头从训练前空圈到训练后，菱形为两 Gemini 未训练参照，虚线为 50% 。先看均衡列箭头是否普遍左移，再看嘶声与移调列是否停滞。

[![原论文 Figure 6：False-flip rate by kind of stay change, before and after GRPO, one row per run.](https://arxiv.org/html/2611.29375v1/fig_ffr_change.svg)](https://arxiv.org/html/2611.29375v1/fig_ffr_change.svg)

*论文图 6：按均衡混响嘶声与移调拆分的保持版误翻率变化（原论文 Figure 6）。*

每组学到的运行均衡误翻都降 10.9 到 32.3 个百分点， Qwen2.5-Omni 的 LoRA 版从 33.7% 到 1.4% 。混响部分下降，从 37.2% 到 16.6% 。嘶声列几乎不动， 49.0% 到 52.4% ，移调列 48.4% 到 45.2% 。未训练时三能听模型已呈同排序， Gemini 2.5 Pro 混响 17.2% 、均衡 22.4% 、嘶声 32.5% 、移调 46.8% 。冻结编码器分析显示嘶声使编码器输出移动为真实音乐变化的 2.75 倍，均衡仅 0.04 倍，嘶声在 -80 dBFS 已让 42.9% 相同对被判不同。

#### 跨任务迁移与真实录音检验泛化

留一任务训练显示学到的是是否相同技能而非任务记忆。 Qwen2-Audio 和声从 50.4% 到 71.6% ，反而高于含和声训练的 60.8% 。 Qwen2.5-Omni 和声从 59.2% 到 96.4% ，接近含任务训练的 96.8% ，音色从 66.8% 到 96.8% ，旋律各涨 8 到 10 个百分点。节奏不迁移，只涨 1.2 与 1.6 个百分点，而含节奏训练可达 100.0% ，因节奏是唯一非是否相同与唯一时间任务。 MusicCaps 2,735 条上 BERTScore-F1 变化 -1.28 到 1.95 ， BLEU-4 变化 -0.22 到 1.73 ，平均长度差不足一词，无退化描述。

下表是真实录音第二测试集， 600 条干净与 1,200 条翻转保持，旋律与和声来自 GuitarSet ，音色来自 Medley-solos-DB ，节奏来自 MUSDB18-HQ 鼓组。无字母回复记为错误， GPT-Audio-mini 在翻转保持上 45.5% 无字母， Gemini 2.5 Pro 为 3.7% 。比较时先看未训练是否仍在机遇线，再看渲染集与 Slakh2100 集训练是否跨录音生效，表中两行均简记为 LoRA，据原文上行（All 64.5 / AccFS 62.8）对应渲染集训练 LoRA，下行（All 75.0 / AccFS 75.0）对应 Slakh2100 训练 LoRA；另原文正文报告全量版为 61.7%（未列于本精简摘表）。

| Model | Training | All | AccFS | MR | FFR |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | none | 52.2 | 52.1 | 46.5 | 49.3 |
| Qwen2.5-Omni | LoRA | 64.5 | 62.8 | 37.0 | 37.3 |
| Qwen2.5-Omni | LoRA | 75.0 | 75.0 | 23.0 | 27.0 |
| Qwen2.5-Omni | R1 | 69.5 | 70.1 | 28.2 | 31.7 |
| Qwen2.5-Omni | R2 | 62.5 | 62.9 | 35.8 | 38.3 |

未训练开源模型翻转保持为 48.3% 到 55.5% ，只有 2 模型显著高于机遇， Qwen2.5-Omni 回落到 52.1% 。渲染集训练 LoRA 版到 62.8% ，全量版 61.7% ， Slakh2100 集训练 LoRA 版到 75.0% ，与 Gemini 2.5 Pro 相当。 R1 到 70.1% ，高于 R0 的 62.8% 与 R2 的 62.9% 。 2 次拨弦检验最尖锐，训练模型检出 38 of 41 移三度，却把 27 of 42 同和弦 2 次拨弦判不同， R1 把后者压到 7 of 42 而检出降到 26 of 41 。 Gemini 反向保守，同和弦 37 of 42 判相同，只检出 12 of 41 移三度。

### 结论与工程选型：何时值得用、复现第一步与未验证边界

标题问题的回答是有条件的。未训练时 7 of 8 开源与两 GPT-Audio 模型距 50% 基线 4 个百分点内，最佳商用 Gemini 2.5 Pro 为 74.2% ，比人类翻转保持准确率 87.0% 低 12.8 个百分点，人类总体原始答对率为 87.5% 。 10,000 条渲染干净对 GRPO 让 Qwen2.5-Omni 干净达 99.0% ，翻转保持仅 86.0% ，与人类相当但构成不同，漏检 1.9% 而误翻 26.1% ，嘶声致音色与节奏 94 误翻中 85 条来自嘶声。教模型忽略变化必须显式要求，加声音版已见效，但相对音高至今未学会。

每条测试只含一种乐器或一个鼓组，未测完整混音。人类参照 12 人 288 答， 95% 重采样区间 82.3% 到 91.1% ，作者要求未见保持类型下达到该区间且音色节奏几乎不误翻，当前最佳只满足前者。细粒度音色上训练模型小提与中提只检出 10% ，小号与长号 4% ，中提与大提琴 0% ，长旋律单音变化更难。真实录音旋律无开源超 55.3% 干净准确率， Gemini 达 72.7% ，渲染结论在旋律上泛化最弱。附录给出全部生成参数、检查点版本与训练设置， Slakh 复现与冻结编码器距离分析支撑不对称结论， RTF 与延迟原文未披露。

复现先核对三件事，代码与生成器在 GitHub 可用，数据集在 Hugging Face 可用，排行榜页面可提交，附录给出全部生成、检查点与训练参数。第一步用生成器重跑渲染集并用评分脚本复算干净与翻转保持、漏检与误翻及 A 回答率，再跑 Qwen2.5-Omni 的 LoRA 第 1,000 步对照 99.0% 与 86.0% 。工程上，若做音乐标注、过滤或排序且录音含嘶声或整体移调，不宜直接用干净训练的判分器，需加声音版训练并单测嘶声扫描与移调对。若只做乐器族粗分且录音干净，当前训练模型可用，但须补真实混音与近似乐器对的验证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：渲染集 44.1 kHz 单声道 16 位 PCM WAV ，片段 2.0 s 、 2.5 s 、 4.0 s ，文件 5.0 s 、 6.0 s 、 9.0 s ，中间 1.0 s 静音，等响 -23 LUFS ；开源模型多为 16 kHz 输入， MiMo-Audio 为 24 kHz ； RTF 、延迟与前瞻原文未披露
- **训练与评测数据**：训练 10,000 条渲染干净对，每任务 2,500 条；渲染测试 1,000 条干净与 2,000 条翻转保持，真实录音测试 600 条干净与 1,200 条翻转保持，另有 Slakh2100 复现集；测试用未见音高区间、 MuseScore 音色库与混响均衡嘶声，训练主用干净对
- **算力与训练耗时**：每运行 2 张 GPU ，单节点含 2 张 NVIDIA A100 80 GB 与 6 张 A40 46 GB ； Qwen2.5-Omni LoRA 约 5.9 小时， Qwen2-Audio LoRA 约 2.3 小时，全量约 2.7 小时至 2.8 小时， Phi-4 全量因共享节点显著膨胀；推理硬件原文未单独披露
- **核心超参数与配置**：GRPO 每步 8 提示每提示 8 采样共 64 回滚， Qwen2.5-Omni LoRA 为 24 提示共 192 回滚；学习率 LoRA 1×10−5 全量 1×10−6 ， KL 系数 0.10 ， LoRA 秩 16 ；奖励答对 1 加可解析 0.2 加防坍缩至多 0.1 ；报告第 1,000 步， Audio Flamingo 3 全量第 500 步
- **推理速度与部署开销**：最大生成 8 个新 token ，开源模型比较首位 A 与 B 对数几率，商用模型读生成字母；参数 5.6B 至 16.5B ； RTF 、延迟、吞吐与显存原文未披露； API 调用温度 0 ， Gemini 限制两字母解码
- **开源产物与协议状态**：代码在 GitHub 作者资源当前可用，数据集在 Hugging Face 作者资源当前可用，排行榜页面可提交，附录给出生成器、评分脚本与评测代码， README 覆盖部分， MusicCaps 音频不随附
- **附录与补充材料要点**：附录给出全部生成参数、检查点版本与训练设置，含人类听测区间、字母偏好、按声音拆分误翻、冻结编码器距离与嘶声扫描、 SFT 与声音版对照、 Slakh2100 复现、长旋律与细粒度音色及真实录音构建与核验

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.29375v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：每个条目配对生成答案相反的翻转与保持变体，忽略音频者只能得50%，并在音高区、音色库与声学效果三方面隔离训练与测试。

- 核心优势：8个开放模型、4个商用模型与12位听众对照，GRPO干净对99.0%与留一任务和声96.4%迁移，编码器距离诊断嘶声2.75倍效应。

- 核心优势：渲染集全部音频与条目文件、真实集条目列表及排行榜公开，支持新种子重抽测试集以防泄漏与陈旧。

- 主要短板：测试音色库与训练音色库在部分乐器上共享单声道采样源，确认源录音重叠使三方面隔离强度不均，削弱防泄漏严谨性。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
