---
title: "Asymmetric Residual Adapters for Domain-Incremental Audio Classification"
date: 2026-11-27
draft: false
description: "针对固定类别下录音条件漂移带来的遗忘与容量不足，本文在冻结 CNN14 主干上为每域叠加零初始化残差瓶颈并按难度分配深度，以 68.5% 的域无关平均准确率较复现基线提升 18.5 个百分点并逐比特保留首域，代价是三路前向开销与基于置信度的熵路由在真未见音频上高置信误路由。"
tags: ["Adapter", "持续学习", "音频分类"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "按难度分配容量的域增量音频分类：非对称残差适配器解读"
paper_digest_original_title: "Asymmetric Residual Adapters for Domain-Incremental Audio Classification"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-77"
paper_digest_workbench_source_sha256: "0f7e09b35f8f72287e5656c1497fd1266201693957e1a7504c31453bb3e28964"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Divakar_77.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对固定类别下录音条件漂移带来的遗忘与容量不足，本文在冻结 CNN14 主干上为每域叠加零初始化残差瓶颈并按难度分配深度，以 68.5% 的域无关平均准确率较复现基线提升 18.5 个百分点并逐比特保留首域，代价是三路前向开销与基于置信度的熵路由在真未见音频上高置信误路由。"
paper_digest_reader_sections: [{"heading":"固定类别下录音条件漂移为何既不能微调也不能冻结","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结 CNN14 主干上如何叠加互不干扰的域专属分支","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"零初始化残差瓶颈为何能做到即插即恒等与按难度分配深度","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"暖启动分类头与有监督对比损失如何收紧域内决策边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"从 50.0% 到 68.5% 的增益来自哪里与跨城市基准是否成立","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"路由与解冻为何在开发集上有效却在真未见音频上失效","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"遗忘为零的代价是什么与部署前还需验证什么","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Independent Researcher, Austin, USA"],"name":"Aakash Divakar"},{"affiliations":["Independent Researcher, Austin, USA"],"name":"Angad Ripudaman Singh Bajwa"},{"affiliations":["Independent Researcher, Austin, USA"],"name":"Atharva Joshi"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"5ef510655de2f5f306d25a90b668bdca7f2021847aef4754150e2b99166520f0","url":"/audio-research-portal/client/papers/2026-11-27/conference-c9dcabbc31da2c113584f9d3/citation.bib"},"citation.json":{"sha256":"bdfd2f085678df59d5a9be6504b6d727a425118fed04f02723d3adad00adbdc0","url":"/audio-research-portal/client/papers/2026-11-27/conference-c9dcabbc31da2c113584f9d3/citation.json"},"citation.ris":{"sha256":"6f51e433355b10a230694050fa2eb83b676c23abc5136c420dd0d3871d223f32","url":"/audio-research-portal/client/papers/2026-11-27/conference-c9dcabbc31da2c113584f9d3/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3a96f19eeab8a79cc98f65047ef27ad1a730b58d0299d9eaf694e380020e6fd8","url":"/audio-research-portal/client/papers/2026-11-27/conference-c9dcabbc31da2c113584f9d3/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-77"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Divakar_77.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "4ae4004698085a09ab195d496e575f5045f494a0ac314474b7c70cac12ed0637"
paper_digest_api_reader_plan_sha256: "95ea333820e104a295c6a5e542f8bd0c65456266277090cadb4034bbc467f8d0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3c0f343643e081591090b6593418eaa9dc5d22a7222ffc61b960dff995f942cf"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5693a727a03baad300e8f6821bbda8c0163f6dbf8267153245c645bff9eb2c2f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "752e4952da4575202c61a06fc1ccb1f6feef47573731b1882706b363090d86b6"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ffdd7e1059d6e1b3105314181b03252485a1d05b1aa65666a281a6938220778d"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "Adapter"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 按难度分配容量的域增量音频分类：非对称残差适配器解读

> 英文题目：*Asymmetric Residual Adapters for Domain-Incremental Audio Classification*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-77`
> Track：P3-4




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Divakar_77.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [Adapter](/audio-research-portal/papers/?concept=method.adapter)；[持续学习](/audio-research-portal/papers/?concept=method.continual)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.6/10** | 创新 6.6/10 | 技术严谨 6.9/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Aakash Divakar：Independent Researcher, Austin, USA
- Angad Ripudaman Singh Bajwa：Independent Researcher, Austin, USA
- Atharva Joshi：Independent Researcher, Austin, USA

## 📌 核心摘要

**问题与瓶颈：** 域增量学习（domain-incremental learning, DIL）要求单个模型在类别集合固定时，随录制条件按 D1 → D2 → D3 演进而持续分类，且不能使用既往域数据，也不能遗忘已学域。DCASE 2026 任务 7 基线沿用 ADIL 思路，将在 D1 训练的 CNN14 主干冻结，为每个新域学习小量域相关参数，完整 ADIL 包括域相关批量归一化（Batch Normalization, BN）仿射参数与分类器修正，推理时对每个域前向一次并保留预测熵最低的域。该设计天然无遗忘，但每域容量过小，在复现的每域 BN 变体基线中 D2 准确率仅 59.2%，D3 仅 40.8%，平均 50.0%，困难域可塑性不足成为瓶颈。

**核心思路与方法架构：** 与最接近基线相比，本文保留冻结主干与域相关 BN 的做法，实质增量是为每个域独立插入零初始化残差瓶颈适配器并按偏离程度分配深度，同时为每域配备热启动线性头与监督对比辅助损失。音频重采样至 32 kHz，计算 64 梅尔带的对数梅尔谱，窗长为 1024 点，跳长为 320 点，再送入 6 个卷积块的 CNN14 主干，通道数依次为 64、128、256、512、1024 与 2048，每个块后接入该域专属适配器栈。单个适配器为 1×1 卷积降维至 C / 4，经 ReLU 再由零初始化 1×1 卷积升维并残差相加，训练初态为恒等映射，D1 保持恒等以逐比特复现，D2 栈深为 1 而 D3 栈深为 3，更新边界严格限定在当前域的 BN、适配器与分类头，推理时仍沿用无参数熵路由选择最低熵域。

**关键实验与核心代价：** 在开发集测试划分上，D2 含 639 个样本，D3 含 806 个样本，提交系统在 D2 取得 76.2%，在 D3 取得 60.8%，平均 68.5%，高于复现基线的 59.2%、40.8% 与 50.0%，平均值也高于完整 ADIL 的 64.5%，D2 略高于完整 ADIL 的 76.06%。消融显示残差适配器带来最大单步增益，原文报告平均提高 13.7 个百分点，域相关头与监督对比损失主要改善 D2，非对称深度与加长至 180 轮训练将 D3 从 55.1% 推至 60.8%。代价方面，训练期波形增广在 240 轮下得到 D2 75.4%、D3 51.4% 与平均 63.4%，在 D3 反而下降，解冻主干顶部可将 D3 推至 66.4% 但 D2 跌至 58.5%，表 3 的 2 倍熵集成平均降至 60.9% 而检查点集成与测试时增广在噪声范围内被舍弃，任务为分类准确率且未做人工听测，也未使用 UTMOS 与 DNSMOS 等神经代理指标。

**适用边界与深读导览：** 结论成立依赖 D1 检查点冻结、每域参数独立与域不可知熵路由，评测限于任务 7 开发集测试划分与自建的 TAU 城市序列，未覆盖真正未见采集条件下的拒识部署与实时成本。在 7 类重叠的 ESC-50 未见域探测中，准确率 85.0% 高于域内参照的 71.9% 与 55.7%，但平均熵低至 0.027 而仍被自信误路由，提示置信路由失效比精度数字更值得关注。欲深究适配器公式与堆叠规则可看方法概述和架构，欲核对渐进消融、适配器家族与三种路由器的数值对比可看实验结果，欲了解承认局限与算术出入说明可看局限与问题。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 固定类别下录音条件漂移为何既不能微调也不能冻结

域增量学习要求单个模型在类别集合固定时连续适应录音条件的变化。本文设定包含 10 个声音类别，域序列为 D1 → D2 → D3 ，新域到达时无法访问旧域数据，也不能遗忘已学域。这种设置与类别增量学习不同，后者类别不断增加，也与无监督域适应不同，后者仍可同时看到源域。稳定性与可塑性之间的权衡因此更加尖锐，冻结则无法适应，整体微调则会覆盖旧知识。

DCASE 2026 任务 7 的公开基线采用 ADIL 思路，先在 D1 上训练 CNN14 主干，随后冻结全部卷积权重，每个新域只学习自有的批量归一化参数与分类器修正。推理时域标签未知，模型让同一输入通过每个域的专属分支，保留预测熵最低的一路。这种设计天然不遗忘，但每域容量仅有少量仿射参数。作者复现的基线在开发集测试划分上 D2 为 59.2% ，D3 为 40.8% ，平均为 50.0% ，困难域明显受限。

瓶颈在于容量而非分类器形式。当新域相对冻结主干漂移较大时，仅靠逐通道缩放与平移无法吸收声学分布变化。适配器为冻结主干增加少量域专属参数，是自然的扩容手段，但需要保证新增模块初始时不改变已有特征，且不同域之间互不干扰。另一重挑战来自路由，测试时必须在无标签条件下选出正确的域分支，否则再强的域内模型也无法发挥。

本文的核心主张是按域漂移程度分配容量。作者在每个卷积块后插入零初始化残差瓶颈适配器，并让困难的 D3 堆叠更深，简单的 D2 保持较浅，辅以暖启动的域专属分类头与有监督对比损失。在难度均衡的第二基准上，同一规则给出等深对称配置，这正是 TAU 城市基准上的最优选择。路由部分则对比 3 种策略，并用完全未见的 ESC-50 样本揭示基于置信度路由的高置信误路由风险。

### 冻结 CNN14 主干上如何叠加互不干扰的域专属分支

阅读架构图时建议沿自上而下的主路径观察，先看顶部波形与频谱前端，再看左侧共享卷积块与中间两列域适配器的并行关系，最后看底部 3 路分类头如何汇入熵路由。右侧小插图给出单个残差瓶颈的内部结构，有助于理解降维与升维的配合。绿色对应 D2 ，琥珀色对应 D3 ，深度差异直观可见，虚线框标出域无关推理的汇合点。

[![原论文 Figure 1：Architecture of the submitted system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/de784acc15fa/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/de784acc15fa/figure-1.png)

*论文图 1：冻结 CNN14 主干与每域批量归一化、非对称残差瓶颈及域专属分类头的整体连接，底部经最小熵选择输出（原论文 Figure 1）。*

图中顶部标注波形输入为 4 秒 32 kHz ，批量形状为 (B ，128,000) ，经由 n_fft 为 1,024 、hop 为 320 、mel_bins 为 64 的频谱与对数梅尔模块，进入每域输入批量归一化。左侧 6 个共享卷积块通道依次为 64 、128 、256 、512 、1,024 与 2,048 ，每块含两次 3 × 3 卷积与域专属批量归一化及池化。中间绿色 D2 每块配一个瓶颈，琥珀色 D3 每块配 3 个瓶颈，右侧插图显示 1 × 1 降维至 C / 4 、非线性整流、上投影零初始化再与输入相加。底部全局池化输出 2,048 维，3 路线性头各输出 10 类后取最小熵。

以 1 秒 32 kHz 单声道片段为例，输入约含 32,000 个采样点，经 1,024 点窗长与 320 点步长的对数梅尔变换得到约 100 帧、64 个频带的二维频谱。输入批量归一化保持 64 通道，随后 6 个卷积块将通道数依次扩展为 64 、128 、256 、512 、1,024 与 2,048 ，每次 2 × 2 平均池化将时频分辨率减半。每个块输出同时进入对应域的适配器分支，形状不变，全局池化后压缩为 2,048 维向量，再经 2,048 → 10 的线性头得到 10 类对数几率。

卷积权重全部载入任务 7 基线在第一个域训练得到的检查点并冻结，只有当前域的批量归一化、适配器与分类头参与更新。D1 分支使用恒等适配器，行为与原检查点逐比特一致。D2 与 D3 拥有各自独立的批量归一化统计量、适配器堆叠与分类头，互不共享梯度。推理时同一输入依次通过 D1 、D2 与 D3 3 套专属参数，计算 3 组 Softmax 分布的预测熵，保留熵最低一路的类别判决，无需额外参数或域标签。

### 零初始化残差瓶颈为何能做到即插即恒等与按难度分配深度

残差瓶颈适配器作用于通道维度。设输入特征图具有 C 个通道，模块先用 1 × 1 卷积将通道压缩至 C / 4 ，经非线性整流单元激活后再用 1 × 1 卷积恢复至 C 个通道，并与输入相加。其中上投影矩阵初始化为零，训练开始时整个模块为恒等映射，冻结主干的预训练特征不受扰动，随后逐步学到域专属的特征偏移。

每个卷积块后都插入适配器，6 个位置共用同一形式但参数各自独立。单域堆叠深度记为 d ，表示在同一位置串联多个上述瓶颈，任意深度在初始化时仍为恒等。任务 7 采用非对称配置，D2 每处堆叠一个，D3 每处堆叠 3 个，使 D3 的卷积扩容约为 D2 的 3 倍。两套堆叠完全独立，加深 D3 不会影响 D2 的参数或统计量。

深度遵循按难度分配容量的单一规则。当各域与冻结主干的偏离程度接近时，规则自然退化为等深对称配置，这正是 TAU 城市基准上的最优选择。非对称因此不是固定设计，而是难度不均的后果。相比之下，仅做逐通道仿射的调制方式容量过弱，通道注意力门控虽有改善但加深不再受益，低秩分解则面向更大模型，在 CNN14 规模上普通瓶颈已足够。

这种设计同时保证遗忘为零与可塑性可调。冻结主干切断跨域梯度耦合，域专属批量归一化吸收一阶统计偏移，适配器负责更复杂的通道混合。D1 无需新增容量，保持原分类头与恒等路径，后续域的增加只带来线性增长的少量参数，不触碰历史域的任何数值。

### 暖启动分类头与有监督对比损失如何收紧域内决策边界

基线复用冻结的 D1 分类器处理所有域，本文为每个新域设置独立的线性头，输出维度为 10 类，载入时从 D1 分类器暖启动，随后与该域的批量归一化与适配器联合训练。D1 保留原始冻结分类头。这种方式让决策边界可以直接偏向新域的类别分布，而不必挤在旧超平面附近。

训练目标为交叉熵加有监督对比辅助损失，总权重为 0.2 ，温度为 0.07 。对比分支作用于经 L2 归一化的全局嵌入，将同类样本拉近、异类样本推远，使每域内部的类簇更紧凑。作者指出该损失同时改善了分类头的校准，有利于后续基于熵的路由，因为匹配域的预测分布会更尖锐。

优化逐域进行，每次只更新当前域参数。采用 Adam 优化器，初始学习率为 0.001 ，批量大小为 32 ，余弦退火调度衰减至 0.0000001 。提交配置训练 180 个周期，对比权重与温度固定，深度取一与三。增强实验训练 240 个周期，每段 4 秒音频构造一个干净视图与 8 个增强视图，涵盖移位、拉伸、变速、淡入淡出、类别感知的音高与速度、谱滤波、有色噪声、标签不变干扰以及局部遮罩与增益削波。

路由在推理时执行，共对比 3 种方案。熵路由无需训练，为每个域计算类别概率与预测熵，选择熵最小的域。马氏距离路由在 D1 批量归一化特征空间估计对角高斯，用距离与阈值 60 实现显式拒绝。门控多层感知机路由拼接三域全局池化特征，输入维度为 6,144 ，经 256 维隐层预测 D2 或 D3 ，以 0.5 为拒绝阈值，需在标注开发集上额外训练 5 个周期。

### 从 50.0% 到 68.5% 的增益来自哪里与跨城市基准是否成立

#### 评测协议与公平性前提

所有系统均从任务 7 基线在第一个域训练得到的检查点出发，在任务 7 开发集上逐域训练，开发集测试划分包含 D2 的 639 个样本与 D3 的 806 个样本。报告指标为域标签未知的域无关准确率，分别给出 D2 、D3 各自精度及其平均值，方向均为越高越好。公平性上需区分两类基线，组织方报告的完整 ADIL 含分类器修正，而作者复现的起点仅为每域批量归一化，对应平均 50.0% 。单任务为每域从零训练的上限参考，无法保留旧域。本研究只报告分类准确率，无人工听测与神经代理质量指标。

#### 主基准增量与跨城市复现

下表完整呈现任务 7 开发集测试划分上的主结果，包含单任务、组织方每域批量归一化、完整 ADIL 与本文残差适配器四行，列为 D2 精度与两域平均。可直接比较容量扩展的收益与代价，方向均为越高越好，平均值由 D2 与 D3 算术平均得到，提交运行对应最后一行。

| System | D2 | Avg of D2,D3 |
| --- | --- | --- |
| Single task | 67.76 | 61.20 |
| Per-domain BN (organizer) | 58.60 | 52.50 |
| ADIL [1] | 76.06 | 64.50 |
| Residual adapters (ours) | 76.20 | 68.50 |

残差适配器在 D2 达到 76.20% ，两域平均达到 68.50% ，均高于完整 ADIL 的 76.06% 与 64.50% ，更远高于组织方每域批量归一化的 58.60% 与 52.50% 。正文报道的提交运行 D3 为 60.8% ，全文从复现起点 50.0% 提升至 68.5% ，提高 18.5 个百分点，且 D1 逐比特保留。正文逐项累加显示最大单步来自适配器，分类头与对比损失主要改善 D2 ，非对称深度与延长训练推动困难的 D3 。代价是每域新增独立参数与 3 路前向。

为检验规则是否超出任务 7 ，作者用 TAU 城市声场景 2019 构建第二基准，D1 为六城市混合池，D2 为里斯本，D3 为里昂，D4 为布拉格，类别仍为 10 个场景。每格为当前城市及所有已见城市的域无关平均准确率，对称等深在此最优。下表完整列出 4 个阶段的三系统对比，方向均为越高越好，可观察难度均衡时的容量分配。

| System | D1 | D2 | D3 | D4 |
| --- | --- | --- | --- | --- |
| Single task | 76.33 | 69.21 | 66.71 | 67.33 |
| ADIL [1] | 67.3 | 69.6 | 71.4 | 68.7 |
| Residual adapters (ours) | 76.75 | 65.17 | 73.28 | 72.46 |

适配器在 D1 为 76.75% ，D3 为 73.28% ，D4 为 72.46% ，三处领先，终点高于 ADIL 的 68.7% 与单任务的 67.33% 。唯一例外是里斯本 D2 ，适配器为 65.17% ，低于 ADIL 的 69.6% 与单任务的 69.21% ，额外容量在此未获回报。单任务从 76.33% 跌至 67.33% ，无法保留旧城市。正文指出机场类最易混淆，公园音频偶发误路由，对称深度在难度接近时最优，与任务 7 的非对称共同支持按难度分配的单一规则。

### 路由与解冻为何在开发集上有效却在真未见音频上失效

路由对比显示熵路由无需训练且最稳健，马氏距离无阈值时接近熵路由，域间路由准确率约 73.2% ，加入阈值 60 后约 22.8% 的 D2 与 D3 样本被拒至 D1 ，平均值反而下降，说明全局距离阈值在域重叠时过于粗糙。门控多层感知机在最佳轮次约 69.3% ，但很快过拟合，在无标注评估集上仅将 0.6% 样本判为 D1 ，几乎从不拒绝。2 倍集成与测试时增强均在噪声范围内，深度两层对称约 65.1% ，低于非对称一与三的约 67.4% ，对比权重在 0.2 处峰值，增大的取值损害精度。

下表对比完全未见的 ESC-50 与类平衡的域内参考，给出准确率、平均熵与三域路由占比，可检验置信度路由在真未见音频上的行为。测试均取 7 个重叠类别，每类 40 段，方向为准确率越高越好，熵越低表示越确信，三域占比之和为 100% ，可直接观察误路由的集中位置。

| Test set | Acc. (%) | Mean H | D1/D2/D3 (%) |
| --- | --- | --- | --- |
| ESC-50 (unseen) | 85.0 | 0.027 | 14/53/33 |
| D2 dev-test (ref.) | 71.9 | 0.060 | 14/54/32 |
| D3 dev-test (ref.) | 55.7 | 0.027 | 19/34/47 |

未见 ESC-50 准确率达 85.0% ，高于 D2 参考的 71.9% 与 D3 参考的 55.7% ，说明域间差距不只是新颖性，单源高信噪比录音本身更容易，部分 D3 困难来自样本内在难度。关键失效是熵路由无拒绝选项，ESC-50 平均熵为 0.027 ，与确信的 D3 参考相同，路由占比为 14 / 53 / 33 ，与 D2 参考几乎一致，高置信误路由而非谨慎拒判。只有阈值化距离这类显式拒绝才能表达既非 D2 又非 D3 ，这比单纯精度对部署更关键。

解冻实验进一步支持冻结选择。解开顶部两块且无约束时 D3 最高达 66.4% ，但共享权重使 D2 跌至 58.5% ，平均约 62.5% 。加入指向旧检查点的二阶约束后 D2 回升但 D3 增益被抵消，解开三块则训练不稳定，没有解冻配置在平均值上超过冻结适配器的 68.5% 。适配器族对比中，逐通道仿射约 47.7% ，低于批量归一化起点，通道注意力约 57.7% ，加深降至约 55.5% ，残差瓶颈约 63.7% 且在困难 D3 提升最大，因而被保留。

### 遗忘为零的代价是什么与部署前还需验证什么

零遗忘结论成立的前提是严格隔离。每域拥有独立批量归一化、适配器与分类头，共享卷积永远冻结，D1 为恒等路径。容量按难度分配目前是人工规则，依据开发集测试划分上观察到的难易差距设定一与三，未给出从训练统计量自动估计漂移并选择深度的闭式方法，换一组难度分布需重新试探。

未验证的部署条件较多。结果仅在开发集测试划分上报告，未包含正式评估集，均为离线整段前向，无流式分块、前瞻窗口、延迟、RTF 与显存的实测。噪声、混响、麦克风与长尾类别的覆盖有限，机场这类混响空间已显弱点，公园音频的偶发误路由提示域边界本就重叠，阈值类拒绝在重叠区的行为仍需校准。

复现需要区分三件事。代码是否开源、权重是否提供下载、系统是否可直接运行，原文均未披露可验证链接，未发现经核验可用的作者资源。信号规格与优化配置披露较全，32 kHz 、64 频带、窗长与步长、通道序列、学习率与批量大小均可照搬，但硬件型号与训练耗时原文未披露，随机种子与方差区间也未报告，复现时需自定计算环境并多次重复。

工程选型上可沿用单一规则。若各域难度接近，优先采用等深对称，若存在明显困难域，将额外瓶颈集中于该域，避免解冻共享主干引入跨域耦合。推理默认保留参数为零的熵路由，不增加训练负担，但在上线前应补显式拒绝分支，对高熵与域外样本先拒判再转人工或通用模型。本研究无试听演示，分类任务也不涉及生成音频的主观听感，选型应以域无关准确率与拒绝能力为准。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入重采样至 32 kHz ，对数梅尔频谱使用 64 个频带，窗长为 1,024 点，步长为 320 点，主干为 CNN14 ，输入批量归一化为 64 通道，推理为离线整段前向，延迟与 RTF 原文未披露
- **训练与评测数据**：任务 7 开发集逐域训练与开发集测试划分评测，D2 含 639 个样本，D3 含 806 个样本，类别为 10 类，第二基准为 TAU 城市声场景 2019 ，D1 为六城市混合池，D2 为里斯本，D3 为里昂，D4 为布拉格，未见域探针为 ESC-50 中 7 个重叠类别，每类 40 段
- **算力与训练耗时**：原文未披露训练所用 GPU 或 CPU 型号与数量、训练耗时与内存开销，仅给出优化器与调度配置
- **核心超参数与配置**：Adam 优化器，学习率为 0.001 ，批量大小为 32 ，余弦退火至 0.0000001 ，提交配置训练 180 个周期，对比损失权重为 0.2 ，温度为 0.07 ，适配器深度为 D2 取一、D3 取三，瓶颈压缩比为 C 除以 4
- **推理速度与部署开销**：熵路由无需额外参数与训练，需对 D1 、D2 与 D3 三路完整前向并比较预测熵，参数增量、延迟、RTF 与显存原文未披露具体数值
- **开源产物与协议状态**：原文未披露代码仓库、权重下载、数据划分脚本与可运行系统的公开状态，未发现经核验可用的作者资源链接
- **附录与补充材料要点**：原文未披露附录证明与许可限制，仅在正文报告失效案例与路由误判分析，补充细节以正文消融为准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.6/10** | 创新 6.6/10 | 技术严谨 6.9/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 6.4/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-77`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Divakar_77.pdf)
- Track：P3-4

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：零初始化残差瓶颈适配器起点为恒等映射，每域独立堆叠实现D1逐比特无遗忘扩容。

- 核心优势：渐进消融显示适配器带来平均50.0%至63.7%的最大单步增益，提交系统68.5%超越完整ADIL的64.5%。

- 核心优势：在TAU四城序列与ESC-50未见域探测中验证跨基准泛化，并诚实揭示熵路由自信误路由失效模式。

- 主要短板：路由对比表平均值存在字面算术出入，阈值行与门控行既非简单平均亦非样本加权平均。

- 主要短板：全部增益限于开发集测试划分而无隐藏集与重复统计支撑，且马氏阈值60在测试划分上标定可能高估。

- 主要短板：全文未提及代码权重数据集与演示链接，且无可验证的官方HTTPS资源URL可供核查。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
