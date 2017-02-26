import 'whatwg-fetch'
import * as Types from './actiontypes'
import Fetch from './actionfetch'

export default {
  requestPost: () => {
    return Fetch.requestPost('/api/search', {})
  }
}

const requestData = () => {
  console.log('通信開始')
  return dispatch => {
    return dispatch({type: Types.SEARCH_LOADING})
  }
}

const receiveData = (json) => {
  console.log('通信成功')
  return {
    type: Types.SEARCH_DATA,
    data: json.recodeList
  }
}

const receiveError = (json) => {
  console.log('通信失敗')
  return {
    type: Types.FAIL_HTTP,
    data: json
  }
}

const fetchData = () => {
  return dispatch => {
    dispatch(requestData())
    return fetch ('http://localhost:9000/api/search', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(ex => dispatch(receiveError(ex)))
  }
}
