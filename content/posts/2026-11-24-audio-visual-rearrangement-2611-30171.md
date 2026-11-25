---
title: "Audio-Visual Rearrangement"
date: 2026-11-24
draft: false
tags: [视听导航, 口语理解, 声源定位, 多模态学习, 基准测试]
categories: [论文速递]
description: "语音重排要求智能体从一次 spoken 请求中同时解析找什么与说话人在哪里，基线以双耳运动感知编码与多任务微调连接语义理解、声定位与视觉操作，在已见与未见场景小幅领先基线但绝对成功率仍低，且并发声干扰与精细放置构成主要代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30171"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听见一句话后找物送人的语音视觉重排任务"
paper_digest_original_title: "Audio-Visual Rearrangement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30171v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30171v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30171v1.pdf"
paper_digest_primary_task: "视听导航"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-visual-navigation","label":"视听导航"},{"facet":"task","id":"task.spoken-understanding","label":"口语理解"},{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "语音重排要求智能体从一次 spoken 请求中同时解析找什么与说话人在哪里，基线以双耳运动感知编码与多任务微调连接语义理解、声定位与视觉操作，在已见与未见场景小幅领先基线但绝对成功率仍低，且并发声干扰与精细放置构成主要代价。"
paper_digest_reader_sections: [{"heading":"一次 spoken 请求如何同时决定找什么与送给谁","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双分支听觉加运动更新的整体执行闭环","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"双耳前端、运动适配器与技能预测的张量通路","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三阶段课程：先定位、再适配、最后对齐决策","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"已见与未见场景的主对比、子类型分化与轨迹","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"空间编码、运动适配、声干扰与距离的消融诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["China Agricultural University"],"name":"Ruohao Guo"},{"affiliations":["China Agricultural University"],"name":"Jiatong Ye"},{"affiliations":["China Agricultural University"],"name":"Chenwei Dong"},{"affiliations":["Mohamed bin Zayed University of Artificial Intelligence"],"name":"Jinxing Zhou"},{"affiliations":["University of California, Berkeley"],"name":"Dantong Niu"},{"affiliations":["China Agricultural University"],"name":"Guangyao Li"},{"affiliations":["China Agricultural University"],"name":"Zhenbo Li"}]
paper_digest_abstract_sha256: "61b3441384125b99b61bdc6a84a1384a066e88d46f20805ec73e37e13c84db45"
paper_digest_sidecars: {"citation.bib":{"sha256":"b4e4372263556baf9b4c6ca16111ce6d6699d9ca517ec8ab86d9fcd6368406ab","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30171/citation.bib"},"citation.json":{"sha256":"567940135c9aab8efa354d239255d8cd21f2f3c4211ce108352fa0d3b8a4c494","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30171/citation.json"},"citation.ris":{"sha256":"79160ff2f6e3f14e45af7aa7e49c03f591e8a5a0d408e3660089404aa6e2fa63","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30171/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8754d2bec53f728e3740216582f4f25d8589682b88a0d361df247ac457f2814b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30171/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "53ec5f102cdc0d6a58dea322e5a8eb35a602525efe956f5222611ff6eb7a472c"
paper_digest_api_reader_plan_sha256: "df24e7fcde7e4bff7b73362fd15c90ced244bf6b6e9bbf7677cc21785f862826"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3ccc30180867b793866044f70e62e1b76c3a07eded57e7644be2796e33c02e64"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6cc9dcee86feae0cd57496d62940081bd82ce3b896dddd924a2f0c928e4d4c00"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a912eab1a88b3b351018d143999cf841e81d0678d0e6a9f6603722a3bbefdee2"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "20562507511b03a34bfb79c98b8c8517ec8c2c8aa140ec53b257a5ecf2277d46"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 听见一句话后找物送人的语音视觉重排任务

> 英文题目：*[Audio-Visual Rearrangement](https://arxiv.org/abs/2611.30171v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声引导导航](/audio-paper-digest-blog/papers/?concept=task.audio-navigation) → [视听导航](/audio-paper-digest-blog/papers/?concept=task.audio-visual-navigation)；[口语理解](/audio-paper-digest-blog/papers/?concept=task.spoken-understanding)；[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 7.9/10 | 技术严谨 6.9/10 | 实验充分 7.2/10 | 清晰度 6.8/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 7.5/10 | 工程/实践 4.9/10


## 👥 作者与机构

- Ruohao Guo：China Agricultural University
- Jiatong Ye：China Agricultural University
- Chenwei Dong：China Agricultural University
- Jinxing Zhou：Mohamed bin Zayed University of Artificial Intelligence
- Dantong Niu：University of California, Berkeley
- Guangyao Li：China Agricultural University
- Zhenbo Li：China Agricultural University

## 📌 核心摘要

**问题与瓶颈：** 家庭助手需要听懂一句口语需求，找出合适物品并送到说话人手中。输入是 16 kHz 双耳语音与第一视角视觉，输出是导航与抓放动作序列。已有具身重排多用文字指令或视觉目标状态，不要求从语音定位请求者，已有音视频导航多止于接近发声体，不要求取物与递送。同一句话同时携带语义意图与说话人位置线索，实验中只播放一次，环境中有多名干扰者，智能体在远离初始收听位后仍需记住并更新相对位置，这是此前基准较少覆盖的耦合困难。

**核心思路与方法架构：** 与最接近的文本规划基线相比，本文保留 Qwen2.5-Omni-7B 的视觉编码、单声道语音理解与 Thinker 语言模型主干，增量是并联的运动感知空间音频编码器与面向动作的多任务指令微调。双耳语音经 16 kHz 采样形成左右声道波形，前端提取左右耳对数梅尔特征与耳间相位差的幅度加权梅尔聚合，堆叠为空间输入，经时间卷积与 32 层 Transformer 编码并池化为 16 个 2048 维向量 H0。运动适配器依据初始收听位姿 T0 到当前位姿 Tt 的相对旋转平移生成运动嵌入，结合声学分支条件特征经残差瓶颈得到当前位姿下的 Ht，再经轻量投影映射为 16 个 3584 维空间词元，与单声道分支的语义词元、视觉观测、保留的文字请求与执行反馈一同送入语言模型，预测 Explore、Navigate、Turn、Pick、Place 与 Done 等技能。第三阶段冻结空间编码器、原音频视觉编码器与基座大模型，只更新投影器与 LoRA 参数。这种设计让单次话语的位置线索随自身运动持续可用，从而把面向物品的搜索与面向说话人的递送衔接起来。

**关键实验与核心代价：** 主评测用 200 个可见场景回合与 200 个不可见场景回合，显式、关系与隐式请求按 4:3:3 混合，指标为各类型成功率 ESR、RSR、ISR 与总体成功率 OSR，方向均为越高越好 ↑，平均仿真步数 Steps 为全部回合在 5000 步预算下的平均长度。本文方法可见划分 OSR 为 20.5%，高于最强可比基线 LLM Planner 的 12.5%，不可见划分 OSR 为 17.0%，高于该基线的 11.5%，在三类请求上均为参评最高，Steps 为 2568.5 步与 2685.5 步也是参评最低，但 Steps 含失败与超时，需结合成功率解读。消融显示不可见划分上单声道基线 OSR 为 3.5%，加入空间音频后到 7.5%，加入运动适配后到 11.0%，完整多任务加权训练后到 17.0%。空间诊断头在当前接收坐标系下方位角平均绝对误差为 19.41°，水平距离误差为 1.058 m。代价同样清晰：最近支撑面放置子类型两划分均为 3.3%，加入匹配功率的并发环境声后不可见 OSR 从 17.0% 降到 6.5%，目标选择与条件递送均明显下滑。

**适用边界与深读导览：** 结论成立依赖 Habitat 3.0、HSSD 家居场景与 SoundSpaces 2.0 双耳渲染，说话人静止且只说一次，动作为仿真 Fetch 机械臂的技能控制器执行，未涉及真实机器人与动态多人干扰。本文未提供可试听的音频演示页。想深究可查下方长文：空间前端堆叠方式与运动残差公式见方法部分，对比口径与 TSA、CDSR 分母定义及 subtype 细分见对比与消融小节，训练分阶段冻结边界与超参数见复现细节部分。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 一次 spoken 请求如何同时决定找什么与送给谁

家庭助手需要在多人室内完成听话找物并送达。语音重排任务把一次 spoken 请求同时当作语义线索与声学定位线索。仿真基于 Habitat 3.0 与 HSSD 家具场景，智能体为 Fetch 移动操作臂并配第一视角相机，房间内有多位人体模型，仅一位是请求者，语音由 Qwen3-TTS 合成并经 SoundSpaces 2.0 双耳房间脉冲响应空间化。任务要求先找到符合请求的物体并抓起，再导航到请求者身边完成递交，或按空间指代表述放到离请求者最近的支撑面上，只有两者同时满足才算成功。

评测把请求分为 3 类 8 个子型。显式目标直接点名类别，分为 Category 与 Instance 两类，前者接受同类任意实例，后者要求卧室桌上杯子这类带房间或家具限定的特定实例。空间指代表述以请求者为参照，分为 Object 与 Destination，前者取离说话人最近的合格物体，后者把物体放到离说话人最近的合格支撑面。隐式意图不点名物体，覆盖 Food & Drink、Home、Work 与 Leisure 4 个生活域，例如口渴对应饮品，装饰空间对应摆件，备考对应学习用品，儿童玩耍对应玩具，同请求允许多个类别按类别标准判定。

已有路线各管一段，难以直接拼出该任务。音频视觉导航侧重循声到达发声体，较少处理取物与递送到人。具身重排多用文本指令或视觉目标状态指定任务，不要求从语音中定位请求者。语音重排把两者耦合在同一句话中，且请求只播放一次。智能体在后续探索与操作中必须记住说话人方位并随自身位姿更新相对关系，还要在多人中区分请求者，并在远距离与遮挡下保持定位与导航稳定，这构成核心难点。

### 双分支听觉加运动更新的整体执行闭环

先看任务示意理解输入输出的闭环。俯视房间中有 3 位人物与一台机器人，右上角气泡显示 Could you please bring me an apple 的语音波形，黄色框标出真正的说话人，另 2 位人物带有静音标记。左侧红色块标注第一步搜索并拿起苹果，中间黄色块标注第二步递交给说话人，黄色实线与橙色虚线分别画出两段移动路径，底部气泡点出机器人需要同时听出做什么与说话人在哪里。

[![原论文 Figure 1：Overview of Audio-Visual Rearrangement.](https://arxiv.org/html/2611.30171v1/Figure1.png)](https://arxiv.org/html/2611.30171v1/Figure1.png)

*论文图 1：俯视任务示意：红色块为搜索抓取，黄色块为递送说话人，黄色框标出请求者（原论文 Figure 1）。*

该示意把做什么与在哪里分开又连在一起。苹果决定了视觉定位的目标类别，黄色框人物既是递送对象，也在空间指代查询中充当距离比较的原点。两条路径说明任务必须先做物体搜索再做声源搜索，顺序不可颠倒。由于请求只出现一次，机器人不能靠反复聆听修正方位，必须把初始双耳线索转化为可随运动更新的记忆，这是后文运动感知编码器的动机。

基线框架以 Qwen2.5-Omni 为底座，保留原视觉编码器、单声道语音编码器与 Thinker 语言模型主干，新增一条并行的运动感知空间音频编码器。双耳语音同时进入两条音频支路，一条做语音内容理解，一条提取方向与距离线索并经运动适配器修正，再经轻量投影器变为空间 token。4 类 token 与文本提示、保留的请求文本及执行反馈一起进入语言模型，闭环预测可执行技能，底层执行器执行后返回新的观测与反馈。

与最接近的模块化语言智能体与大语言模型规划器相比，改动集中在三处。第一是不再依赖外部 Whisper 转写加独立定位模块，而是用双耳前端直接编码耳间差异。第二是引入相对位姿条件更新，避免重复语音。第三是用多任务指令微调统一语音、视觉与动作。音频采样率为 16 kHz，空间分支经压缩输出 16 个特征向量，投影为维度 3584 的 16 个空间 token，供 7B 语言模型使用。

### 双耳前端、运动适配器与技能预测的张量通路

再看框架图左侧的运动感知编码器与右侧的技能预测通路。底部紫色虚线框为双耳音频与示例文本 Can you get me a toy airplane，中间并列 4 组 token 条带，顶部为带 LoRA 的大语言模型，右侧列出 Explore、Navigate、Turn、Pick、Place 与 Done 6 种技能，左上角粉色区展示运动适配器的双分支残差结构，雪花与火焰图标区分冻结与可训练模块。

[![原论文 Figure 2：Overview of our baseline framework.](https://arxiv.org/html/2611.30171v1/Figure2.png)](https://arxiv.org/html/2611.30171v1/Figure2.png)

*论文图 2：双分支框架：左侧运动感知编码器提取并更新双耳空间线索，右侧语言模型融合四类 token 预测六种技能（原论文 Figure 2）。*

双耳前端把左右耳对数梅尔特征与耳间相位差的余弦正弦分量堆叠为 Stack 输入，保留绝对声级与耳间差异以维持定位线索。该序列经一维时域卷积与 32 层 Transformer 主干处理，隐藏维度 1280，输出经自适应平均池化压缩为 16 个 2048 维空间向量 H0，代表初始聆听位姿 T0 时刻的声学观测。单声道支路对双耳信号做通道平均后送入原音频编码器，负责语音内容，两条支路分工互补。

当智能体从 T0 运动到当前位姿 Tt，假设说话人静止，适配器用仿真器提供的相对旋转与平移更新 H0。位姿分支编码为运动嵌入 m，声学分支对 H0 做层归一化与线性投影得到条件特征 c，瓶颈维度 128，两者经残差瓶颈 GELU(c+m) 减 GELU(c) 再线性投影并加回 H0 得到 Ht。每次 Ht 都从 H0 直接计算而非递归传递，避免误差累积。可训练多层感知机把 Ht 映射为语言模型嵌入空间的空间 token，与语音、视觉及文本 token 拼接决策。

以 1 秒 16 kHz 双耳输入为例，波形先变为左右耳对数梅尔与相位差特征并堆叠，经卷积降采样与 Transformer 建模后池化为 16 个向量，再按当前相对位姿适配并投影为 16 个空间 token 进入语言模型。语言模型在每步从 6 种技能中选一，坐标类技能用归一化到 0 到 100 的图像坐标指定目标，Turn 用离散转角，Place 负责递交或放置，Done 结束回合。底层控制器借助仿真深度、相机位姿、导航网格与实例观测执行，返回观测与反馈支持闭环。

### 三阶段课程：先定位、再适配、最后对齐决策

训练分三阶段推进。第一阶段做空间音频预训练，只训练双耳特征编码通路，目标是在接收器坐标系预测说话人方向与距离，损失为方向余弦损失与对数距离光滑 L1 损失。场景不交叠划分为 33 训练与 2 验证并排除全部 11 个未见评测场景，训练 10 轮，主干与预测头学习率分别为 10-5 与 10-4，权重衰减 0.01。该阶段让编码器先具备不依赖语义的声定位能力，为后续运动更新提供可用的 H0。

第二阶段冻结已预训练的声学编码通路，只训练运动适配器与定位头，目标仍是定位但方向与距离改在当前接收器坐标系下表达。场景划分为 34 训练与 4 验证，优化器用 AdamW，适配器与定位头学习率分别为 10-3 与 10-4，批量 256，不设权重衰减，余弦退火最低学习率 10-5 并挑选第 40 轮检查点。该设计验证了无需重复语音，仅靠仿真器提供的相对位姿即可维持说话人相对表征。

第三阶段做多任务指令微调，冻结运动感知编码器、原音频与视觉编码器及语言模型基座权重，只更新空间投影器与 LoRA 参数。指令数据由规则专家利用特权物体与说话人状态生成像素动作，经筛选与重采样得到 150k 训练与 13k 验证样本，覆盖转写、定位、类别抽取、视觉 grounding、指令匹配、当前与历史说话人 grounding、可见性及主策略与递送策略共 10 个任务。

回答交叉熵对动作名与参数加权 2.0，对 Assigned! 加权 0.25，其余加权 1.0。优化用 AdamW，学习率 10-5，权重衰减 0.1，余弦衰减热身 3%，LoRA 秩 16，α 32，丢弃率 0.05。第三阶段在 6 张 A100 上以 BF16 训练 1 轮，每卡批量 1 累积 8 步，有效批量 48，前两阶段划分均排除 11 个未见评测场景。

### 已见与未见场景的主对比、子类型分化与轨迹

#### 主评测协议与总体对比

评测用 400 个新回合，200 个在 38 个开发场景内记为已见，200 个在 11 个外部场景记为未见，显式、关系与隐式请求按 4 比 3 比 3 混合。初始说话人方位覆盖全角度，欧氏距离 2 m 至 12 m 集中在 5 m 至 9 m 并在 6 m 至 8 m 达峰，测地距离 2 m 至 25 m。指标中 ESR、RSR 与 ISR 分别为 3 类请求的成功率，OSR 为总体成功率，方向均为越高越好，Steps 为含失败与超时的平均仿真步数，预算 5000 步，方向越低越好，需结合成功率理解。另用 TSA 衡量拿到物体中的选对比例，CDSR 衡量选对后送达成功的条件比例。基线观测与动作接口一致。

|  | Seen ESR ↑ | Seen RSR ↑ | Seen ISR ↑ | Seen OSR ↑ | Seen Steps ↓ | Unseen ESR ↑ | Unseen RSR ↑ | Unseen ISR ↑ | Unseen OSR ↑ | Unseen Steps ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Random | 0.0 | 0.0 | 0.0 | 0.0 | 5000.0 | 0.0 | 0.0 | 0.0 | 0.0 | 5000.0 |
| Omni-VLM | 0.0 | 0.0 | 0.0 | 0.0 | 4927.6 | 0.0 | 0.0 | 0.0 | 0.0 | 4921.3 |
| Modular Language Agent | 11.3 | 1.7 | 3.3 | 6.0 | 3729.7 | 12.5 | 1.7 | 5.0 | 7.0 | 3851.2 |
| LLM Planner | 20.0 | 0.0 | 15.0 | 12.5 | 2973.9 | 17.5 | 1.7 | 13.3 | 11.5 | 2867.8 |
| Ours | 25.0 | 16.7 | 18.3 | 20.5 | 2568.5 | 18.8 | 15.0 | 16.7 | 17.0 | 2685.5 |

本方法已见总体成功率 20.5%，未见 17.0%，对应平均步数 2568.5 步与 2685.5 步，显式已见 25.0% 与未见 18.8%，关系已见 16.7% 与未见 15.0%，隐式已见 18.3% 与未见 16.7%，四项成功率均领先同表全部基线。零样本 Omni-VLM 与随机策略两项总体成功率均为 0.0%，说明预训练多模态能力无法直接迁移到该闭环操作协议。模块化智能体总体仅 6.0% 与 7.0%，大语言模型规划器总体 12.5% 与 11.5%，后者在关系请求上已见 0.0% 与未见 1.7%，反映缺少说话人相对空间信息的代价。

#### 8 个子类型的成败分化

为看清哪类语言现象最难，方法在已见与未见划分上进一步按 8 个子型拆分成功率。该表只含本方法自身成绩，不与其他基线比较，单位均为百分比，Overall 行与主表总体成功率对应。重点比较显式中任意实例与特定实例的差异，空间指代中找物与放物的差异，以及隐式四域之间的差异，放物精度与常识推理负担是观察要点。

|  | Subtype | Seen | Unseen |
| --- | --- | --- | --- |
| Explicit Target | Category | 30.0 | 23.3 |
|  | Instance | 22.0 | 16.0 |
| Spatial Reference | Object | 30.0 | 26.7 |
|  | Destination | 3.3 | 3.3 |
| Implicit Intent | Food & Drink | 26.7 | 20.0 |
|  | Home | 13.3 | 13.3 |
|  | Work | 20.0 | 20.0 |
|  | Leisure | 13.3 | 13.3 |
| Overall | Overall | 20.5 | 17.0 |

任意类别取物已见 30.0% 与未见 23.3%，特定实例取物已见 22.0% 与未见 16.0%，前者明显更容易。空间指代中靠近说话人的找物已见 30.0% 与未见 26.7%，而放到最近支撑面两侧均为 3.3%，成为最突出的短板。隐式四域中餐饮已见 26.7% 与未见 20.0%，工作两侧均为 20.0%，家居与休闲四格均为 13.3%，说明模型能跨域完成常识映射，但装饰与娱乐类需求的视觉定位仍不稳定。

#### 未见场景轨迹示例

轨迹图展示两个未见环境的完整执行，上排为显式请求拿卧室桌上玩偶，下排为隐式请求回应儿童日常玩耍。左侧为俯视户型与智能体起点，右上为占据图与已见未见区域，右下为 3 个关键时刻的第一视角截图。蓝色线为物体搜索路径，橙色线为声源搜索路径，紫色图标区分目标物体与说话人，红色图标标出干扰人物，数字 1、2 与 3 对应探索、抓取与接近说话人。

[![原论文 Figure 4：AVR trajectories in unseen environments.](https://arxiv.org/html/2611.30171v1/Figure4.png)](https://arxiv.org/html/2611.30171v1/Figure4.png)

*论文图 4：未见环境两条完整轨迹：上为显式玩偶请求，下为隐式玩耍请求，蓝橙线区分找物与找人（原论文 Figure 4）。*

上例因限定类别加位置，物体搜索路径迂回较长，抓取后转向声源。下例因任意玩具均可满足，物体搜索较短，智能体更快进入送达阶段。2 例场景均有多人，智能体必须在抓取后依靠初始语音记忆区分请求者，而非就近递交。占据图上的路径沿导航网格连接决策点，第一视角截图显示了狭窄走廊与家具遮挡下的目标定位与接近过程，直观呈现请求具体程度对探索长度的影响。

### 空间编码、运动适配、声干扰与距离的消融诊断

#### 空间与运动的累积贡献

消融在未见划分上从单声道基线起逐项累加，3 组对照共享相同策略训练样本与回答交叉熵权重，本方法再叠加多任务监督与回答损失加权。指标沿用总体成功率、选对率、条件送达率与平均步数，另以当前接收器坐标系下的方位角平均绝对误差与水平距离误差做空间诊断。重点看空间编码是否同时改善选择与送达，运动适配是否在选对率微降时仍提升总体任务完成度。

|  | OSR ↑ | TSA ↑ | CDSR ↑ | Steps ↓ |
| --- | --- | --- | --- | --- |
| Monaural | 3.5 | 34.4 | 15.9 | 2621.9 |
| + Spatial Audio | 7.5 | 46.5 | 25.0 | 2926.4 |
| + Motion Adapter | 11.0 | 43.5 | 34.4 | 2752.4 |
| Ours | 17.0 | 47.6 | 49.3 | 2685.5 |

单声道基线总体成功率 3.5%，选对率 34.4%，条件送达率 15.9%，平均步数 2621.9 步。加入冻结空间编码器后三项成功指标升至 7.5%、46.5% 与 25.0%，平均步数升至 2926.4 步。再加冻结运动适配器后总体升至 11.0%，条件送达率升至 34.4%，选对率微降至 43.5%，平均步数回落至 2752.4 步。本方法以多任务监督与加权进一步升至 17.0%、47.6% 与 49.3%，较运动适配配置提升 6.0 个百分点，空间诊断方位误差 19.41 度与距离误差 1.058 m。

#### 声干扰与距离敏感性

为检验多声源鲁棒性，在相同 200 个未见回合中加入与目标等功率的并发环境声，声源放在距说话人至少 2 m 且距智能体至少 1 m 的可导航位置。该表对比干净与干扰两种条件下的四项指标，Steps 同样含失败回合。结合初始测地距离的累积成功曲线，可判断干扰主要损伤选择还是送达，以及远距离是否因直达声减弱与导航变长而更难。

|  | OSR ↑ | TSA ↑ | CDSR ↑ | Steps ↓ |
| --- | --- | --- | --- | --- |
| Clean | 17.0 | 47.6 | 49.3 | 2685.5 |
| Distractor | 6.5 | 37.2 | 27.1 | 2738.1 |

干净条件总体成功率 17.0%，选对率 47.6%，条件送达率 49.3%，平均步数 2685.5 步。加入干扰后四项变为 6.5%、37.2%、27.1% 与 2738.1 步，选对与送达同时下降，说明声干扰同时损伤目标选择与后续递送。该结果与放置短板一起构成主要局限，多声源理解是后续关键。

累积成功曲线按初始测地距离统计，左为完整任务成功，右为正确递送成功，蓝色与橙色分别代表已见与未见，横轴为静态导航网格上的测地距离 0 到 25 m，纵轴为累积成功率。该视角补足了按请求类型划分之外的几何难度，能看出远距离定位与长程导航的复合代价，以及请求只播放一次带来的记忆负担。

[![原论文 Figure 5：Cumulative success across initial Geodesic distances.](https://arxiv.org/html/2611.30171v1/combined_cumulative_success_geodesic.svg)](https://arxiv.org/html/2611.30171v1/combined_cumulative_success_geodesic.svg)

*论文图 5：累积成功随初始测地距离变化：左右分别为任务成功与递送成功，蓝橙区分已见与未见（原论文 Figure 5）。*

两条曲线均在 10 m 至 12 m 附近接近各自总体水平，更远处新增成功很少，已见始终高于未见。任务成功与递送成功的走势一致，说明远距离同时影响找物与送达。更大的间隔与中间障碍会削弱直达声并使空间线索不可靠，更长的导航路线也引入更多执行误差。由于缺乏重复语音，智能体必须在长轨迹中维持说话人相对表征，这正是运动适配要缓解的问题。

### 假设边界、复现前提与工程选型建议

该基线的结论建立在若干仿真假设上。说话人在回合内保持静止，请求只在初始位姿播放一次，声学渲染依赖模拟房间脉冲响应与合成语音，物理执行依赖仿真深度与导航网格。空间指代中的放置环节与并发声干扰下的表现最弱，说明精细放置与多声源分离尚未解决。绝对成功率仍处低位意味着方法验证了方向有效性，但远未达到可部署的家务助手水平，未见场景的泛化差距依然存在。

复现需区分三件事。训练数据由 2,000 个基础回合经规则专家与重采样扩为十任务混合，评测用额外 400 个回合，场景划分明确排除未见场景。训练分三阶段，硬件为 6 张 A100，批量与学习率等超参数已披露。代码在原文中表述为即将公开，本次未获得可验证的作者资源，因此尚不能按已公开引用，复现第一步应先复现空间定位预训练并检查方位与距离误差是否收敛。

若任务同时需要理解口语意图与定位说话人，且允许记住单次语音并随运动更新，该运动感知思路值得尝试。纯文本指令或固定声源重复播放的场景则无需该复杂度。教学上可用苹果与玩偶 2 例对照请求具体程度对探索长度的影响。工程落地前需补做真实房间的双耳录音验证、动态说话人与多干扰源测试，以及放置稳定性的闭环评估，再决定是否引入该分支。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音频采样率 16 kHz，双耳前端保留左右耳对数梅尔与耳间相位差，空间分支输出 2048 维并池化为 16 个向量，投影为维度 3584 的 16 个空间 token，帧率步长与码率及因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：2,000 个基础回合覆盖 38 个开发场景，划分为 34 个场景 1,790 训练与 4 个场景 210 验证，十任务混合含 150k 训练与 13k 验证样本，评测为额外 400 个回合含 200 已见与 200 未见共 49 个场景，显式关系隐式按 4 比 3 比 3 混合
- **算力与训练耗时**：第三阶段在 6 张 A100 GPU 以 BF16 训练 1 轮，每卡批量 1 累积 8 步有效批量 48，前两阶段按场景不交叠划分且排除 11 个未见评测场景，前两阶段硬件型号与总耗时原文未披露
- **核心超参数与配置**：第一阶段方向余弦加对数距离光滑 L1 损失，主干与预测头学习率 10-5 与 10-4，第二阶段适配器与定位头学习率 10-3 与 10-4 批量 256，第三阶段回答加权 2.0 与 0.25 与 1.0，AdamW 学习率 10-5 权重衰减 0.1 热身 3%，LoRA 秩 16 α 32 丢弃率 0.05
- **推理速度与部署开销**：原文未披露 RTF 与 TTFA 与显存开销，执行按仿真步数计量，预算 5000 步，平均步数需结合成功率理解而非单纯效率指标
- **开源产物与协议状态**：原文表述代码即将公开，本次未获得经验证的作者代码权重数据或演示资源，按无可用来源处理，不声称已公开或可运行
- **附录与补充材料要点**：原文未披露附录证明或补充消融细节，关键诊断为运动适配后方位误差与距离误差，以及并发声干扰与远距离下的失效模式

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.30171v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：提出AVR新任务，将单次口语意图理解、多人声源定位与取物递送统一为闭环，覆盖三类八子型评测口径。

- 核心优势：并联运动感知空间音频编码器，给出左右耳梅尔与耳间相位差堆叠前端及相对位姿残差更新公式与三阶段训练。

- 核心优势：不可见划分累积消融从单声道3.5%经空间编码与运动适配提升至17.0%，并附方位与距离诊断误差佐证。

- 主要短板：最近支撑面放置两划分仅3.3%，并发声下不可见OSR从17.0%降至6.5%，每划分仅200回合且未报告统计置信区间。

- 主要短板：代码、模型权重与2400回合自建基准均无可验证链接与协议，仅承诺代码不久后公开。

- 主要短板：运动适配依赖仿真相对位姿真值并假设说话人静止单次发声，专家依赖仿真特权状态，噪声位姿与动态说话人未经核查。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
