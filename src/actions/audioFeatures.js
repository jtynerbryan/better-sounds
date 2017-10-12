export function addTopTracksAudioFeatures(id, tracks) {
  const trackIds = tracks.map(track => track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://better-sounds-api.herokuapp.com/api/v1/audio_features?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_TOP_TRACKS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }

}

export function addRecentTracksAudioFeatures(id, tracks) {
  const trackIds = tracks.map(item => item.track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`http://better-sounds-api.herokuapp.com/api/v1/audio_features?id=${id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RECENT_TRACKS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }

}

export function sumFeaturesOfTopTracks(tracksFeatures) {
  const aggregate = {
    danceability: 0,
    energy: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0
  }
  tracksFeatures.map(track => {
    aggregate.danceability += track.danceability
    aggregate.energy += track.energy
    aggregate.speechiness += track.speechiness
    aggregate.acousticness += track.acousticness
    aggregate.instrumentalness += track.instrumentalness
    aggregate.liveness += track.liveness
    aggregate.valence += track.valence
  })

  return (dispatch) => {
    dispatch({type: 'SET_AGGREGATE_FEATURES_FOR_TOP_TRACKS', payload: aggregate})
  }
}

export function sumFeaturesOfRecentTracks(tracksFeatures) {
  const aggregate = {
    danceability: 0,
    energy: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0
  }
  tracksFeatures.map(track => {
    aggregate.danceability += track.danceability
    aggregate.energy += track.energy
    aggregate.speechiness += track.speechiness
    aggregate.acousticness += track.acousticness
    aggregate.instrumentalness += track.instrumentalness
    aggregate.liveness += track.liveness
    aggregate.valence += track.valence
  })

  return (dispatch) => {
    dispatch({type: 'SET_AGGREGATE_FEATURES_FOR_RECENT_TRACKS', payload: aggregate})
  }
}
