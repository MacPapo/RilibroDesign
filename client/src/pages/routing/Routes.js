import Login from "../login/login.components";
import Register from "../register/register.component";

import PrivateRoute from "./PrivateRoute";
import Profile from "../profile/profile.component";
import Alert from "../../Alert";

import { Route, Switch } from "react-router-dom";
import Team from "../team/team.component";
import Sell from "../sell/sell.component";
import MyListbox from "../../components/dropdown.component";
import Buy from "../buy/buy.component";


const Routes = (props) => {
  return (
    <section>
      <Alert />
      <Switch className="container">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/dropdown" component={MyListbox} />
        <Route exact path="/buy" component={Buy}/>
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/sell" component={Sell} />
      </Switch>
    </section>
  );
};

export default Routes;
