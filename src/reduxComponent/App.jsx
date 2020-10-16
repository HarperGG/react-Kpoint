import React, { Component } from 'react'
import * as action from '../redux/actions'

export default class App extends Component {

  incrementClick = ()=>{
    this.props.store.dispatch(action.increment(10))
    console.log(this.props.store);
  }

  render() {
    return (
      <div>
        <h1>{this.props.store.getState()}</h1>
        <button onClick={this.incrementClick}>increment</button>
      </div>
    )
  }
}
