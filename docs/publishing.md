# 门户页面生成、审查、推送与上线

本页说明页面怎样从音频研究工作台主仓库（`nanless/audio-research-workbench`）进入本站（音频研究门户 `nanless/audio-research-portal`），以及本站的静态构建、零信任核验、部署和上线验收。生成、审查和推送在 `$HOME/code/github_repos/audio-research-workbench` 执行；本站保存已审页面、资源和站点代码，并负责静态构建、产物校验与 GitHub Pages 部署。来源准备、分析、Reader 写作和费用规则见主仓库的 `AGENTS.md` 与 `docs/three-workflows.md`，本页不重复。

## 三个阶段

在音频研究工作台主仓库依次运行：

```bash
npm run blog:generate -- --date YYYY-MM-DD
npm run blog:review -- --date YYYY-MM-DD
npm run blog:push -- --date YYYY-MM-DD
```

`blog:generate` 生成页面、引用文件、研究资料和生成清单，不提交也不推送；生成入口收到 `--push` 会直接报错，要求改用三个阶段。`blog:review` 只读审查生成清单里的最终文件，保存逐页内容 SHA、审查协议、当时依据的博客 Git 提交和隔离 Hugo 构建结果，不修改已审文件。`blog:push` 只提交审查凭证允许的精确文件，推送后核对远端 `main` 的提交 ID 与本地一致。

审查按“相对路径 + 页面内容 SHA”复用已通过的记录；页面内容变了就要重新审查，不能直接修改审查凭证或把旧凭证套到新文件上。生成清单里的元数据、审查协议或 Hugo 运行时变化时，即使页面字节没变，也要重新生成本批审查凭证。

## 本站构建与零信任核验

在门户仓库运行：

```bash
npm test
npm run build:verify
```

`npm test` 运行 `tests/` 下的全部 Node 单元测试，并执行 `scripts/audit-content.js`（校验标签首尾污染、`paper_digest_arxiv_id` 重复基线以及全部站内 `/posts/...` 链接）。`npm run build:verify` 依次执行 `npm run audit:content`、`npm run build` 和 `npm run verify`：

- **`build`（`scripts/build-site.js`）**：
  1. **Hugo 前置门禁与聚合**：依次运行 `scripts/verify-tags-v2.js`、`verify-tags-v3.js`、`verify-fullsite-tags.js`，运行 `scripts/select-edition-feature.js` 生成 `data/edition-features-auto.json`，再经 `scripts/lib/research-corpus.js` 单次共享语料扫描生成 `data/related-graph-auto.json`（跨论文推荐图谱）与 `data/sota-hubs-auto.json`（8 大音频 SOTA 专题导航与 15 个重点来源/顶会统计）。
  2. **Hugo 编译**：调用 `hugo --minify --noBuildLock --cleanDestinationDir --printPathWarnings --panicOnWarning`（`hugo.yaml` 固定 `enableGitInfo: false`，避免 CI 浅克隆漂移旧文 `Lastmod`；本地默认 `GOMEMLIMIT=3GiB`、`GOMAXPROCS=2`、`HUGO_NUMWORKERMULTIPLIER=1`）。
  3. **Hugo 后置导出**：依次运行 `scripts/shard-search-index.js`（切分 `client/index.json` 与兼容入口 `index.json` 的有序 SHA 绑定分片）、`scripts/export-desktop-details.js`（导出 `public/client/details/` 内容寻址快照与净化 HTML 供 macOS / Android 原生应用同步）、`scripts/export-resource-badges.js`（导出 `public/client/signals/resource-badges.json`）、`exportPublicRelatedGraph()`（导出 `public/data/related-graph.json`）以及 `scripts/build-pagefind.js`（若安装 `pagefind` 则构建 `public/pagefind/`，并按实际结果回写全站页面 `data-cmdk-pagefind-ready="1|0"` 门控属性）。
