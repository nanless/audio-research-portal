---
title: "Guidance as Variance Matching"
date: 2026-11-27
draft: false
tags: [文本到音频生成, 扩散模型, 形式化分析, 主观评测]
categories: [论文速递]
description: "本文发现实践尺度的引导增大了去噪误差却补足了后验均值缺失的方差，由此给出无须扫描的方差匹配闭式尺度，它复现了 11 个模型的发布值并在盲测中更受偏好，代价是多样性下降与部分分布指标未最优。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.34801"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "引导即方差匹配：为何放大误差反而改善采样"
paper_digest_original_title: "Guidance as Variance Matching"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.34801v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.34801v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.34801v1.pdf"
paper_digest_primary_task: "文本到音频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.text-to-audio","label":"文本到音频生成"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文发现实践尺度的引导增大了去噪误差却补足了后验均值缺失的方差，由此给出无须扫描的方差匹配闭式尺度，它复现了 11 个模型的发布值并在盲测中更受偏好，代价是多样性下降与部分分布指标未最优。"
paper_digest_reader_sections: [{"heading":"引导放大采样质量却推离后验均值：常用解释的裂缝","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从单步去噪到多步采样：后验均值天然丢失方差","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"重训练散点呈缩小版后验协方差：有效样本数决定 spread","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"匹配输入方差得到闭式尺度：逐噪声与全局两种用法","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"常数复现 11 个模型手选尺度，调度在约半数模型改善分布","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"调度对比与形状消融：沿正确方向加方差才有效","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设、失效与复现核对：方差匹配的适用边界","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Massachusetts Institute of Technology"],"name":"Ali Backour"},{"affiliations":["Massachusetts Institute of Technology"],"name":"Artem Lukoianov"},{"affiliations":["Toyota Research Institute"],"name":"Frank Permenter"},{"affiliations":["Massachusetts Institute of Technology"],"name":"Tommi Jaakkola"},{"affiliations":["Massachusetts Institute of Technology"],"name":"Justin Solomon"},{"affiliations":["Massachusetts Institute of Technology"],"name":"Vincent Sitzmann"}]
paper_digest_abstract_sha256: "9ab8795042d2619b380b70d39e55588092f2145e5216728c84e0639cb2aed482"
paper_digest_sidecars: {"citation.bib":{"sha256":"9fda0c905ab5ce7ca0a7520f77e52da13cec095d8fbb70ec870af5a9d146ab61","url":"/audio-research-portal/client/papers/2026-11-27/2611-34801/citation.bib"},"citation.json":{"sha256":"afa6676dced7b680edbed2746b97eff74f04c4277df3070b35e05c91dd4e7ba4","url":"/audio-research-portal/client/papers/2026-11-27/2611-34801/citation.json"},"citation.ris":{"sha256":"b926b684c337260983a5704bce83c3d20c5ae18f21f7463d85256306ef0a3b01","url":"/audio-research-portal/client/papers/2026-11-27/2611-34801/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5e15d73fad9c5340b5517f421aafcb8b4f45d84e46e61d03726d73133567a496","url":"/audio-research-portal/client/papers/2026-11-27/2611-34801/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "657f20412089ce8698ce23c96b678dd198e898d6284f8b7fb9fefcd196a62df0"
paper_digest_api_reader_plan_sha256: "4083ed35b80899d6fee88ce58bf9aaf136ab57b2dc2614fec5bdcd921b03fe2f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9590c3d7d7270d3b1b52622772fa300190bfd5693c0c3a081f1e6cd1f58ec07b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a68c5c850ec9ae522851f04b77a568aa6eb01a2abb0bf4ffa996368a7e357e68"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d375448e8354998a6ab103295bf54f008f9993db6cda83a324d6dccdbd1a4b65"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "cd42f0954f08e584a9837b5980f16195b41f9ee59c96620c0da3ea6a51a115f7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 引导即方差匹配：为何放大误差反而改善采样

> 英文题目：*[Guidance as Variance Matching](https://arxiv.org/abs/2611.34801v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [文本到音频生成](/audio-research-portal/papers/?concept=task.text-to-audio)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[形式化分析](/audio-research-portal/papers/?concept=method.formal-analysis)；[人类参与评测](/audio-research-portal/papers/?concept=method.human-evaluation) → [主观评测](/audio-research-portal/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 8.6/10 | 技术严谨 8.2/10 | 实验充分 7.7/10 | 清晰度 6.5/10 | 影响力 5.6/10 | 开源 0.0/10 | 可复现 7.4/10 | 工程/实践 6.1/10


## 👥 作者与机构

- Ali Backour：Massachusetts Institute of Technology
- Artem Lukoianov：Massachusetts Institute of Technology
- Frank Permenter：Toyota Research Institute
- Tommi Jaakkola：Massachusetts Institute of Technology
- Justin Solomon：Massachusetts Institute of Technology
- Vincent Sitzmann：Massachusetts Institute of Technology

## 📌 核心摘要

**问题与瓶颈：** 扩散与流模型从带噪输入 \(x_t = x_0 + \sigma_t \epsilon\) 预测干净样本 \(x_0\)，采样沿 \(D_\theta(x_t)\) 逐步去噪，引导以 \(D_w = D_0 + w[D_1 - D_0]\) 外推强弱两路预测改善观感。常用解释认为是锐化条件分布或抵消共享误差，但实测矛盾突出，SD 3.5 Medium 发布强度在全部采样步提高训练目标误差，最高达 4 倍，按噪声逐点最小化均方误差得到的最优强度 \(w_{MSE}^\star \le 1\)，远低于实际使用的发布值如 SD 1.5 的 7.5 与 SD 3.5 Medium 的 4.5。根本困难在于后验均值预测的边际方差天然小于数据方差，单步均值无法携带后验协方差 \(Cov(x_0|x_t)\)，有限步 DDIM 因而需要额外结构化变异。

**核心思路与方法架构：** 与最接近的误差抵消观点不同，本文把引导看作恢复方差而非降低误差，改动是从最小化误差改为匹配方差，保留标准引导公式与已有模型冻结不变。取一条预留 COCO 标题对应图像为例，先以前向过程加噪到采样器各 \(\sigma_k\) 得到 \(x = x_0 + \sigma_k \epsilon\)，再用条件分支 \(D_1\) 与无条件分支 \(D_0\) 各做一次前向得到 \(d_1\) 与 \(d_0\)，统计 \(Var[D_w]\) 与 \(Var[x_0]\) 并解关于 \(w\) 的一元二次方程。理论把有限训练建模为在 \(x_t\) 附近见过 \(m(x_t)\) 个独立后验样本并取均值，单次训练预测均值为后验均值且协方差为 \(Cov(x_0|x_t)/m(x_t)\)，两独立模型线性组合保持均值而方差系数为 \(w^2/m_1 + (1-w)^2/m_0\)，令其等于 1 即得同时匹配均值与协方差的强度，逐噪声求解得到调度 \(w(\sigma)\)，在时间上平均得到常数 \(w\)，全程无需生成式网格搜索。

**关键实验与核心代价：** 跨 5 种模态 11 个模型的常数拟合无需采样，原文明确拟合成本低于单次生成评估集，更远低于 SD 3.5 Medium 上 42 个强度的网格搜索，且只需少量样本，SD 3.5 Medium 用 256 张照片拟合标准差为 0.06。拟合值复现发布值，SD 3.5 Medium 为 4.14 对 4.5，整体 Spearman 相关系数 ρ = 0.96。1,458 票 41 人的非正式盲测中，本文常数 Elo 评分为 1048，优于 FDDINOv2 调优常数 985 与 FID 调优常数 874，本文调度 Elo 评分为 1088，优于区间、线性与 TV-CFG 三种手工调度。代价侧同样明确，不同指标最优点分散，SD 3.5 Medium 上 FID 最优在 1.6 而 CLIP 最优在 11.5，样本质量与均值精度反向拉扯。

**适用边界与深读导览：** 结论在两分支协方差方向对齐且 \(m_0\) 与 \(m_1\) 随输入变化不大时成立，高噪声下 CFG 两分支主方向明显错位即失效，自回归检查点因共享训练样本需要更大强度。负根双向引导仅在部分模型对成立，CFG 的条件对齐增益未被建模。欲深究收敛阶证明、有限样本与检查点协方差推导可查附录 A.1 至 A.5，欲核对逐噪声 \(w_{MSE}^\star\)、多样性相关长度与全部指标可查附录 C 与 E.1。

## 🔗 开源与复现资源

- 论文首页资源：<https://ottogin.github.io/vmg/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 引导放大采样质量却推离后验均值：常用解释的裂缝

扩散与流模型在图像、视频、音频与动作生成中都依赖引导来提升采样质量。引导把一次含噪输入 xt 的两个干净样本预测线性组合，主预测 D1 与参考预测 D0 按权重 w 外推。在无分类器引导中，两者是同一网络的条件分支与无条件分支，在自引导中，D0 是更小或训练更少的版本。实践中 w 常远大于 1，例如 SD 1.5 取 7.5，SD 3.5 Medium 取 4.5，Wan2.1 取 5，Stable Audio Open 取 7，这些数值多由生成指标扫描或人工判断选定，而非训练目标直接给出。

\[D_{w}(x_{t})=D_{0}(x_{t})+w\bigl[D_{1}(x_{t})-D_{0}(x_{t})\bigr].\]

上式中 w = 1 回到主预测，w = 0 回到参考预测，w 大于 1 向外推，w 小于 0 则反向外推。由于网络常预测干净数据、噪声或速度，三者经线性换算给出同一采样轨迹，公式对 3 种参数化等价。直觉上，差项 D1 减 D0 放大了两个预测的分歧，w 只控制放大倍数与方向。当两个预测接近时，差很小，需要大 w 才能产生可见位移，当两者在高噪声下相距很远时，同样的 w 会带来剧烈偏移，这为后文按噪声水平分别求解埋下伏笔。输出直接进入 DDIM 等概率流常微分方程的欧拉步，决定下一步向哪个干净估计移动。

为理解常用尺度与训练目标的关系，下图对比了每个模型在训练分布上使均方误差最小的尺度与实际发布的尺度，并展开 SD 3.5 Medium 沿采样步的逐点最优值与速度空间误差，阅读时先看左上各竖线的圆点与圆圈落差，再看右下两条误差曲线的相对位置。

[![原论文 Figure 3：MSE-optimal scales (dots) generally lie below w=1, while published guidance scales (rings) favor…](https://arxiv.org/html/2611.34801v1/wmse-published.svg)](https://arxiv.org/html/2611.34801v1/wmse-published.svg)

*论文图 4：均方误差最优尺度与发布尺度的落差及 SD 3.5 逐步误差对比（原论文 Figure 3）。*

左上每条竖线从均方误差最优尺度连到发布尺度，圆点多落在 w = 1 下方，圆圈多在 1.7 到 7.5 之间，虚线 w = 1 是无引导分界。右上 SD 3.5 Medium 的逐步最优值除第一步外始终低于 1，中位数 0.79，远低于发布的 4.5。右下对数轴上，发布尺度在每一步的速度误差都高于条件模型单独预测，最高达 4 倍。也就是说，实践尺度系统性增大了去噪误差，却改善了采样，单步均值精度不能解释引导。

第 4 节进一步把条件信息与模型误差分开。在 ImageNet-64 上用 EDM2-XS 的两个种子与 EDM2-XL 近似真值，当噪声高于约 5 时，条件与无条件差的平方范数约为模型自身误差的 15 倍，其中几乎全是标签信息，此时加引导反而使 FID 上升 5% 到 9%。当噪声低于约 3 时，差落到模型误差之下，种子相关份额从 17% 升到 42%，只在该窗口加引导可使 FID 下降 4% 到 10%。这说明引导有效区间主要由预测质量差异主导，而非单纯放大条件信号。

### 从单步去噪到多步采样：后验均值天然丢失方差

前向过程把干净样本 x0 加高斯噪声得到含噪 xt，噪声强度随时间从 0 增到高噪声，流匹配插值经归一化可化为同一形式。去噪器 D 以均方误差为训练目标，对每个 xt 预测 x0，唯一最小值是后验均值，即给定 xt 下 x0 的条件期望。网络常输出噪声或速度，经 xt 减噪声强度乘噪声等换算回到 x0 预测，三者在引导公式下等价。采样时 DDIM 沿概率流常微分方程积分，每一步从 xt 向预测的干净点移动一小段，步数有限且预测不完美时，轨迹误差会累积。

若每一步都用后验均值，DDIM 在无穷多步时恢复数据分布，但有限步会丢掉不确定性。后验均值分布的协方差等于数据协方差减去后验协方差的期望，因此恒小于等于数据协方差，单步均值预测天然方差不足。另一极端是向后验随机样本移动，单步即可精确匹配数据分布，但需要从数据本身采样，不现实。折中是在每一步采样高斯近似，即均值加后验协方差平方根乘标准高斯，这正是协方差感知 DDIM 的思想，与 DDPM 加各向同性噪声不同。

\[\widetilde{x}_{0}=\mathbb{E}[x_{0}\mid x_{t}]+\Cov(x_{0}\mid x_{t})^{1/2}\varepsilon,\quad\varepsilon\sim\mathcal{N}(0,I),\]

该式目标是从后验高斯近似中抽一个干净候选，符号中条件期望是中心，协方差平方根决定各方向 spread，epsilon 提供各向同性随机源。物理直觉是保留均值指向的同时，按后验不确定性在不同方向抖动，xt 越不确定，后验协方差越大，抖动越强。当协方差趋于零时退化为 DDIM 均值步，当协方差很大时接近全后验采样。输出直接作为下一步欧拉更新的干净目标，影响整条轨迹的方差与步数需求，理论上把高斯核最大均值差异从 O 1/K 降到 O 1/K 平方。

下图在二维混合高斯与 10,000 张 ImageNet-64 图像上比较了 3 种采样器随步数增加的误差下降速度，横轴为采样步数 K，纵轴为与数据的高斯核最大均值差异，阅读时比较蓝色均值线、橙色均值加协方差线与全后验线的斜率及触底步数。

[![原论文 Figure 4：Samplers that use more than the posterior mean need fewer steps: mean (DDIM, Eq.](https://arxiv.org/html/2611.34801v1/moment-samplers-row.svg)](https://arxiv.org/html/2611.34801v1/moment-samplers-row.svg)

*论文图 5：均值与均值加协方差及全后验采样器的步数效率对比（原论文 Figure 4）。*

左右两图都显示均值加协方差线远快于纯均值线，只需很少步就接近噪声地板，全后验线更快但不可实现。在二维混合上，均值线到 1,024 步仍高于地板，均值加协方差线在数十步内触底。在 ImageNet-64 上趋势相同，说明补充后验协方差形状的扰动能大幅减少步数需求。这为后文把引导看作协方差来源提供动机，但关键是扰动形状必须跟随 xt，而非任意加噪声。

### 重训练散点呈缩小版后验协方差：有效样本数决定 spread

为看清训练随机性如何塑造预测，作者在二维平面上用 10 个高斯混合做可精确求后验的实验。每个去噪器是 4 层多层感知机加正弦对数噪声嵌入，用 Karras 等人的预处理训练 40,000 步，批量 512。对每个训练集大小 N 从 64 到 4,096，各重训 1,024 个模型，每个模型用新种子与新训练集，固定 256 个含噪输入 xt 在 sigma 等于 0.1 到 1.6 上评测，并记录与 N 点经验后验均值的距离。

下图展示该二维实验的全貌，左侧为数据与单个含噪点，中间为不同 N 下 1,024 个预测的散点与弱强配对的外推示意，右侧为 spread 随 N 的衰减与轴向保持，阅读时先沿 a 到 e 跟随均值、散点、外推、整体 spread 与定量衰减的顺序。

[![原论文 Figure 1：Guidance as variance matching, on a two-dimensional example with real trained models.](https://arxiv.org/html/2611.34801v1/concept_story.png)](https://arxiv.org/html/2611.34801v1/concept_story.png)

*论文图 2：二维混合上重训练预测散点与引导恢复后验协方差的演示（原论文 Figure 1）。*

图 a 给出后验均值叉号与虚线协方差椭圆，模型只被训练预测该均值。图 b 中每个 N 的 1,024 个预测形成缩小版椭圆，N 越大越紧。图 c 取 N 等于 64 的弱模型与 N 等于 512 的强模型，引导从 D0 越过 D1 向外走。图 d 对所有配对统计，引导预测恰好撑满后验椭圆大小。图 e 显示 spread 按 1/N 下降且长轴方向不变，对 Adam、随机梯度下降与 N 点精确均值都成立，顶部误差条为 1,024 个模型的自助区间，说明散点形状来自有限样本，而非优化器特有现象。

作者把上述现象抽象为有效样本数模型。网络在 xt 附近只见过 m 个目标，预测是这些目标的平均，重训练分布的均值仍是后验均值，协方差是后验协方差除以 m。设弱强模型的有效数 m0 小于 m1 且相互独立，引导线性组合的均值不变，协方差为括号内系数 c 乘后验协方差，系数只由 w 与 m0、m1 决定。

\[\underset{\begin{subarray}{c}D_{0}\sim p_{N_{0}}\\ D_{1}\sim p_{N_{1}}\end{subarray}}{\Cov}\!(D_{w}(x_{t}))=\underbrace{\left(\tfrac{w^{2}}{m_{1}(x_{t})}+\tfrac{(1-w)^{2}}{m_{0}(x_{t})}\right)}_{c(w,m_{1},m_{0})}\Cov(x_{0}|x_{t}).\]

该式目标是给出引导预测在重训练上的协方差，符号中 D0 与 D1 为弱强预测，m0 与 m1 为各自有效样本数，c 为二次凸函数。当 w = 1 时退化为强模型方差除以 m1，当 w 取方差最小组合 m1 除以 m0 加 m1 时 spread 最小，位于 0.5 到 1 之间。当 w 取匹配后验的两个根时 c = 1，spread 恰好还原。输出作为下一步的干净候选，把两个均值估计变成一个带均值与协方差的样本，相当于把差向量放大到正确尺度。

### 匹配输入方差得到闭式尺度：逐噪声与全局两种用法

实践中无法重采样训练集，只能观测到一对 D0 与 D1 在许多 xt 上的取值，也不知 m0、m1 与后验协方差。作者假设 2 模型相互独立且远处输入误差独立，同一噪声水平下 m0 与 m1 几乎不随 xt 变化，于是对输入平均可代替对重训练平均。由全协方差律，引导预测在输入上的协方差近似等于重训练与输入联合分布的协方差，而后者按模型应等于数据协方差。这把不可观测的后验匹配转化为可估计的输入方差匹配，只补均值预测缺失的方差，不改变其形状。

\[\Var_{x_{t}\sim p_{t}}[D_{w}(x_{t})]=\Var_{x_{0}\sim p_{\mathrm{data}}}[x_{0}],\]

该式目标是令引导预测在前向加噪输入上的总方差等于干净数据的总方差，左侧对 xt 取方差，右侧对 x0 取方差，条件分支传入对应条件。当 w = 1 时左侧多为强模型方差，小于右侧，当 w 增大时二次项主导，左侧单调变大，必有交点。极端上若两预测完全相同，分母为零则无解，若数据方差本身很小，所需 w 也很小。输出 w 直接决定采样时外推强度，逐噪声求解即得无须人工的调度，对输入形状的依赖仍保留在 D1 减 D0 方向上。

\[w_{\mathrm{VM}}^{\star}(t)=\frac{b(t)\pm\sqrt{b(t)^{2}-a(t)c(t)}}{a(t)}.\]

该式是二次方程的求根公式，系数 a 为差的方差，b 为 D0 方差减互协方差迹，c 为 D0 方差减数据方差。当 c 小于 0 时两根异号，正根从弱模型外推强模型，负根反向外推弱模型，两者都能恢复同一协方差大小，这预言了双向引导。对整条采样器取期望即得常数版本，系数先对时间平均再求根。在 SD 3.5 Medium 上拟合只需对 5,705 张校准照片在 40 个噪声水平各算两次前向，约 460,000 次网络评估，远少于一次 10,000 张评测集生成的 800,000 次，更远少于 42 个尺度网格搜索的约 34,000,000 次，且 256 张照片已使标准差降到 0.06。

作者验证只匹配迹而非整矩阵已足够。按理论，引导把后验协方差乘标量 c，w 只定大小不定形状，匹配迹的尺度与拟合 16 乘 16 通道协方差整矩阵的尺度几乎重合，最后一步无解略去。备选的逐点失配绝对值平均与平方平均都会给出更小尺度，中位相对误差分别为 19% 与 24%，不如均值匹配的 12%，因此保留闭式均值匹配。

### 常数复现 11 个模型手选尺度，调度在约半数模型改善分布

评测覆盖 11 个已发布 CFG 模型，跨文本图像、视频、世界模型、音频与动作。每模型用其发布采样器与默认步数，比较设置共享条件与初始噪声，校准用前向加噪的独立样本，不与评测重叠。图像用 FID 与 DINOv2 特征的分布距离、精度召回密度覆盖与 CLIP 分数，视频用 I3D 的 FVD 与 k 近邻指标，音频用各模型自带套件，动作用人修正的 KIT-ML 评测器。人工听测与神经代理严格区分，Elo 来自真人二选一，FID 等为自动距离。

#### 不同指标偏好不同常数

同一模型的最优常数随指标剧烈变化，这是评测引导尺度的首要公平性前提。在 SD 3.5 Medium 上，42 个尺度从 1 到 14 的扫描显示，召回在 w = 1 最好，FID 在 1.6，FDDINOv2 在 2.4，精度类在 3.5 到 4.1，CLIP 在 11.5。发布常数 4.5 不等于其中任何一个的最优点，说明发布尺度并非某单一自动指标的最优，多为人工权衡。

下图把每个指标的最优常数标在对数轴上，空心为搜索下界 w = 1，黑线为本文常数，灰线为发布常数，阅读时先看各指标点的分散跨度，再看黑线与灰线落在哪个区间。

[![原论文 Figure 5：The best guidance scale depends on the metric.](https://arxiv.org/html/2611.34801v1/tuned-w-metric-models.svg)](https://arxiv.org/html/2611.34801v1/tuned-w-metric-models.svg)

*论文图 6：各指标最优常数的分散与本文常数及发布常数的位置（原论文 Figure 5）。*

左图 SD 3.5 Medium 各点从 1 横跨到 11.5，黑线 4.14 与灰线 4.5 都落在中部偏右，靠近精度类最优点，远离 FID 与 CLIP 极端。右图 SD 1.5 黑线 7.44 与灰线 7.5 几乎重合，同样居中。这种指标分歧意味着只报单一指标会误导，本文规则的价值在于不针对任何指标调优，却落在人工选择的附近。

下表给出 SD 3.5 Medium 上按各指标单独调优的常数、发布常数与本文常数在全指标上的得分，加粗为每行被调优的目标指标，便于看出单指标最优的代价。

| Tuned to | wm⋆ | FID ↓ | FDDINOv2 ↓ | PDINOv2 ↑ | PInc ↑ | CLIP ↑ |
| --- | --- | --- | --- | --- | --- | --- |
| FID | 1.6 | 13.40 | 251.4 | 0.665 | 0.623 | 0.2613 |
| FDDINOv2 | 2.4 | 15.60 | 227.1 | 0.722 | 0.678 | 0.2680 |
| PDINOv2 | 4.1 | 20.10 | 239.4 | 0.751 | 0.686 | 0.2714 |
| PInc | 3.5 | 18.88 | 233.1 | 0.740 | 0.694 | 0.2708 |
| CLIP | 11.5 | 23.26 | 280.5 | 0.722 | 0.614 | 0.2740 |
| Pub. | 4.5 | 20.58 | 242.4 | 0.744 | 0.685 | 0.2715 |
| Ours | 4.14 | 20.15 | 240.0 | 0.748 | 0.684 | 0.2713 |
| Ours (w(σ)) | – | 20.13 | 224.0 | 0.765 | 0.667 | 0.2749 |

各调优常数在其目标上为常数行中最优，但在其他指标常落后，例如 FID 调优的 1.6 在 FID 为 13.40 最好，CLIP 仅 0.2613，CLIP 调优的 11.5 在 CLIP 为 0.2740 最好，FID 恶化到 23.26。例外是 FDDINOv2 调优常数的 227.1 差于同表调度行的 224.0，调度在该列更优。本文常数 4.14 几乎复刻 DINOv2 精度调优的 4.1，在目标精度 0.748 对 0.751 仅差 0.003，却在多数非目标上优于其他调优行。调度行进一步把 FDDINOv2 从常数的 240.0 降到 224.0，CLIP 升到 0.2749，说明逐噪声匹配在分布与对齐间取得更均衡的位置。

#### 跨模态常数复现手选

下表给出 11 个模型的常数尺度对比，比较均值匹配、绝对值平均与平方平均 3 种 pooled 目标与发布尺度的距离，黑体为每行最接近发布者。

| Model | Ours | L1 | L2 | Pub. |
| --- | --- | --- | --- | --- |
| SD 1.5 | 7.44 | 6.88 | 6.74 | 7.5 |
| SD 3.5 Medium | 4.14 | 3.79 | 3.24 | 4.5 |
| SD 3.5 Large | 2.88 | 2.65 | 2.66 | 3.5 |
| FLUX.2 [klein] 4B | 4.74 | 4.18 | 4.02 | 4.0 |
| SVD | 1.50 | 1.46 | 1.47 | 2.0 |
| Wan2.1 | 4.40 | 3.49 | 3.46 | 5.0 |
| CogVideoX-2B | 6.22 | 4.48 | 3.82 | 6.0 |
| Cosmos-Predict2.5 | 1.00 | 1.00 | 1.00 | 1.0 |
| AudioLDM 2 | 4.11 | 2.84 | 2.86 | 3.5 |
| Stable Audio Open | 7.88 | 6.26 | 6.58 | 7.0 |
| MDM | 2.23 | 1.56 | 1.63 | 2.5 |
| Median error | 12% | 19% | 24% |  |

本文均值匹配在 11 个模型中的 8 个上最接近发布，中位相对误差 12%，优于另两种的 19% 与 24%。例如 SD 1.5 给出 7.44 对 7.5，SD 3.5 Medium 给出 4.14 对 4.5，Stable Audio Open 给出 7.88 对 7.0，MDM 给出 2.23 对 2.5。SVD 均值 1.50 对 2.0 差距较大，但其发布为逐帧斜坡，均值本就不可比。Cosmos 3 种目标同为 1.00，与发布一致。这支持发布尺度多出自人工权衡，而非某指标最优。

非正式盲测进一步检验人工偏好。41 人在 1,458 次二选一中比较 7 种设置，Bradley-Terry 拟合 Elo 显示本文常数 1048 分高于 FDDINOv2 调优的 985 分与 FID 调优的 874 分，本文调度 1088 分高于 TV-CFG 的 1054 分、区间引导的 992 分与线性调度的 959 分。发布常数 4.5 因与本文 4.14 在全指标差 3% 以内而未参测。Claude 作为额外裁判的 2,500 票排序一致，但区分更尖锐。

### 调度对比与形状消融：沿正确方向加方差才有效

#### 手工调度与本文调度的对比

下表给出 SD 3.5 Medium 上常数、区间、TV-CFG 与线性调度在发布权重与本文常数下的分布与对齐得分，以及本文逐噪声调度的得分，平均 w 为采样步上的均值。

|  |  |  | Inception | Inception | Inception | DINOv2 | DINOv2 | DINOv2 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Schedule | Schedule | mean w | FID↓ | P↑ | R↑ | FD↓ | P↑ | R↑ | CLIP↑ |
| Constant | Pub. | 4.50 | 20.58 | 0.685 | 0.461 | 242.4 | 0.744 | 0.555 | 0.2715 |
|  | Ours | 4.14 | 20.15 | 0.684 | 0.454 | 240.0 | 0.748 | 0.570 | 0.2713 |
| Interval | Pub. | 4.02 | 15.80 | 0.632 | 0.506 | 222.9 | 0.734 | 0.588 | 0.2687 |
|  | Ours | 3.71 | 15.44 | 0.633 | 0.510 | 221.3 | 0.734 | 0.604 | 0.2684 |
| TV-CFG | Pub. | 4.82 | 19.88 | 0.665 | 0.453 | 237.1 | 0.740 | 0.571 | 0.2713 |
|  | Ours | 4.43 | 19.20 | 0.669 | 0.463 | 233.8 | 0.741 | 0.570 | 0.2710 |
| Linear | Pub. | 3.28 | 13.91 | 0.652 | 0.541 | 213.5 | 0.733 | 0.621 | 0.2673 |
|  | Ours | 3.05 | 13.60 | 0.646 | 0.544 | 214.3 | 0.728 | 0.621 | 0.2667 |
| Our schedule | w(σ) | 7.82 | 20.13 | 0.667 | 0.440 | 224.0 | 0.765 | 0.578 | 0.2749 |

把手工调度的基权重从发布换成本文常数，三者 FID 都下降，例如区间从 15.80 到 15.44，TV-CFG 从 19.88 到 19.20，线性从 13.91 到 13.60，说明本文常数对它们也免调优可用。本文调度平均 w 为 7.82，高于常数，在本子表中 Inception 精度 P↑ 为 0.667，低于常数行的 0.685，并非最好，FDDINOv2 224.0 次于线性的 213.5，CLIP 0.2749 则为本子表最好。0.765 是前表调度行在 DINOv2 精度上的取值，不在本子表列内，此处不作跨表比较。区间与线性在 FID 与召回上更优，反映不同调度家族的固有偏好，而非单一最优。

#### 方差形状与双向预言的检验

下表给出 SD 3.5 Medium 上无引导、加各向同性噪声、加数据协方差形噪声与本文调度的对比，后两者加入与调度等量的方差，共享提示与初始噪声。

|  |  |  | DINOv2 | DINOv2 | Inception | Inception |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sampling | FID ↓ | FDDINOv2 ↓ | P ↑ | R ↑ | P ↑ | R ↑ | CLIP ↑ |
| No guidance (w=1) | 21.20 | 388.5 | 0.542 | 0.524 | 0.464 | 0.612 | 0.2409 |
| + isotropic noise | 31.68 | 422.0 | 0.507 | 0.502 | 0.401 | 0.541 | 0.2370 |
| + data-shaped noise | 36.64 | 464.0 | 0.525 | 0.438 | 0.362 | 0.528 | 0.2369 |
| Ours, wVM⋆(t) | 20.13 | 224.0 | 0.765 | 0.578 | 0.667 | 0.440 | 0.2749 |

两种加噪使所有指标都比无引导更差，例如 FID 从 21.20 升到 31.68 与 36.64，FDDINOv2 从 388.5 升到 422.0 与 464.0，CLIP 从 0.2409 降到 0.2370 与 0.2369，而本文调度把 FID 降到 20.13，FDDINOv2 降到 224.0，CLIP 升到 0.2749。这证明等量方差只有沿 D1 减 D0 方向才有效，形状错误会把样本推离数据流形。校准量消融显示 16 例时标准差 0.23，256 例时 0.06，音频约需 3.5 倍样本达到同等相对精度，数百例已够。

双向引导是方差二次方程的独特预言。SD 1.5 与 CommonCanvas 共享隐空间但训练数据不同，双向外推都改善 FID 与 FDDINOv2，而 0 到 1 之间插值差于任一端点。EDM2-XS 不同种子在短 EMA 下同样双向增益，长 EMA 后增益消失。用早期检查点引导需更大尺度，实测比在训练过半后才大于 1，最高达 1.6 到 2.2，低于等权平均预言，指数滑动平均以单一记忆长度拟合可复现该比例。

### 假设、失效与复现核对：方差匹配的适用边界

本文规则依赖 3 组简化假设。第一，m0 与 m1 在同一噪声水平下几乎不随输入变化，第二，不同远处输入与不同重训练的误差独立，第三，引导协方差形状已与后验对齐，w 只定大小。附录证明全协方差拟合与迹匹配几乎重合，支持第三点在 SD 3.5 Medium 成立，但在 CFG 高噪声段条件与无条件主方向明显错位，自引导则始终对齐，这解释了 CFG 在高噪声有害而自引导全程可用。相关误差场实验显示，固定随机场的相关长度越大，样本越集中到少数模式，似然不变而覆盖下降，与增大 w 的多样性下降一致。

未验证的边界同样明确。对 CFG，模型只覆盖 2 分支的预测误差，未建模条件信息带来的对齐增益，因此只有正根有效，负根的双向增益在跨数据对与不同种子对上成立，不保证对所有 CFG 对成立。在 EDM2-XXL 的 ImageNet-512 上，本文常数约为发布的 5 倍，CFG 给出 5.73 对 1.20，自引导给出 9.45 对 2.05，FID 从 4.83 恶化到 11.98，从 4.41 恶化到 30.20，而精度有所上升。作者指出发布值来自 FID 扫描，与人工偏好不必一致，SD 3.5 上 FID 调优同样不受偏好，但 ImageNet 未做人工盲测，不能把该结论外推。

复现核对上，本文方法无需训练，只需前向加噪校准，校准集与评测集不重叠，采样器与步数沿用发布配置。代码权重是否公开在现有证据中未明确，项目页链接只证明正文提到该地址。工程选型上，若追求接近人工手选且免扫描，可直接用常数 4.14 量级，若追求分布与对齐均衡，可用逐噪声调度并接受平均 w 更高与召回略降，若用区间等手工调度，可把其基权重换成方差匹配常数。试听与试看时建议对照项目页样本，重点比较同一提示与同一种子下精度与多样性的变化，而非单看 FID 数值。

执行上方法按采样器噪声逐档校准：对每档用前向加噪构造带噪输入并为条件模型传入原配条件，分别前向得到 2 分支预测，按方差与协方差迹计算每档系数并解二次方程取正根得到逐噪声权重，常数版本则先对各档系数按均匀采样平均再解同一方程。SD 3.5 Medium 用 5,705 张校准照在 40 档上拟合，拟合成本约 4.6×10 的 5 次方次网络前向，低于一次万图评测集生成所需的 8×10 的 5 次方次，更远低于 42 档网格扫描的约 3.4×10 的 7 次方次；256 张照片已可将常数标准差压到 0.06 量级，数百例即可稳定拟合。41 人共 1,458 票的盲测更偏好该常数而非 FID 与 FDDINOv2 调优值，也更偏好逐噪声调度而非区间、线性与 TV-CFG 手工调度；逐噪声调度在 SD 3.5 Medium 平均权重为 7.82，在分布距离与对齐间取得均衡但召回略降，这与增大权重集中模式的机制一致。消融显示全协方差拟合与迹匹配在各档几乎重合，常数目标中按步平均失配的闭式解比最小绝对误差与最小平方误差更接近发布值，中位误差 12% 对 19% 与 24%，因此保留迹匹配与平均失配的简单闭式选择。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音频信号规格原文未披露采样率与帧率，仅给出时长与流程：AudioLDM 2 为 10.24 秒片段，200 步 DDIM，Stable Audio Open 为 47 秒立体声片段，100 步 DPM-Solver++ 3M SDE，校准与评测均用前向加噪，码率与延迟未披露。
- **训练与评测数据**：训练数据沿用各发布模型原训练集，本文不训练新模型；校准用 COCO 5,705 张、MJHQ-30K 1,024 张、UCF-101 1,024 段、OpenVid-1M 256 段、Bridge 1,024 块、AudioCaps 2,223 条、Song Describer 356 条，评测用 disjoint 的 10,000 张图像、1,024 段视频、4,411 条音频等。
- **算力与训练耗时**：原文未披露拟合与评测所用 GPU 或 TPU 型号与数量，仅给出计算量：SD 3.5 Medium 拟合需约 46 万次网络评估，少于一次 10,000 张评测集生成的 80 万次，远少于 42 尺度扫描的约 3,400 万次。
- **核心超参数与配置**：关键超参数为引导尺度本身，无须调优；常数由式 21 闭式求根，调度由式 19 逐噪声求根，采样沿用各模型发布采样器与默认步数，如 SD 3.5 Medium 用 Euler 40 步，SD 1.5 用 PNDM 50 步。
- **推理速度与部署开销**：推理代价为标准引导的两分支前向，无额外 Jacobian 或多步采样；调度平均 w 在 SD 3.5 Medium 为 7.82，高于常数 4.14，原文未披露 RTF、TTFA 与显存。
- **开源产物与协议状态**：论文正文给出项目页地址 ottogin.github.io/vmg，现有证据只证明正文提到该链接，不证明代码权重已开源；各模型检查点沿用公开发布，本文方法本身无需训练。
- **附录与补充材料要点**：附录给出收敛率证明、有限训练与检查点推导、EDM2 与 SD 3.5 的误差对齐、相关误差场与多样性、双向引导、指标权衡、ImageNet 上 VMG 偏大、迹与整矩阵、全矩阵与校准量消融、完整指标与盲测协议及大量采样对比。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.34801v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以方差匹配闭式解免采样复现11个模型发布强度，Spearman相关系数达0.96且SD 3.5 Medium拟合4.14接近发布4.5。

- 核心优势：给出有限训练1/m协方差收缩与检查点求差模型的完整推导，并经1024重训练散布与方向对齐验证。

- 核心优势：本文调度在同一COCO协议下取得最优DINOv2精度与CLIP，并经1458票盲测Elo领先全部手工调度。

- 主要短板：CFG建模仅覆盖两分支误差差异，未包含提示对齐效应，导致负根在CFG上不成立且高噪声主方向错位失效。

- 主要短板：FID与FDDINOv2及CLIP未报告误差棒，且音频侧AudioLDM 2的FAD由2.00升至2.46呈现分布距离权衡。

---

[← 返回 2026-11-27 音频研究日报](/audio-research-portal/posts/2026-11-27/)
