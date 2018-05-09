import React, { Component } from 'react';
import hangloose from './hangloose.png';
import './App.css';

import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

import Login from './components/Login';
import UserDetailContainer from './components/UserDetailContainer';
import UserDetail from './components/UserDetail';

class App extends Component {
  containers = [0, 1, 2];

  render() {
    return (
      <div className="App container main-container column">
        <header className="App-header">
          <img src={hangloose} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT BRASÍLIA</h1>
        </header>
        <main>
          <UserProvider>
            <section className="container login-container">
              <Login />
            </section>
            <section className="container">
              <ThemeProvider>
                <UserDetailContainer>
                  <section className="container users-container center">
                    {this.containers.map(id => <UserDetail key={id} />)}
                  </section>
                  <section className="container card stretch">
                    <div>THIS IS A THEMELESS CONTAINER</div>
                  </section>
                  <section className="container users-container center">
                    {this.containers.map(id => <UserDetail key={id} />)}
                  </section>
                </UserDetailContainer>
                <UserDetailContainer>
                  <section className="container users-container center">
                    {this.containers.map(id => <UserDetail key={id} />)}
                  </section>
                  <section className="container card stretch">
                    <div>THIS IS A THEMELESS CONTAINER</div>
                  </section>
                  <section className="container users-container center">
                    {this.containers.map(id => <UserDetail key={id} />)}
                  </section>
                </UserDetailContainer>
              </ThemeProvider>
            </section>
          </UserProvider>
        </main>
      </div>
    );
  }
}

export default App;
