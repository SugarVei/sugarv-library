const http = require("node:http");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const { spawn } = require("node:child_process");

const dist = path.join(__dirname, "dist");
const port = Number(process.env.SUGARV_PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }

  const file = path.resolve(dist, "." + (pathname === "/" ? "/index.html" : pathname));
  if (!file.startsWith(dist + path.sep)) {
    response.writeHead(403).end();
    return;
  }

  try {
    const contents = await readFile(file);
    response.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Content-Length": contents.length,
      "Cache-Control": pathname.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache",
    });
    response.end(request.method === "HEAD" ? undefined : contents);
  } catch {
    response.writeHead(404).end("Not found");
  }
});

server.on("error", error => {
  console.error(error.code === "EADDRINUSE"
    ? `Port ${port} is already in use. Close the other server or set SUGARV_PORT.`
    : error.message);
  process.exitCode = 1;
});

server.listen(port, "127.0.0.1", () => {
  const url = `http://127.0.0.1:${server.address().port}/`;
  console.log(`SugarV · ${url}`);
  if (process.platform === "win32" && process.argv.includes("--open")) {
    const browser = spawn("explorer.exe", [url], { detached: true, stdio: "ignore" });
    browser.on("error", () => console.log(`Open ${url} in your browser.`));
    browser.unref();
  }
});
