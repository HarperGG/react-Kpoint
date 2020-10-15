import React, { Component } from 'react'

export default class setStateDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num:1
    }
    
  }
  //让state变成同步任务
  async change (){
    await this.setStateAsync({num:this.state.num+1})
    console.log(this.state.num)
  }

  setStateAsync(state) {
    return new Promise(resolve =>{
      this.setState(state,resolve)
    })
  }
  
  render() {
    
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.change.bind(this)}>change</button>
      </div>
    )
  }
}
