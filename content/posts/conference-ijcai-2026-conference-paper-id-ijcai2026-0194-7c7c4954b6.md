---
title: "Listen and Count: Expanding the Frontier of Zero-shot Object Counting to Sound-centric Counting"
date: 2026-11-28
draft: false
description: "针对文本提示多义且在纯音频场景缺失的问题，S2ICount 以冻结 CLAP 经 SoundMamba 投影为 768 维条件，结合稳定扩散多尺度特征的环形扫描校准与三层混合优化，在 SoundCount 上以验证集 6.80 与测试集 7.87 的平均绝对误差优于展示的最强文本与声音基线，代价是依赖 10 秒清晰声音、阈值化伪监督与单数据集验证且未报告部署成本。"
tags: ["数据集", "扩散模型", "状态空间模型", "音视频理解"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听声计数：以声音为提示的零样本目标计数"
paper_digest_original_title: "Listen and Count: Expanding the Frontier of Zero-shot Object Counting to Sound-centric Counting"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0194"
paper_digest_workbench_source_sha256: "247181edf2a1844702b6305d1c0110375b2bb6d418ae851d6f72a19955a0f0e5"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/194"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0194.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音视频理解"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本提示多义且在纯音频场景缺失的问题，S2ICount 以冻结 CLAP 经 SoundMamba 投影为 768 维条件，结合稳定扩散多尺度特征的环形扫描校准与三层混合优化，在 SoundCount 上以验证集 6.80 与测试集 7.87 的平均绝对误差优于展示的最强文本与声音基线，代价是依赖 10 秒清晰声音、阈值化伪监督与单数据集验证且未报告部署成本。"
paper_digest_reader_sections: [{"heading":"从样例框和文本词到声音提示：计数任务为何需要听觉指引","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"S2ICount 如何把一段 10 秒声音变成计数条件","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"环形扫描与多尺度校准如何缓解密度偏移","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三层混合优化如何约束幅度、语义与分布","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"SoundCount 上的主对比与声音引导的可视化证据","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"音频编码器与各组件取舍的消融诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提、代价与复现选型建议","index":7,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Department of Mathematics, Zhejiang Sci-Tech University, Hangzhou, China"],"name":"Mingjie Wang"},{"affiliations":["Department of Mathematics, Zhejiang Sci-Tech University, Hangzhou, China"],"name":"Zhuohang Li"},{"affiliations":["College of Computer Science and Software Engineering, Shenzhen University, Shenzhen, China"],"name":"Qi Zhang"},{"affiliations":["School of Information Science and Technology, Dalian Maritime University, Dalian, China"],"name":"Jun Zhou"},{"affiliations":["School of Intelligence Science and Technology, Nanjing University, Nanjing, China"],"name":"Zili Yi"},{"affiliations":["School of Computer Science, University of Guelph, Guelph, Canada"],"name":"Minglun Gong"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9e5f486e3d10e93d21ee2598683024df3dfe6fadf56d8eee137fedc9236c6790","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c7c4954b6f68333d9168cdd/citation.bib"},"citation.json":{"sha256":"7cff754c360ec7ac7a8f573cdcd7204a31be75860cc08129a2e32219be23093a","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c7c4954b6f68333d9168cdd/citation.json"},"citation.ris":{"sha256":"5abf3d6b5f5f3a7838650c5e94a46fd19a043b3cd5a31dc368f5a01fd38b2d1a","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c7c4954b6f68333d9168cdd/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1a00b432a0e8c28a808571277ea3f584b058225cde5c5837544d882426e6e7d7","url":"/audio-research-portal/client/papers/2026-11-28/conference-7c7c4954b6f68333d9168cdd/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0194"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/194"
paper_digest_conference_doi: "10.24963/ijcai.2026/194"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/194"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0194.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "cfc2db814857aceed6d38a4a9d11465e15268dc3659593b6cb2964f1e6af2221"
paper_digest_api_reader_plan_sha256: "74f6b2ba6984473b3236c1862197ad5215c497e1620e6bd956dd8a8cfb168f4f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c212206b99975208ac2dc1862db22d3429fdf40dfb30244813fb7ca700a7092b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "868d3e852d7377e6fa0409eaa311b4d93164079d87ed7edf1f495e915bf1640c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4174992a920d634466e41bf56b278dfe68b89a48bccdaa64d8bef0acdb7b9579"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b94fcaba4d46614c4f4f5bd11dd941b5150756b26add6b5ab1514a1db7ac5241"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 听声计数：以声音为提示的零样本目标计数

> 英文题目：*Listen and Count: Expanding the Frontier of Zero-shot Object Counting to Sound-centric Counting*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0194`
> DOI：`10.24963/ijcai.2026/194`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/194) · [官方 PDF](https://ijcai.org/proceedings/2026/0194.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [扩散模型](/audio-research-portal/papers/?concept=method.diffusion)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 5.4/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.3/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Mingjie Wang：Department of Mathematics, Zhejiang Sci-Tech University, Hangzhou, China
- Zhuohang Li：Department of Mathematics, Zhejiang Sci-Tech University, Hangzhou, China
- Qi Zhang：College of Computer Science and Software Engineering, Shenzhen University, Shenzhen, China
- Jun Zhou：School of Information Science and Technology, Dalian Maritime University, Dalian, China
- Zili Yi：School of Intelligence Science and Technology, Nanjing University, Nanjing, China
- Minglun Gong：School of Computer Science, University of Guelph, Guelph, Canada

## 📌 核心摘要

**问题与瓶颈：** 类别无关计数需在无类别先验下根据辅助提示估计图像中指定类实例总数并输出密度图，输入为待计数图像与声音或文本提示。已有路线依赖难获取的图像样例或受一词多义困扰的文本类名，如 Speaker 可指扬声器或演讲者，在仅有动物鸣叫等声音的音频感知场景中甚至无可用文本提示。声音本身具有更具区分度的声学指纹，但缺乏大规模声像配对计数数据与细粒度跨模态对齐机制，且 CLAP 与 CLIP 特征空间不兼容、长时音频时序建模开销大，阻碍直接引导。

**核心思路与方法架构：** 与最接近的文本引导 T2ICount 相比，实质增量是以声音为引导并以文本为枢纽做适配与校准，保留 Stable Diffusion 主干的多尺度视觉表示。单条样本流程为一段 10 秒声音经冻结的 CLAP 编码为粗时频特征，送入 SoundMamba 依次经层归一化、1 维卷积、GELU 激活与线性投影及多层 Mamba 块建模长程依赖，再与多层感知机分支的局部特征融合为 768 维声音潜变量。图像经变分自编码器压缩为潜变量后由微调的 U-Net 做一步扩散提取 4 个尺度特征，声音校准模块由粗到细融合多尺度特征，并用顺时针与逆时针圆形扫描 Mamba 将局部特征转为全局表示后与声音潜变量做全局交叉注意力，输出相似图与密度图。训练冻结变分自编码器与 CLAP，仅更新适配器与 U-Net，推理为离线整图计数。多层级混合优化从幅度、语义与分布三路约束对齐，直接针对模态失配与背景干扰。

**关键实验与核心代价：** 在自建 SoundCount 验证集上，S2ICount 的平均绝对误差 (Mean Absolute Error, MAE) ↓ 为 6.80，低于文本引导中表现最好的 T2ICount 的 7.55，也低于同加 SoundMamba 的 T2ICount 声音变体的 7.81。对应均方根误差 (Root Mean Square Error, RMSE) ↓ 为 18.72，低于上述两者的 21.20 与 19.87。测试集声音引导下 S2ICount 的 MAE 为 7.87，RMSE 为 23.20，分别低于 T2ICount 声音变体的 8.28 与 24.85。消融显示移除 SoundMamba 后验证集 MAE 从 6.80 升至 9.09，测试集 MAE 从 7.87 升至 9.27，为最主要的代价；去除 Mamba 的变体验证集 RMSE 为 18.24 但测试集 RMSE 升至 28.12，呈现验证与测试背离的负结果。论文未披露参数量、显存、RTF 或推理时延等部署成本，计数任务以 MAE 与 RMSE 为准，不涉及人工主观听测与神经代理指标对比。

**适用边界与深读导览：** 结论成立前提是声音类别在 SoundCount 的 66 个类别覆盖内且声像对应清晰，对未见类别、强混响、多声源重叠及超高密度场景的泛化尚未验证，论文称数据集、演示与实现代码已在 GitHub 公开，可对照演示中的声音引导计数现象理解适用范围。深读可查下方方法概述和架构中的圆形扫描与三重损失公式含义，以及实验结果中主对比与消融表的条件与代价分析。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/ZSTU-CV-Lab/S2ICount> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从样例框和文本词到声音提示：计数任务为何需要听觉指引

目标计数长期服务于安防监控、交通管理与农业估产等场景。早期方法多为类别专用，例如人群或车辆计数，依赖大量人工点标注，类别覆盖窄，遇到未见类别往往难以泛化。为此，类别无关计数受到重视，目标是在不为每个新类别重新标注大量样本的前提下，对任意类别实例进行计数。由于图像本身不携带类别指征，此类方法必须借助额外提示来指明数什么，这是理解后续 3 类提示差异的关键前提。

此前主流提示分为两类。第一类是图像样例提示，要求用户在待计数图像中框出几个样例，再以小样本匹配方式寻找同类目标，获取成本高，在实际部署中常常缺失。第二类是文本提示，借助 CLIP 与 BERT 等大规模预训练文本编码器的泛化能力，直接以类别名称引导计数，代表方法包括 CLIP-Count、VLCounter 与 T2ICount。然而，文本多义性难以消除，论文以 Speakers 为例，同一单词既可指代舞台上的音箱设备，也可指代演讲者，模型难以仅凭词形判定目标。

为了一次看清 3 类范式的输入与输出差异，可沿原图从左向右对照阅读。左上为样例引导计数，左侧为密集鸟群，右侧虚线框给出 3 个鸟类样例，共同指向小样本计数模块。左下为文本引导计数，上方给出具有多义性的 Speakers 文本，下方为舞台图像，文本编码器与图像编码器汇合后输出零样本计数，但右下角同时出现音箱与演讲者图标并标注问号。右侧为本文提出的声音中心计数，上方给出牛哞与羊咩的波形，下方为草原混合场景，最终同时输出两类计数。

[![原论文 Figure 1：(a) Exemplar-based counting methods explicitly require user-provided exemplar prompts to specify…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-1.png)

*论文图 1：三类计数范式对照：样例缺失、文本多义与声音判别性引导的输入输出差异（原论文 Figure 1）。*

原图细节进一步支撑了动机判断。样例分支强调样例不可得，3 个鸟类小图以虚线框标出，暗示实际中难以现场获取。文本分支把多义性可视化，舞台上同时存在多个黑色音箱与一位演讲者，文本编码器到图像编码器的虚线回路暗示语义含混。声音分支则展示判别性，两段波形形态明显不同，分别对应牛群与羊群，声音感知模块与图像编码器在交叉符号处汇合后，给出牛 34 只与羊 117 只的计数。这种以听觉指纹替代词形指称的思路，直接对应音频传感机器人与助视应用中仅有声音线索而无文本可用的物理约束。

### S2ICount 如何把一段 10 秒声音变成计数条件

与最近的文本引导基线 T2ICount 相比，S2ICount 保留了 Stable Diffusion 主干提供多尺度视觉特征与注意力图的做法，替换的是提示模态与对齐机制。新增部分包括三块：其一为 SoundMamba 适配器，将粗声音特征投影到与 CLIP 文本空间兼容的 768 维隐向量；其二为声音校准模块，以环形扫描 Mamba 融合 4 个尺度的 UNet 特征；其三为多层混合优化，从幅度、语义与分布三方面约束声音与文本的一致性。信号层面，论文统一将每段音频裁为 10 秒窗口，图像经变分自编码器进入隐空间，计数目标仍为密度图求和。

理解总体数据流时，建议按左中右三栏追踪箭头。左侧为声音到文本适配器，上方区分仅训练使用的文本枢纽与训练测试均用的声音分支，下方为多尺度正则与对比损失的相似矩阵。中部为声音引导计数，输入图像经变分自编码器进入稳定扩散结构，输出 4 个尺度特征后汇入校准模块与计数头。右侧为真值显著图分支，给出交叉注意力图、伪显著真值、学习相似图与真值密度图之间的监督闭环。雪花与火焰标记区分冻结与可训练部件。

[![原论文 Figure 2：The proposed S2ICount mainly consists of: i) SoundMamba, an efficient adapter engineered to…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-2.png)

*论文图 2：S2ICount 总体结构：声音到文本适配器、扩散计数分支与显著性监督分支的协同（原论文 Figure 2）。*

原图细节显示，左侧大语言视觉模型处理 Cattle 与 Sheep 文本，大语言音频模型处理牛哞与羊咩波形，二者在多尺度正则与对比损失处对齐。中部火焰标记出现在 SoundMamba、校准模块与计数头，雪花标记出现在变分自编码器与两个大模型编码器，表明前者参与更新而后者保持冻结。稳定扩散内部由细到粗再由粗到细展开 4 个特征条带，分别记为 F4 至 F1。左下环形扫描以顺时针与逆时针同心圆示意连续密度变化，并以水平与垂直箭头对照不规则波动，直观解释了全局建模的动机。

以一段 10 秒牛哞与一张草原图像为例，流程可分为五步。第一步，冻结的 CLAP 编码器提取粗时频表征，维度细节原文未披露。第二步，SoundMamba 依次经过层归一化、一维卷积、GELU 激活与线性投影，再叠加多个 Mamba 块并保留残差连接，最后与多层感知机得到的局部特征融合，输出 768 维声音隐向量。第三步，图像经变分自编码器压缩为紧凑隐变量。第四步，预定义 UNet 在声音嵌入引导下做单步扩散，取出 4 个尺度的视觉特征图。第五步，校准模块由粗到细递归上采样拼接融合，再经全局交叉注意力得到图像与音频特征，计数头输出预测密度图，求和即为数量。

训练与推理的模块分工明确。训练阶段仅文本枢纽参与对齐，测试阶段停用文本分支，只保留声音分支，体现了以文本为桥而非测试依赖的设计。变分自编码器与 CLAP 参数始终冻结，UNet 以十分之一基学习率微调，以保留预训练先验。推理侧采用单步扩散特征而非多步迭代采样，在效率与精度之间折中。论文未披露延迟、RTF 与显存占用，因此尚不能从原文推断流式部署成本。

### 环形扫描与多尺度校准如何缓解密度偏移

声音校准模块的输入是稳定扩散 UNet 不同层级的 4 个特征图，记为 4 个尺度，空间分辨率逐级变化。模块采用由粗到细的递归聚合，低分辨率特征先上采样，再与当前尺度特征在通道维拼接，最后经线性层投影降维，最粗尺度以自身作为起点。这种设计使高层语义逐步注入高分辨率细节，有助于在羊群与牛群交织的场景中同时保留类别语义与位置精度。原文未给出各尺度的具体通道数与上下采样倍数，复现时只能依据单步特征与四尺度的定性描述搭建。

直接在融合特征与全局声音向量之间做常规交叉注意力，容易只关注局部像素与整体声音的相似，而忽略整幅图像的全局实例分布。在高密度或多类别场景中，这种局部视角难以处理密度偏移，例如远近透视导致的疏密变化。为此，论文提出全局交叉注意力，先以环形扫描 Mamba 把局部融合特征转换为全局表征，再与声音隐向量做交叉注意力，分别得到校准后的图像特征与音频特征。该步骤在保持低计算开销的同时，显式引入了全图分布信息。

环形扫描的核心是按极坐标确定全图像素的遍历顺序。先由行列索引算出图像中心，再把每个像素转换到极坐标，径向距离经离散化系数 K 分层，角度经归一化到 0 到 1 区间。像素优先级由径向层乘以大幅值隔离常数 M 再加角度项构成，M 远大于 1，保证不同径向层严格有序而层内保持角度有序，由此得到顺时针与逆时针两条确定性遍历路径。教学例子：论文以牛群为例，环形扫描经过的图像块密度序列如 0 只、2 只、5 只、3 只、0 只般连续起伏，而水平或垂直扫描则如 5 只、0 只、2 只、0 只、3 只般跳变，前者更符合径向透视下圆形或放射状分布的连续性。

从极端取值看，若隔离常数过小，不同径向层会混叠，环形有序性退化为角度主导；若离散系数过大，径向分层过细，序列会被切碎而失去全局平滑性。论文将 K 取为 20，M 取为 1,000，经验上平衡了分层粒度与层间隔离。复杂度方面，选用 Mamba 而非传统注意力，正是看中其对长程时序与空间依赖的线性复杂度建模，避免二次开销。原文未披露扫描序列长度与具体显存对比，因此只能定性理解其高效，无法量化加速比。

### 三层混合优化如何约束幅度、语义与分布

第一层优化针对幅度一致性。初步实验发现，单一尺度的均方误差难以弥合声音与文本特征的多粒度差异，容易导致适配脆弱。为此，论文设置一组平均池化算子，核大小取 1、3、5、7、9、11、13，步长对应取 1、2、4、6、8、10、12，对声音隐向量与冻结 CLIP 文本嵌入分别做多尺度时序聚合，再在每个粒度上约束二者距离并求和。该约束迫使不同时间粒度的片段都保持幅度对齐，从而得到更稳健的跨模态表征。

第二层优化针对语义一致性，采用对称的正负对比目标。在一个训练批内，相同下标的声音文本对与文本声音对被视为正样本，不同下标的错配组合视为负样本，相似度以余弦度量并经温度系数缩放。目标把正样本拉近而把负样本推远，且在 2 个方向上对称计算，最终与多尺度正则相加构成适配器目标。这种批内自监督构造无需额外标注，依赖的是声音与类别名称在批内的共现关系。

第三层优化针对分布对齐，聚焦相似图的质量。扩散模型的多尺度交叉注意力图先融合为统一注意力图，校准子网络给出学习相似图，但直接拉近二者容易因缺乏真值监督而坍缩。为此，论文以真值密度图构造中间伪显著图：高密度位置标为前景，低密度且注意力响应低的位置标为背景，其余忽略。前景区约束相似响应接近 1，背景区抑制正响应，前景权重记为阿尔法，取为 2。总体目标为密度损失、适配器目标与显著过滤损失的加权和，显著项权重记为拉姆达，取为 0.01。

实现层面，模型以稳定扩散 1.5 版本与 CLAP 为起点，变分自编码器与 CLAP 参数冻结，UNet 进一步微调且学习率降为基学习率的十分之一。基学习率设为 5 × 10 的负 5 次方，优化器为 AdamW，权重衰减为 1 × 10 的负 4 次方，批大小为 4，共训练 200 轮。超参中径向离散系数为 20，幅值隔离常数为 1,000。推理时文本编码器不再参与，仅声音与图像进入计数流程。原文未披露训练硬件型号、总耗时与推理显存，复现成本只能从批大小与轮数粗略推断。

### SoundCount 上的主对比与声音引导的可视化证据

评测围绕自建 SoundCount 展开，该集包含 2,351 个场景与 1,650 个音频源，覆盖 66 个类别，涉及野生动物、乐器与交通工具等。其中 1,328 张为多模态大模型合成的多类别图像，其余为经搜索引擎与短视频平台检索的人工筛选真实图像，单图实例数平均为 58 只，范围为 1 只至 2,092 只，735 张为单类别，其余为复杂多类别。音频源自大规模 VGGSound，经人工筛选后统一裁为 10 秒窗口。指标沿用计数领域的平均绝对误差与均方根误差，数值越低越好，划分含验证集与测试集，文本引导方法在测试集记为不可用，以保证仅在声音引导下公平比较。

阅读 SoundCount 统计图时，可分三部分把握挑战。左侧为按图像内类别数划分的柱状图，横轴为一类、两类、3 类与超 3 类，纵轴为图像数。中间为按单图实例数划分的柱状图，横轴为 1 至 10 只、10 至 20 只、20 至 50 只、50 至 100 只、100 至 300 只与超 300 只，纵轴同样为图像数。右侧为类别与样本频次的环形图，内圈为动物、交通工具、乐器与人物物件四大类，外圈细分鹅、鸟、羊、牛等具体类别与频次。

[![原论文 Figure 3：The statistical distribution of images across our SoundCount, categorized by class number, varying…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-3.png)

*论文图 3：SoundCount 数据分布：类别数组合、单图实例数区间与大类样本频次的统计（原论文 Figure 3）。*

原图细节显示，3 类别图像柱最高，一类别次之，两类别居中，超 3 类别仅剩极窄一条，表明多类别共存是常态而非特例。实例数方面，1 至 10 只与 10 至 20 只两柱显著高于其余，20 至 50 只明显回落，50 只以上拖出长尾，超 300 只仅余微量，说明稀疏场景占多数而高密度场景稀少，模型需兼顾常见稀疏与罕见密集。环形图中外圈鹅 393 次、鸟 349 次、羊 344 次、牛 303 次居前，内圈动物 2,842 次远超交通工具 1,119 次，类别不均衡同样构成泛化压力。

下表仅整理原文主表中的三行关键对比，聚焦最强文本基线、其声音适配变体与本文完整模型，以核对声音引导是否真正带来增益。列方向为验证集与测试集的平均绝对误差与均方根误差，数值越低越好，文本方法在测试集记为不可用。原文完整 Table 2（本精简表未列出）还含 CLIP-Count 与 VLCounter 等行，阅读极值结论时应以展示的三行为准。该整理保留了原数值的小数精度与不可用标记，未做四舍五入。

| 提示类型 | 方法 | 验证集 MAE | 验证集 RMSE | 测试集 MAE | 测试集 RMSE |
| --- | --- | --- | --- | --- | --- |
| 文本 | T2ICount | 7.55 | 21.20 | NA | NA |
| 声音 | T2ICount + SoundMamba | 7.81 | 19.87 | 8.28 | 24.85 |
| 声音 | S2ICount | 6.80 | 18.72 | 7.87 | 23.20 |

三行数据显示，文本 T2ICount 验证集为 7.55 与 21.20，接入 SoundMamba 后验证集变为 7.81 与 19.87，测试集为 8.28 与 24.85，而完整 S2ICount 验证集降至 6.80 与 18.72，测试集降至 7.87 与 23.20，在展示的三行可比范围内，四格数值均以完整模型为最小。增益需结合代价理解：声音适配使验证集平均绝对误差略升而均方根误差下降，表明大误差样本得到抑制但平均偏差未同步改善。原文完整 Table 2（本精简表未列出）中另有 CLIP-Count 与 VLCounter 基线，其声音变体在验证集上几乎无提升，说明适配器并非对所有主干普适。人工听测缺失，神经代理指标亦未报告，结论仅在计数误差层面成立。

### 音频编码器与各组件取舍的消融诊断

消融旨在回答 3 个问题：音频编码器是否关键，各校准与损失组件是否缺一不可，以及定性切换是否真正跟随声音而非图像偏置。论文在 SoundCount 验证集与测试集上同时报告平均绝对误差与均方根误差，数值越低越好。组件消融以仅保留 SoundMamba 为起点，验证集为 7.19 与 19.14，测试集为 8.45 与 26.07，逐步加入校准模块、Mamba、环形扫描与显著过滤后，完整模型达到验证集 6.80 与测试集 7.87，表明整体集成的必要性。

在查看定性切换图前，建议按行阅读 3 组场景。首行为开阔草原，顶部波形由灰色鸟鸣过渡到红色牛哞，下方两幅密度图分别对应两段提示。中间行为围栏场景，顶部波形依次为羊咩、牛哞与猪哼，对应三幅密度图。末行为水面禽群，顶部为鹅叫与鸭叫两段波形，对应两幅密度图。每幅密度图下方均标注预测数对照真值，可直接核对高亮区域是否随声音切换。

[![原论文 Figure 5：Qualitative examples provided by our S2ICount, demonstrating the flexible sound guidance and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/d8a2b8098a7f/figure-5.png)

*论文图 5：同一场景切换声音提示的计数切换：预测密度与真值对照的定性示例（原论文 Figure 5）。*

原图细节显示切换具备跟随性。草原场景在鸟鸣下高亮集中于远处林缘鸟群，预测 24.5 只对照真值 34 只，存在低估，切换到牛哞后高亮移至近处牛群，预测 52.3 只对照真值 47 只，转为轻微高估。围栏场景在羊咩下聚焦中部羊群，预测 33.1 只对照真值 38 只，在牛哞下聚焦前景 5 头牛，预测 4.6 只对照真值 5 只，在猪哼下聚焦左侧猪群，预测 21.8 只对照真值 21 只，后两者接近真值。水面场景鹅叫稀疏，预测 21.1 只对照真值 26 只，鸭叫密集，预测 141.5 只对照真值 129 只，高密度下误差放大，提示密集小目标仍是难点。

下表为原文音频编码器对照的完整复刻，共 4 行 5 列，比较在同一 S2ICount 结构下换用 AudioCLIP、SpeechCLIP 与 CLAP 的效果。列为验证集与测试集的平均绝对误差与均方根误差，数值越低越好。该表未裁剪任何行列，可直接逐格核对极值。编码器差异是声音中心计数的关键变量，因为不同预训练语料决定了声音表征对动物鸣叫与器乐交通声的覆盖度。

| Methods | MAE | Val Set RMSE | MAE | Test Set RMSE |
| --- | --- | --- | --- | --- |
| S2ICount (AudioCLIP) | 12.61 | 29.15 | 14.01 | 38.62 |
| S2ICount (SpeechCLIP) | 11.64 | 32.22 | 13.51 | 39.35 |
| S2ICount (CLAP) | 6.80 | 18.72 | 7.87 | 23.20 |

逐格核对显示，CLAP 在四格中数值最小，验证集为 6.80 与 18.72，测试集为 7.87 与 23.20，优于 AudioCLIP 的 12.61 与 29.15、14.01 与 38.62，以及 SpeechCLIP 的 11.64 与 32.22、13.51 与 39.35，说明大规模音频文本语料的覆盖度至关重要。组件层面亦有权衡：移除 Mamba 后验证集均方根误差为 18.24，但测试集恶化至 28.12；禁用适配器目标后测试集均方根误差为 21.85，但验证集变差；移除 SoundMamba 后验证集升至 9.09，测试集升至 9.27。原文未报告方差与置信区间，单次结果的稳定性尚待验证。

### 结论成立的前提、代价与复现选型建议

结论成立依赖 3 类前提。其一为提示有效性，假设输入声音清晰可辨且与图像中目标类别一一对应，若现场混入多声源重叠或目标静默，模型缺乏分离与静默处理机制。其二为数据代表性，SoundCount 以 66 类为主，合成图经人工筛选但仍含感知伪影，真实图经关键词检索偏向高密度，低密度与长尾类别的覆盖有限。其三为监督完备性，伪显著图依赖阈值与真值密度图，阈值选择具有经验性，跨域迁移时可能失效。

部署条件多处未验证。训练仅在 SoundCount 内划分验证与测试，未见跨数据集评估，例如在 FSC-147 等纯图像集上外加声音的泛化表现未知。音频侧统一为 10 秒窗口，未测试短促鸣叫、长时背景噪声或远场混响下的鲁棒性。视觉侧为单步扩散特征，未报告不同分辨率、遮挡与夜间场景的衰减。推理成本方面，原文未披露 RTF、延迟与显存占用，无法判断在嵌入式机器人或助视设备上的可行性。

复现需区分三件事。代码与数据方面，论文在摘要给出 GitHub 仓库链接并声称数据集、演示与实现代码公开，本次第三方检查显示该链接当前可达，但归属鉴定为第三方资源，实际代码、权重、数据与说明覆盖情况需以页面内容为准。权重方面，论文基于稳定扩散 1.5 版本与 CLAP 初始化，未明确是否提供完整微调权重下载。系统方面，论文给出 200 轮、批大小 4 与学习率等超参，但未披露硬件型号与环境依赖，能否直接运行需对照仓库中的说明文件核对。

选型上，若应用场景仅有声音而无文本，例如野生动物声学监测或助视计数，且类别集中于动物鸣叫，CLAP 加 SoundMamba 的路线值得优先尝试，并保留文本枢纽仅作训练约束。若场景以交通工具或乐器为主，或声音易混叠，建议先做小规模声音清晰度筛选，再决定是否引入环形扫描的全局分支。论文提及提供演示页面，使用时可对照同一图像切换不同声音后的高亮区域与预测数，重点观察高密度与多类别交织时的漏检与误检，不宜仅凭单一样例推断整体精度。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：每段音频统一裁为 10 秒窗口，采样率、帧长、步长、码率、前瞻延迟与 RTF 原文未披露，声音隐向量为 768 维
- **训练与评测数据**：SoundCount 包含 2,351 个场景与 1,650 个音频源，覆盖 66 个类别，1,328 张为多模态大模型合成，其余为检索筛选真实图像，单图平均 58 只，范围 1 只至 2,092 只，735 张单类别，其余多类别，音频源自 VGGSound 统一裁为 10 秒窗口并经人工筛选
- **算力与训练耗时**：原文未披露 GPU 与 TPU 型号数量、训练总耗时与推理硬件，仅给出训练 200 轮、批大小 4、优化器与学习率等配置
- **核心超参数与配置**：基学习率 5 × 10 的负 5 次方，UNet 学习率为其十分之一，AdamW 优化器，权重衰减 1 × 10 的负 4 次方，批大小 4，200 轮，显著前景权重 2，显著损失权重 0.01，径向离散系数 20，幅值隔离常数 1,000，声音隐向量 768 维，平均池化核 1、3、5、7、9、11、13 与步长 1、2、4、6、8、10、12，稳定扩散 1.5 版本与 CLAP 初始化，变分自编码器与 CLAP 冻结，UNet 微调
- **推理速度与部署开销**：原文未披露 RTF、延迟、吞吐与显存占用，仅说明采用单步扩散特征以折中效率与精度，计数头对密度图求和得到数量
- **开源产物与协议状态**：论文摘要给出 GitHub 仓库链接并描述数据集、演示与实现代码，资源身份记录将其鉴定为第三方提及，未确认作者资源归属，实际覆盖情况需以页面内容为准
- **附录与补充材料要点**：原文未披露附录关键证明、补充消融、许可限制或失效案例细节，补充信息以正文实验为准

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.4/10** | 创新 7.4/10 | 技术严谨 6.6/10 | 实验充分 6.0/10 | 清晰度 5.4/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 5.3/10 | 工程/实践 6.1/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0194`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/194) · [官方 PDF](https://ijcai.org/proceedings/2026/0194.pdf)
- DOI：`10.24963/ijcai.2026/194`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以声音替代文本引导类别无关计数，验证集MAE6.80优于文本最优T2ICount的7.55，范式增量明确可核对。

- 核心优势：设置文本与声音变体对照及八组直接消融，移除SoundMamba后验证MAE升至9.09因果贡献最明确。

- 核心优势：构建2351场景66类1650音频源的SoundCount声像配对基准，平均每图58实例支撑训练与评测。

- 主要短板：仅在自建SoundCount评测无外部基准，且去适配损失测试RMSE21.10与去SoundMamba21.25反超全量23.20提示划分敏感。

- 主要短板：原文表3存在MAE与RMSE印刷顺序错位，且正文称最低测试RMSE21.85与归位后21.10字面出入而原文未解释。

- 主要短板：伪显著图阈值phi与xi、数据划分、硬件与推理成本均未说明，多声源重叠与未见类别等失效场景未评测。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
