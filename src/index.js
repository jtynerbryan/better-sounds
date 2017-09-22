import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux' // if it’s not provider or connect it comes from redux
import tracksReducer from './reducers/tracksReducer'
import authReducer from './reducers/authReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({auth: authReducer, tracks: tracksReducer})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
