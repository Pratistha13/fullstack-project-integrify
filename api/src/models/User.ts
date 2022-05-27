import mongoose, { Document } from 'mongoose'

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type UserDocument = Document & {
  isBanned: boolean
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  role: Role
}

const userSchema = new mongoose.Schema({
  isBanned: {
    type: Boolean,
    default: false,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 10,
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
    default: Role.USER,
    enum: ['USER', 'ADMIN'],
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
