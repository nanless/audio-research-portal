---
title: "From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models"
date: 2026-11-20
draft: false
tags: [音频字幕生成, 表示探测, 检索增强, 幻觉与忠实度]
categories: [论文速递]
description: "针对大音频语言模型编造输入中不存在的声音事件的问题，本文用高度关注音频位置的潜在文本语义检索估计每个事件的支持度并做差异化静音遮蔽，在三个模型与两个数据集上改善了幻觉检测与抑制效果，同时付出两次生成与白盒注意力读取等代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25789"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从注意力到语义：检测并抑制大音频语言模型的声音事件幻觉"
paper_digest_original_title: "From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25789v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25789v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25789v1.pdf"
paper_digest_primary_task: "音频字幕生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对大音频语言模型编造输入中不存在的声音事件的问题，本文用高度关注音频位置的潜在文本语义检索估计每个事件的支持度并做差异化静音遮蔽，在三个模型与两个数据集上改善了幻觉检测与抑制效果，同时付出两次生成与白盒注意力读取等代价。"
paper_digest_reader_sections: [{"heading":"问题本质：为什么音频注意强度分不清真实与幻觉事件","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一次音频描述如何走通先检测后遮蔽","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制：高度关注位置的语义支持如何被检索与计票","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"主实验验证：语义支持检测与差异化遮蔽在何种分布下同时改善抑制与保留","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"敏感性诊断：阈值选择与幻觉稀疏程度如何改变优劣判断","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界与复现判断：什么时候值得尝试以及还缺什么验证","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Tianyi Sun"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Minghao Lv"},{"affiliations":["Guangdong OPPO Mobile Telecommunications Corp., Ltd."],"name":"Chunyang Yu"},{"affiliations":["Guangdong OPPO Mobile Telecommunications Corp., Ltd."],"name":"Shenyue Wang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Mengyue Wu"}]
paper_digest_abstract_sha256: "59a862bdb2cb5770a40f3d5649c5c6e90ffed9d67ae7da190752fa3e6bf3169b"
paper_digest_sidecars: {"citation.bib":{"sha256":"c45fb7153ba6e47162c6e95cefd3e73f61838e54b0479d5c3099acb9604e2f38","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.bib"},"citation.json":{"sha256":"c384f3af3ece33e550e2bc1f2be1d86563079e33fc0585a113e11ec1df664aba","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.json"},"citation.ris":{"sha256":"261f6bc0400ab4ae3a5042ad45f783465b311974f1b232f7698081d33c43897f","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d129dd99a7fd985e682a910d0a747e97474bb64c8700b52be2a5b5cb833fb62c","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "deeb7d9d54cc6ae226586f1d499cd01631379116e5a8b195610f0acf7fa89e24"
paper_digest_api_reader_plan_sha256: "52d682a16de4359cc4de7abb58b3197e80a877da9867827e9ab21976fd69a62f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8079d68670aa28d661e691a6f07f877d6a8e108ab0ac6dbb7f74a327a6a6f4f9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "0fd4005b704958d3272321da2be65918f3712c3661ea12e801c12866007ec16a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1d1196d84ddfd3a81c6e7c2505857acccbc36fd76dcb1abf4993c77ca4a46879"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9488a104668855eb19d63858ff19e7d5973dad7bda68659dc764f6b169ac7677"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 从注意力到语义：检测并抑制大音频语言模型的声音事件幻觉

> 英文题目：*[From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models](https://arxiv.org/abs/2611.25789v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)；[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Tianyi Sun：Shanghai Jiao Tong University
- Minghao Lv：Shanghai Jiao Tong University
- Chunyang Yu：Guangdong OPPO Mobile Telecommunications Corp., Ltd.
- Shenyue Wang：Guangdong OPPO Mobile Telecommunications Corp., Ltd.
- Mengyue Wu：Shanghai Jiao Tong University

## 📌 核心摘要

**问题与瓶颈：** 大音频语言模型（Large Audio-Language Model, LALM）把音频编码器输出经连接模块变为音频词元，再与系统词元和文本词元拼接后送入语言模型，以自回归方式生成对输入的自然语言描述，其中声音事件幻觉指描述中出现输入音频并不包含的声音事件。已有工作把幻觉归因于音频注意力不足，并试图在解码时放大音频证据，但论文在 495 个 AudioCaps 验证片段上的分析显示，真实事件与幻觉事件在音频注意力阶段的注意力总量相近，事件级注意力图却集中在不同音频位置，只看总量无法区分两者。

**核心思路与方法架构：** 核心直觉是检查被高度关注的音频表征在语义上是否支撑所生成的事件。一个样本的处理过程是音频波形经编码得到 N 个音频词元，模型生成描述后，用其文本语言模型在无音频条件下抽取事件短语并映射到本体词汇，得到事件标签与词元跨度，再在所选连续解码层内对多头与事件词元平均注意力，每层取出最受关注的 3 个音频位置。被选位置的隐藏状态作为查询，在由文本语料经冻结文本语言模型离线建成的参考库中检索最近邻语境化文本表征，主实验使用跨层检索，同一语言模型把检索语境再映射为本体标签，若存在完全相同或祖先与后代关系则该层位置记一票，加总得到语义支撑得分，低于阈值 K 即判为幻觉。缓解时先把预测为有支撑事件的最受关注的 10 个位置列为保护集，再为每个预测幻觉事件在其注意力排序中跳过保护集补足 10 个待屏蔽位置，映射为均匀时间窗后将波形置零并用原提示贪心再生，若无预测幻觉则保留原回答，全程不更新任何参数。

**关键实验与核心代价：** 评测使用 AudioSet Strong 评测划分与 DCASE2019 的 fbsnr_30dB 子集，在 Audio Flamingo 3、Qwen2.5-Omni-7B 与 Step-Audio 2 mini 上进行，每个数据集先用 200 个片段选参，再为检测与缓解分别抽取 500 个片段。检测以幻觉为正类，报告精确率、召回率、F1 与 PR-AUC，本文方法在全部 3 个模型与 2 个数据集的事件级与样本级 F1 均为最高，以 Audio Flamingo 3 在 AudioSet Strong 的 500 个检测片段为例，事件级 F1 为 0.7466，高于最强可比基线 Perplexity 的 0.5992，样本级 F1 为 0.7897，高于最强可比基线 RAUQ Entropy 的 0.7067，对应 PR-AUC 分别为 0.7944 与 0.9096。缓解报告 ECHO-I 与 ECHO-S 越低越好、Coverage 越高越好，在 AudioSet Strong 上三款模型均取得最低幻觉率，例如 Audio Flamingo 3 的 ECHO-I 为 14.9%，ECHO-S 为 23.0%，Coverage 为 34.1%，Qwen2.5-Omni 的三项为 21.4%、37.0% 与 38.6%。主要代价是需要保留注意力与隐藏状态并做两次生成加检索，语义得分是离散投票，精度召回曲线呈阶梯状，且 Step-Audio 2 mini 在 AudioSet Strong 样本级 PR-AUC 为 0.6170，略低于 RAUQ Entropy 的 0.6191。

**适用边界与深读导览：** 结论成立依赖模型相关的音频注意力阶段窗口、本体匹配规则与按数据集调定的检索数和阈值，未映射事件不评分，屏蔽宽度对 Step-Audio 2 mini 需减半，对长音频、其他提示词与未覆盖本体外的描述尚未验证。若想核对注意力总量与位置分离的证据可看第 3 章分析，若想复现投票与差分屏蔽的计算可看第 4 章与附录 A.1 至 A.2 的公式与参数表，若想判断阈值稳定性可看附录 A.4 至 A.5 的敏感性与屏蔽消融。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：为什么音频注意强度分不清真实与幻觉事件

大音频语言模型把音频编码器与语言模型拼接起来，能用统一框架处理语音、环境声与音乐。输入是一段音频与一句文字提示，例如请描述这段音频，输出是一段自由文本，其中提到多个声音事件。论文把听起来合理但输入里并不存在的事件称为声音事件幻觉，并指出在自动驾驶与音频健康监测这类需要可靠听觉感知的场景里，这种编造会带来实质风险。理解幻觉需要回到事件层面，模型到底是根据哪段音频说出每个事件的，证据是否真的支持这个说法。

此前的解释把原因归于音频注意不足，认为文字提示压过了声音证据，缓解思路是在推理时加大音频权重，例如对比有无音频条件的 AAD 与对音频做平滑的 TCD，检测思路则直接利用注意力模式。论文首先复现了这类分析，在 495 个 AudioCaps 验证片段上，用描述提示记录解码器每一层的注意力，并用模型自身的语言模型抽取事件并对齐到参考描述，再按事件核心词平均注意力。结果显示音频注意力在中间层形成连续峰区，真实与幻觉事件的平均音频注意强度接近，只看总量分不开两者，这说明需要追问模型在总量相近时究竟看向了哪里。

要理解总量相近但位置分开的现象，可以先看注意力随层变化与具体时刻热图的对应关系，下图把层级分配、平均强度与真实事件和幻觉事件在不同层的关注位置放在同一案例里呈现。

[![原论文 Figure 2：A typical case with audio attention analysis.](https://arxiv.org/html/2611.25789v1/figure1.png)](https://arxiv.org/html/2611.25789v1/figure1.png)

*论文图 2：A typical case with audio attention analysis（原论文 Figure 2）。*

图中左上按解码层展示了分配给音频特征、文字提示与已生成历史的比例，中间阴影标出音频注意力阶段，Audio Flamingo 3 对应第 15 层至第 22 层。左下方柱状对比了该阶段内真实与幻觉事件的平均音频注意占比，分别为 34.64% 与 30.08%，两者处于相近量级，误差线为 95% 自助置信区间，两柱误差线之间存在明显间隙并未重叠。右侧给出同一条回复的梅尔频谱与参考标注，以及真实的水流声与幻觉的山羊叫在第 15 层、第 19 层与第 21 层的热图，所有热图都裁到 2 秒窗口展示，虚线框标出各自最关注的位置。可以看到两者关注的时间段明显错开，强度相近并不意味着依据相同，这就把问题从注意多少推进到注意到的表征在语义上是否支持当前事件。

位置不同本身还不能定罪，关键是被关注的音频表征到底在说什么。如果被关注的表征在语义上与事件一致，关注就是有依据的，如果语义对不上，关注再强也可能是编造。下一节的方法正是沿着这条线索，把注意力定位与潜在语义检索结合起来，先判断每个事件是否得到支持，再决定遮蔽哪里并重新生成。

### 方法全景：一次音频描述如何走通先检测后遮蔽

沿着水流声与山羊叫的例子走一遍完整流程最直观。原始音频里有人群说话与多段水流声，模型初次生成提到人群说话、水流与背景里的山羊叫，其中山羊叫没有参考支持。框架保留这次生成时的注意力权重与音频隐状态，然后用模型自身的文本语言模型在不听音频的情况下抽取事件短语并映射到本体词表，得到每个事件的标签与对应的生成词位置。未映射的描述不参与评分，避免把无法对齐的措辞硬判为对错。

下图给出了先检测后缓解的总体分工，从左到右依次是按事件定位音频表征、按表征检索文本语义并累加支持度、按预测结果做差异化遮蔽并重新生成，箭头标明了注意力、隐状态与文本库在不同阶段的流向。

[![原论文 Figure 4：Overview of our detect-then-mitigate framework.](https://arxiv.org/html/2611.25789v1/main.png)](https://arxiv.org/html/2611.25789v1/main.png)

*论文图 4：Overview of our detect-then-mitigate framework（原论文 Figure 4）。*

左路按事件平均多头与多词的注意力，在音频注意力阶段的每一层挑出最关注的少量音频位置，取出对应隐状态作为检索查询。中路离线建好文本参考库，把 WavCaps 的文字描述送入冻结的文本语言模型，缓存各层的文本词状态与上下文，检索时找余弦最邻近的上下文并映射回本体标签做是否匹配的投票。右路把事件分成预测受支持与预测幻觉两组，先保护受支持组最关注的位置，再在剩余位置里为每个预测幻觉事件挑选关注度最高的位置做并集，映射到均匀时间分格后静音并用原提示做贪心重生成。若没有预测幻觉则保留原回答，整个过程无需训练，只做两次生成与检索计算。

实现上每个模型取各自连续峰区作为音频注意力阶段，Audio Flamingo 3 为第 15 层至第 22 层，Qwen2.5-Omni-7B 为第 18 层至第 24 层，Step-Audio 2 mini 为第 15 层至第 23 层。每层每事件固定取 3 个最关注的音频位置，检索邻居数与支持阈值在每个数据集与模型上用 200 个片段调参后冻结。缓解统一保护每个预测可靠事件的前 10 个位置，并为每个预测幻觉事件在未被保护的位置里补足 10 个，Step-Audio 2 mini 因时间分格宽度约为前两者 2 倍，只遮蔽每个映射窗口中央的一半以保持可比。

### 核心机制：高度关注位置的语义支持如何被检索与计票

直接用词表投影读音频隐状态并不可靠，因为音频位置的隐状态编码的是声音信息，与用于预测下一词的文本状态分布不同，投影常给出不连贯甚至语言错乱的词，无法判断语义是否支持。LatentLens 的作用是绕开词表，用同一语言模型内的上下文文本状态做最近邻检索，以邻近文本的含义解释被查询的音频表征，首次出现后下文统一称 LatentLens 检索。

\[\mathcal{N}_{j}(h_{i}^{(\ell)})=\underset{(r_{n}^{(m)},d_{n})\in\mathcal{B}}{\operatorname{TopK}}\left(\phi_{\ell}(h_{i}^{(\ell)})^{\top}\phi_{m}(r_{n}^{(m)}),j\right).\]

上式计算的是带预处理的跨层最近邻检索，它要回答被关注的音频隐状态在文本语义空间里最像哪些已见表述。采用内积加归一化的形式，几何直觉是比较方向而非长度，避免隐状态模长差异主导相似度，预处理加二范数归一化后余弦才可比。关键项里参考库由文本词状态与上下文组成，查询是高度关注的音频隐状态，\(j\) 控制每位置取多少邻居，极端时 \(j\) 过小会只看到单一表述而漏掉同义说法，\(j\) 过大则引入无关上下文而稀释信号。检索结果交给下一步映射为本体标签，决定该位置是否投出支持票。

下图用高关注帧的检索结果直观展示了语义支持与失配，左侧是音频条带上的两个关注位置，右侧是各自检索到的文本上下文与是否支持的判定。

[![原论文 Figure 3：Through LatentLens, the semantics decoded from high attention frames in the Audio Attention Stage…](https://arxiv.org/html/2611.25789v1/semantic-evidance.png)](https://arxiv.org/html/2611.25789v1/semantic-evidance.png)

*论文图 3：Through LatentLens, the semantics decoded from high attention frames in the Audio Attention Stage lend semantic support to real sound event tokens while withholding it from…（原论文 Figure 3）。*

水流声位置检索到的上下文提到水花、戏水与小瀑布声，与生成事件一致，判定为受支持。山羊叫位置检索到的上下文提到爆炸与海浪声、人群说话与争吵、音乐电视与孩童哭声，没有与山羊叫兼容的标签，判定为语义失配。两组检索都来自同一音频注意力阶段的高关注帧，说明模型可能在听着音频的同时说出与所听语义不一致的事件，注意与语义支持是两回事。

\[\rho(z,z^{\prime})=\mathbf{1}\left[z=z^{\prime}\;\lor\;z\in\operatorname{Anc}(z^{\prime})\;\lor\;z^{\prime}\in\operatorname{Anc}(z)\right],\]

上式定义本体匹配规则，它要解决生成措辞与参考标签粒度不一致的问题。采用相同或祖先或后代即算匹配的形式，统计直觉是允许不同具体程度的说法对应同一声音家族，例如上位与下位互认。关键项里祖先集合来自 AudioSet 层级，兄弟节点仅共享祖先不算匹配，扁平词表退化为精确匹配。极端时精确匹配最严而召回偏低，放宽到祖先或后代会提升召回但可能把过泛的上位词也算对。匹配结果决定每个检索上下文是否算作语义证据。

\[v_{e,i}^{(\ell)}=\mathbf{1}\left[\exists\,(r,d)\in\mathcal{N}_{j}(h_{i}^{(\ell)}),\ \exists\,z^{\prime}\in\mathcal{Z}(d):\rho(z_{e},z^{\prime})=1\right].\]

上式定义每层每位置的二值投票，它要把多个邻居的匹配压缩为一个位置的一票，避免单个位置因命中多个上下文而主导总分。采用存在即为 1 的形式，数学直觉是限幅计数，同一位置至多贡献 1 分，总分 \(S\) 落在零到层数乘每层位置数之间。关键项里阈值 \(K\) 为最低所需支持票数，低于则判幻觉，\(K\) 过高会把弱支持的真实事件也判错，\(K\) 过低则放过失配事件。投票总和直接划分出预测受支持与预测幻觉两组，驱动差异化遮蔽时保护谁与遮蔽谁。

直接遮蔽的教训是只看幻觉事件的位置会误伤。论文把山羊叫最关注的 10 个位置映射回波形并置零后重生成，山羊叫消失的同时水流声也不见了，只剩人群说话，说明幻觉与真实事件可能关注重叠位置。差异化遮蔽先对受支持事件取跨层平均注意力的前列位置做保护集合，再为幻觉事件在保护集之外按平均注意力排序补足选择，两集合交集为空，最后按均匀分格静音并重生成，从而在压制失配依据的同时保住已验证的依据。

### 主实验验证：语义支持检测与差异化遮蔽在何种分布下同时改善抑制与保留

评测在 AudioSet Strong 的评估划分与 DCASE2019 的 fbsnr_30 dB 子集上进行，前者用层级本体与祖先或后代匹配，后者是 10 秒家庭混合声共 10 个参考类并用精确匹配。模型覆盖 Audio Flamingo 3、Qwen2.5-Omni-7B 与 Step-Audio 2 mini，均用各自音频描述提示生成。每个数据集先取 200 个片段调检测阈值并冻结，再为每个数据集与模型组合从剩余数据取 500 个片段测检测，缓解则另取 500 个且排除调参的 200 个，两组评估可能部分重叠但方法间用同一批片段。事件级把未映射描述排除在计分外，样本级含任一不受支持映射事件即判正。检测把幻觉当正类报告精确率、召回率、F1 与 PR-AUC，缓解报告 ECHO-I 与 ECHO-S 越低越好与 Coverage 越高越好，其中 ECHO-I 是不受支持预测类占全部预测类的比例，ECHO-S 是含不受支持类的回复占比，Coverage 是被一对一匹配命中的参考类占比。

先看一个能说明精确率与召回率权衡的具体对照，条件是 Qwen2.5-Omni 在 AudioSet Strong 的样本级，幻觉为正类，指标越高越好。

| 方法 | 精确率 | 召回率 |
| --- | --- | --- |
| 困惑度基线 | 0.5020 | 1.0000 |
| 本方法 | 0.6808 | 0.8327 |

困惑度基线把所有回复都判为含幻觉，召回率拉满但精确率只有参考水平，而本方法把精确率提升到更高同时保留 80% 以上召回，F1 更平衡。代价是会漏掉部分幻觉，说明增益来自更克制地识别不受支持内容，而非简单多报。这一结论只在该数据集与模型的选定阈值下成立，换阈值或换分布时权衡会移动。

再看缓解后内容保留的对照，条件是 Audio Flamingo 3 在 AudioSet Strong 上的覆盖率，越高越好，对比音频感知基线与本方法。

| 方法 | 覆盖率 |
| --- | --- |
| AAD | 34.2% |
| 本方法 | 34.1% |

本方法在该条件下幻觉率最低，覆盖率仅比最高的 AAD 低 0.1 个百分点，表明最强的压制可以与接近最高的保留并存。需要注意百分点与相对百分比不同，这里是绝对差值，且覆盖率并非本方法最高，说明保护机制减少了误伤但没有完全消除权衡。

下面的精确率与召回率曲线把 5 个方法的排序质量与选定工作点放在一起，左右分别为事件级与样本级，上下对应 3 个模型，虚线标出正例占比，可据此区分阈值选择与全阈值排序能力。

[![原论文 Figure 6：Precision–recall curves for hallucination detection on AudioSet Strong (left column pair) and…](https://arxiv.org/html/2611.25789v1/pr-auc.svg)](https://arxiv.org/html/2611.25789v1/pr-auc.svg)

*论文图 6：Precision–recall curves for hallucination detection on AudioSet Strong (left column pair) and DCASE2019 (right column pair)（原论文 Figure 6）。*

红色曲线代表本方法，在 AudioSet Strong 与 DCASE2019 的多数面板里位于上方，标记点对应主表的工作点。由于本方法分数离散，曲线呈阶梯状，跨步较大应理解为同分组同时进入预测集。正例占比在不同面板差异很大，DCASE2019 上 Audio Flamingo 3 事件幻觉很少，曲线更锯齿，应结合 PR-AUC 与工作点一起读。曲线描述的是与主表相同的评估对象，不是额外独立测试，附录也说明部分曲线由缓存特征恢复并复现了表中 4 位小数的精度与召回。

综合主表趋势，本方法在 3 个模型与两个数据集的事件级与样本级均取得最高 F1，PR-AUC 在 12 组对照的 11 组里提升，唯一例外是 Step-Audio 2 mini 在 AudioSet Strong 样本级略低于 RAUQ Entropy。缓解上在多数数据集与模型组合中取得最低 ECHO-I 与 ECHO-S，在 AudioSet Strong 3 个模型全部最低，在 DCASE2019 上 Audio Flamingo 3 与 Qwen2.5-Omni 双指标领先。这些判断依赖祖先或后代与精确匹配的标注规则、500 个片段抽样与冻结阈值，换规则或换阈值时数值会变化。

### 敏感性诊断：阈值选择与幻觉稀疏程度如何改变优劣判断

阈值、检索预算与数据稀疏都会改变优劣解读，本节把排序质量、工作点选择与分布条件分开看，避免把某一阈值下的胜负推广为全阈值能力的胜负。

先看排序质量与工作点分离的反例，条件是 Step-Audio 2 mini 在 AudioSet Strong 的样本级，PR-AUC 越高越好，对比本方法与 RAUQ Entropy。

| 方法 | PR-AUC |
| --- | --- |
| 本方法 | 0.6170 |
| RAUQ Entropy | 0.6191 |

本方法在该条件 F1 更高，但 PR-AUC 略低，说明选定阈值下的判定更准并不等于全阈值排序处处更优。离散分数的步进更大，连续不确定性分数在曲线上占优时也可能出现这种情况，因此不能把 F1 的领先直接读成排序能力的全面领先。

再看幻觉稀疏程度不同的 2 个条件，正例比例越高基线越容易靠多报刷召回，越稀疏越考验精确率，指标方向为比例越高表示幻觉越常见。

| 数据集与模型条件 | 幻觉正例比例 |
| --- | --- |
| Qwen2.5-Omni 在 AudioSet Strong 样本级 | 50.2% |
| Audio Flamingo 3 在 DCASE2019 事件级 | 2.7% |

稠密时困惑度基线靠全报获得满召回但精确率贴近先验，稀疏时注意力分数靠少报获得高精确率却漏掉更多幻觉，本方法在两端都取得更平衡的 F1。这说明增益不是单一向精确率或召回率偏移，而是在给定分布下更好地兼顾两者，换分布时仍需重调阈值，不能沿用同一工作点。

其余敏感性围绕检索与遮蔽展开。音频位置预算与文本邻居预算在 AudioSet Strong 上以每层 3 个位置为基准，增减邻居或阈值会让 F1 小幅波动，层窗口去掉边界层或平移一层也有影响，说明支持证据需要跨层累加而非单层单点。本体匹配从精确到祖先或后代放宽会改变精确率与召回率的相对位置，缓解预算在 1、5、10 与 15 之间以 10 附近较稳，Step-Audio 2 mini 因分格更宽只取中央一半。AudioCaps 上的文本质量与音频相似度在遮蔽后基本保持，没有出现为降幻觉而大幅牺牲可懂度的情况，但这些对照未测量延迟与算力，两次生成加检索的开销仍需在部署前单独评估。

### 适用边界与复现判断：什么时候值得尝试以及还缺什么验证

方法假设可以读到解码器的注意力权重与音频隐状态，且事件能映射到评测本体，未映射的描述不计分，若本体覆盖不足或映射错误，支持度会被低估或错判。文本参考库来自 WavCaps 描述并离线缓存，检索质量依赖库的覆盖与冻结文本模型的表示，跨层检索与层内检索的选择、预处理归一化方式都按模型分别设定。遮蔽把音频位置均匀映射到时间分格并静音，假设位置与时间大致对齐，对重叠事件或非平稳声可能不准，保护集合为空或幻觉集合为空时分别退化为不保护或不遮蔽。

结论的成立条件比较具体，检测阈值在每个数据集与模型上用 200 个片段选定后冻结，评估用 500 个片段抽样，缓解另抽 500 个，标注规则在 AudioSet Strong 用祖先或后代匹配而在 DCASE2019 用精确匹配。精确率与召回率曲线描述的是与主表相同的评估对象，部分由缓存特征恢复，不是额外独立测试。实验未报告延迟、显存与帧率，二次生成与最近邻检索的成本、长音频与流式场景、不同提示措辞与语言、重叠与弱事件等都未验证，不能把趋势推广到每一组结果或每一步生成。

什么时候值得尝试，当你能拿到白盒注意力与隐状态、有明确本体可做事件对齐、希望不训练而得到可解释的干预时，可以先复现。复现第一步是用同一描述提示在 3 个模型之一上生成并保留注意力与隐状态，抽取事件并映射到对应词表，按各自音频注意力阶段取每层前 3 个位置建查询，用 WavCaps 文本库做跨层检索并按祖先或后代规则计票，在 200 个片段上选阈值后再看 500 个片段的 F1 与 PR-AUC。还需要补的验证包括跨提示与跨数据集的阈值迁移、遮蔽对长尾与重叠事件的影响、人工听感与任务级影响，以及把两次生成与检索的开销与基线放在同一预算下对比，再决定是否上线。

从执行顺序看，检测与缓解是先检后干预的两段分工。检测先做事件定位：用模型自带文本大模型在无音频输入下抽取事件短语并映射到本体，得到标签与词位，未映射的不评分；再在各自音频注意力阶段内对头与事件词位平均注意力，每层取前 3 个位置的隐状态作查询，层窗按模型分别设定，Audio Flamingo 3 为 15–22，Qwen2.5-Omni-7B 为 18–24，Step-Audio 2 mini 为 15–23，均指 28 层文本解码器的 1 起始编号，这样多层证据可以累加而不是只看单个峰值。

接着做潜在语义检索与支持度聚合：查询按模型分别预处理归一化后，在 WavCaps 描述离线建的跨层文本库中取最近邻，主实验统一用跨层检索，其中 Audio Flamingo 3 与 Step-Audio 2 mini 用直接归一化，Qwen2.5-Omni-7B 先减去所在层文本库均值；每个被选层位置若有任一检索上下文映射到与事件精确相同或是祖先或后代相容即得一票，多层多位置票数求和得到支持度，低于在 200 个片段上按数据集与模型选定并冻结的阈值即判为幻觉，未映射描述仍不计分。

缓解再做差分位置选择与音频遮蔽：对判为有支持的事件按层平均注意力取各自前 10 个位置组成保护集，对判为幻觉的事件在其排序中跳过保护集向下补足 10 个位置求并集；再把音频位置均匀映射到时间分格并静音对应区间后用原提示贪心重生成，Step-Audio 2 mini 因时域分格约宽 1 倍只遮每格中央一半，若幻觉集合为空则保留原回答，若支持集合为空则不设保护，这一分工把要遮哪里与要保哪里分开，正好对应直接遮蔽会连带删掉真实事件的教训。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25789v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
