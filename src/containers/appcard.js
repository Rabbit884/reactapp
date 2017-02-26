import { connect } from 'react-redux'
import AppCard from '../components/appcard'
import Actions from '../actions/appcard'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: () => { dispatch(Actions.increment()) },
    handleCut: () => { dispatch(Actions.decrement()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCard)
