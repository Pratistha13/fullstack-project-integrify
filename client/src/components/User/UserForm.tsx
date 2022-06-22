import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import { AppState, User } from "../../types";
import { addUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const dispatch = useDispatch<any>();

  enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
  }

  const [state, setState] = React.useState<User>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: Role.USER,
    isBanned: false,
    userName: "",
    password: "",
  });

  console.log(state);
  const {
    _id,
    firstName,
    lastName,
    email,
    role,
    isBanned,
    userName,
    password,
  } = state;

  const users = useSelector((state: AppState) => state.user);
  const { token } = useSelector((state: AppState) => state.login);

  console.log("users from userform", users);
  const navigate= useNavigate();

  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      role: Role.USER,
      isBanned: false,
      userName: "",
      password: "",
    };
    console.log(newUser);
    dispatch(addUser(token, newUser));
    navigate('/users')
    alert('User created!')
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const [value, setValue] = React.useState("Unbanned");

  const handleBan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleAddUser}
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
            label="first name"
            onChange={handleChange}
            value={firstName}
            name="firstName"
          />

          <TextField
            id="outlined-helperText"
            label="last name"
            onChange={handleChange}
            value={lastName}
            name="lastName"
          />

          <TextField
            id="outlined-helperText"
            label="email"
            onChange={handleChange}
            value={email}
            name="email"
          />
          <TextField
            id="outlined-helperText"
            label="role"
            onChange={handleChange}
            value={role}
            name="role"
          />
          <TextField
            id="outlined-helperText"
            label="username"
            onChange={handleChange}
            value={userName}
            name="userName"
          />
          <TextField
            id="outlined-helperText"
            label="password"
            onChange={handleChange}
            value={password}
            name="password"
          />

          <Radio
            checked={value === "Unbanned"}
            onChange={handleBan}
            value="Unbanned"
            name="Unbanned"
            inputProps={{ "aria-label": "A" }}
          />
          <Radio
            checked={value === "Banned"}
            onChange={handleBan}
            value="Banned"
            name="Banned"
            inputProps={{ "aria-label": "B" }}
          />
        </div>

        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
          Create User
        </Button>
      </Box>
    </>
  );
}
