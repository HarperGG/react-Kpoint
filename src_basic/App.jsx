import React, {
    Component
} from 'react'
import SteStateDemo from './setStateDemo'
import Form from './Form'
import Home from './Home'
import RefForm from './refsForm'
import Compose from './compose'
import PropType from './propType'
import Main from './routerPages/Main'
import ReduxMain from './reduxFile/Main'


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
            {/* <h1>我是h1</h1>
            <Home title={this.state.title} changeFun={this.changeFun}></Home> */}

            {/* state */}
            {/* <SteStateDemo></SteStateDemo> */}

            {/* 受控组件 */}
            {/* <Form></Form> */}

            {/* 非受控组件 */}
            {/* <RefForm></RefForm> */}

            {/* 组合继承 */}
            {/* <Compose>
                <h1>我是组合继承</h1>
            </Compose> */}

            {/* 类型检测 */}
            {/* <PropType title={'123'}></PropType> */}

            {/* react-router */}
            {/* <Main></Main> */}

            {/* redux */}
            <ReduxMain></ReduxMain>
            

         </div>
        )
    }
}