import React from 'react';
import Track from './Track'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class TopTracksList extends React.Component {

  render() {
    const mapTracksToFeatures = []
    this.props.tracks.map(track => {
      let attributes = this.props.topTracksAudioFeatures.filter(features => features.id === track.id)
      mapTracksToFeatures.push( {
        info: track,
        attributes: attributes
      })
    })
    return (
      <div>
      <List>
        {mapTracksToFeatures.map((song, index) => <Track key={index} song={song}/>)}
      </List>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures
  }

}

export default connect(mapStateToProps, null)(TopTracksList)
