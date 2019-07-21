import React, { Component } from 'react';

class MessageNew extends Component {
  state = {
    message: '',
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
      const message = await message.new(this.state);
    } catch (error) {
      throw new Error(error);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="New message"
          value={this.state.username}
          onChange={this.handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default MessageNew;