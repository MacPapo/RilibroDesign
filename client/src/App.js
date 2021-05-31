import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Login from "../src/pages/login/login.components";
import Register from "../src/pages/register/register.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cocco-bastardo" component={Register} />
    </div>
  );
}

export default App;
