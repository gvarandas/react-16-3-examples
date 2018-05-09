import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export const UserConsumer = Consumer;

export class UserProvider extends Component {
  state = {
    username: null,
  };

  login = (username) => {
    this.setState({ username });
  };

  logout = () => {
    this.setState({ username: null });
  };

  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
          login: this.login,
          logout: this.logout,
        },
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
