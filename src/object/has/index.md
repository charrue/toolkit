# has

检查对象中是否存在指定的属性。只检查对象自身的属性。

## Usage

``` ts
const KEY = Symbol("KEY")
const obj = {
  foo: 1,
  [KEY]: 2
}

has(obj, "foo") // true
has(obj, KEY) // true
has(obj, "bar") // false

```
