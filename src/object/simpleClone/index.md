# simpleClone

支持对象和数组类型的拷贝，对于其他类型的值会直接返回。

## Usage
``` ts
const obj = {
  foo: 1,
  bar: [1, 2, { foo: 1 }],
};

expect(simpleClone(obj)).toEqual(obj);
```