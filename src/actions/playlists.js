export function addPlaylist(user_id, spotifyId, playlistName, tracks) {
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/create_playlist?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_TOP_TRACKS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }
}
