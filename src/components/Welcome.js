import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './NavBars/HomeNavBar'
import LoggedInNavBar from './NavBars/LoggedInNavBar'
import { Container } from 'semantic-ui-react'

const Welcome = (props) => {
  return (
    <div className="welcome">
      { props.isLoggedIn ? <LoggedInNavBar /> : <HomeNavBar /> }
      <Container textAlign='center' className='welcome-header'>
      <h1 className="home">Better Sounds</h1>
      <h2>Analyze your Spotify listening habits</h2>
      <h2>Create playlists of new music tailored to your needs</h2>
      </Container>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}


export default connect(mapStateToProps, null)(Welcome)
