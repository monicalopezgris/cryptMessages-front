/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import message from '../lib/MessagesServ';
import ErrorBoundary from '../lib/HOC/ErrorBoundary';
import Loading from './Loading';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoading: true,
    };
  }

  async componentWillMount() {
    try {
      const messages = await message.list();
      this.setState({
        messages,
        isLoading: false,
      });
    } catch (error) {
      // throw new Error(error);
    }
  }

  render() {
    const { messages, isLoading } = this.state;
    return isLoading ? <Loading /> : (
      <>
        <div>Messages </div>
        {
          messages.map((item, i) => (
            <div className="message" key={i}>{item}</div>
          ))
        }
      </>
    )
  }
}

export default ErrorBoundary(MessageList);
