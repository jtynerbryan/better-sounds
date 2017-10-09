import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './HomeNavBar'
import LoggedInNavBar from './LoggedInNavBar'
import {Container, Header} from 'semantic-ui-react'

class Welcome extends React.Component {

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="welcome">
          <LoggedInNavBar />
          <Container textAlign='center' className='welcome-header'>
          <h1 className="home">Better Sounds</h1>
          <h2>Analyze your Spotify listening habits</h2>
          <h2>Create playlists of new music tailored to your needs</h2>
          </Container>


        </div>
      )
    } else {
      return (
        <div className="welcome">
          <HomeNavBar />
          <h1 className="home">Better Sounds</h1>
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
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures
  }
}


export default connect(mapStateToProps, null)(Welcome)
