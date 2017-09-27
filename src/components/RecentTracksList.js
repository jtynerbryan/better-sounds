import React from 'react'
import { connect } from 'react-redux'

class RecentTracksList extends React.Component {

  render() {
    console.log(this.props)
    return (
      RecentTracksList
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    recentTracks: state.tracks.recentTracks,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures
  }

}

export default RecentTracksList
