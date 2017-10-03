import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux' // if it’s not provider or connect it comes from redux
import tracksReducer from './reducers/tracksReducer'
import authReducer from './reducers/authReducer'
import audioFeaturesReducer from './reducers/audioFeaturesReducer'
import relatedArtistsReducer from './reducers/relatedArtistsReducer'
import topArtistsReducer from './reducers/topArtistsReducer'
import playlistReducer from './reducers/playlistReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import 'semantic-ui-css/semantic.min.css';

const appReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  audioFeatures: audioFeaturesReducer,
  relatedArtists: relatedArtistsReducer,
  topArtists: topArtistsReducer,
  playlists: playlistReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
    localStorage.removeItem('jwt');
  }
  return appReducer(state, action)
}

const store = createStore(rootReducer, compose(applyMiddleware(thunk), persistState()))

ReactDOM.render(<Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
