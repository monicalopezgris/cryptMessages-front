/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContext from './lib/AuthCtx';
import SecureRoute from './components/SecureRoute';
import MessageList from './components/MessageList';
import Login from './pages/login';

function App() {
  return (
    <AuthContext>
      <div>
        Header
      </div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <SecureRoute path="/" component={MessageList} />
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
