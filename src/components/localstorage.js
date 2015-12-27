import React, { Component } from 'react';

export default class LocalStorage extends Component {

  addToArray(value) {
    window.LocalStorage.addStuff = localStorageString.push(value);
  }

  render() {
    var localStorageString = window.localStorage.addStuff;
    return (
      <div>
        <h2>Local storage list</h2>
      </div>
    );
  }
}
