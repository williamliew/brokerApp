import React, { Component } from 'react';
import Button from '../components/button';

export default class BidWindow extends Component {
  render() {
    return(
      <div className="bid-window">
        <h2>
          {this.props.name}
        </h2>
        <Button text="Bid"/>
      </div>
    );
  }
}
