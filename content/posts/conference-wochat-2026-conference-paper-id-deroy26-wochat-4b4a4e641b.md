---
title: "Deepcounsel: A Multi-Agent Framework for Simulating Complex Courtroom Audio Environments"
date: 2026-11-28
draft: false
description: "针对真实庭审录音难获取的问题，论文以监督者加审核者加 11 个角色的多智能体流程生成终稿文本并用两种语音合成引擎产出 600 分钟音频，人工与客观评测显示 GPT-4o 胜在法律逻辑与情感韵律而 Gemini-3.1 胜在打断处理与语音质量，但约 5% 的程序与事实幻觉与缺失的信号规格使结论仅在抽样与代理指标范围内成立。"
tags: ["数据集", "数据集构建", "主观评测", "文本到语音"]
categories: ["wochat-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多智能体如何编排庭审对话并合成 600 分钟法庭音频"
paper_digest_original_title: "Deepcounsel: A Multi-Agent Framework for Simulating Complex Courtroom Audio Environments"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:wochat:2026:conference-paper-id:deroy26_wochat"
paper_digest_workbench_source_sha256: "37542d3fd1276481661b7b52f62bf136c2acbbec1f7381730cf8deb7ce424c81"
paper_digest_workbench_record_url: "https://www.isca-archive.org/wochat_2026/deroy26_wochat.html"
paper_digest_workbench_pdf_url: "https://www.isca-archive.org/wochat_2026/deroy26_wochat.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "文本到语音"
paper_digest_score: 5.7
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对真实庭审录音难获取的问题，论文以监督者加审核者加 11 个角色的多智能体流程生成终稿文本并用两种语音合成引擎产出 600 分钟音频，人工与客观评测显示 GPT-4o 胜在法律逻辑与情感韵律而 Gemini-3.1 胜在打断处理与语音质量，但约 5% 的程序与事实幻觉与缺失的信号规格使结论仅在抽样与代理指标范围内成立。"
paper_digest_reader_sections: [{"heading":"真实庭审录音难以获取时合成数据需要解决哪些矛盾","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三层流程如何从配置文件走到 600 分钟多角色音频","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"十一角色分工与音色指令如何让听者分清谁在说话","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两种语音引擎在人工听感与客观转写上各胜在何处","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"审核智能体与性别分组揭示了哪些失效模式","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"在引用这套合成数据前需要确认的边界与复现条件","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Aniket Deroy"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"60f743372467059132e32db435ad787205e5496976fb4c005a9ab766b85674cd","url":"/audio-research-portal/client/papers/2026-11-28/conference-4b4a4e641b464afda6864179/citation.bib"},"citation.json":{"sha256":"e47119a18bbd25f8699b3c01415ab3d0026f099c76cd49cbf02ebde26cc79b25","url":"/audio-research-portal/client/papers/2026-11-28/conference-4b4a4e641b464afda6864179/citation.json"},"citation.ris":{"sha256":"bea133c3ca292cd623f2e2d6dc1d87641b6a5ef387a8c950b5518343a2cacadb","url":"/audio-research-portal/client/papers/2026-11-28/conference-4b4a4e641b464afda6864179/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e667763343e13d3f021baf49a836f5eb558f17931891bb71406d8d8581a0bf25","url":"/audio-research-portal/client/papers/2026-11-28/conference-4b4a4e641b464afda6864179/rethink-context.json"}}
paper_digest_paper_id: "conference:wochat:2026:conference-paper-id:deroy26_wochat"
paper_digest_source_kind: conference
paper_digest_conference_id: "wochat-2026"
paper_digest_conference_name: "wochat-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/wochat_2026/deroy26_wochat.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/wochat_2026/deroy26_wochat.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "1874096041738fb9df4311a3e2f8fefce5b9cf2162a4b712130e71c519d1f92c"
paper_digest_api_reader_plan_sha256: "240be0aba4b0a42a30a75f5330b04e055cb4605ab77951d6b445890642481875"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b4975488b5c0addc9d29dfa9b29701eb3f54f96b20c8bf2e907e173f7c9f58b6"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "795808d9904cba8ace85cdace456bdf04d16f1a05dda46f57b5be7359aa935b1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0b257c1ceb03c28c2a21a8eaa33d1d21e8e11b2be1b09065967d5e61703ffba6"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "edcbb6b19653aba8706d59eb0fe33803bd991473110e3af88361b7430a155bd2"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 多智能体如何编排庭审对话并合成 600 分钟法庭音频

> 英文题目：*Deepcounsel: A Multi-Agent Framework for Simulating Complex Courtroom Audio Environments*

> 会议身份：`conference:wochat:2026:conference-paper-id:deroy26_wochat`
> Track：Second Oral Session




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/wochat_2026/deroy26_wochat.html) · [官方 PDF](https://www.isca-archive.org/wochat_2026/deroy26_wochat.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.7/10** | 创新 5.4/10 | 技术严谨 5.5/10 | 实验充分 6.1/10 | 清晰度 5.2/10 | 影响力 5.0/10 | 开源 6.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10

排名：后50% | 文档类型：数据集与基准

## 👥 作者与机构

- Aniket Deroy：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 真实庭审音频受隐私法规与封存记录限制，难以获得高质量全标注数据，制约法律语音技术发展。庭审语音具有严格程序层级、拉丁化专业词汇与高对抗交互，还频繁出现多人同时说话的串话与打断，早期基于 GAN 与 Transformer 的合成增强缺乏法律语境细节，无法维持角色一致与程序顺序。

**核心思路与方法架构：** 与单模型直接合成相比，本文实质增量是以多智能体提示分工替代单一提示，保留商用大模型语音能力，新增监督者代理与价值评估模型分别做流程编排与法律审计。论文称定义 11 个角色并各守知识子集与行为约束，监督者充当书记员式状态机维护发现、作证、结案到裁决的线性推进，价值评估模型为独立审计，审查层级违反、阶段倒退、引用超发现文件与证人被告泄漏全集信息等问题。同一文本再分别送入 Gemini 3.1 与 GPT-4o 的文本到语音接口，按角色写入语音指令，摘录可核对的部分包括被告气息不稳与 [anxious] 等标记、书记员单调提词器式朗读、法警胸腔共鸣指令、口译员硬编码 1500 毫秒静音缓冲、速记员仅以 [abrupt] 打断、公众仅由 [murmurs]、[gasp] 与 [whispering] 驱动，最终拼接为覆盖 10 类案由、每类 20 个合成案例的 DeepCounsel 数据，全程无梯度训练，仅为提示调用，论文未说明采样率与流式约束。

**关键实验与核心代价：** 在 DeepCounsel 合成庭审音频上由 3 名法律专家对 60 分钟抽检音频按 0 到 5 分打分后平均，GPT-4o 在法律逻辑上以 4.82 分高于 Gemini 3.1 的 4.71 分，在情感韵律上以 4.27 分高于 3.90 分，而 Gemini 3.1 在语音质量上以 4.88 分高于 4.71 分，在打断逻辑上以 4.23 分高于 3.99 分。在 DeepCounsel 数据集上以 Whisper-large-v3 独立转写对比金标转录的评测设置下，Gemini 3.1 的词错率（WER，越低越好 ↓）为 0.021，低于 GPT-4o 的 0.025，语义相似度（BertScore，越高越好 ↑）为 0.884，高于 GPT-4o 的 0.821，Fréchet 音频距离（FAD，越低越好 ↓）为 0.015，低于 GPT-4o 的 0.024，而 GPT-4o 的字符错率（CER，越低越好 ↓）为 0.026，低于 Gemini 3.1 的 0.035，语音自然度预测（UTMOS，越高越好 ↑）为 4.09，高于 Gemini 3.1 的 4.05。移除价值评估模型后程序漂移、法律逻辑虚构、幻觉循环、时间错乱与语境幻觉分别上升 14%、12.53%、10.10%、18,28% 和 16.74%，音高与能量相关分别为 0.665 与 0.661，时长相关为 0.721，论文未披露训练与推理成本及实时因子。

**适用边界与深读导览：** 结论仅在英语合成庭审、封闭提示生成与 60 分钟专家抽检范围内成立，未经真实庭审音频验证，也未证明对法庭语音识别或角色分类的下游增益，且两模型均存在程序漂移与法律虚构。Zenodo 示例音频可对照试听合成角色区分与打断现象，但论文未提供可部署的流式方案。欲深究提示原文、语音定制细节与幻觉案例分布，可查阅下文方法与实验小节及附录表格。

## 🔗 开源与复现资源

- 代码相关资源：<https://zenodo.org/records/20542851> — 链接可访问（HTTP 200）

- 论文所列链接：<https://zenodo.org/records/20543372> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 真实庭审录音难以获取时合成数据需要解决哪些矛盾

#### 获取限制与合成目标

真实法庭录音长期受到隐私法规与封存制度的限制，论文明确提及 GDPR 与 HIPAA 等约束以及敏感案件不公开的惯例。这导致可用于训练与评测的高质量标注音频极为稀缺，直接制约法庭语音识别、法律角色识别与小型语音模型的进展。为此作者提出以合成方式补足缺口，目标是生成 600 分钟、约 10 小时的多角色法庭音频 DeepCounsel，覆盖刑事法到破产法等 10 类案件，为后续声学与语义研究提供可控素材。

合成文本由 Gemini-2.5 生成，音频由 Gemini-3.1 与 GPT-4o 的 TTS（文本转语音）能力合成，每名演员智能体拥有独立音色画像。论文列出 11 个角色，包含法官、检察官、辩护律师、被告、证人、书记员、法警、译员、法庭记录员、陪审团主席与公众媒体，其中法庭记录员在方法图中标注为技术观察员而译员标注在环形周围重复出现两次。配置文件要求至少 5 个智能体同场、每行标注说话人编号并在证人作证期间安排辩护律师异议，保证程序骨架完整。论文为每类案件生成 20 个合成案例，不按有罪与无罪做简单划分因为同一案件中部分主张可能被采纳、部分被驳回形成混合形态。

#### 已有路线的缺口

早期基于生成对抗网络与变换器的语音增强多偏向短句朗读，缺乏对拉丁法律术语、严格程序结构与高对抗交互的建模。文本侧的 LegalBench 侧重法理推理缺少声学与韵律维度。近年多智能体编排虽能维持长对话人设，但在法庭层级、交叉说话与打断逻辑、发言人知识范围控制上仍缺少可验证的流程稍有约束松动就会出现抢话、越权发言或程序跳步。

为约束上述失序，论文设置 3 类分工。监督智能体充当书记员负责宣誓、示证与庭审阶段推进等程序衔接。价值评估模型作为独立法律与行为审计只审查当前片段是否违反层级、是否虚构法条、是否泄露知识隔离区之外的内容并以结构化 JSON 返回审查意见不参与庭审对话。对抗双方受发现文件约束不得违背全局事实异议逻辑在出现诱导性发问或传闻时触发攻击阈值按案情自定不做统一预设。

#### 输入输出与核查前提

DeepCounsel 把输入输出定义得很具体。输入是配置文件与发现文件前者规定至少 5 个智能体参与、说话人编号格式与异议事件后者是检察官与辩护律师不得违背的事实依据。输出是带说话人标签的终稿文本与按角色音色合成的连续音频。论文强调若不同角色使用相同或相近音色合成波形会连成无法区分的声墙使说话人分离与角色分类失去基础因此为每个角色指定声学画像是功能必需而非装饰。

合成的最大风险是听感自然但法理失真。模型可能编造不存在的法条、颠倒判例时间、让证人在异议成立后继续作答或把异议意见当成多数意见引用。为此论文设计 2 方面核查一侧由 3 名法律专家对 60 分钟音频按 8 个维度在 0 到 5 分内打分弗莱斯一致性系数多在 0.616 到 0.769 之间属于高度一致另一侧用 Whisper-large-v3 独立转写对比金标准文本并计算声学分布距离与说话人一致性。只有 2 类证据同时成立关于自然度与专业性的结论才有前提。

### 三层流程如何从配置文件走到 600 分钟多角色音频

#### 从配置到终稿文本的编排环

整个系统分为三层。第一层是多智能体剧本编排由监督者智能体扮演书记员按配置文件初始化对话要求至少 5 个角色参与并以前缀标出说话人。第二层是多模态合成管理音色多样性、情感一致性与时间节奏。第三层是最终输出即 600 分钟连续法庭音频。文本侧由 Gemini-2.5 生成连贯对白语音侧分别调用 Gemini-3.1 与 GPT-4o 的语音合成能力实现不同音色全程没有更新模型权重的训练阶段属于冻结模型的提示驱动与合成流程。

下图是全文的方法总览建议沿顶部从左到右看 3 个阶段的箭头走向。左侧注意配置文件如何驱动监督者智能体中央注意环形多角色对话包含哪些角色标注下方注意审核职责框如何回指对话与终稿文本。右侧注意音频生产流程中音色指令框与语音合成引擎的上下关系以及最终波形周围标注的法官、检察官、辩护人与公众声的指向这对应后文按角色分配音色的功能设计。

[![原论文 Figure 1：Methodology Diagram](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-1.png)

*论文图 1：三阶段方法流程：剧本编排经审核形成终稿文本再按角色音色合成 600 分钟音频（原论文 Figure 1）。*

图中流程分为三色横条。左侧浅色区中配置文件经箭头进入监督者智能体监督者以环形箭头调度法官、检察官、辩护律师、证人、被告、书记员、法警、译员、陪审团主席与公众等角色，环形周围另有一处标注为技术观察员对应正文法庭记录员职能而译员标注重复出现两次。对话下方粉色区为审核职责注明核查法律逻辑与虚构、检测程序漂移、强制人设一致与知识隔离并以结构化 JSON 回指终稿文本。终稿文本作为桥梁进入右侧绿色区音频生产流程先经角色音色指令框再进入语音合成引擎最终向右输出 600 分钟波形，波形周围黄色标注指向法官、检察官、辩护人与公众声其中法官声音标注在左右各出现一次系原图重复标注。

#### 从终稿文本到多音色音频的合成流

监督者承担状态机职能确保宣誓、作证、异议、裁决按发现文件到证言再到结案的线性阶段推进法官只能维持或驳回异议不得虚构事实。检察官与辩护律师受发现文件约束并触发异议逻辑被告与证人被限制在知识隔离子集内证人可信度随矛盾被监督者下调。译员执行一对一字面映射且固定 1500 ms 静音缓冲以模拟处理滞后法警在攻击性超阈时禁言陪审团在评议前仅处观察模式。攻击阈值不设统一数值而是按刑事与行政等不同敏感度交由系统自定专家抽查确认知识隔离在抽检片段中得到维持。

### 十一角色分工与音色指令如何让听者分清谁在说话

#### 角色权限与对话约束

论文定义 11 个角色智能体每个配有语气、权限与词汇约束。法官是主持权威维持秩序并使用拉丁法律术语。检察官激进且证据驱动辩护律师多疑并善用戏剧停顿与反问被告紧张防御且回答简短证人分事实与专家两类书记员程序化单调法警聚焦安全译员为字面通道法庭记录员仅在语速超限时打断陪审团主席负责裁决陈述公众仅提供惊叹与低语等非言语声。每轮对话要求至少 5 个角色出场且必须包含辩护方在证人作证时的异议事件。

音色指令具体到可执行标记。法官要求深沉共鸣、慢速与句尾降调依赖 [stern] 与 [measured pause] 等显式标记。检察官为清亮高能量、语速快生成后零填充以实现即时打断。辩护律师为男低音式顺滑戏剧腔嵌入省略号制造停顿。被告加入气息抖动、音高微裂与 [anxious] 、 [gasp] 、 [sigh] 及算法生成的口吃。书记员完全单调法警用 [loud] 与 [commanding] 实现浑厚向下指令译员保持平稳音量逐字翻译法庭记录员为干脆鼻音加 [abrupt] 公众则完全去掉文本词仅保留 [murmurs] 、 [gasp] 与 [whispering] 等集体标记。

#### 韵律相关性与信号规格说明

下图展示两类引擎生成语音之间基音、能量与时长相关系数的密度分布。按原文文字定义蓝色对应基音相关红色对应能量相关黄色对应时长相关，但图内无图例与分组标签该对应无法从像素独立验证。阅读时先确认横轴 Value 约负 2.0 到 2.0 、纵轴 Density 约 0 到 0.6 再对比 3 条曲线在负 1.0 到 1.0 区间的重叠形态与右侧峰位差异。

[![原论文 Figure 2：Density curve showing the Pitch Correlation coefficients, Energy correlation coefficients,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-2.png)

*论文图 2：基音能量与时长相关系数的密度分布：前两者高度重叠而时长曲线右移（原论文 Figure 2）。*

像素中 3 条曲线主体位于负 1.0 到 1.0 区间蓝色最高峰约 0.58 在负 0.6 附近红色最高峰约 0.58 在负 0.5 附近两者在零附近重叠度很高黄色左峰约 0.46 在负 0.6 附近右峰约 0.52 在 0.5 附近相对更高。原文报告 3 组均值为基音相关 0.665 、能量相关 0.661 与时长相关 0.721 均为正值若均值确在正 0.6 以上密度主体应集中在正值区与像素显示大量质量位于负值区存在视觉出入原文未解释因此不能称像素与均值吻合。原文另从发声机理说明重音时声门压力与声带张力同步变化使加重位置判断一致而时长受音素物理时长约束更强该机理为文字解释非本图可直接证实。

数据集层面 10 类案件平均句长在 10.42 词到 17.135 词之间总时长按类型为 58.42 分钟到 48.25 分钟不等加总约 599.40 分钟与标称 600 分钟吻合。每类生成 20 个合成案例不按有罪无罪划分混合情形。按性别拆分后男性合计 392.48 分钟女性合计 206.92 分钟。需要明确的是原文未披露采样率、帧长与步长、码率与通道数无法给出 1 秒样本的张量形状只能追踪逻辑流唯一明确的时间参数是译员 1500 ms 静音缓冲复现时需自行设定声学参数并记录。

### 两种语音引擎在人工听感与客观转写上各胜在何处

#### 人工听感的逐行对比

评测公平性先看范围与口径。人工侧由 3 名法律专家对 60 分钟法庭音频按 8 个维度在 0 到 5 分内打分后取均值 8 个维度的 Fleiss kappa 为 0.616 到 0.769 属实质一致差异显著性用 95% 置信区间的 Student T-Test 标 * 。客观侧用独立的 Whisper-large-v3 转写后对比金标准文本得到 WER （词错误率） 、 CER （字错误率） 、 WIL （词信息丢失）与 BertScore （基于 BERT 的语义相似度分数） 并用 10 分钟真人朗读同一法律文本作参照计算 FAD （弗雷歇音频距离） 。方向上人工分与 BertScore 越高越好 WER 、 CER 、 WIL 与 FAD 越低越好文本剧本来自同一编排流程差异主要来自两种语音合成实现。

下表为人工听感的主结果列为 GPT-4o 与 Gemini-3.1 行覆盖法律逻辑到环境融合共 8 个维度单元格保留原文的 /5.0 量纲与 * 显著性标记。建议先逐行对比两列高低再看 * 落在哪一侧最后结合后文对打断逻辑与情感韵律的分化解读。该表是判断两种引擎谁更适合分析型与庭审对抗任务的关键依据不宜只记平均分而忽略行间差异。

| 指标 | GPT-4o | Gemini-3.1 |
| --- | --- | --- |
| 法律与逻辑 | 4.82/5.0* | 4.71/5.0 |
| 事实一致性 | 4.51/5.0 | 4.55/5.0* |
| 语音质量 | 4.71/5.0 | 4.88/5.0* |
| 情感韵律 | 4.27/5.0* | 3.90/5.0 |
| 时间流 | 4.48/5.0* | 4.42/5.0 |
| 打断逻辑 | 3.99/5.0 | 4.23/5.0* |
| 沉浸感 | 4.61/5.0* | 4.49/5.0 |
| 环境融合 | 4.31/5.0 | 4.42/5.0* |

逐行看 GPT-4o 在法律与逻辑 4.82 对 4.71 、情感韵律 4.27 对 3.90 、时间流 4.48 对 4.42 、沉浸感 4.61 对 4.49 上占优差异均带 * 并经 95% 置信区间检验。Gemini-3.1 在事实一致性 4.55 对 4.51 、语音质量 4.88 对 4.71 、打断逻辑 4.23 对 3.99 、环境融合 4.42 对 4.31 上占优四者均带 * 。这说明没有一方全面胜出 GPT-4o 更像老练的分析型法律人 Gemini-3.1 在结构化庭审机制与即时打断恢复上更稳双方各有未胜出项为后文声学分化埋下伏笔。

#### 梅尔倒谱失真的性别差异

下图展示两类引擎生成语音之间梅尔倒谱失真的密度分布。按原文文字定义红色对应全部文件绿色对应男性说话人黄色对应女性说话人，但图内无图例与分组标签该对应无法从像素独立验证。阅读时先看横轴 Value 约 0 到 2.0 、纵轴 Density 约 0 到 1.2 的范围再对比 3 条曲线峰高与右侧拖尾延伸位置的差异。

[![原论文 Figure 3：Density curve showing the mel cepstral distortion coefficient (Kubichek, 1993) between GPT 4o and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-5.png)

*论文图 5：梅尔倒谱失真的密度分布：全部男性与女性曲线的峰高与拖尾对比（原论文 Figure 3）。*

像素中 3 条曲线均呈单峰并在 1.0 附近重叠绿色峰最高约 1.16 红色约 1.10 黄色约 1.05 右侧黄色拖尾最宽并延伸至 2.0 附近绿色收尾最早。峰高反映分布集中度不能直接读作失真数值大小。原文称男性因基频低与谐波密集导致包络估计偏差因而 MCD （梅尔倒谱失真）值偏高但按上述颜色定义高值区延伸更远的是黄色而非绿色两者存在视觉出入原文未解释。原文另称 STOI （短时客观可懂度）偏向男性而 PESQ （语音质量感知评估）偏向女性该分化为文字附加结论本图仅含 MCD 分布无法验证。

### 审核智能体与性别分组揭示了哪些失效模式

#### 客观指标的互补分化

幻觉是本文的另一条主线附录将其分为程序漂移、法律逻辑虚构、幻觉循环、时间幻觉与语境幻觉 5 类并配有证人抢答、被告反问、虚构判例等实例。单名法律专家审听 60 分钟音频后给出量化 GPT-4o 累计 4.89% 由 1.25% 、 1.16% 、 1.04% 、 0.80% 与 0.64% 相加得到 Gemini-3.1 累计 5.41% 由 1.58% 、 1.27% 、 0.98% 、 0.96% 与 0.62% 相加得到两组加总与累计值完全吻合。程序漂移在两类引擎中均为最高项幻觉循环虽占比最低却因自证级联被判定为结构上最危险。

下表为幻觉与声学客观指标的完整对照列为 Gemini-3.1 与 GPT-4o 行覆盖 WER 到说话人嵌入余弦相似度。数值越低越好的有 WER 、 CER 、 WIL 与 FAD 越高越好的有 BertScore 、 CTC 对齐分数、 UTMOS 与说话人一致性。建议先按方向判断每行胜负再看 * 标记的显著性最后对比语义保真与声学保真的分化避免把转写准确等同于声音自然。

| Metric | Gemini-3.1 | GPT-4o |
| --- | --- | --- |
| Word Error | 0.021 | 0.025* |
| Character Error | 0.035* | 0.026 |
| Word Informa- | 0.030* | 0.028 |
| BertScore | 0.884* | 0.821 |
| CTC Alignment | 0.822 | 0.856* |
| Frechet Audio | 0.015 | 0.024* |
| UTMOS | 4.05 | 4.09* |
| Speaker & At- | 0.808 | 0.849* |
| Speaker Em- | 0.825 | 0. 855* |

逐格按方向判断 Gemini-3.1 在 WER 0.021 对 0.025 、 BertScore 0.884 对 0.821 与 FAD 0.015 对 0.024 上占优 GPT-4o 在 CER 0.026 对 0.035 、 WIL 0.028 对 0.030 、 CTC 对齐分数 0.856 对 0.822 、 UTMOS 4.09 对 4.05 、说话人一致性 0.849 对 0.808 与嵌入余弦相似度 0.855 对 0.825 上占优。原文 * 落点与方向不完全对应 WER 与 FAD 的 * 在 GPT-4o 一侧 CER 与 WIL 的 * 在 Gemini-3.1 一侧原文未解释口径只能按数值方向判定胜负。

#### 幻觉分布与审核消融

下图为两类引擎幻觉占比的聚合密度曲线。按原文文字定义黄色对应 Gemini-3.1 绿色对应 GPT-4o ，但图内无图例与分组标签该对应无法从像素独立验证且像素仅显示两条聚合曲线未标注 5 种幻觉各自的分组与颜色。建议先看两条曲线的峰高与宽度再看右侧拖尾延伸位置图中更宽的分布往往意味着跨样本波动更大。

[![原论文 Figure 6：Density Curve for Percentage of different Hallucinations(Procedural Drift, Legal Logic…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/wochat-2026/709fd8b806a0/figure-6.png)

*论文图 6：两类引擎五种幻觉占比的密度分布：峰高宽度与右侧拖尾的差异（原论文 Figure 6）。*

像素中绿色峰高约 1.26 在 1.1 附近黄色峰低约 0.91 在 1.0 附近黄色右侧拖尾更宽并延伸至 2.0 附近绿色在 1.8 附近即收尾该形态与原文累计值方向大体一致但图内无数值标注只能作定性判断。原文报告 GPT-4o 累计 4.89% 与 Gemini-3.1 累计 5.41% 以及撤除审核后 5 类幻觉分别上升 14% 、 12.53% 、 10.10% 、 18.28% 与 16.74% 均为文字附加结论本图不能直接证实精确百分比。结合实例看证人在异议成立后仍作答、被告突然反问控方等越权行为正是审核回路要拦截的典型失效。

### 在引用这套合成数据前需要确认的边界与复现条件

#### 合成前提与覆盖边界

所有结论都建立在合成前提上。数据集共 600 分钟折合 10 小时覆盖 10 类案件类型每类对应 20 个合成案件不按有罪与否划分混合诉求。文本由同一编排流程生成语音为两种合成引擎的结果未经真实法庭部署验证。人工听感仅覆盖 60 分钟中的抽样幻觉占比由单名专家审听 60 分钟得出 3 名专家打分的 60 分钟与客观转写的全量在覆盖范围上并不对等。3 名专家共获 6000 卢比报酬单名复核幻觉的专家获 2000 卢比。FAD（弗雷歇音频距离）参照仅 10 分钟真人朗读 UTMOS（语音自然度预测）等神经代理分数不能替代人工 MOS（平均意见分）缺人工打分与置信区间的声学结论只能视为代理信号。

人类专家对 GPT-4o 生成语音的累计幻觉率为 4.89% 其中程序漂移 1.25% 法律逻辑编造 1.16% 语境剥离 1.04% 时间错位 0.80% 幻觉循环 0.64% 。Gemini-3.1 生成语音累计 5.41% 程序漂移 1.58% 语境剥离 1.27% 时间错位 0.98% 法律逻辑编造 0.96% 幻觉循环 0.62% 。两组数字说明听感打磨并未消除结构性失真越是依赖长上下文推进庭审微小虚构越易被后续论证当作事实沿用。

有无价值评估模型的对比显示撤除该审计后 5 类幻觉分别上升 14%、12.53%、10.10%、18.28% 和 16.74% 程序漂移与时间错位反弹最明显。声学侧原文报告音高相关 0.665 、能量相关 0.661 与时长相关 0.721 ，但前文已述该组正均值与密度图负值主体的视觉出入原文未解释。按原文文字男性语音在 MCD（梅尔倒谱失真）与 STOI（短时客观可懂度）上数值偏高女性语音在 PESQ（语音质量感知评估）上更优但 MCD 高值拖尾按颜色定义以黄色延伸更远同样存在视觉出入单一指标选型会偏袒某一性别。

分工上监督者承担书记员职责负责证人宣誓与庭审阶段推进等程序衔接价值评估模型只做审计而不参与对话重点检查程序漂移、法律编造与知识隔离是否越界。被告与证人仅能接触部分案情证人可信度随矛盾检出而浮动口译员坚持逐字对应且执行前保留 1500 毫秒静音缓冲法庭记录员只记在案原话陪审团代表在评议前保持观察法警干预阈值随刑事与行政等不同敏感度由系统自定。

#### 可复现性区分与工程选型

可复现性上需区分三件事。代码在 Zenodo 20542851 当前可用状态码为 200 作者标注已公开。样本音频链接 Zenodo 20543372 在论文中被提及且当前可达但属于第三方资源不能据此认定作者已开源全部数据。数据集正文称接受后公开当前未确认可下载采样率等信号规格与训练硬件、优化器参数均未披露提示驱动与合成无需模型训练推理侧 RTF（实时系数）与显存同样未披露复现时只能核对流程与评分口径。

工程选型上若任务偏向分析与面向当事人沟通可优先参考 GPT-4o 在法律逻辑与情感韵律上的优势若任务处于高对抗庭审机制与频繁打断场景可参考 Gemini-3.1 在打断逻辑与语音质量上的优势但须接受其程序漂移更高的代价。有试听条件时建议对照比较法官降调、检察官抢话、被告颤抖与公众低语是否可分重点听异议后是否出现证人继续作答等越权片段这正是价值评估模型要消除的失效模式。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、码率、通道数与特征维度；仅知总量 600 分钟，平均句长 10.42 词到 17.135 词总时长约 599.40 分钟；唯一时间参数为译员 1500 ms 静音缓冲，RTF 与前瞻延迟未披露。
- **训练与评测数据**：无模型训练阶段，全程为冻结模型提示驱动与语音合成；文本由多智能体流程生成，语音由 Gemini-3.1 与 GPT-4o 合成 600 分钟约 10 小时，覆盖 10 类案件每类 20 个案例；人工评测 60 分钟，客观转写用 Whisper-large-v3 ，FAD 参照 10 分钟真人朗读。
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量、训练步数与耗时；因无模型训练阶段仅涉及提示生成与语音合成调用，推理所用硬件与耗时原文未披露。
- **核心超参数与配置**：原文未披露优化器、学习率、批大小与网络层数等训练超参；可确认的流程参数为 11 个角色智能体、每轮至少 5 个参与、译员 1500 ms 静音缓冲、人工评分 0 到 5 分与 95% 置信区间检验。
- **推理速度与部署开销**：原文未披露 RTF 、延迟、吞吐与显存占用；仅知最终产出 600 分钟音频，两种引擎的合成耗时与参数量未报告，无法换算实时率。
- **开源产物与协议状态**：代码在 Zenodo 20542851 当前可用且作者标注已公开；样本音频链接 Zenodo 20543372 为论文提及且当前可达的第三方资源，不证明全部数据已开源；数据集称接受后公开，当前未确认可下载，README 覆盖原文未披露。
- **附录与补充材料要点**：附录定义五类幻觉并给出证人抢答与虚构判例等实例，解释基音能量耦合与时长右移成因，说明 MCD 、 PESQ 与 STOI 的性别偏向机理，并报告按性别拆分的平均句长与分钟数；无形式化证明与超参表已声明方法图经 AI 辅助生成。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.7/10** | 创新 5.4/10 | 技术严谨 5.5/10 | 实验充分 6.1/10 | 清晰度 5.2/10 | 影响力 5.0/10 | 开源 6.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10
- 排名：后50% | 文档类型：数据集与基准
- 会议身份：`conference:wochat:2026:conference-paper-id:deroy26_wochat`
- 会议来源：[官方记录](https://www.isca-archive.org/wochat_2026/deroy26_wochat.html) · [官方 PDF](https://www.isca-archive.org/wochat_2026/deroy26_wochat.pdf)
- Track：Second Oral Session

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：在60分钟音频上由3名法律专家按8维度0-5分打分并报告Fleiss kappa 0.616-0.769及95%置信区间Student T检验，协议披露较完整。

- 核心优势：覆盖刑事法到破产法10类案由每类20案例并报告平均句长与分钟数及男女声细分，数据规模与分布可核对。

- 核心优势：同一合成文本下对比Gemini 3.1与GPT-4o的8项人工打分与8项客观声学指标，并补充有无价值评估模型的退化对照。

- 主要短板：摘要将表5中Gemini 3.1的FAD 0.015、WER 0.021、BertScore 0.884写成GPT-4o领先，与表格列归属相反且未解释。

- 主要短板：声称可用于法庭语音识别、法律角色识别与小型语音大模型训练，却无任何下游任务增益实证，主张与验证脱节。

- 主要短板：无价值评估模型时增幅缺基数与统计检验且含18,28%笔误，性别差异仅曲线无数值，FAD仅10分钟参照且幻觉审计仅单专家。

---

[← 返回 wochat-2026 论文汇总](/audio-research-portal/posts/conference-wochat-2026/)
