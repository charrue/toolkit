# rgbToHex

将rgb类型的颜色值转换为hex类型的颜色值。
```ts
    expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");

```

# rgbaToHex
将rgba类型的颜色值转换为hex类型的颜色值。
```ts
    expect(rgbaToHex("rgba(67, 255, 100, 0.85)")).toBe("#43ff64d9");
```


# hexToRgb
```ts
    expect(hexToRgb("#ffffff")).toBe("rgb(255, 255, 255)");
```

# hexToRgba
```ts
    expect(hexToRgba("#ffffff")).toBe("rgba(255, 255, 255, 1)");

```

# rgaToHsl
```ts
    expect(rgbToHsl("rgb(67, 255, 100)"))
      .toBe("hsl(131, 100%, 63%)");
```

# hslToRgb