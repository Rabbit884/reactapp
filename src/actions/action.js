import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

export function Request (action) {
  axios.post('/api/test', {
    display: action.data.display,
    square: action.data.square
  })
  .then(function (response) {
    console.log(response)
    return response
  })
  .catch(function (error) {
    console.log(error)
    return action
  })
}
