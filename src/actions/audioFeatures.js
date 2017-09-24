export function addTopTracksAudioFeatures(id, tracks) {
  const trackIds = tracks.map(track => track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/audio_features?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_TOP_TRACKS_AUDIO_FEATURES", payload: res.features})
    })
  }

}

export function addRecentTracksAudioFeatures(id, tracks) {
  const trackIds = tracks.map(item => item.track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/audio_features?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RECENT_TRACKS_AUDIO_FEATURES", payload: res.features})
    })
  }

}
