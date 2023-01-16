# isDateSame

判断两个日期是否相等。

默认是按毫秒级进行比较，可以精确到天、小时等。

## Usage

```ts
expect(
  isDateSame(
    new Date("2022-10-10 10:10:10:001"),
    new Date("2022-10-10 10:10:10:001")
  )
).toBe(true);

expect(
  isDateSame(
    new Date("2022-10-10 10:00:00"),
    new Date("2022-10-10 10:10:10:011"),
    "hour"
  )
).toBe(true);
```
