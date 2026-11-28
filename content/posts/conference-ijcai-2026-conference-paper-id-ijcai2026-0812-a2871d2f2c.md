---
title: "Improving Scientific Formula Verbalization in Large Speech Language Models for Accessible Learning"
date: 2026-11-28
draft: false
description: "针对端到端大语音语言模型误读科学公式的问题，论文以 GLM-4-Voice 9B 为主干构建 Formula-Speech，用 3,417 段对话与 8,678 条公式语音配对数据完成两阶段低秩微调与强化学习，在数学、物理、化学三学科上提升朗读准确性，但语音自然度未同步占优且依赖合成数据与转写评价。"
tags: ["无障碍", "数据集", "LoRA", "文本到语音"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "公式朗读如何让盲生听懂科学符号"
paper_digest_original_title: "Improving Scientific Formula Verbalization in Large Speech Language Models for Accessible Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0812"
paper_digest_workbench_source_sha256: "b274c8c858820504e54b877c852965d31c9378479aed4b1936d2ac5fbda45cd6"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/812"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0812.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "文本到语音"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对端到端大语音语言模型误读科学公式的问题，论文以 GLM-4-Voice 9B 为主干构建 Formula-Speech，用 3,417 段对话与 8,678 条公式语音配对数据完成两阶段低秩微调与强化学习，在数学、物理、化学三学科上提升朗读准确性，但语音自然度未同步占优且依赖合成数据与转写评价。"
paper_digest_reader_sections: [{"heading":"盲生在线学习中公式朗读为何成为关键瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Formula-Speech 如何在冻结主干上补齐公式语义","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"两套数据与两阶段训练如何协同工作","index":3,"kind":"training","roleLabel":"训练与优化"},{"heading":"三学科主结果与级联流程对比说明了什么","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"训练策略消融与语音自然度呈现何种权衡","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、边界与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Guangdong Institute of Smart Education, Jinan University"],"name":"Xueyi Li"},{"affiliations":["TAL Education Group"],"name":"Tianqiao Liu"},{"affiliations":["Guangdong Institute of Smart Education, Jinan University"],"name":"Zitao Liu"},{"affiliations":["Guangdong Institute of Smart Education, Jinan University"],"name":"Teng Guo"},{"affiliations":["Guangdong Institute of Smart Education, Jinan University"],"name":"Yongdong Wu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"7ff111f477c628512a278d6b64ac8ea8c73d68a0fa48c81f414bf4bb93966c2a","url":"/audio-research-portal/client/papers/2026-11-28/conference-a2871d2f2cde898741688607/citation.bib"},"citation.json":{"sha256":"2605293dd6271a636b9869b36c00fb7c7a71c077759903b5c1da99729128b7dd","url":"/audio-research-portal/client/papers/2026-11-28/conference-a2871d2f2cde898741688607/citation.json"},"citation.ris":{"sha256":"a278a330c724366c695381d9527e2050970bbb34591a168dd83063b357f6002b","url":"/audio-research-portal/client/papers/2026-11-28/conference-a2871d2f2cde898741688607/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3ee7a683275c507390d4993fd69e4d553f17a73d3d725f7d7f8686a3213f5cce","url":"/audio-research-portal/client/papers/2026-11-28/conference-a2871d2f2cde898741688607/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0812"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/812"
paper_digest_conference_doi: "10.24963/ijcai.2026/812"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/812"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0812.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "bb587f031d927f8e20159a98f6b39928eddba040e11cebae3fdd84ef26570c4c"
paper_digest_api_reader_plan_sha256: "138d9de76305344812dc472c04d47b46f693621c5510b3524b59c27ba81576f6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cdacb7ec3ba7af280eb03655e0362f75d5a6af48fe2a311c7e6722025848c440"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "077c10acc1f86a365c83d9cfe312a4409f766c89fe54a9ab28ed6d427cd7789c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8b8a32fa4707bb176ff2ddc74e965f8746d3f57579f241dc62879c2222d08c5e"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "87939e056d5c36dd455ecf9ce34ffefca063e3776cae3724faf2b2ea1733e5d2"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.accessibility","label":"无障碍"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "LoRA"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 公式朗读如何让盲生听懂科学符号

> 英文题目：*Improving Scientific Formula Verbalization in Large Speech Language Models for Accessible Learning*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0812`
> DOI：`10.24963/ijcai.2026/812`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/812) · [官方 PDF](https://ijcai.org/proceedings/2026/0812.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)
- **应用**：[无障碍](/audio-research-portal/papers/?concept=application.accessibility)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.4/10 | 影响力 6.0/10 | 开源 6.0/10 | 可复现 6.3/10 | 工程/实践 4.9/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xueyi Li：Guangdong Institute of Smart Education, Jinan University
- Tianqiao Liu：TAL Education Group
- Zitao Liu：Guangdong Institute of Smart Education, Jinan University
- Teng Guo：Guangdong Institute of Smart Education, Jinan University
- Yongdong Wu：Guangdong Institute of Smart Education, Jinan University

## 📌 核心摘要

**问题与瓶颈：** 在线学习中视障学生依赖 AI 助教的语音反馈理解课程，当内容涉及科学公式时只能通过朗读获知结构与语义。论文将任务定义为把 LaTeX 符号序列 x 输入映射为口语化语音词元序列 y 输出，公式具有紧凑层级语法与学科语义，通用语音模型难以直接对齐。主流级联管线串联 ASR 与 LLM 与 TTS，存在高时延与跨阶段误差累积。端到端大语音语言模型虽支持低时延交错生成，却在符号发音上频繁出错，例如将分式乘法读成含 frac 的非自然形式，根因是预训练缺乏公式文本与语音配对，大规模公式预训练又难以获取。

**核心思路与方法架构：** 与最接近的骨干 GLM-4-Voice 相比，增量在于冻结原始参数并插入轻量公式语义适配器，仅以 LoRA 更新查询键值投影，同时新增双语三学科配对数据与重复惩罚加语言模型评判的 GRPO 奖励。单条样本以 LaTeX 输入 \(\frac{1}{2}\) 为例，文本编码器与语音编码器分别输出文本词元与语音词元，对齐后的序列经交错解码同时产生文本片段与语音波形，目标朗读为 One over two。训练分两阶段，先用 EduDialogue 的 3417 段多轮对话与 SciFormula 的 SFT 切分学习公式到口语的基本映射，再用 RL 切分采样 8 个候选并以组内归一化奖励优化简洁性与正确性，骨干权重冻结而适配器更新，论文未披露采样率与帧率故不展开每秒张量形态。

**关键实验与核心代价：** 在 Math2k 中文测试上，Formula-Speech 的 WER（词错率，越低越好 ↓）为 0.3421，低于 Step-Audio 的 0.9846，BLEU（越高越好 ↑）为 0.7082，高于 Step-Audio 的 0.4210，LLMS（0 至 3 分，越高越好 ↑）为 1.5032，高于 Step-Audio 的 1.1019，HumanS（人工准确性，0 至 3 分，越高越好 ↑）为 1.7140，高于 Step-Audio 的 1.1190，三学科英文与中文共 12 组 WER 与 BLEU 均为最优。端到端模型在 4 组平均指标上超过 Whisper-Large-v3 加 Qwen2.5-7B-Instruct 加 CosyVoice2 级联管线，图示未给出可核对数值。消融显示 LoRA-SFT 的平均 WER 为 0.5039，而完整两阶段 LoRA-SFT 加 GRPO 的平均 WER 为 0.5166，平均 BLEU 从 0.5203 变为 0.5297，平均 LLMS 从 1.3709 变为 1.4084，RL 以轻微词级差异换取语义提升。语音质量以 NMOS（归一化平均意见分，最高 5 分，越高越好 ↑）神经代理估计与 HumanF（人工流畅度，0 至 3 分，越高越好 ↑）衡量，图 4 未附数值表，像素显示 Formula-Speech 中文 HumanF 高于 Qwen2.5-Omni，GLM-4-Voice 英文 HumanF 为全场最低而 Formula-Speech 英文明显更高，故正文关于平均最高与两者相近的合并表述与分语言像素不一致，不作为定量结论，代价是 8 个节点各 8 张 NVIDIA A100 GPU 的训练开销。

**适用边界与深读导览：** 结论成立于中英文双语数学与物理与化学公式朗读，且训练语音由 CosyVoice2 合成并经专家复检，评测依赖特定 ASR 转写与 Claude Sonnet 4 打分，未覆盖真实课堂噪声与超长嵌套公式及视障学生的长期学习增益。部署层面未实测流式时延与 RTF（实时因子，越低越好 ↓），8 节点训练成本限制了极低资源复用。深究编码器与适配器与解码器的数据流可查阅下方方法概述和架构，消融与三学科细分可查阅下方实验结果，复现配置可查阅下方细节详述。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/ai4ed/FormulaSpeech> — 链接可访问（HTTP 200）；含权重文件（.bin/.pt/.pth）

- 数据相关资源：<https://github.com/ai4ed/FormulaSpeech> — 链接可访问（HTTP 200）；含权重文件（.bin/.pt/.pth）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 盲生在线学习中公式朗读为何成为关键瓶颈

在线学习为视障学生提供了参与课程的通道，其中盲生或低视力学生主要依靠语音反馈获取知识。当课程涉及数学、物理与化学公式时，学生无法依靠视觉符号，只能通过听觉理解表达式的结构与含义，公式朗读的准确性直接决定学习效果。论文与 TAL 教育集团合作，从真实家教系统需求出发，将科学公式的口语化朗读定义为无障碍学习的关键能力，并邀请教育专家参与数据筛选与评价标准的制定。

论文把任务形式化为从符号序列到语音序列的映射。科学公式 x 被视作由 n 个符号单元组成的序列，其中每个单元对应 LaTeX 中的符号成分，n 为公式长度。给定 N 个样本组成的配对集合 D，其中每对包含公式与对应口语形式的语音单元序列，目标是训练语音语言模型 G，使生成语音准确读出每个符号成分。与日常语言不同，科学公式具有紧凑句法、层次结构与学科语义，通用语音模型容易误读符号名称或丢失结构关系。

为了直观理解任务难度与现有路线的差异，可以先看论文给出的分数乘法教学例子。下段示意图从左到右呈现了盲生提问、浏览器显示内容与 LaTeX 输入，并在下方对比了两种技术路线对同一公式的朗读结果。该例子覆盖了分式符号与等号的口语转换，错误类型具有代表性，箭头与颜色标记了正确与错误读法，为后文讨论级联流程与端到端模型的取舍提供具体参照。

[![原论文 Figure 1：Example of formula verbalization for accessible learning.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-1.png)

*论文图 1：分数乘法教学示例与两种路线朗读对比，绿色对勾为规范读法，红色叉号为误读（原论文 Figure 1）。*

示意图上半部分从左到右依次为戴耳机的盲生在线学习、语音提问波形、浏览器渲染的 5 / 2 × 2 / 3 = 5 / 3，以及对应的 LaTeX 源码。下半部分给出两种读法，级联流程输出规范的 Five over two multiplied by two over three equals five over three，以绿色对勾标示。端到端大语音语言模型输出 Frac five two times frac two three equals frac five three，以红色叉号标示，直接照读 LaTeX 命令，未完成符号到口语的转换。该对比说明通用端到端模型在公式口语化上存在明显缺口。

### Formula-Speech 如何在冻结主干上补齐公式语义

Formula-Speech 以 GLM-4-Voice 9B 为主干，保留其语音与文本编码器、解码器以及交错生成能力，新增轻量公式语义适配器以实现符号结构与口语表征的细粒度对齐。该适配器以低秩更新形式融入冻结大语音语言模型的注意力层查询、键与值投影，仅更新少量参数，原有参数保持不变。论文同时构建 EduDialogue 与 SciFormula 两套数据，前者保留通用对话能力，后者补齐公式朗读模式。与需要 700,000 小时以上语音预训练的做法不同，该设计强调用少量高质量配对数据完成关键缺口的修复。

以图示中的 \frac{1}{2} 为贯穿例子，此处作为教学例子使用，原文未披露具体采样率与帧率，因此不假设数值，端到端流程可按序追踪。第一步，文本序列经文本编码器映射为红色文本单元序列，语音波形经语音编码器映射为浅蓝色语音单元序列，两路离散化表示进入中间建模区。第二步，冻结大语音语言模型与公式语义适配器共同对两路单元进行联合建模，输出对齐后的文本单元与语音单元，其中图示顶部以交错圆点表示文本与语音单元按序交替。第三步，对齐单元分别送入语音解码器与文本解码器，前者自回归生成朗读语音波形，后者同步生成 One over two 文本片段。

下图为论文给出的整体架构示意，左侧为双编码器输入，中部为大语音语言模型与适配器，右侧为双解码器输出，颜色与图标区分了文本单元、语音单元以及可训练与冻结权重。沿箭头阅读可以看清从输入序列到交错输出再到双模态解码的汇合与分叉位置，建议重点观察中间黑框与右侧分支的连接方式，以及虚线与实线箭头所指示的不同模态路径。

[![原论文 Figure 2：Overview of the proposed Formula-Speech.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-2.png)

*论文图 2：双编码器加适配器再分叉到语音与文本解码器的端到端架构（原论文 Figure 2）。*

架构图底部图例标明红色圆点为文本单元，浅蓝色圆点为语音单元，橙色表示可训练权重，雪花图标表示冻结权重。左侧文本序列上方为橙色边框文本编码器，语音波形上方为蓝色边框语音编码器，两者输出的红蓝圆点序列送入中部黑框。黑框左侧标注大语音语言模型并带有雪花图标，右侧标注公式语义适配器，顶部橙色弧线与蓝色虚线交错连接，示意文本与语音单元的交替建模。右侧蓝色边框语音解码器输出语音波形，橙色边框文本解码器输出 One over two 文本序列，完整呈现了从符号输入到双输出的端到端路径。

### 两套数据与两阶段训练如何协同工作

#### 数据来源与清洗规范

原始公式与多轮师生对话取自 TAL 教育集团智能辅导系统，覆盖数学、物理与化学 3 个学科，全部对话内容经匿名化处理以去除可识别信息并保留教学相关性。清洗流程包含空白规范、网页标签去除、表情与特殊字符过滤、基于 n 元重叠的去重以及阿拉伯数字转文本写法，合格公式统一规范为 LaTeX 形式以便后续处理。这一环节由教育专家参与制定采集与隐私保护规范，确保领域覆盖与流程一致性，为符号到语音的映射提供干净的配对基础。

EduDialogue 数据集包含 3,417 段师生对话，平均每段 15.15 轮，最长达到 40 轮，其中 2 轮占比 19.2%，12 轮占比 13.7%，14 轮占比 13.3%。SciFormula 数据集包含 8,678 条配对样本，中文与英文各 4,339 条，其中化学 5,434 条占比 62.6%，数学 2,506 条占比 28.9%，物理 738 条占比 8.5%。SciFormula 先按学科分为数学、物理与化学 3 个子集，每个子集再按 7 : 2 : 1 划分为有监督微调集、强化学习集与测试集，且每个划分内中英文比例约为 1 比 1，划分过程采用随机切分。

#### 口语化改写与语音合成

口语化改写借助大模型的语言理解能力完成，提示词引导 Claude Sonnet 4 把含公式的文本转为自然流畅的朗读形式。对于 EduDialogue，每一位教师与学生的每一轮话语均转为完整流畅的口语以保证对话连贯。对于 SciFormula，每一个 LaTeX 表达式单独处理以保留语义与结构准确性，全部生成结果均经教育专家人工审校与修正，以减轻生成偏好带来的偏差。

语音合成采用 CosyVoice2 把规范后的朗读文本转为波形，其清晰度与表现力有助于构建自然准确的配对数据。全部合成语音均经教育专家人工试听，不合格样本重新生成。合成后的语音与对应转写文本共同构成文本语音配对，其中对话数据用于学习会话语音特征，公式数据用于学习符号到口语的精细映射，两类数据分工明确且互为补充。

#### 主干结构与两阶段训练

模型以 GLM-4-Voice 为主干，输入语音或文本后以交错方式输出双模态结果。语音编码器与文本编码器分别把语音序列与文本序列转为离散的语音单元与文本单元，公式语义适配器以低秩参数更新的方式嵌入冻结主干的注意力层，专门调整查询、键与值投影以实现符号感知的语音建模。对齐后的单元序列分别送入语音解码器与文本解码器，前者自回归生成朗读公式的语音序列，后者同步生成同一交错输出中的对应文本段。

第一阶段为带低秩适配的有监督微调，学习符号输入到口语输出的基本映射。训练数据为全部 EduDialogue 数据加 SciFormula 微调划分，损失为条件似然负对数和，仅更新低秩参数而主干保持冻结。训练持续 20 轮，学习率 5e-4 并采用余弦调度，每设备批大小为 1 并累积 4 步，低秩更新作用于查询、键与值模块，秩为 64，系数为 32，舍弃率为 0.05。

第二阶段为基于分组相对策略优化的强化学习，目标是抑制重复冗长并提升人类偏好的表达质量。训练在 SciFormula 强化学习划分上持续 10 轮，学习率 1e-6，批大小为 8 并累积 8 步，每个提示采样 8 个候选，核采样阈值为 0.95，温度为 0.6，最多生成 512 个新单元。

奖励为两项加权平均，重复抑制项统计语音单元中 n 元重复率，阈值为 0.05，惩罚尺度为 6，结果截断至负 1 至 1 区间。质量项先用 Paraformer-zh 处理中文、用 Whisper-Large-v3 处理英文得到转写文本，再由 Claude Sonnet 4 对照原公式与参考转写打分并线性映射至区间，中文与英文识别分工有助于减少转写误差向奖励的传导。所有随机种子固定为 42，实验在 8 个节点上完成，每个节点配备 8 张 NVIDIA A100 GPU。

### 三学科主结果与级联流程对比说明了什么

#### 评测协议与主结果精简表

评测覆盖 Math2k、Physics1k 与 Chemistry5k 3 个划分，每个划分再分中英文，划分比例与语言均衡性在前文已交代。基线包括 Baichuan-Audio 7B、GLM-4-Voice 9B、Kimi-Audio 7B、Qwen2.5-Omni 7B、VITA-Audio 7B 与 Step-Audio 130B，参数规模差异构成公平性核查的重要背景。指标方向为 WER 越低越好，BLEU 越高越好，归一化平均意见分上限为 5 分，大模型评价与人工准确性均为 0 分至 3 分，人工流畅度同样为 0 分至 3 分。人工准确性与流畅度均由 3 位评价者取平均，标星结果的 Cohen Kappa 系数大于 0.65。

下表为基于原文连续描述整理的 Math2k 中文精简表，仅保留本文模型与次优模型的四项准确性指标，用于聚焦最强差距。原文完整 Table 2 与 Table 3（本精简表未列出）还包含数学、英文、物理与化学的词错率、BLEU、大模型评价与人工评价等多行多列，此处未全部展开，极值判断仅限本精简表展示的两行四列。

| 模型 | WER (↓) | BLEU (↑) | LLMS (↑) | HumanS (↑) |
| --- | --- | --- | --- | --- |
| Formula-Speech (Ours) | 0.3421 | 0.7082 | 1.5032 | 1.7140 |
| Step-Audio | 0.9846 | 0.4210 | 1.1019 | 1.1190 |

精简表内四列均由 Formula-Speech 占优，WER 为 0.3421 对 0.9846，BLEU 为 0.7082 对 0.4210，大模型评价为 1.5032 对 1.1019，人工评价为 1.7140 对 1.1190。论文指出 Step-Audio 在完整榜单中多数指标排名第 2，并将其归因于 130B 的参数规模，显著大于 7B 至 9B 的其他模型。需要说明的是，WER 在插入错误占主导时可超过 1，BLEU 只反映转写文本的词汇重叠，大模型评价允许同一公式存在多种合理读法，人工评价进一步缓解大模型评价的偏置，因此四项指标需联合解读。

#### 与级联流程的柱状对比

下组柱状图比较了本文端到端模型与 Whisper-Large-v3 加 Qwen2.5-7B-Instruct 加 CosyVoice2 级联流程的平均指标。左侧子图横轴为英文与中文的 WER 和 BLEU，纵轴为分数，蓝色为级联流程，红色为本文模型。右侧子图横轴为英文与中文的大模型评价与人工评价，纵轴同样为分数，颜色含义不变。阅读时需注意左侧 WER 越低越好，其余柱越高越好，建议先核对图例颜色再比较每组高低。

[![原论文 Figure 3：Performance comparisons with cascaded pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-3.png)

*论文图 3：端到端模型与级联流程在四项平均指标上的柱状对比，蓝色为级联，红色为本文模型（原论文 Figure 3）。*

从像素看，左侧 4 组中红色均占优，英文 WER 蓝色约 0.82 而红色约 0.55，中文 WER 蓝色约 0.93 而红色约 0.48，英文 BLEU 蓝色约 0.37 而红色约 0.47，中文 BLEU 蓝色约 0.32 而红色约 0.59。右侧 4 组出现一处例外，英文大模型评价蓝色约 1.35 略高于红色约 1.24，其余 3 组红色占优，中文大模型评价蓝色约 1.33 而红色约 1.57，英文人工评价蓝色约 1.16 而红色约 1.70，中文人工评价蓝色约 1.15 而红色约 1.69。因此不能说红色在全部子图上全面高于蓝色，英文大模型评价是未胜出项。总体上人工评价的差距大于自动指标，但结论依赖平均值且原文未报告方差与置信区间。

### 训练策略消融与语音自然度呈现何种权衡

#### 5 种训练策略的平均指标消融

消融比较了全参数微调、低秩微调、单独强化学习及其组合共 5 种策略，指标为跨任务平均的 WER、BLEU 与 LLMS，方向与前文一致。全参数微调更新全部权重，低秩微调冻结主干只更新适配器，单独强化学习不经过微调直接优化奖励，全参数加强化学习与低秩加强化学习则为两阶段组合。本文完整策略为低秩微调加分组相对策略优化，奖励权重系数记为 λ，重复惩罚与质量奖励共同引导简洁且准确的输出。

下段为原文 Table 4 的完整呈现，包含全部五行四列，平均指标已在表头标明方向，可直接比较不同策略的准确性与语义质量。

| Training Strategy | Avg. WER (↓) | Avg. BLEU (↑) | Avg. LLMS (↑) |
| --- | --- | --- | --- |
| Full-SFT | 0.5720 | 0.4976 | 1.2040 |
| Full-SFT+GRPO | 0.5368 | 0.4544 | 1.2663 |
| LoRA-GRPO | 2.5814 | 0.0710 | 0.4625 |
| LoRA-SFT | 0.5039 | 0.5203 | 1.3709 |
| LoRA-SFT+GRPO | 0.5166 | 0.5297 | 1.4084 |

完整表显示，LoRA-GRPO 单独使用时平均 WER 高达 2.5814，BLEU 仅 0.0710，大模型评价仅 0.4625，明显塌缩，说明缺少微调先验时强化学习难以建立基本映射。全参数微调平均 WER 为 0.5720，BLEU 为 0.4976，大模型评价为 1.2040，而低秩微调对应为 0.5039、0.5203 与 1.3709，在三项上均更优，支持冻结主干可保留语音生成能力的解释。完整两阶段组合达到 0.5166、0.5297 与 1.4084，BLEU 与大模型评价继续提升，但 WER 略高于单阶段低秩微调，论文将其解释为强化学习引入轻微词汇变化的代价。

#### 语音质量折线的细节与例外

下图为 7 个模型在语音质量上的折线对比，横轴为 7 个模型名称，纵轴为 1.0 分至 5.0 分。上层两条深色折线为英文与中文的归一化平均意见分自动估计，下层两条橙色折线为英文实线与中文虚线的人工流畅度。图例区分了实线英文与虚线中文，以及圆点自动估计与方块人工评价，阅读时需先确认线型再比较峰值与低谷，避免将自动估计与人工分数混为一谈。

[![原论文 Figure 4：Speech quality comparisons with LSLMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3d2a384cfabd/figure-4.png)

*论文图 4：七个模型在语音自然度与流畅度上的折线对比，深色为自动估计，橙色为人工流畅度（原论文 Figure 4）。*

从像素看，上层自动估计集中在约 3.7 分至 4.2 分之间，Qwen2.5-Omni 达到最高，英文约 4.18 分，中文约 4.06 分，论文将其归因于说话人克隆模块对自然度的提升。Formula-Speech 与 GLM-4-Voice 在自动估计上走势接近，前者英文约 3.80 分，中文约 3.94 分，后者英文约 3.78 分，中文约 3.96 分，符合论文关于未针对流畅度优化因而继承主干水平的解释。下层人工流畅度出现明显分化，GLM-4-Voice 英文实线低至约 1.50 分，为全场最低，中文虚线约 1.98 分，两者在英文上并不接近。Qwen2.5-Omni 英文约 2.33 分为英文最高，但中文约 2.30 分低于 Formula-Speech 中文虚线终点约 2.37 分，因此 Qwen 并非中英文合并最高，中文最高属于本文模型。

### 结论成立的前提、边界与工程选型建议

#### 评价口径与主要对照

评价采用自动与人工相结合的口径。词错率 (WER) 衡量生成语音经自动语音识别后的转写准确性，数值越低表示发音越清晰，当插入错误占主导时数值可超过 1。词汇重叠 (BLEU) 衡量转写文本与参考转写之间的 n 元重合度，反映词汇相似性。归一化平均意见分 (NMOS) 从声学特征自动估计语音自然度，满分为 5。大模型评价 (LLMS) 由 Claude Sonnet 4 对照原公式、参考转写与识别转写按 0 到 3 打分，3 分表示完整准确且简洁，2 分表示轻微偏差但含义清晰，1 分表示关键要素缺失，0 分表示严重错误或空输出，该口径可容纳同一公式的多种合理读法。人工准确性 (HumanS) 沿用同一量表由 3 位评价者取平均，人工流畅度 (HumanF) 按自然度量表由 3 位评价者取平均，部分结果一致性系数 κ 大于 0.65。

在数学测试的中文条件下， Formula-Speech 取得词错率 0.3421，词汇重叠 0.7082，大模型评价 1.5032，人工准确性 1.7140，均优于参数规模为 130B 的 Step-Audio 对应成绩 0.9846，0.4210，1.1019 和 1.1190。Step-Audio 在全部学科与指标上位居第二，显著超过 7B 与 9B 量级的其余对照模型，表明更大参数量有助于公式朗读，但推理资源与费用也随之上升。语音质量方面， Qwen2.5-Omni 在归一化平均意见分与人工流畅度上平均最高，这与其架构中的发音人克隆增强模块有关。Formula-Speech 以 GLM-4-Voice 为主干且未针对流畅度做专门优化，因此自然度与主干接近，论文把韵律与音色提升列为后续工作。

当前结论的适用边界需要说明。语音数据经 CosyVoice2 合成并由专家复核重录，不等同于真实课堂录音与真实视障学生的听音环境。口语化改写先由 Claude Sonnet 4 生成再经人工修正，仍可能残留大模型偏好。质量评价依赖自动语音识别转写，中文与英文识别误差会直接影响词错率、词汇重叠与大模型评价，大模型评价本身也可能偏向特定表达风格。人工评价虽由 3 位评价者取平均且部分结果一致性系数大于 0.65，但论文未报告方差、置信区间与完整的失效案例分布，难以判断边界公式上的稳定性。数据以化学占比 62.6% 为主，物理仅 738 条样本，学科不均衡可能影响跨学科推广。公式均经清洗并转为 LaTeX 规范形式，未覆盖手写识别错误、残缺公式与复杂嵌套推导。论文强调端到端结构的低延迟与流式潜力，但未披露实时率、首包延迟、分块策略与显存占用，也未在噪声教室或移动设备上测试。

#### 开放资源与选型参考

论文给出代码与数据集地址，指向 FormulaSpeech 仓库的代码与数据资源，作者资源当前可用。训练划分、超参数、随机种子与硬件配置披露较为完整，有利于复现微调与强化学习流程。TAL 原始对话已经匿名化，外部研究者无法获得完全相同的原始采集链路。评价依赖的外部识别模型与评价模型版本若发生变化，分数可能发生偏移，复现时应固定模型版本并保留转写文本以便对照。

工程选型上，若首要目标是公式朗读准确性且资源有限，9B 规模的 Formula-Speech 是更实际的选择，其在三学科准确性上超过 130B 的 Step-Audio，且训练仅需少量配对数据。若首要目标是语音自然度与流畅度， Qwen2.5-Omni 的自动估计与人工流畅度更高，但公式准确性明显落后，需要权衡取舍。若追求极致准确性且能承担大模型推理成本，可考虑大参数对照模型，但需评估延迟与费用。论文未提供试听页面，选型前建议在自有公式集上对照转写文本与人工试听，避免仅凭平均分数做决策。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长步长、码率、前瞻延迟与 RTF，解码最大新单元数为 512
- **训练与评测数据**：EduDialogue 3,417 段师生对话与 SciFormula 8,678 条公式语音配对，覆盖数学物理化学，中英文各约一半，按 7 : 2 : 1 划分训练与测试
- **算力与训练耗时**：8 个节点，每个节点配备 8 张 NVIDIA A100 GPU，随机种子固定为 42
- **核心超参数与配置**：第一阶段学习率 5e-4 训练 20 轮，第二阶段学习率 1e-6 训练 10 轮，LoRA 秩 64 系数 32 舍弃率 0.05，每提示采样 8 条，温度 0.6
- **推理速度与部署开销**：原文未披露延迟吞吐显存与参数量之外的推理开销，对比涉及 7B 至 130B 不同规模模型的资源差异
- **开源产物与协议状态**：论文给出代码与数据集链接且本次检查显示可达，权重下载与一键运行状态需以仓库说明为准，原文未明确承诺开箱运行
- **附录与补充材料要点**：原文未披露独立附录证明，补充信息集中在参考文献与致谢的基金来源，失效案例与许可限制未系统说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.4/10 | 影响力 6.0/10 | 开源 6.0/10 | 可复现 6.3/10 | 工程/实践 4.9/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0812`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/812) · [官方 PDF](https://ijcai.org/proceedings/2026/0812.pdf)
- DOI：`10.24963/ijcai.2026/812`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：Formula-Speech 9B在Math2k中英文WER低至0.3421与BLEU高达0.7082且三学科12组自动指标均为最优。

- 核心优势：五配置直接消融覆盖全参数与LoRA对照，证实须先经SFT建立对齐且RL以轻微WER代价提升语义。

- 核心优势：冻结骨干仅更新查询键值LoRA并设计重复惩罚加LLM评判的GRPO奖励，公式推导自洽完整。

- 主要短板：训练奖励与评测共用同一ASR与Claude Sonnet 4，存在自我印证的公平性风险与循环验证隐患。

- 主要短板：宣称低时延流式与端到端优势却未实测RTF与帧延迟，部署主张缺乏测量支撑仅为口头声称。

- 主要短板：图4分语言HumanF像素与正文平均最高与相近合并表述不一致，且化学中文LLMS存在一格例外未解释。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
