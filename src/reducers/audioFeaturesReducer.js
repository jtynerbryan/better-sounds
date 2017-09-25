function audioFeaturesReducer(state = {
  topTracksAudioFeatures: [],
  recentTracksAudioFeatures: [],
  aggregateFeaturesOfTopTracks: {
    danceability: 0,
    energy: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0
  },
  aggregateFeaturesOfRecentTracks: {
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
    case 'ADD_RECENT_TRACKS_AUDIO_FEATURES':
        const recentFeatures = action.payload
        return Object.assign({}, state, {
          recentTracksAudioFeatures: recentFeatures
        })
    case 'SET_AGGREGATE_FEATURES_FOR_TOP_TRACKS':
        const aggregateTopFeatures = action.payload
        return Object.assign({}, state, {
          aggregateFeaturesOfTopTracks: aggregateTopFeatures
        })
    case 'SET_AGGREGATE_FEATURES_FOR_RECENT_TRACKS':
      const aggregateRecentFeatures = action.payload
      return Object.assign({}, state, {
        aggregateFeaturesOfRecentTracks: aggregateRecentFeatures
    })
    default:
      return state
  }
}

export default audioFeaturesReducer
