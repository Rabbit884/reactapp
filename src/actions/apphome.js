import 'whatwg-fetch'
import * as Types from './actiontypes'

export default {
  requestPost: (data) => {
    return fetchData(data)
  }
}

const receiveData = (json) => {
  console.log('通信成功')
  return {
    type: Types.RECV_DATA,
    data: json
  }
}

const receiveError = (json) => {
  console.log('通信失敗')
  return {
    type: Types.FAIL_HTTP,
    data: json
  }
}

const fetchData = (data) => {
  return dispatch => {
    return fetch ('http://localhost:9000/api/test', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        display: data.display,
        square: data.square
      })
    }).then(response => response.json())
    .then(json => dispatch(receiveData(json)))
    .catch(ex => dispatch(receiveError(ex)))
  }
}



