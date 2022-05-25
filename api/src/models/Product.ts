import mongoose, { Document } from 'mongoose'

export type Categories = 'Men' | 'Women' | 'Kids' | 'Accessories'

export type ProductDocument = Document & {
  name: string
  description: string
  categories: Categories[]
  variants: string[]
  sizes: string[]
  img: string
  // userId: string
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: [String],
  variants: [String],
  sizes: {
    type: Array,
    default: ['XS', 'S', 'M', 'L', 'XL'],
  },
  img: String,

  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
