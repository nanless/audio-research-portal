---
title: "A Novel Dataset and Framework for Schenkerian Optical Music Recognition"
date: 2026-11-24
draft: false
tags: [光学乐谱识别, 图神经网络, 数据集, 模型集成]
categories: [论文速递]
description: "针对手写申克分析大小符号悬殊与长程依赖，论文用 YOLOv8L 与 RF-DETR 分治检测加候选超边注意力拓扑装配实现识别到排版，在 HandSchA 句法微平均 F1 达 86.48% 显著领先基线，代价是仅 47 页专家标注且符号识别仍高度依赖数据规模。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26958"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "手写申克图的识别到排版：互补检测与拓扑装配"
paper_digest_original_title: "A Novel Dataset and Framework for Schenkerian Optical Music Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26958v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26958v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26958v1.pdf"
paper_digest_primary_task: "光学乐谱识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.optical-music-recognition","label":"光学乐谱识别"},{"facet":"method","id":"method.gnn","label":"图神经网络"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.model-ensemble","label":"模型集成"}]
paper_digest_primary_method: "图神经网络"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对手写申克分析大小符号悬殊与长程依赖，论文用 YOLOv8L 与 RF-DETR 分治检测加候选超边注意力拓扑装配实现识别到排版，在 HandSchA 句法微平均 F1 达 86.48% 显著领先基线，代价是仅 47 页专家标注且符号识别仍高度依赖数据规模。"
paper_digest_reader_sections: [{"heading":"手写申克分析为何让传统光学乐谱识别难以直接套用","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"从手写页到可排版语义图的识别装配排版流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"大小符号分治的 YOLOv8L 与 RF-DETR 互补集成检测","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"候选超边注意力与层级消息传递的句法连接预测","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"符号检测与句法连接在大跨度符号上取得的收益与代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"时间组先后连接与端到端流水线的误差传递","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"小规模专家标注下的适用边界与复现选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Duke University"],"name":"Yixuan Huang"},{"affiliations":["Independent Researcher, Denton, USA"],"name":"Xiao Yun"},{"affiliations":["Chinese University of Hong Kong, Shenzhen"],"name":"Jiayin Zheng"},{"affiliations":["Duke University"],"name":"Simon Mak"},{"affiliations":["Duke University"],"name":"Yue Jiang"},{"affiliations":["Duke University"],"name":"Cynthia Rudin"},{"affiliations":["Chinese University of Hong Kong, Shenzhen"],"name":"Stephen Ni-Hahn"}]
paper_digest_abstract_sha256: "fa86a00c84973909f88beda72ed427f37fff27d30bfa536901c1bb9eb83ad8bc"
paper_digest_sidecars: {"citation.bib":{"sha256":"3eb98bd33c2e60c797c568ec222e02bb62e09666bdc26e1bec03abbeb0b7ebf1","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26958/citation.bib"},"citation.json":{"sha256":"fa8d8321d3c35bee9ce53d6e38aa3f0ed6267f4ddec3ed8c544f6198c67eee89","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26958/citation.json"},"citation.ris":{"sha256":"f5f8d4a4e92e1aec10de3ca42ad155bec25d964b7c8c6c25fcf696411c8aca02","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26958/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1fae2610744fa5d3c8e0e4f9d61d0d807d924c6083015212d59a6393ac103581","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-26958/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "ac73fec9f9f1ec3b9b681fa219d1b23e31e878e29a8d621b4f246c14d760aa9c"
paper_digest_api_reader_plan_sha256: "e6fb549256add1dae78283b960b664b6b8aafeefa94630ed878b3f0b1eee963d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3647ca6e8258db94cf53963eeb3f1134b1c2a563287c9c336d5709b2bc23404e"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "f7c4d886605f02d5662476091c8aa1ee00a63b4f6981dbc7ddade426c7d2ed1e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "adc25686f97c95585494aa0d56e8e20fe3043369209ab60f7348716867de69fd"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1bf676d3d7c76a15095479d721a856e6a0069c2bff730357f5b7dcc18ec204ea"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 手写申克图的识别到排版：互补检测与拓扑装配

> 英文题目：*[A Novel Dataset and Framework for Schenkerian Optical Music Recognition](https://arxiv.org/abs/2611.26958v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [光学乐谱识别](/audio-paper-digest-blog/papers/?concept=task.optical-music-recognition)
- **研究方法**：[图神经网络](/audio-paper-digest-blog/papers/?concept=method.gnn)；[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination) → [模型集成](/audio-paper-digest-blog/papers/?concept=method.model-ensemble)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 7.7/10 | 技术严谨 7.1/10 | 实验充分 8.0/10 | 清晰度 6.8/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 7.5/10 | 工程/实践 6.0/10


## 👥 作者与机构

- Yixuan Huang：Duke University
- Xiao Yun：Independent Researcher, Denton, USA
- Jiayin Zheng：Chinese University of Hong Kong, Shenzhen
- Simon Mak：Duke University
- Yue Jiang：Duke University
- Cynthia Rudin：Duke University
- Stephen Ni-Hahn：Chinese University of Hong Kong, Shenzhen

## 📌 核心摘要

**问题与瓶颈：** 论文处理手写申克分析图的识别到排版，输入是整页手写图像，输出是可排版的语义图与包含时间、音高、声部和结构深度的标准化 JSON 记谱。现有通用西方记谱光学识别系统擅长小符号的局部检测，却难以处理申克图中的大跨度连线、被拉长且弯曲的梁、长度多变的符干，以及罗马数字、级数帽子和中断记号等分析标记。布局缺少统一规范，符号密集且含义依赖跨页层次关系，符号之间是结构从属而非演奏指令。只看局部窗口的检测加逐对打分的组装因此失效，长程依赖无法仅靠相邻几何恢复。

**核心思路与方法架构：** 与最接近的 completeOMR 单检测器加逐对多层感知机基线相比，本文保留多阶段路线，改动在于用互补裁剪集成应对尺度两极分化，并让候选连接之间直接交换信息。一页图像按 5100×3509 归一化后并行进入两个分支，YOLOv8L 在 1216×1216 重叠方块中寻找小符号，RF-DETR 在高 768 像素的全宽横条中寻找大符号，两路框经置信度过滤、交并比 0.5 非极大值抑制和碎片剔除后合并为符号节点。语法连接预测把符号看作 0 阶胞，把候选连接看作 1 阶胞，每个候选在两端各形成超边标记，经 4 通道注意力在共享同一符号的候选中汇总上下文，再做符号、连接和上下文之间的层次消息传递，两轮更新后以视觉置信对数几率加基线修正与拓扑修正得到最终连接概率。其中成对分类卷积网络先单独训练，组装阶段冻结作视觉编码，检测器则从 COCO 权重出发在各数据集上更新，全程为页级处理。时间组与先后连接各用一个直方图梯度提升分类器分别估计，分别经平均链接聚类和按符号选后继解码，最后由算法 1 按时间组排序定时间，按谱表位置定音高，按空心符头与梁标记定声部，按符干端点高度定深度。

**关键实验与核心代价：** 主评测在 HandSchA 的 8 组随机划分与留一作品划分上进行，符号检测用平均精度均值 mAP 与加权 w-mAP（越高越好 ↑），关系组装用有向边微平均 F1 与对组 F1（越高越好 ↑）。在 HandSchA 的 8 组随机划分均值上，语法连接有向边微平均 F1 达到 86.48%，高于最强可比基线直方图梯度提升的 76.61%，同时高于 GraphSAGE 的 75.49%。随机划分上集成全符号 w-mAP50 达到 93.47%，高于 YOLOv8L 单分支的 92.99% 与 RF-DETR 单分支的 86.66%，时间组对组 F1 为 94.98%，先后连接有向边 F1 为 74.70%，留一作品上趋势一致，MUSCIMA++ 上 8 项指标中 5 项领先。论文未报告延迟与显存实测，结构上的代价来自双检测器推理与注意力消息传递的额外计算，极高小节线超出横条高度时需改用整页输入，且在留一作品上用检测符号代替标注符号时语法连接有向边微平均 F1 从 85.70% 降至 80.79%，误差会向后传递。

**适用边界与深读导览：** 结论目前仅在 47 页手写纯申克图上成立，涉及 3 位分析者与 12 部作品，未覆盖印刷谱与混合记谱，也未实测实时率与人工排版偏好，视觉质量只靠检测与连接指标间接反映。排版效果需对照手写到印刷示例理解。想深究候选超边注意力与层次传递的公式与损失权重可看下文方法章节的语法连接部分，想核对划分、阈值选择与可扩展性曲线可看实验与训练设置章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/stephenHahn88/mung-studio-schenker> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 手写申克分析为何让传统光学乐谱识别难以直接套用

申克分析 (Schenkerian analysis, SchA) 把调性音乐组织成多层级和声与声部进行结构，记谱重在揭示骨干音与展开关系，而非给出演奏指示。论文区分纯记谱与混合记谱，纯记谱抽掉具体音高时值细节以突出结构，混合记谱把结构标注直接叠加在通用西方乐谱记谱 (Common Western Music Notation, CWMN) 谱面上。同一符头符干与梁在申克语义下表示层级深浅，连线表示长程连接而非分句，罗马数字与数字低音标记和声层级，帽子记号标记结构和声音级，中断记号表示某层级进行中止。

手写到可排版的转换为本文定义的端到端任务，输入为整页手写图像，输出为语义图与可排版的标准化 JSON 记谱。语义图记为符号节点、句法连接、先后连接与时间组的四元组，节点为可见符号，句法连接拼接符头与符干等部件，先后连接给出声部内时间顺序，时间组收纳还原中同时发声的符头集合。传统工作流先在纸上起草，再到 Dorico 或 Sibelius 中逐符号录入，导出为 SVG 后到 Illustrator 中手工调版，最终多以 JPG 或 PNG 静态图分享，软件中的类别与音高语义在导出后丢失。

既有光学乐谱识别 (Optical Music Recognition, OMR) 难以直接搬运，原因有三。视觉上小符号与跨页大符号尺度悬殊，符头与升降号需要高局部分辨率，连线与结构梁需要整页水平上下文，密集手写下局部切块易截断。语义上词汇仅部分重叠，连线曲率上下区分声部关系，布局间距对齐更不规范，关系含义强调层级依赖而非演奏顺序。数据与模型上端到端序列模型依赖数万级配对图像序列，多阶段模型多为局部成对打分，MUSCIMA++ 只标注句法关系，缺少申克所需的时间组与先后连接。

论文因此提出识别到排版框架，符号识别与句法装配同时适用于 CWMN 与 SchA，核心是用互补集成检测应对尺度变化，用拓扑神经网络在候选连接间传递上下文，用直方图梯度提升分类器处理时间组与先后连接，最后由算法转为排版 JSON。配套贡献为首个手写申克标注数据集 HandSchA，模型辅助的 MuNG Studio 标注闭环，以及语义图到排版谱面的转换算法。后续以整页 5100×3509 像素样本贯穿追踪各分支张量形状与汇合点。

### 从手写页到可排版语义图的识别装配排版流水线

#### 语义图与三阶段划分

框架分为符号识别、记谱装配与语义转换 3 段。符号识别输出类别与页级边界框构成节点集合，记谱装配预测句法连接、时间组与先后连接，语义转换按 Algorithm 1 推导每个符头的时间位置、音高、声部与层级深度，再写入标准化 JSON 排版记谱。选择多阶段而非端到端，是为了在只有少量标注页时即可用检测器辅助标注，随标注增长逐步训练关系模型，这与数据收集闭环直接对应。

以一页缩放到 5100×3509 像素的手写申克页为例，YOLOv8L 分支将其切为 1216×1216 像素方形切块，步长 960 像素，只保留中心落在所属无重叠区域的预测，专攻符头与临时记号等小符号。RF-DETR 分支将其切为全页宽、高 768 像素的水平长条，步长 384 像素，保留水平上下文以捕捉跨多块的连线与结构梁。2 分支分别输出类别、边界框与 0 到 1 置信度，经类内非极大值抑制与碎片过滤后合并为页级节点，再进入关系预测。

#### 流程示意与数据规模

下图把 3 段浓缩为一个红色长箭头，左侧为密集手写页，右侧为规范排版谱，中间并列三步文字，可对照阅读后续分支在何处分治又在何处汇合。左侧页上下均有贯穿多小节的长连线，右侧页转为规整谱表与直线，箭头下方三行分别对应检测、装配与重建，有助于定位双分支与拓扑网络的位置。

[![原论文 Fig. 1：Handwritten SchA (left) transformed into a typeset graph (right).](https://arxiv.org/html/2611.26958v1/figs/schenker_omr_example.png)](https://arxiv.org/html/2611.26958v1/figs/schenker_omr_example.png)

*论文图 1：手写申克页到排版谱面的三阶段转换示意，红箭头标出检测装配与重建顺序（原论文 Fig. 1）。*

左侧手写页上下均有贯穿多小节的长连线与拉长符干，罗马数字标记和声，右侧排版页把相同结构转为直线谱表与规整连线，谱号与符头位置清晰可编辑。红色 SchA OMR 箭头下方并列目标检测、记谱装配与音乐重建三行，分别对应不同颜色，表明检测框必须先组装成图才能重建语义，而非直接输出像素，这与语义图定义一致。

HandSchA 包含 3 位专家分析师手写的 47 页申克图，覆盖 Monteverdi、Pachelbel、Bach、Schubert、Rachmaninov 与 Berg 的 12 部作品，共 30,780 个符号、128 类。每页标注为乐谱记谱图 (Music Notation Graph, MuNG)，节点为类别加边界框，连线沿用 OmniOMR 的句法与先后约定，罗马数字与线性进行按歌词方式处理，结构符干额外连向其标记的连线、梁与和声数字，梁也连向其跨越的标记，连线上下曲率单独成类以区分声部关系。

HandSchA 按任务划分子集，下表给出各子集页数与标注计数，可看出关系标注覆盖并不完全对齐。符号识别用足全部页，而句法、时间组与先后子集仅用含对应标注的页，这种差异决定后续各模型训练与评测页数不同。随机划分与留出一部作品划分均在此基础上产生，比较时需注意同子集同划分。

|  | Symbol recognition | Syntax links | Time groups | Precedence links |
| --- | --- | --- | --- | --- |
| Pages | 47 | 36 | 37 | 44 |
| Annotations | 30,780 | 22,138 | 2,309 | 11,038 |

符号识别为 47 页、30,780 个符号，句法连接为 36 页、22,138 条，时间组为 37 页、2,309 组，先后连接为 44 页、11,038 条。差异来自部分页缺少某类关系标注，实验对每子集分别做 8 组随机划分，并另设留出 Rachmaninov The Bells 全部页的划分，以检验跨作品泛化，验证页从剩余页中随机抽取。

### 大小符号分治的 YOLOv8L 与 RF-DETR 互补集成检测

#### 切块方案与训练目标

与最接近的 completeOMR 基线相比，改动集中在检测前端，保留多阶段先检测后装配思路，替换单一检测器为双分支集成。YOLOv8L 负责方形小切块，RF-DETR 负责全宽长条，训练与推理采用同一裁剪布局。页面统一缩放到 5100×3509 像素，以边界框最长边 L 度量符号大小，大符号分支只学习 L 大于 200 像素且可见面积至少 90% 的目标，小分支只学习完全包含目标，MUSCIMA++ 上 RF-DETR 改为整页输入以容纳跨系统通栏小节线。

下图左右并置两种裁剪，左侧红色虚线为全宽长条与橙色重叠区，右侧为方形切块与重叠区，可直观看到大符号为何需要水平连续视野。左侧长条沿纵向滑动，右侧方块沿横纵滑动，底图密集手写谱显示长连线横跨多块而符头只占小块。左侧标注条高 768 像素与步长 384 像素，右侧标注块 1216×1216 像素与步长 960 像素，重叠分别为 384 像素与 256 像素。

[![原论文 Fig. 4：Crop layouts for symbol recognition: RF-DETR detects large symbols in overlapping full-width…](https://arxiv.org/html/2611.26958v1/figs/large_v_small_crop_scheme.png)](https://arxiv.org/html/2611.26958v1/figs/large_v_small_crop_scheme.png)

*论文图 4：大小符号分治裁剪示意，左侧全宽长条捕捉长连线，右侧方块捕捉小符号（原论文 Fig. 4）。*

左侧长条高 768 像素，垂直步长 384 像素，橙色带标记全页宽 384 像素重叠，红色与蓝色虚线框沿纵向滑动，保证跨块连线至少完整出现于一条。右侧方块为 1216×1216 像素，步长 960 像素，重叠 256 像素，蓝色与绿色虚线框沿横纵滑动，保证小符号高分辨率。底图显示长连线横跨多块而符头只占小块，验证分治必要性。

#### 合并与碎片过滤

合并分三步，先对 RF-DETR 保留置信度至少 0.2 的框并在各分支内做交并比 0.5 的按类非极大值抑制。再删方形块边缘碎片，当 YOLOv8L 框距块内边缘 128 像素以内，且 80% 以上面积落入同类 RF-DETR 大框，RF-DETR 框 L 大于 400 像素而小框自身至多为其 80% 面积时丢弃。最后对双分支框一起再做一次同阈值抑制，得到页级节点送入装配，2 分支均从 COCO 预训练出发。

### 候选超边注意力与层级消息传递的句法连接预测

#### 候选生成与初值编码

句法连接预测输入为页级类别与边界框，先估计无向候选是否相连再判方向。候选生成对每个符号取框间最小欧氏距离最近的 64 个邻居，重叠或相接距离为零，若任一端选中对方则无序对进入候选集，记包含符号的候选为集合。视觉编码对两框二值掩膜做 5 块卷积加全局平均池化得视觉向量与连接置信对数几率，交换端点取平均以保证对称，几何与类别编码覆盖框几何、对称对几何与有向关联几何。

下图分四块展示上述流程，A 为 0 细胞与 1 细胞示意，B 为初值编码，C 为多头注意力上下文，D 为消息传递张量图。A 左把符头与连线标为两端，红色箭头为候选，A 右把框几何与类别嵌入送入共享编码器，B 把掩膜与几何拼接送入候选编码器，可对照公式阅读数据走向。

[![原论文 Fig. 5：Syntax-link prediction through symbol–candidate incidences.](https://arxiv.org/html/2611.26958v1/icde2027/figures/Figure_5_Syntax_Link_Encoding.drawio.png)](https://arxiv.org/html/2611.26958v1/icde2027/figures/Figure_5_Syntax_Link_Encoding.drawio.png)

*论文图 5：句法连接拓扑预测四面板，从初值编码到超边注意力与消息传递回路（原论文 Fig. 5）。*

A 左把符头标为 i，连线标为 j，红色箭头为候选，A 右把框几何与类别嵌入送入共享编码器得初值符号表示。B 把双通道掩膜经 CNN 得视觉嵌入与置信，与组合嵌入及对几何拼接送入候选编码器得初值候选表示。C 把同一连线的多候选超边经多头注意力聚合成上下文，D 用圆圈与箭头标出符号、候选与上下文 3 类嵌入的双向回路，与两轮更新对应。

初始状态把类别语义与几何位置分别送入共享编码器，符号侧融合类别嵌入与框几何，候选侧融合视觉特征、置信对数几率、对几何与组合类别嵌入，为后续竞争提供起点。其中类别嵌入为学习向量，框几何含角点中心尺寸特征，视觉向量来自掩膜卷积，组合函数拼接和与绝对差，编码器为仿射加 GELU 加层归一化。

\[\begin{aligned} \displaystyle\mathbf{h}_{i}^{(0)} \displaystyle=f_{n}\Bigl(\bigl[\mathbf{a}_{i}\|\mathbf{g}_{i}\bigr]\Bigr), \\ \displaystyle\mathbf{z}_{e}^{(0)} \displaystyle=f_{e}\Bigl(\bigl[\mathbf{v}_{e}\|b_{e}\|\mathbf{r}_{e}\|S(\mathbf{a}_{i},\mathbf{a}_{j})\bigr]\Bigr). \end{aligned}\]

该形式直觉是让类别告诉模型什么符号可以连，几何告诉是否值得连，视觉告诉局部笔迹是否真连。类别缺失时模型退化为纯几何启发式，易把邻近但无关的符头符干误连。对称组合保证交换端点表示不变，避免方向偏置提前泄漏。输出的初值符号与候选表示分别作为 0 细胞与 1 细胞起点，进入超边注意力形成上下文。

#### 超边竞争与层级更新

为让共享同一符号的候选直接竞争，模型把每个关联看作候选超边，拼接两端符号状态、候选状态与有向关联几何，经多层感知机得到令牌。通道权重计算目标是在同一符号下比较所有关联候选的相对重要性，其中令牌为当前步表示，打分向量为通道学习向量，分母对同一符号全部候选求和。

\[\alpha_{i,e,k}^{(t)}=\frac{\exp(\mathbf{w}_{k}^{\top}\boldsymbol{\tau}_{i,e}^{(t)})}{\sum_{e^{\prime}\in\mathcal{I}_{i}}\exp(\mathbf{w}_{k}^{\top}\boldsymbol{\tau}_{i,e^{\prime}}^{(t)})}.\]

Softmax 直觉是同一符头通常只连一根符干，同一连线虽可连多符头但仍需权衡，权重让更可信的候选主导上下文。若某候选得分远高，其权重趋近 1 而其余趋近 0，上下文被赢者占据。若所有候选得分相近，上下文为平均，保留不确定性。权重随后加权投影令牌聚合成符号上下文，驱动符号与候选状态更新。

上下文聚合目标是把竞争结果写回每个符号，形成考虑全部关联候选的表示。其中权重为上式结果，投影为通道仿射变换，拼接后经投影得到符号上下文，论文取通道数 K 为 4。该表示综合多候选信息，既保留赢者主导，又保留多关系模式，为层级更新提供输入。

\[\mathbf{c}_{i}^{(t)}=f_{c}\!\left(\mathop{\big\|}_{k=1}^{K}\sum_{e\in\mathcal{I}_{i}}\alpha_{i,e,k}^{(t)}V_{k}\boldsymbol{\tau}_{i,e}^{(t)}\right),\]

多通道允许同一符号同时维持多种关系模式，例如一通道关注符头符干纵向对齐，另一通道关注连线端点横向跨度。极端下若某符号孤立无候选，求和为空，上下文退化为零向量，更新仅靠自身。若候选极多，加权平均防止梯度被数量淹没。得到的上下文与符号自身拼接后更新符号，再与端点上下文一起更新候选。

层级更新在 0 细胞符号与 1 细胞候选之间往返传递，符号先吸纳上下文，候选再吸纳两端新符号与上下文。其中 LN 为层归一化，更新函数为多层感知机，对称组合保证端点可交换，拼接输入保留原始对几何以防漂移，残差连接保留初值证据。

\[\begin{aligned} \displaystyle\mathbf{h}_{i}^{(t+1)} \displaystyle=\operatorname{LN}\!\Bigl(\mathbf{h}_{i}^{(t)}+f_{h}\bigl([\mathbf{h}_{i}^{(t)}\|\mathbf{c}_{i}^{(t)}]\bigr)\Bigr), \\ \displaystyle\mathbf{u}_{e}^{(t+1)} \displaystyle=\Bigl[\mathbf{z}_{e}^{(t)}\|S(\mathbf{h}_{i}^{(t+1)},\mathbf{h}_{j}^{(t+1)})\|S(\mathbf{c}_{i}^{(t)},\mathbf{c}_{j}^{(t)})\|\mathbf{r}_{e}\Bigr], \\ \displaystyle\mathbf{z}_{e}^{(t+1)} \displaystyle=\operatorname{LN}\!\Bigl(\mathbf{z}_{e}^{(t)}+f_{z}\bigl(\mathbf{u}_{e}^{(t+1)}\bigr)\Bigr). \end{aligned}\]

残差加层归一化保证两轮更新不冲掉初值视觉证据，符号更新只依赖自身与上下文，候选更新同时看到两端符号与两端上下文，因而长程依赖经共享符号间接交换。例如多符头争一条连线时，连线上下文先被竞争塑造，再回传修正每个候选的表示。两轮后得到最终候选表示，与初值一起决定连接概率。

最终打分目标是把视觉基线与拓扑修正相加得到可阈值化的连接对数几率。其中最终对数几率为三项和，视觉置信来自卷积，基线项编码初值，拓扑项编码两轮后表示，Sigmoid 给出连接概率，基线项与视觉项共同构成无上下文时的独立判断。

\[\displaystyle s_{e} \displaystyle=b_{e}+f_{\rm base}(\mathbf{z}_{e}^{(0)})+f_{\rm topo}(\mathbf{z}_{e}^{(2)}),\qquad p_{e}=\sigma(s_{e}),\]

相加形式保留视觉独立判断，拓扑项只做修正，避免消息传递淹没局部证据。当连线被截断或笔迹模糊时视觉置信偏低，但上下文一致可由拓扑项拉回。当多候选竞争激烈时拓扑项压低次优者。训练另加基线交叉熵、计数损失与排序损失，按对端类别分组约束每组连接数与正负间隔，方向由逻辑分类器另行判定，验证集上选阈值。

#### 时间组先后连接与语义转换

时间组与先后连接另用直方图梯度提升分类器处理，因申克符干与梁表层级而非时值，无法从时值推导。时间组候选为水平相距至多 4 倍中位符头宽的符头对，特征含归一化横纵距离、页面长宽比、同干与并排相邻二元指示、之间符头计数、同列堆叠计数与之间谱号计数，加空心符头数与页符头总数。成对概率经平均连锁聚类成组，组间平均概率低于验证阈值停止，平均连锁优于连通分量。

先后连接候选为右侧同族符号，族按符头、结构符干、阿拉伯与罗马数字划分，特征含相对位置、距离名次、之间同族数、跨越梁连线数与符干方向。每符号保留超阈值最高分后继，声部分叉时用更高第二阈值决定是否接纳第二后继，双阈值均在验证页上选择，单阈值版本保留所有超阈值对，精度明显更低。

语义转换按 Algorithm 1 把图转为 JSON，先经句法边把符干先后映射到符头，按水平位置拓扑排序时间组得时间索引，再由谱线、谱号、调号与临时记号推音高。声部沿符头先后链追踪序列，首个空心符头上干归外层高音、下干归外层低音，首个被梁符头按共时高低频次定外层，余者为内声部按平均纵位置排序。深度上无干音为零，上声部比干尖高度、下声部比低度，越远越深，最后对齐高低声部最深层。

### 符号检测与句法连接在大跨度符号上取得的收益与代价

#### 评测口径与公平性

符号评测先按同类交并比一对一匹配算每类平均精度，AP50 取阈值 0.5，AP50:95 平均 0.5 到 0.95 步 0.05 十阈值，mAP 为有实例类等权均值，加权 mAP 按实例数加权。大符号子集按缩放到 5100×3509 后最长边 L 大于 400 与 800 划分，匹配时同尺寸优先，尺寸外匹配忽略，错尺寸误检仅当自身超阈值才计假阳性。比较的检测器均从 COCO 预训练直接训练，MuSViT 例外用 IMSLP 页预训练编码器加低秩适配，句法评测用有向边微平均 F1，跨页累加后再算单值。

#### 符号与句法结果

下表截取申克随机划分下加权指标与大符号加权指标，可聚焦整体与大跨度权衡。方法覆盖 Faster R-CNN、completeOMR 与 MuSViT 基线，以及 YOLO 单分支、RF-DETR 单分支与完整集成，列为全部加权与大与极大加权，便于看出互补来源。粗体为每列最高，数值为均值加样本标准差，单位为百分比。

| Method | All symbols w-mAP50 | All symbols w-mAP50:95 | Large symbols L>400 pixels w-mAP50 | Very large symbols L>800 pixels w-mAP50 |
| --- | --- | --- | --- | --- |
| Faster R-CNN + Inception-ResNet-v2 [49] | 87.13 ± 2.21 | 47.92 ± 2.60 | 55.96 ± 3.51 | 44.05 ± 3.35 |
| completeOMR [28] | 87.77 ± 1.03 | 60.62 ± 0.86 | 69.97 ± 2.61 | 54.52 ± 4.84 |
| MuSViT + Faster R-CNN [31] | 91.03 ± 1.31 | 54.02 ± 0.89 | 71.13 ± 2.20 | 52.70 ± 4.68 |
| YOLOv8L only | 92.99 ± 0.86 | 67.28 ± 1.53 | 70.17 ± 1.63 | 54.56 ± 3.72 |
| RF-DETR only | 86.66 ± 1.46 | 54.90 ± 1.11 | 83.17 ± 2.31 | 81.05 ± 4.07 |
| YOLOv8L + RF-DETR | 93.47 ± 0.81 | 67.81 ± 1.50 | 84.56 ± 1.65 | 80.58 ± 3.97 |

完整集成在全部符号加权指标上领先，大符号加权上也居首，但在极大符号个别加权列上 RF-DETR 单分支反超，YOLO 单分支在小符号整体上接近而大符号明显落后。未胜出项恰好暴露单分支偏置，YOLO 丢长程上下文，RF-DETR 丢高分辨率细节，集成以小幅整体增益换来对两类尺度的兼顾，代价是双分支推理与合并逻辑更重。

下表为 HandSchA 上有向句法边微平均 F1，比较高效装配多层感知机、completeOMR 多层感知机、逻辑回归、直方图梯度提升、成对多层感知机与 GraphSAGE，数值为 8 组随机划分均值与留出作品两轮均值，单位为百分比。论文还在 MUSCIMA++ 与 DoReMi 上做跨作品验证，趋势一致，此处聚焦申克长程关系。

| Method | Mean of eight random splits | Held-out work |
| --- | --- | --- |
| Baselines |  |  |
| Efficient NA–MLP32 [39] | 51.10 ± 3.24 | 44.67 ± 1.33 |
| Efficient NA–MLP64–512 [39] | 64.54 ± 3.04 | 60.47 ± 3.23 |
| completeOMR–MLP [28] | 51.64 ± 2.13 | 44.76 ± 3.33 |
| General-purpose models |  |  |
| Logistic regression | 39.02 ± 2.96 | 33.71 ± 0.12 |
| HGB | 76.61 ± 1.76 | 67.80 ± 1.57 |
| Pair MLP | 66.29 ± 4.05 | 59.95 ± 0.87 |
| GraphSAGE | 75.49 ± 2.34 | 69.64 ± 2.87 |
| Ours | 86.48 ± 1.82 | 85.70 ± 0.37 |

本方法随机划分 86.48% 与留出作品 85.70% 均为最高，明显高于直方图梯度提升 76.61% 与 GraphSAGE 75.49%，成对打分与孤立边模型落后更多。留出作品仅小幅下降，表明跨作品泛化尚可。计数与排序损失按对端类别分组约束连接数与正负间隔，配合超边竞争解释了在申克密集长程关系上的优势，代价是候选生成与两轮注意力带来额外计算。

### 时间组先后连接与端到端流水线的误差传递

#### 时间与先后

下表为时间组成对 F1，比较页高容差对齐规则、加词干音高线索规则、成对多层感知机、目标节点注意力、连通分量解码与平均连锁完整模型，数值为随机划分均值与留出作品结果，单位为百分比。成对 F1 把同组符头两两展开后跨页汇总，可反映聚类整体质量。

| Method | Mean of eight random splits | Held-out work |
| --- | --- | --- |
| Alignment rule, page-height tolerance | 87.79 ± 6.55 | 94.57 |
| Alignment rule, stem and pitch cues | 92.92 ± 1.61 | 93.73 |
| Pair MLP | 78.61 ± 4.16 | 92.10 ± 1.25 |
| Target-node attention | 77.03 ± 7.89 | 94.26 ± 1.18 |
| Ours, connected components | 93.44 ± 1.48 | 90.80 ± 0.00† |
| Ours | 94.98 ± 1.33 | 97.54 ± 0.00† |

本方法随机划分 94.98% 与留出作品 97.54% 均为最高，带词干音高线索的对齐规则达 92.92% 紧随其后，表明几何对齐已很强，学习模型主要在随机划分上拉开差距。连通分量解码低于平均连锁，说明阈值连通易因单条高分误连而合并，平均连锁更稳。目标注意力与成对模型反而低于规则，反映小数据下纯学习易过拟合几何噪声。

下表为先后连接有向边微平均 F1，规则为右侧最近同族，神经基线为成对打分与目标注意力，另对比单阈值解码与按符号双阈值完整模型，单位为百分比。先后边恒指向右侧，候选限定同族右侧符号，特征含位置名次与跨越结构，可检验时序推理能力。

| Method | Mean of eight random splits | Held-out work |
| --- | --- | --- |
| Nearest same-family rule | 57.01 ± 3.35 | 50.04 |
| Pair MLP | 50.32 ± 4.15 | 53.80 ± 4.42 |
| Target-node attention | 54.32 ± 3.51 | 56.85 ± 3.53 |
| Ours, single threshold | 72.20 ± 2.06 | 71.46 ± 0.51 |
| Ours | 74.70 ± 2.25 | 73.84 ± 0.48 |

本方法随机 74.70% 与留出 73.84% 明显高于规则 57.01% 与 50.04%，单阈值版本低约 2 个百分点，说明按符号选后继与分叉双阈值带来增益。成对多层感知机与目标注意力均未超规则，反映仅靠框几何难以定序，需计数与跨越梁连线等结构特征。先后整体低于句法与时间组，是流水线中最弱一环。

#### 端到端与数据规模

下表在留出作品上对比用标注符号与检测符号的关系预测，检测符号要求端点同类交并比至少 0.5 且真图相连才算对，漏检符号关联边计漏检，可度量误差传递，数值为两轮均值加样本标准差，单位为百分比。

| Task | Annotated symbols | Detected symbols |
| --- | --- | --- |
| Syntax links (directed-edge F1) | 85.70 ± 0.37 | 80.79 ± 0.41 |
| Time groups (pair F1) | 97.54 ± 0.00 | 95.04 ± 0.18 |
| Precedence links (directed-edge F1) | 73.84 ± 0.48 | 71.38 ± 0.64 |

句法从 85.70% 降至 80.79%，时间组从 97.54% 降至 95.04%，先后从 73.84% 降至 71.38%，保留大部分精度，且检测符号下仍高于用标注符号的全部基线，表明误差传递可控。时间组最稳，句法对漏检最敏感，因漏一符号即漏其全部关联边，端到端仍可用但需优先提升检测召回。

下图展示训练页从 25% 增至 100% 时四任务的变化，横轴为训练页数，点为 3 组随机划分均值，竖线为样本标准差。符号面板实线为全部虚线为大符号，水平线为与数据量无关的规则，句法、时间组与先后面板各含本方法与基线曲线，可判断数据瓶颈所在。

[![原论文 Fig. 6：Effect of training-data size on the four tasks.](https://arxiv.org/html/2611.26958v1/training_data_size.svg)](https://arxiv.org/html/2611.26958v1/training_data_size.svg)

*论文图 7：训练页规模对四任务的影响曲线，符号仍上行而时间组与先后趋于平台（原论文 Fig. 6）。*

符号面板中本方法在各规模均居首，半量时大符号加权已超基线全量，曲线至全量仍上行。句法随数据稳增，本方法全程领先。时间组与先后在 1/4 数据已近平台，规则水平线在时间组高位而在先后低位，说明时间组几何规则强而先后必须学习，符号识别是主要数据瓶颈，需继续扩展标注。

### 小规模专家标注下的适用边界与复现选型建议

结论成立前提是小规模专家手写纯申克图，47 页、3 位分析师、12 部作品，随机划分页数有限，留出评估仅覆盖 Rachmaninov The Bells 一部作品。符号识别至全量仍上行，说明未达饱和，印刷谱与混合记谱尚未评测，跨分析师风格泛化仍待检验。未胜出项包括极大符号个别加权列 RF-DETR 单分支更高，MUSCIMA++ 上通栏小节线需改整页输入，completeOMR 在该子集极大未加权列更高，表明长条高度仍是超参折中。

复现需区分三件事，论文给出仓库链接并说明含标注文档与转换说明，本次核查显示链接经第三方可达，但作者资源归属未单独确认，权重与数据可下载状态以仓库实际页为准。训练需按子集分别划分，检测双分支裁剪与合并阈值需严格复刻，句法阈值需在验证页上按微平均 F1 优选。计算硬件与推理实时率、延迟与显存原文未披露，复现第一步建议先跑检测集成再调装配阈值。

工程选型上，若任务含跨页连线、拉长梁与密集手写，且能接受双分支成本，该分治集成值得尝试。若仅有小符号常规谱面，单 YOLO 已接近整体最优，无需引入长条分支。若需还原同时性与声部顺序，不能只预测句法，需补时间组容差与先后双阈值验证，并检查谱线检测与调号识别对音高推导的影响，对照排版时重点看长连线端点、梁跨度与罗马数字对齐是否与手写一致。

## ⚙️ 关键实现与复现规格

- **训练与评测数据**：HandSchA 47 页 3 位专家 12 部作品 30,780 符号 128 类，句法 36 页 22,138 条，时间组 37 页 2,309 组，先后 44 页 11,038 条，8 组随机划分与留出 Rachmaninov The Bells 划分，另用 MUSCIMA++ 与 DoReMi 跨作品划分评测
- **算力与训练耗时**：原文未披露
- **核心超参数与配置**：YOLOv8L 用 1216 切块步长 960，RF-DETR 用全宽高 768 步长 384，句法类嵌入 32 隐宽 128 两轮 4 通道，损失权重为 0.25 与 0.15 与 0.05 与 0.25 与 0.2，时间组与先后用直方图梯度提升分别 300 与 400 轮
- **推理速度与部署开销**：原文未披露
- **开源产物与协议状态**：论文给出 github 仓库链接并说明含标注文档与转换说明，本次核查显示链接经第三方可达，作者资源归属未单独确认，权重与数据可下载状态以仓库实际页为准
- **附录与补充材料要点**：正文给出检测与装配训练细节与几何特征表及图到 JSON 算法步骤，未单独披露附录，失效案例见极大符号单分支反超与高跨系统小节线需整页输入

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.26958v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：拓扑组装在HandSchA随机划分上以86.48%有向边F1大幅超越HGB的76.61%与GraphSAGE的75.49%，并在MUSCIMA++与DoReMi五列全部领先。

- 核心优势：互补裁剪集成全符号w-mAP50达93.47%超越YOLOv8L单分支92.99%与RF-DETR单分支86.66%，并含单分支与解码对照直接消融支撑尺度分工主张。

- 核心优势：首个47页30780符号128类手写申克图标注集HandSchA与语义图到排版JSON转换算法支撑端到端评测与模型辅助标注闭环。

- 主要短板：验证仅5页到7页且留一评测只用1部作品7页测试，阈值在小验证集搜索可能不稳定且排版视觉质量未做人工评价。

- 主要短板：论文未报告延迟与显存实测，双检测器推理与注意力消息传递带来额外计算且检测误差会向后传递。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
