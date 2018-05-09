import React, { Component } from 'react';

import { UserConsumer } from '../contexts/UserContext';

export default class Login extends Component {
  inputRef = React.createRef();

  render() {
    return (
      <UserConsumer>
        {({ state, actions }) => (
          <section className="content">
            <div className="login">
              { state.username ?
                <button className="btn" onClick={() => actions.logout()}>
                  Logout
                </button>
                :
                <div>
                  <input ref={this.inputRef} className="input" />
                  <button className="btn" onClick={() => actions.login(this.inputRef.current.value)}>
                    Login
                  </button>
                </div>
              }
            </div>
          </section>
        )}
      </UserConsumer>
    )
  }
}