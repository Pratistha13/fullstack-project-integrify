import { combineReducers } from "redux";

import product from "./product";

const rootReducer = () =>
  combineReducers({
    products: product,
  });

export default rootReducer;
