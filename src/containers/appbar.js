import { connect } from 'react-redux'
import AppBar from '../components/appbar'
import Actions from '../actions/appbar'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    setDisplay: (x) => { dispatch(Actions.setdisplay(x)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)
