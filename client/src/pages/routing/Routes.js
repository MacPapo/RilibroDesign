import Login from "../login/login.components";
//modificare path del register per fixare bug sulle importazioni

import PrivateRoute from "./PrivateRoute";
import Profile from "../profile/profile.component";
import Alert from "../../Alert"

import { Route, Switch } from "react-router-dom";

const Routes = (props) => {
  return (
    <section>
      <Alert />
      <Switch className="container">
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </section>
  );
};

export default Routes;
