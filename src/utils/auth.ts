import jwt from 'jsonwebtoken'
import { Request } from 'express'

/********************************
 * Local imports
 ********************************/

import User from '@models/User'

/********************************
 * Typings
 ********************************/

export interface TokenContent {
  id: string,
  email: string,
}

/********************************
 * Helpers
 ********************************/

/**
 * verify if token is valid
 * @param {*} token
 * @return {boolean}
 */
export const getTokenContent = (token: any) => {
  try {
    const contents = jwt.verify(token, process.env.JWT_SECRET as string) as TokenContent
    return contents
  } catch (error) {
    return null;
  }
}

/**
 * verify if token is valid
 * @param {*} token
 * @return {boolean}
 */
export const setToken = (user: User) => {
  return jwt.sign({
    id: user.id,
    email: user.email
  },
    process.env.JWT_SECRET as string,
  {
    expiresIn: "30 days"
  })
} 

/**
 * retrieve token from header
 * @param {*} headers
 * @return {string} token or null
 */
export const retrieveToken = (req: Request) => {
  const headers = req.headers
  const authorization = headers.authorization

  if (authorization === null) return null
  else return authorization
}

/********************************
 * Export
 ********************************/

 export default {
  getContent: getTokenContent,
  set: setToken,
  retrieve: retrieveToken
}