export function addRelatedArtists(user_id,artist_id) {
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/related_artists?user_id=${user_id}&artist_id=${artist_id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS", payload: res.related_artists.artists})
    })
  }
}
