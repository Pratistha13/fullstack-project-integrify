import mongoose, { Document } from 'mongoose'

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
type UserStatus = 'banned' | 'notBanned'

export type UserDocument = Document & {
  userStatus: UserStatus
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  role: Role
}

const userSchema = new mongoose.Schema({
  userStatus: {
    type: String,
    default: 'notBanned',
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