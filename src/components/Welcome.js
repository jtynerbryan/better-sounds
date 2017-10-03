import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './HomeNavBar'
import LoggedInNavBar from './LoggedInNavBar'

class Welcome extends React.Component {

  render() {
    console.log(this.props)
    if (this.props.isLoggedIn) {
      return (
        <div className="welcome">
          <LoggedInNavBar />
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
