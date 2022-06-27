import { Dispatch } from "redux";
import axios from "axios";

import {
  ADD_USER,
  DELETE_USER,
  GET_ALL_USERS,
  MODIFY_USER,
  UserActions,
  User,
  baseURL,
  USER_BAN,
  USER_UNBAN,
} from "../../types";

export function addUserSuccess(user: User): UserActions {
  console.log('addUser', user)
  return {
    type: ADD_USER,
    payload: {
      user,
    },
  }
}

export function removeUser(id: any){
  console.log('removeUseruserId',id);
  
  return{
    type: DELETE_USER,
    payload:{
      id,
    }
  }
}

export function getAllUsers(users: User) {
  console.log('getAllUsers',users)
  return {
    type: GET_ALL_USERS,
    payload: {
      users,
    }, 
  }
}

export function modifyUser(user: User): UserActions {
  return {
    type: MODIFY_USER,
    payload: {
      user,
    },
  }
}

export function fetchAllUser() {
  return (dispatch: Dispatch) => {
    return axios.get(`${baseURL}/user/`).then((res) => {
      console.log('fetchAllUser',res.data);
      dispatch(getAllUsers(res.data));
    });
  };
}

export function addUser(token: string, user:User){
  console.log('addUser',user);

  return async(dispatch: Dispatch) => {
    const res = await axios.post(`${baseURL}/user/`,user);
    console.log(res);
    
    dispatch(addUserSuccess(res.data))
  }; 
}

export function deleteUser( id:string){
  
  console.log('deleteUser userID before return',id);

  return async(dispatch: Dispatch) => {
    const res = await axios.delete(`${baseURL}/user/${id}`);
    console.log('deleteUser userID',id);
    console.log('deleteUser',res);
    
    dispatch(removeUser(id))
  }; 
}



export function editUser(user :User, id:string) {
  console.log(`${baseURL}/user/${id}`);
  return async(dispatch: Dispatch) =>{
    const res = await axios.put(`${baseURL}/user/${id}`, user)
    
    dispatch(modifyUser(res.data))
  }
 
};

export function userBan(Id: string): UserActions {
  return {
    type: USER_BAN,
    payload: {
      id: Id,
    },
  }
}

export function userUnBan(Id: string): UserActions {
  return {
    type: USER_UNBAN,
    payload: {
      id: Id,
    },
  }
}

export function banUser(token: string, userId: string) {
  return async function (dispatch: Dispatch) {
    
      const url = `http://localhost:5000/api/v1/admin/user/${userId}`
      const userData = await axios.put(url, {isBanned:true},{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (userData.status === 200) {
        dispatch(userBan(userId))
      }
  }
}
export function unBanUser(token: string, userId: string) {
  return async function (dispatch: Dispatch) {
    
      const url = `http://localhost:5000/api/v1/admin/user/${userId}`
      const userData = await axios.put(url, {isBanned:false},{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (userData.status === 200) {
        dispatch(userUnBan(userId))
      }
  }
}