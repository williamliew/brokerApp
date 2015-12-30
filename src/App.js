import React, { Component } from 'react';
import BidWindow from './views/biddingwindow';
import BidderList from './views/bidderlist';

export default class App extends Component {
  render() {
    var localStorageList = [];
    if(window.localStorage.bidderList) {
      localStorageList = window.localStorage.bidderList.split(",");
    }
    return (
      <div className="container">
        <h1>auction haus</h1>
        <BidWindow name="George" />
        <BidWindow name="Steve" />
        <BidWindow name="Marcel" />
        <BidWindow name="Anna" />
        {window.localStorage.bidderList && <BidderList bidderlist={localStorageList} />}
      </div>
    );
  }
}
