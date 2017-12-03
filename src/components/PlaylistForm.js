import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addPlaylist } from '../actions/playlists'
import { clearAllRelatedArtistsData } from '../actions/relatedArtists'
import { Form, Header, Message, Modal, Button } from 'semantic-ui-react'


class PlaylistForm extends React.Component {

  state = {
    playlistTitle: ''
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
      this.props.history.push('/refresh-spotify-data')
    }
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  render() {
    const { value } = this.state
    return (
      <Modal trigger={<Button>Create a Playlist</Button>}>
        <div id="form">
        <Message>
        <Header>Create your own Playlist</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input label='Playlist Name' placeholder='My Playlist' onChange={this.handleTitle} />
          </Form.Group>
          <Form.Group >
            <span>
            <label>Choose an audio feature and your playlist will be optimized for maximum (insert feature here)</label>
            <Form.Radio label='Danceablity' value='danceability' checked={value === 'danceability'} onChange={this.handleChange} />
            <Form.Radio label='Energy' value='energy' checked={value === 'energy'} onChange={this.handleChange} />
            <Form.Radio label='Acousticness' value='acousticness' checked={value === 'acousticness'} onChange={this.handleChange} />
            <Form.Radio label='Instrumentalness' value='instrumentalness' checked={value === 'instrumentalness'} onChange={this.handleChange} />
            <Form.Radio label='Liveness' value='liveness' checked={value === 'liveness'} onChange={this.handleChange} />
            <Form.Radio label='Valence' value='valence' checked={value === 'valence'} onChange={this.handleChange} />
            </span>
          </Form.Group>
          <Form.Button id='submit-button'>Submit</Form.Button>
        </Form>
        </Message>
        </div>
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
    recentTracks: state.tracks.recentTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    aggregateFeaturesOfRecentTracks: state.audioFeatures.aggregateFeaturesOfRecentTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures,
    playlists: state.playlists.playlists
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistForm))
