import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser }  from '../../actions/auth'

class LoggedInNavBar extends Component {

  logoutUser = () => {
    this.props.history.push('/')
    this.props.logoutUser()
  }

  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='Home' onClick={() => this.props.history.push('/')} />
          <Menu.Item name='Listening Profile' onClick={ () => this.props.history.push('/listening-profile')}/>
          <Menu.Item name='Playlists' onClick={ () => this.props.history.push('/playlists')}/>
          <a href={this.props.user.spotify_url}  target="_blank"><Menu.Item name='Spotify Web Player' /></a>
          <Menu.Item name='Logout' onClick={this.logoutUser}/>
          <Menu.Item position="right" name='GitHub' href='https://github.com/jtynerbryan' target="_blank"/>
        </Menu>
      </Segment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInNavBar))
