import { combineReducers } from 'redux'

import cart from './cart'
import product from './product'
import user from './user'
import login from './login'





const createRootReducer = () =>
  combineReducers({
   
    product,
    cart,
    user,
    login
   
  })

export default createRootReducer