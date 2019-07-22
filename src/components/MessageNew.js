import React, { Component } from 'react';
import message from '../lib/MessagesServ';

class MessageNew extends Component {
  state = {
    messageText: '',
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
      const { messageText } = this.state;
      if (
        messageText.length <= 0 ||
        messageText === null
      ) {
        this.setState({
          error: 'Text is required'
        })
      } else {
        const { getList } = this.props;
        const result = await message.add(messageText);
        getList()
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="messageText"
          type="text"
          placeholder="New message"
          value={this.state.message}
          onChange={this.handleInputChange} />
        {error ? <div>{error}</div> : <span />}
        <button
          type='submit'
        >Submit</button>
      </form>
    );
  }
}

export default MessageNew;