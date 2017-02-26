import * as Types from '../actions/actiontypes'
import { hashHistory } from 'react-router'

const initialState = {
  home: {
    display: 0
  },
  table: {
    tableData: []
  },
  card: {
    square: ''
  },
  progress: {
    visibility: 'hidden'
  }
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT: {
      return Object.assign({}, state, {card: {square: state.card.square + '■'}})
    }
    case Types.DECREMENT: {
      return Object.assign({}, state, {card: {square: state.card.square.slice(1)}})
    }
    case Types.CHANGE_SECTION: {
      return Object.assign({}, state, {home: {display: action.display}})
    }
    case Types.SEARCH_DATA: {
      return Object.assign({}, state, {table: {tableData: action.data}, progress: {visibility: 'hidden'}})
    }
    case Types.RECV_DATA: {
      return Object.assign({}, state, {home: {display: action.data.display}, card: {square: action.data.square}, progrres: {visibility: 'hidden'}})
    }
    case Types.FAIL_HTTP: {
      hashHistory.push('/error')
      return Object.assign({}, state, {progress: {visibility: 'hidden'}})
    }
    case Types.SEARCH_LOADING: {
      return Object.assign({}, state, {progress: {visibility: 'visible'}})
    }
    default:
      return state
  }
}
