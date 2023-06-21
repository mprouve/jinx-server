type LogLevel = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'

export type ServerEnvironment = 'local' | 'dev' | 'staging' | 'prod'
export interface Config {
  node_env: string
  env: ServerEnvironment
  is_prod: boolean
  version: string
  logger_level: LogLevel
  base_url: {
    jynx: string
  }
  app: {
    url: string
    port: string | number
    public_dir: string
    entry_file: string
  }
}
