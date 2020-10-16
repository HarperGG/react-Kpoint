import React, { Component } from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
Link
} from "react-router-dom";

import Home from './Home'
import Shop from './Shop'
import Nav from './Nav'
import User from './User';
import NotFound from './NotFound';
import Person from './Person'

export default class main extends Component {
render() {
return (
<Router>
  <Switch>
    {/* 重定向 */}
    <Redirect from='/newhome' to='/home' />
    {/* 基本路哟跳转 */}
    <Route exact path="/home" component={Home}></Route>
    <Route path="/shop" component={Shop}></Route> 
    {/* 传递参数 */}
    <Route exact path="/home/user/:id?" component={User}></Route>
    <Route component={NotFound}></Route>
    {/* 特殊传参方式 */}
    <Route path="/person" render={(props)=><Person {...props} name="你好" />}></Route>

  </Switch>

  {/* link链接 */}
  <Nav></Nav>
</Router>
)
}
}