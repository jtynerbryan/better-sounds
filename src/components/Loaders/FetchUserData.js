import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTopTracks } from '../../actions/tracks'
import { addTopArtists } from '../../actions/topArtists'
import { addTopTracksAudioFeatures } from '../../actions/audioFeatures'
import { sumFeaturesOfTopTracks } from '../../actions/audioFeatures'
import { addRelatedArtists } from '../../actions/relatedArtists'
import { getPlaylists } from '../../actions/playlists'
var Spinner = require('react-spinkit');

class FetchUserData extends React.Component {

  componentDidMount() {
    setTimeout(function(){
      if (!this.props.isLoggedIn) {
        this.props.history.push('/')
      } else {
        this.props.getPlaylists(this.props.user.id)
      }
    }.bind(this), 2500);
  }

  componentDidUpdate() {
    // get user's top tracks and artists
    if (this.props.user.id !== null && this.props.topTracks.length === 0 ) {
      this.props.addTopTracks(this.props.user.id)
      this.props.addTopArtists(this.props.user.id)
    }

    // get audio features of top tracks
    if (this.props.topTracks.length > 0 && this.props.topTracksAudioFeatures.length === 0) {
      this.props.addTopTracksAudioFeatures(this.props.user.id, this.props.topTracks)
    }

    // get aggregate of top tracks audio features by category
    if (this.props.topTracksAudioFeatures.length > 0 && this.props.aggregateFeaturesOfTopTracks.danceability === 0) {
      this.props.sumFeaturesOfTopTracks(this.props.topTracksAudioFeatures)
    }

    // get a related artist by random from user's top 5 artists
    if (this.props.topArtists.length > 0 && this.props.relatedArtists.length === 0) {
      const topTenArtists = this.props.topArtists.slice(0, 10)
      const randomtopTenArtist = topTenArtists[Math.floor(Math.random() * topTenArtists.length)]
      this.props.addRelatedArtists(this.props.user.id, randomtopTenArtist.id)
    }

    // if all data has been stored, move to user's results view
    if (this.props.relatedArtists.length > 0 && this.props.topTracksAudioFeatures.length > 0) {
      setTimeout(() => this.props.history.push('listening-profile'), 4000)
    }

  }

  render() {
    return (
      <div className="loader">
        <Spinner className="spinner" name="cube-grid" color="white" />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTopTracks,
      addTopTracksAudioFeatures,
      sumFeaturesOfTopTracks,
      addRelatedArtists,
      addTopArtists,
      getPlaylists
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchUserData)
