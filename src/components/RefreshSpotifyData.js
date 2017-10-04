import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRelatedArtists } from '../actions/relatedArtists'
import { addRelatedArtistsTopTracks } from '../actions/relatedArtists'
import { addRelatedArtistsAudioFeatures } from '../actions/relatedArtists'
import { mapRelatedArtistsFeaturesToTracks } from '../actions/relatedArtists'
var Spinner = require('react-spinkit');


class RefreshSpotifyData extends React.Component {

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    if (this.props.topArtists.length > 0 && this.props.relatedArtists.length === 0) {
      const topTenArtists = this.props.topArtists.slice(0, 10)
      const randomtopTenArtist = topTenArtists[Math.floor(Math.random() * topTenArtists.length)]
      this.props.addRelatedArtists(this.props.user.id, randomtopTenArtist.id)
    }
  }

  componentDidUpdate() {
    if (this.props.relatedArtistsTopTracks.length === 0 && this.props.relatedArtistsAudioFeatures.length === 0) {
      const topEightRelatedArtists = this.props.relatedArtists.slice(0, 8)
      topEightRelatedArtists.map(artist => this.props.addRelatedArtistsTopTracks(this.props.user.id, artist.id))
    }

    if (this.props.relatedArtistsTopTracks.length === 80 && this.props.relatedArtistsAudioFeatures.length === 0) {
      this.props.addRelatedArtistsAudioFeatures(this.props.user.id, this.props.relatedArtistsTopTracks)
    }

    if (this.props.relatedArtistsAudioFeatures.length > 0 && this.props.relatedArtistsTracksWithFeatures.length === 0) {
      this.props.mapRelatedArtistsFeaturesToTracks(this.props.relatedArtistsTopTracks, this.props.relatedArtistsAudioFeatures)
    }

    if(this.props.relatedArtistsTracksWithFeatures.length > 0) {
      setTimeout(() => this.props.history.push('user-results'), 2500)
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
  return bindActionCreators ({
    addRelatedArtists,
    addRelatedArtistsTopTracks,
    addRelatedArtistsAudioFeatures,
    mapRelatedArtistsFeaturesToTracks
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
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshSpotifyData)
