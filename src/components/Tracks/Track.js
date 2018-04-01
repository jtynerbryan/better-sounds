import React from 'react';
import { Image, Modal, Header, Grid } from 'semantic-ui-react'
import AudioFeaturesChart from '../AudioFeaturesChart'

const Track = (props) => {
  const chartData = [
    props.song.attributes[0].danceability * 100,
    props.song.attributes[0].energy * 100,
    props.song.attributes[0].speechiness * 100,
    props.song.attributes[0].acousticness * 100,
    props.song.attributes[0].instrumentalness * 100,
    props.song.attributes[0].liveness * 100,
    props.song.attributes[0].valence * 100,
  ]

  return (
    <div>
      <Grid.Column>
        <Modal trigger={<Image className='scale'src={props.song.info.album.images[1].url} size='medium' verticalAlign='middle' />}>
          <Modal.Header>{props.song.info.name} by {props.song.info.artists[0].name}</Modal.Header>
          <Modal.Content image scrolling>
            <Image size='large' src={props.song.info.album.images[1].url} wrapped />
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
  )
}

export default Track
