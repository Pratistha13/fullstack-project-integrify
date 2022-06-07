// import axios from "axios";
// import { Dispatch } from "redux";

// import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS,  Product } from "../../types";

// export function fetchProductsSuccess(products: Product[]) {
//   return {
//     type: FETCH_PRODUCTS_SUCCESS,
//     payload: {
//       products,
//     },
//   };
// }

// export function fetchProductsFailure(products: Product[]) {
//   return {
//     type: FETCH_PRODUCTS_FAILURE,
//     payload: {
//       products,
//     },
//   };
// }

// export function fetchProducts() {
//   return (dispatch: Dispatch) => {
//     return fetch(`http://localhost:5000/api/v1/product/`)
//       .then((resp) => resp.json())
//       .then((products) => {
//         dispatch(fetchProductsSuccess(products));
//       });
//   };
// }

import { Dispatch } from "redux";
import axios from "axios";

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  GET_ALL_PRODUCTS,
  ProductActions,
  Product,
  baseURL,
} from "../../types";

export function addProductSuccess(product: Product): ProductActions {
  console.log('addProduct', product)
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function getAllProducts(products: Product) {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function fetchAllProduct() {
  return (dispatch: Dispatch) => {
    return axios.get(`${baseURL}/product/`).then((res) => {
      dispatch(getAllProducts(res.data));
    });
  };
}

export function addProduct(product:Product){
  return async(dispatch: Dispatch) => {
    const res = await axios.post(`${baseURL}/product/`,product);
    console.log(res);
    dispatch(addProductSuccess(res.data))
  }; 
}
