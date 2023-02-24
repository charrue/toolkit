# chunk

将数组分组，每组的长度为 size，最后一组的长度可能小于 size

## Usage

```ts
expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
  ["a", "b"],
  ["c", "d"],
]);
expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
expect(chunk(["a", "b", "c", "d"], 5)).toEqual([["a", "b", "c", "d"]]);
expect(chunk(["a", "b", "c", "d"], 0)).toEqual([]);
```
