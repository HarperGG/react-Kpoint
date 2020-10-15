import React, {
    Component
} from 'react'

import Home from './Home'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'我师傅'
        }
    }
    add = () => {

    }
    changeFun = (title)=>{
        this.setState({
            title:title
        })
    }
    render() {
        return ( 
        <div>
            <h1>我是h1</h1>
            <Home title={this.state.title} changeFun={this.changeFun}></Home>
         </div>
        )
    }
}