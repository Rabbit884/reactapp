export default {
  increment: () => {
    return { type: 'INCREMENT' }
  },
  decrement: () => {
    return { type: 'DECREMENT' }
  },
  setdisplay: (x) => {
    return {
      type: 'SET_DISPLAY',
      display: x
    }
  }
}