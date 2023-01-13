# hasPath

检测给定对象上是否存在指定路径。

## Usage

```ts
const obj1 = {
  foo: {
    name: "foo",
    age: 10,
  },
  bar: [1, { baz: 2 }, 3],
};
const res1 = hasPath(obj1, ["bar", 1, "baz"]);
const res2 = hasPath(obj1, ["bar", 4, "bar"]);
expect(res1).toEqual(true);
expect(res2).toEqual(false);
```
