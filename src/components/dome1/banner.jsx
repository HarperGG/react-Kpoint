import React, { Component } from 'react'

const withFetch = (url)=>(View)=>{
  return class extends Component{
    constructor(props){
      super(props)
      this.state = {
        loading: true,
        data:null,
      }
    }

    componentDidMount(){
      fetch(url)
      .then(res=>JSON.parse(res))
      .then(data=>{
        this.setState({
          loading: false,
          data:data.data
        })
      })
    }

    render() {
      if(this.state.loading){
        return(
          <div>loading...</div>
        )
      }else{
        return(
          <View data={this.state.data}></View>
         
        )
      }
    }
  }
}

export default withFetch