import { Dispatch } from 'redux'
import axios from 'axios'

import {
  loginActions,
  LoginState,
  User,
  userCurrentAction,
  userCurrentFailureAction,
  userCurrentLoadAction,
  userLogOutAction,
  USER_CURRENT_SUCCESS,
  USER_CURRENT_FAILURE,
  USER_CURRENT_LOAD,
  LOGIN_USER,
  LOGOUT_USER,
} from '../../types'

export function setSigningIn(login: LoginState): loginActions {
  return {
    type: LOGIN_USER,
    payload: {
      user: login,
    },
  }
}
export function userCurrentLoad(): userCurrentLoadAction {
  return {
    type: USER_CURRENT_LOAD,
  }
}

export function userCurrentFailure(Error: string): userCurrentFailureAction {
  return {
    type: USER_CURRENT_FAILURE,
    payload: {
      error: Error,
    },
  }
}
export function userCurrent(user: User): userCurrentAction {
  return {
    type: USER_CURRENT_SUCCESS,
    payload: {
      data: user,
    },
  }
}
export function userLogOut(): userLogOutAction {
  return {
    type: LOGOUT_USER,
  }
}


export function getCurrentUser(email: string) {
  return async function (dispatch: Dispatch) {
    dispatch(userCurrentLoad())

    try {
      const url = `http://localhost:5000/api/v1/user?email=${email}`
      const userData = await axios(url)
      if (userData.status === 200) {
        dispatch(userCurrent(userData.data))
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(userCurrentFailure(error.message))
      }
    }
  }
}

