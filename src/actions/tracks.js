export function addTopTracks(id) {
  const body = {
    method: 'GET',
    mode: 'cors'
  }
  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/top_tracks?id=${id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type:"ADD_TOP_TRACKS", payload: res.tracks.items})
    })
  }
}
