import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './src/components/App'
import LandingPage from './src/components/LandingPageComponents/landingPage'

import reducers from './src/reducers/index'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={LandingPage} />
        <Route path="home" component={LandingPage} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'))
