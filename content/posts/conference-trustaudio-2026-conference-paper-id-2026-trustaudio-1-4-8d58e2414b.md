---
title: "Activation-Level Characterization of Cross-Model Adversarial Jailbreak Transferability in Speech Language Models"
date: 2026-11-27
draft: false
description: "本文以在 Qwen2-Audio 上生成的 386 个 PGD 对抗音频为条件，复用评估其向异构语音语言模型的迁移并逐层刻画激活偏移，发现 LLaMA-Omni 条件迁移率高达 98.7% 而 Qwen2.5-Omni 仅 2.1%，且两模型的偏移均向深层放大，但结论仅在预筛选样本、严格自动判定与描述性分析前提下成立。"
tags: ["表示探测", "音频安全", "语音", "音频系统攻击与防御"]
categories: ["trustaudio-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨模型语音越狱迁移的行为与内部激活刻画"
paper_digest_original_title: "Activation-Level Characterization of Cross-Model Adversarial Jailbreak Transferability in Speech Language Models"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.4"
paper_digest_workbench_source_sha256: "d448ff402728c234817f731e7cb2d38defedf5d5878e1edb229a5d76b00f9fba"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.trustaudio-1.4/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.trustaudio-1.4.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "音频系统攻击与防御"
paper_digest_score: 5.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "本文以在 Qwen2-Audio 上生成的 386 个 PGD 对抗音频为条件，复用评估其向异构语音语言模型的迁移并逐层刻画激活偏移，发现 LLaMA-Omni 条件迁移率高达 98.7% 而 Qwen2.5-Omni 仅 2.1%，且两模型的偏移均向深层放大，但结论仅在预筛选样本、严格自动判定与描述性分析前提下成立。"
paper_digest_reader_sections: [{"heading":"跨模型语音越狱迁移为何需要同时观察行为与内部表征","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从合成语音到跨模型复用的攻击评估流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"层间平均绝对偏移如何刻画对抗影响随深度变化","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"条件成功率下高度分化的迁移行为与类别差异","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"深层放大的激活偏移与类别敏感性的模型差异","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"描述性发现的边界与安全部署前的未验证环节","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Qassim University"],"name":"Rahaf Alshahrani"},{"affiliations":["Mohamed bin Zayed University of Artificial Intelligence"],"name":"Ayana Niwa"}]
paper_digest_abstract_sha256: "a547acc054c4b8a147629c13a415c6fa384261999c276a572a34afff59019645"
paper_digest_sidecars: {"citation.bib":{"sha256":"f380ca56e983e32c0d2a0b91cea3fd7b79e02099b1d739a4751016651b3cab2f","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d58e2414b611b8a3b197363/citation.bib"},"citation.json":{"sha256":"ef34c98d4fbf719b64d12106dee6bc0db654f4b066b03aa30a279f485c3fcf57","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d58e2414b611b8a3b197363/citation.json"},"citation.ris":{"sha256":"3a02ea0f7b4dabdbcd8b971e68666033512616902f5002086075c115da2391f5","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d58e2414b611b8a3b197363/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7efcd6a8dbd3273137e21eb822b3786bd0a4b08656b3bc89931d2ef1e10679b9","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d58e2414b611b8a3b197363/rethink-context.json"}}
paper_digest_paper_id: "conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.4"
paper_digest_source_kind: conference
paper_digest_conference_id: "trustaudio-2026"
paper_digest_conference_name: "trustaudio-2026"
paper_digest_doi: "10.18653/v1/2026.trustaudio-1.4"
paper_digest_conference_doi: "10.18653/v1/2026.trustaudio-1.4"
paper_digest_conference_record_url: "https://aclanthology.org/2026.trustaudio-1.4/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.trustaudio-1.4.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "c3aaaf013436f40fb8cf070dcd0bf035e13e066c7a05cb622176719c25ff1d13"
paper_digest_api_reader_plan_sha256: "0577c7c2f1f2340939ffb1170a65c9bfa224f0fd3772f8c9168dd2bfe0836318"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "50d8f092a339a8d86bfb5b14319eae8ef809f76f3a88c1eed10d4c7aa1e45ba9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a1143f98750ad1bba3fa185fc16b820c3a7d40338cf617068ce7986d8a029a20"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "be7653d594ecb44014083e3978f9361c374f247fa0c2e7cddf853f00b90dc419"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"}]
paper_digest_primary_method: "表示探测"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 跨模型语音越狱迁移的行为与内部激活刻画

