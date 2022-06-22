import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppState, Role, User } from "../../types";
import { editUser } from "../../redux/actions";

export default function UserEdit() {
  const dispatch = useDispatch<any>();
  const { userId } = useParams() 
  
  const [state, setState] = React.useState<User>({
    _id: userId || '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password:'',
    isBanned: false,
    role: Role.USER

  })

  const {_id,firstName,lastName,email,userName,password,isBanned,role} = state

  console.log(state)

  const users = useSelector((state: AppState) => state.user.users);
  const {token} = useSelector((state: AppState) => state.login);


  console.log(users);
  const navigate = useNavigate();

  const handleEditUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log('handleEditUser')
    dispatch(editUser(state, _id));
    navigate('/users')
    alert('User updated!')
  };

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = event.target
        setState({ ...state, [name]: value })

  }

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleEditUser}
        sx={{
          width: 500,
          maxWidth: "100%",
          mt: 2,
        }}
      >
        <div>
        <TextField
            required
            id="outlined-required"
            label="Name"
            onChange={handleChange}
            value={firstName}
            name = 'firstName'
          />

          <TextField
            id="outlined-helperText"
            label="lastName"
            onChange={handleChange}
            value={lastName}
            name = 'lastName'
          />

          <TextField
            id="outlined-helperText"
            label="email"
            onChange={handleChange}
            value={email}
            name = 'email'
          />
          <TextField
            id="outlined-helperText"
            label="Username"
            onChange={handleChange}
            value={userName}
            name = 'UserName'
          />
          <TextField
            id="outlined-helperText"
            label="password"
            onChange={handleChange}
            value={password}
            name ='password'
          />
          <TextField
            id="outlined-helperText"
            label="isBanned"
            onChange={handleChange}
            value={isBanned}
            name = 'isBanned'
          />
          <TextField
            id="outlined-helperText"
            label="role"
            onChange={handleChange}
            value={role}
            name = 'role'
          />
        </div>
        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
        Modify User
      </Button>
      </Box>

    </>
  );
};


