import React from 'react';
import { Modal, Button, Form, Select, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
var uniq = require('lodash.uniq');

class NewPlaylistForm extends React.Component {

  state = {
    artists: [],
    playlistTitle: ''
  }

  handleArtistsChange = (e, { value }) => this.setState({ artists: value })

  componentDidUpdate() {

  }

  render() {
    // create options for form select elements
    let artistOptions = this.props.topArtists.map(artist => {
      return { text: artist.name, value: artist.name }
    })

    let genres = uniq(this.props.topArtists.map(artist => artist.genres).reduce((a, b) => a.concat(b)))

    let genreOptions = genres.map(genre => {
      return { text: genre, value: genre }
    })

    console.log(genres);

    return (
      <Modal trigger={<Button style={{fontFamily: 'Roboto, sans-serif'}}>Create a Playlist</Button>}>
        <Modal.Header style={{}}>New Playlist</Modal.Header>
        <div style={{height: '500px'}}>
          <Form>
            <Form.Group widths='equal' style={{width: '90%', margin: 'auto', marginTop: '20px'}}>
              <Form.Field control={Input} placeholder='Playlist Name' />
              <Form.Field control={Select} onChange={this.handleArtistsChange} placeholder='Select up to 5 Artists to base your playlist on' fluid multiple selection options={artistOptions} />
              <Form.Field control={Select} onChange={this.handleArtistsChange} placeholder='Select up to 5 Genres to base your playlist on' fluid multiple selection options={genreOptions} />
            </Form.Group>
          </Form>
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
