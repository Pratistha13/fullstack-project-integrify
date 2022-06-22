import { Request, Response, NextFunction } from 'express'

import { Role } from '../models/User'
import { ForbiddenError } from '../helpers/apiError'

export default function verifyAdmin(
  req: Request,

  res: Response,

  next: NextFunction
) {
  try {
    const user = req.user as { role: Role }

    if (user.role !== Role.ADMIN) {
      throw new ForbiddenError()
    }

    next()
  } catch (error) {
    console.log('error:', error)

    throw new ForbiddenError()
  }
}
