import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state={
      value:'',
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(1)
  }
  handleChange= (e)=> {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">名字：
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
