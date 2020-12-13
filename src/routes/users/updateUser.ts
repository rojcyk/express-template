/*********************
 * Global imports
/*********************/

import { Request, Response, NextFunction } from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

import ResponseError from '@utils/error'
import { updateUser } from '@controllers/UserController'
import { UNPROCESSABLE_ENTITY, NO_CONTENT } from '@constants/statusCodes'

/*********************
 * Route
/*********************/

export const updateUserRoute = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { user } = res.locals
    const body = req.body

    let changed = false
    let newData = {}

    if (req.body.email) {
      Object.assign(newData, { email: body.email })
      changed = true
    }

    if (req.body.password) {
      Object.assign(newData, { password: body.password })
      changed = true
    }

    if (req.body.username) {
      Object.assign(newData, { username: body.username })
      changed = true
    }

    if (changed === false) throw new ResponseError(UNPROCESSABLE_ENTITY, 'You did not provide any valid argument.')

    await updateUser(user, newData)

    res
      .status(NO_CONTENT)
      .send(user?.toJSON)
  } catch (e) {
    console.log(e)
    next(e)
  }
}

export default updateUserRoute