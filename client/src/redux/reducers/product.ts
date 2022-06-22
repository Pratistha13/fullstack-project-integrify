import {
  ProductState,
  AllActions,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  MODIFY_PRODUCT,
} from "../../types";

export default function product(
  state: ProductState = {
    products: [],
  },
  action: AllActions
): ProductState {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      const { products } = action.payload;
      console.log("productfronmreducer", products);

      return {
        ...state,
        products,
      };
    }
    case ADD_PRODUCT: {
      console.log(action);
      console.log("reducerstate", state);

      const { product } = action.payload;
      return {
        products: [...state.products, product],
      };
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product: any) => {
          console.log("removeProduct product", product);
          console.log("removeProduct action.payload", action.payload);
          console.log("removeProduct action", action);

          return product._id !== action.payload.product._id;
        }),
      };
    }

    case MODIFY_PRODUCT: {
      console.log("action.payload", action.payload);
      const products = state.products.map((product) => {
        if (product._id === action.payload.product._id) {
          return action.payload.product;
        }
        return product;
      });

      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
}
