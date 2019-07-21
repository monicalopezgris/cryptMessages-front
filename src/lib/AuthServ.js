import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
  }


  signup(user) {
    const { username, password } = user;
    return this.auth
      .post('/auth/signup', { username, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post('/auth/login', { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout').then(({ data }) => {
    });
  }

  me() {
    return this.auth.get('/auth/me').then(response => response.data);
  }
}

const auth = new AuthService();

export default auth;
