import express from 'express'

import {
  createProduct,
  updateProduct,
  deleteProduct,
  updateBan,
} from '../controllers/admin'

const router = express.Router()

// Every path we define here will get /api/v1/admin prefix
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)
router.put('/user/:userId', updateBan)

export default router
