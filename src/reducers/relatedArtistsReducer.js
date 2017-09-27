function relatedArtistsReducer(state = {
  relatedArtists: [],
  relatedArtistsTopTracks: []
}, action) {
  switch (action.type) {
    case 'ADD_RELATED_ARTISTS':
      return Object.assign({}, state, {
        relatedArtists: action.payload
      })
    default:
      return state
  }
}

export default relatedArtistsReducer
