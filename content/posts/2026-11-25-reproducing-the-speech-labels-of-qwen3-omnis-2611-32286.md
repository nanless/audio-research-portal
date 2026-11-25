---
title: "Reproducing the Speech Labels of Qwen3-Omni's Talker: Mimi in bf16, and a Last-Frame Pitfall"
date: 2026-11-25
draft: false
tags: [语音合成, 评测协议, LoRA, 统计分析]
categories: [论文速递]
description: "为补上 Qwen3-Omni 未发布的标签编码器，论文用白盒回归与校准似然锁定 kyutai moshi 包 bf16 权重的 Mimi 前 16 码本，并证明 transformers 默认不填充编码会让约半数微调语音尾部出现噪声突发，代价是只能识别行为而非逐位权重且单说话人微调会带来声音漂移。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32286"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "复现 Qwen3-Omni Talker 的语音标签与最后一帧陷阱"
paper_digest_original_title: "Reproducing the Speech Labels of Qwen3-Omni's Talker: Mimi in bf16, and a Last-Frame Pitfall"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32286v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32286v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32286v1.pdf"
paper_digest_primary_task: "语音合成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-synthesis","label":"语音合成"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "为补上 Qwen3-Omni 未发布的标签编码器，论文用白盒回归与校准似然锁定 kyutai moshi 包 bf16 权重的 Mimi 前 16 码本，并证明 transformers 默认不填充编码会让约半数微调语音尾部出现噪声突发，代价是只能识别行为而非逐位权重且单说话人微调会带来声音漂移。"
paper_digest_reader_sections: [{"heading":"缺少标签编码器使 Talker 无法学习新声音","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"语音生成链路与三种探针的完整分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"嵌入回归与校准似然共同指向 moshi bf16","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"剔除末帧后实现指纹只认 moshi bf16 权重","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"未填充标签让约半数生成句尾迸出噪声","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"行为识别的边界与可直接复用的配方","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Yuxuan Chen"}]
paper_digest_abstract_sha256: "c71fd0ef1c3ee5c6714db0eeddcd7f88ad3a153bf79abe5fd36a8813d7b0df70"
paper_digest_sidecars: {"citation.bib":{"sha256":"ad700a7b6e7012212c72c43edf6846688b348b7e853e1216b00ade40fb8dd9a4","url":"/audio-research-portal/client/papers/2026-11-25/2611-32286/citation.bib"},"citation.json":{"sha256":"ae344695444ca2a659cc2c66a94ef5f70b641ac98d75ec6c329710f6e2f3cb05","url":"/audio-research-portal/client/papers/2026-11-25/2611-32286/citation.json"},"citation.ris":{"sha256":"240d13f6629d94faaa6535b1e56babcb582fef43129d49d435f92af263b331b1","url":"/audio-research-portal/client/papers/2026-11-25/2611-32286/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6957fedea4fb25d7a3be0ad9bd479f04bb30257c5588f704af8cbc72d62bee3d","url":"/audio-research-portal/client/papers/2026-11-25/2611-32286/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "ca2ce465b8a95a572721a1e93984cc7cb73d5e857a1f4d24e05afb9a53660e73"
paper_digest_api_reader_plan_sha256: "a6796195f1d7d99a56db2fa66dfe49da7ecb4357506c7157a962860cbe365922"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4f5dc6abac1bd8d0137cdc9956a3d55c3a7d5407b74fa415e810e429c3e4c2b7"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "a2341324dcb8b84aaab2bc2496191cae0f6bac28536cc5cbd83642bcd6f3eaca"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "784991b2cfa4107f66dbbefab277da17139dd604ff386d53d1f405ed838bdf48"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "6a9fe8a1ae84be1afee486cea15bf49a6e003a8b9ef86d95d854638479be2518"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 复现 Qwen3-Omni Talker 的语音标签与最后一帧陷阱

> 英文题目：*[Reproducing the Speech Labels of Qwen3-Omni's Talker: Mimi in bf16, and a Last-Frame Pitfall](https://arxiv.org/abs/2611.32286v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-research-portal/papers/?concept=task.speech-synthesis)
- **研究方法**：[评测协议](/audio-research-portal/papers/?concept=method.evaluation-protocol)；[参数高效微调](/audio-research-portal/papers/?concept=method.peft) → [LoRA](/audio-research-portal/papers/?concept=method.lora)；[统计分析](/audio-research-portal/papers/?concept=method.statistical-analysis)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 7.6/10 | 技术严谨 8.4/10 | 实验充分 6.9/10 | 清晰度 7.0/10 | 影响力 6.5/10 | 开源 0.0/10 | 可复现 8.1/10 | 工程/实践 7.3/10


## 👥 作者与机构

- Yuxuan Chen：The Chinese University of Hong Kong, Shenzhen

## 📌 核心摘要

**问题与瓶颈：** Qwen3-Omni 以两阶段生成语音，思考模块 Thinker 负责写文本，语音生成模块 Talker 把文本与隐状态转为每 80 ms 一帧、每帧 16 个码本的音频码，再由波形解码器 Code2Wav 合成为 24 kHz 波形。已发布检查点包含 Talker、多词元预测器与 Code2Wav，却不包含制作训练标签的编码器，因此外部无法制作匹配标签来微调决定音色的 Talker。社区已知这些码可用语音编解码器 Mimi 的解码器解码，但标签与今日可运行的 Mimi 编码器有多接近仍不清楚，权重、精度、实现移植与音频预处理都会改变码，必须用灵敏度可标定的检验区分这些差异。

**核心思路与方法架构：** 本文的核心直觉是编码器差异会直接体现在以交叉熵训练的 Talker 似然上，而只学习码到波形映射的解码器对此几乎不敏感，因此以前者为鉴别依据并用已知标签标定灵敏度。白盒回归首先证明 Talker、多词元预测器与 Code2Wav 的码本嵌入与 Mimi 前 16 个码本逐层对应，锁定候选家族为 Mimi。以 24 kHz 波形为例，Mimi 编码器以 1920 采样点为一帧输出约 12.5 Hz 码序列，保留前 16 个码本作标签，其中 Talker 预测第 0 个码本，多词元预测器预测第 1 至 15 个码本，检验时二者参数冻结只做教师强制打分。为分离码本身难易带来的偏置，作者在 107.6 小时训练集的不同编码版本上各训练一个与 Talker 同分解结构但无文本输入的码语言模型，共 13 个标定模型，只有当 Talker 排序与某候选标签训练的标定模型一致时才采信该候选。最终配方是转 bf16 权重的 moshi 实现，每句补至两倍长度再截断至原长对应帧数以避开末帧失配。

**关键实验与核心代价：** 在 512 句留出测试集上，以 fp32 参考码为基准的相对似然 Λ (nats / 帧，负值表示更偏好候选) 显示 Talker 偏好 transformers bf16 码 -0.509，而响度归一化码被重罚 +2.77，中文微调方向被罚 +0.245，随机扰动仅 +0.026 至 +0.077，说明后者不可检测。在排除末帧后的 22 种实现比较中，只有在 moshi bf16 标签上训练的标定模型与 Talker 排序一致，moshi bf16 离线码在 Talker 下为 -1.213，在标定模型下为 -1.955，明显优于 transformers bf16、fp16 与 TF32 变体。在解码 512 句测试集配方码的对比中，Code2Wav 用 16 个码本的字错率 (CER，越低越好 ↓) 与词错率 (WER，越低越好 ↓) 为 3.3%/3.0%，优于 Mimi 同 16 码本解码的 3.9%/3.9%，短时客观可懂度 (STOI，越高越好 ↑) 为 .94/.86，亦高于 Mimi 同码本的 .92/.83。末帧陷阱是主要代价，用未补零的 transformers 标签做 LoRA 音色适配后，44% 至 55% 的生成句以噪声突发结尾，中文平均末 80 ms 上跳 +22.3 dB，英文上跳 +7.0 dB，而配方标签则正常衰减，基于 CSM-1B 的独立检验中末帧多耗 119 nats，补零后两者均消失。智能度与音色未付出代价，四组标签间 CER 差异为 -0.23 至 +0.27 个百分点且自助置信区间均包含 0，相似度差异不超过 0.001，本文未做人工主观听测，仅以客观指标代理听感。

**适用边界与深读导览：** 该配方只保证行为级似然一致而非逐位复现，moshi bf16 码跨 GPU 与批量仍有 4% 至 7% 差异，PyTorch 版本切换亦有同量级变化且未经 Talker 打分，20% 以下限带与未知方向权重偏移按设计无法排除。下游仅验证 SSB0033 与 p239 两说话人约 47 分钟的秩 16 LoRA 音色适配，全量微调、新语言、表现力风格与双语单说话人均未覆盖，其中每语言单说话人会使英语口语问答漂向中文目标音色，未补零 transformers 标签则约半数以噪声突发结尾失效。欲复核相对似然公式与 13 个标定模型逻辑可读下方长文方法与标定部分，22 种实现对比与末帧陷阱可读实验与工具部分，超参数可读附录细节。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/elpsykongloo/qwen3-omni-talker-finetune> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/collections/mifanbushipeicai/qwen3-omni-talker-finetune-6aec41e50ac465e3f0ef9222> → <https://huggingface.co/collections/mifanbushipeicai/qwen3-omni-talker-finetune> — 链接可访问（HTTP 200）

- 论文所列链接：<https://github.com/huggingface/transformers/issues/50396> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 缺少标签编码器使 Talker 无法学习新声音

Qwen3-Omni 把语音生成拆成两段流水线，Thinker 负责写文本，Talker 负责把文本与 Thinker 隐状态转成音频编码，每 80 ms 输出一帧，每帧包含 16 个码本，第一码本由 Talker 自身预测，其余 15 个码本由多 token 预测器补齐，最后由卷积解码器 Code2Wav 合成 24 kHz 波形。公开发布的检查点包含这 3 个生成部件，却没有包含把训练音频转成编码的标签编码器，外部研究者因此无法制作与原训练标签分布一致的新声音数据，而声音听感恰由 Talker 决定。

社区早已发现 Qwen3-Omni 的编码可以用 kyutai 的 Mimi 解码器解开，并开始直接用 Mimi 制作标签，但解得开不等于标签一致。同一段音频在不同实现下会得到明显不同的编码，在码本 1 至 4 上，bf16 推理改变约 12% 的编码，moshi 与 transformers 实现相差约 15%，16 kHz 带限重采样改变 40%，响度归一化改变 67%。若不区分权重是否微调，精度是 fp32 还是低精度，代码是参考 moshi 还是 transformers 移植，输入是否预处理，微调时就会用错标签分布。

论文把未知记为 EQ，并以公版 Mimi 编码器前 16 个码本在 fp32 下的 transformers 输出作为参考编码，围绕 4 种假设组织候选编码器，分别是同一编码器仅数值实现不同，同一编码器加固定预处理，量化器不变但编码网络被微调或替换，张量形状相同但完全无关的分词器。除参考外，还构造了权重随机扰动使码本 1 至 4 有 2%、5% 或 10% 分歧的版本，沿中文与英文真实微调方向移动到 8% 分歧的版本，以及 transformers bf16、带限输入和响度归一化输入，所有候选均在未观察任何 Qwen 分数的情况下建成。

校准用的编码语言模型在 107.6 h 的 VCTK 与 AISHELL-3 上训练，来自 263 位说话人，切成 10 s 的 24 kHz 片段，Talker 评测则用 64 位留出说话人的 512 句测试语音，每人 8 句，时长 2 s 至 9 s，共 0.49 h 与 22,295 帧，说话人而非文件被留出，全部置信区间均为说话人级别自助法在 1,000 次重采样下得到，并在模型间共享重采样权重以保持配对比较。

### 语音生成链路与三种探针的完整分工

要理解 3 类探针为何分工不同，需要先看清释放链路与未释放编码器的位置，以及候选编码器在何处被代入评分，下图把顶部生成路径，底部待识别编码器与中部探针画在同一张流水线中，箭头方向即数据流向，芯片颜色区分判定状态，读图时可先沿顶部从文本提示走到波形，再看中部探针如何桥接触发候选。

[![原论文 Figure 1：Qwen3-Omni’s released speech path (top), the unreleased label encoder E_Q that we identify…](https://arxiv.org/html/2611.32286v1/pipeline.drawio.svg)](https://arxiv.org/html/2611.32286v1/pipeline.drawio.svg)

*论文图 1：Qwen3-Omni 释放语音链路与未释放标签编码器的位置及三类探针的分工（原论文 Figure 1）。*

图中顶部为已释放语音路径，文本提示进入 Thinker 的混合专家语言模型，输出文本与隐状态进入 Talker 预测第 0 码本，再由多 token 预测器预测第 1 至 15 码本，每帧共 16 个编码后经 Code2Wav 解码为 24 kHz 语音，虚线表示嵌入表关联。中部 3 个探针分别比较嵌入表，交换单码后解码位移与量化边界的关系，以及教师强制下候选编码的似然，底部虚线框为未释放的标签编码器 EQ，列出后端、精度、权重与音频输入 4 类候选改动，绿色对勾为已识别，灰色为未证伪但未锁定，红色为已排除。

#### 释放与未释放的分界

探针分工对应 4 种假设，白盒回归比较 Talker、多 token 预测器与 Code2Wav 各码本嵌入表能否由 Mimi 对应层码书向量经岭回归预测，用于排除结构相同但权重无关的分词器。解码器测试交换参考编码中单个编码为次近码字，再看候选量化边界能否预测 Code2Wav 输出偏离程度，但校准显示已知标签训练的解码器同样把参考排第一，因此置灰不作证据。似然测试在教师强制下用 Talker 评第 0 码本，用多 token 预测器评第 1 至 15 码本，排除其余普通芯片，注释说明仅两种微调方向被排除，2% 至 10% 随机扰动无法检出，带限仅排除 20% 以上比例，识别的是行为而非逐位权重。

#### 1 秒输入的张量旅程

以 1 s 的 24 kHz 单通道输入为例，波形形状为批量、1 通道、24,000 采样点，按 1,920 采样点 1 帧计算得到 12.5 帧，实际取上整为 13 帧，不足部分需填充。Mimi 编码器因果下采样后输出形状为批量、16 码本、帧数，每个位置取 0 至 2,047 的离散编码，深色顶行为第 0 码本，其余行为第 1 至 15 码本。Talker 按时间自回归预测第 0 码本序列，多 token 预测器按深度补齐同帧其余码本，Code2Wav 再把离散网格卷积上采样回波形，每帧名义对应 1,920 点，但实现中每帧输出会裁掉 555 点并前移同样长度，评测前需移回对齐。

信号规格上，论文统一用 24 kHz 输入，保留 Mimi 共 32 个码本中的前 16 个，帧率 12.5 Hz 即每 80 ms 一帧，编码器因果使补零只影响最后一帧。实现维度上，moshi 包的流式与离线、transformers 的急切与缩放点积注意力、fp32、fp16、bf16 与自动混合精度及 TF32 矩阵乘法均被单独编码为候选，权重是否整体转成 bf16 是关键分界，而仅在 fp32 权重上开自动混合精度则表现接近 transformers 变体，批量编码时除最长句外其余均被右填充。

### 嵌入回归与校准似然共同指向 moshi bf16

#### 白盒回归先排除无关分词器

Qwen3-Omni 检查点没有编码器与量化器，但每个生成器对每个码本都有一张 2,048 行的学得嵌入表，若编码确为 Mimi，则每张表应能由同层 Mimi 码书向量经岭回归预测。论文对每个 Qwen 表拟合 5 折交叉验证的决定系数，Code2Wav 第 0 至 15 码本为 0.25 至 0.65，Talker 第 0 码本为 0.45，多 token 预测器第 1 至 15 码本为 0.77 至 0.89，而打乱行或用其他层预测时最大值不超过负 0.03。作为负对照，与 Mimi 同架构同名同形但 225 个张量中有 223 个取值不同的 Qwen3-TTS 分词器预测值不超过 0，说明无关分词器假设可被排除，但量化器冻结的微调编码器同样能通过此关。

#### 校准似然的计算目标与符号

似然探针要回答候选编码 C 的标签是否比参考编码更像 Talker 训练时见过的标签，参考取 transformers 在 fp32 下的输出，评分在教师强制下进行，提示为普通朗读句，声音固定为 Ethan，Chelsie 得到相同结论。公式对每帧每码本累加对数概率差再按总帧数平均，单位为每帧纳特，符号中 T 为帧数，k 从 0 到 15 为码本序号，参考编码与候选编码分别记为上标形式，负值表示模型更偏好候选，附录用贪心生成加教师强制重打分验证实现正确性，第 0 码本有 97% 至 100% 帧复现最大值。

\[\Lambda(C)=\frac{1}{T}\sum_{t}\sum_{k=0}^{15}\Big[\log p\big(c^{\mathrm{ref}}_{t,k}\big)-\log p\big(c^{C}_{t,k}\big)\Big]\]

采用对数概率差平均的形式，直觉是 Talker 与多 token 预测器本就以交叉熵在 EQ 标签上训练，标签差异会直接体现在教师强制似然中，比解码器间接推断更贴近训练目标。若某类编码只是整体更容易预测，则所有模型都会偏好它而与标签无关，因此论文为每种标签单独训练无文本输入的小编码语言模型，时序 Transformer 管第 0 码本，深度 Transformer 管第 1 至 15 码本，同标签模型应偏好自身，两种子模型的差异约 0.01 量级给出噪声基线。输出的相对偏好直接驱动下一步判定，随机 5% 与 transformers bf16 标签可让对应校准模型偏好自身 0.27 与 0.31，约为噪声 40 倍，而解码器测试中种子效应约为标签效应的 4 倍，说明似然具备而解码器不具备分辨小改动的能力。

#### 候选编码器对照显示的偏好结构

下表把随机扰动、微调点、精度与输入预处理放在同一量纲下比较，一致度为码本 1 至 4 与参考相同的比例，似然为各校准模型与 Talker 相对参考的每帧纳特差，颜色越深绝对值越大，方框为自身标签，粗体为正文讨论的偏好，可先看 Talker 列再横向对照校准列，以判断偏好来自标签还是来自易预测性。

| candidate encoder | candidate encoder | agreement | Λ under a calibration model trained on labels from fp32 seed 1 / seed 2 | Λ under a calibration model trained on labels from random 5% | Λ under a calibration model trained on labels from transformers bf16 | Λ under a calibration model trained on labels from band- limited | Λ under a calibration model trained on labels from band-limited, bf16 | Talker Λ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| random perturbation | 2% | 0.979 | +0.051 / 0.052 | −0.096 | +0.038 | +0.114 | +0.070 | +0.026 |
| random perturbation | 5% | 0.948 | +0.096 / 0.095 | −0.270 | +0.074 | +0.091 | +0.099 | +0.023 |
| random perturbation | 10% | 0.905 | +0.239 / 0.241 | −0.007 | +0.128 | +0.280 | +0.166 | +0.077 |
| fine-tuning point | Chinese | 0.917 | +0.318 / 0.291 | +0.233 | +0.287 | +0.518 | +0.420 | +0.245 |
| fine-tuning point | English | 0.917 | +0.226 / 0.211 | +0.146 | +0.130 | +0.218 | +0.175 | +0.143 |
| precision | transformers bf16 | 0.878 | +0.145 / 0.156 | +0.080 | −0.309 | −0.148 | −0.397 | −0.509 |
| input | band-limited | 0.601 | +1.145 / 1.140 | +1.127 | +1.029 | −5.154 | −4.130 | −0.743 |
| input | loudness-norm. | 0.327 | +3.65 / 3.66 | +3.57 | +3.63 | +4.63 | +4.43 | +2.77 |
| cross-entropy, reference codes | cross-entropy, reference codes | — | 83.5 / 83.4 | 83.7 | 83.7 | 87.8 | 87.1 | 58.2 |

Talker 列显示半精度偏好为负 0.509，单位为每帧纳特，区间为负 0.654 至负 0.384，而所有在 fp32 标签上训练的模型对此惩罚或偏好远弱，下界不低于负 0.238，仅在全带限输入上训练的模型接近该值，在 bf16 标签上训练的模型则与 Talker 一致。响度归一化被所有模型重罚，Talker 达正 2.77，中文微调点被 Talker 惩罚正 0.245，与 fp32 模型相当，而在该标签上训练的模型反而偏好负 0.234，区间为负 0.31 至负 0.16，3 种随机扰动在 Talker 处仅为正 0.026、正 0.023 与正 0.077，不足交叉熵 58.2 的千分之二。带限在测试语音上为负 0.743，但在 Talker 自采语音上转为正 0.923，高于 fp32 模型的正 0.393，而仅含 20% 带限块的模型已偏好负 0.651，因此只能排除 20% 以上比例，测试集上的负值仍未解释。

#### 与释放模型行为一致的编码配方

在锁定 moshi 与 bf16 之后，论文把可复用的编码步骤收敛为一段短代码，下图用色块区分已识别内容、推荐的尾部填充与标签格式，读图时可先看加载器与精度两行，再看填充与截取两行，最后对照底部图例理解每行状态归属，以便直接搬运到微调流程中。

![原论文 Figure 2：Recipe for labels that match the Qwen3-Omni Talker.](/audio-research-portal/images/papers/2611.32286/figure-2-d0000fa97473a4e9.png)

*论文图 2：用 moshi 加载器与 bf16 权重编码并对尾部补零后截取前 16 码本的标签配方（原论文 Figure 2）。*

配方要求用 moshi 模型的 loaders.get_mimi 加载权重并指定码本数为 16，设备取 cuda，再整体转成 torch.bfloat16 并置为评测态，编码函数接收形状为批量、1 通道、T 的 24 kHz 波形，先算帧数 n 为 T 除以 1,920 的上整，再把输入在尾部补 0 至 2 倍长度并转成 bf16，编码后只保留前 16 个码本的前 n 帧。底部图例说明加载器与 bf16 为已识别，尾部补零为推荐，16 码本与帧数取整为格式，另注用 transformers 的 MimiModel 时应把输入补到 1,920 的整数倍，社区默认不填充的做法正是后文噪声的来源。

### 剔除末帧后实现指纹只认 moshi bf16 权重

#### 批量填充把最后一帧变成非诊断信号

Mimi 编码器因果，补零只改变最后一帧，在 CPU fp32 下其余位置最大差为 4 乘 10 的负 7 次方，但 transformers 的 MimiModel 让每个步幅卷积各自在边缘补零，而 kyutai 参考实现先用 pad_for_conv1d 把输入补到帧长整数倍，深层看到的静音响应并不等价。在 512 句测试上两者此前帧一致度达 99.99%，最后一帧仅 5.5%，仅 6 句长度恰为 1,920 整数倍的语音完全相同。批量编码时除最长句外其余均被右填充，8 句一批时此前帧仍全同，末帧一致度仅 15.6%，把输入预先补到 1,920 整数倍后 508 句完全相同，批量与单句编码也达到 100% 一致，已作为修复建议提交。

批量越大被填充的句子比例越高，Talker 偏好中最后一帧与其他帧应呈现不同走势，下图顶部为最后一帧部分随填充比例的变化，底部为其余帧的平稳走势，读图时可先看虚线预测的 1 减 n 分之 1 关系，再对比单句填充方块与校准菱形是否落在同一直线上，以确认末帧效应与编码内容无关。

[![原论文 Figure 3：The last frame carries the batch-size effect (Talker \\Lambda, voice Ethan, nats/frame; both parts…](https://arxiv.org/html/2611.32286v1/last_frame.svg)](https://arxiv.org/html/2611.32286v1/last_frame.svg)

*论文图 3：批量大小改变填充比例时 Talker 偏好中最后一帧与其他帧的分离变化（原论文 Figure 3）。*

顶部纵轴为最后一帧贡献的每帧纳特偏好，横轴为被填充句比例，批量为 n 时该比例为 1 减 n 分之 1，虚线为 n 为 64 时值的等比外推，n 为 2、4、8 时预测为负 0.84、负 1.26、负 1.47，实测为负 0.84、负 1.28、负 1.50，单句在 bf16 下按 8 句一批或补到 2 倍长度的方块与 fp32 下三角均落在同线，3 个在 10 s 无残帧块上训练的校准模型对填充后 fp32 编码的菱形也给出约负 1.81、负 1.78、负 1.80，与 Talker 的负 1.66 量级相同。底部其余帧在 bf16 下稳定于负 0.51 至负 0.55，在 fp32 下与参考持平，说明末帧信息与 Qwen 如何编码无关，后文一律剔除末帧再比实现。

#### 实现指纹只与 moshi bf16 校准模型同序

剔除末帧后论文比较 22 种实现变体，Talker 的排序只与在 moshi bf16 标签上训练的校准模型相同，moshi 权重转 bf16 的离线与流式最靠前，其次为 transformers bf16 的急切与缩放点积注意力及 moshi 自动混合精度，再后为 fp16、fp32 与 TF32，Talker 数值约为校准模型的 0.6 倍，只比顺序与符号。关键是把权重整体转成 bf16，fp32 权重下开自动混合精度的 moshi 表现接近 transformers 变体，训练集上 moshi bf16 与参考在码本 1 至 4 上一致度为 82%，与 transformers bf16 一致度为 85%，同 bf16 编码器两次不同批量翻转的编码每个被偏好 0.74 纳特，仅一次翻转的约为 0。

下表检验指纹是否随权重扰动而漂移，左列为评分者，中间为 moshi bf16 编码的偏好值与 95% 区间，右侧四列为其他实现相对该值的比值，符号相同为实现一致，读表时可先看 Talker 行再看扰动两行是否保持同序，以判断指纹约束的是实现还是权重距离。

| scored by | scored by | Λ of moshi bf16 codes 95% CI | Λ of moshi bf16 codes 95% CI | transformers bf16 | moshi autocast | transformers fp16 | transformers TF32 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| calibration models | trained on moshi bf16 labels | −1.955 | [−2.35,−1.61] | 0.45 | 0.42 | 0.04 | −0.20 |
| calibration models | same, weights perturbed 2% | −2.088 | [−2.53,−1.73] | 0.45 | 0.42 | 0.03 | −0.21 |
| calibration models | same, weights perturbed 10% | −1.832 | [−2.28,−1.48] | 0.40 | 0.37 | 0.01 | −0.25 |
| Talker | voice Ethan | −1.213 | [−1.42,−1.01] | 0.42 | 0.39 | 0.03 | −0.12 |

在 moshi bf16 标签上训练的校准模型偏好为负 1.955，单位为每帧纳特，区间为负 2.35 至负 1.61，权重扰动 2% 与 10% 后变为负 2.088 与负 1.832，移动约正 7% 与负 6%，右侧比值最多变化 0.05，Talker 自身为负 1.213，区间为负 1.42 至负 1.01，比值结构为 0.42、0.39、0.03 与负 0.12，与未扰动模型几乎重合。结果说明指纹由实现决定，对该量级权重变化不敏感，因而无法给出 EQ 权重与公版距离的上界，逐对比较也无帮助，因为扰动标签本身更难建模，所有模型都更偏好未扰动编码。

#### 解码器质量对照

为避免把解码器好坏误读为编码器证据，论文把配方编码分别用 Code2Wav 与 Mimi 自身解码器重建，下表报告对数梅尔谱 L1、说话人相似度、可懂度与短时客观可懂度，Code2Wav 输出需先回移 555 个采样点再比较，读表时可关注 16 码本下两者差距与 32 码本参考线的关系。

| decoder | log-mel L1 (dB) | similarity | CER/WER (%) | STOI |
| --- | --- | --- | --- | --- |
| Code2Wav, 16 cb. | 3.2/3.0 | .981/.982 | 3.3/3.0 | .94/.86 |
| Mimi, 16 cb. | 4.5/4.0 | .965/.966 | 3.9/3.9 | .92/.83 |
| Mimi, 32 cb. | 3.9/3.6 | .977/.980 | 3.3/2.9 | .95/.86 |
| original audio | — | — | 3.1/2.5 | — |

Code2Wav 用 16 码本得到对数梅尔谱 3.2/3.0，单位为 dB，相似度为 0.981/0.982，可懂度为 3.3/3.0，单位为 %，短时客观可懂度 STOI（短时客观可懂度）为 0.94/0.86，优于 Mimi 自身用同 16 码本的 4.5/4.0、0.965/0.966、3.9/3.9 与 0.92/0.83，并与 Mimi 用全 32 码本的 3.9/3.6、0.977/0.980、3.3/2.9 与 0.95/0.86 相当，对 Talker 采样编码两者解码声音相似度达 0.97/0.98。论文强调这只是解码器陈述，未做听测，客观指标不能替代主观听感，也不用作编码器证据，工具中听取或打分 16 码本时统一用 Code2Wav。

### 未填充标签让约半数生成句尾迸出噪声

#### 填充机制差异决定末帧编码

零填充输入的每个步幅卷积与填充音频静音并不等价，静音经前几层后已非零，深层看到的隐状态因此不同，这是末帧分歧的物理来源。CSM-1B 的释放模型对此同样敏感，未填充 transformers 标签的最后一帧比 moshi 标签贵 119 纳特，总和为 199.4 对 80.1，区间为正 109 至正 130，补齐后变为 80.2，差值仅正 0.08，区间含 0，其余帧差负 0.003。与 Qwen Talker 不同，CSM 更偏好 fp32 标签，transformers bf16 在其余帧贵正 0.39 纳特，区间为正 0.21 至正 0.56，说明精度选择应按模型似然核查而非默认。

微调后噪声是否集中在最后 80 ms，可看同一文本同一种子下两种标签生成波形的能量包络，下图上下两行为未填充与配方标签的结果，横轴为秒，纵轴为相对句内最响 80 ms 的分贝，虚线为负 20 dB 门限，阴影为最后 80 ms，读图时可先对比阴影区柱高再看整体包络是否一致。

[![原论文 Figure 5：Energy per 20 ms of one held-out Chinese sentence generated after LoRA voice adaptation, same…](https://arxiv.org/html/2611.32286v1/tail_noise.svg)](https://arxiv.org/html/2611.32286v1/tail_noise.svg)

*论文图 5：同一中文句在未填充与配方标签下微调后尾部 80 ms 能量从突升到正常衰减的对比（原论文 Figure 5）。*

上行未填充 transformers fp32 标签的中文句最后 80 ms 达负 13.1 dB，相对此前从负 49 至负 13 dB 跃升 36 dB，全集中文平均跃升为正 22.3，英文平均为正 7.0，单位为 dB，下行配方标签则衰减至负 50.4 dB，呈正常收尾。标题给出该阈下响亮末帧占比中文与英文为 49/55，单位为 %，配方为 0/0.3，即中文约半数、英文超半数异常而配方几乎为零，两波形前部包络相近说明差异不在内容而在末帧标签，解码训练标签本身即有半数以响亮末帧结束，微调模型只是如实复现。

#### 微调设置不变时只有末帧异常分化

下表固定 LoRA（低秩适配）设置只换标签，Qwen3-Omni 为两声音 3 种子，CSM-1B 为单声音两种子，响亮末帧指最后 80 ms 超过句内最响 80 ms 负 20 dB 的句子占比，末帧跳变为最后 80 ms 相对前一帧的电平，灰行为可懂度与相似度，读表时可先看前两行再看灰行是否分化。

| labels encoded with | labels encoded with | without padding transformers fp32 | without padding transformers bf16 | without padding moshi | tail-padded moshi bf16 (recipe) | tail-padded transformers fp32 | tail-padded transformers bf16 | real recordings |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3- Omni | loud last frame (%) | 49/55 | 44/53 | 0/0.8 | 0/0.3 | 0/0 | 0.3/0.3 | 0/2.5 |
| Qwen3- Omni | last-frame jump (dB) | +22.3/+7.0 | +21.4/+6.3 | −5.3/−5.3 | −5.7/−4.8 | −4.9/−5.7 | −5.6/−5.8 | −1.3/+0.7 |
| Qwen3- Omni | CER / WER (%) | 3.08/1.36 | 3.19/1.24 | 3.22/1.24 | 3.11/1.16 | 3.45/1.44 | 3.45/1.24 | 2.35/1.44 |
| Qwen3- Omni | similarity (sim.) | .969/.958 | .968/.958 | .970/.959 | .969/.958 | .969/.958 | .968/.956 | — |
| CSM-1B | loud last frame (%) | 46 | 50 | 0.6 | — | 0 | — | — |
| CSM-1B | last-frame jump (dB) | +6.6 | +6.5 | −7.2 | — | −6.9 | — | — |
| CSM-1B | WER (%) / sim. | 2.9/.957 | 2.7/.944 | 2.0/.957 | — | 1.7/.953 | — | 1.4/— |

未填充 transformers fp32 与 bf16 在 Qwen3-Omni 上响亮末帧占比中文与英文为 49/55 与 44/53，单位为 %，moshi 未填充与配方为 0/0.8 与 0/0.3，尾部填充的 transformers fp32 与 bf16 为 0/0 与 0.3/0.3，真实录音为 0/2.5，末帧跳变前两者为正 22.3/正 7.0 与正 21.4/正 6.3，单位为 dB，后四者均为负 4 至负 6 dB 的正常衰减。可懂度与相似度在 4 组首跑中差异区间均含 0，字符错误率 CER（字符错误率）差异为负 0.23 至正 0.27 个百分点，相似度差异不超过 0.001，填充的 transformers 两组同样无差异，CSM-1B 响亮末帧为 46 与 50 对 0.6，单位为 %，跳变为正 6.6 与正 6.5 对负 7.2，单位为 dB，填充后归零，说明仅填充即去除噪声。

#### 工具包消融显示声音由 Talker 承载

下表用 talker_tune 以单种子单采样重复声音自适应，比较新编号与占用预设槽、10 分钟至 2.5 分钟数据量、仅 Talker 与仅多 token 预测器微调的差异，指标为中文字符错误率、英文词错误率 WER（词错误率）、相似度与响亮末帧占比，最后一行为真实录音经同 ASR 打分，读表时可先看数据量三行再看微调位置两行。

| run | run | CER zh | WER en | similarity zh / en | loud last frame zh / en |
| --- | --- | --- | --- | --- | --- |
| voice | new ids | 3.3 | 3.7 | .969/.960 | 0/0 |
| voice | preset slots | 3.8 | 3.0 | .970/.963 | 0/0 |
| data | 10 min | 4.8 | 5.8 | .965/.959 | 0/0 |
| data | 5 min | 5.8 | 5.9 | .966/.957 | 0/2.5 |
| data | 2.5 min | 5.7 | 5.9 | .968/.955 | 0/5 |
| LoRA | Talker only | 3.0 | 4.3 | .966/.958 | 0/0 |
| LoRA | MTP only | 11.3 | 3.7 | .962/.880 | 18/10 |
| real recordings | real recordings | 2.5 | 3.4 | — | 0/2.5 |

新编号与占用预设槽的中文字符错误率为 3.3 与 3.8，单位为 %，英文词错误率为 3.7 与 3.0，相似度为 0.969/0.960 与 0.970/0.963，响亮末帧均为 0/0，10 分钟、5 分钟与 2.5 分钟数据的错误率升至 4.8/5.8、5.8/5.9 与 5.7/5.9，相似度仍为 0.965 以上，2.5 分钟已具声音，更多数据主要降错误率。仅 Talker 微调为 3.0/4.3 与 0.966/0.958 且无噪声，仅多 token 预测器微调中文达 11.3，英文相似度跌至 0.880，噪声回升至 18/10，真实录音为 2.5/3.4 与 0/2.5，约 1 个点的差异在噪声内，阈值在负 30 至负 15 dB 与窗 40 至 160 ms 的 24 种组合下未填充与配方差值区间均不含 0。

单语言单说话人还会带来声音漂移，20 问文本与口语测试中，文本中英文与口语中文相似度均为 0.98，无噪声结尾，但预设 Chelsie 与 Aiden 也变为新声音，口语英文的 p239 对自身文本答案质心从 0.995 跌至 0.81，Aiden 跌至 0.74，基座模型同问保持 0.994 对 0.993，说明漂移来自 LoRA。每语言 2 女 2 男各训满 400 步可消除漂移至 0.983 对 0.989，200 步则女声仍漂至 0.804，1 女 1 男时仅女声漂至 0.864，同语言口语轮加半数样本可修复至 0.988，单说话人加同法反而使文本与朗读也漂移，工具因此建议每语言每性别至少两说话人训满步数或加同语言口语轮。

### 行为识别的边界与可直接复用的配方

结论是行为识别而非逐位复现，随机扰动方向几乎与未知改动正交，扰动标签的校准模型仍保持 moshi bf16 指纹，逐对比较也因扰动标签更难建模而失效，因此任何尺寸的其他方向权重改动都无法排除。bf16 编码随 GPU、PyTorch 版本与张量形状在码本 1 至 4 上波动 3% 至 7%，全 16 码本跨 GPU 与批量约 24% 分歧，38,741 训练块重编码仅 38% 帧全 16 码本一致，码本 0 保留 99.0%，码本 1 至 4 为 92.8%，全码本为 76.0%，若无 Qwen 的硬件软件与分批方式，标签无法逐位复现，但 Talker 对两 GPU 编码偏好相等，bf16 与 fp32 标签的 LoRA 结果相同，说明不影响复用。

下游仅覆盖 LoRA 声音自适应，两说话人约 47 分钟，漂移研究扩至八说话人，全量微调、新语言与表现力风格均未验证，LoRA 改动共享 Talker 权重使预设槽也被替换，单语言单说话人下英文口语回落到中文目标声，带限仅排除 20% 以上比例，更小比例与测试集负 0.743 的来源仍未解释。评测全为客观指标，字符错误率、词错误率、WavLM 说话人相似度、对数梅尔谱、短时客观可懂度与末帧能量，未做主观听测，神经代理与人工听感的背离在此不适用，但 Code2Wav 未对齐会低估谱与可懂度，需先回移 555 个采样点。

配方本身为 moshi bf16 加尾部补零，transformers 路径则需把输入补到 1,920 整数倍，批量时最长句未被填充，8 句一批仍有 6% 句子带突发而非 1%。Talker 单体约 7.2 GB，LoRA 峰值 14 GB，单步约 0.45 s，24 GB 显存卡可跑，2.5 分钟每说话人已具声音，试听应重点对比最后 80 ms 相对句内最响的电平与是否超过负 20 dB，而非整体音质，改他人声音需征得本人同意，8 段示例声遵循原语料许可。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：输入为 24 kHz 单通道音频，Mimi 帧率为 12.5 Hz，每帧 80 ms 对应 1920 个采样点，保留前 16 个码本，每码本 2048 项，编码器因果，批量与填充影响最后一帧，RTF 与 TTFA 原文未披露
- **训练与评测数据**：校准语言模型训练用 107.6 h 的 VCTK 与 AISHELL-3，来自 263 位说话人，切分为 10 s 的 24 kHz 片段，评测用 64 位留出说话人的 512 句语音，每人 8 句，共 0.49 h 与 22,295 帧，另用 FLEURS 10 种语言各 40 句核查
- **算力与训练耗时**：编码对比在 RTX PRO 6000 与 H100 上进行，PyTorch 2.9.1 与 transformers 4.57.6，moshi 0.2.13，训练所用卡数与耗时原文未披露，LoRA 训练单进程峰值 14 GB，单步约 0.45 s
- **核心超参数与配置**：校准模型为时序 Transformer 预测码本 0 加深度 Transformer 预测码本 1 至 15，无文本输入，LoRA 为 rank 16 作用于 Talker 注意力与共享专家及 MTP 注意力与 MLP，共 6.3M 参数，800 步，批大小 8，学习率 1e-4 余弦，CSM-1B 为 rank 32，400 步，批大小 8，学习率 2e-4
- **推理速度与部署开销**：Talker 单体约 7.2 GB，LoRA 训练峰值已分配 14 GB，22 GB 进程上限下 24 GB 显存卡可运行，延迟吞吐原文未披露，Code2Wav 每帧输出比 1920 少 555 个采样点并前移同样长度需对齐
- **开源产物与协议状态**：论文给出 GitHub 仓库与 Hugging Face 数据集合链接，包含编码配方与标签检查和 Talker 微调工具及测试集编码与校准模型和示例声音，另给出 transformers 议题链接，第三方检查显示链接可达
- **附录与补充材料要点**：附录 A 给出候选构造与评分实现，附录 B 列出 22 种实现变体，附录 C 给出解码器测试细节与种子效应，附录 D 给出带限 GPU 与扰动权重的稳健性，附录 E 给出微调与工具消融及阈值敏感性，附录 F 给出多说话人漂移，附录 G 给出 Code2Wav 对齐

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32286v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：冻结Talker与MTP教师强制似然Λ配合13个同分解无文本码语言模型标定，双种子噪声仅0.01而效应达0.27以上灵敏度约40倍。

- 核心优势：22种实现对比中仅moshi bf16标定模型与Talker呈现同序偏好，离线-1.212与流式-1.209远优于transformers bf16的-0.51且区间可核对。

- 核心优势：补零对照使Qwen3-Omni尾噪突发从44%-55%降至0.3%以下，CSM-1B末帧119 nats代价同步消失且智能度相似度差异区间均含0。

- 主要短板：全文无人工主观听测，仅以CER/WER/STOI与说话人相似度等客观代理指标评价语音，主客观一致性无法判断。

- 主要短板：下游仅验证两说话人约47分钟秩16 LoRA音色适配，全量微调、新语言、表现力风格及20%以下限带与未知权重偏移均未覆盖。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
