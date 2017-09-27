import React from 'react';
import { Divider, Image, Modal, List, Button, Header } from 'semantic-ui-react'
import BarChart from './BarChart'

class Track extends React.Component {

  render() {
    return (
      <div>
        <List.Item>
        <Image src={this.props.song.info.album.images[2].url} size='tiny' verticalAlign='middle' />
        <span>{this.props.song.info.name} by {this.props.song.info.artists[0].name}</span>
        <Modal trigger={<Button>Audio Features</Button>}>
          <Modal.Header>{this.props.song.info.name} by {this.props.song.info.artists[0].name}</Modal.Header>
          <Modal.Content image scrolling>
            <Image
              size='medium'
              src={this.props.song.info.album.images[1].url}
              wrapped
            />
            <Modal.Description>
              <Header>Audio Features</Header>
              <BarChart chartData={this.props.song.attributes} style={{ paddingBottom: 5 }}/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
        <Divider />
        </List.Item>
      </div>
    )
  }
}

export default Track
