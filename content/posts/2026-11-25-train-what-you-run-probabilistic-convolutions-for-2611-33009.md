---
title: "Train What You Run: Probabilistic Convolutions for Learning Token Compaction in State Space Models"
date: 2026-11-25
draft: false
tags: [视频动作识别, 语音识别, 通用多模态问答, 状态空间模型, 动态计算与早退]
categories: [论文速递]
description: "针对删掉 token 后卷积邻居与扫描状态错位导致训练与部署不一致的问题，ProbConv 以独立保持假设下的精确期望窗口加步长门控实现二进制下与紧凑网络等价，在越紧预算下越大幅领先零掩码对照，代价是训练仍走全长且批量为 1 时加速有限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.33009"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "训练即部署：概率卷积如何学会紧凑 token"
paper_digest_original_title: "Train What You Run: Probabilistic Convolutions for Learning Token Compaction in State Space Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.33009v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.33009v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.33009v1.pdf"
paper_digest_primary_task: "视频动作识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-action-recognition","label":"视频动作识别"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对删掉 token 后卷积邻居与扫描状态错位导致训练与部署不一致的问题，ProbConv 以独立保持假设下的精确期望窗口加步长门控实现二进制下与紧凑网络等价，在越紧预算下越大幅领先零掩码对照，代价是训练仍走全长且批量为 1 时加速有限。"
paper_digest_reader_sections: [{"heading":"删掉 token 为何改变 Mamba 的邻居与状态","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"ProbConv 如何在训练中跑通部署时的紧凑网络","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"期望窗口的线性递推与中心卷积的双向拆解","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"预算约束下的 LapSum 保持概率与直通部署","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"越紧预算差距越大：四类宿主上的精度与字错率对比","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"代价边界与复现核对：何时值得尝试 ProbConv","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland","Doctoral School of Exact and Natural Sciences, Jagiellonian University, Kraków, Poland"],"name":"Piotr Kubaty"},{"affiliations":["Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland"],"name":"Mikhail Saladkou"},{"affiliations":["Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland","Centre for Credible Artificial Intelligence, Warsaw University of Technology, Poland"],"name":"Jacek Tabor"},{"affiliations":["Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland"],"name":"Łukasz Struski"}]
paper_digest_abstract_sha256: "63095dec2c1dec7c9ddd1485fec228d4a115d388f5d977244c05e79fd483f0ff"
paper_digest_sidecars: {"citation.bib":{"sha256":"b294cfdc638041dd766268257196ec159a8800dc2d72ff0153bcae529f15edb9","url":"/audio-research-portal/client/papers/2026-11-25/2611-33009/citation.bib"},"citation.json":{"sha256":"269be3bd83c66cc45c40101353b56e7279108dd6aa9f91384422644eff288103","url":"/audio-research-portal/client/papers/2026-11-25/2611-33009/citation.json"},"citation.ris":{"sha256":"f6d704a06cf5da43f618f3a821bb38a28bd9a35fb1568f0e6eee6cf48c284645","url":"/audio-research-portal/client/papers/2026-11-25/2611-33009/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b6af652c02b7009516df8d67dbe79c9ea68b72928f2abeaaf31339673f32d814","url":"/audio-research-portal/client/papers/2026-11-25/2611-33009/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "477d5eb5e003d414b9b2c71f0b79c9b1f1b47dd78e59ad934cce9e16ddd4091c"
paper_digest_api_reader_plan_sha256: "e0636c058e2999271b22919217b562a6c1774fca3ed8da4ef4a2e421a061c74b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7807823089ba1e3d3fd739c32176593da30dc47102e4e495aa51bb18f5e84e97"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "6c9bd41c4a1ae7e1e929c384c191e67d470cab2601f7bba8d13e2f62c6cc1ed1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "eea2302b6638c38c3ef2c700f49bf9c0ed078c0178896739dc2706dbf664186b"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0964ec481865e8c4e654f08733e003a208f770f38cdfff8fece940b658cfc07f"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 训练即部署：概率卷积如何学会紧凑 token

> 英文题目：*[Train What You Run: Probabilistic Convolutions for Learning Token Compaction in State Space Models](https://arxiv.org/abs/2611.33009v1)*

> ℹ️ 本文基于论文全文节选生成，超出分析上下文上限的内容未纳入。

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频动作识别](/audio-research-portal/papers/?concept=task.video-action-recognition)；[语音识别](/audio-research-portal/papers/?concept=task.asr)；[通用多模态问答](/audio-research-portal/papers/?concept=task.generic-multimodal-qa)
- **研究方法**：[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)；[模型压缩](/audio-research-portal/papers/?concept=method.compression) → [动态计算与早退](/audio-research-portal/papers/?concept=method.dynamic-computation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 8.0/10 | 技术严谨 8.4/10 | 实验充分 8.5/10 | 清晰度 7.0/10 | 影响力 4.0/10 | 开源 0.0/10 | 可复现 8.2/10 | 工程/实践 6.9/10


## 👥 作者与机构

- Piotr Kubaty：Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland；Doctoral School of Exact and Natural Sciences, Jagiellonian University, Kraków, Poland
- Mikhail Saladkou：Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland
- Jacek Tabor：Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland；Centre for Credible Artificial Intelligence, Warsaw University of Technology, Poland
- Łukasz Struski：Faculty of Mathematics and Computer Science, Jagiellonian University, Kraków, Poland

## 📌 核心摘要

**问题与瓶颈：** 图像、视觉语言和视频主干为节省推理开销，只把每输入选出的子集标记送入后层，序列在物理上变短。在带有局部因果卷积与选择性扫描的状态空间模型（State Space Model, SSM）中，删掉一个标记会改变其余标记在卷积窗中的前后邻居，也会跳过循环状态本应发生的更新。零掩码训练把被删槽位填零并照常推进状态，与部署时的紧缩计算不一致，预算越紧时邻域错位越严重，学习到的选择器在部署时失效。

**核心思路与方法架构：** 与保留零槽位的基线不同，本文把每个位置的保留决策看作独立伯努利试验，推导紧缩卷积窗在保留条件下的精确期望，并以可微算子实现，称为概率卷积（Probabilistic Convolution, ProbConv）。沿一个样本看，长度为 L 的投影序列与保留概率 p 一起进入算子，前向按递推维护 K-1 个槽位的期望窗口，输出与偏置相加后经激活送入扫描，扫描步长由 p 缩放实现跳过。该递推每步做 O(KD) 运算，全长为 O(LKD) 且可用前缀扫描并行，反向同时给出对输入、卷积核与保留概率的梯度，保留概率的梯度比较保留与删除两种窗口对损失的影响。预算由可微 Top-k 算子 LapSum 保证期望保留数为 k，嵌套多阶段时后阶段限制在前阶段幸存者内，中心卷积拆为正向与反向两次因果期望之和。

**关键实验与核心代价：** 在 ImageNet-1k 官方验证集上，Vim-Tiny 在每阶段保留分数 ρ = 0.3 时仅剩 18 个标记，概率卷积达到 Top-1 准确率（越高越好 ↑）71.22%，同选择器零掩码对照为 66.52%，配对增益为 4.69 个百分点，在 ρ = 0.8 时两者差距收窄到 0.21 个百分点，优势随预算收紧而扩大。在冻结的 Cobra-3B 上以 6 个基准平均分（越高越好 ↑）衡量，10% 语言模型计算量下本文方法为 61.1%，零掩码加门控为 58.4%，最强免训练规则为 58.6%，在 25% 计算量下为 64.3% 对 63.0%。在 Kinetics-400 上 VideoMamba-Ti 在 ρ = 0.5 时为 75.35%，高于微调的固定范数规则 2.10 个百分点，ActivityNet-v1.3 上 X3D-S 在 10 帧选 2 帧时采样训练达平均精度均值（mean Average Precision, mAP, 越高越好 ↑）69.89%，超过复现的强化基线 0.44 个百分点，而零掩码低于均匀采样。语音 LibriSpeech test-clean 字错率（Word Error Rate, WER, 越低越好 ↓）上因果编码器半数帧保留时本文方法为 27.6%，零掩码为 36.9%，但无恢复直接解码时均匀采样最优。基因组与长上下文上增益小而一致。训练侧融合核在 Mamba-130M 形状上前向加反向耗时 0.61 ms，与稠密核持平，Vim 吞吐仅低 2%-3%，推理侧批量处理加速 1.61-2.84 倍，单样本时因启动开销反而变慢。

**适用边界与深读导览：** 等价性只在二值决策下成立，训练把独立性假设用于固定预算的耦合选择，期望衰减与步长门控衰减在小数概率下并不相同。训练仍走全长序列，节省只在部署出现，图像与视频结论来自 3 轮短微调，加速依赖批量大小与硬件，语音小编码器前端主导耗时故无提速，视觉问答中接近下限的基准无一致增益，基因组路由需更强比率损失才能达到目标压缩。语音在 ρ = 0.3 高剪枝率下以默认选择器学习率会出现发散，需降低一个数量级才能收敛，更大规模从零预训练、在线流式部署与上述预算外的分布偏移尚未系统验证。若想深究期望递推与伴随反向的推导可看附录第 4 节，消融中卷积梯度与门控随主干变化的相反表现可看第 3.7 节与 Cobra 表格，帧选择估计器方差对比可看第 3.2 节，语音前端耗时分析可看第 6 节。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/gmum/probconv> — 链接不可用（HTTP 404）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 删掉 token 为何改变 Mamba 的邻居与状态

Token 紧凑的目标是为每个输入动态选出一个小子集，只把选中位置送入后续层，从而在推理时处理更短的序列。选择器为每个位置给出分数，推理时取 Top-k 硬掩码，后续 Mamba 块只在保留位置上计算。这种设置把学习问题推向选择本身，因为一旦删掉中间 token，卷积窗口读到的邻居与扫描更新的位置都会改变，训练信号必须反映新的邻域。若训练仍按全长序列计算，学到的保留决策在部署时就会错位，紧预算下误差会被放大。

#### 紧凑推理的输入输出与目标

Mamba 块的输入是投影后的序列，输出是混合后的表示。每个块先用短因果卷积聚合局部邻居，再用选择性扫描做长程递推，最后经投影读出。卷积只看最近 K 个位置，扫描的步长与投影矩阵都依赖当前输入，因此删掉 token 会同时改变卷积在每个偏移上读到谁，以及扫描在何处更新状态。类别 token 恒保留并保持相对顺序，其在紧凑序列中的索引会随每张图像而变化，这也影响位置信息的对齐方式。

\[v_{t}=\sigma\Big(b+\sum_{r=0}^{K-1}w_{r}\odot x_{t-r}\Big).\]

该式计算激活前的局部卷积，目标是得到位置 t 的预激活向量。符号中 \(w_r\) 为第 r 个抽头的权重，\(K\) 为核宽，\(b\) 为偏置，\(\sigma\) 为激活函数，\(\odot\) 为逐元素乘，\(x_{t-r}\) 为前 r 步的输入。物理直觉是把最近邻加权求和，若用零填充空槽，窗口会读入 0 并污染求和。极端下全部保留即普通卷积，全部置零则输出只剩偏置，梯度经此窗口流向选择器，决定哪些位置值得保留。

\[h_{t}=\exp(\Delta_{t}A)\,h_{t-1}+\Delta_{t}B_{t}v_{t},\qquad y_{t}=C_{t}h_{t}+Dv_{t},\]

该式描述选择性扫描的状态递推与读出，\(h_t\) 为隐状态，\(\Delta_t\) 为输入相关的步长，\(A\)、\(B_t\)、\(C_t\)、\(D\) 为参数，其中 \(B_t\) 与 \(C_t\) 由输入投影得到，\(v_t\) 为卷积输出。直觉是步长控制遗忘与写入，\(\Delta_t\) 大则多写新输入，小则多保留旧状态。极端下 \(\Delta_t\) 置零使状态不变，对应推理时跳过丢弃位置，输出 \(y_t\) 经 \(C_t\) 与 \(D\) 读出并驱动下一层，误差会沿扫描逐步累积。

#### 删 token 后训练与部署为何对不上

零掩码把丢弃位置写成 0 却保留槽位，窗口仍包含空洞，训练前向与部署时的紧凑序列不同。在固定二进制掩码下，其块输出与物理紧凑的相对误差达 53% 至 57%。DyVM 的重排前向把保留 token 前移，在固定掩码下与紧凑一致，但训练采样掩码与部署 Top-k 掩码之间的相对误差达 27%。因此已有路线要么算错邻居，要么在选择分布上对不齐，这是紧预算下精度塌陷的物理根源，也是本文要解决的核心矛盾。

### ProbConv 如何在训练中跑通部署时的紧凑网络

ProbConv 把每个保留决策看作独立抽样 \(m_t\) 服从 Bernoulli 分布 \(p_t\)，在条件 \(m_t = 1\) 下对紧凑窗口取期望，得到激活前的精确期望。算子对保持概率可微，二进制时与紧凑块完全一致。配合把步长乘以 \(p_t\) 的门控，丢弃位置的状态不再更新，训练跑的就是部署网络，从根本上消除零掩码的空洞偏差。这种设计让选择器在训练中直接看到部署时的邻居结构。

\[\begin{aligned} \displaystyle\text{ProbConv }(x,p)_{t} \displaystyle=\mathbb{E}\Big[\sum_{r=0}^{K-1}w_{r}\odot s^{(r)}_{t}\,\Big|\,m_{t}=1\Big] \\ \displaystyle=w_{0}\odot x_{t}+\sum_{r=1}^{K-1}w_{r}\odot a^{(r)}_{t-1}, \end{aligned}\]

该式给出保留位置 t 的期望紧凑卷积，\(s^{(r)}_t\) 为第 r 个最近保留 token，\(a^{(r)}_{t-1}\) 为其期望，\(w_0\) 直接读当前输入，其余抽头读期望窗口。独立性使 t 之前窗口可不依赖 \(m_t\) 计算，连续延拓到 \(p_t = 0\)。极端下全 1 恢复普通卷积，二进制掩码下恰为真实紧凑窗口，分数值下为激活前精确期望，输出直接送入扫描并经伴随状态把损失影响回传给 \(p_t\)。

#### 与最近基线的实质增量

与最接近的零掩码对照相比，方法保留相同选择器结构与预算 k，只把普通卷积换成期望窗口，并把扫描步长 \(\Delta_t\) 换成 \(p_t \Delta_t\)。与 DyVM 重排前向相比，不再搬移 token，而是按概率平均所有紧凑可能。信号规格上，Vim-Tiny 为 224 × 224 输入的 196 个 patch 加 1 个类别 token，VideoMamba-Ti 为 8 帧切分的 1,568 个 patch token，Cobra 为 729 个视觉 token，X3D-S 为中心卷积，语音为 50 帧每秒的 384 维帧序列，任务覆盖分类问答识别与建模。

#### 1 秒语音帧的端到端张量流

以 1 秒语音为例，原文未披露采样率，仅披露编码器以 50 帧每秒运行。流程为 1 输入 50 帧乘 384 维经前 6 层全序列编码，2 选择器在第 6 层特征上结合中间 CTC 对数几率先验打分并经 LapSum 得到和为 k 的保持概率，3 按 Top-k 选出 25 帧并聚集为 25 乘 384 的紧凑序列，4 后 6 层在紧凑序列上用 ProbConv 与门控扫描运行，5 推理后把丢弃位置用第 6 层表示恢复为 50 帧供最终 CTC 头解码，未披露环节不补造维度。

阅读该图可先看左侧选择器给出的保持概率条形，再沿箭头比较上下两路。上路零掩码在 \(x_3\) 丢弃时仍留空槽，下路 ProbConv 同时画出保留与丢弃两种窗口并取平均。中间展示状态更新差异，右侧直接给出训练与部署是否一致的结论，绿色框标出期望计算与门控是关键，横向三列分别对应窗口状态与部署关系。左侧灰色条形高度表示每个位置的保持概率，和为预算 k，为理解后续平均权重提供依据。

![原论文 Figure 2：Removing a token changes the convolution window.](/audio-research-portal/images/papers/2611.33009/figure-2-bdb85204bd2acc20.png)

*论文图 2：零掩码留空槽与概率卷积平均保留丢弃窗口及门控状态更新的对比示意（原论文 Figure 2）。*

上路零掩码的 \(y_4\) 写成 \(w_0 x_4 + w_1 · 0 + w_2 x_2\)，空洞留在窗口内，状态 \(h_3\) 仍用 \(B_3 · 0\) 更新一次，训练与部署的 token 数与邻居都不一致。下路 ProbConv 以 \(p_3\) 加权保留窗口与丢弃窗口的平均，梯度比较两者对损失的影响，门控 \(p_3 \Delta_3\) 在 \(p_3 = 0\) 时使 \(h_3 = h_2\)，二进制下训练前向即部署网络，这正是后文数值误差小于 3.2⋅10−6 的原因，也解释了紧预算下精度优势的来源。

### 期望窗口的线性递推与中心卷积的双向拆解

#### 期望窗口的线性递推

直接枚举所有掩码组合是指数级的，ProbConv 用线性递推一次前向扫完。状态 \(a_t\) 堆叠各阶期望窗口，\(S\) 把窗口整体下移一槽，\(e_1 x_t\) 把当前输入插入首槽，伴随状态回传损失，整体计算量为 \(O(L K D)\)，并可用前缀扫描并行。原文 fused 算子在 Mamba-130M 块形下正反向共 0.61 ms，与稠密因果卷积相当，Vim 训练吞吐仅低 2% 至 3%，为大规模微调提供可行性。

\[\begin{aligned} \displaystyle a^{(1)}_{t} \displaystyle=p_{t}\,x_{t}+(1-p_{t})\,a^{(1)}_{t-1}, \\ \displaystyle a^{(r)}_{t} \displaystyle=p_{t}\,a^{(r-1)}_{t-1}+(1-p_{t})\,a^{(r)}_{t-1},\quad 2\leq r\leq K-1. \end{aligned}\]

该组递推给出期望窗口的更新，\(p_t\) 为保留概率，\(q_t = 1 - p_t\) 为丢弃概率。保留时把 \(x_t\) 插入前端并把旧窗口后移，丢弃时保持原窗口，对两者按概率平均即得递推。极端下 \(p_t = 1\) 恒为普通卷积，\(p_t = 0\) 恒为保持不动，二进制下窗口恰为真实保留前驱，分数值下为精确期望，输出与偏置激活后送入扫描，梯度经 \(w_r\) 与 \(a^{(r)}\) 流向输入与权重。

#### 中心卷积的双因果拆解

X3D-S 的时间卷积是中心对称的，输出同时读前后帧，无法直接套用因果期望。方法是把它拆成前向因果遍与反向因果遍之和，反向遍的中心抽头置零，两组滤波器相加且中心抽头只计一次。由于保留帧前后两侧的决策相互独立，两遍的期望相加即中心紧凑卷积的期望，双向 Mamba 的前后扫描同理，只需把保持概率随序列反转即可，堆叠多层时仍保持一致。

该图以 \(x_4\) 为例展示中心核的拆解，第一行前向因果 ProbConv 在原片段上读 \(w_{-2} w_{-1} w_0\)，第二行反向因果 ProbConv 在逆序片段上读 \(w_{+1} w_{+2}\) 且中心置 0，第三行两者相加得到完整中心滤波。蓝色块标出实际参与的帧，白色为空位，右侧文字点明滤波相加与中心抽头只计一次的规则，上下三行对齐有助于看清前后邻居如何分工。这种拆分把中心对称问题转化为两次因果期望，为视频帧选择提供理论基础。

![原论文 Figure 4：A centered convolution is two causal ones.](/audio-research-portal/images/papers/2611.33009/figure-4-7f7c253e9f6f14f0.png)

*论文图 4：中心卷积拆为前后向因果概率卷积相加且中心抽头只计一次的示意（原论文 Figure 4）。*

训练时两遍各用一次线性扫描得到前后期望窗口，相加后即部署时只读保留帧的中心窗口。由于前后保留集合独立，期望可分解，\(p_t\) 的梯度同时来自前后两侧邻居的影响。在 VideoMamba 的双向块中，前后扫描各有宽 4 的因果卷积，同样替换为 ProbConv，二进制下双向输出与物理紧凑一致，这是视频三处切割仍能保持精度的结构基础，也是中心卷积能复用因果实现的关键。

### 预算约束下的 LapSum 保持概率与直通部署

#### 预算约束与嵌套掩码

选择器输出分数 \(s\)，推理用 \(m = TopK_k(s)\) 取硬预算，训练用 LapSum 得到和为 k 的保持概率 \(p = LapSum_k(s / \tau)\)。直通估计用 \(m + p - sg(p)\) 使前向走硬掩码而反向经松弛卷积与门控扫描求导。多处切割时掩码嵌套，后一阶段只在前一阶段幸存者中再选，松弛概率连乘，恒保留 token 的保持值固定为 1 且不计入预算，帧选择则对采样掩码求导并把梯度送入边缘概率。

\[\frac{\partial\mathcal{L}}{\partial p_{t}}=\big\langle\bar{a}_{t},\;(Sa_{t-1}+e_{1}x_{t})-a_{t-1}\big\rangle,\]

该式给出损失对 \(p_t\) 的梯度，\(\bar a_t\) 为窗口状态的伴随，\(S a_{t-1} + e_1 x_t\) 为保留 t 的窗口，\(a_{t-1}\) 为丢弃 t 的窗口。内积比较两种选择对损失的影响，保留更优则推高 \(p_t\)，反之压低。极端下伴随为零则无学习信号，窗口差异大则梯度大，梯度经 \(p_t\) 流向选择器分数，同时门控扫描提供第二条梯度路径，两路共同决定保留谁，缺一都会削弱选择能力。

#### 软前向与退火调度的取舍

Vim 用 3 轮微调，第一轮软前向并把 LapSum 温度从 1 线性降到 0.25，后两轮切直通硬前向。Cobra 用退火软前向，温度从 1.5 降到 0.2 并加惩罚使概率推向顶点，训练结束 97% 质量落在 Top-k 上，软硬损失同为 0.722。H-Net 退火到 0.01 仍停在 0.50 附近而未到顶点，说明退火不总能到达部署点。固定二进制掩码下块输出与物理紧凑的相对误差在 3.2⋅10−6 以内，Cobra logits 为 9.7⋅10−7，推理时直接聚集 Top-k 并跑普通块。

### 越紧预算差距越大：四类宿主上的精度与字错率对比

评测覆盖图像、视觉语言、视频与语音 4 类宿主，指标方向各异。Vim-Tiny 在 ImageNet-1k 官方 50,000 张验证图上报告 top-1 准确率，越高越好，微调只用 3 轮。Cobra-3B 在 6 个问答基准上取均分，预算表述为剩余语言模型 FLOPs 比例，骨干冻结。VideoMamba-Ti 在 Kinetics-400 上用 4 乘 3 视角平均，上报 top-1，三处切割按比例保留。语音在 LibriSpeech train-clean-100 上从零训练 Mamba HuBERT，用贪心字符 CTC 无语言模型解码报告 WER，越低越好。所有臂推理时均物理紧凑，每格 3 至 5 个种子取均值与标准差。

#### 图像与视觉语言的紧预算对比

先看冻结 Cobra-3B 的选择器对比，视觉 token 共 729 个，预算取 10% 与 25% 的语言模型 FLOPs，稠密均分为 65.8%。上半为免训练规则，下半在冻结骨干上学习选择器并给均值与标准差，DyVM 预测器含自身目标与重排前向，等时对比给学习基线 1.4 至 1.8 倍更新数，免训练规则无训练耗时可比，比较条件与计算口径保持一致。

|  | 2,000 steps | 2,000 steps | Equal time |
| --- | --- | --- | --- |
| Selection rule | 10% | 25% | 10% |
| Uniform | 57.4 | 62.0 | – |
| Layer-0 Δ | 58.6 | 63.0 | – |
| DTP | 57.5 | 61.4 | – |
| FastV | 56.2 | 62.3 | – |
| DART | 54.9 | 58.7 | – |
| DyVM predictor | 54.9 ± 4.6 | 59.6 ± 3.6 | 55.4 ± 1.7 |
| DyVM predictor + forward | 54.3 ± 0.9 | 59.0 ± 3.4 | 54.7 ± 0.9 |
| Zero mask | 56.8 ± 2.8 | 62.8 ± 0.5 | 57.9 ± 0.3 |
| Zero mask + step gating | 58.4 ± 0.2 | 63.0 ± 0.4 | 58.4 ± 0.5 |
| ProbConv (ours) | 61.1 ± 0.2 | 64.3 ± 0.1 | 61.1 ± 0.1 |

10% 预算下 ProbConv 得 61.1 ± 0.2，高于第 0 层增量的 58.6、DTP 的 57.5、FastV 的 56.2 与零掩码加门控的 58.4 ± 0.2，在同表同列中为最高。25% 下得 64.3 ± 0.1，同样高于同列其他可比行。优势随预算收紧扩大，在 67% 处与零掩码持平，DTP 仅在原生可达站点处领先。所有得分为客观均分，无人工主观听测，也无神经代理指标替代，不存在代理与听感背离，但结论只限客观精度。

再看 VideoMamba-Ti 的三处 token 紧凑，宿主为 7M 参数的 24 个双向 Mamba 块，每向因果卷积宽 4。微调 3 轮，推理物理紧凑，ρ = 0.5 时移除 52% 的单视角乘加，ρ = 0.85 时移除 20%。表中 token 范数免微调为确定性规则无标准差，其余为 3 个种子均值，DyVM 前向指用本文选择器与目标只换训练前向，计算口径与视角数完全对齐。

|  | Tokens kept per cut | Tokens kept per cut | Tokens kept per cut |
| --- | --- | --- | --- |
| Selection rule | ρ=0.5 | ρ=0.7 | ρ=0.85 |
| Token norm, no FT | 65.81 | 73.75 | 75.87 |
| Token norm, FT | 73.25 ± 0.07 | 75.24 ± 0.11 | 76.11 ± 0.08 |
| Zero mask + step gating | 73.15 ± 0.17 | 74.77 ± 0.02 | 75.49 ± 0.11 |
| DyVM forward | 74.78 ± 0.13 | 75.93 ± 0.11 | 76.19 ± 0.12 |
| ProbConv (ours) | 75.35 ± 0.04 | 75.97 ± 0.13 | 76.23 ± 0.14 |

三档预算下 ProbConv 分别为 75.35 ± 0.04、75.97±0.13 与 76.23 ± 0.14，同列均为最高。ρ = 0.5 时比固定范数微调的 73.25±0.07 高 2.10，比零掩码加门控的 73.15±0.17 高 2.20，比 DyVM 前向的 74.78±0.13 高 0.57。稠密为 76.65%，紧凑 52% 计算后仅低 1.30。温和预算下差距缩小到 0.1 左右，符合越紧越强的跨行趋势，HMDB51 三划分平均亦有配对增益。

该图三面板分别给出 Vim-Tiny 在 ImageNet 验证集、Cobra-3B 在 6 基准均值、VideoMamba-Ti 在 Kinetics-400 上的预算曲线，横轴为保留比例或剩余 FLOPs，纵轴为 top-1 或均分。蓝色为 ProbConv，橙色为零掩码加门控，绿色为固定分紧凑微调，棕色为改编 DyVM，每点为 3 个种子均值，推理均为物理紧凑，可直接比较斜率与间距随预算的变化趋势。

[![原论文 Figure 5：The lead over zero-mask training grows as budgets tighten.](https://arxiv.org/html/2611.33009v1/fig_budget.svg)](https://arxiv.org/html/2611.33009v1/fig_budget.svg)

*论文图 5：三宿主精度随预算收紧的变化曲线显示紧预算下概率卷积领先扩大（原论文 Figure 5）。*

3 条蓝色曲线在紧端明显高于其他曲线，Vim 在 ρ = 0.9 处与零掩码持平，到 ρ = 0.3 拉开到 4.69，Cobra 在 67% 处持平，到 10% 拉开到 2.7，VideoMamba 在 ρ = 0.85 处接近，到 ρ = 0.5 拉开到 2.20。固定分与 DyVM 改编在紧端更低，说明收益来自训练前向与部署一致而非选择器容量，温和预算下各方法接近，代价主要在紧预算的精度保持上，符合全文主线。

#### 语音帧丢弃的两种解码设置

语音用 Mamba HuBERT 在第 6 层后保留一半帧，后 6 层在紧凑序列上运行，最终把丢弃帧用第 6 层表示恢复后再做字符 CTC 解码。左两列为因果从零训练与从稠密适配，右列为双向从零训练，学习行共享选择器结构、初始化与预算，报告 test-clean 的 WER，越低越好，5 个种子或 3 个种子取均值，解码均无语言模型。

| WER (%) ↓ Frame selection | Causal encoder scratch | Causal encoder from dense | Bidir. scratch |
| --- | --- | --- | --- |
| All frames | 23.9 ± 0.7 | 22.6 ± 0.9 | 14.3 ± 0.3 |
| Uniform | 30.3 ± 0.3 | 34.8 ± 1.0 | 20.2 ± 0.4 |
| CTC peaks (Soundwave) | 27.5 ± 1.2 | 28.6 ± 0.6 | 14.8 ± 0.7 |
| Zero mask | 36.9 ± 8.3 | 48.2 ± 3.1 | 21.8 ± 2.6 |
| REINFORCE | 26.2 ± 2.8 | 27.9 ± 0.4 | 14.2 ± 0.2 |
| ProbConv (ours) | 27.6 ± 0.9 | 28.8 ± 0.5 | 15.6 ± 2.0 |

因果从零训练下 ProbConv 为 27.6 ± 0.9，远低于零掩码的 36.9 ± 8.3，与 CTC peaks (Soundwave) 的 27.5±1.2 基本持平，但高于 REINFORCE 的 26.2 ± 2.8，并非同列最优。双向从零训练下 CTC peaks (Soundwave) 为 14.8 ± 0.7，ProbConv 为 15.6 ± 2.0，零掩码为 21.8 ± 2.6。从稠密适配时零掩码恶化到 48.2 ± 3.1，ProbConv 为 28.8 ± 0.5。该表未用主观听测，仅以 WER 衡量可懂度，零掩码方差显著更大，说明训练不稳定。

该图上方为 1 句 test-clean 的 log-mel 频谱与词标注，横轴为时间秒，下方各行用短竖线标出不同规则在无恢复 1/4 帧解码下保留的帧。Uniform 均匀保留，CTC top-k 聚在字符发射附近，零掩码出现长连续段，REINFORCE 与 ProbConv 较分散，可对照频谱能量集中处与保留帧是否对齐，判断是否漏掉发射帧，纵向比较能看清各规则的覆盖策略。

[![原论文 Figure 9：The zero-mask selector misses character emissions.](https://arxiv.org/html/2611.33009v1/asr_patterns_main.png)](https://arxiv.org/html/2611.33009v1/asr_patterns_main.png)

*论文图 9：无恢复四分之一帧解码下各规则保留帧与字符发射对齐的单句示例（原论文 Figure 9）。*

零掩码保留长达平均 4.0 帧的连续段，400 句统计中有 57% 的字符发射在 20 ms 内无保留帧，与其高达 80.4% 的 BPE 1/4 帧 WER 一致。ProbConv 与 REINFORCE 更多落在发射及其邻域，静音占比仅 3% 至 5%，而均匀采样为 13%，最长语音间隙仅 60 ms。这解释了紧凑训练为何关键：训练时见到的邻居决定了选择器能否学会把帧放在发射附近，而非堆成连续块，错位直接推高字错率。

#### 消融指向的梯度路径差异

该消融固定选择器与预算，只改训练信号的 3 个开关：前向是否为部署紧凑、经卷积抽头的梯度走 ProbConv 还是零掩码或关闭、是否经步长门控回传。Vim 取 ρ = 0.35 的 69 与 24 个保留，Cobra 取 10% 语言模型 FLOPs，差距列为软保持值精度减去物理紧凑精度，负值表示部署更高，比较时需注意方向与量纲。

| Training computation | Vim, ρ=0.35 top-1 | Vim, ρ=0.35 gap | Cobra, 10% average |
| --- | --- | --- | --- |
| ProbConv (ours) | 71.59 ± 0.12 | +0.08 ± 0.05 | 61.1 ± 0.2 |
| Stop convolution gradient | 71.72 ± 0.16 | −0.04 ± 0.06 | 55.3 ± 2.4 |
| Remove step gating | 64.42 ± 0.35 | +5.60 ± 0.40 | 61.2 ± 0.1 |
| Soft forward | 70.40 ± 0.07 | +2.46 ± 0.07 | = ProbConv† |
| Zero mask + step gating | 67.87 ± 0.32 | +1.98 ± 0.25 | 58.4 ± 0.2 |
| Fixed-score compaction | 66.37 ± 0.11 | – | – |
| REINFORCE, compacted | 65.38 ± 0.44 | – | 60.1 ± 0.3 |

Vim 下 ProbConv 得 71.59±0.12 且差距仅 +0.08 ± 0.05，零掩码加门控为 67.87±0.32 且差距 +1.98 ± 0.25，去掉门控掉到 64.42±0.35 且差距 +5.60 ± 0.40，说明门控主导一致性。去掉卷积梯度得 71.72 ± 0.16，略高 0.13，在噪声范围内。Cobra 下去掉卷积梯度掉到 55.3 ± 2.4，差 5.8，去掉门控为 61.2±0.1 基本不变，结论反转，说明梯度路径宿主相关，单一消融不能推广到所有骨干。

标准差核对显示 ProbConv 在 3 种子下稳定在 0.1 至 0.2，而零掩码在语音中达 8.3，DyVM 预测器在 Cobra 中达 4.6。未胜出项包括无恢复 BPE 解码下均匀采样最优，30 轮 DyVM 食谱在 ρ = 0.7 处反超 0.18，以及 H-Net 上 REINFORCE 差 0.018 至 0.021 比特每碱基。长上下文与基因组结果见附录，未纳入主表比较，温和预算与小批量推理条件亦未充分覆盖，构成明确的适用边界。

### 代价边界与复现核对：何时值得尝试 ProbConv

方法假设保持决策相互独立以便期望分解，固定 Top-k 的耦合被和为 k 的 LapSum 近似，多切割要求掩码嵌套且块间操作在对应保留位置一致，位置信息按部署方式处理，中心卷积要求前后保留独立，这些在语音与基因组中近似成立，在强相关选择下可能偏差，需在新宿主上重新核对。具体执行上选择器先给出每个位置的保持概率，训练用 LapSum 给出和为 k 的可微分概率并经直通估计连接硬 Top-k，前向在二值处即为部署的紧凑网络，反向经松弛卷积与门控步长把梯度传回选择器，推理则直接聚集保留标记运行原块。

#### 机制分工与执行顺序

卷积侧按保留位置计算紧凑窗口的期望，当前保留位置读最近保留标记，前驱缺失补零，期望窗口由保持概率加权递推得到，保持则把当前输入插入窗首并后移旧项，丢弃则窗口保持不动，全一时退化为普通卷积，二值掩码下与物理紧凑的卷积加偏置激活完全一致，分数概率下在激活前精确成立。梯度侧以后向伴随加权保持与丢弃两套窗口之差，使选择器能比较两种选择的损失效应，训练走全长序列而推理只跑短序列。跨切割的新硬决策作用于已保留标记并跨阶段连乘松弛保持值，恒保留标记保持值为一且不计入剪枝预算。

扫描与多切割侧用保持概率乘步长做门控，零概率时衰减为一且写入为零而跳过更新，一概率时恢复原始步长，分数时为状态更新的松弛，二值时与 ProbConv 合在一起在每个保留位置复现紧凑 Mamba 块，双向按正反两向同样构造并反转保持值。多切割堆叠要求每层新掩码嵌套于前一层且块间操作在对应保留位置一致并按部署处理位置信息，中心卷积拆为前向与反向两次因果过程求和，前后保留独立时即为紧凑中心卷积的期望。帧选择可用策略采样的二值掩码前向并经边际保持概率反传梯度。

#### 复现核对与工程选型

训练数据覆盖 ImageNet-1k 的 1,271,167 张训练图、10,000 张开发集与 50,000 张官方验证，Kinetics-400 的 239,789 个训练片段与 19,877 个验证视频，ActivityNet-v1.3 的 10 选 N 帧，LibriSpeech train-clean-100 从零训练，hg38 的 4,096 碱基上下文 20k 步，以及 Cobra 的 6 基准与 LongBench-E 的 3,668 个长提示。优化用 AdamW，骨干学习率 3⋅10−5，选择器 3⋅10−4，Vim 的 LapSum 温度从 1 降到 0.25，Cobra 从 1.5 退火到 0.2，语音峰值 5⋅10−4，硬件涉及 RTX 4090 与 H100 与 GH200，微调多为 3 轮或 80k 步。Vim 先一轮软前向再两轮直通硬掩码，Cobra 用退火软前向逼近二值顶点，训练在全长序列上求算子而同预算下部署序列等长。

推理代价上物理紧凑在批量下加速，VideoMamba 批量 32 时达 651 至 1,133 片每秒，批量 1 时延迟从 18.7 ms 增至 19.6 至 21.0 ms，Vim 训练吞吐低 2% 至 3%，fused 算子正反向共 0.61 ms，语音小编码器因卷积前端占 76% 至 88% 而几乎不省时，批量 1 时核启动开销抵消收益，Cobra 预填充节省随 GPU 与协议变化。论文给出 <https://github.com/gmum/probconv> 链接，但本次核验显示该链接当前不可用，返回 404，不能断言已公开。附录给出二进制下 3.2⋅10−6 与 9.7⋅10−7 的一致性、30 轮与 HMDB51 与基因组消融，原文未提供试听页，语音应用需补主观听测。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：语音编码器以 50 帧每秒运行，12 层宽 384，Mamba HuBERT 在第 6 层后保留一半帧，后 6 层跑紧凑序列并恢复丢弃帧供 CTC 解码；采样率原文未披露，X3D-S 中心卷积与 VideoMamba 双向卷积宽 4，Cobra 视觉 729 个 token，推理延迟与批量相关。
- **训练与评测数据**：ImageNet-1k 1,271,167 张训练图，10,000 张开发集，50,000 张官方验证；Kinetics-400 239,789 训练片段，19,877 验证视频；ActivityNet-v1.3 10 选 N 帧；LibriSpeech train-clean-100 从零训练字符 CTC；hg38 4,096 碱基上下文 20k 步；Cobra 6 基准与 LongBench-E 3,668 长提示。
- **算力与训练耗时**：RTX 4090 用于 Vim 与语音及一致性核验，H100 用于 LDARNet 微调 540 次运行，GH200 用于 Cobra 成本对比；Vim 与 VideoMamba 微调 3 轮，语音 80k 步，H-Net 20k 步；批量 1 与批量 32/64 分开计时。
- **核心超参数与配置**：AdamW，骨干学习率 3⋅10−5，选择器 3⋅10−4，语音峰值 5⋅10−4；Vim LapSum 温度 1 降到 0.25，Cobra 1.5 退火到 0.2 并加和惩罚，视频用嵌套精确预算 LapSum 0.25；蒸馏与 CTC 中间头权重按原文设置。
- **推理速度与部署开销**：物理紧凑批量 32 时 VideoMamba 651 至 1,133 片每秒，批量 1 时 18.7 ms 增至 19.6 至 21.0 ms；Vim 训练吞吐低 2% 至 3%，fused 算子正反向 0.61 ms；语音小编码器前端占 76% 至 88% 几乎不省时；Cobra 预填充节省随 GPU 与协议变化。
- **开源产物与协议状态**：论文给出 <https://github.com/gmum/probconv> 链接，当前无法访问；附录含一致性数值与消融细节，正文未提供试听页。
- **附录与补充材料要点**：二进制掩码下块输出与物理紧凑相对误差 3.2⋅10−6 以内，Cobra logits 为 9.7⋅10−7；附录含 30 轮 DyVM 食谱、HMDB51 三划分、H-Net 与 LDARNet 路由、ReMamba 长上下文与 Uni-AdaFocus 策略对比及失效案例与压缩曲线。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.33009v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在独立保留假设下推导紧缩卷积窗精确期望的线性递推与伴随梯度，二值时与物理紧缩严格等价。

- 核心优势：在ImageNet官方验证集、Cobra六基准与Kinetics等多公开集上以同选择器匹配对照验证紧预算优势并报告多种子统计。

- 核心优势：以1e-7量级相对误差数值验证二值前向与紧缩计算一致，而零掩码误差达53%以上，确证训练即部署。

- 主要短板：训练仍走全长序列节省只在部署出现，加速高度依赖批量与硬件，单样本反而变慢且语音前端主导无提速。

- 主要短板：语音无恢复直接解码时均匀采样最优且与CTC Top-k基本持平，REINFORCE持平或略优，基因组与长上下文增益小，VSR与VizWiz无一致增益。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
