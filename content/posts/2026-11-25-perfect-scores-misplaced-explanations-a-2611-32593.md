---
title: "Perfect Scores, Misplaced Explanations: A Controlled Study of Explainability in Audio Deepfake Detection"
date: 2026-11-25
draft: false
tags: [音频深度伪造检测, 信号处理, 评测协议, 可解释性]
categories: [论文速递]
description: "针对 wav2vec 2.0 伪造检测器难解释且常用保真忠实指标可能失灵的问题，本文构建跨样本优化的时频掩码解释器，以三组数据上接近 1.000 的保真度与忠实度为最强证据，揭示其在变化频带上定位跌至随机水平的代价，且填充选择决定解释形态而指标无法反映。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32593"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "满分却不可解释：音频伪造检测中解释指标的受控检验"
paper_digest_original_title: "Perfect Scores, Misplaced Explanations: A Controlled Study of Explainability in Audio Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32593v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32593v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32593v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 wav2vec 2.0 伪造检测器难解释且常用保真忠实指标可能失灵的问题，本文构建跨样本优化的时频掩码解释器，以三组数据上接近 1.000 的保真度与忠实度为最强证据，揭示其在变化频带上定位跌至随机水平的代价，且填充选择决定解释形态而指标无法反映。"
paper_digest_reader_sections: [{"heading":"伪造判定准确却说不清依据：保真度与忠实度为何会失灵","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结检测器加可训练掩码预测器的双路流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"掩码如何合成与填充为何决定解释零点","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"跨样本摊销优化的损失与自举填充学习","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"满分保真忠实却只有随机水平定位：受控频带实验的背离","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"指标优化即失真：假设边界与复现选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"David Combei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dan Oneata"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Francesco Paissan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Cem Subakan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Horia Cucu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Adriana Stan"}]
paper_digest_abstract_sha256: "7896c39589d1e40c50d57ebc2b6c4f427bcd8155d59a3f4142945a03a3e98363"
paper_digest_sidecars: {"citation.bib":{"sha256":"e8e0a1f89302166658b89020a74d3ef21810152fcfc84f7baa3afa0f1f9a38ec","url":"/audio-research-portal/client/papers/2026-11-25/2611-32593/citation.bib"},"citation.json":{"sha256":"40d6bed503e8dbfd8339c2a3fc299df881c831320f92b410f245a9c7df11140c","url":"/audio-research-portal/client/papers/2026-11-25/2611-32593/citation.json"},"citation.ris":{"sha256":"2c196c0ef85ec1889cfe2f7f7739a34fc247e5694d0765e6379400913f9d333b","url":"/audio-research-portal/client/papers/2026-11-25/2611-32593/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"383b337fa5727799270a03edd98b98f0fdce7f92d063f3ba497712ff660be914","url":"/audio-research-portal/client/papers/2026-11-25/2611-32593/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "7b00196b006fc07d87f28d06e8f0831ff7706557194dc554a42c7f5e87eb309f"
paper_digest_api_reader_plan_sha256: "6937de3592f72d03bf6640f3425460dee759892b9f94731886471fe9db53d759"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d266397cba940b70bb99d8e26187d8720b165711133e61a2937f723bcfa2888e"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e57edf720bbead3cecc66e9d43d19d3188b9f88f7d05d918c37ff73ec47549b9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1b76e6ad0b4c91b82b9eb5510d33e26f593652fe3c53049c06a4c3ea50957f34"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c3513073be41eca3b58d6b772596befb001c89336c5a3345dbd23a4d8c5cec1b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 满分却不可解释：音频伪造检测中解释指标的受控检验

> 英文题目：*[Perfect Scores, Misplaced Explanations: A Controlled Study of Explainability in Audio Deepfake Detection](https://arxiv.org/abs/2611.32593v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)；[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)
- **研究重点**：[可解释性](/audio-research-portal/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.7/10** | 创新 6.8/10 | 技术严谨 7.1/10 | 实验充分 7.2/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- David Combei：机构信息未能在本次解析中与作者逐人可靠绑定
- Dan Oneata：机构信息未能在本次解析中与作者逐人可靠绑定
- Francesco Paissan：机构信息未能在本次解析中与作者逐人可靠绑定
- Cem Subakan：机构信息未能在本次解析中与作者逐人可靠绑定
- Horia Cucu：机构信息未能在本次解析中与作者逐人可靠绑定
- Adriana Stan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 待判定输入是裁剪或补零到 5 秒的 16 kHz 时域波形，输出是真实或伪造的二分类判定。高性能检测器依托大规模自监督表示区分伪造语音，却不说明依据哪部分信号，在虚假信息与电子证据等场景中难以建立信任。已有人工可理解特征方案性能落后，逐样本梯度标注难以同时通过保留即维持判定与移除即改变判定的常用检验。

**核心思路与方法架构：** 与其逐样本求梯度，不如冻结检测器并跨样本训练一个可复用的解释器，直接优化保真度与忠实度两项指标。该 5 秒波形先经短时傅里叶变换 (STFT，窗长 1,024 个采样点、快速傅里叶变换点数 1,024、跳长 256 个采样点) 展开为时频语谱图。三层二维卷积加 Sigmoid 的 U-Net 对该语谱图预测同尺寸 0 到 1 软遮罩，接近 1 视为支持判定的证据。遮罩与填充信号 (fill) 加权组合出仅保留遮罩区与仅移除遮罩区两种语谱图，再经可微逆短时傅里叶变换 (iSTFT) 合成波形送入冻结检测器。该检测器固定 XLS-R 2B 第 9 / 48 层特征、全局平均池化与逻辑回归参数不变，只输出伪造概率以监督解释器，推理时仅需解释器前向预测。训练以二元交叉熵约束保留区维持原判定、移除区翻转判定并以 1 范数鼓励稀疏，对比全零、训练集平均、配对真实与优化四种填充，其中优化填充被学习为使检测器输出 0.5 不确定并与解释器交替自举更新。

**关键实验与核心代价：** 在 MLAAD 真实语料上检测器区分能力的等错误率 (EER，越低越好 ↓) 为 7.4%，本文解释器只保留遮罩区时预测不变的比例即保真度 (fidelity，越高越好 ↑) 为 1.000、移除遮罩区时概率下降即忠实度 (faithfulness，越高越好 ↑) 为 0.999，显著图基线为 0.855 和 0.057，随机基线保真度也达 0.993。以 LJ Speech 单说话人经 HiFi-GAN 声码器替换单个 1 kHz 频带的固定操纵带实验中检测器等错误率为 0.0%，优化填充以遮罩值区分操纵点的曲线下面积 (AUC，越高越好 ↑) 为 0.811、落入操纵带的遮罩占比即相关质量占比 (RMA，越高越好 ↑) 为 0.289，配对真实填充为 0.897 和 0.436，显著图基线为 0.497 和 0.090。频带逐样本变化时检测器等错误率为 0.04%，优化填充跌至 0.505 和 0.124，仅配对真实填充保持 0.728 和 0.358，说明填充决定定位而两项指标始终满分。代价是遮罩锐利却难对应合成瑕疵，不同填充对同一输入给出不同遮罩并延伸进静音段，且仅做可视化检查而无人工听感评分。

**适用边界与深读导览：** 结论成立于特定检测器、HiFi-GAN 声码器合成的 1 kHz 频带替换、单说话人数据与仅解释伪造判定的前提，未覆盖其他检测器、真实判定解释与开放场景瑕疵，也未提出更稳健的指标。本文未提供音频演示页。欲深究掩码组合与损失设计可查方法公式，欲核对填充影响与定位失效可查实验表格与遮罩图。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 伪造判定准确却说不清依据：保真度与忠实度为何会失灵

音频深度伪造检测需要在政治虚假信息与电子证据等高风险场景中给出可信判断，当前最强检测器大多建立在 wav2vec 2.0 等大规模自监督语音表示之上，再叠加池化与线性分类器，在跨数据集与跨篡改类型上保持了很好的判别精度。然而准确区分真假并不等于说清依据，专家听辨本身就很困难，基于呼吸模式、基频或手工声学特征的可解释分类器性能仍明显落后。高精度与难解释之间的张力，正是本文的起点。

为此作者把解释定义为时频域上的软显著图，掩码值接近 1 表示支持当前判定的证据，接近 0 表示无关区域。评价沿用两项标准指标，保真度要求只保留掩码区域仍能维持原判定，忠实度要求移除掩码区域后伪造概率明显下降。方法上与声音、图像和文本分类中的优化掩码路线相近，但首次系统用于音频伪造检测，并与显著图、输入乘梯度及随机超像素基线放在同一封装检测器上对比。

核心矛盾随即显现，用跨样本摊销优化直接最大化这两项指标后，解释器在真实与受控数据上都拿到接近满分，却在目视上呈现难以关联到合成痕迹的锐利散点。更关键的受控扰动显示，填充被移除区域的信号选择几乎决定了解释长什么样与能否定位，而指标对此毫无反映。读完本节应能复述，满分不等于可解释，填充即解释的零点。

### 冻结检测器加可训练掩码预测器的双路流水线

与最接近的梯度路线相比，本文保留了冻结的高性能检测器，替换了单样本梯度求导的解释方式。检测器固定为 wav2vec2 XLS-R 2B 第 9 层特征加全局平均池化与逻辑回归，音频采样率为 16 kHz，STFT 与 HiFi-GAN 一致为窗长 1024 点、FFT 1024 点与跳长 256 点，所有语音裁剪或补 0 到 5 秒。解释器则改为跨越多样本训练的 U-Net，直接预测与频谱同尺寸的稀疏掩码，推理时一次前向即可得到解释。

以 1 秒输入为例，它对应 16,000 个采样点，经 STFT 得到频谱 s，再经 3 层二维卷积的 U-Net 与 sigmoid 得到同尺寸掩码 m，其中 U-Net 通道数与 wav2vec 特征维度原文未披露。掩码与填充 z 按保留与移除两种方式合成新频谱，经可微 iSTFT 变回波形后送入冻结检测器得到封装概率，该流程对应架构图中上下两路的箭头、冻结标记与汇合节点。请先沿左侧音频分叉看上路直判与下路掩码复判，再注意乘法节点与损失节点的连接。

[![原论文 Figure 1：Proposed xAI method. For a frozen audio deepfake detector f, we learn an explainer that predicts…](https://arxiv.org/html/2611.32593v1/figure2_combined.png)](https://arxiv.org/html/2611.32593v1/figure2_combined.png)

*论文图 1：冻结检测器与可训练解释器的双路结构，上路直接判真伪，下路经频谱掩码与逆变换后复判以学习稀疏显著区域（原论文 Figure 1）。*

架构图上半为冻结检测器 f，虚框内依次是 wav2vec 2.0、average pooling 与 linear，右上角雪花标示冻结，输出为标签 y。下半为解释器，先经 STFT 得到 s，再经粉色 U-Net 得到 m，下方小图分别示意稀疏掩码 m 与掩码化频谱 m⊙s。两者经圆圈乘法节点与填充合成后，经 iSTFT 与同一冻结 f 得到 y_masked，最终与 y 一起进入损失 L，约束 y_masked≈y，绿色虚线分隔检测与解释两部分。

训练时只有 U-Net 与优化填充更新，检测器始终冻结，避免解释器编码标签信息。推理时无需逐样本迭代优化，一次前向即可输出掩码，因此对单个输入的偶发纹理不敏感且速度更快。原文未披露延迟、TTFA、RTF 与显存开销，也未给出 U-Net 学习率与批大小，部署代价无法从本文直接推断。

### 掩码如何合成与填充为何决定解释零点

检测器直接吃波形只能说清何时重要，语音专家更关心哪个时频区域重要，因此解释必须做在谱域。掩码 m 取值限定在 [0, 1] 区间，同频谱 s 等大，填充 z 则扮演解释的零点，掩码决定哪些区域保留原谱、哪些区域用零点替代。不同零点的选择会改变解释相对什么而言成立，这是理解后文 4 种填充分化的关键。

#### 保留与移除的掩码合成

该式的计算目标是用掩码与填充合成两路对照输入，符号中 s 为原谱，m 为软掩码，z 为填充谱，⊙ 为逐元素相乘，s_m 表示只保留掩码内区域，s_mbar 表示只保留掩码外区域。两路共享同一 m 与 z，只是加权方式互补，为保真与忠实提供可比的输入对，该构造是后文所有填充对比的共同起点。

\[\begin{aligned} \displaystyle\mathbf{s}_{\mathbf{m}} \displaystyle=\mathbf{m}\odot\mathbf{s}+(1-\mathbf{m})\odot\mathbf{z}, \\ \displaystyle\mathbf{s}_{\bar{\mathbf{m}}} \displaystyle=(1-\mathbf{m})\odot\mathbf{s}+\mathbf{m}\odot\mathbf{z}, \end{aligned}\]

物理直觉是保留路应留下判伪证据，移除路应带走证据，填充即假设无关区域应长成的样子。极端下 m 全为 1 时 s_m 退化为原谱而 s_mbar 退化为纯填充，全为 0 时反之，中间值则在每格做线性插值。两路经 iSTFT 变回波形后送入同一冻结检测器，输出概率差直接驱动解释器的梯度更新。

#### 保真度与忠实度的判定逻辑

保真度的目标是检验只看掩码是否足以维持判定，符号中 f 上加帽表示经 iSTFT 封装的检测器，H 表示以 0.5 为阈值的二值化，[[]] 为示性函数，相等取 1 否则取 0。该值在单样本上非 0 即 1，跨样本平均即为保真率，方向越高越好，该定义直接决定后文保真列的统计口径。

\[\mathrm{FID}:=\big[\!\big[\,H(\hat{f}(\mathbf{s}))=H(\hat{f}(\mathbf{s}_{\mathbf{m}}))\,\big]\!\big],\]

统计直觉是充分性，只保留高亮仍判伪才算抓住证据。极端下随机掩码因软加权处处残留部分原信号，仍能以 0.98 以上保真蒙混过关，说明该指标对任意解释过于宽容。保真分支对应训练损失中逼近原预测 y 的二元交叉熵项，推动掩码保留足以触发检测器的最小区域。

忠实度的目标是衡量移除掩码后伪造概率的下降量，符号中第一项为原谱的伪造概率，第二项为移除路的伪造概率，差值越大说明被拿掉的区域越关键。该值为连续概率差，方向越高越好，与保真度共同约束掩码的必要性与充分性，其数值大小决定掩码能否让判定翻转。

\[\mathrm{FTH}:=\hat{f}(\mathbf{s})-\hat{f}(\mathbf{s}_{\bar{\mathbf{m}}}).\]

直觉是必要性，拿掉关键证据判定应翻转。极端下梯度基线在 3 组数据上忠实度仅 0.000 到 0.085，几乎无法让概率下降，而优化掩码可达 0.986 以上，差距决定了训练能否形成稀疏翻转。该差值对应损失中逼近翻转标签 1-y 的第二项，与稀疏惩罚一起塑造掩码的形状与大小。

4 种填充分别对应不同零点假设，零填充全零谱，平均填充为训练集平均谱，真实填充取同说话人同内容的配对真谱但无时间对齐，优化填充则学习使检测器输出 0.5 最不确定的单张谱。零点不同则掩码的相对基准不同，这解释了同为满分却形态各异的现象，真实填充在训练中已隐含操纵位置，其定位优势需打折理解。

### 跨样本摊销优化的损失与自举填充学习

参数冻结边界清晰，检测器侧 wav2vec 2.0、池化与线性层全程冻结，右上角雪花标记即此意，可训练的仅有 U-Net 掩码预测器与优化填充单张谱。输出虽经 sigmoid 限幅与线性分类头，但前端深度非线性使决策边界高度非线性。跨样本摊销训练让推理更快，也减少对单个输入偶发纹理的过拟合。

训练损失的目标是同时实现保留保真、移除翻转与掩码稀疏，符号中 y 为原输入的检测器预测，BCE 为二元交叉熵，α、β、γ 为三项权重，‖m‖1 为掩码绝对值和。第一项约束保留路逼近 y，第二项约束移除路逼近 1-y，第三项压缩掩码面积，具体权重数值原文未披露。

\[\displaystyle\mathcal{L}=\alpha\,\mathrm{BCE}\big(\hat{f}(\mathbf{s}_{\mathbf{m}}),\,y\big)+\beta\,\mathrm{BCE}\big(\hat{f}(\mathbf{s}_{\bar{\mathbf{m}}}),\,1-y\big)+\gamma\,\|\mathbf{m}\|_{1},\]

采用该加权形式的直觉是把充分性、必要性与简洁性折中，稀疏项防止全亮平凡解。极端下 γ 过大掩码坍缩到全零导致两路皆为填充，γ 过小则全亮失去解释意义，α 与 β 失衡会偏向只保真或只翻转。梯度只流向 U-Net 与优化填充，检测器不更新，从而保证解释是对固定判定的事后归因而非联合编码。

优化填充采用自举学习，先学出使自身判为 0.5 且与真伪输入在各类掩码下组合仍保持原判定的谱，再用已训掩码重学填充并重训解释器。零填充与平均填充固定不变，真实填充直接取配对真谱。对照的显著图与输入乘梯度经 Captum 作用于同一封装检测器，随机基线在超像素上取 [0, 1] 均匀分数，用于检验指标能否区分任意解释。

为排除容量不足的解释，作者另设随机矩形定位对照，同一 U-Net 结构可达 AUC 1.0，说明变化频带定位失败并非学不动任意位置。训练只用伪造样本，因真判定可能依赖异常缺席而无法用掩码高亮，这一选择限定了结论只适用于伪造证据定位。

### 满分保真忠实却只有随机水平定位：受控频带实验的背离

评测分 3 组，真实组用 MLAADv9 按 298 个模型语言组合抽 10% 得 27k 个伪造加 M-AILABS 27k 个真实，检测器按 80:20 划分训练测试，解释器只在伪造上训练评价。受控组取 LJ Speech 5k 个单说话人高质量真音重采样到 16 kHz，用 LibriTTS 训练的 HiFi-GAN 声码化后在复数谱域替换单个 1 kHz 带，8 选 1，固定组全样本同带，变化组逐样本随机。3 组检测器等错误率 EER 越低越好，分别为 7.4%、0.0% 与 0.04%，解释指标 FID、FTH、AUC 与 RMA 均越高越好，随机 chance 为 AUC 0.5 与 RMA 0.125。

#### 主结果全量对照与最强收益代价

为保留全部基线与 3 种数据条件的公平对比，下段完整转录原文主表的 8 行 14 列数值与方向标记，空列仅为视觉分隔，箭头向上表示越高越好。比较时请先看真实组保真忠实，再看固定与变化带的定位分化，特别注意随机基线与平均填充的反差，该表是后文满分与随机定位背离判断的唯一数字依据。

|  | Method | Realistic (EER 7.4%) FID↑ | Realistic (EER 7.4%) FTH↑ |  | Fixed band (EER 0.0%) FID↑ | Fixed band (EER 0.0%) FTH↑ | Fixed band (EER 0.0%) AUC↑ | Fixed band (EER 0.0%) RMA↑ |  | Varying band (EER 0.04%) FID↑ | Varying band (EER 0.04%) FTH↑ | Varying band (EER 0.04%) AUC↑ | Varying band (EER 0.04%) RMA↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Random | 0.993 | 0.005 |  | 1.000 | 0.000 | 0.500 | 0.125 |  | 0.981 | 0.020 | 0.500 | 0.125 |
| 2 | Saliency | 0.855 | 0.057 |  | 0.824 | 0.000 | 0.497 | 0.090 |  | 0.999 | 0.004 | 0.496 | 0.118 |
| 3 | Inp×Grad | 0.975 | 0.085 |  | 0.755 | 0.003 | 0.516 | 0.137 |  | 0.328 | 0.001 | 0.509 | 0.101 |
| 4 | Ours, optimized fill | 1.000 | 0.999 |  | 1.000 | 1.000 | 0.811 | 0.289 |  | 1.000 | 1.000 | 0.505 | 0.124 |
| 5 | Ours, real fill | 0.931 | 0.886 |  | 1.000 | 0.999 | 0.897 | 0.436 |  | 1.000 | 1.000 | 0.728 | 0.358 |
| 6 | Ours, average fill | 1.000 | 0.999 |  | 1.000 | 0.986 | 0.448 | 0.136 |  | 1.000 | 0.997 | 0.495 | 0.128 |
| 7 | Ours, zero fill | 1.000 | 0.999 |  | 1.000 | 0.994 | 0.713 | 0.409 |  | 1.000 | 0.999 | 0.498 | 0.126 |

表中保真列显示随机基线已达 0.993、1.000 与 0.981，显著图与输入乘梯度也多在 0.755 以上，但忠实列中两者仅 0.000 到 0.085，随机更低至 0.020 以下。相比之下本方法 4 种填充在 3 组上保真与忠实多为 0.931 到 1.000，其中优化填充在真实组达 1.000 与 0.999，固定与变化组均为 1.000 与 1.000，指标上看似满分。

定位列则完全背离，梯度方法 AUC 约 0.496 到 0.516，RMA 约 0.090 到 0.137，均在随机水平。优化填充固定带 AUC 0.811 与 RMA 0.289，变化带跌至 0.505 与 0.124，零填充固定带 0.713 与 0.409、变化带 0.498 与 0.126，平均填充两组都在 chance 附近。真实填充固定带 0.897 与 0.436、变化带 0.728 与 0.358 为全表定位最高，但其训练已见配对真谱差异，优势不能视为纯解释能力。

该表没有人工主观听测 MOS、CMOS 或 ABX，也无神经代理听感指标，全部为判定一致性与已知位置重合度，未报告标准差或置信区间与听众规模。最尖锐的代价是满分保真忠实可与随机定位共存，平均填充即为例，保真 1.000 与忠实 0.986 以上但定位全败。未评测范围包括真实样本解释、多声码器与自然伪造痕迹，结论只在单频带替换操纵内成立。

#### 不同填充下掩码形态的对照

下图按 5 行样本与 8 列方法组织，第 1 列为原频谱，第 2 到 4 列为与填充无关的基线，第 5 到 8 列为本方法 4 种填充掩码，每张掩码独立归一化，橙框标出被替换的 1 kHz 带。请先看固定带第 3 行各列是否压住橙框，再对比变化带第 4 行低频框与第 5 行 5 kHz 到 6 kHz 高频框的跟随情况。

[![原论文 Figure 2：Explanations for two MLAAD fake samples (rows 1–2), a fixed-band sample (1–2 kHz, row 3) and two…](https://arxiv.org/html/2611.32593v1/figure_examples_all.png)](https://arxiv.org/html/2611.32593v1/figure_examples_all.png)

*论文图 2：五组样本上随机基线梯度方法与四种填充掩码的对照，橙框标出被替换的 1 kHz 频带位置（原论文 Figure 2）。*

像素上真实组第 2 行右侧大片深紫为补零静音，随机列将其视为整块灰色超像素仍获高保真，显著图呈宽竖条且在静音区仍有残留，输入乘梯度跟随起振与低频谐波而在静音消失。本方法掩码更锐但四列形态各异，仅部分延伸进静音。固定带第 3 行优化与零填充覆盖橙框及下方低频，真实填充紧贴橙框，平均填充散点化。变化带第 4 行低频框下优化与零仍停留低频，第 5 行高频框仅真实填充上移跟随，其余留空，印证了表中定位分化。

进一步把填充单独送入检测器，零填充在 3 组都被判伪，平均填充在受控组判伪而在真实组判真，优化填充按设计中性，真实填充推向真，但随机掩码仍保真 0.98 以上。因软掩码处处残留部分原信号，足够触发检测器维持伪判定，共适应与容量不足都不能单独解释固定形态，填充即零点的选择才是主因。

### 指标优化即失真：假设边界与复现选型建议

总体而言，方法假设边界明确，解释只针对伪造判定，因真判定可能对应异常缺席而无法用高亮表达。检测器限定为 XLS-R 2B 第 9 层加逻辑回归，操纵限定为单 HiFi-GAN 声码器的单 1 kHz 带替换，8 kHz 内 8 选 1。优化指标即被质疑指标本身符合古德哈特定律，本文的无意膨胀与文献中有意膨胀共同说明，单用保真忠实验收解释并不稳健。

未验证的部署条件包括自然伪造、多频带与多声码器混合、跨说话人与跨语言泛化，以及流式因果与延迟代价。核对时应严格沿用原文处理设定，包括 STFT 参数、5 秒裁剪补零、80:20 划分与只用伪造训练解释器的设置，基线需采用同一封装检测器与 Captum 实现的梯度方法对照，以充分保证保真忠实之外的定位结论可比。

工程选型上，若需时频定位能力，不应单独以保真忠实选型，须配以已知位置的受控操纵与 AUC、RMA 定位检验，并先跑随机基线看指标是否过于宽容。复现第一步建议先复现 3 组检测器等错误率，再训优化与零填充对照固定与变化带。需补的验证至少包括变化位置、多类型伪造与人工可理解性检查，否则满分掩码仍可能指向错误证据。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，STFT 窗长 1024 点，FFT 1024 点，跳长 256 点，与 HiFi-GAN 一致，所有语音裁剪或补零到 5 秒，受控操纵为单个 1 kHz 带替换，8 kHz 内 8 选 1，延迟 TTFA RTF 与显存原文未披露
- **训练与评测数据**：真实组为 MLAADv9 按 298 个模型语言组合抽 10% 得 27k 个伪造加 M-AILABS 27k 个真实，检测器按 80:20 划分，受控组为 LJ Speech 5k 个单说话人真音经 LibriTTS 训练 HiFi-GAN 声码化后替换频带，解释器只在伪造上训练评价
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量，训练步数轮数与耗时，检测器与解释器的具体算力开销无法核对
- **核心超参数与配置**：解释器为三层二维卷积 U-Net 加 sigmoid 输出，检测器为 wav2vec2 XLS-R 2B 第 9 层加逻辑回归，C 等于 106，阈值 0.5，损失权重 α、β、γ 数值原文未披露
- **推理速度与部署开销**：摊销推理一次前向输出掩码，无需逐样本优化，原文未披露 RTF 延迟吞吐显存与参数量，部署代价无法直接推断
- **开源产物与协议状态**：原文未披露代码权重数据与演示页的公开状态，所给证据中无可验证的可用资源，不得声称已公开或可用
- **附录与补充材料要点**：原文未披露独立附录，文末含资助致谢伦理合规声明与 LLM 使用说明，典型失效为变化频带定位跌至随机水平

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32593v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：冻结XLS-R 2B第九层检测器并以可微逆变换包裹学习时频软遮罩，跨样本摊销训练后推理仅需单次前向，机制完整可核对。

- 核心优势：以随机与两种梯度基线对照四种填充，在真实与固定变化频带上揭示保真度满分而定位跌至随机的指标失灵并保留负结果。

- 主要短板：仅覆盖单一XLS-R 2B第九层检测器与单一HiFi-GAN单说话人频带替换，未报告置信区间与重复方差，开放场景泛化不足。

- 主要短板：损失系数与优化器学习率批量轮数训练时长等关键训练配置均未说明，U-Net通道核尺寸等规格亦缺失，独立复现存在缺口。

- 主要短板：正文中未给出第一方代码仓库与模型权重下载地址，亦无在线演示与可验证官方资源地址，无未来公开承诺。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
