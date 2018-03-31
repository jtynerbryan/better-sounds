function audioFeaturesReducer(state = {
  topTracksAudioFeatures: [],
  aggregateFeaturesOfTopTracks: {
    danceability: 0,
    energy: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0
  }
}, action) {
  switch (action.type) {
    case 'ADD_TOP_TRACKS_AUDIO_FEATURES':
      const topFeatures = action.payload
      return Object.assign({}, state, {
        topTracksAudioFeatures: topFeatures
      })
    case 'SET_AGGREGATE_FEATURES_FOR_TOP_TRACKS':
      const aggregateTopFeatures = action.payload
      return Object.assign({}, state, {
        aggregateFeaturesOfTopTracks: aggregateTopFeatures
      })
    default:
      return state
  }
}

export default audioFeaturesReducer
