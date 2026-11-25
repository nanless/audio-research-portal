---
title: "BASE: A Backend-Agnostic Streaming Embodiment Layer for Full-Duplex Conversational Avatars"
date: 2026-11-24
draft: false
tags: [语音驱动手势生成, 全双工语音交互, 流匹配, 数据增强]
categories: [论文速递]
description: "针对紧耦合化身更换后端需重训且无法接入只给音频的云端 API 的问题，BASE 仅以发射语音驱动会话状态机与滑动窗手势生成，以 BEAT2 上 streaming FGD 0.342 持平耦合式 MIBURI 0.333 且获约八成观众偏好为证据，代价是动作质量系于输入韵律并需 VAD 与姿态弹簧兜底长时漂移与延迟。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30388"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "只听发射语音的全双工化身：BASE 的滑动延续与漂移感知训练"
paper_digest_original_title: "BASE: A Backend-Agnostic Streaming Embodiment Layer for Full-Duplex Conversational Avatars"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30388v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30388v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30388v1.pdf"
paper_digest_primary_task: "语音驱动手势生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-driven-gesture","label":"语音驱动手势生成"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.augmentation","label":"数据增强"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对紧耦合化身更换后端需重训且无法接入只给音频的云端 API 的问题，BASE 仅以发射语音驱动会话状态机与滑动窗手势生成，以 BEAT2 上 streaming FGD 0.342 持平耦合式 MIBURI 0.333 且获约八成观众偏好为证据，代价是动作质量系于输入韵律并需 VAD 与姿态弹簧兜底长时漂移与延迟。"
paper_digest_reader_sections: [{"heading":"紧耦合化身在更换对话后端时为何代价高昂","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"只读发射语音的化身层与 1 秒音频的张量旅程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"滑动延续与重叠前瞻集合如何抹平窗口接缝","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"漂移感知历史扰动如何模拟推理期自生误差","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"解耦是否损失质量与多后端延迟的实测权衡","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"历史漂移主导 streaming 差距与各组件增益归因","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"音频唯一接口的边界、复现前提与选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["College of Computing and Artificial Intelligence, United Arab Emirates University"],"name":"Chenye Yang"},{"affiliations":["College of Computing and Artificial Intelligence, United Arab Emirates University"],"name":"Jin Jiang"},{"affiliations":["College of Computing and Artificial Intelligence, United Arab Emirates University"],"name":"Shengcai Liao"}]
paper_digest_abstract_sha256: "bc5fbd6dfb9ec59b184e71e222c1889b13494642c3793b5b6c2a4cb56375870d"
paper_digest_sidecars: {"citation.bib":{"sha256":"314e70c2466a4bb7235dcdf74d43805f2b4d6956f8da284b2c48c6f64ae477ec","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30388/citation.bib"},"citation.json":{"sha256":"d65b009968b571452e12504955146dae4a494f0e2262c71abb1c1dfe7f094448","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30388/citation.json"},"citation.ris":{"sha256":"445a50ff7ff78e505bb6f8126a4523d21814dc0854644ab93581eeb8394770ef","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30388/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3552bc408d4fce94edcd93b64269e196db30810ba09ba49ffd4072d92ed76c53","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30388/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "81537027c597350131df631abd0e74cece8988892c89dfb40acaa0bb979c3373"
paper_digest_api_reader_plan_sha256: "0f4352a9c95ff17e9853e7121100ea9895dea13bf47e3ba44f1c5a56efc44584"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "684799c70772c21e02f28ba98bb9dbaba4e4156d6ebc8628c15d2d48fe783f0f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "68bb1da9bf949aae54ba5cb7301fc45631ac43ce6fe47cd6c34322bb644e24e7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "b9531dca0a254e08518ff54eb6bf453b63166eaba5a9f70f52c86eaffda6eddc"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a384b81eced4b13fbdc928ee635072d1613d38e781c78916760c9aa0238a84aa"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 只听发射语音的全双工化身：BASE 的滑动延续与漂移感知训练

> 英文题目：*[BASE: A Backend-Agnostic Streaming Embodiment Layer for Full-Duplex Conversational Avatars](https://arxiv.org/abs/2611.30388v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音驱动手势生成](/audio-paper-digest-blog/papers/?concept=task.speech-driven-gesture)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[数据增强](/audio-paper-digest-blog/papers/?concept=method.augmentation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 7.5/10 | 技术严谨 7.4/10 | 实验充分 7.8/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.5/10 | 工程/实践 7.6/10


## 👥 作者与机构

- Chenye Yang：College of Computing and Artificial Intelligence, United Arab Emirates University
- Jin Jiang：College of Computing and Artificial Intelligence, United Arab Emirates University
- Shengcai Liao：College of Computing and Artificial Intelligence, United Arab Emirates University

## 📌 核心摘要

**问题与瓶颈：** 会话化身需把对话后端吐出的语音变为与声音同步的全身手势、倾听反馈与轮次切换，输入为后端回复语音流与用户麦克风信号，输出为身体与面部动作序列。主流做法把动作生成器紧耦合到特定对话模型，读取其内部音频文本词元或隐状态，或把语音与动作联合训练。更换底座就要重训动作模块，只暴露原始音频的云端接口无法接入，且角色、音色与动作风格相互缠绕。高保真手势模型多为离线双向多秒窗口加迭代去噪，直接滑窗会产生接缝抖动与长时漂移，而会话还需空闲、倾听、说话、打断与主动发言在同一时间轴连续调度并满足音画同步与时延预算。

**核心思路与方法架构：** BASE 的直觉是协同语音手势主要受保留在吐出语音中的韵律、节奏与能量支配，因而只以语音音频为唯一接口即可解耦。与读取 Moshi 内部词元的 MIBURI 相比，BASE 保留现成流匹配生成器，改动是滑动窗口续写、重叠前视集成与漂移感知历史扰动，再用会话状态管理器统一调度。以 30 fps、2 s 窗为例，W = 60 帧中前 40 帧为历史，模型续写后 20 帧并吐出前 N = 10 帧即 0.33 s 步长，保留后 10 帧作前视，回复音频经冻结的 WavLM 得到声学特征 ca 与冻结的音频到表情模型得到表情 e，连同风格编号送入 6 层流匹配 Transformer，以 8 步欧拉采样与 4 倍无分类器引导生成，再与上一窗口前视线性衰减平均并锚定绝对时间轴噪声。每帧与对应音频切片及表情 e 打包播出，按后端粒度预缓冲并附加 0.2 s 抖动余量，仅由语音活动检测与回复音频事件在五种状态间切换，说话起音 20 帧淡入、结束或被打断 15 帧过渡到动捕空闲片段。训练只更新生成器，滑动窗口适配学习补全后 S ∈ [6, 20] 帧约 20 分钟单卡完成，第二阶段扰动只用原 BEAT2 训练集 19.3 小时约 50 分钟单卡完成，角色、音色、动作风格与外观四路独立指定，实验进一步证明流式缺口来自自生历史累积而非缺少未来语音。

**关键实验与核心代价：** 在 249 个 BEAT2 测试片段上，Fréchet 手势距离 (FGD，越低越好 ↓) 上流式 BASE 为 0.342 ± 0.002，与紧耦合 MIBURI 的 0.333 持平，同生成器预见整段语音时为 0.251，读入真值文本的 GestureLSM 离线为 0.723 而 0.4 s 滑窗时恶化到 1.504。节奏对齐 A 与 BeatAlign (BA，均以接近真值 0.632 与 0.604 为好) 上 BASE 为 0.635 与 0.622，均最接近真值，速度 1.09 接近真值 1.00，躯干高频能量从 36.4 降到 3.5，真值描边的 171 个重读词里 BASE 跟随 60% 而 MIBURI 为 43%，80 s 后骨盆漂移为 13.5 cm 对 43.7 cm，真值为 6.1 cm。消融显示直接滑窗为 2.008，滑动窗口适配降到 0.632，前视集成到 0.518，8 步采样到 0.464，漂移感知扰动到 0.342 为适配后单步最大增益并迁移到 GestureLSM 使其从 1.504 降到 1.157 降幅 23%，1.5 Hz 低通把残余抖动从 8.1 降到 3.5 而 FGD 不变。人工双选未用神经代理指标，20 名志愿者中 3 人未过注意力检查剔除后 17 人纳入分析，每组 6 段共 24 段片段上约 80% 偏好 BASE，17 人中有 16 人总体更偏好 BASE 而非 MIBURI，真值与 BASE 未拉开可辨差距，但只看短时身体动作而不含会话体验、面部动画与时延。同一层无重训驱动 5 种后端，端到端中位时延 1.31 s 到 2.97 s，其中体现层约 0.75 s，每 333 ms 窗中位生成 96.7 ms 即实时率 (RTF，越低越好 ↓) 为 0.29，打断取消中位 0.28 s，倾听启动 0.15 s，站姿弹簧以 0.041 FGD 为代价把漂移压到接近真值范围，级联合成语音因韵律导致 FGD 升到 2.21。

**适用边界与深读导览：** 结论成立依赖输入韵律正常，只用音频意味着纯语义手势无法生成，轮次依赖语音活动检测而在开放环境需耳机或回声消除与说话人感知轮次检测，倾听行为尚未按用户话语内容条件化。曝光偏差只是减轻而未消除，长会话仍靠站姿弹簧，首窗音频等待占据剩余时延大头，定制与延迟结论基于 10 问小样本与非配对 FGD 与 BA，跨说话人、长时与噪声条件仍需谨慎外推。想深究机制可查第 3.2 节式 (1) 的重叠集成与噪声锚定、第 3.3 节式 (2) 的边界连续衰减、第 4.2 节图 4 的历史重置与未来语音对照、第 4.3 节表 3 的消融与附录 H 的重型蒸馏和自展回归失败分析。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 紧耦合化身在更换对话后端时为何代价高昂

端到端语音对话模型已能实时全双工交谈，可同时聆听与发声并处理句中打断。把这类语音模型变为 3D 化身，还需要全身手势、聆听反馈与轮次管理。手势需跟随语音韵律起伏，聆听姿态需持续响应用户麦克风，站姿与目光需在长时会话中保持稳定，同时满足严格的音画同步与延迟预算。任何绑定动作生成与对话后端的方案，都要在同一时间线上处理说话、聆听、被打断与主动发言。

已有工作把动作生成与对话模型紧紧耦合。第一类读取冻结内部状态，例如 MIBURI 读取 Moshi 内部音频文本 token ，DyaPlex 在 PersonaPlex 隐状态上训练重型动作塔。第二类在单一多模态模型内联合训练语音与非言语行为，例如 ELLSA 2 在 10.78B 参数模型中联合优化语音、表情与上半身手势。这种紧耦合带来三处瓶颈。对话模型数月即换代，每次更换都迫使动作模块从头重训，DyaPlex 需要 64×H100 级算力。云端 API 如 Gemini Live 只暴露原始音频，内部状态不可用。隐状态条件还把角色、音色与动作风格纠缠在一起，改动其一会扰动其余。

为定位解耦价值，先沿耦合程度对比会话化身框架。下表区分无对话模型的离线窗口与流式手势生成，以及读取内部 token 、读取隐状态、联合端到端与回复语音映射 4 类会话化身，列出驱动信号、全双工能力、身体范围、聆听支持与定制维度，并对比后端替换、工具调用与训练代价。BASE 以发射音频为唯一接口，支持 5 种后端免重训切换与 4 路独立定制，训练代价仅约 ∼1 GPU-hour ，与从头训练形成对照。

| Method | Driving signal | Customization | Backend swap | Training cost |
| --- | --- | --- | --- | --- |
| MIBURI [22] | Moshi internal tokens | Speaker ID | Retrain | Medium† |
| DyaPlex [23] | PersonaPlex hidden states | Voice timbre | Retrain | 64×H100† |
| ELLSA 2 [34] | Joint end-to-end | Style prompt | Monolithic | 10.78B, multi-stage |
| BASE (ours) | Emitted audio only | Role, voice, styles, avatar | 5 backends, no retraining | ∼1 GPU-hour§ |

表中对照显示，紧耦合路线用重训换取对话感知，MIBURI 换后端需重训，DyaPlex 需 64×H100 ，ELLSA 2 为整体式多阶段训练。BASE 保留音频驱动手势这一成熟路线，替换掉对内部状态的依赖，并从后端继承工具调用能力。这一选择的前提是协同语音手势主要受发声韵律、节奏与能量支配，发射语音已携带足够线索。但把离线 2 s 流匹配生成器搬到直播音频上，会遇到窗口接缝抖动与自生历史漂移两类退化，需在方法中分别处理。

### 只读发射语音的化身层与 1 秒音频的张量旅程

#### 语音接口与会话状态机

读图时可先看上半部分化身层总览，再看下半部分滑动窗单步细节。上半部分左侧为对话后端与用户麦克风，中部为后端适配器、流式动作生成器、音画打包器与会话状态机，右侧为动作混合渲染与虚拟形象，顶部标注角色、音色、风格与外观 4 路定制归属。下半部分标题为 one sliding-window step (every 10 frames) ，60 帧窗口包含 40 帧历史与 20 帧生成区，而该单步每步实际输出 10 帧即 10 frames out ，另保留后 10 帧作为前视重叠，集合平均与扰动训练分处推理与训练分支。

[![原论文 Figure 2：Architecture of BASE. (a) The embodiment layer (1) reads only the speech audio emitted by any…](https://arxiv.org/html/2611.30388v1/fig2_v4.png)](https://arxiv.org/html/2611.30388v1/fig2_v4.png)

*论文图 2：仅读发射语音的化身层总览与每步输出 10 帧的滑动窗单步，前瞻集合与历史扰动分处推理与训练（原论文 Figure 2）。*

该架构的核心是语音唯一接口。后端适配器重采样发射音频并按后端输出粒度组帧，可吸收从句级 TTS 到 80 ms 全双工步进与 1 s 分块。音画打包器把每帧身体动作与其音频切片及表情 e 绑定，辅以与块大小匹配的预缓冲与 0.2 s 抖动余量，保证播放不欠载。会话状态机仅由用户麦克风的 VAD （语音活动检测）与回复音频事件驱动，在空闲、聆听、说话、打断与主动五态间切换，独立设定角色、音色、动作风格与外观。

#### 1 秒样本的端到端流动

以 1 s 回复音频为例追踪张量流，此时动作帧率为 30 fps ，对应约 30 帧身体动作。发射音频先经冻结的 WavLM （声学特征编码器）得到声学特征 c_a ，并经冻结的 A2E （音频到表情）模型得到表情 e 。生成器窗口固定为 W=60 帧即 2 s ，其中前 40 帧为已播出的自生历史，后 20 帧待生成，每步实际播出前 N=10 帧即 0.33 s ，后 10 帧作为前瞻预测暂存。1 s 音频约需 3 个滑动步才能播完，每步输出的 10 帧写回历史缓冲并送入音画打包器。原文未披露特征维度、关节维度与注意力维度，此处不补造具体张量宽度。

推理执行路径为因果滑动延续。初始高斯噪声按绝对时间轴索引锚定，使重叠帧在相邻窗口共享相同随机潜变量，重叠预测差异仅来自新到音频。采样采用 8 步 Euler 与 CFG （无分类器引导） 4 ，单窗约 97 ms ，落在 333 ms 实时预算内，随后仅对躯干与脊柱输出施加 1.5 Hz 因果低通。根与躯干前 8 个融合帧再向最后 2 帧历史的等速延续做余弦衰减校正。长直播会话额外开启弱姿态弹簧，基准评测中关闭以避免掩盖漂移。

### 滑动延续与重叠前瞻集合如何抹平窗口接缝

#### 从离线窗口到滑动延续

基座为已发布的 StreamTalk 流匹配 DiT （扩散 Transformer），含 6 层部件感知结构，以 WavLM 声学特征与离散说话人风格 ID 为条件，原生生成 2 s 窗且需整窗语音齐备，直接滑到直播音频上会滞后整窗。滑动延续把每窗 W=60 帧的前 40 帧固定为已播出历史，后 20 帧为生成区，而下半部分所示单步每步实际输出 10 帧即 10 frames out ，另 10 帧作为前视重叠暂存。每批半数样本改为前缀补全，生成最后 S 在 6 至 20 帧间，半数保留原始随机掩码，约 10 轮约 20 min 单 GPU 完成适配。适配后运动偏慢，接缝仍有高频抖动，需集合平均与滤波收尾。

重叠前瞻集合的目标是消除窗 k-1 与窗 k 交界的跳变。记融合帧为 \(\hat{x}_f\) ，前窗前瞻为 \(x^{(k-1)}_f\) ，当前窗新生成为 \(x^{(k)}_f\) ，融合权重为 \(w_f\) ，首播帧为 \(f_0\) ，播出长度为 \(N=10\) ，帧索引 \(f\) 在首播区间内取值。权重随新帧到达而线性衰减，前窗预测与当前生成按权重加权平均，初始噪声已按绝对索引锚定。

\[\hat{x}_{f}=w_{f}\,x^{(k-1)}_{f}+(1-w_{f})\,x^{(k)}_{f},\;w_{f}=0.5\!\left(1-\frac{f-f_{0}}{N}\right)\!,\]

这一加权的物理直觉是重叠区 2 次预测应指向同一动作，平均可抵消独立采样引入的高频分量。锚定噪声保证 2 次差异仅来自新到音频，而非随机性。权重在缝首接近等权混合，随后向新窗倾斜，缝尾几乎完全信任新音频，避免旧前瞻的滞后拖尾。若权重恒为 1 或 0 ，则退化为硬拼接，接缝能量会回升。融合后的 10 帧送入播出队列并写回 40 帧历史，为后续漂移处理提供干净起点，躯干高频能量明显回落且速度恢复至接近真值。

#### 滤波与校正

融合后还需两处平滑。根与躯干前 8 个融合帧向最后 2 帧历史的等速延续做余弦衰减校正，抑制位置与速度突变。随后仅对播出的根与脊柱关节施加因果低通，由 3 Hz 收紧至 1.5 Hz ，进一步压低残余抖动而不改变整体分布距离趋势。采样保持 8 步 Euler 与 CFG 4 ，单窗耗时落在实时预算内，输出经音画打包器与音频严格对齐后渲染。

### 漂移感知历史扰动如何模拟推理期自生误差

#### 差距来自历史而非未来的诊断逻辑

流式差距可能来自缺失未来语音，也可能来自自生历史中累积的误差。诊断方法是保持其他 streaming 条件不变，定期把自生历史替换为真值动作，观察分布距离是否回落。另一对照是给每窗 WavLM 特征补充远超实时允许的右侧上下文，或把前瞻帧数拉长，观察是否同样改善。若前者大幅改善而后者无改善，则差距主因是暴露偏差，即速度与幅度误差在 40 帧条件前缀中复利累积，而非缺失未来信息。DAHP 正针对这一成因设计。

#### 边界连续的扰动设计与冻结边界

DAHP 的目标是在训练中模拟推理期自生历史的速度与幅度漂移。记真值前缀为 \(x_f\) ，扰动函数为 \(T(x)_f\) ，扰动后前缀为 \(\tilde{x}_f\) ，条件长度为 \(P=W-S\) ，推理时为 40 ，目标后缀保持真值。扰动以概率 \(p=0.75\) 施加三选一变换，时域重采样系数在 1/1.4 至 1.4 间，幅度缩放以均值为中心在 1/1.3 至 1.3 间，或 4 帧高斯平滑关节噪声标准差至多 0.05 ，最后 8 帧线性衰减至零以保证边界连续。

\[\tilde{x}_{f}=x_{f}+\left(T(x)_{f}-x_{f}\right)\cdot\min\left(1,\frac{P-f}{8}\right),\quad f\leq P.\]

这一衰减设计的物理直觉是在线漂移是低频连续的，不应在条件边界处制造人为跳变。远离边界处全量注入漂移，迫使模型学会在偏离的站姿与速度下仍生成合理延续。靠近边界处扰动归零，保留真值目标的速度与过渡连续性，使梯度仍指向正确动力学。若衰减长度为零，边界跳变会教模型快速回跳。若扰动概率为零，则退化为普通滑动适配。训练仅用原 BEAT2 训练切分，约 50 min 单 GPU 完成，约为基座训练算力的很小比例，无需自展与蒸馏所需的教师与评价模型常驻显存。

参数冻结边界清晰。WavLM 声学编码器与 A2E 表情模型全程冻结，滑动适配与 DAHP 只更新 6 层 DiT 动作生成器。第一阶段由离线掩码转为半数前缀补全，第二阶段由滑动模型初始化并加入扰动历史，目标后缀始终为真值连续动作。附录对照了两类更重的暴露偏差补救，一类由自生历史回归真值延续，另一类以冻结离线模型为教师做分布匹配蒸馏，前者易耗散运动能量，后者易推高速度且评价器只看 2 s 窗而约束不住长程统计，均未超越起点，DAHP 以更轻代价保留真值速度与边界连续性。

### 解耦是否损失质量与多后端延迟的实测权衡

#### 录制语音上的动作质量

评测协议需先看公平性。动作质量在 249 个 BEAT2 测试片段上度量，覆盖 MIBURI 训练的 23 位说话人，全量对比用官方 265 个片段全说话人。评分器在说话人 2 复现 GestureLSM 的 FGD （手势分布距离，越低越接近真人） 0.411 对文献 0.409 ，跨文可比性基本成立。MIBURI 用论文所述检查点与测试流程生成，输入为录制语音的 Mimi 音频 token 加时间对齐文本。动作质量对比直接用录制测试语音驱动化身层，不经过对话后端，后端影响另行评测。表中加粗为最优，下划线为次优，箭头 ↓ 越低越好，→ 越接近真值越好。

下表对比事先看到整段语音的离线方法与严格 streaming 方法。离线 2 s 窗与提前 1 s 启动的级联起点代表同一音频生成器的上限，GestureLSM 附带真值文本并以 4.3 s 窗运行，ELSSA 2 独立生成器只产生上半身与手部，MIBURI 读取对话模型内部 token ，BASE 仅读发射音频并以 0.33 s 步长滑动。重点比较分布距离、韵律对齐 A （节奏对齐，0.5 为无关语音水平）与 BA （节拍对齐，越接近真值越好）、速度与躯干高频能量 HF （4 Hz 以上躯干速度占比，暴露窗口接缝）。

| Method | FGD↓ | A→ | BA→ | Speed→ | HF→ |
| --- | --- | --- | --- | --- | --- |
| Ground truth | – | 0.632 | 0.604 | 1.00 | 4.3 |
| Offline, 2 s windows | 0.251 ± 0.001 | 0.661 | 0.644 | 1.17 | 36.4 |
| GestureLSM‡, 0.4 s sliding | 1.504 ± 0.007 | 0.571 | 0.709 | 0.53 | 3.9 |
| MIBURI | 0.333 | 0.520 | 0.670 | 1.07 | 1.4 |
| BASE (ours) | 0.342 ± 0.002 | 0.635 | 0.622 | 1.09 | 3.5 |

表中趋势显示，仅读后端音频并未损失质量。事先看到语音时，同一音频生成器达 FGD 0.251 ± 0.001 ，低于耦合到内部 token 的 MIBURI 0.333 。streaming 时 BASE 为 0.342 ± 0.002 ，与 MIBURI 持平，且在 A 0.635 与 BA 0.622 上最接近真值 0.632 与 0.604 ，速度 1.09 亦接近 1.00 。附带真值文本的 GestureLSM 离线仅 0.723 ± 0.002 ，0.4 s 滑动时升至 1.504 ± 0.007 且速度跌至约半速，ELSSA 2 独立生成器远离数据分布达 3.615 。离线窗 FGD 最优但 HF 高达 36.4 ，拼接跳变明显，BASE 以重叠窗降至 3.5 ，接近真值 4.3 ，HF 最接近真值的是滑动 GestureLSM 的 3.9 ，速度最接近真值的是 MIBURI 的 1.07 。在 171 个真值做手势重拍的重音词中，BASE 跟随 60% ，MIBURI 为 43% ，长回复 80 s 后骨盆漂移 BASE 约 13.5 cm ，约为 MIBURI 43.7 cm 的三分之一。

为把分布数字落到可见动作上，下图并排对比真值、BASE 与 MIBURI 在同一语音片段上的身体表现。左侧为重音词 so 前后 5 帧，时间偏置为 -0.33 s 、-0.17 s 、+0.00 s 、+0.17 s 与 +0.33 s ，中间列为响度峰值时刻。右侧为同一长片段在 5 s 、40 s 与 80 s 的身体叠影，虚线为前 10 s 均值位置，数字为 80 s 时骨盆水平位移。渲染角色与机位一致，面部均为中性并仅由响度驱动唇部，以隔离身体差异。

[![原论文 Figure 3：Qualitative comparison on BEAT2 test clips (more examples in Appendix I).](https://arxiv.org/html/2611.30388v1/fig_qualitative.png)](https://arxiv.org/html/2611.30388v1/fig_qualitative.png)

*论文图 3：重音词前后五帧手势与长片段 80 秒骨盆漂移叠影的真值与两种方法对比（原论文 Figure 3）。*

左侧重拍处真值与 BASE 双臂同时上举强调，MIBURI 双手仍收于胸前，未做出大幅挥动。右侧长时叠影中，真值位移为 9 cm ，BASE 为 15 cm ，MIBURI 达 44 cm ，与均值趋势一致，MIBURI 在深度方向上明显前移。附录在 4 个更多片段与角色上复现了类似差距，个别片段 BASE 与 MIBURI 漂移接近，说明单片段噪声仍存在，但 249 片段均值上 BASE 约为三分之一。静帧无法呈现接缝抖动，补充视频展示了离线窗的可见跳变与 BASE 的连续过渡。

#### 五后端实时延迟

下表把同一化身层接到 5 种后端上，每种后端回答 10 个口语问题。延迟定义为用户语音结束到首个带声化身帧的中位秒数，FGD 与 BA 为对 BEAT2 的非配对度量，人声参考为 1.02 与 0.60 。系统用两块 RTX 5090 ，一块跑本地后端与动作生成，一块跑渲染，单窗 333 ms 动作约 96.7 ms 中位与 100.7 ms p95 生成，实时率 0.29 ，显存 1.9 GB ，渲染每帧 6.6 ms 至 12.2 ms 。仅适配器预缓冲按后端输出粒度设置，化身层本身不重训。

| Backend (output unit) | End-to-end↓ | Backend onset↓ | First window↓ | Sync buffer↓ | FGD↓ | BA→ |
| --- | --- | --- | --- | --- | --- | --- |
| PersonaPlex (80 ms) | 1.31 | 0.56 | 0.54 | 0.21 | 1.22 ± 0.05 | 0.62 |
| FLM-Audio (80 ms) | 2.09 | 1.32 | 0.54 | 0.21 | 0.90 ± 0.02 | 0.66 |
| MiniCPM-o 4.5 (1 s) | 2.97 | 1.96 | 0.20 | 0.81 | 1.33 ± 0.05 | 0.63 |
| Gemini Live (API) | 1.61 | 1.24 | 0.11 | 0.23 | 1.06 ± 0.02 | 0.65 |
| Cascade (TTS) | 1.47 | 1.23 | 0.24 | ≈0 | 2.21 ± 0.08 | 0.58 |

表中权衡显示，化身层在 80 ms 步进后端上约增加 0.75 s ，首窗需 0.67 s 音频，其中 0.32 s 随确认的起始到达，就绪约在起始后 0.54 s ，再加 0.21 s 抖动余量。后端差异几乎全在何时开口，PersonaPlex 端到端 1.31 s 最快，MiniCPM-o 4.5 以 1 s 块输出，需 1 s 预缓冲消除 23/24 回复的中段断裂，代价是中位升至 2.97 s 。4 种全双工后端动作质量接近人声，FGD 0.90 ± 0.02 至 1.33 ± 0.05 对 1.02 ，BA 0.62 至 0.66 对 0.60 ，级联 TTS 最差达 2.21 ± 0.08 ，受控重合成溯因为 TTS 韵律停顿翻倍而非 BASE 本身。打断取消中位 0.28 s ，聆听启动 0.15 s ，工具调用随后端继承，Gemini Live 开搜索约加 0.8 s 起始。4 路定制相互独立，同一语音下 25 种风格的活跃度与各说话人动捕的 Spearman 秩相关为 0.88 至 0.96 ，风格解释运动活跃度方差 69% 至 86% ，语音与角色不足 1% ，语音识别率 97% 对机会 25% ，角色遵循仅 46% 对机会 33% 。

#### 观众偏好

分布距离不能完全代表观感，离线窗 FGD 最低却有可见接缝，BASE 与 MIBURI 在 FGD 上打平却在韵律上拉开差距，因此作者组织了两选一强制选择主观评测。每题并排播放同一语音下的两种身体渲染，询问何者更自然、何者更贴合语音与总体更偏好谁。BASE 以基准配置对比 MIBURI 、离线 2 s 窗、去掉 DAHP 的 BASE 与真值，每组 6 个 10 s 片段共 24 个片段，覆盖 23 位说话人，均截自测试片段 20 s 之后以累积 streaming 误差，角色机位一致且面部中性。

[![原论文 Figure 5：Share of judgments choosing BASE over each alternative (17 participants, 6 clips per comparison).](https://arxiv.org/html/2611.30388v1/fig4.svg)](https://arxiv.org/html/2611.30388v1/fig4.svg)

*论文图 5：17 位观众三问中选择 BASE 的占比与 95% 自助置信区间及显著性标记（原论文 Figure 5）。*

17 位有效观众的选择显示，总体偏好 BASE 的占比在 3 组对照中约 80%，对 MIBURI 为 82% ，对离线窗为 81% ，对去掉 DAHP 为 80% ，总体 3 组 p≤0.008 ，16/17 人总体偏向 BASE 而非 MIBURI 。离线窗虽 FGD 更低，却因躯干高频能量 36.4 对 3.5 的接缝而落败，MIBURI 则因节奏对齐 0.520 对 0.635 而落败。观众未可靠区分真值与 BASE ，占比 51% 、48% 与 52% 徘徊在 50% 无偏好线附近，但研究未检验等价性，且短片段、仅身体、用人声的设定不度量会话体验、表情动画与延迟。

### 历史漂移主导 streaming 差距与各组件增益归因

#### 重置与未来语音的对照

下图横轴为历史重置频率，由每 1 s 、2 s 、4 s 、8 s 直到从不重置，纵轴为 FGD ，红色为 BASE ，灰色为去掉 DAHP ，绿色叉号为补充 20 s 未来语音，蓝色虚线为 MIBURI ，紫色虚线为事先看到语音的离线下限。重置时把自生历史定期换成真值动作但保持其他 streaming 条件，未来语音对照则给 WavLM 补充 20 s 右侧上下文，另试 20 帧长前瞻。读图时先看重置越频密曲线越低，再看未来语音是否压低曲线，最后看 DAHP 是否整体下移。

[![原论文 Figure 4：Resetting the model’s own history to ground truth every 1 s cuts FGD from 0.46 to 0.16, while 20…](https://arxiv.org/html/2611.30388v1/fig3.svg)](https://arxiv.org/html/2611.30388v1/fig3.svg)

*论文图 4：历史重置频率对照下 FGD 曲线，未来语音无改善而 DAHP 整体下移（原论文 Figure 4）。*

每 1 s 重置把 FGD 由 0.464 拉低至 0.158 ，甚至低于离线设置，且曲线随重置间隔拉长而稳步上扬。补充 20 s 未来语音后 FGD 为 0.477 ，基本不变，20 帧长前瞻反而恶化至 0.630 ，因每窗新增 30 帧超出适配的 6 至 20 帧范围。差距因此是暴露偏差而非缺失上下文，1 s 重置的 0.158 因混入真值信息仅为下界而非可达目标，直接证据是未来语音无益而 DAHP 有益。DAHP 把整条曲线下移，无重置时由 0.464 降至 0.342 ，每 8 s 重置时由 0.274 降至 0.234 ，越长期累积处增益越大。重置会在拼接处制造跳变，此处仅 FGD 有意义。

#### 逐步消融与跨模型迁移

下表逐步累加各组件，步长均为 0.33 s ，除注明外均用位置锚定噪声、滑动缝校正与 3 Hz 躯干低通。首行为真值参考，随后为直接滑动预训练模型、滑动窗适配、重叠前瞻集合、8 步采样、DAHP 与收紧至 1.5 Hz 的完整 BASE 。重点看 FGD 下降、速度是否回到 1.00 附近、抖动 jerk 与高频能量 HF 是否回落，以及 DAHP 是否为适配后最大单步增益。

| Configuration | FGD↓ | A→ | Speed→ | Jerk→ | HF→ |
| --- | --- | --- | --- | --- | --- |
| Ground truth | – | 0.632 | 1.00 | 58.7 | 4.3 |
| Pretrained, sliding (5 steps) | 2.008 ± 0.004 | 0.574 | 0.96 | 120.9 | 15.9 |
| + sliding-window adaptation | 0.632 ± 0.012 | 0.572 | 0.63 | 62.7 | 17.1 |
| + look-ahead ensembling | 0.518 ± 0.004 | 0.617 | 0.96 | 59.6 | 7.9 |
| + 8 flow steps | 0.464 ± 0.007 | 0.617 | 1.17 | 72.7 | 6.5 |
| + DAHP | 0.342 ± 0.002 | 0.635 | 1.09 | 65.1 | 8.1 |
| + 1.5 Hz low-pass (BASE) | 0.342 ± 0.002 | 0.635 | 1.09 | 65.5 | 3.5 |

每步均有帮助。直接滑动预训练模型 FGD 高达 2.008 ± 0.004 ，抖动 120.9 ，从未延续过给定前缀。滑动适配修好延续但运动偏慢，速度仅 0.63 倍。集合平均恢复速度至 0.96 倍并把接缝能量由 17.1 减半至 7.9 ，A 由 0.572 回升至 0.617 。8 步采样至 0.464 ± 0.007 ，DAHP 给出适配后最大单步增益至 0.342 ± 0.002 ，A 进一步至 0.635 ，速度 1.09 ，抖动 65.1 。收紧低通至 1.5 Hz 后 FGD 不变而 HF 由 8.1 降至 3.5 。观众可感知 DAHP 增益，80% 判断偏向完整 BASE 。迁移到设计迥异的 GestureLSM 上，同套适配 8 min 单 GPU 把 streaming FGD 由 1.504 降至 1.157 ，降幅 23% ，其中 DAHP 贡献最后一步由 1.312 至 1.157 ，但速度仍在预训练水平且约半数差距来自缺失未来语音，历史修正无法补回。

### 音频唯一接口的边界、复现前提与选型建议

长时 streaming 生成器不知起点，骨盆会漫游而双脚内扣，需用弱姿态弹簧在部署期约束。记每窗步长为 \(n=10\) 帧，时间常数为 \(\tau=3\) s ，帧率为 \(fps=30\) ，平均根位置为 \(\bar{r}\) ，起始站姿为 \(r_{home}\) ，死区收缩函数为 \(shrink_{\delta}\) ，根死区 \(\delta_{root}=8\) cm ，脚死区 \(\delta_{foot}=2\) cm 。校正量 \(\Delta r\) 按指数趋近拉回，腿部在左右脚向量偏离 2 s 前站姿超 2 cm 时同常数回拉，修正帧写回历史缓冲。

\[\Delta r=\bigl(1-e^{-n/(\tau\cdot\text{fps})}\bigr)\cdot\operatorname{shrink}_{\delta}(\bar{r}-r_{\text{home}}),\]

这一弹簧的力学直觉是只纠正慢漂而不干扰正常摆动。死区内容留约 10 cm 内的自然晃动不动，超出部分每窗约收回剩余偏移的 10% ，时间常数 3 s 保证拉回足够柔和。偏移越大拉力越大，偏移在死区内则零作用。若死区为零，正常步态也会被拽回原点。若时间常数过小，则站姿僵硬。弹簧把 60 s 至 80 s 漂移拉回真值范围，BA 、速度、高频能量与站宽基本不变，代价是 FGD 增加 0.041 ，因 FGD 对比至多 90 s 片段分布而惩罚向家位置的回拉，而数分钟会话中用户更在意漂移，故基准关闭而直播开启。

#### 假设边界与未验证条件

音频唯一接口的边界清晰。动作质量系于输入韵律，TTS 停顿翻倍与起始减少会推高分布距离，纯语义手势因无文本线索而无法产生，未来可用发射音频转录补充而不耦合后端。轮次依赖 VAD ，不区分用户与他者语音，回声、嘈杂与附和会误触发打断，0.5 s 内停顿可维持聆听，更长停顿按 700 ms 尾音阈值结束，开放环境需耳机或回声消除与说话人感知轮次检测。聆听行为尚未以用户话语内容为条件，暴露偏差只是减轻而非消除，多数剩余延迟在等待首窗音频。80 s 漂移仅 20 个片段可达，噪声大于 20 s 处结果。

#### 复现核对与工程选型

复现需区分三件事。代码、权重与数据在本批证据中原文未披露公开状态，可验证资源为空，不可视为已开源或可运行。训练数据为 BEAT2 ，评测切分与超参如上，单 GPU 约 1 小时可复现适配与 DAHP ，直播需两块 GPU 与渲染器。原文提及补充视频展示主动轮次、接缝与抖动，但本次未收到可验证播放链接，不虚构听感与网址。工程上，若后端频繁更换或需接云端 API 且只需韵律驱动的全身手势，值得尝试 BASE ，第一步应先用录制语音复现滑动延续与 DAHP ，再补做带耳机与回声的打断鲁棒性与长时漂移验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30388v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：仅以吐出语音为唯一接口实现后端无关调度，同一层无重训驱动5种后端并保持音画同步。

- 核心优势：流式FGD达0.342与紧耦合0.333持平且节奏对齐最接近真值，80s漂移仅为对照三分之一。

- 核心优势：逐模块直接消融量化每步增益且DAHP迁移使第二生成器FGD下降23%，人工双选约80%偏好。

- 主要短板：第一方代码仓库地址、模型权重下载与在线演示链接完全缺失且无公开承诺。

- 主要短板：主训练优化器、学习率、批量大小与模型隐维度参数量等关键复现配置未披露。

- 主要短板：直播评估每后端仅10问小样本、80s漂移仅20片段支撑且用户研究仅17名20至30岁大学生，泛化有限。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
