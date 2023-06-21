import loggerConfig from './config'
import { createLogger, format, transports, addColors } from 'winston'
import * as stream from 'stream'
import config from '../config'

const { combine, timestamp, printf, colorize, errors } = format

const buildLoggerDev = (): any => {
  // Custom log format
  const myFormat = printf(({ level, message, timestamp, stack }) => {
    return `[${level}] [${timestamp}] ${stack || message}`
  })
  // Transport to print logs to console
  const consoleTransport = new transports.Console()

  addColors(loggerConfig.colors)

  const logger = createLogger({
    levels: loggerConfig.levels,
    level: config.logger_level,
    format: combine(
      colorize({ all: true }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      myFormat
    ),
    transports: [consoleTransport]
  })

  logger.stream = () => {
    return new stream.Duplex({
      write: function (message: string) {
        logger.info(message.trim())
      }
    })
  }

  return logger
}

export default buildLoggerDev
