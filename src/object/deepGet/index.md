# deepGet

深度获取对象的属性值。

## Usage

```ts
expect(deepGet({ a: { b: { c: [1] } } }, ["a", "b", "c", 0])).toBe(1);
```
