import express from 'express'

import {
  createOrder,
  findById,
  deleteOrder,
  findAll,
  updateOrder,
} from '../controllers/order'

import verifyAuth from '../middlewares/verifyAuth'

const router = express.Router()

// Every path we define here will get /api/v1/order prefix
router.get('/', verifyAuth, findAll)
router.get('/:orderId', findById)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)
router.post('/', createOrder)

export default router
