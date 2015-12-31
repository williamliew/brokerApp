import React, { Component } from 'react';
import Bidder from '../components/bidder';
import BidderList from '../actions/bidactions';

export default React.createClass ({
  getInitialState: function() {
    return {
      data: BidderList.getInitialList()
    };
  },

  render: function() {
    return (
      <div>
        <h2>Bidders</h2>
        <ul>
          {this.state.data.bidderList.map(function(name, index){
            return (
              <Bidder bidder={name} key={index} />
            );
          })}
        </ul>
        <p>{console.log(this.state.data.bidderList)}</p>
      </div>
    );
  }
});
