import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './HomeNavBar'
import LoggedInNavBar from './LoggedInNavBar'
import {Container, Header} from 'semantic-ui-react'

class Welcome extends React.Component {

  render() {
    console.log(this.props)
    if (this.props.isLoggedIn) {
      return (
        <div className="welcome">
          <LoggedInNavBar />
          <Container textAlign='center' className='welcome-header'>
            <Header size='huge'>Blah Blah Blah App Title</Header>

          </Container>
        </div>
      )
    } else {
      return (
        <div className="welcome">
          <HomeNavBar />
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
