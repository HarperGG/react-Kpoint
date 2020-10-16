import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Greeting  extends Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

Greeting.propTypes = {
  title:PropTypes.string
}

