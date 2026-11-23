---
title: "When Sounds Turn Heads: Recovering Event Timing That Audio LLMs Fail to Say"
date: 2026-11-20
draft: false
tags: [音频时间定位, 工具增强与约束解码, 注意力机制, 音频大模型]
categories: [论文速递]
description: "针对音频大模型时间戳偏置且漏报的问题，论文用查询跟随挑出 8 个注意力头构造头分布图并重排完整候选区间，在训练后发布的新录音上把录音平均交并比从 0.07–0.36 提升到 0.48–0.56，代价是每次存在判断通过的查询需要额外静音前向与候选似然计算。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25960"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听到却说不出：从注意力头找回音频大模型漏掉的事件时刻"
paper_digest_original_title: "When Sounds Turn Heads: Recovering Event Timing That Audio LLMs Fail to Say"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25960v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25960v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25960v1.pdf"
paper_digest_primary_task: "音频时间定位"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频大模型时间戳偏置且漏报的问题，论文用查询跟随挑出 8 个注意力头构造头分布图并重排完整候选区间，在训练后发布的新录音上把录音平均交并比从 0.07–0.36 提升到 0.48–0.56，代价是每次存在判断通过的查询需要额外静音前向与候选似然计算。"
paper_digest_reader_sections: [{"heading":"问题本质：音频大模型能听出事件时刻却说不准时间戳","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：固定模型下从头分布图到候选重排的无训练解码","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制：跟随查询的注意力头如何被挑出并验证在跟踪声音","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"主实验验证：跨新录音与自由文本查询的时间戳提升在何种条件下成立","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融诊断：增益来自选定的头、静音相减还是完整候选重排","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"边界与复现：何时值得尝试、第一步做什么与还缺哪些验证","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jongbhin Woo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jaewook Jeong"},{"affiliations":["KAIST"],"name":"Joon Son Chung"}]
paper_digest_abstract_sha256: "b2f927ab2c7681a1f638cc684935df7f00f4996854e81e5e91459dad726c74c2"
paper_digest_sidecars: {"citation.bib":{"sha256":"c5f451c705d805f9710c39d3d36352e038c5317bab39ca802f0947ac95ec50d0","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25960/citation.bib"},"citation.json":{"sha256":"1cb24214014610d764aadd30a4a7d0433f16bda3652a26e20618f7f6732a5212","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25960/citation.json"},"citation.ris":{"sha256":"01e77b26ef0d30f4302fbb95a586f3c16acaa796861992b570b9be6f68996452","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25960/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e03fbb7135831b7d0e9d9a1a77068b0e91b3c63ffe0ed210db2db0e99f3bfd19","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25960/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "a8ccc391e4ab79bc8819e3ba651f055d24617defde28c6c01fe44e6889731e14"
paper_digest_api_reader_plan_sha256: "f5be3aa9e95546882853a9d3bf6956a996faf4a5280b14cbb7ef90e9694eb2aa"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ad576fbf19211985e914c754a66ca24aef8ac74fe098945de42be2bda2d69188"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "71592cf70840fc47462914d55a3f11a916dd01c914d544c7619e05e5acf6471e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5ff88415e6daccd6eab41d34ac25357726a1ad53e472ac980b8a0c7cb75def30"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c35605f6f43821d17c0fa13f8a31fe282b6bcf5da772b6d496cb745864f6302f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 听到却说不出：从注意力头找回音频大模型漏掉的事件时刻

> 英文题目：*[When Sounds Turn Heads: Recovering Event Timing That Audio LLMs Fail to Say](https://arxiv.org/abs/2611.25960v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-paper-digest-blog/papers/?concept=task.temporal-grounding)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)；[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jongbhin Woo：机构信息未能在本次解析中与作者逐人可靠绑定
- Jaewook Jeong：机构信息未能在本次解析中与作者逐人可靠绑定
- Joon Son Chung：KAIST

## 📌 核心摘要

**问题与瓶颈：** 给定一段录音和一句指明目标声音的文字查询，音频时间定位要求输出该声音在音频中的起止区间集合，若不存在则返回空。现有音频大模型能辨认声音类别，却给出偏置的时间戳，在比较起始、结束与持续时长的问题上频繁出错。论文指出这类错误可能来自两个环节，一是模型内部根本没有记录时间，二是记录了时间却没有在文字答案中表达出来。区分这两种情形需要直接检查模型内部注意力指向何处，并与最终生成的时间戳对比。

**核心思路与方法架构：** 核心直觉是少数注意力头已经跟踪被查询的声音，可以用它们的位置证据纠正答案而不改动模型权重。沿一个 30 s 录音和查询走一遍，模型先把音频切成每 40 ms 一个位置的序列，查询文字的最后一个词元向音频投射注意力。研究先在 23 段开发录音上按查询跟随度选出 8 个头，再把这些头在真实输入与等长静默输入上的注意力相减并保留正部，按集中程度加权平均得到沿时间的位置图。解码时保留模型对声音是否存在的存在门判断，对原答案外加 0.5 s 网格上的全部单区间候选，用候选文字似然与位置图先验的加权和重排，输出得分最高的区间。全程冻结权重，无需训练。

**关键实验与核心代价：** 在 UnAV-100 预留集上，以 recording mIoU（录音平均交并比）为指标，三台主力模型的模型原答案为 0.210、0.069、0.092，头引导解码提升到 0.346、0.235、0.350，高于已调优的匹配随机头引导的 0.276、0.132、0.271。在训练后发布的家庭录音 RealDESED 上，以同一指标计，头引导解码得 0.533、0.480、0.559，高于模型原答案的 0.359、0.066、0.108，也高于随机头引导的 0.452、0.278、0.268，头特异增益为 +0.081 至 +0.291。头直接读出在预留集上已从 0.210、0.069、0.092 升到 0.327、0.213、0.311，说明计时信息在内部已存在。在 AudioGrounding 自由文本的全部模型与全量和短事件人群上，以 query-mean union IoU 计，完整方法均高于原答案与似然选择。消融显示头先验承担主要收益，单头使 RealDESED 下降 0.074、0.117、0.086，去掉静默相减使 Qwen2-Audio 下降 0.121。代价是候选数随音频时长平方增长，存在门开启的查询在 RealDESED 上中位数多花 12.35 - 22.20 个 GPU 秒，且仍需注意力读取与标注开发集。

**适用边界与深读导览：** 该结论仅在 30 s 裁剪中时长 1 - 10 s 的单发事件与短片段上得到验证，长录音尚未检验，候选数随音频时长平方增长也限制长时部署。方法只重排单区间候选并保留模型判为缺席即返回空的存在门，因而无法恢复被判为缺席的声音，在 Gemma-4 与 Voxtral-Mini 上头部事件富集更低，相对随机头引导的优势很小、消失甚至为负，原文强调该关联仅为描述性且五模型无法分离编码器成因。若需深究，可按需查阅下方长文对应章节，查询跟随与搬移检验见前半方法验证，位置图构建与先验加权公式见后半方法描述，主结果与消融见结果对比表格，网格与权重调参见复现说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：音频大模型能听出事件时刻却说不准时间戳

给定一段录音和一句声音查询，时间定位要回答查询的声音在何时出现，输出通常是一段或多段时间区间。这个能力支撑音频检索与索引、家庭监测、视频剪辑与字幕等任务，近期工作在音频大模型上训练并评测这类提问。已有评测发现，音频大模型能认出声音类别，但给出的时间戳存在偏置，比较开始时刻、结束时刻与持续时长的问题也容易答错。理解这种错误来自没有听出时刻，还是听出却没有说出，直接决定后续应该改进听觉编码还是改进表达与解码。

本文研究的对象是 5 种音频大模型，重点是 Qwen2.5-Omni、Qwen2-Audio 与 Audio Flamingo 3，另外用 Gemma-4 与 Voxtral-Mini 检验结论的外延。作者先在音频固定而查询更换的条件下挑出注意力头，再把声音搬移到新位置检验跟踪，接着用阻断与置零检验这些头是否影响时间戳，最后比较头的直接读出与模型回答，并提出不需要训练的头引导解码。注意力头在这里指模型内部负责在不同位置间分配关注权重的计算单元，它的权重可以显示每个查询词位在音频上的落点。

下面这张示意把听出与说出的差距落到一个具体录音上，上方是频谱与时间轴上的标注、模型回答、头分布与头引导结果，下方是 3 种主模型在训练后发布的新录音上的整体对比，可以先看时间位置再看整体趋势。

[![原论文 Figure 1：Heard but not said. Top: on one recording, the attention of Qwen2.5-Omni’s selected heads peaks…](https://arxiv.org/html/2611.25960v1/f1_teaser_drawn.png)](https://arxiv.org/html/2611.25960v1/f1_teaser_drawn.png)

*论文图 1：Heard but not said. Top: on one recording, the attention of Qwen2.5-Omni’s selected heads peaks inside the skidding sound, but the model’s answer misses it（原论文 Figure 1）。*

上方处理一段 30 s 录音，查询为打滑声何时出现，人工标注为 11.24–19.89 s，Qwen2.5-Omni 模型的回答为 10.0–10.5 s，交并比为 IoU 0.00，完全落在标注之外，而选定头的分布峰值落在标注内部，头引导解码给出 14.0–18.0 s，交并比为 IoU 0.46，把答案移回标注内。交并比衡量预测区间并集与标注区间并集的重叠程度，录音平均交并比先在每段录音内求并集交并比再按录音平均，数值越大表示时间越准。下方在模型训练后发布的家庭录音上，头引导解码的录音平均交并比高于模型回答，也高于随机头对照，相关设置只在 UnAV-100 开发集上调好后原样迁移，提示部分时间误差更像没有说出而不是没有听出。

### 方法全景：固定模型下从头分布图到候选重排的无训练解码

头引导解码不更新任何模型权重，它保留模型关于声音是否存在的判断，只改变存在时区间的落点。设计围绕音频时间定位的 3 个特点展开。第一，注意力头即使面对静音输入也会在音频位置上分配关注，需要减去这部分与内容无关的基线。第二，查询的声音可能根本不存在，不能强行输出区间。第三，声音在几十秒输入中只占很短一段，不能通过裁剪改变输入与时间轴，也不宜在生成过程中偏置注意力而停留在原答案附近。因此做法是在输入不变的前提下，对完整候选区间重新打分。

沿一个具体输入走一遍，输入包括 30 s 真实音频、查询文本何时出现打滑声，以及一段等长全零静音。固定不变的音频大模型同时处理真实输入与静音输入，取出 8 个选定头在查询事件标签末词位上对音频的关注。真实与静音的关注相减并归一化后按集中程度加权平均，得到覆盖全部音频分块的时间分布，也就是头分布图。候选集合由模型自己的回答加上端点落在 0.5 s 网格上的全部单个区间组成，每个区间长度至少 0.5 s，并写成与模型回答相同的文本格式。每个候选同时计算模型赋予回答文本的似然与来自头分布图的头先验，加权相加后取最高者。若模型原回答不含有效区间则直接返回无区间，否则返回最高分候选的解析区间。

下图把固定模型、静音相减、集中加权与候选重排的连接画了出来，左侧是输入与选头来源，中间是分布图构造，右侧是打分与存在判断，可以沿箭头走一遍数据流向。

[![原论文 Figure 4：Overview of head-guided decoding.](https://arxiv.org/html/2611.25960v1/f1_head_guided.svg)](https://arxiv.org/html/2611.25960v1/f1_head_guided.svg)

*论文图 4：Overview of head-guided decoding. Heads selected by query swap before evaluation give a head map p from real-minus-silent attention (steps 1–2)（原论文 Figure 4）。*

左侧查询、真实音频波形与等长静音一同进入固定的音频大模型，底部是在开发录音上预先用查询更换挑出 8 个跟随命名声音的头。中间先分别得到真实关注与静音关注，相减取正部并重新归一化，再按集中权重求和得到头分布图。右侧把模型自己的回答与 0.5 s 网格区间一同打分，每行同时列出对数似然、加权头先验与总分，存在判断门把原回答为无区间的情况直接保留为无区间，有区间时才输出头引导后的区间，底部对比模型回答、头引导结果与人工标注的相对位置。图中分布、波形与头示意均为示意，不代表真实数值形状。

分布图要把真实输入多出来的关注留下来，并让更集中的行占更大权重，做法写成下面这组归一化与加权平均。

\[\begin{split}b_{hr}&=\frac{[a^{x}_{hr}-a^{0}_{hr}]_{+}}{\lVert[a^{x}_{hr}-a^{0}_{hr}]_{+}\rVert_{1}},\\ p&=\textstyle\sum_{h,r}w_{hr}\,b_{hr},\end{split}\]

这里 \(a^{x}_{hr}\) 与 \(a^{0}_{hr}\) 分别表示选定头 \(h\) 在标签行 \(r\) 上对真实音频与静音音频的关注向量，都在排除开头两个位置后按音频分块重新归一化。相减后取正部可以去掉静音也有的基线关注，只保留真实声音带来的增量，再按向量和归一化为 \(b_{hr}\)。采用这种形式是因为头即使没有声音也有位置偏好，直接平均会被基线淹没。权重 \(w_{hr}\) 与 \(1-H(b_{hr})/\log N\) 成正比，\(H\) 为熵，\(N\) 为音频分块数，分布越集中熵越小权重越大，接近均匀分布时权重趋近于零。加权平均后的 \(p\) 即为头分布图，后续直接决定每个候选区间能拿到多少分布质量。

有了分布图，每个完整候选区间要得到一个结合模型看法与头部证据的分数，权重由引导强度控制，形式如下。

\[s(c)=\log p_{\theta}(c\mid x,q)+\lambda\log\pi(I_{c}\mid x,q),\]

其中 \(c\) 为候选回答文本，\(I_{c}\) 为其解析出的区间并集，\(p_{\theta}(c|x,q)\) 为模型参数 \(\theta\) 下对该回答文本的概率，\(\pi(I_{c}|x,q)\) 为头先验给出的兼容分数，不要求归一化。对数相加对应概率相乘的直觉，引导权重 \(\lambda\) 控制两者平衡。\(\lambda\) 为零时退化为只按似然选择，取无穷时只按头先验排序。得分最高的候选成为输出，这种形式允许超出分布图阈值区域的边界参与比较，而不只是返回分布图切出的区域。

头先验要奖励覆盖高分布质量的候选，同时惩罚过长区间，否则整段音频总能拿满分布质量，形式如下。

\[\log\pi(I)=\log(\epsilon+\mathcal{M}(I))-\gamma|I|/S.\]

其中 \(\mathcal{M}(I)\) 为分布图在区间 \(I\) 内的求和，\(|I|/S\) 为区间并集占真实音频时长 \(S\) 的比例，\(\gamma\) 控制长度惩罚强度，\(\epsilon\) 为避免对零取对数的正偏移。因为 \(p\) 在全部音频上归一化，整段音频必然收集全部质量，若无惩罚则 \(\gamma\) 为零时任何短区间都无法超过全长区间。惩罚项使过长区间被扣分，短而准的区间在质量足够时可以胜出。计算出的对数先验再乘以 \(\lambda\) 与似然相加，共同决定最终区间。

### 核心机制：跟随查询的注意力头如何被挑出并验证在跟踪声音

要在众多头中找到跟踪查询声音的少数头，做法是固定音频而更换查询。取同一段 30 s 裁剪中各出现一次的两个不同事件，记标注区间为 \(I_{A}\) 与 \(I_{B}\)，查询分别为 \(q_{A}\) 与 \(q_{B}\)。从查询事件标签的末词位出发，测量头 \(h\) 落在音频上的关注中有多大比例进入某个区间，记为 \(m_{h}(I|q)\)，跨越区间边界的音频分块按重叠比例计入。查询跟随用来量化这种偏好，首次出现时可以理解为每个事件被查询时比被另一个事件查询时多获得多少关注，数值越大表示越跟随查询。

\[\begin{split}\operatorname{QF}_{h}=\tfrac{1}{2}\big[&m_{h}(I_{A}\mid q_{A})-m_{h}(I_{A}\mid q_{B})\\ +&m_{h}(I_{B}\mid q_{B})-m_{h}(I_{B}\mid q_{A})\big].\end{split}\]

上式对两个事件各算一次查询时与非查询时的关注差再平均，正值表示平均而言每个事件在被查询时获得更多关注。若头完全不理会查询文本，两项差值趋近于零，若头稳定指向被查询事件，差值为正且越大表示跟随越强。作者在 23 段 UnAV-100 开发录音上计算平均查询跟随，取最高的 8 个头作为选定头，并在全部数据集上原样复用。匹配随机头对照在数量、层分布与开发集上测得的音频关注量上与选定头对齐，用来排除头数量或位置带来的偶然优势。Qwen2.5-Omni 与 Audio Flamingo 3 因共用同一语言模型，有 6 个选定头重合。

下图用 Qwen2.5-Omni 展示更换查询与搬移声音时的关注变化，上方为平滑后曲线，下方为未平滑占比，虚线为一组匹配随机头对照，可以先看选定峰值是否换位再看随机对照是否跟随。

[![原论文 Figure 2：Selected heads follow the query and a moved sound (Qwen2.5-Omni).](https://arxiv.org/html/2611.25960v1/f2_query_event_tracking_drawn.svg)](https://arxiv.org/html/2611.25960v1/f2_query_event_tracking_drawn.svg)

*论文图 2：Selected heads follow the query and a moved sound (Qwen2.5-Omni). Top: curves smoothed for display (\sigma=0.8 s). Bottom: unsmoothed shares; dashed: one matched random head set（原论文 Figure 2）。*

左侧固定声音而更换查询，查询打滑声时选定头的关注峰值进入打滑声区间，查询笑声时峰值进入笑声区间，下方各区间内的关注占比随查询切换而换位，匹配随机头对照的变化幅度明显更小。右侧在合成混合中搬移一个事件，被查询固定时选定头在目标新位置的关注上升，在原位置的关注下降，仅更换背景的对照交换几乎不带来这种增益，查询另一个事件时也不会在目标位置形成峰值。下方的目标增益与原位置损失在 5 个模型上都超过随机对照的较高分位，目标与背景的交互比较进一步排除了单纯由搬移操作引入背景变化的解释。

跟踪只能说明头在看哪里，还需检验时间戳是否依赖这些头。阻断选定头对目标事件的关注后，正确区间相对同录音另一事件区间的对数概率优势下降幅度，在 5 个模型上都大于阻断匹配随机头时的下降。把选定头输出置零并重新生成时间戳，相对层匹配的随机头移除，主模型 11 组比较中有 10 组录音平均交并比更低，其中 7 组的配对区间落在零以下。在 UnAV-100 开发录音上，选定头在标注区间上的富集程度为主模型随机头对照的 1.59–1.66 倍。干预结果支持这些头参与了时间戳形成，但作者也明确指出，干预没有分离时刻、事件身份与答案生成，Qwen2.5-Omni 的阻断超出量与 Audio Flamingo 3 的一组随机对照相比没有达到统计意义上的显著。

### 主实验验证：跨新录音与自由文本查询的时间戳提升在何种条件下成立

评测把选头与解码设置固定后再看迁移。每个模型的头固定后，解码器与先验超参数含引导权重在 UnAV-100 开发录音上选定，在留出 UnAV-100 录音上评测为分布内检验，原样迁移到 RealDESED 家庭录音。RealDESED 输入为 30 s 窗口，不足时末尾补齐，解码按补齐时长进行，全部答案在评分前裁剪到真实音频。AudioGrounding 则在其 v1 训练片段上重新选择超参数，再到 v1 与 v2 测试集评测自由文本查询，含全部查询与短事件子集。指标为预测区间并集与标注区间并集的交并比，在 UnAV-100 与 RealDESED 上按录音平均得到录音平均交并比，在 AudioGrounding 上按查询平均得到查询平均并集交并比，目标存在而模型无区间或无法解析时记零。差异是否显著按配对自助 95% 区间是否排除零判断，不做多重比较校正。对照包括只按似然选择、对照静音输入的音频感知解码、对照加噪输入的对比解码、分别调参的随机头引导中位数，以及在选定头上移植视频头读出思路的版本，全部方法共享存在判断门，只比较存在时区间的落点。

先看混合留出集上只读头分布而不改存在判断时，边界替换能把录音平均交并比带到什么位置，比较口径是同一模型与同一存在判断，只更换边界，指标越大越好。

| 模型 | 模型回答（录音平均交并比） | 头直接读出（录音平均交并比） |
| --- | --- | --- |
| Qwen2.5-Omni（7B） | 0.210 | 0.327 |
| Qwen2-Audio（7B） | 0.069 | 0.213 |
| Audio Flamingo 3（8B） | 0.092 | 0.311 |

3 模型在混合留出集上都从较低起点明显上移，起点最低的 Qwen2-Audio 相对幅度最大，而原本回答最强的模型绝对值仍然领先。开发集与 UnAV-100 第一样本上，主模型中有 2 模型超过全部 210 组匹配随机头集合，3 模型在未经重调的 RealDESED 上也高于模型回答，说明分布图本身已含有可用的时刻信息，存在判断门保留了模型关于有无的决定，边界替换没有引入新的存在误判。

下图把头读出正确而模型回答错误的占比单独列出，实心为选定头，空心为 10 组匹配随机头的中位数，三角为回答正确而头读出错误的反向情形，可以先看实心与空心的差距再看三角是否贴近零。

[![原论文 Figure 3：Knowing but not saying. Share of answered positive queries on which the head readout is right (IoU…](https://arxiv.org/html/2611.25960v1/f3_direct_readout_examples_drawn.svg)](https://arxiv.org/html/2611.25960v1/f3_direct_readout_examples_drawn.svg)

*论文图 3：Knowing but not saying. Share of answered positive queries on which the head readout is right (IoU \geq0.5) but the model’s answer is wrong (IoU <0.1): filled circles for the…（原论文 Figure 3）。*

在模型给出区间的存在查询中，头直接读出正确而模型回答错误的情形，选定头在 RealDESED 上的占比为 15.9%、35.4% 与 31.0%，对应随机头对照为 9.8%、19.8% 与 10.2%，3 模型都更高。混合留出与家庭录音共 6 个模型与数据集组合的配对区间都落在零以上，反向情形始终在 2% 及以下。这组对比说明头保留了答案没有用足的时刻信息，并能找回一部分被模型时间戳漏掉的事件，而不是用新的错误替代原有正确。

头引导解码在主表全部基准上都高于模型回答，在训练后发布的录音上把录音平均交并比从 0.07–0.36 提升到 0.48–0.56，在每个群体上都显著高于只按似然选择，在多数设置下显著高于随机头引导，在 18 个对比解码格子中有 15 格显著高于已发表的无训练对比解码。在留出 UnAV-100 上，3 模型都显著高于模型回答、似然选择与随机头引导。在家庭录音上随机头引导本身已高于模型回答，因此与随机头引导的差值才是选定头特有的增益，范围从 Qwen2.5-Omni 的 0.081 到 Audio Flamingo 3 的 0.291。在自由文本上，头引导解码在每个 AudioGrounding 群体上显著高于似然选择，在两版短事件与 v2 全部查询上显著高于随机头引导，未能超过模型回答与已发表基线的例外集中在回答原本最强的 Qwen2.5-Omni 上。

下面检验补齐输入是否在暗中解释增益，比较同一模型回答在原生长度与 30 s 补齐下的录音平均交并比，口径与主实验一致，指标越大越好。

| 模型 | 原生长度模型回答（录音平均交并比） | 补齐后模型回答（录音平均交并比） |
| --- | --- | --- |
| Qwen2.5-Omni（7B） | 0.376 | 0.359 |
| Qwen2-Audio（7B） | 0.063 | 0.066 |
| Audio Flamingo 3（8B） | 0.143 | 0.108 |

原生与补齐的差值远小于头引导解码带来的上移，Qwen2-Audio 与 Audio Flamingo 3 的回答本身很低，补齐没有系统性抬高或压低到可解释增益的程度。AudioGrounding 共用 30 s 补齐输入，Audio Flamingo 3 的 v1 全部查询回答因此从 0.495 降到 0.289，这部分输入变化的影响在解读自由文本结果时需要单独考虑，不能把补齐前后的数字直接对比。

### 消融诊断：增益来自选定的头、静音相减还是完整候选重排

增益来源从三处拆开检验，用哪些头、分布图如何构造、头信息如何使用。用标签直接指定的头代替查询跟随选头时变化很小，单个头在 3 模型上都更低，4 个与 16 个头与 8 个头接近，调参后的随机头明显更低。去掉静音相减对 Qwen2-Audio 在家庭录音上的影响达到负 0.121，说明基线关注不可忽略。只做分布图阈值切分而不重排完整候选的移植版本停留在模型回答附近，说明重排完整候选才是关键。在开发集交叉验证中，30 组匹配随机头集合都低于选定头。

下面聚焦 Qwen2.5-Omni 在家庭录音上的 3 种使用方式，比较口径同为保留存在判断门下的录音平均交并比，指标越大越好，可以先看头读出与重排的差距再看仅头先验是否需要似然。

| 方法 | 录音平均交并比 |
| --- | --- |
| 头直接读出 | 0.485 |
| 头引导解码 | 0.533 |
| 仅头先验排序 | 0.570 |

完整重排同时高于头直接读出，仅按头先验排序同样高于头直接读出，在 UnAV-100 与家庭录音上仅头先验从不显著差于完整方法，说明在这两类数据上头先验承载了主要增益。有限权重的重排在家庭录音上每个存在判断通过的查询中位数增加 12.35–22.20 GPU-s 开销，而仅头先验不需要计算候选似然。在 AudioGrounding 上加入似然则在全部查询与单区间子集的 9 格中带来 0.022 到 0.080 的显著增益，提示在自由文本下似然提供了分布质量与时长之外的信息。

头在何时帮忙可以从另外 2 模型看出。Gemma-4 与 Voxtral-Mini 的头直接读出在每个群体上也高于模型回答，例如家庭录音上分别从 0.044 到 0.069 以及从 0.013 到 0.126，但头引导解码相对随机头引导分别只在 7 个群体中的 3 个与 0 个上显著。主模型在事件上的集中倍数更高，而后 2 模型集中程度较低，这种伴随关系只是描述性关联。存在检测的平衡准确率上后 2 模型接近 Audio Flamingo 3，用正确存在判断替换门控后，后 2 模型的头读出在开发集上接近随机头，在家庭录音上 Voxtral-Mini 高于随机头。主模型共用源自 Whisper 的音频编码器，每音频位置对应 40 ms，仅凭 5 个模型无法分离出成因。

### 边界与复现：何时值得尝试、第一步做什么与还缺哪些验证

结论的适用边界首先来自数据与候选形式。UnAV-100 与 RealDESED 查询为 30 s 裁剪中出现一次的 1–10 s 事件，AudioGrounding 片段较短，更长录音尚未检验。头引导解码只评单个区间候选，候选数随 duration 平方增长，长音频需要新的候选构造。方法保留模型关于是否存在的判断，模型报告为不存在的声音无法被找回。实现需要读取注意力权重与小规模已标注开发集，没有这两项信息条件无法复现选头与调参。干预没有分离时刻、事件身份与答案生成，阻断实验在部分对照上没有达到显著，不能据此宣称注意力单独解释了预测。

复现第一步是做出查询跟随选择。在 UnAV-100 开发集中取 23 段录音，每段固定音频并更换查询，计算每个头在被查询时比被另一查询时多出的音频关注比例，取平均最高的 8 个头并冻结。随后对每条待测音频构造等长静音，用真实减静音、取正部归一化与熵集中加权得到头分布图，在开发集上调定引导权重、长度惩罚与偏移，再用 0.5 s 网格生成候选并保留存在判断门，按录音平均交并比与查询平均并集交并比评分，用配对自助区间判断差异。全程不训练，模型权重不变。本次证据未发现可验证的作者资源可用性记录，因此本文对涉及代码、模型与数据的来源状态不作任何肯定性判断。

何时值得尝试可以按顺序判断。若模型已能判断声音是否存在但时间戳偏置，且可以读取注意力并备有少量已标注开发集，优先尝试头直接读出检验分布图是否已含时刻，再过渡到完整重排或更省的仅头先验排序。需要补的验证包括长录音与多事件、重叠事件、其他音频编码器，以及误判率、延迟与计算预算的实测，现有总体趋势不能推广到每一组结果。更好的时刻定位若未经同意部署可能支持侵入式音频监测，且在标注缺失时仍会出错，不适合作为安全或重大决策的唯一证据，复用音频时应遵守来源数据集条款与被记录者权利。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25960v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
