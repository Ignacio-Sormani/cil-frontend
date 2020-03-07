import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Contact from './public/contact';
import Products from './public/home';
import Private from './private';
import Login from './login';

class Routes extends React.Component() {
  render() {
    return (
      <Router>
        <Switch>
          {
            // TO DO: The condition of the ternarian operator should be the value of the token existance
          }
          <Route exact path="/private">
            {false ? <Private /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
            {false ? <Private /> : <Login />}
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
