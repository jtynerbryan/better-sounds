import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTopTracks } from '../actions/tracks'
import { addRecentTracks } from '../actions/tracks'
import { addTopTracksAudioFeatures } from '../actions/audioFeatures'
import { addRecentTracksAudioFeatures } from '../actions/audioFeatures'
import { sumFeaturesOfTopTracks } from '../actions/audioFeatures'
import { sumFeaturesOfRecentTracks } from '../actions/audioFeatures'
import { addRelatedArtists } from '../actions/relatedArtists'

import { addTopArtists } from '../actions/topArtists'

import Loader from './Loader'

class GetTracks extends React.Component {

  componentDidMount() {
    setTimeout(function(){
      if (!this.props.isLoggedIn) {
        this.props.history.push('/')
      };
    }.bind(this), 2500);
  }

  componentDidUpdate() {
    // get user's top tracks and artists
    if (this.props.user.id !== null && this.props.topTracks.length === 0 ) {
      this.props.addTopTracks(this.props.user.id)
      this.props.addRecentTracks(this.props.user.id)
      this.props.addTopArtists(this.props.user.id)

    }
    // get audio features of top tracks
    if (this.props.topTracks.length > 0 && this.props.topTracksAudioFeatures.length === 0) {
      this.props.addTopTracksAudioFeatures(this.props.user.id, this.props.topTracks)
    }

    // get audio features of recent tracks
    if (this.props.recentTracks.length > 0 && this.props.recentTracksAudioFeatures.length === 0) {
      this.props.addRecentTracksAudioFeatures(this.props.user.id, this.props.recentTracks)
    }

    // get aggregate of top tracks audio features by category
    if (this.props.topTracksAudioFeatures.length > 0 && this.props.aggregateFeaturesOfTopTracks.danceability === 0) {
      this.props.sumFeaturesOfTopTracks(this.props.topTracksAudioFeatures)
    }

    // get aggregate of recent tracks audio features by category
    if (this.props.recentTracksAudioFeatures.length > 0 && this.props.aggregateFeaturesOfRecentTracks.danceability === 0) {
      this.props.sumFeaturesOfRecentTracks(this.props.recentTracksAudioFeatures)
    }

    // get a related artist by random from user's top 5 artists
    if (this.props.topArtists.length > 0 && this.props.relatedArtists.length === 0) {
      const topFiveArtists = this.props.topArtists.slice(0, 5)
      const randomtopFiveArtist = topFiveArtists[Math.floor(Math.random() * topFiveArtists.length)]
      this.props.addRelatedArtists(this.props.user.id, randomtopFiveArtist.id)
    }

    // if all data has been stored, move to user's results view
    if (this.props.relatedArtists.length > 0 && this.props.topTracksAudioFeatures.length > 0 && this.props.recentTracksAudioFeatures.length > 0) {
      this.props.history.push('/user-results')
    }

  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>Loading your spotify data...</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTopTracks,
      addRecentTracks,
      addTopTracksAudioFeatures,
      addRecentTracksAudioFeatures,
      sumFeaturesOfTopTracks,
      sumFeaturesOfRecentTracks,
      addRelatedArtists,
      addTopArtists
    }, dispatch)
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
    aggregateFeaturesOfRecentTracks: state.audioFeatures.aggregateFeaturesOfRecentTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTracks)
