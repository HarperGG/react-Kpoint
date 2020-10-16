import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import StateComponent from './StateComponent'


let arr1 = ['苹果','粒子']
let arr2 = ['苹果1','粒子2']
ReactDOM.render(
    <div>
      <App></App>
      {/* <Home arr={arr1}></Home>
      <Home arr={arr2}></Home> */}
      {/* <StateComponent arr={arr2}></StateComponent> */}
    </div>

  ,document.getElementById('root'))
