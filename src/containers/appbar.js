import React from 'react'
import { connect } from 'react-redux'
import AppBar from '../components/appbar'
import Actions from '../actions/appbar'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    setDisplay: (x) => { dispatch(Actions.setdisplay(x)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)