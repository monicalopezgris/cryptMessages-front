/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import MessageList from '../components/MessageList';
import MessageNew from '../components/MessageNew';
import message from '../lib/MessagesServ';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoading: true,
    };
  }

  async componentWillMount() {
    this.getList()
  }

  getList = async () => {
    const messages = await message.list();

    this.setState({
      messages,
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        <MessageList state={this.state} />
        <MessageNew getList={this.getList} />
      </>
    );
  }
}

export default MessageBoard;
