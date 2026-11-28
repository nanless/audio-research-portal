---
title: "Domain-Agnostic Incremental Learning for Sound Classification. A DCASE 2026 Challenge task"
date: 2026-11-27
draft: false
description: "DCASE 2026 首次把 10 个类别在 D1、D2 和 D3 共 3 个域上按序学习且推理时不给域标签作为竞赛任务，要求在不看旧域数据下兼顾保持与可塑，基线用域专用批量归一化加熵选路由实现三域平均 60.3%，而头部专家冻结加原型路由做到 79.6%，代价是 D3 仍显著偏低且路由精度成为主要瓶颈。"
tags: ["基准测试", "数据集", "持续学习", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "无域标签下连续学会三域同类声音：DCASE 2026 增量分类任务解读"
paper_digest_original_title: "Domain-Agnostic Incremental Learning for Sound Classification. A DCASE 2026 Challenge task"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-44"
paper_digest_workbench_source_sha256: "cc453a2693660a0cf3c764f8bf18974c47546b10a37b6cf7966b8e8c5bdcb6cb"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Casciotti_44.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "DCASE 2026 首次把 10 个类别在 D1、D2 和 D3 共 3 个域上按序学习且推理时不给域标签作为竞赛任务，要求在不看旧域数据下兼顾保持与可塑，基线用域专用批量归一化加熵选路由实现三域平均 60.3%，而头部专家冻结加原型路由做到 79.6%，代价是 D3 仍显著偏低且路由精度成为主要瓶颈。"
paper_digest_reader_sections: [{"heading":"同类声音跨域递进时为何不能只做单域分类","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"三域递进学习与无域标签推理的任务闭环","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结卷积加域专用批量归一化与熵选路由的基线设计","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三域平均排序与第三域显著下滑的总体格局","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"保持与可塑配比及路由容量如何拉开差距","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"路由瓶颈与复现前提下的工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Signal Processing Research Centre, Tampere University, Finland"],"name":"Riccardo Casciotti"},{"affiliations":["Department of Electronic Systems, Aalborg University, Denmark"],"name":"Manjunath Mulimani"},{"affiliations":["Signal Processing Research Centre, Tampere University, Finland"],"name":"Manu Harju"},{"affiliations":["Department of Electronic Systems, Aalborg University, Denmark"],"name":"Jesper Rindom Jensen"},{"affiliations":["Signal Processing Research Centre, Tampere University, Finland"],"name":"Annamaria Mesaros"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"8cd5ec66ff75db13c188d6f372a7ed8605775bb0bfdebed8889905a0c5aef4f8","url":"/audio-research-portal/client/papers/2026-11-27/conference-1bcc33cf3b54914a4cf54794/citation.bib"},"citation.json":{"sha256":"736ee2ca07a113aca86513bcc0acb8dbbe314608482defcfff4ba073b0301a67","url":"/audio-research-portal/client/papers/2026-11-27/conference-1bcc33cf3b54914a4cf54794/citation.json"},"citation.ris":{"sha256":"d98059cdb0a31b9f716a41729f448dfbb5b3bd3d1cdcba538acb14e1538052f7","url":"/audio-research-portal/client/papers/2026-11-27/conference-1bcc33cf3b54914a4cf54794/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1b45e8be146d861bcd833ef5ebbf36f9ba1b8b97de98c92597b9c2f622341e5e","url":"/audio-research-portal/client/papers/2026-11-27/conference-1bcc33cf3b54914a4cf54794/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-44"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Casciotti_44.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "63e5fd08251822931d21aab35f59b3c142266836248e8e09df48d00a15db86e3"
paper_digest_api_reader_plan_sha256: "ba172dd18bdee074eda3a28b503e0790040ff26b902698bbedc8b6022d2dd0a9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e5ef9f0a2604e40947caf05ce35eaed5ec233a6a4524333cfc67528fee35af2e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4e09dcaa3e15ff78439ba835cc4aa5646a10c6f427826f497de788712191f576"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c808295cc7dd852d382a5b2ae3b0620920e97774d47e0d14c5f5b49108e076d6"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "持续学习"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 无域标签下连续学会三域同类声音：DCASE 2026 增量分类任务解读

> 英文题目：*Domain-Agnostic Incremental Learning for Sound Classification. A DCASE 2026 Challenge task*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-44`
> Track：P3-2



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Casciotti_44.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[持续学习](/audio-research-portal/papers/?concept=method.continual)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 6.6/10 | 技术严谨 7.2/10 | 实验充分 7.7/10 | 清晰度 5.4/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.7/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Riccardo Casciotti：Signal Processing Research Centre, Tampere University, Finland
- Manjunath Mulimani：Department of Electronic Systems, Aalborg University, Denmark
- Manu Harju：Signal Processing Research Centre, Tampere University, Finland
- Jesper Rindom Jensen：Department of Electronic Systems, Aalborg University, Denmark
- Annamaria Mesaros：Signal Processing Research Centre, Tampere University, Finland

## 📌 核心摘要

**问题与瓶颈：** 任务输入为重采样至 32 kHz 的音频片段，统一切分为 4 秒片段后提取 64 个梅尔带对数能量特征，输出为 10 个声音类别中的单标签，类别覆盖警报、婴儿哭声、犬吠、引擎、火焰、脚步声、敲门声、电话铃声、钢琴与语音。学习按 D1 域、D2 域与 D3 域三个声学域顺序进行，每个增量阶段仅可见当前域数据且推理时不提供域标签，要求在学习新域的同时保持旧域性能。直接微调因共享参数被新分布覆盖而产生灾难性遗忘，域感知路线依赖推理时已知域身份而在实际部署中不可用，根本困难在于分布偏移下的参数干扰与无域先验时的模型选择不确定性。

**核心思路与方法架构：** 与仅做源到目标单次适配且保留源数据、只考核目标域的域适应路线相比，本文将问题改为多域顺序增量且无旧数据访问、按三域平均考核的域不可知增量学习（domain-agnostic incremental learning, DAIL），增量在于保留旧知识而非仅迁移。骨干与大规模预训练音频神经网络（Pretrained Audio Neural Networks, PANNs）中 CNN14 结构相同，为 6 个卷积块，每个块含 2 个卷积层与 1 个 BN 层，再经全局池化与 softmax 分类器输出 10 类概率。基线保留 D1 域训练得到的共享卷积，主要为 D2 域与 D3 域各自适配专用 BN 层，增量阶段学习率由 0.0001 降至 0.00001，推理时将同一输入分别经各域共享加专用分支前向得到多组概率并计算熵 \(H = -\sum_{c} p_{c} \log p_{c}\)，选熵最小分支为最终决策，以此应对无域标签时的选择难题。

**关键实验与核心代价：** 在 DCASE 2026 评估集上按三域等权平均准确率（average accuracy, 越高越好 ↑）比较，第一名 Park GIST-HanwhaVision 系统 79.6% 高于基线系统 60.3%，开发阶段域不可知推理两域平均 52.5% 低于用正确 BN 分支的任务依赖上确界 63.8%，证实路由估计为主要瓶颈而非单纯遗忘。评估显示域 3 分布偏移最大，多数中低排名系统在该域仅约 50% 上下，混淆集中于火焰、电话铃声、语音与婴儿哭声网格，顶级系统通过冻结专家、域隔离适配与原型路由或路由器加权融合才实现三域均衡。本文仅用分类准确率考核，未安排人工听测。

**适用边界与深读导览：** 结论成立前提是 10 类单标签、隐藏来源的三域顺序增量、每样本独立决策且禁用外部数据与产生嵌入的预训练模型，D1 域知识仅以基线权重形式提供。未覆盖开放域、多标签重叠、噪声与设备连续变化下的失效模式，也未报告延迟、吞吐与资源代价。欲深究熵选路由与基线训练细节可查方法概述和架构，欲核对排名、消融、策略统计与混淆模式可查实验结果与细节详述。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 同类声音跨域递进时为何不能只做单域分类

刚接触声音分类的研究生往往先熟悉单域监督设定，给定一段音频输出一个类别标签，训练与测试来自同一分布。本任务把这一设定推向更贴近部署的情形，目标类别固定为警报、婴儿啼哭、犬吠、引擎声、火焰、脚步声、敲击声、电话铃声、钢琴声和语音共 10 个类别，数据却来自 D1、D2 和 D3 共 3 个域。系统按顺序逐域学习，测试时只给音频不给域标签，必须在无域信息下把任意域样本判到 10 类之一，每一片段以一个目标声为准。

理解难点在于区分 3 组概念。域自适应只处理源到目标两个域，允许同时看到源分布做分布对齐，最终只考核目标域。域已知增量允许推理时知道域身份，从而按域切换专用参数。域未知增量则要求测试样本来自至今所有域且不告知域身份，模型需同时解决域判断与类判断，难度与实用价值都更高。本任务属于第三种，学习阶段只能看到当前域，评估阶段要对 3 个域一视同仁，这就排除了直接微调单模型的捷径。

按顺序学习新分布时，模型容易出现灾难性遗忘，即学新域后旧域性能骤降。文献中常见对策可归为 4 类，正则约束新旧任务平衡、重放旧分布、改变优化过程以减少干扰、引入任务专用参数隔离干扰。音频领域已有场景分类、声音事件定位与检测、多标签标注等方面的类增量与域增量尝试，还曾用域专用归一化、低秩适配与知识蒸馏实现跨地点与跨设备泛化。本任务把这些零散探索收拢为统一基准，首次在 DCASE 中形成可比框架。

具体约束强化了长期保持与泛化的要求。基线系统已在 D1 上训练好，参赛者拿不到 D1 音频，只能依次用 D2 的 139 分钟音频和 D3 的 275 分钟音频做增量学习。开发期提供训练与测试划分，评估集则混合 3 个域且隐去域信息。规则禁止使用外部数据与产生嵌入的预训练模型，但允许对所给数据做混合、变调或拉伸等操作，也禁止用评估数据训练或统计量做决策，要求每个测试样本独立判定。保持与可塑的矛盾由此被完整暴露。

### 三域递进学习与无域标签推理的任务闭环

要一次看清任务流程，可沿输入、增量学习与输出三层阅读。顶层是 D1、D2 和 D3 的数据桶逐个到来，中层是同一模型随时间演进，底层是类别输出始终限定在同一套声音类。下图把这种时间递进与推理时无域信息的要求画在同一张示意中，箭头方向即学习与判定顺序，阅读时先看纵向域供给，再看横向模型传递。

[![原论文 Figure 1：Overview of Domain-agnostic incremental learning.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-1.png)

*论文图 1：三域递进学习与无域标签推理的闭环示意，输入逐域到来而输出类别集合保持不变（原论文 Figure 1）。*

图自上而下分为三带。顶带标有 Input，3 个圆柱分别注为 D1、D2 和 D3，下方各配一条蓝色波形小条。中带标有 Incremental learning，3 个圆角矩形均注为 Model，纵向箭头从每个数据桶指向对应模型，横向箭头把 3 个模型串成链条。底带标有 Output，每列 4 个圆角条中仅一格高亮，分别显示 Engine、Piano 和 Knock，其余为灰色，表明域在变而类别集合不变，推理时不再告知样本来自哪一列。

与此前单域分类相比，本任务的实质增量不在分类器本身，而在学习协议与归一化设计。主干沿用与 PANNs CNN14 相同的卷积规格，共 6 个卷积块，每块含 2 个卷积层加批量归一化层，末端用全局池化得到定长特征再经 softmax 输出类别。信号规格披露完整，音频不足 32 kHz 时重采样到 32 kHz，再切为 4 秒片段，用 64 个对数梅尔带表示，下限 50 Hz，上限 14 kHz，汉明窗 1,024 个采样点，步长 320 个采样点。增量部分只为新域增加专用批量归一化分支，卷积核等共享参数尽量不动。

【教学例子】取 1 秒 32 kHz 单通道片段为例，共 32,000 个采样点，按 1,024 点窗、320 点步长分帧约得 100 帧，每帧经 64 带滤波得到 64 维向量，于是 1 秒对应约 100 × 64 的时频表示，4 秒片段则约 400 帧。特征依次穿过 6 个卷积块，帧率逐步压缩而通道维度加深，原文未披露每层具体通道数，只说明与 CNN14 一致。末端全局池化把变长时频图压为一维特征向量，再由分类器输出 10 个类别概率。域专用分支的汇合点在每个批量归一化位置，推理时需从 3 套分支中选一套使用。

### 冻结卷积加域专用批量归一化与熵选路由的基线设计

基线把域差异的建模压力集中到批量归一化层，卷积核在各域间共享，每到一个新域就新增一套与之匹配的归一化参数。这种隔离思想使旧域统计量不被新数据直接覆盖，同时只增加少量参数。下图展示了同一卷积块内多套归一化并存的结构，阅读时注意共享卷积与多套归一化的上下位置及回指箭头。

[![原论文 Figure 2：Batch Normalization layers in the baseline model: for each domain D, a specific BN layer is…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-2.png)

*论文图 2：卷积共享而批量归一化按域隔离的基线结构，每块并存三套归一化分支（原论文 Figure 2）。*

图上下排列两个结构相同的 CNN block 方框，每个方框左侧竖排注为 CNN block。框内顶部为灰色 Conv2d，下方粉色条为 BN (D1)，再下方灰色条注为省略号，右侧并列绿色 BN (D2) 与紫色 BN (D3)。D2 与 D3 框各引出折线箭头回指 BN (D1)，表示新域分支由旧域分支派生。纵向黑色箭头从顶部进入第一块，再进入第二块后向下输出，表明特征逐块流动，每块都要在 3 套归一化中择一使用。

训练分阶段进行。初始阶段在 D1 上从零训练 120 个轮次，批大小为 32，轮间打乱数据，优化器为 Adam，学习率为 0.0001。增量阶段学习 D2 与 D3 时，学习率降为 0.00001，只为当前域适配新的批量归一化层，共享卷积尽量保持稳定以减少干扰。原文未明确命名损失函数形式，也未给出每层通道数与分类器维度，只说明分类器带 softmax，梯度主要流入新域归一化参数。这种冻结边界是后文头部系统普遍沿用的起点。

推理时域身份未知，系统对同一输入音频分别套用至今见过的每套域专用层与共享层组合，各做一次前向得到一组类别概率，再计算每组概率的熵作为不确定性度量，熵越小表示越确信。选择熵最小的一套分支作为最终判定，等价于用置信度做隐式域路由。开发期用这种熵选路由的成绩明显低于每次都选对正确域分支的任务相关上限，两者差距表明路由精度是主要瓶颈，也为后文头部系统的路由改进留下空间。

### 三域平均排序与第三域显著下滑的总体格局

#### 评测口径与总体排序

正式排名只看评估集上的三域平均准确率，先在每个域内按类别求平均，再把 D1、D2 和 D3 的域准确率等权平均，避免数据量不平衡主导名次。开发数据提供 D2 的 139 分钟音频与 D3 的 275 分钟音频，D1 知识只封存在所给基线中，不提供音频。规则禁止外部数据与产生嵌入的预训练模型，允许混合采样、变调与拉伸等操作，禁止对评估数据做主观判断、标注、训练或统计量决策，要求逐样本独立分类，保证方法比较聚焦于增量策略本身。

开发期基线已预示难度，学完 D2 后在 D2 上为 58.6%，学完 D3 后在 D3 上为 46.1% 而在 D2 上为 59.0%，两域平均 52.5%，若每次选对分支则可达 70.6% 与 56.9%，平均 63.8%。正式评估共收到 21 支队伍的 59 个系统，每队取最优参与排名。首名三域平均为 79.6%，分域为 87.1%、81.5% 和 70.3%，基线平均为 60.3%，分域为 89.2%、49.7% 和 42.2%，居倒数第二，多数系统超过基线。前 5 名跨域相对平稳，到 D3 的落差普遍更大。置信区间随名次平滑下降，仅少数相邻差异超出 95% 区间，域内区间用二项分布计算，总区间用正态近似。

#### 混淆分布与失效细节

为定位错误来源，原文把所有提交系统的预测汇总后按域分别计算混淆矩阵，每行按真实类别归一化，对角线即类召回。3 个面板并列呈现 D1、D2 和 D3，横轴为预测类，纵轴为真实类，右侧色条表示归一化数值。下图是本次收到的版本，阅读时先看对角亮度，再找偏离对角的亮斑，即可判断哪些类别对在哪个域最易混淆。

[![原论文 Figure 3：Confusion matrices for each domain, calculated by aggregating the predictions of all submitted…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/8939351c5943/figure-3.png)

*论文图 3：汇总所有系统预测的三域混淆矩阵，行归一化后对角为类召回（原论文 Figure 3）。*

图显示 D1 与 D2 对角总体明亮，D3 明显暗淡且亮斑分散。D1 面板中电话铃声行在警报列显示 65，在自身列仅显示 32，婴儿啼哭、引擎声等行对角多在 73 至 99 之间。D2 面板中火焰行在引擎列显示 14，在火焰列显示 37，在脚步声列显示 32，而脚步声行自身高达 84，钢琴行在警报列显示 17。D3 面板中婴儿啼哭行在自身仅 42，在语音列达 25，火焰、脚步声与引擎声交叉严重，钢琴行在自身达 95 相对孤立。需如实指出，文字称 D1 电话铃声误为警报近 40% 与图的 65% 不一致，文字称 D2 脚步声误为火焰 32% 与图中火焰误为脚步声 32% 方向相反，钢琴误为警报 17% 则与图一致。

至少一个未胜出项值得注意，基线在 D1 上达 89.2%，但在 D2 与 D3 上分别仅 49.7% 与 42.2%，呈现过度保持旧域而新域可塑不足。排名末位的 Raja IITM 平均为 59.7%，其 D3 反而达 60.2%，与多数队伍 D3 最低的格局不同，提示不同保持与可塑配比会彻底改变域间排序。本任务只用准确率评价，未安排人工听测，也不使用神经代理分数，因此不存在代理与听感背离问题，但也未报告方差与听测规模。未评测范围包括开放集、重叠声与真实流式部署，D3 的大偏移成因也未在数据层面完全解释。

### 保持与可塑配比及路由容量如何拉开差距

按持续学习策略划分，21 支队伍中 9 支单独使用一种方案，12 支采用混合方案。具体到 4 类，20 支用了结构类方法，8 支用了正则类，5 支用了优化类，仅 1 支用了生成式重放。规则只允许生成式重放，不允许保存旧域真实样本做重放，因此多数队伍把知识保持寄托在冻结主干与域专用参数上。这一分布本身说明，仅靠通用正则难以应对无域标签推理，结构隔离成为共识起点。

头部系统的共同点是避免直接微调单一共享模型。首名采用专家保持策略，逐阶段训练紧凑专家并冻结，再用倒数第二层表示经轻量原型分类器融合，并以深度反演重放与跨阶段特征填补补偿缺失专家特征。第 2 名冻结 CNN14 主干，只为新域加低秩适配器，用知识蒸馏与正交梯度投影约束更新。第 3 名用原型距离、置信度、间隔、熵与分布外证据做校准软路由，第 4 名用域专用批量归一化、低秩卷积适配与分类器增量加路由加权融合，第 5 名对更难的 D3 配置更深残差瓶颈适配器并加监督对比辅助损失。

数据增强使用并不均匀，许多系统沿用基线预处理，把精力放在结构与推理时刻改进上。用到增强时多为提升跨域稳健性的常规音频操作，如面向 D2 的设备模拟、面向 D3 的增益偏移，以及 SpecAugment、MixUp、频率统计混合与测试时增强平均。原文指出，许多依赖域专用部件的系统需要很强的路由才能选对域，这一路由瓶颈拖累了不少结构方案。D3 上约半数系统准确率徘徊在 50% 附近，与 D1 和 D2 拉开明显差距，暗示 D3 分布偏移更大，单纯增加保持会压制可塑。

需要承认，本次比较缺少受控消融，无法把总体差距唯一归因到某一模块。头部同时改了保持、适配容量与路由三处，缺少逐项剥离，因此不能断言原型融合与对比损失各自贡献多少。生成式重放仅一队使用，其效果也未与结构隔离单独对照。未来若要复现选型，应先测正确域分支上限，再逐步替换路由与适配器，才能区分是容量不足还是置信估计不可靠。

### 路由瓶颈与复现前提下的工程选型建议

本任务的结论成立依赖若干闭集假设。每片段只标注一个目标声，虽允许背景混入其他声音，但不考核重叠声分离与多标签。类别限定为 10 类，域数限定为 3 且顺序固定为 D1 到 D3，未测试域顺序打乱、域数增多或开放集新类。推理时无域标签，但评估仍是离线整段分类，不涉及流式分块、前瞻窗口或逐帧输出，因此保持与可塑的权衡只在整段层面验证。

未验证的部署条件较多。原文未披露延迟、实时率、吞吐与显存开销，也未说明自回归或流式缓存策略，信号规格虽给出 32 kHz 与 4 秒切分，但真实长时音频的切分聚合、噪声与混响影响均未评估。D3 的大偏移在数据层面只描述为分布差异更大，未公开具体采集设备或环境参数，难以判断结论能否外推到其他设备与地点。分类只用准确率，无需人工听测，这与语音增强等需听感验证的任务不同。

复现核对需区分三件事。代码是否开源、权重是否提供下载、系统是否可直接运行，在原文中均未明确说明，本次也未发现可验证的公开资源，应按未公开处理。任务结果页链接仅指向成绩列表，不证明作者已开源。可复现的信号规格包括重采样、梅尔带数、窗长步长、训练轮次、批大小与两阶段学习率，但每层通道数、损失函数形式与置信区间计算细节未完全披露，附录也未提供补充证明或失效案例。按原文规格复现时，应先对齐预处理与三域等权平均口径。

工程选型上，若旧域不能丢失，应优先冻结主干并为新域隔离参数，再把精力放在域置信估计与专家融合上，而非一味加强通用正则。若新域如 D3 般偏移更大，应为其分配更深适配容量并配合对比类辅助损失，同时用正确分支上限先估计路由改进空间。没有试听演示可对照，选型应直接对照分域准确率与混淆矩阵中的 4 类混淆网格，避免被三域平均数掩盖短板。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 32 kHz，不足则重采样，切分为 4 秒片段，64 个对数梅尔带，下限 50 Hz，上限 14 kHz，汉明窗 1,024 个采样点，步长 320 个采样点，原文未披露声道数与实时率
- **训练与评测数据**：开发数据含 D2 的 139 分钟音频与 D3 的 275 分钟音频，D1 知识只封存在所给基线中，不提供音频，共 10 个类别，每片段单标签，开发期提供训练与测试划分，评估集混合 3 个域且不给域信息
- **算力与训练耗时**：原文未披露训练所用 GPU 型号数量与训练耗时，仅披露训练轮次与优化配置，无从核对算力开销
- **核心超参数与配置**：6 个卷积块，每块 2 个卷积层加批量归一化层，主干规格与 PANNs CNN14 一致，训练 120 个轮次，批大小为 32，Adam 优化，初始学习率为 0.0001，增量阶段为 0.00001，原文未披露损失函数名与通道维度
- **推理速度与部署开销**：原文未披露实时率延迟吞吐与显存，推理为离线整段分类，对每套域分支各做一次前向并按最小熵选择分支，计算量随域数线性增长
- **开源产物与协议状态**：原文未说明代码权重与数据是否公开，也未给出可直接运行的系统描述，应按未公开处理，任务页仅指向成绩列表
- **附录与补充材料要点**：原文未设附录披露证明或补充消融，参考文献指向持续学习与音频分类相关工作，失效案例仅在正文混淆矩阵中简述

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 6.6/10 | 技术严谨 7.2/10 | 实验充分 7.7/10 | 清晰度 5.4/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.7/10 | 工程/实践 6.1/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-44`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Casciotti_44.pdf)
- Track：P3-2

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首次形式化三域顺序无旧数据访问、无推理域标签的域不可知增量基准与禁用外部嵌入的公平规则，并吸引21队59系统验证。

- 核心优势：在隐藏三域评估集上以三域等权平均排名并附95%置信区间与混淆诊断，第一名79.6%显著高于基线60.3%且差距可核对。

- 核心优势：基线域特定BN加熵最小路由并以任务依赖上确界63.8%对比域不可知52.5%直接量化约11个百分点路由瓶颈。

- 主要短板：排名第二系统分域等权均值约77.9%与所标78.8%相差约0.9%而原文未解释，构成表文算术矛盾。

- 主要短板：评估集各域样本量与类分布未披露且任务依赖维持后D2具体数值缺失，限制跨域泛化结论的可核对性。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
