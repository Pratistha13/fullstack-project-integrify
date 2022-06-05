import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import userRouter from './routers/user'
import productRouter from './routers/product'
import orderRouter from './routers/order'
import adminRouter from './routers/admin'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import passport from 'passport'
import loginWithGogle from './passport/google'

dotenv.config({ path: '.env' })
const app = express()

app.use(cors())

app.use(passport.initialize())
passport.use(loginWithGogle())

app.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    const user = req.user as { email: string; role: string }
    const JWT_SECRET = process.env.JWT_SECRET as string
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    })
    console.log('value from controller', user)
    res.json({ token })
  }
)

// Express configuration
app.set('port', process.env.PORT || 5000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/admin', adminRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
