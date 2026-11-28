---
title: "QAM-DETR: Quality-Aware Mamba DETR for Audio Moment Retrieval from Long Audio"
date: 2026-11-27
draft: false
description: "针对长音频中自然语言查询的语义匹配与精确边界难以兼顾的问题，QAM-DETR 以冻结多特征门控融合、三路交叉注意、双向 Mamba 编码与交并比质量分支构建渐进定位流程，在 DCASE 2026 任务 6 官方评测集上以 R1@0.5 为 63.84% 与 R1@0.7 为 48.59% 取得并列第一，代价是依赖多配置集成与冻结大模型对前 10 候选的重排且不修正边界。"
tags: ["模型集成", "多模态学习", "状态空间模型", "音频时间定位"]
categories: ["dcase-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "质量感知长音频时刻检索：门控融合与双向时序建模"
paper_digest_original_title: "QAM-DETR: Quality-Aware Mamba DETR for Audio Moment Retrieval from Long Audio"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-35"
paper_digest_workbench_source_sha256: "fb039ff4ad1f4f312d9c61a75ee9d017436ad0a6fbb3962932ba01db8493fe04"
paper_digest_workbench_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_workbench_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_35.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频时间定位"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对长音频中自然语言查询的语义匹配与精确边界难以兼顾的问题，QAM-DETR 以冻结多特征门控融合、三路交叉注意、双向 Mamba 编码与交并比质量分支构建渐进定位流程，在 DCASE 2026 任务 6 官方评测集上以 R1@0.5 为 63.84% 与 R1@0.7 为 48.59% 取得并列第一，代价是依赖多配置集成与冻结大模型对前 10 候选的重排且不修正边界。"
paper_digest_reader_sections: [{"heading":"长音频时刻检索为何需要同时解决语义匹配与边界精度","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"QAM-DETR 渐进定位流程总览与门控融合起点","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"三路交叉注意、双向状态空间编码与质量分支的分工","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"两阶段冻结训练、损失梯度与推理执行路径","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"特征多样集成与大模型重排的官方评测表现","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"累积消融中双向建模与质量排序的增益归因","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现核对与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Chung-Ang University, Seoul, Republic of Korea"],"name":"JeongRae Kim"},{"affiliations":["Chung-Ang University, Seoul, Republic of Korea"],"name":"Ho jun Jung"},{"affiliations":["Chung-Ang University, Seoul, Republic of Korea"],"name":"Yewon Park"},{"affiliations":["Chung-Ang University, Seoul, Republic of Korea"],"name":"Changwon Lim"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"dbc036cb97d20ce7ed0408a5be631e385ce633f913f9e75acaf369f195149f87","url":"/audio-research-portal/client/papers/2026-11-27/conference-1feefaa8466393cfc15f7bfc/citation.bib"},"citation.json":{"sha256":"ba8dd6bae0e76bd559630cef64ce678db7a667eb6a6a6e9f1f4a3c6e2afa0c1e","url":"/audio-research-portal/client/papers/2026-11-27/conference-1feefaa8466393cfc15f7bfc/citation.json"},"citation.ris":{"sha256":"64047d551e6e73d93d9d57feb76ce5253c1c164ce23a3a4851f94309fa25ae97","url":"/audio-research-portal/client/papers/2026-11-27/conference-1feefaa8466393cfc15f7bfc/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"038aeba5a08fa1d10207a051a6a6fdb21c1dca3e8624c7643d1b2a16e0df994b","url":"/audio-research-portal/client/papers/2026-11-27/conference-1feefaa8466393cfc15f7bfc/rethink-context.json"}}
paper_digest_paper_id: "conference:dcase:2026:conference-paper-id:dcase2026-35"
paper_digest_source_kind: conference
paper_digest_conference_id: "dcase-2026"
paper_digest_conference_name: "dcase-2026"
paper_digest_conference_record_url: "https://dcase.community/workshop2026/proceedings"
paper_digest_conference_pdf_url: "https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_35.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "5ea28224c617865af800db5dfe05c1a22c3ecff1139507db140c5f79a91aaf55"
paper_digest_api_reader_plan_sha256: "3a7cbc5cefe629d22ff6b9b3b0c6ba4e44cf104c7b0548386e681407d5590eb2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a83c625b5557ed9108e19f5e8eb9dd361665083625c4623736a0a1daf3c35bd"
paper_digest_api_reader_source_table_count: 0
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6acfb7f4da878ab25349bb8328e4de6fef614dc0544a84b3be2beb238f5a6776"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c1446d07daac98c396395b800ada584a20de9fd3a8f37a28de8bbcc371457bfc"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0dd2376d0cd7a0cefbb64b89b2f29122a9f4b308e0f497240df4bf2f5c1f7831"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.model-ensemble","label":"模型集成"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 质量感知长音频时刻检索：门控融合与双向时序建模

> 英文题目：*QAM-DETR: Quality-Aware Mamba DETR for Audio Moment Retrieval from Long Audio*

> 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-35`
> Track：P1-7



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。



> 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_35.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-research-portal/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-research-portal/papers/?concept=task.temporal-grounding)
- **研究方法**：[模型融合](/audio-research-portal/papers/?concept=method.model-combination) → [模型集成](/audio-research-portal/papers/?concept=method.model-ensemble)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[状态空间模型](/audio-research-portal/papers/?concept=method.state-space)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.4/10 | 技术严谨 7.3/10 | 实验充分 7.9/10 | 清晰度 6.6/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.1/10 | 工程/实践 4.6/10

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- JeongRae Kim：Chung-Ang University, Seoul, Republic of Korea
- Ho jun Jung：Chung-Ang University, Seoul, Republic of Korea
- Yewon Park：Chung-Ang University, Seoul, Republic of Korea
- Changwon Lim：Chung-Ang University, Seoul, Republic of Korea

## 📌 核心摘要

**问题与瓶颈：** 音频时刻检索要求在长录音中定位与自然语言查询最匹配的时间片段，输入为连续音频与自由文本查询，输出为起始与结束时间戳。与整段音频文本检索不同，目标事件可能仅占短暂区间，查询常描述高层概念，高时间交并比（IoU，temporal Intersection over Union）阈值评测对边界精度敏感。现有 CLAP 风格表示提供片段级语义对齐，却缺乏帧级时序推理能力，DETR 风格多候选解码器的语义前景置信度也常与定位准确度脱节，长音频上的全自注意力更面临二次方计算开销。

**核心思路与方法架构：** 与 DCASE 2026 任务 6 基线相比，QAM-DETR 保留基于解码器的集合预测与匈牙利匹配结构，增量在于门控异构特征融合、三路跨模态交互、双向 Mamba 时序建模与显式定位质量预测构成的联合管线。对一条长音频，系统以 1 s 窗长与 1 s 步长抽取冻结的 LAION-CLAP、MS-CLAP、WavLM 与 RoBERTa 特征并投影至共享隐空间，每路辅助特征以单个经 Sigmoid 归一化的可学习标量门控加权融合，全部特征提取器冻结而定位网络更新。融合音频序列与查询经音频关注文本、文本关注音频再回注音频的三路注意力形成查询条件化表示，随后由前向与后向 Mamba 分支级联投影的 BiMamba 双向建模长程上下文并经多尺度下采样上采样残差融合保持帧级分辨率，解码器并行输出候选窗口，以前景概率与预测 IoU 质量相乘排序，选中变体再用冻结的 Qwen2.5-Omni 对前 10 个候选按 50% 时长外扩裁剪音频复核而不改动边界。

**关键实验与核心代价：** 在 Clotho-Moment 预训练后于 CASTELLA 训练集微调，以验证集 213 条与测试集 640 条为公开开发基准，用 R1@0.5、R1@0.7 与 mAP 等越高越好指标评测，五随机种子均值加减标准差报告，隐式评测集仅用于最终提交。累积消融显示测试集 R1@0.7 从基线 16.42% 经 BiMamba 升至 22.17% 再经质量预测升至 25.32%，完整模型达 29.00%，测试集 R1@0.5 从 33.01% 升至 47.40%，测试集 mAP 从 13.98% 升至 23.50%。在四个最终变体中官方评测两项指标均列首位的 CLAP-WavLM Ens.+LLM 达 R1@0.5 63.84% 与 R1@0.7 48.59%，论文报告并列第一，受控对比的 Feat.-Div. Ens. 与 Feat.-Div. Ens.+LLM 在官方评测集 R1@0.7 从 45.20% 升至 48.02%。本任务无人工主观听测与神经代理指标之分，代价在于多尺度融合与三路注意力并未改善全部验证指标，验证集 mAP 与 mAP@0.75 曾分别从 26.33% 回落至 26.06% 与从 25.28% 回落至 24.57%，LLM 验证器仅重排前 10 名且不修正边界，论文未报告延迟与吞吐实测。

**适用边界与深读导览：** 结论成立依赖冻结预训练表示与长音频短事件设定，质量分支与 LLM 复核的有效性受限于解码器已生成准确候选，未涉及流式因果约束、端侧部署与边界精修，稳定融合与高效验证仍列为未来工作。欲深究门控公式与质量插值权重，可查阅下文方法概述和架构中的公式说明，消融细节见实验结果表 1，最终集成与重排对比见表 2 及第 5.2 节分析。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长音频时刻检索为何需要同时解决语义匹配与边界精度

音频时刻检索的输入是一段完整的长录音与一句自然语言查询，输出是录音中与查询语义最匹配的时间片段的起始与结束时刻。评价采用 R1@0.5、R1@0.7 与平均精度 mAP 等指标，其中数字表示预测片段与人工标注片段之间时间交并比 IoU (交并比) 的阈值，阈值越高对边界精度要求越严。与整段音频检索只判断整段是否相关不同，时刻检索要求在分钟级长音频中定位可能仅持续数秒的稀疏事件，而查询往往是自由文本描述的高层概念。这种短目标、长上下文与高阈值评价的组合，使得模型既要理解语义，又要具备帧级时间推理能力。

预训练语言音频对比模型 CLAP (语言音频对比预训练) 通过对比学习将音频与文本映射到共享语义空间，在整段匹配上表现较强，但其片段级表示缺乏细粒度时间分辨率，难以直接输出精确边界。类检测 Transformer (DETR) 式定位把检索建模为集合预测，由解码器一次产生多个候选窗并经匈牙利匹配与真值对应，然而其前景分类置信度反映的是语义相关性，并不能保证时间边界准确，高置信候选可能边界偏差较大。此外，传统 Transformer 编码器的自注意力计算量随序列长度平方增长，在长音频每秒一帧的稠密序列上建模长程上下文代价较高，难以兼顾效率与前后文依赖。

DCASE 2026 挑战赛任务 6 将上述困难形式化为公开评测。开发阶段使用合成数据集 Clotho-Moment 进行预训练，该数据集把短音频叠加到长背景录音上并配有时刻标注，用于学习通用时序定位能力。真实开发与调参依靠人工标注数据集 CASTELLA，其查询为自由文本并带有时刻边界，官方划分固定且不额外增加人工标注。隐藏官方评测集仅用于生成最终提交，不参与训练、调参与模型选择，这种划分要求方法在未见长音频与查询描述上仍保持边界精度与排序稳定性。

因此，核心矛盾集中在 3 个方面。第一，单一表示难以兼顾语义对齐与声学细节，需要融合异构预训练特征。第二，查询语义必须注入时序音频特征，并结合前后文判断事件起止，仅靠单向建模容易丢失后向线索。第三，语义相关与定位可靠是两种不同信号，若只用前景概率排序，会把语义相关但边界不准的候选排在前面。QAM-DETR 正是围绕这三点构建渐进定位流程，依次完成门控特征融合、查询条件双向时序建模与质量感知排序，并在部分最终变体中引入冻结大模型验证器做边界不变的重排。

### QAM-DETR 渐进定位流程总览与门控融合起点

理解 QAM-DETR 可以沿从左到右的主路径一次看清全貌。左侧为冻结特征抽取区，原始音频与原始文本分别送入多个预训练编码器。中间绿色区先做投影与门控融合，再经 3 路交叉注意力形成查询条件特征，随后进入双向时序编码与多尺度融合。右侧由可学习锚点驱动解码器输出多个候选时刻与分数。阅读原图时建议先沿粗箭头追踪音频主流，再观察文本支路在何处汇入音频流，最后看双分支如何汇合送入解码器，这样能抓住融合、编码与排序 3 个阶段的分界。

[![原论文 Figure 1：Overall architecture of QAM-DETR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f7628d8e83d0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dcase-2026/f7628d8e83d0/figure-1.png)

*论文图 1：QAM-DETR 总体结构：冻结特征经投影门控、三路交叉注意、双向 Mamba 与多尺度融合后由解码器输出候选时刻与分数（原论文 Figure 1）。*

原图左侧浅蓝底区分出特征抽取与定位网络的边界，原始音频图标分出 3 路音频特征，原始文本图标分出两路文本特征，每路均标注形状如 (B, A_L, D_A1) 与 (B, T_L, D_T1)，其中 B 为批大小，A_L 为音频帧数，T_L 为文本长度，D 为共享隐维度，具体数值原文未披露，雪花标记表示抽取器全程冻结。中间投影框统一映射到 (B, A_L, D) 或 (B, T_L, D)，辅助支路经圆圈 N 与 G 做门控后与主路相加。后续 3 组交叉注意力框、上下两个 Mamba 框之间的翻转、下采样卷积与上采样反卷积分支，以及最右侧候选列表示例 (119.0, 156.0)：0.9154 与 (5.0, 9.0)：0.0036，共同说明了从帧特征到时刻分数的完整变换位置。

与任务基线相比，QAM-DETR 保留了基于解码器的集合预测与匈牙利匹配结构，但替换并新增了 4 个关键设计。编码器由 Transformer 替换为双向 Mamba 以线性复杂度建模长程依赖，新增轻量标量门控融合多路异构特征，新增轻量多尺度时序融合以兼顾不同事件时长，新增时间交并比质量分支以补充前景置信度。信号层面，所有音频特征按 1 秒窗与 1 秒跳预先抽取且不做增强，即每秒对应一帧，文本特征同样预计算并冻结。主表示选用 LAION-CLAP，辅助选用 MS-CLAP、WavLM 与 RoBERTa，投影后的共享维度与采样率原文未披露，目标是输出起止时刻与质量感知分数。

以下为教学示意，以一段按每秒一帧切分后共 A_L 帧的长音频为例，端到端张量流可按序号追踪。第一步，3 路音频特征分别形如 (B, A_L, D_A1) 经各自投影变为 (B, A_L, D)，两路文本特征由 (B, T_L, D_T1) 变为 (B, T_L, D)。第二步，辅助音频特征经各自标量门加权后与主音频特征相加，文本侧同样融合，帧数与长度不变。第三步，3 路交叉注意力保持音频长度 A_L 与文本长度 T_L 不变，只交换语义与声学信息。第四步，双向 Mamba 维持 (B, A_L, D)，多尺度分支下采样再上采样后残差相加仍为同一形状。第五步，解码器结合可学习锚点输出多个起止时刻与分数，排序后取前 10 个进入可选重排。

### 三路交叉注意、双向状态空间编码与质量分支的分工

门控融合的作用是在每个模态内部整合互补表示。音频侧以 LAION-CLAP 为主，MS-CLAP 提供另一套语言音频语义，WavLM 提供细粒度声学与时间线索。文本侧以 LAION-CLAP 为主，MS-CLAP 与 RoBERTa 提供辅助语义。每路先经独立投影层映射到共享隐维度，随后辅助路乘以可学习标量门并加到主路上，门值为对单参数取 S 形函数得到，取值在 0 到 1 之间。与逐词元门控不同，该标量在全部时间词元上共享，使融合模块仅增加极少参数，却能让模型自主控制每种表示的贡献，音频与文本两路分别执行相同策略。

特征级融合只解决模态内互补，定位还需要音频序列与查询之间的交互。3 路交叉注意力分三步渐进完成条件化。第一步，音频特征作为查询去注意文本查询，突出与查询语义相关的时段。第二步，文本特征回看音频序列，把声学上下文融入查询表示，避免查询脱离实际声音。第三步，将前两步得到的跨模态信息注回音频序列，形成查询条件时序表示。该过程不附加额外对齐损失，输出保持原始帧分辨率，直接送入时序编码器做边界定位，既保留声学细节，又注入查询语义。

双向 Mamba 编码器负责对查询条件特征建模长程时间演化。每个堆叠块含前向与后向两条分支，前向按原始顺序处理，后向先翻转序列处理再翻转恢复原序，两路输出拼接后投影回隐维度，并经残差连接与层归一化稳定优化。这种结构使每一帧同时看到之前与之后的声学上下文，有助于判断依赖周围信息的事件起止，而计算量随长度 T 线性增长，避免了全自注意力随长度平方增长的开销。随后的多尺度融合将原始高分辨率表示与下采样上下文表示结合，经上采样恢复原分辨率后残差相加，下采样与上采样均采用核为 2 步幅为 2 的一维卷积结构，从而同时捕捉短局部事件与长时模式且不损失帧级边界精度。

质量感知排序把语义相关与定位可靠拆成两个互补信号。训练保留前景背景分类、一范数跨度回归、时间广义交并比、显著性与质量回归五项损失，质量目标定义为匹配预测窗与真值时刻之间的时间交并比，且从计算图中截断，使质量分支只学可靠度而不干扰跨度回归。推理时前景概率与预测质量相乘得到解码器分数，候选先按此分数排序。对于 3 个含大模型重排的最终变体，取前 10 个候选，将每段按预测起止裁剪并向两侧各扩展候选时长 50% 以补充上下文，连同查询与候选在裁剪中的相对位置送入冻结 Qwen2.5-Omni 验证器。验证器只需回答是否准确覆盖，以肯定回答与否定回答的对数几率归一化得到大模型相关分，再按插值权重与解码器分加权得到最终分，权重在开发集上以 R1@0.7 为准分别取 0.30、0.35 与 0.45，全程不修改边界、不更新参数、不用隐藏集真值。

### 两阶段冻结训练、损失梯度与推理执行路径

训练分两阶段进行。先在合成数据集 Clotho-Moment 上预训练，该数据把短音频叠加到长背景上并配有时刻标注，用于学习通用音频文本时序定位。随后在真实人工标注数据集上微调，该集包含 1,009 条训练录音、213 条验证录音与 640 条测试录音，官方划分固定且不额外增加人工标注。验证集作为主要公开选型依据，测试集作为附加稳健性检查，隐藏挑战评测集仅用于生成最终官方提交，不参与训练、调参与选择。这种安排使消融结论建立在公开划分上，而最终排名在完全未见的评测集上检验。

参数冻结边界清晰。所有音频与文本特征抽取器在预训练、微调、验证与推理全程冻结且特征预先计算，仅优化定位网络本身，可训练参数为 55.6 M。优化器采用 AdamW，输入为预计算特征且不做音频增强。训练目标遵循匈牙利匹配框架，包含前景背景分类、一范数跨度回归、时间广义交并比、显著性与质量回归损失，其中质量回归用匹配预测的时间交并比监督，目标已截断梯度。特征组合层面，最终系统用 3 种互补配置增加多样性，分别侧重语言音频语义、细粒度声学与文本语义，门控标量在训练中自适应调整贡献。

推理采用非自回归集合预测而非逐帧自回归。Transformer 解码器以可学习锚点为查询，一次解码出多个候选时刻与分数，按质量感知分数排序。基础集成直接合并来自不同特征组合的候选并按解码器置信排序，含大模型验证的变体仅对排序靠前的前 10 个候选做重排，不改变任何起止边界。双向 Mamba 编码器对长度为 T 的序列需两次线性扫描，复杂度随 T 线性增长，显著低于自注意力平方增长。可选验证器只在最终少数变体中使用，基础推理无需调用大模型。

原文披露定位模型为 55.6 M 可训练参数，强调预计算与冻结大幅降低训练开销，多尺度融合仅为轻量残差模块。但原文未披露采样率、共享隐维度具体数值、优化器学习率与批大小、训练步数与耗时、所用 GPU 型号数量，也未披露延迟、前瞻窗口、实时因子 RTF 或显存占用。因此，推理代价只能从结构上定性判断，双向线性扫描与前 10 重排的额外开销无法换算为毫秒级延迟，工程部署前需自行实测。

### 特征多样集成与大模型重排的官方评测表现

评测建立在 CASTELLA 公开验证集与测试集以及隐藏官方评测集上，指标为 R1@0.5、R1@0.7 与平均精度系列，数值越高越好，0.7 阈值比 0.5 更严格。消融部分采用 5 随机种子均值加减标准差报告，非集成单模型对比，最终系统为多特征组合集成，候选合并后按解码器置信或大模型加权分排序，插值权重按开发集 R1@0.7 选定。公平性上，所有变体共享冻结特征与两阶段训练流程，隐藏集真值不参与任何调参，最终集成不再报告方差。需要明确的是，原文仅用自动检索指标评价，未安排人工听测 MOS 或 ABX，也未使用神经代理质量指标，因此结论只反映边界准确与排序能力，不涉及主观听感。

在官方评测集上，最佳变体 CLAP-WavLM 集成加大模型重排达到 R1@0.5 为 63.84% 与 R1@0.7 为 48.59%，在本次任务中排名并列第一。受控对比来自使用相同候选池的两个特征多样集成变体，不加大模型重排时评测 R1@0.7 为 45.20%，加入重排后提升到 48.02%，两者仅差重排环节，直接证明了验证器在该配置下改善排序的有效性。同一池的评测 R1@0.5 也从 57.63% 提升到 62.15%，幅度与高阈值趋势一致。另一重排变体 Dual-CLAP 集成加大模型重排的 R1@0.7 低于前两者，说明验证器并非在所有特征组合上同等有效，其收益受限于解码器是否已在前列放入准确时刻。

这一增益的前提与代价同样具体。重排仅针对前 10 个候选，每个候选裁剪时向两侧各扩展自身时长 50% 以引入上下文，再送入冻结大模型计算肯定与否定对数几率的归一化概率，最终分按 1 减 β 乘解码器分加 β 乘大模型分融合，3 个重排变体的 β 分别取 0.35、0.45 与 0.30，均按开发集 R1@0.7 事后选优，存在对开发集的依赖。代价是每个查询需额外运行大模型验证 10 个音频片段，且边界精度不因此提升，若解码器未产生准确候选，重排无法创造新边界。此外，最终集成合并 3 组特征配置的多模型候选，训练与存储成本高于单模型，原文未披露具体推理延迟与显存，无法评估实时部署可行性。

未胜出项与未评测范围限定了结论边界。Dual-CLAP 集成加大模型重排在评测 R1@0.7 上低于另两个重排变体，表明语义验证最依赖准确候选已在池中的情形。开发集上多尺度融合与 3 路注意力并未改善每一项验证指标，存在个别验证列轻微回落，说明中等增益具有配置依赖。原文未报告最终集成的方差与置信区间，未做噪声、远场、跨域或流式因果评测，也未与人工听测对照。因此，并列第一仅在 DCASE 2026 任务 6 官方隐藏集与 R1 与平均精度口径下成立，换用其他数据分布或延迟约束时需重新验证。

### 累积消融中双向建模与质量排序的增益归因

累积消融从仅用 LAION-CLAP 的类检测 Transformer 式基线出发，逐行叠加双向 Mamba 编码器、质量预测与排序、多尺度时序融合、3 路交叉注意力与多特征集成，每行均在前一行基础上增加一个模块，所有数值均为 5 随机种子均值加减标准差。基线在验证集 R1@0.5 为 39.32% ± 1.89%，验证 R1@0.7 为 22.22% ± 2.11%，测试 R1@0.5 为 33.01% ± 1.64%，测试 R1@0.7 为 16.42% ± 0.96%，测试平均精度为 13.98% ± 0.81%，为后续增量提供参照。该协议能展示渐进收益，但每个增量并非完全孤立效应，解释时不能视为单模块独立贡献。

最大增益来自双向时序建模与定位质量估计。加入双向 Mamba 后，测试 R1@0.7 从 16.42% 提升到 22.17%，验证 R1@0.5 从 39.32% 提升到 46.19%，测试平均精度从 13.98% 提升到 18.32%，一致说明前后文对边界判断的重要性。再加入质量回归与排序后，测试 R1@0.7 进一步升到 25.32%，验证 R1@0.7 升到 34.09%，验证平均精度升到 26.33%，测试平均精度升到 20.39%，表明把前景概率与预测交并比相乘排序，能有效区分语义相关但边界不准的候选。这两步在验证与测试、高低阈值上同步提升，且标准差相对可控，是全文最强的结构性证据。

后续三项提供互补但幅度较小的提升。加入多尺度融合后，测试 R1@0.5 从 42.59% 升到 44.05%，测试 R1@0.7 从 25.32% 升到 26.65%，但验证平均精度从 26.33% 回落到 26.06%，验证高阈值平均精度从 25.28% 回落到 24.57%，说明多尺度并非改善每一项验证指标。再加入 3 路交叉注意力后，测试 R1@0.5 升到 45.26%，测试 R1@0.7 升到 27.65%，测试平均精度升到 21.82%，验证端多数指标回升。最后加入多特征集成达到消融中最优，测试 R1@0.5 为 47.40%，测试 R1@0.7 为 29.00%，测试平均精度为 23.50%，验证 R1@0.5 为 52.33%，验证 R1@0.7 为 35.46%，验证平均精度为 28.11%，被选为最终系统的基础结构。

由于采用累积协议，上述每一跳都包含之前模块的交互，不能解读为该模块的孤立因果效应，原文也明确提醒了这一点。缺失的消融包括各辅助特征单独贡献、门控初值与冻结策略、前后向分支各自作用、下采样核步幅选择，以及质量损失权重与显著性损失的敏感性，均未单独报告。方差方面，各行标准差多在 1% 到 2% 量级，部分验证指标标准差超过 2%，如多尺度后验证 R1@0.5 标准差为 2.18%，提示小幅提升需结合重叠区间谨慎看待。失效案例层面，原文未展示典型边界失败或排序失败实例，也未分析短事件与长事件的分别表现，限制了对多尺度与双向建模适用边界的判断。

### 假设边界、复现核对与工程选型建议

方法的有效性建立在若干未明示验证的假设上。第一，冻结特征质量决定上限，若预训练表示在目标声学分布上失效，门控与时序模块难以补偿。第二，质量分支的监督依赖匈牙利匹配的正确对应与交并比目标的准确性，若匹配错误，质量估计会偏离真实可靠度。第三，大模型验证器假设准确候选已在前 10 名中，否则重排只能在错误池中重排，这正是 Dual-CLAP 组合收益较低的解释。第四，插值权重按开发集 R1@0.7 事后选优，可能对开发分布过拟合，换用新场景时最优权重可能漂移。

复现需要区分三件不同的事。原文未提供代码仓库、权重下载与可运行系统信息，公开状态不明，无法保证开箱复现。数据层面，合成预训练与官方划分是公开的，训练、验证与测试的用途划分清晰，隐藏集仅用于提交。指标层面，消融报告 5 种子均值与标准差，最终集成未报告方差，复现时应固定种子并多次重复以核对波动。超参层面，1 秒窗跳、前 10 重排、两侧各扩 50% 时长、β 取值等已披露，但学习率、批大小与训练轮数等缺失，需自行搜索。

原文未提供试听演示页，也未安排人工听测，因此无法通过听感对照验证边界效果，选型只能依据 R1 与平均精度等自动指标。若追求最高精度且能承担多模型与大模型成本，可采用特征多样集成加大模型重排，并优先保证解码器候选多样性。若追求效率或离线批量处理，可仅用解码器集成而不调用大模型，保留双向 Mamba 与质量分支的核心增益。多尺度与 3 路注意力带来中等提升但增加调参面，在资源受限时可优先保留前两者。部署前必须实测长音频内存占用、延迟与吞吐，因为原文未披露相关数据。

未来工作指向边界精修、稳定特征融合与高效验证。当前验证器不修改边界，若能在重排后做轻量边界校正，可能进一步释放高阈值潜力。门控融合目前为全局标量，若事件类型差异大，可能需要更细粒度的自适应机制。长音频时刻检索不仅需要语义匹配，更需要双向时间上下文与定位可靠度估计的配合，质量感知排序与双向状态空间建模是本系统并列第一的核心，而大模型验证是有条件增益的辅助手段，其效果以上游候选质量为前提。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：音频特征按 1 秒窗与 1 秒跳抽取，每秒一帧，无增强，共享隐维度与采样率原文未披露，前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：Clotho-Moment 合成数据用于预训练，CASTELLA 人工标注数据用于微调与开发，含 1,009 条训练录音、213 条验证录音与 640 条测试录音，另有隐藏官方评测集仅用于最终提交
- **算力与训练耗时**：原文未披露 GPU 型号数量、训练步数与耗时以及训练时长，无法确认计算配置
- **核心超参数与配置**：优化器为 AdamW，音频按 1 秒窗与 1 秒跳抽取且无增强，特征抽取器冻结，大模型重排取前 10 个候选并向两侧各扩 50% 时长，插值权重分别取 0.30、0.35 与 0.45，学习率与批大小原文未披露
- **推理速度与部署开销**：定位网络含 55.6 M 可训练参数，双向编码复杂度随长度线性增长，基础推理无需大模型，重排需对 10 个片段额外调用冻结大模型，延迟与显存原文未披露
- **开源产物与协议状态**：原文未提供代码仓库、权重下载与可运行系统信息，公开状态不明
- **附录与补充材料要点**：原文未设附录，关键细节均在正文第 3 节至第 5 节，参考文献列出数据集与预训练模型来源

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.4/10 | 技术严谨 7.3/10 | 实验充分 7.9/10 | 清晰度 6.6/10 | 影响力 6.0/10 | 开源 0.0/10 | 可复现 5.1/10 | 工程/实践 4.6/10
- 排名：前50% | 文档类型：系统技术报告
- 会议身份：`conference:dcase:2026:conference-paper-id:dcase2026-35`
- 会议来源：[官方记录](https://dcase.community/workshop2026/proceedings) · [官方 PDF](https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_35.pdf)
- Track：P1-7

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：测试集R1@0.7从基线16.42%经BiMamba与质量预测等累积提升至29.00%，五种子均值加减标准差且验证测试趋势一致。

- 核心优势：同候选池受控对比显示LLM复核将官方评测R1@0.7从45.20%提升至48.02%，最佳变体达63.84%与48.59%并报告并列第一。

- 主要短板：集成与LLM复核联合增益缺乏统计显著性检验与延迟成本分析，且最终系统结果未报告标准差。

- 主要短板：学习率批量步数硬件损失权重与模型隐维度等多项关键配置缺失较多，复现细节不足。

---

[← 返回 dcase-2026 论文汇总](/audio-research-portal/posts/conference-dcase-2026/)
