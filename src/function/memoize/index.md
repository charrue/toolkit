# memoize

函数记忆化，缓存函数的执行结果

## Usage

**基础使用**

```ts
const fn = vi.fn((a: number, b: number) => a + b);
const memoized = memoize(fn);
const result = memoized(1, 2);
expect(result).toBe(3);
expect(fn).toBeCalledWith(1, 2);
expect(fn).toBeCalledTimes(1);
const result2 = memoized(1, 2);
expect(result2).toBe(3);
expect(fn).toBeCalledTimes(1);
const result3 = memoized(2, 2);
expect(result3).toBe(4);
expect(fn).toBeCalledTimes(2);
```

**重置**

```ts
const fn = vi.fn((a: number, b: number) => a + b);
const memoized = memoize(fn);
const result = memoized(1, 2);
expect(result).toBe(3);
expect(fn).toBeCalledWith(1, 2);
expect(fn).toBeCalledTimes(1);
memoized.reset();
const result2 = memoized(1, 2);
expect(result2).toBe(3);
expect(fn).toBeCalledTimes(2);
```

**自定义参数比较函数**

```ts
const fn = vi.fn((a: number, b: number) => a + b);
const memoized = memoize(fn, (a, b) => a[0] === b[0]);
const result = memoized(1, 2);
expect(result).toBe(3);
expect(fn).toBeCalledWith(1, 2);
expect(fn).toBeCalledTimes(1);
const result2 = memoized(1, 2);
expect(result2).toBe(3);
expect(fn).toBeCalledTimes(1);
const result3 = memoized(2, 2);
expect(result3).toBe(4);
expect(fn).toBeCalledTimes(2);
```
