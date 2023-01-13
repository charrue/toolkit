# omit

从原对象中创建一个不包含给定属性的新对象。

## Usage

```ts
const obj1 = {
  foo: {
    name: "foo",
    age: 10,
  },
  bar: [1, { baz: 2 }, 3],
};
const obj2 = omit(obj1, ["foo", "bar"]);
expect(obj2).toEqual({});
```
