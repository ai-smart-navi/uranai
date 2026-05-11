const fs = require("node:fs");
const path = require("node:path");

const distDir = path.resolve(__dirname, "..", "dist");
const source = path.join(distDir, "index.html");
const routes = ["free-tool", "daily-fortune"];

if (!fs.existsSync(source)) {
  throw new Error(`Build output not found: ${source}`);
}

for (const route of routes) {
  const targetDir = path.join(distDir, route);
  const target = path.join(targetDir, "index.html");

  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(source, target);
  console.log(`created dist/${route}/index.html`);
}
