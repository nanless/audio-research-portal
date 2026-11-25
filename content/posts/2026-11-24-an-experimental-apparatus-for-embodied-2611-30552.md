---
title: "An Experimental Apparatus for Embodied Conversational AI: A Simple Implementation Coupling a Commercial Voice AI with an Avatar"
date: 2026-11-24
draft: false
tags: [语音驱动人像视频生成, 语音交互, 信号处理, 软件工具]
categories: [论文速递]
description: "针对无法只改变商用语音 AI 身体呈现的实验困境，论文以播放音频为耦合点实现浏览器与桌面两种捕获并经低层特征生成与渲染无关的化身状态，已确认同一套代码可驱动 ChatGPT 与 Grok 而效果尚未评估，代价是内容成为事后变量只能估计总效应且结果绑定服务版本。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30552"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "只换身体不动 AI：音频输出耦合的具身对话实验装置解读"
paper_digest_original_title: "An Experimental Apparatus for Embodied Conversational AI: A Simple Implementation Coupling a Commercial Voice AI with an Avatar"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30552v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30552v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30552v1.pdf"
paper_digest_primary_task: "语音驱动人像视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.talking-portrait","label":"语音驱动人像视频生成"},{"facet":"task","id":"task.speech-interaction","label":"语音交互"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"artifact","id":"artifact.software","label":"软件工具"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.5
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对无法只改变商用语音 AI 身体呈现的实验困境，论文以播放音频为耦合点实现浏览器与桌面两种捕获并经低层特征生成与渲染无关的化身状态，已确认同一套代码可驱动 ChatGPT 与 Grok 而效果尚未评估，代价是内容成为事后变量只能估计总效应且结果绑定服务版本。"
paper_digest_reader_sections: [{"heading":"商用语音 AI 原样可用时为何仍缺只换身体的实验手段","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Deskmate 以播放音频为耦合点的双实现总体架构","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"只用每帧低层特征生成说话状态与表情的单向流水线","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三种渲染后端与在线实验服务器版的替换与部署逻辑","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"尚未评估化身效果下已确认的运行范围与随机化估计逻辑","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"隐私边界未验证条件与复现核对前提下的选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hiroshi Hamada"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lin Gu"}]
paper_digest_abstract_sha256: "df2c1e2c3539b133409b90ffbefef5da8c3ea18f5e2881ca85d544dba8344ece"
paper_digest_sidecars: {"citation.bib":{"sha256":"09f4b2ac8977d71cd92779530eeb7834af83cf9167f915b7ac9d8000050763f6","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30552/citation.bib"},"citation.json":{"sha256":"e54fb26929b9df28b643b8a9973266dd4b576edec3eec9f2cf8235813e2b260d","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30552/citation.json"},"citation.ris":{"sha256":"b0023365d609e6c23cc4d3614f182ab21c6bb28b836ee31ef385b4d04894de8c","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30552/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"07779d05ab113952a93929e752b4210744fd0023f3deb3b989433b450836cd11","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30552/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "f2a12e42e53e3ccb2376d0eb5be5f41514424f8a469f50b6e377decc6e26c682"
paper_digest_api_reader_plan_sha256: "a80ae1f7e0eb95bbc5426406831080b64a7784d2427852c272d6ca2bd9937770"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "91021a44e4b918c8b0152381c88e5e90c175d52996ee480c974a3c82e400d341"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "faf987e20cfd7c5c4cd564c092481260fed70052fff2b295ec85852699e61f49"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bb9fd1f86ee55932dca29032472fe44d7eb398205e466352e6c3698225bb7210"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ab1e06baef5d2420c964409309c648af7ba9245f843152e229690096b179123e"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 只换身体不动 AI：音频输出耦合的具身对话实验装置解读

> 英文题目：*[An Experimental Apparatus for Embodied Conversational AI: A Simple Implementation Coupling a Commercial Voice AI with an Avatar](https://arxiv.org/abs/2611.30552v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频驱动视频生成](/audio-paper-digest-blog/papers/?concept=task.audio-driven-video) → [语音驱动人像视频生成](/audio-paper-digest-blog/papers/?concept=task.talking-portrait)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **研究产物**：[软件工具](/audio-paper-digest-blog/papers/?concept=artifact.software)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.5/10** | 创新 6.1/10 | 技术严谨 7.0/10 | 实验充分 4.6/10 | 清晰度 6.7/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 5.0/10 | 工程/实践 5.2/10


## 👥 作者与机构

- Hiroshi Hamada：机构信息未能在本次解析中与作者逐人可靠绑定
- Lin Gu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 研究处理日常使用的商用语音 AI 会话，输入是浏览器标签页或内嵌框架播放的 AI 语音输出，期望输出是与之同步的化身口型、表情、视线与身体动作，以检验具身呈现如何改变感知、判断与行为。自行搭建对话系统可控制内容与呈现，但性能体验偏离实际商用服务，直接使用商用服务又无法只操纵呈现的身体。文本平台 LEXI 与可操纵任务框架只处理研究者配置的文本智能体，开发者语音 API 需自建界面、轮次切分、打断处理与声音设置并按用量付费，已有音频驱动 VRM 化身做法未按随机实验仪器组织条件流程。根本因果瓶颈在于内容随呈现改变成为处理后变量，视觉具身叠加于语音交互的效应须隔离身体本身作用，而语音拟人化与心理社会变化亦需分开检验。

**核心思路与方法架构：** 核心直觉是把 AI 播放的音频输出作为与外部系统耦合的不变触点，对话界面、声音与回复生成全程保持原样，只改变屏幕前方的呈现。浏览器实现经由屏幕共享选择标签页并用 getDisplayMedia 获取选项卡音频，桌面实现用 Electron 内嵌框架指定来源并捕获该框架音频，两路都在捕获后立即停止视频轨而只分析音频轨。分析在浏览器本地用 AudioContext 与 AnalyserNode 逐帧计算短窗数值特征，包括 120 Hz 至 4200 Hz 语音带平均幅度、均方根 (RMS)、峰值、瞬态、幅度包络、高频带平均幅度与频谱质心，语音检测将音频电平与静音期间持续估计的噪声基自适应阈值比较。比较结果经平滑生成是否说话、音量、能量、强度、口型与表情等 7 个值的化身状态，表情仅用中性、开心、思考、惊讶与担忧 5 种启发式节奏可视化而不分析语义，视线与眨眼独立生成。VRM、Live2D 与纯 CSS 三后端消费同一状态而上游不知后端类型，全程无训练、无模型更新、无麦克风调用、无识别转写与无自动存储，URL 查询串优先于存储值，服务器版本另加随机分配与在线流程。

**关键实验与核心代价：** 原文未提供可核对的关键定量结果，未报告 WER (词错误率) / MOS (平均意见分) / UTMOS 等主客观音频指标对比与消融数值，本文属免训练仪器工作而非效果榜单比较。在标签页音频耦合设置下同一套浏览器代码驱动 ChatGPT 与 Grok 语音对话的兼容验证中，最强可比对照为 ChatGPT 条件对 Grok 条件，原文验证指标为无需改代码的驱动成功，两侧结果均为驱动成功、方向持平，共覆盖 2 种服务而代码改动为 0。Chrome 侧边栏运行的 Gemini 语音不属于标签页而需改用整屏共享加系统音频选项，此时会混入通知音与其他应用声音并失去限定观察范围的性质，但仍不开麦克风且分析仍在本地完成。主要代价在部署与可比性一侧，研究者服务器只需提供静态文件并接收记录而无需 GPU，也不产生随量计费的额外费用，但要求参与者自备桌面 Chromium 浏览器、扬声器或耳机与服务账户，对话长度须设计在限额内。

**适用边界与深读导览：** 结论仅在记录研究时间与服务版本、固定呈现条件随机分配、且将内容变化视为总效应一部分时成立，若提供方更新声音性格与回复、参与者因呈现改变发言进而改变 AI 回复，直接效应便无法从总效应中分离。管线在桌面 Chromium 加扬声器或耳机的标签页音频耦合下最可靠，在整屏共享加系统音频、移动端浏览器、不稳定网络或需精确音素口型、语义表情、用户语音评估与对话内容留存分析时退化或不适用，服务器版本亦是无认证与限流且同一参与者编号只接受首次提交的原型。Deskmate 本身不记录对话，所需日志须经同意从商用服务获取，加入趣味性等处理后协变量会破坏随机化可比性。若想深究音频耦合与服务无关性可读第 2 节，随机条件分配与总效应论证可读第 3 节，管线、状态定义与服务器流程可读第 4 节。

## 🔗 开源与复现资源

- 论文所列链接：<https://hiroshihamada.github.io/deskmate-web-beta/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/xikhar/persona> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/arpahls/avatar> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 商用语音 AI 原样可用时为何仍缺只换身体的实验手段

#### 从日常关系现象到未分离的身体效应

生成式 AI 进入日常生活后，人与机器的边界正在变薄。论文以近 900 台 AIBO 机器狗在寺院举行供养仪式、在 Okayama 举办与 ChatGPT 生成人格的婚礼、Grok 在 2025 年 7 月向付费用户提供 3D 动画同伴、Razer 在 2026 年 1 月展示 5.5 英寸 3D 全息桌伴为例，说明人们已开始把 AI 当作关系对象。这种变化提出实证问题，身体呈现本身是否改变了感知与行为，而不只是对话内容的作用。

既有关系研究显示了心理意义，但没有分离身体效应。对 18 人的 Replika 友谊访谈描述了从好奇到情感与社会价值关系的发展，混合方法研究把拟人感知与真实感经由互动强度与依恋相连，对 54,861 篇帖子与 1,452 名参与者七项问卷的自然实验则记录了功能移除与模型更新后的失落与恢复诉求。这些工作研究已形成关系的用户或产品变化反应，没有随机操纵有无身体。语言学习综述同样把具身与社会临场列为设计维度，但多为学习结果与焦虑讨论。

#### 现成平台为何动不了商用语音的身体

声音与身体的作用需要分开检验。2026 年 7 月发布的 GPT-Live 采用全双工设计同时处理音频输入与输出并应对插话与后通道反应，声音是判断对方有心智的重要线索，拟人化理论整理了对非人行动者归因心智状态的条件。但一项为期四周比较文本与两种语音模式的随机对照试验发现，模式对孤独感与与真人社交均无显著影响。声音更像人并不等于感知行为与心理社会结果随之改变，给语音交互加上视觉具身会有何效应，只能靠实验回答。

可用的实验平台并不直接支持这种操纵。LEXI 把智能体配置、被试注册、问卷与日志收集放在一处，Mouakher 等人可在对话中操纵任务框架、利害与时间压力，但两者都聚焦研究者配置的基于文本的智能体，而非操纵现成商用语音 AI 的视觉呈现。LEXI 称其无身体智能体可作为具身效应实验的控制条件，开源的 Persona 与 AVATAR 已能用语音 AI 播放的音频驱动 VRM 化身。基于开发者 API 自建语音系统虽能控制语音与内容，却要自行实现界面、轮次切分、打断处理与音色设置并支付按量费用。

论文因此把输入输出定义得很窄。输入是商用语音 AI 在官方界面播放的声音加用户一次性的标签页音频共享许可，输出是与渲染技术无关的化身状态及相应的嘴形表情与身体动作，商用服务的界面、声音与回复生成全都不动。具身对话智能体 (embodied conversational agent, ECA) 在此指带身体的对话 AI，自建研究系统性能与体验不同于人们日常使用的服务，直接用商用服务又没有只换身体的手段。Deskmate 的定位就是只改变呈现在眼前的身体，把内容与声音留给原来的服务，从而支撑随机化实验。

### Deskmate 以播放音频为耦合点的双实现总体架构

Deskmate 的三点贡献围绕耦合点、状态抽象与实验操纵展开。第一是以播放的音频输出为耦合点实现两种捕获，不改动现有服务也不需要开发者 API，浏览器实现以同一套代码驱动了两种不同服务。第二是把音频低层特征转换为与渲染技术无关的化身状态，同一状态可由 3D、2D 与 CSS 3 种后端绘制。第三是只操纵化身呈现而保持商用服务的界面、音频与回复生成不变，通过切换呈现条件用于随机化实验。论文描述的是截至 2026 年 11 月的全功能版本，已发布演示只包含其中一部分。

#### 标签页捕获与内嵌框架捕获的分工

浏览器实现通过屏幕共享选定标签页捕获其音频，称为标签页音频耦合，桌面实现基于 Electron 把对话服务页面作为内嵌框架打开并捕获该框架播放的音频，Electron 是结合 Chromium 与 Node.js 的应用平台，界面用 HTML、CSS 与 JavaScript 构建但作为独立窗口运行。两种实现都在捕获时立即停止视频轨道只分析音频轨道，捕获之后的特征计算、语音检测与状态生成完全共用。浏览器实现每次需选择标签页，桌面实现指定来源后只需一键启动，前者凭证留在用户浏览器，后者登录态在应用存储中独立维护。

两种实现覆盖了便捷性与通用性的不同取舍，下表逐行对照了音频来源、启动方式、观察范围、服务运行位置、凭证位置、是否采集麦克风与是否自动保存会话。阅读时先看观察范围与凭证位置两行，前者决定了实验者能听到什么，后者决定了被试需要在哪里登录，这两点直接影响在线实验的招募与指导语设计。

|  | Browser implementation | Desktop implementation |
| --- | --- | --- |
| Audio source | tab chosen by the user | embedded frame |
| Starting the session | choose a tab each time | one button |
| Scope of observation | the chosen tab* | the embedded frame |
| Where the service runs | the user’s browser | inside the application |
| Where credentials live | the user’s browser | the application’s storage |
| Microphone captured | no | no |
| Conversation stored automatically | no (manual saving available) | no (manual saving available) |

对照显示两者都不采集麦克风，也都不自动保存会话记录，仅支持手动保存，隐私暴露面相同。差异在于浏览器实现不含任何依赖特定服务名称、API、DOM 结构或内部协议的代码，只要是播放音频的兼容浏览器标签页即可，通用性属于方法共有而免服务特定代码的独立性只属于浏览器实现。桌面实现当前只配置了单一服务，要支持新服务需逐个写下其网址、登录经过的认证站点与允许使用麦克风等特性的站点，可预先注册多个但仍限于已注册范围。选择整屏共享并纳入系统音频后虽能驱动 Gemini 侧板栏语音，却会混入通知音与其他应用声音并失去限定标签页的性质。

#### 同一 AI 背后的处理组与控制组

把 Deskmate 理解为实验仪器时，关键是背后是同一个 AI，眼前屏幕不同。处理组屏幕显示随 AI 声音活动的化身，控制组屏幕不显示化身，被试被随机分配到其中一块屏幕，对话内容本身不被改动。这种同步指基于音频低层特征的嘴部运动，而非音素识别。下图用左右箭头同时表达了语音对话往返与背后同一 AI 的关系，可先看中间两块屏幕的差异再看左侧机柜与右侧人形的对应分组。

![原论文 Figure 1：Concept of Deskmate as an experimental instrument.](/audio-paper-digest-blog/images/papers/2611.30552/figure-1-10a4ff5a44eac9fb.png)

*论文图 1：随机化实验构想：同一语音 AI 在后作答，处理组显示随声活动的化身，控制组无化身（原论文 Figure 1）。*

图中左侧机柜标注为官方服务或 API 的 Voice AI，下方注明两种条件共用同一 AI，中间上方处理组屏幕画出张嘴人物与表示发声的弧线并标出随 AI 声音活动，下方控制组屏幕空白并标出无化身，右侧两个人形标注为被随机分配到一块屏幕的被试，中间双向箭头均标为语音对话。底部灰条强调同一 AI 在两块屏幕后作答，只有眼前屏幕不同，对话未被改动。图中同时说明背后 AI 可以是原样使用的官方服务，也可以是经由开发者 API 到达的模型，只要播放的声音可用，Deskmate 就只用播放的声音驱动化身。

浏览器实现的系统架构把商用服务与本地分析严格分开，左侧是运行官方网页客户端的语音对话服务，中间灰框是本地运行、无需 API 的 Deskmate，右侧是渲染与学习支持出口。中间自上而下是标签页音频捕获、特征提取与状态生成三块绿色框，左侧另有用户许可标签页音频共享且不捕获麦克风的灰框，虚线 consent 箭头指向特征提取，右下角注明虚线为可选。下图适合沿标签页音频进入、状态向右分叉的路径阅读，注意实线与虚线的分工差异。

![原论文 Figure 2：Architecture of the browser implementation of Deskmate.](/audio-paper-digest-blog/images/papers/2611.30552/figure-2-fcc2ea85cd3fa919.png)

> **图片来源：** 原论文 PDF 第 7 页（含图 2）

*论文图 2：浏览器实现架构：官方客户端标签页音频进入本地三级处理再分叉到渲染与可选支持（原论文 Figure 2）。*

图中标签页音频经 getDisplayMedia 进入捕获框，特征框标注 RMS、voice band 与 peak，状态框标注 speech、mouth 与 expression，三者之间有向下的实心三角连接。状态向右分出一条实线到红色边框的渲染层，标注嘴形表情、视线身体与 VRM、Live2D、CSS 可互换，另有两条虚线分别指向橙色虚框的连续性支持与练习日志，前者为经验值等级连击与登录记录，后者为按日期保存的短语与流程。架构含义是音频分析与渲染解耦，上游不知下游运行哪个后端，连续性支持与练习日志均为可选，不影响主干从捕获到状态的单向流动。

### 只用每帧低层特征生成说话状态与表情的单向流水线

#### 每帧算什么与如何判定说话

音频分析使用 Web Audio API 的 AudioContext 与 AnalyserNode，低层特征指短窗内波形幅度与变化的数值描述，而非词语含义。实现把 120 Hz 到 4200 Hz 之间频率分量幅度的均值定为语音带平均幅度，RMS 是短窗内波形幅度的均方根，peak 是窗内最大幅度，两窗 RMS 相近时含单个大幅值样本的一窗 peak 更高，瞬态表示幅度突然上升的量。每帧还计算高频带平均幅度与频谱质心，采样是逐帧进行。原文未披露采样率、帧长步长、FFT 点数与特征向量维度，因此无法列出 1 秒输入的具体张量形状，只能按阶段定性追踪，凡未给出的维度 1 律视为未披露而不补造。

语音检测把音频电平与跟随噪声水平的自适应阈值比较，噪声基底在静音期间被持续估计。阈值与静音判断构成闭环，检测为静音的帧用于更新噪声估计，更新后的阈值又送回比较器。嘴部张开度由音频特征计算并做平滑避免跳变，再作为化身状态的一部分交给渲染层，各后端再映射为各自的嘴形表示。表情取 neutral、happy、thinking、surprise 与 concerned 5 种，不分析语义，只是用启发式把对话节奏可视化，视线与眨眼则独立于音频单独生成。

#### 七元状态与只向前流动的约束

化身状态是七元组，依次为是否正在说话、音量、能量、强度、嘴部张开度、嘴形与表情，其中不含任何渲染技术项。渲染后端除该元组外只接收独立生成的视线与眨眼，上游音频分析不知下游运行哪个后端，3 个后端虽资源、坐标系与渲染参数不同，但消费同一状态而无需改动音频分析。教学例子：可设想 AI 说出一句短促的嗯，RMS 与语音带幅度抬升使检测越过阈值，是否说话置一，嘴部张开度随包络起伏，表情按节奏在 neutral 与 thinking 间切换，例子仅为帮助理解流程，不代表原文给出过该数值。

下图把从标签页音频到化身控制与连续性支持的单向流水线画成左右两路，上路经特征、语音检测、化身状态到渲染后端，下路经学习度量到连续性支持。顶部灰框强调无语音识别与转写，只有每帧低层特征被转为嘴与身体运动。阅读时先沿上路实线看平滑与状态映射，再看中部静音与阈值的回路与下路记录与奖励的分支，凡未向后传递的量都不会到达更下游。

![原论文 Figure 5：The pipeline from audio analysis to avatar control and continuity support.](/audio-paper-digest-blog/images/papers/2611.30552/figure-5-4418f3c0904a962f.png)

> **图片来源：** 原论文 PDF 第 10 页（含图 5）

*论文图 5：单向流水线：每帧低层特征经自适应阈值到化身状态与渲染及学习度量分支（原论文 Figure 5）。*

图中左蓝框为每帧采样的标签页音频服务音频输出，箭头指向绿色特征框，内写 RMS、peak、transient 与 voice、high band、centroid，虚线从顶部说明框连入该框。再向右是橙色语音检测框，内写与自适应阈值比较，下方橙框为静音期间估计的噪声基底，两者间有 silence 下行与 threshold 上行箭头。检测框经标注 smoothing 的横线指向粉色化身状态框，内写 speaking、mouthOpen、voiceShape 与 expression，再经 state mapping 纵箭头指向红色渲染后端框，内写映射状态到 3D、2D 与 CSS。检测框另经标注 record 的纵线指向绿色学习度量框，内写会话与说话时长及分段计数，再经 reward 横箭头指向橙色连续性支持框，内写 XP、level 与 streak。

### 三种渲染后端与在线实验服务器版的替换与部署逻辑

#### 同一状态的 3 种画法

3 个后端属于不同技术家族，但设计目标是互换而不动上游。下表逐行给出设置名、实现组合、所需素材与适用情形，阅读时重点比较素材列，第三行 CSS 只需 CSS 本身而无需外部模型资源，这一行决定了无素材可用或许可受限时的保底方案。切换通过舞台角落控件完成并存于浏览器，网址查询串中的设置优先于存储值并可单链指定后端，当前实现切换会重载页面。

| Setting | Implementation | Asset required | Intended use |
| --- | --- | --- | --- |
| vrm | three.js + three-vrm | VRM model | Where a 3D idiom is wanted |
| live2d | PixiJS + Cubism | Cubism model | Where a 2D idiom is wanted |
| css | CSS only | none | Where no external resource is available |

对照表明 vrm 以 three.js 加 three-vrm 绘制 VRM 模型，适合需要 3D 表达的场景，live2d 以 PixiJS 加 Cubism 绘制 Cubism 模型，适合需要 2D 表达的场景，css 仅用 CSS 而无需外部资源，适合无外部资源可用的场景。3D 后端表达视线与身体朝向，2D 后端可利用现有 Cubism 素材，CSS 后端无需外部模型资产。三者差异只在渲染侧，从标签页捕获到状态生成的路径完全共用。

#### 演示屏布局与服务器版的在线流程

浏览器客户端由 public/ 下的 index.html、styles.css 与 app.js 组成，屏幕分舞台区与侧栏，侧栏可放等级与连续使用天数、话题建议、已存短语复习与短语保存等学习支持面板，各面板作用在原文有说明。本地 Node.js 服务器即 server.mjs 提供静态文件、化身模型文件与向 useful_phrases.md 追加用户要求保存文本的接口，音频捕获、特征计算、语音检测与状态生成都在浏览器内完成，音频不发往服务器。本地服务器的存在只是为了从浏览器向文件追加文本并同源加载模型文件，运行要求 Node.js 20 或更高，运行时无 npm 依赖，渲染所需库由浏览器从 CDN 加载。

已发布演示与全功能版本不同，演示作为静态页面无服务器，省略依赖服务器的短语保存与复习面板以及 2D 后端，并把 3D 模型固定为单个。下图是英文显示的发布演示屏幕，右侧是大面积舞台区，左侧是折叠的入门指南，日常使用时左侧会被学习支持面板取代。观察时先看左右分区比例，再看右上 Deskmate 标题与 Start avatar 按钮与人物朝向，人物略侧脸是因为待机转头。

[![原论文 Figure 3：The screen of the published demo, displayed in English.](https://arxiv.org/html/2611.30552v1/figures/sc20261103.png)](https://arxiv.org/html/2611.30552v1/figures/sc20261103.png)

*论文图 3：英文发布演示屏：左侧折叠指南窄栏与右侧 3D 后端大舞台及启动按钮（原论文 Figure 3）。*

图中左侧深色窄栏顶部为 How to start GUIDE 与 Japanese 语言切换及折叠箭头，下方大面积留黑表示指南已折叠。右侧白色大圆内是 3D 后端绘制的短发人物，浅紫色短发、绿色眼睛、黑色高领上衣，头部略向画面左侧偏转，右上角为 Deskmate 标题与黄色 Start avatar 按钮。布局含义是演示把舞台让出更大空间，面板可按用途替换，实验用服务器版则进一步去掉经验值、短语存取与模型切换器，换成实验指导语与问卷，化身只在对话阶段出现，前测连接检查与后测均隐藏以免处理泄露到基线与作答。

服务器版不是第三种耦合方式，而是把浏览器实现部署到研究者服务器以做在线实验，捕获到渲染的路径不变仍在被试浏览器内，所加只有条件分配、研究流程与记录接收三件事。实现上 experiment/server.mjs 包裹普通服务器的处理并增加分配与提交接收，研究者在自有服务器上经 HTTPS 提供服务，因为标签页音频共享只在安全上下文生效。每位被试收到含被试 ID 的链接，可直接使用招募服务发放的 ID，服务器从当前分配人数最少的条件中随机挑选并对同一 ID 恒返同一条件，条件名既不在网址也不在屏幕出现。

被试经历知情同意、前问卷、连接检查、对话与后问卷，最后提交记录与作答并获得完成码，连接检查要求收到 AI 声音达设定秒数才能进入对话，中途关页可用同一链接续做。记录组件把化身屏装入框架内，只接收页内标记捕获开始、话语结束与捕获结束的信号，信号只带时长。到达服务器的只有被试 ID、条件、各阶段用时、AI 说话时长与话语数、问卷作答、浏览器类型与带时间戳的事件类型列表，音频、特征与对话内容都不上传。被试侧需要桌面 Chromium 系浏览器、扬声器或耳机与对话服务账号，免费账号能否用语音及时长限制需在研究前核查。

### 尚未评估化身效果下已确认的运行范围与随机化估计逻辑

本篇没有用户研究，化身呈现的有效性尚未评估，报告的是设计与实现，具体呈现条件的实验设计与结果变量将另行预注册。评测协议因此不是准确率或听感分数对比，而是运行确认与随机化逻辑自洽性检查。公平性核查聚焦训练规模、参数量、码率与因果流式等常见维度，本设计无模型训练、无码率比较、无流式延迟数值，所有对话生成都在商用服务侧，被试按条件随机分配，内容不固定。阅读结果时应把可复现的运行事实与尚未验证的效果主张严格分开。

#### 同一套代码确认了哪些运行事实

浏览器实现以同一套代码驱动了 ChatGPT 与 Grok 的语音对话，确认时间为 2026 年 10 月，仅确认能带动化身，未比较不同服务间嘴部运动质量。语音检测等阈值是在一种服务声音上调参，若声音气质差异大，行为可能不同。Chrome 侧板栏运行的 Gemini 声音不属于标签页，无法作为标签页音频捕获，浏览器实现为此加了整屏共享时一并捕获系统音频的选项，这是标准浏览器功能而非针对特定服务的加工，借此也能用 Gemini 语音驱动化身。但此时捕获的是 PC 播放的全部声音，通知音与其他应用音频都会进入化身反应，限定所选标签页的性质即丧失，麦克风仍不打开，分析仍在浏览器内完成且音频仍不外发，能用标签页时应选标签页。

#### 与现成路线对照后的估计量含义

把 Deskmate 与文本实验平台及基于开发者 API 自建路线并置，能看清收益与代价的交换。下表逐行对照模态、对话伙伴、内容、呈现身体、额外费用与会话日志处理，阅读时先看伙伴与内容两行，前者区分官方服务本身与研究者配置，后者区分不干预与提示词设定，这两行决定了生态效度与控制精度的取舍。

|  | LEXI [18] | Built on a developer API | Deskmate |
| --- | --- | --- | --- |
| Modality | text | voice possible | voice |
| Partner | configured by the researcher | configured by the researcher | the official service itself |
| Content | set by prompts | set by prompts | not intervened in |
| Presented body | none | must be built separately | main object of manipulation |
| Extra usage fees | depend on the model used | usage-based | no fee added by Deskmate |
| Handling of conversation logs | collected by the platform | collected by the builder | not stored automatically (manual saving available) |

对照显示 LEXI 为文本模态，伙伴与内容均由研究者经提示词设定，无呈现身体，费用取决于所用模型，日志由平台收集。基于开发者 API 的路线可实现语音，伙伴与内容仍由研究者设定，身体需另行构建，费用按量计费，日志由构建者收集。Deskmate 为语音模态，伙伴是原样使用的官方服务本身，内容不干预，呈现身体是主要操纵对象，Deskmate 自身不增加费用，日志不自动保存仅支持手动保存。收益是被试可同时参与而不受研究者算力限制，服务器只需交付静态文件与接收记录而无需 GPU，化身叠加在商用语音当前最优性能之上。

代价是实验者不控制说什么，若呈现改变被试姿态，被试说话随之改变，服务回复也随之改变，对话内容成为处理下游的事后变量，估计的是包含该过程的总效应。在回归中把对话是否有趣等事后量作为协变量会破坏随机化保证的可比性，要估计身体的直接效应需在设计阶段固定内容，例如向所有被试呈现录制音频。Deskmate 本身不记录对话，需要日志时须经同意从商用服务获取，结果与研究时间与服务版本绑定并需如实记录。本篇既无人工主观听测的 MOS 与 95% 置信区间，也无 UTMOS、DNSMOS 等神经代理指标与 LSD、MCD 失真对照，不存在最优数值可宣称，也未做消融归因。

### 隐私边界未验证条件与复现核对前提下的选型建议

假设边界首先来自声音与服务变化。阈值在一种服务声音上调参，换声线可能行为不同，整屏加系统音频虽能兼容 Gemini 侧板栏却混入整机声音。哪些套餐能用语音对话、时长限制与背后模型由供应商决定并可能不经通知改变，对话过长中途会因限额停止，对话长度须按限额设计。被试账号在订阅计划、所选音色与历史记忆等方面各不相同，这些成为呈现条件之外的差异，随机化可避免跨条件不平衡，计划等属性还应在问卷中询问并与研究时间一并记录。服务器版还是原型，无认证与限流，知道被试 ID 即可提交且每 ID 仅接受首次提交，记录存于服务器文件而无故障恢复，正式研究前必须补齐，桌面实现不支持服务器版。

隐私设计上 Deskmate 不直接访问用户麦克风，未实现获取麦克风的调用，捕获的 AI 音频只在分析页内转为特征，不发往该页之外甚至本地服务器，不自动存波形与转写，既得不到用户声音也得不到对话内容，会话记录留在语音 AI 供应商处，Deskmate 侧不自动保留，这种本地处理且不自动存记录的设计最小化了会话数据的额外暴露。若研究目标是评价用户自身发音等增益，则需另设输入通路。

复现核对要区分代码开源、权重可下载与系统可运行三件事。完整版仅限研究用途，需向作者申请，已发布演示只含单个 VRM 模型，省略短语存取与 2D 后端并固定模型。论文文本与图按 CC BY 4.0 许可，软件含演示不在其中，软件著作权归 Hiroshi Hamada 一人，演示与图中 VRM 由第一作者用 VRoid Studio 样例数据制作并适用 pixiv 规定。实现要求 Node.js 20 或更高且运行时无 npm 依赖，渲染库由浏览器从 CDN 加载，自备 VRM 与 Cubism 模型需自行核查许可，CSS 后端或开源化身可避开该约束。论文承认准备与实现中使用了生成式 AI 辅助工具，作者已核验并对定稿与技术主张负责。

演示试听与选型建议可合为一步。演示页可尝试标签页音频耦合与 3D、CSS 两种后端，重点对照同一状态在不同画法下的嘴形跟随与表情节奏，以及经网址参数或桌面启动选项指定的无化身、同一模型静置与随音频张嘴 3 种条件，同步指低层特征驱动而非音素识别。当研究想保留商用语音当前最优性能、只操纵眼前身体、支持多人同时在线且只有低配服务器时值得尝试，复现第一步是打开演示链接并共享对话服务标签页，同时核查语音可用套餐与时长限制。需要补的验证是记录研究时间与服务版本、在问卷中记录计划音色记忆等属性、预注册总效应与直接效应的区分，以及在正式在线实验前为服务器版补上认证限流与故障恢复。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：语音带 120 Hz 到 4200 Hz 平均幅度经 Web Audio API 的 AudioContext 与 AnalyserNode 逐帧计算，特征含 RMS、peak、瞬态、幅度包络、高频带平均幅度与频谱质心，语音检测用跟随噪声基底的自适应阈值并做平滑，采样率、帧长步长、FFT 点数、码率、通道维度、因果前瞻延迟与 RTF 原文未披露，视频轨道捕获后立即停止只分析音频，不采集麦克风，音频不出分析页。
- **训练与评测数据**：无模型训练阶段，无训练与评测数据集划分，论文为系统设计与实现报告且明确尚未开展用户研究，运行确认仅为 2026 年 10 月以同一套浏览器代码驱动 ChatGPT 与 Grok 语音对话且未比较口型质量，Gemini 侧板栏需整屏加系统音频才能驱动。
- **算力与训练耗时**：原文未披露 GPU、TPU 型号与数量及训练耗时，无训练阶段，本地运行需 Node.js 20 或更高且运行时无 npm 依赖，渲染库由浏览器从 CDN 加载，研究者服务器只需交付静态文件与接收记录而无需 GPU，被试侧需桌面 Chromium 系浏览器、扬声器或耳机与对话服务账号。
- **核心超参数与配置**：无优化器、学习率与批大小，音频侧语音带为 120 Hz 到 4200 Hz，化身状态为是否说话、音量、能量、强度、嘴部张开度、嘴形与表情七元组，表情取 neutral、happy、thinking、surprise 与 concerned 五种启发式，阈值在一种服务声音上调参，切换后端经舞台角落控件与网址查询串且切换重载页面。
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存数值，推理在被试浏览器内完成且音频不发往服务器，服务器版低配即可并发不受研究者算力限制，Deskmate 自身不增加按量费用，对话长度受供应商套餐时长限制影响。
- **开源产物与协议状态**：完整版仅限研究用途需向作者申请，已发布演示为静态页面只含单个 VRM 模型并省略短语存取与 2D 后端，原文未提供公开代码仓库，论文文本与图按 CC BY 4.0 许可而软件含演示不在其中且著作权归 Hiroshi Hamada，演示链接论文有给出，自备 VRM 与 Cubism 模型需自行核查许可，Persona 与 AVATAR 为论文提到的第三方开源工具。
- **附录与补充材料要点**：原文未设附录，补充要点为演示与问询说明、VRM 模型用 VRoid Studio 制作致谢、生成式 AI 辅助工具使用声明与 CC BY 4.0 仅覆盖文本与图而不覆盖软件及 VRM 样例许可约束，服务器版无认证限流与故障恢复等原型限制在正文第 5 节交代。

<details>
<summary>📎 论文与评分元数据</summary>

排名：后50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.30552v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：把AI播放音频作为与外部系统耦合的不变触点，两路捕获后共享同一处理且浏览器版无服务特定依赖。

- 核心优势：服务器仅下发静态文件无需GPU且并发不受研究者算力限制，问卷前后隐藏化身以防处理泄漏到基线测量。

- 主要短板：未报告WER/MOS/UTMOS等主客观指标对比与消融数值，作者明确尚未开展用户研究而效果未经检验。

- 主要短板：阈值在一家服务声音上调优而跨声线行为未知，表情5状态为节奏启发式而可能与语义错配且无参数评测。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
