import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'//异步中间件
import rootReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'//redxu调试工具
import logger from 'redux-logger'//redux,调试工具中间件

const store = createStore(
  rootReducers,
  // applyMiddleware(thunk)//应用异步中间建
  composeWithDevTools(applyMiddleware(thunk,logger))
)

export default store