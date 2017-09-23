function tracksReducer(state = { topTracks: [], recentTracks: [] }, action) {
  switch (action.type) {
    case "ADD_TOP_TRACKS":
      const topTracks = action.payload
      return Object.assign({}, state, {
        topTracks: topTracks
      })
    case "ADD_RECENTLY_PLAYED_TRACKS":
      const recentlyPlayedTracks = action.payload
      return Object.assign({}, state, {
        recentTracks: recentlyPlayedTracks
      })
    default:
      return state
  }
}

export default tracksReducer
