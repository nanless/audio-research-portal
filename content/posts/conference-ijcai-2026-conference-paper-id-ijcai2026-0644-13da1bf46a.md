---
title: "Detect, Attend and Extract: Keyword Guided Target Speaker Extraction"
date: 2026-11-28
draft: false
description: "针对无干净注册语音时难以指定目标说话人的问题，本文提出以短关键词为线索的检测注意提取框架，仅用 4 个词在 Libri2Mix 上取得 16.45 dB 提升与 98.98% 准确率并实现约 100 ms 定位，代价是整体感知总分未胜出且结论限于双人全重叠干净英语。"
tags: ["注意力机制", "多任务学习", "关键词检测", "目标说话人提取"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "以短关键词替代注册语音的目标说话人提取"
paper_digest_original_title: "Detect, Attend and Extract: Keyword Guided Target Speaker Extraction"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0644"
paper_digest_workbench_source_sha256: "de944a690b227a2551a5ddac83a9ba8ffbec2a04e0a10ff02b4f0914986ef76b"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/644"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0644.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "目标说话人提取"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对无干净注册语音时难以指定目标说话人的问题，本文提出以短关键词为线索的检测注意提取框架，仅用 4 个词在 Libri2Mix 上取得 16.45 dB 提升与 98.98% 准确率并实现约 100 ms 定位，代价是整体感知总分未胜出且结论限于双人全重叠干净英语。"
paper_digest_reader_sections: [{"heading":"无干净注册语音时目标说话人提取为何难以落地","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"检测注意提取三段式总览与两阶段训练流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"关键词引导线索编码器如何实现内容到说话人的跨越","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"频带切分主干与冻结边界下的两阶段优化","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"仅用四词关键词超越干净注册语音的证据","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"损失项关键词长度与嵌入分布的归因检验","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提代价与复现核对清单","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["School of Intelligence Science and Technology, Nanjing University, Suzhou, China","X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China"],"name":"Haoyu Li"},{"affiliations":["X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China","ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK"],"name":"Yu Xi"},{"affiliations":["National University of Singapore, Singapore"],"name":"Yidi Jiang"},{"affiliations":["School of Intelligence Science and Technology, Nanjing University, Suzhou, China","Shenzhen Loop Area Institute, Shenzhen, China"],"name":"Shuai Wang"},{"affiliations":["ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK"],"name":"Kate Knill"},{"affiliations":["ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK"],"name":"Mark Gales"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Shenzhen Loop Area Institute, Shenzhen, China"],"name":"Haizhou Li"},{"affiliations":["X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China"],"name":"Kai Yu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"7a945ce35d3a846ad36736747453914d7c996877da671d280681f7b2e89cebe4","url":"/audio-research-portal/client/papers/2026-11-28/conference-13da1bf46a7af5df7dc5e770/citation.bib"},"citation.json":{"sha256":"35a968d17b652be48cc35a6afce0171b35a951901f50a808ca925e96e63b5f51","url":"/audio-research-portal/client/papers/2026-11-28/conference-13da1bf46a7af5df7dc5e770/citation.json"},"citation.ris":{"sha256":"49466b15ed835d692ff9f85cc31f14e10d4ae7fee315d2155463f9bb9dc01476","url":"/audio-research-portal/client/papers/2026-11-28/conference-13da1bf46a7af5df7dc5e770/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2ce1255ad53c6a20ac60c3029a79ca6b2b59e2127485e1ce3edabc9ab984b235","url":"/audio-research-portal/client/papers/2026-11-28/conference-13da1bf46a7af5df7dc5e770/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0644"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/644"
paper_digest_conference_doi: "10.24963/ijcai.2026/644"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/644"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0644.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "9266e78dd5bdcccb9a0f1f7a1e69c88b850a2ade0414391d41d234bfc3c09513"
paper_digest_api_reader_plan_sha256: "357fb95c5f72d76bb5c08a252459cd31d8c207c3842ac775b662b2b12cd6ec2f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0e7b132fbb9cf76425511cd7899ddb9687bb7a8778adde6fba034bcf504ed743"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d2634814ff12ecb70a8a56665e506931b916355a315760b8e4d99cd377f76a2a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "409b1cc04aeb9f56009679077bf63eade810915fee03d929d5d2b60f7b32109d"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "29f4df45ec1611c1bd4acac84a54236b3644cd59a6674c24577695ebd015721c"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"task","id":"task.keyword-detection","label":"关键词检测"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_method: "多任务学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 以短关键词替代注册语音的目标说话人提取

> 英文题目：*Detect, Attend and Extract: Keyword Guided Target Speaker Extraction*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0644`
> DOI：`10.24963/ijcai.2026/644`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/644) · [官方 PDF](https://ijcai.org/proceedings/2026/0644.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[关键词检测](/audio-research-portal/papers/?concept=task.keyword-detection)；[音频分离](/audio-research-portal/papers/?concept=task.audio-separation) → [语音分离](/audio-research-portal/papers/?concept=task.speech-separation) → [目标说话人提取](/audio-research-portal/papers/?concept=task.target-speaker)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[多任务学习](/audio-research-portal/papers/?concept=method.multitask)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.9/10** | 创新 7.8/10 | 技术严谨 6.4/10 | 实验充分 7.2/10 | 清晰度 6.6/10 | 影响力 6.7/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 5.4/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haoyu Li：School of Intelligence Science and Technology, Nanjing University, Suzhou, China；X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China
- Yu Xi：X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China；ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Yidi Jiang：National University of Singapore, Singapore
- Shuai Wang：School of Intelligence Science and Technology, Nanjing University, Suzhou, China；Shenzhen Loop Area Institute, Shenzhen, China
- Kate Knill：ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Mark Gales：ALTA Institute, Machine Intelligence Lab, Department of Engineering, University of Cambridge, UK
- Haizhou Li：The Chinese University of Hong Kong, Shenzhen, China；Shenzhen Loop Area Institute, Shenzhen, China
- Kai Yu：X-LANCE Lab, MoE Key Lab of Artificial Intelligence, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China

## 📌 核心摘要

**问题与瓶颈：** 目标说话人提取 (Target Speaker Extraction, TSE) 需从多名竞争说话人的混合波形 x 中恢复目标波形 y，依赖提示线索 q 指明提取对象。主流路线依赖干净注册语音提取全局说话人向量，或依赖唇动与波达方向 (Direction of Arrival, DOA) 等持续辅助线索，在临时会议与语音助手交互中难以为所有潜在说话人预先注册干净语音，也难以要求目标保持固定位置或唇部持续可见。根本困难在于如何由仅覆盖约三成转录的局部关键词推断全局说话人表示，完成内容与说话人对齐后再提取整句语音。

**核心思路与方法架构：** 与干净注册语音基线相比，实质增量是用混合信号自身与短关键词转录经跨模态对齐生成的说话人向量替代外部注册向量，保留基于频带分割循环网络 (Band-Split RNN, BSRNN) 的掩码提取主干。以 16 kHz 混合语音为例，信号经短时傅里叶变换 (Short-Time Fourier Transform, STFT) 得到时频谱，另一路提取 80 维对数梅尔滤波器组 (Filterbank, FBank) 特征送入基于 Transformer 的语音编码器，关键词经音素嵌入与文本编码器得到潜在表示，在每层语音编码块中以语音为查询、关键词表示为键值做交叉注意力融合。STFT 采用 512 点窗与 128 点跳，FBank 采用 25 ms 窗与 10 ms 移，融合后多层表示经加权求和与时间平均池化得到固定维度说话人向量，该向量条件化 BSRNN 估计的复数谱掩码，相乘后经逆变换重建波形。训练分两阶段，先以连接主义时间分类 (Connectionist Temporal Classification, CTC) 语音识别损失与说话人验证损失联合训练关键词引导的线索编码器，再冻结该编码器训练提取主干，推理时若检测判定关键词缺失则直接输出静音，否则执行关注与提取，整体为整句输入的离线处理。检测阶段对末层音素级交叉注意力图做动态规划搜索，以 O (Lkw T) 复杂度求最大路径分数并与阈值比较判定存在性与起止帧。

**关键实验与核心代价：** 在 Libri2Mix 双说话人全重叠 min 版本 16 kHz 测试集上，以 4 个连续关键词约占完整转录 28.4% 为线索的 DAE-TSE 在多项指标上高于干净注册语音基线与多层说话人表示基线，尺度不变信噪比提升 (Scale-Invariant Signal-to-Noise Ratio improvement, SI-SNRi，越高越好 ↑) 为 16.45 dB，高于标准系统的 13.52 dB 与多层系统的 16.08 dB，提取准确率 (Accuracy，越高越好 ↑) 为 98.98%，高于 90.83% 与 97.18%，感知语音质量评估 (Perceptual Evaluation of Speech Quality, PESQ，越高越好 ↑) 为 2.87，高于流水线的 2.84 与标准及多层系统的 2.86，短时客观可懂度 (Short-Time Objective Intelligibility, STOI，越高越好 ↑) 为 95.18，高于标准系统的 89.51 与多层系统的 93.71，说话人相似度 (Speaker Similarity, SPK-SIM，越高越好 ↑) 为 0.982，高于标准系统的 0.967 与多层系统的 0.978，差分词错率 (Differential Word Error Rate, dWER，越低越好 ↓) 为 13.62%，低于 19.84% 与 15.14%。消融显示移除关键词感知的 CTC 损失后 SI-SNRi 从 16.45 dB 变为 3.47 dB，准确率从 98.98% 变为 70.15%，单个关键词仍达 15.34 dB，高于标准系统的 13.52 dB，而 4 个关键词与完整转录的 16.48 dB 差距可忽略，关键词定位起止误差均在 100 ms 量级。代价方面，参考无关的感知质量估计 (Deep Noise Suppression Mean Opinion Score, DNSMOS，越高越好 ↑) 总分 OVRL 为 3.14，低于流水线基线的 3.17，未形成全面领先，论文未提供人工主观平均意见分 (Mean Opinion Score, MOS) 听测，仅以客观与神经代理指标评估，且未披露推理时延与吞吐实测。

**适用边界与深读导览：** 结论成立前提为英文 Libri2Mix 双说话人全重叠混合、线索编码器预训练与主干训练说话人互不重叠、关键词在混合中可能缺失且缺失时输出静音、多名说话人说出同一关键词时随机选择其一，未覆盖三人以上、稀疏重叠、背景噪声与混响等挑战场景，论文结论亦将此类鲁棒性列为未来工作。可对照随文公开的演示页试听关键词存在与缺失时的对齐与提取现象，但不应将其视为定量证据。欲深究交叉注意力对齐与联合损失公式、检测动态规划与阈值影响、关键词长度与损失消融及嵌入可视化，可查阅下方方法概述和架构、实验结果与细节详述对应章节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/GnafiY/DAE-TSE> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 无干净注册语音时目标说话人提取为何难以落地

鸡尾酒会场景下目标说话人提取需要从多人混合波形中恢复特定说话人的干净语音。原文将混合建模为目标波形与多个干扰源波形相加，系统以一段提示线索为条件输出估计波形。传统做法依赖预先注册的干净语音，通过说话人编码器得到全局嵌入，再送入提取主干进行掩蔽估计。这种做法在注册语音缺失时难以适用，也是本文要替换的关键环节。

实际会议与语音助手交互中很难为所有潜在说话人提前采集声纹，持续的空间或视觉线索同样难以维持。到达方向估计要求目标位置相对固定，唇动特征要求人脸持续可见，这些条件在非受限环境中经常被打破。自然语言描述型分离依据性别或响度等语义属性选择声源，而关键词引导要求依据混合声中实际说出的具体词句找到说话人，两者需要的声文对应能力并不相同。

下图上半部分展示了本文设定的应用情形，红色与蓝色分别代表干扰说话人与说出唤醒词的目标说话人。红色波形对应问候语句，蓝色波形包含 Hey Siri 加后续指令，中间为叠加后的混合波形，右侧机器人气泡提出要理解说出关键词者意图的问题。下半部分给出系统输入输出关系，沿箭头可以看清从混合波形加关键词到目标波形的完整路径。

[![原论文 Figure 1：Illustration of the application scenario and objectives of the proposed DAE-TSE framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-1.png)

*论文图 1：多说话人场景与关键词提取目标示意，上为混合形成，下为系统输入输出（原论文 Figure 1）。*

像素上半左侧有两个白色轮廓头像配蓝色与橙色气泡，黑色剪影头像配声波线，红色波形短促多峰，蓝色波形延续较长，中部红蓝叠加波形同时保留两种颜色的毛刺。下半黄色虚线框内为 Hey Siri，黑色箭头与黄色箭头汇入绿色 DAE-TSE 方框，绿色箭头引出目标说话人图标与纯蓝色波形，虚线分隔上下两层语义，颜色与箭头方向均清晰可辨。

关键词引导的核心难点在于用局部语言信息推断全局说话人表示。传统注册语音直接提供与内容无关的全局嵌入，而此处只有混合波形与几个词的文本，必须先在帧级找到词句出现的位置，再把该时段的声学特征聚合成可用于全句提取的向量。这一从内容到说话人的跨越决定了后续编码器必须同时具备识别与区分说话人的能力。

### 检测注意提取三段式总览与两阶段训练流程

与最近的干净注册语音做法相比，本文保留了基于频带切分循环网络的提取主干，替换了线索来源。原先由外部说话人编码器从注册语音得到嵌入，本文改由关键词引导线索编码器从混合波形与关键词文本直接生成目标说话人向量，并新增检测与定位环节。信号规格上提取端采用 16 kHz 采样，短时傅里叶变换窗口为 512 个采样点，跳数为 128 个采样点，线索端采用 80 维滤波器组特征。

以 1 秒混合语音为例，波形含 16,000 个采样点，经短时傅里叶变换得到约 120 余帧频谱，滤波器组端以 25 ms 窗长与 10 ms 步长得到每秒约 100 帧特征。关键词如 Hey Siri 先转为音素序列，长度记为 Lkw，经音素嵌入与变换器得到文本表示，语音分支每层以语音特征为查询，以文本表示为键与值做交叉注意，最终多层输出堆叠为多层时间特征张量，再经加权汇聚压缩为一维说话人向量。

下图为框架总览，左侧为线索编码器内部结构，右侧为冻结编码器后训练提取主干的流程。沿黑色与彩色箭头可以看清关键词与混合语音如何汇入编码器，再以说话人向量为条件得到目标语音，图中雪花标记表示冻结环节，蓝色竖条与黄色编码器框的连接揭示了分层汇聚路径。

[![原论文 Figure 2：Overview of the proposed DAE-TSE framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-2.png)

*论文图 2：关键词引导线索编码器局部与冻结后训练提取主干的流程（原论文 Figure 2）。*

当前像素仅保留局部放大，下方灰色方框为音素嵌入，叠加位置编码后送入黄色变换器音素编码器，向上引出键与值标记。蓝色竖条为加权平均汇聚，箭头指向说话人分类头与说话人损失，右侧浅蓝方框为关键词引导线索编码器，输出说话人向量并指向目标语音波形，虚线为原图裁切边界，箭头颜色区分文本语音与向量路径。

训练分两段进行，先以语音识别加说话人确认目标优化线索编码器，再冻结该模块训练提取主干。推理时先检测关键词是否存在，若不存在直接输出静音，若存在则计算说话人向量并提取全句语音，若多位说话人说出相同关键词则随机选择一位作为目标，整个过程无需干净注册语音。

### 关键词引导线索编码器如何实现内容到说话人的跨越

线索编码器采用双输入变换器结构，分工明确。关键词先转为音素嵌入矩阵 \(PEKeyword\)，再经文本变换器得到文本表示 \(LEKeyword\)，负责离散文字侧的语义承载。混合语音先经对数梅尔滤波器组得到 \(EFBank\)，叠加位置编码后进入语音分支，负责连续声学侧的帧级表征。每层先做自注意形成查询 \(QSpeech\)，再以文本表示为键与值做交叉注意，输出该层语音表示与注意图，多层堆叠保留时间与特征维度，使文字信息逐层注入声学建模。

训练以语音识别与说话人确认联合驱动，互为补充。语音识别分支利用加权层表示预测含关键词的转录，采用连接时序分类损失 \(LCTC\)，迫使编码器建立声学帧与音素顺序的对应。说话人分支对各层表示以可学习权重向量 \(w\) 加权求和，再沿时间平均得到定维向量 \(ESpeaker\)，送入线性分类器计算交叉熵损失，并对权重范数加系数为 0.01 的正则项 \(LReg\)，总损失以 0.5 平衡两项 \(LKCE\)，兼顾词句内容与身份判别，避免只记内容或只记音色。

检测与定位复用最后一层音素级交叉注意图 \(MN\)，尺寸为关键词音素长度乘时间帧数，把检测转化为搜索连续高亮路径。算法以动态规划沿时间方向寻找与音素顺序一致的最大路径得分 \(S\)，记录起始帧与触发帧，并与阈值 \(\tau\) 比较得到存在标志，复杂度与两者乘积同阶，适合典型短关键词。若标志为阴性则直接输出静音，不进入后续步骤。阈值升高时查准率上升而查全率下降，降低时趋势相反，需在两者间折中。

确认存在后进入注意与提取。注意阶段将加权求和后的特征沿时间平均，得到固定维度全局说话人表示，用于概括目标音色与上下文。提取阶段以该向量为条件，驱动频带切分主干估计复数掩蔽 \(M\)，经短时傅里叶变换得到混合频谱 \(X\)，逐点相乘得到目标频谱 \(Y\)，再经逆变换恢复波形，以负尺度不变信噪比为目标训练。主干训练时线索编码器保持冻结，形成两阶段先后优化，避免两部分相互干扰。

3 段执行顺序构成先判断后提取的闭环。第一步检测关键词是否存在并定位时间范围，第二步基于关键词上下文聚合说话人向量，第三步完成全句分离。当多人说出相同关键词时按论文设定随机选择一位作为目标，保证流程可执行。这种设计使系统既能处理关键词缺席情形，也能利用局部词句线索推断全局身份，为后续仅用短语替代干净注册语音提供机制基础。

### 频带切分主干与冻结边界下的两阶段优化

提取主干工作在时频域。输入波形经短时傅里叶变换得到频率乘时间复谱，按频带切分为多个子带谱，每个子带宽度固定。网络沿时间与频带交替使用循环层建模时序依赖与带间依赖，估计与输入同尺寸的复数掩蔽，逐点相乘得到目标频谱，再经逆变换恢复时域波形。掩蔽估计保留相位信息，有利于在全重叠下分离混叠严重的频点。

优化采用负尺度不变信噪比。目标分量为估计波形在参考波形方向的投影，噪声分量为估计减去目标分量后的残差，损失为两者能量比的对数值取负。估计与参考仅差一个整体增益时损失不变，这种尺度不变性避免模型在音量缩放上浪费容量，梯度直接推动估计波形向参考方向靠近并压缩残差。

两阶段优化边界清晰。线索编码器先训练 150 个轮次并含 10 个轮次预热，优化器为 Adam，学习率为 1e-3，批大小为 64。随后冻结编码器，训练提取主干 150 个轮次，学习率从 1e-3 指数衰减至 2.5e-5 且无预热。全部实验在 8 块 NVIDIA V100 上完成，短时傅里叶变换在 16 kHz 下窗口为 512 个采样点，跳数为 128 个采样点，频点数为 128。

数据上线索预训练使用 LibriSpeech 中 train-clean-360 与 train-other-500 的在线混合，覆盖 2,087 位说话人，train-clean-100 留作主干训练以避免信息泄露。混合时随机抽取两句干净语音，以 0.1 至 0.9 的增益相加，较短者补零对齐较长者，模拟最大长度混合策略。

训练关键词为随机截取的 2 至 6 个连续词，约占全文平均 30.1 个词的 6.5% 至 19.5%，评测时限制为至多 4 个连续词，约占平均 14.1 个词的 28% 以内。词序列由字形到音素工具转为音素后送入编码器，主干评测采用 Libri2Mix 最小长度全重叠 16 kHz 版本，说话人与预训练无重叠，检测评测另构 2,620 个样本，其中约 50% 混合中不含查询关键词。

### 仅用四词关键词超越干净注册语音的证据

#### 主提取指标对比

评测公平性建立在说话人不重叠与相同主干配置上。对照系统均采用相同提取结构，干净注册对照采用在 VoxCeleb2 上预训练的说话人嵌入模型提取嵌入，级联对照先以分离模型分离再以高性能识别模型转录并按编辑距离选择通道。指标方向为信噪比提升准确率可懂度质量越高越好，词错误率与时间误差越低越好，其中准确率指提升超过 1 dB 的比例，说话人相似度为自监督模型嵌入余弦，整体质量仅报告总分。

下表为主提取结果精简呈现，列为尺度不变信噪比提升准确率语音质量可懂度整体质量说话人相似度与差分词错误率。行覆盖级联对照干净注册对照多层说话人表示对照与仅用 4 个关键词的本文系统，差分词错误率以基础识别模型解码提取语音与参考目标转录之差衡量，可直接比较局部线索替代全局注册的效果。

| Model | Cue Info. | SI-SNRi (dB)↑ | Acc. (%)↑ | PESQ↑ | STOI↑ | DNSMOS↑ | SPK SIM↑ | dWER (%)↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Pipeline | 12.98 | 89.93 | 2.84 | 88.72 | 3.17 | 0.964 | 20.81 |
| TSE |  |  |  |  |  |  |  |  |
|  | Audio | 13.52 | 90.83 | 2.86 | 89.51 | 3.15 | 0.967 | 19.84 |
| Multi-Level TSE [Zhang et al., 2025] | Audio | 16.08 | 97.18 | 2.86 | 93.71 | 3.15 | 0.978 | 15.14 |
| DAE-TSE | Keywords (k=4) | 16.45 | 98.98 | 2.87 | 95.18 | 3.14 | 0.982 | 13.62 |

数据显示本文系统以约 28.4% 全文长度的 4 词线索取得 16.45 dB 提升与 98.98% 准确率，高于干净注册的 13.52 dB 与 90.83% 以及多层对照的 16.08 dB 与 97.18%。语音质量为 2.87，可懂度为 95.18，高于 89.51 与 93.71，说话人相似度为 0.982，高于 0.967 与 0.978，差分词错误率为 13.62%，低于 19.84% 与 15.14%。唯一未胜出的是整体质量 3.14，略低于级联的 3.17，说明信号失真下降与感知总分之间仍有权衡。

#### 关键词检测与定位可视化

下表为不同阈值下的检测与定位结果，列为精确率召回率综合分数以及起始与结束时间绝对误差。阈值记为希腊字母，误差单位为 ms，样本中约半数不含关键词，正样本需同时给出存在判断与时间戳，可检验注意图路径搜索的稳健性。

| τ | Detection Metrics (%) Pre. | Detection Metrics (%) Rec. | Detection Metrics (%) F1 | Time Error (ms) S Err. | Time Error (ms) E Err. |
| --- | --- | --- | --- | --- | --- |
| 0.48 | 99.00 | 93.85 | 96.36 | 103.7 | 100.6 |
| 0.36 | 98.64 | 97.24 | 97.93 | 104.0 | 100.7 |
| 0.33 | 98.49 | 97.63 | 98.06 | 103.7 | 100.4 |
| 0.30 | 97.79 | 97.71 | 97.75 | 103.6 | 100.3 |
| 0.23 | 96.88 | 98.11 | 97.49 | 104.3 | 101.0 |

阈值从 0.48 降至 0.23 时召回率从 93.85% 升至 98.11%，精确率从 99.00% 缓降至 96.88%，综合分数在 0.33 处取得 98.06% 的峰值。起始误差稳定在 103.6 ms 至 104.3 ms，结束误差稳定在 100.3 ms 至 101.0 ms，约 100 ms 量级，说明阈值主要调节存在判断的松紧，对定位精度影响较小，系统能在无关键词时输出静音而非强行提取。

下图为最后一层交叉注意热图，左为关键词存在样本，右为关键词缺席样本。横轴为语音帧序号，纵轴为关键词音素序列，颜色越亮表示该帧与该音素对应越强，沿横轴观察亮带是否连续可直观判断声文对应是否建立，阈值检测正是基于这种连续性。

[![原论文 Figure 3：Cross-attention heatmaps for a positive sample (left, keywords present) and a negative sample…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-3.png)

*论文图 3：存在与缺席关键词下的交叉注意热图对比，左连续右杂散（原论文 Figure 3）。*

像素左侧几乎全黑背景中有一条自左下向右上延伸的细亮斜线，表明音素按时间顺序依次匹配到连续语音帧。右侧则为杂乱分布的竖条与块状亮斑，无贯穿全纵轴的连续路径，右上角与中部虽有较亮区域但彼此断裂。这种有无分明的对照证明编码器在存在时能形成清晰匹配，在缺席时不产生虚假连续匹配，为阈值检测提供了物理依据。

### 损失项关键词长度与嵌入分布的归因检验

#### 损失项归因

下表为线索编码器训练目标的消融，行分别为完整系统去掉权重正则项去掉说话人损失与去掉语音识别损失。列为信噪比提升与准确率，可检验内容记忆与身份区分各自的贡献，权重正则系数为 0.01，总损失平衡系数为 0.5。

| Model | SI-SNRi (dB) | Acc. (%) |
| --- | --- | --- |
| DAE-TSE | 16.45 | 98.98 |
| w/o LReg | 15.97 | 98.02 |
| w/o LSpeaker | 14.72 | 96.13 |
| w/o LCTC | 3.47 | 70.15 |

去掉正则项仅从 16.45 dB 微降至 15.97 dB，准确率从 98.98% 降至 98.02%，影响较小。去掉说话人损失降至 14.72 dB 与 96.13%，说明身份监督不可或缺。去掉语音识别损失则骤降至 3.47 dB 与 70.15%，证明若编码器不保留关键词上下文，即使说话人分类保留也无法从混合中找到目标，语义内容与身份同等重要。

#### 关键词长度与嵌入分布

下表比较不同关键词数量的影响，行从 1 个词增至 4 个词并附全文转录对照，全文平均含 14.1 个词。列仍为信噪比提升与准确率，可观察局部线索增至何种长度后收益饱和，评测关键词均为连续随机截取。

| #Keywords | SI-SNRi (dB) | Acc. (%) |
| --- | --- | --- |
| 1 | 15.34 | 96.33 |
| 2 | 15.74 | 97.18 |
| 3 | 16.37 | 98.70 |
| 4 | 16.45 | 98.98 |
| Full Trans. | 16.48 | 98.78 |

单关键词已达 15.34 dB 与 96.33%，超过干净注册对照，双关键词为 15.74 dB 与 97.18%，三关键词跃升至 16.37 dB 与 98.70%，四关键词为 16.45 dB 与 98.98%，与全文的 16.48 dB 与 98.78% 几乎持平。趋势单调上升但在 4 词后趋平，说明少量连续词已能提供足够全局上下文，更长转录边际收益有限。

下图为说话人向量降维散点，颜色代表目标说话人，左子图同色点来自同一混合的不同关键词，右子图同色点来自不同混合。观察同色点是否聚拢以及不同颜色是否分离，可判断嵌入以身份为主还是以声学上下文为主，教学时可先看簇的紧致度再看边界交叠。

[![原论文 Figure 4：t-SNE scatter plot of speaker embeddings, with each color representing a target speaker.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/a767dd4cc677/figure-4.png)

*论文图 4：同一混合与跨混合下说话人向量的降维分布，颜色代表说话人（原论文 Figure 4）。*

像素左侧同色点形成细长紧密小簇，簇间距离大，边界清晰，表明同一混合下不同关键词仍指向同一说话人且上下文一致时表示稳定。右侧同色点仍大体聚拢但簇形松散，中部粉绿蓝等多色交叠，说明跨混合时身份信息保留但缺乏共享上下文会引入模糊。两图对照证明局部关键词能捕获全局身份，上下文一致性进一步提升紧致度。

### 结论成立的前提代价与复现核对清单

上述最强结论成立依赖特定前提，不可直接外推。混合均为双说话人全重叠干净英语朗读，无背景噪声混响与稀疏重叠，关键词取自转录中连续原词，训练平均长度约 30.1 词而评测平均长度为 14.1 词，评测关键词至多 4 个连续词。阈值在 0.23 至 0.48 之间取值，多人说出相同关键词时随机选一位，检测阴性直接输出静音的策略在稀疏与长时场景下未经检验。

未验证的部署条件仍然较多。短时傅里叶变换与滤波器组参数固定，分别采用 512 点窗与 128 点跳以及 80 维特征配 25 ms 窗口与 10 ms 移位，跨语言跨信道与更多说话人情形未测试。阈值在新场景下的泛化以及误触发时的用户体验均无数据，参考无关感知总分未随失真与可懂度指标同步提升，提示在整体听感上仍有差距，实际落地前需补充噪声混响复测。

复现核对需区分论文所述与外部可达性。论文在摘要末尾给出代码与演示页地址，现有来源记录仅能证明论文提到该链接且本次可达，不能据此断定为作者长期维护或开箱可用，权重下载与直接运行状态原文未明确说明。数据端公开语料与外部工具链可获取，版本与超参需与原文 150 个轮次学习率变化与特征参数对齐，说话人不重叠划分是保证公平的关键，混淆训练与评测说话人会高估效果。

选型上若无法获得干净注册语音且能获得用户说过的短语，可优先考虑关键词引导方案。1 个词已具竞争力，2 个词与 3 个词稳步提升，4 个词接近全文效果，无需追求完整转录。若有演示页，建议对照试听级联系统与本文系统在可懂度与说话人保持上的差异，重点关注关键词缺席时是否静音以及阈值过低时的误提取，实际部署前应在噪声混响与多说话人数据上复测定位误差与准确率。

从机制看，少量关键词有效的原因在于交叉注意建立了局部内容与全局身份的桥梁。语音识别损失迫使模型定位词句位置，说话人损失迫使模型聚合该位置附近的音色，全文转录仅增加冗余上下文，因而 4 个词与全文差距极小。消融中去掉说话人损失或语音识别损失均导致明显下降，去掉正则项仅轻微波动，说明内容对应与身份判别缺一不可，这也解释了单关键词仍能超越传统干净注册对照的现象。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：16 kHz 采样，线索端 80 维滤波器组特征 25 ms 窗长 10 ms 步长，提取端短时傅里叶变换 512 点窗长 128 点跳数 128 个频点，在线混合增益 0.1 至 0.9，前瞻延迟与实时系数原文未披露
- **训练与评测数据**：线索预训练用 LibriSpeech 中 train-clean-360 与 train-other-500 在线双人混合覆盖 2,087 位说话人，主干训练用 train-clean-100 模拟 Libri2Mix 最小长度全重叠 16 kHz 版本，验证测试来自 dev-clean 与 test-clean，检测评测含 2,620 个样本约 50% 不含关键词
- **算力与训练耗时**：8 块 NVIDIA V100 上完成，线索编码器训练 150 个轮次含 10 个轮次预热，主干训练 150 个轮次，推理硬件原文未披露
- **核心超参数与配置**：Adam 优化器学习率 1e-3 批大小 64，主干学习率从 1e-3 指数衰减至 2.5e-5，总损失平衡系数 0.5 权重正则系数 0.01，训练关键词 2 至 6 个词评测至多 4 个词
- **推理速度与部署开销**：参数量显存延迟吞吐原文未披露，推理为先检测后提取，缺席输出静音，多人同词随机选择一位
- **开源产物与协议状态**：正文给出代码与演示页链接，资源核查记为第三方可达，未确认为作者维护资源，权重下载与直接运行状态原文未明确，数据与外部工具链公开可获取
- **附录与补充材料要点**：原文未设独立附录，补充细节散见正文，失效案例为多人同关键词随机选择与整体质量略低于级联，未来工作指向更多说话人稀疏重叠噪声混响评估

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.9/10** | 创新 7.8/10 | 技术严谨 6.4/10 | 实验充分 7.2/10 | 清晰度 6.6/10 | 影响力 6.7/10 | 开源 0.0/10 | 可复现 6.1/10 | 工程/实践 5.4/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0644`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/644) · [官方 PDF](https://ijcai.org/proceedings/2026/0644.pdf)
- DOI：`10.24963/ijcai.2026/644`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以仅占平均转录28.4%的4个连续关键词在SI-SNRi等6项指标上超越干净注册语音标准与多层强基线，SI-SNRi达16.45dB。

- 核心优势：直接消融移除CTC损失后SI-SNRi从16.45dB跌至3.47dB且准确率从98.98%跌至70.15%，内容对齐因果证据扎实。

- 主要短板：DNSMOS总分3.14低于全部基线且全文无人工MOS盲测，仅凭客观与神经代理指标无法支撑人类感知更优主张。

- 主要短板：结论仅限英文双人全重叠模拟混合，未覆盖三人以上、稀疏重叠、背景噪声混响，多人同说关键词随机选择未经评估。

- 主要短板：Transformer层数维度与BSRNN子带数宽度等关键结构配置未说明，复现所需核心架构细节缺失较多。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
