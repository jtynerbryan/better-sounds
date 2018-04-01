import shuffle from '../utils/shuffle'

export function addPlaylist(playlistName, audioFeature, tracks, userId) {
  // sort tracks based on selected audio feature
  const orderedTracks = tracks.sort((a, b) => {
    return b.features[0][audioFeature] - a.features[0][audioFeature]
  })

  // shuffle orderedTracks
  const shuffledTopThirtyTracks = shuffle(orderedTracks.slice(0, 30))

  // extract track id's from shuffledTopThirtyTracks
  const trackUrisToSend = shuffledTopThirtyTracks.map(track => "spotify:track:" + track.track.id)
  const body = {
    method: 'POST'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/create_playlist?user_id=${userId}&track_ids=${trackUrisToSend}&playlist_name=${playlistName} - created by Better Sounds`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_NEW_PLAYLIST", payload: res.playlist})
    })
  }
}

export function getPlaylists(userId) {
  const body = {
    method: 'GET',
    mode: 'cors'
  }

  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/get_playlists?user_id=${userId}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type: "GET_PLAYLISTS", payload: res.playlists})
    })
  }
}
