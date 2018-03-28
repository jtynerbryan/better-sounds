import React from 'react';
import { Modal, Button, Form, Select, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
var uniq = require('lodash.uniq');

const audioFeatureNums = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

const audioFeatureOptions = audioFeatureNums.map(num => {
  return {text: num, value: num}
})

class NewPlaylistForm extends React.Component {

  state = {
    artists: [],
    genres: [],
    playlistTitle: '',
    audioFeatures: []
  }

  handleTitleChange = (e, { value }) => this.setState({ playlistTitle: value})

  handleArtistsChange = (e, { value }) => this.setState({ artists: value })

  handleGenreChange = (e, { value }) => this.setState({ genres: value })

  handleChange = (e, el) => this.setState({ audioFeatures: [...this.state.audioFeatures, { [el.name]: el.value }] })

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.artists.length === 0) {
      alert('Please select some Artists')
    } else if (this.state.playlistTitle === '') {
      alert('Please name your playlist')
    } else if (this.state.genres.length === 0) {
      alert('Please select some Genres')
    } else {
      console.log(this.state);
    }
  }

  render() {
    // create artist/genre options for form select elements
    const artistOptions = this.props.topArtists.map(artist => {
      return { text: artist.name, value: artist.name }
    })

    const genres = uniq(this.props.topArtists.map(artist => artist.genres).reduce((a, b) => a.concat(b)))

    const genreOptions = genres.map(genre => {
      return { text: genre, value: genre }
    })

    return (
      <Modal style={{backgroundColor: '#FAFAFA'}} trigger={<Button style={{fontFamily: 'Roboto, sans-serif'}}>Create a Playlist</Button>}>
        <Modal.Header style={{backgroundColor: '#1b1c1d', color: '#fff', borderRadius: 0}}>New Playlist</Modal.Header>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal' style={{width: '90%', margin: 'auto', marginTop: '20px'}}>
              <Form.Field control={Input} onChange={this.handleTitleChange} placeholder='my playlist' label='Playlist Name' />
              <Form.Field control={Select} onChange={this.handleArtistsChange} label='Artists' placeholder='Select up to 5 Artists to base your playlist on' fluid multiple selection options={artistOptions} />
              <Form.Field control={Select} onChange={this.handleGenreChange} label='Genres' placeholder='Select up to 5 Genres to base your playlist on' fluid multiple selection options={genreOptions} />
            </Form.Group>
            <Form.Group  widths='equal' style={{width: '90%', margin: 'auto', marginTop: '40px'}}>
              <Form.Field name='acousticness' onChange={this.handleChange} fluid control={Select} label='target acousticness' options={audioFeatureOptions}></Form.Field>
              <Form.Field name='danceability' onChange={this.handleChange} fluid control={Select} label='target danceability' options={audioFeatureOptions}></Form.Field>
              <Form.Field name='energy' onChange={this.handleChange} fluid control={Select} label='target energy' options={audioFeatureOptions}></Form.Field>
              <Form.Field name='instrumentalness' onChange={this.handleChange} fluid control={Select} label='target instrumentalness' options={audioFeatureOptions}></Form.Field>
            </Form.Group>
            <Form.Group  widths='equal' style={{width: '90%', margin: 'auto', marginTop: '40px'}}>
              <Form.Field name='liveness' onChange={this.handleChange} fluid control={Select} label='target liveness' options={audioFeatureOptions}></Form.Field>
              <Form.Field name='speechiness' onChange={this.handleChange} fluid control={Select} label='target speechiness' options={audioFeatureOptions}></Form.Field>
              <Form.Field name='valence' onChange={this.handleChange} fluid control={Select} label='valence' options={audioFeatureOptions}></Form.Field>
            </Form.Group>
            <Button type="submit" style={{marginTop: '40px'}}>Submit</Button>
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
