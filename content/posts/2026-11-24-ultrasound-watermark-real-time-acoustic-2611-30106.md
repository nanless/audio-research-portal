---
title: "Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones"
date: 2026-11-24
draft: false
tags: [音频水印, 语音伪造检测, 多模态学习, 信号处理]
categories: [论文速递]
description: "针对电话中实时语音冒充难以用纯音频离线方法阻断的问题，本文用手机超声感知发音运动并经跨模态融合生成动态水印，在非同步伪造下达到 1.00 面积而在同步模仿下回落至 0.84 至 0.88，代价是对强滤波与低码率压缩显著敏感且依赖通话双方安装同一应用。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.30106"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "超声水印如何把发音动作绑进通话语音以实时抵御语音诈骗"
paper_digest_original_title: "Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.30106v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.30106v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.30106v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "cbc73274c47fbd5c437b03f452ad95d0291094f5a9ad2c3685220ebf41c4afcf"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.signal-processing","label":"信号处理"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对电话中实时语音冒充难以用纯音频离线方法阻断的问题，本文用手机超声感知发音运动并经跨模态融合生成动态水印，在非同步伪造下达到 1.00 面积而在同步模仿下回落至 0.84 至 0.88，代价是对强滤波与低码率压缩显著敏感且依赖通话双方安装同一应用。"
paper_digest_reader_sections: [{"heading":"通话中语音冒充为何难以用纯音频手段实时阻断","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"超声水印双端流水线把发音动作绑进可听语音","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"连续波超声解调与超声引导的跨模态融合如何生成水印","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"对抗对齐训练与滑动窗口流式推理如何兼顾因果与延迟","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"六类伪造与电话信道失真下的检测率与音质代价","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"同步模仿与强压缩下的失效边界与复现选型建议","index":6,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Bloomberg L.P., New York, New York, USA"],"name":"Renzhi Hao"},{"affiliations":["University of Massachusetts Amherst, Amherst, Massachusetts, USA"],"name":"Shirui Cao"},{"affiliations":["Indiana University Bloomington, Bloomington, Indiana, USA"],"name":"Yizhu Wen"},{"affiliations":["University of Maryland, Baltimore County, Baltimore, Maryland, USA"],"name":"Rishav Gupta"},{"affiliations":["University of Maryland, Baltimore County, Baltimore, Maryland, USA"],"name":"Dharani Nadendla"},{"affiliations":["Amazon, San Diego, California, USA"],"name":"Mehran Kafai"},{"affiliations":["Indiana University Bloomington, Bloomington, Indiana, USA"],"name":"Hanqing Guo"},{"affiliations":["University of Maryland, Baltimore County, Baltimore, Maryland, USA"],"name":"Dong Li"}]
paper_digest_abstract_sha256: "2c1f5236354dd2e0e372c662675125919bb9bf70ed7a5271d1328d4fbf78ec18"
paper_digest_sidecars: {"citation.bib":{"sha256":"5fb1bbd45870178ef6d744a9f89280a8f14bf711eedd5e9f47ff1cb0cbba4679","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30106/citation.bib"},"citation.json":{"sha256":"adb9f1c8f9f5bd0e078809522244c2040521c58346fdbb6e63d69a7359b6ed14","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30106/citation.json"},"citation.ris":{"sha256":"f8b22d46da4cacf3b800351299b0302cd8f3b28369181b8a21268c57feb99843","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30106/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2cae62da97fe3f52bd8f189733cd93e754127a19ae36afecf9da4dea1cf42cf0","url":"/audio-paper-digest-blog/client/papers/2026-11-24/2611-30106/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "502f149770c20bc8f28660fa7f98bbeaaaecaff2b5f8c6236663e323d34a595c"
paper_digest_api_reader_article_sha256: "c57f1854e58f5cc7edf404c27dc749cc76e2502cc83d9084f8940fa5d9263446"
paper_digest_api_reader_plan_sha256: "a71c595be219e671a87cfd96a8059961104ad36b5219901e7cdbb9203810e0f1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "04a493b778369f86ca13e377d55822fd81eb729d21ff3f6687583efd710746bc"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "20a80f2145f55db9aaa2cd10ce5869cf6f9f7d0101802833ea6b978db0ee5ffa"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a3686cb9ebf0c12edf8971e6aedbf35d8d479fd329290ed5dc5ce133618788dd"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3c6d8d531ce6f3d5fb983748bfeffefb723a1a1566b0bdd753500255671611fe"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 超声水印如何把发音动作绑进通话语音以实时抵御语音诈骗

> 英文题目：*[Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones](https://arxiv.org/abs/2611.30106v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频水印](/audio-paper-digest-blog/papers/?concept=task.watermarking)；[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-paper-digest-blog/papers/?concept=task.speech-spoofing)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 7.6/10 | 技术严谨 7.0/10 | 实验充分 6.2/10 | 清晰度 6.9/10 | 影响力 6.5/10 | 开源 3.0/10 | 可复现 5.8/10 | 工程/实践 7.6/10


## 👥 作者与机构

- Renzhi Hao：Bloomberg L.P., New York, New York, USA
- Shirui Cao：University of Massachusetts Amherst, Amherst, Massachusetts, USA
- Yizhu Wen：Indiana University Bloomington, Bloomington, Indiana, USA
- Rishav Gupta：University of Maryland, Baltimore County, Baltimore, Maryland, USA
- Dharani Nadendla：University of Maryland, Baltimore County, Baltimore, Maryland, USA
- Mehran Kafai：Amazon, San Diego, California, USA
- Hanqing Guo：Indiana University Bloomington, Bloomington, Indiana, USA
- Dong Li：University of Maryland, Baltimore County, Baltimore, Maryland, USA

## 📌 核心摘要

**问题与瓶颈：** 来电语音诈骗利用文本到语音与语音转换伪造熟人声音，任务输入为内置麦克风以 48 kHz 同步记录的可听语音与超声反射，输出为携带构音绑定水印的通话语音与被叫端帧级核验置信度，被叫方需在连续通话中实时判断当前语音是否来自真人实时发音。现有深度伪造检测多在离线或服务端分析声学伪影，电话编解码、回声与流式传输易抹除判别线索且难以容忍通话延迟。数字水印多在离线嵌入与核验，仅验证活体而不绑定身份时攻击者仍可用自己持机发音并注入合成的目标人语音，因而缺一种在常用智能手机上无需额外硬件、把语音与发音动作因果绑定的连续核验方法。

**核心思路与方法架构：** 核心直觉是只有真人发音时的超声反射才与语音在物理与时间上耦合，伪造语音难以在无真实构音运动时同时复现该耦合。通话时主叫手机持续发射基频 20 kHz、间隔 300 Hz 的 6 载频连续波超声，内置麦克风以 48 kHz 同步记录可听语音与超声反射。超声支路经有限冲激响应带通分离各载频并做正交解调，跟踪相位与幅度差分以抑制静态信道，拼接为 12 通道特征图，再经多分支时序网络与空洞卷积得到对齐音频隐空间的超声隐序列。语音支路经低通滤波并重采样至 16 kHz，残差卷积编码为保留音素与韵律的音频隐表示，超声引导的特征调制生成缩放与偏置并融合，轻量转置卷积解码出水印并按 \(x_w = x_a + \alpha w\) 嵌入。训练时生成器与检测器联合更新，通话时参数固定并以滑动窗口流式运行，被叫端检测器输出帧级对数几率经 Softmax 聚合为置信度，均方根门限 0.05 跳过静音，回放延迟补偿保持同步，端侧实现保证每段低于 200 ms。

**关键实验与核心代价：** 评估基于机构审查批准采集的 2.5 小时以上同步语音超声录音，含 22 位说话人、8 款手机与 4 种真实环境，每条切为 2 秒、48 kHz 片段。在该跨环境对照中实验室环境准确率 (Accuracy, Acc，越高越好 ↑) 为 1.00，高于家庭环境的 0.95，总平均为 0.97，同一量表上的条件对照完整可核对。在水印强度 \(\alpha = 1.0\) 时，对无超声与随机超声的回放或合成攻击，曲线下面积 (Area Under Curve, AUC，越高越好 ↑) 均为 1.00，假正例率 (False Positive Rate, FPR，越低越好 ↓) 为 0.01 或 0.00。把 2 秒真话中 \(r\) 比例替换为合成音而超声不变的部分合成测试中，当 \(r = 0.5\) 时本文攻击成功率 (Attack Success Rate, ASR，越低越好 ↓) 为 0.26，同期音频活体方法 Nes2Net 与 CodecFake 达 1.00，AASIST3 达 0.91。客观音质上水印语音感知语音质量 (Perceptual Evaluation of Speech Quality, PESQ，越高越好 ↑) 为 3.99，短时客观可懂度 (Short-Time Objective Intelligibility, STOI，越高越好 ↑) 为 0.922，尺度不变信噪比 (Scale-Invariant Signal-to-Noise Ratio, SI-SNR，越高越好 ↑) 为 25.6 dB，8 人被试内听测显示可懂度与干净语音相当且伪影可察觉度低。代价集中在强同步模仿与激进信道，AAC 可使 AUC 跌至 0.46，白盒大扰动下 ASR 趋近 1.0，旗舰机每 200 ms 片段生成约 15 ms - 24 ms、检测低于 8 ms，老旧机型合计仍低于 200 ms。

**适用边界与深读导览：** 结论成立要求主被叫同用该应用并经 IP 通话传输水印语音，覆盖办公室、户外、实验室、家庭环境以及 8 天 5 人的自然持机漂移，准确率保持 0.95 以上。尚未覆盖仅一端部署、低码率感知压缩、大扰动白盒优化与已加水印语音被二次加水印后同步模仿，此时接受率可达 0.46。若想深究调制与损失设计可查下文 3.1 节 - 3.2 节公式与训练流程，攻击强度、编解码与时延的完整对照可查 4.3 节 - 4.9 节表格与分析。

## 🔗 开源与复现资源

- 论文所列链接：<https://ultrasoundwatermark.github.io> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 通话中语音冒充为何难以用纯音频手段实时阻断

生成式语音已能以少量样本克隆目标音色，冒充亲属或主管在电话中催促转账或索取敏感信息，2024 年仅美国消费者因此类语音网络钓鱼损失超过 29.5 亿美元，人耳分辨合成与真实语音接近随机猜测。受害人需要在通话进行中实时判断对端是否可信，而不能依赖挂断后的离线分析，电话编解码、回声与噪声还会进一步抹掉合成痕迹。论文假设收发双方安装同一应用，类似 WhatsApp 或 FaceTime 的应用层通话，攻击者能拿到目标历史语音并用回放或合成发起实时呼叫，却无法远程复现目标口部运动与物理声学路径耦合的超声反射。

下表按是否通话中运行、是否需额外硬件、是否手机原生、能否抵御回放、合成转换与真人模仿以及用户负担比较 4 类既有路线，符号中对勾表示支持，叉号表示不支持，三角表示部分或条件支持。该对比覆盖深度伪造检测、离线音频水印、需传感器或交互的活体检测以及平台级溯源，为后文 3 层验证设计的动机提供依据，便于定位本文与最近基线的实质差异。

| Approach | In-call | No Extra | Phone | Replay | AI Synthesis | Live Human | User Effort | References |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | HW | Native | Attack | (TTS/VC) | Impersonation |  |  |
| Deepfake Detectors (ASVspoof, ML) | △ | ✓ | △ | △ | ✓ | ✗ | △ | (Yamagishi et al., 2021; Yi et al., 2022; Yi et al., 2023) |
| Audio Watermarking | ✗ | ✓ | △ | ✗ | △ | ✗ | ✓ | (Chen et al., 2023; Roman et al., 2024; Zong and others, 2025; Liu et al., 2025b; Singh et al., 2024) |
| Liveness Detection (sensors, protocols) | △ | Often | △ | ✓ | △ | ✗ | △ | (Zhang et al., 2017; Li et al., 2024; Shahid and Roy, 2023) |
| Provenance (platform-level) | ✗ | ✓ | ✓ | ✗ | △ | ✗ | ✓ | (DeepMind, 2024; OpenAI, 2024) |
| Our work: Ultrasound Watermark | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Low | - |

对比显示只有本文工作在全部维度取得支持且用户负担为 Low，深度伪造检测虽能发现合成痕迹但多为离线或服务端运行，经电话编解码后痕迹被抑制，回放与合成难以在通话中区分。数字水印多为离线嵌入与验证，无法证明语音来自通话时刻的真人，活体检测能确认有真人在场却无法确认声音身份，攻击者可自己对着手机说话同时注入他人合成语音。平台溯源缺乏与发音动作的物理绑定，因此需要把语音与实时构音运动耦合起来，用超声反射提供难以伪造的活体约束。

威胁模型据此划分 4 个递进场景，场景一仅控制语音的回放与合成，场景二在自有设备上产生任意无关口部动作形成随机超声，场景三用另一说话人读同一句话并以均方根能量对齐起点来模仿同步构音，场景四允许查询检测器、复刻架构训练替代模型或直接获取梯度做有界扰动。评估把回放与合成分别与 3 种超声条件组合成 6 类攻击，并以攻击成功率衡量被误判为合法的比例，检测阈值固定为 0.5，为后文水印强度与失真实验划定公平前提。

### 超声水印双端流水线把发音动作绑进可听语音

系统由主叫端水印生成器与被叫端水印检测器组成，主叫手机在通话中持续发射超声并用内置扬声器与麦克风采集口周反射，将运动特征与外发语音融合成随时间变化的动态水印，以人耳难察觉的方式嵌入后经 IP 通话传输。检测端分 3 层判定，先看是否遵循水印协议并可解码，再看是否存在发音动作引起的超声反射以确认真人实时说话，最后检验语音与观测到的运动是否一致。3 层分别对应格式合规、活体存在与跨模态一致性，任一层失败即视为不可信，从而同时覆盖回放、合成与真人模仿。

阅读框架图时先从左侧接收信号出发，沿上下两条支路分别追踪超声与可听语音的滤波与编码，再看中间融合与解码如何汇成水印信号，最后跟随右侧检测器从波形到帧概率再到判决的箭头。注意绿色生成器区域与蓝色检测器区域的分工，以及虚线框内融合模块在两类潜变量之间的位置，有助于理解双端如何协同完成实时验证。

[![原论文 Figure 2.：Overview of our proposed ultrasound watermark framework.](https://arxiv.org/html/2611.30106v1/ultrasound.png)](https://arxiv.org/html/2611.30106v1/ultrasound.png)

*论文图 2：左侧生成器双编码器融合超声与语音生成水印右侧检测器输出帧级概率并聚合判决（原论文 Figure 2）。*

图中左侧绿色区域为生成器，接收信号先分叉，上支经带通滤波得到超声信号并提取多普勒频移与幅度差，再经超声编码器输出蓝色立方体潜变量，下支经低通滤波与重采样得到可听信号并经可听编码器输出黑白潜变量，两者在虚线框标注的融合模块汇合后经解码器产生水印信号并与原语音相加。右侧蓝色区域为检测器，加水印信号经编码、转置卷积与逐帧概率头得到纵向橙色概率条，再经聚合得到合法或伪造二选一判决，红色叉与绿色勾标示阈值上下两侧，箭头方向完整呈现从波形到判决的数据流。

以 1 秒输入为例，麦克风以 48 kHz 采集约 48,000 个样点，其中同时包含超声反射与可听语音，超声支路经有限冲激响应带通与正交解调保留采样级运动细节并堆成 12 通道特征，可听支路经低通与线性插值重采样至 16 kHz 得到约 16,000 个样点，再经步进残差卷积压缩时间分辨率并升维成语音潜变量。两路潜变量经特征调制融合后由轻量转置卷积解码为水印并按强度叠加发送，检测端以类似编码器恢复时间分辨率并逐帧输出概率。与 AudioSeal 与 Encodec 这类纯音频编解码基线相比，改动在于新增超声感知分支与因果融合，保留语音为载体，部署时转 NCNN 与 Core ML 并经 IP 通话传输，全程无需外设且端到端延迟控制在 200 ms 以内。

### 连续波超声解调与超声引导的跨模态融合如何生成水印

超声分支要解决 3 个矛盾，构音运动发生在毫米与毫秒尺度，低帧率特征抓不住音素级变化，绝对谱形易被重放而运动导数难伪造，手机端又容不下非因果大模型。设计采用基频 20 kHz 间隔 300 Hz 的 6 载波连续波，手机以 48 kHz 同步记录超声反射与可听语音，两者天然同源对齐，为后续采样级跟踪提供物理基础。轻量有限冲激响应带通先分离各载波，再以余弦与正弦混频实现增量式解调，避免重量级时频变换。

#### 多普勒速度与距离变化如何从正交分量中提取

正交解调的目标是把每个载波反射跟踪到基带以便逐样点观察运动，记 \(x_{u_{i}}(t)\) 为第 \(i\) 个载波的反射分量，\(f_{i}\) 为其载频，\(t\) 为连续时间，\(I_{i}(t)\) 与 \(Q_{i}(t)\) 分别为同相与正交分量。下式给出余弦与负正弦混频的计算形式，混频后还需滑动平均抑制高频伪影，才能得到可用的基带包络。

\[I_{i}(t)=x_{u_{i}}(t)\cos(2\pi f_{i}t),\quad Q_{i}(t)=-x_{u_{i}}(t)\sin(2\pi f_{i}t).\]

该数学形式的物理直觉是把高频载波搬移到零频，静止信道变为直流偏置而口部运动变为缓慢时变包络，同相与正交两路正交基可无歧义表示任意相位。若手机完全静止且无发音，两路输出恒定，相位不再旋转，若嘴唇与下颌快速开合则相位快速进动，对应多普勒速度。两路结果直接送入反正切与模值运算得到瞬时相位与幅度，并为差分抑制静态反射做准备，运动越快则差分能量越大，静默时则趋于零。

由同相正交求瞬时相位与幅度的目标是解耦距离与能量，记 \(\phi_{i}(t)\) 为相位，\(A_{i}(t)\) 为幅度，反正切取双参数以保留象限，模值开方衡量反射强度。下式给出逐样点计算，计算后还需跨时间做差分以突出运动并抑制静态信道。

\[\phi_{i}(t)=\operatorname{atan}(Q_{i}(t),I_{i}(t)),\quad A_{i}(t)=\sqrt{I_{i}^{2}(t)+Q_{i}^{2}(t)}.\]

相位对微小距离变化敏感，其时间差分近似发音器官速度并呈现多普勒频移，幅度差分则反映反射体距离与朝向变化，两者差分后静态房间响应被相减抵消，只剩与发音同步的起伏。合法与同步模仿在绝对谱上可能接近，但差分波形在音节边界处仍显分歧，这正是难以仅从语音推断的活体线索。若完全无运动，差分趋于零而被判为静默，若为录音重放则差分与语音包络失配。6 个载波的相位差分与幅度差分拼成 12 通道特征，再经多尺度时序卷积与空洞卷积扩大感受野并投影为与语音潜变量对齐的超声序列。

#### 超声上下文如何在不掩盖语音的前提下注入水印

融合的目标是在保留语音为载体的同时注入运动约束，记 \(\mathbf{h}_{u}\) 为超声潜变量，\(\mathbf{h}_{a}\) 为语音潜变量，\(g_{\text{scale}}\) 与 \(g_{\text{shift}}\) 为两个时序 1×1 卷积，\(\sigma\) 为逐元 Sigmoid 函数，\(\gamma\) 与 \(\beta\) 为缩放与偏置场。下式给出调制后的融合表示 \(\mathbf{z}\)，其中 \(\odot\) 为哈达玛积，缩放被约束在温和范围内。

\[\mathbf{z}=(1+\gamma)\odot\mathbf{h}_{a}+\beta,\]

该调制的统计直觉是以语音为基底做条件仿射，缩放项被 Sigmoid 限制在 0 到 1 之间再加 1，因而增益被约束在 1 到 2 倍之间不会淹没音素结构，偏置项则叠加运动相关的偏移。若超声与语音同步，缩放与偏置随音节起伏形成可被检测器识别的时变指纹，若超声随机则调制与语音包络无关，解码出的水印在检测端呈现低概率。当水印强度 \(\alpha\) 趋于 0 时加水印语音退化为原语音，检测趋于随机，当 \(\alpha\) 增大至 1.0 时跨模态一致性更易分离但听感代价上升，融合输出直接送入轻量转置卷积解码为水印波形并叠加发送。

### 对抗对齐训练与滑动窗口流式推理如何兼顾因果与延迟

训练把语音视为声波与超声同源锁定的多模态事件，生成器对齐的真样本产生活水印，对未对齐的伪造组合产生失配水印，中间插入模拟电话退化的失真层，含低通、高通、带通、重采样、压缩、加噪、增益、平滑、回声与神经编解码。使模型在见失真与见伪造条件下同时学习可检测性与不可闻性，真假样本在每批中联合采样并行优化，避免只见单一分布导致的偏置。

训练与评测数据共 2,000 余条 2 秒 48 kHz 片段，其中 1,700 余条真实录音来自 22 位说话人，另含 150 条文本转语音与 150 条语音转换，按 80%、10% 与 10% 划分。模型在单张 NVIDIA RTX 5090 GPU 上以 FP32、批大小 16 训练 700k 步，采用 Adam 优化器，初始学习率 5e-4 带自适应调度，梯度裁剪范数 1.0，指数滑动平均衰减 0.99，检测阈值固定为 0.5。

#### 定位与对齐损失如何强制语音运动同步

总目标要在可检测、对齐与听感三者间权衡，记 \(\mathcal{L}_{\text{loc}}\) 为帧级定位损失，\(\mathcal{L}_{\text{align}}\) 为对比对齐损失，\(\mathcal{L}_{\text{percept}}\) 为感知损失，\(\lambda\) 为各自权重。下式给出加权求和，梯度经生成检测流水线回传并以裁剪与均衡器防止某一项主导训练，从而实现稳定高效优化。

\[\mathcal{L}=\lambda_{\text{loc}}\,\mathcal{L}_{\text{loc}}+\lambda_{\text{align}}\,\mathcal{L}_{\text{align}}+\lambda_{\text{percept}}\,\mathcal{L}_{\text{percept}}.\]

加权求和的直觉是把分类、表征与听感放在同一尺度优化，定位项迫使真假帧概率分开，对齐项迫使潜空间几何同步，感知项把修改拉回人耳不敏感区域。若感知权重过大，水印能量被压到零而检测趋于随机，若定位权重过大则引入可闻失真。训练中监控梯度范数并裁剪至 1.0，配合均衡机制使三项同步下降，这对应后文检测与对齐损失曲线训练与验证差距很小的稳定泛化，权重取定位 10.0、对齐 10.0 等数值即为该权衡的体现。

对齐损失的目标不是分类而是拉近同步表征并推远失配表征，记 \(\mathbf{h}_{a}\) 为语音隐特征，\(\mathbf{h}_{u}^{+}\) 为对齐超声，\(\mathbf{h}_{u}^{-}\) 为失配超声，均经 ℓ2 归一化，\(\cos\) 为余弦相似度，\(\delta\) 为间隔超参。下式给出对齐项与 hinge 失配项之和，前者最小化角度距离，后者仅惩罚超过间隔的失配相似。

\[\begin{aligned} \displaystyle\mathcal{L}_{\text{align}}= \displaystyle\underbrace{(1-\cos(\mathbf{h}_{a},\mathbf{h}_{u}^{+}))}_{\text{alignment term}} \\ \displaystyle+\underbrace{\max(0,\cos(\mathbf{h}_{a},\mathbf{h}_{u}^{-})-\delta)}_{\text{misalignment term}}, \end{aligned}\]

对比设计的直觉是非对称地塑造角度距离，对齐项在两向量同向时为零而反向时最大为 2，失配项仅当失配相似度超过间隔才惩罚，否则为零，从而避免把所有向量推到同一方向导致的坍缩。若间隔设得过小，轻微抖动即被判失配而误拒增加，若设得过大则失配也可保持较高相似而漏检增加。学到的同步几何使真样本在检测器处产生高帧概率而伪造产生低概率，训练结束时真阳性率达 0.93 而真阴性率达 0.99，远高于 0.5 随机基线，检测器据此在推理时统计超过阈值的帧比例作为全局置信度。

#### 滑动窗口与延迟补偿如何支撑连续通话

读滑动窗口图时先看左侧主叫波形上长度为 \(L_{b}\) 的缓冲如何以步长 \(t_{b}\) 逐次前移，再看彩色箭头如何把每窗最新片段拼成连续水印流，最后看右下帧概率曲线与阈值线的关系。右上小框给出缓冲与总延迟的符号定义，左下时间轴标出补偿延迟，有助于理解流式因果与实时界限。

[![原论文 Figure 5.：Sliding-window watermark generation and detection for real-time calls.](https://arxiv.org/html/2611.30106v1/img/sliding_window.png)](https://arxiv.org/html/2611.30106v1/img/sliding_window.png)

*论文图 5：滑动窗口按固定步长生成水印片段并在接收端补偿延迟后逐帧计算置信度（原论文 Figure 5）。*

图中左侧黑色波形为原始通话，上方黑色双箭头标出缓冲长度，下方黄蓝紫三色括号标出依次前移的窗口，每窗经生成器后仅取最新步长的彩色条带拼成水印流，箭头汇入中间虚线框后再送入浅蓝检测器。右上框明确缓冲窗由长度与步长组成，总延迟由传输、推理与步长 3 段相加，左下时间轴标出补偿延迟 \(t_{D}\) 后接收波形才进入检测，右下帧概率曲线以红色虚线为阈值，高于阈值的橙色竖线计为水印帧，低于则为可疑，静默帧经 0.05 均方根门限直接跳过以省算力。

下表给出每 200 ms 音频段在 9 款手机上的生成器与检测器平均耗时，单位为 ms，覆盖三星、谷歌、摩托罗拉、华硕与 iPhone 新老机型。该表区分生成器与检测器两列，前者含双编码器与解码器，后者为轻量推理，便于定位老机型瓶颈与语音门控的节省效果，可据此核对 200 ms 实时界限的满足情况。

| Phone Model | Generator (ms) | Detector (ms) |
| --- | --- | --- |
| Samsung Z Fold 7 | 19.27 | 1.28 |
| Samsung Z Flip 7 | 62.35 | 4.32 |
| Google Pixel 9 | 71.72 | 7.31 |
| Motorola Edge (2020) | 160.65 | 21.74 |
| Motorola Edge 5G UW | 148.48 | 19.39 |
| ASUS Zenfone 8 | 134.15 | 10.58 |
| iPhone 14 Pro Max | 23.54 | 7.21 |
| iPhone 16 Pro Max | 18.41 | 5.88 |
| iPhone 17 Pro | 15.28 | 4.72 |

表中旗舰机如 iPhone 17 Pro 生成器仅 15.28 ms 而检测器 4.72 ms，三星 Z Fold 7 为 19.27 ms 与 1.28 ms，老旧摩托罗拉 Edge 2020 则升至 160.65 ms 与 21.74 ms，但合计仍在每段 200 ms 预算内，验证连续运行可行。生成器因双编码器与解码器开销显著高于检测器，后者在多数机型低于 8 ms。代价是老机型余量较小，若后台负载加重可能逼近界限，需配合语音门控跳过静默以维持稳定，检测端还需剔除初始未加水印段并对瞬时置信度去极值平均以抑制抖动。

### 六类伪造与电话信道失真下的检测率与音质代价

评测数据包含 2,000 余条 2 秒 48 kHz 片段，其中 1,700 余条来自 22 位说话人在 8 部手机与家、办公室、实验室、户外 4 种环境下以免提与贴耳两种模式朗读 10 句诈骗话术，150 条文本转语音与 150 条语音转换沿用相同文本并以代表性录音为参考。按 80%、10% 与 10% 划分且伪造语音与超声组合在划分内独立构建以防泄漏，每条加水印语音在检测前随机叠加一种通话失真。检测侧报告准确率、真阳性率、假阳性率、攻击成功率与受试者曲线下面积，质量侧报告感知语音质量、短时客观可懂度与尺度不变信噪比，数值越大越好。编解码转码采用独立流水线与工作点，基线真阳性率与假阳性率与失真实验不同，跨表比较需注意前提差异。

#### 6 类伪造与自适应扰动在何种预算下失效

下表汇总水印强度 \(\alpha\) 为 1.0 时 6 类攻击的面积与假阳性率，行按仅音频、随机超声与同步超声三档划分，列为可听输入是回放还是合成，平均行便于观察整体。同步行是全表最难情形，假阳性率显著高于其他行，需重点关注其与平均值的分化。

| Attack Type | AUC | FPR |
| --- | --- | --- |
| Audio-only + replay | 1.00 | 0.01 |
| Audio-only + synthesis | 1.00 | 0.01 |
| Random ultrasound + replay | 1.00 | 0.00 |
| Random ultrasound + synthesis | 1.00 | 0.00 |
| Synchronized ultrasound + replay | 0.84 | 0.37 |
| Synchronized ultrasound + synthesis | 0.88 | 0.30 |
| Average | 0.95 | 0.12 |

表中仅音频与随机超声四行面积均为 1.00 且假阳性率不超过 0.01，即使水印强度降至 0.2 仍保持可分，说明无关运动无法伪造有效签名。同步超声将面积拉低至回放 0.84 与合成 0.88，假阳性率升至 0.37 与 0.30，为全表代价最尖锐处，提高强度至 0.8 与 1.0 可显著拉开分布而在 0.2 时接近随机，表明残余的语音运动不一致在足够能量下仍可检出。平均面积 0.95 与平均假阳性率 0.12 掩盖了这种分化，实际部署需按最难的同步行而非平均值评估风险。

下表列出白盒与灰盒在扰动预算 \(\varepsilon\) 从 5e-4 到 5e-2 变化时的攻击成功率，列区分 Adam、投影梯度与自动投影梯度 3 种优化器以及替代与迁移两阶段。该表可排除梯度掩蔽假象，便于核对小预算与大预算的分界，以及灰盒迁移何时才具威胁。

| ε | White-box ASR Adam | White-box ASR PGD | White-box ASR APGD | Grey-box ASR Surrogate | Grey-box ASR Transfer |
| --- | --- | --- | --- | --- | --- |
| 5e-4 | 0.07 | 0.07 | 0.07 | – | – |
| 1e-3 | 0.27 | 0.31 | 0.31 | 0.08 | 0.06 |
| 2e-3 | 0.75 | 0.75 | 0.76 | 0.35 | 0.16 |
| 5e-3 | 0.97 | 0.98 | 0.98 | 0.88 | 0.61 |
| 1e-2 | 0.99 | 0.99 | 0.99 | 1.00 | 0.81 |
| 2e-2 | 0.99 | 0.98 | 0.99 | 0.99 | 0.86 |
| 5e-2 | 1.00 | 1.00 | 1.00 | 0.92 | 0.91 |

表中白盒三列在各预算下最多相差 0.04，排除梯度掩蔽假象，小预算 1e-3 时成功率约 0.27 至 0.31，大预算 5e-3 以上迅速升至 0.97 以上并逼近 1.00，说明足够强的白盒扰动可绕过检测。灰盒迁移在 2e-3 以下仅 0.16，至 1e-2 才达 0.81，更大预算达 0.91，表明复刻流程的知识主要在可闻的强扰动下才具迁移性。高斯噪声在所有强度成功率为 0，查询蒸馏在 100 至 500 次查询下低于 0.05 且替代与目标输出相关系数低于 0.16。实时语音转换虽无需查询但最快模型仍带来 3.6 倍延迟开销且破坏同步，强攻击均需 10 倍以上运行时，难以满足直播延迟。

读部分合成曲线时注意横轴为合成占比从 1.0 向 0.1 递减，纵轴为攻击成功率，蓝色、红色与绿色为 3 个纯音频基线，橙色为本系统。该图把 2 秒真语音中连续 2r 秒替换为合成并保留超声不变，对比合成片段缩短时哪条曲线先上升最能体现耦合价值。

[![原论文 Figure 11.：ASR under partial synthesis attacks.](https://arxiv.org/html/2611.30106v1/asr_synth_mixed.svg)](https://arxiv.org/html/2611.30106v1/asr_synth_mixed.svg)

*论文图 10：合成占比下降时纯音频方法攻击成功率上升而本系统保持较低水平的对比曲线（原论文 Figure 11）。*

图中横轴自左向右合成占比由 1.0 降至 0.1，纵轴为攻击成功率，绿色、蓝色与红色基线随合成片段缩短快速爬升，在占比 0.5 时已达 1.00、1.00 与 0.91，在 0.1 时三者均为 1.00，说明纯音频方法对含大量真实片段的局部伪造完全失效。橙色本系统曲线始终贴近底部，在 0.5 时为 0.26，在 0.1 时为 0.30，未随真实比例增加而恶化，原因是被替换片段缺失对应活体构音而破坏跨模态一致性。该构造中任何大于 0 的占比即视为攻击，成功率越低越好，本系统以语音运动耦合弥补了纯音频痕迹检测的盲区。

#### 电话失真与编解码压缩如何侵蚀低能量水印

下表按干净、稳健、中等与困难 4 组列出常见通话失真的面积、真阳性率与假阳性率，涵盖重采样、压缩、加噪、增益、平滑、回声与神经编解码。该分组便于观察哪类变换保留水印而哪类消除水印，以及真阳性率与面积下降是否同步。

| Group | Distortion | AUC | TPR | FPR |
| --- | --- | --- | --- | --- |
| Clean | None | 1.00 | 0.93 | 0.01 |
| Robust | Resampling / MP3 | 1.00 | 0.93 | 0.01 |
|  | Additive Noise | 1.00 | 0.93 | 0.01 |
|  | Amplitude Scaling | 1.00 | 0.93 | 0.01 |
|  | Smoothing / Low-pass | 1.00 | 0.92 | 0.01 |
| Moderate | Echo | 0.97 | 0.80 | 0.02 |
|  | Encodec | 0.95 | 0.58 | 0.00 |
| Challenging | Band-pass Filter | 0.76 | 0.29 | 0.03 |
|  | High-pass Filter | 0.54 | 0.02 | 0.04 |
|  | AAC Compression | 0.46 | 0.01 | 0.01 |

表中干净条件下面积 1.00，真阳性率 0.93 而假阳性率 0.01，重采样、MP3、加噪、增益与平滑低通五项几乎无变化，说明常见失真被训练时失真层覆盖。回声与神经编解码为中等退化，面积仍高于 0.95 但真阳性率分别降至 0.80 与 0.58。带通、高通与 AAC 压缩为困难组，面积依次为 0.76、0.54 与 0.46，真阳性率跌至 0.29、0.02 与 0.01，表明激进谱滤波与心理声学压缩会剪除低能量水印成分，这是为保持不可闻而付出的固有代价，部署时需避开此类强压缩链路。

下表给出代表性网络电话编解码的转码结果，列含采样率、码率、真阳性率与假阳性率，基线行标示该独立流水线的工作点。该表便于在同一工作点下比较高低码率 Opus 与窄带编码的差异，注意其基线与上一失真实验不同。

| Codec | Rate | Bitrate | TPR | FPR |
| --- | --- | --- | --- | --- |
| Baseline | – | – | 0.98 | 0.19 |
| G.711 μ/A-law | 8 kHz | 64 kbps | 0.98 | 0.19 |
| Opus (96 kbps) | 16 kHz | 96 kbps | 0.97 | 0.20 |
| G.722 | 16 kHz | 64 kbps | 0.45 | 0.06 |
| Opus (48 kbps) | 16 kHz | 48 kbps | 0.08 | 0.50 |
| Opus (16 kbps) | 16 kHz | 16 kbps | 0.07 | 0.45 |
| Speex | 16 kHz | 16 kbps | 0.06 | 0.01 |

表中基线真阳性率为 0.98 而假阳性率为 0.19，G.711 与 96 kbps 高码率 Opus 基本保持该水平，真阳性率分别为 0.98 与 0.97。G.722 降至 0.45，48 kbps Opus 降至 0.08 且假阳性率升至 0.50，16 kbps Opus 与 Speex 均跌至 0.07 以下，说明高保真编码保留水印而低码率压缩大幅削弱水印。由于该实验采用独立流水线与阈值工作点，基线假阳性率高于失真实验，不能跨表直接比较绝对值，只能在表内比较保真与压缩之间的相对退化趋势，低码率下检测已接近失效。

#### 听感质量与多天多位置下的稳定性表现

读主观听感箱线图时先看横轴左侧可懂度与右侧伪影可察觉度两组，蓝色为干净语音而橙色为加水印语音，纵轴为 1 至 5 分。该实验为 8 位被试的被试内设计，在安静室内以双手机模拟通话随机交错播放，重点比较两组均值标注与箱体位置是否错开。

[![原论文 Figure 12.：Subjective perception of watermarking.](https://arxiv.org/html/2611.30106v1/user_box_6.svg)](https://arxiv.org/html/2611.30106v1/user_box_6.svg)

*论文图 11：加水印前后可懂度均值相同而伪影可察觉度仅轻微上升的听感分布（原论文 Figure 12）。*

图中左侧可懂度两箱均值均为 4.5，箱体均位于 4 分以上且须线延伸至 5 分，说明加水印前后可懂度相当，右侧伪影可察觉度均值由干净的 1.2 升至加水印的 2.2，箱体仍位于 2 分附近低位，表明伪影轻微可察但不影响理解。客观指标与之呼应，加水印语音感知语音质量为 3.99，尺度不变信噪比为 25.6 dB，短时客观可懂度为 0.922。该主观结论仅在安静与固定强度条件下成立，样本仅 8 人且未报告大样本平均意见分与置信区间，不宜外推至嘈杂街道或强压缩通话。

自然变化方面，4 种环境准确率分别为办公室 0.97、户外 0.98、实验室 1.00 与家庭 0.95，总体 0.97，信噪比在 26.40 dB 至 29.15 dB 之间波动，说明背景与混响差异未破坏检测。连续 8 天 5 位被试在免提与贴耳模式下自然持机，以口中心到手机底边中心的三维向量记录距离与角度，每 100 ms 采样位置按天着色，逐批检测置信度持续处于高位，表明系统对持机姿态、用户与日期漂移具有稳定性，但该结论限于受控的校准棋盘格前站立场景，行走或遮挡等更剧烈变化尚未覆盖。

### 同步模仿与强压缩下的失效边界与复现选型建议

最尖锐的未胜项来自双重水印，攻击者拿到目标已加水印语音再以同步超声做 2 次加水印时，随机超声仍被完全拒绝而同步超声使攻击成功率达 0.46 且面积降至 0.89，说明一旦泄露带水印的通话录音并能配准构音，现有会话无关水印会被覆盖。同步攻击下 0.30 至 0.37 的假阳性率也指向跨说话人超声模式的部分相似，当前说话人无关表征偶发误接受。论文提出以每次会话新鲜随机数为缓解，并设想说话人条件检测、轻量说话人嵌入与更具判别力的特征学习，但均未在本文验证，不宜视为已有能力。

失真侧的代价同样明确，带通、高通、AAC 与低码率 Opus 显著削弱低能量水印，这是不可闻性与鲁棒性的固有权衡，未来需多频带与自适应嵌入。自适应侧小预算尚安全而大预算白盒接近 1.00，强攻击虽因 10 倍以上延迟难以实时跟随通话，但在离线伪造场景仍构成威胁。部分合成残余成功率约 0.26 至 0.30 表明仍有漏检，听感证据仅来自 8 人小规模评分而无大样本平均意见分与置信区间，神经代理指标与真实电话网多跳转码的覆盖也不完整，评价时应同时披露这些缺口。

复现需区分三件事，演示页当前可用并可对照干净与加水印样本聆听可懂度与伪影差异，源代码与数据集声明接受后发布因而尚不能直接运行权重与完整训练代码，系统级可运行还需自行实现移动端滤波、重采样与模型导出。若要选型，仅当通话双方可安装同应用且能接受旗舰机数十毫秒而老机型近 200 ms 开销时值得尝试，复现第一步宜在两部手机间跑通 48 kHz 超声收发与 0.05 门控的 2 秒分段流水线，再补同步超声攻击、低码率编解码与小占比部分合成三项验证，任一项不达标即不宜宣称通话级安全。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.30106v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v2

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：以20kHz起6载频连续波差分跟踪构音速度与距离变化并经超声引导调制融合语音，物理因果绑定设计完整可核验。

- 核心优势：在无超声与随机超声下AUC均为1.00且部分合成ASR 0.26显著低于同期音频活体方法1.00，跨环境平均准确率0.97。

- 核心优势：在9款手机实测端侧生成检测延迟，旗舰机15ms级、老旧机合计仍低于200ms，支撑流式通话部署。

- 主要短板：多组件调制与损失主张缺乏直接消融，同步语料仅2.5小时22人10句英文且8人听测无置信区间盲测协议与显著性检验。

- 主要短板：流式缓冲Lb步进tb平均窗N对齐间隔δ及编码器层数隐藏维参数量均未披露，复现步骤不完整。

- 主要短板：代码模型权重与数据集均无公开链接与协议，仅承诺接收后发布，核心产物当前不可获取。

---

[← 返回 2026-11-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-24/)
