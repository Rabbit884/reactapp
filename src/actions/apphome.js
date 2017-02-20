export default {
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
