import React, { Component } from 'react';
import BidWindow from './views/biddingwindow';
import LocalStorage from './components/localstorage';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>auction haus</h1>
        <BidWindow name="George" />
        <BidWindow name="Steve" />
        <BidWindow name="Marcel" />
        <BidWindow name="Anna" />
      </div>
    );
  }
}
