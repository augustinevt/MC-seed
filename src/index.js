import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import DashboardReducer from './dashboard/dashboardReducer';

import './index.css';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore( DashboardReducer, applyMiddleware(...middleware))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
