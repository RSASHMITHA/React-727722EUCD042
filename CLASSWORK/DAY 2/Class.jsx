import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 0 };
  }
  handleIncrement = () => {
    this.setState((prevstate) => ({ inputValue: prevstate.inputValue + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevstate) => {
      if (prevstate.inputValue > 0) {
        return {
          inputValue: prevstate.inputValue - 1,
        };
      } else {
        return { inputValue: 0 };
      }
    });
  };
  render() {
    return (
      
      <div className="bbt">
      <h1>Example of {this.props.title}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.inputValue}</span>
        <button onClick={this.handleIncrement}>+</button>
        
        <button onClick={this.handleSubmit}>Add to Cart</button>
        
      </div>
    );
  }
}