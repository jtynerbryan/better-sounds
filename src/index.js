import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux' // if it’s not provider or connect it comes from redux
import tracksReducer from './reducers/tracksReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import UserHome from './components/UserHome'
import Login from './components/Login'

const store = createStore(tracksReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}>
    <Router>
      <div>
      <Route path='/' component={App}/>
      <Route path='/login' component={Login}/>
      <Route path='/success' component={UserHome}/>
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
