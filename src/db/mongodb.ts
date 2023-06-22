/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MongoClient } from 'mongodb'
import logger from '../logger/index'

// Connection string useful for Heroku where database connection
// string is supplied to application dyno through env. variable
// mongodb - Mongo URI string grabbed from config file
const connectionURI = process.env.MONGO_CONNECTION_URI

// Create a new MongoClient
const client = new MongoClient(connectionURI || '')

export const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect()

    // Establish and verify connection
    // const result = await client.db('pingData').stats()

    // if (!result.ok) {
    //   throw new Error('MongoDB connection --> FAIL')
    // }

    logger.info('MongoDB connection --> SUCCESS')
  } catch (error) {
    logger.error('MongoDB connection --> FAIL')

    // Ensures that the client will close when you finish/error
    await client.close()

    throw error
  }
}

export const getDB = () => client.db
export const disconnectDB = () => client.close()