- **`verify`（`scripts/verify-build.js public`）**：逐项核验首页 `<head>` 与固定 Hugo 0.160.1 版本、每日选读封面、主 RSS（`index.xml`）及 6 路精选专题 RSS（`feeds/high-score.xml`、`topic-asr.xml`、`topic-tts.xml`、`topic-enhancement.xml`、`topic-music.xml`、`topic-audio-llm.xml`，禁绝嵌套 `index.xml`）、新旧搜索索引分片一致性、客户端脚本安全（禁用 `innerHTML`/`eval`、拒绝外部 CDN）、单篇论文工具与客户端侧车 SHA 对账、`client/details/` 磁盘文件精确集合对账、`client/signals/resource-badges.json` RFC 2396 HTTPS 校验、`data/related-graph.json` 图谱与无自环校验、8 个 SOTA 专题页实时聚合校验（`requireLive: true`）、编译期 KaTeX 公式回退门禁（自 `2026-11-26` 起新文章零 `math-fallback`，历史总回退不超过 212 处基线）、`data-cmdk-pagefind-ready` 就绪一致性，以及 `scripts/verify-page-navigation.js` 的全站链接、锚点与旧前缀 `/audio-paper-digest-blog/` 零泄漏校验。

CI 的 `.github/workflows/hugo.yaml` 固定 Hugo 0.160.1（extended）和 Node 22（`build` 任务配额 `GOMEMLIMIT: 6GiB`、`GOMAXPROCS: 4`），且该文件在主仓库与校验体系中受 `WORKFLOW_PROFILE` SHA 锁定，严禁随意改动。`unit` 任务运行 `npm test`，`build` 任务运行 `npm run build:verify`；非拉取请求时，构建任务才上传 Pages 产物。`deploy` 任务要等 `unit` 和 `build` 都成功后才部署。拉取请求只运行检查和构建，不上传产物，也不部署。

## 每日音频播客三路径同步

当音频研究工作台生成并发布每日论文音频播客（`publish-daily-podcast.js --portal-repo`）时，通过三条同步路径接入本门户：

1. `static/feeds/podcast.xml` → `public/feeds/podcast.xml`：标准播客 RSS 2.0 订阅源；该文件存在时，`layouts/partials/subscribe.html` 会自动在订阅区呈现「🎙️ 每日播客 RSS」入口。
2. `data/podcast-episodes.json` → `layouts/partials/daily_podcast_player.html`：为对应日期的每日研究日报页渲染内置音频播放器（0.75×–2.0× 倍速、章节时间轴跳转、正文锚点定位与独立长文链接）。
3. `static/client/podcast/feed.json` → `public/client/podcast/feed.json`：遵循 `data/paperdigest-protocols.json` 登记的 `paper-daily-podcast-feed` 合同与 `schemaFingerprint`，供 macOS / Android 原生应用同步。

播客 MP3 音频地址在模板与前端脚本中均受严格白名单约束，仅允许 `https://github.com/nanless/(audio-research-workbench|audio-research-portal|audio-paper-digest|audio-paper-digest-blog)/releases/download/<tag>/<file>.mp3` 形式的安全链接。

## 部署与逐页核验

推送到 `main` 会触发上面的 Pages 流程。部署任务成功只说明构建和部署动作完成；对用户宣告博客已上线前，还要逐页核验目标日期的汇总页和本批每篇论文页：正式地址是否正确、是否返回 HTTP 200、页面标题是否与生成清单一致。目标地址以站点基础路径 `https://nanless.github.io/audio-research-portal/` 为准，例如汇总页 `https://nanless.github.io/audio-research-portal/posts/YYYY-MM-DD/`。

在音频研究工作台主仓库运行 `npm run digest:status -- --date YYYY-MM-DD`；其中的 `remoteOidVerified` 只证明 Git 提交已到远端，不能代替部署结果和网页核验。部署失败时先读失败任务的日志，修复后继续检查；`digest:status` 显示 complete 也不能跳过这一步。

## 新会议接入与历史内容核验

接入新一届会议或补充历史论文时，除了从主仓库生成页面和静态资料外，还要在本站完成目录登记与一致性核验：

