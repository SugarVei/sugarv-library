# SugarV 组件库

Windows 上双击 `Start.bat` 打开网站，或运行 `npm start` 后访问 http://127.0.0.1:4173/。随站附带 `dist/` 时，启动只需要 Node.js。

组件支持中英文搜索、按交互方式筛选、试玩和收藏。打开组件详情即可复制 TSX、CSS、公共样式或接入示例，也可以下载包含使用说明和授权文件的 ZIP。收藏保存在当前浏览器中。

## 开发

```sh
npm ci
npm run dev
npm run build
```

构建生成的 `dist/` 可以放到静态文件服务器上。源码和音效来自 Lorenzo Cabra 的 [Bencho 开源仓库](https://github.com/cabralorenzo/bencho)，授权见 [LICENSE](LICENSE) 和 [THIRD_PARTY.md](THIRD_PARTY.md)。
