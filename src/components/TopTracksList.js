import React from 'react';
import Track from './Track'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class TopTracksList extends React.Component {

  render() {
    const mapTracksToFeatures = []
    this.props.topTracks.map(track => {
      let attributes = this.props.topTracksAudioFeatures.filter(features => features.id === track.id)
      mapTracksToFeatures.push( {
        info: track,
        attributes: attributes
      })
    })
    return (
      <div>
      <Grid centered>
        <Grid.Row columns={4}>
          {mapTracksToFeatures.map((song, index) => <Track key={index} song={song}/>)}
        </Grid.Row>
      </Grid>
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
