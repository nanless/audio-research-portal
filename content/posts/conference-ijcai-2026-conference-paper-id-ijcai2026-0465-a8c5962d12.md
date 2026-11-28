---
title: "Bridge: A Cross-Modal Learning Framework for Unified Semantic Representation in Noisy Communication"
date: 2026-11-28
draft: false
description: "Bridge 针对噪声信道下视频 音频与文本难以共享统一语义的问题 以双分支解耦 门控对比与共享码本实现紧凑传输 并在 COCO2017 低信噪比图像重建中取得最高峰值信噪比与最低感知距离 代价是依赖大型预训练模型做二阶段校验且未报告延迟与人工听感"
tags: ["对比学习", "多模态学习", "向量量化", "多模态语义传输"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "噪声信道下统一语义通信 Bridge 的解耦 对齐与重建"
paper_digest_original_title: "Bridge: A Cross-Modal Learning Framework for Unified Semantic Representation in Noisy Communication"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0465"
paper_digest_workbench_source_sha256: "ed75220a97f891810a39192f4f29f3a07db55daa51a6b4d857517d0bb92e745f"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/465"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0465.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "多模态语义传输"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Bridge 针对噪声信道下视频 音频与文本难以共享统一语义的问题 以双分支解耦 门控对比与共享码本实现紧凑传输 并在 COCO2017 低信噪比图像重建中取得最高峰值信噪比与最低感知距离 代价是依赖大型预训练模型做二阶段校验且未报告延迟与人工听感"
paper_digest_reader_sections: [{"heading":"异质模态在噪声信道下为何难以共享同一语义空间","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"Bridge 双分支解耦与两阶段重建的整体流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"特有与不变分支如何分工并以门控拉齐语义","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"离散瓶颈 重建损失与基础模型校验的训练边界","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"低信噪比下重建与分类优势成立的信道与指标前提","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"去掉解耦或对齐后重建质量如何内缩","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界 复现前提与工程选型建议","index":7,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China"],"name":"Liang Chen"},{"affiliations":["School of Computing and Data Science, Fujian University of Technology, Fuzhou 350118, China"],"name":"Yanze Huang"},{"affiliations":["College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China"],"name":"Limei Lin"},{"affiliations":["College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China"],"name":"Xiaoding Wang"},{"affiliations":["The Hong Kong Polytechnic University, Hong Kong, China"],"name":"Wei Lou"},{"affiliations":["China Telecom Cloud Computing Research Institute, Beijing 100088, China"],"name":"Jie Wu"},{"affiliations":["Department of Computer Science and Information Engineering, National Cheng Kung University, Tainan 701, Taiwan"],"name":"Sun-Yuan Hsieh"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"f976ee2ea5d0c0a72a1f1f5170b4603194a3be23e0ac2198fe07f0e9cbe79494","url":"/audio-research-portal/client/papers/2026-11-28/conference-a8c5962d123f2345a3f43a45/citation.bib"},"citation.json":{"sha256":"1efb6ca5510b878c2a7c3403309a731c772cba8e27bcd5e1a93a4940fcc9a57e","url":"/audio-research-portal/client/papers/2026-11-28/conference-a8c5962d123f2345a3f43a45/citation.json"},"citation.ris":{"sha256":"906b674406d3e4a6f6a4cab76715e723718aad34d18665eb7c029e6a11bb11d1","url":"/audio-research-portal/client/papers/2026-11-28/conference-a8c5962d123f2345a3f43a45/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"30f4efc401d73d9048400ff17149972d17eb07441fb6931fda11b1a17dbb0e50","url":"/audio-research-portal/client/papers/2026-11-28/conference-a8c5962d123f2345a3f43a45/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0465"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/465"
paper_digest_conference_doi: "10.24963/ijcai.2026/465"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/465"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0465.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "6f2ef33759e4b08ef16e364552e01956c791c6d8ccc1b06658fb7521c8c0d701"
paper_digest_api_reader_plan_sha256: "87162dc2f6ee6b059917283a26725904ecc44a7bc1ce39d72eef0c1bb8d057e6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6836cb25a64231cd15f752a3a56b61ff3d8e2700afe830b4eb9568b33de2e85a"
paper_digest_api_reader_source_table_count: 1
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f1c692093dcd73365f74fa4a344e769dfe5f1e9352f00d2af86ff1eb58fb65db"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d6a7c4af0ae449814b7ca4fb7e4d712f7435b9ff73919395c15b1f7d222ddc92"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c6866269e149e48d534c7c48dbdb4579e8254de76e32ae9b5897086a08de6825"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"task","id":"task.multimodal-semantic-transport","label":"多模态语义传输"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
---

# 📄 噪声信道下统一语义通信 Bridge 的解耦对齐与重建

> 英文题目：*Bridge: A Cross-Modal Learning Framework for Unified Semantic Representation in Noisy Communication*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0465`
> DOI：`10.24963/ijcai.2026/465`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/465) · [官方 PDF](https://ijcai.org/proceedings/2026/0465.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态语义传输](/audio-research-portal/papers/?concept=task.multimodal-semantic-transport)
- **研究方法**：[对比学习](/audio-research-portal/papers/?concept=method.contrastive)；[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)；[向量量化](/audio-research-portal/papers/?concept=method.vector-quantization)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.1/10** | 创新 6.7/10 | 技术严谨 5.3/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 3.8/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Liang Chen：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Yanze Huang：School of Computing and Data Science, Fujian University of Technology, Fuzhou 350118, China
- Limei Lin：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Xiaoding Wang：College of Computer and Cyber Security, Fujian Normal University, Fuzhou 350117, China
- Wei Lou：The Hong Kong Polytechnic University, Hong Kong, China
- Jie Wu：China Telecom Cloud Computing Research Institute, Beijing 100088, China
- Sun-Yuan Hsieh：Department of Computer Science and Information Engineering, National Cheng Kung University, Tainan 701, Taiwan

## 📌 核心摘要

**问题与瓶颈：** 多模态语义通信需将视频、音频与文本三路异构信号压缩为统一语义表示，并在带宽受限与加性高斯白噪声及瑞利衰落信道下完成重建与任务推理。现有单模态路线分别优化文本、语音与视觉语义，但在语义定义模糊与信道失配下难以稳定传输。已有多模态工作借助多模态 Transformer 与注意力机制建模跨模态关系，却仍面临对齐低效与实时性不足。更根本的是，信道噪声与衰落会重塑传输特征分布，引发语义漂移与跨模态失配，致使一致性、鲁棒性与可部署效率难以兼顾。

**核心思路与方法架构：** Bridge 的直觉是以解耦抑制模态专属噪声泄漏，以门控对齐压制不可靠跨模态匹配，再以共享码本压缩传输。单条样本流动时，文本、音频与视频输入先经各自模态编码器提取初级特征，再分入模态专属支路与共享支路，前者经投影与正则保留个性，后者经共享编码器得到模态不变表示。上述不变表示经互信息解耦与模态感知跨模态语义模块优化分离与对齐，其中门控对比以可学习成对门控调节对数几率的自适应温度，再经最近邻向量量化为离散码索引后传输。接收端先由轻量模态解码器重建波形、帧与词元，再由 CLAP、CLIP 与 BERT 分别映射至共享语义嵌入空间做一致性验证与增强。投影维度、码本规模与损失系数等原文未披露具体取值，基础模型冻结状态与流式约束原文亦未说明，该设计直击分布差异与信道扰动放大的失配根因。

**关键实验与核心代价：** 在 COCO2017 的 AWGN 信道 SNR 0 dB 条件下，Bridge 的峰值信噪比（PSNR，越高越好）为 26.97，高于最强可比基线 ADJSCC 的 22.57，学习感知图像块相似度（LPIPS，越低越好）为 0.057，低于最强可比基线 SGD-JSCC 的 0.122。在 Rayleigh 信道 SNR 10 dB 条件下，Bridge 的峰值信噪比为 29.80，高于 SGD-JSCC 的 22.67，学习感知图像块相似度为 0.029，低于 SGD-JSCC 的 0.095。在 CMU-MOSEI 的 SNR -6 dB 条件下，Bridge 的分类准确率为 72.53%，高于次强基线 T-DeepSC（-2）的 71.66%，至 SNR 12 dB 时为 82.15%，高于 T-DeepSC（12）的 80.04%。论文未安排人工主观听测，音频侧仅以嵌入相似度、均方误差与尺度不变信干比（SI-SDR，越高越好）等客观指标呈趋势，图 2 未给出可逐字核对的数值表故不转录。消融显示完整 Bridge 雷达包络最外，去除任一组件均内缩，原文称低信噪比下峰值信噪比提升约 16.3% 但未给出可复算的基线数值对，未报告参数量、显存或时延实测。

**适用边界与深读导览：** 结论成立前提为合成 AWGN 与 Rayleigh 信道、所选 VGGSound、COCO2017 与 CMU-MOSEI 划分及客观重建与分类指标，未覆盖真实无线衰落、码率约束部署、长时流式与主观听感场景。第二阶段依赖大规模基础模型校验，但未量化额外计算与时延开销。欲深究解耦与门控对比的形式含义及组件贡献，可查阅方法概述和架构与实验结果节的公式与表格对照。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 异质模态在噪声信道下为何难以共享同一语义空间

传统通信追求比特级无差错而语义通信只要求接收端恢复含义或完成任务在带宽受限的未来网络中更具效率 Bridge 的输入是文本音频与视频 3 路信号输出是经噪声信道传输后重建的波形图像帧与词元以及情感与类型等下游标签难点在于 3 路信号分布与粒度差异极大信道噪声与衰落还会重塑特征分布使跨模态对应关系发生漂移

单模态语义通信已在 3 条路线上取得进展文本侧依靠词嵌入与 Transformer 建模语义音频侧结合识别与合成以保留说话意图视频侧利用卷积与时序建模压缩冗余近期还引入扩散先验改善低信噪比感知质量但这些系统仍受三重瓶颈制约语义与任务目标边界模糊信道失配时鲁棒性下降明显端到端复杂度使实际部署难以扩展

多模态系统希望联合异质来源获得更完整的理解方法上多用对比学习与统一表示将不同输入映射到共享语义空间并借助混合专家保留模态特性然而模态间隙依然尖锐各模态分布粒度与噪声敏感度不同对齐质量易受损信道噪声与衰落进一步放大接收端不一致导致任务性能波动实时处理与统一评测标准的缺失也阻碍规模化落地

为此论文提出 3 个相互牵制的要求跨模态一致噪声鲁棒与高效可部署仅为效用优化的自发协议往往无法产生语义一致的映射因此需要面向重建的统一学习 Bridge 的定位正是将视频音频与文本解耦为特有与不变两部分在共享隐空间中对齐后再做紧凑传输并在解码端借助基础模型校验语义以兼顾模态内精度与模态间泛化

### Bridge 双分支解耦与两阶段重建的整体流程

在展开张量变换前先沿图 1 自左向右通读主路径重点看 3 路输入如何分叉为特有与不变特征又在何处汇合量化并经物理信道到达解码器注意中部最小化互信息的红色箭头与右侧相似度计算的三角关系以及底部从编码器到码本再到解码器的传输链这决定了后续机制的直觉

[![原论文 Figure 1：Overview of the multimodal semantic communication system: modality-specific and modality-invariant…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-1.png)

*论文图 1：三路输入经解耦对齐量化与物理信道后由大模型辅助重建的整体流程（原论文 Figure 1）。*

图示上半左侧并列文本句 I am not throwing in the towel 蓝色音频波形与 4 帧视频胶片经文本音频与视频特征块进入解耦区每路再分为不变特征与特有特征红色双向箭头标注最小化互信息上方回标反向传播中部两组立体块分别代表模态不变与模态特有特征右侧以 Za Zb 与 Zc 三圆及 sim(·) 双向箭头计算相似度经 LMACS 函数进入结构对齐下半自右向左为编码器码本 e1 至 en 物理信道解码器与 LLM 辅助重建 LLM 下方标注 machine learning system 与 optimization 四次迭代

与 ImageBind Uni-Perceiver v2 等统一嵌入基线及各类联合信源信道编码基线相比 Bridge 保留共享隐空间的思想但新增三处实质改动其一为双分支解耦结构独立但联合训练避免语义干扰其二为门控对比对齐以可学习门控替代固定温度其三为跨模态共享码本加使用监控重置以及轻量解码加 CLAP CLIP 与 BERT 二阶段校验原文未披露采样率帧长码率与特征维度仅给出隐表示形状与码本维度符号

教学例子假设一段 3 模态时间对齐的 1 秒样本进入系统文本分支输出词元特征音频分支输出波形特征视频分支输出帧特征三者先经各自低层编码器得到初始表示随后特有分支经投影与高斯噪声得到 \(h_m\) 不进入信道不变分支经共享编码器得到 \(z_m\) 在 RT × D 隐表示上对齐量化为码索引后传输接收端先经轻量解码得初步波形帧与词元再经基础模型映射到 d 维嵌入做一致性增强原文未披露 T D 码本大小 K 与窗口 Nreset 取值故无法给出具体张量形状

### 特有与不变分支如何分工并以门控拉齐语义

每个模态 m 的输入 \(x_m\) 先经低层模态编码器 \(φ_m\) 得到初始特征随后分叉特有分支经投影头映射并加入高斯噪声得到 \(h_m\) 用于保真要求高的下游任务不量化传输不变分支将同一初始特征送入共享编码器得到 \(z_m\) 用于跨模态对齐与传输两条分支结构独立但联合训练以实现分工并减少干扰

为压制两路残余冗余 SDMI 引入辅助投影仅用于互信息估计利用确定性映射下互信息不变性保持数值稳定价值评估模型在投影后特征上经 Donsker-Varadhan 表示估计互信息目标是最小化特有与不变因子间的依赖该估计提供更平滑的梯度无需显式负采样有助于在严重信道损伤下稳定语义码

MACS 以成对门控对比实现共享空间对齐对跨模态锚点与候选经非对称投影映射再经双线性相似度度量兼容性每对的对数几率再乘以门控该门控由拼接投影经门控网络与 Sigmoid 函数得到取值在 0 到 1 之间在负 InfoNCE 目标内可靠匹配被放大噪声或弱对齐被抑制等价于自适应温度低一致时升温高一致时降温从而强化显式结构一致性

对齐后的不变特征属于 RT × D 空间按时间步在共享码本中做最近邻量化得到离散码索引以提升紧凑性训练采用直通估计前向查表后向经停止梯度算子视为恒等损失含码本项与承诺项 β 为 0.25 该设计使连续语义可转为统一离散空间便于后续重建与推理为防少数码过用而多数闲置系统在最近窗口内统计用过每码的不同模态数若小于 2 则重初始化为标准正态分布原文未披露码本大小与窗口长度

### 离散瓶颈重建损失与基础模型校验的训练边界

离散瓶颈的前向按最近邻选择码向量后向将量化器视为恒等以直通梯度码本项将码向量拉向所分配隐变量承诺项将隐变量约束在所选码附近 β 为 0.25 该设计使连续语义可转为统一离散空间便于后续重建与推理同时保留端到端可导

接收端分两个阶段解码第一阶段用轻量模态解码器从量化隐向量重建中间信号包括音频波形视频帧与文本词元与编码器联合训练以保证低延迟与可接受保真度重建目标为加权和连续模态用均方误差离散文本用交叉熵权重为 λa λv 与 λt 第二阶段将重建信号分别送入 CLAP CLIP 与 BERT 映射到共享 d 维语义嵌入空间做校验与增强

总目标为四项加权和分别对应解耦门控对比重建与量化系数 α1 至 α4 在验证集上平衡梯度量级与整体性能参数边界方面模态编码器共享编码器投影头价值评估模型门控网络码本与轻量解码器参与更新 CLAP CLIP 与 BERT 为预训练基础模型仅用于映射与一致性评估原文未提及微调视为冻结

原文未披露推理时的自回归方式分块流式策略前瞻窗口缓存机制与采样步数以及延迟 TTFA（首次音频延迟） RTF（实时因子）与显存开销实验均为离线重建与分类评测未验证实时语音交互或低功耗部署条件因此从离线指标外推到流式系统时需谨慎基础模型增强带来的额外计算代价也未量化

### 低信噪比下重建与分类优势成立的信道与指标前提

评测覆盖 4 个数据集 VGGSound 用于音频与视频重建 COCO2017 用于图像重建 CMU-MOSEI 用于多模态情感分类 MM-IMDb 用于类型分类信道考虑 AWGN（加性高斯白噪声）与 Rayleigh（瑞利）衰落 SNR（信噪比）从 -15 dB 至 25 dB 分档测试指标方向为 PSNR（峰值信噪比）越高越好 SSIM（结构相似性）越高越好 LPIPS（学习感知图像块相似度）越低越好 SI-SDR（尺度不变信号失真比）越高越好 MSE（均方误差）越低越好相似度越高越好原文未披露训练规模参数量码率因果流式与离线划分及方差置信区间也无人工听测仅以客观指标与分类准确率评定

#### 音视频重建随信噪比的变化

先看六格曲线布局左列为音频相似度音频均方误差与音频尺度不变信号失真比右列为视频相似度视频峰值信噪比与视频结构相似性横轴均为 SNR（信噪比） 红色圆点为 Bridge 蓝色方块为 Uni-Perceiver 绿色三角为 ImageBind 重点对比低中信噪比段的开口大小理解横纵轴方向是关键相似度峰值信噪比失真比与结构相似性越高越好均方误差越低越好顶部代表更优

[![原论文 Figure 2：(a)-(c): Audio reconstruction quality under different SNRs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-2.png)

*论文图 2：不同信噪比下音频与视频重建的相似度误差与质量曲线对比（原论文 Figure 2）。*

曲线表明 Bridge 在全程多呈顶部音频相似度在 0 dB 时约 0.74 至 5 dB 才升至约 0.98 而视频相似度在 0 dB 已约 0.95 说明 2 模态爬升节奏不同不可将音频达 0.9 的位置提前音频均方误差在 -15 dB 时 Bridge 仅约 0.3 另两条分别约 15.4 与 10.7 差距极为显著视频峰值信噪比中 ImageBind 全程为负至低正而 Bridge 在 5 dB 达约 29.1 dB 但至 15 dB 时与 Uni-Perceiver 基本持平音频尺度不变信号失真比与视频结构相似性亦呈类似开口 Bridge 早 5 dB 进入高位高信噪比后差距收窄

#### 图像重建与类型分类的跨任务表现

下表精简自原文完整 Table 1 仅截取 0 dB 条件下 AWGN（加性高斯白噪声）与 Rayleigh（瑞利）两组列保留全部 7 种方法以保证公平原文完整 Table 1（本精简表未列出）还含 5 dB 10 dB 与 15 dB 结果为便于初学者对照方向第一列已标明箭头数值越大或越小为优需结合箭头判断 Bridge 列位于最右基线列居中低信噪比下差异最为直观

| SNR Channel Metric | VAEJSCC | ADJSCC | DiffJSCC | DeepJSCC | JSCCformer | SGD-JSCC | Bridge |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PSNR↑ | 15.59 | 22.57 | 19.85 | 22.44 | 22.11 | 21.40 | 26.97 |
| AWGN |  |  |  |  |  |  |  |
| LPIPS↓ | 0.300 | 0.241 | 0.260 | 0.229 | 0.201 | 0.122 | 0.057 |
| 0 |  |  |  |  |  |  |  |
| PSNR↑ | 10.52 | 18.47 | 18.52 | 18.25 | 19.31 | 16.31 | 24.01 |
| Rayleigh |  |  |  |  |  |  |  |
| LPIPS↓ | 0.614 | 0.413 | 0.419 | 0.365 | 0.295 | 0.235 | 0.118 |

表中 Bridge 在 0 dB 两信道下同时取得最高 PSNR（峰值信噪比）与最低 LPIPS（学习感知图像块相似度） AWGN 下为 26.97 与 0.057 Rayleigh 下为 24.01 与 0.118 摘要称低信噪比图像重建提升约 16.3% 原文完整 Table 1（本精简表未列出）还含 5 dB 10 dB 与 15 dB 结果原文完整 Table 2（本精简表未列出）的情感分类中 Bridge 在 -6 dB 至 12 dB 保持最高类型分类亦居顶但与另两强基线差距微小高信噪比后增益收窄且无人工听测与方差报告

### 去掉解耦或对齐后重建质量如何内缩

在进入雷达图前先明确消融逻辑完整 Bridge 与去掉解耦去掉对齐及双缺基线四者对比六轴中除音频均方误差越低越好外其余越高越好越靠外圈代表越优完整 Bridge 应为最外圈蓝色去解耦为橙色去对齐为绿色双缺为最内红色阅读时先锁定外圈数值再看内缩幅度最大的轴

[![原论文 Figure 5：Ablation results comparing Bridge across multiple SNR levels.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cab4fe3510e4/figure-5.png)

*论文图 5：四个信噪比下去掉解耦或对齐后六项重建指标的雷达对比（原论文 Figure 5）。*

雷达图表明四子图中外圈蓝色均为完整 Bridge -10 dB 外圈标注为音频相似度 0.33 音频均方误差 0.19 视频结构相似性 0.35 视频相似度 0.38 视频峰值信噪比 5.37 与音频尺度不变信号失真比 -8.06 -5 dB 5 dB 与 10 dB 外圈亦随信噪比抬升至 10 dB 达 0.99 0.01 0.99 0.99 29.99 与 20.00 橙色去解耦与绿色去对齐均内缩红色双缺最靠内原文正文另报告 -10 dB 音频相似度 0.223 至 0.198 等降幅原文如此报告存在字面算术出入原文未解释此处以外圈标注为准谈相对排序

相对排序表明两模块分工不同去掉解耦后 2 模态均匀内缩低信噪比下噪声泄漏更明显去掉对齐后跨模态一致性下降更剧视频相似度与结构相似性内缩幅度更大说明门控对比是维持音频视频语义对齐的主要驱动随着信噪比升至 5 dB 与 10 dB 各变体均上移但完整 Bridge 在信号级质量上仍保持清晰外扩验证了解耦净化与对齐的叠加作用

消融仅覆盖 VGGSound 上 4 个代表信噪比与六项重建指标未消融码本重置基础模型校验与不同权重配比也未报告方差与显著性基线始终位于最内圈证实两模块缺一不可但高信噪比下差距缩小提示在信道较好时可权衡是否启用重型增强以节省计算开销

### 假设边界复现前提与工程选型建议

Bridge 的结论建立在三重前提上其一为 3 模态时间对齐且共享语义其二为仿真 AWGN（加性高斯白噪声）与 Rayleigh（瑞利）信道其三为客观重建指标与分类准确率即代表语义保真度若输入缺失模态存在强混响或多说话人交叠或信道为真实衰落与干扰并存跨模态门控的可靠性未经验证自适应温度可能误判

部署层面亦有多项空白原文未披露采样率码率延迟 RTF（实时因子）与显存轻量解码虽强调低延迟但第二阶段 CLAP CLIP 与 BERT 均为大模型实际端到端耗时未知实验未做流式分块因果约束与人工听测相似度与峰值信噪比高并不等同于人耳可懂度与自然度医疗驾驶等实时场景不可直接外推

复现方面原文未提供可用代码权重数据或演示链接代码是否开源权重是否提供下载与系统是否可直接运行三件事均未确认关键超参仅知 β 为 0.25 与系数在验证集选取优化器学习率批大小网络层数码本大小与窗口长度均未披露附录亦未提供证明与许可说明需按原文描述重新实现

选型上若目标是在低信噪比下保语义并兼顾重建细节且服务端可承担基础模型校验 Bridge 的解耦加门控思路值得借鉴若终端算力紧张或需超低延迟可仅保留解耦与共享码本暂缓第二阶段增强教学聆听时建议对比低信噪比下 Bridge 与统一嵌入基线的重建样本重点听语义可懂性而非仅看曲线网址与听感均以作者后续公开为准不做虚构

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率帧长步长码率通道数与前瞻延迟仅给出不变表示形状为 RT × D 与码本维度为 RD 未给出 T D 码本大小与窗口长度也未报告 RTF 与延迟
- **训练与评测数据**：训练与评测涉及 VGGSound COCO2017 CMU-MOSEI 与 MM-IMDb 覆盖音视频重建图像重建情感分类与类型分类原文未披露各集时长语种分布与具体划分
- **算力与训练耗时**：原文未披露 GPU 型号数量训练步数与耗时无独立推理硬件说明
- **核心超参数与配置**：向量量化承诺权重 β 为 0.25 总目标系数 α1 至 α4 在验证集上平衡梯度选取原文未披露优化器学习率批大小层数维度与门控温度初值
- **推理速度与部署开销**：原文未披露 RTF 延迟吞吐显存或参数量两阶段解码中基础模型增强带来额外开销但未量化实验均为离线评测
- **开源产物与协议状态**：原文未提供可用代码权重数据或演示链接代码是否开源权重是否提供下载与系统是否可直接运行三件事均未确认
- **附录与补充材料要点**：原文未披露附录证明补充消融许可限制或失效案例细节消融仅覆盖部分信噪比与重建指标

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.1/10** | 创新 6.7/10 | 技术严谨 5.3/10 | 实验充分 7.3/10 | 清晰度 5.5/10 | 影响力 6.3/10 | 开源 0.0/10 | 可复现 3.8/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0465`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/465) · [官方 PDF](https://ijcai.org/proceedings/2026/0465.pdf)
- DOI：`10.24963/ijcai.2026/465`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：COCO2017中0dB AWGN下PSNR 26.97高于ADJSCC的22.57且LPIPS 0.057低于SGD-JSCC的0.122，八组条件全面最优。

- 核心优势：CMU-MOSEI全SNR范围准确率最优，-6dB达72.53%高于次强71.66%，至12dB达82.15%仍保持领先。

- 核心优势：双支路解耦与门控对比自适应温度构成针对信道漂移的可验证对齐机制，消融显示去除任一组件均退化。

- 主要短板：消融正文-10dB起始值与图5像素标注逐项不符，降幅无法对应到图示，原文未解释。

- 主要短板：确定性映射下互信息不变的表述在一般情形下不成立，且缺少可检查的推导与评估模型细节。

- 主要短板：投影维度码本规模损失系数硬件划分等关键配置大面积缺失，第二阶段基础模型开销未量化。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
