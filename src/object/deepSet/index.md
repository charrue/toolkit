# deepSet

深度设置对象的属性值。

## Usage

```ts
expect(deepSet({ a: 1 }, ["b", "c"], { d: [2] })).toEqual({
  a: 1,
  b: {
    c: {
      d: [2],
    },
  },
});
```
