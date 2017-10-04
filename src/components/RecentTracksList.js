import React from 'react'
import { connect } from 'react-redux'
import Track from './Track'
import { Grid } from 'semantic-ui-react'


class RecentTracksList extends React.Component {

  render() {
    const mapTracksToFeatures = []
    this.props.recentTracks.map(song => {
      let attributes = this.props.recentTracksAudioFeatures.filter(features => features.id === song.track.id)
      mapTracksToFeatures.push( {
        info: song.track,
        attributes: attributes
      })
    })
    return (
      <div>
      <Grid>
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
    recentTracks: state.tracks.recentTracks,
    recentTracksAudioFeatures: state.audioFeatures.recentTracksAudioFeatures
  }

}

export default connect(mapStateToProps, null)(RecentTracksList)
