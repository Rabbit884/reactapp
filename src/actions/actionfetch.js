import 'whatwg-fetch'
import * as Types from './actiontypes'

export default {
  requestPost: (path, data) => {
    return fetchData(path, data)
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
    data: json
  }
}

const receiveError = (json) => {
  console.log('通信失敗')
  return {
    type: Types.FAIL_HTTP
  }
}

const fetchData = (path, data) => {
  return dispatch => {
    dispatch(requestData())
    return fetch ('http://localhost:9000' + path, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(ex => dispatch(receiveError(ex)))
  }
}
