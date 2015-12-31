import React, { Component } from 'react';
import BidWindow from './views/biddingwindow';
import BidderList from './views/bidderlist';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>auction haus</h1>
        <BidWindow name="George" />
        <BidWindow name="Steve" />
        <BidWindow name="Marcel" />
        <BidWindow name="Anna" />
        {window.localStorage.bidderList && <BidderList />}
      </div>
    );
  }
}
