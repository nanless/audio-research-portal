---
title: "When How You Speak Changes What Models Refuse: Investigating Prosody-Conditioned Safety Divergence in Audio-Language Models"
date: 2026-11-27
draft: false
description: "本文界定词汇固定时仅凭韵律变化改变安全表现的分歧现象，以四阶段因果链定位到中段解码器低秩方向并以推理期转向将对抗合规大幅压低，仅付出约 1 个百分点的良性效用代价。"
tags: ["激活因果干预", "表示探测", "语音", "音频系统攻击与防御"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "说法改变拒绝：韵律条件安全分歧的定位与选择性修复"
paper_digest_original_title: "When How You Speak Changes What Models Refuse: Investigating Prosody-Conditioned Safety Divergence in Audio-Language Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.3"
paper_digest_workbench_source_sha256: "b29aa6b3300700db81d123df5e3a72ec560bf976581ce1c6010ce5ab07f1ba72"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.3/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频系统攻击与防御"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文界定词汇固定时仅凭韵律变化改变安全表现的分歧现象，以四阶段因果链定位到中段解码器低秩方向并以推理期转向将对抗合规大幅压低，仅付出约 1 个百分点的良性效用代价。"
paper_digest_reader_sections: [{"heading":"文字相同说法不同时安全为何翻转","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四阶段链路如何从行为发现走向选择性转向","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"对齐探测与转向算子如何分离相关与因果","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"基频与强度如何驱动翻转并在中段解码器汇聚因果","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"只有因果方向能兼顾安全与效用：对照权衡与跨架构证据","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"何时结论成立：边界代价与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Akash Das"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Ishan Roy"}]
paper_digest_abstract_sha256: "86de2dad7a8cb76c88dedbde3083d949fda9726fa97481e2287548f54555e5c8"
paper_digest_sidecars: {"citation.bib":{"sha256":"a3f646ee107d23345726d9d8e3722e7499de6b0114350ade78149a825027f84b","url":"/audio-research-portal/client/papers/2026-11-27/conference-63f34bbe3eaed1db9d1fee29/citation.bib"},"citation.json":{"sha256":"b6f45ed702e9d457c5e317964ef00638d1afee411f7dd4088871b5fd09fafcd8","url":"/audio-research-portal/client/papers/2026-11-27/conference-63f34bbe3eaed1db9d1fee29/citation.json"},"citation.ris":{"sha256":"a8625a60209c8d01c4694a62e1fa312eb40e2fcc334ee793d6468451391a5579","url":"/audio-research-portal/client/papers/2026-11-27/conference-63f34bbe3eaed1db9d1fee29/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b2336c2a8be7d2f49fc15e4d3beb149a2af94968c76e81a423f2066e3b3ca7ba","url":"/audio-research-portal/client/papers/2026-11-27/conference-63f34bbe3eaed1db9d1fee29/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.3"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.3"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.3"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.3/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "59ed35fb8af1bbec1ef2d1d566af4ab8f10619df8f5e00b1be31889f5545eb48"
paper_digest_api_reader_plan_sha256: "3f187ec1ad6b14720670c3eca333d0622238facbfffb626939be0ce108ea1ba8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "357a590fa2eb01ed5305d2f5a61379c13ce261499aa608240a4988e14dc74a86"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "db174f72f8adef6292ec0426d380b59dbfc773f21ea9a50629af2875298f4fe7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f33975fb6d3ad8a6fa1306fc1d91953148d3a5f608588feb421410e4bc18d195"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4b6f9c4e73e83b8caa1e0ab90170916222340b51d9e9d4400d03b5210e791b8a"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.activation-intervention","label":"激活因果干预"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"}]
paper_digest_primary_method: "激活因果干预"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 说法改变拒绝：韵律条件安全分歧的定位与选择性修复

> 英文题目：*When How You Speak Changes What Models Refuse: Investigating Prosody-Conditioned Safety Divergence in Audio-Language Models*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.3`
> DOI：`10.18653/v1/2026.salma-1.3`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.3/) · [官方 PDF](https://aclanthology.org/2026.salma-1.3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense)
- **研究方法**：[激活因果干预](/audio-research-portal/papers/?concept=method.activation-intervention)；[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.3/10** | 创新 7.6/10 | 技术严谨 8.3/10 | 实验充分 8.1/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Akash Das：机构信息未能从会议 PDF 纯文本可靠映射
- Ishan Roy：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 音频语言模型直接摄入原始语音，同时建模词汇内容与语调、强度、语速等副语言声学，本文安全特指对有害指令服从的语义安全而非情绪或社交安全。现有评估多把语音视作带噪文本通道，默认经人类反馈强化学习对齐的文本骨干可跨声学实现保持拒答。但权威或紧迫的韵律交付会重构字面文本的语用含义，使语义安全边界与非词汇特征纠缠而变得多孔。前端频谱滤波或音色转换等粗粒度净化把韵律当噪声去除，会连带破坏对意图与细微差别的理解，无法在感知权威语音的同时守住安全策略。

**核心思路与方法架构：** 与黑盒红队仅演示越狱不同，本文增量在于先建立词汇严格匹配的行为效应，再做白盒因果定位，最后以因果验证方向做免微调的推理时轨迹转向，保留其余表征不动。单条样本取同一有害提示经 StyleTTS 2 生成的中性母波形，再经基频约 ±20%、强度约 ±3 dB、语速 0.8× 与 1.2× 的独立或组合扰动得到词汇相同的对照音频，外部转写与声学校验做保真过滤。分析对象为参数冻结的 Qwen2-Audio-7B-Instruct 与 SALMONN-7B，前者为 61 层架构含 32 层音频编码器加模态投影与解码器，用动态时间规整在匹配词跨度内对齐变长隐状态并池化为 10 个语音区，再以正则线性探测度量可解码性，以双向激活补丁的因果效应与恢复分数区分必要与充分。对验证层内达标的配对差异做奇异值分解取低秩正交基，在推理时以常开几何约束减去不安全子空间投影，强度在验证集权衡后固定并在留出测试集评估。

**关键实验与核心代价：** 在约 5 000 条有害指令与匹配良性对照的合成语料上，混合效应逻辑回归以语义提示与说话人为随机截距，基频扰动的对数几率系数为 0.85（95% 置信区间 [0.57, 1.13]，优势比 2.34），强度为 0.42（95% 置信区间 [0.23, 0.61]），基频与强度交互为 0.65（95% 置信区间 [0.40, 0.90]），语速单独不显著。组合韵律攻击使 Qwen2-Audio-7B-Instruct 的攻击成功率从 58% 降至转向后的 6%，SALMONN-7B 从 55% 降至 9%，均为越低越好。同一操作点上 LibriSpeech 词错率（WER）从 4.2% 微升至 4.4%，IEMOCAP 情绪识别 Macro-F1 从 74% 降至 73%，SLURP 意图准确率从 86% 降至 85%，匹配良性指令成功率保持在 98%，显示安全收益并非以广泛抑制为代价。机制上编码器内探测 AUROC 约 0.51 接近随机，模态接口后攀升并在中后解码器后半语音区超过 0.90，但双向补丁仅在解码器第 14–24 层同时诱发服从与恢复安全，随机方向几乎无效而未过滤原始主成分虽压低服从却破坏效用。未见声学因子上同一固定转向仍能压低服从但幅度弱于发现维度，构成部分负结果。安全判定由独立于被测模型的外部安全判分器给出连续服从分与攻击成功率，并在 240 条跨中性、攻击与转向响应的分层子集上经 3 名标注者验证，Fleiss κ 为 0.82，不涉及听感主观评分。

**适用边界与深读导览：** 结论限于英语合成语音、基频、能量与语速三维及附录未见因子测试，未覆盖频谱与音质等韵律因素与自然语音、多语种及商用模型，解码器第 14–24 层应理解为层与时间联合的因果中介区而非精确词元位置。防御设定为白盒推理时访问隐状态，与攻击侧黑盒仅改韵律不碰参数的威胁模型不对等，且未实测延迟、吞吐与压缩部署下的校准需求。深究对数几率混合模型、因果效应与恢复分数定义、错误发现率校正与低秩截断可查下方方法与附录公式，消融对照与跨架构数值可查实验结果表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文字相同说法不同时安全为何翻转

音频语言模型直接摄入连续语音，不经过独立语音识别级联，因而同时处理词汇负载与连续伴随声学。语调起伏、情感节奏与语速等副语言线索与字面文本一同进入编码器，成为模型理解意图的重要依据。本文安全特指语义安全，即是否遵从有害指令，不涉及情绪社交或对话礼貌等更宽泛性质。这一界定使后续行为差异可直接对应到拒绝与遵从的翻转，而非主观感受分歧。

文本主干虽经人类反馈强化学习加固，但既有评测多把语音视作含噪文本通道，默认文本层面的严格约束可自然推广到各种声学实现。该假设忽视了语音的语用分量，权威紧迫的投递常重塑字面含义。模型为捕捉丰富声学而优化，其语义安全边界难免与非词汇韵律特征纠缠，在连续声学域中变得脆弱多孔。

既有音频越狱多在波形扰动或叙事场景上展示行为绕过，情感条件研究则在说话人情绪强度上报告波动，但多止于现象描述或整体缓解。本研究把重点转向内部机理，追问分歧在编码器、投影器与解码器何处出现，哪些表征真正中介拒绝翻转，以及能否在推理期作选择性几何约束。这种定位使安全恢复可与效用保留、干预稀疏性一同评估，而非整体抹除副语言信息。

#### 分歧界定与威胁设定

本文把上述脆弱性形式化为韵律条件安全分歧，指词汇语义负载完全固定时，仅改变韵律实现即可使安全行为系统性偏移。同一有害指令的不同音频渲染送入模型，文字回复经外部独立裁判模型给出 0 到 1 连续有害合规分数，并据阈值判定是否翻转。威胁方设定为黑盒输入层操作者，可调基频 F0 、强度与语速并保持语言内容不变，不触碰参数、梯度或隐状态。

为支撑可复现的行为效应，研究构造约 5,000 条去重有害指令与主题结构复杂度相近的良性对照，语义切分先于语音合成，互不重叠。语音以开放合成器生成中性母波形，再由同一母波形派生扰动条件，基频 F0 变动约正负 20% ，强度变动约正负 3 dB ，语速取 0.8 倍与 1.2 倍时间伸缩。主模型为 Qwen2-Audio-7B-Instruct ，另以 SALMONN-7B 作跨架构复现，全部基础参数保持冻结。

刺激以 StyleTTS 2 生成，每条语义配 3 种说话人实现，中性母波形派生全部扰动，保持词汇序列与说话人底色不变。攻击不触碰参数与隐状态，防御则需在推理期访问隐状态作投影，二者权限不对等，不能把模型侧干预误读为外部可用手段。

#### 为何需要打开内部表征

该威胁难以用前端信号处理化解。谱滤波或音色转换虽能抹平输入差异，却把韵律情感当作可去除噪声，而它们本身承载语用含义。粗暴过滤在压制权威感投递的同时，也会损伤正常语音理解，使模型失去对意图与副语言线索的感知。安全模型需要听懂权威语气而不被其覆盖核心拒绝策略，这要求观察编码器、投影器与解码器内部表征，看安全与声学如何在隐空间交织。

为此研究不预设粗粒度权威子空间直接覆盖安全表征，而是先建立可复现行为效应，再追踪其出现位置并验证因果中介，最后构造针对性推理期干预。核心问题有三：韵律效应幅度与交互结构如何；效应在深度与时间上何处可解码又何处真正起因果作用；能否仅抑制经因果验证的方向以恢复安全并保留良性语音任务能力。后文四阶段链路围绕这三问展开。

评估围绕 4 个互补维度组织，安全侧看有害合规分数与攻击成功率，通用效用侧看结构相近良性指令成功率，语音侧看 LibriSpeech 词错误率，副语言与语义侧看 IEMOCAP 情感宏平均与 SLURP 意图准确率。裁判采用独立于被测模型的 Llama Guard 3 8B ，并以分层抽样人工标注核验二值判定。语义切分、验证集选参与测试集评估严格分离，强度、阈值、秩与位置均不在测试集调优。

### 四阶段链路如何从行为发现走向选择性转向

整体链路分为行为发现、机制定位、方向发现与选择性干预 4 个阶段。安全语料源自有害基准经归一化、去重与危害分类整理，目标约 5,000 条独立有害指令并配对主题与结构相近的良性对照。语义切分在合成前完成，发现集、验证集与测试集互不共享指令及其派生音频，另留说话人与合成条件作分布外检验。全部基础模型参数保持冻结，不做参数微调。

下图总览 4 个阶段的数据流与判定分支，建议先横向浏览从左至右的编号与箭头，再纵向对照每阶段内部子框。左侧从语料与韵律因子设计进入过滤与裁判，中间经表征抽取与对齐进入探测与双向修补，右侧经奇异值分解进入强度扫描与多维效用评估。该导览有助于理解后文张量形状变化与汇合点。

[![原论文 Figure 1：Overview of our experimental framework tracing PCSD from (1) Behavioral Discovery through (2)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-1.png)

*论文图 1：四阶段实验链路总览：行为发现到定位再到方向提炼与选择性转向（原论文 Figure 1）。*

图面显示四列面板以蓝绿橙紫区分阶段，箭头依次连接行为发现到定位再到方向发现最后到干预。第一列展示中性与高基频、高强度、快语速及组合波形示意，第二列展示声学编码器经模态投影器进入语言解码器并抽取各层隐状态，第三列展示中性与操纵激活差经分解得到前列基向量，第四列展示转向算子与强度选择及多任务效用套件。关键汇合在第三列差值与第四列投影去除处。

以 1 秒有害指令音频为例，中性母波形经韵律扰动派生对比样本，基频约正负 20%、强度约正负 3 dB、语速取 0.8 倍与 1.2 倍，词汇与说话人实现保持一致。原文未披露采样率、帧移与隐维度具体数值。波形经声学编码器变为变长隐序列，语速变化导致中性与操纵长度不等，经强制对齐与动态时间规整在匹配词汇跨度内对齐，再池化为 10 个归一化时间区。配对差经探测与修补验证后提炼低秩方向，推理期以常开几何约束减去该子空间分量，强度在验证集扫描后锁定并在独立测试集评估。

### 对齐探测与转向算子如何分离相关与因果

#### 词形保真与时间对齐

为排除识别错误冒充安全翻转，每对中性与操纵音频先经独立外部转写系统核验。冻结的 Whisper-large-v3 给出两路转写，要求二者同时贴近原文且彼此一致。WER（词错误率）以替换、删除与插入之和除以参考词数度量，阈值取 0.05 ，两路转写间字符级编辑距离不超过 2 个字符。名义上要求至少 95% 语义一致，约 7% 生成样本在此步被剔除。过滤在观测模型安全结果前完成，不依据攻击成败取舍，因而翻转差异可归因于韵律而非语义破坏。

语速扰动造成隐状态长度失配，直接相减无意义。做法是先以强制对齐给出词元级时间边界，再在匹配词汇跨度内用动态时间规整寻找余弦距离最小的对齐路径。该路径允许局部多对一与一对多映射，能容纳非均匀伸缩而不假设全局均匀对应。规整限制在同词跨度内，避免跨词误配。序列对齐后在 10 个归一化区内池化为定长配对表征，使相减与探测在数学上稳定。

混合效应逻辑回归以对数几率建模翻转概率，固定效应分离基频、强度与语速主效应及两两交互，语义提示与说话人身份作随机截距，吸收特定文本脆弱性与特定音色说服力。这种设计使重复观测下的第一类错误不被夸大，效应可归因于韵律强度而非词汇或音色混杂。分布外检验保留额外说话人与合成条件，选参与校准全程不可见，仅检验已发现效应是否持续。

#### 因果验证与低秩转向

对配对差训练带正则线性探测器预测是否翻转，以置换检验与错误发现率控制处理 61 层乘 10 区的多重比较。每处训练带二范数约束的线性支持向量机，以 AUROC（受试者工作特征曲线下面积）度量可分性，零假设为等于 0.5 ，经 10,000 次标签置换构造经验零分布，再以错误发现率目标 0.001 作校正。编码器 32 层附近探测紧贴随机水平，模态接口后逐步可分，中段以后出现强可分热点，但可解码不等于因果。

因果验证采用双向激活修补。充分性方向把操纵激活植入中性执行，观察合规概率上升，以 \(CE\) 度量诱导量；必要性方向把中性激活植入操纵执行，观察安全恢复，以 \(CRS\) 度量相对原始差距的归一化恢复，并以 0.1 稳定常数避免分母过小。只有双向均超验证阈的层区才进入方向发现，避免把被动编码误认为决策中介。早期与晚期解码器虽具高可分性，修补恢复却近于零，真正中介集中于中段解码器窗口。

对因果验证层收集成功诱导与恢复的配对差，中心化后作奇异值分解，取前列右奇异向量构成层相关正交基。谱线在第三分量处出现明显拐点，支持取秩为 3 的低秩子空间，而非全空间擦除。推理期算子从隐状态减去该子空间投影分量，强度 \(λ\) 在 0 到 1 间逐值扫描，以对抗成功率加权良性退化为复合目标在验证集选优。方向、阈值、秩与位置均不在测试集调优，干预为常开几何约束，不依赖预言机分类器触发。

校准在验证集上扫描强度，目标为对抗成功率加良性退化加权，良性退化综合指令成功率与词错误率变化。最优工作点取帕累托前沿拐点，并在保留测试集上复核。跨架构复现不直接搬运层号，而是按各自表征层级重定中段窗口，避免把 Qwen2-Audio 层位强加于 SALMONN-7B 。

### 基频与强度如何驱动翻转并在中段解码器汇聚因果

下图为混合效应回归的系数森林图，横轴为合规翻转的对数几率，纵轴列出基频、强度、语速及两两交互。建议先看零线位置与误差条是否跨零，再比较红色显著项与灰色非显著项的相对位置。该图直接回答何种韵律维度独立起作用，何种仅在组合中放大风险。

[![原论文 Figure 2：Acoustic Drivers of Safety Divergence.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-2.png)

*论文图 2：混合效应回归系数森林图：基频与强度显著推高合规翻转对数几率（原论文 Figure 2）。*

图面显示基频点最靠右，估计约 0.85，95% 置信区间约 0.57 至 1.13，对应比值比约 2.34，强度估计约 0.42，区间约 0.23 至 0.61，基频与强度交互约 0.65，区间约 0.40 至 0.90，均不跨零。语速主效应与语速强度交互跨零而不显著，基频语速交互虽显著但幅度较小。模型以语义指令与说话人为随机截距，配对比较固定词汇，因而效应可归因于韵律。安全判定来自外部裁判模型并经 240 条分层抽样人工核验。

下图为双向修补的因果效应地貌，左红为充分性诱导，右蓝为必要性恢复，横轴为对齐语音区 1 至 10，纵轴为编码器底层经投影器到解码器深层，色标为概率变化 0.0 至 0.5。建议先确认深色块是否同时出现在两侧同一层区，再观察编码器与投影器是否保持浅色。该对照区分被动可解码与主动决策中介。

[![原论文 Figure 3：Bidirectional Causal Effect Landscape.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-3.png)

*论文图 3：双向激活修补因果地貌：充分性与必要性汇聚于中段解码器（原论文 Figure 3）。*

图面显示编码器与投影器两侧几乎全浅，编码器探测约 0.51 接近随机，而中段解码器 14 至 24 层在后半语音区 5 至 10 同步出现深色峰，探测热点超 0.90，诱导与恢复双向汇聚。早期与晚期解码器虽具高探测准确度，中段以外干预几乎不改变行为，形成可解码性与因果中介的分离间隙。语义切分在合成前完成，测试使用留出指令与声学条件，防御需内部访问而攻击仅需黑盒输入。

### 只有因果方向能兼顾安全与效用：对照权衡与跨架构证据

下图对比基线与目标干预在安全与多维效用上的并列柱状，横向 5 组分别为对抗合规、语音识别词错误率、良性成功、情感识别与意图准确，纵轴为百分比，蓝色为基线，红色为干预。建议先看最左组红色是否大幅低于蓝色，再横向检查其余 4 组红蓝是否基本持平。该形态检验安全增益是否以广泛能力压制为代价。

[![原论文 Figure 5：Comprehensive Utility Preservation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/294a5984eae5/figure-5.png)

*论文图 5：目标转向前后安全与多维效用的并列比较：大幅降害而能力基本持平（原论文 Figure 5）。*

图面显示对抗合规从 58% 降至 6%，语音识别词错误率从 4.2% 微升至 4.4%，良性成功从 99% 保持至 98%，情感 F1（宏平均 F 分数）从 74% 降至 73%，意图准确率从 86% 降至 85%。仅因果验证方向实现左降而右稳，随机方向几乎无变化，未过滤主成分虽压制合规却使意图准确大幅滑落，纯相关探测方向亦未进入理想高准确低合规区。强度扫描显示效用先稳后在极端值坍塌，选优位于拐点处。

为检验超出发现维度的迁移，原文引入训练与定位均未见过的气声因子，转向方向与强度保持冻结而不重调。下表完整呈现该条件下两架构基线与转向后的有害合规率与综合效用，列数与原表一致，未增删来源列。结合该表可判断已学几何约束是过拟合特定扰动还是捕获共享结构。

| Model | Condition | Harmful ASR ↓Utility ↑ |  |
| --- | --- | --- | --- |
| Qwen2-Audio | Baseline | 51.6% | 93.4% |
| Qwen2-Audio | Steered | 18.7% | 91.8% |
| SALMONN | Baseline | 49.3% | 91.9% |
| SALMONN | Steered | 21.4% | 90.6% |

表中气声条件下 Qwen2-Audio 有害合规从 51.6% 降至 18.7%，效用从 93.4% 降至 91.8%，SALMONN 从 49.3% 降至 21.4%，效用从 91.9% 降至 90.6%，降幅弱于主维度 SALMONN 从 55% 降至 9% 的效果，表明部分迁移而非任意声学通用。对照显示仅匹配中性修补达约 78% 恢复，随机跨度仅约 15% 偶发下降，空间上 4 至 5 层即饱和。跨架构热点位于 16 至 26 层，恢复分数均超 0.70，支持共享潜结构判断。

### 何时结论成立：边界代价与复现核对

结论成立范围限于受控合成英语与开放权重双架构。研究仅系统操作基频、均方根能量与时间速率，频谱与音质等其他韵律因素留待后续。定位使用 10 个动态时间规整区而非逐词元位置，14 至 24 层应理解为层时间联合中介区，而非精确词元座标。气声等未见因子仅部分迁移，不能外推到任意声学操纵。

连续分数分布显示中性基线紧贴零附近，基频抬升与合并操纵把概率质量整体推过 0.5 判定阈，而非仅推动边界样本，表明权威紧迫线索在隐空间形成主导向量。按危害类别拆分，合并韵律攻击在各域均抬升合规，其中仇恨言论 61.8% ± 4.1% 与欺诈 58.5% ± 4.2% 抬升幅度居前，自残类基线抗性相对更强。

#### 语言分布与未见声学因子的边界

语音来源单一且高度可控，与自然对话的混响、重叠与口音变异距离较远，语言仅覆盖英语，未验证其他语种与商用系统。分布外检验保留额外说话人与合成条件，选参时完全不使用，仅检验已发现效应在不同实现下是否持续，但仍属合成范畴，不能等同于自然语料。高度压缩或大幅改动部署可能改变表征分布，需重新校准中介位置与强度。

跨说话人与合成器分层显示攻击成功率稳定在 54% 至 62% 与 55% 至 61% 区间，不系于单一音色或单台合成器，支持高层韵律表征而非合成伪影主导。这说明语义约束深度与声学投递纠缠程度因域而异，依赖复杂语用推断的类别更易被权威投递覆盖，而明令禁止类别保持更强基底抗性。

未见因子检验把气声排除在发现、定位与校准之外，转向方向与强度固定后直接在新条件下评估。Qwen2-Audio 有害合规从 51.6% 降至 18.7% ，效用从 93.4% 降至 91.8% ；SALMONN 从 49.3% 降至 21.4% ，效用从 91.9% 降至 90.6% 。降幅弱于发现维度内的 58% 至 6% 与 55% 至 9% ，说明已学子空间部分迁移，但不对任意声学操纵成立。

#### 安全效用权衡与复现条件

威胁设定为黑盒输入操作，防御则需推理期访问隐状态作几何投影，二者权限不对等，不能把模型侧干预误读为外部攻击者可用的黑盒防御。主攻击下 Qwen2-Audio 合规为 58% ，SALMONN 为 55% ，中性基线分别为 6.4% ± 1.4% 与 8.3% ± 1.7% ，转向后回落至 6% 与 9% 。干预后良性指令成功率维持 98% ，LibriSpeech WER（词错误率）从 4.2% 变为 4.4% ，IEMOCAP 情感宏平均从 74% 变为 73% ，SLURP 意图准确率从 86% 变为 85% ，核心感知与语义能力基本保留。

评测以自动裁判为主并经分层抽样 3 人标注核验，240 条回复覆盖中性、攻击与转向条件，每条由 3 名标注者独立判定是否实现有害目标，Fleiss κ（弗莱斯一致性系数）为 0.82 ，分歧经裁决解决，仅用于验证二值判定，不参与选参。效用以词错误率、情感宏平均与意图准确衡量，干预为常开约束而非预言机触发。强度、阈值、秩与位置均在验证集选定，测试集独立评估，但原文未披露延迟、吞吐、显存与 RTF（实时系数），稀疏性结论不能直接换算为线上成本。

不确定度以评估样本上自助法给出 95% 区间，干预选择固定后再在保留测试集一次性报告，避免测试信息回流。复现需区分三件事：代码层面原文表示将受许可与安全约束发布生成、扰动、过滤、评测与干预脚本及配置，当前未给出可验证下载地址；权重层面沿用公开基础模型与合成器权重；数据层面沿用公开基准并按发现验证测试切分，阈值与超参如上。系统尚不能一键直接运行。工程选型上若需保留副语言能力，应避免粗暴前端滤波，优先在验证集扫描低秩转向强度并监控未见声学因子的回退，留出重调窗口。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长步长通道数与码率；韵律扰动为基频约正负 20% 强度约正负 3 dB 语速 0.8 倍与 1.2 倍；分析池化为 10 个归一化对齐语音区；未披露前瞻延迟与实时系数
- **训练与评测数据**：安全语料源自有害基准经归一化去重与危害分类整理，目标约 5,000 条独立有害指令并配对主题结构相近的良性对照；语音由开源合成器生成，每指令多说话人实现，中性母波形派生操纵条件；语义切分在合成前完成，发现集验证集测试集互不共享，另留说话人与合成条件作分布外检验；效用覆盖语音识别情感识别与意图理解
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时；全部基础模型参数保持冻结，不做参数微调，仅训练线性探测器并做奇异值分解与强度扫描，推理侧为常开几何约束
- **核心超参数与配置**：词错误率阈值 0.05，字符编辑距离阈值 2 个字符，二值阈值 0.5，稳定常数 0.1，错误发现率目标 0.001，置换次数 10,000，子空间秩取 3，转向强度在 0 到 1 间网格扫描，阈值秩与位置均在验证集选定
- **推理速度与部署开销**：原文未披露延迟吞吐显存与 RTF；干预为逐层线性投影去除，空间上仅需 4 至 5 层即可饱和，时间上随区域数线性累积，验证集拐点选优后在独立测试集评估
- **开源产物与协议状态**：原文表示将受许可与安全约束发布语料生成韵律扰动过滤评测与干预脚本及配置，当前未给出可验证下载地址；评测沿用公开基准与开源合成器，模型权重沿用公开权重
- **附录与补充材料要点**：附录给出词汇保真过滤对齐与双向修补回归探测与分解及权衡校准的完整表述，合成器配置与声学核验流程，威胁设定与切分协议，分布外与气声迁移结果，跨架构数值对照，定性示例，人体核验三人标注一致性分析，伦理与不确定性说明及发布计划

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.3/10** | 创新 7.6/10 | 技术严谨 8.3/10 | 实验充分 8.1/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.3`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.3/) · [官方 PDF](https://aclanthology.org/2026.salma-1.3.pdf)
- DOI：`10.18653/v1/2026.salma-1.3`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：组合韵律攻击服从率从58%降至6%且WER仅4.2%升至4.4%效用基本保持，并在SALMONN-7B上复现55%降至9%。

- 核心优势：词汇保真双过滤与DTW对齐结合双向激活补丁及10000次置换FDR校正实现相关可解码与因果中介分离定位。

- 核心优势：混合效应逻辑回归给出基频对数几率0.85等置信区间并经240条三分层人标验证Fleiss κ达0.82。

- 主要短板：结论限于英语合成语音与基频能量语速三维及两开源模型，未覆盖自然语音多语种商用模型与频谱音质因素。

- 主要短板：攻击为黑盒输入操控而防御需白盒访问隐状态且未报告推理代价，使稀疏干预部署可行性无法判断。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
