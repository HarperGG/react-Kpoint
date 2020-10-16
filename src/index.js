import React from 'react';
import ReactDOM from 'react-dom';
import App from './reduxComponent/App';
import {createStore} from 'redux'
import {counter} from './redux/reducers'

const store = createStore(counter)
console.log(store);



ReactDOM.render(
    <div>
      <App></App>
    </div>

  ,document.getElementById('root'))
