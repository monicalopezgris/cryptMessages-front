/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthCtx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.h1`
  padding:0.5rem 1rem;
  border-radius: 10%;
  border:1px solid white;
  background-color: lightcoral;
  font-size: 0.9rem;
  color:black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  color:black;
`;

const Img = styled.img`
  margin-top: 3rem;
  width:100%;
`;

class Header extends Component {
  handleLogout = async () => {
    const { logout } = this.props;
    try {
      logout();
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { isLoggedin } = this.props
    return isLoggedin ?
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
          <Img src={window.location.origin + '/logoCrypto.png'} alt="Logo" />
          {/* <Button
            type="button"
            name="login"
            onClick={this.handleClick}>
            <StyledLink
              to="/login">
              Login
            </StyledLink>
          </Button>
          <Button
            type="button"
            name="signup"
            onClick={this.handleClick}>
            <StyledLink
              to="/signup">
              Signup
            </StyledLink>
          </Button> */}
        </div>
      )
  }
}

export default withAuth(Header);