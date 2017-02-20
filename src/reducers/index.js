// 初期ステート設定
const initialState = {
  display: 0,
  square: ''
}

// actionに応じてステート変更
export default function reducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT': {
      return { display: state.display, square: state.square + '■' }
    }
    case 'DECREMENT': {
      return { display: state.display, square: state.square.slice(1) }
    }
    case 'SET_DISPLAY': {
      return { display: action.display, square: state.square }
    }
    case 'REQUEST_POST': {
      console.log('REQUEST_POST')
      return { display: action.data.display, square: action.data.square }
    }
    case 'RESPONSE': {
      console.log('RESPONSE')
      return { display: action.data.display, square: action.data.square }
    }
    default:
      return state
  }
}
