---
title: "CoSE-E: A Benchmark for Code-switched Speech Evaluation in Enterprise Settings"
date: 2026-11-27
draft: false
description: "针对企业场景中混读转写误差向工单路由等任务失败传导难以用字面误差衡量的问题，本文构建 1,212 条五语言对合成基准并引入问答式任务误差率，以八系统评测揭示字面误差与任务成败排序背离且关键实体损坏使任务恶化概率上升约八倍，代价是合成单厂商音频与计算量较大的代理式评测。"
tags: ["数据集", "基准设计", "代码转换", "语音识别"]
categories: ["salma-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "企业混读语音评测如何从字面误差走向任务成败"
paper_digest_original_title: "CoSE-E: A Benchmark for Code-switched Speech Evaluation in Enterprise Settings"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.11"
paper_digest_workbench_source_sha256: "2f4aa00734924efeee2ee7fcf0532feb7b911db3af71f339e50d10cd76e2f5bd"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.salma-1.11/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.salma-1.11.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对企业场景中混读转写误差向工单路由等任务失败传导难以用字面误差衡量的问题，本文构建 1,212 条五语言对合成基准并引入问答式任务误差率，以八系统评测揭示字面误差与任务成败排序背离且关键实体损坏使任务恶化概率上升约八倍，代价是合成单厂商音频与计算量较大的代理式评测。"
paper_digest_reader_sections: [{"heading":"企业语音助手为何需要超越字面转写的混读评测","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"四阶段合成流程如何保证每一句都是真混读","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"问答式评分如何捕捉关键实体丢失","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三档格局与德法排序反转揭示的语义鸿沟","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"混读代价从字面到任务层如何逐层衰减","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"合成语音与问答代理边界下的选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["ServiceNow AI Research"],"name":"Shama Gupta"},{"affiliations":["ServiceNow AI Research"],"name":"Hoang H Nguyen"},{"affiliations":["Qualcomm Technologies, Inc."],"name":"Chelsea Huang"},{"affiliations":["ServiceNow AI Research"],"name":"Lindsay Devon Brin"},{"affiliations":["ServiceNow AI Research"],"name":"Fanny Riols"}]
paper_digest_abstract_sha256: "d4e28c2028650d39ae0c013d24a8fc271ce047b52f32b58c3849edf084b59a18"
paper_digest_sidecars: {"citation.bib":{"sha256":"cd534280630fb997fb7824800c55e73a1e68d37e64e253ac109600ea3f08f077","url":"/audio-research-portal/client/papers/2026-11-27/conference-d4eee1865829c6ec4c051c35/citation.bib"},"citation.json":{"sha256":"90d6417d99f479ea0f6a9aa82b9e5160c7939e8d2bfb97f81df298500971bf1f","url":"/audio-research-portal/client/papers/2026-11-27/conference-d4eee1865829c6ec4c051c35/citation.json"},"citation.ris":{"sha256":"f2853d48513043de2933eb6cbc6abbf5ea6ff4b72f435a4c5e8d58a87c988aee","url":"/audio-research-portal/client/papers/2026-11-27/conference-d4eee1865829c6ec4c051c35/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a9b9b61c5cc122610cf886cc487f0a02247f4f969f51b7152f913205be40dcf1","url":"/audio-research-portal/client/papers/2026-11-27/conference-d4eee1865829c6ec4c051c35/rethink-context.json"}}
paper_digest_paper_id: "conference:salma:2026:conference-paper-id:2026.salma-1.11"
paper_digest_source_kind: conference
paper_digest_conference_id: "salma-2026"
paper_digest_conference_name: "salma-2026"
paper_digest_doi: "10.18653/v1/2026.salma-1.11"
paper_digest_conference_doi: "10.18653/v1/2026.salma-1.11"
paper_digest_conference_record_url: "https://aclanthology.org/2026.salma-1.11/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.salma-1.11.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "c97d46bd428ea24151c932faaed174e817bbcbcddd517f34591c517d88f28173"
paper_digest_api_reader_plan_sha256: "8ea6c083163d75ea6ec4110268d9be356240f8ad51a578e710307572bdc9c854"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6fdd3eaefc644677b135444b41984036bf5133c592793388e3c48b49d6883a94"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "13252757e0148c48cf105f919483bc3611695fe173d9c3aae62f0b780b1dd985"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "961eb831b0870e16bd090eb3ef97338c80bd237936cc52d82fc7954629b0854e"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9fa71b8bf4b0c2155eed56577305fab58b5b49ffd7cd470052a6a1c7fbc3f2bc"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"setting","id":"setting.code-switching","label":"代码转换"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "基准设计"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 企业混读语音评测如何从字面误差走向任务成败

> 英文题目：*CoSE-E: A Benchmark for Code-switched Speech Evaluation in Enterprise Settings*

> 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.11`
> DOI：`10.18653/v1/2026.salma-1.11`
> Track：SALMA 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.11/) · [官方 PDF](https://aclanthology.org/2026.salma-1.11.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究条件**：[多语言](/audio-research-portal/papers/?concept=setting.multilingual) → [代码转换](/audio-research-portal/papers/?concept=setting.code-switching)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 7.2/10 | 技术严谨 8.2/10 | 实验充分 6.3/10 | 清晰度 7.0/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 6.0/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Shama Gupta：ServiceNow AI Research
- Hoang H Nguyen：ServiceNow AI Research
- Chelsea Huang：Qualcomm Technologies, Inc.
- Lindsay Devon Brin：ServiceNow AI Research
- Fanny Riols：ServiceNow AI Research

## 📌 核心摘要

**问题与瓶颈：** 企业语音代理处理人力资源与信息技术服务管理请求时，输入常为以非英语为矩阵语言、嵌入英语术语的语码转换 (code-switching, CS) 语音，输出需准确转写关键实体才能正确分单或回答政策问题。现有会话语码转换评测只看转录文本，常用词错率 (Word Error Rate, WER, 越低越好 ↓) 对跨语言书写、大小写与分词高度敏感，且均匀计权会淹没决定任务成败的高信息词。更关键的是错误传播未经检验，即转换点附近的转写失误是否以及多大程度改变下游答案，现有企业语料稀缺使该问题无法回答。

**核心思路与方法架构：** 与最接近的会话语料和商业系统评测相比，增量在于限定企业域、强制全语码转换覆盖并以任务后果为第一目标，保留多指标可比性。流水线以平行人力资源与信息技术服务管理语句为源，先筛选 12 到 40 词且含实体的候选，再用大语言模型生成以非英语为框架、嵌入英语技术片段的多样化文本，随后经数字规范与口语化改写后送入语音合成 (text-to-speech, TTS) 生成 24 kHz、16 位脉冲编码调制单声道音频，最后由母语语言学家校验自然度与保真度。全集含 259 条西班牙语—英语、298 条法语—英语、188 条加拿大法语—英语、173 条德语—英语和 294 条普通话—英语，共 1212 条，自动语音识别 (automatic speech recognition, ASR) 评测时均使用原生自动语言检测。评测除 WER 与语义词错率 (Semantic Word Error Rate, SWER, 越低越好 ↓) 外，以答案错率 (Answer Error Rate, AER, 越低越好 ↓) 为主指标，由问题生成器针对每条参考文本生成 3 个英文理解题，回答器分别依据参考与假设转写作答，对齐裁判比较答案是否语义一致。

**关键实验与核心代价：** 在 5 个语对上比较 8 个系统时，顶层 Scribe-V2、Gemini-3-Flash 与 AssemblyAI 的 WER 集中在 0.02 到 0.05，中层为 Qwen3-Omni、Voxtral、Nova-3 与 Parakeet，Whisper-Large-v3-Turbo 因自动检测下译码为翻译模式而显著落后。同一语对内排序随指标改变，在西班牙语—英语上 Qwen3-Omni 的 WER 为 0.042，排名第六，但 AER 为 0.027，低于 Scribe-V2 而居第一，作者报告低约 18%。中文揭示了表层指标脆弱性，Gemini-3-Flash 经繁体到简体归一后 WER 从 0.167 变为 0.090，降幅为 46%，而 AER 保持 0.059 不变，Whisper 的 WER 为 1.494、字错率 (Character Error Rate, CER, 越低越好 ↓) 高达 2.516，但 AER 上界为 0.515。语码转换代价从 WER 向 AER 衰减，62 个非 Whisper 组合中显著为正的比例从 WER 下 63% 降至 SWER 下 50% 和 AER 下 15%，约 80% 语句在 SWER 与 AER 下完全不变，但一旦引入关键实体错误，下游答案恶化概率从约 5% 升至约 40%，风险比约 8 倍。人工校验显示问题可答率在 97.5% 到 99.8%，Gwet 一致性为 0.978 到 0.991，但无感知质量听测，AER 仅为代理指标。

**适用边界与深读导览：** 结论仅在合成干净语音、英语为嵌入语、句内插入型转换及零单语条件下成立，不覆盖电话信道、口吃重叠、多厂商合成及印地语—英语等高用量语对，单厂商合成可能偏向同厂商识别器。欲复核公式含义与显著性口径可查方法概述中的指标与检验设计，欲复核跨语对排序反转与实体传播机制可查实验结果中两张小表及相邻解读。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 企业语音助手为何需要超越字面转写的混读评测

#### 企业场景的切换逻辑

全球半数以上人口使用两种或更多语言，混读是在单句内自然切换语言的常见策略。社交场景的切换多与身份与风格相关，企业场景则不同，说话人保持矩阵语言的语法框架，在关键位置嵌入英语领域术语以处理工单、澄清技术概念或适配混合知识库。例如西班牙语、法语、德语或普通话框架中嵌入 VPN 、工单编号与主机名等英语片段，切换点少而信息量大，转写稍有偏差即可能影响后续动作。

已有混读语音评测多来自会话语料，按矩阵语言与嵌入语言划分并仅报告转写的 WER 、 CER 与 MER 。这类编辑距离假设存在唯一规范参考文本，要求逐词比对表面形式。在混读下该假设不再成立，音译、混合书写、借词与切换的边界模糊、大小写与分词差异都会显著扰动分数。更关键的是，企业语音助手关心工单路由与政策检索是否成功，均匀加权的字面误差会把关键实体错误稀释在大量功能词之中，无法刻画误差向下游的传导。

#### 从表面误差到任务保真

误差传导本身并非混读独有，但混读可能放大传导。切换点恰是声学与语言模型最不可靠的位置，而被切换进来的词往往决定任务走向。企业混读呈现插入式特征，英语内容词或短语被嵌入非英语框架，错误集中在少量高信息词而非均匀散布。最接近的商业系统评测覆盖阿拉伯语、波斯语与德语的英语混读，但缺少普通话这类异文字对照、母语者审校与端到端任务视角，难以回答转写失败何时会变为任务失败。

本文提出 CoSE-E 基准与多维评测框架，试图同时回答两件事。第一，构建覆盖人力资源与信息技术服务管理流程的合成混读基准，共 1,212 条话语，横跨西班牙语英语、法语英语、加拿大法语英语、德语英语与普通话英语 5 个语言对，全部经过语言学校验且单语比例为 0.00% 。第二，以 WER 、 SWER 与 AER 3 种指标系统评测 8 个前沿系统，并以单语对照量化混读带来的附加代价，揭示语言对与模型相关的失效模式。

基准构建分为 4 个阶段。先从人力资源与信息技术服务管理平行语料中筛选长度在 12 到 40 词、含至少 3 个可切换实词且非实体主导的话语，再以人物设定提示生成矩阵语言为非英语、嵌入片段为英语的多种变体。随后经数字与符号口语化改写后合成语音，欧洲对采用第二代合成器，普通话对采用第三代合成器以保证声调与韵律，最后由兼具母语能力与企业语用知识的语言学者逐条审听，不自然或误读者退回再生或剔除。

评测以回答错误率为主要依据，辅以字错率与语义字错率对照。问答机制分三步走，先从参考文本生成 3 道指向标识符、技术术语与动作承载词的英文理解题，再分别依据参考文本与假设文本作答，最后逐题判定两组答案是否一致，不一致题数占比即为该条得分。该设计对大小写、繁简与分词等表面改写不敏感，而当主机名、工单编号等关键实体被破坏时则稳定翻转，因而更贴近工单分派与知识问答等下游成败。

### 四阶段合成流程如何保证每一句都是真混读

要理解 1,212 条数据的来源，需要先看清从平行语料到人工校验的完整链路。下图自左向右展示 4 个彩色阶段与底部数据分布，箭头表示主路径，底部虚线表示不合格样本返回文本生成的迭代。阅读时可先把握每一阶段的输入与输出，再对照底部五语言对的数量分布，形成对合成基准可信度的整体判断。

[![原论文 Figure 1：Overview of CoSE-E Generation Pipeline Language Pair Dataset Matrix Language Embedded Language #…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-1.png)

*论文图 1：四阶段合成流程与五语言对数据分布总览（原论文 Figure 1）。*

像素显示第一阶段为蓝色候选筛选框，列出信息技术服务管理与人力资源平行语料、 12 至 40 词、至少 3 个内容词与非实体主导 3 条准则，输出为过滤候选。第二阶段为绿色文本生成框，标注 GPT-5 与人物设定提示，强调矩阵语言为非英语而嵌入英语片段且位置长度多变。第三阶段为橙色音频合成框，区分欧洲对使用 V2 与普通话对使用 V3 ，目标为声调准确、韵律自然与多语连贯。第四阶段为红色校验框，由母语者与语言学家检查自然模式、领域适配与语言真实性。底部绿色总览框明确 1,212 条的 5 对分布，分别为 259 条、 298 条、 188 条、 173 条与 294 条，虚线回路标示必要时重新生成。底部最右标签像素渲染为 ZH/-EN ，多一斜线短横，含义即普通话英语对。

#### 与会话基准的实质差异

与 SwitchLingua 、 CS-FLEURS 、 SEAME 与 ASCEND 等会话基准相比，CoSE-E 的增量在于领域与约束。保留的是自然混读的插入式形态，替换的是社交闲聊为人力资源与信息技术服务管理工单场景，并强制单语比例为 0.00% ，而对照语料含有 3.24% 至 67.29% 的单语内容。欧洲 4 对的每句切换数保持在 4.95 至 6.91 ，混合指数在 0.26 至 0.33 ，普通话对则为 2.86 次切换与 0.10 混合指数，反映大陆普通话嵌入短英语词的插入特征。信号规格统一为 24 kHz 16 位脉冲编码调制，欧洲对使用 Multilingual V2 ，普通话对使用 Multilingual V3 ，男女声各占 50% ，共 10 个声音，以保证声学真实性。

#### 从文本到校验的端到端链路

以 1 秒样本为例， 24 kHz 单声道对应约 24,000 个采样点。流程按序为文本归一化、口语化改写、语音合成与人工校验。第一步用确定性规则处理电话号码与标识符的逐位拼读，第二步用大模型将缩写符号转为可读形式并保留中英切换，第三步按语言选择合成器，第四步由具备企业混读知识的母语者逐条核验自然度与保真度，不合格者返回第二步。原文未披露各识别系统内部的帧长、步长、特征维度与码本结构，此处如实说明缺失。本基准无模型训练阶段，所有系统均为现成零样本推理，解码时均不传入语言标识以模拟真实部署，默认参数运行，冻结与更新边界清晰。

### 问答式评分如何捕捉关键实体丢失

字面误差无法区分大小写改动与主机名损坏，问答式评分试图只对任务关键信息计分。下图展示三角色流程，左侧为参考文本与识别输出，中间为两次作答，右侧为对齐判断。沿箭头可看清问题从何而来，答案在何处比较，这是理解归一化不变性与后果敏感性的关键。

[![原论文 Figure 3：The AER pipeline (Pulikodan et al., 2025).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-3.png)

*论文图 3：三角色问答式评分流程与参考假设双路作答比较（原论文 Figure 3）。*

像素呈现上下两路对称结构，上方参考文本进入 LLM1 生成问题，问题分别与参考文本和下方识别输出一同进入两个 LLM2 分支得到两组答案，两组答案再进入 LLM3 得到对齐结果。连线标注问题与答案的流向，方框数量为 1 个问题生成器、 2 个作答器与 1 个判断器。实例化时问题生成与对齐判断使用 Gemma-4-31B ，作答使用 GPT-4.1 ，每条话语生成 k = 3 个问题，问题限定为英语且答案必须在原文逐字可定位，附录给出完整提示词。原图两处连线标签拼写为 Qestions ，缺字母 u ，应为 Questions ，不阻断三角色流程语义。

#### 3 种指标的分工与中文处理

WER 为表面基线，逐词计分。 SWER 奖励保持语义的表面差异并惩罚改变语义的错误。 AER 为主要指标，定义为假设答案与参考答案不一致的问题比例，取值在 0.0 至 1.0 之间。普通话对额外报告 CER ，其中 WER 采用 jieba 分词的词级计算，全部普通话输出在评分前经 OpenCC 由繁体统一转为简体。繁简差异的量化需要单独表格支撑，下表对比同一系统在转换前后的变化，可判断何种指标对字形归一化免疫。

| Condition | WER | SWER | AER |
| --- | --- | --- | --- |
| Before T→S normalisation | 0.167 | 0.010 | 0.059 |
| After T→S normalisation | 0.090 | 0.010 | 0.059 |
| ∆ | −46% | — | — |

该表显示转换前 WER 为 0.167 ，转换后为 0.090 ，降幅标注为 46% ，而 SWER 保持 0.010 与 AER 保持 0.059 不变。这种稳定性说明问答式判断恢复答案时不受字形影响，表面归一化选择不再进入计算。随机性方面，仅重跑判断器时 3 轮不一致率为 0.0% 至 0.5% ，重跑作答器后再判断时升至 0.7% 至 1.0% ，说明主要波动来自作答而非判断。3 位标注者独立判断问题是否可由原文回答，通过率为 97.5% 至 99.8% ，一致性系数为 0.978 至 0.986 ，普通话对因人力仅用 2 位标注者，结论仍支持问题集可作为稳定基础。

### 三档格局与德法排序反转揭示的语义鸿沟

八系统在五语言对上的表现并非单一排序，字面与语义指标会给出不同名次。下图按字面、语义与任务三行、英语对照与非英语对照两列展示 7 个系统的平均增量，颜色区分语言对，图注说明竖线表示自助法置信区间，星号标记置换检验显著性。先把握纵轴正值表示混读更难，再比较星号从上到下如何稀疏，这是理解代价衰减的直观入口。

[![原论文 Figure 2：Mean per-utterance code-switching cost, ∆= m(cs) −m(mono); positive values indicate codeswitching…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-2.png)

*论文图 2：七个系统相对单语对照的逐句混读代价均值与显著性（原论文 Figure 2）。*

像素显示首行 WER 柱多为正值，高位组控制在约 0.02 至 0.05 ，中位组在困难对上达 0.07 至 0.10 ，星号密集。第二行 SWER 柱高明显降低，星号减少。第三行 AER 柱更矮且多数无星，仅个别法语对柱保留显著性。左右两列对比显示，相对英语对照的增量整体高于相对非英语对照，左侧英语对照下普通话紫色柱在首行 WER 与次行 SWER 均为小正值，仅在末行 AER 中出现负值与接近零值，右侧非英语对照下普通话柱多在零线附近小幅摆动。 Whisper 未出现在本图，其增量可达 2.5 ，另图单独展示。

#### 模型分层与指标背离

八系统涵盖专用识别与大音频语言模型，解码均不传入语言标识。 Friedman 检验确认三指标下系统差异显著， WER 聚为三档，高位为 Scribe-v2 、 Gemini-3-Flash 与 AssemblyAI ，中位为 Qwen 、 Voxtral 、 Nova-3 与 Parakeet ， Whisper 因翻译模式垫底。 Qwen 在西班牙语英语上 WER 为 0.042 位列第六而 AER 为 0.027 位列第一，相对 Scribe 低 18% ，说明中位模型完全可能在任务指标上反超。高位四者之间 AER 经校正后互不显著，单指标内部一致性由 WER 的 0.23 降至 AER 的 0.03 ，跨指标排序一致性仍高达 0.963 ，表明粗分层稳定而细名次易位。

为比较语言对本身的难度，需要将 8 个系统的名次平均并检验一致性。下表展示 4 个拉丁文字对在 3 种指标下的平均名次，名次 1 表示最易，名次 4 表示最难，便于观察德语与法语位置的互换。

| Language pair | WER | SWER | AER |
| --- | --- | --- | --- |
| EN/DE | 2.62 | 1.38 | 1.50 |
| EN/ES | 1.75 | 2.00 | 2.25 |
| EN/FR-CA | 3.62 | 3.13 | 2.88 |
| EN/FR | 2.00 | 3.50 | 3.38 |
| Friedman χ2(3) | 10.05 | 13.95 | 9.45 |
| p | .018 | .003 | .024 |
| Kendall’s W | 0.42 | 0.58 | 0.39 |

该表显示西班牙语英语在 WER 列数值为 1.75 ，低于同列其余 3 对。德语英语在 SWER 列为 1.38 ，在 AER 列为 1.50 ，均低于同列其余数值。法语英语在 WER 列为 2.00 ，但在 SWER 列升至 3.50 ，在 AER 列升至 3.38 。这种反转说明德语积累形态与大小写等表面词形错误，法语错误虽少却落在任务关键内容上，加权均匀的字面指标因此产生误导。一致性系数由 SWER 的 0.58 降至 AER 的 0.39 ，表明越接近语义，系统间名次越容易互换。

#### 加入普通话后的规模效应

加入普通话后需剔除不支持中文的 3 个系统以保持设计平衡，仅保留 5 个系统。下表展示 5 对组合在 3 种指标下的平均名次，名次 1 表示最易，名次 5 表示最难，可检验表面最难是否等于任务最难。

| Language pair | WER | SWER | AER |
| --- | --- | --- | --- |
| EN/DE | 2.80 | 1.60 | 1.60 |
| EN/ES | 1.20 | 1.60 | 1.80 |
| EN/FR | 2.20 | 4.00 | 4.40 |
| EN/FR-CA | 3.80 | 3.20 | 3.00 |
| EN/ZH | 5.00 | 4.60 | 4.20 |
| Friedman χ2(4) | 17.12 | 15.04 | 13.60 |
| p | .002 | .005 | .009 |
| Kendall’s W | 0.86 | 0.75 | 0.68 |

该表显示普通话英语在 WER 列为 5.00 ，在 SWER 列为 4.60 ，均为同列最高数值，反映分词与字形带来的表面困难。但在 AER 列其数值为 4.20 ，低于法语英语的 4.40 。德语英语在 AER 列为 1.60 ，仍处于靠前位置。这种分离再次证明表面分数高低不能直接等同任务难度，中文大量表面错误散布于切分与归一化，而非法语那样集中于关键内容。原文完整 Table 11 的 Friedman 与一致性行本精简表已完整列出，无需另行说明缺失。

### 混读代价从字面到任务层如何逐层衰减

附加代价定义为同编号话语在混读与单语条件下的误差差值，正值表示混读更难。下图单独展示 Whisper 的六宫格，纵轴量级远大于前图，横轴为五语言对，星号标记显著性。先注意纵轴刻度与前图的数量级差异，再观察普通话柱在三行均为最高，这是理解解码模式失效与渐进式代价区别的关键。

[![原论文 Figure 4：Mean per-utterance code-switching cost for Whisper-only across all five language pairs, but…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/salma-2026/868f45c8fc38/figure-4.png)

*论文图 4：仅 Whisper 系统在五语言对上的混读代价规模（原论文 Figure 4）。*

像素显示左侧英语对照与右侧非英语对照各三行，首行 WER 普通话柱高达约 2.5 ，其余 4 对柱在约 0 至 0.9 之间。第二行 SWER 普通话柱约 0.45 ，其余在 0.05 以下。第三行 AER 普通话柱约 0.43 ，其余在 0.08 以下。所有普通话柱均带三颗星，其余多数亦显著。这种整体偏离源于未指定语言时系统检测单一语言并将余部译为英语，而非转写混合话语，属于模式失效而非同一代价的放大，正文因此将其排除在主分析之外并在附录单独报告。

#### 字面代价显著而任务代价稀疏

排除 Whisper 后，主分析比较 7 个系统在两种单语对照下的差值显著比例。下表汇总关键实体错误引入时下游答案恶化的概率、风险比与优势比，可直接读出 8 倍效应的量级与对照稳定性。

| Baseline | P(AER worsens) entity err. | P(AER worsens) no err. | RR | OR |
| --- | --- | --- | --- | --- |
| English | 0.44 | 0.054 | 8.3 | 14.0 |
| non-English | 0.39 | 0.052 | 7.6 | 11.8 |

该表显示相对英语对照，引入实体错误时答案恶化概率为 0.44 ，无错误时为 0.054 ，风险比为 8.3 ，优势比为 14.0 。相对非英语对照，对应数值为 0.39 与 0.052 ，风险比为 7.6 ，优势比为 11.8 。两行对照接近，说明实体损坏到任务失败的链路不依赖对照语言。结合正文统计，显著比例由 WER 的 63% 降至 SWER 的 50% 再降至 AER 的 15% ，未变化话语比例由 35% 升至约 80% ，多数表面错误并未改变含义，存活的少数则对应真实任务失败。

#### 实体错误是任务失败的集中通道

为检验实体链路是否跨语言对成立，需要按语言对拆分列联表。下表展示 4 对组合在两种对照下的实体错误引入与答案恶化计数、总数与条件概率，可观察传播率的稳定性与例外。

| Baseline Pair | Entity Error Worse | Entity Error Flat | No Entity Error Worse | No Entity Error Flat | N | PEE |
| --- | --- | --- | --- | --- | --- | --- |
| ES/EN | 93 | 152 | 87 | 1,441 | 1,773 | .380 |
| FR/EN | 157 | 159 | 106 | 1,628 | 2,050 | .497 |
| EN |  |  |  |  |  |  |
| FR-CA/EN | 92 | 106 | 61 | 1,038 | 1,297 | .465 |
| DE/EN | 38 | 61 | 38 | 1,049 | 1,186 | .384 |
| ES/EN | 70 | 136 | 63 | 1,520 | 1,789 | .340 |
| FR/EN | 98 | 136 | 131 | 1,703 | 2,068 | .419 |
| non-EN |  |  |  |  |  |  |
| FR-CA/EN | 47 | 76 | 61 | 1,116 | 1,300 | .382 |
| DE/EN | 33 | 34 | 42 | 1,073 | 1,182 | .493 |

该表显示英语对照下条件概率分布在 0.380 至 0.497 之间，非英语对照下分布在 0.340 至 0.493 之间，无错误基线率始终约为 0.05 。破坏性示例中两处主机名在单语下均正确，在混读下被所有尝试系统损坏为 host2win54 与 OS365 等形式， AER 由 0 转为 1 。修饰性示例中表名大小写与分隔符改动带来多处词级错误，但取值仍可恢复， AER 保持 0 。按类别看，标识符、邮箱、网址与电话相对英语对照上升 0.08 至 0.12 ，相对非英语对照总体下降 0.02 ，姓名不受影响。两段式模型进一步显示混合指数优势比约为 1.0 且多不显著，切换数仅在法语英语对 7 个系统中 6 个显著，其余稀疏，长度系数因 WER 自身除以词数而部分为定义所致。

### 合成语音与问答代理边界下的选型建议

#### 合成来源与覆盖边界

合成音频决定了结果为部署上限。全部音频由单一厂商合成，欧洲对使用 V2 ，普通话对使用 V3 ，未包含电话带宽、口吃与背景噪声。单一厂商选择带来潜在偏好， Scribe-v2 与合成器同源，可能熟悉合成声学特征，未来需多厂商合成以验证无关性。覆盖上仅含以英语为嵌入语的 5 个语言对与人力资源、信息技术服务管理两个垂直领域，高频的印地语英语、阿拉伯语英语、他加禄语英语以及金融医疗等领域不在范围内，仅普通话提供异文字对照。

语料范围同样收窄。全部话语单语比例为 0 ，且限于句内插入式切换，不含交替式与跨轮切换，也不区分插入与已定型英语借词，两者统一标注为嵌入英语而未分别分析误差。普通话对切换密度低于欧洲对，与大陆普通话插入特征一致，正文因此将其作为独立切片报告，跨对比较需注意类型与能力混杂。问答式评测为大模型代理而非端到端执行，排序可能随裁判配置漂移，随机性研究仅界定本次规模下的噪声下限，未排除系统性敏感，且计算量明显大于字面误差，适合模型选型而非持续监控。

#### 问答代理的可靠性与复现要点

复现核对需区分三件事。数据方面原文给出数据集地址与每对数量分布，附录列出人物设定、问答生成、校验与口语化提示词，以及两阶段归一化规则。声音方面列出 10 个声音与 24 kHz 参数及男女各半策略。评测方面列出八系统解码参数与裁判温度、采样与最大长度设置，评测为截至 2026 年中期的现成系统零样本快照，未测量微调或上下文偏置的影响。选型上，若只看 WER 会误判准备度，表面中等而关键实体完整者可能更优，表面更低而实体损坏者可能失效，建议以 AER 做最终选择并以 WER 做日常回归，两者背离时优先排查标识符、主机名、网址与邮箱等高信息片段。

人工校验支撑了问答基础。每条参考文本对应 3 道题，由 3 名标注者独立判断问题能否仅从原文找到依据，普通话对因人力所限由 2 名完成，各语言通过率集中在 97.5% 到 99.8% ，组内一致性指标同样高达 0.978 到 0.991 ，说明题面可靠。随机性试验固定题面后重复运行裁判三次，非一致率仅在 0.0% 到 0.5% ，重采样作答后再裁判也只升至 0.7% 到 1.0% ，表明波动主要来自作答环节而非裁判本身。

实体破坏是任务失败的主因。引入新的实体错误后回答恶化概率约为 40% ，而无实体错误时仅约 5% ，风险约为 8 倍，且在英语对照与非英语对照下分别保持 8.3 倍与 7.6 倍，逐对检验均显著。大小写改写或数字读法差异等表面改动仍可恢复，不触发回答变化，这正是字面误差与任务误差分离的关键，也是选型时需优先排查高信息片段的原因。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：合成音频 24 kHz 16 位脉冲编码调制，欧洲四对使用 Multilingual V2 普通话对使用 V3 ，男女声各占 50% 共 10 个声音，稳定性 0.5 相似度增强 0.75 风格 0.2 并启用说话人增强
- **训练与评测数据**：内部信息技术服务管理与人力资源平行话语经长度与实体密度过滤生成，终得 1,212 条混读话语含 259 条至 298 条等五对组合，人工问答校验通过率 97.5% 至 99.8% 一致性 0.978 至 0.986
- **算力与训练耗时**：无模型训练阶段，八系统零样本推理，原文未披露推理所用 GPU 型号与耗时，裁判最大生成长度与温度等解码参数原文已列出
- **核心超参数与配置**：文本生成温度 1 ，裁判温度 1.0 与 0 ，核采样 0.95 与 0.01 ，核取样 64 ，最大生成长度 12,000 与 32,768 ，每条话语生成 3 个问题，合成稳定性 0.5 等
- **推理速度与部署开销**：原文未披露 RTF 与延迟与显存开销，问答式评分需多次大模型调用计算量明显大于字面误差，绝对数值对应 2026 年中期快照
- **开源产物与协议状态**：原文在脚注给出数据集地址并在附录列出生成与评分提示词，代码与权重是否随附原文未披露
- **附录与补充材料要点**：附录列出生成与评分及口语化提示词，归一化规则，合成声音配置，解码参数，随机性与人工校验，繁简转换影响，Whisper 单独分析，两段式模型细节与实体误差示例

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 7.2/10 | 技术严谨 8.2/10 | 实验充分 6.3/10 | 清晰度 7.0/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 6.0/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:salma:2026:conference-paper-id:2026.salma-1.11`
- 会议来源：[官方记录](https://aclanthology.org/2026.salma-1.11/) · [官方 PDF](https://aclanthology.org/2026.salma-1.11.pdf)
- DOI：`10.18653/v1/2026.salma-1.11`
- Track：SALMA 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：1212条强制零单语覆盖5语对，经母语校验与双基线配对加Holm校正置换检验，协议设计严密可核对。

- 核心优势：同语对内WER与AER排序反转及实体错误致答案恶化风险比约8倍，揭示表层指标与任务后果系统性背离。

- 主要短板：音频为单厂商合成干净语音，不含电话带宽噪声口吃，仅句内插入且英语为嵌入语，声学泛化明显受限。

- 主要短板：AER为大语言模型问答代理指标，未使用MOS或UTMOS等真人听测，感知相关推断缺乏直接人审支撑。

- 主要短板：数据集声称经Hugging Face公开但无可验证精确链接，且未提及代码权重，核心产物开放复用不完整。

---

[← 返回 salma-2026 论文汇总](/audio-research-portal/posts/conference-salma-2026/)
