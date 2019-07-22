import axios from 'axios';

class MessagesService {
  constructor() {
    this.messages = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }

  list = () => {
    return this.messages
      .get('/message')
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
