import React from 'react'
import { connect } from 'react-redux'
import AppCard from '../components/appcard'
import Actions from '../actions/appcard'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => { dispatch(Actions.increment()) },
    handleCut: () => { dispatch(Actions.decrement()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCard)