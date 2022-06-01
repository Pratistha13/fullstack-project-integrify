import { ProductsState, FETCH_PRODUCTS_SUCCESS } from "../../types";

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
    default:
      return state;
  }
}
