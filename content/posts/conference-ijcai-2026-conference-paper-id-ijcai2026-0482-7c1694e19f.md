---
title: "FedAMB: Adaptive Modality Balancing for Dominance-Robust Multimodal Federated Distillation"
date: 2026-11-28
draft: false
description: "论文针对多模态联邦知识蒸馏中容易模态主导本地优化并经聚合污染全局教师的问题，提出客户端选择性模态调节与服务端按分量模态蒸馏两阶段干预的 FedAMB 方法，在 CREMA-D 数据集、AVE 数据集与 UR-FUNNY 数据集上同时提升多模态准确率与缺失模态稳健性，代价是依赖共享代理数据集并额外交换类别原型统计。"
tags: ["知识蒸馏", "联邦学习", "多模态学习", "音视频理解"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "模态主导污染全局教师时联邦蒸馏如何实现自适应平衡"
paper_digest_original_title: "FedAMB: Adaptive Modality Balancing for Dominance-Robust Multimodal Federated Distillation"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0482"
paper_digest_workbench_source_sha256: "5822943f14d142ff754b2a6c93b2257b6166e5fd2dbd6844095ed3815c7e9879"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/482"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0482.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音视频理解"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对多模态联邦知识蒸馏中容易模态主导本地优化并经聚合污染全局教师的问题，提出客户端选择性模态调节与服务端按分量模态蒸馏两阶段干预的 FedAMB 方法，在 CREMA-D 数据集、AVE 数据集与 UR-FUNNY 数据集上同时提升多模态准确率与缺失模态稳健性，代价是依赖共享代理数据集并额外交换类别原型统计。"
paper_digest_reader_sections: [{"heading":"模态主导为何在联邦蒸馏中演变为全局教师污染","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"FedAMB 方法以四步循环组织本地调节与全局聚合","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"状态判断与双门调节如何只在失稳时补强弱模态","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"数据划分与单模态稳健性如何体现弱模态收益","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"域失配代理与收敛过程是否保持领先与稳定","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"两组件与双头设计各自带来多少增益","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"代理依赖与原型共享界定了何种适用边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea"],"name":"Seungjin Han"},{"affiliations":["Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea"],"name":"Juyeob Lee"},{"affiliations":["Department of Computer Science and Engineering, Korea University, Korea"],"name":"Sangmin Lee"},{"affiliations":["Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea","Department of Computer Science and Engineering, Jaume I University, Spain"],"name":"Eunil Park"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"30738f28b7181b3864f6e591e129ad16afbb0185fa10ad75d8581b5b2040d246","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c1694e19f9823c3f0b22858/citation.bib"},"citation.json":{"sha256":"2845bbc3f505ccb68bb6da6de8ad471ee7ef072291fee1a7cccb8b003bfaecc9","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c1694e19f9823c3f0b22858/citation.json"},"citation.ris":{"sha256":"ef4072fbc0c86bac6e7e0fa92ab9b18545b4ff67044c1c1b90ef842f89133755","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c1694e19f9823c3f0b22858/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5a8d1693edcd75546947c1f6766842424b7b083fe2e228cbec29e71d7dc21d47","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c1694e19f9823c3f0b22858/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0482"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/482"
paper_digest_conference_doi: "10.24963/ijcai.2026/482"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/482"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0482.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "99b797547a4b048f9f710666656985f20aa744654a123724e523486371c7a735"
paper_digest_api_reader_plan_sha256: "9a03781b590f9caa58a755da18ea8ecf0d8ad2d6e940791170e5f3b5f8fae32c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e879fa4d3e3284fc6aec69ffb2435a2b2116f927e600aaaba6fa219a9592103f"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a15d64e4233f07bee72feb96f1c3b4e545d7a64b0b236a6bcb65c922530ee1d4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "044266cd41c9bb33357133f2b2bc5627f792f0b6dd01557d35afe8d3ff91e3be"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e5d277cb9375aa15702eea420c2eb125baf2bbe8e19f180d924cc0f66432f405"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.federated","label":"联邦学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 模态主导污染全局教师时联邦蒸馏如何实现自适应平衡

> 英文题目：*FedAMB: Adaptive Modality Balancing for Dominance-Robust Multimodal Federated Distillation*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0482`
> DOI：`10.24963/ijcai.2026/482`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/482) · [官方 PDF](https://ijcai.org/proceedings/2026/0482.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[联邦学习](/audio-research-portal/papers/?concept=method.federated)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.9/10 | 清晰度 5.5/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Seungjin Han：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea
- Juyeob Lee：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea
- Sangmin Lee：Department of Computer Science and Engineering, Korea University, Korea
- Eunil Park：Department of Applied Artificial Intelligence, Sungkyunkwan University, Korea；Department of Computer Science and Engineering, Jaume I University, Spain

## 📌 核心摘要

**问题与瓶颈：** 联邦知识蒸馏（federated knowledge distillation，Fed-KD）以共享代理数据集上的预测对数几率（logits）为通信载体，可降低大模型参数传输开销并兼容客户端异构架构。在多模态联邦学习中，单一易学模态主导优化的现象称为模态主导，会压制弱模态互补信号，导致融合模型在缺失模态推理时失效。在非独立同分布联邦环境下，不同客户端形成不同模态偏置，这些偏置经服务端聚合放大，污染全局教师并回传给各客户端，形成偏差循环。现有干预多假设静态失衡并施加统一加权或随机模态丢弃，难以适应跨客户端与跨轮次的状态依赖变化，还可能破坏原本稳定的融合。

**核心思路与方法架构：** 与直接聚合代理对数几率的 Fed-KD 基线相比，FedAMB 保留代理对数几率聚合主链路，新增客户端选择性调控与服务端逐分量蒸馏两处状态感知干预。沿一条客户端私有标注样本追踪，模态编码器抽取特征并按类别计算局部原型，服务端以样本量加权聚合成全局原型后下发，客户端用余弦相似度得到原型预测准确率并以阈值 \(\gamma = 1.5\) 判定主导状态与弱模态。当判定失衡且融合准确率低于主导模态准确率超过阈值 \(\tau\) 时，方法屏蔽主导特征构造去主导融合对数几率，并与弱模态单分支头输出相加形成弱模态训练对数几率，仅在该状态下替代标准多模态对数几率计算交叉熵损失。在知识蒸馏阶段，客户端上传代理样本的多模态对数几率，服务端平均为全局教师，再以固定温度 \(T_{kd}\) 蒸馏回每个客户端的多模态分支与弱模态分支，全程为离线多轮联邦更新，\(\tau\) 与 \(T_{kd}\) 取值未说明。

**关键实验与核心代价：** 在 CREMA-D、AVE 和 UR-FUNNY 的独立同分布与非独立同分布划分下，论文以多模态分类准确率为指标报告 3 个随机种子的均值与标准差，FedAMB 在同表同列均高于最强基线。在 CREMA-D 上，独立同分布准确率从最强基线 DaFKD 的 44.82% 提高到 50.11%，非独立同分布从 41.09% 提高到 42.73%；在 AVE 上，独立同分布从随机模态丢弃的 36.44% 提高到 36.74%，非独立同分布从 FedMD 的 35.00% 提高到 35.15%；在 UR-FUNNY 上，独立同分布从 58.14% 提高到 58.27%，非独立同分布从 54.62% 提高到 55.18%。单模态分析显示 CREMA-D 视觉分支从无干预基线的 15.03% 提高到 34.12%，相对最强单模态基线 RMD 的 22.65% 提高 11.47 个百分点，音频分支保持 40.78% 居首。域失配代理实验改用 CMU-MOSEI 仍保持各列居首，但绝对值较同域下降。消融显示完整模型较无干预基线在 CREMA-D 多模态提高 9.03 个百分点，而单独干预在 AVE 多模态出现回落，表明组合必要性。论文仅用准确率评测，未实测通信量、吞吐或时延，代价以额外原型与对数几率传输为主。

**适用边界与深读导览：** 结论成立依赖域内无标注代理数据集可用、客户端具备双头结构与原型统计上传条件，以及分类准确率与零向量替代的单模态评测方式，未覆盖无代理蒸馏、训练期缺失模态与端侧部署场景。作者在讨论中承认代理获取困难、域失配与类原型计数可能泄露类别分布，并建议结合安全聚合与扰动机制。欲深究状态判定与双重门控公式可查阅方法 3.3 节至 3.5 节，欲核对多模态与单模态权衡可查阅实验 4.1 节至 4.4 节及消融表。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 模态主导为何在联邦蒸馏中演变为全局教师污染

联邦学习将全局模型分发到多个客户端，各客户端利用私有数据在本地训练，仅上传模型更新或梯度，由服务端聚合后再分发，从而在不共享原始数据的前提下协作建模。这一范式在医疗与金融等隐私敏感场景受到关注，但直接交换大模型参数会带来显著通信开销，也要求各客户端结构同构，并存在模型反演等安全顾虑。联邦知识蒸馏转而交换在共享代理数据集上的压缩知识，例如中间特征或输出对数几率，以降低通信并容纳异构结构，代理集为各方提供相同输入以对齐预测。

当数据本身包含音频、视觉与文本等多种模态时，多模态联邦学习希望融合互补信息以超越单模态，但优化层面出现模态主导现象，即容易学习的强模态主导梯度与融合决策，抑制弱模态的表征学习。客户端表面上多模态准确率尚可，弱模态分支却欠训练，一旦部署时因传感器故障或资源限制缺失某一模态，性能迅速退化。在非独立同分布下，不同客户端的类别分布与主导方向各不相同，各自偏置的本地预测经服务端聚合后相互叠加，使全局教师继承融合偏置，再蒸馏回各客户端时进一步压制弱模态，形成污染循环。

为建立直观印象，可先看本次收到的第一张原图，它左侧以 3 个客户端为例展示设备、模型结构与模态可用性三层异构，右侧以音频、视觉与多模态三色柱状对比主导与平衡两种状态。请先沿左侧自上而下观察服务端连接、网络拓扑差异与底部缺失标记，再对比右侧两组柱状的整体高低与组内排序，思考为何平衡时融合能超越单模态。

[![原论文 Figure 1：Illustrations of Federated learning and key challenges.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-1.png)

*论文图 1：左侧三客户端设备、模型与模态缺失异构示意，右侧主导与平衡下音频、视觉与多模态准确率对比（原论文 Figure 1）。*

该图左侧自上而下分为 3 层，顶层为云状服务端向下连接 3 个客户端，中层以不同网络拓扑表示模型结构异构，底层以话筒与图像图标表示模态配置，其中第二个客户端缺失视觉，第三个客户端缺失音频，直观呈现模态可用性不一致。右侧柱状按绿色音频、浅蓝视觉与浅红多模态分组，在主导组三柱均明显低于平衡组，且平衡组中多模态柱最高，说明只有抑制主导、保持双模态均衡时融合才能超越任一单模态，主导状态整体性能受损。

### FedAMB 方法以四步循环组织本地调节与全局聚合

与既有联邦知识蒸馏基线相比，FedAMB 方法保留以代理对数几率作为主要通信信号的做法，不交换完整参数，同时额外交换轻量类别原型统计以识别主导。改动集中在两处，客户端以选择性模态调节替代固定加权或随机丢弃，仅在判定为失稳的主导状态才屏蔽强模态并补强弱模态，服务端以按分量模态蒸馏替代整体回灌，将同一全局教师分别送入融合分支与弱分支，直接强化单模态表征。目标是在可用模态下保持多模态准确率，在缺失模态时仍维持单模态可用性。

以 CREMA-D 数据集中一个同时包含音频与视觉的情绪样本为例，端到端逻辑流可按序追踪。第一步，音频与视觉分别经各自模态编码器得到特征向量，融合头综合两路特征输出融合对数几率，弱模态辅助头输出单模态对数几率。第二步，客户端在代理集上做推理得到代理多模态对数几率并上传。第三步，服务端对参与客户端的代理对数几率取平均形成全局教师并下发。第四步，客户端以该教师同时约束本地融合分支与弱分支。原文未披露采样率、帧长、特征维度与网络层数，因此此处仅描述分支拆分与汇合关系，不虚构张量形状。

为看清上述四步如何在客户端与服务端之间往返，可看本次收到的第二张原图，它以顶部服务端聚合与底部两客户端为主体，右侧另有三块放大面板分别对应主导训练、平衡训练与推理。请先沿底部本地训练向上看到代理推理，再看到顶部聚合与下发，最后对照右侧面板理解融合门与双头在不同状态下的接线差异。

[![原论文 Figure 2：Overview of the FedAMB architecture. The numbered steps indicate the communication rounds.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-2.png)

*论文图 2：FedAMB 方法四步循环总览：本地调节训练、代理推理、服务端聚合与按分量蒸馏的流向及右侧放大面板（原论文 Figure 2）。*

该图顶部为服务端聚合框，内含多色方块经编号 3 的箭头汇成全局教师，右侧配有代理数据集图标并向下分发。底部左右分别为客户端 1 与客户端 k，均包含本地训练、代理推理与知识蒸馏三块，箭头按编号 1 至 4 构成闭环。右侧上方面板显示主导时强模态特征被屏蔽并经融合门与辅助头合成弱分支训练信号，中间面板显示平衡时双编码器直通融合头，下方面板复现推理时两条路径，完整呈现状态相关干预与分支蒸馏的分工。

### 状态判断与双门调节如何只在失稳时补强弱模态

主导识别依赖全局原型而非本地单轮损失。每个客户端对训练集同类样本的模态特征求均值得到局部原型，连同类别计数上传，服务端按计数加权平均得到全局原型并广播。客户端在采样小批量有标签数据上，用余弦相似度将特征与各类别全局原型比较，取最相似类别为原型预测，统计各模态原型精度。记精度最高者为强模态、最低者为弱模态，当强弱精度比超过阈值 \(γ\) 时置状态变量为 1 ，否则为 0 。原文设定 \(γ = 1.5\) ，该比值随客户端与轮次变化，体现状态相关而非静态假设。

本地训练对数几率的选择取决于状态变量。状态为 \(0\) 时直接使用融合头输出并计算交叉熵，保持稳定融合不受干扰。状态为 \(1\) 时将强模态特征置零，仅保留弱模态与其他模态输入融合头，得到去主导融合信号，同时以辅助单模态头输出弱模态对数几率。为避免在主导状态内过度干预，引入第二道融合不稳定门，比较训练集上多模态精度与强模态精度，仅当强模态精度除以多模态精度超过阈值 \(τ\) 时才将去主导融合信号叠加到弱分支训练信号中，否则只用辅助头信号。该设计使干预强度随融合可靠性自适应变化。

服务端在每轮将参与客户端上传的代理多模态对数几率取平均，得到全局教师。客户端在固定温度 \(Tkd\) 下以散度同时约束两路输出，一路是本地融合对数几率与全局教师的接近程度，另一路是本地弱分支对数几率与同一教师的接近程度，两项之和构成代理损失。论文强调教师提供类别结构与无偏边界，而非要求完整复现多模态信息，因此弱分支向该结构正则化即可稳定学习，无需假设师生容量对齐。该分支设计直接强化单模态表征，防止融合偏置经全局教师回灌时压制弱模态。

每轮通信包含原型上传聚合、本地调节训练、代理对数几率上传、教师构造分发与按分量蒸馏 5 个逻辑环节，原文算法概括为 4 个编号步骤，其中原型环节记为第 0 步。联邦配置为 10 个客户端、100 轮通信、每轮随机抽取 4 个客户端参与，代理集占各数据集的 20% 规模。推理时若某一模态缺失，以零向量替代该路特征后再经融合头或单模态头输出。原文未披露编码器层数、特征维度、优化器、学习率与批大小，冻结与更新边界仅能确认原型与对数几率参与通信，本地参数在两类损失下更新。

### 数据划分与单模态稳健性如何体现弱模态收益

#### 划分与同域领先

评测覆盖 CREMA-D 数据集、AVE 数据集与 UR-FUNNY 数据集，前两者为音频与视觉双模态，后者为音频、视觉与文本 3 模态，以检验向更多模态扩展的能力。客户端异构以狄利克雷划分模拟，非独立同分布取 \(α = 1.0\) ，联邦配置为 10 个客户端、100 轮通信、每轮随机抽取 4 个客户端，同域实验取各数据集的 20% 规模作无标注代理集、余下 80% 作私有集，结果为 3 个随机种子下均值与标准差，指标方向为越高越好。原文完整 Table 1（本精简表未列出）报告 FedAMB 方法在三数据集独立同分布与非独立同分布下均领先最强基线，CREMA-D 上领先 5.29 个百分点与 1.64 个百分点，AVE 上领先 0.30 个百分点与 0.15 个百分点，UR-FUNNY 上领先 0.13 个百分点与 0.56 个百分点。

#### 单模态对照口径

下表展示在 CREMA-D 数据集上以零向量替代另一模态特征后的单模态准确率，分为独立同分布与非独立同分布两组，每组列出音频列与视觉列，行覆盖 6 种基线与本文方法。该设计直接检验弱模态是否真正补强，便于核对视觉收益是否以牺牲音频为代价，表中数值方向均为越高越好并附标准差以供比较。

| Setting | Method | Audio | Visual |
| --- | --- | --- | --- |
|  | FedMD | 40.07 ± 0.13 | 15.03 ± 0.03 |
|  | FedProto | 35.46 ± 0.08 | 16.53 ± 0.01 |
|  | FedIoT | 32.13 ± 0.16 | 16.69 ± 0.05 |
| IID | RMD | 38.56 ± 0.10 | 22.65 ± 0.08 |
|  | FedPMR | 37.61 ± 0.18 | 20.20 ± 0.07 |
|  | DaFKD | 40.29 ± 0.11 | 13.95 ± 0.02 |
|  | FedAMB (Ours) | 40.78 ± 0.06 | 34.12 ± 0.05 |
|  | FedMD | 38.15 ± 0.15 | 15.17 ± 0.05 |
|  | FedProto | 34.73 ± 0.12 | 16.13 ± 0.08 |
|  | FedIoT | 32.97 ± 0.16 | 15.59 ± 0.04 |
| Non-IID | RMD | 33.55 ± 0.13 | 25.08 ± 0.12 |
|  | FedPMR | 37.11 ± 0.14 | 18.73 ± 0.11 |
|  | DaFKD | 38.90 ± 0.15 | 15.85 ± 0.04 |
|  | FedAMB (Ours) | 39.52 ± 0.13 | 27.33 ± 0.15 |

在该展示表的 4 列中，本文方法均居首，独立同分布下音频达 40.78% 的水平，视觉达 34.12% 的水平，视觉较次优的随机模态丢弃方法 22.65% 明显更高，与原文报告的 11.47 个百分点以上一致，且音频未下降，次优为领域感知蒸馏方法的 40.29% 。非独立同分布下音频达 39.52% 的水平，视觉达 27.33% 的水平，音频次优为领域感知蒸馏方法的 38.90% ，视觉次优为随机模态丢弃方法的 25.08% ，仍保持领先。该表报告均值与标准差，标准差多在 0.15% 以内，波动较小，但未报告置信区间与失效案例，AVE 数据集与 UR-FUNNY 数据集的单模态表现未在此表评测。

#### 分布异构示意

为理解独立同分布与非独立同分布划分的差异，可看本次收到的第三张原图，它左右并列展示两类划分下各客户端类别分布，横轴为类别，纵轴为客户端，圆点越大表示该客户端该类别样本越多。请先看左侧各行圆点是否大小相近，再看右侧同行中是否有圆点明显放大或缩小，以体会狄利克雷划分带来的类别偏斜与客户端间差异。

[![原论文 Figure 3：Illustrations of the class distribution of each client in (a) IID and (b) Non-IID settings.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-3.png)

*论文图 3：独立同分布与非独立同分布下各客户端类别分布对比，圆点大小表示样本量（原论文 Figure 3）。*

该图左为独立同分布，10 行客户端在各类别上圆点大小相近，分布均匀，右为非独立同分布，同行中部分圆点明显放大、部分缩小甚至缺失，呈现类别偏斜与客户端间差异。横轴为类别，纵轴为客户端，圆点越大表示该客户端该类别样本越多。该异构划分是后文非独立同分布评测公平性的前提，右图的不均匀性解释了为何不同客户端易形成不同主导方向，从而需要状态相关的自适应调节而非固定干预。

### 域失配代理与收敛过程是否保持领先与稳定

#### 失配代理表现

为检验代理域失配时的实用性，下表展示以 CMU-MOSEI 数据集作统一外部代理集时，在 CREMA-D 数据集与 AVE 数据集上独立同分布与非独立同分布下的准确率，列按 CREMA-D 独立同分布、CREMA-D 非独立同分布、AVE 独立同分布、AVE 非独立同分布排列。该表覆盖 6 种基线与本文方法，方向均为越高越好且未报告标准差，可对照同域结果体会域偏移带来的绝对值下降。

| Method | IID | CREMA-D Non-IID | IID | AVE Non-IID |
| --- | --- | --- | --- | --- |
| FedMD | 36.49 | 34.24 | 32.67 | 31.12 |
| FedProto | 36.85 | 33.76 | 29.03 | 25.46 |
| FedIoT | 33.17 | 28.49 | 26.84 | 26.79 |
| RMD | 37.84 | 37.11 | 33.28 | 28.31 |
| FedPMR | 35.33 | 33.73 | 18.12 | 16.80 |
| DaFKD | 42.98 | 38.24 | 31.65 | 29.49 |
| FedAMB (Ours) | 47.72 | 38.95 | 34.21 | 32.09 |

在该展示表的 4 列中，FedAMB 方法均居首，CREMA-D 独立同分布达 47.72% 的水平，超过次优的领域感知蒸馏方法 42.98% ，CREMA-D 非独立同分布达 38.95% 的水平，AVE 独立同分布达 34.21% 的水平，AVE 非独立同分布达 32.09% 的水平，超过同列 FedMD 方法的 31.12% ，纠正跨列误读后失配下仍居首的判断成立。该表未报告标准差，无法判断波动范围，且绝对值低于原文完整 Table 1（本精简表未列出）同域代理时的报告水平，体现域偏移代价。缺失模态与 3 模态组合未在此表评测，分类准确率不涉及人工听测，未报告置信区间。

#### 收敛稳定性

为观察训练稳定性与收敛速度，可看本次收到的第四张原图，它并列展示三数据集在非独立同分布下平均测试准确率随通信轮变化的曲线，横轴均为 0 至 100 轮，纵轴均为准确率。请先看顶部图例中 7 条方法的颜色与标记，再对比红色本文曲线在不同轮次的位置，重点关注早期上升速度与后期是否震荡发散。

[![原论文 Figure 4：Average test accuracy comparison of FedMD, FedProto, FedIoT, RMD, FedPMR, DaFKD, and FedAMB on…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/1f3558f2448e/figure-4.png)

*论文图 4：非独立同分布下三数据集上各方法平均测试准确率随通信轮变化的收敛曲线（原论文 Figure 4）。*

该图含 3 个子图，横轴均为轮次 0 至 100 ，纵轴均为准确率，单位为 % 。左侧 CREMA-D 子图中红色本文曲线自约 20 轮后持续居首并收敛至约 42% 的水平，中部 AVE 子图中红色曲线同样居首并收敛至约 35% 的水平，绿色原型重平衡曲线明显偏低。右侧 UR-FUNNY 子图中红色曲线早期上升更快，最终与紫色等曲线接近于 55% 附近。各子图均未出现震荡发散，表明状态相关损失仍保持稳定，但 AVE 上整体绝对值偏低，提示该数据集难度较大。

### 两组件与双头设计各自带来多少增益

消融围绕选择性模态调节与按分量模态蒸馏的组合展开，基线为两者均关闭的模型，另设仅开其一与两者全开的对照，并在三数据集上比较是否使用双头。原文完整 Table 4（本精简表未列出）报告 CREMA-D 基线多模态与视觉分别为 41.08% 与 15.03% 的水平，AVE 基线分别为 36.11% 与 10.33% 的水平，全开后 CREMA-D 提升 9.03 个百分点与 19.09 个百分点，AVE 多模态提升 0.63 个百分点，表明调节稳定本地优化、蒸馏巩固全局转移，两者互补。

下表展示双头设计消融，在 CREMA-D 数据集、AVE 数据集与 UR-FUNNY 数据集上对比不使用双头与使用双头时的多模态准确率，以检验模态专属监督是否有助于稳定融合。该对比固定其他组件不变，仅切换是否保留辅助单模态头，方向为越高越好，可结合前文两组件消融体会分支监督的叠加效果。表中仅含两行，分别对应关闭与开启双头，三列分别对应三数据集，便于直接读出增益大小。

| Data | CREMA-D | AVE | UR-FUNNY |
| --- | --- | --- | --- |
| w/o Dual-Head | 50.02 | 32.29 | 56.47 |
| w/ Dual-Head | 50.10 | 36.74 | 58.27 |

在该展示表的 3 列中，使用双头均高于不使用双头，CREMA-D 为 50.10% 对 50.02% 的水平，AVE 为 36.74% 对 32.29% 的水平，UR-FUNNY 为 58.27% 对 56.47% 的水平，其中 AVE 与 UR-FUNNY 增益较明显，CREMA-D 增益较小。该表未报告标准差与统计显著性，且未单独评估双头在单模态下的表现，单开单模态头与融合门各自贡献的更细消融原文未披露。

据原文完整 Table 4（本精简表未列出），单独开启选择性模态调节时多模态效果在不同数据集间存在波动，AVE 上甚至从 36.11% 降至 35.33% 的水平，说明无全局蒸馏配合时本地调节难以独立保证融合收益。按分量蒸馏单独使用时提升亦有限，只有两者联合才放大弱模态收益。原文未披露不同阈值 \(γ\) 与 \(τ\) 的敏感性、不同代理比例与客户端抽样率下的表现，也未评测文本模态缺失时的 3 模态稳健性，这些缺失使归因仍不完整。

### 代理依赖与原型共享界定了何种适用边界

方法成立依赖若干前提，其一为存在可共享的代理数据集，同域时取各数据集的 20% 规模，失配时以外部数据集替代，若完全无代理则蒸馏无载体，论文将代理无关替代列为未来工作。其二为类别原型统计可交换，诚实但好奇服务端可据此推测客户端类别分布，论文建议以安全聚合、分箱裁剪与差分隐私扰动缓解，但未定量评估隐私效用权衡。其三为以原型精度比判断主导，要求采样小批量有标签且类别覆盖充分，极端类别缺失时估计可能不稳。

实验在 10 个客户端、100 轮通信、每轮抽取 4 个客户端、狄利克雷 \(α = 1.0\) 的受控划分下完成，未验证更大规模客户端、更高异构强度、跨设备算力差异与异步通信下的表现。模态缺失评测以零向量替代实现，未覆盖传感器噪声、时间未对齐与采样率不一致等真实退化。3 模态仅在 UR-FUNNY 数据集上验证，文本缺失与音频缺失的组合稳健性未单独报告，通信开销与计算耗时亦未量化。

复现需区分三件事，代码是否开源、权重是否提供下载、系统是否可直接运行，本次核查均未发现经验证可用的作者资源，原文亦未给出链接与许可，不可视为已公开。数据方面 CREMA-D 数据集、AVE 数据集、UR-FUNNY 数据集与 CMU-MOSEI 数据集均为公开基准，但具体划分、代理抽样种子与预处理细节原文未完全披露。超参方面仅确认 \(γ = 1.5\) ，阈值 \(τ\) 与温度等具体数值、编码器结构与优化配置原文未披露，按现有描述难以逐位复刻。

若部署场景存在稳定代理集并允许交换轻量统计，且弱模态在缺失时必须可用，FedAMB 方法的状态相关干预比固定加权或随机丢弃更稳妥，尤其在视觉等弱模态欠训练明显时优先考虑。若无代理集或不允许共享任何类别计数，则需另寻代理无关方案。若 AVE 这类本身提升有限的数据集占主导，需权衡额外复杂度是否值得，建议先以单模态基线与随机丢弃基线对照，再决定是否引入双门与分支蒸馏。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧率、帧长、步长、码率、通道数与特征维度，仅明确模态组成为音频与视觉或音频、视觉与文本，缺失模态以零向量替代
- **训练与评测数据**：训练与评测使用 CREMA-D 数据集、AVE 数据集与 UR-FUNNY 数据集，私有数据按类别经狄利克雷划分模拟独立同分布与非独立同分布，取值为 1.0 ，每数据集取 20% 规模作同域无标注代理集、余下 80% 作私有集，另以 CMU-MOSEI 数据集作域失配代理集对照，10 个客户端、100 轮通信、每轮随机抽取 4 个客户端，3 个随机种子取均值与标准差
- **算力与训练耗时**：原文未披露 GPU 与 TPU 型号数量、训练步数与耗时，仅披露联邦轮次与抽样规模
- **核心超参数与配置**：主导阈值取 1.5 ，融合不稳定阈值与蒸馏温度具体数值原文未披露，编码器、融合头与辅助单模态头结构、优化器、学习率与批大小原文未披露
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐、显存或参数量，仅说明交换对数几率与轻量类别原型以降低通信，缺失模态推理以零向量替代缺失特征
- **开源产物与协议状态**：本次核查未发现经验证可用的作者代码、权重、数据或演示链接，代码是否开源、权重是否提供下载、系统是否可直接运行三件事原文均未确认，不可视为已公开
- **附录与补充材料要点**：讨论部分说明代理数据集依赖与域失配风险，以及类别原型与计数在诚实但好奇服务端假设下可能泄露类别分布，提出以安全聚合、分箱裁剪与差分隐私扰动缓解，代理无关蒸馏与隐私效用权衡列为未来工作

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.5/10 | 实验充分 6.9/10 | 清晰度 5.5/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 4.2/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0482`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/482) · [官方 PDF](https://ijcai.org/proceedings/2026/0482.pdf)
- DOI：`10.24963/ijcai.2026/482`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：FedAMB在CREMA-D、AVE、UR-FUNNY共6列IID与Non-IID条件下均超越6个代表性基线并报告3个种子均值标准差。

- 核心优势：基于全局原型的双重门控状态变量与逐分量蒸馏形成可验证的阶段式干预闭环且公式链条自洽。

- 核心优势：域失配CMU-MOSEI代理下仍保持各列领先，且单模态与双头消融验证了弱模态增益与组合必要性。

- 主要短板：消融表第三行与第七行字面仍标SMR✓CMD×与正文仅CMD含义矛盾且原文未解释，构成表文标记出入。

- 主要短板：编码器与融合头结构、优化器学习率、τ与Tkd取值及硬件时长均未说明，复现信息缺失较多。

- 主要短板：AVE完整增益仅0.63个百分点且单部件出现多模态回落，覆盖仅单点α=1.0非独立同分布，增益具数据集依赖性。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
