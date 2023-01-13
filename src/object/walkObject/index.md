# walkObject

深度遍历对象属性，每遍历到一个节点都会调用一此回调函数。
根节点不会调用回调函数。

## Usage

```ts
const obj1 = {
  foo: {
    name: "foo",
    age: 10,
  },
  bar: [1, { baz: 2 }, 3],
};
const keys: Array<string | number> = [];
walkObject(obj1, ({ key }) => {
  keys.push(key);
});

expect(keys).toEqual(["foo", "name", "age", "bar", 0, 1, "baz", 2]);
```
