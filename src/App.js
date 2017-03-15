import React from 'react'
import { render } from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from 'store'
import routes from 'routes'
import prepareData from 'helpers/prepareData'
import DevTools from 'containers/DevTools'

function historyCallback(location) {
  match({ location, routes }, (error, redirect, routerState) => {
    if (!error && !redirect) {
      prepareData(store, routerState);
    }
  });
}

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App
