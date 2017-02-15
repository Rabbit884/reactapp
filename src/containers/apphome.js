import React from 'react'
import { connect } from 'react-redux'
import AppHome from '../components/apphome'
import Actions from '../actions/apphome'

import { selectReddit, fetchPosts } from '../actions/action';

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    select: () => { dispatch(selectReddit(Actions.test())) },
    fetch:  () => { dispatch(fetchPosts(Actions.test())) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)