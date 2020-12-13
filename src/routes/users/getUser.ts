/*********************
 * Global imports
/*********************/

import { Request, Response, NextFunction } from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

// import ResponseError from '@src/error'
// import { deleteUser } from '@controllers/UserController'
// import { NO_CONTENT } from '@constants/statusCodes'

/*********************
 * Route
/*********************/

export const getUserRoute = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { user } = res.locals
    res.send(user?.toJSON)
  } catch (e) {
    next(e)
  }
}

export default getUserRoute