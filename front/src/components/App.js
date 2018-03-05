<<<<<<< HEAD:front/src/App.js
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
        <Route
          path="/login"
          component={LoginContainer}
        />
      </Switch>
    </div>
);
=======
import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
>>>>>>> 26c6a702802ff17c90b7111673bc066f41862be0:front/src/components/App.js
