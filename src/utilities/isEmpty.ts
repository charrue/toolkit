import { isArr, isObj } from "../is/index";

export const isEmpty = (val: unknown) => (!val && val !== 0)
  || (isArr(val) && val.length === 0)
  || (isObj(val) && !Object.keys(val).length);
