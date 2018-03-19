export function addRelatedArtists(user_id,artist_id) {
  const body = {
    method: 'GET',
    mode: 'cors'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/related_artists?user_id=${user_id}&artist_id=${artist_id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS", payload: res.related_artists.artists})
    })
  }
}

export function addRelatedArtistsTopTracks(user_id,artist_id) {
  const body = {
    method: 'GET',
    mode: 'cors'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/related_artists_top_tracks?user_id=${user_id}&artist_id=${artist_id}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS_TOP_TRACKS", payload: res.top_tracks.tracks})
    })
  }
}

export function addRelatedArtistsAudioFeatures(user_id, tracks) {
  const trackIds = tracks.map(track => track.id)
  const body = {
    method: 'GET',
    mode: 'cors'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/audio_features?id=${user_id}&ids=${trackIds}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_RELATED_ARTISTS_AUDIO_FEATURES", payload: res.features.audio_features})
    })
  }

}

export function mapRelatedArtistsFeaturesToTracks(tracks, features) {
  const mapTracksToFeatures = []
  tracks.map(track => {
    let attributes = features.filter(features => features.id === track.id)
    mapTracksToFeatures.push( {
      track: track,
      features: attributes
    })
  })

  return (dispatch) => {
    dispatch({
      type: 'MAP_FEATURES_TO_TRACKS', payload: mapTracksToFeatures
    })
  }
}

export function clearAllRelatedArtistsData() {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_ALL_RELATED_ARTISTS_DATA'
    })
  }
}
