import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import CounterContainer from "../Containers/CounterContainer";
import TodosContainer from "../Containers/TodosContainer";
import ResponsiveWrapper from "./Common/ResponsiveWrapper";

export default () => (
  <Router>
    <>
      <ResponsiveWrapper>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={CounterContainer} />
          <Route path="/todos" component={TodosContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </ResponsiveWrapper>
    </>
  </Router>
);
