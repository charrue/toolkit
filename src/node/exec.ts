import cp from "child_process";

export const exec = (cmd: string, cwd: string = process.cwd()) => cp.execSync(cmd, {
  cwd,
  stdio: ["pipe"],
}).toString();
