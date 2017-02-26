import * as Types from './actiontypes'

export default {
  setdisplay: (x) => {
    return {
      type: Types.CHANGE_SECTION,
      display: x
    }
  }
}
