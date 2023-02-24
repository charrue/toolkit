# uniqueBy

返回一个新数组，其中包含原始数组中的每个元素的唯一副本，基于提供的函数返回的值。

## Usage

```ts
expect(uniqueBy([], (x) => x)).toEqual([]);

expect(uniqueBy([1, 2, 3, 1, 2, 3], (x) => x)).toEqual([1, 2, 3]);

expect(uniqueBy([1, 2, 3, 1, 2, 3], (x) => x % 2)).toEqual([1, 2]);

expect(
  uniqueBy(
    [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "c" },
    ],
    (x) => x.id
  )
).toEqual([
  { id: 1, name: "a" },
  { id: 2, name: "b" },
]);
```
