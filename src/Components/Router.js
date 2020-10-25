import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../Pages/Home';
// import CounterContainer from '../Containers/normal/CounterContainer';
// import TodosContainer from '../Containers/normal/TodosContainer';
import CounterContainer from '../Containers/usingHooks/CounterContainer';
import TodosContainer from '../Containers/usingHooks/TodosContainer';
import ResponsiveWrapper from './Common/ResponsiveWrapper';

export default () => (
  <Router>
    <>
      <ResponsiveWrapper>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/counter' component={CounterContainer} />
          <Route path='/todos' component={TodosContainer} />
          <Redirect from='*' to='/' />
        </Switch>
      </ResponsiveWrapper>
    </>
  </Router>
);
