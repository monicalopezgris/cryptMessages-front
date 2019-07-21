/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthCtx';
import { Link } from 'react-router-dom';

class Header extends Component {
  handleLogout = async () => {
    const { logout } = this.props;
    try {
      logout();
    } catch (error) {
      throw new Error(error);
    }
  }
  handleClick = async (event) => {
    const { target, target: { name } } = event;
    const { history } = this.props;
    if (name === 'login') {

    }
  }

  render() {
    const { isLogedIn } = this.props

    return isLogedIn ?
      <div className="header">
        <h1>CryptoCesar</h1>
        <button
          className="button"
          type="button"
          onClick={this.handleLogout}>
          Logout
        </button>
      </div>
      : (
        <div className="header">
          <h1>CryptoCesar</h1>
          <button
            className="button"
            type="button"
            name="login"
            onClick={this.handleClick}>
            <Link to="/login">Login</Link>
          </button>
          <button
            className="button"
            type="button"
            name="signup"
            onClick={this.handleClick}>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      )
  }
}

export default withAuth(Header);