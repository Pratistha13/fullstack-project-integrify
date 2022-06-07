import { ADD_PRODUCT_TO_CART, cartActions, CartState } from "../../types";

export default function cart(
  state: CartState = { data: [] },
  action: cartActions
): CartState {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { data } = action.payload;
      return { data: [...state.data, data] };
    }

    default:
      return state;
  }
}
