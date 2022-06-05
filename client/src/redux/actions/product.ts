import { Dispatch } from "redux";

import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS,  Product } from "../../types";

export function fetchProductsSuccess(products: Product[]) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
}

export function fetchProductsFailure(products: Product[]) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      products,
    },
  };
}


// An Example of Async action processed by redux-thunk middleware
export function fetchProducts() {
  return (dispatch: Dispatch) => {
    return fetch(`http://localhost:5000/api/v1/product/`)
      .then((resp) => resp.json())
      .then((products) => {
        dispatch(fetchProductsSuccess(products));
      });
  };
}
