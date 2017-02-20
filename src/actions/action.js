import $ from 'jquery'

export function Request (action) {
  console.log('Ajax start')
  console.log(action.data.display)
  console.log(action.data.square)
  $.ajax({
    type: 'POST',
    url: 'http://localhost:9000/api/test',
    accepts: {
      'Access-Control-Allow-Origin': '*'
    },
    timeout: 10000,
    cache: false,
    data: {
      display: action.data.display,
      square: action.data.square
    },
    dataType: 'json'
  }).done((data) => {
    return { type: 'REQUEST_POST', data: data }
  }).fail((data) => {
    return { type: 'RESPONSE', data: data }
  }).always(function (data) {

  })
}
