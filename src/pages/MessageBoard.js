/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import styled from 'styled-components';
import MessageList from '../components/MessageList';
import MessageNew from '../components/MessageNew';
import message from '../lib/MessagesServ';

const Wrapper = styled.div`
  position:relative;
  height: 84%;
  display:flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 20px;
  border:3px solid #f6ff88;
  color:#f6ff88;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin: 0.3rem auto;
  &:hover {
    background-color: #f6ff88;
    color: #096c77;
  }
`;

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoading: true,
    };
  }

  async componentWillMount() {
    this.getListEncrypted()
  }

  getList = async () => {
    const messages = await message.list();

    this.setState({
      messages,
      isLoading: false,
    });
  }

  getListEncrypted = async () => {
    const messages = await message.listEncrypted();
    this.setState({
      messages,
      isLoading: false,
    });
  };

  render() {
    return (
      <Wrapper>
        <ButtonWrapper>
          <Button onClick={this.getListEncrypted}>Encrypt</Button>
          <Button onClick={this.getList}>Decrypt</Button>
        </ButtonWrapper>
        <MessageList state={this.state} />
        <MessageNew getList={this.getList} />
      </Wrapper>
    );
  }
}

export default MessageBoard;
