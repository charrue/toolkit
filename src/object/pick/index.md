# pick

从原对象中创建一个只包含给定属性的新对象。
如果给定的属性不存在与原对象中，默认不会创建此字段，除非设置了`getDefaultValue`参数。

## Usage

基础使用
```ts
const obj1 = {
  foo: {
    name: "foo",
    age: 10,
  },
  bar: [1, { baz: 2 }, 3],
};
const obj2 = pick(obj1, ["foo", "name"]);
expect(obj2).toEqual({
  foo: {
    name: "foo",
    age: 10,
  },
});
```

使用`getDefaultValue`设置默认值。

```ts
const obj1 = {
  foo: {
    name: "foo",
    age: 10,
  },
  bar: [1, { baz: 2 }, 3],
};
const obj2 = pick(obj1, ["foo", "name"], () => "default");
expect(obj2).toEqual({
  foo: {
    name: "foo",
    age: 10,
  },
  name: "default",
});
```
