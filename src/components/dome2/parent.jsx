import React, { Component } from 'react'
import Errors from './Errors'
import ErrorBoundary from './EorrorBoundary'

export default class parent extends Component {
  render() {
    return (
      <div>
        parent
        <p></p>
        <ErrorBoundary render={(error,errorInfo)=><div>{'错误信息'}</div>}>
          <Errors></Errors>
        </ErrorBoundary>
        
      </div>
    )
  }
}
