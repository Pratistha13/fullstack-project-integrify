import { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";


const GoogleApp = ()=> {
  const [token, setToken] =useState('')

  const handleSuccess = async (response: any) => {
    const tokenId = response.credential

    const res = await axios.post('http://localhost:5000/google-login', {},{
      headers:{
        Authorization : `Bearer ${tokenId}`,
      },
    })
    const token = res.data.token
    setToken(token)

    console.log ('token:',token)
    
  }

  const clientId =
    "891243554376-p501vqvfom0lsu970po1vf3fdqmagsdf.apps.googleusercontent.com";

    const handleGetOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/order', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('response:', response.data)
      } catch (error: any) {
        console.log('error:', error.response.data)
      }
    }

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={handleSuccess} />
      </GoogleOAuthProvider>
      <button
          style={{ width: '200px', height: '80px', marginTop: '1rem' }}
          onClick={handleGetOrders}
        >
          GET ORDERS
        </button>

    </div>
  );
}

export default GoogleApp;
