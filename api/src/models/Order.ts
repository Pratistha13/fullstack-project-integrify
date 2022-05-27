import mongoose, { Document } from 'mongoose'

export type OrderDocument = Document & {
  price: number
  quantity: number
  products: string[]
  userId: string
}

const orderSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})
export default mongoose.model<OrderDocument>('Order', orderSchema)
