import metadata from './metadata/metadata.json'
import { Config, ServerEnvironment } from './typings/config.d'

const getConfig = (): Config => {
  const version = process.env.VERSION || '0.0.0'
  const nodeEnv: string = process.env.NODE_ENV || 'development'
  const serverEnv = (process.env.APP_ENV as ServerEnvironment) || 'local'
  const isProd: boolean = serverEnv === 'prod'

  /**
   * Set global config settings
   */
  const config: Config = {
    node_env: nodeEnv,
    env: serverEnv,
    is_prod: isProd,
    version: `${version}-${metadata.build}`,
    logger_level: isProd ? 'http' : 'debug',
    base_url: {
      jynx: process.env.APP_URL || ''
    },
    app: {
      url: process.env.APP_URL || '',
      port: process.env.PORT || 10000,
      public_dir: isProd ? '../src/public' : 'public',
      entry_file: isProd ? '../src/public/index.html' : 'public/index.html'
    }
  }

  return config
}

const config: Config = getConfig()

export default config
