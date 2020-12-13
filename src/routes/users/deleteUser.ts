/*********************
 * Global imports
/*********************/

import { Request, Response, NextFunction } from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

// import ResponseError from '@src/error'
import { deleteUser } from '@controllers/UserController'
import { NO_CONTENT } from '@constants/statusCodes'

/*********************
 * Route
/*********************/

export const deleteUserRoute = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { user } = res.locals
    deleteUser(user)
    
    res
      .status(NO_CONTENT)
      .send()
  } catch (e) {
    next(e)
  }
}

export default deleteUserRoute