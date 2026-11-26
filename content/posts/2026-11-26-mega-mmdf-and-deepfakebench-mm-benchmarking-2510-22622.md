---
title: "Mega-MMDF and DeepfakeBench-MM: Benchmarking Multimodal Deepfake Detection Across Diverse Forgery Pipelines"
date: 2026-11-26
draft: false
tags: [音频深度伪造检测, 基准设计, 数据集, 基准测试]
categories: [论文速递]
description: "针对音视频伪造流水线覆盖不足与评测口径不一，本文构建含 22 条流水线的 Mega-MMDF 与统一基准 DeepfakeBench-MM，证明其训练让七个检测器平均 AUC 最高且增益为 0.0085 至 0.0784，代价是单流水线泛化非对称、零填充缺失模态明显增加误报漏报且鲁棒性具数据集相关性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2510.22622"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "百万级流水线覆盖如何改变音视频伪造检测的训练与评测"
paper_digest_original_title: "Mega-MMDF and DeepfakeBench-MM: Benchmarking Multimodal Deepfake Detection Across Diverse Forgery Pipelines"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2510.22622"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2510.22622.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对音视频伪造流水线覆盖不足与评测口径不一，本文构建含 22 条流水线的 Mega-MMDF 与统一基准 DeepfakeBench-MM，证明其训练让七个检测器平均 AUC 最高且增益为 0.0085 至 0.0784，代价是单流水线泛化非对称、零填充缺失模态明显增加误报漏报且鲁棒性具数据集相关性。"
paper_digest_reader_sections: [{"heading":"伪造流水线覆盖不足与评测口径不一制约音视频伪造检测","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Mega-MMDF 以 22 条流水线组织 30 种方法并用统一基准固定评测口径","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"预处理到检测器损失的端到端张量流与训练冻结边界","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"Mega-MMDF 训练在平均 AUC 上领先但跨数据集仍有明显短板","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"单流水线训练的非对称泛化与缺失模态下的误报漏报","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现核对与何时选用该资源的建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kangran Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaoyu Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yupeng Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yize Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weinan Guan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bo Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yufan Liao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengzhe Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Soumyya Kanti Datta"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qingshan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Siwei Lyu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Baoyuan Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Baicheng Chen"}]
paper_digest_abstract_sha256: "1068fd39005902121b0224d9021aaa411b6d32c7afc4cc5eaae912cbcc956c28"
paper_digest_sidecars: {"citation.bib":{"sha256":"380a6fb50729e2c57617ad946415b4e9ba17d583033eed115afa8113734552cf","url":"/audio-research-portal/client/papers/2026-11-26/2510-22622/citation.bib"},"citation.json":{"sha256":"b0ac83b836563cecb05643c622081008de4da07993dc85236ab0ccbf3f8d8b52","url":"/audio-research-portal/client/papers/2026-11-26/2510-22622/citation.json"},"citation.ris":{"sha256":"6d71e7b75f2be3cdad08736db706aa1828e0b9e288a41466ec06a4cd4afc271f","url":"/audio-research-portal/client/papers/2026-11-26/2510-22622/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"142a7a3c466882f52fe8dc6b524528b0ff5a2f81902a6084f669f87738e74b64","url":"/audio-research-portal/client/papers/2026-11-26/2510-22622/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "0b6695229f9bed317b0faa9bf38d32698f4d078019555acb3a5fba2948a1bf71"
paper_digest_api_reader_plan_sha256: "cbbce6109e6a29f6a5c4442c6d3ca54f822778331510da2fd2b08183dea5a3ae"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ecb2e16e26940d13eba36061a8de7b199962f8a2b5b378ee64b1aa2bccb0799b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "7701cbd3f1219c667fd12b9bff30eb8b1d3d8ec31352ca35d1ed750d2a1e1ee4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "57619b4306bd7413613ae08ab613acc07700b21dd9b1b64032cd431c236a7af3"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "09f778aace2ef5372cf6963dbffd0e0c863abf07a4b531afa2f2cc9834463c7d"
paper_digest_api_reader_resource_count: 10
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 百万级流水线覆盖如何改变音视频伪造检测的训练与评测

> 英文题目：*[Mega-MMDF and DeepfakeBench-MM: Benchmarking Multimodal Deepfake Detection Across Diverse Forgery Pipelines](https://arxiv.org/abs/2510.22622)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-research-portal/papers/?concept=method.benchmark-design)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)；[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.2/10** | 创新 7.8/10 | 技术严谨 8.2/10 | 实验充分 8.3/10 | 清晰度 7.0/10 | 影响力 7.5/10 | 开源 6.0/10 | 可复现 7.6/10 | 工程/实践 7.3/10


## 👥 作者与机构

- Kangran Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaoyu Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yupeng Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yize Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Weinan Guan：机构信息未能在本次解析中与作者逐人可靠绑定
- Bo Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yufan Liao：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengzhe Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Soumyya Kanti Datta：机构信息未能在本次解析中与作者逐人可靠绑定
- Qingshan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Siwei Lyu：机构信息未能在本次解析中与作者逐人可靠绑定
- Baoyuan Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Baicheng Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 音视频深度伪造同时篡改语音内容与人脸外观，输入为一段包含说话语音的人脸视频，输出为整段真伪判定，难点在于伪造可以单独出现在音频或视频，也能以多步堆叠形式同时污染双模态，且替换后的语音必须与可见唇动保持对应。现有音视频数据集仅覆盖少数伪造方法与组合，部分管线在替换语音后未同步调整唇动，留下可被利用的失配捷径。已有评测还存在预处理、数据划分、训练配置与指标不一致，以及部分方法缺少可复现训练实现的问题，难以公平比较跨数据集泛化能力。

**核心思路与方法架构：** 与最接近的百万级局部篡改数据集只做语义替换不同，本文增量在于系统化构造堆叠伪造与联合生成管线，并配套统一评测框架。Mega-MMDF 从 VoxCeleb2、MEAD 与 CelebV-HQ 3 个来源选取 100,000 个真实片段，按性别与肤色分成 8 组均衡抽样，全库平均时长 5.16 秒、中位 4.64 秒，再用 5 种文本到语音合成、3 种声音转换、2 种局部篡改、4 种换脸、5 种全脸合成、3 种属性编辑、6 种音频驱动人脸重演与 2 种文本到音视频联合生成共 30 种方法组织成 P0 真实管线与 P1 至 P22 共 22 条伪造管线，总计 1.3 百万片段与 1,864 小时。存储视频含 28 种分辨率，256×256 占 35.41%、1920×1080 占 34.23%、224×224 占 13.51%。基准预处理把视频转到 25 帧每秒、音频转到 16 kHz 单声道，去掉开头 2 帧以削弱前导静音捷径，再按检测器需求切分为 0.64 秒至 4.00 秒窗口，片段级概率取窗口最大值聚合。DeepfakeBench-MM 用同一套加载与增强流程支持 8 个数据集与 10 种检测器，其中 AVH 冻结语音视觉编码器而只训练评分与聚合模块，FRADE 冻结主干而只训练注入与交互模块，统一用 5 个验证集平均实例级曲线下面积选点，并在单张 H100 GPU 上分别训练，从而把多样管线覆盖转化为可比较的训练增益。

**关键实验与核心代价：** 在 8 个测试集平均的片段级曲线下面积（AUC，越高越好 ↑）上，用 Mega-MMDF 训练的 7 种可训练检测器全部取得最高，相对各自次优训练数据提升 0.0085 至 0.0784，其中 AVH 平均 0.8721 最优，FRADE 平均 0.7627 列第二。数据量从 1% 扩至全量时，域内 AUC 提升 0.0420 至 0.1625，跨数据集平均提升 0.0328 至 0.1846，而单管线训练仍留下明显缺口，例如 FGMDF 在 P13 训练后于 P22 仅 0.747。缺失模态以零填充模拟时，音频缺失使 6 种检测器在真实片段上误报率与均方误差同时上升至少 0.05，AVFF 误报率上升 0.957，视频缺失则让 FauForensics 在双伪造片段上漏报率上升 0.863，均方误差上升 0.612。本文未做人工听感主观评测，全部为自动检测指标。构建全量数据估计产生约 3,100 千克二氧化碳当量，训练需单卡 H100 与多验证集选点开销，这是多样性带来的直接代价。

**适用边界与深读导览：** 上述增益仅在完整音视频输入、统一转码与去前 2 帧预处理、窗口最大值聚合及 5 个验证集平均实例级 AUC 选点下成立，一旦音频或视频缺失、视频压缩与降采样与丢帧或音频压缩与丢包与 80 至 320 毫秒音画错位加重，性能会明显退化，而运动模糊、散焦与过曝等采集效应原文明确未评测，复合管线训练也不必然泛化到其孤立子操作，组间阈值差异与排序差异仍需结合检测性能解读。真实片段仅提供来源索引而需经官方渠道获取，发布需申请与签署研究用途协议，覆盖扩展仍列为未来工作。若需深究管线组合图与方法清单可查附录 A.3 至 A.4 与图 28 至图 33，训练超参数与输入配置见表 IX 至表 X，跨管线、公平性与鲁棒性细分结果见第 V 章与附录 B.5 至 B.6。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/SCLBD/DeepfakeBench-MM> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档

- 论文所列链接：<https://huggingface.co/datasets/SCLBD/Mega-MMDF> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/Edresson/YourTTS> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/microsoft/SpeechT5> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/luchaoqi/TalkingHeadBench> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/xyyandxyy/IDForge1515> — 链接不可用（HTTP 404）

- 论文所列链接：<https://github.com/ControlNet/LAV-DF/blob/master/LICENSE1212> — 链接不可用（HTTP 404）

- 论文所列链接：<https://github.com/ControlNet/LAV-DF/blob/master/TERMS_AND_CONDITIONS.md> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/datasets/zaqxsw0526/MMDF> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/DigiFakeAV/DigiFakeAV-v1/blob/main/LICENSE> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 伪造流水线覆盖不足与评测口径不一制约音视频伪造检测

音视频伪造检测的输入是一段同时包含语音波形与人脸视频的短片段，输出是整段为伪造的概率。单模态方法分别检查音频伪影或视觉伪影，多模态方法额外利用唇音同步与语音内容一致性等跨模态线索。现有音视频数据集多只覆盖少数合成路线，训练实现不公开且评测窗口与指标各异，导致在新合成器与多操作组合面前的泛化能力难以公平比较，也让高分结果难以复现。

为了看清覆盖缺口，先阅读横轴为带伪造音频输出的方法数、纵轴为带伪造视频输出的方法数的气泡图。气泡面积表示数据集总规模，颜色区分音频、视频与音视频 3 种模态，同一模态内由深到浅表示最新伪造方法的年份由新到旧。右侧虚线框是对左下密集区的放大，黑色箭头指示放大关系，中央橙色文字点出本文数据集的方法数、流水线数与总量。阅读时先看坐标轴含义与图例，再定位各数据集气泡的相对位置。

[![原论文 Fig. 1：The horizontal and vertical axes indicate the numbers of methods with fake audio and fake visual…](https://arxiv.org/html/2510.22622v3/images/dataset_comparison.png)](https://arxiv.org/html/2510.22622v3/images/dataset_comparison.png)

*论文图 1：气泡图对比各数据集伪造方法数总量与年份，中央大圆为 Mega-MMDF 的覆盖位置（原论文 Fig. 1）。*

图中 Mega-MMDF 以绿色大圆位于中央偏上，横轴约 12 ，纵轴约 20 ，旁注 12 种音频方法、20 种视频方法、22 条伪造流水线与 1,300,000 个片段总量。右侧放大区中 AVDeepfake1M 与 AVDeepfake1M++ 等绿色大气泡横轴仅 2 至 4 ，纵轴仅 1 至 4 。底部蓝色半圆为 ASVspoof 系列与 VoiceWukong 等纯音频集，左侧橙色小圆为 DF40 与 Celeb-DF++ 等纯视频集。这种布局说明既有资源在双模态方法数与堆叠组合覆盖上存在明显空白。

原文把伪造方法定义为执行一次操作的具体生成算法，把伪造流水线定义为这些操作的选择与顺序。单条流水线可只改音频或只改视频，也可先换脸再用语音驱动重演，或由文本直接联合生成音视频。每段素材标注音频真伪与视频真伪，组合成 RARV 、RAFV 、FARV 与 FAFV 4 种类型。由于不同工作训练实现不公开、采样与指标不一致，跨数据集比较难以复现，这正是统一基准要解决的公平性前提。

### Mega-MMDF 以 22 条流水线组织 30 种方法并用统一基准固定评测口径

#### 数据来源与流水线构成

Mega-MMDF 从 VoxCeleb2 、MEAD 与 CelebV-HQ 收集真实音视频，按两种性别与 4 种肤色分成 8 个人口组，每组抽取 12,500 段，共 100,000 个真实片段，该真实子集平均时长为 5.757 秒，区别于后文含 1,200,000 个伪造样本的全库 1,300,000 段总平均时长 5.162 秒。组内真实片段组成不相交的配对，每对提供双向源与目标，用于生成对应伪造变体。配对按 6:2:2 划分训练、验证与测试集，同一配对的真实源与全部伪造派生只出现在同一划分，避免源复用带来的泄露。

22 条流水线覆盖单模态篡改、堆叠伪造与联合生成，音频侧含 5 种文本到语音、3 种声音转换与 2 种局部篡改，视觉侧含 4 种换脸、5 种整脸合成与 3 种属性编辑，另有 6 种音频驱动重演与 2 种文本到音视频联合生成。下表摘录 P0 真实基准、P1 与 P3 等单模态篡改、P5 与 P14 等堆叠组合以及 P22 联合生成的定义，音频伪造、视觉伪造与是否叠加重演三列共同决定 RARV 、RAFV 、FARV 与 FAFV 的类型归属，阅读时先看类型列再对照操作列。

| ID | Audio forgery | Visual forgery | Audio-driven FR | Type |
| --- | --- | --- | --- | --- |
| P0 | Real | Real | – | RARV |
| P1 | Real | FS | – | RAFV |
| P3 | VC | Real | – | FARV |
| P5 | VC | – | ✓ | FAFV |
| P14 | TTS | – | ✓ | FAFV |
| P22 | T2AV | T2AV | – | FAFV |

从摘录可见 P0 为双真对照，P1 只换脸而保留真实音频，P3 只做声音转换而保留真实视频，P5 在声音转换后叠加音频驱动重演，P14 用文本到语音生成新语音再驱动重演，P22 则由文本直接联合生成音视频。这种编排在需要时加入重演以维持语音内容与唇动的可对应，避免无对应修改带来的明显失配。完整 22 条定义覆盖 287,291 个仅视频伪造、80,992 个仅音频伪造与 831,717 个双模态伪造，总计 1,300,000 段、1,864 小时，平均时长为 5.162 秒。

#### 基准模块与评测口径

为固定数据处理与评测口径，DeepfakeBench-MM 把流程拆成 6 个经统一接口连接的模块。上排左右并列预处理与数据加载，预处理把原始数据集转成统一格式的人脸序列与重采样音频，数据加载按检测器配置截取固定时长窗口。下排从左到右依次为检测器、训练、评测与分析模块，分别封装结构与损失、优化与选点、性能与公平性鲁棒性度量以及预测与表征诊断。阅读时先沿从左到右箭头看主数据流，再对照各模块输入输出格式理解扩展点，重点看采样与配置如何解耦。

[![原论文 Fig. 2：Modular Codebase of DeepfakeBench-MM](https://arxiv.org/html/2510.22622v3/images/benchmark_codebase.drawio.png)](https://arxiv.org/html/2510.22622v3/images/benchmark_codebase.drawio.png)

*论文图 2：六模块基准流程展示预处理数据加载与检测训练评测分析的接口分工（原论文 Fig. 2）。*

图中预处理模块包含重采样、人脸检测对齐与介质元数据导出，数据加载模块包含模型输入配置、固定时长采样与训练增强。检测器模块并列主干结构、检测器特有结构与损失函数，训练模块连接训练验证与选中权重，评测模块并列检测性能、公平性与鲁棒性，分析模块并列 t-SNE 、预测直方图与流水线热图。这种分工让 8 个数据集与 10 个检测器共用采样、验证与指标实现，只保留检测器必需的输入差异，便于新增数据集与检测器。

评测覆盖 FakeAVCeleb 、LAV-DF 、PolyGlotFake 、IDForge 与 Mega-MMDF 5 个训练源，以及 TalkingHeadBench 、DigiFakeAV 与 MMDF 共 8 个测试集。每个训练源单独训练，每个检测器在 5 个验证集上取实例级 AUC 均值最高的权重，测试时把同一片段内无重叠窗口的分数取最大值作为片段级分数，标签取窗口标签的最大值。下式给出这种片段级聚合的计算目标，符号含义与统计直觉在公式后说明，理解该聚合对局部篡改召回的影响很关键。

\[P_{c}=\max_{s\in\mathcal{S}_{c}}p_{s},\qquad Y_{c}=\max_{s\in\mathcal{S}_{c}}y_{s},\]

该式对同一片段的窗口集合取预测概率与标签的最大值，伪造片段只要有一个窗口被判伪即判伪。最大值聚合保留局部篡改的强证据，适合局部伪造只占片段一小段的情形，但也会放大单个窗口的误报。基准以片段级 AUC 为主要指标，辅以准确率、等错误率与平均精度，阈值固定为 0.5 ，避免用事后阈值美化跨数据集比较，全部测试片段均参与上述聚合。

### 预处理到检测器损失的端到端张量流与训练冻结边界

#### 1 秒输入的预处理与采样

取 1 秒真实输入为例，原始视频按 25 fps 采样得 25 帧，音频按 16 kHz 单声道采样得 16,000 个采样点。预处理先把视频统一到 25 fps 、音频统一到 16 kHz 单声道 PCM ，跳过开头 2 帧约 80 ms 以削弱起始静音捷径，再逐帧做人脸检测，先用 dlib 正面检测器，失败则用 CNN 检测器。每帧恰检出一张人脸且能提取 68 个关键点才记为有效，保留最长的连续有效序列，要求至少 25 帧即 1 秒，否则整段判为预处理失败并剔除。

对保留序列逐帧用至多 12 帧的滑动窗口平均眼鼻周围关键点，估计到标准人脸的相似变换，对齐到 256×256 的人脸图并变换关键点坐标，音频保留完整波形但记录起止帧索引以便按窗口取对应音频段。数据加载按检测器配置截取固定窗口，例如 AVH 取 25 帧灰度口部 88×88 与 1.00 秒 Log-Mel ，Baseline 取 16 帧 RGB 224×224 步长 1 与 0.64 秒 MFCC ，FGMDF 取 100 帧 RGB 128 与 4.00 秒波形。这种下采样与特征分叉点决定显存与感受野的权衡，原文未披露的中间通道维度如实保留未知，不做推测。

#### 检测器结构与损失冻结

不同检测器在同一接口下保留各自归纳偏置，Baseline 用 3D ResNet-18 与 SE-ResNet 分别编码视频与音频并拼接 MLP 分类，AVH 冻结 AVHuBERT 只训练计分 MLP ，FRADE 冻结共享 ViT-B/16 只训练注入与交互模块，FauForensics 冻结 MEFARG 人脸动作单元提取器，MCL 分两阶段先训练帧教师再冻结。下式以 FGMDF 为例给出联合与单模态监督如何相加，符号与梯度去向在公式后解释，读懂三项分工才能理解多任务监督的作用。

\[\mathcal{L}_{\mathrm{FGMDF}}=\mathcal{L}_{\mathrm{CE}}^{v}+\mathcal{L}_{\mathrm{CE}}^{a}+\mathcal{L}_{\mathrm{CE}}^{av},\]

该式把视频交叉熵、音频交叉熵与音视频联合交叉熵直接相加，三项分别对视觉分支、音频分支与融合头产生梯度。相加形式让单模态伪影与跨模态不一致同时受到监督，避免融合头掩盖某一模态的弱证据。极端下若某一模态恒为真实，对应交叉熵仍会推动该分支输出真实，而联合项保留对组合篡改的敏感性。训练时默认叠加翻转、旋转、模糊、压缩与音频噪声移调增益等增强，验证与测试时关闭，推理对长片段用无重叠滑窗逐段打分再取最大。

### Mega-MMDF 训练在平均 AUC 上领先但跨数据集仍有明显短板

#### 跨数据集平均增益与排名

评测公平性建立在三点上，训练源、验证选点与测试聚合全部统一。7 个需训练检测器分别在 5 个训练集上单独训练，验证取 5 个验证集实例级 AUC 均值最高者，测试在相同 8 个测试集上报告片段级 AUC ，每个数据集权重相等。免训练的 SpeechForensics 与两个 7B 级多模态大模型不经基准微调，直接以冻结权重参与相同测试，避免用不同阈值或窗口策略放大优势，阈值相关指标统一用 0.5 。

下表摘录以 AVH 为例的完整主结果子集，行按训练源区分，列保留 Mega-MMDF 域内、TalkingHeadBench 跨域与八集平均三档。AVH 是平均指标最强的训练检测器，该子集能同时检验换训练源是否改变域内与跨域排序，以及 Mega-MMDF 是否在保持域内高分的同时提升平均值。数值均为片段级 AUC ，越高表示排序能力越好，平均列已在原文中标出最高与次高。

| Detector | Training dataset | Test datasets Mega-MMDF | Test datasets TalkingHeadBench | Test datasets Average |
| --- | --- | --- | --- | --- |
| AVH [29] | FakeAVCeleb [30] | 0.8113 | 0.7285 | 0.8338 |
| AVH [29] | LAV-DF [31] | 0.6396 | 0.6759 | 0.7514 |
| AVH [29] | PolyGlotFake [32] | 0.8315 | 0.7650 | 0.8302 |
| AVH [29] | IDForge [33] | 0.8194 | 0.8551 | 0.8636 |
| AVH [29] | Mega-MMDF (Ours) | 0.9802 | 0.8988 | 0.8721 |

摘录显示用 Mega-MMDF 训练的 AVH 在 Mega-MMDF 上达 0.9802 ，在 TalkingHeadBench 上达 0.8988 ，八集平均达 0.8721 ，三项均高于用 FakeAVCeleb 、LAV-DF 、PolyGlotFake 与 IDForge 训练的对应值。代价是 LAV-DF 测试上仅 0.8293 ，低于直接用 LAV-DF 训练时的 0.9989 ，说明单一训练源无法同时在局部篡改定位集与大规模组合集上占优。这种行内峰值与平均值的背离正是需要多训练源比较的原因，也提示平均增益来自更均衡的覆盖而非单点最优。

把训练源固定为 Mega-MMDF ，再横向比较 10 种方法的八集表现，可看清架构差异带来的收益与短板。下表摘录 Baseline 、AVH 、FRADE 与免训练 SpeechForensics 在 Mega-MMDF 、TalkingHeadBench 、平均排名与平均 AUC 四档的表现，排名数字越小越好，AUC 越大越好。选择这四者是因为它们分别代表简单基线、最强训练模型、次强训练模型与最强免训练对照，覆盖不同技术路线。

| Detector | Mega-MMDF | TalkingHeadBench | Average rank ↓ | Average AUC ↑ |
| --- | --- | --- | --- | --- |
| Baseline | 0.9958 (2) | 0.8802 (4) | 6.250 | 0.6976 (8) |
| AVH [29] | 0.9802 (6) | 0.8988 (3) | 2.000 | 0.8721 (1) |
| FRADE [49] | 0.9963 (1) | 0.9075 (2) | 4.125 | 0.7627 (2) |
| SpeechForensics [26] | 0.7385 (8) | 0.8031 (5) | 5.000 | 0.7301 (4) |

摘录中 AVH 以平均 AUC 0.8721 与平均排名 2.000 居首，FRADE 以 0.7627 居次，SpeechForensics 以 0.7301 列第四，超过多个经 Mega-MMDF 训练的模型，Baseline 以 0.6976 居第八。但最优随测试集而变，FRADE 在 Mega-MMDF 上以 0.9963 领先，AVFF 在 TalkingHeadBench 上以 0.9082 领先，SpeechForensics 在 MMDF 上以 0.8696 领先，DigiFakeAV 上 AVH 仅 0.7080 。这说明平均领先不等于每集领先，跨域短板依然存在，DigiFakeAV 与 MMDF 是多数模型的共同弱项。

#### 数据规模与逐流水线表现

为分离规模与多样性的贡献，基准在保持流水线覆盖的前提下按配对抽取 1% 、2% 、5% 、10% 、20% 、50% 与 100% 的 Mega-MMDF 子集训练 7 个检测器。左图为域内片段级 AUC ，右图为其余七集平均，横轴为可用数据比例对数刻度，纵轴为片段级 AUC ，7 条折线对应 7 个检测器。读图先看横轴从左到右的单调趋势，再比较左右两图斜率与 AVH 高位线的分离程度，重点观察小数据段的波动。

[![原论文 Fig. 3：Effect of Mega-MMDF training data scale on (a) within-dataset detection and (b) cross-dataset…](https://arxiv.org/html/2510.22622v3/images/data_scale.png)](https://arxiv.org/html/2510.22622v3/images/data_scale.png)

*论文图 3：数据量从百分之一增至全量时域内与跨数据集片段级 AUC 随规模上升趋势（原论文 Fig. 3）。*

图中左右两图绝大多数折线随数据量增加而上升，全量训练在域内与跨域均为 7 个检测器最高。域内从 1% 到 100% 提升 0.0420 至 0.1625 ，跨域平均提升 0.0328 至 0.1846 ，其中 FauForensics 跨域在 50% 前长期低于 0.60 ，到全量才跃升至约 0.70 。AVH 跨域始终在 0.80 以上显著高于其他模型，说明规模收益普遍存在但起点与斜率因架构而异，不能把全量平均增益简单归因于某一模型，逐流水线评测进一步揭示覆盖细节。

### 单流水线训练的非对称泛化与缺失模态下的误报漏报

#### 跨流水线泛化结构

为检验单一流水线能否覆盖其他伪造，基准用 FGMDF 、FRADE 与 FauForensics 分别在 22 条流水线上单独训练，再在 22 条流水线上分别测试。热图行表示训练流水线，列表示测试流水线，颜色从深蓝到亮黄表示片段级 AUC 从约 0.3 到 1.0 ，右侧标注视觉伪造分组。读图先按颜色块找高值矩形，再对比对称位置的行列差异以判断双向与非对称关系，特别关注含重演的复合行。

[![原论文 Fig. 5：Cross-pipeline evaluation of FGMDF, FRADE, and FauForensics on Mega-MMDF.](https://arxiv.org/html/2510.22622v3/images/pipeline_transfer_with_definitions_v4.png)](https://arxiv.org/html/2510.22622v3/images/pipeline_transfer_with_definitions_v4.png)

*论文图 5：三种检测器单流水线训练后在全部测试流水线上的跨泛化 AUC 热图（原论文 Fig. 5）。*

图中 3 张热图均出现左上与中右两个亮黄块，分别对应 FS 、EFS+FS 、FS+FR 组内与 EFS+FR 、FE+FR 组内的双向泛化，组内平均 AUC 在 0.912 至 1.000 与 0.959 至 1.000 之间。非对称体现在 P2 训练可达 P7 约 0.946 至 0.995 、P8 约 0.935 至 0.998 ，反向仅 0.559 至 0.677 与 0.601 至 0.666 。T2AV 即 P22 训练行整体偏暗，FGMDF 在 EFS+FR 与 FE+FR 上平均 AUC 分别为 0.858 与 0.848 ，FauForensics 分别为 0.929 与 0.948 ，FRADE 在 EFS+FR 上为 0.860 但在 FE+FR 上仅 0.533 ，说明复合训练不保证拆解为单操作时的检测能力，模型更可能记住流水线级复合伪影。

#### 缺失模态与时间错位

缺失模态测试固定用 Mega-MMDF 训练的权重，在相同测试片段上比较遮蔽前后。缺失音频用全零波形代替，缺失视频用黑帧代替，保持检测器接口与权重不变，只在保留模态仍决定真伪的条件下评价。下表摘录 AVFF 、FRADE 、FauForensics 与 MCL 在真实与伪造组合上的误报与漏报变化，指标为阈值 0.5 下的误报率、漏报率与均方误差变化量，正值表示变差，增量不小于 0.05 视为明显恶化。

| Detector | Mask audio: video retained RARV ΔFPR ↓ | Mask video: audio retained RARV ΔFPR ↓ | Mask video: audio retained FAFV ΔFNR ↓ | Mask video: audio retained FAFV ΔMSE ↓ |
| --- | --- | --- | --- | --- |
| AVFF [23] | +0.957 | +0.842 | −0.009 | +0.012 |
| FRADE [49] | +0.940 | −0.053 | +0.520 | +0.418 |
| FauForensics [56] | +0.012 | −0.033 | +0.863 | +0.612 |
| MCL [50] | +0.899 | −0.014 | +0.013 | +0.015 |

摘录显示音频遮蔽主要推高真实片段误报，AVFF 误报率增加 0.957 ，FRADE 增加 0.940 ，MCL 增加 0.899 ，对应均方误差增量均超 0.70 ，而伪造片段漏报多为负向或微增。视频遮蔽则双向恶化，AVFF 在真实上误报增加 0.842 ，FauForensics 在 FAFV 上漏报增加 0.863 、均方误差增加 0.612 ，FRADE 在 FAFV 上漏报增加 0.520 。这表明零填充不能作为缺失模态的安全回退，强双模态表现不保证单模态可靠性，需设计模态灵活的检测器。

为量化遮蔽前后的概率偏移，基准对每个片段计算预测伪造概率与二值标签的均方误差，以及固定阈值下的误报与漏报变化。下式给出均方误差的计算目标，符号为片段数、预测概率与真伪标签，其变化方向与后续直方图中的错误区域对应。理解该式有助于区分概率漂移幅度与分数越过 0.5 判定边界导致的类别翻转，阈值取 0.5 保持一致。

\[\mathrm{MSE}=\frac{1}{N}\sum_{i=1}^{N}(p_{i}-y_{i})^{2},\]

该式对 N 个片段的平方误差取平均，预测越接近标签误差越小，遮蔽后误差增量为正即变差。与阈值指标相比，均方误差保留概率幅度的连续信息，能捕捉未过阈但向错误方向漂移的情形。时间错位实验进一步在真实片段内循环重配音视频窗口，69.7% 至 85.8% 实例的绝对变化不超过 0.05 ，平均绝对变化为 0.0275 至 0.0615 ，仅 AVH 平均上移 0.0243 ，其余六者净偏移在 -0.0005 至 +0.0005 之间，说明对应扰动幅度小但方向具模型相关性。

### 假设边界、复现核对与何时选用该资源的建议

当前结论成立依赖 3 个前提，一是预处理要求单人脸连续 25 帧以上，多人脸帧被剔除，多人同框与遮挡严重的场景未被评测。二是缺失模态仅用零填充模拟，未训练模态灵活架构，真实丢包的编解码伪影与静音分布可能不同。三是公平性仅按 8 个人口组与固定阈值 0.5 计算，阈值移动或组划分改变会改写差异排序，SpeechForensics 全判真时阈值差异为零但排序差异仍存即为例证。

鲁棒性只覆盖 H.264 、AAC 、降采样、丢帧、音频丢包与音视频偏移 3 级强度，未含运动模糊、失焦与过曝等采集退化，且在 Mega-MMDF 上观察到的压缩敏感性不一定外推到其他七集。人口组标签经多模态大模型初标再人工校正，仍不能穷举人口多样性，隐私移除机制会导致版本间片段构成变化，引用时需记录版本号与移除更新。

复现核对需区分三件事，代码层面 DeepfakeBench-MM 公开模块化实现与配置，权重层面各检测器需按训练源重训而非直接下载统一权重，数据层面 Mega-MMDF 仅提供索引与生成介质，真实源需经 VoxCeleb2 、MEAD 与 CelebV-HQ 官方渠道获取并遵守 CC BY 、非商业等条款，伪造介质需邮件验证与研究用途协议。单次训练使用单个 NVIDIA H100 GPU ，附录给出各检测器优化器、学习率、轮数与批量，附表还列出 30 种方法的来源与热度以供追溯。

工程上若目标是提升跨数据集平均排序能力，用 Mega-MMDF 全量训练是当前证据最强的起点，优先尝试 AVH 与 FRADE ，前者平均最优但对局部篡改集仍弱于专用训练，后者域内峰值高但跨域方差大。若部署面临单麦克风失效或视频丢帧，不应依赖零填充，需补做模态丢弃训练或单模态回退分支，并以误报率与漏报率联合监控而非只看 AUC 。复现第一步建议跑通预处理与固定窗口采样，再用小比例子集验证选点逻辑，最后再全量训练并核对人口组与后处理条件是否与报告一致。

执行过程上预处理与采样逻辑是固定的，先将视频重采样到 25 帧每秒、音频重采样到 16 kHz 单声道，再跳过前 2 帧以削弱起始静音捷径，随后逐帧做人脸检测与 68 点标定，只保留最长连续单人脸序列且要求至少 25 帧，并用至多 12 帧的平滑窗口估计相似变换对齐到 256×256。数据加载按 T×s 帧窗口切分，训练验证每片段至多取 M=2 个实例，训练在分区内随机选窗、验证取分区起点固定窗，测试沿时间放连续非重叠完整窗，片段得分取窗内最大假概率聚合，标签取窗标签最大值。

后处理与公平评测同样按统一流程执行，6 种扰动各设 3 级强度分别单独施加，视频压缩用 H.264 的 CRF 23、30、37，空间下采样按 2/3、4/9、1/3 先缩小再插值回原尺寸，帧丢失与音频丢包按概率 0.05、0.10、0.20 处理，音频压缩用 64、32、16 kb/s 的 AAC 编解码往返，音画偏移引入 80、160、320 ms 视频延迟，比较时保持同一检查点与同一视觉窗。公平性在 Mega-MMDF 测试集上按 8 组以 0.5 阈值计算 DP、EO、OAE、MEO 并用连续分数算组间 AUC 标准差 SDAUC，阈值指标与排序指标需联合解读。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：预处理统一视频 25 fps 与音频 16 kHz 单声道，跳过开头 2 帧约 80 ms，人脸对齐为 256×256，检测器窗口 0.64 秒至 4.00 秒，测试用无重叠窗取最大分数聚合，原文未披露 RTF 与延迟
- **训练与评测数据**：Mega-MMDF 含 100,000 段真实与 1,200,000 段伪造共 1,300,000 段约 1,864 小时，按人口 8 组与配对 6 比 2 比 2 划分，另用 FakeAVCeleb 等 4 集训练与 TalkingHeadBench 等 3 集扩展共 8 集评测
- **算力与训练耗时**：每个训练运行使用单个 NVIDIA H100 GPU，AVFF 与 MCL 含预训练与微调两阶段，其余检测器单阶段训练，原文未披露多卡并行与总耗时
- **核心超参数与配置**：Baseline 与 AVH 用 Adam 学习率 1×10−3，FRADE 用 AdamW 学习率 1×10−5 训练 3 轮，FauForensics 用 AdamP 学习率 5×10−4，阈值固定 0.5，验证取五集实例级 AUC 均值最高权重
- **推理速度与部署开销**：推理对长片段用无重叠固定窗口逐段打分再取最大为片段分，窗口时长因检测器而异，原文未披露 RTF 吞吐显存与参数量
- **开源产物与协议状态**：DeepfakeBench-MM 代码在 GitHub 公开并提供安装推理微调说明，Mega-MMDF 通过 Hugging Face 提供但真实源仅给索引需经原数据集官方渠道获取，伪造介质需邮件验证与研究用途协议
- **附录与补充材料要点**：附录详述伦理与发布政策，30 种方法来源，流水线图解，人口与时长分辨率统计，预处理与加载配置，训练超参，鲁棒性 6 种扰动与公平性 5 项指标及完整跨流水线结果

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2510.22622)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以30种方法组织P0真实与P1至P22共22条伪造管线覆盖四种模态组合，规模达1.3百万片段与1864小时并保留模态级标签与区间。

- 核心优势：同一预处理与多验证集选点下Mega-MMDF训练在7种可训练检测器上均取得8测试集平均AUC最高，数据量与管线覆盖实验支撑多样性价值。

- 核心优势：以共享人脸处理加数据集适配器统一8数据集与10检测器的加载训练评测链路，固定划分与多验证集平均选点减少协议不可比性。

- 主要短板：人口分组仅用2种性别与4种肤色且采集端运动模糊散焦过曝等退化明确未评测，覆盖与公平外推边界受限。

- 主要短板：数据集受控访问且许可证未声明，真实媒体仅提供来源索引需经官方渠道获取，开放完整度受限。

---

[← 返回 2026-11-26 音频研究日报](/audio-research-portal/posts/2026-11-26/)
