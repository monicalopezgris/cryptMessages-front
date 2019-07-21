/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import MessageList from '../components/MessageList';
import MessageNew from '../components/MessageNew';

const MessageBoard = () => {
  return (
    <>
      <MessageList />
      <MessageNew />
    </>
  );
}

export default MessageBoard;