import React from 'react';
import { Divider, Image, Modal, List } from 'semantic-ui-react'

class Track extends React.Component {

  render() {
    console.log(this.props.track)
    return (
      <div>
        <List.Item>
        <Image src={this.props.track.album.images[2].url} size='tiny' verticalAlign='middle' /> <span>{this.props.track.name} by {this.props.track.artists[0].name}</span>
        <Divider />
        </List.Item>
      </div>
    )
  }
}

export default Track
