import Express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

/*****************************
 * Local imports
 *****************************/

import ping from '@routes/ping'
import notFound from '@routes/404'
import handleError from '@routes/error'

/*****************************
 * EXPRESS
 *****************************/

const app: Express.Application = Express()

/*****************************
 * VENDOR MIDDLEWARE
 *****************************/

// Enabling cross origin support
app.use(cors())

// Basic express protection middleware
app.use(helmet())

// What body type is accepted
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*****************************
 * ROUTER
 *****************************/

 // Are we up yet?
app.use('/ping', ping)

app.get('/', (_req, res, _next) => {
  res.send({ message: 'Maybe sometimes.' })
})

/*****************************
 * ERROR HANDLER
 *****************************/

// Basically throws an error, needs to be before handleError
app.use(notFound)

// Handle error needs to be the last middleware
app.use(handleError)


/*****************************
 * EXPORT
 *****************************/

export default app