function relatedArtistsReducer(state = {
  relatedArtists: [],
  relatedArtistsTopTracks: []
}, action) {
  switch (action.type) {
    case 'ADD_RELATED_ARTISTS':
      return Object.assign({}, state, {
        relatedArtists: action.payload
      })
    case 'ADD_RELATED_ARTISTS_TOP_TRACKS':
        debugger
        return Object.assign({}, state, {
          relatedArtistsTopTracks: state.relatedArtistsTopTracks.concat(action.payload)
        })
    default:
      return state
  }
}

export default relatedArtistsReducer
