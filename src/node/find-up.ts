// https://github.com/sindresorhus/find-up
import { resolve, parse, dirname } from "path";
import { LocatePathOptions, toPath, locatePath } from "./locate-file";

export interface FindPathOptions extends Omit<LocatePathOptions, "absolute"> {
  stopAt?: string;
  limit?: number;
}

export function findUpMultiple(name: string | string[], options: FindPathOptions) {
  let directory = resolve(toPath(options.cwd || ""));
  const { root } = parse(directory);
  const stopAt = resolve(directory, options.stopAt || root);
  const limit = options.limit || Number.POSITIVE_INFINITY;
  const paths = [name].flat();

  let matches: string[] = [];
  while (stopAt !== directory) {
    // 从paths中查找实际存在的文件
    let foundPath = locatePath(paths, { ...options, cwd: directory });

    if (foundPath) {
      foundPath = Array.isArray(foundPath) ? foundPath : [foundPath];
      matches = matches.concat(
        // eslint-disable-next-line no-loop-func
        foundPath.map((t) => resolve(directory, t)),
      );
    }

    if (directory === stopAt || matches.length >= limit) {
      break;
    }

    // 去上一级目录查找
    directory = dirname(directory);
  }

  return matches;
}

export const findUp = (name: string | string[], options: Omit<FindPathOptions, "getAllMatched" | "limit"> = {}) => {
  const matches = findUpMultiple(name, { ...options, limit: 1 });
  return matches[0];
};
