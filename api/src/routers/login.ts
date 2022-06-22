import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'

const router = express.Router()

// Every path we define here will get /google-login prefix

router.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    const user = req.user as { email: string; role: string }
    const JWT_SECRET = process.env.JWT_SECRET as string

    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    })
    res.json({ token, user })
  }
)

export default router

// app.post(
//     '/google-login',
//     passport.authenticate('google-id-token', { session: false }),
//     (req, res) => {
//       const user = req.user as { email: string; role: string }
//       const JWT_SECRET = process.env.JWT_SECRET as string
//       const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
//         expiresIn: '1h',
//       })
//       console.log('value from controller', user)
//       res.json({ token })
//     }
//   )
