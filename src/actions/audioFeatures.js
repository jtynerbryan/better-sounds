export function addTopTracksAudioFeatures(id, tracks) {
  const trackIds = tracks.map(track => track.id)
  const body = {
    method: 'GET',
    mode: 'cors'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/audio_features?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_TOP_TRACKS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }
}

// reduce top tracks audio features to create AudioFeaturesChart
export function sumFeaturesOfTopTracks(tracksFeatures) {
  const aggregate = tracksFeatures.reduce((a, b) => {
    return {
      danceability: a.danceability + b.danceability,
      energy: a.energy + b.energy,
      speechiness: a.speechiness + b.speechiness,
      acousticness: a.acousticness + b.acousticness,
      instrumentalness: a.instrumentalness + b.instrumentalness,
      liveness: a.liveness + b.liveness,
      valence: a.valence + b.valence
    }
  })

  return (dispatch) => {
    dispatch({type: 'SET_AGGREGATE_FEATURES_FOR_TOP_TRACKS', payload: aggregate})
  }
}
