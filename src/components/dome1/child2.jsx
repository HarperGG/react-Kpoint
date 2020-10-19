import React, { Component } from 'react'
import withFetch from './banner'

const child2 = withFetch('http://child2.com')(props=>{
  return(
    <div>
      {props.data1}
    </div>
  )
})

export default child2