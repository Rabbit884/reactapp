import { connect } from 'react-redux'
import AppError from '../components/apperror'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppError)
