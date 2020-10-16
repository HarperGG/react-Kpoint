import React, { Component } from 'react'
import querystring from 'querystring'

export default class User extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
  }

  
  render() {
    // 获取 ？data1=123&data2=345这其中参数
    
  const params = new URLSearchParams(this.props.location.search)
  console.log(params.get('data1'));

  const params1 = querystring.parse(this.props.location.search)
  console.log(params1);
    return (
      <div>
        hemo/User 
      </div>
    )
  }
}
