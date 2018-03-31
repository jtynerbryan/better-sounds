import { combineReducers } from 'redux'
import tracksReducer from './tracksReducer'
import authReducer from './authReducer'
import audioFeaturesReducer from './audioFeaturesReducer'
import relatedArtistsReducer from './relatedArtistsReducer'
import topArtistsReducer from './topArtistsReducer'
import playlistReducer from './playlistReducer'

const appReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  audioFeatures: audioFeaturesReducer,
  relatedArtists: relatedArtistsReducer,
  topArtists: topArtistsReducer,
  playlists: playlistReducer
})

export default appReducer
