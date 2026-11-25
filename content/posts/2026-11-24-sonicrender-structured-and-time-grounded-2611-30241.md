---
title: "SonicRender: Structured and Time-Grounded Rendering of Multi-Event Audio Scene Generation"
date: 2026-11-24
draft: false
tags: [音频生成, 流匹配, 混合专家模型]
categories: [论文速递]
description: "针对单次生成中漏事件、错说话人与放错时间的问题，SonicRender 以 TASG 绑定身份与事件并以 AbsTime 把秒级窗口落到潜在帧，在 SceneMix 取得 85.4% 事件召回与 83.9% 窗口命中且听测显著领先，代价是依赖整数秒时钟与内部大规模数据及模型裁判。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30241"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "结构化时间接地实现多事件音频场景的一次渲染"
paper_digest_original_title: "SonicRender: Structured and Time-Grounded Rendering of Multi-Event Audio Scene Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30241v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30241v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30241v1.pdf"
paper_digest_primary_task: "音频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.moe","label":"混合专家模型"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单次生成中漏事件、错说话人与放错时间的问题，SonicRender 以 TASG 绑定身份与事件并以 AbsTime 把秒级窗口落到潜在帧，在 SceneMix 取得 85.4% 事件召回与 83.9% 窗口命中且听测显著领先，代价是依赖整数秒时钟与内部大规模数据及模型裁判。"
paper_digest_reader_sections: [{"heading":"多事件混音为何既要保住每个事件又要放准时间","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"SonicRender 一次渲染完整场景的五环流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"TASG 把持续身份与局部事件拆开后再用引用绑回","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"AbsTime 双路时间坐标与双流 MoE 渲染器的工作方式","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"单任务保真度与 SceneMix 场景保真度的主要收益","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结构、时间坐标与容量各自贡献多少","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"整数秒、内部数据与小规模听测划定的适用边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Kling AI","The Chinese University of Hong Kong"],"name":"Yunrui Cai"},{"affiliations":["Kling AI"],"name":"Xu Li"},{"affiliations":["Kling AI"],"name":"Yan Rong"},{"affiliations":["The Chinese University of Hong Kong"],"name":"Dingdong Wang"},{"affiliations":["Kling AI"],"name":"Yucheng Zhou"},{"affiliations":["The Chinese University of Hong Kong"],"name":"Xixin Wu"},{"affiliations":["Kling AI"],"name":"Chen Zhang"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Zhiyong Wu"},{"affiliations":["The Chinese University of Hong Kong"],"name":"Helen Meng"}]
paper_digest_abstract_sha256: "e210ac7687c64823c5949100bb83b306e11db53a778e6f28025ab3c82c0e4711"
paper_digest_sidecars: {"citation.bib":{"sha256":"ab33d9bae7fcef69f65e90ef9188492083368ff6c17cd0d44a939f49657b2a4c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30241/citation.bib"},"citation.json":{"sha256":"70d66890f23a21aaaf0708b7cfc0122bdb86358f466711fec72ef2ee9eaa9e20","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30241/citation.json"},"citation.ris":{"sha256":"f87f4734c43b3dee8f2d7c6d37262a176f24bd8e2a9f48fa9e917970120ccfbe","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30241/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"389d8c120a8191a4cafa0c2b2d6b1b46977473e533f07eb7ef2ff3693de7c528","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30241/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "468b5e9f85dfa3cea4226cc19d679ed86ba036ad7c2eec7c8f8a11e82279938f"
paper_digest_api_reader_plan_sha256: "2356a51bda780e881650ac73737adb9f44704a3a38023a1b5293d48e060f0ae5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ed99d201efbecd4309282654afe935f970e8332d08eb4c471dc9200cd322e068"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5c3774417728906c0dc539aa95905d2c531b49ac13086f3e2f290f9ae12574ac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5c52d3e426b8010484e78e48f372ff3932e0f0f84ad2c9692a87dfb732c7c5e7"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e1131fe2ee9191037578df6c3971d6689333ef62b520eed3d7284643a143772a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 结构化时间接地实现多事件音频场景的一次渲染

> 英文题目：*[SonicRender: Structured and Time-Grounded Rendering of Multi-Event Audio Scene Generation](https://arxiv.org/abs/2611.30241v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[混合专家模型](/audio-paper-digest-blog/papers/?concept=method.moe)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 8.0/10 | 技术严谨 7.8/10 | 实验充分 8.2/10 | 清晰度 7.0/10 | 影响力 7.4/10 | 开源 1.5/10 | 可复现 6.0/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Yunrui Cai：Kling AI；The Chinese University of Hong Kong
- Xu Li：Kling AI
- Yan Rong：Kling AI
- Dingdong Wang：The Chinese University of Hong Kong
- Yucheng Zhou：Kling AI
- Xixin Wu：The Chinese University of Hong Kong
- Chen Zhang：Kling AI
- Zhiyong Wu：Shenzhen International Graduate School, Tsinghua University
- Helen Meng：The Chinese University of Hong Kong

## 📌 核心摘要

**问题与瓶颈：** 统一音频生成器已能合成语音、音乐与音效的混合声，但复杂场景请求进一步规定出现哪些事件、由谁发出以及在何时听到。全局听感合理的混合声仍可能漏掉较弱音效、把话语归错说话人、截断持续背景或放错时间，事件重叠与人物反复出现会放大这些失效。现有结构化条件多用扁平描述或文本侧时间记号，难以在并行去噪的潜变量序列中把符号秒数锚定到固定物理位置，也难以让身份与事件约束在重叠中保持可辨。论文把目标定为一次生成一段完整波形，同时满足事件齐全、声源一致与时间对齐。

**核心思路与方法架构：** 与最接近的角色加时间线基线相比，本文增量在于把声源与事件解耦表示并在音频侧直接加入度量时间坐标，同时保留双流扩散变换器与流匹配训练框架。时间音频场景图（Temporal Audio Scene Graph，TASG）把全局背景、持久声源记录、事件记录与混合关系组织成规范文本，声源保存音色身份而事件保存用词、情感、演绎与起止秒数，重复说话人靠共享编号绑定不同轮次。绝对时间模块（AbsTime）在约 21.53 帧每秒的潜变量流上为每个有效帧加入未归一化的正弦帧编号编码，并把有效画布长度编码进全局扩散条件，两路门控初值为零以保持初始化稳定。1 s 的 44.1 kHz 输入经 2 048 倍下采样得到约 22 帧 64 通道潜变量，每帧叠加帧坐标后与文本特征经联合注意力交互，场景汇总经自适应归一化调制全网，后段音频层以 1 个共享专家加 8 个路由专家处理异质重叠。冻结的文本编码器只提供条件，混合波形监督与流匹配目标共同学习身份复用与事件落点，推理从高斯噪声经 64 步欧拉积分一次解码成混合声。

**关键实验与核心代价：** 在 Seed-TTS-Eval 上，本文以同一检查点取得英语词错率（WER，越低越好 ↓）0.9% 与普通话字错率（CER，越低越好 ↓）0.6%，为所列统一生成器中最低，配对自然语言变体为 3.9% 与 3.2%。在 AudioCaps 上取得对比语言音频相似度（CLAP，越高越好 ↑）0.507 与库尔贝克莱布勒散度（KL，越低越好 ↓）1.15，在 MusicCaps 上取得 CLAP 0.384 与 KL 0.97，其中 CLAP 两项均为全表最高。在 MMAG 时间戳子集上，以取整到秒的提示直接对照原始小数秒真值取得语音 F1 0.79 与声音 F1 0.60，均领先对照系统。在 168 个请求的 SceneMix 上取得全事件召回率 85.4%、窗口命中率 83.9% 与说话人准确率 95.7%，相对信息相同的自然语言变体 74.6%、68.0% 与 86.6% 分别提高 10.8、15.9 与 9.1 个百分点。20 个场景的 15 人听测取得质量分 4.25 ± 0.20 与场景实现分 4.44 ± 0.25，在 p < 0.01 水平上优于全部 5 个对照系统。代价是约 3.0B 总参数与每音频词元约 2.3B 激活参数，以及 64 步采样开销。

**适用边界与深读导览：** 结论成立于 6 s 到 12 s 画布、整数秒时钟记号与文本指定说话人场景，对亚秒级精确定位、12 s 以上长时依赖与真实物理混响交互尚未验证，演示页展示的多语言与方言仅为定性示例。若想深究帧坐标与时长条件的注入方式可看方法中绝对时间与渲染器公式，若想核对稠密组合与消融增益可看事件负载曲线与结构、时间、容量三组消融。

## 🔗 开源与复现资源

- 演示资源：<https://caiyunrui.github.io/SonicRender> → <https://caiyunrui.github.io/SonicRender/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多事件混音为何既要保住每个事件又要放准时间

统一音频生成器已能在同一模型内合成语音、音乐与音效混合声，但听起来合理并不等于场景成立。一段复杂请求会同时规定出现哪些事件、每段话由谁说出、音乐与环境声如何铺底，以及每个活动在第几秒出现。即使整体质感可信，仍可能漏掉较弱的音效、把台词安到错误说话人、截断持续背景或放错时间，而重叠活动与轮流对话越多，这类失误会更快累积。已有混合音频研究把事件完整性、时序与说话人一致性视为超越整体音质的关键瓶颈。

为把问题说精确，可将输入视为带时间窗的结构化场景，输出为单路混合波形。输入需指明全局语境、持续声源身份、每个事件的文本或声学内容、声学角色与事件间关系，以及用秒表示的起止窗口，SceneMix 评测中每条请求包含 2 个至 8 个事件，时长为 6 s 至 12 s。输出则是一段 44.1 kHz 立体声混合音频，要求在同一波形内实现所有事件。关键区分在于声源与事件，声源是可复现的身份，事件是一次局部出现，同一说话人可在不同轮次更换词句与语气而不变成新声源，短促音效也不应被持续背景淹没。

由此形成两个具体困难。其一是组合下的绑定保持，扁平描述容易让属性在并发事件间渗漏，身份混淆、事件遗漏与层次截断随之而来。其二是符号时间与并行潜在生成的对齐鸿沟，文本中的 6 s 只是符号指令，而扩散 Transformer 对变长潜在序列并行去噪，相对位置编码只表达序列内先后，既不能把物理秒锚定到固定潜在帧，也说不清有效画布在哪里结束。SonicRender 正是为同时解决这两点而设计，用显式引用绑定身份与事件，用音频侧度量坐标把时钟值落到帧上。

### SonicRender 一次渲染完整场景的五环流水线

先用咖啡馆例子建立全流程直觉，再拆解每个模块的输入输出。上方场景请求用自然语言写出人物、音乐、雨声与杯子碰撞的时间，下方蓝图把身份与事件分开，底部示意波形展示各层如何对齐成一路混合。沿着这一主线理解条件组织与时间接地的作用，后续公式与消融会逐一对应，避免把结构收益与容量收益混为一谈。

[![原论文 Fig. 1：Overview of SonicRender. A scene request is organized into a TASG blueprint that binds persistent…](https://arxiv.org/html/2611.30241v1/taslp_teaser.png)](https://arxiv.org/html/2611.30241v1/taslp_teaser.png)

*论文图 1：10 s 咖啡馆场景从自然语言请求经 TASG 蓝图到分层波形与混合波形的渲染示意（原论文 Fig. 1）。*

该图上半为 10 s 室内咖啡馆对话，Speaker A 在 0 s 至 3 s 与 8 s 至 10 s 两次说话，Speaker B 在 4 s 至 7 s 回应，柔和钢琴与雨声贯穿 0 s 至 10 s，杯子碰撞插在 5 s 附近。中部蓝图把 Speaker A 、Speaker B 、杯子、雨与音乐列为持续声源，把三次对话与背景音乐列为事件，并用 background_to 等关系标明层次。底部示意把各声源分行画出后再叠成 Mixture，可见同一说话人两次出现保持同色同行，短暂碰撞只占窄条，持续层则铺满全长。

与最接近的既有路线相比，改动集中在三处。Qwen-Audio-3.0-Gen-Preview 同样用 DiT 与角色时间线，但只靠文本侧时间 token 且不建模背景到前景的跨事件声学角色，SonicRender 保留双流 DiT 主干，替换为关系型 TASG 文本条件并新增音频侧绝对帧与有效时长两路坐标。相对 Dasheng AudioGen 的多视角描述与 WavJourney、AuDirector 的多阶段协作，本文坚持单次生成完整混合。信号规格为 44.1 kHz 立体声，音频自编码器下采样 2,048 倍，对应约 21.53 帧 / s 的潜在速率，64 通道连续潜在，文本侧最多接受 1,024 个 token。

以 1 s 输入为例追踪张量流。第一步，1 s 立体声波形经冻结自编码器变为约 22 帧 64 通道混合潜在，记为 \(F\) 约 22 的序列，有效掩码据此确定 \(F_{i}\)。第二步，TASG 序列化文本经冻结 Qwen3-VL-8B-Thinking 编码为 \(L\) 行 4,096 维特征，平均第 -8 层与第 -28 层隐状态并做层归一化，再线性投影到 1,536 宽。第三步，噪声潜在与可选掩码参考拼接后投影并叠加卷积位置与 AbsTime，进入 24 块 MM-DiT。第四步，联合注意力与全局调制交替作用，后四块音频前馈切换为共享加路由 MoE。第五步，64 步 Euler 积分去噪后经立体声 VAE 解码回 44.1 kHz 波形。

### TASG 把持续身份与局部事件拆开后再用引用绑回

TASG 把场景写成五元蓝图，包含全局语境、持续声源集合、事件集合、关系与度量时间约束。每个事件把归属、内容、局部属性、声学角色与时间窗绑在一起，稳定音色放在声源记录，语言、情感、表达方式与起止放在事件记录。这种拆分让同一身份可复用而每次出现仍可变化，也让短促前景与持续背景在重叠时各自可寻址。

\[E_{k}=(s_{k},c_{k},a_{k},r_{k},\tau_{k}),\]

该式中 \(s_{k}\) 是声源标识，\(c_{k}\) 为逐字台词或声学描述，\(a_{k}\) 管局部变体，\(r_{k}\) 标明前景或背景等声学角色，\(\tau_{k}\) 为起止窗口。当同一说话人两次出现共享同一 \(s_{k}\) 而 \(c_{k}\) 与 \(\tau_{k}\) 不同，音频帧可同时注意同一声源描述与不同轮次的事件记录，既保住音色一致又不混淆词句。若把 \(s_{k}\) 全写成互不相同标识，复现说话人将退化为陌生人，若去掉 \(\tau_{k}\)，排序与重叠即失去依据，事件记录连同关系进入文本流供联合注意力取用。

为理解规范表达如何减少措辞变体，可对照左侧表示设计与右侧编译流水线。左侧自上而下展示语境到声源再到事件的树形归属与虚线关系，底部时间条直观呈现重叠与持续，右侧展示自然语言如何被整理为规范 JSON 再序列化为 TASG。抓住从自由描述到固定标签的收敛过程，就能明白结构比较为何只改变组织而不改变事实。

[![原论文 Fig. 2：TASG representation and LLM-assisted compilation.](https://arxiv.org/html/2611.30241v1/taslp_asg.png)](https://arxiv.org/html/2611.30241v1/taslp_asg.png)

*论文图 2：TASG 五元表示设计与规则引导语言模型从自由描述编译为规范蓝图的流水线（原论文 Fig. 2）。*

左半把蓝图写成 5 个槽位，全局语境 \(G\) 展开为 S1 至 S4 等说话人、音乐与环境声源，每个声源再展开为 E1 至 E5 等语音、音乐、环境与音效事件，事件间以 \(R\) 虚线连接，底部 \(T\) 用横条标出 E1 至 E5 在 0 s 至 13 s 范围内的起止与重叠。右半自上而下为自然语言标题、时间戳与话语预处理、保留时间戳与绑定声源的规则引导 LLM 代理、规范 JSON 图与 TASG 蓝图，最终输出 TASG 条件。这种两步走把措辞归一化与身份绑定显式化，为后续公平比较奠定基础。

训练标注先用 AudioMap 联合抽取带时间戳的话语、说话人特征与非语音事件，再转为规范 TASG 记录，保留内容、属性与时间戳。自由输入则由规则引导语言模型编译为规范 JSON，再确定性排成紧凑标签序列，推理评测直接使用人工核对后的规范说明，从而把编译误差与渲染能力分开。条件与目标混合音频构成监督对，源链接与时间窗与声学实现共同出现，无需声源分离波形或额外对齐网络，梯度经联合注意力把需求与实现关联起来。

### AbsTime 双路时间坐标与双流 MoE 渲染器的工作方式

把时间坐标与渲染主干放在一张图里看最清楚，左侧为条件与噪声如何进入双流块，右侧拆出绝对帧与有效时长两路嵌入，底部点出物理时间与潜在坐标的换算。先沿 TASG 条件、噪声潜在与流时间 3 路输入看到联合注意力，再看两处零门如何把坐标轻轻叠入音频与全局条件。

[![原论文 Fig. 3：SonicRender architecture and AbsTime grounding.](https://arxiv.org/html/2611.30241v1/taslp_method.png)](https://arxiv.org/html/2611.30241v1/taslp_method.png)

*论文图 3：双流 MM-DiT 渲染主干与绝对帧加有效时长两路零门时间坐标的架构细节（原论文 Fig. 3）。*

左侧 TASG 条件经场景嵌入进入文本流，噪声潜在经音频投影进入音频流，流时间经有效时长增强后做全局调制，中间多块 MM-DiT 以联合注意力耦合 2 流，音频侧后段前馈切换为共享专家加 Top-K 路由专家，最终速度经流积分得到干净潜在再由立体声 VAE 解码为一路混合。右侧上方对帧序号做正弦加投影并经零门叠入音频隐状态，下方对有效帧数同样编码后叠入全局条件，底部以 10 s 与 14 s 两条画布说明同一 8 s 时刻对应同一帧序号，填充不计入坐标。

#### 绝对帧与有效时长两路坐标

记波形采样率为 \(f_{s}\)，自编码器下采样倍数为 \(d\)，潜在速率为 \(r\) 等于 \(f_{s}\) 除以 \(d\)，物理时刻 \(\tau\) 对应帧约为 \(r\) 乘 \(\tau\)。TASG 窗口以秒为单位写在文本侧，而生成器操作的是潜在序列，AbsTime 的任务就是把这一换算关系直接送入音频计算，使同一物理秒在不同总时长下仍对应同一嵌入，避免相对位置随画布伸缩而漂移。

\[\tilde{h}_{f}=h_{f}+g_{\mathrm{abs}}\phi(f).\]

该式把第 \(f\) 个有效帧的正弦映射经门叠入隐状态。正弦映射先对未归一化帧序号做正弦编码，频率由特定公式给出再经两层 SiLU 多层感知机，维度与音频宽度对齐。直觉是绝对而非按画布归一化，固定速率下同一秒永远拿到同一向量，查询键值与前馈都能见到该坐标。若门保持为 0 则退化为原渲染器，训练中从 0 渐增以平稳引入时间信息，填充帧不参与注意与损失也不计入有效帧数。

仅有逐帧坐标还不够，模型还需知道有效画布在哪里结束，否则无法区分 6 s 场景的尾部与 12 s 场景的中部。有效帧数来自样本有效掩码求和，经投影叠入全局扩散条件，与帧级通路互补，一者定位 token，一者交代时间轴总长，并随流状态参与文本池化与自适应层归一化，使场景摘要始终感知时长。

\[\tilde{q}_{i}=q_{i}+g_{\mathrm{dur}}\psi(F_{i}).\]

该式中基础流条件向量经门叠加有效时长嵌入，投影与帧编码同构但参数独立，门同样零初始化。直觉是把画布长度送入全局调制，文本池化与每块自适应层归一化都能据此调整，即使语义条件为分类器无关引导而丢弃，2 分支仍共享同一坐标，条件与无条件预测指向同一画布。若有效帧数很小，模型应把事件压缩排布，若很大则允许长背景延展，门控渐进学习避免初期破坏主干。

#### 联合注意力与流匹配及混合容量

条件分 2 级进入计算，token 级经联合注意力保留每个声源与事件的单独可达性，场景级经条件池化得到随流状态与时长变化的摘要。池化权重对文本 token 做注意力，场景向量再经独立自适应层归一化调制双流，投影 token 也拼接到文本流首部，使细节约束与整体语境同时起作用。

\[[O_{c};O_{x}]=\operatorname{softmax}\!\left(\frac{[Q_{c};Q_{x}][K_{c};K_{x}]^{\top}}{\sqrt{d_{h}}}+M\right)[V_{c};V_{x}],\]

该式把文本与音频的查询键值拼接后做一次非因果注意力，再拆回各自流，其中 \(c\) 表文本条件，\(x\) 表音频，\(d_{h}\) 为头维度，\(M\) 屏蔽填充。文本与音频各有独立投影、残差与前馈，旋转位置编码按模态解耦且分别从零计数，音频索引不受标题长度影响。直觉是复现说话人的音频帧可同时取用同一声源描述与不同轮次的词句与时间，查询键值经均方根归一化保持稳定，输出经拆分保留模态特有变换。

训练在成对场景条件与目标混合上做条件流匹配，干净潜在记为 \(x_{0}\)，噪声服从标准正态，流时间由正态变量经 Sigmoid 得到，加噪中间态为两者线性插值，网络预测速度逼近噪声减数据的差。掩码参考保留时只在掩码跨度算误差，否则在全部有效帧算误差，语义丢弃同时切断 token 与池化两路。

\[\mathcal{L}_{\mathrm{FM}}=\mathbb{E}_{x_{0},\epsilon,t,c}\!\left[\left\|v_{\theta}(x_{t},t,c)-(\epsilon-x_{0})\right\|_{\mathcal{M}}^{2}\right].\]

该损失在通道与有效帧集合上取均方误差，梯度经联合注意力把声源事件需求与声学实现关联，时间位置也在同一生成目标内学到，无需外部时间矩阵或推理期注意力手术。容量上前段保持稠密，后四块音频前馈改用一个共享专家加 8 个路由专家 Top-2 选择，门控从 1 与 0 渐增并辅以负载均衡损失，权重为 0.01。MoE8 共约 3.0B 总参数，每音频 token 激活约 2.3B，文本编码器冻结，推理以请求时长定画布，经 64 步 Euler 从 1 积到 0，引导尺度为 4.0 后解码得完整混合。

### 单任务保真度与 SceneMix 场景保真度的主要收益

#### 单任务与多语言基线对照

先看单检查点能否同时做好语音、音效与音乐 3 类单任务，再看多语言是否只是英文的附带品。表头方向已标明升降，Seed-TTS-Eval 报英文词错率与中文字符错率，AudioCaps 报分布距离 FAD、KL 与文本音频对齐 CLAP，MusicCaps 报 KL 与 CLAP。比较时注意统一生成器与任务专家分在不同组，短横表示该项缺失，公平性在于同一检查点完成全部三域。

| Model | Seed-TTS-Eval (TTS) EN WER↓ | Seed-TTS-Eval (TTS) ZH CER↓ | AudioCaps (TTA) FAD↓ | AudioCaps (TTA) KL↓ | AudioCaps (TTA) CLAP↑ | MusicCaps (TTM) KL↓ | MusicCaps (TTM) CLAP↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Task-specific generators |  |  |  |  |  |  |  |
| F5-TTS [45] | 1.8% | 1.6% | – | – | – | – | – |
| CosyVoice 3 [44] | 1.5% | 0.7% | – | – | – | – | – |
| Qwen3-TTS [46] | 1.2% | 0.8% | – | – | – | – | – |
| Higgs Audio V2 [47] | 1.0% | 0.8% | – | – | – | – | – |
| TangoFlux [48] | – | – | 2.26 | 1.15 | 0.480 | – | – |
| MusicGen-Large [49] | – | – | – | – | – | 1.31 | 0.280 |
| AudioX [20] | – | – | 2.45 | 1.27 | 0.440 | 0.96 | 0.240 |
| AudioLDM 2 [16] | – | – | 2.29 | 1.41 | 0.419 | 1.20 | 0.301 |
| Stable Audio Open [50] | – | – | 4.13 | 2.14 | 0.350 | 1.44 | 0.300 |
| UniFlow-Audio [51] | – | – | 5.74 | 1.43 | 0.476 | 1.87 | 0.241 |
| Unified generators |  |  |  |  |  |  |  |
| Ming-Omni-TTS-0.5B [21] | 2.2% | 0.9% | – | 2.26 | 0.347 | – | – |
| Ming-Omni-TTS-16.8B [21] | 2.0% | 0.8% | – | 1.64 | 0.424 | – | – |
| Dasheng AudioGen [2] | 12.2% | – | 3.19 | 1.86 | 0.438 | 1.37 | 0.334 |
| UniMoE-Audio [52] | 1.3% | 0.8% | – | – | – | 1.25 | 0.340 |
| UniAudio 2.0 [17] | 3.6% | 2.3% | – | 3.26 | 0.170 | 1.80 | – |
| MiDashengLM-Gen [3] | 2.8% | 3.9% | 5.01 | 1.91 | 0.360 | 1.24 | 0.330 |
| SonicWeave [22] | 1.0% | 0.8% | 2.75 | 1.26 | 0.475 | 1.06 | 0.312 |
| Our models |  |  |  |  |  |  |  |
| Natural language + AbsTime | 3.9% | 3.2% | 3.17 | 1.56 | 0.432 | 0.99 | 0.310 |
| SonicRender | 0.9% | 0.6% | 2.58 | 1.15 | 0.507 | 0.97 | 0.384 |

SonicRender 在英文词错率取得 0.9% ，中文字符错率取得 0.6% ，均为全表最低，优于最接近的统一生成器 SonicWeave 的 1.0% 与 0.8% ，也低于多位语音专家。AudioCaps 上 CLAP 达 0.507 为全表最高，KL 为 1.15 与 TangoFlux 并列最低，FAD 为 2.58 虽不及 TangoFlux 的 2.26 ，但明显优于同门自然语言基线的 3.17 。MusicCaps 上 CLAP 为 0.384 居全表最高，KL 为 0.97 仅次于专家 AudioX 的 0.96 。多语言上同检查点在日语字符错率为 5.23% ，韩语为 2.27% ，西班牙语词错率为 4.78% ，仅韩语领先 2 位对照系统，日西两项并未胜出，说明语言覆盖仍不均衡。

#### MMAG 时间戳混音

MMAG 同时考内容质量与时间戳跟随，主集用整体描述，时间戳子集用带窗描述，含 3,974 条主集与 1,828 条时间戳样本。指标中 KL 越低越好，词错率越低越好，CLAP 与 AudioBox 美学复杂度 PC 越高越好，语音与声音 F1 越高越好。关键前提是训练语料把 TASG 时钟统一为整数秒，推理把小数边界四舍五入到最近整数秒，主 F1 对原始小数真值窗打分，灰色 F1 对取整后窗打分以隔离渲染器自身的跟随能力。

| Model | Main: overall captions KL↓ | Main: overall captions WER↓ | Main: overall captions CLAP↑ | Main: overall captions PC↑ | Timestamp: timed captions WER↓ | Timestamp: timed captions CLAP↑ | Timestamp: timed captions Speech-F1↑ | Timestamp: timed captions Sound-F1↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AuDirector (agentic) [26] | 1.60 | 0.08 | 0.34 | 3.69 | 0.15 | 0.35 | 0.72 | 0.57 |
| LTX-2 (audio-visual) [55] | 1.31 | 0.04 | 0.34 | 3.04 | 0.05 | 0.33 | 0.64 | 0.44 |
| UniAVGen (audio-visual) [56] | 2.28 | 0.10 | 0.25 | 2.35 | 0.15 | 0.23 | 0.63 | 0.29 |
| Dasheng AudioGen-Base [2] | 0.87 | 0.11 | 0.34 | 3.55 | 0.43 | 0.31 | 0.60 | 0.41 |
| Dasheng AudioGen-Fine [2] | 0.89 | 0.11 | 0.33 | 3.64 | 0.13 | 0.31 | 0.62 | 0.42 |
| Ming-Omni-TTS-0.5B [21] | 2.80 | 0.03 | 0.26 | 1.60 | – | – | – | – |
| Ming-Omni-TTS-16.8B [21] | 2.46 | 0.03 | 0.27 | 1.79 | – | – | – | – |
| Natural language + AbsTime | 0.98 | 0.07 | 0.32 | 4.05 | 0.08 | 0.28 | 0.72 / 0.75 | 0.50 / 0.54 |
| SonicRender | 0.90 | 0.02 | 0.40 | 4.21 | 0.03 | 0.39 | 0.79 / 0.86 | 0.60 / 0.65 |

主集上 SonicRender 取得 KL 为 0.90 ，略高于 Dasheng AudioGen-Base 的 0.87 而未夺魁，但在词错率为 0.02 、CLAP 为 0.40 与 PC 为 4.21 三项均为全表最高，相对同构自然语言基线的 0.07 、0.32 与 4.05 均有提升，说明在保住语音流利的同时更好地装下音乐与瞬态。时间戳子集上对原始小数窗取得语音 F1 为 0.79 与声音 F1 为 0.60 ，均超越 Agentic AuDirector 的 0.72 与 0.57 ，即使存在至多 0.5 s 的输入取整误差仍领先。对取整窗则升至 0.86 与 0.65 ，AbsTime 本身以约 21.53 Hz 即约 46 ms 每帧运行，黑灰分差主要来自文本侧 token 约定而非架构极限。

#### SceneMix 完整场景与主观听感

SceneMix 自建 168 条 6 s 至 12 s 请求，每条 2 个至 8 个事件，其中 150 条为语音加非语音层，40 条单说话人、50 条双人对话、60 条至少 3 人，另 18 条为纯音乐加音效。评测用 Gemini 3.1 Pro Preview 按固定事件协议判内容与时间，词错率另经独立盲转录，MOS 在 20 场景子集上由 15 位听众按 5 分制评质量与场景实现，表中同时给出 AI-Tech 与 AI-Sem 的 1 分至 5 分。WHR 对全部定时目标计分，漏检即失败，CWA 只在已检出中计时间。

| Model | Objective Sound Rec.↑ | Objective Event Rec.↑ | Objective WER↓ | Objective WHR↑ | Objective SpkAcc↑ | AI judge AI-Tech↑ | AI judge AI-Sem↑ | Human MOS MOS-Q↑ | Human MOS MOS-R↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dasheng AudioGen-Fine [2] | 56.4% | 59.5% | 10.2% | 40.8% | 49.0% | 3.10 | 2.95 | 2.74 ± 0.32 | 2.88 ± 0.30 |
| MiDashengLM-Gen [3] | 62.6% | 75.5% | 8.1% | 48.7% | 70.8% | 3.27 | 3.20 | 3.52 ± 0.35 | 3.69 ± 0.34 |
| Ming-Omni-TTS-0.5B [21] | 37.0% | 50.2% | 3.2% | 35.9% | 58.7% | 4.14 | 2.84 | 3.55 ± 0.32 | 3.28 ± 0.41 |
| Ming-Omni-TTS-16.8B [21] | 48.4% | 53.0% | 2.7% | 34.6% | 65.8% | 4.32 | 2.96 | 3.82 ± 0.27 | 3.37 ± 0.30 |
| Natural language + AbsTime | 59.9% | 74.6% | 5.2% | 68.0% | 86.6% | 4.29 | 3.93 | 3.90 ± 0.23 | 3.74 ± 0.34 |
| SonicRender | 71.1% | 85.4% | 1.1% | 83.9% | 95.7% | 4.53 | 4.34 | 4.25 ± 0.20 | 4.44 ± 0.25 |

SonicRender 取得事件召回 85.4% 与非语音召回 71.1% ，相对最强外部 MiDashengLM-Gen 的 75.5% 与 62.6% 分别高 9.9 与 8.5 个百分点，词错率为 1.1% 为全表最低，WHR 为 83.9% 远超外部最强的 48.7% ，说话人准确率为 95.7% 亦居首。AI-Tech 为 4.53 与 AI-Sem 为 4.34 同为最高，MOS-Q 为 4.25 ± 0.20 与 MOS-R 为 4.44 ± 0.25 均为六系统最高，且 Wilcoxon 符号秩检验在 \(p\) 小于 0.01 下显著优于其余五系统。自动判分与人工高度相关，系统级 Spearman 相关为 0.94 ，30 样本双人审计在存在性、窗口与说话人对上一致率分别为 91.0% 、88.2% 与 95.1% ，但主体仍依赖模型裁判而非全量人工。

为检验结构化在事件变密时是否依然防漏，可按请求事件数分组看召回。横轴为每条请求的事件数从 2 个事件到 8 个事件，纵轴为组内全事件召回率（%），每事件等权，曲线包含 SonicRender、同构自然语言基线与多个外部系统。重点比较 6 个与 8 个事件两处高负载分组的相对位置与下降斜率，而非只看平均值。

[![原论文 Fig. 4：Event completeness versus compositional load.](https://arxiv.org/html/2611.30241v1/plot1.svg)](https://arxiv.org/html/2611.30241v1/plot1.svg)

*论文图 4：请求事件数从 2 增至 8 时各系统全事件召回率随组合负载的变化曲线（原论文 Fig. 4）。*

两事件时两条内部曲线均接近 100% 而饱和，差异自 5 个事件起拉开。6 事件处 SonicRender 保留约 84% 事件，8 事件处仍约 74% ，而同构自然语言基线与 MiDashengLM-Gen 在 8 事件处均跌至约 58% 。其余系统在多类活动共存后下滑更陡，有的在 5 事件附近已跌破 50% 。这说明优势不在平均覆盖的一时领先，而在于随组合密度上升仍较平稳，尤其对长背景加短插入这类义务增多但各自独立的场景，显式身份与窗口绑定持续起作用。

### 结构、时间坐标与容量各自贡献多少

消融固定同组场景需求，一次只换一处，以区分信息组织、音频侧坐标与路由容量的作用。首两行在 MoE8 与 AbsTime 固定的信息匹配条件下比较 TASG 与自然语言，第三行去掉 AbsTime 看时间接地，末两行把 MoE8 换为 MoE4 与稠密主干看容量。SceneMix 侧看声音召回、词错率、说话人准确率与 AI-Sem，时间侧看 WHR 与在已检出中计分的 CWA，MMAG 侧看原始与取整窗下的语音与声音 F1。

| Configuration | Backbone | SceneMix: content and binding Sound Rec.↑ | SceneMix: content and binding WER↓ | SceneMix: content and binding SpkAcc↑ | SceneMix: content and binding AI-Sem↑ | Temporal WHR↑ | Temporal CWA↑ | MMAG timestamp Speech-F1↑ | MMAG timestamp Sound-F1↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASG (w/o AbsTime) | MoE8 | 69.2% | 1.7% | 94.8% | 4.25 | 71.6% | 85.0% | 0.70 / 0.73 | 0.48 / 0.53 |
| Natural language + AbsTime | MoE8 | 59.9% | 5.2% | 86.6% | 3.93 | 68.0% | 91.2% | 0.72 / 0.75 | 0.50 / 0.54 |
| TASG + AbsTime (full) | MoE8 | 71.1% | 1.1% | 95.7% | 4.34 | 83.9% | 98.3% | 0.79 / 0.86 | 0.60 / 0.65 |
| TASG + AbsTime | MoE4 | 69.0% | 2.2% | 94.3% | 4.19 | 78.9% | 96.5% | 0.76 / 0.84 | 0.58 / 0.64 |
| TASG + AbsTime | Dense | 60.6% | 4.5% | 90.6% | 4.02 | 77.9% | 96.5% | 0.75 / 0.84 | 0.56 / 0.61 |

结构化在三处同时起效，声音召回从 59.9% 升至 71.1% 相差 11.2 个百分点，说话人准确率从 86.6% 升至 95.7% 相差 9.1 个百分点，WHR 从 68.0% 升至 83.9% 相差 15.9 个百分点，全事件召回亦高 10.8 个百分点，而词错率从 5.2% 降至 1.1% 。去掉 AbsTime 后声音召回仅从 71.1% 微降至 69.2% ，但 WHR 从 83.9% 跌至 71.6% ，CWA 从 98.3% 跌至 85.0% ，MMAG 语音与声音 F1 从 0.79 与 0.60 跌至 0.70 与 0.48 ，说明事件多能发出来但放不准。容量上 MoE8 相对稠密在声音召回高 10.5 个百分点，词错率从 4.5% 降至 1.1% ，MMAG F1 亦同步提升，MoE4 居中，符合路由容量帮助表达异质局部声学的预期。

更细的语音起始误差分析补足窗口合规的粗粒度，WhisperX 强制对齐抽词级起始并以阈值判定，漏检计失败。0.5 s 容限下完整模型命中约 48% 而无 AbsTime 仅约 19% 相差 29 个百分点，1.0 s 下为 85% 对 55% ，1.5 s 下为 95% 对 83% ，最大分离出现在要求严苛处。散点显示无 AbsTime 的后期语音常系统性偏晚，而完整模型紧贴对角线，印证同一符号时刻表经显式帧坐标才能稳定落到潜在位置，而非仅仅多生成事件。

### 整数秒、内部数据与小规模听测划定的适用边界

结论成立依赖 3 个前提。其一是时间分辨率为整数秒，训练把时钟统一为整数 token，MMAG 小数窗需取整输入，黑灰 F1 差正源于此，亚秒级精控仍是未来工作，物理声学交互也未显式建模。其二是训练用约 30,000 小时 8,000,000 条内部音频，外部无法复刻分布，SceneMix 仅 168 条 6 s 至 12 s 人工请求，听测仅 20 场景子集 15 位听众，虽报告 95% 置信区间与显著性，但高负载与长时场景仍覆盖有限。其三是事件存在与窗口判断依赖 Gemini 3.1 Pro Preview，虽与人工高相关，仍属模型裁判而非全量人工核查。

复现需区分三件事，代码、权重与系统可运行。原文披露优化器 AdamW、峰值学习率 3x10-5 、线性暖机与衰减、全局批量 256 、800,000 步、负载权重为 0.01 、24 块 1,536 宽 24 头、后四块音频 MoE、文本上限 1,024 token 与 64 步 Euler 推理，但未披露 GPU 型号数量与训练耗时，也未明确代码权重是否公开，仅演示页当前可用。复现第一步应先用核对后的 TASG 与固定种子 42 复刻 SceneMix 客观指标，再补 20 场景听测，切忌用自然语言直接替代 TASG 或改动取整规则，否则时间分数不可比。

选型上，若请求超过 4 个事件、含复现说话人与持续背景，或要求事件落在指定秒窗，TASG 加 AbsTime 的收益最明显，6 事件以上召回仍能维持约 84% 附近。若仅做单人单任务合成，结构化仍带来词错率改善，但需权衡构造规范蓝图的成本。试听可到作者演示页对照多语言方言口音、持续音乐铺底与短促插入的共存，以及电台与直播等多轮对话中同一说话人跨轮次的一致性，重点听漏事件是否补齐、起始是否偏晚，而非只听整体音质。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：44.1 kHz 立体声， 64 通道连续潜在， 自编码器下采样 2,048 倍约 21.53 帧每秒， 文本上限 1,024 token， 请求时长决定潜在画布， 填充不计入注意损失与有效帧数
- **训练与评测数据**：约 30,000 小时 8,000,000 条内部音频训练， 评测用 Seed-TTS-Eval AudioCaps MusicCaps CV3-Eval MMAG 主集 3,974 条时间戳子集 1,828 条及自建 SceneMix 168 条 6 s 至 12 s
- **算力与训练耗时**：原文未披露 GPU TPU 型号数量与训练耗时， 推理听测用种子 42 客观评测用种子 0 42 666
- **核心超参数与配置**：AdamW 峰值学习率 3x10-5 线性暖机衰减， 全局批量 256 共 800,000 步， 24 块 1,536 宽 24 头后四块音频 MoE 一共享八路由 Top-2， 负载权重 0.01， 推理 Euler 64 步引导尺度 4.0
- **推理速度与部署开销**：64 步 Euler 积分单次生成完整混合， MoE8 约 3.0B 总参数每音频 token 激活约 2.3B， 原文未披露 RTF 延迟与显存
- **开源产物与协议状态**：原文未明确代码权重数据公开状态， 作者演示页当前可用， 附录许可限制原文未披露
- **附录与补充材料要点**：原文未披露附录补充证明与额外消融， 典型失效为无 AbsTime 时后期语音系统性偏晚及高负载下非语音遗漏

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30241v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同一检查点在Seed-TTS英语WER0.9%与AudioCaps CLAP0.507等多项公开基准取得全表最高且MMAG语音声音F1领先全部对照。

- 核心优势：信息匹配TASG相对自然语言变体全事件召回提升10.8个百分点与窗口命中率提升15.9个百分点并有五配置直接消融支撑。

- 核心优势：20场景15人匿名随机听测报告均值±95%置信区间并经Wilcoxon检验p<0.01显著优于全部5个对照系统。

- 主要短板：未提供第一方代码仓库与模型权重下载地址与SceneMix数据集获取链接，仅有可访问演示页。

- 主要短板：未报告实时率延迟与显存占用，64步欧拉采样部署代价不明且6s到12s以外长时场景未系统评测。

- 主要短板：训练使用内部800万片段且无设备型号数量与训练时长披露，外部难以复现80万步训练过程。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
