import * as actions from '../actions/actions'
import { hashHistory } from 'react-router'

// 初期ステート設定
const initialState = {
  display: 0,
  square: '',
  tableData: []
}

// actionに応じてステート変更
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT: {
      return Object.assign({}, state, {square: state.square + '■'})
    }
    case actions.DECREMENT: {
      return Object.assign({}, state, {square: state.square.slice(1)})
    }
    case actions.CHANGE_SECTION: {
      return Object.assign({}, state, {display: action.display})
    }
    case actions.SEARCH_DATA: {
      return Object.assign({}, state, {tableData: action.data})
    }
    case actions.RECV_DATA: {
      return Object.assign({}, state, {display: action.data.display, square: action.data.square})
    }
    case actions.FAIL_HTTP: {
      hashHistory.push('/error')
      return Object.assign({}, state, {display: 0, square: ''})
    }
    default:
      return state
  }
}
