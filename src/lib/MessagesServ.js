import axios from 'axios';

class MessagesService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }


  list() {
    return this.auth
      .get('/message')
      .then(({ data }) => data);
  }
}

const message = new MessagesService();

export default message;
