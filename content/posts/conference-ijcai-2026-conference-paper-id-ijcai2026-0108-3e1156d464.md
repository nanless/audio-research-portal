---
title: "Controlling Decision Drift in Multimodal Sentiment Analysis with Missing Modalities"
date: 2026-11-28
draft: false
description: "针对缺失补全带来的生成偏置与不可靠模态主导融合带来的融合偏置，本文提出两级参照对齐流程，在表示级与决策级分别引入完整模态与原型参照，并在 CMU-MOSI 与 CMU-MOSEI 的完整模态评测中取得 86.28% 与 85.88% 的准确率，代价是增加模板检索与原型匹配开销且细粒度缺失组合的可核验数字有限。"
tags: ["多模态学习", "鲁棒性", "语音", "多模态情感极性分析"]
categories: ["ijcai-2026 论文"]
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "以两级参照约束控制缺失模态下的判定漂移"
paper_digest_original_title: "Controlling Decision Drift in Multimodal Sentiment Analysis with Missing Modalities"
paper_digest_workbench_source_kind: conference
paper_digest_workbench_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0108"
paper_digest_workbench_source_sha256: "2345a30e13ce4b72c806c9b80fded33b6abea566f5caff1798197b6fd08f5740"
paper_digest_workbench_record_url: "https://ijcai.org/proceedings/2026/108"
paper_digest_workbench_pdf_url: "https://ijcai.org/proceedings/2026/0108.pdf"
paper_digest_workbench_public_url_availability: available
paper_digest_abstract_status: unavailable
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对缺失补全带来的生成偏置与不可靠模态主导融合带来的融合偏置，本文提出两级参照对齐流程，在表示级与决策级分别引入完整模态与原型参照，并在 CMU-MOSI 与 CMU-MOSEI 的完整模态评测中取得 86.28% 与 85.88% 的准确率，代价是增加模板检索与原型匹配开销且细粒度缺失组合的可核验数字有限。"
paper_digest_reader_sections: [{"heading":"缺失与不可靠模态为何让情感判定发生漂移","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"两级参照对齐如何组织三段数据流","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"表示级补全怎样被约束在共享情感空间","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"原型库与两阶段投票如何压制不可靠判定","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"完整模态与跨数据集评测呈现何种优势与边界","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"假设边界、复现核对与工程选型建议","index":6,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Qingdao Institute of Software, College of Computer Science and Technology","Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software"],"name":"Chenglizhao Chen"},{"affiliations":["Qingdao Institute of Software, College of Computer Science and Technology","Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software"],"name":"Yuchen Cao"},{"affiliations":["Qingdao Institute of Software, College of Computer Science and Technology","Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software"],"name":"Xinyu Liu"},{"affiliations":["Qingdao Institute of Software, College of Computer Science and Technology","Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software"],"name":"Mengke Song"},{"affiliations":["Qingdao Institute of Software, College of Computer Science and Technology","Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software"],"name":"Guisheng Zhang"},{"affiliations":["The Hong Kong University of Science and Technology (Guangzhou)"],"name":"Xiaomin Yu"}]
paper_digest_abstract_sha256: null
paper_digest_sidecars: {"citation.bib":{"sha256":"9cf521642a866a782d347336e7ecd0cf1f3e7d5dc70da5f45984a19cba95c806","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e1156d46468c09ecb20874d/citation.bib"},"citation.json":{"sha256":"95c37a1545d564e23d020202499a94f1f0dcfbed437995e6e8eb8a862cbc7c13","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e1156d46468c09ecb20874d/citation.json"},"citation.ris":{"sha256":"234dc470b5d497e97d6c0ae8221f33d6f4cd2cab968638b8633fdb070bed50bd","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e1156d46468c09ecb20874d/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0ff7eac8e81b794e24848fa2de365a64803558efb09358b0551c1427657dbe7c","url":"/audio-research-portal/client/papers/2026-11-28/conference-3e1156d46468c09ecb20874d/rethink-context.json"}}
paper_digest_paper_id: "conference:ijcai:2026:conference-paper-id:ijcai2026-0108"
paper_digest_source_kind: conference
paper_digest_conference_id: "ijcai-2026"
paper_digest_conference_name: "ijcai-2026"
paper_digest_doi: "10.24963/ijcai.2026/108"
paper_digest_conference_doi: "10.24963/ijcai.2026/108"
paper_digest_conference_record_url: "https://ijcai.org/proceedings/2026/108"
paper_digest_conference_pdf_url: "https://ijcai.org/proceedings/2026/0108.pdf"
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "eb3176aaa90a697784216d4964678ef67f0176789578c0a653da29d7793aecef"
paper_digest_api_reader_article_sha256: "313b24fe0a8b6e41b524ba75a73aa6f5605f75cb29ecac62ebfd4e1ebe33f8fd"
paper_digest_api_reader_plan_sha256: "0b28b0343dfd35d593de52bb50989fe2a15514ae70f669367fd91d6f972d78ca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "21f5252f5878c86275a520c923337f919d73a0fdff5fd7f04454d01559bdb71e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4486c1262f4a9819e18636a059c9e3ba81c28067c76b739732e103bcb28a395f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e7b39f6cfa920f4bcc6527ba76a038b201c49ac948acb254968cd2f4025f7bf6"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a119b0e71491da12e176a3a05f066e17df35acbbfc0a8667420f60e060a4ad79"
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
paper_digest_tags_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"}]
paper_digest_primary_method: "多模态学习"
paper_digest_conference_structure: pdf-visual-tables-v2
paper_digest_publication_view_contract: "conference-publication-figure-view"
paper_digest_publication_view_schema_fingerprint: "ac79a977940c8e16d3275ff1fdbec1a412d4c933980f42b010f1149c955a812a"
paper_digest_publication_view_raw_page_sha256: "28c651a747b9b9ce47f152d8a908b104512d1dccf3fa14b578394047fe3cd9e0"
paper_digest_publication_view_derivation_sha256: "bd901cc0e9e6520531b47b0f713b0ea2fa81af33bf810d5a4d398b6778776d84"
paper_digest_publication_view_article_sha256: "820b3d5e8407cc8d184d138f06c4c50116002b8e7b60d4f23e9bb96b4e02f1e5"
---

