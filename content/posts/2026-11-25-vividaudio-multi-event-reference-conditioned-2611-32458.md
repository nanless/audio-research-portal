---
title: "VividAudio: Multi-Event Reference-Conditioned Video-to-Audio Generation"
date: 2026-11-25
draft: false
tags: [视频到声音生成, 注意力机制, 流匹配, 数据增强]
categories: [论文速递]
description: "论文提出多事件参考条件视频配音任务并给出 VividAudio，用视频内扰动配对与时间对齐复合参考双路注入加局域路由，在 VGGSound-Ref 与 VividBench 上提升事件级音色跟随并保持可比拟音质量，代价是依赖神经代理指标且未覆盖长视频与完全重叠事件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.32458"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多事件参考条件视频配音：同一配乐内分段音色控制"
paper_digest_original_title: "VividAudio: Multi-Event Reference-Conditioned Video-to-Audio Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.32458v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.32458v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.32458v1.pdf"
paper_digest_primary_task: "视频到声音生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.augmentation","label":"数据增强"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文提出多事件参考条件视频配音任务并给出 VividAudio，用视频内扰动配对与时间对齐复合参考双路注入加局域路由，在 VGGSound-Ref 与 VividBench 上提升事件级音色跟随并保持可比拟音质量，代价是依赖神经代理指标且未覆盖长视频与完全重叠事件。"
paper_digest_reader_sections: [{"heading":"多事件参考控制配音：任务定义与三重瓶颈","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"VividAudio 总览：视频内扰动配对与时间对齐复合参考","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"双路注入与解耦：局域时间保持、全局上下文与事件路由","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"VGGSound-Ref 与 VividBench 主结果：在可比接口下控制性提升与质量权衡","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融与因果通路：双路、窗口与路由器各自贡献","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"假设边界、复现核对与工程选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["The State Key Lab of Brain-Machine Intelligence, Zhejiang University","ReLER, CCAl, Zhejiang University, China","ByteDance, China"],"name":"You Li"},{"affiliations":["The State Key Lab of Brain-Machine Intelligence, Zhejiang University","ReLER, CCAl, Zhejiang University, China"],"name":"Dewei Zhou"},{"affiliations":["The State Key Lab of Brain-Machine Intelligence, Zhejiang University","ReLER, CCAl, Zhejiang University, China"],"name":"Fan Ma"},{"affiliations":["ByteDance, China"],"name":"Dongliang He"},{"affiliations":["The State Key Lab of Brain-Machine Intelligence, Zhejiang University","ReLER, CCAl, Zhejiang University, China"],"name":"Yi Yang"}]
paper_digest_abstract_sha256: "e5c92aa6ea5f974c4df3d7b2ed9f27d5e37ca8732fcc578fdbf1d298175b65bc"
paper_digest_sidecars: {"citation.bib":{"sha256":"3e359dc9695a422e50bc7ad0062a249e27ebebc62960aba752939e9fa55a4d39","url":"/audio-research-portal/client/papers/2026-11-25/2611-32458/citation.bib"},"citation.json":{"sha256":"3c79de0418d3de509d1d72a5a02f639cf9565e9d6240b00dd1b11134da32a2c8","url":"/audio-research-portal/client/papers/2026-11-25/2611-32458/citation.json"},"citation.ris":{"sha256":"31828af5a92a7d90f15bb21c42ef882decc86902cbada2d4fcf5146b0f1998bd","url":"/audio-research-portal/client/papers/2026-11-25/2611-32458/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8dfba64ae69392e8cb1da421d29b5e78642aab2ae498b17e01effa97b2c17d68","url":"/audio-research-portal/client/papers/2026-11-25/2611-32458/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "f9986b8b7498cfc0b5df7caf512a3a37fdbf361429be691e97ab12881ec68551"
paper_digest_api_reader_plan_sha256: "725cc257fb16ed9d0d4a4eb38ef5d0c685385ef49febef349f183ee67d1691f2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7c2fea606507fba2a29baa7b621e4d4711cbb9f1fe51851c432e2f191311daf0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "db792159c49d2554206fab387ca8139cf224baf9be85aa7f64ebc526d4ff1ccb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "967ce6d7bf9cc92c5f242cd6615e47a4405d65c1b56308546d89940129bfff80"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "adeb71d1895692e7dac35a462d2db526c023f6bcce6952deeb31d535ea813b1f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 多事件参考条件视频配音：同一配乐内分段音色控制

> 英文题目：*[VividAudio: Multi-Event Reference-Conditioned Video-to-Audio Generation](https://arxiv.org/abs/2611.32458v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-research-portal/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-research-portal/papers/?concept=task.video-to-audio)
- **研究方法**：[注意力机制](/audio-research-portal/papers/?concept=method.attention)；[生成模型](/audio-research-portal/papers/?concept=method.generative) → [流匹配](/audio-research-portal/papers/?concept=method.flow-matching)；[数据增强](/audio-research-portal/papers/?concept=method.augmentation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.8/10 | 技术严谨 7.4/10 | 实验充分 6.8/10 | 清晰度 7.0/10 | 影响力 6.6/10 | 开源 0.0/10 | 可复现 7.2/10 | 工程/实践 5.0/10


## 👥 作者与机构

- You Li：The State Key Lab of Brain-Machine Intelligence, Zhejiang University；ReLER, CCAl, Zhejiang University, China；ByteDance, China
- Dewei Zhou：The State Key Lab of Brain-Machine Intelligence, Zhejiang University；ReLER, CCAl, Zhejiang University, China
- Fan Ma：The State Key Lab of Brain-Machine Intelligence, Zhejiang University；ReLER, CCAl, Zhejiang University, China
- Dongliang He：ByteDance, China
- Yi Yang：The State Key Lab of Brain-Machine Intelligence, Zhejiang University；ReLER, CCAl, Zhejiang University, China

## 📌 核心摘要

**问题与瓶颈：** 读者需要先理解的任务是视频到声音生成，输入是无声视频与可选文本，输出是与画面同步的波形。创作者进一步希望指定出现哪些声音事件、各自在何时出现、每个事件听起来像哪一段参考录音。现有主流路线用全局文本与视觉证据决定语义，擅长判断是否该有狗叫或脚步声，却难以刻画音色、材质与录制环境。单事件参考方法把整段参考压缩成全局风格向量，多事件同时出现时不同音色容易串扰。数据层面也缺少每个事件配有独立参考与目标音频的三元组，若直接拿目标事件自身做参考，模型只需复制即可得高分，学不到可迁移的声学属性。

**核心思路与方法架构：** 与最接近的单参考基线相比，本文的增量是把多个事件参考按目标时间摆放到同一画布上，再用局部与全局两条通路分别控制事件音色与片段氛围，并用显式路由抑制串扰。沿一个样本看，视频经 CLIP 与 Synchformer 得到语义与同步特征，与目标时长相等的静音波形作为画布，各事件扰动后的参考片段按其目标起止时间粘贴上去，形成时间对齐复合参考。冻结的 BEATs 编码器从该画布抽出时间分辨特征序列，维度为 768 维。局部通路把该序列经参考注意力加到音频隐变量上，缩放系数初始化为零，全局通路用 32 个可学习查询与 8 层 Audio Q-Former 把整段画布汇总为一个池化向量，再经自适应归一化调制整体频谱与背景质感。训练用矫正流匹配学习从噪声到 44 kHz 自编码器隐空间的速度场，推理保持视频、文本与参考集合固定，仅通过调整局部窗口改变隔离强度。

**关键实验与核心代价：** 在域内基准 VGGSound-Ref 上，本文 BEATs-Cos（BEATs 余弦相似度 ↑）0.6947 与 CLAP-Cos（CLAP 余弦相似度 ↑）0.6286，高于最强可比基线 AC-Foley 尾部参考设置的 0.6637 与 0.5767，LSD（对数谱距离 ↓）16.92 与 MCD（梅尔倒谱失真 ↓）460.2 也低于该基线的 17.93 与 475.3，FAD（Fréchet 音频距离 ↓）0.839 与 KLPANNs（KL 散度 ↓）1.618 则弱于该基线的 0.701 与 1.419，DeSync（去同步误差 ↓）0.476 也弱于 FoleyDirector 的 0.423，说明可控性领先而生成质量只是接近。外部检索基准 VividBench 按事件裁段计分，两事件与三事件平均 MCD 分别为 512.6 与 504.8，最差事件分别为 578.0 与 599.0，组内极差分别为 130.7 与 185.6，均低于参与比较的其余四种做法，三事件 DeSync 0.932 为最低，两事件 DeSync 1.006 则不如 FoleyDirector 的 0.945。消融显示把平均池化换成 Audio Q-Former 后 FAD 从 1.009 降到 0.839，BEATs-Cos 从 0.652 升到 0.695。代价方面主模型参数量 761M，小于 MMAudio-L 的 1.03B，训练使用 8 张 40GB GPU，学习率 1×10-5，余弦调度，有效批量 48，共 40 万步微调，推理引导系数 4.5，原文未报告实时率与显存占用。听感部分只用 Gemini2.5-pro 对 100 个案例做四维排序，本文平均名次最好，未提供人工 MOS 与置信区间。

**适用边界与深读导览：** 结论成立的前提是短片段、事件起止时间已知、每个事件能提供一段外部参考，VGGSound-Ref 为 10 s 截断，长视频试验用 8 s 窗拼接成 16 s，50 个视频的人工检索评测不能代表更长更杂的视频。附带的长视频拼接试验只验证氛围一致性，未验证多事件路由在分钟级视频上的稳定性。若想深究机制，可查阅下文对双路注入公式、局部掩码与路由器融合的说明，以及全局氛围替换的因果分析与视频内分组统计。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多事件参考控制配音：任务定义与三重瓶颈

#### 从通用拟音到分段音色指定

视频生成音频已能合成与画面语义和时间大体一致的拟音， MMAudio 一类多模态扩散或流模型在通用拟音质量上表现稳定。然而创作者在实际制作中往往不满足于合理即可，还希望明确指定出现哪些声音事件、各自在何时发生，以及每段声音听起来像哪一种音色。纯文本与全局视频证据擅长回答是否语义相关，却难以刻画音色、材质、录制条件与环境氛围等细粒度声学身份。现有多数系统仍依赖全局文本与视觉证据保证语义对齐，在指定每段声音的音色质感与录制氛围方面能力较弱，这正是多事件场景需要事件级参考的原因。

已有可控视频配音沿两条路线推进。 Video-Foley 与 FoleyDirector 强化事件何时发生的语义与时间控制， MultiSoundGen、SelVA 与 Foley-Flow 等方法扩展多事件生成与选择性合成，但未显式控制每段声音像哪一段参考。 AC-Foley 引入参考音频实现单事件声学迁移， Tri-Ergon、FoleyGenEx 等工作也把音频条件用作全局风格线索。这类全局条件容易把音色、事件语义与时间模式纠缠在一起，难以为同一配乐中的多个事件分配各自独立的声学身份。相比之下，本文任务要求为同一同步配乐内的不同事件指定各自独立的参考，各事件在指定时段内跟随各自参考的声学身份，而非共享同一种全局风格。

#### 任务形式化与三重挑战

为此论文形式化多事件参考条件视频配音，记为 Mr-V2A。输入为视频 \(V\) 、可选文本 \(c\) 与事件级参考集合 \(\mathcal{R}=\{(a^{r}_{k},\tau_{k})\}_{k=1}^{K}\) ，其中 \(a^{r}_{k}\) 为第 \(k\) 个事件的参考音频， \(\tau_{k}\) 为其应在生成配乐中表达的目标时段。模型需输出波形 \(\hat{a}\) ，使其与视觉事件同步，且在每个 \(\tau_{k}\) 内跟随对应参考的声学身份，而非生成通用拟音或简单拼接参考。论文同时提出 VividAudio 应对该设定，其分工是视频内事件变化构造非预言训练对，时间对齐复合参考组织多段条件并经局域与全局双路注入，再用局域注意力与路由器约束事件与参考的对应以减少跨事件干扰。

下面示意可以帮助初学者建立直觉，理解从视频与意图到参考再到生成的对应执行过程。左侧与右侧分别展示单视频内音色切换与多事件并发控制的期望行为，包含输入视频帧、创作者意图时段、外部音色参考频谱与最终生成频谱的对应关系。阅读时可先看顶部视频内容，再看中部彩色时段标签与音色参考频谱，最后对照底部生成频谱是否在对应时段跟随上方参考，从而确认分段声学身份是否实现。

![原论文 Figure 1：VividAudio enables reference-conditioned Foley generation beyond semantic V2A.](/audio-research-portal/images/papers/2611.32458/figure-1-38e5d04e9274e7b7.png)

*论文图 1：多事件参考控制任务示意：同一视觉事件切换音色与多事件各配专属参考（原论文 Figure 1）。*

左侧以鸽子视频为例， 0-4s 期望为 bird singing， 4-8s 期望为 rooster crows，上方两段音色参考频谱形态明显不同，底部生成频谱在前后时段分别呈现稀疏鸣叫与周期性啼叫结构。右侧为乒乓球馆视频， 0-3s 为 table tennis， 3-6s 为 explosion， 6-8s 为 cheering，3 段参考频谱从瞬态敲击过渡到宽带噪声再到谐波人声，底部生成频谱在 3 段彩色括号区间内依次切换纹理，说明目标是在同一音轨内实现分段声学身份控制。2 例共同表明同一视觉事件可被不同范例引导出不同声学身份，而多事件场景则要求不同参考各自控制不同时段，这正是超越语义配音的关键。

该设定带来 3 个具体挑战。第一是数据稀缺，现有数据集很少提供视频、每事件参考与目标音频三元组，若直接把目标事件自身用作参考会形成预言捷径，模型可能复制目标特有信息而非学习声学属性。第二是多音色表示与注入，如何有效编码多段音色并融入生成模型而不破坏与视频的对齐约束，需要在保留时间分辨线索的同时提供片段级声学上下文。第三是音色解耦，多参考联合条件容易把声学属性泄漏到无关事件，导致某事件跟错参考，因此需要时间局部性约束与显式事件到时段路由共同抑制串扰。

### VividAudio 总览：视频内扰动配对与时间对齐复合参考

#### 与最近基线的实质增量与信号规格

VividAudio 以 MMAudio 风格多模态 DiT 为骨干，采用中等规模 MMAudio DiT，保留 CLIP 与 Synchformer 视频特征、文本与视频联合注意力，以及 44 kHz 潜在空间整流匹配与 BigVGAN 波形解码。实质增量集中在三处，一是用视频内事件变化 IntraEvtVar 构造非预言参考目标对，二是把多段参考拼成时间对齐复合参考 TACO-Ref 并经冻结 BEATs 编码后双路注入，三是用局域参考注意力与 TACO-Ref 路由器 TRR 约束事件与参考的对应。与单嵌入示例基线相比，参考不再是全局向量而是保留时序的特征序列，局域支路保留时间分辨的事件线索，全局支路经音频查询模块汇总为片段级声学上下文。

信号规格在原文中交代明确。生成侧工作在 44 kHz 音频自编码器潜在空间，视频对齐特征来自 CLIP 与 Synchformer，音频解码由 BigVGAN 完成。参考侧把 TACO-Ref 重采样至 16 kHz，用冻结 BEATs 抽取 768 维时间索引特征序列。 Audio Q-Former 取 \(N_{q}=32\) 个可学习查询与 \(L=8\) 层，局域窗口训练取 \(w=50\) 帧约对应正负 0.5s， VividBench 最终配置推理取 \(w=15\) 以增强隔离。训练用 8 张 40 GB GPU，学习率 \(1\times10^{-5}\) 加余弦调度，有效批量 48，共 \(4\times10^{5}\) 步 SFT，推理指导尺度 \(s=4.5\) ，全部实验采用 42、43、44、666 与 888 共 5 个随机种子以保证可比性。

#### 1 秒样本的端到端张量流与流匹配目标

以 1 秒输入为例追踪张量流。 1 秒 44 kHz 波形经 VAE 编码为低帧率音频潜变量 \(\mathbf{h}_{a}\) ，视频帧经 CLIP 与 Synchformer 得到语义与同步特征。同一 1 秒时长上先建与目标音频相同时长的静音画布，把该秒内各事件扰动后参考按目标时段粘贴为 TACO-Ref，若某事件被采样为空则对应槽位保持静音并提供零音色条件，再经 BEATs 得到 \(\mathbf{R}\in\mathbb{R}^{T_{r}\times768}\) 。局域支路把 \(\mathbf{R}\) 投影为键值，与音频潜变量查询做时间保持的参考注意力，全局支路把完整 \(\mathbf{R}\) 经 Q-Former 聚合成 32 个向量后均值池化，经投影加入视频文本池化条件并经自适应归一化调制同一 DiT。事件发现阶段先用 RMS 能量检测去除长时间静音或低能量区并切分候选事件，再由 Qwen2.5-Omni 给出声音类别、细粒度描述与置信度并丢弃低置信度事件。

生成模型用整流匹配在潜在空间学习从噪声到数据的速度场。设 \(\mathbf{x}_{0}\) 为噪声， \(\mathbf{x}_{1}\) 为数据潜变量， \(t\) 为插值时刻， \(\mathbf{c}\) 汇总视频、文本与参考条件，网络 \(v_{\theta}\) 预测位移 \(\mathbf{x}_{1}-\mathbf{x}_{0}\) ，梯度经该误差回传以偏置同一条去噪轨迹。中间潜变量满足线性插值 \(\mathbf{x}_{t}=(1-t)\mathbf{x}_{0}+t\mathbf{x}_{1}\) ，其中 \(t\in[0,1]\) ，训练目标是对所有时刻求期望的均方误差，推理时从噪声出发沿学到的速度场积分生成潜变量。

\[\mathcal{L}_{\text{FM}}(\theta)=\mathbb{E}_{\mathbf{x}_{0},\mathbf{x}_{1},t}\big[\lVert v_{\theta}(\mathbf{x}_{t},t,\mathbf{c})-(\mathbf{x}_{1}-\mathbf{x}_{0})\rVert_{2}^{2}\big],\]

该形式把扩散去噪改写为沿直线插值的速度回归，物理直觉是每个中间潜变量都应指向最终音频的方向。关键项为均方误差对所有 \(t\) 求期望， \(t\) 接近 0 时模型主要学习粗结构，接近 1 时细化声学纹理。若条件缺少事件身份，速度场只能指向通用拟音，加入 TACO-Ref 后则在每个时段被拉向指定音色。输出的速度直接用于推理积分，从噪声逐步生成潜变量再经 BigVGAN 解码为波形，而视频与文本条件提供语义与时间对齐依据，参考条件则偏置同一条轨迹的声学走向。

整体流程可对照总览图理解。建议先沿输入到 TACO-Ref 再到 DiT 的主路径阅读，区分上半部分数据构造与下半部分条件注入，再比较局域条件与全局条件在何处汇入，最后看右侧解耦模块如何约束跨事件交互。组替换在同视频 CLAP-HTSAT 嵌入空间用 K-Means 按肘部法则聚类并采样同组非自身事件，变速因子取自 0.7、0.8、1.2 与 1.5，混合按 [-5,15] dB 信噪比加入同批次无关波形，退化用加性噪声、低通滤波或短混响模拟不完美录制条件。

[![原论文 Figure 2：Overview. We first discover audio events within each video and explore four modes to construct…](https://arxiv.org/html/2611.32458v1/Overview_v2.png)](https://arxiv.org/html/2611.32458v1/Overview_v2.png)

*论文图 2：方法总览：视频内事件变化构造配对与双路注入及多音色解耦（原论文 Figure 2）。*

上半 A 区显示 RMS 能量检测加 Qwen2.5-Omni 发现 Wind、bird 与 Dog bark 等事件，经组替换、变速、混合与退化 4 种扰动组成彩色 TACO-Ref，再经 BEATs 编码分出紫色局域条件与蓝色全局条件，分别经投影与 Q-Former 得到。下半 B 区显示噪声潜变量与视频文本特征经基础联合注意力后，再经门控局域参考注意力预测速度，全局池化条件经自适应归一化调制同一主干。右侧 C 区用对角紫色掩码表示窗口内可访问，把多组键值按时隙路由合成为最终速度，虚线箭头标示条件与全局路径，从而实现事件专属音色与共享背景质感的分工控制。

### 双路注入与解耦：局域时间保持、全局上下文与事件路由

#### 时间分辨局域注入与池化全局注入

局域支路保留时间分辨率，为每个音频潜变量提供事件专属线索，该支路位于原始潜变量视频文本联合注意力之后并以参考注意力形式注入。全局支路把完整复合参考聚合成片段级声学上下文，控制背景质感与整体频谱特性而不决定每个时隙选择哪一种音色。这种分工使细粒度音色控制与片段级氛围控制解耦，推理时可分别干预而不重训，局域交换改变事件级身份而全局替换主要改变共享背景氛围。

局域注入先把音频潜变量投影为查询，把复合参考特征投影为键值，在缩放点积后做 softmax 加权，目标是让同一时刻的潜变量能读到对应时段的参考帧。其中 \(\mathbf{Q}_{a}\) 来自音频潜变量， \(\mathbf{K}_{r}\) 与 \(\mathbf{V}_{r}\) 来自 TACO-Ref 特征， \(d\) 为缩放维度。参考画布与目标音频时间线对齐，因此音频潜变量区域的查询可自然关注同一目标时刻附近的参考帧，为后续局域掩码与路由器按时间索引找到对应事件槽奠定基础。

\[\begin{aligned} \displaystyle\mathbf{A}_{\mathrm{ref}} \displaystyle=\operatorname{softmax}\!\left(\frac{\mathbf{Q}_{a}\mathbf{K}_{r}^{\mathsf{T}}}{\sqrt{d}}\right)\mathbf{V}_{r}, \\ \displaystyle(\mathbf{K}_{r},\mathbf{V}_{r}) \displaystyle=\operatorname{Proj}_{kv}(\mathbf{R}). \end{aligned}\]

该注意力沿用标准缩放点积形式，除以维度开方是为稳定梯度。若某查询与某参考帧内容相似，得分高则聚合更多该帧音色。若全局无掩码，每个查询都能看到全部参考帧，远处无关事件也会混入，这是后续需要局域化的原因。输出为事件相关响应的加权和，下一步经门控残差加入主分支，直接偏置该时刻的速度预测，同时保留原有时序位置以支持按槽路由。

参考响应以零初始化门控残差加入音频潜变量， \(\gamma_{\mathrm{ref}}\) 初值为零， \(\mathbf{W}_{o}\) 为输出投影，目的是训练初期不扰动预训练 DiT 的原始行为，再逐步学会利用参考。

\[\mathbf{h}_{a}^{\prime}=\mathbf{h}_{a}+\gamma_{\mathrm{ref}}\mathbf{A}_{\mathrm{ref}}\mathbf{W}_{o},\]

零初始化的物理意义是渐进式适配，极端取门控为零时模型退化为原始视频配音，取较大值时参考主导生成。若门控过大，与视频的对齐约束可能被淹没，出现画面与声音错位，因此需要与视频文本条件保持平衡。更新后的潜变量保留原有时序位置，后续局域掩码与路由器仍能按时间索引找到对应事件槽，训练初期则几乎完全沿用预训练主干的行为。

全局支路用 32 个可学习查询对完整特征做 8 层 Q-Former 聚合，得到查询矩阵后在查询维平均为单一向量，再经投影加到视频文本池化条件上。该向量经 DiT 自适应归一化层注入，不保留事件槽身份，只调制整体录制质感与背景氛围。均值池化与 Q-Former 的对比表明，简单均值只能改善分布距离而 Q-Former 同时提升质量与控制性，完整消融中双路 Q-Former 达到 FADVGG 0.839 与 BEATs-Cos 0.695 的最好折中。

#### 局域窗口与路由器如何抑制串扰

多音色共存时无约束注意力会跨事件边界泄漏属性。局域注意力为每个位置只开放正负 \(w\) 帧内的键值，用加性掩码在 softmax 前屏蔽远处帧，目标是把参考条件的作用范围约束在对应音频区域附近。掩码取零时正常参与，取负无穷时权重归零，掩码在 softmax 前施加使不可达位置归一化后概率为零而窗口内仍可微。

\[\mathbf{A}_{\mathrm{loc}}=\operatorname{softmax}\!\left(\frac{\mathbf{Q}_{a}\mathbf{K}_{r}^{\mathsf{T}}}{\sqrt{d}}+\mathbf{M}\right)\mathbf{V}_{r}.\]

掩码的直觉是时间局部性，窗口内可正常参与 softmax，之外权重归零。训练取 \(w=50\) 约正负 0.5s，推理可不重训直接调小至 15 以增强隔离，调大则引入更多上下文。极端窗口趋零时每个查询几乎只看自身时刻，隔离最强但可能丢失音色连续性，窗口趋无穷则退化为全局注意力，串扰重现。输出仍为可微加权和，梯度只在窗口内流动，因此远处无关事件不再通过梯度干扰本事件的音色学习。

固定窗口仍可能包含并发或相邻事件， TRR 进一步显式路由。每个事件单独构建只含自身参考的画布并编码为 \(\mathbf{R}_{k}\) ，算出事件专属响应，再按投影到潜变量网格的软时隙掩码加权融合，边界处软过渡避免跳变。掩码在事件边界附近取软值以允许相邻槽平滑插值，而非硬性截断，从而兼顾归属明确性与过渡自然性。

\[\mathbf{A}_{\mathrm{TRR}}(t)=\sum_{k=1}^{K}\mathbf{m}^{a}_{k}(t)\mathbf{A}_{k}(t).\]

该求和的物理意义是软性事件到槽位偏置，每个时刻主要采用对应事件的响应，相邻槽边界可平滑插值。若某事件参考为空，其槽位保持静音并提供零音色条件，模型学会部分无参考仍能生成。极端单事件时求和退化为单一响应，多事件时若掩码重叠过大仍可能轻微泄漏，但相比全局注意力已大幅降低。与局域注意力叠加后，前者提供帧级局部性，后者提供事件级归属，二者共同减少跨事件属性泄漏，通路分析也证实局域交换决定每槽选择哪种音色。

### VGGSound-Ref 与 VividBench 主结果：在可比接口下控制性提升与质量权衡

#### 评测协议与公平性核查

训练用 VGGSound、AudioCaps 与内部长视频语料，均经事件发现转为参考目标对。评测分两套， VGGSound-Ref 取自 VGGSound 留出测试集，用同视频内非重叠事件段作参考，避免直接用目标自身作预言，同时报告生成质量与参考跟随指标。 VividBench 手工标注 50 个视频的事件类别与时段，每事件从 Freesound 检索外部参考，事件级计算声学指标。质量侧用 FADVGG、KLPANNs、ISPaSST、IB-Score 与 Desync，控制侧用 BEATs-Cos、CLAP-Cos、LSD 与 MCD，前两者越高越好，后两者越低越好。所有实验用 5 个随机种子报告均值与波动，未做人工主观听测，仅依赖神经代理指标与 MLLM 偏好排序。

主对比在留出分布下比较多种方法，含 MMAudio 大小版本、HunyuanVideo-Foley、ThinkSound、PrismAudio、FoleyDirector 与 AC-Foley 3 种参考构造。 AC-Foley 原设计为单参考， Tail 取每段真值最后 2s 作默认条件， Random 随机选一段事件参考， Comp 按时序拼接全部参考， VividAudio 参数量为 761M。

| Model | #Params | Quality / Semantic FADVGG ↓ | Quality / Semantic KLPANNs ↓ | Quality / Semantic ISPaSST ↑ | Quality / Semantic IB-Score ↑ | Quality / Semantic Desync ↓ | Controllability (vs. reference) BEATs-Cos ↑ | Controllability (vs. reference) CLAP-Cos ↑ | Controllability (vs. reference) LSD ↓ | Controllability (vs. reference) MCD ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MMAudio-L | 1.03B | 2.016 ± 0.081 | 2.087 ± 0.015 | 11.70¯± 0.09 | 0.3468 ± 0.0009 | 0.427¯± 0.012 | 0.6254 ± 0.0017 | 0.5320 ± 0.0013 | 20.06 ± 0.09 | 592.8 ± 2.7 |
| MMAudio-M | 621M | 0.911 ± 0.072 | 2.082 ± 0.018 | 10.03 ± 0.07 | 0.3199¯± 0.0022 | 0.428 ± 0.005 | 0.6207 ± 0.0006 | 0.5213 ± 0.0017 | 20.91 ± 0.21 | 610.8 ± 3.1 |
| HunyuanVideo-Foley | 5.13B | 2.485 ± 0.098 | 2.562 ± 0.025 | 6.69 ± 0.06 | 0.3047 ± 0.0012 | 0.556 ± 0.004 | 0.6192 ± 0.0011 | 0.5150 ± 0.0013 | 21.11 ± 0.10 | 611.4 ± 2.9 |
| ThinkSound | 1.28B | 2.424 ± 0.087 | 2.410 ± 0.018 | 8.67 ± 0.06 | 0.2433 ± 0.0018 | 0.670 ± 0.009 | 0.6078 ± 0.0007 | 0.4966 ± 0.0023 | 24.15 ± 0.14 | 641.3 ± 5.3 |
| PrismAudio | 674M | 1.714 ± 0.035 | 2.527 ± 0.022 | 6.82 ± 0.08 | 0.2429 ± 0.0006 | 1.117 ± 0.006 | 0.6055 ± 0.0008 | 0.4945 ± 0.0016 | 21.25 ± 0.16 | 597.0 ± 1.6 |
| FoleyDirector | 681M | 0.866 ± 0.069 | 2.071 ± 0.015 | 13.75 ± 0.28 | 0.3124 ± 0.0017 | 0.423 ± 0.005 | 0.6221 ± 0.0007 | 0.5180 ± 0.0029 | 21.05 ± 0.56 | 606.5 ± 3.9 |
| AC-Foley (Random) | 1.08B | 4.657 ± 1.753 | 1.772 ± 0.104 | 8.75 ± 0.30 | 0.2551 ± 0.0165 | 0.764 ± 0.047 | 0.6240 ± 0.0140 | 0.4741 ± 0.0323 | 26.68 ± 2.43 | 519.4 ± 22.0 |
| AC-Foley (Comp.) | 1.08B | 5.746 ± 1.568 | 2.273 ± 0.077 | 8.55 ± 0.40 | 0.2331 ± 0.0096 | 0.737 ± 0.016 | 0.6011 ± 0.0083 | 0.4560 ± 0.0225 | 27.57 ± 1.72 | 597.4 ± 13.9 |
| AC-Foley (Tail.) | 1.08B | 0.701 ± 0.047 | 1.419 ± 0.019 | 7.88 ± 0.15 | 0.3020 ± 0.0017 | 0.545 ± 0.009 | 0.6637¯± 0.0013 | 0.5767¯± 0.0023 | 17.93¯± 0.24 | 475.3¯± 2.6 |
| VividAudio (Ours) | 761M | 0.839¯± 0.026 | 1.618¯± 0.018 | 10.66 ± 0.19 | 0.2964 ± 0.0014 | 0.476 ± 0.009 | 0.6947 ± 0.0008 | 0.6286 ± 0.0013 | 16.92 ± 0.04 | 460.2 ± 1.6 |

该表右侧控制性四项由 VividAudio 同时取得最优， BEATs-Cos 为 0.6947， CLAP-Cos 为 0.6286， LSD 为 16.92， MCD 为 460.2，同列逐格核对均高于或低于其余基线。左侧质量侧则未包揽最优， FADVGG 为 0.839， KLPANNs 为 1.618，均次于 AC-Foley Tail 的 0.701 与 1.419， ISPaSST 为 10.66 次于 FoleyDirector 的 13.75， IB-Score 为 0.2964 次于 MMAudio-L 的 0.3468， Desync 为 0.476 次于 FoleyDirector 的 0.423。 AC-Foley 仅在 Tail 默认设置下相对均衡， Random 与 Comp 设置质量显著退化，说明其难以泛化到事件级多音色控制。由于全表依赖神经代理指标且缺少听测，控制性提升是否完全对应人耳感知的音色相似仍需验证。

#### 多事件组合下的事件级控制与同步

VividBench 分两事件与三事件组合报告事件级 MCD 与同步。 Avg 为每案例内事件 MCD 均值， Worst 为每案例最差事件均值， Gap 为同案例内极差， DS 为整片段 Desync。基线含 Video-Foley、FoleyDirector、AC-Foley 单参考与复合参考，真值音频不可用故无 Tail 设置。

| Model | 2-event Avg ↓ | 2-event Worst ↓ | 2-event Gap ↓ | 2-event DS ↓ | 3-event Avg ↓ | 3-event Worst ↓ | 3-event Gap ↓ | 3-event DS ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V-Foley | 672.6 | 779.8 | 214.6 | 1.320 | 718.1 | 884.7 | 336.6 | 1.252 |
| FoleyDir. | 706.1 | 799.6 | 187.0 | 0.945 | 759.2 | 916.2 | 303.9 | 0.940 |
| AC-Foley-S | 544.6 | 712.3 | 335.4 | 1.021 | 640.1 | 867.3 | 463.7 | 1.010 |
| AC-Foley-C | 608.8 | 733.2 | 248.9 | 1.008 | 654.7 | 883.2 | 478.1 | 1.038 |
| Ours | 512.6 | 578.0 | 130.7 | 1.006 | 504.8 | 599.0 | 185.6 | 0.932 |

两事件与三事件 Avg 分别为 512.6 与 504.8， Worst 为 578.0 与 599.0， Gap 为 130.7 与 185.6，均在同列 5 种方法中最低，表明优势随声学身份增多而扩大且不集中于简单事件。同步方面三事件 DS 为 0.932 最优，两事件 DS 为 1.006 次于 FoleyDirector 的 0.945。 AC-Foley 单参考与复合参考 Gap 高达 335.4 与 463.7 以上，说明单向量难以承载多事件音色。需注意 MCD 经 DTW 对齐 MFCC 计算，对时长与节奏敏感，仍属代理指标，定性对比显示 VividAudio 更少出现跨事件干扰，但未覆盖长视频与重叠事件的系统评测。

### 消融与因果通路：双路、窗口与路由器各自贡献

#### 双路与 Q-Former 容量

双路消融在留出分布上比较 4 种组合， Exp ① 仅局域， Exp ② 仅全局 Q-Former， Exp ③ 局域加均值池化， Exp ④ 局域加 Q-Former。指标看 FADVGG 越低越好， KL 越低越好， BEATs-Cos 越高越好，以分离时间分辨线索与片段级上下文各自作用。

| Exp | Local | Global | FADVGG ↓ | KL ↓ | BEATs-Cos ↑ |
| --- | --- | --- | --- | --- | --- |
| ① | ✓ | – | 0.977 | 1.98 | 0.652 |
| ② | – | q-former | 1.614 | 2.14 | 0.669 |
| ③ | ✓ | mean | 1.009 | 1.91 | 0.652 |
| ④ | ✓ | q-former | 0.839 | 1.62 | 0.695 |

Exp ④ 取得三项最优， FADVGG 为 0.839， KL 为 1.62， BEATs-Cos 为 0.695。仅全局的 Exp ② 虽 BEATs-Cos 达 0.669，但 FADVGG 恶化至 1.614，说明缺失时间分辨线索时质量损失明显。 Exp ③ 把 Q-Former 换成均值池化后 KL 从 1.98 降至 1.91， FADVGG 为 1.009，控制性停留在 0.652，表明简单池化可改善分布距离但不足以提升细粒度跟随。

Q-Former 容量对比测试查询数与层数 4 档组合，含 16 与 4、32 与 4、32 与 8、64 与 8，指标同为 FADVGG、KLPANNs 越低越好与 BEATs-Cos 越高越好，用以判断适度查询预算与深度是否已足够概括复合参考。

| (Nq,L) | FADVGG ↓ | KLPANNs ↓ | BEATs-Cos ↑ |
| --- | --- | --- | --- |
| (16,4) | 1.017 | 1.773 | 0.676 |
| (32,4) | 0.933 | 1.727 | 0.681 |
| (32,8) (selected) | 0.839 | 1.618 | 0.695 |
| (64,8) | 0.912 | 1.749 | 0.705 |

32 与 8 组合取得总体最优， FADVGG 为 0.839， KLPANNs 为 1.618， BEATs-Cos 为 0.695。 32 与 4 已优于 16 与 4，说明适度增加查询数有益。 64 与 8 的 BEATs-Cos 升至 0.705，但另两项分别退至 0.912 与 1.749，表明单纯扩大全局分支不如保持适度查询加足够深度，过度池化反而稀释事件信息。

#### 局域窗口与路由器及通路角色

三事件消融柱状图可直观比较是否使用局域窗口、窗口取 50 还是 15，以及是否叠加 TRR。建议先看 MCD 越低越好与 CLAP-Cos、BEATs-Cos 越高越好的变化幅度，再看 Desync 是否保持稳定，以判断提升是否以牺牲同步为代价。

[![原论文 Figure 3：VividBench three-event ablation of localized reference attention and the TACO-Ref Router (TRR).](https://arxiv.org/html/2611.32458v1/fig_abl_attn_3event_metrics.png)](https://arxiv.org/html/2611.32458v1/fig_abl_attn_3event_metrics.png)

*论文图 3：三事件消融：局域窗口与路由器对距离相似度与同步的影响（原论文 Figure 3）。*

4 组柱状显示，无局域时 MCD 高达 695.8， CLAP-Cos 仅 0.330， BEATs-Cos 仅 0.538，为最差起点。加入窗口后 MCD 降至 617.0 与 621.2， CLAP-Cos 微升至 0.330 与 0.334， BEATs-Cos 升至 0.547 与 0.550，说明局域化是主要来源而推理窗口微调增益有限。叠加 TRR 后 MCD 进一步降至 513.7 与 504.8， CLAP-Cos 跃升至 0.387 与 0.401， BEATs-Cos 升至 0.604 与 0.610，而 Desync 稳定在 0.918 至 0.934 之间，未明显损伤音视频对齐。

因果通路分析通过循环重排与氛围替换区分局域定身份、全局定氛围的分工。左侧 4 张热图报告每生成槽最近参考事件比例，右侧条形报告注入风雨海氛围后向氛围偏移与局域亲和损失，阅读时先看对角是否移动再看偏移量级。

[![原论文 Figure 5：Causal pathway analysis on the VividBench three-event split.](https://arxiv.org/html/2611.32458v1/fig_pathway_roles.png)](https://arxiv.org/html/2611.32458v1/fig_pathway_roles.png)

*论文图 5：因果通路分析：局域决定事件身份而全局调制背景氛围（原论文 Figure 5）。*

左侧基线热图对角高达 92%、80% 与 78%，仅交换全局条件时对角几乎不变，仍为 92%、78% 与 80%，说明全局不决定选择哪一种音色。交换局域或双路后最近参考转至循环非对角，呈现 B、C、A 的循环结构。右侧固定局域仅换全局氛围时，向氛围偏移分别为 Wind 0.156、Rain 0.189 与 Ocean 0.093，跟随率达 100%、100% 与 98%，而局域亲和损失仅 0.048、0.087 与 0.041，误差条为自助法 95% 置信区间，表明全局控制背景质感而不覆盖事件归属。

视频内变化消融显示，组替换与变速在基本保留质量分布下提升音色一致性，混合与退化带来更大一致性增益但伴随可察觉的质量下降，随机丢空部分事件参考有助于保留原始质量与语义分布。组合配方在质量与一致性间取得较好平衡，而混入过多混合或退化则分布距离与语义分数退化，说明参考多样性需与保真度权衡，该部分未提供人工听测且未系统评估长尾罕见音色的覆盖。

### 假设边界、复现核对与工程选型建议

方法假设同一视频内事件共享录制环境，因而同视频非重叠段可作声学相关但非相同的参考，该假设在跨视频检索或强混响差异下可能弱化。评测集中于 8 秒左右片段与两到三事件组合， VividBench 仅 50 个视频，长视频、多于三事件与高度重叠事件未系统覆盖。局域窗口与软掩码在边界处允许平滑过渡，对完全同时发声的事件仍可能残留轻微泄漏。

复现核对需区分三件事。训练数据为 VGGSound 181,516 条、AudioCaps 89,269 条与内部 248,848 条，覆盖率分别为 82.4%、81.1% 与 69.2%，事件经 RMS 加 Qwen2.5-Omni 标注并经 CLAP 聚类分组。计算为 8 张 40 GB GPU 上 400,000 步 SFT，优化器与调度按学习率与批量如上。原文未披露可验证的代码、权重、数据或演示页链接，资源状态为 NONE，不能视为已开源，附录给出数据管线、容量对比、长视频氛围一致性与偏好排序细节，可作核对起点。

工程选型上，若任务为单视频多段各需指定音色且有外部示例，时间对齐画布与路由值得尝试，复现第一步可先在留出协议下跑通事件发现与复合参考构建，再接冻结 BEATs 与中小 DiT 双路注入。若只有全局风格需求，简单单参考或文本条件可能更轻量。部署前需补做人耳 ABX 或 MOS 验证神经代理与感知的背离，测试推理窗口在 15 至 50 间的隔离与连续性权衡，并评估 16 kHz 参考编码与 44 kHz 生成在高频细节上的损失。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：生成侧 44 kHz 音频自编码器潜在空间，BigVGAN 解码；参考侧 TACO-Ref 重采样至 16 kHz，冻结 BEATs 抽取 768 维帧特征；局域窗口训练 w=50 约正负 0.5s，VividBench 推理 w=15；推理指导尺度 s=4.5；RTF 与延迟原文未披露
- **训练与评测数据**：VGGSound 181,516 条、AudioCaps 89,269 条与内部语料 248,848 条，均经 RMS 能量检测加 Qwen2.5-Omni 标注事件；VGGSound-Ref 取自留出测试集同视频非重叠段作参考；VividBench 手工标注 50 个视频两到三事件并从 Freesound 检索外部参考
- **算力与训练耗时**：8 张 40 GB GPU，学习率 1×10-5 加余弦调度，有效批量 48，共 4×105 步 SFT；推理硬件原文未单独披露
- **核心超参数与配置**：骨干为中等规模 MMAudio DiT，761M 参数；Audio Q-Former Nq=32，L=8；局域窗口训练 w=50，推理 w=15；参考门控零初始化；指导尺度 s=4.5；随机种子 42、43、44、666 与 888
- **推理速度与部署开销**：推理指导尺度 s=4.5，参数量 761M；RTF、延迟、吞吐与显存原文未披露
- **开源产物与协议状态**：原文未提供可验证的代码、权重、数据或演示页链接，资源状态为 NONE，不能视为已公开；附录仅描述数据管线与评测协议
- **附录与补充材料要点**：附录详述语料切分与事件标注模式、CLAP 聚类分组统计、TACO-Ref 构造与扰动细节、Q-Former 容量对比、事件级指标计算、长视频氛围一致性与 MLLM 偏好排序方法

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.32458v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：时间对齐复合参考保留多事件时隙归属，局部全局双路分别控制事件音色与片段氛围，路由器显式抑制跨事件串扰机制完整可核验。

- 核心优势：VGGSound-Ref四项参考跟随指标领先且超越种子波动，VividBench两三事件平均最差与极差均为同表最低且三事件同步最优。

- 核心优势：训练配置与评测口径披露详尽，含五随机种子波动、Q-Former尺寸与双路注入直接消融及配对检验置信区间。

- 主要短板：听感验证仅用Gemini2.5-pro对100案例四维排序，未提供人工MOS听众数样本量置信区间与盲测协议，代理排序与人类感知背离无法判断。

- 主要短板：原文未报告实时率RTF与显存占用，长视频仅55视频两段8s拼接16s验证氛围相似度，未验证多事件路由分钟级稳定性，部署边界不明。

- 主要短板：VividBench仅50视频人工选定主题样本偏小，FAD0.839与KLPANNs1.618及DeSync0.476均弱于最强基线，通用质量代价与小样本泛化存疑。

---

[← 返回 2026-11-25 语音/音乐/音频论文速递](/audio-research-portal/posts/2026-11-25/)
