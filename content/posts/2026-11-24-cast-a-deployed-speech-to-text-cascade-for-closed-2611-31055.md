---
title: "CAST: A Deployed Speech-to-Text Cascade for Closed Captioning of Entertainment Television"
date: 2026-11-24
draft: false
tags: [语音识别, 模型融合, 信号处理, 语音]
categories: [论文速递]
description: "针对音乐效果床下长节目字幕漏词与幻觉并存的难题，CAST 在冻结 Whisper large-v3 周围搭建分层重审加语义声学设防加语言歌词分路加重复重解的级联，在 100 档内部节目上把 WER 从 6.99% 降至 5.36% 并把人工编辑耗时从 254.2 降至 221.9 min 每节目小时，代价是公开集上插入小幅上升、修复最坏开销波动与缺少开关消融使归因受限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.31055"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "召回优先的电视字幕级联如何围堵漏字与幻觉"
paper_digest_original_title: "CAST: A Deployed Speech-to-Text Cascade for Closed Captioning of Entertainment Television"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.31055v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.31055v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.31055v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "模型融合"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对音乐效果床下长节目字幕漏词与幻觉并存的难题，CAST 在冻结 Whisper large-v3 周围搭建分层重审加语义声学设防加语言歌词分路加重复重解的级联，在 100 档内部节目上把 WER 从 6.99% 降至 5.36% 并把人工编辑耗时从 254.2 降至 221.9 min 每节目小时，代价是公开集上插入小幅上升、修复最坏开销波动与缺少开关消融使归因受限。"
paper_digest_reader_sections: [{"heading":"娱乐电视长节目字幕为何同时怕漏字与怕幻觉","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"CAST 用冻结识别器搭出召回优先的级联","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"分层检测与残留准入如何给弱语音多次机会","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"语言门歌词分路与重复修复如何只动存疑音频","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"100 档节目与三套公开长音频上的误差与耗时变化","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"结论成立的前提缺失的消融与工程选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Aditya Mishra"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Thanish Bolla"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bidisha Sharma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Balaji Pitchaikannu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Surbhi Sinha"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Anup Kotalwar"}]
paper_digest_abstract_sha256: "58d75c8de4b3e13958a9b3b2c5258e8413bb6b819f0c2c6be3df08d87f85c79a"
paper_digest_sidecars: {"citation.bib":{"sha256":"64a6d0644f4d36b3052d8ddf4b6901241cbb138ec411ad8edab4825e70d98373","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-31055/citation.bib"},"citation.json":{"sha256":"fd14289f06da76152771b58c4e217e560e3888c33cdc265a9d26bcf1a95c739b","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-31055/citation.json"},"citation.ris":{"sha256":"50b33fba78dd63840cc6127ad99768cdbea63f8360b8b7078859fff4835c1146","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-31055/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"49629c3d471afe37005bdd8847365284670b9cfd8fffd60e5eca62e7a20455bb","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-31055/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "19c54ec77bd0d8257f9c749d2ccc6dadc722d3df0a126bf5bb61dcc3ea401bf9"
paper_digest_api_reader_plan_sha256: "519e599bb07764a57b84b7e59e6aa12ff928ea34a4f25d1fa7400d68753104f3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6e5abe6b2433002795886f671d3df62c9c6c2cb9ab398f3f070c1e74d413a740"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "251e704f8efaef7bd771884a8a0bb5dd5cfe8d3df0c505d87d978c5f63f1ebee"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ee1f4de2739529fd6a7dd222c9f69b9dc6e97fdfb713f023553c16b435b045d8"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "71487e0620f12b8b83865c812712b68b4890972e5c223107cb0042c83c944268"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 召回优先的电视字幕级联如何围堵漏字与幻觉

> 英文题目：*[CAST: A Deployed Speech-to-Text Cascade for Closed Captioning of Entertainment Television](https://arxiv.org/abs/2611.31055v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.7/10** | 创新 6.2/10 | 技术严谨 6.7/10 | 实验充分 7.1/10 | 清晰度 5.5/10 | 影响力 5.8/10 | 开源 0.0/10 | 可复现 7.6/10 | 工程/实践 7.4/10
>
> 发表/录用标记：AAAI 2027


## 👥 作者与机构

- Aditya Mishra：机构信息未能在本次解析中与作者逐人可靠绑定
- Thanish Bolla：机构信息未能在本次解析中与作者逐人可靠绑定
- Bidisha Sharma：机构信息未能在本次解析中与作者逐人可靠绑定
- Balaji Pitchaikannu：机构信息未能在本次解析中与作者逐人可靠绑定
- Surbhi Sinha：机构信息未能在本次解析中与作者逐人可靠绑定
- Anup Kotalwar：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 娱乐电视的字幕转写以混合节目母版为输入，需要输出带词级时间的文本，供说话人分配与字幕块切分使用。音乐、效果音、笑声与对白有意混在一起，叠加离麦低能量语音、快速插话、重叠轮次与歌唱，单遍语音活动检测难以两全。门限收紧会漏掉微弱语音，形成无法恢复的缺字与缺块，门限放宽又会把近静音送入自回归解码器，诱发流畅幻觉与重复循环。论文指出转写质量同样受切分与周边模块制约，前端漏字与幻觉都会向后传播，增加人工核查负担。

**核心思路与方法架构：** 与最接近的 WhisperX 基线相比，本文保留冻结的 Whisper large-v3 不做微调，把工程量放在切分决策与按模糊程度升级模型上，并对残余音频施加语义与声学双重准入。1 秒 16 kHz 单声道输入对应 16,000 个采样点的张量，先经 Demucs 分离保留含对白与歌唱的人声干声，后续模块只在该干声上运行。分层语音活动检测以 pyannote 语音活动检测为基础走过 4 个逐级放宽的配置，严格层级拒掉的残余进入下一层复审，仍未被接受的终端残余需同时通过时长窗、Gemini 2.5 Pro 可懂词判断与 Silero 250 ms 语音确认，再经最长突发截取与每侧至多 120 ms 填充后合并为不足 30 秒的片段。语言门按 Whisper-base、MMS-LID-4017 与 Gemini 由廉价到昂贵逐级升级，只保留判为英语的片段，歌词片段另交 Gemini 转写，全部转写使用英语语言码与零温度，邻近片段附带至多 80 词上文提示，重复检测标记的片段经温度回退与 1 秒网格切分搜索修复，之后由 WhisperX 对齐合并为带词时间的转写。全程为推理流水线，无参数更新，单张 NVIDIA L4 GPU 占用约 9 GB 到 12 GB 显存。

**关键实验与核心代价：** 在 100 个自有资产共 60.46 小时与 569,651 个归一化参考词上，对比完成配对输出的 WhisperX，本文 WER（词错率，越低越好 ↓）从 6.99% 降至 5.36%，SubER（字幕编辑率，越低越好 ↓）从 14.72% 降至 11.18%。删除错误从每 1,000 词 28.79 降至 19.06，替换与插入也同步下降，95 个资产 WER 更低，97 个资产 SubER 更低。35 个资产共 19.9 小时的人工后编辑研究显示编辑率从 254.2 分钟 / 节目小时降至 221.9 分钟 / 节目小时，中位数从 255.1 降至 225.7，全部 35 个资产均更快，Wilcoxon 符号秩检验 p = 5.8×10-11。在 CORAAL、Earnings-22 与 Rev16 三个公开长音频语料上，本文 WER 分别从 21.52% 降至 21.30%、从 14.04% 降至 13.46% 以及从 13.07% 降至 12.90%，删除同样减少但插入有所上升，净收益明显小于自有数据。主导代价来自更宽松的召回与修复搜索，重复检测仅触发 55 / 9,001 段约 0.61%，18 次切分搜索评估 156 个候选，中位数 7 个，最多 29 个，95 秒长窗搜索开销波动明显，平均每音频小时约 27.4 分钟计算，宿主内存与 L4 队列可用性构成部署约束。

**适用边界与深读导览：** 结论仅在英语内容、单一在位基线与给定 100 资产选择清单下成立，参考是人工生产反馈字幕而非独立逐字转写，阶段遥测来自同一批源资产的独立仪器运行且无帧级语音、语言、音乐或幻觉标签，残余准入与修复均无匹配开关消融，重叠说话人转写不在范围，当前仅约 5 到 10 个可用生产观测，不支持生产级编辑收益与集群可靠性推断。在重音乐歌唱、重口音串话与长时重叠等条件下删除与插入的权衡可能反转，公开语料上已出现插入上升而 WER 仅微降，跨类型泛化与非英语内容尚未验证。本文未提供音频试听页，想深究阈值表、残余漏斗、语言与歌词路由统计及修复流程可查下文方法与实验章节及附录提示词与参数表。

## 🔗 开源与复现资源

- 论文所列链接：<https://huggingface.co/pyannote/voice-activity-detection> — 链接可访问（HTTP 200）

- 论文所列链接：<https://huggingface.co/facebook/mms-lid-4017> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 娱乐电视长节目字幕为何同时怕漏字与怕幻觉

娱乐电视节目母带把对白、音乐、效果声与现场笑声有意混合在一起，演员离麦、语速快、插话重叠与演唱段落都必须进入字幕。与近讲麦克风不同，这种母带远离干净语音条件，语音转文本是闭路字幕流水线的第一步，它的错误无法被下游挽回，漏掉的词无法分配说话人与切分字幕块，在静音上幻觉出的句子则需要审校逐条定位删除，转写质量直接封顶整条链路。

自回归解码器在固定 30 秒窗口内逐段遍历长音频，依赖无语音概率、平均对数概率与压缩比等阈值控制走向，阈值失灵就会漂移、循环或在静音与音乐上输出流利文本。单遍语音活动检测难以两全，把阈值收紧会漏掉低能量弱语音并形成删除，把阈值放宽又会把近静音送入解码器并诱发重复与幻觉，两类错误相互竞争，促使分层重审与残留设防的设计。

此前研究各自处理过一个环节，混合与迭代停顿搜索切分、语音活动检测误差与插入删除的耦合、解码器已见非语音后的下游幻觉抑制、音乐中语音的独立评测，但没有拼成一套系统。业界常用的 WhisperX 流水线用语音活动检测切分加 Whisper 解码加外部强制对齐，在先前工作中被视为最准确的方案，但它同样受制于一次切分决定所有音频去留的瓶颈，难以兼顾召回与精确。

CAST 把输入明确为混合节目母带的音频，输出为带词级时间戳的英文转写，供审校、重对时、说话人分离与字幕块成型使用，不设多语转写路径，非英语片段直接移除。核心矛盾因此落在切分召回与幻觉控制之间，如何让被判为非语音的弱语音多次获得解码机会，同时把真正无词的残留严密封锁，成为整篇设计的起点。

### CAST 用冻结识别器搭出召回优先的级联

与最接近的基线 WhisperX 相比，CAST 保留了冻结的 Whisper large-v3 与 WhisperX 对齐器用于最终补时间戳，替换与新增集中在流水线周围。前端加入 Demucs 只取人声干，中间用四档渐宽松的 pyannote 分层重审被拒间隙，终端残留经时长窗加 Gemini 2.5 Pro 语义判断加 Silero 声学确认，之后是 Whisper-base 到 MMS-LID-4017 再到 Gemini 的语言门、Gemini 歌词分路，以及文本侧重复检测加温度回退重解，不做任何声学模型微调。

#### 与 WhisperX 的差异与信号规格

信号规格全部按原文交代，音频以 16 kHz 单声道处理，Whisper 解码窗口为 30 秒，合并后片段保持不足 30 秒以保留邻域上下文。残留准入只看 300 ms 至 20 秒，声学确认要求累计 250 ms 语音，保留突发两侧各至多 120 ms，语言判定只对长于 650 ms 的候选段执行，跨段提示仅当间隔至多 200 ms 时携带最近 80 词，温度一律取 0 以保证确定性。

#### 1 秒样本的端到端旅程

以 1 秒 16 kHz 输入为例，它包含 16,000 个采样点，先经 Demucs 分离得到人声干并丢弃音乐效果干。随后进入 L1 至 L4，若某层判为语音则直接进入语音路径，若判为间隙则把残留送入下一更宽松层，四层皆拒则进入时长语义声学三道门，通过者与普通语音合并为不足 30 秒的段。接着语言门决定去留，歌词标记决定走 Whisper 还是 Gemini 转写，解码后重复检测只重解被标记段，最后由 WhisperX 补齐词时间戳形成可入块的转写。

阅读架构图时可先沿上排从左向右追踪人声干到词级转写的主链，再对照下排看分层切分与残留准入的细节。注意图中用不同边框区分 CAST 处理阶段、本地模型与外部 API，以及指向丢弃的虚线箭头，上排方框内标注了每个阶段调用的模型，下排标注了每道门的阈值与填充量，两部分通过合并保留语音的横向箭头衔接。

![原论文 Figure 1：(a)The CAST pipeline, (b) the hierarchical segmentation and residual admission stage.](/audio-paper-digest-blog/images/papers/2611.31055/figure-1-3fd5910bf55e874d.png)

*论文图 1：CAST 六阶段级联与分层切分残留准入流程主链与重审细节（原论文 Figure 1）。*

上排依次为切分重试被拒间隙、语言门存疑升级、歌词分路标记演唱段、逐段解码、重复修复重解被标记段、合并对齐补时间戳，最终输出词级转写。下排显示 L1 产出语音与间隙，间隙经 L2 至 L4 逐级重审，终端残留经 300 ms 至 20 秒时长窗、可懂词语义判断、累计 250 ms 声学确认与至多每侧 120 ms 裁剪后汇入主链，非英语移除与歌词标记分别向下与向上分流，虚线指向丢弃。

### 分层检测与残留准入如何给弱语音多次机会

分层切分把长音频视为根节点，以 pyannote VAD 11 为基检测器，每层把节点切为语音区间与区间之间的残留，语音子节点视为终止不再下探，残留子节点送入下一层。若某配置复现了父划分则视为无进展并下放，穷尽四层仍被拒的节点成为终端残留。调度在触发阈值、最短语音与最短静音上单调放宽，使深层见到的永远是比拒绝它更宽松的检测器，递归深度被限制在四层。

#### 四档阈值的单调放宽

下表给出四档阈值的 shipped 取值与在 100 个资产上累计的检测耗时，Level 3 的非圆整数字继承自一次未保留配置的调参运行，原文如实按现状报告而不包装为设计 operating 点。阅读时可先对比触发阈值与最短时长两组列，再看尝试数与接受数的反差，尝试数与接受数引用自附录，计算列在单卡 Tesla T4 上计时，与主服务的 L4 计时不可直接对比。

|  | Probability | Probability | Minimum (s) | Minimum (s) |  |
| Level | onset | offset | speech | silence | Compute |
| 1 | 0.850 | 0.550 | 0.300 | 0.350 | 0.48 h |
| 2 | 0.820 | 0.500 | 0.160 | 0.200 | 0.84 h |
| 3 | 0.810 | 0.481 | 0.055 | 0.098 | 0.84 h |
| 4 | 0.750 | 0.400 | 0.050 | 0.060 | 0.83 h |

从 Level 1 到 Level 4，触发 onset 从 0.850 降至 0.750，offset 从 0.550 降至 0.400，最短语音从 0.300 s 缩至 0.050 s，最短静音从 0.350 s 缩至 0.060 s。尝试数分别为 100、23,800、24,651 与 24,875，接受数仅为 100、2,410、755 与 674，深层用大量尝试只捞回少量难样本。四层检测耗时分别为 0.48 h、0.84 h、0.84 h 与 0.83 h，同一分割模型只变后处理阈值，保证了比较的一致性。

#### 三道设防门与重组

终端残留经三道串行门，时长窗先剔除短于 300 ms 的 4,694 个与长于 20 s 的 163 个，剩余 22,384 个进入语义门。语义门用 Gemini 2.5 Pro 以模式约束输出二值判断，至少一个可懂口语或演唱词乃至可辨的截断词部为正，哼唱、呼吸、笑声、尖叫、无词音乐与效果声为负，10 路并行加 3 次限流重试，温度取 0。声学门用 Silero 在阈值 0.5 下要求累计 250 ms 语音，以 100 ms 静音分突发并丢弃短于 50 ms 的突发，通过后只保留最长突发并向两侧各扩展至多 120 ms 且不越出原边界。

重组把所有幸存子节点按时间合并为不足 30 秒的段以保留邻域词汇上下文。在 100 个资产上，终端残留共 725.2 min，经时长窗剩 634.5 min，经可懂词剩 97.5 min，经语音确认剩 24.8 min，经裁剪突发剩 6.6 min。语义门过滤最彻底，声学门与裁剪进一步收紧，最终进入解码的残留不足原来的 1%，召回增益以严格设防为代价，这些为行为测量而非带标注的检出率。

### 语言门歌词分路与重复修复如何只动存疑音频

#### 便宜到昂贵的语言与歌词分流

语言门只处理长于 650 ms 的候选段，采用便宜到昂贵的级联以避免单一阈值同时承担两种风险。Whisper-base 英语概率超 0.8 即快通，共解决 9,842 次判定中的 9,206 次，占 93.5%。其余送 MMS-LID-4017，仅当首标签置信不低于 0.6 才接受，又解决 106 次。剩余 530 次占 5.4% 升级到 Gemini 2.5 Pro，其中 302 次判为英语保留，228 次判为未知移除。33 个易把口音英语误判的代码需经 Gemini 二次判断而不直接丢弃，移除总量中西班牙语 4.55 min 居首，其余法语、夏威夷语与葡萄牙语等各不足 0.4 min。

歌词分类比通用音乐检测更窄，演唱、说唱、清唱、短广告歌与主题歌为正，纯伴奏、无词哼唱与音乐床上的普通说话为负，多数为说话的混合段仍走语音路径，连续正段合并。100 个资产中 55 个无标记，27 个有 1 段，8 个有 2 段，4 个有 3 段，6 个有 4 段以上，近半数资产受影响但音频量很小。歌词段走 Gemini 2.5 Pro 转写，要求逐字记录可听的说话演唱说唱并保留实际演唱的重复，使副歌完整，空无词片段返回空串，之后同样经过重复检测。

#### 解码保护与重复检测修复

解码对每段用冻结 Whisper large-v3 以温度 0 与固定英语码执行，相邻段间隔至多 200 ms 时把上段最近 80 词作初始提示以携带词汇上下文。前导静音用逐 5 ms 窗的 RMS 幅度以阈值 0.01 估计，仅当无前导静音且至多一种语言超 0.05 才补 50 ms。解码后用 WhisperX 对齐器估计词时间，记输入时长为 T，末词起止为 sK 与 eK，计算末词占比 r 以诊断截断。

\[r=\frac{e_{K}-s_{K}}{T}.\]

该式的物理直觉是末词若占据输入尾部过大比例，往往意味着解码在段尾被截断而把尾词拉长。r 接近 0 表示末词短促正常，r 超过 0.30 则触发至多两次重解，分别补 50 ms 与 100 ms 尾静音且不用跨段提示，每次对预重试音频重对齐，仅当比值回落才接受，否则保留初版。若无有效词时间戳则不触发，临时对齐随后丢弃，最终对齐在重复修复与合并后重做，输出直接决定是否多花两次解码。

重复检测在文本侧寻找两类痕迹，至多 15 元的短语紧邻重复与单个字符连 5 次以上。短语至少出现 6 次才候选，足以放过口语中说 3 个不的正常重复，长程需再满足至少一条，出现 8 次以上、前五分之一后开始、覆盖 70% 词数，或 6 次且在 60% 后开始。在 9,001 个进入修复的段中 55 个被标记，占 0.61%，折合每音频小时 0.91 次，调用率很低。

阅读修复流程图时可从顶部 9,001 个输入段出发，先看右侧 8,946 个未标记的直通分支，再沿纵向追踪 55 个被标记段如何先整窗重试再进入切分搜索。注意区分整窗通过、切分通过与最终未修复 3 类出口，以及虚线表示的保留原文路径，这有助于理解重解只动存疑音频的设计。

![原论文 Figure 5：Flow of the 55 flagged segments through repetition repair across 100 assets.](/audio-paper-digest-blog/images/papers/2611.31055/figure-5-9ead255236581fa5.png)

*论文图 5：重复检测后整窗重试与切分搜索分流共 55 个标记段去向（原论文 Figure 5）。*

整窗重试在 Whisper 温度 0.0 至 1.0 回退下重解全窗，37 个输出非空且通过检测，剩余 18 个进入切分搜索。搜索先试量化的环路起点，再从段尾按 1 秒步长逐个试切分并接受首个两半皆干净者，14 个通过，4 个保留原文以保证失败不删词。18 次搜索共评估 156 个候选，中位 7 个，最大 29 个对应 95 s 长段，说明修复虽少用但最坏开销波动明显。

合并对齐把幸存转写按时间拼合，用 WhisperX 补齐缺失时间戳并形成与 WhisperX 相同的键与嵌套，使下游审校、对时、说话人分离与字幕块成型无需改接口。长于 30 秒的修复窗直接调内部 Whisper 一次并拼接原生分段文本，不走重叠窗分支，所有重试与回退记录均计入 55 个标记的终端归因。

### 100 档节目与三套公开长音频上的误差与耗时变化

评测分两类资产，内部 100 档英语节目共 60.46 小时、569,651 个归一化参考词与 80,653 条参考字幕 cues，覆盖 48 个已知系列与 9 个网络，22 档缺元数据仍保留，单档 17.6 至 84.6 min，中位 42.3 min，参考为人工 WebVTT，39 档含 457 条歌词块。公开 3 套为 CORAAL、119 小时的 Earnings-22 与 16 期播客的 Rev16，参考为逐字稿无 cues 结构故只报 WER。配对比较固定 worker 数，因跨段提示在 worker 边界重置，所有指标越低越好。

#### 词错率与字幕编辑率的定义

词错率衡量归一化后词序列对齐的词汇准确性，S 为替换数，D 为删除数，I 为插入数，N 为参考词数，结果乘 100 化为百分比。评分前小写并清理标点，拼接每资产 cues 后丢弃时间戳，删除对应漏字幕块，插入对应幻觉，替换对应听错，三者相加除以参考规模使跨资产可比，方向越低越好。

\[\mathrm{WER}=100\,\frac{S+D+I}{N},\]

该式的统计直觉是把 3 类错误同等计入分子并用参考量归一，短资产与长资产因此可比。极端下全删则 D 等于 N，WER 至少为 100%，全幻觉则 I 可使结果超过 100%。输出驱动下一步的相对降幅比较，CAST 与 WhisperX 的差值需结合删除与插入的分量解读，而不能只看单点总率。

字幕编辑率联合评估文本、断行与时序，Eword 与 Ebreak 分别计数词与断行符的替换删除插入，H 计数连续序列的移位，分母为参考词与断行符之和并乘 100。词匹配与替换要求字幕 cues 时间重叠，移位同样限时，采用默认大小写不敏感与标点归一实现，方向越低越好。

\[\mathrm{SubER}=100\,\frac{E_{\mathrm{word}}+E_{\mathrm{break}}+H}{N_{\mathrm{word}}+N_{\mathrm{break}}},\]

该式的物理直觉是好词还需放在可读的行与正确的时间，文本相同但分行切分不同会得到不同分数。极端下时序全错即使词对也无法匹配，只能计为删除加插入，分数显著升高。输出用于判断转写能否直接入块，弥补了 WER 忽略时间与分行的盲区，并解释为何两系统 WER 接近时 SubER 仍能拉开差距。

#### 内部主结果与人工编辑耗时

内部主结果在同一 100 档上配对比较 WhisperX 与 CAST，给出 WER、SubER 与每 1,000 词的删除替换插入。阅读时先看两行总率的方向，再看三行分量的哪一类下降最多，以判断召回优先是否以插入为代价，Reduction 列为原文报告的相对降幅，单位保留百分比与每 1,000 词，公平性建立在相同参考与配对输出之上。本表严格保留原论文表格原始刊印值（SubER 行 Reduction 列原刊 23.31% 系原表沿用 WER 行数字的明显刊印笔误，按表内原始率 14.72% 与 11.18% 重算降幅约为 24.05%，原论文正文另记为 24.06%），解读均以两组原始率 14.72%→11.18% 为准。

| Metric | WhisperX | CAST | Reduction |
| --- | --- | --- | --- |
| WER (%) | 6.99 | 5.36 | 23.31% |
| SubER (%) | 14.72 | 11.18 | 23.31% |
| Deletions / 1k | 28.79 | 19.06 | 33.79% |
| Substitutions / 1k | 22.08 | 17.20 | 22.12% |
| Insertions / 1k | 19.07 | 17.39 | 8.85% |

CAST 把 WER 从 6.99% 降至 5.36%，SubER 从 14.72% 降至 11.18%，95 档 WER 更优，97 档 SubER 更优。

删除从每 1,000 词 28.79 降至 19.06，降幅 33.79%，总数从 16,402 降至 10,859，替换从 22.08 降至 17.20，插入从 19.07 降至 17.39。完整性提升没有伴随总插入上升，与分层召回意图一致，但缺少开关消融故不能把删除下降归因到单模块，参考为生产反馈字幕而非独立逐字稿也限制了解读。

编辑耗时在 35 档共 19.9 小时上盲法测量，15 名职业字幕员参与，不告知系统来源且同一资产两版分给不同人，无人同时看到同一内容两版。记录每会话编辑时长并折算为每节目小时的分钟数，方向越低越省人工，该口径为实际人时而非神经代理指标。

| Metric | WhisperX | CAST | Δ |
| --- | --- | --- | --- |
| Edit rate | 254.2 | 221.9 | –32.3 min/h |
| Total edit time | 84.4 | 73.7 | –10.7 h |

CAST 需 221.9 min 每节目小时，对照 WhisperX 为 254.2 min，减少 32.3 min 每节目小时，降幅 12.7%，总耗时从 84.4 h 降至 73.7 h，节省 10.7 h。中位分别为 225.7 与 255.1 min 每节目小时，四分位距分别为 206.3 至 235.9 与 236.6 至 276.3，35 档全胜无平局，Wilcoxon 配对符号秩检验 p 为 5.8×10−11。折合每节目小时约 3.7 h 对 4.2 h，在任方案每小时多耗近半小时人工。

#### 公开长音频的删除换插入权衡

公开 3 套只报 WER 但拆出删除替换插入每 1,000 词，可检验分层召回在无音乐效果床时的代价。阅读时先看删除下降是否大于插入上升，再看净 WER 增益与内部 1.63 点的差距，注意参考为逐字稿而非字幕，音乐床缺失使该对比只测长音频鲁棒性而非最难条件。

| Corpus | Del/1k WX | Del/1k CAST | Sub/1k WX | Sub/1k CAST | Ins/1k WX | Ins/1k CAST | WER (%) WX | WER (%) CAST |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CORAAL | 152.7 | 141.7 | 52.4 | 58.0 | 10.0 | 13.3 | 21.52 | 21.30 |
| Earnings-22 | 68.0 | 56.2 | 50.7 | 50.6 | 21.7 | 27.8 | 14.04 | 13.46 |
| Rev16 | 69.8 | 58.5 | 45.1 | 47.9 | 15.8 | 22.6 | 13.07 | 12.90 |

CORAAL 上 WER 从 21.52% 到 21.30%，删除从每 1,000 词 152.7 到 141.7，替换从 52.4 到 58.0，插入从 10.0 到 13.3。Earnings-22 上 WER 从 14.04% 到 13.46%，删除从 68.0 到 56.2，替换从 50.7 到 50.6，插入从 21.7 到 27.8。Rev16 上 WER 从 13.07% 到 12.90%，删除从 69.8 到 58.5，替换从 45.1 到 47.9，插入从 15.8 到 22.6。3 套各移除约 11 个删除，代价是增加 3.3 至 6.8 个插入，而内部插入还下降 1.7，净增益仅 0.17 至 0.58 点。删除对编辑更贵，因漏词需听音找回而多余词可目视删除。

#### 阶段行为的漏斗与歌词稀疏性

阅读残留漏斗条形图时可从上到下跟踪终端残留如何被四道门逐级压缩，横轴为残留音频分钟数，纵轴为门名称，条旁数字为剩余量。最长的浅色条为起点，最短的深色条为最终进入解码的量，两者对比直观显示设防强度，该分布覆盖全部 100 资产。

![原论文 Figure 2：Illustration of residual admission process of the segmentation stage across 100 assets.](/audio-paper-digest-blog/images/papers/2611.31055/figure-2-35f6d7dadee41aea.png)

*论文图 2：终端残留经四道门压缩后剩余音频量的漏斗分布（原论文 Figure 2）。*

终端残留 725.2 min，经时长窗剩 634.5 min，经可懂词剩 97.5 min，经语音确认剩 24.8 min，经裁剪突发剩 6.6 min。可懂词门砍掉最多，说明大量残留无可辨词，声学门与裁剪进一步只留最可信突发。该漏斗来自同一 100 资产的器械运行，无帧级语音语言音乐幻觉标签，故为行为测量而非检出精度召回，不支持把删除下降直接归因到残留路径。

阅读歌词柱状图时可先看横轴每资产标记段数与纵轴资产数，再对比 0 段与 1 段两根柱子的高度。柱顶数字为资产数，右侧长尾为多段资产，可判断歌词分路影响面广但单资产量小，该分布覆盖全部 100 资产，45 个受影响资产的多数仅含一段，符合音乐段落稀疏的先验。

![原论文 Figure 4：Statistics of lyrics classification stage of the CAST pipeline across 100 assets.](/audio-paper-digest-blog/images/papers/2611.31055/figure-4-a87fc15d8652a06e.png)

*论文图 4：每档资产歌词标记段数分布多数仅含一段影响面广量小（原论文 Figure 4）。*

55 个资产无标记，27 个有 1 段，8 个有 2 段，4 个有 3 段，6 个有 4 段以上。近半数资产需走歌词转写，但多数仅一段，说明专用转写器只动小量音频却覆盖不少资产。这种稀疏性支持独立分路的工程选择，若把演唱混入通用解码，欠转写会集中损害这些资产的字幕完整性。

#### 四档检测阈值与耗时分布

四档配置共用同一分割模型，仅以后处理阈值逐级放宽，读懂残留漏斗先要看清每档门限如何设防。横向对比触发阈值与最短语音静音保持的放宽幅度，纵向对照在 Tesla T4 单卡上累计的检测耗时，可判断更宽松的找回是否带来成比例的计算负担。该配置覆盖同一批资产的器械运行，耗时仅计检测器本身而不含后续语义与声学确认，第三档非凑整数值为实际装机状态的如实记录。

|  | Probability | Probability | Minimum (s) | Minimum (s) |  |
| --- | --- | --- | --- | --- | --- |
| Level | onset | offset | speech | silence | Compute |
| 1 | 0.850 | 0.550 | 0.300 | 0.350 | 0.48 h |
| 2 | 0.820 | 0.500 | 0.160 | 0.200 | 0.84 h |
| 3 | 0.810 | 0.481 | 0.055 | 0.098 | 0.84 h |
| 4 | 0.750 | 0.400 | 0.050 | 0.060 | 0.83 h |

从首档到末档触发阈值与最短保持同步下调，最短语音保持从 0.300 降至 0.050，最短静音保持从 0.350 降至 0.060，说明深档对短促低能量语音更宽容。检测耗时首档约 0.48 h，其余三档各约 0.83 h 至 0.84 h，深档单档耗时明显高于首档但三档之间基本持平，宽松找回以额外计算为代价。第三档阈值非凑整为历史调参残留的如实装机值，耗时为凑整显示故分档之和不必等于凑整总量，该表只计时检测器本身而不含后续语义与声学门限的开销。

### 结论成立的前提缺失的消融与工程选型建议

#### 方法假设与证据缺口

结论只在英文流水线内成立，无多语转写路径，重口音英语可能被语言门移除，移除音频中西班牙语最长也提示了该风险。比较对象仅为在任 WhisperX，未对外部商业系统。100 资产结果附着于选择标准与器械运行，参考为人工生产反馈字幕而非独立逐字稿，早期用户验收参考由 CAST 输出编辑而来可能偏向 CAST，两类参考的编辑来源均未独立确立。阶段遥测无帧级标签，残留与修复缺开关消融，故整体删除下降不能指派给任一模块，删除计数也不度量连续缺失段落数，重叠说话人转写超出范围。

附带的用户验收在 8 个标题共 277 min 与 41,579 词上 pooled 比较，CAST 小写去标点 WER 从 8.73% 到 6.91%，删除从每 1,000 词 36.7 到 21.5，插入从 21.5 到 23.2，7 个标题 CAST 胜出，My Lottery Dream Home 含重串话口音出现替换 46.3 对 33.9 与 WER 15.85% 对 12.89% 由 WhisperX 胜出。听查发现 House Hunters International 中 CAST 找回的 is so important 被参考遗漏而计为插入，说明参考上限会污染插入计数，但不抵消真实幻觉。

#### 部署代价与复现核对

运行代价方面，全级联在单卡 NVIDIA L4 上占约 9 至 12 GB 显存，平均每音频小时耗 27.4 min 计算，宿主内存为紧约束，约 1.5 小时内节目需 16 GB，更长需 32 GB，L4 在 FLEX_START 排队下的可用性为主要基础设施风险。修复虽仅触发 0.61%，但 18 次切分搜索评估 156 个候选，中位 7 个，最大 29 个，最大对应 95 s 段，开销波动明显。Gemini 在两诊断资产五次运行中 1.6% 至 2.6% 残留改变存留判断，经收紧提示加 Silero 佐证加裁剪后合并段数一致，但样本 n 为 2 仅示遏制。生产切后仅约 5 至 10 个可用观测，不足以估计编辑影响与 fleet 可靠性，原文不做生产结果断言。

复现需区分三件事，代码权重系统可运行并非同一承诺，原文未披露代码权重数据演示的公开状态，仅给出 pyannote 与 MMS-LID-4017 的第三方链接。自有 100 资产不可发布，公开 3 套可支持复现，附录给出四档阈值、残留参数、Gemini 提示词原文、转写与修复设置。工程上若节目含重音乐效果床、口音串话且能接受小幅插入上升换大幅删除下降，可尝试该形状，复现第一步应在固定 worker 数下跑公开集配对验证删除换插入，再补缺失段落对齐评审与开关消融，并保持下游键嵌套兼容与失败保留原文的不对称策略。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.31055v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（系统技术报告）：创新 16% · 严谨 14% · 实验 20% · 清晰 8% · 影响 16% · 复现 6% · 工程 20%（开源上限加分 +0.6）

- 核心优势：100资产配对WER从6.99%降至5.36%、SubER从14.72%降至11.18%，95个资产WER更低且删除减少33.79%。

- 核心优势：35资产19.9小时盲法后编辑率从254.2降至221.9分钟每节目小时，35资产全部更快且Wilcoxon检验p为5.8×10-11。

- 核心优势：冻结Whisper large-v3下构建分层VAD残余准入与廉价到昂贵语言门级联，并在单张L4上给出显存与算力实测。

- 主要短板：残余准入与重复修复均无匹配开关消融，无法隔离分层VAD与修复各自的因果贡献。

- 主要短板：SubER从14.72%到11.18%按原始数值计算约24.1%，与表内及一处正文23.31%存在算术矛盾。

- 主要短板：未提供CAST自身代码与权重链接且60.46小时自有语料明确无法发布，属完全闭源。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
