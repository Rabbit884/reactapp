import 'whatwg-fetch'
import * as actions from './actions'

export default {
  requestPost: (dispatch) => {
    return fetchData(dispatch)
  }
}

const receiveData = (json) => {
  console.log('通信成功')
  return {
    type: actions.SEARCH_DATA,
    data: json
  }
}

const receiveError = (json) => {
  console.log('通信失敗')
  return {
    type: actions.FAIL_HTTP,
    data: json
  }
}

const fetchData = () => {
  return dispatch => {
    return fetch ('http://localhost:9000/api/search', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {}
    }).then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(ex => dispatch(receiveError(ex)))
  }
}
