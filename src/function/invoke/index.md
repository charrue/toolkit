# invoke

传入一个函数和参数，返回函数执行的结果。

## Usage

```ts
const fn = vi.fn((a: number, b: number) => a + b);
const result = invoke(fn, 1, 2);
expect(result).toBe(3);
expect(fn).toBeCalledWith(1, 2);
```
