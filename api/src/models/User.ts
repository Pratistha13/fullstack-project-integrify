import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please Enter Your Password'],
    minLength: [6, 'Password should be greater than 6 characters'],
    select: false,
  },
  role: {
    type: String,
    default: 'user',
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
