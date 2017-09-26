import React from 'react';
import Track from './Track'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class TracksList extends React.Component {

  render() {
    return (
      <div>
      <List divided relaxed>
      {this.props.topTracks.map(track => { <Track />})}
      </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    recentTracks: state.tracks.recentTracks
  }

}

export default connect(mapStateToProps, null)(TracksList)
