'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');
var process = require('process');
var url = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var process__default = /*#__PURE__*/_interopDefaultLegacy(process);

const typeMappings = {
  directory: "isDirectory",
  file: "isFile"
};
const matchType = (type, stat) => {
  if (type === void 0)
    return true;
  const typeMethod = typeMappings[type];
  if (stat[typeMethod]())
    return stat[typeMethod]();
  return false;
};
const toPath = (urlOrPath) => urlOrPath instanceof URL ? url.fileURLToPath(urlOrPath) : urlOrPath;
function locatePath(paths, {
  cwd = process__default["default"].cwd(),
  type = "file",
  allowSymlinks = true,
  getAllMatched = false,
  absolute = false
} = {}) {
  const cwdStr = toPath(cwd);
  const statFunction = allowSymlinks ? fs__default["default"].statSync : fs__default["default"].lstatSync;
  const getMatchedPath = (filepath) => {
    try {
      const stat = statFunction(path__default["default"].resolve(cwdStr, filepath));
      return matchType(type, stat);
    } catch (e) {
      return false;
    }
  };
  if (getAllMatched) {
    const matchedPaths = paths.filter(getMatchedPath);
    if (absolute)
      return matchedPaths.map((p) => path__default["default"].resolve(cwdStr, p));
    return matchedPaths;
  }
  const matchedPath = paths.find(getMatchedPath);
  if (absolute && matchedPath)
    return path__default["default"].resolve(cwdStr, matchedPath);
  return matchedPath;
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function findUpMultiple(name, options) {
  let directory = path.resolve(toPath(options.cwd || ""));
  const { root } = path.parse(directory);
  const stopAt = path.resolve(directory, options.stopAt || root);
  const limit = options.limit || Number.POSITIVE_INFINITY;
  const paths = [name].flat();
  let matches = [];
  while (stopAt !== directory) {
    let foundPath = locatePath(paths, __spreadProps(__spreadValues({}, options), { cwd: directory }));
    if (foundPath) {
      foundPath = Array.isArray(foundPath) ? foundPath : [foundPath];
      matches = matches.concat(foundPath.map((t) => path.resolve(directory, t)));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = path.dirname(directory);
  }
  return matches;
}
const findUp = (name, options = {}) => {
  const matches = findUpMultiple(name, __spreadProps(__spreadValues({}, options), { limit: 1 }));
  return matches[0];
};

const npmRun = (agent) => (args) => {
  if (args.length > 1)
    return `${agent} run ${args[0]} -- ${args.slice(1).join(" ")}`;
  return `${agent} run ${args[0]}`;
};
const AGENTS = {
  npm: {
    run: npmRun("npm"),
    install: "npm i",
    frozen: "npm ci",
    global: "npm i -g {0}",
    add: "npm i {0}",
    upgrade: "npm update {0}",
    "upgrade-interactive": null,
    execute: "npx {0}",
    uninstall: "npm uninstall {0}",
    global_uninstall: "npm uninstall -g {0}"
  },
  yarn: {
    run: "yarn run {0}",
    install: "yarn install",
    frozen: "yarn install --frozen-lockfile",
    global: "yarn global add {0}",
    add: "yarn add {0}",
    upgrade: "yarn upgrade {0}",
    "upgrade-interactive": "yarn upgrade-interactive {0}",
    execute: "yarn dlx {0}",
    uninstall: "yarn remove {0}",
    global_uninstall: "yarn global remove {0}"
  },
  "yarn@berry": {
    run: "yarn run {0}",
    install: "yarn install",
    frozen: "yarn install --immutable",
    global: "npm i -g {0}",
    add: "yarn add {0}",
    upgrade: "yarn up {0}",
    "upgrade-interactive": "yarn up -i {0}",
    execute: "yarn dlx {0}",
    uninstall: "yarn remove {0}",
    global_uninstall: "npm uninstall -g {0}"
  },
  pnpm: {
    run: npmRun("pnpm"),
    install: "pnpm i",
    frozen: "pnpm i --frozen-lockfile",
    global: "pnpm add -g {0}",
    add: "pnpm add {0}",
    upgrade: "pnpm update {0}",
    "upgrade-interactive": "pnpm update -i {0}",
    execute: "pnpm dlx {0}",
    uninstall: "pnpm remove {0}",
    global_uninstall: "pnpm remove --global {0}"
  }
};
const agents = Object.keys(AGENTS);
const LOCKS = {
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm"
};
const detectInstaller = (cwd) => {
  let agent = null;
  const lockPath = findUp(Object.keys(LOCKS), { cwd });
  let packageJSONPath = "";
  if (lockPath) {
    packageJSONPath = path.resolve(lockPath, "../package.json");
  } else {
    packageJSONPath = findUp("package.json", { cwd });
  }
  if (packageJSONPath && fs.existsSync(packageJSONPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(packageJSONPath, "utf8"));
      if (typeof pkg.packageManager === "string") {
        const [name, version] = pkg.packageManager.split("@");
        if (name === "yarn" && parseInt(version, 10) > 1)
          agent = "yarn@berry";
        else if (name in AGENTS)
          agent = name;
        else
          console.warn("Unknown packageManager:", pkg.packageManager);
      }
    } catch (e) {
    }
  }
  if (!agent && lockPath) {
    agent = LOCKS[path.basename(lockPath)];
  }
  return agent;
};

exports.AGENTS = AGENTS;
exports.LOCKS = LOCKS;
exports.agents = agents;
exports.detectInstaller = detectInstaller;
exports.findUp = findUp;
exports.findUpMultiple = findUpMultiple;
exports.locatePath = locatePath;
exports.toPath = toPath;
