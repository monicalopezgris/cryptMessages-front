/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import message from '../lib/MessagesServ';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  async componentWillMount() {
    const messages = await message.list();
    this.setState({
      messages,
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <>
        <div>Messages </div>
        {
          messages.map((item, i) => (
            <div key={i}>{item}</div>
          ))
        }
      </>
    );
  }
}

export default MessageList;
