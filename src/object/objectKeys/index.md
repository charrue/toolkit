# objectKeys

返回一个由一个给定对象的自身可枚举属性组成的数组。默认只返回`string`类型的属性名，不返回`Symbol`类型。

如果需要返回，可以给第二个参数传入`true`

## Usage

``` ts
const KEY = Symbol("KEY");
const obj = {
  foo: 1,
  bar: 2,
  [KEY]: 3,
};

expect(objectKeys(obj)).toEqual(["foo", "bar"]);
expect(objectKeys(obj, true)).toEqual(["foo", "bar", KEY]);

```