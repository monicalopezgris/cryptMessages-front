/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-parens */
/* eslint-disable react/no-multi-comp */
import React, { Component } from "react";
import Loading from '../components/Loading';
import auth from "./AuthServ";

const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {auth => {
            return (
              <Comp
                login={auth.login}
                signup={auth.signup}
                logout={auth.logout}
                user={auth.user}
                isLoggedin={auth.isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const user = await auth.me();
      this.setState({
        isLoading: false,
        isLoggedin: true,
        user,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  login = async ({ username, password }) => {
    try {
      const user = await auth.login({ username, password })
      this.setState({
        isLoggedin: true,
        user
      })
    } catch (error) {
      throw new Error(error)
    }
  };
  signup = async ({ username, password }) => {
    try {
      const user = await auth.signup({ username, password })
      this.setState({
        isLoggedin: true,
        user
      });
    } catch (error) {
      throw new Error(error)
    }
  };
  logout = async () => {
    try {
      const user = await auth.logout();
      this.setState({
        isLoggedin: false,
        user: null
      });
    } catch (error) {
      throw new Error(error)
    }
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? <Loading /> : (
      <Provider
        value={{
          login: this.login,
          signin: this.signin,
          logout: this.logout,
          user,
          isLoggedin,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;

