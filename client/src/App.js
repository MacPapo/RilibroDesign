import "./App.css";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Login from "../src/pages/login/login.components";
import Register from "../src/pages/register/register.component";
import Profile from "./pages/profile/profile.component";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cocco-bastardo" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
