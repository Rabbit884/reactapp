import 'whatwg-fetch'
import * as actions from './actions'

export default {
  requestPost: (data) => {
    return fetchData(data)
  }
}

const requestData = () => {
  return {type: actions.REQ_DATA}
}

const receiveData = (json) => {
  console.log('通信成功')
  return {
    type: actions.RECV_DATA,
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

const fetchData = (data) => {
  return dispatch => {
    return fetch ('http://localhost:9000/api/test', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        display: data.display,
        square: data.square
      })
    }).then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(ex => dispatch(receiveError(ex)))
  }
}



