---
title: "InstructTTS-OPD: On-Policy Distillation for Multi-Objective Instruction-Following TTS"
date: 2026-11-27
draft: false
tags: [文本到语音, 知识蒸馏, 强化学习, 流匹配]
categories: [论文速递]
description: "针对指令跟随语音合成中单标量 GRPO 导致指令跟随、可懂度与自然度跷跷板的问题，方法先训三个单目标教师再以域路由加冲突感知投影在学生自采样轨迹上匹配速度场，在 zh_DSD 上以 IF 81.1% 、CER 2.25% 与 Avg 0.82 同时超越标量多奖励基线，代价是 DNSMOS 以 3.28 略低于去投影版的 3.31 且在 RP 与英文上仍落后闭源系统。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33937"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "三目标如何同时保住：指令跟随语音合成的在策略蒸馏"
paper_digest_original_title: "InstructTTS-OPD: On-Policy Distillation for Multi-Objective Instruction-Following TTS"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33937v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33937v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33937v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对指令跟随语音合成中单标量 GRPO 导致指令跟随、可懂度与自然度跷跷板的问题，方法先训三个单目标教师再以域路由加冲突感知投影在学生自采样轨迹上匹配速度场，在 zh_DSD 上以 IF 81.1% 、CER 2.25% 与 Avg 0.82 同时超越标量多奖励基线，代价是 DNSMOS 以 3.28 略低于去投影版的 3.31 且在 RP 与英文上仍落后闭源系统。"
paper_digest_reader_sections: [{"heading":"指令跟随语音合成为何在三目标下出现跷跷板","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"DiTAR 自回归加流匹配骨干与在策略蒸馏总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"三路可靠奖励与单目标 GRPO 教师如何得到","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"域路由加冲突感知速度融合如何避免相加抵消","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"融合模型在 zh_DSD 上为何三轴同时超越标量基线","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"质量权重扫描与域路由消融揭示何种冲突几何","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Zhejiang University","Shanghai Innovation Institute"],"name":"Haitao Li"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Tian Tan"},{"affiliations":["Tencent Hunyuan"],"name":"Yuguang Yang"},{"affiliations":["Shanghai Innovation Institute","Shanghai Jiao Tong University"],"name":"Guanrou Yang"},{"affiliations":["Shanghai Innovation Institute","Xiamen University"],"name":"Wenhao Guan"},{"affiliations":["Zhejiang University","Shanghai Innovation Institute"],"name":"Chenglin Li"},{"affiliations":["Tencent Hunyuan"],"name":"Shan Yang"},{"affiliations":["Shanghai Innovation Institute","Shanghai Jiao Tong University"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "cf1a201b6b682d7a4adbffc95b845623b55c793eeea78dbf23666ce5bc41853b"
paper_digest_sidecars: {"citation.bib":{"sha256":"90c0dfb19d35d040a4de41eadf29531afbb9e17d2e4d95f11fb71b4f9d62ee1d","url":"/audio-research-portal/client/papers/2026-11-27/2611-33937/citation.bib"},"citation.json":{"sha256":"537860859d2ad68238e85ff3fe7d4e623660656dae5bcf9a4c0a625af0d0e702","url":"/audio-research-portal/client/papers/2026-11-27/2611-33937/citation.json"},"citation.ris":{"sha256":"c15b1a3789c7997c1a264a13f8fbcf856187912e3d73b897d40358fe3a4a9d7a","url":"/audio-research-portal/client/papers/2026-11-27/2611-33937/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d8e8429c39c0115867a68d31e92f2c9c16c8f3a2854dd0c789f750c6332bdc2c","url":"/audio-research-portal/client/papers/2026-11-27/2611-33937/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "2458bb1054c90f9d9d4c3aa76ddb9d419fca86d5f9ca15d377c4145167e3e94c"
paper_digest_api_reader_plan_sha256: "c9965cb9f01ce849c31919e4b3202f09e07b02c8f5f9a6fa8693662b98503e0d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d83444a298f21570337a1240cd89ba0f8728400b885887b201e8e9e5d6e0b670"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "0a3de7b653574003b3c2c02c3126a51d329d09ec97e0d9716b992706e6b7ffc5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "345698ef1984832709e51f2b441658f42f26ca7f0db4f93a5d302eba88fe5d78"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a03ad831b2ce3bd0d631c9539a8a46a163d2edaa24b3033aae0bf03f3b58c286"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 三目标如何同时保住：指令跟随语音合成的在策略蒸馏

> 英文题目：*[InstructTTS-OPD: On-Policy Distillation for Multi-Objective Instruction-Following TTS](https://arxiv.org/abs/2611.33937v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[强化学习](/audio-research-portal/papers/?concept=method.reinforcement)；[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.8/10 | 技术严谨 7.0/10 | 实验充分 7.5/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 1.5/10 | 可复现 6.1/10 | 工程/实践 4.9/10


## 👥 作者与机构

- Haitao Li：Zhejiang University；Shanghai Innovation Institute
- Tian Tan：Shanghai Jiao Tong University
- Yuguang Yang：Tencent Hunyuan
- Guanrou Yang：Shanghai Innovation Institute；Shanghai Jiao Tong University
- Wenhao Guan：Shanghai Innovation Institute；Xiamen University
- Chenglin Li：Zhejiang University；Shanghai Innovation Institute
- Shan Yang：Tencent Hunyuan
- Xie Chen：Shanghai Innovation Institute；Shanghai Jiao Tong University

## 📌 核心摘要

**问题与瓶颈：** 指令跟随语音合成以目标文本加自由形式自然语言指令为输入，以波形为输出，要求同时做到遵循指令、发音正确与听感自然。指令遵循是区别于普通合成的首要目标，可懂度用字符错误率（CER，越低越好 ↓）衡量，质量用平均意见分（MOS，越高越好 ↑）衡量。主流做法把三目标压成单一标量奖励并用组相对策略优化（GRPO）更新，标量化丢掉了目标间分歧的方向信息，不一致时梯度相互抵消，更新漂向最易提升的一轴，形成此消彼长的跷跷板，改权重只移动平衡点而不消除张力。

**核心思路与方法架构：** 与最接近的标量多奖励 GRPO 相比，本文保留 GRPO 训练单目标专家的路线，把融合从标量加权改为流匹配速度场上的在策略蒸馏加域路由与冲突感知投影。沿一条样本看，指令如颤抖哭腔或粤语不耐烦表述与目标文本一同进入 0.5B Qwen 语言模型，模型结合已生成音频摘要输出条件向量 c，193M 局部 DiT 解码器在该条件下把高斯噪声输运为当前帧音频隐变量，48M 聚合编码器把新帧压缩回单向量送回语言模型，冻结声码器映射为波形，全模型约 0.7B 参数。训练时把 10 步常微分方程（ODE）中的连续 3 步转成随机微分方程（SDE）以获得探索滚出，教师用停止梯度冻结为固定目标，学生在其自身滚出轨迹点上回归教师均值，指令与可懂度路由到不相交 utterance，质量以 0.3 权重作为全局护栏并在冲突时投影掉反对分量。

**关键实验与核心代价：** 在 InstructTTSEval 的 zh_DSD 子集 1000 条上，以 CER 衡量，本文完整方法为 2.25，低于最强可比基线标量多奖励 GRPO 的 2.34；以深度噪声抑制平均意见分（DNSMOS，越高越好 ↑）P.835 OVRL 衡量，本文为 3.28，高于同一基线的 3.25，同期指令遵循率从 77.0 升至 81.1，归一化均值从 0.75 升至 0.82。去掉冲突感知融合后指令遵循率回落到 79.4 而 DNSMOS 为 3.31，留出指标 Qwen3-ASR 的 CER 与通用 TTS 平均意见分预测（UTMOS，越高越好 ↑）保持同序，UTMOS 因中文偏置整体偏低仅看排序。盲听 A/B 中训后模型胜 35.0%，负 28.3%，平 36.7%，净胜 6.7 个百分点。质量权重从 0.1 增至 2.0 时，无投影指令遵循率从 79.0 跌至 62.0，有投影保持在 78.7 至 72.6。代价为 4 节点 × 8 GPU 上 350 步训练，未披露 GPU 型号、时长、推理延迟或实时因子。

**适用边界与深读导览：** 上述同时提升仅在三个奖励前提下成立：蒸馏 Qwen-Omni 代理与 Gemini 高度一致、WER 训练排除方言数据、DNSMOS 替代有语言偏置的 UTMOS，且训练与主评测均限于 ZH-DSD 风格中文指令与 zh_DSD 1000 条。当指令转向 RP 风格、APS 风格或英文翻译指令时增益收窄，在 RP 与英文子集上仍落后于闭源 Gemini 系统；强哭腔、颤抖或方言表达下质量目标仍会与指令目标相斥，冲突只是大幅缓解而非消除，盲听仅对比训前基座且推理延迟与部署成本均未验证。欲复现取舍曲线与路由必要性，可按需查阅下方长文的方法推导、奖励分析、主结果与附录 B、C 权衡扫描及消融章节。

## 🔗 开源与复现资源

- 演示资源：<https://cucl-2.github.io/InstructTTS-OPD> → <https://cucl-2.github.io/InstructTTS-OPD/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 指令跟随语音合成为何在三目标下出现跷跷板

指令跟随语音合成的输入是目标文本加一条自由形式自然语言指令，输出是按描述方式朗读的语音波形。指令可以是颤抖啜泣的情绪，可以是粤语加不耐烦的方言加语气，也可以是语速与音色的组合。评价必须同时看三轴：指令跟随 IF 判断是否听从描述，为首要轴，区分普通合成；可懂度以字错误率 CER 衡量发音正确性；自然度以平均意见分 MOS 衡量是否顺耳。三者缺一即算失败，哭腔丢字或字准但平淡都不能算好。

主流后训练用群组相对策略优化 GRPO 加单标量奖励，把多目标压成一个数字。每个提示采一组采样轨迹，组内标准化得优势，再加 KL 锚定冻结参考。这种标量化丢掉方向信息：两目标对输出应如何变化意见相反时，贡献部分抵消，单标量无法表达取舍。优化漂向最易提升的轴，较软的目标主导共享更新，竞争目标回退，形成跷跷板。调权重只移动平衡点，不消除张力，质量与可懂易涨而首要的跟随反而最低。

图像领域的在策略蒸馏 OPD 提供替代思路：先训单目标专家，再让学生在自身采样轨迹上匹配教师速度场，得到稠密逐步监督，而非单标量。迁到语音并不直接，首要工作是每轴选可靠奖励。Gemini 判分可靠但查询数百万条采样轨迹成本过高，需蒸馏低成本代理；普通话识别器打分的 WER 与方言指令直接冲突；UTMOS 带语言偏置，会把中文推向外国口音。确认 3 路奖励后，才能训三教师再融合，并处理质量与跟随的逐帧冲突。

### DiTAR 自回归加流匹配骨干与在策略蒸馏总览

骨干为 DiTAR 风格，耦合自回归语言模型与局部流匹配解码器。每步语言模型读文本加已生成音频摘要，输出条件向量 \(c\) ，DiT 局部解码器在该条件下把高斯噪声转为当前帧音频隐变量，聚合编码器把新帧压缩为单向量送回语言模型，闭合自回归环，冻结声码器最后映射为波形。语言模型为 0.5B Qwen ，局部解码器为 193M ，聚合编码器为 48M ，共约 0.7B 。流匹配设每帧 5 个隐变量，ODE 共 10 步，其中连续 3 步转随机微分方程 SDE ，分类器无关引导强度为 2.0 。（教学例子：以 1 秒样本贯穿，维度以原文披露为准，未披露采样率与隐变量维度如实说明）

确定性 ODE 从固定噪声映射到单一输出，没有探索，无法支撑强化学习需要的方法把部分积分步转为随机微分方程 SDE ，在确定性均值周围加高斯噪声，使同一提示多次采样得到不同采样轨迹。每步记录状态 \(x_{t}\) 、条件、采样输出与转移对数概率，其中 \(\mu_{\theta}\) 为速度场诱导的单步均值，\(\sigma_{t}\) 为噪声尺度，\(\epsilon\) 为标准高斯噪声。下式给出单步采样与对数概率形式，为后文策略梯度与蒸馏的共享目标。

\[x^{\prime}=\mu_{\theta}(x_{t},t)+\sigma_{t}\,\epsilon,\qquad\epsilon\sim\mathcal{N}(0,I),\qquad\log\pi_{\theta}(x^{\prime}\mid x_{t})=-\frac{\lVert x^{\prime}-\mu_{\theta}(x_{t},t)\rVert^{2}}{2\sigma_{t}^{2}}+\text{const}.\]

物理直觉是均值代表确定性流方向，噪声项提供局部探索，方差决定轨迹发散程度；对数概率为负平方距离，偏离均值越远概率越低，由此得到似然以计算策略梯度。极端取 \(\sigma_{t}\) 为零退回确定性 ODE ，多样性消失，组内优势方差为零，更新停滞；\(\sigma_{t}\) 过大则采样偏离可懂语音，奖励噪声淹没信号，KL 正则也拉不住。输出的均值携带梯度，可直接回归，采样轨迹则成为教师速度场的落点，使监督恰好发生在学生将去的位置，驱动后文在策略蒸馏。

要一次看清三教师如何汇入同一学生，可先沿左侧学生到中间轨迹的主箭头看采样方向，再看 3 路颜色如何标注同一轨迹，最后看域路由框如何合并为单一学生。下图给出整体流水线，三色区分 3 路，箭头表示监督方向，右侧三勾表示三目标同时提升，有助于对照后文公式理解稠密监督与标量奖励的区别。

[![原论文 Figure 1：Overview of InstructTTS-OPD.](https://arxiv.org/html/2611.33937v1/overview.png)](https://arxiv.org/html/2611.33937v1/overview.png)

*论文图 1：学生自采样轨迹被三教师速度场标注，经域路由汇入单一学生的整体流水线（原论文 Figure 1）。*

像素中左侧 Student 方框向右引出带圆点的波浪轨迹，下方波形图标注在策略采样轨迹。中间绿色 IF 教师、蓝色 WER 教师、橙色 MOS 教师各伸出同色箭头指向轨迹，标注 velocity field ，表示在学生访问点求教师速度。右侧 On-Policy Distillation 方框注明域路由与匹配速度稠密逐步，最右 Student 方框内三色对勾分别标 IF 、WER 与 MOS ，下方注明三者同时提升，避免标量跷跷板，与正文三教师加路由加冲突感知融合一致。

### 三路可靠奖励与单目标 GRPO 教师如何得到

三教师各用群组相对策略优化 GRPO 在单奖励上训练。IF 奖励为判分模型给出的二值一致性三票多数，取值为 0 或 1 ；WER 奖励为 \(r_{WER} = 1 - \min(CER, 1)\) ，由 Paraformer-zh 识别得到；MOS 奖励为 1 到 5 的无参考质量分。每提示采一组在策略采样轨迹，组内标准化得优势，仅相对优劣驱动更新，再加 KL 正则锚定冻结参考，防止基线音质漂移。每位教师在自轴最强而在他轴明显偏弱，为后文融合提供方向明确的速度目标。

#### 组相对优化与指令代理的有效性

组相对更新的计算目标是最大化优势加权对数似然，同时约束与参考的偏离。关键符号中 \(A\) 为组内标准化优势，\(\pi_{\theta}\) 为当前策略，\(\pi_{ref}\) 为冻结参考，\(\beta\) 为 KL 系数取 0.01 ，\(G\) 为每提示采样轨迹数，教师训练时取 32 。下式给出带 KL 正则的策略梯度损失，为三教师的统一训练目标。

\[\mathcal{L}_{\mathrm{GRPO}}=-\,\mathbb{E}\big[A\,\log\pi_{\theta}\big]+\beta\,\mathrm{KL}\!\left(\pi_{\theta}\,\|\,\pi_{\mathrm{ref}}\right).\]

统计直觉是组内标准化消除提示难度差异，只有组内相对好坏决定推拉方向，优势为正推高该轨迹概率，为负则压低。极端取组内奖励全相等则标准差为零，优势无定义，更新退化；\(\beta\) 过大则策略被锁死在参考附近，单轴无法提升，\(\beta\) 为零则易漂移丢掉基线音质。输出的梯度直接改变速度场均值，使教师向自轴最优移动，3 位教师由此分化，为后文蒸馏提供互补但冲突的速度场。

指令跟随奖励能否用低成本代理替代昂贵 Gemini ，是融合可行的前提。正文误将散点描述写作 Figure 3 ，像素实为代理有效性散点，应以像素为准。下图以每对模型加步骤检查点为一点，横轴为蒸馏 Qwen-Omni 代理 IFqwen ，纵轴为 Gemini 真值 IF ，对照最小二乘拟合线看是否紧贴直线。

[![原论文 Figure 2：Distilled Qwen-Omni IF proxy vs.](https://arxiv.org/html/2611.33937v1/fig_if_proxy_scatter.svg)](https://arxiv.org/html/2611.33937v1/fig_if_proxy_scatter.svg)

*论文图 2：42 个检查点上蒸馏代理与 Gemini 判分一致性的散点及拟合线（原论文 Figure 2）。*

像素中 42 个蓝色圆点为检查点，黑色直线为最小二乘拟合，左上标注 \(N = 42\) ，Pearson 相关系数 \(r = 0.953\) ，Spearman 秩相关 \(\rho = 0.913\) 。点群自左下 46% 附近向右上 82% 附近延伸，紧贴拟合线，仅中段个别点略偏离。横纵均为百分比，范围约 45% 到 82% ，表明代理排序与 Gemini 高度一致，可在训练与选点中替代 Gemini ，大幅降低奖励服务器成本。

#### 方言陷阱与质量预测的语言偏置

可懂度奖励必须去方言。若 WER 教师训练见方言，普通话识别器会奖励放弃方言的普通话，WER 数字下降但跟随崩塌。原文在粤语子集上显示，带方言数据时 IF 长期近 10% ，而不带方言时为其 3 到 7 倍，尽管后者被普通话识别器报出更高 WER ，故训练去方言并以去方言 CER 报告。质量侧，匹配干净人声的中英文录音真值相当，UTMOS 给英文 3.491 ，中文 2.774 ，差距占量程 17.9% ，源于几乎全英文训练数据；DNSMOS P.835 OVRL 中文为 3.183 ，英文为 3.071 ，差距仅 2.8% ，SIG 与 BAK 也在 3.3% 以内，故选 DNSMOS OVRL 为奖励与 headline 指标。

为确认识别器后端是否影响结论，原文比较 Paraformer-zh 与 Qwen3-ASR 在完整 zh_DSD 含方言集上的语料 CER 。下表列出监督基座与人类真值的两行对照，可看两后端差距是否大到需要更换更强后端，理解为何最终保留 Paraformer-zh 。

| Speech | Paraformer-zh | Qwen3-ASR |
| --- | --- | --- |
| Base | 3.51 | 3.17 |
| GT | 9.84 | 8.12 |

两后端在基座上为 3.51% 对 3.17% ，差距 0.34 个百分点；在人类真值上为 9.84% 对 8.12% ，差距 1.72 个百分点。人类真值 CER 反而高于合成，源于含方言与表达性语音对识别的挑战，并非合成超过真人。两后端排序一致，差距未大到改变结论，故保留 Paraformer-zh 作奖励后端，另以 Qwen3-ASR 的 CERq3 作 held-out 防过拟合。若只看数字易误以为换后端能大降误差，实际主要矛盾在方言数据而非后端能力。

### 域路由加冲突感知速度融合如何避免相加抵消

融合不在标量奖励层求和，而在速度场空间直接匹配教师。学生与教师共享流匹配转移核，单步转移均为同协方差高斯，其 KL 闭式化为均值平方距离除以方差项，成为零方差可微回归，无需优势或策略梯度估计。关键是组合方式：按数据域路由，每条采样轨迹只跟一个主教师，指令域跟 IF 教师，WER 域跟 WER 教师，混合比由 1 比 1 数据比决定；质量无自有域，作为轻量辅助加到所有采样轨迹，权重 \(\lambda_{MOS}\) 取 0.3 ，定位为护栏而非竞争目标。

学生最小化的计算目标是两项均值平方误差之和。符号中 \(\mu_{student}\) 为学生均值，\(\mu_{d(i)}\) 为按采样轨迹数据域选定的主教师均值，\(d(i)\) 取 IF 或 WER ，\(\mu_{MOS}\) 为质量教师均值，\(sg\) 为停止梯度算子冻结教师为固定目标，\(\lambda_{MOS}\) 为质量护栏权重。下式给出加性融合损失，为冲突感知改造前的基准形式。

\[\mathcal{L}_{\mathrm{OPD}}=\big\lVert\mu_{\mathrm{student}}-\mathrm{sg}(\mu_{d(i)})\big\rVert^{2}\;+\;\lambda_{\mathrm{MOS}}\,\big\lVert\mu_{\mathrm{student}}-\mathrm{sg}(\mu_{\mathrm{MOS}})\big\rVert^{2},\]

直觉是两项独立回归梯度直接相加，相容时共同细化同一帧，不相容时部分抵消。极端取 \(\lambda_{MOS}\) 为零退回纯主目标路由，质量无约束；\(\lambda_{MOS}\) 增大到 1.0 甚至 2.0 时，质量推力在几乎每帧携带反向分量，逐步侵蚀已表达的哭腔与方言。输出的梯度改变学生均值，向两教师折中移动，加性形式无法表达只允许正交细化而不许反向拉平的几何约束，正是后文投影要解决的跷跷板。

冲突感知融合把几何而非加权作为组合语言。记主更新方向为 \(d_{P} = \mu_{d(i)} - \mu_{student}\) ，质量更新方向为 \(d_{U} = \mu_{MOS} - \mu_{student}\) ，内积符号判夹角是否钝角，\(\min\) 算子只在反向时截取投影。下式先从 \(d_{U}\) 中减去直接反对 \(d_{P}\) 的分量，保留对齐与正交部分，再以 \(\lambda_{MOS}\) 缩放存活推力，构造单均方误差目标。

\[d_{U}^{\mathrm{keep}}=d_{U}-\frac{\min\!\left(\langle d_{U},d_{P}\rangle,\,0\right)}{\lVert d_{P}\rVert^{2}}\,d_{P},\qquad\mathcal{L}_{\mathrm{OPD}}^{\mathrm{conflict}}=\big\lVert\mu_{\mathrm{student}}-\mathrm{sg}\!\left(\mu_{\mathrm{student}}+d_{P}+\lambda_{\mathrm{MOS}}\,d_{U}^{\mathrm{keep}}\right)\big\rVert^{2}.\]

当内积为负即夹角大于 90 度，反向分量被投影去除，剩余 \(d_{U}^{keep}\) 与 \(d_{P}\) 正交，质量只能润色音色与平滑度，不能拉平哭腔或方言；当内积非负则完整保留质量推力。极端两方向完全相反时，质量项几乎被清零，主目标不受损；完全对齐时等价于加性融合。目标整体停止梯度，损失退化为单均方误差，\(\lambda_{MOS}\) 线性缩放存活推力，使质量成为只做正交调整的护栏，这是标量策略梯度无法表达的输出空间几何操作。

### 融合模型在 zh_DSD 上为何三轴同时超越标量基线

评测协议与公平性前提集中在开头。所有模型从同一监督 DiTAR 基座出发，在 30,000 条指令跟随加 30,000 条可懂度数据上后训练，比例 1 比 1 ，指令均为 ZH-DSD 风格。主评测为 InstructTTSEval 的 DSD 子集 zh_DSD ，共 1,000 条。每轴以奖励侧指标加 held-out 双报防作弊：IF 以蒸馏 Qwen2.5-Omni 代理选点加 Gemini 终判，CER 以 Paraformer-zh 加 Qwen3-ASR 的 CERq3 去方言报告，质量以 DNSMOS P.835 OVRL 加 UTMOS 。Avg 为 IF 、CER 取反与 DNSMOS 归一化到 0 到 1 后的均值，不含 held-out 。

#### 主表三轴与防过拟合验证

下表给出 zh_DSD 主比较，含人类真值、3 位单目标教师、标量多奖励 GRPO 、完整 OPD 与去冲突感知消融。Avg 越高越好，IF 与 DNSMOS 向上最优，CER 向下最优，可先看教师各强一轴弱他轴，再看融合谁保住首要 IF 的同时不丢另两轴。

| System | IF ↑ | CER ↓ | DNSMOS ↑ | Avg ↑ |
| --- | --- | --- | --- | --- |
| Base (supervised) | 72.2 | 3.18 | 2.81 | 0.48 |
| Teacher: IF | 82.1 | 2.53 | 2.98 | 0.70 |
| Teacher: WER | 71.0 | 1.94 | 3.25 | 0.70 |
| Teacher: MOS (quality) | 55.0 | 2.60 | 3.70 | 0.63 |
| GRPO multi-reward | 77.0 | 2.34 | 3.25 | 0.75 |
| InstructTTS-OPD | 81.1 | 2.25 | 3.28 | 0.82 |
| w/o conflict-aware fusion | 79.4 | 2.29 | 3.31 | 0.80 |

趋势是教师分化而融合分层。IF 教师以 82.1% 居首，WER 教师以 CER 1.94% 最低，MOS 教师以 DNSMOS 3.70 居首但 IF 跌到 55.0% 。融合中完整 OPD 取 IF 81.1% ，低于 IF 教师的 82.1% ，CER 取 2.25% ，高于 WER 教师的 1.94% ，DNSMOS 取 3.28 ，Avg 取 0.82 为全表最高。标量多奖励 GRPO 虽带组解耦归一化，IF 仅 77.0% ，低于另两个融合系统，偏向易涨的质量与可懂。去冲突感知消融的 DNSMOS 为 3.31 ，高于完整 OPD 的 3.28 但仍低于 MOS 教师的 3.70 ，其 IF 为 79.4% ，低于完整 OPD 的 81.1% ，证实加性质量重引跷跷板。held-out 的 CERq3 与 UTMOS 保持同序，UTMOS 整体偏低只看排序，证实非奖励过拟合。未胜出项是 OPD 的 DNSMOS 3.28 低于去冲突消融的 3.31 ，为保 IF 付出的代价。

#### 跨风格与跨语言泛化

模型仅见 ZH-DSD 风格，能否泛化到未见指令形式需看全部六子集。下表以 Gemini 判分报告 ZH 与 EN 乘 APS 与 DSD 与 RP 的 IF 百分比，ZH 用原指令，EN 用中文翻译，对比开源与闭源基线，重点看分布内 DSD 与分布外 APS 、RP 及英文侧的增益是否持续。

| Model | InstructTTSEval-ZH APS (↑) | InstructTTSEval-ZH DSD (↑) | InstructTTSEval-ZH RP (↑) | InstructTTSEval-EN APS (↑) | InstructTTSEval-EN DSD (↑) | InstructTTSEval-EN RP (↑) |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3TTS-12Hz-1.7B-VD (Hu et al., 2026a) | 85.2 | 81.1 | 65.1 | 82.9 | 82.4 | 68.4 |
| Base (Ours, before RL) | 86.0 | 76.9 | 54.4 | 79.2 | 69.5 | 46.4 |
| IF teacher (Ours) | 90.9 | 83.9 | 58.7 | 81.3 | 75.6 | 48.8 |
| InstructTTS-OPD (Ours) | 90.6 | 82.1 | 56.2 | 80.8 | 73.4 | 47.2 |

后训练在六子集全面超过基座，分布内 DSD 增益最大，ZH DSD 从 76.9% 升到 82.1% ，ZH APS 从 86.0% 到 90.6% ，更难的 RP 与英文侧增益较小但持续。开源中模型在中文三子集最强或次强，ZH APS 的 90.6% 仅次于 IF 教师的 90.9% ，英文侧具竞争力。与闭源 Gemini 相比，RP 风格与英文仍有差距，原文完整表中 Gemini-flash 在 EN APS 达 92.3%，显著高于 OPD 的 80.8%，该行未列入当前精简表。VoiceSculptor 英文缺测来自原文完整表，未列入当前精简表，不纳入比较。人工听测仅在附录作盲听 A/B ，后 RL 以 35.0% 胜、28.3% 负、36.7% 平优于前 RL ，净多 6.7 个百分点，但听众数与置信区间原文未披露，方差与失效案例亦未系统报告。

### 质量权重扫描与域路由消融揭示何种冲突几何

冲突先是逐帧几何，再落到指标前沿，答案取决于看哪对目标。实验扫两旋钮：固定 \(\lambda_{MOS}\) 扫指令比 WER 数据比，看 IF 与 WER 是否权衡；固定 1 比 1 扫质量权重 \(\lambda_{MOS}\) ，对比有无冲突感知，看 IF 与 DNSMOS 前沿形状。附录 B 给完整数字，附录 C 以加权共蒸馏对照验证路由必要性。

#### 逐帧夹角的演化与近全冲突

冲突感知是否重要取决于两方向实际多久冲突一次。下图左为余弦相似度分布随训练步的中位数加 10% 到 90% 带，右为对齐、冲突与强反对帧占比，可先看中位数何时转负，再看对齐帧是否归零以判断加性融合的风险。

[![原论文 Figure 4：Per-frame geometry between the quality direction d_U and the primary direction d_P over training.](https://arxiv.org/html/2611.33937v1/fig_conflict_angle.svg)](https://arxiv.org/html/2611.33937v1/fig_conflict_angle.svg)

*论文图 4：训练中质量方向与主方向夹角分布及对齐冲突帧占比的演化（原论文 Figure 4）。*

像素左图横轴为 0 到 300 步，纵轴为 \(d_{U}\) 对 \(d_{P}\) 的余弦，中位数红线约 15 步内由正转负，此后稳定在负 0.5 附近，粉色 p10-p90 带始终宽但整体下移。右图横轴同为训练步，纵轴为帧占比，红色冲突帧 \(\theta > 90\) 度自零迅速爬升到近 1.0 ，绿色对齐帧 \(\theta &lt; 45\) 度跌到近零，棕色强反对帧 \(\theta &gt; 135\) 度缓慢涨到约 0.15 。学生一旦变 expressive ，质量几乎在每帧反对主目标，加性求和将处处携带反向分量，逐帧投影因而必要。

#### 数据比、质量权重与路由消融

下表为指令比 WER 数据比扫描的精简子集，\(\lambda_{MOS}\) 固定 0.1 ，取每比最佳 IF 检查点，首尾行为 2 位教师极端。可看加 WER 数据后 CER 是否向地板下降，同时 IF 是否保持，以判断两主目标是否真无权衡。

| IF:WER | IF ↑ | CER ↓ | DNSMOS ↑ |
| --- | --- | --- | --- |
| IF teacher | 82.1 | 2.53 | 2.98 |
| 1:1 | 79.6 | 2.31 | 3.18 |
| 1:2 | 81.2 | 2.35 | 3.19 |
| 1:4 | 79.8 | 2.09 | 3.23 |
| WER teacher | 71.0 | 1.94 | 3.25 |

前沿近乎平坦：精简表内 1 比 2 达 81.2% ，1 比 4 为 79.8% ，连同表内 1 比 1 的 79.6% ，整体在 79.6% 到 81.2% 间波动，1 比 4 时 CER 降到 2.09% ，均未损跟随，证实路由到互不相交的采样轨迹使两者同涨。两端教师为极端，IF 教师 82.1% 对 CER 2.53% ，WER 教师 71.0% 对 CER 1.94% ，中间比在两者间取得兼顾而非折中。若无路由而是加权共蒸馏，附录显示 IF 全程低数个百分点且早段即下 drift ，两轨迹从不重叠，差距集中在首要 IF ，而 CER 与 DNSMOS 仍在目标内，说明单靠稠密监督不够，路由才是保 IF 主因。缺失消融是未扫非 1 比 1 下的 \(\lambda_{MOS}\) 交互，方差与置信区间亦未报告。

路由与加权共蒸馏的差距需看全程曲线而非单点。下图横轴为 50 到 250 步，纵轴为 Qwen-Omni 代理 IF ，蓝色为域路由，红色为加权共蒸馏，棕色虚线为 IF 教师 82.1 ，灰色虚线为基座 72.2 ，可比较两曲线相对位置与走向。

[![原论文 Figure 6：Domain routing vs. weighted co-distillation: IF (Qwen-Omni RM) at every checkpoint through…](https://arxiv.org/html/2611.33937v1/fig_ablation_routing_if.svg)](https://arxiv.org/html/2611.33937v1/fig_ablation_routing_if.svg)

*论文图 6：相同教师与数据下域路由与加权共蒸馏的指令跟随全程曲线（原论文 Figure 6）。*

像素中蓝色路由线自 79.0% 附近升到 81.2% ，逼近教师天花板，红色加权线自 77.6% 附近缓降到约 75.1% ，两带从不重叠。质量权重扫描影子一致：无冲突感知时 \(\lambda_{MOS}\) 从 0.1 到 2.0 ，IF 从 79.0% 跌到 62.0% ，DNSMOS 从 3.17 升到 3.61 ；有冲突感知时 IF 从 78.7% 仅跌到 72.6% ，DNSMOS 从 3.15 到 3.46 ，同权重下 IF 高 2 到 10 个百分点。0.3 处有无投影为 75.8% 对 78.3% ，代价是 DNSMOS 3.31 对 3.28 ，投影以微小质量换显著跟随，拉平权衡。

### 假设边界、复现前提与工程选型建议

结论成立依赖三假设。奖励侧假设蒸馏代理持续跟踪 Gemini ，附录外未见跨风格漂移监测；WER 去方言假设普通话识别器在非方言上可靠，若指令含重口音或代码切换，去方言报告可能掩盖真实可懂；质量侧假设 DNSMOS 与人耳一致，但仍是神经代理，非大规模人工 MOS ，UTMOS 只作排序参考。冲突感知假设反向分量有害而正交无害，保留的正交与对齐推力仍可能次优，\(\lambda_{MOS}\) 取 0.3 为护栏经验值，非最优搜索。

未验证部署条件包括流式分块、前瞻延迟、实时率 RTF 与显存，原文仅给 ODE 10 步、SDE 窗 3 步与引导强度 2.0 ，无延迟与吞吐数字，采样率与帧率亦未披露，1 秒张量细节无法完整复算。复现需区分三件事：代码与权重原文未披露公开状态，不可写已开源；系统可运行性无一键脚本证据；当前可用的是试听页，可在试听中对照哭腔、方言与基座的差异，不虚构听感。超参在附录给出，GRPO 每提示 32 条、KL 系数 0.01 ，OPD 每提示 16 条、无需奖励服务器，训练 350 步用 4 节点乘 8 卡，卡型号与耗时未披露。

工程选型上，若首要保指令跟随且需兼顾可懂与自然，优先域路由加小质量权重加冲突感知投影，而非调大标量权重；若追求单轴极致，可直接用单教师，如极致自然用 MOS 教师但接受 IF 跌到 55.0 。跨分布应用需预期 RP 与英文 gap ，ZH-DSD 外应先小规模 Gemini 抽检再放量。人类偏好仅证实后 RL 优于基座 6.7 个百分点，未与标量多奖励基线作盲听对比，选型时应补自身听测而非只看代理分。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率、帧率与隐变量维度原文未披露；每帧 5 个隐变量，ODE 共 10 步，其中连续 3 步转 SDE ，因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：监督基座后在 30,000 条指令跟随数据加 30,000 条可懂度数据上后训练，比例 1 比 1 ，指令均为 ZH-DSD 风格；主评测为 InstructTTSEval 的 zh_DSD 子集，共 1,000 条，另报全六子集 ZH 与 EN 乘 APS 与 DSD 与 RP 的泛化；WER 训练去方言并以去方言 CER 报告
- **算力与训练耗时**：4 节点乘 8 卡训练 350 步，GRPO 每提示 32 条采样轨迹，OPD 每提示 16 条，卡型号与耗时原文未披露；推理硬件原文未披露
- **核心超参数与配置**：GRPO 学习率 2×10-6 ，KL 系数 0.01 ，OPD 学习率 2×10-6 ，无 KL ，优化器 Adam 参数 0.9 与 0.95 ，微批 4 累积 4 ，每 50 步存点，质量护栏权重 0.3 ，流匹配每帧 5 个隐变量，ODE 10 步 SDE 窗 3 步，引导强度 2.0
- **推理速度与部署开销**：解码 ODE 10 步含 3 步 SDE 窗，引导强度 2.0 ，参数约 0.7B ，声码器冻结，RTF 、延迟、吞吐与显存原文未披露
- **开源产物与协议状态**：原文仅给出试听页且当前可用，代码、权重、数据与一键运行脚本的公开状态原文未披露，不可视为已开源
- **附录与补充材料要点**：附录 A 给出 GRPO 与 OPD 超参表，附录 B 给出数据比与质量权重扫描完整数字，附录 C 以加权共蒸馏对照证实路由必要性，附录 D 以盲听 A/B 给出后 RL 对基座 35.0% 胜 28.3% 负 36.7% 平

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33937v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在流匹配速度场上实现域路由加逐帧冲突投影的可微融合机制并给出闭式推导。

- 核心优势：在匹配教师与数据下对比标量多奖励GRPO并以直接消融定位投影的因果作用。

- 主要短板：人类盲听仅对比训前基座而未对比标量GRPO融合，且未报告听测人数样本量与置信区间。

- 主要短板：图2与图3及表1与表2指代错位且Avg归一化上下界未披露，正文学习率漏写系数。

- 主要短板：未披露GPU型号时长与推理延迟或实时因子及测试硬件规格，无部署实测支撑。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
