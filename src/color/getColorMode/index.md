# getColorMode

判断给定的颜色字符串是属于哪种颜色模型。
基于`colord`的`getFormat`方法。

## Usage

```ts
expect(getColorMode("rgb(255, 255, 255)")).toBe("rgb");
expect(getColorMode("rgba(255, 255, 255, 1)")).toBe("rgb");
expect(getColorMode("#ffffffaa")).toBe("hex");
expect(getColorMode("hsl(147, 50%, 47%)")).toBe("hsl");
expect(getColorMode("hsla(0, 0%, 100%, 0.1)")).toBe("hsl");
```
