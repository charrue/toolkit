import { bold, dim } from "kolorist";
import readline from "readline";
import { colorizeMessage } from "../color/colorize-message";
import type {
  LogType,
  LogLevel,
  Logger,
  LoggerOptions,
  LogOptions,
} from "./types";

export const LogLevels: Record<LogLevel, number> = {
  silent: 0,
  error: 1,
  warn: 2,
  info: 3,
};

function clearScreen() {
  const repeatCount = process.stdout.rows - 2;
  const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
  console.log(blank);
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
}
export function createLogger(
  level: LogLevel = "info",
  loggerOptions: LoggerOptions = {},
): Logger {
  if (loggerOptions.customLogger) {
    return loggerOptions.customLogger;
  }

  const { prefix = "[charrue]", allowClearScreen = true } = loggerOptions;
  const thresh = LogLevels[level];
  const clear = allowClearScreen ? clearScreen : () => {
    //
  };

  function output(type: LogType, msg: string, outputOptions: LogOptions = {}) {
    // 如果手动调用的日志级别比设置的日志级别低，则不输出
    if (thresh >= LogLevels[type]) {
      const method = type === "info" ? "log" : type;
      const format = () => {
        if (outputOptions.timestamp) {
          return `${dim(new Date().toLocaleTimeString())} ${colorizeMessage(bold(prefix), type)} ${msg}`;
        }
        return colorizeMessage(msg, outputOptions.color ? type : undefined);
      };
      if (allowClearScreen) {
        if (outputOptions.clear) {
          clear();
        }
        console[method].call(null, format());
      } else {
        console[method].call(null, format());
      }
    }
  }

  const warnedMessages = new Set<string>();

  const logger: Logger = {
    info(msg, opts) {
      output("info", msg, opts);
    },
    warn(msg, opts) {
      output("warn", msg, opts);
    },
    warnOnce(msg, opts) {
      if (!warnedMessages.has(msg)) {
        output("warn", msg, opts);
        warnedMessages.add(msg);
      }
    },
    error(msg, opts) {
      output("error", msg, opts);
    },
    clearScreen(type: LogLevel) {
      if (thresh >= LogLevels[type]) {
        clear();
      }
    },
  };

  return logger;
}
