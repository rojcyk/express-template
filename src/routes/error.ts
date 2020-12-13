/*****************************
 * External imports
 *****************************/

import Express from 'express'

/*****************************
 * Local imports
 *****************************/

 import ResponseError from '@utils/error'
 import { INTERNAL_SERVER_ERROR } from '@constants/statusCodes'

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
    if (process.env.NODE_ENV === 'development') {
      console.log(err.message)
    }

    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      code: 500,
      message: 'Unexpected error, sorry.'
    })
  }
}

export default handleError