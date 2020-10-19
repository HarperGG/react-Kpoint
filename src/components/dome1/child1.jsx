import React, { Component } from 'react'
import withFetch from './banner'

const child1 = withFetch('http://child1.com')(props=>{
  return(
    <div>
      {props.data}
    </div>
  )
})

export default child1