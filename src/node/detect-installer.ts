// https://github.com/antfu/ni/blob/main/src/detect.ts
import { existsSync, readFileSync } from "fs";
import { resolve, basename } from "path";
import { findUp } from "./find-up";

const npmRun = (agent: string) => (args: string[]) => {
  if (args.length > 1) return `${agent} run ${args[0]} -- ${args.slice(1).join(" ")}`;
  return `${agent} run ${args[0]}`;
};

export const AGENTS = {
  npm: {
    run: npmRun("npm"),
    install: "npm i",
    frozen: "npm ci",
    global: "npm i -g {0}",
    add: "npm i {0}",
    upgrade: "npm update {0}",
    "upgrade-interactive": null,
    execute: "npx {0}",
    uninstall: "npm uninstall {0}",
    global_uninstall: "npm uninstall -g {0}",
  },
  yarn: {
    run: "yarn run {0}",
    install: "yarn install",
    frozen: "yarn install --frozen-lockfile",
    global: "yarn global add {0}",
    add: "yarn add {0}",
    upgrade: "yarn upgrade {0}",
    "upgrade-interactive": "yarn upgrade-interactive {0}",
    execute: "yarn dlx {0}",
    uninstall: "yarn remove {0}",
    global_uninstall: "yarn global remove {0}",
  },
  "yarn@berry": {
    run: "yarn run {0}",
    install: "yarn install",
    frozen: "yarn install --immutable",
    // yarn3 removed 'global', see https://github.com/yarnpkg/berry/issues/821
    global: "npm i -g {0}",
    add: "yarn add {0}",
    upgrade: "yarn up {0}",
    "upgrade-interactive": "yarn up -i {0}",
    execute: "yarn dlx {0}",
    uninstall: "yarn remove {0}",
    global_uninstall: "npm uninstall -g {0}",
  },
  pnpm: {
    run: npmRun("pnpm"),
    install: "pnpm i",
    frozen: "pnpm i --frozen-lockfile",
    global: "pnpm add -g {0}",
    add: "pnpm add {0}",
    upgrade: "pnpm update {0}",
    "upgrade-interactive": "pnpm update -i {0}",
    execute: "pnpm dlx {0}",
    uninstall: "pnpm remove {0}",
    global_uninstall: "pnpm remove --global {0}",
  },
};

export type Agent = keyof typeof AGENTS
export type Command = keyof typeof AGENTS.npm

export const agents = Object.keys(AGENTS) as Agent[];

export const LOCKS: Record<string, Agent> = {
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
};

/**
 * @description 检测使用的是哪种包管理器
 * @param {string} cwd 当前工作目录
 */
export const detectInstaller = (cwd: string) => {
  let agent: Agent | null = null;
  const lockPath = findUp(Object.keys(LOCKS), { cwd });
  let packageJSONPath = "";
  if (lockPath) {
    packageJSONPath = resolve(lockPath, "../package.json");
  } else {
    packageJSONPath = findUp("package.json", { cwd });
  }

  // 读取package.json中的`packageManager`属性
  if (packageJSONPath && existsSync(packageJSONPath)) {
    try {
      const pkg = JSON.parse(readFileSync(packageJSONPath, "utf8"));
      if (typeof pkg.packageManager === "string") {
        const [name, version] = pkg.packageManager.split("@");
        if (name === "yarn" && parseInt(version, 10) > 1) agent = "yarn@berry";
        else if (name in AGENTS) agent = name;
        else console.warn("Unknown packageManager:", pkg.packageManager);
      }
    } catch {
      //
    }
  }

  // 如果package.json中没有指定packageManager，则根据lock文件检测包管理器
  if (!agent && lockPath) {
    agent = LOCKS[basename(lockPath)];
  }

  return agent;
};
