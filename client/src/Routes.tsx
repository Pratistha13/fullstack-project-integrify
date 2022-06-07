import { Switch, Route } from "react-router-dom";
import GoogleApp from "./components/GoogleLogin";
import ProductsList from "./components/ProductList";
import ProductForm from "./components/ProductForm";


import Home from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={GoogleApp} />
    <Route path="/products" component={ProductsList} />
    <Route path="/productForm" component={ProductForm} />

  </Switch>
);

export default Routes;
