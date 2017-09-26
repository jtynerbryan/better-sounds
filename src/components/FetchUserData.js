import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTopTracks } from '../actions/tracks'
import { addRecentTracks } from '../actions/tracks'
import { addTopTracksAudioFeatures } from '../actions/audioFeatures'
import { addRecentTracksAudioFeatures } from '../actions/audioFeatures'
import { sumFeaturesOfTopTracks } from '../actions/audioFeatures'
import { sumFeaturesOfRecentTracks } from '../actions/audioFeatures'
import Loader from './Loader'

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

    if (this.props.topTracksAudioFeatures.length > 0 && this.props.aggregateFeaturesOfTopTracks.danceability === 0) {
      this.props.sumFeaturesOfTopTracks(this.props.topTracksAudioFeatures)
    }

    if (this.props.recentTracksAudioFeatures.length > 0 && this.props.aggregateFeaturesOfRecentTracks.danceability === 0) {
      this.props.sumFeaturesOfRecentTracks(this.props.recentTracksAudioFeatures)
    }

    if (this.props.aggregateFeaturesOfTopTracks.danceability > 0 && this.props.aggregateFeaturesOfRecentTracks.danceability > 0) {
      this.props.history.push('/audio-features-chart')
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id="loader">
      <Loader />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTopTracks, addRecentTracks, addTopTracksAudioFeatures, addRecentTracksAudioFeatures, sumFeaturesOfTopTracks, sumFeaturesOfRecentTracks}, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    recentTracks: state.tracks.recentTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    aggregateFeaturesOfRecentTracks: state.audioFeatures.aggregateFeaturesOfRecentTracks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTracks)
