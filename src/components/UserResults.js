import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopTracksList from './TopTracksList'
import RecentTracksList from './RecentTracksList'
import { connect } from 'react-redux'
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
          <AudioFeaturesChart chartData={this.props.aggregateFeaturesOfRecentTracks} />
          <RecentTracksList />
        </div>
      )
    }
  }
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

export default connect(mapStateToProps, null)(UserResults)
