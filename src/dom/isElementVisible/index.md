# isElementVisible

检查HTML元素是否可见.

对于以下几种情况，DOM元素是不可见的:
- `display`设置为了`none`.
- `opacity`设置为了`0`.
- `visibility`设置为了`hidden`.
- 因为滚动原因不在窗口可见范围内.

## Usage

``` ts
isElementVisible(document.querySelector(".hidden")!); // false
```