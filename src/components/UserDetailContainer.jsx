import React, { Component } from 'react';

import { ThemeConsumer } from '../contexts/ThemeContext';

export default class UserDetail extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ actions }) => (
          <div className="container card">
            <div>
              <button className="btn btn--small" onClick={() => actions.updateTheme('light')}>Light</button>
              <button className="btn btn--small" onClick={() => actions.updateTheme('dark')}>Dark</button>
            </div>
            <div className="container row">
              {this.props.children}
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}