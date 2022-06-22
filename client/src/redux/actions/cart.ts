import axios from 'axios'
import { Dispatch } from 'react'

import {
  ADD_PRODUCT_TO_CART,
  Product,
  REMOVE_PRODUCT_FROM_CART,
  baseURL,
  AllActions,
  GET_ALL_PRODUCTS,
} from '../../types'

const url = `${baseURL}/product/`
export const fetchAllProduct = () => async (dispatch: Dispatch<AllActions>) => {
    const { data } = await axios.get(url)
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data,
    })
  }


export const addProductToCart = (items: Product[] | any): AllActions => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: items,
  }
}

export const removeProductfromCart = (items: Product[] | any): AllActions => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: items,
  }
}