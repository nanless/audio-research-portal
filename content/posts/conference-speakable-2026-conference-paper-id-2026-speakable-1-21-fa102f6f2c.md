---
title: "TaLK-Corpus: A Regionally Diverse Evaluation Set for Sri Lankan Tamil Speech"
date: 2026-11-27
draft: false
description: "针对斯里兰卡泰米尔缺少地区级识别评测的问题，论文构建覆盖 22 个行政区的 1 小时 33 分钟、1,214 条三语标注语料，并以零样本评测显示 Whisper V3 总体 WER 为 0.807 优于 MMS 的 0.845，但每区仅一位说话人使地区差异仅具指示性。"
tags: ["基准测试", "数据集", "数据集构建", "语音识别"]
categories: ["speakable-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "以 22 区 22 人小样本诊断斯里兰卡泰米尔识别的地区差异"
paper_digest_original_title: "TaLK-Corpus: A Regionally Diverse Evaluation Set for Sri Lankan Tamil Speech"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.21"
paper_digest_workbench_source_sha256: "c6ea0c85f101b2faa980a3eaeca73c0c38361353f8093b95e2e156d75c996f82"
paper_digest_workbench_record_url: "https://aclanthology.org/2026.speakable-1.21/"
paper_digest_workbench_pdf_url: "https://aclanthology.org/2026.speakable-1.21.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: available
paper_digest_primary_task: "语音识别"
paper_digest_score: 5.9
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对斯里兰卡泰米尔缺少地区级识别评测的问题，论文构建覆盖 22 个行政区的 1 小时 33 分钟、1,214 条三语标注语料，并以零样本评测显示 Whisper V3 总体 WER 为 0.807 优于 MMS 的 0.845，但每区仅一位说话人使地区差异仅具指示性。"
paper_digest_reader_sections: [{"heading":"斯里兰卡泰米尔语识别为何缺少地区级评测基准","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"TaLK 语料从受试者招募到可评测音频文本对的完整流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"语音切分、转写规范与文件匿名化的具体规则","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"零样本总体误差与跨数据集对比说明了什么","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"地区误差热图与语码混合案例揭示的方言效应","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"单人单地区设计的边界与复现使用的前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Computer Science, University of Jaffna"],"name":"Adsajan Thillainathan"},{"affiliations":["Department of Computer Science, University of Jaffna"],"name":"Nishanthini Kanthakumar"},{"affiliations":["Department of Linguistics and English, University of Jaffna"],"name":"Nivethiga Rasan"},{"affiliations":["Department of Computer Science, University of Jaffna"],"name":"Kengatharaiyer Sarveswaran"}]
paper_digest_abstract_sha256: "4d18027caa0b7b0c9988e3a9626ac7afb5280f8909146828a7c4b8fafd7b8861"
paper_digest_sidecars: {"citation.bib":{"sha256":"a1c30056e61494c28b3f3ba0b0b63819814e086e9960e4e666914f29118b1461","url":"/audio-research-portal/client/papers/2026-11-27/conference-fa102f6f2cfd6975ef24963a/citation.bib"},"citation.json":{"sha256":"b8ffc5adb3ea72935c61b25ce98edaec79ae067a8e2de74b2fb4411f790b8d86","url":"/audio-research-portal/client/papers/2026-11-27/conference-fa102f6f2cfd6975ef24963a/citation.json"},"citation.ris":{"sha256":"c16af4e123adc8f600b4c5f241fca00f3660163a5bead40f25020efea35309ce","url":"/audio-research-portal/client/papers/2026-11-27/conference-fa102f6f2cfd6975ef24963a/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9113be6559c1d236e305f04b4c132afa329b3fdd18ec93da9c0232fe273ada9d","url":"/audio-research-portal/client/papers/2026-11-27/conference-fa102f6f2cfd6975ef24963a/rethink-context.json"}}
paper_digest_paper_id: "conference:speakable:2026:conference-paper-id:2026.speakable-1.21"
paper_digest_source_kind: conference
paper_digest_conference_id: "speakable-2026"
paper_digest_conference_name: "speakable-2026"
paper_digest_doi: "10.18653/v1/2026.speakable-1.21"
paper_digest_conference_doi: "10.18653/v1/2026.speakable-1.21"
paper_digest_conference_record_url: "https://aclanthology.org/2026.speakable-1.21/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.speakable-1.21.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "229b27141759d4f209cce31cb48bf9742049f2556689aac0969b0d914e1b3590"
paper_digest_api_reader_plan_sha256: "431f37d69c67174c3a9a4dc19c45839a53d9fcfdf885c4e54257efae40ca180f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "50db6c0b8fa6bfcd3b95365de781fc933d7a01ab70e76c33bab1f1fac70e029e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "51b7476f04d0a21a17609c3631417a58d3ce5803369b2b329fa0e3b1d6a46359"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8e25327182914faa668d2586ed9463551ab9893d7e4ee52aeb86d410f3ebfeee"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "48ff6e4b3a9dc8e99782d2a4e73b56625ee5ba01fdac7726f9a3daf23a836665"
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
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_method: "数据集构建"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 以 22 区 22 人小样本诊断斯里兰卡泰米尔识别的地区差异

> 英文题目：*TaLK-Corpus: A Regionally Diverse Evaluation Set for Sri Lankan Tamil Speech*

> 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.21`
> DOI：`10.18653/v1/2026.speakable-1.21`
> Track：SPEAKABLE 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.21/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.21.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-research-portal/papers/?concept=task.asr)
- **研究方法**：[数据集构建](/audio-research-portal/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-research-portal/papers/?concept=artifact.benchmark)；[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**5.9/10** | 创新 6.7/10 | 技术严谨 5.7/10 | 实验充分 5.9/10 | 清晰度 5.5/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.2/10 | 工程/实践 6.0/10

排名：后50% | 文档类型：数据集与基准

## 👥 作者与机构

- Adsajan Thillainathan：Department of Computer Science, University of Jaffna
- Nishanthini Kanthakumar：Department of Computer Science, University of Jaffna
- Nivethiga Rasan：Department of Linguistics and English, University of Jaffna
- Kengatharaiyer Sarveswaran：Department of Computer Science, University of Jaffna

## 📌 核心摘要

**问题与瓶颈：** 自动语音识别（Automatic Speech Recognition, ASR）需将连续语音波形转为文字，Whisper 等 Transformer 模型在受控高资源语言上表现较好，但在噪声、说话人与口音变异、语码转换、低资源稀缺及自发会话下鲁棒性不足。泰米尔语具有黏着形态、卷舌音与元音长短对立及书面口语双层变体，并常与英语混用，斯里兰卡泰米尔语更因历史定居与语言接触形成分区发音、用词与韵律差异。已有泰米尔语基准多覆盖印度泰米尔语或特定人群，缺乏斯里兰卡分区结构化覆盖，致使主流模型的分区词错率差异无法被常规评测发现。

**核心思路与方法架构：** 核心洞察是以行政区划分为分层探针，将地域音系差异转化为可复现的分区词错率分布，从而暴露仅用混合泰米尔语平均分无法发现的方言失效。采集覆盖 22 个区每区 1 位母语者共 22 位说话人，含 12 位女性与 10 位男性，以 Sony PCM-A10 与 DJI Mic Receiver 在室内低噪声下录制学校生活、旅行、家庭与节日等日常域自发语音，统一为 16 kHz 单声道 WAV，共 1 小时 33 分钟。切分与标注沿同一表征流衔接，标准化波形先经 Silero VAD v4.03 按阈值 0.5、最短语音 250 ms、最短静音 100 ms 与 30 ms 填充切分为 1,214 条片段，再由 2 位语言学家按保留方言原则转写为泰米尔文并附加国际音标（International Phonetic Alphabet, IPA），元数据与 MD5 匿名文件名一并发布。评测冻结全部模型参数并采用零样本推理，对比 Whisper V3 与 facebook/mms-1b-all，统一预处理与泰米尔感知切分评分管线，忽略标点并一致归一化数字，解码参数在各区间保持恒定，从而将分区差异归因于声学与方言失配而非管线不一致。

**关键实验与核心代价：** 在 TaLK 全集 1,214 条语音的同一管线下，Whisper V3 的词错率（Word Error Rate, WER, 越低越好 ↓）为 0.807，低于 MMS 的 0.845，而字错率（Character Error Rate, CER, 越低越好 ↓）为 0.425，高于 MMS 的 0.342，呈现 WER 与 CER 方向不一致的分化。与 IndicVoices 泰米尔语已报告结果相比，Whisper V3 从 0.784 变为 0.807，MMS 从 0.754 变为 0.845，均在 TaLK 上更高，表明斯里兰卡变体更难识别。分区上 Whisper V3 平均 WER 在 0.672 到 0.903 之间波动，Hatton、Moneragala 与 Badulla 相对较低，论文推测其更接近印度泰米尔语。误差分析显示模型常将数字与教育术语输出为英语并混用罗马字，抬高基于泰米尔文参考的 WER。主导代价是规模仅 1 小时 33 分钟且每区仅 1 位说话人，分区效应与说话人风格纠缠，转写空格差异亦会轻微抬高 WER。

**适用边界与深读导览：** 结论仅在受控室内自发独白与统一切分后离线评分下成立，未覆盖多说话人会话、街头噪声、电话信道与实时流式部署，分区差异仅具指示性。数据集以 CC-BY-NC 4.0 发布限非商业研究评估使用，欲核对切分转写规范与总体跨数据集数值及局限，可深读下方方法、实验与局限章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/LTG-UoJ/TaLK-Corpus-Public> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 斯里兰卡泰米尔语识别为何缺少地区级评测基准

#### 语言特点与识别难点

泰米尔语属于达罗毗荼语系，文献传统超过 2,000 年，使用人口超过 86,000,000 人，主要分布于泰米尔纳德邦、斯里兰卡、新加坡、马来西亚及散居社区。语言特点包括黏着形态、丰富的音位库存，尤以卷舌辅音与元音长短对立为代表，以及音节定时韵律、文白异读并存和与英语频繁的语码混合。在语音技术中，它仍属低资源语言，大规模标注语料相对不足，给自动语音识别与语音合成带来持续困难。

方言是自动语音识别落地的关键瓶颈。元音偏移、辅音变化、词汇差异、韵律起伏与形态句法偏离，会造成语音与词汇层面的失配。以主流变体为主训练的模型，会对地区或少数方言产生系统性偏置，表现为 WER (词错误率) 明显升高。在低资源条件下，缺少方言专属数据、缺少统一正字法与多样训练语料，会进一步放大这种不平等，论文引言与背景部分对此有集中论述。

#### 已有评测资源的不足

已有泰米尔语评测多聚焦印度泰米尔。Mozilla Common Voice 泰米尔语与 OpenSLR 资源以朗读或众包语音为主，缺少支持方言感知的结构化元数据。LT-EDI 系列共享任务关注印度地区老年与跨性别群体在自然场景下的语音，强调人口学多样而非地理方言结构，未提供按地区划分的方言覆盖。EmoTa 服务于情感识别，不作为识别基准，也不支持按地区评估识别稳健性。

多语方言工作则证明了地理多样评估的必要性。IndicVoices-R 等研究表明，仅在标准变体上训练的模型在地区语音上会出现系统性退化。若无按地区组织的评估集，就难以度量口音敏感性与稳健性。斯里兰卡泰米尔语受历史定居、与僧伽罗语和英语长期接触及人口流动影响，在发音、口音、词汇与韵律上存在地区差异，这正是现有印度泰米尔主导语料难以覆盖的部分。

#### 语料定位与两项贡献

TaLK 语料为补足这一空白而设计，名称取自 IETF BCP 47 语言标签 ta-LK，对应统一码公共区域数据存储库格式中的 ta_LK。语料覆盖斯里兰卡 22 个行政区，每区一位母语者，共 22 位，合计 1 小时 33 分钟，切分为 1,214 条话语，附泰米尔文、罗马转写与宽式 IPA (国际音标) 转写。22 位说话人中女性 12 位、男性 10 位，年龄以 20 岁至 60 岁为主并覆盖 20 岁以下与 60 岁以上各一位，教育与职业背景多样。受试者此前均参加过以泰米尔语为母语科目的普通教育证书考试，录音在受控室内环境下完成并统一为 16 kHz 单声道 WAV 格式。

论文提出两项主要贡献。第一是提供经人工精细整理的斯里兰卡泰米尔语音料，包含地理代表性强的音频与逐字转写文本。第二是以零样本方式评测 Whisper Large-V3 与 Facebook 的 MMS (大规模多语语音模型)，揭示同一模型内的强烈地区效应，Whisper Large-V3 平均 WER 按地区在 0.672 至 0.903 之间波动。语料以 CC BY-NC 4.0 许可发布，限非商业研究与评估使用且须署名引用，以支持包容性语音技术。

### TaLK 语料从受试者招募到可评测音频文本对的完整流程

为理解采样是否真正覆盖全岛，建议先沿分布图阅读空间布局。该图以斯里兰卡灰底轮廓加白色区界为底，红色圆点标出每位受试者位置，并标注行政区名与性别。看清南北分布与性别搭配后，再进入录制与标准化流程，才能判断后文按地区比较的前提是否成立。这种先看地理再看流程的顺序，有助于理解后文误差为何按地区展开。

[![原论文 Figure 1：District-level distribution of speakers](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/b3269e29387e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/b3269e29387e/figure-1.png)

*论文图 1：斯里兰卡 22 个行政区采样点与性别分布，红色圆点标示每区一位说话人位置（原论文 Figure 1）。*

像素显示，采样点自北端 Jaffna (M) 经 Kilinochchi (F)、Mullaitivu (F) 与 Vavuniya (F) 向南延伸，直至南端 Matara (F)，东至 Batticaloa (F) 与 Ampara (M)，西至 Colombo (M) 与 Puttalam (F)，共 22 个红点。性别标注为 12 个 F 与 10 个 M，与正文 12 位女性与 10 位男性一致。中部 Nuwara Eliya (F)、Kandy (M) 与 Badulla (M) 等点位密集，体现了中部与种植园区人群的纳入。

录制使用 Sony PCM-A10 数字录音机与连接手机的 DJI Mic 接收器，后者开启智能降噪，在受控室内环境下完成。受试者围绕学校生活、大学经历、旅行、家庭、节日、葬礼、自述与生活经验等日常主题自由讲述，以保证词汇多样与自然会话风格。全部音频统一转换为单声道 16 kHz WAV 格式，兼顾识别兼容与计算效率，总时长为 1 小时 33 分钟。原文未披露原始采样率与量化位数，仅给出标准化后规格。

元数据集中存于单个 CSV 文件，每行对应一个音频文件，重复记录说话人信息以保证自包含。字段包括出生行政区、性别、年龄段、职业、宗教、主题、时长、文件名与泰米尔文转写，另附每条话语的 IPA 标注。文件命名将现居地、出生行政区、年龄与性别组合后经 MD5 哈希，外加 3 位序号保证唯一。全体受试者均签署知情同意并匿名处理，数据以 CC BY-NC 4.0 许可限于非商业研究使用。

### 语音切分、转写规范与文件匿名化的具体规则

CSV 的自包含设计决定了可按属性筛选与复现，下表以 Kilinochchi 示例展示字段取值。该精简表保留原表 11 行中的 5 行与全部 2 列，用于说明文件名、地区、年龄与时长的关联。阅读时注意转写与 IPA 均为截断显示，完整文本存于仓库，下段将逐项解释。这种设计兼容标准识别流程，便于按出生地、性别或主题筛选子集。

| Field | Value |
| --- | --- |
| File name | 0d2d12...9f850a_001.wav |
| Birth Place (District) | Kilinochchi |
| Age Band | 20-60 |
| Duration | 0:00:06 |

该表共 5 行 2 列，文件名为 0d2d12...9f850a_001.wav，转写为泰米尔文片段，IPA 为 aŋga ɨɾukkɨmbōðu...。出生地为 Kilinochchi，年龄段为 20-60，性别为 Feminine，职业为 Student，宗教为 Hindu，主题为 School，时长为 0:00:06。Jaffna 地区的 IPA 先由 ThamizhiIPA-Trans 工具生成再经语言学家校验，其余地区由语言学家人工标注，以支持音系分析。

切分采用 Silero VAD v4.03，阈值为 0.5，最短语音时长为 250 ms，最短静音间隔为 100 ms，窗长为 512 个采样点，两侧各加 30 ms 填充，共得到 1,214 条话语。转写由 2 位训练有素的语言学家保留方言写法，文本经 Unicode 归一化，去除标点、特殊字符与多余空格。质量控制依靠人工抽查，双人复标留待未来完成，原文未报告一致性分数。

教学例子：取 1 秒 16 kHz 单声道样本，即 16,000 个采样点，先经上述 VAD 窗滑动判断语音存在，再按 250 ms 与 100 ms 规则保留与合并，形成独立片段后对齐泰米尔文与 IPA，最后写入 CSV 并按 MD5 规则命名。本工作无模型训练阶段，所有模型参数均冻结，仅做检索式推理，不存在梯度更新。年龄分布为一位 20 岁以下、多数 20 岁至 60 岁、一位 60 岁以上，且均参加过含母语科目的 GCE O/L 考试。

### 零样本总体误差与跨数据集对比说明了什么

评测采用 WER (词错误率) 与 CER (字错误率)，均越低越好，计分采用顾及黏着形态与泰米尔文惯例的分词，忽略标点与特殊字符并统一数字格式。所有实验使用相同单声道 16 kHz 预处理、归一化与计分流程，解码参数与语言模型使用在各行政区间保持恒定。2 模型均为零样本直接推理，未经斯里兰卡泰米尔适配。评测无人工听测，仅用自动指标，原文未报告方差、置信区间与听众规模。

下表对比 TaLK 与 IndicVoices 泰米尔语上的 WER，保留原表全部 3 行 3 列。左列为模型，中列为本文 TaLK，右列为 IndicVoices 泰米尔语。通过同模型跨数据集比较，可判断斯里兰卡变体是否更难，下段将结合另一组字级数字一起解释。该表数值越低越好，可直接读出跨数据集难度变化。

| Model | TaLK | IndicVoices-Ta |
| --- | --- | --- |
| Whisper v3 | 0.807 | 0.784 |
| MMS | 0.845 | 0.754 |

该表显示，TaLK 上 Whisper V3 为 0.807，MMS 为 0.845，前者更低。IndicVoices 泰米尔语上 Whisper V3 为 0.784，MMS 为 0.754，后者更低，说明优势随数据集翻转。字级结果来自原文完整 Table 2 (本精简表未列出)，其中 Whisper V3 的 CER 为 0.425，MMS 的 CER 为 0.342，MMS 在字级反而更优，提示词切分与空隔对 WER 影响显著。方向均为越低越好，未报告显著性检验。

结论成立依赖小样本公平比较：共 1,214 条话语，1 小时 33 分钟，同一流程与恒定解码。代价是 WER 受正字法空隔与人工标注差异虚增，例如模型将连写词拆开仍计为错误，在低资源语言中尤为明显。原文明确 WER 仅指示总体趋势而非精确语言正确性，且未验证训练场景，也未报告罗马转写 WER 的具体数值，尽管方法中提到以此分离正字法与声学误差。

### 地区误差热图与语码混合案例揭示的方言效应

总体数字掩盖了地区差异，建议沿热图自上而下阅读两列对比。左侧为 MMS，右侧为 Whisper V3，纵轴为 22 个地区，右侧色条标示 WER，浅色表示误差低，深色表示误差高。先看顶部浅色区与底部深色区，再逐行比较同地区 2 模型高低，才能避免得出片面最优结论。这种先看整体明暗再看单行胜负的顺序，有助于避免只记平均数而忽略例外。

[![原论文 Figure 2：WER per district for MMS and Whisper V3.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/b3269e29387e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speakable-2026/b3269e29387e/figure-2.png)

*论文图 2：按地区与模型划分的 WER 热图，浅色低误差深色高误差，右侧色条标示数值方向（原论文 Figure 2）。*

像素显示，横轴为 MMS 与 Whisper V3，纵轴自 Hatton 至 Puttalam 共 22 行，色条自 0.70 向 0.90 以上渐深。顶部 Hatton 为 0.771 与 0.682，Badulla 为 0.811 与 0.683，最浅。底部 Vavuniya 为 0.943 与 0.892 最深，Matara 为 0.914 与 0.850 次深。Whisper V3 在多数行低于 MMS，但 Kalutara、Kilinochchi、Jaffna、Anuradhapura 与 Puttalam 共 5 行 MMS 更低，因此绝不能写全面高于。

原文指出 Hatton、Moneragala 与 Badulla 对 2 模型均相对较低，推测因其语音更接近模型主训的印度泰米尔。摘要报告 Whisper 平均 WER 范围为 0.672 至 0.903，热图像素显示 Whisper 列为 0.682 至 0.897，原文如此报告，存在字面算术出入，原文未解释，此处以像素为准。更关键的是每区仅一位说话人，地区效应与语速、发音风格及录制差异完全混杂，原文也强调差异仅为初步指示而非系统性方言证据。

误差分析给出典型语码混合案例。参考转写为泰米尔文长句，ASR 输出混入 English Medium、Difficult 与 Sometimes 等英语与罗马拼写，并保留泰米尔与格标记 ku 接于 lecture 之后。Whisper V3 常将数字与教育术语转写为英语，推高以泰米尔文为参考的 WER。IPA 层为未来方言音系分析预留了可能，但本文未展开基于音素的量化，罗马转写 WER 亦未报告数值。

### 单人单地区设计的边界与复现使用的前提

#### 版本边界与地区差异的谨慎解读

当前版本明确不支撑模型训练，体量仅 1 小时 33 分钟与 1,214 条话语，评测限于零样本。每区仅一位说话人，无法将地区方言效应与个人发音速度、咬字风格或录音差异分离，按地区排序的 WER 差异只能视为指示性，不宜直接解读为确定性方言等级。正字法弹性会进一步抬高误差，例如连写与分写在语言学上正确却被计为错误，在黏着语中难以避免，因此 WER 应理解为总体趋势而非精确语言正确性。

#### 数据形态与可复现环节

论文报告数据已按 16 kHz 单声道 WAV 格式统一，切分与计分流程均有文档。切分采用 Silero 语音活动检测，阈值为 0.5，最短语音 250 ms、最短静音 100 ms、窗口为 512 个采样点并保留 30 ms 填充，共得到 1,214 条话语。转写由 2 名受训语言学家以保留方言的泰米尔文完成，贾夫纳地区 IPA (国际音标) 先由 ThamizhiIPA-Trans 工具生成再经语言学家核对，其余地区由语言学家手工标注，并经统一码规范化与标点多余空格清理。

元数据以单个 CSV 文件存储，每行对应一个音频文件，含出生地区、性别、年龄段、职业、宗教与主题等说话人信息，以及录音时长、文件名与泰米尔文转写，音频文件名与表格条目直接对应。文件名采用 MD5 散列，将现居地、出生地区、年龄与性别组合为输入字符串再附加 3 位序号以保证唯一并便于追踪命名差错。许可为 CC BY-NC 4.0，限非商业研究、评估与学术使用且须署名引用，论文给出 GitHub 仓库链接，第三方存档显示该链接可达，但第三方可达不证明作者运维状态。

计分采用 WER (词错误率) 与 CER (字符错误率)，考虑泰米尔语黏着形态与文字惯例，忽略标点并对数字做一致归一化。所有实验采用同一音频预处理、归一化与计分流程，解码参数与语言模型使用在各地区间保持恒定并记录以保证可复现，复现时须沿用同一流程以保证按地区比较的公平性。

#### 适用范围与扩展方向

所有参与者均在录音前签署知情同意并经匿名化处理。扩展方向包括每区纳入多位说话人并平衡人口学构成，增加更长自然对话时长，引入不同噪声与通道，并在合规与知情同意下汇集 YouTube 等公开来源。工程选型上，该集适合做方言稳健性的小规模诊断与横向比较，不适合直接训练。若需部署，应另寻大规模数据适配，并重点处理语码混合、数字归一化与空隔规范，必要时结合 IPA 做音系级诊断。

原文未提供试听页与主观听测，无 MOS (平均意见分) 可对照。复现核对应以 WER 与 CER 为准，跨表比较显示 2 模型在 TaLK 上的 WER 均高于在 IndicVoices 泰米尔语上的对应值，说明斯里兰卡泰米尔语更难。同时模型间相对优劣随数据集而变，Whisper 在 TaLK 上 WER 更低，而在 IndicVoices 泰米尔语上 MMS 的 WER 更低，因此不宜跨数据集直接排名。引用时应注明单人单地区与小样本前提，避免将初步地区差异解读为确定性方言等级。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：单声道 16 kHz WAV，受控室内录制，Silero VAD v4.03 切分，阈值 0.5，最短语音 250 ms，最短静音 100 ms，窗长 512 个采样点，填充 30 ms，共 1,214 条，总时长 1 小时 33 分钟，原始采样与量化细节原文未披露
- **训练与评测数据**：无模型训练阶段，仅零样本评测，评测集为 TaLK 语料 22 个行政区 22 位说话人 1,214 条泰米尔语话语，另对比 IndicVoices 泰米尔语，语种为斯里兰卡泰米尔语，划分均为整集评测，训练规模不适用
- **算力与训练耗时**：原文未披露训练硬件与耗时，无模型训练阶段，仅冻结推理，推理所用硬件型号与数量原文未披露
- **核心超参数与配置**：无优化器与学习率等训练超参，切分参数见信号规格，解码参数与语言模型使用恒定但具体取值原文未披露，温度与损失权重原文未披露
- **推理速度与部署开销**：RTF、延迟、吞吐、显存与参数量原文未披露，仅报告 WER 与 CER，采样步数与缓存策略原文未披露，解码方式恒定
- **开源产物与协议状态**：论文报告数据仓库链接与 CC BY-NC 4.0 许可，数据含切分音频与转写，模型权重沿用公开 Whisper 与 MMS，代码与操作说明覆盖原文未披露，第三方存档显示链接可达
- **附录与补充材料要点**：原文未设附录，许可限制与失效案例已在正文说明，补充的语码混合与空隔误差讨论见结果分析，仓库说明与参考文献为复现依据

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**5.9/10** | 创新 6.7/10 | 技术严谨 5.7/10 | 实验充分 5.9/10 | 清晰度 5.5/10 | 影响力 5.2/10 | 开源 0.0/10 | 可复现 6.2/10 | 工程/实践 6.0/10
- 排名：后50% | 文档类型：数据集与基准
- 会议身份：`conference:speakable:2026:conference-paper-id:2026.speakable-1.21`
- 会议来源：[官方记录](https://aclanthology.org/2026.speakable-1.21/) · [官方 PDF](https://aclanthology.org/2026.speakable-1.21.pdf)
- DOI：`10.18653/v1/2026.speakable-1.21`
- Track：SPEAKABLE 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首次覆盖斯里兰卡22个区每区1位母语者共1214条自发语音，同步提供泰米尔文与IPA及自包含元数据。

- 核心优势：在统一预处理与泰米尔感知评分管线下对比Whisper V3与MMS，给出0.672到0.903分区波动与跨数据集更难证据。

- 核心优势：披露Sony与DJI采集、Silero VAD v4.03参数、16kHz标准化、Unicode归一化与MD5匿名及CC-BY-NC伦理许可。

- 主要短板：每区仅1位说话人无法分离地区方言效应与语速发音风格，分区WER差异仅为初步指示性证据。

- 主要短板：Jaffna区IPA经ThamizhiIPA-Trans生成加校验而其余分区手工创建，双设备加降噪信道差异未做对照。

- 主要短板：总体与分区WER与CER均无置信区间与显著性检验，方法承诺的罗马字转写WER未报告数值无法核对。

---

[← 返回 speakable-2026 论文汇总](/audio-research-portal/posts/conference-speakable-2026/)
