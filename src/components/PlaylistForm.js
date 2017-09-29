import React from 'react'
import { connect } from 'react-redux'
import bindActionCreators from 'redux'
import { Form, Header } from 'semantic-ui-react'


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
    if (this.state.playlistTitle === '' || this.state.value === '') {
      alert("Hey you")
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
      <div>
      <Header>Create your own playlist</Header>
      <Form onSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}


export default connect(mapStateToProps, null)(PlaylistForm)
