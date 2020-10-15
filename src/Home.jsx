import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super()

    
  }
  changeFuns = ()=>{
      this.props.changeFun('aaa')
    }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* {
          this.props.arr.map((e,index)=>{
            return (
              <li key={index}>{e}</li>
            )
          })
        } */}

        <p>
          {this.props.title}
        </p>
        <button onClick={this.changeFuns}>change</button>
      </div>
    )
  }
}
