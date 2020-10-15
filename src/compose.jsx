import React, { Component } from 'react'

export default class compose extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
