---
title: "Read My Lips: Context-aware Lip Reading Using Language and Audio-Visual Models"
date: 2026-11-25
draft: false
tags: [音频修复, 模型融合, 多模态学习, 音视频语音合成]
categories: [论文速递]
description: "针对音频部分可观察下的静音与强噪声恢复问题，RML 用冻结唇读假设加可听上下文语言修正再经音视生成重建，并以证据加权投票自适应选路，在 TalkVid 与 VoxMM 上把平均 WER (词错误率) 从 69.0% 降至 25.5% ，代价是整窗重生成约 11 s 与完整选择需 6 次推理的离线开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33117"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "唇读语言与音视生成协同修复缺失与噪声语音"
paper_digest_original_title: "Read My Lips: Context-aware Lip Reading Using Language and Audio-Visual Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33117v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33117v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33117v1.pdf"
paper_digest_primary_task: "音频修复"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-restoration","label":"音频修复"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.av-synthesis","label":"音视频语音合成"}]
paper_digest_primary_method: "模型融合"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频部分可观察下的静音与强噪声恢复问题，RML 用冻结唇读假设加可听上下文语言修正再经音视生成重建，并以证据加权投票自适应选路，在 TalkVid 与 VoxMM 上把平均 WER (词错误率) 从 69.0% 降至 25.5% ，代价是整窗重生成约 11 s 与完整选择需 6 次推理的离线开销。"
paper_digest_reader_sections: [{"heading":"部分可观察语音的三维损坏与音视语互补恢复任务","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"RML 三模型分工与六配置流水线总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"唇读候选与可听上下文驱动的语言模型修正","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"音视生成重建与证据加权最小贝叶斯风险选择","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"静音补全与噪声恢复的主定量对比与自适应行为","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"难读唇形、组件消融与选择规则诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、运行代价与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Amir Razlighi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhuo Ning"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Naomi Ken Korem"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nisarg Patel"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiorgos Chrysanthou"},{"affiliations":["Simon Fraser University University of Cyprus CYENS Centre of Excellence Lightricks MARZ VFX Tel Aviv University"],"name":"Daniel Cohen-Or"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ali Mahdavi Amiri"}]
paper_digest_abstract_sha256: "959b0c5a71fa59e54494e7276b758850bda28f9c948c9f9e6b995707c96db29a"
paper_digest_sidecars: {"citation.bib":{"sha256":"921336779199e2085f29aff72805800e4641c4bf83870ca648fc6852f2e1b940","url":"/audio-research-portal/client/papers/2026-11-25/2611-33117/citation.bib"},"citation.json":{"sha256":"a71fef2c8b1a07ed7a0d9436a13247d5881b1ad87f5ff5ad53d0cc98222de74d","url":"/audio-research-portal/client/papers/2026-11-25/2611-33117/citation.json"},"citation.ris":{"sha256":"a09ee949668a127a2d85bb4866a91aabee4d10db62301a94299000999e16efb3","url":"/audio-research-portal/client/papers/2026-11-25/2611-33117/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"48cd6a53442205519c13f6c5c3742c732425522388cb40b6baa8f52d2d32f8f6","url":"/audio-research-portal/client/papers/2026-11-25/2611-33117/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "85d7195f9c82e357feda012fed9b5088485c102136ae3fe98ebf11171d1e3b01"
paper_digest_api_reader_plan_sha256: "832a400f5dff834e0f30ea5bfbcdf3b5a8aef71fd44e8bbe1d4ef531c53d1d35"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3fe583f2e91488f1b88f05dad771d8372bf59f9a13a7f0e4bd01062c1cb95073"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "62001ca864d0ca5d6fa16883d5bd368d91de1eb5427768c5050a4248726b71e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6d9bf572f65434fbbadf271e09492f2ba6483355539dbd750c246105b77e8a2c"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "220a5e8857010c9a242b4e2b7eb5bfee88b8fe02b76e6879c0ef810704d8542e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 唇读语言与音视生成协同修复缺失与噪声语音

> 英文题目：*[Read My Lips: Context-aware Lip Reading Using Language and Audio-Visual Models](https://arxiv.org/abs/2611.33117v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频修复](/audio-research-portal/papers/?concept=task.audio-restoration)；[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [音视频语音合成](/audio-research-portal/papers/?concept=task.av-synthesis)
- **研究方法**：[模型融合](/audio-research-portal/papers/?concept=method.model-combination)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 7.6/10 | 技术严谨 8.0/10 | 实验充分 8.0/10 | 清晰度 7.0/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 7.5/10 | 工程/实践 4.8/10


## 👥 作者与机构

- Amir Razlighi：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhuo Ning：机构信息未能在本次解析中与作者逐人可靠绑定
- Naomi Ken Korem：机构信息未能在本次解析中与作者逐人可靠绑定
- Nisarg Patel：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiorgos Chrysanthou：机构信息未能在本次解析中与作者逐人可靠绑定
- Daniel Cohen-Or：Simon Fraser University University of Cyprus CYENS Centre of Excellence Lightricks MARZ VFX Tel Aviv University
- Ali Mahdavi Amiri：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 真实语音常常只能部分观察到，输入是说话人视频 V 与受损音频 a~ ，损伤沿三个维度独立变化，分别是加性噪声与竞争说话人的强度，从单个词到整个片段的缺失长度，以及从正面清晰唇形到侧脸遮挡或动画人物的可读性。现有唇读受限于发音视觉歧义，例如 /p/ 、 /b/ 与 /m/ 都表现为闭唇，难以区分 pat 、 bat 与 mat ，大语言模型虽能利用上下文补词，却可能给出合理但并未说出的内容，音视频生成模型能合成同步语音，却不擅长精读唇形，也无法保留受损录音中仍可用的原声。

**核心思路与方法架构：** 与最接近的唇读加语音编辑基线相比，增量在于把三者用纯文本衔接并按证据动态选择，固定管线则始终使用同一配置。沿一个 4.8 s 窗口看，嘴部裁剪送入冻结的唇读器 R ，得到 10 个候选文本，冻结的 Whisper 转写受损音频得到可听上下文 c ，其中静音区间以占位符与时长标出，微调后的语言模型 L 从候选与上下文中挑选最接近者并结合时长改写，生成全窗转录。生成器 G 采用 22B 参数的扩散变换器 LTX-2.5 ，视频通路冻结，仅音频相关注意力与前馈经低秩适配微调，它同时看到视频隐变量、一段音频起点与任务标记 `<inpaint>` 或 `<denoise>` 及转录文本，自行定位损伤并生成整窗同步语音，保留可用的原声与说话人音色。

**关键实验与核心代价：** 在 TalkVid 与 VoxMM 的 4.8 s 窗口上，用转写后计算的词错率 WER (Word Error Rate ，越低越好 ↓) 与静音段精确恢复率 (越高越好 ↑) 评测，本文方法在静音恢复的混合切段上达到 39.3% 精确恢复，高于唇读器自身的 30.7% ，换用更强唇读器后达到 43.8% ，高于该唇读器自身的 35.8% ，在噪声恢复的混合窗口上平均 WER 为 27.2% ，低于受损输入的 69.0% 与视频分离基线 VisualVoice 的 40.1% 。自适应选择在 3419 个样本的条件网格上达到 23.1% WER ，优于固定使用语言模型转录的 26.8% 。主要代价是离线计算量，在 1 张 H100 GPU 上单次生成约需 11 s ，完整选择需 6 次生成，且在丢弃输入音频时说话人相似度从保留音频时的 0.727 降至 0.191 。听感对照显示 16 名听众的偏好与 WER 差异的 Spearman 相关为 0.71 ，神经代理指标 UTMOS 与 DNSMOS 与人工偏好基本一致，但 DNSMOS 会给生成语音打出高于真实录音的分数。

**适用边界与深读导览：** 结论仅在 4.8 s 单损伤人工合成窗口、可提供该语种唇读器与可听上下文的条件下成立，尚未覆盖丢包、编解码与混响损伤，也未验证跨窗口长上下文传递，当整段被大噪声覆盖且上下文无信息时结果仍受限于唇读上限，在难读唇形的静音集上选择有时会跟随错误的唇读。需要深究证据分与最小贝叶斯风险权衡、生成器对照唇形实验与难读集细分的读者，可重点查阅下文方法自适应选择、消融表 5 与附录 D.5 、 D.8 及 E 章的语音质量与听测细节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 部分可观察语音的三维损坏与音视语互补恢复任务

真实语音常只能被部分观察到，音频可能缺失或被噪声与竞争说话人掩盖，而说话人嘴唇依然可见。论文把这种困难拆成 3 个可独立变化的维度，分别是声学噪声强度、缺失词数量与视觉可读性。正面清晰唇形到侧脸遮挡乃至动画与生成人物，都属于可读性变化。任一模态都可能在某些输入下完全失效，因此恢复必须同时动用可听、可视与可推断的线索。

输入被形式化为一段说话人视频 V 与一条损坏音频 a~ ，输出为转写文本 y^ 与一条与视频同步且保留音色的语音 a^ 。损坏过程用示性集合描述，Ω 表示被损坏的时间区间集合，𝟙Ω 为其示性函数，⊙ 为逐点相乘，γ 控制是否保留原语音成分，n 为干扰信号。该写法统一了静音删除与加性噪声两种情形。

\[\tilde{a}\;=\;(1-\mathbf{1}_{\Omega})\odot a\;+\;\mathbf{1}_{\Omega}\odot\left(\gamma\,a+n\right),\]

该式的物理直觉是把干净语音切成保留段与损坏段分别处理，未损坏处直接保留原波形，损坏处按 γ 与 n 决定是置零还是叠加干扰。γ 取 0 且 n 取 0 对应静音，整段信息彻底消失。γ 取 1 则对应巴伯噪声、竞争说话人或环境声叠加，信噪比未知。输出端生成器必须在不知 Ω 位置的条件下自行判断哪里需要重建，哪里需要保留。

音素与视素之间不存在一一对应，/p/ 、/b/ 与 /m/ 都表现为双唇闭合，pat 、bat 与 mat 等词仅看唇形难以区分。语言上下文能约束缺失位置的候选，例如固定搭配可以大幅缩小范围，但人名数字与意外表达仍无法仅靠上下文猜中。残留的弱声学线索则能提供音位、时长与音色信息，三者互补是联合建模的直接动机。

### RML 三模型分工与六配置流水线总览

RML 把恢复拆成 3 个可替换模块的协作，唇读器 R 提供视觉发音假设，语言模型 L 结合可听上下文修正转写，音视生成器 G 根据视频、音频轨与文本重建语音。模块之间只用纯文本传递转写结果，因此任一视觉识别器都可以在不重训其余模块的条件下替换。测试时系统并行尝试多种文本与音频组合，再按证据选择最可靠的输出。

#### 三维损坏分级示意

先看任务全貌有助于理解 3 路信号为何缺一不可，左侧滑杆展示了声学损坏程度、缺失词数与视觉可读性 3 个维度的连续变化，右侧则用两个实例对比了局部静音与整段强噪声的不同恢复路径。该示意把输入难度分级与输出形态放在同一视图，为后文六配置的动机做了铺垫。

![原论文 Figure 1：Read My Lips recovers a variety of corruptions in audio by using a combination of a lip reader, a…](/audio-research-portal/images/papers/2611.33117/figure-1-23c067adc5785b94.png)

*论文图 1：三维损坏分级与双实例修复示意，左侧滑杆刻画噪声词数与可读性，右侧对比局部静音与整段噪声（原论文 Figure 1）。*

左侧 3 个滑杆分别对应从干净到静音的声学噪声、从 1 个词到全部缺失的词数，以及从正面易读到侧脸遮挡的视觉可读性，橙色与蓝色分别标记静音与噪声两类实例。右侧上方两词被切除的例子需要补全缺失片段，下方整段淹没在巴伯噪声中的例子需要完全依赖唇形恢复句子。中间黑框把唇读器、语言模型与生成器叠放，箭头指向右侧不同颜色的波形输出，表明同一框架要覆盖两种极端损坏。

#### 六配置来源与执行路径

沿视频与音频两条输入箭头追踪张量流向，可以看清文本与音频如何在生成器处汇合，以及 6 种配置如何由两种选择交叉得到。该流程图还标出了冻结与微调模块的边界，语言模型与生成器分别带有 LoRA (低秩适配) 标记，而唇读器与语音识别器保持冻结。

[![原论文 Figure 2：Overview of Read My Lips on a real test clip with silenced words.](https://arxiv.org/html/2611.33117v1/figs/pipeline.png)](https://arxiv.org/html/2611.33117v1/figs/pipeline.png)

*论文图 2：冻结唇读与识别输出候选与上下文，语言模型挑选改写后由生成器按六配置合成与选择（原论文 Figure 2）。*

左侧视频 V 进入唇读器得到 A 、F 、J 等 10 个读法，音频 a~ 进入语音识别器得到带 0.9 s 缺口标记的上下文。中间语言模型执行两步，先以 0.59 概率选中 F 再把 control 改为 roll 、cattle 改为 candle out 等，最终文本连同视频与音频块进入右侧生成器。底部开关决定文本取自无、R 或 L ，音频取自 a~ 或静音，交叉得到 6 路输出再经测试时选择得到橙色高亮的修复波形。

6 种配置记为 G 、R→G 与 R→L→G ，每种再乘以保留 a~ 或从静音启动。当整段静音时 a~ 本身即静音，只剩 3 种文本选项。每种配置产生一路候选语音与其转写，另有语言模型转写只参与投票而不直接输出，最终选择依据音频与唇动证据的加权风险完成。

### 唇读候选与可听上下文驱动的语言模型修正

视觉分支采用 Auto-AVSR 处理英语整段嘴部裁剪，西班牙语与法语则换用 Ma 等人的识别器，测试时也可直接换成 USR 2.0 而不重训其余模块。束搜索保留前 10 个互不相同的转写，处理对象是整段 4.8 s 窗口而非仅缺失区间，使假设能利用周围视觉线索并在后文与可听转写对齐。保留 N 最佳列表的目的在于提高正确词出现在候选中的概率。

可听上下文由 Whisper large-v3 对 a~ 转写得到，静音段用 5 ms 帧、低于轨道峰值 70 dB 的阈值与 50 ms 最小时长检测定位。在测试集上该检测器找到 99.9% 的静音区间，TalkVid 与 VoxMM 上 99.2% 与 99.6% 的双边界误差在 10 ms 以内。上下文中缺口用占位符加时长表示，噪声输入则保留可能含错的转写，任务标记据此取 `<inpaint>` 或 `<denoise>` 。

语言模型 L 采用指令微调版 Gemma-4 12B ，对每层注意力查询、键、值与输出投影加秩为 32 、α 为 64 、丢弃率为 0.1 的 LoRA 。训练分三阶段，先学选最佳候选或直接写转写，再学先指名再改写的两步格式，最后加入噪声样本，学习率从 1e-4 降至 5e-5 ，有效批量为 16 。训练候选来自 4 种不同质量的唇读器并在 1 到 N 间均匀采样候选数，以避免依赖特定唇读器，推理时采用贪心解码。

教学例子可看附录提示，输入上下文为 first thing that I am gonna do is roll a 缺口 paper for this candle holder ，缺口时长 0.9 s ，10 个候选中无一包含 candle out 。模型先选中 F 再改写为 roll a candle out of wax paper ，说明它并非简单复制首选，而是用上下文约束对视觉假设做编辑。噪声输入时候选还会混入音视 Auto-AVSR 的 N 最佳与 Whisper 转写并去重，再做同样的挑选与修正。

### 音视生成重建与证据加权最小贝叶斯风险选择

#### 生成器条件与整窗合成

生成器 G 采用 22B 参数的 LTX-2.5 扩散 Transformer ，视频通路保持冻结，只在音频自注意力、音频文本交叉注意力、音频前馈与视频到音频注意力上加秩为 64 的 LoRA 。视频隐变量提供唇动线索，音频流把输入轨道作为干净上下文拼接待生成目标，文本侧给任务标记与整窗转写。三者联合使模型能对齐唇动、保留可听语音并补全静音或被掩盖内容，推理用 30 步去噪与固定种子，`<inpaint>` 文本引导为 5 ，`<denoise>` 为 1 。

关键约束是生成器从未被告知损坏位置与长度，既无掩码也无时间戳，文本中也不含缺口标记。它必须自行发现哪里缺语音、哪里需保留，整窗语音是一次生成而非复制可听段。训练分三阶段共约 10,000 步，首阶段用约 15,800 个 1 到 10 词静音跨度配唇读文本，次阶段混入信噪比在 -15 到 5 dB 的巴伯噪声、环境声与竞争说话人，末阶段对半数噪声样本给唇读文本、1/4 给参考文本、1/4 不给文本，10% 样本丢文本以训练无条件分支，静音区损失权重为 12 。

#### 证据评分与风险投票选择

测试时没有真值可比，只能度量候选转写 y 得到观测音频与唇动的支持程度。音频证据 eA 用 Whisper large-v3 在损坏输入 a~ 与等长静音 ∅a 下的对数似然差计算，视觉证据 eR 用视觉 Auto-AVSR 在真实嘴部序列 V 与重复首帧 V¯ 下的加权注意力与 CTC 对数似然差计算。两者相加得到总证据 e ，单位为奈特。

\[\begin{aligned} \displaystyle e_{A}(y) \displaystyle=\log p_{A}(y\mid\tilde{a})-\log p_{A}(y\mid\varnothing_{a}), \\ \displaystyle e_{R}(y) \displaystyle=\log p_{R}(y\mid V)-\log p_{R}(y\mid\bar{V}), \\ \displaystyle e(y) \displaystyle=e_{A}(y)+e_{R}(y), \end{aligned}\]

相减的直觉是扣除识别器自身的语言先验与长度代价，剩余部分近似转写与输入之间的逐词点互信息。无信息模态下两项对数似然几乎相等，证据接近于零而自动退出决策。求和时不对模态加权，因为两者已是同单位的对数似然比。按词元求和而非平均，使多词被支持的转写胜过仅一词高置信的转写，温度 T 统一调节证据对投票的影响尺度。

六宫格实例展示了 -20 dB 巴伯噪声下各配置的转写、证据与风险取值，以及为何保留噪声音频的配置会集体失效。该图行表示供给 G 的文本来源，列表示起始音频是保留输入还是切换为静音，底部还有只投票不输出的语言模型转写，可据此理解自适应切换的依据。

[![原论文 Figure 3：Test-time selection on a test clip with babble at -20 dB.](https://arxiv.org/html/2611.33117v1/figs/selection.png)](https://arxiv.org/html/2611.33117v1/figs/selection.png)

*论文图 3：负 20 dB 巴伯实例六配置转写证据与风险对比，保留噪声均失效而静音启动被选中（原论文 Figure 3）。*

顶行无文本配置证据为 -18.6 且风险高达 4.03 ，静音启动时甚至无语音输出。中行唇读文本配置证据为 19.1 与 23.9 ，底行语言模型文本配置在保留音频时证据仅 5.2 、风险 2.49 ，切换为静音后证据跃升至 37.5 、风险降至 1.94 而被选中。底部投票转写为 I am going to talk about Elon Musk I do not know him ，证据为 19.7 ，红色词标出各候选与真值 I am going to talk about Elon Musk I know him 的偏离。

最终选择用最小贝叶斯风险在 6 个候选间投票，投票集合 𝒴 包含各配置转写与语言模型转写 y^L ，距离 d 取双向 WER (词错误率) 的平均。温度 T 在验证集上定为 100 ，R→G 从静音启动的配置只参选不投票，因为 L 已读过全部 N 最佳而避免重复计数。风险按证据加权，证据高的投票者权重更大。

\[\theta^{\star}=\arg\min_{\theta\in\Theta}\sum_{y^{\prime}\in\mathcal{Y}}e^{\frac{e(y^{\prime})}{T}}\,d(y_{\theta},y^{\prime}),\]

该式的统计直觉是以证据为先验权重的加权投票，证据支持越强的转写对距离惩罚贡献越大。T 趋于 0 时退化为只选证据最高者，T 趋于无穷时退化为等权投票。极端损坏下音频证据从约 80 跌至约 3 ，保留音频的配置风险升高，系统自动偏向静音启动的配置。干净输入时则相反，保留音频的配置几乎总被选中，从而无需人工阈值实现跨条件自适应。

### 静音补全与噪声恢复的主定量对比与自适应行为

#### 评测协议与公平性前提

训练仅用 TalkVid 子集约 6,509 个 4.8 s 窗口训练生成器与 6,792 个英语窗口训练语言模型，总计不足 1,430 个完整视频与 12 小时语音。测试覆盖未见 TalkVid 、域外 VoxMM 、西法语窗口与 44 个难读唇形窗口。损坏分两类，静音移除 1 到 10 个连续词，噪声用保留通道的 DEMAND 食堂巴伯声在 -10 与 -5 dB 、可见与未见 VGGSound 环境声在 -5 dB ，以及 -5 dB 竞争说话人全窗掩盖。输出先经 Whisper large-v3 转写再与参考对齐，静音只计可从干净音频被正确转写的验证切段，噪声计整窗 WER ，差异用按视频自助的 95% 配对区间判定。

先看数据规模与划分有助于判断跨域比较的公平性，每个 4.8 s 窗口按缺失跨度 k 产生多个静音样本并按 5 种噪声条件产生 5 个噪声样本，未通过干净音频校验的静音样本直接丢弃。下表列出各集合的视频数、窗口数与样本数，难读集按场景而非视频计数，训练测试视频无重叠。

| Set | Videos | Windows | k | Silenced | Noisy |
| --- | --- | --- | --- | --- | --- |
| TalkVid (en) | 23 | 114 | 1–10 | 875 | 570 |
| VoxMM (en) | 28 | 159 | 1–10 | 1,217 | 795 |
| Hard (en) | 23 | 44 | 1, 3, 5 | 116 | 220 |
| TalkVid (es, fr) | 76 | 431 | 1–4 | 401 | – |

TalkVid 英语有 23 个视频 114 个窗口，对应 875 个验证静音切段与 570 个噪声样本，VoxMM 英语有 28 个视频 159 个窗口，对应 1,217 个静音切段与 795 个噪声样本。难读集 23 个场景 44 个窗口仅 116 个静音切段与 220 个噪声样本，西法语 76 个视频 431 个窗口有 401 个静音切段而无噪声样本。VoxMM 未参与语言模型与生成器训练，因此跨源下降能反映泛化而非记忆。

#### 静音跨度精确恢复

静音任务要求在不知缺口位置的条件下恢复被置零的词，评价用精确跨度恢复率与词准确率，均为越高越好。语音编辑基线额外被告知缺口位置并直接获得语言模型转写，唇读基线只输出文本，生成类方法输出语音后再转写评分。下表对比了两类输出形态下的最接近基线。

| Method | Text | Span | Exact recovery TalkVid | Exact recovery VoxMM | Exact recovery Pooled | Acc. Pooled |
| --- | --- | --- | --- | --- | --- | --- |
| Text output |  |  |  |  |  |  |
| Auto-AVSR [35] | – | – | 51.0 | 16.1 | 30.7 | 59.7 |
| USR 2.0 [23] | – | – | 53.5 | 23.0 | 35.8 | 64.9 |
| Llama-AVSR [4] | – | – | 47.7 | 18.0 | 30.4 | 58.5 |
| Speech output |  |  |  |  |  |  |
| LipVoicer [56] | own | – | 43.4 | 17.3 | 28.3 | 58.6 |
| VoiceCraft [41] | L | ✓ | 51.8 | 18.3 | 32.3 | 59.8 |
| F5-TTS [11] | L | ✓ | 57.4 | 20.2 | 35.8 | 62.2 |
| AlignDiT [12] | L | ✓ | 56.3 | 20.9 | 35.7 | 62.8 |
| Ours (Auto-AVSR as R) | L/R | – | 60.3 | 24.2 | 39.3 | 65.7 |
| Ours (USR 2.0 as R) | L/R | – | 64.0 | 29.3 | 43.8 | 69.2 |

以 Auto-AVSR 为唇读器时本方法汇聚恢复 39.3% 的静音跨度，高于 Auto-AVSR 自身的 30.7% ，已达到更强 USR 2.0 自身 35.8% 之上，换用 USR 2.0 后进一步升至 43.8% ，超出 USR 2.0 自身 8.0 个百分点。词准确率也从 59.7% 升至 65.7% ，换强唇读器后达 69.2% 。F5-TTS 与 AlignDiT 即使被告知位置与语言模型文本，仍分别只有 35.8% 与 35.7% ，表明增益来自唇形与可听上下文的联合而非单纯的语音合成质量。

#### 噪声整窗词错误率

噪声任务对整窗 4.8 s 语音计 WER ，越低越好，汇聚值为 5 种干扰条件的平均。纯音频增强只读噪声音频，纯唇读只读嘴部，音视识别同时读两者，分离模型还用人脸辅助。下表按巴伯声 -10 与 -5 dB 、可见与未见环境声及竞争说话人分列，最后一列为平均。

| Method | Babble −10 | Babble −5 | Sound effects seen | Sound effects unseen | Other talker | Avg |
| --- | --- | --- | --- | --- | --- | --- |
| Noisy input | 91.8 | 52.9 | 47.7 | 48.0 | 104.8 | 69.0 |
| Text output |  |  |  |  |  |  |
| Auto-AVSR [35] (V) | 49.4 | 49.4 | 49.4 | 49.4 | 49.4 | 49.4 |
| Auto-AVSR [35] (AV) | 82.1 | 47.7 | 68.7 | 61.0 | 93.6 | 70.6 |
| USR 2.0 [23] (V) | 47.4 | 47.4 | 47.4 | 47.4 | 47.4 | 47.4 |
| USR 2.0 [23] (AV) | 62.4 | 28.8 | 35.4 | 29.0 | 104.3 | 52.0 |
| Llama-AVSR [4] (V) | 58.8 | 58.8 | 58.8 | 58.8 | 58.8 | 58.8 |
| Llama-AVSR [4] (AV) | 57.8 | 34.3 | 30.7 | 26.0 | 90.4 | 47.9 |
| Speech output |  |  |  |  |  |  |
| DeepFilterNet3 [49] | 92.5 | 70.6 | 51.6 | 43.3 | 102.8 | 72.2 |
| Sidon [40] | 99.4 | 93.0 | 61.5 | 64.8 | 103.1 | 84.4 |
| VisualVoice [18]† | 80.5 | 41.8 | 28.7 | 29.1 | 20.7 | 40.1 |
| LipVoicer [56] | 52.9 | 52.9 | 52.9 | 52.9 | 52.9 | 52.9 |
| AlignDiT [12] (R)† | 50.5 | 50.5 | 50.5 | 50.5 | 50.5 | 50.5 |
| Ours (Auto-AVSR as R) | 44.0 | 28.1 | 22.0 | 19.9 | 22.1 | 27.2 |
| Ours (USR 2.0 as R) | 40.1 | 26.6 | 20.6 | 19.0 | 21.1 | 25.5 |

噪声输入平均 WER 为 69.0% ，本方法以 Auto-AVSR 为唇读器时降至 27.2% ，换 USR 2.0 后降至 25.5% ，全面低于所有基线。-10 dB 强巴伯下本方法为 44.0% ，而音视 USR 2.0 恶化至 62.4% ，-5 dB 时后者以 28.8% 最接近本方法的 28.1% 。竞争说话人下专为分离设计的 VisualVoice 以 20.7% 最接近本方法的 22.1% ，其余增强模型如 DeepFilterNet3 与 Sidon 分别高达 72.2% 与 84.4% ，说明严重损坏下单纯滤波已失效。

#### 损坏程度自适应

固定配置无法在所有损坏下最优，轻度损坏应保留音频，重度损坏应果断丢弃。下图上排比较自适应选择与固定配置在 1 个词、4 个词与整窗损坏下的 WER 曲线，下排用堆叠柱显示每次选中 R→L→G 、R→G 或无文本生成的比例，斜纹表示静音启动。

[![原论文 Figure 4：Adapting to the input. WER under different corruption levels and durations.](https://arxiv.org/html/2611.33117v1/figs/adapt.png)](https://arxiv.org/html/2611.33117v1/figs/adapt.png)

*论文图 4：不同损坏强度与范围下自适应与固定配置词错误率曲线及选中配置比例堆叠分布（原论文 Figure 4）。*

上排整窗列中无文本生成在 -20 dB 整窗时 WER 超过 100% ，保留音频的 R→L→G 升至 75.4% ，而自适应黑线仅 49.8% 。下排显示干净整窗几乎全部保留音频，-20 dB 整窗则 88% 切换为静音启动。音频证据均值也从干净时的约 80 跌至该条件下的约 3 ，视觉证据则稳定在约 55 到 59 之间。跨 3,419 个网格样本自适应平均 23.1% ，优于固定 R→G 的 26.4% 与固定 R→L→G 的 26.8% ，且从未在任一条件下显著落后于事后最优固定选择。

### 难读唇形、组件消融与选择规则诊断

#### 难读唇形集合表现

难读集收集侧脸、遮挡、动画与生成人物等嘴部难以读取的 44 个窗口，静音按 1 、3 、5 词切分，噪声沿用 5 个条件。部分基线因人脸检测失败只能在可处理子集上评分，附录已给出配对比较。下表同时报告静音精确恢复率越高越好与噪声 WER 越低越好，星号表示仅计成功预处理窗口。

| Method | Silenced ↑ | Noisy ↓ |
| --- | --- | --- |
| Damaged input | – | 54.1 |
| Auto-AVSR [35] (V / AV) | 8.6 | 72.5∗ |
| USR 2.0 [23] | 12.0∗ | 56.3∗ |
| Llama-AVSR [4] | 13.3∗ | 60.3∗ |
| SAM Audio [51], text prompt | – | 53.7 |
| VisualVoice [18] | – | 41.6∗ |
| LipVoicer [56] | 10.8∗ | 92.8∗ |
| F5-TTS [11] (L) | 23.3 | – |
| AlignDiT [12] (L / R) | 23.6∗ | 97.0∗ |
| Ours (Auto-AVSR as R) | 25.9 | 29.6 |

本方法静音恢复 25.9% ，约为自身唇读器 8.6% 的 3 倍，也高于获得语言模型文本的 F5-TTS 的 23.3% 与 AlignDiT 的 23.6% 。噪声 WER 为 29.6% ，显著低于损坏输入的 54.1% 与次优的 VisualVoice 在可处理子集上的 41.6% ，而 LipVoicer 与 AlignDiT 在噪声下分别高达 92.8% 与 97.0% 。该集上语言模型贡献最大，编辑器因共享其转写而接近本方法，说明唇形不可靠时上下文补偿了视觉缺失。

#### 组件与选择规则消融

为分离各模块贡献，消融固定唇读器为 Auto-AVSR ，比较纯唇读文本、加语言模型文本、无文本生成、两种固定管线与完整自适应选择。下表汇聚 TalkVid 与 VoxMM 的静音恢复率与噪声 WER ，并单列难读集，箭头标明优化方向。

| (a) Components | (a) Components Silenced ↑ Pooled | (a) Components Silenced ↑ Hard | (a) Components Noisy ↓ Pooled | (a) Components Noisy ↓ Hard |
| --- | --- | --- | --- | --- |
| R (text) | 30.7 | 8.6 | 49.4 | 91.4 |
| R→L (text) | 36.2 | 22.4 | 42.8 | 74.5 |
| G without text | – | – | 45.2 | 37.6 |
| R→G | 33.1 | 14.7 | 29.0 | 30.6 |
| R→L→G | 38.6 | 27.6 | 29.5 | 35.2 |
| Selection (ours) | 39.3 | 25.9 | 27.2 | 29.6 |

汇聚静音上 R 文本为 30.7% ，加语言模型后升至 36.2% ，再经生成器达 38.6% ，选择达 39.3% 。难读集上 R 仅 8.6% ，R→L 跃至 22.4% ，表明上下文在视觉失效时主导。噪声汇聚上 R 为 49.4% ，R→G 降至 29.0% ，选择进一步降至 27.2% 。给语言模型加 AV-HuBERT 视素头在验证集上确实用唇特征，但测试集无增益。选择规则去掉投票排除、证据或任一模态证据均在至少一处显著变差，而真值文本下生成器可达 96.6% 恢复率，说明剩余误差主要来自转写而非合成。

除词正确率外，附录用 DNSMOS (语音自然度神经代理指标) 与 UTMOS (同类自然度神经代理指标) 评价自然度，用 ERes2Net 评价音色相似，并做 16 人 120 窗口听测。听者三问均偏好本方法，与 WER 差的 Spearman 相关为 0.71 ，说明 Whisper 评分与人耳一致。AlignDiT 因获干净参考音色在音色与自然度上与本方法持平，但在词正确率上仍落后，这是代理指标与词正确率背离的例子。

### 假设边界、运行代价与工程选型建议

评测限定在 4.8 s 单损坏区窗口，语言模型上下文仅取同窗可听部分，未研究跨窗携带上下文。损坏均为合成以保证隐藏词可评分，虽已扩展到室 tone 、舒适噪声与 40 dB 衰减语音等非数字静音，仍未覆盖丢包、编解码与混响。英语外仅在较小西法语集验证，44 个难读窗口也以英语为主，换语言必须先有该语言唇读器。

方法继承组件上限，整窗被大声巴伯覆盖时结果受限于唇读器，难读静音集上选择有时会跟随错误的唇读假设。静音启动时输入中已无可用音色，生成器只能从外貌推断声音，附录说话人相似度在静音启动窗仅 0.191 ，远低于保留音频窗的 0.727 。听感上自然度与口唇同步接近干净录音，但音色置换是可听代价，输出应标注为修复而非原录音证据。

运行代价上单次 4.8 s 生成约 11 s ，完整选择需跑 6 次生成，静音整窗也需 3 次，另加 Whisper 与唇读器的前后向证据计算，仅适合离线修复。固定单配置 R→L→G 在标准集上接近选择，可作廉价工作点。复现需核对三件事，代码与权重方面原文未披露 RML 自身开源状态，仅说明用了公开 LTX-2.5 、Auto-AVSR 、Whisper large-v3 与 Gemma-4 ，训练约 6 与 5 GPU 小时均在单张 80 GB H100 上完成。试听应重点对比巴伯全覆盖与双词静音两类附录示例，观察缺口接缝与竞争说话人残留。

工程上若任务是离线档案或会议录音修复且有正面唇形，可优先复现 R→L→G 单路并补做非数字缺口检测与 Parakeet 独立评分。若输入多为侧脸遮挡或动画人物，需先验证唇读 N 最佳的信息量，必要时放宽对视觉证据的依赖。任何部署都应标记修复区间并取得被录制者同意，不把重建词当作言论证据。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33117v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：静音混合精确恢复39.3%超越唇读器自身30.7%达8.6个点，换用更强唇读器后43.8%超越35.8%且四列均为最高。

- 核心优势：噪声混合平均WER27.2%大幅低于受损输入69.0%与视频分离基线40.1%，3419样本条件网格自适应选择23.1%优于固定26.8%。

- 核心优势：以相对静音与重复首帧基线的对数似然比证据分加最小贝叶斯风险实现无阈值自适应，干净保留音频整窗强噪声时88%切换静音起点。

- 主要短板：完整自适应选择需6次生成且单次在单张H100上约需11秒，作者明确只适合离线修复而不支持实时应用。

- 主要短板：结论仅在4.8秒单损伤人工合成窗口成立，未覆盖丢包编解码混响与跨窗口传递，难读静音集选择25.9%低于固定27.6%有时跟随错误唇读。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
