import React, { Component } from 'react';
import Button from '../components/button';

export default class BidWindow extends Component {
  render() {
    return(
      <div className="bid-window">
        <h3>
          {this.props.name}
        </h3>
        <Button text="Bid" name={this.props.name} />
      </div>
    );
  }
}
