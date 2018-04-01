import React from 'react';
import Track from './Track'
import { Grid } from 'semantic-ui-react'

const TopTracksList = (props) => {
  const mapTracksToFeatures = props.topTracks.map(track => {
    const attributes = props.topTracksAudioFeatures.filter(features => features.id === track.id)
    return { info: track, attributes: attributes }
  })

  return (
    <Grid centered>
      <Grid.Row columns={4}>
        {mapTracksToFeatures.map((song, index) => <Track key={index} song={song} />)}
      </Grid.Row>
    </Grid>
  )
}

export default TopTracksList
