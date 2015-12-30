import React, { Component } from 'react';
import Bidder from '../components/bidder';

export default React.createClass ({
  getInitialState: function() {
    return {
      bidderlist: this.props.bidderlist
    };
  },

  refreshList: function(newlist) {
    this.setState({
      bidderlist: newlist
    });
  },

  render: function() {
    return (
      <div>
        <h2>Bidders</h2>
        <ul>
          {this.state.bidderlist.map(function(name, index){
            return (
              <Bidder bidder={name} key={index} />
            );
          })}
        </ul>
      </div>
    );
  }
});
