import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Menu, Segment } from 'semantic-ui-react'


class HomeNavBar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }


  render() {
    return (
      <Segment inverted className="navbar">
        <Menu inverted pointing secondary>
          <Menu.Item name='Home' onClick={() => this.props.history.push('/')} />
          <Menu.Item name='About' onClick={() => this.props.history.push('/about')} />
          <Menu.Item name='Login' href='http://better-sounds-api.herokuapp.com/api/v1/login'/>
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(HomeNavBar)
