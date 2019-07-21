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
    const user = auth.me();
    try {
      this.setState({
        isLoading: false,
        isLoggedin: true,
        user,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
      throw new Error(error)
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

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? <Loading /> : (
      <Provider
        value={{
          login: this.login,
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

