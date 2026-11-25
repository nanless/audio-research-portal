---
title: "StudioBench: Benchmarking Agentic Multimodal Large Language Models for Productive Audiovisual Creation"
date: 2026-11-24
draft: false
tags: [音视频生成, 基准设计, 基准测试]
categories: [论文速递]
description: "StudioBench 以 160 项任务与 33 个原子工具检验通用模型从简报到成片的自主制作，发现显式需求接近饱和而工艺差距显著，最高 92.2 分伴随保留率越低分数越高的筛选效应，代价是数美元费用与数十分钟耗时及缺失的检查修订闭环。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.28902"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "通用多模态大模型能否自主导演数分钟声画作品"
paper_digest_original_title: "StudioBench: Benchmarking Agentic Multimodal Large Language Models for Productive Audiovisual Creation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.28902v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.28902v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.28902v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "StudioBench 以 160 项任务与 33 个原子工具检验通用模型从简报到成片的自主制作，发现显式需求接近饱和而工艺差距显著，最高 92.2 分伴随保留率越低分数越高的筛选效应，代价是数美元费用与数十分钟耗时及缺失的检查修订闭环。"
paper_digest_reader_sections: [{"heading":"从数秒片段到数分钟成片：通用模型自主导演的评估缺口","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"160 项任务与双轨评估：成片打分与工作流图谱如何分工","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"33 个原子工具与 13 项整片指标：评分只看成片，图谱只做归因","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"显式需求接近饱和而工艺拉开差距：四档排名与成本前沿","index":4,"kind":"result","roleLabel":"主实验验证"},{"heading":"缺失的质量闭环：状态、核验与按效果修订的失效","index":5,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"结论成立的前提与代价：何时值得复用这套制作与评估管线","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["University of Chinese Academy of Sciences"],"name":"Xinglong Xu"},{"affiliations":["Peking University"],"name":"Yuxia Zhu"},{"affiliations":["Tencent"],"name":"Siyuan Li"},{"affiliations":["Qilu University of Technology"],"name":"Lixu Tian"},{"affiliations":["Qilu University of Technology"],"name":"Xiaofei Zhao"},{"affiliations":["Tencent"],"name":"Yuxin Liu"},{"affiliations":["Tencent"],"name":"Caijun Jia"},{"affiliations":["Zhejiang University"],"name":"Jintao Chen"},{"affiliations":["University of Chinese Academy of Sciences"],"name":"Bihui Yu"},{"affiliations":["Tencent"],"name":"Alden Cai"},{"affiliations":["Tencent"],"name":"Asher Qin"},{"affiliations":["Qilu University of Technology"],"name":"Jingxuan Wei"},{"affiliations":["Tencent"],"name":"Cheng Tan"}]
paper_digest_abstract_sha256: "03587da929e782a41c0079e4563bba3046b27d7aac05faa7597d13ad1361ba81"
paper_digest_sidecars: {"citation.bib":{"sha256":"7cc8abae7748160b450d51214ea99a2d37cefef554a81b2276dfc862042657b4","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28902/citation.bib"},"citation.json":{"sha256":"c76225df3458d4804e1eba2a2b26c9c6295f736b7f8de690add45bc6c8718140","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28902/citation.json"},"citation.ris":{"sha256":"926f9f740a44bf4cda4b070f7c69c0afcf47b3e7ad398b80cd3a8ce24f4247db","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28902/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3796301d110214ef28b3d7d91cee04467332d415002c7625629eb817081ccd9b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-28902/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "be522eadea6ccc9699d9454a8ff519fab151674d6f2ddde470bf1939149c4485"
paper_digest_api_reader_plan_sha256: "53bf32e0f60aa7156ccc63ae2ab3668682ecfc746689a9d8c6d6a0ba3a9f355a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "3135a8e05678c2753e7e7ba1df0ad8fb75c9bc9ffdb996ca42e692d450c12fe3"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0c263fcd083aa84e70f19ae8282cebca1b827bdd61010520da54342c5466f7ad"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "4c0374ae94b1367eede8242932e8613255f971b280a331a40ba2a49ffca51555"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a8425c15f5940bc13fa888d527922db8f4475f8c390234f014b659e12f06f849"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 通用多模态大模型能否自主导演数分钟声画作品

> 英文题目：*[StudioBench: Benchmarking Agentic Multimodal Large Language Models for Productive Audiovisual Creation](https://arxiv.org/abs/2611.28902v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.3/10** | 创新 8.3/10 | 技术严谨 7.4/10 | 实验充分 8.4/10 | 清晰度 7.0/10 | 影响力 7.7/10 | 开源 6.0/10 | 可复现 8.1/10 | 工程/实践 7.9/10


## 👥 作者与机构

- Xinglong Xu：University of Chinese Academy of Sciences
- Yuxia Zhu：Peking University
- Siyuan Li：Tencent
- Lixu Tian：Qilu University of Technology
- Xiaofei Zhao：Qilu University of Technology
- Yuxin Liu：Tencent
- Caijun Jia：Tencent
- Jintao Chen：Zhejiang University
- Bihui Yu：University of Chinese Academy of Sciences
- Alden Cai：Tencent
- Asher Qin：Tencent
- Jingxuan Wei：Qilu University of Technology
- Cheng Tan：Tencent

## 📌 核心摘要

**问题与瓶颈：** 现有视频生成器能渲染数秒的逼真片段，但面向真实观众的完整作品需要数分钟的连贯影像、旁白与对白、音乐与音效以及剪辑包装，并保持跨镜头的角色、叙事与声画同步。已有评测多停留在单个生成器的片段质量，或依赖预设流程、固定编排技能与代码渲染的视频智能体，无法检验通用模型在没有流程模板时自主规划、生成、检查与修订的能力。更关键的是，成片缺陷常常不触发工具报错，只确认文件存在而不再听看结果，就会漏掉可感知的瑕疵，而缺少可复用的生产记录也难以把质量归因到具体的状态保持与取舍决策。

**核心思路与方法架构：** 与预设流程或代码渲染基线相比，增量是把模型置于只有最小功能调用单元的导演位置并固定渲染后端，从而剥离渲染能力差异，只考查指挥能力。具体样本如教育任务 EDU-OPN-045 要求制作 120 秒至 180 秒、 16:9 的儿童动画短片，模型只能看到包含简介、时长窗与宽高比的用户消息，以及 33 个原子工具的操作说明与预算限制，不接触评分清单与源片。模型不做训练直接推理，先用文本到图像制作角色表与关键帧，再经由文本到视频、首帧到视频或参考条件视频生成每段 5 秒或 8 秒的片段，同时调用语音合成、音乐生成、音效生成与口型同步补齐声音，必要时用网页、三维或 Blender 渲染无声动画并配乐。随后剪辑、混音、检查与导出串起多阶段流水线，所有文件读写关系被原样记录为工作流图，成片则由独立裁判按 73 项缺陷检查映射为 13 项整片指标，图只用于归因而不参与打分。这套安排直指根因，因为固定后端与最小环境迫使质量差异只能来自规划、取舍与感知检验，而缺陷检查与程序化测量共同捕捉无报错的感知失效。

**关键实验与核心代价：** 在 160 个任务上对 7 个模型各运行一次共 1,120 次运行，其中 1,063 次交付成片并按全部 160 个任务平均计分，未交付按 0 分处理。在 116 个有人评任务的裁判评分上，最强模型 Claude Opus 5.5 的 ACC 为 92.8，次强可比基线 Gemini 4 Argon 的 ACC 为 91.4，前者高于后者。平均成片满足 98.1% 的清单条目且 81% 的成片满足全部条目，但画面清晰度与构图、身体与物体结构、运动、背景声、跨镜头一致性与口型同步拉开至少 14 分的模型间差距。成本上 Gemini 以中位每任务调用成本 2.86 美元接近 Claude 的 8.80 美元，而 Doubao 以 0.75 美元达到 86.9 分，四者与 GPT-6 同处帕累托前沿。自动裁判在 116 个有人评任务上与三人平均分在模型层面达到 Pearson r = 0.997 并对 21 对模型排序完全一致。代价方面，中位工作流图含 121 个节点、 131 条边与 9 步依赖深度，中位耗时 47 分钟至 125 分钟，输入 Token 从 0.51M 至 6.39M 不等；同一模型内工具调用数与质量仅弱相关，保留的生产节点占比与质量在模型间负相关而深度与质量正相关。

**适用边界与深读导览：** 结论成立的前提是 1 分钟至 3 分钟的成品时长、以 16:9 为主的画幅、固定的 MiniMax-H3 视频后端与既定工具链，以及基于阈值校准的自动裁判与有限人类验证。尚未覆盖更长时长、交互式修改、多轮用户反馈与影院级分辨率下的部署表现，阈值调优所用的 27 个开发任务仍被纳入 116 个验证任务，存在部分重叠。读者若想深究缺陷到等级的映射、按体裁加权的聚合与成对归因的实现，可查阅下文工具与评分流程、按体裁与误差模式的对比，以及复现配置与人类验证的细节。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/openraiser/StudioBench> — 链接可访问（HTTP 200）；README 已验证包含安装文档（未见推理、微调文档）；许可证：Apache-2.0

- 论文所列链接：<https://openraiser.github.io/StudioBench/> — 链接可访问（HTTP 200）

- 论文所列链接：<https://openraiser.github.io/StudioBench/_canvas/index.html/> — 链接不可用（HTTP 404）

- 论文所列链接：<https://github.com/openraiser/StudioFlow> — 链接不可用（HTTP 404）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从数秒片段到数分钟成片：通用模型自主导演的评估缺口

现代文生视频已能渲染可信的数秒短片段，但完整影视作品需要在多场景间维持视觉与叙事一致，协调对白、音乐与音效同画面事件的配合，再组装为连贯成片。例如角色在长叙事中保持样貌，音乐以时间线推进，对白需要口型同步。专用工具能生成单个构件，缺的是规划、检查与修订的统筹，核心挑战从生成高质量片段转向自主管理整个制作流程。

已有评测多停留在生成器层面或窄域视频智能体。VBench 系列检验提示一致性与物理常识，含声画基准扩展到声音与长序列，但只评单次输出。视频智能体基准多依赖预设工作流、组合技能或代码渲染，未考察通用多模态大模型在无模板下用原子工具完成数分钟声画作品的能力。下表对照评估对象、时长、制作接口、音频与工作流支持以定位差异。

| Work | Evaluates | Length | Production Interface | Audio | Workflow |
| --- | --- | --- | --- | --- | --- |
| VBench [21] | Generator | ∼2 s | Generator | × | – |
| VBench-2.0 [68] | Generator | 5–10 s∗ | Generator | × | – |
| LongAV-Compass [35] | Generator | 1–2 min | Generator | Generated audio | – |
| VideoGen-Agent [29] | Agent | ≤15 s | Generator | × | ✓ |
| VideoWeaver [58] | Agent | ∼1 min | Generator + Skills | Speech | ✓ |
| VibeVideoBench [9] | Agent | 8 s–15 min | Code | Speech + code† | × |
| StudioBench | Agent | 1–3 min | Generator + Code + Atomic tools | Speech/music/SFX | × |

对照可见生成器基准时长多为约 2 秒至 1 分钟至 2 分钟，制作接口仅为生成器，工作流一栏不适用。智能体一侧时长从 15 秒以内到约 1 分钟或 8 秒至 15 分钟，接口加入技能或代码，但工作流一栏的勾叉含义不同，勾表示评测时向智能体提供了流程指导或可复用技能，叉表示未提供。StudioBench 时长为 1 分钟至 3 分钟，接口为生成器加代码加原子工具，工作流记为叉，恰要求模型自主建构流程而非复用模板。

为此每项任务给出制作简报、时长窗口与宽高比，以及多标签声音依赖。清单仅用于评分而不展示给模型。模型作为策略在 33 个工具上产生调用轨迹，以导出工具交付成片，未导出记为未交付。环境记录每个调用读写文件的生产者，精确重建工作流图谱。评估单元是一次运行的成片加图谱，分别支撑产品、过程与能力三问。

### 160 项任务与双轨评估：成片打分与工作流图谱如何分工

任务由公开平台 AIGC 视频改写，经人工筛选保留 1,276 个候选，再按类型每类型 20 项抽取共 160 项。8 种类型各考验不同能力，5 种任务类型覆盖开放简报、约束、资产条件、参考条件与音频主导。目标时长 60 秒至 180 秒，129 项为 16:9 横屏，其余为竖屏或宽银幕。声音多标签中 157 项需音乐，128 项需音效，89 项需语音，55 项需对白。清单共 1,686 条，每任务 4 条至 18 条，中位 10 条，其中 545 条为关键项。

执行与交付共用同一循环与预算，每个任务独立工作目录，无 Shell，代码只能写入渲染工具参数，互联网仅经搜索工具访问且屏蔽源视频。预算为 200 次工具调用，1 分钟至 2 分钟任务限 4 小时，2 分钟至 3 分钟限 8 小时。轨迹按时间列出调用，图谱按文件依赖连边，导出节点的祖先即进入成片的部分。下图展示三排结构以便对照任务、自主制作与评估的关系。

[![原论文 Figure 1：Overview of StudioBench. The benchmark spans 160 tasks across eight video genres.](https://arxiv.org/html/2611.28902v1/fig1_teaser.png)](https://arxiv.org/html/2611.28902v1/fig1_teaser.png)

*论文图 1：160 项任务经自主多阶段流程形成片，评分与工作流归因分离（原论文 Figure 1）。*

上排为 8 种类型示例帧，中排从用户提示经工作流图到交付成片，示例标注 162 次调用与 269 条文件边，实心表示进入成片，附 153 秒、总分 100、2 个角色与 36 条语音线的成片信息。下排分离评分与归因，左侧 13 项整片指标加清单与客观测量形成 0 分至 100 分，中间图谱只解释分数从不进入分数，右侧点出能规划执行恢复却在保持状态、核验与按效果判断上断裂，示例中 107/162 调用进入成片。

评分与过程彻底解耦支撑三问，产品分析看成片，过程分析看图谱，能力分析将两者配对。7 个模型在相同系统提示、工具集、生成后端与预算下各跑 160 项，共 1,120 次运行，其中 1,063 部成片进入评分，未交付按 0 分计入 160 项平均，排序用 2,000 次任务自举给出 95% 排名区间，全程无需人工干预。

### 33 个原子工具与 13 项整片指标：评分只看成片，图谱只做归因

工具分 8 组，视频生成含 t2v、i2v 与 ref_video，图像含 t2i、image_edit 与 remove_bg，声音含 tts、music、sfx 与 lipsync，代码渲染含 render_html、render_three 与 render_blender 且输出无声。编辑含 trim、concat、transition、overlay、composite、reframe、speed、color 与 ken_burns，音频处理含 mix_audio、audio_mix 与 audio_edit，检查搜索含 sample_frames 等 7 项，交付仅 export。视频统一经 MiniMax-H3 生成 5 秒或 8 秒片段，短边 768 并自带音轨，以固定渲染消除后端差异。

环境刻意极简，无 Shell，无工作流模板，提示仅描述各工具功能与预算并附零散建议，如先做人物表再编辑保持人物，先渲染预览静帧再渲染全段，每次生成后看图，导出前查时长宽高比与音轨。每次调用记录参数、输入输出文件、错误与耗时，并行经 batch 一次提交至多 16 个独立调用。下图汇总工具分组、评分构成与归因链路。

[![原论文 Figure 2：Atomic tools in; the film is scored, the workflow graph explains.](https://arxiv.org/html/2611.28902v1/fig2_environment.png)](https://arxiv.org/html/2611.28902v1/fig2_environment.png)

*论文图 2：33 个原子工具分 8 组，13 项整片指标评分而图谱只做归因（原论文 Figure 2）。*

上方列出 33 个工具的 8 分组与调用上限，中部给出 13 项整片指标，语义含需求完成与表达，视觉含清晰构图、结构、运动与跨镜一致，音频含可懂度、自然贴合、背景与混音，视听对齐含口型、声画事件与旁白音乐贴合。自动评委为 Gemini 3.8 Flash 在温度 0 下分 6 次调用检查 73 个带时间戳缺陷，经过程序测量的响度、静音、削波、模糊黑场冻结抖动与嘴部运动候选辅助，两遍平均后按阈值映射为 0、0.5 与 1 三档，语义内按 2 比 1 加权需求与表达，总分按类型加权四维度。

下方归因示例 t2i 经 i2v 与 trim 汇入混音，music 经 audio_mix 汇入同一混音再到 export，而 inspect 旁路不进入成片。图中明确节点为工具调用，边为读了另一调用所写文件。需求清单共 1,686 条仅用于评分，客观测量覆盖响度、静音、黑场冻结与剪辑率，图谱从不进入分数，只用于行为分析与失效归因。

### 显式需求接近饱和而工艺拉开差距：四档排名与成本前沿

评测公平性先交代口径，7 个模型同提示、同工具、同后端与同预算，每对任务模型只跑一次共 1,120 次，1,063 部交付成片全部评分，未交付按 0 分计入 160 项平均。95% 排名区间来自 2,000 次任务自举。附录另做稳健性核查，剔除 13 次接口或超时中断仅小幅扰动名次，剔除 150 次含 5 次以上服务端工具错误的交付仅交换前 2 名，说明主排名不受偶发故障主导。

#### 总体排名与需求饱和

主结果按 0 分至 100 分平均全体任务，未交付按 0 分计，Done 为 160 项中交付数，Cont、Pass 1、Pass 2 与 Equal 为连续化与单遍及等权变体，主列 Main 为两遍平均的三档映射。所有变体排名一致，两遍平均差异仅 4.5 分，87.0% 指标档位一致，下表同时给出交付数以判断低分来自质量还是缺片。

| Model | Done | Main | Cont. | Pass 1 | Pass 2 | Equal |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | 156 | 92.2 | 93.1 | 92.9 | 93.2 | 91.8 |
| Gemini 4 Argon | 159 | 92.0 | 93.0 | 92.8 | 93.1 | 91.4 |
| GPT-6 Astra | 160 | 88.8 | 90.9 | 89.9 | 90.5 | 87.8 |
| DeepSeek V4.1 Flash | 156 | 88.3 | 89.9 | 89.7 | 89.5 | 87.5 |
| Doubao Seed 2.1 Pro | 160 | 86.9 | 89.5 | 88.6 | 88.6 | 85.9 |
| Qwen3.8 Max | 152 | 83.9 | 86.0 | 85.6 | 85.4 | 83.0 |
| MiMo v2.6 Pro | 120 | 63.4 | 65.2 | 64.8 | 64.2 | 62.8 |

排名分四档，Claude Opus 5.5 以 92.2 分与 Gemini 4 Argon 以 92.0 分居首且无显著差异，其后 GPT-6 Astra 88.8 分、DeepSeek V4.1 Flash 88.3 分、Doubao Seed 2.1 Pro 86.9 分，再后 Qwen3.8 Max 83.9 分，MiMo v2.6 Pro 因仅交付 120 部而落至 63.4 分。平均成片满足 98.1% 需求条目，81% 成片满足全部清单，但工艺在清晰构图、身体结构、运动、背景声、跨镜一致与口型上拉开至少 14 分的极差，声音与视听均值中剔除 6 部无声片，无声片按规则取最低档。

#### 成本权衡与工作流规模

质量之外需看成本，左表同时给出语义、视觉、音频与视听四维度及交付率与费用，语义多在 92 分以上而视觉多在 70 分上下，费用从 0.75 美元到 8.80 美元不等。右图以每任务中位大模型费用为横轴，总分为纵轴，虚线为帕累托前沿，下段结合双面板说明高分是否值得多花钱。

[![原论文 Figure 3：Product quality and cost comparison across seven MLLMs.](https://arxiv.org/html/2611.28902v1/product_quality.png)](https://arxiv.org/html/2611.28902v1/product_quality.png)

*论文图 3：7 个模型总体与四维度分数、交付率及每任务费用与帕累托前沿（原论文 Figure 3）。*

左表显示 MiMo 语义仅 71.0 分、视觉 51.8 分明显落后，其余模型语义接近饱和。右图前沿依次经过 Doubao、GPT-6、Gemini 与 Claude，Gemini 以 2.86 美元拿到 92.0 分，仅比 Claude 的 8.80 美元低 0.2 分，Doubao 以 0.75 美元拿到 86.9 分，说明更高支出不成比例换来更高分，低成本路线仍具竞争力。

过程侧中位图谱含 121 个节点与 131 条边，制品依赖深度为 9，反映多阶段协调。各模型工作流规模与保留率差异显著，生产节点中进入成片的比例即 Used，深度为到导出的最长路径。下表给出每任务中位调用数、深度、保留率、分钟数与输入输出 Token。

| Model | Nodes | Depth | Used | Min. | Tokens |
| --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | 160 | 11 | 0.75 | 125 | 6.39M / 149k |
| Gemini 4 Argon | 140 | 9 | 0.84 | 79 | 1.73M / 47k |
| DeepSeek V4.1 Flash | 150 | 10 | 0.72 | 81 | 4.21M / 82k |
| Qwen3.8 Max | 97 | 9 | 0.85 | 79 | 1.65M / 47k |
| GPT-6 Astra | 127 | 10 | 0.88 | 56 | 0.57M / 16k |
| MiMo v2.6 Pro | 76 | 7 | 0.95 | 66 | 0.51M / 54k |
| Doubao Seed 2.1 Pro | 54 | 7 | 0.93 | 47 | 0.58M / 18k |

Claude 与 DeepSeek 分别以 160 与 150 个节点最庞大，但仅保留 0.75 与 0.72 的生产节点，MiMo 与 Doubao 分别仅 76 与 54 个节点却保留 0.95 与 0.93，深度从 7 到 11，耗时中位 47 分钟至 125 分钟，输入 Token 从 0.51M 到 6.39M。视频生成提供 74% 至 92% 已交付镜头，其余来自代码渲染与图片动画，产品任务最依赖代码渲染达 41%，说明高质量模型靠深图谱与多候选筛选而非单纯堆调用。

### 缺失的质量闭环：状态、核验与按效果修订的失效

从执行到诊断需配对同任务高低分成片，取差距至少 10 分的 142 项任务，中位差距 20 分，共 415 处质量损失，程序校验 99.7% 起源为生产调用、99.0% 核验为检查工具，人工抽查 79 处全部判正确。模型能恢复 80% 至 90% 显式工具报错，剩余瓶颈不在常规错误处理，而在感知缺陷的发现与修订。

#### 状态保持与工具长度惯性

4 种规则代理度量两类能力，保持状态以跨镜人物漂移与视听错位衡量，核验输出以静默损伤衡量，按效果决策以镜头时长贴着生成器 5 秒或 8 秒衡量。下表给出 1,063 部交付成片中的总体发生率与最低最高模型。

| Error mode | Ability | All | Lowest | Highest |
| --- | --- | --- | --- | --- |
| Character drift | keeping state | 19.1 | 10.9 Claude | 27.5 Doubao |
| AV misalignment | keeping state | 32.9 | 28.2 Claude | 37.5 Qwen |
| Silent damage | verifying outputs | 3.5 | 0.6 Gemini | 5.8 MiMo |
| Tool-length pacing | deciding by effect | 42.1 | 25.6 Claude | 59.4 Doubao |

总体人物漂移 19.1%，最低 Claude 10.9%，最高 Doubao 27.5%，视听错位 32.9%，最低 Claude 28.2%，最高 Qwen 37.5%，静默损伤 3.5%，最低 Gemini 0.6%，最高 MiMo 5.8%，工具长度贴合 42.1%，最低 Claude 25.6%，最高 Doubao 59.4%。配对分析中未核验缺陷占 65.5%，状态漂移 15.4%，工具默认代行效果 16.6%，未恢复工具错误仅 1.4%，误读简报仅 1.0%，检查后错过占 57.8%，从未检查占 33.5%，说明多做候选不如做准筛选。

#### 客观损伤与静默失效链

程序对交付文件做独立测量，响度遵循 ITU-R BS.1770，低于 -60 LUFS 判无声，另计超 10 秒静音、超 2 秒黑场、超 10 秒冻结、40% 采样帧过曝发白，以及相对人工源视频的剪辑率。下表按模型给出发生率以交叉验证主观缺陷判断。

| Model | Silent | Sil. >10s | Black | Frozen | Washed | Cuts/human |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5.5 | 0.0 | 0.6 | 9.6 | 5.8 | 2.6 | 0.46 |
| Gemini 4 Argon | 0.0 | 1.3 | 1.3 | 10.1 | 0.6 | 0.29 |
| DeepSeek V4.1 Flash | 1.9 | 3.2 | 18.6 | 16.7 | 3.3 | 0.46 |
| Qwen3.8 Max | 0.0 | 5.9 | 19.1 | 19.1 | 2.6 | 0.29 |
| GPT-6 Astra | 0.0 | 2.5 | 2.5 | 14.4 | 4.4 | 0.35 |
| MiMo v2.6 Pro | 4.2 | 9.2 | 4.2 | 25.0 | 1.7 | 0.21 |
| Doubao Seed 2.1 Pro | 0.0 | 8.8 | 14.4 | 20.6 | 3.8 | 0.35 |

无声片占比 MiMo 4.2% 最高，其余多为 0.0% 至 1.9%，但超 10 秒静音在 Doubao 达 8.8%，黑场在 Qwen 达 19.1%，冻结在 MiMo 达 25.0%，发白最高 GPT-6 4.4%。剪辑率相对人工源视频仅 0.21 至 0.46，人工中位每分钟 12.0 个剪辑、镜头 4.1 秒，模型仅每分钟 1.3 至 7.3 个剪辑、镜头 6.0 秒至 30.4 秒，且每组 95% 区间都不含 1，说明模型镜头偏长偏少。追踪的 4 例无声片均因终混将增益置零，而后续检查只看帧或列目录，未听结果即无纠正。

#### 选择效应与人评一致性

努力与选择的关系进一步量化，模型间保留率与配对分数呈负相关，模型内相对调用量与分数仅弱相关，深度与分数呈正相关，人机一致性在模型层面极高。下图上为真实无声工作流，中为选择与努力散点，下为评委与人工均值对照。

[![原论文 Figure 7：The missing quality loop in audiovisual production.](https://arxiv.org/html/2611.28902v1/fig7_effort.png)](https://arxiv.org/html/2611.28902v1/fig7_effort.png)

*论文图 7：无声失效链、保留率与调用量关联及评委与人工一致性对照（原论文 Figure 7）。*

上方面板显示 music 经 composite 与 mix_audio 增益为 0 后 export，inspect 仅看路径，sample_frames 仅看帧。中左保留率越高分数越低，跨模型相关系数为负 0.64，中右同模型内多调用仅弱关联，正 0.13，深度则为正 0.75。下方面板 116 项任务上评委与 3 人均值在模型层面相关系数为 0.997 且 21 对模型排序完全一致，任务内相关系数为 0.656，接近人间 0.692，成片对排序准确率为 72.3%，计入平局为 63.5%，评委平均高 5.6 分，平均绝对差 8.6 分，但阈值在 27 项开发任务上调优且含其中，故不能直接外推至全部 160 项。

人工验证覆盖 116 项任务的 771 部成片与 2,313 条评分，每组 3 人共 9 名训练评分员独立盲评。单指标上评委与人工的二次加权卡帕在语音可懂度与背景声上达 0.52 与 0.48，接近人间 0.55 与 0.48，而在口型上仅 0.10，低于人间 0.24。成片层面评委与人均值相关系数为 0.896，与一人对另 2 人均值的 0.896 持平，任务内多数接近 0.9 而少数难任务拖低均值。

### 结论成立的前提与代价：何时值得复用这套制作与评估管线

方法假设边界需先明确，视频统一经 MiniMax-H3 生成以隔离渲染差异，差异来自导演策略。本版 160 条用户消息均为三字段，无资产与参考文件，条件类任务只在简报中口头提及。搜索屏蔽源视频，时长与宽高比由程序度量而非评委估计。无声片按规则在声音与视听指标取最低档，工艺均值图中剔除 6 部无声片。体裁上覆盖叙事、商业、产品、教育、音乐、纪录片、创作者与对白 8 类，任务类型含开放简报、约束、资产条件、参考条件与音频主导 5 类，本版资产条件与参考条件任务亦只在简报中口头提及。目标时长 60 秒至 180 秒，其中 129 项为 16 比 9 横屏，其余为竖屏或宽银幕，声音标签多选共计音乐 157 项、音效 128 项、语音 89 项与对白 55 项。

未验证的部署条件包括每对任务模型仅跑一次，服务侧工具错误在 14% 至 45% 交付中出现，API 中断 12 次加超时 1 次。客观剪辑率显著低于人工源视频，长镜头偏好是否适用于快剪类型未验证。人类验证仅覆盖 116 项任务且阈值在其中 27 项上调优，对白与音乐最难，纪录片与产品最易，叙事类仅 9 项参与验证，全部 160 项中 DeepSeek 反超 Doubao 的顺序未经人评确认。清单共 1686 项，每项任务 4 至 18 项、中位 10 项，其中 545 项为关键项，内容上画面 787 项、格式 321 项、声音 264 项，其余覆盖风格、结构顺序、一致性与屏上文字，可作为需求饱和与工艺分化的对照基线。

复核前提中归属明确且本次核查返回 200 的资源仅为代码仓库，其配套说明完整性为部分，仅覆盖安装等部分内容。演示站、画布与 StudioFlow 在资源身份记录中均为第三方提及，不等同作者资源。其中演示站第三方链接本次返回 200，画布与 StudioFlow 链接本次核查返回 404，第三方可达仅说明链接本身可达。

资源身份记录中没有模型类型资源，因此本文不讨论模型发布与否，来源未确认也不视为论文技术缺陷。附录覆盖任务来源与类型矩阵、清单拆分、工具与系统提示、评分阈值与权重、人工协议、排名稳健性变体、分类型分数、环境错误、客观测量、轨迹归因与定性对照，可作为复现核对表。

#### 执行分工与复现顺序

33 个原子工具按 8 组分工，顶层为视频生成、图像、声音、代码渲染、剪辑、音频处理、检查与搜索、交付。视频生成走同一后端，图像负责角色表与关键帧，声音负责旁白对白配乐与音效口型，代码渲染输出无声画面再配声，剪辑与音频处理负责拼接转场字幕与混音，检查只读帧查时长分辨率与音频，搜索只经工具进入，源视频被屏蔽。每轮预算为 200 次调用，1 至 2 分钟任务限 4 小时，2 至 3 分钟任务限 8 小时。其中视频生成组含文本到视频、首帧到视频与参考条件视频三调用，图像组负责角色表、编辑与抠图，声音组覆盖旁白对白、配乐、音效与口型重渲染，代码渲染组以无头浏览器与 Blender 输出无声画面，剪辑组负责裁剪拼接转场字幕叠化与调色，音频处理组负责多轨混合与单轨编辑，检查与搜索组只读不改，交付组以导出形成终片。

通用生产 workflow 未经模板自发形成，关键帧先于视频生成占 70% 至 97% 交付，已生成片段被回看占 83% 至 97%，音频在导出前混合占 99% 至 100%，终片在导出前被检查占 96% 至 100%，脚本前置、角色锁定、修剪与复导出则分化明显，前者如部分模型占 86% 至 99% 而另一些仅占 10% 至 20%，体现规划与精选策略差异。交付镜头中视频生成供给占 74% 至 92%，其余来自代码渲染与图片动画，产品类任务最依赖代码渲染，占比达 41%，说明分工比例随体裁需求摆动而非固定模板。

工作流图谱按文件依赖重建，节点为工具调用，边为写文件到读文件的生产者关系。导出节点的祖先即到达终片的工作，生产节点不含导出与检查类调用。中位图谱约 121 节点与 131 边，制品依赖深度为 9，模型间中位节点数从 54 到 160，深度从 7 到 11，到达终片的生产节点占比从 72% 到 95%，保留越少往往对应更深的探索与筛选。

代理循环中模型仅见系统提示、一条用户消息与 33 个工具，不见工作流模板与评分清单。每项任务独立工作目录，互联网仅经搜索工具进入。生成类慢调用可经批量并行提交，一次批量最多提交 16 个独立调用且每个调用单独计入预算，依赖上游输出的步骤须等待返回后再下发。无壳环境下代码只能写入渲染工具参数，调用记录参数、输入输出文件、错误与耗时。系统提示对关键手法给出使用建议，先做角色表再编辑以保持人物一致，先渲染预览静帧再渲染全段，每次生成后回看帧，提交前核查时长与音频，但不给出全片先写脚本再生成再剪辑混音的顺序模板。

工具后端在全部运行中锁定，视频生成三调用均走同一后端并只产出 5 秒或 8 秒片段，代码渲染与图片平移可产出不限长片段，再经拼接或转场连成数分钟终片。图像侧先出角色表再编辑再经图像到视频，声音侧先出旁白对白与配乐再做口型与混音，剪辑侧负责裁剪拼接转场字幕叠化与调色，终片经导出形成交付，多次导出以最后一次为准。检查侧以抽帧接触表看画面，以时长分辨率帧率与音频清单核文件，以语音转写核对白，以镜头检测切分镜头，以节拍检测定 tempo 与重拍，均为只读诊断而不直接改片。

#### 评分衔接与质量环

终片评分走 13 个整片指标，覆盖语义、视觉质量、音频质量与视听对齐 4 维。评委分六次调用完成听、答声音题、答表达题、摘要核对、答画面题、答视听题，共 73 个带时间戳缺陷检查，并辅以响度、静音、削波、模糊黑帧冻帧抖动与口部运动等程序候选。缺陷成本经两轮均值与阈值映射为三档，无声片按规则在声音与视听指标取最低档。评委为同一后端固定温度两轮复核，六次调用按听觉先行再分维答题的固定顺序执行，程序候选仅作为待确认线索，仍须逐项确认或以正常剪辑与简报要求为由驳回。

语义内需求完成与表达按 2 比 1 加权，声音、画面与视听对齐各自平均适用指标，总体按体裁加权并在缺适用指标时重归一化，未交付按 0 计。客观测量与终片同一管线，人工源视频中位每分钟剪辑 12.0 次、中位镜头 4.1 秒，模型仅为每分钟 1.3 至 7.3 次、中位镜头 6.0 至 30.4 秒，配对剪辑率比值区间均不含 1。

缺陷追因走同任务高低分对子比对，取分差至少 10 分的 142 项任务，中位差距 20 分，逐项核验缺陷检查与调用归属。已核验的无声个案显示终混增益置零后检查只看帧或列目录而未听结果，修订分支未被触发，这正是需人工补听的原因。归因核验显示绝大多数起源调用为生产调用而检查调用为检查类工具，有声子集与全集的未核验缺陷、状态漂移与工具默认替代效应占比基本一致，说明漏检而非偶发报错是主要断点。

工程选型若目标为数分钟广告、教育或音乐表演类成片，且能接受论文中位 47 分钟至 125 分钟与数美元费用，可参考论文中 Gemini 与 Doubao 的成本位置，先跑 20 项左右覆盖对白与音乐的难例。复现第一步应按论文锁定同一后端与 200 次调用预算，并记录文件级依赖以重建图谱。必须补做人工抽听抽看，尤其检查终混增益、长静音与口型，重点听混音是否压住对白、背景声是否贴合场景，因为自动检查易只看帧而漏听，追加修订分支才能闭环质量环。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：视频统一经 MiniMax-H3 生成 5 秒或 8 秒片段，短边 768 并自带音轨，目标成片 60 秒至 180 秒，129 项为 16:9 横屏，混音增益为线性系数并保持视频时长，响度以 ITU-R BS.1770 度量，采样率、帧率与码率等原文未披露，RTF 与延迟原文未披露。
- **训练与评测数据**：无模型训练阶段，StudioBench 由公开平台 AIGC 视频改写，经筛选保留 1,276 个候选再抽取 160 项，每类型 20 项，8 种类型 5 种任务类型，清单 1,686 条中位 10 条，声音多标签 157 项音乐 128 项音效 89 项语音 55 项对白，源视频中位 118 秒，评测 7 个模型共 1,120 次运行。
- **算力与训练耗时**：原文未披露 GPU 或 TPU 型号与数量，统一循环经 Claude Code 非交互模式接 Anthropic 兼容网关最高推理档运行，后端固定为 MiniMax-H3 与 Qwen 系列等，每任务预算 200 次调用与 4 小时或 8 小时，中位耗时 47 分钟至 125 分钟，Token 开销见推理成本。
- **核心超参数与配置**：无训练优化器与学习率，评委为 Gemini 3.8 Flash 温度 0，每片 6 次调用两遍平均，73 个带时间戳缺陷按代价映射为 0、0.5 与 1 三档，语义内需求与表达按 2 比 1 加权，总分按类型加权四维度，阈值在 27 项开发任务上调优。
- **推理速度与部署开销**：每任务中位大模型费用 Claude 8.80 美元 Gemini 2.86 美元 GPT-6 2.57 美元 DeepSeek 3.29 美元 Doubao 0.75 美元 Qwen 2.59 美元 MiMo 3.01 美元，中位输入 Token 0.51M 至 6.39M 输出 16k 至 149k，RTF、吞吐与显存原文未披露。
- **开源产物与协议状态**：代码在 StudioBench 仓库当前可获取并返回 200，README 仅覆盖安装等部分说明，演示站在第三方链接当前可访问，画布与 StudioFlow 链接在本次核查中返回 404 不可用，第三方存在只证明论文提到该链接，权重与数据许可需按仓库说明确认。
- **附录与补充材料要点**：附录覆盖任务来源与类型矩阵、清单拆分、33 工具与系统提示、13 指标阈值与类型权重、9 人人工评测协议、排名稳健性变体、分类型分数、环境与服务错误、客观声画测量、142 项配对归因与 8 类型定性对照，并报告人机模型层面排序完全一致但阈值非完全留出。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.28902v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（数据集与基准）：创新 15% · 严谨 15% · 实验 18% · 清晰 10% · 影响 20% · 复现 12% · 工程 10%（开源上限加分 +0.8）

- 核心优势：以固定MiniMax-H3后端与33原子工具剥离渲染差异，仅考查规划取舍与感知检验的指挥能力，因果归因清晰。

- 核心优势：以160任务1120次运行、2000次自助排序区间与116任务人类验证实现模型层面r=0.997且21对排序全对。

- 核心优势：裁判不直接打分而是回答73项带时间戳缺陷检查并经程序化候选约束，两遍平均映射为13项整片指标，图只归因不参分。

- 主要短板：阈值在27个开发任务上调优而该27任务仍属于116个人类验证任务，存在调参与验证部分重叠。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
