function relatedArtistsReducer(state = {
  relatedArtists: [],
  relatedArtistsTopTracks: [],
  relatedArtistsAudioFeatures: [],
  tracksWithFeatures: []
}, action) {
  switch (action.type) {
    case 'ADD_RELATED_ARTISTS':
      return Object.assign({}, state, {
        relatedArtists: action.payload
      })
    case 'ADD_RELATED_ARTISTS_TOP_TRACKS':
        return Object.assign({}, state, {
          relatedArtistsTopTracks: state.relatedArtistsTopTracks.concat(action.payload)
        })
    case 'ADD_RELATED_ARTISTS_AUDIO_FEATURES':
          return Object.assign({}, state, {
            relatedArtistsAudioFeatures: state.relatedArtistsAudioFeatures.concat(action.payload)
          })      
    default:
      return state
  }
}

export default relatedArtistsReducer
