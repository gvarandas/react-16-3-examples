import React, { Component } from 'react';

import { UserConsumer } from '../contexts/UserContext';
import { ThemeConsumer } from '../contexts/ThemeContext';

export default class UserDetail extends Component {
  render() {
    return (
      <UserConsumer>
        {(userContext) => (
          <ThemeConsumer>
            {(themeContext) => (
              <section className="card user-detail" style={themeContext.state.theme}>
                <span>Hello, you're {userContext.state.username || 'offline'}!</span>
              </section>
            )}
          </ThemeConsumer>
        )}
      </UserConsumer>
    );
  }
}