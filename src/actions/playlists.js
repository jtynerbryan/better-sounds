export function addPlaylist(user_id, spotifyId, playlistName, tracks) {
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/create_playlist?user_id=${user_id}&ids=${tracks}&spotify_id=${spotifyId}&playlist_name=${playlistName}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_PLAYLIST", payload: res})
    })
  }
}
