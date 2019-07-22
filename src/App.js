/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthContext from './lib/AuthCtx';
import SecureRoute from './components/SecureRoute';
import AnonRoute from './components/AnonRoute';
import MessageBoard from './pages/MessageBoard';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthContext>
      <Router>
        <Header />
        <Switch>
          <AnonRoute exact path="/login" component={Login} />
          <SecureRoute exact path="/" component={MessageBoard} />
          <AnonRoute path="/signup" component={Signup} />
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
