import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/auth'

class LoggedInNavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logoutUser = () => {
    this.props.logoutUser()
  }

  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted className="navbar">
        <Menu inverted pointing secondary>
          <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} href="http://localhost:3001/"/>
          <Menu.Item name='Logout' active={activeItem === 'messages'} onClick={this.logoutUser}/>
          <Menu.Item name='About' active={activeItem === 'messages'} onClick={this.handleItemClick} />
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

export default connect(null, mapDispatchToProps)(LoggedInNavBar)
