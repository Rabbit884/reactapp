import { connect } from 'react-redux'
import AppHome from '../components/apphome'
import Actions from '../actions/apphome'
import { Request } from '../actions/action'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    post: () => { dispatch(Request(Actions.requestPost())) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)
