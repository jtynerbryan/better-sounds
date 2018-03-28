import React from 'react'
import PlaylistForm from './PlaylistForm'
import NewPlaylistForm from './NewPlaylistForm'
import PlaylistGrid from './PlaylistGrid'
import LoggedInNavBar from './LoggedInNavBar'
import { connect } from 'react-redux'

class Playlists extends React.Component {

  render() {

    if (this.props.playlists.length > 0) {
      return (
        <div className="playlist">
          <LoggedInNavBar />
          <h1 style={{fontFamily: 'Roboto, sans-serif', fontStyle: 'italic'}}>Playlists</h1>
          <PlaylistForm />
          <PlaylistGrid/>
        </div>
      )
    } else {
      return (
        <div className="empty-playlist">
          <LoggedInNavBar />
          <h1>Playlists</h1>
          <PlaylistForm/>
          <PlaylistGrid/>
        </div>
      )
    }

  }

}

function mapStateToProps(state) {
  return {
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, null)(Playlists)
