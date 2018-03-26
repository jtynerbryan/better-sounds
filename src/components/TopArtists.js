import React from 'react';
import { Grid } from 'semantic-ui-react';
import Artist from './Artist';

const TopArtists = (props) => {
    let artists = props.artists.map((artist, index) => {
      return (
        <Artist key={index} artist={artist}/>
      )
    })
    console.log(props);
    return (
      <div>
        <Grid centered>
          <Grid.Row columns={4} style={{marginTop: 0}}>
            {artists}
          </Grid.Row>
        </Grid>
      </div>
    )
}

export default TopArtists
