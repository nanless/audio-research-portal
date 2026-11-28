---
title: "BEAT2AASIST: BEATs Feature Splitting with Dual-Branch AASIST for Environmental Sound Deepfake Detection"
date: 2026-11-28
draft: false
description: "针对环境声音伪造泛化难的问题，BEAT2AASIST 以双分支切分与多层融合与多声码器增强改进基线，在 EnvSDD 上以更少集成取得赛道 1 测试 EER 为 1.60% 与赛道 2 测试 EER 为 0.35% 的成绩，代价是双分支计算量与集成调参开销增加。"
tags: ["数据增强", "图神经网络", "环境声", "音频深度伪造检测"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "切分频率与通道子空间的环境声音伪造检测"
paper_digest_original_title: "BEAT2AASIST: BEATs Feature Splitting with Dual-Branch AASIST for Environmental Sound Deepfake Detection"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0471"
paper_digest_workbench_source_sha256: "e295dd9c195de026dbcc784e22d919342eee0f9bf8e58ca8265c1ac8482b1794"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/471"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0471.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对环境声音伪造泛化难的问题，BEAT2AASIST 以双分支切分与多层融合与多声码器增强改进基线，在 EnvSDD 上以更少集成取得赛道 1 测试 EER 为 1.60% 与赛道 2 测试 EER 为 0.35% 的成绩，代价是双分支计算量与集成调参开销增加。"
paper_digest_reader_sections: [{"heading":"环境声音伪造检测为何比语音伪造更难","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"基线把频谱结构压平成一维序列带来的信息损失","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"按频率与通道切分的双分支判别结构","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"多层融合与声码器增强如何扩大训练覆盖","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"在未知生成器与黑盒小数据下的评测表现","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉切分融合与声码器增强后误差如何变化","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提代价与复现核对清单","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Department of Mathematics, Korea University, South Korea"],"name":"Sanghyeok Chung"},{"affiliations":["Department of Mathematics, Korea University, South Korea"],"name":"Seungsang Oh"},{"affiliations":["Department of Mathematics, Korea University, South Korea"],"name":"Donggun Kim"},{"affiliations":["Department of Mathematics, Korea University, South Korea"],"name":"Jeongbin You"},{"affiliations":["Department of Statistics and Data Science, Chung-Ang University, South Korea","Department of Smart Cities, Chung-Ang University, South Korea"],"name":"Il-Youp Kwak"},{"affiliations":["Department of Statistics and Data Science, Chung-Ang University, South Korea"],"name":"Gaeun Heo"},{"affiliations":["Department of Statistics and Data Science, Chung-Ang University, South Korea"],"name":"Eujin Kim"},{"affiliations":["Department of Smart Cities, Chung-Ang University, South Korea"],"name":"Nahyun Lee"},{"affiliations":["Center for Applied Mathematics, Cornell University, USA"],"name":"Sunmook Choi"},{"affiliations":["Department of Big Data Application, Hannam University, South Korea"],"name":"Soyul Han"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"64d33ad575b48929061793968c0d2edb8f8c35c21bcbe449630d82c7232948f1","url":"/audio-research-portal/client/papers/2026-11-28/conference-be88e06d861067288c1a9d44/citation.bib"},"citation.json":{"sha256":"fad02126f979186f5f12de5ca8540515378c06d0667f5aafc75b34b39795d5b2","url":"/audio-research-portal/client/papers/2026-11-28/conference-be88e06d861067288c1a9d44/citation.json"},"citation.ris":{"sha256":"6782c7b3637fe9c046806ed9b4426542027220c22b8e0909d669b68638f5e968","url":"/audio-research-portal/client/papers/2026-11-28/conference-be88e06d861067288c1a9d44/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b2cb78ea3714a072a721036a0a9206e34184921ff848b26849ee6be509f11a19","url":"/audio-research-portal/client/papers/2026-11-28/conference-be88e06d861067288c1a9d44/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0471"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/471"
paper_digest_conference_doi: "10.24963/ijcai.2026/471"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/471"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0471.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "08d7d9b3e6579f688bd8c77e87f4f81efdb08bfa87874074920058b2c372568f"
paper_digest_api_reader_plan_sha256: "b0bfeb83405c8fcb70530fd70fd791138156bc038ddf86aab17bfd4123b4671b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b1d38aead5ce42b6fb83fd159e0c6c9fe8ed37726891ad45e4db95e0e7ecd2d3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7f3d135b3ef785e5c09ecc96fea74aa0ae7f75f3a595c3e4187990098c9b7221"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8e245ec084d176311dcc53e9bd719c2ba6ecbbfed21de20e5643ac7200d99b15"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ce5e7021b619cb5c2583745f2e42454e5e782da9f08db36127f0bbfb2b49ed15"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.gnn","label":"图神经网络"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_method: "图神经网络"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 切分频率与通道子空间的环境声音伪造检测

> 英文题目：*BEAT2AASIST: BEATs Feature Splitting with Dual-Branch AASIST for Environmental Sound Deepfake Detection*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0471`
> DOI：`10.24963/ijcai.2026/471`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/471) · [官方 PDF](https://ijcai.org/proceedings/2026/0471.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-research-portal/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-research-portal/papers/?concept=task.audio-deepfake)
- **研究方法**：[数据增强](/audio-research-portal/papers/?concept=method.augmentation)；[图神经网络](/audio-research-portal/papers/?concept=method.gnn)
- **信号**：[环境声](/audio-research-portal/papers/?concept=signal.environmental)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.8/10** | 创新 6.6/10 | 技术严谨 6.7/10 | 实验充分 7.5/10 | 清晰度 5.6/10 | 影响力 6.2/10 | 开源 6.0/10 | 可复现 6.0/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sanghyeok Chung：Department of Mathematics, Korea University, South Korea
- Seungsang Oh：Department of Mathematics, Korea University, South Korea
- Donggun Kim：Department of Mathematics, Korea University, South Korea
- Jeongbin You：Department of Mathematics, Korea University, South Korea
- Il-Youp Kwak：Department of Statistics and Data Science, Chung-Ang University, South Korea；Department of Smart Cities, Chung-Ang University, South Korea
- Gaeun Heo：Department of Statistics and Data Science, Chung-Ang University, South Korea
- Eujin Kim：Department of Statistics and Data Science, Chung-Ang University, South Korea
- Nahyun Lee：Department of Smart Cities, Chung-Ang University, South Korea
- Sunmook Choi：Center for Applied Mathematics, Cornell University, USA
- Soyul Han：Department of Big Data Application, Hannam University, South Korea

## 📌 核心摘要

**问题与瓶颈：** 环境声音伪造检测以 16 kHz 采样、固定 4 秒时长的环境录音为输入，输出真实与伪造的二分类判定，需在文本到音频与音频到音频生成伪造下同时应对未知生成器泛化与黑盒低资源两种部署条件。与语音不同，环境声覆盖多样非语言事件且时序结构松散，声学条件变化大，对未知合成管线的泛化更为困难。官方基线将通用音频基础模型双向音频 Transformer 编码表示 (Bidirectional Encoder representation from Audio Transformers, BEATs) 输出的 768 维分片嵌入展平为一维词元序列后送入单个分类器，显式频谱时间结构在展平中丢失，且仅依赖最后一层 Transformer 嵌入，难以保留频率依赖或通道特异的细微伪造痕迹，在生成器多样性不足时易过拟合特定合成痕迹。

**核心思路与方法架构：** 与最接近基线的实质差异在于保留前端整体微调与图注意力后端不变，将统一表示显式拆分为两个互补子空间并行建模，再以顶部多层融合与分赛道声码器增强补足多样性。输入经截断或重复补齐至固定长度后转为 25 ms 帧长、10 ms 帧移与 128 个梅尔滤波器组的梅尔频谱图，按 16×16 频率时间分片嵌入为 (H×W, 768) 维词元序列，其中 H 与 W 分别为频率与时间方向分片数。频率切分将该序列重排为 (H, W, 768) 后沿频率轴均分为低频与高频两路，通道切分则沿嵌入维切为 2 路 (H×W, 384)，每路送入独立的音频反欺骗图注意力网络 (Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks, AASIST) 建模互补线索后融合判定，全参数微调直击展平导致的结构丢失。顶部 k 层融合提供拼接、卷积门控与压缩激励门控三种形式，门控权重经归一化加权求和为统一表示后再切分，第 1 赛道仅用 HiFi-GAN，第 2 赛道叠加 UnivNet 与 BigVGAN 并配合 SpecAugment 缓解黑盒分布不确定性。

**关键实验与核心代价：** 在 EnvSDD 数据集上以等错误率 (equal error rate, EER) 评测，第 1 赛道测试集含 1,000 个真实样本与 3,000 个未知生成器伪造样本，第 2 赛道测试集含 1,994 个真实样本与 7,980 个黑盒伪造样本。榜单对照采用同一 Test EER 量表，最终成绩为第 1 赛道 Test EER 为 1.60 位列第 4，第 2 赛道 Test EER 为 0.35 位列第 3，分别高于同榜第 1 名的 0.30 与并列 0.25。单模型层面，第 1 赛道通道切分结合压缩激励门控融合 (k 为 10) 在 HiFi-GAN 增强下评测 EER 为 1.66% 且测试 EER 为 1.70%，低于同条件基线的 1.69% 与 1.88%，第 2 赛道频率切分结合卷积门控融合 (k 为 4) 在三种声码器增强下评测 EER 为 0.42% 且测试 EER 为 0.46%，低于同赛道拼接基线的 0.61% 与 0.75%。消融在学习率为 7×10^-7 下复测 5 个单模型，移除声码器增强退化最大，代表列评测 EER 从 1.45 变为 2.54 且测试 EER 从 1.60 变为 2.60，第 2 赛道代表列从 0.43 变为 1.83 且从 0.46 变为 1.75，另两列测试 EER 分别退化至 1.91 与 1.96，移除特征切分或多层融合亦在两赛道一致劣化。最终系统以 2 个与 3 个模型集成少于榜首的 5 个模型，论文未披露推理时延、吞吐或显存代价且未做人工听测，检测任务以 EER 为准不涉及平均意见分 (Mean Opinion Score, MOS) 类听感指标。

**适用边界与深读导览：** 结论成立前提为 16 kHz、4 秒切分的 EnvSDD 环境声与挑战定义的未知生成器及黑盒划分，未覆盖长音频流中伪造片段的时间定位、多模态联合验证与生成技术持续演进下的在线适应，部署所需的延迟、算力与跨设备鲁棒性亦未验证，不宜直接外推至其他采样率或语种场景。欲深究切分维度选择与门控融合公式可查阅下方方法概述和架构对双分支与三种融合的展开，欲核对集成权重、声码器组合与各组件贡献可查阅下方实验结果对榜单与消融表的对照及训练配置。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/ikwak2/BEAT2AASIST> — 链接可访问（HTTP 200）；README 已验证包含微调文档（未见安装、推理文档）；许可证：MIT

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 环境声音伪造检测为何比语音伪造更难

近年来文本生成音频与音频生成音频模型能够合成高度逼真的环境声音，在影视与游戏制作中带来便利，也让伪造的环境声音可能被混入录音或作为误导性证据传播。与语音伪造相比，环境声音覆盖门铃与交通与自然声等多种非语言事件，时间结构松散，声学条件变化大，对检测系统的泛化提出更高要求。为系统衡量这一风险，ESDD 2026 挑战赛基于 EnvSDD 数据集设立两个赛道，赛道 1 考查对未知生成器的泛化，赛道 2 仅提供 1% 黑盒训练数据并完全隐藏测试生成流程，模拟资源极少且攻击未知的小数据黑盒部署。

在语音伪造检测中，大规模自监督基础模型已成为主流前端，如 wav2vec 2.0 与 HuBERT 与 WavLM，配合注意力或图结构的后端分类器，在 ADD 2023 与 ASVspoof 5 等评测中取得较好效果。这类方法通常利用多层 Transformer 特征融合与声码器增强来捕捉细微的合成痕迹。环境声音领域对应的前端是 BEATs 与 EAT 等模型，其中在 AudioSet-2M 上预训练的 BEATs 对多类声音事件具有较强迁移能力。官方基线 BEATs-AASIST 将环境感知的前端嵌入与谱时图注意力后端结合，已在多样化篡改下显示出一定的泛化能力，但仍把编码器输出视为扁平序列处理。

从任务定义看，系统输入为重采样至 16 kHz 并统一为 4 秒的波形，输出为真实或伪造的二分类判定，评价指标为等错误率 EER，数值越低越好。训练集中伪造样本远多于真实样本，测试集则包含训练阶段未见过的合成器或完全未知的黑盒流程。已有路线的具体瓶颈在于三处：其一，BEATs 把梅尔频谱切成 16 × 16 小块并展平成一维词元序列，显式的频率与时间邻接关系被打散；其二，仅用最后一层 Transformer 嵌入会丢失浅层声学细节与深层语义之间的互补信息；其三，训练生成器种类有限，难以覆盖测试阶段多样的合成痕迹。

### 基线把频谱结构压平成一维序列带来的信息损失

要理解改进的针对性，需要先看清官方基线 BEATs-AASIST 的完整数据流。基线先把梅尔频谱切块编码，再把全部词元送入单个 AASIST 做谱时图推理，最后输出真实或伪造的判定。本文提出的 BEAT2AASIST 保留了这一主干，但在 3 个位置做了增量：把扁平表示重新组织为双分支结构，聚合顶层多层 Transformer 特征，以及用多种高保真声码器做伪造增强。下面先结合原图梳理基线的每一步变换，再说明信号规格与改动边界。

[![原论文 Figure 1：BEATs-AASIST architecture. Note that the explicit spectrotemporal structure is lost when the patch…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-1.png)

*论文图 1：基线流程示意：频谱切块经投影与编码后压平成一维序列送入单个判别器（原论文 Figure 1）。*

原图所示流程自下而上排列，最底部为标号 1 至 16 的频谱示意，呈 4 行 4 列的网格，每格对应一个频率时间小块。网格上方依次为投影层，标号 e1 与 e2 与 e15 与 e16 的中间嵌入，以及 Transformer 编码器。编码器输出标号 r1 与 r2 与 r15 与 r16 的词元序列，经大括号汇入粉色椭圆表示的单个 AASIST 模块，最终向上分为 Real 与 Fake 两个圆形判定节点。图中省略了中间编号，仅保留首尾两端示意序列的连续性，箭头方向始终由频谱指向判定，强调展平后不再保留二维邻接。

在信号规格上，原文披露输入音频统一处理为 16 kHz 采样，时长固定为 4 秒，不足部分通过重复填充补齐，过长部分裁剪。梅尔频谱采用帧长 25 ms，帧移 10 ms，128 个梅尔滤波器组。BEATs 编码器把频谱按 16 × 16 切块，每块映射为 768 维词元，整体形状记为 \((H \times W, 768)\)，其中 H 与 W 分别表示频率与时间方向的切块数。原文未披露 1 秒样本对应的具体 H 与 W 取值，也未披露采样点数与帧数的换算细节，因此此处仅保留切块尺寸与通道维度的事实，不补算未经证实的帧率数值。

与基线相比，BEAT2AASIST 的实质增量不在于更换前端主干，仍采用在 AudioSet 上预训练的 BEATs-iter3 版本并对全部参数微调，而在于后端组织与训练覆盖。第一处是把统一表示按频率或通道切分为两个不相交子集，分别送入两个独立的 AASIST 分支后再拼接判定。第二处是不再只用最后一层嵌入，而是聚合 12 层 Transformer 中靠后的 top-k 层特征。第三处是按赛道选用不同声码器组合做拷贝合成增强。推理与部署的延迟与吞吐等开销原文未披露，下文将分节展开切分与融合的实现细节。

### 按频率与通道切分的双分支判别结构

双分支是本文最核心的结构改动，目的是让被展平操作抹去的异质线索重新获得专门的建模容量。频率切分针对高低频段合成痕迹分布不均的问题，通道切分针对嵌入维度上线索分布不均的问题。两种策略都把原始 \((H \times W, 768)\) 表示分成两个子集，再用两个参数独立的 AASIST 分支分别建模，最后拼接分支输出做最终预测。下图左右两半分别展示了这两种切分的组织方式，阅读时可先看底部编码器，再沿箭头向上看拆分与汇合点。

[![原论文 Figure 2：The proposed BEAT2AASIST architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-2.png)

*论文图 2：双分支切分示意：左侧按频率均分高低频段，右侧按通道均分嵌入维度（原论文 Figure 2）。*

左半部分为按频率切分，底部蓝色椭圆为 BEATs 编码器，上方为标号 r1 至 r16 的长方体堆叠，呈 4 列与 4 行的二维排布。中间一步将其沿横向分为深灰与浅灰两块，深灰块包含 r1 至 r8，浅灰块包含 r9 至 r16，分别对应低频与高频子集。每块再展平为 \((H/2 \times W, 768)\) 的序列，其中 H 除以 2 表示频率方向减半，时间方向保持不变。两路序列分别向上送入顶部的两个粉色 AASIST 椭圆，深色一路用 r1 至 r8 示意，浅色一路用 r9 至 r16 示意，箭头均由子块指向各自的分支继续处理。

右半部分为按通道切分，底部同样为 BEATs 编码器，上方每个词元被画成上下两格，浅绿上格对应每个词元的前半通道，深绿下格对应每个词元的后半通道，依此类推至 r16，表示把每个 768 维向量沿通道均分为两个 384 维向量。随后所有词元的上半部分汇入左侧 AASIST，所有词元的下半部分汇入右侧 AASIST。该设计保持词元数量仍为 H 与 W 的乘积不变，仅通道维度减半，鼓励两个分支在不同嵌入子空间中捕捉互补的通道特异线索。

以一个 4 秒输入为例，数据流为梅尔频谱经切块投影得到 \((H \times W, 768)\) 序列，若选频率切分则先恢复为 \((H, W, 768)\) 再沿频率均分，若选通道切分则直接沿最后一维均分为 \((H \times W, 384)\) 的两路。两路分别经过各自 AASIST 的谱时图注意力推理后，输出拼接为最终判定依据。这种设计用两个分类器的容量换取对异质伪造痕迹的敏感性，代价是参数量与计算量高于单个 AASIST。原文未披露双分支的具体拼接维度与分类层实现，也未给出相同计算预算下的直接对比，因此增益中结构与容量的各自贡献仍需谨慎解读。

### 多层融合与声码器增强如何扩大训练覆盖

除双分支外，BEAT2AASIST 还有两处训练层面的增强，分别针对表示丰富度与数据多样性。表示层面聚合靠后的多层 Transformer 输出，避免只依赖最后一层。数据层面用神经声码器做拷贝合成，在保留语义内容的同时引入不同的合成痕迹。下图用三行展示了 3 种融合的实现差异，阅读时可对比门控权重的来源与加权后的汇合方式，再结合声码器按赛道选用的策略理解整体训练流程。

[![原论文 Figure 3：Multi-layer fusion strategies.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/872188f66513/figure-3.png)

*论文图 3：三种多层融合示意：拼接直接汇合，两种门控先加权再求和（原论文 Figure 3）。*

原图自上而下分为 3 组，每组左侧均为绿色竖条频谱，中间蓝色竖椭圆为 BEATs，右侧粉色竖椭圆为 AASIST，最终分为 Real 与 Fake 两个圆形节点。第一组为拼接融合，BEATs 输出的 top-k 灰色平板直接标注拼接后送入后端。第二组为卷积门控，上方橙色椭圆接收频谱输入，输出三色小条权重，经圆点乘操作作用于灰色平板，再经加号求和为单块棕色平板。第 3 组为激励门控，整体连线与第二组相近，区别在于橙色椭圆的输入引自灰色平板自身，而非左侧频谱，同样经过乘与加得到统一表示。

在实现上，设 12 层 Transformer 中靠后的 top-k 层输出为每词元 768 维向量，拼接策略将其堆叠为 \((H \times W, k, 768)\) 后直接送入后端，由分类器隐式学习层间关系。两种门控策略则先产生归一化的 k 个层权重，再做加权求和得到统一向量。卷积门控以输入梅尔频谱为条件，经 3 层二维卷积与批归一化与非线性与最大池化，再经全局平均池化与线性层与归一化输出权重。激励门控则先聚合多层表示，再经激励模块从层输出自身提炼权重。原文实验取 k 为 4 或 10，赛道 1 多用激励门控，赛道 2 多用卷积门控。

声码器增强按赛道区分，赛道 1 针对未知生成器泛化，仅用 HiFi-GAN 做拷贝合成，以学习通用伪造线索而不至于过拟合特定生成器。赛道 2 针对黑盒小数据条件，在 HiFi-GAN 之外追加 UnivNet 与 BigVGAN，三者归纳偏置不同，可引入更广的合成痕迹谱。训练时音频重采样至 16 kHz，批量为 32，共训练 20 轮，优化器为 Adam，学习率为 10 的负 6 次方，权重衰减为 10 的负 4 次方，类别权重设为伪造 0.1 与真实 0.9，并叠加 SpecAug 掩码增强。原文未披露流式分块与前瞻与采样步数，也未报告延迟与吞吐，推理路径为离线整句判定。

### 在未知生成器与黑盒小数据下的评测表现

#### 数据规模与赛道差异

评测的公平性前提需要先说清数据划分与指标方向。EnvSDD 包含 45.25 小时真实音频与 316.7 小时伪造音频，所有样本重采样至 16 kHz 且时长为 4 秒。评价指标为等错误率 EER，数值越低表示真实与伪造两类错误的折中点越好。赛道 1 训练集固定为已知生成器合成，测试集采用未见过的模型合成。赛道 2 在赛道 1 训练集基础上追加少量黑盒数据，测试集全部来自未知黑盒流程。下表列出 4 个划分在两个赛道真实与伪造数量的完整统计，可据此判断类别不平衡与黑盒引入的规模变化。

| Usage | Track 1 Real | Track 1 Fake | Track 2 Real | Track 2 Fake |
| --- | --- | --- | --- | --- |
| Training | 27,811 | 111,244 | 270 | 1,083 |
| Validation | 7,942 | 31,768 | 90 | 361 |
| Evaluation | 478 | 1,522 | 973 | 4,014 |
| Test | 1,000 | 3,000 | 1,994 | 7,980 |

从表中可见，赛道 1 训练包含 27,811 个真实样本与 111,244 个伪造样本，伪造约为真实的 4 倍，验证集包含 7,942 个真实与 31,768 个伪造，保持相近比例。测试集为 1,000 个真实与 3,000 个伪造，规模远小于训练。赛道 2 追加的训练黑盒数据仅 270 个真实与 1,083 个伪造，约为赛道 1 训练量的 1% 量级，验证追加 90 个真实与 361 个伪造，评估划分 973 个真实与 4,014 个伪造，测试为 1,994 个真实与 7,980 个伪造。这种设计使赛道 2 更贴近实际部署中攻击未知且标注极少的情形，也意味着模型不能依赖大量黑盒样本记住特定痕迹。

#### 排行榜趋势与集成代价

在上述划分下，挑战赛以测试 EER 排名，进度阶段的验证 EER 仅供调参，最终排名以排名阶段的测试 EER 为准。参赛系统多基于 EAT 与 BEATs 与 SSLAM 等环境音频基础模型，配合不同后端与集成规模。下表为官方排行榜的完整结果，列出赛道 1 与赛道 2 前 5 名的系统描述与集成模型数与测试 EER，其中集成数表示参与加权平均的单模型个数，数值越小表示达到相近精度所需的集成代价越低。

| Team Rank | System Description | Ensemble | Test EER |
| --- | --- | --- | --- |
| Track 1 |  |  |  |
| 1st | EAT+AASIST | 5 | 0.30 |
| 2nd | EAT Large+BiCrossMamba | 4 | 0.80 |
| 3rd | SSLAM+FFN | 1 | 1.20 |
| 4th (Ours) | BEAT2AASIST | 2 | 1.60 |
| 5th | EAT+ArcFace | 1 | 2.40 |
| Track 2 |  |  |  |
| 1st | EAT Large SSLAM+BiCrossMamba | 5 | 0.25 |
| 2nd | EAT+AASIST | 5 | 0.25 |
| 3rd (Ours) | BEAT2AASIST | 3 | 0.35 |
| 4th | SSLAM+FFN | 1 | 1.05 |
| 5th | BEATs+KNN | 1 | 2.96 |

对比可见，赛道 1 第一名为 5 模型集成的 EAT 与 AASIST 组合，测试 EER 为 0.30%，第 2 名为 4 模型集成的 EAT 大模型与双交叉 Mamba 组合，测试 EER 为 0.80%，第 3 名为单模型的 SSLAM 与前馈网络，测试 EER 为 1.20%，本文 2 模型集成的 BEAT2AASIST 以 1.60% 位列第 4 名，高于第 5 名单模型 EAT 与 ArcFace 的 2.40%。赛道 2 第一名与第 2 名均为 5 模型集成，测试 EER 同为 0.25%，本文 3 模型集成以 0.35% 位列第 3 名，优于第 4 名单模型 SSLAM 与前馈网络的 1.05% 与第 5 名 BEATs 与近邻的 2.96%。结果未包含人工听测与神经代理分数的对照，也未报告置信区间与多次运行方差，因此集成规模与架构偏置的各自贡献仍需结合消融判断。

### 去掉切分融合与声码器增强后误差如何变化

#### 单项去掉后的误差变化

消融在更小的学习率下复核各组件的贡献，学习率由 10 的负 6 次方调至 7 乘以 10 的负 7 次方，其余设置与主实验一致。研究选取赛道 1 的两个单模型与赛道 2 的 3 个单模型为基线，分别对应不同编号的频率或通道切分与门控组合。每次去掉特征切分或多层融合或声码器增强中的一项，观察验证 EER 与测试 EER 的变化。下表完整列出基线与 3 种去掉条件下的成对结果，前两组对应赛道 1，后 3 组对应赛道 2，每组均包含验证与测试两个数值，单位均为 %，数值越低越好。

| Model | (#2) Eval | Track 1 Test | (#3) Eval | Test | (#2) Eval | Test | Track 2 (#3) Eval | Test | (#4) Eval | Test |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Baseline | 1.45 | 1.60 | 1.66 | 1.70 | 0.43 | 0.46 | 0.82 | 0.60 | 0.72 | 0.61 |
| w/o Feature Split | 2.10 | 2.22 | 2.47 | 2.24 | 1.04 | 0.95 | 1.13 | 1.05 | 1.34 | 1.15 |
| w/o Multi-layer Fusion | 1.69 | 1.90 | 2.30 | 2.30 | 1.02 | 0.80 | 1.02 | 0.80 | 1.02 | 0.80 |
| w/o Vocoder Augmentation | 2.54 | 2.60 | 2.30 | 2.10 | 1.83 | 1.75 | 1.87 | 1.91 | 2.06 | 1.96 |

从数值看，去掉声码器增强的退化幅度最大。赛道 1 单模型基线验证为 1.45% 与 1.66%，去掉后升至 2.54% 与 2.30%，测试由 1.60% 与 1.70% 升至 2.60% 与 2.10%。赛道 2 3 个基线验证为 0.43% 与 0.82% 与 0.72%，去掉后升至 1.83% 与 1.87% 与 2.06%，测试由 0.46% 与 0.60% 与 0.61% 升至 1.75% 与 1.91% 与 1.96%。去掉特征切分后，赛道 1 测试升至 2.22% 与 2.24%，赛道 2 测试升至 0.95% 与 1.05% 与 1.15%。去掉多层融合后，赛道 1 测试为 1.90% 与 2.30%，赛道 2 3 组测试均为 0.80%，同样差于基线。

#### 归因边界与未验证部分

趋势表明声码器增强主要应对分布不确定性，在攻击生成流程完全未知的黑盒赛道中作用最突出，因为多样化的拷贝合成痕迹迫使模型关注内在伪造特性而非特定声码器指纹。特征切分与多层融合在两个赛道均带来稳定的结构性增益，前者通过子空间专门化区分异质伪造线索，后者通过浅层声学与深层语义的互补丰富表示。赛道 2 去掉融合后 3 组测试同为 0.80%，原文如此报告，未解释为何不同基线收敛到相同数值，使用时应以原文数值为准，不做额外配平或猜测。

消融的缺失与前提同样需要说明。原文未报告多次运行的均值与标准差，也未给出验证与测试划分上方差与置信区间，无法判断 0.10 个百分点量级的差异是否稳定。融合内部未单独对比拼接与卷积门控与激励门控的各自贡献，k 取 4 与 10 的选择也未做系统扫描。学习率下调使部分基线略优于主结果中的对应模型，跨表对比时应以同表内基线为准，不跨表相减自算未报告的差值。未胜出项方面，赛道 1 单模型测试最低仍为 1.60%，与第一名 0.30% 差距明显，说明结构偏置尚未完全弥补大规模集成与更大前端的优势。

### 结论成立的前提代价与复现核对清单

本文结论成立依赖 3 个前提。其一，评测为离线整句二分类，未考查长音频流中的时间定位与事件级归因，也未验证同步视觉或文本等多模态线索下的鲁棒性。其二，训练与测试均为 16 kHz 与 4 秒的受控切分，未覆盖变采样率与变时长与强混响与强背景噪声等部署变量。其三，指标仅为 EER，缺少人工听测的平均意见分与比较平均意见分，也缺少神经代理分数的对照，无法反映人耳感知与下游取证场景的对应关系。超出这些前提外推时，应重新评估。

代价集中在模型与集成规模。双分支使后端由单个 AASIST 增至两个独立 AASIST，参数量与计算量高于基线，原文未披露具体参数量与显存与 RTF。最终成绩依赖 2 模型与 3 模型集成，权重按验证精度经验设定，调参成本与推理成本高于单模型。声码器增强需额外生成拷贝合成伪造音频，赛道 2 需同时运行 3 种声码器，数据准备与存储开销显著增加。若计算预算严格受限，单模型 SSLAM 与前馈网络在更少集成下仍具竞争力，需按延迟与精度权衡选型。

复现核对上，作者仓库当前可用，文档完整度为部分覆盖，说明支持微调流程。原文使用 BEATs-iter3 并全参数微调，梅尔参数与优化器与批量与轮数均已披露，可据此复现训练流程。硬件型号与数量与训练耗时原文未披露，随机种子与多次运行设置也未说明，复现时需自行固定种子并报告方差。权重是否提供下载与系统是否可直接运行，原文与本次核查均未确认，不能视为已提供。附录方面原文未设独立附录，证明与补充消融与许可限制均未披露。

原文未提供试听页，无法通过听感对照伪造痕迹，复现应以 EER 数值为准，不虚构听感差异。未来方向包括引入时间或事件级定位以支持长流检测，联合多模态线索应对复杂攻击，以及探索自适应或持续学习以跟随生成技术的演进。工程选型上，若目标为未知生成器泛化，可优先复用 HiFi-GAN 单声码器增强与频率切分组合。若目标为黑盒小数据，应采用 3 种声码器联合增强与卷积门控，并保留少量黑盒验证集用于集成权重调参，同时记录集成带来的延迟增量。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：采样率 16 kHz，单通道波形统一裁剪或重复填充至 4 秒，梅尔频谱帧长 25 ms，帧移 10 ms，128 个梅尔滤波器组，切块 16 × 16，词元 768 维，原文未披露 RTF 与延迟与流式分块
- **训练与评测数据**：EnvSDD 数据集，真实 45.25 小时，伪造 316.7 小时，赛道 1 训练含 27,811 个真实与 111,244 个伪造，赛道 2 追加 270 个真实与 1,083 个黑盒伪造，验证与评估与测试划分见正文表格，仅用各自赛道训练集训练
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量，未披露训练耗时，优化器为 Adam，学习率为 10 的负 6 次方，权重衰减为 10 的负 4 次方，批量为 32，共训练 20 轮
- **核心超参数与配置**：BEATs-iter3 在 AudioSet 上预训练并全参数微调，12 层 Transformer 中取 top-k 为 4 或 10，交叉熵类别权重伪造 0.1 真实 0.9，叠加 SpecAug，增强声码器按赛道选用 HiFi-GAN 与 UnivNet 与 BigVGAN
- **推理速度与部署开销**：双分支 AASIST 并行推理后拼接输出，集成权重按验证精度经验设定，赛道 1 用 2 模型集成，赛道 2 用 3 模型集成，原文未披露参数量与显存与 RTF 与延迟
- **开源产物与协议状态**：作者仓库当前可用，地址见原文，文档完整度为部分覆盖，说明支持微调流程，未确认是否提供权重下载与一键运行脚本
- **附录与补充材料要点**：原文未设独立附录，未披露证明与补充消融与许可限制，失效案例仅体现为去掉增强后误差上升，未报告多次运行方差与人工听测

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.8/10** | 创新 6.6/10 | 技术严谨 6.7/10 | 实验充分 7.5/10 | 清晰度 5.6/10 | 影响力 6.2/10 | 开源 6.0/10 | 可复现 6.0/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0471`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/471) · [官方 PDF](https://ijcai.org/proceedings/2026/0471.pdf)
- DOI：`10.24963/ijcai.2026/471`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：双分支切分与多层融合经直接消融验证，移除任一组件两赛道EER一致劣化且单模型超越同条件基线。

- 核心优势：在EnvSDD两赛道公开榜单分别取得第4名1.60%与第3名0.35%，以2个与3个集成少于榜首5个实现有竞争力成绩。

- 核心优势：分赛道声码器增强保留语义引入合成偏置，Track2叠加三种声码器提升黑盒鲁棒性且消融中退化幅度最大。

- 主要短板：未报告置信区间与统计检验，集成权重按单模型精度经验选择而无交叉验证说明。

- 主要短板：表1验证集排版对齐不清且表2部分集成行N/A与表4榜单测试成绩无法逐格对应原文未解释。

- 主要短板：硬件型号数量与训练时长缺失使训练成本不可核对，后端AASIST关键超参细节亦未披露。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
