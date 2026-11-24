'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const BLOG_ROOT = path.resolve(__dirname, '..');

test('Track 11B: Hugo templates enforce strict citation-source -> reading-export/paper-toolbar order, boldsymbol MathJax, index compact authors, and no dead SW/manifest', () => {
    assert.equal(fs.existsSync(path.join(BLOG_ROOT, 'static/sw.js')), false, 'Dead sw.js must stay removed');
    assert.equal(fs.existsSync(path.join(BLOG_ROOT, 'static/manifest.json')), false, 'Dead manifest.json must stay removed');

    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'wave11-blog-ux-'));
    try {
        const hugoYaml = fs.readFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), 'utf8')
            .replace(/^enableGitInfo:\s*true\s*$/m, 'enableGitInfo: false');
        fs.writeFileSync(path.join(tmpRoot, 'hugo.yaml'), hugoYaml);
        for (const name of ['i18n', 'assets', 'layouts', 'themes']) {
            const src = path.join(BLOG_ROOT, name);
            if (fs.existsSync(src)) {
                fs.cpSync(src, path.join(tmpRoot, name), { recursive: true });
            }
        }
        fs.mkdirSync(path.join(tmpRoot, 'data'), { recursive: true });
        for (const dataFile of ['paperdigest-protocols.json', 'taxonomy-catalog.json', 'taxonomy-registry.json']) {
            const src = path.join(BLOG_ROOT, 'data', dataFile);
            if (fs.existsSync(src)) {
                fs.copyFileSync(src, path.join(tmpRoot, 'data', dataFile));
            }
        }
        const contentDir = path.join(tmpRoot, 'content');
        fs.mkdirSync(path.join(contentDir, 'posts'), { recursive: true });
        fs.copyFileSync(path.join(BLOG_ROOT, 'content/papers.md'), path.join(contentDir, 'papers.md'));

        // Sample paper page with math + verified arXiv identity
        fs.writeFileSync(path.join(contentDir, 'posts/2026-11-24-sample-paper.md'), [
            '---',
            'title: "Wave 11B 测试论文"',
            'date: 2026-11-24',
            'draft: false',
            'paper_digest_page_type: paper',
            'paper_digest_arxiv_id: "2611.99999v1"',
            'paper_digest_arxiv_url: "https://arxiv.org/abs/2611.99999v1"',
            'paper_digest_pdf_url: "https://arxiv.org/pdf/2611.99999v1.pdf"',
            '---',
            '',
            '## 📌 核心摘要',
            '',
            '使用公式 \\(\\bm{x} = \\bm{W}\\bm{h}\\) 进行测试。',
            ''
        ].join('\n'));

        // Sample daily index page with an all-unbound author list
        fs.writeFileSync(path.join(contentDir, 'posts/2026-11-24.md'), [
            '---',
            'title: "语音/音乐/音频论文速递 2026-11-24"',
            'date: 2026-11-24',
            'draft: false',
            'paper_digest_page_type: index',
            '---',
            '',
            '## 📋 论文列表',
            '',
            '### 🥇 测试论文',
            '',
            '👥 **作者与机构**',
            '',
            '- Alice Zhang：机构信息未能在本次解析中与作者逐人可靠绑定',
            '- Bob Li：机构信息未能在本次解析中与作者逐人可靠绑定',
            ''
        ].join('\n'));

        const dest = path.join(tmpRoot, 'public');
        const { spawnSync } = require('node:child_process');
        const res = spawnSync('hugo', ['--source', tmpRoot, '--destination', dest, '--noBuildLock'], {
            cwd: tmpRoot,
            encoding: 'utf8'
        });
        assert.equal(res.status, 0, `${res.stdout}\n${res.stderr}`);

        const count = (s, re) => (s.match(re) || []).length;

        // 1. /papers/ library page: citation-source strictly BEFORE reading-export BEFORE paper-library
        const libHtml = fs.readFileSync(path.join(dest, 'papers/index.html'), 'utf8');
        assert.equal(count(libHtml, /citation-source\.min\.[a-f0-9]+\.js/g), 1);
        assert.equal(count(libHtml, /reading-export\.min\.[a-f0-9]+\.js/g), 1);
        assert.equal(count(libHtml, /paper-library\.min\.[a-f0-9]+\.js/g), 1);
        const libCitPos = libHtml.search(/citation-source\.min\.[a-f0-9]+\.js/);
        const libExpPos = libHtml.search(/reading-export\.min\.[a-f0-9]+\.js/);
        const libAppPos = libHtml.search(/paper-library\.min\.[a-f0-9]+\.js/);
        assert.ok(libCitPos > 0 && libCitPos < libExpPos && libExpPos < libAppPos,
            `Expected citation-source < reading-export < paper-library on /papers/, got ${libCitPos}, ${libExpPos}, ${libAppPos}`);

        // 2. Paper page: citation-source strictly BEFORE paper-toolbar, zero reading-export, self-hosted KaTeX SSR with \bm macro (zero external MathJax/medium-zoom CDN)
        const paperHtml = fs.readFileSync(path.join(dest, 'posts/2026-11-24-sample-paper/index.html'), 'utf8');
        assert.equal(count(paperHtml, /citation-source\.min\.[a-f0-9]+\.js/g), 1);
        assert.equal(count(paperHtml, /paper-toolbar\.min\.[a-f0-9]+\.js/g), 1);
        assert.equal(count(paperHtml, /reading-export\.min\.[a-f0-9]+\.js/g), 0);
        const pCitPos = paperHtml.search(/citation-source\.min\.[a-f0-9]+\.js/);
        const pBarPos = paperHtml.search(/paper-toolbar\.min\.[a-f0-9]+\.js/);
        assert.ok(pCitPos > 0 && pCitPos < pBarPos,
            `Expected citation-source < paper-toolbar on paper page, got ${pCitPos}, ${pBarPos}`);
        assert.ok(paperHtml.includes('vendor/katex/katex.min.css'), 'Paper page with math must load self-hosted KaTeX CSS');
        assert.match(paperHtml, /class="katex"/, 'Paper page math must be SSR-rendered by KaTeX');
        assert.match(paperHtml, /<math\b[^>]*xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML"/, 'KaTeX SSR must emit MathML');
        assert.match(paperHtml, /mathvariant="bold-italic"/, 'KaTeX SSR \\bm macro must render bold-italic symbols');
        assert.doesNotMatch(paperHtml, /MathJax|medium-zoom|cdn\.jsdelivr\.net/i, 'Zero external CDN scripts');

        // 3. Daily index page: zero citation-source & zero reading-export; unbound author list compacted
        const indexHtml = fs.readFileSync(path.join(dest, 'posts/2026-11-24/index.html'), 'utf8');
        assert.equal(count(indexHtml, /citation-source\.min\.[a-f0-9]+\.js/g), 0);
        assert.equal(count(indexHtml, /reading-export\.min\.[a-f0-9]+\.js/g), 0);
        assert.ok(indexHtml.includes('class="compact-authors-line"'), 'Index unbound author list must be compacted');
        assert.ok(indexHtml.includes('Alice Zhang · Bob Li'), 'Compacted index authors must retain exact names');
    } finally {
        fs.rmSync(tmpRoot, { recursive: true, force: true });
    }
});
