# getColorMode

判断给定的颜色字符串是属于哪种颜色模型。

仅支持识别以下的类型:

```ts
enum ColorMode {
  RGB = "rgb",
  RGBA = "rgba",
  HSL = "hsl",
  HSLA = "hsla",
  HEX = "hex",
}
```

## Usage

```ts
expect(getColorMode("rgb(255, 255, 255)")).toBe(ColorMode.RGB);
expect(getColorMode("rgba(255, 255, 255, 1)")).toBe(ColorMode.RGBA);
expect(getColorMode("#ffffffaa")).toBe(ColorMode.HEX);
expect(getColorMode("hsl(147, 50%, 47%)")).toBe(ColorMode.HSL);
expect(getColorMode("hsla(0, 0%, 100%, 0.1)")).toBe(ColorMode.HSLA);
```
