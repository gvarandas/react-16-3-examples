import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export const ThemeConsumer = Consumer;

export class ThemeProvider extends Component {
  themes = {
    light: {
      background: '#f5f6fa',
      color: '#a3a3a3',
    },
    dark: {
      background: '#222',
      color: '#fff',
    },
  }

  state = {
    theme: this.themes.light,
  };  

  updateTheme = (theme = 'light') => {
    this.setState({ theme: this.themes[theme] });
  };

  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
          updateTheme: this.updateTheme,
        },
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
