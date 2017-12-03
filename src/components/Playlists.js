import React from 'react'
import PlaylistForm from './PlaylistForm'
import PlaylistGrid from './PlaylistGrid'

class Playlists extends React.Component {

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <h1>Playlists</h1>
      <PlaylistForm/>
      <PlaylistGrid/>
    )
  }

}

export default Playlists
