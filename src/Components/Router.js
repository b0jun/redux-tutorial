import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Counter from "./Counter";
import Todos from "./Todos";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/todos" component={Todos} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
