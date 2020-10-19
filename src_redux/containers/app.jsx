import React, { Component } from 'react'
import {increment,asyncIncrement} from '../redux/actions'
import {connect} from 'react-redux'
import Counter from '../reduxComponent/Counter'


export default connect(state=>({num:state.counter}),{
  increment,
  asyncIncrement
})(Counter)
