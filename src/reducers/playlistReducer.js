function playlistReducer(state = {
  playlists: []
}, action) {
  switch(action.type) {
    case 'GET_PLAYLISTS':
      Object.assign({}, state, {
        playlists: state.playlists.concat(action.payload)
      })
    case 'ADD_NEW_PLAYLIST':
      return Object.assign({}, state, {
        playlists: state.playlists.concat(action.payload)
      })
    default:
      return state
  }
}

export default playlistReducer
