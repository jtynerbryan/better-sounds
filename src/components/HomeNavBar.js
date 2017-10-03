import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class HomeNavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted className="navbar">
        <Menu inverted pointing secondary>
          <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} href="http://localhost:3001/"/>
          <Menu.Item name='Login' active={activeItem === 'messages'} onClick={this.handleItemClick} href="http://localhost:3000/api/v1/login"/>
          <Menu.Item name='About' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}
