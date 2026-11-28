---
title: "Speech Synthesis with Color-based Emotion Representation"
date: 2026-11-27
draft: false
description: "针对类别与维度标注难以直观控制混合情感与强度的问题，本文在 VITS 中新增色相、饱和度与明度嵌入并与类别嵌入联合使用，在基频相关与情感相似度上优于仅用类别，但以频谱失真与可懂度小幅下降为代价。"
tags: ["生成模型", "语音", "韵律与风格控制", "文本到语音"]
categories: ["avsp-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用颜色控制语音情感：色相与饱和度如何辅助类别标签合成更贴切的情感语音"
paper_digest_original_title: "Speech Synthesis with Color-based Emotion Representation"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:avsp:2026:conference-paper-id:nagase26_avsp"
paper_digest_workbench_source_sha256: "5b5d9acad96caccef90ec7e384547a0a3c3404b2dc94de6434fe6667e4642ab6"
paper_digest_workbench_record_url: "https://www.isca-archive.org/avsp_2026/nagase26_avsp.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/avsp_2026/nagase26_avsp.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "文本到语音"
paper_digest_score: 5.7
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对类别与维度标注难以直观控制混合情感与强度的问题，本文在 VITS 中新增色相、饱和度与明度嵌入并与类别嵌入联合使用，在基频相关与情感相似度上优于仅用类别，但以频谱失真与可懂度小幅下降为代价。"
paper_digest_reader_sections: [{"heading":"类别与维度标注为何难以直观控制混合情感与强度","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"基于 VITS 的双路情感条件合成流程总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"颜色属性如何编码为情感嵌入并注入合成器","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两阶段训练与数据划分：从多说话人预训练到情感微调","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"客观与主观评测共同指向的组合增益与可懂度代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提边界与复现核对清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan"],"name":"Ryotaro Nagase"},{"affiliations":["College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan"],"name":"Ryoichi Takashima"},{"affiliations":["College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan"],"name":"Yoichi Yamashita"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"13434a355a80936993d7519b6b7b402224071e7091db8960023461a5a234e09c","url":"/audio-research-portal/client/papers/2026-11-27/conference-bb7e815f4da4073517976192/citation.bib"},"citation.json":{"sha256":"520826f977b0a4e985b630ab588beb765e6bdeb553bd5dccbfe2ffb79b4fca08","url":"/audio-research-portal/client/papers/2026-11-27/conference-bb7e815f4da4073517976192/citation.json"},"citation.ris":{"sha256":"1c049fa89c2571e20686e568d4a0e12821b9b050066a507c044d1d3837dd5c99","url":"/audio-research-portal/client/papers/2026-11-27/conference-bb7e815f4da4073517976192/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"05f37ab468eae47be60ce53565eac08dad95706d62690526b22309352182d7a3","url":"/audio-research-portal/client/papers/2026-11-27/conference-bb7e815f4da4073517976192/rethink-context.json"}}
paper_digest_paper_id: "conference:avsp:2026:conference-paper-id:nagase26_avsp"
paper_digest_source_kind: conference
paper_digest_conference_id: "avsp-2026"
paper_digest_conference_name: "avsp-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/avsp_2026/nagase26_avsp.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/avsp_2026/nagase26_avsp.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "f756b55855921ad382ebd1d92980ff31c5586dacd2701b820256434ab583847e"
paper_digest_api_reader_plan_sha256: "0f2b26fe500ff1612bcbae2d1a99381141aeab8ce17d25293da622fb930528fe"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "409836176468095bd171beb4c952c6181ed84990f2b63ff99f8b65fa577727b3"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "84c629adf244bc687dd3ba6cc272b490e98a1473be0b1abb5f4f3b711a391be3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3730f962a0cb2770657edb0f17bbc2b03ecf4d613c4a0d758f73f739f20e1ea8"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "23e635f42e0d1d7c9d11f91ebfba4c30d24a5bd104a82c0185e2e22c2c6253cb"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.generative","label":"生成模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "生成模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 用颜色控制语音情感：色相与饱和度如何辅助类别标签合成更贴切的情感语音

> 英文题目：*Speech Synthesis with Color-based Emotion Representation*

> 会议身份：`conference:avsp:2026:conference-paper-id:nagase26_avsp`
> Track：Data and Processing




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/avsp_2026/nagase26_avsp.html) · [官方 PDF](https://www.isca-archive.org/avsp_2026/nagase26_avsp.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-research-portal/papers/?concept=task.prosody-style-control)；[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.5/10 | 实验充分 6.0/10 | 清晰度 6.7/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 3.5/10

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Ryotaro Nagase：College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan
- Ryoichi Takashima：College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan
- Yoichi Yamashita：College of Information Science and Engineering, Ritsumeikan University, Osaka, Japan

## 📌 核心摘要

**问题与瓶颈：** 情感语音合成需要从文本生成带有指定情感表达的语音，输入为带韵律符号的音素序列，输出为指定说话人与指定情感的波形。主流路线使用离散的类别情感标签，含义清晰但难以表达混合情感与强度连续变化，使用唤醒度和效价等维度情感标签虽为连续值，却难以直观理解与操作，需要专家知识才能控制合成结果。已有基于参考语音或文本描述的方法增加了控制灵活性，但并未解决类别标签不连续、维度标签不可视的问题，细腻情感的直观控制仍是瓶颈。

**核心思路与方法架构：** 与最接近的仅用类别标签的 VITS 基线相比，实质增量是保留说话人嵌入与类别情感嵌入，新增一路由颜色属性驱动的情感嵌入并拼接融合。日语文本经 pyopenjtalk 转换为带韵律符号的音素序列后进入文本编码器，色调经正弦与余弦分解以处理角度周期性，与缩放到 [-1, 1] 范围的饱和度和明度组成四维向量 \([\sin(h), \cos(h), s, v]\)，经两层全连接层得到 256 维颜色情感嵌入，再与 256 维说话人嵌入和 256 维类别嵌入拼接为 512 维或 768 维向量并投影回 256 维，统一送入后验编码器、解码器、先验归一化流与随机时长预测器以控制音色与情感表达。模型先在 100 人 JVS 语料上预训练多说话人合成能力，再在小规模 JVNV 情感语料 Regular 会话上微调情感嵌入模块，不同数据集的说话人嵌入参数重新训练，训练用单调对齐搜索，推理用时长扩展。

**关键实验与核心代价：** 预训练使用 JVS 的 parallel100 与 nonpara30 子集，划分为 10,977 条训练、1,000 条验证和 1,000 条测试，情感微调仅用 JVNV 的 Regular 会话，划分为 1,135 条训练、120 条验证和 120 条测试，JVNV 原始 48,000 Hz 下采样到 24,000 Hz。在以参考语音为目标的客观对比中，类别加颜色的组合方法在 F0 相关系数 F0-CORR（越高越好 ↑）上为 0.453，高于仅类别基线的 0.427，在说话人相似度 SPK-SIM（越高越好 ↑）上为 0.820，高于基线的 0.819，在情感相似度 EMO-SIM（越高越好 ↑）上为 0.961，高于基线的 0.957，但在梅尔倒谱失真 MCD（越低越好 ↓）上为 8.15，差于基线的 8.12，在词错误率 WER（越低越好 ↓）上为 9.72，差于基线的 9.12，在字错误率 CER（越低越好 ↓）上为 7.97，差于基线的 7.70。主观平均意见分 MOS（越高越好 ↑）上组合方法为 3.16，高于仅类别的 3.14 与仅颜色的 3.09，但均低于真实语音的 4.32，XAB 情感相似度偏好测试中组合对仅类别为 51.7 % 对 32.5 %，组合对仅颜色为 65.0 % 对 22.5 %，仅类别对仅颜色为 66.7 % 对 25.0 %。关键消融显示仅颜色方法在多数客观指标上低于仅类别方法，仅 F0-CORR 高 0.011，作者推测情感表达增强后常规自动语音识别更难识别，论文未披露推理时延与计算成本。

**适用边界与深读导览：** 结论成立前提是日语表演式朗读语音、4 名演员、6 种基本情感与 Regular 会话条件，未覆盖其他语言、自发语音、Phrase-Free 会话以及笑声、啜泣和尖叫等非语言发声的充分建模，论文中未提及音频演示页。欲深究颜色嵌入结构与训练推理流程可查阅下方方法概述和架构，欲核对客观指标定义与主客观一致性可查阅下方实验结果，欲了解数据划分与缺失超参可查阅下方细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 类别与维度标注为何难以直观控制混合情感与强度

情感语音合成的目标是从文本生成带有指定情感的自然语音，可用于对话智能体与有声书等内容生产。原文梳理了已有条件控制路线，包括按愤怒、厌恶、恐惧、喜悦、悲伤与惊讶等离散类别施加条件，按激活度与效价等连续维度施加条件，以及直接使用参考语音或情感描述文本作为条件。这些路线都试图回答同一个问题，即如何用紧凑且可操作的标注表示语音中的情感，并在合成时稳定复现。

类别标注的优点是易于理解，每个类别对应一个编号，合成时只需指定目标编号即可。然而离散编号难以表示混合情感，也难以表示同一情感由弱到强的连续变化。若想在愤怒中掺入少许悲伤，或让喜悦的程度逐渐增强，仅靠切换编号缺少中间状态，控制粒度受限。这种离散性在需要细腻情感过渡的有声内容中尤为明显。

维度标注用连续数值表示情感，理论上可以刻画混合与强度变化，但数值本身缺少直观含义。非专业用户很难判断激活度提高后会在听感上产生何种变化，也不易在效价与激活度构成的空间中找到想要的情感位置。原文指出，这种难以解释的特性使得没有专业知识时很难直接控制合成语音，限制了面向普通创作者的友好交互。

为此原文提出以颜色属性作为情感表示，色相、饱和度与明度既连续可量化，又可通过色盘直观查看。前期听辨实验发现，色相与情感类别相关，饱和度与明度则与激活度及效价相关，且颜色线索有助于情感分类。基于这一关联，本文把每条语音对应的颜色标注作为合成条件，期望在保留类别可理解性的同时，获得对混合与强度的直观连续控制。

### 基于 VITS 的双路情感条件合成流程总览

方法整体基于 VITS 端到端框架搭建，该框架融合变分自编码器、归一化流与生成对抗网络，已在情感语音合成中被多次沿用。与仅用类别编号作为条件的常规做法相比，本文的实质增量是新增一路颜色属性嵌入，并允许类别嵌入与颜色嵌入单独或联合使用。说话人控制仍由说话人编号得到说话人嵌入，情感控制则分别由情感类别编号与四维颜色向量得到两路情感嵌入。

为看清训练与推理两条执行路径的差异，可先浏览整体结构再对照箭头方向理解数据走向。下段图像上半为训练阶段，下半为推理阶段，左侧为 3 路嵌入来源，中间为文本编码与时长建模主干，右侧为频谱分析与波形生成。重点观察虚线条件注入位置，以及训练与推理在中间分支上的不同连接方式。

[![原论文 Figure 1：Overview of the proposed method](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/avsp-2026/bafbdc750978/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/avsp-2026/bafbdc750978/figure-1.png)

*论文图 1：训练与推理双阶段情感条件合成流程，左侧嵌入与中间文本路径在虚线处汇合（原论文 Figure 1）。*

图像上半训练阶段中，频谱经后验编码器送入归一化流，文本侧带韵律符号的音素序列经文本编码器与投影层后，一路经单调对齐搜索与归一化流衔接，另一路与拼接后的说话人与情感向量汇合后送入随机时长预测器。右上解码器输出波形，左下四维向量包含色相正弦、色相余弦、饱和度与明度。训练阶段在文本到时长预测器的汇合点标有红色停止梯度，推理阶段则无后验编码器与对齐搜索，改由时长扩展连接投影与归一化流。

采样规格方面，预训练与情感建模统一在 24,000 Hz 下进行，情感原始录音为 48,000 Hz 后下采样至 24,000 Hz。文本输入为带韵律符号的音素序列，由常用日语前端转换得到。原文披露了嵌入维度与拼接投影关系，但未披露帧长、步长、频谱维度与归一化流层数等细节，因此无法给出逐帧张量形状。推理时给定文本、说话人编号与情感条件，经时长扩展决定每音素时长后生成波形，延迟与吞吐原文未披露。

### 颜色属性如何编码为情感嵌入并注入合成器

颜色嵌入的输入是与每条语音情感对应的颜色标注，色相范围为 0 度至 360 度，饱和度与明度范围均为 0 至 1。由于色相是具有周期性的角度变量，直接输入角度会在 0 度与 360 度交界处产生不连续，原文将其拆为正弦与余弦两个分量，再与饱和度与明度组成四维向量。饱和度与明度在使用前重缩至 -1 至 1 区间，使三属性处于可比的数值范围。

该四维向量经由两层全连接层构成的嵌入模块映射为 256 维颜色情感嵌入。说话人嵌入与类别情感嵌入分别由说话人编号与情感类别编号查表得到，维度同样为 256 维。3 路向量按启用策略拼接为单一向量，仅类别时与说话人拼接为 512 维，颜色与类别联合时拼接为 768 维，再经一层全连接层投影回 256 维。该投影向量被送入后验编码器、解码器、先验归一化流与随机时长预测器，实现对音色与情感表达的联合控制。

以 1 秒日语音频为例追踪端到端走向有助于理解拆分汇合点。输入为带韵律符号的音素序列，先经文本编码器得到语言表征，再经投影层得到均值与方差参数。语言表征同时送往时长分支，与拼接投影后的说话人与情感向量汇合，共同驱动随机时长预测器。在训练阶段，真实频谱经后验编码器与归一化流得到隐变量，并由单调对齐搜索建立文本与频谱的对应，解码器据此重建波形。在推理阶段，时长预测器输出的时长经时长扩展拉长文本表征，再经归一化流与解码器直接生成波形。

原文未披露 1 秒样本对应的具体帧数、频谱维度、隐变量通道数与各编码器层数，因此无法列出每一节点的精确张量形状。能够确认的是嵌入维度链路与四维颜色输入构成，以及训练用对齐搜索而推理用时长扩展的关键切换。颜色单独使用时仅颜色嵌入参与拼接，联合使用时两路情感嵌入同时参与，这种开关构成了后文 3 组对比方法的结构差异。

### 两阶段训练与数据划分：从多说话人预训练到情感微调

预训练使用 JVS 日语多说话人语料库，包含 100 位专业说话人，其中男性 49 位与女性 51 位，采样率为 24,000 Hz。原文选用其中跨说话人相同文本的并行子集与每位说话人文本不同的非并行子集，共切分为 10,977 条训练、1,000 条验证与 1,000 条测试，测试句未出现在训练中。该阶段训练的多说话人模型作为情感合成的初始模型，目标是先获得稳定的多音色文本到语音能力。

情感建模使用 JVNV 日语情感语料库，包含 2 位男性与 2 位女性共 4 位演员，原始采样率为 48,000 Hz，涵盖常规朗读环节与自由短语环节，并包含笑声、啜泣与尖叫等非语言发声。每条语音标注有 6 种情感之一，数量分别为愤怒 249 条、厌恶 258 条、恐惧 265 条、喜悦 280 条、悲伤 257 条与惊讶 306 条，共 1,615 条，并配有颜色属性标注。本文仅使用常规环节，划分为 1,135 条训练、120 条验证与 120 条测试，全部下采样至 24,000 Hz，且测试句未出现在训练中。

由于颜色标注数据量相对较小，原文采取先预训练后微调的策略，在预训练模型上接入情感嵌入模块再进行情感微调。因预训练与情感数据的说话人集合不同，说话人嵌入参数从零开始训练。颜色嵌入模块基于线性层搭建，输入为上述四维向量。实现基于公开的端到端合成实现，文本经日语前端转为带韵律符号的音素序列。原文未披露优化器、学习率、批大小、训练步数与损失权重，因此无法还原梯度更新细节。

对比设置 3 组条件策略，第一组仅用类别编号得到嵌入，第二组仅用颜色属性得到嵌入，第三组同时使用两路嵌入。前者对应常规类别控制，后两者为本文提出的新条件方式。3 组除情感条件来源不同外共享主干结构，便于在相同文本与说话人下比较情感还原能力。原文未披露各阶段是否冻结文本编码器或解码器，仅说明说话人嵌入重新训练与新增情感模块参与微调。

### 客观与主观评测共同指向的组合增益与可懂度代价

评测分为客观与主观两部分。客观指标包括 MCD (梅尔倒谱失真)、F0-RMSE (基频均方根误差)、F0-CORR (基频相关系数)、SPK-SIM (说话人相似度)、EMO-SIM (情感相似度)、WER (词错误率) 与 CER (字错误率)，其中频谱失真、基频误差与错误率越低越好，相关系数与相似度越高越好。频谱与基频指标经动态时间规整对齐后计算，相似度为参考与合成嵌入的余弦相似度，情感相似度取 5 个识别模型的平均，可懂度由大词汇识别模型转写后统计。主观部分包括自然度 MOS (平均意见分) 与情感相似偏好测试，均在日语众包平台进行，每条或每对由 10 位听众评价，仅 MOS 报告 95% 置信区间。

下表完整复现原文主结果，包含真实语音与 3 组合成策略在八项指标上的得分，可对照方向箭头阅读。

|  |  | MCD↓ | F0-RMSE↓ | Objective score F0-CORR↑ | Objective score SPK-SIM↑ | EMO-SIM↑ | WER↓ | CER↓ | Subjective score MOS↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Ground truth | - | - | - | - | - | 5.47 | 4.40 | 4.32 ± 0.07 |
| (i) | one-hot | 8.12 | 105.96 | 0.427 | 0.819 | 0.957 | 9.12 | 7.70 | 3.14 ± 0.11 |
| (ii) | color | 8.28 | 109.32 | 0.438 | 0.801 | 0.955 | 9.85 | 7.92 | 3.09 ± 0.11 |
| (iii) | one-hot+color | 8.15 | 105.91 | 0.453 | 0.820 | 0.961 | 9.72 | 7.97 | 3.16 ± 0.11 |

从客观得分看，联合使用类别与颜色的两路策略在基频相关系数、说话人相似度与情感相似度上取得合成组内最优，分别为 0.453、0.820 与 0.961，同时基频均方根误差也略优于仅用类别的策略。仅用颜色的策略在多数指标上弱于仅用类别，仅基频相关系数略有提升，但其均方根误差更大，原文推测较大的基频绝对误差也拖累了说话人相似度。联合策略在频谱失真与可懂度两项上不及仅用类别，原文认为更强的情感表达可能使常规识别系统更难识别。

主观自然度方面，真实语音为 4.32 分，联合策略为 3.16 分，略高于仅用类别的 3.14 分与仅用颜色的 3.09 分，但三者置信区间均为正负 0.11，重叠明显，差异需谨慎看待。偏好测试显示，仅用类别以 66.7% 高于仅用颜色的 25.0%，联合策略以 65.0% 高于仅用颜色的 22.5%，并以 51.7% 高于仅用类别的 32.5%，其余为判同比例。原文据此认为两类标注作用不同，联合使用更接近参考语音的情感细微差别。

公平性与局限需一并说明。客观评测未报告方差与显著性检验，主观每条件样本量有限且未披露听众总数与统计检验。未胜出项明确存在，联合策略在频谱失真与可懂度上并未取胜，仅用颜色单独使用时整体弱于仅用类别，说明颜色不能直接替代类别。未评测范围包括混合情感的连续调控演示、强度旋钮的主观可控性、跨语言与自发语音的泛化，以及延迟与实时因子等部署指标，这些均不在本表覆盖之内。

### 结论成立的前提边界与复现核对清单

结论成立依赖若干具体前提。数据限定为日语朗读式情感语音，仅使用常规环节的 4 位演员与 6 种情感，自由短语环节、自发对话与更广泛的情感谱系未参与训练与评测。颜色标注来自前期听辨实验的分布，色相与类别、饱和度与明度与激活度及效价的关联为统计趋势，并非一一映射的物理定律，换语言或换标注人群后是否保持一致未经验证。

部署条件同样未经验证。原文未报告流式分块、前瞻窗口、采样步数、实时因子与显存占用，推理路径虽给出时长扩展结构，但无法据此推断首包延迟或长句稳定性。情感强度连续调节的界面设想未在本文做交互实验，颜色拾取器的微小拖动对应多大的听感变化尚无量化曲线，工程选型时不能默认颜色维度已解耦且线性可控。

复现核对需区分三件事。代码方面，原文未给出本方法完整代码与训练权重的获取方式，仅说明实现基于端到端合成实现与日语前端，外部说话人与情感识别模型的引用出处需按原文脚注核对，本次未确认与目标相关的可用资源。数据方面，原文说明预训练使用日语多说话人语料库的平行与非平行子集，情感建模使用带颜色标注的日语情感语料库常规环节子集，划分细节与颜色标注获取方式需按原文描述重建。系统方面，即使按描述搭建，缺少优化器与训练步数等超参仍难以逐数复现，仅能复现趋势性结论。

若要在内容生产中试用，建议保留类别编号作为主控以保证情感大类正确，再把颜色作为微调旋钮用于润饰语气，并对可懂度下降留出余量，例如在强情感长句后检查转写错误。原文未提供试听页面，无法对照听感验证频谱与基频数字，选型时应以自有文本做小规模人工偏好测试为主，神经代理分数仅作参考。若目标是跨语言或自发风格，应先补充对应数据的颜色标注一致性检验，再决定是否沿用联合条件方案。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：预训练与情感建模统一至 24,000 Hz，情感原始录音为 48,000 Hz 后下采样；帧长、步长、频谱维度与码率原文未披露；延迟与 RTF 原文未披露
- **训练与评测数据**：预训练用 JVS 语料库 100 位说话人并行与非并行子集共 10,977 条训练、1,000 条验证、1,000 条测试；情感微调用 JVNV 常规环节 1,135 条训练、120 条验证、120 条测试，含 6 类共 1,615 条日语，测试句与训练不重叠
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量、训练步数与耗时
- **核心超参数与配置**：说话人与情感嵌入均为 256 维，拼接为 512 维或 768 维后投影至 256 维，颜色模块为两层全连接层，色相取正弦与余弦，饱和度与明度重缩至 -1 至 1；优化器与学习率等原文未披露
- **推理速度与部署开销**：参数量、RTF、首包延迟与显存原文未披露；推理用时长扩展替代对齐搜索并由噪声驱动随机时长预测器
- **开源产物与协议状态**：原文未提供本方法代码与权重下载，本次亦未确认可用公开资源；文中提及的外部合成实现与评测工具需自行获取
- **附录与补充材料要点**：原文未设附录；补充证明、许可限制与失效案例原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.7/10** | 创新 6.2/10 | 技术严谨 6.5/10 | 实验充分 6.0/10 | 清晰度 6.7/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 3.5/10
- 排名：后50% | 文档类型：方法研究
- 会议身份：`conference:avsp:2026:conference-paper-id:nagase26_avsp`
- 会议来源：[官方记录](https://www.isca-archive.org/avsp_2026/nagase26_avsp.html) · [官方 PDF](https://www.isca-archive.org/avsp_2026/nagase26_avsp.pdf)
- Track：Data and Processing

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：色调经正弦余弦分解处理角度周期性并与缩放到[-1,1]的饱和度明度构成四维向量经两层全连接得到256维颜色情感嵌入。

- 核心优势：设置仅类别基线、仅颜色消融与类别加颜色组合三条件直接对照，并以VERSA客观指标加MOS与XAB主观评价相互印证。

- 主要短板：组合MOS为3.16仅高于基线0.02且95%置信区间重叠，XAB未给出听众总数与显著性检验细节，统计稳健性不足。

- 主要短板：结论仅限日语4名演员6种情感Regular会话，组合方法WER从9.12升至9.72且MCD退化，存在情感强度与可懂度权衡。

---

[← 返回 avsp-2026 论文汇总](/audio-research-portal/posts/conference-avsp-2026/)
