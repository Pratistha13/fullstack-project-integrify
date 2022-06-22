import { Dispatch } from "redux";
import axios from "axios";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  MODIFY_PRODUCT,
  AllActions,
  Product,
  baseURL,
} from "../../types";

export function addProductSuccess(product: Product): AllActions {
  console.log('addProduct', product)
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(id: any){
  console.log('removeProductproductId',id);
  
  return{
    type: DELETE_PRODUCT,
    payload:{
      id,
    }
  }
}

export function getAllProducts(products: Product) {
  console.log('getAllProducts',products)
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    }, 
  }
}

export function modifyProduct(product: Product): AllActions {
  return {
    type: MODIFY_PRODUCT,
    payload: {
      product,
    },
  }
}

export function fetchAllProduct() {
  return (dispatch: Dispatch) => {
    return axios.get(`${baseURL}/product/`).then((res) => {
      console.log('fetchAllProduct',res.data);
      dispatch(getAllProducts(res.data));
    });
  };
}

export function addProduct(token: string, product:Product){
  console.log('addProduct',product);

  return async(dispatch: Dispatch) => {
    const res = await axios.post(`${baseURL}/product/`,product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    
    dispatch(addProductSuccess(res.data))
  }; 
}

export function deleteProduct(token: string, id:string){
  
  console.log('deleteProduct productID before return',id);

  return async(dispatch: Dispatch) => {
    const res = await axios.delete(`${baseURL}/product/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });
    console.log('deleteProduct productID',id);
    console.log('deleteProduct',res);
    
    dispatch(removeProduct(id))
  }; 
}



export function editProduct(token: string, product :Product, id:string) {
  return async(dispatch: Dispatch) =>{
    const res = await axios.put(`${baseURL}/product/${id}`, product,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    
    dispatch(modifyProduct(res.data))
  }
 
};