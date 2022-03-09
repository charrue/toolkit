interface IArrayLike<T> {
    length: number;
    [n: number]: T;
}
/**
 * 返回数组的最后一个元素，不会改变原数组。
 */
declare const last: <T>(arr: IArrayLike<T>) => T | undefined;
/**
 * 从数组的最后一个元素向第一个元素开始遍历
 */
declare const forEachRight: <T, C = any>(arr: IArrayLike<T>, callbackfn: (value: T, index: number, self: IArrayLike<T>) => void, context?: C | undefined) => void;
declare const count: <T, C = any>(arr: T[], callbackfn: (value: T, index: number, array: IArrayLike<T>) => value is any, ctx?: C | undefined) => number;
declare const findIndexRight: <T, C>(arr: IArrayLike<T>, callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown, thisArg?: C | undefined) => number;
declare const findRight: <T, C>(arr: IArrayLike<T>, callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown, thisArg?: C | undefined) => T | undefined;
/**
 * 判断数组中是否包含给定的对象
 */
declare const contains: <T>(arr: T[], obj: T) => boolean;
/**
 * 判断数组是否为空
 */
declare const isEmpty: <T>(arr: IArrayLike<T>) => boolean;
/**
 *清空数组中的值
 */
declare const clear: <T>(arr: IArrayLike<T>) => void;
/**
 * 插入一个值到数组的末尾，如果值已存在，则不插入
 */
declare const insert: <T>(arr: T[], obj: T) => T[];
/**
 * 插入一个值到数组中的指定下标
 */
declare const insertAt: <T>(arr: T[], index: number, ...obj: T[]) => T[];
/**
 * 在指定元素之前插入一个元素
 */
declare const insertBefore: <T>(arr: T[], matchedData: T, ...dataToInsert: T[]) => T[];
/**
 * 移除数组中指定下标的元素
 */
declare const removeAt: <T>(arr: T[], i: number) => boolean;
/**
 * 移除数组中第一个选择的元素
 */
declare const remove: <T>(arr: T[], obj: T) => number;
/**
 * 根据给定的条件移除数组中符合的第一个元素
 */
declare const removeIf: <T, C>(arr: T[], callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown, thisArg?: C | undefined) => boolean;
/**
 * 根据给定的条件移除数组中的所有符合的元素
 */
declare const removeAllIf: <T, C>(arr: T[], callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown, thisArg?: C | undefined) => number;
/**
 * 将一个类数组转换为数组类型
 */
declare const toArray: <T>(object: IArrayLike<T>) => T[];
/**
 * 将数组进行反转
 */
declare const rotate: <T>(arr: T[], n: number) => T[];
/**
 * 将一个数重复n次，返回一个数组
 */
declare const repeat: <T>(value: T, n: number) => T[];
declare const flatten: <T>(...args: T[]) => T[];

declare type Options = {
    format?: "object" | "array" | "css";
    alpha?: number;
};
declare function hexRgb(rawHex: string, options?: Options): string | number[] | {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};

declare type ColorizeType = "error" | "warn" | "info";
declare const colorizeMessage: (message: string, type?: ColorizeType | undefined) => string;

/**
 * 深度拷贝
 * @param { * } raw 要深拷贝的值
 */
declare function deepClone(raw: any): any;

/**
 * 从右往左执行函数组合，前一个函数的返回值将会作为后一个函数的参数传入
 */
declare function compose(...funcs: any[]): any;

declare type PlainObject = Record<string, any>;
/**
 * 判断object是否具有key属性
 * @param { Object } object 需要判断的对象
 * @param { string } key 键名
 */
declare function hasIn(object: PlainObject, key: string): boolean;
/**
 * 创建一个从 object 中选中一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 选出的属性
 */
declare function pick(data: PlainObject, attrs?: string[]): PlainObject;
/**
 * 创建一个从 object 中排除一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 排除的属性
 */
declare function omit(data: PlainObject, attrs?: string[]): {
    [x: string]: any;
};

