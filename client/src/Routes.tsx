import { Switch, Route } from "react-router-dom";
import GoogleApp from "./components/GoogleLogin";

import Home from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={GoogleApp} />
      
  </Switch>
);

export default Routes;
