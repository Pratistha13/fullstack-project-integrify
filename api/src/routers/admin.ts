import express from 'express'

import {
  createProduct,
  updateProduct,
  deleteProduct,
  updateBan,
} from '../controllers/admin'
import verifyAdmin from '../middlewares/verifyAdmin'
import verifyAuth from '../middlewares/verifyAuth'

const router = express.Router()

// Every path we define here will get /api/v1/admin prefix
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)
router.put('/user/:userId', verifyAuth, updateBan)

export default router
