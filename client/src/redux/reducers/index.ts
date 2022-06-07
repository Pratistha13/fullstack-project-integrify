import { combineReducers } from 'redux'

import cart from './cart'
import product from './product'


const createRootReducer = () =>
  combineReducers({
   
    product,
    cart,
   
  })

export default createRootReducer