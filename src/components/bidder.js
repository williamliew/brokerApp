import React, { Component } from 'react';

export default React.createClass ({
  render: function() {
    return (
      <li>
        {this.props.bidder}
      </li>
    );
  }

});
