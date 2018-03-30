import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addPlaylist } from '../actions/playlists'
import { clearAllRelatedArtistsData } from '../actions/relatedArtists'
import { Form, Modal, Button, Select } from 'semantic-ui-react'

const audioFeatures = ['Acousticness', 'Danceability', 'Energy', 'Instrumentalness', 'Liveness', 'Speechiness', 'Valence']

class PlaylistForm extends React.Component {

  state = {
    playlistTitle: ''
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleTitle = (e) => {
    this.setState({
      playlistTitle: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.playlistTitle === '' || !this.state.value) {
      alert("Please enter a title and select and audio feature")
    } else {
      this.props.addPlaylist(this.state.playlistTitle, this.state.value, this.props.relatedArtistsTracksWithFeatures, this.props.user.id)
      this.props.clearAllRelatedArtistsData()
      this.props.history.push('/re-loading')
    }
  }

  render() {
    const audioFeatureOptions = audioFeatures.map(feature => {
      return { text: feature, value: feature }
    })

    return (
      <Modal style={{backgroundColor: '#FAFAFA'}} trigger={<Button style={{fontFamily: 'Roboto, sans-serif'}}>Create a Playlist</Button>}>
        <Modal.Header style={{backgroundColor: '#1b1c1d', color: '#fff', borderRadius: 0}} >New Playlist</Modal.Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal' style={{width: '40%', margin: 'auto', marginTop: '20px'}} >
            <Form.Input placeholder='My Playlist' label='Playlist Name' onChange={this.handleTitle} />
          </Form.Group>
          <Form.Group widths='equal' style={{width: '50%', margin: 'auto', marginTop: '20px'}}>
            <Form.Input control={Select} options={audioFeatureOptions} label='Select an audio feature to appear prominently in your playlist' onChange={this.handleChange} />
          </Form.Group>
          <Form.Button id='submit-button' style={{marginTop: '20px'}}>Submit</Form.Button>
        </Form>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addPlaylist,
      clearAllRelatedArtistsData
    }
  ,dispatch)
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistForm))
