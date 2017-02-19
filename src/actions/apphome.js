export default {
  test: () => {
    return {
      display: 0,
      square: '■■■'
    }
  },
  requestPost: () => {
    return {
      type: 'REQUEST_POST',
      data: {
        display: 0,
        square: '■■■'
      }
    }
  }
}
