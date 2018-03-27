import React from 'react';
import { Modal, Button, Header, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NewPlaylistForm extends React.Component {

  render() {
    let artistOptions = this.props.topArtists.map(artist => {
      return {
        text: artist.name,
        value: artist.name
      }
    })

    return (
        <Modal trigger={<Button style={{fontFamily: 'Roboto, sans-serif'}}>Create a Playlist</Button>}>
          <Modal.Header style={{}}>New Playlist</Modal.Header>
          <div style={{height: '500px', backgroundColor: ''}}>
            <form>
              <Dropdown placeholder='Select up to 5 Artists' fluid multiple selection options={artistOptions} style={{width: '50%', marginTop: '10px', marginLeft: '5px'}}/>
            </form>
          </div>
        </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, null)(NewPlaylistForm)
