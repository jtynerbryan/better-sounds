import React from 'react'
import { Form } from 'semantic-ui-react'

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

  render() {
    console.log(this.state);
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Playlist Name' placeholder='My Playlist' onChange={this.handleTitle} />
        </Form.Group>
        <Form.Group inline>
          <label>Choose an audio feature to be the theme of your playlist</label>
          <Form.Radio label='Danceablity' value='danceability' checked={value === 'danceability'} onChange={this.handleChange} />
          <Form.Radio label='Energy' value='energy' checked={value === 'energy'} onChange={this.handleChange} />
          <Form.Radio label='Speechiness' value='speechiness' checked={value === 'speechiness'} onChange={this.handleChange} />
          <Form.Radio label='Acousticness' value='acousticness' checked={value === 'acousticness'} onChange={this.handleChange} />
          <Form.Radio label='Instrumentalness' value='instrumentalness' checked={value === 'instrumentalness'} onChange={this.handleChange} />
          <Form.Radio label='Liveness' value='liveness' checked={value === 'liveness'} onChange={this.handleChange} />
          <Form.Radio label='Valence' value='valence' checked={value === 'valence'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default PlaylistForm
