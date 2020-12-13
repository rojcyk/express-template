/*********************
 * EXTERNAL IMPORTS
/*********************/

import { Request, Response, NextFunction } from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

import { UNPROCESSABLE_ENTITY, CONFLICT } from '@constants/statusCodes'
import ResponseError from '@utils/error'
import { createUser, isValidUser, findUserByEmail } from '@controllers/userController'

/*********************
 * Route
/*********************/

export default async (req: Request, res: Response, next:NextFunction) => {
  try {
    const isUserValid = isValidUser(req)
    if (!isUserValid) throw new ResponseError(UNPROCESSABLE_ENTITY, 'You did not provide the required information.')

    const { email, password, username } = req.body

    const user = await findUserByEmail(email)
    if (user) throw new ResponseError(CONFLICT, 'The requested user already exist.')

    const newUser = await createUser({
      email: email,
      username: username,
      password: password
    })

    res.send({ data: {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    }})
  } catch (e) {
    next(e)
  }
}