import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopTracksList from './TopTracksList'
import RecentTracksList from './RecentTracksList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'
import { Button } from 'semantic-ui-react'



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

  render() {
    console.log(this.props);
    if (!this.state.toggleOn) {
      return (
        <div className="App">
          <h1>{this.props.user.username}s Aggregate Audio Features from Top Tracks(scale of 0-100)</h1>
          <Button onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>
          <Button onClick={this.logout}>Log Out</Button>
          <AudioFeaturesChart chartData={Object.values(this.props.aggregateFeaturesOfTopTracks).map(val => val * 2)} />
          <TopTracksList />
        </div>
      )
    } else {
      return (
        <div className={"App"}>
          <h1>{this.props.user.username}s Aggregate Audio Features from Recently Played Tracks(scale of 0-100)</h1>
          <Button onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>
          <Button onClick={this.logout}>Log Out</Button>
          <AudioFeaturesChart chartData={Object.values(this.props.aggregateFeaturesOfRecentTracks).map(val => val * 2)} />
          <RecentTracksList />
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {

      logoutUser
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
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResults)
