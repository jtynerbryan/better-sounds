import React from 'react';
import { Grid } from 'semantic-ui-react';
import Artist from './Artist';

const TopArtists = (props) => {
  const artists = props.artists.map((artist, index) => {
    return <Artist key={index} artist={artist} />;
  });

  return (
    <div>
      <Grid centered>
        <Grid.Row columns={4} className="artists-container">
          {artists}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default TopArtists;
