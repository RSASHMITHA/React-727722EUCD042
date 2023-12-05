import React, { Component } from 'react'
import './App'
export default class TwoWayBindingComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state={inputValue: ''};
    }
    handleInputChange = (event) =>
    {
        this.setState({ inputValue: event.target.value})
    }
  render() {
    return (
        <div>
        <h1>Example of two way Binding Component</h1>
      <textarea rows={10} cols={50}
      value={this.state.inputValue}
      onChange={this.handleInputChange} className='twoApp'></textarea>
      <p>current Value: {this.state.inputValue}</p>
      </div>
    );
  }
}