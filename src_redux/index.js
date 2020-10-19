import React from 'react';
import ReactDOM from 'react-dom';

//redux用法--------------------
import App from './containers/app';
import store from './redux/store'



// function render(){
//   ReactDOM.render(
//     <div>
//       <App store={store}></App>
//     </div>

//   ,document.getElementById('root'))

// }

// render()

// store.subscribe(render)

//react-reudx用法---------------------
import {Provider} from 'react-redux'
ReactDOM.render((
  <Provider store={store}> 
    <App></App>
  </Provider>
),document.getElementById('root'))