---
title: "FunCineForge: A Unified Dataset Pipeline and Model for Zero-Shot Movie Dubbing in Diverse Cinematic Scenes"
date: 2026-11-28
draft: false
description: "针对复杂影视配音中唇区不可靠与多说话人时间错乱问题，FunCineForge 以四阶段自动流程构建超 9,000 小时的 CineDub 数据集并引入时间戳说话人标记与切换拼接的合成模型，在独白与多说话人评测中优于已有对照方法，代价是依赖显式时间监督与较大训练开销且长复杂片段鲁棒性下降。"
tags: ["数据集", "流匹配", "多模态学习", "语音配音"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "复杂影视场景的零样本配音：数据流程与多模态模型如何协同"
paper_digest_original_title: "FunCineForge: A Unified Dataset Pipeline and Model for Zero-Shot Movie Dubbing in Diverse Cinematic Scenes"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0654"
paper_digest_workbench_source_sha256: "4b0d8cfd91a265cb9622842c3c4a6929784b8a794d1c8fa90ba2995aeda40a3e"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/654"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0654.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音配音"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对复杂影视配音中唇区不可靠与多说话人时间错乱问题，FunCineForge 以四阶段自动流程构建超 9,000 小时的 CineDub 数据集并引入时间戳说话人标记与切换拼接的合成模型，在独白与多说话人评测中优于已有对照方法，代价是依赖显式时间监督与较大训练开销且长复杂片段鲁棒性下降。"
paper_digest_reader_sections: [{"heading":"影视配音为何在遮挡切镜与多人对话下难以兼顾口型与音色","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"FunCineForge 全景：从原始剧集到场景一致语音的输入输出","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"四阶段数据流程如何把长剧变成带时间戳与角色标注的片段","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"配音模型怎样用时间戳与说话人标记实现多说话人切换","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"CineDub 数据规模与主客观评测显示的改进与前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉时间标记唇部对比与切换拼接后哪类场景退化最多","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的边界复现条件与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["National Engineering Research Center of Speech and Language Information Processing"],"name":"Jiaxuan Liu"},{"affiliations":["Independent Researcher, Beijing, China"],"name":"Yang Xiang"},{"affiliations":["Independent Researcher, Beijing, China"],"name":"Han Zhao"},{"affiliations":["Independent Researcher, Beijing, China"],"name":"Xiangang Li"},{"affiliations":["National Engineering Research Center of Speech and Language Information Processing"],"name":"Zhenhua Ling"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"c99c2153207ca7cd3f329b3f9a28ac251339633d16635f3b4363f930d594de1d","url":"/audio-research-portal/client/papers/2026-11-28/conference-42e51178c579523e72484547/citation.bib"},"citation.json":{"sha256":"b12df9680a9dc30020c5b96a33ecae34a917e397888cce840f894c358dd99adf","url":"/audio-research-portal/client/papers/2026-11-28/conference-42e51178c579523e72484547/citation.json"},"citation.ris":{"sha256":"d8bd110de052432c23f10468adc923b8a296f50e168d65908c7836b18fbb7886","url":"/audio-research-portal/client/papers/2026-11-28/conference-42e51178c579523e72484547/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c3b24b861dd994687b65b9e5574c47af96f7f3ddd0fa7730dfcc3be4a502b906","url":"/audio-research-portal/client/papers/2026-11-28/conference-42e51178c579523e72484547/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0654"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/654"
paper_digest_conference_doi: "10.24963/ijcai.2026/654"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/654"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0654.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "d816f324120b1bf171da119b26a1589b788e579dd691dea6249dbcc5f32642e9"
paper_digest_api_reader_plan_sha256: "f34ebe94eb9904537e939364dc68615e16b1c5c3b69b11cbe9f179908924b0f4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "82947fe09c58adbd0ea4775f696f176b42fffa0e3a5370b3cd1fbe694cb8fc31"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d9f11672dc015c8898d558c0b6f4ce097fe32733295c3111ceef21766f495a4d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a03012c3aba8aefbe66c29a23b981cb16187b3909cdf7b5f46a42dedc314f882"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e68faa8b3563306aa768363024eaf65602bce305593cce0e4084f89c6a17c5dd"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.dubbing","label":"语音配音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 复杂影视场景的零样本配音：数据流程与多模态模型如何协同

> 英文题目：*FunCineForge: A Unified Dataset Pipeline and Model for Zero-Shot Movie Dubbing in Diverse Cinematic Scenes*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0654`
> DOI：`10.24963/ijcai.2026/654`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/654) · [官方 PDF](https://ijcai.org/proceedings/2026/0654.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音配音](/audio-research-portal/papers/?concept=task.dubbing)
- **研究方法**：[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.6/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.3/10 | 影响力 6.6/10 | 开源 6.0/10 | 可复现 5.8/10 | 工程/实践 6.1/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jiaxuan Liu：National Engineering Research Center of Speech and Language Information Processing
- Yang Xiang：Independent Researcher, Beijing, China
- Han Zhao：Independent Researcher, Beijing, China
- Xiangang Li：Independent Researcher, Beijing, China
- Zhenhua Ling：National Engineering Research Center of Speech and Language Information Processing

## 📌 核心摘要

**问题与瓶颈：** 电影配音以无声视频片段、配音脚本、分段级时间戳、文本指令与参考语音为输入，合成与画面时间对齐、口型同步且保留目标音色与情感的语音，视频为 25 fps，音频为 16 kHz。基于唇部区域学习对齐的路线依赖清晰正脸高分辨率唇动，在遮挡、频繁切镜、多人共存、远距离与低分辨率实拍场景中无法建立可靠视听对应。依赖单人清晰人脸与一致音色的质量与相似度路线在人脸切换、音色切换与中间静音段出现截断与泄漏，而指令驱动的多模态大语言模型路线受限于 V2C-Animation 仅 6.8 小时、短片段独白为主、高词错误率与稀疏标注的手工数据，难以训练复杂场景。

**核心思路与方法架构：** 与最接近的指令驱动基线相比，本文保留多模态大语言模型加流匹配声学解码主干，增量为显式时间模态、帧级唇对比弱监督与支持切换的声学解码，并配套自动化数据管线。25 fps 视频每 5 帧采样得到 5 fps 序列再上采样回原帧率，与 25 Hz 语音词元对齐，16 kHz 人声经人声分离去伴奏、语音活动检测切分并剔除重叠语音后，由自动语音识别转写加精对齐得到字符级时间戳。音频用说话人嵌入模型提身份向量，视觉用轻量检测加说话人检测选主说话人并经关键点定位唇区与人脸编码器提身份嵌入，联合聚类输出富转录时间标记，再由大模型纠错生成性别、年龄、音色、语速与情感指令，编辑距离大于 72% 或身份不一致样本丢弃，不确定属性填 `` `<unknown>` `` 并掩码。指令与脚本拼接作字节对编码文本词元，时间戳-说话人分词器用 1500 个帧索引码本编码 60 秒内起止时间并联说话人属性词元，以强监督约束何时说与谁在说，以语音活动损失与交叉熵约束说什么，以唇对比损失细化对齐，流匹配在每段前静音词元后插入对应说话人嵌入并经扩散 Transformer 重建梅尔谱再经声码器成波。两模块在 CineDub 上分别训练 20 轮以上并以 0.5B 语音模型初始化，编码器是否冻结未说明，单片段限 60 秒，流式与实时未说明，直接应对切镜切换与平均音色问题。

**关键实验与核心代价：** 在 CineDub 独白测试集上，本文模型唇同步置信度 LSE-C 为 8.92，高于 InstructDubber 的 8.08，唇同步距离 LSE-D 为 3.60，低于 7.93，说话人边界保真误差 SBFE 为 0.073，低于 0.156，说话人余弦相似度 SSIM 为 78.62，高于 74.53，词错误率 WER 为 4.30，低于 12.80，字符错误率 CER 为 1.49，低于 5.05，自然度预测 UTMOS 为 3.97，高于 3.82，但梅尔倒谱失真经动态时间规整 MCD-DTW 为 4.17，差于 InstructDubber 的 3.84，未实现全指标最优，而时长加权变体 MCD-DTW-SL 为 4.25，优于 5.23。消融显示去除时间戳-说话人元组后独白 SBFE 从 0.073 升至 0.084，去除唇对比损失后独白 SSIM 降至 75.20，去除说话人切换拼接后多说话人 SSIM 降至 54.64，明显低于完整模型多说话人场景 64.51 的水平。听感仅报告情感风格一致性人工平均意见分 ES-MOS 与神经代理指标 UTMOS，未说明听众数与置信区间，也缺大规模人工自然度听测，主客观一致性无法核验。主要代价是管线串联多个专用模型与大模型验证且训练需 8 张 NVIDIA A100 GPU，推理时延与实时率未披露，论文亦承认片段变长与场景变复杂时对齐与口型同步下降。

**适用边界与深读导览：** 结论成立依赖准确分段时间戳-说话人元组、参考语音与 55 词左右结构化指令，适用于 60 秒内中英标准发音、人声突出的电视剪辑独白、旁白、对话与多说话人场景，重叠语音已被丢弃。不适用于无时间戳、无参考音色、强遮挡远距离低分辨率与实时流式部署，完整 9000 小时数据因版权仅提供抽样，泛化受限。演示页可对照试听对齐与音色切换现象，公式与机制细节见方法概述，消融与跨场景退化见实验结果，数据规模与指令分布见细节详述。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/FunAudioLLM/FunCineForge/> → <https://github.com/QwenAudio/FunCineForge> — 链接可访问（HTTP 200）

- 代码相关资源：<https://funcineforge.github.io/> — 链接可访问（HTTP 200）

- 演示资源：<https://funcineforge.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 影视配音为何在遮挡切镜与多人对话下难以兼顾口型与音色

电影配音也称视觉声音克隆 V2C，任务是由剧本与目标音色为视频片段合成语音。与纯文本转语音不同，配音必须利用人物面部等视觉信息精确控制时长情感与韵律，同时满足口型同步音色迁移与角色身份情感建模。FunCineForge 把输入定义为静默视频片段配音脚本段级时间戳指令与参考语音，输出为与场景一致的语音，重点解决何时说谁在说说什么以及语音活动区间内细粒度唇音同步。

#### 3 类已有思路的适用边界

已有工作可归为 3 类思路。第一类用唇区学习视听映射，如 NeuralDubber 的文本视频对齐器 HPMDubber 的时长对齐器与 StyleDubber 的音素引导唇部对齐器，把文本音素映射到视频帧以显式控制音素级时长。这类方法高度依赖清晰可见的唇区，只在简单正面高分辨率独白中有效，遇到遮挡频繁切镜多人共存远距离与低分辨率帧就难以建立可靠映射。

第二类提升合成质量与说话人相似度，如 Speaker2Dubber 的韵律增强声学预训练 FlowDubber 的双重对比学习与大语言模型流匹配引导 ProDubber 的韵律解耦适配 EmoDubber 的正负引导情感控制与 Authentic-Dubber 的情感检索增强，多用声学编码器提取说话人向量或从面部学习身份。这类方法依赖清晰单人面部与稳定音色，遇到镜头级面部切换音色切换与中间静音段就会错位，配音质量与相似度明显下降。

第三类用多模态大语言模型融合多模态信息，如 DeepDubber-V1 的多模态思维链推理与 InstructDubber 的文本提示控制，以自然语言指令控制风格与情感。这一范式更直观可释，但效果依赖大规模数据，而 V2C-Animation 仅含 10,217 个片段平均 2.4 秒共 6.8 小时，Chem 与 GRID 规模更小，均依赖人工标注且局限于独白，高词错误率与稀疏标注制约了复杂场景训练。

#### 统一框架与数据基础

零样本影视配音要求在未见说话人下处理独白旁白对话与多说话人 4 种场景。独白依赖时间约束与弱监督唇动，旁白无活动面部需退化为时间可控语音合成，对话与多说话人需在长序列中处理切镜遮挡与音色切换。FunCineForge 为此提出统一框架，以自动生产流程构建首个电视配音数据集 CineDub，再以显式时间模态与改进流匹配模型实现精确时间对齐与灵活切换。

该框架包含两部分分工。数据生产流程负责把长剧集原料转为结构化多模态数据，涵盖视频预处理与切分带时间戳转写与对齐视听说话人归属与多模态思维链校正。配音模型则分开训练多模态大语言模型与流匹配模块，前者联合建模何时说谁在说与说什么，后者由合成梅尔频谱经 HiFiGAN 声码器转为波形，以支撑独白旁白对话与多说话人合成。

CineDub 的原料与标注也有明确范围。流程从 400 余部涵盖国剧美剧英剧的剧集原料中筛选非纪录片标准发音人声突出口语少且面部无遮挡内容，保留 9,000 小时以上有效语音片段，平均片段长 10.8 秒，非中性情感语音占 38.4%，指令平均长 55 词方差为 16，覆盖角色属性语气语速音色与情感。每部剧集各取 4 条样本覆盖 4 类场景构成测试集，以支撑独白旁白对话与多说话人评测。

### FunCineForge 全景：从原始剧集到场景一致语音的输入输出

要一次看清从原始剧集到可训练数据再到合成语音的闭环，可先看总体示意。该图自上而下给出原始电视来源经数据流程变为结构化标注，再由配音模型结合参考语音生成输出，下部灰底框以一段中文对话为例展示文本线索场景与 3 段时间戳的对应，是理解输入输出定义的入口。

[![原论文 Figure 1：The overview of FunCineForge.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-1.png)

*论文图 1：总体流程示意：原始剧集经数据流程变为结构化数据，模型以静默视频脚本时间戳指令与参考语音合成场景一致语音（原论文 Figure 1）。*

像素显示顶部为 4 格古装剧胶片条，经黄色箭头指向黄色数据流程框。灰底框内含中文台词与英文线索与 Scene Dialogue 标注，下方为紫红频谱按 Start Spk1 End 与 Start Spk2 End 划为 3 段，每段下方对应 4 张 3 张与 5 张人脸缩略图并以红框标出嘴部，下方标注 Spk1 老年男性磁性平静困惑与 Spk2 老年男性深思稳重平静。蓝色配音模型框左侧接蓝色参考波形，下方输出 3 段对齐的紫红频谱，箭头方向自上而下无分叉。

模型输入输出可形式化为给定活动说话人帧级面部序列与 N 个语音段，每段含配音脚本 Text 指令 Instruct 与时间戳说话人元组 T，元组含起始结束说话人编号性别与年龄，另有 M 个说话人的参考语音且 M 不超过 N，模型合成与静默视频时间对齐且口型同步的梅尔频谱，再经 HiFiGAN 声码器转波形。训练分多模态大语言模型训练与流匹配训练两阶段，视觉采样为 25 fps 视频每 5 帧取 1 帧，音频重采样至 16 kHz，原文未披露隐层维度等细节。

与最近已有对照相比，实质增量有三点。一是首次构建电视配音数据集 CineDub，含 CineDub-CN 与 CineDub-EN 两个子集总量超 9,000 小时，平均 10.8 秒，标注覆盖字符属性语调语速音色与情感。二是首次显式引入时间模态，以帧索引码本与时间戳说话人分词器联合建模何时说谁在说。三是以说话人切换拼接改进流匹配，不再只用单全局说话人向量，从而支持对话中的音色切换。数据侧采用专用模型预测加多模态思维链校正以降低词错误与身份错误。

### 四阶段数据流程如何把长剧变成带时间戳与角色标注的片段

数据流程是全文可复现性的关键，该图把长视频到配音数据集的四阶段展开为左右贯通的模块与箭头。建议沿左侧预处理到中部视听聚类再到右侧验证器的顺序阅读，重点看人声与乐器分离结果与说话人日志示例时间戳的写法。

[![原论文 Figure 2：Overview of the FunCineForge dataset pipeline for cinematic dubbing data construction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-2.png)

*论文图 2：四阶段数据流程：预处理切分转录对齐视听说话人日志与多模态思维链校正得到配音数据集（原论文 Figure 2）。*

像素左侧自上而下为长视频人声分离语音活动检测带时间戳识别与重叠检测，下方为胶片条与黑色乐器频谱及紫红人声频谱。中部黄色框内为面部检测视觉说话人检测两张示例人脸分数为 0.83 与负 0.35 面部关键点提取与面部编码器，下方为音频处理与语音分词器，蓝色面部向量与黄色音频向量汇入视听联合聚类，指向含转录文本与 RTTM 示例 0.000 号说话人 1 号 3.020 等三行的文件图标。右侧机器人验证器图标下为 Gemini 3.1 Pro 深蓝框与 4 条任务文字，纵向深蓝条为双向核验机制，末端为橙色数据集圆柱。

第一阶段做预处理与切分，先以 Mel-RoFormer 分离人声与乐器以抑制背景音乐，再以 FSMN-Monophone 语音活动检测提取语音活动段并切分为短片段，最后以重叠检测剔除多人同时说话片段以保证后续聚类可靠。第二阶段做转录与对齐，中文以 FunASR 英文以 Qwen3-ASR 生成带标点文本并预测字符级时间戳，再以 MMS 二次对齐减少时间偏差。

第三阶段做视听说话人日志，音频侧以 CAM++ 提取说话人向量并以 CosyVoice 3 语音分词器以 25 Hz 编码，视觉侧对 25 fps 视频每 5 帧采样，以轻量人脸检测得候选帧并以 TalkNet-ASD 打分取最高脸，再以 FAN 检测二维关键点得唇坐标并裁剪面部与嘴部，以自适应面部编码器提取向量并归一化保留身份，最后以音频为主视觉为辅的联合无监督聚类输出 RTTM 文件。

第四阶段做多模态思维链校正，以 Gemini 3.1 Pro 为验证器同时看净人声轨转录文本与说话人元组，先识别何时何人说什么并纠正词与标点，再推断性别年龄身份音色语调语速与情感并汇总为结构化指令。严格模板加双向核验抑制幻觉，校正稿与原稿 Levenshtein 距离大于 72% 的样本丢弃，不一致身份过滤，不确定属性置为未知掩码，最后按面部证据与人数分为独白旁白对话与多说话人 4 类。

### 配音模型怎样用时间戳与说话人标记实现多说话人切换

模型结构上下分层，下部为 0.5B 多模态大语言模型负责生成语音词元，上部为 400M 扩散变换器声学流匹配负责合成频谱。该图适合先看下部 3 路输入如何汇合，再看上部说话人向量在时间轴何处插入，以理解多说话人切换的实现位置。

[![原论文 Figure 3：Overview of the FunCineForge dubbing model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-3.png)

*论文图 3：配音模型结构：下部多模态大语言模型生成语音词元，上部流匹配拼接说话人向量合成声学特征（原论文 Figure 3）。*

像素下部为橙色大语言模型长条，左侧为起始符帧级面部向量与场景标记，面部向量来自面部编码器与帧级面部图像，中部虚框内为基于字节对编码的文本词元与时间戳说话人分词器的起始说话人性别年龄结束词元并标注数量 N 不小于 M，右侧为轮次帧级语音词元与结束符，右下为加权损失与语音词元嵌入层及唇编码器与帧级唇图像。上部为声学流匹配长条，时间轴上按说话人向量 1 号语音段静音说话人向量 2 号交替排列，右上黄色条为说话人切换拼接，下接因果上采样编码器与通用说话人编码器及 1 至 M 号参考波形，左上经声码器输出蓝色波形。

下部先处理文本与时间强监督。指令与脚本拼接为提示模板并以字节对编码分词，面部与唇部图像由 25 fps 视频每 5 帧采样得 5 fps 序列，分别编码后上采样回原帧率得与语音词元等长的帧级向量且天然稀疏。时间戳说话人元组提供何时说谁在说的强约束，以大小为 1,500 的帧索引码本编码起止时间对应 60 秒乘 25 fps，时间戳说话人分词器映射为说话人性别年龄词元，未知标注训练时掩码，帧级语音活动指示构成语音活动损失，语音词元交叉熵损失约束说什么。

弱监督来自视觉。帧级面部向量输入大语言模型以增强身份与情感理解，帧级唇向量与语音词元向量做对比学习，仅在语音活动帧生效并以弱唇动权重降低模糊帧影响，温度参数调节分布锐度。以 1 秒样本为例，25 帧视频采样后得 5 帧面唇图，16 kHz 音频即 16,000 个采样点经 25 Hz 分词得 25 个语音词元，面唇特征上采样至 25 帧与词元对齐，缺脸帧以静音与掩码处理，原文未披露隐层维度与注意力头数。

上部流匹配解决切换。原 CosyVoice 3 骨干只用单全局说话人向量，难以处理对话切换，新策略以通用说话人编码器为 M 个参考提取向量，经双向搜索找到每段前最后静音词元并在其后插入对应向量，再经因果上采样编码与语音词元拼接为条件上下文，输入扩散变换器并以局部注意力限制感受野在语音活动段，训练时随机丢弃条件以支持推理时无分类器引导，输出梅尔频谱经 HiFiGAN 声码器转波形。两模块在 CineDub 上分别训练超 20 轮，以 CosyVoice3-0.5B 检查点初始化，使用 8 张 NVIDIA A100 GPU 与 AdamW 优化器峰值学习率为 1e-4 预热 2,000 步批大小为 2×10^4 词元，延迟与实时率原文未披露。

### CineDub 数据规模与主客观评测显示的改进与前提

评测围绕数据集质量与模型效果两层展开。数据取自 400 余部中外剧集并剔除纪录片与非标准发音，要求人声突出少口语且面部无遮挡，最终保留超 9,000 小时有效片段平均 10.8 秒，非中性情感占比为 38.4%，指令平均 55 词方差为 16，每部剧每类场景抽 4 个样本作测试。对照中已有配音模型用训于 V2C-Animation 与 Chem 及 GRID 的官方检查点直接推理，DeepDubber-V1 与 InstructDubber 则重训于 CineDub 以保证同数据比较，另有只用独白空指令空元组的跨数据集训练。

指标覆盖 7 个方面。MCD-DTW 为梅尔倒谱失真结合动态时间规整越低越好，CER 为字错误率越低越好，WER 为词错误率越低越好，UTMOS 为语音自然度预测越高越好，LSE-C 为口型同步置信度越高越好，LSE-D 为口型同步距离越低越好，DER 为日志错误率越低越好，SBFE 为说话人边界保真误差越低越好，SSIM 为说话人余弦相似度越高越好，ESIM 为情感相似度越高越好，ES-MOS 为情感风格一致性人工平均意见分越高越好。其中 CER 与 WER 以 Whisper-large-v3 识别，LSE 以 SyncNet 计算，ESIM 以 emotion2vec 提取，UTMOS 为神经代理而 ES-MOS 为人工听测但原文未披露听众数与置信区间。

理解数据多样性可先看统计图。该图上下两排分别对应 CineDub-CN 与 CineDub-EN，左侧为场景年龄性别 3 组柱状图并标出百分比，右侧为音色关键词词云且字号反映频次，适合对比中英文子集在独白占比与年龄构成上的异同。

[![原论文 Figure 4：Statistics of the CineDub dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/f54ceb6964b8/figure-4.png)

*论文图 4：CineDub 中英文子集统计：左侧场景年龄性别分布柱状图，右侧音色关键词词云（原论文 Figure 4）。*

像素上排中文子集中独白为 52.2% 旁白为 14.1% 对话为 26.1% 多说话人为 7.5%，年龄以成年 31.5% 青少年 25.0% 中年 21.2% 为主，性别男性为 57.0% 女性为 35.4% 未知为 7.6%。下排英文子集中独白为 49.8% 旁白为 21.7% 对话为 25.0% 多说话人为 3.5%，年龄成年高达 59.1% 中年为 19.1%，性别男性为 61.9% 女性为 37.7% 不确定为 0.5%。右侧词云中文以平静温和稳重深沉有力居大字，英文以深沉透气清晰平静稳重居大字，各组百分比之和约为 100% 属于舍入差异。

原文完整 Table 1 与 Table 2（本精简表未列出）显示三点趋势。校正后数据集在转录准确率与日志准确率上明显优于未校正版本，训于 CineDub 的模型在自然度与同步上优于训于小规模数据而欠拟合的模型，FunCineForge 在独白统一测试中优于各对照。分场景看独白与旁白自然度与对齐较高，旁白无活动面部时退化为时间可控语音合成故 LSE 记为短横，对话与多说话人仍保持时间对齐口型同步与音色切换但随片段变长与复杂度上升退化，试听页可对照该现象。

### 去掉时间标记唇部对比与切换拼接后哪类场景退化最多

消融在 CineDub 上检验 3 个关键设计的贡献，覆盖独白旁白对话与多说话人四场景与口型同步边界保真音色相似与情感一致五项指标。下表精简展示独白与多说话人代表行，完整模型与去掉时间元组去掉唇部对比与去掉切换拼接三变体同列可比，旁白因无活动面部故口型同步记为短横。

| Methods | Scene | LSE-C↑ | LSE-D↓ | SBFE↓ | SSIM(%)↑ | ES-MOS↑ |
| --- | --- | --- | --- | --- | --- | --- |
|  | Monologue | 8.92 | 3.60 | 0.073 | 78.62 | 4.04 |
|  | Multi-Speaker | 7.50 | 8.68 | 0.078 | 64.51 | 3.95 |
|  | Multi-Speaker | 5.33 | 14.44 | 0.389 | 62.86 | 3.82 |
|  | Multi-Speaker | 6.56 | 10.35 | 0.088 | 64.60 | 3.92 |
|  | Multi-Speaker | 7.44 | 8.73 | 0.081 | 54.64 | 3.67 |

所展示行中完整模型独白为 LSE-C 8.92 与 LSE-D 3.60 与 SBFE 0.073 与 SSIM 78.62% 与 ES-MOS 4.04，多说话人为 7.50 与 8.68 与 0.078 与 64.51% 与 3.95。去掉时间元组后多说话人变为 5.33 与 14.44 与 0.389 与 62.86% 与 3.82，独白也降至 8.18 与 6.85 与 0.132，截断与泄漏最重。去掉唇部对比后多说话人为 6.56 与 10.35 与 0.088，独白为 8.05 与 4.47，同步下降。去掉切换拼接后多说话人相似度降至 54.64%，独白为 75.20% 下降较小。

归因上显式时间监督对复杂场景最关键，帧级对比提供细粒度唇音约束，切换拼接保障多说话人音色分离。未胜出项有两处，多说话人相似度中去掉唇部对比为 64.60% 略高于完整的 64.51%，独白边界误差中完整与去掉切换拼接同为 0.073 并列，旁白口型同步记为短横无法比较。缺失的消融包括整体去掉面部向量人声分离与语音活动检测阈值及指令长度的影响，也未报告方差置信区间与计算代价。

### 结论成立的边界复现条件与工程选型建议

#### 适用边界与假设

结论成立依赖若干假设。流程丢弃重叠语音片段以保证聚类可靠，但重叠对话因此未被建模。视频限 60 秒且帧索引码本为 1,500，隐含 25 fps 假设，更长片段需另行切分。校正阈值 72% 来自经验分布且未知标注以掩码处理，通用大模型幻觉需双向核验抑制，低分辨率远距离与持续遮挡下视觉仍稀疏，难以提供稳定身份与情感线索。

训练与评测条件也有明确边界。全部视频统一为 MP4 并去除片头片尾字幕，帧率取 25 fps 音频重采样至 16 kHz，语音分词器采用 6,560 规模有限标量量化码本，帧索引码本规模为 1,500。多模态大语言模型与流匹配模块在 CineDub 上分别训练超 20 轮，以 CosyVoice3-0.5B 检查点初始化，优化器用 AdamW 峰值学习率 1e-4 预热 2,000 步，词元批量为 2 万，硬件为 8 张 NVIDIA A100 GPU。测试集按每部剧集各取 4 条样本覆盖 4 类场景构成。

#### 部署开销与复现指引

未验证的部署条件较多。原文未披露延迟首词元时间实时率显存与吞吐，0.5B 大语言模型加 400M 扩散变换器的推理开销未知，分块流式与缓存策略未说明。人工听测仅给 ES-MOS 分值未给听众数与置信区间，神经代理与人工可能背离，失效案例与长复杂片段退化未量化，音乐与多语种统一生成仅为展望，尚需独立验证。

复现需区分三件事。代码仓库与演示页链接本次可达，可查看合成示例与数据集样本。权重与训练脚本以仓库说明为准，数据集因版权仅提供 CC-BY-NC 4.0 样本，完整 9,000 小时数据无法直接下载运行，自备剧集需另获授权。训练需 8 张 NVIDIA A100 GPU 分别训练两模块超 20 轮并以特定检查点初始化，附录细节原文未披露，复现前应核对许可与硬件。

模型设计对应了上述选型。时间戳说话人分词器把起始结束时间戳与说话人性别年龄属性映射为离散词元序列，语音活动损失约束何时说，语音词元损失约束说什么，唇部对比目标在语音活动帧内加权弱唇动帧以增强细粒度同步。流匹配侧在每段语音前静音词元后插入对应说话人向量，以显式对齐时间戳边界切换音色，局部注意力限制在语音活动段内。

工程选型上独白与旁白可优先完整模型，旁白无面部时可视为时间可控语音合成。对话与多说话人必须保留时间戳说话人标记与切换拼接，否则截断泄漏显著。算力受限时去掉唇部对比损失较小但细粒度同步下降，数据建设应优先多模态校正以降低词错误与身份混淆。演示页试听建议对照独白旁白对话与多说话人，关注时间截断音色切换与情感一致，不预设听感结论。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频以 25 fps 采样并每 5 帧取 1 帧得到 5 fps 视觉序列，音频重采样至 16 kHz，语音分词器以 25 Hz 编码，帧索引码本大小为 1,500 对应 60 秒上限，FSQ 码本大小为 6,560，声码器为 HiFiGAN，延迟与实时率原文未披露
- **训练与评测数据**：超过 400 部中外剧集经筛选与切分保留超 9,000 小时有效语音片段，平均 10.8 秒，非中性情感占比为 38.4%，指令平均 55 词方差为 16，含 CineDub-CN 与 CineDub-EN 两个子集覆盖独白旁白对话与多说话人四类场景，每部剧每类抽 4 个样本作测试，对照用 V2C-Animation 与 Chem 及 GRID 小规模数据
- **算力与训练耗时**：使用 8 张 NVIDIA A100 GPU 训练多模态大语言模型与流匹配模块分别超 20 轮，采用 AdamW 优化器峰值学习率为 1e-4 与 2,000 步预热，批大小为 2×10^4 词元，以 CosyVoice3-0.5B 检查点初始化，推理硬件原文未披露
- **核心超参数与配置**：优化器为 AdamW，峰值学习率为 1e-4，预热 2,000 步，批大小为 2×10^4 词元，FSQ 码本大小为 6,560，帧索引码本大小为 1,500，语音活动与语音词元与唇部对比损失加权，流匹配随机丢弃条件以支持无分类器引导，扩散变换器规模为 400M，多模态大语言模型规模为 0.5B
- **推理速度与部署开销**：以静默视频片段配音脚本段级时间戳指令与参考语音为输入合成梅尔频谱再经 HiFiGAN 转波形，支持多说话人切换与局部注意力，参数量含 0.5B 多模态大语言模型与 400M 扩散变换器，延迟实时率显存与吞吐原文未披露
- **开源产物与协议状态**：代码仓库与演示页链接本次可达并提供合成示例与数据集样本，数据集因版权仅提供 CC-BY-NC 4.0 样本无法获取完整 9,000 小时数据，训练代码与权重细节以仓库说明为准
- **附录与补充材料要点**：原文未披露附录证明与补充细节，伦理声明说明数据已获授权并仅用于学术研究，人工评价参与者已获补偿，未来工作展望语音音乐与音频统一生成

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 7.6/10 | 技术严谨 6.5/10 | 实验充分 6.7/10 | 清晰度 5.3/10 | 影响力 6.6/10 | 开源 6.0/10 | 可复现 5.8/10 | 工程/实践 6.1/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0654`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/654) · [官方 PDF](https://ijcai.org/proceedings/2026/0654.pdf)
- DOI：`10.24963/ijcai.2026/654`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：同数据独白测试中WER 4.30、LSE-D 3.60、SBFE 0.073等多项显著优于InstructDubber与DeepDubber-V1，优势可核对。

- 核心优势：去除时间戳-说话人元组、唇对比损失与说话人切换拼接均导致对齐或相似度退化，形成三组件直接因果证据。

- 核心优势：四阶段自动化管线串联人声分离、对齐、视听聚类与大模型纠错，支撑9000小时多场景CineDub构建与质量提升。

- 主要短板：全指标最优主张与表字面矛盾，本文MCD-DTW 4.17差于InstructDubber的3.84，未实现全优。

- 主要短板：情感一致性仅报告ES-MOS而无听众数与置信区间，自然度仅用UTMOS代理而缺大规模人工听测。

- 主要短板：72%过滤阈值、温度γ与权重w_t、冻结策略与推理代价等关键配置均未披露，削弱可复现性。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
