import express from 'express'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  updateUser,
} from '../controllers/user'
import verifyAuth from '../middlewares/verifyAuth'
import verifyAdmin from '../middlewares/verifyAdmin'

const router = express.Router()

// Every path we define here will get /api/v1/user prefix
router.get('/', findAll)
router.get('/:userId', verifyAuth, verifyAdmin, findById)
router.put('/:userId', verifyAuth, verifyAdmin, updateUser)
router.delete('/:userId', verifyAuth, verifyAdmin, deleteUser)
router.post('/', createUser)

export default router
