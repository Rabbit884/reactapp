import * as actions from './actions'

export default {
  increment: () => {
    return { type: actions.INCREMENT }
  },
  decrement: () => {
    return { type: actions.DECREMENT }
  }
}
