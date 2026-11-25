---
title: "Beyond File-Level Splits: Rethinking Symbolic Music Evaluation via Multi-View Alignment"
date: 2026-11-24
draft: false
tags: [翻唱与曲目识别, 聚类与类别匹配, 评测协议, 音乐]
categories: [论文速递]
description: "论文针对文件不重叠仍残留同作品版本并压低留出损失的问题，提出结合多视角检索与保序对齐及校准验证的 MVA-SWI ，在 100 组高相似对中替换 3.29% 训练窗口使 MIDI-GPT 组内平均 NLL 下降 30.16% 的敏感性证据下实现最接近独立标签参考的隔离，但 Table IV 随机划分审计在 LMD-clean 残留 17.75% 暴露，这与下游固定划分暴露 25/142 个测试作品约 17.61% 属不同口径，而干净保留略低与听感差异不显著构成主要代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28765"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "从文件去重到作品隔离：多视角对齐的符号音乐评测清洗"
paper_digest_original_title: "Beyond File-Level Splits: Rethinking Symbolic Music Evaluation via Multi-View Alignment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28765v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28765v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28765v1.pdf"
paper_digest_primary_task: "翻唱与曲目识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.cover-song-identification","label":"翻唱与曲目识别"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对文件不重叠仍残留同作品版本并压低留出损失的问题，提出结合多视角检索与保序对齐及校准验证的 MVA-SWI ，在 100 组高相似对中替换 3.29% 训练窗口使 MIDI-GPT 组内平均 NLL 下降 30.16% 的敏感性证据下实现最接近独立标签参考的隔离，但 Table IV 随机划分审计在 LMD-clean 残留 17.75% 暴露，这与下游固定划分暴露 25/142 个测试作品约 17.61% 属不同口径，而干净保留略低与听感差异不显著构成主要代价。"
paper_digest_reader_sections: [{"heading":"文件不重叠不等于作品不见面：版本暴露如何压低留出损失","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"多视角检索对齐验证流水线与冻结推理边界","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"五视角互惠检索与零移调保序对齐如何锁定共享乐段","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"五十七维证据向量校准验证与连通分支隔离如何删除训练文件","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"跨录音识别隔离保留与预算对齐损失一致性的联合证据","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"隔离不完美与阈值迁移边界：何时仍需报告残留暴露","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Intelligence Science and Technology, Beijing University of Civil Engineering and Architecture, Beijing 102616, China"],"name":"Kun Bai"},{"affiliations":["College of Science, Beijing Forestry University, Beijing 100083, China"],"name":"Yinghan Wang"},{"affiliations":["Sun Yat-sen University, Shenzhen 518107, China"],"name":"Canran Xiao"},{"affiliations":["School of Computation, Information and Technology, Technical University of Munich, Munich 80333, Germany, and also with the Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK"],"name":"Jiachen Luo"},{"affiliations":["German Research Center for Artificial Intelligence (DFKI), Luebeck 23562, Germany"],"name":"Huy Phan"},{"affiliations":["X-Humanoid, Beijing 101111, China"],"name":"Yong Dai"},{"affiliations":["School of Computer Science and Telecommunication Engineering, Jiangsu University, Zhenjiang 212013, China"],"name":"Jiaqi Zhang"},{"affiliations":["University of Washington, Seattle, WA 98195, USA"],"name":"Yunwei Li"},{"affiliations":["Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK"],"name":"Lin Wang"},{"affiliations":["Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK"],"name":"Joshua Reiss"},{"affiliations":["Chair of Health Informatics, Technical University of Munich, Munich 81675, Germany, and also with the Group on Language, Audio and Music, Imperial College London, London SW7 2AZ, UK"],"name":"Björn W. Schuller"}]
paper_digest_abstract_sha256: "1b04ea38f00b6aee546802f087a3dede2b2684284cc8de8f934ca9ff709049e3"
paper_digest_sidecars: {"citation.bib":{"sha256":"3a3e89049fdc7ae07e3680b54a03c4094ef71652fe75ac8cb658e535c926a17f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28765/citation.bib"},"citation.json":{"sha256":"1ede36742579f4efca4ee6f324b88a8443845626968a582ed2934addbc693d0f","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28765/citation.json"},"citation.ris":{"sha256":"1ce9e19d13f0bf3fdb49a8a831a9fd0139bb186b16b89be0d3a360574a588d9e","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28765/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"64ef9564cdae4c4e698e2611ba9d3a99a573708b0eb205c336759c6aede083d5","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28765/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "c0aa46539add3e38fee783fb00009b5c3cec4bd78f203fe6ba9e1d72a75b1f01"
paper_digest_api_reader_plan_sha256: "949611c92815ab2dff225cc2493f235ad23542a43da25de00793bf369331e344"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "47be2c75548802ba841bdf11c2cd2827e09785d9387a0ea8a5ef200eb0b7710c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "14e4e5c6835c91fbfbfa83c5c1ff86a9b56fcd8c1fdc4278d8e317dcaeeaffa9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8ed7bf937a022d726e3a30e9b9bfdff7254423b2c9e8f352d1dc0c9ef55c17f1"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c7caff7a9275a8c150bb0671cf2b0ca8a29497dedf6dc62ccfe34ce2c688bd16"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 从文件去重到作品隔离：多视角对齐的符号音乐评测清洗

> 英文题目：*[Beyond File-Level Splits: Rethinking Symbolic Music Evaluation via Multi-View Alignment](https://arxiv.org/abs/2611.28765v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐检索](/audio-paper-digest-blog/papers/?concept=task.music-retrieval) → [翻唱与曲目识别](/audio-paper-digest-blog/papers/?concept=task.cover-song-identification)
- **研究方法**：[聚类与类别匹配](/audio-paper-digest-blog/papers/?concept=method.clustering)；[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 7.1/10 | 技术严谨 7.8/10 | 实验充分 7.5/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 8.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- Kun Bai：School of Intelligence Science and Technology, Beijing University of Civil Engineering and Architecture, Beijing 102616, China
- Yinghan Wang：College of Science, Beijing Forestry University, Beijing 100083, China
- Canran Xiao：Sun Yat-sen University, Shenzhen 518107, China
- Jiachen Luo：School of Computation, Information and Technology, Technical University of Munich, Munich 80333, Germany, and also with the Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK
- Huy Phan：German Research Center for Artificial Intelligence (DFKI), Luebeck 23562, Germany
- Yong Dai：X-Humanoid, Beijing 101111, China
- Jiaqi Zhang：School of Computer Science and Telecommunication Engineering, Jiangsu University, Zhenjiang 212013, China
- Yunwei Li：University of Washington, Seattle, WA 98195, USA
- Lin Wang：Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK
- Joshua Reiss：Centre for Digital Music, School of Electronic Engineering and Computer Science, Queen Mary University of London, London E1 4NS, UK
- Björn W. Schuller：Chair of Health Informatics, Technical University of Munich, Munich 81675, Germany, and also with the Group on Language, Audio and Music, Imperial College London, London SW7 2AZ, UK

## 📌 核心摘要

**问题与瓶颈：** 符号音乐生成常把 MIDI 事件序列续写作为任务，输入为离散音符与演奏控制序列，输出为后续事件的预测分布，评测用留出集上的预测损失衡量对未见作品的泛化。文件级不相交划分只保证训练文件与测试文件不同，却允许同一作品的另一演奏、改编或剪辑版本留在训练中，模型可凭借作品特异的低音进行、和声与旋律动机获得不应有的损失下降。现有文件哈希与归一化事件指纹只能捕捉完全或编码级重复，元数据缺失时难以恢复作品身份，而共享动机也可能只是偶然相似，粗放去重会误删合法内容。

**核心思路与方法架构：** 与仅用嵌入相似度取并集判定的基线相比，本文增量在于用互补视图召回候选后再以保序局部对应与校准验证区分版本与偶然相似。沿一条 MIDI 文件说明流程：按四分音符为单位解析时间并划分至多 512 个双四分音符片段，每个片段记录高低声部音高、时值与音级分布。五种视图分别为低音音程、转调规范化和声、上声部轮廓动机、音程直方图与时值直方图，经分层可导航小世界索引检索同视图前 100 近邻并保留互为前 50 近邻的候选。候选对经零音高移位的仿射空位动态规划求至多 3 条局部路径，得到 18 个路径衍生特征加 2 个音级辅助特征，连同 29 个全局与 8 个检索特征组成 57 维向量，送入 3 个直方图梯度提升分类器取均值后做 S 形校准，阈值 0.597596 以上的边经连通分支成组，仅删除与固定验证集和测试集同组的训练文件。检索语料内自适应逆文档频率，验证器与阈值在作品不相交划分上拟合后冻结，推理时只用 MIDI 内容，属离线清洗而非流式生成。

**关键实验与核心代价：** 在 100 对人工核验的高相似同作品组的受控训练中，仅替换 3.29% 训练窗为测试作品另一版本，MIDI-GPT 的负对数似然从无关内容条件下的 0.732 降至同作品条件下的 0.526，组内平均相对降幅达 30.16%（95% 置信区间 27.35% - 33.02%），Transformer-L 为 27.09%，而扩散模型的均方误差几乎不变。在 ATEPP 与 LMD-clean 上训练两种生成器并以独立标签隔离为参照，MVA-SWI 的平均绝对逐作品相对 NLL 偏差在 4 种设置下均为非参照条件中最小，ATEPP 上为 0.45% 与 0.51%，明显低于同文件数随机删除的 2.57% 与 5.79%。LMD-clean 上 MVA-SWI 保留至少 98.82% 干净词元但仍残留 17.75% 测试作品暴露，自动长片段复现率在 LMD-clean 上从未清洗的 21.90% 与 22.30% 降至 2.46% 与 3.33%，接近参照的 2.41% 与 3.22%。80 名听众的 4 800 次盲听总体音乐性评分组间差异的 95% 区间均包含零，表明清洗主要改变与留出内容的复现而非可感知的整体音乐性。

**适用边界与深读导览：** 上述结论仅在固定评测内容、同词元预处理与同文件数预算比较，且以独立作品标签度量暴露的条件下成立，阈值与验证器冻结后直接迁移，未针对新分布重调。迟入乐段与乐句重排尚未评测，异质来源泛化明显退化，SecondHandSongs 校准后 F1 仅 72.99%，LMD-clean 漏检 652 对，已测配置均未达到零暴露目标，面向 1% 与 5% 暴露目标选出的阈值也不能跨库迁移，检出重叠也不等同版权侵权判定，未标注语料的漏检率与 4 352 个解析失败文件的影响仍未知。若想深究对齐递推、57 维特征与分组规则可阅读下方长文方法与附录 B，若想核对划分敏感性、预算匹配与审计成本可阅读实验与附录 C - D 的消融与区间说明。

## 🔗 开源与复现资源

- 论文所列链接：<https://kunbai05-nb.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文件不重叠不等于作品不见面：版本暴露如何压低留出损失

符号音乐生成常把 MIDI 续写建模为事件序列预测，用留出集预测损失衡量对未见作品的泛化能力。论文指出，当训练集包含测试曲目的另一演奏版本或改编版本时，这种评测会系统性高估泛化。文件层面不重叠并不能保证作品层面独立，同一作品的不同文件仍会通过共享乐段向模型泄露测试信息。已有去重多依赖文件哈希或归一化事件指纹，只能捕捉编码级重复，难以识别音高节奏变化下保留的作品身份，而作曲家与曲名等元数据又常缺失或不一致。

#### 从文件不交集到作品独立性

记训练验证测试文件集为训练集验证集与测试集，文件身份函数把每个文件映射到其所属作品，作品集合为该映射的值域。文件不交集只要求训练与测试文件没有相同元素，作品独立则要求两者作品集合交集为空。测试作品暴露定义为测试作品在训练中出现任一版本，即使文件不同也算暴露。共享动机或和声进行可能连接不同作品，因此隔离必须区分版本关系与偶然相似，漏检会留下暴露，误连会删除本可保留的合规内容。

#### 受控替换如何量化暴露优势

为量化暴露的因果效应，论文固定测试内容与替换位置，对比干净保留与无关替换及同作品替换 3 种条件。受控队列取自大规模 MIDI 语料，替换窗口占训练窗口的 3.29% ，对应 38,374 个窗口中 1,264 个固定位置窗口。候选由冻结的双嵌入交集以高阈值提名并经 2 位评审逐对确认为同作品，共 100 组测试施主对。重复无关对照匹配重复次数长度与音符密度，以分离重复效应，评估固定 3 个训练种子及 20,000 次更新。

| Model | Objective | Mean loss Clean | Mean loss Unrelated (U) | Mean loss Repeated (R) | Mean loss Same (S) | Control contrasts R−U | Control contrasts R−S | Relative effect Reduction [95% CI] (%) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Transformer-S | NLL | 0.816 | 0.813 | 0.817 | 0.657 | +0.004 | +0.160 | 20.30 [17.62, 23.13] |
| Transformer-M | NLL | 0.812 | 0.800 | 0.810 | 0.638 | +0.010 | +0.172 | 21.46 [18.65, 24.44] |
| Transformer-L | NLL | 0.798 | 0.791 | 0.816 | 0.589 | +0.025 | +0.227 | 27.09 [23.75, 30.58] |
| MIDI-GPT | NLL | 0.736 | 0.732 | 0.747 | 0.526 | +0.015 | +0.221 | 30.16 [27.35, 33.02] |
| LSTM | NLL | 1.220 | 1.210 | 1.237 | 1.153 | +0.027 | +0.084 | 4.74 [3.69, 5.88] |
| TCN-384 | NLL | 1.235 | 1.234 | 1.237 | 1.184 | +0.003 | +0.053 | 4.04 [3.40, 4.75] |
| Conditional VAE | NLL | 0.860 | 0.848 | – | 0.839 | – | – | 1.04 [0.44, 1.67] |
| Latent Diffusion | MSE | 0.015 | 0.015 | – | 0.015 | – | – | 0.01 [−0.07, 0.10] |

表中同作品条件损失全面低于两个无关对照， Transformer-S 、 Transformer-M 与 Transformer-L 的组内平均降幅分别为 20.30% 、 21.46% 与 27.09% ， MIDI-GPT 达 30.16% 且 95% 区间为 [27.35, 33.02]% 。 LSTM 与时序卷积网络仅下降 4.74% 与 4.04% ，条件变分自编码器下降 1.04% ，潜在扩散均方误差变化几乎为 0.01% 且区间包含零。重复无关对照与无关条件接近而明显高于同作品条件，以 MIDI-GPT 为例分别为 0.747 与 0.526 ，说明优势来自版本暴露而非单纯重复。

为把逐组差异汇总为可比指标，论文定义平均相对暴露优势，对每个测试作品先在固定种子与固定内容下平均损失，再取无关与同作品之差相对无关的比值，最后在作品集上平均并乘以 100 。公式中分子为暴露带来的损失下降，分母做归一化以消除作品难度差异，仅在正基线损失下有意义。比较限定在同一模型与同一目标内，组权重相等，符号为正表示暴露降低损失。

\[R=\frac{100}{|\mathcal{W}_{\rm te}|}\sum_{w\in\mathcal{W}_{\rm te}}\frac{\ell_{w}^{({\rm unrelated})}-\ell_{w}^{({\rm same})}}{\ell_{w}^{({\rm unrelated})}},\]

该数学形式把绝对损失差转换为相对比例，直觉是暴露让模型对测试续写更有把握，下降比例越大说明记忆或迁移越强。关键项为逐作品比值而非先平均后相比，因此难易作品权重相同，避免大损失作品主导平均。若同作品与无关损失相等则指标为零，若同作品损失趋近零则趋近 100% ，若同作品更高则为负值。该输出不直接改变训练，而是作为敏感性证据驱动后续隔离，数值仅适用于本高相似入选队列，不估计所有作品的平均效应。

入选队列经高相似提名与人工确认，包含 6 对完整作品与片段对，代表易暴露情形而非随机作品分布。区间采用 10,000 次作品组自举且以训练种子为条件，不包含入选与重训练的不确定性。变分自编码器与扩散探测解码器与去噪目标，与自回归 NLL 不可直接比较。额外短步数运行使用不同显卡，难以单独归因于更新数，附录给出学习率与批量等细节以界定适用范围。

### 多视角检索对齐验证流水线与冻结推理边界

与最接近的内容去重路线相比，方法保留嵌入检索的思路但替换决策依据，已有并集以任一嵌入超过阈值即判重，交集要求双高阈值同时成立，元数据匹配依赖作品标识。 MVA-SWI 新增有序乐段对应证据，用互惠检索过滤候选，再以局部对齐路径特征与校准分类器判定，最后经连通分支只删训练。信号层面解析用 MIDI 刻度除以每四分音符脉冲数，不用速度图与演奏节拍，生成器采用 237 个词元的类 REMI 词表与 1,024 个词元上下文，听感渲染才用 120 BPM 与 16 kHz 。

#### 隐藏重叠示意如何区分相似与同作品

隐藏重叠示意分三栏讲述同一例子，上栏训练含无关曲与星星变奏曲演奏一，评测含演奏二，橙色虚线标出不同文件同作品。中栏左为漏检版本，右为偶然匹配，橙框圈出短暂相似动机并以叉号否定。下栏展示对齐共享乐段的绿色框与连线，底部区分排除变淡的演奏一与保留的无关曲及锁定的评测文件。阅读时先看上下栏的文件归属，再对比中栏两种相似的处置差异。

[![原论文 Fig. 1：Illustrative example of work-level isolation.](https://arxiv.org/html/2611.28765v1/teaser_mvaswi_single_column.png)](https://arxiv.org/html/2611.28765v1/teaser_mvaswi_single_column.png)

*论文图 1：隐藏作品重叠三栏示意：训练含同作品不同演奏，相似不等于同作品，对齐共享乐段后排除训练版本并锁定评测文件（原论文 Fig. 1）。*

上栏训练框含两段钢琴卷帘，评测框含一段卷帘，橙色虚线跨越两栏强调隐藏重叠。中栏偶然匹配的橙框仅覆盖局部高音片段，叉号表明不应据此合并。下栏两条长卷帘各有 3 个绿色框，框间绿色连线表示时序对应的共享乐段，底部排除框变淡而训练与评测框色彩正常并配锁形图标。教学要点是文件与全局线索单独使用会同时漏掉变形版本并误连偶然相似，只有连贯乐段证据能同时减少两类错误。

#### 四步流水线如何从文件到删除决策

完整流水线分四步，检索对 5 个视角各建分层导航小世界索引并取互惠候选，对齐在零移调下做仿射局部动态规划并提取路径特征，验证把 57 维向量经 3 个分类器均值与 S 形校准得概率，连通分支把阈值上边相连的文件归为同组并删除触及验证测试组的训练文件。算法固定检索互惠规则与对齐权重及分类器校准阈值，逆文档频率随当前语料拟合而不使用作品标签，推理使用三分区内容而标签仅用于开发与评估。

下图从左至右展示 4 个面板，面板甲把 MIDI 文件映射到低音和声轮廓音程时值 5 个空间并做分层导航搜索，每视角取 100 个邻居。面板乙把候选对切分为 2 个四分音符段并显示对角热图与辅助色度。面板丙把全局检索局部三块拼为 57 维，经三棵直方图梯度提升树均值与校准曲线得边。面板丁把正边连通分支映射到训练验证测试，仅训练中触及持留组的被叉除。

[![原论文 Fig. 2：Overview of the MVA-SWI workflow.](https://arxiv.org/html/2611.28765v1/MVA_SWI_pipeline.png)](https://arxiv.org/html/2611.28765v1/MVA_SWI_pipeline.png)

*论文图 2：四步流水线：多视角检索互惠过滤，零移调对齐提取路径特征，五十七维向量集成校准，连通分支指导训练删除（原论文 Fig. 2）。*

左侧箭头从文件堆经 5 个视角图标汇入索引，右侧标出 29 维全局与 8 维检索特征的去向，中部互惠 50 与并集去重形成候选对。中间热图横轴纵轴为双方分段，对角橙色断线表示至多 3 条路径，右侧标注 18 加 2 构成 20 维局部证据。右侧集成图标显示三棵树汇入均值符号，再经 S 形曲线与阈值生成蓝色正边。最右训练列两个文件打叉而验证测试标注固定，直观传达评测内容不变仅清训练的原则。

### 五视角互惠检索与零移调保序对齐如何锁定共享乐段

#### 五视角候选如何互惠过滤

5 个视角分别编码低音音程与移调规范化和声序列及高音轮廓动机，以及音程与时值分布，前三者为词元视角经非负哈希到 8,192 维并用次线性词频与逆文档频率加权，后两者为直方图视角经归一化保留分布。低音与高音取 2 至 5 元音程，和声取 2 、 4 、 8 长度掩码并在 12 个移调下取字典序最小式，动机取 3 个连续高音音程与时值对。逆文档频率在当前检索语料内拟合，词元向量经稀疏随机投影到自适应维度再归一化，直方图直接索引，全部余弦检索近似为内积搜索。

每视角建独立索引并为每个有效文件查询至多 100 个非自身邻居，前 50 个决定候选资格，全部 100 个提供验证用排序特征。候选要求双方在同一视角内互为前 50 ，任一视角满足即纳入，跨视角并集去重后按输入文件序存一次。该规则在拟合校准与推理中保持一致，固定候选后验证特征才计算，未被检索的正对直接计为漏检。稀疏投影维度为自适应值，种子按视角排序固定，索引用 M 32 与构造 160 及搜索 200 。

\[\mathcal{C}=\bigcup_{v\in\mathcal{V}}\bigl\{\{i,j\}:i<j,\ j\in N_{v}^{50}(i),\ i\in N_{v}^{50}(j)\bigr\}.\]

互惠要求过滤单向偶然邻近，直觉是真正版本往往在共享音乐属性上双向靠近，而偶然相似多为单向高排。任一视角通过则保留异质数据的互补性，低音和声动机任一强证据都可提名。若邻居预算过小会漏掉变形版本，过大则候选膨胀而本文从 50 到 100 仅增 1.32 个百分点宏召回。该集合输出直接决定后续对齐的计算量与召回上限，是精度与成本的第一个权衡点。

#### 零移调分段相似度与仿射局部对齐

对齐把首音起点移至零后按 MIDI 四分音符单位切分为 2 拍一段，至多保留 512 段，每段记录 8 个起始槽的高低音与起始计数及音级分布和音符数。音符仅归属其起始段，音级权重为力度乘以截断至 2 拍的时值。段间旋律与低音相似度在联合有效槽上平均指数距离，和声节奏为归一化向量内积，密度为对数音符数的指数衰减，加权求和得到段相似度。零移调指音高不移调而非速度不变，揉弦与速度差异仍会损伤对应。

\[s_{uv}=0.30m_{uv}+0.15b_{uv}+0.25h_{uv}+0.20r_{uv}+0.10d_{uv}.\]

权重把旋律定为 0.30 ，和声 0.25 ，节奏 0.20 ，低音 0.15 ，密度 0.10 ，直觉是旋律与和声最能标识作品而节奏与密度辅助区分质地。若两段无联合有效槽则音高项为零，两空段密度为 1 而其余为零，避免空拍误判为相似。该分数驱动仿射间隙动态规划，奖励阈值 0.525 以上为正，低于阈值则倾向断开。输出分数越高越可能形成长对角路径，直接影响后续路径特征的强度。

动态规划用零边界状态与开口罚 0.35 及延续罚 0.08 做局部比对，零重启允许从内部开始，间隙容纳插入删除，回溯取最高分状态并要求至少 4 对匹配，否则终止。至多取 3 条路径并屏蔽已用行列，后续路径可经间隙交叉但保持各自时序，不同路径可处不同全局顺序。路径导出覆盖率调和均值与间隙占比及匹配均值等 14 维，加上零移调聚合色度及其超最优非零移调裕量构成局部块。视角数从 1 增至 5 时候选宏召回从 86.16% 升至 96.13% ，其中 LMD-clean 从 59.55% 升至 88.61% ，间隙罚缩放与切分变化下宏 F1 至多波动 0.6 个百分点。

### 五十七维证据向量校准验证与连通分支隔离如何删除训练文件

#### 五十七维证据如何拼出全局检索与局部

每对候选拼出 57 维向量，前 29 维为全局对比，含五族余弦杰卡德包含率与音程时值 IOI 余弦及 12 移调全局色度最大值与音符轨道音高统计等标量比值。中间 8 维为检索特征，低音和声动机各记倒数最小秩与是否双向百内，加上总数与最大倒数。最后 20 维为局部块， 14 维来自路径得分匹配数覆盖率调和均值间隙占比与五项匹配均值， 2 维为独立色度相似度及其超最优非零移调裕量， 4 维为最小均值与得分覆盖交互。空集零向量与非数无穷按规则置零，全按输入序定向以固定对齐方向。

开发集取作品不交叠的 LMD 分区，共 16,788 个校验和唯一文件与 10,098 个作品，按作品标识哈希百分区分拟合校准测试三桶。拟合用 5 个分片分别建索引取候选后拼行，正例保留全部 8,634 对，每正例无放回抽至多 50 个负例，每分类器约 440,334 例。3 个种子分别拟合类平衡直方图梯度提升树，迭代 260 次，学习率 0.05 ，叶数至多 15 ，叶最小 80 ，正则 8 ，无早停。逻辑回归在完整校准池 1,800 个正例上拟合，截断至 [-50, 50] 。

#### 校准阈值与连通分支如何决定删除

3 个分类器正类概率均值经 S 形函数校准为同作品概率，逻辑回归拟合斜率与截距，参数约为 9.548566767981713 与 -9.098677121144501 。阈值选择要求精度不低于 0.97 且至少 20 对预测正例，其后按 F1 与召回及精度字典序最大并以大阈值断 tie 。若不可行则返回无阈值，分类器校准阈值随特征与候选规则冻结后在目标语料直接应用。主体训练用 RTX 5090 ，短步数重训用 RTX 3090 与 RTX 4090 ，生成器用 AdamW 与余弦衰减至 20,000 次更新。

\[\bar{f}_{ij}=\frac{1}{3}\sum_{b=1}^{3}f_{b}(z_{ij}),\qquad\hat{p}_{ij}=\sigma(a\bar{f}_{ij}+b_{0}),\]

均值集成降低单种子方差，直觉是三棵树在不同负采样下互补，平均后更稳。 S 形把均值映射到校准概率，斜率控制陡峭程度，截距平移决策点，极端均值接近零或一时输出亦趋近两端。阈值偏高保精度而牺牲召回，偏低则反之，本文高精度约束优先避免误删合规内容。输出概率大于阈值的边构成正边图，直接驱动连通分支的合并与删除。

所有文件为节点与正边为边的无向图经并查集合并为连通分支，合并与边序无关，无尺寸上限与分数排序。保留集定义为作品组与验证测试组无交集的训练文件，因此保留集与持留集之间无阈值正边。误连桥会经大分支删除合规内容，漏边会分裂同一作品而留下暴露，残留暴露与干净保留在独立标签下分别度量两类错误。候选至多为视角数乘邻居预算乘文件数除二，对齐每对为序列长乘积至多三次，分支近线性，原文未披露实时率与延迟。审计另用互惠 20 双视角支持加 29 维门控与 49 维验证器的严格配置。

### 跨录音识别隔离保留与预算对齐损失一致性的联合证据

评测固定阈值与队列比较，成对用 ATEPP 与 ASAP 及 LMD-clean 与 MAESTRO ，校准另含 SecondHandSongs 与 Vienna 4x22 及 PianoVAM ，每比较固定队列。基线含文件哈希与归一化事件指纹及 CAugBERT 与 CLaMP 及其并交集与校准并集，阈值分别为 0.93 与 0.87 ，交集双 0.99 ，校准并集 0.964 与 0.876 。成对精度召回 F1 排除同录音并计未检索为漏检，隔离用 20 组配对随机 80/10/10 划分，下游每条件 3 个配对种子固定评测内容，预算对齐另匹配更新窗口与打分词元，听感用 80 位听众 4,800 次正式评价。

#### 跨录音同作品识别精度与校准权衡

下表在固定工作点比较成对识别，精度召回 F1 为百分比， FN 计未命中参考正对含未检索对。哈希与指纹几乎无法跨录音命中，嵌入相似度召回部分但精度随库波动，并集提升召回却压低精度。 MVA-SWI 用 0.597596 阈值，端到端计检索漏检，同一阈值跨四库评估以检验迁移。破折号表示精度无定义，阈值来自开发集高精度约束拟合后冻结。

| Method | ATEPP P | ATEPP R | ATEPP F1 | ATEPP FN | ASAP P | ASAP R | ASAP F1 | ASAP FN | LMD-clean P | LMD-clean R | LMD-clean F1 | LMD-clean FN | MAESTRO P | MAESTRO R | MAESTRO F1 | MAESTRO FN |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHA-256 | – | 0.00 | 0.00 | 3339 | 100.00 | 0.02 | 0.04 | 4987 | – | 0.00 | 0.00 | 2037 | – | 0.00 | 0.00 | 880 |
| Event fingerprint | – | 0.00 | 0.00 | 3339 | 100.00 | 0.02 | 0.04 | 4987 | 96.72 | 20.27 | 33.52 | 1624 | – | 0.00 | 0.00 | 880 |
| CAugBERT | 12.69 | 31.84 | 18.14 | 2276 | 35.67 | 50.36 | 41.76 | 2476 | 94.09 | 28.92 | 44.24 | 1448 | 62.45 | 38.18 | 47.39 | 544 |
| CLaMP | 62.71 | 69.54 | 65.95 | 1017 | 86.64 | 30.03 | 44.60 | 3490 | 94.64 | 26.02 | 40.82 | 1507 | 88.45 | 53.98 | 67.04 | 405 |
| CAugBERT ∪ CLaMP | 22.86 | 76.61 | 35.21 | 781 | 40.34 | 64.43 | 49.61 | 1774 | 94.13 | 33.04 | 48.91 | 1364 | 70.48 | 70.00 | 70.24 | 264 |
| MVA-SWI | 98.08 | 97.72 | 97.90 | 76 | 99.84 | 99.62 | 99.73 | 19 | 96.18 | 67.99 | 79.67 | 652 | 100.00 | 100.00 | 100.00 | 0 |

MVA-SWI 在四库 F1 分别为 97.90% 、 99.73% 、 79.67% 与 100.00% ， ATEPP 精度 98.08% 召回 97.72% 仅漏 76 对， ASAP 漏 19 对。嵌入并集在 ATEPP 召回 76.61% 但精度仅 22.86% ， LMD-clean 即使精度 96.18% 仍漏 652 对，提示需直接度量残留暴露。独立校准后 LMD-clean 从 79.67% 升至 82.35% ， ASAP 保持 99.73% ， PianoVAM 召回从 70.13% 升至 90.91% 而精度从 100.00% 降至 87.50% ， SHS 仅 72.99% 且区间宽至 [51.28, 85.71]% ，与 MAESTRO 的 100.00% 形成对照，限制跨异质源的稳健宣称。

#### 训练池残留暴露与干净保留的权衡

下表在配对随机划分下平均训练池隔离效果，仅清训练， E 为残留作品暴露越低越好， K 为干净词元保留越高越好。并交基线用默认与高阈值及校准阈值，元数据仅在有标识库报告。 20 组划分的平均消除文件数差异，随机删除按 MVA-SWI 文件数匹配以分离选择与规模效应。阈值对列表先 CAugBERT 后 CLaMP ，破折号为未报告。

| Dataset | MVA-SWI (0.597596) E↓ | MVA-SWI (0.597596) K↑ | CAugBERT ∪ CLaMP Default (0.93/0.87) E↓ | CAugBERT ∪ CLaMP Default (0.93/0.87) K↑ | CAugBERT ∩ CLaMP Intersection (0.99/0.99) E↓ | CAugBERT ∩ CLaMP Intersection (0.99/0.99) K↑ | CAugBERT ∪ CLaMP Calibrated (0.964/0.876) E↓ | CAugBERT ∪ CLaMP Calibrated (0.964/0.876) K↑ | Metadata matching E↓ | Metadata matching K↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ATEPP | 1.24 | 99.59 | 18.60 | 31.35 | 99.47 | 100.00 | 44.74 | 75.57 | 22.56 | 95.56 |
| ASAP | 1.61 | 98.82 | 34.81 | 42.66 | 90.69 | 100.00 | 72.54 | 89.18 | – | – |
| LMD-clean | 17.75 | 99.19 | 35.66 | 99.35 | 49.74 | 99.90 | 36.49 | 99.43 | – | – |
| MAESTRO | 0.00 | 100.00 | 20.46 | 66.56 | 67.63 | 100.00 | 41.94 | 84.51 | 2.01 | 100.00 |

MVA-SWI 在四库残留暴露分别为 1.24% 、 1.61% 、 17.75% 与 0.00% ，其中 17.75% 出自本表跨库随机划分审计的平均值，而非下游固定划分中 25/142 约 17.61% ，两者划分与预算不同属不同口径。干净保留分别为 99.59% 、 98.82% 、 99.19% 与 100.00% ， LMD-clean 的 99.19% 略低于同表嵌入基线的 99.35% 至 99.43% 。校准并集在各库保留更高但暴露升至 44.74% 与 72.54% ，元数据在 ATEPP 与 MAESTRO 仍留 22.56% 与 2.01% 暴露，高阈值交集保内容却漏更多版本。

#### 与独立标签参考的损失一致性与预算对齐

为度量自动隔离与独立标签隔离的下游差异，论文对每个测试作品算隔离损失相对参考损失的偏差，正负偏差平均得有符号偏差，绝对值平均得绝对偏差。后者避免跨作品正负抵消，更能反映逐作品偏离幅度。随机删除匹配 MVA-SWI 文件数以分离内容选择与文件量，其他条件保留不同数据量，比较在固定评测内容与配对种子下进行。

\[B_{\rm abs}=\frac{100}{|\mathcal{W}_{\rm te}|}\sum_{w\in\mathcal{W}_{\rm te}}|\delta_{w}|.\]

该形式把损失差除以参考损失，直觉是消除作品难度量纲，使难易作品可比。若隔离损失等于参考则为零，若高于参考为正，若因残留暴露更低则为负。绝对值在平均前取模，极端单作品大偏离不会被反向偏离掩盖。有符号版本保留方向信息，用于预算对齐研究，绝对版本用于多条件接近度排序，两者分属不同估计量而不可互换。

下图分 4 个面板展示绝对偏差，纵轴为相对独立标签参考的绝对偏差百分比越低越接近，横轴为未修正随机删除默认并集校准并集与隔离方法。柱高为 3 个配对种子均值，须线为正负 1 倍标准差，面板分 ATEPP 与 LMD-clean 各乘 MIDI-GPT 与变换器。阅读时先比同面板内柱高，再看须线重叠判断均值比较未做显著性断言。

[![原论文 Fig. 6：Absolute per-work relative NLL deviation B_\\rm abs from the independent-label reference (lower is…](https://arxiv.org/html/2611.28765v1/downstream_deviation.svg)](https://arxiv.org/html/2611.28765v1/downstream_deviation.svg)

*论文图 6：四组下游绝对偏差柱状图：未修正随机删除默认与校准并集及隔离方法相对独立标签参考的平均偏离（原论文 Fig. 6）。*

4 个面板中隔离方法柱最低， ATEPP 上 MIDI-GPT 与变换器分别约 0.45% 与 0.51% ，随机删除则约 2.57% 与 5.79% 。 LMD-clean 上对应为 3.40% 与 1.74% ，随机删除为 7.87% 与 5.97% ，校准并集为 2.41% 与 5.12% 及 5.01% 与 3.53% 。训练池细节显示 ATEPP 隔离暴露 0 而随机暴露 72 ，保留 98.91% 对 63.97% ， LMD-clean 隔离暴露 25 而随机暴露 63 ，保留 99.67% 对 85.19% 。均值比较含种子标准差而不确立条件间显著差异。

下表为独立的预算对齐研究，每条件均用 20,000 次更新与 11,316 个窗口及 5,884,369 个打分词元，初始权重跨 3 个种子匹配。独立参考用标签排除验证测试作品并按确定性哈希定额选窗，原始参考在等文件预算下修复隔离池，评测固定 121 个作品 152 个文件。偏差为有符号均值，区间为配对作品组自举且以种子为条件。

| Condition | Exposed works | Dev. (%) | 95% CI (%) |
| --- | --- | --- | --- |
| Uncorrected | 119/121 | −21.77 | [−22.93,−20.59] |
| Exact dedup. | 119/121 | −21.77 | [−22.93,−20.59] |
| Random removal | 72/121 | −10.11 | [−11.31,−8.93] |
| MVA-SWI | 0/121 | +2.15 | [+1.85,+2.48] |
| Original ref. | 0/121 | +0.89 | [+0.63,+1.19] |
| Indep. ref. | 0/121 | 0.00 | [0.00,0.00] |

未修正与精确去重均暴露 119/121 且偏差为 -21.77% ，区间为 [-22.93, -20.59]% ，说明哈希去重未触及版本暴露。随机删除暴露 72/121 而偏差为 -10.11% ，区间为 [-11.31, -8.93]% ，隔离方法零暴露而偏差为 +2.15% ，区间为 [+1.85, +2.48]% ，原始匹配参考为 +0.89% 。前图与本图训练池预算与参考均不同，绝对与有符号偏差为各自估计量，不可直接互换或合并解读。

下图 3 个面板分别显示训练文件数与 ATEPP 标签下暴露作品百分比及有符号相对偏差百分比，每条件严格匹配更新窗口与打分词元。面板甲对比文件量，面板乙暴露越高越差，面板丙负值表示损失更低而正值表示更高。阅读时纵向对照同一颜色在 3 个面板的位置，区分文件量相同但选择不同带来的走向差异。

[![原论文 Fig. 7：Budget-controlled ATEPP isolation: (a) training files, (b) test works exposed under ATEPP labels…](https://arxiv.org/html/2611.28765v1/matched_reference.svg)](https://arxiv.org/html/2611.28765v1/matched_reference.svg)

*论文图 7：预算对齐下训练文件数暴露作品占比与有符号相对偏差：严格匹配更新窗口与打分词元后的隔离效果（原论文 Fig. 7）。*

训练文件从未修正的 1,140 降至各清理条件的 484 左右，独立参考为 492 。暴露从 98.35% 经 59.50% 降至 0 ，精确去重仍为 98.35% 。有符号偏差从 -21.77% 经 -10.11% 到 +2.15% ，原始匹配参考为 +0.89% 。教学要点是文件量相同下内容选择决定接近度，精确去重因只去完全重复而无效，随机删除减半差距而隔离方法略高于参考反映组成与容量差异。

听感用 2 模型两库 5 个条件 10 个种子， 80 位听众各评 12 组 5 片段加盲重与注意力检查，每片段 10 次评分共 4,800 次正式评价， 8 秒片段经 120 BPM 与 16 kHz 渲染。总体音乐性为主要结局，隔离减未修正差异在 ATEPP 为 +0.09 与 -0.05 ， LMD-clean 为 +0.05 与 +0.06 ，四区间均含零且未预设等效界。自动诊断固定 120 与 119 组，隔离长段匹配率降至 2.46% 至 4.06% ，未修正为 21.90% 至 23.89% ，随机为 10.48% 至 11.69% ，参考为 2.41% 至 3.94% ，旋律节奏与距离与参考差在 0.44 与 0.34 及 0.18 内。七库审计共 3,685,318 个输入文件，随机划分下检测组暴露从 23.13% 到 86.77% ，官方划分可大幅降低重叠。

### 隔离不完美与阈值迁移边界：何时仍需报告残留暴露

隔离在 LMD-clean 仍不完美，Table IV 跨库隔离审计残留 17.75% 暴露，该口径出自 Table IV 隔离审计而非下游 25/142 除法所得，下游固定划分暴露 25/142 测试作品，两者口径不同需区分，随机划分审计与下游固定划分共同说明异质改编与片段仍难全召回。LMD-clean 保留略低于同表嵌入基线的 99.35% 至 99.43%，成对 F1 在 SHS 校准后较低且区间很宽，与 MAESTRO 的满分形成对照，PianoVAM 靠牺牲精度换召回。开发选阈值向持留源迁移时，低暴露目标在 LMD-clean 仍留 2 位数暴露且保留下降，更严目标无可行阈值，说明目标需按目标库重估。跨库保留在严格目标下可大幅下降，阈值迁移需同时核查暴露与保留。

#### 审计器配置与人工抽查边界

语料审计用 49 维快速配置，要求双视角互惠 20 加门控与 0.9396 阈值，比 57 维核心更严，可能漏掉核心候选，暴露估计以其推断组为条件。人工抽查随机边多数为同作品，靶向弱桥多数为同作品，每库大组件中部分含多作品，靶向样本描述失效模式而非流行率，未标注库漏检率未知。部署回放按分降序并限大组合并与尺寸上限，与核心无序无上限的并查集不同，解析失败文件恒为孤立单点，共 4,352 个。

听感 4 组总体对照区间均含零，描述性而未确立等效，自动长段匹配与旋律节奏相似以持留续写为目标，其高低可反映暴露而非感知质量，未修正相似更高距离更低即属此类。均值比较含种子标准差而不确立条件间显著差异，变分与扩散目标不同不可排序，短步数换卡限制归因。检测重叠本身不等同侵权判定，附录强调原始文件受上游许可与第三方权利约束，仅分发汇总结果。

#### 工程选型与复现核对前提

工程上当目标是未见作品泛化时，应把同一作品各版本放入同一划分，固定评测内容仅清训练，并同时报告残留暴露与干净保留及听感而非仅看损失。复现第一步可用冻结检索互惠 50 与零移调对齐及阈值 0.597596 在自有语料跑候选验证分组，若有独立作品标识则另算暴露保留与偏差。论文提及项目页 <https://kunbai05-nb.github.io/>，本次材料仅将其记为第三方提及，不作为作者资源状态依据，未验证流式延迟与实时率前不宜直接部署。附录给出 57 维定义与回溯屏蔽及分桶审计与下游池对照，生成器训练解码与听感协议见扩展结果。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.28765v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：五视图互补召回加保序局部对齐在ATEPP、ASAP等四数据集上F1均居所列方法之首，ATEPP达97.90%且精度召回兼得。

- 核心优势：仅替换3.29%训练窗的受控训练使MIDI-GPT负对数似然从0.732降至0.526，组均相对降幅30.16%并附95%区间27.35%-33.02%。

- 核心优势：固定队列下MVA-SWI在ATEPP上绝对逐作品相对偏差为0.45%与0.51%接近独立标签参照；独立预算匹配研究固定训练窗与更新步数实现121个测试作品零暴露且有符号偏差为+2.15%。

- 主要短板：LMD-clean上仍残留17.75%测试作品暴露且漏检652对，SHS校准后F1仅72.99%且95%区间宽至51.28%-85.71%，异质来源泛化明显退化。

- 主要短板：面向1%开发暴露目标选出的阈值在留出LMD-clean上实际暴露达12.95%且保留率降至92.63%，部分更严目标无可行阈值，阈值不能跨库迁移。

- 主要短板：四组总体音乐性差异的95%区间均包含零且未预设等效界，原文定性结论不确定，清洗的感知收益无法确认。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
