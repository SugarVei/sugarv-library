import { use, useMemo, useState } from "react";
import { ArrowUpRight, Bookmark, Download, RotateCcw } from "lucide-react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Preview } from "./Preview";
import { CopyButton } from "./CopyButton";
import { upstream, upstreamBlock, type Block } from "./catalog";
import { blockFiles, dependencies, downloadBlock, example, mediaFor } from "./source";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);

function Code({ value, language = "typescript", numbered = false }: { value: string; language?: string; numbered?: boolean }) {
  const html = useMemo(() => hljs.highlight(value, { language }).value, [value, language]);
  const lineCount = value.trimEnd().split("\n").length;
  return (
    <div className="code-scroller" tabIndex={0} aria-label="代码">
      {numbered && <pre className="line-numbers" aria-hidden="true">{Array.from({ length: lineCount }, (_, index) => index + 1).join("\n")}</pre>}
      <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
    </div>
  );
}

export default function DetailPage({ block, saved, toggleFavorite }: { block: Block; saved: boolean; toggleFavorite: () => void }) {
  const [reset, setReset] = useState(0);
  const [file, setFile] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const files = use(blockFiles(block));
  const selected = files[file];
  const install = dependencies(files[0].text);
  const code = example(block);

  async function download() {
    setDownloading(true);
    setDownloadError(false);
    try {
      await downloadBlock(block);
    } catch {
      setDownloadError(true);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <main className="container detail-page">
      <nav className="breadcrumbs" aria-label="当前位置"><a href="#/">组件库</a><span aria-hidden="true">/</span><span aria-current="page">{block.name}</span></nav>
      <div className="detail-title">
        <div>
          <h1>{block.name}</h1>
          <p>{block.label} <span aria-hidden="true">·</span> {block.group}</p>
        </div>
        <div className="detail-actions">
          <button className="button bookmark" aria-pressed={saved} onClick={toggleFavorite}><Bookmark size={18} fill={saved ? "currentColor" : "none"} />{saved ? "已收藏" : "收藏"}</button>
          <a className="button" href={upstreamBlock(block.id)} target="_blank" rel="noreferrer"><ArrowUpRight size={18} />原始页面</a>
          <button className="button primary" disabled={downloading} onClick={download}><Download size={18} />{downloading ? "准备中" : "下载组件"}</button>
          {downloadError && <span className="inline-error" role="status">下载失败，请重试。</span>}
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-left">
          <section className="detail-preview" aria-labelledby="preview-title">
            <div className="panel-header">
              <h2 id="preview-title">交互预览</h2>
              <button className="button subtle small-button" onClick={() => setReset(value => value + 1)}><RotateCcw size={16} />重置</button>
            </div>
            <Preview block={block} full reset={reset} />
          </section>
          <section className="panel quick-start" aria-labelledby="quick-title">
            <div className="panel-header"><h2 id="quick-title">快速接入</h2><CopyButton value={code} label="复制示例" /></div>
            {install.length > 0 && <div className="install-row"><code>npm install {install.join(" ")}</code><CopyButton value={"npm install " + install.join(" ")} label="复制命令" /></div>}
            <Code value={code} />
            {mediaFor(block.id).length > 0 && <p className="media-note">示例图片随组件 ZIP 一起下载。</p>}
          </section>
        </div>
        <section className="panel source-panel" aria-labelledby="source-title">
          <div className="panel-header"><h2 id="source-title">源代码</h2><CopyButton key={selected.name} value={selected.text} label="复制文件" /></div>
          <div className="file-tabs" role="group" aria-label="源代码文件">
            {files.map((item, index) => <button key={item.name} aria-pressed={index === file} onClick={() => setFile(index)}>{item.label}</button>)}
          </div>
          {selected.language === "markdown" ? (
            <div className="readme" key={selected.name} tabIndex={0}>
              <Markdown
                remarkPlugins={[remarkGfm]}
                urlTransform={url => defaultUrlTransform(new URL(url, upstream + "/blob/main/blocks/" + block.id + "/").href)}
              >{selected.text}</Markdown>
            </div>
          ) : <Code key={selected.name} value={selected.text} language={selected.language} numbered />}
        </section>
      </div>
    </main>
  );
}
