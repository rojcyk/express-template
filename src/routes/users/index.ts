/*********************
 * External imports
/*********************/

import { Router } from 'express'

/*********************
 * Local imports
/*********************/

import attachUser from '@middleware/attachUser'
import getUser from './getUser'
import updateUser from './updateUser'
import deleteUser from './deleteUser'

/*********************
 * Routes
/*********************/

const UserRouter = Router()

UserRouter.use('/:id', attachUser)
UserRouter.get('/:id', getUser)
UserRouter.put('/:id', updateUser)
UserRouter.delete('/:id', deleteUser)

/*********************
 * Exports
/*********************/

export default UserRouter