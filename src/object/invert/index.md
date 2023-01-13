# invert

创建一个 object 键值倒置后的对象。

## Usage

基础使用

```ts
const obj = { a: 1, b: 2, c: 1 };
const res = invert(obj);
expect(res).toEqual({ 1: "c", 2: "b" });
```

合并相同字段名的值

```ts
const obj = { a: 1, b: 2, c: 1 };
const res = invert(obj, true);
expect(res).toEqual({ 1: ["a", "c"], 2: ["b"] });
```

获取 symbol 值

```ts
const KEY = Symbol("KEY");
const obj = { a: 1, [KEY]: 2 };
const res = invert(obj, false, true);
expect(res).toEqual({ 1: "a", 2: KEY });
```
