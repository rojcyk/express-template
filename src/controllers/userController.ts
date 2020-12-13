/********************************
 * Global
 ********************************/

import bcrypt from 'bcrypt'
import { Request } from 'express'
import { getRepository } from 'typeorm'

/********************************
 * Local imports
 ********************************/

import User from '../models/User'

/********************************
 * Types
 ********************************/

interface NewUserEntity {
  email: string,
  password: string,
  username?: string
}

interface UpdateUserEntity {
  email?: string,
  password?: string,
  username?: string
}

/********************************
 * Controllers
 ********************************/

const SALT_ROUNDS = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10

 /**
 * Check for required params
 * @param {*} request
 * @return {boolean}
 */
export const isValidUser = (request: Request): boolean => {
  const email = request.body.email || ''
  const password = request.body.password || ''

  if (email && password) return true
  else return false
}

/**
 * Create a user
 * @param {Object} user - The user
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The users's password.
 * @param {string} user.username - The users's username.
 */
export const createUser = async (newUser: NewUserEntity) => {
  const Users = getRepository(User)
  const user = new User()

  user.email = newUser.email
  user.password = await bcrypt.hash(newUser.password, SALT_ROUNDS)
  user.username = newUser.username

  return await Users.save(user)
}

/**
 * Update a user
 * @param {Object} user - The user  entity
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The users's password.
 * @param {string} user.username - The users's username.
 */
export const updateUser = async (user: User, newValues: UpdateUserEntity): Promise<User> => {
  const Users = getRepository(User)

  if (newValues.email) user.email = newValues.email
  if (newValues.password) user.password = await bcrypt.hash(newValues.password, SALT_ROUNDS)
  if (newValues.username) user.username = newValues.username

  return await Users.save(user)
}

/**
 * Update a user
 * @param {Object} user - The user entity
 */
export const deleteUser = async (user: User): Promise<boolean> => {
  const Users = getRepository(User)
  await Users.remove(user)
  return true
}

/**
 * Find a user by ID
 * @param {String} id - The user id
 */
export const findUserById = async (id: string) => {
  const Users = getRepository(User)
  return await Users.findOne({ where: { id: id } })
}

/**
 * Find a user by Email
 * @param {String} id - The user id
 */
export const findUserByEmail = async (email: string) => {
  const Users = getRepository(User)
  return await Users.findOne({ where: { email: email } })
}

 /********************************
 * Export
 ********************************/

 export default {
   isValid: isValidUser,
   create: createUser,
   update: updateUser,
   delete: deleteUser,
   findById: findUserById,
   findByEmail: findUserByEmail
 }