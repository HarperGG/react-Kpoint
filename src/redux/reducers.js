import {DECREMENT,INCREMENT} from './action-type'
export function counter(state=0,action){
  switch(action.type){
    case DECREMENT:
      return state + action.data
    case INCREMENT:
      return state - action.data
    
    default:
      return state
  }
}