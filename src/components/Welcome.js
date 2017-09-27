import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class Welcome extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <img className="welcome-image"src='./vinyl.svg' alt="app logo"/>
        <br></br>
        <Button primary as="a" href="http://localhost:3000/api/v1/login">Log In</Button>
      </div>
    )
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