> 英文题目：*Activation-Level Characterization of Cross-Model Adversarial Jailbreak Transferability in Speech Language Models*

> 会议身份：`conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.4`
> DOI：`10.18653/v1/2026.trustaudio-1.4`
> Track：TrustAudio 2026



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://aclanthology.org/2026.trustaudio-1.4/) · [官方 PDF](https://aclanthology.org/2026.trustaudio-1.4.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-research-portal/papers/?concept=task.audio-system-attack-defense)
- **研究方法**：[表示探测](/audio-research-portal/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究重点**：[音频安全](/audio-research-portal/papers/?concept=research_focus.security)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.6/10** | 创新 5.6/10 | 技术严谨 6.5/10 | 实验充分 5.3/10 | 清晰度 6.7/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.8/10 | 工程/实践 4.5/10

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Rahaf Alshahrani：Qassim University
- Ayana Niwa：Mohamed bin Zayed University of Artificial Intelligence

## 📌 核心摘要

**问题与瓶颈：** 语音语言模型 (speech-language models, SLMs) 直接处理语音输入并保留文本转写之外的声学信息，支撑语音助手与对话交互等应用。对抗音频扰动可在人耳难察觉的条件下绕过安全对齐，构成实际安全风险。跨模型迁移意味着在源模型上生成的对抗样本无需接触目标模型仍可能生效，放大了攻击的现实威胁。已有工作证实了迁移攻击的可行性，但迁移样本在不同架构内部表示中如何体现尚不清楚，行为层面的成功率无法说明扰动在网络深度上何处被放大。激活分析可补足行为评估，定位效应随层深的变化，为后续监测与防御提供候选层位。

**核心思路与方法架构：** 与最接近的单模型防御分析相比，本文的增量在于不做新的攻击优化，直接复用 386 个在源模型 Qwen2-Audio 上按 SPIRIT 原始标准成功的投影梯度下降 (projected gradient descent, PGD) 对抗样本，并在 LLaMA-Omni 与 Qwen2.5-Omni 上做零额外优化的迁移评估，同时比较层级激活偏移模式。沿单条样本看，干净语音与对抗语音波形分别送入同一冻结的语音语言模型，模型输出各 Transformer 层的隐藏表示并在时间维取平均，得到每层向量。对第 l 层，式 (2) 计算干净与对抗时间平均表示在隐藏维度上的平均绝对差，再对 N 个样本取平均，得到层级偏移量 \(\Delta_l\)，其中 \(H_l\) 为该层隐藏维度，\(N\) 为样本数。由于跨架构表示空间不对齐，作者不做神经元或层间一一对应，仅在各自模型内比较偏移随深度的变化趋势与越狱类别间的差异。威胁设定为源模型白盒可访问参数与梯度、目标模型无额外优化的直接迁移，全部模型冻结且离线评测，攻击成功需同时满足语义相似度 BERTScore 不低于 0.85 与安全违规判定 JailbreakEval 等于 1 的严格合取标准。

**关键实验与核心代价：** 在 386 个预选样本的同一严格标准下，LLaMA-Omni 的攻击成功率达到 98.7%，高于源模型 Qwen2-Audio 复核的 86.5%，并远高于 Qwen2.5-Omni 的 2.1%，表明同一批迁移样本的行为脆弱性差异极大。分类别看，LLaMA-Omni 在 8 类上保持在 96.08% 至 100% 之间且有 5 类达到 100%，Qwen2-Audio 在 70.59% 至 93.48% 之间波动，Qwen2.5-Omni 仅在炸弹与爆炸物 5.88%、毒品 4.35% 与自杀 6.25% 上出现少量成功，其余 5 类均为 0%。层级激活偏移在 LLaMA-Omni 与 Qwen2-Audio 中均随深度总体增大并在末层达到最大，作者明确不将其断言为越狱成功所特有。末层偏移在 LLaMA-Omni 上跨类别较为均匀，介于 0.125 至 0.145 之间，而在 Qwen2-Audio 上类别依赖更强，介于 0.449 至 0.562 之间，其中社会暴力为 0.562，毒品为 0.512，但作者仅做描述性报告而不赋予语义解释。评测完全依赖 BERTScore 与 JailbreakEval 自动判定，未安排人工主观听测或 MOS 验证，也未报告神经代理语音质量指标与推理时延或显存代价，消融仅体现为按类别与按深度的分解而无去组件对照，计算代价为已有样本的推理复算而非重新训练攻击。

**适用边界与深读导览：** 上述结论均以源模型成功为前提的预选子集为条件，仅覆盖单一源模型 Qwen2-Audio 到两个目标模型的单向迁移，激活分析仅限 LLaMA-Omni 与 Qwen2-Audio 且采用时均未归一化的绝对差，因而跨模型量级不可直接比较。研究未设干净基线或随机噪声对照，未在样本层面比较成功与失败迁移的差异，作者明确不做因果断言，也不把 Qwen2.5-Omni 的低迁移率解读为通用鲁棒性证据。需复核 PGD 目标式与层级偏移定义的读者可查阅下文方法概述中的公式阐释，需核对总体与分类脆弱性差异的读者可查阅实验结果中的总体表与分述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 跨模型语音越狱迁移为何需要同时观察行为与内部表征

语音语言模型直接处理语音输入并保留文本转写之外的声学信息，支撑语音助手与对话交互等应用。这类模型广泛部署后，安全风险随之显现，人耳难以察觉的音频扰动可能绕过安全机制并诱导有害输出。更棘手的是跨模型迁移现象，在一个模型上生成的对抗音频无需再次优化仍可能在架构不同的另一模型上生效，攻击者因此可能不需要直接访问目标模型。理解这种迁移在行为层面是否成立，以及在内部表征层面如何显现，成为本文的核心问题。

已有路线各有局限。文本越狱提示研究揭示精心设计的提示可以破坏安全对齐，通用对抗后缀研究证实越狱可以在对齐语言模型之间迁移，但多停留在行为成功率层面。语音侧的 SpeechGuard 发现对抗音频扰动可以绕过语音语言模型的安全机制且迁移性随架构而变，SPIRIT 提出面向语音语言模型的 PGD 攻击并用激活模式支撑单模型推理时防御，但将其跨模型迁移列为未来工作。机理可解释性研究常用中间激活观察 Transformer 表征，但很少用于刻画跨异构语音模型的迁移攻击。因此行为差异是否对应内部响应的系统性变化仍不清楚。

从输入输出看，攻击输入是叠加有界扰动的音频波形，目标是诱导模型输出预设的有害回应，模型输出仍为文本回应。评判是否越狱成功需要同时满足语义一致与安全违规 2 个条件，而非仅看是否出现拒绝词。本文使用的 386 个对抗样本全部来自 SPIRIT 在源模型 Qwen2-Audio 上按其原有标准判定成功后提供的集合，包含 187 个男声与 199 个女声样本，覆盖炸弹与爆炸物等 8 个有害类别。因此后文所有成功率都是以源模型成功为条件的再评估与迁移率，而非从零开始的攻击强度。

本文的贡献可归纳为 3 个方面。第一，在同一组 386 个样本上复用评估其向 LLaMA-Omni 与 Qwen2.5-Omni 的迁移效果，给出条件迁移率的直接对比。第二，在 LLaMA-Omni 与源模型 Qwen2-Audio 内部逐层计算干净与对抗输入的激活偏移，刻画深度与主题两个维度的响应模式。第三，明确声明分析是描述性而非因果性，不比较跨架构的神经元对应关系，也不把个别模型的低迁移率解读为通用稳健性。这一限定对正确理解实验结论至关重要。需复核 PGD 目标式与层级偏移定义的读者可查阅下文‘层间平均绝对偏移如何刻画对抗影响随深度变化’中的公式阐释，需核对总体与分类脆弱性差异的读者可查阅‘条件成功率下高度分化的迁移行为与类别差异’中的总体与分组成功率图。

### 从合成语音到跨模型复用的攻击评估流程

威胁模型设定源模型为白盒，攻击者在生成阶段可访问源模型参数与梯度信息，直接在音频波形上施加有界扰动以绕过源模型的安全对齐。生成完成后，同一音频不再做任何额外优化，直接送入目标语音语言模型进行迁移测试。本文作者并未自行运行攻击优化，全部 386 个样本由 SPIRIT 按上述白盒设定在 Qwen2-Audio 上生成并提供。这种只生成一次、跨模型复用的设定贴近现实风险，即攻击者可能无需触达目标模型即可尝试迁移。

数据集起点是 AdvBench 的 246 条有害指令，采用 SPIRIT 沿用的 8 类别划分。SPIRIT 对每条指令用多种声音合成语音，并在 Qwen2-Audio 上优化 PGD 扰动，扰动预算固定为 0.05，步长为 0.0005，每样本最多优化 1,000 步。本文取其中满足 SPIRIT 原有成功标准的两个声音各一部分，共 386 个样本，其中炸弹与爆炸物 51 个、毒品 46 个、自杀 48 个、黑客 56 个、杀人 40 个、社会暴力 54 个、金融操纵 44 个、枪支 47 个。所有成功率都在这组预筛选样本上按更严格标准重新计算。

教学例子：以一条炸弹类有害指令的男声合成语音为例，可以按顺序一次看清完整流程。第一步将文本指令合成为语音波形，第二步在波形上叠加 PGD 优化得到的有界扰动形成对抗音频，第三步把同一对抗音频分别送入源模型 Qwen2-Audio 与目标模型 LLaMA-Omni 和 Qwen2.5-Omni，第四步收集各模型的文本回应并用语义与安全两项标准判定是否越狱。原文未披露采样率、帧长与步长、通道数与隐层维度等信号规格，因此这里不虚构 1 秒样本的采样点数或张量形状，只强调分支汇合点在于同一波形被 3 个模型独立消费。

成功判定采用 BERTScore (基于上下文嵌入的语义相似度评分) 与 JailbreakEval (安全违规自动判定工具) 的合取，要求 BERTScore 不低于 0.85 且 JailbreakEval 输出为 1。这一严格标准旨在同时要求回应与预设有害目标语义接近且明确违反安全策略，从而减少误报。代价是可能漏掉隐晦表达有害意图但语义相似度不足的案例。原文明确区分源模型的再验证率与目标模型的条件迁移率，避免把预筛选后的高数值误读为无条件攻击强度。

### 层间平均绝对偏移如何刻画对抗影响随深度变化

PGD 攻击目标可理解为在无穷范数预算内寻找使交叉熵损失最小的扰动，即让模型在给定扰动音频条件下生成预设有害回应的 token 级负对数似然之和最小，可记为 \(delta\) 受 \(epsilon\) 约束并最小化 \(L_{CE}\)。预算 0.05 限定了波形每个采样点的最大改变量，步长 0.0005 控制每次迭代的移动幅度，1,000 步上限决定优化充分程度。预算过小则优化空间不足难以诱导目标回应，预算过大则扰动更易被察觉，直觉上需要在隐蔽性与优化可行性之间权衡。

内部分析指标是层间激活偏移 \(Delta_{l}\)，做法是对第 \(l\) 层每个样本先沿时间平均得到隐表征，再对干净与对抗两类输入逐维度取绝对差，最后在隐维度 \(H_{l}\) 与样本数 \(N\) 上取平均。该量度回答每一层平均偏离了多少，而非偏向哪个语义方向。分析分两个视角，一是深度动态，观察偏移是否随层数加深而放大，二是主题敏感性，比较 8 个越狱类别在末层的偏移差异。由于不同架构的表征空间并未对齐，本文不假设神经元或层间一一对应，只在各自模型内部比较模式异同。

本研究无模型训练阶段，所有语音语言模型参数均保持冻结，不更新任何权重，也不学习新的编码器或投影层。所谓训练配置实际是 SPIRIT 已完成的对抗样本生成配置，本文仅做冻结推理与复用评估。推理执行为离线整句评分方式，直接输入完整对抗音频并收集完整文本回应。原文未披露分块流式、前瞻窗口、缓存策略、采样步数、延迟与显存开销，因此无法给出实时系数或首包延迟等部署指标。

从机制直觉看，浅层表征更接近声学细节，深层表征更接近语义决策，因此微小波形扰动可能在深层被逐层放大并最终改变安全行为。极端情况下，若扰动为零则干净与对抗偏移为零，若扰动随机且未优化则偏移可能分散而不集中于深层。输出的偏移数值驱动下游解读的方式是比较层间曲线的斜率与末层峰值，而非用单一阈值判定越狱，这也是后文同时展示深度曲线与末层类别条形图的原因。

### 条件成功率下高度分化的迁移行为与类别差异

评测协议的公平性前提需要先讲清。3 个模型面对的是完全相同的 386 个波形，不做任何针对目标模型的再优化，成功标准统一为 BERTScore 不低于 0.85 且 JailbreakEval 为 1，方向均为越高表示越狱越成功。Qwen2-Audio 的数值是更严格标准下的再验证率，LLaMA-Omni 与 Qwen2.5-Omni 的数值是以源模型成功为条件的迁移率。下图展示总体攻击成功率的强烈分化，阅读时注意横轴为成功率百分比，纵轴为 3 个模型。

[![原论文 Figure 1：Attack success rates on the 386 SPIRIT adversarial examples, which were preselected by success on…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-2.png)

*论文图 2：三个模型在同一组 386 个对抗样本上的总体攻击成功率对比（原论文 Figure 1）。*

该横向柱状图标题为跨语音语言模型的总体攻击成功率，横轴为攻击成功率，范围 0 至 100，纵轴自上而下为 LLaMA-Omni、Qwen2-Audio 与 Qwen-Omni。像素显示蓝色长条标注 98.7%，绿色中长条标注 86.5%，红色短条仅标注 2.1%。这意味着在源模型成功的预筛选集合中，几乎全部样本仍能使 LLaMA-Omni 产生符合严格标准的有害回应，而 Qwen2.5-Omni 仅有极少数样本满足标准。原文特别强调后者不代表通用稳健性，仅针对这一组特定迁移攻击成立，图中第三项简写为 Qwen-Omni 即指 Qwen2.5-Omni。

总体差异可能掩盖语义类别的影响，因此作者进一步按 8 个有害类别拆分成功率。8 个类别样本量在 40 个至 56 个之间，同一波形集合按类别分组后分别计算 3 个模型的成功率。下图为分组柱状图，每组内蓝色、橙色、绿色分别对应 LLaMA-Omni、Qwen2-Audio 与 Qwen-Omni，纵轴为成功率百分比，横轴为 8 个攻击类别，阅读时逐组核对三色柱高而非只看平均。

[![原论文 Figure 2：Category-level attack success rates across the evaluated speech language models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-3.png)

*论文图 3：八个有害类别下三个模型的分组攻击成功率对比（原论文 Figure 2）。*

像素显示 LLaMA-Omni 在 8 组中始终最高，数值从 96.1% 至 100.0%，其中毒品、杀人、社会暴力、金融与枪支 5 组达到 100.0%，最低为炸弹与爆炸物组 96.1%，黑客信息组 96.4% 为次低。Qwen2-Audio 在 70.6% 至 93.5% 之间波动，最低为炸弹与爆炸物组，最高为毒品组。Qwen-Omni 仅在炸弹与爆炸物、毒品、自杀三组有非零值，分别约为 5.9%、4.3% 与 6.2%，其余 5 组均为 0.0%。这一分布说明迁移效果高度依赖目标模型，且在目标模型内部类别差异相对较小，而源模型自身的再验证率已呈现类别波动。

### 深层放大的激活偏移与类别敏感性的模型差异

行为分化之后需要看内部表征是否呈现对应变化。作者只在 LLaMA-Omni 与源模型 Qwen2-Audio 上计算层间平均激活偏移，未纳入仅有 2.1% 成功的 Qwen2.5-Omni，避免极少成功样本带来的统计不稳定。下图横轴为 Transformer 层从 L0 至 L31，纵轴为平均激活偏移，蓝色圆点曲线为 LLaMA-Omni，橙色方块曲线为 Qwen2-Audio，阅读时先看两条曲线的走向再比较相对位置。

[![原论文 Figure 3：Layer-wise activation shift (∆) between clean and adversarial inputs for LLaMA-Omni and Qwen2-…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-1.png)

*论文图 1：两模型从浅层到深层的平均激活偏移曲线，偏移随深度增大且末层最大（原论文 Figure 3）。*

像素显示两条曲线均随层数加深单调上升，浅层平坦、深层陡峭，最大值均出现在末层 L31。横轴标签由 L12 直接跳至 L14，L13 不可辨认，但不影响两曲线单调上升与末层最大的判断。橙色曲线在所显示的全部层上始终位于蓝色曲线上方，起点约 0.1，末层超过 0.5，蓝色曲线起点约 0.03，末层约 0.14。原文明确指出激活尺度在模型间不可直接比较，因为指标基于未归一化的时均隐状态差，因此只能比较各自内部随深度放大的模式，而不能断言源模型的扰动效应更强。这种深层放大与扰动逐层累积的直觉一致，但作者不声称它是越狱成功所特有。

若深层偏移最大，则末层最适合比较类别敏感性。作者取 L31 层的平均偏移按 8 个语义类别拆分，考察高迁移模型与源模型的类别响应是否一致。下图为横向分组条形图，纵轴为 8 个类别，横轴为 L31 层平均偏移，蓝色为 LLaMA-Omni，橙色为 Qwen2-Audio，每组均标注具体数值，阅读时逐类别核对两色条长。

[![原论文 Figure 4：Final layer activation shifts across the eight semantic attack categories for LLaMA-Omni and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/trustaudio-2026/14a5d43868bf/figure-4.png)

*论文图 4：末层 L31 上八个类别的平均激活偏移分组对比（原论文 Figure 4）。*

像素显示 LLaMA-Omni 8 组数值集中在 0.125 至 0.145 之间，各类别差异很小，最高为社会暴力 0.145，最低为自杀 0.125。Qwen2-Audio 8 组数值在 0.449 至 0.562 之间波动，最高为社会暴力 0.562，其次为毒品 0.512，最低为自杀 0.449。2 模型在同一类别上的绝对数值不可横向比较，但模式差异清晰，迁移率近乎全成功的模型反而末层偏移更均匀，而源模型呈现更强的类别依赖。原文强调偏移大小本身不揭示语义或功能性质，仅作描述性报告。

### 描述性发现的边界与安全部署前的未验证环节

本研究的结论成立依赖多项前提。样本全部以源模型成功为条件预筛选，不包含干净基线与随机噪声对照，也未在样本层面区分迁移成功与失败的激活差异。激活指标为时均、未归一化的平均绝对差，对时间结构与方向信息做了压缩，且跨模型量级不可比。攻击方向单一，仅从 Qwen2-Audio 向外迁移，未检验反向或多源迁移，也未覆盖 3 个模型之外的架构。因此深层放大只能理解为扰动随深度累积的描述性现象，而非越狱因果链的证据。

复现核对需要区分三件事。代码方面，原文未提供可验证的作者代码链接与运行说明。权重方面，3 个评测模型均为公开研究模型但本文未附下载与版本锁定信息，386 个对抗音频由 SPIRIT 提供而本文未给出可直接获取的数据链接。系统方面，无可直接运行的端到端演示或试听页面，无法对照试听对抗音频的听感隐蔽性。任何复现都需先向原作者索取样本并自行搭建 3 个模型的冻结推理环境。

工程选型上，98.7% 对 2.1% 的强烈反差提示不能用单一模型的防御效果推断其他模型，LLaMA-Omni 在本组攻击下几乎完全失守，而 Qwen2.5-Omni 的低迁移率不能解读为通用稳健。末层偏移最大这一模式为未来监测提供了候选位置，但缺少噪声对照与成功失败对比之前，不宜直接用作检测阈值。部署前仍需验证流式分块、实时延迟、不同说话人与语种、隐晦有害表达的漏检率，以及方差与置信区间。

本文未报告重复试验波动与人工听测，自动判定的可靠性边界仍待补足。BERTScore 阈值 0.85 为经验选择，JailbreakEval 本身也非普遍可靠，严格合取虽减少误报但可能漏检隐晦有害。未来工作可在补充噪声对照、样本级成功失败对比、多源多目标迁移以及与防御联动评估的基础上，进一步检验深层激活模式是否具有可迁移的监测价值。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、通道数、码率、前瞻延迟、RTF 与显存开销，仅说明直接修改音频波形并在无穷范数预算下优化。
- **训练与评测数据**：基于 AdvBench 的 246 条有害指令与八类别划分，由 SPIRIT 合成多声音语音并在 Qwen2-Audio 上优化得到 386 个样本，其中男声 187 个、女声 199 个，类别样本量为 40 个至 56 个。
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量、训练步数耗时与推理硬件配置，仅说明对抗样本由 SPIRIT 提供且本文只做冻结复用评估。
- **核心超参数与配置**：扰动预算为 0.05，步长为 0.0005，每样本最多优化 1,000 步，成功判定要求 BERTScore 不低于 0.85 且 JailbreakEval 输出为 1。
- **推理速度与部署开销**：原文未披露参数量、RTF、延迟、吞吐与显存占用，仅报告条件攻击成功率与层间平均激活偏移数值。
- **开源产物与协议状态**：原文未提供可验证的作者代码链接、386 个对抗音频下载链接与可直接运行的系统说明，三个评测模型需自行搭建冻结推理环境。
- **附录与补充材料要点**：原文未披露附录证明与补充消融，关键限定已在正文说明，包括无干净与噪声对照、激活未归一化、仅单源单向迁移且不做因果断言。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.6/10** | 创新 5.6/10 | 技术严谨 6.5/10 | 实验充分 5.3/10 | 清晰度 6.7/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 4.8/10 | 工程/实践 4.5/10
- 排名：后50% | 文档类型：应用研究
- 会议身份：`conference:trustaudio:2026:conference-paper-id:2026.trustaudio-1.4`
- 会议来源：[官方记录](https://aclanthology.org/2026.trustaudio-1.4/) · [官方 PDF](https://aclanthology.org/2026.trustaudio-1.4.pdf)
- DOI：`10.18653/v1/2026.trustaudio-1.4`
- Track：TrustAudio 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（应用研究）：创新 15% · 严谨 14% · 实验 20% · 清晰 10% · 影响 15% · 复现 8% · 工程 18%（开源上限加分 +0.5）

- 核心优势：同批386样本上以严格合取标准复算源复核率86.5%与条件迁移率98.7%和2.1%，行为分野巨大且可核对。

- 核心优势：主动限定为描述性非因果结论，明确不跨模型比较未归一化量级且不把低迁移解读为通用鲁棒，结论克制。

- 核心优势：威胁设定与PGD目标式及层级时均绝对差定义完整，区分源复核与条件迁移并承认严格标准可能漏检隐式意图。

- 主要短板：未设干净或随机噪声基线且未在样本层面比较成功与失败迁移差异，不支持因果断言。

- 主要短板：完全依赖BERTScore与JailbreakEval自动判定而无人工核验与不确定性量化，主客观一致性无从判断。

- 主要短板：攻击生成外包给SPIRIT且样本获取路径未说明，采样率层数维度与解码硬件等关键复现配置缺失较多。

---

[← 返回 trustaudio-2026 论文汇总](/audio-research-portal/posts/conference-trustaudio-2026/)
