import {
  LOGIN_USER,
  loginActions,
  LoginState,
  LOGOUT_USER,
  User,
  USER_CURRENT_SUCCESS,
  USER_CURRENT_FAILURE,
  USER_CURRENT_LOAD,
} from "../../types";

export default function login(
  state: LoginState = {
    token: "",
    username: "",
    role: "",
    email: "",
    isUserLoading: false,
    user: {} as User,
    isLogged: true,
    userLoadError: "",
  },
  action: loginActions
): LoginState {
  switch (action.type) {
    case LOGIN_USER: {
      const { user } = action.payload;
      return {
        ...state,
        token: user.token,
        username: user.username,
        role: user.role,
        isLogged: user.isLogged,
        email: user.email,
      };
    }
    case LOGOUT_USER: {

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      return {
        token: "",
        username: "",
        role: "",
        isLogged: false,
        email: "",
        user: {} as User,
      };
    }

    case USER_CURRENT_LOAD: {
      return {
        ...state,
        isUserLoading: true,
      };
    }
    case USER_CURRENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        user: data,
        isUserLoading: false,
      };
    }
    case USER_CURRENT_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        isUserLoading: false,
        userLoadError: error,
      };
    }
    default:
      return state;
  }
}
