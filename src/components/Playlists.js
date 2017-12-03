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
      <div>
        <h1>Playlists</h1>
        <PlaylistForm/>
        <PlaylistGrid/>
      </div>
    )
  }

}

export default Playlists
