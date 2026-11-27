---
title: "ProxyGenBench: Benchmarking Proxy-Guided Video Generation"
date: 2026-11-27
draft: false
tags: [视频生成, 基准设计, 人类参与评测]
categories: [论文速递]
description: "ProxyGenBench 以 60 个场景 312 个用例检验代理引导生成中保留结构补全细节绑定条件的三重要求，发现代理改善时空控制但更精细代理普遍降低补全且高保留不保证正确绑定，Seedance-2.5 以严格分 0.450 领先而联合成功仅 0.140 即是代价写照。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34457"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "结构代理引导视频生成保留补全绑定的基准检验"
paper_digest_original_title: "ProxyGenBench: Benchmarking Proxy-Guided Video Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34457v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34457v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34457v1.pdf"
paper_digest_primary_task: "视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "ProxyGenBench 以 60 个场景 312 个用例检验代理引导生成中保留结构补全细节绑定条件的三重要求，发现代理改善时空控制但更精细代理普遍降低补全且高保留不保证正确绑定，Seedance-2.5 以严格分 0.450 领先而联合成功仅 0.140 即是代价写照。"
paper_digest_reader_sections: [{"heading":"粗糙结构代理为何让可控视频生成陷入三重拉扯","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从 60 个场景到 312 个评测用例的受控搭建","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"用 32 项核查清单把保留补全绑定落到可验证问题","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"平均分与结构敏感严格分的加权逻辑","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"代理带来控制收益却暴露保持补全与绑定的裂缝","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提未验证的部署条件与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences","Tencent","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Zhenchen Tang"},{"affiliations":["University of California, San Diego","Tencent"],"name":"Haolin Lu"},{"affiliations":["The Hong Kong University of Science and Technology","Tencent"],"name":"Songlin Yang"},{"affiliations":["Tencent"],"name":"Xiaotong Zhao"},{"affiliations":["Tencent"],"name":"Ran Zhang"},{"affiliations":["New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Bo Peng"},{"affiliations":["Tencent"],"name":"Shuai Li"},{"affiliations":["Tencent"],"name":"Haotian Fan"},{"affiliations":["Tencent"],"name":"Haobin Zhong"},{"affiliations":["Tencent"],"name":"Yanni Zhang"},{"affiliations":["Tencent"],"name":"Songlian Li"},{"affiliations":["Tencent"],"name":"Ning Zhang"},{"affiliations":["Tencent"],"name":"Xun Gao"},{"affiliations":["Tencent"],"name":"Alan Zhao"},{"affiliations":["New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Jing Dong"}]
paper_digest_abstract_sha256: "f71fe74f171302e83f63a9b9c550c38d0cf6eafa04a1cfba26383b82a3ec3a1a"
paper_digest_sidecars: {"citation.bib":{"sha256":"0cbd1b907afcbe5e47b37185ab0fe99bd06ced99a64c7af3066d1753bf8a96ad","url":"/audio-research-portal/client/papers/2026-11-27/2611-34457/citation.bib"},"citation.json":{"sha256":"c8d20eb22fe1e7f09d13da8b3dd27ef4adf4f3cce06ffd5f886c046918aa6b03","url":"/audio-research-portal/client/papers/2026-11-27/2611-34457/citation.json"},"citation.ris":{"sha256":"5734cb548c54e28b03775d93e47c927ce1693c0f7e3a469ad617d8d5c7920cff","url":"/audio-research-portal/client/papers/2026-11-27/2611-34457/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f1315ead4818dac6e00b836f02eec71291ced54c7d1dd509d645c734f434210c","url":"/audio-research-portal/client/papers/2026-11-27/2611-34457/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "31238a431150b651145a5fa90b2225315a38c13fe31509ad5c7153d45aca185c"
paper_digest_api_reader_plan_sha256: "a7ada73123539146f8348383fa7ca4ef4208b45612bbf4c20bc6f85fb67cfeba"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cd9399e1e7758d065079c44c9e256ee8c6bbcec63a694f3999559d7a4d6e2540"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "3001d82962c60efd86aff14fc7b4ac9805c9388af6be5374901134d2ffc658f6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "11cb37e4a4584759afa69861e4cd7539c571cbc5583e08dc03ebab1f98d23dbf"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4c8560c14d975570f8a49f6af88a5d80f6cd459c7389edcac3b4f86f3c6ef4c2"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 结构代理引导视频生成保留补全绑定的基准检验

> 英文题目：*[ProxyGenBench: Benchmarking Proxy-Guided Video Generation](https://arxiv.org/abs/2611.34457v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-research-portal/papers/?concept=task.video-generation)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 7.9/10 | 技术严谨 8.3/10 | 实验充分 7.4/10 | 清晰度 6.6/10 | 影响力 3.8/10 | 开源 6.0/10 | 可复现 5.5/10 | 工程/实践 6.2/10


## 👥 作者与机构

- Zhenchen Tang：New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences；Tencent；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Haolin Lu：University of California, San Diego；Tencent
- Songlin Yang：The Hong Kong University of Science and Technology；Tencent
- Xiaotong Zhao：Tencent
- Ran Zhang：Tencent
- Bo Peng：New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Shuai Li：Tencent
- Haotian Fan：Tencent
- Haobin Zhong：Tencent
- Yanni Zhang：Tencent
- Songlian Li：Tencent
- Ning Zhang：Tencent
- Xun Gao：Tencent
- Alan Zhao：Tencent
- Jing Dong：New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences

## 📌 核心摘要

**问题与瓶颈：** 代理引导视频生成以一段粗糙结构代理视频加文本提示与可选图像、音频参照为输入，输出还原场景布局、运动、镜头与事件顺序的写实视频。纯文本或单图引导常留下轨迹、机位与事件时序欠定，导致跨镜头空间跳变、交互错误与动作断裂。引入动画三维剪影等结构代理可显式约束布局与时序，但其低多边形几何、占位运动与刚性伪动作会误导生成器。用户意图决定何者应保留、何者应修正，而现有评测多只看与代理相似或整体画质，无法分离保持、修正与多条件绑定三者的交互。

**核心思路与方法架构：** 核心洞察是把一次不可比的整体相似度拆为保持、补全与绑定三个可分别计分又相互制约的维度，并以关键结构通过率施加严格惩罚。基准构建先从 60 个场景扩展出 312 个案例，沿动态动作、多镜头叙事与多视角一致三类任务组织，并正交变化代理来源与保真度、文本详略与多模态参照组合，其中代理设 Pr0 剪影、Pr1 人形与 Pr2 细节三档，文本设 T0 简述到 T2 全规格三档。接着清单实例化只从模型可见的代理、文本与参照生成 32 项细粒度标准，分属 8 种能力且每种能力 4 项，其中 12 项保持标准列为关键结构检查，经校验后固定给同案例全部模型共用，面包房案例即以同一代理规定的座位布局与递包裹时序叠加服装要求与两张人像、两段音色参照构成待测输入。最后冻结评测将生成模型视作冻结黑盒，给定代理与文本参照生成视频而不泄露隐藏场景规格，打分时对照输入逐项核查而非比较像素相似，以案例平均分 Q 与关键通过率平方相乘得严格分 \(S = Q \rho^2\)，面包房示例即以 Q 为 0.833 且 12 项全通过得到 S 为 0.833，同案例共用文本、参照与清单保证可比。

**关键实验与核心代价：** 在 18 个场景的 50 对匹配视频中，加代理使动作转移准确率从 0.894 升至 1.000，跨镜头空间一致从 0.833 升至 0.952，多视角几何误差 MEt3R 越低越好从 0.464 降至 0.337，双序 VLM 偏好中代理胜 35 对、无一致败局。无独立音频组的严格分以 Seedance-2.5 的 0.450 与 Kling-4.0 的 0.425 居前，但联合成功率仅 0.140 与 0.150，五款模型总体在 0.072 到 0.174 之间，平均保持高不代表 12 项关键结构同时通过。在 31 个共享 T2 场景上，Pr0 到 Pr2 的保持上升 1.1 到 6.7 个百分点，补全反而下降 4.8 到 7.9 个百分点，Seedance-2.5 保持涨 0.022 而补全掉 0.060。本工作无 MOS 人工听感打分，3,199 项人工核验针对 VLM 裁决本身，有效性为 0.999 与计分准确率为 0.929，其中保持项 0.897 与绑定失败项 0.840 偏低，揭示评测代价所在。

**适用边界与深读导览：** 结论在给定代理加文本加参照的受控组合下成立，未覆盖长时交互、实时流式与端侧部署，也未分离几何细节与运动保真各自的影响，共同支持集与严格分指数敏感性显示音频组排序并不稳定。Studio 3D 子集显示保持达 0.848 到 0.962 时绑定仅 0.182 到 0.500，说明强结构服从不自动带来正确绑定，相关机制分解、能力级瓶颈与统计检验可查阅下文方法、实验与局限章节。

## 🔗 开源与复现资源

- 演示资源：<https://2kxx.github.io/ProxyGenBench/> — 链接可访问（HTTP 200）

- 代码相关资源：<https://github.com/2kxx/ProxyGenBench> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 粗糙结构代理为何让可控视频生成陷入三重拉扯

#### 问题背景与代理作用

当前视频生成在单帧真实感进步明显，但如何让场景按预期展开仍难控制。纯文本与参考图像常留下歧义，物体轨迹相机运动与事件时序缺乏显式约束，生成视频容易出现交互错误空间关系错乱与跨镜头跳变。结构代理以一段粗糙视频给出布局位姿相机与事件顺序，为生成提供时空骨架，成为文本之外的补充控制信号。

代理的粗糙恰是双刃剑。低保真几何与僵硬运动可能误导生成器，低多边形甜甜圈本不应逐字复刻，占位方块的刚性转动需要被自然动作替换。用户意图决定何者该保留何者该修正，文本与图像音频参考因此不可或缺。已有评测多关注视觉质量或语义对齐，较少考察这种不完美代理下保留补全与绑定三者如何相互牵制。

#### 评测设定与能力分工

论文把每次评测定义为三元组，包含隐藏的目标场景说明提供给模型的结构代理与文本图像音频条件，模型仅依据后两者生成视频。场景任务覆盖动态动作多镜头叙事与多视角一致性，分别考验运动状态变化跨镜头事件顺序与跨视角物体稳定。核心发现是代理确能改善时空控制，但更精细的代理反而伴随更低的补全分，而高结构依从也不能保证条件被正确绑定到对应实体与时刻。

从机制分工看，代理只负责何处与何时，文本与参考负责何貌与何事。具体而言，结构代理是一段视频，规定意图场景布局、物体摆放、运动、相机行为与事件顺序，但不完全定义最终结果，可包含占位几何、不完整交互或不自然运动。论文用代理保真度描述几何与运动细节的多少，而非内容正确性，因此更高保真代理未必更准确。生成时模型只见代理与文本图像音频条件，隐藏的目标场景说明仅用于基准评测，不提供给模型。文本提示传达外观交互声音与目标风格，图像参考指定命名目标的身份衣着与物体外观，音频参考指定嗓音声源身份与声音事件及时机。评测检查项只从提供给模型的条件派生，不对模型未收到的信息扣分，意图风格化若在文本中明确说明则不计为代理瑕疵，而占位体的刚性伪动作、穿插缺失关节等则成为应补全或修正的目标。

为同时考察保留补全与绑定，基准把 3 类要求拆成 8 个能力 32 条细粒度准则。保留跟踪意图结构是否存活，包括空间结构、运动与相机控制、时序与镜头连续性；补全评估未完成代理能否被实现为连贯外观、自然关节与可信交互，而非照搬抽象痕迹，包括视觉实现质量、运动与物理合理性、代理抽象处理；绑定评估文本图像音频条件是否被关联到同一结构中的正确实体动作与时刻，包括实体与外观的证据落地、动作与音频事件的证据落地。

#### 构造执行与主要发现

在执行过程上，基准从 60 个场景构造 312 个评测用例，其中二百九十四含代理视频，18 个为无代理对照。代理文本网格含 257 例，其中含 60 个参考用例，另加 15 个去图像、8 个去音频与 18 个去代理消融，以及 14 个针对性控制用例。场景任务分动态动作、多镜头叙事与多视角一致性，分别对应运动交互与状态转换、跨切事件顺序与连续性、跨视角场景与物体稳定，另以人物导航物体战斗与变形相机 5 类内容标注描述覆盖而非另立任务。代理来源分 4 组：增强型参考转视频、原生代码转代理、游戏代理与工作室三维代理，覆盖参考条件内容、脚本创作场景、游戏环境与未完成动画资产等不同缺失细节与运动瑕疵模式。每个场景设多版本输入，代理分 Pr0 块状、Pr1 人形、Pr2 细节三档，几何与运动细节递增而故事、镜头结构、相机计划、阻断、角色色与关键轨迹保持一致，工作室三维示例无 Pr1 代理；文本分 T0 简述、T1 增加外观与粗时间线、T2 给出完整视觉物理摄影与时间分辨计划，代理始终是主要结构信号，核心配置为 Pr0-T0、Pr0-T1、Pr0-T2、Pr1-T2、Pr2-T2。

评测执行先按用例实例化检查项，再用视觉或音频证据打分。清单构建从所给文本与可选参考中清点命名实体属性动作与声音事件，区分代理中可见、抽象占位与不可观察 3 种证据状态，未见细节不自动视为可省略。Gemini-3.1-Pro 把适用准则实例化为针对具体实体事件与区间的以输入为依据的问题，Qwen3.5-397B-A17B 核验清晰度、输入可支撑性与准则对齐，无效问题修订后固定并在同用例跨模型共用。每条适用准则贡献一次评估，与子问题数量无关；可直接验证的要求取二值分，外观与运动质量用零到四分预定等级量表并归一化，轨迹匹配中相同与基本相同计为通过，参考依赖准则对比生成外观嗓音或声音事件与所给输入。能力分由适用准则等权平均，维度分由能力分等权平均，用例均值 Q 为适用维度平均，严格分 S 为 Q 乘以十二项关键保留检查通过率 rho 的平方，以强调结构控制这一基本要求，联合成功率则统计全部关键保留检查通过的输出占比，缺失输出计 0 分，不可评用例排除。

这种分工解释了后文反复出现的张力。配对比较中代理把动作转换准确率从 0.894 提升到 1.000，跨镜头空间一致从 0.833 提升到 0.952，多视角几何误差 MEt3R 从 0.464 降到 0.337，双序呈现下 50 对中有 35 对一致偏好代理，证实结构先验在提示欠指定时的控制收益。但平均保留高不等于十二项关键结构约束在同一输出中同时成立；从 Pr0 到 Pr2 保留上升而补全下降，源于更细代理在给出有用结构的同时也带来刚性姿态、别扭接触与不自然运动，跟随过紧会把本应修正的痕迹带入成片，能力分解中 C3 代理抽象处理下降最为明显。文本加细与图像音频加入则改变适用绑定要求，身份匹配与跨镜头身份一致较高而动作物体绑定较低，嗓音声源匹配较高而视听时序对齐较低，因此结构依从强仍可与绑定错误并存，需要在同一生成场景中选择性保留意图约束、修正代理痕迹并实现补充信息的证据落地。

### 从 60 个场景到 312 个评测用例的受控搭建

基准共搭建 60 个场景与 312 个用例，其中 294 个含代理视频，18 个为无代理对照。代理来源分为 4 组，增强参考视频新代码驱动代理游戏素材与未完成制片资产，分别带来不同的缺失细节与运动伪影。内容标注涵盖人物导航物体战斗变形与相机，任务则聚焦动态动作多镜头叙事与多视角一致性。输入条件计数非互斥，文本覆盖 312 例，代理视频 294 例，参考图像 177 例，独立音频 60 例，无代理 18 例。

#### 场景来源与输入条件

为建立直觉，先看总览示意左侧 3 组对比。面包房案例比较纯文本生成的空间跳变与代理条件生成的稳定布局，动态动作案例关注门状态在多帧间是否一致，多视角案例检验雨伞开合在不同相机下是否稳定。右侧面板同时给出保留补全绑定与严格分的定义，以及无独立音频组 5 模型的取整分数，为后文三维度诊断提供参照。

![原论文 Figure 1：Overview of ProxyGenBench.](/audio-research-portal/images/papers/2611.34457/figure-9-743062af1a37f196.png)

*论文图 9：代理引导总览左侧对比纯文本与代理条件生成，右侧汇总保留补全绑定与严格分定义及分数（原论文 Figure 1）。*

纯文本行用红色虚框标出空间偏移与细节错位，绿色代理行则显示更好的空间接地与细节保持，黄色圈出低保真代理几何提示不应照搬。动态门与雨伞状态在代理条件下跨帧更连续，说明粗糙结构确能约束布局与状态。右侧分数条显示 Seedance-2.5 在保留 77.4 与绑定 69.3 领先，Kling-4.0 在补全 59.1 领先，但严格分仅 45.0 与 42.5，暗示平均表现与联合满足之间存在落差。

#### 用例网格与生成设置

用例网格把文本细节 T0 至 T2 与代理保真度 Pr0 至 Pr2 正交搭配，但并非全组合都保留。Pr0 行在 T0 T1 T2 分别有 50 50 60 例，Pr1 与 Pr2 仅在 T2 有 47 与 50 例，横线表示省略配置。右侧消融列出参考用例 60 无代理 18 无图像 15 与无音频 8 的有无矩阵，另有 14 个目标控制用例检验身份语音时机与相机指令，共同构成 312 例的受控对比基础。

[![原论文 Figure 2：Evaluation case construction.](https://arxiv.org/html/2611.34457v1/scene-to-cell.svg)](https://arxiv.org/html/2611.34457v1/scene-to-cell.svg)

*论文图 1：代理文本网格与消融矩阵构成，展示各保真度文本档位用例数与有无条件对照（原论文 Figure 2）。*

每例沿相同目标故事时长生成设置与剩余参考组织对比，文本在固定 Pr0 下由 T0 增至 T2，代理在固定 T2 下由 Pr0 增至 Pr2。标准输出为 720p 15 秒 16 比 9 或 21 比 9 视频，附录雨伞案例还注明 25 fps。同一提示与参考条件喂给所有受支持模型，缺失输出记零，不支持配置与无法评测用例予以排除。论文未披露生成器内部张量形状与帧率变换细节，此处仅追踪输入条件到生成视频再到清单打分的基准流水线。

构造过程结合智能体辅助与人工核查。智能体把故事梗概扩展为分镜，生成 Blender 代码与三档英文提示，执行回放后迭代修复。中文语音经转录翻译再用克隆音色合成英文参考，仅保留说话人身份与大致时长。时间线核查对照源场景帧率帧范围与渲染帧，区分标注切点与可见切点，目标修正后重新打包为基准用例。

### 用 32 项核查清单把保留补全绑定落到可验证问题

评价把一次生成拆成保留补全与绑定三诊断。保留跟踪代理规定的布局粗轨迹相机与事件连续性，补全检验未指定外观的合理实现与伪影修正，绑定核查文本图像音频条件是否落到正确实体动作与时刻。面包房例子中座位与事件顺序可保留完好，僵硬手势却未被自然化，服装颜色也可能绑错对象，说明三者可能同场分化。

#### 能力划分与清单实例化

下表摘选评价结构的 3 个代表能力，完整结构含八能力 32 细则，每能力 4 条。保留以空间结构为代表，补全以视觉实现质量为代表，绑定以实体外观接地为代表。清单构建时把每条适用细则实例化为针对具体实体事件与时间窗的问题，同一用例的核查清单在所有模型间固定共享。

| Dimension | ID | Capability | Evaluation focus |
| --- | --- | --- | --- |
| Preserve | P1 | Spatial Structure | Proxy-defined scene layout, relative object positions, and spatial anchors. |
| Complete | C1 | Visual Realization Quality | Plausible appearance, geometry, texture, and visual coherence. |
| Bind | B1 | Entity & Appearance Grounding | Correct assignment of textual and visual attributes to entities. |

保留的空间结构关注实体存在计数投影位置尺度相对关系与遮挡深度，运动相机控制关注粗轨迹方向交互阶段与分镜计划，时序连续性关注事件存在顺序时长与跨镜头状态。补全的视觉实现关注外观完整材质光照与局部伪影，运动物理关注动力学合理性接触支撑与几何稳定，代理抽象处理关注伪动作修正与细节补足。绑定的两能力分别处理文本图像属性与动作音频事件的指派与同步。

面包房核查流程把输入清单生成与打分聚合串成一路。顶部给出 T2 文本 Pr0 代理 2 帧与两张图像两段声音参考，箭头指向 Wan-3.0 生成的三镜头视频。中间三列分别展示保留补全与绑定的 6 个示例核查，底部给出平均分结构通过率与严格分的聚合结果，可据此理解单例如何从证据走向分数。

[![原论文 Figure 4：Checklist-guided evaluation on the bakery case.](https://arxiv.org/html/2611.34457v1/fig4.png)](https://arxiv.org/html/2611.34457v1/fig4.png)

*论文图 3：面包房核查流程从输入经清单生成到视觉音频打分与分数聚合的完整示例（原论文 Figure 4）。*

示例中 P1.3 座位与包裹居中得 1.00，P3.1 包裹手势先于反应得 1.00，C3.1 刚性块体转自然人形得 0.75，C2.3 手与包裹干净接触得 1.00。绑定侧 B1.1 绿色与奶油色服装指派与 B1.3 跨镜头服装一致均得 0.00，提示文本写明绿色但输出呈灰色，第二镜头转绿第三镜头又变灰。整单 Q 为 0.833，12 项关键保留全过使 rho 为 12 比 12 等于 1，严格分 S 等于 Q 乘 rho 平方仍为 0.833。

#### 评分标尺与逐层聚合

能力分先把同一能力下适用细则的得分加权平均。记 s 为用例 i 细则 k 在 0 到 1 的得分，K 为该用例该能力适用细则集合，a 为固定权重取 1，不适用细则直接省略。目标是把多个子问题压缩为 P1 至 B2 8 个能力分，再进一步平均为维度分，避免子问题数多的细则主导评价。

\[\qquad f_{i,g}=\frac{\sum_{k\in\mathcal{K}_{i,g}}a_{k}s_{i,k}}{\sum_{k\in\mathcal{K}_{i,g}}a_{k}}.\]

形式上这是等权均值，物理直觉是同一能力内各细则地位平等，缺失证据不惩罚也不奖励。极值行为清晰，全 1 得 1，全 0 得 0，若仅一项适用则能力分退化为该项本身。输出的能力分再按维度内能力平均得到维度分，进而参与用例均值与严格分计算，使底层视觉音频证据逐层向上传导而非跨层复用。

### 平均分与结构敏感严格分的加权逻辑

维度分把所属能力分等权平均，得到保留补全与绑定三维度分。用例均值 Q 再把适用维度平均，结构通过率 rho 统计 12 项关键保留细则 P1.1 至 P3.4 的通过比例。联合成功要求 rho 等于 1，即关键结构约束在同一输出中同时成立，而非三维度各自平均高。缺失输出记零，不可评用例排除，模型级分数在同输入组内按用例平均。

严格分在均值基础上乘以结构通过率的平方，以强调结构控制是代理引导的基本要求。记 D 为维度分，D 集合为适用维度，rho 为关键保留通过比例，Q 为维度均值，S 为严格分。平方加权使多次关键违反受到更重惩罚，即使外观完整或绑定尚可，总分仍被拉低，从而保留三维度诊断的同时给出结构敏感排序。

\[Q_{i}=\frac{1}{|\mathcal{D}_{i}|}\sum_{d\in\mathcal{D}_{i}}D_{i,d},\qquad S_{i}=Q_{i}\rho_{i}^{2}.\]

均值形式体现各维度平等，平方项体现结构优先的统计直觉。极值上 rho 为 1 时 S 等于 Q，rho 为 0 时 S 为 0，rho 为 0.5 时 S 仅为 Q 的 1/4。输出的 S 用于组内模型排序，Q 与保留补全绑定仍单独报告，联合成功率另计 rho 等于 1 的用例占比。附录还以指数取 0 至 3 检验加权敏感性，指数为 0 即退化为 Q。

### 代理带来控制收益却暴露保持补全与绑定的裂缝

评测覆盖 Seedance-2.5 Kling-4.0 Wan-3.0 Seedance-2.0 与 MiniMax-H3，结果按有无独立音频分组，Kling-4.0 不参与音频组。组内模型共享用例与核查清单，严格分作为主要结构敏感排序，18 个无代理用例用于配对比较。跨条件比较时文本变多或参考增加会改变适用清单，分析在共享细则上比较并单独评估新增绑定要求，不把不同用例集的分数直接解读为单一模态效应。

#### 代理的结构控制收益

下表汇总配对子集上的控制指标与双序偏好。动作转换与跨镜头空间在重叠子集上评估，MEt3R 在重叠视角对上评估误差越低越好，双序聚合则综合两种呈现顺序以降低位置偏置。Pairs 与 Sc 分别表示配对数与场景数，Delta 为代理减无代理，分数均在 0 到 1 区间。

| Metric | Pairs/Sc. | No proxy | + Proxy | 𝚫 |
| --- | --- | --- | --- | --- |
| Action transition ↑ | 22/8 | 0.894 | 1.000 | +0.106 |
| Cross-shot spatial ↑ | 14/5 | 0.833 | 0.952 | +0.119 |
| MEt3R ↓ | 17/10 | 0.464 | 0.337 | −0.127 |

配对比较显示动作转换从 0.894 升至 1.000，提升 0.106，跨镜头空间从 0.833 升至 0.952，提升 0.119，MEt3R 误差从 0.464 降至 0.337，下降 0.127。50 对双序比较中代理一致获胜 35 对，占 70%，其余为平局或顺序依赖，无一致失败。这些收益限于所测结构控制，运动质量与条件绑定需另行评估。

#### 总体表现与联合成功缺口

下表摘选无独立音频组 5 模型的保留补全绑定均值严格分与联合成功率。保留补全绑定分别为三维度分，平均 Q 为适用维度均值，严格分为 Q 乘关键通过率平方，联合为 12 项关键保留全过比例。分数越高越好，缺失输出记零，表中为该组内可比条件下的观察值。

| Model | P | C | B | Average | Strict | Joint |
| --- | --- | --- | --- | --- | --- | --- |
| Seedance-2.5 | 0.774 | 0.566 | 0.693 | 0.678 | 0.450 | 0.140 |
| Kling-4.0 | 0.746 | 0.591 | 0.652 | 0.663 | 0.425 | 0.150 |
| Wan-3.0 | 0.732 | 0.557 | 0.642 | 0.644 | 0.399 | 0.164 |
| Seedance-2.0 | 0.698 | 0.505 | 0.642 | 0.615 | 0.375 | 0.174 |
| MiniMax-H3 | 0.639 | 0.539 | 0.667 | 0.615 | 0.344 | 0.072 |

Seedance-2.5 以保留 0.774 绑定 0.693 与严格分 0.450 领先，Kling-4.0 以补全 0.591 领先。严格分前二的联合成功率仅 0.140 与 0.150，而 Seedance-2.0 严格分 0.375 更低却以 0.174 居联合成功首位。5 模型联合成功在 0.072 至 0.174 之间，说明高平均保留不保证关键约束在同一输出中同时成立，排序会因是否要求联合满足而反转。

#### 保真度拉扯与绑定失效

下表摘选 3 模型在块状 Pr0 与细节 Pr2 的保留补全与均值，以凸显保真度变化。Pr0 为粗色块，Pr1 加关节躯干，Pr2 保持无纹理但几何与运动更完整。分析固定 T2 文本与无独立音频的 31 个共享场景，比较 Pr2 减 Pr0 的维度变化，均值 Q 为三维度平均。

| Model | Pr0 – Blockout P | Pr0 – Blockout C | Pr0 – Blockout Average | Pr2 – Detail P | Pr2 – Detail C | Pr2 – Detail Average |
| --- | --- | --- | --- | --- | --- | --- |
| Seedance-2.5 | 0.780 | 0.598 | 0.711 | 0.801 | 0.538 | 0.711 |
| Kling-4.0 | 0.753 | 0.647 | 0.710 | 0.782 | 0.575 | 0.689 |
| MiniMax-H3 | 0.664 | 0.612 | 0.706 | 0.731 | 0.533 | 0.642 |

Seedance-2.5 保留从 0.780 升至 0.801，增加 0.022，补全从 0.598 降至 0.538，降低 0.060。Kling-4.0 保留增 0.030，补全降 0.072。MiniMax-H3 保留增 0.067 最多，补全降 0.079。附录 31 场景平均显示保留增 0.029，补全降 0.063，补全下降在 155 个模型场景对中占 94 对，其中 49 对保留未升而补全下降，瓶颈主要来自 C3 代理抽象处理下降 0.104。

左图为 Pr2 减 Pr0 的百分点条形，蓝色向右为保留增益，红色向左为补全损失。右图为均值 Q 随 Pr0 Pr1 Pr2 的折线，横轴为块状人形细节三档，纵轴为 Q。完整保留补全绑定与 Q 见主表，场景层 155 点散布另见附录，可对照平均趋势与离散程度。

[![原论文 Figure 5：Proxy-fidelity effects on shared T2 scenes.](https://arxiv.org/html/2611.34457v1/fig5.svg)](https://arxiv.org/html/2611.34457v1/fig5.svg)

*论文图 4：共享场景下 Pr2 减 Pr0 的保留增益与补全损失条形及均值随保真度变化折线（原论文 Figure 5）。*

条形显示 5 模型保留增 1.1 至 6.7 个百分点，补全降 4.8 至 7.9 个百分点。折线显示除 Seedance-2.5 靠绑定从 0.754 升至 0.794 维持 Q 为 0.711 外，其余 4 个模型 Pr0 的 Q 最高。绑定侧身份匹配 0.897 与跨镜头身份 0.909 远高于动作物体绑定 0.636，声音源匹配 0.768 高于视听对齐 0.513。Studio 12 例中保留达 0.848 至 0.962，绑定仅 0.182 至 0.500，证实结构依从不自动带来正确接地。

### 结论成立的前提未验证的部署条件与复现核对

结论成立依赖若干前提。保真度三档同时改变几何与运动细节，无法分离两者各自效应，部分来源并不提供全部三档。Studio 子集仅 12 例 10 场景，音频组仅 44 例 9 场景，跨组分数不可直接比较。微妙物理交互与精确视听同步仍超出当前视觉语言 judge 的可靠范围，评分需结合视觉音频证据与时间戳理解。

为检验结构加权的稳健性，附录让严格分指数在 0 至 3 间变化。记 Q 为均值，rho 为关键保留通过率，alpha 为指数，alpha 为 2 即主定义，alpha 为 0 即退化为均值。目标是观察排序是否随惩罚强度漂移，区分平均表现与结构可靠性的不同含义。

\[S_{i}^{(\alpha)}=Q_{i}\rho_{i}^{\alpha},\qquad\alpha\in\{0,1,2,3\}.\]

指数形式赋予结构失败非线性惩罚，直觉是 alpha 越大对部分违反越严厉。极值上 alpha 为 0 时无惩罚，alpha 为 3 时 rho 为 0.5 仅保留八分之一权重。输出显示无音频组排序在指数间保持稳定，音频组 Wan-3.0 在 alpha 为 3 时反超 Seedance-2.5。场景簇自助 5,000 次与 Holm 校正配对检验表明，仅 Seedance-2.5 对 MiniMax-H3 的差距在校正后显著，其余顶部分离并不稳固。

复现核对上，代码与演示页当前可用，仓库文档覆盖部分能力，附录含构建修复流程评分提示词统计协议与失效分析。人类审计 3,199 条判定来自 110 个视频，清单有效性 99.9%，总体打分一致 92.9%，保留最低 89.7%，绑定失败组 84.0% 低于通过组 98.1%，B2 动作音频事件在失败组仅 0.714。试听演示可对照面包房服装错绑与门雨伞状态等现象，选型时需在保留结构与修正伪影接地条件之间权衡。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧率步长码率与延迟等音频信号规格，仅说明 60 个用例含独立音频参考，另有 8 个无音频消融与语音交换控制，音频判定使用候选音频与参考音频证据。
- **训练与评测数据**：基准含 60 个场景与 312 个用例，其中 294 个含代理视频，18 个为无代理对照，257 例构成代理文本网格，另有无图像 15 例无音频 8 例与 14 个目标控制用例，图像参考 177 例独立音频 60 例，无模型训练阶段。
- **算力与训练耗时**：原文未披露 GPU TPU 型号数量与训练耗时，无模型训练阶段，评测调用五款视频生成器与 Gemini-3.1-Pro 视觉音频 judge 及 Qwen3.5-397B-A17B 核查，推理硬件与用时未给出。
- **核心超参数与配置**：Judge 温度为 0，并排呈现代理与候选时间线，均匀采样 8 或 12 帧，单请求至多 64 个视觉输入，适用时附加参考图像细节裁剪与候选音频，二值核查保留绑定与 C2.3 取 0.50，其余补充分级 0 至 4 归一后取 0.60，权重取 1，严格分指数取 2。
- **推理速度与部署开销**：生成设置为 720p 分辨率，标准 15 秒 16 比 9 或 21 比 9 视频，缺失输出记零，不支持配置排除，原文未披露延迟 TTFA RTF 显存与参数量等推理开销。
- **开源产物与协议状态**：代码仓库与演示页当前可用，仓库文档覆盖部分能力，附录含构建修复流程评分提示词统计协议与失效分析，许可细节以仓库与附录说明为准。
- **附录与补充材料要点**：附录详述三档代理与文本构造语音转换时间线核查 32 细则证据清单验证聚合公式控制指标保真度分解绑定诊断场景簇自助区间 Holm 校正配对检验严格分敏感性与人类审计，明确几何运动联合变化与 VLM 评估局限及自适应条件方向。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.34457v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：将整体相似度拆为保持补全绑定三维度并以关键通过率平方加权形成严格分，清单仅从模型可见条件实例化且同案例共用。

- 核心优势：在50对匹配视频与31个共享场景上量化代理收益与保真度张力，并以场景整群自助与共同支持集配对检验支撑结论。

- 核心优势：构建60场景312案例覆盖三类任务与四组代理来源及三档保真度与三档文本的受控网格，输入过滤后无不支持项。

- 主要短板：代理保真度档位同时改变几何与运动细节难以分离各自效应，VLM对细微物理交互与精确音画同步仍具挑战。

- 主要短板：保持项人工核验准确率仅0.897为三维度最低且绑定失败组仅0.840，音频组排序随严格分指数变化而不稳定。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
