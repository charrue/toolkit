# toNumber

将任意类型转换为数字类型。

## Usage

```ts
expect(toNumber(NaN)).toBe(0);
expect(toNumber("11")).toBe(11);
expect(toNumber("11.11")).toBe(11.11);
expect(toNumber("11.11.11")).toBe(11.11);

expect(toNumber(false)).toBe(0);
expect(toNumber(undefined)).toBe(0);
expect(toNumber({})).toBe(0);
```
