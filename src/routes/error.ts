/*****************************
 * External imports
 *****************************/

import Express from 'express'

/*****************************
 * Local imports
 *****************************/

 import ResponseError from '../error'

/*******************************************************
 * 
 * Handle Error
 * 
 * Used as the last possible route in the app.
 * 
 *******************************************************/

export const handleError = (
  err: ResponseError | Error,
  _req: Express.Request,
  res: Express.Response,
  _next: Express.NextFunction
) => {
  if (err instanceof ResponseError) {
    const { statusCode, message, body } = err

    res.status(statusCode).json({
      status: 'error',
      code: statusCode,
      message,
      ...body
    })
  } else {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unexpected error, sorry.'
    })
  }
}

export default handleError