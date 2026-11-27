---
title: "VibeVideoAgent: Closing the Perceptual Loop for Code-Driven Video Generation"
date: 2026-11-27
draft: false
tags: [视频生成, 音画同步, 工具增强与约束解码]
categories: [论文速递]
description: "针对渲染程序零退出码仍残留视觉与音画同步缺陷且原始媒体堆积长上下文的问题， VibeVideoAgent 以训练无关的多时钟表示、七个感知原语与分阶段协议把密集检查搬到短暂隔离上下文，在 239 个任务上把 Opus 的 L3 均值从 4.03 提升到 4.43 且同步分项最高涨 0.56，代价是部分合规项回落、中间渲染开销增加且结论依赖自动评审。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34237"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把感知搬出长上下文：代码驱动视频的在制品检查与修复"
paper_digest_original_title: "VibeVideoAgent: Closing the Perceptual Loop for Code-Driven Video Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34237v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34237v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34237v1.pdf"
paper_digest_primary_task: "视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"task","id":"task.av-synchronization","label":"音画同步"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对渲染程序零退出码仍残留视觉与音画同步缺陷且原始媒体堆积长上下文的问题， VibeVideoAgent 以训练无关的多时钟表示、七个感知原语与分阶段协议把密集检查搬到短暂隔离上下文，在 239 个任务上把 Opus 的 L3 均值从 4.03 提升到 4.43 且同步分项最高涨 0.56，代价是部分合规项回落、中间渲染开销增加且结论依赖自动评审。"
paper_digest_reader_sections: [{"heading":"跑通不等于好看：代码驱动视频的三类静默缺陷与上下文代价","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"把感知搬出编码器上下文：三时钟表示与分阶段协议总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"七个原语如何分工：由粗到细探索、带证据门限的核验与双时钟比对","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"239 个任务上的双评审结论：整体感知提升与音画同步的最大收益","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"每个部件是否必要：36 个任务子集上的消融与八任务载荷审计","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"边界、复现前提与选型建议：何时能用、何时要谨慎","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["KlingAI Research"],"name":"Xuanyu Zheng"},{"affiliations":["KlingAI Research"],"name":"Luoyuan Zhang"},{"affiliations":["KlingAI Research"],"name":"Yancheng Long"},{"affiliations":["KlingAI Research"],"name":"Haoyang Xu"},{"affiliations":["KlingAI Research"],"name":"Muxi Diao"},{"affiliations":["KlingAI Research"],"name":"Yuzhe Chen"},{"affiliations":["KlingAI Research"],"name":"Kaiyu Jiang"},{"affiliations":["KlingAI Research"],"name":"Bin Wen"},{"affiliations":["KlingAI Research"],"name":"Tingting Gao"}]
paper_digest_abstract_sha256: "04b92b8d879b357229512e421625479a71723e4a676603f34aa656d243e38858"
paper_digest_sidecars: {"citation.bib":{"sha256":"c4bc85b3aed77db3a3992bd70135d8b8eba85d61a72b2bf8c97299e558056955","url":"/audio-research-portal/client/papers/2026-11-27/2611-34237/citation.bib"},"citation.json":{"sha256":"b762ded267b754db31bad2ece367b5694d274c1c1a122562a75f730adb9e2d30","url":"/audio-research-portal/client/papers/2026-11-27/2611-34237/citation.json"},"citation.ris":{"sha256":"95fa28cf204caab0b122a2061f39917d60317c0a5ccd3839e53bf61a7dc3bd78","url":"/audio-research-portal/client/papers/2026-11-27/2611-34237/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b5c4f13704516e9d6b37e59353416c7bf6acc193bf6a78e9111ef19a133cb807","url":"/audio-research-portal/client/papers/2026-11-27/2611-34237/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d465688cfd97fbec4c8225d51bb72ba508aa5392cda6a3870d6a8cde9db53f8a"
paper_digest_api_reader_plan_sha256: "13caedba568a56014020579cb1a76d9b67e520f1d7d7da7b472d3e8b6be2dba1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "94a3c3f7d0c3df16c7c382c7aebda192af265c234d500cf030f3037131d9e706"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "4384f31f534fad6ac58fd84ed7e853d023e888fd8f15c8a6681b1707c03bf1d3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a2a6ea03b8ef79e102984fd02a68daa5d8ddd6da49f0a7caca95bbad4db7d2b1"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "67881a3b2e6b2fda1c2a9aead9e8cf42cb1b787646e85ed9af33525501ccad05"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把感知搬出长上下文：代码驱动视频的在制品检查与修复

> 英文题目：*[VibeVideoAgent: Closing the Perceptual Loop for Code-Driven Video Generation](https://arxiv.org/abs/2611.34237v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-research-portal/papers/?concept=task.video-generation)；[音视频生成](/audio-research-portal/papers/?concept=task.av-generation) → [音画同步](/audio-research-portal/papers/?concept=task.av-synchronization)
- **研究方法**：[工具增强与约束解码](/audio-research-portal/papers/?concept=method.tool-augmentation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.6/10 | 技术严谨 6.5/10 | 实验充分 7.2/10 | 清晰度 6.6/10 | 影响力 4.0/10 | 开源 6.0/10 | 可复现 8.1/10 | 工程/实践 6.3/10


## 👥 作者与机构

- Xuanyu Zheng：KlingAI Research
- Luoyuan Zhang：KlingAI Research
- Yancheng Long：KlingAI Research
- Haoyang Xu：KlingAI Research
- Muxi Diao：KlingAI Research
- Yuzhe Chen：KlingAI Research
- Kaiyu Jiang：KlingAI Research
- Bin Wen：KlingAI Research
- Tingting Gao：KlingAI Research

## 📌 核心摘要

**问题与瓶颈：** 代码驱动视频生成以自然语言简报与只读素材为输入，要求智能体编写并运行 HTML / Canvas、React / Remotion、Cairo、Manim、FFmpeg 音频管线或 Blender Python 等渲染程序，输出可播放 MP4 与可编辑工程，对象涵盖排版、数据图表、多镜头连续性与声画同步。现有路线存在三处失效，一是运行零退出码无法反映所见内容，重叠标签、偏离主体的相机、错误交互与旁白漂移均不触发运行时错误，二是把参考片、设计静帧、镜头预览与粗剪帧直接拼入编码上下文 Ct 会随渲染次数膨胀并损害长程代码维护，三是仅在终版全分辨率上做事后评审会把早期版式与时序错误拖成全工程重写，且代码编辑会平移切点使单片段复查误判邻镜回归。

**核心思路与方法架构：** 与原生编码智能体相比的实质增量是训练无关的解耦感知环，保留全部渲染选型自由，只把稠密视听观察移出长程上下文。以统一多时钟表示按路径、源时钟区间、影片偏移、模态、采样率与源像素裁剪框抽取有界摘录，先在原生分辨率裁剪再放大至视频 1280 px、静帧 2048 px 以内，短时无状态 VLM 工作器 Φ 或本地探针 Ψ 只回传包含 verdict、摘要与时空模态证据的 Findings ft。以 W0448 的 20.0 秒六段循环故事为例，智能体先渲染单张角色阵容静帧验证最高风险需求，再组装 600 帧粗剪并对可疑区间做 4 fps 诊断与双时钟比对，全程编码器不接收原始帧音频，感知模型固定为 Gemini 3.8 Flash 且不更新任何权重，渲染与修复均为离线分阶段执行。

**关键实验与核心代价：** 在全部 239 个任务的双裁判等权平均分上，Claude Opus 5.5 的 L3 均值从 4.03 提升至 4.43，L2 从 98.87% 提升至 99.35% 但 L1 从 99.92% 回落至 98.59%，GPT-6 Astra 从 4.03 提升至 4.27 且 L1 从 98.93% 提升至 99.51%，Claude Sonnet 5.5 从 3.97 提升至 4.10 但 L1 从 99.18% 回落至 95.75% 且 L2 从 96.36% 回落至 94.61%，三者的 AQ 分别提升 0.56、0.32 与 0.40，TM 与 CL 次之，独立的 Argon 裁判下 Opus 仍有 L2 从 98.36% 至 99.15% 与 L3 从 3.91 至 4.25 的增益。36 任务处理盲分层消融子集上完整系统取得 L2 99.50% 与 L3 4.40，去除 check_requirement、compare_media、probe_media 与分阶段协议分别造成不同维度的回落。代价方面 Opus 平均每任务调用 12.0 次感知并在外部处理 386 帧与 171 s 音频，编码输出约 147.9 k token，八任务审计中回传 Findings 比所感知媒体小约 6.5 倍，论文未提供人工 MOS，仅用 VLM 评分衡量听感。

**适用边界与深读导览：** 结论成立前提是英文与中文简报、标准图像音频视频容器、允许中间预览渲染且感知模型可用的沙箱环境，未覆盖亚帧闪烁、从未检查的区间、密集重叠文字与精细 3D 遮挡排序等失效场景，哈希绑定的前后对比只说明症状变化而不构成程序分支因果证明。深究解耦目标与三时钟映射可查下方方法概述中公式 1 至公式 5 的变量与约束含义，七个原语与分阶段修复逻辑可查原语与协议小节，消融分层构造与八任务载荷审计可查实验结果与附录对应说明。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Kling-Keye/VibeVideoAgent> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）；许可证：MIT

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 跑通不等于好看：代码驱动视频的三类静默缺陷与上下文代价

#### 从简报到可编辑仓库的交付链

代码驱动视频把创作变成写程序：智能体读入自然语言简报与只读素材，在沙箱中编写并运行 HTML / Canvas、 React / Remotion、 Cairo、 Manim、 FFmpeg 音频管线或 Blender Python 等渲染代码，最终同时交付可播放 MP4 与可编辑源码仓库。这种表示对精确排版、数学与数据图表、多镜头连续性、音画同步以及事后细粒度修改给出直接控制，是像素生成模型难以替代的路线。

#### 退出码为零时的 3 类盲区

这条路线的失败很少表现为报错。脚本可以零退出码结束并写出合法 MP4，画面里仍留着主角把背包提在手里而非背上肩头、 3D 相机转离人物、标签相互遮挡、解说比图表慢 2 秒等问题。第二类麻烦是把参考片段、设计静帧与多版粗剪的原始帧和音频直接拼进编码器上下文，历史越堆越长，长期维护代码的能力随之下降。第三类麻烦是只在终片做一次评审，早期版式或时间错误会拖成整片重写，而一次改代码又会挪动切点，让单片段复查漏掉邻镜头的回退。

要看清 3 类盲区如何同时发生，可以对照示意左右两栏的上下文走向与检查时机来读：左侧先走盲目执行再把原始媒体堆进上下文并拖到终片才评审，右侧把密集感知搬到短暂隔离上下文并在预览、装配、修复与交付各阶段都返回紧凑结论，比较两条路径上原始媒体是否进入编码器上下文以及返工发生在何处，注意柱状预算与返工箭头的位置。

[![原论文 Figure 1：Closing the perceptual loop in code-driven video generation.](https://arxiv.org/html/2611.34237v1/fig1_teaser.svg)](https://arxiv.org/html/2611.34237v1/fig1_teaser.svg)

*论文图 1：传统耦合链路与解耦感知回路的对比：左侧盲目执行与终片评审导致返工，右侧短暂感知层在各阶段返回紧凑结论（原论文 Figure 1）。*

左侧上分支直接发货，未经检查的渲染让视觉、空间与同步错误在零退出码后仍然存活，标注为无运行时错误的静默感知缺陷。下分支把原始帧与音频堆进上下文 \(C_t\)，图中以随生产步骤增长的上下文预算柱与终片返工箭头表示这种堆积，只看终片导致整片重写。右侧本工作把无状态视觉语言工作器与本地探针放在短暂感知层，每阶段只向编码器返回带时空定位的 Findings，原始媒体不再进入 \(C_t\)，从而把最小预览到终片交付纳入同一回路，该层对应无状态工作器 Phi 与本地探针 Psi。

#### 耦合回路的 token 膨胀如何量化

耦合回路的代价可以用上下文增长公式来量化，目标是估计检查一次渲染片段时编码器上下文新增多少 token。公式中 \(C_t\) 表示编码器长期推理上下文， \(a_t\) 表示本步代码动作， \(o_t^{\text{coupled}}\) 表示直接拼入的原始观察， \(\Delta t\) 表示本次检查窗口时长， \(f\) 表示采样帧率， \(\tau_v\) 表示每帧视觉 token 成本， \(\tau_a\) 表示每秒音频 token 成本，拼接符号表示历史不断累加。

\[C_{t+1}=C_{t}\oplus a_{t}\oplus o_{t}^{\text{coupled}},\quad|o_{t}^{\text{coupled}}|\approx\Delta t\,\bigl(f\,\tau_{v}+\tau_{a}\bigr),\]

直觉是新增量随窗口时长与帧率线性增长，视觉与音频两项相加，多次预览、多镜头调试与同步检查会在数十轮历史中不断叠加。极端情形是窗口拉长或帧率调高时单次观察就非常庞大，即使单次稀疏采样，多轮回放仍会把千万量级的输入 token 重新计入历史。下游是注意力成本上升与长程代码维护能力下降，这正是后文把原始媒体逐出编码器上下文并只回传紧凑 Findings 的动机。

### 把感知搬出编码器上下文：三时钟表示与分阶段协议总览

#### 与最近基线相比改了什么

相对自带智能体基线，本工作没有改渲染引擎与模型权重，而是改了感知进入编码器的方式。原生链路要么不检查直接发货，要么把原始帧与音频拼进长程上下文并只在终片评审。相对 VideoNexus 只答固定视频问题的只读感知，本工作要处理随编辑变化的多时钟草稿、跨音频与视觉的需求以及跨版本修复验证。为此引入统一多时钟草稿表示、7 个与渲染栈无关的原语与轻量分阶段协议，全部经由 MCP 对外提供，同一套接口服务 WebGPU / Canvas、 React / Remotion、 Cairo 与 Manim、 SVG 游戏仿真以及多轨 TTS / FFmpeg 音频。

#### 1 秒切片如何走完感知流水线

教学例子：取 1 秒 30 fps 的 1920 × 1080 预览切片为例。提取器先在源像素上按给定裁剪框裁剪再缩放到视频最长边 1280 px 或静帧 2048 px，避免直接缩小糊掉小字与手部接触点。按请求帧率、 16 fps 上限、每调用 128 帧预算与源帧率取最小得到有效采样率，模态按 auto 在视听、纯视觉或纯音频之间路由。短暂工作器在隔离上下文中看完有界摘录后只返回包含 verdict、 summary 与时空证据的 Findings，源文件 SHA-256 哈希与不可变摘录一并记入账本，未改动字节的重复查询走任务内缓存。原文未披露中间特征张量形状与通道维度，此处不做补充。

要把上述链路一次看清，可以沿架构示意自上而下读三排：顶排看三时钟媒体规约如何统一资产、静帧、带偏移的局部预览与完整粗剪并绑定源码哈希，中排看 7 个原语如何按探索、核验、比对与探针四问分工并回写可审计账本，底排看分阶段协议如何用计划门限与预览门限卡住生产节奏，再对照箭头上标注的采样率与证据要求理解各分支的汇合点。

[![原论文 Figure 2：Architecture of VibeVideoAgent.](https://arxiv.org/html/2611.34237v1/fig2_architecture.svg)](https://arxiv.org/html/2611.34237v1/fig2_architecture.svg)

*论文图 2：三时钟媒体规约、七原语分工与分阶段协议总览：采样、核验、比对与探针在可审计账本中汇合（原论文 Figure 2）。*

顶排画出源时钟、摘录时钟与影片时间线的三时钟映射，摘录时钟从零开始避免模型对预剪片段幻觉时间戳，裁剪先于缩放的放大路径与源文件哈希一并标注。中排把 7 个原语按由粗到细探索、带引用核验、双时钟比对与确定性探针 4 组展开，每个原语标注默认采样率与返回的 grounded Findings 结构。底排从计划门限经最小预览、粗剪装配、定向修复到验证交付串起账本， Finding 账本记录缺陷到代码修改再到解决的链条，原始媒体始终不进入编码器上下文。

#### 解耦回路只回传什么

解耦回路的计算目标是把有界摘录变成紧凑结论。公式中 \(M_t\) 表示第 t 步渲染产物， \(\mathcal{E}\) 表示按采样规约抽取有界摘录的操作， \(\sigma_t\) 表示本次媒体规约， \(q_t\) 表示聚焦的感知或核验问题， \(\Phi\) 表示短暂隔离的无状态感知工作器， \(f_t\) 表示返回的结构化 Findings，包含 verdict、 summary 与带时间区间、模态与归一化框的证据集合。

\[f_{t}=\Phi\bigl(\mathcal{E}(M_{t},\sigma_{t}),\,q_{t}\bigr),\qquad|f_{t}|\ll|\mathcal{E}(M_{t},\sigma_{t})|,\]

直觉是感知侧看到的是数百帧与上百秒音频，而编码器侧只收到零点几 k 到数 k token 的文本结论，两侧量级差数倍到十余倍，历史不再随渲染次数膨胀。极端情形是摘录很短或查询很窄时 Findings 更小，即使长解释器任务上 1,000 帧与数百秒旁白也只回传少量 JSON。若工作器证据为空或缺失必需模态，确定性校验会把结论压成不确定，迫使智能体补齐双流或放宽窗口后再谈修复，从而驱动下游按阶段推进而非猜测式改代码。

### 七个原语如何分工：由粗到细探索、带证据门限的核验与双时钟比对

#### 三时钟统一寻址与采样上限

生产媒体同时处在不同完备度与时钟上：输入目录里的 45 s 原始片段、 1920 × 1080 人物设定静帧、只对应影片 12.0 s 起的 4 s 场景预览以及 30 s 粗剪。统一媒体规约用路径、源时钟区间、影片偏移、模态、请求帧率、像素裁剪框与源码文件集合七元组一次性讲清 3 套坐标：源时钟区间给在文件自身时间上，静帧取零时长，摘录时钟从零开始，证据区间再确定性映射回源区间与影片时间线。提取器在采样前检查文件稳定并以 SHA-256 冻结不可变摘录，声明的源码文件同样记录哈希以便追踪缺陷到修改。

有效采样率的计算目标是在单次调用预算内取尽可能密但不超限的帧率。公式中 \(f_{\text{req}}\) 表示请求帧率， \(f_{\text{max}}\) 表示 16 fps 上限， \(B_{\text{frames}}\) 表示每调用帧预算， \(e - s\) 表示源时钟摘录时长， \(f_{\text{native}}\) 表示容器原生帧率，取最小保证既不超出预算也不虚构高于源视频的帧。

\[f_{\text{eff}}=\min\!\left(f_{\text{req}},\;f_{\max},\;\frac{B_{\text{frames}}}{e-s},\;f_{\text{native}}\right),\]

直觉是分母为时长时帧预算转化为平均帧率上限，短片段允许高帧率，长片段自动稀释，任何一路超限都会把有效值拉低。极端情形是请求 16 fps 但长摘录受 128 帧预算限制时只能稀疏采样，此时定位原语会自动对至多两个候选窗口做 8 fps 细查来补回切点精度。下游是粗到细探索不必手动算帧，感知工作器总在有界摘录上运行，重复查询命中缓存后不再调用模型。

#### 七原语一览与本地信号探针

4 个设问把 7 个原语串起来：资产或草稿里有什么、是否满足引用需求、是否对齐参考或修好旧缺陷、文件是否可播且信号合规。探索组以 1 fps 做全局索引并声明稀疏漏检不算缺席，定位组在稀疏扫描时自动细查，诊断组默认 4 fps 并可带回至多 6 张证据帧，转写组只上传 Opus 音频。核验组锁定引用原文与必需模态，比对组在两个独立零基时钟上放两段摘录，探针组在本地跑解码、响度、静音与冻帧。下表把角色、 verdict 集合与用途并列，便于对照调用时机。

| Role | Primitive | Verdict set | Primary in-production purpose |
| --- | --- | --- | --- |
| I. Coarse-to-fine exploration | describe_media | observed, uncertain | 1fps global timeline index or still layout overview. |
| I. Coarse-to-fine exploration | locate_event | observed, uncertain | Query search plus automatic 8fps refinement on ≤2 windows. |
| I. Coarse-to-fine exploration | inspect_segment | observed, uncertain | Focused local or cropped Q&A (4fps default) plus ≤6 evidence frames. |
| I. Coarse-to-fine exploration | transcribe_speech | observed, uncertain | Audio-only speech transcription in the original language with timestamps. |
| II. Sourced contract check | check_requirement | pass, fail, uncertain | Tests one sourced claim with enforced multi-stream evidence. |
| III. Dual-clock comparison | compare_media | resolved, persists, changed, unchanged, uncertain | Aligns two independent clocks for reference-to-draft matching or finding_id-anchored revision verification. |
| IV. Signal probing | probe_media | measured JSON | Local stream specifications, strict decode, LUFS loudness, −50dB silence, repeated-frame runs, and RGB loop-seam difference. |

从 verdict 集合能读出分工：探索与转写只报 observed 或 uncertain，不做对错判断；核验报 pass、 fail 或 uncertain，且空证据或缺模态会被确定性后校验压成 uncertain；比对区分参考模式的 changed 与 unchanged 和修复模式的 resolved 与 persists；探针直接返回测得的 JSON 而不经模型调用。组合时先用探索建索引，再用核验卡住引用需求，用比对确认跨时钟修复，最后用探针兜底可播性，管理类接口负责计划上锁、产物冻结与交付提交，全程零模型调用。

#### 模态门限如何把猜测压成不确定

核验的计算目标是判断单条可观察断言是否成立且证据是否齐备。公式中 \(\hat{v}\) 表示模型原始 verdict， \(\mathcal{V}\) 表示证据集合， \(\mathcal{M}_{\text{req}}\) 表示该需求要求的模态子集， \(\mu(\mathcal{V})\) 表示证据实际覆盖的模态集合，越界时间或非法归一化框的证据会先被丢弃再算覆盖，空证据或模态不包含时终值取 uncertain，否则沿用模型判断。

\[v_{\text{final}}=\begin{cases}\texttt{uncertain}&\text{if }\mathcal{V}=\emptyset\text{ or }\mathcal{M}_{\text{req}}\not\subseteq\mu(\mathcal{V}),\\ \hat{v}&\text{otherwise},\end{cases}\]

直觉是把美学闲评挡在门外，只认引用原文与双流证据，例如峰值标记在解说词 peak 出现时可见就同时要求视觉与音频证据，缺一路就不能算通过。极端情形是摘录本身没有音频轨或工作器只引单模态，此时即使模型想给 pass 也会被压成 uncertain，智能体只能补齐双流或放宽窗口而不能猜测式改代码。下游是装配阶段的跨镜头排序、转场、字幕可读性与音画同步都必须在双流齐备时才放行，修复后还需双时钟比对确认邻镜没有回退。

### 239 个任务上的双评审结论：整体感知提升与音画同步的最大收益

#### 评测协议与公平性前提

评测在 VibeVideoBench 的 239 个任务、 12 个中英文生产类别上进行，覆盖数据叙事、论文讲解、动态图形、交互 3D 演示、游戏仿真、叙事动画、参考重建与音乐剪辑等。官方双评审 Gemini 3.8 Flash 与 Gemini 4 Argon 在交付冻结后打分， L1 为技术交付规范符合度， L2 为数千二值评分项通过率，方向均为越高越好， L3 为视觉质量、视觉美学、内容逻辑、时间运动与音频质量或音画同步 5 维 1–5 分及均值。

公平性靠三处对齐保证：每个编码模型跑在原生命令行， Claude Opus 5.5 与 Claude Sonnet 5.5 用 Claude Code， GPT-6 Astra 用 Codex CLI，沙箱均为隔离 16-vCPU Linux 命名空间并预装相同渲染库与只读输入。感知模型固定为 Gemini 3.8 Flash， PreToolUse 钩子拦截直接读二进制媒体、子智能体与外部模型调用，全部感知走 7 个可审计原语。每次交付与原生基线按任务配对，隐藏评分与评审在 MP4 与源码快照经 SHA-256 冻结后才运行。

#### 主结果：3 个编码器模型的 L3 与同步收益

下表摘选 L1、 L2、音频同步 AQ 与 L3 均值四列，保留 3 个编码器各自原生智能体与接入框架后的配对行，双评审取等权平均。阅读时先看同一模型两行的纵向变化，再看 3 个模型之间谁的同步与整体感知涨幅最大，同时注意 L1 与 L2 并非全部同步上涨，这对理解感知反馈的代价很关键。

| Coding backbone | Configuration | L1 Spec ↑ | L2 Rubric ↑ | AQ ↑ | L3 Mean ↑ |
| --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | Native Agent | 99.92 | 98.87 | 3.89 | 4.03 |
| Claude Opus 5.5 | + VibeVideoAgent | 98.59 | 99.35 | 4.45 | 4.43 |
| Claude Sonnet 5.5 | Native Agent | 99.18 | 96.36 | 3.85 | 3.97 |
| Claude Sonnet 5.5 | + VibeVideoAgent | 95.75 | 94.61 | 4.25 | 4.10 |
| GPT-6 Astra | Native Agent | 98.93 | 98.67 | 3.94 | 4.03 |
| GPT-6 Astra | + VibeVideoAgent | 99.51 | 99.15 | 4.26 | 4.27 |

纵向看 3 个模型 L3 均值全部上涨， Opus 从 4.03 到 4.43， Astra 从 4.03 到 4.27， Sonnet 从 3.97 到 4.10，涨幅最大的一维都是 AQ， Opus 达 0.56， Sonnet 为 0.40， Astra 为 0.32，其次为时间运动与内容逻辑。分评审看结论不依赖单一评审， Flash 下 Opus 从 4.14 到 4.60，独立更严的 Argon 下仍从 3.91 到 4.25。合规项并非全胜： Opus L1 从 99.92% 回落到 98.59% 但 L2 从 98.87% 到 99.35%， Astra L1 从 98.93% 到 99.51%， Sonnet L1 与 L2 分别回落到 95.75% 与 94.61%，全部为神经代理自动打分，原文未安排人工 MOS 或 ABX 听测。

#### 上下文解耦与修复漏斗的遥测

下表为每任务遥测，工作器调用与 Findings 及采样帧数只计在短暂感知上下文中，编码器输出 token 单独计量，后三列跟踪分阶段核验与修复收敛。阅读时先看感知侧处理了多少帧与音频，再看编码器侧输出量与预览门限、失败后编辑率、双时钟解决率如何对应不同的编辑粒度。

| Coding backbone | Calls / Findings | Sampled Media (Fr. / Audio) | Coding Out Tok / Task | Preview Gate Checked (%) | Failed Checks Edited (%) | Dual-Clock Resolved (%) |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | 12.0 / 6.2 | 386 / 171 s | 147.9k | 93.9‡ | 77.4 | 58.3 |
| Claude Sonnet 5.5 | 12.2 / 7.8 | 303 / 138 s | 206.8k | 84.3 | 75.3 | 42.5 |
| GPT-6 Astra | 50.6 / 23.1 | 1,297 / 660 s | 179.3k | 100.0 | 84.2 | 65.6 |

感知侧每任务处理数百帧与上百秒音频， Opus 为 386 帧与 171 s， Sonnet 为 303 帧与 138 s， Astra 达 1,297 帧与 660 s，全部在编码器历史之外，账本中 Findings 平均仅 0.3 k 到 1.4 k token。行为上 Opus 检查较克制且补丁小，编码输出最少而双时钟解决率居中， Astra 调用最频且以多版本小 diff 推进，解决率最高， Sonnet 输出最多但常整文件重写，解决率最低。 Opus 预览门限 93.9% 为有 Findings 轨迹口径，全量为 57.7%，计划门限 3 模型均为 100.0%，原文据此提出只有保持局部编辑时合规与感知才可同涨。

### 每个部件是否必要：36 个任务子集上的消融与八任务载荷审计

#### 处理盲化的 36 任务分层子集如何构造

直接在全量上随机消融会被天花板效应压住差异，超过八成任务在原生 Opus 下已达 L2 100%，而按框架收益选任务又会引入事后选择与均值回归偏倚。为此仅用原生基线诊断与公开任务元数据，在运行任何消融前确定性抽出 36 个任务，占基准 15%，分四层：评分瓶颈 12 个、参考资产 8 个、音画与时间瓶颈 10 个、中位基线护栏 6 个，兼顾压力测试与不破坏已合规草稿的验证。

#### 去掉任一原语或分阶段协议会发生什么

下表摘选 L1、 L2、 AQ 与 L3 均值四列，保留原生基线、去掉单个原语的三行与去掉分阶段协议的工具组以及完整系统行，双评审取平均。阅读时先看完整系统是否为 L2 与各 L3 维度最高，再看去掉每一项时哪一列掉得最多，以此定位各部件的归因，同时注意该子集基线与全量基线不同，不可直接跨表相减。

| Ablation variant | L1 Spec ↑ | L2 Rubric ↑ | AQ ↑ | L3 Mean ↑ |
| --- | --- | --- | --- | --- |
| Native coding agent (no perception tools) | 100.00 | 96.06 | 3.80 | 3.84 |
| VibeVideoAgent w/o check_requirement | 98.43 | 98.35 | 4.33 | 4.29 |
| VibeVideoAgent w/o compare_media | 97.38 | 99.11 | 4.28 | 4.30 |
| VibeVideoAgent w/o probe_media | 95.81 | 99.03 | 4.36 | 4.33 |
| Tools-Only (w/o plan gate & preview gate) | 98.95 | 99.03 | 4.34 | 4.32 |
| VibeVideoAgent (Full) | 98.43 | 99.50 | 4.41 | 4.40 |

完整系统在该子集上 L2 达 99.50%， AQ 达 4.41 与 L3 均值达 4.40，为 L2、 AQ 与 L3 Mean 三列最高，而 L1 仍以 Native 基线 100.00 最高，相对原生基线 L2 高 3.44 个百分点， L3 高 0.56。去掉引用核验后 L2 掉 1.15 个百分点且内容逻辑与视觉美学各掉 0.15，去掉双时钟比对后 L3 到 4.30 且失败后编辑率从 94.0% 降到 78.3%，去掉信号探针后 L1 掉 2.62 个百分点最多，去掉计划与预览门限后 L2 掉 0.47 个百分点且预览依从从 97.2% 到 0.0%。原文未报告方差或置信区间，也未安排人工听测，结论依赖自动评审。

#### 跨渲染栈的端到端实例与载荷压缩

要把消融数字落到具体行为，可以沿端到端实例自左向右读四步：单张阵容静帧先验最高风险的人物一致性，装配阶段在零退出码的初版中抓静默摆位错误，定向改代码后用双时钟比对确认跨移时钟的修复，最后用本地探针兜底可播与循环缝，再看同一套原语如何在交互 3D、长旁白讲解与参考重建 3 条栈上复用而不加适配器。

[![原论文 Figure 4：End-to-end authoring with VibeVideoAgent.](https://arxiv.org/html/2611.34237v1/fig4_showcase.png)](https://arxiv.org/html/2611.34237v1/fig4_showcase.png)

*论文图 4：W0448 端到端实例与跨栈复用：阵容静帧先验、装配抓错、双时钟确认修复与本地探针收尾（原论文 Figure 4）。*

上半为任务 W0448 的 20.0 s 无词 6 段人生循环， 1920 × 1080 30 fps，红色按钮首尾成环。第一步阵容静帧验证跨年龄人物一致性并通过，第二步初版 600 帧中 Youth 在 4.18 s 处背包提手、 Family 在 9.90 s 处无合盖且孩童已在门内两处失败，第三步改 render.py 后在 4.68 s 处确认背在肩上并解决 Family 双区间，第四步探针解码通过且首尾 RGB 缝确认循环，感知载荷 32.1k 对 5.8k 约 5.5 倍压缩。下半同一套原语服务 W0154 四系统预演、 PA02 1,000 帧长讲解 12.0 倍压缩以及 R0009 参考重建 L3 从 3.60 到 4.80，编码器上下文始终零帧。

### 边界、复现前提与选型建议：何时能用、何时要谨慎

感知侧只看有界摘录与不超过 16 fps 的采样，即使有 8 fps 细查与全流解码加持，未被检查的窗口与亚帧毛刺仍可能漏网。交付检查只认证文件可播与规格合规，不认证语义缺陷为零。哈希绑定的前后对比只能说明渲染症状在声明修改后发生变化，不是程序分支上的因果证明，若跳过邻拍检查，共享动画助手的改动会影响未被观察的节拍。外部感知模型对密集重叠文字与精细 3D 遮挡仍可能误读，除非主动要求裁剪或证据帧。

未验证条件集中在评审与成本两侧。质量侧全部为神经代理自动打分， Flash 既做感知又做评审之一，虽有更严的 Argon 独立评审交叉，但原文未安排人工 MOS、 CMOS 或 ABX 及听众数与置信区间。成本侧中间渲染增加算力与延迟，原文披露了调用数、采样帧数与 token 量，但未披露端到端延迟、 TTFA、 RTF 或显存占用，商用接口行为随版本变化，结论迁移到开源感知模型与专用 4D 预演引擎仍待验证。

复现需分清三件事。代码侧作者仓库当前可用， README 部分覆盖安装说明，可据此搭建 MCP 服务与门限钩子。权重侧无训练阶段，无需下载权重，但需准备 3 个编码模型与 Gemini 3.8 Flash 的商用访问与配额，行为可能随提供方更新漂移。系统侧需隔离 Linux 命名空间、相同渲染库与只读输入目录，以及官方评审与隐藏评分在冻结后运行的隔离，附录 B 到 H 给出工具契约、校验规则、工作流指引、消融子集构造、八任务载荷审计与 W0448 完整轨迹，可作为核对清单。

工程选型上，风险最高的决定先用最小渲染验证再铺量，失败后先细化窗口、帧率、裁剪或模态而非直接改代码，修复后用双时钟比对确认并检查邻镜，最后对编码后 MP4 跑解码、响度、静音与冻帧探针再交付。编辑粒度是关键：保持单函数小补丁时合规与感知可同涨，整文件重写易丢静态细节。原文未提供独立试听页，核对现象时可对照附录轨迹中背包、合盖与循环缝等记录与基线差异，不做超出证据的听感判断。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：转写抽取 64 kbps Opus 音频并返回带时间戳逐字稿，探针报告 LUFS 综合响度、响度范围与真峰值，静音为低于 -50 dB 且持续至少 0.25 s 的区间，另含全流解码、冻帧与首尾帧 RGB 缝差，采样率与声道数原文未披露
- **训练与评测数据**：VibeVideoBench 239 个任务、12 个中英文生产类别，含数据叙事、论文讲解、动态图形、交互 3D 演示、游戏仿真、叙事动画、参考重建与音乐剪辑，输入为自然语言简报与只读素材，交付为可播放 MP4 与可编辑源码仓库，消融用 36 个任务确定性分层子集与 8 个任务载荷审计集
- **算力与训练耗时**：隔离 16-vCPU Linux 命名空间，原生命令行对 Claude 模型用 Claude Code，对 GPT-6 Astra 用 Codex CLI，感知固定用 Gemini 3.8 Flash，GPU 型号与数量原文未披露，无训练阶段故无训练步数与耗时
- **核心超参数与配置**：感知上限 16 fps，每调用帧预算 128 帧，探索 1 fps 索引，定位稀疏时至多 2 窗口 8 fps 细查，诊断 4 fps 且至多 6 张证据帧，核验默认 2 fps，转写只传 64 kbps Opus 音频，静音门限 -50 dB 且最短 0.25 s，裁剪先于缩放至视频 1280 px 与静帧 2048 px
- **推理速度与部署开销**：每任务工作器调用 Opus 12.0 次、Sonnet 12.2 次、Astra 50.6 次，采样帧数分别为 386、303 与 1,297，音频分别为 171 s、138 s 与 660 s，编码器输出分别为 147.9k、206.8k 与 179.3k token，8 任务审计平均感知 35.8k 对回传 5.5k 约 6.5 倍压缩，RTF 与延迟原文未披露
- **开源产物与协议状态**：作者代码仓库当前可用，README 部分覆盖安装说明，未声明权重下载因框架无训练且依赖商用模型访问，数据集与评审脚本公开状态原文未披露，系统运行另需渲染库与隔离沙箱及评审冻结流程
- **附录与补充材料要点**：附录给出七原语 verdict 集合与默认设置、MCP 工具契约与确定性校验五规则、跨栈工作流指引与运行时隔离、36 任务子集四层构造、8 任务载荷与双评审审计以及 W0448 从预览到交付的完整记录轨迹

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34237v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在全部239任务上跨三编码主干对比原生智能体，并以独立Argon裁判复核L2与L3增益。

- 核心优势：在36任务处理盲分层子集上直接消融各原语与分阶段协议，分别定位不同维度的性能回落。

- 核心优势：训练无关解耦感知环经多时钟表示与SHA固化实现跨渲染引擎复用并回传紧凑Findings。

- 主要短板：全部听感AQ结论来自VLM裁判，未提供人工MOS/CMOS/ABX且未报告置信区间与显著性检验。

- 主要短板：感知模型兼任裁判之一存在自利高估风险，Sonnet在感知反馈下出现L1与L2明显回落。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
