
//Server route
export const baseURL = 'http://localhost:5000/api/v1'


export type AppState = {
  product: ProductState
  cart: CartState
  user: UserState
  login: LoginState
}

// Action types
// Product
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCT'
export const MODIFY_PRODUCT = 'MODIFY_PRODUCT'



export type Categories = "Men" | "Women" | "Kids" | "Accessories";
// A product
export type Product = {
  _id: string
  name: string
  description: string
  categories: Categories[]
  variants: string[]
  sizes: string[]
  img: string
}


// Product actions

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof DELETE_PRODUCT
  payload: {
    product: Product
  }
}

export type EditProductAction = {
  type: typeof MODIFY_PRODUCT
  payload: {
    product: Product
  }
}

export type GetAllProductsAction = {
  type: typeof GET_ALL_PRODUCTS
  payload: {
    products: any
  }
}

// Use this union in reducer
export type ProductState = {
  products: Product[]
}

export type CartState = {
  cart: Product[]
}


export type AllActions = 
| AddProductAction
| RemoveProductAction
| EditProductAction
| GetAllProductsAction
| AddProductToCartAction
| RemoveProductFromCartAction

//Cart

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

export type AddProductToCartAction = {
  type: typeof ADD_PRODUCT_TO_CART
  payload: []
}

export type RemoveProductFromCartAction = {
  type: typeof REMOVE_PRODUCT_FROM_CART
  payload: []
}

//USERS
// export const GET_USERS = 'GET_USERS'
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
// export const GET_USER_FAILURE = 'GET_USER_FAILURE'
// export const CREATE_USER = 'CREATE_USER'
// export const CREATE_USER_FAILURE = 'CREATE_USER_ERROR'
// export const BAN_UNBAN_USER = 'BAN_UNBAN_USER'


export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const MODIFY_USER = 'MODIFY_USER'


export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type User = {
  _id: string
  isBanned: boolean
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  role: Role
}


// User actions

export type AddUserAction = {
  type: typeof ADD_USER
  payload: {
    user: User
  }
}

export type RemoveUserAction = {
  type: typeof DELETE_USER
  payload: {
    user: User
  }
}

export type EditUserAction = {
  type: typeof MODIFY_USER
  payload: {
    user: User
  }
}

export type GetAllUsersAction = {
  type: typeof GET_ALL_USERS
  payload: {
    users: any
  }
}

// Use this union in reducer
export type UserState = {
  users: User[]
}


export const USER_BAN = 'USER_BAN'
export const USER_UNBAN = 'USER_UNBAN'


export type userUnBanAction = {
  type: typeof USER_UNBAN
  payload: {
    id: string
  }
}
export type userBanAction = {
  type: typeof USER_BAN
  payload: {
    id: string
  }
}




export type UserActions = 
| AddUserAction
| RemoveUserAction
| EditUserAction
| GetAllUsersAction
| userBanAction
| userUnBanAction


// export enum Role {
//   ADMIN = 'ADMIN',
//   USER = 'USER',
// }

// export type User = {
//   _id: string
//   isBanned: boolean
//   firstName: string
//   lastName: string
//   userName: string
//   email: string
//   password: string
//   role: Role
// }

// export type UserState = {
//   loading: boolean
//   data: User[]
//   error: string
//   userCreation: User
//   isUserCreationError: boolean
//   creationError: string
// }
// export type userRequestAction = {
//   type: typeof GET_USERS
// }

// export type userSuccessAction = {
//   type: typeof GET_USER_SUCCESS
//   payload: {
//     data: User[]
//   }
// }

// export type userFailureAction = {
//   type: typeof GET_USER_FAILURE
//   payload: {
//     error: string
//   }
// }

// export type userCreationAction = {
//   type: typeof CREATE_USER
//   payload: {
//     data: User
//   }
// }

// export type userUpdateAction = {
//   type: typeof BAN_UNBAN_USER
//   payload: {
//     data: User
//   }
// }

// export type userCreationErrorActions = {
//   type: typeof CREATE_USER_FAILURE
//   payload: {
//     error: string
//   }
// }
// export type userActions =
//   | userSuccessAction
//   | userRequestAction
//   | userFailureAction
//   | userCreationAction
//   | userCreationErrorActions
//   | userUpdateAction


//LOGIN

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_CURRENT_SUCCESS = 'USER_CURRENT'
export const USER_CURRENT_LOAD = 'USER_CURRENT_LOAD'
export const USER_CURRENT_FAILURE = 'USER_CURRENT_FAILURE'
export const USER_UPDATE = 'USER_UPDATE'


export type LoginState = {
  token: string
  username: string
  role: string
  isLogged: boolean
  email: string
  user?: User
  isUserLoading?: boolean
  userLoadError?: string
}

export type signInAction = {
  type: typeof LOGIN_USER
  payload: {
    user: LoginState
  }
}

export type userLogOutAction = {
  type: typeof LOGOUT_USER
}

export type userCurrentAction = {
  type: typeof USER_CURRENT_SUCCESS
  payload: {
    data: User
  }
}

export type userCurrentLoadAction = {
  type: typeof USER_CURRENT_LOAD
}
export type userCurrentFailureAction = {
  type: typeof USER_CURRENT_FAILURE
  payload: {
    error: string
  }
}

export type loginActions =
  | signInAction
  | userLogOutAction
  | userCurrentAction
  | userCurrentLoadAction
  | userCurrentFailureAction
