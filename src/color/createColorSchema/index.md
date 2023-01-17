# createColorSchema

可以获取指定颜色的互补色，三元色，相似色，分割补色等。

## Usage

```ts
const { complementary } = createColorSchema("#d52a33");

expect(complementary?.()).toEqual(["#2ad5cc"]);
```
