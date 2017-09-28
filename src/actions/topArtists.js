export function addTopArtists(user_id) {
  const body = {
    method: 'POST'
  }
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/top_artists?user_id=${user_id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type:"ADD_TOP_ARTISTS", payload: res.top_artists.items})
    })
  }
}
