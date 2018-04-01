import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const HomeNavBar = (props) => {
  return (
    <Segment inverted className="navbar">
      <Menu inverted pointing secondary>
        <Menu.Item name='Login' href='https://better-sounds-api.herokuapp.com/api/v1/login'/>
        <Menu.Item position="right" name='GitHub' href='https://github.com/jtynerbryan' target="_blank"/>
      </Menu>
    </Segment>
  )
}

export default HomeNavBar
