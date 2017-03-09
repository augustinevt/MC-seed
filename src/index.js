import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';


import featOneReducer from './featOne/reducer';
import FeatOneContainer from './featOne/FeatOneContainer';


import './index.css';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore( featOneReducer, applyMiddleware(...middleware))


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={ FeatOneContainer }>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
