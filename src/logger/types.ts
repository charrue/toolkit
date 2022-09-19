export type LogType = "error" | "warn" | "info"
export type LogLevel = LogType | "silent"

export interface LogOptions {
  /**
   * 输出之前清屏
   */
  clear?: boolean
  /**
   * 输出的内容是否带有颜色
   */
  color?: boolean
  timestamp?: boolean
}

export interface Logger {
  info(msg: string, options?: LogOptions): void
  warn(msg: string, options?: LogOptions): void
  warnOnce(msg: string, options?: LogOptions): void
  error(msg: string, options?: LogOptions): void
  clearScreen(msg: string, options?: LogOptions): void
}

export interface LoggerOptions {
  prefix?: string
  allowClearScreen?: boolean
  customLogger?: Logger
}
