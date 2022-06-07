//Server route
export const baseURL = 'http://localhost:5000/api/v1'

// Action types
// Product
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCT'

export type Categories = "Men" | "Women" | "Kids" | "Accessories";
// A product
export type Product = {
  id: string
  name: string
  description: string
  categories: Categories[]
  variants: string[]
  sizes: string[]
  img: string
}


// Product actions

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}


export type GetAllProductsAction = {
  type: typeof GET_ALL_PRODUCTS
  payload: {
    products: any
  }
}

// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | GetAllProductsAction


export type ProductState = {
  products: Product[]
}

export type AppState = {
  product: ProductState
  cart: CartState

}

//cart
export type CartState = {
  data: Cart[]
}

export type Cart = {
  products:string[]
  userId:string
  quantity: number
  price: number
}

export type addProductAction = {
  type: typeof ADD_PRODUCT_TO_CART
  payload: {
    data: Cart
  }
}

export type cartActions =
  addProductAction
  