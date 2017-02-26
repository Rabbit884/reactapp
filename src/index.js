import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {amberA400, blueGrey800, grey50} from 'material-ui/styles/colors'

import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import AppBar from './containers/appbar'
import AppHome from './containers/apphome'
import AppCard from './containers/appcard'
import AppTable from './containers/apptable'
import AppError from './containers/apperror'

import configureStore from './store/configureStore'

injectTapEventPlugin()


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amberA400,
    textColor: blueGrey800,
    canvasColor: grey50
  },
  appBar: {
    height: 70
  }
})

ReactDOM.render(
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Provider store={ configureStore() }>
        <Router history={ hashHistory } >
          <Route path="/" component={AppBar}>
            <IndexRoute component={AppHome} />
            <Route path="table" component={AppTable} />
            <Route path="card" component={AppCard} />
          </Route>
          <Route path="/error" component={AppError} />
        </Router>
      </Provider>
    </MuiThemeProvider>
    ,
  document.getElementById('root')
)
