---
title: "Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations"
date: 2026-11-20
draft: false
tags: [文本到语音, 音频生成, 自回归模型, 神经编解码与离散单元]
categories: [论文速递]
description: "针对语音与环境性质不同又在真实录音里相互关联的问题，论文用来源区分编解码器拆出两路时间对齐的 token 并以交错自回归联合建模，在同一评测下可懂度与场景相关性超过混合目标基线，而场景引导增强会带来可懂度的可控回落。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25503"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "两路 token 分开表征又联合生成：野外语音场景生成的解读"
paper_digest_original_title: "Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25503v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25503v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25503v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音与环境性质不同又在真实录音里相互关联的问题，论文用来源区分编解码器拆出两路时间对齐的 token 并以交错自回归联合建模，在同一评测下可懂度与场景相关性超过混合目标基线，而场景引导增强会带来可懂度的可控回落。"
paper_digest_reader_sections: [{"heading":"问题本质：为何一路混合表征难以同时学好语音与环境","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一段文字与场景描述如何变成一路混合波形","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制一：来源区分编解码器如何从混合波形拆出两路 token","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"核心机制二：交错自回归如何让两路 token 在同一上下文里互相提供条件","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"主实验验证：可懂度与场景相关性提升在何种评测口径下成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融与机理分析：区分表征与交错顺序各自带来什么收益与代价","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"综合判断：何时值得尝试以及复现与验证还缺什么","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Semin Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ju Yeon Kang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sunghwan Ahn"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Seonuk Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nam Soo Kim"}]
paper_digest_abstract_sha256: "8d5dddf18cdd615466174b52337a1233ddff64af1f273879290c29a5acf5bef0"
paper_digest_sidecars: {"citation.bib":{"sha256":"20005ef7d3283bb5edf07202465b5c0d17ef78ddcaad3a9e3e3bb4d3e609230b","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.bib"},"citation.json":{"sha256":"a3fe8a833b4fcacab4195993ad84c44a3a594c3554e59e9e3f85220aed76c371","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.json"},"citation.ris":{"sha256":"dade07a63949a3e9b322f9d86ecb1ddd03ccae563cf3ecf099fe211b9b3ee891","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7f69198992554fcba7ab7b58713272c027b474b17900d8beb0465b7a65dce6ae","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "73d2ad11ac5dfc1e63d414e4221500ec10c0b8ff40339d26e9cdad8f6872d0d7"
paper_digest_api_reader_plan_sha256: "09148f3774049f386b639879ebcd984cc411af10cd4fdd160dd0c019674dfd6c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "60eb8fbf1b00e772d557abd5083ec43240786f4f3b31d169c2e1eb2ebe22e9a6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5615b1792a82d103a29978fc460ac8b8cdfd2026dcf093b8d18efb82ee9e7bf2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5af413abd32e16034ec11a2f8259946b92a6f04d4f3ac49629896c2c847325ce"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "53c305d9b306b24a7f3b39545fa2fdd60b95f784a6957d5b7d7dbecd42c8118c"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 两路 token 分开表征又联合生成：野外语音场景生成的解读

> 英文题目：*[Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations](https://arxiv.org/abs/2611.25503v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.4/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Semin Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Ju Yeon Kang：机构信息未能在本次解析中与作者逐人可靠绑定
- Sunghwan Ahn：机构信息未能在本次解析中与作者逐人可靠绑定
- Seonuk Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Nam Soo Kim：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 语音场景生成要求根据待朗读文本与自然语言场景描述输出单段录音，其中目标语音与环境声在同一空间中共存。现有主流做法用文本到音频扩散模型把混合声当作单一表征直接建模，不再区分声源身份，结构化很强的语音与多样弱结构的环境声被迫共享同一目标空间，学习相互牵制。完全独立建模也不可取，真实录音共享空间混响与录制条件，简单叠加的仿真场景无法复现这种关联，而已有方法多冻结语音模块微调或依赖混合前干净语音监督，未能充分利用野外录音。

**核心思路与方法架构：** 本文把场景生成看作对两条离散令牌流的联合语言建模，用各自保持身份的表征承载不同结构，再以共享上下文建模关联。混合波形进入源感知神经音频编解码器，语义分支与声学分支提取共享特征后，分别经语音与环境各自的向量量化与残差向量量化模块得到时间对齐的两条令牌流，每帧包含 1 个语义令牌与 16 个声学令牌，码本互不共享。预训练大语言模型在场景描述、语音内容与对比语言音频预训练嵌入前缀条件下按语音帧与环境帧交错顺序自回归生成语义令牌，再由两条独立深度变换器补全声学令牌，波形由共享解码器分别解码后相加。编解码器工作于 24 kHz 与 12.5 帧 / 秒，生成模型初始化自 Qwen3-0.6B-Base，编解码器在生成阶段冻结，因而生成侧可在仿真预训练后整体适配野外录音。

**关键实验与核心代价：** 在经筛选的 AudioCaps 语音测试集上，以 WER 衡量可懂度越低越好，以 CLAP 衡量场景相关性越高越好，以 FAD 衡量分布接近程度越低越好。同仿真数据训练下本文模型 WER 为 6.43%，优于 ImmersiveTTS 的 7.91%，CLAP 为 0.255，高于 0.247。野外适配后 1/4 引导配置取得 WER 7.08、CLAP 0.286 与 FAD 3.91，场景相关性与音频质量继续改善，WER 随场景引导增强从 6.27% 升至 7.31%，呈现可控权衡。独立语音流解码的 WER 始终低于混合波形，纯净语音在 LibriTTS 测试集上 WER 为 3.84，低于 VoiceLDM-M 的 4.25 与 ImmersiveTTS 的 5.03。消融显示独立表征在两阶段全面优于单流混合目标，交错顺序大幅优于同帧并行预测。代价是预训练阶段 FAD 为 4.76，弱于 ImmersiveTTS 的 4.03，且源感知编解码器重建保真度略低于原始主干。

**适用边界与深读导览：** 结论限于英语短场景、单句随机嵌入、2 dB 至 10 dB 混合与自动转写加字幕监督，剔除了歌唱与突出音乐，未覆盖多说话人、长时、其他语言与实时部署。若需深究源特定蒸馏与重建损失可查方法中编解码器小节，交错损失与分类器无关引导可查生成小节，表征与顺序消融及环境稳定性和注意力交互分析可查实验后半部分。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ASLP-lab/OmniCodec> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/AXERA-TECH/SileroVAD> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：为何一路混合表征难以同时学好语音与环境

语音场景生成要把两类声音合成为一段连贯录音。输入是两段文字，一段是要说出的语音内容，例如 “Could I get a latte, please?”，另一段是自然语言场景描述，例如女子在咖啡馆点单而窗外有雨声。输出是一段录音，其中语音与描述的环境声同时出现，听起来处在同一空间。刚进入音频领域的研究生容易把该任务看成文本转语音叠加背景声，但论文强调两类声音的性质差异与空间关联才是难点。

第一个难点是语音与环境声在语义与声学上差异很大。语音受文字内容强约束，结构严密，前后关联紧密，而环境声种类繁多，结构松散，雨声、鸟鸣、车辆与人群往往没有明确的先后顺序。已有路线多把整段混合声当作一路目标来建模。VoiceLDM 把场景描述与语音内容同时送入文本转音频潜在扩散模型，用两路无分类器引导加以控制。VoiceDiT 与 ImmersiveTTS 先用基于 Glow-TTS 的语音模块得到与文字对齐的语音特征，再用扩散 Transformer 生成场景，前者把特征与带噪隐变量拼接，后者把特征与场景描述做联合注意力融合。ControlAudio 则把文本、时间与音素信息统一写进结构化提示。不管细节如何，它们的声学目标都是一路混合表征，语音与环境的身份在目标里不再明确区分，同一套预测空间要同时容纳两种异质信号，学习两类成分都会受到牵制。

第二个难点是真实场景里两类声音本来就是关联的。它们在同一空间被同一套录音条件采集，共享混响与录音底色，语音响起时环境声并不会凭空消失。模拟合成把独立录制的语音与环境直接相加，缺少这种关联。已有方法对野外录音的使用也比较保守。VoiceDiT 先在模拟场景上预训练，再在 AudioSet-Speech 上微调，但微调时冻结语音模块。ImmersiveTTS 的表征对齐需要混合前的干净语音特征，只能在模拟场景上训练。ControlAudio 把带人工时间标注的真实录音与模拟场景混在一起使用。结果是真实场景里语音与环境的依赖关系没有被充分利用。

本文把任务重新表述为对两路 token 流的联合语言建模。一路表示语音，另一路表示环境，两路在时间上对齐，各自保持身份，又放在同一个自回归上下文里互相提供条件。关键是两路 token 都能直接从混合波形中提取，不需要混合前的干净分量，因此整个模型可以先在模拟场景上建立每路的作用与文字对应关系，再到野外录音上适应真实依赖。为了缩小 2 阶段差距，模拟用的语音特意取自野外录音经语音增强后的片段，保留真实口语风格，场景描述也按真实标注的句式组织。

### 方法全景：一段文字与场景描述如何变成一路混合波形

整套框架分成前后两段。前端是一个来源区分的神经音频编解码器，它把混合波形变成时间对齐的语音 token 流与环境 token 流。这里的神经音频编解码器指把波形压缩成离散编号再能解回波形的模块，token 指每帧的离散编号。后端是一个由预训练大语言模型扩展而来的生成模型，它读入场景描述与语音内容，逐帧交错生成两路语义 token，再由各自的深度 Transformer 补齐声学细节，最后经共享解码器合成两路波形并相加。训练时编解码器保持冻结，直接对混合波形提取目标，预训练与野外适应都用同一套方式进行，不需要干净分量参与生成模型的训练。

沿着咖啡馆点单的例子走一遍。输入文字先切成文本 token，场景描述还会多一个 CLAP 嵌入作为补充前缀。这里的 CLAP 指对比语言音频预训练得到的跨模态表示，文本嵌入与音频嵌入可以互相靠近，训练时八成用文本嵌入，两成用目标音频的嵌入，推理时固定用文本嵌入。随后是一个音频起始标记，标志音频序列开始。大语言模型从该位置起按语音帧、环境帧、语音帧、环境帧的顺序生成语义 token，每生成一个语义 token，对应一路的深度 Transformer 就沿编解码深度逐个预测该帧的声学 token，预测时能看到大语言模型的隐状态与已生成的浅层 token。声学 token 的嵌入与语义 token 的嵌入合并后送回大语言模型，作为后续步骤的完整历史。全部帧生成完毕，两路 token 分别映射回隐变量，经共享解码器得到语音波形与环境波形，相加即为最终场景。

要理解分支在哪里分开、在哪里汇合，先看整体框架图。它把文字条件、交错生成、深度预测与波形合成画在同一张图里，箭头走向就是上面例子的执行顺序。

[![原论文 Fig. 2：Overview of the proposed LLM-based speech-scene generation framework.](https://arxiv.org/html/2611.25503v1/main_model_diagram.svg)](https://arxiv.org/html/2611.25503v1/main_model_diagram.svg)

*论文图 2：Overview of the proposed LLM-based speech-scene generation framework（原论文 Fig. 2）。*

这张图说明主路径只有一条文字到音频的走向，但音频部分始终是两路并行。预训练大语言模型负责跨帧与跨路的长程关联，两个深度 Transformer 各管一路的层间细节，声学解码器共享但隐变量分开，最后相加保证两路在波形层面叠加而不互相覆盖。这种分工让语音的语言结构与环境的连续纹理可以分别学习，又能在生成时互相看到对方。

### 核心机制一：来源区分编解码器如何从混合波形拆出两路 token

编解码器的骨干沿用 OmniCodec，包含语义与声学两个分支。语义分支用冻结的 Qwen3-Omni 音频编码器从混合波形提取语义表示，送入向量量化模块得到语义 token。向量量化在这里的作用是把连续语义压缩成离散编号，方便语言模型预测。声学分支用卷积编码器提取声学表示，减去已量化的语义部分后，把剩余细节送入残差向量量化模块。残差向量量化的特点是用多层码本逐层逼近残差，每帧得到多个声学 token。两部分量化结果相加形成隐变量，再经解码器合成波形。骨干训练包含 4 组目标，蒸馏损失让量化后的语义表示靠近冻结自监督编码器的特征，语义重建损失从量化结果恢复语义表示以防信息丢失，重建损失对解码波形施加多尺度梅尔频谱与对抗约束，正则损失约束向量量化与残差向量量化模块。

要看清共享输入如何长出两路输出，先看编解码器结构图。左侧是两路编码分支，中间是上下两套量化器，右侧是共享解码器与两路监督，虚线表示蒸馏目标的回路。

[![原论文 Fig. 1：Overview of the proposed source-aware neural audio codec.](https://arxiv.org/html/2611.25503v1/sdb_codec_diagram.svg)](https://arxiv.org/html/2611.25503v1/sdb_codec_diagram.svg)

*论文图 1：Overview of the proposed source-aware neural audio codec（原论文 Fig. 1）。*

图中蓝色与橙色分别对应语音与环境，实线是前向的数据流，虚线是蒸馏监督。语义表示与声学表示都来自同一段混合波形，但在量化阶段分开，解码阶段又用同一个解码器分别解出两路波形。这种先共享编码再分开量化、最后共享解码分开监督的布局，是后续能从混合波形直接提取两路目标的关键。

来源区分的关键是把量化器一分为二，但编码器输入保持共享。混合波形的语义表示同时送入语音向量量化器与环境向量量化器，分别得到语音语义 token 序列与环境语义 token 序列。声学表示同样同时送入语音残差向量量化器与环境残差向量量化器，每路每帧产生多个声学 token。两路使用互不相交的码本，身份明确。每帧的语音单元与环境单元都可以写成一个语义编号加多个声学编号的组合，两路帧数相同，时间严格对齐。训练时编码器只看混合波形，干净语音与干净环境只作为监督目标出现。两个向量量化器输入相同，但蒸馏目标不同，各自向自身来源的自监督特征看齐，因此即使输入共享，学到的语义也分属不同来源。

\[\mathcal{L}_{\mathrm{dist}}=\ell_{\mathrm{dist}}\big(\mathbf{q}^{s}_{\mathrm{sem}},E_{\mathrm{ssl}}(\mathbf{x}_{s})\big)+\ell_{\mathrm{dist}}\big(\mathbf{q}^{e}_{\mathrm{sem}},E_{\mathrm{ssl}}(\mathbf{x}_{e})\big),\]

这条蒸馏式子把两路分开求和，形式上是同一套蒸馏函数的两次调用，物理含义是让共享输入长出两种语义。符号里量化后语义表示来自混合波形，自监督特征分别来自干净语音与干净环境，WavLM 在实现中担任该自监督编码器。当某帧以语音为主，语音分支的距离项主导梯度，推动语音码本记住语言相关结构，而环境分支仍被拉向环境特征，避免两路坍缩到同一表示。算出的梯度更新各自量化器并回传到共享编码器，使后续生成的语音 token 与环境 token 从源头就带有不同语义偏置。语义重建损失同样各自向自身来源的语义编码结果看齐。重建分两层，每路隐变量经共享解码器单独监督，分别逼近干净语音与干净环境，两路隐变量相加后再解码一次并监督混合波形，保持两路互补。正则损失同时施加到两路全部量化器上。总体目标是上述五项之和，权重沿用骨干设置。

训练好的编码器对任意混合波形直接输出两路 token 流，解码时两路分别映射回隐变量，经共享解码器各解一路波形再相加，每路也可单独试听。工作点是 24 kHz 音频，每秒 12.5 帧，向量量化器与残差向量量化的全部 16 层都使用大小为 2048 的码本。编解码器从 OmniCodec 检查点出发训练 50k 步，模拟混合的信噪比在 0 至 30 dB 间均匀采样，覆盖更宽的语音与环境强度比。

\[(\mathbf{s},\mathbf{e})=\mathrm{CodecEnc}(\mathbf{x}),\]

这条编码式子表示从混合波形到两路 token 流的映射，输入是整段混合波形，输出是相同帧数的语音序列与环境序列。它采用直接前向计算的形式，因为编码器与量化器在推理时都是确定性查表与前向传播。符号中帧数由时长与每秒帧数决定，每路每帧包含一个语义编号加多个声学编号。当输入为野外录音时，该映射同样适用，不需要干净分量，这正是野外适应得以执行的前提。算出的两路 token 直接作为生成模型的训练目标与推理起点。

\[\hat{\mathbf{x}}=D(\mathbf{z}_{s})+D(\mathbf{z}_{e}).\]

这条解码式子表示两路隐变量分别解码再相加的形式，加法对应波形层面的混合物理过程。符号中两路隐变量来自各自 token 查表后的量化表示，共享解码器对两者采用同一套参数。当某路为空或能量很低，相加结果自然退化为另一路主导，不需要额外门控。算出的混合波形即为最终输出，单独解码一路则可得到可懂度评测用的语音波形或用于检查的环境波形。

### 核心机制二：交错自回归如何让两路 token 在同一上下文里互相提供条件

生成模型要估计的是在给定语音内容与场景描述下两路 token 流的条件分布。这里的条件分布指模型输出的概率，输入条件是语音文字与场景文字，输出是两路 token 的联合可能。论文把两路排成一路交错序列，同帧的语音单元与环境单元相邻，前者先生成，后者能看到前者，下 1 帧语音又能看到之前全部环境。这种排布让环境 token 在每帧都能以同帧语音为条件，后续语音也能以历史环境为条件，两路在整个序列里持续互相影响，而不是先定一路再配另一路。

\[[\mathbf{s}_{1},\mathbf{e}_{1},\mathbf{s}_{2},\mathbf{e}_{2},\ldots,\mathbf{s}_{T},\mathbf{e}_{T}].\]

这条序列式子把两路按帧交错展开，方括号表示自回归的先后顺序，同一帧的两项紧挨在一起。采用交错而非分开两段的形式，是为了让每一项的预测都能看到另一路的历史与同帧前项。符号中下标为帧序号，总帧数由生成时长决定。当生成到第 t 帧环境项时，条件里已包含第 t 帧语音项，而生成第 t 加 1 帧语音时，条件里又包含第 t 帧环境项。由此产生的隐状态序列天然携带跨路信息，驱动下一步的语义预测。

大语言模型每次只预测语义 token，声学部分交给各路独立的深度 Transformer。这里的深度 Transformer 指沿码本深度方向逐层预测的小型自回归模型，与时间方向的大语言模型分工不同。以上 1 帧语音为例，模型隐状态与已预测的语义编号一起送入语音深度 Transformer，沿深度逐层预测声学编号，每一步都能看到同帧已生成的浅层编号。环境侧做法相同，只是用另一套参数。生成全部声学编号后，它们的嵌入与语义嵌入合并，作为大语言模型下一步输入，因此每一步预测都以两路完整历史为条件。训练目标是四项预测损失的加权和，语音语义与声学权重为 1，环境语义与声学权重为 0.5，语义损失带 0.05 的标签平滑。权重偏向语音的原因是语音承载文字可懂度，对错误更敏感。

推理时需要分别控制对语音内容与场景的服从程度。训练时语音内容、场景描述及其 CLAP 前缀各自以 0.1 概率随机丢弃，从而支持对两路条件的分别引导。这里的无分类器引导指同时计算有条件与缺条件下的隐状态，再沿差值方向外推以增强条件作用。推理时大语言模型在每步运行三次，分别对应双条件齐全、缺场景、缺内容 3 种隐状态，再按两个引导强度线性组合得到引导后的隐状态，送入语言模型头与深度 Transformer，因此同位置的语义与声学 token 来自同一引导状态。增大场景引导强度会让生成更贴近场景描述，但语音可懂度会有所回落，形成可调的权衡。

\[\mathbf{h}_{t}^{\mathrm{cfg}}=\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})\\ +\gamma_{\mathrm{content}}\big[\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})-\mathbf{h}_{t}(\varnothing,c_{\mathrm{scene}})\big]\\ +\gamma_{\mathrm{scene}}\big[\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})-\mathbf{h}_{t}(c_{\mathrm{content}},\varnothing)\big],\]

这条引导式子把双条件隐状态作为起点，再分别加上朝向语音内容与朝向场景的修正项，加权系数就是两个引导强度。采用加法外推的形式，是因为隐状态空间里条件差值近似指向更服从该条件的方向。符号中空集表示丢弃对应条件，内容强度与场景强度独立可调。当场景强度取大，环境相关方向被放大，场景相似度与分布接近程度往往改善，但语音方向相对被压缩，可懂度回落。算出的引导隐状态替代原始隐状态，直接驱动当前语义与声学 token 的采样，采样对语义与声学都采用取前 50、温度 0.9 的方式。

2 阶段训练先在模拟场景上建立对应关系，再到野外录音上适应真实依赖。模拟语音池包含 338K 条 LibriTTS 与 815K 条源自 YODAS 的内部数据，后者经语音增强、说话人日志、切分、转写与质量过滤，保留野外口语风格并标注说话人性别。环境取自 306K 条 WavCaps 录音，排除含前景语音的条目。混合信噪比在 2 至 10 dB 间均匀采样，语音随机放在环境中的位置，15% 样本只含语音。场景描述由环境标注与说话人性别组合而成，句式与两部分顺序从 140 种模板中随机挑选，避免模型依赖固定模式。野外适应使用 AudioSet-Speech 的英语含语音录音，经 Whisper-large-v3 转写并裁到语音段，场景描述取自 AudioSetCaps，去掉无标注、含歌唱或突出音乐的录音，只保留转写与原标注词错误率不超过 15% 的样本，得到 269K 条。生成模型从 Qwen3-0.6B-Base 初始化，每个深度 Transformer 为 5 层、隐尺寸 1024、8 个注意力头。预训练 150k 步，峰值学习率 2×10−4，20k 步预热，每卡动态批量至多 2800 帧，梯度裁剪至 5。微调 10k 步，2.5k 步预热，指数移动平均衰减 0.9999，以保守适应抑制语言能力丢失。全部实验使用 4 张 RTX 4090。

### 主实验验证：可懂度与场景相关性提升在何种评测口径下成立

评测固定在 VoiceLDM 提出的 AC 过滤测试集上，该集合取自 AudioCaps 测试集中的含语音样本并配有语音转写，后续多套环境感知语音系统沿用同一集合。客观指标分三方面，语音可懂度用 Whisper-large-v3 转写的词错误率衡量，数值越低表示与目标文字越一致。场景相关性用生成混合波形与目标场景标注的 CLAP 嵌入余弦相似度衡量，数值越高表示内容越贴近描述，标注本身描述完整场景，可能同时提到语音与环境事件。音频质量用基于 VGGish 嵌入的 Fréchet Audio Distance 衡量分布差异，数值越低表示与参考分布越接近。干净语音额外用 UTMOS 作为感知质量的自动估计，数值越高越好。主观评测从同一集合随机抽 20 条，由 14 名听众按 5 分制打分，分别评价语音自然度、场景相关性与总体质量，并给出 95% 置信区间。对比包含 VoiceLDM-S 与 VoiceLDM-M 的公开检查点、按默认引导设置的 ImmersiveTTS，以及在相同模拟数据上训练 400k 步的 ImmersiveTTS 复现。VoiceDiT 因无公开训练代码与检查点，未纳入客观对比。被提议模型记为 Proposed，仅经模拟预训练，与 ImmersiveTTS 复现训练数据可比，野外适应后记为 Proposed-FT。引导强度记为内容与场景两项，Proposed 用 1/3，Proposed-FT 考察 1/3、1/4 与 1/5 三档。

下表在同一测试集与同一套转写与嵌入实现下对比各系统，词错误率越低越好，CLAP 越高越好，Fréchet Audio Distance 越低越好，同时给出独立解码语音流的词错误率以观察显式语音通道的作用。

| Method | Mix WER(↓) | Speech WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- |
| GT | 20.91 | – | 0.356 | – |
| VoiceLDM-S | 46.90 | – | 0.235 | 4.14 |
| VoiceLDM-M | 8.44 | – | 0.210 | 5.27 |
| ImmersiveTTS | 7.91 | – | 0.247 | 4.03 |
| Proposed | 6.43 | 5.26 | 0.255 | 4.76 |
| Proposed-FT (CFG 1/3) | 6.27 | 5.25 | 0.264 | 4.17 |
| Proposed-FT (CFG 1/4) | 7.08 | 5.63 | 0.286 | 3.91 |
| Proposed-FT (CFG 1/5) | 7.31 | 6.10 | 0.293 | 3.71 |

该表呈现的规律是区分建模先带来可懂度与相关性的双重改善，野外适应再把分布推向真实录音。仅用模拟数据时，被提议模型已优于同数据训练的 ImmersiveTTS，混合词错误率更低而 CLAP 更高。野外适应后随着场景引导强度从 3 提高到 5，CLAP 持续上升而 Fréchet Audio Distance 持续下降，说明生成内容与分布都更接近真实场景，代价是混合词错误率温和上升，体现内容保真与场景强调之间的可调权衡。所有野外适应档位的可懂度仍优于全部基线，后两档还取得最低的分布距离。参考录音本身词错误率偏高，原因是参考为自然噪声录音且转写来自自动识别，因此该指标衡量的是相对目标内容的可懂度，而非对参考的复刻。独立解码的语音流词错误率在各档位都低于混合波形，说明显式语音通道即使在完整场景生成中仍保留高可懂的语言内容。

下表在同一批生成样本上对比主观听感，语音自然度、场景相关性与总体质量三项都是分数越高越好，括号内为置信区间半宽。

| GT | 4.28 ± 0.13 | 4.37 ± 0.11 | 4.34 ± 0.11 |
| --- | --- | --- | --- |
| VoiceLDM-M | 3.21 ± 0.14 | 2.99 ± 0.14 | 3.25 ± 0.13 |
| ImmersiveTTS | 3.24 ± 0.13 | 3.09 ± 0.14 | 3.07 ± 0.12 |
| Proposed | 3.44 ± 0.11 | 3.39 ± 0.13 | 3.43 ± 0.12 |
| Proposed-FT | 3.57 ± 0.11 | 3.53 ± 0.13 | 3.48 ± 0.12 |

主观结果与客观趋势互相印证。仅经模拟预训练的模型已在三项上高于两个基线，野外适应后三项进一步提高，尤其在语音自然度与场景相关性上改善明显。两个基线各有偏向，ImmersiveTTS 因环境条件与对齐设计在场景相关性上占优，VoiceLDM-M 因在真实录音上训练而在总体质量上占优，被提议模型在三项上都被评得更高，说明先在模拟数据上学好两类成分再适应真实录音的路线兼顾了两方面。

干净语音生成进一步检验语音通道是否被环境建模拖累。按原文各自的干净生成设置对比，被提议模型用 1/1 的引导强度并配以简单的性别相关场景描述。预训练模型已取得有竞争力的词错误率，并在 UTMOS 上明显高于 VoiceLDM-M 与 ImmersiveTTS。野外适应后可懂度继续改善，在 LibriTTS 与 LibriSpeech 的多个子集上都取得对比系统中最低的词错误率，同时在自然度上持续优于 ImmersiveTTS。论文把该现象归因于语音与场景共享同一套语音表征，干净生成与场景生成的主要差别只是是否同时生成环境流，因此在混合场景里学语音与单独学语音的差距较小，不需要把语言与环境信息挤进同一路混合目标，这种较小的设定差异有助于向干净语音迁移，尤其体现在感知自然度上。

### 消融与机理分析：区分表征与交错顺序各自带来什么收益与代价

本节把表示形式、生成顺序与生成行为分开检验。表示形式回答是否需要两路目标，生成顺序回答两路应如何排布，行为分析回答环境在说话期间是否稳定以及两路是否真正互相利用。4 个检验使用同一套数据与解码设置，避免把实现差异误读成机理差异。

#### 区分表征是否必要

下表对比一路混合 token 与两路区分 token，阶段分为模拟预训练与野外适应，指标方向与主实验相同，混合基线使用原 OmniCodec 单流并用一套深度模块预测全部残差层，每帧 token 总数与两路之和可比，数据、优化与解码设置完全相同。

| Stage | Representation | WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- |
| Simulated pretraining | Mixed | 11.33 | 0.235 | 6.66 |
| Simulated pretraining | Distinct | 6.43 | 0.255 | 4.76 |
| Real-world adaptation | Mixed | 8.76 | 0.239 | 6.30 |
| Real-world adaptation | Distinct | 6.27 | 0.264 | 4.17 |

区分表示在两个阶段的全部三项上都更好。模拟预训练后区分模型的词错误率、CLAP 与分布距离全面优于混合基线，野外适应后混合基线虽有改善但仍落后较多，场景与分布差距保持很大。值得注意的是该优势并非来自编解码器本身的重建能力。在 1000 条 AudioSet-Speech 录音上的重建对比里，原 OmniCodec 在分布距离与词错误率上反而更好，而来源区分编解码器在 CLAP 与 UTMOS 上占优。论文据此判断，每路拥有独立预测空间的结构对学习更重要，即使以部分重建保真度为代价，保留语音与环境的身份仍是学好两类成分的关键。

#### 交错生成与并行生成的取舍

下表对比交错与并行两种排布，并行指两路在同一步由同一隐状态经两个输出头同时预测，同帧两项共享历史但不能在帧内互相作为条件，其余组件完全相同，引导强度覆盖内容固定为 1、场景从 3 到 5 的范围。

| Stage | Generation | Content | Scene | WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- | --- | --- |
| Simulated pretraining | Parallel | 1 | 3 | 10.41 | 0.248 | 4.11 |
| Simulated pretraining | Interleaved | 1 | 3 | 6.43 | 0.255 | 4.76 |
| Real-world adaptation | Parallel | 1 | 3 | 9.68 | 0.271 | 3.41 |
| Real-world adaptation | Interleaved | 1 | 3 | 6.27 | 0.264 | 4.17 |
| Real-world adaptation | Parallel | 1 | 4 | 9.39 | 0.292 | 3.23 |
| Real-world adaptation | Interleaved | 1 | 4 | 7.08 | 0.286 | 3.91 |
| Real-world adaptation | Parallel | 1 | 5 | 10.87 | 0.296 | 3.07 |
| Real-world adaptation | Interleaved | 1 | 5 | 7.31 | 0.293 | 3.71 |

交错在各阶段与各引导档位都取得明显更低的词错误率，而并行在适应后取得略高的 CLAP 与略低的分布距离。论文推测并行用同一隐状态同时支撑两种预测特性不同的目标，容易在语音与环境之间产生干扰，尤其伤害结构性更强的语音目标。交错给每路分配独立的自回归位置与隐状态，同时让每帧环境能以同帧语音为条件，因此可懂度大幅改善，而并行在场景与分布上略占优。由于语音场景生成的首要要求是语音可懂，论文最终采用交错顺序。

#### 说话期间环境是否稳定

要检验连续环境声在语音段内是否被无意压低，先看响度曲线图。横轴为相对语音起点与终点的时间，纵轴为分离后环境信号相对非语音段平均的响度，非语音段定为零分贝，曲线在起点与终点处对齐后平均，有公开检查点的模型每场景生成 3 个不同随机种子样本并显示离散范围。

[![原论文 Fig. 3：Environmental loudness around speech activity for different speech-scene generation models.](https://arxiv.org/html/2611.25503v1/ducking.svg)](https://arxiv.org/html/2611.25503v1/ducking.svg)

*论文图 3：Environmental loudness around speech activity for different speech-scene generation models（原论文 Fig. 3）。*

图中 ImmersiveTTS 在语音起点后明显下跌，终点附近才回升，VoiceDiT 在语音结束后明显上升，说明语音段内环境被抑制。两档被提议模型始终贴近非语音水平，走向接近参考录音。测量上各系统使用同一套通用 BandSplit 分离网络并用 Silero VAD 检测语音段，被提议模型本可直接解码两路，但为公平仍用同一分离器。VoiceDiT 仅在终点附近可比，因为其演示样本把语音放在场景开头。论文推测的原因是部分系统把帧级语音条件经专用语音通路注入一路混合目标，语音活动会连带调制环境，而两路分开后这种耦合减弱，连续环境声得以保持稳定。

#### 两路表征是否真正互动

要确认交错不只是形式上的分开，先看大语言模型自注意力图。位置按语音在前环境在后重排，对角为路内分块，非对角为跨路分块，亮度表示按注意力头平均后的权重，展示 28 层中的 6 层。

[![原论文 Fig. 4：Head-averaged self-attention of Proposed-FT at six layers for a generated scene.](https://arxiv.org/html/2611.25503v1/attention_map.png)](https://arxiv.org/html/2611.25503v1/attention_map.png)

*论文图 4：Head-averaged self-attention of Proposed-FT at six layers for a generated scene（原论文 Fig. 4）。*

图中跨路分块并非空白，两路互相都有清晰的注意力，说明两路没有被当成独立序列处理。交互方向随深度变化，浅层以路内对角为主，环境看语音多于语音看环境，与每帧环境排在语音之后、生成时能看到同帧语音的顺序一致。中层语音查询也关注邻近帧的环境 token，条件变为双向。深层 4 个分块都出现沿对角的条带，说明每路主要关注两路的近期上下文，条带内的块状结构提示注意力按声学内容相近的片段成组，而非逐帧孤立。这些模式支持交错设计让两路在共享上下文里互相提供条件的初衷。

### 综合判断：何时值得尝试以及复现与验证还缺什么

当任务同时要求说清文字与贴合场景，且手头有大量无干净分量的野外录音时，该路线值得尝试。它的前提是能接受两套码本与两个深度模块带来的实现与计算负担，并把语音可懂放在首位。如果应用只要求环境声大致存在而不关心说话期间是否平稳，或只有少量模拟混合数据，单路混合目标配合更强的场景引导也可能够用，此时不必引入两路结构。选择交错还是并行取决于首要指标，重视可懂度选交错，重视分布接近程度可再评估并行，但需接受可懂度差距。

复现第一步应先重建数据管线而非直接调模型。模拟侧按原文准备语音池与环境池的来源构成、信噪比采样区间、语音随机摆放与只含语音比例，并用性别加环境标注组合出多模板场景描述。野外侧按原文准备转写、标注筛选与音乐歌唱过滤，保留转写质量门限。模型侧从 OmniCodec 检查点初始化编解码器并冻结其语义编码器，从 Qwen3-0.6B-Base 初始化生成模型，配好每路深度模块的层数、隐尺寸与注意力头数，再按原文的预训练步数、预热步数、批量帧数、梯度裁剪、标签平滑、两路损失权重、丢弃概率与解码采样设置跑通模拟预训练，然后用小步数与指数移动平均做保守野外适应。关键核对点是两路帧数严格对齐、码本互不相交、每帧环境能看到同帧语音的顺序，以及引导时语义与声学共用同一引导隐状态。

尚未验证的范围需要如实保留。野外录音并非为该任务专门采集，转写与场景描述来自自动标注，可能存在标注误差，长时间适应会损伤可懂度，因此原文采用保守平均策略。编解码器训练语料在规模与多样性上小于大型通用编解码器，扩大训练数据与使用更好整理的真实场景可能进一步改善表示与生成质量，但原文未给出该扩展的结果。环境稳定性分析依赖通用分离与语音活动检测，分离误差可能影响响度曲线的绝对数值，结论应理解为相对趋势而非逐分贝的精确量。注意力可视化展示的是单场景的平均权重，支持存在跨路利用，但不能证明每一帧的因果作用。

容易产生的误解需要澄清。区分不等于独立，两路各自有码本与损失，但在生成时始终处于同一上下文并互相提供条件。重建更好不等于生成更好，单流编解码器重建占优仍在生成上落后，说明目标结构比单纯保真更重要。并行在场景与分布上略好不等于整体更好，是否采用取决于任务把可懂度放在什么位置。野外适应改善场景与质量的同时会带来内容与场景权重的再平衡，不能理解为所有指标单调变好。关于可运行性，论文明确给出的是第三方工具的链接与基线中 VoiceLDM 公开检查点、ImmersiveTTS 公开实现的信息，本模型的代码与权重公开情况在原文证据中没有明确说明，因此代码可得、权重可下载与系统可一键运行是三件不同的事，复现应按自行实现来规划，并补做真实部署条件下的可懂度、场景符合度与人工听感验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25503v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
