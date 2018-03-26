import React from 'react';
import { Image, Modal, Header, Grid } from 'semantic-ui-react'

class Artist extends React.Component {

  render() {
    return (
      <div>
        <Grid.Column>
          <Modal trigger={<img className='scale'src={this.props.artist.images[0].url} style={{height: 250, width: 250, margin: '6px'}} />}>
            <Modal.Header>{this.props.artist.name}</Modal.Header>
          </Modal>
        </Grid.Column>
      </div>
    )
  }
}

export default Artist
