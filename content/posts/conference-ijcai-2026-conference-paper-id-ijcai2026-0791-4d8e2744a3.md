---
title: "Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec-Synthesized Speech Deepfakes in South-East Asian Languages"
date: 2026-11-28
draft: false
description: "针对英语中心检测器在东南亚编解码伪造上大幅失效的问题，工作构建多语言多编解码器基准 SEA-CF 并提出不足 1B 的双编码器问答小模型 GARUDA，以未见条件下平均 97.59% 准确率超越大模型基线，代价是仍需域内联合训练与固定单提示模板。"
tags: ["数据集", "LoRA", "多模态学习", "语音伪造检测"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "编解码伪造在东南亚语言中的检测空白与轻量小模型方案"
paper_digest_original_title: "Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec-Synthesized Speech Deepfakes in South-East Asian Languages"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0791"
paper_digest_workbench_source_sha256: "23e82d074d7e4186a2a6342e7125697fc86f39062499104bd5e59d9da9f136f9"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/791"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0791.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "语音伪造检测"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对英语中心检测器在东南亚编解码伪造上大幅失效的问题，工作构建多语言多编解码器基准 SEA-CF 并提出不足 1B 的双编码器问答小模型 GARUDA，以未见条件下平均 97.59% 准确率超越大模型基线，代价是仍需域内联合训练与固定单提示模板。"
paper_digest_reader_sections: [{"heading":"声码器检测器在编解码伪造与东南亚多语言面前为何失效","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"SEA-CF 重合成基准与 GARUDA 轻量问答框架总览","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"冻结双编码器经门控筛选与散度对齐后拼接送入小解码器","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"联合训练数据组合、两档参数更新与双项损失权重","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"域内联合训练回升准确率而零样本大模型仍接近失效","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"语言覆盖缺口、单提示局限与复现核对前提","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Orchid Chetia Phukan"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Girish"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Mohd Mujtaba Akhtar"},{"affiliations":["机构信息未能从会议 PDF 纯文本可靠映射"],"name":"Arun Balaji Buduru"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"4d2ddddcc7a9eec5490a9b7896287d58db4593ee7ab43523dcd5a4c9f3821855","url":"/audio-research-portal/client/papers/2026-11-28/conference-4d8e2744a3b2a08c403eee13/citation.bib"},"citation.json":{"sha256":"d063df1992c3ff49839ae990181128bd271bde2f9ce26b017c7fb7b6b6ab6337","url":"/audio-research-portal/client/papers/2026-11-28/conference-4d8e2744a3b2a08c403eee13/citation.json"},"citation.ris":{"sha256":"f68a35a24256c54f860d2482773e15d88904672d130e3aa5cc166cb9584b1a7e","url":"/audio-research-portal/client/papers/2026-11-28/conference-4d8e2744a3b2a08c403eee13/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3ddb6b30bc91b55147ed7d04a2c1ad4e79b4be519eadf8d78f763e3204384565","url":"/audio-research-portal/client/papers/2026-11-28/conference-4d8e2744a3b2a08c403eee13/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0791"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/791"
paper_digest_conference_doi: "10.24963/ijcai.2026/791"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/791"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0791.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "b78ccda1858c38abc825e2780240acae52f8df485b9b3541ecda773b1508c796"
paper_digest_api_reader_plan_sha256: "45e473605b612ec50d9706a056203c31306e212fc70b9fa07a556306c3a5434e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7eb4daae33a4dc3b2723b912e18ac488ca90fc9a28a7e760ad7e7f956f3b5300"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d2a6757978f663f60b82fdcb8995f0228cbf0e13cb7d58c39521c37d42e1659a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d70c159b92874fd5a21a11126eed100b14266878592934589bf3836dc3566f3a"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1fee0e9edba25f8049a5d92190d0351d7d2d760b206eff1418c4b48691ec0c07"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
paper_digest_scoring_contract: "api-scoring-audit"
paper_digest_scoring_schema_fingerprint: "bb0ed84531dfdde82b493a3463062fd1cdfe6416d1d35fb8b41d6e2537a6bfd4"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 编解码伪造在东南亚语言中的检测空白与轻量小模型方案

> 英文题目：*Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec-Synthesized Speech Deepfakes in South-East Asian Languages*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0791`
> DOI：`10.24963/ijcai.2026/791`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/791) · [官方 PDF](https://ijcai.org/proceedings/2026/0791.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-research-portal/papers/?concept=task.speech-spoofing)
- **研究方法**：[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **研究产物**：[数据集](/audio-research-portal/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.7/10** | 创新 6.4/10 | 技术严谨 7.3/10 | 实验充分 7.9/10 | 清晰度 5.5/10 | 影响力 7.0/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Orchid Chetia Phukan：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Arun Balaji Buduru：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

**问题与瓶颈：** 本文处理编解码伪造检测，输入为语音波形，输出为真或伪二分类判定。主流检测器多在声码器合成数据上训练，而音频语言模型依赖神经音频编解码器编码生成语音，其伪影分布与声码器差异明显，导致已有模型跨机制泛化困难。东南亚覆盖 7 亿以上人口，涉及南岛、孟高棉、台卡岱与汉藏等多语系，音位、声调与韵律多样性突出，而现有编解码伪造基准仅覆盖英语与汉语，东南亚语言完全缺位。同期东南亚语音伪造工作仅限声码器且数据集未公开，无法评估编解码路径风险。

**核心思路与方法架构：** 与单编码器大模型微调基线相比，本文增量在于冻结语义与韵律双编码器并以詹森香农散度对齐后接入轻量解码器做问答式判定，其余编解码重建流程保持不变。真实源覆盖泰米尔语、印地语、泰语、印度尼西亚语、马来语与越南语，伪造由 \(q = F(s)\) 与 \(\hat{s} = G(q)\) 重建得到，内容与说话人保持而引入编解码器特有伪影。GARUDA 冻结 Whisper 基础版约 74M 参数与 x-vector 约 4.2M 参数，各输出 512 维表示，经核尺寸为 3 的一维卷积加最大池化与 S 形门控筛选，再以温度系数 0.5 的软最大值转为分布并计算对齐损失。对齐后拼接经 90 个神经元全连接层映射为连续前缀，与固定提示词共同输入 0.5B 参数的 Qwen2 解码器，仅预测 fake 或 real 一词，最终目标为 \(L_{total} = L_{LM} + \lambda L_{JS}\)，其中 \(\lambda\) 为 0.4。

**关键实验与核心代价：** 在可见编解码器条件下混合训练 CodecFake 与 SEA-CF 并分别测试时，GARUDA-FT 在 SEA-CF 上准确率 ACC ↑ 为 99.36% 且等错误率 EER ↓ 为 1.68%，在 CodecFake 上为 98.41% 与 2.78%，平均 98.89% 与 2.23%，高于微调后 Qwen2-Audio-Base 的平均 94.47% 与 5.58%。零样本下 Qwen2-Audio-Base 在 CodecFake 上仅 8.41% 与 91.53%，在 SEA-CF 上仅 19.48% 与 80.47%，而仅在 CodecFake 上训练的 AASIST 从 94.08% 与 6.76% 跌至 SEA-CF 上的 70.65% 与 28.13%，证实跨语言跨机制泛化失效。未见编解码器下 GARUDA-FT 平均仍达 97.59% 与 2.70%，保持最优但较可见条件下降。代价方面，投影与 LoRA 参数合计约 110M，总量仍小于 1B，平均推理耗时为 1.21 秒，低于微调后 Qwen2-Audio-Base 的 12.32 秒。本文仅以 ACC 与 EER 为依据，未做听感评测。

**适用边界与深读导览：** 结论成立依赖域内混合训练与重建式编解码伪造，未覆盖纯文本提示生成语音、真实网络压缩与未见语种等部署场景。泰米尔语与印地语归入东南亚基准的口径与地理界定存在出入，原文沿用 SEA-Spoof 语言集合但未解释。深读可查下方方法概述中的双编码器与损失公式，以及实验结果中可见与未见划分对照表。

## 🔗 开源与复现资源

- 论文所列链接：<https://helixometry.github.io/SEACodecFake/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/CodeVault-girish/Neural-Codecs> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 声码器检测器在编解码伪造与东南亚多语言面前为何失效

#### 威胁来源与检测断层

近年来文本转语音与声音转换系统已能生成高度逼真的人声，在客服、医疗与娱乐中带来便利，也在数字银行与电子政务等场景放大冒充与欺诈风险。传统伪造多依赖声码器将声学特征转为波形，而编解码伪造则由音频语言模型经神经音频编解码器完成离散编码与重建，例如 AudioLM 采用 SoundStream 做标记化与合成。两类合成在痕迹分布上存在本质差异，导致在声码器数据上训练的检测器遇到编解码伪造时性能明显下滑，亟需针对编解码伪造的专用基准与方法。若缺乏此类数据与轻量可部署方案，低资源语言社区将持续暴露于高仿真欺诈之下。

已有编解码伪造基准由英语语料起步，后续扩展至中文，但仍集中于高资源语言。东南亚地区拥有超过 700,000,000 人，覆盖南岛、孟高棉、台卡岱与汉藏等多个语系，包含马来语、印尼语、他加禄语、越南语、高棉语、泰语、老挝语与缅甸语等，声调、音节结构与韵律组织差异显著。这些语言在声调有无、音节复杂度与语速韵律上各不相同，同一编解码器在不同语言上留下的可辨痕迹强度也不一致。跨语言研究已显示检测能力会随语言切换而下降，英语中心模型难以直接搬运，而同期面向东南亚的 SEA-Spoof 仅覆盖声码器路径且尚未公开，无法用于评估编解码伪造。

本文所用 SEA-CF 覆盖泰米尔语、印地语、泰语、印尼语、马来语与越南语 6 种语言，真实语音取自多语种公共语料、印尼语大规模语料、泰方言语料、越南语语料、马来会话语料与印度语言基准语料。这种组合兼顾语系差异与说话人多样性，使每种语言都有充足的真实语音可供重合成对照，也为检验模型在声调语言与非声调语言上的稳定性提供基础。

#### 基准构造与评测思路

本文把检测形式化为二分类问答，输入为一段待判语音波形，输出为一词判定，真或假。基准构造采用受控重合成流程，给定真实波形 \(s\)，编码器 \(F\) 将其映射为离散隐表示 \(q\)，再经解码器 \(G\) 重建为波形，记为对应伪造样本。该过程保留语言内容与说话人特征，同时注入各编解码器特有痕迹，由此形成一一对应的平行数据。为检验跨编解码器泛化，评测区分已见条件与未见条件，前者训练与测试使用同一组编解码器，包括 SNAC 系列、DAC 系列、EnCodec、SoundStream 与 SpeechTokenizer，后者测试仅用训练未见过的 FunCodec 系列、AudioDec 系列与 MIMI 合成。性能以 ACC（准确率，越高越好）与 EER（等错误率，越低越好）衡量，前者反映整体判对比例，后者反映误接受与误拒绝平衡点。

英语中心检测器在东南亚语音上失效，既有声学原因也有部署原因。声学上，声调语言的基频走向、元音分布与语速韵律与英语差异明显，编解码器痕迹与这些结构相互交织，域外模型易把语言差异误判为真伪线索。部署上，欺诈检测需在低资源与低延迟条件下运行，大规模音频语言模型虽经微调可提升准确率，但参数量与推理耗时难以满足实时拦截需求。因此，工作同时提出覆盖多语言多编解码器的公开基准与参数量不足 1B 的小模型方案，以兼顾泛化能力与实用成本，并呼应缩小语言与区域差距的社会目标。

印地语与泰米尔语沿用已有印度语言基准的训练、验证与测试划分，其中已知测试集用于已见评测，未知测试集用于未见评测，其余语言按 8:1:1 随机划分训练、验证与测试，并在重合成全程保持划分不变以防数据泄露。这种划分使同一说话内容在不同编解码器下仍保持对应，便于分离语言因素与编解码器因素。结合多语种平行数据与已见未见对照，基准既能暴露英语中心模型的域外衰减，也能检验联合训练与轻量建模是否真正带来稳健提升。

### SEA-CF 重合成基准与 GARUDA 轻量问答框架总览

SEA-CF 覆盖泰米尔语、印地语、泰语、印尼语、马来语与越南语 6 种语言，真实语音取自已公开语料。为保证与既有东南亚研究可比，多数语言沿用 SEA-Spoof 的来源组合，包括多语言 Mozilla Common Voice、面向印尼语的 GigaSpeech2、泰方言语料与越南语 VIVOS。马来语合并对话式马来语料与经 Whisper-Large 处理的马来西亚视频数据，泰米尔语与印地语则采用规模较大的 Indic-SUPERB，并在后者预设的训练、验证与测试划分上直接生成伪造。划分在生成全程严格保持，防止同一说话人或同一句话的真伪版本跨集泄漏，从而保证已见与未见评测的可信度。

伪造经 8 类神经音频编解码器重合成，涵盖 DAC 的 16 kHz、24 kHz 与 44 kHz 配置，Encodec 的 24 kHz 与 48 kHz 模型，16 kHz 的 SoundStream、默认 16 kHz 的 SpeechTokenizer、官方 16 kHz 的 FunCodec、28 kHz 与 48 kHz 的 AudioDec、24 kHz、32 kHz 与 44 kHz 的 SNAC，以及 24 kHz 的 MIMI。对每条真实语音均用全部所选编解码器逐一重建，形成一一对应的平行样本。已见评测使用 SNAC 系列、DAC 系列、Encodec、SoundStream 与 SpeechTokenizer，未见评测仅用 FunCodec 系列、AudioDec 系列与 MIMI。除印地语与泰米尔语沿用预设划分外，其余语言按 8 : 1 : 1 随机切分训练、验证与测试。全部编解码器汇总于同一仓库并提供易用调用流程，便于复现采样率设置与生成条件。

GARUDA 把检测重构为音频问答，输入语音同时送入冻结的 Whisper 编码器与 x-vector 编码器，前者依托大规模语音文本预训练捕捉语义与语言内容，后者依托说话人辨别预训练捕捉音高与声调等韵律线索。两路表示经一维卷积、最大池化、展平与 S 形门控筛选后做散度对齐，再拼接并经全连接映射为连续前缀，与提示词分词嵌入一同送入 Qwen2-0.5B 解码器。模型只需生成一词，真或假，训练在 CodecFake 与 SEA-CF 联合训练集上进行，兼顾英语、中文与东南亚语言。编码器冻结意味着预训练知识直接复用，训练只调整映射与解码器侧，从而降低数据需求。

与基于 7B 解码器的大模型相比，GARUDA 的解码器仅 0.5B 量级，编码器、映射与适配参数合计约 110,000,000，总量仍不足 1B，且散度项仅为损失函数不增加参数。原文在已见测试集上统计平均推理耗时，微调后的大模型约 12.32 秒，GARUDA 微调版仅 1.21 秒。帧长、步长、卷积通道数与码率等细粒度信号规格原文未披露，1 秒样本的中间帧率因此无法精确还原，但 512 维池化向量与 90 神经元映射等关键维度已有明确记载。缺失细节不影响主流程复现，精确还原每秒帧数时需查阅各编解码器原始仓库的默认配置。

### 冻结双编码器经门控筛选与散度对齐后拼接送入小解码器

为一次看清双分支如何汇合，建议先沿底部波形向上追踪左右两条编码路径，注意冻结标记位置与特征块颜色，再看中部一维卷积与门控如何筛选信息，以及 JS 模块如何横向约束两路分布，最后看顶部拼接特征与提示词嵌入如何共同进入语言模型。下图给出完整结构，后文以 1 秒输入为例逐步拆解形状变化与汇合点，全部描述均以本次收到的原图像素为准。

[![原论文 Figure 1：Proposed Framework: GARUDA](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/0693bc5204c5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/0693bc5204c5/figure-1.png)

*论文图 1：GARUDA 双分支问答框架：冻结语义与韵律编码器经门控与散度对齐后拼接送入小语言模型（原论文 Figure 1）。*

图中底部中央为波形图标，分出两路箭头指向左侧 Whisper 编码器粉色块与右侧 x-vector 编码器紫色块，左上角各带雪花标记表示冻结。上方黄色与红色特征条经蓝色一维卷积与最大池化盒、灰蓝展平盒后，各接 S 形圆圈回路与相乘圆圈，横向灰色 JS 盒连接两路。更上为浅蓝拼接层、绿色语言模型层与浅紫输出层，右侧橙色提示词盒经青绿分词与嵌入盒纵向进入语言模型，左侧两条虚线分别标出散度损失与语言建模损失汇成总损失并回传。

以 1 秒 16 kHz 输入为例，波形约含 16,000 个采样点，同时进入两路冻结编码器。Whisper 基础版约 74,000,000 参数，x-vector 约 4,200,000 参数，各经平均池化输出 512 维向量，分别保留语义与韵律的互补信息。随后每路经核长为 3 的一维卷积与最大池化压缩时序，再展平为一维特征并乘以自身经 S 形函数生成的门控系数，实现重要通道增强与次要通道抑制。原文未披露卷积通道数与池化步长，故中间帧数无法精确推算，但输入输出维度与门控相乘位置已有明确交代，足以定位拆分与汇合点。展平后特征经全连接前已具备紧凑判别维度，为后续散度计算提供可比载体。

门控后两路特征记为 \(x\) 与 \(y\)，为缓解异构表示的分布错位，方法先经温度缩放的柔性最大值归一化转为按特征维度的分布，温度系数取 0.5，越小越尖锐，越大越平滑。再构造两者均值分布并计算双向相对熵的平均，即 JS 散度，取值越小表示两路越一致。该对齐损失与语言建模损失按权重 0.4 加权相加，共同驱动映射层更新。对齐后两路拼接并经 90 神经元全连接投影为语言模型前缀，配合提示词 Is the speech sample fake or real？Reply in one word fake or real 引导解码器只输出一词判定，温度与权重均经验证集初试确定。微调解码器后幻觉有所缓解，前缀与提示词协同更贴合下游目标。

### 联合训练数据组合、两档参数更新与双项损失权重

训练采用 CodecFake 与 SEA-CF 联合训练集，前者覆盖英语与中文，后者覆盖泰米尔语、印地语、泰语、印度尼西亚语、马来语与越南语共 6 种语言。论文说明保留英语与中文的原因是新加坡同时使用这两种语言，因而联合训练可同时见到高资源语言的编解码痕迹与东南亚语言的声调韵律结构。两部分均保留各自预设划分，印地语与泰米尔语沿用 Indic-SUPERB 既有划分，其余语言按 8:1:1 重建平行数据，验证集用于初选温度与对齐权重。这种组合为已见与未见评测提供统一训练起点，避免仅在单一基准上过拟合。

#### 联合数据与训练分档

训练分两档执行，第一档仅更新映射模块，含一维卷积块、门控筛选与全连接网络，训练 5 轮，批大小为 32，学习率为 0.0001。第二档在映射基础上再以低秩适配微调语言模型解码器，训练 3 轮，批大小仍为 32，学习率降为 0.00001。低秩适配秩取 8，缩放因子取 32，仅插入解码器查询与值投影层，避免全量微调的显存与时间开销。两档均使用 AdamW 优化器并配随机失活防止过拟合， Whisper 与 x-vector 编码器全程冻结。

双编码器分工明确， Whisper 取自多语言多任务预训练的语音识别目标，基础版含 74M 参数，经平均池化输出 512 维表示，侧重语义与语言内容。 x-vector 取自说话人识别预训练的时延网络，在 VoxCeleb1 与 VoxCeleb2 上训练，约含 4.2M 参数，同样输出 512 维表示，侧重音色与韵律线索。两路表示先经核长为 3 的一维卷积与最大池化压缩时序，再展平送入 S 形门控做选择性过滤，使重要信息进入拼接，避免单分支主导。

#### 对齐损失与问答监督

为约束异构表示在拼接前协同，论文引入基于温度缩放柔性化的杰森香农散度对齐项，总目标满足 \(L_{total}=L_{LM}+\lambda L_{JS}\)，其中 \(\lambda=0.4\)，温度 \(\tau=0.5\)，均经验证集初试确定。该项先将两路特征经柔性化转为按维分布，再度量其与混合分布的差异，取值越小表示两路越一致。极端下若温度过大则分布趋平，对齐约束减弱，若权重过大则可能压制主任务。对齐项本身无可训练参数，不增加容量，仅以梯度影响卷积与门控的筛选行为。

拼接后表示经 90 单元全连接网络投射到解码器嵌入空间，以连续前缀形式注入，实现音频特征与语言推理的衔接。问答监督将检测转为单轮提问，提示词全程固定为英文原文一模板，只监督输出中真或假一词的负对数似然，促使前缀特征与提示嵌入协同指向正确判定。实验使用 A100 GPU（图形处理器），原文未披露具体数量、总步数与耗时，推理硬件与并发条件同样未说明。冻结边界清晰，映射模块始终可训，解码器仅在第二档以低秩方式可训，轻量版已具较强性能，微调版进一步缓解幻觉并贴合下游任务。

### 域内联合训练回升准确率而零样本大模型仍接近失效

评测统一以 ACC（准确率，越高越好）与 EER（等错误率，越低越好）报告，单位均为百分比，区分已见与未见两种编解码器条件。训练规模、采样率与划分策略在联合训练下保持一致，公平性前提较为清晰。先看跨域代价，在 CodecFake 上训练的 AASIST 架构在原域约达 94.08% 准确率与 6.76% 等错误率，直转 SEA-CF 时跌至 70.65% 准确率与 28.13% 等错误率（原文完整 Table 1，本精简表未列出），降幅直观说明英语中心痕迹在声调与韵律差异面前难以搬运，域内训练不可或缺。

零样本下大音频语言模型几乎不可用，Qwen-Audio 系列与 SeaLLMs-Audio-7B 在 2 基准上准确率仅 3.72% 至 19.48%，等错误率高达 80.25% 至 94.67%，即使专为东南亚调优的 7B 模型仍弱于 Qwen2-Audio-Base（原文完整 Table 1，本精简表未列出）。域内联合训练后，传统基线与微调大模型明显回升，MiO 依托双编码器互补取得较好起点，微调 Qwen2-Audio-Base 进一步拉开差距，而 GARUDA 在仅训练映射时已超越 7B 微调版，微调解码器后在已见条件下达 98.41% 与 99.36% 准确率。下表呈现未见条件下的完整对照，表头在源提取中存在合并错位，数值仍按源矩阵原样保留。

| Method | SEA-CF ACC ↑EER ↓ACC ↑ |  | CF[Lu et al., 2024a] | EER ↓ | Avg ACC ↑EER ↓ |  |
| --- | --- | --- | --- | --- | --- | --- |
| MiO | 85.55 | 13.91 | 93.44 | 7.77 | 88.50 | 10.84 |
| Qwen2-Audio-Base-FT | 92.08 | 8.15 | 93.26 | 5.42 | 92.67 | 6.79 |
| GARUDA | 92.97 | 6.88 | 94.60 | 5.71 | 93.79 | 6.30 |
| GARUDA-FT | 97.11 | 3.17 | 98.06 | 2.23 | 97.59 | 2.70 |

未见测试集中 GARUDA 微调版在 SEA-CF 上达 97.11% 准确率与 3.17% 等错误率，在 CodecFake 上达 98.06% 准确率与 2.23% 等错误率，平均 97.59% 与 2.70%，经同表同列逐格核对均为本表最优。未微调的 GARUDA 以 92.97% 与 6.88% 居次，仍高于微调后的 Qwen2-Audio-Base 与 MiO，说明双分支加散度约束在未见编解码器下保持稳定。MiO 仅 85.55% 与 13.91% 的起点表明单靠传统融合不足以应对全新编解码痕迹，而散度对齐与小解码器问答的组合带来实质增益，代价是仍需域内联合数据支撑。

数据量缩减实验显示，用 75%、50% 与 25% 训练时 GARUDA 微调版仍保持领先，例如 25% 下平均准确率仍达 94.15%（原文完整 Table 1，本精简表未列出），体现小模型在有限数据下的稳健性。配对 McNemar 检验在 2 基准上对比最强基线均得远小于 0.05 的 p 值，SEA-CF 上为 0.0047 与 0.00021，CodecFake 上为 0.0003 与 0.00019，表明增益非随机波动。不足在于全篇无人工听测，仅以分类指标衡量，未报告方差与置信区间，且 SeaLLMs-Audio-7B 虽经东南亚调优零样本仍偏弱，KL 对齐与简单拼接等变体也未超越 JS 版本，提示融合方式选择至关重要。

### 语言覆盖缺口、单提示局限与复现核对前提

SEA-CF 尚难称全覆盖东南亚，当前 6 种语言之外，他加禄语、高棉语、缅甸语与老挝语等仍未纳入，语系多样性只实现部分取样。论文所列区域语言分属南岛语系、南亚语系、台卡岱语系与汉藏语系，各具不同声调与韵律结构，现有 6 语组合尚未穷尽这种差异。因取样有限，跨语系泛化结论仍需谨慎理解，未来需优先补足缺失语言，方能更完整评估防御覆盖。

#### 覆盖缺口与评测边界

由于 SEA-Spoof 尚未公开，跨生成器评测限于编解码器内部的已见与未见划分。已见侧含 SNAC 系列、 DAC 系列、 Encodec、 SoundStream 与 SpeechTokenizer，未见侧含 FunCodec 系列、 AudioDec 系列与 MIMI，测试集以是否见过编解码器划分，未检验声码器与编解码器混合攻击下的通用性。提示词固定为单模板，未做措辞方差研究，问答增益对其他表述的可迁移性仍待验证，未来需补充多模板对比与自然语言解释能力，以方便非专业用户理解判定依据。

实用部署仍有前提，微调后大模型平均耗时为 12.32 秒， GARUDA 微调版仅为 1.21 秒，统计口径为已见测试集整体平均，未说明单条音频时长分布、批大小与硬件并发条件，低延迟场景的尾部耗时与流式开销原文未披露。模型总量不足 1B，映射与低秩部分约 110M，解码器为 0.5B，但峰值显存与实时系数原文未给出，实际选型需在目标设备上重测。未见编解码器虽已单独设测，真实流程可能混合未知压缩与信道失真，其稳健性超出当前评测范围，不宜直接外推到全链路风控。

#### 部署条件与复现选型

复现核对需区分三件事，论文正文称数据集、代码与评测资源见演示页，并给出编解码器汇总仓库链接，但权重下载地址、许可条款与可直接运行状态原文未单独说明。研究者应先按演示页指引准备真实语料与 8 类编解码器环境，再对泰米尔语与印地语沿用预设划分、其余语言按 8:1:1 重建一对一平行数据，最后核对冻结边界与两档训练配置。演示页可用于对照真伪示例与基线现象，不宜据此推断听感优劣，实际听辨仍需受控人工测试，且不得虚构网址与听感结论。

工程选型上，若资源极度受限可先用仅训练映射的 GARUDA，其已超越 7B 参数微调版且无需触动解码器，适合快速验证。若追求最高准确率并能承担低秩微调成本，则选用 GARUDA 微调版，其在已见与未见条件下均领先，但需保留域内联合数据。若直接复用英语中心模型而不补东南亚数据，准确率将从 94.08% 降至 70.65%，等误率从 6.76% 升至 28.13%。后续扩展应优先补足缺失语言与混合生成器评测，再考虑提示词鲁棒性与可解释输出，以形成更完整的防御闭环。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：DAC 支持 16 kHz、24 kHz 与 44 kHz，Encodec 支持 24 kHz 与 48 kHz，SoundStream 为 16 kHz，SpeechTokenizer 为默认 16 kHz，FunCodec 为官方 16 kHz，AudioDec 支持 28 kHz 与 48 kHz，SNAC 支持 24 kHz、32 kHz 与 44 kHz，MIMI 为 24 kHz；帧长与步长、码率、通道数与前瞻延迟原文未披露；推理延迟见推理代价字段
- **训练与评测数据**：训练采用 CodecFake 与 SEA-CF 联合训练集，前者覆盖英语与中文，后者覆盖泰米尔语、印地语、泰语、印尼语、马来语与越南语 6 种语言；真实来源含 Mozilla Common Voice、GigaSpeech2、泰方言语料、VIVOS、对话式马来语料与马来西亚视频数据及 Indic-SUPERB；其余语言按 8 : 1 : 1 切分，印地语与泰米尔语沿用预设划分，已见用 5 类编解码器，未见用 3 类
- **算力与训练耗时**：原文披露使用 A100 GPU 训练，未给出设备数量、步数与总耗时，推理硬件与并发条件原文未披露
- **核心超参数与配置**：仅训练映射时 5 轮、批大小 32、学习率 0.0001，联合微调解码器时 3 轮、批大小 32、学习率 0.00001；LoRA 秩 8、缩放因子 32，仅插入查询与值投影层；AdamW 优化器加 dropout，温度 0.5、权重 0.4，Whisper 基础版约 74,000,000 参数，x-vector 约 4,200,000 参数，解码器为 Qwen2-0.5B，映射全连接 90 神经元，卷积核长 3
- **推理速度与部署开销**：总参数不足 1B，编码器加映射与适配约 110,000,000，解码器 0.5B，散度项不增加参数；已见测试集平均推理耗时微调大模型约 12.32 秒，GARUDA 微调版仅 1.21 秒，峰值显存与实时系数原文未披露
- **开源产物与协议状态**：论文正文列出演示页与编解码器汇总仓库链接，称数据集、代码与评测资源见演示页；权重下载地址、许可条款与可直接运行状态原文未单独说明
- **附录与补充材料要点**：原文未设独立附录；局限在正文末节说明未覆盖全部东南亚语言、SEA-Spoof 未公开致跨生成器评测受限、单提示模板未做方差研究，未来计划扩展语言与可解释推理能力

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.7/10** | 创新 6.4/10 | 技术严谨 7.3/10 | 实验充分 7.9/10 | 清晰度 5.5/10 | 影响力 7.0/10 | 开源 0.0/10 | 可复现 6.5/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：数据集与基准
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0791`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/791) · [官方 PDF](https://ijcai.org/proceedings/2026/0791.pdf)
- DOI：`10.24963/ijcai.2026/791`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：首个覆盖6语种8类神经编解码器多采样率的SEA-CF平行重建基准，8:1:1全程保持划分并沿用Indic预设test-known与test-unknown防泄漏。

- 核心优势：可见与未见双条件下GARUDA-FT均列最优且配对McNemar检验p远小于0.05，单编码器与拼接无对齐及交叉注意力与KL及JS直接消融分离互补与对齐贡献。

- 主要短板：未见测试表MiO平均ACC报告88.50%与分项均值89.50%算术不一致且原文未解释，构成表内算术自相矛盾。

- 主要短板：生成样本均为编解码重建而非文本提示完全生成语音，仅用单一提示词模板且未覆盖真实网络压缩与未见语种具体数值。

- 主要短板：平均推理耗时1.21秒对比12.32秒未说明批量音频时长与硬件配置口径，无法核对端到端部署延迟与可复现性。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
