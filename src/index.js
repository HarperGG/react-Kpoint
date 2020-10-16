import React from 'react';
import ReactDOM from 'react-dom';
import App from './reduxComponent/App';
import store from './redux/store'

console.log(store);

function render(){
  ReactDOM.render(
    <div>
      <App store={store}></App>
    </div>

  ,document.getElementById('root'))

}

render()

store.subscribe(render)