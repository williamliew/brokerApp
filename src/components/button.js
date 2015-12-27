import React, { Component } from 'react';

export default class Button extends Component {

  handleClick() {
    alert('testing saasfas');
  }

  render() {
    return(
      <button
      className="button"
      value={this.props.value}
      name={this.props.name}
      onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
