import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App';

import { createStore, applyMiddleware, combineReducers } from 'redux' // if it’s not provider or connect it comes from redux
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Provider><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
