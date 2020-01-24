import axios from 'axios';

class MessagesService {
  constructor() {
    this.messages = axios.create({
      baseURL: process.env.REACT_APP_APIURL,
      withCredentials: true,
    });
  }

  list = () => {
    return this.messages
      .get('/message')
      .then(({ data }) => data);
  };

  listEncrypted = () => {
    return this.messages
      .get('/message/encrypted')
      .then(({ data }) => data);
  };

  add = (data) => {
    return this.messages
      .post('/message', { data })
      .then(({ data }) => data);
  }
}

const message = new MessagesService();

export default message;
