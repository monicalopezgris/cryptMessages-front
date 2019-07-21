import React, { Component } from 'react';
import auth from '../lib/AuthServ'

class Login extends Component {
  state = {
    username: '',
    password: ''
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
      const { history } = this.props;
      const user = await auth.login(this.state);
      history.push(`/message`);
    } catch (error) {
      this.setState({
        error: 'Ops.... Get in touch with the admin to solve the error',
      });
    }
  }

  render() {
    return (
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
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Login;