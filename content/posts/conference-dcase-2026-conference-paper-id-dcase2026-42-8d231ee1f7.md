---
title: "Greedy Volume Maximization of Gradient Embeddings for Long-Tailed Frame-Level Bioacoustic Active Learning"
date: 2026-11-27
draft: false
description: "针对稀疏长尾帧级生物声学标注中整段打分易被大量自信无叫声帧淹没的问题，本文提出按预测残差加权的帧级 BADGE 伪梯度聚合与贪心对数体积最大化批量选择，在鬣狗 10 种叫声任务 10 次重复中以 56.7% ± 0.9% 的预算平均测试宏 mAP 与 47.4% ± 1.7% 的稀有类预算平均值领先包含 MFFT 在内的全部对照策略，并以 2,040 ± 126 个片段实现 100% 到达同流程全监督均值。"
tags: ["生物声学监测", "约束数值优化", "低资源", "音频事件检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "贪心体积最大化如何改善长尾帧级生物声学主动学习"
paper_digest_original_title: "Greedy Volume Maximization of Gradient Embeddings for Long-Tailed Frame-Level Bioacoustic Active Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-42"
paper_digest_workbench_source_sha256: "eade0155f9b68c66e32850ae9f644f940aa0e5a153911b252c0f5182e018c5e4"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Zhang_42.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频事件检测"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对稀疏长尾帧级生物声学标注中整段打分易被大量自信无叫声帧淹没的问题，本文提出按预测残差加权的帧级 BADGE 伪梯度聚合与贪心对数体积最大化批量选择，在鬣狗 10 种叫声任务 10 次重复中以 56.7% ± 0.9% 的预算平均测试宏 mAP 与 47.4% ± 1.7% 的稀有类预算平均值领先包含 MFFT 在内的全部对照策略，并以 2,040 ± 126 个片段实现 100% 到达同流程全监督均值。"
paper_digest_reader_sections: [{"heading":"稀疏长尾下帧级生物声学标注为何需要新的批量选择","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从 10 秒片段到 300 个查询的完整循环与两处改动","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"残差加权的帧级伪梯度如何让稀有不确定帧决定方向","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"贪心对数体积最大化如何在梯度空间中实现探索","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"鬣狗任务上的整体与稀有类增益以何种效率代价取得","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"单一鬣狗数据集边界下如何核对复现与选型","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Audio Research Group, Tampere University, Tampere, Finland","Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior"],"name":"Shiqi Zhang"},{"affiliations":["Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior","International Max Planck Research School for Quantitative Behavior, Ecology and Evolution","Department of Biology, University of Konstanz"],"name":"Marius Faiß"},{"affiliations":["Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior"],"name":"Ariana Strandburg-Peshkin"},{"affiliations":["Audio Research Group, Tampere University, Tampere, Finland"],"name":"Tuomas Virtanen"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"1dbafa39eca9fdadd69924347df3606811a43c2ca13878d70f28c22836d7c09d","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d231ee1f7ff18a8c95c1b2d/citation.bib"},"citation.json":{"sha256":"14e31d4095e6f329963c5b4fb79327f046d84a0083539dc05052e8bfaa068018","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d231ee1f7ff18a8c95c1b2d/citation.json"},"citation.ris":{"sha256":"318aeaf936d68be1603f82b90d1b27c6473975ce1eac6d7e31e02d06ad7ec07a","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d231ee1f7ff18a8c95c1b2d/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"08b734ac3b9e50f5e2137ed2749b91af5f2203dbf33f03b64dce2ef9f5c29b93","url":"/audio-research-portal/client/papers/2026-11-27/conference-8d231ee1f7ff18a8c95c1b2d/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-42"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Zhang_42.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "dae3753212611228af5bc7c8de01fec6d9d168f05d373f6c7dfa1decbddfc70e"
paper_digest_api_reader_plan_sha256: "5f5c4bbb087e2a1c8c16a4fde6251e21e3c44efe7f86ddde719ca2cf6def311b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c5da31dc0c087edf3229c5712bdb25a93329cf14d69b1a829196848cad11c886"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "eef7d62270c7a7f93fbf0fe51bb39d490e85179e0da10514e1e5c73f56b721f0"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "838e7a16d685265889aeb3429168531231b32c756d0c0f91c95f20e85506eb66"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.constrained-numerical-optimization","label":"约束数值优化"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_method: "约束数值优化"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 贪心体积最大化如何改善长尾帧级生物声学主动学习

> 英文题目：*Greedy Volume Maximization of Gradient Embeddings for Long-Tailed Frame-Level Bioacoustic Active Learning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-42`
> Track：P4-5



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Zhang_42.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-research-portal/papers/?concept=task.event-detection)
- **研究方法**：[约束数值优化](/audio-research-portal/papers/?concept=method.constrained-numerical-optimization)
- **研究条件**：[低资源](/audio-research-portal/papers/?concept=setting.low-resource)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.3/10 | 技术严谨 7.1/10 | 实验充分 7.4/10 | 清晰度 6.6/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Shiqi Zhang：Audio Research Group, Tampere University, Tampere, Finland；Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior
- Marius Faiß：Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior；International Max Planck Research School for Quantitative Behavior, Ecology and Evolution；Department of Biology, University of Konstanz
- Ariana Strandburg-Peshkin：Department for the Ecology of Animal Societies, Max Planck Institute of Animal Behavior
- Tuomas Virtanen：Audio Research Group, Tampere University, Tampere, Finland

## 📌 核心摘要

**问题与瓶颈：** 本文处理帧级生物声学呼叫类型分类，输入为 10 s 追踪项圈录音并切分为 20 个 0.5 s 帧，输出为每帧 10 类呼叫的多标签存在判定，目标是在每轮 300 个片段的紧预算下挑选最值得专家标注的片段。数据极端稀疏且长尾，不足 10% 的帧含有目标叫声，片段占比从 feeding 的 8.267% 下降到 growl 的 0.425%，多数片段为背景或易判定的无叫声帧。现有不确定性、委员会分歧、特征覆盖与批量多样性方法多假设每个候选可用单一向量表示，直接对帧特征做均匀平均会让大量无信息帧淹没少数不确定帧。结果是紧预算被反复花在大量背景上，少数类在低预算下持续欠覆盖，这是长尾主动学习已报道的共性困难。

**核心思路与方法架构：** 与最接近的原始 BADGE 相比，本文保留伪梯度嵌入构造，仅把 k-means++ 与 MCMC DPP 采样启发式替换为确定性贪心对数行列式体积最大化遍历，并把嵌入构造改为帧级残差加权聚合。沿一条 10 s 片段看，冻结的 animal2vec 编码给出每帧倒数第二层特征 \(h_{it}\) 与 10 维后验 \(p_{it}\)，以 0.5 为阈值得到伪标签 \(\hat{y}_{it}\)，再形成帧伪梯度 \((p_{it}-\hat{y}_{it}) \otimes h_{it}\) 并按 \(1/T\) 求和得到片段向量 \(\phi_{i}\)，其中 \(T\) 为 20，正则项 \(\lambda\) 取 \(10^{-6}\) 仅保证可逆与数值稳定。贪心规则按二次型度量候选在已选张成空间之外的分量，每步加入使正则化对数行列式 \(F(S)\) 增量最大的片段，全部选择在离线池式循环中完成，每轮选出 300 个片段送专家做帧级标注。训练侧仅更新 2 层 MLP 头而 animal2vec 保持冻结，因残差在决策边界附近大而在确信无叫声帧接近零，单个不确定稀有帧仍可决定片段方向，无须在不确定性与探索之间另设权重。

**关键实验与核心代价：** 在鬣狗帧级多标签任务的 10 次独立运行中，BADGE-Greedy-DPP 的预算平均测试 mAP 即 N-AULC 为 56.7% ± 0.9%，高于最强非 BADGE 基线 MFFT 的 55.5% ± 0.7%，终点 mAP 为 64.3% ± 0.6%，高于 MFFT 的 63.2% ± 0.6%。稀有类上优势更大，Rare-N-AULC 为 47.4% ± 1.7%，高于 MFFT 的 43.6% ± 2.2%，终点稀有类 mAP 为 58.6% ± 1.3%，高于 MFFT 的 55.4% ± 2.0%，稀有宏富集为 10.41 ± 0.26，对应选中含稀有类片段 496.8 ± 11.3 个。与同协议全监督参考相比，常见 7 类为 66.8% 对 66.9%，稀有 3 类为 58.6% 对 51.0%，全监督均值为 62.2% ± 1.5%。单侧非配对精确均值差置换检验经 Holm 校正后，对 MFFT 与两种原始 BADGE 遍历的 N-AULC 提升分别为 1.2、2.5 和 3.7 个点，校正 p 值为 \(1.60 \times 10^{-3}\)、\(4.87 \times 10^{-5}\) 和 \(3.79 \times 10^{-5}\)，Rare-N-AULC 提升分别为 3.8、3.7 和 6.5 个点。达到全监督均值所需预算为 2040 ± 126 个片段，对应全训练集的 3.94% ± 0.24%，低于 MFFT 的 2533 ± 339 个片段且 10 次运行全部达到，而查询总耗时为 141.96 s ± 9.77 s，略高于 BADGE k-means++ 的 125.30 s ± 40.12 s，远低于 BADGE MCMC DPP 的 768.99 s ± 17.86 s。本任务只用 mAP 类指标，未做人工主观听测。

**适用边界与深读导览：** 结论成立依赖于冻结 animal2vec 表示与 2 层 MLP 头、同一切分与早停协议以及离线池式每轮 300 个片段的设定，覆盖的是单物种项圈噪声下的稀疏长尾帧级标注场景。论文明确将更多数据集留待未来工作，未验证跨物种、跨生境、联合表示学习或流式部署下的失效模式，也未报告真实专家标注耗时与训练能耗。本文未提及音频试听页，无可对照的试听现象。欲深究伪梯度聚合与贪心增益推导可查下方方法概述和架构对应公式，消融与稀有类细分的完整对照可查实验结果两表与第 4 节分析。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 稀疏长尾下帧级生物声学标注为何需要新的批量选择

生物声学叫声类型分类依赖专家给出带起点与终点的强标注，而非仅给片段级标签，逐帧听辨成本很高。主动学习希望用尽量少的标注轮次训练出可用的帧级分类器，每轮从未标注集合中挑出少量 10 秒片段请专家标注，再放回已标注集合重新训练。在鬣狗项圈录音这类数据中，目标叫声极其稀疏且类型呈长尾分布，多数帧为无叫声背景，紧凑预算必须花在少数稀有而信息量大的片段上。本文使用的约 205 小时完整标注录音来自 19 头斑鬣狗的追踪项圈，混有明显的项圈与环境噪声，进一步放大了标注与建模难度。

任务输入输出可以明确为多标签帧级分类。每个 10 秒片段被切分为 20 帧，每帧长 0.5 秒，每帧可同时携带 10 种叫声类型中的任意子集。分类器在当前已标注集合上训练，对每帧输出 10 维后验向量与倒数第二层特征向量。查询规则对未标注集合中的片段排序，每轮取前 B 个片段，本轮 B 为 300 个，请专家做帧级标注后移入已标注集合。从 300 个种子片段起，经过 9 轮增至 3,000 个已标注片段，学习曲线记录测试集宏 mAP 随预算的变化。

已有主流路线通常按不确定性、委员会分歧、特征空间覆盖或显式批量多样性打分，例如熵、最远遍历、分歧与失配优先的最远遍历等。批量主动学习方法 BADGE 试图用梯度嵌入统一不确定性与多样性，为每个候选构造一个基于模型预测的梯度向量。这类方法默认每个查询候选可用一个向量表示，而帧级音频打破了这一粒度假设。学习器查询的是整个片段，但片段内多数帧为静音、非目标或已被自信预测，仅少数帧仍不确定。若直接对帧特征做均匀平均，大量无信息帧会淹没少数信息帧，使真正应驱动选择的帧级特征被稀释。

稀疏与长尾使问题更尖锐。原文报告不足 10% 的帧含有标注叫声，片段级与帧级流行度均呈强长尾，从最常见的取食到最稀有的 growl 、 snore 与 squitter ，片段占比从 8.267% 一路降至 0.425% 。在紧凑标注预算下，少数类长期覆盖不足，查询策略必须持续找到携带稀有内容的片段。原文还指出存在时间粒度错配，采集函数对整个片段打分，但片段内信息帧很少，均匀平均会洗掉它们，这正是后文残差加权与体积最大化要解决的两个环节。

### 从 10 秒片段到 300 个查询的完整循环与两处改动

#### 信号规格与贯穿样本张量流

全部方法共享同一信号规格与冻结边界，便于分离出选择规则的效果。每个查询候选为 10 秒片段，内含 20 帧，每帧 0.5 秒，标签空间为 10 种叫声类型的多标签。所有策略使用固定的 animal2vec 嵌入与 2 层 MLP 分类头，预测与监督保持在帧级，而采集阶段对每个片段只保留一个向量，以控制查询计算与候选嵌入存储。分类器以二值交叉熵损失与 Adam 训练，并以验证集宏 mAP 做模型选择与早停。原文未披露采样率、 animal2vec 输出维度与 MLP 隐层维度，复现时只能沿用相同流程而不补猜维度。

以一个 10 秒鬣狗片段贯穿一次选择循环，可以按序追踪张量流。第一步将 10 秒波形送入冻结的 animal2vec ，得到逐帧特征序列，每帧对应一个特征向量 \( h_{it} \) 。第二步经 2 层 MLP 头得到每帧 10 维后验 \( p_{it} \) ，取值在 0 到 1 之间。第三步以 0.5 为阈值得到伪标签 \( \hat{y}_{it} \) ，仅用于构造查询表示，不作为训练目标。第四步计算逐帧伪梯度 \( (p_{it} - \hat{y}_{it}) \otimes h_{it} \) ，再按 \( 1 / T \) 平均求和得到 \( G_{i} \) 并展平为 \( \phi_{i} \) ，此处 \( T \) 为 20 。第五步在梯度空间中贪心挑选 B 个片段，第六步请专家做帧级标注后扩充已标注集合并重新训练。

#### 两处增量与执行边界

与最近既有基线相比，改动集中在两处且分工明确。第一处是遍历规则，原始 BADGE 用 k-means++ 播种或有限扫描马尔可夫链蒙特卡罗从固定大小行列式点过程采样，两者都倾向多样且范数大的样本，但属于采样启发式，不给出批量质量的最坏情况下界。本文改用确定性贪心最大化正则化对数行列式，即梯度嵌入张成的体积，享有次模最大化的近似保证。第二处是帧级适配，不再用池化片段特征配片段级伪标签给整个片段一个残差，而是为每一帧保留独立残差，使聚合按信息量而非按帧数加权。

训练与推理边界同样清晰。表示学习被冻结，只有查询策略变化，每轮都用相同结构在当前已标注集合上重新训练，再对全部未标注片段计算上式嵌入并贪心选出 300 个。查询阶段累计耗时 QT 为 9 轮总和，用于衡量选择本身的计算代价，而预测与标注仍在帧级执行。这种片段级选择与帧级监督分离的设计，既保留了稀有帧的方向信息，又避免为每一帧单独查询付出不可行的标注成本。

### 残差加权的帧级伪梯度如何让稀有不确定帧决定方向

#### 伪标签与逐帧残差构造

伪标签的构造只依赖当前预测。对片段 \( i \) 第 \( t \) 帧，分类器给出后验 \( p_{it} \) 与倒数第二层特征 \( h_{it} \) ，以 0.5 为阈值逐元素二值化得到 \( \hat{y}_{it} \) 。原文称其为幻觉标签，仅用于搭建查询表示，不作为训练目标。将该伪标签代入逐帧伪二值交叉熵损失，并对末层分类权重求梯度，对 Sigmoid 多标签头可得外积形式 \( (p_{it} - \hat{y}_{it}) \otimes h_{it} \) 。其中残差记录预测与伪标签的差距，特征记录该不确定性在特征空间中的位置，两者外积构成该帧的梯度嵌入。

聚合方式决定了稀疏场景下的成败。片段表示为 \( G_{i} \) 等于 \( 1 / T \) 乘以 20 帧外积之和，再展平为 \( \phi_{i} \) 。残差幅度在决策边界附近最大，在自信预测时接近于 0 ，因此求和是按不确定性加权而非均匀平均。大量无叫声且被自信预测的帧残差接近于 0 ，几乎不贡献方向，而边界附近的帧主导 \( G_{i} \) 。系数 \( 1 / T \) 对每一帧同等缩放，仅使对数行列式目标保持数值稳定，不改变帧间相对权重。原文未披露 \( h_{it} \) 的具体维度与 \( \phi_{i} \) 展平后的长度，故只能讲清加权机制而不补猜形状。

#### 为何均匀平均会被洗掉

教学例子可以帮助理解，例子数值仅为示意而不来自原文。设一个 10 秒片段含 20 帧，其中 19 帧为模型已确信的无叫声帧，残差接近于 0 ，仅一帧为不确定的稀有叫声帧，残差幅度大。若做均匀特征平均， 19 帧的背景方向会淹没这一帧，而残差加权求和中 19 帧几乎不进入 \( G_{i} \) ，该片段的梯度方向仍由这一帧决定。原文强调，即使仅有一个不确定的稀有叫声帧，也足以设定整个片段的选择方向，这正是按信息量聚合而非按帧数聚合的含义。

这种表示直接驱动下游选择。采集阶段只在片段级嵌入 \( \phi_{i} \) 上操作，以控制候选嵌入存储与查询计算，而预测与专家监督始终保持在帧级。相比之下，基于池化片段特征与片段存在性伪标签的片段级梯度，只给整个片段分配一个残差，无法区分不确定性发生在哪些帧，对稀疏长尾查询更迟钝。本文只改遍历规则而不改该嵌入构造之外的训练流程，使对比能分离出遍历规则本身的效果。

### 贪心对数体积最大化如何在梯度空间中实现探索

#### 对数体积目标与增量几何

遍历目标是让已选批量的梯度嵌入张成尽可能大的体积。记已选集合为 \( S \) ，将其行向量堆叠为 \( \Phi_{S} \) ，目标为正则化对数行列式，忽略常数后即所选梯度嵌入张成的对数体积，也是行列式点过程所奖励的量。正则系数 \( \lambda \) 取 10 的负 6 次方的小脊项，以保证可逆与数值稳定。贪心每步加入使边际增益最大的候选，该增益经行列式引理化为对数形式的二次型，度量新候选在已有张成之外的分量大小。

几何直觉很直接。当候选梯度仍有较大分量落在已选梯度张成之外时，二次型取值大，对数体积增量也大，选择器更愿意纳入它以扩张张成，而非重复加强已被覆盖的方向。原文将这种行为称为在 BADGE 梯度空间中的探索。由于 BADGE 已通过伪梯度构造编码了不确定性，这里不需要像带独立不确定性分数的行列式点过程批量选择那样，再额外权衡不确定性与探索之间的系数。

#### 次模保证与确定性差异

关键理论性质是单调次模。原文指出目标函数单调且次模，并在空集处为 0 ，因此在固定批量大小下，确定性贪心批量的目标值至少达到该正则化对数体积代理目标最优值的 \( (1 - 1 / e) \) 分数，约为 63.2% 下界。该保证针对不确定性与多样性的代理目标，而非直接针对测试 mAP ，且当 \( \lambda \) 趋于 0 时信息量变弱。原始 BADGE 的 k-means++ 与有限扫描马尔可夫链蒙特卡罗采样启发式同样偏好大范数多样样本，但不提供此类最坏情况下界，这是本文遍历的核心差异。

每轮执行路径固定。先在当前已标注集合上训练相同结构的分类器，再对全部未标注片段计算上式嵌入，接着按边际增益贪心选出 B 个片段，本轮 B 为 300 个，最后请求其帧级标签并移入下一轮已标注集合。 9 轮共增至 3,000 个片段，查询耗时累计为 QT 。确定性规则避免了采样随机性带来的批量波动，也使 10 次重复实验中的最小最大值范围更能反映数据划分与种子集差异，而非选择器自身的采样噪声。

### 鬣狗任务上的整体与稀有类增益以何种效率代价取得

#### 评测协议与公平性前提

评测建立在极稀疏长尾的鬣狗帧级叫声任务上，数据来自约 205 小时完整标注的项圈录音，覆盖 19 头斑鬣狗的 10 种叫声类型，混有明显的项圈与环境噪声。片段按 10 秒无重叠切割，每段含 20 帧，每帧 0.5 秒，不足 10% 的帧含有标注叫声。所有方法按 70 比 15 比 15 分层划分为训练验证测试，固定 animal2vec 嵌入与 2 层 MLP 头，仅改变查询策略。每次运行从 300 个随机种子片段起，经 9 轮每轮新增 300 个，至 3,000 个，共做 10 次独立重复。

主要指标均为越高越好。 N-AULC 为预算平均的测试宏 mAP ，对 9 轮学习曲线按预算间隔加权，稀有类版本仅在 growl 、 snore 与 squitter 上计算，终点指标为 3,000 个片段时的总体与稀有类 mAP ，富集度为选择集与训练池片段流行度之比，全监督到达预算与到达比例对照同流程全监督均值， QT 为 9 轮查询耗时总和。显著性采用单侧非配对精确均值差置换检验并按每指标 7 个基线做 Holm 校正。阅读学习曲线时，先看横轴已标注片段数从 300 到 3,000 ，纵轴测试宏 mAP ，再看深蓝提议线、浅蓝 MFFT 线、黑色全监督虚线及色带为最小最大值范围而非置信区间。

[![原论文 Figure 1：Active-learning curves on the hyena frame-level call-type task.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f5d869b0eaa0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f5d869b0eaa0/figure-1.png)

*论文图 1：鬣狗帧级叫声任务主动学习曲线，横轴为已标注片段数，纵轴为测试宏 mAP ，含全监督参照虚线与最小最大值色带（原论文 Figure 1）。*

像素显示提议方法在 900 个片段后持续领跑，但并非全程最高。起点 300 个片段时各线集中在 0.2 附近且深蓝线偏低， 600 个片段时收敛至 0.4 左右， 900 个片段后深蓝线超过浅蓝 MFFT 与黄色分歧线并保持到 3,000 个片段。数值上提议方法 N-AULC 为 56.7% ± 0.9% ，终点 mAP 为 64.3% ± 0.6% ，分别领先最接近的 MFFT 约 1.2 个百分点与 1.1 个百分点，校正后 p 为 1.60 乘 10 的负 3 次方量级。随机选择全程垫底在 0.5 以下，最远遍历也明显偏低，说明不确定性与多样性缺一不可，且色带为最小最大值范围，早期重叠大而后期分离更稳。

#### 稀有类富集与效率权衡

富集图回答稀有增益是否均衡。阅读该柱状图时，先看纵轴为相对训练池流行度的片段级选择富集度，横轴为 8 种查询策略，蓝红绿分别对应 growl 、 snore 与 squitter ，黑色误差线为 10 次运行的标准差，灰色虚线在 1.0 处表示与流行度持平的选择。重点对比分歧、 MFFT 与深蓝提议方法在 3 个稀有类上的高矮分布，而非只看平均富集。

[![原论文 Figure 2：Final segment-level enrichment of the three rare call types relative to their train-pool…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f5d869b0eaa0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f5d869b0eaa0/figure-2.png)

*论文图 2：三类稀有叫声的片段级选择富集度柱状图，虚线在 1.0 处表示与训练池流行度持平（原论文 Figure 2）。*

像素显示分歧与 MFFT 严重偏向两侧而中间凹陷。分歧对 growl 与 squitter 分别达 14.00 倍与 9.97 倍，但对 snore 仅 1.81 倍， MFFT 对 growl 与 squitter 达 13.51 倍与 10.19 倍，但对 snore 仅 2.46 倍。提议方法更均衡，对 growl 、 snore 与 squitter 分别为 12.24 倍、 9.23 倍与 9.76 倍，平均富集达 10.41 ± 0.26 倍，终点稀有类 mAP 为 58.6% ± 1.3% ，稀有 N-AULC 为 47.4% ± 1.7% ，含稀有标签片段达 496.8 ± 11.3 个，校正后稀有增益 p 均在 10 的负 4 次方量级。

效率与全监督对照揭示代价。提议方法以 2,040 ± 126 个片段在 10 次运行中全部达到同流程全监督均值 62.2% ± 1.5% ，在 7 个常见类上持平 66.8% 对 66.9% ，在 3 个稀有类上反超 58.6% 对 51.0% ，而 MFFT 需 2,533 ± 339 个且仅 90% 到达。查询耗时提议为 141.96 ± 9.77 秒，略慢于 k-means++ 的 125.30 ± 40.12 秒，但远快于 MCMC 采样的 768.99 ± 17.86 秒。本文指标均为分类性能与富集统计，无人工听测，色带与误差线分别表示最小最大值范围与标准差而非置信区间，结论限于该单一鬣狗数据与冻结表征条件。

### 单一鬣狗数据集边界下如何核对复现与选型

#### 假设边界与未验证条件

结论成立的前提高度集中于单一任务。数据为 HyenaSET 初步版本中一个斑鬣狗群体的项圈录音，地域、群体与设备噪声条件单一，叫声类型固定为 10 种，流行度尾部由 growl 、 snore 与 squitter 构成。表示学习被冻结为 animal2vec 加 2 层 MLP 头，训练仅以二值交叉熵与验证集宏 mAP 早停，预算上限为 3,000 个片段，提议方法约用全训练集 3.94% ± 0.24% 即达到全监督均值， MFFT 需 4.89% ± 0.66% 。该配比下的增益是否外推到其他物种、传声器条件或端到端微调表征，原文未验证并明确留待未来工作。

部署相关的多项条件同样未覆盖。正则系数固定为 10 的负 6 次方，伪标签阈值固定为 0.5 ，每轮预算固定为 300 个，种子集固定为 300 个，原文未报告这些超参的消融。查询耗时 QT 仅为同机 9 轮总和，未披露处理器型号与显存占用，跨机对比只能看相对排序。主动标注的人力成本、流式分块时延与阈值漂移下的稳定性也不在评测范围内。

#### 复现核对与选型建议

复现需区分三件事，原文未披露代码、权重或数据的公开获取方式。核对时应按第二节实现逐帧伪梯度与贪心对数体积规则，按第三节沿用 70 比 15 比 15 分层划分、 300 个种子起点、 9 轮每轮 300 个与 10 次独立种子，并以验证集宏 mAP 做模型选择与早停。全监督参照须用相同划分、相同冻结表征、相同 MLP 头与相同测试指标单独训练，否则到达预算与到达比例不可比。由于硬件未披露， QT 复现只能在同一环境下重测相对快慢。

工程选型应按稀有均衡与计算预算取舍。若目标是兼顾总体与尾部且能接受中等查询耗时，贪心体积方法在该任务上最均衡，尤其 snore 类不塌陷。若查询耗时卡得很紧， k-means++ 遍历略快但稀有平均富集与终点稀有 mAP 明显更低。若已有委员会模型并只关心 growl 与 squitter ，分歧与 MFFT 富集很高但 snore 偏弱。随机选择与纯最远遍历在该稀疏长尾任务上全程落后，不应作为紧凑预算下的首选。试听层面原文未提供演示页，应用前仍需在自有数据上小预算试跑并检查稀有类召回是否出现类似的均衡改善。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：每个查询候选为 10 秒片段，内含 20 帧，每帧 0.5 秒，标签为 10 种叫声类型的多标签，预测与监督在帧级执行而选择在片段级执行，原文未披露采样率与特征维度细节
- **训练与评测数据**：约 205 小时鬣狗项圈录音的 HyenaSET 初步版本，覆盖 19 头斑鬣狗与 10 种叫声类型，按 70 比 15 比 15 分层划分为训练验证测试，从 300 个种子片段经 9 轮每轮新增 300 个至 3,000 个，共 10 次独立随机种子重复
- **算力与训练耗时**：原文未披露训练所用处理器型号数量与训练步数耗时，仅说明固定 animal2vec 表征与 2 层 MLP 头并以验证集宏 mAP 做模型选择与早停
- **核心超参数与配置**：二值交叉熵损失与 Adam 优化器，验证集宏 mAP 早停，伪标签阈值为 0.5 ，贪心正则系数为 10 的负 6 次方，每轮查询预算为 300 个片段
- **推理速度与部署开销**：9 轮查询阶段累计耗时提议方法为 141.96 ± 9.77 秒，同条件 k-means++ 为 125.30 ± 40.12 秒而 MCMC 采样为 768.99 ± 17.86 秒，原文未披露参数量显存与实时率
- **开源产物与协议状态**：原文未披露代码权重数据的公开链接与许可说明，复现需按第二节与第三节自行实现帧级伪梯度与贪心体积规则并沿用相同划分与早停流程
- **附录与补充材料要点**：原文未设独立附录，关键的单调次模性质与贪心近似保证在第二节交代，稀有类富集分布与全监督对照细节在第四节，显著性校正方法已在正文说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.3/10 | 技术严谨 7.1/10 | 实验充分 7.4/10 | 清晰度 6.6/10 | 影响力 5.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-42`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Zhang_42.pdf)
- Track：P4-5

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：10次独立运行下BADGE-Greedy-DPP以56.7%±0.9% N-AULC与47.4%±1.7%稀有类指标全面领先7种基线并经Holm校正检验显著。

- 核心优势：将片段压缩为帧级残差加权伪梯度聚合，使确信无叫声帧贡献接近零而单个不确定稀有帧可决定片段方向。

- 核心优势：同嵌入下贪心遍历对k-means++与MCMC DPP分别领先2.5与3.7个点且查询耗时远低于MCMC，构成直接遍历消融。

- 主要短板：仅在单鬣狗项圈噪声任务上评测并将更多数据集留待未来工作，未检验跨物种生境与联合表示学习。

- 主要短板：伪标签阈值0.5与正则项λ=10-6均固定而未做敏感性分析，且贪心最坏界在λ→0时信息量减弱。

- 主要短板：图2仅显示10次运行标准差误差条而未列具体数值，稀有类富集离散程度无法精确核对。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
