import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class user extends Component {
  propTypes = {
    age:PropTypes.number.isRequired,
    addAge:PropTypes.func.isrequired
  }
  add = ()=>{
    this.addAge(10)
  }
  render() {
    return (
      <div>
        {this.props.age}
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
