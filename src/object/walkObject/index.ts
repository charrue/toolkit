import { isArr, isPlainObj } from "../../is/index";

type NodeKey = string | number;
export interface WalkObjectPredicateOptions {
  value: unknown;
  key: NodeKey;
  path: NodeKey[];
  isLeaf: boolean;
}
type WalkObjectPredicate = (options: WalkObjectPredicateOptions) => void;

export function walkObject<Target>(
  target: Target,
  predicate: WalkObjectPredicate,
) {
  function walk({ value, key, path }: WalkObjectPredicateOptions): any {
    if (isArr(value)) {
      predicate({ value, key, path, isLeaf: false });

      value.forEach((item, index) => {
        walk({
          value: item,
          path: [...path, index],
          key: index,
          isLeaf: false,
        });
      });
    } else if (isPlainObj(value)) {
      // 根节点不调用predicate
      if (value !== target) {
        predicate({ value, key, path, isLeaf: false });
      }

      Object.keys(value).forEach((k) => {
        walk({
          value: value[k],
          path: [...path, k],
          key: k,
          isLeaf: false,
        });
      });
    } else {
      predicate({ value, key, path, isLeaf: true });
    }
  }

  return walk({ value: target, key: "", path: [], isLeaf: false });
}
