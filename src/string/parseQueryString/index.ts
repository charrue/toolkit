/**
 * @description 解析查询参数
 * @param { string } queryString - 查询参数字符串
 * @returns {object} 解析后的对象
 */
export const parseQueryString = (queryString: string) => {
  if (typeof queryString !== "string") return {}

  if (queryString[0] === "?") {
    queryString = queryString.substring(1)
  }

  queryString = queryString.trim()

  if (!queryString.length) return {}

  return queryString
    .replace(/\+/g, " ")
    .split("&")
    .reduce((prev, cur) => {
      const kv = cur.split("=")
      const key = decodeURIComponent(kv[0])
      const value = kv[1] === undefined ? null : decodeURIComponent(kv.slice(1).join("="))

      if (!prev.hasOwnProperty(key)) {
        prev[key] = value
      } else if (Array.isArray(prev[key])) {
        (prev[key] as (string | null)[]).push(value)
      } else {
        prev[key] = [prev[key] as string, value]
      }

      return prev
    }, {} as Record<string, string | null | (string | null)[]>)
}