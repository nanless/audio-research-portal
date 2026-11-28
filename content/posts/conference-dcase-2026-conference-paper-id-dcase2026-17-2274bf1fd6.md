---
title: "Anomalous Sound Detection Meets Noise-Aware Self-Supervised Learning"
date: 2026-11-28
draft: false
description: "针对工厂强噪声下自监督表示易混入噪声而难以聚焦机器声的问题，本文以远端麦克风为条件做双通道蒸馏去噪，在三款基座与多种后端上提升开发集分数并以 70.24% 获得挑战赛第一，代价是依赖仿真双通道覆盖与多次集成来稳定较大方差。"
tags: ["知识蒸馏", "自监督学习", "多通道", "异常声音检测"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "噪声感知自监督学习如何借远端麦克风提升异常声音检测"
paper_digest_original_title: "Anomalous Sound Detection Meets Noise-Aware Self-Supervised Learning"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-17"
paper_digest_workbench_source_sha256: "ccac658d6fe9e8e64e042ec642af73f3de0938457a2c4d7eb0ba2eb93a836009"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Fujimura_17.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "异常声音检测"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对工厂强噪声下自监督表示易混入噪声而难以聚焦机器声的问题，本文以远端麦克风为条件做双通道蒸馏去噪，在三款基座与多种后端上提升开发集分数并以 70.24% 获得挑战赛第一，代价是依赖仿真双通道覆盖与多次集成来稳定较大方差。"
paper_digest_reader_sections: [{"heading":"工厂强噪声下仅用单通道表示为何难以检出机器异常","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"以远端含噪信号为条件的双分支表示蒸馏总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"交叉注意力去噪层与双通道房间仿真如何构造训练对","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"冻结蒸馏预训练与判别微调的参数更新边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"三款基座与多种后端下条件去噪的增益与挑战赛第一","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"仿真到实厂部署之间仍需验证的前提与复现清单","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA","Nagoya University, Nagoya, Japan"],"name":"Takuya Fujimura"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Gordon Wichern"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Yoshiki Masuyama"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Christoph Boeddeker"},{"affiliations":["Information Technology R&D Center, Mitsubishi Electric Corporation, Kanagawa, Japan"],"name":"Kohei Saijo"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Julius Richter"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Takahiro Edo"},{"affiliations":["Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA"],"name":"Jonathan Le Roux"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"81c595b3ca2fc59440ef43385010ce9420bc6facd67587cd7805730fc2fa7a0c","url":"/audio-research-portal/client/papers/2026-11-28/conference-2274bf1fd67f5cccd7542304/citation.bib"},"citation.json":{"sha256":"66a5f4d925b8dedb152a8961f9c22fc15829cb4bb57dee3ea5e416db9e43981f","url":"/audio-research-portal/client/papers/2026-11-28/conference-2274bf1fd67f5cccd7542304/citation.json"},"citation.ris":{"sha256":"09f8933a08c9df446967ed8dbbe75f3d62c2615f6668c822d7dd2a8346793c46","url":"/audio-research-portal/client/papers/2026-11-28/conference-2274bf1fd67f5cccd7542304/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d6568e392a262688a44cac501de05f6f3fd863ebe38941e3c1c4946c123af6b5","url":"/audio-research-portal/client/papers/2026-11-28/conference-2274bf1fd67f5cccd7542304/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-17"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Fujimura_17.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "b6722a749ab73e9f2fa1f67d1e7488262857eb40d14a21f75ae43e676ace0e6b"
paper_digest_api_reader_plan_sha256: "a79d978f9029203d5bee0c73dc343379d200cdefad15cb5993641bffac9caa87"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5e24fea87eadaeb025ff63f37d99c88e6b28b38d6cf200bbd89056497dd083ca"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c8b42c2c285449c2eedf95c94bc787fd3490a6b7be7a3660eaf577157ef63056"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "32277f18f5c2976a4ef253c2d1497aed6d5943090863a07946bcc01d999e7496"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "afeb017a400fe02a570c48c25644d10f7593397caf78e0be3c712116e094455f"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"setting","id":"setting.multichannel","label":"多通道"},{"facet":"task","id":"task.anomaly-detection","label":"异常声音检测"}]
paper_digest_primary_method: "自监督学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 噪声感知自监督学习如何借远端麦克风提升异常声音检测

> 英文题目：*Anomalous Sound Detection Meets Noise-Aware Self-Supervised Learning*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-17`
> Track：P2-10




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Fujimura_17.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[异常声音检测](/audio-research-portal/papers/?concept=task.anomaly-detection)
- **研究方法**：[知识蒸馏](/audio-research-portal/papers/?concept=method.distillation)；[自监督学习](/audio-research-portal/papers/?concept=method.self-supervised)
- **研究条件**：[多通道](/audio-research-portal/papers/?concept=setting.multichannel)

<!--paper-tag-hierarchy-v1:end-->

评分：**7.2/10** | 创新 7.7/10 | 技术严谨 6.5/10 | 实验充分 8.1/10 | 清晰度 6.9/10 | 影响力 7.2/10 | 开源 0.0/10 | 可复现 7.1/10 | 工程/实践 5.2/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Takuya Fujimura：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA；Nagoya University, Nagoya, Japan
- Gordon Wichern：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA
- Yoshiki Masuyama：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA
- Christoph Boeddeker：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA
- Kohei Saijo：Information Technology R&D Center, Mitsubishi Electric Corporation, Kanagawa, Japan
- Julius Richter：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA
- Takahiro Edo：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA
- Jonathan Le Roux：Mitsubishi Electric Research Laboratories (MERL), Cambridge, USA

## 📌 核心摘要

**问题与瓶颈：** 噪声感知异常声音检测以双通道录音为输入，近麦克风贴近目标机器并混入强背景噪声，远麦克风以噪声为主但仍混入少量目标声，输出为整段样本的异常分数。现有基于 BEATs 、 EAT 与 Dasheng 等自监督表示的免训练或微调框架直接对含噪表示求距离，背景噪声同样被编码进表示空间，导致正常变异被误判为异常。WavLM 式专用去噪需要干净目标声，而异常检测训练仅有正常含噪样本且无法获得干净机器声，因而难以直接套用。

**核心思路与方法架构：** 与直接使用原始自监督表示相比，增量在于冻结原始主干并在每层后插入可训练噪声感知层，以远麦信号为辅助噪声条件蒸馏出干净表示。16 kHz 双通道输入经梅尔频谱分块后形成 L × D 表示序列，双通道共享同一 12 层 Transformer 编码器，噪声感知层以 RMSNorm 后的近麦表示为查询、远麦表示为键值做 8 头跨注意力，再经 SwiGLU 前馈网络提炼，隐层维度为 2304，训练目标是逼近冻结模型对 50 ms 内早期反射干净声的表示。输出估计表示与原始格式一致，可直接替换后端输入，判别微调阶段再以 LoRA 同时更新主干注意力与跨注意力，直击噪声耦合根因。

**关键实验与核心代价：** 在 DCASE 2026 Challenge Task 2 开发集与评估集上，以官方分数即 p = 0.1 的部分 AUC 与源域 AUC 、目标域 AUC 的调和平均为指标，判别微调后的 NA-BEATs 在评估集上取得 70.24%，高于第二名系统的 65.46% 并高于官方基线的 59.80%，开发集上原文报告对 valveEmu 带来超 20% 的提升且在 3 种主干上均成立。关键消融显示对噪声感知层加 LoRA 微调总体更优，但 Dasheng 上去 LoRA 反而略高，3 次随机种子的方差较大而集成后更稳定，主要代价为双通道编码与逐层跨注意力带来的额外计算，原文未披露 GPU 型号与延迟吞吐实测。

**适用边界与深读导览：** 结论依赖远麦信号能提供主导噪声信息且仿真房间与信噪比范围能覆盖下游条件的假设，在远麦同样强目标声或强混响移动噪声下是否成立未经验证，也未评估流式与端侧部署约束。需深究蒸馏公式与层内数据流可查下方方法概述和架构，需核对跨主干与跨后端泛化及 LoRA 消融可查下方实验结果。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 工厂强噪声下仅用单通道表示为何难以检出机器异常

异常声音检测的目标是在仅能收集到正常机器声音的条件下，发现罕见的机械故障声音。工厂环境在训练与测试阶段都存在强背景噪声，噪声会掩盖细微的异常成分，也会让正常样本在不同噪声组合下产生大幅表示漂移。系统只能用正常声音建模正常流形，测试时依靠与正常表示的距离给出异常分数，噪声越重，正常与异常的边界越模糊。

为此，DCASE 2026 挑战赛任务 2 引入噪声感知异常检测任务，采用双麦克风记录。近端麦克风固定在距离目标声源 0.05 m 处，以目标声音为主，远端麦克风随机放置在 0.1 m 至 1.0 m 外，以背景噪声为主。虽然远端信号仍可能混入较弱的目标声音，但目标成分占比明显更低，因而可作为有用的辅助噪声信息。这种布置把噪声信息以辅助通道的形式显式提供，期望模型利用通道间目标与噪声占比的差异，聚焦近端通道中的机器成分。

近年主流做法是以音频自监督学习模型做前端，如 BEATs、EAT 和 Dasheng，直接输出表示序列，再用距离型后端打分。BEATs 采用离散标记空间的掩码预测与迭代蒸馏，EAT 采用掩码自举重构并引入全局标记与话语级损失，Dasheng 采用掩码自编码器并在 272,000 小时多样音频上训练。三者均把输入转换为表示序列 \(r\)，其长度对应频谱切块或片段数量，维度对应表示维度，可直接参与后端距离计算。这些表示能捕捉正常与异常的细微差别，但在强噪声下会把无关噪声一并编码，导致正常变体也被判为异常。

一种思路是对特定机器做去噪训练，但它需要干净的目标机器声音做监督，而异常检测任务恰恰没有干净的机器声音可用。本文的噪声感知自监督学习框架改为做条件去噪，预训练只用 FSD50K 等外部干净声音做目标，不用干净机器声音，通过仿真双通道含噪信号，让模型以远端含噪信号为条件，还原近端信号对应的干净表示，供下游检测直接使用。训练时冻结原始模型提取干净目标表示，含噪双通道经共享权重的原始模型与可训练噪声感知层得到估计表示，两者以均方误差对齐。噪声感知层位于每个变换器层之后，以交叉注意力融合远端噪声表示来修正近端表示，输出格式与原始模型一致，可直接接入已有后端。

### 以远端含噪信号为条件的双分支表示蒸馏总览

与直接使用原始自监督表示相比，本文的实质增量是在冻结的基座后插入可训练的条件去噪层，并用双通道仿真构造监督对。BEATs 、EAT 与 Dasheng 均保留原有的投影层与 12 层 Transformer 结构，近端与远端信号共享同一套基座权重，每层之后用去噪层只精修近端分支。训练信号统一重采样至 16 kHz 并裁剪或补零至 10 s ，评测录音为 6 s 至 16 s 的双通道信号，干净目标定义为近端经 50 ms 内早期反射的房间冲激响应得到的信号。

要理解条件去噪如何组织成可训练的流程，可先看总体结构示意，重点沿箭头追踪近端与远端两路的进入位置、共享权重的复用点、逐层交替的去噪插入方式，以及底部均方误差的监督来源与输出格式，这有助于在后续追踪张量形状与冻结边界时保持方向。

[![原论文 Figure 1：Overview of NA-SSL, adapted from \[15\].](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-1.png)

*论文图 1：噪声感知自监督总体结构：双分支共享基座与逐层去噪，以干净表示为目标做均方误差蒸馏（原论文 Figure 1）。*

原图左侧橙色框为噪声感知自监督模型，顶部同时输入含噪远端记录与含噪近端记录，分别经过带雪花标记的冻结投影与编码器，虚线框内 N× 表示编码器与粉色去噪层逐层交替。黑色弧线表示近端与远端共享权重，粉色去噪层带火焰标记为唯一可训练部分，输出估计的干净表示。右侧灰色柱为冻结的原始自监督模型，仅输入干净目标并输出目标表示，底部以 MSE (均方误差) 拉近两者。

教学例子：取 1 s 的 16 kHz 近端片段与同步远端片段，模型先将波形转为梅尔谱块或段序列，再得到 \(L \times D\) 表示序列，其中 \(L\) 为块或段数，\(D\) 为表示维度，原文未披露具体数值。双分支在每一层后交互，最终输出与原始模型同格式的估计干净序列 \(\hat{r}\) ，可直接替换后端输入，并兼容频率保持、BEAM 与相对偏差池化等后端，也支持在其上继续做判别微调。

### 交叉注意力去噪层与双通道房间仿真如何构造训练对

去噪层的核心是利用远端噪声表示来修正近端目标表示，而不是直接在波形上做增强。近端与远端先各自通过冻结的基座层得到中间表示，记为近端表示与远端表示，去噪层以近端为查询，以远端为键与值做多头交叉注意力，再经过基于门控单元的前馈网络精修。这种逐层精修让噪声信息在每一层都有机会被减除，同时保留目标机器的细微结构。

#### 注意力查询方向与参数规模

具体计算先对查询与键值分别做均方根归一化，再做残差式交叉注意力与前馈更新。原文对三款基座采用相同配置，多头交叉注意力为 8 个头，前馈隐藏维度为 2,304 ，每一层 Transformer 后都插入一个去噪层。基座在双通道间共享，只有近端分支被去噪层改写，远端分支仅提供噪声上下文，这种不对称设计使微调时去噪层能专门适配以目标为主的近端表示。

仿真房间的几何决定了 2 通道的信噪差异，为建立直觉，可先看房间俯视示意，重点核对目标源、近端与远端麦克风的相对距离，四角噪声源的摆放与走廊宽度，以及房间宽长高与混响时间的随机范围，这些几何约束直接决定了训练中目标与噪声在 2 通道的占比差。

[![原论文 Figure 2：Room geometry for simulation. The room height is sampled from U(1.5, 3.0) m, and all sources and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-2.png)

*论文图 2：双通道仿真房间俯视几何：目标与近端相距很近，远端与噪声源位置随机以构造通道差异（原论文 Figure 2）。*

原图为矩形房间俯视图，中央偏下灰色圆为目标源 T ，右侧白圆为近端麦克风 C ，两者相距 0.05 m ，左上白圆为远端麦克风 F ，与目标距离在 0.1 m 至 1.0 m 间随机。4 个角各有一个噪声源图标，距墙角走廊 0.2 m 与 0.5 m ，房间宽在 3.0 m 至 8.0 m 间随机，右侧标注长在 3.0 m 至 8.0 m 间随机。原文正文另补充房高在 1.5 m 至 3.0 m 间随机，全部声源与麦克风高度均为 1.0 m ，混响时间在 0.1 s 至 0.4 s 间随机，这些在俯视像素中无对应标注。

#### 仿真数据的来源与信噪覆盖

教学例子：仍取 1 s 片段，按 16 kHz 计算对应 16,000 个采样点，目标声音来自 FSD50K ，噪声从 WHAM! 48 kHz 、DEMAND 与 QUT-NOISE 中随机抽取 4 段分别放在四角，经 Pyroomacoustics 生成房间冲激响应后混合，近端信噪比在 -10 dB 至 10 dB 间随机。原文未披露梅尔谱帧长与步长、块划分与 \(D\) 的具体数值，因此无法进一步给出每帧张量的精确形状，只能确认输出保持 \(L \times D\) 序列格式以兼容原后端。

### 冻结蒸馏预训练与判别微调的参数更新边界

预训练采用蒸馏式 MSE (均方误差) ，冻结的原始模型对干净目标输出目标序列 \(r\) ，待训练的噪声感知模型对近端含噪与远端含噪输出估计序列 \(\hat{r}\) ，损失拉近两者。对输出全局标记的 EAT ，序列与全局标记采用等权重的均方误差。训练共 200 个周期，采用 AdamW 优化器，固定学习率 0.0001 ，批大小 160 ，在 20,000 步后启用衰减率为 0.999 的指数滑动平均，以稳定去噪层的更新。

判别微调在估计的干净表示之上进行，标签来自机器类型、领域与细粒度属性。对无属性标签的机器类型，用同一模型提取的频率保持表示做 k 均值聚类生成伪属性标签，源域聚类数设为样本数的 0.8% ，目标域在每种机器内统一为单个目标域类。表示序列经注意力统计池化与线性层压缩为 256 维判别特征做分类训练，但后端仍使用池化前的序列，以保留频率与时间结构。

微调时原始注意力中的查询、键与值投影加入秩为 64 的 LoRA (低秩适配) ，交叉注意力同样加入相同配置，去噪层与基座一同更新。分类采用 16 个子簇的子簇自适应余弦损失，混合增强概率为 0.5 ，批大小为 8 ，学习率在前 5,000 步从 0 线性升至 0.0001 ，共微调 25 个周期。后端用余弦距离计算异常分数，并以 4 近邻的方差最小化重缩放缓解源域与目标域间 99% 与 1% 的数据不平衡。

推理时无需干净目标，只需同步输入双通道测试录音，共享基座提取双路表示，去噪层逐层精修近端分支并输出估计干净序列，再经频率保持、BEAM 或相对偏差池化聚合打分。原文未披露流式分块、前瞻窗口、采样步数、RTF (实时因子) 、TTFA 与显存占用，3 个基座均为离线整句处理，去噪层带来额外交叉注意力与前馈开销，但原文未量化其延迟与参数增量。

### 三款基座与多种后端下条件去噪的增益与挑战赛第一

评测采用 DCASE 2026 挑战赛任务 2 数据，由 ToyADMOS2 与 MIMII DG 构成。开发集含 7 种机器，评测集含 5 种机器，每种机器有 1,000 个正常训练样本与 200 个测试样本，训练中 99% 来自源域、1% 来自目标域，部分机器才有属性标签。官方分数为三项 AUC (曲线下面积) 的调和平均：两侧域混合的 pAUC (部分曲线下面积) 取误报率 0.1 ，以及源域与目标域各自的 AUC 。开发集结果为 3 次随机种子的均值与 95% 置信区间，并以异常分数平均做集成。

#### 精简结果表的横向趋势

下表为原文 Table 2 的精简子集，仅保留全局平均池化与两种相对偏差池化后端，以对比原始表示与去噪加微调组合在三款基座上的变化，完整 Table 2 的其余后端列本精简表未列出，阅读时请以基座分组理解空单元格的归属。

| Base | Method | Global AP | Freq RDP (4) +BEAM | Freq RDP (8) +BEAM |
| --- | --- | --- | --- | --- |
|  | Original | 57.16 | 61.32 | 62.02 |
|  | Dis NA | 60.96 | 64.32 | 64.35 |
|  |  | (2.42) | (0.77) | (1.44) |
|  | Original | 55.56 | 59.27 | 57.49 |
|  | Dis NA | 62.80 | 63.88 | 63.12 |
|  |  | (1.46) | (0.30) | (2.36) |
|  | Original | 56.66 | 56.98 | 57.07 |
|  | Dis NA | 61.72 | 61.93 | 62.63 |
|  |  | (2.53) | (2.13) | (1.89) |

精简表内，BEATs 原始在全局平均池化为 57.16 ，在频率相对偏差池化加 BEAM 在伽马为 4 时为 61.32 ，伽马为 8 时为 62.02 ，而去噪加微调对应为 60.96 、64.32 与 64.35 ，其中后两者的置信区间分别为 0.77 与 1.44 。EAT 去噪加微调在三列为 62.80 、63.88 与 63.12 ，Dasheng 去噪加微调为 61.72 、61.93 与 62.63 ，均高于各自原始的 55.56 、59.27 、57.49 与 56.66 、56.98 、57.07 。趋势上 BEAM 带来明显提升，伽马增大对 BEATs 与 Dasheng 更有利，对 EAT 增益较小，这与原文引用的已有发现一致。原文完整 Table 1 (本精简表未列出) 还显示阀门类提升超过 20% ，且微调对无属性标签机器仍有效，但方差较大需集成。

#### 挑战赛评测的领先幅度

为判断开发集增益能否推广到未见机器，可对照评测集柱状图的排序与分差，重点看红色柱与灰色柱的高度、纵轴起点是否截断、柱内百分比标注的数值，以及官方参照柱与优胜系统柱之间的整体落差。

[![原论文 Figure 3：Comparison of our Dis NA-BEATs with the ten top-performing systems and the official baseline…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/d95a437465ae/figure-3.png)

*论文图 3：评测集官方分数柱状对比：单基座单后端系统以 70.24% 领先其余优胜系统与官方参照（原论文 Figure 3）。*

原图纵轴为官方分数，下限约 59 ，上限超过 70 ，其中官方参照柱 59.80% 低于 60 刻度线。横轴从左至右为本文判别微调去噪 BEATs 红色柱、编号 34 至 42 对应的 9 根灰色柱与官方参照柱，共 11 根柱。红色柱标注 70.24% ，高于第 2 名 65.46% 与官方参照 59.80% ，其余灰色柱在 62.36% 至 65.45% 间自左向右下降。原文称与 10 个优胜系统对比，原文如此报告，存在字面算术出入，原文未解释，因编号 34 至 42 仅对应 9 个系统，像素亦仅显示 9 根灰色柱。原文指出该系统在 175 个提交中排名第 1 ，且仅用单个基座与单个后端，其他基于 BEATs 的系统也被超越。

代价与例外同样清晰。去噪模型的 3 次试验方差偏高，如 Dasheng 去噪在全局平均池化的置信区间达 3.71 ，必须依靠分数平均集成稳定结果。相对偏差池化对 EAT 几乎无增益，Dasheng 因按段提取表示，其频率保持表示与全局表示相同，相关两列以横线缺失表示。评测仅用曲线下面积类指标，未安排人工听测，主观质量与神经代理指标的对应关系不在验证范围内。

### 仿真到实厂部署之间仍需验证的前提与复现清单

该方法的成立依赖 3 个前提。其一，远端信号以噪声为主但仍含较弱目标，模型靠通道间占比差做条件去噪，若远端完全无目标或目标与噪声完全重叠，条件信息将失效。其二，干净目标被定义为含 50 ms 内早期反射的近端信号，而非消声室干声，混响尾与仿真外噪声未被显式建模。其三，预训练的房间尺寸、混响、信噪比与噪声源位置覆盖有限，真实工厂的机器布局与非平稳噪声可能超出仿真分布。

未验证的范围包括真实双麦克风的安装误差、目标与远端距离变化、长时间运行的域漂移，以及 6 s 至 16 s 外更长录音的稳定性。评测完全基于官方分数这类阈值无关的排序指标，未报告按机器的虚警与漏检分布，也未安排人工听测，无法说明去噪表示在人耳感知层面的可懂度或异常可闻性。Dasheng 的频率维度缺失也意味着部分后端在其上不可用，选型时需注意表示结构差异。

复现层面，原文披露了数据来源与超参，但本次未发现经验证可用的作者代码、权重或演示链接，因此应按原文未披露公开状态处理。训练数据中 FSD50K 、WHAM! 48 kHz 、DEMAND 与 QUT-NOISE 为公开数据集，DCASE 2026 开发集与评测集按挑战赛发布，仿真依赖 Pyroomacoustics ，随机种子影响较大，原文以 3 次试验的均值、置信区间与集成为准，单次运行难以复现相同分数。

工程选型上，若已有双通道采集且远端确实以噪声为主，优先尝试去噪加判别微调的组合，并固定使用 BEAM 与相对偏差池化中伽马为 4 的后端，再以 3 次集成稳定方差。若只有单通道或远端不可靠，该框架的条件输入不再成立，不宜直接套用。对计算受限场景，需自行实测交叉注意力带来的延迟与显存增量，原文未给出 RTF 与延迟数据，不宜默认其可实时运行。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，训练统一裁剪或补零至 10 s，评测为 6 s 至 16 s 双通道，近端距目标 0.05 m，远端距目标 0.1 m 至 1.0 m，房间高 1.5 m 至 3.0 m，声源与麦克风高 1.0 m，目标距墙留 0.5 m，4 路噪声置于距墙角 0.2 m 处，混响 0.1 s 至 0.4 s，信噪比 -10 dB 至 10 dB，干净目标取 50 ms 内早期反射，原文未披露帧长步长与表示维度，推理延迟与 RTF （实时因子）未披露
- **训练与评测数据**：目标声来自 FSD50K，噪声来自 WHAM! 48 kHz、DEMAND 与 QUT-NOISE，评测用 DCASE 2026 挑战赛任务 2 数据，由 ToyADMOS2 与 MIMII DG 整理，开发集 7 种机器，评测集 5 种机器，每种 1,000 训练与 200 测试，训练 99% 源域与 1% 目标域，属性标签仅部分机器训练数据可用，缺失类型采用聚类伪标签
- **算力与训练耗时**：原文未披露 GPU 与 CPU 型号数量、内存配置与训练耗时，仅给出优化器批大小与周期配置，本次未发现可验证可用资源，硬件成本无法核算
- **核心超参数与配置**：去噪层 8 头隐藏 2,304，预训练 200 周期 AdamW 学习率 0.0001 批大小 160，指数滑动平均 20k 步后衰减率 0.999，微调 25 周期子簇自适应余弦 16 子簇混合概率 0.5 批大小 8，学习率 0 至 0.0001 前 5,000 步线性上升，低秩适配秩 64 作用于注意力查询键值投影与交叉注意力，池化 256 维，聚类取样本数 0.8%，重缩放取 4 近邻，余弦距离计分，后端组合 BEAM 与相对偏差池化
- **推理速度与部署开销**：原文未披露 RTF （实时因子）、延迟吞吐与显存，去噪层增加交叉注意力与前馈开销但未量化，推理为整句离线处理，未说明流式与前瞻，后端计分与三轮异常分数平均集成开销原文未量化
- **开源产物与协议状态**：原文未给出代码权重数据下载链接，本次未发现来源绑定且完成验证的可用资源，不可视为已公开，需按未披露处理，第三方链接仅证明提及不证明开源
- **附录与补充材料要点**：原文未设附录，关键细节均在正文，含房间仿真参数伪标签生成后端组合与挑战赛对照，开发集三轮均值与置信区间及集成结果并列，失效案例仅提及方差偏高需集成

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**7.2/10** | 创新 7.7/10 | 技术严谨 6.5/10 | 实验充分 8.1/10 | 清晰度 6.9/10 | 影响力 7.2/10 | 开源 0.0/10 | 可复现 7.1/10 | 工程/实践 5.2/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-17`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Fujimura_17.pdf)
- Track：P2-10

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：评估集单主干单后端以70.24%夺冠，领先第二名65.46%与基线59.80%，在175个提交中优势明确。

- 核心优势：冻结主干逐层插入8头跨注意力与SwiGLU噪声感知层，以远麦为条件蒸馏50ms早期反射干净表示，三主干通用。

- 核心优势：开发集三主干NA与Dis NA均较原始基线提升，并含BEAM与RDP多后端及NA层LoRA直接消融对照。

- 主要短板：三次随机种子方差较大且Dasheng上去LoRA反而略高，单次训练稳定性不足而依赖集成平均。

- 主要短板：结论依赖远麦主导噪声与仿真房间信噪比覆盖假设，强混响移动噪声与远麦强目标声鲁棒性未经验证。

- 主要短板：双通道编码与逐层跨注意力带来额外计算，却未披露GPU型号与延迟吞吐等部署实测数据。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
