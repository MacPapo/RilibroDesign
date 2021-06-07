import Login from "../login/login.components";
import Register from "../register/register.component";
//modificare path del register per fixare bug sulle importazioni

import PrivateRoute from "./PrivateRoute";
import Profile from "../profile/profile.component";
import Alert from "../../Alert";

import { Route, Switch } from "react-router-dom";
import Team from "../team/team.component";

const Routes = (props) => {
  return (
    <section>
      <Alert />
      <Switch className="container">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/team" component={Team} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </section>
  );
};

export default Routes;
