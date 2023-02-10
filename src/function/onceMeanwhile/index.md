# onceMeanwhile

保证函数只会执行一次，如果函数正在执行，则返回上一次执行的结果。

## Usage

```ts
const fn: () => Promise<1> = vi.fn().mockImplementation(async () => {
  await sleep(50);
  return 1;
});
const fn$ = onceMeanwhile(fn);

const res = await Promise.all([fn$(), fn$(), fn$(), fn$()]);
expect(res).toEqual([1, 1, 1, 1]);
expect(fn).toBeCalledTimes(1);

const r = await fn$();
expect(r).toEqual(1);
expect(fn).toBeCalledTimes(2);
```
