/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContext from './lib/AuthCtx';
import SecureRoute from './components/SecureRoute';
import MessageList from './components/MessageList';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthContext>
      <div>
        Header
      </div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <SecureRoute path="/" component={MessageList} />
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
