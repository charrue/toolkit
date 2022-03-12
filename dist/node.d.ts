declare const AGENTS: {
    npm: {
        run: (args: string[]) => string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        "upgrade-interactive": null;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    yarn: {
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        "upgrade-interactive": string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    "yarn@berry": {
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        "upgrade-interactive": string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    pnpm: {
        run: (args: string[]) => string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        "upgrade-interactive": string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
};
declare type Agent = keyof typeof AGENTS;
declare type Command = keyof typeof AGENTS.npm;
declare const agents: ("npm" | "pnpm" | "yarn" | "yarn@berry")[];
declare const LOCKS: Record<string, Agent>;
/**
 * @description 检测使用的是哪种包管理器
 * @param {string} cwd 当前工作目录
 */
declare const detectInstaller: (cwd: string) => "npm" | "pnpm" | "yarn" | "yarn@berry" | null;

interface LocatePathOptions {
    /** 当前工作目录  */
    cwd?: URL | string;
    /** 想要匹配的文件类型  */
    type?: "file" | "directory";
    allowSymlinks?: boolean;
    /** 返回所有匹配成功的文件  */
    getAllMatched?: boolean;
    /** 是否返回绝对路径  */
    absolute?: boolean;
    /** 同时挂起的 Promise 的数量。最小是1  */
    concurrency?: number;
    /** 搜索时保留顺序  */
    preserveOrder?: boolean;
}
declare const toPath: (urlOrPath: any) => any;
declare function locatePath(paths: string[], { cwd, type, allowSymlinks, getAllMatched, absolute, }?: Omit<LocatePathOptions, "concurrency">): string | string[] | undefined;

interface FindPathOptions extends Omit<LocatePathOptions, "absolute"> {
    stopAt?: string;
    limit?: number;
}
declare function findUpMultiple(name: string | string[], options: FindPathOptions): string[];
declare const findUp: (name: string | string[], options?: Omit<FindPathOptions, "getAllMatched" | "limit">) => string;

export { AGENTS, Agent, Command, FindPathOptions, LOCKS, LocatePathOptions, agents, detectInstaller, findUp, findUpMultiple, locatePath, toPath };
