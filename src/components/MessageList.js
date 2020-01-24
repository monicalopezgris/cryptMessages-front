/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../lib/HOC/ErrorBoundary';
import Loading from './Loading';

const Wrapper = styled.div`
  height:70%;
  overflow:scroll;
`;
const Message = styled.div`
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem 1rem 0 1rem;
`;

const MessageList = ({ state: { messages, isLoading } }) => {
  return isLoading ? <Loading /> : (
    <Wrapper>
      {
        messages.slice(1).map((item, i) => (
          <Message className="message" key={i}>
            {item}
          </Message>
        ))
      }
    </Wrapper>
  );
}

export default ErrorBoundary(MessageList);

