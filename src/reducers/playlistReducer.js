function playlistReducer(state = {
  playlists: []
}, action) {
  switch(action.type) {
    case 'ADD_PLAYLIST':
      return Object.assign({}, state, {
        playlists: state.playlists.concat(action.payload)
      })
    default:
      return state
  }
}

export default playlistReducer
