import { ProductsState, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../../types";

export default function product(
  state: ProductsState = {
    items: [],
    isLoading: false,
    error: null,
  },
  action: any
): ProductsState {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return { ...state, items: action.payload.products };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return { ...state, error: action.payload.products, isLoading:false };
    }

    default:
      return state;
  }
}
