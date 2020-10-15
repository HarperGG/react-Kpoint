import React, { Component } from 'react'

export default class LifeComponent extends Component {

  componentWillMount() {
    console.log(componentWillMount)
  }
  componentDidMount(){
    console.log(componentDidMount)
  }
  showcomponentUpdate() {
    console.log(showcomponentUpdate)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
