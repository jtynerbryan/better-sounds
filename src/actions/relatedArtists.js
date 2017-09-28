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

export function addRelatedArtistsTopTracks(user_id,artist_id) {
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/related_artists_top_tracks?user_id=${user_id}&artist_id=${artist_id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS_TOP_TRACKS", payload: res.top_tracks.tracks})
    })
  }
}

export function addRelatedArtistsAudioFeatures(user_id, tracks) {
  const trackIds = tracks.map(track => track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/audio_features?id=${user_id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }

}
