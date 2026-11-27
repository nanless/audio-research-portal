---
title: "μ-Bench: Benchmarking Multi-User Task Completion in Shared Interaction Voice Agents"
date: 2026-11-27
draft: false
tags: [语音对话系统, 全双工语音交互, 基准设计, 基准测试]
categories: [论文速递]
description: "针对共享全双工语音中多用户目标交织与权限隐私冲突问题，μ-Bench 以闭环多用户模拟器加可验证会话级评分构建 800 个对照案例，测得专有系统工具增强轨最高 65.44% 而开源模型不足 20%，代价是人群扩大与未授权调用使联合成功率显著下降且需严格 Pure JTS 审计。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34920"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "共享语音助手如何完成多用户联合任务"
paper_digest_original_title: "\\(μ\\)-Bench: Benchmarking Multi-User Task Completion in Shared Interaction Voice Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34920v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34920v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34920v1.pdf"
paper_digest_primary_task: "语音对话系统"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对共享全双工语音中多用户目标交织与权限隐私冲突问题，μ-Bench 以闭环多用户模拟器加可验证会话级评分构建 800 个对照案例，测得专有系统工具增强轨最高 65.44% 而开源模型不足 20%，代价是人群扩大与未授权调用使联合成功率显著下降且需严格 Pure JTS 审计。"
paper_digest_reader_sections: [{"heading":"共享全双工通道中多用户交织目标为何难以一次做对","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从剧本编排到混合核验的闭环流水线总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"任务契约与三维因子设计如何决定会话级成败","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"主结果为何呈现双层分化与工具轨差异","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"人群规模与累积辅助揭示了哪类瓶颈","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提代价与可复现性边界","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University, Shanghai, China","Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Qihao Lin"},{"affiliations":["Shanghai Jiao Tong University, Shanghai, China","Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Guanxu Chen"},{"affiliations":["University of Chinese Academy of Sciences, Beijing, China"],"name":"Shuhang Zheng"},{"affiliations":["Shanghai Jiao Tong University, Shanghai, China","Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Xiaoya Lu"},{"affiliations":["Shanghai Artificial Intelligence Laboratory, Shanghai, China","Fudan University, Shanghai, China"],"name":"Jingyi Yang"},{"affiliations":["Tsinghua University, Beijing, China"],"name":"Terumi Chiba"},{"affiliations":["Tsinghua University, Beijing, China"],"name":"Wenyi Yu"},{"affiliations":["Tsinghua University, Beijing, China"],"name":"Chao Zhang"},{"affiliations":["Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Zhuan Shi"},{"affiliations":["Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Jing Shao"}]
paper_digest_abstract_sha256: "001086c5b56f1bb1a144ee07cb3b3cd5f82ace86e0c1cef588f4533ece01e10f"
paper_digest_sidecars: {"citation.bib":{"sha256":"8b836f972952cd34701ff824e6455d35de5a32789820f8b94f6c7b4800382e5f","url":"/audio-research-portal/client/papers/2026-11-27/2611-34920/citation.bib"},"citation.json":{"sha256":"266a02cf1cad226f86f7a30b1ffac15414ab654456698456d4176e6e875c8fd7","url":"/audio-research-portal/client/papers/2026-11-27/2611-34920/citation.json"},"citation.ris":{"sha256":"49972dc2bc47044041a9649bde4b1eb8d75201ac96ff97f915867cb86e63ffec","url":"/audio-research-portal/client/papers/2026-11-27/2611-34920/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e35be1618631524e40b7b511dc90eaf0892301d4b5b450d603aaa7a422032957","url":"/audio-research-portal/client/papers/2026-11-27/2611-34920/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "326d8175906a1331d36cbecefaf9c9824b1ffa93198e2eb9de7730ac9479e9cb"
paper_digest_api_reader_plan_sha256: "e10068bea87fd25f676f0f517eb99d96ab5420dadb069e5d53dc3e484d76717e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c6a2e8f0dd05d7688daeb6639a8609f29390e6341b5946270143e39352e05732"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "6ec8cb7a432aacd2dab5f859aa7966b9c8e8c78a9292003875ff1c39fffd8961"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6933d68c9cba17f04d635afecd9209ccaf269ccd056dab3eafc59c135e8ad246"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0d6ed64fd6402898e289b43e2f2c2cc5e99a227393a71f9e0c866d13209b1234"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 共享语音助手如何完成多用户联合任务

> 英文题目：*[μ-Bench: Benchmarking Multi-User Task Completion in Shared Interaction Voice Agents](https://arxiv.org/abs/2611.34920v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-research-portal/papers/?concept=task.speech-dialogue)；[语音交互](/audio-research-portal/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-research-portal/papers/?concept=task.full-duplex)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 8.1/10 | 技术严谨 6.5/10 | 实验充分 7.6/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 1.5/10 | 可复现 7.4/10 | 工程/实践 6.2/10


## 👥 作者与机构

- Qihao Lin：Shanghai Jiao Tong University, Shanghai, China；Shanghai Artificial Intelligence Laboratory, Shanghai, China
- Guanxu Chen：Shanghai Jiao Tong University, Shanghai, China；Shanghai Artificial Intelligence Laboratory, Shanghai, China
- Shuhang Zheng：University of Chinese Academy of Sciences, Beijing, China
- Xiaoya Lu：Shanghai Jiao Tong University, Shanghai, China；Shanghai Artificial Intelligence Laboratory, Shanghai, China
- Jingyi Yang：Shanghai Artificial Intelligence Laboratory, Shanghai, China；Fudan University, Shanghai, China
- Terumi Chiba：Tsinghua University, Beijing, China
- Wenyi Yu：Tsinghua University, Beijing, China
- Chao Zhang：Tsinghua University, Beijing, China
- Zhuan Shi：Shanghai Artificial Intelligence Laboratory, Shanghai, China
- Jing Shao：Shanghai Artificial Intelligence Laboratory, Shanghai, China

## 📌 核心摘要

**问题与瓶颈：** 共享空间中的语音智能体需在单条全双工音频通道上同时服务多名参与者，各自目标相互依赖并受权限与隐私约束。参与者会随时打断智能体、相互重叠发言或插入题外话，而智能体的追问、拒绝与工具调用又会改变后续发言与可行方案。现有评测多聚焦单用户任务完成或轮次控制，或采用预录多方场景做一次性工具预测，无法检验多主体在实时反馈下能否收敛到联合有效的终态。尤其当某位用户的新请求与另一位用户的截止时间或授权冲突时，系统需同时完成归因、状态保持与权限调和，任一环节失守即整体失败。

**核心思路与方法架构：** 核心洞察是把拥有独立目标、知识与权限的多名参与者放进可实时反应的反馈环路，并以联合终态有效性作为唯一成功标准。与最接近的静态多方问答加一次性工具预测及单用户在线仿真相比，μ-Bench 同时保留可执行后端与免工具口头协调双轨。编排器按 200 ms 逻辑节拍释放中断、重叠与追问事件，逻辑时间在规划、转写、合成与结算期间暂停以保持多方同步。相互隔离的用户模拟器各自由私有角色档案、派发事件与个人可听历史驱动，经 Fun-CosyVoice3-0.5B-2512 以 16 kHz 单声道 16 位 PCM 合成确定性音色语音澄清约束、反对越权并回应工具中间结果，被测智能体经官方音频接口在全双工通道下实时应答。任务契约对整条轨迹做程序化结算，联合任务成功率要求工具执行与终态、目标处置与隐私边界同时成立，归因、线程保持与协调三轴定位失败。100 个基础场景按工具增强 51 个与免工具 49 个划分，再经三组二值条件扩展为 800 个测例，其中工具增强 408 个、免工具 392 个；剧本编写与结算控制及语义仲裁使用 gpt-6-luna，转写使用 Whisper large-v3，被测系统保持官方推理配置冻结不变。

**关键实验与核心代价：** 在 49 个免工具基础场景按 8 种条件扩展的 392 个测例上，以 Joint Task Success (JTS) 为主要结局指标，开源权重家族中最强可比基线 MiniCPM-o 4.5 的 JTS 为 19.39%，高于次强的 Raon-Speech 的 7.14%，两者同轨同指标可比且小数精度与百分号与原文一致。同一公共轨上专有系统 JTS 为 37.50% 至 62.24%，其中 Grok Voice 3.0 的 JTS 为 62.24%，高于 GPT-Realtime-2 的 58.42% 与 MOSS-Live 的 57.91%，8 个开源权重模型 JTS 均低于 20%，其中 6 个在 3.57% 及以下。在 408 个工具增强测例上，4 个具备工具能力的专有系统 JTS 为 50.00% 至 65.44%，其中 GPT-Realtime-2 的 JTS 为 65.44%，高于 Gemini 3.8 Live 的 64.95%，此时协调分由免工具轨的 96.06% 至 97.11% 降至 55.98% 至 83.29%。论文未采用人工主观听测，语义核验依赖 gpt-6-luna 双审加仲裁与 Whisper large-v3 转写，开源模型协调分高达 76.43% 至 87.17%，但 6 个模型的线程保持至多 8.07%，说明仅看边界合规会高估多用户能力。

**适用边界与深读导览：** 上述结论成立于合成语音与确定性音色绑定的仿真条件下，工具框架信任智能体声明的请求者身份而无外部声纹核验，公平性仅在适用子集计入协调分，未覆盖真实房间混响、真实人群与长期部署中的延迟成本。对 MiniCPM-o 4.5 的累积辅助显示即使提供序列化轮次与轮级身份及语义线索，仍有 68.62% 会话未解决，指向声学并发之外的多方规划瓶颈。项目页与代码及数据集链接随文给出，可对照附录 C 的五人餐厅完整时序与断言日志理解权限泛化与说话人误归因如何导致选择性未完成，深究形式化定义与聚合规则可查下方方法概述和架构与细节详述，数值对比可查实验结果表格。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/lqh1106/mu-bench> — 链接可访问（HTTP 200）

- 演示资源：<https://lqh1106.github.io/mu-bench> → <https://lqh1106.github.io/mu-bench/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/linqihao/mu-bench> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 共享全双工通道中多用户交织目标为何难以一次做对

在客厅、车内或机场问讯台等共享空间里，多位用户共用同一条全双工语音通道，目标与约束常常相互交织。论文以家庭赶飞机为例，家长要求 10:00 前到达机场，孩子中途打断要求绕行公园，旁边还混入指向父亲的悄悄话与无任务的应答声。智能体需要分辨谁在对谁说话，核查绕行是否仍能准时到达并取得家长许可，还要在工具调用中绑定正确的请求者身份。一次澄清可能暴露隐藏约束，一次拒绝可能引出有权限者的介入，一次工具返回可能改变可行方案，交互管理本身成为任务求解的一部分。

已有评测只覆盖了拼图的一部分，需要沿统一维度对照才能看清缺口。表 1 把相关基准按多用户、反应内容、执行工具、单用户权限与联合结果五列展开，多用户指是否存在多个独立目标的参与者，反应内容指话语是否随智能体言行动态改写，执行工具指是否连接可变状态的后端，单用户权限指是否强制每用户授权与隐私边界，联合结果指是否要求同一会话内全部目标与约束同时成立。τ-Voice 与 Joi-Bench-Task 具备在线模拟与工具执行但只有单主用户，多方轮流类工作关注抢话与旁观语音，MSI-Bench 在录制场景上静态考查记忆与权限，均未实现闭环多用户联合完成。

| Benchmark | Setting | Multi- User | Reactive Content | Exec. Tools | Per-User Auth. | Joint Outcome | Primary Eval. Focus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| τ-Voice (Ray et al., 2026) | Online Sim. (1-User) | ✗ | ✓ | ✓ | ✗ | ✗ | 1-user task completion |
| Joi-Bench-Task (He et al., 2026) | Online Sim. (1-User) | ✗ | ✓ | ✓ | ✗ | ✗ | Async 1-user updates |
| MSI-Bench (Xiong et al., 2026) | Prerecorded Audio | ✓ | ✗ | △ | △ | ✗ | Speaker-scoped QA & tools |
| μ-Bench (Ours) | Closed-Loop Sim. | ✓ | ✓ | ✓ | ✓ | ✓ | Joint tasks + ATC |

对照可见，只有 μ-Bench 在五列同时取肯定，单用户模拟器在反应内容与执行工具上占优却缺失多用户与联合结果，多方音频基准在多用户上占优却多为预录或定时自适应回放，工具预测与权限多为静态标注而无运行时访问控制。这种缺口意味着，现有分数无法回答智能体能否在自身提问、拒绝与工具动作反过来改变用户下一句话时，仍让所有人的目标与约束在同一轨迹里成立，而这正是本文要形式化的问题。

输入是混合多方语音与可用的后端工具集，输出是面向不同地址的语音回应与带请求者声明的工具调用。每个案例由任务契约规定参与者集合、初始环境状态、工具集、各人目标与会话级授权隐私约束，真值注释对智能体隐藏。评分不看单轮回答是否流畅，只看整条轨迹是否让工具执行、终态、每人目标处置与隐私边界同时成立，任一用户被遗漏、一次越权或一次泄漏都会使整单失败。

### 从剧本编排到混合核验的闭环流水线总览

μ-Bench 把评测做成闭环模拟加混合核验，左侧模拟器负责生成反应式多用户语音，右侧评估协议负责给出二值成败与诊断分数。剧本规定参与者、目标、权限与事件图，编排器持续监听全双工音频与可执行环境的状态反馈，按需调度触发与有限轮次追问。每个用户模拟器相互隔离，只持有私有角色档案与自己在场时听到的可听历史，结合调度事件生成符合人设的上下文语音，逻辑时间在规划与合成期间暂停以保持时间线对齐。

图 1 左上以共享乘车时间线直观展示多线程交织，家长先提出 10 点前到达机场的主请求，孩子随后打断插入公园绕行，智能体需调用路径规划与到达时间查询并把预估 9:52 与家长批准条件一并摆出，同时忽略对父亲的悄悄话并容忍无任务的应答词。右侧领域环图把 100 个基础场景按 20 个领域展开，蓝色为工具增强，红色为纯语音，括号内标注每个领域的两类数量，呈现执行与口头协商的分工。

[![原论文 Figure 1：Overview of \\mu-Bench: multi-user task coordination and domain coverage.](https://arxiv.org/html/2611.34920v1/intro-teaser-pdf.png)](https://arxiv.org/html/2611.34920v1/intro-teaser-pdf.png)

*论文图 1：共享出行交互轨迹与三视角诊断及 20 个领域任务分布（原论文 Figure 1）。*

画面中顶部黄色条为家长到达请求，红色条为孩子公园请求，蓝色块分别标注路径规划调用与到达时间查询结果，应答词与悄悄话以粉色条叠放在黄色与蓝色之上。底部归因框以实线箭头标出打断指向助手、以虚线标出悄悄话忽略，线程框以黄线保留机场目标并串起绕行确认、时间核验与批准节点，协调框列出截止时间、绕行请求、到达时间与批准并汇入联合满足。右侧环心为 100 个基础场景与 20 个领域，外圈每个扇区均带括号数字区分两类任务数量。

实现上，用户语音以 16 kHz 单声道 16 位 PCM 合成，每案例固定说话人与人设绑定并适配各系统接口，编排器以 200 ms 逻辑节拍推进。形式任务窗口上限为 1,800 s 逻辑时间与 600 s 双边静默，剧本事件播完且播放排空、无待处理工具调用、距上次用户音频超过 30 s 且助手静默超过 2 s 才允许闭合，最多追加 2 轮尾部追问。脚本与闭合控制使用 gpt-6-luna，播放音频转写使用 Whisper large-v3，语义审计与仲裁同样使用 gpt-6-luna。

### 任务契约与三维因子设计如何决定会话级成败

#### 联合成功的判定逻辑

判定目标是把整条会话判为成功或失败，任务契约记为参与者集合、初始状态、工具集、各人目标与会话级约束，轨迹记为语音与工具调用序列。公式中 \(S\) 判断所需工具执行与终态是否成立，\(V_{u}\) 判断每位参与者的目标处置是否符合预设，\(P\) 判断隐私边界是否全程保持，\(c\) 为案例，\(\tau\) 为轨迹，\(U\) 为参与者集合，逻辑与要求三者同时为 1。工具为空的纯语音案例使 \(S\) 恒为 1，退化为目标处置与隐私的联合检查。任务契约在评测中保持不可变，只有其中定义的目标与约束才计入评分，模拟器临时引入的口头要求不扩大必须完成的义务；纯语音情形下口头总结、交接与拒绝直接按语音承诺判定，无需外部写库佐证。

\[\operatorname{JTS}(c,\tau)=S(c,\tau)\land\left(\bigwedge_{u\in U}V_{u}(c,\tau)\right)\land P(c,\tau).\]

该式的直觉是逻辑与而非平均分，任一合取项为 0 则整体为 0，呼应满足一人不能补偿另一人的泄漏或越权。极端取值上，工具执行错误、终态被污染、任一 \(V_{u}\) 为 0 或 \(P\) 为 0 都会直接失败，即使其余部分全部正确。输出驱动下游两路，一路经程序化聚合得到二值 JTS，另一路保留分项进入归因、线程与协调诊断，并在工具轨叠加零未授权要求的 Pure JTS，以区分功能做对与路径合规。工具框架信任智能体声明的请求者身份而无外部声纹核验，因此即使终态正确，若存在冒用他人身份或超越权限的调用，仍需在严格口径下另行扣减；纯语音轨因无后端调用，其严格口径与普通口径一致。归因、线程与协调三项诊断与成败解耦计算，类别先在断言集合内平均，再对适用类别取无加权平均，避免不适用分量稀释得分。

#### 因子网格与场景覆盖

场景库覆盖日常与专业 20 个领域，共 100 个基础场景，其中 51 个需实时后端状态更新对应 408 个案例，49 个为纯语音口头协调对应 392 个案例。表 2 精选航空、智能家居、餐饮、应急与总量行，可见电信仅有工具增强而知识问答与闲聊仅有纯语音，呈现执行与协商在不同领域的分工差异。工具增强任务例如航班改签、共享智能家居控制与发票更新，纯语音任务例如室友闲聊、医疗隐私与行程协商，两轨共用纯语音轨以便与缺乏工具接口的语音模型直接比较。

| Domain | Tool-Augmented Scenarios (51 Base / 408 Cases) | Tool-Free Scenarios (49 Base / 392 Cases) |
| --- | --- | --- |
| Aviation & Airport | Separate rebooking, seat preference correction, cancellation authority conflict | Gate broadcast filtering, mobility assistance restatement |
| Shared Smart Home | Multi-user timers, media playback control, shared shopping list | Thermostat objection resolution, visitor access authorization |
| Dining & Hospitality | Party size update, ordering side-talk filtering, bill splitting | Allergy attribution, late-joining roommate privacy |
| Emergency & Incident | Missing person description logging, roll-call status logging | Evacuation instruction clarification, dispatch relay, shelter resource negotiation |
| Total (20 Domains) | 51 Base Scenarios / 408 Evaluation Cases | 49 Base Scenarios / 392 Evaluation Cases |

精选子表保留原表三列结构，工具增强列列出需写状态的任务，纯语音列列出口头协调任务，总计行核对 51 个基础场景对应 408 个案例与 49 个对应 392 个案例。跨领域对比表明，基准同时考查带状态机的执行与无外部写入的口头协商，避免只用一类任务推断共享语音能力，完整 20 行分布见原文附录。附录按航空、零售、电信、金融、住房、旅行证件、知识问答、闲聊、情感支持、智能家居、车内协作、会议协作、教育、医疗、餐饮、公共服务、技术支持、文娱、家务协调与应急逐域列出两类场景名称，总量行与上述计数一致。

为实现受控压力测试，每个基础场景沿三维二值网格展开，\(d\) 的 3 个分量分别表示人群规模、声学真实感与追问需求，取 0 为容易条件，取 1 为困难条件。人群从 2 至 3 人扩至 4 至 7 人，声学从干净近场变为带自然迟疑，追问从直接理解变为反复澄清，8 种组合与 100 个场景交叉得到 800 个评测案例，支持精确的同场景单轴对照。

\[\mathbf{d}=(d^{\mathrm{pop}},d^{\mathrm{ac}},d^{\mathrm{follow}})\in\{0,1\}^{3},\]

该向量的直觉是把混杂难度解耦为可正交切换的开关，便于度量每轴从易到难的相对变化。极端取全 0 为最易基线，全 1 为最难组合，中间组合可做单轴对照。输出驱动下游的相对对比指标，以容易条件均值为分母计算百分比变化，并在总体与纯语音轨分别池化，从而定位哪一轴是跨系统的最一致压力源。评估时工具型智能体在两轨均参评以便池化总体结果，其余模型仅在纯语音轨参评；相对变化按已评分案例计算，容易条件均值为零时记为不可比，避免除零夸大波动。

#### 隔离模拟与评估链路

图 2 左侧为多用户模拟器，绿色剧本块列出参与者、目标、权限与事件，蓝色编排器包含监听流、更新状态、决定事件与触发事件，黄色链路从可听历史经脚本撰写器到声音扮演者再注入用户音频。右侧为评估协议，记录证据保存交互轨迹波形与状态变化，任务契约列出同样四要素，中间两路独立语义评审加仲裁与来源证据落地核验结合工具执行与授权检查，共同输出二值联合成功与三项诊断。编排器按剧本持续监测实时音频与可执行环境反馈，更新会话状态并触发计划事件；当请求悬而未决时，按有限轮次派出追问，使后续用户话语直接依赖智能体的提问、拒绝与工具结果，形成闭环反馈。

[![原论文 Figure 2：Overview of the \\mu-Bench simulation and evaluation framework.](https://arxiv.org/html/2611.34920v1/framework-pdf.png)](https://arxiv.org/html/2611.34920v1/framework-pdf.png)

*论文图 2：多用户模拟器与混合评估协议构成的闭环框架（原论文 Figure 2）。*

画面左侧黄色链路强调隔离性，每个用户模拟器只读私有档案与可听历史，不共享他人的目标与权限，编排器经由蓝色竖线下发调度事件，实时反馈经虚线回流更新状态。右侧记录证据经白色大箭头流入评审，语义评审覆盖目标满足、上下文隔离与来源证据落地核验，程序化检查覆盖工具执行、授权检查与因果终态，最终在最右输出 PASS 或 FAIL 的联合成功与归因、线程、协调三项诊断，诊断与成败解耦计算。每个参与者模拟器严格隔离，仅依据私有档案、编排器下发事件与个人可听历史生成贴合人设的自适应语音；可听历史只记录在场时听到的公开语音，含被打断后截断的智能体音频。

规划与合成期间逻辑时间暂停以保持全双工时间线同步。语义侧由两路独立评审分别逐项审计目标处置、隐私边界与能力断言，不一致时经匿名仲裁裁决；凡判为虚构或缺失依据的扣分项，均触发针对性来源调取，比对已交付输入与已登记轮次后再重判。程序化侧对每次业务调用绑定声明的请求者标识并校验运行时访问控制与领域规则，坚持严格时间因果，终态比对接受先执行后修订与待共识后一次执行两条有效路径，同时排除自增流水号等非语义审计痕迹。

### 主结果为何呈现双层分化与工具轨差异

#### 双轨协议与公平性前提

评测覆盖 13 个语音智能体，分为 5 个专有系统与 8 个开源全双工语音模型。工具增强轨只测 4 个具备原生工具调用的专有系统，纯语音轨测全部 13 个系统以保证可比，MOSS-Live 因工具支持在评估截止后发布而暂缺工具轨。每个会话报告二值 JTS 与三项诊断，协调分数在公平性适用时取边界合规与服务公平各半平均，否则只用边界合规，缺失分量不计入平均。

表 3 精选开源最强与专有全系共 6 行，保留双轨成功率与三项诊断，蓝色底的 JTS 为主要结果，数值越高越好，短横表示该轨未参测。工具增强轨仅 4 个专有系统有数，开源均为空，开源其余模型多在 3.57% 以下，完整 13 行分布可在原文中核对。

| System | Tool-Free JTS ↑ | Tool-Free A↑ | Tool-Free T↑ | Tool-Free C↑ | Tool-Augmented JTS ↑ | Tool-Augmented A↑ | Tool-Augmented T↑ | Tool-Augmented C↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MiniCPM-o 4.5 | 19.39 | 36.89 | 35.95 | 87.17 | – | – | – | – |
| MOSS-Live | 57.91 | 62.63 | 71.32 | 94.81 | – | – | – | – |
| GPT-Realtime-2 | 58.42 | 68.61 | 81.66 | 96.87 | 65.44 | 84.61 | 81.14 | 83.29 |
| Gemini 3.8 Live | 53.32 | 61.05 | 78.87 | 96.06 | 64.95 | 75.80 | 82.89 | 74.98 |
| Grok Voice 3.0 | 62.24 | 67.32 | 77.82 | 96.25 | 57.60 | 81.99 | 82.50 | 78.10 |
| Seeduplex 3.0 | 37.50 | 61.05 | 78.67 | 97.11 | 50.00 | 76.81 | 61.90 | 55.98 |

趋势呈现清晰分层，专有系统纯语音轨为 37.50% 至 62.24%，其中 Grok Voice 3.0 以 62.24% 领先，GPT-Realtime-2 工具轨以 65.44% 领先，Gemini 3.8 Live 工具轨为 64.95%。开源模型全部低于 20%，最高 MiniCPM-o 4.5 为 19.39%，其余多在 3.57% 及以下，Freeze-Omni 与 FLM-Audio 为 0.00%。诊断上开源协调均在 76.43% 至 87.17% 高位而线程多低于 9%，专有协调在纯语音轨超 94% 但工具轨回落至 55.98% 至 83.29%，说明只看协调会高估多轮能力。

#### 指标覆盖与工具轨差异

表 4 给出各诊断在双轨的适用比例，归因、线程、协调与边界合规在全部案例适用，服务公平只在部分案例适用，公平缺失时用地控代理补充。适用比例以案例占比表示，协调始终可算但构成不同，理解分母差异是正确解读平均分的前提，否则会把不适用误读为 0 分。

| Metric / component | Tool-Free | Tool-Aug. |
| --- | --- | --- |
| Attribution (A) | 100.00 | 100.00 |
| Threading (T) | 100.00 | 100.00 |
| Coordination (C) | 100.00 | 100.00 |
| Boundary compliance (I) | 100.00 | 100.00 |
| Service equity (E) | 46.94 | 62.75 |

子表显示归因与线程覆盖均为 100.00%，协调同样 100.00%，边界合规 100.00%，而服务公平在纯语音轨为 46.94%，工具轨为 62.75%。这意味着协调平均在约半数纯语音案例中退化为仅边界合规，跨轨比较协调时需注意分母构成不同，JTS 则独立于诊断单独计算。

工具轨还带来协调构成与排名的双重变化，谨慎措辞可回避口头歧义，但显式具名工具调用会暴露跨用户授权与公平冲突，全部 4 个工具专有系统的协调均从纯语音轨 96.06% 至 97.11% 回落至工具轨 55.98% 至 83.29%。排名也随之反转，Grok Voice 3.0 在纯语音轨领先却在工具轨落至 57.60%，GPT-Realtime-2 与 Gemini 3.8 Live 则在工具轨反超，双轨并测因此不可或缺。

### 人群规模与累积辅助揭示了哪类瓶颈

#### 人群规模是最一致的压力源

因子对照显示，人群从 2 至 3 人扩至 4 至 7 人时，所有非零系统 JTS 均下降。专有总体下降 19.64% 至 29.48%，其中 Seeduplex 3.0 为负 29.48%，Grok Voice 3.0 为负 27.75%，MOSS-Live 纯语音下降 29.33%，MiniCPM-o 4.5 下降 47.98%，更弱开源模型下降 72.73% 至 100.00%。声学迟疑的影响多在 8.8% 以内，追问则分化，Seeduplex 等随上下文变长下降而其余 4 家专有系统反升 3.10% 至 14.62%，线程却同步下滑，说明最终挽回仍以状态连续性为代价。

#### 累积辅助分离并发与规划

为分离全双工并发感知与多方规划，论文在最强开源基线 MiniCPM-o 4.5 上做三阶段累积辅助，依次引入串行化、身份元数据与结构化语义，全程保留原始音频与约束且不泄露未来轮次。阅读图 4 时先看蓝色柱从基线到三阶段的绝对高度，再对比归因、线程与协调 3 条线在右轴的走势，注意后两阶段归因已变为对供给路由的顺应而非自主识别。

[![原论文 Figure 4：Cumulative assistance improves MiniCPM-o 4.5 task completion.](https://arxiv.org/html/2611.34920v1/minicpm_ablation_dual_axis.svg)](https://arxiv.org/html/2611.34920v1/minicpm_ablation_dual_axis.svg)

*论文图 4：MiniCPM-o 4.5 累积辅助下联合成功率与诊断分数变化（原论文 Figure 4）。*

画面中左轴联合成功率四柱分别为 19.39%、26.79%、29.59% 与 31.38%，共提升 11.99 个百分点，其中串行化单步贡献 7.40 个百分点，占总增益 60% 以上，归因与线程同步跃升约 16.72 与 15.08 个百分点。身份与语义仅再增 2.81 与 1.79 个百分点，即使协调达 90.24%，仍有 68.62% 会话未解，说明重叠语音解释了大量基线失败，但共享任务状态维护与跨用户约束调和仍是超越并发的规划瓶颈。

#### 未授权路径与餐厅案例

工具框架信任模型声明的请求者身份而无外部声纹校验，名义成功可能掩盖越权路径。4 家工具专有系统的未授权占比从 21.81% 至 71.81% 不等，落差最大者需重点关注调用者冒用与越界执行。阅读图 5 时左侧看含至少一次未授权调用的会话占比，右侧对比空心圆标准 JTS 与实心圆 Pure JTS 的落差与百分点标注，理解为何需同时报告两者。

[![原论文 Figure 5：Unauthorized tool execution and strict task completion.](https://arxiv.org/html/2611.34920v1/caller_provenance_single_col.svg)](https://arxiv.org/html/2611.34920v1/caller_provenance_single_col.svg)

*论文图 5：未授权工具调用占比与严格成功率 Pure JTS 落差（原论文 Figure 5）。*

画面中左侧未授权占比从 GPT-Realtime-2 的 21.8% 经 Gemini 3.8 Live 的 35.5% 与 Grok Voice 3.0 的 30.9% 攀至 Seeduplex 3.0 的 71.81%，含单次违规的会话仍有 39.02% 至 61.64% 条件成功率。右侧要求零违规的 Pure JTS 使 4 家分别下降 11.0 至 24.0 个百分点，GPT-Realtime-2 从 65.4% 降至 52.5%，Gemini 从 65.0% 降至 46.8%，Seeduplex 从 50.0% 降至 26.0%，原先接近的排名被拉开，证实结果正确不等于路径合规。附录 5 人餐厅案例中，Blake 持有分账写入许可而 Avery 仅有读取许可，智能体把拒绝过度泛化并始终未调用分账工具，同时把 Cameron 的两次人数回读误归于 Avery 名下，最终归因 66.67%、线程 11.11%、协调 25.00%，联合成功判失败。

### 结论成立的前提代价与可复现性边界

结论依赖仿真闭环而非真实人群，参与者由 gpt-6-luna 按私有档案与可听历史撰写，语音由 Fun-CosyVoice3-0.5B-2512 合成，转写与审计分别依赖 Whisper large-v3 与 gpt-6-luna，误判经双路独立评审加仲裁与来源证据落地核验缓解但仍非人工听测。工具调用的请求者身份由模型声明，运行时访问控制与因果校验能拦截越权却无法做声纹级核验，这正是 Pure JTS 必须单独报告的原因。声学仅覆盖干净近场与自然迟疑，人群上限为 7 人，更大群体与真实噪声仍未验证。用户话语以 16 kHz 单声道合成并按案例绑定固定音色，编排器以 200 ms 逻辑节拍推进，规划合成与转写期间逻辑时间暂停；形式任务窗口上限为 1,800 s 逻辑时间与 600 s 双边静默，闭合需满足播放排空与静默条件，并允许最多 2 轮尾部追问。

复现核对需区分三件事，代码、权重与可运行系统。论文文末给出项目页、代码仓库与数据集链接，本次检查三者均可达，但第三方托管不等同于作者权重开源，8 个开源模型缺乏原生工具接口因而缺席工具轨，MOSS-Live 工具结果待更新。运行时每系统使用官方音频接口与推荐配置，确定性用例绑定跨模型复用，单用例单次运行不做最优挑选，基础设施中断只触发技术重跑。工具增强轨仅覆盖具备实时后端能力的 4 个专有系统，纯语音轨覆盖全部 13 个系统以实现公平比较；两轨按 408 与 392 案例数加权池化总体结果，归因、线程与协调先在适用断言内平均再跨类别平均，不适用分量记为不参与平均。

工程选型上，若只需纯语音协调可优先看 JTS 与线程，若涉及后端写操作必须并看 Pure JTS 与未授权占比，人群扩大时预留线程保持与显式授权确认，追问设计对强系统有助于挽回结果但会消耗状态连续性。演示页可对照试听现象与基线，重点听打断归属、旁道忽略与安静参与者是否被公平纳入，避免把谨慎措辞误认为合规执行。跨系统对比显示人群规模是最一致的压力源，强系统在追问下可部分挽回终态但线程指标仍下滑；工具轨协调分普遍低于纯语音轨，说明口头谨慎可回避歧义而显式落库会暴露权限与公平冲突，选型时需为写操作单独预留授权校验与终态复核。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：用户语音以 16 kHz 单声道 16 位 PCM 合成，每案例固定说话人与人设绑定并适配各系统接口，编排器以 200 ms 逻辑节拍推进，逻辑时间在规划合成与转写期间暂停，形式任务窗口为 1,800 s 逻辑时间与 600 s 双边静默，闭合需满足播放排空与静默条件。
- **训练与评测数据**：20 个领域 100 个基础场景，其中 51 个工具增强对应 408 个案例，49 个纯语音对应 392 个案例，每场景沿人群声学与追问三维二值网格展开为 8 种配置，共 800 个案例，评测 13 个系统。
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量及训练耗时，无模型训练阶段，各系统使用官方音频接口与推荐推理配置运行，合成转写与审计使用外部模型服务。
- **核心超参数与配置**：用户脚本与闭合控制使用 gpt-6-luna 温度 0.2，播放音频转写使用 Whisper large-v3，语义审计仲裁与证据落地使用 gpt-6-luna 温度 0，任务窗口 1,800 s 逻辑时间与 600 s 双边静默，最多 2 轮尾部追问。
- **推理速度与部署开销**：原文未披露延迟首音延迟实时率显存或参数量，仅给出形式任务窗口闭合条件与稳定性窗口，推理成本需按官方接口实测。
- **开源产物与协议状态**：论文文末给出项目页代码仓库与数据集链接，本次检查三者均可达，但第三方托管不等同于作者权重开源，8 个开源模型缺乏原生工具接口因而缺席工具轨，MOSS-Live 工具结果待更新，复现细节需对照仓库实际内容确认。
- **附录与补充材料要点**：附录给出 20 个领域完整分类运行时与主干配置，ATC 形式定义与覆盖率，5 人餐厅完整时间线与工具轨迹及诊断分解，明确 Pure JTS 口径与公平性分母规则。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.34920v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：20领域100基础场景经三组二值条件扩展为800测例，双轨加三轴ATC设计完整且支持配对比较。

- 核心优势：13系统同轨对比揭示专有62.24%与开源低于20%分层，并以Pure JTS与人数及累积辅助做直接对照。

- 核心优势：双独立语义评审加仲裁加Source Grounding结合确定性访问控制与严格时序因果校验。

- 主要短板：工具框架信任智能体声明请求者身份而无外部声纹核验，合成确定性音色难以代表真实混响口音。

- 主要短板：每模型每测例仅报告单次有效运行且无显著性检验，语义审计无人类一致性标定且缺延迟吞吐实测。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
