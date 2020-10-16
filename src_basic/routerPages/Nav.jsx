import React, { Component } from 'react'
import {
BrowserRouter as Router,
Route,
Link,
NavLink
} from "react-router-dom";


export default class Nav extends Component {
render() {
return (
<div>
  <NavLink exact  activeStyle={{
    fontWeight: "bold",
    color: "red"
    
  }} to="/home">Home</NavLink>
  <NavLink exact  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/shop">Shop</NavLink>
  <NavLink exact  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to={{
    pathname: "/home/user",
    search: "?sort=name",
    // 影视传递参数
    state: { fromDashboard: true }
  }}>user</NavLink>

</div>
)
}
}