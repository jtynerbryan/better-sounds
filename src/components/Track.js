import React from 'react';
import { Image, Modal, Header, Grid } from 'semantic-ui-react'
import AudioFeaturesChart from './AudioFeaturesChart'

class Track extends React.Component {

  render() {
    const chartData = [
      this.props.song.attributes[0].danceability * 100,
      this.props.song.attributes[0].energy * 100,
      this.props.song.attributes[0].speechiness * 100,
      this.props.song.attributes[0].acousticness * 100,
      this.props.song.attributes[0].instrumentalness * 100,
      this.props.song.attributes[0].liveness * 100,
      this.props.song.attributes[0].valence * 100,
    ]

    return (
      <div>
        <div>
          <Grid.Column>
            <Modal trigger={<Image className='scale'src={this.props.song.info.album.images[1].url} size='medium' verticalAlign='middle' />}>
              <Modal.Header>{this.props.song.info.name} by {this.props.song.info.artists[0].name}</Modal.Header>
              <Modal.Content image scrolling>
                <Image
                  size='large'
                  src={this.props.song.info.album.images[1].url}
                  wrapped
                />
                <Modal.Description>
                  <Header>Audio Features</Header>
                </Modal.Description>
                <AudioFeaturesChart chartData={chartData} style={{ paddingBottom: 5 }}/>
              </Modal.Content>
              <Modal.Actions>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </div>
      </div>
    )
  }
}

export default Track
