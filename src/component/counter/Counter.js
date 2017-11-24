import React, { Component } from 'react';

export class Counter extends Component {
  constructor() {
    super();
    this.counter = 0;
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.counter++;
  //   console.log(this.counter);
  // }

  clickHandler = (e) => {
    this.counter++;
    console.log(this.counter);
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Click me!</button>
        <span>{this.counter}</span>
      </div>
    );
  }
}