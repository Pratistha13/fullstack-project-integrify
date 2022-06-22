import express from 'express'

import {
  createProduct,
  findById,
  deleteProduct,
  findAll,
  updateProduct,
} from '../controllers/product'
import verifyAuth from '../middlewares/verifyAuth'
import verifyAdmin from '../middlewares/verifyAdmin'

const router = express.Router()

// Every path we define here will get /api/v1/product prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', verifyAuth, verifyAdmin, updateProduct)
router.delete('/:productId', verifyAuth, verifyAdmin, deleteProduct)
router.post('/', verifyAuth, verifyAdmin, createProduct)

export default router
