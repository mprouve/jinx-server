import config from '../config'
import buildLoggerDev from './logger-dev'
import buildLoggerProd from './logger-prod'

const logger = config?.env === 'prod' ? buildLoggerProd() : buildLoggerDev()

export default logger