# 📄 以两级参照约束控制缺失模态下的判定漂移

> 英文题目：*Controlling Decision Drift in Multimodal Sentiment Analysis with Missing Modalities*

> 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0108`
> DOI：`10.24963/ijcai.2026/108`
> Track：IJCAI 2026




> 来源为官方会议 PDF（布局增强抽取）；表格结构与图片依据原页抽取与像素核验，PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://ijcai.org/proceedings/2026/108) · [官方 PDF](https://ijcai.org/proceedings/2026/0108.pdf)

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-research-portal/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-research-portal/papers/?concept=method.multimodal-learning)
- **信号**：[语音](/audio-research-portal/papers/?concept=signal.speech)
- **研究重点**：[鲁棒性](/audio-research-portal/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

评分：**6.3/10** | 创新 6.7/10 | 技术严谨 7.1/10 | 实验充分 7.6/10 | 清晰度 6.5/10 | 影响力 3.9/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Chenglizhao Chen：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Yuchen Cao：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Xinyu Liu：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Mengke Song：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Guisheng Zhang：Qingdao Institute of Software, College of Computer Science and Technology；Shandong Key Laboratory of Intelligent Oil & Gas Industrial Software
- Xiaomin Yu：The Hong Kong University of Science and Technology (Guangzhou)

## 📌 核心摘要

**问题与瓶颈：** 多模态情感分析以文本、声学和视觉三路信号为输入，以二分类情感标签为输出，需在语句级对齐条件下融合异质线索。现有缺失模态补全路线常由可见模态直接生成缺失特征，但各模态表达机制与情感动态不同，生成特征易偏离真实分布并误导预测，形成生成偏置。即使模态齐全，噪声、遮挡或异常表达仍会造成质量不均衡，不可靠模态在融合中被过加权并将预测推离正确目标，形成融合偏置，两类偏置本质均为模态可靠性退化导致的决策漂移，缺乏跨组合稳定的参考约束。

**核心思路与方法架构：** 与直接生成缺失原始信号并参与融合的路线相比，TLRA 即两级参考对齐框架保留三路独立编码与融合预测结构，增量在于引入特征层与决策层两级稳定参考，将补全目标由信号重建改为情感结构补偿，并以原型投票抑制不可靠决策。沿一条样本看，文本经 BERT 得到 H_l，声学经 Librosa 得到 H_a，视觉经 OpenFace 得到 H_v，可用模态经独立模态编码器映射为共享情感空间特征 F_m，同时经查询编码器得到查询特征，并以完整模态样本构建参考结构。查询特征经池化为全局向量后在可学习模板库中按相似度检索加权为模板上下文，再按一致性权重融合为补全表示，并经对齐损失向完整模态参考靠拢，从而把不同缺失组合约束到同一情感空间。决策层为每模态维护正负类原型，先以软引导将特征向高相似原型平滑，再在原型稳定后以多数投票替换少数不一致模态并融合输出，编码器以预训练初始化，对齐与融合模块端到端更新，原型库随机初始化后在线更新，论文未说明流式约束与采样率细节。

**关键实验与核心代价：** 在 CMU-MOSI 完整模态条件下，本文方法 ACC 为 86.28，高于次优 MECAM 的 85.80，F1 为 86.24，高于 MECAM 的 85.80，在 CMU-MOSEI 完整模态条件下，本文方法 ACC 为 85.88，高于次优 UEFN 的 85.67，F1 为 85.86，高于 UEFN 的 85.76，四格均为同表同列最高。缺失模态比较覆盖音频、视觉、文本单模态及 AV、AL、VL 双模态组合，论文报告在多数组合下更好或相当，并在严重缺失下退化更小。关键消融显示 CMU-MOSI 上全模态 AVL 组合由基线 ACC 78.51 变为完整模型 86.28，移除模态编码约束的对照由 85.25 回落至 84.32，证实两级对齐缺一不可。跨数据集上 MOSEI 训练 MOSI 测试 ACC 为 82.16，高于 DLF 的 80.18，MOSI 训练 MOSEI 测试 ACC 为 79.91，高于 DLF 的 74.77，但跨域数值低于域内数值。代价方面，模板检索与原型匹配随模板与原型数线性增长，主计算仍在模态编码，论文未提供实测时延、吞吐或显存数据，本任务为分类评测，未涉及 MOS 类听感指标。

**适用边界与深读导览：** 结论成立前提为已对齐的语句级三模态输入与二分类阈值划分，未覆盖未对齐长视频、连续情感强度回归、多语种口音及强噪声遮挡下的失效形态，也未验证实时部署成本，跨域仍有下降故不宜视为域不变。需深究双路径编码与模板加权公式可查阅方法概述和架构，需核对完整模态、跨数据集与消融数值可查阅实验结果，需复现超参与缺失项可查阅细节详述与开源详情。

## 🔗 开源与复现资源

- 论文所列链接：<https://github.com/LiuXY3366/TLRA> → <https://github.com/liuxy1005/TLRA> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 缺失与不可靠模态为何让情感判定发生漂移

多模态情感分析的输入是同一话语的 3 路信号：文本内容、声音语调与面部视觉，输出是二分类情感标签。原文按情感分数阈值把样本划为负类与非负类，用准确率与 F1 分数衡量，两个指标方向均为越高越好。理想情况下 3 路证据互相补充，但在真实采集里，背景人声、运动模糊、光照变化、遮挡或传感器故障都会让某一路段缺失或质量下降。

第一类困难是生成偏置。许多已有做法在缺失时用可用模态去生成缺失模态的特征，以维持完整的多模态结构。但文本、声音与视觉的表达机制与时间动态并不一致，生成的音频或视觉特征可能偏离真实分布。论文举例中，文本为类似无聊的陈述，若补出的音频特征漂移，就会把融合表示推向错误的语义区域，直接误导最终判定，偏离程度越大误导越明显。

下面这张对照图把两种偏置与本文思路放在同一版式里，阅读时可以先区分左侧的问题展示与右侧的解决展示，再看箭头与文字标注的对应关系。该图没有坐标轴与曲线，而是用分栏与图标表达因果，重点在于生成与融合两条失误路径如何被两处参照阻断，理解该对应关系后再进入后文三段式流程会更加顺畅。

[![原论文 Figure 1：Illustration of generation bias, fusion bias, and Two-Level Reference Alignment.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cfab707554e1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/cfab707554e1/figure-1.png)

> **图片来源：** 原论文 PDF 第 1 页，本文讨论 Figure 1（完整原页；图注未完整抽取，以原页为准）。

*论文图 1：生成偏置、融合偏置与两级参照对齐思路对照示意（原论文 Figure 1）。*

该图下半部分为虚线大框，内部左侧列出文本、视觉与音频三块嵌入，中间经过查询编码器与完整编码器得到 \(F_T\)、\(F_V\) 与 \(F_A\)，再经过可学习模板进入正负原型库。右侧用 \(B_P\) 与 \(B_N\) 表示正负原型，并用红色投票箭头连接，下方用笑脸图标对照真实标签与预测标签。底部两段分别标注结构对齐与情感对齐，各配两条绿色对号说明，分别对应统一空间进入与模板对齐、情感库参照与投票修正不一致。

第二类困难是融合偏置。即使 3 路输入齐全，各路质量仍不均衡。含噪声或表情异常的模态可能在融合时被赋予过高权重，把融合表示拉离正确目标。论文把缺失与不可靠统一看成可靠性退化，而不是为每种噪声单独设计修正模块。因此需要的不是更大的生成器，而是能在表示与决策两个层面提供稳定参照的约束机制，用完整模态样本约束表示漂移并用原型检索约束决策偏移，这也是后文 2 级框架的出发点。

### 两级参照对齐如何组织三段数据流

本文框架名为 2 级参照对齐，包含模态编码、表示级对齐与决策级对齐 3 段。编码段只对可用模态建模，不在输入端凭空重建缺失信号；表示级把不完整特征约束到由完整样本定义的共享情感空间；决策级再对各模态的类别判定做一致性筛选，压制不可靠模态。训练时完整样本同时承担参照构建与监督作用，测试时只走可用模态的查询与补全路径。

下面这张总体流程图是理解张量走向的关键，建议沿从左到右的主箭头阅读。左侧为编码，中部为表示级对齐，右侧为决策级对齐，底部图例区分了对齐特征、查询特征、补全特征、混合特征与正负原型等符号。图中同时画出训练专用监督线与缺失分支，需要区分实线主路径与虚线反馈线，特别留意训练专用监督只在训练阶段出现。

[![原论文 Figure 2：Overall pipeline of TLRA. The framework consists of three stages: (A) Modality Encoding, (B)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/fc2ab66651cb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/ijcai-2026/fc2ab66651cb/figure-2.png)

> **图片来源：** 原论文 PDF 第 3 页，本文讨论 Figure 2（完整原页）。

*论文图 2：三段式总体流程：模态编码、表示级对齐与决策级对齐的衔接关系（原论文 Figure 2）。*

左侧 A 栏上方为完整输入，下方为缺失输入，分别经 BERT、Librosa 与 OpenFace 得到 \(H_l\)、\(H_a\) 与 \(H_v\)。中间 B 栏上下各有一套模态编码器与查询编码器并标注参数共享，上路输出对齐特征，下路经池化得到查询向量 \(q\) 并检索模板 \(T\)，再经加权求和得到补全特征。中部红色虚线框标注决策级回路，右侧 C 栏展示原型库从随机初始化经多次迭代变为正负明确，再经匹配与投票得到预测，底部图例对各类特征与原型符号作出区分。

以一条话语为例，文本分支经语言模型得到序列表示，音频与视觉分支经各自工具得到声学与面部表示，三者记为 \(H_l\)、\(H_a\) 与 \(H_v\)。原文未披露采样率、帧长、帧移、特征维度与模板库大小，因此无法给出每一步的具体张量形状，只能确认逻辑顺序：先独立编码，再经共享情感空间的模态编码器得到对齐特征，经一维卷积与查询编码器得到查询特征，最后对缺失路做模板引导补全。推理时不执行输入级重建，主要计算仍在编码部分，对齐模块只带来有限的检索与匹配开销。

### 表示级补全怎样被约束在共享情感空间

表示级对齐包含双路径编码与模板引导补全。完整路径用模态编码器从完整输入建立稳定的情感空间，缺失路径用查询编码器为不完整输入构造可检索的查询特征。两条路径解耦后，不完整表示可以在同一空间内被拉回，而不必假设所有模态齐全。原文强调补全目标是恢复稳定的情感结构，而不是合成原始模态细节，以减少引入模态特有的生成噪声。

具体而言，可用模态表示经一维卷积与查询编码器得到查询特征，再经时间池化得到全局查询向量。模板库保存一组可学习的共享空间向量，计算查询向量与每个模板的内积相似度并经归一化得到权重，加权求和形成模板上下文。两者之间的余弦相似度再决定自适应融合系数，查询向量与模板上下文按该系数混合得到补全表示。系数接近 1 时更信任样本自身，接近 0 时更依赖模板参照，从而在样本特异性与参照稳定性之间取得平衡。

表示对齐损失同时约束两类特征：观测模态的查询特征向完整模态特征靠拢，缺失模态的补全特征也向完整模态特征靠拢。原文以两个权重系数分别控制这两项，取值均为 1.0。直觉上这相当于用完整样本作为语义锚点，把不同模态组合的中间表示拉到同一结构下，从而抑制由缺失引起的表示漂移，并为后续决策级融合提供更可靠的输入。

需要如实说明的是，原文未给出共享空间维度、一维卷积核宽、池化方式细节与模板数量，也未披露音频帧率与文本序列长度。因此本节只能讲清变换顺序与约束意图，不能复述每一帧维度变化。训练时该损失与决策级损失联合优化，梯度同时更新编码器、查询路径与模板库，而完整路径的参照特征起到稳定锚点的作用。不同模态组合因此被鼓励遵循一致的情感结构，缺失越严重时这种锚定作用越关键。

### 原型库与两阶段投票如何压制不可靠判定

决策级对齐先为每个模态维护正负两类原型，分别代表积极与消极的类别中心。原型库随机初始化后在训练中在线更新，无需额外聚类或外部先验。每个样本的对齐特征与其对应类别原型计算余弦相似度，再按相似度加权混合样本特征与类别结构，形成动量可控的更新。这种设计让原型从粗糙初始逐步演化为稳定的类别锚点，同时保持对样本变化的鲁棒性。

由于原型在早期尚不稳定，框架采用两阶段策略。第一阶段为软原型引导，不做硬投票，只把各模态特征与其更相似的正负原型混合，保留可靠模态信息的同时把不稳定特征拉向更平滑的原型结构。第二阶段原型已较紧凑可分，每个模态先在原型空间内给出正负判定，再以多数投票确定高置信情感方向，不服从多数的模态被压制并替换为与投票情感一致的原型特征，避免不可靠模态主导融合。

决策级损失包含三项：模态内正负原型分离损失要求同模态正负原型保持间隔；跨模态原型对齐损失要求同情感跨模态原型互相靠近；任务监督损失约束融合后的最终预测与真实标签一致。原文权重中前两项系数为 0.7，任务项系数为 0.2，并说明经单因素轮换验证选择，在合理范围内保持稳定，增益主要来自对齐机制而非敏感调参。间隔与对齐两项分别保障类间可分与跨模态一致，任务项则守住预测正确性。

从执行路径看，第一阶段保留更多模态特异信息，第二阶段施加更强的跨模态一致性。投票只在第二阶段启用，使原型形成先于强一致性约束。这种先稳定参照再做硬筛选的顺序，是理解该模块的关键，也是后文原型相似度随训练轮次变均匀的现象基础，早期差异较大而后期趋于一致。

### 完整模态与跨数据集评测呈现何种优势与边界

评测在两个话语级情感基准上展开，任务均为二分类，指标为准确率与 F1 分数，方向均为越高越好。训练使用 1 张 NVIDIA RTX 4090 GPU，基于 PyTorch 实现，批大小为 16，共训练 100 个周期。优化器采用 AdamW，初始学习率为 1×10−4 并配合余弦退火，对齐权重在全部实验中保持不变。跨数据集评测采用在一个数据集训练、在另一个数据集测试的方式，考察说话人、话题与表达风格变化下的泛化能力。

#### 评测协议与公平性前提

为保证比较公平，框架执行顺序固定为模态编码、表示级对齐与决策级对齐 3 个阶段。模态编码只处理当前可用的文本、声学与视觉信号，分别由 BERT 预训练语言模型、Librosa 声学特征工具与 OpenFace 视觉分析系统得到表示，不在输入端补造缺失模态。表示级采用双路径设计，完整路径建立稳定情感空间，缺失路径经一维卷积与查询编码得到查询特征，再池化为全局查询向量并在可学习模板库中加权汇聚，最后以余弦一致性权重融合查询与模板，只补足情感结构而不重建原始细节。

决策级在统一情感空间中维护每个模态的正负类原型，原型随机初始化并在训练中在线更新，无需额外聚类。早期采用软引导，将对齐特征与正负原型比较并取相似度较高者为参照，按一致性分数融合为混合表示后送入融合模块。后期原型趋于紧致可分时引入投票机制，各模态在原型空间中给出类别判断，少数服从多数确定高置信方向，不一致模态被与投票方向一致的原型特征替代。训练目标包含模态内分离、跨模态一致与最终情感监督，权重取 1.0、1.0、0.7、0.7 与 0.2，经单因素轮换验证保持稳定。

下表聚焦完整模态下 CMU-MOSI 的二分类准确率与 F1 分数，比较本文方法与同期多个情感分析方法的差异，数值为百分比。为控制篇幅仅展示精简子表，列出 ALMT、UEFN、MECAM 与本文方法 4 组，其余基线见原文完整 Table 2（本精简表未列出）。阅读时先看指标行再横向比较各列，重点关注本文方法是否在两行均保持领先。

| Set | Metric | ALMT [2023] | UEFN [2025] | MECAM [2025] | Ours |
| --- | --- | --- | --- | --- | --- |
| CMU- MOSI | ACC | 84.91 | 85.11 | 85.80 | 86.28 |
|  | F1 | 85.01 | 85.03 | 85.80 | 86.24 |

在当前展示的 CMU-MOSI 同列可比行中，本文方法准确率为 86.28%，F1 分数为 86.24%，两项均为最高。第二位均为 85.80%，对应 MECAM 方法。其余所展示基线在准确率上为 84.91% 与 85.11%，在 F1 分数上为 85.01% 与 85.03%，分别对应 ALMT 与 UEFN。该对比说明即使模态齐全，决策级参照仍能改善融合可靠性，但结论仅限当前展示行列，增益更偏向一致性修正而非信息补全。

下表聚焦完整模态下 CMU-MOSEI 的二分类准确率与 F1 分数，比较条件与上一表相同，数值为百分比。本精简子表列出 UEFN、MECAM、M-BERT 与本文方法 4 组，其余基线见原文完整 Table 2（本精简表未列出）。阅读时同样先区分准确率行与 F1 分数行，再看各方法在两行是否同时保持稳定，避免只看单行得出片面判断。

| Set | Metric | UEFN [2025] | MECAM [2025] | M-BERT [2025] | Ours |
| --- | --- | --- | --- | --- | --- |
| CMU- MOSEI | ACC | 85.67 | 85.20 | 84.82 | 85.88 |
|  | F1 | 85.76 | 84.80 | 84.71 | 85.86 |

在当前展示的 CMU-MOSEI 同列可比行中，本文方法准确率为 85.88%，F1 分数为 85.86%，仍为最高。准确率第二位为 85.67%，F1 分数第二位为 85.76%，均对应 UEFN 方法。其余基线分布在 84.71% 至 85.20% 区间，具体为 MECAM 的 85.20% 与 84.80% 以及 M-BERT 的 84.82% 与 84.71%。与缺失严重的情形相比，完整模态下的提升幅度相对温和，未胜出项分布分散，说明参照机制主要抑制不可靠证据的主导作用。

#### 补充视角与评测边界

下表从另一视角补充 CMU-MOSEI 的完整模态结果，展示 ALMT、DMD、LNLN 与本文方法的对照，数值为百分比。本精简子表与上一表行相同列不同，共同覆盖更多基线，其余列见原文完整 Table 2（本精简表未列出）。该视角有助于观察不同方法在同一测试集上的稳定性差异，特别是中等规模基线与本文方法的差距是否在两项指标上同时存在。

| Set | Metric | ALMT [2023] | DMD [2023] | LNLN [2024] | Ours |
| --- | --- | --- | --- | --- | --- |
| CMU- | ACC | 85.62 | 84.62 | 84.14 | 85.88 |
| MOSEI | F1 | 85.69 | 84.62 | 84.53 | 85.86 |

在当前展示的同列可比行中，本文方法准确率为 85.88%，F1 分数为 85.86%，两项均为最高。第二位为 ALMT 的 85.62% 与 85.69%，其余所展示基线为 DMD 的 84.62% 与 84.62% 以及 LNLN 的 84.14% 与 84.53%。该结果与前两表共同表明，本文方法在完整模态下保持领先，但各表第二位分属不同方法，说明基线强弱随子表列选择而变化，评价时须结合完整表格理解。

原文还报告跨数据集评测与原型相似度随训练的变化趋势，指出从一个数据集迁移到另一个数据集时退化幅度相对较小，原型在早期差异较大而后期趋于一致。但原文未报告方差、置信区间与人工听测，评测均为自动分类指标，也未系统划分输入级噪声类型与缺失率曲线。部分基线在跨数据集条件下出现大幅下降，提示分布偏移仍是主要挑战，因此不能推断在任意传感器故障分布下均成立。

### 假设边界、复现核对与工程选型建议

#### 适用前提与证据边界

本文结论成立依赖 3 个前提。第一，训练阶段需要足够数量的完整模态样本来构建模板库与原型库，若完整样本稀少，参照本身可能不稳定。第二，缺失与不可靠被统一视为可靠性退化，方法不针对特定噪声建模，因此在高度结构化的缺失模式或极端遮挡下是否依然有效，原文未单独验证。第三，所有证据均为自动分类指标，没有人工听测与置信区间，跨数据集的相对优势不能直接换算为线上体验增益。

#### 2 级参照的分工与执行过程

模态编码只处理可用信号，不在输入端补足缺失，避免引入不可靠假设。文本、声学与视觉分别经 BERT 预训练语言模型、Librosa 声学特征提取器与 OpenFace 视觉分析系统得到表示。表示级采用双路径，完整路径建立稳定情感空间，缺失路径经一维卷积与查询编码器得到查询特征，再池化为全局查询向量，在可学习模板库中按相似度加权汇聚模板上下文，并以余弦一致性权重融合查询与模板，只补足情感结构而不重建原始细节。

决策级在已稳定的表示上进一步压制不可靠模态。每个模态为正负两类各维护一个原型，原型随机初始化并在训练中按动量在线更新，无需额外聚类。早期采用柔性引导，按特征与正负原型的余弦相似度选择参照并加权混合，保留模态特有信息。后期原型趋于紧致可分后启动投票，少数服从多数确定情感方向，偏离多数的模态用投票方向的原型特征替代。类内分离、跨模态一致与任务监督三项损失共同约束原型结构与融合预测。

2 级参照搭配的原因在于单一层次难以同时处理生成偏差与融合偏差。表示级约束使不同缺失组合进入同一情感空间，为决策级提供可比输入，否则不可靠预测会直接主导融合。决策级原型投票则弥补表示残余不一致，在质量不均衡时压制少数偏离模态。这种分工将缺失与不可靠统一为可靠性退化问题处理，不为特定噪声设计修正模块，因此在完整输入下仍能改善融合一致性，并在跨数据集的说话人与话题变化下保持更稳定的情感结构。

#### 复现核对与工程选型

复现核对方面，实验在 CMU-MOSI 与 CMU-MOSEI 两套基准上进行，前者包含 2,199 条语句，后者包含 23,453 条语句。论文写明训练使用 PyTorch 与 1 张 NVIDIA RTX 4090 GPU，优化器为 AdamW，学习率为 1×10−4 并配合余弦退火，批大小为 16，共训练 100 个周期，损失权重取 1.0、1.0、0.7、0.7 与 0.2。模态特征维度、模板库大小、原型更新动量与两阶段切换轮次等细节原文未披露，论文脚注给出代码链接，原文未说明权重与脚本完整程度。

效果判断以二分类情感的准确率与 F1 分数为准，样本按情感分数阈值划为负类与非负类，前者衡量总体判对比例，后者兼顾精确率与召回率的平衡。在缺失组合下两项指标共同上升才视为稳定改善，单项波动不能证明偏差已消除。跨数据集训练与测试交换说话人与话题分布，退化幅度更小才说明学到可迁移的情感结构，而非依赖特定数据集的表达习惯。

工程选型上，若部署场景以偶发缺失为主，该框架比输入级重建更轻量，主要开销仍在文本、声学与视觉编码，模板检索与原型匹配只随模板与原型数量线性增长。若场景以持续高质量完整输入为主，完整模态下的提升幅度相对有限，需要权衡引入原型库与两阶段训练的复杂度。若缺失率极高或完整样本不足，建议先评估参照质量，再决定是否启用第二阶段的硬投票压制，避免在原型未稳定时过早筛选。

## ⚙️ 关键实现与复现规格

- **音频信号与流式规格**：原文未披露采样率、帧长、帧移与特征维度，仅说明使用 BERT、Librosa 与 OpenFace 提取文本、声学与视觉表示，对齐模块为线性检索开销
- **训练与评测数据**：CMU-MOSI 含 2,199 条话语来自 93 个视频片段，CMU-MOSEI 含 23,453 条话语来自 1,000 余位说话人，均采用对齐后的多模态标注与二分类评测划分
- **算力与训练耗时**：使用 1 张 NVIDIA RTX 4090 GPU 基于 PyTorch 训练，批大小为 16，共训练 100 个周期，编码器采用预训练初始化并端到端学习对齐与融合模块
- **核心超参数与配置**：优化器为 AdamW，学习率为 1×10−4 并采用余弦退火，损失权重为 1.0、1.0、0.7、0.7 与 0.2，经单因素轮换验证保持稳定
- **推理速度与部署开销**：原文未披露延迟与吞吐数值，仅说明模板检索与原型匹配随模板与原型数量线性增长，主要计算仍在模态编码，对齐模块为有限额外开销
- **开源产物与协议状态**：论文脚注给出代码链接，归属记录为第三方，原文未说明代码、权重与数据脚本的完整提供情况
- **附录与补充材料要点**：原文未披露附录证明，补充消融以正文表格形式给出，许可限制与失效案例原文未系统说明

<details>
<summary>📎 论文与评分元数据</summary>

- 评分：**6.3/10** | 创新 6.7/10 | 技术严谨 7.1/10 | 实验充分 7.6/10 | 清晰度 6.5/10 | 影响力 3.9/10 | 开源 0.0/10 | 可复现 5.2/10 | 工程/实践 4.8/10
- 排名：前50% | 文档类型：方法研究
- 会议身份：`conference:ijcai:2026:conference-paper-id:ijcai2026-0108`
- 会议来源：[官方记录](https://ijcai.org/proceedings/2026/108) · [官方 PDF](https://ijcai.org/proceedings/2026/0108.pdf)
- DOI：`10.24963/ijcai.2026/108`
- Track：IJCAI 2026

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

- 维度权重（方法研究）：创新 24% · 严谨 18% · 实验 22% · 清晰 8% · 影响 14% · 复现 7% · 工程 7%（开源上限加分 +0.5）

- 核心优势：在CMU-MOSI与CMU-MOSEI完整模态四格均为同表最高，分别超越次优MECAM与UEFN的可核对领先。

- 核心优势：双向跨数据集转移均为最高且保留DMD崩溃退化负结果，严重缺失下退化更小显示可迁移情感结构。

- 核心优势：在CMU-MOSI上经No.0至No.11逐级叠加模态编码与两级对齐的直接受控消融，No.10回落证实缺一不可。

- 主要短板：声称资源受限可部署与有限开销却未提供任何延迟吞吐显存功耗实测，工程主张与验证脱节。

- 主要短板：缺模板数K、间隔δ、原型动量、一维卷积结构、数据划分与种子等关键配置，影响复现完整度。

- 主要短板：未报告统计显著性检验与置信区间，原型相似度分析仅定性描述无具体数值，误差分析不足。

---

[← 返回 ijcai-2026 论文汇总](/audio-research-portal/posts/conference-ijcai-2026/)
