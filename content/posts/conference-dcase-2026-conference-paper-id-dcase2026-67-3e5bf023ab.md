---
title: "Confidence-Aware Aggregation for Multimodal Audio Reasoning"
date: 2026-11-28
draft: false
description: "针对大型音频语言模型单次预测不稳定且等权投票难以利用分歧的问题，本文提出无需训练的对数概率置信度加权汇合，在 MMAR 上以 Borda 等累加方法在 N = 16 时平均超越多数投票并改善校准，而代价是多倍解码开销与超过 8 后收益饱和。"
tags: ["测试时计算扩展", "不确定性估计与校准", "音频问答"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把输出波动变为可靠性：面向音频问答的置信度加权汇合"
paper_digest_original_title: "Confidence-Aware Aggregation for Multimodal Audio Reasoning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-67"
paper_digest_workbench_source_sha256: "0dcb6746cb4ff8cfefde7d40c56b0f1807b4668ecfbd50a541002bda4079234b"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Olvera_67.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频问答"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对大型音频语言模型单次预测不稳定且等权投票难以利用分歧的问题，本文提出无需训练的对数概率置信度加权汇合，在 MMAR 上以 Borda 等累加方法在 N = 16 时平均超越多数投票并改善校准，而代价是多倍解码开销与超过 8 后收益饱和。"
paper_digest_reader_sections: [{"heading":"单次解码在重叠声景问答中为何不稳定","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三次采样的无训练框架如何把波动变为可靠性","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"五种汇合规则如何用置信度区分等权与加权","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"有效性过滤与四模型准确率如何随采样预算变化","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"预算饱和与分歧程度如何放大加权汇合的优势","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论的适用边界复现前提与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["LTCI, Télécom Paris, Institut Polytechnique de Paris, France"],"name":"Michel Olvera"},{"affiliations":["LTCI, Télécom Paris, Institut Polytechnique de Paris, France"],"name":"Paraskevas Stamatiadis"},{"affiliations":["LTCI, Télécom Paris, Institut Polytechnique de Paris, France"],"name":"Gaël Richard"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"843f07c0b59cd5b0c5649c81f21bc6d3790c50ec29c2fa23dd6359e6475ab9ff","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e5bf023ab3bfb1ee9575830/citation.bib"},"citation.json":{"sha256":"39deac39a401d28d40cf93cff42cfe054a36a7fd1e61f8a94d3170d1835a7699","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e5bf023ab3bfb1ee9575830/citation.json"},"citation.ris":{"sha256":"6f7129927a5fd436abf47117d6b469bce611caa2958978d29dc5634f667ca20b","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e5bf023ab3bfb1ee9575830/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f0ecd2c1f2af446f0589a866061fa488d2b68718ab76da38882d38db26d9d591","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e5bf023ab3bfb1ee9575830/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-67"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Olvera_67.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "aae6ffd9a018af018557e1a376b6c05aba619d0ccc5d3549bf42f495413502b4"
paper_digest_api_reader_plan_sha256: "f324a68a1f9af966bd873d63b629de5028d77802662ea73acc21e46ff9630b94"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5dfba8cc1582c882b735c7078aea030d7629f0452d286f3355bcf11aadec4673"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "616bc3d043b8e687acdb68dcde7d9aec0386bd1a05afa3e6d0fe3671a54d1ff0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f6108426274a36fb9b1b862e282df373375fa9710d772a2df7ed9757b06e4ee2"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "cdd8bda71e934a628c6c2a7df1f5257681a2fdba05fb9b0fd656065a1cccac29"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"method","id":"method.test-time-scaling","label":"测试时计算扩展"},{"facet":"method","id":"method.uncertainty-estimation","label":"不确定性估计与校准"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "测试时计算扩展"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 把输出波动变为可靠性：面向音频问答的置信度加权汇合

> 英文题目：*Confidence-Aware Aggregation for Multimodal Audio Reasoning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-67`
> Track：P1-5




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Olvera_67.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频问答](/audio-research-portal/papers/?concept=task.audio-question-answering)
- **研究方法**：[测试时计算扩展](/audio-research-portal/papers/?concept=method.test-time-scaling)；[不确定性估计与校准](/audio-research-portal/papers/?concept=method.uncertainty-estimation)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.3/10 | 清晰度 6.6/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 7.7/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Michel Olvera：LTCI, Télécom Paris, Institut Polytechnique de Paris, France
- Paraskevas Stamatiadis：LTCI, Télécom Paris, Institut Polytechnique de Paris, France
- Gaël Richard：LTCI, Télécom Paris, Institut Polytechnique de Paris, France

## 📌 核心摘要

**问题与瓶颈：** 音频问答 (Audio Question Answering, AQA) 以音频信号与自然语言问题为输入，要求输出简短答案，本文聚焦多项选择形式的多步推理问答。大型音频语言模型 (Large Audio Language Model, LALM) 将音频编码器与大语言模型主干耦合，以自回归方式先生成推理轨迹再给出最终答案。单次解码预测不稳定，同一音频问题对在解码温度或提示微小变化下会给出不同答案，源于证据不足的认知不确定性与信号本身模糊的偶然不确定性。音频推理更困难，信号具有时间结构、声源重叠与证据弱定位的特点，感知错误如起止误判或重叠声源混淆会直接污染推理轨迹本身，动摇文本自洽性所依赖的路径近似独立与词元对数概率可作正确性代理这两项隐含假设。

**核心思路与方法架构：** 与仅做均匀计数的多数投票基线相比，本文保留多候选采样，仅将均匀计数改为基于模型自身似然的置信加权累加。对单个音频问题对，模型在参数冻结下离线生成 N 个候选序列，每个序列包含推理轨迹与答案，经归一化映射得到选项答案。每个候选的自置信分数定义为全序列条件对数似然的长度归一化均值，用于缓解冗长偏置，排序后分别以幂加权 Borda 投票与温度 Softmax 的对数和指数 (Log-Sum-Exp, LSE) 投票累加到相同答案上，取累加值排序首位者为预测，而极端 Best-of-N 与均匀多数投票作为两种退化对照。评测沿用 Qwen3-Omni-Thinking 与 Qwen3-Omni-Instruct 的 30B 总参 / 3B 激活、Qwen2-Audio 的 8.4B 参数与基于 7B 主干的 Audio Flamingo 3，全程无额外训练，仅在推理时组织证据。

**关键实验与核心代价：** 在包含 1000 个音频问题三元组、覆盖一般声音与音乐语音及其混合等 7 类内容和信号感知语义文化四层分类的 MMAR 基准上，置信加权方法随采样预算 N 扩大持续优于随机挑选与多数投票。在 MMAR 基准上从 N = 3 变为 N = 16 时跨模型平均 Accuracy 变化为 Borda 投票 +3.50 pp，高于最强可比基线多数投票的 +2.77 pp，而 LSE 投票为 +3.35 pp、SoftLSE 投票为 +3.23 pp、Best-of-N 仅 +1.11 pp、随机挑选仅 +1.32 pp。期望校准误差 (Expected Calibration Error, ECE) 变化为 LSE 投票 -8.77 pp、Borda 投票 -7.76 pp、SoftLSE 投票 -7.26 pp、多数投票 -7.69 pp、Best-of-N -5.06 pp，随机挑选为 +0.03 pp，ECE 越低越好 ↓，Accuracy 越高越好 ↑。按 N = 16 时一致率分组，多数投票在高度一致、中等一致与高度分歧下准确率分别约为 67%、43% 与 32%，而 LSE、SoftLSE 与 Borda 在中等与高度分歧下分别超出多数投票 1.2 pp 至 2.4 pp 与 2.1 pp 至 2.8 pp，在高度一致下几乎无增益。收益在 N 超过 8 后趋于饱和，Best-of-N 始终弱于加权累加，Qwen2-Audio 上增益微弱，本文为多项选择评测，未使用人工主观听测或神经代理听感指标。

**适用边界与深读导览：** 结论成立前提为冻结大型音频语言模型的多项选择推理问答、经有效性过滤后的候选集合与离线多采样推理，未覆盖开放式生成、更多基准、音频特异不确定性信号与真实延迟吞吐部署成本。分歧越大的含混实例收益越大，一致性已很强时加权几乎无效。欲深究条件生成定义、自置信打分与五种聚合规则的公式含义可查阅方法概述和架构，欲核对过滤影响、预算扩展与分歧分组的完整数字可查阅实验结果。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/michelolzam/lalm-self-consistency> — 链接可访问（HTTP 200）；仓库仅见文档框架（未检出代码/权重文件）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单次解码在重叠声景问答中为何不稳定

大型音频语言模型 (Large Audio Language Model, LALM) 将音频编码器与大语言模型主干耦合，对复杂声景做生成式推理。本文聚焦的音频问答 (Audio Question Answering, AQA) 可形式化为音频与自然语言问题的配对 \( (x, q) \)，目标是输出简短答案字符串 \(a\)。MMAR 评测包含 1,000 个来自真实视频的音频问答三元组，每个问题带有固定候选项，覆盖一般声音、音乐、语音及其混合等 7 类内容，并遵循信号、感知、语义与文化 4 级分类。

同一模型对完全相同的 \( (x, q) \) 在解码温度或提示的微小变化下可能给出不同答案，平均准确率高仍掩盖单次预测的不稳定。原文将其归因于两类不确定性：证据不足带来的认知不确定性，以及信号本身含混带来的偶然不确定性。以下为教学例子：询问人物在室内还是室外说话时，三次运行可能分别给出室内、室外与室内，这种摇摆正是后续汇合希望利用的信号。

把文本领域的自洽思想直接搬到音频并不平凡。音频推理以时间结构化的声信号为条件，声源常常重叠且证据定位微弱，若把起始点归属错误或把重叠声源混淆，感知错误会直接污染整条推理轨迹，而不只停留在语言推理步骤。这一特点动摇了文本自洽的两个隐含假设，即多次采样的推理路径近似独立，以及词元级对数概率是经过校准的正确性代理。在音频条件下，模型自信心是否仍能反映路径优劣并无保证。

在多模态推理中，推理时自洽已出现在视觉语言模型中，但多依赖表层多数投票或外部奖励重排。音频推理的对应工作 Audio-CoT 首次对多条采样推理路径做多数投票汇合，语音处理中也有对 N-best 假设做第二遍重打分的悠久传统。尚未回答的问题是：每条候选自带的模型置信度能否在采样路径之间做区分，并超越把每票视为等权的一致共识。本文正是围绕这一缺口展开系统比较。

### 三次采样的无训练框架如何把波动变为可靠性

与最近的 Audio-CoT 基线相比，本文的实质增量不在训练或结构，而在推理时汇合规则。保留的部分是随机解码多条推理路径并提取规范化答案的做法，替换的是等权多数投票，引入基于对数概率的自信心打分，并比较极值选择、一致共识与置信度加权累加 3 类共 5 种规则。全部参数保持冻结，不做任何额外训练或参数更新，收益完全来自对已有输出多样性与自确定性的再利用。

为了建立直觉，可先看示意图的三栏布局如何对应从问题到决策的完整流程。上栏用同一个人声与同一个室内外提问展示单次预测的不稳定，下栏左侧展示等权投票的思路，下栏右侧展示本文强调的置信度加权汇合。沿箭头观察票数如何汇合，以及填充长度所代表的置信度如何改变结果，有助于理解后文的形式化定义。

[![原论文 Figure 1：Variability in LALMs leads to inconsistent single-shot predictions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-1.png)

*论文图 1：单次不稳定多数投票与置信度加权汇合的三栏对比示意（原论文 Figure 1）。*

像素显示上栏右侧三次运行分别给出室内、室外与室内，并配有骰子图标，黄色标签提示单次预测不稳定。下栏左侧 5 个竖条中有 3 个室内与 2 个室外，虚线箭头共同指向室内，代表多数投票取众数。下栏右侧 5 个横条的深色填充长度各不相同，表示每条样本的置信度不同，虚线分别汇入小尺寸室内与大尺寸室外两个结果，室外一侧带有高亮星形，示意加权后少数但高置信的答案可能反超多数，这正是加权累加与等权投票的关键区别。

端到端流程可按三步追踪：第一步对同一 \( (x, q) \) 采样 \(N\) 条完整序列 \(y(i)\)，每条包含推理轨迹与最终答案，并经规范化映射得到 \(a(i)\)；第二步在推理轨迹与最终答案的拼接上计算长度归一化的条件对数似然作为自信心 \(s(i)\)；第三步按确定性规则把答案与分数对集合汇合成最终预测。原文未披露采样率、帧长、步长、特征维度与通道数等信号规格，也未给出张量形状与帧率变化，因此无法给出 1 秒样本的具体维度推演，只能在答案与分数层面完整复述上述离散汇合过程。

### 五种汇合规则如何用置信度区分等权与加权

对每个 \( (x, q) \)，模型定义自回归条件分布，重复解码得到 \(N\) 个样本 \(y(i)\)，对应答案多重集合记为 \(A_N\)。记全部互异答案集合为 \(A\)，对每个候选答案 \(a\) 定义下标集合 \(I_a\)，表示 \(N\) 次采样中给出该答案的全部序号。极值选择 Best-of-N 只取自信心 \(s(i)\) 最高的一条样本的答案，一致共识 Majority Vote 则取出现频次最高的答案，前者只信最自信的一票，后者把每票视为等权。

排序加权 Borda 先按自信心从高到低给出排名 \(rank(i)\)，第 1 名最自信，再赋予幂加权权重，权重为 \(N - rank(i) + 1\) 的 \(\alpha\) 次方，同一答案的权重求和得到总分并取最高者。当 \(\alpha\) 趋于 0 时权重趋于均匀，退化为多数投票；当 \(\alpha\) 趋于无穷时权重集中于首位，退化为极值选择，因此 \(\alpha\) 在均匀共识与极值选择之间做连续插值。

温度控制的 SoftLSE 则直接在自信心上做柔性指数汇合，对同一答案的样本计算 \(\tau\) 乘以其指数和的对数，\(\tau = 1\) 时为标准对数和指数，\(\tau\) 趋于 0 时同样回到极值选择。原文把 5 种方法归为 3 种几何：极值选择、均匀共识，以及置信度加权累加的 SoftLSE 与 Borda。自信心本身定义为整条序列条件对数似然的长度平均，目的是消除长序列天然累加更高分数的冗长偏置，使不同长度的推理轨迹可比。

实现上，Qwen2-Audio 与 Audio Flamingo 3 的原始生成先经确定性 LLaMA 3.1 8B-Instruct 解析器抽取答案片段，该解析器只见原始文本，不接触音频输入与自信心分数，也不生成或改写答案内容。随后对全部模型做有效性过滤：归一化后非空且恰好匹配唯一固定选项的回答才保留，汇合只在有效答案上执行。SoftLSE 温度与 Borda 指数在 0 到 4 区间以 0.25 步长网格搜索，模型参数全程冻结，采样温度集合从 0.1 到 1.0 区间一次性均匀抽取并在全部问答对间复用。

### 有效性过滤与四模型准确率如何随采样预算变化

#### 评测协议与公平性前提

评测基于 MMAR 数据集的 1,000 个多项选择问答，每个样本提供固定选项，准确率越高越好，期望校准误差 (Expected Calibration Error, ECE) 以百分点计越低越好。对比 4 个模型：Qwen3-Omni-Thinking 与 Qwen3-Omni-Instruct 均为 30B 总参数 / 3B 激活参数，Qwen2-Audio 为 8.4B 参数，Audio Flamingo 3 基于 7B 主干。采样预算 N 取 3、4、8 与 16，解码温度固定集合从 0.1 到 1.0 均匀抽取并复用，以暴露更广的认知多样性。Naive Pick 基线定义为从候选池均匀随机抽取，用于隔离汇合本身的增益。

校准以 10 个分箱的 ECE 度量，每种汇合需给出聚合答案的单一置信度：Best-of-N 取选中样本分数的指数，多数投票取获胜票数占比，Borda 取获胜答案的归一化权重，LSE 与 SoftLSE 则在候选答案上做柔性最大值的归一化分布并取最大值。一致率 Agr 定义为众数答案占比，按 0.75 与 0.50 切分为高度一致、中度一致与高度分歧三档。原文未报告方差、置信区间与人工听测，全部结论依赖单次运行的准确率与 ECE，网格搜索的验证划分也未说明。

#### 过滤效果与分模型准确率走势

有效性过滤要求归一化后非空且恰好匹配唯一选项，否则丢弃，汇合只在有效答案上执行。平均而言，Qwen3-Omni-Thinking 已接近上限，回答率从 98.79% 升至 99.62%，准确率仅提升 0.38 个百分点；Qwen3-Omni-Instruct 从 94.00% 升至 98.60%，准确率提升 1.90 个百分点；Audio Flamingo 3 从 94.21% 升至 99.48%，准确率提升 1.74 个百分点；Qwen2-Audio 从 94.42% 升至 97.22%，准确率提升 1.20 个百分点。后续分析均只考虑有效回答，避免无效字符串干扰投票。

要判断置信度是否在不同模型上都带来增益，可先看分模型准确率随采样预算变化的四面板折线。横轴均为采样预算 N，纵轴均为准确率，图例区分 Naive Pick、Best-of-N、LSE、SoftLSE、Borda 与多数投票。重点观察灰色虚线基线的位置，以及加权方法与多数投票的相对高低是否随 N 增大而拉开，并留意 Qwen2-Audio 面板是否存在例外。

[![原论文 Figure 2：Accuracy (%) vs. sampling budget N for four large audio-language models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-2.png)

*论文图 2：四模型准确率随采样预算变化的折线对比（原论文 Figure 2）。*

像素显示灰色虚线在前 3 个面板多处偏低，但并非始终垫底：在左侧 Qwen3-Omni-Thinking 面板 N = 4 处，深蓝色 Best-of-N 圆点约 65.1% 位于灰色 Naive Pick 虚线约 65.6% 下方，该点 Best-of-N 未超越随机抽取。除该例外，加权累加曲线与多数投票曲线多位于上部，且在 N = 8 到 16 区间差距有所拉大，Borda 与 SoftLSE 多数情况下略高于多数投票，而深蓝色 Best-of-N 则相对偏低或走平。最右 Qwen2-Audio 面板是另一例外：在 N = 3 时灰色基线并不垫底，加权方法对多数投票仅有微弱超越，深蓝色曲线在 N = 16 时甚至回落。因此前 3 个模型的整体占优需以 N = 4 例外为前提理解，Qwen2-Audio 仅获边际增益，可能与其结构限制有关。

为把随预算扩展的平均收益量化，可看 N = 3 到 16 的总体变化汇总表。该表按汇合方法列出准确率变化与 ECE 变化，均在模型间平均，准确率以百分点上行表示增益，ECE 以百分点下行表示校准改善。对比极值、共识与加权 3 类在两列上的排序，有助于理解证据累积与单点选择的本质差异。

| Aggregation Method | ∆Accuracy (pp) | ∆ECE (pp) |
| --- | --- | --- |
| Naive Pick | +1.32 | +0.03 |
| Best-of-N | +1.11 | -5.06 |
| Majority Vote | +2.77 | -7.69 |
| LSE Voting | +3.35 | -8.77 |
| SoftLSE Voting | +3.23 | -7.26 |
| Borda Voting | +3.50 | -7.76 |

表中 Borda 准确率提升 3.50 个百分点，LSE 为 3.35 个百分点，SoftLSE 为 3.23 个百分点，多数投票为 2.77 个百分点，Best-of-N 仅 1.11 个百分点，随机抽取仅 1.32 个百分点。校准侧，随机抽取几乎无改善，ECE 变化为 + 0.03 个百分点，而 LSE 下降 8.77 个百分点，Borda 下降 7.76 个百分点，多数投票下降 7.69 个百分点，Best-of-N 仅下降 5.06 个百分点。这说明自信心更适合做加权信号而非单点选择，且证据累积是校准改善的主要来源。

### 预算饱和与分歧程度如何放大加权汇合的优势

#### 预算扩展中的准确率与校准

平均到全部模型后，采样预算的规模效应与饱和点在双面板图中更为清晰。左面板纵轴为准确率且向上越好，右面板纵轴为 ECE 且向下越好，横轴均为 N，图例与分模型图一致。观察加权曲线在 N = 4 到 8 区间的陡峭爬升，以及 N = 8 到 16 区间的走平，同时对比灰色虚线与深蓝色曲线是否始终改善缓慢。

[![原论文 Figure 3：Accuracy (a) and ECE (b) versus sampling budget N, averaged across audio-language models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-3.png)

*论文图 3：平均准确率与校准误差随采样预算变化的双面板趋势（原论文 Figure 3）。*

像素显示左面板中绿色 Borda、紫色 SoftLSE 与橙色 LSE 在 N = 8 时已升至约 57.5% 至 58.0%，到 N = 16 时仅再升至约 58.0% 至 58.6%，增量明显收窄，红色多数投票亦在 8 后放缓。右面板中灰色虚线始终停留在约 36 个百分点附近，几乎无校准改善，深蓝色 Best-of-N 从约 30 个百分点降至约 26 个百分点，降幅有限，而其余 4 条曲线从约 29 至 31 个百分点骤降至 N = 8 时的约 22 至 24 个百分点，此后基本持平。这支持原文判断：累积证据的方法扩展性最好，但超过 8 后收益饱和。

#### 分歧分档下的相对增益

为定位增益来自何处，可看按一致率分档的热图。行表示 5 种方法，列表示高度一致、中度一致与高度分歧，单元格为相对多数投票的准确率差值，右侧色条绿色为正、红色为负。重点比较同一行从左到右是否递增，以及首行与次行的负值在高分歧列是否依然为负或转正。

[![原论文 Figure 4：Accuracy gain (pp) over Majority Vote for N = 16, averaged across models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/9ddddf14905e/figure-4.png)

*论文图 4：相对多数投票的准确率增益按一致程度分档的热图（原论文 Figure 4）。*

像素显示首行随机抽取为 -2.0、-4.2 与 -8.2 个百分点，分歧越大越差；次行 Best-of-N 为 -2.6、-1.4 与 + 0.8 个百分点，仅在高分歧下微弱转正。LSE 为 -0.1、+ 1.2 与 + 2.1 个百分点，SoftLSE 为 + 0.0、+ 2.4 与 + 2.6 个百分点，Borda 为 + 0.0、+ 2.4 与 + 2.8 个百分点。原文参照的多数投票绝对准确率约为高度一致下 67%、中度一致下 43% 与高分歧下 32%，加权方法的增益恰出现在多数投票最不可靠的区间，而在高度一致下几乎无增益。

### 结论的适用边界复现前提与工程选型建议

本文结论成立依赖若干明确前提：全部评测限于 MMAR 的 1,000 个固定选项多项选择问答，未在其他音频推理基准上验证；加权参数在 0 到 4 区间以 0.25 步长搜索，原文未说明独立验证划分，增益可能包含事后调参成分；未报告多次运行的方差与置信区间，Qwen2-Audio 上的边际结果提示结构差异可能削弱置信度信号。音频特有的感知错误会污染推理轨迹，词元级对数概率的校准性在重叠声源下并无理论保证，因此方法更接近经验性证据累积而非严格不确定性量化。

复现核对上需区分三件事：作者项目代码在正文中给出链接，本次收到的资源检查显示该代码链接当前可用；模型权重并非随文发布，需依赖外部 Qwen3-Omni、Qwen2-Audio 与 Audio Flamingo 3 的公开版本；系统不可直接一键运行，原文未披露推理硬件、耗时、显存与环境配置，也未提供附录证明或补充消融。复现时须严格复用从 0.1 到 1.0 的温度集合、LLaMA 3.1 8B-Instruct 解析与有效性过滤，否则候选池分布变化会直接改变汇合对比的公平性。

工程选型上，若任务为固定选项的音频问答且可承担多倍解码开销，优先考虑 Borda 或 SoftLSE 等加权累加而非只取最自信的一条，因为后者在各面板与分档中持续落后。采样预算取 8 已能获得大部分准确率与校准收益，增至 16 的边际回报有限，适合在延迟敏感场景下折中。高度一致样本上加权几乎无额外收益，可退化为多数投票以节省打分；高度分歧样本才是加权发挥作用的主战场。由于缺乏人工听测与开放场景验证，上线前仍需在自身数据上复测准确率与校准表现，不宜直接视为通用可靠性保证。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、步长、通道数与码率等信号规格，仅说明输入为音频与自然语言问题的配对，输出为短答案字符串，置信度在完整生成序列上按长度归一化计算。
- **训练与评测数据**：MMAR 数据集包含 1,000 个真实视频来源的音频问答三元组，采用固定选项的多项选择形式，覆盖一般声音、音乐、语音及其混合等 7 类内容，遵循信号、感知、语义与文化 4 级分类；评测使用准确率与期望校准误差，未披露额外训练划分，本文方法无需训练。
- **算力与训练耗时**：原文未披露 GPU 型号数量与训练耗时；本文为无训练的推理时策略，涉及 4 个大型音频语言模型的多次解码与对数概率打分，原文未给出推理硬件与耗时细节。
- **核心超参数与配置**：采样预算 N 取 3、4、8 与 16，解码温度固定集合从 0.1 到 1.0 区间均匀抽取并在全部问答对间复用；Borda 幂指数与 SoftLSE 温度在 0 到 4 区间以 0.25 步长网格搜索；期望校准误差使用 10 个分箱；部分模型解析使用 LLaMA 3.1 8B-Instruct。
- **推理速度与部署开销**：原文未报告延迟、前瞻窗口、RTF、吞吐或显存占用；代价体现为采样预算 N 倍解码与打分开销，增益在 N 超过 8 后趋于饱和，加权汇合平均带来数个百分点的准确率提升。
- **开源产物与协议状态**：作者在正文中给出项目代码链接，本次收到的资源检查显示该代码链接当前可用；模型权重依赖外部 Qwen 与 Audio Flamingo 系列发布，原文未说明是否提供一键运行脚本与环境配置。
- **附录与补充材料要点**：原文未设独立附录章节，补充细节散见于参考文献与方法描述；未披露证明、许可限制或系统性失效案例清单，仅在正文讨论 Qwen2-Audio 提升有限与高度一致区间增益可忽略等现象。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 6.1/10 | 技术严谨 6.5/10 | 实验充分 7.3/10 | 清晰度 6.6/10 | 影响力 6.2/10 | 开源 0.0/10 | 可复现 7.7/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-67`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Olvera_67.pdf)
- Track：P1-5

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：全序列长度归一化似然打分与Borda/LSE加权累加形式化完备，参数冻结离线执行可直接复用于不同主干。

- 核心优势：在四模型上对比五种规则与多数投票及随机挑选，完整呈现预算扩展、分歧分组增益与Best-of-N退化等负结果。

- 主要短板：仅在MMAR单一基准验证且需探索音频特异不确定性信号，缺乏跨基准泛化支撑结论外推受限。

- 主要短板：N超过8后增益趋平而推理量线性增长，高度一致下加权几乎无效且原文未量化真实部署成本。

- 主要短板：仓库虽HTTP200可达但未检出代码权重数据文件且许可证未声明，核心产物实际不可用。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
