import React, { Component } from 'react';
import styled from 'styled-components';
import message from '../lib/MessagesServ';

const Wrapper = styled.div`
height:15%;
position: absolute;
bottom: 0%;
`;

const Input = styled.input`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border:1px solid white;
  color:black;
  margin: 0.5rem 0 0.5rem 1rem;
  padding: 0.5rem 1rem;
`;

const Submit = styled.button`
  background-color: transparent;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border:2px solid #f6ff88;
  color:#f6ff88;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  &:hover {
    background-color: #f6ff88;
    color: #096c77;
  }
`;

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
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="messageText"
            type="text"
            placeholder="New message"
            value={this.state.message}
            onChange={this.handleInputChange} />
          {error ? <div>{error}</div> : <span />}
          <Submit
            type='submit'
          >Submit</Submit>
        </form>
      </Wrapper>
    );
  }
}

export default MessageNew;