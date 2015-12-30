import React, { Component } from 'react';

export default class LocalStorage extends Component {

  render() {
    var localStorageString = window.localStorage.bidderList;
    return (
      <div>
        <h2>Bidders</h2>
        {localStorageString}
      </div>
    );
  }
}
