import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './HomeNavBar'
import LoggedInNavBar from './LoggedInNavBar'
import { Container, List, Grid } from 'semantic-ui-react'

class About extends React.Component {

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className='about'>
          <LoggedInNavBar/>
          <h1>How does Better Sounds work?</h1>
          <Grid columns={2} textAlign='center' className='about-content'>
            <Grid.Row >
              <Grid.Column>
                <Container >
                  <h3>To give you an overview of your Spotify listening, Better Sounds accesses:</h3>
                  <List bulleted className='about-list'>
                    <List.Item>Top Artists</List.Item>
                    <List.Item>Top Tracks</List.Item>
                    <List.Item>Recently Played Tracks</List.Item>
                    <List.Item>Artists Related to your Top Artists</List.Item>
                    <List.Item>Audio Features</List.Item>
                  </List>
                </Container>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
      )
    } else {
      return (
        <div className='about'>
          <HomeNavBar/>
          <Container textAlign='center' className='about-content'>
            <h1>How does Better Sounds work?</h1>
            <h3>via Spotifys API, Better Sounds is able to access and manipulate much of your Spotify data, including:</h3>
            <List bulleted className='about-list'>
              <List.Item>Top Artists</List.Item>
              <List.Item>Top Tracks</List.Item>
              <List.Item>Recently Played Tracks</List.Item>
              <List.Item>Artists Related to your Top Artists</List.Item>
              <List.Item>Audio Features</List.Item>
            </List>
          </Container>
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(About)
