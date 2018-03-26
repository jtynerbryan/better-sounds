import React from 'react';
import { Image, Modal, Header, Grid } from 'semantic-ui-react'

class Artist extends React.Component {

  render() {
    return (
      <div style={{fontFamily: 'Roboto, sans-serif'}}>
        <Grid.Column>
          <Modal trigger={<img className='scale'src={this.props.artist.images[0].url} style={{height: 230, width: 230, marginLeft: '10px', marginRight: '10px', borderRadius: '10px'}} alt={this.props.artist.name} />}>
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
