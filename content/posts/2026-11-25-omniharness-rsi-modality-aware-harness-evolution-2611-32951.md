---
title: "OmniHarness-RSI: Modality-Aware Harness Evolution for Omnimodal Understanding"
date: 2026-11-25
draft: false
tags: [音视频问答, 工具增强与约束解码, 音视频, 模型评估]
categories: [论文速递]
description: "针对全模态问答中路由、定位与感知纠缠导致通用支架进化失效的问题，论文提出按三维度因式分解支架并做模态引导的聚焦改写与验证筛选，在三个基准测试集上分别提升 8.86、8.13 与 6.23 个百分点并实现跨数据集迁移，而代价是部分基准工具调用略增且绝对分数仍落后于最强闭源配置。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32951"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "模态感知支架进化如何提升冻结模型的全模态理解"
paper_digest_original_title: "OmniHarness-RSI: Modality-Aware Harness Evolution for Omnimodal Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32951v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32951v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32951v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全模态问答中路由、定位与感知纠缠导致通用支架进化失效的问题，论文提出按三维度因式分解支架并做模态引导的聚焦改写与验证筛选，在三个基准测试集上分别提升 8.86、8.13 与 6.23 个百分点并实现跨数据集迁移，而代价是部分基准工具调用略增且绝对分数仍落后于最强闭源配置。"
paper_digest_reader_sections: [{"heading":"全模态问答为何不能只靠调视觉链路：路由、定位与感知的耦合困境","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"OmniHarness-RSI 三段式流水线：可执行支架、模态引导进化与泛化筛选","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"因式分解支架如何把路由、检索与专家感知落到可改代码","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"从轨迹归因到验证集筛选：每轮只提交一个候选支架的进化闭环","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"三个基准上的准确率、跨数据集迁移与开销变化","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"冻结大模型下调支架的适用边界与复现核对清单","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Shilin Ma"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Xingming Shui"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Jinglin Chen"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Zetong Zhao"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Jingqi Tian"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Deyi Zhu"},{"affiliations":["Tsinghua Shenzhen International Graduate School, Tsinghua University"],"name":"Yansong Tang"}]
paper_digest_abstract_sha256: "cb54e1d434ee1efa1959f9828c76713575008c12b4c1aba7ff38f28b814689d0"
paper_digest_sidecars: {"citation.bib":{"sha256":"b144fd4ea74b0f3dbb60310e7508e4848c186c8c0814abf8fcd39dd00a841b9a","url":"/audio-research-portal/client/papers/2026-11-25/2611-32951/citation.bib"},"citation.json":{"sha256":"0dd7d5998f21e60c64c7e2f24e61659b43b3b0fd5e4a56f4ec621f5124dc162e","url":"/audio-research-portal/client/papers/2026-11-25/2611-32951/citation.json"},"citation.ris":{"sha256":"64bd67e41103f4e81d70d3468d42e1d7125b08f97a00749ebab878468211dcfb","url":"/audio-research-portal/client/papers/2026-11-25/2611-32951/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"77d8138becd241faf266e5e217fcd4c4338ace3bc0d522085f1bd1ff8abd5998","url":"/audio-research-portal/client/papers/2026-11-25/2611-32951/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "da80064603286fc9c765972187fc986f2b834b274468fb7f8cb36983d06bbf58"
paper_digest_api_reader_plan_sha256: "09af0f635c43326e428c5ed66efe3ec3c3d837408cfec5c558e47927245a4d33"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9b21c0959229506fb142db9ce66834113d37bfb3a88d4642e088ee9d3ca14e9e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "785929b988edf24cdd11fea8a5ec14230dd67774351b7050c04e5a56de8b49bb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "02cde0c6774a2f71e7ba16467a5f3271be2f1577706d07cf4680f602c7e63cc7"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5a998cc6f96b3cbef2015c47ed843e8cfe330817fefd694265aae9a150fb388a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 模态感知支架进化如何提升冻结模型的全模态理解

> 英文题目：*[OmniHarness-RSI: Modality-Aware Harness Evolution for Omnimodal Understanding](https://arxiv.org/abs/2611.32951v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [音视频问答](/audio-research-portal/papers/?concept=task.av-question-answering)
- **研究方法**：[工具增强与约束解码](/audio-research-portal/papers/?concept=method.tool-augmentation)
- **信号**：[音视频](/audio-research-portal/papers/?concept=signal.audiovisual)
- **研究重点**：[模型评估](/audio-research-portal/papers/?concept=research_focus.evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 7.6/10 | 技术严谨 7.0/10 | 实验充分 7.4/10 | 清晰度 7.0/10 | 影响力 6.8/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Shilin Ma：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Xingming Shui：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Jinglin Chen：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Zetong Zhao：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Jingqi Tian：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Deyi Zhu：Tsinghua Shenzhen International Graduate School, Tsinghua University
- Yansong Tang：Tsinghua Shenzhen International Graduate School, Tsinghua University

## 📌 核心摘要

**问题与瓶颈：** 本文处理的选择题式全模态问答以视频、音频和文字问题为输入，以选项答案为输出，要求按需调用不同模态证据并做时间对齐与跨模态推理。已有可执行流程递归自我改进方法冻结基础模型参数，只改工作流编排，在以视觉为主的视频理解上有效。把它直接搬到全模态场景时，调用哪个模态与专家、去哪里找证据、怎样解读证据三类策略相互耦合，失败难以归因到具体策略，无针对性的多处改动又难以评估单项效果。

**核心思路与方法架构：** 与同架构下不区分模态的演化基线相比，本文增量在于把可编辑流程按模态能力分解为三维，再用归因结果指导定点代码改写。沿一个样本看，规划器 Qwen3.8-27B 先读问题与已有上下文并选定专家或工具，视觉检索 SigLIP2 与音频检索 CLAP 连同语音转写与强制对齐模块负责定位相关帧与音频段，视觉专家 Qwen3-VL-8B-Instruct 与音频和音视频专家 Qwen2.5-Omni-7B 负责解读所选证据，规划器再综合观察作答，全程所有基础模型参数冻结，只有流程配置可改。演化外层由 GPT-6.1-Sol 承担，它在演化集上评测并记录含工具调用、检索证据、专家观察与正误标签的执行轨迹，对错误样本标出受影响模态与具体策略，再针对一类失败模式挑含正反例的试验子集做本地改写与回归检查。每一轮只提交一个候选流程，用留出验证集上答对题数净增是否超过阈值决定接受与否，最多演化 10 轮且连续 3 轮被拒即早停，推理时每题最多 10 步规划交互，测试集不参与演化与选择。

**关键实验与核心代价：** 在 WorldSense、Daily-Omni 和 OmniVideoBench 三个基准上按约 40:10:50 划分演化集、验证集和测试集，以答案准确率（%，越高越好 ↑）为指标，模态引导演化相对初始分解式智能体在测试集上分别提升 8.86、8.13 和 6.23 个百分点，达到 63.06%、82.21% 和 48.40%。同架构下最强可比的不区分模态演化基线测试集仅为 54.55%、75.61% 和 45.02%，本文方法分别高出 8.51、6.60 和 3.38 个百分点，而单专家架构叠加该不区分模态演化甚至在前两个基准测试集下降 1.56 和 4.14 个百分点，说明仅分解空间而不做模态引导仍不足。在完整集上该冻结流程取得 Daily-Omni 82.12% 和 OmniVideoBench 54.00%，超过同模型复现的多专家智能体的 71.68% 和 41.90%，对应高出 10.44 和 12.10 个百分点。由 WorldSense 演化得到的流程不经调整直接用于另两个基准，测试集分别比初始流程高 7.67 和 12.10 个百分点。代价方面，演化不更新任何基础模型参数，只改流程代码，但需 GPT-6.1-Sol 多轮试错与验证集回归；推理侧演化后每题平均规划调用分别下降 17.3%、40.9% 和 5.6%，观看帧数分别下降 3.9%、14.4% 和 4.7%，其中 Daily-Omni 工具调用也下降 31.1%，但 WorldSense 工具调用从 6.71 次升至 7.22 次，OmniVideoBench 从 8.90 次升至 9.75 次，说明另两个基准仍以少量工具调用增加换取准确率提升。

**适用边界与深读导览：** 上述结论成立于选择题评测、冻结模型与有限演化轮次之下，尚未验证开放式生成、实时部署、不同规划器与专家组合下的稳健性，跨集迁移也只检验了由 WorldSense 向另两个基准的单向转移。想深究形式化定义与选择准则可看下文方法概述中的公式说明，想核对分解式结构与归因改写的增益来源可查实验结果中的主表、迁移表与资源表。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全模态问答为何不能只靠调视觉链路：路由、定位与感知的耦合困境

全模态理解要求智能体同时处理视频、音频与文本问题，并在多个候选项中选出正确答案。论文把每个样本形式化为视频、音频、问题与标准答案的四元组，评测覆盖 WorldSense、Daily-Omni 与 OmniVideoBench 3 个多选问答基准。与单一视觉问答不同，这里的证据组合随问题而变，语音相关问题高度依赖音频感知，视觉事件识别需要细致的视频分析，跨模态推理则要求音频与视频证据在时间上对齐，任何单一模态的链路都无法覆盖全部需求。

支架式递归自我改进提供了一种不更新基础模型参数的优化思路，它把规划器、感知专家与检索工具的调用逻辑封装为可执行的支架代码，再通过改写代码与执行反馈来改进证据获取与推理流程。已有视频理解工作沿这条路线演化了上下文构建与证据采集策略，在以视觉为主的任务上取得了进展。由于视频任务主要考验视觉感知，进化空间相对集中，失败往往可以直接归因到采样或提示等少数环节，针对性修改比较容易验证。

把同样的范式搬到全模态场景时，困难来自 3 种能力的纠缠。应该调用哪些模态与专家、以何种顺序调用并解决冲突，决定了路由与协作，去哪个模态的哪段帧或音频中找证据，决定了定位，在选中证据上如何提示专家以抽取细节，决定了感知。3 组策略相互影响，一次错误可能同时涉及选错模态、检索查询不当或专家提示模糊。若沿用与模态无关的整体改写，一次修改会同时触动多个能力，既难以判断真正短板，也难以评估每个改动的独立效果。

### OmniHarness-RSI 三段式流水线：可执行支架、模态引导进化与泛化筛选

#### 相对视频支架进化的两处改动

与最接近的视频支架进化基线相比，论文保留了冻结全部基础模型参数、通过改写可执行代码来优化流程的基本做法，但替换了两个关键假设。第一，它不再把支架看作单一整体，而是按模态路由与协作、模态感知证据定位、模态特异感知 3 个能力维度进行因式分解，每个维度对应可独立编辑的提示、检索参数与调用规则。第二，它不再用通用失败分析指导改写，而是要求进化智能体先做模态与能力归因，再针对高频失败模式做聚焦修改。信号规格方面，原文未披露采样率、帧长或码率等波形细节，只明确任务目标为多选问答准确率，规划器每道题最多交互 10 步。

为了理解为何需要这种分解，可以先对照视频理解与全模态理解在证据需求上的差异。左侧面板用放杯子与闹钟的连续帧说明视频问答多围绕可见动作与物体展开，问题与答案都可由视觉链路回答。右侧面板在同一画面下叠加了音频波形，并列出 3 种典型问题分别指向纯音频转录、纯视频动作与需要时间对齐的跨模态因果，底部进一步对比了聚焦进化与纠缠优化空间的不同结局。带着证据组合如何变化、策略耦合带来何种后果这两个线索阅读，有助于把握后文分解的动机。

[![原论文 Figure 1：Harness evolution for video and omnimodal understanding.](https://arxiv.org/html/2611.32951v1/_comparison.png)](https://arxiv.org/html/2611.32951v1/_comparison.png)

*论文图 1：视频问答与全模态问答的证据需求对比及纠缠优化空间示意（原论文 Figure 1）。*

该对比把核心矛盾落在优化空间的纠缠程度上。视频一侧的支架进化从视觉理解出发，经过代码改写直接通向性能提升，路径单一。相对地，全模态一侧的不同问题需要调用音频、视频或转录的不同组合，且常要求时间对齐，路由、定位与感知策略相互交织成网状结构。若此时仍做无聚焦的整体编辑，就容易出现改动分散、增益有限的局面。原文据此提出，失败归因必须先定位到受影响的模态与具体策略，再做针对性修正，这正是模态感知进化要解决的起点。

#### 预测映射与进化对象的界定

形式化上，论文把单题预测定义为支架对多模态输入的映射。设视频、音频、问题与标准答案构成样本，支架用可执行配置统一编排一组预训练感知专家，输出预测答案。该式明确了优化对象是支架配置而非模型权重，专家集合、视频音频与问题都是给定输入，预测符号代表支架在当前配置下的单次执行结果。理解这些符号分工后，才能看清后文因式分解到底在拆分配置中的哪一部分。

\[\hat{y}_{i}=\mathcal{H}_{\theta}(v_{i},a_{i},q_{i};\mathcal{E}).\]

采用这种映射形式的直觉在于把能力改进与参数更新解耦，冻结的专家负责感知，支架负责何时调用谁、用何种查询与提示组织证据。若支架配置退化为固定单专家调用，映射就退化为单一模型的直接问答，跨模态协作消失，若配置允许充分检索与多专家会商，映射则能融合互补观察。当预测与标准答案不一致时，执行轨迹中的工具调用、检索候选与专家输出都会被记录，为后文的结构化归因提供依据，而进化操作也只改写配置，不触动任何基础模型权重。

### 因式分解支架如何把路由、检索与专家感知落到可改代码

#### 可编辑支架的模型与工具分工

因式分解支架把可编辑策略落到具体模型与工具上。规划器采用 Qwen3.8-27B，负责把问题拆解为证据需求，选择定位工具与感知专家，并综合观察给出答案。证据定位组合了视觉检索 SigLIP2、音频检索 CLAP，以及 Qwen3-ASR-1.7B 与 Qwen3-ForcedAligner-0.6B 提供的带时间对齐的语音转录。感知则由视觉专家 Qwen3-VL-8B-Instruct 与音频及音视频专家 Qwen2.5-Omni-7B 分担，所有基础模型参数在整个过程中保持冻结，可改的只是提示、检索候选数、采样密度与结果拼装逻辑。

要看清这些部件如何协同，可以沿左侧输入到右侧评估的主路径阅读总览。左侧蓝色大框展示了视频、音频与问题如何进入可执行支架，再依次经过规划器、路由协作、定位与感知并产生预测答案与执行轨迹。中间橙色框说明进化智能体如何利用轨迹做归因与本地试验，右侧绿色框则展示了进化集、验证集与测试集的划分及三层泛化评估。先把握三栏的分工，再细看每个框内部的箭头与模块对应关系。

[![原论文 Figure 2：Overview of OmniHarness-RSI.](https://arxiv.org/html/2611.32951v1/_pipline.png)](https://arxiv.org/html/2611.32951v1/_pipline.png)

*论文图 2：三栏式总览展示因式分解支架、模态引导进化与泛化评估的闭环（原论文 Figure 2）。*

总览揭示了三栏之间的闭环关系。左侧把路由、定位与感知组织在同一可执行支架内，底部注明全部基础模型冻结，意味着任何改进都来自代码与策略而非权重更新。中间栏把单轮进化收敛为运行现支架、收集轨迹、归因、定向改写与本地试验后只提交一个候选的流程，强调了聚焦与控制回退。右侧栏把数据集划分为进化集、验证集与测试集，候选是否接纳只看验证集上答对题数的净增益，最终再分别检验进化集提升、同分布泛化与跨数据集迁移，避免把试验子集上的偶然改善误认为泛化。

#### 配置拆分与单步路由的含义

为了让进化有明确的修改目标，论文把支架配置拆分为路由协作分量与按模态索引的定位分量、感知分量。公式中的路由符号代表模态选择、调用顺序与冲突解决策略，定位符号代表各模态的查询构造、候选数与重排去重逻辑，感知符号代表各专家的任务提示、输入组织与输出解析，模态集合覆盖视觉、音频及音视频组合。该拆分把纠缠的编辑空间变为 3 个互补维度的集合，为归因时定位到具体策略提供了坐标。

\[\theta=\left(\theta_{\mathrm{rc}},\{\theta_{\mathrm{loc}}^{m}\}_{m\in\mathcal{M}},\{\theta_{\mathrm{perc}}^{m}\}_{m\in\mathcal{M}}\right),\]

这种因式分解的直觉是给每次改写划定影响范围，使路由、找证据与看证据的调整可以分别验证。若只改路由而不动定位与感知，系统只会改变调用谁与何时调用，不会改变检索质量与专家解读方式，反之，若同时改动多处，就难以判断增益来源。极端情况下，若把所有分量混为一体，进化就退回与模态无关的整体改写。分解后的配置直接决定了规划器下一步能看到哪些候选证据与专家观察，从而驱动后文按失败模式逐个修复的流程。

在执行层面，路由协作体现为规划器在每一步根据问题与已累积上下文选择专家或工具及其操作。该式把选择建模为受路由配置控制的策略函数，输入是原始问题与历史观察，输出是当前步骤要调用的模块与具体动作。可编辑部分包括规划器提示、工具可用性与调用规则，以及如何把专家观察回传、交叉验证或在冲突时取舍。理解该映射后，才能明白改写提示或规则如何改变模态调用序列。

\[(e_{s},u_{s})=\pi_{\theta_{\mathrm{rc}}}(q,h_{s-1}),\]

把路由写成策略函数的用意是让调用顺序与协作逻辑成为可学习的行为，而非固定流水线。若路由配置过于保守，规划器可能只调用单一专家，错过互补证据，若配置允许充分试探，又可能在有限的 10 步交互内浪费调用。进化通过调整提示与规则来平衡这种取舍，例如在冲突时要求交叉验证。每次路由决策产生的调用与观察都会追加到执行轨迹中，为定位查询是否恰当、专家解读是否准确留下可审计的中间状态。

#### 端到端逻辑流与未披露维度

以一段 1 秒的音视频问题为例，原文只披露了模块级流向而未披露波形采样率、帧率、特征维度与码本结构，因此无法复述严格的张量形状变化。逻辑上，视频、音频与问题先进入 Qwen3.8-27B 规划器，规划器按路由策略依次调用 SigLIP2 或 CLAP 检索候选时段，或调用语音识别与强制对齐获取转录锚点，再把选中区间送入视觉或音频专家抽取细节，各步观察累积为上下文直至给出答案。凡涉及具体下采样倍数与向量维度的环节，原文均未给出，只能如实保留空白而不补造。

### 从轨迹归因到验证集筛选：每轮只提交一个候选支架的进化闭环

进化从执行轨迹出发做结构化归因。每轮先在进化集上运行现支架并记录每题的工具调用、检索证据、专家观察、推理与正误标签，再由 GPT-6.1-Sol 进化智能体对照因式分解空间分析错题轨迹。归因区分路由协作层面的模态选择、调用顺序与冲突解决，以及定位与感知层面受影响的模态与具体策略，例如视觉检索查询构造、区间内帧采样或音频专家提示，一条轨迹可能同时牵连多个维度的多个策略。

针对归因发现的多种失败模式，论文主张每次只聚焦一种高频模式做改写。进化智能体从进化集中抽取体现该模式的错题与已答对的相关题构成试验子集，正确样例用于检测回退。候选改写在该子集上与现支架直接对比，观察纠正了哪些错误、是否出现新的退化，并结合执行轨迹判断证据获取与解读是否真正改善，再据此调整实现或尝试替代方案，必要时调整子集构成。

本地试验的改善未必泛化，因此每轮只允许提交一个候选并用验证集做接纳判断。记验证集上现支架与候选支架各自答对的题数，配置更新取决于两者差值是否严格超过预设阈值。若净增益超过阈值则接受候选，否则保留现支架，测试集全程不参与改写与选择。该式的关键符号是答对题数差与以题数为单位的阈值，它把试验子集上的主观判断转化为验证集上的可计数增益。

\[\theta_{t+1}=\begin{cases}\hat{\theta}_{t},&C_{\mathrm{val}}(\hat{\theta}_{t})-C_{\mathrm{val}}(\theta_{t})>\delta,\\ \theta_{t},&\text{otherwise},\end{cases}\]

采用计数差加阈值的直觉是用离散的答对题数抑制小幅波动带来的过拟合，阈值取零时仍要求严格正增益，增大阈值则要求更显著的提升才接受。若候选仅在试验子集上有效而在验证集上无净增益，就会被拒绝并保留原支架。整个过程中全部基础模型参数保持冻结，梯度不更新任何权重，进化只改写支架代码。推理时规划器每题最多交互 10 步，单实验最多进化 10 轮，若连续 3 轮候选被拒则提前终止。

### 三个基准上的准确率、跨数据集迁移与开销变化

#### 主进化效果与架构增量的分离

主效果对比在 3 个多选问答基准上展开，每个数据集按约 40:10:50 划分为互不相交的进化集、验证集与测试集，指标均为答对比例，增益以百分点计。对比包含单专家智能体与因式分解支架两套架构，分别考察不进化、叠加与模态无关进化、叠加模态引导进化的表现。两套架构共享 Qwen3.8-27B 规划器，因式分解支架额外引入多专家与音视频检索工具，因此进化前的起点差异反映了架构与工具带来的先验优势。

| Method | WorldSense Evolve | WorldSense Valid | WorldSense Test | Daily-Omni Evolve | Daily-Omni Valid | Daily-Omni Test | OmniVideoBench Evolve | OmniVideoBench Valid | OmniVideoBench Test |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Single-Expert Agent | 48.25 | 48.17 | 46.44 | 69.34 | 54.63 | 63.96 | 31.93 | 54.32 | 36.48 |
| Single-Expert Agent + Modality-Agnostic RSI | 43.18 | 48.84 | 44.88 | 66.36 | 57.41 | 59.82 | 29.97 | 58.02 | 38.97 |
| Single-Expert Agent + Modality-Agnostic RSI | −5.07 | +0.67 | −1.56 | −2.98 | +2.78 | −4.14 | −1.96 | +3.70 | +2.49 |
| Factorized-Harness Agent | 57.78 | 52.49 | 54.20 | 75.97 | 76.85 | 74.08 | 40.06 | 56.79 | 42.17 |
| Factorized-Harness Agent + Modality-Agnostic RSI | 58.83 | 55.48 | 54.55 | 72.08 | 78.70 | 75.61 | 39.50 | 58.02 | 45.02 |
| Factorized-Harness Agent + Modality-Agnostic RSI | +1.05 | +2.99 | +0.35 | −3.89 | +1.85 | +1.53 | −0.56 | +1.23 | +2.85 |
| Factorized-Harness Agent + Modality-Guided RSI | 65.03 | 57.81 | 63.06 | 81.01 | 83.33 | 82.21 | 44.82 | 64.20 | 48.40 |
| Factorized-Harness Agent + Modality-Guided RSI | +7.25 | +5.32 | +8.86 | +5.04 | +6.48 | +8.13 | +4.76 | +7.41 | +6.23 |

表中模态引导进化的测试集提升最为突出，在 WorldSense、Daily-Omni 与 OmniVideoBench 上分别比初始因式分解支架高出 8.86、8.13 与 6.23 个百分点，且在进化集与验证集上同步提升。与同架构的模态无关进化相比，领先幅度分别达到 8.51、6.60 与 3.38 个百分点。反观单专家架构叠加模态无关进化，在前两个基准测试集上分别下降 1.56 与 4.14 个百分点，仅在第三个基准上提升 2.49 个百分点。因式分解虽改善了无关进化的效果，但其进化集在后两个基准上仍出现下降，说明仅有分解而无模态引导仍不充分。

#### 跨数据集迁移与外部模型对照

跨数据集检验把在 WorldSense 上进化得到的支架直接冻结并用于另外两个基准，不做任何额外进化，以考察策略的可迁移性。对照包括各目标数据集上的初始支架与直接在目标上进化的支架，指标仍为验证集与测试集准确率。该设置区分了同分布泛化与跨分布迁移，若迁移支架接近甚至超过目标特化支架，则说明学到的是通用协作与感知策略而非数据集特有模式。

| Method | Daily-Omni Valid | Daily-Omni Test | OmniVideoBench Valid | OmniVideoBench Test |
| --- | --- | --- | --- | --- |
| Factorized-Harness Agent | 76.85 | 74.08 | 56.79 | 42.17 |
| + Target-evolved harness | 83.33 | 82.21 | 64.20 | 48.40 |
| + WorldSense-evolved harness | 80.56 | 81.75 | 64.20 | 54.27 |

迁移结果显示 WorldSense 进化支架在 Daily-Omni 测试集上达到 81.75%，在 OmniVideoBench 测试集上达到 54.27%，相比初始支架分别高出 7.67 与 12.10 个百分点。在 Daily-Omni 上该成绩略低于直接在目标上进化的 82.21%，差距较小。在 OmniVideoBench 上迁移成绩反而高于目标特化进化的 48.40%，验证集上两者同为 64.20%。这种不经适配仍能保持甚至反超的表现，支持了模态引导进化捕捉到可跨基准复用的证据定位与协作策略。

与现有全模态模型及智能体的对比在完整 Daily-Omni 与 OmniVideoBench 上进行，指标同样为准确率。论文的 WorldSense 进化支架在两个目标上均保持冻结，不做目标特化。为保证公平，复现的 OmniAgent 采用与本文系统相同的规划器与感知模型，其余基线分数引自各自文献。该对比意在检验用较小专家加进化支架的组合，能否匹敌更大统一模型或更强闭源模型驱动的智能体。

| Method | Daily-Omni | OmniVideoBench |
| --- | --- | --- |
| Qwen3-Omni-30B [20] | 72.08 | 38.40 |
| SyncRA [33] |  |  |
| Qwen3-Omni-30B-A3B | 79.09 | 47.07 |
| OmniAgent (o3, reported) [20] | 82.71 | 59.10 |
| OmniAgent (matched) [20] | 71.68 | 41.90 |
| OmniHarness-RSI (ours) | 82.12 | 54.00 |

冻结的迁移支架在 Daily-Omni 上取得 82.12%，在 OmniVideoBench 上取得 54.00%。相比同模型的 Qwen3-Omni-30B，分别高出 10.04 与 15.60 个百分点。相比采用 Qwen3-Omni-30B-A3B 的 SyncRA 的 79.09% 与 47.07%，分别高出 3.03 与 6.93 个百分点。相比同规划器与感知复现的 OmniAgent 的 71.68% 与 41.90%，分别高出 10.44 与 12.10 个百分点。需要同时看到，采用更强闭源模型的上报版 OmniAgent 仍以 82.71% 与 59.10% 领先，说明支架进化缩小了差距但未在绝对分数上全面超越最强配置。

#### 推理开销、进化轨迹与定性机制

进化是否以更多推理开销换取准确率，需要查看每题平均的规划器调用、工具调用与观看帧数。表中初始与进化均指同一因式分解支架在模态引导进化前后的状态，工具调用涵盖感知专家、语音识别与音视频定位工具，加粗表示同数据集内较低的一方。该分析与准确率提升放在一起，才能判断增益来自更有效的资源分配还是单纯增加计算。

| Dataset | Harness | Planner calls | Tool calls | Viewed frames |
| --- | --- | --- | --- | --- |
| WorldSense | Initial | 5.32 | 6.71 | 177.93 |
| WorldSense | Evolved | 4.40 | 7.22 | 171.02 |
| Daily-Omni | Initial | 4.94 | 6.52 | 129.39 |
| Daily-Omni | Evolved | 2.92 | 4.49 | 110.70 |
| OmniVideoBench | Initial | 6.83 | 8.90 | 217.64 |
| OmniVideoBench | Evolved | 6.45 | 9.75 | 207.35 |

进化后规划器调用在 3 个基准上分别从 5.32、4.94 与 6.83 降至 4.40、2.92 与 6.45，观看帧数分别从 177.93、129.39 与 217.64 降至 171.02、110.70 与 207.35，呈现一致下降。工具调用仅在 Daily-Omni 上从 6.52 降至 4.49，实现三项指标同时下降。在 WorldSense 与 OmniVideoBench 上工具调用分别从 6.71 升至 7.22、从 8.90 升至 9.75，略有增加。结合准确率同步提升，可以认为增益并非依赖全面增加资源，而是在规划交互与视觉输入上更节省，代价是部分基准上多调用了检索与专家工具。

进化动态曲线展示了 WorldSense 测试成功率随支架检查点的变化，横轴为按时间顺序的检查点编号，纵轴为测试成功率。橙色星形标记了最终采纳的检查点，阅读时可先看早期是否稳步爬升，再看后期是否出现平台或波动。该轨迹与验证集筛选机制结合，有助于判断第七个检查点被选中的依据以及继续进化的边际效应。

[![原论文 Figure 3：WorldSense test performance during Modality-Guided RSI.](https://arxiv.org/html/2611.32951v1/_evolution.svg)](https://arxiv.org/html/2611.32951v1/_evolution.svg)

*论文图 3：WorldSense 测试成功率随进化检查点先升后平的轨迹与选中点（原论文 Figure 3）。*

曲线从首个检查点的 54.20% 稳步上升至第七个检查点的 63.06%，累计提升 8.86 个百分点，星形标记的正是该峰值点。随后的第八至第十个检查点在 62.36% 至 62.77% 之间小幅波动，未再突破。这一先升后平的形态表明结构化归因在早期能持续定位并修复有效模式，后期则进入收益递减。最终支架并非简单取最后一个检查点，而是依据验证集准则选出，这也解释了为何提前终止与验证筛选对防止过拟合较为关键。

定性案例用狮子眼睛变红的原因问题，直观展示了进化前后证据使用方式的差异。顶部胶片条给出动画的关键帧，中间粉色框为进化前的定位、选帧、视觉解读与错误预测，底部绿色框为进化后的定位、选帧、双专家观察、模态协作与正确预测。阅读时可重点对比两次选帧覆盖的时间范围，以及音频证据是否被纳入最终推理。

[![原论文 Figure 4：Qualitative comparison before and after Modality-Guided RSI.](https://arxiv.org/html/2611.32951v1/_analysis.png)](https://arxiv.org/html/2611.32951v1/_analysis.png)

*论文图 4：狮子眼睛变红案例进化前后选帧与视听协作差异的定性对比（原论文 Figure 4）。*

进化前支架虽定位到变色时刻，但只选了变化前的单帧，视觉专家缺乏变化后状态，只能将狮子解读为悲伤哭泣，并给出被狼拖走绵羊的错误因果。进化后支架以定位时刻为锚点，同时采样变化前后帧，使视觉专家得以对比表情并识别出愤怒。与此同时，音频专家检测到绵羊哭泣或求救声，协作模块把视觉的愤怒与听觉的求救关联起来，得出因听到母羊呼救而眼睛变红的正确答案。该例子说明定位准确仍需配套的采样策略与跨模态融合，才能支撑因果推理。

### 冻结大模型下调支架的适用边界与复现核对清单

该方法的结论成立依赖若干明确前提。评测均为多选问答准确率，未涉及开放式生成、主观听感或神经代理质量指标，因此不能直接推断为感知质量的全面提升。进化与验证均在固定划分上完成，跨主干、跨任务与跨分布的稳健性仍是原文点出的未来工作。规划器交互步数、进化轮数与连续拒绝即停的规则限制了搜索广度，验证阈值的具体取值也未披露，这些都会影响复现时的接受行为。

复现核对需要区分三件事。数据层面需按约 40:10:50 重建进化集、验证集与测试集的随机划分，并保留测试集全程隔离。模型层面需准备 Qwen3.8-27B 规划器、SigLIP2 与 CLAP 检索、带对齐的语音转录模块，以及 Qwen3-VL-8B-Instruct 与 Qwen2.5-Omni-7B 感知专家，并保持全部权重冻结。工程层面需实现因式分解支架、GPT-6.1-Sol 驱动的归因与本地试验循环，以及基于验证集答对题数的筛选逻辑。本次证据中未发现可验证的作者代码、权重或演示绑定，因此不能声称相关资源已公开。

从工程选型看，当已拥有多个中小规模专家但缺乏微调预算，且任务需要在音频、视频与转录之间动态路由并做时间对齐时，这套只改支架的思路值得尝试。复现第一步建议先搭建具备基本工具使用说明的因式分解支架，跑通单轮轨迹记录与归因，再引入聚焦改写与验证筛选。补足验证至少应包括同分布测试、跨数据集冻结迁移与每题调用及帧数统计，并保留失败案例以检查定位准确但采样不足或协作缺失等模式是否真正减少。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、码率、通道与因果前瞻延迟，仅明确音视频检索与语音转录工具组合及每题交互步数限制
- **训练与评测数据**：训练与评测使用 WorldSense、Daily-Omni 与 OmniVideoBench 三个多选音视频问答基准，每个数据集按约 40:10:50 随机划分为进化集、验证集与测试集，跨数据集迁移时直接冻结使用 WorldSense 进化支架
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量、训练步数与耗时，进化过程最多 10 轮，连续三轮候选被拒则提前终止，推理时规划器每题最多交互 10 步
- **核心超参数与配置**：优化对象为可执行支架配置而非模型权重，进化智能体为 GPT-6.1-Sol，每轮提交单个候选，验证集答对题数净增益需严格超过阈值，阈值具体数值原文未披露
- **推理速度与部署开销**：每题平均规划器调用、工具调用与观看帧数在进化后多呈下降，原文未披露 RTF、延迟、吞吐与显存，准确率增益不依赖全面增加资源
- **开源产物与协议状态**：本次证据中未发现可验证的作者代码、权重、数据或演示公开绑定，复现需自行实现因式分解支架与进化循环并准备上述模型与基准划分
- **附录与补充材料要点**：原文未披露附录补充证明、额外消融、许可限制或系统性失效案例，未来工作提及进化效率与跨主干、任务与分布的稳健性仍待检验

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32951v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：把可编辑流程按模态能力分解为路由协作、证据定位与感知解读三维并绑定检索参数与专家提示等具体可改组件，诊断改写目标明确。

- 核心优势：在三个基准测试集上分别提升8.86、8.13和6.23个百分点且全面超越同架构不区分模态演化对照，构成直接组件因果证据。

- 核心优势：由WorldSense演化得到的冻结流程零调整迁移至另两个基准仍提升7.67和12.10个百分点，并在OmniVideoBench上超越目标集直接演化，显示可迁移性。

- 主要短板：全部增益均为单次随机划分下的点估计，未报告方差、置信区间或显著性检验，统计支撑不足。

- 主要短板：验证阈值δ取值、试验子集规模与挑选规则、提示词及划分标识均未披露，复现链条存在明显缺口。

- 主要短板：效率证据仅为离线规划调用与观看帧计数且两基准工具调用不降反升，未提供RTF、延迟与硬件规格的真实部署实测。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
