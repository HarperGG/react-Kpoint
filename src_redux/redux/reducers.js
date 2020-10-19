import {DECREMENT,INCREMENT,ADD_AGE} from './action-type'
import {combineReducers} from 'redux'
function counter(state=0,action){
  switch(action.type){
    case DECREMENT:
      return state + action.data
    case INCREMENT:
      return state - action.data
    default:
      return state
  }
}

function user(state={}, action) {
  switch(action.type){
    case ADD_AGE:
      
      return state
    default:
      return state
  }
}

//合并reducers
const rootReducers = combineReducers({
  counter,
  user
})

export default  rootReducers


