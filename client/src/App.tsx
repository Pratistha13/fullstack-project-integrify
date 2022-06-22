import { Routes, Route } from "react-router-dom";

import GoogleApp from "./components/GoogleLogin";
import ProductForm from "./components/Products/ProductForm";
import Home from "./pages/Home";
import AppBar from "./components/Appbar/Appbar";
import ProductList from "./components/Products/ProductList";
import UserList from "./components/User/UserList";
import ProductProfile from "./components/Products/ProductProfile";
import LandingPage from "./pages/LandingPage";
import Admin from "./components/Admin/Admin";
import ProductEdit from "./components/Products/ProductEdit";
import HomeLandPage from "./pages/HomePage";
import UserForm from "./components/User/UserForm";
import UserEdit from "./components/User/UserEdit";
import UserProfile from "./components/User/UserProfile";



const App = () => (
  
  <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<GoogleApp/>} />
    <Route path="/products" element={<ProductList products={[]}/>} />
    <Route path="/productForm" element={<ProductForm/>} />
    <Route path="/navbar" element= {<AppBar/>}/>
    <Route path="/users" element= {<UserList/>}/>
    <Route path="/profile" element= {<ProductProfile/>}/>
    <Route path="/start" element= {<LandingPage/>}/>
    <Route path="/admin" element= {<Admin/>}/>
    <Route path="/productEdit/:productId" element= {<ProductEdit/>}/>
    <Route path="/home" element= {<HomeLandPage/>}/>
    <Route path="/:productName" element= {<ProductProfile/>}/>
    <Route path="/:firstName" element= {<UserProfile/>}/>
    <Route path="/userForm" element={<UserForm/>} />
    <Route path="/userEdit/:userId" element= {<UserEdit/>}/>


    

    
  </Routes>
    
  
  
 
);

export default App;
