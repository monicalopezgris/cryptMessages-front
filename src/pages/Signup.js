import React, { Component } from 'react';
import auth from '../lib/AuthServ';
import ErrorBoundary from '../lib/HOC/ErrorBoundary';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 5rem;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 20px;
  border:1px solid white;
  color:black;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
`;

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

const StyledLink = styled(Link)`
  // text-decoration: none;
  font-size: 0.9rem;
  color:#f6ff88;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
`;

class Signup extends Component {
  state = {
    username: '',
    password: '',
    error: false,
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    })
  }

  handleInputChange = (event) => {
    const { target, target: { name } } = event;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { username, password, location } = this.state;
      if (
        username.length <= 2 ||
        password.length <= 2
      ) {
        this.setState({
          error: 'Username and password are required and must be larger than 3 digits'
        })
      } else {
        const { history } = this.props;
        const user = await auth.signup(this.state);
        history.go(`/`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { error, isLoading } = this.state;
    return isLoading ? <Loading /> : (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="text"
            placeholder={'username'}
            value={this.state.username}
            onChange={this.handleInputChange} />
          <Input
            name="password"
            type="password"
            placeholder={'password'}
            value={this.state.password}
            onChange={this.handleInputChange} />
          {error ? <div>{error}</div> : <span />}
          <Button type='submit'>Submit</Button>
          <StyledLink to="/login">
            You already have account? Login
          </StyledLink>
        </Form>
      </>
    );
  }
}
export default ErrorBoundary(Signup);