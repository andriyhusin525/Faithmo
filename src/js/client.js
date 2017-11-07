import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './pages/Router.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from "./store.js";

const app = document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store}>
    <AppRouter />
  </Provider>
</MuiThemeProvider>, app);
