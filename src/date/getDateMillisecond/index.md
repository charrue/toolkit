# getDateMillisecond

获取一个日期一共有多少毫秒。

## Usage

```ts
const t = getDateMillisecond(new Date("2022-10-10 10:10:10:001"));
const { years, months, days, hours, minutes, seconds, milliseconds } =
  parseMillisecond(t, {
    week: false,
  });
expect(years).toBe(2022);
expect(months).toBe(10);
expect(days).toBe(10);
expect(hours).toBe(10);
expect(minutes).toBe(10);
expect(seconds).toBe(10);
expect(milliseconds).toBe(1);
```

如果你想要忽略掉时分秒，只想知道这一天对应着多少毫秒，可以设置`unit`参数:

```ts
const t = getDateMillisecond(new Date("2022-10-10 10:10:10:001"), "day");
const { years, months, days, hours, minutes, seconds, milliseconds } =
  parseMillisecond(t, {
    week: false,
  });
expect(years).toBe(2022);
expect(months).toBe(10);
expect(days).toBe(10);
expect(hours).toBe(0);
expect(minutes).toBe(0);
expect(seconds).toBe(0);
expect(milliseconds).toBe(0);
```