declare const getType: (obj: any) => string;
declare const isWindow: (obj: unknown) => obj is Window;
declare const isHTMLElement: (obj: any) => obj is HTMLElement;
declare const isFn: (obj: unknown) => obj is (...args: any[]) => any;
declare const isArr: (arg: any) => arg is any[];
declare const isPlainObj: (obj: unknown) => obj is Record<string, unknown>;
declare const isStr: (obj: unknown) => obj is string;
declare const isBool: (obj: unknown) => obj is boolean;
declare const isNum: (obj: unknown) => obj is number;
declare const isObj: (val: unknown) => val is Record<string, unknown>;
declare const isRegExp: (obj: unknown) => obj is RegExp;
declare const isMap: (obj: unknown) => obj is Map<any, any>;
declare const isWeakMap: (obj: unknown) => obj is WeakMap<any, any>;
declare const isSet: (obj: unknown) => obj is Set<any>;
declare const isWeakSet: (obj: unknown) => obj is WeakSet<any>;
declare const isSymbol: (obj: unknown) => obj is symbol;
declare const isNull: (val: any) => boolean;
declare const isUndefined: (val: any) => boolean;
declare const isDef: (val: any) => boolean;
declare const isUnDef: (val: any) => boolean;

declare type LogType = "error" | "warn" | "info";
declare type LogLevel = LogType | "silent";
interface LogOptions {
    /**
     * 输出之前清屏
     */
    clear?: boolean;
    /**
     * 输出的内容是否带有颜色
     */
    color?: boolean;
    timestamp?: boolean;
}
interface Logger {
    info(msg: string, options?: LogOptions): void;
    warn(msg: string, options?: LogOptions): void;
    warnOnce(msg: string, options?: LogOptions): void;
    error(msg: string, options?: LogOptions): void;
    clearScreen(msg: string, options?: LogOptions): void;
}
interface LoggerOptions {
    prefix?: string;
    allowClearScreen?: boolean;
    customLogger?: Logger;
}

declare const LogLevels: Record<LogLevel, number>;
declare function createLogger(level?: LogLevel, loggerOptions?: LoggerOptions): Logger;

declare const inBrowser: boolean;
declare type DownloadFileEventType = {
    beforeDownload?: (xhr: XMLHttpRequest) => void;
    onDownload?: (response: ProgressEvent<EventTarget>) => void;
};
declare const downloadFile: (url: string, filename?: string | number | undefined, { beforeDownload, onDownload }?: DownloadFileEventType) => void;

declare enum KeyCode {
    Backspace = "Backspace",
    Tab = "Tab",
    Enter = "Enter",
    Shift = "Shift",
    Control = "Control",
    Alt = "Alt",
    CapsLock = "CapsLock",
    Escape = "Escape",
    Space = " ",
    PageUp = "PageUp",
    PageDown = "PageDown",
    End = "End",
    Home = "Home",
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowRight = "ArrowRight",
    ArrowDown = "ArrowDown",
    Left = "Left",
    Up = "Up",
    Right = "Right",
    Down = "Down",
    Insert = "Insert",
    Delete = "Delete",
    Zero = "0",
    ClosedParen = ")",
    One = "1",
    ExclamationMark = "!",
    Two = "2",
    AtSign = "@",
    Three = "3",
    PoundSign = "\u00A3",
    Hash = "#",
    Four = "4",
    DollarSign = "$",
    Five = "5",
    PercentSign = "%",
    Six = "6",
    Caret = "^",
    Hat = "^",
    Seven = "7",
    Ampersand = "&",
    Eight = "8",
    Star = "*",
    Asterisk = "*",
    Nine = "9",
    OpenParen = "(",
    a = "a",
    b = "b",
    c = "c",
    d = "d",
    e = "e",
    f = "f",
    g = "g",
    h = "h",
    i = "i",
    j = "j",
    k = "k",
    l = "l",
    m = "m",
    n = "n",
    o = "o",
    p = "p",
    q = "q",
    r = "r",
    s = "s",
    t = "t",
    u = "u",
    v = "v",
    w = "w",
    x = "x",
    y = "y",
    z = "z",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z",
    Meta = "Meta",
    LeftWindowKey = "Meta",
    RightWindowKey = "Meta",
    Numpad0 = "0",
    Numpad1 = "1",
    Numpad2 = "2",
    Numpad3 = "3",
    Numpad4 = "4",
    Numpad5 = "5",
    Numpad6 = "6",
    Numpad7 = "7",
    Numpad8 = "8",
    Numpad9 = "9",
    Multiply = "*",
    Add = "+",
    Subtract = "-",
    DecimalPoint = ".",
    MSDecimalPoint = "Decimal",
    Divide = "/",
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8",
    F9 = "F9",
    F10 = "F10",
    F11 = "F11",
    F12 = "F12",
    NumLock = "NumLock",
    ScrollLock = "ScrollLock",
    SemiColon = ";",
    Equals = "=",
    Comma = ",",
    Dash = "-",
    Period = ".",
    UnderScore = "_",
    PlusSign = "+",
    ForwardSlash = "/",
    Tilde = "~",
    GraveAccent = "`",
    OpenBracket = "[",
    ClosedBracket = "]",
    Quote = "'"
}
declare const getKeyCodeFromEvent: (event: KeyboardEvent) => KeyCode;

