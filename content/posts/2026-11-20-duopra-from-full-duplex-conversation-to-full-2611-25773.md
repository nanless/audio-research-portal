---
title: "Duopra: From Full-Duplex Conversation to Full-Duplex Agency"
date: 2026-11-20
draft: false
tags: [语音代理规划与工具使用, 强化学习, 全双工语音交互, 语音, 流式处理]
categories: [论文速递]
description: "针对前端发起不足限制前端后端任务成功的问题，Duopra 以统一动作接口兼顾直接调用与自然语言委托并经三阶段训练，在同一后端下把任务成功率从 4.7% 提升到 44.7%，代价是自发性反向确认音丢失与语音修复仍需独立验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25773"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从流畅对话到可靠办事：Duopra 如何学会发起并完成工具调用"
paper_digest_original_title: "Duopra: From Full-Duplex Conversation to Full-Duplex Agency"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25773v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25773v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25773v1.pdf"
paper_digest_primary_task: "语音代理规划与工具使用"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.voice-agent-planning","label":"语音代理规划与工具使用"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对前端发起不足限制前端后端任务成功的问题，Duopra 以统一动作接口兼顾直接调用与自然语言委托并经三阶段训练，在同一后端下把任务成功率从 4.7% 提升到 44.7%，代价是自发性反向确认音丢失与语音修复仍需独立验证。"
paper_digest_reader_sections: [{"heading":"问题本质：前端发起不足为何先于后端执行成为瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：语音输入如何经思考发声两路变成话语与行动","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制：统一动作接口如何兼顾直接调用与自然语言委托","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"训练过程：协议示范、执行奖励与投影修复如何分步落实","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"主实验验证：成功率提升来自发起而非执行变强","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"对话与语音代价：任务学习是否挤占轮次控制与可懂度","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界：何时值得尝试与复现第一步该做什么","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University","Tencent"],"name":"Chiyu Chen"},{"affiliations":["Shanghai University"],"name":"Pengzhou Cheng"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yuezhao Ma"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Xiaocheng Li"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Can Liu"},{"affiliations":["Tencent"],"name":"Haonan Hu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yao Yao"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yifei Yang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yijie Lu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Taolei Wang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yansi Li"},{"affiliations":["University of Bristol"],"name":"Muhuan Wu"},{"affiliations":["Tencent"],"name":"Chenglu Sun"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Gongshen Liu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Zhuosheng Zhang"}]
paper_digest_abstract_sha256: "54f7ccae757a99d493c23a7601b394870f3bc4f780f076a961f01f16b99b30fe"
paper_digest_sidecars: {"citation.bib":{"sha256":"ecf6bae79d6959fe7253106a0eb9de3a7e4f303488d4f0419155eae3a414e419","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.bib"},"citation.json":{"sha256":"b6b12070deb12b828bb43e07039c2870af88efa7d2498b5fcf6b11ed279920b1","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.json"},"citation.ris":{"sha256":"0cb7d238fe7c1926a0f397ac5ce8de9de2d519c002b734af737c4bb0a628604f","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"88321bbe3c75b584704e4dde429f13127b4343e72cdd364af3cbf68c012896b4","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "66065158777c60a69fe795d13928b92434c9c9637a3038ab5d48a284e964654a"
paper_digest_api_reader_plan_sha256: "4933ea9821b260db4016eff7ffbcc9b2e07952841b00fa4bea0e0c46f22fce69"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "983e96f2d7b116c96d71e0e2a2920635349d8878e7ed000a6e1bdff2c520eae4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "7a5236fac033e3c524888972763d70ed005e4638dc621cb188d9a4cf7d7beaf7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "59965799086c0c74d8f8f410c94af177a6ecf2f8cbbb60181843f82956d34bf8"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3e2cf72a07431aed71f87069fee9f52de3cc483441e89e3689e755e18c361a98"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 从流畅对话到可靠办事：Duopra 如何学会发起并完成工具调用

> 英文题目：*[Duopra: From Full-Duplex Conversation to Full-Duplex Agency](https://arxiv.org/abs/2611.25773v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.4/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chiyu Chen：Shanghai Jiao Tong University；Tencent
- Pengzhou Cheng：Shanghai University
- Yuezhao Ma：Shanghai Jiao Tong University
- Xiaocheng Li：Shanghai Jiao Tong University
- Can Liu：Shanghai Jiao Tong University
- Haonan Hu：Tencent
- Yao Yao：Shanghai Jiao Tong University
- Yifei Yang：Shanghai Jiao Tong University
- Yijie Lu：Shanghai Jiao Tong University
- Taolei Wang：Shanghai Jiao Tong University
- Yansi Li：Shanghai Jiao Tong University
- Muhuan Wu：University of Bristol
- Chenglu Sun：Tencent
- Gongshen Liu：Shanghai Jiao Tong University
- Zhuosheng Zhang：Shanghai Jiao Tong University

## 📌 核心摘要

**问题与瓶颈：** 全双工代理要同时管说话时机与做事步骤，输入是带填充词、停顿与自我修正的英语语音，输出既要接话与打断恢复，又要调对工具并播报结果。常见前端-后端做法把听说留给前端，把多步执行交给后端，前端只发一段自然语言请求。论文在 Full-Duplex-Bench v3 上的流式复测发现，配 Qwen3-8B 后端的 Realtime-Venus-Audio 加 Harness 只在 11.0% 会话里形成可执行请求，Pass@1 仅 4.7%，即使后端完全正确也超不过发起上限。笔记本改平板、2 件改 1 件而加购依赖先查编号的例子说明，信息在变且步骤有依赖，前端没发全后端无法补救。

**核心思路与方法架构：** 核心直觉是把后端也看成一个工具，让直接调领域工具与委托后端走同一套动作接口与同样的完整性要求。音频按 1 s 切片流入，语言模型即思考器每步输出轮次标记与可说文本，语音生成器即说话器依思考器隐状态发声，私有工具动作以 JSON 藏在 `<delegate>` 段，执行结果以 `<backend>` 观察插回流中。思考器可用检索动作取回模式，再用调用动作调领域工具或调查询工具 query，参数是一段含最新值、步骤与依赖的自包含自然语言。训练分三段：协议监督微调教会按模式调用与缺值追问，全双工强化学习用 Dr.GRPO 在仿真沙盒里按时限与结果分级奖励完整执行，最后只训投射器把更新后思考器的说话条件拉回原方向，思考器与说话器主体冻结。

**关键实验与核心代价：** 主基准是 100 条录音、12 个仿真接口的 Full-Duplex-Bench v3，同一流式管线下每配置 300 会话，Qwen3.8-27B 作参数与回答裁判，通过要求工具名、参数与数量完全一致。同配 Qwen3-8B 后端时，前端换成 Duopra (Backend) 后 Pass@1 从 4.7% 到 44.7%，配对自助 95% 区间为 31.3% 到 48.7%，工具名 F1 为 81.8%，高于最强可比前端-后端基线 DuplexOmni 的 60.0%，直接调用达 47.7%，换 DeepSeek 后端达 49.3%。训练先把有领域调用的会话从 10.3% 拉到 81.3% 以上，再把多步请求通过率从 0.0% 拉到 27.5%，但正确工具配错参数成为最大残留错误。对话侧三项接管率在 FDB v1.0 上均好于基座，代价是 55 个测试项上自发短应声消失，中断后接话质量从中期到最终略降。语音侧固定思考器只换投射器后，选择集上中文字符错降幅过半、英文词错下降，委托链路的事实回答时延也长于双路可见。

**适用边界与深读导览：** 结论依赖单轮预录请求、仿真接口与冻结后端，训练语音为合成、说话人有限，基座只验证了 9B 的 Realtime-Venus-Audio，未覆盖用户随回答再追问的多轮状态维护与更杂的真实噪声。想深究可看第 3 节的信息充分与成功判定、第 4 节三段训练与奖励分级，附录 B 到 D 有任务族、接口原文与裁判校验，附录 F 有发起与执行分解、错误类迁移与投射器修复的对照。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：前端发起不足为何先于后端执行成为瓶颈

全双工交互模型的最大特点是边听边说，什么时候听、什么时候说、被打断时是否停下，都由同一个流式策略连续决定，这部分能力可以称为会话能力。完成任务还需要另一部分能力，也就是任务能力，包含何时行动、是否保留用户最新意图、是否把多步操作做完。常见做法是把两者拆成前端与后端，前端负责持续对话并把请求写成自然语言转交给后端，后端再决定如何调用工具。执行过程可以外包，但没有发出的请求无法被执行，写得不完整的请求还会误导后端，因此前端是否忠实发起请求成为关键。

基准 FDB v3 恰好考验这种衔接，它提供 100 段带口吃、填充词与自我修正的英文录音和 12 个模拟接口，其中 66 段需要 1 次调用，18 段需要 2 次调用，16 段需要 3 次调用。以电商请求为例，用户先说搜索笔记本，随即改为平板，又把数量从 2 件改为 1 件，而加购依赖搜索返回的商品编号。信息充分性要求以最后 1 次修正为准，缺必需参数要追问，缺可选参数可用默认值，成功还要满足调用与金标准一致、回答只依据返回结果、行动及时。

要直观理解演变请求为何考验发起环节，可以先看下面这张双栏时间线，它把同一段用户修正放在两种可见性下对比，重点观察转交次数与旧值如何被取代。

[![原论文 Figure 1：Frontend responsibility in an evolving FDB v3 request (ecommerce_19; schematic).](https://arxiv.org/html/2611.25773v1/fig1_timeline.png)](https://arxiv.org/html/2611.25773v1/fig1_timeline.png)

*论文图 1：Frontend responsibility in an evolving FDB v3 request (ecommerce_19; schematic)（原论文 Figure 1）。*

上栏前端看不到领域工具模式，只能把每次听到的片段依次转交给后端，共出现 4 次转交，后端每次都要重新思考，旧的笔记本与 2 件请求需要以撤销方式废弃。下栏 Duopra 直接看到工具模式，无需转交即可发出修正后的搜索与加购调用，共 0 次转交，同时保留查询工具作为备用。图中划线与弧线表示被取代的旧值，曲线的回退表示撤销。该示意对应的委托成功案例在原文表 16 案例甲中给出实测记录。由此可以判断，执行可以外包，但发起忠实请求仍是前端不可推卸的责任。

在自有流式流水线中，实时语音模型加配套转交机制只在 11.0% 会话中发出转交，即使后端执行完全正确，任务成功率也无法超过这一转交上限。多数失败发生在领域工具执行之前，这说明限制首先在发起环节，而非后端能力不足。

### 方法全景：语音输入如何经思考发声两路变成话语与行动

Duopra 基于 9B 参数的实时语音模型构建，思考器是负责双工控制与文本生成的语言模型，发声器是根据思考器隐状态合成语音的语音生成器。音频按每一秒切为一个单元，思考器在每个单元输出听或说的状态标记与可被读出的文本，同时可在私有区间写入不被读出的动作。运行时校验每次调用，并在结果返回后的第一个单元边界把结果作为观察注入流中，思考器再依据新观察组织回答。

训练分为 3 个阶段，第一阶段用单元级会话做协议微调，教会模式调用、追问缺项与播报结果，得到 Duopra-SFT 检查点。第二阶段在沙盒中做全双工强化学习，用执行奖励训练及时完整的调用与有依据的回答，依次得到 Duopra-RL1 与 Duopra-RL。第三阶段冻结思考器，只训练投影层，把发声条件拉回原始方向，得到最终的 Duopra 模型。直接调用与后端委托共用同一动作接口，执行标准一致。

要把三阶段的输入输出与冻结更新关系 1 次看清，可以沿这张流程图的箭头先看主路径，再看反馈回路，留意火焰与雪花标记的分工。

[![原论文 Figure 2：Duopra’s three training stages on RV-Audio (h_j: thinker hidden state at spoken-token position j;…](https://arxiv.org/html/2611.25773v1/fig2_method.png)](https://arxiv.org/html/2611.25773v1/fig2_method.png)

*论文图 2：Duopra’s three training stages on RV-Audio (h_j: thinker hidden state at spoken-token position j; P_\phi_0, P_\phi: base and Stage-3 projectors; c_j: talker conditioning)（原论文 Figure 2）。*

上排第一阶段只更新思考器，输入为含工具模式的音频流，输出的听说标记、文本与私有工具字段都参与损失计算。中排第二阶段为思考器加装可训练适配器，每个任务采样 8 条轨迹，运行时分别走模拟工具与冻结后端，评分器结合规则与大模型裁判给出奖励，再以组相对优势做策略更新。下排第三阶段缓存原始思考器与强化后思考器在同一前缀下的隐状态，只训练投影层。图例中火焰表示训练，雪花表示冻结，尖括号标记为双工控制符号，花括号内容为私有动作且从不被读出，中括号内容为观察。

### 核心机制：统一动作接口如何兼顾直接调用与自然语言委托

每个单元前端读入截至当前的音频与已注入的观察，观察中包含可见工具的模式与此前调用的结果，输出包含轮次状态、文本与可能为空的私有动作。该策略是因果的，只能依据历史与当前输入决定当前输出，不能看到未来。会话决策管何时听、说、停或恢复，任务决策管调哪个工具、用哪些参数，文本中服务请求的部分负责追问缺项与播报结果。

\[\pi_{\theta}\left(y_{t}\mid x_{\leq t},\,e_{\leq t},\,y_{\lt t}\right).\]

该式把流式策略写成给定历史的概率分布，采用条件概率形式是因为音频与结果随时间到达，决策必须因果。式中左侧为当前单元的三元输出，右侧条件为截至当前的音频、观察与历史输出。下标表示时间，听或说两种状态控制是否发声，文本经发声器读出，私有动作送运行时执行。若去掉历史条件，模型将无法处理修正与依赖，若允许看到未来，则不符合流式部署。计算出的分布先采样出状态与文本，再由运行时决定是否触发工具，结果又成为下一步的条件。

动作统一为选择与调用两种形式，选择用于检索最相关的 3 个模式，调用写明工具名、参数对象与模式版本。直接调用暴露领域工具，后端委托只暴露查询工具，两者兼备则同时暴露。查询工具的参数是一段自包含自然语言任务，需写清最新取值、有序步骤、条件与依赖，例如先查学期日期再判断是否为假日，并指明第二个调用的输入来自第一个结果。运行时校验调用合法性，结果携带调用编号进入流中，而发声条件的掩码只允许公开语音影响发声器。

信息是否充分与走哪条路线无关，每个必需参数都需有来源，用户话语中以最后 1 次修正为准，其次是前次调用结果与会话上下文。缺必需参数只追问缺项，行动则受罚，缺可选参数用默认值。任务成功需同时满足调用与金标准在工具与参数上完全一致且无多无少，回答只依据已返回观察并覆盖请求，信息充分后在 3 个单元内行动。会话控制要求用户说完接管、真实停顿不抢、打断后在 2 个单元内停下，并能扛住反向确认音与背景音。

### 训练过程：协议示范、执行奖励与投影修复如何分步落实

第一阶段在 12,800 场会话池上做协议微调，其中中文 8,951 场，英文 3,849 场，任务导向 7,680 场，能力保持 5,120 场。训练只更新思考器的变换层与最终归一化，冻结输入嵌入、输出头、音频编码器与语音合成相关模块。损失对公开文本、私有动作与双工控制符号同等加权，先在会话内对被监督位置取平均，再在会话间取平均，共更新 400 步。

\[\mathcal{L}_{\mathrm{SFT}}=-\mathbb{E}_{d}\!\left[\frac{\sum_{j\in\mathcal{M}(d)}\log\pi_{\theta}(z_{j}^{*}\mid H_{j}^{*})}{|\mathcal{M}(d)|}\right].\]

该损失采用负对数似然的平均形式，因为示范的每个被监督符号都应被复现。分子是对会话内所有被监督位置的对数概率求和，分母为位置数，外层再对会话取期望。若某类符号权重过高，模型会偏向说话而忽视动作，平均处理可保持协议完整。计算出的梯度只流向思考器可训练部分，用于形成第二阶段的起点。

第二阶段新增的 5 类任务各有不同的执行要求，下表列出它们的模式与期望行为，是理解奖励设计的前提。

| Family | Task pattern | Expected behavior |
| --- | --- | --- |
| D1 Single step | A disfluent spoken request requiring one tool call. | Call the tool directly if visible; otherwise use query. Act within 3 units after the request ends. |
| D2 Multi-step | Independent steps, result dependencies (“the cheapest one”), or conditional branches. | Complete all steps directly, or delegate a task specifying the steps, conditions, and dependencies. |
| D3 Corrections | A value is corrected or a request is abandoned mid-sentence. | Use the latest value and skip abandoned requests. |
| D4 Sufficiency | Four variants: complete information, a missing required value, missing optional values, or a value obtained from a previous step. | Ask only for missing required information; otherwise proceed with the available values and tool results. |
| D5 Recovery | The backend requests missing information, returns an error or partial result, or a tool fails transiently. | Request missing values, retry a recoverable failure once, or report partial completion accurately. |

单步任务要求信息充分后在 3 个单元内行动，可见则直接调用，否则用查询工具。多步任务包含独立步骤、结果依赖与条件分支，需 1 次做完或把步骤与依赖写进委托。修正任务以最新取值为准并跳过已放弃请求。充分性任务分 4 种变体，只追问真正缺失的必需项。恢复任务要求追问缺项、最多重试 1 次或如实报告部分完成。训练中新任务占 45%，回放旧任务占 55%，其中 30% 的旧任务同时可见查询工具但仍期望直接调用。工具可见性上，587 个训练任务全部可见，317 个部分经后端，183 个全部经后端。

第二阶段每个任务用相同脚本音频采样 8 条轨迹，运行时对直接调用走模拟工具，对委托走冻结的 27B 参数后端，温度为 0。评分器比对记录调用与金标准，并用大模型裁判核验公开话语的依据，验证引用是否真实出现且早于发言。奖励分两支，旧家族用分项奖励，新 5 类用结局映射。信息充分后 3 个单元内行动给正奖励，用了被修正前的旧值每个扣 0.6，完整执行按快慢给 1.2、1.1 或 0.9，部分完成给 0.1 加 0.15 乘以完成比例，虚构结果扣 0.95，重复执行扣 0.2，可见单步委托成功扣 0.05。打断后 2 个单元内停下无罚，超时逐步加罚。

\[\begin{split}\mathcal{J}_{\mathrm{RL}}(\theta)&=\mathbb{E}\!\left[\frac{1}{|I|L}\sum_{i\in I}\sum_{j\in\mathcal{M}(\tau_{i})}s_{ij}\right],\\ s_{ij}&=\min(\rho_{ij}A_{i},\bar{\rho}_{ij}A_{i})-\beta K_{ij}.\end{split}\]

该目标采用组相对优势的裁剪形式，因为无需单独价值模型即可比较同任务多条轨迹。优势为单条奖励减去组内均值，比率是当前策略与采样策略的概率比，裁剪区间由系数控制，散度项以系数加权锚定到微调后参考策略。若优势为正，裁剪防止单步过大，若为负，则限制恶化。归一化常数固定，组内至少 4 条被评分且奖励有方差才保留，否则重采。计算出的梯度只更新思考器的低秩适配器。

不同检查点使用的思考器与投影层组合不同，下表给出评测时每种命名的实际构成，避免把阶段效果与语音修复混为一谈。

| Model | Thinker | Projector |
| --- | --- | --- |
| Duopra-SFT | after Stage 1 | base |
| Duopra-RL1 | after Stage 2a | base; used on FDB v1.0, FDB v1.5, VoiceBench and FDB v3 (Direct) |
| Duopra-RL | after Stage 2b | base; used for the projector drift analysis (Figure 5b) |
| Duopra | Duopra-RL | Stage-3 projector (all benchmarks) |

微调后检查点使用第一阶段思考器加原始投影，中间检查点使用第二阶段前半思考器加原始投影，强化后思考器加原始投影用于漂移分析，最终模型使用强化后思考器加第三阶段投影。所有带 Duopra 标记的基准评测都用最终组合，消融中会单独说明投影替换。第三阶段缓存 931 场会话共 35,154 个发声位置的成对隐状态，用 8,192 个符号为一批更新 450 步，目标是余弦距离加权重为 0.01 的参数偏离惩罚。

### 主实验验证：成功率提升来自发起而非执行变强

Duopra 的三阶段训练按协议示范、完整双工强化与发音修复推进，数据从示范会话逐步过渡到需要对话控制、规划与委托的任务，阶段 1 与阶段 2 语音为合成语音。

下面的训练数据总表汇总了各阶段的数据规模与构成，同一流水线下对照发起与完成的变化，重点看调用发起与多步完成的消长。

| Stage | Set | Size | Composition |
| --- | --- | --- | --- |
| 1 | Training pool | 12,800 sessions | 8,951 Chinese, 3,849 English; 7,680 task-oriented, 5,120 retention (of the pool: direct calls 7.5%, tool discovery 6.0%, clarification 4.0%, stopping 7.5%, redirection 8.7%, continuing after a backchannel 4.8%, long reading 3.5%, multi-turn dialogue 8.0%, other tool tasks 10.0%). |
| 1 | Validation; test | 4,711; 4,195 sessions | kept apart from training; they include the 16 + 16 held-out tools |
| 2a | Task pool | 7,908 tasks | clarification-to-answer chains 34.2%, direct calls and discovery 31.7%, stopping and resuming 9.8%, redirection vs. backchannel 7.5%, asking first 5.9%, answering without a tool or unavailable capability 4.5%, corrections and cancellations 3.6%, speech-to-tool switches 2.9% |
| 2b | New tasks | 1,087 training; 152 validation | training: D1 175, D2 350, D3 86, D4 368, D5 108; all required tools visible 587, some backend-only 317, all backend-only 183; 681 English, 406 Chinese. Validation: D1 30, D2 98, D4 24 |
| 2b | Sampling mixture | 45% new, 55% Stage-2a | new tasks and Stage-2a tasks are sampled 45:55; in 30% of the Stage-2a samples query is also visible, and the intended behavior there remains a direct call |
| 3 | Cached features | 931 / 100 / 210 sessions | The training, validation, and test sets contain 931, 100, and 210 sessions, yielding 35,154, 3,464, and 8,114 hidden-state pairs, respectively. |

该表显示阶段 1 训练池为 12,800 场会话，其中 8,951 场中文、3,849 场英文，7,680 场任务导向、5,120 场保持，池内直接调用占 7.5%、工具发现占 6.0%、澄清占 4.0%、停止占 7.5%、重定向占 8.7%、跟随附和后继续占 4.8%、长阅读占 3.5%、多轮对话占 8.0%、其他工具任务占 10.0%；验证与测试为 4,711 场与 4,195 场会话，与训练隔离并包含 16 + 16 个留出工具。阶段 2a 任务池为 7,908 个任务，澄清到回答链占 34.2%、直接调用与发现占 31.7%、停止与恢复占 9.8%、重定向与附和占 7.5%、先提问占 5.9%、无工具或无能力回答占 4.5%、纠正与取消占 3.6%、语音到工具切换占 2.9%。阶段 2b 新任务为 1,087 个训练与 152 个验证，训练中 D1 为 175、D2 为 350、D3 为 86、D4 为 368、D5 为 108，全部所需工具可见为 587、部分仅后台为 317、全部仅后台为 183，681 个英文、406 个中文，验证中 D1 为 30、D2 为 98、D4 为 24；采样混合为 45% 新任务与 55% 阶段 2a 任务，新任务与阶段 2a 任务按 45:55 采样，其中 30% 的阶段 2a 样本中查询也可见但预期行为仍为直接调用。阶段 3 缓存特征为 931 场、100 场与 210 场会话，训练、验证与测试集分别包含 931 场、100 场与 210 场会话，产生 35,154 个、3,464 个与 8,114 个隐状态对。

要看清训练是先解决发起还是直接解决完成，可以看下面按会话结局与按需调用次数拆分的训练进程图，重点比较无调用会话与多步完成的消长。

[![原论文 Figure 3：Training first reduces no-call sessions and then turns calls into multi-call completions (FDB v3,…](https://arxiv.org/html/2611.25773v1/fig3_analysis.svg)](https://arxiv.org/html/2611.25773v1/fig3_analysis.svg)

*论文图 3：Training first reduces no-call sessions and then turns calls into multi-call completions (FDB v3, 300 sessions per configuration; counts in Table 12)（原论文 Figure 3）。*

上图按通过、工具错、缺调用等给出每配置 300 场的唯一结局，右侧给出通过与无调用占比：RV-Audio + Harness 通过为 4.7%、无调用为 89.7%，Duopra-SFT 通过为 26.0%、无调用为 55.3%，Duopra-RL1 通过为 26.7%、无调用为 43.7%，Duopra 通过为 47.7%、无调用为 18.7%。下图按需 1 次、2 次、3 次调用拆分通过率，66 段、18 段与 16 段录音各占一组：需 1 次调用时 Duopra-SFT、Duopra-RL1 与 Duopra 分别为 38.4%、40.4% 与 58.1%，需 2 次调用时分别为 3.7%、0.0% 与 24.1%，需 3 次调用时分别为 0.0%、0.0% 与 31.3%。第二阶段前半调用更多但通过率几乎不动，多步请求仍为 0.0%，最终模型把调用转为完成。

### 对话与语音代价：任务学习是否挤占轮次控制与可懂度

任务提升不能以丢失会话能力为代价。轮次接管率上，最终模型相比原始模型在用户说完、真实停顿与被打断三项均有改善，停顿接管越低越好，其余越高越好。但保持并非均匀，中间检查点到最终模型的打断接管略有回落，3 个训练后检查点在 55 个反向确认音条目上均无产出，散度为 1.000。FDB v1.5 测的是用户反向确认音后能否继续，属不同行为。语音问答均值从 37.9% 升至 55.9%，但原始模型多选题解析失败较多，分数含解析失败影响。

在讨论轮次接管率之前，需要先确认流水线本身的测量误差，下表用同一套脚本在对照模型上做了复现核对。

| FDB v1.0 metric | Reported | Ours |
| --- | --- | --- |
| Turn-taking TOR↑ | 88.2 | 86.3 ± 4.0 |
| Pause TOR, real↓ | 46.3 | 38.7 ± 1.8 |
| Interruption TOR↑ | 98.5 | 99.2 ± 1.4 |

已发表的轮次、停顿与打断接管率分别为 88.2、46.3 与 98.5，自测为 86.3、38.7 与 99.2，三项差异均在 10 个百分点以内。该核对说明自有流水线的时钟对齐与转录流程可用，后续三项比较以自测为基准。

思考器更新会改变送往发声器的条件，造成可懂度下降。第三阶段冻结思考器，只训练 3,737,088 参数的投影层，目标是把强化后隐状态的投影方向拉回原始方向，同时用参数偏离惩罚锚定到原始权重。特征验证集上余弦从 0.930 升至 0.973，重放分析上从 0.929 升至 0.974，微调后为 0.935。221 条固定话术选择集上中文字符错误率从 6.01% 降至 2.58%，英文词错误率从 9.74% 降至 7.66%。

\[\mathcal{L}_{\mathrm{proj}}=\mathbb{E}_{j}\!\left[1-\cos(u_{j}^{\phi},u_{j}^{0})\right]+\lambda\lVert\phi-\phi_{0}\rVert_{2}^{2}.\]

该损失采用余弦距离加参数偏离惩罚，因为方向一致才能恢复音色与清晰度，而权重锚定可防过拟合。式中目标方向来自原始思考器经原始投影并归一化，当前方向来自强化后思考器经可训练投影并归一化，期望对发声位置取平均。若方向完全一致，余弦项为 0，若偏离大则接近 2。惩罚项系数为 0.01，约束投影权重不远离初始值。计算出的梯度只更新投影层，用于生成最终模型的发声条件。

要判断语音修复是否只是数值变化，可以看下面固定文本与重放前缀下的误差与相似度对比，留意均值与低分位数的同步移动。

[![原论文 Figure 5：Talker conditioning and speech errors across training stages.](https://arxiv.org/html/2611.25773v1/figA_projector.svg)](https://arxiv.org/html/2611.25773v1/figA_projector.svg)

*论文图 5：Talker conditioning and speech errors across training stages（原论文 Figure 5）。*

左图在 88 条固定文本上比较原始、中间检查点与最终模型的字符与词错误率，中间检查点误差最高，最终模型回落。右图在 2,000 场重放上比较与原始发声条件的余弦相似度，虚线为 1.0，最终模型均值与 5% 分位数均上移。由于 221 条选择了最优投影，表格中的降幅应视为选择集证据，而非独立泛化保证。发声器本体、文本嵌入与声码器全程冻结，修复只改变投影。

### 适用边界：何时值得尝试与复现第一步该做什么

综合来看，该研究的结论依赖若干明确条件。模型只基于单一实时语音模型，后训练语音为合成且音色有限，工具为确定性模拟，请求为预录且无后续追问。已发表数字分属不同流水线与裁判，只能作背景参考。统计上只对录音做配对自助重采样并保留 3 个种子，不估计训练本身的随机性。多步与条件分支仍难，参数细节如字母与数字混淆仍是主要残留。

何时值得尝试可以按顺序判断，若已有流式语音助手需要同时保住轮次控制与工具执行，且领域模式可完整暴露，前端发起不足是主要瓶颈，则统一接口与三阶段思路值得参考。复现第一步应先跑通自有流式流水线，用直接调用暴露验证调用占比与条件成功率的拆分，确认发起是否为上限，再核对轮次接管的复现误差。还需补的验证包括更多基座与真实口音、真实多轮追问、端到端时延与成本、投影修复在未见话术上的独立泛化，以及自发性反向确认音的恢复。

从机制分工看，该工作把前端定义为每秒单元内同时决定轮次与私密工具动作的单策略，直接调用与经由自然语言任务的后端委派共用同一调用操作，模式可见性分为仅后端、仅直接与两者皆见 3 种暴露，执行结果在到达后的首个单元边界以观察回填。训练按三阶段推进：协议监督先学会按模式调用、缺必需参只追问缺项、播报只依据已到达观察；全双工强化再按信息充分性奖励及时完整执行，信息充分时在请求结束后三单元内行动并以最新纠正值为准，多步依赖与条件分支、不同可见性下的委派及失败恢复在第二阶段后半程加入；最后冻结思考器只训练投影器，使语音条件方向回到基座附近。执行是否成立以调用记录与金标准在工具与参数上完全一致且无缺失多余为准，这也解释了为何训练先减少无调用会话、再把调用转化为多步完成，以及为何双可见下成功几乎都来自前端自身直接调用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25773v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
