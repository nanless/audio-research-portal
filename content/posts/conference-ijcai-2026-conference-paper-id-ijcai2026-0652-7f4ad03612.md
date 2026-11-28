---
title: "Emo-LiPO: Listwise Preference Optimization for Fine-Grained Emotion Intensity Control in LLM-based Text-to-Speech"
date: 2026-11-28
draft: false
description: "论文把提示条件情感强度控制建模为固定文本下的学习排序问题，提出 Emo-LiPO 以规则排序列表与强度感知加权优化全局强度顺序，在 ESD-plus 上以情感准确率与强度可控性超越有监督与成对偏好基线，代价是依赖合成数据与规则排序假设且未验证延迟与跨域泛化。"
tags: ["数据集", "偏好优化", "主观评测", "文本到语音"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用列表排序学习让文本提示真正控制语音情感强度"
paper_digest_original_title: "Emo-LiPO: Listwise Preference Optimization for Fine-Grained Emotion Intensity Control in LLM-based Text-to-Speech"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0652"
paper_digest_workbench_source_sha256: "0fc5cc826033f890704a9195757ce12d15a743750e5d2ff9b163de7aa780d461"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/652"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0652.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "文本到语音"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把提示条件情感强度控制建模为固定文本下的学习排序问题，提出 Emo-LiPO 以规则排序列表与强度感知加权优化全局强度顺序，在 ESD-plus 上以情感准确率与强度可控性超越有监督与成对偏好基线，代价是依赖合成数据与规则排序假设且未验证延迟与跨域泛化。"
paper_digest_reader_sections: [{"heading":"文本能点名情感类别，为何点不准情感有多强","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Emo-LiPO 两阶段流程：先学会跟随指令，再学会排出强度顺序","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"同一文本下的五元候选列表与按强度差距加权的排序机制","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"ESD-plus 的合成与校验方式及两阶段参数冻结边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"类别准确率与强度单调性提升成立的评测前提与具体代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融揭示的排序假设边界：负样本数量、排序依据与采样多样性","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Yihang Lin"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Li Zhou"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen","Shenzhen Loop Area Institute"],"name":"Congwei Cao"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Dongchu Xie"},{"affiliations":["Agency for Science, Technology and Research"],"name":"Xiaoxue Gao"},{"affiliations":["National University of Singapore"],"name":"Chen Zhang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen","National University of Singapore","Shenzhen Research Institute of Big Data","Shenzhen Loop Area Institute"],"name":"Haizhou Li"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"2cdf2b6972a8f468fae0405feb4a95537edf006b7fb48c2bf22bee7306abf288","url":"/audio-research-portal/client/papers/2026-11-28/conference-7f4ad0361214f923a0be63b7/citation.bib"},"citation.json":{"sha256":"40ffdf0b32fccc29da77fcce8085214b454c3b7a76924026f564060a10ecc61f","url":"/audio-research-portal/client/papers/2026-11-28/conference-7f4ad0361214f923a0be63b7/citation.json"},"citation.ris":{"sha256":"356951404a028868571f0b14ee071d80d720c2da1a7c077291fe0eed30f3abd8","url":"/audio-research-portal/client/papers/2026-11-28/conference-7f4ad0361214f923a0be63b7/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4ebe6755768520aba9d916f11d42fc712053f3f6ac6d5401032b0296dc195e3c","url":"/audio-research-portal/client/papers/2026-11-28/conference-7f4ad0361214f923a0be63b7/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0652"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/652"
paper_digest_conference_doi: "10.24963/ijcai.2026/652"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/652"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0652.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "2e6341035b5acbb16ab89f78c09e58c56910910127072efe620596c679a50a44"
paper_digest_api_reader_plan_sha256: "cadba3f1d88b4c1e3c2ed7a46f1715118ac819fe58f70f13e73cf3e5cd994b5e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5600d25e27c24f6b286670cd6880418f88afea1efeb55a4eb641991b27d71b9b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2d9f703bb9ff4ebe9f6305d11ac8baa38076104580ff81da9e27ec94bc127e52"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "99ce6d95bea7abee05d70bcb30fe6cd046e16a9bbcef0a692a126642a63b233f"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "36d444b23fc1c8259afc6fb83e7f3871a9333f48b70674c29de446095e32b9e9"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "偏好优化"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 用列表排序学习让文本提示真正控制语音情感强度

> 英文题目：*Emo-LiPO: Listwise Preference Optimization for Fine-Grained Emotion Intensity Control in LLM-based Text-to-Speech*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0652`
> DOI：`10.24963/ijcai.2026/652`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/652) · [官方 PDF](https://ijcai.org/proceedings/2026/0652.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-research-portal/papers/?concept=task.tts)
- **研究方法**：[偏好优化](/audio-research-portal/papers/?concept=method.preference-optimization)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.2/10** | 创新 6.9/10 | 技术严谨 6.6/10 | 实验充分 6.3/10 | 清晰度 5.6/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yihang Lin：The Chinese University of Hong Kong, Shenzhen
- Li Zhou：The Chinese University of Hong Kong, Shenzhen
- Congwei Cao：The Chinese University of Hong Kong, Shenzhen；Shenzhen Loop Area Institute
- Dongchu Xie：The Chinese University of Hong Kong, Shenzhen
- Xiaoxue Gao：Agency for Science, Technology and Research
- Chen Zhang：National University of Singapore
- Haizhou Li：The Chinese University of Hong Kong, Shenzhen；National University of Singapore；Shenzhen Research Institute of Big Data；Shenzhen Loop Area Institute

## 📌 核心摘要

**问题与瓶颈：** 本文研究提示词条件的大语言模型文本到语音中的细粒度情绪强度控制。输入为文本转录 t 与情绪提示 Pc,l，其中 c 为情绪类别，l 为相对强度等级，输出为承载语言内容与指定情绪的语音 S。现有主流路线或在声学域显式建模强度但缺乏文本驱动的灵活控制，或用自然语言提示控制离散类别而把强度留给声学层隐式实现。由于文本情绪描述与语音实现之间存在语义声学鸿沟，强度词难以诱发可感知的强度区分，尤其在高强度提示下表达不稳定且区分微弱，制约了可控性与表现力。

**核心思路与方法架构：** 与最接近的成对偏好基线 Emo-DPO 只做二元局部比较不同，Emo-LiPO 把强度控制重构为学习排序问题并保留监督微调初始化的主干，仅把偏好建模从成对扩展为列表级全局排序。单条样本沿转录 t、情绪提示 Pc,l 与说话人嵌入联合输入，以 CosyVoice-300M-Instruct 为自回归语音词元生成主干，先经监督微调学习指令跟随得到参考策略，再以列表偏好优化对齐强度排序，论文未说明参数冻结范围与流式或离线约束。列表构建对同一转录组织 K + 2 个候选，包含目标样本、同情绪不同强度样本、中性样本与随机异情绪负样本，并按与目标强度的绝对距离排序后赋予基于位置的偏好分，排序分由当前策略相对参考策略的对数比经系数 β 缩放得到，带强度感知权重 λ 的列表排序损失对违反全局顺序的候选对施加更大惩罚，从而直接对齐文本相对强度与生成语音的可感知排序。

**关键实验与核心代价：** 在自建多说话人 ESD-plus 评测上，Emo-LiPO 在微调后情绪识别准确率（Recall-ft，越高越好 ↑）上为 39.54，高于最强可比基线 Emo-DPO（I）的 37.21，同设置下情绪分类召回率（Recall，越高越好 ↑）为 27.56，高于该基线的 26.87，而情绪相似度（EmoSIM，越高越好 ↑）为 91.93，低于消融变体 - w/o λ 的 92.30。语音质量侧，词错率（WER，越低越好 ↓）为 4.26，低于 Emo-DPO（I）的 6.79，语音质量预测（NISQA，越高越好 ↑）为 4.79，与 EmoVoice 和消融变体持平，语音自然度预测（UTMOS，越高越好 ↑）为 4.18，低于 CosyVoice 的 4.30，降噪语音质量预测（DNSMOS，越高越好 ↑）为 3.26，低于 EmoVoice 的 3.29。人工 Arena 式二选一评测（5 名标注者，允许平局，无置信区间，并非平均意见分 MOS）显示 Emo-LiPO 在强度控制胜率上对 CosyVoice 为 86.08%，对 Emo-DPO（E）为 66.44%，对 Emo-DPO（I）为 58.33%，客观代理指标与人工判断总体一致但缺少 MOS 与统计检验。关键消融将权重 λ 固定为 1 后 Recall-ft 回落至 37.59 且单调性减弱，而增加异情绪负样本至 2 个或 3 个反而损害强度排序，论文未披露训练、推理或部署的耗时与实时因子。

**适用边界与深读导览：** 结论成立依赖英文 ESD-plus 的 4 种非中性情绪与 3 档强度、10 个合成音色及固定转录的列表比较，未覆盖中文等多语种、真实录音分布、自发对话与部署时延约束，且训练集未经人工逐条校验。深读可查下方方法概述和架构中的排序分与权重公式含义，以及实验结果中按强度分档与消融对照的完整数值与人工评测口径。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本能点名情感类别，为何点不准情感有多强

基于大语言模型的语音合成已经能接受自然语言提示，灵活控制说话风格与情感类别。类别层面的控制相对直接，系统只需在开心、惊讶、悲伤、愤怒与中性之间做出选择，文字标签与听感范畴对应清晰。强度层面的控制则困难得多，提示中轻微、中等与极度之类的程度差异，往往不能在合成语音中转化为听感上稳定可分的强弱差异。文字擅长表达离散范畴，却难以直接规定连续的韵律实现，高强度提示尤其容易出现区分微弱或表达失稳的情况，这种不对称构成全文的出发点，也是排序建模需要解决的核心矛盾。

论文把这一困难归纳为语义与声学之间的断层。自然语言能有效传达情感类别，却难以可靠诱发可感知的强度变化，同一文本在不同强度提示下生成的语音差异微弱，排序关系不可靠。现有提示条件模型多把强度留给声学层面隐式实现，缺乏显式的相对强弱监督，类别正确不代表强弱有序。这种隐式实现在真实应用中直接限制可控性与表现力，促使论文把强度控制重新表述为排序学习问题，以相对比较代替绝对数值回归，从而获得更稳定的监督信号。

为形式化目标，论文定义输入为文本与情感提示的二元组，记作文本抄本 \(t\) 与类别强度提示 \(P_{c,l}\) 的组合。情感集合包含中性与 4 种非中性情感，每种非中性情感配有 3 个有序强度档，最弱档仍须与中性保持可感知的边界，避免情感与非情感混淆。模型输出应同时满足三点：文本内容忠实、情感类别准确、同类别内高强度语音在听感上严格强于低强度语音，其中第三点要求在固定文本下比较，是全文排序监督的立足点。该定义把内容、类别与强弱解耦，使后续列表构造能够固定文本只扰动情感实现。

已有两条主流路线各有短板。声学域路线把强度建模为从语音信号导出的连续变量，依赖显式声学特征或专用结构，在受控条件下有效，但缺乏灵活的文本驱动能力。提示条件路线与成对偏好路线虽引入自然语言与相对比较，但前者多停留于类别或粗粒度韵律，后者一次只比较一对正负样本，只能施加局部二元约束。两类方法都未对同一文本下的多候选全局顺序施加显式约束，无法保证跨越多档的单调性。列表级监督通过同时比较目标、邻近强度、中性与异类样本，把这种全局单调要求显式写入训练目标，这正是需要补足的环节。

### Emo-LiPO 两阶段流程：先学会跟随指令，再学会排出强度顺序

与最近基线相比，实质改动在于把偏好监督从成对比较升级为列表排序。主干保留 CosyVoice-300M-Instruct 的自回归语音建模与流匹配声码结构，有监督微调阶段保留。成对直接偏好优化中的随机或跨类别二元对被替换为同一文本下的多候选有序列表，新增按目标强度距离的规则排序与按增益折扣差距计算的强度感知权重，使强度差异大的错序受到更大惩罚。

下图从左到右展示 3 个处理框，是理解全文数据走向的关键。阅读时先看左侧指令微调的输入嵌入与输出语音，再看中间如何由同一提示分出有监督目标与偏好列表，最后看右侧如何以冻结参考模型约束可训练模型的分数分布。该图把数据构造与参数更新的对应关系一次讲清。

[![原论文 Figure 2：Emo-LiPO framework. The LLM-based model is trained with SFT followed by LiPO for fine-grained…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-2.png)

*论文图 2：两阶段框架：有监督指令微调得到参考模型，再用列表偏好数据做强度排序优化（原论文 Figure 2）。*

像素显示左侧框底部有说话人嵌入、提示嵌入与文本嵌入 3 路输入，示例为极度开心与英文致谢句，顶部经流匹配输出预测语音。中间框顶部为同一提示与抄本，分出左侧有监督目标与右侧五元候选列表，列表尾部带有位置决定的偏好分。右侧框顶部参考模型带有冻结标记，底部优化模型带有可训练标记，中间椭圆为列表偏好优化，蓝色箭头把中间构造的数据分别送往左右两阶段。

贯穿全文的端到端信号流可按一个具体样本理解：文本抄本、强度提示与说话人嵌入先转为 3 路嵌入序列，送入可训练的大语言模型自回归生成语音符号，再经流匹配模块还原为波形。原文未披露采样率、帧率、码率与各嵌入维度，因此无法给出逐模块的张量形状与帧率变化，只能确认分支在输入端汇合、候选在列表构造处展开、分数在偏好优化处比较这一总体走向。

### 同一文本下的五元候选列表与按强度差距加权的排序机制

列表构造固定文本，只改变情感实现。对目标提示 \(P_{c,l}\)，候选表在同一文本抄本 \(t\) 下生成，避免内容差异干扰强度判断。当强度档数为三时，列表长度为五，包含目标样本、同情感不同强度的其余两档样本、一个中性样本与一个随机非目标情感负样本。排序先按与目标强度的绝对距离由近到远排列同情感样本，再依次放中性与异类情感样本，同距离并列则随机打破。位置越靠前偏好分越高，分值随序号线性递减，目标居首，中性与负样本居尾，从而把类别正确与强度邻近统一为全序。

分数机制衡量当前策略相对参考策略的偏离。每个候选的分数定义为可调系数 \(\beta\) 与 2 个模型对数似然比的乘积，直觉是当前模型比参考模型更愿意生成该候选时得高分。参考模型来自有监督微调的初始化并在偏好阶段冻结，当前模型以自回归方式按文本、情感提示与说话人向量生成语音。前期有监督阶段以教师强制学习基本指令跟随，后期排序阶段只调整当前模型，锚定参考分布以防漂移过远，保持内容忠实与自然度。

排序损失遍历所有偏好分前高后低的样本对，若模型给出的分数顺序与规则顺序矛盾则产生惩罚。权重项 \(\lambda_{i,j}\) 由增益差与折扣差共同决定，增益来自偏好分的指数变换，折扣来自位置对数，强度差距越大权重越大。若模型把异类情感排到目标之前，增益差与位置差同时很大，惩罚最重，对应优先保证跨类别分离。若模型混淆相邻强度档，偏好差距与位置差距都很小，惩罚较轻但仍推动细微区分，对应保留同情感内的细粒度层级。若权重退化为常数，则所有错序等同对待，容易满足于类别正确而忽视单调性。

下游变换直接受分数分布驱动。梯度通过分数差回传，增大目标与高偏好样本的似然，压低中性与负样本的似然，使生成分布向规则全序靠拢。由于权重强调大差距错序，模型先学稳类别边界，再细化强度邻近关系，形成由粗到细的整形过程。推理时不再需要候选列表，模型以学到的排序偏置直接按提示强度生成，分数层级内化为生成倾向，从而在固定文本下实现可感知的强弱单调变化，同时保留语音的自然表现。

### ESD-plus 的合成与校验方式及两阶段参数冻结边界

ESD-plus 为支撑细粒度强度建模而建，基于 ESD 英文部分的 350 个平行句作为合成脚本，保留开心、惊讶、悲伤、愤怒 4 类非中性情感与中性语音，非中性每类再分三档强度，共形成 13 个细粒度标签。数据集共含 45,500 条语音，平均每条 2.92 秒，总计约 36.89 小时。数据按语句划分，训练、开发与测试分别对应 300 句、20 句与 30 句，同一语句的全部说话人与情感变体固定在同一划分，使同一文本条件下的强度比较不受文本差异干扰。任务同时要求内容保真、类别正确与强度排序，其中最弱档仍须与中性保持可感知的边界。

合成采用提示驱动的情感语音合成流程，每类情感强度组合使用自然语言情感描述加标量指示构成统一提示，标量刻意拉开间隔，取 1/5、3/5 与 5/5，以保证不同档位在感知上可区分。发声人采用 10 个官方英文声音，其中 4 位男性与 6 位女性，支持多说话人条件下的情感表达。开发集与测试集专用于评估并经过人工成对校验，要求同情感内不同强度样本呈现单调递增，不满足则重新生成直至满足顺序，最终 91.23% 的受检样本通过校验，训练集保持原样不做改动。

模型优化分两阶段衔接。有监督微调阶段在成对提示语音数据上以教师强制方式计算自回归语音标识上的交叉熵，学习内容保真与基本指令跟随，得到参考策略。列表偏好优化阶段以参考策略为起点继续优化，生成仍以文本与情感提示构成的联合输入加说话人嵌入为条件逐个产生语音标识。同一提示下的候选列表按与目标强度的绝对距离 \(|l' - l|\) 排序，越接近目标越靠前，中性次之，异类情感居末，位置索引进一步映射为 0 到 1 之间的偏好分值。强度感知权重放大强度差距大的样本对违反顺序时的惩罚，有监督微调提供稳定的起点，列表偏好把文本中的相对强度说明转化为可感知的语音差异。

### 类别准确率与强度单调性提升成立的评测前提与具体代价

#### 评测协议与公平性前提

评测在 ESD-plus 上进行，兼顾语音质量与情感相关性。语音侧以 Whisper-Large-v3 计算的 WER（词错误率）衡量可懂度，数值越低越好，以 NISQA、DNSMOS 与 UTMOS 3 种客观语音质量评估衡量自然度，数值越高越好。情感侧以 emotion2vec 提取的 EmoSIM（情感相似度）衡量与真值的余弦相似，数值越高越好，以分类召回率与在 ESD-plus 上微调后的召回率衡量类别准确率，数值越高越好。基线包含有监督的 CosyVoice 与 EmoVoice，以及随机对、跨类别对与跨强度对 3 种成对偏好变体。

下表为精简子表，仅展示 6 行 6 列，行覆盖有监督基线、最强跨强度成对变体、所提方法及其去加权变体，列覆盖可懂度、自然度代表、相似度与两档召回率。阅读时注意 WER 越低越好，其余列越高越好，数值保留 2 位小数，相似度与召回率量纲为分值与百分比含义但原表数据格不带百分号。

| Model | WER ↓ | UTMOS ↑ | EmoSIM ↑ | Emotion Relevance Recall ↑ | Recall-ft ↑ |
| --- | --- | --- | --- | --- | --- |
| CosyVoice | 4.47 | 4.30 | 81.87 | 25.10 | 29.90 |
| EmoVoice | 5.40 | 4.27 | 89.84 | 20.56 | 28.51 |
| Emo-DPO (I) | 6.79 | 4.00 | 91.85 | 26.87 | 37.21 |
| Emo-LiPO | 4.26 | 4.18 | 91.93 | 27.56 | 39.54 |
| - w/o λ | 4.15 | 4.17 | 92.30 | 26.21 | 37.59 |

在当前展示的同组同列范围内，Emo-LiPO 在两档召回率上为最高，分别为 27.56 与 39.54，高于跨强度成对变体的 26.87 与 37.21。代价是并非所有列均为最高：EmoSIM 最高为去加权变体的 92.30，高于 Emo-LiPO 的 91.93；WER 最低为去加权变体的 4.15，优于 Emo-LiPO 的 4.26；在展示子集中 UTMOS 最高为 CosyVoice 的 4.30，高于 Emo-LiPO 的 4.18。结论是列表优化带来类别判别收益，但声学自然度与相似度未同步登顶。

|  | CosyVoice | Emo-DPO (E) | Emo-DPO (I) |
| --- | --- | --- | --- |
| Speech Quality | 94.29 | 79.37 | 89.28 |
| Emotion Expression | 90.34 | 80.65 | 78.24 |
| Intensity Control | 86.08 | 66.44 | 58.33 |

上表为人工竞技胜率的完整转写，单位为 %，数值为 Emo-LiPO 对阵 3 个基线的胜率。Emo-LiPO 在语音质量、情感表达与强度控制三维上均超过 50%，对阵 CosyVoice 分别为 94.29、90.34 与 86.08，对阵跨类别成对变体分别为 79.37、80.65 与 66.44，对阵跨强度成对变体分别为 89.28、78.24 与 58.33。强度控制对阵跨强度变体优势最弱，说明跨强度成对信号已捕获部分强度信息。

#### 强度分级趋势与分数分布

下图横轴为 5 个模型，纵轴为微调后召回率，图例以三角形、方形与叉形区分低、中、高强度。阅读时先看每个模型内部三点是否由低到高抬升，再跨模型比较同强度点的绝对高度，注意纵轴非零截断会放大视觉差距。

[![原论文 Figure 3：Emotion recognition accuracy (Recall-ft) across different emotion intensity levels.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-3.png)

*论文图 3：不同模型在低中高强度上的情感识别准确率变化，横轴为模型，纵轴为微调后召回率（原论文 Figure 3）。*

像素显示最右侧所提方法三点由低到高依次抬升且整体最高，呈现最清晰的单调阶梯。但并非仅该模型单调，跨类别成对变体三点同样呈低到高缓慢上升，只是中低差距很小且绝对值更低。EmoVoice 三点也呈弱上升，CosyVoice 中点最低呈 V 形折返，跨强度成对变体中点最高而高点回落呈倒 V 形。因此准确表述是所提方法单调性最稳定且绝对最强，而非唯一单调，其他模型的非单调与弱单调恰好说明文本强度与语音实现之间对齐不稳。

下图纵轴为对数分数差，横轴从左到右为最近强度、中性与其他情感 3 组小提琴图。阅读时先看黑色中位线高度，再看分布宽度与拖尾，右高左低意味着跨类别最易分、相邻强度最难分。

[![原论文 Figure 4：Score Margin Distributions Between Target and Different Candidates.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-4.png)

*论文图 4：目标语音与三类候选之间对数分数差的分布，左中右依次为最近强度、中性与其他情感（原论文 Figure 4）。*

像素显示右侧异类情感分布最高且最集中，中位线约在 5 附近，上下界跨度大但主体收紧。中间中性分布居中，中位线约在 2.5 附近，形状对称紧凑。左侧最近强度分布最低，中位线接近于 0，下方拖尾延伸至负值，顶部约在 2.5 处封顶。该层级与规则顺序一致，表明策略分数空间优先保证跨情感分离，同时保留同情感内细粒度区分，只是相邻强度仍有重叠，解释了高强度增益最大而细微强度仍难分的现象。

### 消融揭示的排序假设边界：负样本数量、排序依据与采样多样性

#### 加权与排序依据的归因

下图包含 4 个子图，每图纵轴为分值，绿色圆点为召回率，橙色叉形虚线为微调后召回率。阅读时不要只看单点高低，要看折线峰值位置与跨条件落差，落差越大说明该设计选择越关键。4 个子图共享同一最优锚点，便于判断偏离最优设置时代价有多大。

[![原论文 Figure 5：Ablation study of Emo-LiPO on different design choices.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/909dde8e03ab/figure-5.png)

*论文图 5：四组消融：负样本数量、排序策略、加权机制与负采样来源对召回率的影响（原论文 Figure 5）。*

像素显示子图 a 中负样本数为 1 时两条折线同时达到峰值，分别为 27.56 与 39.54，无负样本时最低，增至 2 个与 3 个时回落，说明少量跨情感对比已足够，过多负样本会稀释强度排序监督。子图 b 中规则排序最高，基频排序最低，能量排序居中，表明单一声学属性的距离不能替代按目标强度距离的规则顺序。

子图 c 比较固定权重、按位置索引加权与按预设分数差距加权。固定权重最低，分别为 26.21 与 37.59，索引加权与分数加权几乎持平，分别为 27.56 与 39.54，以及 27.56 与 39.49。结论是加权机制本身带来增益，具体用索引还是分数定义差距差异很小。子图 d 显示随机跨强度采样最优，限定为低、中单档次之，高档单采样最差，说明负样本强度多样性提供更均衡的监督，单档采样引入偏差。

综合来看，消融支持规则排序优于单一声学排序、适度加权优于均匀加权、单个随机负样本优于多个或单档负样本。但缺失的消融同样重要：强度档数、标量间隔、说话人数量、列表长度与主干规模均未做系统变化，权重中增益与折扣各自贡献未分离，方差与置信区间未报告，人工竞技仅报告胜率而无听众数之外的显著性分析，结论外推须谨慎。

### 假设边界、复现前提与工程选型建议

方法成立依赖 3 个关键假设。其一，规则排序假设同情感样本按目标距离的顺序即为感知强度顺序，并假设最弱强度与中性可分，该假设在验证与测试集经人工校验，但在训练集未经逐条修正，若合成数据存在强度混淆，列表监督会继承噪声。其二，强度感知权重假设增益与折扣的乘积能反映感知差距，但权重形式来自排序学习启发式，未经听知觉标定。其三，固定文本假设要求同一文本下比较，跨文本与跨说话人的强度泛化未在主表中单独度量。

未验证的部署条件较多。数据集全部来自合成管线与英文平行句，语种、口音、自发语与噪声环境下的表现未知。评测中客观质量为神经代理分数，人工侧仅为三维竞技胜率与 5 位标注者的相邻强度成对比较，缺乏绝对平均意见分与置信区间，也未报告延迟、实时率与显存，流式与端侧部署代价无法评估。高强度增益最明显，但是否伴随夸张化或失真，需要结合试听与基线对照判断。

复现须区分三件事。代码与数据在正文中提及链接，但本次未获得可用性验证，不能视为已可直接下载运行。权重是否提供、环境与脚本是否完整同样无法确认。附录指向数据细节与人工评测指南，但正文未给出全文，关键超参与训练配置缺失。建议复现时先按 300、20、30 句划分与同句同分布原则重建数据，再固定主干与冻结边界，先复现召回率与单调趋势，再补听感对照。

工程选型上，若目标是类别准确与强度单调性，且能接受合成数据与规则排序的维护成本，列表排序加适度加权是优于随机成对与纯有监督的选择，负样本保持单个随机跨强度即可。若目标是绝对自然度最高或计算预算极紧，则需权衡去加权变体在相似度与可懂度上的微弱优势，以及增加负样本与复杂排序带来的额外构造与训练开销，不宜直接默认列表越长越好。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长、声码器码率、前瞻延迟与实时率，信号规格无法复原
- **训练与评测数据**：ESD-plus 基于 ESD 英文部分 350 个平行句合成，含 4 种非中性情感各 3 档强度加中性共 13 标签，10 个发声人，45,500 条约 36.89 小时，平均 2.92 秒，按 300、20、30 句划分训练、验证与测试
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号数量、训练步数与耗时，硬件与算力开销无法复原
- **核心超参数与配置**：主干为 CosyVoice-300M-Instruct，强度标量取 1/5、3/5 与 5/5，列表长度为 K 加 2，优化器学习率批大小与温度系数原文未披露
- **推理速度与部署开销**：原文未披露参数量、显存占用、延迟与实时率，仅说明自回归生成加说话人嵌入与流匹配声码
- **开源产物与协议状态**：原文提及代码与数据集链接，但本次未收到可验证的可用资源证明，不宜视为已可直接获取或运行
- **附录与补充材料要点**：原文指向附录 A 补充数据构建与统计，附录 B 补充人工评测量表平台与标注指南，正文未给出附录全文

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.2/10** | 创新 6.9/10 | 技术严谨 6.6/10 | 实验充分 6.3/10 | 清晰度 5.6/10 | 影响力 5.9/10 | 开源 0.0/10 | 可复现 4.9/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0652`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/652) · [官方 PDF](https://ijcai.org/proceedings/2026/0652.pdf)
- DOI：`10.24963/ijcai.2026/652`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：将强度控制重构为列表级全局排序，以K+2同转录候选与强度感知权重λ显式对齐文本相对强度与可感知排序。

- 核心优势：在ESD-plus上Recall-ft达39.54与Recall达27.56均居同表最高，超越最强成对基线Emo-DPO(I)的37.21与26.87。

- 核心优势：构建45,500样本约36.89小时的ESD-plus多说话人强度数据集，开发测试集经人工成对校验达91.23%通过率。

- 主要短板：正文断言仅Emo-LiPO呈稳定单调上升，与图3像素显示Emo-DPO(E)同样低小于中小于高缓慢上升矛盾且正文自述前后不一致。

- 主要短板：人工Arena评测仅5名标注者允许平局且非MOS量表，未报告置信区间方差与显著性检验，对Emo-DPO(I)强度胜率仅58.33%。

- 主要短板：学习率批量优化器步数硬件β取值与解码细节均未说明，训练语音来自合成且训练集未经人工校验，关键复现配置缺失较多。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
