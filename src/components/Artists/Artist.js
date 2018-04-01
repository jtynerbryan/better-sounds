import React from 'react'
import { Image, Modal, Grid } from 'semantic-ui-react'

const Artist = (props) => {
  return (
    <div style={{fontFamily: 'Roboto, sans-serif'}}>
      <Grid.Column>
        <Modal trigger={<img className='scale artist-modal'src={props.artist.images[0].url} alt={props.artist.name} />}>
          <Modal.Header style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#1b1c1d', color: '#fff', borderRadius: 0 }}>{props.artist.name}</Modal.Header>
          <Modal.Content image scrolling style={{ borderRadius: '3px' }}>
            <Image size='medium' src={props.artist.images[0].url} wrapped />
            <Modal.Description>
              <h3>Followers: {props.artist.followers.total}</h3>
              <h3>Genres: {props.artist.genres.join(', ')}</h3>
              <a href={props.artist.external_urls.spotify} target="_blank"><h3>Spotify Profile</h3></a>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    </div>
  )
}

export default Artist
