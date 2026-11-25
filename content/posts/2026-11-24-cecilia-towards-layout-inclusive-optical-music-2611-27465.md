---
title: "Cecilia: Towards Layout-Inclusive Optical Music Recognition"
date: 2026-11-24
draft: false
tags: [光学乐谱识别, 自回归模型, 可验证奖励强化学习, 数据集]
categories: [论文速递]
description: "Cecilia 以紧凑字面树编码保留 MusicXML 的音符歌词与版式指令，并以共享视觉记忆与小节分段解码实现识别，在四个 OpenScore 基准域宏平均 OMR-NED 上从 0.2998 降至 0.2232，代价是渲染四重奏与手写谱仍落后且版式几何精度依然有限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.27465"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Cecilia 兼顾音符歌词与版式的光学乐谱识别"
paper_digest_original_title: "Cecilia: Towards Layout-Inclusive Optical Music Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.27465v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.27465v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.27465v1.pdf"
paper_digest_primary_task: "光学乐谱识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.optical-music-recognition","label":"光学乐谱识别"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.verifiable-reward-rl","label":"可验证奖励强化学习"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Cecilia 以紧凑字面树编码保留 MusicXML 的音符歌词与版式指令，并以共享视觉记忆与小节分段解码实现识别，在四个 OpenScore 基准域宏平均 OMR-NED 上从 0.2998 降至 0.2232，代价是渲染四重奏与手写谱仍落后且版式几何精度依然有限。"
paper_digest_reader_sections: [{"heading":"可编辑乐谱为何要求音符歌词与版式同存","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Cecilia-OMR 以共享视觉记忆驱动元数据与小节分段","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"Cecilia 紧凑树编码保留音符歌词与版式指令","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"从预训练到 SFT 再到 GRPO 的训练与无参考装配","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"主识别与版式几何在七个固定子集上的得失","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"解码选择版式消融与奖励采样的受控诊断","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界未验证条件与复现选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Congren Dai"},{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Zhancheng Guo"},{"affiliations":["Central Conservatory of Music"],"name":"Xiaobing Li"},{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Maosong Sun"}]
paper_digest_abstract_sha256: "27a2d7fc62b03e716c2205d3da7e07ee463349c777129b71c0ea541648bbaabf"
paper_digest_sidecars: {"citation.bib":{"sha256":"3c7ad08ad91382ad013679a7f172ccba65f83fa0553cabb8002c9aa5ed2d4120","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27465/citation.bib"},"citation.json":{"sha256":"76f5fceed1c2d33cea329d35aaea896c70bb0741841212ce8f7ffcacd31bcbef","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27465/citation.json"},"citation.ris":{"sha256":"d7a272ecc4a703fa7304a298cf1dd34f0cf177b684e5b47675b617873cc44ba2","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27465/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"684885a952c0ee089e959c6c7cd2568fc19b2845b7185b16ffef3c7a20c53dd1","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27465/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "26ee40825c70422d69564dd020bd5e5d7ff54e7e4837077896bc3b0030c8614a"
paper_digest_api_reader_plan_sha256: "c409f50668f2e1f214097677b9ff1ee15bd1b1dc570c6ebb6c969eeb817c54c8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d4722f7284e66925feafefb35c4da42fdf9ee35e79e26d86198028c1c0e09e76"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "d02b65d2c6a0fe5e63804542021c9a12311e026fe29d9d81ae5dc5a3460f17fd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "eca27d7123e4867b849f07b6b4dd0758e073a505baefa8e2118e1ce2375833b1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e43374d1d528283edebe2181ca1ce99f9027a171f4b72efa35eb0cd10cb6439a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Cecilia 兼顾音符歌词与版式的光学乐谱识别

> 英文题目：*[Cecilia: Towards Layout-Inclusive Optical Music Recognition](https://arxiv.org/abs/2611.27465v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [光学乐谱识别](/audio-paper-digest-blog/papers/?concept=task.optical-music-recognition)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement) → [可验证奖励强化学习](/audio-paper-digest-blog/papers/?concept=method.verifiable-reward-rl)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.6/10 | 技术严谨 7.1/10 | 实验充分 7.4/10 | 清晰度 6.8/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 6.8/10 | 工程/实践 5.2/10


## 👥 作者与机构

- Congren Dai：Central Conservatory of Music；Tsinghua University
- Zhancheng Guo：Central Conservatory of Music；Tsinghua University
- Xiaobing Li：Central Conservatory of Music
- Maosong Sun：Central Conservatory of Music；Tsinghua University

## 📌 核心摘要

**问题与瓶颈：** 可编辑乐谱既要记录音高、节奏与声部等演奏内容，也要记录歌词与音符的挂接、小节成系统与分页等版式指令，输入是整页乐谱图像，输出是能重新渲染的符号文档。已有识别目标常丢掉一部分信息，基于纯文本的 ABC 记谱依赖渲染程序补齐缺省属性，Legato 1 把文本注解替换为占位符，Legato 2 的识别数据直接去掉歌词，而直接预测 MusicXML 会把元素名与属性名重复写很多遍。复调、长文本与分页组织叠加时序列迅速变长，识别与重建可读版面的难度同时上升。

**核心思路与方法架构：** 与最接近的直接预测完整 MusicXML 相比，增量在于用固定编码压缩重复树结构并保留可回退的通用分支，再用小节边界分段把长谱拆成可解码的短序列。沿一张乐谱图像说明流程，图像经填充至 1024 × 1024 后由视觉编码器得到共享视觉记忆，尺寸为 4096 × 2048，同一套编码器与自回归解码器分两次承担元数据单元与音乐单元，种类嵌入与段索引嵌入叠加到词嵌入上，计数头预测 1 至 128 段，每段含首尾符且不超过 8192 个词元。解码时每段从起始符出发复用视觉记忆并使用独立文本缓存，语法前缀解码只保留符合字面树语法的延续，再按原生可编译为 MusicXML 的可用性在候选间二选一，恢复阶段补齐蕴含声明并按段序组装。固定编码替代重复标签名，歌词仍作为音符子节点保留原文与对齐属性，水平位置存为差值并在声部与系统边界重置，这种机制直击标记冗余与长序列难解码的根源。训练分预训练、监督微调与组相对策略优化三段，推理为整页离线解码。

**关键实验与核心代价：** 主基准沿用 Legato 系列的划分，渲染与相机拍摄的 OpenScore 弦乐四重奏各 252 页，渲染与相机拍摄的 OpenScore 艺术歌曲各 64 页，另加保留声乐谱表与歌词的扩展各 64 页，手写 CVC-MUSCIMA 按作品留出 100 页，OMR-NED（归一化编辑距离，越低越好 ↓）按域汇总后相除。同一分词器下 1000 个配对完整乐谱的 MusicXML 与 Cecilia 平均长度比值为 27.73。四域宏观 OMR-NED 从 Legato 2 的 0.2998 降至 Cecilia-OMR 的 0.2232，其中相机四重奏从 0.3160 降至 0.2307，渲染艺术歌曲从 0.2760 降至 0.1839，相机艺术歌曲从 0.4360 降至 0.2270，而渲染四重奏 Legato 2 以 0.1710 领先 Cecilia-OMR 的 0.2513。带歌词扩展上渲染页 Cecilia-OMR 以 0.2048 优于直接预测 MusicXML 的 GPT-6 Astra 的 0.2430，相机页 Astra 以 0.2745 领先 Cecilia-OMR 的 0.2862，手写页 Astra 以 0.3297 领先 Cecilia-OMR 的 0.5257。版式上在渲染 OpenScore 弦乐四重奏条件下系统切分 F1（越高越好 ↑）Cecilia-OMR 为 0.6829，高于直接预测 MusicXML 的 GPT-6 Astra 的 0.4404，同期小节交并比为 0.2340 对 0.0193。歌词字符层面 Cecilia-OMR 在渲染页为 21.03%，相机页为 50.61%，说明 sung 词转写与总体记谱精度是两个问题。消融显示候选选择使宏观从 0.2591 降至 0.2232，监督适配使宏观从 0.3673 降至 0.2314。代价集中在手写差距、版式几何仍不精确与多候选开销，原文未提供可核对的延迟数值。

**适用边界与深读导览：** 结论成立于印刷谱为主、按作品划分训练测试、渲染与相机页共用同一 MuseScore 渲染器比较最终版式的条件下，相机版式恢复本身可能欠定，手写泛化与相机页歌词定位仍弱，不宜直接推广到任意手写风格或终端实时部署。若想深究字面树往返验证、网络维度与计数头设计、监督损失与奖励权重的取舍以及版式指标的匹配规则，可查阅下文方法概述与架构、实验结果与细节详述对应小节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 可编辑乐谱为何要求音符歌词与版式同存

可编辑乐谱识别的输入是单页乐谱图像，输出是可渲染与编辑的乐谱文档。文档需同时包含 3 类信息：音高、时值、声部与小节线等音乐事件，歌词音节与音符的附着及延音关系，标题、作曲者、版权等元数据与决定阅读方式的版式指令，例如小节宽度，换系与换页位置，谱表间距。只有 3 类信息同存，重建页面才能既可发声又可供人阅读。

已有路线在目标选择上各有取舍。ABC (基于文本的乐谱表示) 能表达事件、歌词与部分指令，但渲染时需补充默认源属性。Legato 1 (大规模可泛化印刷谱识别) 以占位符替代文本注释，Legato 2 (跨场景识别扩展) 在识别数据中去掉歌词。MusicXML (可扩展乐谱交换格式) 字段显式完整，符干方向、符头形状、小节宽度、new-system 与 new-page 等均可记录，但直接预测会反复重复元素与属性名，序列随复调、歌词与页面组织迅速变长。

Cecilia 要解决的核心矛盾是在不丢失内容与版式的前提下缩短序列，并让长谱可被分段预测。论文以 1,000 个配对完整乐谱在同一分词器下比较长度，以 OpenScore (开放乐谱配对数据集) 4 个基准域的宏平均 OMR-NED (光学乐谱识别归一化编辑距离) 检验识别，并以相同渲染器下的几何比较检验版式是否真正可用。

### Cecilia-OMR 以共享视觉记忆驱动元数据与小节分段

与最近的 Legato 系列相比，Cecilia-OMR (约 2,000,000,000 参数的识别模型) 保留图像到序列的总体形态，替换的是识别目标与输出组织。目标从 ABC 或占位化文本改为保留 MusicXML 树的 Cecilia 字面树，包含歌词附着与版式属性。组织上引入共享视觉记忆，元数据与音乐两类识别单元，以及按小节边界切分的分段解码与计数头，使长谱不必一次生成超长序列。

#### 单页图像到共享视觉记忆

以一个目标页为例，输入为 RGB (红绿蓝 3 通道) 图像，经保持宽高比填充至 1024 × 1024 后进入 ViT (视觉 Transformer) 编码器。该编码器为 12 块，宽度 768，补丁 16，补丁特征经 768 → 2048 → 2048 的投影映射至解码器宽度，并叠加二维位置嵌入以保留空间位置。全部补丁网格被保留，得到对该页的共享视觉记忆，供后续所有分段复用。

该记忆的形状决定了交叉注意的键值规模与后续所有分段可复用的证据粒度。记输入图像为 I，编码器与投影的输出为 MI，下式给出论文披露的固定形状，它对应 1024 图像按 16 像素补丁展开后的全部网格点数与解码器宽度，原文未披露更细的填充掩码细节。

\[M_{I}\in\mathbb{R}^{4096\times 2048}.\]

该式的物理直觉是把整页压缩为密集均匀的视觉证据表，4096 行对应全部图像块，2048 列对应解码器宽度。若图像填充或补丁划分改变，行数会随之变化，但本文固定为该取值。记忆本身不做决策，它作为交叉注意的键值被每个分段反复查询，使长谱分段仍能看到同一页的完整空间上下文。

#### 计数头与分段自回归

解码器为 28 块，宽度 2048，16 头，头宽 128，前馈宽度 8192，词表 8192 且嵌入与输出共享。每个待生成单元由种类嵌入区分元数据与音乐，由分段嵌入区分段索引。计数头接收有效视觉记忆的掩码均值、种类嵌入与零号分段嵌入，预测该单元所需的分段数，范围为 1 至 128，每段预算含 BOS (序列起始符) 与 EOS (序列结束符) 在内为 8,192 个词元。

给定种类 k 与图像 I，模型先预测段数 n_k，再对每段逐词元自回归生成。下式给出该单元级生成概率的分解，其中 Y_k,j 为第 j 段的词元序列，T_k,j 为其长度，y_k,j,<t 为同段历史，MI 为共享视觉记忆，k 与 j 通过嵌入进入每步输入并控制装配顺序。

\[\begin{split}p(Y_{k}\mid I,k)={}&p(n_{k}\mid I,k)\\ &\prod_{j=0}^{n_{k}-1}\prod_{t=1}^{T_{k,j}}p(y_{k,j,t}\mid y_{k,j,<t},M_{I},k,j).\end{split}\]

乘积形式的统计直觉是段数与内容联合建模但段间文本解耦：段数项决定输出范围，每段词元项只依赖同段历史与共享视觉记忆，而不直接依赖他段已生成文本。若计数偏大，会增加对同一记忆的解码序列并改变装配顺序；若偏小，则会丢失尾部小节。独立自注意力缓存使每段从 BOS 重新起步，边界状态 S 为每段首小节补充解释时值所需的 divisions (时值划分值)，装配时移除该辅助载体并按序拼接。

阅读架构时先沿左侧目标页经填充编码投影到共享视觉记忆的主路径，再看上方计数头如何由掩码均值与嵌入给出段数，最后看下方种类与分段嵌入如何进入解码器并控制右侧多段的生成与装配顺序。这种先定范围再分段生成的顺序是理解长谱为何不必一次输出的关键。

[![原论文 Figure 2：Cecilia-OMR shares visual memory across structured output segments.](https://arxiv.org/html/2611.27465v1/figure2_architecture.svg)](https://arxiv.org/html/2611.27465v1/figure2_architecture.svg)

*论文图 2：共享视觉记忆与分段解码架构，从编码器到计数头再到装配的完整路径（原论文 Figure 2）。*

面板 (a) 左侧目标页经填充编码与投影得到网格记忆，上方掩码均值与种类分段嵌入相加后进入计数头，给出 n_k 与索引 j。中间共享自回归解码器含因果自注意与视觉交叉注意，下方词元、种类、分段三者相加作为输入。右侧元数据与音乐各有多段 BOS 到 EOS 序列，经编译装配与结构恢复得到 MusicXML。面板 (c) 强调按小节边界切分，每段首部携带符号边界状态 S，独立生成后在装配时移除。

### Cecilia 紧凑树编码保留音符歌词与版式指令

Cecilia (图像到版式包容性乐谱标注的上下文增强转换) 是保留规范 MusicXML 树的紧凑字面树表示。它为常见元素与属性分配固定短码，容器覆盖小节、音符、方向与歌词，字面值内联出现，不常见结构以通用括号形式回退。模型不预测每谱字典或重复记录表，字符串保留在局部树上下文中，版本头与共享版式状态 l0 共同支撑编解码。

#### 规范化与编码规则

规范化移除来源、关联与部分 MIDI 播放字段，保留音符、歌词、标题、版权文本、乐器名、速度、版式与 print-object 为 no 的元素，统一乐器标识，归一化属性顺序、换行与空白。水平音符位置记录为同谱表前一音符的差值，精度为 6 位小数，在分部与系边界重置状态。垂直位置由记录的谱表基线加全音级步进推导，仅在推导值与原值完全一致时省略，否则显式保留，缺失坐标以标志保留。

编码器 E 与解码器 D 在保留规范树 C (X) 上互逆，X 为原始 MusicXML 文档。下式表述编解码目标：对坐标可被版式编码精确表示的容许树，重建必须逐项还原，包括元素名、属性键值、文本、尾文本与有序子节点。

\[D(E(C(X)))=C(X).\]

该式的物理直觉是以树保真换取序列压缩：固定短码替代重复标签，差值与共享状态替代绝对坐标，但音乐值、文本与版式仍在目标中。若树含通用分支未覆盖的罕见结构，通用形式以相同有序遍历保留内容而不丢弃。若坐标不能被精确表示，该等式不再承诺成立，重建后需经渲染器特定的导出变换，附录以 1,095,973 个水平位置属性验证了本语料的精确往返。

#### 长度与保真对照

长度比较在同一冻结 Cecilia-OMR 分词器下进行，样本为 1,000 个成功转换的配对完整乐谱，其中 895 个为 Lieder (艺术歌曲)，105 个为四重奏。三者必须均转换成功才进入配对样本，训练分段引入的头与边界状态不计入完整谱长度。下表给出均值、总体标准差与中位数，单位均为词元数。

| Format | Mean | Std. dev. | Median |
| --- | --- | --- | --- |
| ABC | 11,175.86 | 20,413.60 | 5,626.5 |
| Cecilia | 12,702.02 | 30,126.33 | 4,702.0 |
| MusicXML | 352,228.32 | 681,560.15 | 156,222.0 |

均值上 Cecilia 为 12,702.02，约为 ABC 11,175.86 的 1.14 倍，中位数反而更低，分布右尾仍长。MusicXML 均值为 352,228.32，约为 Cecilia 的 27.73 倍，标准差与中位数同样高出一个量级。结论成立的前提是同一 8,192 词表字节级 BPE (字节对编码) 分词器，若为 XML 或 ABC 单独训练分词器，比值会变化。附录 1,000 谱全部精确往返，零例外，支撑紧凑性并未以丢字段换取。

对照三格式差异时先看版式是否保留每系小节数，再看元数据与音乐内容的字段完整性，最后看对数词元轴上的长度分布。这种从可读页面到符号字段再到序列代价的顺序，有助于理解紧凑性来自结构而非删除音乐值或版式。

[![原论文 Figure 1：Differences across three formats. (a) Layout.](https://arxiv.org/html/2611.27465v1/figure1_representation.png)](https://arxiv.org/html/2611.27465v1/figure1_representation.png)

*论文图 1：三种格式在版式保留内容表达与序列长度分布上的对照（原论文 Figure 1）。*

面板 (a) 左侧保留版式时每系小节划分与原谱一致，右侧无版式时音符被重排为更紧凑的系，歌词连写难以对齐。面板 (b) 以标题与音高歌词为例，ABC 简短但缺版式坐标，Cecilia 以短码与坐标差值保留附着，MusicXML 则展开为冗长标签。面板 (c) 横轴为 1k 至 10M 的对数词元数，纵轴为密度，3 组直方图与高斯拟合显示 MusicXML 整体右移约一个半数量级，标注均值与标准差为原始计数的均值与标准差。

### 从预训练到 SFT 再到 GRPO 的训练与无参考装配

#### 监督目标与三阶段暴露

训练序列含 3 段暴露：以 NotaGen (符号乐谱预训练语料) 约 160 万首乐曲的 Cecilia 形式做预训练，保留歌词文本及其与音符的对齐；以剩余 OpenScore 作品与 CVC-MUSCIMA (手写乐谱图像集) 做监督适应，训练与测试按乐曲划分，测试作品不进入预训练、SFT (监督微调) 与 GRPO (分组相对策略优化)；再以 GRPO 做策略精化，策略与冻结参考均从同一 SFT 模型初始化并使用全新优化器状态。

监督学习需同时恢复每段内容与输出单元的范围，优化对象含视觉编码器、投影、解码器、条件嵌入与计数头。下式为监督目标，其中 B 为单元数，V_b 为非填充目标位置，n_b 为目标段数，C 为固定词元归一子，lambda_c 为计数权重，CE (交叉熵) 度量词元与段数分类误差。

\[\mathcal{L}_{\mathrm{sup}}=\frac{1}{BC}\sum_{b,t\in\mathcal{V}_{b}}\!\mathrm{CE}(p_{b,t},y_{b,t})+\frac{\lambda_{c}}{B}\sum_{b=1}^{B}\mathrm{CE}(q_{b},n_{b}-1),\]

该式的统计直觉是词元与段数联合监督：第一项以固定归一子 C 平均所有有效词元，原文 C 为 1,295.1014，lambda_c 为 0.1，固定归一使长目标贡献更多词元项而不被截断稀释。若某单元段数预测错误，第二项直接惩罚。梯度经交叉熵回传至共享视觉记忆与解码器，计数误差与内容误差在同一目标中权衡。

#### 奖励与无参考解码装配

GRPO 每作品采样 4 个候选，每批 2 组分布于 8 个 GPU (计算卡) ，采样与回放温度均为 0.7，非视觉参数学习率为 10−7，视觉编码器为 10−8，AdamW (自适应矩估计权重解耦优化器) 参数为 0.9 与 0.95，epsilon 为 10−8，权重衰减为零，裁剪系数为 0.2，KL (相对熵) 系数为 0.01。奖励为 0.95 乘以原生记谱准确率加 0.05 乘以格式有效率，前者以 1 减去编辑数除以参考加预测记谱量，后者为完成编译并导出合法 XML 的元数据与音乐观测单元占比，组内减均值除以标准差得优势。

推理时语法前缀解码逐词检查字面树读取器状态，包括字符串编码、数值语法与定界符匹配，选择最高分的合法延续，贪心 EOS 即使过早也保留为不完整候选。无约束与语法前缀候选均编译为 MusicXML，以原生 XML 可用性选择其一，不查阅参考谱。随后确定性恢复保留完整解析子树并丢弃畸形尾部，按标识重组元数据，以有效边界载体或相邻同声部兼容 divisions 恢复音乐，时值推断仅在约束一致时接受，缺失内容保持缺失。

### 主识别与版式几何在七个固定子集上的得失

#### 评测口径与公平性核查

评测沿用 Legato 1 与 Legato 2 的划分：渲染与相机四重奏各 252 个页面，渲染与相机 Lieder 各 64 个页面，渲染指符号谱渲染图，相机指源扫描裁图。原 Lieder 只保留钢琴并遮蔽声乐谱，新增的带歌词条件各 64 个页面保留声乐谱与歌词。手写 CVC-MUSCIMA 以乐曲留出 2 部共 100 个页面测试。OpenScore 测试作品不进入训练，SFT 以剩余作品训练。基线含全尺寸 Legato 1 实测、Legato 2 4 个已发表 OMR-NED，以及经同一工具链转换渲染的 API 服务名模型。

域级 OMR-NED 汇聚编辑数与记谱量，4 条件宏平均为各域分数的等权均值。下式给出域 d 的定义，其中 Ei 为记谱编辑数，Gi 与 Pi 分别为参考与预测记谱量，求和跨域内所有页面，失败页按空预测计入，成功页的可用指标保持不变。

\[\mathrm{OMR\text{-}NED}_{d}=\frac{\sum_{i\in d}E_{i}}{\sum_{i\in d}(G_{i}+P_{i})}.\]

该式的统计直觉是长谱权重更大：分子分母先在域内求和再相除，记谱量大的页面对分数影响更大。若某页预测为空，分子计参考记谱量，分母仅计参考量。宏平均再对 4 个 OpenScore 基准域取均值，避免页数多的四重奏主导结论。TEDn (归一化树编辑距离) 则先逐页除以参考删除代价再平均，两者加权方式不同，因而可能出现整体占比与单页平均背离。

#### 主识别结果

主结果比较固定 7 个子集的 OMR-NED，越低越好，短横为不可用结果。Cecilia-OMR 为 SFT 后接 GRPO 的选中模型，Legato 2 仅覆盖 4 个官方条件。下表保留全部基线与实际可运行策略，同一原表的完整呈现。

| Model | Rendered String Quartets N=252 | Rendered Lieder N=64 | Rendered Lieder with lyrics N=64 | Camera String Quartets N=252 | Camera Lieder N=64 | Camera Lieder with lyrics N=64 | Handwritten CVC-MUSCIMA N=100 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 0.4468 | 0.3195 | 0.4486 | 0.4352 | 0.3548 | 0.4752 | 0.4061 |
| GPT-6 Astra (XML) | 0.4131 | 0.3233 | 0.2430 | 0.4650 | 0.3698 | 0.2745 | 0.3297 |
| Claude Fable 5.1 | 0.8210 | 0.7666 | 0.6543 | 0.8453 | 0.8195 | 0.6983 | 0.7991 |
| Gemini 4 Argon | 0.7265 | 0.6176 | 0.5613 | 0.7039 | 0.6238 | 0.5808 | 0.5512 |
| Legato 1 | 0.3307 | 0.3554 | 0.4628 | 0.5835 | 0.5046 | 0.5820 | 0.8937 |
| Legato 2 | 0.1710 | 0.2760 | — | 0.3160 | 0.4360 | — | — |
| Cecilia-OMR (Ours) | 0.2513 | 0.1839 | 0.2048 | 0.2307 | 0.2270 | 0.2862 | 0.5257 |

4 条件宏平均从 0.2998 降至 0.2232，提升位于相机四重奏从 0.3160 降至 0.2307，渲染 Lieder 从 0.2760 降至 0.1839，相机 Lieder 从 0.4360 降至 0.2270。渲染四重奏 Legato 2 为 0.1710，Cecilia-OMR 为 0.2513，未能胜出。带歌词渲染条件下 Cecilia-OMR 以 0.2048 优于直接 XML 的 0.2430，相机条件下以 0.2862 略逊于 0.2745。手写集直接 XML 以 0.3297 领先，Cecilia-OMR 为 0.5257。歌词字符 CER (字符错误率) 在渲染为 21.03% ，相机为 50.61% ，与基于 ABC 转换的 CER 口径不同。

从渲染页直观核对版式差异时，先看输入页的系划分与声部堆叠，再比较三列重建页是否跟随相同的换系位置与小节分组。该页的对应 OMR-NED 分别为 0.0188，0.4072 与 0.0682，数值低并不自动保证系划分完全一致，需结合几何指标判断。

[![原论文 Figure 3：Score rendering makes layout differences visible.](https://arxiv.org/html/2611.27465v1/figure4_qualitative.png)](https://arxiv.org/html/2611.27465v1/figure4_qualitative.png)

*论文图 3：同一输入页在三种模型重建渲染下的系划分与声部呈现差异（原论文 Figure 3）。*

四列从左至右为输入、Cecilia-OMR、Legato 1 与直接 XML 的第一页渲染。每列上下为同一页的不同系，Cecilia-OMR 的系分组与输入最为接近，Legato 1 与直接 XML 在中部引入更早的换系。音符密度高的四重奏页面对换系敏感，单页分数差异会被系统断裂与小节错位放大，渲染比较因此补充了纯符号距离无法呈现的阅读层面信息。

#### 版式几何与互补误差

版式几何以相同 MuseScore 3.2.3 渲染器与字体比较预测与参考 XML 的最终页面，相机页的版式恢复本身欠定，比较的是最终渲染页而非与照片的配准。断裂 F1 (调和平均) 比较逻辑小节对齐后的系页边界，重叠 IoU (交并比) 以匹配和除以 max (nG，nP)，位置 NPE (归一化位置误差) 以中心位移除以页面对角线并截断至 1，未匹配对象记零重叠与最大误差。下表固定 48 个页面，音乐与歌词相同，仅版式指令不同。

| Metric | Predicted layout | Automatic layout |
| --- | --- | --- |
| System-break F1 ↑ | 0.6917 | 0.2063 |
| Page-break F1 ↑ | 0.5417 | 0.6667 |
| Measure IoU ↑ | 0.2734 | 0.1319 |
| Staff IoU ↑ | 0.0802 | 0.1043 |
| Text IoU ↑ | 0.0263 | 0.0120 |
| Measure NPE ↓ | 0.3210 | 0.3641 |
| Staff NPE ↓ | 0.3259 | 0.3500 |
| Text NPE ↓ | 0.8271 | 0.8789 |

保留预测版式时系断裂 F1 为 0.6917，去除后降至 0.2063，小节 IoU 从 0.2734 降至 0.1319，文本 IoU 与三项 NPE 均随预测版式改善。页断裂 F1 与谱表 IoU 则自动版式更高，分别为 0.6667 对 0.5417 与 0.1043 对 0.0802，说明自动排版在分页与谱表放置上仍有启发式优势。完整几何对比中渲染四重奏系断裂 F1 为 0.6829 对 0.4404，小节 IoU 为 0.2340 对 0.0193，渲染 Lieder 小节 IoU 为 0.3829 对 0.1712，带歌词相机小节 IoU 则为 0.1737 对 0.2623，出现反转。

综合条形对比同时呈现字符、词法、行与树距离及版式重叠与位置误差，横轴以 RQ (渲染四重奏)、CQ (相机四重奏)、RL (渲染 Lieder)、CL (相机 Lieder)、RL+L 与 CL+L (带歌词) 与 CVC (手写) 划分，箭头标示优选方向。先看上排符号误差的跨系统趋势，再看中下排版式指标中两系统的相对高低，有助于区分内容恢复与空间放置的不同能力。

[![原论文 Figure 4：Recognition and layout measure complementary aspects of score reconstruction.](https://arxiv.org/html/2611.27465v1/figure3_metrics.svg)](https://arxiv.org/html/2611.27465v1/figure3_metrics.svg)

*论文图 4：六套系统在字符词法行树距离及版式重叠误差上的互补对比（原论文 Figure 4）。*

上排 CER、SER (符号错误率)、LER (行错误率) 与 TEDn 均为百分比，可超 100。下排仅比较 Cecilia-OMR 与直接 XML 的版式几何。Cecilia 全内容 TEDn 在渲染为 24.32% ，相机为 28.08% ，优于直接 XML 的 39.45% 与 37.36% ，但带歌词条件下直接 XML 的 TEDn 更低，而渲染 OMR-NED 仍由 Cecilia 更优。两种加权与是否含歌词版式字段的差异解释了背离：OMR-NED 按记谱量汇聚，TEDn 按页平均且树表示排除歌词版式。

### 解码选择版式消融与奖励采样的受控诊断

#### 无约束与语法前缀的选择效应

两策略使用相同权重、有序图像窗口、参考仅用于评分与相同确定性恢复，唯一差别为是否以原生 XML 可用性在无约束与语法前缀候选间选择。OpenScore 取四域比值的宏平均，带歌词取两域平均，手写取单语料比值。下表保留三行评估的完整数字。

| Evaluation | Unconstrained | XML selection |
| --- | --- | --- |
| OpenScore | 0.2591 | 0.2232 |
| Lieder with lyrics | 0.3432 | 0.2455 |
| CVC-MUSCIMA | 0.5651 | 0.5257 |

OpenScore 从 0.2591 降至 0.2232，带歌词从 0.3432 降至 0.2455，手写从 0.5651 降至 0.5257。权重、窗口与恢复共享，因而差值度量候选选择的净效应，而非模型容量的变化。选择信号完全来自编译输出能否导出合法 XML，未使用参考谱，失败页仍按空预测计入固定域。

#### 奖励设计与采样温度的探索边界

奖励变体从同一 SFT 模型出发，每组 16 个训练组，每组 4 候选，共 7 次优化更新，学习率、温度、样本与组序保持一致。Original 为 0.95M 加 0.05F，Format 将格式权重提至 0.10，Lyric 在带歌词域以 0.80M 加 0.15L 加 0.05F 训练，四重奏仍用原始奖励。每域仅 8 个页面评估，属于探索性比较而非一般性最优结论。下表给出 6 个子集的 OMR-NED。

| Subset | SFT | Original | Lyric | Format |
| --- | --- | --- | --- | --- |
| Rendered Quartets | 0.2418 | 0.2401 | 0.2657 | 0.2596 |
| Camera Quartets | 0.2753 | 0.2533 | 0.3255 | 0.3089 |
| Rendered Lieder | 0.3008 | 0.0841 | 0.2705 | 0.1263 |
| Camera Lieder | 0.2643 | 0.2600 | 0.3909 | 0.3412 |
| Rendered Lieder + lyrics | 0.1829 | 0.1880 | 0.1195 | 0.1301 |
| Camera Lieder + lyrics | 0.1871 | 0.2701 | 0.1434 | 0.1524 |

Original 在 4 个无歌词条件上最低，Lyric 在两个带歌词条件上最低，带歌词两域均值从 Original 的 0.2290 降至 Lyric 的 0.1315，Format 为 0.1412。采样在 48 个目标页上比较温度 0.3、0.7 与 1.0 及嵌套候选数 1、2 与 4，选择先偏好原生有效再取均值对数概率，温度 0.7 下四候选的双宏为 0.2696 与 0.2620。低温在各候选数下均优于 1.0，但 0.3 下两候选的带歌词误差低于四候选，说明候选增多不保证单调改进。

### 假设边界未验证条件与复现选型建议

结果成立依赖若干假设：编解码等式仅对坐标可被版式编码精确表示的容许树承诺，水平差值 6 位小数在系与分部边界重置，垂直省略仅在推导精确一致时成立；分段按作者小节边界切分，每段首小节依赖边界状态的 divisions 解释时值；版式几何依赖同一渲染器与字体，相机页的版式恢复本身欠定，比较的是最终渲染页而非与照片的配准。

未验证范围同样明确：文本词 IoU 长期低于 0.11，位置误差仍高，小节 IoU 在手写集仅 0.0556 量级，相机歌词与手写泛化差距大；奖励与采样诊断各仅 48 个页面、每条件 8 页，短精化支持探索而非一般结论；API 基线无不可变快照与完整重试计费说明，Legato 2 仅有 4 个域分数；失败计数显示部分页仍为空预测，成功行错误率超 100% 的情况按原口径保留。

复现需区分三件事：代码、权重与数据均未获可验证公开绑定，作者仅承诺将发布 CVC-MUSCIMA 的专家转录 MusicXML，附录给出三格式同段落清单、往返验证与失败计数。工程上若需可编辑重建且能接受渲染域，可从 Cecilia 字面树与分段装配复刻起步，先验证分词器与规范化往返，再补主观制谱偏好与延迟显存等部署测量；若目标为手写或相机歌词，需另补声学对齐与版式几何的专项验证。

## ⚙️ 关键实现与复现规格

- **训练与评测数据**：预训练用 NotaGen 约 160 万首乐曲并转为 Cecilia 形式，保留歌词对齐；SFT 用剩余 OpenScore 作品与 CVC-MUSCIMA 剩余乐曲，训练与测试按乐曲划分；评测为渲染与相机四重奏各 252 页、渲染与相机 Lieder 各 64 页、带歌词 Lieder 各 64 页、手写 100 页。
- **算力与训练耗时**：GRPO 在 8 个 GPU 计算卡上执行，每批 2 组，每作品 4 候选；SFT 选中为 8,662 次延续更新后的混合数据模型；奖励变体各用 16 训练组与 7 次优化更新；具体 GPU 型号与总耗时原文未披露。
- **核心超参数与配置**：监督目标固定归一子 C 为 1,295.1014，计数权重 0.1；GRPO 温度 0.7，非视觉学习率 10−7，视觉编码器 10−8，AdamW 参数 0.9 与 0.95，epsilon 为 10−8，权重衰减为零，裁剪系数 0.2，相对熵系数 0.01；词表 8,192，分段上限 8,192，计数 1 至 128。
- **推理速度与部署开销**：推理以无约束与语法前缀双候选经原生 XML 可用性选择，再经确定性恢复；每段上限 8,192 词元，每单元最多 128 段；采样预算每单元最多 16 段；实时率、延迟、吞吐与显存原文未披露。
- **开源产物与协议状态**：未发现可验证公开的代码与权重绑定；作者承诺将发布 CVC-MUSCIMA 专家转录 MusicXML 以支持手写研究；附录提供三格式同段落清单与往返验证细节。
- **附录与补充材料要点**：附录含 1,000 谱长度统计与往返 1,000 零例外验证，架构表 S2，失败计数表 S3，完整 CER SER LER TEDn 表 S4，版式几何表 S5，训练分域表 S6，歌词 CER 与采样表 S7 S8，以及 Roger Quilter 段落三格式全文。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.27465v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：固定编码压缩重复树结构并保留通用回退分支，1000谱往返零差错且平均长度比达27.73，直击标记冗余根源。

- 核心优势：四域宏观OMR-NED从0.2998降至0.2232，相机四重奏与艺术歌曲均显著领先，渲染四重奏系统切分F1达0.6829。

- 核心优势：同权重同窗口下候选二选一与SFT至GRPO分阶段对照齐备，48页固定对照量化版式指令对系统切分的贡献。

- 主要短板：手写CVC以0.5257大幅落后Astra的0.3297，相机带歌词小节IoU反转且GRPO后OMR-NED微升，相机歌词定位不稳定。

- 主要短板：版式几何绝对IoU仍低且作者承认改进空间大，缺少延迟实测与置信区间，Legato2无预测文件致部分指标不可同口径对比。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
