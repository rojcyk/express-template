/*****************************
 * External imports
 *****************************/

import Express from 'express'

/*****************************
 * Local imports
 *****************************/

import { NOT_FOUND } from '@constants/statusCodes'
import ResponseError from '../error'

/*****************************
 * Route
 *****************************/

export const NotFound = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  try {
    throw new ResponseError(NOT_FOUND, 'The requested resource is not available')
  } catch (err) {
    next(err)
  }
}

export default NotFound