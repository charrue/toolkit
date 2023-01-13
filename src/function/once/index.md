# once

返回一个不论参数是否改变，都只执行一次的函数。

## Usage

```ts
let i = 0;
const add = once((a: number, b: number) => {
  i++;
  return a + b;
});
expect(add(1, 2)).toBe(3);
expect(add(1, 2)).toBe(3);
expect(add(1, 2)).toBe(3);
expect(i).toBe(1);

expect(add(2, 4)).toBe(3);
expect(i).toBe(1);
```
