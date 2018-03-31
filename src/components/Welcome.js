import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './NavBars/HomeNavBar'
import LoggedInNavBar from './NavBars/LoggedInNavBar'
import { Container } from 'semantic-ui-react'

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
          <Container textAlign='center' className='welcome-header'>
          <h1 className="home">Better Sounds</h1>
          <h2>Analyze your Spotify listening habits</h2>
          <h2>Create playlists of new music tailored to your needs</h2>
          </Container>
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
  }
}


export default connect(mapStateToProps, null)(Welcome)
