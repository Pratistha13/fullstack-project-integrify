import {
  ADD_PRODUCT_TO_CART,
  AllActions,
  Product,
  REMOVE_PRODUCT_FROM_CART,
} from '../../types'

type InitState = {
  cart: Product[] | Product | any
}

const CartState: InitState = {
  cart: [],
}

const cart = (state = CartState, action: AllActions): InitState => {
  switch (action.type) {
  case ADD_PRODUCT_TO_CART:
    return {
      ...state,
      cart: state.cart.concat(action.payload),
    }

  case REMOVE_PRODUCT_FROM_CART:
    return {
      ...state,
      cart: state.cart.filter(
        (left_Item: any) => left_Item !== action.payload
      ),
    }

  default:
    return state
  }
}

export default cart