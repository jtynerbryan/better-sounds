import React from 'react';
import { Image, Modal, Grid } from 'semantic-ui-react'

class Artist extends React.Component {

  render() {
    return (
      <div style={{fontFamily: 'Roboto, sans-serif'}}>
        <Grid.Column>
          <Modal trigger={<img className='scale artist-modal'src={this.props.artist.images[0].url} alt={this.props.artist.name} />}>
            <Modal.Header style={{fontFamily: 'Roboto, sans-serif'}}>{this.props.artist.name}</Modal.Header>
            <Modal.Content image scrolling>
              <Image
                size='medium'
                src={this.props.artist.images[0].url}
                wrapped
                />
              <Modal.Description>
                <h3>Followers: {this.props.artist.followers.total}</h3>
                <h3>Genres: {this.props.artist.genres.join(', ')}</h3>
                <a href={this.props.artist.external_urls.spotify} target="_blank"><h3>Spotify Profile</h3></a>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </div>
    )
  }
}

export default Artist
