---
title: "SpatialV2A: Visual-Guided High-fidelity Spatial Audio Generation"
date: 2026-11-28
draft: false
description: "针对单声道视频生成音频缺失方向感的问题，本文批量合成 187,000 对伪双耳数据并提出双分支条件流匹配框架，在 3,000 个视频评测中以 MOS-AQ 4.21 与 MOS-S 3.90 取得主观最优，代价是依赖合成监督与额外空间条件计算。"
tags: ["数据集", "流匹配", "空间音频生成", "视频到声音生成"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "视觉引导的高保真双耳音频生成与大规模伪双耳数据"
paper_digest_original_title: "SpatialV2A: Visual-Guided High-fidelity Spatial Audio Generation"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0198"
paper_digest_workbench_source_sha256: "adacc4a56b03bf493330c128b5cbe5097d1c644a3c2618227d2222c98537d319"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/198"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0198.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "空间音频生成"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单声道视频生成音频缺失方向感的问题，本文批量合成 187,000 对伪双耳数据并提出双分支条件流匹配框架，在 3,000 个视频评测中以 MOS-AQ 4.21 与 MOS-S 3.90 取得主观最优，代价是依赖合成监督与额外空间条件计算。"
paper_digest_reader_sections: [{"heading":"单声道视频生成音频为何难以表达方向与沉浸感","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"双分支条件流匹配如何分工语义共享与声道分化","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"大规模伪双耳数据如何批量构建并验证保真","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"五个视觉空间特征如何编码声源位置与扩散","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"生成质量与空间真实感在客观与主观评测中如何取舍","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"合成监督与短片段假设限制了哪些部署前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Shandong University"],"name":"Yanan Wang"},{"affiliations":["Shandong University"],"name":"Linjie Ren"},{"affiliations":["Shandong University"],"name":"Zihao Li"},{"affiliations":["Shandong University"],"name":"Junyi Wang"},{"affiliations":["Shandong University"],"name":"Tian Gan"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"e1feec79ac833dd6ee2105e58cb000d2a4bc714f23b9e49c3d424cc6d1dbfa41","url":"/audio-research-portal/client/papers/2026-11-28/conference-7d5b91df46a65792300ddda3/citation.bib"},"citation.json":{"sha256":"cad463450f38f9e0bf2b3c22864dd18584e8463873b5fd0e174bbc3df2cb4fa9","url":"/audio-research-portal/client/papers/2026-11-28/conference-7d5b91df46a65792300ddda3/citation.json"},"citation.ris":{"sha256":"d6525dbded21400372bec5e7771ad39ab1b80eb32df82bfb3be43c15bad5d895","url":"/audio-research-portal/client/papers/2026-11-28/conference-7d5b91df46a65792300ddda3/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"845213c5cb545daf83357f745bbe653bee474841a9e600df3d3b74356e7b9f65","url":"/audio-research-portal/client/papers/2026-11-28/conference-7d5b91df46a65792300ddda3/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0198"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/198"
paper_digest_conference_doi: "10.24963/ijcai.2026/198"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/198"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0198.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "9e6f6b309b7f9ddf16814f28ae83d40ce4958b9a824136562cc1aab72b6bc646"
paper_digest_api_reader_plan_sha256: "413f5f67f55725a2d1d31657a9ea6f86c68584278e0e942c39067059fa44eee3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b8144f9f00d041e9cb8157c03e32f0bdf97dbafd21ab51c5d5b3d6751033c88c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "63f32c3d3bc05a9ef79c314e4499e83f17f7b00d80147a325a21bb524275d601"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "f1d90dc68836547c00c420964de4dec3e85d24221cd423b580b6a659e46eea9d"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1f061d7cbb1e2dc42de0b2ff42a48a0afc38afa4f99b47abea06e5014e0ac720"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"task","id":"task.spatial-audio-generation","label":"空间音频生成"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_method: "流匹配"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 视觉引导的高保真双耳音频生成与大规模伪双耳数据

> 英文题目：*SpatialV2A: Visual-Guided High-fidelity Spatial Audio Generation*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0198`
> DOI：`10.24963/ijcai.2026/198`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/198) · [官方 PDF](https://ijcai.org/proceedings/2026/0198.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [空间音频生成](/audio-research-portal/papers/?concept=task.spatial-audio-generation)；[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.5/10** | 创新 7.5/10 | 技术严谨 6.2/10 | 实验充分 6.7/10 | 清晰度 5.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yanan Wang：Shandong University
- Linjie Ren：Shandong University
- Zihao Li：Shandong University
- Junyi Wang：Shandong University
- Tian Gan：Shandong University

## 📌 核心摘要

**问题与瓶颈：** 视频到声音生成以视频帧序列为输入，输出应与画面语义一致且时间同步的音频波形。现有主流路线依赖单声道数据集训练单通道模型，无法学习视觉到双耳空间映射，生成音频缺少声源方向、位置与移动线索，沉浸感不足。论文指出两处根因，一是缺少显式空间化模块，难以从画面定位发声区域并估计相对强度与扩散形态，二是大规模双耳录制需要专用设备与人力，现有双耳数据规模小、类别少或缺少文本标注，难以支撑空间视频到声音建模。

**核心思路与方法架构：** 与最接近的 MMAudio 基线相比，实质增量是保留多模态联合语义与同步表征，同时新增双分支双耳合成与视觉引导空间条件。数据侧以 VGGSound 为源，经时长、静音与质量过滤后由视觉引导 PseudoBinaural 转换得到 187 k 个片段、519 h、309 个类别的 BinauralVGGSound。生成侧文本与视觉分别经预训练 CLIP 编码器提取语义特征，同步特征经 Synchformer 提取，发声热图经预训练 ACL 声源定位网络估计。热图进一步计算水平位置、发声面积占比、热图方差、左右能量偏置与扩散形状共 5 个空间特征，经上采样与卷积多层感知机及层归一化形成空间条件 Cs。音频波形经预训练变分自编码器编码为 20 维、31.25 fps 隐表示，双耳左右隐变量先经 6 个多模态联合 Transformer 块联合更新，再经 12 个单模态双通道块分左右支路独立合成通道差异，推理时从高斯噪声出发经条件流场变换后由变分自编码器解码为梅尔频谱并经 BigVGAN 声码器恢复为 16 kHz 双耳波形。

**关键实验与核心代价：** 主评测在与 BinauralVGGSound 共享视频编号的 3 000 个 VGGSound 测试视频子集上进行，对比单声道模型与空间模型。分布匹配采用弗雷歇音频距离（Fréchet Audio Distance，FAD ↓，越低越好）与库尔贝克莱布勒散度（Kullback-Leibler divergence，KL ↓，越低越好），语义与时间采用 ImageBind 相似度（ImageBind，IB ↑，越高越好）与去同步误差（DeSync ↓，越低越好）。SpatialV2A 的 KL PaSST 为 1.56，低于 MMAudio 的 1.57，KL PANNs 为 1.55，低于 MMAudio 的 1.59，DeSync 为 0.49，低于 MMAudio 的 0.51，FAD PaSST 为 381.90，高于 MMAudio 的 303.92，FAD PANNs 为 12.53，高于 MMAudio 的 8.05，IB 为 0.28，低于 Seeing&Hearing 的 0.36。人工主观平均意见分（Mean Opinion Score，MOS ↑，越高越好，1 分为差，5 分为优，20 名受试者头戴式耳机评分）中时间对齐为 4.14 ± 0.54，高于 MMAudio 的 4.05 ± 0.60，语义对齐为 4.08 ± 0.36，低于 MMAudio 的 4.11 ± 0.31。音频质量与空间评测中 SpatialV2A 的 Inception Score（IS ↑，越高越好）为 14.36 与 14.91，内容享受度（Content Enjoyment，CE ↑，越高越好）为 4.09，内容有用性（Content Usefulness，CU ↑，越高越好）为 5.77，生产质量（Production Quality，PQ ↑，越高越好）为 6.07，耳间互相关（Interaural Cross-Correlation，IACC ↓，越低越好）为 0.51，耳间级差（Interaural Level Difference，ILD ↑，越高越好）为 5.69，MOS 音质为 4.21 ± 0.43，MOS 空间感为 3.90 ± 0.53。消融显示移除空间化后 FAD 变优但语义、同步与空间指标回落，论文未披露推理延迟或吞吐实测。

**适用边界与深读导览：** 结论成立前提是合成双耳信号可作为训练与评测真值，且发声定位与空间渲染依赖 PseudoBinaural 与 ACL 的估计质量，未覆盖真实双耳录制、长视频连贯合成与实时部署场景。有音频质量工具分与人工听测两类证据，试听时应以人工评分为准。欲深究球谐域伪双耳推导、双耳流匹配目标与 5 维空间特征构造，可查阅下方方法概述与实验结果对应表格及公式说明。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单声道视频生成音频为何难以表达方向与沉浸感

视频生成音频需要根据画面合成声音，要求声音在语义上对应物体与动作，在时间上与运动同步，在听感上真实自然。输入是无声视频片段与可选文本描述，输出是波形对应的音频。以往研究借助大规模预训练视觉与文本编码器，已在语义对应与时间同步上取得进展，但输出大多是单声道，缺少方向与距离线索。

#### 单一路混合如何丢失耳间差异

人类听觉依靠双耳到达时间差、强度差、频谱差与相位差判断方位与移动，单声道把左右耳信号混为一路，无法保留这些耳间差异。传统框架只能让响度随时间起伏暗示远近，不能复现左侧偏强或右侧先到等现象。在虚拟现实与视频制作中，这种缺失会直接削弱沉浸感，这正是本文要补齐的短板。

#### 对比示意应沿箭头阅读

为了直观理解单声道与双耳生成的差别，可以先看第 1 张对比示意。上下两行使用同一辆冰淇淋车视频，上行经过传统模型只产生一路波形与单个头顶扬声器图标，下行经过本文模型产生左右两路不同波形与包围听者的球面声场。沿箭头观察输入视频、模型方框与输出声场的对应关系，有助于把握后文双分支设计的动机。

[![原论文 Figure 1：Comparison of traditional V2A models and the proposed SpatialV2A.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-1.png)

*论文图 1：传统单声道与本文双耳生成的输出形态对比，上为单点声，下为包围声场（原论文 Figure 1）。*

图中上半部分蓝色方框标注传统视频生成音频模型，右侧波形蓝绿叠加为单一路，听者图标上方只有一个蓝色扬声器。下半部分橙色方框标注本文模型，右侧左右各有一路倾斜波形，分别连接蓝色与绿色扬声器，中间听者被网格球面包围。同一视频输入对应单点与空间包围两种输出，说明改动核心在于从一路合成变为两路差异化合成，而非仅提升音质。

实现空间感知面临两处具体困难。其一，需要从画面显式推断声源水平位置、发声面积与能量偏向，并把线索注入生成过程，否则左右两路难以拉开差异。其二，真实双耳录制需要专用设备与大量人力，既有双耳数据集规模小、类别少或缺少文本描述，难以支撑通用生成训练。本文因此同时做数据与模型两件事，先批量合成双耳数据，再训练显式利用视觉空间线索的生成器。

### 双分支条件流匹配如何分工语义共享与声道分化

#### 与最近基线的差异何在

与最近的多模态联合训练基线相比，本文保留 6 块多模态联合变换器用于跨模态语义对应与时间同步，新增两路单模态变换器分别负责左耳与右耳合成。改动核心是把原来输出单路隐变量改为输出两路隐变量，并引入一路声源定位网络计算的空间条件。采样率保持 16 kHz，隐编码为 20 维、帧率为 31.25 fps，目标是生成与画面运动一致的双耳波形，而非仅提升单声道清晰度。

#### 1 秒样本的张量走向如何

以 1 秒视频为例追踪张量变化。第一步，左右波形各含 16,000 个采样点，分别经左、右变分自编码器压缩为约 31 帧、每帧 20 维的隐序列。第二步，文本经文本编码器得到语义向量，视频帧经视觉编码器得到视觉向量，视频运动经同步编码器得到同步向量，三者与时间步傅里叶编码组合成全局条件与帧级条件。第三步，两路隐序列连同 3 组条件一起进入多模态块交互，随后分叉进入左右单模态块，各自叠加同一空间条件做差异化去噪，最终经解码器与声码器还原波形。

第 4 张总体架构图把上述分叉与条件汇合画得很完整，左侧是左右波形与文本视频输入，中间是多模态块与两路单模态块，右侧是空间化模块。为读懂后文 5 个特征的作用，建议先沿黑色实线看主生成路径，再看右侧虚线分隔的空间条件如何从上至下汇入每一块，重点观察冻结与可调标记的分布。

[![原论文 Figure 4：Overall architecture of SpatialV2A. The framework employs a dual-branch design for spatial audio…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-4.png)

*论文图 4：双分支生成总体架构，左侧输入经多模态块分叉为左右两路，右侧注入空间条件（原论文 Figure 4）。*

图中左上蓝色与绿色波形分别接入左、右编码器，粉色文本与紫色视觉特征在中部汇入全局条件与帧嵌入。灰色全局条件与紫色同步特征共同生成帧嵌入，三者与右侧橙色空间条件一起输入蓝色多模态块。下方两路单模态块各标 N2，分别输出左流与右流。右侧定位网络输出区域、掩膜、热图与叠加图，再提炼为水平位置、发声面积等 5 个黄色椭圆，经卷积多层感知机与归一化形成空间条件，底部图例区分冻结与可调模块。

训练时变分自编码器、文本与视觉编码器、同步视觉编码器与声源定位网络保持冻结，只更新多模态与单模态变换器及空间投影部分，优化目标是双耳条件流匹配速度场误差。推理时左右两路均从高斯噪声出发，按学到的速度场逐步去噪为双耳隐变量，再经变分自编码器解码为梅尔频谱，最后由 BigVGAN 声码器转为波形。原文未披露采样步数、延迟与实时率，无法评估流式开销。

### 大规模伪双耳数据如何批量构建并验证保真

数据流程起点是 VGGSound 单声道集合，原文保留其类别覆盖与视听对应可靠的优点。预处理分三步剔除低质片段。第一，丢弃短于 10 秒的片段以保证时间上下文。第二，用音频活动检测器剔除静音占比超过 80% 的视频。第三，用 Meta Audiobox 美学工具包过滤退化样本。剩余过滤后单声道集合进入单声道到双耳转换阶段，目标是批量合成空间一致的双耳信号。

第 2 张数据构建流程图从左至右展示了上述两大阶段，左侧是原始视频与波形，中间是三项过滤与物理声场建模加网络转换，右侧是带文本的双耳结果。建议按黄色箭头顺序阅读，先看时长过滤、静音检测与质量评估三框，再看球头模型的虚拟扬声器与网络模块如何把单路变为双路，理解合成监督的来源。

[![原论文 Figure 2：Overall pipeline of BinauralVGGSound dataset construction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-2.png)

*论文图 2：双耳数据集构建流程，从过滤到物理建模再到网络转换为双路波形（原论文 Figure 2）。*

图中左侧绿框标注儿童说话文本，下方蓝绿叠加为原始单声道波形。中间米黄色三框对应时长过滤、静音检测与质量评估。过滤后波形进入球头坐标系，周围 x、y、z 轴与虚拟声源示意物理声场建模，随后生成蓝绿两路伪双耳信号。紫色 ResNet-18 从视频提取视觉特征注入绿色 U-Net 瓶颈层，蓝色 APNet 做声源区分，最终右侧输出带同样文本的上下两路蓝绿波形，构成 BinauralVGGSound 数据集。

下表是数据集验证的核心定量依据，对比原始单声道与合成双耳在感知质量三维度与 5 个耳间空间指标上的差异。单声道在空间列记为横线，表示无法计算耳间差异，这为判断合成是否引入真实空间线索提供了直接参照。

| Dataset | CE ↑ | Audio Quality CU ↑ | PQ ↑ | IACC ↓ | Audio Spatialization ILD ↑ | ITD ↑ | ISD ↑ | IPD ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VGGSound [Chen et al., 2020] | 3.71 | 5.39 | 6.07 | - | - | - | - | - |
| BinauralVGGSound (ours) | 3.74 | 5.44 | 6.09 | 0.93 | 3.08 | 1.70 | 0.07 | 0.32 |

表中可见，合成数据的 CE 从 3.71 升至 3.74，CU 从 5.39 升至 5.44，PQ 从 6.07 升至 6.09，说明批量转换未损伤感知质量，甚至略有提升。更关键的是，单声道缺失的 5 个空间指标在合成数据上均有明确数值，耳间互相关为 0.93，耳间强度差为 3.08，时间差为 1.70，频谱差为 0.07，相位差为 0.32，表明左右两路已拉开可测差异。结合长笛左右移动示例中绿框到蓝框与左右通道能量变化的对应，可认为视听空间对应初步成立，但这仍是合成监督而非真实录制。

### 五个视觉空间特征如何编码声源位置与扩散

空间条件的输入来自冻结的 ACL 声源定位网络，它对每一帧输出发声区域框、二值掩膜与连续热图。区域框标出最可能发声的物体位置，掩膜以阈值二值化区分发声与背景像素，热图以连续强度反映能量分布与扩散程度。三者共同提供位置、面积与分散信息，避免只用单一中心点无法表达声源大小与朝向的问题。

基于上述三件套计算 5 个标量特征。水平位置 \(S_h\) 为热图质心横坐标除以热图宽度，反映声源偏左或偏右。发声面积占比 \(S_{area}\) 为掩膜中 1 的像素数除以总像素数，反映声源占据画面比例。空间方差 \(S_{var}\) 为水平与垂直方向加权方差之和，反映能量分散程度。左右能量偏置 \(S_{LR}\) 为左半热图能量减右半能量再归一化，直接对应双耳强度差的视觉先验。扩散形状 \(S_{shape}\) 为水平方差除以垂直方差，刻画各向异性。

5 个特征拼接为声音空间向量，经上采样与卷积多层感知机升维，再经层归一化得到空间条件 \(C_s\)。升维保证与全局条件 \(C_g\) 和帧级条件 \(C_f\) 量级相当，归一化维持训练稳定。该条件同时送入 6 块多模态联合块与 12 块单模态双通道块，前者让语义对应过程感知方位，后者让左右分支在相同语义下产生差异化细节，从而实现位置、范围、分散、偏置与方向性的联合编码。

从直觉看，当声源位于画面最左侧时，水平位置接近 0，左右偏置为较大正值，模型被引导增强左路能量并相对衰减右路。当声源充满画面或分散时，面积占比与方差增大，左右差异减小，声场趋向宽阔而非极端偏置。若热图均匀无峰，5 个特征趋向中性，空间条件退化为弱偏置，此时双耳退化为近似单声道，这解释了消融中去掉空间条件后分布距离略优但空间感丧失的现象。

### 生成质量与空间真实感在客观与主观评测中如何取舍

#### 评测如何保证公平并区分主客观

评测在 3,000 个从测试集随机抽取的视频上进行，视频编号与原始集一致，所有基线均在原始单声道集上训练，保证输入画面相同。分布保真用 PaSST 与 PANNs 提取特征后的 FAD（音频分布距离）与 KL（分布散度，越低越好），语义与时间分别用 IB（跨模态相似度，越高越好）与 DeSync（同步误差，越低越好）。感知质量用 PQ（制作质量）、CE（内容愉悦度）、CU（内容有用性）与 IS（清晰度分数），空间用 IACC（耳间互相关，越低越好）等 5 个耳间指标。主观部分邀请 20 位参与者用高品质耳机按 1 分至 5 分评价空间印象、时间对齐、语义对齐与音频质量，需区分人工听测与神经网络代理分数的不同性质。

#### 频谱像素呈现何种差异

第 5 张梅尔频谱对比把跳绳场景的 8 帧画面置顶，下方分 5 行 2 列排列 10 张频谱，涵盖 4 种单声道基线、单声道真值、空间基线、本文左右两路与双耳真值左右两路。建议先看顶行人物跳跃动作的时间节奏，再逐行对比中低频能量条纹的连续性与背景杂散，最后聚焦底部两行绿色虚线对齐处，观察本文输出与双耳真值在时间结构上的贴合程度。

[![原论文 Figure 5：Mel-spectrogram comparison between our method, baselines, original mono GT, and our binaural GT.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/3295305f6cbb/figure-5.png)

*论文图 5：跳绳场景梅尔频谱对比，本文左右两路更贴近双耳真值的节拍结构（原论文 Figure 5）。*

图中 ReWaS 行整体偏暗、能量稀疏，Frieren 与 Seeing&Hearing 行出现大量纵向条纹与顶部黑色空洞，MMAudio 行中低频有团块但右侧偏弱。单声道真值行底部有细密横纹，双耳真值左右两行在绿色虚线处呈现同步的周期性能量起伏。本文左路与右路在 3 条绿色虚线处均复现了与双耳真值一致的垂直节拍结构，且背景更干净、中部空洞更少，说明显著音效得到保留而噪声受到抑制。左右两路频谱略有差异而非完全复制，表明双分支确实学到通道差异，但差异幅度弱于真实耳间线索，仍属合成空间的近似。

#### 主观空间分与客观分布如何取舍

下表精简自原文完整 Table 4（本精简表未列出其余客观列），只保留人工听测中最能反映沉浸感的两列。MOS-AQ 表示总体音频质量主观分，MOS-S 表示空间印象主观分，均为越高越好，括号内为标准差。保留全部可运行基线是为了说明空间提升是否以牺牲可懂度为代价。

| 方法 | MOS-AQ ↑ | MOS-S ↑ |
| --- | --- | --- |
| ReWaS | 2.29 ± 0.62 | 1.26 ± 0.44 |
| Frieren | 3.15 ± 0.52 | 1.29 ± 0.46 |
| Seeing&Hearing | 2.42 ± 0.63 | 1.50 ± 0.54 |
| MMAudio | 3.87 ± 0.78 | 1.78 ± 0.61 |
| SEE-2-SOUND | 1.74 ± 0.78 | 2.49 ± 0.73 |
| SpatialV2A（本文） | 4.21 ± 0.43 | 3.90 ± 0.53 |

表中本文方法以 4.21 与 3.90 分居两列首位，标准差分别为 0.43 与 0.53，显著高于单声道基线与空间基线，说明听者能感知到更明确的方位与更干净的音质。原文完整 Table 3（本精简表未列出）进一步显示，本文在 KL 与 DeSync 上最低，分布与同步最优，但在 IB 上不及 Seeing&Hearing，因后者在推理时直接优化该相似度，属于事后偏向目标指标的做法。消融显示去掉空间条件后 FAD 略优，表明空间条件引入轻微分布偏移，代价换来语义、同步、清晰度与耳间指标的提升。方差上各方法标准差多在 0.4 至 0.9 之间，20 人规模下本文优势超出误差带，但长视频与真实录制双耳的泛化仍未评测。

### 合成监督与短片段假设限制了哪些部署前提

首要边界是双耳监督本身为合成而非实录。物理声场建模依赖球谐展开与头部相关脉冲响应渲染，伪双耳信号再训练 U-Net 与分离模块，误差会逐级传递。若真实场景存在混响、遮挡或多声源重叠，合成数据难以复现耳间细节，模型学到的偏置可能偏向训练用的虚拟扬声器布局，在新厅堂或户外场景中空间准确度会下降。

其次，训练与评测均围绕 10 秒以上短片段展开，未验证长视频的时间连贯性。架构中 6 加 12 块变换器对长序列的记忆与计算开销未披露，推理步数、缓存与实时率缺失，无法判断能否流式部署。声源定位与编码器全部冻结，若画面出现训练未见的乐器或动作，热图可能漂移，空间条件随之失效，但原文未做失效案例统计。

复现层面需区分三件事。原文给出数据集、代码与模型检查点的网址，声称全部公开。按本次收到的验证信息，尚无可确认可达的作者资源记录，因此不能写成已确认可用，实际复现前需自行核对链接有效性、权重是否提供下载以及环境能否直接运行。训练配置披露较完整，包括 AdamW、学习率 1 × 10 的负 4 次方、1,000 步预热与 300,000 次迭代，便于重训，但硬件为 3 张显存 96 GB 的 RTX 6000，普通实验室难以复刻。

选型上，若应用只需语义与时间正确且在单声道设备播放，单声道基线已足够且计算更省。若目标是头戴式双耳沉浸，则本文双分支加空间条件的思路值得借鉴，但应先在真实双耳小规模集上微调并做人工听测，避免只看代理分数。未来工作提到引入带描述音频集增强语义与长时建模，教学时可对照频谱差异与主观分讨论，原文未提供试听页时不要虚构听感，以现有数值作为客观依据。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，隐编码 20 维、帧率 31.25 fps，单声道转双耳合成，延迟与 RTF 原文未披露
- **训练与评测数据**：VGGSound 过滤后合成 BinauralVGGSound，187,000 个片段、519 h、309 类，评测随机抽 3,000 个视频，来源为 YouTube 自然声
- **算力与训练耗时**：3 张 NVIDIA RTX 6000，原文记为 96 GB 显存，训练 300,000 次迭代，推理硬件原文未披露
- **核心超参数与配置**：AdamW，学习率 1 × 10 的负 4 次方，线性预热 1,000 步，多模态块 6 层、单模态双通道块 12 层，双耳条件流匹配速度场误差
- **推理速度与部署开销**：参数量与显存占用原文未披露，左右两路从高斯噪声去噪经变分自编码器与 BigVGAN 声码器合成
- **开源产物与协议状态**：原文给出数据集、代码与检查点链接并称全部公开，本次未获可达验证，需自行核对链接与权重下载及运行条件
- **附录与补充材料要点**：附录含预处理统计与更多视听对齐示例，未来计划引入 WavCaps 与 AudioCaps 增强语义及长时建模，许可限制原文未披露

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.5/10** | 创新 7.5/10 | 技术严谨 6.2/10 | 实验充分 6.7/10 | 清晰度 5.6/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 5.8/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0198`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/198) · [官方 PDF](https://ijcai.org/proceedings/2026/0198.pdf)
- DOI：`10.24963/ijcai.2026/198`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：双分支双耳流匹配与5维视觉空间条件Cs构造完整，给出双耳速度场目标与球谐渲染公式支撑。

- 核心优势：在3000视频公开子集对比5个基线，KL与DeSync最低且MOS时间对齐最高，并含移除空间条件的直接消融。

- 核心优势：构建187k片段519h309类BinauralVGGSound并验证CE/CU/PQ不降且新增耳间线索的可扩展底座。

- 主要短板：双耳真值由PseudoBinaural模型合成而非实录，空间指标提升可能部分反映合成器偏置而非真实泛化。

- 主要短板：FAD两项均劣于MMAudio且IB低于Seeing&Hearing，MOS语义对齐亦略低于MMAudio，分布保真存在代价。

- 主要短板：20人MOS规模较小且未报告受试者筛选与显著性检验细节，推理延迟与吞吐未做任何实测验证。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
