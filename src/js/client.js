import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './pages/Router.js';

import store from "./store.js";

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <AppRouter />
</Provider>, app);
