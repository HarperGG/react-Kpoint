import {DECREMENT,INCREMENT} from './action-type'

export const increment = (number)=>({type:DECREMENT,data:number})
export const decrement = (number)=>({type:INCREMENT,data:number})