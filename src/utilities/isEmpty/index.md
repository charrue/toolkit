# isEmpty

判断对象、数组、Set、Map 是否为空。

## Usage

```ts
expect(isEmpty({})).toBe(true);
expect(isEmpty({ a: 1 })).toBe(false);

expect(isEmpty([])).toBe(true);
expect(isEmpty([1])).toBe(false);

expect(isEmpty(new Set())).toBe(true);
expect(isEmpty(new Set([1]))).toBe(false);

expect(isEmpty(new Map())).toBe(true);
expect(isEmpty(new Map([["a", 1]]))).toBe(false);
```
