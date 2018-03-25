function tracksReducer(state = { topTracks: [] }, action) {
  switch (action.type) {
    case "ADD_TOP_TRACKS":
      const topTracks = action.payload
      return Object.assign({}, state, {
        topTracks: topTracks
      })
    default:
      return state
  }
}

export default tracksReducer
