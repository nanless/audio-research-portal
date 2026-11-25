---
title: "Neural Defend ARCAS 290M: A Robust Foundation Model for AI-Generated Audio Detection"
date: 2026-11-24
draft: false
tags: [语音伪造检测, 评测协议, 多语言, 语音]
categories: [论文速递]
description: "论文以冻结生产模型 ARCAS 290M 原样打分 10 个基准共 5,644,079 条录音，在整段合成上接近满分且大幅领先零样本基线，代价是短部分伪造、物理回放与在野压缩音频仍需片段级或人工复核。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.27784"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "冻结基础模型在千万级全量基准上检测 AI 生成音频"
paper_digest_original_title: "Neural Defend ARCAS 290M: A Robust Foundation Model for AI-Generated Audio Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.27784v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.27784v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.27784v1.pdf"
paper_digest_primary_task: "语音伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文以冻结生产模型 ARCAS 290M 原样打分 10 个基准共 5,644,079 条录音，在整段合成上接近满分且大幅领先零样本基线，代价是短部分伪造、物理回放与在野压缩音频仍需片段级或人工复核。"
paper_digest_reader_sections: [{"heading":"数秒克隆与跨信道泛化失效构成的核心检测矛盾","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"冻结生产端点对十个基准全量原样打分的评测流水线","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"从端点判决到 EER 与 Wilson 区间的判决与统计链路","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"整段合成接近满分而传输条件保持稳定的主结果","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"伪造占比、物理回放与在野平台侵蚀文件级判决的诊断","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"何时可直接采用基础模型何时必须叠加人工复核","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sivashankar Selvarajan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Piyush Verma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sumit Kumar"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sharayu N. Deshmukh"}]
paper_digest_abstract_sha256: "12d5ebabd8650b1be4cf40d3c006ff5bc2aee8d7838e56cafb2c03cbb36688db"
paper_digest_sidecars: {"citation.bib":{"sha256":"1abc8f2ac2328ed3a95855ce15b3015a8a6b11d75fa716af7037f1b83ee71869","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27784/citation.bib"},"citation.json":{"sha256":"76c5d65c460030d21bee962082dd313d52ae2ef22d47786e5aea31c6971e5b98","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27784/citation.json"},"citation.ris":{"sha256":"337d5bc2951e653e9afc576476eb95012ee4d663f3f1557c610bd68acce032b3","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27784/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1e300f51257c7b5a560f58eb0b368c4b9b38539a0497710a379f5d6cd2708f17","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-27784/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "c4626b521c061f2ba9a989f2f48aa2edd59a35c40f742bbdd6cb7796b593715d"
paper_digest_api_reader_plan_sha256: "f8d13b60bf494230fecff70ecde24d2c2b2b5c9de7d3a540ec8278ed2b5da365"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "f57cf790c1b0c0b1ea9eabc246d7f5f259ff317b4e975441875308ff2140056c"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "8d223956f4125776bff93e359871fd4e03c0f29501fa00a9aeb27885710e7b72"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "626d6cdb32f5211b0cbe63e1c1d91fc58819534446743f196d09e609c445e070"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ae81e32f41535ac4bd3d11315b1bd215acb7baa3fb7626b8e952f6adc08331d2"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 冻结基础模型在千万级全量基准上检测 AI 生成音频

> 英文题目：*[Neural Defend ARCAS 290M: A Robust Foundation Model for AI-Generated Audio Detection](https://arxiv.org/abs/2611.27784v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-paper-digest-blog/papers/?concept=task.speech-spoofing)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.7/10** | 创新 5.5/10 | 技术严谨 6.8/10 | 实验充分 8.2/10 | 清晰度 6.9/10 | 影响力 7.4/10 | 开源 0.0/10 | 可复现 5.0/10 | 工程/实践 5.2/10


## 👥 作者与机构

- Sivashankar Selvarajan：机构信息未能在本次解析中与作者逐人可靠绑定
- Piyush Verma：机构信息未能在本次解析中与作者逐人可靠绑定
- Sumit Kumar：机构信息未能在本次解析中与作者逐人可靠绑定
- Sharayu N. Deshmukh：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 当前语音克隆仅需数秒参考音频即可仿冒特定说话人，而人类听辨正确率仅约 69%。已发表检测器多在同一基准内训练与测试，一旦生成器、编解码器、电话信道、回放设备或语言发生变化，零样本条件下等错误率（EER，越低越好 ↓）常大幅上升，难以满足风控要求。攻击还包括只替换一词的局部篡改、经压缩与社交平台多次转发的野外音频，以及扬声器播放后再录音的物理回放，这些超出实验室干净语音假设。生产部署需要无需针对每个新场景重训即可跨生成器、跨信道、跨语言保持区分度的通用基础模型，而现有工作多用子采样或重编码后测试集报告单点分数，难以支撑采购与部署决策。

**核心思路与方法架构：** 与针对单一数据集训练判别模型的常规路线不同，本文把已部署的同一生产模型 ARCAS 290M 版本 v3.1d 冻结后直接作为检测基础，全程不做基准微调、校准或阈值自定。输入为作者发布的原始文件本身，涵盖 FLAC、WAV、MP3 与原始字节音频，保持原采样率逐文件送至生产端点，每个请求返回二值判定与置信度，并据此折算伪造分数，整句判定直接采用端点自带判定。评估把 10 个基准的官方测试集全部计入，共 5644079 条，标签沿用官方协议，任何含合成或编辑片段的整句标为伪造，仅输出整句级判定而不做片段定位。同一冻结模型与默认判定策略贯穿全部录音，辅以哨兵录音重测验证输出一致，从而把传输、生成器与语言差异暴露为可比较的条件切片，而非靠重训掩盖。

**关键实验与核心代价：** 在 ASVspoof 5 的 680774 条 Track 1 评测集上，ARCAS 290M 的等错误率为 0.14%，低于挑战最优 Team T45 的 2.59%，并在 Podonos 独立榜单以 99.93% 准确率（ACC，越高越好 ↑）位列 28 个系统第一。在 SpeechFake 双语子集 346307 条上等错误率为 0.56%，优于同分布训练的 AASIST 基线的 3.48%，汇总全部 906068 条后为 0.23%，ShiftySpeech 汇总等错误率为 0.94%，低于作者零样本基线 SSL-AASIST 的 9.14%。CodecFake+ CoSG 上等错误率为 1.62%，低于最强基线 W2V2-AASIST 的 8.07%，野外 ML-ITW 上为 11.05%，低于最强基线 XLSR+AASIST 的 27.65%，开放回放 EchoFake 开集上为 7.74%，低于基线 Wav2Vec2+MLP 的 11.86%，LlamaPartialSpoof 上语句级等错误率为 5.61%，低于最强零样本基线 MRM 的 24.49%。关键代价集中在短编辑与回放上，5 个整句合成基准共检出约 480 万条伪造中的 99.60%，IndicSynth 4 种印度语言上伪造召回率达 99.998%，但单字编辑 PartialEdit 召回率仅 66.91%，伪造占比低于 10% 时召回率跌至 2.4% 到 4.00%。回放后伪造召回率从 99.84% 降至 57.62%，漏检样本的伪造分数中位数仅 0.004 到 0.04，降低阈值会更快抬高误报，而 EchoFake 闭集与 HQ-MPSD 英文子集上同分布训练基线反而更优，本文全程为冻结端点推理而无任何基准训练开销，也未安排人工主观听测。

**适用边界与深读导览：** 上述整句合成语音的结论只在原始文件逐条送检、标签沿用官方协议且判定阈值保持默认的条件下成立，PartialEdit 与 IndicSynth 因无真实语音仅能报告伪造召回率，不能量化误报。短编辑占比越小越难检出，经扬声器与麦克风重采后信号级伪迹被冲淡，已压缩网络音频与部分社媒语言及波兰语真实语音误报偏高，仍需片段级分析或人工复核，部署前须用自有采集链路重定工作点并监控误报漂移。若要深究判定与阈值无关曲线的计算、不确定性区间与分条件计数的完整切片，可查阅下文方法部分的公式与聚合说明及汇总表格。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 数秒克隆与跨信道泛化失效构成的核心检测矛盾

只需数秒参考音频即可克隆特定说话人的语音合成已进入实用阶段，人类听辨当前合成语音为假的比例仅为 69% 左右，语音钓鱼、冒充高管与伪造证据等滥用已使可靠检测成为呼叫中心、银行、平台与新闻机构的关键基础设施。生产级检测必须在实验室未预见的音频上依然成立，生成器每数月更新一次，音频还会经过编解码器、电话网、扬声器与社交平台，而攻击者可能只改动一个词而非整段话。

已发表检测器多在单一基准内训练与测试，一旦生成器、信道或语言变化性能大幅下降。在 ASVspoof 2019 上训练的模型在新集合上 EER (等错误率) 约为 19% 至 39%，同一 XLSR 加 AASIST 架构在 ML-ITW 上随训练数据从 SpoofCeleb 换为 ASVspoof 2019 时 EER 从 27.65% 恶化至 49.40%。部分篡改、物理回放与社交媒体音频更难，PartialSpoof 上训练的模型在 3 组部分伪造集上 EER 分别为 24.49%、51.38% 与 23.72%，回放开放集零样本基线为 37.81% 至 56.23%，社交媒体集上 11 个学术检测器为 40.49% 至 50.03%。

论文把任务定义为音频文件级二分类，输入为按发布原样提供的单个录音，输出为真实或 AI 生成的判决与置信度，含任意合成或编辑片段的整句即判为假，不做片段级定位。评测覆盖 10 个公开基准共 5,644,079 条录音，跨越文本转语音、声音转换与神经编解码语言模型生成器，电话与蓝牙等 12 种传输条件，物理回放、社交平台与 15 种以上语言。核心矛盾是已有路线依赖特定攻击或信道的痕迹，而生产模型需在不做基准微调的情况下跨生成器、编解码器、语言与录制条件泛化。

### 冻结生产端点对十个基准全量原样打分的评测流水线

评测遵循一条可复核原则，即每个基准都按作者发布原样打分。团队下载完整官方测试集，以原始采样率与 FLAC、WAV、MP3 或 Parquet 内音频字节直接发送至生产端点，每个请求处理一个文件，全程不采样、不转码、不混入外部语料。10 个基准共 5,644,079 条全部返回有效判决，无一因超限或解码失败被记为未打分，抽样文件经 SHA-256 校验与发布字节一致。

被测对象是冻结的生产基础模型 ARCAS 290M 版本 v3.1d，全程使用同一模型与同一默认判决策略，不做任何基准微调、校准或阈值调整。为验证部署稳定性，20 条固定哨兵录音每 30 分钟重测一次，输出保持比特级一致，早期 2,000 条试点的重放也逐条复现。模型训练数据、算力配置与超参原文未披露，采样率、帧长与参数结构亦未公开，因而无法还原 1 秒输入的张量形状与上下采样链路，此处仅追踪文件到判决的外部数据流。

公平性建立在完整分母与原生分布上。准确率随真实与伪造比例变化。EchoFake 真实与伪造数量比约为 1:1。LlamaPartialSpoof 真实与伪造数量比约为 1:12。因此同时报告 EER、AUROC、召回率与特异度等阈值无关或分率指标。PartialEdit 与 IndicSynth 本身不含真实语音，只报告伪造召回率，不从外部拼凑真实语音以免引入录制偏差。失效切片仅使用各基准自带元数据定义，引用基线只在相同测试总体下并列，并标注域内训练或零样本来源。

### 从端点判决到 EER 与 Wilson 区间的判决与统计链路

#### 假分映射与判决规则

端点对每条录音只返回离散判决与置信度，而 EER 与 AUROC 与 DET 曲线需要连续分数才能扫阈值。记第 i 条录音为音频 \(x_i\)，真实标签 \(y_i\) 以 0 表示真实语音、1 表示伪造语音，端点置信度为 \(c_i\)，预测判决为 \(\hat{y}_i\)。公式 1 的目标是把有方向的置信度折叠为统一假分 \(s_i\)，使分数越高越像假，并保留原始判决在恰为 0.5 时的边界处理，为后续阈值无关评价提供唯一输入。

\[s_{i}=\begin{cases}c_{i}&\text{if the verdict is \emph{AI-Generated}},\\ 1-c_{i}&\text{if the verdict is \emph{Genuine}}.\end{cases}\]

该映射的统计直觉是保留端点自身的决策倾向而非重设阈值。当判决为 AI 生成时 \(s_i\) 等于 \(c_i\)，判决为真实时 \(s_i\) 等于 1 减 \(c_i\)，因此高置信假与高置信真分别被推向 1 与 0 附近。若置信度恰为 0.5，则直接沿用端点返回的判决，避免人为打破平局。分数保留 4 位小数，阈值曲线逐个相异分值推进，预测标签等价于 \(s_i\) 大于 0.5，文件级判决随即进入混淆计数与分组 EER 计算。

#### 混淆计数与聚合方式

有了文件级假分后，需要把默认阈值下的判决与阈值无关的排序能力分开报告。记 \(TP\) 为判对的伪造、\(TN\) 为判对的真实、\(FP\) 为把真判假的误报、\(FN\) 为把假判真的漏检，总数 \(N\) 为四者之和。公式 2 一次给出准确率、真正率 \(TPR\) 与真负率 \(TNR\)、精确率与 \(F1\) 值，并支撑攻击术语中 APCER (攻击呈现分类错误率) 等于 1 减 \(TPR\)、BPCER (正常呈现分类错误率) 等于 1 减 \(TNR\)。含任意合成或编辑片段的整句即按假处理，片段时长只用于分组而不做定位指标。

\[\begin{aligned} \displaystyle N \displaystyle=TP+TN+FP+FN, \\ \displaystyle\mathrm{Acc} \displaystyle=\frac{TP+TN}{N}, \\ \displaystyle\mathrm{TPR} \displaystyle=\frac{TP}{TP+FN},\quad\mathrm{TNR}=\frac{TN}{TN+FP}, \\ \displaystyle\mathrm{Precision} \displaystyle=\frac{TP}{TP+FP}, \\ \displaystyle F_{1} \displaystyle=\frac{2TP}{2TP+FP+FN}. \end{aligned}\]

该组定义的物理意义是把两类错误拆开，准确率受真实与伪造比例影响，而 \(TPR\) 与 \(TNR\) 各自只在类内归一化。当伪造占比高达 12 比 1 时，漏检主导准确率但 EER 仍能反映排序能力。极端下全判假则 \(TNR\) 为 0 而 \(TPR\) 为 1，\(F1\) 与精确率随之恶化。输出一方面进入按基准池化的准确率与 \(F1\)，另一方面假分排序进入 EER 与 AUROC，使默认阈值表现与可调阈值潜力得以区分。

#### 不确定度与官方代价

大样本下点估计必须配区间，否则跨基准比较不可信。记观测比例为 \(\hat{p}\)，有效样本为 \(n\)，取 \(z\) 为 1.96 对应 95% 置信水平。公式 3 给出 Wilson (威尔逊) 区间，用于准确率、召回率等比例指标，EER 与 AUROC 则在真实与伪造类内分别自助重采样 1,000 次并固定随机种子 12345，保持原始类比例。ASVspoof 5 另用官方 Track 1 程序计算 minDCF (最小检测代价)、actDCF (实际检测代价) 与 Cllr (对数似然比代价)，端点截断概率经对数几率映射后送入程序，因而后两项描述部署态而非最优工作点。

\[\frac{\hat{p}+\frac{z^{2}}{2n}\pm z\sqrt{\frac{\hat{p}(1-\hat{p})}{n}+\frac{z^{2}}{4n^{2}}}}{1+\frac{z^{2}}{n}},\qquad z=1.96,\]

Wilson 区间在中小样本与极端比例下仍比正态近似稳定，\(n\) 越小或 \(\hat{p}\) 越接近 0 或 1 时区间越不对称，避免把 99.99% 误读为零误差。类内自助保持了 1 比 12 等悬殊比例，避免重采样改变 EER 基准。少于 30 条真实或 30 条伪造的切片只报告数值并标注样本不足，不做强结论。该不确定度链使 680,774 条上的 0.14% 与 1,797 条上的 1.62% 具有可比的误差标尺，分组 EER 差异需先看置信区间是否分离。

### 整段合成接近满分而传输条件保持稳定的主结果

本节结果按池化准确率从高到低阅读，而非跨基准排行榜，因为真实与伪造比例、原生指标与测试总体各不相同。ASVspoof 5、SpeechFake 与 ShiftySpeech 等含双类语音，可报告准确率、EER 与 AUROC，PartialEdit 与 IndicSynth 不含真实语音只报告伪造召回率。商业系统第三方结果仅在 ASVspoof 5 上经由 Speech DF Arena 存在，其余 9 个基准只与各数据集论文自带基线在相同总体下并列，子集未文档化之处均按指示性对照处理。

#### 全量池化指标一览

下表汇总 10 个基准的池化表现，是理解两类错误分布的总览。它保留原始记录数、95% Wilson 区间、EER、AUROC、F1 值、精确率、召回率、特异度以及 APCER 与 BPCER，便于对照真实与伪造比例悬殊时的准确率与 EER 背离。阅读时先看记录规模与区间宽度，再看 EER 排序，最后看误报与漏检的结构差异，全部阈值无关曲线均从 4 位小数假分推导。

| Dataset | Records | Accuracy (95% CI) | EER | AUROC | F1 | Precision | Recall | Specificity | APCER | BPCER |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASVspoof 5 | 680,774 | 99.92 (99.92–99.93) | 0.14 | 1.0000 | 99.95 | 99.96 | 99.94 | 99.84 | 0.06 | 0.16 |
| SpeechFake | 906,068 | 99.87 (99.86–99.88) | 0.23 | 1.0000 | 99.93 | 99.94 | 99.92 | 99.58 | 0.08 | 0.42 |
| ShiftySpeech | 2,781,458 | 99.32 (99.31–99.33) | 0.94 | 0.9995 | 99.65 | 99.97 | 99.33 | 98.83 | 0.67 | 1.17 |
| CodecFake+ CoSG | 1,797 | 99.00 (98.42–99.37) | 1.62 | 0.9920 | 99.04 | 98.31 | 99.79 | 98.15 | 0.21 | 1.85 |
| CodecFake+ CoRS | 24,160 | 98.52 (98.36–98.66) | 2.19 | 0.9968 | 99.23 | 99.84 | 98.63 | 95.10 | 1.37 | 4.90 |
| ML-ITW | 24,529 | 91.36 (91.00–91.70) | 11.05 | 0.9381 | 82.55 | 86.63 | 78.84 | 95.74 | 21.16 | 4.26 |
| EchoFake | 31,591 | 89.20 (88.85–89.53) | 8.50 | 0.9751 | 87.93 | 99.56 | 78.74 | 99.65 | 21.26 | 0.35 |
| HQ-MPSD | 204,038 | 86.30 (86.15–86.44) | 8.38 | 0.9712 | 90.10 | 97.81 | 83.51 | 94.49 | 16.49 | 5.51 |
| LlamaPartialSpoof | 140,616 | 82.85 (82.66–83.05) | 5.61 | 0.9819 | 89.78 | 100.00 | 81.46 | 100.00 | 18.54 | 0.00 |
| IndicSynth (fake only) | 741,594 | — | — | — | — | — | 99.998 | — | 0.002 | — |
| PartialEdit (fake only) | 107,454 | — | — | — | — | — | 66.91 | — | 33.09 | — |

总览显示准确率从 99.92% 缓慢跌至 82.85%，分界线不在生成器新旧而在伪造形态。ASVspoof 5、SpeechFake 与 ShiftySpeech 接近满分，EER 为 0.14%、0.23% 与 0.94%，AUROC 为 1.0000 至 0.9995，5 组整段合成的 4,795,490 条伪造中检出 4,776,307 条即 99.60%。代价集中在下半段，ML-ITW、EchoFake、HQ-MPSD 与 LlamaPartialSpoof 的 EER 升至 5.61% 至 11.05%，漏检 APCER 达 16.49% 至 21.26%，而 CoSG 与 CoRS 的 BPCER 相对更高。

为判断领先是否成立，需把同一总体上的最强发表基线并列。下表按基准列出 ARCAS 的 EER 与此前最优方法的 EER、方法名与训练设置，区分挑战赛、域内训练与零样本 3 种来源。ShiftySpeech 用池化 EER 对作者的域平均，CoSG 用 866 条真实而非论文的 850 条，HQ-MPSD 仅取英语，PartialEdit 仅有伪造召回率，行间不可直接排序。

| Benchmark | ARCAS | Prior | Prior method | Setting |
| --- | --- | --- | --- | --- |
| ASVspoof 5 | 0.14 | 2.59 | Team T45 (Wang et al., 2024) | Challenge |
| SpeechFake (BD) | 0.56 | 3.48 | AASIST (Huang et al., 2025) | In-dom. |
| ShiftySpeech | 0.94 | 9.14 | SSL-AASIST (Garg et al., 2025) | Zero-shot |
| CodecFake+ CoSG | 1.62 | 8.07 | W2V2-AASIST (Chen et al., 2025) | Zero-shot |
| ML-ITW | 11.05 | 27.65 | XLSR+AASIST (Li et al., 2026) | Zero-shot |
| EchoFake (open) | 7.74 | 11.86 | Wav2Vec2+MLP (Zhang et al., 2026) | In-dom. |
| EchoFake (closed) | 10.83 | 0.27 | Wav2Vec2+MLP (Zhang et al., 2026) | In-dom. |
| HQ-MPSD (EN) | 1.7 | 0.29 | TDAM (Li et al., 2025) | In-dom. |
| LlamaPartialSpoof | 5.61 | 24.49 | MRM (Luong et al., 2024) | Zero-shot |
| PartialEdit | — | 23.72 | XLSR-SLS (Zhang et al., 2025) | Zero-shot |

除两个域内训练特例外，ARCAS 在其余可比 EER 的零样本对照上均低于最强基线，PartialEdit 仅有伪造召回率而不参与 EER 排序。ASVspoof 5 以 0.14% 低于挑战赛最优 2.59%，SpeechFake 双语名单以 0.56% 低于域内 3.48%，ShiftySpeech 以 0.94% 低于零样本 9.14%，ML-ITW 以 11.05% 低于 27.65%。反例同样清晰，EchoFake 封闭集域内基线以 0.27% 优于 10.83%，HQ-MPSD 英语域内基线以 0.29% 优于 1.7%，说明自有数据训练仍可在自有分布上占优。

#### 传输条件与挑战赛对照

ASVspoof 5 的 680,774 条覆盖 16 种未见攻击与 12 种传输条件，是检验信道稳健性的关键切片。下表按官方条件列出准确率与 EER，典型信道从原始文件、WhatsApp 与 VoLTE 到神经编解码与二次分享，附带窄带电话与真实蓝牙录制。比较在同一冻结模型与同一阈值下进行，可直接读出双重压缩与特定攻击是否为可测弱点所在。

| Condition | Typical real-world channel | Acc. | EER |
| --- | --- | --- | --- |
| No compression | Original file | 99.99 | 0.05 |
| Opus, wideband | WhatsApp, Zoom, Discord | 99.96 | 0.14 |
| AMR, wideband | Mobile call (VoLTE) | 99.93 | 0.17 |
| Speex, wideband | Older VoIP applications | 99.94 | 0.04 |
| EnCodec | Neural compression | 99.81 | 0.28 |
| MP3 | Shared audio files | 99.99 | 0.03 |
| M4A / AAC | Phone memos, video platforms | 99.97 | 0.11 |
| MP3 then EnCodec | Audio re-shared across platforms | 99.69 | 0.35 |
| Opus, narrowband | Low-bandwidth call | 99.79 | 0.29 |
| AMR, narrowband | 2G/3G telephone call | 99.96 | 0.13 |
| Speex, narrowband | Low-quality VoIP | 99.92 | 0.10 |
| Real devices | Bluetooth or cable transmission | 99.97 | 0.10 |

12 个条件下准确率保持在 99.69% 至 99.99%，EER 为 0.03% 至 0.35%，最弱为 MP3 后接 EnCodec 的 99.69% 与 0.35%，接近跨平台二次分享场景。521 条错误中 302 条为漏检、219 条为误报，YourTTS 占漏检 146 条，双重压缩与窄带 Opus 占主要份额。收益是 WhatsApp、移动通话与蓝牙耳机交付的克隆语音与干净文件同样可检，约每 1,300 条一错，代价是双重压缩与个别 TTS 攻击仍留下可测残差。

为把 0.14% 放在领域坐标中，下图并列官方挑战赛最优开放与封闭提交、官方基线与商业挑战系统。横轴为 EER，数值越低越好，蓝色为 ARCAS 290M，灰色为发表基线，橙色为商业系统。阅读时先看横轴跨度，再比较 ARCAS 与次优的倍数差距，注意训练规则不同因而只做背景对照。官方 Track 1 指标 minDCF 为 0.00361，actDCF 为 0.00644，Cllr 为 0.01486 比特。

[![原论文 Figure 2：Neural Defend ARCAS 290M and selected ASVspoof 5 Track 1 evaluation results (EER, %).](https://arxiv.org/html/2611.27784v1/sota_asvspoof5_challenge_thin.svg)](https://arxiv.org/html/2611.27784v1/sota_asvspoof5_challenge_thin.svg)

*论文图 2：ASVspoof 5 挑战赛最优提交与基线的等错误率对比，突出冻结模型的泛化优势（原论文 Figure 2）。*

条形从左到右按 EER 从小到大排列，ARCAS 蓝条以 0.14% 居于最左，次优开放提交 T45 为 2.59%，封闭最优 T32 为 8.61%，官方 AASIST 基线延伸至 29.12%，差距达 18 倍以上。商业挑战系统 Reality Defender 为 5.50%，同样高于 ARCAS 一个数量级以上。横轴延伸至 30% 以容纳基线，长灰条与短蓝条的对比呈现基础模型相对单基准训练模型的泛化增益，但训练数据与规则不同使该对比仅为背景而非协议级排名。

SpeechFake 以双语测试名单为官方对照口径，共 346,307 条，其中伪造 309,065 条。下图比较同一双语名单上的 ARCAS 与 3 组发表基线，横轴仍为 EER 越低越好。先看 ARCAS 蓝条与 AASIST 双语训练基线的相对位置，再看仅用 ASVspoof 2019 训练的模型退化幅度，以理解训练多样性与冻结泛化的差异。池化全部名单后 EER 为 0.23%，双语名单上为 0.556%。

[![原论文 Figure 3：Neural Defend ARCAS 290M and selected published SpeechFake results (EER, %).](https://arxiv.org/html/2611.27784v1/sota_speechfake_thin.svg)](https://arxiv.org/html/2611.27784v1/sota_speechfake_thin.svg)

*论文图 3：双语名单上冻结模型与三种发表基线的等错误率对比（原论文 Figure 3）。*

图中蓝条 ARCAS 为 0.56%，双语训练的 AASIST 为 3.48%，W2V 加 AASIST 为 3.54%，而仅用 ASVspoof 2019 训练的同架构骤升至 23.78%。TTS 与声音转换均接近 100%，仅 BigVGAN 声码器重合成漏检 635 条，召回率为 94.96%。该对比说明在相同双语总体下冻结模型的误差明显低于最强发表基线，代价是声码器重合成这类弱痕迹语音仍是可测缺口。全篇未做人工主观听测，结论仅来自计数与阈值无关指标。

编解码语言模型与多语言整段合成同样接近满分。CodecFake+ CoSG 的 EER 为 1.62%，优于最强零样本基线 8.07%，17 个系统中 16 个达 100%，仅 GPST 漏 2 条，CoRS 上 28 个编解码器达 100%，DAC 在 24 kHz 下召回率仅 66.5%。ShiftySpeech 池化 EER 为 0.94%，6 组 TTS 全部接近 100%，YouTube 来源 EER 升至 5.42%。IndicSynth 4 种印度语言共 741,594 条伪造中仅漏 17 条，召回率为 99.998%，但因无真实语音无法衡量误报。

### 伪造占比、物理回放与在野平台侵蚀文件级判决的诊断

文件级判决的残差并非随机，而是随伪造占比、声学通道与平台压缩系统性出现。下节诊断把最难的 3 类条件拆开，即短部分伪造、物理回放与社交在野音频。共同特征是漏检假分集中于 0 附近而非 0.5 边界，中位假分仅 0.004 至 0.04，降低阈值会先抬高误报而不挽回漏检，因而更适合分流至片段分析或人工复核，而非调整工作点。

#### 伪造占比决定检出率

两组部分伪造集按伪造时长占比分组，可分离生成器与占比的影响。下表列出整段、50% 以上、25% 至 50%、10% 至 25% 与 10% 以下五档的召回率，LlamaPartialSpoof 共 140,616 条与 PartialEdit 共 107,454 条并列。比较在同一文件级阈值下的 utterance 级判决进行，Llama 覆盖 3 种拼接方式与 6 种生成系统，PartialEdit 覆盖两种编辑器及其编解码变体，可读出短编辑是否为跨工具共性瓶颈。

| Fake share of clip | LlamaPartialSpoof | PartialEdit |
| --- | --- | --- |
| Whole clip | 99.97 | — |
| 50% or more | 95.08 | 92.8 |
| 25–50% | 65.17 | 62.6 |
| 10–25% | 26.73 | 24.6 |
| Under 10% | 4.00 | 2.4 |

召回率随占比单调下跌，整段接近 99.97% 至 100%，50% 以上为 95.08% 与 92.8%，25% 至 50% 跌至 65.17% 与 62.6%，10% 至 25% 仅 26.73% 与 24.6%，10% 以下低至 4.00% 与 2.4%。24,098 条漏检中几乎全部为部分伪造，中位假分仅 0.04，59% 低于 0.1，表明模型自信而非犹豫。收益是大多为假的片段可靠检出且零误报，代价是单句改写需转入片段级复核，文件级阈值无法兼顾。

#### 社交平台与语言的在野退化

ML-ITW 的 24,529 条全部来自社交平台压缩与背景干扰，生成器未知且多为商用系统，是零样本泛化的硬检验。该集覆盖 14 种语言、7 个平台与 180 位公众人物，每条均经平台压缩，常带音乐、噪声或剪辑。下表按语言与平台拆分召回率、特异度与 EER，乌克兰语等少于 30 条伪造的语言已略去。比较在同一评测划分上的已发表零样本基线进行，重点看语言与平台谁主导误差。

| Language | Rec. | Spec. | EER | Platform | Rec. | Spec. |
| --- | --- | --- | --- | --- | --- | --- |
| Spanish | 97.0 | 98.8 | 2.4 | TikTok | 92.8 | 99.5 |
| Japanese | 82.0 | 98.9 | 7.2 | Bilibili | 91.8 | 87.2 |
| English | 82.5 | 97.5 | 9.1 | X | 85.4 | 98.5 |
| Chinese | 78.8 | 90.9 | 12.3 | Facebook | 78.8 | 97.1 |
| French | 85.2 | 95.4 | 14.8 | Douyin | 77.5 | 99.5 |
| Hindi | 79.1 | 99.7 | 15.2 | YouTube | 74.2 | 98.9 |
| Korean | 69.1 | 99.8 | 15.3 | RedNote | 66.3 | 98.1 |
| German | 76.7 | 95.3 | 18.6 |  |  |  |
| Turkish | 60.2 | 93.7 | 26.1 |  |  |  |
| Russian | 22.7 | 100.0 | 28.5 |  |  |  |
| Portuguese | 56.5 | 98.4 | 28.7 |  |  |  |

总体 EER 为 11.05%，召回率为 78.84%，特异度为 95.74%，仍优于最强发表基线 27.65%。但西班牙语 EER 为 2.4% 而俄语为 28.5%、葡萄牙语为 28.7%，TikTok 召回率为 92.8% 而 RedNote 为 66.3%，Bilibili 误报集中 546 条。漏检中位假分仅 0.007，72% 低于 0.1，降低阈值会先抬高误报。代价是语言与平台成为主要残差，俄语等小样本需谨慎解读，部署时应按平台做本地校验。

物理回放是第二类系统性退化。EchoFake 原始音频上伪造检出率为 99.84%，真实通过率为 99.94%，EER 仅 0.15%，回放后伪造检出率跌至 57.62%，真实通过率仍为 99.37%，EER 升至 16.29%。3,345 条漏检中几乎全部来自回放，有线耳机录制仅 38.1%，三星 Galaxy A54 仅 43.8%，50 cm 距离仅 44.0%。越自然的生成器损失越大，LLaSA 仅 60.7%，而较老的 SpeechT5 仍达 96.2%，说明扬声器与麦克风洗掉了全文件伪影。

部分伪造叠加声学退化时两类问题并发。HQ-MPSD 整段伪造检出率为 100%，干净部分伪造为 83.2%，叠加背景噪声、房间混响或两者后分别跌至 78.3%、61.1% 与 56.3%，占比低于 25% 的片段仅 19.1%。PartialEdit 单词级无编解码编辑仅 31.0% 与 36.6%，同一编辑经神经编解码整文件通过后达 100%，表明检测器响应全文件编解码痕迹而非编辑本身。波兰语真实语音误报率达 22.3%，为唯一语言级误报集中。

#### 在野与回放曲线的对照

为把 11.05% 放在零样本坐标中，下图并列同一 ML-ITW 划分上的 3 组发表基线，横轴为 EER。蓝色为 ARCAS，灰色为基线，先看 ARCAS 与 SpoofCeleb 训练的 XLSR 加 AASIST 的差距，再看现成检测器 40% 以上的失效，理解冻结基础模型相对单语料模型的增益与剩余天花板。所有系统均未在 ML-ITW 上训练，评价划分完全相同，数值只做背景参考而非严格排名。

[![原论文 Figure 7：Neural Defend ARCAS 290M and selected published ML-ITW results (EER, %), all zero-shot on the same…](https://arxiv.org/html/2611.27784v1/sota_mlitw_thin.svg)](https://arxiv.org/html/2611.27784v1/sota_mlitw_thin.svg)

*论文图 7：同一社交音频划分上冻结模型与已发表零样本基线的等错误率对比（原论文 Figure 7）。*

图中 ARCAS 蓝条为 11.05%，次优基线为 27.65%，另两组为 40.49% 与 41.85%，误差不到最强基线的一半。灰条长度呈现单语料训练在社交压缩音频上的崩塌，而 ARCAS 仍保留约十分之一 (11.05%) 漏检。该对比为同一划分上的零样本对照，但基线为研究模型而 ARCAS 为生产系统，仍只做背景参考而非严格排名。低误报 ROC 视角进一步揭示阈值难以挽回漏检，见下图。

低误报区的 ROC 视角对高审查成本部署最有用，横轴为对数误报率，纵轴为真正率，越靠左上越好。下图汇总 9 组含双类语音的曲线，ASVspoof 5、SpeechFake 与 ShiftySpeech 贴近左上，而 ML-ITW 与回放集在低误报下保持高漏检。阅读时先沿横轴 10 的负 5 次方到 10 的 0 次方扫视，再比较各曲线在 10 的负 3 次方处的高度。曲线逐个相异 4 位小数分值推进，CoRS 因仅 755 条真实语音无法分辨更低误报。

[![原论文 Figure 13：Neural Defend ARCAS 290M low-false-positive-rate ROC curves across evaluated benchmark populations.](https://arxiv.org/html/2611.27784v1/low_fpr_roc.svg)](https://arxiv.org/html/2611.27784v1/low_fpr_roc.svg)

*论文图 13：九组双类基准在低误报区的受试者工作特征曲线汇总（原论文 Figure 13）。*

图中整段合成 3 组在全阈值范围贴近左上，而部分伪造、回放与在野 4 组即使放宽误报仍保持高漏检。CoRS 因仅 755 条真实语音无法分辨低于 1 除以 n 的误报率，曲线呈阶梯状。该形态印证分数分布观察，大量漏检假分集中于 0 附近而非 0.5 边界，调低阈值会先增加误报而不挽回漏检，因此短编辑与回放音频更适合分流至片段分析或人工复核。

### 何时可直接采用基础模型何时必须叠加人工复核

3 条运营结论在所述条件下成立。整段合成语音含编解码与电话音频可靠检出，覆盖语音克隆来电与留言。部分篡改是主要剩余风险，单个替换词或短语通常不被标记，证据与录音陈述需走片段级分析或人工复核。过空传播显著退化，扬声器重录召回率下降约 40 个百分点，低成本录制设备更差。YouTube 已压缩音频、俄语、葡萄牙语、土耳其语社交音频与波兰语读语音误报是明确的数据收集与本地验证目标。

比较需按背景而非排名理解。在所有可比 EER 的零样本对照上 ARCAS 误差为最强基线的 2.5 倍至 11 倍以上更低，在 Podonos 独立榜上 28 个系统中排名第 1，准确率为 99.93%，在 ASVspoof 5 上 EER 为 0.14%，低于 Speech DF Arena 上所有商业系统。但域内训练基线可在自有基准上反超，如 EchoFake 封闭集 0.27% 对 10.83%，HQ-MPSD 英语 0.29% 对 1.7%。部分总体存在微小差异，竞技场子集未文档化，自适应攻击与校准未评估。

复现与部署需区分代码、权重与可运行系统。本文训练数据、算力硬件、优化器与超参、推理 RTF 与显存均原文未披露，音频统一采样率与帧长步长亦未公开，仅知按发布原样送检并含 FLAC、WAV、MP3 与 Parquet 字节。未发现经验证的公开代码、权重、数据新链接或演示页，不可声称已开源。附录列出各基准发布版本、许可与记录计数及完整分组统计。复现第一步是按附录版本获取 10 个基准完整测试集，以原始字节送入 v3.1d 生产端点并记录集成版本与日期，部署前须用实际采集链音频设定阈值并监控误报漂移，高影响决策叠加人工复核。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：按发布原样送检，含 FLAC、WAV、MP3 与 Parquet 内音频字节并保持原始采样率，统一采样率、帧长步长与码率原文未披露，因果前瞻延迟与 RTF 原文未披露
- **训练与评测数据**：评测 10 个公开基准完整官方测试集共 5,644,079 条，含 ASVspoof 5、SpeechFake、ShiftySpeech、CodecFake+、ML-ITW、EchoFake、HQ-MPSD、LlamaPartialSpoof、IndicSynth 与 PartialEdit，覆盖 15 种以上语言，模型训练语料与规模原文未披露
- **算力与训练耗时**：原文未披露训练所用 GPU 或 TPU 型号与数量、训练步数轮数与耗时，评测经由生产端点完成，20 条哨兵录音每 30 分钟重测验证稳定性
- **核心超参数与配置**：模型结构、优化器、学习率与批大小原文未披露，冻结模型 v3.1d 采用单一默认阈值 0.5 判决，分数保留 4 位小数，Wilson 区间 z 为 1.96，EER 自助 1,000 次种子 12345
- **推理速度与部署开销**：RTF、延迟、吞吐与显存原文未披露，每请求处理一个音频文件，5,644,079 条全部返回有效判决，无未打分记录
- **开源产物与协议状态**：未发现经验证的公开代码、权重、数据新链接或演示页，不可声称已开源，评测经由生产端点完成，附录列出各基准发布版本与许可
- **附录与补充材料要点**：附录列出 10 个基准发布版本、许可与记录计数，给出按攻击、编解码、回放设备、语言与伪造占比的完整分组统计，并汇总低误报 ROC、DET 与精确率召回率曲线

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.27784v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（模型报告）：创新 18% · 严谨 14% · 实验 22% · 清晰 8% · 影响 18% · 复现 6% · 工程 14%（开源上限加分 +0.6）

- 核心优势：同一冻结模型在ASVspoof 5的680774条上以0.14%等错误率大幅领先挑战最优2.59%，并在Podonos榜单以99.93%准确率位列28个系统第一。

- 核心优势：全量官方测试集原样逐条送检共5644079条，冻结无微调并以哨兵重测验证输出一致，配完整区间与重采样及官方评价包核算。

- 核心优势：按生成器族、12种传输条件、回放设备距离、语言平台与伪造占比逐层切片，并诚实保留两处域内落败边界行。

- 主要短板：单字编辑无编解码时召回仅31.0%到36.6%，伪造占比低于10%时仅2.4%到4.00%，整文件过神经编解码后升至100%，说明响应全文件伪迹而非编辑本身。

- 主要短板：商业Arena子集组成未公开比较仅为指示性，Podonos私有标签无法独立核对，且全部作者来自同一厂商存在自评偏差风险。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
