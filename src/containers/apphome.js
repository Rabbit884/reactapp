import React from 'react'
import { connect } from 'react-redux'
import AppHome from '../components/apphome'
import Actions from '../actions/apphome'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)