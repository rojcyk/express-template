/*********************
 * EXTERNAL IMPORTS
/*********************/

import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

import { setToken } from '@utils/auth'
import ResponseError from '@utils/error'
import { findUserByEmail } from '@controllers/userController'
import { UNPROCESSABLE_ENTITY, UNAUTHORIZED } from '@constants/statusCodes'

/*********************
 * Route
/*********************/

export default async (req: Request, res: Response, next:NextFunction) => {
  try {
    if (req.body.email === undefined) throw new ResponseError(UNPROCESSABLE_ENTITY, 'Missing email')
    if (req.body.password === undefined) throw new ResponseError(UNPROCESSABLE_ENTITY, 'Missing password')

    const user = await findUserByEmail(req.body.email)
    if (user === undefined) throw new ResponseError(UNPROCESSABLE_ENTITY, 'User not found')

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (valid === false) throw new ResponseError(UNAUTHORIZED, 'Password is not correct')  

    const token = setToken(user)

    res.send({
      token: token
    })
  } catch (e) {
    next(e)
  }
}