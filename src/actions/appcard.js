import * as Types from './actiontypes'

export default {
  increment: () => {
    return { type: Types.INCREMENT }
  },
  decrement: () => {
    return { type: Types.DECREMENT }
  }
}
