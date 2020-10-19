import React, { Component } from 'react'

export default class EorrorBoundary extends Component {
  state = {
    isError:false,
    error:null,
    errorInfo:null
  }
  componentDidCatch(error,errorInfo) {
    this.setState({
      hasError:true,
      error:error,
      errorInfo:errorInfo
    })
  }

  render() {
    if(this.state.isError){
      return <div>{this.props.render(this.state.error,this.state.errorInfo)}</div>
    }
    return this.props.children
  }
}
