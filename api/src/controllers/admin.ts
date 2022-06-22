import { Request, Response, NextFunction } from 'express'

import Product from '../models/Product'
import AdminService from '../services/admin'
import { BadRequestError } from '../helpers/apiError'

//Create product
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, categories, variants, sizes, img, orderId } =
      req.body

    const product = new Product({
      name,
      description,
      categories,
      variants,
      sizes,
      img,
      orderId,
    })

    await AdminService.create(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// Update product PUT /product/:productId
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId
    const updatedProduct = await AdminService.update(productId, update)
    res.json(updatedProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /product/:productId
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await AdminService.deleteProduct(req.params.productId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

//Ban/Unban user PUT /admin/:userId
export const updateBan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isBanned } = req.body
    const user = {
      isBanned,
    }
    const updateUser = await AdminService.updateBan(req.params.userId, user)
    res.json(updateUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
