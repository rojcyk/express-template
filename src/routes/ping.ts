/*********************
 * EXTERNAL IMPORTS
/*********************/

import Express from 'express'

/*********************
 * LOCAL IMPORTS
/*********************/

/*********************
 * SETUP
/*********************/

const router = Express.Router()

/*********************
 * ROUTES
/*********************/

router.get('/', (_req, res, _next) => {
  res.send({ message: 'Pong' })
})

/******************** *
 * EXPORTS
/******************** */

export default router