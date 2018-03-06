import React from 'react';
import { Route,Switch } from 'react-router-dom';
import RegisterContainer from '../containers/register-container';
import LoginContainer from '../containers/login-container';


export default () => (
    <div>
      <Switch>
        <Route
          exact
          path="/register"
          component={RegisterContainer}
        />
        {/* <Route
          exact
          path="/login"
          component={LoginContainer}
        />


      </Switch>
    </div>
);
