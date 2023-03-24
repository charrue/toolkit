import { colord, extend } from "colord";
import harmonies from "colord/plugins/harmonies";

extend([harmonies]);

export const createColorSchema = (color: string) => {
  const C = colord(color);

  return {
    /**
     * 类比色
     */
    analogous: () => C.harmonies("analogous").map((c) => c.toHex()),
    /**
     * 双类比色
     */
    doubleSplitComplementary: () => C.harmonies("double-split-complementary").map((c) => c.toHex()),
    /**
     * 互补色
     */
    complementary: () => C.harmonies("complementary").map((c) => c.toHex()),
    /**
     * 矩形色
     */
    rectangle: () => C.harmonies("rectangle").map((c) => c.toHex()),
    /**
     * 分裂互补色
     */
    splitComplementary: () => C.harmonies("split-complementary").map((c) => c.toHex()),
    /**
     * 三色调色
     */
    triadic: () => C.harmonies("triadic").map((c) => c.toHex()),
    /**
     * 四色调色
     */
    tetradic: () => C.harmonies("tetradic").map((c) => c.toHex()),
  };
};
