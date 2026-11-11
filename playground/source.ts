import type { Block } from "./catalog";
import { upstream } from "./catalog";
import tokens from "../tokens.css?raw";
import license from "../LICENSE?raw";
import notices from "../THIRD_PARTY.md?raw";
import soundSource from "../sounds/sounds.ts?raw";
import soundReadme from "../sounds/README.md?raw";

const raw = import.meta.glob<string>("../blocks/*/*.{tsx,css,md}", {
  query: "?raw", import: "default",
});
const media = import.meta.glob<string>("../blocks/*/media/*.webp", {
  eager: true, query: "?url", import: "default",
});

export function mediaFor(id: string) {
  return Object.entries(media).filter(([path]) => path.startsWith("../blocks/" + id + "/media/"));
}

async function loadBlockFiles({ id, file }: Block) {
  const folder = "../blocks/" + id + "/";
  const [tsx, css, markdown] = await Promise.all([
    raw[folder + file + ".tsx"](),
    raw[folder + file + ".css"](),
    raw[folder + "README.md"](),
  ]);
  return [
    { name: file + ".tsx", label: file + ".tsx", text: tsx, language: "typescript" },
    { name: file + ".css", label: file + ".css", text: css, language: "css" },
    { name: "README.md", label: "使用说明", text: markdown, language: "markdown" },
    { name: "tokens.css", label: "tokens.css", text: tokens, language: "css" },
  ];
}

const fileCache = new Map<string, ReturnType<typeof loadBlockFiles>>();

export function blockFiles(block: Block) {
  const cached = fileCache.get(block.id);
  if (cached) return cached;
  const pending = loadBlockFiles(block);
  fileCache.set(block.id, pending);
  return pending;
}

export function dependencies(tsx: string) {
  const imports = Array.from(tsx.matchAll(/\b(?:from\s+|import\(\s*)["']([^"']+)["']/g), ([, specifier]) => specifier);
  return [...new Set(imports)].filter(name => !name.startsWith(".") && name !== "react" && name !== "react-dom");
}

export function example({ id, file }: Block) {
  const path = "./blocks/" + id + "/" + file;
  return `import "./tokens.css";
import { ${file} } from "${path}";
import "${path}.css";

export default function Example() {
  return <${file} />;
}`;
}

async function downloadZip(name: string, files: Record<string, string | Uint8Array>) {
  const { zipSync, strToU8 } = await import("fflate");
  const entries = Object.fromEntries(Object.entries(files).map(([path, value]) => [path, typeof value === "string" ? strToU8(value) : value]));
  const bytes = zipSync(entries);
  const buffer = new Uint8Array(bytes).buffer;
  const url = URL.createObjectURL(new Blob([buffer], { type: "application/zip" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name + ".zip";
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export async function downloadBlock(block: Block) {
  const [component, stylesheet, readme] = await blockFiles(block);
  const install = dependencies(component.text);
  const setup = install.length ? "npm install " + install.join(" ") : "无需额外的 npm 依赖。";
  const folder = "blocks/" + block.id + "/";
  const assets = await Promise.all(mediaFor(block.id).map(async ([path, url]) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Could not load " + path);
    return [path.slice(3), new Uint8Array(await response.arrayBuffer())] as const;
  }));
  return downloadZip("sugarv-" + block.id, {
    ...Object.fromEntries(assets),
    [folder + component.name]: component.text,
    [folder + stylesheet.name]: stylesheet.text,
    [folder + readme.name]: readme.text,
    "tokens.css": tokens,
    "Example.tsx": example(block),
    "README.md": `# ${block.name} · ${block.label}

将解压后的 blocks 文件夹、tokens.css 和 Example.tsx 放到 React 项目的同一目录。

${setup}

Example.tsx 展示了完整的导入方式。组件参数见 ${folder}README.md。
${assets.length ? "\nmedia/ 中的图片为 SugarV 提供的示例，复用时可替换为你自己的图片。\n" : ""}

来源：${upstream} · MIT License
`,
    LICENSE: license,
    "THIRD_PARTY.md": notices,
  });
}

export function downloadSounds() {
  return downloadZip("sugarv-sounds", {
    "sounds.ts": soundSource,
    "README.md": soundReadme,
    LICENSE: license,
    "THIRD_PARTY.md": notices,
  });
}
