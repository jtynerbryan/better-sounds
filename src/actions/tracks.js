export function addTopTracks(tracks) {
  return {
    type: "ADD_TOP_TRACKS",
    payload: tracks
  }
}

export function addRecentTracks(tracks) {
  return {
    type: "ADD_RECENTLY_PLAYED_TRACKS",
    payload: tracks
  }
}
