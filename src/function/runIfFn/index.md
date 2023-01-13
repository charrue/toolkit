# runIfFn

如果入参是一个函数，则执行并返回，否则直接返回。

## Usage

```ts
expect(runIfFn((a: number, b: number) => a + b, 1, 2)).toBe(3);

expect(runIfFn(11)).toBe(11);
```
