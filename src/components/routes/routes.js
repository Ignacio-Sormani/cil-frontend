import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Contact from './public/contact';
import Home from './public/home';
import Private from './private';
import Login from './login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/private"
            render={props =>
              this.props.authenticated ? (
                <Private {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={props =>
              this.props.authenticated ? (
                <Redirect to="/private" />
              ) : (
                <Login {...props} />
              )
            }
          />
          <Route
            exact
            path="/contact"
            render={props => <Contact {...props} />}
          />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
