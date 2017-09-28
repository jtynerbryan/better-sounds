import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopTracksList from './TopTracksList'
import RecentTracksList from './RecentTracksList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRelatedArtistsTopTracks } from '../actions/relatedArtists'
import { addRelatedArtistsAudioFeatures } from '../actions/relatedArtists'
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

  componentDidMount() {
      const topFiveRelatedArtists = this.props.relatedArtists.slice(0, 5)
      topFiveRelatedArtists.map(artist => this.props.addRelatedArtistsTopTracks(this.props.user.id, artist.id))
  }

  componentDidUpdate() {
    if (this.props.relatedArtistsTopTracks.length === 50 && this.props.relatedArtistsAudioFeatures.length === 0) {
      this.props.addRelatedArtistsAudioFeatures(this.props.user.id, this.props.relatedArtistsTopTracks)
    }
  }

  render() {
    console.log(this.props)
    if (!this.state.toggleOn) {
      return (
        <div className="App">
          <h1>{this.props.user.username}s Aggregate Audio Features from Top Tracks(scale of 0-100)</h1>
          <Button onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>
          <AudioFeaturesChart chartData={this.props.aggregateFeaturesOfTopTracks} />
          <TopTracksList />
        </div>
      )
    } else {
      return (
        <div className={"App"}>
          <h1>{this.props.user.username}s Aggregate Audio Features from Recently Played Tracks(scale of 0-100)</h1>
          <Button onClick={this.handleClick}>Toggle Top/Recent Audio Features</Button>

        </div>
      )
    }
  }
}

// <AudioFeaturesChart chartData={this.props.aggregateFeaturesOfRecentTracks} />
// <RecentTracksList />

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addRelatedArtistsTopTracks,
      addRelatedArtistsAudioFeatures
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
