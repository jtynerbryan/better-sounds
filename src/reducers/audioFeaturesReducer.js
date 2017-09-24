function audioFeaturesReducer(state = {
  topTracksAudioFeatures: [], recentTracksAudioFeatures: []
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
    default:
      return state
  }
}

export default audioFeaturesReducer
