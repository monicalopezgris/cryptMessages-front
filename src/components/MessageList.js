/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ErrorBoundary from '../lib/HOC/ErrorBoundary';
import Loading from './Loading';

const MessageList = ({ state: { messages, isLoading } }) => {
  return isLoading ? <Loading /> : (
    <>
      <h4>Saved messages</h4>
      {
        messages.map((item, i) => (
          <div className="message" key={i}>{item}</div>
        ))
      }
    </>
  );
}

export default ErrorBoundary(MessageList);

