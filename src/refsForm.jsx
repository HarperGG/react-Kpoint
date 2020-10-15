import React, { Component } from 'react'

export default class refsForm extends Component {
  constructor(props) {
    super(props)
    this.value = React.createRef()

  }
  change = () =>{
   console.log(this.value.current.value)
  }
  render() {
    return (
      <div>
        <form action="">
          <input type="text" ref={this.value}/>
          <input type="button" onClick={this.change} value="提交"/>
        </form>
      </div>
    )
  }
}
