import * as actions from './actions'

export default {
  setdisplay: (x) => {
    return {
      type: actions.CHANGE_SECTION,
      display: x
    }
  }
}
