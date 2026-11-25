# 音频研究门户（Audio Research Portal）

> 面向语音、音乐与声学 AI 研究者的开源中文论文阅读门户，由 **[音频研究工作台（Audio Research Workbench）](https://github.com/nanless/audio-research-workbench)** 驱动构建与发布。

**在线访问**：<https://nanless.github.io/audio-research-portal/>

---

## 本站提供什么

- **每日音频研究日报**：持续追踪 arXiv 与 HuggingFace 语音、音乐、音频大模型、声学信号处理论文，提供来源封存的中文深度精读与原图解析。
- **国际顶会论文集**：系统归档 ICASSP、INTERSPEECH、ICLR、ICML 等顶会音频论文总览与细分研究专题。
- **九维研究方向与离线论文库**：按 400 项九维受控词表（任务、方法、模态、评测条件等）多级导航与组合筛选，支持导出 Markdown / CSV / BibTeX / RIS。
- **双端原生工作台数据底座**：静态生成内容寻址快照（`client/details/manifest.json`）与单篇侧车引用文件，供 macOS / Android 原生 **音频研究工作台** 离线同步阅读。

## 仓库分工与常用命令

本仓库仅负责页面存储、Hugo 站点构建、全站静态校验与 GitHub Pages 部署；论文抓取、来源封存、深度分析、发布审查与推送统一在主仓库 [audio-research-workbench](https://github.com/nanless/audio-research-workbench) 执行（详见 [docs/publishing.md](docs/publishing.md)）。

```bash
# 运行站点脚本单元测试与内容审计
npm test

# 执行完整内容审计、Hugo 构建、索引分片与产物核验
npm run build:verify
```

## 配套文档

- [发布与上线核验](docs/publishing.md)
- [每日选读封面机制](docs/daily-edition-cover.md)
- [单篇客户端侧车协议](docs/paper-page-client-sidecars.md)
- [九维研究方向说明](docs/research-directions.md)
