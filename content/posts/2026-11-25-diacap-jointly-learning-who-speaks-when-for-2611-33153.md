---
title: "DiaCap: Jointly Learning Who Speaks When for Audiovisual Dialogue Captioning"
date: 2026-11-25
draft: false
tags: [说话人分离标注, 语音识别, 可验证奖励强化学习, 音频大模型]
categories: [论文速递]
description: "针对对话字幕中计时与归属相互依赖却被分开学习的难题，DiaCap 以转录条件统一模型结合约 225K 个合成监督与约 2.9K 个人工难例细粒度强化反馈，在去字幕评测以 76.59 的 TIME 大幅超过专有最强的 42.76，代价是对小脸孔重叠语音仍脆弱并依赖外部转录质量与窗口化长视频处理。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33153"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "谁在何时说话 DiaCap 联合学习话语计时与归属"
paper_digest_original_title: "DiaCap: Jointly Learning Who Speaks When for Audiovisual Dialogue Captioning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33153v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33153v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33153v1.pdf"
paper_digest_primary_task: "说话人分离标注"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "可验证奖励强化学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对对话字幕中计时与归属相互依赖却被分开学习的难题，DiaCap 以转录条件统一模型结合约 225K 个合成监督与约 2.9K 个人工难例细粒度强化反馈，在去字幕评测以 76.59 的 TIME 大幅超过专有最强的 42.76，代价是对小脸孔重叠语音仍脆弱并依赖外部转录质量与窗口化长视频处理。"
paper_digest_reader_sections: [{"heading":"对话字幕需要同时回答谁在说与何时说","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"DiaCap 用转录条件与端到端两条流水线统一计时与归属","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"225K 合成标注如何兼顾说话人描述与精确边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"2.9K 难例上分解式奖励如何直接优化时间与说话人","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"去字幕评测中时间精度大幅领先且多语言长视频保持稳定","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"转录质量难例挖掘与分组绑定奖励各自带来多少增益","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"小脸孔重叠语音与转录瓶颈决定了复现与选型边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Georgia Tech"],"name":"Binfei Ji"},{"affiliations":["Adobe Research"],"name":"Zhiwen Cao"},{"affiliations":["Adobe Research"],"name":"Anqi Yang"},{"affiliations":["Adobe Research"],"name":"Prem Seetharaman"},{"affiliations":["Adobe Research"],"name":"Shuo Yang"},{"affiliations":["Adobe Research"],"name":"Ratheesh Kalarot"},{"affiliations":["Georgia Tech"],"name":"Yingyan Celine Lin"},{"affiliations":["Adobe Research"],"name":"Mingze Xu"}]
paper_digest_abstract_sha256: "8bb268003266b269fd6f8348a04ce74a38e9b710e1561fc600f7468273725fb7"
paper_digest_sidecars: {"citation.bib":{"sha256":"0257798d5b9b33932b23f60a4bdf81bf3db69986a3bc1e0bbcf6ad514d32e494","url":"/audio-research-portal/client/papers/2026-11-25/2611-33153/citation.bib"},"citation.json":{"sha256":"cec59185854a692d211c684faf3fe2ed2c746c3166c552809f3b33c60f158920","url":"/audio-research-portal/client/papers/2026-11-25/2611-33153/citation.json"},"citation.ris":{"sha256":"b539ae18356fdedc98e1c462fbad51f46fc3e6aab314bda241705b17f05ffad8","url":"/audio-research-portal/client/papers/2026-11-25/2611-33153/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e4d7d6aa9022a659082f21952a5add598b7c1b387436da1af232a438b3aedc77","url":"/audio-research-portal/client/papers/2026-11-25/2611-33153/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "a150c1f34b1bb6205f25dd48ec38fa68bc33f67b1b0d6cb661400f2638506108"
paper_digest_api_reader_plan_sha256: "3b64253c800b6666a257f55eed8f5009d8c6233f908b37ceb546518288e7a419"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "bf45f94a6d3f4a32d6980511f09fade86b5eddfe68c14032312f1d46647eb74e"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "357bc1d65f5416fbb4fa03395371558f362342cc2b8ea81913d846cb25205422"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "fd8367d39c094c6bca8e1df4166d7511979ee15c3cdecf685af66816481f5bfd"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "dce1f265e8f48aed58c995b6deeef700305150f2a510d764708ef9d5aa9ed66b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 谁在何时说话 DiaCap 联合学习话语计时与归属

> 英文题目：*[DiaCap: Jointly Learning Who Speaks When for Audiovisual Dialogue Captioning](https://arxiv.org/abs/2611.33153v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)；[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[强化学习](/audio-research-portal/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-research-portal/papers/?concept=method.verifiable-reward-rl)
- **模型家族**：[音频大模型](/audio-research-portal/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.8/10 | 技术严谨 7.0/10 | 实验充分 7.4/10 | 清晰度 6.8/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Binfei Ji：Georgia Tech
- Zhiwen Cao：Adobe Research
- Anqi Yang：Adobe Research
- Prem Seetharaman：Adobe Research
- Shuo Yang：Adobe Research
- Ratheesh Kalarot：Adobe Research
- Yingyan Celine Lin：Georgia Tech
- Mingze Xu：Adobe Research

## 📌 核心摘要

**问题与瓶颈：** 对话字幕生成要求从视频与音频输出完整字幕，每条话语包含文字内容、开始与结束时间，并指向说话人列表中的外观描述，使观众能在画面中找到说话人。传统音频说话人分离标注只输出匿名编号，通用视听大语言模型时间戳粗糙，已有对话字幕模型或不输出时间戳或仅精确到整秒。多人物同框、人物进出画面与短促抢话进一步加大难度。论文指出根因在于把定时与归属分开学习，而两者紧密耦合，知道谁在说话有助于确定边界，准确边界又是正确归属的前提。

**核心思路与方法架构：** 本文把转写交由现成识别器完成，保留统一模型同时预测定时与分离标注，增量在于大规模合成稠密监督加直接评价定时、分组与绑定的强化学习反馈。转写条件管线先由识别器输出无边界、无时间戳、无说话人标记的纯文本，再由视听大语言模型切分话语并预测起止时间与归属，端到端变体则直接从视频与音频预测完整字幕。视频短边缩放至多 360 像素并以 4 帧 / 秒采样，骨干为 Qwen3-Omni-30B-A3B-Thinking，对注意力投影加低秩增量微调而冻结编码器与专家路由。监督微调使用 225K 个片段共 1175 小时合成字幕，强化学习在 2.9K 个人工校正难例上以时间误差、分组一致性与描述绑定正确性加权优化，让边界精度直接改善归属，让归属一致性反过来约束边界。

**关键实验与核心代价：** 主基准为扩展话语级时间戳并以字幕检测加模糊去除内嵌字幕的 DiaDemBench-NoSub，共 1039 个片段，其中 598 个受处理，指标 REF 度量归属是否正确、ASR 度量转写准确率、TIME 要求起止均在 0.3 秒内，均越高越好。在预测转写下 DiaCap 取得 REF 71.70 分、ASR 78.99 分、TIME 76.59 分，高于 Gemini 4 Argon 的 70.93 分、77.41 分、42.76 分。在给定正确转写时 DiaCap 取得 REF 81.05 分、TIME 88.76 分，高于 Gemini 4 Argon 的 80.87 分、48.08 分。在平均时长 84 秒的长视频基准 DVDBench 上，DiaCap 取得 Acc（准确率） 87.05、WER（词错误率） 16.68，Acc 高于开放权重对照 D-ORCA 的 80.00，WER 低于 D-ORCA 的 19.07。消融显示同一监督起点上分解奖励取得 REF 71.70 分、TIME 76.59 分，高于直接优化 REF 基线的 70.40 分、75.92 分。代价集中在转写瓶颈与困难场景，小脸、重叠语音与离屏说话人仍会分裂、合并或漏检，长视频需切窗拼接而缺全局上下文，且原文未提供可核对的延迟与吞吐实测。

**适用边界与深读导览：** 结论主要成立于 4 秒至 30 秒、经过视听相关性过滤的短片段，以及可获得较好转写文本的条件，对低分辨率、遮挡、背对镜头与多人重叠语音覆盖不足。长视频评估依赖 50 秒至 60 秒重叠切窗与跨窗说话人链接，问答迁移仅在 AV-SpeakerBench 上验证。读者若想深究奖励分解与字词级对齐细节，可查阅下文方法概述中对时间、分组与绑定奖励公式的解释，若想核对字幕影响、转写器选择与长视频表现，可查阅下文实验结果中的对照表格与文字说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 对话字幕需要同时回答谁在说与何时说

综合对话字幕的输入是一段视频 V 与其对应音频 A，输出是一份字幕 Y，其中包含按时间排列的多条话语与一份说话人列表。每条话语带有完整转录文本、起始与结束时间戳以及指向说话人列表的标签，列表中每个人用外貌描述呈现，例如身穿蓝色衬衫的男士，以便在画面中找到对应人物。论文把预测每条话语边界称为话语计时，把建立列表并为每条话语指派说话人称为视听说话人日志，两者共同决定字幕是否可用。

计时与归属在物理与统计上紧密耦合，知道谁在说话有助于定位边界，而准确边界又是正确绑定的前提。例如仅持续 0.3 s 的单音节应答极易被邻近长话语吸收，若没有精确边界就会丢失一次轮换与一位说话人。已有路线把两者分开处理，纯音频日志仅用音色聚类输出匿名编号，视听方法虽引入唇音同步与说话检测仍输出匿名簇或人脸轨迹，需要演员画廊才能具名。通用视听大语言模型能生成转录与描述但时间戳粗糙，对话字幕器 DiaDem 完全不输出时间，D-ORCA 仅输出整秒级时间，都无法同时满足精确计时与细粒度归属。

评测也存在捷径，若画面保留内嵌字幕，模型可以直接抄写屏幕文字而非从音频识别，导致转录分数虚高并掩盖归属能力。论文因此在 DiaDemBench 上人工补齐每条话语起止时间，并用检测加模糊构造去字幕版本，要求所有模型必须从声音转录。多语言与分钟级长视频进一步考验泛化，本文方法选择在统一模型内联合学习计时与归属，先用大规模稠密监督学会完整字幕格式，再用细粒度反馈直接优化边界与说话人，为后续两阶段训练奠定基础。

### DiaCap 用转录条件与端到端两条流水线统一计时与归属

与最接近的既有基线 Qwen3-Omni-Thinking 相比，DiaCap 保留了相同的混合专家视听基座与音视频编码器，替换的是计时与归属分开预测的做法，改为由单个视听大语言模型统一输出时间戳与说话人，并把转录单独交给外部识别器以聚焦瓶颈。信号规格上原文仅披露视频短边至多 360 像素并保持宽高比，以 4 帧每秒采样，音频采样率与特征维度未披露，模型对注意力投影施加秩 512 的低秩适配并冻结专家、路由与编码器，只更新少量适配参数。

#### 转录条件与端到端两条流水线如何分工

转录条件流水线的计算目标是把无边界无说话人的纯文本转录 T 转化为带时间与归属的完整字幕 Y。公式中 A 表示音频波形，V 表示视频帧序列，Psi 表示外部语音识别器，Theta 表示视听大语言模型，T 为覆盖全片段所有语音的单一文本，Y 为包含多条话语与说话人列表的结构化字幕。该形式把转录与计时归属解耦，使更好的识别器可以直接替换而无需重训主模型。

\[T=\boldsymbol{\Psi}(A)\quad\text{and}\quad Y=\boldsymbol{\Theta}(V,A,T).\]

采用这种条件形式的统计直觉是转录很少依赖视觉线索，而计时与归属高度依赖视听对应，因此让专用识别器负责文字准确性，主模型集中学习切分、定位与绑定。若识别器输出为空或错误，主模型仍需按音频切分但文字质量会连带影响归属，论文在真实转录下 REF 提升约 9.35 即证明了这种传导。条件流水线的输出 Y 直接作为最终字幕，端到端变体则去掉 T 输入，由同一基座从音视频直接预测 Y，证明框架在无外部识别器时依然成立。

为了看清两条流水线的数据走向，可以沿左侧音视频输入箭头追踪转录文本在何处汇入主模型，并对比上方需要外部识别器与下方完全自包含的差异。上方蓝色路径先由识别器得到 T 再与音视频共同进入视听大语言模型，下方绿色路径则把音视频直接送入端到端模型，右侧统一输出 WHO、WHAT 与属性三列，便于对照说话人描述与时间区间。

[![原论文 Figure 2：Overview of DiaCap. A speech recognizer \\boldsymbol\\Psi transcribes the audio, and an audiovisual…](https://arxiv.org/html/2611.33153v1/diacap_pipeline.png)](https://arxiv.org/html/2611.33153v1/diacap_pipeline.png)

*论文图 2：转录条件与端到端两条流水线对照，左侧音视频汇入方式与右侧话语说话人输出（原论文 Figure 2）。*

图中上方标注为转录条件的 DiaCap 用灰色识别器框输出 T，蓝色大模型框输出包含 0.1 至 0.6 s、1.1 至 1.4 s 与 3.0 至 4.0 s 3 段时间的话语，分别对应 A、B、C 3 位说话人与黑色夹克手机音、黑帽柔声、长发休闲音等描述，下方属性行注明是否出镜、情绪与 delivery。下方端到端路径以虚线框强调无识别器无转录输入，直接由青色大模型从音视频得到相同格式输出，右侧说话人列表保持一致，说明两种模式共享输出规范而输入依赖不同。

#### 1 秒样本在模块间如何流转

以 1 秒输入样本为例，视频按 4 帧每秒得到约 4 帧经缩放后的画面，音频波形与画面同步送入编码器，外部识别器先给出覆盖该秒的文字片段但不含边界。主模型把文字、画面与声音联合编码，按顺序切分话语、回归起止时间并指派说话人标签，最终在说话人列表中生成外貌或嗓音描述。原文未披露每帧特征维度、下采样倍数与码本结构，因此张量形状无法完整追踪，只能确认输入输出在话语级汇合而非帧级强制对齐。

推理时默认识别器为 Qwen3-Omni-Captioner，真实转录设置下直接采用真实文本以隔离归属与计时误差，预测设置下基线自行转录而 DiaCap 固定采用外部文本。长视频采用 50 至 60 s 窗口、20 s 重叠独立字幕再经共享话语链接说话人，无需额外模型。原文未披露延迟、实时率与显存，无法判断流式部署代价，只能确认窗口化处理牺牲了全局上下文。

### 225K 合成标注如何兼顾说话人描述与精确边界

有监督微调需要大规模同时带有转录、时间戳与视听归属的完整字幕，而公开数据尚无此规模，单模型也无法可靠生成，因此论文把约 1.25M 个 4 至 30 s 原始片段作为起点，经标注、过滤、去重均衡与合成标注得到约 225K 个片段共 1,175 小时，其中 189K 个含语音、36K 个无语音并设为空目标以抑制幻觉。该语料覆盖 18 种语言并刻意保留多人、重叠与多可见人脸等难例，为统一学习提供稠密监督。

#### 四步筛选如何得到均衡语料

筛选分四步，先由音频、视听与视觉专家打标签，pyannote.audio 给出说话人数与重叠量，元数据给出语种，Synchformer 给出相关度 r 与音画偏移，辅以人脸跟踪聚类与说话检测统计可见与说话人数。仅保留 r 大于 0.3 且偏移绝对值小于 0.5 s 的片段，去除配音与失同步，保留约 80 %，且不要求必须有可见或说话人脸，允许画外音仅用嗓音描述。随后去重限窗并按语言、人数、时长、重叠与人脸数分层抽样，英语汉语等主导语言每视频至多保留一条，3 人以上全保留，2 人以上占 64 %，单人约 21 %，无语音约 16 %。

#### 合成标注如何分工内容与边界

合成标注的计算目标是为每个保留片段生成可直接用于下一词预测的完整字幕 Y。公式中 y 下标 j 表示目标序列第 j 个词元，L 为总长度，V、A、T 与前文一致，Theta 表示待训练的视听大语言模型，条件概率表示在给定音视频、转录与前文下预测当前词元。该目标把时间数字与说话人描述都视为普通词元，用交叉熵逐词模仿参考字幕。

\[\mathcal{L}_{\text{SFT}}=-\sum_{j=1}^{L}\log P_{\boldsymbol{\Theta}}\bigl(y_{j}\mid y_{\lt j},V,A,T\bigr),\]

采用下一词预测的直觉是格式统一且易于利用预训练语言能力，但它只模仿词元而不直接衡量边界误差与归属错误，因此粗糙时间戳也会被同等对待。若模型在思考痕迹后作答，训练时会在目标前加入空思考块以强制直接输出字幕，避免冗长推理。端到端变体去掉 T 条件其余相同，说明同一损失同时适用于两种输入模式，而真正的计时精度提升依赖后续合成管线中对齐器的精修与强化阶段的直接反馈。

阅读数据引擎图时应从左至右跟踪数量收缩与职责分工，先看约 1.25M 到 1.00M 再到 189K 与 36K 的筛选漏斗，再看中间谁负责内容谁负责时间，最后看右侧难例挖掘如何得到约 2.9K。左侧蓝色标注原始片段与保留量，中间视听大模型输出穿蓝衬衫男士与戴眼镜女士等人物与话语切分，对齐器输出 0.5 至 1.5 s、1.8 至 2.8 s 等时间戳，右侧列出多人、弱证据、延迟露面与单人 4 类，便于理解监督来源。

[![原论文 Figure 3：Training data curation and annotation.](https://arxiv.org/html/2611.33153v1/diacap_data_pipeline.svg)](https://arxiv.org/html/2611.33153v1/diacap_data_pipeline.svg)

*论文图 3：三阶段数据引擎从百万级筛选到合成标注再到人工难例的内容与时间分工（原论文 Figure 3）。*

图中第一栏展示来源、标注、过滤、去重均衡与无语音五步，标注约 1.25M 与 1.00M，均衡后 189K 语音与 36K 无语音，底部汇总为 225K 合成标签语料。第二栏左侧视听大模型给出穿蓝衬衫男士与戴眼镜女士等人物与 All set 等话语及屏上情绪属性，右侧对齐器把同一话语标为 0.5 至 1.5 s、1.8 至 2.8 s 与 3.1 至 4.1 s，说明内容与时间由不同模型负责。第三栏从 SFT 语料挖掘难例并经人工校正说话人、归属、漏检与边界，得到约 2.9K 人工标签语料，与前两栏形成互补。

视听大模型选用 Gemini 3.1 Pro，其转录与归属较准但时间粗糙，语音对齐器 TAC 定位精确却看不见人，两者结合使 TIME 从 23.54 升至 72.42，同时保留转录与归属，对齐失败片段直接丢弃。该链条串联多个模型与专有大模型，成本高昂仅作离线数据引擎，日常推理只用蒸馏后的 DiaCap 单模型，从而兼顾精度与可行性。

### 2.9K 难例上分解式奖励如何直接优化时间与说话人

有监督微调的下一词目标无法直接评价边界距离与说话人分组，因此论文在约 2.9K 个人工校正片段上用强化学习补加细粒度反馈。难例挖掘聚焦 3 类视觉困难场景，多人同框仅一人说话、因低分辨率模糊遮挡侧脸导致的弱视觉证据、以及先拍非说话人后说话人才露面的延迟出现，并混入少量单人片段以免策略偏向虚增说话人。人工对照视频修正说话人列表、重指派话语、补全漏检并调整时间，得到可靠参考。

#### 词级对齐后三项奖励如何计分

分组奖励的计算目标是在不看描述文字的条件下检验每人的话语是否被归到同一预测人下。公式中 G 为参考说话人集合，P 为预测集合，n 下标 g 为参考人 g 的话语数，N 为总数，C 下标 p g 为 g 归到 p 的话语计数，跨多预测人的话语按对齐词数按比例计，多人同时说话的话语除外，pi 为一对一映射。该设计同时惩罚把一人拆散与把多人合并。

\[R_{\text{grp}}=\frac{1}{N}\max_{\pi}\sum_{g\in\mathcal{G}}C_{\pi(g)\,g}.\]

采用一对一最大覆盖的直觉是归属首先是聚类正确，描述好坏留给绑定项单独评价。若把一人拆成两个预测人或把 2 人并为一人，总有部分话语无法被覆盖而拉低均值。极端下全部分对则得 1，全错则趋 0，额外预测边界在参考话语内部不计分，合并连续同人语音不罚，只有跨说话人或长停顿的漏边界才记零，从而驱动模型学会保持轮换完整性。

绑定奖励的计算目标是检验每个预测描述是否指对真人，与分组形成互补。公式中竖线 G 为参考人数，J 下标 p g 为多模态裁判观看片段后给出的 0 或 1 判断，描述 p 与 g 指同一人则为 1，其余符号与分组一致，先按话语加权再按人数平均。该平均让话语少的次要说话人与主角等权，避免 REF 这类按话语加权指标被高频人主导。

\[R_{\text{bind}}=\frac{1}{|\mathcal{G}|}\sum_{g\in\mathcal{G}}\frac{1}{n_{g}}\sum_{p\in\mathcal{P}}C_{pg}\,J_{pg}.\]

采用裁判判断的直觉是外貌描述无法用字符串匹配评价，必须看画面确认指代。若某次要人物两句话全对而主角十句话错一半，按话语加权仍显不错，但按人平均会显著拉低，从而迫使模型重视小人物。极端下全部指对得 1，全部指错得 0，裁判为 Gemini-2.5-Flash，解析失败的字幕总奖励记零以惩罚格式错误，输出直接影响采样优势与梯度方向。

#### 总权重与策略优化如何设置

总奖励的计算目标是把时间、分组、绑定与转录统一为标量以指导策略优化。公式中 R time 为边界信用均值，R grp 与 R bind 如上，R asr 为 1 减去词错误率与 1 的较小值，lambda 为各项权重。DiaCap 因输入已给转录而设转录权重为 0，时间 0.2，分组与绑定各 0.4，端到端变体加入转录 0.2 并把分组降至 0.2，时间与绑定保持不变。

\[R=\lambda_{\text{time}}R_{\text{time}}+\lambda_{\text{grp}}R_{\text{grp}}+\lambda_{\text{bind}}R_{\text{bind}}+\lambda_{\text{asr}}R_{\text{asr}},\]

采用加权求和的直觉是不同错误类型不应混为 1 分，时间项在 0.3 s 内给 1 分到 1 s 线性降至 0，兼顾容差与严格性。优化采用 DAPO，每片段采样 8 条字幕，优势为单条奖励减组均值，不除组标准差以免放大微小差异，奖励全同组直接丢弃并对超长施加软惩罚。训练用学习率 10−5 分别走 100 步与 60 步，从 SFT 初始化以保持格式稳定。

词级匹配是奖励前提，采样字幕与参考因切分不同需先按编辑距离对齐词序列，中文日韩语按字而非词，参考词映射到包含它的预测话语以取预测说话人与时间。重叠语音与不可解析字幕特殊处理，前者不计分组，后者总奖励为零，确保梯度来自可比且格式合法的样本。

### 去字幕评测中时间精度大幅领先且多语言长视频保持稳定

评测基于 DiaDemBench 的 1,039 个片段并人工补齐每条话语起止时间，其中 598 个含内嵌字幕经 PP-OCRv5 检测加模糊得到去字幕版本 DiaDemBench-NoSub，默认报告去字幕结果以迫使从音频转录。指标中 REF 由 Gemini-2.5-Flash 判断每条话语是否指对真人，ASR 衡量匹配话语的文字正确性，TIME 要求起止两端均在 0.3 s 内。对比分预测转录与给定真实转录两种设置，前者基线自行转录而 DiaCap 固定采用外部文本，后者隔离转录误差单看归属与计时。

#### 去字幕主结果中时间精度为何大幅领先

下表为 DiaDemBench-NoSub 与原视频的完整对照，黑列为去字幕的严格设置，灰列为保留字幕的对照，统一比较预测转录与真实转录下的 REF、ASR 与 TIME。选择该表是为了同时呈现开源与专有基线、合成标注流水线与两种 DiaCap 变体，避免仅看单一指标掩盖短轮次丢失或边界漂移，横线表示该模型不预测时间。

|  | Predicted-transcript REF↑ | Predicted-transcript REF↑ | Predicted-transcript ASR↑ | Predicted-transcript ASR↑ | Predicted-transcript TIME↑ | Predicted-transcript TIME↑ |  | GT-transcript REF↑ | GT-transcript REF↑ | GT-transcript TIME↑ | GT-transcript TIME↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method / Subtitles | ✗ | ✓ | ✗ | ✓ | ✗ | ✓ |  | ✗ | ✓ | ✗ | ✓ |
| Proprietary |  |  |  |  |  |  |  |  |  |  |  |
| Annotation pipeline | 69.18 | 71.31 | 76.57 | 80.56 | 72.42 | 74.49 |  | - | - | - | - |
| Qwen3.5-Omni-Plus | 66.78 | 66.51 | 77.04 | 78.15 | 22.17 | 24.87 |  | 71.32 | 71.87 | 28.29 | 31.26 |
| Gemini 3.1 Pro | 69.18 | 71.31 | 76.57 | 80.56 | 23.54 | 23.81 |  | 80.08 | 79.82 | 32.27 | 32.11 |
| Gemini 4 Argon [26] | 70.93 | 73.56 | 77.41 | 81.85 | 42.76 | 44.80 |  | 80.87 | 80.67 | 48.08 | 48.83 |
| Open-weight |  |  |  |  |  |  |  |  |  |  |  |
| ARC-Qwen-Video-Narrator [23] | 33.90 | 31.91 | 49.75 | 46.48 | - | - |  | - | - | - | - |
| HumanOmniV2 [87] | 15.37 | 14.97 | 23.03 | 22.14 | - | - |  | - | - | - | - |
| MiMo-V2.6-Flash [82] | 58.04 | - | 68.67 | - | 17.96 | - |  | 72.62 | - | 18.42 | - |
| Qwen2.5-Omni [84] | 31.50 | 30.92 | 55.10 | 54.11 | 4.65 | 4.71 |  | 40.05 | 40.11 | 9.31 | 8.82 |
| UGC-VideoCaptioner [81] | 24.93 | 24.57 | 37.11 | 37.54 | - | - |  | 34.11 | 34.49 | 5.23 | 4.99 |
| AVoCaDO [7] | 42.44 | 40.11 | 53.80 | 51.85 | - | - |  | - | - | - | - |
| D-ORCA [72] | 50.97 | 51.29 | 63.09 | 66.91 | 11.24 | 11.84 |  | - | - | - | - |
| Qwen3-Omni-Thinking [85] | 52.76 | 49.88 | 74.29 | 71.50 | 22.52 | 18.40 |  | 55.28 | 55.14 | 18.81 | 17.41 |
| DiaDem [8] | 63.79 | 65.87 | 75.62 | 79.46 | - | - |  | - | - | - | - |
| DiaCap (SFT) | 68.58 | 69.44 | 78.38 | 78.50 | 75.69 | 75.55 |  | 79.11 | 79.15 | 86.42 | 86.06 |
| DiaCap (SFT + RL) | 71.70 | 71.87 | 78.99 | 78.97 | 76.59 | 76.56 |  | 81.05 | 81.01 | 88.76 | 89.31 |
| DiaCap-E2E (SFT) | 70.60 | 71.72 | 78.98 | 81.76 | 74.86 | 75.44 |  | - | - | - | - |
| DiaCap-E2E (SFT + RL) | 71.59 | 73.02 | 79.55 | 82.13 | 76.64 | 77.83 |  | - | - | - | - |

表中 DiaCap 在预测转录下去字幕 REF 为 71.70，TIME 为 76.59，超过 Gemini 4 Argon 的 REF 70.93 与 TIME 42.76，TIME 领先超过 33。真实转录下 REF 以 81.05 持平 REF 80.87 而 TIME 以 88.76 大幅领先 TIME 48.08。相对自家合成标注流水线的 REF 69.18 与 TIME 72.42 分别提升 REF 2.52 与 TIME 4.17，相对基座 Qwen3-Omni-Thinking 的 TIME 22.52 从粗糙变为精确，端到端变体以 REF 71.59、ASR 79.55 与 TIME 76.64 紧随，证明统一学习同时改善归属与边界。

对照 3 人军盔时间线时先看横轴 0 至 9 s 与纵轴各模型轨道的对应，再比较颜色代表的真实人物与深红描边标记的错误归属。真实轨道给出 4 条话语与 100 分标准，DiaCap 轨道 4 条全对且边界吻合，Gemini 轨道出现错色与额外话语，DiaDem 轨道仅两条有效，便于直观理解精确边界如何保住短轮次。

[![原论文 Figure 4：Qualitative comparison with similar-looking speakers.](https://arxiv.org/html/2611.33153v1/clip612.png)](https://arxiv.org/html/2611.33153v1/clip612.png)

*论文图 4：相似军盔说话人时间线对比，颜色指代真人深红描边标记归属错误（原论文 Figure 4）。*

图中顶部 4 张关键帧分别位于 0.45 s、2.6 s、5.8 s 与 7.5 s，对应 Good、You know what to do 等四句话，底部描述栏显示 DiaCap 能区分戴同款头盔的 2 位男士并给出战术盔甲等细节。时间轴上 DiaCap 以 4/4 与 TIME 100 全对，Gemini 以 3/4 与 TIME 44 错一条并幻觉一条，DiaDem 以 3/4 但无时间，说明相似外貌下归属与计时必须联合精确，否则长话语会吞没短应答。

#### 多语言长视频与问答泛化代价何在

为检验跨语言泛化，论文自建 140 个片段共 14 种语言的评测，其中 10 种在训练中充分出现，越南语、泰语、波斯语与缅甸语占比至多 0.25 %，均做去字幕处理并在真实转录下只看归属与计时。下表比较完成率与分数，完成率排除陷入重复循环的片段，直接反映模型对低资源语言的鲁棒性。

| Method | #Completed | REF↑ | TIME↑ |
| --- | --- | --- | --- |
| MiMo-V2.6-Flash | 102/140 | 64.33 | 21.70 |
| Qwen3-Omni-Thinking | 138/140 | 39.95 | 20.29 |
| DiaCap | 140/140 | 71.67 | 91.45 |

表中 DiaCap 以 140/140 全部完成、71.67 的 REF 与 91.45 的 TIME 明显领先，MiMo 仅完成 102/140 并在 38 个片段循环，Qwen3 基座完成 138/140 但 REF 仅 39.95。结果说明计时与归属能力可跨语言迁移，但评测依赖三转录系统一致才保留真值，可能偏向发音清晰片段，低资源语言的绝对难度仍被低估。

长视频评测采用 DVDBench 的 964 个平均 84 s、最长 5 分钟英文片段，整秒级时间戳以 1 s 容差计 TIME。DiaCap 把每视频切为 50 至 60 s、20 s 重叠窗口独立字幕再经共享话语链接说话人，基线则单遍处理全片，下表对比原有 Acc、WER、IoU 与新增 REF、TIME，WER 越低越好其余越高越好。

| Method | Acc↑ | WER↓ | IoU↑ | REF↑ | TIME↑ |
| --- | --- | --- | --- | --- | --- |
| Gemini 3.1 Pro | 86.96 | 15.96 | 49.56 | 69.82 | 56.87 |
| Gemini 4 Argon | 88.82 | 16.34 | 62.86 | 71.58 | 65.36 |
| DiaDem | 80.46 | 23.32 | - | 62.50 | - |
| D-ORCA | 80.00 | 19.07 | 56.80 | 62.45 | 63.28 |
| Qwen3-Omni-Thinking | 76.86 | 20.62 | 42.14 | 58.33 | 49.65 |
| DiaCap | 87.05 | 16.68 | 61.18 | 69.34 | 62.03 |

表中 DiaCap 以 87.05 分的 Acc 接近 Gemini 3.1 Pro 86.96 分的 Acc；以 16.68 分的 WER 低于 D-ORCA 19.07 分的 WER，以 61.18 分的 IoU 高于 D-ORCA 56.80 分的 IoU，以 69.34 分的 REF 高于 DiaDem 62.50 分的 REF，均为开源最佳，以 62.03 分的 TIME 略低于 D-ORCA 63.28 分的 TIME。

DiaCap 以 87.05 分的 Acc、16.68 分的 WER、61.18 分的 IoU、69.34 分的 REF、62.03 分的 TIME，与 Gemini 4 Argon 88.82 分的 Acc、16.34 分的 WER、62.86 分的 IoU、71.58 分的 REF、65.36 分的 TIME 相比仍有差距，作者归因于窗口内缺少全局上下文，说明切窗策略换来可行性却付出长程一致性代价。

为检验字幕能力是否迁移到问答，论文在 AV-SpeakerBench 的 3,212 道四选一题目上对比直接作答与先写字幕再作答两种方式，题目需双模态才能回答。下表列出说话人与音频两类准确率，直接方式从音视频问题作答，先字幕方式由 Qwen3-Omni-Thinking 根据字幕作答，另设仅给转录的对照以分离文本贡献。

| Method | Direct Speaker↑ | Direct Audio↑ | Caption first Speaker↑ | Caption first Audio↑ |
| --- | --- | --- | --- | --- |
| Transcript only | - | - | 37.2 | 33.7 |
| Gemma 4 E4B | 31.7 | 38.2 | - | - |
| Qwen3-Omni-Thinking | 54.0 | 56.5 | - | - |
| video-SALMONN 2+ | 49.4 | 53.6 | - | - |
| DiaDem | 52.0 | 52.7 | 59.1 | 56.9 |
| D-ORCA | 55.5 | 55.1 | 62.7 | 58.8 |
| DiaCap | 58.2 | 62.0 | 59.0 | 67.1 |

表中 DiaCap 直接作答以说话人 58.2 与音频 62.0 超过基座的说话人 54.0 与音频 56.5，先字幕方式音频准确率以 67.1 领先 D-ORCA 的音频 58.8，而仅转录对照仅说话人 37.2 与音频 33.7，证明增益来自模型而非输入文本。说话人先字幕 59.0 略低于 D-ORCA 的说话人 62.7，说明字幕转问答仍受提问方式影响，但总体显示计时与归属训练可迁移到识别与定位类问题。

### 转录质量难例挖掘与分组绑定奖励各自带来多少增益

转录条件的影响通过固定 SFT 加 RL 模型、仅更换输入文本来检验，比较端到端自预测与多种外部识别器。下表默认识别器为 Qwen3-Omni-Captioner，另测 Gemini 4 Argon、Scribe v2 与最强的 MAI-Transcribe-2，统一在去字幕预测设置下报告 REF、ASR 与 TIME，以观察文字质量如何传导到边界。

| Method | Transcript | REF↑ | ASR↑ | TIME↑ |
| --- | --- | --- | --- | --- |
| DiaCap-E2E | Self-predicted | 71.59 | 79.55 | 76.64 |
|  | Gemini 4 Argon | 70.76 | 78.23 | 74.68 |
|  | Scribe v2 | 71.11 | 78.37 | 76.25 |
|  | Qwen3-Omni-Captioner∗ | 71.70 | 78.99 | 76.59 |
| DiaCap | MAI-Transcribe-2 | 72.48 | 81.23 | 78.93 |

表中端到端以 71.59、79.55 与 76.64 与默认条件的 71.70、78.99、76.59 相当，REF 与 TIME 差不足 0.11 而 ASR 高 0.56，说明自转录已接近外挂效果。换用 MAI-Transcribe-2 后 DiaCap 达 72.48、81.23 与 78.93 为全表最佳，且 TIME 随 ASR 从 78.23 到 81.23 单调从 74.68 升至 78.93，证实转录越准则边界越准，免重训替换识别器是实用优势。

强化数据的作用在相同奖励下比较随机与挖掘难例、自动与人工标签。相同自动标签下挖掘难例比随机高 0.43 的 REF 与 0.79 的 TIME，人工校正再加 1.38 的 REF 与 0.44 的 TIME，合计领先 1.81 与 1.23。原视频字幕未遮挡时趋势相同但幅度收窄为 0.99 与 0.71，说明难例挖掘与人工修正各自独立贡献，且去字幕评估更能放大差异。

奖励设计的对比固定同一批人工难例，比较直接优化 REF 的基线与本文分组加绑定分解奖励。下表起点为 SFT 的 68.58、78.38 与 75.69，基线权重为 0.8 REF 加 0.2 时间，本文为 0.4 分组加 0.4 绑定加 0.2 时间，均在强化第 100 步评估，阴影行即本文奖励。

| Method | REF↑ | ASR↑ | TIME↑ |
| --- | --- | --- | --- |
| SFT | 68.58 | 78.38 | 75.69 |
| +RL w/ 0.8REF+0.2Rtime | 70.40 | 78.86 | 75.92 |
| +RL w/ 0.4Rgrp+0.4Rbind+0.2Rtime | 71.70 | 78.99 | 76.59 |

表中本文奖励以 71.70、78.99 与 76.59 超过 REF 基线的 70.40、78.86、75.92，REF 领先 1.30，TIME 领先 0.67，相对 SFT 提升 3.12 而基线仅 1.82。作者归因于绑定项对每位说话人等权，REF 被高频人主导而忽视小人物，分解反而更利于整体归属。缺失的消融是三项权重的灵敏度与裁判模型替换，原文未报告不同配比或人工裁判的影响。

字幕遮挡的影响进一步证明评估公平性，原视频下多基线靠抄屏幕提升约 4.44 的 ASR 与 2.63 的 REF，端到端同样获益，而 DiaCap 因只用纯音频文本变化不足 0.2。真实转录下增益消失，证实字幕主要帮助文字而非归属，因此论文推荐去字幕版本作为更严格且公平的默认设置。

### 小脸孔重叠语音与转录瓶颈决定了复现与选型边界

感知仍是首要边界，远景小脸孔几乎不提供唇动证据，模型会把单条话语切碎并分给 2 人，顶部失效即属此类。重叠语音被直接漏检，底部中文示例中第二人切入的短句未被预测，说明当前按单人连续话语建模无法处理同时说话。另一失效是画外音被合并到唯一出镜人，母亲在屏外回答被记到女孩名下并丢掉截断尾音，因为画面始终只有女孩，模型未能从声音推断第二人存在。

查看失效拼图时先区分上下两组场景，上组为远景多人同框的英语问答，下组为近景中文重叠对话，再对照每组真实与预测轨道的颜色错位与缺失。真实轨道用不同颜色区分说话人，预测轨道错色或碎片即为切分归属错误，空缺即为漏检，便于定位感知不足与建模假设的断点。

[![原论文 Figure 5：Failure cases. Top: small, distant faces cause segmentation and attribution errors.](https://arxiv.org/html/2611.33153v1/clip991_321_col.png)](https://arxiv.org/html/2611.33153v1/clip991_321_col.png)

*论文图 5：远景碎片化与重叠漏检两类失效，真实与预测轨道错位缺失对比（原论文 Figure 5）。*

上组 4 帧位于 1.7 s、2.4 s、3.05 s 与 3.6 s，真实为 Mountain、Where、There 3 人轮换，预测把 Mountain 切成两段并错色，TIME 仅 40。下组 0.4 s、0.6 s、2.7 s 与 7.2 s 的中文重叠段中，真实两条并行而预测仅保留一条，B 抢话被漏掉。两组共同说明小目标、遮挡与重叠超出当前视觉与切分能力，需要更强感知与显式重叠建模。

推理与转录构成第二组限制，可靠视觉缺失时本应借对话上下文推断说话人，但当前模型缺乏此能力。转录仍是瓶颈，真实转录下 DiaCap 的 REF 增加 9.35，端到端虽已追平条件模型，更强内置转录才能进一步缩小差距。长视频切窗丢失全局上下文导致 WER 与 REF 落后双 Gemini，说话人计数低估部分可见人，检测偏向回答是而在 185 道否定题仅答对 78 道，这些在问答分任务中均有体现。

复现需区分三件事，代码、权重与数据在原文均未披露公开状态，本次也未收到可用作者资源，不可视为已开源。建议从默认识别器加 SFT 检查点起步，先在去字幕版本复现 TIME 优势，再换 MAI-Transcribe-2 验证转录传导。选型上若任务需要精确到 0.3 s 的边界与可视化人物描述，且以短片段多语言为主，值得尝试，若以重叠语音、远景小脸或分钟级全局一致为核心，需先补对应验证并考虑重叠建模与全局链接。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频短边至多 360 像素并保持宽高比，以 4 帧每秒采样；音频采样率、特征维度、码率、因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：SFT 用约 225K 个片段共 1,175 小时，其中 189K 个含语音与 36K 个无语音，从约 1.25M 个 4 至 30 s 原始片段经视听对应筛选与均衡得到，覆盖 18 种语言；RL 用约 2.9K 个人工校正难例；评测用 DiaDemBench 的 1,039 个片段并人工补齐话语级时间戳，另设去字幕版本与 14 语种 140 片段及 DVDBench 长视频
- **算力与训练耗时**：SFT 在 16 张 NVIDIA B200 上训练，全局批量 128，经 2 轮训练并取 1.5 轮检查点；RL 全局批量 32 片段每片段 8 条采样，学习率 10−5 分别训练 100 步与 60 步；推理硬件原文未披露
- **核心超参数与配置**：基座为 Qwen3-Omni-30B-A3B-Thinking，对注意力投影施加秩 512 与 α 1024 的 LoRA 并冻结专家路由与音视频编码器；SFT 峰值学习率 6×10−5 预热 100 步余弦衰减；RL 用 DAPO 去标准差归一化，奖励权重转录条件为时间 0.2 分组 0.4 绑定 0.4，端到端加入转录 0.2 并降分组至 0.2
- **推理速度与部署开销**：默认识别器为 Qwen3-Omni-Captioner，真实转录设置直接采用真实文本；长视频切 50 至 60 s 窗口以 20 s 重叠独立字幕再链接；延迟、实时率、吞吐、显存与参数量原文未披露
- **开源产物与协议状态**：原文未披露代码、权重、数据或演示的公开状态，本次也未收到可用作者资源，不可视为已开源或可下载
- **附录与补充材料要点**：附录 A 给出 SFT 语料语言与人数分布；附录 B 在原视频上重复转录条件、数据与奖励消融；附录 C 补充端到端长视频与问答分任务细节；附录 D 给出画外音合并失效；附录 E 以多图展示遮挡短轮次与相似外貌案例

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33153v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：联合建模话语定时与视听分离标注，共享视频音频文本证据并以分解奖励直接优化边界与归属耦合。

- 核心优势：在DiaDemBench-NoSub上TIME达76.59分大幅超越Gemini 4 Argon的42.76分，给定正确转写下REF达81.05分持平最强专有模型。

- 核心优势：同一监督起点分解奖励比直接优化REF基线高1.30分REF与0.67分TIME，难例挖掘与人工校正增益均经直接消融验证。

- 主要短板：REF依赖Gemini-2.5-Flash模型判断而非人工听测，未报告听测人数样本量置信区间与盲测协议，绑定奖励亦依赖同家族判断器。

- 主要短板：长视频采用50-60秒重叠切窗独立字幕再链接说话人，与单遍基线计算条件不对等且窗口内缺全局上下文，TIME仍落后于部分对照。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
