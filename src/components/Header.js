/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthCtx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-radius: 20px;
  border:3px solid #f6ff88;
  color:#f6ff88;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  &:hover {
    background-color: #f6ff88;
    color: #096c77;
  }
`;
const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  height:15%;
`;

const Img = styled.img`
  margin-top: 3rem;
  width:100%;
`;

const ImgSmall = styled.img`
  width:60%;
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
      <Wrapper>
        <ImgSmall src={window.location.origin + '/logoCrypto.png'} alt="Logo" />
        <Button
          type="button"
          onClick={this.handleLogout}>
          Logout
        </Button>
      </Wrapper>
      : (
        <>
          <Img src={window.location.origin + '/logoCrypto.png'} alt="Logo" />
        </>
      )
  }
}

export default withAuth(Header);