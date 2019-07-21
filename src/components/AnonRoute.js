/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../lib/AuthCtx';

function SecureRoute({ component: Component, isLoggedin }) {
  return (
    <Route
      render={props => (!isLoggedin ? <Component {...props} /> : <Redirect to="/" />)
      }
    />
  );
}

export default withAuth(SecureRoute);
