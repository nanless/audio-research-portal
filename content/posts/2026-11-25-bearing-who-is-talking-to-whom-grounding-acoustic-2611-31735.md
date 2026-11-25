---
title: "BEARING: Who Is Talking to Whom? Grounding Acoustic Direction in Vision for Online Multi-Party Conversation"
date: 2026-11-25
draft: false
tags: [可见活跃说话人检测, 说话人分离标注, 强化学习, 信号处理]
categories: [论文速递]
description: "论文针对多人对话中在线判定谁在说与对谁说的问题, 提出把麦克风阵列测得的声源方向配准到图像作为视觉提示与可验证奖励, 在 9,498 条话语上把说话人准确率从 54% 提升到 74% 而收件人仅提升约 2 个点, 代价是前视从 5 s 缩到 0.5 s 时日志错误率上升 4.5 个点且冷启动前 2 分钟低于纯视觉."
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31735"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "声学方向配准图像如何支持在线多人对话归因"
paper_digest_original_title: "BEARING: Who Is Talking to Whom? Grounding Acoustic Direction in Vision for Online Multi-Party Conversation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.31735v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31735v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31735v1.pdf"
paper_digest_primary_task: "可见活跃说话人检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.active-speaker-detection","label":"可见活跃说话人检测"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.signal-processing","label":"信号处理"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对多人对话中在线判定谁在说与对谁说的问题, 提出把麦克风阵列测得的声源方向配准到图像作为视觉提示与可验证奖励, 在 9,498 条话语上把说话人准确率从 54% 提升到 74% 而收件人仅提升约 2 个点, 代价是前视从 5 s 缩到 0.5 s 时日志错误率上升 4.5 个点且冷启动前 2 分钟低于纯视觉."
paper_digest_reader_sections: [{"heading":"多人重叠与离屏语音让谁在说对谁难以在线判定","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"BEARING 用阵列方向配准图像并维护在线注册表","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"方向提示证据卡与可验证奖励如何驱动对齐","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"方向标记大幅提升说话人准确率但几乎不改变收件人判断","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"视觉在共位时挽回方向失效的区间","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"可验证奖励与在线前视的代价分解","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"几何信号的边界复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nader Lobandi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lombe Chileshe"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mohammad Mehdi Hosseini"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mohammad H. Mahoor"}]
paper_digest_abstract_sha256: "fb856a3436f8b319a7f9ddb4cd16a01fa63a19da12975b1df38c47f3adae3f31"
paper_digest_sidecars: {"citation.bib":{"sha256":"75fd11b3b689f0ba0c46aec903d920b22fb8715e2f328866c58a1ee70d3e86c2","url":"/audio-research-portal/client/papers/2026-11-25/2611-31735/citation.bib"},"citation.json":{"sha256":"a839c8c12d46684c4f79c9d06e16dcc65560202467b39650af1c1ba717ac225e","url":"/audio-research-portal/client/papers/2026-11-25/2611-31735/citation.json"},"citation.ris":{"sha256":"e78dfd655c843ef4d9a9170cc6f37fc561a494862aa38c317c58a951b77b6435","url":"/audio-research-portal/client/papers/2026-11-25/2611-31735/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"089ef788adcf6c7cc2ffa1f6ae6db41d40d3878dc483906ba230f4f789515a14","url":"/audio-research-portal/client/papers/2026-11-25/2611-31735/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "7c078208ecea237f42535f25ee6e9158054df7b360857bedb70e36c118de4205"
paper_digest_api_reader_plan_sha256: "4aa41345f8e0be165172fb6e73ff021231013dc30710b8b45757898c3f7a5cca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ffca244f14eef0d44df220da553ba339cb5144ddeab84cdb144206ef153d3313"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "12343ed3dbf9d41176349ceecad17d602f2ba2a2c9bf64de1ff07fce082b15d7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e4946f3b721feabec1f7486508761ed8662cea4f0c9e123518415095a67cd8a0"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5a87e73aa7a1e9d7b24d285fbf33c03ba38e652d5fbfb4a640979d788b13fa24"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 声学方向配准图像如何支持在线多人对话归因

> 英文题目：*[BEARING: Who Is Talking to Whom? Grounding Acoustic Direction in Vision for Online Multi-Party Conversation](https://arxiv.org/abs/2611.31735v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-research-portal/papers/?concept=task.av-understanding) → [可见活跃说话人检测](/audio-research-portal/papers/?concept=task.active-speaker-detection)；[说话人分离标注](/audio-research-portal/papers/?concept=task.diarization)
- **研究方法**：[强化学习](/audio-research-portal/papers/?concept=method.reinforcement)；[信号处理](/audio-research-portal/papers/?concept=method.signal-processing)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 7.5/10 | 技术严谨 7.1/10 | 实验充分 7.2/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 3.0/10 | 可复现 7.4/10 | 工程/实践 6.2/10


## 👥 作者与机构

- Nader Lobandi：机构信息未能在本次解析中与作者逐人可靠绑定
- Lombe Chileshe：机构信息未能在本次解析中与作者逐人可靠绑定
- Mohammad Mehdi Hosseini：机构信息未能在本次解析中与作者逐人可靠绑定
- Mohammad H. Mahoor：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 多人交谈需要同时回答谁在说话、话语说给谁以及谁在何时说话，输入是相机画面加话筒阵列声音，输出是说话人到可见人脸或画外、收件人为某一人或群体以及时间轴上的说话人标签。现有路线多在单通道剪辑上离线运行，把音频压缩为单路波形，丢弃了声源方位这一物理测量，在重叠、遮挡与人走出画面时视觉线索失效。另一条路线用模型给自己打分的自评价奖励做对齐，分数无法对照测量核验，容易自信地判错。在线运行时只能看到截至当前加有限前瞻的证据，还要在无注册条件下维护人物、声音与方位的对应，延迟与准确率需要量化。

**核心思路与方法架构：** 与最接近的单通道离线加自评价路线相比，本文保留其视觉语言理解与转录上下文，只把一维方位测量注册进图像并用它构造可核验奖励。以一条话语为例，8 话筒阵列信号经相位变换加权的转向响应功率搜索得到方位角估计，配准将该角度映射为图像坐标，AMI 用四宫格特写加红框标出所在面板，EasyCom 用半透明红圈标出投影点或在画外时用边缘箭头指示，同时以字母标记每位参与者。同一话语的三帧画面、当前与前两轮转录及可选证据卡一起送入模型，注册表持续维护滚动声纹嵌入、人脸表示、常用座位与声学方向，读出时按前瞻截止提交标签且不改写。27B 视觉语言模型零样本冻结使用，7B 全模态策略仅更新低秩增量，梯度提升评论器在奖励与卡片中冻结使用，方向与视觉按峰形锐度加权融合，可核验奖励同时约束说话人位置、置信度校准与收件人基线，从而把几何测量变成可训练信号。

**关键实验与核心代价：** 在 9498 条收件人已标注话语上评估，覆盖 AMI Idiap 的 3483 条、Edinburgh 与 TNO 的 2675 条和 EasyCom 的 3340 条，指标方向均为越高越好 ↑。零样本 27B 模型加方向标记后说话人准确率从 Idiap 的 52.4% 升至 79.7%，Edinburgh 与 TNO 从 49.2% 升至 78.1%，EasyCom 从 59.2% 升至 66.0%，混合后平均提高 20.6 个百分点，95% 置信区间为 [15.8, 24.5]，证据卡再加 2.0 个百分点。收件人准确率仅提高约 2 个百分点，转录文本单独已与视觉持平。可验证奖励在相同策略数据与优化器下用分组相对策略优化把说话人准确率从未训练的 51.5% 提升至 64.5%，超过自评价奖励的 59.9% 达 4.6 个百分点，离线优化中收件人宏平均 F1 分别高 5.9 与 23.6 个百分点。代价方面，前瞻从 5 s 缩至 0.5 s 使 AMI 的分离错误率上升 4.5 个百分点，语言模型每条话语需 2.1 s 至 2.6 s 推理延迟，冷启动前 2 分钟低于纯视觉。

**适用边界与深读导览：** 上述增益在主结果表中使用文献记载座位或同室他场测得座位的条件下成立，无标签配准仅在 Idiap 室视与 400 条先导和冷启动中验证，Edinburgh 与 TNO 低分辨率室视下配准失效，说话人与收件人实验还使用了参考转录、前两轮说话人标签与人工话语边界。共位分析仅在 AVDIAR 的 20 个序列上成立，其中 17% 并发帧夹角在 15° 以内，收件人中一人与群体的抉择连人工注视也只能到 56% 至 63% 平衡准确率。附带的演示视频展示了 IS1008a 会议冷启动时红圈、绿框与耳机转录白角标的对照，可直观核对配准形成过程。若要深究奖励公式中基线修正与限幅的作用、融合权重的推导以及分站点与多种子区间，可查阅下文方法与实验章节的公式说明与消融表。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多人重叠与离屏语音让谁在说对谁难以在线判定

多人对话的机器理解需要同时回答谁在说话与话语指向谁, 涵盖说话人检测, 收件人检测与说话人日志三项任务. 实际房间中经常出现语音重叠, 人脸遮挡与说话人走出画面, 此时仅靠单通道音频与可见人脸难以确定声源归属. 在线系统还要求在时刻 t 仅用 t 加前视 Δ 内证据做出不可改写的判定, 延迟与精度直接权衡.

已有基准如 AMUSE 把多方理解做成离线片段问答, 用单通道音频对齐大模型, 奖励来自模型自评, 感知一致性与文本正确性, 没有物理测量参与. 这类流程可利用未来上下文, 却丢掉了麦克风阵列提供的空间信息, 也无法表示从未入镜的说话人. 基于 Qwen2.5-Omni 的强化学习同样以文本标签一致性为奖励, 在重叠与离屏条件下信号不足.

BEARING 采取几何优先路线, 在相机旁放置麦克风阵列并测量声源到达方向 DOA (direction of arrival, 声源到达方向). 通过标定 Π 把方向映射为图像坐标 \(u_{t}=\Pi(\hat{\theta}_{t})\), 落在视野外则标记为离屏. 该方向可验证且廉价, 既作为视觉提示帮助识别, 也作为对齐奖励的检查依据, 并由免注册的脸, 声音与方向注册表支撑在线读出.

### BEARING 用阵列方向配准图像并维护在线注册表

系统为每个匿名身份维护滚动声音嵌入, 人脸表示, 座位位置与声学方向, 无需预先注册即可在线创建与合并. 相机帧与阵列信号被处理为人脸轨迹, 声音嵌入, 声源方向与语音分段, 持续更新注册表. 说话人, 收件人与日志读出共享同一状态, 在时刻 t 用至 t 加 Δ 的证据提交标签且不再改写, 以 Δ 为变量扫出延迟精度曲线.

输入侧每条话语取 3 帧, 分别位于标注话语的 20%, 50% 与 80% 处, 附带当前与前两轮的参考转录文本及前轮说话人标签. 在 AMI 上 4 路特写拼成 2×2 图像并用红框标出声源所在面板, 在 EasyCom 上以半透明红圆标出视野内方向, 以左右边缘箭头标出视野外方向. 每位参与者带有字母标签, 模型需输出说话人, 收件人与置信度.

收件人决策侧有多类输入与多个估计器协同. 输入为标注帧, 阵列方向, 转录文本与证据卡, 其中方向既画在帧上又以文字写入卡中, 转录含前两轮与当前措辞. 估计器包括零样本 27B 视觉语言模型, 跨站监督的 Omni-7B, 卡上线索的梯度提升树评论家与奖励对齐的 Omni-7B. 前三者以专家乘积组合后输出一人或群体, 奖励对齐策略单独作答, 所有模型与评论家均不见测试站点标签, 权重在开发集上固定.

### 方向提示证据卡与可验证奖励如何驱动对齐

#### 方向如何落到图像上

阵列方向估计在 AMI 上对 SRP-PHAT (steered response power with phase transform, 相位变换可控响应功率) 在 300 Hz 至 3,500 Hz 频段按块统计直方图并取最强峰, 在 EasyCom 上用实测阵列流形在 200 Hz 至 6,000 Hz 范围对 1,020 个方向扫描并在整句累积. 重噪声餐厅中单帧估计不可用, 离屏分析引用近讲麦克风的方向作为上界, 中值误差在可见说话人为 7° , 离屏为 17.4° . 方向经配准落到图像即成为视觉提示.

免标签配准分 4 步实现, 包括人脸轨迹按 ArcFace 嵌入聚类并取最频位置为座位, 仅从声音得到方向直方图峰, 按主动说话分数随方向上升幅度把人脸与方向一对一匹配为锚点, 以及锚点间分段线性插值. 在 AMI 上中值误差为 4.3° 与 5.5 px. 附录澄清主结果表实际使用文献座位方向而非该免标签结果, 免标签仅用于 400 条 pilot 与冷启动研究, 这一点决定复现前提.

#### 融合规则怎样处理共位

当 2 名并发说话人共享方位时单一方向无法区分, 系统比较 3 条规则, 包括仅方向的最近人脸, 仅视觉的最高 TalkNet 主动说话分数, 以及两者可靠性加权融合. 融合给每张可见人脸打分 \(z+r(1-d/90^{\circ})\), 其中 \(z\) 为跨可见人脸标准化的平均主动说话分数, \(d\) 为到最近 k 个峰中最近者的角度, \(r\) 为最弱与最强峰功率比, 单说话人时为 1. 方向峰越尖锐权重越大, 两峰合并为宽峰时视觉接管决策.

#### 可验证奖励由三项构成

模型预测记为 \(\hat{y}=(\hat{\phi},\hat{\alpha},c)\), 分别为说话人, 收件人与置信度 \(c\) 在 0 至 1 之间. 奖励目标是让命名说话人落在实测方向上, 让置信度与该检查一致, 并让收件人估计不被常答 group 套利. 下式为完整奖励, 每一项都可对照测量检验, 而非模型自评.

\[r(\hat{y})=s(\hat{\phi},\hat{\theta}_{t})-\big(c-s(\hat{\phi},\hat{\theta}_{t})\big)^{2}+R_{\mathrm{adr}}(\hat{\alpha}),\]

该式物理直觉是几何一致加校准惩罚再加收件人项. \(s(\hat{\phi},\hat{\theta}_{t})\) 在命名座位落在话语内 SRP-PHAT 峰 25° 内时为 1 否则为 0, 反映阵列是否听到该人方向. \((c-s)^{2}\) 在自信与测量不符时扣分, 若方向不符却报 \(c=1\) 则扣 1 分, 迫使模型跟随方向而非虚高置信. \(R_{\mathrm{adr}}\) 为收件人项, 输出驱动下一步梯度更新, 在 GRPO 中该项被屏蔽以保持稳定, 在排序微调与 DPO 中与证据卡共同进入提示.

收件人项由卡上线索的冻结评论家 \(p_{\psi}(\alpha\mid e_{t})\) 给出, \(e_{t}\) 为截至句末因果可得的阵列说话人, 上一说话人, 注视朝向, 基频走势, 对话行为与评论家估计. \(q\) 为评论家在训练话语上的平均分布, \(\beta=0.6\) 为基线扣除权重, 裁剪到 -2 至 2 之间. 下式通过减去基线对数概率使常答 group 无正期望奖励.

\[R_{\mathrm{adr}}(\alpha)=\mathrm{clip}\big(\log p_{\psi}(\alpha\mid e_{t})-\beta\log q(\alpha),\,-2,\,2\big),\]

该式统计直觉是基线校正的对数似然, \(\log p_{\psi}\) 越高奖励越高, 但减去 \(\beta\log q\) 后高频答案被压低. 当 \(\beta=1\) 时由 Jensen 不等式可知任何常数答案期望非正, 实选 0.6 使正确回答平均 -0.17 而常答 group 为 -0.48, 领先 0.31 且 AUROC (area under ROC curve, ROC 曲线下面积) 保持 0.807. 若评论家偏向 group, 基线项会拉低该答案, 迫使策略保持 51% 左右的 group 比例而非坍缩到 98%. 该奖励驱动 LoRA (low-rank adaptation, 低秩适配) 权重更新, 自评基线则以相同数据与优化器替换为模型自评均值.

对齐使用相同的 594 条 AMI 训练话语且无收件人标签, 策略为 Qwen2.5-Omni-7B 语言部分 rank 为 16 的 LoRA, 每配置 3 个种子. GRPO 运行 300 步每条 4 个样本且无证据卡, 排序微调与 DPO 每条 8 个样本且有证据卡, DPO 偏好最优与最差对. 自评基线为 AMUSE 自评部分的实现, 取回答概率, 自检分数与声明置信均值, 不含感知智能体与正确性项.

### 方向标记大幅提升说话人准确率但几乎不改变收件人判断

#### 评测范围与公平性前提

比较前需先明确 4 组语料的分工, 重叠程度与可见性差异, 否则无法判断方向何时有效与何时多余, 下表给出每组语料的用途, 重叠语音占比, 双人可见比例, 角间距中值与近距离比例, 为后文分条件解读提供基准.

| Corpus | Used for | Overlap | Both vis. | Med. Δθ | <15∘ |
| --- | --- | --- | --- | --- | --- |
| AMI [3] | S, A, O | 14.6% | room view | ≥41∘ | 0% |
| EasyCom [17] | S, A | 17.7% | 32% | 45.9∘ | 0% |
| AVDIAR [22] | C | 21.1% | 99% | 24.0∘ | 17% |
| VoxConverse [10] | O | 3.7% | – | – | – |

AMI 与 EasyCom 配有阵列, 相机, 说话人与收件人标签, 承担说话人与收件人评测, AVDIAR 提供干净人脸承担共位研究, VoxConverse 单通道承担在线日志. 并发者在 AMI 上相距至少 41° , 在 EasyCom 上中值 45.9° 且无 15° 以内样本, 在 AVDIAR 上中值 24.0° 且 17% 落在 15° 以内, 这解释共位现象仅能在 AVDIAR 检验. 评测覆盖 9,498 条多说话人话语, 其中 Idiap 3,483 条, Edinburgh 与 TNO 2,675 条, EasyCom 3,340 条, 留一站点与留会话划分保证不见测试站点标签, 阈值与权重预先在开发集固定, 区间来自 29 簇 2,000 次自助.

#### 说话人提升来自方向而非标记本身

下表摘录完整评测集上的说话人准确率, 包括无模型最近座位规则, 零样本模型的相机基线, 真实方向, 加证据卡与打乱方向对照, 以及 7B 策略训练前后对比. 表中 Idiap, Edinburgh 与 TNO, EasyCom 与汇总结列可直接对照, 跟随列显示模型命名标记参与者的比例, 从而判断增益来自指向位置还是标记本身.

| input / system | speaker accuracy Idiap | speaker accuracy Ed./TNO | speaker accuracy EasyCom | speaker accuracy pooled | pooled follows dir. |
| --- | --- | --- | --- | --- | --- |
| Nearest seat, no model | 79.8 | 79.2 | 63.6 | 73.9 [70.3, 77.4] | – |
| Vision | 52.4 | 49.2 | 59.2 | 53.9 [50.7, 58.2] | 50.0 |
| Vision + direction | 79.7 | 78.1 | 66.0 | 74.5 [70.6, 78.0] | 81.9 |
| Vision + direction + card | 80.3 | 80.5 | 69.1 | 76.4 [73.4, 79.5] | 92.7 |
| Vision + shuffled dir. | 35.1 | 36.3 | 60.3 | 44.3 [39.8, 50.2] | 39.7 |
| 7B self-evaluation | 63.6 | 64.4 | 52.5 | 59.9 [56.5, 63.7] | 66.0 |
| 7B direction reward | 67.5 | 67.5 | 59.0 | 64.5 [61.4, 68.1] | 70.5 |

标记真实方向把零样本模型从相机基线的 52.4% 提升到 79.7% (Idiap), 从 49.2% 提升到 78.1% (Edinburgh 与 TNO), 从 59.2% 提升到 66.0% (EasyCom), 汇总结 74.5% 对 53.9%, 方向增益 20.6 个点, 95% 区间为 [15.8,24.5], 各站区间均在零以上, 证据卡再加 2.0 个点. 打乱为同录制另一条话语方向时 AMI 跌到 35% 至 36%, 比相机低 13 至 17 个点, 比真方向低 30.2 个点, 证明增益来自指向位置. 无模型最近座位规则已达 73.9%, 模型加方向为 74.5% 加卡为 76.4%, 在 AMI 特写面板上模型只是读出红框而未超越测量.

收件人完全不同, 方向仅带来 1.9 个点 [0.9,2.9], macro-F1 (macro-averaged F1, 宏平均 F1) 仅 1.8 个点 [0.5,3.1], 卡对准确率几乎无变化 0.5 个点 [-1.5,3.0] 而 macro-F1 加 3.5 个点 [1.1,6.0], 纯转录文本已与相机持平 0.7 个点 [-0.1,1.7]. 一旦为单人, 轮次与注视规则可达 79%, 瓶颈在单人与群体的区分, 措辞, 轮次乃至人工注视仅 56% 至 63% 平衡准确率, 说话人注视收件人仅 45%. 跨站监督把 7B 模型带到与零样本 27B 持平, 三者专家乘积仅再加 1.7 个点 [0.1,3.5], 各方法收件人均在 50% 至 60% 之间.

### 视觉在共位时挽回方向失效的区间

#### 共位区间仅存在于 AVDIAR

要检验方向在方位重叠时是否失效, 需先看单峰与多峰拾取的差异, 下表给出 AVDIAR 上仅保留最强峰与保留并发数峰值的说话人到人脸召回率, 样本按角间距分箱并给出总数, 从而明确方向在重叠下可用的前提条件.

| condition | n | single-source (k=1) | multi-source (k=# speakers) |
| --- | --- | --- | --- |
| single-speaker | 85 | 74 | 74 |
| overlap, Δθ<15∘ | 78 | 35 | 59 |
| overlap, 15–30∘ | 215 | 65 | 75 |
| overlap, Δθ≥30∘ | 91 | 59 | 69 |
| all | 469 | 60 | 71 |

单说话人时两者均为 74%, 共位 15° 以内单峰仅 35% 而多峰达 59%, 高出 24 个点, 总体从 60% 到 71% 高出 11 个点. 这说明保留前 k 个峰是方向在重叠下可用的前提, 残留的 59% 缺口正是视觉需要填补的部分. 单说话人 74% 偏低并非判别失败, 多因中间帧人脸框缺失所致, 融合的上限仍受检测框质量约束.

#### 视觉恢复共位而方向保留离屏

下图按并发者角间距分箱展示方向与视觉两条规则的召回率, 可先对比左侧共位箱的红色斜纹柱与绿色柱的高度与区间, 再看中间与右侧箱中两类柱子的差距是否收窄, 从而判断互补发生的具体角度范围.

[![原论文 Figure S2：Figure S2: Vision carries attribution when speakers share a bearing.](https://arxiv.org/html/2611.31735v1/fig_space_v2.svg)](https://arxiv.org/html/2611.31735v1/fig_space_v2.svg)

*论文图 10：按并发者角间距分箱的说话人到人脸召回率对比方向与视觉在共位时的互补（原论文 Figure S2）。*

方向在 15° 以内跌到 59%, 区间为 [40,72], 样本为 78 段, 在 15° 至 30° 为 75%, 视觉规则在共位箱达 95%, 区间为 [89,100], 在更宽箱为 94% 至 99%. 可靠性加权融合在各重叠箱与视觉一致, 在 99% 重叠可见的 AVDIAR 上未超越视觉, 但两者或规则达 97.4% 对 91.9%, 说明二者失败段不同, 更好融合仍有空间. 在 EasyCom 上互补方向相反, 68% 重叠帧有并发者离屏, 阵列标出 78% 离屏而视觉为零, 方向挽回视觉.

### 可验证奖励与在线前视的代价分解

#### 可验证奖励优于自评但种子间仍有波动

奖励对比固定相同策略, 数据与优化器并汇集 3 个种子, 下表给出 GRPO 说话人准确率, 排序微调与 DPO 收件人 macro-F1 及其与自评的配对差值, 星号表示配对区间不含零, 从而分离奖励本身与优化器选择的影响.

| reward | Idiap | pooled |
| --- | --- | --- |
| Self-evaluation | 63.6 | 59.9 |
| Direction (ours) | 67.5 | 64.5 |
| Δ ours − self | +3.9∗ | +4.6∗ |
| Self-evaluation | 32.3 | 26.5 |
| Ours | 39.8 | 32.5 |
| Δ macro-F1 | +7.5∗ | +5.9∗ |
| Self-evaluation | 17.1 | 15.0 |
| Ours | 44.0 | 38.6 |
| Δ macro-F1 | +26.9∗ | +23.6∗ |

方向奖励的 AUROC 为 0.79 对自评 0.57, 单人 0.91 而重叠 0.65, 自评各分量接近随机. GRPO 把未训练 51.5% 提升到 64.5%, 高出自评 59.9% 共 4.6 个点 [3.8,5.4], 各站区间均在零以上, 对屏蔽地址标记的匹配对照领先 13.8 个点 [12.8,14.9]. 排序微调 macro-F1 高 5.9 个点 [4.4,7.2], DPO 高 23.6 个点 [20.4,26.6], 自评在 DPO 下 98% 答 group 而可验证奖励保持 55% 至 58% 平衡. 训练中自评均值首 25 步已 0.93 而末 25 步 1.00, 几乎无学习信号, 方向奖励从 0.24 升到 0.75 且正确样本从 43% 升到 61%, 与金标签轨迹一致.

下图左侧为 3 种优化器各自目标指标的柱状对比, 右侧为回答 group 的比例与金标签虚线的偏离, 可先看蓝色可验证柱与红色斜纹自评柱的高度差与星号, 再看右侧虚线附近两类柱子的坍缩程度, 从而判断奖励是否被常答套利.

[![原论文 Figure 4：Verifiable reward versus self-evaluation (same policy, data and optimizer; three seeds pooled).](https://arxiv.org/html/2611.31735v1/fig_reward.svg)](https://arxiv.org/html/2611.31735v1/fig_reward.svg)

*论文图 4：三种优化器下可验证奖励与自评奖励的任务指标及群体回答占比对比（原论文 Figure 4）。*

左图 GRPO 说话人准确率为 59.9% 对 64.5% 差 4.6 个点, 排序微调收件人 F1 为 26.5% 对 32.5% 差 5.9 个点, DPO 为 15.0% 对 38.6% 差 23.6 个点, 星号表示配对区间不含零. 右图排序微调自评 82% 对可验证 73%, DPO 自评 98% 对可验证 57%, 虚线为金标签 group 占比, 可验证更接近真实分布. DPO 不含 Edinburgh 与 TNO, 因其奖励评论家见过该站标签, 故该站被排除以保公平.

#### 前视缩短与注册冷启动的代价

在线代价用纯音频 diart 日志器度量, 仅改变提交标签的前视而不改变计算, 下表给出 AMI 与 VoxConverse 在 0.5 s 与 5 s 前视下的漏检, 虚警, 混淆与 DER (diarization error rate, 说话人日志错误率), 从而分离等待证据与计算开销.

| corpus | system | missed | false alarm | confusion | DER |
| --- | --- | --- | --- | --- | --- |
| AMI | online, 0.5 s | 12.2 | 4.9 | 13.8 | 30.9 |
|  | online, 5 s | 12.5 | 3.1 | 10.9 | 26.4 |
| VoxConverse | online, 0.5 s | 3.1 | 2.4 | 22.1 | 27.5 |
|  | online, 5 s | 4.4 | 2.0 | 19.7 | 26.1 |
|  | offline | 2.3 | 2.3 | 3.0 | 7.6 |

AMI 在线 DER 从 5 s 的 26.4% 升到 0.5 s 的 30.9%, 代价 4.5 个点, VoxConverse 从 26.1% 到 27.5% 代价 1.4 个点, 与重叠占比 14.6% 对 3.7% 对应. 表中 VoxConverse 离线为 7.6%, AMI 离线 18.8% 为正文报告的另一管线结果, 两者差距主要来自全局重聚类而非前视. 修订分析显示 5 s 视野仅移除 15.0% 已提交错误而离线移除 41.0%, 打破正确提交约 5%, 说明早提交代价小但在线天花板明显.

下图横轴为对数刻度的前视秒数, 纵轴为 DER 越低越好, 实线为在线而虚线为离线参考, 可先看 0.5 s 处深蓝与橙色实点与右侧离线点的垂直差距, 再沿横轴观察曲线从陡峭到平坦的拐点, 从而区分前视与管线更换的影响.

[![原论文 Figure 5：Online latency–accuracy on AMI and VoxConverse (0 s collar, overlap scored, so not comparable to…](https://arxiv.org/html/2611.31735v1/fig4_latency.svg)](https://arxiv.org/html/2611.31735v1/fig4_latency.svg)

*论文图 5：不同前视下在线与离线日志错误率曲线及从 5 秒缩到 0.5 秒的增量（原论文 Figure 5）。*

AMI 在线从 0.5 s 的 30.9% 降到 5 s 的 26.4%, VoxConverse 从 27.5% 降到 26.1%, 前者斜率更陡且对应 4.5 与 1.4 个点的增量. 离线 AMI 为 18.8% 而 VoxConverse 为 7.6%, 在线与离线差距反映管线更换而非前视本身, 因此该图不可与已发表榜单直接比较, 原文已注明 0 s 容限且计入重叠.

冷启动方面, 在 8 个可配准 AMI 会议后半段 13,765 个单说话人块上, 无上下文时系统回退视觉规则得 60%, 1 分钟时 78% 锚点把正确座位方向接到错误人脸而跌到 40%, 5 分钟恢复到 65%, 10 分钟到 72% 对离线 70%, 因果每 15 s 重拟合在首 30 s 仅 28%.

### 几何信号的边界复现前提与工程选型建议

主结果表的方向依赖文献座位, Idiap 用示意图方位, Edinburgh 与 TNO 用另四会中值座位, 免标签配准仅在 Idiap 替代时损失 9.4 个点而在 Edinburgh 与 TNO 从 79.2% 跌到 31.1%, 两类座位中值相距 50.9° 且仅 32.8% 一致. 语言模型在 AMI 上 97% 跟随标记, 因此模型未超越测量. 说话人与收件人实验均用参考转录, 前轮说话人标签与标注边界, 无语音识别与系统切分介入.

奖励侧校准项未能校准, 所有训练策略置信恒为 1, 期望校准误差等于错误率, 零样本 27B 有方向时校准误差 7.2 无方向 15.8. 种子层面方向奖励更稳 64.5% 加减 2.2% 对自评 59.9% 加减 5.3%, 但自评赢下第二个种子, 种子与会议双重自助下差值 4.6 个点区间为 [-1.0,10.1] 含零, 去掉开发站 Idiap 后为 5.0 个点 [1.0,9.5]. 收件人项依赖外站标签训练的评论家, 对应用站点才免标签, AMI 训练策略迁到 EasyCom 时排序微调说话人掉 5.4 个点.

共位结论基于 20 个序列的 AVDIAR 且几乎全可见, 融合未超越 TalkNet, 更大远场 MISP 仍待验证. 在线部分为纯音频日志器, 方向, 注册与归因合计不足 1% 实时, 瓶颈是等待证据而非计算, 语言模型每条回答延迟 2.1 s 至 2.6 s. 注册冷启动仅在可配准房间成立, 15 会中 7 会失败时无增益. 未做真机测试, EasyCom 佩戴者暂代机器人, Vernissage 为自然下一步, 部署需知情同意与会话内存储及可排除机制.

训练与计算方面, 对齐用 594 条 AMI 话语且无收件人标签, 监督微调用每折 4,000 条外站标签, 每配置在单张 48 GB GPU 上跑 3 个种子, 答案至多 48 个新词元, 评估用贪心解码且阈值权重预先在开发集固定. 策略为 Qwen2.5-Omni-7B 语言部分 rank 为 16 的 LoRA, GRPO 跑 300 步每条 4 样本, 排序微调与 DPO 跑 2 轮每条 8 样本, 采样温度为 1.0. 方向估计每 0.25 s 块约 2.2 ms, 注册重拟合每 15 s 约 9 ms 至 12 ms, 在线日志器每步约 13 ms, 语言模型每条约 2.1 s 至 2.6 s.

公开物与附录方面, 论文称代码与评测协议将发布, 但本次未发现可确认可用的作者资源链接, 按无可用绑定处理, 所用 AMI, EasyCom, AVDIAR 与 VoxConverse 均为公开语料. 附录澄清主结果用文献座位而非免标签配准, EasyCom 主实验用阵列方向而近讲参考仅用于离屏分析, 融合权重为峰功率比, 实验用参考转录与前轮标签及标注边界, 在线仅扫日志器前视, 自评基线为 AMUSE 自评部分实现.

工程选型上, 若阵列与相机相对固定且重叠或离屏常见, 可先跑无模型最近座位规则建立上限, 再引入方向标记与证据卡. 复现第一步是严格留一站点划分并在开发集固定阈值与权重, 需补测免标签配准在自有房间的锚点正确率, 无参考转录与系统切分下的端到端精度, 以及前视与延迟的联合预算.

#### 注册表与方向配准的执行分工

从执行顺序看, 系统先把相机与阵列信号处理为人脸轨迹, 语音嵌入, 声学方向与语音分段, 再写入按身份持续维护的注册表, 每位匿名身份保留滚动语音嵌入, 人脸表示, 常用座位与声学方向, 说话人检测, 切分读出与收件人模型都从同一状态取数. 在线读出在时刻 t 只用至 t 加前视的证据提交标签且不再改写, 扫过不同前视即得到延迟精度曲线, 修订分析也以已提交流为基准衡量改写得失.

方向估计把阵列测得的到达角经配准映射为图像坐标或屏外标志, 在 AMI 用话语内块直方图最强峰指名最接近座位者, 在 EasyCom 用实测传递函数转向整段累积峰并投影为红圆或边缘箭头. 免标签配准分 4 步执行, 即按人脸嵌入聚类得座位, 从声音直方图峰得声源方向, 按声源方向上主动说话得分上升幅度一对一匹配成锚点, 再在相邻锚点间分段线性插值完成像素映射, 对齐实验所见标记均来自该链路.

#### 提示融合与奖励的执行顺序

方向进入模型的方式是画在图像内, AMI 把 4 路特写拼为一帧并用红框标定声音来源面板, EasyCom 在自中心帧相应位置画半透明红圆, 声源在视场外则画左右边缘箭头, 每人配字母标记, 模型只需回答说话人, 收件人与置信度. 证据卡在话语结束时刻因果追加文本线索, 包括阵列判定的当前与上一说话人, 注视与回视关系, 终点音高走向, 对话行为类别以及评论家给出的一人对多人估计, 卡上即会写明阵列说话人是谁.

当并发语音共享方位时启用三规则分工, 方向规则取距注册方向最近的人脸, 视觉规则取主动说话得分最高的人脸, 融合规则对每张人脸计分并按声学峰尖锐度加权, 方向峰尖锐时信任方向, 双人峰合并成宽峰时交给视觉. 研究按并发者角距分层检验该假设, 单说话人与重叠段分别保留单峰与按人数取多峰, 正是多峰保留使方向在重叠下仍可用, 而非只取最强峰.

对齐侧把每次预测记为说话人, 收件人与置信度, 可验证奖励由方向一致, 校准惩罚与收件人项相加, 方向一致只看被点名座位是否落在话语内峰的 25° 容差中, 置信必须与该检查一致否则被惩罚, 收件人项由冻结因果评论家读话语末证据打分并减去平均回答分布的基率, 使恒答组无利可图. 同一采样数据下 3 类优化器只更新语言模型注意力投影上的低秩适配器, 分组相对策略优化不用证据卡而排序微调与偏好优化使用, 自评基线则换为模型自身概率, 自检与置信的均值.

在线代价的测量同样按执行划分, 前视实验只扫切分器的提交延迟, 方向, 注册与归因在 CPU 上合计不足 1% 实时, 真正代价是等待证据而非计算, 语言模型回答才是秒级延迟. 冷启动实验把前段流用于拟合锚点并在后半段持留评估, 无锚点时回退纯视觉, 1 至 2 分钟首批锚点易把正确座位方向接到错误人脸而跌破视觉, 5 分钟后随更多人开口才反超, 15 会中 7 会未通过检验则全程无增益, 说明该曲线只在可配准房间成立.

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：AMI 8 话筒桌式阵列与 EasyCom 6 话筒眼镜阵列, 方向估计频段 300 Hz 至 3,500 Hz 与 200 Hz 至 6,000 Hz, 块长 0.25 s, 采样率原文未披露, 在线前视 0.5 s 至 5 s, 语言模型每条回答延迟 2.1 s 至 2.6 s
- **训练与评测数据**：对齐用 594 条 AMI 训练话语且无收件人标签, 监督微调用每折 4,000 条外站标签, 评测为 9,498 条多说话人话语含 Idiap 3,483 条与 Edinburgh 和 TNO 2,675 条及 EasyCom 3,340 条, 另用 AVDIAR 20 序列与 VoxConverse 216 录音做共位与在线研究
- **算力与训练耗时**：每配置在单张 48 GB GPU 上跑 3 个种子, 在线部件在单核 CPU 与单张 48 GB GPU 上测量, GRPO 每轮 2.3 GPU 小时, 排序微调 0.8 小时, DPO 1.5 小时, 监督微调 2.8 小时
- **核心超参数与配置**：策略为 Qwen2.5-Omni-7B 语言部分 rank 为 16 的 LoRA, GRPO 300 步每条 4 样本, 排序微调与 DPO 2 轮每条 8 样本, 采样温度 1.0, DPO 系数 0.1, 收件人项基线权重 0.6, 方向一致容差 25 度, 奖励裁剪到 -2 至 2
- **推理速度与部署开销**：方向估计每 0.25 s 块约 2.2 ms, 注册重拟合每 15 s 约 9 ms 至 12 ms, 在线日志器每步约 13 ms, 方向与注册及归因合计不足 1% 实时, 零样本 27B 每条约 2.1 s, 对齐 7B 每条约 2.6 s
- **开源产物与协议状态**：论文称代码与评测协议将发布, 但本次未发现可确认可用的作者资源链接, 按无可用绑定处理, 所用 AMI 与 EasyCom 及 AVDIAR 与 VoxConverse 均为公开语料
- **附录与补充材料要点**：附录澄清主结果用文献座位而非免标签配准, EasyCom 主实验用阵列方向而近讲参考仅用于离屏分析, 融合权重为峰功率比, 实验用参考转录与前轮标签及标注边界, 在线仅扫日志器前视, 自评基线为 AMUSE 自评部分实现

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.31735v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：将一维声学方位配准为图像红框红圈与边缘箭头并构造位置校准与基线修正的可核验奖励，机制清晰可训练。

- 核心优势：9498条话语上方向标记带来混合加20.6个百分点且乱序对照下跌13至17点，奖励在三种优化器下领先4.6至23.6点。

- 核心优势：留一站点验证会议簇自助95%区间与多语料泛化及前瞻扫描共同支撑结论的统计严谨性。

- 主要短板：主结果使用文献记载座位而非无标签锚点，替换后Edinburgh与TNO最近座位规则从79.2%骤降至31.1%且模型高度跟随标记。

- 主要短板：校准项恒报置信度1致期望校准误差等于错误率，种子会议双重采样下4.6分差区间包含零且融合与纯视觉持平。

- 主要短板：仅承诺Code will be released而无可访问仓库权重与数据集链接，且未发现可验证官方URL资源。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
