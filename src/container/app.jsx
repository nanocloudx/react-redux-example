import React from 'react'
import { connect } from 'react-redux'

import App from '../component/app'
import { increment, decrement, reset } from '../action/app'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    onClickIncrement: () => { dispatch(increment()) },
    onClickDecrement: () => { dispatch(decrement()) },
    onClickReset: () => { dispatch(reset()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
