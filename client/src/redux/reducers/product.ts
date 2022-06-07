import { ProductState, ProductActions, GET_ALL_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from '../../types'

export default function product(
  state: ProductState = {
    products: [],
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      const { products } = action.payload.products
      return {
        ...state,
        products,
      }
    }
    case ADD_PRODUCT: {
      console.log('add product reducer');
      console.log(action);
      console.log('state', state);

      const { product } = action.payload;
      return {
        products: [...state.products,product],
      };   
    }
  
    default:
      return state
  }
}