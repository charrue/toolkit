import process from "process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

export interface LocatePathOptions {
  /** 当前工作目录  */
  cwd?: URL | string;
  /** 想要匹配的文件类型  */
  type?: "file" | "directory";
  allowSymlinks?: boolean;
  /** 返回所有匹配成功的文件  */
  getAllMatched?: boolean;
  /** 是否返回绝对路径  */
  absolute?: boolean;
  /** 同时挂起的 Promise 的数量。最小是1  */
  concurrency?: number;
  /** 搜索时保留顺序  */
  preserveOrder?: boolean;
}

const typeMappings = {
  directory: "isDirectory",
  file: "isFile",
};

/**
 * 判断该文件是否符合类型(文件或目录)
 */
const matchType = (
  type: LocatePathOptions["type"],
  stat: fs.Stats,
) => {
  if (type === undefined) return true;
  const typeMethod = typeMappings[type] as "isFile" | "isDirectory";
  if (stat[typeMethod]()) return stat[typeMethod]();
  return false;
};

export const toPath = (urlOrPath: any) => (urlOrPath instanceof URL
  ? fileURLToPath(urlOrPath)
  : urlOrPath);

export function locatePath(
  paths: string[],
  {
    cwd = process.cwd(),
    type = "file",
    allowSymlinks = true,
    getAllMatched = false,
    absolute = false,
  }: Omit<LocatePathOptions, "concurrency"> = {},
) {
  const cwdStr = toPath(cwd);

  const statFunction = allowSymlinks ? fs.statSync : fs.lstatSync;
  const getMatchedPath = (filepath: string) => {
    try {
      const stat = statFunction(path.resolve(cwdStr, filepath));
      return matchType(type, stat);
    } catch (e) {
      return false;
    }
  };
  if (getAllMatched) {
    const matchedPaths = paths.filter(getMatchedPath);
    if (absolute) return matchedPaths.map((p) => path.resolve(cwdStr, p));
    return matchedPaths;
  }

  const matchedPath = paths.find(getMatchedPath);
  if (absolute && matchedPath) return path.resolve(cwdStr, matchedPath);
  return matchedPath;
}
