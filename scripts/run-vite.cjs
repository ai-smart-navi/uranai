const { existsSync } = require("node:fs");
const { join } = require("node:path");
const { spawn, spawnSync } = require("node:child_process");

const root = process.cwd();
const mode = process.argv[2] || "dev";
const extraArgs = process.argv.slice(3);
const bundledNode = join(
  process.env.USERPROFILE || "",
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
  "node",
  "bin",
  "node.exe",
);
const nodeBin = existsSync(bundledNode) ? bundledNode : process.execPath;
const viteBin = join(root, "node_modules", "vite", "bin", "vite.js");
const tscBin = join(root, "node_modules", "typescript", "bin", "tsc");

function runSync(script, args) {
  const result = spawnSync(nodeBin, [script, ...args], {
    cwd: root,
    stdio: "inherit",
    shell: false,
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function run(script, args) {
  const child = spawn(nodeBin, [script, ...args], {
    cwd: root,
    stdio: "inherit",
    shell: false,
  });

  child.on("error", (error) => {
    console.error(error.message);
    process.exit(1);
  });

  child.on("close", (code) => {
    process.exit(code || 0);
  });
}

if (mode === "build") {
  runSync(tscBin, ["-p", "tsconfig.json"]);
  runSync(viteBin, ["build", ...extraArgs]);
} else if (mode === "preview") {
  run(viteBin, ["preview", "--host", "127.0.0.1", ...extraArgs]);
} else {
  run(viteBin, ["--host", "127.0.0.1", ...extraArgs]);
}
