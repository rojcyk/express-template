import { Request, Response, NextFunction } from 'express'

/********************************
 * Local imports
 ********************************/

import ResponseError from '@utils/error'
import { getTokenContent, retrieveToken } from '@utils/auth'
import { findUserById } from '@controllers/userController'
import { UNPROCESSABLE_ENTITY } from '@constants/statusCodes'

/********************************
 * Middleware
 ********************************/

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = retrieveToken(req)
    if (token === null) throw new ResponseError(UNPROCESSABLE_ENTITY, 'You did not provided the requested token.')

    const tokenContent = getTokenContent(token)
    if (tokenContent === null) throw new ResponseError(UNPROCESSABLE_ENTITY, 'Invalid token')

    const user = await findUserById(tokenContent.id)
    if (user === undefined) throw new ResponseError(UNPROCESSABLE_ENTITY, 'The user does not exist')

    res.locals.session = user.toJSON

    next()
  } catch (err) {
    next(err)
  }
}

export default authorize