1. **登记会议目录**：在 `data/conference-directory.json` 新增对应届次条目，确保 `id`（如 `icassp-2027`）与 `venueId:year` 唯一、`summaryPath` 指向已存在于 `content/posts/` 的总览页、`categoryPath` 以 `/categories/` 开头。
2. **核验日期与 CCF 元数据**：
   - `event` 必须填写经官网核对的真实举办日期和 HTTPS `sourceUrl`；官方尚未公布日期时使用 `status: "tba"`（附官方 `sourceUrl`），尚未核实时保持 `status: "pending"`，不得用博客发布日期替代会期。
   - `ranking` 按 CCF 第七版正式目录核对 `grade`（`A`、`B`、`C`、`unlisted` 或 `pending`）、`edition`、`scope`（主会完整长文 `main-conference-full-regular-paper`，未收录 `not-listed`）与官方 `sourceUrl`。
   - 卫星 Workshop 须在 `relationship` 中提供官方 `sourceUrl`、`checkedAt`、`sourceQuote` 并绑定同届主会 `parentConferenceId`；Workshop 会保留自身 `grade`，仅在目录中归入主会对应分组。
3. **同步六端 58 键会议显示名称**：若引入此前未收录的 `venueId` 代码，须同步更新门户三处规范会议名映射——`layouts/_default/single.html`（`$vMap`）、`assets/js/paper-library.js`（`VENUE_DISPLAY_NAMES`）与 `scripts/lib/research-corpus.js`（`VENUE_NORMALIZE`）——并与工作台仓库内三处客户端映射（macOS 原生 Swift `LibraryCompactProjection.swift`、macOS WebView JS `website-browser.js` 与 Android Kotlin `WebsiteLibraryIndex.kt`）保持六端逐键一致（门户测试 `tests/wave13-track13-2-conference-historical-ux.test.js` 会强制断言三处深相等）。若新会议属于 SOTA 专题导航需单独列出的重点顶会，再按需更新 `scripts/build-sota-hubs.js` 的 `HEADLINE_VENUES`（当前共 15 项）。
4. **运行全套门禁与构建验证**：提交或推送前在本站仓库运行：

```bash
npm test && npm run build:verify
```

该检查会依次验证：`tests/conference-directory.test.js` 的目录结构/引用完整性不变量、`tests/wave13-track13-2-conference-historical-ux.test.js` 的 58 键会议名一致性与 HTML/MathML 白名单、`scripts/audit-content.js` 对所有站内 `/posts/...`（含带站点前缀、旧前缀兼容与不带前缀形式）链接和标签/arXiv ID 的校验、历史与会议页面的静态引用文件（`citation.json` / `citation.bib` / `citation.ris`）及客户端声明、全量桌面端详情包（`client/details/`）导出与 `scripts/verify-build.js public` 构建验收。

## 失败恢复

- 生成失败：用同一日期重跑 `npm run blog:generate -- --date YYYY-MM-DD`，从已保存的生成清单和逐页状态继续。不要手改已生成页面，也不要用旧日期的生成、审查或推送证据替代当前批次。
- 审查失败：先按生成或正常修复入口改内容，再重跑 `npm run blog:review -- --date YYYY-MM-DD`。未通过的页面没有通过凭证；内容 SHA 未变的已通过页面可以复用原记录，改动过的页面必须重审。
- 推送被拒：通常是审查凭证与当前文件、当前博客 Git 提交或远端状态不一致。先重跑审查，确认远端 `main` 没有分叉，再重跑 `npm run blog:push -- --date YYYY-MM-DD`；不要强推，也不要手改推送凭证。
- 构建或验证失败：按 `npm run audit:content` 或 `verify-build:` 给出的具体文件和检查项修正来源，再重跑 `npm run build:verify`。不要直接修改 `public/`，它会在下一次构建时被清空重建。
- 部署失败：在 GitHub Actions 中查看 `unit`、`build`、`deploy` 哪个任务失败，按日志修复并重新推送；部署成功后仍要完成上面的逐页核验。

对外操作使用 `package.json` 里的 npm 入口；`package.json.scripts` 是命令是否存在的权威来源，旧的一步式发布写法或直接调用内部脚本都不能替代这些入口。