declare class Queue<T> {
    private _size;
    private _head;
    private _tail;
    get size(): number;
    get front(): T | undefined;
    /**
     * @description 将元素添加到队列尾部
     * @param value 需要添加的值
     */
    enqueue(value: T): void;
    /**
     * @description 删除队列头部元素
     */
    dequeue(): T | undefined;
    clear(): void;
    forEach(callback: (value: T, index: number, queue: Queue<T>) => void): void;
    toArray(): T[];
}

interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}
declare class SinglyLinkedList<T extends any> {
    private compare;
    private _size;
    private _head;
    constructor(compare?: (a: T, b: T) => boolean);
    get size(): number;
    get front(): T | undefined;
    clear(): void;
    addFirst(value: T): LinkedListNode<T>;
    removeFirst(): T | undefined;
    findIndex(value: T): number;
    find(value: T): LinkedListNode<T> | null | undefined;
    insertAt(value: T, _index: number): LinkedListNode<T> | undefined;
    removeAt(_index: number): T | undefined;
    remove(value: T): number;
    at(_index: number): T | undefined;
    forEach(callback: (value: T, index: number, queue: SinglyLinkedList<T>) => void): void;
    toArray(): T[] | undefined;
}

interface SecondsFormatObject {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
/**
 * 获取这个月有多少天
 */
declare const getMonthDay: ({ year, month }?: {
    year?: number | undefined;
    month?: number | undefined;
}) => number;
declare const parseSeconds: (milliseconds: number) => SecondsFormatObject;
declare const formatSeconds: (formatter: string, timeData: SecondsFormatObject) => string;

/**
 * 如果字符串的长度小于指定的长度，那么在字符串的前面补充指定的字符串，直到字符串的长度达到指定的长度
 */
declare const padStart: (string: string, length: number, pad?: string) => string;
/**
 * 如果字符串的长度小于指定的长度，那么在字符串的后面补充指定的字符串，直到字符串的长度达到指定的长度
 */
declare const padEnd: (string: string, length: number, pad?: string) => string;
/**
 * 字符串的第一个字符转换为大写
 */
declare const upperFirst: (str: string) => string;
/**
 * 字符串的第index个字符转换为大写
 */
declare const upperAt: (str: string, index: number) => string;
/**
 * 字符串的第一个字符转换为小写
 */
declare const lowerFirst: (str: string) => string;
/**
 * 字符串的第index个字符转换为小写
 */
declare const lowerAt: (str: string, index: number) => string;

declare type Fn<T = void> = () => T;

declare function sleep(ms: number, callback?: Fn<any>): Promise<void>;
declare function to<D, E = Error>(promise: Promise<D>, errorExt?: Record<string, any>): Promise<[undefined, E] | [D, null]>;

export { LogLevel, LogLevels, LogOptions, LogType, Logger, LoggerOptions, Queue, SinglyLinkedList, clear, colorizeMessage, compose, contains, count, createLogger, deepClone, downloadFile, findIndexRight, findRight, flatten, forEachRight, formatSeconds, getKeyCodeFromEvent, getMonthDay, getType, hasIn, hexRgb, inBrowser, insert, insertAt, insertBefore, isArr, isBool, isDef, isEmpty, isFn, isHTMLElement, isMap, isNull, isNum, isObj, isPlainObj, isRegExp, isSet, isStr, isSymbol, isUnDef, isUndefined, isWeakMap, isWeakSet, isWindow, last, lowerAt, lowerFirst, omit, padEnd, padStart, parseSeconds, pick, remove, removeAllIf, removeAt, removeIf, repeat, rotate, sleep, to, toArray, upperAt, upperFirst };
