import axios from 'axios';
import { Dispatch } from 'redux';
import {
    addProductAction,
    ADD_PRODUCT_TO_CART,
    baseURL,
    Cart
  } from '../../types'
  
  export function addProducttoCart(product: Cart): addProductAction {
    return {
      type: ADD_PRODUCT_TO_CART,
      payload: {
        data: product,
      },
    }
  }

  export function addProducts(){
    return (dispatch: Dispatch) => {
      return axios.post(`${baseURL}/order/`).then((res) => {
        dispatch(addProducttoCart(res.data));
      });
    }; 
  }
