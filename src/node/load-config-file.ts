// from https://github.com/vitejs/vite/blob/main/packages/vite/src/node/config.ts
import path from "path"
import { build } from "esbuild"

interface NodeModuleWithCompile extends NodeModule {
  _compile(code: string, filename: string): any
}

const bundleConfigFile = async (filename: string) => {
  const result = await build({
    entryPoints: [filename],
    outfile: 'out.js',
    tsconfig: "tsconfig.node.json",
    absWorkingDir: process.cwd(),
    write: false,
    platform: 'node',
    bundle: true,
    format: 'cjs',
    metafile: true,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            const id = args.path
            if (id[0] !== '.' && !path.isAbsolute(id)) {
              return {
                external: true
              }
            }
          })
        }
      },
    ]
  })
  const { text } = result.outputFiles[0]
  return {
    code: text,
    dependencies: result.metafile ? Object.keys(result.metafile.inputs) : []
  }
}


const loadConfigFromBundledFile = async (fileName: string, bundledCode: string) => {
  const extension = path.extname(fileName)
  const defaultLoader = require.extensions[extension]!
  require.extensions[extension] = (module, filename) => {
    if (filename === fileName) {
      (module as NodeModuleWithCompile)._compile(bundledCode, filename)
    } else {
      defaultLoader(module, filename)
    }
  }
  delete require.cache[require.resolve(fileName)]
  const raw = require(fileName)
  const config = raw.__esModule ? raw.default : raw
  require.extensions[extension] = defaultLoader
  return config
}

export const loadConfigFromFile = async (configFilePath: string) => {
  const bundled = await bundleConfigFile(configFilePath)
  let dependencies = bundled.dependencies
  let userConfig = await loadConfigFromBundledFile(configFilePath, bundled.code)
  const config = await (typeof userConfig === 'function'
    ? userConfig()
    : userConfig)

  return {
    config,
    dependencies
  }
}