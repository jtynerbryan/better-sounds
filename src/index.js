import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
    localStorage.removeItem('jwt');
  }
  return appReducer(state, action)
}

const store = createStore(rootReducer, compose(applyMiddleware(thunk), persistState()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
