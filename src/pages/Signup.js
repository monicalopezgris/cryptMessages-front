import React, { Component } from 'react';
import auth from '../lib/AuthServ'
import ErrorBoundary from '../lib/HOC/ErrorBoundary'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  }

  handleInputChange = (event) => {
    const { target, target: { name } } = event;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { username, password } = this.state;
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
        history.push(`/`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
        <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
        <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </label>
          {error ? <div>{error}</div> : <span />}
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

export default ErrorBoundary(Signup);