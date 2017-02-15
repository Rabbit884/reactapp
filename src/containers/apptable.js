import React from 'react'
import { connect } from 'react-redux'
import AppTable from '../components/apptable'
import Actions from '../actions/apptable'

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
)(AppTable)