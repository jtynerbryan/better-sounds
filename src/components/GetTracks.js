import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTopTracks } from '../actions/tracks'
import { addRecentTracks } from '../actions/tracks'
import { addTopTracksAudioFeatures } from '../actions/audioFeatures'
import { addRecentTracksAudioFeatures } from '../actions/audioFeatures'

class GetTracks extends React.Component {

  componentDidUpdate() {
    if (this.props.user.id !== null && this.props.topTracks.length === 0 && this.props.recentTracks.length === 0) {
      this.props.addTopTracks(this.props.user.id)
      this.props.addRecentTracks(this.props.user.id)
    }

    if (this.props.topTracks.length > 0 && this.props.topTracksAudioFeatures.length === 0) {
      this.props.addTopTracksAudioFeatures(this.props.user.id, this.props.topTracks)
    }

    if (this.props.recentTracks.length > 0 && this.props.recentTracksAudioFeatures.length === 0) {
      this.props.addRecentTracksAudioFeatures(this.props.user.id, this.props.recentTracks)
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Fetching Tracks...</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTopTracks, addRecentTracks, addTopTracksAudioFeatures, addRecentTracksAudioFeatures}, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    recentTracks: state.tracks.recentTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTracks)
