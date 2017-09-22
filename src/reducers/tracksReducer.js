function tracksReducer(state = { topTracks: [], recentTracks: [] }, action) {
  switch (action.type) {
    case "ADD_TOP_TRACKS":
      const topTracks = action.payload.tracks
      return Object.assign({}, state, {
        topTracks: topTracks
      })
    case "ADD_RECENTLY_PLAYED_TRACKS":
      return state
    default:
      return state
  }
}

export default tracksReducer
