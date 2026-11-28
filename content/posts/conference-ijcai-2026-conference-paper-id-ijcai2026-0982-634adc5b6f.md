---
title: "Optimizing Spectrogram Resolution and Training Strategies for Real-Time Killer Whale Call Type Classification"
date: 2026-11-28
draft: false
description: "针对通用框架在虎鲸叫声细分类中时间分辨率不足与类别不均的问题，本文以跳长 172 与 1,200 ms 窗的信号前端优化结合 0.1 标签平滑与平方根逆频过采样，在阿瓦查湾 12 类数据上以 ResNet-18 达到 97.1% 片段准确率，较 96.2% 基线实现 23.7% 相对误差下降，代价是结论仅在单一海域离线划分成立且更深主干未带来增益。"
tags: ["生物声学监测", "CNN", "时频分析", "音频分类"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跳长与窗长优先于主干加深的虎鲸叫声分类"
paper_digest_original_title: "Optimizing Spectrogram Resolution and Training Strategies for Real-Time Killer Whale Call Type Classification"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0982"
paper_digest_workbench_source_sha256: "6219f410325cb84d3f19150e9e4c685ae7c360fcd49518b685db9f551098f71c"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/982"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0982.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频分类"
paper_digest_score: 5.9
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对通用框架在虎鲸叫声细分类中时间分辨率不足与类别不均的问题，本文以跳长 172 与 1,200 ms 窗的信号前端优化结合 0.1 标签平滑与平方根逆频过采样，在阿瓦查湾 12 类数据上以 ResNet-18 达到 97.1% 片段准确率，较 96.2% 基线实现 23.7% 相对误差下降，代价是结论仅在单一海域离线划分成立且更深主干未带来增益。"
paper_digest_reader_sections: [{"heading":"虎鲸叫声细分类为何需要专用时频参数与训练策略","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从波形分段到 12 类预测的整体信号规格与流程改进","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"更密跳长与轻量残差如何共同保留调制细节","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"平滑软目标与平方根逆频采样如何应对模糊与不均","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"总体增益来自窗长与均衡而非主干加深的实证","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"单一海域离线结论的适用边界与复现核对","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["MIRIAI"],"name":"Vladislav Naumov"},{"affiliations":["MIRIAI"],"name":"Iaroslav Sheipak"},{"affiliations":["HSE University"],"name":"Yuriy Ivanov"},{"affiliations":["AXXX","Trusted AI Research Center, RAS"],"name":"Ilya Makarov"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"c1ade2a381a522ee3d15cef99b96638ff9f62bbbb1f06490a8fb2d32a8f04254","url":"/audio-research-portal/client/papers/2026-11-28/conference-634adc5b6f0f0d7c4caa27ed/citation.bib"},"citation.json":{"sha256":"23eed93f3749221182297a576e204316eabce5b75a13b9fb7cd96b788fe0e95a","url":"/audio-research-portal/client/papers/2026-11-28/conference-634adc5b6f0f0d7c4caa27ed/citation.json"},"citation.ris":{"sha256":"d35c24ec4f87fc43694f1af18ee6926fd70074e8542843ee3d7f1dbb656a8717","url":"/audio-research-portal/client/papers/2026-11-28/conference-634adc5b6f0f0d7c4caa27ed/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"95698b0e12c90fde2a62a95960cfaa42024bd435e37440fbe04bc8f307171eb9","url":"/audio-research-portal/client/papers/2026-11-28/conference-634adc5b6f0f0d7c4caa27ed/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0982"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/982"
paper_digest_conference_doi: "10.24963/ijcai.2026/982"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/982"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0982.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "e7e80afe883299ca6885a41fa5878ca8aa2caa047c7703b8a1be9a3d9f8c50d0"
paper_digest_api_reader_plan_sha256: "850321acfbbfb74675c645875f19b7f342d839fcdeca4c6586ebe93f525bc5b1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1b748b939394f94aaada08ae3152c31536855d2ade47f2b9d6d2ac7fb1365fe9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "91551a5a714db3e68ba19e24b076d13080ec25d6524001286f6816debfe7ae4c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f8d257fffff5b5098c3b909b4ba4f64bca33af64aa45918c2b7bbf7f43713393"
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
paper_digest_tags_concepts: [{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.time-frequency","label":"时频分析"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_method: "时频分析"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 跳长与窗长优先于主干加深的虎鲸叫声分类

> 英文题目：*Optimizing Spectrogram Resolution and Training Strategies for Real-Time Killer Whale Call Type Classification*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0982`
> DOI：`10.24963/ijcai.2026/982`
> Track：IJCAI 2026



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/982) · [官方 PDF](https://ijcai.org/proceedings/2026/0982.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-research-portal/papers/?concept=task.audio-classification)
- **研究方法**：[CNN](/audio-research-portal/papers/?concept=method.cnn)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing) → [时频分析](/audio-research-portal/papers/?concept=method.time-frequency)
- **应用**：[生物声学监测](/audio-research-portal/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.9/10** | 创新 6.3/10 | 技术严谨 5.3/10 | 实验充分 6.6/10 | 清晰度 5.2/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 6.9/10

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Vladislav Naumov：MIRIAI
- Iaroslav Sheipak：MIRIAI
- Yuriy Ivanov：HSE University
- Ilya Makarov：AXXX；Trusted AI Research Center, RAS

## 📌 核心摘要

**问题与瓶颈：** 虎鲸呼叫类型分类以连续水下录音为输入，按固定时长切分为片段并判为 11 种固定呼叫类型或噪声共 12 个类别，输出为片段级标签。通用框架 ANIMAL-SPOT 默认短时傅里叶变换（short-time Fourier transform，STFT）参数偏重频率分辨率，难以分辨短时频率调制呼叫中依赖时间调制的细微差异，典型难点为结构相似的 K12 类与 K14 类。论文指出该框架还存在两点不足，一是无法更换卷积神经网络（convolutional neural network，CNN）骨干网络（backbone），二是缺少正则化与类别均衡策略，在数量不均的呼叫分布上泛化受限。人工判读语谱图（spectrogram）难以扩展到大规模被动声学监测数据，因而需要兼顾分辨率与训练策略的自动化方案。

**核心思路与方法架构：** 与最接近的 ANIMAL-SPOT 基线相比，实质增量是保留残差网络（residual network，ResNet）-18 轻量骨干的同时，联合优化信号处理与训练策略而非增加架构复杂度。以 44.1 kHz 采样音频为例，经 FFT 大小 1024 与跳长 172 的 STFT 得到幅度语谱图，仅保留 500 Hz 至 10000 Hz 频带并经线性插值调整为 256 个频点，再转分贝并归一化至 [0, 1] 后输入网络。骨干将首层改为单通道 1×7×7 卷积以适配语谱图，经残差块、全局平均池化与全连接层输出 12 个类别，论文中未提及冻结。训练引入平滑系数 0.1 的标签平滑（label smoothing）与按逆类频平方根加权的定向过采样（oversampling），演示端以重叠窗切分连续录音并输出 Raven 选择表格式的时间分辨预测。更细跳长提升时间分辨率以直击 K12 类与 K14 类的时域调制混淆，演示系统在高端 GPU 上达到端到端实时。

**关键实验与核心代价：** 在俄罗斯 Avacha Gulf 野外录音构成的 45,429 个标注片段数据集上，同一留出测试集的片段级准确率从 ANIMAL-SPOT 基线的 96.2% 提高到最优配置的 97.1%，高于基线 0.9 个百分点，对应原文报告的相对误差降低 23.7%。消融显示在 800 ms 条件下加入定向过采样使 K12 类准确率从 80.0% 提高到 88.2%，并使总体准确率从 96.0% 提高到 96.7%。将段长从 800 ms 延长至 1200 ms 进一步达到 97.1%，但延长至 1500 ms 则回落至 96.1%，而 ResNet-34 在 800 ms 为 96.9%，ConvNeXt-Tiny 在 1000 ms 与 1200 ms 分别为 95.3% 与 94.8%，均低于 ResNet-18 在 1200 ms 的最优。本任务为分类准确率评测，不涉及人工主观听测与神经代理指标，最优 ResNet-18 在 RTX 5090 上的端到端实时系数（real-time factor，RTF）为 0.007。

**适用边界与深读导览：** 结论成立前提是单一海域种群与固定切分评测，论文明确承认未验证跨种群方言与不同录音条件下的泛化，t 分布随机邻域嵌入（t-distributed stochastic neighbor embedding，t-SNE）仍显示 K12 类与 K14 类部分重叠。过长片段与更大骨干均未带来收益，表明最优段长与轻量骨干的结论可能随呼叫时长分布与噪声条件变化。演示系统便于快速浏览被动声学监测数据，但实时性仅在高端 GPU 上实测，未覆盖端侧与流式延迟约束。欲深究问题形式化与训练配置可查阅方法概述和架构，消融与细分证据可查阅实验结果，复现条件与承认局限可查阅细节详述与局限与问题。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 虎鲸叫声细分类为何需要专用时频参数与训练策略

虎鲸依靠高度定型的社会学习鸣叫传递群体归属与文化信息，准确区分叫声类型是研究种群动态与制定保护策略的基础。人工判读频谱图费时费力，难以扩展到现代被动声学监测积累的连续录音，基于深度学习的谱时结构建模因此成为高效替代。通用框架 ANIMAL-SPOT 虽然跨物种可用，但其默认短时傅里叶变换参数更偏重频率分辨率，对短促且频率调制丰富的虎鲸叫声区分力不足。原文指出该框架存在两处关键局限，一是无法更换卷积神经网络主干结构，二是缺少正则化与类别均衡策略，难以应对不同丰度叫声类型间的泛化需求。

#### 固定窗分类的形式化定义

原文将任务形式化为固定窗分类，给定连续录音，先切分为固定时长片段，再将每个片段判为 C 种叫声类型之一或噪声类。记时长为 T 个采样点的片段为向量 \(x\)，经短时傅里叶变换得到频谱图 \(S\)，其维度为频率仓数 F 与时间帧数 L 的乘积，分类器将 \(S\) 映射为 1 至 C 中的预测标签。性能主要取决于 3 组选择，一是傅里叶变换尺寸 N 与跳长 H 决定的时频权衡，二是片段时长 T 决定的声学上下文，三是包含正则化与类别均衡的训练策略。这一形式化把信号处理与学习策略放在同一优化目标下，为后续消融提供了清晰对照。

#### 难分对 K12 与 K14 的直观矛盾

在进入方法前，需要先看清最难的细分类矛盾，K12 与 K14 在频率轮廓上高度相似，差异主要藏在细微的时间调制中，这正是全文强调时间分辨率的直接依据。下图并排给出两类叫声的频谱示例，横轴为时间，以秒为单位，纵轴为频率，以 kHz 为单位，右侧以 dB 为单位的色标指示能量强弱。请沿横轴比较能量条带的走向与持续时间，再对照纵轴观察谐波位置，带着高时间分辨率为何关键的问题进入下一节的方法设计。

[![原论文 Figure 2：Spectrogram examples of K12 and K14 call types, illustrating their structural similarity that…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-2.png)

*论文图 2：K12 与 K14 频谱对比示例，横轴时间纵轴频率色标能量，揭示重叠与调制差异（原论文 Figure 2）。*

图中左侧为 K12，时间范围约 0.0 秒至 0.6 秒，背景呈暗紫色，仅在约 0.08 秒低频处、约 0.17 秒中频处出现短促竖条，并在约 0.5 秒处出现竖直宽带与约 8 kHz 处向右延伸的水平亮线。右侧为 K14，时间范围约 0.0 秒至 1.5 秒，呈现多条近乎水平的橙黄亮线，分别位于约 1.5 kHz、约 4 kHz、约 6.5 kHz 至 7.5 kHz 以及约 9 kHz 附近，部分线条带有波状起伏，右侧约 1.0 秒至 1.4 秒叠加有宽带模糊。两类在频率位置上确有重叠，K14 更依赖长时连续谐波的起伏，而 K12 的关键事件更短促，这解释了跳长减小带来的时间分辨率对区分二者至关重要。

### 从波形分段到 12 类预测的整体信号规格与流程改进

与基线相比，本框架保留傅里叶变换尺寸为 1,024 的量级，但将采样率从 48 kHz 调整至 44.1 kHz，将频率下限从 50 Hz 提升至 500 Hz，将跳长从 300 缩短至 172，并统一将频谱插值至 256 个频率仓。训练侧新增平滑系数为 0.1 的标签平滑，以及与类别频率平方根逆比成正比的加权随机过采样，并在 3 种主干与多种窗长下对比。基线在 800 ms 窗、 1,024 / 300 参数、无平滑与无过采样条件下运行，新框架则系统考察更密时间采样与更长上下文的组合。上述改动把优化重心放在信号前端而非单纯加深网络。

#### 1 秒输入的张量流向

取 1 秒输入为例，信号先重采样至 44.1 kHz，得到 44,100 个采样点，记为长度 T 的向量 \(x\)。短时傅里叶变换采用窗长 1,024 与跳长 172，幅度谱限制在 500 Hz 至 10,000 Hz 范围内，再经线性插值统一为 256 个频率仓，转为分贝并归一化至 0 至 1 区间，得到矩阵 \(S\)。其频率维固定为 256，时间帧数 L 由窗长与跳长共同决定，原文未明确补帧与取整方式，按每秒采样点数除以跳长估算约为 250 余帧。这一矩阵作为单通道图像送入主干，原文未披露各阶段步长与填充细节，中间尺寸无法精确复算。

#### 4 级流程的导读

下图自上而下给出 4 级流程，依次为音频预处理、特征提取、分类头与损失函数，箭头表示前向数据流向。左侧深色标题标明模块名称，右侧浅色区域标注关键参数与张量形状，包括变换尺寸、跳长、频率仓数、通道维度与类别数。请先沿箭头确认主路径，再注意特征提取中通道数逐级翻倍与分类头中全局平均池化到全连接的汇合位置，带着各模块维度如何衔接的问题阅读图后说明，理解前馈分类的完整链路。

[![原论文 Figure 1：Overall architecture of the proposed model framework for call-type classification.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-1.png)

*论文图 1：四级前馈分类流程示意，预处理、残差特征提取、池化分类与平滑损失自上而下衔接（原论文 Figure 1）。*

图中顶部预处理框为浅蓝色，标注原始音频 \(x\) 经变换得到 \(S\)，参数为 N = 1,024、 H = 172、 F = 256 个频率仓、 0.5 kHz 至 10 kHz。中间橙色特征提取框标注 ResNet-18 含 4 组卷积块，通道数为 64、 128、 256、 512，块内结构为 3 × 3 卷积、归一化、非线性、 3 × 3 卷积、归一化再与恒等映射相加。下方浅蓝色分类头标注全局平均池化得到 512 维向量 \(f\)，经 512 至 12 的全连接与 Softmax 得到 12 维预测。底部灰色损失框给出标签平滑损失形式，平滑系数为 0.1，类别数 C = 12。

### 更密跳长与轻量残差如何共同保留调制细节

频谱计算是本文增益的主要来源，跳长从 300 缩短至 172 意味着单位时间内时间帧数明显增加，时间分辨率提升约 1 倍量级，而频率分辨率因窗长保持 1,024 而基本不变。这种非对称调整迎合了虎鲸叫声的特点，各类型在频率上多有重叠，真正可分的信息藏在频率随时间起伏的速度与形状中。频率范围收窄至 500 Hz 至 10,000 Hz 并插值至 256 个频率仓，既聚焦发声能量集中区，又统一了不同主干的输入尺寸。幅度转分贝并归一化至 0 至 1，有助于稳定跨录音的能量动态，原文未披露截断与统计口径。

#### 轻量残差主干与分类头

主干采用 ResNet-18，首层卷积由 3 × 7 × 7 调整为 1 × 7 × 7，以适配单通道频谱输入，后接 4 组残差块，通道维度依次为 64、 128、 256、 512。每块遵循 3 × 3 卷积、批量归一化、非线性、 3 × 3 卷积、批量归一化再与恒等映射相加的模式，保持梯度流通。为检验容量与现代设计的价值，原文还对比 ResNet-34 与 ConvNeXt-Tiny，前者加深层数，后者引入现代卷积设计，批大小分别为 64 用于残差系列与 32 用于 ConvNeXt-Tiny。分类头先经全局平均池化压缩至 512 维，再映射至 12 个对数几率输出。

#### 沿示例追踪维度变化

沿 1 秒示例继续追踪，频谱矩阵 \(S\) 的频率维为 256，时间维为 250 余帧，送入残差主干后空间尺寸逐级收缩而通道数逐级扩张，最终池化为 512 维特征向量。原文未披露每次下采样的步长与填充，因此无法复算中间特征图的确切高宽，但最终 512 维至 12 类的映射是明确的。这种设计把可学习参数集中在残差提取器与分类头，预处理无可学习参数，梯度仅在网络内部流动。轻量主干足以捕捉谱时条纹的局部斜率与曲率，更深结构并未带来额外增益。

#### 重叠分窗的部署路径

部署时系统将连续录音切分为相互重叠的窗口，逐窗分类后输出时间分辨的叫声类型序列，格式兼容 Raven 选择表，可直接导入常用生物声学标注工具。原文将端到端实时因子定义为包含输入输出、预处理、推理与后处理在内的总耗时除以输入音频时长，但未披露窗口重叠量、批处理策略与缓存复用方式，也未说明分块边界处理。因此该路径更接近离线分窗批量推理，而非严格因果流式，实时性结论依赖高端硬件与离线条件，移植前需补测延迟与拼接误差。

### 平滑软目标与平方根逆频采样如何应对模糊与不均

标签平滑将硬独热目标替换为软分布，平滑系数为 0.1，剩余概率质量均匀分给其余类别，促使模型在声学相似类型之间保留不确定性。K12 与 K14 边界模糊时，过度自信的硬目标容易让决策面紧贴训练样本，平滑则鼓励更宽的过渡带，提升对细微调制差异的容忍度。损失仍为交叉熵形式，只是目标分布不再是 0 与 1 的极端值，梯度会同时推动正确类与抑制其余类，但抑制强度被平滑系数稀释。这种机制降低了对标注噪声的敏感性，尤其适合野外录音中边界不清的片段。

#### 平方根逆频的采样折中

数据层面近似均衡但噪声类明显偏大，各叫声类型每类约 3,000 个片段，噪声类达 12,228 个片段，总量为 45,429 个片段。加权随机采样按类别频率逆平方根设定采样权重，使稀有叫声在每个训练轮次中被更频繁抽到，缓解噪声类主导梯度的问题。采用平方根而非线性逆比，相当于在均衡与保留原始分布之间折中，避免过度复制小类导致过拟合。原文在 800 ms 条件下对比了仅平滑与平滑加过采样的差异，后者显著抬升了难类的表现，说明前端分辨率提升后仍需采样策略配合。

#### 全参数更新的优化配置

优化统一采用 AdamW 与单周期学习率调度，峰值学习率为 3 × 10 的负 3 次方，配合 bfloat16 混合精度与 1.0 的梯度裁剪，并以 25 个轮次无提升作为早停耐心阈值。批大小为 64 用于残差系列，为 32 用于 ConvNeXt-Tiny，以适应不同主干的显存占用。所有模型参数均参与更新，原文未提及冻结任何预训练层或分阶段微调，梯度从标签平滑损失经分类头反向流经全部残差块。早停与裁剪共同约束训练时长与更新幅度，混合精度则在保持数值稳定的前提下加速大规模频谱批处理。

#### 联合增益的归因边界

基线未使用标签平滑与过采样，因此新框架的增益是信号前端与训练策略联合作用的结果，无法归因于单一技巧。原文未披露随机种子、多次重复的方差与学习率预热细节，也未对比不同平滑系数或不同采样指数的敏感性。这种缺失意味着复现时需固定自选种子并多次运行以估计波动，工程选型时应把平滑与过采样视为组合默认，而非可独立开关的插件。下一节将在同一测试集上核查这些组合的实际效果与代价，明确何种改动真正带来提升。

### 总体增益来自窗长与均衡而非主干加深的实证

评测采用俄罗斯阿瓦查湾野外录音，共 45,429 个标注片段，覆盖 K1、 K4、 K5、 K7、 K10、 K12、 K13、 K14、 K17、 K21、 K27 共 11 种定型叫声与 1 类噪声，总计 12 类。每类叫声约 3,000 个片段，噪声类为 12,228 个片段，按录音磁带划分 70% 训练、 15% 验证与 15% 测试，避免同一磁带的信息泄漏，所有配置在同一独立测试集上比较。主要指标为片段级准确率，方向为越高越好，并单独报告最难的 K12 与 K14。基线采用 48 kHz 采样、 50 Hz 至 10,000 Hz、跳长 300 与 800 ms 窗，评测无人工听测，也未报告置信区间。

#### 嵌入投影的导读

在列举数字前，先通过嵌入可视化建立直觉，下图为最优模型倒数第二层特征的 t-SNE 投影，横轴为 t-SNE 1，纵轴为 t-SNE 2，取值均约在负 100 至 100 之间，右侧图例区分 11 种叫声与噪声类。请先找到占据中央大面积的深蓝色噪声云，再沿边缘寻找各叫声的小簇，特别注意绿色 K12 与红色 K14 的相对位置，带着多数类型是否分离、难类是否重叠的问题阅读图后解释，理解准确率背后的表征结构。

[![原论文 Figure 3：t-SNE visualization of segment embeddings from the penultimate layer of the best model, showing…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/e39f098eb265/figure-3.png)

*论文图 3：最优模型特征的二维嵌入投影，中央噪声云与边缘叫声簇分离，难类部分重叠（原论文 Figure 3）。*

图中中央为密集的深蓝色噪声点云，呈近圆形分布，外围点缀多个紧凑小簇，右侧橙色 K7 簇、粉色 K1 簇、下方青绿色 K4 簇与灰色 K10 散点均与中央云明显分离。顶部黄色 K5 与蓝色 K17 亦位于边缘，绿色 K12 点部分靠近顶部与右侧，与红色 K14 及其他绿色点存在交错，未形成完全独立的孤岛。原文指出多数叫声类型分离良好，仅 K12 与 K14 存在部分重叠，与二者结构相似的先验一致，噪声类则清晰可分。这一形态与总体准确率高但难类仍具挑战的定量结果相互印证。

#### 窗长最优与主干无增益

总体最优为 ResNet-18 配合 1,200 ms 窗，准确率达到 97.1%，基线为 96.2%，提升为 0.9 个百分点，相对误差下降为 23.7%。窗长从 800 ms 的 96.7% 提升至 1,200 ms 的 97.1%，延长至 1,500 ms 则回落至 96.1%，过长窗口稀释判别特征。在 800 ms 下，仅更密跳长加平滑为 96.0%，加入过采样后升至 96.7%，其中 K12 从 80.0% 升至 88.2%，提升为 8.2 个百分点。主干中 ResNet-34 为 96.9%， ConvNeXt-Tiny 在 1,000 ms 为 95.3% 且在 1,200 ms 为 94.8%，均未超过轻量残差，在 RTX 5090 上实时因子为 0.007。

### 单一海域离线结论的适用边界与复现核对

首要边界是数据地域单一，所有 45,429 个片段均来自阿瓦查湾同一群体方言区，虽按磁带划分避免泄漏，但未验证跨种群、跨方言与跨录音设备的泛化。K12 与 K14 的相似性可能随群体而异，频率下限提升至 500 Hz 与跳长 172 的最优组合是否适用于其他频段分布，仍需外部数据检验。原文讨论部分已明确提示这一局限，未来工作需覆盖更多方言与环境噪声条件，才能判断信号处理优先于架构的洞察是否普遍成立。目前结论应理解为区域内离线最优，而非跨海域通用规律。

#### 高端硬件下的实时口径

部署条件亦未充分验证，实时因子 0.007 在 RTX 5090 高端桌面卡上测得，包含输入输出与前后处理，但未拆分各环节耗时，也未在 CPU 或嵌入式设备上复测。窗口重叠量、批处理大小与缓存策略均未披露，长时间连续音频的边界拼接与 Raven 选择表的时间戳精度缺乏误差分析。因此该实时结论仅在离线批量、强算力条件下成立，直接移植到野外实时监测仍需补测延迟、吞吐与显存占用。若目标为低功耗长期值守，需重新评估更密跳长带来的帧数增加是否抵消推理节省。

#### 开源与超参的缺失项

复现核对需区分三件独立事项，代码是否已开源、权重是否提供下载、系统是否可直接运行，原文均未披露可验证链接，本次也未收到除图像外的资源绑定。训练硬件型号与数量、随机种子与重复次数、附录证明与许可限制均未说明，仅知优化器、学习率、批大小、早停耐心与混合精度等超参。补充材料在脚注提及演示视频与幻灯片，但未给出本次可核验的地址，复现者只能按描述重建预处理与训练流程，并自行承担超参缺失带来的波动，建议多次运行取均值与区间。

#### 优先调前端的选型建议

工程选型上，若目标为短促且调制细微的叫声，建议优先优化跳长、窗长与采样均衡，而非加深主干，ResNet-18 量级的轻量残差已足以承载谱时条纹特征。针对噪声类偏大，可采用平方根逆频加权采样，配合 0.1 量级的标签平滑缓解模糊边界，但需注意单项改动可能不增反降，应联合调优。若日后获得可访问的交互演示，可上传连续录音并对比基线的时间分辨预测，重点观察 K12 与 K14 段的混淆是否减轻，不以主观听感代替准确率判断，优先用同一测试集复核总体与难类指标。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：重采样至 44.1 kHz，傅里叶变换尺寸为 1,024，跳长为 172，频率范围为 500 Hz 至 10,000 Hz，线性插值至 256 个频率仓，转分贝并归一化至 0 至 1，评测窗长覆盖 800 ms、 1,000 ms、 1,200 ms 与 1,500 ms，基线为 48 kHz、 50 Hz 至 10,000 Hz、跳长 300 与 800 ms 窗，端到端实时因子为 0.007
- **训练与评测数据**：俄罗斯阿瓦查湾野外录音，共 45,429 个标注片段，含 K1、 K4、 K5、 K7、 K10、 K12、 K13、 K14、 K17、 K21、 K27 共 11 种定型叫声与 1 类噪声，总计 12 类，每类叫声约 3,000 个片段，噪声类为 12,228 个片段，按录音磁带划分 70% 训练、 15% 验证与 15% 测试，所有配置在同一独立测试集评测
- **算力与训练耗时**：原文未披露训练所用硬件型号与数量，仅披露最优 ResNet-18 模型在 RTX 5090 上的端到端推理耗时，训练耗时与显存占用均未说明
- **核心超参数与配置**：AdamW 优化器，单周期学习率调度峰值为 3 × 10 的负 3 次方，bfloat16 混合精度，梯度裁剪为 1.0，早停耐心为 25 个轮次，批大小为 64 用于残差系列与 32 用于 ConvNeXt-Tiny，标签平滑系数为 0.1，加权采样权重与类别频率平方根逆比成正比
- **推理速度与部署开销**：最优 ResNet-18 模型在 RTX 5090 上端到端实时因子为 0.007，定义为含输入输出、预处理、推理与后处理的总耗时除以音频时长，参数量、显存、分块延迟与吞吐均未披露
- **开源产物与协议状态**：原文未披露代码、权重、数据与可运行系统的公开状态，本次未收到可验证的资源链接，无法确认是否开源或可下载
- **附录与补充材料要点**：正文脚注提及补充演示视频与幻灯片，但未给出可核验地址，原文未披露附录证明、额外消融、许可限制与失效案例细节

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.9/10** | 创新 6.3/10 | 技术严谨 5.3/10 | 实验充分 6.6/10 | 清晰度 5.2/10 | 影响力 4.8/10 | 开源 0.0/10 | 可复现 6.0/10 | 工程/实践 6.9/10
- 排名：后50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0982`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/982) · [官方 PDF](https://ijcai.org/proceedings/2026/0982.pdf)
- DOI：`10.24963/ijcai.2026/982`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同一留出测试集上系统比较段长与骨干并如实报告长窗与更大骨干退化等负结果。

- 核心优势：针对K12与K14时间调制混淆明确给出FFT1024跳长172与频带等完整语谱图参数。

- 核心优势：最优模型在RTX5090上实测包含预处理与推理的端到端RTF为0.007。

- 主要短板：基线与最优同时改变采样率、下限频率、跳长、平滑、过采样与段长，无法分离STFT本身净增益。

- 主要短板：仅用Avacha Gulf单一海域数据且单次切分无置信区间，未验证跨种群方言泛化，最优下K12仍低于基线。

- 主要短板：摘要称评估五个段长而正文表格仅呈现四个取值，且结论将联合增益归因于平滑与过采样，存在口径出入。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
