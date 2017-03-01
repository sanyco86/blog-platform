import React from 'react'
import { render } from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/index'
import routes from './routes/index'
import prepareData from './helpers/prepareData'
import DevTools from './containers/DevTools'
import 'bootstrap/dist/css/bootstrap.css'

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

browserHistory.listenBefore(historyCb);

historyCb(window.location);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);
