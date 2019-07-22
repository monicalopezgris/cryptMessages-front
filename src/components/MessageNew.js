import React, { Component } from 'react';
import message from '../lib/MessagesServ';

class MessageNew extends Component {
  state = {
    messageText: '',
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
      const { messageText } = this.state;
      const { getList } = this.props;
      const result = await message.add(messageText);
      getList()
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="messageText"
          type="text"
          placeholder="New message"
          value={this.state.message}
          onChange={this.handleInputChange} />
        <button
          type='submit'
        >Submit</button>
      </form>
    );
  }
}

export default MessageNew;