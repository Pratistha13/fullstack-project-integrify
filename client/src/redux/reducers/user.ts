import {
  UserState,
  UserActions,
  GET_ALL_USERS,
  ADD_USER,
  DELETE_USER,
  MODIFY_USER,
} from "../../types";

export default function user(
  state: UserState = {
    users: [],
  },
  action: UserActions
): UserState {
  switch (action.type) {
    case GET_ALL_USERS: {
      const { users } = action.payload;
      console.log("userfronmreducer", users);

      return {
        ...state,
        users,
      };
    }
    case ADD_USER: {
      console.log(action);
      console.log("reducerstate", state);

      const { user } = action.payload;
      return {
        users: [...state.users, user],
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user: any) => {
          

          return user._id !== action.payload.user._id;
        }),
      };
    }

    case MODIFY_USER: {
      console.log("action.payload", action.payload);
      const users = state.users.map((user) => {
        if (user._id === action.payload.user._id) {
          return action.payload.user;
        }
        return user;
      });

      return {
        ...state,
        users,
      };
    }

    default:
      return state;
  }
}
