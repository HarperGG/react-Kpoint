import React, { Component } from 'react'

export default class StateComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date : new Date(),
      num:1,
    }
  }

  increment(){
    this.setState({ num:this.state.num+=1})
  }

  decrement(){
    this.setState({ num:this.state.num-=1})
  }

  autoCrement = () => {
    this.setState({ num:12})
  }
 
  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleDateString()}</h2>
        <h2>{this.state.num}</h2>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement.bind(this)}>删除</button>
        <button onClick={this.autoCrement}>autoCrement</button>
      </div>
    )
  }
}
