import axios from "axios";
import { useDispatch } from "react-redux";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useState } from "react";

import { getCurrentUser, setSigningIn } from "../redux/actions/login";



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSuccess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential;
    const res = await axios.post(
      "http://localhost:5000/google-login",
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    const token = res.data.token;
    const { email, username, role } = JSON.parse(
      atob(res.data.token.split(".")[1])
    );
    const user = {
      email,
      username,
      role,
      token,
      isLogged: true,
    };
    dispatch(setSigningIn(user));
    dispatch(getCurrentUser(email) as any);
    user.role === 'ADMIN' ? navigate("/admin") : navigate("/start");
  };

 

  const clientId =
    "891243554376-p501vqvfom0lsu970po1vf3fdqmagsdf.apps.googleusercontent.com";

  const handleSignOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  const [login, setLogin] = useState(true);

  return (
    <Box>
      {login ? (
        <Link
          className="link"
          to="/home"
          onClick={() => {
            handleSignOut();
            setLogin(false);
          }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Logout
          </Typography>
        </Link>
      ) : (
       
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin onSuccess={handleSuccess} />
          </GoogleOAuthProvider>
        
      )}
    </Box>
  );
};

export default Login;


