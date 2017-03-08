import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';


import DashboardReducer from './dashboard/dashboardReducer';

import DashboardContainer from './dashboard/DashboardContainer';


import './index.css';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore( DashboardReducer, applyMiddleware(...middleware))


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={ DashboardContainer }>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
