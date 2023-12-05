import React, { Component } from 'react'

export default class TestclassComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={count: 0,
        text: 'enter text...'
      };
    }
    handleclick=()=>
    {
        this.setState(prevState=>
            {
                return{
                     count:prevState.count+1
                }
            })
    }
    handlechange=(e)=>
    {
this.setState({text: e.target.value})
    }
  render() {
    return (
      <div>
      <button onClick={this.handleclick}>{this.props.name1} {this.state.count}</button>
      <textarea rows={5} cols={10} value={this.state.text}onChange={this.handlechange}></textarea>
      <h3>Comments:</h3>
      <div>
      {this.state.text}
      </div>
      </div>
    )
  }
}