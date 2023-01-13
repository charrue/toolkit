# isEqual

深度两个对象的值是否相等

## Usage

```ts
expect(
  isEqual(
    {
      a: 1,
      b: "2",
      c: false,
      d: new Date(),
      e: RegExp("obj"),
    },
    {
      a: 1,
      b: "2",
      c: false,
      d: new Date(),
      e: RegExp("obj"),
    }
  )
).toBe(true);
```
