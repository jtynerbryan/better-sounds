function topArtistsReducer(state = {
  topArtists: []
}, action) {
  switch (action.type) {
    case 'ADD_TOP_ARTISTS':
      return Object.assign({}, state, {
        topArtists: action.payload
      })
    default:
      return state
  }
}

export default topArtistsReducer
