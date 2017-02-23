import { connect } from 'react-redux'
import AppTable from '../components/apptable'
import Actions from '../actions/apptable'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    post: () => { dispatch(Actions.requestPost()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTable)
