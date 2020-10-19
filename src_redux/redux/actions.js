import {DECREMENT,INCREMENT,ADD_AGE} from './action-type'
//同步返回一个对象
//异步返回一个函数

export const increment = (number)=>({type:DECREMENT,data:number})
export const decrement = (number)=>({type:INCREMENT,data:number})
export const asyncIncrement = (number)=>{
  return dispatch =>{
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000);
  }
}

export const addAge = (number)=>({type:ADD_AGE,data:number})