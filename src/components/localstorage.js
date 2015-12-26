import React, { Component } from 'react';
import Overlay from './components/overlay';

export default class DivTest extends Component {
  handleClick() {
    return (
      <Overlay />
    );
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Testing shit</h2>
      </div>
    );
  }
}
