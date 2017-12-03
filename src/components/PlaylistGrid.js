import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PlaylistGrid extends React.Component {

  render() {
    const playlists = this.props.playlists.map((playlist, index) => {
      return <iframe key={index} title={playlist.spotify_id} src={`https://open.spotify.com/embed?uri=spotify:user:${this.props.user.username}:playlist:${playlist.spotify_id}`} width="300" height="380" frameBorder="0"></iframe>
    })

    if (this.props.playlists.length === 0) {
      return (
        <div className="playlist-2">
          <h2>You haven't created any Playlists yet</h2>
        </div>
      )
    } else {
      return (
        <div>
          <Grid centered>
            <Grid.Row columns={4}>
            {playlists}
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, null)(PlaylistGrid)
