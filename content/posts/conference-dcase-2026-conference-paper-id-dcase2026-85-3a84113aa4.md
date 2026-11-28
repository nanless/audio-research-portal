---
title: "PB-MFS: Multi-Funnel Selection with Pareto-Balanced Uncertainty and Diversity for Bioacoustic Active Learning"
date: 2026-11-27
draft: false
description: "针对多标签生物声学分类中批量主动学习难以兼顾信息量与互补性的问题， PB-MFS 以多漏斗投票筛选幸存集合再做帕累托权衡组批，在 4 个子集上取得 0.510 的平均 AULC 并以 0.050 的绝对优势超过最强基线，代价是高于随机与间隔采样的计算耗时与标注代价。"
tags: ["生物声学监测", "聚类与类别匹配", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "帕累托平衡的多漏斗选择如何降低生物声学标注成本"
paper_digest_original_title: "PB-MFS: Multi-Funnel Selection with Pareto-Balanced Uncertainty and Diversity for Bioacoustic Active Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-85"
paper_digest_workbench_source_sha256: "fc53573eab3e82b51893f8546fbdafab55950c20004842919e67da57323eb99a"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_85.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多标签生物声学分类中批量主动学习难以兼顾信息量与互补性的问题， PB-MFS 以多漏斗投票筛选幸存集合再做帕累托权衡组批，在 4 个子集上取得 0.510 的平均 AULC 并以 0.050 的绝对优势超过最强基线，代价是高于随机与间隔采样的计算耗时与标注代价。"
paper_digest_reader_sections: [{"heading":"多标签生物声学为何难以用单一标准挑选标注样本","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"PB-MFS 如何把筛选与组批解耦为三个阶段","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"五种过滤分数与帕累托分数如何分工协作","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"有限预算下精度提升与时间标注代价的实测对比","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"哪些组件与超参数真正决定了增益","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现前提与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Southwestern University of Finance and Economics, China","MiLM Plus, Xiaomi Inc., China"],"name":"Haoyu Wang"},{"affiliations":["Electronic Information School, Wuhan University, China"],"name":"Han Dou"},{"affiliations":["Electronic Information School, Wuhan University, China"],"name":"Hui Chen"},{"affiliations":["Southwestern University of Finance and Economics, China"],"name":"Yushan Du"},{"affiliations":["Electronic Information School, Wuhan University, China"],"name":"Liushi Tu"},{"affiliations":["Southwestern University of Finance and Economics, China"],"name":"Ningning Pan"},{"affiliations":["Electronic Information School, Wuhan University, China"],"name":"Hao Zhang"},{"affiliations":["Massachusetts Institute of Technology, USA"],"name":"Jingyao Wu"},{"affiliations":["MiLM Plus, Xiaomi Inc., China"],"name":"Gang Li"},{"affiliations":["Electronic Information School, Wuhan University, China"],"name":"Gongping Huang"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9c009701f3cf9b6e60d6a4d2cff824a949346f9650bc02facb472a90913e610e","url":"/audio-research-portal/client/papers/2026-11-27/conference-3a84113aa47bb270a16ce8e6/citation.bib"},"citation.json":{"sha256":"7d8f49737ec4eb1989922932f484504b7aed79e1f0a4afb69e683206da48ec2a","url":"/audio-research-portal/client/papers/2026-11-27/conference-3a84113aa47bb270a16ce8e6/citation.json"},"citation.ris":{"sha256":"dcf64724ce5fd224ea06b555aa391e5d5d4c51d6b85aa3a1bb4c8f5072c439a6","url":"/audio-research-portal/client/papers/2026-11-27/conference-3a84113aa47bb270a16ce8e6/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8cf54176aa357124f00ebfa1464eff78094c77abafaff1123769e16a763414d1","url":"/audio-research-portal/client/papers/2026-11-27/conference-3a84113aa47bb270a16ce8e6/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-85"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_85.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "22254c219272829565ddeab9de98afc274c9f83e4bcd2552930646cbb03da4dd"
paper_digest_api_reader_plan_sha256: "4c77fb93a13181a02c4d3806d5e9fc4d041dded42978e51255bac858e20620ad"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6611f19ecd48976d8384f090c8b3859f437e0fe4b7fa7e971a0bc5870415af2b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8ff2a8795e51d8cb5529a77163eccf23cbea6782c1a81a1adf8624bca664af01"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "85f7b38bfcf557f9b39f2b596efa49655798a970cd7d4f1da5b5279b3a751a25"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "11210dec37b31fdaee6c8ade19e99ab8e775103f5ca4b9050d80542832ba040c"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 帕累托平衡的多漏斗选择如何降低生物声学标注成本

> 英文题目：*PB-MFS: Multi-Funnel Selection with Pareto-Balanced Uncertainty and Diversity for Bioacoustic Active Learning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-85`
> Track：P4-11




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_85.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[聚类与类别匹配](/audio-research-portal/papers/?concept=method.clustering)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.7/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.9/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haoyu Wang：Southwestern University of Finance and Economics, China；MiLM Plus, Xiaomi Inc., China
- Han Dou：Electronic Information School, Wuhan University, China
- Hui Chen：Electronic Information School, Wuhan University, China
- Yushan Du：Southwestern University of Finance and Economics, China
- Liushi Tu：Electronic Information School, Wuhan University, China
- Ningning Pan：Southwestern University of Finance and Economics, China
- Hao Zhang：Electronic Information School, Wuhan University, China
- Jingyao Wu：Massachusetts Institute of Technology, USA
- Gang Li：MiLM Plus, Xiaomi Inc., China
- Gongping Huang：Electronic Information School, Wuhan University, China

## 📌 核心摘要

**问题与瓶颈：** 该工作面向多标签生物声学分类中的批量主动学习，输入为未标注池中音频片段经预训练模型得到的固定嵌入向量，输出为在 500 个样本总预算下应标注的查询批次及重训后分类器对多标签事件的预测。单个片段常包含多个重叠声事件，且数据稀疏、类别不均衡并伴随复杂环境噪声，理想查询批次需在个体信息量与群体互补性上同时成立。常用不确定性采样偏好决策边界附近样本，容易在嵌入空间局部扎堆而引入冗余。多样性采样扩大覆盖，却可能选中信息量低的样本而错过优化当前分类器的关键样本。已有混合策略多依赖启发式权重平衡两类目标，难以在多标签场景下同时兼顾标签结构与批次冗余。

**核心思路与方法架构：** 与最接近的 CoreSet 与 BADGE 等联合建模路线相比，本文的实质增量是将候选过滤与最终成批选择解耦，保留固定预训练嵌入与每轮重训分类器的流程，新增多漏斗幸存者投票与基于排序的帕累托平衡。从一条未标注样本看，其 perch_v2 嵌入向量与上一轮分类器给出的 C 维概率一同进入筛选，先经共享 CF-MM 前缀覆盖未探索区域并保留不确定样本，再经四条互补尾部分支分别施加邻域一致性、基数不一致与类别平衡约束，每条漏斗按保留比逐级压缩并投票形成幸存者集合。最终选择将多标签不确定性分数与基于 64 维 PCA 嵌入的批次距离分别映射为 0 到 1 的归一化排序，用取小与平方根乘积项兼顾的打分函数逐个贪心挑选，并在每次挑选后更新多样性排序以适应已选组成。冷启动轮因无预测分数而直接在 256 维 PCA 空间做去离群质心距离排序的最远优先遍历，嵌入全程冻结，仅分类器随标注集扩大而更新，整个流程为离线多轮迭代而非流式因果推理。

**关键实验与核心代价：** 在 BioDCASE 2026 Task 4 的 BaseAL 协议下，方法在 HSN、POW、UHH 与 ATBFL 共 4 个子集上以 500 个样本、16 个采集周期和 5 次独立运行进行评测，主指标为基于宏平均平均精度（macro mean average precision，mAP）的学习曲线下面积（area under the learning curve，AULC，越高越好 ↑）。聚合平均 AULC 为 0.510，高于最强可比基线 CoreSet 的 0.460，原文报告绝对增益为 0.050，相对增益为 10.9%。分集上 HSN 从 0.503 变为 0.623，POW、UHH 与 ATBFL 的原文报告增益分别为 0.045、0.059 与 0.013，均高于 CoreSet。官方留存评测中 PB-MFS 的 AULC 为 0.499，低于 ADU-MMR 的 0.507，差距为原文报告的 0.008，位列第三，但单步采样时间为 0.485 s，低于 ADU-MMR 的 1.006 s。关键消融显示去掉冷启动后 AULC 从 0.510 变为 0.483，单漏斗链为 0.505，去掉帕累托选择为 0.508，保留比从 0.3 增至 0.5 时 AULC 从 0.510 变为 0.496。代价上本地评测单步采样时间为 1.15090 s，低于 CoreSet 的 5.04364 s 与 TypiClust 的 5.90751 s，但高于 Random 的 0.00131 s，标注代价为 1146.55，高于 Random 的 966.85。

**适用边界与深读导览：** 结论成立依赖固定 perch_v2 嵌入、BaseAL 统一分类器与训练管线以及 500 个样本预算下的多标签生物声学协议，仍需多组超参数并在官方留存集上仅列第三，未覆盖其他嵌入、分类器、预算与领域外数据的失效情形。论文未提及音频演示页与部署成本实测，采样时间仅为排除重训的 CPU 单步均值。欲深究五项采集分数与投票幸存机制可查方法概述和架构，消融与超参数敏感性可查实验结果与细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多标签生物声学为何难以用单一标准挑选标注样本

生物声学监测依靠被动录音追踪物种活动与生态动态，设备能够低成本采集大量音频，但物种识别与多标签事件标注仍需专家逐段确认。当单段音频常包含多个重叠声源时，类别稀疏、标签不平衡与环境噪声会进一步推高标注成本。在保持分类性能的前提下减少标注量，成为实际系统必须解决的关键矛盾，也决定了主动学习是否有落地价值。

主动学习将标注过程组织为多轮循环，学习器在第 t 轮维护已标注集合 \(Lt\) 与未标注池 \(Ut\)，两者互不相交。学习器按预算 \(kt\) 选出查询批次 \(Bt\)，经人工标注后移入已标注集合并从未标注池移除。理想批次应最大化重训练模型在未见数据上的评价指标 \(M\)，但候选标签在选择时未知，只能借助固定嵌入 \(zi\) 与上一轮模型预测 \(pi\) 近似估计选择收益。

已有方法常分为不确定性、多样性与代表性 3 类，不确定性采样偏好靠近决策边界的模糊样本，多样性方法通过覆盖嵌入空间减少冗余，代表性方法则捕捉常见模式。三者在多标签场景下各有短板，不确定性批次容易出现重复样本，多样性批次可能错过对当前分类器最有价值的样本，代表性方法对稀有事件覆盖有限。混合方法如 BADGE 联合建模梯度嵌入的不确定性与多样性，但多目标之间的加权仍多依赖启发式规则。

PB-MFS 把候选过滤与最终组批解耦，先用多条互补漏斗构造幸存集合 \(St\)，再以帕累托目标平衡不确定性与多样性。首轮标注集合为空，方法在降维嵌入空间中按远离质心排序并以最远优先遍历构造初始批次，保证覆盖整体几何结构。后续轮次先以覆盖未标注区域与重视不确定预测为共用前缀，再分出 4 条互补尾部分支筛选候选，并按多漏斗保留票数合并为幸存集合。该分工使过滤阶段保留不同选择信号支持的候选，而组批阶段在小规模幸存集合上兼顾两种排序，从而控制计算开销并稳定多轮增益。最终阶段将不确定性与多样性统一为归一化排序，并以均衡函数逐个挑选查询批次，避免重复但冗余或多样但无信息的样本。本地评测覆盖 HSN、POW、UHH 与 ATBFL 4 个子集，总标注预算为 500 个样本并分为 16 个获取周期。所有方法共用 perch_v2 固定嵌入与同一分类器流程，使性能差异主要反映选择策略本身，而非特征或训练配置差异。

### PB-MFS 如何把筛选与组批解耦为三个阶段

#### 相对已有策略的改动与输入规格

与单一不确定性或单一多样性基线相比， PB-MFS 的实质增量在于分离筛选与决策，先保留多信号共识再做组批优化。过滤阶段共用 CF 与 MM 前缀，先覆盖未标注区域再强调预测不确定，随后分支引入邻域一致性、基数不一致与类别平衡线索。原文未披露采样率、帧长与通道维度等信号规格，统一以 perch_v2 固定嵌入为起点，冷启动使用 256 维 PCA 投影，最终多样性排序使用 64 维 PCA 投影。

#### 外循环与三模块流水线

下图概括了 PB-MFS 的整体框架，右侧上方为 4 条有序过滤漏斗，中部标注过滤比例，下方为帕累托平衡选择框，左侧为标注与训练外循环。阅读时可先沿未标注池到幸存集合的方向理解过滤，再沿不确定性排序与多样性排序到查询批次的方向理解组批，有助于看清投票与排序的衔接位置。

[![原论文 Figure 1：Overview of the Pareto-Balanced Multi-Funnel Selection (PB-MFS) framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/c4be87c1704e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/c4be87c1704e/figure-1.png)

*论文图 1：多漏斗过滤与帕累托选择流程示意，上方为四条过滤漏斗与幸存集合投票，中部为过滤比例，下方为排序组批（原论文 Figure 1）。*

像素显示右上 4 行均以 CF 连接 MM 开头，尾部分别为 NC 加 LCI 到 LCI 、 NC 到 LCI 、 NC 到 LCB 、 NC 加 LCI 到 LCB ，随后汇入幸存集合 \(St\) 。中部虚线框标注过滤比例为 N 到 αN 到 α2N 到 α3N 到 α4N ，且 α 为 0.3 。下方选择框内横轴为多样性排序 \(rd\) ，纵轴为不确定性排序 \(ru\) ，红色虚线标出帕累托前沿，蓝色与红色散点经分数函数汇成查询批次 \(Bt\) 。

端到端流程按轮次展开，在第一轮因无预测可用，直接在 PCA 降维空间做最远优先遍历构造初始批次 \(B1\) ，并先按质心距离排除部分极端尾部以避开孤立离群点。在第二轮及之后的轮次中，未标注池经 4 条漏斗逐级保留，每步将规模从 N 压缩至取 4kt 与 αN 四舍五入值中的较大者。每个候选获得 0 到 4 的跨漏斗保留计数，得票高者优先进入幸存集合，且集合规模至少为取 4kt 与 100 中较大者。

幸存集合内部先将多标签不确定性分数与多样性距离分别映射为 0 到 1 的归一化排序 \(ru\) 与 \(rd\) ，其中 1 表示最不确定或距离已选批次最远。首个样本取不确定性排序最高者，后续每步根据当前部分批次更新多样性排序，并以兼顾短板与双高项的分数函数贪心挑选。被选批次经人工标注后加入 \(Lt\) ，分类器在扩展数据上重训练，嵌入保持冻结，只有分类器参数随 10 个轮次与 32 的批大小更新。

### 五种过滤分数与帕累托分数如何分工协作

过滤阶段使用 CF 、 MM 、 LCB 、 NC 与 LCI 5 种互补分数，分别度量到已标注集合的最远距离、类别概率偏离 0.5 的程度、对稀有类别的倾斜、预测与近邻标签均值的局部不一致，以及预测基数与已标注平均基数的偏离。 CF 促进探索未覆盖区域， MM 偏好模糊预测， LCB 补偿不平衡类别， NC 借助 K 为 5 的近邻捕捉局部预测与标签矛盾， LCI 则惩罚基数异常的候选。 5 者从几何覆盖、预测模糊与标签结构 3 个角度提供不同证据，避免依赖单一启发式。

4 条漏斗共享 CF 到 MM 的前缀，保证先覆盖空间再聚焦模糊样本，随后分支组合为 NC 加 LCI 到 LCI 、 NC 到 LCI 、 NC 到 LCB 与 NC 加 LCI 到 LCB 。每条漏斗内部按序保留上一阶段排名靠前的候选，逐步剔除信息量较低者。每轮保留比 α 为 0.3 ，单步规模按 N 到 αN 依次收缩。候选在 4 条路径中的保留次数记为得票数 \(vi\) ，得票至少为 3 者优先进入幸存集合，这种投票机制要求候选得到多条路径共识，而非仅在某条路径表现突出。

最终选择不再直接比较原始分数数值，而是将不确定性与多样性分别转为归一化排序以消除量纲影响。多标签不确定性先按类别概率的 4pic 与 1 减 pic 乘积做类别平均，再经下限 ϵ 为 0.05 与指数 γ 为 1.0 的调整映射为排序 \(ru\) 。多样性在 64 维 PCA 嵌入上度量候选到当前部分批次的最小平方距离，并同样映射为排序 \(rd\) 。两类排序均为 1 代表在幸存集合中最优，使不同量纲的标准可在同一尺度比较。

组批分数取两排序较小值与两者乘积项的加权和，权重 η 为 0.25 ，前者惩罚任一标准过低的候选，后者奖励双高样本，从而避开高度不确定但冗余的样本，也避开多样但无信息的样本。选择过程为贪心逐个添加，每选定一个样本即更新剩余候选的多样性排序，使后续决策适应已选组成。默认超参数组合在后文敏感性分析中分组最优，其中保留比 α 的影响大于 PCA 维度与 η ，将 α 从 0.3 放宽到 0.5 会导致明显下降。

### 有限预算下精度提升与时间标注代价的实测对比

#### 评测协议与公平性前提

本地评测采用 BaseAL 基准数据包，覆盖 HSN 、 POW 、 UHH 3 个陆地 BirdSet 子集与 ATBFL 1 个海洋子集，全部使用 perch_v2 标准嵌入。每子集总预算为 500 个样本并分为 16 个获取周期，每轮获取后训练嵌入分类器 10 个轮次，批大小为 32 。所有方法共用固定嵌入、分类器结构与训练流程，每种配置独立运行 5 次。评价指标为学习曲线下面积 AULC ，即按新增标注量加权的宏平均精度 mAP 曲线下面积，数值越高越好，采样耗时与标注代价越低越好。

下表为 BaseAL 协议下的基线对比，包含随机、间隔、 CoreSet 、 TypiClust 与 PB-MFS ，同时列出 AULC 、每步平均 CPU 采样时间与累计标注代价。阅读时可先看 AULC 列的排序，再对照时间与代价列理解精度收益的附带成本，避免只看单一指标得出片面结论。

| Method | AULC (macro mAP) ↑ | Wall-time (s) ↓ | Ann. Cost ↓ |
| --- | --- | --- | --- |
| Random | 0.390 | 0.00131 | 966.85 |
| Margin | 0.399 | 0.00307 | 1267.75 |
| CoreSet | 0.460 | 5.04364 | 1019.05 |
| TypiClust | 0.423 | 5.90751 | 958.10 |
| PB-MFS(ours) | 0.510 | 1.15090 | 1146.55 |

在所展示的 AULC 列中， PB-MFS 以 0.510 位居最高，超过次优的 CoreSet 的 0.460 ，绝对差距为 0.050 ，相对提升为 10.9% 。时间列显示 PB-MFS 每步为 1.15090 s ，快于 CoreSet 的 5.04364 s 与 TypiClust 的 5.90751 s ，但慢于 Random 的 0.00131 s 与 Margin 的 0.00307 s 。标注代价列中 PB-MFS 为 1146.55 ，高于 Random 的 966.85 与 TypiClust 的 958.10 ，说明其偏好多标签密集片段，精度提升伴随更高的单位标注负担。

#### 四个子集的分布差异

下图按 HSN 、 POW 、 UHH 与 ATBFL 4 个子集拆分了 CoreSet 与 PB-MFS 的 AULC ，灰色为 CoreSet ，蓝色为 PB-MFS 方法，纵轴为 0.3 到 0.7 的 AULC 。观察时可逐组对比同子集两柱高低，并注意各组提升幅度并不均匀，这有助于判断平均增益主要来自哪些数据分布。

[![原论文 Figure 2：AULC comparison between CoreSet and PB-MFS across four BioDCASE 2026 Task 4 subsets under the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/c4be87c1704e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/c4be87c1704e/figure-2.png)

*论文图 2：四个子集上 CoreSet 与 PB-MFS 的 AULC 对比柱状图，横轴为子集名称，纵轴为 AULC 数值（原论文 Figure 2）。*

像素显示 4 组中蓝色柱均高于同组灰色柱，没有出现反超例外。 HSN 组差距最大， CoreSet 约为 0.5 ， PB-MFS 方法约为 0.62 ，原文正文报告为从 0.503 提升到 0.623 。 POW 组从约 0.45 提升到约 0.49 ， UHH 组从约 0.4 提升到约 0.45 ， ATBFL 组从约 0.46 提升到约 0.47 ，后者提升仅为 0.013 。这种不均匀性表明平均的 0.050 增益主要由陆地子集驱动，海洋子集的增益有限，跨域一致性仍需结合官方保留评测理解。

官方保留评测中 PB-MFS 取得 0.499 的 AULC ，位列第三，低于 ADU-MMR 的 0.507 ，差距为 0.008 ，但采样时间为每步 0.485 s ，不足 ADU-MMR 的 1.006 s 的一半。每种配置虽独立运行 5 次，原文未报告标准差或置信区间，也未提供按稀有类别拆分的失效分析。评价完全基于 mAP 类精度指标，未涉及人工听测，神经代理听感指标同样未使用，因此结论仅在分类精度与采样效率范围内成立。

### 哪些组件与超参数真正决定了增益

原文 Table 3（本解读未制表展示，仅转述正文报告数值）比较了组件移除的影响，完整 PB-MFS 为 0.510 ，改为单漏斗链为 0.505 ，去掉帕累托选择器为 0.508 ，去掉冷启动则降至 0.483 。其中冷启动移除导致 0.027 的下降，幅度远大于后两者，说明在 500 个样本预算下多样性种子对后续周期的走向影响最大。单漏斗可将采样时间从 0.8561 s 降至 0.6265 s ，以 0.005 的精度损失换取效率，帕累托移除仅损失 0.002 ，主要起减少冗余与稳定选择的作用。

下表为超参数敏感性分析，覆盖冷启动 PCA 维度、保留比 α 与平衡系数 η ，默认设置以星号标出。每组均报告 AULC 与相对默认的差值，阅读时可先看每组内部的排序，再比较组间最大变化幅度，以判断哪个超参数最值得优先调优。

| Hyperparameter | Value | AULC ↑ | ∆AULC |
| --- | --- | --- | --- |
| Cold-Start PCA Dim. | 64 | 0.508 | -0.002 |
| Cold-Start PCA Dim. | 128 | 0.501 | -0.009 |
| Cold-Start PCA Dim. | 256∗ | 0.510 | – |
| Cold-Start PCA Dim. | 512 | 0.508 | -0.002 |
| Retention Ratio α | 0.2 | 0.503 | -0.007 |
| Retention Ratio α | 0.3∗ | 0.510 | – |
| Retention Ratio α | 0.5 | 0.496 | -0.014 |
| Balance Coef. η | 0.0 | 0.506 | -0.004 |
| Balance Coef. η | 0.25∗ | 0.510 | – |
| Balance Coef. η | 0.5 | 0.507 | -0.003 |

在所展示的数值中，默认组合在各自组内均为最高，完整数值为 0.510 。冷启动维度取 64 与 512 时均为 0.508 ，取 128 时为 0.501 ，最大差距为 0.009 。保留比 α 取 0.2 时为 0.503 ，取 0.5 时为 0.496 ，相对默认下降 0.014 ，为 3 组中变化最大者。平衡系数 η 取 0.0 时为 0.506 ，取 0.5 时为 0.507 ，波动仅在 0.003 到 0.004 之间，表明最终权衡对该系数相对不敏感。

综合两组消融可以看出，冷启动质量决定了起点覆盖，保留比控制了漏斗收缩强度，过宽的保留会引入噪声而过窄则损失多样性。原文未测试不同预算、不同嵌入模型或不同分类器结构下的敏感性，也未报告多次运行的方差，因此超参数结论仅在 BaseAL 固定嵌入与 500 个样本预算条件下成立，跨预算或跨特征时的稳定性尚待验证。

### 假设边界、复现前提与工程选型建议

PB-MFS 依赖预训练音频嵌入的几何结构，所有距离与排序均在 perch_v2 空间及其 PCA 投影中计算，若嵌入对目标物种或海洋噪声区分不足， CF 与多样性排序的有效性会直接下降。方法还包含 PCA 维度、保留比、近邻数、投票阈值与帕累托权重等多个超参数，默认组合在 4 个子集平均最优，但 ATBFL 提升微弱提示跨域最优可能并不一致，换域部署时需要重新校准。

评测限定于 BaseAL 标准数据包与固定分类器流程，总预算、周期划分与训练轮次均固定，未验证更大预算、流式获取或开放环境下的行为。标注代价按预测标签基数累积， PB-MFS 偏好密集多标签片段，在相同样本数下实际人工成本更高。官方保留评测中其排名第 3 且耗时优势明显，但与第一名的 0.008 差距是否稳定，缺乏置信区间难以判断，稀有类别与强噪声片段的失效案例也未系统披露。

复现需要区分三件事，原文未披露代码是否开源、预训练权重与数据集数据包的下载方式，也未说明是否存在可直接运行的系统，本次未确认可用作者资源。可依据的训练配置包括每轮训练 10 个轮次、批大小为 32 、 K 为 5 、 α 为 0.3 、 ϵ 为 0.05 、 γ 为 1.0 与 η 为 0.25 ，以及冷启动 256 维与多样性 64 维的 PCA 设置。原文未提供试听演示页，评价完全基于客观精度指标，无法对照主观听感验证挑选片段的可听差异。

工程选型上，若标注预算极小且追求起点覆盖，应优先保留多样性冷启动与多漏斗投票，若计算资源受限且可接受约 0.005 的损失，可退化为单漏斗以降低采样时间。若追求最低采样延迟，随机与间隔策略最快但精度明显偏低，适合快速验证流程而非正式标注。跨陆地与海洋混合部署时，建议先在目标域小预算下复测保留比与冷启动维度，再决定是否采用完整的帕累托组批。

未来工作指向简化框架与超越当前基准的验证，原文明确提出减少超参数依赖并在 BaseAL 与 BioDCASE Task 4 之外评估。若要在新域复用，建议先固定嵌入与预算复现平均增益，再逐步放宽保留比与冷启动设置，并补报多次运行的离散程度与高代价样本的构成，以完整呈现精度与成本的对应关系。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长与步长等信号规格，统一使用 perch_v2 固定嵌入，冷启动使用 256 维 PCA 投影，最终多样性排序使用 64 维 PCA 投影，总标注预算为 500 个样本并分为 16 个获取周期。
- **训练与评测数据**：训练与评测使用 BioDCASE 2026 Task 4 的 BaseAL 基准数据包，覆盖 HSN 、 POW 、 UHH 3 个陆地 BirdSet 子集与 ATBFL 1 个海洋子集，每子集预算为 500 个样本并分为 16 个周期，每轮获取后训练嵌入分类器 10 个轮次，批大小为 32 ，每种配置独立运行 5 次。
- **算力与训练耗时**：原文未披露 GPU 与 TPU 型号数量与训练耗时，本地评测报告平均 CPU 采样时间且不含分类器重训练时间，官方保留评测同样只报告每步采样时间。
- **核心超参数与配置**：冷启动 PCA 维度为 256 ，过滤保留比 α 为 0.3 ，近邻数 K 为 5 ，幸存集合至少保留 4kt 与 100 中较大者且优先保留至少 3 票候选，最终选择中 ϵ 为 0.05 ， γ 为 1.0 ，平衡系数 η 为 0.25 ，过滤用原始嵌入而多样性排序用 64 维 PCA 嵌入。
- **推理速度与部署开销**：本地协议下 PB-MFS 平均采样时间为每步 1.15090 s ，快于 CoreSet 的 5.04364 s 与 TypiClust 的 5.90751 s ，慢于 Random 的 0.00131 s 与 Margin 的 0.00307 s ，官方保留评测中为每步 0.485 s ，累计标注代价为 1146.55 并高于多数基线。
- **开源产物与协议状态**：原文未披露代码、权重与数据的公开状态，本次未确认可用作者资源，也未说明是否存在可直接运行的系统与演示页，不能视为已开源。
- **附录与补充材料要点**：原文未披露附录证明与补充细节，参考文献覆盖主动学习方法与生物声学数据集，未单列许可限制与失效案例分析。

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 6.4/10 | 技术严谨 6.7/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.1/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.9/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-85`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Wang_85.pdf)
- Track：P4-11

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在HSN、POW、UHH与ATBFL共4个公开BaseAL子集上聚合AULC达0.510，较最强基线CoreSet绝对提升0.050且分集一致领先。

- 核心优势：提供去冷启动、单漏斗链与去帕累托的直接消融及保留比与PCA维度和平衡系数的超参数敏感性分析。

- 主要短板：本地表PB-MFS采样时间1.15090s与标注代价1146.55不同于消融表0.8561s与1145.60，原文未解释存在字面出入。

- 主要短板：每种配置独立运行5次但未报告标准差或置信区间与显著性检验，无法判断增益统计稳健性。

- 主要短板：分类器结构优化细节与批次调度及尾部排除比例与硬件型号随机种子等关键复现信息缺失较多。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
