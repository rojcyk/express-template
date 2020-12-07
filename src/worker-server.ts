/*********************
 * EXTERNAL IMPORTS
/*********************/

import 'reflect-metadata'
import { createConnection, ConnectionOptions } from 'typeorm'

/*********************
 * LOCAL IMPORTS
/*********************/

import app from './app'
import dbConfig from '../ormconfig'

/*********************
 * SAFEGUARDS
/*********************/

const PORT = process.env.PORT || '8000'

/*********************
 * Connecting to database
/*********************/

createConnection(dbConfig as ConnectionOptions).then(connection => {
  console.log(`[server] Local enviroment: ${process.env.NODE_ENV}`)
  console.log(`[server] Server application is up and running on https://localhost:${PORT}`)

  app.listen(PORT)

}).catch(error => console.log("[server] TypeORM connection error: ", error))