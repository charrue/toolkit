# cast

强制转换为某个类型，类似于`as`。

## Usage

``` ts
const str1 = "foo"

const str2 = cast<"foo" | "bar">(str1)
// typeof str2 => "foo" | "bar"
```
