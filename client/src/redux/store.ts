import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { AppState, User } from "../types";
import createRootReducer from "./reducers";

const initState: AppState = {
  product: {
    products:[],
  },
  cart: {
    cart: [],
  },
  user: {
    users: []
  },
  login: {
    token: '',
    username: '',
    role: '',
    isLogged: false,
    isUserLoading: false,
    email: ''
  },

  } 

export default function makeStore(initialState = initState) {
  const middlewares = [thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if ((module as any).hot) {
    (module as any).hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
