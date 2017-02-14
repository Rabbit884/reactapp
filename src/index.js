import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import App from './containers/app';

import configureStore from './store/configureStore';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
        <Provider store={ configureStore() }>
            <App />
        </Provider>
    </MuiThemeProvider>
    ,
  document.getElementById('root')
);