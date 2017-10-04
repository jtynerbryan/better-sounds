import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopTracksList from './TopTracksList'
import RecentTracksList from './RecentTracksList'
import LoggedInNavBar from './LoggedInNavBar'
import PlaylistForm from './PlaylistForm'
import { bindActionCreators } from 'redux'
import { addRelatedArtistsTopTracks } from '../actions/relatedArtists'
import { addRelatedArtistsAudioFeatures } from '../actions/relatedArtists'
import { mapRelatedArtistsFeaturesToTracks } from '../actions/relatedArtists'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'
import { Button, Rail, Sticky } from 'semantic-ui-react'
import Slider from 'react-viewport-slider';

class UserResults extends React.Component {

  constructor() {
    super()

    this.state = {
      toggleOn: false
    }
  }

  handleClick = () => {
    if (this.state.toggleOn) {
      this.setState({
        toggleOn: false
      })
    } else {
      this.setState({
        toggleOn: true
      })
    }
  }

  logout = () => {
    this.props.logoutUser()
    this.props.history.push('/')
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    if (this.props.relatedArtistsTopTracks.length === 0 && this.props.relatedArtistsAudioFeatures.length === 0) {
      const topEightRelatedArtists = this.props.relatedArtists.slice(0, 8)
      topEightRelatedArtists.map(artist => this.props.addRelatedArtistsTopTracks(this.props.user.id, artist.id))
    }
  }

  componentDidUpdate() {
    if (this.props.relatedArtistsTopTracks.length === 80 && this.props.relatedArtistsAudioFeatures.length === 0) {
      this.props.addRelatedArtistsAudioFeatures(this.props.user.id, this.props.relatedArtistsTopTracks)
    }

    if (this.props.relatedArtistsAudioFeatures.length > 0 && this.props.relatedArtistsTracksWithFeatures.length === 0) {
      this.props.mapRelatedArtistsFeaturesToTracks(this.props.relatedArtistsTopTracks, this.props.relatedArtistsAudioFeatures)
    }
  }

  render() {
    if (!this.state.toggleOn) {
      return (
        <div class="container">
          <LoggedInNavBar />
          <Slider>
            <div itemStyle={{ }}>
              <h1 className='header'>Aggregate Audio Features from Top Tracks(scale of 0-100)</h1>
              <Button className='button' onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>
              <AudioFeaturesChart chartData={Object.values(this.props.aggregateFeaturesOfTopTracks).map(val => val * 2)} />
            </div>
            <div className="tracks" itemStyle={{ }}>
              <TopTracksList />
            </div>
            <div className='playlist' itemStyle={{ }}>
              <h1>Hello World</h1>
            </div>
          </Slider>
        </div>
      )
    } else {
      return (
        <div class="container">
          <LoggedInNavBar />
          <Slider>
            <div itemStyle={{ }}>
              <h1 className='header'>Aggregate Audio Features from Recent Tracks(scale of 0-100)</h1>
              <Button className='button' onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>
              <AudioFeaturesChart chartData={Object.values(this.props.aggregateFeaturesOfRecentTracks).map(val => val * 2)} />
            </div>
            <div className="tracks" itemStyle={{ }}>
              <RecentTracksList />
            </div>
            <div className='playlist' itemStyle={{ }}>
              <h1>Hello World</h1>
            </div>
          </Slider>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logoutUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(UserResults)
