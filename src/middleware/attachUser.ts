/*********************
 * Global imports
/*********************/
import { Request, Response, NextFunction } from 'express'

/*********************
 * Local imports
/*********************/

import ResponseError from '@utils/error'
import { findUserById } from '@controllers/userController'
import { UNPROCESSABLE_ENTITY, NOT_FOUND } from '@constants/statusCodes'

/*********************
 * Middleware
/*********************/

export const attachUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.params)

    if (req.params.id === undefined) throw new ResponseError(UNPROCESSABLE_ENTITY, 'Missing required param')
    const id = req.params.id

    const user = await findUserById(id)
    if (user === undefined) throw new ResponseError(NOT_FOUND, 'The user does not exist')

    res.locals.user = user

    next()
  } catch (err) {
    next(err)
  }
}

export default attachUser