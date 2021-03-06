/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from './lib/AuthCtx';
import SecureRoute from './components/SecureRoute';
import AnonRoute from './components/AnonRoute';
import MessageBoard from './pages/MessageBoard';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Wrapper = styled.div`
  margin:0;
  padding:0;
  width: 300px;
  height: 530px;
  background-color: #096c77;
`;

function App() {
  return (
    <AuthContext>
      <Wrapper>
        <Router>
          <Header />
          <Switch>
            <AnonRoute exact path="/login" component={Login} />
            <SecureRoute exact path="/" component={MessageBoard} />
            <AnonRoute path="/signup" component={Signup} />
          </Switch>
        </Router>
      </Wrapper>
    </AuthContext>
  );
}

export default App;
