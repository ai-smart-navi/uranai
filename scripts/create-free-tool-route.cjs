const fs = require("node:fs");
const path = require("node:path");

const distDir = path.resolve(__dirname, "..", "dist");
const source = path.join(distDir, "index.html");
const targetDir = path.join(distDir, "free-tool");
const target = path.join(targetDir, "index.html");

if (!fs.existsSync(source)) {
  throw new Error(`Build output not found: ${source}`);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);
console.log("created dist/free-tool/index.html");
