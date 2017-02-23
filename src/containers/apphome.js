import { connect } from 'react-redux'
import AppHome from '../components/apphome'
import Actions from '../actions/apphome'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    post: (data) => { dispatch(Actions.requestPost(data)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)
