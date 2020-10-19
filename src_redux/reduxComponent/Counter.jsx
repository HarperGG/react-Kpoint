import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    num:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    asyncIncrement:PropTypes.func.isRequired
  }

  incrementClick = ()=>{
    this.props.increment(10)
  }
  asyncincrement = ()=>{
    this.props.asyncIncrement(10)
  }

  render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
        <button onClick={this.incrementClick}>increment</button>
        <button onClick={this.asyncincrement}>asyncincrement</button>
      </div>
    )
  }
}

