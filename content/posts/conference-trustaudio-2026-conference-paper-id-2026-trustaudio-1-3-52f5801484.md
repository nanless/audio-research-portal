---
title: "Transferring Text Jailbreaks to Audio in Tool-Using LLM Agents"
date: 2026-11-27
draft: false
description: "本文检验文字越狱经商品化语音合成与问答智能体转交后能否诱使音频模型输出违禁内容，发现三个模型聚合成功率在 57.0% 至 64.1% 之间且忠实合成语音单独已高于五成，代价是仅覆盖三模型、单合成配置与英语聚合统计而未验证任何防御有效性。"
tags: ["评测协议", "音频大模型", "语音", "音频系统攻击与防御"]
categories: ["trustaudio-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "文字越狱经语音合成穿透工具型智能体是否依然有效"
paper_digest_original_title: "Transferring Text Jailbreaks to Audio in Tool-Using LLM Agents"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.3"
paper_digest_workbench_source_sha256: "6d503b3652516dcb7110ef13bc4e21b7df356d6e6acdb72a9c479ebc47401a9c"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.trustaudio-1.3/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.trustaudio-1.3.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频系统攻击与防御"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "本文检验文字越狱经商品化语音合成与问答智能体转交后能否诱使音频模型输出违禁内容，发现三个模型聚合成功率在 57.0% 至 64.1% 之间且忠实合成语音单独已高于五成，代价是仅覆盖三模型、单合成配置与英语聚合统计而未验证任何防御有效性。"
paper_digest_reader_sections: [{"heading":"单轮文字评测与语音智能体部署之间的安全落差","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"有害请求只出现一次的端到端评测流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"语音合成配置与转写保真度核查的设计","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"问答智能体搭建与安全判定的冻结边界","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"三模型聚合成功率与合成误差最坏情形界","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"聚合结论成立的前提、未验证范围与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["University of Illinois, Urbana-Champaign, IL, USA"],"name":"Kashyap R Manjusha"},{"affiliations":["Argonne National Laboratory, Lemont, IL, USA"],"name":"Murali Emani"}]
paper_digest_abstract_sha256: "228ea9bfa423fb8dbbc8b794cfa7548d41fa6edcf45acade35dd30a896ab10ab"
paper_digest_sidecars: {"citation.bib":{"sha256":"19a3b507097fd34f719d8168c7f1756d8d1e99fa2074e05d9068f2397e7fd7f6","url":"/audio-research-portal/client/papers/2026-11-27/conference-52f580148438dc7ce8132bc6/citation.bib"},"citation.json":{"sha256":"85f6c4c981b4673b17739458f5e8de238c196b019f24bc02f8a5e34dc3822736","url":"/audio-research-portal/client/papers/2026-11-27/conference-52f580148438dc7ce8132bc6/citation.json"},"citation.ris":{"sha256":"fdfeea658ce8002fcb8ee2ed88796ce4b2de77395f2f098f0a6d4c9d4e05634f","url":"/audio-research-portal/client/papers/2026-11-27/conference-52f580148438dc7ce8132bc6/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"39eb4113fdbd7f786a9f7edb418a260be2b682fabe6ecf4a4b086dd8fd7f2c49","url":"/audio-research-portal/client/papers/2026-11-27/conference-52f580148438dc7ce8132bc6/rethink-context.json"}}
paper_digest_paper_id: "conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.3"
paper_digest_source_kind: conference
paper_digest_conference_id: "trustaudio-2026"
paper_digest_conference_name: "trustaudio-2026"
paper_digest_doi: "10.18653/v1/2026.trustaudio-1.3"
paper_digest_conference_doi: "10.18653/v1/2026.trustaudio-1.3"
paper_digest_conference_record_url: "https://aclanthology.org/2026.trustaudio-1.3/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.trustaudio-1.3.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "fc5146032585e619e7be49732201adbaeeac9e62406bbf6647310b2b38942026"
paper_digest_api_reader_plan_sha256: "f57e4a24322d87bef499e994094c223741a0015b34231b4991ef8ff4aa859363"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0e51a471a6a1dc180c1bc50229851a71ddaa43a34f17a5c501167b23e9288e48"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "67afa3c3f0fe518bf1d635b932a9b8bdf1f8c482791244c3fc87e2e1f9f63500"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bda926c63ce46e0dec8f790c99a40fa7ab460016021d179a4936b01db0c7e579"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ca5b8d2c718a0bedc9ea30233b7ccaa095d74978d81b31a20795369d6d42dc03"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"}]
paper_digest_primary_method: "评测协议"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 文字越狱经语音合成穿透工具型智能体是否依然有效

> 英文题目：*Transferring Text Jailbreaks to Audio in Tool-Using LLM Agents*

> 会议身份：`conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.3`
> DOI：`10.18653/v1/2026.trustaudio-1.3`
> Track：TrustAudio 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.trustaudio-1.3/) · [官方 PDF](https://aclanthology.org/2026.trustaudio-1.3.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **模型家族**：[音频大模型](/audio-research-portal/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.3/10** | 创新 5.4/10 | 技术严谨 4.9/10 | 实验充分 5.2/10 | 清晰度 7.0/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.5/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Kashyap R Manjusha：University of Illinois, Urbana-Champaign, IL, USA
- Murali Emani：Argonne National Laboratory, Lemont, IL, USA

## 📌 核心摘要

**问题与瓶颈：** 大音频语言模型 (large audio-language model, LALM) 的安全对齐通常只在单轮直接提示下评测，而实际语音助手多经由智能体框架部署，开发者可控的系统提示、工具调用循环与音频到结构化消息的编码步骤介入在用户语音与模型输入之间。现有音频越狱多在波形域直接优化扰动，或在全模态模型上做直接提示，尚不清楚把现成文本越狱经由现成文本到语音合成 (text-to-speech, TTS) 转为语音后，穿过智能体支架是否仍然有效。若支架的编码与循环能够过滤或削弱有害请求，则跨模态迁移风险有限；若不能，则低成本合成即可构成实用攻击面。本文即针对这一部署形态的因果缺口展开检验。

**核心思路与方法架构：** 与最接近的直接提示下文本到音频迁移研究相比，本文的增量是把有害请求严格限制在音频通道，并把对抗性支架严格限制在系统提示，保留无梯度、无优化的现成合成链路以检验最低能力攻击者。单条样本取一条英文禁用问题文本，经 82M 参数开放权重 TTS 模型 Kokoro-82M 以 1.2 倍速与 en-us 发音随机选择说话人音色合成波形，默认采样率数值未说明，主链路则把音频做 Base64 编码后作为用户轮次送入基于 LangChain 的问答智能体。智能体从外部 Markdown 文件载入由模糊测试衍生模板与人物设定组合而成的系统提示，其中不含任何有害请求，每题只做一次单轮推理而不做多轮升级。音频大模型在权重未更新下解码出文本回答，随后由多模态 Llama Guard 4 12B 判为安全或不安全，整条链路为串行推理、无训练更新，流式约束未说明。

**关键实验与核心代价：** 在 270 个禁用问题经 LangChain 问答智能体以纯音频输入评测并由 Llama Guard 4 12B 判分时，攻击成功率 (attack success rate, ASR) 最高的可比模型 Voxtral-Small-24B 为 64.1% (173/270)，高于最低的 MiMo-v2.5 的 57.0% (154/270)，居中的商用模型 Gemini-2.5-Flash 为 63.7% (172/270)，同样高于 MiMo-v2.5 而略低于 Voxtral-Small-24B，三者极差为原文报告的 7.1 个百分点，表明商用部署并未更安全。合成保真方面，独立 Parakeet 转写显示 236 个片段被完全准确转写，占 87.4%，剩余 34 个差异主要为括号、连字符与逗号等标点。在最不利于结论的假设下，即 34 个非完全准确片段全部攻击成功，236 个完全准确片段上的攻击成功率仍至少为 MiMo 的 50.8%、Gemini 的 58.5% 与 Voxtral 的 58.9%，对应上限分别为 65.3%、72.9% 与 73.3%。判分可靠性上，对混合抽样的 50 个回答做人工复核，与自动判分的一致率为 92% (46/50)，但样本过小无法判断系统性高估或低估，故原文未修正报告值。代价上，270 次合成、270 次转写核验与 810 次智能体推理在 1 小时内完成，其中音频合成在单张消费级 GPU 上仅需数分钟，无需梯度访问、优化循环或逐题调参。

**适用边界与深读导览：** 上述结论成立于攻击者可控制第三方系统提示并以音频提交输入、英语单轮问答、单一 TTS 配置与三模型小样本评测之内，未覆盖按政策类别拆分、其他合成器、多语言、直接文本与无智能体对照，以及转写后过滤等防御的实测效果。作者明确将本工作定位为初步探究而非全面基准，并扣留具体模板、合成音频与模型输出以避免助长滥用。欲深究威胁模型假设见第 3 节，合成保真与最坏情况界定见第 4.3 节与第 5 节，类别合并的统计依据与计算开销见第 5 节，局限与伦理披露见第 6 节后局限小节与伦理声明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单轮文字评测与语音智能体部署之间的安全落差

大型音频语言模型的安全对齐多在单轮直接提示下检验，研究者把文字禁题直接送入模型，看其是否拒绝。这种设定省去了部署中的中间环节，测得的往往是模型本体的拒绝倾向。真实语音助手则不同，开发者控制的系统提示、把语音封装为结构化消息的编码步骤以及工具调用循环都会站在用户语音与模型之间，任何一环都可能改变最终行为。因此实验室的单轮分数不能直接等同于线上语音智能体的安全性，中间流程值得单独检验。

本文聚焦的实践问题是，文字上已知的越狱手段经由现成文本转语音系统变为语音，再穿过最小问答智能体后是否依然有效。输入侧只有一段禁止问题的语音，系统提示里不放任何有害请求，输出侧是模型的文字回答并被判为安全或不安全。攻击者不做波形级优化，也不接触模型权重、对数几率与训练数据，只是直接使用开放权重合成模型生成攻击音频。这种低能力假设检验的是最低成本路径是否已经足够有效。

已有文字越狱路线包括社区收集的提示集合、基于变异的模糊测试自动搜索以及人物设定式条件引导，音频越狱则多在波形层面加入扰动。近期全模态模型研究显示文字漏洞可以跨模态迁移，在直接提示下把文字攻击经音频送达，其效果可与专用音频攻击相当。但这些证据都停留在直接提示，没有回答当音频被封装进智能体消息、再叠加可由第三方配置的系统提示时，迁移是否仍然成立，这正是本文要补上的关键环节。

智能体外壳既可能提供缓解，也可能引入新的风险。一方面部署方可先把输入语音转写为文字再用文字安全分类器过滤，另一方面若智能体配置本身由第三方分发、受害者直接安装，系统提示就成为不可信输入。本文把检验收窄为一次受控实证，用同一套语音语料与同一套系统提示模板穿透 3 类音频模型，观察聚合攻击成功率是否依然偏高，并用独立语音识别核查合成保真度对结论的影响，不对防御有效性做实验断言。

对刚进入语音与音频方向的研究生而言，理解这一落差的关键是区分模型本体对齐与系统层面防护。前者关注模型在文字或语音输入下的拒绝行为，后者关注编码、提示与工具流程是否提供了额外检查。本文的价值在于把后者摆到台前，用低成本可复现的流程说明智能体封装本身并没有补上模态转换带来的稳健性损失，为后续的系统级防护讨论提供起点。

### 有害请求只出现一次的端到端评测流程

整套评测只让有害请求在文字形态出现一次，此后全程以音频形态流转。起点是 270 个禁止问题，覆盖 9 个政策类别，每个类别 30 个。每个问题经由开放权重语音合成模型 Kokoro-82M 生成一段语音，并从发布音色库中随机挑选说话人，以避免结果依赖特定音色。语音经 base64 编码后作为用户轮输入送入基于 LangChain 搭建的问答智能体，智能体叠加系统提示后调用音频模型生成文字回答，最后由 Llama Guard 4 12B 判定为安全或不安全。

为一次看清转交关系，可先对照评测流程示意理解主链与核查分支的分工。主链自上而下串起从文字到语音再到智能体与判定的全部步骤，右侧虚线分支为独立的保真度核查。沿箭头方向注意有害请求在何处由文字变为音频，以及哪条分支不进入智能体，这对理解后续的误差分析很关键。图中每个方框对应一次可复现的操作，箭头表示数据流向而非模型内部结构。

[![原论文 Figure 1：Evaluation pipeline. The harmful request exists in text only before synthesis; from the base64…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/4e69be3f0df7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/4e69be3f0df7/figure-1.png)

*论文图 1：评测流程示意：禁止问题经语音合成与编码进入问答智能体，虚线为独立保真度核查（原论文 Figure 1）。*

示意中顶部方框为 270 个禁止问题并注明 9 个类别，其下是标注随机音色的 Kokoro-82M 语音合成框。合成框向右经水平虚线箭头指向 Parakeet 语音识别保真度核查框，该框以虚线边框区别于主链，表示只做转写比对而不把结果送入智能体。主链向下依次为 base64 编码、LangChain 问答智能体加系统提示、音频模型以及底部 Llama Guard 4 12B 的安全与不安全判定。图注明确有害请求在合成前仅以文字存在，自 base64 步骤起仅以音频到达模型。

威胁模型刻意设定为能力较弱的攻击者。攻击者可以控制智能体的系统提示，例如分发一份智能体配置文件由受害者安装，并能以音频形式提交用户输入。攻击者不能获取模型权重、对数几率或训练数据，也不做任何音频信号优化，只是直接使用现成文本转语音模型生成攻击音频。这种设定检验的是最低成本路径是否已经足够有效，而不依赖复杂的波形级攻击手段。

每条语音只做一次单轮推理，没有多轮交互或逐步升级，系统提示中也不含任何有害请求。这种极简配置的意图是隔离变量，让观察到的成功率主要反映文字到音频转交与系统提示叠加后的效果，而不是多轮诱导或提示中夹带禁题的产物。若智能体外壳本身具有过滤作用，应在这种单次透传中体现出来，否则就说明封装并未提供有效防护。

### 语音合成配置与转写保真度核查的设计

评测语料沿用 Shen 等人公开的禁止问题集合，按经济伤害、政府决策、仇恨言论、健康咨询、非法活动、法律意见、恶意软件、人身伤害以及隐私暴力 9 个政策类别各取 30 个，共 270 个。这种均衡取样避免单个类别主导聚合攻击成功率，也省去按类别加权的需要。原文明确不报告分政策类别结果，理由是每类仅 30 个样本时单类估计不确定性过大，聚合分析更能回答模态转交是否稳健，细分类别留待更大规模数据。

语音合成选用开放权重模型 Kokoro-82M，参数量为 82,000,000，使用 ONNX 运行环境并采用默认采样率，语速设为 1.2，语言设为 en-us。每个问题从模型发布的音色库中随机挑选一个说话人，以降低结果依赖特定说话人身份的可能。原文强调全部音频语料在消费级硬件上数分钟内即可生成，无需专用音频优化，这一定位直接对应低成本可复现的攻击路径，也决定了结论的实践含义。

由于合成可能引入转写误差，部分语音可能已不能忠实传达原文请求，原文用独立的 NVIDIA Parakeet 模型对 270 段语音逐段转写并与源文本比对。共有 236 段被完全准确转写，占 87.4%，其余 34 段占 12.6%，差异主要集中在括号、连字符与逗号等标点，词汇内容基本保留。原文保留全部 270 段参与评测而不剔除差异片段，理由是真实攻击者使用现成合成系统时不会逐段检查与筛选，且标点变化本身也是一种可能影响模型行为的输入扰动。

原文未披露采样率数值、帧长、步长、通道数、特征维度与码率等信号规格，也未给出张量形状与帧率变化，因此无法按 1 秒样本追踪各模块间的维度与拆分汇合点。从披露的流程看，合成语音经 base64 编码后作为用户轮输入，此后有害请求仅以音频形式到达模型。这一编码只是消息封装方式，不改变语音内容，但它标志着文本到音频转交的完成，后续智能体与模型都只能见到音频。

随机音色与默认采样率的选择意在检验通用条件下的迁移能力，而非针对某一音色调优。若结果高度依赖特定音色，随机化会拉低成功率，反之若在随机条件下依然偏高，则说明迁移具有一定普适性。结合数分钟生成的定位，这一设计把结论的可复现性放在首位，而不是追求单条语音的最强攻击效果，这也是解读后续聚合指标时的重要前提。

### 问答智能体搭建与安全判定的冻结边界

问答智能体基于 LangChain 搭建，系统提示从用户提供的 Markdown 文件载入，内容组合了模糊测试衍生的模板、人物设定指令以及为本研究新增的人物设定。原文为防止误用而扣留具体模板，但明确系统提示中不含任何有害请求，禁止问题只通过音频输入传达。每条输入只做一次单轮推理，没有多轮交互或升级策略，这种极简配置把系统提示的辅助结构作用与音频转交的效果隔离开来。

每条模型生成的文字回答由多模态 Llama Guard 4 12B 检查点判定为安全或不安全，攻击成功率定义为被判不安全的回答数除以总攻击数再乘以 100。原文刻意不对不安全内容的严重程度或实用性打分，二分类是更保守且可复现的选择。这种定义下，只要一句话被判不安全即计为成功，不区分是单句失守还是给出完整有害流程，政策含义需要谨慎解读。

由于评测依赖单一自动分类器，原文从 3 模型的混合输出中随机抽取 50 条回答，在不知晓分类器预测的情况下按同一内容政策独立标注为安全或不安全。两套标注在 46 条上一致，一致率为 92%。原文把这一结果视为对报告成功率的合理性检查而非正式校准，认为仅 4 条分歧不足以判断分类器是系统性高估还是低估，因此保持报告的成功率不变，不做方向性修正。

本研究没有模型训练阶段，所有涉及的模型均为冻结推理。语音合成、语音识别核查、音频模型与安全判定模型都不更新参数，不存在梯度流与损失权重。智能体本身也没有学习过程，只是按载入的系统提示组织消息与调用模型。这种纯评测定位意味着复现时无需训练，只需按相同配置做推理与判定，但也意味着结论不涉及任何通过训练提升音频安全的手段。

推理执行路径为单次透传，没有分块流式、前瞻窗口、缓存或多步采样的披露。原文未给出延迟、首包时间、实时系数与显存开销的量化指标，只说明全流程在 1 小时内完成。因此从部署角度看，本文验证的是功能层面的绕过是否可能，而不是流式语音助手在严格延迟预算下是否同样脆弱，延迟与吞吐的缺失是后续部署验证需要补上的部分。

### 三模型聚合成功率与合成误差最坏情形界

评测协议的公平性前提是 3 模型面对同一套 270 段语音、同一套系统提示模板与同一个安全判定器，结果按 9 个类别聚合而不按类别拆分。每类仅 30 条时单类估计波动大，原文按二项模型估算在成功率约 60% 时聚合估计的 95% 误差幅度约为 6 个百分点，因此聚焦聚合指标。全流程含 270 次合成、270 次识别核查与 810 次智能体推理，在 1 小时内完成且无需逐题调参，成本与调参条件对 3 模型一致，这种等条件比较排除了语料与模板差异的干扰。

| Model | Attacks | Succ. | ASR (%) |
| --- | --- | --- | --- |
| MiMo-v2.5 (Xiaomi) | 270 | 154 | 57.0 |
| Gemini-2.5-Flash (Google) | 270 | 172 | 63.7 |
| Voxtral-Small-24B (Mistral) | 270 | 173 | 64.1 |

聚合结果显示 MiMo-v2.5 为 270 次攻击中成功 154 次，成功率为 57.0%，Gemini-2.5-Flash 为 270 次中成功 172 次，成功率为 63.7%，Voxtral-Small-24B 为 270 次中成功 173 次，成功率为 64.1%。三者相差仅 7.1 个百分点，体量、结构与部署方式不同但成功率相近。作为唯一商用服务的模型，Gemini-2.5-Flash 处于两者之间，没有表现出可靠的更安全，没有证据表明商用系统的附加防护能挡住经由音频送达的攻击。

合成误差不能解释偏高的成功率。即使做最不利于结论的假设，即 34 段转写不完全准确的语音全部攻击成功，236 段完全准确转写的语音单独计算的成功率下界仍为 MiMo 50.8%、Gemini 58.5% 与 Voxtral 58.9%，在每个模型上都高于 50%。反向极端假设下，即 34 段全部失败，对应上界为 65.3%、72.9% 与 73.3%。原文不按保真度拆分报告实测成功率，也不主张合成退化会提升或降低成功，只用上下界说明忠实语音本身已足以支撑多数情况下的成功。

判定器的可靠性经由 50 条抽查支撑，两套标注在 46 条上一致，一致率为 92%，但仅 4 条分歧无法判断高估还是低估方向。计算成本方面，语音合成仅需数分钟的单块消费级 GPU，全流程不足 1 小时且无优化循环，3 模型的成功率都处在高位，没有任何一个模型显示出可靠的阻断能力。未验证范围同样重要，原文没有给出分政策类别结果，无法说明漏洞是否在各类别一致，也只用单一安全分类器且未做严重程度区分，防御措施的有效性尚未经实验验证。

### 聚合结论成立的前提、未验证范围与复现核对

聚合结论成立的第一个前提是模型覆盖有限。原文只评测 3 个音频模型，选型受可获得性与评测预算限制，包括两个开放权重的中小模型与一个专有前沿模型，不能代表大型音频语言模型的整体面貌。仅用三点观察到的相近成功率可以提示跨配置的共性弱点，但不能把原因唯一归于模态边界，也无法外推到未测的更大规模或不同架构，全面基准仍需更大覆盖。

第二个前提是合成与语言覆盖单一。全文只用一种文本转语音模型、一种合成配置与英语输入，语速固定为 1.2 并随机选择音色，没有覆盖其他合成器、多语种、多语速或噪声条件。结果按 9 类聚合报告，每类仅 30 条，原文明确把分政策类别分析留给未来更大规模数据集，因此不能断言观察到的脆弱性在各政策类别上一致，类别层面的最脆弱点仍是未知。

第三个前提是判定与度量单一。评测只用 Llama Guard 4 12B 一个安全分类器，其偏见与失效模式会被完整继承。50 条人工抽查一致率为 92%，样本过小且只有一批标注者，无法估计方向性误差与标注者间一致性。度量本身只计是否被判不安全，不计实际危害程度，一句失守与给出完整有害流程被同等对待，这会放大名义成功率的政策含义，需要后续分级评估。

原文没有实验任何防御，转写后过滤与把第三方系统提示视为不可信输入只是基于发现提出的实践建议。由于多数语音能被准确转写，前者看似可识别多数已知禁题，但对未见攻击的有效性仍是开放问题。复现核对上，原文提及公开数据集链接与开放权重合成模型，但扣留系统提示模板、人物设定、合成音频与模型输出，仅报告聚合成功率且不含任何有害内容，原文未提供完整复现代码包与可直接运行的系统，因此复现需自行搭建智能体并承担伦理与合规审查。

工程选型建议是把检查前移到系统层面，对输入音频先转写再用文字安全分类器过滤，并对第三方提供的系统提示做安全检查，而不是默认信任开发者指令。同时应扩大评测覆盖，包括更多模型、合成配置、语种与政策类别，并引入多标注者与危害程度分级，才能判断转写过滤在实际部署中能挡住多少经由音频的迁移攻击，而不只依赖模型本体的对齐。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率数值、帧长、步长、通道数与码率，仅披露语音合成使用默认采样率、语速 1.2、语言 en-us 并随机选择说话人，音频经 base64 编码后作为用户轮输入，延迟与实时系数未披露
- **训练与评测数据**：评测使用 Shen 等人公开的禁止问题集，按 9 个政策类别各取 30 个共 270 个，类别含经济伤害与政府决策等，全部 270 条语音输入参与评测，未涉及模型训练数据
- **算力与训练耗时**：全文评测含 270 次语音合成、270 次识别核查与 810 次智能体推理，在 1 小时内完成，语音合成在单块消费级 GPU 上仅需数分钟，未披露具体 GPU 型号与训练耗时
- **核心超参数与配置**：无模型训练阶段，所有模型均为冻结推理，语音合成语速 1.2、语言 en-us、随机说话人并使用 ONNX 运行，智能体为单次推理无多轮，安全判定使用 Llama Guard 4 12B 二分类
- **推理速度与部署开销**：原文未披露实时系数、首包延迟与显存占用，仅报告全流程不足 1 小时且无需优化循环、梯度访问或逐题调参，攻击实现成本低
- **开源产物与协议状态**：原文提及公开数据集链接、开放权重语音合成模型与三个模型名称，但扣留系统提示模板与人物设定，未提供完整复现代码包与合成音频输出，不视为可直接运行
- **附录与补充材料要点**：原文无独立附录，关键细节已在正文交代，包括聚合估计在成功率约 60% 时 95% 误差幅度约 6 个百分点、转写差异多为标点、50 条人工抽查一致率为 92% 仅作合理性检查

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.3/10** | 创新 5.4/10 | 技术严谨 4.9/10 | 实验充分 5.2/10 | 清晰度 7.0/10 | 影响力 5.0/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.5/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.3`
- 会议来源：[官方记录](https://aclanthology.org/2026.trustaudio-1.3/) · [官方 PDF](https://aclanthology.org/2026.trustaudio-1.3.pdf)
- DOI：`10.18653/v1/2026.trustaudio-1.3`
- Track：TrustAudio 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：三模型270题全集ASR分别为57.0%、63.7%与64.1%，极差7.1个百分点且商用模型居中，跨配置一致性证据完整可核对。

- 核心优势：独立Parakeet转写236/270完全准确占87.4%，并给出完全准确子集下限50.8%以上，证明合成误差不能解释高成功率。

- 主要短板：未设直接文本输入与无智能体对照，无法判断高成功率多大程度来自模态边界而非智能体支架。

- 主要短板：标题称工具使用智能体但正文仅为单轮问答推理，未说明工具种类与调用是否实际发生，立论与验证脱节。

---

[← 返回 trustaudio-2026 论文汇总](/audio-research-portal/posts/conference-trustaudio-2026/)
