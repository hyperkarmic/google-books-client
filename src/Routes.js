import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import UserContext from "./context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route path="/" exact>
        {user.token ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route path="/login" exact>
        {user.token ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route path="/register" exact>
        {user.token ? <Redirect to="/home" /> : <Register />}
      </Route>
      <Route path="/home" exact>
        {user.token ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/my-books" exact>
        {user.token ? <MyBooks /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
