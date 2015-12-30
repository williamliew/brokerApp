import React, { Component } from 'react';
import BidActions from '../actions/bidactions';

export default React.createClass ({

  handleClick: function() {
    BidActions.addToArray(this.props.name);
  },

  render: function() {
    return (
      <button
      className="button-primary"
      value={this.props.value}
      name={this.props.name}
      onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
});
